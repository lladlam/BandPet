// BandPet/src/common/js/auth.js
import storage from '@system.storage';
import router from '@system.router';
import { CONFIG } from './config.js';

export const auth = {
  /**
   * Gets the user's activation state from storage.
   * @returns {Promise<{isActivated: boolean, userInfo: any}>}
   */
  async getActivationState() {
    return new Promise((resolve) => {
      storage.get({
        key: 'is_activated',
        success: (isActivatedData) => {
          if (isActivatedData === 'true') {
            storage.get({
              key: CONFIG.STORAGE_KEYS.USER_INFO,
              success: (userInfoData) => {
                resolve({
                  isActivated: true,
                  userInfo: userInfoData ? JSON.parse(userInfoData) : null
                });
              },
              fail: () => {
                // Activated but couldn't get user info
                resolve({ isActivated: false, userInfo: null });
              }
            });
          } else {
            // Not activated
            resolve({ isActivated: false, userInfo: null });
          }
        },
        fail: () => {
          // Failed to get activation status
          resolve({ isActivated: false, userInfo: null });
        }
      });
    });
  }
};
