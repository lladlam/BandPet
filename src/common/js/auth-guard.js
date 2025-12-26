// src/common/js/auth-guard.js

import storage from '@system.storage';
import router from '@system.router';
import ApiService from './api-service.js';
import { CONFIG } from './config.js';

/**
 * Checks if the user has the necessary activation and credentials to access a network feature.
 * This function implements the following logic:
 * 1. Checks for a local activation flag. If not present, redirects to the activation page.
 * 2. If locally activated, checks for stored user info with a server-side ID.
 * 3. If user info is missing, it attempts to fetch it from the server using the stored device code.
 * 4. Returns the access status and user info.
 * @returns {Promise<Object>} An object with: { canAccess: boolean, userInfo: Object|null, message: string }
 */
async function checkNetworkAccess() {
  // Helper to promisify storage.get - it resolves with the RAW VALUE.
  const _promisifiedStorageGet = (key) => {
    return new Promise((resolve) => {
      storage.get({
        key: key,
        // The 'data' parameter IS the value. Can be undefined if not found.
        success: (data) => resolve(data),
        fail: () => resolve(null) // Resolve with null on any failure.
      });
    });
  };

  // Helper to promisify storage.set
  const _promisifiedStorageSet = (key, value) => {
    return new Promise((resolve, reject) => {
      storage.set({
        key: key,
        value: value,
        success: resolve,
        fail: (err, code) => reject(new Error(`Storage.set failed for key '${key}' with code ${code}: ${err}`))
      });
    });
  };

  try {
    // 1. Check for local activation flag
    const localActivationValue = await _promisifiedStorageGet(CONFIG.STORAGE_KEYS.IS_LOCALLY_ACTIVATED);
    if (localActivationValue !== 'true') {
      router.push({ uri: 'activate' });
      return { canAccess: false, userInfo: null, message: '设备未激活，请先激活。' };
    }

    // 2. Check for existing User Info in storage
    const userInfoJSON = await _promisifiedStorageGet(CONFIG.STORAGE_KEYS.USER_INFO);
    if (userInfoJSON) {
      try {
        const userInfo = JSON.parse(userInfoJSON);
        if (userInfo && userInfo.id) {
          console.log('AuthGuard: User ID found in storage.');
          return { canAccess: true, userInfo: userInfo, message: '验证通过' };
        }
      } catch(e) { /* Malformed JSON, proceed to fetch from server */ }
    }

    // 3. User Info is missing or malformed, try to fetch it from server
    console.log('AuthGuard: User Info not found in storage, attempting to recover from server.');
    
    const deviceCode = await _promisifiedStorageGet(CONFIG.STORAGE_KEYS.DEVICE_ID);
    if (!deviceCode) {
        router.push({ uri: 'activate' });
        return { canAccess: false, userInfo: null, message: '无法找到设备码，请重新激活。' };
    }

    // Use checkDeviceRegistration to get existing user data
    const result = await ApiService.checkDeviceRegistration(deviceCode);

    if (result && result.is_registered && result.userInfo) {
      console.log('AuthGuard: Successfully recovered User Info from server.');
      await _promisifiedStorageSet(CONFIG.STORAGE_KEYS.USER_INFO, JSON.stringify(result.userInfo));
      return { canAccess: true, userInfo: result.userInfo, message: '用户ID恢复成功' };
    } else {
      console.log('AuthGuard: Failed to recover User Info, device may not be registered on server.');
      router.push({ uri: 'activate' }); // Force re-activation
      return { canAccess: false, userInfo: null, message: '无法恢复用户信息，请重新激活。' };
    }

  } catch (e) {
    console.error('AuthGuard: Error during checkNetworkAccess', e);
    router.push({ uri: 'activate' }); // On any catastrophic error, default to re-activation
    return { canAccess: false, userInfo: null, message: `发生致命错误: ${e.message}` };
  }
}

export default {
  checkNetworkAccess
};
