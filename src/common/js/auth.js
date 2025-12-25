// BandPet/src/common/js/auth.js
import storage from '@system.storage';
import router from '@system.router';
import { CONFIG } from './config.js';

export const auth = {
  /**
   * Gets the user's activation state from storage.
   * Returns true if user info exists in storage.
   */
  async getActivationState() {
    return new Promise((resolve) => {
      storage.get({
        key: CONFIG.STORAGE_KEYS.USER_INFO,
        success: (userInfoData) => {
          if (userInfoData && userInfoData.value) {
            try {
              const parsed = JSON.parse(userInfoData.value);
              resolve({ isActivated: true, userInfo: parsed });
            } catch (e) {
              resolve({ isActivated: false, userInfo: null });
            }
          } else {
            resolve({ isActivated: false, userInfo: null });
          }
        },
        fail: () => {
          resolve({ isActivated: false, userInfo: null });
        }
      });
    });
  }
};
