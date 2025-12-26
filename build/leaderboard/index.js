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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZGVyYm9hcmRcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9hdXRoLWd1YXJkLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9sZWFkZXJib2FyZC9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcGktc2VydmljZS5qc1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnQHN5c3RlbS5mZXRjaCc7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xyXG5pbXBvcnQgcHJvbXB0IGZyb20gJ0BzeXN0ZW0ucHJvbXB0JztcclxuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25maWcuanMnO1xyXG5cclxuY2xhc3MgQXBpU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyDkuK3ovazmnI3liqHlmajlnLDlnYAgLSDku44gY29uZmlnLmpzIOivu+WPllxyXG4gICAgdGhpcy5iYXNlVXJsID0gQ09ORklHLlNFUlZFUi5CQVNFX1VSTDtcclxuICAgIHRoaXMuYmFzZUhlYWRlcnMgPSB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDpgJrnlKjor7fmsYLmlrnms5UgLSDpgJrov4fkuK3ovazmnI3liqHlmajovazlj5FcclxuICBhc3luYyByZXF1ZXN0KGFjdGlvbiwgZGF0YSA9IHt9KSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9L2FwaWA7XHJcbiAgICBcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIHVybCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcjogdGhpcy5iYXNlSGVhZGVycyxcclxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbidcclxuICAgIH07XHJcblxyXG4gICAgb3B0aW9ucy5kYXRhID0gSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb24sIC4uLmRhdGEgfSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZmV0Y2guZmV0Y2goe1xyXG4gICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xyXG5cclxuICAgICAgICAgIGlmIChyZXNwb25zZS5jb2RlID49IDIwMCAmJiByZXNwb25zZS5jb2RlIDwgMzAwKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2VEYXRhKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgSFRUUCBFcnJvcjogJHtyZXNwb25zZS5jb2RlfWAsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgSFRUUCAke3Jlc3BvbnNlLmNvZGV9OiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlRGF0YSl9YCkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiAoZXJyb3IsIGNvZGUpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFJlcXVlc3QgRmFpbGVkOiAke2NvZGV9YCwgZXJyb3IpO1xyXG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgUmVxdWVzdCBmYWlsZWQ6ICR7ZXJyb3IuZGF0YX1gKSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8g6I635Y+W5o6S6KGM5qacXHJcbiAgYXN5bmMgZ2V0UmFua2luZ3MobGltaXQgPSAxMCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdnZXRfcmFua2luZ3MnLCB7XHJcbiAgICAgICAgbGltaXQ6IGxpbWl0XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICByYW5raW5nczogcmVzdWx0LnJhbmtpbmdzIHx8IFtdXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaOkuihjOamnOWksei0pTonLCBlcnJvcilcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICByYW5raW5nczogW10sXHJcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5LiK5oql54K55Ye75qyh5pWwXHJcbiAgYXN5bmMgc3luY0NsaWNrcyh1c2VySWQsIGNsaWNrQ291bnQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHRoaXMucmVxdWVzdCgnc3luY19jbGlja3MnLCB7XHJcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxyXG4gICAgICAgIGNsaWNrX2NvdW50OiBjbGlja0NvdW50XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5LiK5oql54K55Ye75qyh5pWw5aSx6LSlOicsIGVycm9yKVxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOajgOafpeWuoOeJqeWQjeaYr+WQpuWPr+eUqFxyXG4gIGFzeW5jIGNoZWNrUGV0TmFtZUF2YWlsYWJpbGl0eShwZXROYW1lKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2NoZWNrX3BldF9uYW1lJywge1xyXG4gICAgICAgIHBldF9uYW1lOiBwZXROYW1lXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCAuLi5yZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+ajgOafpeWuoOeJqeWQjeWPr+eUqOaAp+aXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSwgaXNBdmFpbGFibGU6IGZhbHNlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDkv67mlLnlrqDnianlkI1cclxuICBhc3luYyBzZXRQZXROYW1lKHVzZXJJZCwgbmV3TmFtZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdzZXRfcGV0X25hbWUnLCB7XHJcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxyXG4gICAgICAgIG5ld19uYW1lOiBuZXdOYW1lXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5L+u5pS55a6g54mp5ZCN5aSx6LSlOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDpooTmv4DmtLvmo4Dmn6VcclxuICBhc3luYyBjaGVja0RldmljZVJlZ2lzdHJhdGlvbihkZXZpY2VJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdjaGVja19yZWdpc3RyYXRpb24nLCB7XHJcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coJ+mihOa/gOa0u+ajgOafpeaIkOWKnzonLCByZXN1bHQpO1xyXG4gICAgICAvLyDnm7TmjqXov5Tlm57mnI3liqHlmajnmoTljp/lp4vlk43lupTvvIxVSeWxguacn+acm+eahOaYr+aJgeW5s+e7k+aehFxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign6aKE5r+A5rS75qOA5p+l5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcclxuICAgICAgLy8g6L+U5Zue5LiA5Liq5YW85a6555qE6ZSZ6K+v5a+56LGh77yM6YG/5YWNVUnlsYLltKnmuoNcclxuICAgICAgcmV0dXJuIHsgaXNfcmVnaXN0ZXJlZDogZmFsc2UsIGNhbl9hdXRvX2FjdGl2YXRlOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOazqOWGjOiuvuWkh+W5tuiOt+WPlueUqOaIt0lEXHJcbiAgYXN5bmMgcmVnaXN0ZXJBbmRHZXRVc2VySWQoZGV2aWNlSWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIFBhc3MgdGhlIHNlcnZlciByZXNwb25zZSBkaXJlY3RseSB0byB0aGUgVUkgbGF5ZXJcclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucmVxdWVzdCgncmVnaXN0ZXJfZGV2aWNlX2FuZF9nZXRfaWQnLCB7XHJcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+azqOWGjOaIluiOt+WPlueUqOaIt0lE5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcclxuICAgICAgLy8gUmV0dXJuIGEgY29tcGF0aWJsZSBlcnJvciBvYmplY3RcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOmqjOivgeeUqOaIt0lE5bm25oGi5aSN5pWw5o2uXHJcbiAgYXN5bmMgdmVyaWZ5VXNlcklkQW5kUmVzdG9yZShkZXZpY2VJZCwgdXNlcklkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBQYXNzIHRoZSBzZXJ2ZXIgcmVzcG9uc2UgZGlyZWN0bHkgdG8gdGhlIFVJIGxheWVyXHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3QoJ3ZlcmlmeV91c2VyX2lkX2FuZF9yZXN0b3JlJywge1xyXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWQsXHJcbiAgICAgICAgdXNlcl9pZDogdXNlcklkXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign6aqM6K+B55So5oi3SUTml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xyXG4gICAgICAvLyBSZXR1cm4gYSBjb21wYXRpYmxlIGVycm9yIG9iamVjdFxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwaVNlcnZpY2UoKVxyXG4iLCIvLyBzcmMvY29tbW9uL2pzL2F1dGgtZ3VhcmQuanNcclxuXHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xyXG5pbXBvcnQgQXBpU2VydmljZSBmcm9tICcuL2FwaS1zZXJ2aWNlLmpzJztcclxuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25maWcuanMnO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiB0aGUgdXNlciBoYXMgdGhlIG5lY2Vzc2FyeSBhY3RpdmF0aW9uIGFuZCBjcmVkZW50aWFscyB0byBhY2Nlc3MgYSBuZXR3b3JrIGZlYXR1cmUuXHJcbiAqIFRoaXMgZnVuY3Rpb24gaW1wbGVtZW50cyB0aGUgZm9sbG93aW5nIGxvZ2ljOlxyXG4gKiAxLiBDaGVja3MgZm9yIGEgbG9jYWwgYWN0aXZhdGlvbiBmbGFnLiBJZiBub3QgcHJlc2VudCwgcmVkaXJlY3RzIHRvIHRoZSBhY3RpdmF0aW9uIHBhZ2UuXHJcbiAqIDIuIElmIGxvY2FsbHkgYWN0aXZhdGVkLCBjaGVja3MgZm9yIHN0b3JlZCB1c2VyIGluZm8gd2l0aCBhIHNlcnZlci1zaWRlIElELlxyXG4gKiAzLiBJZiB1c2VyIGluZm8gaXMgbWlzc2luZywgaXQgYXR0ZW1wdHMgdG8gZmV0Y2ggaXQgZnJvbSB0aGUgc2VydmVyIHVzaW5nIHRoZSBzdG9yZWQgZGV2aWNlIGNvZGUuXHJcbiAqIDQuIFJldHVybnMgdGhlIGFjY2VzcyBzdGF0dXMgYW5kIHVzZXIgaW5mby5cclxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gQW4gb2JqZWN0IHdpdGg6IHsgY2FuQWNjZXNzOiBib29sZWFuLCB1c2VySW5mbzogT2JqZWN0fG51bGwsIG1lc3NhZ2U6IHN0cmluZyB9XHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBjaGVja05ldHdvcmtBY2Nlc3MoKSB7XHJcbiAgLy8gSGVscGVyIHRvIHByb21pc2lmeSBzdG9yYWdlLmdldCAtIGl0IHJlc29sdmVzIHdpdGggdGhlIFJBVyBWQUxVRS5cclxuICBjb25zdCBfcHJvbWlzaWZpZWRTdG9yYWdlR2V0ID0gKGtleSkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHN0b3JhZ2UuZ2V0KHtcclxuICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAvLyBUaGUgJ2RhdGEnIHBhcmFtZXRlciBJUyB0aGUgdmFsdWUuIENhbiBiZSB1bmRlZmluZWQgaWYgbm90IGZvdW5kLlxyXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiByZXNvbHZlKGRhdGEpLFxyXG4gICAgICAgIGZhaWw6ICgpID0+IHJlc29sdmUobnVsbCkgLy8gUmVzb2x2ZSB3aXRoIG51bGwgb24gYW55IGZhaWx1cmUuXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gSGVscGVyIHRvIHByb21pc2lmeSBzdG9yYWdlLnNldFxyXG4gIGNvbnN0IF9wcm9taXNpZmllZFN0b3JhZ2VTZXQgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc3RvcmFnZS5zZXQoe1xyXG4gICAgICAgIGtleToga2V5LFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgIGZhaWw6IChlcnIsIGNvZGUpID0+IHJlamVjdChuZXcgRXJyb3IoYFN0b3JhZ2Uuc2V0IGZhaWxlZCBmb3Iga2V5ICcke2tleX0nIHdpdGggY29kZSAke2NvZGV9OiAke2Vycn1gKSlcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gMS4gQ2hlY2sgZm9yIGxvY2FsIGFjdGl2YXRpb24gZmxhZ1xyXG4gICAgY29uc3QgbG9jYWxBY3RpdmF0aW9uVmFsdWUgPSBhd2FpdCBfcHJvbWlzaWZpZWRTdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuSVNfTE9DQUxMWV9BQ1RJVkFURUQpO1xyXG4gICAgaWYgKGxvY2FsQWN0aXZhdGlvblZhbHVlICE9PSAndHJ1ZScpIHtcclxuICAgICAgcm91dGVyLnB1c2goeyB1cmk6ICdhY3RpdmF0ZScgfSk7XHJcbiAgICAgIHJldHVybiB7IGNhbkFjY2VzczogZmFsc2UsIHVzZXJJbmZvOiBudWxsLCBtZXNzYWdlOiAn6K6+5aSH5pyq5r+A5rS777yM6K+35YWI5r+A5rS744CCJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDIuIENoZWNrIGZvciBleGlzdGluZyBVc2VyIEluZm8gaW4gc3RvcmFnZVxyXG4gICAgY29uc3QgdXNlckluZm9KU09OID0gYXdhaXQgX3Byb21pc2lmaWVkU3RvcmFnZUdldChDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTyk7XHJcbiAgICBpZiAodXNlckluZm9KU09OKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSBKU09OLnBhcnNlKHVzZXJJbmZvSlNPTik7XHJcbiAgICAgICAgaWYgKHVzZXJJbmZvICYmIHVzZXJJbmZvLmlkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aEd1YXJkOiBVc2VyIElEIGZvdW5kIGluIHN0b3JhZ2UuJyk7XHJcbiAgICAgICAgICByZXR1cm4geyBjYW5BY2Nlc3M6IHRydWUsIHVzZXJJbmZvOiB1c2VySW5mbywgbWVzc2FnZTogJ+mqjOivgemAmui/hycgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2goZSkgeyAvKiBNYWxmb3JtZWQgSlNPTiwgcHJvY2VlZCB0byBmZXRjaCBmcm9tIHNlcnZlciAqLyB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMy4gVXNlciBJbmZvIGlzIG1pc3Npbmcgb3IgbWFsZm9ybWVkLCB0cnkgdG8gZmV0Y2ggaXQgZnJvbSBzZXJ2ZXJcclxuICAgIGNvbnNvbGUubG9nKCdBdXRoR3VhcmQ6IFVzZXIgSW5mbyBub3QgZm91bmQgaW4gc3RvcmFnZSwgYXR0ZW1wdGluZyB0byByZWNvdmVyIGZyb20gc2VydmVyLicpO1xyXG4gICAgXHJcbiAgICBjb25zdCBkZXZpY2VDb2RlID0gYXdhaXQgX3Byb21pc2lmaWVkU3RvcmFnZUdldChDT05GSUcuU1RPUkFHRV9LRVlTLkRFVklDRV9JRCk7XHJcbiAgICBpZiAoIWRldmljZUNvZGUpIHtcclxuICAgICAgICByb3V0ZXIucHVzaCh7IHVyaTogJ2FjdGl2YXRlJyB9KTtcclxuICAgICAgICByZXR1cm4geyBjYW5BY2Nlc3M6IGZhbHNlLCB1c2VySW5mbzogbnVsbCwgbWVzc2FnZTogJ+aXoOazleaJvuWIsOiuvuWkh+egge+8jOivt+mHjeaWsOa/gOa0u+OAgicgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2UgY2hlY2tEZXZpY2VSZWdpc3RyYXRpb24gdG8gZ2V0IGV4aXN0aW5nIHVzZXIgZGF0YVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5jaGVja0RldmljZVJlZ2lzdHJhdGlvbihkZXZpY2VDb2RlKTtcclxuXHJcbiAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5pc19yZWdpc3RlcmVkICYmIHJlc3VsdC51c2VySW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZygnQXV0aEd1YXJkOiBTdWNjZXNzZnVsbHkgcmVjb3ZlcmVkIFVzZXIgSW5mbyBmcm9tIHNlcnZlci4nKTtcclxuICAgICAgYXdhaXQgX3Byb21pc2lmaWVkU3RvcmFnZVNldChDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LnVzZXJJbmZvKSk7XHJcbiAgICAgIHJldHVybiB7IGNhbkFjY2VzczogdHJ1ZSwgdXNlckluZm86IHJlc3VsdC51c2VySW5mbywgbWVzc2FnZTogJ+eUqOaIt0lE5oGi5aSN5oiQ5YqfJyB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ0F1dGhHdWFyZDogRmFpbGVkIHRvIHJlY292ZXIgVXNlciBJbmZvLCBkZXZpY2UgbWF5IG5vdCBiZSByZWdpc3RlcmVkIG9uIHNlcnZlci4nKTtcclxuICAgICAgcm91dGVyLnB1c2goeyB1cmk6ICdhY3RpdmF0ZScgfSk7IC8vIEZvcmNlIHJlLWFjdGl2YXRpb25cclxuICAgICAgcmV0dXJuIHsgY2FuQWNjZXNzOiBmYWxzZSwgdXNlckluZm86IG51bGwsIG1lc3NhZ2U6ICfml6Dms5XmgaLlpI3nlKjmiLfkv6Hmga/vvIzor7fph43mlrDmv4DmtLvjgIInIH07XHJcbiAgICB9XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0F1dGhHdWFyZDogRXJyb3IgZHVyaW5nIGNoZWNrTmV0d29ya0FjY2VzcycsIGUpO1xyXG4gICAgcm91dGVyLnB1c2goeyB1cmk6ICdhY3RpdmF0ZScgfSk7IC8vIE9uIGFueSBjYXRhc3Ryb3BoaWMgZXJyb3IsIGRlZmF1bHQgdG8gcmUtYWN0aXZhdGlvblxyXG4gICAgcmV0dXJuIHsgY2FuQWNjZXNzOiBmYWxzZSwgdXNlckluZm86IG51bGwsIG1lc3NhZ2U6IGDlj5HnlJ/oh7Tlkb3plJnor686ICR7ZS5tZXNzYWdlfWAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjaGVja05ldHdvcmtBY2Nlc3NcclxufTtcclxuIiwiLy8gY29uZmlnLmpzXHJcbmV4cG9ydCBjb25zdCBDT05GSUcgPSB7XHJcbiAgLy8g5Lit6L2s5pyN5Yqh5Zmo6YWN572uXHJcbiAgU0VSVkVSOiB7XHJcbiAgICBCQVNFX1VSTDogJ2h0dHA6Ly8xMDMuMjA1LjI1My44NzoyMjIwNydcclxuICB9LFxyXG4gIFxyXG4gIC8vIOazqOaEj++8mlVSTCDliY3nvIDlnKggYXBpLXNlcnZpY2UuanMg5Lit56Gs57yW56CB5LqGXHJcbiAgLy8g6L+Z6YeM5LiN5YaN6ZyA6KaB6YWN572uXHJcbiAgXHJcbiAgLy8g5bqU55So6YWN572uXHJcbiAgQVBQOiB7XHJcbiAgICBOQU1FOiAnQmFuZFBldCcsXHJcbiAgICBWRVJTSU9OOiAnMC4zLjUgQWxwaGEnLFxyXG4gICAgTUFYX0NMSUNLU19QRVJfQkFUQ0g6IDUwLFxyXG4gICAgU1lOQ19JTlRFUlZBTDogMzAwMDAwLFxyXG4gICAgUkFOS19MSU1JVDogMTBcclxuICB9LFxyXG4gIFxyXG4gIC8vIOWtmOWCqOmUruWQjVxyXG4gIFNUT1JBR0VfS0VZUzoge1xyXG4gICAgREVWSUNFX0lEOiAnZGV2aWNlX2lkJyxcclxuICAgIElTX0xPQ0FMTFlfQUNUSVZBVEVEOiAnaXNfbG9jYWxseV9hY3RpdmF0ZWQnLFxyXG4gICAgVVNFUl9JTkZPOiAndXNlcl9pbmZvJyxcclxuICAgIFBFTkRJTkdfQ0xJQ0tTOiAncGVuZGluZ19jbGlja3MnLFxyXG4gICAgTEFTVF9TWU5DX1RJTUU6ICdsYXN0X3N5bmNfdGltZScsXHJcbiAgICBUT1RBTF9DTElDS1M6ICd0b3RhbF9jbGlja3MnXHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjYuOFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS42LjhcIjsiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXItY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlclwiPlxyXG4gICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vYmFjay5wbmdcIiBjbGFzcz1cInBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uXCIgb25jbGljaz1cImdvQmFja1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZS10aW1lXCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtdGltZS1kaXNwbGF5XCI+e3sgdGltZSB9fTwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicGFnZS1oZWFkZXItdGl0bGVcIj7mjpLooYzmppw8L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50XCI+XHJcbiAgICAgIDxsaXN0IGNsYXNzPVwibGVhZGVyYm9hcmQtbGlzdFwiIGlmPVwie3sgcmFua2luZ3MubGVuZ3RoID4gMCB9fVwiPlxyXG4gICAgICAgIDxsaXN0LWl0ZW0gZm9yPVwie3tyYW5raW5nc319XCIgY2xhc3M9XCJsaXN0LWl0ZW1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYW5rLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJhbmstbnVtYmVyXCI+e3skaWR4ICsgMX19PC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJhbmstbmFtZVwiPnt7JGl0ZW0ubmFtZX19PC90ZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInJhbmstc2NvcmVcIj57eyRpdGVtLnNjb3JlfX08L3RleHQ+XHJcbiAgICAgICAgPC9saXN0LWl0ZW0+XHJcbiAgICAgIDwvbGlzdD5cclxuICAgICAgPGRpdiBjbGFzcz1cInN0YXR1cy1jb250YWluZXJcIiBpZj1cInt7IHJhbmtpbmdzLmxlbmd0aCA9PT0gMCAmJiBzdGF0dXNNZXNzYWdlIH19XCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJzdGF0dXMtdGV4dFwiPnt7IHN0YXR1c01lc3NhZ2UgfX08L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGU+XHJcbiAgLnBhZ2UtY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAucGFnZS1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLnBhZ2UtdGltZS1kaXNwbGF5IHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIH1cclxuICAucGFnZS1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcbiAgLnBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTkwRkY7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5wYWdlLWhlYWRlci1iYWNrLWFycm93IHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxuICAucGFnZS1oZWFkZXItdGl0bGUge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG4gIC5oZWFkZXItdGl0bGUtdGltZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLnBhZ2UtY29udGVudCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAubGVhZGVyYm9hcmQtbGlzdCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gIH1cclxuICAubGlzdC1pdGVtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTsgLyogRXZlbiBkYXJrZXIgZ3JleSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAucmFuay1jb250YWluZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLnJhbmstbnVtYmVyIHtcclxuICAgIGNvbG9yOiAjQUFBQUFBO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICAucmFuay1uYW1lIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICAucmFuay1zY29yZSB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgLnN0YXR1cy1jb250YWluZXIge1xyXG4gICAgZmxleDogMTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIC5zdGF0dXMtdGV4dCB7XHJcbiAgICBjb2xvcjogI0FBQUFBQTtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xyXG4gIGltcG9ydCBBcGlTZXJ2aWNlIGZyb20gJy4uL2NvbW1vbi9qcy9hcGktc2VydmljZS5qcyc7XHJcbiAgaW1wb3J0IGF1dGhHdWFyZCBmcm9tICcuLi9jb21tb24vanMvYXV0aC1ndWFyZC5qcyc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGltZTogJzAwOjAwJyxcclxuICAgICAgcmFua2luZ3M6IFtdLFxyXG4gICAgICBzdGF0dXNNZXNzYWdlOiAn5q2j5Zyo5Yqg6L29Li4uJ1xyXG4gICAgfSxcclxuICAgIG9uSW5pdCgpIHtcclxuICAgICAgdGhpcy51cGRhdGVUaW1lKCk7XHJcbiAgICAgIHNldEludGVydmFsKHRoaXMudXBkYXRlVGltZSwgNTAwMCk7XHJcbiAgICAgIHRoaXMuZmV0Y2hSYW5raW5ncygpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZVRpbWUoKSB7XHJcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICBjb25zdCBtaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgIHRoaXMudGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9YDtcclxuICAgIH0sXHJcbiAgICBhc3luYyBmZXRjaFJhbmtpbmdzKCkge1xyXG4gICAgICBjb25zdCBndWFyZFJlc3VsdCA9IGF3YWl0IGF1dGhHdWFyZC5jaGVja05ldHdvcmtBY2Nlc3MoKTtcclxuICAgICAgaWYgKCFndWFyZFJlc3VsdC5jYW5BY2Nlc3MpIHtcclxuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSBndWFyZFJlc3VsdC5tZXNzYWdlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gSWYgZ3VhcmQgcGFzc2VzLCB1c2VySW5mbyBpcyBhdmFpbGFibGUgaW4gZ3VhcmRSZXN1bHQudXNlckluZm8sIHRob3VnaCBnZXRSYW5raW5ncyBkb2Vzbid0IG5lZWQgaXQuXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2UuZ2V0UmFua2luZ3MoKTtcclxuICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzICYmIHJlc3VsdC5yYW5raW5ncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5yYW5raW5ncyA9IHJlc3VsdC5yYW5raW5ncztcclxuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAnJzsgLy8gQ2xlYXIgc3RhdHVzIG9uIHN1Y2Nlc3NcclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuc3VjY2VzcyAmJiByZXN1bHQucmFua2luZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gJ+aOkuihjOamnOS4iui/mOayoeacieS6uu+8jOW/q+WOu+eCueWHu+WQp++8gSc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCByYW5raW5nczpcIiwgcmVzdWx0LmVycm9yKTtcclxuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn5peg5rOV5Yqg6L295o6S6KGM5qac77yM6K+356iN5ZCO6YeN6K+V44CCJztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdvQmFjaygpIHtcclxuICAgICAgcm91dGVyLmJhY2soKTtcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iXSwibmFtZXMiOlsiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX3N5c3RlbTIiLCJfc3lzdGVtMyIsIl9zeXN0ZW00IiwiX2NvbmZpZyIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJvd25LZXlzIiwiciIsInQiLCJPYmplY3QiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsInZhbHVlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiQXBpU2VydmljZSIsImNvbnN0cnVjdG9yIiwiYmFzZVVybCIsIkNPTkZJRyIsIlNFUlZFUiIsIkJBU0VfVVJMIiwiYmFzZUhlYWRlcnMiLCJyZXF1ZXN0IiwiYWN0aW9uIiwiZGF0YSIsInVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXIiLCJyZXNwb25zZVR5cGUiLCJKU09OIiwic3RyaW5naWZ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInJlc3BvbnNlRGF0YSIsImNvZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImZhaWwiLCJnZXRSYW5raW5ncyIsImxpbWl0IiwicmVzdWx0IiwicmFua2luZ3MiLCJtZXNzYWdlIiwic3luY0NsaWNrcyIsInVzZXJJZCIsImNsaWNrQ291bnQiLCJ1c2VyX2lkIiwiY2xpY2tfY291bnQiLCJjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkiLCJwZXROYW1lIiwicGV0X25hbWUiLCJpc0F2YWlsYWJsZSIsInNldFBldE5hbWUiLCJuZXdOYW1lIiwibmV3X25hbWUiLCJjaGVja0RldmljZVJlZ2lzdHJhdGlvbiIsImRldmljZUlkIiwiZGV2aWNlX2lkIiwibG9nIiwiaXNfcmVnaXN0ZXJlZCIsImNhbl9hdXRvX2FjdGl2YXRlIiwicmVnaXN0ZXJBbmRHZXRVc2VySWQiLCJ2ZXJpZnlVc2VySWRBbmRSZXN0b3JlIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiX2FwaVNlcnZpY2UiLCJjaGVja05ldHdvcmtBY2Nlc3MiLCJfcHJvbWlzaWZpZWRTdG9yYWdlR2V0Iiwia2V5IiwiZ2V0IiwiX3Byb21pc2lmaWVkU3RvcmFnZVNldCIsInNldCIsImVyciIsImxvY2FsQWN0aXZhdGlvblZhbHVlIiwiU1RPUkFHRV9LRVlTIiwiSVNfTE9DQUxMWV9BQ1RJVkFURUQiLCJ1cmkiLCJjYW5BY2Nlc3MiLCJ1c2VySW5mbyIsInVzZXJJbmZvSlNPTiIsIlVTRVJfSU5GTyIsInBhcnNlIiwiaWQiLCJkZXZpY2VDb2RlIiwiREVWSUNFX0lEIiwiQVBQIiwiTkFNRSIsIlZFUlNJT04iLCJNQVhfQ0xJQ0tTX1BFUl9CQVRDSCIsIlNZTkNfSU5URVJWQUwiLCJSQU5LX0xJTUlUIiwiUEVORElOR19DTElDS1MiLCJMQVNUX1NZTkNfVElNRSIsIlRPVEFMX0NMSUNLUyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJfYXV0aEd1YXJkIiwidGltZSIsInN0YXR1c01lc3NhZ2UiLCJvbkluaXQiLCJ1cGRhdGVUaW1lIiwic2V0SW50ZXJ2YWwiLCJmZXRjaFJhbmtpbmdzIiwibm93IiwiRGF0ZSIsImhvdXJzIiwiZ2V0SG91cnMiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJndWFyZFJlc3VsdCIsImF1dGhHdWFyZCIsImdvQmFjayIsInJvdXRlciIsImJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUNBLElBQUFBLFVBQUFDLHVCQUFBQyxlQUFBO3dCQUNB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