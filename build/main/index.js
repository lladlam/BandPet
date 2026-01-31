export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createPageHandler = function() {
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
                                console.log('[ApiService] checkAppUpdate called with currentVersionCode:', currentVersionCode);
                                try {
                                    const result = await this.request('check_update', {
                                        current_version_code: currentVersionCode
                                    });
                                    console.log('[ApiService] checkAppUpdate raw result:', JSON.stringify(result));
                                    console.log('[ApiService] checkAppUpdate has_update:', result.has_update);
                                    console.log('[ApiService] checkAppUpdate update_info:', JSON.stringify(result.update_info));
                                    console.log('[ApiService] checkAppUpdate is_force_update:', result.is_force_update);
                                    let updateInfo = null;
                                    if (result.update_info) {
                                        updateInfo = {
                                            version_name: result.update_info.version_name || '',
                                            version_code: result.update_info.version_code || 0,
                                            title: result.update_info.title || '发现新版本',
                                            changelog: result.update_info.changelog || '',
                                            download_url: result.update_info.download_url || '',
                                            force_update: result.update_info.force_update || false,
                                            min_required_version: result.update_info.min_required_version || 0,
                                            release_time: result.update_info.release_time || ''
                                        };
                                        console.log('[ApiService] checkAppUpdate updateInfo constructed:', JSON.stringify(updateInfo));
                                    } else console.log('[ApiService] checkAppUpdate update_info is null or undefined');
                                    const returnResult = {
                                        success: result.success || false,
                                        hasUpdate: result.has_update || false,
                                        updateInfo: updateInfo,
                                        isForceUpdate: result.is_force_update || false,
                                        currentVersionCode: result.current_version_code || currentVersionCode,
                                        latestVersionCode: result.latest_version_code || currentVersionCode,
                                        error: result.error
                                    };
                                    console.log('[ApiService] checkAppUpdate return result:', JSON.stringify(returnResult));
                                    return returnResult;
                                } catch (error) {
                                    console.error('[ApiService] checkAppUpdate error:', error);
                                    console.error('[ApiService] checkAppUpdate error message:', error.message);
                                    console.error('[ApiService] checkAppUpdate error stack:', error.stack);
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
                                VERSION: '0.4.3 Alpha',
                                VERSION_CODE: 43,
                                MAX_CLICKS_PER_BATCH: 50,
                                SYNC_INTERVAL: 30000,
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
                                FORCE_UPDATE_REQUIRED: 'force_update_required',
                                VIBRATION_ENABLED: 'vibration_enabled'
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
                                this.checkInterval = _config.CONFIG.APP.CHECK_UPDATE_INTERVAL || 360000;
                            }
                            async checkUpdate(forceCheck = false) {
                                console.log('[UpdateManager] checkUpdate called with forceCheck:', forceCheck);
                                try {
                                    if (!forceCheck) {
                                        const shouldCheck = await this.shouldCheckUpdate();
                                        console.log('[UpdateManager] shouldCheckUpdate result:', shouldCheck);
                                        if (!shouldCheck) {
                                            console.log('[UpdateManager] Skipping update check - not time yet');
                                            return {
                                                success: true,
                                                skipped: true,
                                                message: '未到检查时间'
                                            };
                                        }
                                    }
                                    const currentVersionCode = _config.CONFIG.APP.VERSION_CODE;
                                    console.log('[UpdateManager] Current version code:', currentVersionCode);
                                    console.log('[UpdateManager] Calling ApiService.checkAppUpdate...');
                                    const result = await _apiService.default.checkAppUpdate(currentVersionCode);
                                    console.log('[UpdateManager] ApiService.checkAppUpdate result:', JSON.stringify(result));
                                    if (result.success) {
                                        console.log('[UpdateManager] Update check successful');
                                        await this.recordUpdateCheck();
                                        if (result.hasUpdate) {
                                            console.log('[UpdateManager] Update available!');
                                            const updateInfo = result.updateInfo;
                                            console.log('[UpdateManager] Update info:', JSON.stringify(updateInfo));
                                            const ignored = await this.isVersionIgnored(updateInfo.version_code);
                                            console.log('[UpdateManager] Version ignored:', ignored);
                                            if (result.isForceUpdate) {
                                                await this.saveUpdateInfo(updateInfo);
                                                console.log('[UpdateManager] Saved update info to storage (force update):', JSON.stringify(updateInfo));
                                            } else if (ignored) console.log('[UpdateManager] Version ignored, not saving update info');
                                            else {
                                                await this.saveUpdateInfo(updateInfo);
                                                console.log('[UpdateManager] Saved update info to storage:', JSON.stringify(updateInfo));
                                            }
                                            return _objectSpread(_objectSpread({}, result), {}, {
                                                ignored: ignored
                                            });
                                        }
                                        console.log('[UpdateManager] No update available');
                                    } else console.log('[UpdateManager] Update check failed:', result.error);
                                    return result;
                                } catch (error) {
                                    console.error('[UpdateManager] checkUpdate error:', error);
                                    console.error('[UpdateManager] checkUpdate error message:', error.message);
                                    console.error('[UpdateManager] checkUpdate error stack:', error.stack);
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
                            async saveUpdateInfo(updateInfo) {
                                try {
                                    await _system.default.set({
                                        key: _config.CONFIG.STORAGE_KEYS.CACHED_UPDATE_INFO,
                                        value: JSON.stringify(updateInfo)
                                    });
                                    console.log('[UpdateManager] Saved update info to storage');
                                } catch (error) {
                                    console.error('保存更新信息失败:', error);
                                }
                            }
                            async getSavedUpdateInfo() {
                                try {
                                    const result = await _system.default.get({
                                        key: _config.CONFIG.STORAGE_KEYS.CACHED_UPDATE_INFO
                                    });
                                    if (result && result.value) {
                                        console.log('[UpdateManager] Retrieved update info from storage');
                                        return JSON.parse(result.value);
                                    }
                                    console.log('[UpdateManager] No update info found in storage');
                                    return null;
                                } catch (error) {
                                    console.error('获取更新信息失败:', error);
                                    return null;
                                }
                            }
                            async getCachedUpdateInfo() {
                                return this.getSavedUpdateInfo();
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
                                            uri: '/force-update',
                                            params: {
                                                updateInfo: updateInfo,
                                                isForceUpdate: true
                                            }
                                        });
                                        resolve('force_update');
                                        return;
                                    }
                                    _system3.default.push({
                                        uri: '/update',
                                        params: {
                                            updateInfo: updateInfo,
                                            isForceUpdate: false
                                        }
                                    });
                                    resolve('normal_update');
                                });
                            }
                            async checkAndHandleForceUpdate() {
                                try {
                                    const result = await this.checkUpdate(true);
                                    if (result.success && result.hasUpdate && result.updateInfo) {
                                        const ignored = await this.isVersionIgnored(result.updateInfo.version_code);
                                        const isForceUpdate = result.isForceUpdate;
                                        console.log('[UpdateManager] Version check result: ignored=' + ignored + ', isForceUpdate=' + isForceUpdate);
                                        if (ignored && !isForceUpdate) {
                                            console.log('[UpdateManager] Version was ignored by user, skipping');
                                            return {
                                                hasForceUpdate: false
                                            };
                                        }
                                        if (isForceUpdate) {
                                            await this.markForceUpdateRequired();
                                            _system3.default.push({
                                                uri: '/force-update',
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
                                    console.log('[UpdateManager] Cleared update cache');
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
                                    console.log('[UserService] Sync successful.');
                                    const currentTotalClicks = parseInt(await this._storageGet(_config.CONFIG.STORAGE_KEYS.TOTAL_CLICKS)) || 0;
                                    const updatedTotalClicks = currentTotalClicks + clicksToSync;
                                    await this._storageSet(_config.CONFIG.STORAGE_KEYS.TOTAL_CLICKS, updatedTotalClicks.toString());
                                    console.log(`[UserService] Added pending clicks to total: ${currentTotalClicks} + ${clicksToSync} = ${updatedTotalClicks}`);
                                    await this._storageSet(_config.CONFIG.STORAGE_KEYS.PENDING_CLICKS, '0');
                                    console.log('[UserService] Resetting pending clicks to 0');
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
                                        if (void 0 !== userInfo.total_clicks) {
                                            await this._storageSet(_config.CONFIG.STORAGE_KEYS.TOTAL_CLICKS, userInfo.total_clicks.toString());
                                            console.log(`[UserService] Updated local total_clicks to server value: ${userInfo.total_clicks}`);
                                        }
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
                    __webpack_require__.rv = ()=>"1.6.8";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.6.8";
                })();
                var __webpack_exports__ = {};
                (()=>{
                    var $app_style$ = [
                        [
                            [
                                [
                                    0,
                                    "container"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "100%",
                                backgroundColor: "#000000",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "center",
                                paddingTop: "10px",
                                paddingRight: "0",
                                paddingBottom: "10px",
                                paddingLeft: "0",
                                overflow: "hidden"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "time"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "24px",
                                textAlign: "center",
                                width: "100%"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "chest-row"
                                ]
                            ],
                            {
                                width: "100%",
                                justifyContent: "space-around",
                                paddingTop: "0",
                                paddingRight: "20px",
                                paddingBottom: "0",
                                paddingLeft: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "chest"
                                ]
                            ],
                            {
                                width: "100px",
                                height: "100px",
                                backgroundColor: "#daa520",
                                borderRadius: "10.5px",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                paddingTop: "7px",
                                paddingRight: "7px",
                                paddingBottom: "7px",
                                paddingLeft: "7px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "chest-label"
                                ]
                            ],
                            {
                                fontSize: "26px",
                                color: "#000000",
                                marginBottom: "5px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "chest-cost"
                                ]
                            ],
                            {
                                color: "#000000",
                                fontSize: "15px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "chest-timer"
                                ]
                            ],
                            {
                                color: "#000000",
                                fontSize: "15px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "pet-container"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "pet-image"
                                ]
                            ],
                            {
                                width: "200px",
                                height: "200px",
                                objectFit: "contain"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "pet-name"
                                ]
                            ],
                            {
                                color: "#888888",
                                fontSize: "28px",
                                marginTop: "15px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "bottom-bar"
                                ]
                            ],
                            {
                                width: "100%",
                                justifyContent: "space-around",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "more-button"
                                ]
                            ],
                            {
                                width: "56px",
                                height: "56px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "click-counter"
                                ]
                            ],
                            {
                                width: "140px",
                                height: "56px",
                                borderRadius: "28px",
                                backgroundColor: "#1a1a1a",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "click-counter-text"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "28px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "update-overlay"
                                ]
                            ],
                            {
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(0, 0, 0, 0.9)",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingTop: "20px",
                                paddingRight: "20px",
                                paddingBottom: "20px",
                                paddingLeft: "20px",
                                zIndex: 999
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "update-content"
                                ]
                            ],
                            {
                                width: "100%",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#000000",
                                paddingTop: "20px",
                                paddingRight: "20px",
                                paddingBottom: "20px",
                                paddingLeft: "20px",
                                borderRadius: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "update-title"
                                ]
                            ],
                            {
                                fontSize: "18px",
                                color: "#ffffff",
                                marginBottom: "10px",
                                textAlign: "center",
                                fontWeight: "bold"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "version-text"
                                ]
                            ],
                            {
                                fontSize: "14px",
                                color: "#aaaaaa",
                                marginBottom: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "changelog-container"
                                ]
                            ],
                            {
                                width: "100%",
                                flexDirection: "column",
                                marginBottom: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "changelog-title"
                                ]
                            ],
                            {
                                fontSize: "16px",
                                color: "#ffffff",
                                marginBottom: "10px",
                                fontWeight: "bold"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "changelog-scroll"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "125px",
                                paddingTop: "10px",
                                paddingRight: "10px",
                                paddingBottom: "10px",
                                paddingLeft: "10px",
                                backgroundColor: "#1a1a1a",
                                borderRadius: "10px",
                                marginBottom: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "changelog-text"
                                ]
                            ],
                            {
                                fontSize: "14px",
                                color: "#dddddd",
                                lineHeight: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "button-container"
                                ]
                            ],
                            {
                                width: "100%",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginTop: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "ignore-button"
                                ]
                            ],
                            {
                                flex: 1,
                                height: "40px",
                                backgroundColor: "#555555",
                                borderRadius: "20px",
                                justifyContent: "center",
                                alignItems: "center",
                                marginRight: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "ignore-button-text"
                                ]
                            ],
                            {
                                fontSize: "15px",
                                color: "#ffffff",
                                fontWeight: "bold"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "check-button"
                                ]
                            ],
                            {
                                flex: 1,
                                height: "40px",
                                backgroundColor: "#4caf50",
                                borderRadius: "20px",
                                justifyContent: "center",
                                alignItems: "center",
                                marginLeft: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "check-button-text"
                                ]
                            ],
                            {
                                fontSize: "15px",
                                color: "#ffffff",
                                fontWeight: "bold"
                            }
                        ]
                    ];
                    var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.default = void 0;
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.router"));
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                        var _system3 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                        var _system4 = _interopRequireDefault($app_require$1("@app-module/system.vibrator"));
                        var _userService = _interopRequireDefault(__webpack_require__("./src/common/js/userService.js"));
                        var _updateManager = _interopRequireDefault(__webpack_require__("./src/common/js/update-manager.js"));
                        var _config = __webpack_require__("./src/common/js/config.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        const _promisifiedStorageGet = (key)=>new Promise((resolve)=>{
                                _system2.default.get({
                                    key,
                                    success: (data)=>resolve(data),
                                    fail: ()=>resolve(null)
                                });
                            });
                        const _promisifiedStorageSet = (key, value)=>new Promise((resolve, reject)=>{
                                _system2.default.set({
                                    key,
                                    value,
                                    success: resolve,
                                    fail: (err, code)=>reject(new Error(`Storage.set failed for key '${key}' with code ${code}: ${err}`))
                                });
                            });
                        var _default = exports.default = {
                            data: {
                                time: '00:00',
                                petName: '未命名',
                                clickCount: 0,
                                petImage: '/common/Ra0.png',
                                vibrationEnabled: true,
                                updateCheckInterval: null,
                                chests: [
                                    {
                                        claimed: false,
                                        refreshTimestamp: 0,
                                        timerDisplay: '花费: 1000'
                                    },
                                    {
                                        claimed: false,
                                        refreshTimestamp: 0,
                                        timerDisplay: '花费: 1000'
                                    }
                                ],
                                showUpdateOverlay: false,
                                updateInfo: {}
                            },
                            onInit () {
                                this.loadInitialState();
                                this.updateTime();
                                setInterval(async ()=>{
                                    await this.autoSyncFromCloud();
                                }, _config.CONFIG.APP.SYNC_INTERVAL);
                                setInterval(this.updateTime, 10000);
                                setInterval(this.updateChestTimers.bind(this), 1000);
                                this.updateCheckInterval = setInterval(()=>{
                                    this.checkForUpdates();
                                }, _config.CONFIG.APP.CHECK_UPDATE_INTERVAL);
                                console.log('[Main] Update check interval set to:', _config.CONFIG.APP.CHECK_UPDATE_INTERVAL, 'ms');
                            },
                            async onShow () {
                                await this.loadVibrationSetting();
                                console.log('[Main] onShow - Immediate update check triggered');
                                await this.checkForUpdates();
                            },
                            async checkForUpdates () {
                                console.log('[Main] checkForUpdates called');
                                try {
                                    console.log('[Main] Periodic update check triggered...');
                                    const result = await _updateManager.default.checkUpdate(false);
                                    console.log('[Main] Update check result:', JSON.stringify(result));
                                    if (result.success && result.hasUpdate && !result.skipped) {
                                        console.log('[Main] Update available:', result.updateInfo);
                                        try {
                                            await _updateManager.default.saveUpdateInfo(result.updateInfo);
                                            console.log('[Main] Saved update info to storage:', JSON.stringify(result.updateInfo));
                                        } catch (e) {
                                            console.error('[Main] Failed to save update info:', e);
                                        }
                                        if (result.isForceUpdate) {
                                            console.log('[Main] Force update detected, redirecting...');
                                            _system.default.replace({
                                                uri: '/force-update',
                                                params: {
                                                    updateInfo: result.updateInfo,
                                                    isForceUpdate: true
                                                }
                                            });
                                        } else if (!result.ignored) {
                                            console.log('[Main] Normal update detected, redirecting to update page...');
                                            _system.default.push({
                                                uri: '/update',
                                                params: {
                                                    updateInfo: result.updateInfo,
                                                    isForceUpdate: false
                                                }
                                            });
                                        }
                                    } else if (result.skipped) console.log('[Main] Update check skipped (not time yet)');
                                    else if (result.success) console.log('[Main] No update available');
                                    else console.log('[Main] Update check failed:', result.error);
                                } catch (error) {
                                    console.error('[Main] Periodic update check failed:', error);
                                    console.error('[Main] Update check error message:', error.message);
                                    console.error('[Main] Update check error stack:', error.stack);
                                }
                            },
                            async onIgnoreUpdate () {
                                console.log('[Main] User clicked ignore update');
                                if (this.updateInfo && this.updateInfo.version_code) {
                                    try {
                                        await _updateManager.default.ignoreVersion(this.updateInfo.version_code);
                                        console.log('[Main] Version ignored:', this.updateInfo.version_code);
                                        _system3.default.showToast({
                                            message: '已忽略此版本',
                                            duration: 1500
                                        });
                                    } catch (e) {
                                        console.error('[Main] Failed to ignore version:', e);
                                    }
                                }
                                this.showUpdateOverlay = false;
                                this.updateInfo = {};
                            },
                            async onKnowUpdate () {
                                console.log('[Main] User clicked know update');
                                this.showUpdateOverlay = false;
                                this.updateInfo = {};
                            },
                            async loadInitialState () {
                                const userInfo = await _userService.default.ensureUserIsRegistered();
                                if (userInfo && userInfo.id) {
                                    this.petName = userInfo.pet_name || '未命名';
                                    const serverClicks = userInfo.total_clicks || 0;
                                    if (serverClicks > 0) {
                                        await _promisifiedStorageSet(_config.CONFIG.STORAGE_KEYS.TOTAL_CLICKS, serverClicks.toString());
                                        console.log(`[State] Synced server clicks to local storage: ${serverClicks}`);
                                    }
                                }
                                const totalClicksStr = await _promisifiedStorageGet(_config.CONFIG.STORAGE_KEYS.TOTAL_CLICKS);
                                const totalClicks = parseInt(totalClicksStr) || 0;
                                const pendingClicksStr = await _promisifiedStorageGet(_config.CONFIG.STORAGE_KEYS.PENDING_CLICKS);
                                const pendingClicks = parseInt(pendingClicksStr) || 0;
                                this.clickCount = totalClicks + pendingClicks;
                                console.log(`[State] Loaded state: Total clicks=${totalClicks}, Pending clicks=${pendingClicks}, Display clicks=${this.clickCount}`);
                                await this.loadChestStates();
                                await this.loadVibrationSetting();
                            },
                            async loadVibrationSetting () {
                                try {
                                    const setting = await _promisifiedStorageGet(_config.CONFIG.STORAGE_KEYS.VIBRATION_ENABLED);
                                    this.vibrationEnabled = 'false' !== setting;
                                    console.log('[Main] Loaded vibration setting:', this.vibrationEnabled);
                                } catch (e) {
                                    console.error('[Main] Failed to load vibration setting:', e);
                                    this.vibrationEnabled = true;
                                }
                            },
                            async autoSyncFromCloud () {
                                console.log('[Main] Starting auto sync from cloud...');
                                try {
                                    const uploadSuccess = await _userService.default.triggerClickSync();
                                    if (!uploadSuccess) return void console.log('[Main] Upload failed, keeping pending clicks unchanged');
                                    const userInfo = await _userService.default.ensureUserIsRegistered(true);
                                    if (userInfo && void 0 !== userInfo.total_clicks) {
                                        const _promisifiedStorageSet = (key, value)=>new Promise((resolve, reject)=>{
                                                _system2.default.set({
                                                    key,
                                                    value,
                                                    success: resolve,
                                                    fail: (err, code)=>reject(new Error(`Storage.set failed for key '${key}' with code ${code}: ${err}`))
                                                });
                                            });
                                        await _promisifiedStorageSet(_config.CONFIG.STORAGE_KEYS.TOTAL_CLICKS, userInfo.total_clicks.toString());
                                        console.log(`[Main] Updated total_clicks from server: ${userInfo.total_clicks}`);
                                    }
                                    await this.refreshClickCount();
                                } catch (error) {
                                    console.error('[Main] Auto sync from cloud failed:', error);
                                }
                            },
                            async refreshClickCount () {
                                try {
                                    const totalClicksStr = await _promisifiedStorageGet(_config.CONFIG.STORAGE_KEYS.TOTAL_CLICKS);
                                    const totalClicks = parseInt(totalClicksStr) || 0;
                                    const pendingClicksStr = await _promisifiedStorageGet(_config.CONFIG.STORAGE_KEYS.PENDING_CLICKS);
                                    const pendingClicks = parseInt(pendingClicksStr) || 0;
                                    this.clickCount = totalClicks + pendingClicks;
                                    console.log(`[Main] Refreshed clickCount: ${totalClicks} + ${pendingClicks} = ${this.clickCount}`);
                                } catch (e) {
                                    console.error('[Main] Failed to refresh click count:', e);
                                }
                            },
                            async loadChestStates () {
                                const chestData = await _promisifiedStorageGet('chestStates');
                                if (chestData) {
                                    try {
                                        const loadedChests = JSON.parse(chestData);
                                        this.chests = loadedChests.map((chest)=>{
                                            if (chest.refreshTimestamp > 0 && chest.claimed) {
                                                const remainingTime = Math.max(0, chest.refreshTimestamp - Date.now());
                                                if (remainingTime <= 0) {
                                                    chest.claimed = false;
                                                    chest.refreshTimestamp = 0;
                                                }
                                            }
                                            return chest;
                                        });
                                    } catch (e) {
                                        console.error("Failed to parse chest states from storage", e);
                                    }
                                }
                            },
                            async saveChestStates () {
                                await _promisifiedStorageSet('chestStates', JSON.stringify(this.chests));
                            },
                            updateTime () {
                                const now = new Date();
                                const hours = now.getHours().toString().padStart(2, '0');
                                const minutes = now.getMinutes().toString().padStart(2, '0');
                                this.time = `${hours}:${minutes}`;
                            },
                            updateChestTimers () {
                                let needsSave = false;
                                this.chests.forEach((chest, index)=>{
                                    if (chest.claimed && chest.refreshTimestamp > 0) {
                                        const remainingTime = Math.max(0, chest.refreshTimestamp - Date.now());
                                        this.chests[index].timerDisplay = this.formatTime(remainingTime / 1000);
                                        if (remainingTime <= 0) {
                                            this.chests[index].claimed = false;
                                            this.chests[index].refreshTimestamp = 0;
                                            needsSave = true;
                                        }
                                    }
                                });
                                if (needsSave) this.saveChestStates();
                            },
                            formatTime (seconds) {
                                const minutes = Math.floor(seconds / 60);
                                const remainingSeconds = Math.floor(seconds % 60);
                                return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
                            },
                            async incrementClick (e) {
                                this.clickCount++;
                                await _userService.default.updatePendingClicks(1);
                                if (this.vibrationEnabled) _system4.default.vibrate({
                                    mode: 'short'
                                });
                                this.petImage = Math.random() < 0.5 ? '/common/Ra1.png' : '/common/Ra2.png';
                                setTimeout(()=>{
                                    this.petImage = '/common/Ra0.png';
                                }, 200);
                            },
                            async claimChest (index, e) {
                                const chest = this.chests[index];
                                if (chest.claimed) return void _system3.default.showToast({
                                    message: '宝箱正在冷却中'
                                });
                                if (this.clickCount >= 1000) {
                                    this.clickCount -= 1000;
                                    await _userService.default.updatePendingClicks(-1000);
                                    const reward = Math.floor(1500 * Math.random()) + 500;
                                    this.clickCount += reward;
                                    await _userService.default.updatePendingClicks(reward);
                                    _system3.default.showToast({
                                        message: `获得 ${reward} 点击!`
                                    });
                                    this.chests[index].claimed = true;
                                    this.chests[index].refreshTimestamp = Date.now() + 1800000;
                                    await this.saveChestStates();
                                } else _system3.default.showToast({
                                    message: '点击次数不足'
                                });
                            },
                            openMore (e) {
                                _system.default.push({
                                    uri: 'more'
                                });
                            },
                            onDestroy () {
                                if (this.updateCheckInterval) {
                                    clearInterval(this.updateCheckInterval);
                                    this.updateCheckInterval = null;
                                }
                            }
                        };
                        const moduleOwn = exports.default || module.exports;
                        const accessors = [
                            'public',
                            'protected',
                            'private'
                        ];
                        if (moduleOwn.data && accessors.some(function(acc) {
                            return moduleOwn[acc];
                        })) throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
                        if (!moduleOwn.data) {
                            moduleOwn.data = {};
                            moduleOwn._descriptor = {};
                            accessors.forEach(function(acc) {
                                const accType = typeof moduleOwn[acc];
                                if ('object' === accType) {
                                    moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
                                    for(const name in moduleOwn[acc])moduleOwn._descriptor[name] = {
                                        access: acc
                                    };
                                } else if ('function' === accType) console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
                            });
                        }
                    };
                    var $app_template$ = function(vm) {
                        const _vm_ = vm || this;
                        return aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "container"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "time"
                                    ],
                                    value: function() {
                                        return _vm_.time;
                                    }
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "chest-row"
                                    ]
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "chest"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.claimChest(0, _vm_.$event, evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "chest-label"
                                            ],
                                            value: "宝箱"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            show: function() {
                                                return !_vm_.chests[0].claimed;
                                            },
                                            classList: [
                                                "chest-cost"
                                            ],
                                            value: "花费: 1000"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            show: function() {
                                                return _vm_.chests[0].claimed;
                                            },
                                            classList: [
                                                "chest-timer"
                                            ],
                                            value: function() {
                                                return _vm_.chests[0].timerDisplay;
                                            }
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "chest"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.claimChest(1, _vm_.$event, evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "chest-label"
                                            ],
                                            value: "宝箱"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            show: function() {
                                                return !_vm_.chests[1].claimed;
                                            },
                                            classList: [
                                                "chest-cost"
                                            ],
                                            value: "花费: 1000"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            show: function() {
                                                return _vm_.chests[1].claimed;
                                            },
                                            classList: [
                                                "chest-timer"
                                            ],
                                            value: function() {
                                                return _vm_.chests[1].timerDisplay;
                                            }
                                        }
                                    }, [])
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "pet-container"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.incrementClick(_vm_.$event, evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "pet-image"
                                        ],
                                        src: function() {
                                            return _vm_.petImage;
                                        }
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "pet-name"
                                        ],
                                        value: function() {
                                            return _vm_.petName;
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "bottom-bar"
                                    ]
                                }
                            }, [
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        src: "/common/more.png",
                                        classList: [
                                            "more-button"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.openMore(_vm_.$event, evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "click-counter"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "click-counter-text"
                                            ],
                                            value: function() {
                                                return _vm_.clickCount;
                                            }
                                        }
                                    }, [])
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "update-overlay"
                                    ],
                                    show: function() {
                                        return _vm_.showUpdateOverlay;
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "update-content"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "update-title"
                                            ],
                                            value: function() {
                                                return _vm_.updateInfo.title || "\u53D1\u73B0\u65B0\u7248\u672C";
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "version-text"
                                            ],
                                            value: function() {
                                                return "新版本: " + _vm_.updateInfo.version_name;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "changelog-container"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "changelog-title"
                                                ],
                                                value: "更新内容:"
                                            }
                                        }, []),
                                        aiot.__ce__("scroll", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "changelog-scroll"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "changelog-text"
                                                    ],
                                                    value: function() {
                                                        return _vm_.updateInfo.changelog;
                                                    }
                                                }
                                            }, [])
                                        ])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "button-container"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "ignore-button"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.onIgnoreUpdate(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "ignore-button-text"
                                                    ],
                                                    value: "忽略此版本"
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "check-button"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.onKnowUpdate(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "check-button-text"
                                                    ],
                                                    value: "知道了"
                                                }
                                            }, [])
                                        ])
                                    ])
                                ])
                            ])
                        ]);
                    };
                    $app_exports$['entry'] = function($app_exports$) {
                        $app_script$({}, $app_exports$, $app_require$1);
                        $app_exports$.default.template = $app_template$;
                        $app_exports$.default.style = $app_style$;
                    };
                })();
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpblxcaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvYXBpLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvdXBkYXRlLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL3VzZXJTZXJ2aWNlLmpzIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvbWFpbi9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcGktc2VydmljZS5qc1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnQHN5c3RlbS5mZXRjaCc7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xyXG5pbXBvcnQgcHJvbXB0IGZyb20gJ0BzeXN0ZW0ucHJvbXB0JztcclxuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25maWcuanMnO1xyXG5cclxuY2xhc3MgQXBpU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyDkuK3ovazmnI3liqHlmajlnLDlnYAgLSDku44gY29uZmlnLmpzIOivu+WPllxyXG4gICAgdGhpcy5iYXNlVXJsID0gQ09ORklHLlNFUlZFUi5CQVNFX1VSTDtcclxuICAgIHRoaXMuYmFzZUhlYWRlcnMgPSB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDpgJrnlKjor7fmsYLmlrnms5UgLSDpgJrov4fkuK3ovazmnI3liqHlmajovazlj5FcclxuICBhc3luYyByZXF1ZXN0KGFjdGlvbiwgZGF0YSA9IHt9KSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9L2FwaWA7XHJcbiAgICBcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIHVybCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcjogdGhpcy5iYXNlSGVhZGVycyxcclxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbidcclxuICAgIH07XHJcblxyXG4gICAgb3B0aW9ucy5kYXRhID0gSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb24sIC4uLmRhdGEgfSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZmV0Y2guZmV0Y2goe1xyXG4gICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xyXG5cclxuICAgICAgICAgIGlmIChyZXNwb25zZS5jb2RlID49IDIwMCAmJiByZXNwb25zZS5jb2RlIDwgMzAwKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2VEYXRhKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgSFRUUCBFcnJvcjogJHtyZXNwb25zZS5jb2RlfWAsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgSFRUUCAke3Jlc3BvbnNlLmNvZGV9OiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlRGF0YSl9YCkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiAoZXJyb3IsIGNvZGUpID0+IHtcclxuICAgICAgICAgIC8vIERFVEFJTEVEIExPR0dJTkcgRk9SIE5FVFdPUksgRkFJTFVSRVNcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtBcGlTZXJ2aWNlXSBSZXF1ZXN0IEZhaWxlZC4gQ29kZTogJHtjb2RlfSwgRXJyb3I6ICR7SlNPTi5zdHJpbmdpZnkoZXJyb3IpfWApO1xyXG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgUmVxdWVzdCBmYWlsZWQ6ICR7ZXJyb3IuZGF0YSB8fCAnQ29ubmVjdGlvbiBpcyBpbnZhbGlkJ31gKSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8g6I635Y+W5o6S6KGM5qacXHJcbiAgYXN5bmMgZ2V0UmFua2luZ3MobGltaXQgPSAxMCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdnZXRfcmFua2luZ3MnLCB7XHJcbiAgICAgICAgbGltaXQ6IGxpbWl0XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICByYW5raW5nczogcmVzdWx0LnJhbmtpbmdzIHx8IFtdXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaOkuihjOamnOWksei0pTonLCBlcnJvcilcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICByYW5raW5nczogW10sXHJcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5LiK5oql54K55Ye75qyh5pWwXHJcbiAgYXN5bmMgc3luY0NsaWNrcyh1c2VySWQsIGNsaWNrQ291bnQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHRoaXMucmVxdWVzdCgnc3luY19jbGlja3MnLCB7XHJcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxyXG4gICAgICAgIGNsaWNrX2NvdW50OiBjbGlja0NvdW50XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5LiK5oql54K55Ye75qyh5pWw5aSx6LSlOicsIGVycm9yKVxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOS7juacjeWKoeWZqOWQjOatpeaVsOaNrlxyXG4gIGFzeW5jIHN5bmNGcm9tU2VydmVyKHVzZXJJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdzeW5jX2Zyb21fc2VydmVyJywge1xyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZFxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5LuO5pyN5Yqh5Zmo5ZCM5q2l5pWw5o2u5oiQ5YqfOicsIHJlc3VsdC51c2VySW5mbyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdXNlckluZm86IHJlc3VsdC51c2VySW5mbyB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+WQjOatpeaVsOaNruWksei0pTonLCByZXN1bHQgPyByZXN1bHQuZXJyb3IgOiAn5pyq55+l6ZSZ6K+vJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAocmVzdWx0ID8gcmVzdWx0LmVycm9yIDogJ+acjeWKoeWZqOacqui/lOWbnuaIkOWKn+eKtuaAgScpIH07XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S7juacjeWKoeWZqOWQjOatpeaVsOaNruaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5qOA5p+l5a6g54mp5ZCN5piv5ZCm5Y+v55SoXHJcbiAgYXN5bmMgY2hlY2tQZXROYW1lQXZhaWxhYmlsaXR5KHBldE5hbWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnY2hlY2tfcGV0X25hbWUnLCB7XHJcbiAgICAgICAgcGV0X25hbWU6IHBldE5hbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIC4uLnJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5qOA5p+l5a6g54mp5ZCN5Y+v55So5oCn5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlLCBpc0F2YWlsYWJsZTogZmFsc2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOS/ruaUueWuoOeJqeWQjVxyXG4gIGFzeW5jIHNldFBldE5hbWUodXNlcklkLCBuZXdOYW1lKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ3NldF9wZXRfbmFtZScsIHtcclxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXHJcbiAgICAgICAgbmV3X25hbWU6IG5ld05hbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfkv67mlLnlrqDnianlkI3lpLHotKU6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOmihOa/gOa0u+ajgOafpVxyXG4gIGFzeW5jIGNoZWNrRGV2aWNlUmVnaXN0cmF0aW9uKGRldmljZUlkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2NoZWNrX3JlZ2lzdHJhdGlvbicsIHtcclxuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygn6aKE5r+A5rS75qOA5p+l5oiQ5YqfOicsIHJlc3VsdCk7XHJcbiAgICAgIC8vIOebtOaOpei/lOWbnuacjeWKoeWZqOeahOWOn+Wni+WTjeW6lO+8jFVJ5bGC5pyf5pyb55qE5piv5omB5bmz57uT5p6EXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfpooTmv4DmtLvmo4Dmn6Xml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xyXG4gICAgICAvLyDov5Tlm57kuIDkuKrlhbzlrrnnmoTplJnor6/lr7nosaHvvIzpgb/lhY1VSeWxguW0qea6g1xyXG4gICAgICByZXR1cm4geyBpc19yZWdpc3RlcmVkOiBmYWxzZSwgY2FuX2F1dG9fYWN0aXZhdGU6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5rOo5YaM6K6+5aSH5bm26I635Y+W55So5oi3SURcclxuICBhc3luYyByZWdpc3RlckFuZEdldFVzZXJJZChkZXZpY2VJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gUGFzcyB0aGUgc2VydmVyIHJlc3BvbnNlIGRpcmVjdGx5IHRvIHRoZSBVSSBsYXllclxyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0KCdyZWdpc3Rlcl9kZXZpY2VfYW5kX2dldF9pZCcsIHtcclxuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5rOo5YaM5oiW6I635Y+W55So5oi3SUTml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xyXG4gICAgICAvLyBSZXR1cm4gYSBjb21wYXRpYmxlIGVycm9yIG9iamVjdFxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g6I635Y+W5YWs5ZGK5YiX6KGoXHJcbiAgYXN5bmMgZ2V0QW5ub3VuY2VtZW50cyhsaW1pdCA9IDEwKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2dldF9hbm5vdW5jZW1lbnRzJywge1xyXG4gICAgICAgIGxpbWl0OiBsaW1pdFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coJ09yaWdpbmFsIGFubm91bmNlbWVudCByZXN1bHQgZnJvbSBzZXJ2ZXI6JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlc3VsdC5zdWNjZXNzIHx8IGZhbHNlLFxyXG4gICAgICAgIGFubm91bmNlbWVudHM6IHJlc3VsdC5hbm5vdW5jZW1lbnRzIHx8IFtdLFxyXG4gICAgICAgIGNvdW50OiByZXN1bHQuY291bnQgfHwgMCxcclxuICAgICAgICB0aW1lc3RhbXA6IHJlc3VsdC50aW1lc3RhbXAsXHJcbiAgICAgICAgZXJyb3I6IHJlc3VsdC5lcnJvclxyXG4gICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign6I635Y+W5YWs5ZGK5aSx6LSlOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICBhbm5vdW5jZW1lbnRzOiBbXSxcclxuICAgICAgICBjb3VudDogMFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5qOA5p+l5bqU55So5pu05pawXHJcbiAgYXN5bmMgY2hlY2tBcHBVcGRhdGUoY3VycmVudFZlcnNpb25Db2RlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIGNhbGxlZCB3aXRoIGN1cnJlbnRWZXJzaW9uQ29kZTonLCBjdXJyZW50VmVyc2lvbkNvZGUpO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2NoZWNrX3VwZGF0ZScsIHtcclxuICAgICAgICBjdXJyZW50X3ZlcnNpb25fY29kZTogY3VycmVudFZlcnNpb25Db2RlXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ1tBcGlTZXJ2aWNlXSBjaGVja0FwcFVwZGF0ZSByYXcgcmVzdWx0OicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICBjb25zb2xlLmxvZygnW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIGhhc191cGRhdGU6JywgcmVzdWx0Lmhhc191cGRhdGUpO1xyXG4gICAgICBjb25zb2xlLmxvZygnW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIHVwZGF0ZV9pbmZvOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdC51cGRhdGVfaW5mbykpO1xyXG4gICAgICBjb25zb2xlLmxvZygnW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIGlzX2ZvcmNlX3VwZGF0ZTonLCByZXN1bHQuaXNfZm9yY2VfdXBkYXRlKTtcclxuICAgICAgXHJcbiAgICAgIC8vIOehruS/nSB1cGRhdGVJbmZvIOWMheWQq+aJgOacieW/heimgeWtl+autVxyXG4gICAgICBsZXQgdXBkYXRlSW5mbyA9IG51bGw7XHJcbiAgICAgIGlmIChyZXN1bHQudXBkYXRlX2luZm8pIHtcclxuICAgICAgICB1cGRhdGVJbmZvID0ge1xyXG4gICAgICAgICAgdmVyc2lvbl9uYW1lOiByZXN1bHQudXBkYXRlX2luZm8udmVyc2lvbl9uYW1lIHx8ICcnLFxyXG4gICAgICAgICAgdmVyc2lvbl9jb2RlOiByZXN1bHQudXBkYXRlX2luZm8udmVyc2lvbl9jb2RlIHx8IDAsXHJcbiAgICAgICAgICB0aXRsZTogcmVzdWx0LnVwZGF0ZV9pbmZvLnRpdGxlIHx8ICflj5HnjrDmlrDniYjmnKwnLFxyXG4gICAgICAgICAgY2hhbmdlbG9nOiByZXN1bHQudXBkYXRlX2luZm8uY2hhbmdlbG9nIHx8ICcnLFxyXG4gICAgICAgICAgZG93bmxvYWRfdXJsOiByZXN1bHQudXBkYXRlX2luZm8uZG93bmxvYWRfdXJsIHx8ICcnLFxyXG4gICAgICAgICAgZm9yY2VfdXBkYXRlOiByZXN1bHQudXBkYXRlX2luZm8uZm9yY2VfdXBkYXRlIHx8IGZhbHNlLFxyXG4gICAgICAgICAgbWluX3JlcXVpcmVkX3ZlcnNpb246IHJlc3VsdC51cGRhdGVfaW5mby5taW5fcmVxdWlyZWRfdmVyc2lvbiB8fCAwLFxyXG4gICAgICAgICAgcmVsZWFzZV90aW1lOiByZXN1bHQudXBkYXRlX2luZm8ucmVsZWFzZV90aW1lIHx8ICcnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zb2xlLmxvZygnW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIHVwZGF0ZUluZm8gY29uc3RydWN0ZWQ6JywgSlNPTi5zdHJpbmdpZnkodXBkYXRlSW5mbykpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgdXBkYXRlX2luZm8gaXMgbnVsbCBvciB1bmRlZmluZWQnKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc3QgcmV0dXJuUmVzdWx0ID0ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlc3VsdC5zdWNjZXNzIHx8IGZhbHNlLFxyXG4gICAgICAgIGhhc1VwZGF0ZTogcmVzdWx0Lmhhc191cGRhdGUgfHwgZmFsc2UsXHJcbiAgICAgICAgdXBkYXRlSW5mbzogdXBkYXRlSW5mbyxcclxuICAgICAgICBpc0ZvcmNlVXBkYXRlOiByZXN1bHQuaXNfZm9yY2VfdXBkYXRlIHx8IGZhbHNlLFxyXG4gICAgICAgIGN1cnJlbnRWZXJzaW9uQ29kZTogcmVzdWx0LmN1cnJlbnRfdmVyc2lvbl9jb2RlIHx8IGN1cnJlbnRWZXJzaW9uQ29kZSxcclxuICAgICAgICBsYXRlc3RWZXJzaW9uQ29kZTogcmVzdWx0LmxhdGVzdF92ZXJzaW9uX2NvZGUgfHwgY3VycmVudFZlcnNpb25Db2RlLFxyXG4gICAgICAgIGVycm9yOiByZXN1bHQuZXJyb3JcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgcmV0dXJuIHJlc3VsdDonLCBKU09OLnN0cmluZ2lmeShyZXR1cm5SZXN1bHQpKTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiByZXR1cm5SZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgZXJyb3IgbWVzc2FnZTonLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgY29uc29sZS5lcnJvcignW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIGVycm9yIHN0YWNrOicsIGVycm9yLnN0YWNrKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICBoYXNVcGRhdGU6IGZhbHNlLFxyXG4gICAgICAgIGlzRm9yY2VVcGRhdGU6IGZhbHNlXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBpU2VydmljZSgpXHJcbiIsIi8vIGNvbmZpZy5qc1xyXG5leHBvcnQgY29uc3QgQ09ORklHID0ge1xyXG4gIC8vIOS4rei9rOacjeWKoeWZqOmFjee9rlxyXG4gIFNFUlZFUjoge1xyXG4gICAgQkFTRV9VUkw6ICdodHRwOi8vMTAzLjIwNS4yNTMuODc6MjIyMDcnXHJcbiAgfSxcclxuICBcclxuICAvLyDms6jmhI/vvJpVUkwg5YmN57yA5ZyoIGFwaS1zZXJ2aWNlLmpzIOS4reehrOe8lueggeS6hlxyXG4gIC8vIOi/memHjOS4jeWGjemcgOimgemFjee9rlxyXG4gIFxyXG4gIC8vIOW6lOeUqOmFjee9rlxyXG4gIEFQUDoge1xyXG4gICAgTkFNRTogJ0JhbmRQZXQnLFxyXG4gICAgVkVSU0lPTjogJzAuNC4zIEFscGhhJyxcclxuICAgIFZFUlNJT05fQ09ERTogNDMsICAvLyDnlKjkuo7niYjmnKzmr5TovoPnmoTmlbDlrZfvvIgwLjQuMyAtPiA0M++8iVxyXG4gICAgTUFYX0NMSUNLU19QRVJfQkFUQ0g6IDUwLFxyXG4gICAgU1lOQ19JTlRFUlZBTDogMzAwMDAsICAvLyAzMOenkuiHquWKqOWQjOatpeS4gOasoVxyXG4gICAgUkFOS19MSU1JVDogMTAsXHJcbiAgICBcclxuICAgIC8vIOabtOaWsOajgOafpemFjee9rlxyXG4gICAgQ0hFQ0tfVVBEQVRFX0lOVEVSVkFMOiAzNjAwMDAwLCAvLyAx5bCP5pe25qOA5p+l5LiA5qyh5pu05paw77yIMzYwMDAwMOavq+enku+8iVxyXG4gICAgQU5OT1VOQ0VNRU5UX0NBQ0hFX1RJTUU6IDMwMDAwMCwgLy8gNeWIhumSn+e8k+WtmOWFrOWRilxyXG4gIH0sXHJcbiAgXHJcbiAgLy8g5a2Y5YKo6ZSu5ZCNXHJcbiAgU1RPUkFHRV9LRVlTOiB7XHJcbiAgICBERVZJQ0VfSUQ6ICdkZXZpY2VfaWQnLFxyXG4gICAgSVNfTE9DQUxMWV9BQ1RJVkFURUQ6ICdpc19sb2NhbGx5X2FjdGl2YXRlZCcsXHJcbiAgICBVU0VSX0lORk86ICd1c2VyX2luZm8nLFxyXG4gICAgUEVORElOR19DTElDS1M6ICdwZW5kaW5nX2NsaWNrcycsXHJcbiAgICBMQVNUX1NZTkNfVElNRTogJ2xhc3Rfc3luY190aW1lJyxcclxuICAgIFRPVEFMX0NMSUNLUzogJ3RvdGFsX2NsaWNrcycsXHJcbiAgICBcclxuICAgIC8vIOabtOaWsOebuOWFs+WtmOWCqOmUrlxyXG4gICAgTEFTVF9VUERBVEVfQ0hFQ0tfVElNRTogJ2xhc3RfdXBkYXRlX2NoZWNrX3RpbWUnLFxyXG4gICAgTEFTVF9BTk5PVU5DRU1FTlRfRkVUQ0hfVElNRTogJ2xhc3RfYW5ub3VuY2VtZW50X2ZldGNoX3RpbWUnLFxyXG4gICAgQ0FDSEVEX0FOTk9VTkNFTUVOVFM6ICdjYWNoZWRfYW5ub3VuY2VtZW50cycsXHJcbiAgICBDQUNIRURfVVBEQVRFX0lORk86ICdjYWNoZWRfdXBkYXRlX2luZm8nLFxyXG4gICAgSUdOT1JFRF9WRVJTSU9OOiAnaWdub3JlZF92ZXJzaW9uX2NvZGUnLCAvLyDnlKjmiLflv73nlaXnmoTniYjmnKxcclxuICAgIEZPUkNFX1VQREFURV9SRVFVSVJFRDogJ2ZvcmNlX3VwZGF0ZV9yZXF1aXJlZCcsIC8vIOaYr+WQpumcgOimgeW8uuWItuabtOaWsFxyXG4gICAgXHJcbiAgICAvLyDnlKjmiLflgY/lpb3orr7nva5cclxuICAgIFZJQlJBVElPTl9FTkFCTEVEOiAndmlicmF0aW9uX2VuYWJsZWQnLCAvLyDngrnlh7vpnIfliqjlvIDlhbNcclxuICB9XHJcbn1cclxuIiwiLy8gc3JjL2NvbW1vbi9qcy91cGRhdGUtbWFuYWdlci5qc1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQHN5c3RlbS5zdG9yYWdlJztcbmltcG9ydCBBcGlTZXJ2aWNlIGZyb20gJy4vYXBpLXNlcnZpY2UuanMnO1xuaW1wb3J0IHByb21wdCBmcm9tICdAc3lzdGVtLnByb21wdCc7XG5pbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vY29uZmlnLmpzJztcblxuY2xhc3MgVXBkYXRlTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2hlY2tJbnRlcnZhbCA9IENPTkZJRy5BUFAuQ0hFQ0tfVVBEQVRFX0lOVEVSVkFMIHx8IDM2MDAwMDsgLy8gXG4gIH1cbiAgXG4gIC8vIOajgOafpeabtOaWsO+8iOW4pumikeeOh+mZkOWItu+8iVxuICBhc3luYyBjaGVja1VwZGF0ZShmb3JjZUNoZWNrID0gZmFsc2UpIHtcbiAgICBjb25zb2xlLmxvZygnW1VwZGF0ZU1hbmFnZXJdIGNoZWNrVXBkYXRlIGNhbGxlZCB3aXRoIGZvcmNlQ2hlY2s6JywgZm9yY2VDaGVjayk7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIC8vIDEuIOajgOafpeaYr+WQpumcgOimgei/m+ihjOabtOaWsOajgOafpVxuICAgICAgaWYgKCFmb3JjZUNoZWNrKSB7XG4gICAgICAgIGNvbnN0IHNob3VsZENoZWNrID0gYXdhaXQgdGhpcy5zaG91bGRDaGVja1VwZGF0ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZygnW1VwZGF0ZU1hbmFnZXJdIHNob3VsZENoZWNrVXBkYXRlIHJlc3VsdDonLCBzaG91bGRDaGVjayk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXNob3VsZENoZWNrKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1tVcGRhdGVNYW5hZ2VyXSBTa2lwcGluZyB1cGRhdGUgY2hlY2sgLSBub3QgdGltZSB5ZXQnKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgIHNraXBwZWQ6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiAn5pyq5Yiw5qOA5p+l5pe26Ze0J1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gMi4g6I635Y+W5b2T5YmN54mI5pys5Y+3XG4gICAgICBjb25zdCBjdXJyZW50VmVyc2lvbkNvZGUgPSBDT05GSUcuQVBQLlZFUlNJT05fQ09ERTtcbiAgICAgIGNvbnNvbGUubG9nKCdbVXBkYXRlTWFuYWdlcl0gQ3VycmVudCB2ZXJzaW9uIGNvZGU6JywgY3VycmVudFZlcnNpb25Db2RlKTtcbiAgICAgIFxuICAgICAgLy8gMy4g6LCD55SoQVBJ5qOA5p+l5pu05pawXG4gICAgICBjb25zb2xlLmxvZygnW1VwZGF0ZU1hbmFnZXJdIENhbGxpbmcgQXBpU2VydmljZS5jaGVja0FwcFVwZGF0ZS4uLicpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5jaGVja0FwcFVwZGF0ZShjdXJyZW50VmVyc2lvbkNvZGUpO1xuICAgICAgXG4gICAgICBjb25zb2xlLmxvZygnW1VwZGF0ZU1hbmFnZXJdIEFwaVNlcnZpY2UuY2hlY2tBcHBVcGRhdGUgcmVzdWx0OicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgXG4gICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tVcGRhdGVNYW5hZ2VyXSBVcGRhdGUgY2hlY2sgc3VjY2Vzc2Z1bCcpO1xuICAgICAgICBcbiAgICAgICAgLy8gNC4g6K6w5b2V5pys5qyh5qOA5p+l5pe26Ze0XG4gICAgICAgIGF3YWl0IHRoaXMucmVjb3JkVXBkYXRlQ2hlY2soKTtcbiAgICAgICAgXG4gICAgICAgIC8vIDUuIOWkhOeQhuabtOaWsOS/oeaBr1xuICAgICAgICBpZiAocmVzdWx0Lmhhc1VwZGF0ZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdbVXBkYXRlTWFuYWdlcl0gVXBkYXRlIGF2YWlsYWJsZSEnKTtcbiAgICAgICAgICBjb25zdCB1cGRhdGVJbmZvID0gcmVzdWx0LnVwZGF0ZUluZm87XG4gICAgICAgICAgY29uc29sZS5sb2coJ1tVcGRhdGVNYW5hZ2VyXSBVcGRhdGUgaW5mbzonLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVJbmZvKSk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8g5qOA5p+l55So5oi35piv5ZCm5bey57uP5b+955Wl5q2k54mI5pysXG4gICAgICAgICAgY29uc3QgaWdub3JlZCA9IGF3YWl0IHRoaXMuaXNWZXJzaW9uSWdub3JlZCh1cGRhdGVJbmZvLnZlcnNpb25fY29kZSk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1tVcGRhdGVNYW5hZ2VyXSBWZXJzaW9uIGlnbm9yZWQ6JywgaWdub3JlZCk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8g5aaC5p6c5piv5by65Yi25pu05paw77yM5peg6K665piv5ZCm5b+955Wl6YO95L+d5a2Y5pu05paw5L+h5oGvXG4gICAgICAgICAgaWYgKHJlc3VsdC5pc0ZvcmNlVXBkYXRlKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNhdmVVcGRhdGVJbmZvKHVwZGF0ZUluZm8pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tVcGRhdGVNYW5hZ2VyXSBTYXZlZCB1cGRhdGUgaW5mbyB0byBzdG9yYWdlIChmb3JjZSB1cGRhdGUpOicsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZUluZm8pKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFpZ25vcmVkKSB7XG4gICAgICAgICAgICAvLyDpnZ7lvLrliLbmm7TmlrDkuJTmnKrlv73nlaXvvIzkv53lrZjmm7TmlrDkv6Hmga9cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2F2ZVVwZGF0ZUluZm8odXBkYXRlSW5mbyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1VwZGF0ZU1hbmFnZXJdIFNhdmVkIHVwZGF0ZSBpbmZvIHRvIHN0b3JhZ2U6JywgSlNPTi5zdHJpbmdpZnkodXBkYXRlSW5mbykpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDpnZ7lvLrliLbmm7TmlrDkuJTlt7Llv73nlaXvvIzkuI3kv53lrZjmm7TmlrDkv6Hmga9cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVXBkYXRlTWFuYWdlcl0gVmVyc2lvbiBpZ25vcmVkLCBub3Qgc2F2aW5nIHVwZGF0ZSBpbmZvJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICBpZ25vcmVkOiBpZ25vcmVkXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnW1VwZGF0ZU1hbmFnZXJdIE5vIHVwZGF0ZSBhdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tVcGRhdGVNYW5hZ2VyXSBVcGRhdGUgY2hlY2sgZmFpbGVkOicsIHJlc3VsdC5lcnJvcik7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignW1VwZGF0ZU1hbmFnZXJdIGNoZWNrVXBkYXRlIGVycm9yOicsIGVycm9yKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tVcGRhdGVNYW5hZ2VyXSBjaGVja1VwZGF0ZSBlcnJvciBtZXNzYWdlOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgY29uc29sZS5lcnJvcignW1VwZGF0ZU1hbmFnZXJdIGNoZWNrVXBkYXRlIGVycm9yIHN0YWNrOicsIGVycm9yLnN0YWNrKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgaGFzVXBkYXRlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIOWIpOaWreaYr+WQpuW6lOivpeajgOafpeabtOaWsFxuICBhc3luYyBzaG91bGRDaGVja1VwZGF0ZSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3RvcmFnZS5nZXQoe1xuICAgICAgICBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuTEFTVF9VUERBVEVfQ0hFQ0tfVElNRVxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGlmICghcmVzdWx0IHx8ICFyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIOS7juacquajgOafpei/h1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zdCBsYXN0Q2hlY2tUaW1lID0gbmV3IERhdGUocmVzdWx0LnZhbHVlKS5nZXRUaW1lKCk7XG4gICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgXG4gICAgICByZXR1cm4gKG5vdyAtIGxhc3RDaGVja1RpbWUpID49IHRoaXMuY2hlY2tJbnRlcnZhbDtcbiAgICAgIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfmo4Dmn6Xmm7TmlrDml7bpl7TlpLHotKU6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIFxuICAvLyDorrDlvZXmm7TmlrDmo4Dmn6Xml7bpl7RcbiAgYXN5bmMgcmVjb3JkVXBkYXRlQ2hlY2soKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KHtcbiAgICAgICAga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLkxBU1RfVVBEQVRFX0NIRUNLX1RJTUUsXG4gICAgICAgIHZhbHVlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCforrDlvZXmm7TmlrDml7bpl7TlpLHotKU6JywgZXJyb3IpO1xuICAgIH1cbiAgfVxuICBcbiAgLy8g5L+d5a2Y5pu05paw5L+h5oGv5Yiw5pys5Zyw5a2Y5YKoXG4gIGFzeW5jIHNhdmVVcGRhdGVJbmZvKHVwZGF0ZUluZm8pIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc3RvcmFnZS5zZXQoe1xuICAgICAgICBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuQ0FDSEVEX1VQREFURV9JTkZPLFxuICAgICAgICB2YWx1ZTogSlNPTi5zdHJpbmdpZnkodXBkYXRlSW5mbylcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ1tVcGRhdGVNYW5hZ2VyXSBTYXZlZCB1cGRhdGUgaW5mbyB0byBzdG9yYWdlJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S/neWtmOabtOaWsOS/oeaBr+Wksei0pTonLCBlcnJvcik7XG4gICAgfVxuICB9XG4gIFxuICAvLyDku47mnKzlnLDlrZjlgqjojrflj5bmm7TmlrDkv6Hmga9cbiAgYXN5bmMgZ2V0U2F2ZWRVcGRhdGVJbmZvKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdG9yYWdlLmdldCh7XG4gICAgICAgIGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5DQUNIRURfVVBEQVRFX0lORk9cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC52YWx1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnW1VwZGF0ZU1hbmFnZXJdIFJldHJpZXZlZCB1cGRhdGUgaW5mbyBmcm9tIHN0b3JhZ2UnKTtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmVzdWx0LnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc29sZS5sb2coJ1tVcGRhdGVNYW5hZ2VyXSBObyB1cGRhdGUgaW5mbyBmb3VuZCBpbiBzdG9yYWdlJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign6I635Y+W5pu05paw5L+h5oGv5aSx6LSlOicsIGVycm9yKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICBcbiAgLy8g5LuO5pys5Zyw5a2Y5YKo6I635Y+W5pu05paw5L+h5oGv77yI5YW85a655ZG95ZCN77yM5Yir5ZCN77yJXG4gIGFzeW5jIGdldENhY2hlZFVwZGF0ZUluZm8oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2F2ZWRVcGRhdGVJbmZvKCk7XG4gIH1cbiAgXG4gIC8vIOW/veeVpeafkOS4queJiOacrFxuICBhc3luYyBpZ25vcmVWZXJzaW9uKHZlcnNpb25Db2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KHtcbiAgICAgICAga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLklHTk9SRURfVkVSU0lPTixcbiAgICAgICAgdmFsdWU6IHZlcnNpb25Db2RlLnRvU3RyaW5nKClcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCflv73nlaXniYjmnKzlpLHotKU6JywgZXJyb3IpO1xuICAgIH1cbiAgfVxuICBcbiAgLy8g5qOA5p+l5piv5ZCm5b+955Wl5p+Q5Liq54mI5pysXG4gIGFzeW5jIGlzVmVyc2lvbklnbm9yZWQodmVyc2lvbkNvZGUpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3RvcmFnZS5nZXQoe1xuICAgICAgICBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuSUdOT1JFRF9WRVJTSU9OXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHJlc3VsdC52YWx1ZSkgPT09IHZlcnNpb25Db2RlO1xuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+ajgOafpeW/veeVpeeJiOacrOWksei0pTonLCBlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIFxuICAvLyDmmL7npLrmm7TmlrDlr7nor53moYbvvIjnpLrkvovvvIlcbiAgYXN5bmMgc2hvd1VwZGF0ZURpYWxvZyh1cGRhdGVJbmZvLCBpc0ZvcmNlVXBkYXRlID0gZmFsc2UpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmIChpc0ZvcmNlVXBkYXRlKSB7XG4gICAgICAgIC8vIOW8uuWItuabtOaWsO+8jOebtOaOpei3s+i9rOWIsOW8uuWItuabtOaWsOmhtemdolxuICAgICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgdXJpOiAnL2ZvcmNlLXVwZGF0ZScsXG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICB1cGRhdGVJbmZvOiB1cGRhdGVJbmZvLFxuICAgICAgICAgICAgaXNGb3JjZVVwZGF0ZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJlc29sdmUoJ2ZvcmNlX3VwZGF0ZScpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIOmdnuW8uuWItuabtOaWsO+8jOi3s+i9rOWIsOaZrumAmuabtOaWsOmhtemdolxuICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICB1cmk6ICcvdXBkYXRlJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdXBkYXRlSW5mbzogdXBkYXRlSW5mbyxcbiAgICAgICAgICBpc0ZvcmNlVXBkYXRlOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJlc29sdmUoJ25vcm1hbF91cGRhdGUnKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgLy8g5paw5aKe77ya5qOA5p+l5bm25aSE55CG5by65Yi25pu05pawXG4gIGFzeW5jIGNoZWNrQW5kSGFuZGxlRm9yY2VVcGRhdGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIOW8uuWItuajgOafpe+8jOW/veeVpeaXtumXtOmZkOWItlxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jaGVja1VwZGF0ZSh0cnVlKTtcbiAgICAgIFxuICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzICYmIHJlc3VsdC5oYXNVcGRhdGUgJiYgcmVzdWx0LnVwZGF0ZUluZm8pIHtcbiAgICAgICAgLy8g44CQ5L+u5aSN44CR5qOA5p+l55So5oi35piv5ZCm5bey5b+955Wl5q2k54mI5pysXG4gICAgICAgIGNvbnN0IGlnbm9yZWQgPSBhd2FpdCB0aGlzLmlzVmVyc2lvbklnbm9yZWQocmVzdWx0LnVwZGF0ZUluZm8udmVyc2lvbl9jb2RlKTtcbiAgICAgICAgY29uc3QgaXNGb3JjZVVwZGF0ZSA9IHJlc3VsdC5pc0ZvcmNlVXBkYXRlO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1tVcGRhdGVNYW5hZ2VyXSBWZXJzaW9uIGNoZWNrIHJlc3VsdDogaWdub3JlZD0nICsgaWdub3JlZCArICcsIGlzRm9yY2VVcGRhdGU9JyArIGlzRm9yY2VVcGRhdGUpO1xuICAgICAgICBcbiAgICAgICAgLy8g5aaC5p6c54mI5pys6KKr5b+955Wl5LiU5LiN5piv5by65Yi25pu05paw77yM5YiZ5LiN6L+b6KGM5Lu75L2V5pON5L2cXG4gICAgICAgIGlmIChpZ25vcmVkICYmICFpc0ZvcmNlVXBkYXRlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1tVcGRhdGVNYW5hZ2VyXSBWZXJzaW9uIHdhcyBpZ25vcmVkIGJ5IHVzZXIsIHNraXBwaW5nJyk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhhc0ZvcmNlVXBkYXRlOiBmYWxzZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIOWmguaenOaYr+W8uuWItuabtOaWsFxuICAgICAgICBpZiAoaXNGb3JjZVVwZGF0ZSkge1xuICAgICAgICAgIC8vIOagh+iusOmcgOimgeW8uuWItuabtOaWsFxuICAgICAgICAgIGF3YWl0IHRoaXMubWFya0ZvcmNlVXBkYXRlUmVxdWlyZWQoKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyDot7PovazliLDlvLrliLbmm7TmlrDpobXpnaLvvIjnlKjmiLfml6Dms5Xov5Tlm57vvIlcbiAgICAgICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICB1cmk6ICcvZm9yY2UtdXBkYXRlJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICB1cGRhdGVJbmZvOiByZXN1bHQudXBkYXRlSW5mbyxcbiAgICAgICAgICAgICAgaXNGb3JjZVVwZGF0ZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoYXNGb3JjZVVwZGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHVwZGF0ZUluZm86IHJlc3VsdC51cGRhdGVJbmZvXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYXNGb3JjZVVwZGF0ZTogZmFsc2VcbiAgICAgIH07XG4gICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5by65Yi25pu05paw5qOA5p+l5aSx6LSlOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhhc0ZvcmNlVXBkYXRlOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2VcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIFxuICAvLyDmoIforrDpnIDopoHlvLrliLbmm7TmlrBcbiAgYXN5bmMgbWFya0ZvcmNlVXBkYXRlUmVxdWlyZWQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KHtcbiAgICAgICAga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLkZPUkNFX1VQREFURV9SRVFVSVJFRCxcbiAgICAgICAgdmFsdWU6ICd0cnVlJ1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+agh+iusOW8uuWItuabtOaWsOWksei0pTonLCBlcnJvcik7XG4gICAgfVxuICB9XG4gIFxuICAvLyDmuIXpmaTlvLrliLbmm7TmlrDmoIforrBcbiAgYXN5bmMgY2xlYXJGb3JjZVVwZGF0ZU1hcmsoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHN0b3JhZ2UuZGVsZXRlKHtcbiAgICAgICAga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLkZPUkNFX1VQREFURV9SRVFVSVJFRFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+a4hemZpOW8uuWItuabtOaWsOagh+iusOWksei0pTonLCBlcnJvcik7XG4gICAgfVxuICB9XG4gIFxuICAvLyDmo4Dmn6XmmK/lkKbpnIDopoHlvLrliLbmm7TmlrBcbiAgYXN5bmMgaXNGb3JjZVVwZGF0ZVJlcXVpcmVkKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdG9yYWdlLmdldCh7XG4gICAgICAgIGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5GT1JDRV9VUERBVEVfUkVRVUlSRURcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICByZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC52YWx1ZSA9PT0gJ3RydWUnO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfmo4Dmn6XlvLrliLbmm7TmlrDnirbmgIHlpLHotKU6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBcbiAgLy8g5riF6Zmk5pu05paw57yT5a2YXG4gIGFzeW5jIGNsZWFyVXBkYXRlQ2FjaGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHN0b3JhZ2UuZGVsZXRlKHtcbiAgICAgICAga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLkNBQ0hFRF9VUERBVEVfSU5GT1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGF3YWl0IHN0b3JhZ2UuZGVsZXRlKHtcbiAgICAgICAga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLklHTk9SRURfVkVSU0lPTlxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGF3YWl0IHN0b3JhZ2UuZGVsZXRlKHtcbiAgICAgICAga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLkZPUkNFX1VQREFURV9SRVFVSVJFRFxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKCdbVXBkYXRlTWFuYWdlcl0gQ2xlYXJlZCB1cGRhdGUgY2FjaGUnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5riF6Zmk5pu05paw57yT5a2Y5aSx6LSlOicsIGVycm9yKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVwZGF0ZU1hbmFnZXIoKTtcbiIsIi8vIHNyYy9jb21tb24vanMvdXNlclNlcnZpY2UuanNcbmltcG9ydCBkZXZpY2UgZnJvbSAnQHN5c3RlbS5kZXZpY2UnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQHN5c3RlbS5zdG9yYWdlJztcbmltcG9ydCBBcGlTZXJ2aWNlIGZyb20gJy4vYXBpLXNlcnZpY2UuanMnO1xuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25maWcuanMnO1xuXG4vKipcbiAqIEEgc2VydmljZSB0byBoYW5kbGUgc2lsZW50IHVzZXIgcmVnaXN0cmF0aW9uIGFuZCBkYXRhIHJldHJpZXZhbC5cbiAqL1xuY2xhc3MgVXNlclNlcnZpY2Uge1xuICBcbiAgLyoqXG4gICAqIFByb21pc2lmaWVkIGhlbHBlciBmb3Igc3RvcmFnZS5nZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IHRvIHJldHJpZXZlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBUaGUgdmFsdWUgZnJvbSBzdG9yYWdlLCBvciBudWxsIGlmIG5vdCBmb3VuZC5cbiAgICovXG4gIF9zdG9yYWdlR2V0KGtleSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc3RvcmFnZS5nZXQoe1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHJlc29sdmUoZGF0YSksXG4gICAgICAgIGZhaWw6ICgpID0+IHJlc29sdmUobnVsbCksXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9taXNpZmllZCBoZWxwZXIgZm9yIHN0b3JhZ2Uuc2V0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSB0byBzZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBzdG9yZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBfc3RvcmFnZVNldChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHN0b3JhZ2Uuc2V0KHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcbiAgICAgICAgZmFpbDogKGVyciwgY29kZSkgPT4gcmVqZWN0KG5ldyBFcnJvcihgU3RvcmFnZS5zZXQgZmFpbGVkIGZvciAnJHtrZXl9JzogJHtlcnJ9ICgke2NvZGV9KWApKSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgcmF3IGRldmljZSBpZGVudGlmaWVyLCB1c2luZyBhIGZhbGxiYWNrIGZvciBzaW11bGF0b3JzLlxuICAgKiBJdCBhbHNvIHNhdmVzIHRoZSByYXcgSUQgdG8gc3RvcmFnZSBmb3IgZnV0dXJlIHVzZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nfG51bGw+fSBUaGUgcmF3IGRldmljZSBJRCBvciBudWxsIG9uIGZhaWx1cmUuXG4gICAqL1xuICBfZ2V0UmF3RGV2aWNlSWQoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBkZXZpY2UuZ2V0U2VyaWFsKHtcbiAgICAgICAgc3VjY2VzczogYXN5bmMgKGRhdGEpID0+IHtcbiAgICAgICAgICBsZXQgc2VyaWFsID0gZGF0YSA/IGRhdGEuc2VyaWFsIDogbnVsbDtcbiAgICAgICAgICBpZiAoc2VyaWFsID09PSAnTkEnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJEZXZpY2Ugc2VyaWFsIGlzICdOQScsIHVzaW5nIGEgZml4ZWQgdGVzdCBzZXJpYWwuXCIpO1xuICAgICAgICAgICAgc2VyaWFsID0gJ1RFU1RWTS1TTi0wMTIzNDU2Nzg5JztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIXNlcmlhbCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdldCBhIHZhbGlkIGRldmljZSBzZXJpYWwuJyk7XG4gICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBTYXZlIHRoZSByYXcgSUQgZm9yIG90aGVyIHNlcnZpY2VzIHRoYXQgbWlnaHQgbmVlZCBpdCAoZS5nLiwgQVBJIGNhbGxzKVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fc3RvcmFnZVNldChDT05GSUcuU1RPUkFHRV9LRVlTLkRFVklDRV9JRCwgc2VyaWFsKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTYXZlZCByYXcgZGV2aWNlIElEOicsIHNlcmlhbCk7XG4gICAgICAgICAgICByZXNvbHZlKHNlcmlhbCk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNhdmUgcmF3IGRldmljZSBJRCB0byBzdG9yYWdlOicsIGUpO1xuICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IChlcnIsIGNvZGUpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBDb25uZWN0aW9uIGlzIGludmFsaWRgKTtcbiAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgdGhlIHVzZXIgaW5mb3JtYXRpb24gdG8gbG9jYWwgc3RvcmFnZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IHVzZXJJbmZvIC0gVGhlIHVzZXIgaW5mbyBvYmplY3QgcmVjZWl2ZWQgZnJvbSB0aGUgc2VydmVyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3Q+fSBUaGUgdXNlciBpbmZvIHRoYXQgd2FzIHNhdmVkLlxuICAgKi9cbiAgYXN5bmMgX3NhdmVVc2VySW5mbyh1c2VySW5mbykge1xuICAgIGlmICghdXNlckluZm8gfHwgKCF1c2VySW5mby5pZCAmJiAhdXNlckluZm8udXNlcl9udW1iZXIpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIGluZm8gaXMgaW52YWxpZCwgY2Fubm90IHNhdmUuXCIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB1c2VySW5mb1RvU2F2ZSA9IHtcbiAgICAgIGlkOiB1c2VySW5mby5pZCB8fCB1c2VySW5mby51c2VyX251bWJlcixcbiAgICAgIHVzZXJfbnVtYmVyOiB1c2VySW5mby51c2VyX251bWJlcixcbiAgICAgIHBldF9uYW1lOiB1c2VySW5mby5wZXRfbmFtZSxcbiAgICAgIHRvdGFsX2NsaWNrczogdXNlckluZm8udG90YWxfY2xpY2tzIHx8IDBcbiAgICB9O1xuXG4gICAgYXdhaXQgdGhpcy5fc3RvcmFnZVNldChDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTywgSlNPTi5zdHJpbmdpZnkodXNlckluZm9Ub1NhdmUpKTtcbiAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBzYXZlZCB1c2VyIGluZm8gdG8gc3RvcmFnZTpcIiwgdXNlckluZm9Ub1NhdmUpO1xuICAgIHJldHVybiB1c2VySW5mb1RvU2F2ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbWFpbiBwdWJsaWMgbWV0aG9kLiBJdCBlbnN1cmVzIHRoYXQgdXNlciBpbmZvcm1hdGlvbiBpcyBwcmVzZW50IGluIHN0b3JhZ2UuXG4gICAqIElmIG5vdCwgaXQgc2lsZW50bHkgZ2V0cyBhIGRldmljZSBJRCwgY2hlY2tzIHdpdGggdGhlIHNlcnZlciwgYW5kIGVpdGhlclxuICAgKiByZXRyaWV2ZXMgZXhpc3RpbmcgdXNlciBkYXRhIG9yIHJlZ2lzdGVycyBhIG5ldyB1c2VyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3R8bnVsbD59IFRoZSB1c2VyIGluZm8sIG9yIG51bGwgaWYgdGhlIHByb2Nlc3MgZmFpbHMuXG4gICAqL1xuICBhc3luYyBlbnN1cmVVc2VySXNSZWdpc3RlcmVkKGZvcmNlU3luYyA9IGZhbHNlKSB7XG4gICAgLy8gMS4gQ2hlY2sgaWYgdXNlciBpbmZvIGFscmVhZHkgZXhpc3RzIGFuZCBpcyB2YWxpZC5cbiAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBDaGVja2luZyBmb3IgZXhpc3RpbmcgdXNlciBpbmZvIGluIHN0b3JhZ2UuLi4nKTtcbiAgICBjb25zdCBleGlzdGluZ1VzZXJJbmZvSlNPTiA9IGF3YWl0IHRoaXMuX3N0b3JhZ2VHZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8pO1xuICAgIGlmIChleGlzdGluZ1VzZXJJbmZvSlNPTikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSBKU09OLnBhcnNlKGV4aXN0aW5nVXNlckluZm9KU09OKTtcbiAgICAgICAgaWYgKHVzZXJJbmZvICYmIHVzZXJJbmZvLmlkKSB7XG4gICAgICAgICAgaWYgKGZvcmNlU3luYykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gRm9yY2Ugc3luYyBlbmFibGVkLiBBdHRlbXB0aW5nIHRvIHN5bmMgbGF0ZXN0IGRhdGEgZnJvbSBzZXJ2ZXIuLi4nKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IHN5bmNSZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLnN5bmNGcm9tU2VydmVyKHVzZXJJbmZvLmlkKTtcbiAgICAgICAgICAgICAgaWYgKHN5bmNSZXN1bHQgJiYgc3luY1Jlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU3VjY2Vzc2Z1bGx5IHN5bmNlZCBmcm9tIHNlcnZlci4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fc2F2ZVVzZXJJbmZvKHN5bmNSZXN1bHQudXNlckluZm8pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignW1VzZXJTZXJ2aWNlXSBTeW5jIGZyb20gc2VydmVyIGZhaWxlZCwgd2lsbCB1c2Ugc3RhbGUgbG9jYWwgZGF0YS4gRXJyb3I6Jywgc3luY1Jlc3VsdCA/IHN5bmNSZXN1bHQuZXJyb3IgOiAnVW5rbm93biBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VySW5mbzsgLy8gUmV0dXJuIHN0YWxlIGRhdGEgaWYgc3luYyBmYWlsc1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChzeW5jRXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignW1VzZXJTZXJ2aWNlXSBBIGNyaXRpY2FsIGVycm9yIG9jY3VycmVkIGR1cmluZyBzZXJ2ZXIgc3luYzonLCBzeW5jRXJyb3IpO1xuICAgICAgICAgICAgICByZXR1cm4gdXNlckluZm87IC8vIFJldHVybiBzdGFsZSBkYXRhIG9uIGNyaXRpY2FsIHN5bmMgZmFpbHVyZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBVc2VyIGlzIGFscmVhZHkgcmVnaXN0ZXJlZC4gRm91bmQgaW5mbzonLCB1c2VySW5mbyk7XG4gICAgICAgICAgICByZXR1cm4gdXNlckluZm87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIE1hbGZvcm1lZCBKU09OLCBwcm9jZWVkIHdpdGggcmVnaXN0cmF0aW9uLlxuICAgICAgICBjb25zb2xlLndhcm4oJ1tVc2VyU2VydmljZV0gVXNlciBpbmZvIGluIHN0b3JhZ2UgaXMgbWFsZm9ybWVkLiBQcm9jZWVkaW5nIHdpdGggcmVnaXN0cmF0aW9uLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFVzZXIgbm90IGZvdW5kIGxvY2FsbHkuIFN0YXJ0aW5nIHNpbGVudCByZWdpc3RyYXRpb24gcHJvY2Vzcy4uLicpO1xuXG4gICAgLy8gMi4gR2V0IERldmljZSBJRFxuICAgIGNvbnN0IGRldmljZUlkID0gYXdhaXQgdGhpcy5fZ2V0UmF3RGV2aWNlSWQoKTtcbiAgICBpZiAoIWRldmljZUlkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbVXNlclNlcnZpY2VdIENSSVRJQ0FMOiBDYW5ub3QgcHJvY2VlZCB3aXRoIHJlZ2lzdHJhdGlvbjogZmFpbGVkIHRvIGdldCBkZXZpY2UgSUQuJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYFtVc2VyU2VydmljZV0gR290IGRldmljZSBJRDogJHtkZXZpY2VJZH1gKTtcblxuICAgIHRyeSB7XG4gICAgICAvLyAzLiBDaGVjayBpZiB0aGUgZGV2aWNlIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCBvbiB0aGUgc2VydmVyXG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBDaGVja2luZyBkZXZpY2UgcmVnaXN0cmF0aW9uIHdpdGggc2VydmVyLi4uJyk7XG4gICAgICBjb25zdCByZWdSZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLmNoZWNrRGV2aWNlUmVnaXN0cmF0aW9uKGRldmljZUlkKTtcbiAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFNlcnZlciByZWdpc3RyYXRpb24gY2hlY2sgcmVzcG9uc2U6JywgSlNPTi5zdHJpbmdpZnkocmVnUmVzdWx0KSk7XG5cblxuICAgICAgaWYgKHJlZ1Jlc3VsdCAmJiByZWdSZXN1bHQuaXNfcmVnaXN0ZXJlZCAmJiByZWdSZXN1bHQudXNlckluZm8pIHtcbiAgICAgICAgLy8gRGV2aWNlIGlzIGtub3duLCBzYXZlIHRoZSBpbmZvIGFuZCB3ZSdyZSBkb25lLlxuICAgICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBEZXZpY2UgaXMgYWxyZWFkeSByZWdpc3RlcmVkIG9uIHNlcnZlci4gUmVzdG9yaW5nIHVzZXIgaW5mby4nKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX3NhdmVVc2VySW5mbyhyZWdSZXN1bHQudXNlckluZm8pO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyA0LiBJZiBub3QgcmVnaXN0ZXJlZCwgY3JlYXRlIGEgbmV3IHVzZXIgcmVjb3JkLlxuICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gRGV2aWNlIG5vdCByZWdpc3RlcmVkLiBBdHRlbXB0aW5nIHRvIHJlZ2lzdGVyIGEgbmV3IHVzZXIuLi4nKTtcbiAgICAgIGNvbnN0IG5ld1JlZ1Jlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2UucmVnaXN0ZXJBbmRHZXRVc2VySWQoZGV2aWNlSWQpO1xuICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU2VydmVyIG5ldyB1c2VyIHJlZ2lzdHJhdGlvbiByZXNwb25zZTonLCBKU09OLnN0cmluZ2lmeShuZXdSZWdSZXN1bHQpKTtcblxuXG4gICAgICBpZiAobmV3UmVnUmVzdWx0ICYmIG5ld1JlZ1Jlc3VsdC5zdWNjZXNzICYmIG5ld1JlZ1Jlc3VsdC51c2VySW5mbykge1xuICAgICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZCBuZXcgdXNlci4nKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX3NhdmVVc2VySW5mbyhuZXdSZWdSZXN1bHQudXNlckluZm8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW1VzZXJTZXJ2aWNlXSBDUklUSUNBTDogRmFpbGVkIHRvIHJlZ2lzdGVyIG5ldyB1c2VyLicsIG5ld1JlZ1Jlc3VsdCA/IG5ld1JlZ1Jlc3VsdC5tZXNzYWdlIDogJ05vIHJlc3VsdCBmcm9tIHNlcnZlcicpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbVXNlclNlcnZpY2VdIENSSVRJQ0FMOiBBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgdGhlIHNpbGVudCByZWdpc3RyYXRpb24gQVBJIGNhbGxzOicsIGUpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIG51bWJlciBvZiBwZW5kaW5nIGNsaWNrcyBieSBhIGdpdmVuIGFtb3VudC5cbiAgICogVGhpcyBpcyB0aGUgY2VudHJhbGl6ZWQgbWV0aG9kIGZvciBhbGwgY2xpY2sgbW9kaWZpY2F0aW9ucy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGFtb3VudCAtIFRoZSBudW1iZXIgdG8gYWRkIHRvIHBlbmRpbmcgY2xpY2tzLiBDYW4gYmUgbmVnYXRpdmUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcnxudWxsPn0gVGhlIG5ldyBudW1iZXIgb2YgcGVuZGluZyBjbGlja3MsIG9yIG51bGwgb24gZmFpbHVyZS5cbiAgICovXG4gIGFzeW5jIHVwZGF0ZVBlbmRpbmdDbGlja3MoYW1vdW50KSB7XG4gICAgaWYgKHR5cGVvZiBhbW91bnQgIT09ICdudW1iZXInIHx8IGlzTmFOKGFtb3VudCkpIHtcbiAgICAgIGNvbnNvbGUud2FybignW1VzZXJTZXJ2aWNlXSB1cGRhdGVQZW5kaW5nQ2xpY2tzIHJlY2VpdmVkIGFuIGludmFsaWQgYW1vdW50OicsIGFtb3VudCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcGVuZGluZ0NsaWNrc0RhdGEgPSBhd2FpdCB0aGlzLl9zdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuUEVORElOR19DTElDS1MpO1xuICAgICAgbGV0IGN1cnJlbnRDbGlja3MgPSBwYXJzZUludChwZW5kaW5nQ2xpY2tzRGF0YSkgfHwgMDtcbiAgICAgIFxuICAgICAgY29uc3QgbmV3Q2xpY2tzID0gY3VycmVudENsaWNrcyArIGFtb3VudDtcbiAgICAgIFxuICAgICAgYXdhaXQgdGhpcy5fc3RvcmFnZVNldChDT05GSUcuU1RPUkFHRV9LRVlTLlBFTkRJTkdfQ0xJQ0tTLCBuZXdDbGlja3MudG9TdHJpbmcoKSk7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKGBbVXNlclNlcnZpY2VdIFBlbmRpbmcgY2xpY2tzIHVwZGF0ZWQgYnkgJHthbW91bnR9LiBOZXcgdmFsdWU6ICR7bmV3Q2xpY2tzfWApO1xuICAgICAgcmV0dXJuIG5ld0NsaWNrcztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbVXNlclNlcnZpY2VdIEZhaWxlZCB0byB1cGRhdGUgcGVuZGluZyBjbGlja3MgaW4gc3RvcmFnZTonLCBlKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyBwZW5kaW5nIGNsaWNrcyBmcm9tIHN0b3JhZ2UgYW5kIHN5bmNzIHRoZW0gd2l0aCB0aGUgc2VydmVyLlxuICAgKiBUaGlzIGlzIGEgc2VsZi1jb250YWluZWQsIGZpcmUtYW5kLWZvcmdldCBtZXRob2QuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBUcnVlIG9uIHN1Y2Nlc3MsIGZhbHNlIG9uIGZhaWx1cmUgb3IgaWYgbm8gc3luYyB3YXMgbmVlZGVkLlxuICAgKi9cbiAgYXN5bmMgdHJpZ2dlckNsaWNrU3luYygpIHtcbiAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBUcmlnZ2VyaW5nIGNsaWNrIHN5bmMuLi4nKTtcbiAgICBcbiAgICAvLyAxLiBHZXQgdXNlciBpbmZvXG4gICAgY29uc3QgdXNlckluZm9KU09OID0gYXdhaXQgdGhpcy5fc3RvcmFnZUdldChDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTyk7XG4gICAgaWYgKCF1c2VySW5mb0pTT04pIHtcbiAgICAgIGNvbnNvbGUud2FybignW1VzZXJTZXJ2aWNlXSBTeW5jIGFib3J0ZWQ6IFVzZXIgaW5mbyBub3QgZm91bmQgaW4gc3RvcmFnZS4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgbGV0IHVzZXJJbmZvO1xuICAgIHRyeSB7XG4gICAgICB1c2VySW5mbyA9IEpTT04ucGFyc2UodXNlckluZm9KU09OKTtcbiAgICAgIGlmICghdXNlckluZm8gfHwgIXVzZXJJbmZvLmlkKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW1VzZXJTZXJ2aWNlXSBTeW5jIGFib3J0ZWQ6IFVzZXIgSUQgaXMgaW52YWxpZC4nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgY29uc29sZS53YXJuKCdbVXNlclNlcnZpY2VdIFN5bmMgYWJvcnRlZDogQ291bGQgbm90IHBhcnNlIHVzZXIgaW5mby4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAyLiBHZXQgcGVuZGluZyBjbGlja3NcbiAgICBjb25zdCBwZW5kaW5nQ2xpY2tzRGF0YSA9IGF3YWl0IHRoaXMuX3N0b3JhZ2VHZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5QRU5ESU5HX0NMSUNLUyk7XG4gICAgY29uc3QgY2xpY2tzVG9TeW5jID0gcGFyc2VJbnQocGVuZGluZ0NsaWNrc0RhdGEpO1xuXG4gICAgaWYgKGlzTmFOKGNsaWNrc1RvU3luYykpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIE5vIHBlbmRpbmcgY2xpY2tzIHRvIHN5bmMgKHZhbHVlIGlzIE5hTikuJyk7XG4gICAgICByZXR1cm4gdHJ1ZTsgLy8gTm90aGluZyB0byBkbywgc28gaXQncyBhIFwic3VjY2Vzc1wiXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYFtVc2VyU2VydmljZV0gRm91bmQgJHtjbGlja3NUb1N5bmN9IHBlbmRpbmcgY2xpY2tzIGZvciB1c2VyICR7dXNlckluZm8uaWR9LiBTeW5jaW5nLi4uYCk7XG5cbiAgICAvLyAzLiBDYWxsIEFQSVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2Uuc3luY0NsaWNrcyh1c2VySW5mby5pZCwgY2xpY2tzVG9TeW5jKTtcblxuICAgIC8vIDQuIFVwZGF0ZSBzdG9yYWdlIG9uIHN1Y2Nlc3NcbiAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFN5bmMgc3VjY2Vzc2Z1bC4nKTtcbiAgICAgIFxuICAgICAgLy8g44CQ5L+u5aSN44CR5ZCM5q2l5oiQ5Yqf5ZCO77yM5YWI5oqK5b6F5LiK5Lyg5pWw6YeP5Yqg5Yiw5pys5Zyw5oC754K55Ye75pWw77yM5YaN5riF56m65b6F5LiK5LygXG4gICAgICBjb25zdCBjdXJyZW50VG90YWxDbGlja3MgPSBwYXJzZUludChhd2FpdCB0aGlzLl9zdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuVE9UQUxfQ0xJQ0tTKSkgfHwgMDtcbiAgICAgIGNvbnN0IHVwZGF0ZWRUb3RhbENsaWNrcyA9IGN1cnJlbnRUb3RhbENsaWNrcyArIGNsaWNrc1RvU3luYztcbiAgICAgIGF3YWl0IHRoaXMuX3N0b3JhZ2VTZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5UT1RBTF9DTElDS1MsIHVwZGF0ZWRUb3RhbENsaWNrcy50b1N0cmluZygpKTtcbiAgICAgIGNvbnNvbGUubG9nKGBbVXNlclNlcnZpY2VdIEFkZGVkIHBlbmRpbmcgY2xpY2tzIHRvIHRvdGFsOiAke2N1cnJlbnRUb3RhbENsaWNrc30gKyAke2NsaWNrc1RvU3luY30gPSAke3VwZGF0ZWRUb3RhbENsaWNrc31gKTtcbiAgICAgIFxuICAgICAgLy8g5riF56m65b6F5LiK5Lyg5pWw6YePXG4gICAgICBhd2FpdCB0aGlzLl9zdG9yYWdlU2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuUEVORElOR19DTElDS1MsICcwJyk7XG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBSZXNldHRpbmcgcGVuZGluZyBjbGlja3MgdG8gMCcpO1xuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignW1VzZXJTZXJ2aWNlXSBTeW5jIGZhaWxlZDonLCByZXN1bHQuZXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIHRoZSBsYXRlc3QgdXNlciBkYXRhIGZyb20gdGhlIHNlcnZlciBhbmQgb3ZlcndyaXRlcyBsb2NhbCBzdG9yYWdlLlxuICAgKiBUaGlzIG1ldGhvZCBydW5zIHRoZSBmdWxsIHJlZ2lzdHJhdGlvbi9sb2dpbiBmbG93IHRvIGVuc3VyZSBkYXRhIGlzIGNvbnNpc3RlbnQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmd9Pn1cbiAgICovXG4gIGFzeW5jIGZvcmNlU3luY0Zyb21TZXJ2ZXIoKSB7XG4gICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU3RhcnRpbmcgZm9yY2Ugc3luYyBmcm9tIHNlcnZlci4uLicpO1xuICAgIFxuICAgIHRyeSB7XG4gICAgICAvLyAxLiBGb3JjZSBhIHN5bmMgb2YgYW55IHBlbmRpbmcgY2xpY2tzIEZJUlNULlxuICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU3RlcCAxOiBTeW5jaW5nIGxvY2FsIHBlbmRpbmcgY2xpY2tzIGJlZm9yZSBmZXRjaGluZyBzZXJ2ZXIgZGF0YS4nKTtcbiAgICAgIGNvbnN0IGNsaWNrU3luY1N1Y2Nlc3MgPSBhd2FpdCB0aGlzLnRyaWdnZXJDbGlja1N5bmMoKTtcblxuICAgICAgaWYgKCFjbGlja1N5bmNTdWNjZXNzKSB7XG4gICAgICAgIC8vIElmIHRoZSBjbGljayBzeW5jIGZhaWxzLCB3ZSBzaG91bGQgbm90IHByb2NlZWQsIGFzIHdlIG1pZ2h0IG92ZXJ3cml0ZSB0aGUgbG9jYWwgc3RhdGVcbiAgICAgICAgLy8gd2l0aCBzdGFsZSBzZXJ2ZXIgZGF0YSwgY2F1c2luZyB0aGUgdXNlciB0byBsb3NlIHRoZWlyIHBlbmRpbmcgY2xpY2tzLlxuICAgICAgICBjb25zdCBlcnJvck1zZyA9ICfml6Dms5XlkIzmraXmnKzlnLDngrnlh7vmlbDmja7vvIzlt7Llj5bmtojku47mnI3liqHlmajmm7TmlrDvvIzku6XpmLLmlbDmja7kuKLlpLHjgIInO1xuICAgICAgICBjb25zb2xlLmVycm9yKGBbVXNlclNlcnZpY2VdICR7ZXJyb3JNc2d9YCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvck1zZyB9O1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU3RlcCAxOiBMb2NhbCBwZW5kaW5nIGNsaWNrcyBzeW5jZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXG5cbiAgICAgIC8vIDIuIE5vdywgcnVuIHRoZSBmdWxsIGdldC9yZWdpc3RlciB1c2VyIGZsb3cgdG8gZ2V0IHRoZSBsYXRlc3Qgc3RhdGUgZnJvbSB0aGUgc2VydmVyLlxuICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU3RlcCAyOiBGZXRjaGluZyBsYXRlc3QgdXNlciBkYXRhIGZyb20gc2VydmVyLicpO1xuICAgICAgY29uc3QgdXNlckluZm8gPSBhd2FpdCB0aGlzLmVuc3VyZVVzZXJJc1JlZ2lzdGVyZWQodHJ1ZSk7XG5cbiAgICAgIGlmICh1c2VySW5mbyAmJiB1c2VySW5mby5pZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdGVwIDI6IFN1Y2Nlc3NmdWxseSBmZXRjaGVkIGFuZCB1cGRhdGVkIHVzZXIgaW5mby4gVXNlckluZm86JywgdXNlckluZm8pO1xuICAgICAgICBcbiAgICAgICAgLy8g44CQ5L+u5aSN44CR5ZCM5q2l5oiQ5Yqf5ZCO77yM5bCG5pyN5Yqh5Zmo55qEIHRvdGFsX2NsaWNrcyDopobnm5bliLDmnKzlnLBcbiAgICAgICAgaWYgKHVzZXJJbmZvLnRvdGFsX2NsaWNrcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fc3RvcmFnZVNldChDT05GSUcuU1RPUkFHRV9LRVlTLlRPVEFMX0NMSUNLUywgdXNlckluZm8udG90YWxfY2xpY2tzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBbVXNlclNlcnZpY2VdIFVwZGF0ZWQgbG9jYWwgdG90YWxfY2xpY2tzIHRvIHNlcnZlciB2YWx1ZTogJHt1c2VySW5mby50b3RhbF9jbGlja3N9YCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIEZvcmNlIHN5bmMgY29tcGxldGUuIExvY2FsIHN0b3JhZ2UgaXMgbm93IHVwLXRvLWRhdGUuJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICflkIzmraXmiJDlip/vvIEnIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlcnJvck1zZyA9ICfml6Dms5Xku47mnI3liqHlmajojrflj5bmnIDmlrDnlKjmiLfmlbDmja7jgIInO1xuICAgICAgICBjb25zb2xlLmVycm9yKGBbVXNlclNlcnZpY2VdICR7ZXJyb3JNc2d9YCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvck1zZyB9O1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tVc2VyU2VydmljZV0gQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHRoZSBmb3JjZSBzeW5jIHByb2Nlc3M6JywgZSk7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ+WQjOatpeWksei0pe+8jOWPkeeUn+acquefpemUmeivrycgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJTZXJ2aWNlKCk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS42LjhcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNi44XCI7IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDx0ZXh0IGNsYXNzPVwidGltZVwiPnt7IHRpbWUgfX08L3RleHQ+XHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3M9XCJjaGVzdC1yb3dcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNoZXN0XCIgb25jbGljaz1cImNsYWltQ2hlc3QoMCwgJGV2ZW50KVwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiY2hlc3QtbGFiZWxcIj7lrp3nrrE8L3RleHQ+XHJcbiAgICAgICAgPHRleHQgc2hvdz1cInt7IWNoZXN0c1swXS5jbGFpbWVkfX1cIiBjbGFzcz1cImNoZXN0LWNvc3RcIj7oirHotLk6IDEwMDA8L3RleHQ+XHJcbiAgICAgICAgPHRleHQgc2hvdz1cInt7Y2hlc3RzWzBdLmNsYWltZWR9fVwiIGNsYXNzPVwiY2hlc3QtdGltZXJcIj57eyBjaGVzdHNbMF0udGltZXJEaXNwbGF5IH19PC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNoZXN0XCIgb25jbGljaz1cImNsYWltQ2hlc3QoMSwgJGV2ZW50KVwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiY2hlc3QtbGFiZWxcIj7lrp3nrrE8L3RleHQ+XHJcbiAgICAgICAgPHRleHQgc2hvdz1cInt7IWNoZXN0c1sxXS5jbGFpbWVkfX1cIiBjbGFzcz1cImNoZXN0LWNvc3RcIj7oirHotLk6IDEwMDA8L3RleHQ+XHJcbiAgICAgICAgPHRleHQgc2hvdz1cInt7Y2hlc3RzWzFdLmNsYWltZWR9fVwiIGNsYXNzPVwiY2hlc3QtdGltZXJcIj57eyBjaGVzdHNbMV0udGltZXJEaXNwbGF5IH19PC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwZXQtY29udGFpbmVyXCIgb25jbGljaz1cImluY3JlbWVudENsaWNrKCRldmVudClcIj5cclxuICAgICAgPGltYWdlIGNsYXNzPVwicGV0LWltYWdlXCIgc3JjPVwie3sgcGV0SW1hZ2UgfX1cIj48L2ltYWdlPlxyXG4gICAgICA8dGV4dCBjbGFzcz1cInBldC1uYW1lXCI+e3sgcGV0TmFtZSB9fTwvdGV4dD5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYm90dG9tLWJhclwiPlxyXG4gICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uL21vcmUucG5nXCIgY2xhc3M9XCJtb3JlLWJ1dHRvblwiIG9uY2xpY2s9XCJvcGVuTW9yZSgkZXZlbnQpXCI+PC9pbWFnZT5cclxuICAgICAgPGRpdiBjbGFzcz1cImNsaWNrLWNvdW50ZXJcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImNsaWNrLWNvdW50ZXItdGV4dFwiPnt7IGNsaWNrQ291bnQgfX08L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDwhLS0g5pmu6YCa5pu05paw5o+Q6YaS5by556qXIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInVwZGF0ZS1vdmVybGF5XCIgc2hvdz1cInt7c2hvd1VwZGF0ZU92ZXJsYXl9fVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidXBkYXRlLWNvbnRlbnRcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInVwZGF0ZS10aXRsZVwiPnt7dXBkYXRlSW5mby50aXRsZSB8fCAn5Y+R546w5paw54mI5pysJ319PC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwidmVyc2lvbi10ZXh0XCI+5paw54mI5pysOiB7e3VwZGF0ZUluZm8udmVyc2lvbl9uYW1lfX08L3RleHQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNoYW5nZWxvZy1jb250YWluZXJcIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2hhbmdlbG9nLXRpdGxlXCI+5pu05paw5YaF5a65OjwvdGV4dD5cclxuICAgICAgICAgIDxzY3JvbGwgY2xhc3M9XCJjaGFuZ2Vsb2ctc2Nyb2xsXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2hhbmdlbG9nLXRleHRcIj57e3VwZGF0ZUluZm8uY2hhbmdlbG9nfX08L3RleHQ+XHJcbiAgICAgICAgICA8L3Njcm9sbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlnbm9yZS1idXR0b25cIiBvbmNsaWNrPVwib25JZ25vcmVVcGRhdGVcIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJpZ25vcmUtYnV0dG9uLXRleHRcIj7lv73nlaXmraTniYjmnKw8L3RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVjay1idXR0b25cIiBvbmNsaWNrPVwib25Lbm93VXBkYXRlXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2hlY2stYnV0dG9uLXRleHRcIj7nn6XpgZPkuoY8L3RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAwOyAvKiBSZWR1Y2VkIHBhZGRpbmcgKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIERpc2FibGUgc2Nyb2xsaW5nICovXHJcbiAgfVxyXG4gIC50aW1lIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAyNHB4OyAvKiBSZXN0b3JlZCBmb250IHNpemUgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuY2hlc3Qtcm93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgfVxyXG4gIC5jaGVzdCB7XHJcbiAgICB3aWR0aDogMTAwcHg7IC8qIFJlZHVjZWQgc2l6ZSAqL1xyXG4gICAgaGVpZ2h0OiAxMDBweDsgLyogUmVkdWNlZCBzaXplICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFBNTIwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAuNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICB9XHJcbiAgLmNoZXN0LWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDsgLyogU2xpZ2h0bHkgc21hbGxlciB0byBmaXQgKi9cclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAuY2hlc3QtY29zdCB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLmNoZXN0LXRpbWVyIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICAucGV0LWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDsgLyogQWRqdXN0IG1hcmdpbiAqL1xyXG4gIH1cclxuICAucGV0LWltYWdlIHtcclxuICAgIHdpZHRoOiAyMDBweDsgLyogU2xpZ2h0bHkgc21hbGxlciB0byBjb21wZW5zYXRlIHNwYWNlICovXHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICB9XHJcbiAgLnBldC1uYW1lIHtcclxuICAgIGNvbG9yOiAjODg4ODg4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgLmJvdHRvbS1iYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5tb3JlLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNTZweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICB9XHJcbiAgLmNsaWNrLWNvdW50ZXIge1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5jbGljay1jb3VudGVyLXRleHQge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgfVxyXG4gIC51cGRhdGUtb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICB9XHJcbiAgXHJcbiAgLnVwZGF0ZS1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnVwZGF0ZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLnZlcnNpb24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI0FBQUFBQTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGFuZ2Vsb2ctY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGFuZ2Vsb2ctdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGFuZ2Vsb2ctc2Nyb2xsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMjVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGFuZ2Vsb2ctdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI0RERERERDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuaWdub3JlLWJ1dHRvbiB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTU1NTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pZ25vcmUtYnV0dG9uLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLmNoZWNrLWJ1dHRvbiB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNoZWNrLWJ1dHRvbi10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcclxuICBpbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xyXG4gIGltcG9ydCBwcm9tcHQgZnJvbSAnQHN5c3RlbS5wcm9tcHQnO1xyXG4gIGltcG9ydCB2aWJyYXRvciBmcm9tICdAc3lzdGVtLnZpYnJhdG9yJztcclxuICBpbXBvcnQgVXNlclNlcnZpY2UgZnJvbSAnLi4vY29tbW9uL2pzL3VzZXJTZXJ2aWNlLmpzJztcclxuICBpbXBvcnQgVXBkYXRlTWFuYWdlciBmcm9tICcuLi9jb21tb24vanMvdXBkYXRlLW1hbmFnZXIuanMnO1xyXG4gIGltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4uL2NvbW1vbi9qcy9jb25maWcuanMnO1xyXG5cclxuICBjb25zdCBfcHJvbWlzaWZpZWRTdG9yYWdlR2V0ID0gKGtleSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIHN0b3JhZ2UuZ2V0KHsga2V5LCBzdWNjZXNzOiAoZGF0YSkgPT4gcmVzb2x2ZShkYXRhKSwgZmFpbDogKCkgPT4gcmVzb2x2ZShudWxsKSB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgX3Byb21pc2lmaWVkU3RvcmFnZVNldCA9IChrZXksIHZhbHVlKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBzdG9yYWdlLnNldCh7IGtleSwgdmFsdWUsIHN1Y2Nlc3M6IHJlc29sdmUsIGZhaWw6IChlcnIsIGNvZGUpID0+IHJlamVjdChuZXcgRXJyb3IoYFN0b3JhZ2Uuc2V0IGZhaWxlZCBmb3Iga2V5ICcke2tleX0nIHdpdGggY29kZSAke2NvZGV9OiAke2Vycn1gKSkgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGltZTogJzAwOjAwJyxcclxuICAgICAgcGV0TmFtZTogJ+acquWRveWQjScsXHJcbiAgICAgIGNsaWNrQ291bnQ6IDAsXHJcbiAgICAgIHBldEltYWdlOiAnL2NvbW1vbi9SYTAucG5nJyxcclxuICAgICAgdmlicmF0aW9uRW5hYmxlZDogdHJ1ZSxcclxuICAgICAgdXBkYXRlQ2hlY2tJbnRlcnZhbDogbnVsbCxcclxuICAgICAgY2hlc3RzOiBbXHJcbiAgICAgICAgeyBjbGFpbWVkOiBmYWxzZSwgcmVmcmVzaFRpbWVzdGFtcDogMCwgdGltZXJEaXNwbGF5OiAn6Iqx6LS5OiAxMDAwJyB9LFxyXG4gICAgICAgIHsgY2xhaW1lZDogZmFsc2UsIHJlZnJlc2hUaW1lc3RhbXA6IDAsIHRpbWVyRGlzcGxheTogJ+iKsei0uTogMTAwMCcgfVxyXG4gICAgICBdLFxyXG4gICAgICBzaG93VXBkYXRlT3ZlcmxheTogZmFsc2UsXHJcbiAgICAgIHVwZGF0ZUluZm86IHt9LFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkluaXQoKSB7XHJcbiAgICAgIHRoaXMubG9hZEluaXRpYWxTdGF0ZSgpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcclxuICAgICAgXHJcbiAgICAgIC8vIOeCueWHu+WQjOatpeWumuaXtuWZqO+8iDMw56eS77yJLSDmlLnkuLrku47kupHnq6/lkIzmraXoh7PmnKzlnLDnmoTpgLvovpFcclxuICAgICAgc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYXV0b1N5bmNGcm9tQ2xvdWQoKTtcclxuICAgICAgfSwgQ09ORklHLkFQUC5TWU5DX0lOVEVSVkFMKTtcclxuICAgICAgXHJcbiAgICAgIC8vIOaXtumXtOabtOaWsOWumuaXtuWZqFxyXG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVRpbWUsIDEwMDAwKTtcclxuICAgICAgXHJcbiAgICAgIC8vIOWuneeuseWGt+WNtOWumuaXtuWZqFxyXG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZUNoZXN0VGltZXJzLmJpbmQodGhpcyksIDEwMDApO1xyXG4gICAgICBcclxuICAgICAgLy8g5pu05paw5qOA5p+l5a6a5pe25Zmo77yIMeWwj+aXtu+8iVxyXG4gICAgICB0aGlzLnVwZGF0ZUNoZWNrSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jaGVja0ZvclVwZGF0ZXMoKTtcclxuICAgICAgfSwgQ09ORklHLkFQUC5DSEVDS19VUERBVEVfSU5URVJWQUwpO1xyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ1tNYWluXSBVcGRhdGUgY2hlY2sgaW50ZXJ2YWwgc2V0IHRvOicsIENPTkZJRy5BUFAuQ0hFQ0tfVVBEQVRFX0lOVEVSVkFMLCAnbXMnKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGFzeW5jIG9uU2hvdygpIHtcclxuICAgICAgLy8g5q+P5qyh5pi+56S66aG16Z2i5pe26YeN5paw5Yqg6L296ZyH5Yqo6K6+572u77yI55So5oi35Y+v6IO95Zyo6K6+572u5Lit5pu05pS55LqG77yJXHJcbiAgICAgIGF3YWl0IHRoaXMubG9hZFZpYnJhdGlvblNldHRpbmcoKTtcclxuICAgICAgXHJcbiAgICAgIC8vIOeri+WNs+ajgOafpeabtOaWsO+8iOS7juW8uuWItuabtOaWsOmhtemdoui/lOWbnuaXtu+8iVxyXG4gICAgICBjb25zb2xlLmxvZygnW01haW5dIG9uU2hvdyAtIEltbWVkaWF0ZSB1cGRhdGUgY2hlY2sgdHJpZ2dlcmVkJyk7XHJcbiAgICAgIGF3YWl0IHRoaXMuY2hlY2tGb3JVcGRhdGVzKCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvLyDmo4Dmn6Xmm7TmlrDvvIjlrprml7bosIPnlKjvvIlcclxuICAgIGFzeW5jIGNoZWNrRm9yVXBkYXRlcygpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1tNYWluXSBjaGVja0ZvclVwZGF0ZXMgY2FsbGVkJyk7XHJcbiAgICAgIFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbTWFpbl0gUGVyaW9kaWMgdXBkYXRlIGNoZWNrIHRyaWdnZXJlZC4uLicpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFVwZGF0ZU1hbmFnZXIuY2hlY2tVcGRhdGUoZmFsc2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbTWFpbl0gVXBkYXRlIGNoZWNrIHJlc3VsdDonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MgJiYgcmVzdWx0Lmhhc1VwZGF0ZSAmJiAhcmVzdWx0LnNraXBwZWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbTWFpbl0gVXBkYXRlIGF2YWlsYWJsZTonLCByZXN1bHQudXBkYXRlSW5mbyk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIOS/neWtmOabtOaWsOS/oeaBr+WIsOacrOWcsOWtmOWCqO+8jOS+m+W8uuWItuabtOaWsOmhtemdouS9v+eUqFxyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgVXBkYXRlTWFuYWdlci5zYXZlVXBkYXRlSW5mbyhyZXN1bHQudXBkYXRlSW5mbyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTWFpbl0gU2F2ZWQgdXBkYXRlIGluZm8gdG8gc3RvcmFnZTonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQudXBkYXRlSW5mbykpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbTWFpbl0gRmFpbGVkIHRvIHNhdmUgdXBkYXRlIGluZm86JywgZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIOWmguaenOaYr+W8uuWItuabtOaWsO+8jOi3s+i9rOWIsOW8uuWItuabtOaWsOmhtemdolxyXG4gICAgICAgICAgaWYgKHJlc3VsdC5pc0ZvcmNlVXBkYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTWFpbl0gRm9yY2UgdXBkYXRlIGRldGVjdGVkLCByZWRpcmVjdGluZy4uLicpO1xyXG4gICAgICAgICAgICByb3V0ZXIucmVwbGFjZSh7XHJcbiAgICAgICAgICAgICAgdXJpOiAnL2ZvcmNlLXVwZGF0ZScsXHJcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVJbmZvOiByZXN1bHQudXBkYXRlSW5mbyxcclxuICAgICAgICAgICAgICAgIGlzRm9yY2VVcGRhdGU6IHRydWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICghcmVzdWx0Lmlnbm9yZWQpIHtcclxuICAgICAgICAgICAgLy8g6Z2e5by65Yi25pu05paw77yM6Lez6L2s5Yiw5pmu6YCa5pu05paw6aG16Z2iXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTWFpbl0gTm9ybWFsIHVwZGF0ZSBkZXRlY3RlZCwgcmVkaXJlY3RpbmcgdG8gdXBkYXRlIHBhZ2UuLi4nKTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgIHVyaTogJy91cGRhdGUnLFxyXG4gICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlSW5mbzogcmVzdWx0LnVwZGF0ZUluZm8sXHJcbiAgICAgICAgICAgICAgICBpc0ZvcmNlVXBkYXRlOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuc2tpcHBlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1tNYWluXSBVcGRhdGUgY2hlY2sgc2tpcHBlZCAobm90IHRpbWUgeWV0KScpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW01haW5dIFVwZGF0ZSBjaGVjayBmYWlsZWQ6JywgcmVzdWx0LmVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1tNYWluXSBObyB1cGRhdGUgYXZhaWxhYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tNYWluXSBQZXJpb2RpYyB1cGRhdGUgY2hlY2sgZmFpbGVkOicsIGVycm9yKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdbTWFpbl0gVXBkYXRlIGNoZWNrIGVycm9yIG1lc3NhZ2U6JywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignW01haW5dIFVwZGF0ZSBjaGVjayBlcnJvciBzdGFjazonLCBlcnJvci5zdGFjayk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8vIOeUqOaIt+eCueWHu1wi5b+955Wl5q2k54mI5pysXCJcclxuICAgIGFzeW5jIG9uSWdub3JlVXBkYXRlKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnW01haW5dIFVzZXIgY2xpY2tlZCBpZ25vcmUgdXBkYXRlJyk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAodGhpcy51cGRhdGVJbmZvICYmIHRoaXMudXBkYXRlSW5mby52ZXJzaW9uX2NvZGUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgYXdhaXQgVXBkYXRlTWFuYWdlci5pZ25vcmVWZXJzaW9uKHRoaXMudXBkYXRlSW5mby52ZXJzaW9uX2NvZGUpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1tNYWluXSBWZXJzaW9uIGlnbm9yZWQ6JywgdGhpcy51cGRhdGVJbmZvLnZlcnNpb25fY29kZSk7XHJcbiAgICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgbWVzc2FnZTogJ+W3suW/veeVpeatpOeJiOacrCcsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdbTWFpbl0gRmFpbGVkIHRvIGlnbm9yZSB2ZXJzaW9uOicsIGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8g6ZqQ6JeP5pu05paw5by556qXXHJcbiAgICAgIHRoaXMuc2hvd1VwZGF0ZU92ZXJsYXkgPSBmYWxzZTtcclxuICAgICAgdGhpcy51cGRhdGVJbmZvID0ge307XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvLyDnlKjmiLfngrnlh7tcIuefpemBk+S6hlwiXHJcbiAgICBhc3luYyBvbktub3dVcGRhdGUoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbTWFpbl0gVXNlciBjbGlja2VkIGtub3cgdXBkYXRlJyk7XHJcbiAgICAgIFxyXG4gICAgICAvLyDpmpDol4/mm7TmlrDlvLnnqpdcclxuICAgICAgdGhpcy5zaG93VXBkYXRlT3ZlcmxheSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnVwZGF0ZUluZm8gPSB7fTtcclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgbG9hZEluaXRpYWxTdGF0ZSgpIHtcclxuICAgICAgICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IFVzZXJTZXJ2aWNlLmVuc3VyZVVzZXJJc1JlZ2lzdGVyZWQoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodXNlckluZm8gJiYgdXNlckluZm8uaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wZXROYW1lID0gdXNlckluZm8ucGV0X25hbWUgfHwgJ+acquWRveWQjSc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyDojrflj5bliLDmnI3liqHlmajngrnlh7vmrKHmlbDml7bvvIznm7TmjqXopobnm5bliLDmnKzlnLDngrnlh7vmrKHmlbBcclxuICAgICAgICAgICAgY29uc3Qgc2VydmVyQ2xpY2tzID0gdXNlckluZm8udG90YWxfY2xpY2tzIHx8IDA7XHJcbiAgICAgICAgICAgIGlmIChzZXJ2ZXJDbGlja3MgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBfcHJvbWlzaWZpZWRTdG9yYWdlU2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuVE9UQUxfQ0xJQ0tTLCBzZXJ2ZXJDbGlja3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW1N0YXRlXSBTeW5jZWQgc2VydmVyIGNsaWNrcyB0byBsb2NhbCBzdG9yYWdlOiAke3NlcnZlckNsaWNrc31gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5LuO5pys5Zyw5a2Y5YKo6K+75Y+W5oC754K55Ye75qyh5pWw5ZKM5b6F5ZCM5q2l54K55Ye75qyh5pWwXHJcbiAgICAgICAgY29uc3QgdG90YWxDbGlja3NTdHIgPSBhd2FpdCBfcHJvbWlzaWZpZWRTdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuVE9UQUxfQ0xJQ0tTKTtcclxuICAgICAgICBjb25zdCB0b3RhbENsaWNrcyA9IHBhcnNlSW50KHRvdGFsQ2xpY2tzU3RyKSB8fCAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHBlbmRpbmdDbGlja3NTdHIgPSBhd2FpdCBfcHJvbWlzaWZpZWRTdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuUEVORElOR19DTElDS1MpO1xyXG4gICAgICAgIGNvbnN0IHBlbmRpbmdDbGlja3MgPSBwYXJzZUludChwZW5kaW5nQ2xpY2tzU3RyKSB8fCAwO1xyXG5cclxuICAgICAgICAvLyDmgLvmmL7npLrngrnlh7vmlbAgPSDmnKzlnLDmgLvmlbAgKyDlvoXlkIzmraXmlbBcclxuICAgICAgICB0aGlzLmNsaWNrQ291bnQgPSB0b3RhbENsaWNrcyArIHBlbmRpbmdDbGlja3M7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coYFtTdGF0ZV0gTG9hZGVkIHN0YXRlOiBUb3RhbCBjbGlja3M9JHt0b3RhbENsaWNrc30sIFBlbmRpbmcgY2xpY2tzPSR7cGVuZGluZ0NsaWNrc30sIERpc3BsYXkgY2xpY2tzPSR7dGhpcy5jbGlja0NvdW50fWApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IHRoaXMubG9hZENoZXN0U3RhdGVzKCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkVmlicmF0aW9uU2V0dGluZygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBsb2FkVmlicmF0aW9uU2V0dGluZygpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0gYXdhaXQgX3Byb21pc2lmaWVkU3RvcmFnZUdldChDT05GSUcuU1RPUkFHRV9LRVlTLlZJQlJBVElPTl9FTkFCTEVEKTtcclxuICAgICAgICAvLyDpu5jorqTlvIDlkK/pnIfliqjvvIzlj6rmnInmmI7noa7orr7nva7kuLogJ2ZhbHNlJyDml7bmiY3lhbPpl61cclxuICAgICAgICB0aGlzLnZpYnJhdGlvbkVuYWJsZWQgPSBzZXR0aW5nICE9PSAnZmFsc2UnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbTWFpbl0gTG9hZGVkIHZpYnJhdGlvbiBzZXR0aW5nOicsIHRoaXMudmlicmF0aW9uRW5hYmxlZCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdbTWFpbl0gRmFpbGVkIHRvIGxvYWQgdmlicmF0aW9uIHNldHRpbmc6JywgZSk7XHJcbiAgICAgICAgdGhpcy52aWJyYXRpb25FbmFibGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy8g44CQ5paw5aKe44CR6Ieq5Yqo5LuO5LqR56uv5ZCM5q2l6Iez5pys5Zyw55qE6YC76L6RXHJcbiAgICBhc3luYyBhdXRvU3luY0Zyb21DbG91ZCgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1tNYWluXSBTdGFydGluZyBhdXRvIHN5bmMgZnJvbSBjbG91ZC4uLicpO1xyXG4gICAgICBcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyAxLiDlhYjlsJ3or5XkuIrkvKDmnKrlkIzmraXnmoTmlbDmja5cclxuICAgICAgICBjb25zdCB1cGxvYWRTdWNjZXNzID0gYXdhaXQgVXNlclNlcnZpY2UudHJpZ2dlckNsaWNrU3luYygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghdXBsb2FkU3VjY2Vzcykge1xyXG4gICAgICAgICAgLy8g5LiK5Lyg5aSx6LSl77yM5L+d55WZ5pyq5ZCM5q2l5pWw5o2u5LiN5Y+YXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW01haW5dIFVwbG9hZCBmYWlsZWQsIGtlZXBpbmcgcGVuZGluZyBjbGlja3MgdW5jaGFuZ2VkJyk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIDIuIOS4iuS8oOaIkOWKn+WQju+8jOS7juacjeWKoeWZqOivt+axguacgOaWsOeahOeCueWHu+asoeaVsFxyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gYXdhaXQgVXNlclNlcnZpY2UuZW5zdXJlVXNlcklzUmVnaXN0ZXJlZCh0cnVlKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodXNlckluZm8gJiYgdXNlckluZm8udG90YWxfY2xpY2tzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIC8vIOabtOaWsOacrOWcsOeahOaAu+eCueWHu+aVsFxyXG4gICAgICAgICAgY29uc3QgX3Byb21pc2lmaWVkU3RvcmFnZVNldCA9IChrZXksIHZhbHVlKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHN0b3JhZ2Uuc2V0KHsga2V5LCB2YWx1ZSwgc3VjY2VzczogcmVzb2x2ZSwgZmFpbDogKGVyciwgY29kZSkgPT4gcmVqZWN0KG5ldyBFcnJvcihgU3RvcmFnZS5zZXQgZmFpbGVkIGZvciBrZXkgJyR7a2V5fScgd2l0aCBjb2RlICR7Y29kZX06ICR7ZXJyfWApKSB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBhd2FpdCBfcHJvbWlzaWZpZWRTdG9yYWdlU2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuVE9UQUxfQ0xJQ0tTLCB1c2VySW5mby50b3RhbF9jbGlja3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgW01haW5dIFVwZGF0ZWQgdG90YWxfY2xpY2tzIGZyb20gc2VydmVyOiAke3VzZXJJbmZvLnRvdGFsX2NsaWNrc31gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gMy4g5Yi35pawVUnmmL7npLpcclxuICAgICAgICBhd2FpdCB0aGlzLnJlZnJlc2hDbGlja0NvdW50KCk7XHJcbiAgICAgICAgXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignW01haW5dIEF1dG8gc3luYyBmcm9tIGNsb3VkIGZhaWxlZDonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8vIOOAkOaWsOWinuOAkeWIt+aWsOaYvuekuueahOeCueWHu+aVsFxyXG4gICAgYXN5bmMgcmVmcmVzaENsaWNrQ291bnQoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdG90YWxDbGlja3NTdHIgPSBhd2FpdCBfcHJvbWlzaWZpZWRTdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuVE9UQUxfQ0xJQ0tTKTtcclxuICAgICAgICBjb25zdCB0b3RhbENsaWNrcyA9IHBhcnNlSW50KHRvdGFsQ2xpY2tzU3RyKSB8fCAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHBlbmRpbmdDbGlja3NTdHIgPSBhd2FpdCBfcHJvbWlzaWZpZWRTdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuUEVORElOR19DTElDS1MpO1xyXG4gICAgICAgIGNvbnN0IHBlbmRpbmdDbGlja3MgPSBwYXJzZUludChwZW5kaW5nQ2xpY2tzU3RyKSB8fCAwO1xyXG5cclxuICAgICAgICB0aGlzLmNsaWNrQ291bnQgPSB0b3RhbENsaWNrcyArIHBlbmRpbmdDbGlja3M7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFtNYWluXSBSZWZyZXNoZWQgY2xpY2tDb3VudDogJHt0b3RhbENsaWNrc30gKyAke3BlbmRpbmdDbGlja3N9ID0gJHt0aGlzLmNsaWNrQ291bnR9YCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdbTWFpbl0gRmFpbGVkIHRvIHJlZnJlc2ggY2xpY2sgY291bnQ6JywgZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgbG9hZENoZXN0U3RhdGVzKCkge1xyXG4gICAgICBjb25zdCBjaGVzdERhdGEgPSBhd2FpdCBfcHJvbWlzaWZpZWRTdG9yYWdlR2V0KCdjaGVzdFN0YXRlcycpO1xyXG4gICAgICBpZiAoY2hlc3REYXRhKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgbG9hZGVkQ2hlc3RzID0gSlNPTi5wYXJzZShjaGVzdERhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmNoZXN0cyA9IGxvYWRlZENoZXN0cy5tYXAoY2hlc3QgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChjaGVzdC5yZWZyZXNoVGltZXN0YW1wID4gMCAmJiBjaGVzdC5jbGFpbWVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZW1haW5pbmdUaW1lID0gTWF0aC5tYXgoMCwgY2hlc3QucmVmcmVzaFRpbWVzdGFtcCAtIERhdGUubm93KCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlbWFpbmluZ1RpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICBjaGVzdC5jbGFpbWVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgIGNoZXN0LnJlZnJlc2hUaW1lc3RhbXAgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gY2hlc3Q7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2goZSkgeyBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIGNoZXN0IHN0YXRlcyBmcm9tIHN0b3JhZ2VcIiwgZSk7IH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBzYXZlQ2hlc3RTdGF0ZXMoKSB7XHJcbiAgICAgIGF3YWl0IF9wcm9taXNpZmllZFN0b3JhZ2VTZXQoJ2NoZXN0U3RhdGVzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5jaGVzdHMpKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlVGltZSgpIHtcclxuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgY29uc3QgaG91cnMgPSBub3cuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgdGhpcy50aW1lID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVDaGVzdFRpbWVycygpIHtcclxuICAgICAgbGV0IG5lZWRzU2F2ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNoZXN0cy5mb3JFYWNoKChjaGVzdCwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoY2hlc3QuY2xhaW1lZCAmJiBjaGVzdC5yZWZyZXNoVGltZXN0YW1wID4gMCkge1xyXG4gICAgICAgICAgY29uc3QgcmVtYWluaW5nVGltZSA9IE1hdGgubWF4KDAsIGNoZXN0LnJlZnJlc2hUaW1lc3RhbXAgLSBEYXRlLm5vdygpKTtcclxuICAgICAgICAgIHRoaXMuY2hlc3RzW2luZGV4XS50aW1lckRpc3BsYXkgPSB0aGlzLmZvcm1hdFRpbWUocmVtYWluaW5nVGltZSAvIDEwMDApO1xyXG4gICAgICAgICAgaWYgKHJlbWFpbmluZ1RpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZXN0c1tpbmRleF0uY2xhaW1lZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNoZXN0c1tpbmRleF0ucmVmcmVzaFRpbWVzdGFtcCA9IDA7XHJcbiAgICAgICAgICAgIG5lZWRzU2F2ZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKG5lZWRzU2F2ZSkgdGhpcy5zYXZlQ2hlc3RTdGF0ZXMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgZm9ybWF0VGltZShzZWNvbmRzKSB7XHJcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XHJcbiAgICAgIGNvbnN0IHJlbWFpbmluZ1NlY29uZHMgPSBNYXRoLmZsb29yKHNlY29uZHMgJSA2MCk7XHJcbiAgICAgIHJldHVybiBgJHttaW51dGVzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX06JHtyZW1haW5pbmdTZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gO1xyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBpbmNyZW1lbnRDbGljayhlKSB7XHJcbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgZ2VuZXJhbCBjbGljayBoYW5kbGVyIGZvciB0aGUgYmFja2dyb3VuZC9wZXRcclxuICAgICAgICB0aGlzLmNsaWNrQ291bnQrKztcclxuICAgICAgICBhd2FpdCBVc2VyU2VydmljZS51cGRhdGVQZW5kaW5nQ2xpY2tzKDEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOmch+WKqOWPjemmiFxyXG4gICAgICAgIGlmICh0aGlzLnZpYnJhdGlvbkVuYWJsZWQpIHtcclxuICAgICAgICAgIHZpYnJhdG9yLnZpYnJhdGUoe1xyXG4gICAgICAgICAgICBtb2RlOiAnc2hvcnQnXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wZXRJbWFnZSA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAnL2NvbW1vbi9SYTEucG5nJyA6ICcvY29tbW9uL1JhMi5wbmcnO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnBldEltYWdlID0gJy9jb21tb24vUmEwLnBuZyc7IH0sIDIwMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIGNsYWltQ2hlc3QoaW5kZXgsIGUpIHtcclxuICAgICAgY29uc3QgY2hlc3QgPSB0aGlzLmNoZXN0c1tpbmRleF07XHJcbiAgICAgIGlmIChjaGVzdC5jbGFpbWVkKSB7XHJcbiAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7IG1lc3NhZ2U6ICflrp3nrrHmraPlnKjlhrfljbTkuK0nIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5jbGlja0NvdW50ID49IDEwMDApIHtcclxuICAgICAgICB0aGlzLmNsaWNrQ291bnQgLT0gMTAwMDtcclxuICAgICAgICBhd2FpdCBVc2VyU2VydmljZS51cGRhdGVQZW5kaW5nQ2xpY2tzKC0xMDAwKTtcclxuICAgICAgICBjb25zdCByZXdhcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNTAwKSArIDUwMDtcclxuICAgICAgICB0aGlzLmNsaWNrQ291bnQgKz0gcmV3YXJkO1xyXG4gICAgICAgIGF3YWl0IFVzZXJTZXJ2aWNlLnVwZGF0ZVBlbmRpbmdDbGlja3MocmV3YXJkKTtcclxuICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHsgbWVzc2FnZTogYOiOt+W+lyAke3Jld2FyZH0g54K55Ye7IWAgfSk7XHJcbiAgICAgICAgdGhpcy5jaGVzdHNbaW5kZXhdLmNsYWltZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hlc3RzW2luZGV4XS5yZWZyZXNoVGltZXN0YW1wID0gRGF0ZS5ub3coKSArICgzMCAqIDYwICogMTAwMCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zYXZlQ2hlc3RTdGF0ZXMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHsgbWVzc2FnZTogJ+eCueWHu+asoeaVsOS4jei2sycgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb3Blbk1vcmUoZSkge1xyXG4gICAgICByb3V0ZXIucHVzaCh7IHVyaTogJ21vcmUnIH0pO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAvLyDmuIXnkIbmm7TmlrDmo4Dmn6Xlrprml7blmahcclxuICAgICAgaWYgKHRoaXMudXBkYXRlQ2hlY2tJbnRlcnZhbCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy51cGRhdGVDaGVja0ludGVydmFsKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNoZWNrSW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIl0sIm5hbWVzIjpbIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIl9zeXN0ZW0yIiwiX3N5c3RlbTMiLCJfc3lzdGVtNCIsIl9jb25maWciLCJyZXF1aXJlIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0Iiwib3duS2V5cyIsInIiLCJ0IiwiT2JqZWN0Iiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIm8iLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwicHVzaCIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJ2YWx1ZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiaSIsIl90b1ByaW1pdGl2ZSIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIkFwaVNlcnZpY2UiLCJjb25zdHJ1Y3RvciIsImJhc2VVcmwiLCJDT05GSUciLCJTRVJWRVIiLCJCQVNFX1VSTCIsImJhc2VIZWFkZXJzIiwicmVxdWVzdCIsImFjdGlvbiIsImRhdGEiLCJ1cmwiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVyIiwicmVzcG9uc2VUeXBlIiwiSlNPTiIsInN0cmluZ2lmeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmV0Y2giLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJyZXNwb25zZURhdGEiLCJjb2RlIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJmYWlsIiwiZ2V0UmFua2luZ3MiLCJsaW1pdCIsInJlc3VsdCIsInJhbmtpbmdzIiwibWVzc2FnZSIsInN5bmNDbGlja3MiLCJ1c2VySWQiLCJjbGlja0NvdW50IiwidXNlcl9pZCIsImNsaWNrX2NvdW50Iiwic3luY0Zyb21TZXJ2ZXIiLCJsb2ciLCJ1c2VySW5mbyIsImNoZWNrUGV0TmFtZUF2YWlsYWJpbGl0eSIsInBldE5hbWUiLCJwZXRfbmFtZSIsImlzQXZhaWxhYmxlIiwic2V0UGV0TmFtZSIsIm5ld05hbWUiLCJuZXdfbmFtZSIsImNoZWNrRGV2aWNlUmVnaXN0cmF0aW9uIiwiZGV2aWNlSWQiLCJkZXZpY2VfaWQiLCJpc19yZWdpc3RlcmVkIiwiY2FuX2F1dG9fYWN0aXZhdGUiLCJyZWdpc3RlckFuZEdldFVzZXJJZCIsImdldEFubm91bmNlbWVudHMiLCJhbm5vdW5jZW1lbnRzIiwiY291bnQiLCJ0aW1lc3RhbXAiLCJjaGVja0FwcFVwZGF0ZSIsImN1cnJlbnRWZXJzaW9uQ29kZSIsImN1cnJlbnRfdmVyc2lvbl9jb2RlIiwiaGFzX3VwZGF0ZSIsInVwZGF0ZV9pbmZvIiwiaXNfZm9yY2VfdXBkYXRlIiwidXBkYXRlSW5mbyIsInZlcnNpb25fbmFtZSIsInZlcnNpb25fY29kZSIsInRpdGxlIiwiY2hhbmdlbG9nIiwiZG93bmxvYWRfdXJsIiwiZm9yY2VfdXBkYXRlIiwibWluX3JlcXVpcmVkX3ZlcnNpb24iLCJyZWxlYXNlX3RpbWUiLCJyZXR1cm5SZXN1bHQiLCJoYXNVcGRhdGUiLCJpc0ZvcmNlVXBkYXRlIiwibGF0ZXN0VmVyc2lvbkNvZGUiLCJsYXRlc3RfdmVyc2lvbl9jb2RlIiwic3RhY2siLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJBUFAiLCJOQU1FIiwiVkVSU0lPTiIsIlZFUlNJT05fQ09ERSIsIk1BWF9DTElDS1NfUEVSX0JBVENIIiwiU1lOQ19JTlRFUlZBTCIsIlJBTktfTElNSVQiLCJDSEVDS19VUERBVEVfSU5URVJWQUwiLCJBTk5PVU5DRU1FTlRfQ0FDSEVfVElNRSIsIlNUT1JBR0VfS0VZUyIsIkRFVklDRV9JRCIsIklTX0xPQ0FMTFlfQUNUSVZBVEVEIiwiVVNFUl9JTkZPIiwiUEVORElOR19DTElDS1MiLCJMQVNUX1NZTkNfVElNRSIsIlRPVEFMX0NMSUNLUyIsIkxBU1RfVVBEQVRFX0NIRUNLX1RJTUUiLCJMQVNUX0FOTk9VTkNFTUVOVF9GRVRDSF9USU1FIiwiQ0FDSEVEX0FOTk9VTkNFTUVOVFMiLCJDQUNIRURfVVBEQVRFX0lORk8iLCJJR05PUkVEX1ZFUlNJT04iLCJGT1JDRV9VUERBVEVfUkVRVUlSRUQiLCJWSUJSQVRJT05fRU5BQkxFRCIsIl9hcGlTZXJ2aWNlIiwiVXBkYXRlTWFuYWdlciIsImNoZWNrSW50ZXJ2YWwiLCJjaGVja1VwZGF0ZSIsImZvcmNlQ2hlY2siLCJzaG91bGRDaGVjayIsInNob3VsZENoZWNrVXBkYXRlIiwic2tpcHBlZCIsInJlY29yZFVwZGF0ZUNoZWNrIiwiaWdub3JlZCIsImlzVmVyc2lvbklnbm9yZWQiLCJzYXZlVXBkYXRlSW5mbyIsImdldCIsImtleSIsImxhc3RDaGVja1RpbWUiLCJEYXRlIiwiZ2V0VGltZSIsIm5vdyIsInNldCIsInRvSVNPU3RyaW5nIiwiZ2V0U2F2ZWRVcGRhdGVJbmZvIiwicGFyc2UiLCJnZXRDYWNoZWRVcGRhdGVJbmZvIiwiaWdub3JlVmVyc2lvbiIsInZlcnNpb25Db2RlIiwidG9TdHJpbmciLCJwYXJzZUludCIsInNob3dVcGRhdGVEaWFsb2ciLCJ1cmkiLCJwYXJhbXMiLCJjaGVja0FuZEhhbmRsZUZvcmNlVXBkYXRlIiwiaGFzRm9yY2VVcGRhdGUiLCJtYXJrRm9yY2VVcGRhdGVSZXF1aXJlZCIsImNsZWFyRm9yY2VVcGRhdGVNYXJrIiwiZGVsZXRlIiwiaXNGb3JjZVVwZGF0ZVJlcXVpcmVkIiwiY2xlYXJVcGRhdGVDYWNoZSIsIlVzZXJTZXJ2aWNlIiwiX3N0b3JhZ2VHZXQiLCJfc3RvcmFnZVNldCIsImVyciIsIl9nZXRSYXdEZXZpY2VJZCIsImdldFNlcmlhbCIsInNlcmlhbCIsIndhcm4iLCJfc2F2ZVVzZXJJbmZvIiwiaWQiLCJ1c2VyX251bWJlciIsInVzZXJJbmZvVG9TYXZlIiwidG90YWxfY2xpY2tzIiwiZW5zdXJlVXNlcklzUmVnaXN0ZXJlZCIsImZvcmNlU3luYyIsImV4aXN0aW5nVXNlckluZm9KU09OIiwic3luY1Jlc3VsdCIsInN5bmNFcnJvciIsInJlZ1Jlc3VsdCIsIm5ld1JlZ1Jlc3VsdCIsInVwZGF0ZVBlbmRpbmdDbGlja3MiLCJhbW91bnQiLCJpc05hTiIsInBlbmRpbmdDbGlja3NEYXRhIiwiY3VycmVudENsaWNrcyIsIm5ld0NsaWNrcyIsInRyaWdnZXJDbGlja1N5bmMiLCJ1c2VySW5mb0pTT04iLCJjbGlja3NUb1N5bmMiLCJjdXJyZW50VG90YWxDbGlja3MiLCJ1cGRhdGVkVG90YWxDbGlja3MiLCJmb3JjZVN5bmNGcm9tU2VydmVyIiwiY2xpY2tTeW5jU3VjY2VzcyIsImVycm9yTXNnIiwidW5kZWZpbmVkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl91c2VyU2VydmljZSIsIl91cGRhdGVNYW5hZ2VyIiwiX3Byb21pc2lmaWVkU3RvcmFnZUdldCIsInN0b3JhZ2UiLCJfcHJvbWlzaWZpZWRTdG9yYWdlU2V0IiwidGltZSIsInBldEltYWdlIiwidmlicmF0aW9uRW5hYmxlZCIsInVwZGF0ZUNoZWNrSW50ZXJ2YWwiLCJjaGVzdHMiLCJjbGFpbWVkIiwicmVmcmVzaFRpbWVzdGFtcCIsInRpbWVyRGlzcGxheSIsInNob3dVcGRhdGVPdmVybGF5Iiwib25Jbml0IiwibG9hZEluaXRpYWxTdGF0ZSIsInVwZGF0ZVRpbWUiLCJzZXRJbnRlcnZhbCIsImF1dG9TeW5jRnJvbUNsb3VkIiwidXBkYXRlQ2hlc3RUaW1lcnMiLCJiaW5kIiwiY2hlY2tGb3JVcGRhdGVzIiwib25TaG93IiwibG9hZFZpYnJhdGlvblNldHRpbmciLCJyb3V0ZXIiLCJyZXBsYWNlIiwib25JZ25vcmVVcGRhdGUiLCJwcm9tcHQiLCJzaG93VG9hc3QiLCJkdXJhdGlvbiIsIm9uS25vd1VwZGF0ZSIsInNlcnZlckNsaWNrcyIsInRvdGFsQ2xpY2tzU3RyIiwidG90YWxDbGlja3MiLCJwZW5kaW5nQ2xpY2tzU3RyIiwicGVuZGluZ0NsaWNrcyIsImxvYWRDaGVzdFN0YXRlcyIsInNldHRpbmciLCJ1cGxvYWRTdWNjZXNzIiwicmVmcmVzaENsaWNrQ291bnQiLCJjaGVzdERhdGEiLCJsb2FkZWRDaGVzdHMiLCJtYXAiLCJjaGVzdCIsInJlbWFpbmluZ1RpbWUiLCJNYXRoIiwibWF4Iiwic2F2ZUNoZXN0U3RhdGVzIiwiaG91cnMiLCJnZXRIb3VycyIsInBhZFN0YXJ0IiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJuZWVkc1NhdmUiLCJpbmRleCIsImZvcm1hdFRpbWUiLCJzZWNvbmRzIiwiZmxvb3IiLCJyZW1haW5pbmdTZWNvbmRzIiwiaW5jcmVtZW50Q2xpY2siLCJ2aWJyYXRvciIsInZpYnJhdGUiLCJtb2RlIiwicmFuZG9tIiwic2V0VGltZW91dCIsImNsYWltQ2hlc3QiLCJyZXdhcmQiLCJvcGVuTW9yZSIsIm9uRGVzdHJveSIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUNBLElBQUFBLFVBQUFDLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFDLFdBQUFGLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFFLFdBQUFILHVCQUFBQyxlQUFBO3dCQUNBLElBQUFHLFdBQUFKLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFJLFVBQUFDLG9CQUFBO3dCQUFxQyxTQUFBTix1QkFBQU8sQ0FBQTs0QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7Z0NBQUFFLFNBQUFGOzRCQUFBO3dCQUFBO3dCQUFBLFNBQUFHLFFBQUFILENBQUEsRUFBQUksQ0FBQTs0QkFBQSxJQUFBQyxJQUFBQyxPQUFBQyxJQUFBLENBQUFQOzRCQUFBLElBQUFNLE9BQUFFLHFCQUFBO2dDQUFBLElBQUFDLElBQUFILE9BQUFFLHFCQUFBLENBQUFSO2dDQUFBSSxLQUFBSyxDQUFBQSxJQUFBQSxFQUFBQyxNQUFBLFVBQUFOLENBQUE7b0NBQUEsT0FBQUUsT0FBQUssd0JBQUEsQ0FBQVgsR0FBQUksR0FBQVEsVUFBQTtnQ0FBQSxLQUFBUCxFQUFBUSxJQUFBLENBQUFDLEtBQUEsQ0FBQVQsR0FBQUk7NEJBQUE7NEJBQUEsT0FBQUo7d0JBQUE7d0JBQUEsU0FBQVUsY0FBQWYsQ0FBQTs0QkFBQSxRQUFBSSxJQUFBLEdBQUFBLElBQUFZLFVBQUFDLE1BQUEsRUFBQWIsSUFBQTtnQ0FBQSxJQUFBQyxJQUFBLFFBQUFXLFNBQUEsQ0FBQVosRUFBQSxHQUFBWSxTQUFBLENBQUFaLEVBQUE7Z0NBQUFBLElBQUEsSUFBQUQsUUFBQUcsT0FBQUQsSUFBQSxJQUFBYSxPQUFBLFVBQUFkLENBQUE7b0NBQUFlLGdCQUFBbkIsR0FBQUksR0FBQUMsQ0FBQSxDQUFBRCxFQUFBO2dDQUFBLEtBQUFFLE9BQUFjLHlCQUFBLEdBQUFkLE9BQUFlLGdCQUFBLENBQUFyQixHQUFBTSxPQUFBYyx5QkFBQSxDQUFBZixNQUFBRixRQUFBRyxPQUFBRCxJQUFBYSxPQUFBLFVBQUFkLENBQUE7b0NBQUFFLE9BQUFnQixjQUFBLENBQUF0QixHQUFBSSxHQUFBRSxPQUFBSyx3QkFBQSxDQUFBTixHQUFBRDtnQ0FBQTs0QkFBQTs0QkFBQSxPQUFBSjt3QkFBQTt3QkFBQSxTQUFBbUIsZ0JBQUFuQixDQUFBLEVBQUFJLENBQUEsRUFBQUMsQ0FBQTs0QkFBQSxPQUFBRCxDQUFBQSxJQUFBbUIsZUFBQW5CLEVBQUEsS0FBQUosSUFBQU0sT0FBQWdCLGNBQUEsQ0FBQXRCLEdBQUFJLEdBQUE7Z0NBQUFvQixPQUFBbkI7Z0NBQUFPLFlBQUE7Z0NBQUFhLGNBQUE7Z0NBQUFDLFVBQUE7NEJBQUEsS0FBQTFCLENBQUEsQ0FBQUksRUFBQSxHQUFBQyxHQUFBTDt3QkFBQTt3QkFBQSxTQUFBdUIsZUFBQWxCLENBQUE7NEJBQUEsSUFBQXNCLElBQUFDLGFBQUF2QixHQUFBOzRCQUFBLDBCQUFBc0IsSUFBQUEsSUFBQUEsSUFBQTt3QkFBQTt3QkFBQSxTQUFBQyxhQUFBdkIsQ0FBQSxFQUFBRCxDQUFBOzRCQUFBLHVCQUFBQyxLQUFBLENBQUFBLEdBQUEsT0FBQUE7NEJBQUEsSUFBQUwsSUFBQUssQ0FBQSxDQUFBd0IsT0FBQUMsV0FBQTs0QkFBQSxlQUFBOUIsR0FBQTtnQ0FBQSxJQUFBMkIsSUFBQTNCLEVBQUErQixJQUFBLENBQUExQixHQUFBRCxLQUFBO2dDQUFBLHVCQUFBdUIsR0FBQSxPQUFBQTtnQ0FBQSxVQUFBSyxVQUFBOzRCQUFBOzRCQUFBLHFCQUFBNUIsSUFBQTZCLFNBQUFDLE1BQUFBLEVBQUE3Qjt3QkFBQTt3QkFFckMsTUFBTThCOzRCQUNKQyxhQUFjO2dDQUVaLElBQUksQ0FBQ0MsT0FBTyxHQUFHdkMsUUFBQXdDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRO2dDQUNyQyxJQUFJLENBQUNDLFdBQVcsR0FBRztvQ0FDakIsZ0JBQWdCO2dDQUNsQjs0QkFDRjs0QkFHQSxNQUFNQyxRQUFRQyxNQUFNLEVBQUVDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7Z0NBQy9CLE1BQU1DLE1BQU0sR0FBRyxJQUFJLENBQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0NBRWpDLE1BQU1TLFVBQVU7b0NBQ2REO29DQUNBRSxRQUFRO29DQUNSQyxRQUFRLElBQUksQ0FBQ1AsV0FBVztvQ0FDeEJRLGNBQWM7Z0NBQ2hCO2dDQUVBSCxRQUFRRixJQUFJLEdBQUdNLEtBQUtDLFNBQVMsQ0FBQXBDLGNBQUM7b0NBQUU0QjtnQ0FBTSxHQUFLQztnQ0FFM0MsT0FBTyxJQUFJUSxRQUFRLENBQUNDLFNBQVNDO29DQUMzQjlELFFBQUFVLE9BQUssQ0FBQ3FELEtBQUssQ0FBQXhDLGNBQUFBLGNBQUMsQ0FBQyxHQUNSK0IsVUFBTzt3Q0FDVlUsU0FBVUMsQ0FBQUE7NENBQ1IsTUFBTUMsZUFBZUQsU0FBU2IsSUFBSSxJQUFJLENBQUM7NENBRXZDLElBQUlhLFNBQVNFLElBQUksSUFBSSxPQUFPRixTQUFTRSxJQUFJLEdBQUcsS0FDMUNOLFFBQVFLO2lEQUNIO2dEQUNMRSxRQUFRQyxLQUFLLENBQUMsQ0FBQyxZQUFZLEVBQUVKLFNBQVNFLElBQUksRUFBRSxFQUFFRjtnREFDOUNILE9BQU8sSUFBSVEsTUFBTSxDQUFDLEtBQUssRUFBRUwsU0FBU0UsSUFBSSxDQUFDLEVBQUUsRUFBRVQsS0FBS0MsU0FBUyxDQUFDTyxlQUFlOzRDQUMzRTt3Q0FDRjt3Q0FDQUssTUFBTUEsQ0FBQ0YsT0FBT0Y7NENBRVpDLFFBQVFDLEtBQUssQ0FBQyxDQUFDLG1DQUFtQyxFQUFFRixLQUFLLFNBQVMsRUFBRVQsS0FBS0MsU0FBUyxDQUFDVSxRQUFROzRDQUMzRlAsT0FBTyxJQUFJUSxNQUFNLENBQUMsZ0JBQWdCLEVBQUVELE1BQU1qQixJQUFJLElBQUkseUJBQXlCO3dDQUM3RTtvQ0FBQztnQ0FFTDs0QkFDRjs0QkFHQSxNQUFNb0IsWUFBWUMsUUFBUSxFQUFFLEVBQUU7Z0NBQzVCLElBQUk7b0NBQ0YsTUFBTUMsU0FBUyxNQUFNLElBQUksQ0FBQ3hCLE9BQU8sQ0FBQyxnQkFBZ0I7d0NBQ2hEdUIsT0FBT0E7b0NBQ1Q7b0NBQ0EsT0FBTzt3Q0FDTFQsU0FBUzt3Q0FDVFcsVUFBVUQsT0FBT0MsUUFBUSxJQUFJLEVBQUU7b0NBQ2pDO2dDQUNGLEVBQUUsT0FBT04sT0FBTztvQ0FDZEQsUUFBUUMsS0FBSyxDQUFDLFlBQVlBO29DQUMxQixPQUFPO3dDQUNMTCxTQUFTO3dDQUNUVyxVQUFVLEVBQUU7d0NBQ1pOLE9BQU9BLE1BQU1PLE9BQU87b0NBQ3RCO2dDQUNGOzRCQUNGOzRCQUdBLE1BQU1DLFdBQVdDLE1BQU0sRUFBRUMsVUFBVSxFQUFFO2dDQUNuQyxJQUFJO29DQUNGLE1BQU0sSUFBSSxDQUFDN0IsT0FBTyxDQUFDLGVBQWU7d0NBQ2hDOEIsU0FBU0Y7d0NBQ1RHLGFBQWFGO29DQUNmO29DQUNBLE9BQU87d0NBQUVmLFNBQVM7b0NBQUs7Z0NBQ3pCLEVBQUUsT0FBT0ssT0FBTztvQ0FDZEQsUUFBUUMsS0FBSyxDQUFDLGFBQWFBO29DQUMzQixPQUFPO3dDQUFFTCxTQUFTO3dDQUFPSyxPQUFPQSxNQUFNTyxPQUFPO29DQUFDO2dDQUNoRDs0QkFDRjs0QkFHQSxNQUFNTSxlQUFlSixNQUFNLEVBQUU7Z0NBQzNCLElBQUk7b0NBQ0YsTUFBTUosU0FBUyxNQUFNLElBQUksQ0FBQ3hCLE9BQU8sQ0FBQyxvQkFBb0I7d0NBQ3BEOEIsU0FBU0Y7b0NBQ1g7b0NBRUEsSUFBSUosVUFBVUEsT0FBT1YsT0FBTyxFQUFFO3dDQUM1QkksUUFBUWUsR0FBRyxDQUFDLGVBQWVULE9BQU9VLFFBQVE7d0NBQzFDLE9BQU87NENBQUVwQixTQUFTOzRDQUFNb0IsVUFBVVYsT0FBT1UsUUFBUTt3Q0FBQztvQ0FDcEQ7b0NBQ0VoQixRQUFRQyxLQUFLLENBQUMsV0FBV0ssU0FBU0EsT0FBT0wsS0FBSyxHQUFHO29DQUNqRCxPQUFPO3dDQUFFTCxTQUFTO3dDQUFPSyxPQUFRSyxTQUFTQSxPQUFPTCxLQUFLLEdBQUc7b0NBQWM7Z0NBRTNFLEVBQUUsT0FBT0EsT0FBTztvQ0FDZEQsUUFBUUMsS0FBSyxDQUFDLG9CQUFvQkE7b0NBQ2xDLE9BQU87d0NBQUVMLFNBQVM7d0NBQU9LLE9BQU9BLE1BQU1PLE9BQU87b0NBQUM7Z0NBQ2hEOzRCQUNGOzRCQUdBLE1BQU1TLHlCQUF5QkMsT0FBTyxFQUFFO2dDQUN0QyxJQUFJO29DQUNGLE1BQU1aLFNBQVMsTUFBTSxJQUFJLENBQUN4QixPQUFPLENBQUMsa0JBQWtCO3dDQUNsRHFDLFVBQVVEO29DQUNaO29DQUNBLE9BQUEvRCxjQUFBO3dDQUFTeUMsU0FBUztvQ0FBSSxHQUFLVTtnQ0FDN0IsRUFBRSxPQUFPTCxPQUFPO29DQUNkRCxRQUFRQyxLQUFLLENBQUMsb0JBQW9CQTtvQ0FDbEMsT0FBTzt3Q0FBRUwsU0FBUzt3Q0FBT0ssT0FBT0EsTUFBTU8sT0FBTzt3Q0FBRVksYUFBYTtvQ0FBTTtnQ0FDcEU7NEJBQ0Y7NEJBR0EsTUFBTUMsV0FBV1gsTUFBTSxFQUFFWSxPQUFPLEVBQUU7Z0NBQ2hDLElBQUk7b0NBQ0YsTUFBTWhCLFNBQVMsTUFBTSxJQUFJLENBQUN4QixPQUFPLENBQUMsZ0JBQWdCO3dDQUNoRDhCLFNBQVNGO3dDQUNUYSxVQUFVRDtvQ0FDWjtvQ0FDQSxPQUFPaEI7Z0NBQ1QsRUFBRSxPQUFPTCxPQUFPO29DQUNkRCxRQUFRQyxLQUFLLENBQUMsWUFBWUE7b0NBQzFCLE9BQU87d0NBQUVMLFNBQVM7d0NBQU9LLE9BQU9BLE1BQU1PLE9BQU87b0NBQUM7Z0NBQ2hEOzRCQUNGOzRCQUdBLE1BQU1nQix3QkFBd0JDLFFBQVEsRUFBRTtnQ0FDdEMsSUFBSTtvQ0FDRixNQUFNbkIsU0FBUyxNQUFNLElBQUksQ0FBQ3hCLE9BQU8sQ0FBQyxzQkFBc0I7d0NBQ3RENEMsV0FBV0Q7b0NBQ2I7b0NBQ0F6QixRQUFRZSxHQUFHLENBQUMsWUFBWVQ7b0NBRXhCLE9BQU9BO2dDQUNULEVBQUUsT0FBT0wsT0FBTztvQ0FDZEQsUUFBUUMsS0FBSyxDQUFDLGlCQUFpQkE7b0NBRS9CLE9BQU87d0NBQUUwQixlQUFlO3dDQUFPQyxtQkFBbUI7d0NBQU8zQixPQUFPQSxNQUFNTyxPQUFPO29DQUFDO2dDQUNoRjs0QkFDRjs0QkFHQSxNQUFNcUIscUJBQXFCSixRQUFRLEVBQUU7Z0NBQ25DLElBQUk7b0NBRUYsT0FBTyxNQUFNLElBQUksQ0FBQzNDLE9BQU8sQ0FBQyw4QkFBOEI7d0NBQ3RENEMsV0FBV0Q7b0NBQ2I7Z0NBQ0YsRUFBRSxPQUFPeEIsT0FBTztvQ0FDZEQsUUFBUUMsS0FBSyxDQUFDLHFCQUFxQkE7b0NBRW5DLE9BQU87d0NBQUVMLFNBQVM7d0NBQU9ZLFNBQVNQLE1BQU1PLE9BQU87b0NBQUM7Z0NBQ2xEOzRCQUNGOzRCQUdBLE1BQU1zQixpQkFBaUJ6QixRQUFRLEVBQUUsRUFBRTtnQ0FDakMsSUFBSTtvQ0FDRixNQUFNQyxTQUFTLE1BQU0sSUFBSSxDQUFDeEIsT0FBTyxDQUFDLHFCQUFxQjt3Q0FDckR1QixPQUFPQTtvQ0FDVDtvQ0FDQUwsUUFBUWUsR0FBRyxDQUFDLDZDQUE2Q3pCLEtBQUtDLFNBQVMsQ0FBQ2U7b0NBRXhFLE9BQU87d0NBQ0xWLFNBQVNVLE9BQU9WLE9BQU8sSUFBSTt3Q0FDM0JtQyxlQUFlekIsT0FBT3lCLGFBQWEsSUFBSSxFQUFFO3dDQUN6Q0MsT0FBTzFCLE9BQU8wQixLQUFLLElBQUk7d0NBQ3ZCQyxXQUFXM0IsT0FBTzJCLFNBQVM7d0NBQzNCaEMsT0FBT0ssT0FBT0wsS0FBSztvQ0FDckI7Z0NBQ0YsRUFBRSxPQUFPQSxPQUFPO29DQUNkRCxRQUFRQyxLQUFLLENBQUMsV0FBV0E7b0NBQ3pCLE9BQU87d0NBQ0xMLFNBQVM7d0NBQ1RLLE9BQU9BLE1BQU1PLE9BQU87d0NBQ3BCdUIsZUFBZSxFQUFFO3dDQUNqQkMsT0FBTztvQ0FDVDtnQ0FDRjs0QkFDRjs0QkFHQSxNQUFNRSxlQUFlQyxrQkFBa0IsRUFBRTtnQ0FDdkNuQyxRQUFRZSxHQUFHLENBQUMsK0RBQStEb0I7Z0NBRTNFLElBQUk7b0NBQ0YsTUFBTTdCLFNBQVMsTUFBTSxJQUFJLENBQUN4QixPQUFPLENBQUMsZ0JBQWdCO3dDQUNoRHNELHNCQUFzQkQ7b0NBQ3hCO29DQUVBbkMsUUFBUWUsR0FBRyxDQUFDLDJDQUEyQ3pCLEtBQUtDLFNBQVMsQ0FBQ2U7b0NBQ3RFTixRQUFRZSxHQUFHLENBQUMsMkNBQTJDVCxPQUFPK0IsVUFBVTtvQ0FDeEVyQyxRQUFRZSxHQUFHLENBQUMsNENBQTRDekIsS0FBS0MsU0FBUyxDQUFDZSxPQUFPZ0MsV0FBVztvQ0FDekZ0QyxRQUFRZSxHQUFHLENBQUMsZ0RBQWdEVCxPQUFPaUMsZUFBZTtvQ0FHbEYsSUFBSUMsYUFBYTtvQ0FDakIsSUFBSWxDLE9BQU9nQyxXQUFXLEVBQUU7d0NBQ3RCRSxhQUFhOzRDQUNYQyxjQUFjbkMsT0FBT2dDLFdBQVcsQ0FBQ0csWUFBWSxJQUFJOzRDQUNqREMsY0FBY3BDLE9BQU9nQyxXQUFXLENBQUNJLFlBQVksSUFBSTs0Q0FDakRDLE9BQU9yQyxPQUFPZ0MsV0FBVyxDQUFDSyxLQUFLLElBQUk7NENBQ25DQyxXQUFXdEMsT0FBT2dDLFdBQVcsQ0FBQ00sU0FBUyxJQUFJOzRDQUMzQ0MsY0FBY3ZDLE9BQU9nQyxXQUFXLENBQUNPLFlBQVksSUFBSTs0Q0FDakRDLGNBQWN4QyxPQUFPZ0MsV0FBVyxDQUFDUSxZQUFZLElBQUk7NENBQ2pEQyxzQkFBc0J6QyxPQUFPZ0MsV0FBVyxDQUFDUyxvQkFBb0IsSUFBSTs0Q0FDakVDLGNBQWMxQyxPQUFPZ0MsV0FBVyxDQUFDVSxZQUFZLElBQUk7d0NBQ25EO3dDQUNBaEQsUUFBUWUsR0FBRyxDQUFDLHVEQUF1RHpCLEtBQUtDLFNBQVMsQ0FBQ2lEO29DQUNwRixPQUNFeEMsUUFBUWUsR0FBRyxDQUFDO29DQUdkLE1BQU1rQyxlQUFlO3dDQUNuQnJELFNBQVNVLE9BQU9WLE9BQU8sSUFBSTt3Q0FDM0JzRCxXQUFXNUMsT0FBTytCLFVBQVUsSUFBSTt3Q0FDaENHLFlBQVlBO3dDQUNaVyxlQUFlN0MsT0FBT2lDLGVBQWUsSUFBSTt3Q0FDekNKLG9CQUFvQjdCLE9BQU84QixvQkFBb0IsSUFBSUQ7d0NBQ25EaUIsbUJBQW1COUMsT0FBTytDLG1CQUFtQixJQUFJbEI7d0NBQ2pEbEMsT0FBT0ssT0FBT0wsS0FBSztvQ0FDckI7b0NBRUFELFFBQVFlLEdBQUcsQ0FBQyw4Q0FBOEN6QixLQUFLQyxTQUFTLENBQUMwRDtvQ0FFekUsT0FBT0E7Z0NBQ1QsRUFBRSxPQUFPaEQsT0FBTztvQ0FDZEQsUUFBUUMsS0FBSyxDQUFDLHNDQUFzQ0E7b0NBQ3BERCxRQUFRQyxLQUFLLENBQUMsOENBQThDQSxNQUFNTyxPQUFPO29DQUN6RVIsUUFBUUMsS0FBSyxDQUFDLDRDQUE0Q0EsTUFBTXFELEtBQUs7b0NBQ3JFLE9BQU87d0NBQ0wxRCxTQUFTO3dDQUNUSyxPQUFPQSxNQUFNTyxPQUFPO3dDQUNwQjBDLFdBQVc7d0NBQ1hDLGVBQWU7b0NBQ2pCO2dDQUNGOzRCQUNGO3dCQUNGO3dCQUFDLElBQUFJLFdBQUFDLE9BQUFBLENBQUFBLFVBQUEsR0FFYyxJQUFJakY7Ozs7Ozs7O3dCQ3RQWixNQUFNRyxTQUFNOEUsUUFBQUEsTUFBQSxHQUFHOzRCQUVwQjdFLFFBQVE7Z0NBQ05DLFVBQVU7NEJBQ1o7NEJBTUE2RSxLQUFLO2dDQUNIQyxNQUFNO2dDQUNOQyxTQUFTO2dDQUNUQyxjQUFjO2dDQUNkQyxzQkFBc0I7Z0NBQ3RCQyxlQUFlO2dDQUNmQyxZQUFZO2dDQUdaQyx1QkFBdUI7Z0NBQ3ZCQyx5QkFBeUI7NEJBQzNCOzRCQUdBQyxjQUFjO2dDQUNaQyxXQUFXO2dDQUNYQyxzQkFBc0I7Z0NBQ3RCQyxXQUFXO2dDQUNYQyxnQkFBZ0I7Z0NBQ2hCQyxnQkFBZ0I7Z0NBQ2hCQyxjQUFjO2dDQUdkQyx3QkFBd0I7Z0NBQ3hCQyw4QkFBOEI7Z0NBQzlCQyxzQkFBc0I7Z0NBQ3RCQyxvQkFBb0I7Z0NBQ3BCQyxpQkFBaUI7Z0NBQ2pCQyx1QkFBdUI7Z0NBR3ZCQyxtQkFBbUI7NEJBQ3JCO3dCQUNGOzs7Ozs7Ozt3QkMzQ0EsSUFBQW5KLFVBQUFDLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFrSixjQUFBbkosdUJBQUFNLG9CQUFBO3dCQUNBLElBQUFKLFdBQUFGLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFFLFdBQUFILHVCQUFBQyxlQUFBO3dCQUNBLElBQUFJLFVBQUFDLG9CQUFBO3dCQUFxQyxTQUFBTix1QkFBQU8sQ0FBQTs0QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7Z0NBQUFFLFNBQUFGOzRCQUFBO3dCQUFBO3dCQUFBLFNBQUFHLFFBQUFILENBQUEsRUFBQUksQ0FBQTs0QkFBQSxJQUFBQyxJQUFBQyxPQUFBQyxJQUFBLENBQUFQOzRCQUFBLElBQUFNLE9BQUFFLHFCQUFBO2dDQUFBLElBQUFDLElBQUFILE9BQUFFLHFCQUFBLENBQUFSO2dDQUFBSSxLQUFBSyxDQUFBQSxJQUFBQSxFQUFBQyxNQUFBLFVBQUFOLENBQUE7b0NBQUEsT0FBQUUsT0FBQUssd0JBQUEsQ0FBQVgsR0FBQUksR0FBQVEsVUFBQTtnQ0FBQSxLQUFBUCxFQUFBUSxJQUFBLENBQUFDLEtBQUEsQ0FBQVQsR0FBQUk7NEJBQUE7NEJBQUEsT0FBQUo7d0JBQUE7d0JBQUEsU0FBQVUsY0FBQWYsQ0FBQTs0QkFBQSxRQUFBSSxJQUFBLEdBQUFBLElBQUFZLFVBQUFDLE1BQUEsRUFBQWIsSUFBQTtnQ0FBQSxJQUFBQyxJQUFBLFFBQUFXLFNBQUEsQ0FBQVosRUFBQSxHQUFBWSxTQUFBLENBQUFaLEVBQUE7Z0NBQUFBLElBQUEsSUFBQUQsUUFBQUcsT0FBQUQsSUFBQSxJQUFBYSxPQUFBLFVBQUFkLENBQUE7b0NBQUFlLGdCQUFBbkIsR0FBQUksR0FBQUMsQ0FBQSxDQUFBRCxFQUFBO2dDQUFBLEtBQUFFLE9BQUFjLHlCQUFBLEdBQUFkLE9BQUFlLGdCQUFBLENBQUFyQixHQUFBTSxPQUFBYyx5QkFBQSxDQUFBZixNQUFBRixRQUFBRyxPQUFBRCxJQUFBYSxPQUFBLFVBQUFkLENBQUE7b0NBQUFFLE9BQUFnQixjQUFBLENBQUF0QixHQUFBSSxHQUFBRSxPQUFBSyx3QkFBQSxDQUFBTixHQUFBRDtnQ0FBQTs0QkFBQTs0QkFBQSxPQUFBSjt3QkFBQTt3QkFBQSxTQUFBbUIsZ0JBQUFuQixDQUFBLEVBQUFJLENBQUEsRUFBQUMsQ0FBQTs0QkFBQSxPQUFBRCxDQUFBQSxJQUFBbUIsZUFBQW5CLEVBQUEsS0FBQUosSUFBQU0sT0FBQWdCLGNBQUEsQ0FBQXRCLEdBQUFJLEdBQUE7Z0NBQUFvQixPQUFBbkI7Z0NBQUFPLFlBQUE7Z0NBQUFhLGNBQUE7Z0NBQUFDLFVBQUE7NEJBQUEsS0FBQTFCLENBQUEsQ0FBQUksRUFBQSxHQUFBQyxHQUFBTDt3QkFBQTt3QkFBQSxTQUFBdUIsZUFBQWxCLENBQUE7NEJBQUEsSUFBQXNCLElBQUFDLGFBQUF2QixHQUFBOzRCQUFBLDBCQUFBc0IsSUFBQUEsSUFBQUEsSUFBQTt3QkFBQTt3QkFBQSxTQUFBQyxhQUFBdkIsQ0FBQSxFQUFBRCxDQUFBOzRCQUFBLHVCQUFBQyxLQUFBLENBQUFBLEdBQUEsT0FBQUE7NEJBQUEsSUFBQUwsSUFBQUssQ0FBQSxDQUFBd0IsT0FBQUMsV0FBQTs0QkFBQSxlQUFBOUIsR0FBQTtnQ0FBQSxJQUFBMkIsSUFBQTNCLEVBQUErQixJQUFBLENBQUExQixHQUFBRCxLQUFBO2dDQUFBLHVCQUFBdUIsR0FBQSxPQUFBQTtnQ0FBQSxVQUFBSyxVQUFBOzRCQUFBOzRCQUFBLHFCQUFBNUIsSUFBQTZCLFNBQUFDLE1BQUFBLEVBQUE3Qjt3QkFBQTt3QkFFckMsTUFBTXdJOzRCQUNKekcsYUFBYztnQ0FDWixJQUFJLENBQUMwRyxhQUFhLEdBQUdoSixRQUFBd0MsTUFBTSxDQUFDK0UsR0FBRyxDQUFDTyxxQkFBcUIsSUFBSTs0QkFDM0Q7NEJBR0EsTUFBTW1CLFlBQVlDLGFBQWEsS0FBSyxFQUFFO2dDQUNwQ3BGLFFBQVFlLEdBQUcsQ0FBQyx1REFBdURxRTtnQ0FFbkUsSUFBSTtvQ0FFRixJQUFJLENBQUNBLFlBQVk7d0NBQ2YsTUFBTUMsY0FBYyxNQUFNLElBQUksQ0FBQ0MsaUJBQWlCO3dDQUNoRHRGLFFBQVFlLEdBQUcsQ0FBQyw2Q0FBNkNzRTt3Q0FFekQsSUFBSSxDQUFDQSxhQUFhOzRDQUNoQnJGLFFBQVFlLEdBQUcsQ0FBQzs0Q0FDWixPQUFPO2dEQUNMbkIsU0FBUztnREFDVDJGLFNBQVM7Z0RBQ1QvRSxTQUFTOzRDQUNYO3dDQUNGO29DQUNGO29DQUdBLE1BQU0yQixxQkFBcUJqRyxRQUFBd0MsTUFBTSxDQUFDK0UsR0FBRyxDQUFDRyxZQUFZO29DQUNsRDVELFFBQVFlLEdBQUcsQ0FBQyx5Q0FBeUNvQjtvQ0FHckRuQyxRQUFRZSxHQUFHLENBQUM7b0NBQ1osTUFBTVQsU0FBUyxNQUFNMEUsWUFBQTFJLE9BQVUsQ0FBQzRGLGNBQWMsQ0FBQ0M7b0NBRS9DbkMsUUFBUWUsR0FBRyxDQUFDLHFEQUFxRHpCLEtBQUtDLFNBQVMsQ0FBQ2U7b0NBRWhGLElBQUlBLE9BQU9WLE9BQU8sRUFBRTt3Q0FDbEJJLFFBQVFlLEdBQUcsQ0FBQzt3Q0FHWixNQUFNLElBQUksQ0FBQ3lFLGlCQUFpQjt3Q0FHNUIsSUFBSWxGLE9BQU80QyxTQUFTLEVBQUU7NENBQ3BCbEQsUUFBUWUsR0FBRyxDQUFDOzRDQUNaLE1BQU15QixhQUFhbEMsT0FBT2tDLFVBQVU7NENBQ3BDeEMsUUFBUWUsR0FBRyxDQUFDLGdDQUFnQ3pCLEtBQUtDLFNBQVMsQ0FBQ2lEOzRDQUczRCxNQUFNaUQsVUFBVSxNQUFNLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNsRCxXQUFXRSxZQUFZOzRDQUNuRTFDLFFBQVFlLEdBQUcsQ0FBQyxvQ0FBb0MwRTs0Q0FHaEQsSUFBSW5GLE9BQU82QyxhQUFhLEVBQUU7Z0RBQ3hCLE1BQU0sSUFBSSxDQUFDd0MsY0FBYyxDQUFDbkQ7Z0RBQzFCeEMsUUFBUWUsR0FBRyxDQUFDLGdFQUFnRXpCLEtBQUtDLFNBQVMsQ0FBQ2lEOzRDQUM3RixPQUFPLElBQUtpRCxTQU1WekYsUUFBUWUsR0FBRyxDQUFDO2lEQU5PO2dEQUVuQixNQUFNLElBQUksQ0FBQzRFLGNBQWMsQ0FBQ25EO2dEQUMxQnhDLFFBQVFlLEdBQUcsQ0FBQyxpREFBaUR6QixLQUFLQyxTQUFTLENBQUNpRDs0Q0FDOUU7NENBS0EsT0FBQXJGLGNBQUFBLGNBQUEsSUFDS21ELFNBQU07Z0RBQ1RtRixTQUFTQTs0Q0FBTzt3Q0FFcEI7d0NBQ0V6RixRQUFRZSxHQUFHLENBQUM7b0NBRWhCLE9BQ0VmLFFBQVFlLEdBQUcsQ0FBQyx3Q0FBd0NULE9BQU9MLEtBQUs7b0NBR2xFLE9BQU9LO2dDQUVULEVBQUUsT0FBT0wsT0FBTztvQ0FDZEQsUUFBUUMsS0FBSyxDQUFDLHNDQUFzQ0E7b0NBQ3BERCxRQUFRQyxLQUFLLENBQUMsOENBQThDQSxNQUFNTyxPQUFPO29DQUN6RVIsUUFBUUMsS0FBSyxDQUFDLDRDQUE0Q0EsTUFBTXFELEtBQUs7b0NBQ3JFLE9BQU87d0NBQ0wxRCxTQUFTO3dDQUNUSyxPQUFPQSxNQUFNTyxPQUFPO3dDQUNwQjBDLFdBQVc7b0NBQ2I7Z0NBQ0Y7NEJBQ0Y7NEJBR0EsTUFBTW9DLG9CQUFvQjtnQ0FDeEIsSUFBSTtvQ0FDRixNQUFNaEYsU0FBUyxNQUFNMUUsUUFBQVUsT0FBTyxDQUFDc0osR0FBRyxDQUFDO3dDQUMvQkMsS0FBSzNKLFFBQUF3QyxNQUFNLENBQUN3RixZQUFZLENBQUNPLHNCQUFzQjtvQ0FDakQ7b0NBRUEsSUFBSSxDQUFDbkUsVUFBVSxDQUFDQSxPQUFPMUMsS0FBSyxFQUMxQixPQUFPO29DQUdULE1BQU1rSSxnQkFBZ0IsSUFBSUMsS0FBS3pGLE9BQU8xQyxLQUFLLEVBQUVvSSxPQUFPO29DQUNwRCxNQUFNQyxNQUFNRixLQUFLRSxHQUFHO29DQUVwQixPQUFRQSxNQUFNSCxpQkFBa0IsSUFBSSxDQUFDWixhQUFhO2dDQUVwRCxFQUFFLE9BQU9qRixPQUFPO29DQUNkRCxRQUFRQyxLQUFLLENBQUMsYUFBYUE7b0NBQzNCLE9BQU87Z0NBQ1Q7NEJBQ0Y7NEJBR0EsTUFBTXVGLG9CQUFvQjtnQ0FDeEIsSUFBSTtvQ0FDRixNQUFNNUosUUFBQVUsT0FBTyxDQUFDNEosR0FBRyxDQUFDO3dDQUNoQkwsS0FBSzNKLFFBQUF3QyxNQUFNLENBQUN3RixZQUFZLENBQUNPLHNCQUFzQjt3Q0FDL0M3RyxPQUFPLElBQUltSSxPQUFPSSxXQUFXO29DQUMvQjtnQ0FDRixFQUFFLE9BQU9sRyxPQUFPO29DQUNkRCxRQUFRQyxLQUFLLENBQUMsYUFBYUE7Z0NBQzdCOzRCQUNGOzRCQUdBLE1BQU0wRixlQUFlbkQsVUFBVSxFQUFFO2dDQUMvQixJQUFJO29DQUNGLE1BQU01RyxRQUFBVSxPQUFPLENBQUM0SixHQUFHLENBQUM7d0NBQ2hCTCxLQUFLM0osUUFBQXdDLE1BQU0sQ0FBQ3dGLFlBQVksQ0FBQ1Usa0JBQWtCO3dDQUMzQ2hILE9BQU8wQixLQUFLQyxTQUFTLENBQUNpRDtvQ0FDeEI7b0NBQ0F4QyxRQUFRZSxHQUFHLENBQUM7Z0NBQ2QsRUFBRSxPQUFPZCxPQUFPO29DQUNkRCxRQUFRQyxLQUFLLENBQUMsYUFBYUE7Z0NBQzdCOzRCQUNGOzRCQUdBLE1BQU1tRyxxQkFBcUI7Z0NBQ3pCLElBQUk7b0NBQ0YsTUFBTTlGLFNBQVMsTUFBTTFFLFFBQUFVLE9BQU8sQ0FBQ3NKLEdBQUcsQ0FBQzt3Q0FDL0JDLEtBQUszSixRQUFBd0MsTUFBTSxDQUFDd0YsWUFBWSxDQUFDVSxrQkFBa0I7b0NBQzdDO29DQUVBLElBQUl0RSxVQUFVQSxPQUFPMUMsS0FBSyxFQUFFO3dDQUMxQm9DLFFBQVFlLEdBQUcsQ0FBQzt3Q0FDWixPQUFPekIsS0FBSytHLEtBQUssQ0FBQy9GLE9BQU8xQyxLQUFLO29DQUNoQztvQ0FFQW9DLFFBQVFlLEdBQUcsQ0FBQztvQ0FDWixPQUFPO2dDQUNULEVBQUUsT0FBT2QsT0FBTztvQ0FDZEQsUUFBUUMsS0FBSyxDQUFDLGFBQWFBO29DQUMzQixPQUFPO2dDQUNUOzRCQUNGOzRCQUdBLE1BQU1xRyxzQkFBc0I7Z0NBQzFCLE9BQU8sSUFBSSxDQUFDRixrQkFBa0I7NEJBQ2hDOzRCQUdBLE1BQU1HLGNBQWNDLFdBQVcsRUFBRTtnQ0FDL0IsSUFBSTtvQ0FDRixNQUFNNUssUUFBQVUsT0FBTyxDQUFDNEosR0FBRyxDQUFDO3dDQUNoQkwsS0FBSzNKLFFBQUF3QyxNQUFNLENBQUN3RixZQUFZLENBQUNXLGVBQWU7d0NBQ3hDakgsT0FBTzRJLFlBQVlDLFFBQVE7b0NBQzdCO2dDQUNGLEVBQUUsT0FBT3hHLE9BQU87b0NBQ2RELFFBQVFDLEtBQUssQ0FBQyxXQUFXQTtnQ0FDM0I7NEJBQ0Y7NEJBR0EsTUFBTXlGLGlCQUFpQmMsV0FBVyxFQUFFO2dDQUNsQyxJQUFJO29DQUNGLE1BQU1sRyxTQUFTLE1BQU0xRSxRQUFBVSxPQUFPLENBQUNzSixHQUFHLENBQUM7d0NBQy9CQyxLQUFLM0osUUFBQXdDLE1BQU0sQ0FBQ3dGLFlBQVksQ0FBQ1csZUFBZTtvQ0FDMUM7b0NBRUEsSUFBSXZFLFVBQVVBLE9BQU8xQyxLQUFLLEVBQ3hCLE9BQU84SSxTQUFTcEcsT0FBTzFDLEtBQUssTUFBTTRJO29DQUdwQyxPQUFPO2dDQUNULEVBQUUsT0FBT3ZHLE9BQU87b0NBQ2RELFFBQVFDLEtBQUssQ0FBQyxhQUFhQTtvQ0FDM0IsT0FBTztnQ0FDVDs0QkFDRjs0QkFHQSxNQUFNMEcsaUJBQWlCbkUsVUFBVSxFQUFFVyxnQkFBZ0IsS0FBSyxFQUFFO2dDQUN4RCxPQUFPLElBQUkzRCxRQUFTQyxDQUFBQTtvQ0FDbEIsSUFBSTBELGVBQWU7d0NBRWpCbkgsU0FBQU0sT0FBTSxDQUFDVyxJQUFJLENBQUM7NENBQ1YySixLQUFLOzRDQUNMQyxRQUFRO2dEQUNOckUsWUFBWUE7Z0RBQ1pXLGVBQWU7NENBQ2pCO3dDQUNGO3dDQUNBMUQsUUFBUTt3Q0FDUjtvQ0FDRjtvQ0FHQXpELFNBQUFNLE9BQU0sQ0FBQ1csSUFBSSxDQUFDO3dDQUNWMkosS0FBSzt3Q0FDTEMsUUFBUTs0Q0FDTnJFLFlBQVlBOzRDQUNaVyxlQUFlO3dDQUNqQjtvQ0FDRjtvQ0FDQTFELFFBQVE7Z0NBQ1Y7NEJBQ0Y7NEJBR0EsTUFBTXFILDRCQUE0QjtnQ0FDaEMsSUFBSTtvQ0FFRixNQUFNeEcsU0FBUyxNQUFNLElBQUksQ0FBQzZFLFdBQVcsQ0FBQztvQ0FFdEMsSUFBSTdFLE9BQU9WLE9BQU8sSUFBSVUsT0FBTzRDLFNBQVMsSUFBSTVDLE9BQU9rQyxVQUFVLEVBQUU7d0NBRTNELE1BQU1pRCxVQUFVLE1BQU0sSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ3BGLE9BQU9rQyxVQUFVLENBQUNFLFlBQVk7d0NBQzFFLE1BQU1TLGdCQUFnQjdDLE9BQU82QyxhQUFhO3dDQUUxQ25ELFFBQVFlLEdBQUcsQ0FBQyxtREFBbUQwRSxVQUFVLHFCQUFxQnRDO3dDQUc5RixJQUFJc0MsV0FBVyxDQUFDdEMsZUFBZTs0Q0FDN0JuRCxRQUFRZSxHQUFHLENBQUM7NENBQ1osT0FBTztnREFDTGdHLGdCQUFnQjs0Q0FDbEI7d0NBQ0Y7d0NBR0EsSUFBSTVELGVBQWU7NENBRWpCLE1BQU0sSUFBSSxDQUFDNkQsdUJBQXVCOzRDQUdsQ2hMLFNBQUFNLE9BQU0sQ0FBQ1csSUFBSSxDQUFDO2dEQUNWMkosS0FBSztnREFDTEMsUUFBUTtvREFDTnJFLFlBQVlsQyxPQUFPa0MsVUFBVTtvREFDN0JXLGVBQWU7Z0RBQ2pCOzRDQUNGOzRDQUVBLE9BQU87Z0RBQ0w0RCxnQkFBZ0I7Z0RBQ2hCdkUsWUFBWWxDLE9BQU9rQyxVQUFVOzRDQUMvQjt3Q0FDRjtvQ0FDRjtvQ0FFQSxPQUFPO3dDQUNMdUUsZ0JBQWdCO29DQUNsQjtnQ0FFRixFQUFFLE9BQU85RyxPQUFPO29DQUNkRCxRQUFRQyxLQUFLLENBQUMsYUFBYUE7b0NBQzNCLE9BQU87d0NBQ0w4RyxnQkFBZ0I7d0NBQ2hCOUcsT0FBT0EsTUFBTU8sT0FBTztvQ0FDdEI7Z0NBQ0Y7NEJBQ0Y7NEJBR0EsTUFBTXdHLDBCQUEwQjtnQ0FDOUIsSUFBSTtvQ0FDRixNQUFNcEwsUUFBQVUsT0FBTyxDQUFDNEosR0FBRyxDQUFDO3dDQUNoQkwsS0FBSzNKLFFBQUF3QyxNQUFNLENBQUN3RixZQUFZLENBQUNZLHFCQUFxQjt3Q0FDOUNsSCxPQUFPO29DQUNUO2dDQUNGLEVBQUUsT0FBT3FDLE9BQU87b0NBQ2RELFFBQVFDLEtBQUssQ0FBQyxhQUFhQTtnQ0FDN0I7NEJBQ0Y7NEJBR0EsTUFBTWdILHVCQUF1QjtnQ0FDM0IsSUFBSTtvQ0FDRixNQUFNckwsUUFBQVUsT0FBTyxDQUFDNEssTUFBTSxDQUFDO3dDQUNuQnJCLEtBQUszSixRQUFBd0MsTUFBTSxDQUFDd0YsWUFBWSxDQUFDWSxxQkFBcUI7b0NBQ2hEO2dDQUNGLEVBQUUsT0FBTzdFLE9BQU87b0NBQ2RELFFBQVFDLEtBQUssQ0FBQyxlQUFlQTtnQ0FDL0I7NEJBQ0Y7NEJBR0EsTUFBTWtILHdCQUF3QjtnQ0FDNUIsSUFBSTtvQ0FDRixNQUFNN0csU0FBUyxNQUFNMUUsUUFBQVUsT0FBTyxDQUFDc0osR0FBRyxDQUFDO3dDQUMvQkMsS0FBSzNKLFFBQUF3QyxNQUFNLENBQUN3RixZQUFZLENBQUNZLHFCQUFxQjtvQ0FDaEQ7b0NBRUEsT0FBT3hFLFVBQVVBLEFBQWlCLFdBQWpCQSxPQUFPMUMsS0FBSztnQ0FDL0IsRUFBRSxPQUFPcUMsT0FBTztvQ0FDZEQsUUFBUUMsS0FBSyxDQUFDLGVBQWVBO29DQUM3QixPQUFPO2dDQUNUOzRCQUNGOzRCQUdBLE1BQU1tSCxtQkFBbUI7Z0NBQ3ZCLElBQUk7b0NBQ0YsTUFBTXhMLFFBQUFVLE9BQU8sQ0FBQzRLLE1BQU0sQ0FBQzt3Q0FDbkJyQixLQUFLM0osUUFBQXdDLE1BQU0sQ0FBQ3dGLFlBQVksQ0FBQ1Usa0JBQWtCO29DQUM3QztvQ0FFQSxNQUFNaEosUUFBQVUsT0FBTyxDQUFDNEssTUFBTSxDQUFDO3dDQUNuQnJCLEtBQUszSixRQUFBd0MsTUFBTSxDQUFDd0YsWUFBWSxDQUFDVyxlQUFlO29DQUMxQztvQ0FFQSxNQUFNakosUUFBQVUsT0FBTyxDQUFDNEssTUFBTSxDQUFDO3dDQUNuQnJCLEtBQUszSixRQUFBd0MsTUFBTSxDQUFDd0YsWUFBWSxDQUFDWSxxQkFBcUI7b0NBQ2hEO29DQUVBOUUsUUFBUWUsR0FBRyxDQUFDO2dDQUNkLEVBQUUsT0FBT2QsT0FBTztvQ0FDZEQsUUFBUUMsS0FBSyxDQUFDLGFBQWFBO2dDQUM3Qjs0QkFDRjt3QkFDRjt3QkFBQyxJQUFBc0QsV0FBQUMsT0FBQUEsQ0FBQUEsVUFBQSxHQUVjLElBQUl5Qjs7Ozs7Ozs7d0JDblZuQixJQUFBckosVUFBQUMsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUMsV0FBQUYsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQWtKLGNBQUFuSix1QkFBQU0sb0JBQUE7d0JBQ0EsSUFBQUQsVUFBQUMsb0JBQUE7d0JBQXFDLFNBQUFOLHVCQUFBTyxDQUFBOzRCQUFBLE9BQUFBLEtBQUFBLEVBQUFDLFVBQUEsR0FBQUQsSUFBQTtnQ0FBQUUsU0FBQUY7NEJBQUE7d0JBQUE7d0JBS3JDLE1BQU1pTDs0QkFPSkMsWUFBWXpCLEdBQUcsRUFBRTtnQ0FDZixPQUFPLElBQUlyRyxRQUFTQyxDQUFBQTtvQ0FDbEIxRCxTQUFBTyxPQUFPLENBQUNzSixHQUFHLENBQUM7d0NBQ1ZDLEtBQUtBO3dDQUNMakcsU0FBVVosQ0FBQUEsT0FBU1MsUUFBUVQ7d0NBQzNCbUIsTUFBTUEsSUFBTVYsUUFBUTtvQ0FDdEI7Z0NBQ0Y7NEJBQ0Y7NEJBUUE4SCxZQUFZMUIsR0FBRyxFQUFFakksS0FBSyxFQUFFO2dDQUN0QixPQUFPLElBQUk0QixRQUFRLENBQUNDLFNBQVNDO29DQUMzQjNELFNBQUFPLE9BQU8sQ0FBQzRKLEdBQUcsQ0FBQzt3Q0FDVkwsS0FBS0E7d0NBQ0xqSSxPQUFPQTt3Q0FDUGdDLFNBQVNIO3dDQUNUVSxNQUFNQSxDQUFDcUgsS0FBS3pILE9BQVNMLE9BQU8sSUFBSVEsTUFBTSxDQUFDLHdCQUF3QixFQUFFMkYsSUFBSSxHQUFHLEVBQUUyQixJQUFJLEVBQUUsRUFBRXpILEtBQUssQ0FBQyxDQUFDO29DQUMzRjtnQ0FDRjs0QkFDRjs0QkFPQTBILGtCQUFrQjtnQ0FDaEIsT0FBTyxJQUFJakksUUFBU0MsQ0FBQUE7b0NBQ2xCN0QsUUFBQVUsT0FBTSxDQUFDb0wsU0FBUyxDQUFDO3dDQUNmOUgsU0FBUyxPQUFPWjs0Q0FDZCxJQUFJMkksU0FBUzNJLE9BQU9BLEtBQUsySSxNQUFNLEdBQUc7NENBQ2xDLElBQUlBLEFBQVcsU0FBWEEsUUFBaUI7Z0RBQ25CM0gsUUFBUTRILElBQUksQ0FBQztnREFDYkQsU0FBUzs0Q0FDWDs0Q0FFQSxJQUFJLENBQUNBLFFBQVE7Z0RBQ1gzSCxRQUFRQyxLQUFLLENBQUM7Z0RBQ2RSLFFBQVE7Z0RBQ1I7NENBQ0Y7NENBRUEsSUFBSTtnREFFRixNQUFNLElBQUksQ0FBQzhILFdBQVcsQ0FBQ3JMLFFBQUF3QyxNQUFNLENBQUN3RixZQUFZLENBQUNDLFNBQVMsRUFBRXdEO2dEQUN0RDNILFFBQVFlLEdBQUcsQ0FBQyx3QkFBd0I0RztnREFDcENsSSxRQUFRa0k7NENBQ1YsRUFBRSxPQUFPdkwsR0FBRztnREFDVjRELFFBQVFDLEtBQUssQ0FBQyw0Q0FBNEM3RDtnREFDMURxRCxRQUFROzRDQUNWO3dDQUNGO3dDQUNBVSxNQUFNQSxDQUFDcUgsS0FBS3pIOzRDQUNWQyxRQUFRQyxLQUFLLENBQUM7NENBQ2RSLFFBQVE7d0NBQ1Y7b0NBQ0Y7Z0NBQ0Y7NEJBQ0Y7NEJBT0EsTUFBTW9JLGNBQWM3RyxRQUFRLEVBQUU7Z0NBQzVCLElBQUksQ0FBQ0EsWUFBYSxDQUFDQSxTQUFTOEcsRUFBRSxJQUFJLENBQUM5RyxTQUFTK0csV0FBWSxFQUN0RCxNQUFNLElBQUk3SCxNQUFNO2dDQUdsQixNQUFNOEgsaUJBQWlCO29DQUNyQkYsSUFBSTlHLFNBQVM4RyxFQUFFLElBQUk5RyxTQUFTK0csV0FBVztvQ0FDdkNBLGFBQWEvRyxTQUFTK0csV0FBVztvQ0FDakM1RyxVQUFVSCxTQUFTRyxRQUFRO29DQUMzQjhHLGNBQWNqSCxTQUFTaUgsWUFBWSxJQUFJO2dDQUN6QztnQ0FFQSxNQUFNLElBQUksQ0FBQ1YsV0FBVyxDQUFDckwsUUFBQXdDLE1BQU0sQ0FBQ3dGLFlBQVksQ0FBQ0csU0FBUyxFQUFFL0UsS0FBS0MsU0FBUyxDQUFDeUk7Z0NBQ3JFaEksUUFBUWUsR0FBRyxDQUFDLDRDQUE0Q2lIO2dDQUN4RCxPQUFPQTs0QkFDVDs0QkFRQSxNQUFNRSx1QkFBdUJDLFlBQVksS0FBSyxFQUFFO2dDQUU5Q25JLFFBQVFlLEdBQUcsQ0FBQztnQ0FDWixNQUFNcUgsdUJBQXVCLE1BQU0sSUFBSSxDQUFDZCxXQUFXLENBQUNwTCxRQUFBd0MsTUFBTSxDQUFDd0YsWUFBWSxDQUFDRyxTQUFTO2dDQUNqRixJQUFJK0Qsc0JBQXNCO29DQUN4QixJQUFJO3dDQUNGLE1BQU1wSCxXQUFXMUIsS0FBSytHLEtBQUssQ0FBQytCO3dDQUM1QixJQUFJcEgsWUFBWUEsU0FBUzhHLEVBQUUsRUFDekIsSUFBSUssV0FBVzs0Q0FDYm5JLFFBQVFlLEdBQUcsQ0FBQzs0Q0FDWixJQUFJO2dEQUNGLE1BQU1zSCxhQUFhLE1BQU1yRCxZQUFBMUksT0FBVSxDQUFDd0UsY0FBYyxDQUFDRSxTQUFTOEcsRUFBRTtnREFDOUQsSUFBSU8sY0FBY0EsV0FBV3pJLE9BQU8sRUFBRTtvREFDcENJLFFBQVFlLEdBQUcsQ0FBQztvREFDWixPQUFPLE1BQU0sSUFBSSxDQUFDOEcsYUFBYSxDQUFDUSxXQUFXckgsUUFBUTtnREFDckQ7Z0RBQ0VoQixRQUFRNEgsSUFBSSxDQUFDLDRFQUE0RVMsYUFBYUEsV0FBV3BJLEtBQUssR0FBRztnREFDekgsT0FBT2U7NENBRVgsRUFBRSxPQUFPc0gsV0FBVztnREFDbEJ0SSxRQUFRQyxLQUFLLENBQUMsK0RBQStEcUk7Z0RBQzdFLE9BQU90SDs0Q0FDVDt3Q0FDRixPQUFPOzRDQUNMaEIsUUFBUWUsR0FBRyxDQUFDLHlEQUF5REM7NENBQ3JFLE9BQU9BO3dDQUNUO29DQUVKLEVBQUUsT0FBTzVFLEdBQUc7d0NBRVY0RCxRQUFRNEgsSUFBSSxDQUFDO29DQUNmO2dDQUNGO2dDQUVBNUgsUUFBUWUsR0FBRyxDQUFDO2dDQUdaLE1BQU1VLFdBQVcsTUFBTSxJQUFJLENBQUNnRyxlQUFlO2dDQUMzQyxJQUFJLENBQUNoRyxVQUFVO29DQUNiekIsUUFBUUMsS0FBSyxDQUFDO29DQUNkLE9BQU87Z0NBQ1Q7Z0NBQ0FELFFBQVFlLEdBQUcsQ0FBQyxDQUFDLDZCQUE2QixFQUFFVSxVQUFVO2dDQUV0RCxJQUFJO29DQUVGekIsUUFBUWUsR0FBRyxDQUFDO29DQUNaLE1BQU13SCxZQUFZLE1BQU12RCxZQUFBMUksT0FBVSxDQUFDa0YsdUJBQXVCLENBQUNDO29DQUMzRHpCLFFBQVFlLEdBQUcsQ0FBQyxxREFBcUR6QixLQUFLQyxTQUFTLENBQUNnSjtvQ0FHaEYsSUFBSUEsYUFBYUEsVUFBVTVHLGFBQWEsSUFBSTRHLFVBQVV2SCxRQUFRLEVBQUU7d0NBRTlEaEIsUUFBUWUsR0FBRyxDQUFDO3dDQUNaLE9BQU8sTUFBTSxJQUFJLENBQUM4RyxhQUFhLENBQUNVLFVBQVV2SCxRQUFRO29DQUNwRDtvQ0FHQWhCLFFBQVFlLEdBQUcsQ0FBQztvQ0FDWixNQUFNeUgsZUFBZSxNQUFNeEQsWUFBQTFJLE9BQVUsQ0FBQ3VGLG9CQUFvQixDQUFDSjtvQ0FDM0R6QixRQUFRZSxHQUFHLENBQUMsd0RBQXdEekIsS0FBS0MsU0FBUyxDQUFDaUo7b0NBR25GLElBQUlBLGdCQUFnQkEsYUFBYTVJLE9BQU8sSUFBSTRJLGFBQWF4SCxRQUFRLEVBQUU7d0NBQ2pFaEIsUUFBUWUsR0FBRyxDQUFDO3dDQUNaLE9BQU8sTUFBTSxJQUFJLENBQUM4RyxhQUFhLENBQUNXLGFBQWF4SCxRQUFRO29DQUN2RDtvQ0FDRWhCLFFBQVFDLEtBQUssQ0FBQyx3REFBd0R1SSxlQUFlQSxhQUFhaEksT0FBTyxHQUFHO29DQUM1RyxPQUFPO2dDQUVYLEVBQUUsT0FBT3BFLEdBQUc7b0NBQ1Y0RCxRQUFRQyxLQUFLLENBQUMsdUZBQXVGN0Q7b0NBQ3JHLE9BQU87Z0NBQ1Q7NEJBQ0Y7NEJBUUEsTUFBTXFNLG9CQUFvQkMsTUFBTSxFQUFFO2dDQUNoQyxJQUFJLEFBQWtCLFlBQWxCLE9BQU9BLFVBQXVCQyxNQUFNRCxTQUFTO29DQUMvQzFJLFFBQVE0SCxJQUFJLENBQUMsaUVBQWlFYztvQ0FDOUUsT0FBTztnQ0FDVDtnQ0FFQSxJQUFJO29DQUNGLE1BQU1FLG9CQUFvQixNQUFNLElBQUksQ0FBQ3RCLFdBQVcsQ0FBQ3BMLFFBQUF3QyxNQUFNLENBQUN3RixZQUFZLENBQUNJLGNBQWM7b0NBQ25GLElBQUl1RSxnQkFBZ0JuQyxTQUFTa0Msc0JBQXNCO29DQUVuRCxNQUFNRSxZQUFZRCxnQkFBZ0JIO29DQUVsQyxNQUFNLElBQUksQ0FBQ25CLFdBQVcsQ0FBQ3JMLFFBQUF3QyxNQUFNLENBQUN3RixZQUFZLENBQUNJLGNBQWMsRUFBRXdFLFVBQVVyQyxRQUFRO29DQUU3RXpHLFFBQVFlLEdBQUcsQ0FBQyxDQUFDLHdDQUF3QyxFQUFFMkgsT0FBTyxhQUFhLEVBQUVJLFdBQVc7b0NBQ3hGLE9BQU9BO2dDQUNULEVBQUUsT0FBTzFNLEdBQUc7b0NBQ1Y0RCxRQUFRQyxLQUFLLENBQUMsNkRBQTZEN0Q7b0NBQzNFLE9BQU87Z0NBQ1Q7NEJBQ0Y7NEJBT0EsTUFBTTJNLG1CQUFtQjtnQ0FDdkIvSSxRQUFRZSxHQUFHLENBQUM7Z0NBR1osTUFBTWlJLGVBQWUsTUFBTSxJQUFJLENBQUMxQixXQUFXLENBQUNwTCxRQUFBd0MsTUFBTSxDQUFDd0YsWUFBWSxDQUFDRyxTQUFTO2dDQUN6RSxJQUFJLENBQUMyRSxjQUFjO29DQUNqQmhKLFFBQVE0SCxJQUFJLENBQUM7b0NBQ2IsT0FBTztnQ0FDVDtnQ0FFQSxJQUFJNUc7Z0NBQ0osSUFBSTtvQ0FDRkEsV0FBVzFCLEtBQUsrRyxLQUFLLENBQUMyQztvQ0FDdEIsSUFBSSxDQUFDaEksWUFBWSxDQUFDQSxTQUFTOEcsRUFBRSxFQUFFO3dDQUM3QjlILFFBQVE0SCxJQUFJLENBQUM7d0NBQ2IsT0FBTztvQ0FDVDtnQ0FDRixFQUFFLE9BQU14TCxHQUFHO29DQUNUNEQsUUFBUTRILElBQUksQ0FBQztvQ0FDYixPQUFPO2dDQUNUO2dDQUdBLE1BQU1nQixvQkFBb0IsTUFBTSxJQUFJLENBQUN0QixXQUFXLENBQUNwTCxRQUFBd0MsTUFBTSxDQUFDd0YsWUFBWSxDQUFDSSxjQUFjO2dDQUNuRixNQUFNMkUsZUFBZXZDLFNBQVNrQztnQ0FFOUIsSUFBSUQsTUFBTU0sZUFBZTtvQ0FDdkJqSixRQUFRZSxHQUFHLENBQUM7b0NBQ1osT0FBTztnQ0FDVDtnQ0FFQWYsUUFBUWUsR0FBRyxDQUFDLENBQUMsb0JBQW9CLEVBQUVrSSxhQUFhLHlCQUF5QixFQUFFakksU0FBUzhHLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0NBR3BHLE1BQU14SCxTQUFTLE1BQU0wRSxZQUFBMUksT0FBVSxDQUFDbUUsVUFBVSxDQUFDTyxTQUFTOEcsRUFBRSxFQUFFbUI7Z0NBR3hELElBQUkzSSxPQUFPVixPQUFPLEVBQUU7b0NBQ2xCSSxRQUFRZSxHQUFHLENBQUM7b0NBR1osTUFBTW1JLHFCQUFxQnhDLFNBQVMsTUFBTSxJQUFJLENBQUNZLFdBQVcsQ0FBQ3BMLFFBQUF3QyxNQUFNLENBQUN3RixZQUFZLENBQUNNLFlBQVksTUFBTTtvQ0FDakcsTUFBTTJFLHFCQUFxQkQscUJBQXFCRDtvQ0FDaEQsTUFBTSxJQUFJLENBQUMxQixXQUFXLENBQUNyTCxRQUFBd0MsTUFBTSxDQUFDd0YsWUFBWSxDQUFDTSxZQUFZLEVBQUUyRSxtQkFBbUIxQyxRQUFRO29DQUNwRnpHLFFBQVFlLEdBQUcsQ0FBQyxDQUFDLDZDQUE2QyxFQUFFbUksbUJBQW1CLEdBQUcsRUFBRUQsYUFBYSxHQUFHLEVBQUVFLG9CQUFvQjtvQ0FHMUgsTUFBTSxJQUFJLENBQUM1QixXQUFXLENBQUNyTCxRQUFBd0MsTUFBTSxDQUFDd0YsWUFBWSxDQUFDSSxjQUFjLEVBQUU7b0NBQzNEdEUsUUFBUWUsR0FBRyxDQUFDO29DQUVaLE9BQU87Z0NBQ1Q7Z0NBQ0VmLFFBQVFDLEtBQUssQ0FBQyw4QkFBOEJLLE9BQU9MLEtBQUs7Z0NBQ3hELE9BQU87NEJBRVg7NEJBT0EsTUFBTW1KLHNCQUFzQjtnQ0FDMUJwSixRQUFRZSxHQUFHLENBQUM7Z0NBRVosSUFBSTtvQ0FFRmYsUUFBUWUsR0FBRyxDQUFDO29DQUNaLE1BQU1zSSxtQkFBbUIsTUFBTSxJQUFJLENBQUNOLGdCQUFnQjtvQ0FFcEQsSUFBSSxDQUFDTSxrQkFBa0I7d0NBR3JCLE1BQU1DLFdBQVc7d0NBQ2pCdEosUUFBUUMsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFcUosVUFBVTt3Q0FDekMsT0FBTzs0Q0FBRTFKLFNBQVM7NENBQU9ZLFNBQVM4STt3Q0FBUztvQ0FDN0M7b0NBQ0F0SixRQUFRZSxHQUFHLENBQUM7b0NBSVpmLFFBQVFlLEdBQUcsQ0FBQztvQ0FDWixNQUFNQyxXQUFXLE1BQU0sSUFBSSxDQUFDa0gsc0JBQXNCLENBQUM7b0NBRW5ELElBQUlsSCxZQUFZQSxTQUFTOEcsRUFBRSxFQUFFO3dDQUMzQjlILFFBQVFlLEdBQUcsQ0FBQywrRUFBK0VDO3dDQUczRixJQUFJQSxBQUEwQnVJLFdBQTFCdkksU0FBU2lILFlBQVksRUFBZ0I7NENBQ3ZDLE1BQU0sSUFBSSxDQUFDVixXQUFXLENBQUNyTCxRQUFBd0MsTUFBTSxDQUFDd0YsWUFBWSxDQUFDTSxZQUFZLEVBQUV4RCxTQUFTaUgsWUFBWSxDQUFDeEIsUUFBUTs0Q0FDdkZ6RyxRQUFRZSxHQUFHLENBQUMsQ0FBQywwREFBMEQsRUFBRUMsU0FBU2lILFlBQVksRUFBRTt3Q0FDbEc7d0NBRUFqSSxRQUFRZSxHQUFHLENBQUM7d0NBQ1osT0FBTzs0Q0FBRW5CLFNBQVM7NENBQU1ZLFNBQVM7d0NBQVE7b0NBQzNDO29DQUFPO3dDQUNMLE1BQU04SSxXQUFXO3dDQUNqQnRKLFFBQVFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRXFKLFVBQVU7d0NBQ3pDLE9BQU87NENBQUUxSixTQUFTOzRDQUFPWSxTQUFTOEk7d0NBQVM7b0NBQzdDO2dDQUNGLEVBQUUsT0FBT2xOLEdBQUc7b0NBQ1Y0RCxRQUFRQyxLQUFLLENBQUMsa0VBQWtFN0Q7b0NBQ2hGLE9BQU87d0NBQUV3RCxTQUFTO3dDQUFPWSxTQUFTO29DQUFjO2dDQUNsRDs0QkFDRjt3QkFDRjt3QkFBQyxJQUFBK0MsV0FBQUMsT0FBQUEsQ0FBQUEsVUFBQSxHQUVjLElBQUk2RDs7Ozs7Ozs7Ozs7Ozs7b0JDdFVuQm1DLG9CQUFvQixFQUFFLEdBQUcsSUFBTzs7O29CQ0FoQ0Esb0JBQW9CLElBQUksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JDb1B6QixJQUFBNU4sVUFBQUMsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUMsV0FBQUYsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUUsV0FBQUgsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUcsV0FBQUosdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQTJOLGVBQUE1Tix1QkFBQU0sb0JBQUE7d0JBQ0EsSUFBQXVOLGlCQUFBN04sdUJBQUFNLG9CQUFBO3dCQUNBLElBQUFELFVBQUFDLG9CQUFBO3dCQUFnRCxTQUFBTix1QkFBQU8sQ0FBQTs0QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7Z0NBQUFFLFNBQUFGOzRCQUFBO3dCQUFBO3dCQUVoRCxNQUFNdU4seUJBQTBCOUQsQ0FBQUEsTUFBUSxJQUFJckcsUUFBU0MsQ0FBQUE7Z0NBQ25EbUssU0FBQUEsT0FBTyxDQUFDaEUsR0FBRyxDQUFDO29DQUFFQztvQ0FBS2pHLFNBQVVaLENBQUFBLE9BQVNTLFFBQVFUO29DQUFPbUIsTUFBTUEsSUFBTVYsUUFBUTtnQ0FBTTs0QkFDakY7d0JBRUEsTUFBTW9LLHlCQUF5QkEsQ0FBQ2hFLEtBQUtqSSxRQUFVLElBQUk0QixRQUFRLENBQUNDLFNBQVNDO2dDQUNuRWtLLFNBQUFBLE9BQU8sQ0FBQzFELEdBQUcsQ0FBQztvQ0FBRUw7b0NBQUtqSTtvQ0FBT2dDLFNBQVNIO29DQUFTVSxNQUFNQSxDQUFDcUgsS0FBS3pILE9BQVNMLE9BQU8sSUFBSVEsTUFBTSxDQUFDLDRCQUE0QixFQUFFMkYsSUFBSSxZQUFZLEVBQUU5RixLQUFLLEVBQUUsRUFBRXlILEtBQUs7Z0NBQUc7NEJBQ3RKO3dCQUFHLElBQUFqRSxXQUFBQyxRQUFBbEgsT0FBQSxHQUVZOzRCQUNiMEMsTUFBTTtnQ0FDSjhLLE1BQU07Z0NBQ041SSxTQUFTO2dDQUNUUCxZQUFZO2dDQUNab0osVUFBVTtnQ0FDVkMsa0JBQWtCO2dDQUNsQkMscUJBQXFCO2dDQUNyQkMsUUFBUTtvQ0FDTjt3Q0FBRUMsU0FBUzt3Q0FBT0Msa0JBQWtCO3dDQUFHQyxjQUFjO29DQUFXO29DQUNoRTt3Q0FBRUYsU0FBUzt3Q0FBT0Msa0JBQWtCO3dDQUFHQyxjQUFjO29DQUFXO2lDQUNqRTtnQ0FDREMsbUJBQW1CO2dDQUNuQjlILFlBQVksQ0FBQzs0QkFDZjs0QkFFQStIO2dDQUNFLElBQUksQ0FBQ0MsZ0JBQWdCO2dDQUNyQixJQUFJLENBQUNDLFVBQVU7Z0NBR2ZDLFlBQVk7b0NBQ1YsTUFBTSxJQUFJLENBQUNDLGlCQUFpQjtnQ0FDOUIsR0FBR2pNLFFBQUFBLE1BQU0sQ0FBQytFLEdBQUcsQ0FBQ0ssYUFBYTtnQ0FHM0I0RyxZQUFZLElBQUksQ0FBQ0QsVUFBVSxFQUFFO2dDQUc3QkMsWUFBWSxJQUFJLENBQUNFLGlCQUFpQixDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUFHO2dDQUcvQyxJQUFJLENBQUNaLG1CQUFtQixHQUFHUyxZQUFZO29DQUNyQyxJQUFJLENBQUNJLGVBQWU7Z0NBQ3RCLEdBQUdwTSxRQUFBQSxNQUFNLENBQUMrRSxHQUFHLENBQUNPLHFCQUFxQjtnQ0FFbkNoRSxRQUFRZSxHQUFHLENBQUMsd0NBQXdDckMsUUFBQUEsTUFBTSxDQUFDK0UsR0FBRyxDQUFDTyxxQkFBcUIsRUFBRTs0QkFDeEY7NEJBRUEsTUFBTStHO2dDQUVKLE1BQU0sSUFBSSxDQUFDQyxvQkFBb0I7Z0NBRy9CaEwsUUFBUWUsR0FBRyxDQUFDO2dDQUNaLE1BQU0sSUFBSSxDQUFDK0osZUFBZTs0QkFDNUI7NEJBR0EsTUFBTUE7Z0NBQ0o5SyxRQUFRZSxHQUFHLENBQUM7Z0NBRVosSUFBSTtvQ0FDRmYsUUFBUWUsR0FBRyxDQUFDO29DQUNaLE1BQU1ULFNBQVMsTUFBTTJFLGVBQUFBLE9BQWEsQ0FBQ0UsV0FBVyxDQUFDO29DQUUvQ25GLFFBQVFlLEdBQUcsQ0FBQywrQkFBK0J6QixLQUFLQyxTQUFTLENBQUNlO29DQUUxRCxJQUFJQSxPQUFPVixPQUFPLElBQUlVLE9BQU80QyxTQUFTLElBQUksQ0FBQzVDLE9BQU9pRixPQUFPLEVBQUU7d0NBQ3pEdkYsUUFBUWUsR0FBRyxDQUFDLDRCQUE0QlQsT0FBT2tDLFVBQVU7d0NBR3pELElBQUk7NENBQ0YsTUFBTXlDLGVBQUFBLE9BQWEsQ0FBQ1UsY0FBYyxDQUFDckYsT0FBT2tDLFVBQVU7NENBQ3BEeEMsUUFBUWUsR0FBRyxDQUFDLHdDQUF3Q3pCLEtBQUtDLFNBQVMsQ0FBQ2UsT0FBT2tDLFVBQVU7d0NBQ3RGLEVBQUUsT0FBT3BHLEdBQUc7NENBQ1Y0RCxRQUFRQyxLQUFLLENBQUMsc0NBQXNDN0Q7d0NBQ3REO3dDQUdBLElBQUlrRSxPQUFPNkMsYUFBYSxFQUFFOzRDQUN4Qm5ELFFBQVFlLEdBQUcsQ0FBQzs0Q0FDWmtLLFFBQUFBLE9BQU0sQ0FBQ0MsT0FBTyxDQUFDO2dEQUNidEUsS0FBSztnREFDTEMsUUFBUTtvREFDTnJFLFlBQVlsQyxPQUFPa0MsVUFBVTtvREFDN0JXLGVBQWU7Z0RBQ2pCOzRDQUNGO3dDQUNGLE9BQU8sSUFBSSxDQUFDN0MsT0FBT21GLE9BQU8sRUFBRTs0Q0FFMUJ6RixRQUFRZSxHQUFHLENBQUM7NENBQ1prSyxRQUFBQSxPQUFNLENBQUNoTyxJQUFJLENBQUM7Z0RBQ1YySixLQUFLO2dEQUNMQyxRQUFRO29EQUNOckUsWUFBWWxDLE9BQU9rQyxVQUFVO29EQUM3QlcsZUFBZTtnREFDakI7NENBQ0Y7d0NBQ0Y7b0NBQ0YsT0FBTyxJQUFJN0MsT0FBT2lGLE9BQU8sRUFDdkJ2RixRQUFRZSxHQUFHLENBQUM7eUNBQ1AsSUFBS1QsT0FBT1YsT0FBTyxFQUd4QkksUUFBUWUsR0FBRyxDQUFDO3lDQUZaZixRQUFRZSxHQUFHLENBQUMsK0JBQStCVCxPQUFPTCxLQUFLO2dDQUkzRCxFQUFFLE9BQU9BLE9BQU87b0NBQ2RELFFBQVFDLEtBQUssQ0FBQyx3Q0FBd0NBO29DQUN0REQsUUFBUUMsS0FBSyxDQUFDLHNDQUFzQ0EsTUFBTU8sT0FBTztvQ0FDakVSLFFBQVFDLEtBQUssQ0FBQyxvQ0FBb0NBLE1BQU1xRCxLQUFLO2dDQUMvRDs0QkFDRjs0QkFHQSxNQUFNNkg7Z0NBQ0puTCxRQUFRZSxHQUFHLENBQUM7Z0NBRVosSUFBSSxJQUFJLENBQUN5QixVQUFVLElBQUksSUFBSSxDQUFDQSxVQUFVLENBQUNFLFlBQVksRUFBRTtvQ0FDbkQsSUFBSTt3Q0FDRixNQUFNdUMsZUFBQUEsT0FBYSxDQUFDc0IsYUFBYSxDQUFDLElBQUksQ0FBQy9ELFVBQVUsQ0FBQ0UsWUFBWTt3Q0FDOUQxQyxRQUFRZSxHQUFHLENBQUMsMkJBQTJCLElBQUksQ0FBQ3lCLFVBQVUsQ0FBQ0UsWUFBWTt3Q0FDbkUwSSxTQUFBQSxPQUFNLENBQUNDLFNBQVMsQ0FBQzs0Q0FDZjdLLFNBQVM7NENBQ1Q4SyxVQUFVO3dDQUNaO29DQUNGLEVBQUUsT0FBT2xQLEdBQUc7d0NBQ1Y0RCxRQUFRQyxLQUFLLENBQUMsb0NBQW9DN0Q7b0NBQ3BEO2dDQUNGO2dDQUdBLElBQUksQ0FBQ2tPLGlCQUFpQixHQUFHO2dDQUN6QixJQUFJLENBQUM5SCxVQUFVLEdBQUcsQ0FBQzs0QkFDckI7NEJBR0EsTUFBTStJO2dDQUNKdkwsUUFBUWUsR0FBRyxDQUFDO2dDQUdaLElBQUksQ0FBQ3VKLGlCQUFpQixHQUFHO2dDQUN6QixJQUFJLENBQUM5SCxVQUFVLEdBQUcsQ0FBQzs0QkFDckI7NEJBRUEsTUFBTWdJO2dDQUNGLE1BQU14SixXQUFXLE1BQU1xRyxhQUFBQSxPQUFXLENBQUNhLHNCQUFzQjtnQ0FFekQsSUFBSWxILFlBQVlBLFNBQVM4RyxFQUFFLEVBQUU7b0NBQ3pCLElBQUksQ0FBQzVHLE9BQU8sR0FBR0YsU0FBU0csUUFBUSxJQUFJO29DQUdwQyxNQUFNcUssZUFBZXhLLFNBQVNpSCxZQUFZLElBQUk7b0NBQzlDLElBQUl1RCxlQUFlLEdBQUc7d0NBQ2xCLE1BQU0zQix1QkFBdUJuTCxRQUFBQSxNQUFNLENBQUN3RixZQUFZLENBQUNNLFlBQVksRUFBRWdILGFBQWEvRSxRQUFRO3dDQUNwRnpHLFFBQVFlLEdBQUcsQ0FBQyxDQUFDLCtDQUErQyxFQUFFeUssY0FBYztvQ0FDaEY7Z0NBQ0o7Z0NBR0EsTUFBTUMsaUJBQWlCLE1BQU05Qix1QkFBdUJqTCxRQUFBQSxNQUFNLENBQUN3RixZQUFZLENBQUNNLFlBQVk7Z0NBQ3BGLE1BQU1rSCxjQUFjaEYsU0FBUytFLG1CQUFtQjtnQ0FFaEQsTUFBTUUsbUJBQW1CLE1BQU1oQyx1QkFBdUJqTCxRQUFBQSxNQUFNLENBQUN3RixZQUFZLENBQUNJLGNBQWM7Z0NBQ3hGLE1BQU1zSCxnQkFBZ0JsRixTQUFTaUYscUJBQXFCO2dDQUdwRCxJQUFJLENBQUNoTCxVQUFVLEdBQUcrSyxjQUFjRTtnQ0FFaEM1TCxRQUFRZSxHQUFHLENBQUMsQ0FBQyxtQ0FBbUMsRUFBRTJLLFlBQVksaUJBQWlCLEVBQUVFLGNBQWMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDakwsVUFBVSxFQUFFO2dDQUVuSSxNQUFNLElBQUksQ0FBQ2tMLGVBQWU7Z0NBQzFCLE1BQU0sSUFBSSxDQUFDYixvQkFBb0I7NEJBQ25DOzRCQUVBLE1BQU1BO2dDQUNKLElBQUk7b0NBQ0YsTUFBTWMsVUFBVSxNQUFNbkMsdUJBQXVCakwsUUFBQUEsTUFBTSxDQUFDd0YsWUFBWSxDQUFDYSxpQkFBaUI7b0NBRWxGLElBQUksQ0FBQ2lGLGdCQUFnQixHQUFHOEIsQUFBWSxZQUFaQTtvQ0FDeEI5TCxRQUFRZSxHQUFHLENBQUMsb0NBQW9DLElBQUksQ0FBQ2lKLGdCQUFnQjtnQ0FDdkUsRUFBRSxPQUFPNU4sR0FBRztvQ0FDVjRELFFBQVFDLEtBQUssQ0FBQyw0Q0FBNEM3RDtvQ0FDMUQsSUFBSSxDQUFDNE4sZ0JBQWdCLEdBQUc7Z0NBQzFCOzRCQUNGOzRCQUdBLE1BQU1XO2dDQUNKM0ssUUFBUWUsR0FBRyxDQUFDO2dDQUVaLElBQUk7b0NBRUYsTUFBTWdMLGdCQUFnQixNQUFNMUUsYUFBQUEsT0FBVyxDQUFDMEIsZ0JBQWdCO29DQUV4RCxJQUFJLENBQUNnRCxlQUFlLFlBRWxCL0wsUUFBUWUsR0FBRyxDQUFDO29DQUtkLE1BQU1DLFdBQVcsTUFBTXFHLGFBQUFBLE9BQVcsQ0FBQ2Esc0JBQXNCLENBQUM7b0NBRTFELElBQUlsSCxZQUFZQSxBQUEwQnVJLFdBQTFCdkksU0FBU2lILFlBQVksRUFBZ0I7d0NBRW5ELE1BQU00Qix5QkFBeUJBLENBQUNoRSxLQUFLakksUUFBVSxJQUFJNEIsUUFBUSxDQUFDQyxTQUFTQztnREFDbkVrSyxTQUFBQSxPQUFPLENBQUMxRCxHQUFHLENBQUM7b0RBQUVMO29EQUFLakk7b0RBQU9nQyxTQUFTSDtvREFBU1UsTUFBTUEsQ0FBQ3FILEtBQUt6SCxPQUFTTCxPQUFPLElBQUlRLE1BQU0sQ0FBQyw0QkFBNEIsRUFBRTJGLElBQUksWUFBWSxFQUFFOUYsS0FBSyxFQUFFLEVBQUV5SCxLQUFLO2dEQUFHOzRDQUN0Sjt3Q0FFQSxNQUFNcUMsdUJBQXVCbkwsUUFBQUEsTUFBTSxDQUFDd0YsWUFBWSxDQUFDTSxZQUFZLEVBQUV4RCxTQUFTaUgsWUFBWSxDQUFDeEIsUUFBUTt3Q0FDN0Z6RyxRQUFRZSxHQUFHLENBQUMsQ0FBQyx5Q0FBeUMsRUFBRUMsU0FBU2lILFlBQVksRUFBRTtvQ0FDakY7b0NBR0EsTUFBTSxJQUFJLENBQUMrRCxpQkFBaUI7Z0NBRTlCLEVBQUUsT0FBTy9MLE9BQU87b0NBQ2RELFFBQVFDLEtBQUssQ0FBQyx1Q0FBdUNBO2dDQUN2RDs0QkFDRjs0QkFHQSxNQUFNK0w7Z0NBQ0osSUFBSTtvQ0FDRixNQUFNUCxpQkFBaUIsTUFBTTlCLHVCQUF1QmpMLFFBQUFBLE1BQU0sQ0FBQ3dGLFlBQVksQ0FBQ00sWUFBWTtvQ0FDcEYsTUFBTWtILGNBQWNoRixTQUFTK0UsbUJBQW1CO29DQUVoRCxNQUFNRSxtQkFBbUIsTUFBTWhDLHVCQUF1QmpMLFFBQUFBLE1BQU0sQ0FBQ3dGLFlBQVksQ0FBQ0ksY0FBYztvQ0FDeEYsTUFBTXNILGdCQUFnQmxGLFNBQVNpRixxQkFBcUI7b0NBRXBELElBQUksQ0FBQ2hMLFVBQVUsR0FBRytLLGNBQWNFO29DQUNoQzVMLFFBQVFlLEdBQUcsQ0FBQyxDQUFDLDZCQUE2QixFQUFFMkssWUFBWSxHQUFHLEVBQUVFLGNBQWMsR0FBRyxFQUFFLElBQUksQ0FBQ2pMLFVBQVUsRUFBRTtnQ0FDbkcsRUFBRSxPQUFPdkUsR0FBRztvQ0FDVjRELFFBQVFDLEtBQUssQ0FBQyx5Q0FBeUM3RDtnQ0FDekQ7NEJBQ0Y7NEJBRUEsTUFBTXlQO2dDQUNKLE1BQU1JLFlBQVksTUFBTXRDLHVCQUF1QjtnQ0FDL0MsSUFBSXNDLFdBQVc7b0NBQ2IsSUFBSTt3Q0FDQSxNQUFNQyxlQUFlNU0sS0FBSytHLEtBQUssQ0FBQzRGO3dDQUNoQyxJQUFJLENBQUMvQixNQUFNLEdBQUdnQyxhQUFhQyxHQUFHLENBQUNDLENBQUFBOzRDQUM3QixJQUFJQSxNQUFNaEMsZ0JBQWdCLEdBQUcsS0FBS2dDLE1BQU1qQyxPQUFPLEVBQUU7Z0RBQy9DLE1BQU1rQyxnQkFBZ0JDLEtBQUtDLEdBQUcsQ0FBQyxHQUFHSCxNQUFNaEMsZ0JBQWdCLEdBQUdyRSxLQUFLRSxHQUFHO2dEQUNuRSxJQUFJb0csaUJBQWlCLEdBQUc7b0RBQ3RCRCxNQUFNakMsT0FBTyxHQUFHO29EQUNoQmlDLE1BQU1oQyxnQkFBZ0IsR0FBRztnREFDM0I7NENBQ0Y7NENBQ0EsT0FBT2dDO3dDQUNUO29DQUNKLEVBQUUsT0FBTWhRLEdBQUc7d0NBQUU0RCxRQUFRQyxLQUFLLENBQUMsNkNBQTZDN0Q7b0NBQUk7Z0NBQzlFOzRCQUNGOzRCQUVBLE1BQU1vUTtnQ0FDSixNQUFNM0MsdUJBQXVCLGVBQWV2SyxLQUFLQyxTQUFTLENBQUMsSUFBSSxDQUFDMkssTUFBTTs0QkFDeEU7NEJBRUFPO2dDQUNFLE1BQU14RSxNQUFNLElBQUlGO2dDQUNoQixNQUFNMEcsUUFBUXhHLElBQUl5RyxRQUFRLEdBQUdqRyxRQUFRLEdBQUdrRyxRQUFRLENBQUMsR0FBRztnQ0FDcEQsTUFBTUMsVUFBVTNHLElBQUk0RyxVQUFVLEdBQUdwRyxRQUFRLEdBQUdrRyxRQUFRLENBQUMsR0FBRztnQ0FDeEQsSUFBSSxDQUFDN0MsSUFBSSxHQUFHLEdBQUcyQyxNQUFNLENBQUMsRUFBRUcsU0FBUzs0QkFDbkM7NEJBRUFoQztnQ0FDRSxJQUFJa0MsWUFBWTtnQ0FDaEIsSUFBSSxDQUFDNUMsTUFBTSxDQUFDNU0sT0FBTyxDQUFDLENBQUM4TyxPQUFPVztvQ0FDMUIsSUFBSVgsTUFBTWpDLE9BQU8sSUFBSWlDLE1BQU1oQyxnQkFBZ0IsR0FBRyxHQUFHO3dDQUMvQyxNQUFNaUMsZ0JBQWdCQyxLQUFLQyxHQUFHLENBQUMsR0FBR0gsTUFBTWhDLGdCQUFnQixHQUFHckUsS0FBS0UsR0FBRzt3Q0FDbkUsSUFBSSxDQUFDaUUsTUFBTSxDQUFDNkMsTUFBTSxDQUFDMUMsWUFBWSxHQUFHLElBQUksQ0FBQzJDLFVBQVUsQ0FBQ1gsZ0JBQWdCO3dDQUNsRSxJQUFJQSxpQkFBaUIsR0FBRzs0Q0FDdEIsSUFBSSxDQUFDbkMsTUFBTSxDQUFDNkMsTUFBTSxDQUFDNUMsT0FBTyxHQUFHOzRDQUM3QixJQUFJLENBQUNELE1BQU0sQ0FBQzZDLE1BQU0sQ0FBQzNDLGdCQUFnQixHQUFHOzRDQUN0QzBDLFlBQVk7d0NBQ2Q7b0NBQ0Y7Z0NBQ0Y7Z0NBQ0EsSUFBSUEsV0FBVyxJQUFJLENBQUNOLGVBQWU7NEJBQ3JDOzRCQUVBUSxZQUFXQyxPQUFPO2dDQUNoQixNQUFNTCxVQUFVTixLQUFLWSxLQUFLLENBQUNELFVBQVU7Z0NBQ3JDLE1BQU1FLG1CQUFtQmIsS0FBS1ksS0FBSyxDQUFDRCxVQUFVO2dDQUM5QyxPQUFPLEdBQUdMLFFBQVFuRyxRQUFRLEdBQUdrRyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRVEsaUJBQWlCMUcsUUFBUSxHQUFHa0csUUFBUSxDQUFDLEdBQUcsTUFBTTs0QkFDakc7NEJBRUEsTUFBTVMsZ0JBQWVoUixDQUFDO2dDQUVsQixJQUFJLENBQUN1RSxVQUFVO2dDQUNmLE1BQU0wRyxhQUFBQSxPQUFXLENBQUNvQixtQkFBbUIsQ0FBQztnQ0FHdEMsSUFBSSxJQUFJLENBQUN1QixnQkFBZ0IsRUFDdkJxRCxTQUFBQSxPQUFRLENBQUNDLE9BQU8sQ0FBQztvQ0FDZkMsTUFBTTtnQ0FDUjtnQ0FHRixJQUFJLENBQUN4RCxRQUFRLEdBQUd1QyxLQUFLa0IsTUFBTSxLQUFLLE1BQU0sb0JBQW9CO2dDQUMxREMsV0FBVztvQ0FBUSxJQUFJLENBQUMxRCxRQUFRLEdBQUc7Z0NBQW1CLEdBQUc7NEJBQzdEOzRCQUVBLE1BQU0yRCxZQUFXWCxLQUFLLEVBQUUzUSxDQUFDO2dDQUN2QixNQUFNZ1EsUUFBUSxJQUFJLENBQUNsQyxNQUFNLENBQUM2QyxNQUFNO2dDQUNoQyxJQUFJWCxNQUFNakMsT0FBTyxFQUFFLFlBQ2pCaUIsU0FBQUEsT0FBTSxDQUFDQyxTQUFTLENBQUM7b0NBQUU3SyxTQUFTO2dDQUFVO2dDQUd4QyxJQUFJLElBQUksQ0FBQ0csVUFBVSxJQUFJLE1BQU07b0NBQzNCLElBQUksQ0FBQ0EsVUFBVSxJQUFJO29DQUNuQixNQUFNMEcsYUFBQUEsT0FBVyxDQUFDb0IsbUJBQW1CLENBQUM7b0NBQ3RDLE1BQU1rRixTQUFTckIsS0FBS1ksS0FBSyxDQUFDWixBQUFnQixPQUFoQkEsS0FBS2tCLE1BQU0sTUFBYTtvQ0FDbEQsSUFBSSxDQUFDN00sVUFBVSxJQUFJZ047b0NBQ25CLE1BQU10RyxhQUFBQSxPQUFXLENBQUNvQixtQkFBbUIsQ0FBQ2tGO29DQUN0Q3ZDLFNBQUFBLE9BQU0sQ0FBQ0MsU0FBUyxDQUFDO3dDQUFFN0ssU0FBUyxDQUFDLEdBQUcsRUFBRW1OLE9BQU8sSUFBSSxDQUFDO29DQUFDO29DQUMvQyxJQUFJLENBQUN6RCxNQUFNLENBQUM2QyxNQUFNLENBQUM1QyxPQUFPLEdBQUc7b0NBQzdCLElBQUksQ0FBQ0QsTUFBTSxDQUFDNkMsTUFBTSxDQUFDM0MsZ0JBQWdCLEdBQUdyRSxLQUFLRSxHQUFHLEtBQU07b0NBQ3BELE1BQU0sSUFBSSxDQUFDdUcsZUFBZTtnQ0FDNUIsT0FDRXBCLFNBQUFBLE9BQU0sQ0FBQ0MsU0FBUyxDQUFDO29DQUFFN0ssU0FBUztnQ0FBUzs0QkFFekM7NEJBRUFvTixVQUFTeFIsQ0FBQztnQ0FDUjZPLFFBQUFBLE9BQU0sQ0FBQ2hPLElBQUksQ0FBQztvQ0FBRTJKLEtBQUs7Z0NBQU87NEJBQzVCOzRCQUVBaUg7Z0NBRUUsSUFBSSxJQUFJLENBQUM1RCxtQkFBbUIsRUFBRTtvQ0FDNUI2RCxjQUFjLElBQUksQ0FBQzdELG1CQUFtQjtvQ0FDdEMsSUFBSSxDQUFDQSxtQkFBbUIsR0FBRztnQ0FDN0I7NEJBQ0Y7d0JBQ0YifQ==