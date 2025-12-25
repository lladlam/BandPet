// config.js
export const CONFIG = {
  // 中转服务器配置
  SERVER: {
    BASE_URL: 'http://103.205.253.87:22207'
  },
  
  // 注意：URL 前缀在 api-service.js 中硬编码了
  // 这里不再需要配置
  
  // 应用配置
  APP: {
    NAME: 'BandPet',
    VERSION: '0.3.4 Alpha',
    MAX_CLICKS_PER_BATCH: 50,
    SYNC_INTERVAL: 300000,
    RANK_LIMIT: 10
  },
  
  // 存储键名
  STORAGE_KEYS: {
    IS_LOCALLY_ACTIVATED: 'is_locally_activated',
    DEVICE_ID: 'device_id',
    USER_INFO: 'user_info',
    PENDING_CLICKS: 'pending_clicks',
    LAST_SYNC_TIME: 'last_sync_time',
    TOTAL_CLICKS: 'total_clicks'
  }
}
