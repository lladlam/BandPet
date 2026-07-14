// src/common/js/comm-service.js
// 适配 AstroBox FetchBridge 插件的通信服务
//
// 工作原理：
// - 支持 fetch 的设备：直接 HTTP 请求
// - 不支持 fetch 的设备：通过 interconnect 发送消息到 FetchBridge 插件
//   插件运行在手机端（AstroBox NG），负责实际的 HTTP 请求
//
// 协议参考：PROTOCOL.md v3

import fetch from '@system.fetch';
import interconnect from '@system.interconnect';
import device from '@system.device';

// FetchBridge 协议标签
const TAG_HANDSHAKE = '__hs__';
const TAG_FETCH = 'fetch';
const TAG_FETCH_CHUNK = 'fetch-chunk';
const TAG_FETCH_ACK = 'fetch-ack';

// 本端能力声明
const LOCAL_CAPS = {
  version: 3,
  chunk: true,
  maxChunkSize: 4096,
  encodings: ['base64', 'text'],
  compressions: ['none'],
  ack: true,
  ackWindow: 4
};

/**
 * 通信服务 - 自动选择 fetch 或 FetchBridge
 */
class CommService {
  constructor() {
    this._useInterconnect = false;
    this._connect = null;
    this._pendingRequests = new Map();
    this._chunkBuffers = new Map();
    this._requestId = 0;
    this._initialized = false;
    this._handshakeCount = -1; // -1 表示未开始
  }

  /**
   * 初始化通信服务
   */
  async init() {
    if (this._initialized) return;

    return new Promise((resolve) => {
      device.getInfo({
        success: (data) => {
          this._useInterconnect = !data.fetchSupport;
          console.log(`[CommService] 通信方式: ${this._useInterconnect ? 'FetchBridge' : 'fetch'}`);

          if (this._useInterconnect) {
            this._initInterconnect();
          }
          this._initialized = true;
          resolve();
        },
        fail: () => {
          this._useInterconnect = false;
          this._initialized = true;
          resolve();
        }
      });
    });
  }

  /**
   * 初始化 interconnect 连接
   */
  _initInterconnect() {
    try {
      this._connect = interconnect.instance();

      this._connect.onOpen = (data) => {
        console.log('[CommService] Interconnect 已连接');
      };

      this._connect.onclose = (data) => {
        console.log('[CommService] Interconnect 已断开');
        this._handshakeCount = -1;
      };

      this._connect.onerror = (data) => {
        console.error('[CommService] Interconnect 错误:', data);
      };

      // 监听 FetchBridge 插件返回的数据
      this._connect.onmessage = (data) => {
        this._handleMessage(data);
      };

      console.log('[CommService] FetchBridge 初始化完成');
    } catch (error) {
      console.error('[CommService] FetchBridge 初始化失败:', error);
    }
  }

  /**
   * 发送消息到 FetchBridge 插件
   */
  _sendMessage(tag, payload) {
    if (!this._connect) return;

    const message = { tag, ...payload };
    this._connect.send({
      data: JSON.stringify(message),
      success: () => {},
      fail: (error, code) => {
        console.error('[CommService] 发送失败:', error);
      }
    });
  }

