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
                                    "container"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#000000"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "time"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "14px",
                                color: "#ffffff",
                                fontSize: "21px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "left-chest"
                                ]
                            ],
                            {
                                position: "absolute",
                                width: "105px",
                                height: "105px",
                                backgroundColor: "#daa520",
                                borderRadius: "10.5px",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                paddingTop: "7px",
                                paddingRight: "7px",
                                paddingBottom: "7px",
                                paddingLeft: "7px",
                                top: "70px",
                                left: "14px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "right-chest"
                                ]
                            ],
                            {
                                position: "absolute",
                                width: "105px",
                                height: "105px",
                                backgroundColor: "#daa520",
                                borderRadius: "10.5px",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                paddingTop: "7px",
                                paddingRight: "7px",
                                paddingBottom: "7px",
                                paddingLeft: "7px",
                                top: "70px",
                                right: "14px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "chest-progress"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "24px",
                                marginBottom: "5px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "chest-label"
                                ]
                            ],
                            {
                                fontSize: "28px",
                                color: "#000000",
                                marginBottom: "7px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "chest-cost"
                                ]
                            ],
                            {
                                color: "#000000",
                                fontSize: "16.8px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "chest-timer"
                                ]
                            ],
                            {
                                color: "#000000",
                                fontSize: "16.8px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "pet-container"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "210px",
                                height: "210px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "pet-image"
                                ]
                            ],
                            {
                                width: "210px",
                                height: "210px",
                                objectFit: "contain"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "pet-name"
                                ]
                            ],
                            {
                                color: "#888888",
                                fontSize: "28px",
                                marginTop: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "bottom-bar"
                                ]
                            ],
                            {
                                position: "absolute",
                                bottom: "21px",
                                width: "100%",
                                justifyContent: "space-around",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "more-button"
                                ]
                            ],
                            {
                                width: "56px",
                                height: "56px",
                                borderRadius: "28px",
                                backgroundColor: "#1a1a1a",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "more-button-text"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "35px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "click-counter"
                                ]
                            ],
                            {
                                width: "140px",
                                height: "56px",
                                borderRadius: "28px",
                                backgroundColor: "#1a1a1a",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "click-counter-text"
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
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.router"));
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                        var _apiService = _interopRequireDefault(__webpack_require__("./src/common/js/api-service.js"));
                        var _config = __webpack_require__("./src/common/js/config.js");
                        var _auth = __webpack_require__("./src/common/js/auth.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
                            data: {
                                time: '00:00',
                                petName: '(宠物名称)',
                                clickCount: 0,
                                pendingClicks: 0,
                                userId: null,
                                isActivated: false,
                                petImage: '/common/Ra0.png',
                                chests: [
                                    {
                                        claimed: false,
                                        refreshTimestamp: 0,
                                        timerDisplay: '花费: 1000'
                                    },
                                    {
                                        claimed: false,
                                        refreshTimestamp: 0,
                                        timerDisplay: '花费: 1000'
                                    }
                                ]
                            },
                            async onInit () {
                                this.updateTime();
                                this.loadClicks();
                                this.loadChestStates();
                                const { isActivated, userInfo } = await _auth.auth.getActivationState();
                                this.isActivated = isActivated;
                                if (isActivated && userInfo) {
                                    this.userId = userInfo.id;
                                    this.petName = userInfo.pet_name || '(无名)';
                                    this.clickCount = userInfo.click_count || this.clickCount;
                                    setInterval(this.syncClicks.bind(this), _config.CONFIG.APP.SYNC_INTERVAL);
                                    this.syncClicks();
                                }
                                setInterval(this.updateTime, 60000);
                                setInterval(this.updateChestTimers.bind(this), 1000);
                            },
                            loadClicks () {
                                _system2.default.get({
                                    key: _config.CONFIG.STORAGE_KEYS.PENDING_CLICKS,
                                    success: (data)=>{
                                        this.pendingClicks = parseInt(data) || 0;
                                    }
                                });
                                _system2.default.get({
                                    key: _config.CONFIG.STORAGE_KEYS.TOTAL_CLICKS,
                                    success: (data)=>{
                                        if (!this.isActivated) this.clickCount = parseInt(data) || 0;
                                    }
                                });
                            },
                            loadChestStates () {
                                _system2.default.get({
                                    key: 'chestStates',
                                    success: (data)=>{
                                        if (data) {
                                            const loadedChests = JSON.parse(data);
                                            this.chests = loadedChests.map((chest)=>{
                                                if (chest.refreshTimestamp > 0 && chest.claimed) {
                                                    const remainingTime = Math.max(0, chest.refreshTimestamp - Date.now());
                                                    if (remainingTime <= 0) {
                                                        chest.claimed = false;
                                                        chest.refreshTimestamp = 0;
                                                    }
                                                }
                                                return chest;
                                            });
                                        }
                                    }
                                });
                            },
                            saveChestStates () {
                                _system2.default.set({
                                    key: 'chestStates',
                                    value: JSON.stringify(this.chests)
                                });
                            },
                            updateTime () {
                                const now = new Date();
                                const hours = now.getHours().toString().padStart(2, '0');
                                const minutes = now.getMinutes().toString().padStart(2, '0');
                                this.time = `${hours}:${minutes}`;
                            },
                            updateChestTimers () {
                                this.chests.forEach((chest, index)=>{
                                    if (chest.claimed && chest.refreshTimestamp > 0) {
                                        const remainingTime = Math.max(0, chest.refreshTimestamp - Date.now());
                                        this.chests[index].timerDisplay = this.formatTime(remainingTime / 1000);
                                        if (remainingTime <= 0) {
                                            this.chests[index].claimed = false;
                                            this.chests[index].refreshTimestamp = 0;
                                            this.saveChestStates();
                                        }
                                    }
                                });
                            },
                            formatTime (seconds) {
                                const minutes = Math.floor(seconds / 60);
                                const remainingSeconds = Math.floor(seconds % 60);
                                return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
                            },
                            incrementClick () {
                                this.clickCount++;
                                this.pendingClicks++;
                                _system2.default.set({
                                    key: _config.CONFIG.STORAGE_KEYS.PENDING_CLICKS,
                                    value: this.pendingClicks.toString()
                                });
                                _system2.default.set({
                                    key: _config.CONFIG.STORAGE_KEYS.TOTAL_CLICKS,
                                    value: this.clickCount.toString()
                                });
                                const randomImage = Math.random() < 0.5 ? '/common/Ra1.png' : '/common/Ra2.png';
                                this.petImage = randomImage;
                                setTimeout(()=>{
                                    this.petImage = '/common/Ra0.png';
                                }, 200);
                            },
                            claimChest (index) {
                                const chest = this.chests[index];
                                if (chest.claimed) return void console.log('Chest is on cooldown.');
                                if (this.clickCount >= 1000) {
                                    this.clickCount -= 1000;
                                    const reward = Math.floor(500 * Math.random()) + 100;
                                    this.clickCount += reward;
                                    _system2.default.set({
                                        key: _config.CONFIG.STORAGE_KEYS.TOTAL_CLICKS,
                                        value: this.clickCount.toString()
                                    });
                                    console.log(`Chest ${index} claimed! Rewarded ${reward} clicks.`);
                                    this.chests[index].claimed = true;
                                    this.chests[index].refreshTimestamp = Date.now() + 1800000;
                                    this.saveChestStates();
                                } else console.log('Not enough clicks to open chest.');
                            },
                            async syncClicks () {
                                if (!this.isActivated || !this.userId || 0 === this.pendingClicks) return;
                                const result = await _apiService.default.syncClicks(this.userId, this.pendingClicks);
                                if (result.success) {
                                    this.pendingClicks = 0;
                                    _system2.default.set({
                                        key: _config.CONFIG.STORAGE_KEYS.PENDING_CLICKS,
                                        value: '0'
                                    });
                                }
                            },
                            openMore () {
                                _system.default.push({
                                    uri: 'more'
                                });
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
                                    "container"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "time"
                                    ],
                                    value: function() {
                                        return _vm_.time;
                                    }
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "left-chest"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.claimChest(0, evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "chest-label"
                                        ],
                                        value: "宝箱"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        show: function() {
                                            return !_vm_.chests[0].claimed;
                                        },
                                        classList: [
                                            "chest-cost"
                                        ],
                                        value: "花费: 1000"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        show: function() {
                                            return _vm_.chests[0].claimed;
                                        },
                                        classList: [
                                            "chest-timer"
                                        ],
                                        value: function() {
                                            return _vm_.chests[0].timerDisplay;
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "right-chest"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.claimChest(1, evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "chest-label"
                                        ],
                                        value: "宝箱"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        show: function() {
                                            return !_vm_.chests[1].claimed;
                                        },
                                        classList: [
                                            "chest-cost"
                                        ],
                                        value: "花费: 1000"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        show: function() {
                                            return _vm_.chests[1].claimed;
                                        },
                                        classList: [
                                            "chest-timer"
                                        ],
                                        value: function() {
                                            return _vm_.chests[1].timerDisplay;
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "pet-container"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.incrementClick(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "pet-image"
                                        ],
                                        src: function() {
                                            return _vm_.petImage;
                                        }
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "pet-name"
                                        ],
                                        value: function() {
                                            return _vm_.petName;
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "bottom-bar"
                                    ]
                                }
                            }, [
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        src: "/common/more.png",
                                        classList: [
                                            "more-button"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.openMore(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "click-counter"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "click-counter-text"
                                            ],
                                            value: function() {
                                                return _vm_.clickCount;
                                            }
                                        }
                                    }, [])
                                ])
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpblxcaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvYXBpLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2F1dGguanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL0JhbmRQZXQvc3JjL21haW4vaW5kZXgudXgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBpLXNlcnZpY2UuanNcbmltcG9ydCBmZXRjaCBmcm9tICdAc3lzdGVtLmZldGNoJ1xuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25maWcuanMnXG5cbmNsYXNzIEFwaVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJhc2VIZWFkZXJzID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgQ09ORklHLlNVUEFCQVNFLktFWSxcbiAgICAgICdhcGlrZXknOiBDT05GSUcuU1VQQUJBU0UuS0VZXG4gICAgfVxuICB9XG5cbiAgLy8g6YCa55So6K+35rGC5pa55rOVXG4gIGFzeW5jIHJlcXVlc3QoZW5kcG9pbnQsIG1ldGhvZCA9ICdQT1NUJywgZGF0YSA9IG51bGwpIHtcbiAgICBjb25zdCB1cmwgPSBgJHtDT05GSUcuU1VQQUJBU0UuVVJMfS9mdW5jdGlvbnMvdjEvJHtlbmRwb2ludH1gXG4gICAgXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZCxcbiAgICAgIGhlYWRlcjogdGhpcy5iYXNlSGVhZGVycyxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXG4gICAgfVxuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIG9wdGlvbnMuZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZldGNoLmZldGNoKHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUgPj0gMjAwICYmIHJlc3BvbnNlLmNvZGUgPCAzMDApIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgSFRUUCBFcnJvcjogJHtyZXNwb25zZS5jb2RlfWAsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYEhUVFAgJHtyZXNwb25zZS5jb2RlfTogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKX1gKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IChlcnJvciwgY29kZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFJlcXVlc3QgRmFpbGVkOiAke2NvZGV9YCwgZXJyb3IpO1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkOiAke2Vycm9yLmRhdGF9YCkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8vIOiOt+WPluaOkuihjOamnFxuICBhc3luYyBnZXRSYW5raW5ncyhsaW1pdCA9IDEwKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdnZXRfcmFua2luZ3MnLFxuICAgICAgICBsaW1pdDogbGltaXRcbiAgICAgIH0pXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICByYW5raW5nczogcmVzdWx0LnJhbmtpbmdzIHx8IFtdXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaOkuihjOamnOWksei0pTonLCBlcnJvcilcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICByYW5raW5nczogW10sXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8g5LiK5oql54K55Ye75qyh5pWwXG4gIGFzeW5jIHN5bmNDbGlja3ModXNlcklkLCBjbGlja0NvdW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdzeW5jX2NsaWNrcycsXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcbiAgICAgICAgY2xpY2tfY291bnQ6IGNsaWNrQ291bnRcbiAgICAgIH0pXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5LiK5oql54K55Ye75qyh5pWw5aSx6LSlOicsIGVycm9yKVxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH1cbiAgICB9XG4gIH1cbiAgXG4gIC8vIOa/gOa0u1xuICBhc3luYyBhY3RpdmF0ZURldmljZShkZXZpY2VJZCwgYWN0aXZhdGlvbkNvZGUpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdicmlnaHQtcmVzcG9uZGVyJywgJ1BPU1QnLCB7XG4gICAgICAgIGFjdGlvbjogJ2FjdGl2YXRlJyxcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZCxcbiAgICAgICAgYWN0aXZhdGlvbl9jb2RlOiBhY3RpdmF0aW9uQ29kZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfmv4DmtLvlpLHotKU6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICB9XG5cbiAgLy8g5L+u5pS55a6g54mp5ZCNXG4gIGFzeW5jIHNldFBldE5hbWUodXNlcklkLCBuZXdOYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdzZXRfcGV0X25hbWUnLFxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgICAgIG5ld19uYW1lOiBuZXdOYW1lXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S/ruaUueWuoOeJqeWQjeWksei0pTonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwaVNlcnZpY2UoKVxuIiwiLy8gQmFuZFBldC9zcmMvY29tbW9uL2pzL2F1dGguanNcbmltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XG5pbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vY29uZmlnLmpzJztcblxuZXhwb3J0IGNvbnN0IGF1dGggPSB7XG4gIC8qKlxuICAgKiBHZXRzIHRoZSB1c2VyJ3MgYWN0aXZhdGlvbiBzdGF0ZSBmcm9tIHN0b3JhZ2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHtpc0FjdGl2YXRlZDogYm9vbGVhbiwgdXNlckluZm86IGFueX0+fVxuICAgKi9cbiAgYXN5bmMgZ2V0QWN0aXZhdGlvblN0YXRlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc3RvcmFnZS5nZXQoe1xuICAgICAgICBrZXk6ICdpc19hY3RpdmF0ZWQnLFxuICAgICAgICBzdWNjZXNzOiAoaXNBY3RpdmF0ZWREYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGlzQWN0aXZhdGVkRGF0YSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICBzdG9yYWdlLmdldCh7XG4gICAgICAgICAgICAgIGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8sXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6ICh1c2VySW5mb0RhdGEpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgIGlzQWN0aXZhdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgdXNlckluZm86IHVzZXJJbmZvRGF0YSA/IEpTT04ucGFyc2UodXNlckluZm9EYXRhKSA6IG51bGxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZmFpbDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEFjdGl2YXRlZCBidXQgY291bGRuJ3QgZ2V0IHVzZXIgaW5mb1xuICAgICAgICAgICAgICAgIHJlc29sdmUoeyBpc0FjdGl2YXRlZDogZmFsc2UsIHVzZXJJbmZvOiBudWxsIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTm90IGFjdGl2YXRlZFxuICAgICAgICAgICAgcmVzb2x2ZSh7IGlzQWN0aXZhdGVkOiBmYWxzZSwgdXNlckluZm86IG51bGwgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAoKSA9PiB7XG4gICAgICAgICAgLy8gRmFpbGVkIHRvIGdldCBhY3RpdmF0aW9uIHN0YXR1c1xuICAgICAgICAgIHJlc29sdmUoeyBpc0FjdGl2YXRlZDogZmFsc2UsIHVzZXJJbmZvOiBudWxsIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbiIsIi8vIGNvbmZpZy5qc1xuZXhwb3J0IGNvbnN0IENPTkZJRyA9IHtcbiAgLy8gU3VwYWJhc2XphY3nva5cbiAgU1VQQUJBU0U6IHtcbiAgICBVUkw6ICdodHRwczovL2pxdWJ5cW5oZ3l4YXpwbnBqeXFmLnN1cGFiYXNlLmNvJyxcbiAgICBLRVk6ICdzYl9wdWJsaXNoYWJsZV9fVU1ZR3YxVkRvLVpyT3Z1VWdaTEZnX1dLcXljN00tJywgLy8g6K+35pu/5o2i5Li65L2g55qEU3VwYWJhc2XljL/lkI3lr4bpkqVcbiAgICBBUElfVVJMOiAnaHR0cHM6Ly9qcXVieXFuaGd5eGF6cG5wanlxZi5zdXBhYmFzZS5jby9mdW5jdGlvbnMvdjEvYnJpZ2h0LXJlc3BvbmRlcidcbiAgfSxcbiAgXG4gIC8vIOW6lOeUqOmFjee9rlxuICBBUFA6IHtcbiAgICBOQU1FOiAnQmFuZFBldCcsXG4gICAgVkVSU0lPTjogJzEuMC4wJyxcbiAgICBNQVhfQ0xJQ0tTX1BFUl9CQVRDSDogNTAsIC8vIOaJuemHj+S4iuS8oOacgOWkp+eCueWHu+aVsFxuICAgIFNZTkNfSU5URVJWQUw6IDMwMDAwMCwgLy8gNeWIhumSn+WQjOatpeS4gOasoVxuICAgIFJBTktfTElNSVQ6IDEwIC8vIOaOkuihjOamnOaYvuekuuaVsOmHj1xuICB9LFxuICBcbiAgLy8g5a2Y5YKo6ZSu5ZCNXG4gIFNUT1JBR0VfS0VZUzoge1xuICAgIERFVklDRV9JRDogJ2RldmljZV9pZCcsXG4gICAgVVNFUl9JTkZPOiAndXNlcl9pbmZvJyxcbiAgICBQRU5ESU5HX0NMSUNLUzogJ3BlbmRpbmdfY2xpY2tzJyxcbiAgICBMQVNUX1NZTkNfVElNRTogJ2xhc3Rfc3luY190aW1lJyxcbiAgICBUT1RBTF9DTElDS1M6ICd0b3RhbF9jbGlja3MnXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjYuOFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS42LjhcIjsiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8dGV4dCBjbGFzcz1cInRpbWVcIj57eyB0aW1lIH19PC90ZXh0PlxuICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNoZXN0XCIgb25jbGljaz1cImNsYWltQ2hlc3QoMClcIj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwiY2hlc3QtbGFiZWxcIj7lrp3nrrE8L3RleHQ+XG4gICAgICA8dGV4dCBzaG93PVwie3shY2hlc3RzWzBdLmNsYWltZWR9fVwiIGNsYXNzPVwiY2hlc3QtY29zdFwiPuiKsei0uTogMTAwMDwvdGV4dD5cbiAgICAgIDx0ZXh0IHNob3c9XCJ7e2NoZXN0c1swXS5jbGFpbWVkfX1cIiBjbGFzcz1cImNoZXN0LXRpbWVyXCI+e3sgY2hlc3RzWzBdLnRpbWVyRGlzcGxheSB9fTwvdGV4dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY2hlc3RcIiBvbmNsaWNrPVwiY2xhaW1DaGVzdCgxKVwiPlxuICAgICAgPHRleHQgY2xhc3M9XCJjaGVzdC1sYWJlbFwiPuWuneeusTwvdGV4dD5cbiAgICAgIDx0ZXh0IHNob3c9XCJ7eyFjaGVzdHNbMV0uY2xhaW1lZH19XCIgY2xhc3M9XCJjaGVzdC1jb3N0XCI+6Iqx6LS5OiAxMDAwPC90ZXh0PlxuICAgICAgPHRleHQgc2hvdz1cInt7Y2hlc3RzWzFdLmNsYWltZWR9fVwiIGNsYXNzPVwiY2hlc3QtdGltZXJcIj57eyBjaGVzdHNbMV0udGltZXJEaXNwbGF5IH19PC90ZXh0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwZXQtY29udGFpbmVyXCIgb25jbGljaz1cImluY3JlbWVudENsaWNrXCI+XG4gICAgICA8aW1hZ2UgY2xhc3M9XCJwZXQtaW1hZ2VcIiBzcmM9XCJ7eyBwZXRJbWFnZSB9fVwiPjwvaW1hZ2U+XG4gICAgICA8dGV4dCBjbGFzcz1cInBldC1uYW1lXCI+e3sgcGV0TmFtZSB9fTwvdGV4dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYm90dG9tLWJhclwiPlxuPGltYWdlIHNyYz1cIi4uL2NvbW1vbi9tb3JlLnBuZ1wiIGNsYXNzPVwibW9yZS1idXR0b25cIiBvbmNsaWNrPVwib3Blbk1vcmVcIj48L2ltYWdlPlxuICAgICAgPGRpdiBjbGFzcz1cImNsaWNrLWNvdW50ZXJcIj5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJjbGljay1jb3VudGVyLXRleHRcIj57eyBjbGlja0NvdW50IH19PC90ZXh0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAuY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgfVxuICAudGltZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTRweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gIH1cbiAgLmxlZnQtY2hlc3QsIC5yaWdodC1jaGVzdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDVweDtcbiAgICBoZWlnaHQ6IDEwNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQUE1MjA7IC8qIEdvbGRlblJvZCAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDEwLjVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogN3B4O1xuICB9XG4gIC5sZWZ0LWNoZXN0IHtcbiAgICB0b3A6IDcwcHg7XG4gICAgbGVmdDogMTRweDtcbiAgfVxuICAucmlnaHQtY2hlc3Qge1xuICAgIHRvcDogNzBweDtcbiAgICByaWdodDogMTRweDtcbiAgfVxuICAuY2hlc3QtcHJvZ3Jlc3Mge1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgLmNoZXN0LWxhYmVsIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICB9XG4gIC5jaGVzdC1jb3N0IHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDE2LjhweDtcbiAgfVxuICAuY2hlc3QtdGltZXIge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMTYuOHB4O1xuICB9XG4gIC5wZXQtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDIxMHB4O1xuICAgIGhlaWdodDogMjEwcHg7XG4gIH1cbiAgLnBldC1pbWFnZSB7XG4gICAgd2lkdGg6IDIxMHB4OyAvKiAxNDAgKiAxLjUgKi9cbiAgICBoZWlnaHQ6IDIxMHB4OyAvKiAxNDAgKiAxLjUgKi9cbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG4gIC5wZXQtbmFtZSB7XG4gICAgY29sb3I6ICM4ODg4ODg7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7IC8qIEluY3JlYXNlZCBmcm9tIDEwcHggdG8gMjBweCAqL1xuICB9XG4gIC5ib3R0b20tYmFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAyMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLm1vcmUtYnV0dG9uIHtcbiAgICB3aWR0aDogNTZweDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLm1vcmUtYnV0dG9uLXRleHQge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgfVxuICAuY2xpY2stY291bnRlciB7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuY2xpY2stY291bnRlci10ZXh0IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xuICBpbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xuICBpbXBvcnQgQXBpU2VydmljZSBmcm9tICcuLi9jb21tb24vanMvYXBpLXNlcnZpY2UuanMnO1xuICBpbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuLi9jb21tb24vanMvY29uZmlnLmpzJztcbiAgaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uL2NvbW1vbi9qcy9hdXRoLmpzJztcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YToge1xuICAgICAgdGltZTogJzAwOjAwJyxcbiAgICAgIHBldE5hbWU6ICco5a6g54mp5ZCN56ewKScsXG4gICAgICBjbGlja0NvdW50OiAwLFxuICAgICAgcGVuZGluZ0NsaWNrczogMCxcbiAgICAgIHVzZXJJZDogbnVsbCxcbiAgICAgIGlzQWN0aXZhdGVkOiBmYWxzZSxcbiAgICAgIHBldEltYWdlOiAnL2NvbW1vbi9SYTAucG5nJywgLy8gQWRkIHRoaXMgbGluZVxuICAgICAgY2hlc3RzOiBbXG4gICAgICAgIHsgY2xhaW1lZDogZmFsc2UsIHJlZnJlc2hUaW1lc3RhbXA6IDAsIHRpbWVyRGlzcGxheTogJ+iKsei0uTogMTAwMCcgfSxcbiAgICAgICAgeyBjbGFpbWVkOiBmYWxzZSwgcmVmcmVzaFRpbWVzdGFtcDogMCwgdGltZXJEaXNwbGF5OiAn6Iqx6LS5OiAxMDAwJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICBhc3luYyBvbkluaXQoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICAgIHRoaXMubG9hZENsaWNrcygpO1xuICAgICAgdGhpcy5sb2FkQ2hlc3RTdGF0ZXMoKTtcbiAgICAgIFxuICAgICAgY29uc3QgeyBpc0FjdGl2YXRlZCwgdXNlckluZm8gfSA9IGF3YWl0IGF1dGguZ2V0QWN0aXZhdGlvblN0YXRlKCk7XG4gICAgICB0aGlzLmlzQWN0aXZhdGVkID0gaXNBY3RpdmF0ZWQ7XG4gICAgICBcbiAgICAgIGlmIChpc0FjdGl2YXRlZCAmJiB1c2VySW5mbykge1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJbmZvLmlkO1xuICAgICAgICB0aGlzLnBldE5hbWUgPSB1c2VySW5mby5wZXRfbmFtZSB8fCAnKOaXoOWQjSknO1xuICAgICAgICB0aGlzLmNsaWNrQ291bnQgPSB1c2VySW5mby5jbGlja19jb3VudCB8fCB0aGlzLmNsaWNrQ291bnQ7XG4gICAgICAgIFxuICAgICAgICBzZXRJbnRlcnZhbCh0aGlzLnN5bmNDbGlja3MuYmluZCh0aGlzKSwgQ09ORklHLkFQUC5TWU5DX0lOVEVSVkFMKTtcbiAgICAgICAgdGhpcy5zeW5jQ2xpY2tzKCk7XG4gICAgICB9XG5cbiAgICAgIHNldEludGVydmFsKHRoaXMudXBkYXRlVGltZSwgMTAwMCAqIDYwKTtcbiAgICAgIHNldEludGVydmFsKHRoaXMudXBkYXRlQ2hlc3RUaW1lcnMuYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgfSxcbiAgICBsb2FkQ2xpY2tzKCkge1xuICAgICAgc3RvcmFnZS5nZXQoe1xuICAgICAgICBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuUEVORElOR19DTElDS1MsXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7IHRoaXMucGVuZGluZ0NsaWNrcyA9IHBhcnNlSW50KGRhdGEpIHx8IDA7IH1cbiAgICAgIH0pO1xuICAgICAgc3RvcmFnZS5nZXQoe1xuICAgICAgICBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuVE9UQUxfQ0xJQ0tTLFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5pc0FjdGl2YXRlZCkge1xuICAgICAgICAgICAgIHRoaXMuY2xpY2tDb3VudCA9IHBhcnNlSW50KGRhdGEpIHx8IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGxvYWRDaGVzdFN0YXRlcygpIHtcbiAgICAgIHN0b3JhZ2UuZ2V0KHtcbiAgICAgICAga2V5OiAnY2hlc3RTdGF0ZXMnLFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBsb2FkZWRDaGVzdHMgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5jaGVzdHMgPSBsb2FkZWRDaGVzdHMubWFwKGNoZXN0ID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNoZXN0LnJlZnJlc2hUaW1lc3RhbXAgPiAwICYmIGNoZXN0LmNsYWltZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZW1haW5pbmdUaW1lID0gTWF0aC5tYXgoMCwgY2hlc3QucmVmcmVzaFRpbWVzdGFtcCAtIERhdGUubm93KCkpO1xuICAgICAgICAgICAgICAgIGlmIChyZW1haW5pbmdUaW1lIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgIGNoZXN0LmNsYWltZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIGNoZXN0LnJlZnJlc2hUaW1lc3RhbXAgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gY2hlc3Q7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2F2ZUNoZXN0U3RhdGVzKCkge1xuICAgICAgc3RvcmFnZS5zZXQoeyBrZXk6ICdjaGVzdFN0YXRlcycsIHZhbHVlOiBKU09OLnN0cmluZ2lmeSh0aGlzLmNoZXN0cykgfSk7XG4gICAgfSxcbiAgICB1cGRhdGVUaW1lKCkge1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgY29uc3QgbWludXRlcyA9IG5vdy5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgdGhpcy50aW1lID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xuICAgIH0sXG4gICAgdXBkYXRlQ2hlc3RUaW1lcnMoKSB7XG4gICAgICB0aGlzLmNoZXN0cy5mb3JFYWNoKChjaGVzdCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGNoZXN0LmNsYWltZWQgJiYgY2hlc3QucmVmcmVzaFRpbWVzdGFtcCA+IDApIHtcbiAgICAgICAgICBjb25zdCByZW1haW5pbmdUaW1lID0gTWF0aC5tYXgoMCwgY2hlc3QucmVmcmVzaFRpbWVzdGFtcCAtIERhdGUubm93KCkpO1xuICAgICAgICAgIHRoaXMuY2hlc3RzW2luZGV4XS50aW1lckRpc3BsYXkgPSB0aGlzLmZvcm1hdFRpbWUocmVtYWluaW5nVGltZSAvIDEwMDApO1xuICAgICAgICAgIGlmIChyZW1haW5pbmdUaW1lIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2hlc3RzW2luZGV4XS5jbGFpbWVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNoZXN0c1tpbmRleF0ucmVmcmVzaFRpbWVzdGFtcCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNhdmVDaGVzdFN0YXRlcygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBmb3JtYXRUaW1lKHNlY29uZHMpIHtcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgICBjb25zdCByZW1haW5pbmdTZWNvbmRzID0gTWF0aC5mbG9vcihzZWNvbmRzICUgNjApO1xuICAgICAgcmV0dXJuIGAke21pbnV0ZXMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfToke3JlbWFpbmluZ1NlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfWA7XG4gICAgfSxcbiAgICBpbmNyZW1lbnRDbGljaygpIHtcbiAgICAgIHRoaXMuY2xpY2tDb3VudCsrO1xuICAgICAgdGhpcy5wZW5kaW5nQ2xpY2tzKys7XG4gICAgICBzdG9yYWdlLnNldCh7IGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5QRU5ESU5HX0NMSUNLUywgdmFsdWU6IHRoaXMucGVuZGluZ0NsaWNrcy50b1N0cmluZygpIH0pO1xuICAgICAgc3RvcmFnZS5zZXQoeyBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuVE9UQUxfQ0xJQ0tTLCB2YWx1ZTogdGhpcy5jbGlja0NvdW50LnRvU3RyaW5nKCkgfSk7XG5cbiAgICAgIC8vIFJhbmRvbWx5IHN3aXRjaCBwZXQgaW1hZ2UgdG8gUmExIG9yIFJhMlxuICAgICAgY29uc3QgcmFuZG9tSW1hZ2UgPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gJy9jb21tb24vUmExLnBuZycgOiAnL2NvbW1vbi9SYTIucG5nJztcbiAgICAgIHRoaXMucGV0SW1hZ2UgPSByYW5kb21JbWFnZTtcblxuICAgICAgLy8gUmVzZXQgdG8gUmEwIGFmdGVyIGEgc2hvcnQgZGVsYXlcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnBldEltYWdlID0gJy9jb21tb24vUmEwLnBuZyc7XG4gICAgICB9LCAyMDApO1xuICAgIH0sXG4gICAgY2xhaW1DaGVzdChpbmRleCkge1xuICAgICAgY29uc3QgY2hlc3QgPSB0aGlzLmNoZXN0c1tpbmRleF07XG4gICAgICBpZiAoY2hlc3QuY2xhaW1lZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnQ2hlc3QgaXMgb24gY29vbGRvd24uJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNsaWNrQ291bnQgPj0gMTAwMCkge1xuICAgICAgICB0aGlzLmNsaWNrQ291bnQgLT0gMTAwMDtcbiAgICAgICAgY29uc3QgcmV3YXJkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTAwKSArIDEwMDtcbiAgICAgICAgdGhpcy5jbGlja0NvdW50ICs9IHJld2FyZDtcbiAgICAgICAgc3RvcmFnZS5zZXQoeyBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuVE9UQUxfQ0xJQ0tTLCB2YWx1ZTogdGhpcy5jbGlja0NvdW50LnRvU3RyaW5nKCkgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDaGVzdCAke2luZGV4fSBjbGFpbWVkISBSZXdhcmRlZCAke3Jld2FyZH0gY2xpY2tzLmApO1xuICAgICAgICB0aGlzLmNoZXN0c1tpbmRleF0uY2xhaW1lZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY2hlc3RzW2luZGV4XS5yZWZyZXNoVGltZXN0YW1wID0gRGF0ZS5ub3coKSArICgzMCAqIDYwICogMTAwMCk7XG4gICAgICAgIHRoaXMuc2F2ZUNoZXN0U3RhdGVzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnTm90IGVub3VnaCBjbGlja3MgdG8gb3BlbiBjaGVzdC4nKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIHN5bmNDbGlja3MoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNBY3RpdmF0ZWQgfHwgIXRoaXMudXNlcklkIHx8IHRoaXMucGVuZGluZ0NsaWNrcyA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLnN5bmNDbGlja3ModGhpcy51c2VySWQsIHRoaXMucGVuZGluZ0NsaWNrcyk7XG4gICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nQ2xpY2tzID0gMDtcbiAgICAgICAgc3RvcmFnZS5zZXQoeyBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuUEVORElOR19DTElDS1MsIHZhbHVlOiAnMCcgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvcGVuTW9yZSgpIHtcbiAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgdXJpOiAnbW9yZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX2NvbmZpZyIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJvd25LZXlzIiwiciIsInQiLCJPYmplY3QiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsInZhbHVlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiQXBpU2VydmljZSIsImNvbnN0cnVjdG9yIiwiYmFzZUhlYWRlcnMiLCJDT05GSUciLCJTVVBBQkFTRSIsIktFWSIsInJlcXVlc3QiLCJlbmRwb2ludCIsIm1ldGhvZCIsImRhdGEiLCJ1cmwiLCJVUkwiLCJvcHRpb25zIiwiaGVhZGVyIiwicmVzcG9uc2VUeXBlIiwiSlNPTiIsInN0cmluZ2lmeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmV0Y2giLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJjb2RlIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJmYWlsIiwiZ2V0UmFua2luZ3MiLCJsaW1pdCIsInJlc3VsdCIsImFjdGlvbiIsInJhbmtpbmdzIiwibWVzc2FnZSIsInN5bmNDbGlja3MiLCJ1c2VySWQiLCJjbGlja0NvdW50IiwidXNlcl9pZCIsImNsaWNrX2NvdW50IiwiYWN0aXZhdGVEZXZpY2UiLCJkZXZpY2VJZCIsImFjdGl2YXRpb25Db2RlIiwiZGV2aWNlX2lkIiwiYWN0aXZhdGlvbl9jb2RlIiwic2V0UGV0TmFtZSIsIm5ld05hbWUiLCJuZXdfbmFtZSIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIl9zeXN0ZW0yIiwiYXV0aCIsImdldEFjdGl2YXRpb25TdGF0ZSIsImdldCIsImtleSIsImlzQWN0aXZhdGVkRGF0YSIsIlNUT1JBR0VfS0VZUyIsIlVTRVJfSU5GTyIsInVzZXJJbmZvRGF0YSIsImlzQWN0aXZhdGVkIiwidXNlckluZm8iLCJwYXJzZSIsIkFQSV9VUkwiLCJBUFAiLCJOQU1FIiwiVkVSU0lPTiIsIk1BWF9DTElDS1NfUEVSX0JBVENIIiwiU1lOQ19JTlRFUlZBTCIsIlJBTktfTElNSVQiLCJERVZJQ0VfSUQiLCJQRU5ESU5HX0NMSUNLUyIsIkxBU1RfU1lOQ19USU1FIiwiVE9UQUxfQ0xJQ0tTIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl9hcGlTZXJ2aWNlIiwiX2F1dGgiLCJ0aW1lIiwicGV0TmFtZSIsInBlbmRpbmdDbGlja3MiLCJwZXRJbWFnZSIsImNoZXN0cyIsImNsYWltZWQiLCJyZWZyZXNoVGltZXN0YW1wIiwidGltZXJEaXNwbGF5Iiwib25Jbml0IiwidXBkYXRlVGltZSIsImxvYWRDbGlja3MiLCJsb2FkQ2hlc3RTdGF0ZXMiLCJpZCIsInBldF9uYW1lIiwic2V0SW50ZXJ2YWwiLCJiaW5kIiwidXBkYXRlQ2hlc3RUaW1lcnMiLCJzdG9yYWdlIiwicGFyc2VJbnQiLCJsb2FkZWRDaGVzdHMiLCJtYXAiLCJjaGVzdCIsInJlbWFpbmluZ1RpbWUiLCJNYXRoIiwibWF4IiwiRGF0ZSIsIm5vdyIsInNhdmVDaGVzdFN0YXRlcyIsInNldCIsImhvdXJzIiwiZ2V0SG91cnMiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJpbmRleCIsImZvcm1hdFRpbWUiLCJzZWNvbmRzIiwiZmxvb3IiLCJyZW1haW5pbmdTZWNvbmRzIiwiaW5jcmVtZW50Q2xpY2siLCJyYW5kb21JbWFnZSIsInJhbmRvbSIsInNldFRpbWVvdXQiLCJjbGFpbUNoZXN0IiwibG9nIiwicmV3YXJkIiwib3Blbk1vcmUiLCJyb3V0ZXIiLCJ1cmkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUNBLElBQUFBLFVBQUFDLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFDLFVBQUFDLG9CQUFBO3dCQUFvQyxTQUFBSCx1QkFBQUksQ0FBQTs0QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7Z0NBQUFFLFNBQUFGOzRCQUFBO3dCQUFBO3dCQUFBLFNBQUFHLFFBQUFILENBQUEsRUFB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