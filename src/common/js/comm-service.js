// src/common/js/comm-service.js
import fetch from '@system.fetch';
import interconnect from '@system.interconnect';
import device from '@system.device';

/**
 * 通信服务 - 自动选择 fetch 或 interconnect
 * - 支持 fetch 的设备：直接 HTTP 请求
 * - 不支持 fetch 的设备：通过 interconnect 由手机中转
 */
class CommService {
  constructor() {
    this._useInterconnect = false;
    this._connect = null;
    this._pendingRequests = new Map();
    this._requestId = 0;
    this._initialized = false;
  }

  /**
   * 初始化通信服务
   * 检测设备是否支持 fetch，不支持则使用 interconnect
   */
  async init() {
    if (this._initialized) return;

    return new Promise((resolve) => {
      device.getInfo({
        success: (data) => {
          // 如果设备支持 fetch，则直接使用
          // 否则使用 interconnect 中转
          this._useInterconnect = !data.fetchSupport;
          console.log(`[CommService] 通信方式: ${this._useInterconnect ? 'interconnect' : 'fetch'}`);

          if (this._useInterconnect) {
            this._initInterconnect();
          }
          this._initialized = true;
          resolve();
        },
        fail: () => {
          // 默认使用 fetch
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

      // 监听连接状态
      this._connect.onOpen = (data) => {
        console.log('[CommService] Interconnect 连接已打开');
      };

      this._connect.onclose = (data) => {
        console.log('[CommService] Interconnect 连接已关闭');
      };

      this._connect.onerror = (data) => {
        console.error('[CommService] Interconnect 错误:', data);
      };

      // 监听手机端返回的数据
      this._connect.onmessage = (data) => {
        this._handleInterconnectMessage(data);
      };

      console.log('[CommService] Interconnect 初始化完成');
    } catch (error) {
      console.error('[CommService] Interconnect 初始化失败:', error);
    }
  }

  /**
   * 处理 interconnect 返回的消息
   */
  _handleInterconnectMessage(data) {
    try {
      const message = JSON.parse(data.data);
      const { requestId, success, result } = message;

      if (requestId && this._pendingRequests.has(requestId)) {
        const { resolve, reject } = this._pendingRequests.get(requestId);
        this._pendingRequests.delete(requestId);

        if (success) {
          resolve(result);
        } else {
          reject(new Error(result?.error || 'interconnect request failed'));
        }
      }
    } catch (error) {
      console.error('[CommService] 解析 interconnect 消息失败:', error);
    }
  }

  /**
   * 发送 HTTP 请求
   * @param {string} url - 请求地址
   * @param {object} options - 请求选项
   * @returns {Promise<object>} 响应数据
   */
  async request(url, options = {}) {
    await this.init();

    if (this._useInterconnect) {
      return this._requestViaInterconnect(url, options);
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
        data: options.body ? JSON.stringify(options.body) : undefined,
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
   * 通过 interconnect 由手机中转请求
   */
  _requestViaInterconnect(url, options) {
    return new Promise((resolve, reject) => {
      if (!this._connect) {
        reject(new Error('interconnect not connected'));
        return;
      }

      const requestId = ++this._requestId;
      const timeout = setTimeout(() => {
        this._pendingRequests.delete(requestId);
        reject(new Error('interconnect request timeout'));
      }, 15000);

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

      // 发送请求到手机端
      this._connect.send({
        data: JSON.stringify({
          type: 'http_request',
          requestId,
          url,
          method: options.method || 'POST',
          headers: options.headers || { 'Content-Type': 'application/json' },
          body: options.body
        }),
        success: () => {
          console.log(`[CommService] Interconnect 请求已发送: ${requestId}`);
        },
        fail: (error, code) => {
          this._pendingRequests.delete(requestId);
          clearTimeout(timeout);
          reject(new Error(`Interconnect send failed: ${error}`));
        }
      });
    });
  }

  /**
   * 获取当前通信方式
   * @returns {string} 'fetch' 或 'interconnect'
   */
  getCommMode() {
    return this._useInterconnect ? 'interconnect' : 'fetch';
  }
}

export default new CommService();
