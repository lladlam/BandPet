// src/common/js/comm-service.js
// 统一网络通信服务：优先使用设备原生 fetch，无法使用时回退到 AstroBox FetchBridge。
//
// 注意：部分设备（例如小米手环 9 Pro）的实际 fetch 支持情况与公开能力表不一致，
// 因此不能依赖机型名单，也不能读取 device.getInfo() 中不存在的 fetchSupport 字段。
// 本服务会先对目标地址执行一次无副作用的 HEAD 探测，再选择传输方式。

import fetch from '@system.fetch';
import interconnect from '@system.interconnect';

const TAG_HANDSHAKE = '__hs__';
const TAG_FETCH = 'fetch';
const TAG_FETCH_CHUNK = 'fetch-chunk';
const TAG_FETCH_ACK = 'fetch-ack';

const LOCAL_CAPS = {
  version: 3,
  chunk: true,
  maxChunkSize: 4096,
  encodings: ['text', 'base64', 'hex'],
  compressions: ['none'],
  ack: true,
  ackWindow: 4
};

const NATIVE_PROBE_RETRY_INTERVAL = 5 * 60 * 1000;
const BRIDGE_REQUEST_TIMEOUT = 30000;

class CommService {
  constructor() {
    this._connect = null;
    this._pendingRequests = new Map();
    this._chunkBuffers = new Map();
    this._requestId = 0;
    this._initialized = false;
    this._handshakeCount = -1;
    this._nativeFetchState = 'unknown';
    this._nativeProbeAt = 0;
    this._activeTransport = 'unknown';
  }

  async init() {
    if (this._initialized) return;

    this._initialized = true;
    this._initInterconnect();
  }

  _initInterconnect() {
    try {
      this._connect = interconnect.instance();

      this._connect.onopen = (data) => {
        console.log('[CommService] Interconnect 已连接');
        this._startHandshake();
      };

      this._connect.onclose = (data) => {
        console.log('[CommService] Interconnect 已断开:', data);
        this._handshakeCount = -1;
      };

      this._connect.onerror = (data) => {
        console.error('[CommService] Interconnect 错误:', data);
      };

      this._connect.onmessage = (data) => {
        this._handleMessage(data);
      };

      // 注册事件时连接可能已经建立，主动检查一次。
      this._connect.getReadyState({
        success: (data) => {
          if (data.status === 1) {
            this._startHandshake();
          }
        },
        fail: () => {}
      });

      console.log('[CommService] FetchBridge 初始化完成');
    } catch (error) {
      this._connect = null;
      console.error('[CommService] FetchBridge 初始化失败:', error);
    }
  }

  _startHandshake() {
    if (!this._connect || this._handshakeCount >= 1) return;

    this._sendMessage(TAG_HANDSHAKE, {
      count: 0,
      caps: LOCAL_CAPS
    });
  }

  _sendMessage(tag, payload, onFail) {
    if (!this._connect) {
      if (onFail) onFail(new Error('FetchBridge 未初始化'));
      return;
    }

    const message = { tag, ...payload };
    this._connect.send({
      data: JSON.stringify(message),
      success: () => {},
      fail: (data, code) => {
        const detail = data && data.data ? data.data : data;
        const error = new Error(`Interconnect 发送失败: ${detail || code}`);
        console.error('[CommService] 发送失败:', error.message);
        if (onFail) onFail(error);
      }
    });
  }

  _handleMessage(event) {
    try {
      const raw = event && event.data !== undefined ? event.data : event;
      const message = typeof raw === 'string' ? JSON.parse(raw) : raw;
      const tag = message && message.tag;

      switch (tag) {
        case TAG_HANDSHAKE:
          this._handleHandshake(message);
          break;
        case TAG_FETCH:
          this._handleFetchResponse(message);
          break;
        case TAG_FETCH_CHUNK:
          this._handleFetchChunk(message);
          break;
        default:
          console.log(`[CommService] 忽略未知消息: ${tag}`);
      }
    } catch (error) {
      console.error('[CommService] 解析消息失败:', error);
    }
  }

