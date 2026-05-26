import ApiService from './api-service.js';
import { CONFIG } from './config.js';
import { deleteStorageKey, getStorageValue, setStorageValue } from './storage-utils.js';

class UpdateManager {
  constructor() {
    this.checkInterval = CONFIG.APP.CHECK_UPDATE_INTERVAL || 360000; // 
  }

  async _isOfflineModeEnabled() {
    try {
      const result = await getStorageValue(CONFIG.STORAGE_KEYS.OFFLINE_MODE_ENABLED);
      return result === 'true';
    } catch (error) {
      console.error('[UpdateManager] 读取离线模式失败:', error);
      return false;
    }
  }
  
  // 检查更新（带频率限制）
  async checkUpdate(forceCheck = false) {
    if (await this._isOfflineModeEnabled()) {
      return {
        success: true,
        skipped: true,
        offline: true,
        message: '离线模式下不检查更新'
      };
    }
    
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
          
          // 如果是强制更新，无论是否忽略都保存更新信息
          if (result.isForceUpdate) {
            await this.saveUpdateInfo(updateInfo);
          } else if (!ignored) {
            // 非强制更新且未忽略，保存更新信息
            await this.saveUpdateInfo(updateInfo);
          }
          
          return {
            ...result,
            ignored: ignored
          };
        }
      }
      
      return result;
      
    } catch (error) {
      console.error('[UpdateManager] checkUpdate error:', error);
      console.error('[UpdateManager] checkUpdate error message:', error.message);
      console.error('[UpdateManager] checkUpdate error stack:', error.stack);
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
      const result = await getStorageValue(CONFIG.STORAGE_KEYS.LAST_UPDATE_CHECK_TIME);
      
      if (!result) {
        return true; // 从未检查过
      }
      
      const lastCheckTime = new Date(result).getTime();
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
      await setStorageValue(CONFIG.STORAGE_KEYS.LAST_UPDATE_CHECK_TIME, new Date().toISOString());
    } catch (error) {
      console.error('记录更新时间失败:', error);
    }
  }
  
  // 保存更新信息到本地存储
  async saveUpdateInfo(updateInfo) {
    try {
      await setStorageValue(CONFIG.STORAGE_KEYS.CACHED_UPDATE_INFO, JSON.stringify(updateInfo));
    } catch (error) {
      console.error('保存更新信息失败:', error);
    }
  }
  
  // 从本地存储获取更新信息
  async getSavedUpdateInfo() {
    try {
      const result = await getStorageValue(CONFIG.STORAGE_KEYS.CACHED_UPDATE_INFO);
      
      if (result) {
        return JSON.parse(result);
      }
      
      return null;
    } catch (error) {
      console.error('获取更新信息失败:', error);
      return null;
    }
  }
  
  // 从本地存储获取更新信息（兼容命名，别名）
  async getCachedUpdateInfo() {
    return this.getSavedUpdateInfo();
  }
  
  // 忽略某个版本
  async ignoreVersion(versionCode) {
    try {
      await setStorageValue(CONFIG.STORAGE_KEYS.IGNORED_VERSION, versionCode.toString());
    } catch (error) {
      console.error('忽略版本失败:', error);
    }
  }
  
  // 检查是否忽略某个版本
  async isVersionIgnored(versionCode) {
    try {
      const result = await getStorageValue(CONFIG.STORAGE_KEYS.IGNORED_VERSION);
      
      if (result) {
        return parseInt(result) === versionCode;
      }
      
      return false;
    } catch (error) {
      console.error('检查忽略版本失败:', error);
      return false;
    }
  }
  
  // 显示更新对话框（示例）
  async showUpdateDialog(updateInfo, isForceUpdate = false) {
    return {
      action: isForceUpdate ? 'force_update' : 'normal_update',
      updateInfo,
      isForceUpdate
    };
  }
  
  // 新增：检查并处理强制更新
  async checkAndHandleForceUpdate() {
    try {
      // 强制检查，忽略时间限制
      const result = await this.checkUpdate(true);
      
      if (result.success && result.hasUpdate && result.updateInfo) {
        // 【修复】检查用户是否已忽略此版本
        const ignored = await this.isVersionIgnored(result.updateInfo.version_code);
        const isForceUpdate = result.isForceUpdate;
        
        // 如果版本被忽略且不是强制更新，则不进行任何操作
        if (ignored && !isForceUpdate) {
          return {
            hasForceUpdate: false
          };
        }
        
        // 如果是强制更新
        if (isForceUpdate) {
          // 标记需要强制更新
          await this.markForceUpdateRequired();
          
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
      await setStorageValue(CONFIG.STORAGE_KEYS.FORCE_UPDATE_REQUIRED, 'true');
    } catch (error) {
      console.error('标记强制更新失败:', error);
    }
  }
  
  // 清除强制更新标记
  async clearForceUpdateMark() {
    try {
      await deleteStorageKey(CONFIG.STORAGE_KEYS.FORCE_UPDATE_REQUIRED);
    } catch (error) {
      console.error('清除强制更新标记失败:', error);
    }
  }
  
  // 检查是否需要强制更新
  async isForceUpdateRequired() {
    try {
      const result = await getStorageValue(CONFIG.STORAGE_KEYS.FORCE_UPDATE_REQUIRED);
      
      return result === 'true';
    } catch (error) {
      console.error('检查强制更新状态失败:', error);
      return false;
    }
  }
  
  // 清除更新缓存
  async clearUpdateCache() {
    try {
      await deleteStorageKey(CONFIG.STORAGE_KEYS.CACHED_UPDATE_INFO);
      await deleteStorageKey(CONFIG.STORAGE_KEYS.IGNORED_VERSION);
      await deleteStorageKey(CONFIG.STORAGE_KEYS.FORCE_UPDATE_REQUIRED);
    } catch (error) {
      console.error('清除更新缓存失败:', error);
    }
  }
}

export default new UpdateManager();
