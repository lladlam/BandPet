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
                            async syncFromServer(userId) {
                                try {
                                    const result = await this.request('sync_from_server', {
                                        user_id: userId
                                    });
                                    if (result && result.success) {
                                        console.log('从服务器同步数据成功:', result.userInfo);
                                        return {
                                            success: true,
                                            userInfo: result.userInfo
                                        };
                                    }
                                    console.error('同步数据失败:', result ? result.error : '未知错误');
                                    return {
                                        success: false,
                                        error: result ? result.error : '服务器未返回成功状态'
                                    };
                                } catch (error) {
                                    console.error('从服务器同步数据时发生网络错误:', error);
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
                            SERVER: {
                                BASE_URL: 'http://103.205.253.87:22207'
                            },
                            APP: {
                                NAME: 'BandPet',
                                VERSION: '0.3.5 Alpha',
                                MAX_CLICKS_PER_BATCH: 50,
                                SYNC_INTERVAL: 60000,
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
                                fontSize: "24px"
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
                        var _system3 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                        var _apiService = _interopRequireDefault(__webpack_require__("./src/common/js/api-service.js"));
                        var _config = __webpack_require__("./src/common/js/config.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        const _promisifiedStorageGet = (key)=>new Promise((resolve)=>{
                                _system2.default.get({
                                    key: key,
                                    success: (data)=>resolve(data),
                                    fail: ()=>resolve(null)
                                });
                            });
                        const _promisifiedStorageSet = (key, value)=>new Promise((resolve, reject)=>{
                                _system2.default.set({
                                    key: key,
                                    value: value,
                                    success: resolve,
                                    fail: (err, code)=>reject(new Error(`Storage.set failed for key '${key}' with code ${code}: ${err}`))
                                });
                            });
                        var _default = exports.default = {
                            data: {
                                time: '00:00',
                                petName: '(无名)',
                                clickCount: 0,
                                pendingClicks: 0,
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
                                ],
                                isInitialized: false
                            },
                            async onInit () {
                                if (this.isInitialized) return;
                                this.isInitialized = true;
                                console.log("Main page onInit: Initializing.");
                                await this.loadInitialState();
                                this.updateTime();
                                setInterval(this.syncClicks.bind(this), _config.CONFIG.APP.SYNC_INTERVAL);
                                setInterval(this.updateTime, 10000);
                                setInterval(this.updateChestTimers.bind(this), 1000);
                            },
                            async loadInitialState () {
                                console.log('[MainPage] --- Loading Initial State ---');
                                const pendingClicksData = await _promisifiedStorageGet(_config.CONFIG.STORAGE_KEYS.PENDING_CLICKS);
                                this.pendingClicks = parseInt(pendingClicksData) || 0;
                                console.log(`[MainPage] Loaded pending clicks: ${this.pendingClicks}`);
                                const userInfoJSON = await _promisifiedStorageGet(_config.CONFIG.STORAGE_KEYS.USER_INFO);
                                let baseClickCount = 0;
                                if (userInfoJSON) {
                                    try {
                                        const userInfo = JSON.parse(userInfoJSON);
                                        if (userInfo && userInfo.id) {
                                            this.petName = userInfo.pet_name || '(无名)';
                                            baseClickCount = userInfo.total_clicks || 0;
                                            console.log(`[MainPage] Loaded user info. PetName: ${this.petName}, Base Clicks from Server: ${baseClickCount}`);
                                        } else console.error("[MainPage] User info from storage is invalid!");
                                    } catch (e) {
                                        console.error("[MainPage] Failed to parse user info from storage:", e);
                                    }
                                } else console.error("[MainPage] Could not find user info in storage!");
                                const localTotalClicksData = await _promisifiedStorageGet(_config.CONFIG.STORAGE_KEYS.TOTAL_CLICKS);
                                const localTotalClicks = parseInt(localTotalClicksData);
                                if (!isNaN(localTotalClicks) && localTotalClicks >= baseClickCount) {
                                    this.clickCount = localTotalClicks;
                                    console.log(`[MainPage] Using locally saved total clicks as source of truth: ${this.clickCount}`);
                                } else {
                                    this.clickCount = baseClickCount;
                                    console.log(`[MainPage] Falling back to server-provided clicks as source of truth: ${this.clickCount}`);
                                }
                                console.log('[MainPage] --- Initial State Loaded ---');
                                await this.loadChestStates();
                            },
                            async loadChestStates () {
                                const chestData = await _promisifiedStorageGet('chestStates');
                                if (chestData) {
                                    const loadedChests = JSON.parse(chestData);
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
                            },
                            async saveChestStates () {
                                await _promisifiedStorageSet('chestStates', JSON.stringify(this.chests));
                            },
                            updateTime () {
                                const now = new Date();
                                const hours = now.getHours().toString().padStart(2, '0');
                                const minutes = now.getMinutes().toString().padStart(2, '0');
                                this.time = `${hours}:${minutes}`;
                            },
                            updateChestTimers () {
                                let needsSave = false;
                                this.chests.forEach((chest, index)=>{
                                    if (chest.claimed && chest.refreshTimestamp > 0) {
                                        const remainingTime = Math.max(0, chest.refreshTimestamp - Date.now());
                                        this.chests[index].timerDisplay = this.formatTime(remainingTime / 1000);
                                        if (remainingTime <= 0) {
                                            this.chests[index].claimed = false;
                                            this.chests[index].refreshTimestamp = 0;
                                            needsSave = true;
                                        }
                                    }
                                });
                                if (needsSave) this.saveChestStates();
                            },
                            formatTime (seconds) {
                                const minutes = Math.floor(seconds / 60);
                                const remainingSeconds = Math.floor(seconds % 60);
                                return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
                            },
                            async incrementClick () {
                                this.clickCount++;
                                this.pendingClicks++;
                                try {
                                    await _promisifiedStorageSet(_config.CONFIG.STORAGE_KEYS.PENDING_CLICKS, this.pendingClicks.toString());
                                    await _promisifiedStorageSet(_config.CONFIG.STORAGE_KEYS.TOTAL_CLICKS, this.clickCount.toString());
                                    console.log(`[MainPage] Click! New Total: ${this.clickCount}, Pending: ${this.pendingClicks}. Saved to storage.`);
                                } catch (e) {
                                    console.error("[MainPage] Failed to save clicks to storage:", e);
                                }
                                const randomImage = Math.random() < 0.5 ? '/common/Ra1.png' : '/common/Ra2.png';
                                this.petImage = randomImage;
                                setTimeout(()=>{
                                    this.petImage = '/common/Ra0.png';
                                }, 200);
                            },
                            async claimChest (index) {
                                const chest = this.chests[index];
                                if (chest.claimed) return void console.log('Chest is on cooldown.');
                                if (this.clickCount >= 1000) {
                                    this.clickCount -= 1000;
                                    const reward = Math.floor(500 * Math.random()) + 100;
                                    this.clickCount += reward;
                                    console.log(`Chest ${index} claimed! Rewarded ${reward} clicks.`);
                                    this.chests[index].claimed = true;
                                    this.chests[index].refreshTimestamp = Date.now() + 1800000;
                                    try {
                                        await _promisifiedStorageSet(_config.CONFIG.STORAGE_KEYS.TOTAL_CLICKS, this.clickCount.toString());
                                        await this.saveChestStates();
                                    } catch (e) {
                                        console.error("Failed to save chest state:", e);
                                    }
                                } else console.log('Not enough clicks to open chest.');
                            },
                            async syncClicks () {
                                if (0 === this.pendingClicks) return;
                                const userInfoJSON = await _promisifiedStorageGet(_config.CONFIG.STORAGE_KEYS.USER_INFO);
                                if (!userInfoJSON) return void _system3.default.showToast({
                                    message: '用户未登录，无法同步',
                                    duration: 3000
                                });
                                const userInfo = JSON.parse(userInfoJSON);
                                if (!userInfo || !userInfo.id) return void _system3.default.showToast({
                                    message: '用户信息无效，无法同步',
                                    duration: 3000
                                });
                                const userId = userInfo.id;
                                const clicksToSync = this.pendingClicks;
                                const result = await _apiService.default.syncClicks(userId, clicksToSync);
                                if (result.success) {
                                    this.pendingClicks -= clicksToSync;
                                    if (this.pendingClicks < 0) this.pendingClicks = 0;
                                    await _promisifiedStorageSet(_config.CONFIG.STORAGE_KEYS.PENDING_CLICKS, this.pendingClicks.toString());
                                    _system3.default.showToast({
                                        message: '点击次数已同步'
                                    });
                                } else _system3.default.showToast({
                                    message: '同步失败，请稍后重试'
                                });
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
