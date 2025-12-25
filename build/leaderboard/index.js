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
                                    const result = await this.request('register_device_and_get_id', {
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
                                    const result = await this.request('verify_user_id_and_restore', {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZGVyYm9hcmRcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9hdXRoLWd1YXJkLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9sZWFkZXJib2FyZC9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcGktc2VydmljZS5qc1xuaW1wb3J0IGZldGNoIGZyb20gJ0BzeXN0ZW0uZmV0Y2gnO1xuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xuaW1wb3J0IHByb21wdCBmcm9tICdAc3lzdGVtLnByb21wdCc7XG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XG5cbmNsYXNzIEFwaVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyDkuK3ovazmnI3liqHlmajlnLDlnYAgLSDku44gY29uZmlnLmpzIOivu+WPllxuICAgIHRoaXMuYmFzZVVybCA9IENPTkZJRy5TRVJWRVIuQkFTRV9VUkw7XG4gICAgdGhpcy5iYXNlSGVhZGVycyA9IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfVxuICB9XG5cbiAgLy8g6YCa55So6K+35rGC5pa55rOVIC0g6YCa6L+H5Lit6L2s5pyN5Yqh5Zmo6L2s5Y+RXG4gIGFzeW5jIHJlcXVlc3QoYWN0aW9uLCBkYXRhID0ge30pIHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9L2FwaWA7XG4gICAgXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyOiB0aGlzLmJhc2VIZWFkZXJzLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbidcbiAgICB9O1xuXG4gICAgb3B0aW9ucy5kYXRhID0gSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb24sIC4uLmRhdGEgfSk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmV0Y2guZmV0Y2goe1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUgPj0gMjAwICYmIHJlc3BvbnNlLmNvZGUgPCAzMDApIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2VEYXRhKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBIVFRQIEVycm9yOiAke3Jlc3BvbnNlLmNvZGV9YCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgSFRUUCAke3Jlc3BvbnNlLmNvZGV9OiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlRGF0YSl9YCkpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAoZXJyb3IsIGNvZGUpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBSZXF1ZXN0IEZhaWxlZDogJHtjb2RlfWAsIGVycm9yKTtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZDogJHtlcnJvci5kYXRhfWApKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvLyDojrflj5bmjpLooYzmppxcbiAgYXN5bmMgZ2V0UmFua2luZ3MobGltaXQgPSAxMCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2dldF9yYW5raW5ncycsIHtcbiAgICAgICAgbGltaXQ6IGxpbWl0XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgcmFua2luZ3M6IHJlc3VsdC5yYW5raW5ncyB8fCBbXVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfojrflj5bmjpLooYzmppzlpLHotKU6JywgZXJyb3IpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgcmFua2luZ3M6IFtdLFxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIOS4iuaKpeeCueWHu+asoeaVsFxuICBhc3luYyBzeW5jQ2xpY2tzKHVzZXJJZCwgY2xpY2tDb3VudCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLnJlcXVlc3QoJ3N5bmNfY2xpY2tzJywge1xuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgICAgIGNsaWNrX2NvdW50OiBjbGlja0NvdW50XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S4iuaKpeeCueWHu+asoeaVsOWksei0pTonLCBlcnJvcilcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIOajgOafpeWuoOeJqeWQjeaYr+WQpuWPr+eUqFxuICBhc3luYyBjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkocGV0TmFtZSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2NoZWNrX3BldF9uYW1lJywge1xuICAgICAgICBwZXRfbmFtZTogcGV0TmFtZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCAuLi5yZXN1bHQgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5qOA5p+l5a6g54mp5ZCN5Y+v55So5oCn5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSwgaXNBdmFpbGFibGU6IGZhbHNlIH07XG4gICAgfVxuICB9XG5cbiAgLy8g5L+u5pS55a6g54mp5ZCNXG4gIGFzeW5jIHNldFBldE5hbWUodXNlcklkLCBuZXdOYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnc2V0X3BldF9uYW1lJywge1xuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgICAgIG5ld19uYW1lOiBuZXdOYW1lXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S/ruaUueWuoOeJqeWQjeWksei0pTonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cblxuICAvLyDpooTmv4DmtLvmo4Dmn6VcbiAgYXN5bmMgY2hlY2tEZXZpY2VSZWdpc3RyYXRpb24oZGV2aWNlSWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdjaGVja19yZWdpc3RyYXRpb24nLCB7XG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWRcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ+mihOa/gOa0u+ajgOafpeaIkOWKnzonLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+mihOa/gOa0u+ajgOafpeaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cblxuICAvLyDms6jlhozorr7lpIflubbojrflj5bnlKjmiLdJRFxuICBhc3luYyByZWdpc3RlckFuZEdldFVzZXJJZChkZXZpY2VJZCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ3JlZ2lzdGVyX2RldmljZV9hbmRfZ2V0X2lkJywge1xuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+azqOWGjOiuvuWkh+W5tuiOt+WPlueUqOaIt0lE5oiQ5YqfOicsIHJlc3VsdC51c2VySW5mbyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVzZXJJbmZvOiByZXN1bHQudXNlckluZm8gfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPlueUqOaIt0lE5aSx6LSlOicsIHJlc3VsdCA/IHJlc3VsdC5lcnJvciA6ICfmnKrnn6XplJnor68nKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAocmVzdWx0ID8gcmVzdWx0LmVycm9yIDogJ+acjeWKoeWZqOacqui/lOWbnuaIkOWKn+eKtuaAgScpIH07XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+azqOWGjOaIluiOt+WPlueUqOaIt0lE5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIOmqjOivgeeUqOaIt0lE5bm25oGi5aSN5pWw5o2uXG4gIGFzeW5jIHZlcmlmeVVzZXJJZEFuZFJlc3RvcmUoZGV2aWNlSWQsIHVzZXJJZCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ3ZlcmlmeV91c2VyX2lkX2FuZF9yZXN0b3JlJywge1xuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkLFxuICAgICAgICB1c2VyX2lkOiB1c2VySWRcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1c2VySW5mbzogcmVzdWx0LnVzZXJJbmZvIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IChyZXN1bHQgPyByZXN1bHQuZXJyb3IgOiAn6aqM6K+B5aSx6LSlJykgfTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign6aqM6K+B55So5oi3SUTml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBcGlTZXJ2aWNlKClcbiIsIi8vIHNyYy9jb21tb24vanMvYXV0aC1ndWFyZC5qc1xuXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XG5pbXBvcnQgQXBpU2VydmljZSBmcm9tICcuL2FwaS1zZXJ2aWNlLmpzJztcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vY29uZmlnLmpzJztcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHVzZXIgaGFzIHRoZSBuZWNlc3NhcnkgYWN0aXZhdGlvbiBhbmQgY3JlZGVudGlhbHMgdG8gYWNjZXNzIGEgbmV0d29yayBmZWF0dXJlLlxuICogVGhpcyBmdW5jdGlvbiBpbXBsZW1lbnRzIHRoZSBmb2xsb3dpbmcgbG9naWM6XG4gKiAxLiBDaGVja3MgZm9yIGEgbG9jYWwgYWN0aXZhdGlvbiBmbGFnLiBJZiBub3QgcHJlc2VudCwgcmVkaXJlY3RzIHRvIHRoZSBhY3RpdmF0aW9uIHBhZ2UuXG4gKiAyLiBJZiBsb2NhbGx5IGFjdGl2YXRlZCwgY2hlY2tzIGZvciBzdG9yZWQgdXNlciBpbmZvIHdpdGggYSBzZXJ2ZXItc2lkZSBJRC5cbiAqIDMuIElmIHVzZXIgaW5mbyBpcyBtaXNzaW5nLCBpdCBhdHRlbXB0cyB0byBmZXRjaCBpdCBmcm9tIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIHN0b3JlZCBkZXZpY2UgY29kZS5cbiAqIDQuIFJldHVybnMgdGhlIGFjY2VzcyBzdGF0dXMgYW5kIHVzZXIgaW5mby5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IEFuIG9iamVjdCB3aXRoOiB7IGNhbkFjY2VzczogYm9vbGVhbiwgdXNlckluZm86IE9iamVjdHxudWxsLCBtZXNzYWdlOiBzdHJpbmcgfVxuICovXG5hc3luYyBmdW5jdGlvbiBjaGVja05ldHdvcmtBY2Nlc3MoKSB7XG4gIHRyeSB7XG4gICAgLy8gMS4gQ2hlY2sgZm9yIGxvY2FsIGFjdGl2YXRpb25cbiAgICBjb25zdCBsb2NhbEFjdGl2YXRpb24gPSBhd2FpdCBzdG9yYWdlLmdldCh7IGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5JU19MT0NBTExZX0FDVElWQVRFRCB9KTtcbiAgICBpZiAobG9jYWxBY3RpdmF0aW9uLnZhbHVlICE9PSAndHJ1ZScpIHtcbiAgICAgIHJvdXRlci5wdXNoKHsgdXJpOiAnYWN0aXZhdGUnIH0pO1xuICAgICAgcmV0dXJuIHsgY2FuQWNjZXNzOiBmYWxzZSwgdXNlckluZm86IG51bGwsIG1lc3NhZ2U6ICforr7lpIfmnKrmv4DmtLvvvIzor7flhYjmv4DmtLvjgIInIH07XG4gICAgfVxuXG4gICAgLy8gMi4gQ2hlY2sgZm9yIGV4aXN0aW5nIFVzZXIgSURcbiAgICBjb25zdCB1c2VySW5mb1Jlc3VsdCA9IGF3YWl0IHN0b3JhZ2UuZ2V0KHsga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTyB9KTtcbiAgICBpZiAodXNlckluZm9SZXN1bHQudmFsdWUpIHtcbiAgICAgIGNvbnN0IHVzZXJJbmZvID0gSlNPTi5wYXJzZSh1c2VySW5mb1Jlc3VsdC52YWx1ZSk7XG4gICAgICBpZiAodXNlckluZm8gJiYgdXNlckluZm8uaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0F1dGhHdWFyZDogVXNlciBJRCBmb3VuZCBpbiBzdG9yYWdlLicpO1xuICAgICAgICByZXR1cm4geyBjYW5BY2Nlc3M6IHRydWUsIHVzZXJJbmZvOiB1c2VySW5mbywgbWVzc2FnZTogJ+mqjOivgemAmui/hycgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAzLiBVc2VyIElEIGlzIG1pc3NpbmcsIHRyeSB0byBmZXRjaCBpdFxuICAgIGNvbnNvbGUubG9nKCdBdXRoR3VhcmQ6IFVzZXIgSUQgbm90IGZvdW5kLCBhdHRlbXB0aW5nIHRvIGZldGNoIGZyb20gc2VydmVyLicpO1xuICAgIFxuICAgIC8vIFdlIG5lZWQgdGhlIGRldmljZSBjb2RlIHRvIGdldCB0aGUgdXNlciBJRFxuICAgIGNvbnN0IGRldmljZUNvZGVSZXN1bHQgPSBhd2FpdCBzdG9yYWdlLmdldCh7IGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5ERVZJQ0VfSUQgfSk7XG4gICAgaWYgKCFkZXZpY2VDb2RlUmVzdWx0LnZhbHVlKSB7XG4gICAgICAgIC8vIFRoaXMgY2FzZSBpcyB1bmxpa2VseSBpZiBsb2NhbCBhY3RpdmF0aW9uIHdvcmtlZCwgYnV0IGdvb2QgdG8gaGFuZGxlLlxuICAgICAgICByb3V0ZXIucHVzaCh7IHVyaTogJ2FjdGl2YXRlJyB9KTtcbiAgICAgICAgcmV0dXJuIHsgY2FuQWNjZXNzOiBmYWxzZSwgdXNlckluZm86IG51bGwsIG1lc3NhZ2U6ICfml6Dms5Xmib7liLDorr7lpIfnoIHvvIzor7fph43mlrDmv4DmtLvjgIInIH07XG4gICAgfVxuICAgIGNvbnN0IGRldmljZUNvZGUgPSBkZXZpY2VDb2RlUmVzdWx0LnZhbHVlO1xuXG4gICAgY29uc3QgYXBpUmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5yZWdpc3RlckFuZEdldFVzZXJJZChkZXZpY2VDb2RlKTtcblxuICAgIGlmIChhcGlSZXN1bHQuc3VjY2VzcyAmJiBhcGlSZXN1bHQudXNlckluZm8gJiYgKGFwaVJlc3VsdC51c2VySW5mby5pZCB8fCBhcGlSZXN1bHQudXNlckluZm8udXNlcl9udW1iZXIpKSB7XG4gICAgICBjb25zb2xlLmxvZygnQXV0aEd1YXJkOiBTdWNjZXNzZnVsbHkgZmV0Y2hlZCBuZXcgVXNlciBJRC4nKTtcbiAgICAgIFxuICAgICAgY29uc3QgdXNlckluZm9Ub1NhdmUgPSB7XG4gICAgICAgIGlkOiBhcGlSZXN1bHQudXNlckluZm8uaWQgfHwgYXBpUmVzdWx0LnVzZXJJbmZvLnVzZXJfbnVtYmVyLFxuICAgICAgICB1c2VyX251bWJlcjogYXBpUmVzdWx0LnVzZXJJbmZvLnVzZXJfbnVtYmVyLFxuICAgICAgICBwZXRfbmFtZTogYXBpUmVzdWx0LnVzZXJJbmZvLnBldF9uYW1lLFxuICAgICAgICB0b3RhbF9jbGlja3M6IGFwaVJlc3VsdC51c2VySW5mby50b3RhbF9jbGlja3MgfHwgMFxuICAgICAgfTtcblxuICAgICAgLy8gU2F2ZSB0aGUgbmV3bHkgZmV0Y2hlZCB1c2VyIGluZm9cbiAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KHsga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTywgdmFsdWU6IEpTT04uc3RyaW5naWZ5KHVzZXJJbmZvVG9TYXZlKSB9KTtcbiAgICAgIHJldHVybiB7IGNhbkFjY2VzczogdHJ1ZSwgdXNlckluZm86IHVzZXJJbmZvVG9TYXZlLCBtZXNzYWdlOiAn55So5oi3SUTojrflj5bmiJDlip8nIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdBdXRoR3VhcmQ6IEZhaWxlZCB0byBmZXRjaCBVc2VyIElELicpO1xuICAgICAgcmV0dXJuIHsgY2FuQWNjZXNzOiBmYWxzZSwgdXNlckluZm86IG51bGwsIG1lc3NhZ2U6ICfojrflj5bnlKjmiLdJROWksei0pe+8jOivt+ajgOafpee9kee7nOWQjumHjeivleOAgicgfTtcbiAgICB9XG5cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0F1dGhHdWFyZDogRXJyb3IgZHVyaW5nIGNoZWNrTmV0d29ya0FjY2VzcycsIGUpO1xuICAgIHJldHVybiB7IGNhbkFjY2VzczogZmFsc2UsIHVzZXJJbmZvOiBudWxsLCBtZXNzYWdlOiBg5Y+R55Sf6ZSZ6K+vOiAke2UubWVzc2FnZX1gIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjaGVja05ldHdvcmtBY2Nlc3Ncbn07XG4iLCIvLyBjb25maWcuanNcbmV4cG9ydCBjb25zdCBDT05GSUcgPSB7XG4gIC8vIOS4rei9rOacjeWKoeWZqOmFjee9rlxuICBTRVJWRVI6IHtcbiAgICBCQVNFX1VSTDogJ2h0dHA6Ly8xMDMuMjA1LjI1My44NzoyMjIwNydcbiAgfSxcbiAgXG4gIC8vIOazqOaEj++8mlVSTCDliY3nvIDlnKggYXBpLXNlcnZpY2UuanMg5Lit56Gs57yW56CB5LqGXG4gIC8vIOi/memHjOS4jeWGjemcgOimgemFjee9rlxuICBcbiAgLy8g5bqU55So6YWN572uXG4gIEFQUDoge1xuICAgIE5BTUU6ICdCYW5kUGV0JyxcbiAgICBWRVJTSU9OOiAnMC4zLjUgQWxwaGEnLFxuICAgIE1BWF9DTElDS1NfUEVSX0JBVENIOiA1MCxcbiAgICBTWU5DX0lOVEVSVkFMOiAzMDAwMDAsXG4gICAgUkFOS19MSU1JVDogMTBcbiAgfSxcbiAgXG4gIC8vIOWtmOWCqOmUruWQjVxuICBTVE9SQUdFX0tFWVM6IHtcbiAgICBERVZJQ0VfSUQ6ICdkZXZpY2VfaWQnLFxuICAgIFVTRVJfSU5GTzogJ3VzZXJfaW5mbycsXG4gICAgUEVORElOR19DTElDS1M6ICdwZW5kaW5nX2NsaWNrcycsXG4gICAgTEFTVF9TWU5DX1RJTUU6ICdsYXN0X3N5bmNfdGltZScsXG4gICAgVE9UQUxfQ0xJQ0tTOiAndG90YWxfY2xpY2tzJ1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS42LjhcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNi44XCI7IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicGFnZS1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi9iYWNrLnBuZ1wiIGNsYXNzPVwicGFnZS1oZWFkZXItYmFjay1idXR0b25cIiBvbmNsaWNrPVwiZ29CYWNrXCI+PC9pbWFnZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZS10aW1lXCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLXRpbWUtZGlzcGxheVwiPnt7IHRpbWUgfX08L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLWhlYWRlci10aXRsZVwiPuaOkuihjOamnDwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50XCI+XG4gICAgICA8bGlzdCBjbGFzcz1cImxlYWRlcmJvYXJkLWxpc3RcIiBpZj1cInt7IHJhbmtpbmdzLmxlbmd0aCA+IDAgfX1cIj5cbiAgICAgICAgPGxpc3QtaXRlbSBmb3I9XCJ7e3JhbmtpbmdzfX1cIiBjbGFzcz1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYW5rLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJyYW5rLW51bWJlclwiPnt7JGlkeCArIDF9fTwvdGV4dD5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicmFuay1uYW1lXCI+e3skaXRlbS5uYW1lfX08L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJyYW5rLXNjb3JlXCI+e3skaXRlbS5zY29yZX19PC90ZXh0PlxuICAgICAgICA8L2xpc3QtaXRlbT5cbiAgICAgIDwvbGlzdD5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0dXMtY29udGFpbmVyXCIgaWY9XCJ7eyByYW5raW5ncy5sZW5ndGggPT09IDAgJiYgc3RhdHVzTWVzc2FnZSB9fVwiPlxuICAgICAgICA8dGV4dCBjbGFzcz1cInN0YXR1cy10ZXh0XCI+e3sgc3RhdHVzTWVzc2FnZSB9fTwvdGV4dD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAucGFnZS10aW1lLWRpc3BsYXkge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUU5MEZGO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5wYWdlLWhlYWRlci1iYWNrLWFycm93IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cbiAgLmhlYWRlci10aXRsZS10aW1lIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnBhZ2UtY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAubGVhZGVyYm9hcmQtbGlzdCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLmxpc3QtaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7IC8qIEV2ZW4gZGFya2VyIGdyZXkgKi9cbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5yYW5rLWNvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAucmFuay1udW1iZXIge1xuICAgIGNvbG9yOiAjQUFBQUFBO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbiAgLnJhbmstbmFtZSB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG4gIC5yYW5rLXNjb3JlIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgLnN0YXR1cy1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIC5zdGF0dXMtdGV4dCB7XG4gICAgY29sb3I6ICNBQUFBQUE7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XG4gIGltcG9ydCBBcGlTZXJ2aWNlIGZyb20gJy4uL2NvbW1vbi9qcy9hcGktc2VydmljZS5qcyc7XG4gIGltcG9ydCBhdXRoR3VhcmQgZnJvbSAnLi4vY29tbW9uL2pzL2F1dGgtZ3VhcmQuanMnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhOiB7XG4gICAgICB0aW1lOiAnMDA6MDAnLFxuICAgICAgcmFua2luZ3M6IFtdLFxuICAgICAgc3RhdHVzTWVzc2FnZTogJ+ato+WcqOWKoOi9vS4uLidcbiAgICB9LFxuICAgIG9uSW5pdCgpIHtcbiAgICAgIHRoaXMudXBkYXRlVGltZSgpO1xuICAgICAgc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVUaW1lLCA1MDAwKTtcbiAgICAgIHRoaXMuZmV0Y2hSYW5raW5ncygpO1xuICAgIH0sXG4gICAgdXBkYXRlVGltZSgpIHtcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBob3VycyA9IG5vdy5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgIHRoaXMudGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICB9LFxuICAgIGFzeW5jIGZldGNoUmFua2luZ3MoKSB7XG4gICAgICBjb25zdCBndWFyZFJlc3VsdCA9IGF3YWl0IGF1dGhHdWFyZC5jaGVja05ldHdvcmtBY2Nlc3MoKTtcbiAgICAgIGlmICghZ3VhcmRSZXN1bHQuY2FuQWNjZXNzKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IGd1YXJkUmVzdWx0Lm1lc3NhZ2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgZ3VhcmQgcGFzc2VzLCB1c2VySW5mbyBpcyBhdmFpbGFibGUgaW4gZ3VhcmRSZXN1bHQudXNlckluZm8sIHRob3VnaCBnZXRSYW5raW5ncyBkb2Vzbid0IG5lZWQgaXQuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLmdldFJhbmtpbmdzKCk7XG4gICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MgJiYgcmVzdWx0LnJhbmtpbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5yYW5raW5ncyA9IHJlc3VsdC5yYW5raW5ncztcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gJyc7IC8vIENsZWFyIHN0YXR1cyBvbiBzdWNjZXNzXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5zdWNjZXNzICYmIHJlc3VsdC5yYW5raW5ncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gJ+aOkuihjOamnOS4iui/mOayoeacieS6uu+8jOW/q+WOu+eCueWHu+WQp++8gSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHJhbmtpbmdzOlwiLCByZXN1bHQuZXJyb3IpO1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn5peg5rOV5Yqg6L295o6S6KGM5qac77yM6K+356iN5ZCO6YeN6K+V44CCJztcbiAgICAgIH1cbiAgICB9LFxuICAgIGdvQmFjaygpIHtcbiAgICAgIHJvdXRlci5iYWNrKCk7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfc3lzdGVtMiIsIl9zeXN0ZW0zIiwiX3N5c3RlbTQiLCJfY29uZmlnIiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIm93bktleXMiLCJyIiwidCIsIk9iamVjdCIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJvIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5IiwidmFsdWUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImkiLCJfdG9QcmltaXRpdmUiLCJTeW1ib2wiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJBcGlTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJiYXNlVXJsIiwiQ09ORklHIiwiU0VSVkVSIiwiQkFTRV9VUkwiLCJiYXNlSGVhZGVycyIsInJlcXVlc3QiLCJhY3Rpb24iLCJkYXRhIiwidXJsIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlciIsInJlc3BvbnNlVHlwZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwic3VjY2VzcyIsInJlc3BvbnNlIiwicmVzcG9uc2VEYXRhIiwiY29kZSIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiZmFpbCIsImdldFJhbmtpbmdzIiwibGltaXQiLCJyZXN1bHQiLCJyYW5raW5ncyIsIm1lc3NhZ2UiLCJzeW5jQ2xpY2tzIiwidXNlcklkIiwiY2xpY2tDb3VudCIsInVzZXJfaWQiLCJjbGlja19jb3VudCIsImNoZWNrUGV0TmFtZUF2YWlsYWJpbGl0eSIsInBldE5hbWUiLCJwZXRfbmFtZSIsImlzQXZhaWxhYmxlIiwic2V0UGV0TmFtZSIsIm5ld05hbWUiLCJuZXdfbmFtZSIsImNoZWNrRGV2aWNlUmVnaXN0cmF0aW9uIiwiZGV2aWNlSWQiLCJkZXZpY2VfaWQiLCJsb2ciLCJyZWdpc3RlckFuZEdldFVzZXJJZCIsInVzZXJJbmZvIiwidmVyaWZ5VXNlcklkQW5kUmVzdG9yZSIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIl9hcGlTZXJ2aWNlIiwiY2hlY2tOZXR3b3JrQWNjZXNzIiwibG9jYWxBY3RpdmF0aW9uIiwiZ2V0Iiwia2V5IiwiU1RPUkFHRV9LRVlTIiwiSVNfTE9DQUxMWV9BQ1RJVkFURUQiLCJ1cmkiLCJjYW5BY2Nlc3MiLCJ1c2VySW5mb1Jlc3VsdCIsIlVTRVJfSU5GTyIsInBhcnNlIiwiaWQiLCJkZXZpY2VDb2RlUmVzdWx0IiwiREVWSUNFX0lEIiwiZGV2aWNlQ29kZSIsImFwaVJlc3VsdCIsInVzZXJfbnVtYmVyIiwidXNlckluZm9Ub1NhdmUiLCJ0b3RhbF9jbGlja3MiLCJzZXQiLCJBUFAiLCJOQU1FIiwiVkVSU0lPTiIsIk1BWF9DTElDS1NfUEVSX0JBVENIIiwiU1lOQ19JTlRFUlZBTCIsIlJBTktfTElNSVQiLCJQRU5ESU5HX0NMSUNLUyIsIkxBU1RfU1lOQ19USU1FIiwiVE9UQUxfQ0xJQ0tTIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl9hdXRoR3VhcmQiLCJ0aW1lIiwic3RhdHVzTWVzc2FnZSIsIm9uSW5pdCIsInVwZGF0ZVRpbWUiLCJzZXRJbnRlcnZhbCIsImZldGNoUmFua2luZ3MiLCJub3ciLCJEYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImd1YXJkUmVzdWx0IiwiYXV0aEd1YXJkIiwiZ29CYWNrIiwicm91dGVyIiwiYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQ0EsSUFBQUEsVUFBQUMsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUMsV0FBQUYsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUUsV0FBQUgsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUcsV0FBQUosdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUksVUFBQUMsb0JBQUE7d0JBQXFDLFNBQUFOLHVCQUFBTyxDQUFBOzRCQUFBLE9BQUFBLEtBQUFBLEVBQUFDLFVBQUEsR0FBQUQsSUFBQTtnQ0FBQUUsU0FBQUY7NEJBQUE7d0JBQUE7d0JBQUEsU0FBQUcsUUFBQUgsQ0FBQSxFQUFBSSxDQUFBOzRCQUFBLElBQUFDLElBQUFDLE9BQUFDLElBQUEsQ0FBQVA7NEJBQUEsSUFBQU0sT0FBQUUscUJBQUE7Z0NBQUEsSUFBQUMsSUFBQUgsT0FBQUUscUJBQUEsQ0FBQVI7Z0NBQUFJLEtBQUFLLENBQUFBLElBQUFBLEVBQUFDLE1BQUEsVUFBQU4sQ0FBQTtvQ0FBQSxPQUFBRSxPQUFBSyx3QkFBQSxDQUFBWCxHQUFBSSxHQUFBUSxVQUFBO2dDQUFBLEtBQUFQ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