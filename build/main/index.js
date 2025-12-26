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
                        var _system3 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                        var _apiService = _interopRequireDefault(__webpack_require__("./src/common/js/api-service.js"));
                        var _config = __webpack_require__("./src/common/js/config.js");
                        var _authGuard = _interopRequireDefault(__webpack_require__("./src/common/js/auth-guard.js"));
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
                                console.log("Main page onInit: Running auth check.");
                                const guardResult = await _authGuard.default.checkNetworkAccess();
                                if (!guardResult || !guardResult.canAccess) return void console.log("AuthGuard failed on main page, halting init.");
                                console.log("AuthGuard passed, initializing main page.");
                                await this.loadInitialState(guardResult.userInfo);
                                this.updateTime();
                                setInterval(this.syncClicks.bind(this), _config.CONFIG.APP.SYNC_INTERVAL);
                                setInterval(this.updateTime, 5000);
                                setInterval(this.updateChestTimers.bind(this), 1000);
                            },
                            async loadInitialState (userInfo) {
                                const pendingClicksData = await _promisifiedStorageGet(_config.CONFIG.STORAGE_KEYS.PENDING_CLICKS);
                                this.pendingClicks = parseInt(pendingClicksData) || 0;
                                if (userInfo && userInfo.id) {
                                    this.petName = userInfo.pet_name || '(无名)';
                                    this.clickCount = userInfo.total_clicks || 0;
                                    await _promisifiedStorageSet(_config.CONFIG.STORAGE_KEYS.TOTAL_CLICKS, this.clickCount.toString());
                                    await _promisifiedStorageSet(_config.CONFIG.STORAGE_KEYS.USER_INFO, JSON.stringify(userInfo));
                                } else console.error("Main page loaded without valid user info!");
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
                                } catch (e) {
                                    console.error("Failed to save clicks:", e);
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
                                const guardResult = await _authGuard.default.checkNetworkAccess();
                                if (!guardResult || !guardResult.canAccess) return void _system3.default.showToast({
                                    message: guardResult.message || '需要激活才能同步',
                                    duration: 3000
                                });
                                const userId = guardResult.userInfo.id;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpblxcaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvYXBpLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2F1dGgtZ3VhcmQuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL0JhbmRQZXQvc3JjL21haW4vaW5kZXgudXgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBpLXNlcnZpY2UuanNcclxuaW1wb3J0IGZldGNoIGZyb20gJ0BzeXN0ZW0uZmV0Y2gnO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQHN5c3RlbS5zdG9yYWdlJztcclxuaW1wb3J0IHByb21wdCBmcm9tICdAc3lzdGVtLnByb21wdCc7XHJcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vY29uZmlnLmpzJztcclxuXHJcbmNsYXNzIEFwaVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8g5Lit6L2s5pyN5Yqh5Zmo5Zyw5Z2AIC0g5LuOIGNvbmZpZy5qcyDor7vlj5ZcclxuICAgIHRoaXMuYmFzZVVybCA9IENPTkZJRy5TRVJWRVIuQkFTRV9VUkw7XHJcbiAgICB0aGlzLmJhc2VIZWFkZXJzID0ge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g6YCa55So6K+35rGC5pa55rOVIC0g6YCa6L+H5Lit6L2s5pyN5Yqh5Zmo6L2s5Y+RXHJcbiAgYXN5bmMgcmVxdWVzdChhY3Rpb24sIGRhdGEgPSB7fSkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVXJsfS9hcGlgO1xyXG4gICAgXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXI6IHRoaXMuYmFzZUhlYWRlcnMsXHJcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICB9O1xyXG5cclxuICAgIG9wdGlvbnMuZGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgYWN0aW9uLCAuLi5kYXRhIH0pO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGZldGNoLmZldGNoKHtcclxuICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcclxuXHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuY29kZSA+PSAyMDAgJiYgcmVzcG9uc2UuY29kZSA8IDMwMCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlRGF0YSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEhUVFAgRXJyb3I6ICR7cmVzcG9uc2UuY29kZX1gLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYEhUVFAgJHtyZXNwb25zZS5jb2RlfTogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZURhdGEpfWApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogKGVycm9yLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBSZXF1ZXN0IEZhaWxlZDogJHtjb2RlfWAsIGVycm9yKTtcclxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkOiAke2Vycm9yLmRhdGF9YCkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIOiOt+WPluaOkuihjOamnFxyXG4gIGFzeW5jIGdldFJhbmtpbmdzKGxpbWl0ID0gMTApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnZ2V0X3JhbmtpbmdzJywge1xyXG4gICAgICAgIGxpbWl0OiBsaW1pdFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgcmFua2luZ3M6IHJlc3VsdC5yYW5raW5ncyB8fCBbXVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfojrflj5bmjpLooYzmppzlpLHotKU6JywgZXJyb3IpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgcmFua2luZ3M6IFtdLFxyXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOS4iuaKpeeCueWHu+asoeaVsFxyXG4gIGFzeW5jIHN5bmNDbGlja3ModXNlcklkLCBjbGlja0NvdW50KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCB0aGlzLnJlcXVlc3QoJ3N5bmNfY2xpY2tzJywge1xyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcclxuICAgICAgICBjbGlja19jb3VudDogY2xpY2tDb3VudFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S4iuaKpeeCueWHu+asoeaVsOWksei0pTonLCBlcnJvcilcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDmo4Dmn6XlrqDnianlkI3mmK/lkKblj6/nlKhcclxuICBhc3luYyBjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkocGV0TmFtZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdjaGVja19wZXRfbmFtZScsIHtcclxuICAgICAgICBwZXRfbmFtZTogcGV0TmFtZVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgLi4ucmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfmo4Dmn6XlrqDnianlkI3lj6/nlKjmgKfml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UsIGlzQXZhaWxhYmxlOiBmYWxzZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5L+u5pS55a6g54mp5ZCNXHJcbiAgYXN5bmMgc2V0UGV0TmFtZSh1c2VySWQsIG5ld05hbWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnc2V0X3BldF9uYW1lJywge1xyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcclxuICAgICAgICBuZXdfbmFtZTogbmV3TmFtZVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S/ruaUueWuoOeJqeWQjeWksei0pTonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g6aKE5r+A5rS75qOA5p+lXHJcbiAgYXN5bmMgY2hlY2tEZXZpY2VSZWdpc3RyYXRpb24oZGV2aWNlSWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnY2hlY2tfcmVnaXN0cmF0aW9uJywge1xyXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWRcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfpooTmv4DmtLvmo4Dmn6XmiJDlip86JywgcmVzdWx0KTtcclxuICAgICAgLy8g55u05o6l6L+U5Zue5pyN5Yqh5Zmo55qE5Y6f5aeL5ZON5bqU77yMVUnlsYLmnJ/mnJvnmoTmmK/miYHlubPnu5PmnoRcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+mihOa/gOa0u+ajgOafpeaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XHJcbiAgICAgIC8vIOi/lOWbnuS4gOS4quWFvOWuueeahOmUmeivr+Wvueixoe+8jOmBv+WFjVVJ5bGC5bSp5rqDXHJcbiAgICAgIHJldHVybiB7IGlzX3JlZ2lzdGVyZWQ6IGZhbHNlLCBjYW5fYXV0b19hY3RpdmF0ZTogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDms6jlhozorr7lpIflubbojrflj5bnlKjmiLdJRFxyXG4gIGFzeW5jIHJlZ2lzdGVyQW5kR2V0VXNlcklkKGRldmljZUlkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBQYXNzIHRoZSBzZXJ2ZXIgcmVzcG9uc2UgZGlyZWN0bHkgdG8gdGhlIFVJIGxheWVyXHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3QoJ3JlZ2lzdGVyX2RldmljZV9hbmRfZ2V0X2lkJywge1xyXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWRcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfms6jlhozmiJbojrflj5bnlKjmiLdJROaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XHJcbiAgICAgIC8vIFJldHVybiBhIGNvbXBhdGlibGUgZXJyb3Igb2JqZWN0XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDpqozor4HnlKjmiLdJROW5tuaBouWkjeaVsOaNrlxyXG4gIGFzeW5jIHZlcmlmeVVzZXJJZEFuZFJlc3RvcmUoZGV2aWNlSWQsIHVzZXJJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gUGFzcyB0aGUgc2VydmVyIHJlc3BvbnNlIGRpcmVjdGx5IHRvIHRoZSBVSSBsYXllclxyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0KCd2ZXJpZnlfdXNlcl9pZF9hbmRfcmVzdG9yZScsIHtcclxuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkLFxyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+mqjOivgeeUqOaIt0lE5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcclxuICAgICAgLy8gUmV0dXJuIGEgY29tcGF0aWJsZSBlcnJvciBvYmplY3RcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBcGlTZXJ2aWNlKClcclxuIiwiLy8gc3JjL2NvbW1vbi9qcy9hdXRoLWd1YXJkLmpzXHJcblxyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcclxuaW1wb3J0IEFwaVNlcnZpY2UgZnJvbSAnLi9hcGktc2VydmljZS5qcyc7XHJcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vY29uZmlnLmpzJztcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgdGhlIHVzZXIgaGFzIHRoZSBuZWNlc3NhcnkgYWN0aXZhdGlvbiBhbmQgY3JlZGVudGlhbHMgdG8gYWNjZXNzIGEgbmV0d29yayBmZWF0dXJlLlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGltcGxlbWVudHMgdGhlIGZvbGxvd2luZyBsb2dpYzpcclxuICogMS4gQ2hlY2tzIGZvciBhIGxvY2FsIGFjdGl2YXRpb24gZmxhZy4gSWYgbm90IHByZXNlbnQsIHJlZGlyZWN0cyB0byB0aGUgYWN0aXZhdGlvbiBwYWdlLlxyXG4gKiAyLiBJZiBsb2NhbGx5IGFjdGl2YXRlZCwgY2hlY2tzIGZvciBzdG9yZWQgdXNlciBpbmZvIHdpdGggYSBzZXJ2ZXItc2lkZSBJRC5cclxuICogMy4gSWYgdXNlciBpbmZvIGlzIG1pc3NpbmcsIGl0IGF0dGVtcHRzIHRvIGZldGNoIGl0IGZyb20gdGhlIHNlcnZlciB1c2luZyB0aGUgc3RvcmVkIGRldmljZSBjb2RlLlxyXG4gKiA0LiBSZXR1cm5zIHRoZSBhY2Nlc3Mgc3RhdHVzIGFuZCB1c2VyIGluZm8uXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IEFuIG9iamVjdCB3aXRoOiB7IGNhbkFjY2VzczogYm9vbGVhbiwgdXNlckluZm86IE9iamVjdHxudWxsLCBtZXNzYWdlOiBzdHJpbmcgfVxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gY2hlY2tOZXR3b3JrQWNjZXNzKCkge1xyXG4gIC8vIEhlbHBlciB0byBwcm9taXNpZnkgc3RvcmFnZS5nZXQgLSBpdCByZXNvbHZlcyB3aXRoIHRoZSBSQVcgVkFMVUUuXHJcbiAgY29uc3QgX3Byb21pc2lmaWVkU3RvcmFnZUdldCA9IChrZXkpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBzdG9yYWdlLmdldCh7XHJcbiAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgLy8gVGhlICdkYXRhJyBwYXJhbWV0ZXIgSVMgdGhlIHZhbHVlLiBDYW4gYmUgdW5kZWZpbmVkIGlmIG5vdCBmb3VuZC5cclxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4gcmVzb2x2ZShkYXRhKSxcclxuICAgICAgICBmYWlsOiAoKSA9PiByZXNvbHZlKG51bGwpIC8vIFJlc29sdmUgd2l0aCBudWxsIG9uIGFueSBmYWlsdXJlLlxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIEhlbHBlciB0byBwcm9taXNpZnkgc3RvcmFnZS5zZXRcclxuICBjb25zdCBfcHJvbWlzaWZpZWRTdG9yYWdlU2V0ID0gKGtleSwgdmFsdWUpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHN0b3JhZ2Uuc2V0KHtcclxuICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcclxuICAgICAgICBmYWlsOiAoZXJyLCBjb2RlKSA9PiByZWplY3QobmV3IEVycm9yKGBTdG9yYWdlLnNldCBmYWlsZWQgZm9yIGtleSAnJHtrZXl9JyB3aXRoIGNvZGUgJHtjb2RlfTogJHtlcnJ9YCkpXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIDEuIENoZWNrIGZvciBsb2NhbCBhY3RpdmF0aW9uIGZsYWdcclxuICAgIGNvbnN0IGxvY2FsQWN0aXZhdGlvblZhbHVlID0gYXdhaXQgX3Byb21pc2lmaWVkU3RvcmFnZUdldChDT05GSUcuU1RPUkFHRV9LRVlTLklTX0xPQ0FMTFlfQUNUSVZBVEVEKTtcclxuICAgIGlmIChsb2NhbEFjdGl2YXRpb25WYWx1ZSAhPT0gJ3RydWUnKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKHsgdXJpOiAnYWN0aXZhdGUnIH0pO1xyXG4gICAgICByZXR1cm4geyBjYW5BY2Nlc3M6IGZhbHNlLCB1c2VySW5mbzogbnVsbCwgbWVzc2FnZTogJ+iuvuWkh+acqua/gOa0u++8jOivt+WFiOa/gOa0u+OAgicgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAyLiBDaGVjayBmb3IgZXhpc3RpbmcgVXNlciBJbmZvIGluIHN0b3JhZ2VcclxuICAgIGNvbnN0IHVzZXJJbmZvSlNPTiA9IGF3YWl0IF9wcm9taXNpZmllZFN0b3JhZ2VHZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8pO1xyXG4gICAgaWYgKHVzZXJJbmZvSlNPTikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gSlNPTi5wYXJzZSh1c2VySW5mb0pTT04pO1xyXG4gICAgICAgIGlmICh1c2VySW5mbyAmJiB1c2VySW5mby5pZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhHdWFyZDogVXNlciBJRCBmb3VuZCBpbiBzdG9yYWdlLicpO1xyXG4gICAgICAgICAgcmV0dXJuIHsgY2FuQWNjZXNzOiB0cnVlLCB1c2VySW5mbzogdXNlckluZm8sIG1lc3NhZ2U6ICfpqozor4HpgJrov4cnIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoKGUpIHsgLyogTWFsZm9ybWVkIEpTT04sIHByb2NlZWQgdG8gZmV0Y2ggZnJvbSBzZXJ2ZXIgKi8gfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIDMuIFVzZXIgSW5mbyBpcyBtaXNzaW5nIG9yIG1hbGZvcm1lZCwgdHJ5IHRvIGZldGNoIGl0IGZyb20gc2VydmVyXHJcbiAgICBjb25zb2xlLmxvZygnQXV0aEd1YXJkOiBVc2VyIEluZm8gbm90IGZvdW5kIGluIHN0b3JhZ2UsIGF0dGVtcHRpbmcgdG8gcmVjb3ZlciBmcm9tIHNlcnZlci4nKTtcclxuICAgIFxyXG4gICAgY29uc3QgZGV2aWNlQ29kZSA9IGF3YWl0IF9wcm9taXNpZmllZFN0b3JhZ2VHZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5ERVZJQ0VfSUQpO1xyXG4gICAgaWYgKCFkZXZpY2VDb2RlKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goeyB1cmk6ICdhY3RpdmF0ZScgfSk7XHJcbiAgICAgICAgcmV0dXJuIHsgY2FuQWNjZXNzOiBmYWxzZSwgdXNlckluZm86IG51bGwsIG1lc3NhZ2U6ICfml6Dms5Xmib7liLDorr7lpIfnoIHvvIzor7fph43mlrDmv4DmtLvjgIInIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXNlIGNoZWNrRGV2aWNlUmVnaXN0cmF0aW9uIHRvIGdldCBleGlzdGluZyB1c2VyIGRhdGFcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2UuY2hlY2tEZXZpY2VSZWdpc3RyYXRpb24oZGV2aWNlQ29kZSk7XHJcblxyXG4gICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuaXNfcmVnaXN0ZXJlZCAmJiByZXN1bHQudXNlckluZm8pIHtcclxuICAgICAgY29uc29sZS5sb2coJ0F1dGhHdWFyZDogU3VjY2Vzc2Z1bGx5IHJlY292ZXJlZCBVc2VyIEluZm8gZnJvbSBzZXJ2ZXIuJyk7XHJcbiAgICAgIGF3YWl0IF9wcm9taXNpZmllZFN0b3JhZ2VTZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8sIEpTT04uc3RyaW5naWZ5KHJlc3VsdC51c2VySW5mbykpO1xyXG4gICAgICByZXR1cm4geyBjYW5BY2Nlc3M6IHRydWUsIHVzZXJJbmZvOiByZXN1bHQudXNlckluZm8sIG1lc3NhZ2U6ICfnlKjmiLdJROaBouWkjeaIkOWKnycgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdBdXRoR3VhcmQ6IEZhaWxlZCB0byByZWNvdmVyIFVzZXIgSW5mbywgZGV2aWNlIG1heSBub3QgYmUgcmVnaXN0ZXJlZCBvbiBzZXJ2ZXIuJyk7XHJcbiAgICAgIHJvdXRlci5wdXNoKHsgdXJpOiAnYWN0aXZhdGUnIH0pOyAvLyBGb3JjZSByZS1hY3RpdmF0aW9uXHJcbiAgICAgIHJldHVybiB7IGNhbkFjY2VzczogZmFsc2UsIHVzZXJJbmZvOiBudWxsLCBtZXNzYWdlOiAn5peg5rOV5oGi5aSN55So5oi35L+h5oGv77yM6K+36YeN5paw5r+A5rS744CCJyB9O1xyXG4gICAgfVxyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdBdXRoR3VhcmQ6IEVycm9yIGR1cmluZyBjaGVja05ldHdvcmtBY2Nlc3MnLCBlKTtcclxuICAgIHJvdXRlci5wdXNoKHsgdXJpOiAnYWN0aXZhdGUnIH0pOyAvLyBPbiBhbnkgY2F0YXN0cm9waGljIGVycm9yLCBkZWZhdWx0IHRvIHJlLWFjdGl2YXRpb25cclxuICAgIHJldHVybiB7IGNhbkFjY2VzczogZmFsc2UsIHVzZXJJbmZvOiBudWxsLCBtZXNzYWdlOiBg5Y+R55Sf6Ie05ZG96ZSZ6K+vOiAke2UubWVzc2FnZX1gIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY2hlY2tOZXR3b3JrQWNjZXNzXHJcbn07XHJcbiIsIi8vIGNvbmZpZy5qc1xyXG5leHBvcnQgY29uc3QgQ09ORklHID0ge1xyXG4gIC8vIOS4rei9rOacjeWKoeWZqOmFjee9rlxyXG4gIFNFUlZFUjoge1xyXG4gICAgQkFTRV9VUkw6ICdodHRwOi8vMTAzLjIwNS4yNTMuODc6MjIyMDcnXHJcbiAgfSxcclxuICBcclxuICAvLyDms6jmhI/vvJpVUkwg5YmN57yA5ZyoIGFwaS1zZXJ2aWNlLmpzIOS4reehrOe8lueggeS6hlxyXG4gIC8vIOi/memHjOS4jeWGjemcgOimgemFjee9rlxyXG4gIFxyXG4gIC8vIOW6lOeUqOmFjee9rlxyXG4gIEFQUDoge1xyXG4gICAgTkFNRTogJ0JhbmRQZXQnLFxyXG4gICAgVkVSU0lPTjogJzAuMy41IEFscGhhJyxcclxuICAgIE1BWF9DTElDS1NfUEVSX0JBVENIOiA1MCxcclxuICAgIFNZTkNfSU5URVJWQUw6IDMwMDAwMCxcclxuICAgIFJBTktfTElNSVQ6IDEwXHJcbiAgfSxcclxuICBcclxuICAvLyDlrZjlgqjplK7lkI1cclxuICBTVE9SQUdFX0tFWVM6IHtcclxuICAgIERFVklDRV9JRDogJ2RldmljZV9pZCcsXHJcbiAgICBJU19MT0NBTExZX0FDVElWQVRFRDogJ2lzX2xvY2FsbHlfYWN0aXZhdGVkJyxcclxuICAgIFVTRVJfSU5GTzogJ3VzZXJfaW5mbycsXHJcbiAgICBQRU5ESU5HX0NMSUNLUzogJ3BlbmRpbmdfY2xpY2tzJyxcclxuICAgIExBU1RfU1lOQ19USU1FOiAnbGFzdF9zeW5jX3RpbWUnLFxyXG4gICAgVE9UQUxfQ0xJQ0tTOiAndG90YWxfY2xpY2tzJ1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS42LjhcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNi44XCI7IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDx0ZXh0IGNsYXNzPVwidGltZVwiPnt7IHRpbWUgfX08L3RleHQ+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGVmdC1jaGVzdFwiIG9uY2xpY2s9XCJjbGFpbUNoZXN0KDApXCI+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwiY2hlc3QtbGFiZWxcIj7lrp3nrrE8L3RleHQ+XHJcbiAgICAgIDx0ZXh0IHNob3c9XCJ7eyFjaGVzdHNbMF0uY2xhaW1lZH19XCIgY2xhc3M9XCJjaGVzdC1jb3N0XCI+6Iqx6LS5OiAxMDAwPC90ZXh0PlxyXG4gICAgICA8dGV4dCBzaG93PVwie3tjaGVzdHNbMF0uY2xhaW1lZH19XCIgY2xhc3M9XCJjaGVzdC10aW1lclwiPnt7IGNoZXN0c1swXS50aW1lckRpc3BsYXkgfX08L3RleHQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jaGVzdFwiIG9uY2xpY2s9XCJjbGFpbUNoZXN0KDEpXCI+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwiY2hlc3QtbGFiZWxcIj7lrp3nrrE8L3RleHQ+XHJcbiAgICAgIDx0ZXh0IHNob3c9XCJ7eyFjaGVzdHNbMV0uY2xhaW1lZH19XCIgY2xhc3M9XCJjaGVzdC1jb3N0XCI+6Iqx6LS5OiAxMDAwPC90ZXh0PlxyXG4gICAgICA8dGV4dCBzaG93PVwie3tjaGVzdHNbMV0uY2xhaW1lZH19XCIgY2xhc3M9XCJjaGVzdC10aW1lclwiPnt7IGNoZXN0c1sxXS50aW1lckRpc3BsYXkgfX08L3RleHQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwZXQtY29udGFpbmVyXCIgb25jbGljaz1cImluY3JlbWVudENsaWNrXCI+XHJcbiAgICAgIDxpbWFnZSBjbGFzcz1cInBldC1pbWFnZVwiIHNyYz1cInt7IHBldEltYWdlIH19XCI+PC9pbWFnZT5cclxuICAgICAgPHRleHQgY2xhc3M9XCJwZXQtbmFtZVwiPnt7IHBldE5hbWUgfX08L3RleHQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJib3R0b20tYmFyXCI+XHJcbjxpbWFnZSBzcmM9XCIuLi9jb21tb24vbW9yZS5wbmdcIiBjbGFzcz1cIm1vcmUtYnV0dG9uXCIgb25jbGljaz1cIm9wZW5Nb3JlXCI+PC9pbWFnZT5cclxuICAgICAgPGRpdiBjbGFzcz1cImNsaWNrLWNvdW50ZXJcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImNsaWNrLWNvdW50ZXItdGV4dFwiPnt7IGNsaWNrQ291bnQgfX08L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGU+XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICB9XHJcbiAgLnRpbWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNHB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgfVxyXG4gIC5sZWZ0LWNoZXN0LCAucmlnaHQtY2hlc3Qge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQUE1MjA7IC8qIEdvbGRlblJvZCAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAuNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICB9XHJcbiAgLmxlZnQtY2hlc3Qge1xyXG4gICAgdG9wOiA3MHB4O1xyXG4gICAgbGVmdDogMTRweDtcclxuICB9XHJcbiAgLnJpZ2h0LWNoZXN0IHtcclxuICAgIHRvcDogNzBweDtcclxuICAgIHJpZ2h0OiAxNHB4O1xyXG4gIH1cclxuICAuY2hlc3QtcHJvZ3Jlc3Mge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIC5jaGVzdC1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICB9XHJcbiAgLmNoZXN0LWNvc3Qge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDE2LjhweDtcclxuICB9XHJcbiAgLmNoZXN0LXRpbWVyIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNi44cHg7XHJcbiAgfVxyXG4gIC5wZXQtY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjEwcHg7XHJcbiAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gIH1cclxuICAucGV0LWltYWdlIHtcclxuICAgIHdpZHRoOiAyMTBweDsgLyogMTQwICogMS41ICovXHJcbiAgICBoZWlnaHQ6IDIxMHB4OyAvKiAxNDAgKiAxLjUgKi9cclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgfVxyXG4gIC5wZXQtbmFtZSB7XHJcbiAgICBjb2xvcjogIzg4ODg4ODtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7IC8qIEluY3JlYXNlZCBmcm9tIDEwcHggdG8gMjBweCAqL1xyXG4gIH1cclxuICAuYm90dG9tLWJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDIxcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLm1vcmUtYnV0dG9uIHtcclxuICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5tb3JlLWJ1dHRvbi10ZXh0IHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gIH1cclxuICAuY2xpY2stY291bnRlciB7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLmNsaWNrLWNvdW50ZXItdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xyXG4gIGltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XHJcbiAgaW1wb3J0IHByb21wdCBmcm9tICdAc3lzdGVtLnByb21wdCc7XHJcbiAgaW1wb3J0IEFwaVNlcnZpY2UgZnJvbSAnLi4vY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzJztcclxuICBpbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuLi9jb21tb24vanMvY29uZmlnLmpzJztcclxuICBpbXBvcnQgYXV0aEd1YXJkIGZyb20gJy4uL2NvbW1vbi9qcy9hdXRoLWd1YXJkLmpzJztcclxuXHJcbiAgLy8gLS0tIFN0YXJ0IG9mIFByb21pc2lmaWVkIEhlbHBlcnMgLS0tXHJcbiAgY29uc3QgX3Byb21pc2lmaWVkU3RvcmFnZUdldCA9IChrZXkpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBzdG9yYWdlLmdldCh7XHJcbiAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHJlc29sdmUoZGF0YSksXHJcbiAgICAgICAgZmFpbDogKCkgPT4gcmVzb2x2ZShudWxsKVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IF9wcm9taXNpZmllZFN0b3JhZ2VTZXQgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc3RvcmFnZS5zZXQoe1xyXG4gICAgICAgIGtleToga2V5LFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgIGZhaWw6IChlcnIsIGNvZGUpID0+IHJlamVjdChuZXcgRXJyb3IoYFN0b3JhZ2Uuc2V0IGZhaWxlZCBmb3Iga2V5ICcke2tleX0nIHdpdGggY29kZSAke2NvZGV9OiAke2Vycn1gKSlcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIC8vIC0tLSBFbmQgb2YgUHJvbWlzaWZpZWQgSGVscGVycyAtLS1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YToge1xyXG4gICAgICB0aW1lOiAnMDA6MDAnLFxyXG4gICAgICBwZXROYW1lOiAnKOaXoOWQjSknLFxyXG4gICAgICBjbGlja0NvdW50OiAwLFxyXG4gICAgICBwZW5kaW5nQ2xpY2tzOiAwLFxyXG4gICAgICBwZXRJbWFnZTogJy9jb21tb24vUmEwLnBuZycsXHJcbiAgICAgIGNoZXN0czogW1xyXG4gICAgICAgIHsgY2xhaW1lZDogZmFsc2UsIHJlZnJlc2hUaW1lc3RhbXA6IDAsIHRpbWVyRGlzcGxheTogJ+iKsei0uTogMTAwMCcgfSxcclxuICAgICAgICB7IGNsYWltZWQ6IGZhbHNlLCByZWZyZXNoVGltZXN0YW1wOiAwLCB0aW1lckRpc3BsYXk6ICfoirHotLk6IDEwMDAnIH1cclxuICAgICAgXSxcclxuICAgICAgLy8gQWRkIGEgc2ltcGxlIGZsYWcgdG8gcHJldmVudCBtdWx0aXBsZSBpbml0aWFsaXphdGlvbnNcclxuICAgICAgaXNJbml0aWFsaXplZDogZmFsc2UgXHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIG9uSW5pdCgpIHtcclxuICAgICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJNYWluIHBhZ2Ugb25Jbml0OiBSdW5uaW5nIGF1dGggY2hlY2suXCIpO1xyXG4gICAgICBjb25zdCBndWFyZFJlc3VsdCA9IGF3YWl0IGF1dGhHdWFyZC5jaGVja05ldHdvcmtBY2Nlc3MoKTtcclxuICAgICAgXHJcbiAgICAgIGlmICghZ3VhcmRSZXN1bHQgfHwgIWd1YXJkUmVzdWx0LmNhbkFjY2Vzcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aEd1YXJkIGZhaWxlZCBvbiBtYWluIHBhZ2UsIGhhbHRpbmcgaW5pdC5cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZyhcIkF1dGhHdWFyZCBwYXNzZWQsIGluaXRpYWxpemluZyBtYWluIHBhZ2UuXCIpO1xyXG4gICAgICBhd2FpdCB0aGlzLmxvYWRJbml0aWFsU3RhdGUoZ3VhcmRSZXN1bHQudXNlckluZm8pO1xyXG4gICAgICBcclxuICAgICAgdGhpcy51cGRhdGVUaW1lKCk7XHJcbiAgICAgIHNldEludGVydmFsKHRoaXMuc3luY0NsaWNrcy5iaW5kKHRoaXMpLCBDT05GSUcuQVBQLlNZTkNfSU5URVJWQUwpO1xyXG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVRpbWUsIDUwMDApO1xyXG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZUNoZXN0VGltZXJzLmJpbmQodGhpcyksIDEwMDApO1xyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBsb2FkSW5pdGlhbFN0YXRlKHVzZXJJbmZvKSB7XHJcbiAgICAgICAgY29uc3QgcGVuZGluZ0NsaWNrc0RhdGEgPSBhd2FpdCBfcHJvbWlzaWZpZWRTdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuUEVORElOR19DTElDS1MpO1xyXG4gICAgICAgIHRoaXMucGVuZGluZ0NsaWNrcyA9IHBhcnNlSW50KHBlbmRpbmdDbGlja3NEYXRhKSB8fCAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh1c2VySW5mbyAmJiB1c2VySW5mby5pZCkge1xyXG4gICAgICAgICAgICB0aGlzLnBldE5hbWUgPSB1c2VySW5mby5wZXRfbmFtZSB8fCAnKOaXoOWQjSknO1xyXG4gICAgICAgICAgICB0aGlzLmNsaWNrQ291bnQgPSB1c2VySW5mby50b3RhbF9jbGlja3MgfHwgMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEF3YWl0IHN0b3JhZ2UgdXBkYXRlcyB0byBlbnN1cmUgY29uc2lzdGVuY3lcclxuICAgICAgICAgICAgYXdhaXQgX3Byb21pc2lmaWVkU3RvcmFnZVNldChDT05GSUcuU1RPUkFHRV9LRVlTLlRPVEFMX0NMSUNLUywgdGhpcy5jbGlja0NvdW50LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBhd2FpdCBfcHJvbWlzaWZpZWRTdG9yYWdlU2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPLCBKU09OLnN0cmluZ2lmeSh1c2VySW5mbykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYWluIHBhZ2UgbG9hZGVkIHdpdGhvdXQgdmFsaWQgdXNlciBpbmZvIVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMubG9hZENoZXN0U3RhdGVzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIGxvYWRDaGVzdFN0YXRlcygpIHtcclxuICAgICAgY29uc3QgY2hlc3REYXRhID0gYXdhaXQgX3Byb21pc2lmaWVkU3RvcmFnZUdldCgnY2hlc3RTdGF0ZXMnKTtcclxuICAgICAgaWYgKGNoZXN0RGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGxvYWRlZENoZXN0cyA9IEpTT04ucGFyc2UoY2hlc3REYXRhKTtcclxuICAgICAgICB0aGlzLmNoZXN0cyA9IGxvYWRlZENoZXN0cy5tYXAoY2hlc3QgPT4ge1xyXG4gICAgICAgICAgaWYgKGNoZXN0LnJlZnJlc2hUaW1lc3RhbXAgPiAwICYmIGNoZXN0LmNsYWltZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nVGltZSA9IE1hdGgubWF4KDAsIGNoZXN0LnJlZnJlc2hUaW1lc3RhbXAgLSBEYXRlLm5vdygpKTtcclxuICAgICAgICAgICAgaWYgKHJlbWFpbmluZ1RpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgIGNoZXN0LmNsYWltZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBjaGVzdC5yZWZyZXNoVGltZXN0YW1wID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGNoZXN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIHNhdmVDaGVzdFN0YXRlcygpIHtcclxuICAgICAgYXdhaXQgX3Byb21pc2lmaWVkU3RvcmFnZVNldCgnY2hlc3RTdGF0ZXMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNoZXN0cykpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVUaW1lKCkge1xyXG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBjb25zdCBob3VycyA9IG5vdy5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgY29uc3QgbWludXRlcyA9IG5vdy5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICB0aGlzLnRpbWUgPSBgJHtob3Vyc306JHttaW51dGVzfWA7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZUNoZXN0VGltZXJzKCkge1xyXG4gICAgICBsZXQgbmVlZHNTYXZlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2hlc3RzLmZvckVhY2goKGNoZXN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGVzdC5jbGFpbWVkICYmIGNoZXN0LnJlZnJlc2hUaW1lc3RhbXAgPiAwKSB7XHJcbiAgICAgICAgICBjb25zdCByZW1haW5pbmdUaW1lID0gTWF0aC5tYXgoMCwgY2hlc3QucmVmcmVzaFRpbWVzdGFtcCAtIERhdGUubm93KCkpO1xyXG4gICAgICAgICAgdGhpcy5jaGVzdHNbaW5kZXhdLnRpbWVyRGlzcGxheSA9IHRoaXMuZm9ybWF0VGltZShyZW1haW5pbmdUaW1lIC8gMTAwMCk7XHJcbiAgICAgICAgICBpZiAocmVtYWluaW5nVGltZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlc3RzW2luZGV4XS5jbGFpbWVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlc3RzW2luZGV4XS5yZWZyZXNoVGltZXN0YW1wID0gMDtcclxuICAgICAgICAgICAgbmVlZHNTYXZlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAobmVlZHNTYXZlKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlQ2hlc3RTdGF0ZXMoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBmb3JtYXRUaW1lKHNlY29uZHMpIHtcclxuICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcclxuICAgICAgY29uc3QgcmVtYWluaW5nU2Vjb25kcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAlIDYwKTtcclxuICAgICAgcmV0dXJuIGAke21pbnV0ZXMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfToke3JlbWFpbmluZ1NlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfWA7XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIGluY3JlbWVudENsaWNrKCkge1xyXG4gICAgICB0aGlzLmNsaWNrQ291bnQrKztcclxuICAgICAgdGhpcy5wZW5kaW5nQ2xpY2tzKys7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IF9wcm9taXNpZmllZFN0b3JhZ2VTZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5QRU5ESU5HX0NMSUNLUywgdGhpcy5wZW5kaW5nQ2xpY2tzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGF3YWl0IF9wcm9taXNpZmllZFN0b3JhZ2VTZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5UT1RBTF9DTElDS1MsIHRoaXMuY2xpY2tDb3VudC50b1N0cmluZygpKTtcclxuICAgICAgfSBjYXRjaCAoZSkgeyBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgY2xpY2tzOlwiLCBlKTsgfVxyXG5cclxuICAgICAgY29uc3QgcmFuZG9tSW1hZ2UgPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gJy9jb21tb24vUmExLnBuZycgOiAnL2NvbW1vbi9SYTIucG5nJztcclxuICAgICAgdGhpcy5wZXRJbWFnZSA9IHJhbmRvbUltYWdlO1xyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMucGV0SW1hZ2UgPSAnL2NvbW1vbi9SYTAucG5nJzsgfSwgMjAwKTtcclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgY2xhaW1DaGVzdChpbmRleCkge1xyXG4gICAgICBjb25zdCBjaGVzdCA9IHRoaXMuY2hlc3RzW2luZGV4XTtcclxuICAgICAgaWYgKGNoZXN0LmNsYWltZWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ2hlc3QgaXMgb24gY29vbGRvd24uJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmNsaWNrQ291bnQgPj0gMTAwMCkge1xyXG4gICAgICAgIHRoaXMuY2xpY2tDb3VudCAtPSAxMDAwO1xyXG4gICAgICAgIGNvbnN0IHJld2FyZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwMCkgKyAxMDA7XHJcbiAgICAgICAgdGhpcy5jbGlja0NvdW50ICs9IHJld2FyZDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhgQ2hlc3QgJHtpbmRleH0gY2xhaW1lZCEgUmV3YXJkZWQgJHtyZXdhcmR9IGNsaWNrcy5gKTtcclxuICAgICAgICB0aGlzLmNoZXN0c1tpbmRleF0uY2xhaW1lZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaGVzdHNbaW5kZXhdLnJlZnJlc2hUaW1lc3RhbXAgPSBEYXRlLm5vdygpICsgKDMwICogNjAgKiAxMDAwKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgYXdhaXQgX3Byb21pc2lmaWVkU3RvcmFnZVNldChDT05GSUcuU1RPUkFHRV9LRVlTLlRPVEFMX0NMSUNLUywgdGhpcy5jbGlja0NvdW50LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy5zYXZlQ2hlc3RTdGF0ZXMoKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHsgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzYXZlIGNoZXN0IHN0YXRlOlwiLCBlKTsgfVxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTm90IGVub3VnaCBjbGlja3MgdG8gb3BlbiBjaGVzdC4nKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBzeW5jQ2xpY2tzKCkge1xyXG4gICAgICBpZiAodGhpcy5wZW5kaW5nQ2xpY2tzID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCBndWFyZFJlc3VsdCA9IGF3YWl0IGF1dGhHdWFyZC5jaGVja05ldHdvcmtBY2Nlc3MoKTtcclxuICAgICAgaWYgKCFndWFyZFJlc3VsdCB8fCAhZ3VhcmRSZXN1bHQuY2FuQWNjZXNzKSB7XHJcbiAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7IG1lc3NhZ2U6IGd1YXJkUmVzdWx0Lm1lc3NhZ2UgfHwgJ+mcgOimgea/gOa0u+aJjeiDveWQjOatpScsIGR1cmF0aW9uOiAzMDAwIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc3QgdXNlcklkID0gZ3VhcmRSZXN1bHQudXNlckluZm8uaWQ7XHJcbiAgICAgIGNvbnN0IGNsaWNrc1RvU3luYyA9IHRoaXMucGVuZGluZ0NsaWNrcztcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5zeW5jQ2xpY2tzKHVzZXJJZCwgY2xpY2tzVG9TeW5jKTtcclxuXHJcbiAgICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICAgIHRoaXMucGVuZGluZ0NsaWNrcyAtPSBjbGlja3NUb1N5bmM7XHJcbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ0NsaWNrcyA8IDApIHRoaXMucGVuZGluZ0NsaWNrcyA9IDA7XHJcbiAgICAgICAgYXdhaXQgX3Byb21pc2lmaWVkU3RvcmFnZVNldChDT05GSUcuU1RPUkFHRV9LRVlTLlBFTkRJTkdfQ0xJQ0tTLCB0aGlzLnBlbmRpbmdDbGlja3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7IG1lc3NhZ2U6ICfngrnlh7vmrKHmlbDlt7LlkIzmraUnIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb21wdC5zaG93VG9hc3QoeyBtZXNzYWdlOiAn5ZCM5q2l5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJyB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvcGVuTW9yZSgpIHtcclxuICAgICAgcm91dGVyLnB1c2goeyB1cmk6ICdtb3JlJyB9KTtcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iXSwibmFtZXMiOlsiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX3N5c3RlbTIiLCJfc3lzdGVtMyIsIl9zeXN0ZW00IiwiX2NvbmZpZyIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJvd25LZXlzIiwiciIsInQiLCJPYmplY3QiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsInZhbHVlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiQXBpU2VydmljZSIsImNvbnN0cnVjdG9yIiwiYmFzZVVybCIsIkNPTkZJRyIsIlNFUlZFUiIsIkJBU0VfVVJMIiwiYmFzZUhlYWRlcnMiLCJyZXF1ZXN0IiwiYWN0aW9uIiwiZGF0YSIsInVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXIiLCJyZXNwb25zZVR5cGUiLCJKU09OIiwic3RyaW5naWZ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInJlc3BvbnNlRGF0YSIsImNvZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImZhaWwiLCJnZXRSYW5raW5ncyIsImxpbWl0IiwicmVzdWx0IiwicmFua2luZ3MiLCJtZXNzYWdlIiwic3luY0NsaWNrcyIsInVzZXJJZCIsImNsaWNrQ291bnQiLCJ1c2VyX2lkIiwiY2xpY2tfY291bnQiLCJjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkiLCJwZXROYW1lIiwicGV0X25hbWUiLCJpc0F2YWlsYWJsZSIsInNldFBldE5hbWUiLCJuZXdOYW1lIiwibmV3X25hbWUiLCJjaGVja0RldmljZVJlZ2lzdHJhdGlvbiIsImRldmljZUlkIiwiZGV2aWNlX2lkIiwibG9nIiwiaXNfcmVnaXN0ZXJlZCIsImNhbl9hdXRvX2FjdGl2YXRlIiwicmVnaXN0ZXJBbmRHZXRVc2VySWQiLCJ2ZXJpZnlVc2VySWRBbmRSZXN0b3JlIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiX2FwaVNlcnZpY2UiLCJjaGVja05ldHdvcmtBY2Nlc3MiLCJfcHJvbWlzaWZpZWRTdG9yYWdlR2V0Iiwia2V5IiwiZ2V0IiwiX3Byb21pc2lmaWVkU3RvcmFnZVNldCIsInNldCIsImVyciIsImxvY2FsQWN0aXZhdGlvblZhbHVlIiwiU1RPUkFHRV9LRVlTIiwiSVNfTE9DQUxMWV9BQ1RJVkFURUQiLCJ1cmkiLCJjYW5BY2Nlc3MiLCJ1c2VySW5mbyIsInVzZXJJbmZvSlNPTiIsIlVTRVJfSU5GTyIsInBhcnNlIiwiaWQiLCJkZXZpY2VDb2RlIiwiREVWSUNFX0lEIiwiQVBQIiwiTkFNRSIsIlZFUlNJT04iLCJNQVhfQ0xJQ0tTX1BFUl9CQVRDSCIsIlNZTkNfSU5URVJWQUwiLCJSQU5LX0xJTUlUIiwiUEVORElOR19DTElDS1MiLCJMQVNUX1NZTkNfVElNRSIsIlRPVEFMX0NMSUNLUyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJfYXV0aEd1YXJkIiwic3RvcmFnZSIsInRpbWUiLCJwZW5kaW5nQ2xpY2tzIiwicGV0SW1hZ2UiLCJjaGVzdHMiLCJjbGFpbWVkIiwicmVmcmVzaFRpbWVzdGFtcCIsInRpbWVyRGlzcGxheSIsImlzSW5pdGlhbGl6ZWQiLCJvbkluaXQiLCJndWFyZFJlc3VsdCIsImF1dGhHdWFyZCIsImxvYWRJbml0aWFsU3RhdGUiLCJ1cGRhdGVUaW1lIiwic2V0SW50ZXJ2YWwiLCJiaW5kIiwidXBkYXRlQ2hlc3RUaW1lcnMiLCJwZW5kaW5nQ2xpY2tzRGF0YSIsInBhcnNlSW50IiwidG90YWxfY2xpY2tzIiwidG9TdHJpbmciLCJsb2FkQ2hlc3RTdGF0ZXMiLCJjaGVzdERhdGEiLCJsb2FkZWRDaGVzdHMiLCJtYXAiLCJjaGVzdCIsInJlbWFpbmluZ1RpbWUiLCJNYXRoIiwibWF4IiwiRGF0ZSIsIm5vdyIsInNhdmVDaGVzdFN0YXRlcyIsImhvdXJzIiwiZ2V0SG91cnMiLCJwYWRTdGFydCIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwibmVlZHNTYXZlIiwiaW5kZXgiLCJmb3JtYXRUaW1lIiwic2Vjb25kcyIsImZsb29yIiwicmVtYWluaW5nU2Vjb25kcyIsImluY3JlbWVudENsaWNrIiwicmFuZG9tSW1hZ2UiLCJyYW5kb20iLCJzZXRUaW1lb3V0IiwiY2xhaW1DaGVzdCIsInJld2FyZCIsInByb21wdCIsInNob3dUb2FzdCIsImR1cmF0aW9uIiwiY2xpY2tzVG9TeW5jIiwib3Blbk1vcmUiLCJyb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUNBLElBQUFBLFVBQUFDLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFDLFdBQUFGLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFFLFdBQUFILHVCQUFBQyxlQUFBO3dCQUNBLElBQUFHLFdBQUFKLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFJLFVBQUFDLG9CQUFBO3dCQUFxQyxTQUFBTix1QkFBQU8sQ0FBQTs0QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7Z0NBQUFFLFNBQUFGOzRCQUFBO3dCQUFBO3dCQUFBLFNBQUFHLFFBQUFILENBQUEsRUFBQUksQ0FBQTs0QkFBQSxJQUFBQyxJQUFBQyxPQUFBQyxJQUFBLENBQUFQOzRCQUFBLElBQUFNLE9BQUFFLHFCQUFBO2dDQUFBLElBQUFDLElBQUFILE9BQUFFLHFCQUFBLENBQUFSO2dDQUFBSSxLQUFBSyxDQUFBQSxJQUFBQSxFQUFBQyxNQUFBLFVBQUFOLENBQUE7b0NBQUEsT0FBQUUsT0FBQUssd0JBQUEsQ0FBQVgsR0FBQUksR0FBQVEsVUFBQTtnQ0FBQSxLQUFBUCxFQUFBUSxJQUFBLENBQUFDLEtBQUEsQ0FBQVQsR0FBQUk7NEJBQUE7NEJBQUEsT0FBQUo7d0JBQUE7d0JBQUEsU0FBQVUsY0FBQWYsQ0FBQTs0QkFBQSxRQUFBSSxJQUFBLEdBQUFBLElBQUFZLFVBQUFDLE1BQUEsRUFBQWIsSUFBQTtnQ0FBQSxJQUFBQyxJQUFB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