  _handleHandshake(message) {
    const count = Number(message.count || 0);
    console.log(`[CommService] 收到握手: count=${count}`);

    if (count < 2) {
      this._sendMessage(TAG_HANDSHAKE, {
        count: count + 1,
        caps: LOCAL_CAPS
      });
    }

    if (count >= 1) {
      this._handshakeCount = count;
      console.log('[CommService] FetchBridge 握手完成');
    }
  }

  _handleFetchResponse(message) {
    const id = message.id;
    const resp = message.resp;

    if (!id || !resp || !this._pendingRequests.has(id)) return;

    if (resp.chunked) {
      const chunkCount = Number(resp.chunkCount || 0);
      if (chunkCount <= 0) {
        this._rejectPending(id, new Error('FetchBridge 返回了无效分片数量'));
        return;
      }

      this._chunkBuffers.set(id, {
        chunks: new Array(chunkCount).fill(null),
        totalChunks: chunkCount,
        receivedCount: 0,
        ackEnabled: resp.ack === true,
        ackFrontier: 0,
        encoding: resp.bodyEncoding || 'base64',
        compression: resp.compression || 'none',
        raw: resp.raw === true,
        ok: resp.ok === true,
        status: Number(resp.status || 0),
        statusText: resp.statusText || '',
        headers: resp.headers || {}
      });

      console.log(`[CommService] 开始接收分片: ${chunkCount} 块`);
      return;
    }

    try {
      const body = this._decodeWireBody(
        resp.body || '',
        resp.bodyEncoding,
        resp.raw === true,
        resp.compression || 'none'
      );
      this._finishPendingResponse(id, resp, body);
    } catch (error) {
      this._rejectPending(id, error);
    }
  }

  _handleFetchChunk(message) {
    const id = message.id;
    const seq = Number(message.seq);

    if (!id || !this._chunkBuffers.has(id)) return;

    const buffer = this._chunkBuffers.get(id);
    if (seq < 0 || seq >= buffer.totalChunks) return;

    if (buffer.chunks[seq] === null) {
      buffer.chunks[seq] = message.data || '';
      buffer.receivedCount++;
    }

    while (
      buffer.ackFrontier < buffer.totalChunks &&
      buffer.chunks[buffer.ackFrontier] !== null
    ) {
      buffer.ackFrontier++;
    }

    if (buffer.ackEnabled) {
      this._sendMessage(TAG_FETCH_ACK, {
        id,
        ack: buffer.ackFrontier
      });
    }

    if (buffer.receivedCount < buffer.totalChunks) return;

    this._chunkBuffers.delete(id);

    try {
      if (buffer.compression !== 'none') {
        throw new Error(`暂不支持 FetchBridge 压缩格式: ${buffer.compression}`);
      }

      let allBytes = [];
      for (let i = 0; i < buffer.chunks.length; i++) {
        const bytes = this._decodeWireToBytes(buffer.chunks[i], buffer.encoding);
        allBytes = allBytes.concat(bytes);
      }

      const body = buffer.raw ? allBytes : this._utf8Decode(allBytes);
      this._finishPendingResponse(id, buffer, body);
    } catch (error) {
      this._rejectPending(id, error);
    }
  }

  _finishPendingResponse(id, response, body) {
    if (!this._pendingRequests.has(id)) return;

    const parsedBody = typeof body === 'string' ? this._parseJSON(body) : body;
    const ok = response.ok === true || (
      Number(response.status) >= 200 && Number(response.status) < 300
    );

    if (!ok) {
      let detail = `HTTP ${response.status || 0}`;
      if (parsedBody && typeof parsedBody === 'object') {
        detail = parsedBody.error || parsedBody.message || detail;
      }
      this._rejectPending(id, new Error(detail));
      return;
    }

    const request = this._pendingRequests.get(id);
    this._pendingRequests.delete(id);
    request.resolve(parsedBody);
  }

  _rejectPending(id, error) {
    if (!this._pendingRequests.has(id)) return;

    const request = this._pendingRequests.get(id);
    this._pendingRequests.delete(id);
    this._chunkBuffers.delete(id);
    request.reject(error);
  }

