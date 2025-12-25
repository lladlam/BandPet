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
                                ]
                            },
                            onInit () {
                                this.updateTime();
                                this.loadInitialState();
                                setInterval(this.syncClicks.bind(this), _config.CONFIG.APP.SYNC_INTERVAL);
                                setInterval(this.updateTime, 5000);
                                setInterval(this.updateChestTimers.bind(this), 1000);
                            },
                            async loadInitialState () {
                                _system2.default.get({
                                    key: _config.CONFIG.STORAGE_KEYS.PENDING_CLICKS,
                                    success: (data)=>{
                                        this.pendingClicks = parseInt(data) || 0;
                                    }
                                });
                                _system2.default.get({
                                    key: _config.CONFIG.STORAGE_KEYS.TOTAL_CLICKS,
                                    success: (data)=>{
                                        this.clickCount = parseInt(data) || 0;
                                    }
                                });
                                try {
                                    const userInfoResult = await _system2.default.get({
                                        key: _config.CONFIG.STORAGE_KEYS.USER_INFO
                                    });
                                    if (userInfoResult.value) {
                                        const userInfo = JSON.parse(userInfoResult.value);
                                        if (userInfo && userInfo.id) this.petName = userInfo.pet_name || '(无名)';
                                    }
                                } catch (e) {
                                    console.error("Error loading user info on init:", e);
                                }
                                this.loadChestStates();
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
                                if (0 === this.pendingClicks) return;
                                const guardResult = await _authGuard.default.checkNetworkAccess();
                                if (!guardResult.canAccess) return void _system3.default.showToast({
                                    message: guardResult.message,
                                    duration: 3000
                                });
                                const userId = guardResult.userInfo.id;
                                const result = await _apiService.default.syncClicks(userId, this.pendingClicks);
                                if (result.success) {
                                    this.pendingClicks = 0;
                                    _system2.default.set({
                                        key: _config.CONFIG.STORAGE_KEYS.PENDING_CLICKS,
                                        value: '0'
                                    });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpblxcaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvYXBpLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2F1dGgtZ3VhcmQuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL0JhbmRQZXQvc3JjL21haW4vaW5kZXgudXgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBpLXNlcnZpY2UuanNcbmltcG9ydCBmZXRjaCBmcm9tICdAc3lzdGVtLmZldGNoJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQHN5c3RlbS5zdG9yYWdlJztcbmltcG9ydCBwcm9tcHQgZnJvbSAnQHN5c3RlbS5wcm9tcHQnO1xuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25maWcuanMnO1xuXG5jbGFzcyBBcGlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iYXNlSGVhZGVycyA9IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAvLyDmiYvnjq/kuI3pnIDopoEgQVBJIEtleSDpqozor4FcbiAgICB9XG4gIH1cblxuICAvLyDpgJrnlKjor7fmsYLmlrnms5UgLSDkv67mlLkgVVJMIOS4uiBIVFRQXG4gIGFzeW5jIHJlcXVlc3QoZW5kcG9pbnQsIG1ldGhvZCA9ICdQT1NUJywgZGF0YSA9IG51bGwpIHtcbiAgICAvLyDph43opoHvvJrmlLnkuLogSFRUUCDljY/orq5cbiAgICBjb25zdCB1cmwgPSBgaHR0cDovL2pxdWJ5cW5oZ3l4YXpwbnBqeXFmLnN1cGFiYXNlLmNvL2Z1bmN0aW9ucy92MS8ke2VuZHBvaW50fWBcbiAgICBcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgdXJsLFxuICAgICAgbWV0aG9kLFxuICAgICAgaGVhZGVyOiB0aGlzLmJhc2VIZWFkZXJzLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbidcbiAgICB9XG5cbiAgICBpZiAoZGF0YSkge1xuICAgICAgb3B0aW9ucy5kYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmV0Y2guZmV0Y2goe1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUgPj0gMjAwICYmIHJlc3BvbnNlLmNvZGUgPCAzMDApIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2VEYXRhKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBIVFRQIEVycm9yOiAke3Jlc3BvbnNlLmNvZGV9YCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgSFRUUCAke3Jlc3BvbnNlLmNvZGV9OiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlRGF0YSl9YCkpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAoZXJyb3IsIGNvZGUpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBSZXF1ZXN0IEZhaWxlZDogJHtjb2RlfWAsIGVycm9yKTtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZDogJHtlcnJvci5kYXRhfWApKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvLyDojrflj5bmjpLooYzmppxcbiAgYXN5bmMgZ2V0UmFua2luZ3MobGltaXQgPSAxMCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2JyaWdodC1yZXNwb25kZXInLCAnUE9TVCcsIHtcbiAgICAgICAgYWN0aW9uOiAnZ2V0X3JhbmtpbmdzJyxcbiAgICAgICAgbGltaXQ6IGxpbWl0XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgcmFua2luZ3M6IHJlc3VsdC5yYW5raW5ncyB8fCBbXVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfojrflj5bmjpLooYzmppzlpLHotKU6JywgZXJyb3IpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgcmFua2luZ3M6IFtdLFxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIOS4iuaKpeeCueWHu+asoeaVsFxuICBhc3luYyBzeW5jQ2xpY2tzKHVzZXJJZCwgY2xpY2tDb3VudCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLnJlcXVlc3QoJ2JyaWdodC1yZXNwb25kZXInLCAnUE9TVCcsIHtcbiAgICAgICAgYWN0aW9uOiAnc3luY19jbGlja3MnLFxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgICAgIGNsaWNrX2NvdW50OiBjbGlja0NvdW50XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S4iuaKpeeCueWHu+asoeaVsOWksei0pTonLCBlcnJvcilcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIOajgOafpeWuoOeJqeWQjeaYr+WQpuWPr+eUqFxuICBhc3luYyBjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkocGV0TmFtZSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2JyaWdodC1yZXNwb25kZXInLCAnUE9TVCcsIHtcbiAgICAgICAgYWN0aW9uOiAnY2hlY2tfcGV0X25hbWUnLFxuICAgICAgICBwZXRfbmFtZTogcGV0TmFtZVxuICAgICAgfSk7XG4gICAgICAvLyDlgYforr7mnI3liqHlmajov5Tlm54geyBpc0F2YWlsYWJsZTogdHJ1ZS9mYWxzZSB9XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCAuLi5yZXN1bHQgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5qOA5p+l5a6g54mp5ZCN5Y+v55So5oCn5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSwgaXNBdmFpbGFibGU6IGZhbHNlIH07XG4gICAgfVxuICB9XG5cbiAgLy8g5L+u5pS55a6g54mp5ZCNXG4gIGFzeW5jIHNldFBldE5hbWUodXNlcklkLCBuZXdOYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdzZXRfcGV0X25hbWUnLFxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgICAgIG5ld19uYW1lOiBuZXdOYW1lXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S/ruaUueWuoOeJqeWQjeWksei0pTonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cblxuICAvLyDpooTmv4DmtLvmo4Dmn6VcbiAgYXN5bmMgY2hlY2tEZXZpY2VSZWdpc3RyYXRpb24oZGV2aWNlSWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdicmlnaHQtcmVzcG9uZGVyJywgJ1BPU1QnLCB7XG4gICAgICAgIGFjdGlvbjogJ2NoZWNrX3JlZ2lzdHJhdGlvbicsXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWRcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ+mihOa/gOa0u+ajgOafpeaIkOWKnzonLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+mihOa/gOa0u+ajgOafpeaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cblxuICAvLyDms6jlhozorr7lpIflubbojrflj5bnlKjmiLdJRFxuICBhc3luYyByZWdpc3RlckFuZEdldFVzZXJJZChkZXZpY2VJZCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2JyaWdodC1yZXNwb25kZXInLCAnUE9TVCcsIHtcbiAgICAgICAgYWN0aW9uOiAncmVnaXN0ZXJfZGV2aWNlX2FuZF9nZXRfaWQnLFxuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkXG4gICAgICB9KTtcbiAgICAgIC8vIOWBh+iuvuacjeWKoeWZqOaIkOWKn+aXtui/lOWbniB7IHN1Y2Nlc3M6IHRydWUsIHVzZXJJbmZvOiB7IGlkOiAnLi4uJywgLi4uIH0gfVxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICBjb25zb2xlLmxvZygn5rOo5YaM6K6+5aSH5bm26I635Y+W55So5oi3SUTmiJDlip86JywgcmVzdWx0LnVzZXJJbmZvKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdXNlckluZm86IHJlc3VsdC51c2VySW5mbyB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcign6I635Y+W55So5oi3SUTlpLHotKU6JywgcmVzdWx0ID8gcmVzdWx0LmVycm9yIDogJ+acquefpemUmeivrycpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IChyZXN1bHQgPyByZXN1bHQuZXJyb3IgOiAn5pyN5Yqh5Zmo5pyq6L+U5Zue5oiQ5Yqf54q25oCBJykgfTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5rOo5YaM5oiW6I635Y+W55So5oi3SUTml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICB9XG5cbiAgLy8g6aqM6K+B55So5oi3SUTlubbmgaLlpI3mlbDmja5cbiAgYXN5bmMgdmVyaWZ5VXNlcklkQW5kUmVzdG9yZShkZXZpY2VJZCwgdXNlcklkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICd2ZXJpZnlfdXNlcl9pZF9hbmRfcmVzdG9yZScsXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWQsXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZFxuICAgICAgfSk7XG4gICAgICAvLyDlgYforr7mnI3liqHlmajmiJDlip/ml7bov5Tlm54geyBzdWNjZXNzOiB0cnVlLCB1c2VySW5mbzogeyAuLi4gfSB9XG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVzZXJJbmZvOiByZXN1bHQudXNlckluZm8gfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogKHJlc3VsdCA/IHJlc3VsdC5lcnJvciA6ICfpqozor4HlpLHotKUnKSB9O1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfpqozor4HnlKjmiLdJROaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwaVNlcnZpY2UoKVxuIiwiLy8gc3JjL2NvbW1vbi9qcy9hdXRoLWd1YXJkLmpzXG5cbmltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XG5pbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcbmltcG9ydCBBcGlTZXJ2aWNlIGZyb20gJy4vYXBpLXNlcnZpY2UuanMnO1xuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25maWcuanMnO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgdXNlciBoYXMgdGhlIG5lY2Vzc2FyeSBhY3RpdmF0aW9uIGFuZCBjcmVkZW50aWFscyB0byBhY2Nlc3MgYSBuZXR3b3JrIGZlYXR1cmUuXG4gKiBUaGlzIGZ1bmN0aW9uIGltcGxlbWVudHMgdGhlIGZvbGxvd2luZyBsb2dpYzpcbiAqIDEuIENoZWNrcyBmb3IgYSBsb2NhbCBhY3RpdmF0aW9uIGZsYWcuIElmIG5vdCBwcmVzZW50LCByZWRpcmVjdHMgdG8gdGhlIGFjdGl2YXRpb24gcGFnZS5cbiAqIDIuIElmIGxvY2FsbHkgYWN0aXZhdGVkLCBjaGVja3MgZm9yIHN0b3JlZCB1c2VyIGluZm8gd2l0aCBhIHNlcnZlci1zaWRlIElELlxuICogMy4gSWYgdXNlciBpbmZvIGlzIG1pc3NpbmcsIGl0IGF0dGVtcHRzIHRvIGZldGNoIGl0IGZyb20gdGhlIHNlcnZlciB1c2luZyB0aGUgc3RvcmVkIGRldmljZSBjb2RlLlxuICogNC4gUmV0dXJucyB0aGUgYWNjZXNzIHN0YXR1cyBhbmQgdXNlciBpbmZvLlxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gQW4gb2JqZWN0IHdpdGg6IHsgY2FuQWNjZXNzOiBib29sZWFuLCB1c2VySW5mbzogT2JqZWN0fG51bGwsIG1lc3NhZ2U6IHN0cmluZyB9XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrTmV0d29ya0FjY2VzcygpIHtcbiAgdHJ5IHtcbiAgICAvLyAxLiBDaGVjayBmb3IgbG9jYWwgYWN0aXZhdGlvblxuICAgIGNvbnN0IGxvY2FsQWN0aXZhdGlvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0KHsga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLklTX0xPQ0FMTFlfQUNUSVZBVEVEIH0pO1xuICAgIGlmIChsb2NhbEFjdGl2YXRpb24udmFsdWUgIT09ICd0cnVlJykge1xuICAgICAgcm91dGVyLnB1c2goeyB1cmk6ICdhY3RpdmF0ZScgfSk7XG4gICAgICByZXR1cm4geyBjYW5BY2Nlc3M6IGZhbHNlLCB1c2VySW5mbzogbnVsbCwgbWVzc2FnZTogJ+iuvuWkh+acqua/gOa0u++8jOivt+WFiOa/gOa0u+OAgicgfTtcbiAgICB9XG5cbiAgICAvLyAyLiBDaGVjayBmb3IgZXhpc3RpbmcgVXNlciBJRFxuICAgIGNvbnN0IHVzZXJJbmZvUmVzdWx0ID0gYXdhaXQgc3RvcmFnZS5nZXQoeyBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPIH0pO1xuICAgIGlmICh1c2VySW5mb1Jlc3VsdC52YWx1ZSkge1xuICAgICAgY29uc3QgdXNlckluZm8gPSBKU09OLnBhcnNlKHVzZXJJbmZvUmVzdWx0LnZhbHVlKTtcbiAgICAgIGlmICh1c2VySW5mbyAmJiB1c2VySW5mby5pZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnQXV0aEd1YXJkOiBVc2VyIElEIGZvdW5kIGluIHN0b3JhZ2UuJyk7XG4gICAgICAgIHJldHVybiB7IGNhbkFjY2VzczogdHJ1ZSwgdXNlckluZm86IHVzZXJJbmZvLCBtZXNzYWdlOiAn6aqM6K+B6YCa6L+HJyB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDMuIFVzZXIgSUQgaXMgbWlzc2luZywgdHJ5IHRvIGZldGNoIGl0XG4gICAgY29uc29sZS5sb2coJ0F1dGhHdWFyZDogVXNlciBJRCBub3QgZm91bmQsIGF0dGVtcHRpbmcgdG8gZmV0Y2ggZnJvbSBzZXJ2ZXIuJyk7XG4gICAgXG4gICAgLy8gV2UgbmVlZCB0aGUgZGV2aWNlIGNvZGUgdG8gZ2V0IHRoZSB1c2VyIElEXG4gICAgY29uc3QgZGV2aWNlQ29kZVJlc3VsdCA9IGF3YWl0IHN0b3JhZ2UuZ2V0KHsga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLkRFVklDRV9JRCB9KTtcbiAgICBpZiAoIWRldmljZUNvZGVSZXN1bHQudmFsdWUpIHtcbiAgICAgICAgLy8gVGhpcyBjYXNlIGlzIHVubGlrZWx5IGlmIGxvY2FsIGFjdGl2YXRpb24gd29ya2VkLCBidXQgZ29vZCB0byBoYW5kbGUuXG4gICAgICAgIHJvdXRlci5wdXNoKHsgdXJpOiAnYWN0aXZhdGUnIH0pO1xuICAgICAgICByZXR1cm4geyBjYW5BY2Nlc3M6IGZhbHNlLCB1c2VySW5mbzogbnVsbCwgbWVzc2FnZTogJ+aXoOazleaJvuWIsOiuvuWkh+egge+8jOivt+mHjeaWsOa/gOa0u+OAgicgfTtcbiAgICB9XG4gICAgY29uc3QgZGV2aWNlQ29kZSA9IGRldmljZUNvZGVSZXN1bHQudmFsdWU7XG5cbiAgICBjb25zdCBhcGlSZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLnJlZ2lzdGVyQW5kR2V0VXNlcklkKGRldmljZUNvZGUpO1xuXG4gICAgaWYgKGFwaVJlc3VsdC5zdWNjZXNzICYmIGFwaVJlc3VsdC51c2VySW5mbyAmJiAoYXBpUmVzdWx0LnVzZXJJbmZvLmlkIHx8IGFwaVJlc3VsdC51c2VySW5mby51c2VyX251bWJlcikpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdBdXRoR3VhcmQ6IFN1Y2Nlc3NmdWxseSBmZXRjaGVkIG5ldyBVc2VyIElELicpO1xuICAgICAgXG4gICAgICBjb25zdCB1c2VySW5mb1RvU2F2ZSA9IHtcbiAgICAgICAgaWQ6IGFwaVJlc3VsdC51c2VySW5mby5pZCB8fCBhcGlSZXN1bHQudXNlckluZm8udXNlcl9udW1iZXIsXG4gICAgICAgIHVzZXJfbnVtYmVyOiBhcGlSZXN1bHQudXNlckluZm8udXNlcl9udW1iZXIsXG4gICAgICAgIHBldF9uYW1lOiBhcGlSZXN1bHQudXNlckluZm8ucGV0X25hbWUsXG4gICAgICAgIHRvdGFsX2NsaWNrczogYXBpUmVzdWx0LnVzZXJJbmZvLnRvdGFsX2NsaWNrcyB8fCAwXG4gICAgICB9O1xuXG4gICAgICAvLyBTYXZlIHRoZSBuZXdseSBmZXRjaGVkIHVzZXIgaW5mb1xuICAgICAgYXdhaXQgc3RvcmFnZS5zZXQoeyBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPLCB2YWx1ZTogSlNPTi5zdHJpbmdpZnkodXNlckluZm9Ub1NhdmUpIH0pO1xuICAgICAgcmV0dXJuIHsgY2FuQWNjZXNzOiB0cnVlLCB1c2VySW5mbzogdXNlckluZm9Ub1NhdmUsIG1lc3NhZ2U6ICfnlKjmiLdJROiOt+WPluaIkOWKnycgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ0F1dGhHdWFyZDogRmFpbGVkIHRvIGZldGNoIFVzZXIgSUQuJyk7XG4gICAgICByZXR1cm4geyBjYW5BY2Nlc3M6IGZhbHNlLCB1c2VySW5mbzogbnVsbCwgbWVzc2FnZTogJ+iOt+WPlueUqOaIt0lE5aSx6LSl77yM6K+35qOA5p+l572R57uc5ZCO6YeN6K+V44CCJyB9O1xuICAgIH1cblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignQXV0aEd1YXJkOiBFcnJvciBkdXJpbmcgY2hlY2tOZXR3b3JrQWNjZXNzJywgZSk7XG4gICAgcmV0dXJuIHsgY2FuQWNjZXNzOiBmYWxzZSwgdXNlckluZm86IG51bGwsIG1lc3NhZ2U6IGDlj5HnlJ/plJnor686ICR7ZS5tZXNzYWdlfWAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNoZWNrTmV0d29ya0FjY2Vzc1xufTtcbiIsIi8vIGNvbmZpZy5qc1xuZXhwb3J0IGNvbnN0IENPTkZJRyA9IHtcbiAgLy8g5rOo5oSP77yaVVJMIOWJjee8gOWcqCBhcGktc2VydmljZS5qcyDkuK3noaznvJbnoIHkuoZcbiAgLy8g6L+Z6YeM5LiN5YaN6ZyA6KaB6YWN572uXG4gIFxuICAvLyDlupTnlKjphY3nva5cbiAgQVBQOiB7XG4gICAgTkFNRTogJ0JhbmRQZXQnLFxuICAgIFZFUlNJT046ICcxLjAuMCcsXG4gICAgTUFYX0NMSUNLU19QRVJfQkFUQ0g6IDUwLFxuICAgIFNZTkNfSU5URVJWQUw6IDMwMDAwMCxcbiAgICBSQU5LX0xJTUlUOiAxMFxuICB9LFxuICBcbiAgLy8g5a2Y5YKo6ZSu5ZCNXG4gIFNUT1JBR0VfS0VZUzoge1xuICAgIElTX0xPQ0FMTFlfQUNUSVZBVEVEOiAnaXNfbG9jYWxseV9hY3RpdmF0ZWQnLFxuICAgIERFVklDRV9JRDogJ2RldmljZV9pZCcsXG4gICAgVVNFUl9JTkZPOiAndXNlcl9pbmZvJyxcbiAgICBQRU5ESU5HX0NMSUNLUzogJ3BlbmRpbmdfY2xpY2tzJyxcbiAgICBMQVNUX1NZTkNfVElNRTogJ2xhc3Rfc3luY190aW1lJyxcbiAgICBUT1RBTF9DTElDS1M6ICd0b3RhbF9jbGlja3MnXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjYuOFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS42LjhcIjsiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8dGV4dCBjbGFzcz1cInRpbWVcIj57eyB0aW1lIH19PC90ZXh0PlxuICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNoZXN0XCIgb25jbGljaz1cImNsYWltQ2hlc3QoMClcIj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwiY2hlc3QtbGFiZWxcIj7lrp3nrrE8L3RleHQ+XG4gICAgICA8dGV4dCBzaG93PVwie3shY2hlc3RzWzBdLmNsYWltZWR9fVwiIGNsYXNzPVwiY2hlc3QtY29zdFwiPuiKsei0uTogMTAwMDwvdGV4dD5cbiAgICAgIDx0ZXh0IHNob3c9XCJ7e2NoZXN0c1swXS5jbGFpbWVkfX1cIiBjbGFzcz1cImNoZXN0LXRpbWVyXCI+e3sgY2hlc3RzWzBdLnRpbWVyRGlzcGxheSB9fTwvdGV4dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY2hlc3RcIiBvbmNsaWNrPVwiY2xhaW1DaGVzdCgxKVwiPlxuICAgICAgPHRleHQgY2xhc3M9XCJjaGVzdC1sYWJlbFwiPuWuneeusTwvdGV4dD5cbiAgICAgIDx0ZXh0IHNob3c9XCJ7eyFjaGVzdHNbMV0uY2xhaW1lZH19XCIgY2xhc3M9XCJjaGVzdC1jb3N0XCI+6Iqx6LS5OiAxMDAwPC90ZXh0PlxuICAgICAgPHRleHQgc2hvdz1cInt7Y2hlc3RzWzFdLmNsYWltZWR9fVwiIGNsYXNzPVwiY2hlc3QtdGltZXJcIj57eyBjaGVzdHNbMV0udGltZXJEaXNwbGF5IH19PC90ZXh0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwZXQtY29udGFpbmVyXCIgb25jbGljaz1cImluY3JlbWVudENsaWNrXCI+XG4gICAgICA8aW1hZ2UgY2xhc3M9XCJwZXQtaW1hZ2VcIiBzcmM9XCJ7eyBwZXRJbWFnZSB9fVwiPjwvaW1hZ2U+XG4gICAgICA8dGV4dCBjbGFzcz1cInBldC1uYW1lXCI+e3sgcGV0TmFtZSB9fTwvdGV4dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYm90dG9tLWJhclwiPlxuPGltYWdlIHNyYz1cIi4uL2NvbW1vbi9tb3JlLnBuZ1wiIGNsYXNzPVwibW9yZS1idXR0b25cIiBvbmNsaWNrPVwib3Blbk1vcmVcIj48L2ltYWdlPlxuICAgICAgPGRpdiBjbGFzcz1cImNsaWNrLWNvdW50ZXJcIj5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJjbGljay1jb3VudGVyLXRleHRcIj57eyBjbGlja0NvdW50IH19PC90ZXh0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAuY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgfVxuICAudGltZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTRweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gIH1cbiAgLmxlZnQtY2hlc3QsIC5yaWdodC1jaGVzdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDVweDtcbiAgICBoZWlnaHQ6IDEwNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQUE1MjA7IC8qIEdvbGRlblJvZCAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDEwLjVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogN3B4O1xuICB9XG4gIC5sZWZ0LWNoZXN0IHtcbiAgICB0b3A6IDcwcHg7XG4gICAgbGVmdDogMTRweDtcbiAgfVxuICAucmlnaHQtY2hlc3Qge1xuICAgIHRvcDogNzBweDtcbiAgICByaWdodDogMTRweDtcbiAgfVxuICAuY2hlc3QtcHJvZ3Jlc3Mge1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgLmNoZXN0LWxhYmVsIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICB9XG4gIC5jaGVzdC1jb3N0IHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDE2LjhweDtcbiAgfVxuICAuY2hlc3QtdGltZXIge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMTYuOHB4O1xuICB9XG4gIC5wZXQtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDIxMHB4O1xuICAgIGhlaWdodDogMjEwcHg7XG4gIH1cbiAgLnBldC1pbWFnZSB7XG4gICAgd2lkdGg6IDIxMHB4OyAvKiAxNDAgKiAxLjUgKi9cbiAgICBoZWlnaHQ6IDIxMHB4OyAvKiAxNDAgKiAxLjUgKi9cbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG4gIC5wZXQtbmFtZSB7XG4gICAgY29sb3I6ICM4ODg4ODg7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7IC8qIEluY3JlYXNlZCBmcm9tIDEwcHggdG8gMjBweCAqL1xuICB9XG4gIC5ib3R0b20tYmFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAyMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLm1vcmUtYnV0dG9uIHtcbiAgICB3aWR0aDogNTZweDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLm1vcmUtYnV0dG9uLXRleHQge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgfVxuICAuY2xpY2stY291bnRlciB7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuY2xpY2stY291bnRlci10ZXh0IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xuICBpbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xuICBpbXBvcnQgcHJvbXB0IGZyb20gJ0BzeXN0ZW0ucHJvbXB0JztcbiAgaW1wb3J0IEFwaVNlcnZpY2UgZnJvbSAnLi4vY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzJztcbiAgaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi4vY29tbW9uL2pzL2NvbmZpZy5qcyc7XG4gIGltcG9ydCBhdXRoR3VhcmQgZnJvbSAnLi4vY29tbW9uL2pzL2F1dGgtZ3VhcmQuanMnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhOiB7XG4gICAgICB0aW1lOiAnMDA6MDAnLFxuICAgICAgcGV0TmFtZTogJyjml6DlkI0pJyxcbiAgICAgIGNsaWNrQ291bnQ6IDAsXG4gICAgICBwZW5kaW5nQ2xpY2tzOiAwLFxuICAgICAgcGV0SW1hZ2U6ICcvY29tbW9uL1JhMC5wbmcnLFxuICAgICAgY2hlc3RzOiBbXG4gICAgICAgIHsgY2xhaW1lZDogZmFsc2UsIHJlZnJlc2hUaW1lc3RhbXA6IDAsIHRpbWVyRGlzcGxheTogJ+iKsei0uTogMTAwMCcgfSxcbiAgICAgICAgeyBjbGFpbWVkOiBmYWxzZSwgcmVmcmVzaFRpbWVzdGFtcDogMCwgdGltZXJEaXNwbGF5OiAn6Iqx6LS5OiAxMDAwJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICBvbkluaXQoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICAgIHRoaXMubG9hZEluaXRpYWxTdGF0ZSgpO1xuICAgICAgXG4gICAgICAvLyBTZXQgdXAgaW50ZXJ2YWxzIHVuY29uZGl0aW9uYWxseS4gVGhlIGd1YXJkIGluc2lkZSBzeW5jQ2xpY2tzIHdpbGwgaGFuZGxlIGxvZ2ljLlxuICAgICAgc2V0SW50ZXJ2YWwodGhpcy5zeW5jQ2xpY2tzLmJpbmQodGhpcyksIENPTkZJRy5BUFAuU1lOQ19JTlRFUlZBTCk7XG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVRpbWUsIDUwMDApO1xuICAgICAgc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVDaGVzdFRpbWVycy5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICB9LFxuICAgIGFzeW5jIGxvYWRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIC8vIExvYWQgbm9uLXVzZXItc3BlY2lmaWMgZGF0YVxuICAgICAgICBzdG9yYWdlLmdldCh7XG4gICAgICAgICAgICBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuUEVORElOR19DTElDS1MsXG4gICAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4geyB0aGlzLnBlbmRpbmdDbGlja3MgPSBwYXJzZUludChkYXRhKSB8fCAwOyB9XG4gICAgICAgIH0pO1xuICAgICAgICBzdG9yYWdlLmdldCh7XG4gICAgICAgICAgICBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuVE9UQUxfQ0xJQ0tTLFxuICAgICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHsgdGhpcy5jbGlja0NvdW50ID0gcGFyc2VJbnQoZGF0YSkgfHwgMDsgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFsc28gdHJ5IHRvIGxvYWQgdXNlci1zcGVjaWZpYyBkYXRhIGlmIGF2YWlsYWJsZSwgYnV0IGRvbid0IGdhdGUgYW55dGhpbmdcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvUmVzdWx0ID0gYXdhaXQgc3RvcmFnZS5nZXQoeyBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJJbmZvUmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckluZm8gPSBKU09OLnBhcnNlKHVzZXJJbmZvUmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlckluZm8gJiYgdXNlckluZm8uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXROYW1lID0gdXNlckluZm8ucGV0X25hbWUgfHwgJyjml6DlkI0pJztcbiAgICAgICAgICAgICAgICAgICAgLy8gUG90ZW50aWFsbHkgbG9hZCBzZXJ2ZXItc3luY2VkIGNsaWNrQ291bnQgaGVyZSBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jbGlja0NvdW50ID0gdXNlckluZm8uY2xpY2tfY291bnQgfHwgdGhpcy5jbGlja0NvdW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIHVzZXIgaW5mbyBvbiBpbml0OlwiLCBlKX1cblxuICAgICAgICB0aGlzLmxvYWRDaGVzdFN0YXRlcygpO1xuICAgIH0sXG4gICAgbG9hZENoZXN0U3RhdGVzKCkge1xuICAgICAgc3RvcmFnZS5nZXQoe1xuICAgICAgICBrZXk6ICdjaGVzdFN0YXRlcycsXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvYWRlZENoZXN0cyA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmNoZXN0cyA9IGxvYWRlZENoZXN0cy5tYXAoY2hlc3QgPT4ge1xuICAgICAgICAgICAgICBpZiAoY2hlc3QucmVmcmVzaFRpbWVzdGFtcCA+IDAgJiYgY2hlc3QuY2xhaW1lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSBNYXRoLm1heCgwLCBjaGVzdC5yZWZyZXNoVGltZXN0YW1wIC0gRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlbWFpbmluZ1RpbWUgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgY2hlc3QuY2xhaW1lZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgY2hlc3QucmVmcmVzaFRpbWVzdGFtcCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBjaGVzdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzYXZlQ2hlc3RTdGF0ZXMoKSB7XG4gICAgICBzdG9yYWdlLnNldCh7IGtleTogJ2NoZXN0U3RhdGVzJywgdmFsdWU6IEpTT04uc3RyaW5naWZ5KHRoaXMuY2hlc3RzKSB9KTtcbiAgICB9LFxuICAgIHVwZGF0ZVRpbWUoKSB7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgaG91cnMgPSBub3cuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICBjb25zdCBtaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICB0aGlzLnRpbWUgPSBgJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfSxcbiAgICB1cGRhdGVDaGVzdFRpbWVycygpIHtcbiAgICAgIHRoaXMuY2hlc3RzLmZvckVhY2goKGNoZXN0LCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoY2hlc3QuY2xhaW1lZCAmJiBjaGVzdC5yZWZyZXNoVGltZXN0YW1wID4gMCkge1xuICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSBNYXRoLm1heCgwLCBjaGVzdC5yZWZyZXNoVGltZXN0YW1wIC0gRGF0ZS5ub3coKSk7XG4gICAgICAgICAgdGhpcy5jaGVzdHNbaW5kZXhdLnRpbWVyRGlzcGxheSA9IHRoaXMuZm9ybWF0VGltZShyZW1haW5pbmdUaW1lIC8gMTAwMCk7XG4gICAgICAgICAgaWYgKHJlbWFpbmluZ1RpbWUgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5jaGVzdHNbaW5kZXhdLmNsYWltZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2hlc3RzW2luZGV4XS5yZWZyZXNoVGltZXN0YW1wID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2F2ZUNoZXN0U3RhdGVzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGZvcm1hdFRpbWUoc2Vjb25kcykge1xuICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ1NlY29uZHMgPSBNYXRoLmZsb29yKHNlY29uZHMgJSA2MCk7XG4gICAgICByZXR1cm4gYCR7bWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9OiR7cmVtYWluaW5nU2Vjb25kcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9YDtcbiAgICB9LFxuICAgIGluY3JlbWVudENsaWNrKCkge1xuICAgICAgdGhpcy5jbGlja0NvdW50Kys7XG4gICAgICB0aGlzLnBlbmRpbmdDbGlja3MrKztcbiAgICAgIHN0b3JhZ2Uuc2V0KHsga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLlBFTkRJTkdfQ0xJQ0tTLCB2YWx1ZTogdGhpcy5wZW5kaW5nQ2xpY2tzLnRvU3RyaW5nKCkgfSk7XG4gICAgICBzdG9yYWdlLnNldCh7IGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5UT1RBTF9DTElDS1MsIHZhbHVlOiB0aGlzLmNsaWNrQ291bnQudG9TdHJpbmcoKSB9KTtcblxuICAgICAgLy8gUmFuZG9tbHkgc3dpdGNoIHBldCBpbWFnZSB0byBSYTEgb3IgUmEyXG4gICAgICBjb25zdCByYW5kb21JbWFnZSA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAnL2NvbW1vbi9SYTEucG5nJyA6ICcvY29tbW9uL1JhMi5wbmcnO1xuICAgICAgdGhpcy5wZXRJbWFnZSA9IHJhbmRvbUltYWdlO1xuXG4gICAgICAvLyBSZXNldCB0byBSYTAgYWZ0ZXIgYSBzaG9ydCBkZWxheVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucGV0SW1hZ2UgPSAnL2NvbW1vbi9SYTAucG5nJztcbiAgICAgIH0sIDIwMCk7XG4gICAgfSxcbiAgICBjbGFpbUNoZXN0KGluZGV4KSB7XG4gICAgICBjb25zdCBjaGVzdCA9IHRoaXMuY2hlc3RzW2luZGV4XTtcbiAgICAgIGlmIChjaGVzdC5jbGFpbWVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDaGVzdCBpcyBvbiBjb29sZG93bi4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY2xpY2tDb3VudCA+PSAxMDAwKSB7XG4gICAgICAgIHRoaXMuY2xpY2tDb3VudCAtPSAxMDAwO1xuICAgICAgICBjb25zdCByZXdhcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MDApICsgMTAwO1xuICAgICAgICB0aGlzLmNsaWNrQ291bnQgKz0gcmV3YXJkO1xuICAgICAgICBzdG9yYWdlLnNldCh7IGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5UT1RBTF9DTElDS1MsIHZhbHVlOiB0aGlzLmNsaWNrQ291bnQudG9TdHJpbmcoKSB9KTtcbiAgICAgICAgY29uc29sZS5sb2coYENoZXN0ICR7aW5kZXh9IGNsYWltZWQhIFJld2FyZGVkICR7cmV3YXJkfSBjbGlja3MuYCk7XG4gICAgICAgIHRoaXMuY2hlc3RzW2luZGV4XS5jbGFpbWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jaGVzdHNbaW5kZXhdLnJlZnJlc2hUaW1lc3RhbXAgPSBEYXRlLm5vdygpICsgKDMwICogNjAgKiAxMDAwKTtcbiAgICAgICAgdGhpcy5zYXZlQ2hlc3RTdGF0ZXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdOb3QgZW5vdWdoIGNsaWNrcyB0byBvcGVuIGNoZXN0LicpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgc3luY0NsaWNrcygpIHtcbiAgICAgIGlmICh0aGlzLnBlbmRpbmdDbGlja3MgPT09IDApIHtcbiAgICAgICAgcmV0dXJuOyAvLyBObyBuZWVkIHRvIGNoZWNrIGF1dGggaWYgdGhlcmUncyBub3RoaW5nIHRvIHN5bmNcbiAgICAgIH1cblxuICAgICAgY29uc3QgZ3VhcmRSZXN1bHQgPSBhd2FpdCBhdXRoR3VhcmQuY2hlY2tOZXR3b3JrQWNjZXNzKCk7XG4gICAgICBpZiAoIWd1YXJkUmVzdWx0LmNhbkFjY2Vzcykge1xuICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiBndWFyZFJlc3VsdC5tZXNzYWdlLFxuICAgICAgICAgIGR1cmF0aW9uOiAzMDAwXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbnN0IHVzZXJJZCA9IGd1YXJkUmVzdWx0LnVzZXJJbmZvLmlkO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5zeW5jQ2xpY2tzKHVzZXJJZCwgdGhpcy5wZW5kaW5nQ2xpY2tzKTtcbiAgICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICB0aGlzLnBlbmRpbmdDbGlja3MgPSAwO1xuICAgICAgICBzdG9yYWdlLnNldCh7IGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5QRU5ESU5HX0NMSUNLUywgdmFsdWU6ICcwJyB9KTtcbiAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7IG1lc3NhZ2U6ICfngrnlh7vmrKHmlbDlt7LlkIzmraUnIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7IG1lc3NhZ2U6ICflkIzmraXlpLHotKXvvIzor7fnqI3lkI7ph43or5UnIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgb3Blbk1vcmUoKSB7XG4gICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgIHVyaTogJ21vcmUnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIl9zeXN0ZW0yIiwiX3N5c3RlbTMiLCJfc3lzdGVtNCIsIl9jb25maWciLCJyZXF1aXJlIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0Iiwib3duS2V5cyIsInIiLCJ0IiwiT2JqZWN0Iiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIm8iLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwicHVzaCIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJ2YWx1ZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiaSIsIl90b1ByaW1pdGl2ZSIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIkFwaVNlcnZpY2UiLCJjb25zdHJ1Y3RvciIsImJhc2VIZWFkZXJzIiwicmVxdWVzdCIsImVuZHBvaW50IiwibWV0aG9kIiwiZGF0YSIsInVybCIsIm9wdGlvbnMiLCJoZWFkZXIiLCJyZXNwb25zZVR5cGUiLCJKU09OIiwic3RyaW5naWZ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInJlc3BvbnNlRGF0YSIsImNvZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImZhaWwiLCJnZXRSYW5raW5ncyIsImxpbWl0IiwicmVzdWx0IiwiYWN0aW9uIiwicmFua2luZ3MiLCJtZXNzYWdlIiwic3luY0NsaWNrcyIsInVzZXJJZCIsImNsaWNrQ291bnQiLCJ1c2VyX2lkIiwiY2xpY2tfY291bnQiLCJjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkiLCJwZXROYW1lIiwicGV0X25hbWUiLCJpc0F2YWlsYWJsZSIsInNldFBldE5hbWUiLCJuZXdOYW1lIiwibmV3X25hbWUiLCJjaGVja0RldmljZVJlZ2lzdHJhdGlvbiIsImRldmljZUlkIiwiZGV2aWNlX2lkIiwibG9nIiwicmVnaXN0ZXJBbmRHZXRVc2VySWQiLCJ1c2VySW5mbyIsInZlcmlmeVVzZXJJZEFuZFJlc3RvcmUiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJfYXBpU2VydmljZSIsImNoZWNrTmV0d29ya0FjY2VzcyIsImxvY2FsQWN0aXZhdGlvbiIsImdldCIsImtleSIsIkNPTkZJRyIsIlNUT1JBR0VfS0VZUyIsIklTX0xPQ0FMTFlfQUNUSVZBVEVEIiwidXJpIiwiY2FuQWNjZXNzIiwidXNlckluZm9SZXN1bHQiLCJVU0VSX0lORk8iLCJwYXJzZSIsImlkIiwiZGV2aWNlQ29kZVJlc3VsdCIsIkRFVklDRV9JRCIsImRldmljZUNvZGUiLCJhcGlSZXN1bHQiLCJ1c2VyX251bWJlciIsInVzZXJJbmZvVG9TYXZlIiwidG90YWxfY2xpY2tzIiwic2V0IiwiQVBQIiwiTkFNRSIsIlZFUlNJT04iLCJNQVhfQ0xJQ0tTX1BFUl9CQVRDSCIsIlNZTkNfSU5URVJWQUwiLCJSQU5LX0xJTUlUIiwiUEVORElOR19DTElDS1MiLCJMQVNUX1NZTkNfVElNRSIsIlRPVEFMX0NMSUNLUyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJfYXV0aEd1YXJkIiwidGltZSIsInBlbmRpbmdDbGlja3MiLCJwZXRJbWFnZSIsImNoZXN0cyIsImNsYWltZWQiLCJyZWZyZXNoVGltZXN0YW1wIiwidGltZXJEaXNwbGF5Iiwib25Jbml0IiwidXBkYXRlVGltZSIsImxvYWRJbml0aWFsU3RhdGUiLCJzZXRJbnRlcnZhbCIsImJpbmQiLCJ1cGRhdGVDaGVzdFRpbWVycyIsInN0b3JhZ2UiLCJwYXJzZUludCIsImxvYWRDaGVzdFN0YXRlcyIsImxvYWRlZENoZXN0cyIsIm1hcCIsImNoZXN0IiwicmVtYWluaW5nVGltZSIsIk1hdGgiLCJtYXgiLCJEYXRlIiwibm93Iiwic2F2ZUNoZXN0U3RhdGVzIiwiaG91cnMiLCJnZXRIb3VycyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImluZGV4IiwiZm9ybWF0VGltZSIsInNlY29uZHMiLCJmbG9vciIsInJlbWFpbmluZ1NlY29uZHMiLCJpbmNyZW1lbnRDbGljayIsInJhbmRvbUltYWdlIiwicmFuZG9tIiwic2V0VGltZW91dCIsImNsYWltQ2hlc3QiLCJyZXdhcmQiLCJndWFyZFJlc3VsdCIsImF1dGhHdWFyZCIsInByb21wdCIsInNob3dUb2FzdCIsImR1cmF0aW9uIiwib3Blbk1vcmUiLCJyb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUNBLElBQUFBLFVBQUFDLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFDLFdBQUFGLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFFLFdBQUFILHVCQUFBQyxlQUFBO3dCQUNBLElBQUFHLFdBQUFKLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFJLFVBQUFDLG9CQUFBO3dCQUFxQyxTQUFBTix1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