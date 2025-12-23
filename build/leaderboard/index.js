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
                                this.baseHeaders = {
                                    'Content-Type': 'application/json',
                                    Authorization: 'Bearer ' + _config.CONFIG.SUPABASE.KEY,
                                    apikey: _config.CONFIG.SUPABASE.KEY
                                };
                            }
                            async request(endpoint, method = 'POST', data = null) {
                                const url = `${_config.CONFIG.SUPABASE.URL}/functions/v1/${endpoint}`;
                                const options = {
                                    url,
                                    method,
                                    header: this.baseHeaders,
                                    responseType: 'json'
                                };
                                if (data) options.data = JSON.stringify(data);
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
                                    const result = await this.request('bright-responder', 'POST', {
                                        action: 'get_rankings',
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
                                    await this.request('bright-responder', 'POST', {
                                        action: 'sync_clicks',
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
                                    const result = await this.request('bright-responder', 'POST', {
                                        action: 'check_pet_name',
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
                                    const result = await this.request('bright-responder', 'POST', {
                                        action: 'set_pet_name',
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
                                    const result = await this.request('bright-responder', 'POST', {
                                        action: 'check_registration',
                                        device_id: deviceId
                                    });
                                    console.log('预激活检查成功:', result);
                                    return {
                                        success: true,
                                        data: result
                                    };
                                } catch (error) {
                                    console.error('预激活检查时发生网络错误:', error);
                                    return {
                                        success: false,
                                        error: error.message
                                    };
                                }
                            }
                            async registerAndGetUserId(deviceId) {
                                try {
                                    const result = await this.request('bright-responder', 'POST', {
                                        action: 'register_device_and_get_id',
                                        device_id: deviceId
                                    });
                                    if (result && result.success) {
                                        console.log('注册设备并获取用户ID成功:', result.userInfo);
                                        return {
                                            success: true,
                                            userInfo: result.userInfo
                                        };
                                    }
                                    console.error('获取用户ID失败:', result ? result.error : '未知错误');
                                    return {
                                        success: false,
                                        error: result ? result.error : '服务器未返回成功状态'
                                    };
                                } catch (error) {
                                    console.error('注册或获取用户ID时发生网络错误:', error);
                                    return {
                                        success: false,
                                        error: error.message
                                    };
                                }
                            }
                            async verifyUserIdAndRestore(deviceId, userId) {
                                try {
                                    const result = await this.request('bright-responder', 'POST', {
                                        action: 'verify_user_id_and_restore',
                                        device_id: deviceId,
                                        user_id: userId
                                    });
                                    if (result && result.success) return {
                                        success: true,
                                        userInfo: result.userInfo
                                    };
                                    return {
                                        success: false,
                                        error: result ? result.error : '验证失败'
                                    };
                                } catch (error) {
                                    console.error('验证用户ID时发生网络错误:', error);
                                    return {
                                        success: false,
                                        error: error.message
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
                            try {
                                const localActivation = await _system.default.get({
                                    key: _config.CONFIG.STORAGE_KEYS.IS_LOCALLY_ACTIVATED
                                });
                                if ('true' !== localActivation.value) {
                                    _system2.default.push({
                                        uri: 'activate'
                                    });
                                    return {
                                        canAccess: false,
                                        userInfo: null,
                                        message: '设备未激活，请先激活。'
                                    };
                                }
                                const userInfoResult = await _system.default.get({
                                    key: _config.CONFIG.STORAGE_KEYS.USER_INFO
                                });
                                if (userInfoResult.value) {
                                    const userInfo = JSON.parse(userInfoResult.value);
                                    if (userInfo && userInfo.id) {
                                        console.log('AuthGuard: User ID found in storage.');
                                        return {
                                            canAccess: true,
                                            userInfo: userInfo,
                                            message: '验证通过'
                                        };
                                    }
                                }
                                console.log('AuthGuard: User ID not found, attempting to fetch from server.');
                                const deviceCodeResult = await _system.default.get({
                                    key: _config.CONFIG.STORAGE_KEYS.DEVICE_ID
                                });
                                if (!deviceCodeResult.value) {
                                    _system2.default.push({
                                        uri: 'activate'
                                    });
                                    return {
                                        canAccess: false,
                                        userInfo: null,
                                        message: '无法找到设备码，请重新激活。'
                                    };
                                }
                                const deviceCode = deviceCodeResult.value;
                                const apiResult = await _apiService.default.registerAndGetUserId(deviceCode);
                                if (apiResult.success && apiResult.userInfo && (apiResult.userInfo.id || apiResult.userInfo.user_number)) {
                                    console.log('AuthGuard: Successfully fetched new User ID.');
                                    const userInfoToSave = {
                                        id: apiResult.userInfo.id || apiResult.userInfo.user_number,
                                        user_number: apiResult.userInfo.user_number,
                                        pet_name: apiResult.userInfo.pet_name,
                                        total_clicks: apiResult.userInfo.total_clicks || 0
                                    };
                                    await _system.default.set({
                                        key: _config.CONFIG.STORAGE_KEYS.USER_INFO,
                                        value: JSON.stringify(userInfoToSave)
                                    });
                                    return {
                                        canAccess: true,
                                        userInfo: userInfoToSave,
                                        message: '用户ID获取成功'
                                    };
                                }
                                console.log('AuthGuard: Failed to fetch User ID.');
                                return {
                                    canAccess: false,
                                    userInfo: null,
                                    message: '获取用户ID失败，请检查网络后重试。'
                                };
                            } catch (e) {
                                console.error('AuthGuard: Error during checkNetworkAccess', e);
                                return {
                                    canAccess: false,
                                    userInfo: null,
                                    message: `发生错误: ${e.message}`
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
                            SUPABASE: {
                                URL: 'https://jqubyqnhgyxazpnpjyqf.supabase.co',
                                KEY: 'sb_publishable__UMYGv1VDo-ZrOvuUgZLFg_WKqyc7M-'
                            },
                            APP: {
                                NAME: 'BandPet',
                                VERSION: '1.0.0',
                                MAX_CLICKS_PER_BATCH: 50,
                                SYNC_INTERVAL: 300000,
                                RANK_LIMIT: 10
                            },
                            STORAGE_KEYS: {
                                IS_LOCALLY_ACTIVATED: 'is_locally_activated',
                                DEVICE_ID: 'device_id',
                                USER_INFO: 'user_info',
                                PENDING_CLICKS: 'pending_clicks',
                                LAST_SYNC_TIME: 'last_sync_time',
                                TOTAL_CLICKS: 'total_clicks'
                            }
                        };
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
                                justifyContent: "flex-start"
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
                                borderRadius: "40px",
                                backgroundColor: "#1e90ff",
                                justifyContent: "center",
                                alignItems: "center",
                                marginRight: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "page-header-back-arrow"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "50px"
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
                                height: "100%",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "leaderboard-list"
                                ]
                            ],
                            {
                                width: "90%",
                                flexGrow: 1
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "list-item"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "80px",
                                backgroundColor: "#1a1a1a",
                                borderRadius: "15px",
                                marginBottom: "10px",
                                paddingTop: "0",
                                paddingRight: "20px",
                                paddingBottom: "0",
                                paddingLeft: "20px",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "rank-container"
                                ]
                            ],
                            {
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "rank-number"
                                ]
                            ],
                            {
                                color: "#aaaaaa",
                                fontSize: "30px",
                                marginRight: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "rank-name"
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
                                    "rank-score"
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
                                    "status-container"
                                ]
                            ],
                            {
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                paddingTop: "20px",
                                paddingRight: "20px",
                                paddingBottom: "20px",
                                paddingLeft: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "status-text"
                                ]
                            ],
                            {
                                color: "#aaaaaa",
                                fontSize: "28px",
                                textAlign: "center"
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
                        var _apiService = _interopRequireDefault(__webpack_require__("./src/common/js/api-service.js"));
                        var _authGuard = _interopRequireDefault(__webpack_require__("./src/common/js/auth-guard.js"));
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
                            data: {
                                time: '00:00',
                                rankings: [],
                                statusMessage: '正在加载...'
                            },
                            onInit () {
                                this.updateTime();
                                setInterval(this.updateTime, 5000);
                                this.fetchRankings();
                            },
                            updateTime () {
                                const now = new Date();
                                const hours = now.getHours().toString().padStart(2, '0');
                                const minutes = now.getMinutes().toString().padStart(2, '0');
                                this.time = `${hours}:${minutes}`;
                            },
                            async fetchRankings () {
                                const guardResult = await _authGuard.default.checkNetworkAccess();
                                if (!guardResult.canAccess) {
                                    this.statusMessage = guardResult.message;
                                    return;
                                }
                                const result = await _apiService.default.getRankings();
                                if (result.success && result.rankings.length > 0) {
                                    this.rankings = result.rankings;
                                    this.statusMessage = '';
                                } else if (result.success && 0 === result.rankings.length) this.statusMessage = '排行榜上还没有人，快去点击吧！';
                                else {
                                    console.error("Failed to fetch rankings:", result.error);
                                    this.statusMessage = '无法加载排行榜，请稍后重试。';
                                }
                            },
                            goBack () {
                                _system.default.back();
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
                                                value: "排行榜"
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
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return _vm_.rankings.length > 0;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("list", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "leaderboard-list"
                                                ]
                                            }
                                        }, [
                                            aiot.__cf__({
                                                __vm__: _vm_,
                                                __opts__: {
                                                    exp: function() {
                                                        return _vm_.rankings;
                                                    },
                                                    key: "$idx",
                                                    value: "$item"
                                                }
                                            }, function($idx, $item) {
                                                return [
                                                    aiot.__ce__("list-item", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "list-item"
                                                            ]
                                                        }
                                                    }, [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                classList: [
                                                                    "rank-container"
                                                                ]
                                                            }
                                                        }, [
                                                            aiot.__ce__("text", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "rank-number"
                                                                    ],
                                                                    value: function() {
                                                                        return $idx + 1;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("text", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "rank-name"
                                                                    ],
                                                                    value: function() {
                                                                        return $item.name;
                                                                    }
                                                                }
                                                            }, [])
                                                        ]),
                                                        aiot.__ce__("text", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                classList: [
                                                                    "rank-score"
                                                                ],
                                                                value: function() {
                                                                    return $item.score;
                                                                }
                                                            }
                                                        }, [])
                                                    ])
                                                ];
                                            })
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return 0 === _vm_.rankings.length && _vm_.statusMessage;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "status-container"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "status-text"
                                                    ],
                                                    value: function() {
                                                        return _vm_.statusMessage;
                                                    }
                                                }
                                            }, [])
                                        ])
                                    ];
                                })
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZGVyYm9hcmRcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9hdXRoLWd1YXJkLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9sZWFkZXJib2FyZC9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcGktc2VydmljZS5qc1xuaW1wb3J0IGZldGNoIGZyb20gJ0BzeXN0ZW0uZmV0Y2gnO1xuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xuaW1wb3J0IHByb21wdCBmcm9tICdAc3lzdGVtLnByb21wdCc7XG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XG5cbmNsYXNzIEFwaVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJhc2VIZWFkZXJzID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgQ09ORklHLlNVUEFCQVNFLktFWSxcbiAgICAgICdhcGlrZXknOiBDT05GSUcuU1VQQUJBU0UuS0VZXG4gICAgfVxuICB9XG5cbiAgLy8g6YCa55So6K+35rGC5pa55rOVXG4gIGFzeW5jIHJlcXVlc3QoZW5kcG9pbnQsIG1ldGhvZCA9ICdQT1NUJywgZGF0YSA9IG51bGwpIHtcbiAgICBjb25zdCB1cmwgPSBgJHtDT05GSUcuU1VQQUJBU0UuVVJMfS9mdW5jdGlvbnMvdjEvJHtlbmRwb2ludH1gXG4gICAgXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZCxcbiAgICAgIGhlYWRlcjogdGhpcy5iYXNlSGVhZGVycyxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXG4gICAgfVxuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIG9wdGlvbnMuZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZldGNoLmZldGNoKHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcblxuICAgICAgICAgIFxuXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUgPj0gMjAwICYmIHJlc3BvbnNlLmNvZGUgPCAzMDApIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2VEYXRhKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBIVFRQIEVycm9yOiAke3Jlc3BvbnNlLmNvZGV9YCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgSFRUUCAke3Jlc3BvbnNlLmNvZGV9OiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlRGF0YSl9YCkpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAoZXJyb3IsIGNvZGUpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBSZXF1ZXN0IEZhaWxlZDogJHtjb2RlfWAsIGVycm9yKTtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZDogJHtlcnJvci5kYXRhfWApKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvLyDojrflj5bmjpLooYzmppxcbiAgYXN5bmMgZ2V0UmFua2luZ3MobGltaXQgPSAxMCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2JyaWdodC1yZXNwb25kZXInLCAnUE9TVCcsIHtcbiAgICAgICAgYWN0aW9uOiAnZ2V0X3JhbmtpbmdzJyxcbiAgICAgICAgbGltaXQ6IGxpbWl0XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgcmFua2luZ3M6IHJlc3VsdC5yYW5raW5ncyB8fCBbXVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfojrflj5bmjpLooYzmppzlpLHotKU6JywgZXJyb3IpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgcmFua2luZ3M6IFtdLFxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIOS4iuaKpeeCueWHu+asoeaVsFxuICBhc3luYyBzeW5jQ2xpY2tzKHVzZXJJZCwgY2xpY2tDb3VudCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLnJlcXVlc3QoJ2JyaWdodC1yZXNwb25kZXInLCAnUE9TVCcsIHtcbiAgICAgICAgYWN0aW9uOiAnc3luY19jbGlja3MnLFxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgICAgIGNsaWNrX2NvdW50OiBjbGlja0NvdW50XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S4iuaKpeeCueWHu+asoeaVsOWksei0pTonLCBlcnJvcilcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIOajgOafpeWuoOeJqeWQjeaYr+WQpuWPr+eUqFxuICBhc3luYyBjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkocGV0TmFtZSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2JyaWdodC1yZXNwb25kZXInLCAnUE9TVCcsIHtcbiAgICAgICAgYWN0aW9uOiAnY2hlY2tfcGV0X25hbWUnLFxuICAgICAgICBwZXRfbmFtZTogcGV0TmFtZVxuICAgICAgfSk7XG4gICAgICAvLyDlgYforr7mnI3liqHlmajov5Tlm54geyBpc0F2YWlsYWJsZTogdHJ1ZS9mYWxzZSB9XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCAuLi5yZXN1bHQgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5qOA5p+l5a6g54mp5ZCN5Y+v55So5oCn5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSwgaXNBdmFpbGFibGU6IGZhbHNlIH07XG4gICAgfVxuICB9XG5cbiAgLy8g5L+u5pS55a6g54mp5ZCNXG4gIGFzeW5jIHNldFBldE5hbWUodXNlcklkLCBuZXdOYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdzZXRfcGV0X25hbWUnLFxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgICAgIG5ld19uYW1lOiBuZXdOYW1lXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S/ruaUueWuoOeJqeWQjeWksei0pTonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cblxuICAvLyDpooTmv4DmtLvmo4Dmn6VcbiAgYXN5bmMgY2hlY2tEZXZpY2VSZWdpc3RyYXRpb24oZGV2aWNlSWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdicmlnaHQtcmVzcG9uZGVyJywgJ1BPU1QnLCB7XG4gICAgICAgIGFjdGlvbjogJ2NoZWNrX3JlZ2lzdHJhdGlvbicsXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWRcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ+mihOa/gOa0u+ajgOafpeaIkOWKnzonLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+mihOa/gOa0u+ajgOafpeaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cblxuICAvLyDms6jlhozorr7lpIflubbojrflj5bnlKjmiLdJRFxuICBhc3luYyByZWdpc3RlckFuZEdldFVzZXJJZChkZXZpY2VJZCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2JyaWdodC1yZXNwb25kZXInLCAnUE9TVCcsIHtcbiAgICAgICAgYWN0aW9uOiAncmVnaXN0ZXJfZGV2aWNlX2FuZF9nZXRfaWQnLFxuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkXG4gICAgICB9KTtcbiAgICAgIC8vIOWBh+iuvuacjeWKoeWZqOaIkOWKn+aXtui/lOWbniB7IHN1Y2Nlc3M6IHRydWUsIHVzZXJJbmZvOiB7IGlkOiAnLi4uJywgLi4uIH0gfVxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICBjb25zb2xlLmxvZygn5rOo5YaM6K6+5aSH5bm26I635Y+W55So5oi3SUTmiJDlip86JywgcmVzdWx0LnVzZXJJbmZvKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdXNlckluZm86IHJlc3VsdC51c2VySW5mbyB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcign6I635Y+W55So5oi3SUTlpLHotKU6JywgcmVzdWx0ID8gcmVzdWx0LmVycm9yIDogJ+acquefpemUmeivrycpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IChyZXN1bHQgPyByZXN1bHQuZXJyb3IgOiAn5pyN5Yqh5Zmo5pyq6L+U5Zue5oiQ5Yqf54q25oCBJykgfTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5rOo5YaM5oiW6I635Y+W55So5oi3SUTml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICB9XG5cbiAgLy8g6aqM6K+B55So5oi3SUTlubbmgaLlpI3mlbDmja5cbiAgYXN5bmMgdmVyaWZ5VXNlcklkQW5kUmVzdG9yZShkZXZpY2VJZCwgdXNlcklkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICd2ZXJpZnlfdXNlcl9pZF9hbmRfcmVzdG9yZScsXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWQsXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZFxuICAgICAgfSk7XG4gICAgICAvLyDlgYforr7mnI3liqHlmajmiJDlip/ml7bov5Tlm54geyBzdWNjZXNzOiB0cnVlLCB1c2VySW5mbzogeyAuLi4gfSB9XG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVzZXJJbmZvOiByZXN1bHQudXNlckluZm8gfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogKHJlc3VsdCA/IHJlc3VsdC5lcnJvciA6ICfpqozor4HlpLHotKUnKSB9O1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfpqozor4HnlKjmiLdJROaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwaVNlcnZpY2UoKVxuIiwiLy8gc3JjL2NvbW1vbi9qcy9hdXRoLWd1YXJkLmpzXG5cbmltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XG5pbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcbmltcG9ydCBBcGlTZXJ2aWNlIGZyb20gJy4vYXBpLXNlcnZpY2UuanMnO1xuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25maWcuanMnO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgdXNlciBoYXMgdGhlIG5lY2Vzc2FyeSBhY3RpdmF0aW9uIGFuZCBjcmVkZW50aWFscyB0byBhY2Nlc3MgYSBuZXR3b3JrIGZlYXR1cmUuXG4gKiBUaGlzIGZ1bmN0aW9uIGltcGxlbWVudHMgdGhlIGZvbGxvd2luZyBsb2dpYzpcbiAqIDEuIENoZWNrcyBmb3IgYSBsb2NhbCBhY3RpdmF0aW9uIGZsYWcuIElmIG5vdCBwcmVzZW50LCByZWRpcmVjdHMgdG8gdGhlIGFjdGl2YXRpb24gcGFnZS5cbiAqIDIuIElmIGxvY2FsbHkgYWN0aXZhdGVkLCBjaGVja3MgZm9yIHN0b3JlZCB1c2VyIGluZm8gd2l0aCBhIHNlcnZlci1zaWRlIElELlxuICogMy4gSWYgdXNlciBpbmZvIGlzIG1pc3NpbmcsIGl0IGF0dGVtcHRzIHRvIGZldGNoIGl0IGZyb20gdGhlIHNlcnZlciB1c2luZyB0aGUgc3RvcmVkIGRldmljZSBjb2RlLlxuICogNC4gUmV0dXJucyB0aGUgYWNjZXNzIHN0YXR1cyBhbmQgdXNlciBpbmZvLlxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gQW4gb2JqZWN0IHdpdGg6IHsgY2FuQWNjZXNzOiBib29sZWFuLCB1c2VySW5mbzogT2JqZWN0fG51bGwsIG1lc3NhZ2U6IHN0cmluZyB9XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrTmV0d29ya0FjY2VzcygpIHtcbiAgdHJ5IHtcbiAgICAvLyAxLiBDaGVjayBmb3IgbG9jYWwgYWN0aXZhdGlvblxuICAgIGNvbnN0IGxvY2FsQWN0aXZhdGlvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0KHsga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLklTX0xPQ0FMTFlfQUNUSVZBVEVEIH0pO1xuICAgIGlmIChsb2NhbEFjdGl2YXRpb24udmFsdWUgIT09ICd0cnVlJykge1xuICAgICAgcm91dGVyLnB1c2goeyB1cmk6ICdhY3RpdmF0ZScgfSk7XG4gICAgICByZXR1cm4geyBjYW5BY2Nlc3M6IGZhbHNlLCB1c2VySW5mbzogbnVsbCwgbWVzc2FnZTogJ+iuvuWkh+acqua/gOa0u++8jOivt+WFiOa/gOa0u+OAgicgfTtcbiAgICB9XG5cbiAgICAvLyAyLiBDaGVjayBmb3IgZXhpc3RpbmcgVXNlciBJRFxuICAgIGNvbnN0IHVzZXJJbmZvUmVzdWx0ID0gYXdhaXQgc3RvcmFnZS5nZXQoeyBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPIH0pO1xuICAgIGlmICh1c2VySW5mb1Jlc3VsdC52YWx1ZSkge1xuICAgICAgY29uc3QgdXNlckluZm8gPSBKU09OLnBhcnNlKHVzZXJJbmZvUmVzdWx0LnZhbHVlKTtcbiAgICAgIGlmICh1c2VySW5mbyAmJiB1c2VySW5mby5pZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnQXV0aEd1YXJkOiBVc2VyIElEIGZvdW5kIGluIHN0b3JhZ2UuJyk7XG4gICAgICAgIHJldHVybiB7IGNhbkFjY2VzczogdHJ1ZSwgdXNlckluZm86IHVzZXJJbmZvLCBtZXNzYWdlOiAn6aqM6K+B6YCa6L+HJyB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDMuIFVzZXIgSUQgaXMgbWlzc2luZywgdHJ5IHRvIGZldGNoIGl0XG4gICAgY29uc29sZS5sb2coJ0F1dGhHdWFyZDogVXNlciBJRCBub3QgZm91bmQsIGF0dGVtcHRpbmcgdG8gZmV0Y2ggZnJvbSBzZXJ2ZXIuJyk7XG4gICAgXG4gICAgLy8gV2UgbmVlZCB0aGUgZGV2aWNlIGNvZGUgdG8gZ2V0IHRoZSB1c2VyIElEXG4gICAgY29uc3QgZGV2aWNlQ29kZVJlc3VsdCA9IGF3YWl0IHN0b3JhZ2UuZ2V0KHsga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLkRFVklDRV9JRCB9KTtcbiAgICBpZiAoIWRldmljZUNvZGVSZXN1bHQudmFsdWUpIHtcbiAgICAgICAgLy8gVGhpcyBjYXNlIGlzIHVubGlrZWx5IGlmIGxvY2FsIGFjdGl2YXRpb24gd29ya2VkLCBidXQgZ29vZCB0byBoYW5kbGUuXG4gICAgICAgIHJvdXRlci5wdXNoKHsgdXJpOiAnYWN0aXZhdGUnIH0pO1xuICAgICAgICByZXR1cm4geyBjYW5BY2Nlc3M6IGZhbHNlLCB1c2VySW5mbzogbnVsbCwgbWVzc2FnZTogJ+aXoOazleaJvuWIsOiuvuWkh+egge+8jOivt+mHjeaWsOa/gOa0u+OAgicgfTtcbiAgICB9XG4gICAgY29uc3QgZGV2aWNlQ29kZSA9IGRldmljZUNvZGVSZXN1bHQudmFsdWU7XG5cbiAgICBjb25zdCBhcGlSZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLnJlZ2lzdGVyQW5kR2V0VXNlcklkKGRldmljZUNvZGUpO1xuXG4gICAgaWYgKGFwaVJlc3VsdC5zdWNjZXNzICYmIGFwaVJlc3VsdC51c2VySW5mbyAmJiAoYXBpUmVzdWx0LnVzZXJJbmZvLmlkIHx8IGFwaVJlc3VsdC51c2VySW5mby51c2VyX251bWJlcikpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdBdXRoR3VhcmQ6IFN1Y2Nlc3NmdWxseSBmZXRjaGVkIG5ldyBVc2VyIElELicpO1xuICAgICAgXG4gICAgICBjb25zdCB1c2VySW5mb1RvU2F2ZSA9IHtcbiAgICAgICAgaWQ6IGFwaVJlc3VsdC51c2VySW5mby5pZCB8fCBhcGlSZXN1bHQudXNlckluZm8udXNlcl9udW1iZXIsXG4gICAgICAgIHVzZXJfbnVtYmVyOiBhcGlSZXN1bHQudXNlckluZm8udXNlcl9udW1iZXIsXG4gICAgICAgIHBldF9uYW1lOiBhcGlSZXN1bHQudXNlckluZm8ucGV0X25hbWUsXG4gICAgICAgIHRvdGFsX2NsaWNrczogYXBpUmVzdWx0LnVzZXJJbmZvLnRvdGFsX2NsaWNrcyB8fCAwXG4gICAgICB9O1xuXG4gICAgICAvLyBTYXZlIHRoZSBuZXdseSBmZXRjaGVkIHVzZXIgaW5mb1xuICAgICAgYXdhaXQgc3RvcmFnZS5zZXQoeyBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPLCB2YWx1ZTogSlNPTi5zdHJpbmdpZnkodXNlckluZm9Ub1NhdmUpIH0pO1xuICAgICAgcmV0dXJuIHsgY2FuQWNjZXNzOiB0cnVlLCB1c2VySW5mbzogdXNlckluZm9Ub1NhdmUsIG1lc3NhZ2U6ICfnlKjmiLdJROiOt+WPluaIkOWKnycgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ0F1dGhHdWFyZDogRmFpbGVkIHRvIGZldGNoIFVzZXIgSUQuJyk7XG4gICAgICByZXR1cm4geyBjYW5BY2Nlc3M6IGZhbHNlLCB1c2VySW5mbzogbnVsbCwgbWVzc2FnZTogJ+iOt+WPlueUqOaIt0lE5aSx6LSl77yM6K+35qOA5p+l572R57uc5ZCO6YeN6K+V44CCJyB9O1xuICAgIH1cblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignQXV0aEd1YXJkOiBFcnJvciBkdXJpbmcgY2hlY2tOZXR3b3JrQWNjZXNzJywgZSk7XG4gICAgcmV0dXJuIHsgY2FuQWNjZXNzOiBmYWxzZSwgdXNlckluZm86IG51bGwsIG1lc3NhZ2U6IGDlj5HnlJ/plJnor686ICR7ZS5tZXNzYWdlfWAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNoZWNrTmV0d29ya0FjY2Vzc1xufTtcbiIsIi8vIGNvbmZpZy5qc1xuZXhwb3J0IGNvbnN0IENPTkZJRyA9IHtcbiAgLy8gU3VwYWJhc2XphY3nva5cbiAgU1VQQUJBU0U6IHtcbiAgICBVUkw6ICdodHRwczovL2pxdWJ5cW5oZ3l4YXpwbnBqeXFmLnN1cGFiYXNlLmNvJyxcbiAgICBLRVk6ICdzYl9wdWJsaXNoYWJsZV9fVU1ZR3YxVkRvLVpyT3Z1VWdaTEZnX1dLcXljN00tJywgLy8g6K+35pu/5o2i5Li65L2g55qEU3VwYWJhc2XljL/lkI3lr4bpkqVcbiAgfSxcbiAgXG4gIC8vIOW6lOeUqOmFjee9rlxuICBBUFA6IHtcbiAgICBOQU1FOiAnQmFuZFBldCcsXG4gICAgVkVSU0lPTjogJzEuMC4wJyxcbiAgICBNQVhfQ0xJQ0tTX1BFUl9CQVRDSDogNTAsIC8vIOaJuemHj+S4iuS8oOacgOWkp+eCueWHu+aVsFxuICAgIFNZTkNfSU5URVJWQUw6IDMwMDAwMCwgLy8gNeWIhumSn+WQjOatpeS4gOasoVxuICAgIFJBTktfTElNSVQ6IDEwIC8vIOaOkuihjOamnOaYvuekuuaVsOmHj1xuICB9LFxuICBcbiAgLy8g5a2Y5YKo6ZSu5ZCNXG4gIFNUT1JBR0VfS0VZUzoge1xuICAgIElTX0xPQ0FMTFlfQUNUSVZBVEVEOiAnaXNfbG9jYWxseV9hY3RpdmF0ZWQnLFxuICAgIERFVklDRV9JRDogJ2RldmljZV9pZCcsXG4gICAgVVNFUl9JTkZPOiAndXNlcl9pbmZvJyxcbiAgICBQRU5ESU5HX0NMSUNLUzogJ3BlbmRpbmdfY2xpY2tzJyxcbiAgICBMQVNUX1NZTkNfVElNRTogJ2xhc3Rfc3luY190aW1lJyxcbiAgICBUT1RBTF9DTElDS1M6ICd0b3RhbF9jbGlja3MnXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjYuOFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS42LjhcIjsiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uL2JhY2sucG5nXCIgY2xhc3M9XCJwYWdlLWhlYWRlci1iYWNrLWJ1dHRvblwiIG9uY2xpY2s9XCJnb0JhY2tcIj48L2ltYWdlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRpdGxlLXRpbWVcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtdGltZS1kaXNwbGF5XCI+e3sgdGltZSB9fTwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtaGVhZGVyLXRpdGxlXCI+5o6S6KGM5qacPC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgIDxsaXN0IGNsYXNzPVwibGVhZGVyYm9hcmQtbGlzdFwiIGlmPVwie3sgcmFua2luZ3MubGVuZ3RoID4gMCB9fVwiPlxuICAgICAgICA8bGlzdC1pdGVtIGZvcj1cInt7cmFua2luZ3N9fVwiIGNsYXNzPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJhbmstY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJhbmstbnVtYmVyXCI+e3skaWR4ICsgMX19PC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJyYW5rLW5hbWVcIj57eyRpdGVtLm5hbWV9fTwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInJhbmstc2NvcmVcIj57eyRpdGVtLnNjb3JlfX08L3RleHQ+XG4gICAgICAgIDwvbGlzdC1pdGVtPlxuICAgICAgPC9saXN0PlxuICAgICAgPGRpdiBjbGFzcz1cInN0YXR1cy1jb250YWluZXJcIiBpZj1cInt7IHJhbmtpbmdzLmxlbmd0aCA9PT0gMCAmJiBzdGF0dXNNZXNzYWdlIH19XCI+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwic3RhdHVzLXRleHRcIj57eyBzdGF0dXNNZXNzYWdlIH19PC90ZXh0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAucGFnZS1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAucGFnZS1oZWFkZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5wYWdlLXRpbWUtZGlzcGxheSB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgfVxuICAucGFnZS1oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTBweDtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuICAucGFnZS1oZWFkZXItYmFjay1idXR0b24ge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTkwRkY7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLWJhY2stYXJyb3cge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgfVxuICAucGFnZS1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxuICAuaGVhZGVyLXRpdGxlLXRpbWUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAucGFnZS1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5sZWFkZXJib2FyZC1saXN0IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAubGlzdC1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTsgLyogRXZlbiBkYXJrZXIgZ3JleSAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnJhbmstY29udGFpbmVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5yYW5rLW51bWJlciB7XG4gICAgY29sb3I6ICNBQUFBQUE7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuICAucmFuay1uYW1lIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgLnJhbmstc2NvcmUge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuICAuc3RhdHVzLWNvbnRhaW5lciB7XG4gICAgZmxleDogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgLnN0YXR1cy10ZXh0IHtcbiAgICBjb2xvcjogI0FBQUFBQTtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcbiAgaW1wb3J0IEFwaVNlcnZpY2UgZnJvbSAnLi4vY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzJztcbiAgaW1wb3J0IGF1dGhHdWFyZCBmcm9tICcuLi9jb21tb24vanMvYXV0aC1ndWFyZC5qcyc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGE6IHtcbiAgICAgIHRpbWU6ICcwMDowMCcsXG4gICAgICByYW5raW5nczogW10sXG4gICAgICBzdGF0dXNNZXNzYWdlOiAn5q2j5Zyo5Yqg6L29Li4uJ1xuICAgIH0sXG4gICAgb25Jbml0KCkge1xuICAgICAgdGhpcy51cGRhdGVUaW1lKCk7XG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVRpbWUsIDUwMDApO1xuICAgICAgdGhpcy5mZXRjaFJhbmtpbmdzKCk7XG4gICAgfSxcbiAgICB1cGRhdGVUaW1lKCkge1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgY29uc3QgbWludXRlcyA9IG5vdy5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgdGhpcy50aW1lID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xuICAgIH0sXG4gICAgYXN5bmMgZmV0Y2hSYW5raW5ncygpIHtcbiAgICAgIGNvbnN0IGd1YXJkUmVzdWx0ID0gYXdhaXQgYXV0aEd1YXJkLmNoZWNrTmV0d29ya0FjY2VzcygpO1xuICAgICAgaWYgKCFndWFyZFJlc3VsdC5jYW5BY2Nlc3MpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gZ3VhcmRSZXN1bHQubWVzc2FnZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBndWFyZCBwYXNzZXMsIHVzZXJJbmZvIGlzIGF2YWlsYWJsZSBpbiBndWFyZFJlc3VsdC51c2VySW5mbywgdGhvdWdoIGdldFJhbmtpbmdzIGRvZXNuJ3QgbmVlZCBpdC5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2UuZ2V0UmFua2luZ3MoKTtcbiAgICAgIGlmIChyZXN1bHQuc3VjY2VzcyAmJiByZXN1bHQucmFua2luZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnJhbmtpbmdzID0gcmVzdWx0LnJhbmtpbmdzO1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAnJzsgLy8gQ2xlYXIgc3RhdHVzIG9uIHN1Y2Nlc3NcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnN1Y2Nlc3MgJiYgcmVzdWx0LnJhbmtpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn5o6S6KGM5qac5LiK6L+Y5rKh5pyJ5Lq677yM5b+r5Y6754K55Ye75ZCn77yBJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggcmFua2luZ3M6XCIsIHJlc3VsdC5lcnJvcik7XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICfml6Dms5XliqDovb3mjpLooYzmppzvvIzor7fnqI3lkI7ph43or5XjgIInO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ29CYWNrKCkge1xuICAgICAgcm91dGVyLmJhY2soKTtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIl9zeXN0ZW0yIiwiX3N5c3RlbTMiLCJfc3lzdGVtNCIsIl9jb25maWciLCJyZXF1aXJlIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0Iiwib3duS2V5cyIsInIiLCJ0IiwiT2JqZWN0Iiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIm8iLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwicHVzaCIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJ2YWx1ZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiaSIsIl90b1ByaW1pdGl2ZSIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIkFwaVNlcnZpY2UiLCJjb25zdHJ1Y3RvciIsImJhc2VIZWFkZXJzIiwiQ09ORklHIiwiU1VQQUJBU0UiLCJLRVkiLCJyZXF1ZXN0IiwiZW5kcG9pbnQiLCJtZXRob2QiLCJkYXRhIiwidXJsIiwiVVJMIiwib3B0aW9ucyIsImhlYWRlciIsInJlc3BvbnNlVHlwZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwic3VjY2VzcyIsInJlc3BvbnNlIiwicmVzcG9uc2VEYXRhIiwiY29kZSIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiZmFpbCIsImdldFJhbmtpbmdzIiwibGltaXQiLCJyZXN1bHQiLCJhY3Rpb24iLCJyYW5raW5ncyIsIm1lc3NhZ2UiLCJzeW5jQ2xpY2tzIiwidXNlcklkIiwiY2xpY2tDb3VudCIsInVzZXJfaWQiLCJjbGlja19jb3VudCIsImNoZWNrUGV0TmFtZUF2YWlsYWJpbGl0eSIsInBldE5hbWUiLCJwZXRfbmFtZSIsImlzQXZhaWxhYmxlIiwic2V0UGV0TmFtZSIsIm5ld05hbWUiLCJuZXdfbmFtZSIsImNoZWNrRGV2aWNlUmVnaXN0cmF0aW9uIiwiZGV2aWNlSWQiLCJkZXZpY2VfaWQiLCJsb2ciLCJyZWdpc3RlckFuZEdldFVzZXJJZCIsInVzZXJJbmZvIiwidmVyaWZ5VXNlcklkQW5kUmVzdG9yZSIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIl9hcGlTZXJ2aWNlIiwiY2hlY2tOZXR3b3JrQWNjZXNzIiwibG9jYWxBY3RpdmF0aW9uIiwiZ2V0Iiwia2V5IiwiU1RPUkFHRV9LRVlTIiwiSVNfTE9DQUxMWV9BQ1RJVkFURUQiLCJ1cmkiLCJjYW5BY2Nlc3MiLCJ1c2VySW5mb1Jlc3VsdCIsIlVTRVJfSU5GTyIsInBhcnNlIiwiaWQiLCJkZXZpY2VDb2RlUmVzdWx0IiwiREVWSUNFX0lEIiwiZGV2aWNlQ29kZSIsImFwaVJlc3VsdCIsInVzZXJfbnVtYmVyIiwidXNlckluZm9Ub1NhdmUiLCJ0b3RhbF9jbGlja3MiLCJzZXQiLCJBUFAiLCJOQU1FIiwiVkVSU0lPTiIsIk1BWF9DTElDS1NfUEVSX0JBVENIIiwiU1lOQ19JTlRFUlZBTCIsIlJBTktfTElNSVQiLCJQRU5ESU5HX0NMSUNLUyIsIkxBU1RfU1lOQ19USU1FIiwiVE9UQUxfQ0xJQ0tTIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl9hdXRoR3VhcmQiLCJ0aW1lIiwic3RhdHVzTWVzc2FnZSIsIm9uSW5pdCIsInVwZGF0ZVRpbWUiLCJzZXRJbnRlcnZhbCIsImZldGNoUmFua2luZ3MiLCJub3ciLCJEYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImd1YXJkUmVzdWx0IiwiYXV0aEd1YXJkIiwiZ29CYWNrIiwicm91dGVyIiwiYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQ0EsSUFBQUEsVUFBQUMsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUMsV0FBQUYsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUUsV0FBQUgsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUcsV0FBQUosdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUksVUFBQUMsb0JBQUE7d0JBQXFDLFNBQUFOLHVCQUFBTyxDQUFBOzRCQUFBLE9BQUFBLEtBQUFBLEVBQUFDLFVBQUEsR0FBQUQsSUFBQTtnQ0FBQUUsU0FBQUY7NEJBQUE7d0JBQUE7d0JBQUEsU0FBQUcsUUFBQUgsQ0FBQSxFQUFBSSxDQUFBOzRCQUFBLElBQUFDLElBQUFDLE9BQUFDLElBQUEsQ0FBQVA7NEJBQUEsSUFBQU0sT0FBQUUscUJBQUE7Z0NBQUEsSUFBQUMsSUFBQUgsT0FBQUUscUJBQUEsQ0FBQVI7Z0NBQUFJLEtBQUFLLENBQUFBLElBQUFBLEVBQUFDLE1BQUEsVUFBQU4sQ0FBQTtvQ0FBQSxPQUFBRSxPQUFBSyx3QkFBQSxDQUFBWCxHQUFBSSxHQUFBUSxVQUFBO2dDQUFBLEtBQUFQLEVBQUFRLElBQUEsQ0FBQUMsS0FBQSxDQUFBVCxHQUFBSTs0QkFBQTs0QkFBQSxPQUFBSjt3QkFBQTt3QkFBQSxTQUFBVSxjQUFBZixDQUFBOzRCQUFBLFFBQUFJLElBQUEsR0FBQUEsSUFBQVksVUFBQUMsTUFBQSxFQUFBYixJQUFBO2dDQUFBLElBQUFDLElBQUEsUUFBQVcsU0FBQSxDQUFBWixFQUFBLEdBQUFZLFNBQUEsQ0FBQVos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