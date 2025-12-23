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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtaW5nXFxpbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9Rd2VydHlLZXlib2FyZC51eCIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvYXBpLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2F1dGgtZ3VhcmQuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL0JhbmRQZXQvc3JjL25hbWluZy9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJrZXlib2FyZC1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwia2V5Ym9hcmQtZ3JpZFwiPlxuICAgICAgPGRpdiBmb3I9XCJ7eyByb3cgaW4ga2V5cyB9fVwiIGNsYXNzPVwia2V5Ym9hcmQtcm93XCI+XG4gICAgICAgIDxkaXYgZm9yPVwie3sga2V5IGluIHJvdyB9fVwiIGNsYXNzPVwia2V5IHt7a2V5Lmxlbmd0aCA+IDEgPyAnc3BlY2lhbC1rZXknIDogJyd9fVwiIG9uY2xpY2s9XCJvbktleUNsaWNrKGtleSlcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImtleS10ZXh0XCI+e3sga2V5IH19PC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgLmtleWJvYXJkLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICAua2V5Ym9hcmQtZ3JpZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAua2V5Ym9hcmQtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAua2V5IHtcbiAgICB3aWR0aDogNDJweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmMyZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luOiAwIDJweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5zcGVjaWFsLWtleSB7XG4gICAgd2lkdGg6IDY1cHg7XG4gIH1cbiAgLmtleS10ZXh0IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhOiB7XG4gICAgICBrZXlzOiBbXG4gICAgICAgIFsncScsICd3JywgJ2UnLCAncicsICd0JywgJ3knLCAndScsICdpJywgJ28nLCAncCddLFxuICAgICAgICBbJ2EnLCAncycsICdkJywgJ2YnLCAnZycsICdoJywgJ2onLCAnaycsICdsJ10sXG4gICAgICAgIFsnU2hpZnQnLCAneicsICd4JywgJ2MnLCAndicsICdiJywgJ24nLCAnbScsICfijKsnXSxcbiAgICAgICAgWydTcGFjZScsICfinJMnXVxuICAgICAgXVxuICAgICAgLy8gTm90ZTogQSByZWFsIGltcGxlbWVudGF0aW9uIHdvdWxkIGhhbmRsZSBzaGlmdCBzdGF0ZSwgYnV0IHRoaXMgaXMgYSBzaW1wbGlmaWVkIHZlcnNpb24uXG4gICAgfSxcbiAgICBvbktleUNsaWNrKGtleSkge1xuICAgICAgdGhpcy4kZW1pdCgna2V5Y2xpY2snLCB7IHZhbHVlOiBrZXkgfSk7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbiIsIi8vIGFwaS1zZXJ2aWNlLmpzXG5pbXBvcnQgZmV0Y2ggZnJvbSAnQHN5c3RlbS5mZXRjaCc7XG5pbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XG5pbXBvcnQgcHJvbXB0IGZyb20gJ0BzeXN0ZW0ucHJvbXB0JztcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vY29uZmlnLmpzJztcblxuY2xhc3MgQXBpU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmFzZUhlYWRlcnMgPSB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyBDT05GSUcuU1VQQUJBU0UuS0VZLFxuICAgICAgJ2FwaWtleSc6IENPTkZJRy5TVVBBQkFTRS5LRVlcbiAgICB9XG4gIH1cblxuICAvLyDpgJrnlKjor7fmsYLmlrnms5VcbiAgYXN5bmMgcmVxdWVzdChlbmRwb2ludCwgbWV0aG9kID0gJ1BPU1QnLCBkYXRhID0gbnVsbCkge1xuICAgIGNvbnN0IHVybCA9IGAke0NPTkZJRy5TVVBBQkFTRS5VUkx9L2Z1bmN0aW9ucy92MS8ke2VuZHBvaW50fWBcbiAgICBcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgdXJsLFxuICAgICAgbWV0aG9kLFxuICAgICAgaGVhZGVyOiB0aGlzLmJhc2VIZWFkZXJzLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbidcbiAgICB9XG5cbiAgICBpZiAoZGF0YSkge1xuICAgICAgb3B0aW9ucy5kYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmV0Y2guZmV0Y2goe1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuXG4gICAgICAgICAgXG5cbiAgICAgICAgICBpZiAocmVzcG9uc2UuY29kZSA+PSAyMDAgJiYgcmVzcG9uc2UuY29kZSA8IDMwMCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZURhdGEpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEhUVFAgRXJyb3I6ICR7cmVzcG9uc2UuY29kZX1gLCByZXNwb25zZSk7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBIVFRQICR7cmVzcG9uc2UuY29kZX06ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2VEYXRhKX1gKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IChlcnJvciwgY29kZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFJlcXVlc3QgRmFpbGVkOiAke2NvZGV9YCwgZXJyb3IpO1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkOiAke2Vycm9yLmRhdGF9YCkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8vIOiOt+WPluaOkuihjOamnFxuICBhc3luYyBnZXRSYW5raW5ncyhsaW1pdCA9IDEwKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdnZXRfcmFua2luZ3MnLFxuICAgICAgICBsaW1pdDogbGltaXRcbiAgICAgIH0pXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICByYW5raW5nczogcmVzdWx0LnJhbmtpbmdzIHx8IFtdXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaOkuihjOamnOWksei0pTonLCBlcnJvcilcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICByYW5raW5nczogW10sXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8g5LiK5oql54K55Ye75qyh5pWwXG4gIGFzeW5jIHN5bmNDbGlja3ModXNlcklkLCBjbGlja0NvdW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdzeW5jX2NsaWNrcycsXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcbiAgICAgICAgY2xpY2tfY291bnQ6IGNsaWNrQ291bnRcbiAgICAgIH0pXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5LiK5oql54K55Ye75qyh5pWw5aSx6LSlOicsIGVycm9yKVxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICB9XG5cbiAgLy8g5qOA5p+l5a6g54mp5ZCN5piv5ZCm5Y+v55SoXG4gIGFzeW5jIGNoZWNrUGV0TmFtZUF2YWlsYWJpbGl0eShwZXROYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdjaGVja19wZXRfbmFtZScsXG4gICAgICAgIHBldF9uYW1lOiBwZXROYW1lXG4gICAgICB9KTtcbiAgICAgIC8vIOWBh+iuvuacjeWKoeWZqOi/lOWbniB7IGlzQXZhaWxhYmxlOiB0cnVlL2ZhbHNlIH1cbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIC4uLnJlc3VsdCB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfmo4Dmn6XlrqDnianlkI3lj6/nlKjmgKfml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlLCBpc0F2YWlsYWJsZTogZmFsc2UgfTtcbiAgICB9XG4gIH1cblxuICAvLyDkv67mlLnlrqDnianlkI1cbiAgYXN5bmMgc2V0UGV0TmFtZSh1c2VySWQsIG5ld05hbWUpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdicmlnaHQtcmVzcG9uZGVyJywgJ1BPU1QnLCB7XG4gICAgICAgIGFjdGlvbjogJ3NldF9wZXRfbmFtZScsXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcbiAgICAgICAgbmV3X25hbWU6IG5ld05hbWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5L+u5pS55a6g54mp5ZCN5aSx6LSlOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIOmihOa/gOa0u+ajgOafpVxuICBhc3luYyBjaGVja0RldmljZVJlZ2lzdHJhdGlvbihkZXZpY2VJZCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2JyaWdodC1yZXNwb25kZXInLCAnUE9TVCcsIHtcbiAgICAgICAgYWN0aW9uOiAnY2hlY2tfcmVnaXN0cmF0aW9uJyxcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygn6aKE5r+A5rS75qOA5p+l5oiQ5YqfOicsIHJlc3VsdCk7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign6aKE5r+A5rS75qOA5p+l5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIOazqOWGjOiuvuWkh+W5tuiOt+WPlueUqOaIt0lEXG4gIGFzeW5jIHJlZ2lzdGVyQW5kR2V0VXNlcklkKGRldmljZUlkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdyZWdpc3Rlcl9kZXZpY2VfYW5kX2dldF9pZCcsXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWRcbiAgICAgIH0pO1xuICAgICAgLy8g5YGH6K6+5pyN5Yqh5Zmo5oiQ5Yqf5pe26L+U5ZueIHsgc3VjY2VzczogdHJ1ZSwgdXNlckluZm86IHsgaWQ6ICcuLi4nLCAuLi4gfSB9XG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfms6jlhozorr7lpIflubbojrflj5bnlKjmiLdJROaIkOWKnzonLCByZXN1bHQudXNlckluZm8pO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1c2VySW5mbzogcmVzdWx0LnVzZXJJbmZvIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCfojrflj5bnlKjmiLdJROWksei0pTonLCByZXN1bHQgPyByZXN1bHQuZXJyb3IgOiAn5pyq55+l6ZSZ6K+vJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogKHJlc3VsdCA/IHJlc3VsdC5lcnJvciA6ICfmnI3liqHlmajmnKrov5Tlm57miJDlip/nirbmgIEnKSB9O1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfms6jlhozmiJbojrflj5bnlKjmiLdJROaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cblxuICAvLyDpqozor4HnlKjmiLdJROW5tuaBouWkjeaVsOaNrlxuICBhc3luYyB2ZXJpZnlVc2VySWRBbmRSZXN0b3JlKGRldmljZUlkLCB1c2VySWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdicmlnaHQtcmVzcG9uZGVyJywgJ1BPU1QnLCB7XG4gICAgICAgIGFjdGlvbjogJ3ZlcmlmeV91c2VyX2lkX2FuZF9yZXN0b3JlJyxcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZCxcbiAgICAgICAgdXNlcl9pZDogdXNlcklkXG4gICAgICB9KTtcbiAgICAgIC8vIOWBh+iuvuacjeWKoeWZqOaIkOWKn+aXtui/lOWbniB7IHN1Y2Nlc3M6IHRydWUsIHVzZXJJbmZvOiB7IC4uLiB9IH1cbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdXNlckluZm86IHJlc3VsdC51c2VySW5mbyB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAocmVzdWx0ID8gcmVzdWx0LmVycm9yIDogJ+mqjOivgeWksei0pScpIH07XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+mqjOivgeeUqOaIt0lE5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBpU2VydmljZSgpXG4iLCIvLyBzcmMvY29tbW9uL2pzL2F1dGgtZ3VhcmQuanNcblxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQHN5c3RlbS5zdG9yYWdlJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xuaW1wb3J0IEFwaVNlcnZpY2UgZnJvbSAnLi9hcGktc2VydmljZS5qcyc7XG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSB1c2VyIGhhcyB0aGUgbmVjZXNzYXJ5IGFjdGl2YXRpb24gYW5kIGNyZWRlbnRpYWxzIHRvIGFjY2VzcyBhIG5ldHdvcmsgZmVhdHVyZS5cbiAqIFRoaXMgZnVuY3Rpb24gaW1wbGVtZW50cyB0aGUgZm9sbG93aW5nIGxvZ2ljOlxuICogMS4gQ2hlY2tzIGZvciBhIGxvY2FsIGFjdGl2YXRpb24gZmxhZy4gSWYgbm90IHByZXNlbnQsIHJlZGlyZWN0cyB0byB0aGUgYWN0aXZhdGlvbiBwYWdlLlxuICogMi4gSWYgbG9jYWxseSBhY3RpdmF0ZWQsIGNoZWNrcyBmb3Igc3RvcmVkIHVzZXIgaW5mbyB3aXRoIGEgc2VydmVyLXNpZGUgSUQuXG4gKiAzLiBJZiB1c2VyIGluZm8gaXMgbWlzc2luZywgaXQgYXR0ZW1wdHMgdG8gZmV0Y2ggaXQgZnJvbSB0aGUgc2VydmVyIHVzaW5nIHRoZSBzdG9yZWQgZGV2aWNlIGNvZGUuXG4gKiA0LiBSZXR1cm5zIHRoZSBhY2Nlc3Mgc3RhdHVzIGFuZCB1c2VyIGluZm8uXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fSBBbiBvYmplY3Qgd2l0aDogeyBjYW5BY2Nlc3M6IGJvb2xlYW4sIHVzZXJJbmZvOiBPYmplY3R8bnVsbCwgbWVzc2FnZTogc3RyaW5nIH1cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2hlY2tOZXR3b3JrQWNjZXNzKCkge1xuICB0cnkge1xuICAgIC8vIDEuIENoZWNrIGZvciBsb2NhbCBhY3RpdmF0aW9uXG4gICAgY29uc3QgbG9jYWxBY3RpdmF0aW9uID0gYXdhaXQgc3RvcmFnZS5nZXQoeyBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuSVNfTE9DQUxMWV9BQ1RJVkFURUQgfSk7XG4gICAgaWYgKGxvY2FsQWN0aXZhdGlvbi52YWx1ZSAhPT0gJ3RydWUnKSB7XG4gICAgICByb3V0ZXIucHVzaCh7IHVyaTogJ2FjdGl2YXRlJyB9KTtcbiAgICAgIHJldHVybiB7IGNhbkFjY2VzczogZmFsc2UsIHVzZXJJbmZvOiBudWxsLCBtZXNzYWdlOiAn6K6+5aSH5pyq5r+A5rS777yM6K+35YWI5r+A5rS744CCJyB9O1xuICAgIH1cblxuICAgIC8vIDIuIENoZWNrIGZvciBleGlzdGluZyBVc2VyIElEXG4gICAgY29uc3QgdXNlckluZm9SZXN1bHQgPSBhd2FpdCBzdG9yYWdlLmdldCh7IGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8gfSk7XG4gICAgaWYgKHVzZXJJbmZvUmVzdWx0LnZhbHVlKSB7XG4gICAgICBjb25zdCB1c2VySW5mbyA9IEpTT04ucGFyc2UodXNlckluZm9SZXN1bHQudmFsdWUpO1xuICAgICAgaWYgKHVzZXJJbmZvICYmIHVzZXJJbmZvLmlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBdXRoR3VhcmQ6IFVzZXIgSUQgZm91bmQgaW4gc3RvcmFnZS4nKTtcbiAgICAgICAgcmV0dXJuIHsgY2FuQWNjZXNzOiB0cnVlLCB1c2VySW5mbzogdXNlckluZm8sIG1lc3NhZ2U6ICfpqozor4HpgJrov4cnIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMy4gVXNlciBJRCBpcyBtaXNzaW5nLCB0cnkgdG8gZmV0Y2ggaXRcbiAgICBjb25zb2xlLmxvZygnQXV0aEd1YXJkOiBVc2VyIElEIG5vdCBmb3VuZCwgYXR0ZW1wdGluZyB0byBmZXRjaCBmcm9tIHNlcnZlci4nKTtcbiAgICBcbiAgICAvLyBXZSBuZWVkIHRoZSBkZXZpY2UgY29kZSB0byBnZXQgdGhlIHVzZXIgSURcbiAgICBjb25zdCBkZXZpY2VDb2RlUmVzdWx0ID0gYXdhaXQgc3RvcmFnZS5nZXQoeyBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuREVWSUNFX0lEIH0pO1xuICAgIGlmICghZGV2aWNlQ29kZVJlc3VsdC52YWx1ZSkge1xuICAgICAgICAvLyBUaGlzIGNhc2UgaXMgdW5saWtlbHkgaWYgbG9jYWwgYWN0aXZhdGlvbiB3b3JrZWQsIGJ1dCBnb29kIHRvIGhhbmRsZS5cbiAgICAgICAgcm91dGVyLnB1c2goeyB1cmk6ICdhY3RpdmF0ZScgfSk7XG4gICAgICAgIHJldHVybiB7IGNhbkFjY2VzczogZmFsc2UsIHVzZXJJbmZvOiBudWxsLCBtZXNzYWdlOiAn5peg5rOV5om+5Yiw6K6+5aSH56CB77yM6K+36YeN5paw5r+A5rS744CCJyB9O1xuICAgIH1cbiAgICBjb25zdCBkZXZpY2VDb2RlID0gZGV2aWNlQ29kZVJlc3VsdC52YWx1ZTtcblxuICAgIGNvbnN0IGFwaVJlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2UucmVnaXN0ZXJBbmRHZXRVc2VySWQoZGV2aWNlQ29kZSk7XG5cbiAgICBpZiAoYXBpUmVzdWx0LnN1Y2Nlc3MgJiYgYXBpUmVzdWx0LnVzZXJJbmZvICYmIChhcGlSZXN1bHQudXNlckluZm8uaWQgfHwgYXBpUmVzdWx0LnVzZXJJbmZvLnVzZXJfbnVtYmVyKSkge1xuICAgICAgY29uc29sZS5sb2coJ0F1dGhHdWFyZDogU3VjY2Vzc2Z1bGx5IGZldGNoZWQgbmV3IFVzZXIgSUQuJyk7XG4gICAgICBcbiAgICAgIGNvbnN0IHVzZXJJbmZvVG9TYXZlID0ge1xuICAgICAgICBpZDogYXBpUmVzdWx0LnVzZXJJbmZvLmlkIHx8IGFwaVJlc3VsdC51c2VySW5mby51c2VyX251bWJlcixcbiAgICAgICAgdXNlcl9udW1iZXI6IGFwaVJlc3VsdC51c2VySW5mby51c2VyX251bWJlcixcbiAgICAgICAgcGV0X25hbWU6IGFwaVJlc3VsdC51c2VySW5mby5wZXRfbmFtZSxcbiAgICAgICAgdG90YWxfY2xpY2tzOiBhcGlSZXN1bHQudXNlckluZm8udG90YWxfY2xpY2tzIHx8IDBcbiAgICAgIH07XG5cbiAgICAgIC8vIFNhdmUgdGhlIG5ld2x5IGZldGNoZWQgdXNlciBpbmZvXG4gICAgICBhd2FpdCBzdG9yYWdlLnNldCh7IGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8sIHZhbHVlOiBKU09OLnN0cmluZ2lmeSh1c2VySW5mb1RvU2F2ZSkgfSk7XG4gICAgICByZXR1cm4geyBjYW5BY2Nlc3M6IHRydWUsIHVzZXJJbmZvOiB1c2VySW5mb1RvU2F2ZSwgbWVzc2FnZTogJ+eUqOaIt0lE6I635Y+W5oiQ5YqfJyB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnQXV0aEd1YXJkOiBGYWlsZWQgdG8gZmV0Y2ggVXNlciBJRC4nKTtcbiAgICAgIHJldHVybiB7IGNhbkFjY2VzczogZmFsc2UsIHVzZXJJbmZvOiBudWxsLCBtZXNzYWdlOiAn6I635Y+W55So5oi3SUTlpLHotKXvvIzor7fmo4Dmn6XnvZHnu5zlkI7ph43or5XjgIInIH07XG4gICAgfVxuXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBdXRoR3VhcmQ6IEVycm9yIGR1cmluZyBjaGVja05ldHdvcmtBY2Nlc3MnLCBlKTtcbiAgICByZXR1cm4geyBjYW5BY2Nlc3M6IGZhbHNlLCB1c2VySW5mbzogbnVsbCwgbWVzc2FnZTogYOWPkeeUn+mUmeivrzogJHtlLm1lc3NhZ2V9YCB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY2hlY2tOZXR3b3JrQWNjZXNzXG59O1xuIiwiLy8gY29uZmlnLmpzXG5leHBvcnQgY29uc3QgQ09ORklHID0ge1xuICAvLyBTdXBhYmFzZemFjee9rlxuICBTVVBBQkFTRToge1xuICAgIFVSTDogJ2h0dHBzOi8vanF1YnlxbmhneXhhenBucGp5cWYuc3VwYWJhc2UuY28nLFxuICAgIEtFWTogJ3NiX3B1Ymxpc2hhYmxlX19VTVlHdjFWRG8tWnJPdnVVZ1pMRmdfV0txeWM3TS0nLCAvLyDor7fmm7/mjaLkuLrkvaDnmoRTdXBhYmFzZeWMv+WQjeWvhumSpVxuICB9LFxuICBcbiAgLy8g5bqU55So6YWN572uXG4gIEFQUDoge1xuICAgIE5BTUU6ICdCYW5kUGV0JyxcbiAgICBWRVJTSU9OOiAnMS4wLjAnLFxuICAgIE1BWF9DTElDS1NfUEVSX0JBVENIOiA1MCwgLy8g5om56YeP5LiK5Lyg5pyA5aSn54K55Ye75pWwXG4gICAgU1lOQ19JTlRFUlZBTDogMzAwMDAwLCAvLyA15YiG6ZKf5ZCM5q2l5LiA5qyhXG4gICAgUkFOS19MSU1JVDogMTAgLy8g5o6S6KGM5qac5pi+56S65pWw6YePXG4gIH0sXG4gIFxuICAvLyDlrZjlgqjplK7lkI1cbiAgU1RPUkFHRV9LRVlTOiB7XG4gICAgSVNfTE9DQUxMWV9BQ1RJVkFURUQ6ICdpc19sb2NhbGx5X2FjdGl2YXRlZCcsXG4gICAgREVWSUNFX0lEOiAnZGV2aWNlX2lkJyxcbiAgICBVU0VSX0lORk86ICd1c2VyX2luZm8nLFxuICAgIFBFTkRJTkdfQ0xJQ0tTOiAncGVuZGluZ19jbGlja3MnLFxuICAgIExBU1RfU1lOQ19USU1FOiAnbGFzdF9zeW5jX3RpbWUnLFxuICAgIFRPVEFMX0NMSUNLUzogJ3RvdGFsX2NsaWNrcydcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNi44XCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjYuOFwiOyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyLWNvbnRhaW5lclwiIHNob3c9XCJ7eyFzaG93S2V5Ym9hcmR9fVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vYmFjay5wbmdcIiBjbGFzcz1cInBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uXCIgb25jbGljaz1cImdvQmFja1wiPjwvaW1hZ2U+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGUtdGltZVwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicGFnZS10aW1lLWRpc3BsYXlcIj57eyB0aW1lIH19PC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicGFnZS1oZWFkZXItdGl0bGVcIj7lrqDnianlkb3lkI08L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGVudFwiIHNob3c9XCJ7eyFzaG93S2V5Ym9hcmR9fVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LW5hbWUtc2VjdGlvblwiPlxuICAgICAgICAgIDx0ZXh0PuW9k+WJjeWQjeWtlzoge3sgY3VycmVudFBldE5hbWUgfX08L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZS1pbnB1dFwiIG9uY2xpY2s9XCJ0b2dnbGVLZXlib2FyZCh0cnVlKVwiPlxuICAgICAgICAgIDx0ZXh0Pnt7IG5ld1BldE5hbWUgfHwgJ+eCueWHu+i+k+WFpeaWsOWQjeWtlycgfX08L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uL2NoZWNrLnBuZ1wiIGNsYXNzPVwiY29uZmlybS1idXR0b25cIiBvbmNsaWNrPVwic2F2ZVBldE5hbWVcIj48L2ltYWdlPlxuICAgICAgICA8dGV4dCBjbGFzcz1cInN0YXR1cy10ZXh0XCI+e3sgc3RhdHVzTWVzc2FnZSB9fTwvdGV4dD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxRd2VydHlLZXlib2FyZCBzaG93PVwie3tzaG93S2V5Ym9hcmR9fVwiIG9ua2V5Y2xpY2s9XCJoYW5kbGVLZXlDbGlja1wiPjwvUXdlcnR5S2V5Ym9hcmQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAucGFnZS1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAucGFnZS1oZWFkZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5wYWdlLXRpbWUtZGlzcGxheSB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB9XG4gIC5wYWdlLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUU5MEZGO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5wYWdlLWhlYWRlci1iYWNrLWFycm93IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cbiAgLmhlYWRlci10aXRsZS10aW1lIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnBhZ2UtY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuY29udGVudC1jb250YWluZXIgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIC5jdXJyZW50LW5hbWUtc2VjdGlvbiB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDMwcHg7IH1cbiAgLmN1cnJlbnQtbmFtZS1zZWN0aW9uIHRleHQgeyBjb2xvcjogI0FBQTsgZm9udC1zaXplOiAyOHB4OyBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XG4gIC5uYW1lLWlucHV0IHsgd2lkdGg6IDQwMHB4OyBoZWlnaHQ6IDcwcHg7IGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7IGJvcmRlci1yYWRpdXM6IDE1cHg7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgcGFkZGluZy1sZWZ0OiAyMHB4OyBtYXJnaW4tYm90dG9tOiA0MHB4OyB9XG4gIC5uYW1lLWlucHV0IHRleHQgeyBjb2xvcjogI0ZGRjsgZm9udC1zaXplOiAzMnB4OyB9XG4gIC5jb25maXJtLWJ1dHRvbiB7IHdpZHRoOiAxMDBweDsgaGVpZ2h0OiAxMDBweDsgYm9yZGVyLXJhZGl1czogNTBweDsgYmFja2dyb3VuZC1jb2xvcjogIzAwN0FGRjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmNvbmZpcm0taWNvbiB7IGNvbG9yOiAjRkZGOyBmb250LXNpemU6IDYwcHg7IH1cbiAgLnN0YXR1cy10ZXh0IHsgY29sb3I6ICNGRjNCMzA7IGZvbnQtc2l6ZTogMjRweDsgbWFyZ2luLXRvcDogMjBweDsgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XG4gIGltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XG4gIGltcG9ydCBwcm9tcHQgZnJvbSAnQHN5c3RlbS5wcm9tcHQnO1xuICBpbXBvcnQgQXBpU2VydmljZSBmcm9tICcuLi9jb21tb24vanMvYXBpLXNlcnZpY2UuanMnO1xuICBpbXBvcnQgYXV0aEd1YXJkIGZyb20gJy4uL2NvbW1vbi9qcy9hdXRoLWd1YXJkLmpzJztcbiAgaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi4vY29tbW9uL2pzL2NvbmZpZy5qcyc7XG4gIGltcG9ydCBRd2VydHlLZXlib2FyZCBmcm9tICcuLi9jb21tb24vUXdlcnR5S2V5Ym9hcmQudXgnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBRd2VydHlLZXlib2FyZFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgdGltZTogJzAwOjAwJyxcbiAgICAgIGN1cnJlbnRQZXROYW1lOiAnLi4uJyxcbiAgICAgIG5ld1BldE5hbWU6ICcnLFxuICAgICAgc3RhdHVzTWVzc2FnZTogJycsXG4gICAgICBzaG93S2V5Ym9hcmQ6IGZhbHNlXG4gICAgfSxcbiAgICBhc3luYyBvbkluaXQoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICAgIHNldEludGVydmFsKHRoaXMudXBkYXRlVGltZSwgNTAwMCk7XG5cbiAgICAgIC8vIEF0dGVtcHQgdG8gbG9hZCBjdXJyZW50IG5hbWUgZm9yIGRpc3BsYXkgcHVycG9zZXMgb25seVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlckluZm9SZXN1bHQgPSBhd2FpdCBzdG9yYWdlLmdldCh7IGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8gfSk7XG4gICAgICAgIGlmICh1c2VySW5mb1Jlc3VsdC52YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IHVzZXJJbmZvID0gSlNPTi5wYXJzZSh1c2VySW5mb1Jlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgdGhpcy5jdXJyZW50UGV0TmFtZSA9IHVzZXJJbmZvLnBldF9uYW1lIHx8ICco5peg5ZCNKSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50UGV0TmFtZSA9ICco5peg5ZCNKSc7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGV0TmFtZSA9ICco5peg5ZCNKSc7XG4gICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVUaW1lKCkge1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgY29uc3QgbWludXRlcyA9IG5vdy5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgdGhpcy50aW1lID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xuICAgIH0sXG4gICAgdG9nZ2xlS2V5Ym9hcmQoc2hvdykge1xuICAgICAgdGhpcy5zaG93S2V5Ym9hcmQgPSBzaG93O1xuICAgIH0sXG4gICAgaGFuZGxlS2V5Q2xpY2soZSkge1xuICAgICAgY29uc3Qga2V5ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICBpZiAoa2V5ID09PSAn4oyrJykge1xuICAgICAgICB0aGlzLm5ld1BldE5hbWUgPSB0aGlzLm5ld1BldE5hbWUuc2xpY2UoMCwgLTEpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICfinJMnKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlS2V5Ym9hcmQoZmFsc2UpO1xuICAgICAgICB0aGlzLnNhdmVQZXROYW1lKCk7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ1NwYWNlJykge1xuICAgICAgICB0aGlzLm5ld1BldE5hbWUgKz0gJyAnO1xuICAgICAgfSBlbHNlIGlmIChrZXkgIT09ICdTaGlmdCcpIHtcbiAgICAgICAgdGhpcy5uZXdQZXROYW1lICs9IGtleTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIHNhdmVQZXROYW1lKCkge1xuICAgICAgaWYgKCF0aGlzLm5ld1BldE5hbWUgfHwgdGhpcy5uZXdQZXROYW1lLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICflkI3lrZfpnIDlnKgxLTEw5Liq5a2X56ym5LmL6Ze0JztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zdCBndWFyZFJlc3VsdCA9IGF3YWl0IGF1dGhHdWFyZC5jaGVja05ldHdvcmtBY2Nlc3MoKTtcbiAgICAgIGlmICghZ3VhcmRSZXN1bHQuY2FuQWNjZXNzKSB7XG4gICAgICAgIHByb21wdC5zaG93VG9hc3QoeyBtZXNzYWdlOiBndWFyZFJlc3VsdC5tZXNzYWdlLCBkdXJhdGlvbjogMzAwMCB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBTdGVwIDE6IENoZWNrIG5hbWUgYXZhaWxhYmlsaXR5XG4gICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn5q2j5Zyo5qOA5p+l5ZCN56ew5Y+v55So5oCnLi4uJztcbiAgICAgIGNvbnN0IGF2YWlsYWJpbGl0eVJlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2UuY2hlY2tQZXROYW1lQXZhaWxhYmlsaXR5KHRoaXMubmV3UGV0TmFtZSk7XG5cbiAgICAgIGlmICghYXZhaWxhYmlsaXR5UmVzdWx0LnN1Y2Nlc3MgfHwgIWF2YWlsYWJpbGl0eVJlc3VsdC5pc0F2YWlsYWJsZSkge1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSBg5L+d5a2Y5aSx6LSlOiAke2F2YWlsYWJpbGl0eVJlc3VsdC5pc0F2YWlsYWJsZSA9PT0gZmFsc2UgPyAn6K+l5ZCN56ew5bey6KKr5L2/55So77yM6K+35pu05o2i5Y+m5LiA5Liq5ZCN5a2XJyA6IChhdmFpbGFiaWxpdHlSZXN1bHQuZXJyb3IgfHwgJ+aXoOazleajgOafpeWQjeensCcpfWA7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gU3RlcCAyOiBTZXQgdGhlIG5ldyBuYW1lXG4gICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn5ZCN56ew5Y+v55So77yM5q2j5Zyo5L+d5a2YLi4uJztcbiAgICAgIGNvbnN0IHsgdXNlckluZm8gfSA9IGd1YXJkUmVzdWx0O1xuICAgICAgY29uc3Qgc2V0UmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5zZXRQZXROYW1lKHVzZXJJbmZvLmlkLCB0aGlzLm5ld1BldE5hbWUpO1xuXG4gICAgICBpZiAoc2V0UmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgLy8gVXBkYXRlIFVJIGltbWVkaWF0ZWx5XG4gICAgICAgIHRoaXMuY3VycmVudFBldE5hbWUgPSB0aGlzLm5ld1BldE5hbWU7XG4gICAgICAgIHRoaXMubmV3UGV0TmFtZSA9ICcnOyAvLyBDbGVhciBpbnB1dFxuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAnJzsgLy8gQ2xlYXIgc3RhdHVzIHRleHRcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHN0b3JlZCB1c2VyIGluZm8gd2l0aCB0aGUgbmV3IG5hbWVcbiAgICAgICAgY29uc3QgdXBkYXRlZFVzZXJJbmZvID0geyAuLi51c2VySW5mbywgcGV0X25hbWU6IHRoaXMuY3VycmVudFBldE5hbWUgfTtcbiAgICAgICAgYXdhaXQgc3RvcmFnZS5zZXQoe1xuICAgICAgICAgIGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8sXG4gICAgICAgICAgdmFsdWU6IEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRVc2VySW5mbylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2hvdyB0b2FzdCBhbmQgbmF2aWdhdGUgYmFja1xuICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiAn5a6g54mp5ZCN5a2X5bey5pu05paw77yBJ1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcm91dGVyLmJhY2soKTtcbiAgICAgICAgfSwgMTUwMCk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IGDkv53lrZjlpLHotKU6ICR7c2V0UmVzdWx0LmVycm9yIHx8ICfmnKrnn6XplJnor68nfWA7XG4gICAgICB9XG4gICAgfSxcbiAgICBnb0JhY2soKSB7XG4gICAgICBpZiAodGhpcy5zaG93S2V5Ym9hcmQpIHtcbiAgICAgICAgdGhpcy50b2dnbGVLZXlib2FyZChmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3V0ZXIuYmFjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiIiwiZGF0YSIsImtleXMiLCJvbktleUNsaWNrIiwia2V5IiwiJGVtaXQiLCJ2YWx1ZSIsIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIl9zeXN0ZW0yIiwiX3N5c3RlbTMiLCJfc3lzdGVtNCIsIl9jb25maWciLCJyZXF1aXJlIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0Iiwib3duS2V5cyIsInIiLCJ0IiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiaSIsIl90b1ByaW1pdGl2ZSIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIkFwaVNlcnZpY2UiLCJjb25zdHJ1Y3RvciIsImJhc2VIZWFkZXJzIiwiQ09ORklHIiwiU1VQQUJBU0UiLCJLRVkiLCJyZXF1ZXN0IiwiZW5kcG9pbnQiLCJtZXRob2QiLCJ1cmwiLCJVUkwiLCJvcHRpb25zIiwiaGVhZGVyIiwicmVzcG9uc2VUeXBlIiwiSlNPTiIsInN0cmluZ2lmeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmV0Y2giLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJyZXNwb25zZURhdGEiLCJjb2RlIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJmYWlsIiwiZ2V0UmFua2luZ3MiLCJsaW1pdCIsInJlc3VsdCIsImFjdGlvbiIsInJhbmtpbmdzIiwibWVzc2FnZSIsInN5bmNDbGlja3MiLCJ1c2VySWQiLCJjbGlja0NvdW50IiwidXNlcl9pZCIsImNsaWNrX2NvdW50IiwiY2hlY2tQZXROYW1lQXZhaWxhYmlsaXR5IiwicGV0TmFtZSIsInBldF9uYW1lIiwiaXNBdmFpbGFibGUiLCJzZXRQZXROYW1lIiwibmV3TmFtZSIsIm5ld19uYW1lIiwiY2hlY2tEZXZpY2VSZWdpc3RyYXRpb24iLCJkZXZpY2VJZCIsImRldmljZV9pZCIsImxvZyIsInJlZ2lzdGVyQW5kR2V0VXNlcklkIiwidXNlckluZm8iLCJ2ZXJpZnlVc2VySWRBbmRSZXN0b3JlIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiX2FwaVNlcnZpY2UiLCJjaGVja05ldHdvcmtBY2Nlc3MiLCJsb2NhbEFjdGl2YXRpb24iLCJnZXQiLCJTVE9SQUdFX0tFWVMiLCJJU19MT0NBTExZX0FDVElWQVRFRCIsInVyaSIsImNhbkFjY2VzcyIsInVzZXJJbmZvUmVzdWx0IiwiVVNFUl9JTkZPIiwicGFyc2UiLCJpZCIsImRldmljZUNvZGVSZXN1bHQiLCJERVZJQ0VfSUQiLCJkZXZpY2VDb2RlIiwiYXBpUmVzdWx0IiwidXNlcl9udW1iZXIiLCJ1c2VySW5mb1RvU2F2ZSIsInRvdGFsX2NsaWNrcyIsInNldCIsIkFQUCIsIk5BTUUiLCJWRVJTSU9OIiwiTUFYX0NMSUNLU19QRVJfQkFUQ0giLCJTWU5DX0lOVEVSVkFMIiwiUkFOS19MSU1JVCIsIlBFTkRJTkdfQ0xJQ0tTIiwiTEFTVF9TWU5DX1RJTUUiLCJUT1RBTF9DTElDS1MiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX2F1dGhHdWFyZCIsIl9Rd2VydHlLZXlib2FyZCIsImNvbXBvbmVudHMiLCJRd2VydHlLZXlib2FyZCIsInRpbWUiLCJjdXJyZW50UGV0TmFtZSIsIm5ld1BldE5hbWUiLCJzdGF0dXNNZXNzYWdlIiwic2hvd0tleWJvYXJkIiwib25Jbml0IiwidXBkYXRlVGltZSIsInNldEludGVydmFsIiwic3RvcmFnZSIsIm5vdyIsIkRhdGUiLCJob3VycyIsImdldEhvdXJzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwidG9nZ2xlS2V5Ym9hcmQiLCJzaG93IiwiaGFuZGxlS2V5Q2xpY2siLCJkZXRhaWwiLCJzbGljZSIsInNhdmVQZXROYW1lIiwiZ3VhcmRSZXN1bHQiLCJhdXRoR3VhcmQiLCJwcm9tcHQiLCJzaG93VG9hc3QiLCJkdXJhdGlvbiIsImF2YWlsYWJpbGl0eVJlc3VsdCIsInNldFJlc3VsdCIsInVwZGF0ZWRVc2VySW5mbyIsInNldFRpbWVvdXQiLCJyb3V0ZXIiLCJiYWNrIiwiZ29CYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQW1EQUEsSUFBQUEsV0FBQUEsUUFBQUEsT0FBQUEsR0FBaUI7Z0NBQ2JDLE1BQU07b0NBQ0pDLE1BQU07d0NBQ0o7NENBQUM7NENBQUs7NENBQUs7NENBQUs7NENBQUs7NENBQUs7NENBQUs7NENBQUs7NENBQUs7NENBQUs7eUNBQUk7d0NBQ2xEOzRDQUFDOzRDQUFLOzRDQUFLOzRDQUFLOzRDQUFLOzRDQUFLOzRDQUFLOzRDQUFLOzRDQUFLO3lDQUFJO3dDQUM3Qzs0Q0FBQzs0Q0FBUzs0Q0FBSzs0Q0FBSzs0Q0FBSzs0Q0FBSzs0Q0FBSzs0Q0FBSzs0Q0FBSzt5Q0FBSTt3Q0FDakQ7NENBQUM7NENBQVM7eUNBQUk7cUNBQUE7Z0NBR2xCO2dDQUNBQyxZQUFXQyxHQUFHO29DQUNaLElBQUksQ0FBQ0MsS0FBSyxDQUFDLFlBQVk7d0NBQUVDLE9BQU9GO29DQUFJO2dDQUN0Qzs0QkFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkMvREYsSUFBQUcsVUFBQUMsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUMsV0FBQUYsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUUsV0FBQUgsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUcsV0FBQUosdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUksVUFBQUMsb0JBQUE7d0JBQXFDLFNBQUFOLHVCQUFBTyxDQUFBOzRCQUFBLE9BQUFBLEtBQUFBLEVBQUFDLFVBQUEsR0FBQUQsSUFBQTtnQ0FBQUUsU0FBQUY7NEJBQUE7d0JBQUE7d0JBQUEs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