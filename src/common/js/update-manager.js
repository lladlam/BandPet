// src/common/js/update-manager.js
import storage from '@system.storage';
import ApiService from './api-service.js';
import prompt from '@system.prompt';
import router from '@system.router';
import { CONFIG } from './config.js';

class UpdateManager {
  constructor() {
    this.checkInterval = CONFIG.APP.CHECK_UPDATE_INTERVAL || 3600000; // 1小时
  }
  
  // 检查更新（带频率限制）
  async checkUpdate(forceCheck = false) {
    try {
      // 1. 检查是否需要进行更新检查
      if (!forceCheck) {
        const shouldCheck = await this.shouldCheckUpdate();
        if (!shouldCheck) {
          return {
            success: true,
            skipped: true,
            message: '未到检查时间'
          };
        }
      }
      
      // 2. 获取当前版本号
      const currentVersionCode = CONFIG.APP.VERSION_CODE;
      
      // 3. 调用API检查更新
      const result = await ApiService.checkAppUpdate(currentVersionCode);
      
      if (result.success) {
        // 4. 记录本次检查时间
        await this.recordUpdateCheck();
        
        // 5. 处理更新信息
        if (result.hasUpdate) {
          const updateInfo = result.updateInfo;
          
          // 检查用户是否已经忽略此版本
          const ignored = await this.isVersionIgnored(updateInfo.version_code);
          
          if (!ignored && !result.isForceUpdate) {
            // 非强制更新，缓存更新信息供显示
            await this.cacheUpdateInfo(updateInfo);
          }
          
          return {
            ...result,
            ignored: ignored
          };
        }
      }
      
      return result;
      
    } catch (error) {
      console.error('检查更新失败:', error);
      return {
        success: false,
        error: error.message,
        hasUpdate: false
      };
    }
  }
  
  // 判断是否应该检查更新
  async shouldCheckUpdate() {
    try {
      const result = await storage.get({
        key: CONFIG.STORAGE_KEYS.LAST_UPDATE_CHECK_TIME
      });
      
      if (!result || !result.value) {
        return true; // 从未检查过
      }
      
      const lastCheckTime = new Date(result.value).getTime();
      const now = Date.now();
      
      return (now - lastCheckTime) >= this.checkInterval;
      
    } catch (error) {
      console.error('检查更新时间失败:', error);
      return true;
    }
  }
  
  // 记录更新检查时间
  async recordUpdateCheck() {
    try {
      await storage.set({
        key: CONFIG.STORAGE_KEYS.LAST_UPDATE_CHECK_TIME,
        value: new Date().toISOString()
      });
    } catch (error) {
      console.error('记录更新时间失败:', error);
    }
  }
  
  // 缓存更新信息
  async cacheUpdateInfo(updateInfo) {
    try {
      await storage.set({
        key: CONFIG.STORAGE_KEYS.CACHED_UPDATE_INFO,
        value: JSON.stringify(updateInfo)
      });
    } catch (error) {
      console.error('缓存更新信息失败:', error);
    }
  }
  
  // 获取缓存的更新信息
  async getCachedUpdateInfo() {
    try {
      const result = await storage.get({
        key: CONFIG.STORAGE_KEYS.CACHED_UPDATE_INFO
      });
      
      if (result && result.value) {
        return JSON.parse(result.value);
      }
      
      return null;
    } catch (error) {
      console.error('获取缓存更新信息失败:', error);
      return null;
    }
  }
  
  // 忽略某个版本
  async ignoreVersion(versionCode) {
    try {
      await storage.set({
        key: CONFIG.STORAGE_KEYS.IGNORED_VERSION,
        value: versionCode.toString()
      });
    } catch (error) {
      console.error('忽略版本失败:', error);
    }
  }
  
  // 检查是否忽略某个版本
  async isVersionIgnored(versionCode) {
    try {
      const result = await storage.get({
        key: CONFIG.STORAGE_KEYS.IGNORED_VERSION
      });
      
      if (result && result.value) {
        return parseInt(result.value) === versionCode;
      }
      
      return false;
    } catch (error) {
      console.error('检查忽略版本失败:', error);
      return false;
    }
  }
  
  // 显示更新对话框（示例）
  async showUpdateDialog(updateInfo, isForceUpdate = false) {
    return new Promise((resolve) => {
      if (isForceUpdate) {
        // 强制更新，直接跳转到强制更新页面
        router.push({
          uri: 'pages/force-update/index',
          params: {
            updateInfo: updateInfo,
            isForceUpdate: true
          }
        });
        resolve('force_update');
        return;
      }
      
      // 非强制更新，显示对话框
      prompt.showDialog({
        title: `发现新版本 ${updateInfo.version_name}`,
        message: `${updateInfo.title}\n\n${updateInfo.changelog}`,
        buttons: [
          {
            text: '忽略此版本',
            color: '#8E8E93'
          },
          {
            text: '知道了',
            color: '#007AFF'
          }
        ],
        success: (index) => {
          if (index === 0) {
            // 用户点击忽略此版本
            resolve('ignore');
          } else if (index === 1) {
            // 用户点击知道了
            resolve('know');
          }
        },
        cancel: () => {
          // 用户点击对话框外部取消
          resolve('cancel');
        }
      });
    });
  }
  
  // 新增：检查并处理强制更新
  async checkAndHandleForceUpdate() {
    try {
      // 强制检查，忽略时间限制
      const result = await this.checkUpdate(true);
      
      if (result.success && result.hasUpdate && result.updateInfo) {
        // 如果是强制更新
        if (result.isForceUpdate) {
          // 标记需要强制更新
          await this.markForceUpdateRequired();
          
          // 跳转到强制更新页面（用户无法返回）
          router.push({
            uri: 'pages/force-update/index',
            params: {
              updateInfo: result.updateInfo,
              isForceUpdate: true
            }
          });
          
          return {
            hasForceUpdate: true,
            updateInfo: result.updateInfo
          };
        }
      }
      
      return {
        hasForceUpdate: false
      };
      
    } catch (error) {
      console.error('强制更新检查失败:', error);
      return {
        hasForceUpdate: false,
        error: error.message
      };
    }
  }
  
  // 标记需要强制更新
  async markForceUpdateRequired() {
    try {
      await storage.set({
        key: CONFIG.STORAGE_KEYS.FORCE_UPDATE_REQUIRED,
        value: 'true'
      });
    } catch (error) {
      console.error('标记强制更新失败:', error);
    }
  }
  
  // 清除强制更新标记
  async clearForceUpdateMark() {
    try {
      await storage.delete({
        key: CONFIG.STORAGE_KEYS.FORCE_UPDATE_REQUIRED
      });
    } catch (error) {
      console.error('清除强制更新标记失败:', error);
    }
  }
  
  // 检查是否需要强制更新
  async isForceUpdateRequired() {
    try {
      const result = await storage.get({
        key: CONFIG.STORAGE_KEYS.FORCE_UPDATE_REQUIRED
      });
      
      return result && result.value === 'true';
    } catch (error) {
      console.error('检查强制更新状态失败:', error);
      return false;
    }
  }
  
  // 清除更新缓存
  async clearUpdateCache() {
    try {
      await storage.delete({
        key: CONFIG.STORAGE_KEYS.CACHED_UPDATE_INFO
      });
      
      await storage.delete({
        key: CONFIG.STORAGE_KEYS.IGNORED_VERSION
      });
      
      await storage.delete({
        key: CONFIG.STORAGE_KEYS.FORCE_UPDATE_REQUIRED
      });
    } catch (error) {
      console.error('清除更新缓存失败:', error);
    }
  }
}

export default new UpdateManager();
