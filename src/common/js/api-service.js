// api-service.js
import fetch from '@system.fetch'
import { CONFIG } from './config.js'

class ApiService {
  constructor() {
    this.baseHeaders = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + CONFIG.SUPABASE.KEY,
      'apikey': CONFIG.SUPABASE.KEY
    }
  }

  // 通用请求方法
  async request(endpoint, method = 'POST', data = null) {
    const url = `${CONFIG.SUPABASE.URL}/functions/v1/${endpoint}`
    
    const options = {
      url,
      method,
      header: this.baseHeaders,
      responseType: 'json'
    }

    if (data) {
      options.data = JSON.stringify(data)
    }

    return new Promise((resolve, reject) => {
      fetch.fetch({
        ...options,
        success: (response) => {
          if (response.code >= 200 && response.code < 300) {
            resolve(response.data)
          } else {
            console.error(`HTTP Error: ${response.code}`, response);
            reject(new Error(`HTTP ${response.code}: ${JSON.stringify(response.data)}`))
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
      const result = await this.request('bright-responder', 'POST', {
        action: 'get_rankings',
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
      await this.request('bright-responder', 'POST', {
        action: 'sync_clicks',
        user_id: userId,
        click_count: clickCount
      })
      return { success: true }
    } catch (error) {
      console.error('上报点击次数失败:', error)
      return { success: false, error: error.message }
    }
  }
  
  // 激活
  async activateDevice(deviceId, activationCode) {
    try {
      const result = await this.request('bright-responder', 'POST', {
        action: 'activate',
        device_id: deviceId,
        activation_code: activationCode
      });
      return result;
    } catch (error) {
      console.error('激活失败:', error);
      return { success: false, error: error.message };
    }
  }

  // 修改宠物名
  async setPetName(userId, newName) {
    try {
      const result = await this.request('bright-responder', 'POST', {
        action: 'set_pet_name',
        user_id: userId,
        new_name: newName
      });
      return result;
    } catch (error) {
      console.error('修改宠物名失败:', error);
      return { success: false, error: error.message };
    }
  }
}

export default new ApiService()
