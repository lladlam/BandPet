// api-service.js
import fetch from '@system.fetch';
import router from '@system.router';
import storage from '@system.storage';
import prompt from '@system.prompt';
import { CONFIG } from './config.js';

class ApiService {
  constructor() {
    // 中转服务器地址 - 从 config.js 读取
    this.baseUrl = CONFIG.SERVER.BASE_URL;
    this.baseHeaders = {
      'Content-Type': 'application/json',
    }
  }

  // 通用请求方法 - 通过中转服务器转发
  async request(action, data = {}) {
    const url = `${this.baseUrl}/api`;
    
    const options = {
      url,
      method: 'POST',
      header: this.baseHeaders,
      responseType: 'json'
    };

    options.data = JSON.stringify({ action, ...data });

    return new Promise((resolve, reject) => {
      fetch.fetch({
        ...options,
        success: (response) => {
          const responseData = response.data || {};

          if (response.code >= 200 && response.code < 300) {
            resolve(responseData)
          } else {
            console.error(`HTTP Error: ${response.code}`, response);
            reject(new Error(`HTTP ${response.code}: ${JSON.stringify(responseData)}`))
          }
        },
        fail: (error, code) => {
          console.error(`Request Failed: ${code}`, error);
          reject(new Error(`Request failed: ${error.data}`))
        }
      })
    })
  }

  // 获取排行榜
  async getRankings(limit = 10) {
    try {
      const result = await this.request('get_rankings', {
        limit: limit
      })
      return {
        success: true,
        rankings: result.rankings || []
      }
    } catch (error) {
      console.error('获取排行榜失败:', error)
      return {
        success: false,
        rankings: [],
        error: error.message
      }
    }
  }

  // 上报点击次数
  async syncClicks(userId, clickCount) {
    try {
      await this.request('sync_clicks', {
        user_id: userId,
        click_count: clickCount
      })
      return { success: true }
    } catch (error) {
      console.error('上报点击次数失败:', error)
      return { success: false, error: error.message };
    }
  }

  // 检查宠物名是否可用
  async checkPetNameAvailability(petName) {
    try {
      const result = await this.request('check_pet_name', {
        pet_name: petName
      });
      return { success: true, ...result };
    } catch (error) {
      console.error('检查宠物名可用性时发生网络错误:', error);
      return { success: false, error: error.message, isAvailable: false };
    }
  }

  // 修改宠物名
  async setPetName(userId, newName) {
    try {
      const result = await this.request('set_pet_name', {
        user_id: userId,
        new_name: newName
      });
      return result;
    } catch (error) {
      console.error('修改宠物名失败:', error);
      return { success: false, error: error.message };
    }
  }

  // 预激活检查
  async checkDeviceRegistration(deviceId) {
    try {
      const result = await this.request('check_registration', {
        device_id: deviceId
      });
      console.log('预激活检查成功:', result);
      // 直接返回服务器的原始响应，UI层期望的是扁平结构
      return result;
    } catch (error) {
      console.error('预激活检查时发生网络错误:', error);
      // 返回一个兼容的错误对象，避免UI层崩溃
      return { is_registered: false, can_auto_activate: false, error: error.message };
    }
  }

  // 注册设备并获取用户ID
  async registerAndGetUserId(deviceId) {
    try {
      // Pass the server response directly to the UI layer
      return await this.request('register_device_and_get_id', {
        device_id: deviceId
      });
    } catch (error) {
      console.error('注册或获取用户ID时发生网络错误:', error);
      // Return a compatible error object
      return { success: false, message: error.message };
    }
  }

  // 验证用户ID并恢复数据
  async verifyUserIdAndRestore(deviceId, userId) {
    try {
      // Pass the server response directly to the UI layer
      return await this.request('verify_user_id_and_restore', {
        device_id: deviceId,
        user_id: userId
      });
    } catch (error) {
      console.error('验证用户ID时发生网络错误:', error);
      // Return a compatible error object
      return { success: false, message: error.message };
    }
  }
}

export default new ApiService()
