// src/common/js/userService.js
import device from '@system.device';
import storage from '@system.storage';
import ApiService from './api-service.js';
import { CONFIG } from './config.js';

/**
 * A service to handle silent user registration and data retrieval.
 */
class UserService {
  
  /**
   * Promisified helper for storage.get.
   * @param {string} key - The key to retrieve.
   * @returns {Promise<any>} The value from storage, or null if not found.
   */
  _storageGet(key) {
    return new Promise((resolve) => {
      storage.get({
        key: key,
        success: (data) => resolve(data),
        fail: () => resolve(null),
      });
    });
  }

  /**
   * Promisified helper for storage.set.
   * @param {string} key - The key to set.
   * @param {string} value - The value to store.
   * @returns {Promise<void>}
   */
  _storageSet(key, value) {
    return new Promise((resolve, reject) => {
      storage.set({
        key: key,
        value: value,
        success: resolve,
        fail: (err, code) => reject(new Error(`Storage.set failed for '${key}': ${err} (${code})`)),
      });
    });
  }

  /**
   * Retrieves the raw device identifier, using a fallback for simulators.
   * It also saves the raw ID to storage for future use.
   * @returns {Promise<string|null>} The raw device ID or null on failure.
   */
  _getRawDeviceId() {
    return new Promise((resolve) => {
      device.getSerial({
        success: async (data) => {
          let serial = data ? data.serial : null;
          if (serial === 'NA') {
            console.warn("Device serial is 'NA', using a fixed test serial.");
            serial = 'TESTVM-SN-0123456789';
          }

          if (!serial) {
            console.error('Failed to get a valid device serial.');
            resolve(null);
            return;
          }

          try {
            // Save the raw ID for other services that might need it (e.g., API calls)
            await this._storageSet(CONFIG.STORAGE_KEYS.DEVICE_ID, serial);
            console.log('Saved raw device ID:', serial);
            resolve(serial);
          } catch (e) {
            console.error('Failed to save raw device ID to storage:', e);
            resolve(null);
          }
        },
        fail: (err, code) => {
          console.error(`Failed to get serial. Code: ${code}, Error: ${err}`);
          resolve(null);
        },
      });
    });
  }

  /**
   * Saves the user information to local storage.
   * @param {object} userInfo - The user info object received from the server.
   * @returns {Promise<object>} The user info that was saved.
   */
  async _saveUserInfo(userInfo) {
    if (!userInfo || (!userInfo.id && !userInfo.user_number)) {
      throw new Error("User info is invalid, cannot save.");
    }
    
    const userInfoToSave = {
      id: userInfo.id || userInfo.user_number,
      user_number: userInfo.user_number,
      pet_name: userInfo.pet_name,
      total_clicks: userInfo.total_clicks || 0
    };

    await this._storageSet(CONFIG.STORAGE_KEYS.USER_INFO, JSON.stringify(userInfoToSave));
    console.log("Successfully saved user info to storage:", userInfoToSave);
    return userInfoToSave;
  }

  /**
   * The main public method. It ensures that user information is present in storage.
   * If not, it silently gets a device ID, checks with the server, and either
   * retrieves existing user data or registers a new user.
   * @returns {Promise<object|null>} The user info, or null if the process fails.
   */
  async ensureUserIsRegistered(forceSync = false) {
    // 1. Check if user info already exists and is valid.
    console.log('[UserService] Checking for existing user info in storage...');
    const existingUserInfoJSON = await this._storageGet(CONFIG.STORAGE_KEYS.USER_INFO);
    if (existingUserInfoJSON) {
      try {
        const userInfo = JSON.parse(existingUserInfoJSON);
        if (userInfo && userInfo.id) {
          if (forceSync) {
            console.log('[UserService] Force sync enabled. Attempting to sync latest data from server...');
            try {
              const syncResult = await ApiService.syncFromServer(userInfo.id);
              if (syncResult && syncResult.success) {
                console.log('[UserService] Successfully synced from server.');
                return await this._saveUserInfo(syncResult.userInfo);
              } else {
                console.warn('[UserService] Sync from server failed, will use stale local data. Error:', syncResult ? syncResult.error : 'Unknown error');
                return userInfo; // Return stale data if sync fails
              }
            } catch (syncError) {
              console.error('[UserService] A critical error occurred during server sync:', syncError);
              return userInfo; // Return stale data on critical sync failure
            }
          } else {
            console.log('[UserService] User is already registered. Found info:', userInfo);
            return userInfo;
          }
        }
      } catch (e) {
        // Malformed JSON, proceed with registration.
        console.warn('[UserService] User info in storage is malformed. Proceeding with registration.');
      }
    }

    console.log('[UserService] User not found locally. Starting silent registration process...');

    // 2. Get Device ID
    const deviceId = await this._getRawDeviceId();
    if (!deviceId) {
      console.error('[UserService] CRITICAL: Cannot proceed with registration: failed to get device ID.');
      return null;
    }
    console.log(`[UserService] Got device ID: ${deviceId}`);

    try {
      // 3. Check if the device is already registered on the server
      console.log('[UserService] Checking device registration with server...');
      const regResult = await ApiService.checkDeviceRegistration(deviceId);
      console.log('[UserService] Server registration check response:', JSON.stringify(regResult));


      if (regResult && regResult.is_registered && regResult.userInfo) {
        // Device is known, save the info and we're done.
        console.log('[UserService] Device is already registered on server. Restoring user info.');
        return await this._saveUserInfo(regResult.userInfo);
      }
      
      // 4. If not registered, create a new user record.
      console.log('[UserService] Device not registered. Attempting to register a new user...');
      const newRegResult = await ApiService.registerAndGetUserId(deviceId);
      console.log('[UserService] Server new user registration response:', JSON.stringify(newRegResult));


      if (newRegResult && newRegResult.success && newRegResult.userInfo) {
        console.log('[UserService] Successfully registered new user.');
        return await this._saveUserInfo(newRegResult.userInfo);
      } else {
        console.error('[UserService] CRITICAL: Failed to register new user.', newRegResult ? newRegResult.message : 'No result from server');
        return null;
      }
    } catch (e) {
      console.error('[UserService] CRITICAL: An error occurred during the silent registration API calls:', e);
      return null;
    }
  }

