import storage from '@system.storage';

export function storageGet(key) {
  return new Promise((resolve) => {
    storage.get({
      key,
      success: (data) => resolve(data),
      fail: () => resolve(null)
    });
  });
}

export function storageSet(key, value) {
  return new Promise((resolve, reject) => {
    storage.set({
      key,
      value,
      success: resolve,
      fail: (err, code) => reject(new Error(`Storage.set failed for '${key}': ${err} (${code})`))
    });
  });
}

export function storageDelete(key) {
  return new Promise((resolve, reject) => {
    storage.delete({
      key,
      success: resolve,
      fail: (err, code) => reject(new Error(`Storage.delete failed for '${key}': ${err} (${code})`))
    });
  });
}
