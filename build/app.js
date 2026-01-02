export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createAppHandler = function() {
            return (()=>{
                var __webpack_modules__ = {
                    "./src/common/js/api-service.js" (__unused_rspack_module, exports, __webpack_require__) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports["default"] = void 0;
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.fetch"));
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.router"));
                        var _system3 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                        var _system4 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                        var _config = __webpack_require__("./src/common/js/config.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        function ownKeys(e, r) {
                            var t = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                r && (o = o.filter(function(r) {
                                    return Object.getOwnPropertyDescriptor(e, r).enumerable;
                                })), t.push.apply(t, o);
                            }
                            return t;
                        }
                        function _objectSpread(e) {
                            for(var r = 1; r < arguments.length; r++){
                                var t = null != arguments[r] ? arguments[r] : {};
                                r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
                                    _defineProperty(e, r, t[r]);
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
                                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                                });
                            }
                            return e;
                        }
                        function _defineProperty(e, r, t) {
                            return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
                                value: t,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[r] = t, e;
                        }
                        function _toPropertyKey(t) {
                            var i = _toPrimitive(t, "string");
                            return "symbol" == typeof i ? i : i + "";
                        }
                        function _toPrimitive(t, r) {
                            if ("object" != typeof t || !t) return t;
                            var e = t[Symbol.toPrimitive];
                            if (void 0 !== e) {
                                var i = e.call(t, r || "default");
                                if ("object" != typeof i) return i;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === r ? String : Number)(t);
                        }
                        class ApiService {
                            constructor(){
                                this.baseUrl = _config.CONFIG.SERVER.BASE_URL;
                                this.baseHeaders = {
                                    'Content-Type': 'application/json'
                                };
                            }
                            async request(action, data = {}) {
                                const url = `${this.baseUrl}/api`;
                                const options = {
                                    url,
                                    method: 'POST',
                                    header: this.baseHeaders,
                                    responseType: 'json'
                                };
                                options.data = JSON.stringify(_objectSpread({
                                    action
                                }, data));
                                return new Promise((resolve, reject)=>{
                                    _system.default.fetch(_objectSpread(_objectSpread({}, options), {}, {
                                        success: (response)=>{
                                            const responseData = response.data || {};
                                            if (response.code >= 200 && response.code < 300) resolve(responseData);
                                            else {
                                                console.error(`HTTP Error: ${response.code}`, response);
                                                reject(new Error(`HTTP ${response.code}: ${JSON.stringify(responseData)}`));
                                            }
                                        },
                                        fail: (error, code)=>{
                                            console.error(`[ApiService] Request Failed. Code: ${code}, Error: ${JSON.stringify(error)}`);
                                            reject(new Error(`Request failed: ${error.data || 'Connection is invalid'}`));
                                        }
                                    }));
                                });
                            }
                            async getRankings(limit = 10) {
                                try {
                                    const result = await this.request('get_rankings', {
                                        limit: limit
                                    });
                                    return {
                                        success: true,
                                        rankings: result.rankings || []
                                    };
                                } catch (error) {
                                    console.error('获取排行榜失败:', error);
                                    return {
                                        success: false,
                                        rankings: [],
                                        error: error.message
                                    };
                                }
                            }
                            async syncClicks(userId, clickCount) {
                                try {
                                    await this.request('sync_clicks', {
                                        user_id: userId,
                                        click_count: clickCount
                                    });
                                    return {
                                        success: true
                                    };
                                } catch (error) {
                                    console.error('上报点击次数失败:', error);
                                    return {
                                        success: false,
                                        error: error.message
                                    };
                                }
                            }
                            async syncFromServer(userId) {
                                try {
                                    const result = await this.request('sync_from_server', {
                                        user_id: userId
                                    });
                                    if (result && result.success) {
                                        console.log('从服务器同步数据成功:', result.userInfo);
                                        return {
                                            success: true,
                                            userInfo: result.userInfo
                                        };
                                    }
                                    console.error('同步数据失败:', result ? result.error : '未知错误');
                                    return {
                                        success: false,
                                        error: result ? result.error : '服务器未返回成功状态'
                                    };
                                } catch (error) {
                                    console.error('从服务器同步数据时发生网络错误:', error);
                                    return {
                                        success: false,
                                        error: error.message
                                    };
                                }
                            }
                            async checkPetNameAvailability(petName) {
                                try {
                                    const result = await this.request('check_pet_name', {
                                        pet_name: petName
                                    });
                                    return _objectSpread({
                                        success: true
                                    }, result);
                                } catch (error) {
                                    console.error('检查宠物名可用性时发生网络错误:', error);
                                    return {
                                        success: false,
                                        error: error.message,
                                        isAvailable: false
                                    };
                                }
                            }
                            async setPetName(userId, newName) {
                                try {
                                    const result = await this.request('set_pet_name', {
                                        user_id: userId,
                                        new_name: newName
                                    });
                                    return result;
                                } catch (error) {
                                    console.error('修改宠物名失败:', error);
                                    return {
                                        success: false,
                                        error: error.message
                                    };
                                }
                            }
                            async checkDeviceRegistration(deviceId) {
                                try {
                                    const result = await this.request('check_registration', {
                                        device_id: deviceId
                                    });
                                    console.log('预激活检查成功:', result);
                                    return result;
                                } catch (error) {
                                    console.error('预激活检查时发生网络错误:', error);
                                    return {
                                        is_registered: false,
                                        can_auto_activate: false,
                                        error: error.message
                                    };
                                }
                            }
                            async registerAndGetUserId(deviceId) {
                                try {
                                    return await this.request('register_device_and_get_id', {
                                        device_id: deviceId
                                    });
                                } catch (error) {
                                    console.error('注册或获取用户ID时发生网络错误:', error);
                                    return {
                                        success: false,
                                        message: error.message
                                    };
                                }
                            }
                            async getAnnouncements(limit = 10) {
                                try {
                                    const result = await this.request('get_announcements', {
                                        limit: limit
                                    });
                                    console.log('Original announcement result from server:', JSON.stringify(result));
                                    return {
                                        success: result.success || false,
                                        announcements: result.announcements || [],
                                        count: result.count || 0,
                                        timestamp: result.timestamp,
                                        error: result.error
                                    };
                                } catch (error) {
                                    console.error('获取公告失败:', error);
                                    return {
                                        success: false,
                                        error: error.message,
                                        announcements: [],
                                        count: 0
                                    };
                                }
                            }
                            async checkAppUpdate(currentVersionCode) {
                                try {
                                    const result = await this.request('check_update', {
                                        current_version_code: currentVersionCode
                                    });
                                    return {
                                        success: result.success || false,
                                        hasUpdate: result.has_update || false,
                                        updateInfo: result.update_info || null,
                                        isForceUpdate: result.is_force_update || false,
                                        currentVersionCode: result.current_version_code || currentVersionCode,
                                        latestVersionCode: result.latest_version_code || currentVersionCode,
                                        error: result.error
                                    };
                                } catch (error) {
                                    console.error('检查更新失败:', error);
                                    return {
                                        success: false,
                                        error: error.message,
                                        hasUpdate: false,
                                        isForceUpdate: false
                                    };
                                }
                            }
                        }
                        var _default = exports["default"] = new ApiService();
                    },
                    "./src/common/js/back-interceptor.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports["default"] = void 0;
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.router"));
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        class BackInterceptor {
                            constructor(){
                                this.isBlocking = false;
                                this.blockReason = '';
                                this.originalBack = null;
                            }
                            enable(reason = '请先完成应用更新') {
                                this.isBlocking = true;
                                this.blockReason = reason;
                                if (!this.originalBack) this.originalBack = _system.default.back;
                                _system.default.back = ()=>{
                                    if (this.isBlocking) return void _system2.default.showToast({
                                        message: this.blockReason,
                                        duration: 2000
                                    });
                                    if (this.originalBack) this.originalBack.call(_system.default);
                                };
                                console.log('返回拦截器启用:', reason);
                            }
                            disable() {
                                this.isBlocking = false;
                                this.blockReason = '';
                                if (this.originalBack) {
                                    _system.default.back = this.originalBack;
                                    this.originalBack = null;
                                }
                                console.log('返回拦截器禁用');
                            }
                            intercept(reason) {
                                this.enable(reason);
                            }
                            restore() {
                                this.disable();
                            }
                        }
                        var _default = exports["default"] = new BackInterceptor();
                    },
                    "./src/common/js/config.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.CONFIG = void 0;
                        const CONFIG = exports.CONFIG = {
                            SERVER: {
                                BASE_URL: 'http://103.205.253.87:22207'
                            },
                            APP: {
                                NAME: 'BandPet',
                                VERSION: '0.3.5 Alpha',
                                VERSION_CODE: 35,
                                MAX_CLICKS_PER_BATCH: 50,
                                SYNC_INTERVAL: 60000,
                                RANK_LIMIT: 10,
                                CHECK_UPDATE_INTERVAL: 3600000,
                                ANNOUNCEMENT_CACHE_TIME: 300000
                            },
                            STORAGE_KEYS: {
                                DEVICE_ID: 'device_id',
                                IS_LOCALLY_ACTIVATED: 'is_locally_activated',
                                USER_INFO: 'user_info',
                                PENDING_CLICKS: 'pending_clicks',
                                LAST_SYNC_TIME: 'last_sync_time',
                                TOTAL_CLICKS: 'total_clicks',
                                LAST_UPDATE_CHECK_TIME: 'last_update_check_time',
                                LAST_ANNOUNCEMENT_FETCH_TIME: 'last_announcement_fetch_time',
                                CACHED_ANNOUNCEMENTS: 'cached_announcements',
                                CACHED_UPDATE_INFO: 'cached_update_info',
                                IGNORED_VERSION: 'ignored_version_code',
                                FORCE_UPDATE_REQUIRED: 'force_update_required'
                            }
                        };
                    },
                    "./src/common/js/update-manager.js" (__unused_rspack_module, exports, __webpack_require__) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports["default"] = void 0;
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                        var _apiService = _interopRequireDefault(__webpack_require__("./src/common/js/api-service.js"));
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                        var _system3 = _interopRequireDefault($app_require$1("@app-module/system.router"));
                        var _config = __webpack_require__("./src/common/js/config.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        function ownKeys(e, r) {
                            var t = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                r && (o = o.filter(function(r) {
                                    return Object.getOwnPropertyDescriptor(e, r).enumerable;
                                })), t.push.apply(t, o);
                            }
                            return t;
                        }
                        function _objectSpread(e) {
                            for(var r = 1; r < arguments.length; r++){
                                var t = null != arguments[r] ? arguments[r] : {};
                                r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
                                    _defineProperty(e, r, t[r]);
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
                                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                                });
                            }
                            return e;
                        }
                        function _defineProperty(e, r, t) {
                            return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
                                value: t,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[r] = t, e;
                        }
                        function _toPropertyKey(t) {
                            var i = _toPrimitive(t, "string");
                            return "symbol" == typeof i ? i : i + "";
                        }
                        function _toPrimitive(t, r) {
                            if ("object" != typeof t || !t) return t;
                            var e = t[Symbol.toPrimitive];
                            if (void 0 !== e) {
                                var i = e.call(t, r || "default");
                                if ("object" != typeof i) return i;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === r ? String : Number)(t);
                        }
                        class UpdateManager {
                            constructor(){
                                this.checkInterval = _config.CONFIG.APP.CHECK_UPDATE_INTERVAL || 3600000;
                            }
                            async checkUpdate(forceCheck = false) {
                                try {
                                    if (!forceCheck) {
                                        const shouldCheck = await this.shouldCheckUpdate();
                                        if (!shouldCheck) return {
                                            success: true,
                                            skipped: true,
                                            message: '未到检查时间'
                                        };
                                    }
                                    const currentVersionCode = _config.CONFIG.APP.VERSION_CODE;
                                    const result = await _apiService.default.checkAppUpdate(currentVersionCode);
                                    if (result.success) {
                                        await this.recordUpdateCheck();
                                        if (result.hasUpdate) {
                                            const updateInfo = result.updateInfo;
                                            const ignored = await this.isVersionIgnored(updateInfo.version_code);
                                            if (!ignored && !result.isForceUpdate) await this.cacheUpdateInfo(updateInfo);
                                            return _objectSpread(_objectSpread({}, result), {}, {
                                                ignored: ignored
                                            });
                                        }
                                    }
                                    return result;
                                } catch (error) {
                                    console.error('检查更新失败:', error);
                                    return {
                                        success: false,
                                        error: error.message,
                                        hasUpdate: false
                                    };
                                }
                            }
                            async shouldCheckUpdate() {
                                try {
                                    const result = await _system.default.get({
                                        key: _config.CONFIG.STORAGE_KEYS.LAST_UPDATE_CHECK_TIME
                                    });
                                    if (!result || !result.value) return true;
                                    const lastCheckTime = new Date(result.value).getTime();
                                    const now = Date.now();
                                    return now - lastCheckTime >= this.checkInterval;
                                } catch (error) {
                                    console.error('检查更新时间失败:', error);
                                    return true;
                                }
                            }
                            async recordUpdateCheck() {
                                try {
                                    await _system.default.set({
                                        key: _config.CONFIG.STORAGE_KEYS.LAST_UPDATE_CHECK_TIME,
                                        value: new Date().toISOString()
                                    });
                                } catch (error) {
                                    console.error('记录更新时间失败:', error);
                                }
                            }
                            async cacheUpdateInfo(updateInfo) {
                                try {
                                    await _system.default.set({
                                        key: _config.CONFIG.STORAGE_KEYS.CACHED_UPDATE_INFO,
                                        value: JSON.stringify(updateInfo)
                                    });
                                } catch (error) {
                                    console.error('缓存更新信息失败:', error);
                                }
                            }
                            async getCachedUpdateInfo() {
                                try {
                                    const result = await _system.default.get({
                                        key: _config.CONFIG.STORAGE_KEYS.CACHED_UPDATE_INFO
                                    });
                                    if (result && result.value) return JSON.parse(result.value);
                                    return null;
                                } catch (error) {
                                    console.error('获取缓存更新信息失败:', error);
                                    return null;
                                }
                            }
                            async ignoreVersion(versionCode) {
                                try {
                                    await _system.default.set({
                                        key: _config.CONFIG.STORAGE_KEYS.IGNORED_VERSION,
                                        value: versionCode.toString()
                                    });
                                } catch (error) {
                                    console.error('忽略版本失败:', error);
                                }
                            }
                            async isVersionIgnored(versionCode) {
                                try {
                                    const result = await _system.default.get({
                                        key: _config.CONFIG.STORAGE_KEYS.IGNORED_VERSION
                                    });
                                    if (result && result.value) return parseInt(result.value) === versionCode;
                                    return false;
                                } catch (error) {
                                    console.error('检查忽略版本失败:', error);
                                    return false;
                                }
                            }
                            async showUpdateDialog(updateInfo, isForceUpdate = false) {
                                return new Promise((resolve)=>{
                                    if (isForceUpdate) {
                                        _system3.default.push({
                                            uri: 'pages/force-update/index',
                                            params: {
                                                updateInfo: updateInfo,
                                                isForceUpdate: true
                                            }
                                        });
                                        resolve('force_update');
                                        return;
                                    }
                                    _system2.default.showDialog({
                                        title: `发现新版本 ${updateInfo.version_name}`,
                                        message: `${updateInfo.title}\n\n${updateInfo.changelog}`,
                                        buttons: [
                                            {
                                                text: '忽略此版本',
                                                color: '#8E8E93'
                                            },
                                            {
                                                text: '知道了',
                                                color: '#007AFF'
                                            }
                                        ],
                                        success: (index)=>{
                                            if (0 === index) resolve('ignore');
                                            else if (1 === index) resolve('know');
                                        },
                                        cancel: ()=>{
                                            resolve('cancel');
                                        }
                                    });
                                });
                            }
                            async checkAndHandleForceUpdate() {
                                try {
                                    const result = await this.checkUpdate(true);
                                    if (result.success && result.hasUpdate && result.updateInfo) {
                                        if (result.isForceUpdate) {
                                            await this.markForceUpdateRequired();
                                            _system3.default.push({
                                                uri: 'pages/force-update/index',
                                                params: {
                                                    updateInfo: result.updateInfo,
                                                    isForceUpdate: true
                                                }
                                            });
                                            return {
                                                hasForceUpdate: true,
                                                updateInfo: result.updateInfo
                                            };
                                        }
                                    }
                                    return {
                                        hasForceUpdate: false
                                    };
                                } catch (error) {
                                    console.error('强制更新检查失败:', error);
                                    return {
                                        hasForceUpdate: false,
                                        error: error.message
                                    };
                                }
                            }
                            async markForceUpdateRequired() {
                                try {
                                    await _system.default.set({
                                        key: _config.CONFIG.STORAGE_KEYS.FORCE_UPDATE_REQUIRED,
                                        value: 'true'
                                    });
                                } catch (error) {
                                    console.error('标记强制更新失败:', error);
                                }
                            }
                            async clearForceUpdateMark() {
                                try {
                                    await _system.default.delete({
                                        key: _config.CONFIG.STORAGE_KEYS.FORCE_UPDATE_REQUIRED
                                    });
                                } catch (error) {
                                    console.error('清除强制更新标记失败:', error);
                                }
                            }
                            async isForceUpdateRequired() {
                                try {
                                    const result = await _system.default.get({
                                        key: _config.CONFIG.STORAGE_KEYS.FORCE_UPDATE_REQUIRED
                                    });
                                    return result && 'true' === result.value;
                                } catch (error) {
                                    console.error('检查强制更新状态失败:', error);
                                    return false;
                                }
                            }
                            async clearUpdateCache() {
                                try {
                                    await _system.default.delete({
                                        key: _config.CONFIG.STORAGE_KEYS.CACHED_UPDATE_INFO
                                    });
                                    await _system.default.delete({
                                        key: _config.CONFIG.STORAGE_KEYS.IGNORED_VERSION
                                    });
                                    await _system.default.delete({
                                        key: _config.CONFIG.STORAGE_KEYS.FORCE_UPDATE_REQUIRED
                                    });
                                } catch (error) {
                                    console.error('清除更新缓存失败:', error);
                                }
                            }
                        }
                        var _default = exports["default"] = new UpdateManager();
                    },
                    "./src/common/js/userService.js" (__unused_rspack_module, exports, __webpack_require__) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports["default"] = void 0;
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.device"));
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                        var _apiService = _interopRequireDefault(__webpack_require__("./src/common/js/api-service.js"));
                        var _config = __webpack_require__("./src/common/js/config.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        class UserService {
                            _storageGet(key) {
                                return new Promise((resolve)=>{
                                    _system2.default.get({
                                        key: key,
                                        success: (data)=>resolve(data),
                                        fail: ()=>resolve(null)
                                    });
                                });
                            }
                            _storageSet(key, value) {
                                return new Promise((resolve, reject)=>{
                                    _system2.default.set({
                                        key: key,
                                        value: value,
                                        success: resolve,
                                        fail: (err, code)=>reject(new Error(`Storage.set failed for '${key}': ${err} (${code})`))
                                    });
                                });
                            }
                            _getRawDeviceId() {
                                return new Promise((resolve)=>{
                                    _system.default.getSerial({
                                        success: async (data)=>{
                                            let serial = data ? data.serial : null;
                                            if ('NA' === serial) {
                                                console.warn("Device serial is 'NA', using a fixed test serial.");
                                                serial = 'TESTVM-SN-0123456789';
                                            }
                                            if (!serial) {
                                                console.error('Failed to get a valid device serial.');
                                                resolve(null);
                                                return;
                                            }
                                            try {
                                                await this._storageSet(_config.CONFIG.STORAGE_KEYS.DEVICE_ID, serial);
                                                console.log('Saved raw device ID:', serial);
                                                resolve(serial);
                                            } catch (e) {
                                                console.error('Failed to save raw device ID to storage:', e);
                                                resolve(null);
                                            }
                                        },
                                        fail: (err, code)=>{
                                            console.error("Connection is invalid");
                                            resolve(null);
                                        }
                                    });
                                });
                            }
                            async _saveUserInfo(userInfo) {
                                if (!userInfo || !userInfo.id && !userInfo.user_number) throw new Error("User info is invalid, cannot save.");
                                const userInfoToSave = {
                                    id: userInfo.id || userInfo.user_number,
                                    user_number: userInfo.user_number,
                                    pet_name: userInfo.pet_name,
                                    total_clicks: userInfo.total_clicks || 0
                                };
                                await this._storageSet(_config.CONFIG.STORAGE_KEYS.USER_INFO, JSON.stringify(userInfoToSave));
                                console.log("Successfully saved user info to storage:", userInfoToSave);
                                return userInfoToSave;
                            }
                            async ensureUserIsRegistered(forceSync = false) {
                                console.log('[UserService] Checking for existing user info in storage...');
                                const existingUserInfoJSON = await this._storageGet(_config.CONFIG.STORAGE_KEYS.USER_INFO);
                                if (existingUserInfoJSON) {
                                    try {
                                        const userInfo = JSON.parse(existingUserInfoJSON);
                                        if (userInfo && userInfo.id) if (forceSync) {
                                            console.log('[UserService] Force sync enabled. Attempting to sync latest data from server...');
                                            try {
                                                const syncResult = await _apiService.default.syncFromServer(userInfo.id);
                                                if (syncResult && syncResult.success) {
                                                    console.log('[UserService] Successfully synced from server.');
                                                    return await this._saveUserInfo(syncResult.userInfo);
                                                }
                                                console.warn('[UserService] Sync from server failed, will use stale local data. Error:', syncResult ? syncResult.error : 'Unknown error');
                                                return userInfo;
                                            } catch (syncError) {
                                                console.error('[UserService] A critical error occurred during server sync:', syncError);
                                                return userInfo;
                                            }
                                        } else {
                                            console.log('[UserService] User is already registered. Found info:', userInfo);
                                            return userInfo;
                                        }
                                    } catch (e) {
                                        console.warn('[UserService] User info in storage is malformed. Proceeding with registration.');
                                    }
                                }
                                console.log('[UserService] User not found locally. Starting silent registration process...');
                                const deviceId = await this._getRawDeviceId();
                                if (!deviceId) {
                                    console.error('[UserService] CRITICAL: Cannot proceed with registration: failed to get device ID.');
                                    return null;
                                }
                                console.log(`[UserService] Got device ID: ${deviceId}`);
                                try {
                                    console.log('[UserService] Checking device registration with server...');
                                    const regResult = await _apiService.default.checkDeviceRegistration(deviceId);
                                    console.log('[UserService] Server registration check response:', JSON.stringify(regResult));
                                    if (regResult && regResult.is_registered && regResult.userInfo) {
                                        console.log('[UserService] Device is already registered on server. Restoring user info.');
                                        return await this._saveUserInfo(regResult.userInfo);
                                    }
                                    console.log('[UserService] Device not registered. Attempting to register a new user...');
                                    const newRegResult = await _apiService.default.registerAndGetUserId(deviceId);
                                    console.log('[UserService] Server new user registration response:', JSON.stringify(newRegResult));
                                    if (newRegResult && newRegResult.success && newRegResult.userInfo) {
                                        console.log('[UserService] Successfully registered new user.');
                                        return await this._saveUserInfo(newRegResult.userInfo);
                                    }
                                    console.error('[UserService] CRITICAL: Failed to register new user.', newRegResult ? newRegResult.message : 'No result from server');
                                    return null;
                                } catch (e) {
                                    console.error('[UserService] CRITICAL: An error occurred during the silent registration API calls:', e);
                                    return null;
                                }
                            }
                            async updatePendingClicks(amount) {
                                if ('number' != typeof amount || isNaN(amount)) {
                                    console.warn('[UserService] updatePendingClicks received an invalid amount:', amount);
                                    return null;
                                }
                                try {
                                    const pendingClicksData = await this._storageGet(_config.CONFIG.STORAGE_KEYS.PENDING_CLICKS);
                                    let currentClicks = parseInt(pendingClicksData) || 0;
                                    const newClicks = currentClicks + amount;
                                    await this._storageSet(_config.CONFIG.STORAGE_KEYS.PENDING_CLICKS, newClicks.toString());
                                    console.log(`[UserService] Pending clicks updated by ${amount}. New value: ${newClicks}`);
                                    return newClicks;
                                } catch (e) {
                                    console.error('[UserService] Failed to update pending clicks in storage:', e);
                                    return null;
                                }
                            }
                            async triggerClickSync() {
                                console.log('[UserService] Triggering click sync...');
                                const userInfoJSON = await this._storageGet(_config.CONFIG.STORAGE_KEYS.USER_INFO);
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
                                } catch (e) {
                                    console.warn('[UserService] Sync aborted: Could not parse user info.');
                                    return false;
                                }
                                const pendingClicksData = await this._storageGet(_config.CONFIG.STORAGE_KEYS.PENDING_CLICKS);
                                const clicksToSync = parseInt(pendingClicksData);
                                if (isNaN(clicksToSync)) {
                                    console.log('[UserService] No pending clicks to sync (value is NaN).');
                                    return true;
                                }
                                console.log(`[UserService] Found ${clicksToSync} pending clicks for user ${userInfo.id}. Syncing...`);
                                const result = await _apiService.default.syncClicks(userInfo.id, clicksToSync);
                                if (result.success) {
                                    console.log('[UserService] Sync successful. Resetting pending clicks.');
                                    await this._storageSet(_config.CONFIG.STORAGE_KEYS.PENDING_CLICKS, '0');
                                    return true;
                                }
                                console.error('[UserService] Sync failed:', result.error);
                                return false;
                            }
                            async forceSyncFromServer() {
                                console.log('[UserService] Starting force sync from server...');
                                try {
                                    console.log('[UserService] Step 1: Syncing local pending clicks before fetching server data.');
                                    const clickSyncSuccess = await this.triggerClickSync();
                                    if (!clickSyncSuccess) {
                                        const errorMsg = '无法同步本地点击数据，已取消从服务器更新，以防数据丢失。';
                                        console.error(`[UserService] ${errorMsg}`);
                                        return {
                                            success: false,
                                            message: errorMsg
                                        };
                                    }
                                    console.log('[UserService] Step 1: Local pending clicks synced successfully.');
                                    console.log('[UserService] Step 2: Fetching latest user data from server.');
                                    const userInfo = await this.ensureUserIsRegistered(true);
                                    if (userInfo && userInfo.id) {
                                        console.log('[UserService] Step 2: Successfully fetched and updated user info. UserInfo:', userInfo);
                                        console.log('[UserService] Force sync complete. Local storage is now up-to-date.');
                                        return {
                                            success: true,
                                            message: '同步成功！'
                                        };
                                    }
                                    {
                                        const errorMsg = '无法从服务器获取最新用户数据。';
                                        console.error(`[UserService] ${errorMsg}`);
                                        return {
                                            success: false,
                                            message: errorMsg
                                        };
                                    }
                                } catch (e) {
                                    console.error('[UserService] An error occurred during the force sync process:', e);
                                    return {
                                        success: false,
                                        message: '同步失败，发生未知错误'
                                    };
                                }
                            }
                        }
                        var _default = exports["default"] = new UserService();
                    },
                    "./src/manifest.json" (module) {
                        "use strict";
                        module.exports = JSON.parse('{"package":"com.lladlam.bandpet.9pro","name":"BandPet","versionName":"0.4.1","versionCode":41,"minPlatformVersion":1000,"icon":"/common/icon.png","deviceTypeList":["watch"],"features":[{"name":"system.router"},{"name":"system.device"},{"name":"system.fetch"},{"name":"system.storage"},{"name":"system.vibrator"},{"name":"system.prompt"}],"permissions":[{"name":"hapjs.permission.DEVICE_INFO"}],"config":{"logLevel":"debug","designWidth":336},"router":{"entry":"main","pages":{"main":{"component":"index"},"more":{"component":"index"},"leaderboard":{"component":"index"},"exchange":{"component":"index"},"market":{"component":"index"},"customize":{"component":"index"},"settings":{"component":"index"},"about":{"component":"index"},"announcement":{"component":"index"},"announcement-detail":{"component":"index"},"naming":{"component":"index"},"sync":{"component":"index"},"force-update":{"component":"index"}}},"display":{"backgroundColor":"#000000","textColor":"#ffffff"}}');
                    }
                };
                var __webpack_module_cache__ = {};
                function __webpack_require__(moduleId) {
                    var cachedModule = __webpack_module_cache__[moduleId];
                    if (void 0 !== cachedModule) return cachedModule.exports;
                    var module = __webpack_module_cache__[moduleId] = {
                        exports: {}
                    };
                    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                    return module.exports;
                }
                (()=>{
                    __webpack_require__.g = (()=>{
                        if ('object' == typeof globalThis) return globalThis;
                        try {
                            return this || new Function('return this')();
                        } catch (e) {
                            if ('object' == typeof window) return window;
                        }
                    })();
                })();
                (()=>{
                    __webpack_require__.rv = ()=>"1.6.8";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.6.8";
                })();
                var __webpack_exports__ = {};
                (()=>{
                    var $app_style$ = [];
                    var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.default = void 0;
                        var _userService = _interopRequireDefault(__webpack_require__("./src/common/js/userService.js"));
                        var _updateManager = _interopRequireDefault(__webpack_require__("./src/common/js/update-manager.js"));
                        var _backInterceptor = _interopRequireDefault(__webpack_require__("./src/common/js/back-interceptor.js"));
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.router"));
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        async function checkForceUpdateOnStart() {
                            try {
                                const forceUpdateRequired = await _updateManager.default.isForceUpdateRequired();
                                if (forceUpdateRequired) {
                                    const cachedUpdateInfo = await _updateManager.default.getCachedUpdateInfo();
                                    if (cachedUpdateInfo) {
                                        _system.default.replace({
                                            uri: '/force-update',
                                            params: {
                                                updateInfo: cachedUpdateInfo,
                                                isForceUpdate: true
                                            }
                                        });
                                        return true;
                                    }
                                }
                                const result = await _updateManager.default.checkAndHandleForceUpdate();
                                if (result.hasForceUpdate) return true;
                                return false;
                            } catch (error) {
                                console.error('强制更新检查失败:', error);
                                return false;
                            }
                        }
                        var _default = exports.default = {
                            async onCreate () {},
                            onShow () {},
                            onHide () {
                                console.log('[lifecycle] [app] onHide - Triggering final click sync before exit.');
                                _userService.default.triggerClickSync();
                            },
                            onDestroy () {
                                console.log('[lifecycle] [app] onDestroy');
                                _backInterceptor.default.restore();
                            },
                            onError (err) {
                                console.log(`[lifecycle] [app] onError errmsg: ${err.message}`);
                                console.log(`[lifecycle] [app] onError error stack: ${err.stack}`);
                            }
                        };
                    };
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.style = $app_style$;
                    $app_exports$.default.manifest = __webpack_require__("./src/manifest.json");
                    var $translateStyle$ = function(value) {
                        if ('string' == typeof value) return Object.fromEntries(value.split(';').filter((item)=>Boolean(item && item.trim())).map((item)=>{
                            const matchs = item.match(/([^:]+):(.*)/);
                            if (matchs && matchs.length > 2) return [
                                matchs[1].trim().replace(/-([a-z])/g, (_, match)=>match.toUpperCase()),
                                matchs[2].trim()
                            ];
                            return [];
                        }));
                        return value;
                    };
                    __webpack_require__.g.$translateStyle$ = $translateStyle$;
                })();
            })();
        };
        return createAppHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9iYWNrLWludGVyY2VwdG9yLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL3VwZGF0ZS1tYW5hZ2VyLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy91c2VyU2VydmljZS5qcyIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9hcHAudXgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBpLXNlcnZpY2UuanNcclxuaW1wb3J0IGZldGNoIGZyb20gJ0BzeXN0ZW0uZmV0Y2gnO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQHN5c3RlbS5zdG9yYWdlJztcclxuaW1wb3J0IHByb21wdCBmcm9tICdAc3lzdGVtLnByb21wdCc7XHJcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vY29uZmlnLmpzJztcclxuXHJcbmNsYXNzIEFwaVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8g5Lit6L2s5pyN5Yqh5Zmo5Zyw5Z2AIC0g5LuOIGNvbmZpZy5qcyDor7vlj5ZcclxuICAgIHRoaXMuYmFzZVVybCA9IENPTkZJRy5TRVJWRVIuQkFTRV9VUkw7XHJcbiAgICB0aGlzLmJhc2VIZWFkZXJzID0ge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g6YCa55So6K+35rGC5pa55rOVIC0g6YCa6L+H5Lit6L2s5pyN5Yqh5Zmo6L2s5Y+RXHJcbiAgYXN5bmMgcmVxdWVzdChhY3Rpb24sIGRhdGEgPSB7fSkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVXJsfS9hcGlgO1xyXG4gICAgXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXI6IHRoaXMuYmFzZUhlYWRlcnMsXHJcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICB9O1xyXG5cclxuICAgIG9wdGlvbnMuZGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgYWN0aW9uLCAuLi5kYXRhIH0pO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGZldGNoLmZldGNoKHtcclxuICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcclxuXHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuY29kZSA+PSAyMDAgJiYgcmVzcG9uc2UuY29kZSA8IDMwMCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlRGF0YSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEhUVFAgRXJyb3I6ICR7cmVzcG9uc2UuY29kZX1gLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYEhUVFAgJHtyZXNwb25zZS5jb2RlfTogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZURhdGEpfWApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogKGVycm9yLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgICAvLyBERVRBSUxFRCBMT0dHSU5HIEZPUiBORVRXT1JLIEZBSUxVUkVTXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBbQXBpU2VydmljZV0gUmVxdWVzdCBGYWlsZWQuIENvZGU6ICR7Y29kZX0sIEVycm9yOiAke0pTT04uc3RyaW5naWZ5KGVycm9yKX1gKTtcclxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkOiAke2Vycm9yLmRhdGEgfHwgJ0Nvbm5lY3Rpb24gaXMgaW52YWxpZCd9YCkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIOiOt+WPluaOkuihjOamnFxyXG4gIGFzeW5jIGdldFJhbmtpbmdzKGxpbWl0ID0gMTApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnZ2V0X3JhbmtpbmdzJywge1xyXG4gICAgICAgIGxpbWl0OiBsaW1pdFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgcmFua2luZ3M6IHJlc3VsdC5yYW5raW5ncyB8fCBbXVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfojrflj5bmjpLooYzmppzlpLHotKU6JywgZXJyb3IpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgcmFua2luZ3M6IFtdLFxyXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOS4iuaKpeeCueWHu+asoeaVsFxyXG4gIGFzeW5jIHN5bmNDbGlja3ModXNlcklkLCBjbGlja0NvdW50KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCB0aGlzLnJlcXVlc3QoJ3N5bmNfY2xpY2tzJywge1xyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcclxuICAgICAgICBjbGlja19jb3VudDogY2xpY2tDb3VudFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S4iuaKpeeCueWHu+asoeaVsOWksei0pTonLCBlcnJvcilcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDku47mnI3liqHlmajlkIzmraXmlbDmja5cclxuICBhc3luYyBzeW5jRnJvbVNlcnZlcih1c2VySWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnc3luY19mcm9tX3NlcnZlcicsIHtcclxuICAgICAgICB1c2VyX2lkOiB1c2VySWRcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+S7juacjeWKoeWZqOWQjOatpeaVsOaNruaIkOWKnzonLCByZXN1bHQudXNlckluZm8pO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVzZXJJbmZvOiByZXN1bHQudXNlckluZm8gfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCflkIzmraXmlbDmja7lpLHotKU6JywgcmVzdWx0ID8gcmVzdWx0LmVycm9yIDogJ+acquefpemUmeivrycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogKHJlc3VsdCA/IHJlc3VsdC5lcnJvciA6ICfmnI3liqHlmajmnKrov5Tlm57miJDlip/nirbmgIEnKSB9O1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfku47mnI3liqHlmajlkIzmraXmlbDmja7ml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOajgOafpeWuoOeJqeWQjeaYr+WQpuWPr+eUqFxyXG4gIGFzeW5jIGNoZWNrUGV0TmFtZUF2YWlsYWJpbGl0eShwZXROYW1lKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2NoZWNrX3BldF9uYW1lJywge1xyXG4gICAgICAgIHBldF9uYW1lOiBwZXROYW1lXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCAuLi5yZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+ajgOafpeWuoOeJqeWQjeWPr+eUqOaAp+aXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSwgaXNBdmFpbGFibGU6IGZhbHNlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDkv67mlLnlrqDnianlkI1cclxuICBhc3luYyBzZXRQZXROYW1lKHVzZXJJZCwgbmV3TmFtZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdzZXRfcGV0X25hbWUnLCB7XHJcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxyXG4gICAgICAgIG5ld19uYW1lOiBuZXdOYW1lXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5L+u5pS55a6g54mp5ZCN5aSx6LSlOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDpooTmv4DmtLvmo4Dmn6VcclxuICBhc3luYyBjaGVja0RldmljZVJlZ2lzdHJhdGlvbihkZXZpY2VJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdjaGVja19yZWdpc3RyYXRpb24nLCB7XHJcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coJ+mihOa/gOa0u+ajgOafpeaIkOWKnzonLCByZXN1bHQpO1xyXG4gICAgICAvLyDnm7TmjqXov5Tlm57mnI3liqHlmajnmoTljp/lp4vlk43lupTvvIxVSeWxguacn+acm+eahOaYr+aJgeW5s+e7k+aehFxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign6aKE5r+A5rS75qOA5p+l5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcclxuICAgICAgLy8g6L+U5Zue5LiA5Liq5YW85a6555qE6ZSZ6K+v5a+56LGh77yM6YG/5YWNVUnlsYLltKnmuoNcclxuICAgICAgcmV0dXJuIHsgaXNfcmVnaXN0ZXJlZDogZmFsc2UsIGNhbl9hdXRvX2FjdGl2YXRlOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOazqOWGjOiuvuWkh+W5tuiOt+WPlueUqOaIt0lEXHJcbiAgYXN5bmMgcmVnaXN0ZXJBbmRHZXRVc2VySWQoZGV2aWNlSWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIFBhc3MgdGhlIHNlcnZlciByZXNwb25zZSBkaXJlY3RseSB0byB0aGUgVUkgbGF5ZXJcclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucmVxdWVzdCgncmVnaXN0ZXJfZGV2aWNlX2FuZF9nZXRfaWQnLCB7XHJcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+azqOWGjOaIluiOt+WPlueUqOaIt0lE5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcclxuICAgICAgLy8gUmV0dXJuIGEgY29tcGF0aWJsZSBlcnJvciBvYmplY3RcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOiOt+WPluWFrOWRiuWIl+ihqFxyXG4gIGFzeW5jIGdldEFubm91bmNlbWVudHMobGltaXQgPSAxMCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdnZXRfYW5ub3VuY2VtZW50cycsIHtcclxuICAgICAgICBsaW1pdDogbGltaXRcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdPcmlnaW5hbCBhbm5vdW5jZW1lbnQgcmVzdWx0IGZyb20gc2VydmVyOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiByZXN1bHQuc3VjY2VzcyB8fCBmYWxzZSxcclxuICAgICAgICBhbm5vdW5jZW1lbnRzOiByZXN1bHQuYW5ub3VuY2VtZW50cyB8fCBbXSxcclxuICAgICAgICBjb3VudDogcmVzdWx0LmNvdW50IHx8IDAsXHJcbiAgICAgICAgdGltZXN0YW1wOiByZXN1bHQudGltZXN0YW1wLFxyXG4gICAgICAgIGVycm9yOiByZXN1bHQuZXJyb3JcclxuICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluWFrOWRiuWksei0pTonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgYW5ub3VuY2VtZW50czogW10sXHJcbiAgICAgICAgY291bnQ6IDBcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOajgOafpeW6lOeUqOabtOaWsFxyXG4gIGFzeW5jIGNoZWNrQXBwVXBkYXRlKGN1cnJlbnRWZXJzaW9uQ29kZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdjaGVja191cGRhdGUnLCB7XHJcbiAgICAgICAgY3VycmVudF92ZXJzaW9uX2NvZGU6IGN1cnJlbnRWZXJzaW9uQ29kZVxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogcmVzdWx0LnN1Y2Nlc3MgfHwgZmFsc2UsXHJcbiAgICAgICAgaGFzVXBkYXRlOiByZXN1bHQuaGFzX3VwZGF0ZSB8fCBmYWxzZSxcclxuICAgICAgICB1cGRhdGVJbmZvOiByZXN1bHQudXBkYXRlX2luZm8gfHwgbnVsbCxcclxuICAgICAgICBpc0ZvcmNlVXBkYXRlOiByZXN1bHQuaXNfZm9yY2VfdXBkYXRlIHx8IGZhbHNlLFxyXG4gICAgICAgIGN1cnJlbnRWZXJzaW9uQ29kZTogcmVzdWx0LmN1cnJlbnRfdmVyc2lvbl9jb2RlIHx8IGN1cnJlbnRWZXJzaW9uQ29kZSxcclxuICAgICAgICBsYXRlc3RWZXJzaW9uQ29kZTogcmVzdWx0LmxhdGVzdF92ZXJzaW9uX2NvZGUgfHwgY3VycmVudFZlcnNpb25Db2RlLFxyXG4gICAgICAgIGVycm9yOiByZXN1bHQuZXJyb3JcclxuICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+ajgOafpeabtOaWsOWksei0pTonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgaGFzVXBkYXRlOiBmYWxzZSxcclxuICAgICAgICBpc0ZvcmNlVXBkYXRlOiBmYWxzZVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwaVNlcnZpY2UoKVxyXG4iLCIvLyBzcmMvY29tbW9uL2pzL2JhY2staW50ZXJjZXB0b3IuanNcbmltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xuaW1wb3J0IHByb21wdCBmcm9tICdAc3lzdGVtLnByb21wdCc7XG5cbmNsYXNzIEJhY2tJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXNCbG9ja2luZyA9IGZhbHNlO1xuICAgIHRoaXMuYmxvY2tSZWFzb24gPSAnJztcbiAgICB0aGlzLm9yaWdpbmFsQmFjayA9IG51bGw7XG4gIH1cbiAgXG4gIC8vIOWQr+eUqOaLpuaIqlxuICBlbmFibGUocmVhc29uID0gJ+ivt+WFiOWujOaIkOW6lOeUqOabtOaWsCcpIHtcbiAgICB0aGlzLmlzQmxvY2tpbmcgPSB0cnVlO1xuICAgIHRoaXMuYmxvY2tSZWFzb24gPSByZWFzb247XG4gICAgXG4gICAgLy8g5L+d5a2Y5Y6f5aeLYmFja+aWueazlVxuICAgIGlmICghdGhpcy5vcmlnaW5hbEJhY2spIHtcbiAgICAgIHRoaXMub3JpZ2luYWxCYWNrID0gcm91dGVyLmJhY2s7XG4gICAgfVxuICAgIFxuICAgIC8vIOmHjeWGmWJhY2vmlrnms5VcbiAgICByb3V0ZXIuYmFjayA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzQmxvY2tpbmcpIHtcbiAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogdGhpcy5ibG9ja1JlYXNvbixcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyDmgaLlpI3ljp/lp4tiYWNr5pa55rOVXG4gICAgICBpZiAodGhpcy5vcmlnaW5hbEJhY2spIHtcbiAgICAgICAgdGhpcy5vcmlnaW5hbEJhY2suY2FsbChyb3V0ZXIpO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgY29uc29sZS5sb2coJ+i/lOWbnuaLpuaIquWZqOWQr+eUqDonLCByZWFzb24pO1xuICB9XG4gIFxuICAvLyDnpoHnlKjmi6bmiKpcbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmlzQmxvY2tpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmJsb2NrUmVhc29uID0gJyc7XG4gICAgXG4gICAgLy8g5oGi5aSN5Y6f5aeLYmFja+aWueazlVxuICAgIGlmICh0aGlzLm9yaWdpbmFsQmFjaykge1xuICAgICAgcm91dGVyLmJhY2sgPSB0aGlzLm9yaWdpbmFsQmFjaztcbiAgICAgIHRoaXMub3JpZ2luYWxCYWNrID0gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgY29uc29sZS5sb2coJ+i/lOWbnuaLpuaIquWZqOemgeeUqCcpO1xuICB9XG4gIFxuICAvLyDmi6bmiKrov5Tlm57mjInpkq5cbiAgaW50ZXJjZXB0KHJlYXNvbikge1xuICAgIHRoaXMuZW5hYmxlKHJlYXNvbik7XG4gIH1cbiAgXG4gIC8vIOaBouWkjeWOn+Wni+i/lOWbnuWKn+iDvVxuICByZXN0b3JlKCkge1xuICAgIHRoaXMuZGlzYWJsZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBCYWNrSW50ZXJjZXB0b3IoKTsiLCIvLyBjb25maWcuanNcclxuZXhwb3J0IGNvbnN0IENPTkZJRyA9IHtcclxuICAvLyDkuK3ovazmnI3liqHlmajphY3nva5cclxuICBTRVJWRVI6IHtcclxuICAgIEJBU0VfVVJMOiAnaHR0cDovLzEwMy4yMDUuMjUzLjg3OjIyMjA3J1xyXG4gIH0sXHJcbiAgXHJcbiAgLy8g5rOo5oSP77yaVVJMIOWJjee8gOWcqCBhcGktc2VydmljZS5qcyDkuK3noaznvJbnoIHkuoZcclxuICAvLyDov5nph4zkuI3lho3pnIDopoHphY3nva5cclxuICBcclxuICAvLyDlupTnlKjphY3nva5cclxuICBBUFA6IHtcclxuICAgIE5BTUU6ICdCYW5kUGV0JyxcclxuICAgIFZFUlNJT046ICcwLjMuNSBBbHBoYScsXHJcbiAgICBWRVJTSU9OX0NPREU6IDM1LCAgLy8g5paw5aKe77ya55So5LqO54mI5pys5q+U6L6D55qE5pWw5a2X77yIMC4zLjUgLT4gMzXvvIlcclxuICAgIE1BWF9DTElDS1NfUEVSX0JBVENIOiA1MCxcclxuICAgIFNZTkNfSU5URVJWQUw6IDYwMDAwLFxyXG4gICAgUkFOS19MSU1JVDogMTAsXHJcbiAgICBcclxuICAgIC8vIOabtOaWsOajgOafpemFjee9ru+8iOaWsOWinu+8iVxyXG4gICAgQ0hFQ0tfVVBEQVRFX0lOVEVSVkFMOiAzNjAwMDAwLCAvLyAx5bCP5pe25qOA5p+l5LiA5qyh5pu05pawXHJcbiAgICBBTk5PVU5DRU1FTlRfQ0FDSEVfVElNRTogMzAwMDAwLCAvLyA15YiG6ZKf57yT5a2Y5YWs5ZGKXHJcbiAgfSxcclxuICBcclxuICAvLyDlrZjlgqjplK7lkI1cclxuICBTVE9SQUdFX0tFWVM6IHtcclxuICAgIERFVklDRV9JRDogJ2RldmljZV9pZCcsXHJcbiAgICBJU19MT0NBTExZX0FDVElWQVRFRDogJ2lzX2xvY2FsbHlfYWN0aXZhdGVkJyxcclxuICAgIFVTRVJfSU5GTzogJ3VzZXJfaW5mbycsXHJcbiAgICBQRU5ESU5HX0NMSUNLUzogJ3BlbmRpbmdfY2xpY2tzJyxcclxuICAgIExBU1RfU1lOQ19USU1FOiAnbGFzdF9zeW5jX3RpbWUnLFxyXG4gICAgVE9UQUxfQ0xJQ0tTOiAndG90YWxfY2xpY2tzJyxcclxuICAgIFxyXG4gICAgLy8g5paw5aKe5a2Y5YKo6ZSuXHJcbiAgICBMQVNUX1VQREFURV9DSEVDS19USU1FOiAnbGFzdF91cGRhdGVfY2hlY2tfdGltZScsXHJcbiAgICBMQVNUX0FOTk9VTkNFTUVOVF9GRVRDSF9USU1FOiAnbGFzdF9hbm5vdW5jZW1lbnRfZmV0Y2hfdGltZScsXHJcbiAgICBDQUNIRURfQU5OT1VOQ0VNRU5UUzogJ2NhY2hlZF9hbm5vdW5jZW1lbnRzJyxcclxuICAgIENBQ0hFRF9VUERBVEVfSU5GTzogJ2NhY2hlZF91cGRhdGVfaW5mbycsXHJcbiAgICBJR05PUkVEX1ZFUlNJT046ICdpZ25vcmVkX3ZlcnNpb25fY29kZScsIC8vIOeUqOaIt+W/veeVpeeahOeJiOacrFxyXG4gICAgRk9SQ0VfVVBEQVRFX1JFUVVJUkVEOiAnZm9yY2VfdXBkYXRlX3JlcXVpcmVkJywgLy8g5piv5ZCm6ZyA6KaB5by65Yi25pu05pawXHJcbiAgfVxyXG59XHJcbiIsIi8vIHNyYy9jb21tb24vanMvdXBkYXRlLW1hbmFnZXIuanNcbmltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XG5pbXBvcnQgQXBpU2VydmljZSBmcm9tICcuL2FwaS1zZXJ2aWNlLmpzJztcbmltcG9ydCBwcm9tcHQgZnJvbSAnQHN5c3RlbS5wcm9tcHQnO1xuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XG5cbmNsYXNzIFVwZGF0ZU1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNoZWNrSW50ZXJ2YWwgPSBDT05GSUcuQVBQLkNIRUNLX1VQREFURV9JTlRFUlZBTCB8fCAzNjAwMDAwOyAvLyAx5bCP5pe2XG4gIH1cbiAgXG4gIC8vIOajgOafpeabtOaWsO+8iOW4pumikeeOh+mZkOWItu+8iVxuICBhc3luYyBjaGVja1VwZGF0ZShmb3JjZUNoZWNrID0gZmFsc2UpIHtcbiAgICB0cnkge1xuICAgICAgLy8gMS4g5qOA5p+l5piv5ZCm6ZyA6KaB6L+b6KGM5pu05paw5qOA5p+lXG4gICAgICBpZiAoIWZvcmNlQ2hlY2spIHtcbiAgICAgICAgY29uc3Qgc2hvdWxkQ2hlY2sgPSBhd2FpdCB0aGlzLnNob3VsZENoZWNrVXBkYXRlKCk7XG4gICAgICAgIGlmICghc2hvdWxkQ2hlY2spIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgIHNraXBwZWQ6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiAn5pyq5Yiw5qOA5p+l5pe26Ze0J1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gMi4g6I635Y+W5b2T5YmN54mI5pys5Y+3XG4gICAgICBjb25zdCBjdXJyZW50VmVyc2lvbkNvZGUgPSBDT05GSUcuQVBQLlZFUlNJT05fQ09ERTtcbiAgICAgIFxuICAgICAgLy8gMy4g6LCD55SoQVBJ5qOA5p+l5pu05pawXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLmNoZWNrQXBwVXBkYXRlKGN1cnJlbnRWZXJzaW9uQ29kZSk7XG4gICAgICBcbiAgICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAvLyA0LiDorrDlvZXmnKzmrKHmo4Dmn6Xml7bpl7RcbiAgICAgICAgYXdhaXQgdGhpcy5yZWNvcmRVcGRhdGVDaGVjaygpO1xuICAgICAgICBcbiAgICAgICAgLy8gNS4g5aSE55CG5pu05paw5L+h5oGvXG4gICAgICAgIGlmIChyZXN1bHQuaGFzVXBkYXRlKSB7XG4gICAgICAgICAgY29uc3QgdXBkYXRlSW5mbyA9IHJlc3VsdC51cGRhdGVJbmZvO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIOajgOafpeeUqOaIt+aYr+WQpuW3sue7j+W/veeVpeatpOeJiOacrFxuICAgICAgICAgIGNvbnN0IGlnbm9yZWQgPSBhd2FpdCB0aGlzLmlzVmVyc2lvbklnbm9yZWQodXBkYXRlSW5mby52ZXJzaW9uX2NvZGUpO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmICghaWdub3JlZCAmJiAhcmVzdWx0LmlzRm9yY2VVcGRhdGUpIHtcbiAgICAgICAgICAgIC8vIOmdnuW8uuWItuabtOaWsO+8jOe8k+WtmOabtOaWsOS/oeaBr+S+m+aYvuekulxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jYWNoZVVwZGF0ZUluZm8odXBkYXRlSW5mbyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICBpZ25vcmVkOiBpZ25vcmVkXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+ajgOafpeabtOaWsOWksei0pTonLCBlcnJvcik7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgIGhhc1VwZGF0ZTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIFxuICAvLyDliKTmlq3mmK/lkKblupTor6Xmo4Dmn6Xmm7TmlrBcbiAgYXN5bmMgc2hvdWxkQ2hlY2tVcGRhdGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN0b3JhZ2UuZ2V0KHtcbiAgICAgICAga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLkxBU1RfVVBEQVRFX0NIRUNLX1RJTUVcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0LnZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0cnVlOyAvLyDku47mnKrmo4Dmn6Xov4dcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc3QgbGFzdENoZWNrVGltZSA9IG5ldyBEYXRlKHJlc3VsdC52YWx1ZSkuZ2V0VGltZSgpO1xuICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIChub3cgLSBsYXN0Q2hlY2tUaW1lKSA+PSB0aGlzLmNoZWNrSW50ZXJ2YWw7XG4gICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5qOA5p+l5pu05paw5pe26Ze05aSx6LSlOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgLy8g6K6w5b2V5pu05paw5qOA5p+l5pe26Ze0XG4gIGFzeW5jIHJlY29yZFVwZGF0ZUNoZWNrKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzdG9yYWdlLnNldCh7XG4gICAgICAgIGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5MQVNUX1VQREFURV9DSEVDS19USU1FLFxuICAgICAgICB2YWx1ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign6K6w5b2V5pu05paw5pe26Ze05aSx6LSlOicsIGVycm9yKTtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIOe8k+WtmOabtOaWsOS/oeaBr1xuICBhc3luYyBjYWNoZVVwZGF0ZUluZm8odXBkYXRlSW5mbykge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzdG9yYWdlLnNldCh7XG4gICAgICAgIGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5DQUNIRURfVVBEQVRFX0lORk8sXG4gICAgICAgIHZhbHVlOiBKU09OLnN0cmluZ2lmeSh1cGRhdGVJbmZvKVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+e8k+WtmOabtOaWsOS/oeaBr+Wksei0pTonLCBlcnJvcik7XG4gICAgfVxuICB9XG4gIFxuICAvLyDojrflj5bnvJPlrZjnmoTmm7TmlrDkv6Hmga9cbiAgYXN5bmMgZ2V0Q2FjaGVkVXBkYXRlSW5mbygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3RvcmFnZS5nZXQoe1xuICAgICAgICBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuQ0FDSEVEX1VQREFURV9JTkZPXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmVzdWx0LnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPlue8k+WtmOabtOaWsOS/oeaBr+Wksei0pTonLCBlcnJvcik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIOW/veeVpeafkOS4queJiOacrFxuICBhc3luYyBpZ25vcmVWZXJzaW9uKHZlcnNpb25Db2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KHtcbiAgICAgICAga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLklHTk9SRURfVkVSU0lPTixcbiAgICAgICAgdmFsdWU6IHZlcnNpb25Db2RlLnRvU3RyaW5nKClcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCflv73nlaXniYjmnKzlpLHotKU6JywgZXJyb3IpO1xuICAgIH1cbiAgfVxuICBcbiAgLy8g5qOA5p+l5piv5ZCm5b+955Wl5p+Q5Liq54mI5pysXG4gIGFzeW5jIGlzVmVyc2lvbklnbm9yZWQodmVyc2lvbkNvZGUpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3RvcmFnZS5nZXQoe1xuICAgICAgICBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuSUdOT1JFRF9WRVJTSU9OXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHJlc3VsdC52YWx1ZSkgPT09IHZlcnNpb25Db2RlO1xuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+ajgOafpeW/veeVpeeJiOacrOWksei0pTonLCBlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIFxuICAvLyDmmL7npLrmm7TmlrDlr7nor53moYbvvIjnpLrkvovvvIlcbiAgYXN5bmMgc2hvd1VwZGF0ZURpYWxvZyh1cGRhdGVJbmZvLCBpc0ZvcmNlVXBkYXRlID0gZmFsc2UpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmIChpc0ZvcmNlVXBkYXRlKSB7XG4gICAgICAgIC8vIOW8uuWItuabtOaWsO+8jOebtOaOpei3s+i9rOWIsOW8uuWItuabtOaWsOmhtemdolxuICAgICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgdXJpOiAncGFnZXMvZm9yY2UtdXBkYXRlL2luZGV4JyxcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHVwZGF0ZUluZm86IHVwZGF0ZUluZm8sXG4gICAgICAgICAgICBpc0ZvcmNlVXBkYXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmVzb2x2ZSgnZm9yY2VfdXBkYXRlJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8g6Z2e5by65Yi25pu05paw77yM5pi+56S65a+56K+d5qGGXG4gICAgICBwcm9tcHQuc2hvd0RpYWxvZyh7XG4gICAgICAgIHRpdGxlOiBg5Y+R546w5paw54mI5pysICR7dXBkYXRlSW5mby52ZXJzaW9uX25hbWV9YCxcbiAgICAgICAgbWVzc2FnZTogYCR7dXBkYXRlSW5mby50aXRsZX1cXG5cXG4ke3VwZGF0ZUluZm8uY2hhbmdlbG9nfWAsXG4gICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn5b+955Wl5q2k54mI5pysJyxcbiAgICAgICAgICAgIGNvbG9yOiAnIzhFOEU5MydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfnn6XpgZPkuoYnLFxuICAgICAgICAgICAgY29sb3I6ICcjMDA3QUZGJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3VjY2VzczogKGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAvLyDnlKjmiLfngrnlh7vlv73nlaXmraTniYjmnKxcbiAgICAgICAgICAgIHJlc29sdmUoJ2lnbm9yZScpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgIC8vIOeUqOaIt+eCueWHu+efpemBk+S6hlxuICAgICAgICAgICAgcmVzb2x2ZSgna25vdycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsOiAoKSA9PiB7XG4gICAgICAgICAgLy8g55So5oi354K55Ye75a+56K+d5qGG5aSW6YOo5Y+W5raIXG4gICAgICAgICAgcmVzb2x2ZSgnY2FuY2VsJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIFxuICAvLyDmlrDlop7vvJrmo4Dmn6XlubblpITnkIblvLrliLbmm7TmlrBcbiAgYXN5bmMgY2hlY2tBbmRIYW5kbGVGb3JjZVVwZGF0ZSgpIHtcbiAgICB0cnkge1xuICAgICAgLy8g5by65Yi25qOA5p+l77yM5b+955Wl5pe26Ze06ZmQ5Yi2XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmNoZWNrVXBkYXRlKHRydWUpO1xuICAgICAgXG4gICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MgJiYgcmVzdWx0Lmhhc1VwZGF0ZSAmJiByZXN1bHQudXBkYXRlSW5mbykge1xuICAgICAgICAvLyDlpoLmnpzmmK/lvLrliLbmm7TmlrBcbiAgICAgICAgaWYgKHJlc3VsdC5pc0ZvcmNlVXBkYXRlKSB7XG4gICAgICAgICAgLy8g5qCH6K6w6ZyA6KaB5by65Yi25pu05pawXG4gICAgICAgICAgYXdhaXQgdGhpcy5tYXJrRm9yY2VVcGRhdGVSZXF1aXJlZCgpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIOi3s+i9rOWIsOW8uuWItuabtOaWsOmhtemdou+8iOeUqOaIt+aXoOazlei/lOWbnu+8iVxuICAgICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgIHVyaTogJ3BhZ2VzL2ZvcmNlLXVwZGF0ZS9pbmRleCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgdXBkYXRlSW5mbzogcmVzdWx0LnVwZGF0ZUluZm8sXG4gICAgICAgICAgICAgIGlzRm9yY2VVcGRhdGU6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGFzRm9yY2VVcGRhdGU6IHRydWUsXG4gICAgICAgICAgICB1cGRhdGVJbmZvOiByZXN1bHQudXBkYXRlSW5mb1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGFzRm9yY2VVcGRhdGU6IGZhbHNlXG4gICAgICB9O1xuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+W8uuWItuabtOaWsOajgOafpeWksei0pTonLCBlcnJvcik7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYXNGb3JjZVVwZGF0ZTogZmFsc2UsXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBcbiAgLy8g5qCH6K6w6ZyA6KaB5by65Yi25pu05pawXG4gIGFzeW5jIG1hcmtGb3JjZVVwZGF0ZVJlcXVpcmVkKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzdG9yYWdlLnNldCh7XG4gICAgICAgIGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5GT1JDRV9VUERBVEVfUkVRVUlSRUQsXG4gICAgICAgIHZhbHVlOiAndHJ1ZSdcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfmoIforrDlvLrliLbmm7TmlrDlpLHotKU6JywgZXJyb3IpO1xuICAgIH1cbiAgfVxuICBcbiAgLy8g5riF6Zmk5by65Yi25pu05paw5qCH6K6wXG4gIGFzeW5jIGNsZWFyRm9yY2VVcGRhdGVNYXJrKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzdG9yYWdlLmRlbGV0ZSh7XG4gICAgICAgIGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5GT1JDRV9VUERBVEVfUkVRVUlSRURcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfmuIXpmaTlvLrliLbmm7TmlrDmoIforrDlpLHotKU6JywgZXJyb3IpO1xuICAgIH1cbiAgfVxuICBcbiAgLy8g5qOA5p+l5piv5ZCm6ZyA6KaB5by65Yi25pu05pawXG4gIGFzeW5jIGlzRm9yY2VVcGRhdGVSZXF1aXJlZCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3RvcmFnZS5nZXQoe1xuICAgICAgICBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuRk9SQ0VfVVBEQVRFX1JFUVVJUkVEXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHJlc3VsdCAmJiByZXN1bHQudmFsdWUgPT09ICd0cnVlJztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5qOA5p+l5by65Yi25pu05paw54q25oCB5aSx6LSlOicsIGVycm9yKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIOa4hemZpOabtOaWsOe8k+WtmFxuICBhc3luYyBjbGVhclVwZGF0ZUNhY2hlKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzdG9yYWdlLmRlbGV0ZSh7XG4gICAgICAgIGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5DQUNIRURfVVBEQVRFX0lORk9cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBhd2FpdCBzdG9yYWdlLmRlbGV0ZSh7XG4gICAgICAgIGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5JR05PUkVEX1ZFUlNJT05cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBhd2FpdCBzdG9yYWdlLmRlbGV0ZSh7XG4gICAgICAgIGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5GT1JDRV9VUERBVEVfUkVRVUlSRURcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfmuIXpmaTmm7TmlrDnvJPlrZjlpLHotKU6JywgZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXBkYXRlTWFuYWdlcigpO1xuIiwiLy8gc3JjL2NvbW1vbi9qcy91c2VyU2VydmljZS5qc1xuaW1wb3J0IGRldmljZSBmcm9tICdAc3lzdGVtLmRldmljZSc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xuaW1wb3J0IEFwaVNlcnZpY2UgZnJvbSAnLi9hcGktc2VydmljZS5qcyc7XG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XG5cbi8qKlxuICogQSBzZXJ2aWNlIHRvIGhhbmRsZSBzaWxlbnQgdXNlciByZWdpc3RyYXRpb24gYW5kIGRhdGEgcmV0cmlldmFsLlxuICovXG5jbGFzcyBVc2VyU2VydmljZSB7XG4gIFxuICAvKipcbiAgICogUHJvbWlzaWZpZWQgaGVscGVyIGZvciBzdG9yYWdlLmdldC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gcmV0cmlldmUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFRoZSB2YWx1ZSBmcm9tIHN0b3JhZ2UsIG9yIG51bGwgaWYgbm90IGZvdW5kLlxuICAgKi9cbiAgX3N0b3JhZ2VHZXQoa2V5KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBzdG9yYWdlLmdldCh7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4gcmVzb2x2ZShkYXRhKSxcbiAgICAgICAgZmFpbDogKCkgPT4gcmVzb2x2ZShudWxsKSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb21pc2lmaWVkIGhlbHBlciBmb3Igc3RvcmFnZS5zZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IHRvIHNldC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIHN0b3JlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIF9zdG9yYWdlU2V0KGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc3RvcmFnZS5zZXQoe1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxuICAgICAgICBmYWlsOiAoZXJyLCBjb2RlKSA9PiByZWplY3QobmV3IEVycm9yKGBTdG9yYWdlLnNldCBmYWlsZWQgZm9yICcke2tleX0nOiAke2Vycn0gKCR7Y29kZX0pYCkpLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSByYXcgZGV2aWNlIGlkZW50aWZpZXIsIHVzaW5nIGEgZmFsbGJhY2sgZm9yIHNpbXVsYXRvcnMuXG4gICAqIEl0IGFsc28gc2F2ZXMgdGhlIHJhdyBJRCB0byBzdG9yYWdlIGZvciBmdXR1cmUgdXNlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmd8bnVsbD59IFRoZSByYXcgZGV2aWNlIElEIG9yIG51bGwgb24gZmFpbHVyZS5cbiAgICovXG4gIF9nZXRSYXdEZXZpY2VJZCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGRldmljZS5nZXRTZXJpYWwoe1xuICAgICAgICBzdWNjZXNzOiBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgICAgIGxldCBzZXJpYWwgPSBkYXRhID8gZGF0YS5zZXJpYWwgOiBudWxsO1xuICAgICAgICAgIGlmIChzZXJpYWwgPT09ICdOQScpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkRldmljZSBzZXJpYWwgaXMgJ05BJywgdXNpbmcgYSBmaXhlZCB0ZXN0IHNlcmlhbC5cIik7XG4gICAgICAgICAgICBzZXJpYWwgPSAnVEVTVFZNLVNOLTAxMjM0NTY3ODknO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghc2VyaWFsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZ2V0IGEgdmFsaWQgZGV2aWNlIHNlcmlhbC4nKTtcbiAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFNhdmUgdGhlIHJhdyBJRCBmb3Igb3RoZXIgc2VydmljZXMgdGhhdCBtaWdodCBuZWVkIGl0IChlLmcuLCBBUEkgY2FsbHMpXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9zdG9yYWdlU2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuREVWSUNFX0lELCBzZXJpYWwpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NhdmVkIHJhdyBkZXZpY2UgSUQ6Jywgc2VyaWFsKTtcbiAgICAgICAgICAgIHJlc29sdmUoc2VyaWFsKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc2F2ZSByYXcgZGV2aWNlIElEIHRvIHN0b3JhZ2U6JywgZSk7XG4gICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogKGVyciwgY29kZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYENvbm5lY3Rpb24gaXMgaW52YWxpZGApO1xuICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlcyB0aGUgdXNlciBpbmZvcm1hdGlvbiB0byBsb2NhbCBzdG9yYWdlLlxuICAgKiBAcGFyYW0ge29iamVjdH0gdXNlckluZm8gLSBUaGUgdXNlciBpbmZvIG9iamVjdCByZWNlaXZlZCBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdD59IFRoZSB1c2VyIGluZm8gdGhhdCB3YXMgc2F2ZWQuXG4gICAqL1xuICBhc3luYyBfc2F2ZVVzZXJJbmZvKHVzZXJJbmZvKSB7XG4gICAgaWYgKCF1c2VySW5mbyB8fCAoIXVzZXJJbmZvLmlkICYmICF1c2VySW5mby51c2VyX251bWJlcikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXIgaW5mbyBpcyBpbnZhbGlkLCBjYW5ub3Qgc2F2ZS5cIik7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHVzZXJJbmZvVG9TYXZlID0ge1xuICAgICAgaWQ6IHVzZXJJbmZvLmlkIHx8IHVzZXJJbmZvLnVzZXJfbnVtYmVyLFxuICAgICAgdXNlcl9udW1iZXI6IHVzZXJJbmZvLnVzZXJfbnVtYmVyLFxuICAgICAgcGV0X25hbWU6IHVzZXJJbmZvLnBldF9uYW1lLFxuICAgICAgdG90YWxfY2xpY2tzOiB1c2VySW5mby50b3RhbF9jbGlja3MgfHwgMFxuICAgIH07XG5cbiAgICBhd2FpdCB0aGlzLl9zdG9yYWdlU2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPLCBKU09OLnN0cmluZ2lmeSh1c2VySW5mb1RvU2F2ZSkpO1xuICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IHNhdmVkIHVzZXIgaW5mbyB0byBzdG9yYWdlOlwiLCB1c2VySW5mb1RvU2F2ZSk7XG4gICAgcmV0dXJuIHVzZXJJbmZvVG9TYXZlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBtYWluIHB1YmxpYyBtZXRob2QuIEl0IGVuc3VyZXMgdGhhdCB1c2VyIGluZm9ybWF0aW9uIGlzIHByZXNlbnQgaW4gc3RvcmFnZS5cbiAgICogSWYgbm90LCBpdCBzaWxlbnRseSBnZXRzIGEgZGV2aWNlIElELCBjaGVja3Mgd2l0aCB0aGUgc2VydmVyLCBhbmQgZWl0aGVyXG4gICAqIHJldHJpZXZlcyBleGlzdGluZyB1c2VyIGRhdGEgb3IgcmVnaXN0ZXJzIGEgbmV3IHVzZXIuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdHxudWxsPn0gVGhlIHVzZXIgaW5mbywgb3IgbnVsbCBpZiB0aGUgcHJvY2VzcyBmYWlscy5cbiAgICovXG4gIGFzeW5jIGVuc3VyZVVzZXJJc1JlZ2lzdGVyZWQoZm9yY2VTeW5jID0gZmFsc2UpIHtcbiAgICAvLyAxLiBDaGVjayBpZiB1c2VyIGluZm8gYWxyZWFkeSBleGlzdHMgYW5kIGlzIHZhbGlkLlxuICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIENoZWNraW5nIGZvciBleGlzdGluZyB1c2VyIGluZm8gaW4gc3RvcmFnZS4uLicpO1xuICAgIGNvbnN0IGV4aXN0aW5nVXNlckluZm9KU09OID0gYXdhaXQgdGhpcy5fc3RvcmFnZUdldChDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTyk7XG4gICAgaWYgKGV4aXN0aW5nVXNlckluZm9KU09OKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VySW5mbyA9IEpTT04ucGFyc2UoZXhpc3RpbmdVc2VySW5mb0pTT04pO1xuICAgICAgICBpZiAodXNlckluZm8gJiYgdXNlckluZm8uaWQpIHtcbiAgICAgICAgICBpZiAoZm9yY2VTeW5jKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBGb3JjZSBzeW5jIGVuYWJsZWQuIEF0dGVtcHRpbmcgdG8gc3luYyBsYXRlc3QgZGF0YSBmcm9tIHNlcnZlci4uLicpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3luY1Jlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2Uuc3luY0Zyb21TZXJ2ZXIodXNlckluZm8uaWQpO1xuICAgICAgICAgICAgICBpZiAoc3luY1Jlc3VsdCAmJiBzeW5jUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdWNjZXNzZnVsbHkgc3luY2VkIGZyb20gc2VydmVyLicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9zYXZlVXNlckluZm8oc3luY1Jlc3VsdC51c2VySW5mbyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdbVXNlclNlcnZpY2VdIFN5bmMgZnJvbSBzZXJ2ZXIgZmFpbGVkLCB3aWxsIHVzZSBzdGFsZSBsb2NhbCBkYXRhLiBFcnJvcjonLCBzeW5jUmVzdWx0ID8gc3luY1Jlc3VsdC5lcnJvciA6ICdVbmtub3duIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJJbmZvOyAvLyBSZXR1cm4gc3RhbGUgZGF0YSBpZiBzeW5jIGZhaWxzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKHN5bmNFcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbVXNlclNlcnZpY2VdIEEgY3JpdGljYWwgZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHNlcnZlciBzeW5jOicsIHN5bmNFcnJvcik7XG4gICAgICAgICAgICAgIHJldHVybiB1c2VySW5mbzsgLy8gUmV0dXJuIHN0YWxlIGRhdGEgb24gY3JpdGljYWwgc3luYyBmYWlsdXJlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFVzZXIgaXMgYWxyZWFkeSByZWdpc3RlcmVkLiBGb3VuZCBpbmZvOicsIHVzZXJJbmZvKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VySW5mbztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gTWFsZm9ybWVkIEpTT04sIHByb2NlZWQgd2l0aCByZWdpc3RyYXRpb24uXG4gICAgICAgIGNvbnNvbGUud2FybignW1VzZXJTZXJ2aWNlXSBVc2VyIGluZm8gaW4gc3RvcmFnZSBpcyBtYWxmb3JtZWQuIFByb2NlZWRpbmcgd2l0aCByZWdpc3RyYXRpb24uJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gVXNlciBub3QgZm91bmQgbG9jYWxseS4gU3RhcnRpbmcgc2lsZW50IHJlZ2lzdHJhdGlvbiBwcm9jZXNzLi4uJyk7XG5cbiAgICAvLyAyLiBHZXQgRGV2aWNlIElEXG4gICAgY29uc3QgZGV2aWNlSWQgPSBhd2FpdCB0aGlzLl9nZXRSYXdEZXZpY2VJZCgpO1xuICAgIGlmICghZGV2aWNlSWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tVc2VyU2VydmljZV0gQ1JJVElDQUw6IENhbm5vdCBwcm9jZWVkIHdpdGggcmVnaXN0cmF0aW9uOiBmYWlsZWQgdG8gZ2V0IGRldmljZSBJRC4nKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgW1VzZXJTZXJ2aWNlXSBHb3QgZGV2aWNlIElEOiAke2RldmljZUlkfWApO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIDMuIENoZWNrIGlmIHRoZSBkZXZpY2UgaXMgYWxyZWFkeSByZWdpc3RlcmVkIG9uIHRoZSBzZXJ2ZXJcbiAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIENoZWNraW5nIGRldmljZSByZWdpc3RyYXRpb24gd2l0aCBzZXJ2ZXIuLi4nKTtcbiAgICAgIGNvbnN0IHJlZ1Jlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2UuY2hlY2tEZXZpY2VSZWdpc3RyYXRpb24oZGV2aWNlSWQpO1xuICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU2VydmVyIHJlZ2lzdHJhdGlvbiBjaGVjayByZXNwb25zZTonLCBKU09OLnN0cmluZ2lmeShyZWdSZXN1bHQpKTtcblxuXG4gICAgICBpZiAocmVnUmVzdWx0ICYmIHJlZ1Jlc3VsdC5pc19yZWdpc3RlcmVkICYmIHJlZ1Jlc3VsdC51c2VySW5mbykge1xuICAgICAgICAvLyBEZXZpY2UgaXMga25vd24sIHNhdmUgdGhlIGluZm8gYW5kIHdlJ3JlIGRvbmUuXG4gICAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIERldmljZSBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQgb24gc2VydmVyLiBSZXN0b3JpbmcgdXNlciBpbmZvLicpO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fc2F2ZVVzZXJJbmZvKHJlZ1Jlc3VsdC51c2VySW5mbyk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIDQuIElmIG5vdCByZWdpc3RlcmVkLCBjcmVhdGUgYSBuZXcgdXNlciByZWNvcmQuXG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBEZXZpY2Ugbm90IHJlZ2lzdGVyZWQuIEF0dGVtcHRpbmcgdG8gcmVnaXN0ZXIgYSBuZXcgdXNlci4uLicpO1xuICAgICAgY29uc3QgbmV3UmVnUmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5yZWdpc3RlckFuZEdldFVzZXJJZChkZXZpY2VJZCk7XG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTZXJ2ZXIgbmV3IHVzZXIgcmVnaXN0cmF0aW9uIHJlc3BvbnNlOicsIEpTT04uc3RyaW5naWZ5KG5ld1JlZ1Jlc3VsdCkpO1xuXG5cbiAgICAgIGlmIChuZXdSZWdSZXN1bHQgJiYgbmV3UmVnUmVzdWx0LnN1Y2Nlc3MgJiYgbmV3UmVnUmVzdWx0LnVzZXJJbmZvKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkIG5ldyB1c2VyLicpO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fc2F2ZVVzZXJJbmZvKG5ld1JlZ1Jlc3VsdC51c2VySW5mbyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdbVXNlclNlcnZpY2VdIENSSVRJQ0FMOiBGYWlsZWQgdG8gcmVnaXN0ZXIgbmV3IHVzZXIuJywgbmV3UmVnUmVzdWx0ID8gbmV3UmVnUmVzdWx0Lm1lc3NhZ2UgOiAnTm8gcmVzdWx0IGZyb20gc2VydmVyJyk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tVc2VyU2VydmljZV0gQ1JJVElDQUw6IEFuIGVycm9yIG9jY3VycmVkIGR1cmluZyB0aGUgc2lsZW50IHJlZ2lzdHJhdGlvbiBBUEkgY2FsbHM6JywgZSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgbnVtYmVyIG9mIHBlbmRpbmcgY2xpY2tzIGJ5IGEgZ2l2ZW4gYW1vdW50LlxuICAgKiBUaGlzIGlzIHRoZSBjZW50cmFsaXplZCBtZXRob2QgZm9yIGFsbCBjbGljayBtb2RpZmljYXRpb25zLlxuICAgKiBAcGFyYW0ge251bWJlcn0gYW1vdW50IC0gVGhlIG51bWJlciB0byBhZGQgdG8gcGVuZGluZyBjbGlja3MuIENhbiBiZSBuZWdhdGl2ZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyfG51bGw+fSBUaGUgbmV3IG51bWJlciBvZiBwZW5kaW5nIGNsaWNrcywgb3IgbnVsbCBvbiBmYWlsdXJlLlxuICAgKi9cbiAgYXN5bmMgdXBkYXRlUGVuZGluZ0NsaWNrcyhhbW91bnQpIHtcbiAgICBpZiAodHlwZW9mIGFtb3VudCAhPT0gJ251bWJlcicgfHwgaXNOYU4oYW1vdW50KSkge1xuICAgICAgY29uc29sZS53YXJuKCdbVXNlclNlcnZpY2VdIHVwZGF0ZVBlbmRpbmdDbGlja3MgcmVjZWl2ZWQgYW4gaW52YWxpZCBhbW91bnQ6JywgYW1vdW50KTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwZW5kaW5nQ2xpY2tzRGF0YSA9IGF3YWl0IHRoaXMuX3N0b3JhZ2VHZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5QRU5ESU5HX0NMSUNLUyk7XG4gICAgICBsZXQgY3VycmVudENsaWNrcyA9IHBhcnNlSW50KHBlbmRpbmdDbGlja3NEYXRhKSB8fCAwO1xuICAgICAgXG4gICAgICBjb25zdCBuZXdDbGlja3MgPSBjdXJyZW50Q2xpY2tzICsgYW1vdW50O1xuICAgICAgXG4gICAgICBhd2FpdCB0aGlzLl9zdG9yYWdlU2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuUEVORElOR19DTElDS1MsIG5ld0NsaWNrcy50b1N0cmluZygpKTtcbiAgICAgIFxuICAgICAgY29uc29sZS5sb2coYFtVc2VyU2VydmljZV0gUGVuZGluZyBjbGlja3MgdXBkYXRlZCBieSAke2Ftb3VudH0uIE5ldyB2YWx1ZTogJHtuZXdDbGlja3N9YCk7XG4gICAgICByZXR1cm4gbmV3Q2xpY2tzO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tVc2VyU2VydmljZV0gRmFpbGVkIHRvIHVwZGF0ZSBwZW5kaW5nIGNsaWNrcyBpbiBzdG9yYWdlOicsIGUpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHBlbmRpbmcgY2xpY2tzIGZyb20gc3RvcmFnZSBhbmQgc3luY3MgdGhlbSB3aXRoIHRoZSBzZXJ2ZXIuXG4gICAqIFRoaXMgaXMgYSBzZWxmLWNvbnRhaW5lZCwgZmlyZS1hbmQtZm9yZ2V0IG1ldGhvZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFRydWUgb24gc3VjY2VzcywgZmFsc2Ugb24gZmFpbHVyZSBvciBpZiBubyBzeW5jIHdhcyBuZWVkZWQuXG4gICAqL1xuICBhc3luYyB0cmlnZ2VyQ2xpY2tTeW5jKCkge1xuICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFRyaWdnZXJpbmcgY2xpY2sgc3luYy4uLicpO1xuICAgIFxuICAgIC8vIDEuIEdldCB1c2VyIGluZm9cbiAgICBjb25zdCB1c2VySW5mb0pTT04gPSBhd2FpdCB0aGlzLl9zdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPKTtcbiAgICBpZiAoIXVzZXJJbmZvSlNPTikge1xuICAgICAgY29uc29sZS53YXJuKCdbVXNlclNlcnZpY2VdIFN5bmMgYWJvcnRlZDogVXNlciBpbmZvIG5vdCBmb3VuZCBpbiBzdG9yYWdlLicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBsZXQgdXNlckluZm87XG4gICAgdHJ5IHtcbiAgICAgIHVzZXJJbmZvID0gSlNPTi5wYXJzZSh1c2VySW5mb0pTT04pO1xuICAgICAgaWYgKCF1c2VySW5mbyB8fCAhdXNlckluZm8uaWQpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbVXNlclNlcnZpY2VdIFN5bmMgYWJvcnRlZDogVXNlciBJRCBpcyBpbnZhbGlkLicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tVc2VyU2VydmljZV0gU3luYyBhYm9ydGVkOiBDb3VsZCBub3QgcGFyc2UgdXNlciBpbmZvLicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDIuIEdldCBwZW5kaW5nIGNsaWNrc1xuICAgIGNvbnN0IHBlbmRpbmdDbGlja3NEYXRhID0gYXdhaXQgdGhpcy5fc3RvcmFnZUdldChDT05GSUcuU1RPUkFHRV9LRVlTLlBFTkRJTkdfQ0xJQ0tTKTtcbiAgICBjb25zdCBjbGlja3NUb1N5bmMgPSBwYXJzZUludChwZW5kaW5nQ2xpY2tzRGF0YSk7XG5cbiAgICBpZiAoaXNOYU4oY2xpY2tzVG9TeW5jKSkge1xuICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gTm8gcGVuZGluZyBjbGlja3MgdG8gc3luYyAodmFsdWUgaXMgTmFOKS4nKTtcbiAgICAgIHJldHVybiB0cnVlOyAvLyBOb3RoaW5nIHRvIGRvLCBzbyBpdCdzIGEgXCJzdWNjZXNzXCJcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhgW1VzZXJTZXJ2aWNlXSBGb3VuZCAke2NsaWNrc1RvU3luY30gcGVuZGluZyBjbGlja3MgZm9yIHVzZXIgJHt1c2VySW5mby5pZH0uIFN5bmNpbmcuLi5gKTtcblxuICAgIC8vIDMuIENhbGwgQVBJXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5zeW5jQ2xpY2tzKHVzZXJJbmZvLmlkLCBjbGlja3NUb1N5bmMpO1xuXG4gICAgLy8gNC4gVXBkYXRlIHN0b3JhZ2Ugb24gc3VjY2Vzc1xuICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU3luYyBzdWNjZXNzZnVsLiBSZXNldHRpbmcgcGVuZGluZyBjbGlja3MuJyk7XG4gICAgICBhd2FpdCB0aGlzLl9zdG9yYWdlU2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuUEVORElOR19DTElDS1MsICcwJyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignW1VzZXJTZXJ2aWNlXSBTeW5jIGZhaWxlZDonLCByZXN1bHQuZXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIHRoZSBsYXRlc3QgdXNlciBkYXRhIGZyb20gdGhlIHNlcnZlciBhbmQgb3ZlcndyaXRlcyBsb2NhbCBzdG9yYWdlLlxuICAgKiBUaGlzIG1ldGhvZCBydW5zIHRoZSBmdWxsIHJlZ2lzdHJhdGlvbi9sb2dpbiBmbG93IHRvIGVuc3VyZSBkYXRhIGlzIGNvbnNpc3RlbnQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmd9Pn1cbiAgICovXG4gIGFzeW5jIGZvcmNlU3luY0Zyb21TZXJ2ZXIoKSB7XG4gICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU3RhcnRpbmcgZm9yY2Ugc3luYyBmcm9tIHNlcnZlci4uLicpO1xuICAgIFxuICAgIHRyeSB7XG4gICAgICAvLyAxLiBGb3JjZSBhIHN5bmMgb2YgYW55IHBlbmRpbmcgY2xpY2tzIEZJUlNULlxuICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU3RlcCAxOiBTeW5jaW5nIGxvY2FsIHBlbmRpbmcgY2xpY2tzIGJlZm9yZSBmZXRjaGluZyBzZXJ2ZXIgZGF0YS4nKTtcbiAgICAgIGNvbnN0IGNsaWNrU3luY1N1Y2Nlc3MgPSBhd2FpdCB0aGlzLnRyaWdnZXJDbGlja1N5bmMoKTtcblxuICAgICAgaWYgKCFjbGlja1N5bmNTdWNjZXNzKSB7XG4gICAgICAgIC8vIElmIHRoZSBjbGljayBzeW5jIGZhaWxzLCB3ZSBzaG91bGQgbm90IHByb2NlZWQsIGFzIHdlIG1pZ2h0IG92ZXJ3cml0ZSB0aGUgbG9jYWwgc3RhdGVcbiAgICAgICAgLy8gd2l0aCBzdGFsZSBzZXJ2ZXIgZGF0YSwgY2F1c2luZyB0aGUgdXNlciB0byBsb3NlIHRoZWlyIHBlbmRpbmcgY2xpY2tzLlxuICAgICAgICBjb25zdCBlcnJvck1zZyA9ICfml6Dms5XlkIzmraXmnKzlnLDngrnlh7vmlbDmja7vvIzlt7Llj5bmtojku47mnI3liqHlmajmm7TmlrDvvIzku6XpmLLmlbDmja7kuKLlpLHjgIInO1xuICAgICAgICBjb25zb2xlLmVycm9yKGBbVXNlclNlcnZpY2VdICR7ZXJyb3JNc2d9YCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvck1zZyB9O1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU3RlcCAxOiBMb2NhbCBwZW5kaW5nIGNsaWNrcyBzeW5jZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXG5cbiAgICAgIC8vIDIuIE5vdywgcnVuIHRoZSBmdWxsIGdldC9yZWdpc3RlciB1c2VyIGZsb3cgdG8gZ2V0IHRoZSBsYXRlc3Qgc3RhdGUgZnJvbSB0aGUgc2VydmVyLlxuICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU3RlcCAyOiBGZXRjaGluZyBsYXRlc3QgdXNlciBkYXRhIGZyb20gc2VydmVyLicpO1xuICAgICAgY29uc3QgdXNlckluZm8gPSBhd2FpdCB0aGlzLmVuc3VyZVVzZXJJc1JlZ2lzdGVyZWQodHJ1ZSk7XG5cbiAgICAgIGlmICh1c2VySW5mbyAmJiB1c2VySW5mby5pZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdGVwIDI6IFN1Y2Nlc3NmdWxseSBmZXRjaGVkIGFuZCB1cGRhdGVkIHVzZXIgaW5mby4gVXNlckluZm86JywgdXNlckluZm8pO1xuICAgICAgICAvLyBUaGUgZW5zdXJlVXNlcklzUmVnaXN0ZXJlZCBtZXRob2QgYWxyZWFkeSBzYXZlcyB0aGUgbmV3IHVzZXIgaW5mbywgd2hpY2ggaW5jbHVkZXMgdGhlIHVwZGF0ZWQgdG90YWxfY2xpY2tzLlxuICAgICAgICAvLyBBbmQgdHJpZ2dlckNsaWNrU3luYyBhbHJlYWR5IHJlc2V0IHBlbmRpbmdfY2xpY2tzIHRvIDAuIFNvLCB3ZSBhcmUgZG9uZS5cbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIEZvcmNlIHN5bmMgY29tcGxldGUuIExvY2FsIHN0b3JhZ2UgaXMgbm93IHVwLXRvLWRhdGUuJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICflkIzmraXmiJDlip/vvIEnIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlcnJvck1zZyA9ICfml6Dms5Xku47mnI3liqHlmajojrflj5bmnIDmlrDnlKjmiLfmlbDmja7jgIInO1xuICAgICAgICBjb25zb2xlLmVycm9yKGBbVXNlclNlcnZpY2VdICR7ZXJyb3JNc2d9YCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvck1zZyB9O1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tVc2VyU2VydmljZV0gQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHRoZSBmb3JjZSBzeW5jIHByb2Nlc3M6JywgZSk7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ+WQjOatpeWksei0pe+8jOWPkeeUn+acquefpemUmeivrycgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJTZXJ2aWNlKCk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoKCkgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS42LjhcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNi44XCI7IiwiPHNjcmlwdD5cbiAgaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJy4vY29tbW9uL2pzL3VzZXJTZXJ2aWNlLmpzJztcbiAgaW1wb3J0IFVwZGF0ZU1hbmFnZXIgZnJvbSAnLi9jb21tb24vanMvdXBkYXRlLW1hbmFnZXIuanMnO1xuICBpbXBvcnQgQmFja0ludGVyY2VwdG9yIGZyb20gJy4vY29tbW9uL2pzL2JhY2staW50ZXJjZXB0b3IuanMnO1xuICBpbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcblxuICAvLyDlupTnlKjlkK/liqjml7bmo4Dmn6XlvLrliLbmm7TmlrBcbiAgYXN5bmMgZnVuY3Rpb24gY2hlY2tGb3JjZVVwZGF0ZU9uU3RhcnQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIOWFiOajgOafpeacrOWcsOaYr+WQpuagh+iusOS6huW8uuWItuabtOaWsFxuICAgICAgY29uc3QgZm9yY2VVcGRhdGVSZXF1aXJlZCA9IGF3YWl0IFVwZGF0ZU1hbmFnZXIuaXNGb3JjZVVwZGF0ZVJlcXVpcmVkKCk7XG4gICAgICBcbiAgICAgIGlmIChmb3JjZVVwZGF0ZVJlcXVpcmVkKSB7XG4gICAgICAgIC8vIOWmguaenOW3sue7j+agh+iusOS6huW8uuWItuabtOaWsO+8jOi3s+i9rOWIsOW8uuWItuabtOaWsOmhtemdolxuICAgICAgICBjb25zdCBjYWNoZWRVcGRhdGVJbmZvID0gYXdhaXQgVXBkYXRlTWFuYWdlci5nZXRDYWNoZWRVcGRhdGVJbmZvKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoY2FjaGVkVXBkYXRlSW5mbykge1xuICAgICAgICAgIHJvdXRlci5yZXBsYWNlKHtcbiAgICAgICAgICAgIHVyaTogJy9mb3JjZS11cGRhdGUnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIHVwZGF0ZUluZm86IGNhY2hlZFVwZGF0ZUluZm8sXG4gICAgICAgICAgICAgIGlzRm9yY2VVcGRhdGU6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyDmo4Dmn6XmnI3liqHlmajmmK/lkKbmnInlvLrliLbmm7TmlrBcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFVwZGF0ZU1hbmFnZXIuY2hlY2tBbmRIYW5kbGVGb3JjZVVwZGF0ZSgpO1xuICAgICAgXG4gICAgICBpZiAocmVzdWx0Lmhhc0ZvcmNlVXBkYXRlKSB7XG4gICAgICAgIC8vIOW6lOeUqOW3sue7j+iiq+mHjeWumuWQkeWIsOW8uuWItuabtOaWsOmhtemdolxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+W8uuWItuabtOaWsOajgOafpeWksei0pTonLCBlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgYXN5bmMgb25DcmVhdGUoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnW2xpZmVjeWNsZV0gW2FwcF0gb25DcmVhdGUgLSBFbnN1cmluZyB1c2VyIGlzIHJlZ2lzdGVyZWQuLi4nKTtcbiAgICAgIC8vIHRyeSB7XG4gICAgICAvLyAgIGNvbnN0IHVzZXJJbmZvID0gYXdhaXQgVXNlclNlcnZpY2UuZW5zdXJlVXNlcklzUmVnaXN0ZXJlZCgpO1xuICAgICAgLy8gICBpZiAodXNlckluZm8pIHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZygnW2xpZmVjeWNsZV0gW2FwcF0gVXNlciByZWdpc3RyYXRpb24gY29uZmlybWVkIHN1Y2Nlc3NmdWxseS4nKTtcbiAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKCdbbGlmZWN5Y2xlXSBbYXBwXSBGYWlsZWQgdG8gY29uZmlybSB1c2VyIHJlZ2lzdHJhdGlvbi4nKTtcbiAgICAgIC8vICAgICAvLyBJbiBhIHJlYWwgYXBwLCB5b3UgbWlnaHQgd2FudCB0byBzaG93IGEgbm9uLWNsb3NhYmxlIGVycm9yIHBhZ2UgaGVyZS5cbiAgICAgIC8vICAgICAvLyBGb3Igbm93LCB3ZSdsbCBsZXQgaXQgcHJvY2VlZCwgYnV0IGZlYXR1cmVzIHJlcXVpcmluZyBhIHVzZXIgSUQgbWF5IGZhaWwuXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vICAgY29uc29sZS5lcnJvcignQSBjcml0aWNhbCBlcnJvciBvY2N1cnJlZCBkdXJpbmcgYXBwIHN0YXJ0dXAgaW4gYXBwLnV4OicsIGUpO1xuICAgICAgLy8gfVxuICAgIH0sXG5cbiAgICBvblNob3coKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnW2xpZmVjeWNsZV0gW2FwcF0gb25TaG93IC0gQ2hlY2tpbmcgZm9yIHVwZGF0ZXMuLi4nKTtcbiAgICAgIC8vIC8vIOajgOafpeW8uuWItuabtOaWsFxuICAgICAgLy8gY2hlY2tGb3JjZVVwZGF0ZU9uU3RhcnQoKS50aGVuKChoYXNGb3JjZVVwZGF0ZSkgPT4ge1xuICAgICAgLy8gICBpZiAoIWhhc0ZvcmNlVXBkYXRlKSB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coJ1tVcGRhdGVdIE5vIGZvcmNlIHVwZGF0ZSByZXF1aXJlZC4gQXBwIGNvbnRpbnVlcy4nKTtcbiAgICAgIC8vICAgICAvLyDlj6/ku6XlnKjov5nph4zmt7vliqDpnZ7lvLrliLbmm7TmlrDnmoTmo4Dmn6XpgLvovpHvvIzkvYbkuLrkuobpgb/lhY3lubLmibDnlKjmiLfvvIxcbiAgICAgIC8vICAgICAvLyDlj6/ku6XlnKjkuLvpobXmiJblhbbku5bpobXpnaLnmoQgb25TaG93IOS4reW7tui/n+aJp+ihjFxuICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdbVXBkYXRlXSBGb3JjZSB1cGRhdGUgaXMgaW4gZWZmZWN0LicpO1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9KTtcbiAgICB9LFxuXG4gICAgb25IaWRlKCkge1xuICAgICAgY29uc29sZS5sb2coJ1tsaWZlY3ljbGVdIFthcHBdIG9uSGlkZSAtIFRyaWdnZXJpbmcgZmluYWwgY2xpY2sgc3luYyBiZWZvcmUgZXhpdC4nKTtcbiAgICAgIFVzZXJTZXJ2aWNlLnRyaWdnZXJDbGlja1N5bmMoKTtcbiAgICB9LFxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgY29uc29sZS5sb2coJ1tsaWZlY3ljbGVdIFthcHBdIG9uRGVzdHJveScpO1xuICAgICAgLy8g5riF55CG6L+U5Zue6ZSu5oum5oiq5Zmo77yM5Lul6Ziy5LiH5LiAXG4gICAgICBCYWNrSW50ZXJjZXB0b3IucmVzdG9yZSgpO1xuICAgIH0sXG5cbiAgICBvbkVycm9yKGVycikge1xuICAgICAgY29uc29sZS5sb2coYFtsaWZlY3ljbGVdIFthcHBdIG9uRXJyb3IgZXJybXNnOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgY29uc29sZS5sb2coYFtsaWZlY3ljbGVdIFthcHBdIG9uRXJyb3IgZXJyb3Igc3RhY2s6ICR7ZXJyLnN0YWNrfWApO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX3N5c3RlbTIiLCJfc3lzdGVtMyIsIl9zeXN0ZW00IiwiX2NvbmZpZyIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJvd25LZXlzIiwiciIsInQiLCJPYmplY3QiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsInZhbHVlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiQXBpU2VydmljZSIsImNvbnN0cnVjdG9yIiwiYmFzZVVybCIsIkNPTkZJRyIsIlNFUlZFUiIsIkJBU0VfVVJMIiwiYmFzZUhlYWRlcnMiLCJyZXF1ZXN0IiwiYWN0aW9uIiwiZGF0YSIsInVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXIiLCJyZXNwb25zZVR5cGUiLCJKU09OIiwic3RyaW5naWZ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInJlc3BvbnNlRGF0YSIsImNvZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImZhaWwiLCJnZXRSYW5raW5ncyIsImxpbWl0IiwicmVzdWx0IiwicmFua2luZ3MiLCJtZXNzYWdlIiwic3luY0NsaWNrcyIsInVzZXJJZCIsImNsaWNrQ291bnQiLCJ1c2VyX2lkIiwiY2xpY2tfY291bnQiLCJzeW5jRnJvbVNlcnZlciIsImxvZyIsInVzZXJJbmZvIiwiY2hlY2tQZXROYW1lQXZhaWxhYmlsaXR5IiwicGV0TmFtZSIsInBldF9uYW1lIiwiaXNBdmFpbGFibGUiLCJzZXRQZXROYW1lIiwibmV3TmFtZSIsIm5ld19uYW1lIiwiY2hlY2tEZXZpY2VSZWdpc3RyYXRpb24iLCJkZXZpY2VJZCIsImRldmljZV9pZCIsImlzX3JlZ2lzdGVyZWQiLCJjYW5fYXV0b19hY3RpdmF0ZSIsInJlZ2lzdGVyQW5kR2V0VXNlcklkIiwiZ2V0QW5ub3VuY2VtZW50cyIsImFubm91bmNlbWVudHMiLCJjb3VudCIsInRpbWVzdGFtcCIsImNoZWNrQXBwVXBkYXRlIiwiY3VycmVudFZlcnNpb25Db2RlIiwiY3VycmVudF92ZXJzaW9uX2NvZGUiLCJoYXNVcGRhdGUiLCJoYXNfdXBkYXRlIiwidXBkYXRlSW5mbyIsInVwZGF0ZV9pbmZvIiwiaXNGb3JjZVVwZGF0ZSIsImlzX2ZvcmNlX3VwZGF0ZSIsImxhdGVzdFZlcnNpb25Db2RlIiwibGF0ZXN0X3ZlcnNpb25fY29kZSIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIkJhY2tJbnRlcmNlcHRvciIsImlzQmxvY2tpbmciLCJibG9ja1JlYXNvbiIsIm9yaWdpbmFsQmFjayIsImVuYWJsZSIsInJlYXNvbiIsImJhY2siLCJzaG93VG9hc3QiLCJkdXJhdGlvbiIsImRpc2FibGUiLCJpbnRlcmNlcHQiLCJyZXN0b3JlIiwiQVBQIiwiTkFNRSIsIlZFUlNJT04iLCJWRVJTSU9OX0NPREUiLCJNQVhfQ0xJQ0tTX1BFUl9CQVRDSCIsIlNZTkNfSU5URVJWQUwiLCJSQU5LX0xJTUlUIiwiQ0hFQ0tfVVBEQVRFX0lOVEVSVkFMIiwiQU5OT1VOQ0VNRU5UX0NBQ0hFX1RJTUUiLCJTVE9SQUdFX0tFWVMiLCJERVZJQ0VfSUQiLCJJU19MT0NBTExZX0FDVElWQVRFRCIsIlVTRVJfSU5GTyIsIlBFTkRJTkdfQ0xJQ0tTIiwiTEFTVF9TWU5DX1RJTUUiLCJUT1RBTF9DTElDS1MiLCJMQVNUX1VQREFURV9DSEVDS19USU1FIiwiTEFTVF9BTk5PVU5DRU1FTlRfRkVUQ0hfVElNRSIsIkNBQ0hFRF9BTk5PVU5DRU1FTlRTIiwiQ0FDSEVEX1VQREFURV9JTkZPIiwiSUdOT1JFRF9WRVJTSU9OIiwiRk9SQ0VfVVBEQVRFX1JFUVVJUkVEIiwiX2FwaVNlcnZpY2UiLCJVcGRhdGVNYW5hZ2VyIiwiY2hlY2tJbnRlcnZhbCIsImNoZWNrVXBkYXRlIiwiZm9yY2VDaGVjayIsInNob3VsZENoZWNrIiwic2hvdWxkQ2hlY2tVcGRhdGUiLCJza2lwcGVkIiwicmVjb3JkVXBkYXRlQ2hlY2siLCJpZ25vcmVkIiwiaXNWZXJzaW9uSWdub3JlZCIsInZlcnNpb25fY29kZSIsImNhY2hlVXBkYXRlSW5mbyIsImdldCIsImtleSIsImxhc3RDaGVja1RpbWUiLCJEYXRlIiwiZ2V0VGltZSIsIm5vdyIsInNldCIsInRvSVNPU3RyaW5nIiwiZ2V0Q2FjaGVkVXBkYXRlSW5mbyIsInBhcnNlIiwiaWdub3JlVmVyc2lvbiIsInZlcnNpb25Db2RlIiwidG9TdHJpbmciLCJwYXJzZUludCIsInNob3dVcGRhdGVEaWFsb2ciLCJ1cmkiLCJwYXJhbXMiLCJzaG93RGlhbG9nIiwidGl0bGUiLCJ2ZXJzaW9uX25hbWUiLCJjaGFuZ2Vsb2ciLCJidXR0b25zIiwidGV4dCIsImNvbG9yIiwiaW5kZXgiLCJjYW5jZWwiLCJjaGVja0FuZEhhbmRsZUZvcmNlVXBkYXRlIiwibWFya0ZvcmNlVXBkYXRlUmVxdWlyZWQiLCJoYXNGb3JjZVVwZGF0ZSIsImNsZWFyRm9yY2VVcGRhdGVNYXJrIiwiZGVsZXRlIiwiaXNGb3JjZVVwZGF0ZVJlcXVpcmVkIiwiY2xlYXJVcGRhdGVDYWNoZSIsIlVzZXJTZXJ2aWNlIiwiX3N0b3JhZ2VHZXQiLCJfc3RvcmFnZVNldCIsImVyciIsIl9nZXRSYXdEZXZpY2VJZCIsImdldFNlcmlhbCIsInNlcmlhbCIsIndhcm4iLCJfc2F2ZVVzZXJJbmZvIiwiaWQiLCJ1c2VyX251bWJlciIsInVzZXJJbmZvVG9TYXZlIiwidG90YWxfY2xpY2tzIiwiZW5zdXJlVXNlcklzUmVnaXN0ZXJlZCIsImZvcmNlU3luYyIsImV4aXN0aW5nVXNlckluZm9KU09OIiwic3luY1Jlc3VsdCIsInN5bmNFcnJvciIsInJlZ1Jlc3VsdCIsIm5ld1JlZ1Jlc3VsdCIsInVwZGF0ZVBlbmRpbmdDbGlja3MiLCJhbW91bnQiLCJpc05hTiIsInBlbmRpbmdDbGlja3NEYXRhIiwiY3VycmVudENsaWNrcyIsIm5ld0NsaWNrcyIsInRyaWdnZXJDbGlja1N5bmMiLCJ1c2VySW5mb0pTT04iLCJjbGlja3NUb1N5bmMiLCJmb3JjZVN5bmNGcm9tU2VydmVyIiwiY2xpY2tTeW5jU3VjY2VzcyIsImVycm9yTXNnIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImdsb2JhbFRoaXMiLCJGdW5jdGlvbiIsIndpbmRvdyIsIl91c2VyU2VydmljZSIsIl91cGRhdGVNYW5hZ2VyIiwiX2JhY2tJbnRlcmNlcHRvciIsImNoZWNrRm9yY2VVcGRhdGVPblN0YXJ0IiwiZm9yY2VVcGRhdGVSZXF1aXJlZCIsImNhY2hlZFVwZGF0ZUluZm8iLCJyb3V0ZXIiLCJyZXBsYWNlIiwib25DcmVhdGUiLCJvblNob3ciLCJvbkhpZGUiLCJvbkRlc3Ryb3kiLCJvbkVycm9yIiwic3RhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUNBLElBQUFBLFVBQUFDLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFDLFdBQUFGLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFFLFdBQUFILHVCQUFBQyxlQUFBO3dCQUNBLElBQUFHLFdBQUFKLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFJLFVBQUFDLG9CQUFBO3dCQUFxQyxTQUFBTix1QkFBQU8sQ0FBQTs0QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7Z0NBQUFFLFNBQUFGOzRCQUFBO3dCQUFBO3dCQUFBLFNBQUFHLFFBQUFILENBQUEsRUFBQUksQ0FBQTs0QkFBQSxJQUFBQyxJQUFBQyxPQUFBQyxJQUFBLENBQUFQOzRCQUFBLElBQUFNLE9BQUFFLHFCQUFBO2dDQUFBLElBQUFDLElBQUFILE9BQUFFLHFCQUFBLENBQUFSO2dDQUFBSSxLQUFBSyxDQUFBQSxJQUFBQSxFQUFBQyxNQUFBLFVBQUFOLENBQUE7b0NBQUEsT0FBQUUsT0FBQUssd0JBQUEsQ0FBQVgsR0FBQUksR0FBQVEsVUFBQTtnQ0FBQSxLQUFBUCxFQUFBUSxJQUFBLENBQUFDLEtBQUEsQ0FBQVQsR0FBQUk7NEJBQUE7NEJBQUEsT0FBQUo7d0JBQUE7d0JBQUEsU0FBQVUsY0FBQWYsQ0FBQTs0QkFBQSxRQUFBSSxJQUFBLEdBQUFBLElBQUFZLFVBQUFDLE1BQUEsRUFBQWIsSUFBQTtnQ0FBQSxJQUFBQyxJQUFBLFFBQUFXLFNBQUEsQ0FBQVosRUFBQSxHQUFBWSxTQUFBLENBQUFaLEVBQUE7Z0NBQUFBLElBQUEsSUFBQUQsUUFBQUcsT0FBQUQsSUFBQSxJQUFBYSxPQUFBLFVBQUFkLENBQUE7b0NBQUFlLGdCQUFBbkIsR0FBQUksR0FBQUMsQ0FBQSxDQUFBRCxFQUFBO2dDQUFBLEtBQUFFLE9BQUFjLHlCQUFBLEdBQUFkLE9BQUFlLGdCQUFBLENBQUFyQixHQUFBTSxPQUFBYyx5QkFBQSxDQUFBZixNQUFBRixRQUFBRyxPQUFBRCxJQUFBYSxPQUFBLFVBQUFkLENBQUE7b0NBQUFFLE9BQUFnQixjQUFBLENBQUF0QixHQUFBSSxHQUFBRSxPQUFBSyx3QkFBQSxDQUFBTixHQUFBRDtnQ0FBQTs0QkFBQTs0QkFBQSxPQUFBSjt3QkFBQTt3QkFBQSxTQUFBbUIsZ0JBQUFuQixDQUFBLEVBQUFJLENBQUEsRUFBQUMsQ0FBQTs0QkFBQSxPQUFBRCxDQUFBQSxJQUFBbUIsZUFBQW5CLEVBQUEsS0FBQUosSUFBQU0sT0FBQWdCLGNBQUEsQ0FBQXRCLEdBQUFJLEdBQUE7Z0NBQUFvQixPQUFBbkI7Z0NBQUFPLFlBQUE7Z0NBQUFhLGNBQUE7Z0NBQUFDLFVBQUE7NEJBQUEsS0FBQTFCLENBQUEsQ0FBQUksRUFBQSxHQUFBQyxHQUFBTDt3QkFBQTt3QkFBQSxTQUFBdUIsZUFBQWxCLENBQUE7NEJBQUEsSUFBQXNCLElBQUFDLGFBQUF2QixHQUFBOzRCQUFBLDBCQUFBc0IsSUFBQUEsSUFBQUEsSUFBQTt3QkFBQTt3QkFBQSxTQUFBQyxhQUFBdkIsQ0FBQSxFQUFBRCxDQUFBOzRCQUFBLHVCQUFBQyxLQUFBLENBQUFBLEdBQUEsT0FBQUE7NEJBQUEsSUFBQUwsSUFBQUssQ0FBQSxDQUFBd0IsT0FBQUMsV0FBQTs0QkFBQSxlQUFBOUIsR0FBQTtnQ0FBQSxJQUFBMkIsSUFBQTNCLEVBQUErQixJQUFBLENBQUExQixHQUFBRCxLQUFBO2dDQUFBLHVCQUFBdUIsR0FBQSxPQUFBQTtnQ0FBQSxVQUFBSyxVQUFBOzRCQUFBOzRCQUFBLHFCQUFBNUIsSUFBQTZCLFNBQUFDLE1BQUFBLEVBQUE3Qjt3QkFBQTt3QkFFckMsTUFBTThCOzRCQUNKQyxhQUFjO2dDQUVaLElBQUksQ0FBQ0MsT0FBTyxHQUFHdkMsUUFBQXdDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRO2dDQUNyQyxJQUFJLENBQUNDLFdBQVcsR0FBRztvQ0FDakIsZ0JBQWdCO2dDQUNsQjs0QkFDRjs0QkFHQSxNQUFNQyxRQUFRQyxNQUFNLEVBQUVDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7Z0NBQy9CLE1BQU1DLE1BQU0sR0FBRyxJQUFJLENBQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0NBRWpDLE1BQU1TLFVBQVU7b0NBQ2REO29DQUNBRSxRQUFRO29DQUNSQyxRQUFRLElBQUksQ0FBQ1AsV0FBVztvQ0FDeEJRLGNBQWM7Z0NBQ2hCO2dDQUVBSCxRQUFRRixJQUFJLEdBQUdNLEtBQUtDLFNBQVMsQ0FBQXBDLGNBQUM7b0NBQUU0QjtnQ0FBTSxHQUFLQztnQ0FFM0MsT0FBTyxJQUFJUSxRQUFRLENBQUNDLFNBQVNDO29DQUMzQjlELFFBQUFVLE9BQUssQ0FBQ3FELEtBQUssQ0FBQXhDLGNBQUFBLGNBQUMsQ0FBQyxHQUNSK0IsVUFBTzt3Q0FDVlUsU0FBVUMsQ0FBQUE7NENBQ1IsTUFBTUMsZUFBZUQsU0FBU2IsSUFBSSxJQUFJLENBQUM7NENBRXZDLElBQUlhLFNBQVNFLElBQUksSUFBSSxPQUFPRixTQUFTRSxJQUFJLEdBQUcsS0FDMUNOLFFBQVFLO2lEQUNIO2dEQUNMRSxRQUFRQyxLQUFLLENBQUMsQ0FBQyxZQUFZLEVBQUVKLFNBQVNFLElBQUksRUFBRSxFQUFFRjtnREFDOUNILE9BQU8sSUFBSVEsTUFBTSxDQUFDLEtBQUssRUFBRUwsU0FBU0UsSUFBSSxDQUFDLEVBQUUsRUFBRVQsS0FBS0MsU0FBUyxDQUFDTyxlQUFlOzRDQUMzRTt3Q0FDRjt3Q0FDQUssTUFBTUEsQ0FBQ0YsT0FBT0Y7NENBRVpDLFFBQVFDLEtBQUssQ0FBQyxDQUFDLG1DQUFtQyxFQUFFRixLQUFLLFNBQVMsRUFBRVQsS0FBS0MsU0FBUyxDQUFDVSxRQUFROzRDQUMzRlAsT0FBTyxJQUFJUSxNQUFNLENBQUMsZ0JBQWdCLEVBQUVELE1BQU1qQixJQUFJLElBQUkseUJBQXlCO3dDQUM3RTtvQ0FBQztnQ0FFTDs0QkFDRjs0QkFHQSxNQUFNb0IsWUFBWUMsUUFBUSxFQUFFLEVBQUU7Z0NBQzVCLElBQUk7b0NBQ0YsTUFBTUMsU0FBUyxNQUFNLElBQUksQ0FBQ3hCLE9BQU8sQ0FBQyxnQkFBZ0I7d0NBQ2hEdUIsT0FBT0E7b0NBQ1Q7b0NBQ0EsT0FBTzt3Q0FDTFQsU0FBUzt3Q0FDVFcsVUFBVUQsT0FBT0MsUUFBUSxJQUFJLEVBQUU7b0NBQ2pDO2dDQUNGLEVBQUUsT0FBT04sT0FBTztvQ0FDZEQsUUFBUUMsS0FBSyxDQUFDLFlBQVlBO29DQUMxQixPQUFPO3dDQUNMTCxTQUFTO3dDQUNUVyxVQUFVLEVBQUU7d0NBQ1pOLE9BQU9BLE1BQU1PLE9BQU87b0NBQ3RCO2dDQUNGOzRCQUNGOzRCQUdBLE1BQU1DLFdBQVdDLE1BQU0sRUFBRUMsVUFBVSxFQUFFO2dDQUNuQyxJQUFJO29DQUNGLE1BQU0sSUFBSSxDQUFDN0IsT0FBTyxDQUFDLGVBQWU7d0NBQ2hDOEIsU0FBU0Y7d0NBQ1RHLGFBQWFGO29DQUNmO29DQUNBLE9BQU87d0NBQUVmLFNBQVM7b0NBQUs7Z0NBQ3pCLEVBQUUsT0FBT0ssT0FBTztvQ0FDZEQsUUFBUUMsS0FBSyxDQUFDLGFBQWFBO29DQUMzQixPQUFPO3dDQUFFTCxTQUFTO3dDQUFPSyxPQUFPQSxNQUFNTyxPQUFPO29DQUFDO2dDQUNoRDs0QkFDRjs0QkFHQSxNQUFNTSxlQUFlSixNQUFNLEVBQUU7Z0NBQzNCLElBQUk7b0NBQ0YsTUFBTUosU0FBUyxNQUFNLElBQUksQ0FBQ3hCLE9BQU8sQ0FBQyxvQkFBb0I7d0NBQ3BEOEIsU0FBU0Y7b0NBQ1g7b0NBRUEsSUFBSUosVUFBVUEsT0FBT1YsT0FBTyxFQUFFO3dDQUM1QkksUUFBUWUsR0FBRyxDQUFDLGVBQWVULE9BQU9VLFFBQVE7d0NBQzFDLE9BQU87NENBQUVwQixTQUFTOzRDQUFNb0IsVUFBVVYsT0FBT1UsUUFBUTt3Q0FBQztvQ0FDcEQ7b0NBQ0VoQixRQUFRQyxLQUFLLENBQUMsV0FBV0ssU0FBU0EsT0FBT0wsS0FBSyxHQUFHO29DQUNqRCxPQUFPO3dDQUFFTCxTQUFTO3dDQUFPSyxPQUFRSyxTQUFTQSxPQUFPTCxLQUFLLEdBQUc7b0NBQWM7Z0NBRTNFLEVBQUUsT0FBT0EsT0FBTztvQ0FDZEQsUUFBUUMsS0FBSyxDQUFDLG9CQUFvQkE7b0NBQ2xDLE9BQU87d0NBQUVMLFNBQVM7d0NBQU9LLE9BQU9BLE1BQU1PLE9BQU87b0NBQUM7Z0NBQ2hEOzRCQUNGOzRCQUdBLE1BQU1TLHlCQUF5QkMsT0FBTyxFQUFFO2dDQUN0QyxJQUFJO29DQUNGLE1BQU1aLFNBQVMsTUFBTSxJQUFJLENBQUN4QixPQUFPLENBQUMsa0JBQWtCO3dDQUNsRHFDLFVBQVVEO29DQUNaO29DQUNBLE9BQUEvRCxjQUFBO3dDQUFTeUMsU0FBUztvQ0FBSSxHQUFLVTtnQ0FDN0IsRUFBRSxPQUFPTCxPQUFPO29DQUNkRCxRQUFRQyxLQUFLLENBQUMsb0JBQW9CQTtvQ0FDbEMsT0FBTzt3Q0FBRUwsU0FBUzt3Q0FBT0ssT0FBT0EsTUFBTU8sT0FBTzt3Q0FBRVksYUFBYTtvQ0FBTTtnQ0FDcEU7NEJBQ0Y7NEJBR0EsTUFBTUMsV0FBV1gsTUFBTSxFQUFFWSxPQUFPLEVBQUU7Z0NBQ2hDLElBQUk7b0NBQ0YsTUFBTWhCLFNBQVMsTUFBTSxJQUFJLENBQUN4QixPQUFPLENBQUMsZ0JBQWdCO3dDQUNoRDhCLFNBQVNGO3dDQUNUYSxVQUFVRDtvQ0FDWjtvQ0FDQSxPQUFPaEI7Z0NBQ1QsRUFBRSxPQUFPTCxPQUFPO29DQUNkRCxRQUFRQyxLQUFLLENBQUMsWUFBWUE7b0NBQzFCLE9BQU87d0NBQUVMLFNBQVM7d0NBQU9LLE9BQU9BLE1BQU1PLE9BQU87b0NBQUM7Z0NBQ2hEOzRCQUNGOzRCQUdBLE1BQU1nQix3QkFBd0JDLFFBQVEsRUFBRTtnQ0FDdEMsSUFBSTtvQ0FDRixNQUFNbkIsU0FBUyxNQUFNLElBQUksQ0FBQ3hCLE9BQU8sQ0FBQyxzQkFBc0I7d0NBQ3RENEMsV0FBV0Q7b0NBQ2I7b0NBQ0F6QixRQUFRZSxHQUFHLENBQUMsWUFBWVQ7b0NBRXhCLE9BQU9BO2dDQUNULEVBQUUsT0FBT0wsT0FBTztvQ0FDZEQsUUFBUUMsS0FBSyxDQUFDLGlCQUFpQkE7b0NBRS9CLE9BQU87d0NBQUUwQixlQUFlO3dDQUFPQyxtQkFBbUI7d0NBQU8zQixPQUFPQSxNQUFNTyxPQUFPO29DQUFDO2dDQUNoRjs0QkFDRjs0QkFHQSxNQUFNcUIscUJBQXFCSixRQUFRLEVBQUU7Z0NBQ25DLElBQUk7b0NBRUYsT0FBTyxNQUFNLElBQUksQ0FBQzNDLE9BQU8sQ0FBQyw4QkFBOEI7d0NBQ3RENEMsV0FBV0Q7b0NBQ2I7Z0NBQ0YsRUFBRSxPQUFPeEIsT0FBTztvQ0FDZEQsUUFBUUMsS0FBSyxDQUFDLHFCQUFxQkE7b0NBRW5DLE9BQU87d0NBQUVMLFNBQVM7d0NBQU9ZLFNBQVNQLE1BQU1PLE9BQU87b0NBQUM7Z0NBQ2xEOzRCQUNGOzRCQUdBLE1BQU1zQixpQkFBaUJ6QixRQUFRLEVBQUUsRUFBRTtnQ0FDakMsSUFBSTtvQ0FDRixNQUFNQyxTQUFTLE1BQU0sSUFBSSxDQUFDeEIsT0FBTyxDQUFDLHFCQUFxQjt3Q0FDckR1QixPQUFPQTtvQ0FDVDtvQ0FDQUwsUUFBUWUsR0FBRyxDQUFDLDZDQUE2Q3pCLEtBQUtDLFNBQVMsQ0FBQ2U7b0NBRXhFLE9BQU87d0NBQ0xWLFNBQVNVLE9BQU9WLE9BQU8sSUFBSTt3Q0FDM0JtQyxlQUFlekIsT0FBT3lCLGFBQWEsSUFBSSxFQUFFO3dDQUN6Q0MsT0FBTzFCLE9BQU8wQixLQUFLLElBQUk7d0NBQ3ZCQyxXQUFXM0IsT0FBTzJCLFNBQVM7d0NBQzNCaEMsT0FBT0ssT0FBT0wsS0FBSztvQ0FDckI7Z0NBQ0YsRUFBRSxPQUFPQSxPQUFPO29DQUNkRCxRQUFRQyxLQUFLLENBQUMsV0FBV0E7b0NBQ3pCLE9BQU87d0NBQ0xMLFNBQVM7d0NBQ1RLLE9BQU9BLE1BQU1PLE9BQU87d0NBQ3BCdUIsZUFBZSxFQUFFO3dDQUNqQkMsT0FBTztvQ0FDVDtnQ0FDRjs0QkFDRjs0QkFHQSxNQUFNRSxlQUFlQyxrQkFBa0IsRUFBRTtnQ0FDdkMsSUFBSTtvQ0FDRixNQUFNN0IsU0FBUyxNQUFNLElBQUksQ0FBQ3hCLE9BQU8sQ0FBQyxnQkFBZ0I7d0NBQ2hEc0Qsc0JBQXNCRDtvQ0FDeEI7b0NBRUEsT0FBTzt3Q0FDTHZDLFNBQVNVLE9BQU9WLE9BQU8sSUFBSTt3Q0FDM0J5QyxXQUFXL0IsT0FBT2dDLFVBQVUsSUFBSTt3Q0FDaENDLFlBQVlqQyxPQUFPa0MsV0FBVyxJQUFJO3dDQUNsQ0MsZUFBZW5DLE9BQU9vQyxlQUFlLElBQUk7d0NBQ3pDUCxvQkFBb0I3QixPQUFPOEIsb0JBQW9CLElBQUlEO3dDQUNuRFEsbUJBQW1CckMsT0FBT3NDLG1CQUFtQixJQUFJVDt3Q0FDakRsQyxPQUFPSyxPQUFPTCxLQUFLO29DQUNyQjtnQ0FDRixFQUFFLE9BQU9BLE9BQU87b0NBQ2RELFFBQVFDLEtBQUssQ0FBQyxXQUFXQTtvQ0FDekIsT0FBTzt3Q0FDTEwsU0FBUzt3Q0FDVEssT0FBT0EsTUFBTU8sT0FBTzt3Q0FDcEI2QixXQUFXO3dDQUNYSSxlQUFlO29DQUNqQjtnQ0FDRjs0QkFDRjt3QkFDRjt3QkFBQyxJQUFBSSxXQUFBQyxPQUFBQSxDQUFBQSxVQUFBLEdBRWMsSUFBSXZFOzs7Ozs7Ozt3QkN2Tm5CLElBQUEzQyxVQUFBQyx1QkFBQUMsZUFBQTt3QkFDQSxJQUFBQyxXQUFBRix1QkFBQUMsZUFBQTt3QkFBb0MsU0FBQUQsdUJBQUFPLENBQUE7NEJBQUEsT0FBQUEsS0FBQUEsRUFBQUMsVUFBQSxHQUFBRCxJQUFBO2dDQUFBRSxTQUFBRjs0QkFBQTt3QkFBQTt3QkFFcEMsTUFBTTJHOzRCQUNKdkUsYUFBYztnQ0FDWixJQUFJLENBQUN3RSxVQUFVLEdBQUc7Z0NBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHO2dDQUNuQixJQUFJLENBQUNDLFlBQVksR0FBRzs0QkFDdEI7NEJBR0FDLE9BQU9DLFNBQVMsVUFBVSxFQUFFO2dDQUMxQixJQUFJLENBQUNKLFVBQVUsR0FBRztnQ0FDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdHO2dDQUduQixJQUFJLENBQUMsSUFBSSxDQUFDRixZQUFZLEVBQ3BCLElBQUksQ0FBQ0EsWUFBWSxHQUFHdEgsUUFBQVUsT0FBTSxDQUFDK0csSUFBSTtnQ0FJakN6SCxRQUFBVSxPQUFNLENBQUMrRyxJQUFJLEdBQUc7b0NBQ1osSUFBSSxJQUFJLENBQUNMLFVBQVUsRUFBRSxZQUNuQmpILFNBQUFPLE9BQU0sQ0FBQ2dILFNBQVMsQ0FBQzt3Q0FDZjlDLFNBQVMsSUFBSSxDQUFDeUMsV0FBVzt3Q0FDekJNLFVBQVU7b0NBQ1o7b0NBS0YsSUFBSSxJQUFJLENBQUNMLFlBQVksRUFDbkIsSUFBSSxDQUFDQSxZQUFZLENBQUMvRSxJQUFJLENBQUN2QyxRQUFBVSxPQUFNO2dDQUVqQztnQ0FFQTBELFFBQVFlLEdBQUcsQ0FBQyxZQUFZcUM7NEJBQzFCOzRCQUdBSSxVQUFVO2dDQUNSLElBQUksQ0FBQ1IsVUFBVSxHQUFHO2dDQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBRztnQ0FHbkIsSUFBSSxJQUFJLENBQUNDLFlBQVksRUFBRTtvQ0FDckJ0SCxRQUFBVSxPQUFNLENBQUMrRyxJQUFJLEdBQUcsSUFBSSxDQUFDSCxZQUFZO29DQUMvQixJQUFJLENBQUNBLFlBQVksR0FBRztnQ0FDdEI7Z0NBRUFsRCxRQUFRZSxHQUFHLENBQUM7NEJBQ2Q7NEJBR0EwQyxVQUFVTCxNQUFNLEVBQUU7Z0NBQ2hCLElBQUksQ0FBQ0QsTUFBTSxDQUFDQzs0QkFDZDs0QkFHQU0sVUFBVTtnQ0FDUixJQUFJLENBQUNGLE9BQU87NEJBQ2Q7d0JBQ0Y7d0JBQUMsSUFBQVgsV0FBQUMsT0FBQUEsQ0FBQUEsVUFBQSxHQUVjLElBQUlDOzs7Ozs7Ozt3QkNoRVosTUFBTXJFLFNBQU1vRSxRQUFBQSxNQUFBLEdBQUc7NEJBRXBCbkUsUUFBUTtnQ0FDTkMsVUFBVTs0QkFDWjs0QkFNQStFLEtBQUs7Z0NBQ0hDLE1BQU07Z0NBQ05DLFNBQVM7Z0NBQ1RDLGNBQWM7Z0NBQ2RDLHNCQUFzQjtnQ0FDdEJDLGVBQWU7Z0NBQ2ZDLFlBQVk7Z0NBR1pDLHVCQUF1QjtnQ0FDdkJDLHlCQUF5Qjs0QkFDM0I7NEJBR0FDLGNBQWM7Z0NBQ1pDLFdBQVc7Z0NBQ1hDLHNCQUFzQjtnQ0FDdEJDLFdBQVc7Z0NBQ1hDLGdCQUFnQjtnQ0FDaEJDLGdCQUFnQjtnQ0FDaEJDLGNBQWM7Z0NBR2RDLHdCQUF3QjtnQ0FDeEJDLDhCQUE4QjtnQ0FDOUJDLHNCQUFzQjtnQ0FDdEJDLG9CQUFvQjtnQ0FDcEJDLGlCQUFpQjtnQ0FDakJDLHVCQUF1Qjs0QkFDekI7d0JBQ0Y7Ozs7Ozs7O3dCQ3hDQSxJQUFBcEosVUFBQUMsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQW1KLGNBQUFwSix1QkFBQU0sb0JBQUE7d0JBQ0EsSUFBQUosV0FBQUYsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUUsV0FBQUgsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUksVUFBQUMsb0JBQUE7d0JBQXFDLFNBQUFOLHVCQUFBTyxDQUFBOzRCQUFBLE9BQUFBLEtBQUFBLEVBQUFDLFVBQUEsR0FBQUQsSUFBQTtnQ0FBQUUsU0FBQUY7NEJBQUE7d0JBQUE7d0JBQUEsU0FBQUcsUUFBQUgsQ0FBQSxFQUFBSSxDQUFBOzRCQUFBLElBQUFDLElBQUFDLE9BQUFDLElBQUEsQ0FBQVA7NEJBQUEsSUFBQU0sT0FBQUUscUJBQUE7Z0NBQUEsSUFBQUMsSUFBQUgsT0FBQUUscUJBQUEsQ0FBQVI7Z0NBQUFJLEtBQUFLLENBQUFBLElBQUFBLEVBQUFDLE1BQUEsVUFBQU4sQ0FBQTtvQ0FBQSxPQUFBRSxPQUFBSyx3QkFBQSxDQUFBWCxHQUFBSSxHQUFBUSxVQUFBO2dDQUFBLEtBQUFQLEVBQUFRLElBQUEsQ0FBQUMsS0FBQSxDQUFBVCxHQUFBSTs0QkFBQTs0QkFBQSxPQUFBSjt3QkFBQTt3QkFBQSxTQUFBVSxjQUFBZixDQUFBOzRCQUFBLFFBQUFJLElBQUEsR0FBQUEsSUFBQVksVUFBQUMsTUFBQSxFQUFBYixJQUFBO2dDQUFBLElBQUFDLElBQUEsUUFBQVcsU0FBQSxDQUFBWixFQUFBLEdBQUFZLFNBQUEsQ0FBQVosRUFBQTtnQ0FBQUEsSUFBQSxJQUFBRCxRQUFBRyxPQUFBRCxJQUFBLElBQUFhLE9BQUEsVUFBQWQsQ0FBQTtvQ0FBQWUsZ0JBQUFuQixHQUFBSSxHQUFBQyxDQUFBLENBQUFELEVBQUE7Z0NBQUEsS0FBQUUsT0FBQWMseUJBQUEsR0FBQWQsT0FBQWUsZ0JBQUEsQ0FBQXJCLEdBQUFNLE9BQUFjLHlCQUFBLENBQUFmLE1BQUFGLFFBQUFHLE9BQUFELElBQUFhLE9BQUEsVUFBQWQsQ0FBQTtvQ0FBQUUsT0FBQWdCLGNBQUEsQ0FBQXRCLEdBQUFJLEdBQUFFLE9BQUFLLHdCQUFBLENBQUFOLEdBQUFEO2dDQUFBOzRCQUFBOzRCQUFBLE9BQUFKO3dCQUFBO3dCQUFBLFNBQUFtQixnQkFBQW5CLENBQUEsRUFBQUksQ0FBQSxFQUFBQyxDQUFBOzRCQUFBLE9BQUFELENBQUFBLElBQUFtQixlQUFBbkIsRUFBQSxLQUFBSixJQUFBTSxPQUFBZ0IsY0FBQSxDQUFBdEIsR0FBQUksR0FBQTtnQ0FBQW9CLE9BQUFuQjtnQ0FBQU8sWUFBQTtnQ0FBQWEsY0FBQTtnQ0FBQUMsVUFBQTs0QkFBQSxLQUFBMUIsQ0FBQSxDQUFBSSxFQUFBLEdBQUFDLEdBQUFMO3dCQUFBO3dCQUFBLFNBQUF1QixlQUFBbEIsQ0FBQTs0QkFBQSxJQUFBc0IsSUFBQUMsYUFBQXZCLEdBQUE7NEJBQUEsMEJBQUFzQixJQUFBQSxJQUFBQSxJQUFBO3dCQUFBO3dCQUFBLFNBQUFDLGFBQUF2QixDQUFBLEVBQUFELENBQUE7NEJBQUEsdUJBQUFDLEtBQUEsQ0FBQUEsR0FBQSxPQUFBQTs0QkFBQSxJQUFBTCxJQUFBSyxDQUFBLENBQUF3QixPQUFBQyxXQUFBOzRCQUFBLGVBQUE5QixHQUFBO2dDQUFBLElBQUEyQixJQUFBM0IsRUFBQStCLElBQUEsQ0FBQTFCLEdBQUFELEtBQUE7Z0NBQUEsdUJBQUF1QixHQUFBLE9BQUFBO2dDQUFBLFVBQUFLLFVBQUE7NEJBQUE7NEJBQUEscUJBQUE1QixJQUFBNkIsU0FBQUMsTUFBQUEsRUFBQTdCO3dCQUFBO3dCQUVyQyxNQUFNeUk7NEJBQ0oxRyxhQUFjO2dDQUNaLElBQUksQ0FBQzJHLGFBQWEsR0FBR2pKLFFBQUF3QyxNQUFNLENBQUNpRixHQUFHLENBQUNPLHFCQUFxQixJQUFJOzRCQUMzRDs0QkFHQSxNQUFNa0IsWUFBWUMsYUFBYSxLQUFLLEVBQUU7Z0NBQ3BDLElBQUk7b0NBRUYsSUFBSSxDQUFDQSxZQUFZO3dDQUNmLE1BQU1DLGNBQWMsTUFBTSxJQUFJLENBQUNDLGlCQUFpQjt3Q0FDaEQsSUFBSSxDQUFDRCxhQUNILE9BQU87NENBQ0wxRixTQUFTOzRDQUNUNEYsU0FBUzs0Q0FDVGhGLFNBQVM7d0NBQ1g7b0NBRUo7b0NBR0EsTUFBTTJCLHFCQUFxQmpHLFFBQUF3QyxNQUFNLENBQUNpRixHQUFHLENBQUNHLFlBQVk7b0NBR2xELE1BQU14RCxTQUFTLE1BQU0yRSxZQUFBM0ksT0FBVSxDQUFDNEYsY0FBYyxDQUFDQztvQ0FFL0MsSUFBSTdCLE9BQU9WLE9BQU8sRUFBRTt3Q0FFbEIsTUFBTSxJQUFJLENBQUM2RixpQkFBaUI7d0NBRzVCLElBQUluRixPQUFPK0IsU0FBUyxFQUFFOzRDQUNwQixNQUFNRSxhQUFhakMsT0FBT2lDLFVBQVU7NENBR3BDLE1BQU1tRCxVQUFVLE1BQU0sSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ3BELFdBQVdxRCxZQUFZOzRDQUVuRSxJQUFJLENBQUNGLFdBQVcsQ0FBQ3BGLE9BQU9tQyxhQUFhLEVBRW5DLE1BQU0sSUFBSSxDQUFDb0QsZUFBZSxDQUFDdEQ7NENBRzdCLE9BQUFwRixjQUFBQSxjQUFBLElBQ0ttRCxTQUFNO2dEQUNUb0YsU0FBU0E7NENBQU87d0NBRXBCO29DQUNGO29DQUVBLE9BQU9wRjtnQ0FFVCxFQUFFLE9BQU9MLE9BQU87b0NBQ2RELFFBQVFDLEtBQUssQ0FBQyxXQUFXQTtvQ0FDekIsT0FBTzt3Q0FDTEwsU0FBUzt3Q0FDVEssT0FBT0EsTUFBTU8sT0FBTzt3Q0FDcEI2QixXQUFXO29DQUNiO2dDQUNGOzRCQUNGOzRCQUdBLE1BQU1rRCxvQkFBb0I7Z0NBQ3hCLElBQUk7b0NBQ0YsTUFBTWpGLFNBQVMsTUFBTTFFLFFBQUFVLE9BQU8sQ0FBQ3dKLEdBQUcsQ0FBQzt3Q0FDL0JDLEtBQUs3SixRQUFBd0MsTUFBTSxDQUFDMEYsWUFBWSxDQUFDTyxzQkFBc0I7b0NBQ2pEO29DQUVBLElBQUksQ0FBQ3JFLFVBQVUsQ0FBQ0EsT0FBTzFDLEtBQUssRUFDMUIsT0FBTztvQ0FHVCxNQUFNb0ksZ0JBQWdCLElBQUlDLEtBQUszRixPQUFPMUMsS0FBSyxFQUFFc0ksT0FBTztvQ0FDcEQsTUFBTUMsTUFBTUYsS0FBS0UsR0FBRztvQ0FFcEIsT0FBUUEsTUFBTUgsaUJBQWtCLElBQUksQ0FBQ2IsYUFBYTtnQ0FFcEQsRUFBRSxPQUFPbEYsT0FBTztvQ0FDZEQsUUFBUUMsS0FBSyxDQUFDLGFBQWFBO29DQUMzQixPQUFPO2dDQUNUOzRCQUNGOzRCQUdBLE1BQU13RixvQkFBb0I7Z0NBQ3hCLElBQUk7b0NBQ0YsTUFBTTdKLFFBQUFVLE9BQU8sQ0FBQzhKLEdBQUcsQ0FBQzt3Q0FDaEJMLEtBQUs3SixRQUFBd0MsTUFBTSxDQUFDMEYsWUFBWSxDQUFDTyxzQkFBc0I7d0NBQy9DL0csT0FBTyxJQUFJcUksT0FBT0ksV0FBVztvQ0FDL0I7Z0NBQ0YsRUFBRSxPQUFPcEcsT0FBTztvQ0FDZEQsUUFBUUMsS0FBSyxDQUFDLGFBQWFBO2dDQUM3Qjs0QkFDRjs0QkFHQSxNQUFNNEYsZ0JBQWdCdEQsVUFBVSxFQUFFO2dDQUNoQyxJQUFJO29DQUNGLE1BQU0zRyxRQUFBVSxPQUFPLENBQUM4SixHQUFHLENBQUM7d0NBQ2hCTCxLQUFLN0osUUFBQXdDLE1BQU0sQ0FBQzBGLFlBQVksQ0FBQ1Usa0JBQWtCO3dDQUMzQ2xILE9BQU8wQixLQUFLQyxTQUFTLENBQUNnRDtvQ0FDeEI7Z0NBQ0YsRUFBRSxPQUFPdEMsT0FBTztvQ0FDZEQsUUFBUUMsS0FBSyxDQUFDLGFBQWFBO2dDQUM3Qjs0QkFDRjs0QkFHQSxNQUFNcUcsc0JBQXNCO2dDQUMxQixJQUFJO29DQUNGLE1BQU1oRyxTQUFTLE1BQU0xRSxRQUFBVSxPQUFPLENBQUN3SixHQUFHLENBQUM7d0NBQy9CQyxLQUFLN0osUUFBQXdDLE1BQU0sQ0FBQzBGLFlBQVksQ0FBQ1Usa0JBQWtCO29DQUM3QztvQ0FFQSxJQUFJeEUsVUFBVUEsT0FBTzFDLEtBQUssRUFDeEIsT0FBTzBCLEtBQUtpSCxLQUFLLENBQUNqRyxPQUFPMUMsS0FBSztvQ0FHaEMsT0FBTztnQ0FDVCxFQUFFLE9BQU9xQyxPQUFPO29DQUNkRCxRQUFRQyxLQUFLLENBQUMsZUFBZUE7b0NBQzdCLE9BQU87Z0NBQ1Q7NEJBQ0Y7NEJBR0EsTUFBTXVHLGNBQWNDLFdBQVcsRUFBRTtnQ0FDL0IsSUFBSTtvQ0FDRixNQUFNN0ssUUFBQVUsT0FBTyxDQUFDOEosR0FBRyxDQUFDO3dDQUNoQkwsS0FBSzdKLFFBQUF3QyxNQUFNLENBQUMwRixZQUFZLENBQUNXLGVBQWU7d0NBQ3hDbkgsT0FBTzZJLFlBQVlDLFFBQVE7b0NBQzdCO2dDQUNGLEVBQUUsT0FBT3pHLE9BQU87b0NBQ2RELFFBQVFDLEtBQUssQ0FBQyxXQUFXQTtnQ0FDM0I7NEJBQ0Y7NEJBR0EsTUFBTTBGLGlCQUFpQmMsV0FBVyxFQUFFO2dDQUNsQyxJQUFJO29DQUNGLE1BQU1uRyxTQUFTLE1BQU0xRSxRQUFBVSxPQUFPLENBQUN3SixHQUFHLENBQUM7d0NBQy9CQyxLQUFLN0osUUFBQXdDLE1BQU0sQ0FBQzBGLFlBQVksQ0FBQ1csZUFBZTtvQ0FDMUM7b0NBRUEsSUFBSXpFLFVBQVVBLE9BQU8xQyxLQUFLLEVBQ3hCLE9BQU8rSSxTQUFTckcsT0FBTzFDLEtBQUssTUFBTTZJO29DQUdwQyxPQUFPO2dDQUNULEVBQUUsT0FBT3hHLE9BQU87b0NBQ2RELFFBQVFDLEtBQUssQ0FBQyxhQUFhQTtvQ0FDM0IsT0FBTztnQ0FDVDs0QkFDRjs0QkFHQSxNQUFNMkcsaUJBQWlCckUsVUFBVSxFQUFFRSxnQkFBZ0IsS0FBSyxFQUFFO2dDQUN4RCxPQUFPLElBQUlqRCxRQUFTQyxDQUFBQTtvQ0FDbEIsSUFBSWdELGVBQWU7d0NBRWpCekcsU0FBQU0sT0FBTSxDQUFDVyxJQUFJLENBQUM7NENBQ1Y0SixLQUFLOzRDQUNMQyxRQUFRO2dEQUNOdkUsWUFBWUE7Z0RBQ1pFLGVBQWU7NENBQ2pCO3dDQUNGO3dDQUNBaEQsUUFBUTt3Q0FDUjtvQ0FDRjtvQ0FHQTFELFNBQUFPLE9BQU0sQ0FBQ3lLLFVBQVUsQ0FBQzt3Q0FDaEJDLE9BQU8sQ0FBQyxNQUFNLEVBQUV6RSxXQUFXMEUsWUFBWSxFQUFFO3dDQUN6Q3pHLFNBQVMsR0FBRytCLFdBQVd5RSxLQUFLLENBQUMsSUFBSSxFQUFFekUsV0FBVzJFLFNBQVMsRUFBRTt3Q0FDekRDLFNBQVM7NENBQ1A7Z0RBQ0VDLE1BQU07Z0RBQ05DLE9BQU87NENBQ1Q7NENBQ0E7Z0RBQ0VELE1BQU07Z0RBQ05DLE9BQU87NENBQ1Q7eUNBQ0Q7d0NBQ0R6SCxTQUFVMEgsQ0FBQUE7NENBQ1IsSUFBSUEsQUFBVSxNQUFWQSxPQUVGN0gsUUFBUTtpREFDSCxJQUFJNkgsQUFBVSxNQUFWQSxPQUVUN0gsUUFBUTt3Q0FFWjt3Q0FDQThILFFBQVFBOzRDQUVOOUgsUUFBUTt3Q0FDVjtvQ0FDRjtnQ0FDRjs0QkFDRjs0QkFHQSxNQUFNK0gsNEJBQTRCO2dDQUNoQyxJQUFJO29DQUVGLE1BQU1sSCxTQUFTLE1BQU0sSUFBSSxDQUFDOEUsV0FBVyxDQUFDO29DQUV0QyxJQUFJOUUsT0FBT1YsT0FBTyxJQUFJVSxPQUFPK0IsU0FBUyxJQUFJL0IsT0FBT2lDLFVBQVUsRUFFekQ7d0NBQUEsSUFBSWpDLE9BQU9tQyxhQUFhLEVBQUU7NENBRXhCLE1BQU0sSUFBSSxDQUFDZ0YsdUJBQXVCOzRDQUdsQ3pMLFNBQUFNLE9BQU0sQ0FBQ1csSUFBSSxDQUFDO2dEQUNWNEosS0FBSztnREFDTEMsUUFBUTtvREFDTnZFLFlBQVlqQyxPQUFPaUMsVUFBVTtvREFDN0JFLGVBQWU7Z0RBQ2pCOzRDQUNGOzRDQUVBLE9BQU87Z0RBQ0xpRixnQkFBZ0I7Z0RBQ2hCbkYsWUFBWWpDLE9BQU9pQyxVQUFVOzRDQUMvQjt3Q0FDRjtvQ0FBQTtvQ0FHRixPQUFPO3dDQUNMbUYsZ0JBQWdCO29DQUNsQjtnQ0FFRixFQUFFLE9BQU96SCxPQUFPO29DQUNkRCxRQUFRQyxLQUFLLENBQUMsYUFBYUE7b0NBQzNCLE9BQU87d0NBQ0x5SCxnQkFBZ0I7d0NBQ2hCekgsT0FBT0EsTUFBTU8sT0FBTztvQ0FDdEI7Z0NBQ0Y7NEJBQ0Y7NEJBR0EsTUFBTWlILDBCQUEwQjtnQ0FDOUIsSUFBSTtvQ0FDRixNQUFNN0wsUUFBQVUsT0FBTyxDQUFDOEosR0FBRyxDQUFDO3dDQUNoQkwsS0FBSzdKLFFBQUF3QyxNQUFNLENBQUMwRixZQUFZLENBQUNZLHFCQUFxQjt3Q0FDOUNwSCxPQUFPO29DQUNUO2dDQUNGLEVBQUUsT0FBT3FDLE9BQU87b0NBQ2RELFFBQVFDLEtBQUssQ0FBQyxhQUFhQTtnQ0FDN0I7NEJBQ0Y7NEJBR0EsTUFBTTBILHVCQUF1QjtnQ0FDM0IsSUFBSTtvQ0FDRixNQUFNL0wsUUFBQVUsT0FBTyxDQUFDc0wsTUFBTSxDQUFDO3dDQUNuQjdCLEtBQUs3SixRQUFBd0MsTUFBTSxDQUFDMEYsWUFBWSxDQUFDWSxxQkFBcUI7b0NBQ2hEO2dDQUNGLEVBQUUsT0FBTy9FLE9BQU87b0NBQ2RELFFBQVFDLEtBQUssQ0FBQyxlQUFlQTtnQ0FDL0I7NEJBQ0Y7NEJBR0EsTUFBTTRILHdCQUF3QjtnQ0FDNUIsSUFBSTtvQ0FDRixNQUFNdkgsU0FBUyxNQUFNMUUsUUFBQVUsT0FBTyxDQUFDd0osR0FBRyxDQUFDO3dDQUMvQkMsS0FBSzdKLFFBQUF3QyxNQUFNLENBQUMwRixZQUFZLENBQUNZLHFCQUFxQjtvQ0FDaEQ7b0NBRUEsT0FBTzFFLFVBQVVBLEFBQWlCLFdBQWpCQSxPQUFPMUMsS0FBSztnQ0FDL0IsRUFBRSxPQUFPcUMsT0FBTztvQ0FDZEQsUUFBUUMsS0FBSyxDQUFDLGVBQWVBO29DQUM3QixPQUFPO2dDQUNUOzRCQUNGOzRCQUdBLE1BQU02SCxtQkFBbUI7Z0NBQ3ZCLElBQUk7b0NBQ0YsTUFBTWxNLFFBQUFVLE9BQU8sQ0FBQ3NMLE1BQU0sQ0FBQzt3Q0FDbkI3QixLQUFLN0osUUFBQXdDLE1BQU0sQ0FBQzBGLFlBQVksQ0FBQ1Usa0JBQWtCO29DQUM3QztvQ0FFQSxNQUFNbEosUUFBQVUsT0FBTyxDQUFDc0wsTUFBTSxDQUFDO3dDQUNuQjdCLEtBQUs3SixRQUFBd0MsTUFBTSxDQUFDMEYsWUFBWSxDQUFDVyxlQUFlO29DQUMxQztvQ0FFQSxNQUFNbkosUUFBQVUsT0FBTyxDQUFDc0wsTUFBTSxDQUFDO3dDQUNuQjdCLEtBQUs3SixRQUFBd0MsTUFBTSxDQUFDMEYsWUFBWSxDQUFDWSxxQkFBcUI7b0NBQ2hEO2dDQUNGLEVBQUUsT0FBTy9FLE9BQU87b0NBQ2RELFFBQVFDLEtBQUssQ0FBQyxhQUFhQTtnQ0FDN0I7NEJBQ0Y7d0JBQ0Y7d0JBQUMsSUFBQTRDLFdBQUFDLE9BQUFBLENBQUFBLFVBQUEsR0FFYyxJQUFJb0M7Ozs7Ozs7O3dCQ2xUbkIsSUFBQXRKLFVBQUFDLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFDLFdBQUFGLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFtSixjQUFBcEosdUJBQUFNLG9CQUFBO3dCQUNBLElBQUFELFVBQUFDLG9CQUFBO3dCQUFxQyxTQUFBTix1QkFBQU8sQ0FBQTs0QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7Z0NBQUFFLFNBQUFGOzRCQUFBO3dCQUFBO3dCQUtyQyxNQUFNMkw7NEJBT0pDLFlBQVlqQyxHQUFHLEVBQUU7Z0NBQ2YsT0FBTyxJQUFJdkcsUUFBU0MsQ0FBQUE7b0NBQ2xCMUQsU0FBQU8sT0FBTyxDQUFDd0osR0FBRyxDQUFDO3dDQUNWQyxLQUFLQTt3Q0FDTG5HLFNBQVVaLENBQUFBLE9BQVNTLFFBQVFUO3dDQUMzQm1CLE1BQU1BLElBQU1WLFFBQVE7b0NBQ3RCO2dDQUNGOzRCQUNGOzRCQVFBd0ksWUFBWWxDLEdBQUcsRUFBRW5JLEtBQUssRUFBRTtnQ0FDdEIsT0FBTyxJQUFJNEIsUUFBUSxDQUFDQyxTQUFTQztvQ0FDM0IzRCxTQUFBTyxPQUFPLENBQUM4SixHQUFHLENBQUM7d0NBQ1ZMLEtBQUtBO3dDQUNMbkksT0FBT0E7d0NBQ1BnQyxTQUFTSDt3Q0FDVFUsTUFBTUEsQ0FBQytILEtBQUtuSSxPQUFTTCxPQUFPLElBQUlRLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRTZGLElBQUksR0FBRyxFQUFFbUMsSUFBSSxFQUFFLEVBQUVuSSxLQUFLLENBQUMsQ0FBQztvQ0FDM0Y7Z0NBQ0Y7NEJBQ0Y7NEJBT0FvSSxrQkFBa0I7Z0NBQ2hCLE9BQU8sSUFBSTNJLFFBQVNDLENBQUFBO29DQUNsQjdELFFBQUFVLE9BQU0sQ0FBQzhMLFNBQVMsQ0FBQzt3Q0FDZnhJLFNBQVMsT0FBT1o7NENBQ2QsSUFBSXFKLFNBQVNySixPQUFPQSxLQUFLcUosTUFBTSxHQUFHOzRDQUNsQyxJQUFJQSxBQUFXLFNBQVhBLFFBQWlCO2dEQUNuQnJJLFFBQVFzSSxJQUFJLENBQUM7Z0RBQ2JELFNBQVM7NENBQ1g7NENBRUEsSUFBSSxDQUFDQSxRQUFRO2dEQUNYckksUUFBUUMsS0FBSyxDQUFDO2dEQUNkUixRQUFRO2dEQUNSOzRDQUNGOzRDQUVBLElBQUk7Z0RBRUYsTUFBTSxJQUFJLENBQUN3SSxXQUFXLENBQUMvTCxRQUFBd0MsTUFBTSxDQUFDMEYsWUFBWSxDQUFDQyxTQUFTLEVBQUVnRTtnREFDdERySSxRQUFRZSxHQUFHLENBQUMsd0JBQXdCc0g7Z0RBQ3BDNUksUUFBUTRJOzRDQUNWLEVBQUUsT0FBT2pNLEdBQUc7Z0RBQ1Y0RCxRQUFRQyxLQUFLLENBQUMsNENBQTRDN0Q7Z0RBQzFEcUQsUUFBUTs0Q0FDVjt3Q0FDRjt3Q0FDQVUsTUFBTUEsQ0FBQytILEtBQUtuSTs0Q0FDVkMsUUFBUUMsS0FBSyxDQUFDOzRDQUNkUixRQUFRO3dDQUNWO29DQUNGO2dDQUNGOzRCQUNGOzRCQU9BLE1BQU04SSxjQUFjdkgsUUFBUSxFQUFFO2dDQUM1QixJQUFJLENBQUNBLFlBQWEsQ0FBQ0EsU0FBU3dILEVBQUUsSUFBSSxDQUFDeEgsU0FBU3lILFdBQVksRUFDdEQsTUFBTSxJQUFJdkksTUFBTTtnQ0FHbEIsTUFBTXdJLGlCQUFpQjtvQ0FDckJGLElBQUl4SCxTQUFTd0gsRUFBRSxJQUFJeEgsU0FBU3lILFdBQVc7b0NBQ3ZDQSxhQUFhekgsU0FBU3lILFdBQVc7b0NBQ2pDdEgsVUFBVUgsU0FBU0csUUFBUTtvQ0FDM0J3SCxjQUFjM0gsU0FBUzJILFlBQVksSUFBSTtnQ0FDekM7Z0NBRUEsTUFBTSxJQUFJLENBQUNWLFdBQVcsQ0FBQy9MLFFBQUF3QyxNQUFNLENBQUMwRixZQUFZLENBQUNHLFNBQVMsRUFBRWpGLEtBQUtDLFNBQVMsQ0FBQ21KO2dDQUNyRTFJLFFBQVFlLEdBQUcsQ0FBQyw0Q0FBNEMySDtnQ0FDeEQsT0FBT0E7NEJBQ1Q7NEJBUUEsTUFBTUUsdUJBQXVCQyxZQUFZLEtBQUssRUFBRTtnQ0FFOUM3SSxRQUFRZSxHQUFHLENBQUM7Z0NBQ1osTUFBTStILHVCQUF1QixNQUFNLElBQUksQ0FBQ2QsV0FBVyxDQUFDOUwsUUFBQXdDLE1BQU0sQ0FBQzBGLFlBQVksQ0FBQ0csU0FBUztnQ0FDakYsSUFBSXVFLHNCQUFzQjtvQ0FDeEIsSUFBSTt3Q0FDRixNQUFNOUgsV0FBVzFCLEtBQUtpSCxLQUFLLENBQUN1Qzt3Q0FDNUIsSUFBSTlILFlBQVlBLFNBQVN3SCxFQUFFLEVBQ3pCLElBQUlLLFdBQVc7NENBQ2I3SSxRQUFRZSxHQUFHLENBQUM7NENBQ1osSUFBSTtnREFDRixNQUFNZ0ksYUFBYSxNQUFNOUQsWUFBQTNJLE9BQVUsQ0FBQ3dFLGNBQWMsQ0FBQ0UsU0FBU3dILEVBQUU7Z0RBQzlELElBQUlPLGNBQWNBLFdBQVduSixPQUFPLEVBQUU7b0RBQ3BDSSxRQUFRZSxHQUFHLENBQUM7b0RBQ1osT0FBTyxNQUFNLElBQUksQ0FBQ3dILGFBQWEsQ0FBQ1EsV0FBVy9ILFFBQVE7Z0RBQ3JEO2dEQUNFaEIsUUFBUXNJLElBQUksQ0FBQyw0RUFBNEVTLGFBQWFBLFdBQVc5SSxLQUFLLEdBQUc7Z0RBQ3pILE9BQU9lOzRDQUVYLEVBQUUsT0FBT2dJLFdBQVc7Z0RBQ2xCaEosUUFBUUMsS0FBSyxDQUFDLCtEQUErRCtJO2dEQUM3RSxPQUFPaEk7NENBQ1Q7d0NBQ0YsT0FBTzs0Q0FDTGhCLFFBQVFlLEdBQUcsQ0FBQyx5REFBeURDOzRDQUNyRSxPQUFPQTt3Q0FDVDtvQ0FFSixFQUFFLE9BQU81RSxHQUFHO3dDQUVWNEQsUUFBUXNJLElBQUksQ0FBQztvQ0FDZjtnQ0FDRjtnQ0FFQXRJLFFBQVFlLEdBQUcsQ0FBQztnQ0FHWixNQUFNVSxXQUFXLE1BQU0sSUFBSSxDQUFDMEcsZUFBZTtnQ0FDM0MsSUFBSSxDQUFDMUcsVUFBVTtvQ0FDYnpCLFFBQVFDLEtBQUssQ0FBQztvQ0FDZCxPQUFPO2dDQUNUO2dDQUNBRCxRQUFRZSxHQUFHLENBQUMsQ0FBQyw2QkFBNkIsRUFBRVUsVUFBVTtnQ0FFdEQsSUFBSTtvQ0FFRnpCLFFBQVFlLEdBQUcsQ0FBQztvQ0FDWixNQUFNa0ksWUFBWSxNQUFNaEUsWUFBQTNJLE9BQVUsQ0FBQ2tGLHVCQUF1QixDQUFDQztvQ0FDM0R6QixRQUFRZSxHQUFHLENBQUMscURBQXFEekIsS0FBS0MsU0FBUyxDQUFDMEo7b0NBR2hGLElBQUlBLGFBQWFBLFVBQVV0SCxhQUFhLElBQUlzSCxVQUFVakksUUFBUSxFQUFFO3dDQUU5RGhCLFFBQVFlLEdBQUcsQ0FBQzt3Q0FDWixPQUFPLE1BQU0sSUFBSSxDQUFDd0gsYUFBYSxDQUFDVSxVQUFVakksUUFBUTtvQ0FDcEQ7b0NBR0FoQixRQUFRZSxHQUFHLENBQUM7b0NBQ1osTUFBTW1JLGVBQWUsTUFBTWpFLFlBQUEzSSxPQUFVLENBQUN1RixvQkFBb0IsQ0FBQ0o7b0NBQzNEekIsUUFBUWUsR0FBRyxDQUFDLHdEQUF3RHpCLEtBQUtDLFNBQVMsQ0FBQzJKO29DQUduRixJQUFJQSxnQkFBZ0JBLGFBQWF0SixPQUFPLElBQUlzSixhQUFhbEksUUFBUSxFQUFFO3dDQUNqRWhCLFFBQVFlLEdBQUcsQ0FBQzt3Q0FDWixPQUFPLE1BQU0sSUFBSSxDQUFDd0gsYUFBYSxDQUFDVyxhQUFhbEksUUFBUTtvQ0FDdkQ7b0NBQ0VoQixRQUFRQyxLQUFLLENBQUMsd0RBQXdEaUosZUFBZUEsYUFBYTFJLE9BQU8sR0FBRztvQ0FDNUcsT0FBTztnQ0FFWCxFQUFFLE9BQU9wRSxHQUFHO29DQUNWNEQsUUFBUUMsS0FBSyxDQUFDLHVGQUF1RjdEO29DQUNyRyxPQUFPO2dDQUNUOzRCQUNGOzRCQVFBLE1BQU0rTSxvQkFBb0JDLE1BQU0sRUFBRTtnQ0FDaEMsSUFBSSxBQUFrQixZQUFsQixPQUFPQSxVQUF1QkMsTUFBTUQsU0FBUztvQ0FDL0NwSixRQUFRc0ksSUFBSSxDQUFDLGlFQUFpRWM7b0NBQzlFLE9BQU87Z0NBQ1Q7Z0NBRUEsSUFBSTtvQ0FDRixNQUFNRSxvQkFBb0IsTUFBTSxJQUFJLENBQUN0QixXQUFXLENBQUM5TCxRQUFBd0MsTUFBTSxDQUFDMEYsWUFBWSxDQUFDSSxjQUFjO29DQUNuRixJQUFJK0UsZ0JBQWdCNUMsU0FBUzJDLHNCQUFzQjtvQ0FFbkQsTUFBTUUsWUFBWUQsZ0JBQWdCSDtvQ0FFbEMsTUFBTSxJQUFJLENBQUNuQixXQUFXLENBQUMvTCxRQUFBd0MsTUFBTSxDQUFDMEYsWUFBWSxDQUFDSSxjQUFjLEVBQUVnRixVQUFVOUMsUUFBUTtvQ0FFN0UxRyxRQUFRZSxHQUFHLENBQUMsQ0FBQyx3Q0FBd0MsRUFBRXFJLE9BQU8sYUFBYSxFQUFFSSxXQUFXO29DQUN4RixPQUFPQTtnQ0FDVCxFQUFFLE9BQU9wTixHQUFHO29DQUNWNEQsUUFBUUMsS0FBSyxDQUFDLDZEQUE2RDdEO29DQUMzRSxPQUFPO2dDQUNUOzRCQUNGOzRCQU9BLE1BQU1xTixtQkFBbUI7Z0NBQ3ZCekosUUFBUWUsR0FBRyxDQUFDO2dDQUdaLE1BQU0ySSxlQUFlLE1BQU0sSUFBSSxDQUFDMUIsV0FBVyxDQUFDOUwsUUFBQXdDLE1BQU0sQ0FBQzBGLFlBQVksQ0FBQ0csU0FBUztnQ0FDekUsSUFBSSxDQUFDbUYsY0FBYztvQ0FDakIxSixRQUFRc0ksSUFBSSxDQUFDO29DQUNiLE9BQU87Z0NBQ1Q7Z0NBRUEsSUFBSXRIO2dDQUNKLElBQUk7b0NBQ0ZBLFdBQVcxQixLQUFLaUgsS0FBSyxDQUFDbUQ7b0NBQ3RCLElBQUksQ0FBQzFJLFlBQVksQ0FBQ0EsU0FBU3dILEVBQUUsRUFBRTt3Q0FDN0J4SSxRQUFRc0ksSUFBSSxDQUFDO3dDQUNiLE9BQU87b0NBQ1Q7Z0NBQ0YsRUFBRSxPQUFNbE0sR0FBRztvQ0FDVDRELFFBQVFzSSxJQUFJLENBQUM7b0NBQ2IsT0FBTztnQ0FDVDtnQ0FHQSxNQUFNZ0Isb0JBQW9CLE1BQU0sSUFBSSxDQUFDdEIsV0FBVyxDQUFDOUwsUUFBQXdDLE1BQU0sQ0FBQzBGLFlBQVksQ0FBQ0ksY0FBYztnQ0FDbkYsTUFBTW1GLGVBQWVoRCxTQUFTMkM7Z0NBRTlCLElBQUlELE1BQU1NLGVBQWU7b0NBQ3ZCM0osUUFBUWUsR0FBRyxDQUFDO29DQUNaLE9BQU87Z0NBQ1Q7Z0NBRUFmLFFBQVFlLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQixFQUFFNEksYUFBYSx5QkFBeUIsRUFBRTNJLFNBQVN3SCxFQUFFLENBQUMsWUFBWSxDQUFDO2dDQUdwRyxNQUFNbEksU0FBUyxNQUFNMkUsWUFBQTNJLE9BQVUsQ0FBQ21FLFVBQVUsQ0FBQ08sU0FBU3dILEVBQUUsRUFBRW1CO2dDQUd4RCxJQUFJckosT0FBT1YsT0FBTyxFQUFFO29DQUNsQkksUUFBUWUsR0FBRyxDQUFDO29DQUNaLE1BQU0sSUFBSSxDQUFDa0gsV0FBVyxDQUFDL0wsUUFBQXdDLE1BQU0sQ0FBQzBGLFlBQVksQ0FBQ0ksY0FBYyxFQUFFO29DQUMzRCxPQUFPO2dDQUNUO2dDQUNFeEUsUUFBUUMsS0FBSyxDQUFDLDhCQUE4QkssT0FBT0wsS0FBSztnQ0FDeEQsT0FBTzs0QkFFWDs0QkFPQSxNQUFNMkosc0JBQXNCO2dDQUMxQjVKLFFBQVFlLEdBQUcsQ0FBQztnQ0FFWixJQUFJO29DQUVGZixRQUFRZSxHQUFHLENBQUM7b0NBQ1osTUFBTThJLG1CQUFtQixNQUFNLElBQUksQ0FBQ0osZ0JBQWdCO29DQUVwRCxJQUFJLENBQUNJLGtCQUFrQjt3Q0FHckIsTUFBTUMsV0FBVzt3Q0FDakI5SixRQUFRQyxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUU2SixVQUFVO3dDQUN6QyxPQUFPOzRDQUFFbEssU0FBUzs0Q0FBT1ksU0FBU3NKO3dDQUFTO29DQUM3QztvQ0FDQTlKLFFBQVFlLEdBQUcsQ0FBQztvQ0FJWmYsUUFBUWUsR0FBRyxDQUFDO29DQUNaLE1BQU1DLFdBQVcsTUFBTSxJQUFJLENBQUM0SCxzQkFBc0IsQ0FBQztvQ0FFbkQsSUFBSTVILFlBQVlBLFNBQVN3SCxFQUFFLEVBQUU7d0NBQzNCeEksUUFBUWUsR0FBRyxDQUFDLCtFQUErRUM7d0NBSTNGaEIsUUFBUWUsR0FBRyxDQUFDO3dDQUNaLE9BQU87NENBQUVuQixTQUFTOzRDQUFNWSxTQUFTO3dDQUFRO29DQUMzQztvQ0FBTzt3Q0FDTCxNQUFNc0osV0FBVzt3Q0FDakI5SixRQUFRQyxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUU2SixVQUFVO3dDQUN6QyxPQUFPOzRDQUFFbEssU0FBUzs0Q0FBT1ksU0FBU3NKO3dDQUFTO29DQUM3QztnQ0FDRixFQUFFLE9BQU8xTixHQUFHO29DQUNWNEQsUUFBUUMsS0FBSyxDQUFDLGtFQUFrRTdEO29DQUNoRixPQUFPO3dDQUFFd0QsU0FBUzt3Q0FBT1ksU0FBUztvQ0FBYztnQ0FDbEQ7NEJBQ0Y7d0JBQ0Y7d0JBQUMsSUFBQXFDLFdBQUFDLE9BQUFBLENBQUFBLFVBQUEsR0FFYyxJQUFJaUY7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkN4VG5CZ0Msb0JBQW9CLENBQUMsR0FBRyxBQUFDO3dCQUN4QixJQUFJLEFBQXNCLFlBQXRCLE9BQU9DLFlBQXlCLE9BQU9BO3dCQUMzQyxJQUFJOzRCQUNILE9BQU8sSUFBSSxJQUFJLElBQUlDLFNBQVM7d0JBQzdCLEVBQUUsT0FBTzdOLEdBQUc7NEJBQ1gsSUFBSSxBQUFrQixZQUFsQixPQUFPOE4sUUFBcUIsT0FBT0E7d0JBQ3hDO29CQUNEOzs7b0JDUEFILG9CQUFvQixFQUFFLEdBQUcsSUFBTzs7O29CQ0FoQ0Esb0JBQW9CLElBQUksR0FBRzs7Ozs7Ozs7Ozs7d0JDQ3pCLElBQUFJLGVBQUF0Tyx1QkFBQU0sb0JBQUE7d0JBQ0EsSUFBQWlPLGlCQUFBdk8sdUJBQUFNLG9CQUFBO3dCQUNBLElBQUFrTyxtQkFBQXhPLHVCQUFBTSxvQkFBQTt3QkFDQSxJQUFBUCxVQUFBQyx1QkFBQUMsZUFBQTt3QkFBb0MsU0FBQUQsdUJBQUFPLENBQUE7NEJBQUEsT0FBQUEsS0FBQUEsRUFBQUMsVUFBQSxHQUFBRCxJQUFBO2dDQUFBRSxTQUFBRjs0QkFBQTt3QkFBQTt3QkFHcEMsZUFBZWtPOzRCQUNiLElBQUk7Z0NBRUYsTUFBTUMsc0JBQXNCLE1BQU1yRixlQUFBQSxPQUFhLENBQUMyQyxxQkFBcUI7Z0NBRXJFLElBQUkwQyxxQkFBcUI7b0NBRXZCLE1BQU1DLG1CQUFtQixNQUFNdEYsZUFBQUEsT0FBYSxDQUFDb0IsbUJBQW1CO29DQUVoRSxJQUFJa0Usa0JBQWtCO3dDQUNwQkMsUUFBQUEsT0FBTSxDQUFDQyxPQUFPLENBQUM7NENBQ2I3RCxLQUFLOzRDQUNMQyxRQUFRO2dEQUNOdkUsWUFBWWlJO2dEQUNaL0gsZUFBZTs0Q0FDakI7d0NBQ0Y7d0NBRUEsT0FBTztvQ0FDVDtnQ0FDRjtnQ0FHQSxNQUFNbkMsU0FBUyxNQUFNNEUsZUFBQUEsT0FBYSxDQUFDc0MseUJBQXlCO2dDQUU1RCxJQUFJbEgsT0FBT29ILGNBQWMsRUFFdkIsT0FBTztnQ0FHVCxPQUFPOzRCQUVULEVBQUUsT0FBT3pILE9BQU87Z0NBQ2RELFFBQVFDLEtBQUssQ0FBQyxhQUFhQTtnQ0FDM0IsT0FBTzs0QkFDVDt3QkFDRjt3QkFBQyxJQUFBNEMsV0FBQUMsUUFBQXhHLE9BQUEsR0FHYzs0QkFDYixNQUFNcU8sYUFhSjs0QkFHRkMsV0FXRTs0QkFHRkM7Z0NBQ0U3SyxRQUFRZSxHQUFHLENBQUM7Z0NBQ1pnSCxhQUFBQSxPQUFXLENBQUMwQixnQkFBZ0I7NEJBQzlCOzRCQUVBcUI7Z0NBQ0U5SyxRQUFRZSxHQUFHLENBQUM7Z0NBRVpnQyxpQkFBQUEsT0FBZSxDQUFDVyxPQUFPOzRCQUN6Qjs0QkFFQXFILFNBQVE3QyxHQUFHO2dDQUNUbEksUUFBUWUsR0FBRyxDQUFDLENBQUMsa0NBQWtDLEVBQUVtSCxJQUFJMUgsT0FBTyxFQUFFO2dDQUM5RFIsUUFBUWUsR0FBRyxDQUFDLENBQUMsdUNBQXVDLEVBQUVtSCxJQUFJOEMsS0FBSyxFQUFFOzRCQUNuRTt3QkFDRiJ9