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
                                    'Content-Type': 'application/json'
                                };
                            }
                            async request(endpoint, method = 'POST', data = null) {
                                const url = `http://jqubyqnhgyxazpnpjyqf.supabase.co/functions/v1/${endpoint}`;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZGVyYm9hcmRcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9hdXRoLWd1YXJkLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9sZWFkZXJib2FyZC9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcGktc2VydmljZS5qc1xuaW1wb3J0IGZldGNoIGZyb20gJ0BzeXN0ZW0uZmV0Y2gnO1xuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xuaW1wb3J0IHByb21wdCBmcm9tICdAc3lzdGVtLnByb21wdCc7XG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XG5cbmNsYXNzIEFwaVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJhc2VIZWFkZXJzID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIC8vIOaJi+eOr+S4jemcgOimgSBBUEkgS2V5IOmqjOivgVxuICAgIH1cbiAgfVxuXG4gIC8vIOmAmueUqOivt+axguaWueazlSAtIOS/ruaUuSBVUkwg5Li6IEhUVFBcbiAgYXN5bmMgcmVxdWVzdChlbmRwb2ludCwgbWV0aG9kID0gJ1BPU1QnLCBkYXRhID0gbnVsbCkge1xuICAgIC8vIOmHjeimge+8muaUueS4uiBIVFRQIOWNj+iurlxuICAgIGNvbnN0IHVybCA9IGBodHRwOi8vanF1YnlxbmhneXhhenBucGp5cWYuc3VwYWJhc2UuY28vZnVuY3Rpb25zL3YxLyR7ZW5kcG9pbnR9YFxuICAgIFxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICB1cmwsXG4gICAgICBtZXRob2QsXG4gICAgICBoZWFkZXI6IHRoaXMuYmFzZUhlYWRlcnMsXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xuICAgIH1cblxuICAgIGlmIChkYXRhKSB7XG4gICAgICBvcHRpb25zLmRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmZXRjaC5mZXRjaCh7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XG5cbiAgICAgICAgICBpZiAocmVzcG9uc2UuY29kZSA+PSAyMDAgJiYgcmVzcG9uc2UuY29kZSA8IDMwMCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZURhdGEpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEhUVFAgRXJyb3I6ICR7cmVzcG9uc2UuY29kZX1gLCByZXNwb25zZSk7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBIVFRQICR7cmVzcG9uc2UuY29kZX06ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2VEYXRhKX1gKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IChlcnJvciwgY29kZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFJlcXVlc3QgRmFpbGVkOiAke2NvZGV9YCwgZXJyb3IpO1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkOiAke2Vycm9yLmRhdGF9YCkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8vIOiOt+WPluaOkuihjOamnFxuICBhc3luYyBnZXRSYW5raW5ncyhsaW1pdCA9IDEwKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdnZXRfcmFua2luZ3MnLFxuICAgICAgICBsaW1pdDogbGltaXRcbiAgICAgIH0pXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICByYW5raW5nczogcmVzdWx0LnJhbmtpbmdzIHx8IFtdXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaOkuihjOamnOWksei0pTonLCBlcnJvcilcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICByYW5raW5nczogW10sXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8g5LiK5oql54K55Ye75qyh5pWwXG4gIGFzeW5jIHN5bmNDbGlja3ModXNlcklkLCBjbGlja0NvdW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdzeW5jX2NsaWNrcycsXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcbiAgICAgICAgY2xpY2tfY291bnQ6IGNsaWNrQ291bnRcbiAgICAgIH0pXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5LiK5oql54K55Ye75qyh5pWw5aSx6LSlOicsIGVycm9yKVxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICB9XG5cbiAgLy8g5qOA5p+l5a6g54mp5ZCN5piv5ZCm5Y+v55SoXG4gIGFzeW5jIGNoZWNrUGV0TmFtZUF2YWlsYWJpbGl0eShwZXROYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdjaGVja19wZXRfbmFtZScsXG4gICAgICAgIHBldF9uYW1lOiBwZXROYW1lXG4gICAgICB9KTtcbiAgICAgIC8vIOWBh+iuvuacjeWKoeWZqOi/lOWbniB7IGlzQXZhaWxhYmxlOiB0cnVlL2ZhbHNlIH1cbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIC4uLnJlc3VsdCB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfmo4Dmn6XlrqDnianlkI3lj6/nlKjmgKfml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlLCBpc0F2YWlsYWJsZTogZmFsc2UgfTtcbiAgICB9XG4gIH1cblxuICAvLyDkv67mlLnlrqDnianlkI1cbiAgYXN5bmMgc2V0UGV0TmFtZSh1c2VySWQsIG5ld05hbWUpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdicmlnaHQtcmVzcG9uZGVyJywgJ1BPU1QnLCB7XG4gICAgICAgIGFjdGlvbjogJ3NldF9wZXRfbmFtZScsXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcbiAgICAgICAgbmV3X25hbWU6IG5ld05hbWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5L+u5pS55a6g54mp5ZCN5aSx6LSlOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIOmihOa/gOa0u+ajgOafpVxuICBhc3luYyBjaGVja0RldmljZVJlZ2lzdHJhdGlvbihkZXZpY2VJZCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2JyaWdodC1yZXNwb25kZXInLCAnUE9TVCcsIHtcbiAgICAgICAgYWN0aW9uOiAnY2hlY2tfcmVnaXN0cmF0aW9uJyxcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygn6aKE5r+A5rS75qOA5p+l5oiQ5YqfOicsIHJlc3VsdCk7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign6aKE5r+A5rS75qOA5p+l5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIOazqOWGjOiuvuWkh+W5tuiOt+WPlueUqOaIt0lEXG4gIGFzeW5jIHJlZ2lzdGVyQW5kR2V0VXNlcklkKGRldmljZUlkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdyZWdpc3Rlcl9kZXZpY2VfYW5kX2dldF9pZCcsXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWRcbiAgICAgIH0pO1xuICAgICAgLy8g5YGH6K6+5pyN5Yqh5Zmo5oiQ5Yqf5pe26L+U5ZueIHsgc3VjY2VzczogdHJ1ZSwgdXNlckluZm86IHsgaWQ6ICcuLi4nLCAuLi4gfSB9XG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfms6jlhozorr7lpIflubbojrflj5bnlKjmiLdJROaIkOWKnzonLCByZXN1bHQudXNlckluZm8pO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1c2VySW5mbzogcmVzdWx0LnVzZXJJbmZvIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCfojrflj5bnlKjmiLdJROWksei0pTonLCByZXN1bHQgPyByZXN1bHQuZXJyb3IgOiAn5pyq55+l6ZSZ6K+vJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogKHJlc3VsdCA/IHJlc3VsdC5lcnJvciA6ICfmnI3liqHlmajmnKrov5Tlm57miJDlip/nirbmgIEnKSB9O1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfms6jlhozmiJbojrflj5bnlKjmiLdJROaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cblxuICAvLyDpqozor4HnlKjmiLdJROW5tuaBouWkjeaVsOaNrlxuICBhc3luYyB2ZXJpZnlVc2VySWRBbmRSZXN0b3JlKGRldmljZUlkLCB1c2VySWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdicmlnaHQtcmVzcG9uZGVyJywgJ1BPU1QnLCB7XG4gICAgICAgIGFjdGlvbjogJ3ZlcmlmeV91c2VyX2lkX2FuZF9yZXN0b3JlJyxcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZCxcbiAgICAgICAgdXNlcl9pZDogdXNlcklkXG4gICAgICB9KTtcbiAgICAgIC8vIOWBh+iuvuacjeWKoeWZqOaIkOWKn+aXtui/lOWbniB7IHN1Y2Nlc3M6IHRydWUsIHVzZXJJbmZvOiB7IC4uLiB9IH1cbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdXNlckluZm86IHJlc3VsdC51c2VySW5mbyB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAocmVzdWx0ID8gcmVzdWx0LmVycm9yIDogJ+mqjOivgeWksei0pScpIH07XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+mqjOivgeeUqOaIt0lE5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBpU2VydmljZSgpXG4iLCIvLyBzcmMvY29tbW9uL2pzL2F1dGgtZ3VhcmQuanNcblxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQHN5c3RlbS5zdG9yYWdlJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xuaW1wb3J0IEFwaVNlcnZpY2UgZnJvbSAnLi9hcGktc2VydmljZS5qcyc7XG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSB1c2VyIGhhcyB0aGUgbmVjZXNzYXJ5IGFjdGl2YXRpb24gYW5kIGNyZWRlbnRpYWxzIHRvIGFjY2VzcyBhIG5ldHdvcmsgZmVhdHVyZS5cbiAqIFRoaXMgZnVuY3Rpb24gaW1wbGVtZW50cyB0aGUgZm9sbG93aW5nIGxvZ2ljOlxuICogMS4gQ2hlY2tzIGZvciBhIGxvY2FsIGFjdGl2YXRpb24gZmxhZy4gSWYgbm90IHByZXNlbnQsIHJlZGlyZWN0cyB0byB0aGUgYWN0aXZhdGlvbiBwYWdlLlxuICogMi4gSWYgbG9jYWxseSBhY3RpdmF0ZWQsIGNoZWNrcyBmb3Igc3RvcmVkIHVzZXIgaW5mbyB3aXRoIGEgc2VydmVyLXNpZGUgSUQuXG4gKiAzLiBJZiB1c2VyIGluZm8gaXMgbWlzc2luZywgaXQgYXR0ZW1wdHMgdG8gZmV0Y2ggaXQgZnJvbSB0aGUgc2VydmVyIHVzaW5nIHRoZSBzdG9yZWQgZGV2aWNlIGNvZGUuXG4gKiA0LiBSZXR1cm5zIHRoZSBhY2Nlc3Mgc3RhdHVzIGFuZCB1c2VyIGluZm8uXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fSBBbiBvYmplY3Qgd2l0aDogeyBjYW5BY2Nlc3M6IGJvb2xlYW4sIHVzZXJJbmZvOiBPYmplY3R8bnVsbCwgbWVzc2FnZTogc3RyaW5nIH1cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2hlY2tOZXR3b3JrQWNjZXNzKCkge1xuICB0cnkge1xuICAgIC8vIDEuIENoZWNrIGZvciBsb2NhbCBhY3RpdmF0aW9uXG4gICAgY29uc3QgbG9jYWxBY3RpdmF0aW9uID0gYXdhaXQgc3RvcmFnZS5nZXQoeyBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuSVNfTE9DQUxMWV9BQ1RJVkFURUQgfSk7XG4gICAgaWYgKGxvY2FsQWN0aXZhdGlvbi52YWx1ZSAhPT0gJ3RydWUnKSB7XG4gICAgICByb3V0ZXIucHVzaCh7IHVyaTogJ2FjdGl2YXRlJyB9KTtcbiAgICAgIHJldHVybiB7IGNhbkFjY2VzczogZmFsc2UsIHVzZXJJbmZvOiBudWxsLCBtZXNzYWdlOiAn6K6+5aSH5pyq5r+A5rS777yM6K+35YWI5r+A5rS744CCJyB9O1xuICAgIH1cblxuICAgIC8vIDIuIENoZWNrIGZvciBleGlzdGluZyBVc2VyIElEXG4gICAgY29uc3QgdXNlckluZm9SZXN1bHQgPSBhd2FpdCBzdG9yYWdlLmdldCh7IGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8gfSk7XG4gICAgaWYgKHVzZXJJbmZvUmVzdWx0LnZhbHVlKSB7XG4gICAgICBjb25zdCB1c2VySW5mbyA9IEpTT04ucGFyc2UodXNlckluZm9SZXN1bHQudmFsdWUpO1xuICAgICAgaWYgKHVzZXJJbmZvICYmIHVzZXJJbmZvLmlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBdXRoR3VhcmQ6IFVzZXIgSUQgZm91bmQgaW4gc3RvcmFnZS4nKTtcbiAgICAgICAgcmV0dXJuIHsgY2FuQWNjZXNzOiB0cnVlLCB1c2VySW5mbzogdXNlckluZm8sIG1lc3NhZ2U6ICfpqozor4HpgJrov4cnIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMy4gVXNlciBJRCBpcyBtaXNzaW5nLCB0cnkgdG8gZmV0Y2ggaXRcbiAgICBjb25zb2xlLmxvZygnQXV0aEd1YXJkOiBVc2VyIElEIG5vdCBmb3VuZCwgYXR0ZW1wdGluZyB0byBmZXRjaCBmcm9tIHNlcnZlci4nKTtcbiAgICBcbiAgICAvLyBXZSBuZWVkIHRoZSBkZXZpY2UgY29kZSB0byBnZXQgdGhlIHVzZXIgSURcbiAgICBjb25zdCBkZXZpY2VDb2RlUmVzdWx0ID0gYXdhaXQgc3RvcmFnZS5nZXQoeyBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuREVWSUNFX0lEIH0pO1xuICAgIGlmICghZGV2aWNlQ29kZVJlc3VsdC52YWx1ZSkge1xuICAgICAgICAvLyBUaGlzIGNhc2UgaXMgdW5saWtlbHkgaWYgbG9jYWwgYWN0aXZhdGlvbiB3b3JrZWQsIGJ1dCBnb29kIHRvIGhhbmRsZS5cbiAgICAgICAgcm91dGVyLnB1c2goeyB1cmk6ICdhY3RpdmF0ZScgfSk7XG4gICAgICAgIHJldHVybiB7IGNhbkFjY2VzczogZmFsc2UsIHVzZXJJbmZvOiBudWxsLCBtZXNzYWdlOiAn5peg5rOV5om+5Yiw6K6+5aSH56CB77yM6K+36YeN5paw5r+A5rS744CCJyB9O1xuICAgIH1cbiAgICBjb25zdCBkZXZpY2VDb2RlID0gZGV2aWNlQ29kZVJlc3VsdC52YWx1ZTtcblxuICAgIGNvbnN0IGFwaVJlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2UucmVnaXN0ZXJBbmRHZXRVc2VySWQoZGV2aWNlQ29kZSk7XG5cbiAgICBpZiAoYXBpUmVzdWx0LnN1Y2Nlc3MgJiYgYXBpUmVzdWx0LnVzZXJJbmZvICYmIChhcGlSZXN1bHQudXNlckluZm8uaWQgfHwgYXBpUmVzdWx0LnVzZXJJbmZvLnVzZXJfbnVtYmVyKSkge1xuICAgICAgY29uc29sZS5sb2coJ0F1dGhHdWFyZDogU3VjY2Vzc2Z1bGx5IGZldGNoZWQgbmV3IFVzZXIgSUQuJyk7XG4gICAgICBcbiAgICAgIGNvbnN0IHVzZXJJbmZvVG9TYXZlID0ge1xuICAgICAgICBpZDogYXBpUmVzdWx0LnVzZXJJbmZvLmlkIHx8IGFwaVJlc3VsdC51c2VySW5mby51c2VyX251bWJlcixcbiAgICAgICAgdXNlcl9udW1iZXI6IGFwaVJlc3VsdC51c2VySW5mby51c2VyX251bWJlcixcbiAgICAgICAgcGV0X25hbWU6IGFwaVJlc3VsdC51c2VySW5mby5wZXRfbmFtZSxcbiAgICAgICAgdG90YWxfY2xpY2tzOiBhcGlSZXN1bHQudXNlckluZm8udG90YWxfY2xpY2tzIHx8IDBcbiAgICAgIH07XG5cbiAgICAgIC8vIFNhdmUgdGhlIG5ld2x5IGZldGNoZWQgdXNlciBpbmZvXG4gICAgICBhd2FpdCBzdG9yYWdlLnNldCh7IGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8sIHZhbHVlOiBKU09OLnN0cmluZ2lmeSh1c2VySW5mb1RvU2F2ZSkgfSk7XG4gICAgICByZXR1cm4geyBjYW5BY2Nlc3M6IHRydWUsIHVzZXJJbmZvOiB1c2VySW5mb1RvU2F2ZSwgbWVzc2FnZTogJ+eUqOaIt0lE6I635Y+W5oiQ5YqfJyB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnQXV0aEd1YXJkOiBGYWlsZWQgdG8gZmV0Y2ggVXNlciBJRC4nKTtcbiAgICAgIHJldHVybiB7IGNhbkFjY2VzczogZmFsc2UsIHVzZXJJbmZvOiBudWxsLCBtZXNzYWdlOiAn6I635Y+W55So5oi3SUTlpLHotKXvvIzor7fmo4Dmn6XnvZHnu5zlkI7ph43or5XjgIInIH07XG4gICAgfVxuXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBdXRoR3VhcmQ6IEVycm9yIGR1cmluZyBjaGVja05ldHdvcmtBY2Nlc3MnLCBlKTtcbiAgICByZXR1cm4geyBjYW5BY2Nlc3M6IGZhbHNlLCB1c2VySW5mbzogbnVsbCwgbWVzc2FnZTogYOWPkeeUn+mUmeivrzogJHtlLm1lc3NhZ2V9YCB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY2hlY2tOZXR3b3JrQWNjZXNzXG59O1xuIiwiLy8gY29uZmlnLmpzXG5leHBvcnQgY29uc3QgQ09ORklHID0ge1xuICAvLyDms6jmhI/vvJpVUkwg5YmN57yA5ZyoIGFwaS1zZXJ2aWNlLmpzIOS4reehrOe8lueggeS6hlxuICAvLyDov5nph4zkuI3lho3pnIDopoHphY3nva5cbiAgXG4gIC8vIOW6lOeUqOmFjee9rlxuICBBUFA6IHtcbiAgICBOQU1FOiAnQmFuZFBldCcsXG4gICAgVkVSU0lPTjogJzEuMC4wJyxcbiAgICBNQVhfQ0xJQ0tTX1BFUl9CQVRDSDogNTAsXG4gICAgU1lOQ19JTlRFUlZBTDogMzAwMDAwLFxuICAgIFJBTktfTElNSVQ6IDEwXG4gIH0sXG4gIFxuICAvLyDlrZjlgqjplK7lkI1cbiAgU1RPUkFHRV9LRVlTOiB7XG4gICAgSVNfTE9DQUxMWV9BQ1RJVkFURUQ6ICdpc19sb2NhbGx5X2FjdGl2YXRlZCcsXG4gICAgREVWSUNFX0lEOiAnZGV2aWNlX2lkJyxcbiAgICBVU0VSX0lORk86ICd1c2VyX2luZm8nLFxuICAgIFBFTkRJTkdfQ0xJQ0tTOiAncGVuZGluZ19jbGlja3MnLFxuICAgIExBU1RfU1lOQ19USU1FOiAnbGFzdF9zeW5jX3RpbWUnLFxuICAgIFRPVEFMX0NMSUNLUzogJ3RvdGFsX2NsaWNrcydcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNi44XCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjYuOFwiOyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vYmFjay5wbmdcIiBjbGFzcz1cInBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uXCIgb25jbGljaz1cImdvQmFja1wiPjwvaW1hZ2U+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGUtdGltZVwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicGFnZS10aW1lLWRpc3BsYXlcIj57eyB0aW1lIH19PC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicGFnZS1oZWFkZXItdGl0bGVcIj7mjpLooYzmppw8L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGVudFwiPlxuICAgICAgPGxpc3QgY2xhc3M9XCJsZWFkZXJib2FyZC1saXN0XCIgaWY9XCJ7eyByYW5raW5ncy5sZW5ndGggPiAwIH19XCI+XG4gICAgICAgIDxsaXN0LWl0ZW0gZm9yPVwie3tyYW5raW5nc319XCIgY2xhc3M9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFuay1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicmFuay1udW1iZXJcIj57eyRpZHggKyAxfX08L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJhbmstbmFtZVwiPnt7JGl0ZW0ubmFtZX19PC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicmFuay1zY29yZVwiPnt7JGl0ZW0uc2NvcmV9fTwvdGV4dD5cbiAgICAgICAgPC9saXN0LWl0ZW0+XG4gICAgICA8L2xpc3Q+XG4gICAgICA8ZGl2IGNsYXNzPVwic3RhdHVzLWNvbnRhaW5lclwiIGlmPVwie3sgcmFua2luZ3MubGVuZ3RoID09PSAwICYmIHN0YXR1c01lc3NhZ2UgfX1cIj5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJzdGF0dXMtdGV4dFwiPnt7IHN0YXR1c01lc3NhZ2UgfX08L3RleHQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gIC5wYWdlLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5wYWdlLWhlYWRlci1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLnBhZ2UtdGltZS1kaXNwbGF5IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB9XG4gIC5wYWdlLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5wYWdlLWhlYWRlci1iYWNrLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFOTBGRjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAucGFnZS1oZWFkZXItYmFjay1hcnJvdyB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG4gIC5wYWdlLWhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG4gIC5oZWFkZXItdGl0bGUtdGltZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5wYWdlLWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmxlYWRlcmJvYXJkLWxpc3Qge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG4gIC5saXN0LWl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBOyAvKiBFdmVuIGRhcmtlciBncmV5ICovXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAucmFuay1jb250YWluZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnJhbmstbnVtYmVyIHtcbiAgICBjb2xvcjogI0FBQUFBQTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gIC5yYW5rLW5hbWUge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuICAucmFuay1zY29yZSB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG4gIC5zdGF0dXMtY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICAuc3RhdHVzLXRleHQge1xuICAgIGNvbG9yOiAjQUFBQUFBO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xuICBpbXBvcnQgQXBpU2VydmljZSBmcm9tICcuLi9jb21tb24vanMvYXBpLXNlcnZpY2UuanMnO1xuICBpbXBvcnQgYXV0aEd1YXJkIGZyb20gJy4uL2NvbW1vbi9qcy9hdXRoLWd1YXJkLmpzJztcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YToge1xuICAgICAgdGltZTogJzAwOjAwJyxcbiAgICAgIHJhbmtpbmdzOiBbXSxcbiAgICAgIHN0YXR1c01lc3NhZ2U6ICfmraPlnKjliqDovb0uLi4nXG4gICAgfSxcbiAgICBvbkluaXQoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICAgIHNldEludGVydmFsKHRoaXMudXBkYXRlVGltZSwgNTAwMCk7XG4gICAgICB0aGlzLmZldGNoUmFua2luZ3MoKTtcbiAgICB9LFxuICAgIHVwZGF0ZVRpbWUoKSB7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgaG91cnMgPSBub3cuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICBjb25zdCBtaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICB0aGlzLnRpbWUgPSBgJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfSxcbiAgICBhc3luYyBmZXRjaFJhbmtpbmdzKCkge1xuICAgICAgY29uc3QgZ3VhcmRSZXN1bHQgPSBhd2FpdCBhdXRoR3VhcmQuY2hlY2tOZXR3b3JrQWNjZXNzKCk7XG4gICAgICBpZiAoIWd1YXJkUmVzdWx0LmNhbkFjY2Vzcykge1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSBndWFyZFJlc3VsdC5tZXNzYWdlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGd1YXJkIHBhc3NlcywgdXNlckluZm8gaXMgYXZhaWxhYmxlIGluIGd1YXJkUmVzdWx0LnVzZXJJbmZvLCB0aG91Z2ggZ2V0UmFua2luZ3MgZG9lc24ndCBuZWVkIGl0LlxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5nZXRSYW5raW5ncygpO1xuICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzICYmIHJlc3VsdC5yYW5raW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMucmFua2luZ3MgPSByZXN1bHQucmFua2luZ3M7XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICcnOyAvLyBDbGVhciBzdGF0dXMgb24gc3VjY2Vzc1xuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuc3VjY2VzcyAmJiByZXN1bHQucmFua2luZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICfmjpLooYzmppzkuIrov5jmsqHmnInkurrvvIzlv6vljrvngrnlh7vlkKfvvIEnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCByYW5raW5nczpcIiwgcmVzdWx0LmVycm9yKTtcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gJ+aXoOazleWKoOi9veaOkuihjOamnO+8jOivt+eojeWQjumHjeivleOAgic7XG4gICAgICB9XG4gICAgfSxcbiAgICBnb0JhY2soKSB7XG4gICAgICByb3V0ZXIuYmFjaygpO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX3N5c3RlbTIiLCJfc3lzdGVtMyIsIl9zeXN0ZW00IiwiX2NvbmZpZyIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJvd25LZXlzIiwiciIsInQiLCJPYmplY3QiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsInZhbHVlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiQXBpU2VydmljZSIsImNvbnN0cnVjdG9yIiwiYmFzZUhlYWRlcnMiLCJyZXF1ZXN0IiwiZW5kcG9pbnQiLCJtZXRob2QiLCJkYXRhIiwidXJsIiwib3B0aW9ucyIsImhlYWRlciIsInJlc3BvbnNlVHlwZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwic3VjY2VzcyIsInJlc3BvbnNlIiwicmVzcG9uc2VEYXRhIiwiY29kZSIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiZmFpbCIsImdldFJhbmtpbmdzIiwibGltaXQiLCJyZXN1bHQiLCJhY3Rpb24iLCJyYW5raW5ncyIsIm1lc3NhZ2UiLCJzeW5jQ2xpY2tzIiwidXNlcklkIiwiY2xpY2tDb3VudCIsInVzZXJfaWQiLCJjbGlja19jb3VudCIsImNoZWNrUGV0TmFtZUF2YWlsYWJpbGl0eSIsInBldE5hbWUiLCJwZXRfbmFtZSIsImlzQXZhaWxhYmxlIiwic2V0UGV0TmFtZSIsIm5ld05hbWUiLCJuZXdfbmFtZSIsImNoZWNrRGV2aWNlUmVnaXN0cmF0aW9uIiwiZGV2aWNlSWQiLCJkZXZpY2VfaWQiLCJsb2ciLCJyZWdpc3RlckFuZEdldFVzZXJJZCIsInVzZXJJbmZvIiwidmVyaWZ5VXNlcklkQW5kUmVzdG9yZSIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIl9hcGlTZXJ2aWNlIiwiY2hlY2tOZXR3b3JrQWNjZXNzIiwibG9jYWxBY3RpdmF0aW9uIiwiZ2V0Iiwia2V5IiwiQ09ORklHIiwiU1RPUkFHRV9LRVlTIiwiSVNfTE9DQUxMWV9BQ1RJVkFURUQiLCJ1cmkiLCJjYW5BY2Nlc3MiLCJ1c2VySW5mb1Jlc3VsdCIsIlVTRVJfSU5GTyIsInBhcnNlIiwiaWQiLCJkZXZpY2VDb2RlUmVzdWx0IiwiREVWSUNFX0lEIiwiZGV2aWNlQ29kZSIsImFwaVJlc3VsdCIsInVzZXJfbnVtYmVyIiwidXNlckluZm9Ub1NhdmUiLCJ0b3RhbF9jbGlja3MiLCJzZXQiLCJBUFAiLCJOQU1FIiwiVkVSU0lPTiIsIk1BWF9DTElDS1NfUEVSX0JBVENIIiwiU1lOQ19JTlRFUlZBTCIsIlJBTktfTElNSVQiLCJQRU5ESU5HX0NMSUNLUyIsIkxBU1RfU1lOQ19USU1FIiwiVE9UQUxfQ0xJQ0tTIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl9hdXRoR3VhcmQiLCJ0aW1lIiwic3RhdHVzTWVzc2FnZSIsIm9uSW5pdCIsInVwZGF0ZVRpbWUiLCJzZXRJbnRlcnZhbCIsImZldGNoUmFua2luZ3MiLCJub3ciLCJEYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImd1YXJkUmVzdWx0IiwiYXV0aEd1YXJkIiwiZ29CYWNrIiwicm91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