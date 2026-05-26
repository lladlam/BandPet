import storage from '@system.storage';

export const getStorageValue = (key) => {
  return new Promise((resolve) => {
    storage.get({
      key,
      success: (data) => {
        if (data && typeof data === 'object' && data.value !== undefined) {
          resolve(data.value);
          return;
        }
        resolve(data);
      },
      fail: () => resolve(null)
    });
  });
};

export const setStorageValue = (key, value) => {
  return new Promise((resolve, reject) => {
    storage.set({
      key,
      value,
      success: resolve,
      fail: (err, code) => reject(new Error(`Storage.set failed for '${key}': ${err} (${code})`))
    });
  });
};

export const deleteStorageKey = (key) => {
  return new Promise((resolve, reject) => {
    storage.delete({
      key,
      success: resolve,
      fail: (err, code) => reject(new Error(`Storage.delete failed for '${key}': ${err} (${code})`))
    });
  });
};