  _decodeWireBody(encoded, encoding, raw, compression) {
    if (compression && compression !== 'none') {
      throw new Error(`暂不支持 FetchBridge 压缩格式: ${compression}`);
    }

    const inferredEncoding = encoding || (raw ? 'base64' : 'text');
    const bytes = this._decodeWireToBytes(encoded, inferredEncoding);
    return raw ? bytes : this._utf8Decode(bytes);
  }

  _decodeWireToBytes(encoded, encoding) {
    if (!encoded) return [];

    switch (encoding) {
      case 'text':
        return this._utf8Encode(encoded);
      case 'base64':
        return this._base64ToBytes(encoded);
      case 'hex':
        return this._hexToBytes(encoded);
      default:
        throw new Error(`未知 FetchBridge 编码: ${encoding}`);
    }
  }

  _base64ToBytes(input) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    const clean = String(input).replace(/\s/g, '');
    const bytes = [];
    let buffer = 0;
    let bits = 0;

    for (let i = 0; i < clean.length; i++) {
      const char = clean.charAt(i);
      if (char === '=') break;

      const value = alphabet.indexOf(char);
      if (value < 0) continue;

      buffer = (buffer << 6) | value;
      bits += 6;

      if (bits >= 8) {
        bits -= 8;
        bytes.push((buffer >> bits) & 0xff);
      }
    }

