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
                    },
                    "./src/manifest.json" (module) {
                        "use strict";
                        module.exports = JSON.parse('{"package":"com.lladlam.bandpet.9pro","name":"BandPet","versionName":"0.4.3","versionCode":43,"minPlatformVersion":1000,"icon":"/common/icon.png","deviceTypeList":["watch"],"features":[{"name":"system.router"},{"name":"system.device"},{"name":"system.fetch"},{"name":"system.storage"},{"name":"system.vibrator"},{"name":"system.prompt"}],"permissions":[{"name":"hapjs.permission.DEVICE_INFO"}],"config":{"logLevel":"debug","designWidth":336},"router":{"entry":"main","pages":{"main":{"component":"index"},"more":{"component":"index"},"leaderboard":{"component":"index"},"exchange":{"component":"index"},"market":{"component":"index"},"customize":{"component":"index"},"settings":{"component":"index"},"about":{"component":"index"},"announcement":{"component":"index"},"announcement-detail":{"component":"index"},"naming":{"component":"index"},"more-options":{"component":"index"}}},"display":{"backgroundColor":"#000000","textColor":"#ffffff"}}');
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
                        var _backInterceptor = _interopRequireDefault(__webpack_require__("./src/common/js/back-interceptor.js"));
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
                            onCreate () {
                                console.log('[lifecycle] [app] onCreate - App is starting...');
                            },
                            onShow () {
                                console.log('[lifecycle] [app] onShow');
                            },
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9iYWNrLWludGVyY2VwdG9yLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL3VzZXJTZXJ2aWNlLmpzIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2FwcC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcGktc2VydmljZS5qc1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnQHN5c3RlbS5mZXRjaCc7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xyXG5pbXBvcnQgcHJvbXB0IGZyb20gJ0BzeXN0ZW0ucHJvbXB0JztcclxuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25maWcuanMnO1xyXG5cclxuY2xhc3MgQXBpU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyDkuK3ovazmnI3liqHlmajlnLDlnYAgLSDku44gY29uZmlnLmpzIOivu+WPllxyXG4gICAgdGhpcy5iYXNlVXJsID0gQ09ORklHLlNFUlZFUi5CQVNFX1VSTDtcclxuICAgIHRoaXMuYmFzZUhlYWRlcnMgPSB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDpgJrnlKjor7fmsYLmlrnms5UgLSDpgJrov4fkuK3ovazmnI3liqHlmajovazlj5FcclxuICBhc3luYyByZXF1ZXN0KGFjdGlvbiwgZGF0YSA9IHt9KSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9L2FwaWA7XHJcbiAgICBcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIHVybCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcjogdGhpcy5iYXNlSGVhZGVycyxcclxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbidcclxuICAgIH07XHJcblxyXG4gICAgb3B0aW9ucy5kYXRhID0gSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb24sIC4uLmRhdGEgfSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZmV0Y2guZmV0Y2goe1xyXG4gICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xyXG5cclxuICAgICAgICAgIGlmIChyZXNwb25zZS5jb2RlID49IDIwMCAmJiByZXNwb25zZS5jb2RlIDwgMzAwKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2VEYXRhKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgSFRUUCBFcnJvcjogJHtyZXNwb25zZS5jb2RlfWAsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgSFRUUCAke3Jlc3BvbnNlLmNvZGV9OiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlRGF0YSl9YCkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiAoZXJyb3IsIGNvZGUpID0+IHtcclxuICAgICAgICAgIC8vIERFVEFJTEVEIExPR0dJTkcgRk9SIE5FVFdPUksgRkFJTFVSRVNcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtBcGlTZXJ2aWNlXSBSZXF1ZXN0IEZhaWxlZC4gQ29kZTogJHtjb2RlfSwgRXJyb3I6ICR7SlNPTi5zdHJpbmdpZnkoZXJyb3IpfWApO1xyXG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgUmVxdWVzdCBmYWlsZWQ6ICR7ZXJyb3IuZGF0YSB8fCAnQ29ubmVjdGlvbiBpcyBpbnZhbGlkJ31gKSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8g6I635Y+W5o6S6KGM5qacXHJcbiAgYXN5bmMgZ2V0UmFua2luZ3MobGltaXQgPSAxMCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdnZXRfcmFua2luZ3MnLCB7XHJcbiAgICAgICAgbGltaXQ6IGxpbWl0XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICByYW5raW5nczogcmVzdWx0LnJhbmtpbmdzIHx8IFtdXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaOkuihjOamnOWksei0pTonLCBlcnJvcilcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICByYW5raW5nczogW10sXHJcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5LiK5oql54K55Ye75qyh5pWwXHJcbiAgYXN5bmMgc3luY0NsaWNrcyh1c2VySWQsIGNsaWNrQ291bnQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHRoaXMucmVxdWVzdCgnc3luY19jbGlja3MnLCB7XHJcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxyXG4gICAgICAgIGNsaWNrX2NvdW50OiBjbGlja0NvdW50XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5LiK5oql54K55Ye75qyh5pWw5aSx6LSlOicsIGVycm9yKVxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOS7juacjeWKoeWZqOWQjOatpeaVsOaNrlxyXG4gIGFzeW5jIHN5bmNGcm9tU2VydmVyKHVzZXJJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdzeW5jX2Zyb21fc2VydmVyJywge1xyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZFxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5LuO5pyN5Yqh5Zmo5ZCM5q2l5pWw5o2u5oiQ5YqfOicsIHJlc3VsdC51c2VySW5mbyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdXNlckluZm86IHJlc3VsdC51c2VySW5mbyB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+WQjOatpeaVsOaNruWksei0pTonLCByZXN1bHQgPyByZXN1bHQuZXJyb3IgOiAn5pyq55+l6ZSZ6K+vJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAocmVzdWx0ID8gcmVzdWx0LmVycm9yIDogJ+acjeWKoeWZqOacqui/lOWbnuaIkOWKn+eKtuaAgScpIH07XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S7juacjeWKoeWZqOWQjOatpeaVsOaNruaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5qOA5p+l5a6g54mp5ZCN5piv5ZCm5Y+v55SoXHJcbiAgYXN5bmMgY2hlY2tQZXROYW1lQXZhaWxhYmlsaXR5KHBldE5hbWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnY2hlY2tfcGV0X25hbWUnLCB7XHJcbiAgICAgICAgcGV0X25hbWU6IHBldE5hbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIC4uLnJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5qOA5p+l5a6g54mp5ZCN5Y+v55So5oCn5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlLCBpc0F2YWlsYWJsZTogZmFsc2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOS/ruaUueWuoOeJqeWQjVxyXG4gIGFzeW5jIHNldFBldE5hbWUodXNlcklkLCBuZXdOYW1lKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ3NldF9wZXRfbmFtZScsIHtcclxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXHJcbiAgICAgICAgbmV3X25hbWU6IG5ld05hbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfkv67mlLnlrqDnianlkI3lpLHotKU6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOmihOa/gOa0u+ajgOafpVxyXG4gIGFzeW5jIGNoZWNrRGV2aWNlUmVnaXN0cmF0aW9uKGRldmljZUlkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2NoZWNrX3JlZ2lzdHJhdGlvbicsIHtcclxuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygn6aKE5r+A5rS75qOA5p+l5oiQ5YqfOicsIHJlc3VsdCk7XHJcbiAgICAgIC8vIOebtOaOpei/lOWbnuacjeWKoeWZqOeahOWOn+Wni+WTjeW6lO+8jFVJ5bGC5pyf5pyb55qE5piv5omB5bmz57uT5p6EXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfpooTmv4DmtLvmo4Dmn6Xml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xyXG4gICAgICAvLyDov5Tlm57kuIDkuKrlhbzlrrnnmoTplJnor6/lr7nosaHvvIzpgb/lhY1VSeWxguW0qea6g1xyXG4gICAgICByZXR1cm4geyBpc19yZWdpc3RlcmVkOiBmYWxzZSwgY2FuX2F1dG9fYWN0aXZhdGU6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5rOo5YaM6K6+5aSH5bm26I635Y+W55So5oi3SURcclxuICBhc3luYyByZWdpc3RlckFuZEdldFVzZXJJZChkZXZpY2VJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gUGFzcyB0aGUgc2VydmVyIHJlc3BvbnNlIGRpcmVjdGx5IHRvIHRoZSBVSSBsYXllclxyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0KCdyZWdpc3Rlcl9kZXZpY2VfYW5kX2dldF9pZCcsIHtcclxuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5rOo5YaM5oiW6I635Y+W55So5oi3SUTml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xyXG4gICAgICAvLyBSZXR1cm4gYSBjb21wYXRpYmxlIGVycm9yIG9iamVjdFxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g6I635Y+W5YWs5ZGK5YiX6KGoXHJcbiAgYXN5bmMgZ2V0QW5ub3VuY2VtZW50cyhsaW1pdCA9IDEwKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2dldF9hbm5vdW5jZW1lbnRzJywge1xyXG4gICAgICAgIGxpbWl0OiBsaW1pdFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coJ09yaWdpbmFsIGFubm91bmNlbWVudCByZXN1bHQgZnJvbSBzZXJ2ZXI6JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlc3VsdC5zdWNjZXNzIHx8IGZhbHNlLFxyXG4gICAgICAgIGFubm91bmNlbWVudHM6IHJlc3VsdC5hbm5vdW5jZW1lbnRzIHx8IFtdLFxyXG4gICAgICAgIGNvdW50OiByZXN1bHQuY291bnQgfHwgMCxcclxuICAgICAgICB0aW1lc3RhbXA6IHJlc3VsdC50aW1lc3RhbXAsXHJcbiAgICAgICAgZXJyb3I6IHJlc3VsdC5lcnJvclxyXG4gICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign6I635Y+W5YWs5ZGK5aSx6LSlOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICBhbm5vdW5jZW1lbnRzOiBbXSxcclxuICAgICAgICBjb3VudDogMFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5qOA5p+l5bqU55So5pu05pawXHJcbiAgYXN5bmMgY2hlY2tBcHBVcGRhdGUoY3VycmVudFZlcnNpb25Db2RlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIGNhbGxlZCB3aXRoIGN1cnJlbnRWZXJzaW9uQ29kZTonLCBjdXJyZW50VmVyc2lvbkNvZGUpO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2NoZWNrX3VwZGF0ZScsIHtcclxuICAgICAgICBjdXJyZW50X3ZlcnNpb25fY29kZTogY3VycmVudFZlcnNpb25Db2RlXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ1tBcGlTZXJ2aWNlXSBjaGVja0FwcFVwZGF0ZSByYXcgcmVzdWx0OicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICBjb25zb2xlLmxvZygnW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIGhhc191cGRhdGU6JywgcmVzdWx0Lmhhc191cGRhdGUpO1xyXG4gICAgICBjb25zb2xlLmxvZygnW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIHVwZGF0ZV9pbmZvOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdC51cGRhdGVfaW5mbykpO1xyXG4gICAgICBjb25zb2xlLmxvZygnW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIGlzX2ZvcmNlX3VwZGF0ZTonLCByZXN1bHQuaXNfZm9yY2VfdXBkYXRlKTtcclxuICAgICAgXHJcbiAgICAgIC8vIOehruS/nSB1cGRhdGVJbmZvIOWMheWQq+aJgOacieW/heimgeWtl+autVxyXG4gICAgICBsZXQgdXBkYXRlSW5mbyA9IG51bGw7XHJcbiAgICAgIGlmIChyZXN1bHQudXBkYXRlX2luZm8pIHtcclxuICAgICAgICB1cGRhdGVJbmZvID0ge1xyXG4gICAgICAgICAgdmVyc2lvbl9uYW1lOiByZXN1bHQudXBkYXRlX2luZm8udmVyc2lvbl9uYW1lIHx8ICcnLFxyXG4gICAgICAgICAgdmVyc2lvbl9jb2RlOiByZXN1bHQudXBkYXRlX2luZm8udmVyc2lvbl9jb2RlIHx8IDAsXHJcbiAgICAgICAgICB0aXRsZTogcmVzdWx0LnVwZGF0ZV9pbmZvLnRpdGxlIHx8ICflj5HnjrDmlrDniYjmnKwnLFxyXG4gICAgICAgICAgY2hhbmdlbG9nOiByZXN1bHQudXBkYXRlX2luZm8uY2hhbmdlbG9nIHx8ICcnLFxyXG4gICAgICAgICAgZG93bmxvYWRfdXJsOiByZXN1bHQudXBkYXRlX2luZm8uZG93bmxvYWRfdXJsIHx8ICcnLFxyXG4gICAgICAgICAgZm9yY2VfdXBkYXRlOiByZXN1bHQudXBkYXRlX2luZm8uZm9yY2VfdXBkYXRlIHx8IGZhbHNlLFxyXG4gICAgICAgICAgbWluX3JlcXVpcmVkX3ZlcnNpb246IHJlc3VsdC51cGRhdGVfaW5mby5taW5fcmVxdWlyZWRfdmVyc2lvbiB8fCAwLFxyXG4gICAgICAgICAgcmVsZWFzZV90aW1lOiByZXN1bHQudXBkYXRlX2luZm8ucmVsZWFzZV90aW1lIHx8ICcnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zb2xlLmxvZygnW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIHVwZGF0ZUluZm8gY29uc3RydWN0ZWQ6JywgSlNPTi5zdHJpbmdpZnkodXBkYXRlSW5mbykpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgdXBkYXRlX2luZm8gaXMgbnVsbCBvciB1bmRlZmluZWQnKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc3QgcmV0dXJuUmVzdWx0ID0ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlc3VsdC5zdWNjZXNzIHx8IGZhbHNlLFxyXG4gICAgICAgIGhhc1VwZGF0ZTogcmVzdWx0Lmhhc191cGRhdGUgfHwgZmFsc2UsXHJcbiAgICAgICAgdXBkYXRlSW5mbzogdXBkYXRlSW5mbyxcclxuICAgICAgICBpc0ZvcmNlVXBkYXRlOiByZXN1bHQuaXNfZm9yY2VfdXBkYXRlIHx8IGZhbHNlLFxyXG4gICAgICAgIGN1cnJlbnRWZXJzaW9uQ29kZTogcmVzdWx0LmN1cnJlbnRfdmVyc2lvbl9jb2RlIHx8IGN1cnJlbnRWZXJzaW9uQ29kZSxcclxuICAgICAgICBsYXRlc3RWZXJzaW9uQ29kZTogcmVzdWx0LmxhdGVzdF92ZXJzaW9uX2NvZGUgfHwgY3VycmVudFZlcnNpb25Db2RlLFxyXG4gICAgICAgIGVycm9yOiByZXN1bHQuZXJyb3JcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgcmV0dXJuIHJlc3VsdDonLCBKU09OLnN0cmluZ2lmeShyZXR1cm5SZXN1bHQpKTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiByZXR1cm5SZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgZXJyb3IgbWVzc2FnZTonLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgY29uc29sZS5lcnJvcignW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIGVycm9yIHN0YWNrOicsIGVycm9yLnN0YWNrKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICBoYXNVcGRhdGU6IGZhbHNlLFxyXG4gICAgICAgIGlzRm9yY2VVcGRhdGU6IGZhbHNlXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBpU2VydmljZSgpXHJcbiIsIi8vIHNyYy9jb21tb24vanMvYmFjay1pbnRlcmNlcHRvci5qc1xuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XG5pbXBvcnQgcHJvbXB0IGZyb20gJ0BzeXN0ZW0ucHJvbXB0JztcblxuY2xhc3MgQmFja0ludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pc0Jsb2NraW5nID0gZmFsc2U7XG4gICAgdGhpcy5ibG9ja1JlYXNvbiA9ICcnO1xuICAgIHRoaXMub3JpZ2luYWxCYWNrID0gbnVsbDtcbiAgfVxuICBcbiAgLy8g5ZCv55So5oum5oiqXG4gIGVuYWJsZShyZWFzb24gPSAn6K+35YWI5a6M5oiQ5bqU55So5pu05pawJykge1xuICAgIHRoaXMuaXNCbG9ja2luZyA9IHRydWU7XG4gICAgdGhpcy5ibG9ja1JlYXNvbiA9IHJlYXNvbjtcbiAgICBcbiAgICAvLyDkv53lrZjljp/lp4tiYWNr5pa55rOVXG4gICAgaWYgKCF0aGlzLm9yaWdpbmFsQmFjaykge1xuICAgICAgdGhpcy5vcmlnaW5hbEJhY2sgPSByb3V0ZXIuYmFjaztcbiAgICB9XG4gICAgXG4gICAgLy8g6YeN5YaZYmFja+aWueazlVxuICAgIHJvdXRlci5iYWNrID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNCbG9ja2luZykge1xuICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiB0aGlzLmJsb2NrUmVhc29uLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIOaBouWkjeWOn+Wni2JhY2vmlrnms5VcbiAgICAgIGlmICh0aGlzLm9yaWdpbmFsQmFjaykge1xuICAgICAgICB0aGlzLm9yaWdpbmFsQmFjay5jYWxsKHJvdXRlcik7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBjb25zb2xlLmxvZygn6L+U5Zue5oum5oiq5Zmo5ZCv55SoOicsIHJlYXNvbik7XG4gIH1cbiAgXG4gIC8vIOemgeeUqOaLpuaIqlxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuaXNCbG9ja2luZyA9IGZhbHNlO1xuICAgIHRoaXMuYmxvY2tSZWFzb24gPSAnJztcbiAgICBcbiAgICAvLyDmgaLlpI3ljp/lp4tiYWNr5pa55rOVXG4gICAgaWYgKHRoaXMub3JpZ2luYWxCYWNrKSB7XG4gICAgICByb3V0ZXIuYmFjayA9IHRoaXMub3JpZ2luYWxCYWNrO1xuICAgICAgdGhpcy5vcmlnaW5hbEJhY2sgPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZygn6L+U5Zue5oum5oiq5Zmo56aB55SoJyk7XG4gIH1cbiAgXG4gIC8vIOaLpuaIqui/lOWbnuaMiemSrlxuICBpbnRlcmNlcHQocmVhc29uKSB7XG4gICAgdGhpcy5lbmFibGUocmVhc29uKTtcbiAgfVxuICBcbiAgLy8g5oGi5aSN5Y6f5aeL6L+U5Zue5Yqf6IO9XG4gIHJlc3RvcmUoKSB7XG4gICAgdGhpcy5kaXNhYmxlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEJhY2tJbnRlcmNlcHRvcigpOyIsIi8vIGNvbmZpZy5qc1xyXG5leHBvcnQgY29uc3QgQ09ORklHID0ge1xyXG4gIC8vIOS4rei9rOacjeWKoeWZqOmFjee9rlxyXG4gIFNFUlZFUjoge1xyXG4gICAgQkFTRV9VUkw6ICdodHRwOi8vMTAzLjIwNS4yNTMuODc6MjIyMDcnXHJcbiAgfSxcclxuICBcclxuICAvLyDms6jmhI/vvJpVUkwg5YmN57yA5ZyoIGFwaS1zZXJ2aWNlLmpzIOS4reehrOe8lueggeS6hlxyXG4gIC8vIOi/memHjOS4jeWGjemcgOimgemFjee9rlxyXG4gIFxyXG4gIC8vIOW6lOeUqOmFjee9rlxyXG4gIEFQUDoge1xyXG4gICAgTkFNRTogJ0JhbmRQZXQnLFxyXG4gICAgVkVSU0lPTjogJzAuNC4zIEFscGhhJyxcclxuICAgIFZFUlNJT05fQ09ERTogNDMsICAvLyDnlKjkuo7niYjmnKzmr5TovoPnmoTmlbDlrZfvvIgwLjQuMyAtPiA0M++8iVxyXG4gICAgTUFYX0NMSUNLU19QRVJfQkFUQ0g6IDUwLFxyXG4gICAgU1lOQ19JTlRFUlZBTDogMzAwMDAsICAvLyAzMOenkuiHquWKqOWQjOatpeS4gOasoVxyXG4gICAgUkFOS19MSU1JVDogMTAsXHJcbiAgICBcclxuICAgIC8vIOabtOaWsOajgOafpemFjee9rlxyXG4gICAgQ0hFQ0tfVVBEQVRFX0lOVEVSVkFMOiAzNjAwMDAwLCAvLyAx5bCP5pe25qOA5p+l5LiA5qyh5pu05paw77yIMzYwMDAwMOavq+enku+8iVxyXG4gICAgQU5OT1VOQ0VNRU5UX0NBQ0hFX1RJTUU6IDMwMDAwMCwgLy8gNeWIhumSn+e8k+WtmOWFrOWRilxyXG4gIH0sXHJcbiAgXHJcbiAgLy8g5a2Y5YKo6ZSu5ZCNXHJcbiAgU1RPUkFHRV9LRVlTOiB7XHJcbiAgICBERVZJQ0VfSUQ6ICdkZXZpY2VfaWQnLFxyXG4gICAgSVNfTE9DQUxMWV9BQ1RJVkFURUQ6ICdpc19sb2NhbGx5X2FjdGl2YXRlZCcsXHJcbiAgICBVU0VSX0lORk86ICd1c2VyX2luZm8nLFxyXG4gICAgUEVORElOR19DTElDS1M6ICdwZW5kaW5nX2NsaWNrcycsXHJcbiAgICBMQVNUX1NZTkNfVElNRTogJ2xhc3Rfc3luY190aW1lJyxcclxuICAgIFRPVEFMX0NMSUNLUzogJ3RvdGFsX2NsaWNrcycsXHJcbiAgICBcclxuICAgIC8vIOabtOaWsOebuOWFs+WtmOWCqOmUrlxyXG4gICAgTEFTVF9VUERBVEVfQ0hFQ0tfVElNRTogJ2xhc3RfdXBkYXRlX2NoZWNrX3RpbWUnLFxyXG4gICAgTEFTVF9BTk5PVU5DRU1FTlRfRkVUQ0hfVElNRTogJ2xhc3RfYW5ub3VuY2VtZW50X2ZldGNoX3RpbWUnLFxyXG4gICAgQ0FDSEVEX0FOTk9VTkNFTUVOVFM6ICdjYWNoZWRfYW5ub3VuY2VtZW50cycsXHJcbiAgICBDQUNIRURfVVBEQVRFX0lORk86ICdjYWNoZWRfdXBkYXRlX2luZm8nLFxyXG4gICAgSUdOT1JFRF9WRVJTSU9OOiAnaWdub3JlZF92ZXJzaW9uX2NvZGUnLCAvLyDnlKjmiLflv73nlaXnmoTniYjmnKxcclxuICAgIEZPUkNFX1VQREFURV9SRVFVSVJFRDogJ2ZvcmNlX3VwZGF0ZV9yZXF1aXJlZCcsIC8vIOaYr+WQpumcgOimgeW8uuWItuabtOaWsFxyXG4gICAgXHJcbiAgICAvLyDnlKjmiLflgY/lpb3orr7nva5cclxuICAgIFZJQlJBVElPTl9FTkFCTEVEOiAndmlicmF0aW9uX2VuYWJsZWQnLCAvLyDngrnlh7vpnIfliqjlvIDlhbNcclxuICB9XHJcbn1cclxuIiwiLy8gc3JjL2NvbW1vbi9qcy91c2VyU2VydmljZS5qc1xuaW1wb3J0IGRldmljZSBmcm9tICdAc3lzdGVtLmRldmljZSc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xuaW1wb3J0IEFwaVNlcnZpY2UgZnJvbSAnLi9hcGktc2VydmljZS5qcyc7XG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XG5cbi8qKlxuICogQSBzZXJ2aWNlIHRvIGhhbmRsZSBzaWxlbnQgdXNlciByZWdpc3RyYXRpb24gYW5kIGRhdGEgcmV0cmlldmFsLlxuICovXG5jbGFzcyBVc2VyU2VydmljZSB7XG4gIFxuICAvKipcbiAgICogUHJvbWlzaWZpZWQgaGVscGVyIGZvciBzdG9yYWdlLmdldC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gcmV0cmlldmUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFRoZSB2YWx1ZSBmcm9tIHN0b3JhZ2UsIG9yIG51bGwgaWYgbm90IGZvdW5kLlxuICAgKi9cbiAgX3N0b3JhZ2VHZXQoa2V5KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBzdG9yYWdlLmdldCh7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4gcmVzb2x2ZShkYXRhKSxcbiAgICAgICAgZmFpbDogKCkgPT4gcmVzb2x2ZShudWxsKSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb21pc2lmaWVkIGhlbHBlciBmb3Igc3RvcmFnZS5zZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IHRvIHNldC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIHN0b3JlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIF9zdG9yYWdlU2V0KGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc3RvcmFnZS5zZXQoe1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxuICAgICAgICBmYWlsOiAoZXJyLCBjb2RlKSA9PiByZWplY3QobmV3IEVycm9yKGBTdG9yYWdlLnNldCBmYWlsZWQgZm9yICcke2tleX0nOiAke2Vycn0gKCR7Y29kZX0pYCkpLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSByYXcgZGV2aWNlIGlkZW50aWZpZXIsIHVzaW5nIGEgZmFsbGJhY2sgZm9yIHNpbXVsYXRvcnMuXG4gICAqIEl0IGFsc28gc2F2ZXMgdGhlIHJhdyBJRCB0byBzdG9yYWdlIGZvciBmdXR1cmUgdXNlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmd8bnVsbD59IFRoZSByYXcgZGV2aWNlIElEIG9yIG51bGwgb24gZmFpbHVyZS5cbiAgICovXG4gIF9nZXRSYXdEZXZpY2VJZCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGRldmljZS5nZXRTZXJpYWwoe1xuICAgICAgICBzdWNjZXNzOiBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgICAgIGxldCBzZXJpYWwgPSBkYXRhID8gZGF0YS5zZXJpYWwgOiBudWxsO1xuICAgICAgICAgIGlmIChzZXJpYWwgPT09ICdOQScpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkRldmljZSBzZXJpYWwgaXMgJ05BJywgdXNpbmcgYSBmaXhlZCB0ZXN0IHNlcmlhbC5cIik7XG4gICAgICAgICAgICBzZXJpYWwgPSAnVEVTVFZNLVNOLTAxMjM0NTY3ODknO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghc2VyaWFsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZ2V0IGEgdmFsaWQgZGV2aWNlIHNlcmlhbC4nKTtcbiAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFNhdmUgdGhlIHJhdyBJRCBmb3Igb3RoZXIgc2VydmljZXMgdGhhdCBtaWdodCBuZWVkIGl0IChlLmcuLCBBUEkgY2FsbHMpXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9zdG9yYWdlU2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuREVWSUNFX0lELCBzZXJpYWwpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NhdmVkIHJhdyBkZXZpY2UgSUQ6Jywgc2VyaWFsKTtcbiAgICAgICAgICAgIHJlc29sdmUoc2VyaWFsKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc2F2ZSByYXcgZGV2aWNlIElEIHRvIHN0b3JhZ2U6JywgZSk7XG4gICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogKGVyciwgY29kZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYENvbm5lY3Rpb24gaXMgaW52YWxpZGApO1xuICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlcyB0aGUgdXNlciBpbmZvcm1hdGlvbiB0byBsb2NhbCBzdG9yYWdlLlxuICAgKiBAcGFyYW0ge29iamVjdH0gdXNlckluZm8gLSBUaGUgdXNlciBpbmZvIG9iamVjdCByZWNlaXZlZCBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdD59IFRoZSB1c2VyIGluZm8gdGhhdCB3YXMgc2F2ZWQuXG4gICAqL1xuICBhc3luYyBfc2F2ZVVzZXJJbmZvKHVzZXJJbmZvKSB7XG4gICAgaWYgKCF1c2VySW5mbyB8fCAoIXVzZXJJbmZvLmlkICYmICF1c2VySW5mby51c2VyX251bWJlcikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXIgaW5mbyBpcyBpbnZhbGlkLCBjYW5ub3Qgc2F2ZS5cIik7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHVzZXJJbmZvVG9TYXZlID0ge1xuICAgICAgaWQ6IHVzZXJJbmZvLmlkIHx8IHVzZXJJbmZvLnVzZXJfbnVtYmVyLFxuICAgICAgdXNlcl9udW1iZXI6IHVzZXJJbmZvLnVzZXJfbnVtYmVyLFxuICAgICAgcGV0X25hbWU6IHVzZXJJbmZvLnBldF9uYW1lLFxuICAgICAgdG90YWxfY2xpY2tzOiB1c2VySW5mby50b3RhbF9jbGlja3MgfHwgMFxuICAgIH07XG5cbiAgICBhd2FpdCB0aGlzLl9zdG9yYWdlU2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPLCBKU09OLnN0cmluZ2lmeSh1c2VySW5mb1RvU2F2ZSkpO1xuICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IHNhdmVkIHVzZXIgaW5mbyB0byBzdG9yYWdlOlwiLCB1c2VySW5mb1RvU2F2ZSk7XG4gICAgcmV0dXJuIHVzZXJJbmZvVG9TYXZlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBtYWluIHB1YmxpYyBtZXRob2QuIEl0IGVuc3VyZXMgdGhhdCB1c2VyIGluZm9ybWF0aW9uIGlzIHByZXNlbnQgaW4gc3RvcmFnZS5cbiAgICogSWYgbm90LCBpdCBzaWxlbnRseSBnZXRzIGEgZGV2aWNlIElELCBjaGVja3Mgd2l0aCB0aGUgc2VydmVyLCBhbmQgZWl0aGVyXG4gICAqIHJldHJpZXZlcyBleGlzdGluZyB1c2VyIGRhdGEgb3IgcmVnaXN0ZXJzIGEgbmV3IHVzZXIuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdHxudWxsPn0gVGhlIHVzZXIgaW5mbywgb3IgbnVsbCBpZiB0aGUgcHJvY2VzcyBmYWlscy5cbiAgICovXG4gIGFzeW5jIGVuc3VyZVVzZXJJc1JlZ2lzdGVyZWQoZm9yY2VTeW5jID0gZmFsc2UpIHtcbiAgICAvLyAxLiBDaGVjayBpZiB1c2VyIGluZm8gYWxyZWFkeSBleGlzdHMgYW5kIGlzIHZhbGlkLlxuICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIENoZWNraW5nIGZvciBleGlzdGluZyB1c2VyIGluZm8gaW4gc3RvcmFnZS4uLicpO1xuICAgIGNvbnN0IGV4aXN0aW5nVXNlckluZm9KU09OID0gYXdhaXQgdGhpcy5fc3RvcmFnZUdldChDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTyk7XG4gICAgaWYgKGV4aXN0aW5nVXNlckluZm9KU09OKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VySW5mbyA9IEpTT04ucGFyc2UoZXhpc3RpbmdVc2VySW5mb0pTT04pO1xuICAgICAgICBpZiAodXNlckluZm8gJiYgdXNlckluZm8uaWQpIHtcbiAgICAgICAgICBpZiAoZm9yY2VTeW5jKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBGb3JjZSBzeW5jIGVuYWJsZWQuIEF0dGVtcHRpbmcgdG8gc3luYyBsYXRlc3QgZGF0YSBmcm9tIHNlcnZlci4uLicpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3luY1Jlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2Uuc3luY0Zyb21TZXJ2ZXIodXNlckluZm8uaWQpO1xuICAgICAgICAgICAgICBpZiAoc3luY1Jlc3VsdCAmJiBzeW5jUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdWNjZXNzZnVsbHkgc3luY2VkIGZyb20gc2VydmVyLicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9zYXZlVXNlckluZm8oc3luY1Jlc3VsdC51c2VySW5mbyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdbVXNlclNlcnZpY2VdIFN5bmMgZnJvbSBzZXJ2ZXIgZmFpbGVkLCB3aWxsIHVzZSBzdGFsZSBsb2NhbCBkYXRhLiBFcnJvcjonLCBzeW5jUmVzdWx0ID8gc3luY1Jlc3VsdC5lcnJvciA6ICdVbmtub3duIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJJbmZvOyAvLyBSZXR1cm4gc3RhbGUgZGF0YSBpZiBzeW5jIGZhaWxzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKHN5bmNFcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbVXNlclNlcnZpY2VdIEEgY3JpdGljYWwgZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHNlcnZlciBzeW5jOicsIHN5bmNFcnJvcik7XG4gICAgICAgICAgICAgIHJldHVybiB1c2VySW5mbzsgLy8gUmV0dXJuIHN0YWxlIGRhdGEgb24gY3JpdGljYWwgc3luYyBmYWlsdXJlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFVzZXIgaXMgYWxyZWFkeSByZWdpc3RlcmVkLiBGb3VuZCBpbmZvOicsIHVzZXJJbmZvKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VySW5mbztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gTWFsZm9ybWVkIEpTT04sIHByb2NlZWQgd2l0aCByZWdpc3RyYXRpb24uXG4gICAgICAgIGNvbnNvbGUud2FybignW1VzZXJTZXJ2aWNlXSBVc2VyIGluZm8gaW4gc3RvcmFnZSBpcyBtYWxmb3JtZWQuIFByb2NlZWRpbmcgd2l0aCByZWdpc3RyYXRpb24uJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gVXNlciBub3QgZm91bmQgbG9jYWxseS4gU3RhcnRpbmcgc2lsZW50IHJlZ2lzdHJhdGlvbiBwcm9jZXNzLi4uJyk7XG5cbiAgICAvLyAyLiBHZXQgRGV2aWNlIElEXG4gICAgY29uc3QgZGV2aWNlSWQgPSBhd2FpdCB0aGlzLl9nZXRSYXdEZXZpY2VJZCgpO1xuICAgIGlmICghZGV2aWNlSWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tVc2VyU2VydmljZV0gQ1JJVElDQUw6IENhbm5vdCBwcm9jZWVkIHdpdGggcmVnaXN0cmF0aW9uOiBmYWlsZWQgdG8gZ2V0IGRldmljZSBJRC4nKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgW1VzZXJTZXJ2aWNlXSBHb3QgZGV2aWNlIElEOiAke2RldmljZUlkfWApO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIDMuIENoZWNrIGlmIHRoZSBkZXZpY2UgaXMgYWxyZWFkeSByZWdpc3RlcmVkIG9uIHRoZSBzZXJ2ZXJcbiAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIENoZWNraW5nIGRldmljZSByZWdpc3RyYXRpb24gd2l0aCBzZXJ2ZXIuLi4nKTtcbiAgICAgIGNvbnN0IHJlZ1Jlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2UuY2hlY2tEZXZpY2VSZWdpc3RyYXRpb24oZGV2aWNlSWQpO1xuICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU2VydmVyIHJlZ2lzdHJhdGlvbiBjaGVjayByZXNwb25zZTonLCBKU09OLnN0cmluZ2lmeShyZWdSZXN1bHQpKTtcblxuXG4gICAgICBpZiAocmVnUmVzdWx0ICYmIHJlZ1Jlc3VsdC5pc19yZWdpc3RlcmVkICYmIHJlZ1Jlc3VsdC51c2VySW5mbykge1xuICAgICAgICAvLyBEZXZpY2UgaXMga25vd24sIHNhdmUgdGhlIGluZm8gYW5kIHdlJ3JlIGRvbmUuXG4gICAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIERldmljZSBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQgb24gc2VydmVyLiBSZXN0b3JpbmcgdXNlciBpbmZvLicpO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fc2F2ZVVzZXJJbmZvKHJlZ1Jlc3VsdC51c2VySW5mbyk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIDQuIElmIG5vdCByZWdpc3RlcmVkLCBjcmVhdGUgYSBuZXcgdXNlciByZWNvcmQuXG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBEZXZpY2Ugbm90IHJlZ2lzdGVyZWQuIEF0dGVtcHRpbmcgdG8gcmVnaXN0ZXIgYSBuZXcgdXNlci4uLicpO1xuICAgICAgY29uc3QgbmV3UmVnUmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5yZWdpc3RlckFuZEdldFVzZXJJZChkZXZpY2VJZCk7XG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTZXJ2ZXIgbmV3IHVzZXIgcmVnaXN0cmF0aW9uIHJlc3BvbnNlOicsIEpTT04uc3RyaW5naWZ5KG5ld1JlZ1Jlc3VsdCkpO1xuXG5cbiAgICAgIGlmIChuZXdSZWdSZXN1bHQgJiYgbmV3UmVnUmVzdWx0LnN1Y2Nlc3MgJiYgbmV3UmVnUmVzdWx0LnVzZXJJbmZvKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkIG5ldyB1c2VyLicpO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fc2F2ZVVzZXJJbmZvKG5ld1JlZ1Jlc3VsdC51c2VySW5mbyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdbVXNlclNlcnZpY2VdIENSSVRJQ0FMOiBGYWlsZWQgdG8gcmVnaXN0ZXIgbmV3IHVzZXIuJywgbmV3UmVnUmVzdWx0ID8gbmV3UmVnUmVzdWx0Lm1lc3NhZ2UgOiAnTm8gcmVzdWx0IGZyb20gc2VydmVyJyk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tVc2VyU2VydmljZV0gQ1JJVElDQUw6IEFuIGVycm9yIG9jY3VycmVkIGR1cmluZyB0aGUgc2lsZW50IHJlZ2lzdHJhdGlvbiBBUEkgY2FsbHM6JywgZSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgbnVtYmVyIG9mIHBlbmRpbmcgY2xpY2tzIGJ5IGEgZ2l2ZW4gYW1vdW50LlxuICAgKiBUaGlzIGlzIHRoZSBjZW50cmFsaXplZCBtZXRob2QgZm9yIGFsbCBjbGljayBtb2RpZmljYXRpb25zLlxuICAgKiBAcGFyYW0ge251bWJlcn0gYW1vdW50IC0gVGhlIG51bWJlciB0byBhZGQgdG8gcGVuZGluZyBjbGlja3MuIENhbiBiZSBuZWdhdGl2ZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyfG51bGw+fSBUaGUgbmV3IG51bWJlciBvZiBwZW5kaW5nIGNsaWNrcywgb3IgbnVsbCBvbiBmYWlsdXJlLlxuICAgKi9cbiAgYXN5bmMgdXBkYXRlUGVuZGluZ0NsaWNrcyhhbW91bnQpIHtcbiAgICBpZiAodHlwZW9mIGFtb3VudCAhPT0gJ251bWJlcicgfHwgaXNOYU4oYW1vdW50KSkge1xuICAgICAgY29uc29sZS53YXJuKCdbVXNlclNlcnZpY2VdIHVwZGF0ZVBlbmRpbmdDbGlja3MgcmVjZWl2ZWQgYW4gaW52YWxpZCBhbW91bnQ6JywgYW1vdW50KTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwZW5kaW5nQ2xpY2tzRGF0YSA9IGF3YWl0IHRoaXMuX3N0b3JhZ2VHZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5QRU5ESU5HX0NMSUNLUyk7XG4gICAgICBsZXQgY3VycmVudENsaWNrcyA9IHBhcnNlSW50KHBlbmRpbmdDbGlja3NEYXRhKSB8fCAwO1xuICAgICAgXG4gICAgICBjb25zdCBuZXdDbGlja3MgPSBjdXJyZW50Q2xpY2tzICsgYW1vdW50O1xuICAgICAgXG4gICAgICBhd2FpdCB0aGlzLl9zdG9yYWdlU2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuUEVORElOR19DTElDS1MsIG5ld0NsaWNrcy50b1N0cmluZygpKTtcbiAgICAgIFxuICAgICAgY29uc29sZS5sb2coYFtVc2VyU2VydmljZV0gUGVuZGluZyBjbGlja3MgdXBkYXRlZCBieSAke2Ftb3VudH0uIE5ldyB2YWx1ZTogJHtuZXdDbGlja3N9YCk7XG4gICAgICByZXR1cm4gbmV3Q2xpY2tzO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tVc2VyU2VydmljZV0gRmFpbGVkIHRvIHVwZGF0ZSBwZW5kaW5nIGNsaWNrcyBpbiBzdG9yYWdlOicsIGUpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHBlbmRpbmcgY2xpY2tzIGZyb20gc3RvcmFnZSBhbmQgc3luY3MgdGhlbSB3aXRoIHRoZSBzZXJ2ZXIuXG4gICAqIFRoaXMgaXMgYSBzZWxmLWNvbnRhaW5lZCwgZmlyZS1hbmQtZm9yZ2V0IG1ldGhvZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFRydWUgb24gc3VjY2VzcywgZmFsc2Ugb24gZmFpbHVyZSBvciBpZiBubyBzeW5jIHdhcyBuZWVkZWQuXG4gICAqL1xuICBhc3luYyB0cmlnZ2VyQ2xpY2tTeW5jKCkge1xuICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFRyaWdnZXJpbmcgY2xpY2sgc3luYy4uLicpO1xuICAgIFxuICAgIC8vIDEuIEdldCB1c2VyIGluZm9cbiAgICBjb25zdCB1c2VySW5mb0pTT04gPSBhd2FpdCB0aGlzLl9zdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPKTtcbiAgICBpZiAoIXVzZXJJbmZvSlNPTikge1xuICAgICAgY29uc29sZS53YXJuKCdbVXNlclNlcnZpY2VdIFN5bmMgYWJvcnRlZDogVXNlciBpbmZvIG5vdCBmb3VuZCBpbiBzdG9yYWdlLicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBsZXQgdXNlckluZm87XG4gICAgdHJ5IHtcbiAgICAgIHVzZXJJbmZvID0gSlNPTi5wYXJzZSh1c2VySW5mb0pTT04pO1xuICAgICAgaWYgKCF1c2VySW5mbyB8fCAhdXNlckluZm8uaWQpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbVXNlclNlcnZpY2VdIFN5bmMgYWJvcnRlZDogVXNlciBJRCBpcyBpbnZhbGlkLicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tVc2VyU2VydmljZV0gU3luYyBhYm9ydGVkOiBDb3VsZCBub3QgcGFyc2UgdXNlciBpbmZvLicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDIuIEdldCBwZW5kaW5nIGNsaWNrc1xuICAgIGNvbnN0IHBlbmRpbmdDbGlja3NEYXRhID0gYXdhaXQgdGhpcy5fc3RvcmFnZUdldChDT05GSUcuU1RPUkFHRV9LRVlTLlBFTkRJTkdfQ0xJQ0tTKTtcbiAgICBjb25zdCBjbGlja3NUb1N5bmMgPSBwYXJzZUludChwZW5kaW5nQ2xpY2tzRGF0YSk7XG5cbiAgICBpZiAoaXNOYU4oY2xpY2tzVG9TeW5jKSkge1xuICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gTm8gcGVuZGluZyBjbGlja3MgdG8gc3luYyAodmFsdWUgaXMgTmFOKS4nKTtcbiAgICAgIHJldHVybiB0cnVlOyAvLyBOb3RoaW5nIHRvIGRvLCBzbyBpdCdzIGEgXCJzdWNjZXNzXCJcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhgW1VzZXJTZXJ2aWNlXSBGb3VuZCAke2NsaWNrc1RvU3luY30gcGVuZGluZyBjbGlja3MgZm9yIHVzZXIgJHt1c2VySW5mby5pZH0uIFN5bmNpbmcuLi5gKTtcblxuICAgIC8vIDMuIENhbGwgQVBJXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5zeW5jQ2xpY2tzKHVzZXJJbmZvLmlkLCBjbGlja3NUb1N5bmMpO1xuXG4gICAgLy8gNC4gVXBkYXRlIHN0b3JhZ2Ugb24gc3VjY2Vzc1xuICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU3luYyBzdWNjZXNzZnVsLicpO1xuICAgICAgXG4gICAgICAvLyDjgJDkv67lpI3jgJHlkIzmraXmiJDlip/lkI7vvIzlhYjmiorlvoXkuIrkvKDmlbDph4/liqDliLDmnKzlnLDmgLvngrnlh7vmlbDvvIzlho3muIXnqbrlvoXkuIrkvKBcbiAgICAgIGNvbnN0IGN1cnJlbnRUb3RhbENsaWNrcyA9IHBhcnNlSW50KGF3YWl0IHRoaXMuX3N0b3JhZ2VHZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5UT1RBTF9DTElDS1MpKSB8fCAwO1xuICAgICAgY29uc3QgdXBkYXRlZFRvdGFsQ2xpY2tzID0gY3VycmVudFRvdGFsQ2xpY2tzICsgY2xpY2tzVG9TeW5jO1xuICAgICAgYXdhaXQgdGhpcy5fc3RvcmFnZVNldChDT05GSUcuU1RPUkFHRV9LRVlTLlRPVEFMX0NMSUNLUywgdXBkYXRlZFRvdGFsQ2xpY2tzLnRvU3RyaW5nKCkpO1xuICAgICAgY29uc29sZS5sb2coYFtVc2VyU2VydmljZV0gQWRkZWQgcGVuZGluZyBjbGlja3MgdG8gdG90YWw6ICR7Y3VycmVudFRvdGFsQ2xpY2tzfSArICR7Y2xpY2tzVG9TeW5jfSA9ICR7dXBkYXRlZFRvdGFsQ2xpY2tzfWApO1xuICAgICAgXG4gICAgICAvLyDmuIXnqbrlvoXkuIrkvKDmlbDph49cbiAgICAgIGF3YWl0IHRoaXMuX3N0b3JhZ2VTZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5QRU5ESU5HX0NMSUNLUywgJzAnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFJlc2V0dGluZyBwZW5kaW5nIGNsaWNrcyB0byAwJyk7XG4gICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbVXNlclNlcnZpY2VdIFN5bmMgZmFpbGVkOicsIHJlc3VsdC5lcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgdGhlIGxhdGVzdCB1c2VyIGRhdGEgZnJvbSB0aGUgc2VydmVyIGFuZCBvdmVyd3JpdGVzIGxvY2FsIHN0b3JhZ2UuXG4gICAqIFRoaXMgbWV0aG9kIHJ1bnMgdGhlIGZ1bGwgcmVnaXN0cmF0aW9uL2xvZ2luIGZsb3cgdG8gZW5zdXJlIGRhdGEgaXMgY29uc2lzdGVudC5cbiAgICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZ30+fVxuICAgKi9cbiAgYXN5bmMgZm9yY2VTeW5jRnJvbVNlcnZlcigpIHtcbiAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdGFydGluZyBmb3JjZSBzeW5jIGZyb20gc2VydmVyLi4uJyk7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIC8vIDEuIEZvcmNlIGEgc3luYyBvZiBhbnkgcGVuZGluZyBjbGlja3MgRklSU1QuXG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdGVwIDE6IFN5bmNpbmcgbG9jYWwgcGVuZGluZyBjbGlja3MgYmVmb3JlIGZldGNoaW5nIHNlcnZlciBkYXRhLicpO1xuICAgICAgY29uc3QgY2xpY2tTeW5jU3VjY2VzcyA9IGF3YWl0IHRoaXMudHJpZ2dlckNsaWNrU3luYygpO1xuXG4gICAgICBpZiAoIWNsaWNrU3luY1N1Y2Nlc3MpIHtcbiAgICAgICAgLy8gSWYgdGhlIGNsaWNrIHN5bmMgZmFpbHMsIHdlIHNob3VsZCBub3QgcHJvY2VlZCwgYXMgd2UgbWlnaHQgb3ZlcndyaXRlIHRoZSBsb2NhbCBzdGF0ZVxuICAgICAgICAvLyB3aXRoIHN0YWxlIHNlcnZlciBkYXRhLCBjYXVzaW5nIHRoZSB1c2VyIHRvIGxvc2UgdGhlaXIgcGVuZGluZyBjbGlja3MuXG4gICAgICAgIGNvbnN0IGVycm9yTXNnID0gJ+aXoOazleWQjOatpeacrOWcsOeCueWHu+aVsOaNru+8jOW3suWPlua2iOS7juacjeWKoeWZqOabtOaWsO+8jOS7pemYsuaVsOaNruS4ouWkseOAgic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtVc2VyU2VydmljZV0gJHtlcnJvck1zZ31gKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yTXNnIH07XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdGVwIDE6IExvY2FsIHBlbmRpbmcgY2xpY2tzIHN5bmNlZCBzdWNjZXNzZnVsbHkuJyk7XG5cblxuICAgICAgLy8gMi4gTm93LCBydW4gdGhlIGZ1bGwgZ2V0L3JlZ2lzdGVyIHVzZXIgZmxvdyB0byBnZXQgdGhlIGxhdGVzdCBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdGVwIDI6IEZldGNoaW5nIGxhdGVzdCB1c2VyIGRhdGEgZnJvbSBzZXJ2ZXIuJyk7XG4gICAgICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IHRoaXMuZW5zdXJlVXNlcklzUmVnaXN0ZXJlZCh0cnVlKTtcblxuICAgICAgaWYgKHVzZXJJbmZvICYmIHVzZXJJbmZvLmlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFN0ZXAgMjogU3VjY2Vzc2Z1bGx5IGZldGNoZWQgYW5kIHVwZGF0ZWQgdXNlciBpbmZvLiBVc2VySW5mbzonLCB1c2VySW5mbyk7XG4gICAgICAgIFxuICAgICAgICAvLyDjgJDkv67lpI3jgJHlkIzmraXmiJDlip/lkI7vvIzlsIbmnI3liqHlmajnmoQgdG90YWxfY2xpY2tzIOimhuebluWIsOacrOWcsFxuICAgICAgICBpZiAodXNlckluZm8udG90YWxfY2xpY2tzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9zdG9yYWdlU2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuVE9UQUxfQ0xJQ0tTLCB1c2VySW5mby50b3RhbF9jbGlja3MudG9TdHJpbmcoKSk7XG4gICAgICAgICAgY29uc29sZS5sb2coYFtVc2VyU2VydmljZV0gVXBkYXRlZCBsb2NhbCB0b3RhbF9jbGlja3MgdG8gc2VydmVyIHZhbHVlOiAke3VzZXJJbmZvLnRvdGFsX2NsaWNrc31gKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gRm9yY2Ugc3luYyBjb21wbGV0ZS4gTG9jYWwgc3RvcmFnZSBpcyBub3cgdXAtdG8tZGF0ZS4nKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ+WQjOatpeaIkOWKn++8gScgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVycm9yTXNnID0gJ+aXoOazleS7juacjeWKoeWZqOiOt+WPluacgOaWsOeUqOaIt+aVsOaNruOAgic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtVc2VyU2VydmljZV0gJHtlcnJvck1zZ31gKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yTXNnIH07XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignW1VzZXJTZXJ2aWNlXSBBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgdGhlIGZvcmNlIHN5bmMgcHJvY2VzczonLCBlKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAn5ZCM5q2l5aSx6LSl77yM5Y+R55Sf5pyq55+l6ZSZ6K+vJyB9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlclNlcnZpY2UoKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9ICgoKSA9PiB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjYuOFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS42LjhcIjsiLCI8c2NyaXB0PlxuICBpbXBvcnQgVXNlclNlcnZpY2UgZnJvbSAnLi9jb21tb24vanMvdXNlclNlcnZpY2UuanMnO1xuICBpbXBvcnQgQmFja0ludGVyY2VwdG9yIGZyb20gJy4vY29tbW9uL2pzL2JhY2staW50ZXJjZXB0b3IuanMnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBvbkNyZWF0ZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbbGlmZWN5Y2xlXSBbYXBwXSBvbkNyZWF0ZSAtIEFwcCBpcyBzdGFydGluZy4uLicpO1xuICAgIH0sXG5cbiAgICBvblNob3coKSB7XG4gICAgICBjb25zb2xlLmxvZygnW2xpZmVjeWNsZV0gW2FwcF0gb25TaG93Jyk7XG4gICAgfSxcblxuICAgIG9uSGlkZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbbGlmZWN5Y2xlXSBbYXBwXSBvbkhpZGUgLSBUcmlnZ2VyaW5nIGZpbmFsIGNsaWNrIHN5bmMgYmVmb3JlIGV4aXQuJyk7XG4gICAgICBVc2VyU2VydmljZS50cmlnZ2VyQ2xpY2tTeW5jKCk7XG4gICAgfSxcblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbbGlmZWN5Y2xlXSBbYXBwXSBvbkRlc3Ryb3knKTtcbiAgICAgIC8vIOa4heeQhui/lOWbnumUruaLpuaIquWZqO+8jOS7pemYsuS4h+S4gFxuICAgICAgQmFja0ludGVyY2VwdG9yLnJlc3RvcmUoKTtcbiAgICB9LFxuXG4gICAgb25FcnJvcihlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBbbGlmZWN5Y2xlXSBbYXBwXSBvbkVycm9yIGVycm1zZzogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgIGNvbnNvbGUubG9nKGBbbGlmZWN5Y2xlXSBbYXBwXSBvbkVycm9yIGVycm9yIHN0YWNrOiAke2Vyci5zdGFja31gKTtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIl9zeXN0ZW0yIiwiX3N5c3RlbTMiLCJfc3lzdGVtNCIsIl9jb25maWciLCJyZXF1aXJlIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0Iiwib3duS2V5cyIsInIiLCJ0IiwiT2JqZWN0Iiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIm8iLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwicHVzaCIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJ2YWx1ZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiaSIsIl90b1ByaW1pdGl2ZSIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIkFwaVNlcnZpY2UiLCJjb25zdHJ1Y3RvciIsImJhc2VVcmwiLCJDT05GSUciLCJTRVJWRVIiLCJCQVNFX1VSTCIsImJhc2VIZWFkZXJzIiwicmVxdWVzdCIsImFjdGlvbiIsImRhdGEiLCJ1cmwiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVyIiwicmVzcG9uc2VUeXBlIiwiSlNPTiIsInN0cmluZ2lmeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmV0Y2giLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJyZXNwb25zZURhdGEiLCJjb2RlIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJmYWlsIiwiZ2V0UmFua2luZ3MiLCJsaW1pdCIsInJlc3VsdCIsInJhbmtpbmdzIiwibWVzc2FnZSIsInN5bmNDbGlja3MiLCJ1c2VySWQiLCJjbGlja0NvdW50IiwidXNlcl9pZCIsImNsaWNrX2NvdW50Iiwic3luY0Zyb21TZXJ2ZXIiLCJsb2ciLCJ1c2VySW5mbyIsImNoZWNrUGV0TmFtZUF2YWlsYWJpbGl0eSIsInBldE5hbWUiLCJwZXRfbmFtZSIsImlzQXZhaWxhYmxlIiwic2V0UGV0TmFtZSIsIm5ld05hbWUiLCJuZXdfbmFtZSIsImNoZWNrRGV2aWNlUmVnaXN0cmF0aW9uIiwiZGV2aWNlSWQiLCJkZXZpY2VfaWQiLCJpc19yZWdpc3RlcmVkIiwiY2FuX2F1dG9fYWN0aXZhdGUiLCJyZWdpc3RlckFuZEdldFVzZXJJZCIsImdldEFubm91bmNlbWVudHMiLCJhbm5vdW5jZW1lbnRzIiwiY291bnQiLCJ0aW1lc3RhbXAiLCJjaGVja0FwcFVwZGF0ZSIsImN1cnJlbnRWZXJzaW9uQ29kZSIsImN1cnJlbnRfdmVyc2lvbl9jb2RlIiwiaGFzX3VwZGF0ZSIsInVwZGF0ZV9pbmZvIiwiaXNfZm9yY2VfdXBkYXRlIiwidXBkYXRlSW5mbyIsInZlcnNpb25fbmFtZSIsInZlcnNpb25fY29kZSIsInRpdGxlIiwiY2hhbmdlbG9nIiwiZG93bmxvYWRfdXJsIiwiZm9yY2VfdXBkYXRlIiwibWluX3JlcXVpcmVkX3ZlcnNpb24iLCJyZWxlYXNlX3RpbWUiLCJyZXR1cm5SZXN1bHQiLCJoYXNVcGRhdGUiLCJpc0ZvcmNlVXBkYXRlIiwibGF0ZXN0VmVyc2lvbkNvZGUiLCJsYXRlc3RfdmVyc2lvbl9jb2RlIiwic3RhY2siLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJCYWNrSW50ZXJjZXB0b3IiLCJpc0Jsb2NraW5nIiwiYmxvY2tSZWFzb24iLCJvcmlnaW5hbEJhY2siLCJlbmFibGUiLCJyZWFzb24iLCJiYWNrIiwic2hvd1RvYXN0IiwiZHVyYXRpb24iLCJkaXNhYmxlIiwiaW50ZXJjZXB0IiwicmVzdG9yZSIsIkFQUCIsIk5BTUUiLCJWRVJTSU9OIiwiVkVSU0lPTl9DT0RFIiwiTUFYX0NMSUNLU19QRVJfQkFUQ0giLCJTWU5DX0lOVEVSVkFMIiwiUkFOS19MSU1JVCIsIkNIRUNLX1VQREFURV9JTlRFUlZBTCIsIkFOTk9VTkNFTUVOVF9DQUNIRV9USU1FIiwiU1RPUkFHRV9LRVlTIiwiREVWSUNFX0lEIiwiSVNfTE9DQUxMWV9BQ1RJVkFURUQiLCJVU0VSX0lORk8iLCJQRU5ESU5HX0NMSUNLUyIsIkxBU1RfU1lOQ19USU1FIiwiVE9UQUxfQ0xJQ0tTIiwiTEFTVF9VUERBVEVfQ0hFQ0tfVElNRSIsIkxBU1RfQU5OT1VOQ0VNRU5UX0ZFVENIX1RJTUUiLCJDQUNIRURfQU5OT1VOQ0VNRU5UUyIsIkNBQ0hFRF9VUERBVEVfSU5GTyIsIklHTk9SRURfVkVSU0lPTiIsIkZPUkNFX1VQREFURV9SRVFVSVJFRCIsIlZJQlJBVElPTl9FTkFCTEVEIiwiX2FwaVNlcnZpY2UiLCJVc2VyU2VydmljZSIsIl9zdG9yYWdlR2V0Iiwia2V5IiwiZ2V0IiwiX3N0b3JhZ2VTZXQiLCJzZXQiLCJlcnIiLCJfZ2V0UmF3RGV2aWNlSWQiLCJnZXRTZXJpYWwiLCJzZXJpYWwiLCJ3YXJuIiwiX3NhdmVVc2VySW5mbyIsImlkIiwidXNlcl9udW1iZXIiLCJ1c2VySW5mb1RvU2F2ZSIsInRvdGFsX2NsaWNrcyIsImVuc3VyZVVzZXJJc1JlZ2lzdGVyZWQiLCJmb3JjZVN5bmMiLCJleGlzdGluZ1VzZXJJbmZvSlNPTiIsInBhcnNlIiwic3luY1Jlc3VsdCIsInN5bmNFcnJvciIsInJlZ1Jlc3VsdCIsIm5ld1JlZ1Jlc3VsdCIsInVwZGF0ZVBlbmRpbmdDbGlja3MiLCJhbW91bnQiLCJpc05hTiIsInBlbmRpbmdDbGlja3NEYXRhIiwiY3VycmVudENsaWNrcyIsInBhcnNlSW50IiwibmV3Q2xpY2tzIiwidG9TdHJpbmciLCJ0cmlnZ2VyQ2xpY2tTeW5jIiwidXNlckluZm9KU09OIiwiY2xpY2tzVG9TeW5jIiwiY3VycmVudFRvdGFsQ2xpY2tzIiwidXBkYXRlZFRvdGFsQ2xpY2tzIiwiZm9yY2VTeW5jRnJvbVNlcnZlciIsImNsaWNrU3luY1N1Y2Nlc3MiLCJlcnJvck1zZyIsInVuZGVmaW5lZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJ3aW5kb3ciLCJfdXNlclNlcnZpY2UiLCJfYmFja0ludGVyY2VwdG9yIiwib25DcmVhdGUiLCJvblNob3ciLCJvbkhpZGUiLCJvbkRlc3Ryb3kiLCJvbkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFDQSxJQUFBQSxVQUFBQyx1QkFBQUMsZUFBQTt3QkFDQSxJQUFBQyxXQUFBRix1QkFBQUMsZUFBQTt3QkFDQSxJQUFBRSxXQUFBSCx1QkFBQUMsZUFBQTt3QkFDQSxJQUFBRyxXQUFBSix1QkFBQUMsZUFBQTt3QkFDQSxJ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