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
                                    "page-container"
                                ]
                            ],
                            {
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
                                    "menu-list"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                width: "90%"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "menu-item"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "90px",
                                borderRadius: "20px",
                                backgroundColor: "#1a1a1a",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "menu-text"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "32px"
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
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                        var _userService = _interopRequireDefault(__webpack_require__("./src/common/js/userService.js"));
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
                            data: {
                                time: '00:00'
                            },
                            onInit () {
                                this.updateTime();
                                setInterval(this.updateTime, 10000);
                            },
                            updateTime () {
                                const now = new Date();
                                const hours = now.getHours().toString().padStart(2, '0');
                                const minutes = now.getMinutes().toString().padStart(2, '0');
                                this.time = `${hours}:${minutes}`;
                            },
                            goBack () {
                                _system.default.back();
                            },
                            async syncCloudToLocal () {
                                _system2.default.showToast({
                                    message: '正在从云端同步...'
                                });
                                const result = await _userService.default.forceSyncFromServer();
                                _system2.default.showToast({
                                    message: result.message
                                });
                                if (result.success) setTimeout(()=>{
                                    this.goBack();
                                }, 1000);
                            },
                            async syncLocalToCloud () {
                                _system2.default.showToast({
                                    message: '正在上传本地进度...'
                                });
                                const uploadSuccess = await _userService.default.triggerClickSync();
                                if (uploadSuccess) {
                                    _system2.default.showToast({
                                        message: '上传成功！正在刷新数据...'
                                    });
                                    const refreshResult = await _userService.default.forceSyncFromServer();
                                    if (refreshResult.success) _system2.default.showToast({
                                        message: '数据刷新成功！'
                                    });
                                    else _system2.default.showToast({
                                        message: '刷新失败，请稍后重试'
                                    });
                                } else _system2.default.showToast({
                                    message: '上传失败或无待同步数据'
                                });
                                setTimeout(()=>{
                                    this.goBack();
                                }, 1000);
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
                                                value: "同步选项"
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
                                            "menu-list"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "menu-item"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.syncCloudToLocal(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "menu-text"
                                                ],
                                                value: "从云端同步至本地"
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "menu-item"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.syncLocalToCloud(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "menu-text"
                                                ],
                                                value: "从本地同步至云端"
                                            }
                                        }, [])
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luY1xcaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvYXBpLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvdXNlclNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9zeW5jL2luZGV4LnV4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwaS1zZXJ2aWNlLmpzXHJcbmltcG9ydCBmZXRjaCBmcm9tICdAc3lzdGVtLmZldGNoJztcclxuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XHJcbmltcG9ydCBwcm9tcHQgZnJvbSAnQHN5c3RlbS5wcm9tcHQnO1xyXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XHJcblxyXG5jbGFzcyBBcGlTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIOS4rei9rOacjeWKoeWZqOWcsOWdgCAtIOS7jiBjb25maWcuanMg6K+75Y+WXHJcbiAgICB0aGlzLmJhc2VVcmwgPSBDT05GSUcuU0VSVkVSLkJBU0VfVVJMO1xyXG4gICAgdGhpcy5iYXNlSGVhZGVycyA9IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOmAmueUqOivt+axguaWueazlSAtIOmAmui/h+S4rei9rOacjeWKoeWZqOi9rOWPkVxyXG4gIGFzeW5jIHJlcXVlc3QoYWN0aW9uLCBkYXRhID0ge30pIHtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vYXBpYDtcclxuICAgIFxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyOiB0aGlzLmJhc2VIZWFkZXJzLFxyXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xyXG4gICAgfTtcclxuXHJcbiAgICBvcHRpb25zLmRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IGFjdGlvbiwgLi4uZGF0YSB9KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZXRjaC5mZXRjaCh7XHJcbiAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XHJcblxyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUgPj0gMjAwICYmIHJlc3BvbnNlLmNvZGUgPCAzMDApIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZURhdGEpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBIVFRQIEVycm9yOiAke3Jlc3BvbnNlLmNvZGV9YCwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBIVFRQICR7cmVzcG9uc2UuY29kZX06ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2VEYXRhKX1gKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IChlcnJvciwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgLy8gREVUQUlMRUQgTE9HR0lORyBGT1IgTkVUV09SSyBGQUlMVVJFU1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgW0FwaVNlcnZpY2VdIFJlcXVlc3QgRmFpbGVkLiBDb2RlOiAke2NvZGV9LCBFcnJvcjogJHtKU09OLnN0cmluZ2lmeShlcnJvcil9YCk7XHJcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZDogJHtlcnJvci5kYXRhIHx8ICdDb25uZWN0aW9uIGlzIGludmFsaWQnfWApKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyDojrflj5bmjpLooYzmppxcclxuICBhc3luYyBnZXRSYW5raW5ncyhsaW1pdCA9IDEwKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2dldF9yYW5raW5ncycsIHtcclxuICAgICAgICBsaW1pdDogbGltaXRcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIHJhbmtpbmdzOiByZXN1bHQucmFua2luZ3MgfHwgW11cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign6I635Y+W5o6S6KGM5qac5aSx6LSlOicsIGVycm9yKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIHJhbmtpbmdzOiBbXSxcclxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDkuIrmiqXngrnlh7vmrKHmlbBcclxuICBhc3luYyBzeW5jQ2xpY2tzKHVzZXJJZCwgY2xpY2tDb3VudCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0KCdzeW5jX2NsaWNrcycsIHtcclxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXHJcbiAgICAgICAgY2xpY2tfY291bnQ6IGNsaWNrQ291bnRcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfkuIrmiqXngrnlh7vmrKHmlbDlpLHotKU6JywgZXJyb3IpXHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5LuO5pyN5Yqh5Zmo5ZCM5q2l5pWw5o2uXHJcbiAgYXN5bmMgc3luY0Zyb21TZXJ2ZXIodXNlcklkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ3N5bmNfZnJvbV9zZXJ2ZXInLCB7XHJcbiAgICAgICAgdXNlcl9pZDogdXNlcklkXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfku47mnI3liqHlmajlkIzmraXmlbDmja7miJDlip86JywgcmVzdWx0LnVzZXJJbmZvKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1c2VySW5mbzogcmVzdWx0LnVzZXJJbmZvIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign5ZCM5q2l5pWw5o2u5aSx6LSlOicsIHJlc3VsdCA/IHJlc3VsdC5lcnJvciA6ICfmnKrnn6XplJnor68nKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IChyZXN1bHQgPyByZXN1bHQuZXJyb3IgOiAn5pyN5Yqh5Zmo5pyq6L+U5Zue5oiQ5Yqf54q25oCBJykgfTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5LuO5pyN5Yqh5Zmo5ZCM5q2l5pWw5o2u5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDmo4Dmn6XlrqDnianlkI3mmK/lkKblj6/nlKhcclxuICBhc3luYyBjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkocGV0TmFtZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdjaGVja19wZXRfbmFtZScsIHtcclxuICAgICAgICBwZXRfbmFtZTogcGV0TmFtZVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgLi4ucmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfmo4Dmn6XlrqDnianlkI3lj6/nlKjmgKfml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UsIGlzQXZhaWxhYmxlOiBmYWxzZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5L+u5pS55a6g54mp5ZCNXHJcbiAgYXN5bmMgc2V0UGV0TmFtZSh1c2VySWQsIG5ld05hbWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnc2V0X3BldF9uYW1lJywge1xyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcclxuICAgICAgICBuZXdfbmFtZTogbmV3TmFtZVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S/ruaUueWuoOeJqeWQjeWksei0pTonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g6aKE5r+A5rS75qOA5p+lXHJcbiAgYXN5bmMgY2hlY2tEZXZpY2VSZWdpc3RyYXRpb24oZGV2aWNlSWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnY2hlY2tfcmVnaXN0cmF0aW9uJywge1xyXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWRcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfpooTmv4DmtLvmo4Dmn6XmiJDlip86JywgcmVzdWx0KTtcclxuICAgICAgLy8g55u05o6l6L+U5Zue5pyN5Yqh5Zmo55qE5Y6f5aeL5ZON5bqU77yMVUnlsYLmnJ/mnJvnmoTmmK/miYHlubPnu5PmnoRcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+mihOa/gOa0u+ajgOafpeaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XHJcbiAgICAgIC8vIOi/lOWbnuS4gOS4quWFvOWuueeahOmUmeivr+Wvueixoe+8jOmBv+WFjVVJ5bGC5bSp5rqDXHJcbiAgICAgIHJldHVybiB7IGlzX3JlZ2lzdGVyZWQ6IGZhbHNlLCBjYW5fYXV0b19hY3RpdmF0ZTogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDms6jlhozorr7lpIflubbojrflj5bnlKjmiLdJRFxyXG4gIGFzeW5jIHJlZ2lzdGVyQW5kR2V0VXNlcklkKGRldmljZUlkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBQYXNzIHRoZSBzZXJ2ZXIgcmVzcG9uc2UgZGlyZWN0bHkgdG8gdGhlIFVJIGxheWVyXHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3QoJ3JlZ2lzdGVyX2RldmljZV9hbmRfZ2V0X2lkJywge1xyXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWRcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfms6jlhozmiJbojrflj5bnlKjmiLdJROaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XHJcbiAgICAgIC8vIFJldHVybiBhIGNvbXBhdGlibGUgZXJyb3Igb2JqZWN0XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDojrflj5blhazlkYrliJfooahcclxuICBhc3luYyBnZXRBbm5vdW5jZW1lbnRzKGxpbWl0ID0gMTApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnZ2V0X2Fubm91bmNlbWVudHMnLCB7XHJcbiAgICAgICAgbGltaXQ6IGxpbWl0XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygnT3JpZ2luYWwgYW5ub3VuY2VtZW50IHJlc3VsdCBmcm9tIHNlcnZlcjonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogcmVzdWx0LnN1Y2Nlc3MgfHwgZmFsc2UsXHJcbiAgICAgICAgYW5ub3VuY2VtZW50czogcmVzdWx0LmFubm91bmNlbWVudHMgfHwgW10sXHJcbiAgICAgICAgY291bnQ6IHJlc3VsdC5jb3VudCB8fCAwLFxyXG4gICAgICAgIHRpbWVzdGFtcDogcmVzdWx0LnRpbWVzdGFtcCxcclxuICAgICAgICBlcnJvcjogcmVzdWx0LmVycm9yXHJcbiAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfojrflj5blhazlkYrlpLHotKU6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgIGFubm91bmNlbWVudHM6IFtdLFxyXG4gICAgICAgIGNvdW50OiAwXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDmo4Dmn6XlupTnlKjmm7TmlrBcclxuICBhc3luYyBjaGVja0FwcFVwZGF0ZShjdXJyZW50VmVyc2lvbkNvZGUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnY2hlY2tfdXBkYXRlJywge1xyXG4gICAgICAgIGN1cnJlbnRfdmVyc2lvbl9jb2RlOiBjdXJyZW50VmVyc2lvbkNvZGVcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlc3VsdC5zdWNjZXNzIHx8IGZhbHNlLFxyXG4gICAgICAgIGhhc1VwZGF0ZTogcmVzdWx0Lmhhc191cGRhdGUgfHwgZmFsc2UsXHJcbiAgICAgICAgdXBkYXRlSW5mbzogcmVzdWx0LnVwZGF0ZV9pbmZvIHx8IG51bGwsXHJcbiAgICAgICAgaXNGb3JjZVVwZGF0ZTogcmVzdWx0LmlzX2ZvcmNlX3VwZGF0ZSB8fCBmYWxzZSxcclxuICAgICAgICBjdXJyZW50VmVyc2lvbkNvZGU6IHJlc3VsdC5jdXJyZW50X3ZlcnNpb25fY29kZSB8fCBjdXJyZW50VmVyc2lvbkNvZGUsXHJcbiAgICAgICAgbGF0ZXN0VmVyc2lvbkNvZGU6IHJlc3VsdC5sYXRlc3RfdmVyc2lvbl9jb2RlIHx8IGN1cnJlbnRWZXJzaW9uQ29kZSxcclxuICAgICAgICBlcnJvcjogcmVzdWx0LmVycm9yXHJcbiAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfmo4Dmn6Xmm7TmlrDlpLHotKU6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgIGhhc1VwZGF0ZTogZmFsc2UsXHJcbiAgICAgICAgaXNGb3JjZVVwZGF0ZTogZmFsc2VcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBcGlTZXJ2aWNlKClcclxuIiwiLy8gY29uZmlnLmpzXHJcbmV4cG9ydCBjb25zdCBDT05GSUcgPSB7XHJcbiAgLy8g5Lit6L2s5pyN5Yqh5Zmo6YWN572uXHJcbiAgU0VSVkVSOiB7XHJcbiAgICBCQVNFX1VSTDogJ2h0dHA6Ly8xMDMuMjA1LjI1My44NzoyMjIwNydcclxuICB9LFxyXG4gIFxyXG4gIC8vIOazqOaEj++8mlVSTCDliY3nvIDlnKggYXBpLXNlcnZpY2UuanMg5Lit56Gs57yW56CB5LqGXHJcbiAgLy8g6L+Z6YeM5LiN5YaN6ZyA6KaB6YWN572uXHJcbiAgXHJcbiAgLy8g5bqU55So6YWN572uXHJcbiAgQVBQOiB7XHJcbiAgICBOQU1FOiAnQmFuZFBldCcsXHJcbiAgICBWRVJTSU9OOiAnMC4zLjUgQWxwaGEnLFxyXG4gICAgVkVSU0lPTl9DT0RFOiAzNSwgIC8vIOaWsOWinu+8mueUqOS6jueJiOacrOavlOi+g+eahOaVsOWtl++8iDAuMy41IC0+IDM177yJXHJcbiAgICBNQVhfQ0xJQ0tTX1BFUl9CQVRDSDogNTAsXHJcbiAgICBTWU5DX0lOVEVSVkFMOiA2MDAwMCxcclxuICAgIFJBTktfTElNSVQ6IDEwLFxyXG4gICAgXHJcbiAgICAvLyDmm7TmlrDmo4Dmn6XphY3nva7vvIjmlrDlop7vvIlcclxuICAgIENIRUNLX1VQREFURV9JTlRFUlZBTDogMzYwMDAwMCwgLy8gMeWwj+aXtuajgOafpeS4gOasoeabtOaWsFxyXG4gICAgQU5OT1VOQ0VNRU5UX0NBQ0hFX1RJTUU6IDMwMDAwMCwgLy8gNeWIhumSn+e8k+WtmOWFrOWRilxyXG4gIH0sXHJcbiAgXHJcbiAgLy8g5a2Y5YKo6ZSu5ZCNXHJcbiAgU1RPUkFHRV9LRVlTOiB7XHJcbiAgICBERVZJQ0VfSUQ6ICdkZXZpY2VfaWQnLFxyXG4gICAgSVNfTE9DQUxMWV9BQ1RJVkFURUQ6ICdpc19sb2NhbGx5X2FjdGl2YXRlZCcsXHJcbiAgICBVU0VSX0lORk86ICd1c2VyX2luZm8nLFxyXG4gICAgUEVORElOR19DTElDS1M6ICdwZW5kaW5nX2NsaWNrcycsXHJcbiAgICBMQVNUX1NZTkNfVElNRTogJ2xhc3Rfc3luY190aW1lJyxcclxuICAgIFRPVEFMX0NMSUNLUzogJ3RvdGFsX2NsaWNrcycsXHJcbiAgICBcclxuICAgIC8vIOaWsOWinuWtmOWCqOmUrlxyXG4gICAgTEFTVF9VUERBVEVfQ0hFQ0tfVElNRTogJ2xhc3RfdXBkYXRlX2NoZWNrX3RpbWUnLFxyXG4gICAgTEFTVF9BTk5PVU5DRU1FTlRfRkVUQ0hfVElNRTogJ2xhc3RfYW5ub3VuY2VtZW50X2ZldGNoX3RpbWUnLFxyXG4gICAgQ0FDSEVEX0FOTk9VTkNFTUVOVFM6ICdjYWNoZWRfYW5ub3VuY2VtZW50cycsXHJcbiAgICBDQUNIRURfVVBEQVRFX0lORk86ICdjYWNoZWRfdXBkYXRlX2luZm8nLFxyXG4gICAgSUdOT1JFRF9WRVJTSU9OOiAnaWdub3JlZF92ZXJzaW9uX2NvZGUnLCAvLyDnlKjmiLflv73nlaXnmoTniYjmnKxcclxuICAgIEZPUkNFX1VQREFURV9SRVFVSVJFRDogJ2ZvcmNlX3VwZGF0ZV9yZXF1aXJlZCcsIC8vIOaYr+WQpumcgOimgeW8uuWItuabtOaWsFxyXG4gIH1cclxufVxyXG4iLCIvLyBzcmMvY29tbW9uL2pzL3VzZXJTZXJ2aWNlLmpzXG5pbXBvcnQgZGV2aWNlIGZyb20gJ0BzeXN0ZW0uZGV2aWNlJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XG5pbXBvcnQgQXBpU2VydmljZSBmcm9tICcuL2FwaS1zZXJ2aWNlLmpzJztcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vY29uZmlnLmpzJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgdG8gaGFuZGxlIHNpbGVudCB1c2VyIHJlZ2lzdHJhdGlvbiBhbmQgZGF0YSByZXRyaWV2YWwuXG4gKi9cbmNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgXG4gIC8qKlxuICAgKiBQcm9taXNpZmllZCBoZWxwZXIgZm9yIHN0b3JhZ2UuZ2V0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSB0byByZXRyaWV2ZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gVGhlIHZhbHVlIGZyb20gc3RvcmFnZSwgb3IgbnVsbCBpZiBub3QgZm91bmQuXG4gICAqL1xuICBfc3RvcmFnZUdldChrZXkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHN0b3JhZ2UuZ2V0KHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiByZXNvbHZlKGRhdGEpLFxuICAgICAgICBmYWlsOiAoKSA9PiByZXNvbHZlKG51bGwpLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUHJvbWlzaWZpZWQgaGVscGVyIGZvciBzdG9yYWdlLnNldC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gc2V0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgdmFsdWUgdG8gc3RvcmUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgX3N0b3JhZ2VTZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzdG9yYWdlLnNldCh7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXG4gICAgICAgIGZhaWw6IChlcnIsIGNvZGUpID0+IHJlamVjdChuZXcgRXJyb3IoYFN0b3JhZ2Uuc2V0IGZhaWxlZCBmb3IgJyR7a2V5fSc6ICR7ZXJyfSAoJHtjb2RlfSlgKSksXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHJhdyBkZXZpY2UgaWRlbnRpZmllciwgdXNpbmcgYSBmYWxsYmFjayBmb3Igc2ltdWxhdG9ycy5cbiAgICogSXQgYWxzbyBzYXZlcyB0aGUgcmF3IElEIHRvIHN0b3JhZ2UgZm9yIGZ1dHVyZSB1c2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZ3xudWxsPn0gVGhlIHJhdyBkZXZpY2UgSUQgb3IgbnVsbCBvbiBmYWlsdXJlLlxuICAgKi9cbiAgX2dldFJhd0RldmljZUlkKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgZGV2aWNlLmdldFNlcmlhbCh7XG4gICAgICAgIHN1Y2Nlc3M6IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICAgICAgbGV0IHNlcmlhbCA9IGRhdGEgPyBkYXRhLnNlcmlhbCA6IG51bGw7XG4gICAgICAgICAgaWYgKHNlcmlhbCA9PT0gJ05BJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRGV2aWNlIHNlcmlhbCBpcyAnTkEnLCB1c2luZyBhIGZpeGVkIHRlc3Qgc2VyaWFsLlwiKTtcbiAgICAgICAgICAgIHNlcmlhbCA9ICdURVNUVk0tU04tMDEyMzQ1Njc4OSc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFzZXJpYWwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBnZXQgYSB2YWxpZCBkZXZpY2Ugc2VyaWFsLicpO1xuICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgcmF3IElEIGZvciBvdGhlciBzZXJ2aWNlcyB0aGF0IG1pZ2h0IG5lZWQgaXQgKGUuZy4sIEFQSSBjYWxscylcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX3N0b3JhZ2VTZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5ERVZJQ0VfSUQsIHNlcmlhbCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2F2ZWQgcmF3IGRldmljZSBJRDonLCBzZXJpYWwpO1xuICAgICAgICAgICAgcmVzb2x2ZShzZXJpYWwpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBzYXZlIHJhdyBkZXZpY2UgSUQgdG8gc3RvcmFnZTonLCBlKTtcbiAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAoZXJyLCBjb2RlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgQ29ubmVjdGlvbiBpcyBpbnZhbGlkYCk7XG4gICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIHRoZSB1c2VyIGluZm9ybWF0aW9uIHRvIGxvY2FsIHN0b3JhZ2UuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB1c2VySW5mbyAtIFRoZSB1c2VyIGluZm8gb2JqZWN0IHJlY2VpdmVkIGZyb20gdGhlIHNlcnZlci5cbiAgICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0Pn0gVGhlIHVzZXIgaW5mbyB0aGF0IHdhcyBzYXZlZC5cbiAgICovXG4gIGFzeW5jIF9zYXZlVXNlckluZm8odXNlckluZm8pIHtcbiAgICBpZiAoIXVzZXJJbmZvIHx8ICghdXNlckluZm8uaWQgJiYgIXVzZXJJbmZvLnVzZXJfbnVtYmVyKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBpbmZvIGlzIGludmFsaWQsIGNhbm5vdCBzYXZlLlwiKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdXNlckluZm9Ub1NhdmUgPSB7XG4gICAgICBpZDogdXNlckluZm8uaWQgfHwgdXNlckluZm8udXNlcl9udW1iZXIsXG4gICAgICB1c2VyX251bWJlcjogdXNlckluZm8udXNlcl9udW1iZXIsXG4gICAgICBwZXRfbmFtZTogdXNlckluZm8ucGV0X25hbWUsXG4gICAgICB0b3RhbF9jbGlja3M6IHVzZXJJbmZvLnRvdGFsX2NsaWNrcyB8fCAwXG4gICAgfTtcblxuICAgIGF3YWl0IHRoaXMuX3N0b3JhZ2VTZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8sIEpTT04uc3RyaW5naWZ5KHVzZXJJbmZvVG9TYXZlKSk7XG4gICAgY29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgc2F2ZWQgdXNlciBpbmZvIHRvIHN0b3JhZ2U6XCIsIHVzZXJJbmZvVG9TYXZlKTtcbiAgICByZXR1cm4gdXNlckluZm9Ub1NhdmU7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG1haW4gcHVibGljIG1ldGhvZC4gSXQgZW5zdXJlcyB0aGF0IHVzZXIgaW5mb3JtYXRpb24gaXMgcHJlc2VudCBpbiBzdG9yYWdlLlxuICAgKiBJZiBub3QsIGl0IHNpbGVudGx5IGdldHMgYSBkZXZpY2UgSUQsIGNoZWNrcyB3aXRoIHRoZSBzZXJ2ZXIsIGFuZCBlaXRoZXJcbiAgICogcmV0cmlldmVzIGV4aXN0aW5nIHVzZXIgZGF0YSBvciByZWdpc3RlcnMgYSBuZXcgdXNlci5cbiAgICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0fG51bGw+fSBUaGUgdXNlciBpbmZvLCBvciBudWxsIGlmIHRoZSBwcm9jZXNzIGZhaWxzLlxuICAgKi9cbiAgYXN5bmMgZW5zdXJlVXNlcklzUmVnaXN0ZXJlZChmb3JjZVN5bmMgPSBmYWxzZSkge1xuICAgIC8vIDEuIENoZWNrIGlmIHVzZXIgaW5mbyBhbHJlYWR5IGV4aXN0cyBhbmQgaXMgdmFsaWQuXG4gICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gQ2hlY2tpbmcgZm9yIGV4aXN0aW5nIHVzZXIgaW5mbyBpbiBzdG9yYWdlLi4uJyk7XG4gICAgY29uc3QgZXhpc3RpbmdVc2VySW5mb0pTT04gPSBhd2FpdCB0aGlzLl9zdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPKTtcbiAgICBpZiAoZXhpc3RpbmdVc2VySW5mb0pTT04pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gSlNPTi5wYXJzZShleGlzdGluZ1VzZXJJbmZvSlNPTik7XG4gICAgICAgIGlmICh1c2VySW5mbyAmJiB1c2VySW5mby5pZCkge1xuICAgICAgICAgIGlmIChmb3JjZVN5bmMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIEZvcmNlIHN5bmMgZW5hYmxlZC4gQXR0ZW1wdGluZyB0byBzeW5jIGxhdGVzdCBkYXRhIGZyb20gc2VydmVyLi4uJyk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCBzeW5jUmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5zeW5jRnJvbVNlcnZlcih1c2VySW5mby5pZCk7XG4gICAgICAgICAgICAgIGlmIChzeW5jUmVzdWx0ICYmIHN5bmNSZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFN1Y2Nlc3NmdWxseSBzeW5jZWQgZnJvbSBzZXJ2ZXIuJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX3NhdmVVc2VySW5mbyhzeW5jUmVzdWx0LnVzZXJJbmZvKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1tVc2VyU2VydmljZV0gU3luYyBmcm9tIHNlcnZlciBmYWlsZWQsIHdpbGwgdXNlIHN0YWxlIGxvY2FsIGRhdGEuIEVycm9yOicsIHN5bmNSZXN1bHQgPyBzeW5jUmVzdWx0LmVycm9yIDogJ1Vua25vd24gZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlckluZm87IC8vIFJldHVybiBzdGFsZSBkYXRhIGlmIHN5bmMgZmFpbHNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoc3luY0Vycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tVc2VyU2VydmljZV0gQSBjcml0aWNhbCBlcnJvciBvY2N1cnJlZCBkdXJpbmcgc2VydmVyIHN5bmM6Jywgc3luY0Vycm9yKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHVzZXJJbmZvOyAvLyBSZXR1cm4gc3RhbGUgZGF0YSBvbiBjcml0aWNhbCBzeW5jIGZhaWx1cmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gVXNlciBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuIEZvdW5kIGluZm86JywgdXNlckluZm8pO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXJJbmZvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBNYWxmb3JtZWQgSlNPTiwgcHJvY2VlZCB3aXRoIHJlZ2lzdHJhdGlvbi5cbiAgICAgICAgY29uc29sZS53YXJuKCdbVXNlclNlcnZpY2VdIFVzZXIgaW5mbyBpbiBzdG9yYWdlIGlzIG1hbGZvcm1lZC4gUHJvY2VlZGluZyB3aXRoIHJlZ2lzdHJhdGlvbi4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBVc2VyIG5vdCBmb3VuZCBsb2NhbGx5LiBTdGFydGluZyBzaWxlbnQgcmVnaXN0cmF0aW9uIHByb2Nlc3MuLi4nKTtcblxuICAgIC8vIDIuIEdldCBEZXZpY2UgSURcbiAgICBjb25zdCBkZXZpY2VJZCA9IGF3YWl0IHRoaXMuX2dldFJhd0RldmljZUlkKCk7XG4gICAgaWYgKCFkZXZpY2VJZCkge1xuICAgICAgY29uc29sZS5lcnJvcignW1VzZXJTZXJ2aWNlXSBDUklUSUNBTDogQ2Fubm90IHByb2NlZWQgd2l0aCByZWdpc3RyYXRpb246IGZhaWxlZCB0byBnZXQgZGV2aWNlIElELicpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBbVXNlclNlcnZpY2VdIEdvdCBkZXZpY2UgSUQ6ICR7ZGV2aWNlSWR9YCk7XG5cbiAgICB0cnkge1xuICAgICAgLy8gMy4gQ2hlY2sgaWYgdGhlIGRldmljZSBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQgb24gdGhlIHNlcnZlclxuICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gQ2hlY2tpbmcgZGV2aWNlIHJlZ2lzdHJhdGlvbiB3aXRoIHNlcnZlci4uLicpO1xuICAgICAgY29uc3QgcmVnUmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5jaGVja0RldmljZVJlZ2lzdHJhdGlvbihkZXZpY2VJZCk7XG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTZXJ2ZXIgcmVnaXN0cmF0aW9uIGNoZWNrIHJlc3BvbnNlOicsIEpTT04uc3RyaW5naWZ5KHJlZ1Jlc3VsdCkpO1xuXG5cbiAgICAgIGlmIChyZWdSZXN1bHQgJiYgcmVnUmVzdWx0LmlzX3JlZ2lzdGVyZWQgJiYgcmVnUmVzdWx0LnVzZXJJbmZvKSB7XG4gICAgICAgIC8vIERldmljZSBpcyBrbm93biwgc2F2ZSB0aGUgaW5mbyBhbmQgd2UncmUgZG9uZS5cbiAgICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gRGV2aWNlIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCBvbiBzZXJ2ZXIuIFJlc3RvcmluZyB1c2VyIGluZm8uJyk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9zYXZlVXNlckluZm8ocmVnUmVzdWx0LnVzZXJJbmZvKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gNC4gSWYgbm90IHJlZ2lzdGVyZWQsIGNyZWF0ZSBhIG5ldyB1c2VyIHJlY29yZC5cbiAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIERldmljZSBub3QgcmVnaXN0ZXJlZC4gQXR0ZW1wdGluZyB0byByZWdpc3RlciBhIG5ldyB1c2VyLi4uJyk7XG4gICAgICBjb25zdCBuZXdSZWdSZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLnJlZ2lzdGVyQW5kR2V0VXNlcklkKGRldmljZUlkKTtcbiAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFNlcnZlciBuZXcgdXNlciByZWdpc3RyYXRpb24gcmVzcG9uc2U6JywgSlNPTi5zdHJpbmdpZnkobmV3UmVnUmVzdWx0KSk7XG5cblxuICAgICAgaWYgKG5ld1JlZ1Jlc3VsdCAmJiBuZXdSZWdSZXN1bHQuc3VjY2VzcyAmJiBuZXdSZWdSZXN1bHQudXNlckluZm8pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWQgbmV3IHVzZXIuJyk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9zYXZlVXNlckluZm8obmV3UmVnUmVzdWx0LnVzZXJJbmZvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tVc2VyU2VydmljZV0gQ1JJVElDQUw6IEZhaWxlZCB0byByZWdpc3RlciBuZXcgdXNlci4nLCBuZXdSZWdSZXN1bHQgPyBuZXdSZWdSZXN1bHQubWVzc2FnZSA6ICdObyByZXN1bHQgZnJvbSBzZXJ2ZXInKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignW1VzZXJTZXJ2aWNlXSBDUklUSUNBTDogQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHRoZSBzaWxlbnQgcmVnaXN0cmF0aW9uIEFQSSBjYWxsczonLCBlKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBudW1iZXIgb2YgcGVuZGluZyBjbGlja3MgYnkgYSBnaXZlbiBhbW91bnQuXG4gICAqIFRoaXMgaXMgdGhlIGNlbnRyYWxpemVkIG1ldGhvZCBmb3IgYWxsIGNsaWNrIG1vZGlmaWNhdGlvbnMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbW91bnQgLSBUaGUgbnVtYmVyIHRvIGFkZCB0byBwZW5kaW5nIGNsaWNrcy4gQ2FuIGJlIG5lZ2F0aXZlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXJ8bnVsbD59IFRoZSBuZXcgbnVtYmVyIG9mIHBlbmRpbmcgY2xpY2tzLCBvciBudWxsIG9uIGZhaWx1cmUuXG4gICAqL1xuICBhc3luYyB1cGRhdGVQZW5kaW5nQ2xpY2tzKGFtb3VudCkge1xuICAgIGlmICh0eXBlb2YgYW1vdW50ICE9PSAnbnVtYmVyJyB8fCBpc05hTihhbW91bnQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tVc2VyU2VydmljZV0gdXBkYXRlUGVuZGluZ0NsaWNrcyByZWNlaXZlZCBhbiBpbnZhbGlkIGFtb3VudDonLCBhbW91bnQpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBlbmRpbmdDbGlja3NEYXRhID0gYXdhaXQgdGhpcy5fc3RvcmFnZUdldChDT05GSUcuU1RPUkFHRV9LRVlTLlBFTkRJTkdfQ0xJQ0tTKTtcbiAgICAgIGxldCBjdXJyZW50Q2xpY2tzID0gcGFyc2VJbnQocGVuZGluZ0NsaWNrc0RhdGEpIHx8IDA7XG4gICAgICBcbiAgICAgIGNvbnN0IG5ld0NsaWNrcyA9IGN1cnJlbnRDbGlja3MgKyBhbW91bnQ7XG4gICAgICBcbiAgICAgIGF3YWl0IHRoaXMuX3N0b3JhZ2VTZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5QRU5ESU5HX0NMSUNLUywgbmV3Q2xpY2tzLnRvU3RyaW5nKCkpO1xuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyhgW1VzZXJTZXJ2aWNlXSBQZW5kaW5nIGNsaWNrcyB1cGRhdGVkIGJ5ICR7YW1vdW50fS4gTmV3IHZhbHVlOiAke25ld0NsaWNrc31gKTtcbiAgICAgIHJldHVybiBuZXdDbGlja3M7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignW1VzZXJTZXJ2aWNlXSBGYWlsZWQgdG8gdXBkYXRlIHBlbmRpbmcgY2xpY2tzIGluIHN0b3JhZ2U6JywgZSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgcGVuZGluZyBjbGlja3MgZnJvbSBzdG9yYWdlIGFuZCBzeW5jcyB0aGVtIHdpdGggdGhlIHNlcnZlci5cbiAgICogVGhpcyBpcyBhIHNlbGYtY29udGFpbmVkLCBmaXJlLWFuZC1mb3JnZXQgbWV0aG9kLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gVHJ1ZSBvbiBzdWNjZXNzLCBmYWxzZSBvbiBmYWlsdXJlIG9yIGlmIG5vIHN5bmMgd2FzIG5lZWRlZC5cbiAgICovXG4gIGFzeW5jIHRyaWdnZXJDbGlja1N5bmMoKSB7XG4gICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gVHJpZ2dlcmluZyBjbGljayBzeW5jLi4uJyk7XG4gICAgXG4gICAgLy8gMS4gR2V0IHVzZXIgaW5mb1xuICAgIGNvbnN0IHVzZXJJbmZvSlNPTiA9IGF3YWl0IHRoaXMuX3N0b3JhZ2VHZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8pO1xuICAgIGlmICghdXNlckluZm9KU09OKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tVc2VyU2VydmljZV0gU3luYyBhYm9ydGVkOiBVc2VyIGluZm8gbm90IGZvdW5kIGluIHN0b3JhZ2UuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGxldCB1c2VySW5mbztcbiAgICB0cnkge1xuICAgICAgdXNlckluZm8gPSBKU09OLnBhcnNlKHVzZXJJbmZvSlNPTik7XG4gICAgICBpZiAoIXVzZXJJbmZvIHx8ICF1c2VySW5mby5pZCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tVc2VyU2VydmljZV0gU3luYyBhYm9ydGVkOiBVc2VyIElEIGlzIGludmFsaWQuJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGNvbnNvbGUud2FybignW1VzZXJTZXJ2aWNlXSBTeW5jIGFib3J0ZWQ6IENvdWxkIG5vdCBwYXJzZSB1c2VyIGluZm8uJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMi4gR2V0IHBlbmRpbmcgY2xpY2tzXG4gICAgY29uc3QgcGVuZGluZ0NsaWNrc0RhdGEgPSBhd2FpdCB0aGlzLl9zdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuUEVORElOR19DTElDS1MpO1xuICAgIGNvbnN0IGNsaWNrc1RvU3luYyA9IHBhcnNlSW50KHBlbmRpbmdDbGlja3NEYXRhKTtcblxuICAgIGlmIChpc05hTihjbGlja3NUb1N5bmMpKSB7XG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBObyBwZW5kaW5nIGNsaWNrcyB0byBzeW5jICh2YWx1ZSBpcyBOYU4pLicpO1xuICAgICAgcmV0dXJuIHRydWU7IC8vIE5vdGhpbmcgdG8gZG8sIHNvIGl0J3MgYSBcInN1Y2Nlc3NcIlxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGBbVXNlclNlcnZpY2VdIEZvdW5kICR7Y2xpY2tzVG9TeW5jfSBwZW5kaW5nIGNsaWNrcyBmb3IgdXNlciAke3VzZXJJbmZvLmlkfS4gU3luY2luZy4uLmApO1xuXG4gICAgLy8gMy4gQ2FsbCBBUElcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLnN5bmNDbGlja3ModXNlckluZm8uaWQsIGNsaWNrc1RvU3luYyk7XG5cbiAgICAvLyA0LiBVcGRhdGUgc3RvcmFnZSBvbiBzdWNjZXNzXG4gICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTeW5jIHN1Y2Nlc3NmdWwuIFJlc2V0dGluZyBwZW5kaW5nIGNsaWNrcy4nKTtcbiAgICAgIGF3YWl0IHRoaXMuX3N0b3JhZ2VTZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5QRU5ESU5HX0NMSUNLUywgJzAnKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbVXNlclNlcnZpY2VdIFN5bmMgZmFpbGVkOicsIHJlc3VsdC5lcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgdGhlIGxhdGVzdCB1c2VyIGRhdGEgZnJvbSB0aGUgc2VydmVyIGFuZCBvdmVyd3JpdGVzIGxvY2FsIHN0b3JhZ2UuXG4gICAqIFRoaXMgbWV0aG9kIHJ1bnMgdGhlIGZ1bGwgcmVnaXN0cmF0aW9uL2xvZ2luIGZsb3cgdG8gZW5zdXJlIGRhdGEgaXMgY29uc2lzdGVudC5cbiAgICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZ30+fVxuICAgKi9cbiAgYXN5bmMgZm9yY2VTeW5jRnJvbVNlcnZlcigpIHtcbiAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdGFydGluZyBmb3JjZSBzeW5jIGZyb20gc2VydmVyLi4uJyk7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIC8vIDEuIEZvcmNlIGEgc3luYyBvZiBhbnkgcGVuZGluZyBjbGlja3MgRklSU1QuXG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdGVwIDE6IFN5bmNpbmcgbG9jYWwgcGVuZGluZyBjbGlja3MgYmVmb3JlIGZldGNoaW5nIHNlcnZlciBkYXRhLicpO1xuICAgICAgY29uc3QgY2xpY2tTeW5jU3VjY2VzcyA9IGF3YWl0IHRoaXMudHJpZ2dlckNsaWNrU3luYygpO1xuXG4gICAgICBpZiAoIWNsaWNrU3luY1N1Y2Nlc3MpIHtcbiAgICAgICAgLy8gSWYgdGhlIGNsaWNrIHN5bmMgZmFpbHMsIHdlIHNob3VsZCBub3QgcHJvY2VlZCwgYXMgd2UgbWlnaHQgb3ZlcndyaXRlIHRoZSBsb2NhbCBzdGF0ZVxuICAgICAgICAvLyB3aXRoIHN0YWxlIHNlcnZlciBkYXRhLCBjYXVzaW5nIHRoZSB1c2VyIHRvIGxvc2UgdGhlaXIgcGVuZGluZyBjbGlja3MuXG4gICAgICAgIGNvbnN0IGVycm9yTXNnID0gJ+aXoOazleWQjOatpeacrOWcsOeCueWHu+aVsOaNru+8jOW3suWPlua2iOS7juacjeWKoeWZqOabtOaWsO+8jOS7pemYsuaVsOaNruS4ouWkseOAgic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtVc2VyU2VydmljZV0gJHtlcnJvck1zZ31gKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yTXNnIH07XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdGVwIDE6IExvY2FsIHBlbmRpbmcgY2xpY2tzIHN5bmNlZCBzdWNjZXNzZnVsbHkuJyk7XG5cblxuICAgICAgLy8gMi4gTm93LCBydW4gdGhlIGZ1bGwgZ2V0L3JlZ2lzdGVyIHVzZXIgZmxvdyB0byBnZXQgdGhlIGxhdGVzdCBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdGVwIDI6IEZldGNoaW5nIGxhdGVzdCB1c2VyIGRhdGEgZnJvbSBzZXJ2ZXIuJyk7XG4gICAgICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IHRoaXMuZW5zdXJlVXNlcklzUmVnaXN0ZXJlZCh0cnVlKTtcblxuICAgICAgaWYgKHVzZXJJbmZvICYmIHVzZXJJbmZvLmlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFN0ZXAgMjogU3VjY2Vzc2Z1bGx5IGZldGNoZWQgYW5kIHVwZGF0ZWQgdXNlciBpbmZvLiBVc2VySW5mbzonLCB1c2VySW5mbyk7XG4gICAgICAgIC8vIFRoZSBlbnN1cmVVc2VySXNSZWdpc3RlcmVkIG1ldGhvZCBhbHJlYWR5IHNhdmVzIHRoZSBuZXcgdXNlciBpbmZvLCB3aGljaCBpbmNsdWRlcyB0aGUgdXBkYXRlZCB0b3RhbF9jbGlja3MuXG4gICAgICAgIC8vIEFuZCB0cmlnZ2VyQ2xpY2tTeW5jIGFscmVhZHkgcmVzZXQgcGVuZGluZ19jbGlja3MgdG8gMC4gU28sIHdlIGFyZSBkb25lLlxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gRm9yY2Ugc3luYyBjb21wbGV0ZS4gTG9jYWwgc3RvcmFnZSBpcyBub3cgdXAtdG8tZGF0ZS4nKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ+WQjOatpeaIkOWKn++8gScgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVycm9yTXNnID0gJ+aXoOazleS7juacjeWKoeWZqOiOt+WPluacgOaWsOeUqOaIt+aVsOaNruOAgic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtVc2VyU2VydmljZV0gJHtlcnJvck1zZ31gKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yTXNnIH07XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignW1VzZXJTZXJ2aWNlXSBBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgdGhlIGZvcmNlIHN5bmMgcHJvY2VzczonLCBlKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAn5ZCM5q2l5aSx6LSl77yM5Y+R55Sf5pyq55+l6ZSZ6K+vJyB9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlclNlcnZpY2UoKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjYuOFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS42LjhcIjsiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXItY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlclwiPlxyXG4gICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vYmFjay5wbmdcIiBjbGFzcz1cInBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uXCIgb25jbGljaz1cImdvQmFja1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZS10aW1lXCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtdGltZS1kaXNwbGF5XCI+e3sgdGltZSB9fTwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicGFnZS1oZWFkZXItdGl0bGVcIj7lkIzmraXpgInpobk8L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWxpc3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCIgb25jbGljaz1cInN5bmNDbG91ZFRvTG9jYWxcIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibWVudS10ZXh0XCI+5LuO5LqR56uv5ZCM5q2l6Iez5pys5ZywPC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiBvbmNsaWNrPVwic3luY0xvY2FsVG9DbG91ZFwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJtZW51LXRleHRcIj7ku47mnKzlnLDlkIzmraXoh7PkupHnq688L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGU+XHJcbiAgLnBhZ2UtY29udGFpbmVyIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgfVxyXG4gIC5wYWdlLWhlYWRlci1jb250YWluZXIgeyB3aWR0aDogMTAwJTsgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxyXG4gIC5wYWdlLXRpbWUtZGlzcGxheSB7IGNvbG9yOiAjRkZGRkZGOyBmb250LXNpemU6IDI0cHg7IG1hcmdpbi1ib3R0b206IDJweDsgfVxyXG4gIC5wYWdlLWhlYWRlciB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDkwcHg7IHBhZGRpbmc6IDAgMjBweDsgZmxleC1kaXJlY3Rpb246IHJvdzsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxyXG4gIC5wYWdlLWhlYWRlci1iYWNrLWJ1dHRvbiB7IHdpZHRoOiA4MHB4OyBoZWlnaHQ6IDgwcHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMHB4OyB9XHJcbiAgLnBhZ2UtaGVhZGVyLXRpdGxlIHsgY29sb3I6ICNGRkZGRkY7IGZvbnQtc2l6ZTogMzJweDsgfVxyXG4gIC5oZWFkZXItdGl0bGUtdGltZSB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cclxuICAgIC5wYWdlLWNvbnRlbnQge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZmxleDogMTsgLyogVGFrZSB1cCByZW1haW5pbmcgdmVydGljYWwgc3BhY2UgKi9cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsOyAvKiBBbGxvdyBjb250ZW50IHRvIHNjcm9sbCAqL1xyXG4gICAgfVxyXG4gIC5tZW51LWxpc3QgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB3aWR0aDogOTAlOyB9XHJcbiAgLm1lbnUtaXRlbSB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDkwcHg7IGJvcmRlci1yYWRpdXM6IDIwcHg7IGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XHJcbiAgLm1lbnUtdGV4dCB7IGNvbG9yOiAjRkZGRkZGOyBmb250LXNpemU6IDMycHg7IH1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XHJcbiAgaW1wb3J0IHByb21wdCBmcm9tICdAc3lzdGVtLnByb21wdCc7XHJcbiAgaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJy4uL2NvbW1vbi9qcy91c2VyU2VydmljZS5qcyc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGltZTogJzAwOjAwJ1xyXG4gICAgfSxcclxuICAgIG9uSW5pdCgpIHtcclxuICAgICAgdGhpcy51cGRhdGVUaW1lKCk7XHJcbiAgICAgIHNldEludGVydmFsKHRoaXMudXBkYXRlVGltZSwgMTAwMDApO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZVRpbWUoKSB7XHJcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICBjb25zdCBtaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgIHRoaXMudGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9YDtcclxuICAgIH0sXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgIHJvdXRlci5iYWNrKCk7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc3luY0Nsb3VkVG9Mb2NhbCgpIHtcclxuICAgICAgcHJvbXB0LnNob3dUb2FzdCh7IG1lc3NhZ2U6ICfmraPlnKjku47kupHnq6/lkIzmraUuLi4nIH0pO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBVc2VyU2VydmljZS5mb3JjZVN5bmNGcm9tU2VydmVyKCk7XHJcbiAgICAgIHByb21wdC5zaG93VG9hc3QoeyBtZXNzYWdlOiByZXN1bHQubWVzc2FnZSB9KTtcclxuICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgICAgLy8gUG90ZW50aWFsbHkgbm90aWZ5IHByZXZpb3VzIHBhZ2UgdG8gcmVsb2FkLCBidXQgZm9yIG5vdyB0aGlzIGlzIGZpbmUuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuZ29CYWNrKCkgfSwgMTAwMCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyBzeW5jTG9jYWxUb0Nsb3VkKCkge1xyXG4gICAgICBwcm9tcHQuc2hvd1RvYXN0KHsgbWVzc2FnZTogJ+ato+WcqOS4iuS8oOacrOWcsOi/m+W6pi4uLicgfSk7XHJcbiAgICAgIGNvbnN0IHVwbG9hZFN1Y2Nlc3MgPSBhd2FpdCBVc2VyU2VydmljZS50cmlnZ2VyQ2xpY2tTeW5jKCk7XHJcblxyXG4gICAgICBpZiAodXBsb2FkU3VjY2Vzcykge1xyXG4gICAgICAgIHByb21wdC5zaG93VG9hc3QoeyBtZXNzYWdlOiAn5LiK5Lyg5oiQ5Yqf77yB5q2j5Zyo5Yi35paw5pWw5o2uLi4uJyB9KTtcclxuICAgICAgICBjb25zdCByZWZyZXNoUmVzdWx0ID0gYXdhaXQgVXNlclNlcnZpY2UuZm9yY2VTeW5jRnJvbVNlcnZlcigpO1xyXG4gICAgICAgIGlmIChyZWZyZXNoUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHByb21wdC5zaG93VG9hc3QoeyBtZXNzYWdlOiAn5pWw5o2u5Yi35paw5oiQ5Yqf77yBJyB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7IG1lc3NhZ2U6ICfliLfmlrDlpLHotKXvvIzor7fnqI3lkI7ph43or5UnIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHsgbWVzc2FnZTogJ+S4iuS8oOWksei0peaIluaXoOW+heWQjOatpeaVsOaNricgfSk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuZ29CYWNrKCkgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIl0sIm5hbWVzIjpbIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIl9zeXN0ZW0yIiwiX3N5c3RlbTMiLCJfc3lzdGVtNCIsIl9jb25maWciLCJyZXF1aXJlIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0Iiwib3duS2V5cyIsInIiLCJ0IiwiT2JqZWN0Iiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIm8iLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwicHVzaCIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJ2YWx1ZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiaSIsIl90b1ByaW1pdGl2ZSIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIkFwaVNlcnZpY2UiLCJjb25zdHJ1Y3RvciIsImJhc2VVcmwiLCJDT05GSUciLCJTRVJWRVIiLCJCQVNFX1VSTCIsImJhc2VIZWFkZXJzIiwicmVxdWVzdCIsImFjdGlvbiIsImRhdGEiLCJ1cmwiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVyIiwicmVzcG9uc2VUeXBlIiwiSlNPTiIsInN0cmluZ2lmeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmV0Y2giLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJyZXNwb25zZURhdGEiLCJjb2RlIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJmYWlsIiwiZ2V0UmFua2luZ3MiLCJsaW1pdCIsInJlc3VsdCIsInJhbmtpbmdzIiwibWVzc2FnZSIsInN5bmNDbGlja3MiLCJ1c2VySWQiLCJjbGlja0NvdW50IiwidXNlcl9pZCIsImNsaWNrX2NvdW50Iiwic3luY0Zyb21TZXJ2ZXIiLCJsb2ciLCJ1c2VySW5mbyIsImNoZWNrUGV0TmFtZUF2YWlsYWJpbGl0eSIsInBldE5hbWUiLCJwZXRfbmFtZSIsImlzQXZhaWxhYmxlIiwic2V0UGV0TmFtZSIsIm5ld05hbWUiLCJuZXdfbmFtZSIsImNoZWNrRGV2aWNlUmVnaXN0cmF0aW9uIiwiZGV2aWNlSWQiLCJkZXZpY2VfaWQiLCJpc19yZWdpc3RlcmVkIiwiY2FuX2F1dG9fYWN0aXZhdGUiLCJyZWdpc3RlckFuZEdldFVzZXJJZCIsImdldEFubm91bmNlbWVudHMiLCJhbm5vdW5jZW1lbnRzIiwiY291bnQiLCJ0aW1lc3RhbXAiLCJjaGVja0FwcFVwZGF0ZSIsImN1cnJlbnRWZXJzaW9uQ29kZSIsImN1cnJlbnRfdmVyc2lvbl9jb2RlIiwiaGFzVXBkYXRlIiwiaGFzX3VwZGF0ZSIsInVwZGF0ZUluZm8iLCJ1cGRhdGVfaW5mbyIsImlzRm9yY2VVcGRhdGUiLCJpc19mb3JjZV91cGRhdGUiLCJsYXRlc3RWZXJzaW9uQ29kZSIsImxhdGVzdF92ZXJzaW9uX2NvZGUiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJBUFAiLCJOQU1FIiwiVkVSU0lPTiIsIlZFUlNJT05fQ09ERSIsIk1BWF9DTElDS1NfUEVSX0JBVENIIiwiU1lOQ19JTlRFUlZBTCIsIlJBTktfTElNSVQiLCJDSEVDS19VUERBVEVfSU5URVJWQUwiLCJBTk5PVU5DRU1FTlRfQ0FDSEVfVElNRSIsIlNUT1JBR0VfS0VZUyIsIkRFVklDRV9JRCIsIklTX0xPQ0FMTFlfQUNUSVZBVEVEIiwiVVNFUl9JTkZPIiwiUEVORElOR19DTElDS1MiLCJMQVNUX1NZTkNfVElNRSIsIlRPVEFMX0NMSUNLUyIsIkxBU1RfVVBEQVRFX0NIRUNLX1RJTUUiLCJMQVNUX0FOTk9VTkNFTUVOVF9GRVRDSF9USU1FIiwiQ0FDSEVEX0FOTk9VTkNFTUVOVFMiLCJDQUNIRURfVVBEQVRFX0lORk8iLCJJR05PUkVEX1ZFUlNJT04iLCJGT1JDRV9VUERBVEVfUkVRVUlSRUQiLCJfYXBpU2VydmljZSIsIlVzZXJTZXJ2aWNlIiwiX3N0b3JhZ2VHZXQiLCJrZXkiLCJnZXQiLCJfc3RvcmFnZVNldCIsInNldCIsImVyciIsIl9nZXRSYXdEZXZpY2VJZCIsImdldFNlcmlhbCIsInNlcmlhbCIsIndhcm4iLCJfc2F2ZVVzZXJJbmZvIiwiaWQiLCJ1c2VyX251bWJlciIsInVzZXJJbmZvVG9TYXZlIiwidG90YWxfY2xpY2tzIiwiZW5zdXJlVXNlcklzUmVnaXN0ZXJlZCIsImZvcmNlU3luYyIsImV4aXN0aW5nVXNlckluZm9KU09OIiwicGFyc2UiLCJzeW5jUmVzdWx0Iiwic3luY0Vycm9yIiwicmVnUmVzdWx0IiwibmV3UmVnUmVzdWx0IiwidXBkYXRlUGVuZGluZ0NsaWNrcyIsImFtb3VudCIsImlzTmFOIiwicGVuZGluZ0NsaWNrc0RhdGEiLCJjdXJyZW50Q2xpY2tzIiwicGFyc2VJbnQiLCJuZXdDbGlja3MiLCJ0b1N0cmluZyIsInRyaWdnZXJDbGlja1N5bmMiLCJ1c2VySW5mb0pTT04iLCJjbGlja3NUb1N5bmMiLCJmb3JjZVN5bmNGcm9tU2VydmVyIiwiY2xpY2tTeW5jU3VjY2VzcyIsImVycm9yTXNnIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl91c2VyU2VydmljZSIsInRpbWUiLCJvbkluaXQiLCJ1cGRhdGVUaW1lIiwic2V0SW50ZXJ2YWwiLCJub3ciLCJEYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsInBhZFN0YXJ0IiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJnb0JhY2siLCJyb3V0ZXIiLCJiYWNrIiwic3luY0Nsb3VkVG9Mb2NhbCIsInByb21wdCIsInNob3dUb2FzdCIsInNldFRpbWVvdXQiLCJzeW5jTG9jYWxUb0Nsb3VkIiwidXBsb2FkU3VjY2VzcyIsInJlZnJlc2hSZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUNBLElBQUFBLFVBQUFDLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFDLFdBQUFGLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFFLFdBQUFILHVCQUFBQyxlQUFBO3dCQUNBLElBQUFHLFdBQUFKLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFJLFVBQUFDLG9CQUFBO3dCQUFxQyxTQUFBTix1QkFBQU8sQ0FBQTs0QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7Z0NBQUFFLFNBQUFGOzRCQUFBO3dCQUFBO3dCQUFBLFNBQUFHLFFBQUFILENBQUEsRUFBQUksQ0FBQTs0QkFBQSxJQUFBQyxJQUFBQyxPQUFBQyxJQUFBLENBQUFQOzRCQUFBLElBQUFNLE9BQUFFLHFCQUFBO2dDQUFBLElBQUFDLElBQUFILE9BQUFFLHFCQUFBLENBQUFSO2dDQUFBSSxLQUFBSyxDQUFBQSxJQUFBQSxFQUFBQyxNQUFBLFVBQUFOLENBQUE7b0NBQUEsT0FBQUUsT0FBQUssd0JBQUEsQ0FBQVgsR0FBQUksR0FBQVEsVUFBQTtnQ0FBQSxLQUFBUCxFQUFBUSxJQUFBLENBQUFDLEtBQUEsQ0FBQVQsR0FBQUk7NEJBQUE7NEJBQUEsT0FBQUo7d0JBQUE7d0JBQUEsU0FBQVUsY0FBQWYsQ0FBQTs0QkFBQSxRQUFBSSxJQUFBLEdBQUFBLElBQUFZLFVBQUFDLE1BQUEsRUFBQWIsSUFBQTtnQ0FBQSxJQUFBQyxJQUFBLFFBQUFXLFNBQUEsQ0FBQVosRUFBQSxHQUFBWSxTQUFBLENBQUFaLEVBQUE7Z0NBQUFBLElBQUEsSUFBQUQsUUFBQUcsT0FBQUQsSUFBQSxJQUFBYSxPQUFBLFVBQUFkLENBQUE7b0NBQUFlLGdCQUFBbkIsR0FBQUksR0FBQUMsQ0FBQSxDQUFBRCxFQUFBO2dDQUFBLEtBQUFFLE9BQUFj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