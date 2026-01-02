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
                        var _userService = _interopRequireDefault(__webpack_require__("./src/common/js/userService.js"));
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
                                ]
                            },
                            onInit () {
                                this.loadInitialState();
                                this.updateTime();
                                setInterval(()=>_userService.default.triggerClickSync(), _config.CONFIG.APP.SYNC_INTERVAL);
                                setInterval(this.updateTime, 10000);
                                setInterval(this.updateChestTimers.bind(this), 1000);
                            },
                            async onShow () {},
                            async loadInitialState () {
                                const userInfo = await _userService.default.ensureUserIsRegistered();
                                let serverClicks = 0;
                                if (userInfo && userInfo.id) {
                                    this.petName = userInfo.pet_name || '未命名';
                                    serverClicks = userInfo.total_clicks || 0;
                                }
                                const pendingClicksStr = await _promisifiedStorageGet(_config.CONFIG.STORAGE_KEYS.PENDING_CLICKS);
                                const pendingClicks = parseInt(pendingClicksStr) || 0;
                                this.clickCount = serverClicks + pendingClicks;
                                console.log(`[State] Loaded state: Server clicks=${serverClicks}, Pending clicks=${pendingClicks}, Total UI clicks=${this.clickCount}`);
                                await this.loadChestStates();
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
                                    const reward = Math.floor(500 * Math.random()) + 100;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpblxcaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvYXBpLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvdXNlclNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9tYWluL2luZGV4LnV4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwaS1zZXJ2aWNlLmpzXHJcbmltcG9ydCBmZXRjaCBmcm9tICdAc3lzdGVtLmZldGNoJztcclxuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XHJcbmltcG9ydCBwcm9tcHQgZnJvbSAnQHN5c3RlbS5wcm9tcHQnO1xyXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XHJcblxyXG5jbGFzcyBBcGlTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIOS4rei9rOacjeWKoeWZqOWcsOWdgCAtIOS7jiBjb25maWcuanMg6K+75Y+WXHJcbiAgICB0aGlzLmJhc2VVcmwgPSBDT05GSUcuU0VSVkVSLkJBU0VfVVJMO1xyXG4gICAgdGhpcy5iYXNlSGVhZGVycyA9IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOmAmueUqOivt+axguaWueazlSAtIOmAmui/h+S4rei9rOacjeWKoeWZqOi9rOWPkVxyXG4gIGFzeW5jIHJlcXVlc3QoYWN0aW9uLCBkYXRhID0ge30pIHtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vYXBpYDtcclxuICAgIFxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyOiB0aGlzLmJhc2VIZWFkZXJzLFxyXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xyXG4gICAgfTtcclxuXHJcbiAgICBvcHRpb25zLmRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IGFjdGlvbiwgLi4uZGF0YSB9KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZXRjaC5mZXRjaCh7XHJcbiAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XHJcblxyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUgPj0gMjAwICYmIHJlc3BvbnNlLmNvZGUgPCAzMDApIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZURhdGEpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBIVFRQIEVycm9yOiAke3Jlc3BvbnNlLmNvZGV9YCwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBIVFRQICR7cmVzcG9uc2UuY29kZX06ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2VEYXRhKX1gKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IChlcnJvciwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgLy8gREVUQUlMRUQgTE9HR0lORyBGT1IgTkVUV09SSyBGQUlMVVJFU1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgW0FwaVNlcnZpY2VdIFJlcXVlc3QgRmFpbGVkLiBDb2RlOiAke2NvZGV9LCBFcnJvcjogJHtKU09OLnN0cmluZ2lmeShlcnJvcil9YCk7XHJcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZDogJHtlcnJvci5kYXRhIHx8ICdDb25uZWN0aW9uIGlzIGludmFsaWQnfWApKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyDojrflj5bmjpLooYzmppxcclxuICBhc3luYyBnZXRSYW5raW5ncyhsaW1pdCA9IDEwKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2dldF9yYW5raW5ncycsIHtcclxuICAgICAgICBsaW1pdDogbGltaXRcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIHJhbmtpbmdzOiByZXN1bHQucmFua2luZ3MgfHwgW11cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign6I635Y+W5o6S6KGM5qac5aSx6LSlOicsIGVycm9yKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIHJhbmtpbmdzOiBbXSxcclxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDkuIrmiqXngrnlh7vmrKHmlbBcclxuICBhc3luYyBzeW5jQ2xpY2tzKHVzZXJJZCwgY2xpY2tDb3VudCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0KCdzeW5jX2NsaWNrcycsIHtcclxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXHJcbiAgICAgICAgY2xpY2tfY291bnQ6IGNsaWNrQ291bnRcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfkuIrmiqXngrnlh7vmrKHmlbDlpLHotKU6JywgZXJyb3IpXHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5LuO5pyN5Yqh5Zmo5ZCM5q2l5pWw5o2uXHJcbiAgYXN5bmMgc3luY0Zyb21TZXJ2ZXIodXNlcklkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ3N5bmNfZnJvbV9zZXJ2ZXInLCB7XHJcbiAgICAgICAgdXNlcl9pZDogdXNlcklkXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfku47mnI3liqHlmajlkIzmraXmlbDmja7miJDlip86JywgcmVzdWx0LnVzZXJJbmZvKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1c2VySW5mbzogcmVzdWx0LnVzZXJJbmZvIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign5ZCM5q2l5pWw5o2u5aSx6LSlOicsIHJlc3VsdCA/IHJlc3VsdC5lcnJvciA6ICfmnKrnn6XplJnor68nKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IChyZXN1bHQgPyByZXN1bHQuZXJyb3IgOiAn5pyN5Yqh5Zmo5pyq6L+U5Zue5oiQ5Yqf54q25oCBJykgfTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5LuO5pyN5Yqh5Zmo5ZCM5q2l5pWw5o2u5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDmo4Dmn6XlrqDnianlkI3mmK/lkKblj6/nlKhcclxuICBhc3luYyBjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkocGV0TmFtZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdjaGVja19wZXRfbmFtZScsIHtcclxuICAgICAgICBwZXRfbmFtZTogcGV0TmFtZVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgLi4ucmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfmo4Dmn6XlrqDnianlkI3lj6/nlKjmgKfml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UsIGlzQXZhaWxhYmxlOiBmYWxzZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5L+u5pS55a6g54mp5ZCNXHJcbiAgYXN5bmMgc2V0UGV0TmFtZSh1c2VySWQsIG5ld05hbWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnc2V0X3BldF9uYW1lJywge1xyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcclxuICAgICAgICBuZXdfbmFtZTogbmV3TmFtZVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S/ruaUueWuoOeJqeWQjeWksei0pTonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g6aKE5r+A5rS75qOA5p+lXHJcbiAgYXN5bmMgY2hlY2tEZXZpY2VSZWdpc3RyYXRpb24oZGV2aWNlSWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnY2hlY2tfcmVnaXN0cmF0aW9uJywge1xyXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWRcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfpooTmv4DmtLvmo4Dmn6XmiJDlip86JywgcmVzdWx0KTtcclxuICAgICAgLy8g55u05o6l6L+U5Zue5pyN5Yqh5Zmo55qE5Y6f5aeL5ZON5bqU77yMVUnlsYLmnJ/mnJvnmoTmmK/miYHlubPnu5PmnoRcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+mihOa/gOa0u+ajgOafpeaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XHJcbiAgICAgIC8vIOi/lOWbnuS4gOS4quWFvOWuueeahOmUmeivr+Wvueixoe+8jOmBv+WFjVVJ5bGC5bSp5rqDXHJcbiAgICAgIHJldHVybiB7IGlzX3JlZ2lzdGVyZWQ6IGZhbHNlLCBjYW5fYXV0b19hY3RpdmF0ZTogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDms6jlhozorr7lpIflubbojrflj5bnlKjmiLdJRFxyXG4gIGFzeW5jIHJlZ2lzdGVyQW5kR2V0VXNlcklkKGRldmljZUlkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBQYXNzIHRoZSBzZXJ2ZXIgcmVzcG9uc2UgZGlyZWN0bHkgdG8gdGhlIFVJIGxheWVyXHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3QoJ3JlZ2lzdGVyX2RldmljZV9hbmRfZ2V0X2lkJywge1xyXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWRcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfms6jlhozmiJbojrflj5bnlKjmiLdJROaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XHJcbiAgICAgIC8vIFJldHVybiBhIGNvbXBhdGlibGUgZXJyb3Igb2JqZWN0XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDojrflj5blhazlkYrliJfooahcclxuICBhc3luYyBnZXRBbm5vdW5jZW1lbnRzKGxpbWl0ID0gMTApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnZ2V0X2Fubm91bmNlbWVudHMnLCB7XHJcbiAgICAgICAgbGltaXQ6IGxpbWl0XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygnT3JpZ2luYWwgYW5ub3VuY2VtZW50IHJlc3VsdCBmcm9tIHNlcnZlcjonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogcmVzdWx0LnN1Y2Nlc3MgfHwgZmFsc2UsXHJcbiAgICAgICAgYW5ub3VuY2VtZW50czogcmVzdWx0LmFubm91bmNlbWVudHMgfHwgW10sXHJcbiAgICAgICAgY291bnQ6IHJlc3VsdC5jb3VudCB8fCAwLFxyXG4gICAgICAgIHRpbWVzdGFtcDogcmVzdWx0LnRpbWVzdGFtcCxcclxuICAgICAgICBlcnJvcjogcmVzdWx0LmVycm9yXHJcbiAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfojrflj5blhazlkYrlpLHotKU6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgIGFubm91bmNlbWVudHM6IFtdLFxyXG4gICAgICAgIGNvdW50OiAwXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDmo4Dmn6XlupTnlKjmm7TmlrBcclxuICBhc3luYyBjaGVja0FwcFVwZGF0ZShjdXJyZW50VmVyc2lvbkNvZGUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnY2hlY2tfdXBkYXRlJywge1xyXG4gICAgICAgIGN1cnJlbnRfdmVyc2lvbl9jb2RlOiBjdXJyZW50VmVyc2lvbkNvZGVcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlc3VsdC5zdWNjZXNzIHx8IGZhbHNlLFxyXG4gICAgICAgIGhhc1VwZGF0ZTogcmVzdWx0Lmhhc191cGRhdGUgfHwgZmFsc2UsXHJcbiAgICAgICAgdXBkYXRlSW5mbzogcmVzdWx0LnVwZGF0ZV9pbmZvIHx8IG51bGwsXHJcbiAgICAgICAgaXNGb3JjZVVwZGF0ZTogcmVzdWx0LmlzX2ZvcmNlX3VwZGF0ZSB8fCBmYWxzZSxcclxuICAgICAgICBjdXJyZW50VmVyc2lvbkNvZGU6IHJlc3VsdC5jdXJyZW50X3ZlcnNpb25fY29kZSB8fCBjdXJyZW50VmVyc2lvbkNvZGUsXHJcbiAgICAgICAgbGF0ZXN0VmVyc2lvbkNvZGU6IHJlc3VsdC5sYXRlc3RfdmVyc2lvbl9jb2RlIHx8IGN1cnJlbnRWZXJzaW9uQ29kZSxcclxuICAgICAgICBlcnJvcjogcmVzdWx0LmVycm9yXHJcbiAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfmo4Dmn6Xmm7TmlrDlpLHotKU6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgIGhhc1VwZGF0ZTogZmFsc2UsXHJcbiAgICAgICAgaXNGb3JjZVVwZGF0ZTogZmFsc2VcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBcGlTZXJ2aWNlKClcclxuIiwiLy8gY29uZmlnLmpzXHJcbmV4cG9ydCBjb25zdCBDT05GSUcgPSB7XHJcbiAgLy8g5Lit6L2s5pyN5Yqh5Zmo6YWN572uXHJcbiAgU0VSVkVSOiB7XHJcbiAgICBCQVNFX1VSTDogJ2h0dHA6Ly8xMDMuMjA1LjI1My44NzoyMjIwNydcclxuICB9LFxyXG4gIFxyXG4gIC8vIOazqOaEj++8mlVSTCDliY3nvIDlnKggYXBpLXNlcnZpY2UuanMg5Lit56Gs57yW56CB5LqGXHJcbiAgLy8g6L+Z6YeM5LiN5YaN6ZyA6KaB6YWN572uXHJcbiAgXHJcbiAgLy8g5bqU55So6YWN572uXHJcbiAgQVBQOiB7XHJcbiAgICBOQU1FOiAnQmFuZFBldCcsXHJcbiAgICBWRVJTSU9OOiAnMC4zLjUgQWxwaGEnLFxyXG4gICAgVkVSU0lPTl9DT0RFOiAzNSwgIC8vIOaWsOWinu+8mueUqOS6jueJiOacrOavlOi+g+eahOaVsOWtl++8iDAuMy41IC0+IDM177yJXHJcbiAgICBNQVhfQ0xJQ0tTX1BFUl9CQVRDSDogNTAsXHJcbiAgICBTWU5DX0lOVEVSVkFMOiA2MDAwMCxcclxuICAgIFJBTktfTElNSVQ6IDEwLFxyXG4gICAgXHJcbiAgICAvLyDmm7TmlrDmo4Dmn6XphY3nva7vvIjmlrDlop7vvIlcclxuICAgIENIRUNLX1VQREFURV9JTlRFUlZBTDogMzYwMDAwMCwgLy8gMeWwj+aXtuajgOafpeS4gOasoeabtOaWsFxyXG4gICAgQU5OT1VOQ0VNRU5UX0NBQ0hFX1RJTUU6IDMwMDAwMCwgLy8gNeWIhumSn+e8k+WtmOWFrOWRilxyXG4gIH0sXHJcbiAgXHJcbiAgLy8g5a2Y5YKo6ZSu5ZCNXHJcbiAgU1RPUkFHRV9LRVlTOiB7XHJcbiAgICBERVZJQ0VfSUQ6ICdkZXZpY2VfaWQnLFxyXG4gICAgSVNfTE9DQUxMWV9BQ1RJVkFURUQ6ICdpc19sb2NhbGx5X2FjdGl2YXRlZCcsXHJcbiAgICBVU0VSX0lORk86ICd1c2VyX2luZm8nLFxyXG4gICAgUEVORElOR19DTElDS1M6ICdwZW5kaW5nX2NsaWNrcycsXHJcbiAgICBMQVNUX1NZTkNfVElNRTogJ2xhc3Rfc3luY190aW1lJyxcclxuICAgIFRPVEFMX0NMSUNLUzogJ3RvdGFsX2NsaWNrcycsXHJcbiAgICBcclxuICAgIC8vIOaWsOWinuWtmOWCqOmUrlxyXG4gICAgTEFTVF9VUERBVEVfQ0hFQ0tfVElNRTogJ2xhc3RfdXBkYXRlX2NoZWNrX3RpbWUnLFxyXG4gICAgTEFTVF9BTk5PVU5DRU1FTlRfRkVUQ0hfVElNRTogJ2xhc3RfYW5ub3VuY2VtZW50X2ZldGNoX3RpbWUnLFxyXG4gICAgQ0FDSEVEX0FOTk9VTkNFTUVOVFM6ICdjYWNoZWRfYW5ub3VuY2VtZW50cycsXHJcbiAgICBDQUNIRURfVVBEQVRFX0lORk86ICdjYWNoZWRfdXBkYXRlX2luZm8nLFxyXG4gICAgSUdOT1JFRF9WRVJTSU9OOiAnaWdub3JlZF92ZXJzaW9uX2NvZGUnLCAvLyDnlKjmiLflv73nlaXnmoTniYjmnKxcclxuICAgIEZPUkNFX1VQREFURV9SRVFVSVJFRDogJ2ZvcmNlX3VwZGF0ZV9yZXF1aXJlZCcsIC8vIOaYr+WQpumcgOimgeW8uuWItuabtOaWsFxyXG4gIH1cclxufVxyXG4iLCIvLyBzcmMvY29tbW9uL2pzL3VzZXJTZXJ2aWNlLmpzXG5pbXBvcnQgZGV2aWNlIGZyb20gJ0BzeXN0ZW0uZGV2aWNlJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XG5pbXBvcnQgQXBpU2VydmljZSBmcm9tICcuL2FwaS1zZXJ2aWNlLmpzJztcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vY29uZmlnLmpzJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgdG8gaGFuZGxlIHNpbGVudCB1c2VyIHJlZ2lzdHJhdGlvbiBhbmQgZGF0YSByZXRyaWV2YWwuXG4gKi9cbmNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgXG4gIC8qKlxuICAgKiBQcm9taXNpZmllZCBoZWxwZXIgZm9yIHN0b3JhZ2UuZ2V0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSB0byByZXRyaWV2ZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gVGhlIHZhbHVlIGZyb20gc3RvcmFnZSwgb3IgbnVsbCBpZiBub3QgZm91bmQuXG4gICAqL1xuICBfc3RvcmFnZUdldChrZXkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHN0b3JhZ2UuZ2V0KHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiByZXNvbHZlKGRhdGEpLFxuICAgICAgICBmYWlsOiAoKSA9PiByZXNvbHZlKG51bGwpLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUHJvbWlzaWZpZWQgaGVscGVyIGZvciBzdG9yYWdlLnNldC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gc2V0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgdmFsdWUgdG8gc3RvcmUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgX3N0b3JhZ2VTZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzdG9yYWdlLnNldCh7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXG4gICAgICAgIGZhaWw6IChlcnIsIGNvZGUpID0+IHJlamVjdChuZXcgRXJyb3IoYFN0b3JhZ2Uuc2V0IGZhaWxlZCBmb3IgJyR7a2V5fSc6ICR7ZXJyfSAoJHtjb2RlfSlgKSksXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHJhdyBkZXZpY2UgaWRlbnRpZmllciwgdXNpbmcgYSBmYWxsYmFjayBmb3Igc2ltdWxhdG9ycy5cbiAgICogSXQgYWxzbyBzYXZlcyB0aGUgcmF3IElEIHRvIHN0b3JhZ2UgZm9yIGZ1dHVyZSB1c2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZ3xudWxsPn0gVGhlIHJhdyBkZXZpY2UgSUQgb3IgbnVsbCBvbiBmYWlsdXJlLlxuICAgKi9cbiAgX2dldFJhd0RldmljZUlkKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgZGV2aWNlLmdldFNlcmlhbCh7XG4gICAgICAgIHN1Y2Nlc3M6IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICAgICAgbGV0IHNlcmlhbCA9IGRhdGEgPyBkYXRhLnNlcmlhbCA6IG51bGw7XG4gICAgICAgICAgaWYgKHNlcmlhbCA9PT0gJ05BJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRGV2aWNlIHNlcmlhbCBpcyAnTkEnLCB1c2luZyBhIGZpeGVkIHRlc3Qgc2VyaWFsLlwiKTtcbiAgICAgICAgICAgIHNlcmlhbCA9ICdURVNUVk0tU04tMDEyMzQ1Njc4OSc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFzZXJpYWwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBnZXQgYSB2YWxpZCBkZXZpY2Ugc2VyaWFsLicpO1xuICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgcmF3IElEIGZvciBvdGhlciBzZXJ2aWNlcyB0aGF0IG1pZ2h0IG5lZWQgaXQgKGUuZy4sIEFQSSBjYWxscylcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX3N0b3JhZ2VTZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5ERVZJQ0VfSUQsIHNlcmlhbCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2F2ZWQgcmF3IGRldmljZSBJRDonLCBzZXJpYWwpO1xuICAgICAgICAgICAgcmVzb2x2ZShzZXJpYWwpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBzYXZlIHJhdyBkZXZpY2UgSUQgdG8gc3RvcmFnZTonLCBlKTtcbiAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAoZXJyLCBjb2RlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgQ29ubmVjdGlvbiBpcyBpbnZhbGlkYCk7XG4gICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIHRoZSB1c2VyIGluZm9ybWF0aW9uIHRvIGxvY2FsIHN0b3JhZ2UuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB1c2VySW5mbyAtIFRoZSB1c2VyIGluZm8gb2JqZWN0IHJlY2VpdmVkIGZyb20gdGhlIHNlcnZlci5cbiAgICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0Pn0gVGhlIHVzZXIgaW5mbyB0aGF0IHdhcyBzYXZlZC5cbiAgICovXG4gIGFzeW5jIF9zYXZlVXNlckluZm8odXNlckluZm8pIHtcbiAgICBpZiAoIXVzZXJJbmZvIHx8ICghdXNlckluZm8uaWQgJiYgIXVzZXJJbmZvLnVzZXJfbnVtYmVyKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBpbmZvIGlzIGludmFsaWQsIGNhbm5vdCBzYXZlLlwiKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdXNlckluZm9Ub1NhdmUgPSB7XG4gICAgICBpZDogdXNlckluZm8uaWQgfHwgdXNlckluZm8udXNlcl9udW1iZXIsXG4gICAgICB1c2VyX251bWJlcjogdXNlckluZm8udXNlcl9udW1iZXIsXG4gICAgICBwZXRfbmFtZTogdXNlckluZm8ucGV0X25hbWUsXG4gICAgICB0b3RhbF9jbGlja3M6IHVzZXJJbmZvLnRvdGFsX2NsaWNrcyB8fCAwXG4gICAgfTtcblxuICAgIGF3YWl0IHRoaXMuX3N0b3JhZ2VTZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8sIEpTT04uc3RyaW5naWZ5KHVzZXJJbmZvVG9TYXZlKSk7XG4gICAgY29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgc2F2ZWQgdXNlciBpbmZvIHRvIHN0b3JhZ2U6XCIsIHVzZXJJbmZvVG9TYXZlKTtcbiAgICByZXR1cm4gdXNlckluZm9Ub1NhdmU7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG1haW4gcHVibGljIG1ldGhvZC4gSXQgZW5zdXJlcyB0aGF0IHVzZXIgaW5mb3JtYXRpb24gaXMgcHJlc2VudCBpbiBzdG9yYWdlLlxuICAgKiBJZiBub3QsIGl0IHNpbGVudGx5IGdldHMgYSBkZXZpY2UgSUQsIGNoZWNrcyB3aXRoIHRoZSBzZXJ2ZXIsIGFuZCBlaXRoZXJcbiAgICogcmV0cmlldmVzIGV4aXN0aW5nIHVzZXIgZGF0YSBvciByZWdpc3RlcnMgYSBuZXcgdXNlci5cbiAgICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0fG51bGw+fSBUaGUgdXNlciBpbmZvLCBvciBudWxsIGlmIHRoZSBwcm9jZXNzIGZhaWxzLlxuICAgKi9cbiAgYXN5bmMgZW5zdXJlVXNlcklzUmVnaXN0ZXJlZChmb3JjZVN5bmMgPSBmYWxzZSkge1xuICAgIC8vIDEuIENoZWNrIGlmIHVzZXIgaW5mbyBhbHJlYWR5IGV4aXN0cyBhbmQgaXMgdmFsaWQuXG4gICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gQ2hlY2tpbmcgZm9yIGV4aXN0aW5nIHVzZXIgaW5mbyBpbiBzdG9yYWdlLi4uJyk7XG4gICAgY29uc3QgZXhpc3RpbmdVc2VySW5mb0pTT04gPSBhd2FpdCB0aGlzLl9zdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPKTtcbiAgICBpZiAoZXhpc3RpbmdVc2VySW5mb0pTT04pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gSlNPTi5wYXJzZShleGlzdGluZ1VzZXJJbmZvSlNPTik7XG4gICAgICAgIGlmICh1c2VySW5mbyAmJiB1c2VySW5mby5pZCkge1xuICAgICAgICAgIGlmIChmb3JjZVN5bmMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIEZvcmNlIHN5bmMgZW5hYmxlZC4gQXR0ZW1wdGluZyB0byBzeW5jIGxhdGVzdCBkYXRhIGZyb20gc2VydmVyLi4uJyk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCBzeW5jUmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5zeW5jRnJvbVNlcnZlcih1c2VySW5mby5pZCk7XG4gICAgICAgICAgICAgIGlmIChzeW5jUmVzdWx0ICYmIHN5bmNSZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFN1Y2Nlc3NmdWxseSBzeW5jZWQgZnJvbSBzZXJ2ZXIuJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX3NhdmVVc2VySW5mbyhzeW5jUmVzdWx0LnVzZXJJbmZvKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1tVc2VyU2VydmljZV0gU3luYyBmcm9tIHNlcnZlciBmYWlsZWQsIHdpbGwgdXNlIHN0YWxlIGxvY2FsIGRhdGEuIEVycm9yOicsIHN5bmNSZXN1bHQgPyBzeW5jUmVzdWx0LmVycm9yIDogJ1Vua25vd24gZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlckluZm87IC8vIFJldHVybiBzdGFsZSBkYXRhIGlmIHN5bmMgZmFpbHNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoc3luY0Vycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tVc2VyU2VydmljZV0gQSBjcml0aWNhbCBlcnJvciBvY2N1cnJlZCBkdXJpbmcgc2VydmVyIHN5bmM6Jywgc3luY0Vycm9yKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHVzZXJJbmZvOyAvLyBSZXR1cm4gc3RhbGUgZGF0YSBvbiBjcml0aWNhbCBzeW5jIGZhaWx1cmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gVXNlciBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuIEZvdW5kIGluZm86JywgdXNlckluZm8pO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXJJbmZvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBNYWxmb3JtZWQgSlNPTiwgcHJvY2VlZCB3aXRoIHJlZ2lzdHJhdGlvbi5cbiAgICAgICAgY29uc29sZS53YXJuKCdbVXNlclNlcnZpY2VdIFVzZXIgaW5mbyBpbiBzdG9yYWdlIGlzIG1hbGZvcm1lZC4gUHJvY2VlZGluZyB3aXRoIHJlZ2lzdHJhdGlvbi4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBVc2VyIG5vdCBmb3VuZCBsb2NhbGx5LiBTdGFydGluZyBzaWxlbnQgcmVnaXN0cmF0aW9uIHByb2Nlc3MuLi4nKTtcblxuICAgIC8vIDIuIEdldCBEZXZpY2UgSURcbiAgICBjb25zdCBkZXZpY2VJZCA9IGF3YWl0IHRoaXMuX2dldFJhd0RldmljZUlkKCk7XG4gICAgaWYgKCFkZXZpY2VJZCkge1xuICAgICAgY29uc29sZS5lcnJvcignW1VzZXJTZXJ2aWNlXSBDUklUSUNBTDogQ2Fubm90IHByb2NlZWQgd2l0aCByZWdpc3RyYXRpb246IGZhaWxlZCB0byBnZXQgZGV2aWNlIElELicpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBbVXNlclNlcnZpY2VdIEdvdCBkZXZpY2UgSUQ6ICR7ZGV2aWNlSWR9YCk7XG5cbiAgICB0cnkge1xuICAgICAgLy8gMy4gQ2hlY2sgaWYgdGhlIGRldmljZSBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQgb24gdGhlIHNlcnZlclxuICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gQ2hlY2tpbmcgZGV2aWNlIHJlZ2lzdHJhdGlvbiB3aXRoIHNlcnZlci4uLicpO1xuICAgICAgY29uc3QgcmVnUmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5jaGVja0RldmljZVJlZ2lzdHJhdGlvbihkZXZpY2VJZCk7XG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTZXJ2ZXIgcmVnaXN0cmF0aW9uIGNoZWNrIHJlc3BvbnNlOicsIEpTT04uc3RyaW5naWZ5KHJlZ1Jlc3VsdCkpO1xuXG5cbiAgICAgIGlmIChyZWdSZXN1bHQgJiYgcmVnUmVzdWx0LmlzX3JlZ2lzdGVyZWQgJiYgcmVnUmVzdWx0LnVzZXJJbmZvKSB7XG4gICAgICAgIC8vIERldmljZSBpcyBrbm93biwgc2F2ZSB0aGUgaW5mbyBhbmQgd2UncmUgZG9uZS5cbiAgICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gRGV2aWNlIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCBvbiBzZXJ2ZXIuIFJlc3RvcmluZyB1c2VyIGluZm8uJyk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9zYXZlVXNlckluZm8ocmVnUmVzdWx0LnVzZXJJbmZvKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gNC4gSWYgbm90IHJlZ2lzdGVyZWQsIGNyZWF0ZSBhIG5ldyB1c2VyIHJlY29yZC5cbiAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIERldmljZSBub3QgcmVnaXN0ZXJlZC4gQXR0ZW1wdGluZyB0byByZWdpc3RlciBhIG5ldyB1c2VyLi4uJyk7XG4gICAgICBjb25zdCBuZXdSZWdSZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLnJlZ2lzdGVyQW5kR2V0VXNlcklkKGRldmljZUlkKTtcbiAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFNlcnZlciBuZXcgdXNlciByZWdpc3RyYXRpb24gcmVzcG9uc2U6JywgSlNPTi5zdHJpbmdpZnkobmV3UmVnUmVzdWx0KSk7XG5cblxuICAgICAgaWYgKG5ld1JlZ1Jlc3VsdCAmJiBuZXdSZWdSZXN1bHQuc3VjY2VzcyAmJiBuZXdSZWdSZXN1bHQudXNlckluZm8pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWQgbmV3IHVzZXIuJyk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9zYXZlVXNlckluZm8obmV3UmVnUmVzdWx0LnVzZXJJbmZvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tVc2VyU2VydmljZV0gQ1JJVElDQUw6IEZhaWxlZCB0byByZWdpc3RlciBuZXcgdXNlci4nLCBuZXdSZWdSZXN1bHQgPyBuZXdSZWdSZXN1bHQubWVzc2FnZSA6ICdObyByZXN1bHQgZnJvbSBzZXJ2ZXInKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignW1VzZXJTZXJ2aWNlXSBDUklUSUNBTDogQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHRoZSBzaWxlbnQgcmVnaXN0cmF0aW9uIEFQSSBjYWxsczonLCBlKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBudW1iZXIgb2YgcGVuZGluZyBjbGlja3MgYnkgYSBnaXZlbiBhbW91bnQuXG4gICAqIFRoaXMgaXMgdGhlIGNlbnRyYWxpemVkIG1ldGhvZCBmb3IgYWxsIGNsaWNrIG1vZGlmaWNhdGlvbnMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbW91bnQgLSBUaGUgbnVtYmVyIHRvIGFkZCB0byBwZW5kaW5nIGNsaWNrcy4gQ2FuIGJlIG5lZ2F0aXZlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXJ8bnVsbD59IFRoZSBuZXcgbnVtYmVyIG9mIHBlbmRpbmcgY2xpY2tzLCBvciBudWxsIG9uIGZhaWx1cmUuXG4gICAqL1xuICBhc3luYyB1cGRhdGVQZW5kaW5nQ2xpY2tzKGFtb3VudCkge1xuICAgIGlmICh0eXBlb2YgYW1vdW50ICE9PSAnbnVtYmVyJyB8fCBpc05hTihhbW91bnQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tVc2VyU2VydmljZV0gdXBkYXRlUGVuZGluZ0NsaWNrcyByZWNlaXZlZCBhbiBpbnZhbGlkIGFtb3VudDonLCBhbW91bnQpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBlbmRpbmdDbGlja3NEYXRhID0gYXdhaXQgdGhpcy5fc3RvcmFnZUdldChDT05GSUcuU1RPUkFHRV9LRVlTLlBFTkRJTkdfQ0xJQ0tTKTtcbiAgICAgIGxldCBjdXJyZW50Q2xpY2tzID0gcGFyc2VJbnQocGVuZGluZ0NsaWNrc0RhdGEpIHx8IDA7XG4gICAgICBcbiAgICAgIGNvbnN0IG5ld0NsaWNrcyA9IGN1cnJlbnRDbGlja3MgKyBhbW91bnQ7XG4gICAgICBcbiAgICAgIGF3YWl0IHRoaXMuX3N0b3JhZ2VTZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5QRU5ESU5HX0NMSUNLUywgbmV3Q2xpY2tzLnRvU3RyaW5nKCkpO1xuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyhgW1VzZXJTZXJ2aWNlXSBQZW5kaW5nIGNsaWNrcyB1cGRhdGVkIGJ5ICR7YW1vdW50fS4gTmV3IHZhbHVlOiAke25ld0NsaWNrc31gKTtcbiAgICAgIHJldHVybiBuZXdDbGlja3M7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignW1VzZXJTZXJ2aWNlXSBGYWlsZWQgdG8gdXBkYXRlIHBlbmRpbmcgY2xpY2tzIGluIHN0b3JhZ2U6JywgZSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgcGVuZGluZyBjbGlja3MgZnJvbSBzdG9yYWdlIGFuZCBzeW5jcyB0aGVtIHdpdGggdGhlIHNlcnZlci5cbiAgICogVGhpcyBpcyBhIHNlbGYtY29udGFpbmVkLCBmaXJlLWFuZC1mb3JnZXQgbWV0aG9kLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gVHJ1ZSBvbiBzdWNjZXNzLCBmYWxzZSBvbiBmYWlsdXJlIG9yIGlmIG5vIHN5bmMgd2FzIG5lZWRlZC5cbiAgICovXG4gIGFzeW5jIHRyaWdnZXJDbGlja1N5bmMoKSB7XG4gICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gVHJpZ2dlcmluZyBjbGljayBzeW5jLi4uJyk7XG4gICAgXG4gICAgLy8gMS4gR2V0IHVzZXIgaW5mb1xuICAgIGNvbnN0IHVzZXJJbmZvSlNPTiA9IGF3YWl0IHRoaXMuX3N0b3JhZ2VHZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8pO1xuICAgIGlmICghdXNlckluZm9KU09OKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tVc2VyU2VydmljZV0gU3luYyBhYm9ydGVkOiBVc2VyIGluZm8gbm90IGZvdW5kIGluIHN0b3JhZ2UuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGxldCB1c2VySW5mbztcbiAgICB0cnkge1xuICAgICAgdXNlckluZm8gPSBKU09OLnBhcnNlKHVzZXJJbmZvSlNPTik7XG4gICAgICBpZiAoIXVzZXJJbmZvIHx8ICF1c2VySW5mby5pZCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tVc2VyU2VydmljZV0gU3luYyBhYm9ydGVkOiBVc2VyIElEIGlzIGludmFsaWQuJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGNvbnNvbGUud2FybignW1VzZXJTZXJ2aWNlXSBTeW5jIGFib3J0ZWQ6IENvdWxkIG5vdCBwYXJzZSB1c2VyIGluZm8uJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMi4gR2V0IHBlbmRpbmcgY2xpY2tzXG4gICAgY29uc3QgcGVuZGluZ0NsaWNrc0RhdGEgPSBhd2FpdCB0aGlzLl9zdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuUEVORElOR19DTElDS1MpO1xuICAgIGNvbnN0IGNsaWNrc1RvU3luYyA9IHBhcnNlSW50KHBlbmRpbmdDbGlja3NEYXRhKTtcblxuICAgIGlmIChpc05hTihjbGlja3NUb1N5bmMpKSB7XG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBObyBwZW5kaW5nIGNsaWNrcyB0byBzeW5jICh2YWx1ZSBpcyBOYU4pLicpO1xuICAgICAgcmV0dXJuIHRydWU7IC8vIE5vdGhpbmcgdG8gZG8sIHNvIGl0J3MgYSBcInN1Y2Nlc3NcIlxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGBbVXNlclNlcnZpY2VdIEZvdW5kICR7Y2xpY2tzVG9TeW5jfSBwZW5kaW5nIGNsaWNrcyBmb3IgdXNlciAke3VzZXJJbmZvLmlkfS4gU3luY2luZy4uLmApO1xuXG4gICAgLy8gMy4gQ2FsbCBBUElcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLnN5bmNDbGlja3ModXNlckluZm8uaWQsIGNsaWNrc1RvU3luYyk7XG5cbiAgICAvLyA0LiBVcGRhdGUgc3RvcmFnZSBvbiBzdWNjZXNzXG4gICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTeW5jIHN1Y2Nlc3NmdWwuIFJlc2V0dGluZyBwZW5kaW5nIGNsaWNrcy4nKTtcbiAgICAgIGF3YWl0IHRoaXMuX3N0b3JhZ2VTZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5QRU5ESU5HX0NMSUNLUywgJzAnKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbVXNlclNlcnZpY2VdIFN5bmMgZmFpbGVkOicsIHJlc3VsdC5lcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgdGhlIGxhdGVzdCB1c2VyIGRhdGEgZnJvbSB0aGUgc2VydmVyIGFuZCBvdmVyd3JpdGVzIGxvY2FsIHN0b3JhZ2UuXG4gICAqIFRoaXMgbWV0aG9kIHJ1bnMgdGhlIGZ1bGwgcmVnaXN0cmF0aW9uL2xvZ2luIGZsb3cgdG8gZW5zdXJlIGRhdGEgaXMgY29uc2lzdGVudC5cbiAgICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZ30+fVxuICAgKi9cbiAgYXN5bmMgZm9yY2VTeW5jRnJvbVNlcnZlcigpIHtcbiAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdGFydGluZyBmb3JjZSBzeW5jIGZyb20gc2VydmVyLi4uJyk7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIC8vIDEuIEZvcmNlIGEgc3luYyBvZiBhbnkgcGVuZGluZyBjbGlja3MgRklSU1QuXG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdGVwIDE6IFN5bmNpbmcgbG9jYWwgcGVuZGluZyBjbGlja3MgYmVmb3JlIGZldGNoaW5nIHNlcnZlciBkYXRhLicpO1xuICAgICAgY29uc3QgY2xpY2tTeW5jU3VjY2VzcyA9IGF3YWl0IHRoaXMudHJpZ2dlckNsaWNrU3luYygpO1xuXG4gICAgICBpZiAoIWNsaWNrU3luY1N1Y2Nlc3MpIHtcbiAgICAgICAgLy8gSWYgdGhlIGNsaWNrIHN5bmMgZmFpbHMsIHdlIHNob3VsZCBub3QgcHJvY2VlZCwgYXMgd2UgbWlnaHQgb3ZlcndyaXRlIHRoZSBsb2NhbCBzdGF0ZVxuICAgICAgICAvLyB3aXRoIHN0YWxlIHNlcnZlciBkYXRhLCBjYXVzaW5nIHRoZSB1c2VyIHRvIGxvc2UgdGhlaXIgcGVuZGluZyBjbGlja3MuXG4gICAgICAgIGNvbnN0IGVycm9yTXNnID0gJ+aXoOazleWQjOatpeacrOWcsOeCueWHu+aVsOaNru+8jOW3suWPlua2iOS7juacjeWKoeWZqOabtOaWsO+8jOS7pemYsuaVsOaNruS4ouWkseOAgic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtVc2VyU2VydmljZV0gJHtlcnJvck1zZ31gKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yTXNnIH07XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdGVwIDE6IExvY2FsIHBlbmRpbmcgY2xpY2tzIHN5bmNlZCBzdWNjZXNzZnVsbHkuJyk7XG5cblxuICAgICAgLy8gMi4gTm93LCBydW4gdGhlIGZ1bGwgZ2V0L3JlZ2lzdGVyIHVzZXIgZmxvdyB0byBnZXQgdGhlIGxhdGVzdCBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdGVwIDI6IEZldGNoaW5nIGxhdGVzdCB1c2VyIGRhdGEgZnJvbSBzZXJ2ZXIuJyk7XG4gICAgICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IHRoaXMuZW5zdXJlVXNlcklzUmVnaXN0ZXJlZCh0cnVlKTtcblxuICAgICAgaWYgKHVzZXJJbmZvICYmIHVzZXJJbmZvLmlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFN0ZXAgMjogU3VjY2Vzc2Z1bGx5IGZldGNoZWQgYW5kIHVwZGF0ZWQgdXNlciBpbmZvLiBVc2VySW5mbzonLCB1c2VySW5mbyk7XG4gICAgICAgIC8vIFRoZSBlbnN1cmVVc2VySXNSZWdpc3RlcmVkIG1ldGhvZCBhbHJlYWR5IHNhdmVzIHRoZSBuZXcgdXNlciBpbmZvLCB3aGljaCBpbmNsdWRlcyB0aGUgdXBkYXRlZCB0b3RhbF9jbGlja3MuXG4gICAgICAgIC8vIEFuZCB0cmlnZ2VyQ2xpY2tTeW5jIGFscmVhZHkgcmVzZXQgcGVuZGluZ19jbGlja3MgdG8gMC4gU28sIHdlIGFyZSBkb25lLlxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gRm9yY2Ugc3luYyBjb21wbGV0ZS4gTG9jYWwgc3RvcmFnZSBpcyBub3cgdXAtdG8tZGF0ZS4nKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ+WQjOatpeaIkOWKn++8gScgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVycm9yTXNnID0gJ+aXoOazleS7juacjeWKoeWZqOiOt+WPluacgOaWsOeUqOaIt+aVsOaNruOAgic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtVc2VyU2VydmljZV0gJHtlcnJvck1zZ31gKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yTXNnIH07XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignW1VzZXJTZXJ2aWNlXSBBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgdGhlIGZvcmNlIHN5bmMgcHJvY2VzczonLCBlKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAn5ZCM5q2l5aSx6LSl77yM5Y+R55Sf5pyq55+l6ZSZ6K+vJyB9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlclNlcnZpY2UoKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjYuOFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS42LjhcIjsiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPHRleHQgY2xhc3M9XCJ0aW1lXCI+e3sgdGltZSB9fTwvdGV4dD5cclxuICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cImNoZXN0LXJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2hlc3RcIiBvbmNsaWNrPVwiY2xhaW1DaGVzdCgwLCAkZXZlbnQpXCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJjaGVzdC1sYWJlbFwiPuWuneeusTwvdGV4dD5cclxuICAgICAgICA8dGV4dCBzaG93PVwie3shY2hlc3RzWzBdLmNsYWltZWR9fVwiIGNsYXNzPVwiY2hlc3QtY29zdFwiPuiKsei0uTogMTAwMDwvdGV4dD5cclxuICAgICAgICA8dGV4dCBzaG93PVwie3tjaGVzdHNbMF0uY2xhaW1lZH19XCIgY2xhc3M9XCJjaGVzdC10aW1lclwiPnt7IGNoZXN0c1swXS50aW1lckRpc3BsYXkgfX08L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2hlc3RcIiBvbmNsaWNrPVwiY2xhaW1DaGVzdCgxLCAkZXZlbnQpXCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJjaGVzdC1sYWJlbFwiPuWuneeusTwvdGV4dD5cclxuICAgICAgICA8dGV4dCBzaG93PVwie3shY2hlc3RzWzFdLmNsYWltZWR9fVwiIGNsYXNzPVwiY2hlc3QtY29zdFwiPuiKsei0uTogMTAwMDwvdGV4dD5cclxuICAgICAgICA8dGV4dCBzaG93PVwie3tjaGVzdHNbMV0uY2xhaW1lZH19XCIgY2xhc3M9XCJjaGVzdC10aW1lclwiPnt7IGNoZXN0c1sxXS50aW1lckRpc3BsYXkgfX08L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInBldC1jb250YWluZXJcIiBvbmNsaWNrPVwiaW5jcmVtZW50Q2xpY2soJGV2ZW50KVwiPlxyXG4gICAgICA8aW1hZ2UgY2xhc3M9XCJwZXQtaW1hZ2VcIiBzcmM9XCJ7eyBwZXRJbWFnZSB9fVwiPjwvaW1hZ2U+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwicGV0LW5hbWVcIj57eyBwZXROYW1lIH19PC90ZXh0PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3M9XCJib3R0b20tYmFyXCI+XHJcbiAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vbW9yZS5wbmdcIiBjbGFzcz1cIm1vcmUtYnV0dG9uXCIgb25jbGljaz1cIm9wZW5Nb3JlKCRldmVudClcIj48L2ltYWdlPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2xpY2stY291bnRlclwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiY2xpY2stY291bnRlci10ZXh0XCI+e3sgY2xpY2tDb3VudCB9fTwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAwOyAvKiBSZWR1Y2VkIHBhZGRpbmcgKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIERpc2FibGUgc2Nyb2xsaW5nICovXHJcbiAgfVxyXG4gIC50aW1lIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAyNHB4OyAvKiBSZXN0b3JlZCBmb250IHNpemUgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuY2hlc3Qtcm93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgfVxyXG4gIC5jaGVzdCB7XHJcbiAgICB3aWR0aDogMTAwcHg7IC8qIFJlZHVjZWQgc2l6ZSAqL1xyXG4gICAgaGVpZ2h0OiAxMDBweDsgLyogUmVkdWNlZCBzaXplICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFBNTIwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAuNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICB9XHJcbiAgLmNoZXN0LWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDsgLyogU2xpZ2h0bHkgc21hbGxlciB0byBmaXQgKi9cclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAuY2hlc3QtY29zdCB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLmNoZXN0LXRpbWVyIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICAucGV0LWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDsgLyogQWRqdXN0IG1hcmdpbiAqL1xyXG4gIH1cclxuICAucGV0LWltYWdlIHtcclxuICAgIHdpZHRoOiAyMDBweDsgLyogU2xpZ2h0bHkgc21hbGxlciB0byBjb21wZW5zYXRlIHNwYWNlICovXHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICB9XHJcbiAgLnBldC1uYW1lIHtcclxuICAgIGNvbG9yOiAjODg4ODg4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgLmJvdHRvbS1iYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5tb3JlLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNTZweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICB9XHJcbiAgLmNsaWNrLWNvdW50ZXIge1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5jbGljay1jb3VudGVyLXRleHQge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcclxuICBpbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xyXG4gIGltcG9ydCBwcm9tcHQgZnJvbSAnQHN5c3RlbS5wcm9tcHQnO1xyXG4gIGltcG9ydCBVc2VyU2VydmljZSBmcm9tICcuLi9jb21tb24vanMvdXNlclNlcnZpY2UuanMnO1xyXG4gIGltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4uL2NvbW1vbi9qcy9jb25maWcuanMnO1xyXG5cclxuICBjb25zdCBfcHJvbWlzaWZpZWRTdG9yYWdlR2V0ID0gKGtleSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIHN0b3JhZ2UuZ2V0KHsga2V5LCBzdWNjZXNzOiAoZGF0YSkgPT4gcmVzb2x2ZShkYXRhKSwgZmFpbDogKCkgPT4gcmVzb2x2ZShudWxsKSB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgX3Byb21pc2lmaWVkU3RvcmFnZVNldCA9IChrZXksIHZhbHVlKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBzdG9yYWdlLnNldCh7IGtleSwgdmFsdWUsIHN1Y2Nlc3M6IHJlc29sdmUsIGZhaWw6IChlcnIsIGNvZGUpID0+IHJlamVjdChuZXcgRXJyb3IoYFN0b3JhZ2Uuc2V0IGZhaWxlZCBmb3Iga2V5ICcke2tleX0nIHdpdGggY29kZSAke2NvZGV9OiAke2Vycn1gKSkgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGltZTogJzAwOjAwJyxcclxuICAgICAgcGV0TmFtZTogJ+acquWRveWQjScsXHJcbiAgICAgIGNsaWNrQ291bnQ6IDAsXHJcbiAgICAgIHBldEltYWdlOiAnL2NvbW1vbi9SYTAucG5nJyxcclxuICAgICAgY2hlc3RzOiBbXHJcbiAgICAgICAgeyBjbGFpbWVkOiBmYWxzZSwgcmVmcmVzaFRpbWVzdGFtcDogMCwgdGltZXJEaXNwbGF5OiAn6Iqx6LS5OiAxMDAwJyB9LFxyXG4gICAgICAgIHsgY2xhaW1lZDogZmFsc2UsIHJlZnJlc2hUaW1lc3RhbXA6IDAsIHRpbWVyRGlzcGxheTogJ+iKsei0uTogMTAwMCcgfVxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkluaXQoKSB7XHJcbiAgICAgIHRoaXMubG9hZEluaXRpYWxTdGF0ZSgpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcclxuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4gVXNlclNlcnZpY2UudHJpZ2dlckNsaWNrU3luYygpLCBDT05GSUcuQVBQLlNZTkNfSU5URVJWQUwpO1xyXG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVRpbWUsIDEwMDAwKTtcclxuICAgICAgc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVDaGVzdFRpbWVycy5iaW5kKHRoaXMpLCAxMDAwKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGFzeW5jIG9uU2hvdygpIHtcclxuICAgICAgICAvLyBhd2FpdCB0aGlzLmxvYWRJbml0aWFsU3RhdGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgbG9hZEluaXRpYWxTdGF0ZSgpIHtcclxuICAgICAgICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IFVzZXJTZXJ2aWNlLmVuc3VyZVVzZXJJc1JlZ2lzdGVyZWQoKTtcclxuICAgICAgICBsZXQgc2VydmVyQ2xpY2tzID0gMDtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodXNlckluZm8gJiYgdXNlckluZm8uaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wZXROYW1lID0gdXNlckluZm8ucGV0X25hbWUgfHwgJ+acquWRveWQjSc7XHJcbiAgICAgICAgICAgIHNlcnZlckNsaWNrcyA9IHVzZXJJbmZvLnRvdGFsX2NsaWNrcyB8fCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWx3YXlzIGFkZCBwZW5kaW5nIGNsaWNrcyBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICBjb25zdCBwZW5kaW5nQ2xpY2tzU3RyID0gYXdhaXQgX3Byb21pc2lmaWVkU3RvcmFnZUdldChDT05GSUcuU1RPUkFHRV9LRVlTLlBFTkRJTkdfQ0xJQ0tTKTtcclxuICAgICAgICBjb25zdCBwZW5kaW5nQ2xpY2tzID0gcGFyc2VJbnQocGVuZGluZ0NsaWNrc1N0cikgfHwgMDtcclxuXHJcbiAgICAgICAgdGhpcy5jbGlja0NvdW50ID0gc2VydmVyQ2xpY2tzICsgcGVuZGluZ0NsaWNrcztcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhgW1N0YXRlXSBMb2FkZWQgc3RhdGU6IFNlcnZlciBjbGlja3M9JHtzZXJ2ZXJDbGlja3N9LCBQZW5kaW5nIGNsaWNrcz0ke3BlbmRpbmdDbGlja3N9LCBUb3RhbCBVSSBjbGlja3M9JHt0aGlzLmNsaWNrQ291bnR9YCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkQ2hlc3RTdGF0ZXMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgbG9hZENoZXN0U3RhdGVzKCkge1xyXG4gICAgICBjb25zdCBjaGVzdERhdGEgPSBhd2FpdCBfcHJvbWlzaWZpZWRTdG9yYWdlR2V0KCdjaGVzdFN0YXRlcycpO1xyXG4gICAgICBpZiAoY2hlc3REYXRhKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgbG9hZGVkQ2hlc3RzID0gSlNPTi5wYXJzZShjaGVzdERhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmNoZXN0cyA9IGxvYWRlZENoZXN0cy5tYXAoY2hlc3QgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChjaGVzdC5yZWZyZXNoVGltZXN0YW1wID4gMCAmJiBjaGVzdC5jbGFpbWVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZW1haW5pbmdUaW1lID0gTWF0aC5tYXgoMCwgY2hlc3QucmVmcmVzaFRpbWVzdGFtcCAtIERhdGUubm93KCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlbWFpbmluZ1RpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICBjaGVzdC5jbGFpbWVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgIGNoZXN0LnJlZnJlc2hUaW1lc3RhbXAgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gY2hlc3Q7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2goZSkgeyBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIGNoZXN0IHN0YXRlcyBmcm9tIHN0b3JhZ2VcIiwgZSk7IH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBzYXZlQ2hlc3RTdGF0ZXMoKSB7XHJcbiAgICAgIGF3YWl0IF9wcm9taXNpZmllZFN0b3JhZ2VTZXQoJ2NoZXN0U3RhdGVzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5jaGVzdHMpKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlVGltZSgpIHtcclxuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgY29uc3QgaG91cnMgPSBub3cuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgdGhpcy50aW1lID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVDaGVzdFRpbWVycygpIHtcclxuICAgICAgbGV0IG5lZWRzU2F2ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNoZXN0cy5mb3JFYWNoKChjaGVzdCwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoY2hlc3QuY2xhaW1lZCAmJiBjaGVzdC5yZWZyZXNoVGltZXN0YW1wID4gMCkge1xyXG4gICAgICAgICAgY29uc3QgcmVtYWluaW5nVGltZSA9IE1hdGgubWF4KDAsIGNoZXN0LnJlZnJlc2hUaW1lc3RhbXAgLSBEYXRlLm5vdygpKTtcclxuICAgICAgICAgIHRoaXMuY2hlc3RzW2luZGV4XS50aW1lckRpc3BsYXkgPSB0aGlzLmZvcm1hdFRpbWUocmVtYWluaW5nVGltZSAvIDEwMDApO1xyXG4gICAgICAgICAgaWYgKHJlbWFpbmluZ1RpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZXN0c1tpbmRleF0uY2xhaW1lZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNoZXN0c1tpbmRleF0ucmVmcmVzaFRpbWVzdGFtcCA9IDA7XHJcbiAgICAgICAgICAgIG5lZWRzU2F2ZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKG5lZWRzU2F2ZSkgdGhpcy5zYXZlQ2hlc3RTdGF0ZXMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgZm9ybWF0VGltZShzZWNvbmRzKSB7XHJcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XHJcbiAgICAgIGNvbnN0IHJlbWFpbmluZ1NlY29uZHMgPSBNYXRoLmZsb29yKHNlY29uZHMgJSA2MCk7XHJcbiAgICAgIHJldHVybiBgJHttaW51dGVzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX06JHtyZW1haW5pbmdTZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gO1xyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBpbmNyZW1lbnRDbGljayhlKSB7XHJcbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgZ2VuZXJhbCBjbGljayBoYW5kbGVyIGZvciB0aGUgYmFja2dyb3VuZC9wZXRcclxuICAgICAgICB0aGlzLmNsaWNrQ291bnQrKztcclxuICAgICAgICBhd2FpdCBVc2VyU2VydmljZS51cGRhdGVQZW5kaW5nQ2xpY2tzKDEpO1xyXG4gICAgICAgIHRoaXMucGV0SW1hZ2UgPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gJy9jb21tb24vUmExLnBuZycgOiAnL2NvbW1vbi9SYTIucG5nJztcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5wZXRJbWFnZSA9ICcvY29tbW9uL1JhMC5wbmcnOyB9LCAyMDApO1xyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBjbGFpbUNoZXN0KGluZGV4LCBlKSB7XHJcbiAgICAgIGNvbnN0IGNoZXN0ID0gdGhpcy5jaGVzdHNbaW5kZXhdO1xyXG4gICAgICBpZiAoY2hlc3QuY2xhaW1lZCkge1xyXG4gICAgICAgIHByb21wdC5zaG93VG9hc3QoeyBtZXNzYWdlOiAn5a6d566x5q2j5Zyo5Ya35Y205LitJyB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuY2xpY2tDb3VudCA+PSAxMDAwKSB7XHJcbiAgICAgICAgdGhpcy5jbGlja0NvdW50IC09IDEwMDA7XHJcbiAgICAgICAgYXdhaXQgVXNlclNlcnZpY2UudXBkYXRlUGVuZGluZ0NsaWNrcygtMTAwMCk7XHJcbiAgICAgICAgY29uc3QgcmV3YXJkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTAwKSArIDEwMDtcclxuICAgICAgICB0aGlzLmNsaWNrQ291bnQgKz0gcmV3YXJkO1xyXG4gICAgICAgIGF3YWl0IFVzZXJTZXJ2aWNlLnVwZGF0ZVBlbmRpbmdDbGlja3MocmV3YXJkKTtcclxuICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHsgbWVzc2FnZTogYOiOt+W+lyAke3Jld2FyZH0g54K55Ye7IWAgfSk7XHJcbiAgICAgICAgdGhpcy5jaGVzdHNbaW5kZXhdLmNsYWltZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hlc3RzW2luZGV4XS5yZWZyZXNoVGltZXN0YW1wID0gRGF0ZS5ub3coKSArICgzMCAqIDYwICogMTAwMCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zYXZlQ2hlc3RTdGF0ZXMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHsgbWVzc2FnZTogJ+eCueWHu+asoeaVsOS4jei2sycgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb3Blbk1vcmUoZSkge1xyXG4gICAgICByb3V0ZXIucHVzaCh7IHVyaTogJ21vcmUnIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbiJdLCJuYW1lcyI6WyJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfc3lzdGVtMiIsIl9zeXN0ZW0zIiwiX3N5c3RlbTQiLCJfY29uZmlnIiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIm93bktleXMiLCJyIiwidCIsIk9iamVjdCIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJvIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5IiwidmFsdWUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImkiLCJfdG9QcmltaXRpdmUiLCJTeW1ib2wiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJBcGlTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJiYXNlVXJsIiwiQ09ORklHIiwiU0VSVkVSIiwiQkFTRV9VUkwiLCJiYXNlSGVhZGVycyIsInJlcXVlc3QiLCJhY3Rpb24iLCJkYXRhIiwidXJsIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlciIsInJlc3BvbnNlVHlwZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwic3VjY2VzcyIsInJlc3BvbnNlIiwicmVzcG9uc2VEYXRhIiwiY29kZSIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiZmFpbCIsImdldFJhbmtpbmdzIiwibGltaXQiLCJyZXN1bHQiLCJyYW5raW5ncyIsIm1lc3NhZ2UiLCJzeW5jQ2xpY2tzIiwidXNlcklkIiwiY2xpY2tDb3VudCIsInVzZXJfaWQiLCJjbGlja19jb3VudCIsInN5bmNGcm9tU2VydmVyIiwibG9nIiwidXNlckluZm8iLCJjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkiLCJwZXROYW1lIiwicGV0X25hbWUiLCJpc0F2YWlsYWJsZSIsInNldFBldE5hbWUiLCJuZXdOYW1lIiwibmV3X25hbWUiLCJjaGVja0RldmljZVJlZ2lzdHJhdGlvbiIsImRldmljZUlkIiwiZGV2aWNlX2lkIiwiaXNfcmVnaXN0ZXJlZCIsImNhbl9hdXRvX2FjdGl2YXRlIiwicmVnaXN0ZXJBbmRHZXRVc2VySWQiLCJnZXRBbm5vdW5jZW1lbnRzIiwiYW5ub3VuY2VtZW50cyIsImNvdW50IiwidGltZXN0YW1wIiwiY2hlY2tBcHBVcGRhdGUiLCJjdXJyZW50VmVyc2lvbkNvZGUiLCJjdXJyZW50X3ZlcnNpb25fY29kZSIsImhhc1VwZGF0ZSIsImhhc191cGRhdGUiLCJ1cGRhdGVJbmZvIiwidXBkYXRlX2luZm8iLCJpc0ZvcmNlVXBkYXRlIiwiaXNfZm9yY2VfdXBkYXRlIiwibGF0ZXN0VmVyc2lvbkNvZGUiLCJsYXRlc3RfdmVyc2lvbl9jb2RlIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiQVBQIiwiTkFNRSIsIlZFUlNJT04iLCJWRVJTSU9OX0NPREUiLCJNQVhfQ0xJQ0tTX1BFUl9CQVRDSCIsIlNZTkNfSU5URVJWQUwiLCJSQU5LX0xJTUlUIiwiQ0hFQ0tfVVBEQVRFX0lOVEVSVkFMIiwiQU5OT1VOQ0VNRU5UX0NBQ0hFX1RJTUUiLCJTVE9SQUdFX0tFWVMiLCJERVZJQ0VfSUQiLCJJU19MT0NBTExZX0FDVElWQVRFRCIsIlVTRVJfSU5GTyIsIlBFTkRJTkdfQ0xJQ0tTIiwiTEFTVF9TWU5DX1RJTUUiLCJUT1RBTF9DTElDS1MiLCJMQVNUX1VQREFURV9DSEVDS19USU1FIiwiTEFTVF9BTk5PVU5DRU1FTlRfRkVUQ0hfVElNRSIsIkNBQ0hFRF9BTk5PVU5DRU1FTlRTIiwiQ0FDSEVEX1VQREFURV9JTkZPIiwiSUdOT1JFRF9WRVJTSU9OIiwiRk9SQ0VfVVBEQVRFX1JFUVVJUkVEIiwiX2FwaVNlcnZpY2UiLCJVc2VyU2VydmljZSIsIl9zdG9yYWdlR2V0Iiwia2V5IiwiZ2V0IiwiX3N0b3JhZ2VTZXQiLCJzZXQiLCJlcnIiLCJfZ2V0UmF3RGV2aWNlSWQiLCJnZXRTZXJpYWwiLCJzZXJpYWwiLCJ3YXJuIiwiX3NhdmVVc2VySW5mbyIsImlkIiwidXNlcl9udW1iZXIiLCJ1c2VySW5mb1RvU2F2ZSIsInRvdGFsX2NsaWNrcyIsImVuc3VyZVVzZXJJc1JlZ2lzdGVyZWQiLCJmb3JjZVN5bmMiLCJleGlzdGluZ1VzZXJJbmZvSlNPTiIsInBhcnNlIiwic3luY1Jlc3VsdCIsInN5bmNFcnJvciIsInJlZ1Jlc3VsdCIsIm5ld1JlZ1Jlc3VsdCIsInVwZGF0ZVBlbmRpbmdDbGlja3MiLCJhbW91bnQiLCJpc05hTiIsInBlbmRpbmdDbGlja3NEYXRhIiwiY3VycmVudENsaWNrcyIsInBhcnNlSW50IiwibmV3Q2xpY2tzIiwidG9TdHJpbmciLCJ0cmlnZ2VyQ2xpY2tTeW5jIiwidXNlckluZm9KU09OIiwiY2xpY2tzVG9TeW5jIiwiZm9yY2VTeW5jRnJvbVNlcnZlciIsImNsaWNrU3luY1N1Y2Nlc3MiLCJlcnJvck1zZyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJfdXNlclNlcnZpY2UiLCJfcHJvbWlzaWZpZWRTdG9yYWdlR2V0Iiwic3RvcmFnZSIsIl9wcm9taXNpZmllZFN0b3JhZ2VTZXQiLCJ0aW1lIiwicGV0SW1hZ2UiLCJjaGVzdHMiLCJjbGFpbWVkIiwicmVmcmVzaFRpbWVzdGFtcCIsInRpbWVyRGlzcGxheSIsIm9uSW5pdCIsImxvYWRJbml0aWFsU3RhdGUiLCJ1cGRhdGVUaW1lIiwic2V0SW50ZXJ2YWwiLCJ1cGRhdGVDaGVzdFRpbWVycyIsImJpbmQiLCJvblNob3ciLCJzZXJ2ZXJDbGlja3MiLCJwZW5kaW5nQ2xpY2tzU3RyIiwicGVuZGluZ0NsaWNrcyIsImxvYWRDaGVzdFN0YXRlcyIsImNoZXN0RGF0YSIsImxvYWRlZENoZXN0cyIsIm1hcCIsImNoZXN0IiwicmVtYWluaW5nVGltZSIsIk1hdGgiLCJtYXgiLCJEYXRlIiwibm93Iiwic2F2ZUNoZXN0U3RhdGVzIiwiaG91cnMiLCJnZXRIb3VycyIsInBhZFN0YXJ0IiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJuZWVkc1NhdmUiLCJpbmRleCIsImZvcm1hdFRpbWUiLCJzZWNvbmRzIiwiZmxvb3IiLCJyZW1haW5pbmdTZWNvbmRzIiwiaW5jcmVtZW50Q2xpY2siLCJyYW5kb20iLCJzZXRUaW1lb3V0IiwiY2xhaW1DaGVzdCIsInByb21wdCIsInNob3dUb2FzdCIsInJld2FyZCIsIm9wZW5Nb3JlIiwicm91dGVyIiwidXJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFDQSxJQUFBQSxVQUFBQyx1QkFBQUMsZUFBQTt3QkFDQSxJQUFBQyxXQUFBRix1QkFBQUMsZUFBQTt3QkFDQSxJQUFBRSxXQUFBSCx1QkFBQUMsZUFBQTt3QkFDQSxJQUFBRyxXQUFBSix1QkFBQUMsZUFBQTt3QkFDQSxJQUFBSSxVQUFBQyxvQkFBQTt3QkFBcUMsU0FBQU4sdUJBQUFPLENBQUE7NEJBQUEsT0FBQUEsS0FBQUEsRUFBQUMsVUFBQSxHQUFBRCxJQUFBO2dDQUFBRSxTQUFBRjs0QkFBQTt3QkFBQTt3QkFBQSxTQUFBRyxRQUFBSCxDQUFBLEVBQUFJLENBQUE7NEJBQUEsSUFBQUMsSUFBQUMsT0FBQUMsSUFBQSxDQUFBUDs0QkFBQSxJQUFBTSxPQUFBRSxxQkFBQTtnQ0FBQSxJQUFBQyxJQUFBSCxPQUFBRSxxQkFBQSxDQUFBUjtnQ0FBQUksS0FBQUssQ0FBQUEsSUFBQUEsRUFBQUMsTUFBQSxVQUFBTixDQUFBO29DQUFBLE9BQUFFLE9BQUFLLHdCQUFBLENBQUFYLEdBQUFJLEdBQUFRLFVBQUE7Z0NBQUEsS0FBQVAsRUFBQVEsSUFBQSxDQUFBQyxLQUFBLENBQUFULEdBQUFJOzRCQUFBOzRCQUFBLE9BQUFKO3dCQUFBO3dCQUFBLFNBQUFVLGNBQUFmLENBQUE7NEJBQUEsUUFBQUksSUFBQSxHQUFBQSxJQUFBWSxVQUFBQyxNQUFBLEVBQUFiLElBQUE7Z0NBQUEsSUFBQUMsSUFBQSxRQUFBVyxTQUFBLENBQUFaLEVBQUEsR0FBQVksU0FBQSxDQUFBWixFQUFBO2dDQUFBQSxJQUFBLElBQUFELFFBQUFHLE9BQUFELElBQUEsSUFBQWEsT0FBQSxVQUFBZCxDQUFBO29DQUFBZSxnQkFBQW5CLEdBQUFJLEdBQUFDLENBQUEsQ0FBQUQsRUFBQTtnQ0FBQSxLQUFBRSxPQUFBYyx5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