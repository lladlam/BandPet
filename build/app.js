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
                                            console.error(`Request Failed: ${code}`, error);
                                            reject(new Error(`Request failed: ${error.data}`));
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
                                MAX_CLICKS_PER_BATCH: 50,
                                SYNC_INTERVAL: 60000,
                                RANK_LIMIT: 10
                            },
                            STORAGE_KEYS: {
                                DEVICE_ID: 'device_id',
                                IS_LOCALLY_ACTIVATED: 'is_locally_activated',
                                USER_INFO: 'user_info',
                                PENDING_CLICKS: 'pending_clicks',
                                LAST_SYNC_TIME: 'last_sync_time',
                                TOTAL_CLICKS: 'total_clicks'
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
                                            console.error(`Failed to get serial. Code: ${code}, Error: ${err}`);
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
                                if (isNaN(clicksToSync) || clicksToSync <= 0) {
                                    console.log('[UserService] No pending clicks to sync.');
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
                                console.log('[UserService] Starting force sync from server by running ensureUserIsRegistered...');
                                try {
                                    const userInfo = await this.ensureUserIsRegistered(true);
                                    if (userInfo && userInfo.id) {
                                        console.log('[UserService] Successfully ensured user is registered. UserInfo:', userInfo);
                                        await this._storageSet(_config.CONFIG.STORAGE_KEYS.TOTAL_CLICKS, (userInfo.total_clicks || 0).toString());
                                        await this._storageSet(_config.CONFIG.STORAGE_KEYS.PENDING_CLICKS, '0');
                                        console.log('[UserService] Force sync complete. Local storage overwritten.');
                                        return {
                                            success: true,
                                            message: '同步成功！'
                                        };
                                    }
                                    {
                                        const errorMsg = '无法从服务器同步或创建账户';
                                        console.error(`[UserService] ${errorMsg}`);
                                        return {
                                            success: false,
                                            message: errorMsg
                                        };
                                    }
                                } catch (e) {
                                    console.error('[UserService] An error occurred during force sync call:', e);
                                    return {
                                        success: false,
                                        message: '同步失败，发生网络错误'
                                    };
                                }
                            }
                        }
                        var _default = exports["default"] = new UserService();
                    },
                    "./src/manifest.json" (module) {
                        "use strict";
                        module.exports = JSON.parse('{"package":"com.lladlam.bandpet.9pro","name":"BandPet","versionName":"0.3.6 Alpha","versionCode":10,"minPlatformVersion":1000,"icon":"/common/icon.png","deviceTypeList":["watch"],"features":[{"name":"system.router"},{"name":"system.device"},{"name":"system.fetch"},{"name":"system.storage"},{"name":"hapjs.permission.DEVICE_INFO"},{"name":"system.vibrator"},{"name":"system.prompt"}],"config":{"logLevel":"log","designWidth":336},"router":{"entry":"main","pages":{"main":{"component":"index"},"more":{"component":"index"},"leaderboard":{"component":"index"},"exchange":{"component":"index"},"market":{"component":"index"},"customize":{"component":"index"},"settings":{"component":"index"},"about":{"component":"index"},"naming":{"component":"index"},"sync":{"component":"index"}}},"display":{"backgroundColor":"#000000","textColor":"#ffffff"}}');
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
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
                            async onCreate () {
                                console.log('[lifecycle] [app] onCreate - Ensuring user is registered...');
                                try {
                                    const userInfo = await _userService.default.ensureUserIsRegistered();
                                    if (userInfo) console.log('[lifecycle] [app] User registration confirmed successfully.');
                                    else console.error('[lifecycle] [app] Failed to confirm user registration.');
                                } catch (e) {
                                    console.error('A critical error occurred during app startup in app.ux:', e);
                                }
                            },
                            onShow () {
                                console.log('[lifecycle] [app] onShow');
                            },
                            onHide () {
                                console.log('[lifecycle] [app] onHide');
                            },
                            onDestroy () {
                                console.log('[lifecycle] [app] onDestroy');
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
