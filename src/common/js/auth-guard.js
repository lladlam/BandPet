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
  try {
    // 1. Check for local activation
    const localActivation = await storage.get({ key: CONFIG.STORAGE_KEYS.IS_LOCALLY_ACTIVATED });
    if (localActivation.value !== 'true') {
      router.push({ uri: 'activate' });
      return { canAccess: false, userInfo: null, message: '设备未激活，请先激活。' };
    }

    // 2. Check for existing User ID
    const userInfoResult = await storage.get({ key: CONFIG.STORAGE_KEYS.USER_INFO });
    if (userInfoResult.value) {
      const userInfo = JSON.parse(userInfoResult.value);
      if (userInfo && userInfo.id) {
        console.log('AuthGuard: User ID found in storage.');
        return { canAccess: true, userInfo: userInfo, message: '验证通过' };
      }
    }

    // 3. User ID is missing, try to fetch it
    console.log('AuthGuard: User ID not found, attempting to fetch from server.');
    
    // We need the device code to get the user ID
    const deviceCodeResult = await storage.get({ key: CONFIG.STORAGE_KEYS.DEVICE_ID });
    if (!deviceCodeResult.value) {
        // This case is unlikely if local activation worked, but good to handle.
        router.push({ uri: 'activate' });
        return { canAccess: false, userInfo: null, message: '无法找到设备码，请重新激活。' };
    }
    const deviceCode = deviceCodeResult.value;

    const apiResult = await ApiService.registerAndGetUserId(deviceCode);

    if (apiResult.success && apiResult.userInfo && (apiResult.userInfo.id || apiResult.userInfo.user_number)) {
      console.log('AuthGuard: Successfully fetched new User ID.');
      
      const userInfoToSave = {
        id: apiResult.userInfo.id || apiResult.userInfo.user_number,
        user_number: apiResult.userInfo.user_number,
        pet_name: apiResult.userInfo.pet_name,
        total_clicks: apiResult.userInfo.total_clicks || 0
      };

      // Save the newly fetched user info
      await storage.set({ key: CONFIG.STORAGE_KEYS.USER_INFO, value: JSON.stringify(userInfoToSave) });
      return { canAccess: true, userInfo: userInfoToSave, message: '用户ID获取成功' };
    } else {
      console.log('AuthGuard: Failed to fetch User ID.');
      return { canAccess: false, userInfo: null, message: '获取用户ID失败，请检查网络后重试。' };
    }

  } catch (e) {
    console.error('AuthGuard: Error during checkNetworkAccess', e);
    return { canAccess: false, userInfo: null, message: `发生错误: ${e.message}` };
  }
}

export default {
  checkNetworkAccess
};
