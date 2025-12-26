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
                    "./src/common/QwertyKeyboard.ux" (module) {
                        var $app_style$ = [
                            [
                                [
                                    [
                                        0,
                                        "keyboard-container"
                                    ]
                                ],
                                {
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    width: "100%",
                                    backgroundColor: "#000000",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    paddingTop: "5px",
                                    paddingRight: "5px",
                                    paddingBottom: "5px",
                                    paddingLeft: "5px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "keyboard-grid"
                                    ]
                                ],
                                {
                                    width: "100%",
                                    flexDirection: "column"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "keyboard-row"
                                    ]
                                ],
                                {
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    marginBottom: "5px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "key"
                                    ]
                                ],
                                {
                                    width: "42px",
                                    height: "55px",
                                    backgroundColor: "#2c2c2e",
                                    borderRadius: "8px",
                                    marginTop: "0",
                                    marginRight: "2px",
                                    marginBottom: "0",
                                    marginLeft: "2px",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "special-key"
                                    ]
                                ],
                                {
                                    width: "65px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "key-text"
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
                            var _default = exports.default = {
                                data: {
                                    keys: [
                                        [
                                            'q',
                                            'w',
                                            'e',
                                            'r',
                                            't',
                                            'y',
                                            'u',
                                            'i',
                                            'o',
                                            'p'
                                        ],
                                        [
                                            'a',
                                            's',
                                            'd',
                                            'f',
                                            'g',
                                            'h',
                                            'j',
                                            'k',
                                            'l'
                                        ],
                                        [
                                            'Shift',
                                            'z',
                                            'x',
                                            'c',
                                            'v',
                                            'b',
                                            'n',
                                            'm',
                                            '⌫'
                                        ],
                                        [
                                            'Space',
                                            '✓'
                                        ]
                                    ]
                                },
                                onKeyClick (key) {
                                    this.$emit('keyclick', {
                                        value: key
                                    });
                                }
                            };
                        };
                        var $app_template$ = function(vm) {
                            const _vm_ = vm || this;
                            return aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "keyboard-container"
                                    ]
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "keyboard-grid"
                                        ]
                                    }
                                }, [
                                    aiot.__cf__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            exp: function() {
                                                return _vm_.keys;
                                            },
                                            key: "$idx",
                                            value: "row"
                                        }
                                    }, function($idx, row) {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "keyboard-row"
                                                    ]
                                                }
                                            }, [
                                                aiot.__cf__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        exp: function() {
                                                            return row;
                                                        },
                                                        key: "$idx",
                                                        value: "key"
                                                    }
                                                }, function($idx, key) {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                classList: function() {
                                                                    const $classValue$ = "key " + (key.length > 1 ? "special-key" : "");
                                                                    if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                                    return $classValue$;
                                                                },
                                                                events: {
                                                                    click: function(evt) {
                                                                        return _vm_.onKeyClick(key, evt);
                                                                    }
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("text", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "key-text"
                                                                    ],
                                                                    value: function() {
                                                                        return key;
                                                                    }
                                                                }
                                                            }, [])
                                                        ])
                                                    ];
                                                })
                                            ])
                                        ];
                                    })
                                ])
                            ]);
                        };
                        module.exports = function($app_exports$) {
                            $app_script$({}, $app_exports$, $app_require$1);
                            $app_exports$.default.template = $app_template$;
                            $app_exports$.default.style = $app_style$;
                        };
                    },
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
                                marginTop: 0,
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
                                justifyContent: "flex-start",
                                marginTop: "10px"
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
                                    "content-container"
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
                                    "current-name-section"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                alignItems: "center",
                                marginBottom: "30px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "current-name-section"
                                ],
                                [
                                    2,
                                    "text"
                                ]
                            ],
                            {
                                color: "#aaaaaa",
                                fontSize: "28px",
                                marginBottom: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "name-input"
                                ]
                            ],
                            {
                                width: "400px",
                                height: "70px",
                                backgroundColor: "#1a1a1a",
                                borderRadius: "15px",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                paddingLeft: "20px",
                                marginBottom: "40px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "name-input"
                                ],
                                [
                                    2,
                                    "text"
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
                                    "confirm-button"
                                ]
                            ],
                            {
                                width: "100px",
                                height: "100px",
                                borderRadius: "50px",
                                backgroundColor: "#007aff",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "confirm-icon"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "60px"
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
                                color: "#ff3b30",
                                fontSize: "24px",
                                marginTop: "20px"
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
                        var _apiService = _interopRequireDefault(__webpack_require__("./src/common/js/api-service.js"));
                        var _authGuard = _interopRequireDefault(__webpack_require__("./src/common/js/auth-guard.js"));
                        var _config = __webpack_require__("./src/common/js/config.js");
                        var _QwertyKeyboard = _interopRequireDefault(__webpack_require__("./src/common/QwertyKeyboard.ux"));
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
                        var _default = exports.default = {
                            components: {
                                QwertyKeyboard: _QwertyKeyboard.default
                            },
                            data: {
                                time: '00:00',
                                currentPetName: '...',
                                newPetName: '',
                                statusMessage: '',
                                showKeyboard: false
                            },
                            async onInit () {
                                this.updateTime();
                                setInterval(this.updateTime, 5000);
                                try {
                                    const userInfoResult = await _system2.default.get({
                                        key: _config.CONFIG.STORAGE_KEYS.USER_INFO
                                    });
                                    if (userInfoResult.value) {
                                        const userInfo = JSON.parse(userInfoResult.value);
                                        this.currentPetName = userInfo.pet_name || '(无名)';
                                    } else this.currentPetName = '(无名)';
                                } catch (e) {
                                    this.currentPetName = '(无名)';
                                }
                            },
                            updateTime () {
                                const now = new Date();
                                const hours = now.getHours().toString().padStart(2, '0');
                                const minutes = now.getMinutes().toString().padStart(2, '0');
                                this.time = `${hours}:${minutes}`;
                            },
                            toggleKeyboard (show) {
                                this.showKeyboard = show;
                            },
                            handleKeyClick (e) {
                                const key = e.detail.value;
                                if ('⌫' === key) this.newPetName = this.newPetName.slice(0, -1);
                                else if ('✓' === key) {
                                    this.toggleKeyboard(false);
                                    this.savePetName();
                                } else if ('Space' === key) this.newPetName += ' ';
                                else if ('Shift' !== key) this.newPetName += key;
                            },
                            async savePetName () {
                                if (!this.newPetName || this.newPetName.length > 10) {
                                    this.statusMessage = '名字需在1-10个字符之间';
                                    return;
                                }
                                const guardResult = await _authGuard.default.checkNetworkAccess();
                                if (!guardResult.canAccess) return void _system3.default.showToast({
                                    message: guardResult.message,
                                    duration: 3000
                                });
                                this.statusMessage = '正在检查名称可用性...';
                                const availabilityResult = await _apiService.default.checkPetNameAvailability(this.newPetName);
                                if (!availabilityResult.success || !availabilityResult.isAvailable) {
                                    this.statusMessage = `保存失败: ${false === availabilityResult.isAvailable ? '该名称已被使用，请更换另一个名字' : availabilityResult.error || '无法检查名称'}`;
                                    return;
                                }
                                this.statusMessage = '名称可用，正在保存...';
                                const { userInfo } = guardResult;
                                const setResult = await _apiService.default.setPetName(userInfo.id, this.newPetName);
                                if (setResult.success) {
                                    this.currentPetName = this.newPetName;
                                    this.newPetName = '';
                                    this.statusMessage = '';
                                    const updatedUserInfo = _objectSpread(_objectSpread({}, userInfo), {}, {
                                        pet_name: this.currentPetName
                                    });
                                    await _system2.default.set({
                                        key: _config.CONFIG.STORAGE_KEYS.USER_INFO,
                                        value: JSON.stringify(updatedUserInfo)
                                    });
                                    _system3.default.showToast({
                                        message: '宠物名字已更新！'
                                    });
                                    setTimeout(()=>{
                                        _system.default.back();
                                    }, 1500);
                                } else this.statusMessage = `保存失败: ${setResult.error || '未知错误'}`;
                            },
                            goBack () {
                                if (this.showKeyboard) this.toggleKeyboard(false);
                                else _system.default.back();
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
                                    ],
                                    show: function() {
                                        return !_vm_.showKeyboard;
                                    }
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
                                                value: "宠物命名"
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
                                    ],
                                    show: function() {
                                        return !_vm_.showKeyboard;
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "content-container"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "current-name-section"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                value: function() {
                                                    return "当前名字: " + _vm_.currentPetName;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "name-input"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.toggleKeyboard(true, evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                value: function() {
                                                    return _vm_.newPetName || "\u70B9\u51FB\u8F93\u5165\u65B0\u540D\u5B57";
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            src: "/common/check.png",
                                            classList: [
                                                "confirm-button"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.savePetName(evt);
                                                }
                                            }
                                        }
                                    }, []),
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
                            ]),
                            aiot.__ce__("qwertykeyboard", {
                                __vm__: _vm_,
                                __opts__: {
                                    show: function() {
                                        return _vm_.showKeyboard;
                                    },
                                    events: {
                                        keyclick: function(evt) {
                                            return _vm_.handleKeyClick(evt);
                                        }
                                    }
                                }
                            }, [])
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtaW5nXFxpbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9Rd2VydHlLZXlib2FyZC51eCIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvYXBpLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2F1dGgtZ3VhcmQuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL0JhbmRQZXQvc3JjL25hbWluZy9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImtleWJvYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImtleWJvYXJkLWdyaWRcIj5cclxuICAgICAgPGRpdiBmb3I9XCJ7eyByb3cgaW4ga2V5cyB9fVwiIGNsYXNzPVwia2V5Ym9hcmQtcm93XCI+XHJcbiAgICAgICAgPGRpdiBmb3I9XCJ7eyBrZXkgaW4gcm93IH19XCIgY2xhc3M9XCJrZXkge3trZXkubGVuZ3RoID4gMSA/ICdzcGVjaWFsLWtleScgOiAnJ319XCIgb25jbGljaz1cIm9uS2V5Q2xpY2soa2V5KVwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJrZXktdGV4dFwiPnt7IGtleSB9fTwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuICAua2V5Ym9hcmQtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgLmtleWJvYXJkLWdyaWQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAua2V5Ym9hcmQtcm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbiAgLmtleSB7XHJcbiAgICB3aWR0aDogNDJweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzJjMmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuc3BlY2lhbC1rZXkge1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgfVxyXG4gIC5rZXktdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAga2V5czogW1xyXG4gICAgICAgIFsncScsICd3JywgJ2UnLCAncicsICd0JywgJ3knLCAndScsICdpJywgJ28nLCAncCddLFxyXG4gICAgICAgIFsnYScsICdzJywgJ2QnLCAnZicsICdnJywgJ2gnLCAnaicsICdrJywgJ2wnXSxcclxuICAgICAgICBbJ1NoaWZ0JywgJ3onLCAneCcsICdjJywgJ3YnLCAnYicsICduJywgJ20nLCAn4oyrJ10sXHJcbiAgICAgICAgWydTcGFjZScsICfinJMnXVxyXG4gICAgICBdXHJcbiAgICAgIC8vIE5vdGU6IEEgcmVhbCBpbXBsZW1lbnRhdGlvbiB3b3VsZCBoYW5kbGUgc2hpZnQgc3RhdGUsIGJ1dCB0aGlzIGlzIGEgc2ltcGxpZmllZCB2ZXJzaW9uLlxyXG4gICAgfSxcclxuICAgIG9uS2V5Q2xpY2soa2V5KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2tleWNsaWNrJywgeyB2YWx1ZToga2V5IH0pO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbiIsIi8vIGFwaS1zZXJ2aWNlLmpzXHJcbmltcG9ydCBmZXRjaCBmcm9tICdAc3lzdGVtLmZldGNoJztcclxuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XHJcbmltcG9ydCBwcm9tcHQgZnJvbSAnQHN5c3RlbS5wcm9tcHQnO1xyXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XHJcblxyXG5jbGFzcyBBcGlTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIOS4rei9rOacjeWKoeWZqOWcsOWdgCAtIOS7jiBjb25maWcuanMg6K+75Y+WXHJcbiAgICB0aGlzLmJhc2VVcmwgPSBDT05GSUcuU0VSVkVSLkJBU0VfVVJMO1xyXG4gICAgdGhpcy5iYXNlSGVhZGVycyA9IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOmAmueUqOivt+axguaWueazlSAtIOmAmui/h+S4rei9rOacjeWKoeWZqOi9rOWPkVxyXG4gIGFzeW5jIHJlcXVlc3QoYWN0aW9uLCBkYXRhID0ge30pIHtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vYXBpYDtcclxuICAgIFxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyOiB0aGlzLmJhc2VIZWFkZXJzLFxyXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xyXG4gICAgfTtcclxuXHJcbiAgICBvcHRpb25zLmRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IGFjdGlvbiwgLi4uZGF0YSB9KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZXRjaC5mZXRjaCh7XHJcbiAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XHJcblxyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUgPj0gMjAwICYmIHJlc3BvbnNlLmNvZGUgPCAzMDApIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZURhdGEpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBIVFRQIEVycm9yOiAke3Jlc3BvbnNlLmNvZGV9YCwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBIVFRQICR7cmVzcG9uc2UuY29kZX06ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2VEYXRhKX1gKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IChlcnJvciwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgUmVxdWVzdCBGYWlsZWQ6ICR7Y29kZX1gLCBlcnJvcik7XHJcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZDogJHtlcnJvci5kYXRhfWApKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyDojrflj5bmjpLooYzmppxcclxuICBhc3luYyBnZXRSYW5raW5ncyhsaW1pdCA9IDEwKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2dldF9yYW5raW5ncycsIHtcclxuICAgICAgICBsaW1pdDogbGltaXRcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIHJhbmtpbmdzOiByZXN1bHQucmFua2luZ3MgfHwgW11cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign6I635Y+W5o6S6KGM5qac5aSx6LSlOicsIGVycm9yKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIHJhbmtpbmdzOiBbXSxcclxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDkuIrmiqXngrnlh7vmrKHmlbBcclxuICBhc3luYyBzeW5jQ2xpY2tzKHVzZXJJZCwgY2xpY2tDb3VudCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0KCdzeW5jX2NsaWNrcycsIHtcclxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXHJcbiAgICAgICAgY2xpY2tfY291bnQ6IGNsaWNrQ291bnRcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfkuIrmiqXngrnlh7vmrKHmlbDlpLHotKU6JywgZXJyb3IpXHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5qOA5p+l5a6g54mp5ZCN5piv5ZCm5Y+v55SoXHJcbiAgYXN5bmMgY2hlY2tQZXROYW1lQXZhaWxhYmlsaXR5KHBldE5hbWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnY2hlY2tfcGV0X25hbWUnLCB7XHJcbiAgICAgICAgcGV0X25hbWU6IHBldE5hbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIC4uLnJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5qOA5p+l5a6g54mp5ZCN5Y+v55So5oCn5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlLCBpc0F2YWlsYWJsZTogZmFsc2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOS/ruaUueWuoOeJqeWQjVxyXG4gIGFzeW5jIHNldFBldE5hbWUodXNlcklkLCBuZXdOYW1lKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ3NldF9wZXRfbmFtZScsIHtcclxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXHJcbiAgICAgICAgbmV3X25hbWU6IG5ld05hbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfkv67mlLnlrqDnianlkI3lpLHotKU6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOmihOa/gOa0u+ajgOafpVxyXG4gIGFzeW5jIGNoZWNrRGV2aWNlUmVnaXN0cmF0aW9uKGRldmljZUlkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2NoZWNrX3JlZ2lzdHJhdGlvbicsIHtcclxuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygn6aKE5r+A5rS75qOA5p+l5oiQ5YqfOicsIHJlc3VsdCk7XHJcbiAgICAgIC8vIOebtOaOpei/lOWbnuacjeWKoeWZqOeahOWOn+Wni+WTjeW6lO+8jFVJ5bGC5pyf5pyb55qE5piv5omB5bmz57uT5p6EXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfpooTmv4DmtLvmo4Dmn6Xml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xyXG4gICAgICAvLyDov5Tlm57kuIDkuKrlhbzlrrnnmoTplJnor6/lr7nosaHvvIzpgb/lhY1VSeWxguW0qea6g1xyXG4gICAgICByZXR1cm4geyBpc19yZWdpc3RlcmVkOiBmYWxzZSwgY2FuX2F1dG9fYWN0aXZhdGU6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5rOo5YaM6K6+5aSH5bm26I635Y+W55So5oi3SURcclxuICBhc3luYyByZWdpc3RlckFuZEdldFVzZXJJZChkZXZpY2VJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gUGFzcyB0aGUgc2VydmVyIHJlc3BvbnNlIGRpcmVjdGx5IHRvIHRoZSBVSSBsYXllclxyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0KCdyZWdpc3Rlcl9kZXZpY2VfYW5kX2dldF9pZCcsIHtcclxuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5rOo5YaM5oiW6I635Y+W55So5oi3SUTml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xyXG4gICAgICAvLyBSZXR1cm4gYSBjb21wYXRpYmxlIGVycm9yIG9iamVjdFxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g6aqM6K+B55So5oi3SUTlubbmgaLlpI3mlbDmja5cclxuICBhc3luYyB2ZXJpZnlVc2VySWRBbmRSZXN0b3JlKGRldmljZUlkLCB1c2VySWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIFBhc3MgdGhlIHNlcnZlciByZXNwb25zZSBkaXJlY3RseSB0byB0aGUgVUkgbGF5ZXJcclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucmVxdWVzdCgndmVyaWZ5X3VzZXJfaWRfYW5kX3Jlc3RvcmUnLCB7XHJcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZCxcclxuICAgICAgICB1c2VyX2lkOiB1c2VySWRcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfpqozor4HnlKjmiLdJROaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XHJcbiAgICAgIC8vIFJldHVybiBhIGNvbXBhdGlibGUgZXJyb3Igb2JqZWN0XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBpU2VydmljZSgpXHJcbiIsIi8vIHNyYy9jb21tb24vanMvYXV0aC1ndWFyZC5qc1xyXG5cclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQHN5c3RlbS5zdG9yYWdlJztcclxuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XHJcbmltcG9ydCBBcGlTZXJ2aWNlIGZyb20gJy4vYXBpLXNlcnZpY2UuanMnO1xyXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIHRoZSB1c2VyIGhhcyB0aGUgbmVjZXNzYXJ5IGFjdGl2YXRpb24gYW5kIGNyZWRlbnRpYWxzIHRvIGFjY2VzcyBhIG5ldHdvcmsgZmVhdHVyZS5cclxuICogVGhpcyBmdW5jdGlvbiBpbXBsZW1lbnRzIHRoZSBmb2xsb3dpbmcgbG9naWM6XHJcbiAqIDEuIENoZWNrcyBmb3IgYSBsb2NhbCBhY3RpdmF0aW9uIGZsYWcuIElmIG5vdCBwcmVzZW50LCByZWRpcmVjdHMgdG8gdGhlIGFjdGl2YXRpb24gcGFnZS5cclxuICogMi4gSWYgbG9jYWxseSBhY3RpdmF0ZWQsIGNoZWNrcyBmb3Igc3RvcmVkIHVzZXIgaW5mbyB3aXRoIGEgc2VydmVyLXNpZGUgSUQuXHJcbiAqIDMuIElmIHVzZXIgaW5mbyBpcyBtaXNzaW5nLCBpdCBhdHRlbXB0cyB0byBmZXRjaCBpdCBmcm9tIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIHN0b3JlZCBkZXZpY2UgY29kZS5cclxuICogNC4gUmV0dXJucyB0aGUgYWNjZXNzIHN0YXR1cyBhbmQgdXNlciBpbmZvLlxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fSBBbiBvYmplY3Qgd2l0aDogeyBjYW5BY2Nlc3M6IGJvb2xlYW4sIHVzZXJJbmZvOiBPYmplY3R8bnVsbCwgbWVzc2FnZTogc3RyaW5nIH1cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrTmV0d29ya0FjY2VzcygpIHtcclxuICAvLyBIZWxwZXIgdG8gcHJvbWlzaWZ5IHN0b3JhZ2UuZ2V0IC0gaXQgcmVzb2x2ZXMgd2l0aCB0aGUgUkFXIFZBTFVFLlxyXG4gIGNvbnN0IF9wcm9taXNpZmllZFN0b3JhZ2VHZXQgPSAoa2V5KSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgc3RvcmFnZS5nZXQoe1xyXG4gICAgICAgIGtleToga2V5LFxyXG4gICAgICAgIC8vIFRoZSAnZGF0YScgcGFyYW1ldGVyIElTIHRoZSB2YWx1ZS4gQ2FuIGJlIHVuZGVmaW5lZCBpZiBub3QgZm91bmQuXHJcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHJlc29sdmUoZGF0YSksXHJcbiAgICAgICAgZmFpbDogKCkgPT4gcmVzb2x2ZShudWxsKSAvLyBSZXNvbHZlIHdpdGggbnVsbCBvbiBhbnkgZmFpbHVyZS5cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBIZWxwZXIgdG8gcHJvbWlzaWZ5IHN0b3JhZ2Uuc2V0XHJcbiAgY29uc3QgX3Byb21pc2lmaWVkU3RvcmFnZVNldCA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzdG9yYWdlLnNldCh7XHJcbiAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXHJcbiAgICAgICAgZmFpbDogKGVyciwgY29kZSkgPT4gcmVqZWN0KG5ldyBFcnJvcihgU3RvcmFnZS5zZXQgZmFpbGVkIGZvciBrZXkgJyR7a2V5fScgd2l0aCBjb2RlICR7Y29kZX06ICR7ZXJyfWApKVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyAxLiBDaGVjayBmb3IgbG9jYWwgYWN0aXZhdGlvbiBmbGFnXHJcbiAgICBjb25zdCBsb2NhbEFjdGl2YXRpb25WYWx1ZSA9IGF3YWl0IF9wcm9taXNpZmllZFN0b3JhZ2VHZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5JU19MT0NBTExZX0FDVElWQVRFRCk7XHJcbiAgICBpZiAobG9jYWxBY3RpdmF0aW9uVmFsdWUgIT09ICd0cnVlJykge1xyXG4gICAgICByb3V0ZXIucHVzaCh7IHVyaTogJ2FjdGl2YXRlJyB9KTtcclxuICAgICAgcmV0dXJuIHsgY2FuQWNjZXNzOiBmYWxzZSwgdXNlckluZm86IG51bGwsIG1lc3NhZ2U6ICforr7lpIfmnKrmv4DmtLvvvIzor7flhYjmv4DmtLvjgIInIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMi4gQ2hlY2sgZm9yIGV4aXN0aW5nIFVzZXIgSW5mbyBpbiBzdG9yYWdlXHJcbiAgICBjb25zdCB1c2VySW5mb0pTT04gPSBhd2FpdCBfcHJvbWlzaWZpZWRTdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPKTtcclxuICAgIGlmICh1c2VySW5mb0pTT04pIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VySW5mbyA9IEpTT04ucGFyc2UodXNlckluZm9KU09OKTtcclxuICAgICAgICBpZiAodXNlckluZm8gJiYgdXNlckluZm8uaWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoR3VhcmQ6IFVzZXIgSUQgZm91bmQgaW4gc3RvcmFnZS4nKTtcclxuICAgICAgICAgIHJldHVybiB7IGNhbkFjY2VzczogdHJ1ZSwgdXNlckluZm86IHVzZXJJbmZvLCBtZXNzYWdlOiAn6aqM6K+B6YCa6L+HJyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaChlKSB7IC8qIE1hbGZvcm1lZCBKU09OLCBwcm9jZWVkIHRvIGZldGNoIGZyb20gc2VydmVyICovIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAzLiBVc2VyIEluZm8gaXMgbWlzc2luZyBvciBtYWxmb3JtZWQsIHRyeSB0byBmZXRjaCBpdCBmcm9tIHNlcnZlclxyXG4gICAgY29uc29sZS5sb2coJ0F1dGhHdWFyZDogVXNlciBJbmZvIG5vdCBmb3VuZCBpbiBzdG9yYWdlLCBhdHRlbXB0aW5nIHRvIHJlY292ZXIgZnJvbSBzZXJ2ZXIuJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGRldmljZUNvZGUgPSBhd2FpdCBfcHJvbWlzaWZpZWRTdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuREVWSUNFX0lEKTtcclxuICAgIGlmICghZGV2aWNlQ29kZSkge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKHsgdXJpOiAnYWN0aXZhdGUnIH0pO1xyXG4gICAgICAgIHJldHVybiB7IGNhbkFjY2VzczogZmFsc2UsIHVzZXJJbmZvOiBudWxsLCBtZXNzYWdlOiAn5peg5rOV5om+5Yiw6K6+5aSH56CB77yM6K+36YeN5paw5r+A5rS744CCJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVzZSBjaGVja0RldmljZVJlZ2lzdHJhdGlvbiB0byBnZXQgZXhpc3RpbmcgdXNlciBkYXRhXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLmNoZWNrRGV2aWNlUmVnaXN0cmF0aW9uKGRldmljZUNvZGUpO1xyXG5cclxuICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmlzX3JlZ2lzdGVyZWQgJiYgcmVzdWx0LnVzZXJJbmZvKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdBdXRoR3VhcmQ6IFN1Y2Nlc3NmdWxseSByZWNvdmVyZWQgVXNlciBJbmZvIGZyb20gc2VydmVyLicpO1xyXG4gICAgICBhd2FpdCBfcHJvbWlzaWZpZWRTdG9yYWdlU2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPLCBKU09OLnN0cmluZ2lmeShyZXN1bHQudXNlckluZm8pKTtcclxuICAgICAgcmV0dXJuIHsgY2FuQWNjZXNzOiB0cnVlLCB1c2VySW5mbzogcmVzdWx0LnVzZXJJbmZvLCBtZXNzYWdlOiAn55So5oi3SUTmgaLlpI3miJDlip8nIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnQXV0aEd1YXJkOiBGYWlsZWQgdG8gcmVjb3ZlciBVc2VyIEluZm8sIGRldmljZSBtYXkgbm90IGJlIHJlZ2lzdGVyZWQgb24gc2VydmVyLicpO1xyXG4gICAgICByb3V0ZXIucHVzaCh7IHVyaTogJ2FjdGl2YXRlJyB9KTsgLy8gRm9yY2UgcmUtYWN0aXZhdGlvblxyXG4gICAgICByZXR1cm4geyBjYW5BY2Nlc3M6IGZhbHNlLCB1c2VySW5mbzogbnVsbCwgbWVzc2FnZTogJ+aXoOazleaBouWkjeeUqOaIt+S/oeaBr++8jOivt+mHjeaWsOa/gOa0u+OAgicgfTtcclxuICAgIH1cclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcignQXV0aEd1YXJkOiBFcnJvciBkdXJpbmcgY2hlY2tOZXR3b3JrQWNjZXNzJywgZSk7XHJcbiAgICByb3V0ZXIucHVzaCh7IHVyaTogJ2FjdGl2YXRlJyB9KTsgLy8gT24gYW55IGNhdGFzdHJvcGhpYyBlcnJvciwgZGVmYXVsdCB0byByZS1hY3RpdmF0aW9uXHJcbiAgICByZXR1cm4geyBjYW5BY2Nlc3M6IGZhbHNlLCB1c2VySW5mbzogbnVsbCwgbWVzc2FnZTogYOWPkeeUn+iHtOWRvemUmeivrzogJHtlLm1lc3NhZ2V9YCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNoZWNrTmV0d29ya0FjY2Vzc1xyXG59O1xyXG4iLCIvLyBjb25maWcuanNcclxuZXhwb3J0IGNvbnN0IENPTkZJRyA9IHtcclxuICAvLyDkuK3ovazmnI3liqHlmajphY3nva5cclxuICBTRVJWRVI6IHtcclxuICAgIEJBU0VfVVJMOiAnaHR0cDovLzEwMy4yMDUuMjUzLjg3OjIyMjA3J1xyXG4gIH0sXHJcbiAgXHJcbiAgLy8g5rOo5oSP77yaVVJMIOWJjee8gOWcqCBhcGktc2VydmljZS5qcyDkuK3noaznvJbnoIHkuoZcclxuICAvLyDov5nph4zkuI3lho3pnIDopoHphY3nva5cclxuICBcclxuICAvLyDlupTnlKjphY3nva5cclxuICBBUFA6IHtcclxuICAgIE5BTUU6ICdCYW5kUGV0JyxcclxuICAgIFZFUlNJT046ICcwLjMuNSBBbHBoYScsXHJcbiAgICBNQVhfQ0xJQ0tTX1BFUl9CQVRDSDogNTAsXHJcbiAgICBTWU5DX0lOVEVSVkFMOiAzMDAwMDAsXHJcbiAgICBSQU5LX0xJTUlUOiAxMFxyXG4gIH0sXHJcbiAgXHJcbiAgLy8g5a2Y5YKo6ZSu5ZCNXHJcbiAgU1RPUkFHRV9LRVlTOiB7XHJcbiAgICBERVZJQ0VfSUQ6ICdkZXZpY2VfaWQnLFxyXG4gICAgSVNfTE9DQUxMWV9BQ1RJVkFURUQ6ICdpc19sb2NhbGx5X2FjdGl2YXRlZCcsXHJcbiAgICBVU0VSX0lORk86ICd1c2VyX2luZm8nLFxyXG4gICAgUEVORElOR19DTElDS1M6ICdwZW5kaW5nX2NsaWNrcycsXHJcbiAgICBMQVNUX1NZTkNfVElNRTogJ2xhc3Rfc3luY190aW1lJyxcclxuICAgIFRPVEFMX0NMSUNLUzogJ3RvdGFsX2NsaWNrcydcclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNi44XCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjYuOFwiOyIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicGFnZS1jb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci1jb250YWluZXJcIiBzaG93PVwie3shc2hvd0tleWJvYXJkfX1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyXCI+XHJcbiAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi9iYWNrLnBuZ1wiIGNsYXNzPVwicGFnZS1oZWFkZXItYmFjay1idXR0b25cIiBvbmNsaWNrPVwiZ29CYWNrXCI+PC9pbWFnZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRpdGxlLXRpbWVcIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicGFnZS10aW1lLWRpc3BsYXlcIj57eyB0aW1lIH19PC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLWhlYWRlci10aXRsZVwiPuWuoOeJqeWRveWQjTwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRlbnRcIiBzaG93PVwie3shc2hvd0tleWJvYXJkfX1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtbmFtZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICA8dGV4dD7lvZPliY3lkI3lrZc6IHt7IGN1cnJlbnRQZXROYW1lIH19PC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lLWlucHV0XCIgb25jbGljaz1cInRvZ2dsZUtleWJvYXJkKHRydWUpXCI+XHJcbiAgICAgICAgICA8dGV4dD57eyBuZXdQZXROYW1lIHx8ICfngrnlh7vovpPlhaXmlrDlkI3lrZcnIH19PC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vY2hlY2sucG5nXCIgY2xhc3M9XCJjb25maXJtLWJ1dHRvblwiIG9uY2xpY2s9XCJzYXZlUGV0TmFtZVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJzdGF0dXMtdGV4dFwiPnt7IHN0YXR1c01lc3NhZ2UgfX08L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8UXdlcnR5S2V5Ym9hcmQgc2hvdz1cInt7c2hvd0tleWJvYXJkfX1cIiBvbmtleWNsaWNrPVwiaGFuZGxlS2V5Q2xpY2tcIj48L1F3ZXJ0eUtleWJvYXJkPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4gIC5wYWdlLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLnBhZ2UtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIC5wYWdlLXRpbWUtZGlzcGxheSB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgfVxyXG4gIC5wYWdlLWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgLnBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTkwRkY7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5wYWdlLWhlYWRlci1iYWNrLWFycm93IHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxuICAucGFnZS1oZWFkZXItdGl0bGUge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG4gIC5oZWFkZXItdGl0bGUtdGltZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLnBhZ2UtY29udGVudCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuY29udGVudC1jb250YWluZXIgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcbiAgLmN1cnJlbnQtbmFtZS1zZWN0aW9uIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxyXG4gIC5jdXJyZW50LW5hbWUtc2VjdGlvbiB0ZXh0IHsgY29sb3I6ICNBQUE7IGZvbnQtc2l6ZTogMjhweDsgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxyXG4gIC5uYW1lLWlucHV0IHsgd2lkdGg6IDQwMHB4OyBoZWlnaHQ6IDcwcHg7IGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7IGJvcmRlci1yYWRpdXM6IDE1cHg7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgcGFkZGluZy1sZWZ0OiAyMHB4OyBtYXJnaW4tYm90dG9tOiA0MHB4OyB9XHJcbiAgLm5hbWUtaW5wdXQgdGV4dCB7IGNvbG9yOiAjRkZGOyBmb250LXNpemU6IDMycHg7IH1cclxuICAuY29uZmlybS1idXR0b24geyB3aWR0aDogMTAwcHg7IGhlaWdodDogMTAwcHg7IGJvcmRlci1yYWRpdXM6IDUwcHg7IGJhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcbiAgLmNvbmZpcm0taWNvbiB7IGNvbG9yOiAjRkZGOyBmb250LXNpemU6IDYwcHg7IH1cclxuICAuc3RhdHVzLXRleHQgeyBjb2xvcjogI0ZGM0IzMDsgZm9udC1zaXplOiAyNHB4OyBtYXJnaW4tdG9wOiAyMHB4OyB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xyXG4gIGltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XHJcbiAgaW1wb3J0IHByb21wdCBmcm9tICdAc3lzdGVtLnByb21wdCc7XHJcbiAgaW1wb3J0IEFwaVNlcnZpY2UgZnJvbSAnLi4vY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzJztcclxuICBpbXBvcnQgYXV0aEd1YXJkIGZyb20gJy4uL2NvbW1vbi9qcy9hdXRoLWd1YXJkLmpzJztcclxuICBpbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuLi9jb21tb24vanMvY29uZmlnLmpzJztcclxuICBpbXBvcnQgUXdlcnR5S2V5Ym9hcmQgZnJvbSAnLi4vY29tbW9uL1F3ZXJ0eUtleWJvYXJkLnV4JztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBRd2VydHlLZXlib2FyZFxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGltZTogJzAwOjAwJyxcclxuICAgICAgY3VycmVudFBldE5hbWU6ICcuLi4nLFxyXG4gICAgICBuZXdQZXROYW1lOiAnJyxcclxuICAgICAgc3RhdHVzTWVzc2FnZTogJycsXHJcbiAgICAgIHNob3dLZXlib2FyZDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBhc3luYyBvbkluaXQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlVGltZSgpO1xyXG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVRpbWUsIDUwMDApO1xyXG5cclxuICAgICAgLy8gQXR0ZW1wdCB0byBsb2FkIGN1cnJlbnQgbmFtZSBmb3IgZGlzcGxheSBwdXJwb3NlcyBvbmx5XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlckluZm9SZXN1bHQgPSBhd2FpdCBzdG9yYWdlLmdldCh7IGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8gfSk7XHJcbiAgICAgICAgaWYgKHVzZXJJbmZvUmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICBjb25zdCB1c2VySW5mbyA9IEpTT04ucGFyc2UodXNlckluZm9SZXN1bHQudmFsdWUpO1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50UGV0TmFtZSA9IHVzZXJJbmZvLnBldF9uYW1lIHx8ICco5peg5ZCNKSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudFBldE5hbWUgPSAnKOaXoOWQjSknO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBldE5hbWUgPSAnKOaXoOWQjSknO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVGltZSgpIHtcclxuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgY29uc3QgaG91cnMgPSBub3cuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgdGhpcy50aW1lID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUtleWJvYXJkKHNob3cpIHtcclxuICAgICAgdGhpcy5zaG93S2V5Ym9hcmQgPSBzaG93O1xyXG4gICAgfSxcclxuICAgIGhhbmRsZUtleUNsaWNrKGUpIHtcclxuICAgICAgY29uc3Qga2V5ID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgIGlmIChrZXkgPT09ICfijKsnKSB7XHJcbiAgICAgICAgdGhpcy5uZXdQZXROYW1lID0gdGhpcy5uZXdQZXROYW1lLnNsaWNlKDAsIC0xKTtcclxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICfinJMnKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVLZXlib2FyZChmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zYXZlUGV0TmFtZSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ1NwYWNlJykge1xyXG4gICAgICAgIHRoaXMubmV3UGV0TmFtZSArPSAnICc7XHJcbiAgICAgIH0gZWxzZSBpZiAoa2V5ICE9PSAnU2hpZnQnKSB7XHJcbiAgICAgICAgdGhpcy5uZXdQZXROYW1lICs9IGtleTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFzeW5jIHNhdmVQZXROYW1lKCkge1xyXG4gICAgICBpZiAoIXRoaXMubmV3UGV0TmFtZSB8fCB0aGlzLm5ld1BldE5hbWUubGVuZ3RoID4gMTApIHtcclxuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn5ZCN5a2X6ZyA5ZyoMS0xMOS4quWtl+espuS5i+mXtCc7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBndWFyZFJlc3VsdCA9IGF3YWl0IGF1dGhHdWFyZC5jaGVja05ldHdvcmtBY2Nlc3MoKTtcclxuICAgICAgaWYgKCFndWFyZFJlc3VsdC5jYW5BY2Nlc3MpIHtcclxuICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHsgbWVzc2FnZTogZ3VhcmRSZXN1bHQubWVzc2FnZSwgZHVyYXRpb246IDMwMDAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBTdGVwIDE6IENoZWNrIG5hbWUgYXZhaWxhYmlsaXR5XHJcbiAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICfmraPlnKjmo4Dmn6XlkI3np7Dlj6/nlKjmgKcuLi4nO1xyXG4gICAgICBjb25zdCBhdmFpbGFiaWxpdHlSZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLmNoZWNrUGV0TmFtZUF2YWlsYWJpbGl0eSh0aGlzLm5ld1BldE5hbWUpO1xyXG5cclxuICAgICAgaWYgKCFhdmFpbGFiaWxpdHlSZXN1bHQuc3VjY2VzcyB8fCAhYXZhaWxhYmlsaXR5UmVzdWx0LmlzQXZhaWxhYmxlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gYOS/neWtmOWksei0pTogJHthdmFpbGFiaWxpdHlSZXN1bHQuaXNBdmFpbGFibGUgPT09IGZhbHNlID8gJ+ivpeWQjeensOW3suiiq+S9v+eUqO+8jOivt+abtOaNouWPpuS4gOS4quWQjeWtlycgOiAoYXZhaWxhYmlsaXR5UmVzdWx0LmVycm9yIHx8ICfml6Dms5Xmo4Dmn6XlkI3np7AnKX1gO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU3RlcCAyOiBTZXQgdGhlIG5ldyBuYW1lXHJcbiAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICflkI3np7Dlj6/nlKjvvIzmraPlnKjkv53lrZguLi4nO1xyXG4gICAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSBndWFyZFJlc3VsdDtcclxuICAgICAgY29uc3Qgc2V0UmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5zZXRQZXROYW1lKHVzZXJJbmZvLmlkLCB0aGlzLm5ld1BldE5hbWUpO1xyXG5cclxuICAgICAgaWYgKHNldFJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgICAgLy8gVXBkYXRlIFVJIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGV0TmFtZSA9IHRoaXMubmV3UGV0TmFtZTtcclxuICAgICAgICB0aGlzLm5ld1BldE5hbWUgPSAnJzsgLy8gQ2xlYXIgaW5wdXRcclxuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAnJzsgLy8gQ2xlYXIgc3RhdHVzIHRleHRcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBzdG9yZWQgdXNlciBpbmZvIHdpdGggdGhlIG5ldyBuYW1lXHJcbiAgICAgICAgY29uc3QgdXBkYXRlZFVzZXJJbmZvID0geyAuLi51c2VySW5mbywgcGV0X25hbWU6IHRoaXMuY3VycmVudFBldE5hbWUgfTtcclxuICAgICAgICBhd2FpdCBzdG9yYWdlLnNldCh7XHJcbiAgICAgICAgICBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPLFxyXG4gICAgICAgICAgdmFsdWU6IEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRVc2VySW5mbylcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU2hvdyB0b2FzdCBhbmQgbmF2aWdhdGUgYmFja1xyXG4gICAgICAgIHByb21wdC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgbWVzc2FnZTogJ+WuoOeJqeWQjeWtl+W3suabtOaWsO+8gSdcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHJvdXRlci5iYWNrKCk7XHJcbiAgICAgICAgfSwgMTUwMCk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IGDkv53lrZjlpLHotKU6ICR7c2V0UmVzdWx0LmVycm9yIHx8ICfmnKrnn6XplJnor68nfWA7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgIGlmICh0aGlzLnNob3dLZXlib2FyZCkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlS2V5Ym9hcmQoZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvdXRlci5iYWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iXSwibmFtZXMiOlsiIiwiZGF0YSIsImtleXMiLCJvbktleUNsaWNrIiwia2V5IiwiJGVtaXQiLCJ2YWx1ZSIsIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIl9zeXN0ZW0yIiwiX3N5c3RlbTMiLCJfc3lzdGVtNCIsIl9jb25maWciLCJyZXF1aXJlIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0Iiwib3duS2V5cyIsInIiLCJ0IiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiaSIsIl90b1ByaW1pdGl2ZSIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIkFwaVNlcnZpY2UiLCJjb25zdHJ1Y3RvciIsImJhc2VVcmwiLCJDT05GSUciLCJTRVJWRVIiLCJCQVNFX1VSTCIsImJhc2VIZWFkZXJzIiwicmVxdWVzdCIsImFjdGlvbiIsInVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXIiLCJyZXNwb25zZVR5cGUiLCJKU09OIiwic3RyaW5naWZ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInJlc3BvbnNlRGF0YSIsImNvZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImZhaWwiLCJnZXRSYW5raW5ncyIsImxpbWl0IiwicmVzdWx0IiwicmFua2luZ3MiLCJtZXNzYWdlIiwic3luY0NsaWNrcyIsInVzZXJJZCIsImNsaWNrQ291bnQiLCJ1c2VyX2lkIiwiY2xpY2tfY291bnQiLCJjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkiLCJwZXROYW1lIiwicGV0X25hbWUiLCJpc0F2YWlsYWJsZSIsInNldFBldE5hbWUiLCJuZXdOYW1lIiwibmV3X25hbWUiLCJjaGVja0RldmljZVJlZ2lzdHJhdGlvbiIsImRldmljZUlkIiwiZGV2aWNlX2lkIiwibG9nIiwiaXNfcmVnaXN0ZXJlZCIsImNhbl9hdXRvX2FjdGl2YXRlIiwicmVnaXN0ZXJBbmRHZXRVc2VySWQiLCJ2ZXJpZnlVc2VySWRBbmRSZXN0b3JlIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiX2FwaVNlcnZpY2UiLCJjaGVja05ldHdvcmtBY2Nlc3MiLCJfcHJvbWlzaWZpZWRTdG9yYWdlR2V0IiwiZ2V0IiwiX3Byb21pc2lmaWVkU3RvcmFnZVNldCIsInNldCIsImVyciIsImxvY2FsQWN0aXZhdGlvblZhbHVlIiwiU1RPUkFHRV9LRVlTIiwiSVNfTE9DQUxMWV9BQ1RJVkFURUQiLCJ1cmkiLCJjYW5BY2Nlc3MiLCJ1c2VySW5mbyIsInVzZXJJbmZvSlNPTiIsIlVTRVJfSU5GTyIsInBhcnNlIiwiaWQiLCJkZXZpY2VDb2RlIiwiREVWSUNFX0lEIiwiQVBQIiwiTkFNRSIsIlZFUlNJT04iLCJNQVhfQ0xJQ0tTX1BFUl9CQVRDSCIsIlNZTkNfSU5URVJWQUwiLCJSQU5LX0xJTUlUIiwiUEVORElOR19DTElDS1MiLCJMQVNUX1NZTkNfVElNRSIsIlRPVEFMX0NMSUNLUyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJfYXV0aEd1YXJkIiwiX1F3ZXJ0eUtleWJvYXJkIiwiY29tcG9uZW50cyIsIlF3ZXJ0eUtleWJvYXJkIiwidGltZSIsImN1cnJlbnRQZXROYW1lIiwibmV3UGV0TmFtZSIsInN0YXR1c01lc3NhZ2UiLCJzaG93S2V5Ym9hcmQiLCJvbkluaXQiLCJ1cGRhdGVUaW1lIiwic2V0SW50ZXJ2YWwiLCJ1c2VySW5mb1Jlc3VsdCIsInN0b3JhZ2UiLCJub3ciLCJEYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsInRvZ2dsZUtleWJvYXJkIiwic2hvdyIsImhhbmRsZUtleUNsaWNrIiwiZGV0YWlsIiwic2xpY2UiLCJzYXZlUGV0TmFtZSIsImd1YXJkUmVzdWx0IiwiYXV0aEd1YXJkIiwicHJvbXB0Iiwic2hvd1RvYXN0IiwiZHVyYXRpb24iLCJhdmFpbGFiaWxpdHlSZXN1bHQiLCJzZXRSZXN1bHQiLCJ1cGRhdGVkVXNlckluZm8iLCJzZXRUaW1lb3V0Iiwicm91dGVyIiwiYmFjayIsImdv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