  /**
   * Reads pending clicks from storage and syncs them with the server.
   * This is a self-contained, fire-and-forget method.
   * @returns {Promise<boolean>} True on success, false on failure or if no sync was needed.
   */
  async triggerClickSync() {
    console.log('[UserService] Triggering click sync...');
    
    // 1. Get user info
    const userInfoJSON = await this._storageGet(CONFIG.STORAGE_KEYS.USER_INFO);
    if (!userInfoJSON) {
      console.warn('[UserService] Sync aborted: User info not found in storage.');
      return false;
    }
    
    let userInfo;
    try {
      userInfo = JSON.parse(userInfoJSON);
      if (!userInfo || !userInfo.id) {
        console.warn('[UserService] Sync aborted: User ID is invalid.');
        return false;
      }
    } catch(e) {
      console.warn('[UserService] Sync aborted: Could not parse user info.');
      return false;
    }

    // 2. Get pending clicks
    const pendingClicksData = await this._storageGet(CONFIG.STORAGE_KEYS.PENDING_CLICKS);
    const clicksToSync = parseInt(pendingClicksData);

    if (isNaN(clicksToSync) || clicksToSync <= 0) {
      console.log('[UserService] No pending clicks to sync.');
      return true; // Nothing to do, so it's a "success"
    }

    console.log(`[UserService] Found ${clicksToSync} pending clicks for user ${userInfo.id}. Syncing...`);

    // 3. Call API
    const result = await ApiService.syncClicks(userInfo.id, clicksToSync);

    // 4. Update storage on success
    if (result.success) {
      console.log('[UserService] Sync successful. Resetting pending clicks.');
      await this._storageSet(CONFIG.STORAGE_KEYS.PENDING_CLICKS, '0');
      return true;
    } else {
      console.error('[UserService] Sync failed:', result.error);
      return false;
    }
  }

  /**
   * Fetches the latest user data from the server and overwrites local storage.
   * This method runs the full registration/login flow to ensure data is consistent.
   * @returns {Promise<{success: boolean, message: string}>}
   */
  async forceSyncFromServer() {
    console.log('[UserService] Starting force sync from server by running ensureUserIsRegistered...');
    
    try {
      // 1. Run the full get/register user flow.
      // This ensures we have the most up-to-date user info from the server.
      const userInfo = await this.ensureUserIsRegistered(true);

      if (userInfo && userInfo.id) {
        console.log('[UserService] Successfully ensured user is registered. UserInfo:', userInfo);

        // 2. Explicitly update the total clicks and reset pending clicks.
        await this._storageSet(CONFIG.STORAGE_KEYS.TOTAL_CLICKS, (userInfo.total_clicks || 0).toString());
        await this._storageSet(CONFIG.STORAGE_KEYS.PENDING_CLICKS, '0');
        
        console.log('[UserService] Force sync complete. Local storage overwritten.');
        return { success: true, message: '同步成功！' };
      } else {
        const errorMsg = '无法从服务器同步或创建账户';
        console.error(`[UserService] ${errorMsg}`);
        return { success: false, message: errorMsg };
      }
    } catch (e) {
      console.error('[UserService] An error occurred during force sync call:', e);
      return { success: false, message: '同步失败，发生网络错误' };
    }
  }
}

export default new UserService();
