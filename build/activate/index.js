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
                    "./src/common/T9Keyboard.ux" (module) {
                        var $app_style$ = [
                            [
                                [
                                    [
                                        0,
                                        "keyboard-container"
                                    ]
                                ],
                                {
                                    backgroundColor: "#000000",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    paddingTop: "10px",
                                    paddingRight: "10px",
                                    paddingBottom: "10px",
                                    paddingLeft: "10px",
                                    borderTopColor: "red",
                                    borderRightColor: "red",
                                    borderBottomColor: "red",
                                    borderLeftColor: "red",
                                    borderStyle: "solid",
                                    borderTopWidth: "1px",
                                    borderRightWidth: "1px",
                                    borderBottomWidth: "1px",
                                    borderLeftWidth: "1px"
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
                                    marginBottom: "10px"
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
                                    width: "120px",
                                    height: "70px",
                                    backgroundColor: "#2c2c2e",
                                    borderRadius: "15px",
                                    marginTop: "0",
                                    marginRight: "5px",
                                    marginBottom: "0",
                                    marginLeft: "5px",
                                    justifyContent: "center",
                                    alignItems: "center"
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
                                    show: false,
                                    keys: [
                                        [
                                            '1',
                                            '2',
                                            '3'
                                        ],
                                        [
                                            '4',
                                            '5',
                                            '6'
                                        ],
                                        [
                                            '7',
                                            '8',
                                            '9'
                                        ],
                                        [
                                            '⌫',
                                            '0',
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
                                    ],
                                    show: function() {
                                        return _vm_.show;
                                    }
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
                                                                classList: [
                                                                    "key"
                                                                ],
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
                                marginBottom: "2px",
                                marginTop: 0
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
                                marginRight: "10px"
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
                                alignItems: "flex-start"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "content-scroll-container"
                                ]
                            ],
                            {
                                flex: 1,
                                width: "100%"
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
                                alignItems: "center",
                                paddingBottom: "40px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "device-code-section"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                alignItems: "center",
                                marginBottom: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "activation-code-section"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                alignItems: "center",
                                marginBottom: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "device-code-section"
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
                                    "activation-code-section"
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
                                    "code-box"
                                ]
                            ],
                            {
                                width: "90%",
                                height: "60px",
                                backgroundColor: "#222222",
                                borderRadius: "15px",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingTop: "-1px",
                                paddingRight: "10px",
                                paddingBottom: "-1px",
                                paddingLeft: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "input-box"
                                ]
                            ],
                            {
                                width: "90%",
                                height: "60px",
                                backgroundColor: "#222222",
                                borderRadius: "15px",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingTop: "-1px",
                                paddingRight: "10px",
                                paddingBottom: "-1px",
                                paddingLeft: "10px",
                                color: "#ffffff",
                                fontSize: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "code-box"
                                ],
                                [
                                    2,
                                    "text"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "20px",
                                textOverflow: "ellipsis"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "input-box"
                                ],
                                [
                                    2,
                                    "text"
                                ]
                            ],
                            {
                                color: "#ffffff"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "actions"
                                ]
                            ],
                            {
                                width: "100%",
                                justifyContent: "center",
                                marginTop: "-1px"
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
                                width: "40px",
                                height: "40px",
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
                                fontSize: "40px"
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
                        ],
                        [
                            [
                                [
                                    0,
                                    "t9-keyboard"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: "-1px"
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
                                marginBottom: "-1px"
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
                                width: "80px",
                                height: "80px",
                                backgroundColor: "#2c2c2e",
                                borderRadius: "15px",
                                marginTop: "-20px",
                                marginRight: "8px",
                                marginBottom: "-20px",
                                marginLeft: "8px",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "key-icon"
                                ]
                            ],
                            {
                                width: "40px",
                                height: "40px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "header-button-right"
                                ]
                            ],
                            {
                                width: "80px",
                                height: "80px",
                                borderRadius: "40px",
                                backgroundColor: "#007aff",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "header-button-text"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "10px"
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
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.device"));
                        var _system3 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                        var _apiService = _interopRequireDefault(__webpack_require__("./src/common/js/api-service.js"));
                        var _config = __webpack_require__("./src/common/js/config.js");
                        var _T9Keyboard = _interopRequireDefault(__webpack_require__("./src/common/T9Keyboard.ux"));
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
                            components: {
                                't9-keyboard': _T9Keyboard.default
                            },
                            data: {
                                time: '00:00',
                                deviceCode: '正在生成...',
                                activationCode: '',
                                statusMessage: ''
                            },
                            onInit () {
                                this.updateTime();
                                setInterval(this.updateTime, 60000);
                                this.generateDeviceCode();
                            },
                            updateTime () {
                                const now = new Date();
                                const hours = now.getHours().toString().padStart(2, '0');
                                const minutes = now.getMinutes().toString().padStart(2, '0');
                                this.time = `${hours}:${minutes}`;
                            },
                            goBack () {
                                _system.default.back();
                            },
                            handleKeyClick (e) {
                                const key = e.detail.value;
                                if ('⌫' === key) this.activationCode = this.activationCode.slice(0, -1);
                                else if ('✓' === key) this.activate();
                                else this.activationCode += key;
                                console.log('handleKeyClick fired. key:', key);
                                console.log('activationCode after click:', this.activationCode);
                            },
                            generateDeviceCode () {
                                try {
                                    _system2.default.getSerial({
                                        success: (data)=>{
                                            const serialNumber = data.serial;
                                            if (!serialNumber) {
                                                this.deviceCode = "设备序列号无效";
                                                return;
                                            }
                                            let processedSerial = serialNumber.substring(0, 13);
                                            processedSerial = processedSerial.replace(/\//g, '');
                                            const letterToNumberMap = {
                                                A: 1,
                                                B: 2,
                                                C: 3,
                                                D: 4,
                                                E: 5
                                            };
                                            let numericSerial = '';
                                            for(let i = 0; i < processedSerial.length; i++){
                                                let char = processedSerial[i].toUpperCase();
                                                if (char >= 'F' && char <= 'Z') char = 'E';
                                                if (letterToNumberMap[char]) numericSerial += letterToNumberMap[char];
                                                else if (!isNaN(parseInt(char, 10))) numericSerial += char;
                                            }
                                            if (numericSerial.length < 12) numericSerial = numericSerial.padEnd(12, '0');
                                            else if (numericSerial.length > 12) numericSerial = numericSerial.substring(0, 12);
                                            if (12 !== numericSerial.length || !/^\d{12}$/.test(numericSerial)) {
                                                this.deviceCode = "序列号处理结果非12位数字";
                                                return;
                                            }
                                            const pairs = [];
                                            for(let i = 0; i < 12; i += 2)pairs.push(numericSerial.substring(i, i + 2));
                                            const selectedPairs = [
                                                pairs[0],
                                                pairs[2],
                                                pairs[4]
                                            ];
                                            const sumAB = parseInt(selectedPairs[0][0], 10) + parseInt(selectedPairs[0][1], 10);
                                            const sumEF = parseInt(selectedPairs[1][0], 10) + parseInt(selectedPairs[1][1], 10);
                                            const sumIJ = parseInt(selectedPairs[2][0], 10) + parseInt(selectedPairs[2][1], 10);
                                            const sumBFJ = parseInt(selectedPairs[0][1], 10) + parseInt(selectedPairs[1][1], 10) + parseInt(selectedPairs[2][1], 10);
                                            const formattedSumAB = String(sumAB).padStart(2, '0');
                                            const formattedSumEF = String(sumEF).padStart(2, '0');
                                            const formattedSumIJ = String(sumIJ).padStart(2, '0');
                                            const formattedSumBFJ = String(sumBFJ).padStart(2, '0');
                                            this.deviceCode = `${formattedSumAB}${formattedSumEF}${formattedSumIJ}${formattedSumBFJ}1`;
                                            console.log('generateDeviceCode: Final deviceCode:', this.deviceCode);
                                        },
                                        fail: (data, code)=>{
                                            this.deviceCode = `获取设备序列号失败: ${code} - ${JSON.stringify(data)}`;
                                            console.error('generateDeviceCode: Failed to get serial:', data, code);
                                        }
                                    });
                                } catch (err) {
                                    this.deviceCode = `设备码计算错误: ${err.message}`;
                                    console.error('generateDeviceCode: Calculation error:', err);
                                }
                            },
                            async activate () {
                                if (!this.activationCode) {
                                    this.statusMessage = "请输入激活码";
                                    return;
                                }
                                if (11 !== this.activationCode.length) {
                                    this.statusMessage = "激活码长度不正确，应为11位";
                                    return;
                                }
                                const ac = this.activationCode;
                                const _A = ac[0];
                                const _B = ac[1];
                                const _C = ac[2];
                                const _D = ac[3];
                                const _E = ac[4];
                                const _F = ac[5];
                                const _G = ac[6];
                                const _H = ac[7];
                                const _I = ac[8];
                                const _J = ac[9];
                                const _K = ac[10];
                                const G_val = parseInt(_G, 10);
                                const K_val = parseInt(_K, 10);
                                const HI_parsed = parseInt(`${_H}${_I}`, 10);
                                const HI_modified_num = HI_parsed - G_val - K_val;
                                if (HI_modified_num < 0 || HI_modified_num > 99) {
                                    this.statusMessage = "激活失败: HI减法结果无效";
                                    return;
                                }
                                const HI_modified_str = String(HI_modified_num).padStart(2, '0');
                                const AB_val = parseInt(`${_A}${_B}`, 10);
                                const CD_val = parseInt(`${_C}${_D}`, 10);
                                const EF_val = parseInt(`${_E}${_F}`, 10);
                                let AB_divided, CD_divided, EF_divided;
                                if (0 === G_val) {
                                    AB_divided = AB_val;
                                    CD_divided = CD_val;
                                    EF_divided = EF_val;
                                } else {
                                    AB_divided = Math.floor(AB_val / G_val);
                                    CD_divided = Math.floor(CD_val / G_val);
                                    EF_divided = Math.floor(EF_val / G_val);
                                }
                                const AB_formatted = String(AB_divided).padStart(2, '0');
                                const CD_formatted = String(CD_divided).padStart(2, '0');
                                const EF_formatted = String(EF_divided).padStart(2, '0');
                                const groupABCDEFHIJ = `${AB_formatted}${CD_formatted}${EF_formatted}${HI_modified_str}${_J}`;
                                if (groupABCDEFHIJ !== this.deviceCode) {
                                    this.statusMessage = "激活失败: 设备码不匹配";
                                    return;
                                }
                                if (groupABCDEFHIJ !== this.deviceCode) {
                                    this.statusMessage = "激活失败: 设备码不匹配";
                                    return;
                                }
                                const now = new Date();
                                let currentMinutes = now.getMinutes();
                                if (currentMinutes <= 9) currentMinutes += 60;
                                const GJ_value = parseInt(`${_G}${_J}`, 10);
                                const diff = currentMinutes - GJ_value;
                                if (diff <= 10 && diff >= 0) {
                                    this.statusMessage = "激活成功！";
                                    _system3.default.set({
                                        key: 'is_activated',
                                        value: 'true'
                                    });
                                    _system3.default.set({
                                        key: _config.CONFIG.STORAGE_KEYS.USER_INFO,
                                        value: JSON.stringify({
                                            deviceCode: this.deviceCode,
                                            activationCode: this.activationCode
                                        })
                                    });
                                    setTimeout(()=>{
                                        _system.default.back();
                                    }, 1000);
                                } else this.statusMessage = `激活失败: 时间校验不通过 (差值: ${diff})`;
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
                                                value: "激活"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("scroll", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "content-scroll-container"
                                    ]
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page-content"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "device-code-section"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                value: "您的设备码为"
                                            }
                                        }, []),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "code-box"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    value: function() {
                                                        return _vm_.deviceCode;
                                                    }
                                                }
                                            }, [])
                                        ])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "activation-code-section"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                value: "激活码"
                                            }
                                        }, []),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "input-box"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    value: function() {
                                                        return _vm_.activationCode || "\u70B9\u51FB\u8F93\u5165";
                                                    }
                                                }
                                            }, [])
                                        ])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "actions"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "t9-keyboard"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "keyboard-row"
                                                    ]
                                                }
                                            }, [
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "key"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.handleKeyClick({
                                                                    detail: {
                                                                        value: "1"
                                                                    }
                                                                }, evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/common/1.png",
                                                            classList: [
                                                                "key-icon"
                                                            ]
                                                        }
                                                    }, [])
                                                ]),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "key"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.handleKeyClick({
                                                                    detail: {
                                                                        value: "2"
                                                                    }
                                                                }, evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/common/2.png",
                                                            classList: [
                                                                "key-icon"
                                                            ]
                                                        }
                                                    }, [])
                                                ]),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "key"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.handleKeyClick({
                                                                    detail: {
                                                                        value: "3"
                                                                    }
                                                                }, evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/common/3.png",
                                                            classList: [
                                                                "key-icon"
                                                            ]
                                                        }
                                                    }, [])
                                                ])
                                            ]),
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "keyboard-row"
                                                    ]
                                                }
                                            }, [
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "key"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.handleKeyClick({
                                                                    detail: {
                                                                        value: "4"
                                                                    }
                                                                }, evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/common/4.png",
                                                            classList: [
                                                                "key-icon"
                                                            ]
                                                        }
                                                    }, [])
                                                ]),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "key"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.handleKeyClick({
                                                                    detail: {
                                                                        value: "5"
                                                                    }
                                                                }, evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/common/5.png",
                                                            classList: [
                                                                "key-icon"
                                                            ]
                                                        }
                                                    }, [])
                                                ]),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "key"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.handleKeyClick({
                                                                    detail: {
                                                                        value: "6"
                                                                    }
                                                                }, evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/common/6.png",
                                                            classList: [
                                                                "key-icon"
                                                            ]
                                                        }
                                                    }, [])
                                                ])
                                            ]),
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "keyboard-row"
                                                    ]
                                                }
                                            }, [
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "key"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.handleKeyClick({
                                                                    detail: {
                                                                        value: "7"
                                                                    }
                                                                }, evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/common/7.png",
                                                            classList: [
                                                                "key-icon"
                                                            ]
                                                        }
                                                    }, [])
                                                ]),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "key"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.handleKeyClick({
                                                                    detail: {
                                                                        value: "8"
                                                                    }
                                                                }, evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/common/8.png",
                                                            classList: [
                                                                "key-icon"
                                                            ]
                                                        }
                                                    }, [])
                                                ]),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "key"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.handleKeyClick({
                                                                    detail: {
                                                                        value: "9"
                                                                    }
                                                                }, evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/common/9.png",
                                                            classList: [
                                                                "key-icon"
                                                            ]
                                                        }
                                                    }, [])
                                                ])
                                            ]),
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "keyboard-row"
                                                    ]
                                                }
                                            }, [
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "key"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.handleKeyClick({
                                                                    detail: {
                                                                        value: "\u232B"
                                                                    }
                                                                }, evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/common/del.png",
                                                            classList: [
                                                                "key-icon"
                                                            ]
                                                        }
                                                    }, [])
                                                ]),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "key"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.handleKeyClick({
                                                                    detail: {
                                                                        value: "0"
                                                                    }
                                                                }, evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/common/0.png",
                                                            classList: [
                                                                "key-icon"
                                                            ]
                                                        }
                                                    }, [])
                                                ]),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "key"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.handleKeyClick({
                                                                    detail: {
                                                                        value: "\u2713"
                                                                    }
                                                                }, evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/common/SmallCheck.png",
                                                            classList: [
                                                                "key-icon"
                                                            ]
                                                        }
                                                    }, [])
                                                ])
                                            ])
                                        ])
                                    ])
                                ])
                            ]),
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZhdGVcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL1Q5S2V5Ym9hcmQudXgiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9hY3RpdmF0ZS9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJrZXlib2FyZC1jb250YWluZXJcIiBzaG93PVwie3tzaG93fX1cIj5cbiAgICA8ZGl2IGNsYXNzPVwia2V5Ym9hcmQtZ3JpZFwiPlxuICAgICAgPGRpdiBmb3I9XCJ7eyByb3cgaW4ga2V5cyB9fVwiIGNsYXNzPVwia2V5Ym9hcmQtcm93XCI+XG4gICAgICAgIDxkaXYgZm9yPVwie3sga2V5IGluIHJvdyB9fVwiIGNsYXNzPVwia2V5XCIgb25jbGljaz1cIm9uS2V5Q2xpY2soa2V5KVwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwia2V5LXRleHRcIj57eyBrZXkgfX08L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAua2V5Ym9hcmQtY29udGFpbmVyIHtcbiAgICAvKiBSZW1vdmVkIGFic29sdXRlIHBvc2l0aW9uaW5nICovXG4gICAgLyogYm90dG9tOiAwOyAqL1xuICAgIC8qIGxlZnQ6IDA7ICovXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7IC8qIERlYnVnZ2luZyBib3JkZXIgKi9cbiAgfVxuICAua2V5Ym9hcmQtZ3JpZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAua2V5Ym9hcmQtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLmtleSB7XG4gICAgd2lkdGg6IDEyMHB4OyAvKiBBZGp1c3RlZCBmcm9tIDE0MHB4ICovXG4gICAgaGVpZ2h0OiA3MHB4OyAvKiBBZGp1c3RlZCBmcm9tIDgwcHggKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyYzJlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5rZXktdGV4dCB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAyOHB4OyAvKiBSZWR1Y2VkIGZvbnQgc2l6ZSAqL1xuICB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YToge1xuICAgICAgc2hvdzogZmFsc2UsIC8vIE1vdmUgc2hvdyBiYWNrIHRvIGRhdGFcbiAgICAgIGtleXM6IFtcbiAgICAgICAgWycxJywgJzInLCAnMyddLFxuICAgICAgICBbJzQnLCAnNScsICc2J10sXG4gICAgICAgIFsnNycsICc4JywgJzknXSxcbiAgICAgICAgWyfijKsnLCAnMCcsICfinJMnXSAvLyBVc2luZyBzeW1ib2xzIGZvciBiYWNrc3BhY2UgYW5kIGNvbmZpcm1cbiAgICAgIF1cbiAgICB9LFxuICAgIG9uS2V5Q2xpY2soa2V5KSB7XG4gICAgICB0aGlzLiRlbWl0KCdrZXljbGljaycsIHsgdmFsdWU6IGtleSB9KTtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuIiwiLy8gYXBpLXNlcnZpY2UuanNcbmltcG9ydCBmZXRjaCBmcm9tICdAc3lzdGVtLmZldGNoJ1xuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25maWcuanMnXG5cbmNsYXNzIEFwaVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJhc2VIZWFkZXJzID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgQ09ORklHLlNVUEFCQVNFLktFWSxcbiAgICAgICdhcGlrZXknOiBDT05GSUcuU1VQQUJBU0UuS0VZXG4gICAgfVxuICB9XG5cbiAgLy8g6YCa55So6K+35rGC5pa55rOVXG4gIGFzeW5jIHJlcXVlc3QoZW5kcG9pbnQsIG1ldGhvZCA9ICdQT1NUJywgZGF0YSA9IG51bGwpIHtcbiAgICBjb25zdCB1cmwgPSBgJHtDT05GSUcuU1VQQUJBU0UuVVJMfS9mdW5jdGlvbnMvdjEvJHtlbmRwb2ludH1gXG4gICAgXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZCxcbiAgICAgIGhlYWRlcjogdGhpcy5iYXNlSGVhZGVycyxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXG4gICAgfVxuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIG9wdGlvbnMuZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZldGNoLmZldGNoKHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUgPj0gMjAwICYmIHJlc3BvbnNlLmNvZGUgPCAzMDApIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgSFRUUCBFcnJvcjogJHtyZXNwb25zZS5jb2RlfWAsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYEhUVFAgJHtyZXNwb25zZS5jb2RlfTogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKX1gKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IChlcnJvciwgY29kZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFJlcXVlc3QgRmFpbGVkOiAke2NvZGV9YCwgZXJyb3IpO1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkOiAke2Vycm9yLmRhdGF9YCkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8vIOiOt+WPluaOkuihjOamnFxuICBhc3luYyBnZXRSYW5raW5ncyhsaW1pdCA9IDEwKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdnZXRfcmFua2luZ3MnLFxuICAgICAgICBsaW1pdDogbGltaXRcbiAgICAgIH0pXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICByYW5raW5nczogcmVzdWx0LnJhbmtpbmdzIHx8IFtdXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaOkuihjOamnOWksei0pTonLCBlcnJvcilcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICByYW5raW5nczogW10sXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8g5LiK5oql54K55Ye75qyh5pWwXG4gIGFzeW5jIHN5bmNDbGlja3ModXNlcklkLCBjbGlja0NvdW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdzeW5jX2NsaWNrcycsXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcbiAgICAgICAgY2xpY2tfY291bnQ6IGNsaWNrQ291bnRcbiAgICAgIH0pXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5LiK5oql54K55Ye75qyh5pWw5aSx6LSlOicsIGVycm9yKVxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH1cbiAgICB9XG4gIH1cbiAgXG4gIC8vIOa/gOa0u1xuICBhc3luYyBhY3RpdmF0ZURldmljZShkZXZpY2VJZCwgYWN0aXZhdGlvbkNvZGUpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdicmlnaHQtcmVzcG9uZGVyJywgJ1BPU1QnLCB7XG4gICAgICAgIGFjdGlvbjogJ2FjdGl2YXRlJyxcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZCxcbiAgICAgICAgYWN0aXZhdGlvbl9jb2RlOiBhY3RpdmF0aW9uQ29kZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfmv4DmtLvlpLHotKU6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICB9XG5cbiAgLy8g5L+u5pS55a6g54mp5ZCNXG4gIGFzeW5jIHNldFBldE5hbWUodXNlcklkLCBuZXdOYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdzZXRfcGV0X25hbWUnLFxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgICAgIG5ld19uYW1lOiBuZXdOYW1lXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S/ruaUueWuoOeJqeWQjeWksei0pTonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwaVNlcnZpY2UoKVxuIiwiLy8gY29uZmlnLmpzXG5leHBvcnQgY29uc3QgQ09ORklHID0ge1xuICAvLyBTdXBhYmFzZemFjee9rlxuICBTVVBBQkFTRToge1xuICAgIFVSTDogJ2h0dHBzOi8vanF1YnlxbmhneXhhenBucGp5cWYuc3VwYWJhc2UuY28nLFxuICAgIEtFWTogJ3NiX3B1Ymxpc2hhYmxlX19VTVlHdjFWRG8tWnJPdnVVZ1pMRmdfV0txeWM3TS0nLCAvLyDor7fmm7/mjaLkuLrkvaDnmoRTdXBhYmFzZeWMv+WQjeWvhumSpVxuICAgIEFQSV9VUkw6ICdodHRwczovL2pxdWJ5cW5oZ3l4YXpwbnBqeXFmLnN1cGFiYXNlLmNvL2Z1bmN0aW9ucy92MS9icmlnaHQtcmVzcG9uZGVyJ1xuICB9LFxuICBcbiAgLy8g5bqU55So6YWN572uXG4gIEFQUDoge1xuICAgIE5BTUU6ICdCYW5kUGV0JyxcbiAgICBWRVJTSU9OOiAnMS4wLjAnLFxuICAgIE1BWF9DTElDS1NfUEVSX0JBVENIOiA1MCwgLy8g5om56YeP5LiK5Lyg5pyA5aSn54K55Ye75pWwXG4gICAgU1lOQ19JTlRFUlZBTDogMzAwMDAwLCAvLyA15YiG6ZKf5ZCM5q2l5LiA5qyhXG4gICAgUkFOS19MSU1JVDogMTAgLy8g5o6S6KGM5qac5pi+56S65pWw6YePXG4gIH0sXG4gIFxuICAvLyDlrZjlgqjplK7lkI1cbiAgU1RPUkFHRV9LRVlTOiB7XG4gICAgREVWSUNFX0lEOiAnZGV2aWNlX2lkJyxcbiAgICBVU0VSX0lORk86ICd1c2VyX2luZm8nLFxuICAgIFBFTkRJTkdfQ0xJQ0tTOiAncGVuZGluZ19jbGlja3MnLFxuICAgIExBU1RfU1lOQ19USU1FOiAnbGFzdF9zeW5jX3RpbWUnLFxuICAgIFRPVEFMX0NMSUNLUzogJ3RvdGFsX2NsaWNrcydcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNi44XCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjYuOFwiOyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vYmFjay5wbmdcIiBjbGFzcz1cInBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uXCIgb25jbGljaz1cImdvQmFja1wiPjwvaW1hZ2U+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGUtdGltZVwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicGFnZS10aW1lLWRpc3BsYXlcIj57eyB0aW1lIH19PC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicGFnZS1oZWFkZXItdGl0bGVcIj7mv4DmtLs8L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPHNjcm9sbCBjbGFzcz1cImNvbnRlbnQtc2Nyb2xsLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLWNvZGUtc2VjdGlvblwiPlxuICAgICAgICAgIDx0ZXh0PuaCqOeahOiuvuWkh+eggeS4ujwvdGV4dD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29kZS1ib3hcIj5cbiAgICAgICAgICAgIDx0ZXh0Pnt7IGRldmljZUNvZGUgfX08L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aXZhdGlvbi1jb2RlLXNlY3Rpb25cIj5cbiAgICAgICAgICA8dGV4dD7mv4DmtLvnoIE8L3RleHQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWJveFwiPlxuICAgICAgICAgICAgPHRleHQ+e3sgYWN0aXZhdGlvbkNvZGUgfHwgJ+eCueWHu+i+k+WFpScgfX08L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgPCEtLSBUOSBLZXlib2FyZCAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidDkta2V5Ym9hcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlib2FyZC1yb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJoYW5kbGVLZXlDbGljayh7ZGV0YWlsOiB7dmFsdWU6ICcxJ319KVwiPlxuICAgICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vMS5wbmdcIiBjbGFzcz1cImtleS1pY29uXCI+PC9pbWFnZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwiaGFuZGxlS2V5Q2xpY2soe2RldGFpbDoge3ZhbHVlOiAnMid9fSlcIj5cbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uLzIucG5nXCIgY2xhc3M9XCJrZXktaWNvblwiPjwvaW1hZ2U+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCIgb25jbGljaz1cImhhbmRsZUtleUNsaWNrKHtkZXRhaWw6IHt2YWx1ZTogJzMnfX0pXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi8zLnBuZ1wiIGNsYXNzPVwia2V5LWljb25cIj48L2ltYWdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleWJvYXJkLXJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCIgb25jbGljaz1cImhhbmRsZUtleUNsaWNrKHtkZXRhaWw6IHt2YWx1ZTogJzQnfX0pXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi80LnBuZ1wiIGNsYXNzPVwia2V5LWljb25cIj48L2ltYWdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJoYW5kbGVLZXlDbGljayh7ZGV0YWlsOiB7dmFsdWU6ICc1J319KVwiPlxuICAgICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vNS5wbmdcIiBjbGFzcz1cImtleS1pY29uXCI+PC9pbWFnZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwiaGFuZGxlS2V5Q2xpY2soe2RldGFpbDoge3ZhbHVlOiAnNid9fSlcIj5cbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uLzYucG5nXCIgY2xhc3M9XCJrZXktaWNvblwiPjwvaW1hZ2U+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5Ym9hcmQtcm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwiaGFuZGxlS2V5Q2xpY2soe2RldGFpbDoge3ZhbHVlOiAnNyd9fSlcIj5cbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uLzcucG5nXCIgY2xhc3M9XCJrZXktaWNvblwiPjwvaW1hZ2U+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCIgb25jbGljaz1cImhhbmRsZUtleUNsaWNrKHtkZXRhaWw6IHt2YWx1ZTogJzgnfX0pXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi84LnBuZ1wiIGNsYXNzPVwia2V5LWljb25cIj48L2ltYWdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJoYW5kbGVLZXlDbGljayh7ZGV0YWlsOiB7dmFsdWU6ICc5J319KVwiPlxuICAgICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vOS5wbmdcIiBjbGFzcz1cImtleS1pY29uXCI+PC9pbWFnZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlib2FyZC1yb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJoYW5kbGVLZXlDbGljayh7ZGV0YWlsOiB7dmFsdWU6ICfijKsnfX0pXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi9kZWwucG5nXCIgY2xhc3M9XCJrZXktaWNvblwiPjwvaW1hZ2U+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCIgb25jbGljaz1cImhhbmRsZUtleUNsaWNrKHtkZXRhaWw6IHt2YWx1ZTogJzAnfX0pXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi8wLnBuZ1wiIGNsYXNzPVwia2V5LWljb25cIj48L2ltYWdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJoYW5kbGVLZXlDbGljayh7ZGV0YWlsOiB7dmFsdWU6ICfinJMnfX0pXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi9TbWFsbENoZWNrLnBuZ1wiIGNsYXNzPVwia2V5LWljb25cIj48L2ltYWdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2Nyb2xsPlxuXG4gICAgPHRleHQgY2xhc3M9XCJzdGF0dXMtdGV4dFwiPnt7IHN0YXR1c01lc3NhZ2UgfX08L3RleHQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAvKiAuLi4gZXhpc3Rpbmcgc3R5bGVzIC4uLiAqL1xuICAucGFnZS1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAucGFnZS1oZWFkZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBObyBhbGlnbi1pdGVtczogY2VudGVyIGhlcmUsIGxldCBwYWdlLWhlYWRlciBoYW5kbGUgaXQgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5wYWdlLXRpbWUtZGlzcGxheSB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIC5wYWdlLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyAvKiBBbGlnbiBpdGVtcyB0byB0aGUgc3RhcnQgKi9cbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC5wYWdlLWhlYWRlci1iYWNrLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDsgLyogQWRkIHNvbWUgc3BhY2UgYmV0d2VlbiBiYWNrIGJ1dHRvbiBhbmQgdGl0bGUvdGltZSAqL1xuICB9XG4gIC5wYWdlLWhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAzMnB4OyAvKiBBZGp1c3RlZCBmcm9tIDQwcHggKi9cbiAgfVxuICAvKiAucGFnZS1oZWFkZXItc3BhY2VyIGlzIHJlbW92ZWQgKi9cbiAgLmhlYWRlci10aXRsZS10aW1lIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayB0aW1lIGFuZCB0aXRsZSAqL1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAvKiBBbGlnbiB0aW1lIGFuZCB0aXRsZSB0byB0aGUgbGVmdCB3aXRoaW4gdGhlaXIgZGl2ICovXG4gIH1cbiAgLmNvbnRlbnQtc2Nyb2xsLWNvbnRhaW5lciB7IC8qIE5ldyBzY3JvbGwgY29udGFpbmVyIGZvciBjb250ZW50ICovXG4gICAgZmxleDogMTsgLyogVGFrZSByZW1haW5pbmcgc3BhY2UgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucGFnZS1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7IC8qIEFkZCBwYWRkaW5nIGZvciBzY3JvbGxpbmcgKi9cbiAgfVxuICAuZGV2aWNlLWNvZGUtc2VjdGlvbiwgLmFjdGl2YXRpb24tY29kZS1zZWN0aW9uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogSW5jcmVhc2VkIGJ5IDI1JSBmcm9tIDIwcHggKi9cbiAgfVxuICAuZGV2aWNlLWNvZGUtc2VjdGlvbiB0ZXh0LCAuYWN0aXZhdGlvbi1jb2RlLXNlY3Rpb24gdGV4dCB7IGNvbG9yOiAjQUFBOyBmb250LXNpemU6IDI4cHg7IG1hcmdpbi1ib3R0b206IDEwcHg7IH1cbiAgLmNvZGUtYm94LCAuaW5wdXQtYm94IHtcbiAgICB3aWR0aDogOTAlOyAvKiBVc2UgcGVyY2VudGFnZSBmb3IgcmVzcG9uc2l2ZW5lc3MgKi9cbiAgICBoZWlnaHQ6IDYwcHg7IC8qIEluY3JlYXNlZCBoZWlnaHQgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAtMXB4IDEwcHg7IC8qIEFkZCBwYWRkaW5nICovXG4gIH1cbiAgLmNvZGUtYm94IHRleHQge1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtc2l6ZTogMjBweDsgLyogU2xpZ2h0bHkgc21hbGxlciBmb250ICovXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IC8qIEhhbmRsZSBvdmVyZmxvdyAqL1xuICB9XG4gIC5pbnB1dC1ib3gge1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIHBsYWNlaG9sZGVyIHRleHQgKi9cbiAgfVxuICAuaW5wdXQtYm94IHRleHQge1xuICAgICAgY29sb3I6ICNGRkY7XG4gIH1cbiAgLmFjdGlvbnMgeyB3aWR0aDogMTAwJTsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IG1hcmdpbi10b3A6IC0xcHg7IH1cbiAgLmNvbmZpcm0tYnV0dG9uIHsgd2lkdGg6IDQwcHg7IGhlaWdodDogNDBweDsgYm9yZGVyLXJhZGl1czogNTBweDsgYmFja2dyb3VuZC1jb2xvcjogIzAwN0FGRjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmNvbmZpcm0taWNvbiB7IGNvbG9yOiAjRkZGOyBmb250LXNpemU6IDQwcHg7IC8qIEFkanVzdGVkIGZyb20gNjBweCAqLyB9XG4gIC5zdGF0dXMtdGV4dCB7IGNvbG9yOiAjRkYzQjMwOyBmb250LXNpemU6IDI0cHg7IG1hcmdpbi10b3A6IDIwcHg7IH1cblxuICAvKiBTdHlsZXMgZm9yIFQ5IEtleWJvYXJkICovXG4gIC50OS1rZXlib2FyZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gIH1cbiAgLmtleWJvYXJkLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4OyAvKiBJbmNyZWFzZWQgc3BhY2luZyAqL1xuICB9XG4gIC5rZXkge1xuICAgIHdpZHRoOiA4MHB4OyAvKiBJbmNyZWFzZWQgZnJvbSAxMDBweCAqL1xuICAgIGhlaWdodDogODBweDsgLyogSW5jcmVhc2VkIGZyb20gNjBweCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzJjMmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBtYXJnaW46IC0yMHB4IDhweDsgLyogSW5jcmVhc2VkIHNwYWNpbmcgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5rZXktaWNvbiB7XG4gICAgd2lkdGg6IDQwcHg7IC8qIEluY3JlYXNlZCBmcm9tIDQwcHggKi9cbiAgICBoZWlnaHQ6IDQwcHg7IC8qIEluY3JlYXNlZCBmcm9tIDQwcHggKi9cbiAgfVxuXG4gIC8qIFN0eWxlcyBmb3IgaGVhZGVyIFwi5a6M5oiQXCIgYnV0dG9uIChyZW1vdmVkLCBub3cgYXQgYm90dG9tKSAqL1xuICAuaGVhZGVyLWJ1dHRvbi1yaWdodCB7XG4gICAgd2lkdGg6IDgwcHg7IC8qIFNhbWUgd2lkdGggYXMgYmFjayBidXR0b24gKi9cbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDsgLyogTWFrZSBpdCBjaXJjdWxhciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7IC8qIFNhbWUgY29sb3IgYXMgb3JpZ2luYWwgY29uZmlybSBidXR0b24gKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5oZWFkZXItYnV0dG9uLXRleHQge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMTBweDsgLyogQWRqdXN0ZWQgZnJvbSAyMHB4ICovXG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xuICBpbXBvcnQgZGV2aWNlIGZyb20gJ0BzeXN0ZW0uZGV2aWNlJztcbiAgaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQHN5c3RlbS5zdG9yYWdlJztcbiAgaW1wb3J0IEFwaVNlcnZpY2UgZnJvbSAnLi4vY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzJztcbiAgaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi4vY29tbW9uL2pzL2NvbmZpZy5qcyc7XG4gIGltcG9ydCBUOUtleWJvYXJkIGZyb20gJy4uL2NvbW1vbi9UOUtleWJvYXJkLnV4JzsgLy8gTm93IHVzaW5nIHRlbXBsYXRlLWxldmVsIGltcG9ydCwgYnV0IGtlZXBpbmcgSlMgaW1wb3J0IGZvciBjb21wb25lbnRzIG9iamVjdC5cblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czoge1xuICAgICAgJ3Q5LWtleWJvYXJkJzogVDlLZXlib2FyZCAvLyBSZWdpc3RlciB3aXRoIGtlYmFiLWNhc2UgbmFtZVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgdGltZTogJzAwOjAwJyxcbiAgICAgIGRldmljZUNvZGU6ICfmraPlnKjnlJ/miJAuLi4nLFxuICAgICAgYWN0aXZhdGlvbkNvZGU6ICcnLFxuICAgICAgc3RhdHVzTWVzc2FnZTogJydcbiAgICB9LFxuICAgIG9uSW5pdCgpIHtcbiAgICAgIHRoaXMudXBkYXRlVGltZSgpO1xuICAgICAgc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVUaW1lLCA2MDAwMCk7XG4gICAgICB0aGlzLmdlbmVyYXRlRGV2aWNlQ29kZSgpO1xuICAgIH0sXG4gICAgdXBkYXRlVGltZSgpIHtcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBob3VycyA9IG5vdy5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgIHRoaXMudGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICB9LFxuICAgIGdvQmFjaygpIHtcbiAgICAgIHJvdXRlci5iYWNrKCk7XG4gICAgfSxcbiAgICBoYW5kbGVLZXlDbGljayhlKSB7XG4gICAgICBjb25zdCBrZXkgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIGlmIChrZXkgPT09ICfijKsnKSB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvbkNvZGUgPSB0aGlzLmFjdGl2YXRpb25Db2RlLnNsaWNlKDAsIC0xKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAn4pyTJykge1xuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7IC8vIE5vIGtleWJvYXJkIHRvIGhpZGUsIGFjdGl2YXRlIGRpcmVjdGx5XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25Db2RlICs9IGtleTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGVLZXlDbGljayBmaXJlZC4ga2V5OicsIGtleSk7XG4gICAgICBjb25zb2xlLmxvZygnYWN0aXZhdGlvbkNvZGUgYWZ0ZXIgY2xpY2s6JywgdGhpcy5hY3RpdmF0aW9uQ29kZSk7XG4gICAgfSxcbiAgICBnZW5lcmF0ZURldmljZUNvZGUoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkZXZpY2UuZ2V0U2VyaWFsKHtcbiAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VyaWFsTnVtYmVyID0gZGF0YS5zZXJpYWw7XG4gICAgICAgICAgICBpZiAoIXNlcmlhbE51bWJlcikge1xuICAgICAgICAgICAgICB0aGlzLmRldmljZUNvZGUgPSBcIuiuvuWkh+W6j+WIl+WPt+aXoOaViFwiO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBwcm9jZXNzZWRTZXJpYWwgPSBzZXJpYWxOdW1iZXIuc3Vic3RyaW5nKDAsIDEzKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFNlcmlhbCA9IHByb2Nlc3NlZFNlcmlhbC5yZXBsYWNlKC9cXC8vZywgJycpOyAvLyBSZW1vdmUgYWxsICcvJ1xuXG4gICAgICAgICAgICBjb25zdCBsZXR0ZXJUb051bWJlck1hcCA9IHsgJ0EnOiAxLCAnQic6IDIsICdDJzogMywgJ0QnOiA0LCAnRSc6IDUgfTtcbiAgICAgICAgICAgIGxldCBudW1lcmljU2VyaWFsID0gJyc7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2Nlc3NlZFNlcmlhbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBsZXQgY2hhciA9IHByb2Nlc3NlZFNlcmlhbFtpXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICBpZiAoY2hhciA+PSAnRicgJiYgY2hhciA8PSAnWicpIHtcbiAgICAgICAgICAgICAgICBjaGFyID0gJ0UnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChsZXR0ZXJUb051bWJlck1hcFtjaGFyXSkge1xuICAgICAgICAgICAgICAgIG51bWVyaWNTZXJpYWwgKz0gbGV0dGVyVG9OdW1iZXJNYXBbY2hhcl07XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzTmFOKHBhcnNlSW50KGNoYXIsIDEwKSkpIHtcbiAgICAgICAgICAgICAgICBudW1lcmljU2VyaWFsICs9IGNoYXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG51bWVyaWNTZXJpYWwubGVuZ3RoIDwgMTIpIHtcbiAgICAgICAgICAgICAgbnVtZXJpY1NlcmlhbCA9IG51bWVyaWNTZXJpYWwucGFkRW5kKDEyLCAnMCcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChudW1lcmljU2VyaWFsLmxlbmd0aCA+IDEyKSB7XG4gICAgICAgICAgICAgIG51bWVyaWNTZXJpYWwgPSBudW1lcmljU2VyaWFsLnN1YnN0cmluZygwLCAxMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChudW1lcmljU2VyaWFsLmxlbmd0aCAhPT0gMTIgfHwgIS9eXFxkezEyfSQvLnRlc3QobnVtZXJpY1NlcmlhbCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRldmljZUNvZGUgPSBcIuW6j+WIl+WPt+WkhOeQhue7k+aenOmdnjEy5L2N5pWw5a2XXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwYWlycyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSArPSAyKSB7XG4gICAgICAgICAgICAgIHBhaXJzLnB1c2gobnVtZXJpY1NlcmlhbC5zdWJzdHJpbmcoaSwgaSArIDIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRQYWlycyA9IFtwYWlyc1swXSwgcGFpcnNbMl0sIHBhaXJzWzRdXTtcblxuICAgICAgICAgICAgY29uc3Qgc3VtQUIgPSBwYXJzZUludChzZWxlY3RlZFBhaXJzWzBdWzBdLCAxMCkgKyBwYXJzZUludChzZWxlY3RlZFBhaXJzWzBdWzFdLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBzdW1FRiA9IHBhcnNlSW50KHNlbGVjdGVkUGFpcnNbMV1bMF0sIDEwKSArIHBhcnNlSW50KHNlbGVjdGVkUGFpcnNbMV1bMV0sIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHN1bUlKID0gcGFyc2VJbnQoc2VsZWN0ZWRQYWlyc1syXVswXSwgMTApICsgcGFyc2VJbnQoc2VsZWN0ZWRQYWlyc1syXVsxXSwgMTApO1xuXG4gICAgICAgICAgICBjb25zdCBzdW1CRkogPSBwYXJzZUludChzZWxlY3RlZFBhaXJzWzBdWzFdLCAxMCkgKyBwYXJzZUludChzZWxlY3RlZFBhaXJzWzFdWzFdLCAxMCkgKyBwYXJzZUludChzZWxlY3RlZFBhaXJzWzJdWzFdLCAxMCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFN1bUFCID0gU3RyaW5nKHN1bUFCKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkU3VtRUYgPSBTdHJpbmcoc3VtRUYpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRTdW1JSiA9IFN0cmluZyhzdW1JSikucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFN1bUJGSiA9IFN0cmluZyhzdW1CRkopLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlQ29kZSA9IGAke2Zvcm1hdHRlZFN1bUFCfSR7Zm9ybWF0dGVkU3VtRUZ9JHtmb3JtYXR0ZWRTdW1JSn0ke2Zvcm1hdHRlZFN1bUJGSn0xYDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZW5lcmF0ZURldmljZUNvZGU6IEZpbmFsIGRldmljZUNvZGU6JywgdGhpcy5kZXZpY2VDb2RlKTsgLy8gQWRkIGxvZyBoZXJlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiAoZGF0YSwgY29kZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZXZpY2VDb2RlID0gYOiOt+WPluiuvuWkh+W6j+WIl+WPt+Wksei0pTogJHtjb2RlfSAtICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9YDtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2dlbmVyYXRlRGV2aWNlQ29kZTogRmFpbGVkIHRvIGdldCBzZXJpYWw6JywgZGF0YSwgY29kZSk7IC8vIEFkZCBsb2cgaGVyZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhpcy5kZXZpY2VDb2RlID0gYOiuvuWkh+eggeiuoeeul+mUmeivrzogJHtlcnIubWVzc2FnZX1gO1xuICAgICAgICBjb25zb2xlLmVycm9yKCdnZW5lcmF0ZURldmljZUNvZGU6IENhbGN1bGF0aW9uIGVycm9yOicsIGVycik7IC8vIEFkZCBsb2cgaGVyZVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgYWN0aXZhdGUoKSB7XG4gICAgICBpZiAoIXRoaXMuYWN0aXZhdGlvbkNvZGUpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gXCLor7fovpPlhaXmv4DmtLvnoIFcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYWN0aXZhdGlvbkNvZGUubGVuZ3RoICE9PSAxMSkge1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSBcIua/gOa0u+eggemVv+W6puS4jeato+ehru+8jOW6lOS4ujEx5L2NXCI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gU3RlcCAxOiBDb2RlIEV4dHJhY3Rpb24gYW5kIERldmljZSBDb2RlIENvbXBhcmlzb25cbiAgICAgIGNvbnN0IGFjID0gdGhpcy5hY3RpdmF0aW9uQ29kZTsgLy8gQWxpYXMgZm9yIGFjdGl2YXRpb25Db2RlIGZvciBicmV2aXR5XG4gICAgICBjb25zdCBfQSA9IGFjWzBdO1xuICAgICAgY29uc3QgX0IgPSBhY1sxXTtcbiAgICAgIGNvbnN0IF9DID0gYWNbMl07XG4gICAgICBjb25zdCBfRCA9IGFjWzNdO1xuICAgICAgY29uc3QgX0UgPSBhY1s0XTtcbiAgICAgIGNvbnN0IF9GID0gYWNbNV07XG4gICAgICBjb25zdCBfRyA9IGFjWzZdO1xuICAgICAgY29uc3QgX0ggPSBhY1s3XTtcbiAgICAgIGNvbnN0IF9JID0gYWNbOF07XG4gICAgICBjb25zdCBfSiA9IGFjWzldO1xuICAgICAgY29uc3QgX0sgPSBhY1sxMF07IC8vIEsgaXMgbm93IGFjdGl2ZWx5IHVzZWRcblxuICAgICAgY29uc3QgR192YWwgPSBwYXJzZUludChfRywgMTApO1xuICAgICAgY29uc3QgS192YWwgPSBwYXJzZUludChfSywgMTApO1xuICAgICAgXG4gICAgICBjb25zdCBISV9wYXJzZWQgPSBwYXJzZUludChgJHtfSH0ke19JfWAsIDEwKTtcbiAgICAgIGNvbnN0IEhJX21vZGlmaWVkX251bSA9IEhJX3BhcnNlZCAtIEdfdmFsIC0gS192YWw7XG5cbiAgICAgIGlmIChISV9tb2RpZmllZF9udW0gPCAwIHx8IEhJX21vZGlmaWVkX251bSA+IDk5KSB7XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IFwi5r+A5rS75aSx6LSlOiBISeWHj+azlee7k+aenOaXoOaViFwiO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBISV9tb2RpZmllZF9zdHIgPSBTdHJpbmcoSElfbW9kaWZpZWRfbnVtKS5wYWRTdGFydCgyLCAnMCcpO1xuXG4gICAgICBjb25zdCBBQl92YWwgPSBwYXJzZUludChgJHtfQX0ke19CfWAsIDEwKTtcbiAgICAgIGNvbnN0IENEX3ZhbCA9IHBhcnNlSW50KGAke19DfSR7X0R9YCwgMTApO1xuICAgICAgY29uc3QgRUZfdmFsID0gcGFyc2VJbnQoYCR7X0V9JHtfRn1gLCAxMCk7XG5cbiAgICAgIGxldCBBQl9kaXZpZGVkLCBDRF9kaXZpZGVkLCBFRl9kaXZpZGVkO1xuXG4gICAgICBpZiAoR192YWwgPT09IDApIHtcbiAgICAgICAgQUJfZGl2aWRlZCA9IEFCX3ZhbDtcbiAgICAgICAgQ0RfZGl2aWRlZCA9IENEX3ZhbDtcbiAgICAgICAgRUZfZGl2aWRlZCA9IEVGX3ZhbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEFCX2RpdmlkZWQgPSBNYXRoLmZsb29yKEFCX3ZhbCAvIEdfdmFsKTtcbiAgICAgICAgQ0RfZGl2aWRlZCA9IE1hdGguZmxvb3IoQ0RfdmFsIC8gR192YWwpO1xuICAgICAgICBFRl9kaXZpZGVkID0gTWF0aC5mbG9vcihFRl92YWwgLyBHX3ZhbCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IEFCX2Zvcm1hdHRlZCA9IFN0cmluZyhBQl9kaXZpZGVkKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgY29uc3QgQ0RfZm9ybWF0dGVkID0gU3RyaW5nKENEX2RpdmlkZWQpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICBjb25zdCBFRl9mb3JtYXR0ZWQgPSBTdHJpbmcoRUZfZGl2aWRlZCkucGFkU3RhcnQoMiwgJzAnKTtcblxuICAgICAgY29uc3QgZ3JvdXBBQkNERUZISUogPSBgJHtBQl9mb3JtYXR0ZWR9JHtDRF9mb3JtYXR0ZWR9JHtFRl9mb3JtYXR0ZWR9JHtISV9tb2RpZmllZF9zdHJ9JHtfSn1gO1xuXG4gICAgICBpZiAoZ3JvdXBBQkNERUZISUogIT09IHRoaXMuZGV2aWNlQ29kZSkge1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSBcIua/gOa0u+Wksei0pTog6K6+5aSH56CB5LiN5Yy56YWNXCI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIENvbXBhcmUgZ3JvdXBBQkNERUZISUogd2l0aCBkZXZpY2VDb2RlIChTdGVwIDEsIHBhcnQgNClcbiAgICAgIGlmIChncm91cEFCQ0RFRkhJSiAhPT0gdGhpcy5kZXZpY2VDb2RlKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IFwi5r+A5rS75aSx6LSlOiDorr7lpIfnoIHkuI3ljLnphY1cIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBTdGVwIDI6IFRpbWUtYmFzZWQgVmFsaWRhdGlvblxuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGxldCBjdXJyZW50TWludXRlcyA9IG5vdy5nZXRNaW51dGVzKCk7IC8vIFlaXG4gICAgICBcbiAgICAgIGlmIChjdXJyZW50TWludXRlcyA8PSA5KSB7XG4gICAgICAgIGN1cnJlbnRNaW51dGVzICs9IDYwO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBHSl92YWx1ZSA9IHBhcnNlSW50KGAke19HfSR7X0p9YCwgMTApO1xuXG4gICAgICBjb25zdCBkaWZmID0gY3VycmVudE1pbnV0ZXMgLSBHSl92YWx1ZTtcblxuICAgICAgaWYgKGRpZmYgPD0gMTAgJiYgZGlmZiA+PSAwKSB7IC8vIEFzc3VtaW5nIGRpZmYgc2hvdWxkIGFsc28gYmUgbm9uLW5lZ2F0aXZlIGZvciBhIHZhbGlkIGFjdGl2YXRpb24gd2luZG93XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IFwi5r+A5rS75oiQ5Yqf77yBXCI7XG4gICAgICAgIC8vIEFzc3VtaW5nIGEgZ2VuZXJpYyB1c2VySW5mbyBmb3IgbG9jYWwgYWN0aXZhdGlvbiBhcyB0aGVyZSdzIG5vIGJhY2tlbmRcbiAgICAgICAgc3RvcmFnZS5zZXQoeyBrZXk6ICdpc19hY3RpdmF0ZWQnLCB2YWx1ZTogJ3RydWUnIH0pO1xuICAgICAgICBzdG9yYWdlLnNldCh7IGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8sIHZhbHVlOiBKU09OLnN0cmluZ2lmeSh7IGRldmljZUNvZGU6IHRoaXMuZGV2aWNlQ29kZSwgYWN0aXZhdGlvbkNvZGU6IHRoaXMuYWN0aXZhdGlvbkNvZGUgfSkgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJvdXRlci5iYWNrKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gYOa/gOa0u+Wksei0pTog5pe26Ze05qCh6aqM5LiN6YCa6L+HICjlt67lgLw6ICR7ZGlmZn0pYDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PiJdLCJuYW1lcyI6WyIiLCJkYXRhIiwic2hvdyIsImtleXMiLCJvbktleUNsaWNrIiwia2V5IiwiJGVtaXQiLCJ2YWx1ZSIsIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIl9jb25maWciLCJyZXF1aXJlIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0Iiwib3duS2V5cyIsInIiLCJ0IiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiaSIsIl90b1ByaW1pdGl2ZSIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIkFwaVNlcnZpY2UiLCJjb25zdHJ1Y3RvciIsImJhc2VIZWFkZXJzIiwiQ09ORklHIiwiU1VQQUJBU0UiLCJLRVkiLCJyZXF1ZXN0IiwiZW5kcG9pbnQiLCJtZXRob2QiLCJ1cmwiLCJVUkwiLCJvcHRpb25zIiwiaGVhZGVyIiwicmVzcG9uc2VUeXBlIiwiSlNPTiIsInN0cmluZ2lmeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmV0Y2giLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJjb2RlIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJmYWlsIiwiZ2V0UmFua2luZ3MiLCJsaW1pdCIsInJlc3VsdCIsImFjdGlvbiIsInJhbmtpbmdzIiwibWVzc2FnZSIsInN5bmNDbGlja3MiLCJ1c2VySWQiLCJjbGlja0NvdW50IiwidXNlcl9pZCIsImNsaWNrX2NvdW50IiwiYWN0aXZhdGVEZXZpY2UiLCJkZXZpY2VJZCIsImFjdGl2YXRpb25Db2RlIiwiZGV2aWNlX2lkIiwiYWN0aXZhdGlvbl9jb2RlIiwic2V0UGV0TmFtZSIsIm5ld05hbWUiLCJuZXdfbmFtZSIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIkFQSV9VUkwiLCJBUFAiLCJOQU1FIiwiVkVSU0lPTiIsIk1BWF9DTElDS1NfUEVSX0JBVENIIiwiU1lOQ19JTlRFUlZBTCIsIlJBTktfTElNSVQiLCJTVE9SQUdFX0tFWVMiLCJERVZJQ0VfSUQiLCJVU0VSX0lORk8iLCJQRU5ESU5HX0NMSUNLUyIsIkxBU1RfU1lOQ19USU1FIiwiVE9UQUxfQ0xJQ0tTIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl9zeXN0ZW0yIiwiX3N5c3RlbTMiLCJfYXBpU2VydmljZSIsIl9UOUtleWJvYXJkIiwiY29tcG9uZW50cyIsIlQ5S2V5Ym9hcmQiLCJ0aW1lIiwiZGV2aWNlQ29kZSIsInN0YXR1c01lc3NhZ2UiLCJvbkluaXQiLCJ1cGRhdGVUaW1lIiwic2V0SW50ZXJ2YWwiLCJnZW5lcmF0ZURldmljZUNvZGUiLCJub3ciLCJEYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImdvQmFjayIsInJvdXRlciIsImJhY2siLCJoYW5kbGVLZXlDbGljayIsImRldGFpbCIsInNsaWNlIiwiYWN0aXZhdGUiLCJsb2ciLCJkZXZpY2UiLCJnZXRTZXJpYWwiLCJzZXJpYWxOdW1iZXIiLCJzZXJpYWwiLCJwcm9jZXNzZWRTZXJpYWwiLCJzdWJzdHJpbmciLCJyZXBsYWNlIiwibGV0dGVyVG9OdW1iZXJNYXAiLCJudW1lcmljU2VyaWFsIiwiY2hhciIsInRvVXBwZXJDYXNlIiwiaXNOYU4iLCJwYXJzZUludCIsInBhZEVuZCIsInRlc3QiLCJwYWlycyIsInNlbGVjdGVkUGFpcnMiLCJzdW1BQiIsInN1bUVGIiwic3VtSUoiLCJzdW1CRkoiLCJmb3JtYXR0ZWRTdW1BQiIsImZvcm1hdHRlZFN1bUVGIiwiZm9ybWF0dGVkU3VtSUoiLCJmb3JtYXR0ZWRTdW1CRkoiLCJlcnIiLCJhYyIsIl9BIiwiX0IiLCJfQyIsIl9EIiwiX0UiLCJfRiIsIl9HIiwiX0giLCJfSSIsIl9KIiwiX0siLCJHX3ZhbCIsIktfdmFsIiwiSElfcGFyc2VkIiwiSElfbW9kaWZpZWRfbnVtIiwiSElfbW9kaWZpZWRfc3RyIiwiQUJfdmFsIiwiQ0RfdmFsIiwiRUZfdmFsIiwiQUJfZGl2aWRlZCIsIkNEX2RpdmlkZWQiLCJFRl9kaXZpZGVkIiwiTWF0aCIsImZsb29yIiwiQUJfZm9ybWF0dGVkIiwiQ0RfZm9ybWF0dGVkIiwiRUZfZm9ybWF0dGVkIiwiZ3JvdXBBQkNERUZISUoiLCJjdXJyZW50TWludXRlcyIsIkdKX3ZhbHVlIiwiZGlmZiIsInN0b3JhZ2UiLCJzZXQiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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