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
                                    "page-container"
                                ]
                            ],
                            {
                                position: "relative",
                                flexDirection: "column",
                                alignItems: "center",
                                backgroundColor: "#000000",
                                width: "100%",
                                height: "100%"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "page-header-container"
                                ]
                            ],
                            {
                                width: "100%",
                                marginBottom: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "page-time-display"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "24px",
                                marginBottom: "2px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "page-header"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "90px",
                                paddingTop: "0",
                                paddingRight: "20px",
                                paddingBottom: "0",
                                paddingLeft: "20px",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "page-header-back-button"
                                ]
                            ],
                            {
                                width: "80px",
                                height: "80px",
                                position: "absolute",
                                left: "0px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "page-header-title"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "32px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "header-title-time"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "page-content"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                width: "100%",
                                flex: 1,
                                alignItems: "center",
                                overflowY: "scroll"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "settings-content"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                width: "90%",
                                marginTop: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "info-item"
                                ]
                            ],
                            {
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "20px",
                                paddingTop: "20px",
                                paddingRight: "20px",
                                paddingBottom: "20px",
                                paddingLeft: "20px",
                                backgroundColor: "#1a1a1a",
                                borderRadius: "15px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "info-label"
                                ]
                            ],
                            {
                                color: "#aaaaaa",
                                fontSize: "30px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "info-value"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "30px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "menu-button"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "70px",
                                backgroundColor: "#1a1a1a",
                                borderRadius: "15px",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "menu-button-text"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "30px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "about-button"
                                ]
                            ],
                            {
                                position: "absolute",
                                bottom: "30px",
                                width: "140px",
                                height: "60px",
                                backgroundColor: "#1a1a1a",
                                borderRadius: "30px",
                                justifyContent: "center",
                                alignItems: "center",
                                right: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sync-button"
                                ]
                            ],
                            {
                                position: "absolute",
                                bottom: "30px",
                                width: "140px",
                                height: "60px",
                                backgroundColor: "#1a1a1a",
                                borderRadius: "30px",
                                justifyContent: "center",
                                alignItems: "center",
                                left: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "about-button-text"
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
                                    "sync-button-text"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "28px"
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
                        var _config = __webpack_require__("./src/common/js/config.js");
                        var _userService = _interopRequireDefault(__webpack_require__("./src/common/js/userService.js"));
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        const _promisifiedStorageGet = (key)=>new Promise((resolve)=>{
                                _system2.default.get({
                                    key: key,
                                    success: (data)=>resolve(data),
                                    fail: ()=>resolve(null)
                                });
                            });
                        var _default = exports.default = {
                            data: {
                                time: '00:00',
                                petName: '加载中...',
                                userId: '加载中...'
                            },
                            onInit () {
                                this.loadUserInfo();
                                this.updateTime();
                                setInterval(this.updateTime, 10000);
                            },
                            async loadUserInfo () {
                                console.log('[SettingsPage] Loading user info...');
                                try {
                                    const userInfoJSON = await _promisifiedStorageGet(_config.CONFIG.STORAGE_KEYS.USER_INFO);
                                    if (userInfoJSON) {
                                        console.log('[SettingsPage] Found user info data in storage.');
                                        const userInfo = JSON.parse(userInfoJSON);
                                        if (userInfo && userInfo.id) {
                                            this.petName = userInfo.pet_name || '(无名)';
                                            this.userId = userInfo.id || '无';
                                            console.log(`[SettingsPage] Successfully loaded user info: Name='${this.petName}', ID='${this.userId}'`);
                                        } else {
                                            console.warn('[SettingsPage] User info data was found, but it was invalid (missing id).');
                                            this.petName = '信息无效';
                                            this.userId = '无';
                                        }
                                    } else {
                                        console.warn('[SettingsPage] Could not find user info in storage.');
                                        this.petName = '无信息';
                                        this.userId = '无';
                                    }
                                } catch (e) {
                                    console.error("[SettingsPage] A critical error occurred while loading user info:", e);
                                    this.petName = '加载失败';
                                    this.userId = '加载失败';
                                }
                            },
                            updateTime () {
                                const now = new Date();
                                const hours = now.getHours().toString().padStart(2, '0');
                                const minutes = now.getMinutes().toString().padStart(2, '0');
                                this.time = `${hours}:${minutes}`;
                            },
                            async handleCloudSync () {
                                console.log('[SettingsPage] Starting cloud sync...');
                                _system3.default.showToast({
                                    message: '正在从云端同步...'
                                });
                                try {
                                    const uploadSuccess = await _userService.default.triggerClickSync();
                                    if (!uploadSuccess) {
                                        console.log('[SettingsPage] Upload failed, keeping pending clicks unchanged');
                                        _system3.default.showToast({
                                            message: '上传失败，请稍后重试'
                                        });
                                        return;
                                    }
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
                                        console.log(`[SettingsPage] Updated total_clicks from server: ${userInfo.total_clicks}`);
                                    }
                                    _system3.default.showToast({
                                        message: '同步成功！'
                                    });
                                } catch (error) {
                                    console.error('[SettingsPage] Cloud sync failed:', error);
                                    _system3.default.showToast({
                                        message: '同步失败，发生错误'
                                    });
                                }
                            },
                            goBack () {
                                _system.default.back();
                            },
                            goToAbout () {
                                _system.default.push({
                                    uri: 'about'
                                });
                            },
                            goToMoreOptions () {
                                _system.default.push({
                                    uri: 'more-options'
                                });
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
                                    "page-container"
                                ]
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "page-header-container"
                                    ]
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page-header"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            src: "/common/back.png",
                                            classList: [
                                                "page-header-back-button"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.goBack(evt);
                                                }
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "header-title-time"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "page-time-display"
                                                ],
                                                value: function() {
                                                    return _vm_.time;
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "page-header-title"
                                                ],
                                                value: "设置"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "page-content"
                                    ]
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "settings-content"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "info-item"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "info-label"
                                                ],
                                                value: "您的宠物:"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "info-value"
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
                                                "info-item"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "info-label"
                                                ],
                                                value: "ID:"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "info-value"
                                                ],
                                                value: function() {
                                                    return _vm_.userId;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "menu-button"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.goToMoreOptions(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "menu-button-text"
                                                ],
                                                value: "更多选项"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "sync-button"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.handleCloudSync(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "sync-button-text"
                                        ],
                                        value: "云端同步"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "about-button"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.goToAbout(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "about-button-text"
                                        ],
                                        value: "关于"
                                    }
                                }, [])
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3NcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL3VzZXJTZXJ2aWNlLmpzIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvc2V0dGluZ3MvaW5kZXgudXgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBpLXNlcnZpY2UuanNcclxuaW1wb3J0IGZldGNoIGZyb20gJ0BzeXN0ZW0uZmV0Y2gnO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQHN5c3RlbS5zdG9yYWdlJztcclxuaW1wb3J0IHByb21wdCBmcm9tICdAc3lzdGVtLnByb21wdCc7XHJcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vY29uZmlnLmpzJztcclxuXHJcbmNsYXNzIEFwaVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8g5Lit6L2s5pyN5Yqh5Zmo5Zyw5Z2AIC0g5LuOIGNvbmZpZy5qcyDor7vlj5ZcclxuICAgIHRoaXMuYmFzZVVybCA9IENPTkZJRy5TRVJWRVIuQkFTRV9VUkw7XHJcbiAgICB0aGlzLmJhc2VIZWFkZXJzID0ge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g6YCa55So6K+35rGC5pa55rOVIC0g6YCa6L+H5Lit6L2s5pyN5Yqh5Zmo6L2s5Y+RXHJcbiAgYXN5bmMgcmVxdWVzdChhY3Rpb24sIGRhdGEgPSB7fSkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVXJsfS9hcGlgO1xyXG4gICAgXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXI6IHRoaXMuYmFzZUhlYWRlcnMsXHJcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICB9O1xyXG5cclxuICAgIG9wdGlvbnMuZGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgYWN0aW9uLCAuLi5kYXRhIH0pO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGZldGNoLmZldGNoKHtcclxuICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcclxuXHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuY29kZSA+PSAyMDAgJiYgcmVzcG9uc2UuY29kZSA8IDMwMCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlRGF0YSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEhUVFAgRXJyb3I6ICR7cmVzcG9uc2UuY29kZX1gLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYEhUVFAgJHtyZXNwb25zZS5jb2RlfTogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZURhdGEpfWApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogKGVycm9yLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgICAvLyBERVRBSUxFRCBMT0dHSU5HIEZPUiBORVRXT1JLIEZBSUxVUkVTXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBbQXBpU2VydmljZV0gUmVxdWVzdCBGYWlsZWQuIENvZGU6ICR7Y29kZX0sIEVycm9yOiAke0pTT04uc3RyaW5naWZ5KGVycm9yKX1gKTtcclxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkOiAke2Vycm9yLmRhdGEgfHwgJ0Nvbm5lY3Rpb24gaXMgaW52YWxpZCd9YCkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIOiOt+WPluaOkuihjOamnFxyXG4gIGFzeW5jIGdldFJhbmtpbmdzKGxpbWl0ID0gMTApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnZ2V0X3JhbmtpbmdzJywge1xyXG4gICAgICAgIGxpbWl0OiBsaW1pdFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgcmFua2luZ3M6IHJlc3VsdC5yYW5raW5ncyB8fCBbXVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfojrflj5bmjpLooYzmppzlpLHotKU6JywgZXJyb3IpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgcmFua2luZ3M6IFtdLFxyXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOS4iuaKpeeCueWHu+asoeaVsFxyXG4gIGFzeW5jIHN5bmNDbGlja3ModXNlcklkLCBjbGlja0NvdW50KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCB0aGlzLnJlcXVlc3QoJ3N5bmNfY2xpY2tzJywge1xyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcclxuICAgICAgICBjbGlja19jb3VudDogY2xpY2tDb3VudFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S4iuaKpeeCueWHu+asoeaVsOWksei0pTonLCBlcnJvcilcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDku47mnI3liqHlmajlkIzmraXmlbDmja5cclxuICBhc3luYyBzeW5jRnJvbVNlcnZlcih1c2VySWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnc3luY19mcm9tX3NlcnZlcicsIHtcclxuICAgICAgICB1c2VyX2lkOiB1c2VySWRcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+S7juacjeWKoeWZqOWQjOatpeaVsOaNruaIkOWKnzonLCByZXN1bHQudXNlckluZm8pO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVzZXJJbmZvOiByZXN1bHQudXNlckluZm8gfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCflkIzmraXmlbDmja7lpLHotKU6JywgcmVzdWx0ID8gcmVzdWx0LmVycm9yIDogJ+acquefpemUmeivrycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogKHJlc3VsdCA/IHJlc3VsdC5lcnJvciA6ICfmnI3liqHlmajmnKrov5Tlm57miJDlip/nirbmgIEnKSB9O1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfku47mnI3liqHlmajlkIzmraXmlbDmja7ml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOajgOafpeWuoOeJqeWQjeaYr+WQpuWPr+eUqFxyXG4gIGFzeW5jIGNoZWNrUGV0TmFtZUF2YWlsYWJpbGl0eShwZXROYW1lKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2NoZWNrX3BldF9uYW1lJywge1xyXG4gICAgICAgIHBldF9uYW1lOiBwZXROYW1lXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCAuLi5yZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+ajgOafpeWuoOeJqeWQjeWPr+eUqOaAp+aXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSwgaXNBdmFpbGFibGU6IGZhbHNlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDkv67mlLnlrqDnianlkI1cclxuICBhc3luYyBzZXRQZXROYW1lKHVzZXJJZCwgbmV3TmFtZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdzZXRfcGV0X25hbWUnLCB7XHJcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxyXG4gICAgICAgIG5ld19uYW1lOiBuZXdOYW1lXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5L+u5pS55a6g54mp5ZCN5aSx6LSlOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDpooTmv4DmtLvmo4Dmn6VcclxuICBhc3luYyBjaGVja0RldmljZVJlZ2lzdHJhdGlvbihkZXZpY2VJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdjaGVja19yZWdpc3RyYXRpb24nLCB7XHJcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coJ+mihOa/gOa0u+ajgOafpeaIkOWKnzonLCByZXN1bHQpO1xyXG4gICAgICAvLyDnm7TmjqXov5Tlm57mnI3liqHlmajnmoTljp/lp4vlk43lupTvvIxVSeWxguacn+acm+eahOaYr+aJgeW5s+e7k+aehFxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign6aKE5r+A5rS75qOA5p+l5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcclxuICAgICAgLy8g6L+U5Zue5LiA5Liq5YW85a6555qE6ZSZ6K+v5a+56LGh77yM6YG/5YWNVUnlsYLltKnmuoNcclxuICAgICAgcmV0dXJuIHsgaXNfcmVnaXN0ZXJlZDogZmFsc2UsIGNhbl9hdXRvX2FjdGl2YXRlOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOazqOWGjOiuvuWkh+W5tuiOt+WPlueUqOaIt0lEXHJcbiAgYXN5bmMgcmVnaXN0ZXJBbmRHZXRVc2VySWQoZGV2aWNlSWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIFBhc3MgdGhlIHNlcnZlciByZXNwb25zZSBkaXJlY3RseSB0byB0aGUgVUkgbGF5ZXJcclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucmVxdWVzdCgncmVnaXN0ZXJfZGV2aWNlX2FuZF9nZXRfaWQnLCB7XHJcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+azqOWGjOaIluiOt+WPlueUqOaIt0lE5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcclxuICAgICAgLy8gUmV0dXJuIGEgY29tcGF0aWJsZSBlcnJvciBvYmplY3RcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOiOt+WPluWFrOWRiuWIl+ihqFxyXG4gIGFzeW5jIGdldEFubm91bmNlbWVudHMobGltaXQgPSAxMCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdnZXRfYW5ub3VuY2VtZW50cycsIHtcclxuICAgICAgICBsaW1pdDogbGltaXRcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdPcmlnaW5hbCBhbm5vdW5jZW1lbnQgcmVzdWx0IGZyb20gc2VydmVyOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiByZXN1bHQuc3VjY2VzcyB8fCBmYWxzZSxcclxuICAgICAgICBhbm5vdW5jZW1lbnRzOiByZXN1bHQuYW5ub3VuY2VtZW50cyB8fCBbXSxcclxuICAgICAgICBjb3VudDogcmVzdWx0LmNvdW50IHx8IDAsXHJcbiAgICAgICAgdGltZXN0YW1wOiByZXN1bHQudGltZXN0YW1wLFxyXG4gICAgICAgIGVycm9yOiByZXN1bHQuZXJyb3JcclxuICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluWFrOWRiuWksei0pTonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgYW5ub3VuY2VtZW50czogW10sXHJcbiAgICAgICAgY291bnQ6IDBcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOajgOafpeW6lOeUqOabtOaWsFxyXG4gIGFzeW5jIGNoZWNrQXBwVXBkYXRlKGN1cnJlbnRWZXJzaW9uQ29kZSkge1xyXG4gICAgY29uc29sZS5sb2coJ1tBcGlTZXJ2aWNlXSBjaGVja0FwcFVwZGF0ZSBjYWxsZWQgd2l0aCBjdXJyZW50VmVyc2lvbkNvZGU6JywgY3VycmVudFZlcnNpb25Db2RlKTtcclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdjaGVja191cGRhdGUnLCB7XHJcbiAgICAgICAgY3VycmVudF92ZXJzaW9uX2NvZGU6IGN1cnJlbnRWZXJzaW9uQ29kZVxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgcmF3IHJlc3VsdDonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgY29uc29sZS5sb2coJ1tBcGlTZXJ2aWNlXSBjaGVja0FwcFVwZGF0ZSBoYXNfdXBkYXRlOicsIHJlc3VsdC5oYXNfdXBkYXRlKTtcclxuICAgICAgY29uc29sZS5sb2coJ1tBcGlTZXJ2aWNlXSBjaGVja0FwcFVwZGF0ZSB1cGRhdGVfaW5mbzonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQudXBkYXRlX2luZm8pKTtcclxuICAgICAgY29uc29sZS5sb2coJ1tBcGlTZXJ2aWNlXSBjaGVja0FwcFVwZGF0ZSBpc19mb3JjZV91cGRhdGU6JywgcmVzdWx0LmlzX2ZvcmNlX3VwZGF0ZSk7XHJcbiAgICAgIFxyXG4gICAgICAvLyDnoa7kv50gdXBkYXRlSW5mbyDljIXlkKvmiYDmnInlv4XopoHlrZfmrrVcclxuICAgICAgbGV0IHVwZGF0ZUluZm8gPSBudWxsO1xyXG4gICAgICBpZiAocmVzdWx0LnVwZGF0ZV9pbmZvKSB7XHJcbiAgICAgICAgdXBkYXRlSW5mbyA9IHtcclxuICAgICAgICAgIHZlcnNpb25fbmFtZTogcmVzdWx0LnVwZGF0ZV9pbmZvLnZlcnNpb25fbmFtZSB8fCAnJyxcclxuICAgICAgICAgIHZlcnNpb25fY29kZTogcmVzdWx0LnVwZGF0ZV9pbmZvLnZlcnNpb25fY29kZSB8fCAwLFxyXG4gICAgICAgICAgdGl0bGU6IHJlc3VsdC51cGRhdGVfaW5mby50aXRsZSB8fCAn5Y+R546w5paw54mI5pysJyxcclxuICAgICAgICAgIGNoYW5nZWxvZzogcmVzdWx0LnVwZGF0ZV9pbmZvLmNoYW5nZWxvZyB8fCAnJyxcclxuICAgICAgICAgIGRvd25sb2FkX3VybDogcmVzdWx0LnVwZGF0ZV9pbmZvLmRvd25sb2FkX3VybCB8fCAnJyxcclxuICAgICAgICAgIGZvcmNlX3VwZGF0ZTogcmVzdWx0LnVwZGF0ZV9pbmZvLmZvcmNlX3VwZGF0ZSB8fCBmYWxzZSxcclxuICAgICAgICAgIG1pbl9yZXF1aXJlZF92ZXJzaW9uOiByZXN1bHQudXBkYXRlX2luZm8ubWluX3JlcXVpcmVkX3ZlcnNpb24gfHwgMCxcclxuICAgICAgICAgIHJlbGVhc2VfdGltZTogcmVzdWx0LnVwZGF0ZV9pbmZvLnJlbGVhc2VfdGltZSB8fCAnJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tBcGlTZXJ2aWNlXSBjaGVja0FwcFVwZGF0ZSB1cGRhdGVJbmZvIGNvbnN0cnVjdGVkOicsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZUluZm8pKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIHVwZGF0ZV9pbmZvIGlzIG51bGwgb3IgdW5kZWZpbmVkJyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHJldHVyblJlc3VsdCA9IHtcclxuICAgICAgICBzdWNjZXNzOiByZXN1bHQuc3VjY2VzcyB8fCBmYWxzZSxcclxuICAgICAgICBoYXNVcGRhdGU6IHJlc3VsdC5oYXNfdXBkYXRlIHx8IGZhbHNlLFxyXG4gICAgICAgIHVwZGF0ZUluZm86IHVwZGF0ZUluZm8sXHJcbiAgICAgICAgaXNGb3JjZVVwZGF0ZTogcmVzdWx0LmlzX2ZvcmNlX3VwZGF0ZSB8fCBmYWxzZSxcclxuICAgICAgICBjdXJyZW50VmVyc2lvbkNvZGU6IHJlc3VsdC5jdXJyZW50X3ZlcnNpb25fY29kZSB8fCBjdXJyZW50VmVyc2lvbkNvZGUsXHJcbiAgICAgICAgbGF0ZXN0VmVyc2lvbkNvZGU6IHJlc3VsdC5sYXRlc3RfdmVyc2lvbl9jb2RlIHx8IGN1cnJlbnRWZXJzaW9uQ29kZSxcclxuICAgICAgICBlcnJvcjogcmVzdWx0LmVycm9yXHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZygnW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIHJldHVybiByZXN1bHQ6JywgSlNPTi5zdHJpbmdpZnkocmV0dXJuUmVzdWx0KSk7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gcmV0dXJuUmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIGVycm9yOicsIGVycm9yKTtcclxuICAgICAgY29uc29sZS5lcnJvcignW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIGVycm9yIG1lc3NhZ2U6JywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tBcGlTZXJ2aWNlXSBjaGVja0FwcFVwZGF0ZSBlcnJvciBzdGFjazonLCBlcnJvci5zdGFjayk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgaGFzVXBkYXRlOiBmYWxzZSxcclxuICAgICAgICBpc0ZvcmNlVXBkYXRlOiBmYWxzZVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwaVNlcnZpY2UoKVxyXG4iLCIvLyBjb25maWcuanNcclxuZXhwb3J0IGNvbnN0IENPTkZJRyA9IHtcclxuICAvLyDkuK3ovazmnI3liqHlmajphY3nva5cclxuICBTRVJWRVI6IHtcclxuICAgIEJBU0VfVVJMOiAnaHR0cDovLzEwMy4yMDUuMjUzLjg3OjIyMjA3J1xyXG4gIH0sXHJcbiAgXHJcbiAgLy8g5rOo5oSP77yaVVJMIOWJjee8gOWcqCBhcGktc2VydmljZS5qcyDkuK3noaznvJbnoIHkuoZcclxuICAvLyDov5nph4zkuI3lho3pnIDopoHphY3nva5cclxuICBcclxuICAvLyDlupTnlKjphY3nva5cclxuICBBUFA6IHtcclxuICAgIE5BTUU6ICdCYW5kUGV0JyxcclxuICAgIFZFUlNJT046ICcwLjQuMyBBbHBoYScsXHJcbiAgICBWRVJTSU9OX0NPREU6IDQzLCAgLy8g55So5LqO54mI5pys5q+U6L6D55qE5pWw5a2X77yIMC40LjMgLT4gNDPvvIlcclxuICAgIE1BWF9DTElDS1NfUEVSX0JBVENIOiA1MCxcclxuICAgIFNZTkNfSU5URVJWQUw6IDMwMDAwLCAgLy8gMzDnp5Loh6rliqjlkIzmraXkuIDmrKFcclxuICAgIFJBTktfTElNSVQ6IDEwLFxyXG4gICAgXHJcbiAgICAvLyDmm7TmlrDmo4Dmn6XphY3nva5cclxuICAgIENIRUNLX1VQREFURV9JTlRFUlZBTDogMzYwMDAwMCwgLy8gMeWwj+aXtuajgOafpeS4gOasoeabtOaWsO+8iDM2MDAwMDDmr6vnp5LvvIlcclxuICAgIEFOTk9VTkNFTUVOVF9DQUNIRV9USU1FOiAzMDAwMDAsIC8vIDXliIbpkp/nvJPlrZjlhazlkYpcclxuICB9LFxyXG4gIFxyXG4gIC8vIOWtmOWCqOmUruWQjVxyXG4gIFNUT1JBR0VfS0VZUzoge1xyXG4gICAgREVWSUNFX0lEOiAnZGV2aWNlX2lkJyxcclxuICAgIElTX0xPQ0FMTFlfQUNUSVZBVEVEOiAnaXNfbG9jYWxseV9hY3RpdmF0ZWQnLFxyXG4gICAgVVNFUl9JTkZPOiAndXNlcl9pbmZvJyxcclxuICAgIFBFTkRJTkdfQ0xJQ0tTOiAncGVuZGluZ19jbGlja3MnLFxyXG4gICAgTEFTVF9TWU5DX1RJTUU6ICdsYXN0X3N5bmNfdGltZScsXHJcbiAgICBUT1RBTF9DTElDS1M6ICd0b3RhbF9jbGlja3MnLFxyXG4gICAgXHJcbiAgICAvLyDmm7TmlrDnm7jlhbPlrZjlgqjplK5cclxuICAgIExBU1RfVVBEQVRFX0NIRUNLX1RJTUU6ICdsYXN0X3VwZGF0ZV9jaGVja190aW1lJyxcclxuICAgIExBU1RfQU5OT1VOQ0VNRU5UX0ZFVENIX1RJTUU6ICdsYXN0X2Fubm91bmNlbWVudF9mZXRjaF90aW1lJyxcclxuICAgIENBQ0hFRF9BTk5PVU5DRU1FTlRTOiAnY2FjaGVkX2Fubm91bmNlbWVudHMnLFxyXG4gICAgQ0FDSEVEX1VQREFURV9JTkZPOiAnY2FjaGVkX3VwZGF0ZV9pbmZvJyxcclxuICAgIElHTk9SRURfVkVSU0lPTjogJ2lnbm9yZWRfdmVyc2lvbl9jb2RlJywgLy8g55So5oi35b+955Wl55qE54mI5pysXHJcbiAgICBGT1JDRV9VUERBVEVfUkVRVUlSRUQ6ICdmb3JjZV91cGRhdGVfcmVxdWlyZWQnLCAvLyDmmK/lkKbpnIDopoHlvLrliLbmm7TmlrBcclxuICAgIFxyXG4gICAgLy8g55So5oi35YGP5aW96K6+572uXHJcbiAgICBWSUJSQVRJT05fRU5BQkxFRDogJ3ZpYnJhdGlvbl9lbmFibGVkJywgLy8g54K55Ye76ZyH5Yqo5byA5YWzXHJcbiAgfVxyXG59XHJcbiIsIi8vIHNyYy9jb21tb24vanMvdXNlclNlcnZpY2UuanNcbmltcG9ydCBkZXZpY2UgZnJvbSAnQHN5c3RlbS5kZXZpY2UnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQHN5c3RlbS5zdG9yYWdlJztcbmltcG9ydCBBcGlTZXJ2aWNlIGZyb20gJy4vYXBpLXNlcnZpY2UuanMnO1xuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25maWcuanMnO1xuXG4vKipcbiAqIEEgc2VydmljZSB0byBoYW5kbGUgc2lsZW50IHVzZXIgcmVnaXN0cmF0aW9uIGFuZCBkYXRhIHJldHJpZXZhbC5cbiAqL1xuY2xhc3MgVXNlclNlcnZpY2Uge1xuICBcbiAgLyoqXG4gICAqIFByb21pc2lmaWVkIGhlbHBlciBmb3Igc3RvcmFnZS5nZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IHRvIHJldHJpZXZlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBUaGUgdmFsdWUgZnJvbSBzdG9yYWdlLCBvciBudWxsIGlmIG5vdCBmb3VuZC5cbiAgICovXG4gIF9zdG9yYWdlR2V0KGtleSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc3RvcmFnZS5nZXQoe1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHJlc29sdmUoZGF0YSksXG4gICAgICAgIGZhaWw6ICgpID0+IHJlc29sdmUobnVsbCksXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9taXNpZmllZCBoZWxwZXIgZm9yIHN0b3JhZ2Uuc2V0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSB0byBzZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBzdG9yZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBfc3RvcmFnZVNldChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHN0b3JhZ2Uuc2V0KHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcbiAgICAgICAgZmFpbDogKGVyciwgY29kZSkgPT4gcmVqZWN0KG5ldyBFcnJvcihgU3RvcmFnZS5zZXQgZmFpbGVkIGZvciAnJHtrZXl9JzogJHtlcnJ9ICgke2NvZGV9KWApKSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgcmF3IGRldmljZSBpZGVudGlmaWVyLCB1c2luZyBhIGZhbGxiYWNrIGZvciBzaW11bGF0b3JzLlxuICAgKiBJdCBhbHNvIHNhdmVzIHRoZSByYXcgSUQgdG8gc3RvcmFnZSBmb3IgZnV0dXJlIHVzZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nfG51bGw+fSBUaGUgcmF3IGRldmljZSBJRCBvciBudWxsIG9uIGZhaWx1cmUuXG4gICAqL1xuICBfZ2V0UmF3RGV2aWNlSWQoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBkZXZpY2UuZ2V0U2VyaWFsKHtcbiAgICAgICAgc3VjY2VzczogYXN5bmMgKGRhdGEpID0+IHtcbiAgICAgICAgICBsZXQgc2VyaWFsID0gZGF0YSA/IGRhdGEuc2VyaWFsIDogbnVsbDtcbiAgICAgICAgICBpZiAoc2VyaWFsID09PSAnTkEnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJEZXZpY2Ugc2VyaWFsIGlzICdOQScsIHVzaW5nIGEgZml4ZWQgdGVzdCBzZXJpYWwuXCIpO1xuICAgICAgICAgICAgc2VyaWFsID0gJ1RFU1RWTS1TTi0wMTIzNDU2Nzg5JztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIXNlcmlhbCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdldCBhIHZhbGlkIGRldmljZSBzZXJpYWwuJyk7XG4gICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBTYXZlIHRoZSByYXcgSUQgZm9yIG90aGVyIHNlcnZpY2VzIHRoYXQgbWlnaHQgbmVlZCBpdCAoZS5nLiwgQVBJIGNhbGxzKVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fc3RvcmFnZVNldChDT05GSUcuU1RPUkFHRV9LRVlTLkRFVklDRV9JRCwgc2VyaWFsKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTYXZlZCByYXcgZGV2aWNlIElEOicsIHNlcmlhbCk7XG4gICAgICAgICAgICByZXNvbHZlKHNlcmlhbCk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNhdmUgcmF3IGRldmljZSBJRCB0byBzdG9yYWdlOicsIGUpO1xuICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IChlcnIsIGNvZGUpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBDb25uZWN0aW9uIGlzIGludmFsaWRgKTtcbiAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgdGhlIHVzZXIgaW5mb3JtYXRpb24gdG8gbG9jYWwgc3RvcmFnZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IHVzZXJJbmZvIC0gVGhlIHVzZXIgaW5mbyBvYmplY3QgcmVjZWl2ZWQgZnJvbSB0aGUgc2VydmVyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3Q+fSBUaGUgdXNlciBpbmZvIHRoYXQgd2FzIHNhdmVkLlxuICAgKi9cbiAgYXN5bmMgX3NhdmVVc2VySW5mbyh1c2VySW5mbykge1xuICAgIGlmICghdXNlckluZm8gfHwgKCF1c2VySW5mby5pZCAmJiAhdXNlckluZm8udXNlcl9udW1iZXIpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIGluZm8gaXMgaW52YWxpZCwgY2Fubm90IHNhdmUuXCIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB1c2VySW5mb1RvU2F2ZSA9IHtcbiAgICAgIGlkOiB1c2VySW5mby5pZCB8fCB1c2VySW5mby51c2VyX251bWJlcixcbiAgICAgIHVzZXJfbnVtYmVyOiB1c2VySW5mby51c2VyX251bWJlcixcbiAgICAgIHBldF9uYW1lOiB1c2VySW5mby5wZXRfbmFtZSxcbiAgICAgIHRvdGFsX2NsaWNrczogdXNlckluZm8udG90YWxfY2xpY2tzIHx8IDBcbiAgICB9O1xuXG4gICAgYXdhaXQgdGhpcy5fc3RvcmFnZVNldChDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTywgSlNPTi5zdHJpbmdpZnkodXNlckluZm9Ub1NhdmUpKTtcbiAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBzYXZlZCB1c2VyIGluZm8gdG8gc3RvcmFnZTpcIiwgdXNlckluZm9Ub1NhdmUpO1xuICAgIHJldHVybiB1c2VySW5mb1RvU2F2ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbWFpbiBwdWJsaWMgbWV0aG9kLiBJdCBlbnN1cmVzIHRoYXQgdXNlciBpbmZvcm1hdGlvbiBpcyBwcmVzZW50IGluIHN0b3JhZ2UuXG4gICAqIElmIG5vdCwgaXQgc2lsZW50bHkgZ2V0cyBhIGRldmljZSBJRCwgY2hlY2tzIHdpdGggdGhlIHNlcnZlciwgYW5kIGVpdGhlclxuICAgKiByZXRyaWV2ZXMgZXhpc3RpbmcgdXNlciBkYXRhIG9yIHJlZ2lzdGVycyBhIG5ldyB1c2VyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3R8bnVsbD59IFRoZSB1c2VyIGluZm8sIG9yIG51bGwgaWYgdGhlIHByb2Nlc3MgZmFpbHMuXG4gICAqL1xuICBhc3luYyBlbnN1cmVVc2VySXNSZWdpc3RlcmVkKGZvcmNlU3luYyA9IGZhbHNlKSB7XG4gICAgLy8gMS4gQ2hlY2sgaWYgdXNlciBpbmZvIGFscmVhZHkgZXhpc3RzIGFuZCBpcyB2YWxpZC5cbiAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBDaGVja2luZyBmb3IgZXhpc3RpbmcgdXNlciBpbmZvIGluIHN0b3JhZ2UuLi4nKTtcbiAgICBjb25zdCBleGlzdGluZ1VzZXJJbmZvSlNPTiA9IGF3YWl0IHRoaXMuX3N0b3JhZ2VHZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8pO1xuICAgIGlmIChleGlzdGluZ1VzZXJJbmZvSlNPTikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSBKU09OLnBhcnNlKGV4aXN0aW5nVXNlckluZm9KU09OKTtcbiAgICAgICAgaWYgKHVzZXJJbmZvICYmIHVzZXJJbmZvLmlkKSB7XG4gICAgICAgICAgaWYgKGZvcmNlU3luYykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gRm9yY2Ugc3luYyBlbmFibGVkLiBBdHRlbXB0aW5nIHRvIHN5bmMgbGF0ZXN0IGRhdGEgZnJvbSBzZXJ2ZXIuLi4nKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IHN5bmNSZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLnN5bmNGcm9tU2VydmVyKHVzZXJJbmZvLmlkKTtcbiAgICAgICAgICAgICAgaWYgKHN5bmNSZXN1bHQgJiYgc3luY1Jlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU3VjY2Vzc2Z1bGx5IHN5bmNlZCBmcm9tIHNlcnZlci4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fc2F2ZVVzZXJJbmZvKHN5bmNSZXN1bHQudXNlckluZm8pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignW1VzZXJTZXJ2aWNlXSBTeW5jIGZyb20gc2VydmVyIGZhaWxlZCwgd2lsbCB1c2Ugc3RhbGUgbG9jYWwgZGF0YS4gRXJyb3I6Jywgc3luY1Jlc3VsdCA/IHN5bmNSZXN1bHQuZXJyb3IgOiAnVW5rbm93biBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VySW5mbzsgLy8gUmV0dXJuIHN0YWxlIGRhdGEgaWYgc3luYyBmYWlsc1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChzeW5jRXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignW1VzZXJTZXJ2aWNlXSBBIGNyaXRpY2FsIGVycm9yIG9jY3VycmVkIGR1cmluZyBzZXJ2ZXIgc3luYzonLCBzeW5jRXJyb3IpO1xuICAgICAgICAgICAgICByZXR1cm4gdXNlckluZm87IC8vIFJldHVybiBzdGFsZSBkYXRhIG9uIGNyaXRpY2FsIHN5bmMgZmFpbHVyZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBVc2VyIGlzIGFscmVhZHkgcmVnaXN0ZXJlZC4gRm91bmQgaW5mbzonLCB1c2VySW5mbyk7XG4gICAgICAgICAgICByZXR1cm4gdXNlckluZm87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIE1hbGZvcm1lZCBKU09OLCBwcm9jZWVkIHdpdGggcmVnaXN0cmF0aW9uLlxuICAgICAgICBjb25zb2xlLndhcm4oJ1tVc2VyU2VydmljZV0gVXNlciBpbmZvIGluIHN0b3JhZ2UgaXMgbWFsZm9ybWVkLiBQcm9jZWVkaW5nIHdpdGggcmVnaXN0cmF0aW9uLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFVzZXIgbm90IGZvdW5kIGxvY2FsbHkuIFN0YXJ0aW5nIHNpbGVudCByZWdpc3RyYXRpb24gcHJvY2Vzcy4uLicpO1xuXG4gICAgLy8gMi4gR2V0IERldmljZSBJRFxuICAgIGNvbnN0IGRldmljZUlkID0gYXdhaXQgdGhpcy5fZ2V0UmF3RGV2aWNlSWQoKTtcbiAgICBpZiAoIWRldmljZUlkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbVXNlclNlcnZpY2VdIENSSVRJQ0FMOiBDYW5ub3QgcHJvY2VlZCB3aXRoIHJlZ2lzdHJhdGlvbjogZmFpbGVkIHRvIGdldCBkZXZpY2UgSUQuJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYFtVc2VyU2VydmljZV0gR290IGRldmljZSBJRDogJHtkZXZpY2VJZH1gKTtcblxuICAgIHRyeSB7XG4gICAgICAvLyAzLiBDaGVjayBpZiB0aGUgZGV2aWNlIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCBvbiB0aGUgc2VydmVyXG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBDaGVja2luZyBkZXZpY2UgcmVnaXN0cmF0aW9uIHdpdGggc2VydmVyLi4uJyk7XG4gICAgICBjb25zdCByZWdSZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLmNoZWNrRGV2aWNlUmVnaXN0cmF0aW9uKGRldmljZUlkKTtcbiAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFNlcnZlciByZWdpc3RyYXRpb24gY2hlY2sgcmVzcG9uc2U6JywgSlNPTi5zdHJpbmdpZnkocmVnUmVzdWx0KSk7XG5cblxuICAgICAgaWYgKHJlZ1Jlc3VsdCAmJiByZWdSZXN1bHQuaXNfcmVnaXN0ZXJlZCAmJiByZWdSZXN1bHQudXNlckluZm8pIHtcbiAgICAgICAgLy8gRGV2aWNlIGlzIGtub3duLCBzYXZlIHRoZSBpbmZvIGFuZCB3ZSdyZSBkb25lLlxuICAgICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBEZXZpY2UgaXMgYWxyZWFkeSByZWdpc3RlcmVkIG9uIHNlcnZlci4gUmVzdG9yaW5nIHVzZXIgaW5mby4nKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX3NhdmVVc2VySW5mbyhyZWdSZXN1bHQudXNlckluZm8pO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyA0LiBJZiBub3QgcmVnaXN0ZXJlZCwgY3JlYXRlIGEgbmV3IHVzZXIgcmVjb3JkLlxuICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gRGV2aWNlIG5vdCByZWdpc3RlcmVkLiBBdHRlbXB0aW5nIHRvIHJlZ2lzdGVyIGEgbmV3IHVzZXIuLi4nKTtcbiAgICAgIGNvbnN0IG5ld1JlZ1Jlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2UucmVnaXN0ZXJBbmRHZXRVc2VySWQoZGV2aWNlSWQpO1xuICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU2VydmVyIG5ldyB1c2VyIHJlZ2lzdHJhdGlvbiByZXNwb25zZTonLCBKU09OLnN0cmluZ2lmeShuZXdSZWdSZXN1bHQpKTtcblxuXG4gICAgICBpZiAobmV3UmVnUmVzdWx0ICYmIG5ld1JlZ1Jlc3VsdC5zdWNjZXNzICYmIG5ld1JlZ1Jlc3VsdC51c2VySW5mbykge1xuICAgICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZCBuZXcgdXNlci4nKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX3NhdmVVc2VySW5mbyhuZXdSZWdSZXN1bHQudXNlckluZm8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW1VzZXJTZXJ2aWNlXSBDUklUSUNBTDogRmFpbGVkIHRvIHJlZ2lzdGVyIG5ldyB1c2VyLicsIG5ld1JlZ1Jlc3VsdCA/IG5ld1JlZ1Jlc3VsdC5tZXNzYWdlIDogJ05vIHJlc3VsdCBmcm9tIHNlcnZlcicpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbVXNlclNlcnZpY2VdIENSSVRJQ0FMOiBBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgdGhlIHNpbGVudCByZWdpc3RyYXRpb24gQVBJIGNhbGxzOicsIGUpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIG51bWJlciBvZiBwZW5kaW5nIGNsaWNrcyBieSBhIGdpdmVuIGFtb3VudC5cbiAgICogVGhpcyBpcyB0aGUgY2VudHJhbGl6ZWQgbWV0aG9kIGZvciBhbGwgY2xpY2sgbW9kaWZpY2F0aW9ucy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGFtb3VudCAtIFRoZSBudW1iZXIgdG8gYWRkIHRvIHBlbmRpbmcgY2xpY2tzLiBDYW4gYmUgbmVnYXRpdmUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcnxudWxsPn0gVGhlIG5ldyBudW1iZXIgb2YgcGVuZGluZyBjbGlja3MsIG9yIG51bGwgb24gZmFpbHVyZS5cbiAgICovXG4gIGFzeW5jIHVwZGF0ZVBlbmRpbmdDbGlja3MoYW1vdW50KSB7XG4gICAgaWYgKHR5cGVvZiBhbW91bnQgIT09ICdudW1iZXInIHx8IGlzTmFOKGFtb3VudCkpIHtcbiAgICAgIGNvbnNvbGUud2FybignW1VzZXJTZXJ2aWNlXSB1cGRhdGVQZW5kaW5nQ2xpY2tzIHJlY2VpdmVkIGFuIGludmFsaWQgYW1vdW50OicsIGFtb3VudCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcGVuZGluZ0NsaWNrc0RhdGEgPSBhd2FpdCB0aGlzLl9zdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuUEVORElOR19DTElDS1MpO1xuICAgICAgbGV0IGN1cnJlbnRDbGlja3MgPSBwYXJzZUludChwZW5kaW5nQ2xpY2tzRGF0YSkgfHwgMDtcbiAgICAgIFxuICAgICAgY29uc3QgbmV3Q2xpY2tzID0gY3VycmVudENsaWNrcyArIGFtb3VudDtcbiAgICAgIFxuICAgICAgYXdhaXQgdGhpcy5fc3RvcmFnZVNldChDT05GSUcuU1RPUkFHRV9LRVlTLlBFTkRJTkdfQ0xJQ0tTLCBuZXdDbGlja3MudG9TdHJpbmcoKSk7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKGBbVXNlclNlcnZpY2VdIFBlbmRpbmcgY2xpY2tzIHVwZGF0ZWQgYnkgJHthbW91bnR9LiBOZXcgdmFsdWU6ICR7bmV3Q2xpY2tzfWApO1xuICAgICAgcmV0dXJuIG5ld0NsaWNrcztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbVXNlclNlcnZpY2VdIEZhaWxlZCB0byB1cGRhdGUgcGVuZGluZyBjbGlja3MgaW4gc3RvcmFnZTonLCBlKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyBwZW5kaW5nIGNsaWNrcyBmcm9tIHN0b3JhZ2UgYW5kIHN5bmNzIHRoZW0gd2l0aCB0aGUgc2VydmVyLlxuICAgKiBUaGlzIGlzIGEgc2VsZi1jb250YWluZWQsIGZpcmUtYW5kLWZvcmdldCBtZXRob2QuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBUcnVlIG9uIHN1Y2Nlc3MsIGZhbHNlIG9uIGZhaWx1cmUgb3IgaWYgbm8gc3luYyB3YXMgbmVlZGVkLlxuICAgKi9cbiAgYXN5bmMgdHJpZ2dlckNsaWNrU3luYygpIHtcbiAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBUcmlnZ2VyaW5nIGNsaWNrIHN5bmMuLi4nKTtcbiAgICBcbiAgICAvLyAxLiBHZXQgdXNlciBpbmZvXG4gICAgY29uc3QgdXNlckluZm9KU09OID0gYXdhaXQgdGhpcy5fc3RvcmFnZUdldChDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTyk7XG4gICAgaWYgKCF1c2VySW5mb0pTT04pIHtcbiAgICAgIGNvbnNvbGUud2FybignW1VzZXJTZXJ2aWNlXSBTeW5jIGFib3J0ZWQ6IFVzZXIgaW5mbyBub3QgZm91bmQgaW4gc3RvcmFnZS4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgbGV0IHVzZXJJbmZvO1xuICAgIHRyeSB7XG4gICAgICB1c2VySW5mbyA9IEpTT04ucGFyc2UodXNlckluZm9KU09OKTtcbiAgICAgIGlmICghdXNlckluZm8gfHwgIXVzZXJJbmZvLmlkKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW1VzZXJTZXJ2aWNlXSBTeW5jIGFib3J0ZWQ6IFVzZXIgSUQgaXMgaW52YWxpZC4nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgY29uc29sZS53YXJuKCdbVXNlclNlcnZpY2VdIFN5bmMgYWJvcnRlZDogQ291bGQgbm90IHBhcnNlIHVzZXIgaW5mby4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAyLiBHZXQgcGVuZGluZyBjbGlja3NcbiAgICBjb25zdCBwZW5kaW5nQ2xpY2tzRGF0YSA9IGF3YWl0IHRoaXMuX3N0b3JhZ2VHZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5QRU5ESU5HX0NMSUNLUyk7XG4gICAgY29uc3QgY2xpY2tzVG9TeW5jID0gcGFyc2VJbnQocGVuZGluZ0NsaWNrc0RhdGEpO1xuXG4gICAgaWYgKGlzTmFOKGNsaWNrc1RvU3luYykpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIE5vIHBlbmRpbmcgY2xpY2tzIHRvIHN5bmMgKHZhbHVlIGlzIE5hTikuJyk7XG4gICAgICByZXR1cm4gdHJ1ZTsgLy8gTm90aGluZyB0byBkbywgc28gaXQncyBhIFwic3VjY2Vzc1wiXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYFtVc2VyU2VydmljZV0gRm91bmQgJHtjbGlja3NUb1N5bmN9IHBlbmRpbmcgY2xpY2tzIGZvciB1c2VyICR7dXNlckluZm8uaWR9LiBTeW5jaW5nLi4uYCk7XG5cbiAgICAvLyAzLiBDYWxsIEFQSVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2Uuc3luY0NsaWNrcyh1c2VySW5mby5pZCwgY2xpY2tzVG9TeW5jKTtcblxuICAgIC8vIDQuIFVwZGF0ZSBzdG9yYWdlIG9uIHN1Y2Nlc3NcbiAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFN5bmMgc3VjY2Vzc2Z1bC4nKTtcbiAgICAgIFxuICAgICAgLy8g44CQ5L+u5aSN44CR5ZCM5q2l5oiQ5Yqf5ZCO77yM5YWI5oqK5b6F5LiK5Lyg5pWw6YeP5Yqg5Yiw5pys5Zyw5oC754K55Ye75pWw77yM5YaN5riF56m65b6F5LiK5LygXG4gICAgICBjb25zdCBjdXJyZW50VG90YWxDbGlja3MgPSBwYXJzZUludChhd2FpdCB0aGlzLl9zdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuVE9UQUxfQ0xJQ0tTKSkgfHwgMDtcbiAgICAgIGNvbnN0IHVwZGF0ZWRUb3RhbENsaWNrcyA9IGN1cnJlbnRUb3RhbENsaWNrcyArIGNsaWNrc1RvU3luYztcbiAgICAgIGF3YWl0IHRoaXMuX3N0b3JhZ2VTZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5UT1RBTF9DTElDS1MsIHVwZGF0ZWRUb3RhbENsaWNrcy50b1N0cmluZygpKTtcbiAgICAgIGNvbnNvbGUubG9nKGBbVXNlclNlcnZpY2VdIEFkZGVkIHBlbmRpbmcgY2xpY2tzIHRvIHRvdGFsOiAke2N1cnJlbnRUb3RhbENsaWNrc30gKyAke2NsaWNrc1RvU3luY30gPSAke3VwZGF0ZWRUb3RhbENsaWNrc31gKTtcbiAgICAgIFxuICAgICAgLy8g5riF56m65b6F5LiK5Lyg5pWw6YePXG4gICAgICBhd2FpdCB0aGlzLl9zdG9yYWdlU2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuUEVORElOR19DTElDS1MsICcwJyk7XG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBSZXNldHRpbmcgcGVuZGluZyBjbGlja3MgdG8gMCcpO1xuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignW1VzZXJTZXJ2aWNlXSBTeW5jIGZhaWxlZDonLCByZXN1bHQuZXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIHRoZSBsYXRlc3QgdXNlciBkYXRhIGZyb20gdGhlIHNlcnZlciBhbmQgb3ZlcndyaXRlcyBsb2NhbCBzdG9yYWdlLlxuICAgKiBUaGlzIG1ldGhvZCBydW5zIHRoZSBmdWxsIHJlZ2lzdHJhdGlvbi9sb2dpbiBmbG93IHRvIGVuc3VyZSBkYXRhIGlzIGNvbnNpc3RlbnQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmd9Pn1cbiAgICovXG4gIGFzeW5jIGZvcmNlU3luY0Zyb21TZXJ2ZXIoKSB7XG4gICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU3RhcnRpbmcgZm9yY2Ugc3luYyBmcm9tIHNlcnZlci4uLicpO1xuICAgIFxuICAgIHRyeSB7XG4gICAgICAvLyAxLiBGb3JjZSBhIHN5bmMgb2YgYW55IHBlbmRpbmcgY2xpY2tzIEZJUlNULlxuICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU3RlcCAxOiBTeW5jaW5nIGxvY2FsIHBlbmRpbmcgY2xpY2tzIGJlZm9yZSBmZXRjaGluZyBzZXJ2ZXIgZGF0YS4nKTtcbiAgICAgIGNvbnN0IGNsaWNrU3luY1N1Y2Nlc3MgPSBhd2FpdCB0aGlzLnRyaWdnZXJDbGlja1N5bmMoKTtcblxuICAgICAgaWYgKCFjbGlja1N5bmNTdWNjZXNzKSB7XG4gICAgICAgIC8vIElmIHRoZSBjbGljayBzeW5jIGZhaWxzLCB3ZSBzaG91bGQgbm90IHByb2NlZWQsIGFzIHdlIG1pZ2h0IG92ZXJ3cml0ZSB0aGUgbG9jYWwgc3RhdGVcbiAgICAgICAgLy8gd2l0aCBzdGFsZSBzZXJ2ZXIgZGF0YSwgY2F1c2luZyB0aGUgdXNlciB0byBsb3NlIHRoZWlyIHBlbmRpbmcgY2xpY2tzLlxuICAgICAgICBjb25zdCBlcnJvck1zZyA9ICfml6Dms5XlkIzmraXmnKzlnLDngrnlh7vmlbDmja7vvIzlt7Llj5bmtojku47mnI3liqHlmajmm7TmlrDvvIzku6XpmLLmlbDmja7kuKLlpLHjgIInO1xuICAgICAgICBjb25zb2xlLmVycm9yKGBbVXNlclNlcnZpY2VdICR7ZXJyb3JNc2d9YCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvck1zZyB9O1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU3RlcCAxOiBMb2NhbCBwZW5kaW5nIGNsaWNrcyBzeW5jZWQgc3VjY2Vzc2Z1bGx5LicpO1xuXG5cbiAgICAgIC8vIDIuIE5vdywgcnVuIHRoZSBmdWxsIGdldC9yZWdpc3RlciB1c2VyIGZsb3cgdG8gZ2V0IHRoZSBsYXRlc3Qgc3RhdGUgZnJvbSB0aGUgc2VydmVyLlxuICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU3RlcCAyOiBGZXRjaGluZyBsYXRlc3QgdXNlciBkYXRhIGZyb20gc2VydmVyLicpO1xuICAgICAgY29uc3QgdXNlckluZm8gPSBhd2FpdCB0aGlzLmVuc3VyZVVzZXJJc1JlZ2lzdGVyZWQodHJ1ZSk7XG5cbiAgICAgIGlmICh1c2VySW5mbyAmJiB1c2VySW5mby5pZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdGVwIDI6IFN1Y2Nlc3NmdWxseSBmZXRjaGVkIGFuZCB1cGRhdGVkIHVzZXIgaW5mby4gVXNlckluZm86JywgdXNlckluZm8pO1xuICAgICAgICBcbiAgICAgICAgLy8g44CQ5L+u5aSN44CR5ZCM5q2l5oiQ5Yqf5ZCO77yM5bCG5pyN5Yqh5Zmo55qEIHRvdGFsX2NsaWNrcyDopobnm5bliLDmnKzlnLBcbiAgICAgICAgaWYgKHVzZXJJbmZvLnRvdGFsX2NsaWNrcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fc3RvcmFnZVNldChDT05GSUcuU1RPUkFHRV9LRVlTLlRPVEFMX0NMSUNLUywgdXNlckluZm8udG90YWxfY2xpY2tzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBbVXNlclNlcnZpY2VdIFVwZGF0ZWQgbG9jYWwgdG90YWxfY2xpY2tzIHRvIHNlcnZlciB2YWx1ZTogJHt1c2VySW5mby50b3RhbF9jbGlja3N9YCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIEZvcmNlIHN5bmMgY29tcGxldGUuIExvY2FsIHN0b3JhZ2UgaXMgbm93IHVwLXRvLWRhdGUuJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICflkIzmraXmiJDlip/vvIEnIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlcnJvck1zZyA9ICfml6Dms5Xku47mnI3liqHlmajojrflj5bmnIDmlrDnlKjmiLfmlbDmja7jgIInO1xuICAgICAgICBjb25zb2xlLmVycm9yKGBbVXNlclNlcnZpY2VdICR7ZXJyb3JNc2d9YCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvck1zZyB9O1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tVc2VyU2VydmljZV0gQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHRoZSBmb3JjZSBzeW5jIHByb2Nlc3M6JywgZSk7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ+WQjOatpeWksei0pe+8jOWPkeeUn+acquefpemUmeivrycgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJTZXJ2aWNlKCk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS42LjhcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNi44XCI7IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJcIj5cclxuICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uL2JhY2sucG5nXCIgY2xhc3M9XCJwYWdlLWhlYWRlci1iYWNrLWJ1dHRvblwiIG9uY2xpY2s9XCJnb0JhY2tcIj48L2ltYWdlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGUtdGltZVwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLXRpbWUtZGlzcGxheVwiPnt7IHRpbWUgfX08L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtaGVhZGVyLXRpdGxlXCI+6K6+572uPC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWl0ZW1cIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaW5mby1sYWJlbFwiPuaCqOeahOWuoOeJqTo8L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImluZm8tdmFsdWVcIj57eyBwZXROYW1lIH19PC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWl0ZW1cIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaW5mby1sYWJlbFwiPklEOjwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaW5mby12YWx1ZVwiPnt7IHVzZXJJZCB9fTwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8IS0tIOabtOWkmumAiemhueaMiemSriAtLT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1idXR0b25cIiBvbmNsaWNrPVwiZ29Ub01vcmVPcHRpb25zXCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cIm1lbnUtYnV0dG9uLXRleHRcIj7mm7TlpJrpgInpobk8L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic3luYy1idXR0b25cIiBvbmNsaWNrPVwiaGFuZGxlQ2xvdWRTeW5jXCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJzeW5jLWJ1dHRvbi10ZXh0XCI+5LqR56uv5ZCM5q2lPC90ZXh0PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtYnV0dG9uXCIgb25jbGljaz1cImdvVG9BYm91dFwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiYWJvdXQtYnV0dG9uLXRleHRcIj7lhbPkuo48L3RleHQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuICAucGFnZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5wYWdlLWhlYWRlci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICAucGFnZS10aW1lLWRpc3BsYXkge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgfVxyXG4gIC5wYWdlLWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5wYWdlLWhlYWRlci1iYWNrLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDBweDtcclxuICB9XHJcbiAgLnBhZ2UtaGVhZGVyLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gIH1cclxuICAuaGVhZGVyLXRpdGxlLXRpbWUge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5wYWdlLWNvbnRlbnQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleDogMTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgfVxyXG4gIC5zZXR0aW5ncy1jb250ZW50IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgLmluZm8taXRlbSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG4gIC5pbmZvLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjQUFBQUFBO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICAuaW5mby12YWx1ZSB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgLm1lbnUtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICAubWVudS1idXR0b24tdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgLmFib3V0LWJ1dHRvbiwgLnN5bmMtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuYWJvdXQtYnV0dG9uIHtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICAuc3luYy1idXR0b24ge1xyXG4gICAgbGVmdDogMjBweDtcclxuICB9XHJcbiAgLmFib3V0LWJ1dHRvbi10ZXh0LCAuc3luYy1idXR0b24tdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xyXG4gIGltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XHJcbiAgaW1wb3J0IHByb21wdCBmcm9tICdAc3lzdGVtLnByb21wdCc7XHJcbiAgaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi4vY29tbW9uL2pzL2NvbmZpZy5qcyc7XHJcbiAgaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJy4uL2NvbW1vbi9qcy91c2VyU2VydmljZS5qcyc7XHJcblxyXG4gIC8vIFByb21pc2lmaWVkIGhlbHBlciBmb3Igc3RvcmFnZS5nZXQgdG8gaGFuZGxlIGFzeW5jL2F3YWl0IGNvcnJlY3RseS5cclxuICBjb25zdCBfcHJvbWlzaWZpZWRTdG9yYWdlR2V0ID0gKGtleSkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHN0b3JhZ2UuZ2V0KHtcclxuICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4gcmVzb2x2ZShkYXRhKSxcclxuICAgICAgICBmYWlsOiAoKSA9PiByZXNvbHZlKG51bGwpXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YToge1xyXG4gICAgICB0aW1lOiAnMDA6MDAnLFxyXG4gICAgICBwZXROYW1lOiAn5Yqg6L295LitLi4uJyxcclxuICAgICAgdXNlcklkOiAn5Yqg6L295LitLi4uJ1xyXG4gICAgfSxcclxuICAgIG9uSW5pdCgpIHtcclxuICAgICAgdGhpcy5sb2FkVXNlckluZm8oKTtcclxuICAgICAgdGhpcy51cGRhdGVUaW1lKCk7XHJcbiAgICAgIHNldEludGVydmFsKHRoaXMudXBkYXRlVGltZSwgMTAwMDApO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGxvYWRVc2VySW5mbygpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1tTZXR0aW5nc1BhZ2VdIExvYWRpbmcgdXNlciBpbmZvLi4uJyk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlckluZm9KU09OID0gYXdhaXQgX3Byb21pc2lmaWVkU3RvcmFnZUdldChDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTyk7XHJcblxyXG4gICAgICAgIGlmICh1c2VySW5mb0pTT04pIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbU2V0dGluZ3NQYWdlXSBGb3VuZCB1c2VyIGluZm8gZGF0YSBpbiBzdG9yYWdlLicpO1xyXG4gICAgICAgICAgY29uc3QgdXNlckluZm8gPSBKU09OLnBhcnNlKHVzZXJJbmZvSlNPTik7XHJcbiAgICAgICAgICBpZiAodXNlckluZm8gJiYgdXNlckluZm8uaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wZXROYW1lID0gdXNlckluZm8ucGV0X25hbWUgfHwgJyjml6DlkI0pJztcclxuICAgICAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySW5mby5pZCB8fCAn5pegJztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFtTZXR0aW5nc1BhZ2VdIFN1Y2Nlc3NmdWxseSBsb2FkZWQgdXNlciBpbmZvOiBOYW1lPScke3RoaXMucGV0TmFtZX0nLCBJRD0nJHt0aGlzLnVzZXJJZH0nYCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1tTZXR0aW5nc1BhZ2VdIFVzZXIgaW5mbyBkYXRhIHdhcyBmb3VuZCwgYnV0IGl0IHdhcyBpbnZhbGlkIChtaXNzaW5nIGlkKS4nKTtcclxuICAgICAgICAgICAgdGhpcy5wZXROYW1lID0gJ+S/oeaBr+aXoOaViCc7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcklkID0gJ+aXoCc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdbU2V0dGluZ3NQYWdlXSBDb3VsZCBub3QgZmluZCB1c2VyIGluZm8gaW4gc3RvcmFnZS4nKTtcclxuICAgICAgICAgICAgdGhpcy5wZXROYW1lID0gJ+aXoOS/oeaBryc7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcklkID0gJ+aXoCc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltTZXR0aW5nc1BhZ2VdIEEgY3JpdGljYWwgZXJyb3Igb2NjdXJyZWQgd2hpbGUgbG9hZGluZyB1c2VyIGluZm86XCIsIGUpO1xyXG4gICAgICAgIHRoaXMucGV0TmFtZSA9ICfliqDovb3lpLHotKUnO1xyXG4gICAgICAgIHRoaXMudXNlcklkID0gJ+WKoOi9veWksei0pSc7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGVUaW1lKCkge1xyXG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBjb25zdCBob3VycyA9IG5vdy5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgY29uc3QgbWludXRlcyA9IG5vdy5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICB0aGlzLnRpbWUgPSBgJHtob3Vyc306JHttaW51dGVzfWA7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgaGFuZGxlQ2xvdWRTeW5jKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnW1NldHRpbmdzUGFnZV0gU3RhcnRpbmcgY2xvdWQgc3luYy4uLicpO1xyXG4gICAgICBwcm9tcHQuc2hvd1RvYXN0KHsgbWVzc2FnZTogJ+ato+WcqOS7juS6keerr+WQjOatpS4uLicgfSk7XHJcbiAgICAgIFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIDEuIOWFiOS4iuS8oOacquWQjOatpeeahOaVsOaNrlxyXG4gICAgICAgIGNvbnN0IHVwbG9hZFN1Y2Nlc3MgPSBhd2FpdCBVc2VyU2VydmljZS50cmlnZ2VyQ2xpY2tTeW5jKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF1cGxvYWRTdWNjZXNzKSB7XHJcbiAgICAgICAgICAvLyDkuIrkvKDlpLHotKXvvIzkv53nlZnmnKrlkIzmraXmlbDmja7kuI3lj5hcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbU2V0dGluZ3NQYWdlXSBVcGxvYWQgZmFpbGVkLCBrZWVwaW5nIHBlbmRpbmcgY2xpY2tzIHVuY2hhbmdlZCcpO1xyXG4gICAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7IG1lc3NhZ2U6ICfkuIrkvKDlpLHotKXvvIzor7fnqI3lkI7ph43or5UnIH0pO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyAyLiDkuIrkvKDmiJDlip/lkI7vvIzku47mnI3liqHlmajor7fmsYLmnIDmlrDnmoTngrnlh7vmrKHmlbBcclxuICAgICAgICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IFVzZXJTZXJ2aWNlLmVuc3VyZVVzZXJJc1JlZ2lzdGVyZWQodHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHVzZXJJbmZvICYmIHVzZXJJbmZvLnRvdGFsX2NsaWNrcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAvLyDmm7TmlrDmnKzlnLDnmoTmgLvngrnlh7vmlbBcclxuICAgICAgICAgIGNvbnN0IF9wcm9taXNpZmllZFN0b3JhZ2VTZXQgPSAoa2V5LCB2YWx1ZSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBzdG9yYWdlLnNldCh7IGtleSwgdmFsdWUsIHN1Y2Nlc3M6IHJlc29sdmUsIGZhaWw6IChlcnIsIGNvZGUpID0+IHJlamVjdChuZXcgRXJyb3IoYFN0b3JhZ2Uuc2V0IGZhaWxlZCBmb3Iga2V5ICcke2tleX0nIHdpdGggY29kZSAke2NvZGV9OiAke2Vycn1gKSkgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgYXdhaXQgX3Byb21pc2lmaWVkU3RvcmFnZVNldChDT05GSUcuU1RPUkFHRV9LRVlTLlRPVEFMX0NMSUNLUywgdXNlckluZm8udG90YWxfY2xpY2tzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYFtTZXR0aW5nc1BhZ2VdIFVwZGF0ZWQgdG90YWxfY2xpY2tzIGZyb20gc2VydmVyOiAke3VzZXJJbmZvLnRvdGFsX2NsaWNrc31gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7IG1lc3NhZ2U6ICflkIzmraXmiJDlip/vvIEnIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tTZXR0aW5nc1BhZ2VdIENsb3VkIHN5bmMgZmFpbGVkOicsIGVycm9yKTtcclxuICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHsgbWVzc2FnZTogJ+WQjOatpeWksei0pe+8jOWPkeeUn+mUmeivrycgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgIHJvdXRlci5iYWNrKCk7XHJcbiAgICB9LFxyXG4gICAgZ29Ub0Fib3V0KCkge1xyXG4gICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgdXJpOiAnYWJvdXQnXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdvVG9Nb3JlT3B0aW9ucygpIHtcclxuICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgIHVyaTogJ21vcmUtb3B0aW9ucydcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD4iXSwibmFtZXMiOlsiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX3N5c3RlbTIiLCJfc3lzdGVtMyIsIl9zeXN0ZW00IiwiX2NvbmZpZyIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJvd25LZXlzIiwiciIsInQiLCJPYmplY3QiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsInZhbHVlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiQXBpU2VydmljZSIsImNvbnN0cnVjdG9yIiwiYmFzZVVybCIsIkNPTkZJRyIsIlNFUlZFUiIsIkJBU0VfVVJMIiwiYmFzZUhlYWRlcnMiLCJyZXF1ZXN0IiwiYWN0aW9uIiwiZGF0YSIsInVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXIiLCJyZXNwb25zZVR5cGUiLCJKU09OIiwic3RyaW5naWZ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInJlc3BvbnNlRGF0YSIsImNvZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImZhaWwiLCJnZXRSYW5raW5ncyIsImxpbWl0IiwicmVzdWx0IiwicmFua2luZ3MiLCJtZXNzYWdlIiwic3luY0NsaWNrcyIsInVzZXJJZCIsImNsaWNrQ291bnQiLCJ1c2VyX2lkIiwiY2xpY2tfY291bnQiLCJzeW5jRnJvbVNlcnZlciIsImxvZyIsInVzZXJJbmZvIiwiY2hlY2tQZXROYW1lQXZhaWxhYmlsaXR5IiwicGV0TmFtZSIsInBldF9uYW1lIiwiaXNBdmFpbGFibGUiLCJzZXRQZXROYW1lIiwibmV3TmFtZSIsIm5ld19uYW1lIiwiY2hlY2tEZXZpY2VSZWdpc3RyYXRpb24iLCJkZXZpY2VJZCIsImRldmljZV9pZCIsImlzX3JlZ2lzdGVyZWQiLCJjYW5fYXV0b19hY3RpdmF0ZSIsInJlZ2lzdGVyQW5kR2V0VXNlcklkIiwiZ2V0QW5ub3VuY2VtZW50cyIsImFubm91bmNlbWVudHMiLCJjb3VudCIsInRpbWVzdGFtcCIsImNoZWNrQXBwVXBkYXRlIiwiY3VycmVudFZlcnNpb25Db2RlIiwiY3VycmVudF92ZXJzaW9uX2NvZGUiLCJoYXNfdXBkYXRlIiwidXBkYXRlX2luZm8iLCJpc19mb3JjZV91cGRhdGUiLCJ1cGRhdGVJbmZvIiwidmVyc2lvbl9uYW1lIiwidmVyc2lvbl9jb2RlIiwidGl0bGUiLCJjaGFuZ2Vsb2ciLCJkb3dubG9hZF91cmwiLCJmb3JjZV91cGRhdGUiLCJtaW5fcmVxdWlyZWRfdmVyc2lvbiIsInJlbGVhc2VfdGltZSIsInJldHVyblJlc3VsdCIsImhhc1VwZGF0ZSIsImlzRm9yY2VVcGRhdGUiLCJsYXRlc3RWZXJzaW9uQ29kZSIsImxhdGVzdF92ZXJzaW9uX2NvZGUiLCJzdGFjayIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIkFQUCIsIk5BTUUiLCJWRVJTSU9OIiwiVkVSU0lPTl9DT0RFIiwiTUFYX0NMSUNLU19QRVJfQkFUQ0giLCJTWU5DX0lOVEVSVkFMIiwiUkFOS19MSU1JVCIsIkNIRUNLX1VQREFURV9JTlRFUlZBTCIsIkFOTk9VTkNFTUVOVF9DQUNIRV9USU1FIiwiU1RPUkFHRV9LRVlTIiwiREVWSUNFX0lEIiwiSVNfTE9DQUxMWV9BQ1RJVkFURUQiLCJVU0VSX0lORk8iLCJQRU5ESU5HX0NMSUNLUyIsIkxBU1RfU1lOQ19USU1FIiwiVE9UQUxfQ0xJQ0tTIiwiTEFTVF9VUERBVEVfQ0hFQ0tfVElNRSIsIkxBU1RfQU5OT1VOQ0VNRU5UX0ZFVENIX1RJTUUiLCJDQUNIRURfQU5OT1VOQ0VNRU5UUyIsIkNBQ0hFRF9VUERBVEVfSU5GTyIsIklHTk9SRURfVkVSU0lPTiIsIkZPUkNFX1VQREFURV9SRVFVSVJFRCIsIlZJQlJBVElPTl9FTkFCTEVEIiwiX2FwaVNlcnZpY2UiLCJVc2VyU2VydmljZSIsIl9zdG9yYWdlR2V0Iiwia2V5IiwiZ2V0IiwiX3N0b3JhZ2VTZXQiLCJzZXQiLCJlcnIiLCJfZ2V0UmF3RGV2aWNlSWQiLCJnZXRTZXJpYWwiLCJzZXJpYWwiLCJ3YXJuIiwiX3NhdmVVc2VySW5mbyIsImlkIiwidXNlcl9udW1iZXIiLCJ1c2VySW5mb1RvU2F2ZSIsInRvdGFsX2NsaWNrcyIsImVuc3VyZVVzZXJJc1JlZ2lzdGVyZWQiLCJmb3JjZVN5bmMiLCJleGlzdGluZ1VzZXJJbmZvSlNPTiIsInBhcnNlIiwic3luY1Jlc3VsdCIsInN5bmNFcnJvciIsInJlZ1Jlc3VsdCIsIm5ld1JlZ1Jlc3VsdCIsInVwZGF0ZVBlbmRpbmdDbGlja3MiLCJhbW91bnQiLCJpc05hTiIsInBlbmRpbmdDbGlja3NEYXRhIiwiY3VycmVudENsaWNrcyIsInBhcnNlSW50IiwibmV3Q2xpY2tzIiwidG9TdHJpbmciLCJ0cmlnZ2VyQ2xpY2tTeW5jIiwidXNlckluZm9KU09OIiwiY2xpY2tzVG9TeW5jIiwiY3VycmVudFRvdGFsQ2xpY2tzIiwidXBkYXRlZFRvdGFsQ2xpY2tzIiwiZm9yY2VTeW5jRnJvbVNlcnZlciIsImNsaWNrU3luY1N1Y2Nlc3MiLCJlcnJvck1zZyIsInVuZGVmaW5lZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJfdXNlclNlcnZpY2UiLCJfcHJvbWlzaWZpZWRTdG9yYWdlR2V0Iiwic3RvcmFnZSIsInRpbWUiLCJvbkluaXQiLCJsb2FkVXNlckluZm8iLCJ1cGRhdGVUaW1lIiwic2V0SW50ZXJ2YWwiLCJub3ciLCJEYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsInBhZFN0YXJ0IiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJoYW5kbGVDbG91ZFN5bmMiLCJwcm9tcHQiLCJzaG93VG9hc3QiLCJ1cGxvYWRTdWNjZXNzIiwiX3Byb21pc2lmaWVkU3RvcmFnZVNldCIsImdvQmFjayIsInJvdXRlciIsImJhY2siLCJnb1RvQWJvdXQiLCJ1cmkiLCJnb1RvTW9yZU9wdGlvbnMiXSwibWFw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