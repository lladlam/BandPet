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
                                            if (response.code >= 200 && response.code < 300) resolve(response.data);
                                            else {
                                                console.error(`HTTP Error: ${response.code}`, response);
                                                reject(new Error(`HTTP ${response.code}: ${JSON.stringify(response.data)}`));
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
                            async activateDevice(deviceId, activationCode) {
                                try {
                                    const result = await this.request('bright-responder', 'POST', {
                                        action: 'activate',
                                        device_id: deviceId,
                                        activation_code: activationCode
                                    });
                                    return result;
                                } catch (error) {
                                    console.error('激活失败:', error);
                                    return {
                                        success: false,
                                        error: error.message
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
                        }
                        var _default = exports["default"] = new ApiService();
                    },
                    "./src/common/js/auth.js" (__unused_rspack_module, exports, __webpack_require__) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.auth = void 0;
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.router"));
                        var _config = __webpack_require__("./src/common/js/config.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        const auth = exports.auth = {
                            async getActivationState () {
                                return new Promise((resolve)=>{
                                    _system.default.get({
                                        key: 'is_activated',
                                        success: (isActivatedData)=>{
                                            if ('true' === isActivatedData) _system.default.get({
                                                key: _config.CONFIG.STORAGE_KEYS.USER_INFO,
                                                success: (userInfoData)=>{
                                                    resolve({
                                                        isActivated: true,
                                                        userInfo: userInfoData ? JSON.parse(userInfoData) : null
                                                    });
                                                },
                                                fail: ()=>{
                                                    resolve({
                                                        isActivated: false,
                                                        userInfo: null
                                                    });
                                                }
                                            });
                                            else resolve({
                                                isActivated: false,
                                                userInfo: null
                                            });
                                        },
                                        fail: ()=>{
                                            resolve({
                                                isActivated: false,
                                                userInfo: null
                                            });
                                        }
                                    });
                                });
                            }
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
                                KEY: 'sb_publishable__UMYGv1VDo-ZrOvuUgZLFg_WKqyc7M-',
                                API_URL: 'https://jqubyqnhgyxazpnpjyqf.supabase.co/functions/v1/bright-responder'
                            },
                            APP: {
                                NAME: 'BandPet',
                                VERSION: '1.0.0',
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
                        var _apiService = _interopRequireDefault(__webpack_require__("./src/common/js/api-service.js"));
                        var _auth = __webpack_require__("./src/common/js/auth.js");
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
                                userId: null,
                                statusMessage: '',
                                showKeyboard: false
                            },
                            async onInit () {
                                this.updateTime();
                                setInterval(this.updateTime, 60000);
                                const { isActivated, userInfo } = await _auth.auth.getActivationState();
                                if (isActivated && userInfo) {
                                    this.userId = userInfo.id;
                                    this.currentPetName = userInfo.pet_name || '(无名)';
                                } else this.currentPetName = '(请先激活)';
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
                                const { isActivated, userInfo } = await _auth.auth.getActivationState();
                                if (!isActivated) {
                                    this.statusMessage = '请先激活';
                                    setTimeout(()=>_system.default.push({
                                            uri: 'activate'
                                        }), 1000);
                                    return;
                                }
                                if (!this.newPetName || this.newPetName.length > 10) {
                                    this.statusMessage = '名字需在1-10个字符之间';
                                    return;
                                }
                                this.statusMessage = '正在保存...';
                                const result = await _apiService.default.setPetName(this.userId, this.newPetName);
                                if (result.success) {
                                    this.currentPetName = this.newPetName;
                                    this.statusMessage = '宠物名字已更新！';
                                    const updatedUserInfo = _objectSpread(_objectSpread({}, userInfo), {}, {
                                        pet_name: this.newPetName
                                    });
                                    _system2.default.set({
                                        key: _config.CONFIG.STORAGE_KEYS.USER_INFO,
                                        value: JSON.stringify(updatedUserInfo)
                                    });
                                } else this.statusMessage = `保存失败: ${result.error || '未知错误'}`;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtaW5nXFxpbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9Rd2VydHlLZXlib2FyZC51eCIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvYXBpLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2F1dGguanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL0JhbmRQZXQvc3JjL25hbWluZy9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJrZXlib2FyZC1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwia2V5Ym9hcmQtZ3JpZFwiPlxuICAgICAgPGRpdiBmb3I9XCJ7eyByb3cgaW4ga2V5cyB9fVwiIGNsYXNzPVwia2V5Ym9hcmQtcm93XCI+XG4gICAgICAgIDxkaXYgZm9yPVwie3sga2V5IGluIHJvdyB9fVwiIGNsYXNzPVwia2V5IHt7a2V5Lmxlbmd0aCA+IDEgPyAnc3BlY2lhbC1rZXknIDogJyd9fVwiIG9uY2xpY2s9XCJvbktleUNsaWNrKGtleSlcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImtleS10ZXh0XCI+e3sga2V5IH19PC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgLmtleWJvYXJkLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICAua2V5Ym9hcmQtZ3JpZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAua2V5Ym9hcmQtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAua2V5IHtcbiAgICB3aWR0aDogNDJweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmMyZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luOiAwIDJweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5zcGVjaWFsLWtleSB7XG4gICAgd2lkdGg6IDY1cHg7XG4gIH1cbiAgLmtleS10ZXh0IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhOiB7XG4gICAgICBrZXlzOiBbXG4gICAgICAgIFsncScsICd3JywgJ2UnLCAncicsICd0JywgJ3knLCAndScsICdpJywgJ28nLCAncCddLFxuICAgICAgICBbJ2EnLCAncycsICdkJywgJ2YnLCAnZycsICdoJywgJ2onLCAnaycsICdsJ10sXG4gICAgICAgIFsnU2hpZnQnLCAneicsICd4JywgJ2MnLCAndicsICdiJywgJ24nLCAnbScsICfijKsnXSxcbiAgICAgICAgWydTcGFjZScsICfinJMnXVxuICAgICAgXVxuICAgICAgLy8gTm90ZTogQSByZWFsIGltcGxlbWVudGF0aW9uIHdvdWxkIGhhbmRsZSBzaGlmdCBzdGF0ZSwgYnV0IHRoaXMgaXMgYSBzaW1wbGlmaWVkIHZlcnNpb24uXG4gICAgfSxcbiAgICBvbktleUNsaWNrKGtleSkge1xuICAgICAgdGhpcy4kZW1pdCgna2V5Y2xpY2snLCB7IHZhbHVlOiBrZXkgfSk7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbiIsIi8vIGFwaS1zZXJ2aWNlLmpzXG5pbXBvcnQgZmV0Y2ggZnJvbSAnQHN5c3RlbS5mZXRjaCdcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vY29uZmlnLmpzJ1xuXG5jbGFzcyBBcGlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iYXNlSGVhZGVycyA9IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIENPTkZJRy5TVVBBQkFTRS5LRVksXG4gICAgICAnYXBpa2V5JzogQ09ORklHLlNVUEFCQVNFLktFWVxuICAgIH1cbiAgfVxuXG4gIC8vIOmAmueUqOivt+axguaWueazlVxuICBhc3luYyByZXF1ZXN0KGVuZHBvaW50LCBtZXRob2QgPSAnUE9TVCcsIGRhdGEgPSBudWxsKSB7XG4gICAgY29uc3QgdXJsID0gYCR7Q09ORklHLlNVUEFCQVNFLlVSTH0vZnVuY3Rpb25zL3YxLyR7ZW5kcG9pbnR9YFxuICAgIFxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICB1cmwsXG4gICAgICBtZXRob2QsXG4gICAgICBoZWFkZXI6IHRoaXMuYmFzZUhlYWRlcnMsXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xuICAgIH1cblxuICAgIGlmIChkYXRhKSB7XG4gICAgICBvcHRpb25zLmRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmZXRjaC5mZXRjaCh7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5jb2RlID49IDIwMCAmJiByZXNwb25zZS5jb2RlIDwgMzAwKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEhUVFAgRXJyb3I6ICR7cmVzcG9uc2UuY29kZX1gLCByZXNwb25zZSk7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBIVFRQICR7cmVzcG9uc2UuY29kZX06ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSl9YCkpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAoZXJyb3IsIGNvZGUpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBSZXF1ZXN0IEZhaWxlZDogJHtjb2RlfWAsIGVycm9yKTtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZDogJHtlcnJvci5kYXRhfWApKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvLyDojrflj5bmjpLooYzmppxcbiAgYXN5bmMgZ2V0UmFua2luZ3MobGltaXQgPSAxMCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2JyaWdodC1yZXNwb25kZXInLCAnUE9TVCcsIHtcbiAgICAgICAgYWN0aW9uOiAnZ2V0X3JhbmtpbmdzJyxcbiAgICAgICAgbGltaXQ6IGxpbWl0XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgcmFua2luZ3M6IHJlc3VsdC5yYW5raW5ncyB8fCBbXVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfojrflj5bmjpLooYzmppzlpLHotKU6JywgZXJyb3IpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgcmFua2luZ3M6IFtdLFxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIOS4iuaKpeeCueWHu+asoeaVsFxuICBhc3luYyBzeW5jQ2xpY2tzKHVzZXJJZCwgY2xpY2tDb3VudCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLnJlcXVlc3QoJ2JyaWdodC1yZXNwb25kZXInLCAnUE9TVCcsIHtcbiAgICAgICAgYWN0aW9uOiAnc3luY19jbGlja3MnLFxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgICAgIGNsaWNrX2NvdW50OiBjbGlja0NvdW50XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S4iuaKpeeCueWHu+asoeaVsOWksei0pTonLCBlcnJvcilcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9XG4gICAgfVxuICB9XG4gIFxuICAvLyDmv4DmtLtcbiAgYXN5bmMgYWN0aXZhdGVEZXZpY2UoZGV2aWNlSWQsIGFjdGl2YXRpb25Db2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdhY3RpdmF0ZScsXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWQsXG4gICAgICAgIGFjdGl2YXRpb25fY29kZTogYWN0aXZhdGlvbkNvZGVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5r+A5rS75aSx6LSlOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIOS/ruaUueWuoOeJqeWQjVxuICBhc3luYyBzZXRQZXROYW1lKHVzZXJJZCwgbmV3TmFtZSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2JyaWdodC1yZXNwb25kZXInLCAnUE9TVCcsIHtcbiAgICAgICAgYWN0aW9uOiAnc2V0X3BldF9uYW1lJyxcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxuICAgICAgICBuZXdfbmFtZTogbmV3TmFtZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfkv67mlLnlrqDnianlkI3lpLHotKU6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBcGlTZXJ2aWNlKClcbiIsIi8vIEJhbmRQZXQvc3JjL2NvbW1vbi9qcy9hdXRoLmpzXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XG5cbmV4cG9ydCBjb25zdCBhdXRoID0ge1xuICAvKipcbiAgICogR2V0cyB0aGUgdXNlcidzIGFjdGl2YXRpb24gc3RhdGUgZnJvbSBzdG9yYWdlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7aXNBY3RpdmF0ZWQ6IGJvb2xlYW4sIHVzZXJJbmZvOiBhbnl9Pn1cbiAgICovXG4gIGFzeW5jIGdldEFjdGl2YXRpb25TdGF0ZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHN0b3JhZ2UuZ2V0KHtcbiAgICAgICAga2V5OiAnaXNfYWN0aXZhdGVkJyxcbiAgICAgICAgc3VjY2VzczogKGlzQWN0aXZhdGVkRGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChpc0FjdGl2YXRlZERhdGEgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgc3RvcmFnZS5nZXQoe1xuICAgICAgICAgICAgICBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPLFxuICAgICAgICAgICAgICBzdWNjZXNzOiAodXNlckluZm9EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICBpc0FjdGl2YXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHVzZXJJbmZvOiB1c2VySW5mb0RhdGEgPyBKU09OLnBhcnNlKHVzZXJJbmZvRGF0YSkgOiBudWxsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZhaWw6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBBY3RpdmF0ZWQgYnV0IGNvdWxkbid0IGdldCB1c2VyIGluZm9cbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgaXNBY3RpdmF0ZWQ6IGZhbHNlLCB1c2VySW5mbzogbnVsbCB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vdCBhY3RpdmF0ZWRcbiAgICAgICAgICAgIHJlc29sdmUoeyBpc0FjdGl2YXRlZDogZmFsc2UsIHVzZXJJbmZvOiBudWxsIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogKCkgPT4ge1xuICAgICAgICAgIC8vIEZhaWxlZCB0byBnZXQgYWN0aXZhdGlvbiBzdGF0dXNcbiAgICAgICAgICByZXNvbHZlKHsgaXNBY3RpdmF0ZWQ6IGZhbHNlLCB1c2VySW5mbzogbnVsbCB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG4iLCIvLyBjb25maWcuanNcbmV4cG9ydCBjb25zdCBDT05GSUcgPSB7XG4gIC8vIFN1cGFiYXNl6YWN572uXG4gIFNVUEFCQVNFOiB7XG4gICAgVVJMOiAnaHR0cHM6Ly9qcXVieXFuaGd5eGF6cG5wanlxZi5zdXBhYmFzZS5jbycsXG4gICAgS0VZOiAnc2JfcHVibGlzaGFibGVfX1VNWUd2MVZEby1ack92dVVnWkxGZ19XS3F5YzdNLScsIC8vIOivt+abv+aNouS4uuS9oOeahFN1cGFiYXNl5Yy/5ZCN5a+G6ZKlXG4gICAgQVBJX1VSTDogJ2h0dHBzOi8vanF1YnlxbmhneXhhenBucGp5cWYuc3VwYWJhc2UuY28vZnVuY3Rpb25zL3YxL2JyaWdodC1yZXNwb25kZXInXG4gIH0sXG4gIFxuICAvLyDlupTnlKjphY3nva5cbiAgQVBQOiB7XG4gICAgTkFNRTogJ0JhbmRQZXQnLFxuICAgIFZFUlNJT046ICcxLjAuMCcsXG4gICAgTUFYX0NMSUNLU19QRVJfQkFUQ0g6IDUwLCAvLyDmibnph4/kuIrkvKDmnIDlpKfngrnlh7vmlbBcbiAgICBTWU5DX0lOVEVSVkFMOiAzMDAwMDAsIC8vIDXliIbpkp/lkIzmraXkuIDmrKFcbiAgICBSQU5LX0xJTUlUOiAxMCAvLyDmjpLooYzmppzmmL7npLrmlbDph49cbiAgfSxcbiAgXG4gIC8vIOWtmOWCqOmUruWQjVxuICBTVE9SQUdFX0tFWVM6IHtcbiAgICBERVZJQ0VfSUQ6ICdkZXZpY2VfaWQnLFxuICAgIFVTRVJfSU5GTzogJ3VzZXJfaW5mbycsXG4gICAgUEVORElOR19DTElDS1M6ICdwZW5kaW5nX2NsaWNrcycsXG4gICAgTEFTVF9TWU5DX1RJTUU6ICdsYXN0X3N5bmNfdGltZScsXG4gICAgVE9UQUxfQ0xJQ0tTOiAndG90YWxfY2xpY2tzJ1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS42LjhcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNi44XCI7IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicGFnZS1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXItY29udGFpbmVyXCIgc2hvdz1cInt7IXNob3dLZXlib2FyZH19XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi9iYWNrLnBuZ1wiIGNsYXNzPVwicGFnZS1oZWFkZXItYmFjay1idXR0b25cIiBvbmNsaWNrPVwiZ29CYWNrXCI+PC9pbWFnZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZS10aW1lXCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLXRpbWUtZGlzcGxheVwiPnt7IHRpbWUgfX08L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLWhlYWRlci10aXRsZVwiPuWuoOeJqeWRveWQjTwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50XCIgc2hvdz1cInt7IXNob3dLZXlib2FyZH19XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtbmFtZS1zZWN0aW9uXCI+XG4gICAgICAgICAgPHRleHQ+5b2T5YmN5ZCN5a2XOiB7eyBjdXJyZW50UGV0TmFtZSB9fTwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lLWlucHV0XCIgb25jbGljaz1cInRvZ2dsZUtleWJvYXJkKHRydWUpXCI+XG4gICAgICAgICAgPHRleHQ+e3sgbmV3UGV0TmFtZSB8fCAn54K55Ye76L6T5YWl5paw5ZCN5a2XJyB9fTwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vY2hlY2sucG5nXCIgY2xhc3M9XCJjb25maXJtLWJ1dHRvblwiIG9uY2xpY2s9XCJzYXZlUGV0TmFtZVwiPjwvaW1hZ2U+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwic3RhdHVzLXRleHRcIj57eyBzdGF0dXNNZXNzYWdlIH19PC90ZXh0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPFF3ZXJ0eUtleWJvYXJkIHNob3c9XCJ7e3Nob3dLZXlib2FyZH19XCIgb25rZXljbGljaz1cImhhbmRsZUtleUNsaWNrXCI+PC9Rd2VydHlLZXlib2FyZD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gIC5wYWdlLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5wYWdlLWhlYWRlci1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLnBhZ2UtdGltZS1kaXNwbGF5IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAucGFnZS1oZWFkZXItYmFjay1idXR0b24ge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTkwRkY7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLWJhY2stYXJyb3cge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgfVxuICAucGFnZS1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxuICAuaGVhZGVyLXRpdGxlLXRpbWUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAucGFnZS1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5jb250ZW50LWNvbnRhaW5lciB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmN1cnJlbnQtbmFtZS1zZWN0aW9uIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuICAuY3VycmVudC1uYW1lLXNlY3Rpb24gdGV4dCB7IGNvbG9yOiAjQUFBOyBmb250LXNpemU6IDI4cHg7IG1hcmdpbi1ib3R0b206IDEwcHg7IH1cbiAgLm5hbWUtaW5wdXQgeyB3aWR0aDogNDAwcHg7IGhlaWdodDogNzBweDsgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTsgYm9yZGVyLXJhZGl1czogMTVweDsganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyBhbGlnbi1pdGVtczogY2VudGVyOyBwYWRkaW5nLWxlZnQ6IDIwcHg7IG1hcmdpbi1ib3R0b206IDQwcHg7IH1cbiAgLm5hbWUtaW5wdXQgdGV4dCB7IGNvbG9yOiAjRkZGOyBmb250LXNpemU6IDMycHg7IH1cbiAgLmNvbmZpcm0tYnV0dG9uIHsgd2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDEwMHB4OyBib3JkZXItcmFkaXVzOiA1MHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QUZGOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuY29uZmlybS1pY29uIHsgY29sb3I6ICNGRkY7IGZvbnQtc2l6ZTogNjBweDsgfVxuICAuc3RhdHVzLXRleHQgeyBjb2xvcjogI0ZGM0IzMDsgZm9udC1zaXplOiAyNHB4OyBtYXJnaW4tdG9wOiAyMHB4OyB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcbiAgaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQHN5c3RlbS5zdG9yYWdlJztcbiAgaW1wb3J0IEFwaVNlcnZpY2UgZnJvbSAnLi4vY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzJztcbiAgaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uL2NvbW1vbi9qcy9hdXRoLmpzJztcbiAgaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi4vY29tbW9uL2pzL2NvbmZpZy5qcyc7XG4gIGltcG9ydCBRd2VydHlLZXlib2FyZCBmcm9tICcuLi9jb21tb24vUXdlcnR5S2V5Ym9hcmQudXgnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBRd2VydHlLZXlib2FyZFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgdGltZTogJzAwOjAwJyxcbiAgICAgIGN1cnJlbnRQZXROYW1lOiAnLi4uJyxcbiAgICAgIG5ld1BldE5hbWU6ICcnLFxuICAgICAgdXNlcklkOiBudWxsLFxuICAgICAgc3RhdHVzTWVzc2FnZTogJycsXG4gICAgICBzaG93S2V5Ym9hcmQ6IGZhbHNlXG4gICAgfSxcbiAgICBhc3luYyBvbkluaXQoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICAgIHNldEludGVydmFsKHRoaXMudXBkYXRlVGltZSwgNjAwMDApO1xuXG4gICAgICBjb25zdCB7IGlzQWN0aXZhdGVkLCB1c2VySW5mbyB9ID0gYXdhaXQgYXV0aC5nZXRBY3RpdmF0aW9uU3RhdGUoKTtcbiAgICAgIGlmIChpc0FjdGl2YXRlZCAmJiB1c2VySW5mbykge1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJbmZvLmlkO1xuICAgICAgICB0aGlzLmN1cnJlbnRQZXROYW1lID0gdXNlckluZm8ucGV0X25hbWUgfHwgJyjml6DlkI0pJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBldE5hbWUgPSAnKOivt+WFiOa/gOa0uyknO1xuICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlVGltZSgpIHtcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBob3VycyA9IG5vdy5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgIHRoaXMudGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICB9LFxuICAgIHRvZ2dsZUtleWJvYXJkKHNob3cpIHtcbiAgICAgIHRoaXMuc2hvd0tleWJvYXJkID0gc2hvdztcbiAgICB9LFxuICAgIGhhbmRsZUtleUNsaWNrKGUpIHtcbiAgICAgIGNvbnN0IGtleSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgaWYgKGtleSA9PT0gJ+KMqycpIHtcbiAgICAgICAgdGhpcy5uZXdQZXROYW1lID0gdGhpcy5uZXdQZXROYW1lLnNsaWNlKDAsIC0xKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAn4pyTJykge1xuICAgICAgICB0aGlzLnRvZ2dsZUtleWJvYXJkKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zYXZlUGV0TmFtZSgpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdTcGFjZScpIHtcbiAgICAgICAgdGhpcy5uZXdQZXROYW1lICs9ICcgJztcbiAgICAgIH0gZWxzZSBpZiAoa2V5ICE9PSAnU2hpZnQnKSB7XG4gICAgICAgIHRoaXMubmV3UGV0TmFtZSArPSBrZXk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBzYXZlUGV0TmFtZSgpIHtcbiAgICAgIGNvbnN0IHsgaXNBY3RpdmF0ZWQsIHVzZXJJbmZvIH0gPSBhd2FpdCBhdXRoLmdldEFjdGl2YXRpb25TdGF0ZSgpO1xuICAgICAgaWYgKCFpc0FjdGl2YXRlZCkge1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn6K+35YWI5r+A5rS7JztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiByb3V0ZXIucHVzaCh7IHVyaTogJ2FjdGl2YXRlJyB9KSwgMTAwMCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLm5ld1BldE5hbWUgfHwgdGhpcy5uZXdQZXROYW1lLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICflkI3lrZfpnIDlnKgxLTEw5Liq5a2X56ym5LmL6Ze0JztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gJ+ato+WcqOS/neWtmC4uLic7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2Uuc2V0UGV0TmFtZSh0aGlzLnVzZXJJZCwgdGhpcy5uZXdQZXROYW1lKTtcblxuICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBldE5hbWUgPSB0aGlzLm5ld1BldE5hbWU7XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICflrqDnianlkI3lrZflt7Lmm7TmlrDvvIEnO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdXBkYXRlZFVzZXJJbmZvID0geyAuLi51c2VySW5mbywgcGV0X25hbWU6IHRoaXMubmV3UGV0TmFtZSB9O1xuICAgICAgICBzdG9yYWdlLnNldCh7XG4gICAgICAgICAga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTyxcbiAgICAgICAgICB2YWx1ZTogSlNPTi5zdHJpbmdpZnkodXBkYXRlZFVzZXJJbmZvKVxuICAgICAgICB9KTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gYOS/neWtmOWksei0pTogJHtyZXN1bHQuZXJyb3IgfHwgJ+acquefpemUmeivryd9YDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdvQmFjaygpIHtcbiAgICAgIGlmICh0aGlzLnNob3dLZXlib2FyZCkge1xuICAgICAgICB0aGlzLnRvZ2dsZUtleWJvYXJkKGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdXRlci5iYWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyIiLCJkYXRhIiwia2V5cyIsIm9uS2V5Q2xpY2siLCJrZXkiLCIkZW1pdCIsInZhbHVlIiwiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX2NvbmZpZyIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJvd25LZXlzIiwiciIsInQiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJvIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5IiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiQXBpU2VydmljZSIsImNvbnN0cnVjdG9yIiwiYmFzZUhlYWRlcnMiLCJDT05GSUciLCJTVVBBQkFTRSIsIktFWSIsInJlcXVlc3QiLCJlbmRwb2ludCIsIm1ldGhvZCIsInVybCIsIlVSTCIsIm9wdGlvbnMiLCJoZWFkZXIiLCJyZXNwb25zZVR5cGUiLCJKU09OIiwic3RyaW5naWZ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImNvZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImZhaWwiLCJnZXRSYW5raW5ncyIsImxpbWl0IiwicmVzdWx0IiwiYWN0aW9uIiwicmFua2luZ3MiLCJtZXNzYWdlIiwic3luY0NsaWNrcyIsInVzZXJJZCIsImNsaWNrQ291bnQiLCJ1c2VyX2lkIiwiY2xpY2tfY291bnQiLCJhY3RpdmF0ZURldmljZSIsImRldmljZUlkIiwiYWN0aXZhdGlvbkNvZGUiLCJkZXZpY2VfaWQiLCJhY3RpdmF0aW9uX2NvZGUiLCJzZXRQZXROYW1lIiwibmV3TmFtZSIsIm5ld19uYW1lIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiX3N5c3RlbTIiLCJhdXRoIiwiZ2V0QWN0aXZhdGlvblN0YXRlIiwiZ2V0IiwiaXNBY3RpdmF0ZWREYXRhIiwiU1RPUkFHRV9LRVlTIiwiVVNFUl9JTkZPIiwidXNlckluZm9EYXRhIiwiaXNBY3RpdmF0ZWQiLCJ1c2VySW5mbyIsInBhcnNlIiwiQVBJX1VSTCIsIkFQUCIsIk5BTUUiLCJWRVJTSU9OIiwiTUFYX0NMSUNLU19QRVJfQkFUQ0giLCJTWU5DX0lOVEVSVkFMIiwiUkFOS19MSU1JVCIsIkRFVklDRV9JRCIsIlBFTkRJTkdfQ0xJQ0tTIiwiTEFTVF9TWU5DX1RJTUUiLCJUT1RBTF9DTElDS1MiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX2FwaVNlcnZpY2UiLCJfYXV0aCIsIl9Rd2VydHlLZXlib2FyZCIsImNvbXBvbmVudHMiLCJRd2VydHlLZXlib2FyZCIsInRpbWUiLCJjdXJyZW50UGV0TmFtZSIsIm5ld1BldE5hbWUiLCJzdGF0dXNNZXNzYWdlIiwic2hvd0tleWJvYXJkIiwib25Jbml0IiwidXBkYXRlVGltZSIsInNldEludGVydmFsIiwiaWQiLCJwZXRfbmFtZSIsIm5vdyIsIkRhdGUiLCJob3VycyIsImdldEhvdXJzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwidG9nZ2xlS2V5Ym9hcmQiLCJzaG93IiwiaGFuZGxlS2V5Q2xpY2siLCJkZXRhaWwiLCJzbGljZSIsInNhdmVQZXROYW1lIiwic2V0VGltZW91dCIsInJvdXRlciIsInVyaSIsInVwZGF0ZWRVc2VySW5mbyIsInN0b3JhZ2UiLCJzZXQiLCJnb0JhY2siLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQW1EQUEsSUFBQUEsV0FBQUEsUUFBQUEsT0FBQUEsR0FBaUI7Z0NBQ2JDLE1BQU07b0NBQ0pDLE1BQU07d0NBQ0o7NENBQUM7NENBQUs7NENBQUs7NENBQUs7NENBQUs7NENBQUs7NENBQUs7NENBQUs7NENBQUs7NENBQUs7eUNBQUk7d0NBQ2xEOzRDQUFDOzRDQUFLOzRDQUFLOzRDQUFLOzRDQUFLOzRDQUFLOzRDQUFLOzRDQUFLOzRDQUFLO3lDQUFJO3dDQUM3Qzs0Q0FBQzs0Q0FBUzs0Q0FBSzs0Q0FBSzs0Q0FBSzs0Q0FBSzs0Q0FBSzs0Q0FBSzs0Q0FBSzt5Q0FBSTt3Q0FDakQ7NENBQUM7NENBQVM7eUNBQUk7cUNBQUE7Z0NBR2xCO2dDQUNBQyxZQUFXQyxHQUFHO29DQUNaLElBQUksQ0FBQ0MsS0FBSyxD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