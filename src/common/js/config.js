// config.js
export const CONFIG = {
  // Supabase配置
  SUPABASE: {
    URL: 'https://jqubyqnhgyxazpnpjyqf.supabase.co',
    KEY: 'sb_publishable__UMYGv1VDo-ZrOvuUgZLFg_WKqyc7M-', // 请替换为你的Supabase匿名密钥
    API_URL: 'https://jqubyqnhgyxazpnpjyqf.supabase.co/functions/v1/bright-responder'
  },
  
  // 应用配置
  APP: {
    NAME: 'BandPet',
    VERSION: '1.0.0',
    MAX_CLICKS_PER_BATCH: 50, // 批量上传最大点击数
    SYNC_INTERVAL: 300000, // 5分钟同步一次
    RANK_LIMIT: 10 // 排行榜显示数量
  },
  
  // 存储键名
  STORAGE_KEYS: {
    DEVICE_ID: 'device_id',
    USER_INFO: 'user_info',
    PENDING_CLICKS: 'pending_clicks',
    LAST_SYNC_TIME: 'last_sync_time',
    TOTAL_CLICKS: 'total_clicks'
  }
}