  /**
   * 处理从 FetchBridge 插件收到的消息
   */
  _handleMessage(data) {
    try {
      const message = JSON.parse(data.data);
      const { tag } = message;

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
          // 忽略未知 tag（协议要求）
          console.log(`[CommService] 忽略未知消息: ${tag}`);
      }
    } catch (error) {
      console.error('[CommService] 解析消息失败:', error);
    }
  }

  /**
   * 处理握手消息
   * FetchBridge 插件收到第一个 fetch 请求后会自动发起握手
   */
  _handleHandshake(message) {
    const { count, caps } = message;

    console.log(`[CommService] 收到握手: count=${count}`);

    // 回复握手，带上本端能力
    if (count < 2) {
      this._sendMessage(TAG_HANDSHAKE, {
        count: count + 1,
        caps: count === 0 ? LOCAL_CAPS : undefined
      });
    }

    // count >= 2 表示握手完成
    if (count >= 1) {
      this._handshakeCount = count;
      console.log('[CommService] 握手完成');
    }
  }

  /**
   * 处理 fetch 响应
   */
  _handleFetchResponse(message) {
    const { id, resp } = message;

    if (!id || !this._pendingRequests.has(id)) return;

    if (resp.chunked) {
      // 分片模式 - 初始化缓冲区
      this._chunkBuffers.set(id, {
        chunks: new Array(resp.chunkCount).fill(null),
        totalChunks: resp.chunkCount,
        receivedCount: 0,
        ack: resp.ack || false,
        encoding: resp.bodyEncoding || 'base64'
      });
      console.log(`[CommService] 开始接收分片: ${resp.chunkCount} 块`);
    } else {
      // 单消息模式
      const request = this._pendingRequests.get(id);
      this._pendingRequests.delete(id);

      const body = this._decodeBody(resp.body, resp.bodyEncoding, resp.raw);
      request.resolve({
        ok: resp.ok,
        status: resp.status,
        statusText: resp.statusText,
        headers: resp.headers || {},
        data: this._parseJSON(body)
      });
    }
  }

  /**
   * 处理分片数据
   */
  _handleFetchChunk(message) {
    const { id, seq, data: chunkData } = message;

    if (!id || !this._chunkBuffers.has(id)) return;

    const buffer = this._chunkBuffers.get(id);
    buffer.chunks[seq] = chunkData;
    buffer.receivedCount++;

    // 发送 ACK 确认
    if (buffer.ack) {
      this._sendMessage(TAG_FETCH_ACK, {
        id,
        seq: seq + 1
      });
    }

    // 检查是否所有分片都已接收
    if (buffer.receivedCount >= buffer.totalChunks) {
      this._chunkBuffers.delete(id);

      if (this._pendingRequests.has(id)) {
        const request = this._pendingRequests.get(id);
        this._pendingRequests.delete(id);

        // 合并所有分片并解码
        const fullBody = buffer.chunks.join('');
        const body = this._decodeBody(fullBody, buffer.encoding, false);
        request.resolve({
          ok: true,
          status: 200,
          statusText: 'OK',
          headers: {},
          data: this._parseJSON(body)
        });
      }
    }
  }

  /**
   * 解码响应体
   */
  _decodeBody(encoded, encoding, raw) {
    if (!encoded) return '';

    switch (encoding) {
      case 'text':
        return encoded;
      case 'base64':
        return this._base64Decode(encoded);
      case 'hex':
        return this._hexDecode(encoded);
      default:
        return encoded;
    }
  }

  /**
   * Base64 解码
   */
  _base64Decode(str) {
    try {
      return decodeURIComponent(escape(atob(str)));
    } catch (e) {
      return str;
    }
  }

  /**
   * Hex 解码
   */
  _hexDecode(str) {
    let result = '';
    for (let i = 0; i < str.length; i += 2) {
      result += String.fromCharCode(parseInt(str.substr(i, 2), 16));
    }
    return result;
  }

  /**
   * 尝试解析 JSON
   */
  _parseJSON(str) {
    try {
      return JSON.parse(str);
    } catch (e) {
      return str;
    }
  }

  /**
   * 发送 HTTP 请求
   */
  async request(url, options = {}) {
    await this.init();

    if (this._useInterconnect) {
      return this._requestViaFetchBridge(url, options);
    } else {
      return this._requestViaFetch(url, options);
    }
  }

  /**
   * 通过 fetch 直接请求
   */
  _requestViaFetch(url, options) {
    return new Promise((resolve, reject) => {
      fetch.fetch({
        url,
        method: options.method || 'POST',
        header: options.headers || { 'Content-Type': 'application/json' },
        data: options.body ? (typeof options.body === 'string' ? options.body : JSON.stringify(options.body)) : undefined,
        responseType: 'json',
        success: (response) => {
          if (response.code >= 200 && response.code < 300) {
            resolve(response.data || {});
          } else {
            reject(new Error(`HTTP ${response.code}`));
          }
        },
        fail: (error, code) => {
          reject(new Error(`Fetch failed: ${error.data || code}`));
        }
      });
    });
  }

  /**
   * 通过 FetchBridge 插件请求
   */
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
      }, 30000);

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

      // 构造 fetch 请求（协议格式）
      this._sendMessage(TAG_FETCH, {
        id: requestId,
        url,
        options: {
          method: options.method || 'POST',
          headers: options.headers || { 'Content-Type': 'application/json' },
          body: options.body ? (typeof options.body === 'string' ? options.body : JSON.stringify(options.body)) : undefined
        }
      });
    });
  }

  /**
   * 获取当前通信方式
   */
  getCommMode() {
    return this._useInterconnect ? 'FetchBridge' : 'fetch';
  }

  /**
   * 检查是否就绪
   */
  isReady() {
    return this._useInterconnect ? this._handshakeCount >= 1 : true;
  }
}

export default new CommService();
