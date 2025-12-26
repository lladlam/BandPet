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
                            async verifyUserIdAndRestore(deviceId, userId) {
                                try {
                                    return await this.request('verify_user_id_and_restore', {
                                        device_id: deviceId,
                                        user_id: userId
                                    });
                                } catch (error) {
                                    console.error('验证用户ID时发生网络错误:', error);
                                    return {
                                        success: false,
                                        message: error.message
                                    };
                                }
                            }
                        }
                        var _default = exports["default"] = new ApiService();
                    },
                    "./src/common/js/auth-guard.js" (__unused_rspack_module, exports, __webpack_require__) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports["default"] = void 0;
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.router"));
                        var _apiService = _interopRequireDefault(__webpack_require__("./src/common/js/api-service.js"));
                        var _config = __webpack_require__("./src/common/js/config.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        async function checkNetworkAccess() {
                            const _promisifiedStorageGet = (key)=>new Promise((resolve)=>{
                                    _system.default.get({
                                        key: key,
                                        success: (data)=>resolve(data),
                                        fail: ()=>resolve(null)
                                    });
                                });
                            const _promisifiedStorageSet = (key, value)=>new Promise((resolve, reject)=>{
                                    _system.default.set({
                                        key: key,
                                        value: value,
                                        success: resolve,
                                        fail: (err, code)=>reject(new Error(`Storage.set failed for key '${key}' with code ${code}: ${err}`))
                                    });
                                });
                            try {
                                const localActivationValue = await _promisifiedStorageGet(_config.CONFIG.STORAGE_KEYS.IS_LOCALLY_ACTIVATED);
                                if ('true' !== localActivationValue) {
                                    _system2.default.push({
                                        uri: 'activate'
                                    });
                                    return {
                                        canAccess: false,
                                        userInfo: null,
                                        message: '设备未激活，请先激活。'
                                    };
                                }
                                const userInfoJSON = await _promisifiedStorageGet(_config.CONFIG.STORAGE_KEYS.USER_INFO);
                                if (userInfoJSON) {
                                    try {
                                        const userInfo = JSON.parse(userInfoJSON);
                                        if (userInfo && userInfo.id) {
                                            console.log('AuthGuard: User ID found in storage.');
                                            return {
                                                canAccess: true,
                                                userInfo: userInfo,
                                                message: '验证通过'
                                            };
                                        }
                                    } catch (e) {}
                                }
                                console.log('AuthGuard: User Info not found in storage, attempting to recover from server.');
                                const deviceCode = await _promisifiedStorageGet(_config.CONFIG.STORAGE_KEYS.DEVICE_ID);
                                if (!deviceCode) {
                                    _system2.default.push({
                                        uri: 'activate'
                                    });
                                    return {
                                        canAccess: false,
                                        userInfo: null,
                                        message: '无法找到设备码，请重新激活。'
                                    };
                                }
                                const result = await _apiService.default.checkDeviceRegistration(deviceCode);
                                if (result && result.is_registered && result.userInfo) {
                                    console.log('AuthGuard: Successfully recovered User Info from server.');
                                    await _promisifiedStorageSet(_config.CONFIG.STORAGE_KEYS.USER_INFO, JSON.stringify(result.userInfo));
                                    return {
                                        canAccess: true,
                                        userInfo: result.userInfo,
                                        message: '用户ID恢复成功'
                                    };
                                }
                                console.log('AuthGuard: Failed to recover User Info, device may not be registered on server.');
                                _system2.default.push({
                                    uri: 'activate'
                                });
                                return {
                                    canAccess: false,
                                    userInfo: null,
                                    message: '无法恢复用户信息，请重新激活。'
                                };
                            } catch (e) {
                                console.error('AuthGuard: Error during checkNetworkAccess', e);
                                _system2.default.push({
                                    uri: 'activate'
                                });
                                return {
                                    canAccess: false,
                                    userInfo: null,
                                    message: `发生致命错误: ${e.message}`
                                };
                            }
                        }
                        var _default = exports["default"] = {
                            checkNetworkAccess
                        };
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
                                SYNC_INTERVAL: 300000,
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
                    "./src/manifest.json" (module) {
                        "use strict";
                        module.exports = JSON.parse('{"package":"com.lladlam.bandpet.9pro","name":"BandPet","versionName":"0.3.5 Alpha","versionCode":10,"minPlatformVersion":1000,"icon":"/common/icon.png","deviceTypeList":["watch"],"features":[{"name":"system.router"},{"name":"system.device"},{"name":"system.fetch"},{"name":"system.storage"},{"name":"hapjs.permission.DEVICE_INFO"},{"name":"system.vibrator"},{"name":"system.prompt"}],"config":{"logLevel":"log","designWidth":336},"router":{"entry":"main","pages":{"main":{"component":"index"},"more":{"component":"index"},"leaderboard":{"component":"index"},"exchange":{"component":"index"},"market":{"component":"index"},"customize":{"component":"index"},"settings":{"component":"index"},"activate":{"component":"index"},"about":{"component":"index"},"naming":{"component":"index"}}},"display":{"backgroundColor":"#000000","textColor":"#ffffff"}}');
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
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.router"));
                        var _authGuard = _interopRequireDefault(__webpack_require__("./src/common/js/auth-guard.js"));
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
                            async onCreate () {
                                console.log('[lifecycle] [app] onCreate - Running activation check.');
                                try {
                                    const result = await _authGuard.default.checkNetworkAccess();
                                    if (result && result.canAccess) {
                                        console.log('AuthGuard check passed. Navigating to main page.');
                                        _system.default.replace({
                                            uri: 'main'
                                        });
                                    } else console.log('AuthGuard check failed. Redirection to activate page is handled by the guard.');
                                } catch (e) {
                                    console.error('A critical error occurred during app startup in app.ux:', e);
                                    _system.default.replace({
                                        uri: 'activate'
                                    });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9hdXRoLWd1YXJkLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvYXBwLnV4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwaS1zZXJ2aWNlLmpzXHJcbmltcG9ydCBmZXRjaCBmcm9tICdAc3lzdGVtLmZldGNoJztcclxuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XHJcbmltcG9ydCBwcm9tcHQgZnJvbSAnQHN5c3RlbS5wcm9tcHQnO1xyXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XHJcblxyXG5jbGFzcyBBcGlTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIOS4rei9rOacjeWKoeWZqOWcsOWdgCAtIOS7jiBjb25maWcuanMg6K+75Y+WXHJcbiAgICB0aGlzLmJhc2VVcmwgPSBDT05GSUcuU0VSVkVSLkJBU0VfVVJMO1xyXG4gICAgdGhpcy5iYXNlSGVhZGVycyA9IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOmAmueUqOivt+axguaWueazlSAtIOmAmui/h+S4rei9rOacjeWKoeWZqOi9rOWPkVxyXG4gIGFzeW5jIHJlcXVlc3QoYWN0aW9uLCBkYXRhID0ge30pIHtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vYXBpYDtcclxuICAgIFxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyOiB0aGlzLmJhc2VIZWFkZXJzLFxyXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xyXG4gICAgfTtcclxuXHJcbiAgICBvcHRpb25zLmRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IGFjdGlvbiwgLi4uZGF0YSB9KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZXRjaC5mZXRjaCh7XHJcbiAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XHJcblxyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUgPj0gMjAwICYmIHJlc3BvbnNlLmNvZGUgPCAzMDApIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZURhdGEpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBIVFRQIEVycm9yOiAke3Jlc3BvbnNlLmNvZGV9YCwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBIVFRQICR7cmVzcG9uc2UuY29kZX06ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2VEYXRhKX1gKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IChlcnJvciwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgUmVxdWVzdCBGYWlsZWQ6ICR7Y29kZX1gLCBlcnJvcik7XHJcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZDogJHtlcnJvci5kYXRhfWApKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyDojrflj5bmjpLooYzmppxcclxuICBhc3luYyBnZXRSYW5raW5ncyhsaW1pdCA9IDEwKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2dldF9yYW5raW5ncycsIHtcclxuICAgICAgICBsaW1pdDogbGltaXRcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIHJhbmtpbmdzOiByZXN1bHQucmFua2luZ3MgfHwgW11cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign6I635Y+W5o6S6KGM5qac5aSx6LSlOicsIGVycm9yKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIHJhbmtpbmdzOiBbXSxcclxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDkuIrmiqXngrnlh7vmrKHmlbBcclxuICBhc3luYyBzeW5jQ2xpY2tzKHVzZXJJZCwgY2xpY2tDb3VudCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0KCdzeW5jX2NsaWNrcycsIHtcclxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXHJcbiAgICAgICAgY2xpY2tfY291bnQ6IGNsaWNrQ291bnRcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfkuIrmiqXngrnlh7vmrKHmlbDlpLHotKU6JywgZXJyb3IpXHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5qOA5p+l5a6g54mp5ZCN5piv5ZCm5Y+v55SoXHJcbiAgYXN5bmMgY2hlY2tQZXROYW1lQXZhaWxhYmlsaXR5KHBldE5hbWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnY2hlY2tfcGV0X25hbWUnLCB7XHJcbiAgICAgICAgcGV0X25hbWU6IHBldE5hbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIC4uLnJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5qOA5p+l5a6g54mp5ZCN5Y+v55So5oCn5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlLCBpc0F2YWlsYWJsZTogZmFsc2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOS/ruaUueWuoOeJqeWQjVxyXG4gIGFzeW5jIHNldFBldE5hbWUodXNlcklkLCBuZXdOYW1lKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ3NldF9wZXRfbmFtZScsIHtcclxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXHJcbiAgICAgICAgbmV3X25hbWU6IG5ld05hbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfkv67mlLnlrqDnianlkI3lpLHotKU6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOmihOa/gOa0u+ajgOafpVxyXG4gIGFzeW5jIGNoZWNrRGV2aWNlUmVnaXN0cmF0aW9uKGRldmljZUlkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2NoZWNrX3JlZ2lzdHJhdGlvbicsIHtcclxuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygn6aKE5r+A5rS75qOA5p+l5oiQ5YqfOicsIHJlc3VsdCk7XHJcbiAgICAgIC8vIOebtOaOpei/lOWbnuacjeWKoeWZqOeahOWOn+Wni+WTjeW6lO+8jFVJ5bGC5pyf5pyb55qE5piv5omB5bmz57uT5p6EXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfpooTmv4DmtLvmo4Dmn6Xml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xyXG4gICAgICAvLyDov5Tlm57kuIDkuKrlhbzlrrnnmoTplJnor6/lr7nosaHvvIzpgb/lhY1VSeWxguW0qea6g1xyXG4gICAgICByZXR1cm4geyBpc19yZWdpc3RlcmVkOiBmYWxzZSwgY2FuX2F1dG9fYWN0aXZhdGU6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5rOo5YaM6K6+5aSH5bm26I635Y+W55So5oi3SURcclxuICBhc3luYyByZWdpc3RlckFuZEdldFVzZXJJZChkZXZpY2VJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gUGFzcyB0aGUgc2VydmVyIHJlc3BvbnNlIGRpcmVjdGx5IHRvIHRoZSBVSSBsYXllclxyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0KCdyZWdpc3Rlcl9kZXZpY2VfYW5kX2dldF9pZCcsIHtcclxuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5rOo5YaM5oiW6I635Y+W55So5oi3SUTml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xyXG4gICAgICAvLyBSZXR1cm4gYSBjb21wYXRpYmxlIGVycm9yIG9iamVjdFxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g6aqM6K+B55So5oi3SUTlubbmgaLlpI3mlbDmja5cclxuICBhc3luYyB2ZXJpZnlVc2VySWRBbmRSZXN0b3JlKGRldmljZUlkLCB1c2VySWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIFBhc3MgdGhlIHNlcnZlciByZXNwb25zZSBkaXJlY3RseSB0byB0aGUgVUkgbGF5ZXJcclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucmVxdWVzdCgndmVyaWZ5X3VzZXJfaWRfYW5kX3Jlc3RvcmUnLCB7XHJcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZCxcclxuICAgICAgICB1c2VyX2lkOiB1c2VySWRcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfpqozor4HnlKjmiLdJROaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XHJcbiAgICAgIC8vIFJldHVybiBhIGNvbXBhdGlibGUgZXJyb3Igb2JqZWN0XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBpU2VydmljZSgpXHJcbiIsIi8vIHNyYy9jb21tb24vanMvYXV0aC1ndWFyZC5qc1xyXG5cclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQHN5c3RlbS5zdG9yYWdlJztcclxuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XHJcbmltcG9ydCBBcGlTZXJ2aWNlIGZyb20gJy4vYXBpLXNlcnZpY2UuanMnO1xyXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIHRoZSB1c2VyIGhhcyB0aGUgbmVjZXNzYXJ5IGFjdGl2YXRpb24gYW5kIGNyZWRlbnRpYWxzIHRvIGFjY2VzcyBhIG5ldHdvcmsgZmVhdHVyZS5cclxuICogVGhpcyBmdW5jdGlvbiBpbXBsZW1lbnRzIHRoZSBmb2xsb3dpbmcgbG9naWM6XHJcbiAqIDEuIENoZWNrcyBmb3IgYSBsb2NhbCBhY3RpdmF0aW9uIGZsYWcuIElmIG5vdCBwcmVzZW50LCByZWRpcmVjdHMgdG8gdGhlIGFjdGl2YXRpb24gcGFnZS5cclxuICogMi4gSWYgbG9jYWxseSBhY3RpdmF0ZWQsIGNoZWNrcyBmb3Igc3RvcmVkIHVzZXIgaW5mbyB3aXRoIGEgc2VydmVyLXNpZGUgSUQuXHJcbiAqIDMuIElmIHVzZXIgaW5mbyBpcyBtaXNzaW5nLCBpdCBhdHRlbXB0cyB0byBmZXRjaCBpdCBmcm9tIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIHN0b3JlZCBkZXZpY2UgY29kZS5cclxuICogNC4gUmV0dXJucyB0aGUgYWNjZXNzIHN0YXR1cyBhbmQgdXNlciBpbmZvLlxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fSBBbiBvYmplY3Qgd2l0aDogeyBjYW5BY2Nlc3M6IGJvb2xlYW4sIHVzZXJJbmZvOiBPYmplY3R8bnVsbCwgbWVzc2FnZTogc3RyaW5nIH1cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrTmV0d29ya0FjY2VzcygpIHtcclxuICAvLyBIZWxwZXIgdG8gcHJvbWlzaWZ5IHN0b3JhZ2UuZ2V0IC0gaXQgcmVzb2x2ZXMgd2l0aCB0aGUgUkFXIFZBTFVFLlxyXG4gIGNvbnN0IF9wcm9taXNpZmllZFN0b3JhZ2VHZXQgPSAoa2V5KSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgc3RvcmFnZS5nZXQoe1xyXG4gICAgICAgIGtleToga2V5LFxyXG4gICAgICAgIC8vIFRoZSAnZGF0YScgcGFyYW1ldGVyIElTIHRoZSB2YWx1ZS4gQ2FuIGJlIHVuZGVmaW5lZCBpZiBub3QgZm91bmQuXHJcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHJlc29sdmUoZGF0YSksXHJcbiAgICAgICAgZmFpbDogKCkgPT4gcmVzb2x2ZShudWxsKSAvLyBSZXNvbHZlIHdpdGggbnVsbCBvbiBhbnkgZmFpbHVyZS5cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBIZWxwZXIgdG8gcHJvbWlzaWZ5IHN0b3JhZ2Uuc2V0XHJcbiAgY29uc3QgX3Byb21pc2lmaWVkU3RvcmFnZVNldCA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzdG9yYWdlLnNldCh7XHJcbiAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXHJcbiAgICAgICAgZmFpbDogKGVyciwgY29kZSkgPT4gcmVqZWN0KG5ldyBFcnJvcihgU3RvcmFnZS5zZXQgZmFpbGVkIGZvciBrZXkgJyR7a2V5fScgd2l0aCBjb2RlICR7Y29kZX06ICR7ZXJyfWApKVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyAxLiBDaGVjayBmb3IgbG9jYWwgYWN0aXZhdGlvbiBmbGFnXHJcbiAgICBjb25zdCBsb2NhbEFjdGl2YXRpb25WYWx1ZSA9IGF3YWl0IF9wcm9taXNpZmllZFN0b3JhZ2VHZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5JU19MT0NBTExZX0FDVElWQVRFRCk7XHJcbiAgICBpZiAobG9jYWxBY3RpdmF0aW9uVmFsdWUgIT09ICd0cnVlJykge1xyXG4gICAgICByb3V0ZXIucHVzaCh7IHVyaTogJ2FjdGl2YXRlJyB9KTtcclxuICAgICAgcmV0dXJuIHsgY2FuQWNjZXNzOiBmYWxzZSwgdXNlckluZm86IG51bGwsIG1lc3NhZ2U6ICforr7lpIfmnKrmv4DmtLvvvIzor7flhYjmv4DmtLvjgIInIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMi4gQ2hlY2sgZm9yIGV4aXN0aW5nIFVzZXIgSW5mbyBpbiBzdG9yYWdlXHJcbiAgICBjb25zdCB1c2VySW5mb0pTT04gPSBhd2FpdCBfcHJvbWlzaWZpZWRTdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPKTtcclxuICAgIGlmICh1c2VySW5mb0pTT04pIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VySW5mbyA9IEpTT04ucGFyc2UodXNlckluZm9KU09OKTtcclxuICAgICAgICBpZiAodXNlckluZm8gJiYgdXNlckluZm8uaWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoR3VhcmQ6IFVzZXIgSUQgZm91bmQgaW4gc3RvcmFnZS4nKTtcclxuICAgICAgICAgIHJldHVybiB7IGNhbkFjY2VzczogdHJ1ZSwgdXNlckluZm86IHVzZXJJbmZvLCBtZXNzYWdlOiAn6aqM6K+B6YCa6L+HJyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaChlKSB7IC8qIE1hbGZvcm1lZCBKU09OLCBwcm9jZWVkIHRvIGZldGNoIGZyb20gc2VydmVyICovIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAzLiBVc2VyIEluZm8gaXMgbWlzc2luZyBvciBtYWxmb3JtZWQsIHRyeSB0byBmZXRjaCBpdCBmcm9tIHNlcnZlclxyXG4gICAgY29uc29sZS5sb2coJ0F1dGhHdWFyZDogVXNlciBJbmZvIG5vdCBmb3VuZCBpbiBzdG9yYWdlLCBhdHRlbXB0aW5nIHRvIHJlY292ZXIgZnJvbSBzZXJ2ZXIuJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGRldmljZUNvZGUgPSBhd2FpdCBfcHJvbWlzaWZpZWRTdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuREVWSUNFX0lEKTtcclxuICAgIGlmICghZGV2aWNlQ29kZSkge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKHsgdXJpOiAnYWN0aXZhdGUnIH0pO1xyXG4gICAgICAgIHJldHVybiB7IGNhbkFjY2VzczogZmFsc2UsIHVzZXJJbmZvOiBudWxsLCBtZXNzYWdlOiAn5peg5rOV5om+5Yiw6K6+5aSH56CB77yM6K+36YeN5paw5r+A5rS744CCJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVzZSBjaGVja0RldmljZVJlZ2lzdHJhdGlvbiB0byBnZXQgZXhpc3RpbmcgdXNlciBkYXRhXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLmNoZWNrRGV2aWNlUmVnaXN0cmF0aW9uKGRldmljZUNvZGUpO1xyXG5cclxuICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmlzX3JlZ2lzdGVyZWQgJiYgcmVzdWx0LnVzZXJJbmZvKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdBdXRoR3VhcmQ6IFN1Y2Nlc3NmdWxseSByZWNvdmVyZWQgVXNlciBJbmZvIGZyb20gc2VydmVyLicpO1xyXG4gICAgICBhd2FpdCBfcHJvbWlzaWZpZWRTdG9yYWdlU2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPLCBKU09OLnN0cmluZ2lmeShyZXN1bHQudXNlckluZm8pKTtcclxuICAgICAgcmV0dXJuIHsgY2FuQWNjZXNzOiB0cnVlLCB1c2VySW5mbzogcmVzdWx0LnVzZXJJbmZvLCBtZXNzYWdlOiAn55So5oi3SUTmgaLlpI3miJDlip8nIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnQXV0aEd1YXJkOiBGYWlsZWQgdG8gcmVjb3ZlciBVc2VyIEluZm8sIGRldmljZSBtYXkgbm90IGJlIHJlZ2lzdGVyZWQgb24gc2VydmVyLicpO1xyXG4gICAgICByb3V0ZXIucHVzaCh7IHVyaTogJ2FjdGl2YXRlJyB9KTsgLy8gRm9yY2UgcmUtYWN0aXZhdGlvblxyXG4gICAgICByZXR1cm4geyBjYW5BY2Nlc3M6IGZhbHNlLCB1c2VySW5mbzogbnVsbCwgbWVzc2FnZTogJ+aXoOazleaBouWkjeeUqOaIt+S/oeaBr++8jOivt+mHjeaWsOa/gOa0u+OAgicgfTtcclxuICAgIH1cclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcignQXV0aEd1YXJkOiBFcnJvciBkdXJpbmcgY2hlY2tOZXR3b3JrQWNjZXNzJywgZSk7XHJcbiAgICByb3V0ZXIucHVzaCh7IHVyaTogJ2FjdGl2YXRlJyB9KTsgLy8gT24gYW55IGNhdGFzdHJvcGhpYyBlcnJvciwgZGVmYXVsdCB0byByZS1hY3RpdmF0aW9uXHJcbiAgICByZXR1cm4geyBjYW5BY2Nlc3M6IGZhbHNlLCB1c2VySW5mbzogbnVsbCwgbWVzc2FnZTogYOWPkeeUn+iHtOWRvemUmeivrzogJHtlLm1lc3NhZ2V9YCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNoZWNrTmV0d29ya0FjY2Vzc1xyXG59O1xyXG4iLCIvLyBjb25maWcuanNcclxuZXhwb3J0IGNvbnN0IENPTkZJRyA9IHtcclxuICAvLyDkuK3ovazmnI3liqHlmajphY3nva5cclxuICBTRVJWRVI6IHtcclxuICAgIEJBU0VfVVJMOiAnaHR0cDovLzEwMy4yMDUuMjUzLjg3OjIyMjA3J1xyXG4gIH0sXHJcbiAgXHJcbiAgLy8g5rOo5oSP77yaVVJMIOWJjee8gOWcqCBhcGktc2VydmljZS5qcyDkuK3noaznvJbnoIHkuoZcclxuICAvLyDov5nph4zkuI3lho3pnIDopoHphY3nva5cclxuICBcclxuICAvLyDlupTnlKjphY3nva5cclxuICBBUFA6IHtcclxuICAgIE5BTUU6ICdCYW5kUGV0JyxcclxuICAgIFZFUlNJT046ICcwLjMuNSBBbHBoYScsXHJcbiAgICBNQVhfQ0xJQ0tTX1BFUl9CQVRDSDogNTAsXHJcbiAgICBTWU5DX0lOVEVSVkFMOiAzMDAwMDAsXHJcbiAgICBSQU5LX0xJTUlUOiAxMFxyXG4gIH0sXHJcbiAgXHJcbiAgLy8g5a2Y5YKo6ZSu5ZCNXHJcbiAgU1RPUkFHRV9LRVlTOiB7XHJcbiAgICBERVZJQ0VfSUQ6ICdkZXZpY2VfaWQnLFxyXG4gICAgSVNfTE9DQUxMWV9BQ1RJVkFURUQ6ICdpc19sb2NhbGx5X2FjdGl2YXRlZCcsXHJcbiAgICBVU0VSX0lORk86ICd1c2VyX2luZm8nLFxyXG4gICAgUEVORElOR19DTElDS1M6ICdwZW5kaW5nX2NsaWNrcycsXHJcbiAgICBMQVNUX1NZTkNfVElNRTogJ2xhc3Rfc3luY190aW1lJyxcclxuICAgIFRPVEFMX0NMSUNLUzogJ3RvdGFsX2NsaWNrcydcclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKCgpID0+IHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNi44XCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjYuOFwiOyIsIjxzY3JpcHQ+XG4gIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xuICBpbXBvcnQgYXV0aEd1YXJkIGZyb20gJy4vY29tbW9uL2pzL2F1dGgtZ3VhcmQuanMnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBhc3luYyBvbkNyZWF0ZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbbGlmZWN5Y2xlXSBbYXBwXSBvbkNyZWF0ZSAtIFJ1bm5pbmcgYWN0aXZhdGlvbiBjaGVjay4nKTtcbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXV0aEd1YXJkLmNoZWNrTmV0d29ya0FjY2VzcygpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuY2FuQWNjZXNzKSB7XG4gICAgICAgICAgLy8gSWYgYXV0aCBndWFyZCBwYXNzZXMsIGl0IG1lYW5zIHdlIGFyZSBhY3RpdmF0ZWQgYW5kIGhhdmUgdXNlciBpbmZvLlxuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gbWFudWFsbHkgcm91dGUgdG8gdGhlIG1haW4gcGFnZS5cbiAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aEd1YXJkIGNoZWNrIHBhc3NlZC4gTmF2aWdhdGluZyB0byBtYWluIHBhZ2UuJyk7XG4gICAgICAgICAgcm91dGVyLnJlcGxhY2Uoe1xuICAgICAgICAgICAgdXJpOiAnbWFpbidcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBJZiBhdXRoIGd1YXJkIGZhaWxzIChyZXR1cm5zIGNhbkFjY2VzczogZmFsc2UpLCBpdCBoYXMgYWxyZWFkeVxuICAgICAgICAgIC8vIGhhbmRsZWQgdGhlIHJlZGlyZWN0aW9uIHRvIHRoZSAnYWN0aXZhdGUnIHBhZ2UgaW50ZXJuYWxseS5cbiAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aEd1YXJkIGNoZWNrIGZhaWxlZC4gUmVkaXJlY3Rpb24gdG8gYWN0aXZhdGUgcGFnZSBpcyBoYW5kbGVkIGJ5IHRoZSBndWFyZC4nKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdBIGNyaXRpY2FsIGVycm9yIG9jY3VycmVkIGR1cmluZyBhcHAgc3RhcnR1cCBpbiBhcHAudXg6JywgZSk7XG4gICAgICAgIC8vIEFzIGEgbGFzdCByZXNvcnQsIG5hdmlnYXRlIHRvIHRoZSBhY3RpdmF0aW9uIHBhZ2UuXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKHsgdXJpOiAnYWN0aXZhdGUnIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBvblNob3coKSB7XG4gICAgICBjb25zb2xlLmxvZygnW2xpZmVjeWNsZV0gW2FwcF0gb25TaG93Jyk7XG4gICAgfSxcblxuICAgIG9uSGlkZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbbGlmZWN5Y2xlXSBbYXBwXSBvbkhpZGUnKTtcbiAgICB9LFxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgY29uc29sZS5sb2coJ1tsaWZlY3ljbGVdIFthcHBdIG9uRGVzdHJveScpO1xuICAgIH0sXG5cbiAgICBvbkVycm9yKGVycikge1xuICAgICAgY29uc29sZS5sb2coYFtsaWZlY3ljbGVdIFthcHBdIG9uRXJyb3IgZXJybXNnOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgY29uc29sZS5sb2coYFtsaWZlY3ljbGVdIFthcHBdIG9uRXJyb3IgZXJyb3Igc3RhY2s6ICR7ZXJyLnN0YWNrfWApO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX3N5c3RlbTIiLCJfc3lzdGVtMyIsIl9zeXN0ZW00IiwiX2NvbmZpZyIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJvd25LZXlzIiwiciIsInQiLCJPYmplY3QiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsInZhbHVlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiQXBpU2VydmljZSIsImNvbnN0cnVjdG9yIiwiYmFzZVVybCIsIkNPTkZJRyIsIlNFUlZFUiIsIkJBU0VfVVJMIiwiYmFzZUhlYWRlcnMiLCJyZXF1ZXN0IiwiYWN0aW9uIiwiZGF0YSIsInVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXIiLCJyZXNwb25zZVR5cGUiLCJKU09OIiwic3RyaW5naWZ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInJlc3BvbnNlRGF0YSIsImNvZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImZhaWwiLCJnZXRSYW5raW5ncyIsImxpbWl0IiwicmVzdWx0IiwicmFua2luZ3MiLCJtZXNzYWdlIiwic3luY0NsaWNrcyIsInVzZXJJZCIsImNsaWNrQ291bnQiLCJ1c2VyX2lkIiwiY2xpY2tfY291bnQiLCJjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkiLCJwZXROYW1lIiwicGV0X25hbWUiLCJpc0F2YWlsYWJsZSIsInNldFBldE5hbWUiLCJuZXdOYW1lIiwibmV3X25hbWUiLCJjaGVja0RldmljZVJlZ2lzdHJhdGlvbiIsImRldmljZUlkIiwiZGV2aWNlX2lkIiwibG9nIiwiaXNfcmVnaXN0ZXJlZCIsImNhbl9hdXRvX2FjdGl2YXRlIiwicmVnaXN0ZXJBbmRHZXRVc2VySWQiLCJ2ZXJpZnlVc2VySWRBbmRSZXN0b3JlIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiX2FwaVNlcnZpY2UiLCJjaGVja05ldHdvcmtBY2Nlc3MiLCJfcHJvbWlzaWZpZWRTdG9yYWdlR2V0Iiwia2V5IiwiZ2V0IiwiX3Byb21pc2lmaWVkU3RvcmFnZVNldCIsInNldCIsImVyciIsImxvY2FsQWN0aXZhdGlvblZhbHVlIiwiU1RPUkFHRV9LRVlTIiwiSVNfTE9DQUxMWV9BQ1RJVkFURUQiLCJ1cmkiLCJjYW5BY2Nlc3MiLCJ1c2VySW5mbyIsInVzZXJJbmZvSlNPTiIsIlVTRVJfSU5GTyIsInBhcnNlIiwiaWQiLCJkZXZpY2VDb2RlIiwiREVWSUNFX0lEIiwiQVBQIiwiTkFNRSIsIlZFUlNJT04iLCJNQVhfQ0xJQ0tTX1BFUl9CQVRDSCIsIlNZTkNfSU5URVJWQUwiLCJSQU5LX0xJTUlUIiwiUEVORElOR19DTElDS1MiLCJMQVNUX1NZTkNfVElNRSIsIlRPVEFMX0NMSUNLUyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJ3aW5kb3ciLCJfYXV0aEd1YXJkIiwib25DcmVhdGUiLCJhdXRoR3VhcmQiLCJyb3V0ZXIiLCJyZXBsYWNlIiwib25TaG93Iiwib25IaWRlIiwib25EZXN0cm95Iiwib25FcnJvciIsInN0YWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFDQSxJQUFBQSxVQUFBQyx1QkFBQUMsZUFBQTt3QkFDQSxJQUFBQyxXQUFBRix1QkFBQUMsZUFBQTt3QkFDQSxJQUFBRSxXQUFBSCx1QkFBQUMsZUFBQTt3QkFDQSxJQUFBRyxXQUFBSix1QkFBQUMsZUFBQTt3QkFDQSxJQUFBSSxVQUFBQyxvQkFBQTt3QkFBcUMsU0FBQU4sdUJBQUFPLENBQUE7NEJBQUEsT0FBQUEsS0FBQUEsRUFBQUMsVUFBQSxHQUFBRCxJQUFBO2dDQUFBRSxTQUFBRjs0QkFBQTt3QkFBQTt3QkFBQSxTQUFBRyxRQUFBSCxDQUFBLEVBQUFJLENBQUE7NEJBQUEsSUFBQUMsSUFBQUMsT0FBQUMsSUFBQSxDQUFBUDs0QkFBQSxJQUFBTSxPQUFBRSxxQkFBQTtnQ0FBQSxJQUFBQyxJQUFBSCxPQUFBRSxxQkFBQSxDQUFBUjtnQ0FBQUksS0FBQUssQ0FBQUEsSUFBQUEsRUFBQUMsTUFBQSxVQUFBTixDQUFBO29DQUFBLE9BQUFFLE9BQUFLLHdCQUFBLENBQUFYLEdBQUFJLEdBQUFR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