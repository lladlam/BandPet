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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtaW5nXFxpbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9Rd2VydHlLZXlib2FyZC51eCIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvYXBpLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2F1dGgtZ3VhcmQuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL0JhbmRQZXQvc3JjL25hbWluZy9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJrZXlib2FyZC1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwia2V5Ym9hcmQtZ3JpZFwiPlxuICAgICAgPGRpdiBmb3I9XCJ7eyByb3cgaW4ga2V5cyB9fVwiIGNsYXNzPVwia2V5Ym9hcmQtcm93XCI+XG4gICAgICAgIDxkaXYgZm9yPVwie3sga2V5IGluIHJvdyB9fVwiIGNsYXNzPVwia2V5IHt7a2V5Lmxlbmd0aCA+IDEgPyAnc3BlY2lhbC1rZXknIDogJyd9fVwiIG9uY2xpY2s9XCJvbktleUNsaWNrKGtleSlcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImtleS10ZXh0XCI+e3sga2V5IH19PC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgLmtleWJvYXJkLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICAua2V5Ym9hcmQtZ3JpZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAua2V5Ym9hcmQtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAua2V5IHtcbiAgICB3aWR0aDogNDJweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmMyZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luOiAwIDJweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5zcGVjaWFsLWtleSB7XG4gICAgd2lkdGg6IDY1cHg7XG4gIH1cbiAgLmtleS10ZXh0IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhOiB7XG4gICAgICBrZXlzOiBbXG4gICAgICAgIFsncScsICd3JywgJ2UnLCAncicsICd0JywgJ3knLCAndScsICdpJywgJ28nLCAncCddLFxuICAgICAgICBbJ2EnLCAncycsICdkJywgJ2YnLCAnZycsICdoJywgJ2onLCAnaycsICdsJ10sXG4gICAgICAgIFsnU2hpZnQnLCAneicsICd4JywgJ2MnLCAndicsICdiJywgJ24nLCAnbScsICfijKsnXSxcbiAgICAgICAgWydTcGFjZScsICfinJMnXVxuICAgICAgXVxuICAgICAgLy8gTm90ZTogQSByZWFsIGltcGxlbWVudGF0aW9uIHdvdWxkIGhhbmRsZSBzaGlmdCBzdGF0ZSwgYnV0IHRoaXMgaXMgYSBzaW1wbGlmaWVkIHZlcnNpb24uXG4gICAgfSxcbiAgICBvbktleUNsaWNrKGtleSkge1xuICAgICAgdGhpcy4kZW1pdCgna2V5Y2xpY2snLCB7IHZhbHVlOiBrZXkgfSk7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbiIsIi8vIGFwaS1zZXJ2aWNlLmpzXG5pbXBvcnQgZmV0Y2ggZnJvbSAnQHN5c3RlbS5mZXRjaCc7XG5pbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XG5pbXBvcnQgcHJvbXB0IGZyb20gJ0BzeXN0ZW0ucHJvbXB0JztcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vY29uZmlnLmpzJztcblxuY2xhc3MgQXBpU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIOS4rei9rOacjeWKoeWZqOWcsOWdgCAtIOS7jiBjb25maWcuanMg6K+75Y+WXG4gICAgdGhpcy5iYXNlVXJsID0gQ09ORklHLlNFUlZFUi5CQVNFX1VSTDtcbiAgICB0aGlzLmJhc2VIZWFkZXJzID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9XG4gIH1cblxuICAvLyDpgJrnlKjor7fmsYLmlrnms5UgLSDpgJrov4fkuK3ovazmnI3liqHlmajovazlj5FcbiAgYXN5bmMgcmVxdWVzdChhY3Rpb24sIGRhdGEgPSB7fSkge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vYXBpYDtcbiAgICBcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgdXJsLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXI6IHRoaXMuYmFzZUhlYWRlcnMsXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xuICAgIH07XG5cbiAgICBvcHRpb25zLmRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IGFjdGlvbiwgLi4uZGF0YSB9KTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmZXRjaC5mZXRjaCh7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XG5cbiAgICAgICAgICBpZiAocmVzcG9uc2UuY29kZSA+PSAyMDAgJiYgcmVzcG9uc2UuY29kZSA8IDMwMCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZURhdGEpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEhUVFAgRXJyb3I6ICR7cmVzcG9uc2UuY29kZX1gLCByZXNwb25zZSk7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBIVFRQICR7cmVzcG9uc2UuY29kZX06ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2VEYXRhKX1gKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IChlcnJvciwgY29kZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFJlcXVlc3QgRmFpbGVkOiAke2NvZGV9YCwgZXJyb3IpO1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkOiAke2Vycm9yLmRhdGF9YCkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8vIOiOt+WPluaOkuihjOamnFxuICBhc3luYyBnZXRSYW5raW5ncyhsaW1pdCA9IDEwKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnZ2V0X3JhbmtpbmdzJywge1xuICAgICAgICBsaW1pdDogbGltaXRcbiAgICAgIH0pXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICByYW5raW5nczogcmVzdWx0LnJhbmtpbmdzIHx8IFtdXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaOkuihjOamnOWksei0pTonLCBlcnJvcilcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICByYW5raW5nczogW10sXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8g5LiK5oql54K55Ye75qyh5pWwXG4gIGFzeW5jIHN5bmNDbGlja3ModXNlcklkLCBjbGlja0NvdW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMucmVxdWVzdCgnc3luY19jbGlja3MnLCB7XG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcbiAgICAgICAgY2xpY2tfY291bnQ6IGNsaWNrQ291bnRcbiAgICAgIH0pXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5LiK5oql54K55Ye75qyh5pWw5aSx6LSlOicsIGVycm9yKVxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICB9XG5cbiAgLy8g5qOA5p+l5a6g54mp5ZCN5piv5ZCm5Y+v55SoXG4gIGFzeW5jIGNoZWNrUGV0TmFtZUF2YWlsYWJpbGl0eShwZXROYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnY2hlY2tfcGV0X25hbWUnLCB7XG4gICAgICAgIHBldF9uYW1lOiBwZXROYW1lXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIC4uLnJlc3VsdCB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfmo4Dmn6XlrqDnianlkI3lj6/nlKjmgKfml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlLCBpc0F2YWlsYWJsZTogZmFsc2UgfTtcbiAgICB9XG4gIH1cblxuICAvLyDkv67mlLnlrqDnianlkI1cbiAgYXN5bmMgc2V0UGV0TmFtZSh1c2VySWQsIG5ld05hbWUpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdzZXRfcGV0X25hbWUnLCB7XG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcbiAgICAgICAgbmV3X25hbWU6IG5ld05hbWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5L+u5pS55a6g54mp5ZCN5aSx6LSlOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIOmihOa/gOa0u+ajgOafpVxuICBhc3luYyBjaGVja0RldmljZVJlZ2lzdHJhdGlvbihkZXZpY2VJZCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2NoZWNrX3JlZ2lzdHJhdGlvbicsIHtcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygn6aKE5r+A5rS75qOA5p+l5oiQ5YqfOicsIHJlc3VsdCk7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign6aKE5r+A5rS75qOA5p+l5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIOazqOWGjOiuvuWkh+W5tuiOt+WPlueUqOaIt0lEXG4gIGFzeW5jIHJlZ2lzdGVyQW5kR2V0VXNlcklkKGRldmljZUlkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgncmVnaXN0ZXJfZGV2aWNlX2FuZF9nZXRfaWQnLCB7XG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWRcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICBjb25zb2xlLmxvZygn5rOo5YaM6K6+5aSH5bm26I635Y+W55So5oi3SUTmiJDlip86JywgcmVzdWx0LnVzZXJJbmZvKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdXNlckluZm86IHJlc3VsdC51c2VySW5mbyB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcign6I635Y+W55So5oi3SUTlpLHotKU6JywgcmVzdWx0ID8gcmVzdWx0LmVycm9yIDogJ+acquefpemUmeivrycpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IChyZXN1bHQgPyByZXN1bHQuZXJyb3IgOiAn5pyN5Yqh5Zmo5pyq6L+U5Zue5oiQ5Yqf54q25oCBJykgfTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5rOo5YaM5oiW6I635Y+W55So5oi3SUTml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICB9XG5cbiAgLy8g6aqM6K+B55So5oi3SUTlubbmgaLlpI3mlbDmja5cbiAgYXN5bmMgdmVyaWZ5VXNlcklkQW5kUmVzdG9yZShkZXZpY2VJZCwgdXNlcklkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgndmVyaWZ5X3VzZXJfaWRfYW5kX3Jlc3RvcmUnLCB7XG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWQsXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVzZXJJbmZvOiByZXN1bHQudXNlckluZm8gfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogKHJlc3VsdCA/IHJlc3VsdC5lcnJvciA6ICfpqozor4HlpLHotKUnKSB9O1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfpqozor4HnlKjmiLdJROaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwaVNlcnZpY2UoKVxuIiwiLy8gc3JjL2NvbW1vbi9qcy9hdXRoLWd1YXJkLmpzXG5cbmltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XG5pbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcbmltcG9ydCBBcGlTZXJ2aWNlIGZyb20gJy4vYXBpLXNlcnZpY2UuanMnO1xuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25maWcuanMnO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgdXNlciBoYXMgdGhlIG5lY2Vzc2FyeSBhY3RpdmF0aW9uIGFuZCBjcmVkZW50aWFscyB0byBhY2Nlc3MgYSBuZXR3b3JrIGZlYXR1cmUuXG4gKiBUaGlzIGZ1bmN0aW9uIGltcGxlbWVudHMgdGhlIGZvbGxvd2luZyBsb2dpYzpcbiAqIDEuIENoZWNrcyBmb3IgYSBsb2NhbCBhY3RpdmF0aW9uIGZsYWcuIElmIG5vdCBwcmVzZW50LCByZWRpcmVjdHMgdG8gdGhlIGFjdGl2YXRpb24gcGFnZS5cbiAqIDIuIElmIGxvY2FsbHkgYWN0aXZhdGVkLCBjaGVja3MgZm9yIHN0b3JlZCB1c2VyIGluZm8gd2l0aCBhIHNlcnZlci1zaWRlIElELlxuICogMy4gSWYgdXNlciBpbmZvIGlzIG1pc3NpbmcsIGl0IGF0dGVtcHRzIHRvIGZldGNoIGl0IGZyb20gdGhlIHNlcnZlciB1c2luZyB0aGUgc3RvcmVkIGRldmljZSBjb2RlLlxuICogNC4gUmV0dXJucyB0aGUgYWNjZXNzIHN0YXR1cyBhbmQgdXNlciBpbmZvLlxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gQW4gb2JqZWN0IHdpdGg6IHsgY2FuQWNjZXNzOiBib29sZWFuLCB1c2VySW5mbzogT2JqZWN0fG51bGwsIG1lc3NhZ2U6IHN0cmluZyB9XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrTmV0d29ya0FjY2VzcygpIHtcbiAgdHJ5IHtcbiAgICAvLyAxLiBDaGVjayBmb3IgbG9jYWwgYWN0aXZhdGlvblxuICAgIGNvbnN0IGxvY2FsQWN0aXZhdGlvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0KHsga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLklTX0xPQ0FMTFlfQUNUSVZBVEVEIH0pO1xuICAgIGlmIChsb2NhbEFjdGl2YXRpb24udmFsdWUgIT09ICd0cnVlJykge1xuICAgICAgcm91dGVyLnB1c2goeyB1cmk6ICdhY3RpdmF0ZScgfSk7XG4gICAgICByZXR1cm4geyBjYW5BY2Nlc3M6IGZhbHNlLCB1c2VySW5mbzogbnVsbCwgbWVzc2FnZTogJ+iuvuWkh+acqua/gOa0u++8jOivt+WFiOa/gOa0u+OAgicgfTtcbiAgICB9XG5cbiAgICAvLyAyLiBDaGVjayBmb3IgZXhpc3RpbmcgVXNlciBJRFxuICAgIGNvbnN0IHVzZXJJbmZvUmVzdWx0ID0gYXdhaXQgc3RvcmFnZS5nZXQoeyBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPIH0pO1xuICAgIGlmICh1c2VySW5mb1Jlc3VsdC52YWx1ZSkge1xuICAgICAgY29uc3QgdXNlckluZm8gPSBKU09OLnBhcnNlKHVzZXJJbmZvUmVzdWx0LnZhbHVlKTtcbiAgICAgIGlmICh1c2VySW5mbyAmJiB1c2VySW5mby5pZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnQXV0aEd1YXJkOiBVc2VyIElEIGZvdW5kIGluIHN0b3JhZ2UuJyk7XG4gICAgICAgIHJldHVybiB7IGNhbkFjY2VzczogdHJ1ZSwgdXNlckluZm86IHVzZXJJbmZvLCBtZXNzYWdlOiAn6aqM6K+B6YCa6L+HJyB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDMuIFVzZXIgSUQgaXMgbWlzc2luZywgdHJ5IHRvIGZldGNoIGl0XG4gICAgY29uc29sZS5sb2coJ0F1dGhHdWFyZDogVXNlciBJRCBub3QgZm91bmQsIGF0dGVtcHRpbmcgdG8gZmV0Y2ggZnJvbSBzZXJ2ZXIuJyk7XG4gICAgXG4gICAgLy8gV2UgbmVlZCB0aGUgZGV2aWNlIGNvZGUgdG8gZ2V0IHRoZSB1c2VyIElEXG4gICAgY29uc3QgZGV2aWNlQ29kZVJlc3VsdCA9IGF3YWl0IHN0b3JhZ2UuZ2V0KHsga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLkRFVklDRV9JRCB9KTtcbiAgICBpZiAoIWRldmljZUNvZGVSZXN1bHQudmFsdWUpIHtcbiAgICAgICAgLy8gVGhpcyBjYXNlIGlzIHVubGlrZWx5IGlmIGxvY2FsIGFjdGl2YXRpb24gd29ya2VkLCBidXQgZ29vZCB0byBoYW5kbGUuXG4gICAgICAgIHJvdXRlci5wdXNoKHsgdXJpOiAnYWN0aXZhdGUnIH0pO1xuICAgICAgICByZXR1cm4geyBjYW5BY2Nlc3M6IGZhbHNlLCB1c2VySW5mbzogbnVsbCwgbWVzc2FnZTogJ+aXoOazleaJvuWIsOiuvuWkh+egge+8jOivt+mHjeaWsOa/gOa0u+OAgicgfTtcbiAgICB9XG4gICAgY29uc3QgZGV2aWNlQ29kZSA9IGRldmljZUNvZGVSZXN1bHQudmFsdWU7XG5cbiAgICBjb25zdCBhcGlSZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLnJlZ2lzdGVyQW5kR2V0VXNlcklkKGRldmljZUNvZGUpO1xuXG4gICAgaWYgKGFwaVJlc3VsdC5zdWNjZXNzICYmIGFwaVJlc3VsdC51c2VySW5mbyAmJiAoYXBpUmVzdWx0LnVzZXJJbmZvLmlkIHx8IGFwaVJlc3VsdC51c2VySW5mby51c2VyX251bWJlcikpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdBdXRoR3VhcmQ6IFN1Y2Nlc3NmdWxseSBmZXRjaGVkIG5ldyBVc2VyIElELicpO1xuICAgICAgXG4gICAgICBjb25zdCB1c2VySW5mb1RvU2F2ZSA9IHtcbiAgICAgICAgaWQ6IGFwaVJlc3VsdC51c2VySW5mby5pZCB8fCBhcGlSZXN1bHQudXNlckluZm8udXNlcl9udW1iZXIsXG4gICAgICAgIHVzZXJfbnVtYmVyOiBhcGlSZXN1bHQudXNlckluZm8udXNlcl9udW1iZXIsXG4gICAgICAgIHBldF9uYW1lOiBhcGlSZXN1bHQudXNlckluZm8ucGV0X25hbWUsXG4gICAgICAgIHRvdGFsX2NsaWNrczogYXBpUmVzdWx0LnVzZXJJbmZvLnRvdGFsX2NsaWNrcyB8fCAwXG4gICAgICB9O1xuXG4gICAgICAvLyBTYXZlIHRoZSBuZXdseSBmZXRjaGVkIHVzZXIgaW5mb1xuICAgICAgYXdhaXQgc3RvcmFnZS5zZXQoeyBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPLCB2YWx1ZTogSlNPTi5zdHJpbmdpZnkodXNlckluZm9Ub1NhdmUpIH0pO1xuICAgICAgcmV0dXJuIHsgY2FuQWNjZXNzOiB0cnVlLCB1c2VySW5mbzogdXNlckluZm9Ub1NhdmUsIG1lc3NhZ2U6ICfnlKjmiLdJROiOt+WPluaIkOWKnycgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ0F1dGhHdWFyZDogRmFpbGVkIHRvIGZldGNoIFVzZXIgSUQuJyk7XG4gICAgICByZXR1cm4geyBjYW5BY2Nlc3M6IGZhbHNlLCB1c2VySW5mbzogbnVsbCwgbWVzc2FnZTogJ+iOt+WPlueUqOaIt0lE5aSx6LSl77yM6K+35qOA5p+l572R57uc5ZCO6YeN6K+V44CCJyB9O1xuICAgIH1cblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignQXV0aEd1YXJkOiBFcnJvciBkdXJpbmcgY2hlY2tOZXR3b3JrQWNjZXNzJywgZSk7XG4gICAgcmV0dXJuIHsgY2FuQWNjZXNzOiBmYWxzZSwgdXNlckluZm86IG51bGwsIG1lc3NhZ2U6IGDlj5HnlJ/plJnor686ICR7ZS5tZXNzYWdlfWAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNoZWNrTmV0d29ya0FjY2Vzc1xufTtcbiIsIi8vIGNvbmZpZy5qc1xuZXhwb3J0IGNvbnN0IENPTkZJRyA9IHtcbiAgLy8g5Lit6L2s5pyN5Yqh5Zmo6YWN572uXG4gIFNFUlZFUjoge1xuICAgIEJBU0VfVVJMOiAnaHR0cDovLzEwMy4yMDUuMjUzLjg3OjIyMjA3J1xuICB9LFxuICBcbiAgLy8g5rOo5oSP77yaVVJMIOWJjee8gOWcqCBhcGktc2VydmljZS5qcyDkuK3noaznvJbnoIHkuoZcbiAgLy8g6L+Z6YeM5LiN5YaN6ZyA6KaB6YWN572uXG4gIFxuICAvLyDlupTnlKjphY3nva5cbiAgQVBQOiB7XG4gICAgTkFNRTogJ0JhbmRQZXQnLFxuICAgIFZFUlNJT046ICcwLjMuNSBBbHBoYScsXG4gICAgTUFYX0NMSUNLU19QRVJfQkFUQ0g6IDUwLFxuICAgIFNZTkNfSU5URVJWQUw6IDMwMDAwMCxcbiAgICBSQU5LX0xJTUlUOiAxMFxuICB9LFxuICBcbiAgLy8g5a2Y5YKo6ZSu5ZCNXG4gIFNUT1JBR0VfS0VZUzoge1xuICAgIERFVklDRV9JRDogJ2RldmljZV9pZCcsXG4gICAgVVNFUl9JTkZPOiAndXNlcl9pbmZvJyxcbiAgICBQRU5ESU5HX0NMSUNLUzogJ3BlbmRpbmdfY2xpY2tzJyxcbiAgICBMQVNUX1NZTkNfVElNRTogJ2xhc3Rfc3luY190aW1lJyxcbiAgICBUT1RBTF9DTElDS1M6ICd0b3RhbF9jbGlja3MnXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjYuOFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS42LjhcIjsiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci1jb250YWluZXJcIiBzaG93PVwie3shc2hvd0tleWJvYXJkfX1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uL2JhY2sucG5nXCIgY2xhc3M9XCJwYWdlLWhlYWRlci1iYWNrLWJ1dHRvblwiIG9uY2xpY2s9XCJnb0JhY2tcIj48L2ltYWdlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRpdGxlLXRpbWVcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtdGltZS1kaXNwbGF5XCI+e3sgdGltZSB9fTwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtaGVhZGVyLXRpdGxlXCI+5a6g54mp5ZG95ZCNPC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRlbnRcIiBzaG93PVwie3shc2hvd0tleWJvYXJkfX1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1uYW1lLXNlY3Rpb25cIj5cbiAgICAgICAgICA8dGV4dD7lvZPliY3lkI3lrZc6IHt7IGN1cnJlbnRQZXROYW1lIH19PC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWUtaW5wdXRcIiBvbmNsaWNrPVwidG9nZ2xlS2V5Ym9hcmQodHJ1ZSlcIj5cbiAgICAgICAgICA8dGV4dD57eyBuZXdQZXROYW1lIHx8ICfngrnlh7vovpPlhaXmlrDlkI3lrZcnIH19PC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi9jaGVjay5wbmdcIiBjbGFzcz1cImNvbmZpcm0tYnV0dG9uXCIgb25jbGljaz1cInNhdmVQZXROYW1lXCI+PC9pbWFnZT5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJzdGF0dXMtdGV4dFwiPnt7IHN0YXR1c01lc3NhZ2UgfX08L3RleHQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8UXdlcnR5S2V5Ym9hcmQgc2hvdz1cInt7c2hvd0tleWJvYXJkfX1cIiBvbmtleWNsaWNrPVwiaGFuZGxlS2V5Q2xpY2tcIj48L1F3ZXJ0eUtleWJvYXJkPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAucGFnZS10aW1lLWRpc3BsYXkge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgfVxuICAucGFnZS1oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTBweDtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC5wYWdlLWhlYWRlci1iYWNrLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFOTBGRjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAucGFnZS1oZWFkZXItYmFjay1hcnJvdyB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG4gIC5wYWdlLWhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG4gIC5oZWFkZXItdGl0bGUtdGltZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5wYWdlLWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRlbnQtY29udGFpbmVyIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuY3VycmVudC1uYW1lLXNlY3Rpb24geyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XG4gIC5jdXJyZW50LW5hbWUtc2VjdGlvbiB0ZXh0IHsgY29sb3I6ICNBQUE7IGZvbnQtc2l6ZTogMjhweDsgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuICAubmFtZS1pbnB1dCB7IHdpZHRoOiA0MDBweDsgaGVpZ2h0OiA3MHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBOyBib3JkZXItcmFkaXVzOiAxNXB4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IHBhZGRpbmctbGVmdDogMjBweDsgbWFyZ2luLWJvdHRvbTogNDBweDsgfVxuICAubmFtZS1pbnB1dCB0ZXh0IHsgY29sb3I6ICNGRkY7IGZvbnQtc2l6ZTogMzJweDsgfVxuICAuY29uZmlybS1idXR0b24geyB3aWR0aDogMTAwcHg7IGhlaWdodDogMTAwcHg7IGJvcmRlci1yYWRpdXM6IDUwcHg7IGJhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIC5jb25maXJtLWljb24geyBjb2xvcjogI0ZGRjsgZm9udC1zaXplOiA2MHB4OyB9XG4gIC5zdGF0dXMtdGV4dCB7IGNvbG9yOiAjRkYzQjMwOyBmb250LXNpemU6IDI0cHg7IG1hcmdpbi10b3A6IDIwcHg7IH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xuICBpbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xuICBpbXBvcnQgcHJvbXB0IGZyb20gJ0BzeXN0ZW0ucHJvbXB0JztcbiAgaW1wb3J0IEFwaVNlcnZpY2UgZnJvbSAnLi4vY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzJztcbiAgaW1wb3J0IGF1dGhHdWFyZCBmcm9tICcuLi9jb21tb24vanMvYXV0aC1ndWFyZC5qcyc7XG4gIGltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4uL2NvbW1vbi9qcy9jb25maWcuanMnO1xuICBpbXBvcnQgUXdlcnR5S2V5Ym9hcmQgZnJvbSAnLi4vY29tbW9uL1F3ZXJ0eUtleWJvYXJkLnV4JztcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czoge1xuICAgICAgUXdlcnR5S2V5Ym9hcmRcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIHRpbWU6ICcwMDowMCcsXG4gICAgICBjdXJyZW50UGV0TmFtZTogJy4uLicsXG4gICAgICBuZXdQZXROYW1lOiAnJyxcbiAgICAgIHN0YXR1c01lc3NhZ2U6ICcnLFxuICAgICAgc2hvd0tleWJvYXJkOiBmYWxzZVxuICAgIH0sXG4gICAgYXN5bmMgb25Jbml0KCkge1xuICAgICAgdGhpcy51cGRhdGVUaW1lKCk7XG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVRpbWUsIDUwMDApO1xuXG4gICAgICAvLyBBdHRlbXB0IHRvIGxvYWQgY3VycmVudCBuYW1lIGZvciBkaXNwbGF5IHB1cnBvc2VzIG9ubHlcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVzZXJJbmZvUmVzdWx0ID0gYXdhaXQgc3RvcmFnZS5nZXQoeyBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPIH0pO1xuICAgICAgICBpZiAodXNlckluZm9SZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICBjb25zdCB1c2VySW5mbyA9IEpTT04ucGFyc2UodXNlckluZm9SZXN1bHQudmFsdWUpO1xuICAgICAgICAgIHRoaXMuY3VycmVudFBldE5hbWUgPSB1c2VySW5mby5wZXRfbmFtZSB8fCAnKOaXoOWQjSknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3VycmVudFBldE5hbWUgPSAnKOaXoOWQjSknO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBldE5hbWUgPSAnKOaXoOWQjSknO1xuICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlVGltZSgpIHtcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBob3VycyA9IG5vdy5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgIHRoaXMudGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICB9LFxuICAgIHRvZ2dsZUtleWJvYXJkKHNob3cpIHtcbiAgICAgIHRoaXMuc2hvd0tleWJvYXJkID0gc2hvdztcbiAgICB9LFxuICAgIGhhbmRsZUtleUNsaWNrKGUpIHtcbiAgICAgIGNvbnN0IGtleSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgaWYgKGtleSA9PT0gJ+KMqycpIHtcbiAgICAgICAgdGhpcy5uZXdQZXROYW1lID0gdGhpcy5uZXdQZXROYW1lLnNsaWNlKDAsIC0xKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAn4pyTJykge1xuICAgICAgICB0aGlzLnRvZ2dsZUtleWJvYXJkKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zYXZlUGV0TmFtZSgpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdTcGFjZScpIHtcbiAgICAgICAgdGhpcy5uZXdQZXROYW1lICs9ICcgJztcbiAgICAgIH0gZWxzZSBpZiAoa2V5ICE9PSAnU2hpZnQnKSB7XG4gICAgICAgIHRoaXMubmV3UGV0TmFtZSArPSBrZXk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBzYXZlUGV0TmFtZSgpIHtcbiAgICAgIGlmICghdGhpcy5uZXdQZXROYW1lIHx8IHRoaXMubmV3UGV0TmFtZS5sZW5ndGggPiAxMCkge1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn5ZCN5a2X6ZyA5ZyoMS0xMOS4quWtl+espuS5i+mXtCc7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc3QgZ3VhcmRSZXN1bHQgPSBhd2FpdCBhdXRoR3VhcmQuY2hlY2tOZXR3b3JrQWNjZXNzKCk7XG4gICAgICBpZiAoIWd1YXJkUmVzdWx0LmNhbkFjY2Vzcykge1xuICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHsgbWVzc2FnZTogZ3VhcmRSZXN1bHQubWVzc2FnZSwgZHVyYXRpb246IDMwMDAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gU3RlcCAxOiBDaGVjayBuYW1lIGF2YWlsYWJpbGl0eVxuICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gJ+ato+WcqOajgOafpeWQjeensOWPr+eUqOaApy4uLic7XG4gICAgICBjb25zdCBhdmFpbGFiaWxpdHlSZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLmNoZWNrUGV0TmFtZUF2YWlsYWJpbGl0eSh0aGlzLm5ld1BldE5hbWUpO1xuXG4gICAgICBpZiAoIWF2YWlsYWJpbGl0eVJlc3VsdC5zdWNjZXNzIHx8ICFhdmFpbGFiaWxpdHlSZXN1bHQuaXNBdmFpbGFibGUpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gYOS/neWtmOWksei0pTogJHthdmFpbGFiaWxpdHlSZXN1bHQuaXNBdmFpbGFibGUgPT09IGZhbHNlID8gJ+ivpeWQjeensOW3suiiq+S9v+eUqO+8jOivt+abtOaNouWPpuS4gOS4quWQjeWtlycgOiAoYXZhaWxhYmlsaXR5UmVzdWx0LmVycm9yIHx8ICfml6Dms5Xmo4Dmn6XlkI3np7AnKX1gO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFN0ZXAgMjogU2V0IHRoZSBuZXcgbmFtZVxuICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gJ+WQjeensOWPr+eUqO+8jOato+WcqOS/neWtmC4uLic7XG4gICAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSBndWFyZFJlc3VsdDtcbiAgICAgIGNvbnN0IHNldFJlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2Uuc2V0UGV0TmFtZSh1c2VySW5mby5pZCwgdGhpcy5uZXdQZXROYW1lKTtcblxuICAgICAgaWYgKHNldFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgIC8vIFVwZGF0ZSBVSSBpbW1lZGlhdGVseVxuICAgICAgICB0aGlzLmN1cnJlbnRQZXROYW1lID0gdGhpcy5uZXdQZXROYW1lO1xuICAgICAgICB0aGlzLm5ld1BldE5hbWUgPSAnJzsgLy8gQ2xlYXIgaW5wdXRcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gJyc7IC8vIENsZWFyIHN0YXR1cyB0ZXh0XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBzdG9yZWQgdXNlciBpbmZvIHdpdGggdGhlIG5ldyBuYW1lXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRVc2VySW5mbyA9IHsgLi4udXNlckluZm8sIHBldF9uYW1lOiB0aGlzLmN1cnJlbnRQZXROYW1lIH07XG4gICAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KHtcbiAgICAgICAgICBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPLFxuICAgICAgICAgIHZhbHVlOiBKU09OLnN0cmluZ2lmeSh1cGRhdGVkVXNlckluZm8pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNob3cgdG9hc3QgYW5kIG5hdmlnYXRlIGJhY2tcbiAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogJ+WuoOeJqeWQjeWtl+W3suabtOaWsO+8gSdcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJvdXRlci5iYWNrKCk7XG4gICAgICAgIH0sIDE1MDApO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSBg5L+d5a2Y5aSx6LSlOiAke3NldFJlc3VsdC5lcnJvciB8fCAn5pyq55+l6ZSZ6K+vJ31gO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ29CYWNrKCkge1xuICAgICAgaWYgKHRoaXMuc2hvd0tleWJvYXJkKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlS2V5Ym9hcmQoZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm91dGVyLmJhY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIiIsImRhdGEiLCJrZXlzIiwib25LZXlDbGljayIsImtleSIsIiRlbWl0IiwidmFsdWUiLCJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfc3lzdGVtMiIsIl9zeXN0ZW0zIiwiX3N5c3RlbTQiLCJfY29uZmlnIiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIm93bktleXMiLCJyIiwidCIsIk9iamVjdCIsImdldE93blByb3BlcnR5U3ltYm9scyIsIm8iLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwicHVzaCIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImkiLCJfdG9QcmltaXRpdmUiLCJTeW1ib2wiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJBcGlTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJiYXNlVXJsIiwiQ09ORklHIiwiU0VSVkVSIiwiQkFTRV9VUkwiLCJiYXNlSGVhZGVycyIsInJlcXVlc3QiLCJhY3Rpb24iLCJ1cmwiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVyIiwicmVzcG9uc2VUeXBlIiwiSlNPTiIsInN0cmluZ2lmeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmV0Y2giLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJyZXNwb25zZURhdGEiLCJjb2RlIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJmYWlsIiwiZ2V0UmFua2luZ3MiLCJsaW1pdCIsInJlc3VsdCIsInJhbmtpbmdzIiwibWVzc2FnZSIsInN5bmNDbGlja3MiLCJ1c2VySWQiLCJjbGlja0NvdW50IiwidXNlcl9pZCIsImNsaWNrX2NvdW50IiwiY2hlY2tQZXROYW1lQXZhaWxhYmlsaXR5IiwicGV0TmFtZSIsInBldF9uYW1lIiwiaXNBdmFpbGFibGUiLCJzZXRQZXROYW1lIiwibmV3TmFtZSIsIm5ld19uYW1lIiwiY2hlY2tEZXZpY2VSZWdpc3RyYXRpb24iLCJkZXZpY2VJZCIsImRldmljZV9pZCIsImxvZyIsInJlZ2lzdGVyQW5kR2V0VXNlcklkIiwidXNlckluZm8iLCJ2ZXJpZnlVc2VySWRBbmRSZXN0b3JlIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiX2FwaVNlcnZpY2UiLCJjaGVja05ldHdvcmtBY2Nlc3MiLCJsb2NhbEFjdGl2YXRpb24iLCJnZXQiLCJTVE9SQUdFX0tFWVMiLCJJU19MT0NBTExZX0FDVElWQVRFRCIsInVyaSIsImNhbkFjY2VzcyIsInVzZXJJbmZvUmVzdWx0IiwiVVNFUl9JTkZPIiwicGFyc2UiLCJpZCIsImRldmljZUNvZGVSZXN1bHQiLCJERVZJQ0VfSUQiLCJkZXZpY2VDb2RlIiwiYXBpUmVzdWx0IiwidXNlcl9udW1iZXIiLCJ1c2VySW5mb1RvU2F2ZSIsInRvdGFsX2NsaWNrcyIsInNldCIsIkFQUCIsIk5BTUUiLCJWRVJTSU9OIiwiTUFYX0NMSUNLU19QRVJfQkFUQ0giLCJTWU5DX0lOVEVSVkFMIiwiUkFOS19MSU1JVCIsIlBFTkRJTkdfQ0xJQ0tTIiwiTEFTVF9TWU5DX1RJTUUiLCJUT1RBTF9DTElDS1MiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX2F1dGhHdWFyZCIsIl9Rd2VydHlLZXlib2FyZCIsImNvbXBvbmVudHMiLCJRd2VydHlLZXlib2FyZCIsInRpbWUiLCJjdXJyZW50UGV0TmFtZSIsIm5ld1BldE5hbWUiLCJzdGF0dXNNZXNzYWdlIiwic2hvd0tleWJvYXJkIiwib25Jbml0IiwidXBkYXRlVGltZSIsInNldEludGVydmFsIiwic3RvcmFnZSIsIm5vdyIsIkRhdGUiLCJob3VycyIsImdldEhvdXJzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwidG9nZ2xlS2V5Ym9hcmQiLCJzaG93IiwiaGFuZGxlS2V5Q2xpY2siLCJkZXRhaWwiLCJzbGljZSIsInNhdmVQZXROYW1lIiwiZ3VhcmRSZXN1bHQiLCJhdXRoR3VhcmQiLCJwcm9tcHQiLCJzaG93VG9hc3QiLCJkdXJhdGlvbiIsImF2YWlsYWJpbGl0eVJlc3VsdCIsInNldFJlc3VsdCIsInVwZGF0ZWRVc2VySW5mbyIsInNldFRpbWVvdXQiLCJyb3V0ZXIiLCJiYWNrIiwiZ29CYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQW1EQUEsSUFBQUEsV0FBQUEsUUFBQUEsT0FBQUEsR0FBaUI7Z0NBQ2JDLE1BQU07b0NBQ0pDLE1BQU07d0NBQ0o7NENBQUM7NENBQUs7NENBQUs7NENBQUs7NENBQUs7NENBQUs7NENBQUs7NENBQUs7NENBQUs7NENBQUs7eUNBQUk7d0NBQ2xEOzRDQUFDOzRDQUFLOzRDQUFLOzRDQUFLOzRDQUFLOzRDQUFLOzRDQUFLOzRDQUFLOzRDQUFLO3lDQUFJO3dDQUM3Qzs0Q0FBQzs0Q0FBUzs0Q0FBSzs0Q0FBSzs0Q0FBSzs0Q0FBSzs0Q0FBSzs0Q0FBSzs0Q0FBSzt5Q0FBSTt3Q0FDakQ7NENBQUM7NENBQVM7eUNBQUk7cUNBQUE7Z0NBR2xCO2dDQUNBQyxZQUFXQyxHQUFHO29DQUNaLElBQUksQ0FBQ0MsS0FBSyxDQUFDLFlBQVk7d0NBQUVDLE9BQU9GO29DQUFJO2dDQUN0Qzs0QkFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkMvREYsSUFBQUcsVUFBQUMsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUMsV0FBQUYsdUJB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