    return bytes;
  }

  _hexToBytes(input) {
    const clean = String(input).replace(/\s/g, '');
    const bytes = [];

    for (let i = 0; i + 1 < clean.length; i += 2) {
      const value = parseInt(clean.substr(i, 2), 16);
      if (!isNaN(value)) bytes.push(value);
    }

    return bytes;
  }

  _utf8Encode(input) {
    const bytes = [];

    for (let i = 0; i < input.length; i++) {
      let code = input.charCodeAt(i);

      if (code >= 0xd800 && code <= 0xdbff && i + 1 < input.length) {
        const next = input.charCodeAt(i + 1);
        if (next >= 0xdc00 && next <= 0xdfff) {
          code = 0x10000 + ((code - 0xd800) << 10) + (next - 0xdc00);
          i++;
        }
      }

      if (code <= 0x7f) {
        bytes.push(code);
      } else if (code <= 0x7ff) {
        bytes.push(0xc0 | (code >> 6));
        bytes.push(0x80 | (code & 0x3f));
      } else if (code <= 0xffff) {
        bytes.push(0xe0 | (code >> 12));
        bytes.push(0x80 | ((code >> 6) & 0x3f));
        bytes.push(0x80 | (code & 0x3f));
      } else {
        bytes.push(0xf0 | (code >> 18));
        bytes.push(0x80 | ((code >> 12) & 0x3f));
        bytes.push(0x80 | ((code >> 6) & 0x3f));
        bytes.push(0x80 | (code & 0x3f));
      }
    }

    return bytes;
  }

  _utf8Decode(bytes) {
    let result = '';

    for (let i = 0; i < bytes.length;) {
      const first = bytes[i++];

      if (first < 0x80) {
        result += String.fromCharCode(first);
        continue;
      }

      if ((first & 0xe0) === 0xc0 && i < bytes.length) {
        const second = bytes[i++];
        result += String.fromCharCode(((first & 0x1f) << 6) | (second & 0x3f));
        continue;
      }

      if ((first & 0xf0) === 0xe0 && i + 1 < bytes.length) {
        const second = bytes[i++];
        const third = bytes[i++];
        result += String.fromCharCode(
          ((first & 0x0f) << 12) |
          ((second & 0x3f) << 6) |
          (third & 0x3f)
        );
        continue;
      }

      if ((first & 0xf8) === 0xf0 && i + 2 < bytes.length) {
        const second = bytes[i++];
        const third = bytes[i++];
        const fourth = bytes[i++];
        let code = (
          ((first & 0x07) << 18) |
          ((second & 0x3f) << 12) |
          ((third & 0x3f) << 6) |
          (fourth & 0x3f)
        );
        code -= 0x10000;
        result += String.fromCharCode(
          0xd800 + (code >> 10),
          0xdc00 + (code & 0x3ff)
        );
        continue;
      }

      result += '\ufffd';
    }

    return result;
  }

  _parseJSON(input) {
    try {
      return JSON.parse(input);
    } catch (error) {
      return input;
    }
  }

  async request(url, options = {}) {
    await this.init();

    const nativeAvailable = await this._canUseNativeFetch(url);
    if (nativeAvailable) {
      this._activeTransport = 'fetch';
      return this._requestViaFetch(url, options);
    }

    this._activeTransport = 'FetchBridge';
    this._startHandshake();
    return this._requestViaFetchBridge(url, options);
  }

  _canUseNativeFetch(url) {
    const now = Date.now();

    if (this._nativeFetchState === 'available') {
      return Promise.resolve(true);
    }

    if (
      this._nativeFetchState === 'unavailable' &&
      now - this._nativeProbeAt < NATIVE_PROBE_RETRY_INTERVAL
    ) {
      return Promise.resolve(false);
    }

    return new Promise((resolve) => {
      this._nativeProbeAt = now;

      try {
        fetch.fetch({
          url,
          method: 'HEAD',
          responseType: 'text',
          success: (response) => {
            // 只要进入 success 回调，就说明原生 fetch 能建立 HTTP 请求。
            // 404/405 等状态不影响能力判断。
            this._nativeFetchState = 'available';
            console.log(`[CommService] 原生 fetch 可用，探测状态码: ${response.code}`);
            resolve(true);
          },
          fail: (data, code) => {
            this._nativeFetchState = 'unavailable';
            console.log(`[CommService] 原生 fetch 不可用，回退 FetchBridge: ${code}`);
            resolve(false);
          }
        });
      } catch (error) {
        this._nativeFetchState = 'unavailable';
        console.log('[CommService] 原生 fetch 初始化失败，回退 FetchBridge');
        resolve(false);
      }
    });
  }

  _requestViaFetch(url, options) {
    return new Promise((resolve, reject) => {
      try {
        fetch.fetch({
          url,
          method: options.method || 'POST',
          header: options.headers || { 'Content-Type': 'application/json' },
          data: options.body
            ? (typeof options.body === 'string' ? options.body : JSON.stringify(options.body))
            : undefined,
          responseType: 'json',
          success: (response) => {
            if (response.code >= 200 && response.code < 300) {
              resolve(response.data || {});
            } else {
              reject(new Error(`HTTP ${response.code}`));
            }
          },
          fail: (data, code) => {
            const detail = data && data.data ? data.data : data;
            reject(new Error(`Fetch 请求失败: ${detail || code}`));
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  _requestViaFetchBridge(url, options) {
    return new Promise((resolve, reject) => {
      if (!this._connect) {
        reject(new Error('FetchBridge 未连接'));
        return;
      }

      const requestId = String(++this._requestId);
      const timeout = setTimeout(() => {
        this._pendingRequests.delete(requestId);
        this._chunkBuffers.delete(requestId);
        reject(new Error('FetchBridge 请求超时'));
      }, BRIDGE_REQUEST_TIMEOUT);

      this._pendingRequests.set(requestId, {
        resolve: (data) => {
          clearTimeout(timeout);
          resolve(data);
        },
        reject: (error) => {
          clearTimeout(timeout);
          reject(error);
        }
      });

      this._sendMessage(TAG_FETCH, {
        id: requestId,
        url,
        options: {
          method: options.method || 'POST',
          headers: options.headers || { 'Content-Type': 'application/json' },
          body: options.body
            ? (typeof options.body === 'string' ? options.body : JSON.stringify(options.body))
            : undefined,
          raw: false
        }
      }, (error) => {
        this._rejectPending(requestId, error);
      });
    });
  }

  getCommMode() {
    return this._activeTransport;
  }

  isReady() {
    return this._nativeFetchState === 'available' || this._handshakeCount >= 1;
  }
}

export default new CommService();
