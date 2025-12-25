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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtaW5nXFxpbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9Rd2VydHlLZXlib2FyZC51eCIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvYXBpLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2F1dGgtZ3VhcmQuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL0JhbmRQZXQvc3JjL25hbWluZy9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJrZXlib2FyZC1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwia2V5Ym9hcmQtZ3JpZFwiPlxuICAgICAgPGRpdiBmb3I9XCJ7eyByb3cgaW4ga2V5cyB9fVwiIGNsYXNzPVwia2V5Ym9hcmQtcm93XCI+XG4gICAgICAgIDxkaXYgZm9yPVwie3sga2V5IGluIHJvdyB9fVwiIGNsYXNzPVwia2V5IHt7a2V5Lmxlbmd0aCA+IDEgPyAnc3BlY2lhbC1rZXknIDogJyd9fVwiIG9uY2xpY2s9XCJvbktleUNsaWNrKGtleSlcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImtleS10ZXh0XCI+e3sga2V5IH19PC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgLmtleWJvYXJkLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICAua2V5Ym9hcmQtZ3JpZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAua2V5Ym9hcmQtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAua2V5IHtcbiAgICB3aWR0aDogNDJweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmMyZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luOiAwIDJweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5zcGVjaWFsLWtleSB7XG4gICAgd2lkdGg6IDY1cHg7XG4gIH1cbiAgLmtleS10ZXh0IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhOiB7XG4gICAgICBrZXlzOiBbXG4gICAgICAgIFsncScsICd3JywgJ2UnLCAncicsICd0JywgJ3knLCAndScsICdpJywgJ28nLCAncCddLFxuICAgICAgICBbJ2EnLCAncycsICdkJywgJ2YnLCAnZycsICdoJywgJ2onLCAnaycsICdsJ10sXG4gICAgICAgIFsnU2hpZnQnLCAneicsICd4JywgJ2MnLCAndicsICdiJywgJ24nLCAnbScsICfijKsnXSxcbiAgICAgICAgWydTcGFjZScsICfinJMnXVxuICAgICAgXVxuICAgICAgLy8gTm90ZTogQSByZWFsIGltcGxlbWVudGF0aW9uIHdvdWxkIGhhbmRsZSBzaGlmdCBzdGF0ZSwgYnV0IHRoaXMgaXMgYSBzaW1wbGlmaWVkIHZlcnNpb24uXG4gICAgfSxcbiAgICBvbktleUNsaWNrKGtleSkge1xuICAgICAgdGhpcy4kZW1pdCgna2V5Y2xpY2snLCB7IHZhbHVlOiBrZXkgfSk7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbiIsIi8vIGFwaS1zZXJ2aWNlLmpzXG5pbXBvcnQgZmV0Y2ggZnJvbSAnQHN5c3RlbS5mZXRjaCc7XG5pbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XG5pbXBvcnQgcHJvbXB0IGZyb20gJ0BzeXN0ZW0ucHJvbXB0JztcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vY29uZmlnLmpzJztcblxuY2xhc3MgQXBpU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmFzZUhlYWRlcnMgPSB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgLy8g5omL546v5LiN6ZyA6KaBIEFQSSBLZXkg6aqM6K+BXG4gICAgfVxuICB9XG5cbiAgLy8g6YCa55So6K+35rGC5pa55rOVIC0g5L+u5pS5IFVSTCDkuLogSFRUUFxuICBhc3luYyByZXF1ZXN0KGVuZHBvaW50LCBtZXRob2QgPSAnUE9TVCcsIGRhdGEgPSBudWxsKSB7XG4gICAgLy8g6YeN6KaB77ya5pS55Li6IEhUVFAg5Y2P6K6uXG4gICAgY29uc3QgdXJsID0gYGh0dHA6Ly9qcXVieXFuaGd5eGF6cG5wanlxZi5zdXBhYmFzZS5jby9mdW5jdGlvbnMvdjEvJHtlbmRwb2ludH1gXG4gICAgXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZCxcbiAgICAgIGhlYWRlcjogdGhpcy5iYXNlSGVhZGVycyxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXG4gICAgfVxuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIG9wdGlvbnMuZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZldGNoLmZldGNoKHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcblxuICAgICAgICAgIGlmIChyZXNwb25zZS5jb2RlID49IDIwMCAmJiByZXNwb25zZS5jb2RlIDwgMzAwKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlRGF0YSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgSFRUUCBFcnJvcjogJHtyZXNwb25zZS5jb2RlfWAsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYEhUVFAgJHtyZXNwb25zZS5jb2RlfTogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZURhdGEpfWApKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogKGVycm9yLCBjb2RlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgUmVxdWVzdCBGYWlsZWQ6ICR7Y29kZX1gLCBlcnJvcik7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgUmVxdWVzdCBmYWlsZWQ6ICR7ZXJyb3IuZGF0YX1gKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLy8g6I635Y+W5o6S6KGM5qacXG4gIGFzeW5jIGdldFJhbmtpbmdzKGxpbWl0ID0gMTApIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdicmlnaHQtcmVzcG9uZGVyJywgJ1BPU1QnLCB7XG4gICAgICAgIGFjdGlvbjogJ2dldF9yYW5raW5ncycsXG4gICAgICAgIGxpbWl0OiBsaW1pdFxuICAgICAgfSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIHJhbmtpbmdzOiByZXN1bHQucmFua2luZ3MgfHwgW11cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign6I635Y+W5o6S6KGM5qac5aSx6LSlOicsIGVycm9yKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIHJhbmtpbmdzOiBbXSxcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyDkuIrmiqXngrnlh7vmrKHmlbBcbiAgYXN5bmMgc3luY0NsaWNrcyh1c2VySWQsIGNsaWNrQ291bnQpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0KCdicmlnaHQtcmVzcG9uZGVyJywgJ1BPU1QnLCB7XG4gICAgICAgIGFjdGlvbjogJ3N5bmNfY2xpY2tzJyxcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxuICAgICAgICBjbGlja19jb3VudDogY2xpY2tDb3VudFxuICAgICAgfSlcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfkuIrmiqXngrnlh7vmrKHmlbDlpLHotKU6JywgZXJyb3IpXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cblxuICAvLyDmo4Dmn6XlrqDnianlkI3mmK/lkKblj6/nlKhcbiAgYXN5bmMgY2hlY2tQZXROYW1lQXZhaWxhYmlsaXR5KHBldE5hbWUpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdicmlnaHQtcmVzcG9uZGVyJywgJ1BPU1QnLCB7XG4gICAgICAgIGFjdGlvbjogJ2NoZWNrX3BldF9uYW1lJyxcbiAgICAgICAgcGV0X25hbWU6IHBldE5hbWVcbiAgICAgIH0pO1xuICAgICAgLy8g5YGH6K6+5pyN5Yqh5Zmo6L+U5ZueIHsgaXNBdmFpbGFibGU6IHRydWUvZmFsc2UgfVxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgLi4ucmVzdWx0IH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+ajgOafpeWuoOeJqeWQjeWPr+eUqOaAp+aXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UsIGlzQXZhaWxhYmxlOiBmYWxzZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIOS/ruaUueWuoOeJqeWQjVxuICBhc3luYyBzZXRQZXROYW1lKHVzZXJJZCwgbmV3TmFtZSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2JyaWdodC1yZXNwb25kZXInLCAnUE9TVCcsIHtcbiAgICAgICAgYWN0aW9uOiAnc2V0X3BldF9uYW1lJyxcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxuICAgICAgICBuZXdfbmFtZTogbmV3TmFtZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfkv67mlLnlrqDnianlkI3lpLHotKU6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICB9XG5cbiAgLy8g6aKE5r+A5rS75qOA5p+lXG4gIGFzeW5jIGNoZWNrRGV2aWNlUmVnaXN0cmF0aW9uKGRldmljZUlkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdjaGVja19yZWdpc3RyYXRpb24nLFxuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCfpooTmv4DmtLvmo4Dmn6XmiJDlip86JywgcmVzdWx0KTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfpooTmv4DmtLvmo4Dmn6Xml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICB9XG5cbiAgLy8g5rOo5YaM6K6+5aSH5bm26I635Y+W55So5oi3SURcbiAgYXN5bmMgcmVnaXN0ZXJBbmRHZXRVc2VySWQoZGV2aWNlSWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdicmlnaHQtcmVzcG9uZGVyJywgJ1BPU1QnLCB7XG4gICAgICAgIGFjdGlvbjogJ3JlZ2lzdGVyX2RldmljZV9hbmRfZ2V0X2lkJyxcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZFxuICAgICAgfSk7XG4gICAgICAvLyDlgYforr7mnI3liqHlmajmiJDlip/ml7bov5Tlm54geyBzdWNjZXNzOiB0cnVlLCB1c2VySW5mbzogeyBpZDogJy4uLicsIC4uLiB9IH1cbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+azqOWGjOiuvuWkh+W5tuiOt+WPlueUqOaIt0lE5oiQ5YqfOicsIHJlc3VsdC51c2VySW5mbyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVzZXJJbmZvOiByZXN1bHQudXNlckluZm8gfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPlueUqOaIt0lE5aSx6LSlOicsIHJlc3VsdCA/IHJlc3VsdC5lcnJvciA6ICfmnKrnn6XplJnor68nKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAocmVzdWx0ID8gcmVzdWx0LmVycm9yIDogJ+acjeWKoeWZqOacqui/lOWbnuaIkOWKn+eKtuaAgScpIH07XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+azqOWGjOaIluiOt+WPlueUqOaIt0lE5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIOmqjOivgeeUqOaIt0lE5bm25oGi5aSN5pWw5o2uXG4gIGFzeW5jIHZlcmlmeVVzZXJJZEFuZFJlc3RvcmUoZGV2aWNlSWQsIHVzZXJJZCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2JyaWdodC1yZXNwb25kZXInLCAnUE9TVCcsIHtcbiAgICAgICAgYWN0aW9uOiAndmVyaWZ5X3VzZXJfaWRfYW5kX3Jlc3RvcmUnLFxuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkLFxuICAgICAgICB1c2VyX2lkOiB1c2VySWRcbiAgICAgIH0pO1xuICAgICAgLy8g5YGH6K6+5pyN5Yqh5Zmo5oiQ5Yqf5pe26L+U5ZueIHsgc3VjY2VzczogdHJ1ZSwgdXNlckluZm86IHsgLi4uIH0gfVxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1c2VySW5mbzogcmVzdWx0LnVzZXJJbmZvIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IChyZXN1bHQgPyByZXN1bHQuZXJyb3IgOiAn6aqM6K+B5aSx6LSlJykgfTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign6aqM6K+B55So5oi3SUTml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBcGlTZXJ2aWNlKClcbiIsIi8vIHNyYy9jb21tb24vanMvYXV0aC1ndWFyZC5qc1xuXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XG5pbXBvcnQgQXBpU2VydmljZSBmcm9tICcuL2FwaS1zZXJ2aWNlLmpzJztcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vY29uZmlnLmpzJztcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHVzZXIgaGFzIHRoZSBuZWNlc3NhcnkgYWN0aXZhdGlvbiBhbmQgY3JlZGVudGlhbHMgdG8gYWNjZXNzIGEgbmV0d29yayBmZWF0dXJlLlxuICogVGhpcyBmdW5jdGlvbiBpbXBsZW1lbnRzIHRoZSBmb2xsb3dpbmcgbG9naWM6XG4gKiAxLiBDaGVja3MgZm9yIGEgbG9jYWwgYWN0aXZhdGlvbiBmbGFnLiBJZiBub3QgcHJlc2VudCwgcmVkaXJlY3RzIHRvIHRoZSBhY3RpdmF0aW9uIHBhZ2UuXG4gKiAyLiBJZiBsb2NhbGx5IGFjdGl2YXRlZCwgY2hlY2tzIGZvciBzdG9yZWQgdXNlciBpbmZvIHdpdGggYSBzZXJ2ZXItc2lkZSBJRC5cbiAqIDMuIElmIHVzZXIgaW5mbyBpcyBtaXNzaW5nLCBpdCBhdHRlbXB0cyB0byBmZXRjaCBpdCBmcm9tIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIHN0b3JlZCBkZXZpY2UgY29kZS5cbiAqIDQuIFJldHVybnMgdGhlIGFjY2VzcyBzdGF0dXMgYW5kIHVzZXIgaW5mby5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IEFuIG9iamVjdCB3aXRoOiB7IGNhbkFjY2VzczogYm9vbGVhbiwgdXNlckluZm86IE9iamVjdHxudWxsLCBtZXNzYWdlOiBzdHJpbmcgfVxuICovXG5hc3luYyBmdW5jdGlvbiBjaGVja05ldHdvcmtBY2Nlc3MoKSB7XG4gIHRyeSB7XG4gICAgLy8gMS4gQ2hlY2sgZm9yIGxvY2FsIGFjdGl2YXRpb25cbiAgICBjb25zdCBsb2NhbEFjdGl2YXRpb24gPSBhd2FpdCBzdG9yYWdlLmdldCh7IGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5JU19MT0NBTExZX0FDVElWQVRFRCB9KTtcbiAgICBpZiAobG9jYWxBY3RpdmF0aW9uLnZhbHVlICE9PSAndHJ1ZScpIHtcbiAgICAgIHJvdXRlci5wdXNoKHsgdXJpOiAnYWN0aXZhdGUnIH0pO1xuICAgICAgcmV0dXJuIHsgY2FuQWNjZXNzOiBmYWxzZSwgdXNlckluZm86IG51bGwsIG1lc3NhZ2U6ICforr7lpIfmnKrmv4DmtLvvvIzor7flhYjmv4DmtLvjgIInIH07XG4gICAgfVxuXG4gICAgLy8gMi4gQ2hlY2sgZm9yIGV4aXN0aW5nIFVzZXIgSURcbiAgICBjb25zdCB1c2VySW5mb1Jlc3VsdCA9IGF3YWl0IHN0b3JhZ2UuZ2V0KHsga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTyB9KTtcbiAgICBpZiAodXNlckluZm9SZXN1bHQudmFsdWUpIHtcbiAgICAgIGNvbnN0IHVzZXJJbmZvID0gSlNPTi5wYXJzZSh1c2VySW5mb1Jlc3VsdC52YWx1ZSk7XG4gICAgICBpZiAodXNlckluZm8gJiYgdXNlckluZm8uaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0F1dGhHdWFyZDogVXNlciBJRCBmb3VuZCBpbiBzdG9yYWdlLicpO1xuICAgICAgICByZXR1cm4geyBjYW5BY2Nlc3M6IHRydWUsIHVzZXJJbmZvOiB1c2VySW5mbywgbWVzc2FnZTogJ+mqjOivgemAmui/hycgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAzLiBVc2VyIElEIGlzIG1pc3NpbmcsIHRyeSB0byBmZXRjaCBpdFxuICAgIGNvbnNvbGUubG9nKCdBdXRoR3VhcmQ6IFVzZXIgSUQgbm90IGZvdW5kLCBhdHRlbXB0aW5nIHRvIGZldGNoIGZyb20gc2VydmVyLicpO1xuICAgIFxuICAgIC8vIFdlIG5lZWQgdGhlIGRldmljZSBjb2RlIHRvIGdldCB0aGUgdXNlciBJRFxuICAgIGNvbnN0IGRldmljZUNvZGVSZXN1bHQgPSBhd2FpdCBzdG9yYWdlLmdldCh7IGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5ERVZJQ0VfSUQgfSk7XG4gICAgaWYgKCFkZXZpY2VDb2RlUmVzdWx0LnZhbHVlKSB7XG4gICAgICAgIC8vIFRoaXMgY2FzZSBpcyB1bmxpa2VseSBpZiBsb2NhbCBhY3RpdmF0aW9uIHdvcmtlZCwgYnV0IGdvb2QgdG8gaGFuZGxlLlxuICAgICAgICByb3V0ZXIucHVzaCh7IHVyaTogJ2FjdGl2YXRlJyB9KTtcbiAgICAgICAgcmV0dXJuIHsgY2FuQWNjZXNzOiBmYWxzZSwgdXNlckluZm86IG51bGwsIG1lc3NhZ2U6ICfml6Dms5Xmib7liLDorr7lpIfnoIHvvIzor7fph43mlrDmv4DmtLvjgIInIH07XG4gICAgfVxuICAgIGNvbnN0IGRldmljZUNvZGUgPSBkZXZpY2VDb2RlUmVzdWx0LnZhbHVlO1xuXG4gICAgY29uc3QgYXBpUmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5yZWdpc3RlckFuZEdldFVzZXJJZChkZXZpY2VDb2RlKTtcblxuICAgIGlmIChhcGlSZXN1bHQuc3VjY2VzcyAmJiBhcGlSZXN1bHQudXNlckluZm8gJiYgKGFwaVJlc3VsdC51c2VySW5mby5pZCB8fCBhcGlSZXN1bHQudXNlckluZm8udXNlcl9udW1iZXIpKSB7XG4gICAgICBjb25zb2xlLmxvZygnQXV0aEd1YXJkOiBTdWNjZXNzZnVsbHkgZmV0Y2hlZCBuZXcgVXNlciBJRC4nKTtcbiAgICAgIFxuICAgICAgY29uc3QgdXNlckluZm9Ub1NhdmUgPSB7XG4gICAgICAgIGlkOiBhcGlSZXN1bHQudXNlckluZm8uaWQgfHwgYXBpUmVzdWx0LnVzZXJJbmZvLnVzZXJfbnVtYmVyLFxuICAgICAgICB1c2VyX251bWJlcjogYXBpUmVzdWx0LnVzZXJJbmZvLnVzZXJfbnVtYmVyLFxuICAgICAgICBwZXRfbmFtZTogYXBpUmVzdWx0LnVzZXJJbmZvLnBldF9uYW1lLFxuICAgICAgICB0b3RhbF9jbGlja3M6IGFwaVJlc3VsdC51c2VySW5mby50b3RhbF9jbGlja3MgfHwgMFxuICAgICAgfTtcblxuICAgICAgLy8gU2F2ZSB0aGUgbmV3bHkgZmV0Y2hlZCB1c2VyIGluZm9cbiAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KHsga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTywgdmFsdWU6IEpTT04uc3RyaW5naWZ5KHVzZXJJbmZvVG9TYXZlKSB9KTtcbiAgICAgIHJldHVybiB7IGNhbkFjY2VzczogdHJ1ZSwgdXNlckluZm86IHVzZXJJbmZvVG9TYXZlLCBtZXNzYWdlOiAn55So5oi3SUTojrflj5bmiJDlip8nIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdBdXRoR3VhcmQ6IEZhaWxlZCB0byBmZXRjaCBVc2VyIElELicpO1xuICAgICAgcmV0dXJuIHsgY2FuQWNjZXNzOiBmYWxzZSwgdXNlckluZm86IG51bGwsIG1lc3NhZ2U6ICfojrflj5bnlKjmiLdJROWksei0pe+8jOivt+ajgOafpee9kee7nOWQjumHjeivleOAgicgfTtcbiAgICB9XG5cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0F1dGhHdWFyZDogRXJyb3IgZHVyaW5nIGNoZWNrTmV0d29ya0FjY2VzcycsIGUpO1xuICAgIHJldHVybiB7IGNhbkFjY2VzczogZmFsc2UsIHVzZXJJbmZvOiBudWxsLCBtZXNzYWdlOiBg5Y+R55Sf6ZSZ6K+vOiAke2UubWVzc2FnZX1gIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjaGVja05ldHdvcmtBY2Nlc3Ncbn07XG4iLCIvLyBjb25maWcuanNcbmV4cG9ydCBjb25zdCBDT05GSUcgPSB7XG4gIC8vIOazqOaEj++8mlVSTCDliY3nvIDlnKggYXBpLXNlcnZpY2UuanMg5Lit56Gs57yW56CB5LqGXG4gIC8vIOi/memHjOS4jeWGjemcgOimgemFjee9rlxuICBcbiAgLy8g5bqU55So6YWN572uXG4gIEFQUDoge1xuICAgIE5BTUU6ICdCYW5kUGV0JyxcbiAgICBWRVJTSU9OOiAnMS4wLjAnLFxuICAgIE1BWF9DTElDS1NfUEVSX0JBVENIOiA1MCxcbiAgICBTWU5DX0lOVEVSVkFMOiAzMDAwMDAsXG4gICAgUkFOS19MSU1JVDogMTBcbiAgfSxcbiAgXG4gIC8vIOWtmOWCqOmUruWQjVxuICBTVE9SQUdFX0tFWVM6IHtcbiAgICBJU19MT0NBTExZX0FDVElWQVRFRDogJ2lzX2xvY2FsbHlfYWN0aXZhdGVkJyxcbiAgICBERVZJQ0VfSUQ6ICdkZXZpY2VfaWQnLFxuICAgIFVTRVJfSU5GTzogJ3VzZXJfaW5mbycsXG4gICAgUEVORElOR19DTElDS1M6ICdwZW5kaW5nX2NsaWNrcycsXG4gICAgTEFTVF9TWU5DX1RJTUU6ICdsYXN0X3N5bmNfdGltZScsXG4gICAgVE9UQUxfQ0xJQ0tTOiAndG90YWxfY2xpY2tzJ1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS42LjhcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNi44XCI7IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicGFnZS1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXItY29udGFpbmVyXCIgc2hvdz1cInt7IXNob3dLZXlib2FyZH19XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi9iYWNrLnBuZ1wiIGNsYXNzPVwicGFnZS1oZWFkZXItYmFjay1idXR0b25cIiBvbmNsaWNrPVwiZ29CYWNrXCI+PC9pbWFnZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZS10aW1lXCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLXRpbWUtZGlzcGxheVwiPnt7IHRpbWUgfX08L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLWhlYWRlci10aXRsZVwiPuWuoOeJqeWRveWQjTwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50XCIgc2hvdz1cInt7IXNob3dLZXlib2FyZH19XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtbmFtZS1zZWN0aW9uXCI+XG4gICAgICAgICAgPHRleHQ+5b2T5YmN5ZCN5a2XOiB7eyBjdXJyZW50UGV0TmFtZSB9fTwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lLWlucHV0XCIgb25jbGljaz1cInRvZ2dsZUtleWJvYXJkKHRydWUpXCI+XG4gICAgICAgICAgPHRleHQ+e3sgbmV3UGV0TmFtZSB8fCAn54K55Ye76L6T5YWl5paw5ZCN5a2XJyB9fTwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vY2hlY2sucG5nXCIgY2xhc3M9XCJjb25maXJtLWJ1dHRvblwiIG9uY2xpY2s9XCJzYXZlUGV0TmFtZVwiPjwvaW1hZ2U+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwic3RhdHVzLXRleHRcIj57eyBzdGF0dXNNZXNzYWdlIH19PC90ZXh0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPFF3ZXJ0eUtleWJvYXJkIHNob3c9XCJ7e3Nob3dLZXlib2FyZH19XCIgb25rZXljbGljaz1cImhhbmRsZUtleUNsaWNrXCI+PC9Rd2VydHlLZXlib2FyZD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gIC5wYWdlLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5wYWdlLWhlYWRlci1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLnBhZ2UtdGltZS1kaXNwbGF5IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAucGFnZS1oZWFkZXItYmFjay1idXR0b24ge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTkwRkY7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLWJhY2stYXJyb3cge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgfVxuICAucGFnZS1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxuICAuaGVhZGVyLXRpdGxlLXRpbWUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAucGFnZS1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5jb250ZW50LWNvbnRhaW5lciB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmN1cnJlbnQtbmFtZS1zZWN0aW9uIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuICAuY3VycmVudC1uYW1lLXNlY3Rpb24gdGV4dCB7IGNvbG9yOiAjQUFBOyBmb250LXNpemU6IDI4cHg7IG1hcmdpbi1ib3R0b206IDEwcHg7IH1cbiAgLm5hbWUtaW5wdXQgeyB3aWR0aDogNDAwcHg7IGhlaWdodDogNzBweDsgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTsgYm9yZGVyLXJhZGl1czogMTVweDsganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyBhbGlnbi1pdGVtczogY2VudGVyOyBwYWRkaW5nLWxlZnQ6IDIwcHg7IG1hcmdpbi1ib3R0b206IDQwcHg7IH1cbiAgLm5hbWUtaW5wdXQgdGV4dCB7IGNvbG9yOiAjRkZGOyBmb250LXNpemU6IDMycHg7IH1cbiAgLmNvbmZpcm0tYnV0dG9uIHsgd2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDEwMHB4OyBib3JkZXItcmFkaXVzOiA1MHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QUZGOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuY29uZmlybS1pY29uIHsgY29sb3I6ICNGRkY7IGZvbnQtc2l6ZTogNjBweDsgfVxuICAuc3RhdHVzLXRleHQgeyBjb2xvcjogI0ZGM0IzMDsgZm9udC1zaXplOiAyNHB4OyBtYXJnaW4tdG9wOiAyMHB4OyB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcbiAgaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQHN5c3RlbS5zdG9yYWdlJztcbiAgaW1wb3J0IHByb21wdCBmcm9tICdAc3lzdGVtLnByb21wdCc7XG4gIGltcG9ydCBBcGlTZXJ2aWNlIGZyb20gJy4uL2NvbW1vbi9qcy9hcGktc2VydmljZS5qcyc7XG4gIGltcG9ydCBhdXRoR3VhcmQgZnJvbSAnLi4vY29tbW9uL2pzL2F1dGgtZ3VhcmQuanMnO1xuICBpbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuLi9jb21tb24vanMvY29uZmlnLmpzJztcbiAgaW1wb3J0IFF3ZXJ0eUtleWJvYXJkIGZyb20gJy4uL2NvbW1vbi9Rd2VydHlLZXlib2FyZC51eCc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIFF3ZXJ0eUtleWJvYXJkXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICB0aW1lOiAnMDA6MDAnLFxuICAgICAgY3VycmVudFBldE5hbWU6ICcuLi4nLFxuICAgICAgbmV3UGV0TmFtZTogJycsXG4gICAgICBzdGF0dXNNZXNzYWdlOiAnJyxcbiAgICAgIHNob3dLZXlib2FyZDogZmFsc2VcbiAgICB9LFxuICAgIGFzeW5jIG9uSW5pdCgpIHtcbiAgICAgIHRoaXMudXBkYXRlVGltZSgpO1xuICAgICAgc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVUaW1lLCA1MDAwKTtcblxuICAgICAgLy8gQXR0ZW1wdCB0byBsb2FkIGN1cnJlbnQgbmFtZSBmb3IgZGlzcGxheSBwdXJwb3NlcyBvbmx5XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VySW5mb1Jlc3VsdCA9IGF3YWl0IHN0b3JhZ2UuZ2V0KHsga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTyB9KTtcbiAgICAgICAgaWYgKHVzZXJJbmZvUmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgdXNlckluZm8gPSBKU09OLnBhcnNlKHVzZXJJbmZvUmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRQZXROYW1lID0gdXNlckluZm8ucGV0X25hbWUgfHwgJyjml6DlkI0pJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRQZXROYW1lID0gJyjml6DlkI0pJztcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQZXROYW1lID0gJyjml6DlkI0pJztcbiAgICAgIH1cbiAgICB9LFxuICAgIHVwZGF0ZVRpbWUoKSB7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgaG91cnMgPSBub3cuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICBjb25zdCBtaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICB0aGlzLnRpbWUgPSBgJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfSxcbiAgICB0b2dnbGVLZXlib2FyZChzaG93KSB7XG4gICAgICB0aGlzLnNob3dLZXlib2FyZCA9IHNob3c7XG4gICAgfSxcbiAgICBoYW5kbGVLZXlDbGljayhlKSB7XG4gICAgICBjb25zdCBrZXkgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIGlmIChrZXkgPT09ICfijKsnKSB7XG4gICAgICAgIHRoaXMubmV3UGV0TmFtZSA9IHRoaXMubmV3UGV0TmFtZS5zbGljZSgwLCAtMSk7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ+KckycpIHtcbiAgICAgICAgdGhpcy50b2dnbGVLZXlib2FyZChmYWxzZSk7XG4gICAgICAgIHRoaXMuc2F2ZVBldE5hbWUoKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnU3BhY2UnKSB7XG4gICAgICAgIHRoaXMubmV3UGV0TmFtZSArPSAnICc7XG4gICAgICB9IGVsc2UgaWYgKGtleSAhPT0gJ1NoaWZ0Jykge1xuICAgICAgICB0aGlzLm5ld1BldE5hbWUgKz0ga2V5O1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgc2F2ZVBldE5hbWUoKSB7XG4gICAgICBpZiAoIXRoaXMubmV3UGV0TmFtZSB8fCB0aGlzLm5ld1BldE5hbWUubGVuZ3RoID4gMTApIHtcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gJ+WQjeWtl+mcgOWcqDEtMTDkuKrlrZfnrKbkuYvpl7QnO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbnN0IGd1YXJkUmVzdWx0ID0gYXdhaXQgYXV0aEd1YXJkLmNoZWNrTmV0d29ya0FjY2VzcygpO1xuICAgICAgaWYgKCFndWFyZFJlc3VsdC5jYW5BY2Nlc3MpIHtcbiAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7IG1lc3NhZ2U6IGd1YXJkUmVzdWx0Lm1lc3NhZ2UsIGR1cmF0aW9uOiAzMDAwIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFN0ZXAgMTogQ2hlY2sgbmFtZSBhdmFpbGFiaWxpdHlcbiAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICfmraPlnKjmo4Dmn6XlkI3np7Dlj6/nlKjmgKcuLi4nO1xuICAgICAgY29uc3QgYXZhaWxhYmlsaXR5UmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5jaGVja1BldE5hbWVBdmFpbGFiaWxpdHkodGhpcy5uZXdQZXROYW1lKTtcblxuICAgICAgaWYgKCFhdmFpbGFiaWxpdHlSZXN1bHQuc3VjY2VzcyB8fCAhYXZhaWxhYmlsaXR5UmVzdWx0LmlzQXZhaWxhYmxlKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IGDkv53lrZjlpLHotKU6ICR7YXZhaWxhYmlsaXR5UmVzdWx0LmlzQXZhaWxhYmxlID09PSBmYWxzZSA/ICfor6XlkI3np7Dlt7Looqvkvb/nlKjvvIzor7fmm7TmjaLlj6bkuIDkuKrlkI3lrZcnIDogKGF2YWlsYWJpbGl0eVJlc3VsdC5lcnJvciB8fCAn5peg5rOV5qOA5p+l5ZCN56ewJyl9YDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBTdGVwIDI6IFNldCB0aGUgbmV3IG5hbWVcbiAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICflkI3np7Dlj6/nlKjvvIzmraPlnKjkv53lrZguLi4nO1xuICAgICAgY29uc3QgeyB1c2VySW5mbyB9ID0gZ3VhcmRSZXN1bHQ7XG4gICAgICBjb25zdCBzZXRSZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLnNldFBldE5hbWUodXNlckluZm8uaWQsIHRoaXMubmV3UGV0TmFtZSk7XG5cbiAgICAgIGlmIChzZXRSZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAvLyBVcGRhdGUgVUkgaW1tZWRpYXRlbHlcbiAgICAgICAgdGhpcy5jdXJyZW50UGV0TmFtZSA9IHRoaXMubmV3UGV0TmFtZTtcbiAgICAgICAgdGhpcy5uZXdQZXROYW1lID0gJyc7IC8vIENsZWFyIGlucHV0XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICcnOyAvLyBDbGVhciBzdGF0dXMgdGV4dFxuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgc3RvcmVkIHVzZXIgaW5mbyB3aXRoIHRoZSBuZXcgbmFtZVxuICAgICAgICBjb25zdCB1cGRhdGVkVXNlckluZm8gPSB7IC4uLnVzZXJJbmZvLCBwZXRfbmFtZTogdGhpcy5jdXJyZW50UGV0TmFtZSB9O1xuICAgICAgICBhd2FpdCBzdG9yYWdlLnNldCh7XG4gICAgICAgICAga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTyxcbiAgICAgICAgICB2YWx1ZTogSlNPTi5zdHJpbmdpZnkodXBkYXRlZFVzZXJJbmZvKVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTaG93IHRvYXN0IGFuZCBuYXZpZ2F0ZSBiYWNrXG4gICAgICAgIHByb21wdC5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6ICflrqDnianlkI3lrZflt7Lmm7TmlrDvvIEnXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByb3V0ZXIuYmFjaygpO1xuICAgICAgICB9LCAxNTAwKTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gYOS/neWtmOWksei0pTogJHtzZXRSZXN1bHQuZXJyb3IgfHwgJ+acquefpemUmeivryd9YDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdvQmFjaygpIHtcbiAgICAgIGlmICh0aGlzLnNob3dLZXlib2FyZCkge1xuICAgICAgICB0aGlzLnRvZ2dsZUtleWJvYXJkKGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdXRlci5iYWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyIiLCJkYXRhIiwia2V5cyIsIm9uS2V5Q2xpY2siLCJrZXkiLCIkZW1pdCIsInZhbHVlIiwiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX3N5c3RlbTIiLCJfc3lzdGVtMyIsIl9zeXN0ZW00IiwiX2NvbmZpZyIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJvd25LZXlzIiwiciIsInQiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJvIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5IiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiQXBpU2VydmljZSIsImNvbnN0cnVjdG9yIiwiYmFzZUhlYWRlcnMiLCJyZXF1ZXN0IiwiZW5kcG9pbnQiLCJtZXRob2QiLCJ1cmwiLCJvcHRpb25zIiwiaGVhZGVyIiwicmVzcG9uc2VUeXBlIiwiSlNPTiIsInN0cmluZ2lmeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmV0Y2giLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJyZXNwb25zZURhdGEiLCJjb2RlIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJmYWlsIiwiZ2V0UmFua2luZ3MiLCJsaW1pdCIsInJlc3VsdCIsImFjdGlvbiIsInJhbmtpbmdzIiwibWVzc2FnZSIsInN5bmNDbGlja3MiLCJ1c2VySWQiLCJjbGlja0NvdW50IiwidXNlcl9pZCIsImNsaWNrX2NvdW50IiwiY2hlY2tQZXROYW1lQXZhaWxhYmlsaXR5IiwicGV0TmFtZSIsInBldF9uYW1lIiwiaXNBdmFpbGFibGUiLCJzZXRQZXROYW1lIiwibmV3TmFtZSIsIm5ld19uYW1lIiwiY2hlY2tEZXZpY2VSZWdpc3RyYXRpb24iLCJkZXZpY2VJZCIsImRldmljZV9pZCIsImxvZyIsInJlZ2lzdGVyQW5kR2V0VXNlcklkIiwidXNlckluZm8iLCJ2ZXJpZnlVc2VySWRBbmRSZXN0b3JlIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiX2FwaVNlcnZpY2UiLCJjaGVja05ldHdvcmtBY2Nlc3MiLCJsb2NhbEFjdGl2YXRpb24iLCJnZXQiLCJDT05GSUciLCJTVE9SQUdFX0tFWVMiLCJJU19MT0NBTExZX0FDVElWQVRFRCIsInVyaSIsImNhbkFjY2VzcyIsInVzZXJJbmZvUmVzdWx0IiwiVVNFUl9JTkZPIiwicGFyc2UiLCJpZCIsImRldmljZUNvZGVSZXN1bHQiLCJERVZJQ0VfSUQiLCJkZXZpY2VDb2RlIiwiYXBpUmVzdWx0IiwidXNlcl9udW1iZXIiLCJ1c2VySW5mb1RvU2F2ZSIsInRvdGFsX2NsaWNrcyIsInNldCIsIkFQUCIsIk5BTUUiLCJWRVJTSU9OIiwiTUFYX0NMSUNLU19QRVJfQkFUQ0giLCJTWU5DX0lOVEVSVkFMIiwiUkFOS19MSU1JVCIsIlBFTkRJTkdfQ0xJQ0tTIiwiTEFTVF9TWU5DX1RJTUUiLCJUT1RBTF9DTElDS1MiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX2F1dGhHdWFyZCIsIl9Rd2VydHlLZXlib2FyZCIsImNvbXBvbmVudHMiLCJRd2VydHlLZXlib2FyZCIsInRpbWUiLCJjdXJyZW50UGV0TmFtZSIsIm5ld1BldE5hbWUiLCJzdGF0dXNNZXNzYWdlIiwic2hvd0tleWJvYXJkIiwib25Jbml0IiwidXBkYXRlVGltZSIsInNldEludGVydmFsIiwic3RvcmFnZSIsIm5vdyIsIkRhdGUiLCJob3VycyIsImdldEhvdXJzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwidG9nZ2xlS2V5Ym9hcmQiLCJzaG93IiwiaGFuZGxlS2V5Q2xpY2siLCJkZXRhaWwiLCJzbGljZSIsInNhdmVQZXROYW1lIiwiZ3VhcmRSZXN1bHQiLCJhdXRoR3VhcmQiLCJwcm9tcHQiLCJzaG93VG9hc3QiLCJkdXJhdGlvbiIsImF2YWlsYWJpbGl0eVJlc3VsdCIsInNldFJlc3VsdCIsInVwZGF0ZWRVc2VySW5mbyIsInNldFRpbWVvdXQiLCJyb3V0ZXIiLCJiYWNrIiwiZ29CYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQW1EQUEsSUFBQUEsV0FBQUEsUUFBQUEs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