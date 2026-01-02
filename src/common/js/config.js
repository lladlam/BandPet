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
    VERSION: '0.3.5 Alpha',
    VERSION_CODE: 35,  // 新增：用于版本比较的数字（0.3.5 -> 35）
    MAX_CLICKS_PER_BATCH: 50,
    SYNC_INTERVAL: 60000,
    RANK_LIMIT: 10,
    
    // 更新检查配置（新增）
    CHECK_UPDATE_INTERVAL: 3600000, // 1小时检查一次更新
    ANNOUNCEMENT_CACHE_TIME: 300000, // 5分钟缓存公告
  },
  
  // 存储键名
  STORAGE_KEYS: {
    DEVICE_ID: 'device_id',
    IS_LOCALLY_ACTIVATED: 'is_locally_activated',
    USER_INFO: 'user_info',
    PENDING_CLICKS: 'pending_clicks',
    LAST_SYNC_TIME: 'last_sync_time',
    TOTAL_CLICKS: 'total_clicks',
    
    // 新增存储键
    LAST_UPDATE_CHECK_TIME: 'last_update_check_time',
    LAST_ANNOUNCEMENT_FETCH_TIME: 'last_announcement_fetch_time',
    CACHED_ANNOUNCEMENTS: 'cached_announcements',
    CACHED_UPDATE_INFO: 'cached_update_info',
    IGNORED_VERSION: 'ignored_version_code', // 用户忽略的版本
    FORCE_UPDATE_REQUIRED: 'force_update_required', // 是否需要强制更新
  }
}
