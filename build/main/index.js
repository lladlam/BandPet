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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpblxcaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvYXBpLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2F1dGgtZ3VhcmQuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL0JhbmRQZXQvc3JjL21haW4vaW5kZXgudXgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBpLXNlcnZpY2UuanNcbmltcG9ydCBmZXRjaCBmcm9tICdAc3lzdGVtLmZldGNoJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQHN5c3RlbS5zdG9yYWdlJztcbmltcG9ydCBwcm9tcHQgZnJvbSAnQHN5c3RlbS5wcm9tcHQnO1xuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25maWcuanMnO1xuXG5jbGFzcyBBcGlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iYXNlSGVhZGVycyA9IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIENPTkZJRy5TVVBBQkFTRS5LRVksXG4gICAgICAnYXBpa2V5JzogQ09ORklHLlNVUEFCQVNFLktFWVxuICAgIH1cbiAgfVxuXG4gIC8vIOmAmueUqOivt+axguaWueazlVxuICBhc3luYyByZXF1ZXN0KGVuZHBvaW50LCBtZXRob2QgPSAnUE9TVCcsIGRhdGEgPSBudWxsKSB7XG4gICAgY29uc3QgdXJsID0gYCR7Q09ORklHLlNVUEFCQVNFLlVSTH0vZnVuY3Rpb25zL3YxLyR7ZW5kcG9pbnR9YFxuICAgIFxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICB1cmwsXG4gICAgICBtZXRob2QsXG4gICAgICBoZWFkZXI6IHRoaXMuYmFzZUhlYWRlcnMsXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xuICAgIH1cblxuICAgIGlmIChkYXRhKSB7XG4gICAgICBvcHRpb25zLmRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmZXRjaC5mZXRjaCh7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XG5cbiAgICAgICAgICBcblxuICAgICAgICAgIGlmIChyZXNwb25zZS5jb2RlID49IDIwMCAmJiByZXNwb25zZS5jb2RlIDwgMzAwKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlRGF0YSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgSFRUUCBFcnJvcjogJHtyZXNwb25zZS5jb2RlfWAsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYEhUVFAgJHtyZXNwb25zZS5jb2RlfTogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZURhdGEpfWApKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogKGVycm9yLCBjb2RlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgUmVxdWVzdCBGYWlsZWQ6ICR7Y29kZX1gLCBlcnJvcik7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgUmVxdWVzdCBmYWlsZWQ6ICR7ZXJyb3IuZGF0YX1gKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLy8g6I635Y+W5o6S6KGM5qacXG4gIGFzeW5jIGdldFJhbmtpbmdzKGxpbWl0ID0gMTApIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdicmlnaHQtcmVzcG9uZGVyJywgJ1BPU1QnLCB7XG4gICAgICAgIGFjdGlvbjogJ2dldF9yYW5raW5ncycsXG4gICAgICAgIGxpbWl0OiBsaW1pdFxuICAgICAgfSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIHJhbmtpbmdzOiByZXN1bHQucmFua2luZ3MgfHwgW11cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign6I635Y+W5o6S6KGM5qac5aSx6LSlOicsIGVycm9yKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIHJhbmtpbmdzOiBbXSxcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyDkuIrmiqXngrnlh7vmrKHmlbBcbiAgYXN5bmMgc3luY0NsaWNrcyh1c2VySWQsIGNsaWNrQ291bnQpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0KCdicmlnaHQtcmVzcG9uZGVyJywgJ1BPU1QnLCB7XG4gICAgICAgIGFjdGlvbjogJ3N5bmNfY2xpY2tzJyxcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxuICAgICAgICBjbGlja19jb3VudDogY2xpY2tDb3VudFxuICAgICAgfSlcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfkuIrmiqXngrnlh7vmrKHmlbDlpLHotKU6JywgZXJyb3IpXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cblxuICAvLyDmo4Dmn6XlrqDnianlkI3mmK/lkKblj6/nlKhcbiAgYXN5bmMgY2hlY2tQZXROYW1lQXZhaWxhYmlsaXR5KHBldE5hbWUpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdicmlnaHQtcmVzcG9uZGVyJywgJ1BPU1QnLCB7XG4gICAgICAgIGFjdGlvbjogJ2NoZWNrX3BldF9uYW1lJyxcbiAgICAgICAgcGV0X25hbWU6IHBldE5hbWVcbiAgICAgIH0pO1xuICAgICAgLy8g5YGH6K6+5pyN5Yqh5Zmo6L+U5ZueIHsgaXNBdmFpbGFibGU6IHRydWUvZmFsc2UgfVxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgLi4ucmVzdWx0IH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+ajgOafpeWuoOeJqeWQjeWPr+eUqOaAp+aXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UsIGlzQXZhaWxhYmxlOiBmYWxzZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIOS/ruaUueWuoOeJqeWQjVxuICBhc3luYyBzZXRQZXROYW1lKHVzZXJJZCwgbmV3TmFtZSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2JyaWdodC1yZXNwb25kZXInLCAnUE9TVCcsIHtcbiAgICAgICAgYWN0aW9uOiAnc2V0X3BldF9uYW1lJyxcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxuICAgICAgICBuZXdfbmFtZTogbmV3TmFtZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfkv67mlLnlrqDnianlkI3lpLHotKU6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICB9XG5cbiAgLy8g6aKE5r+A5rS75qOA5p+lXG4gIGFzeW5jIGNoZWNrRGV2aWNlUmVnaXN0cmF0aW9uKGRldmljZUlkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdjaGVja19yZWdpc3RyYXRpb24nLFxuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCfpooTmv4DmtLvmo4Dmn6XmiJDlip86JywgcmVzdWx0KTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfpooTmv4DmtLvmo4Dmn6Xml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICB9XG5cbiAgLy8g5rOo5YaM6K6+5aSH5bm26I635Y+W55So5oi3SURcbiAgYXN5bmMgcmVnaXN0ZXJBbmRHZXRVc2VySWQoZGV2aWNlSWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdicmlnaHQtcmVzcG9uZGVyJywgJ1BPU1QnLCB7XG4gICAgICAgIGFjdGlvbjogJ3JlZ2lzdGVyX2RldmljZV9hbmRfZ2V0X2lkJyxcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZFxuICAgICAgfSk7XG4gICAgICAvLyDlgYforr7mnI3liqHlmajmiJDlip/ml7bov5Tlm54geyBzdWNjZXNzOiB0cnVlLCB1c2VySW5mbzogeyBpZDogJy4uLicsIC4uLiB9IH1cbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+azqOWGjOiuvuWkh+W5tuiOt+WPlueUqOaIt0lE5oiQ5YqfOicsIHJlc3VsdC51c2VySW5mbyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVzZXJJbmZvOiByZXN1bHQudXNlckluZm8gfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPlueUqOaIt0lE5aSx6LSlOicsIHJlc3VsdCA/IHJlc3VsdC5lcnJvciA6ICfmnKrnn6XplJnor68nKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAocmVzdWx0ID8gcmVzdWx0LmVycm9yIDogJ+acjeWKoeWZqOacqui/lOWbnuaIkOWKn+eKtuaAgScpIH07XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+azqOWGjOaIluiOt+WPlueUqOaIt0lE5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIOmqjOivgeeUqOaIt0lE5bm25oGi5aSN5pWw5o2uXG4gIGFzeW5jIHZlcmlmeVVzZXJJZEFuZFJlc3RvcmUoZGV2aWNlSWQsIHVzZXJJZCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2JyaWdodC1yZXNwb25kZXInLCAnUE9TVCcsIHtcbiAgICAgICAgYWN0aW9uOiAndmVyaWZ5X3VzZXJfaWRfYW5kX3Jlc3RvcmUnLFxuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkLFxuICAgICAgICB1c2VyX2lkOiB1c2VySWRcbiAgICAgIH0pO1xuICAgICAgLy8g5YGH6K6+5pyN5Yqh5Zmo5oiQ5Yqf5pe26L+U5ZueIHsgc3VjY2VzczogdHJ1ZSwgdXNlckluZm86IHsgLi4uIH0gfVxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1c2VySW5mbzogcmVzdWx0LnVzZXJJbmZvIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IChyZXN1bHQgPyByZXN1bHQuZXJyb3IgOiAn6aqM6K+B5aSx6LSlJykgfTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign6aqM6K+B55So5oi3SUTml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBcGlTZXJ2aWNlKClcbiIsIi8vIHNyYy9jb21tb24vanMvYXV0aC1ndWFyZC5qc1xuXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XG5pbXBvcnQgQXBpU2VydmljZSBmcm9tICcuL2FwaS1zZXJ2aWNlLmpzJztcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vY29uZmlnLmpzJztcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHVzZXIgaGFzIHRoZSBuZWNlc3NhcnkgYWN0aXZhdGlvbiBhbmQgY3JlZGVudGlhbHMgdG8gYWNjZXNzIGEgbmV0d29yayBmZWF0dXJlLlxuICogVGhpcyBmdW5jdGlvbiBpbXBsZW1lbnRzIHRoZSBmb2xsb3dpbmcgbG9naWM6XG4gKiAxLiBDaGVja3MgZm9yIGEgbG9jYWwgYWN0aXZhdGlvbiBmbGFnLiBJZiBub3QgcHJlc2VudCwgcmVkaXJlY3RzIHRvIHRoZSBhY3RpdmF0aW9uIHBhZ2UuXG4gKiAyLiBJZiBsb2NhbGx5IGFjdGl2YXRlZCwgY2hlY2tzIGZvciBzdG9yZWQgdXNlciBpbmZvIHdpdGggYSBzZXJ2ZXItc2lkZSBJRC5cbiAqIDMuIElmIHVzZXIgaW5mbyBpcyBtaXNzaW5nLCBpdCBhdHRlbXB0cyB0byBmZXRjaCBpdCBmcm9tIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIHN0b3JlZCBkZXZpY2UgY29kZS5cbiAqIDQuIFJldHVybnMgdGhlIGFjY2VzcyBzdGF0dXMgYW5kIHVzZXIgaW5mby5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IEFuIG9iamVjdCB3aXRoOiB7IGNhbkFjY2VzczogYm9vbGVhbiwgdXNlckluZm86IE9iamVjdHxudWxsLCBtZXNzYWdlOiBzdHJpbmcgfVxuICovXG5hc3luYyBmdW5jdGlvbiBjaGVja05ldHdvcmtBY2Nlc3MoKSB7XG4gIHRyeSB7XG4gICAgLy8gMS4gQ2hlY2sgZm9yIGxvY2FsIGFjdGl2YXRpb25cbiAgICBjb25zdCBsb2NhbEFjdGl2YXRpb24gPSBhd2FpdCBzdG9yYWdlLmdldCh7IGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5JU19MT0NBTExZX0FDVElWQVRFRCB9KTtcbiAgICBpZiAobG9jYWxBY3RpdmF0aW9uLnZhbHVlICE9PSAndHJ1ZScpIHtcbiAgICAgIHJvdXRlci5wdXNoKHsgdXJpOiAnYWN0aXZhdGUnIH0pO1xuICAgICAgcmV0dXJuIHsgY2FuQWNjZXNzOiBmYWxzZSwgdXNlckluZm86IG51bGwsIG1lc3NhZ2U6ICforr7lpIfmnKrmv4DmtLvvvIzor7flhYjmv4DmtLvjgIInIH07XG4gICAgfVxuXG4gICAgLy8gMi4gQ2hlY2sgZm9yIGV4aXN0aW5nIFVzZXIgSURcbiAgICBjb25zdCB1c2VySW5mb1Jlc3VsdCA9IGF3YWl0IHN0b3JhZ2UuZ2V0KHsga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTyB9KTtcbiAgICBpZiAodXNlckluZm9SZXN1bHQudmFsdWUpIHtcbiAgICAgIGNvbnN0IHVzZXJJbmZvID0gSlNPTi5wYXJzZSh1c2VySW5mb1Jlc3VsdC52YWx1ZSk7XG4gICAgICBpZiAodXNlckluZm8gJiYgdXNlckluZm8uaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0F1dGhHdWFyZDogVXNlciBJRCBmb3VuZCBpbiBzdG9yYWdlLicpO1xuICAgICAgICByZXR1cm4geyBjYW5BY2Nlc3M6IHRydWUsIHVzZXJJbmZvOiB1c2VySW5mbywgbWVzc2FnZTogJ+mqjOivgemAmui/hycgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAzLiBVc2VyIElEIGlzIG1pc3NpbmcsIHRyeSB0byBmZXRjaCBpdFxuICAgIGNvbnNvbGUubG9nKCdBdXRoR3VhcmQ6IFVzZXIgSUQgbm90IGZvdW5kLCBhdHRlbXB0aW5nIHRvIGZldGNoIGZyb20gc2VydmVyLicpO1xuICAgIFxuICAgIC8vIFdlIG5lZWQgdGhlIGRldmljZSBjb2RlIHRvIGdldCB0aGUgdXNlciBJRFxuICAgIGNvbnN0IGRldmljZUNvZGVSZXN1bHQgPSBhd2FpdCBzdG9yYWdlLmdldCh7IGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5ERVZJQ0VfSUQgfSk7XG4gICAgaWYgKCFkZXZpY2VDb2RlUmVzdWx0LnZhbHVlKSB7XG4gICAgICAgIC8vIFRoaXMgY2FzZSBpcyB1bmxpa2VseSBpZiBsb2NhbCBhY3RpdmF0aW9uIHdvcmtlZCwgYnV0IGdvb2QgdG8gaGFuZGxlLlxuICAgICAgICByb3V0ZXIucHVzaCh7IHVyaTogJ2FjdGl2YXRlJyB9KTtcbiAgICAgICAgcmV0dXJuIHsgY2FuQWNjZXNzOiBmYWxzZSwgdXNlckluZm86IG51bGwsIG1lc3NhZ2U6ICfml6Dms5Xmib7liLDorr7lpIfnoIHvvIzor7fph43mlrDmv4DmtLvjgIInIH07XG4gICAgfVxuICAgIGNvbnN0IGRldmljZUNvZGUgPSBkZXZpY2VDb2RlUmVzdWx0LnZhbHVlO1xuXG4gICAgY29uc3QgYXBpUmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5yZWdpc3RlckFuZEdldFVzZXJJZChkZXZpY2VDb2RlKTtcblxuICAgIGlmIChhcGlSZXN1bHQuc3VjY2VzcyAmJiBhcGlSZXN1bHQudXNlckluZm8gJiYgKGFwaVJlc3VsdC51c2VySW5mby5pZCB8fCBhcGlSZXN1bHQudXNlckluZm8udXNlcl9udW1iZXIpKSB7XG4gICAgICBjb25zb2xlLmxvZygnQXV0aEd1YXJkOiBTdWNjZXNzZnVsbHkgZmV0Y2hlZCBuZXcgVXNlciBJRC4nKTtcbiAgICAgIFxuICAgICAgY29uc3QgdXNlckluZm9Ub1NhdmUgPSB7XG4gICAgICAgIGlkOiBhcGlSZXN1bHQudXNlckluZm8uaWQgfHwgYXBpUmVzdWx0LnVzZXJJbmZvLnVzZXJfbnVtYmVyLFxuICAgICAgICB1c2VyX251bWJlcjogYXBpUmVzdWx0LnVzZXJJbmZvLnVzZXJfbnVtYmVyLFxuICAgICAgICBwZXRfbmFtZTogYXBpUmVzdWx0LnVzZXJJbmZvLnBldF9uYW1lLFxuICAgICAgICB0b3RhbF9jbGlja3M6IGFwaVJlc3VsdC51c2VySW5mby50b3RhbF9jbGlja3MgfHwgMFxuICAgICAgfTtcblxuICAgICAgLy8gU2F2ZSB0aGUgbmV3bHkgZmV0Y2hlZCB1c2VyIGluZm9cbiAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KHsga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTywgdmFsdWU6IEpTT04uc3RyaW5naWZ5KHVzZXJJbmZvVG9TYXZlKSB9KTtcbiAgICAgIHJldHVybiB7IGNhbkFjY2VzczogdHJ1ZSwgdXNlckluZm86IHVzZXJJbmZvVG9TYXZlLCBtZXNzYWdlOiAn55So5oi3SUTojrflj5bmiJDlip8nIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdBdXRoR3VhcmQ6IEZhaWxlZCB0byBmZXRjaCBVc2VyIElELicpO1xuICAgICAgcmV0dXJuIHsgY2FuQWNjZXNzOiBmYWxzZSwgdXNlckluZm86IG51bGwsIG1lc3NhZ2U6ICfojrflj5bnlKjmiLdJROWksei0pe+8jOivt+ajgOafpee9kee7nOWQjumHjeivleOAgicgfTtcbiAgICB9XG5cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0F1dGhHdWFyZDogRXJyb3IgZHVyaW5nIGNoZWNrTmV0d29ya0FjY2VzcycsIGUpO1xuICAgIHJldHVybiB7IGNhbkFjY2VzczogZmFsc2UsIHVzZXJJbmZvOiBudWxsLCBtZXNzYWdlOiBg5Y+R55Sf6ZSZ6K+vOiAke2UubWVzc2FnZX1gIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjaGVja05ldHdvcmtBY2Nlc3Ncbn07XG4iLCIvLyBjb25maWcuanNcbmV4cG9ydCBjb25zdCBDT05GSUcgPSB7XG4gIC8vIFN1cGFiYXNl6YWN572uXG4gIFNVUEFCQVNFOiB7XG4gICAgVVJMOiAnaHR0cHM6Ly9qcXVieXFuaGd5eGF6cG5wanlxZi5zdXBhYmFzZS5jbycsXG4gICAgS0VZOiAnc2JfcHVibGlzaGFibGVfX1VNWUd2MVZEby1ack92dVVnWkxGZ19XS3F5YzdNLScsIC8vIOivt+abv+aNouS4uuS9oOeahFN1cGFiYXNl5Yy/5ZCN5a+G6ZKlXG4gIH0sXG4gIFxuICAvLyDlupTnlKjphY3nva5cbiAgQVBQOiB7XG4gICAgTkFNRTogJ0JhbmRQZXQnLFxuICAgIFZFUlNJT046ICcxLjAuMCcsXG4gICAgTUFYX0NMSUNLU19QRVJfQkFUQ0g6IDUwLCAvLyDmibnph4/kuIrkvKDmnIDlpKfngrnlh7vmlbBcbiAgICBTWU5DX0lOVEVSVkFMOiAzMDAwMDAsIC8vIDXliIbpkp/lkIzmraXkuIDmrKFcbiAgICBSQU5LX0xJTUlUOiAxMCAvLyDmjpLooYzmppzmmL7npLrmlbDph49cbiAgfSxcbiAgXG4gIC8vIOWtmOWCqOmUruWQjVxuICBTVE9SQUdFX0tFWVM6IHtcbiAgICBJU19MT0NBTExZX0FDVElWQVRFRDogJ2lzX2xvY2FsbHlfYWN0aXZhdGVkJyxcbiAgICBERVZJQ0VfSUQ6ICdkZXZpY2VfaWQnLFxuICAgIFVTRVJfSU5GTzogJ3VzZXJfaW5mbycsXG4gICAgUEVORElOR19DTElDS1M6ICdwZW5kaW5nX2NsaWNrcycsXG4gICAgTEFTVF9TWU5DX1RJTUU6ICdsYXN0X3N5bmNfdGltZScsXG4gICAgVE9UQUxfQ0xJQ0tTOiAndG90YWxfY2xpY2tzJ1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS42LjhcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNi44XCI7IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPHRleHQgY2xhc3M9XCJ0aW1lXCI+e3sgdGltZSB9fTwvdGV4dD5cbiAgICA8ZGl2IGNsYXNzPVwibGVmdC1jaGVzdFwiIG9uY2xpY2s9XCJjbGFpbUNoZXN0KDApXCI+XG4gICAgICA8dGV4dCBjbGFzcz1cImNoZXN0LWxhYmVsXCI+5a6d566xPC90ZXh0PlxuICAgICAgPHRleHQgc2hvdz1cInt7IWNoZXN0c1swXS5jbGFpbWVkfX1cIiBjbGFzcz1cImNoZXN0LWNvc3RcIj7oirHotLk6IDEwMDA8L3RleHQ+XG4gICAgICA8dGV4dCBzaG93PVwie3tjaGVzdHNbMF0uY2xhaW1lZH19XCIgY2xhc3M9XCJjaGVzdC10aW1lclwiPnt7IGNoZXN0c1swXS50aW1lckRpc3BsYXkgfX08L3RleHQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNoZXN0XCIgb25jbGljaz1cImNsYWltQ2hlc3QoMSlcIj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwiY2hlc3QtbGFiZWxcIj7lrp3nrrE8L3RleHQ+XG4gICAgICA8dGV4dCBzaG93PVwie3shY2hlc3RzWzFdLmNsYWltZWR9fVwiIGNsYXNzPVwiY2hlc3QtY29zdFwiPuiKsei0uTogMTAwMDwvdGV4dD5cbiAgICAgIDx0ZXh0IHNob3c9XCJ7e2NoZXN0c1sxXS5jbGFpbWVkfX1cIiBjbGFzcz1cImNoZXN0LXRpbWVyXCI+e3sgY2hlc3RzWzFdLnRpbWVyRGlzcGxheSB9fTwvdGV4dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicGV0LWNvbnRhaW5lclwiIG9uY2xpY2s9XCJpbmNyZW1lbnRDbGlja1wiPlxuICAgICAgPGltYWdlIGNsYXNzPVwicGV0LWltYWdlXCIgc3JjPVwie3sgcGV0SW1hZ2UgfX1cIj48L2ltYWdlPlxuICAgICAgPHRleHQgY2xhc3M9XCJwZXQtbmFtZVwiPnt7IHBldE5hbWUgfX08L3RleHQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJvdHRvbS1iYXJcIj5cbjxpbWFnZSBzcmM9XCIuLi9jb21tb24vbW9yZS5wbmdcIiBjbGFzcz1cIm1vcmUtYnV0dG9uXCIgb25jbGljaz1cIm9wZW5Nb3JlXCI+PC9pbWFnZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjbGljay1jb3VudGVyXCI+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiY2xpY2stY291bnRlci10ZXh0XCI+e3sgY2xpY2tDb3VudCB9fTwvdGV4dD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgLmNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIH1cbiAgLnRpbWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE0cHg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICB9XG4gIC5sZWZ0LWNoZXN0LCAucmlnaHQtY2hlc3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTA1cHg7XG4gICAgaGVpZ2h0OiAxMDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFBNTIwOyAvKiBHb2xkZW5Sb2QgKi9cbiAgICBib3JkZXItcmFkaXVzOiAxMC41cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDdweDtcbiAgfVxuICAubGVmdC1jaGVzdCB7XG4gICAgdG9wOiA3MHB4O1xuICAgIGxlZnQ6IDE0cHg7XG4gIH1cbiAgLnJpZ2h0LWNoZXN0IHtcbiAgICB0b3A6IDcwcHg7XG4gICAgcmlnaHQ6IDE0cHg7XG4gIH1cbiAgLmNoZXN0LXByb2dyZXNzIHtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gIC5jaGVzdC1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgfVxuICAuY2hlc3QtY29zdCB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgZm9udC1zaXplOiAxNi44cHg7XG4gIH1cbiAgLmNoZXN0LXRpbWVyIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDE2LjhweDtcbiAgfVxuICAucGV0LWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAyMTBweDtcbiAgICBoZWlnaHQ6IDIxMHB4O1xuICB9XG4gIC5wZXQtaW1hZ2Uge1xuICAgIHdpZHRoOiAyMTBweDsgLyogMTQwICogMS41ICovXG4gICAgaGVpZ2h0OiAyMTBweDsgLyogMTQwICogMS41ICovXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgfVxuICAucGV0LW5hbWUge1xuICAgIGNvbG9yOiAjODg4ODg4O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyAvKiBJbmNyZWFzZWQgZnJvbSAxMHB4IHRvIDIwcHggKi9cbiAgfVxuICAuYm90dG9tLWJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMjFweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5tb3JlLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5tb3JlLWJ1dHRvbi10ZXh0IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gIH1cbiAgLmNsaWNrLWNvdW50ZXIge1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmNsaWNrLWNvdW50ZXItdGV4dCB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcbiAgaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQHN5c3RlbS5zdG9yYWdlJztcbiAgaW1wb3J0IHByb21wdCBmcm9tICdAc3lzdGVtLnByb21wdCc7XG4gIGltcG9ydCBBcGlTZXJ2aWNlIGZyb20gJy4uL2NvbW1vbi9qcy9hcGktc2VydmljZS5qcyc7XG4gIGltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4uL2NvbW1vbi9qcy9jb25maWcuanMnO1xuICBpbXBvcnQgYXV0aEd1YXJkIGZyb20gJy4uL2NvbW1vbi9qcy9hdXRoLWd1YXJkLmpzJztcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YToge1xuICAgICAgdGltZTogJzAwOjAwJyxcbiAgICAgIHBldE5hbWU6ICco5peg5ZCNKScsXG4gICAgICBjbGlja0NvdW50OiAwLFxuICAgICAgcGVuZGluZ0NsaWNrczogMCxcbiAgICAgIHBldEltYWdlOiAnL2NvbW1vbi9SYTAucG5nJyxcbiAgICAgIGNoZXN0czogW1xuICAgICAgICB7IGNsYWltZWQ6IGZhbHNlLCByZWZyZXNoVGltZXN0YW1wOiAwLCB0aW1lckRpc3BsYXk6ICfoirHotLk6IDEwMDAnIH0sXG4gICAgICAgIHsgY2xhaW1lZDogZmFsc2UsIHJlZnJlc2hUaW1lc3RhbXA6IDAsIHRpbWVyRGlzcGxheTogJ+iKsei0uTogMTAwMCcgfVxuICAgICAgXVxuICAgIH0sXG4gICAgb25Jbml0KCkge1xuICAgICAgdGhpcy51cGRhdGVUaW1lKCk7XG4gICAgICB0aGlzLmxvYWRJbml0aWFsU3RhdGUoKTtcbiAgICAgIFxuICAgICAgLy8gU2V0IHVwIGludGVydmFscyB1bmNvbmRpdGlvbmFsbHkuIFRoZSBndWFyZCBpbnNpZGUgc3luY0NsaWNrcyB3aWxsIGhhbmRsZSBsb2dpYy5cbiAgICAgIHNldEludGVydmFsKHRoaXMuc3luY0NsaWNrcy5iaW5kKHRoaXMpLCBDT05GSUcuQVBQLlNZTkNfSU5URVJWQUwpO1xuICAgICAgc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVUaW1lLCA1MDAwKTtcbiAgICAgIHNldEludGVydmFsKHRoaXMudXBkYXRlQ2hlc3RUaW1lcnMuYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgfSxcbiAgICBhc3luYyBsb2FkSW5pdGlhbFN0YXRlKCkge1xuICAgICAgICAvLyBMb2FkIG5vbi11c2VyLXNwZWNpZmljIGRhdGFcbiAgICAgICAgc3RvcmFnZS5nZXQoe1xuICAgICAgICAgICAga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLlBFTkRJTkdfQ0xJQ0tTLFxuICAgICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHsgdGhpcy5wZW5kaW5nQ2xpY2tzID0gcGFyc2VJbnQoZGF0YSkgfHwgMDsgfVxuICAgICAgICB9KTtcbiAgICAgICAgc3RvcmFnZS5nZXQoe1xuICAgICAgICAgICAga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLlRPVEFMX0NMSUNLUyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7IHRoaXMuY2xpY2tDb3VudCA9IHBhcnNlSW50KGRhdGEpIHx8IDA7IH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyBBbHNvIHRyeSB0byBsb2FkIHVzZXItc3BlY2lmaWMgZGF0YSBpZiBhdmFpbGFibGUsIGJ1dCBkb24ndCBnYXRlIGFueXRoaW5nXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1c2VySW5mb1Jlc3VsdCA9IGF3YWl0IHN0b3JhZ2UuZ2V0KHsga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTyB9KTtcbiAgICAgICAgICAgIGlmICh1c2VySW5mb1Jlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvID0gSlNPTi5wYXJzZSh1c2VySW5mb1Jlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJbmZvICYmIHVzZXJJbmZvLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGV0TmFtZSA9IHVzZXJJbmZvLnBldF9uYW1lIHx8ICco5peg5ZCNKSc7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBvdGVudGlhbGx5IGxvYWQgc2VydmVyLXN5bmNlZCBjbGlja0NvdW50IGhlcmUgaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2xpY2tDb3VudCA9IHVzZXJJbmZvLmNsaWNrX2NvdW50IHx8IHRoaXMuY2xpY2tDb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkgeyBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9hZGluZyB1c2VyIGluZm8gb24gaW5pdDpcIiwgZSl9XG5cbiAgICAgICAgdGhpcy5sb2FkQ2hlc3RTdGF0ZXMoKTtcbiAgICB9LFxuICAgIGxvYWRDaGVzdFN0YXRlcygpIHtcbiAgICAgIHN0b3JhZ2UuZ2V0KHtcbiAgICAgICAga2V5OiAnY2hlc3RTdGF0ZXMnLFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBsb2FkZWRDaGVzdHMgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5jaGVzdHMgPSBsb2FkZWRDaGVzdHMubWFwKGNoZXN0ID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNoZXN0LnJlZnJlc2hUaW1lc3RhbXAgPiAwICYmIGNoZXN0LmNsYWltZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZW1haW5pbmdUaW1lID0gTWF0aC5tYXgoMCwgY2hlc3QucmVmcmVzaFRpbWVzdGFtcCAtIERhdGUubm93KCkpO1xuICAgICAgICAgICAgICAgIGlmIChyZW1haW5pbmdUaW1lIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgIGNoZXN0LmNsYWltZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIGNoZXN0LnJlZnJlc2hUaW1lc3RhbXAgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gY2hlc3Q7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2F2ZUNoZXN0U3RhdGVzKCkge1xuICAgICAgc3RvcmFnZS5zZXQoeyBrZXk6ICdjaGVzdFN0YXRlcycsIHZhbHVlOiBKU09OLnN0cmluZ2lmeSh0aGlzLmNoZXN0cykgfSk7XG4gICAgfSxcbiAgICB1cGRhdGVUaW1lKCkge1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgY29uc3QgbWludXRlcyA9IG5vdy5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgdGhpcy50aW1lID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xuICAgIH0sXG4gICAgdXBkYXRlQ2hlc3RUaW1lcnMoKSB7XG4gICAgICB0aGlzLmNoZXN0cy5mb3JFYWNoKChjaGVzdCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGNoZXN0LmNsYWltZWQgJiYgY2hlc3QucmVmcmVzaFRpbWVzdGFtcCA+IDApIHtcbiAgICAgICAgICBjb25zdCByZW1haW5pbmdUaW1lID0gTWF0aC5tYXgoMCwgY2hlc3QucmVmcmVzaFRpbWVzdGFtcCAtIERhdGUubm93KCkpO1xuICAgICAgICAgIHRoaXMuY2hlc3RzW2luZGV4XS50aW1lckRpc3BsYXkgPSB0aGlzLmZvcm1hdFRpbWUocmVtYWluaW5nVGltZSAvIDEwMDApO1xuICAgICAgICAgIGlmIChyZW1haW5pbmdUaW1lIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2hlc3RzW2luZGV4XS5jbGFpbWVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNoZXN0c1tpbmRleF0ucmVmcmVzaFRpbWVzdGFtcCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNhdmVDaGVzdFN0YXRlcygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBmb3JtYXRUaW1lKHNlY29uZHMpIHtcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgICBjb25zdCByZW1haW5pbmdTZWNvbmRzID0gTWF0aC5mbG9vcihzZWNvbmRzICUgNjApO1xuICAgICAgcmV0dXJuIGAke21pbnV0ZXMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfToke3JlbWFpbmluZ1NlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfWA7XG4gICAgfSxcbiAgICBpbmNyZW1lbnRDbGljaygpIHtcbiAgICAgIHRoaXMuY2xpY2tDb3VudCsrO1xuICAgICAgdGhpcy5wZW5kaW5nQ2xpY2tzKys7XG4gICAgICBzdG9yYWdlLnNldCh7IGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5QRU5ESU5HX0NMSUNLUywgdmFsdWU6IHRoaXMucGVuZGluZ0NsaWNrcy50b1N0cmluZygpIH0pO1xuICAgICAgc3RvcmFnZS5zZXQoeyBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuVE9UQUxfQ0xJQ0tTLCB2YWx1ZTogdGhpcy5jbGlja0NvdW50LnRvU3RyaW5nKCkgfSk7XG5cbiAgICAgIC8vIFJhbmRvbWx5IHN3aXRjaCBwZXQgaW1hZ2UgdG8gUmExIG9yIFJhMlxuICAgICAgY29uc3QgcmFuZG9tSW1hZ2UgPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gJy9jb21tb24vUmExLnBuZycgOiAnL2NvbW1vbi9SYTIucG5nJztcbiAgICAgIHRoaXMucGV0SW1hZ2UgPSByYW5kb21JbWFnZTtcblxuICAgICAgLy8gUmVzZXQgdG8gUmEwIGFmdGVyIGEgc2hvcnQgZGVsYXlcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnBldEltYWdlID0gJy9jb21tb24vUmEwLnBuZyc7XG4gICAgICB9LCAyMDApO1xuICAgIH0sXG4gICAgY2xhaW1DaGVzdChpbmRleCkge1xuICAgICAgY29uc3QgY2hlc3QgPSB0aGlzLmNoZXN0c1tpbmRleF07XG4gICAgICBpZiAoY2hlc3QuY2xhaW1lZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnQ2hlc3QgaXMgb24gY29vbGRvd24uJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNsaWNrQ291bnQgPj0gMTAwMCkge1xuICAgICAgICB0aGlzLmNsaWNrQ291bnQgLT0gMTAwMDtcbiAgICAgICAgY29uc3QgcmV3YXJkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTAwKSArIDEwMDtcbiAgICAgICAgdGhpcy5jbGlja0NvdW50ICs9IHJld2FyZDtcbiAgICAgICAgc3RvcmFnZS5zZXQoeyBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuVE9UQUxfQ0xJQ0tTLCB2YWx1ZTogdGhpcy5jbGlja0NvdW50LnRvU3RyaW5nKCkgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDaGVzdCAke2luZGV4fSBjbGFpbWVkISBSZXdhcmRlZCAke3Jld2FyZH0gY2xpY2tzLmApO1xuICAgICAgICB0aGlzLmNoZXN0c1tpbmRleF0uY2xhaW1lZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY2hlc3RzW2luZGV4XS5yZWZyZXNoVGltZXN0YW1wID0gRGF0ZS5ub3coKSArICgzMCAqIDYwICogMTAwMCk7XG4gICAgICAgIHRoaXMuc2F2ZUNoZXN0U3RhdGVzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnTm90IGVub3VnaCBjbGlja3MgdG8gb3BlbiBjaGVzdC4nKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIHN5bmNDbGlja3MoKSB7XG4gICAgICBpZiAodGhpcy5wZW5kaW5nQ2xpY2tzID09PSAwKSB7XG4gICAgICAgIHJldHVybjsgLy8gTm8gbmVlZCB0byBjaGVjayBhdXRoIGlmIHRoZXJlJ3Mgbm90aGluZyB0byBzeW5jXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGd1YXJkUmVzdWx0ID0gYXdhaXQgYXV0aEd1YXJkLmNoZWNrTmV0d29ya0FjY2VzcygpO1xuICAgICAgaWYgKCFndWFyZFJlc3VsdC5jYW5BY2Nlc3MpIHtcbiAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogZ3VhcmRSZXN1bHQubWVzc2FnZSxcbiAgICAgICAgICBkdXJhdGlvbjogMzAwMFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zdCB1c2VySWQgPSBndWFyZFJlc3VsdC51c2VySW5mby5pZDtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2Uuc3luY0NsaWNrcyh1c2VySWQsIHRoaXMucGVuZGluZ0NsaWNrcyk7XG4gICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nQ2xpY2tzID0gMDtcbiAgICAgICAgc3RvcmFnZS5zZXQoeyBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuUEVORElOR19DTElDS1MsIHZhbHVlOiAnMCcgfSk7XG4gICAgICAgIHByb21wdC5zaG93VG9hc3QoeyBtZXNzYWdlOiAn54K55Ye75qyh5pWw5bey5ZCM5q2lJyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21wdC5zaG93VG9hc3QoeyBtZXNzYWdlOiAn5ZCM5q2l5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJyB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9wZW5Nb3JlKCkge1xuICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICB1cmk6ICdtb3JlJ1xuICAgICAgfSk7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfc3lzdGVtMiIsIl9zeXN0ZW0zIiwiX3N5c3RlbTQiLCJfY29uZmlnIiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIm93bktleXMiLCJyIiwidCIsIk9iamVjdCIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJvIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5IiwidmFsdWUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImkiLCJfdG9QcmltaXRpdmUiLCJTeW1ib2wiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJBcGlTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJiYXNlSGVhZGVycyIsIkNPTkZJRyIsIlNVUEFCQVNFIiwiS0VZIiwicmVxdWVzdCIsImVuZHBvaW50IiwibWV0aG9kIiwiZGF0YSIsInVybCIsIlVSTCIsIm9wdGlvbnMiLCJoZWFkZXIiLCJyZXNwb25zZVR5cGUiLCJKU09OIiwic3RyaW5naWZ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInJlc3BvbnNlRGF0YSIsImNvZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImZhaWwiLCJnZXRSYW5raW5ncyIsImxpbWl0IiwicmVzdWx0IiwiYWN0aW9uIiwicmFua2luZ3MiLCJtZXNzYWdlIiwic3luY0NsaWNrcyIsInVzZXJJZCIsImNsaWNrQ291bnQiLCJ1c2VyX2lkIiwiY2xpY2tfY291bnQiLCJjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkiLCJwZXROYW1lIiwicGV0X25hbWUiLCJpc0F2YWlsYWJsZSIsInNldFBldE5hbWUiLCJuZXdOYW1lIiwibmV3X25hbWUiLCJjaGVja0RldmljZVJlZ2lzdHJhdGlvbiIsImRldmljZUlkIiwiZGV2aWNlX2lkIiwibG9nIiwicmVnaXN0ZXJBbmRHZXRVc2VySWQiLCJ1c2VySW5mbyIsInZlcmlmeVVzZXJJZEFuZFJlc3RvcmUiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJfYXBpU2VydmljZSIsImNoZWNrTmV0d29ya0FjY2VzcyIsImxvY2FsQWN0aXZhdGlvbiIsImdldCIsImtleSIsIlNUT1JBR0VfS0VZUyIsIklTX0xPQ0FMTFlfQUNUSVZBVEVEIiwidXJpIiwiY2FuQWNjZXNzIiwidXNlckluZm9SZXN1bHQiLCJVU0VSX0lORk8iLCJwYXJzZSIsImlkIiwiZGV2aWNlQ29kZVJlc3VsdCIsIkRFVklDRV9JRCIsImRldmljZUNvZGUiLCJhcGlSZXN1bHQiLCJ1c2VyX251bWJlciIsInVzZXJJbmZvVG9TYXZlIiwidG90YWxfY2xpY2tzIiwic2V0IiwiQVBQIiwiTkFNRSIsIlZFUlNJT04iLCJNQVhfQ0xJQ0tTX1BFUl9CQVRDSCIsIlNZTkNfSU5URVJWQUwiLCJSQU5LX0xJTUlUIiwiUEVORElOR19DTElDS1MiLCJMQVNUX1NZTkNfVElNRSIsIlRPVEFMX0NMSUNLUyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJfYXV0aEd1YXJkIiwidGltZSIsInBlbmRpbmdDbGlja3MiLCJwZXRJbWFnZSIsImNoZXN0cyIsImNsYWltZWQiLCJyZWZyZXNoVGltZXN0YW1wIiwidGltZXJEaXNwbGF5Iiwib25Jbml0IiwidXBkYXRlVGltZSIsImxvYWRJbml0aWFsU3RhdGUiLCJzZXRJbnRlcnZhbCIsImJpbmQiLCJ1cGRhdGVDaGVzdFRpbWVycyIsInN0b3JhZ2UiLCJwYXJzZUludCIsImxvYWRDaGVzdFN0YXRlcyIsImxvYWRlZENoZXN0cyIsIm1hcCIsImNoZXN0IiwicmVtYWluaW5nVGltZSIsIk1hdGgiLCJtYXgiLCJEYXRlIiwibm93Iiwic2F2ZUNoZXN0U3RhdGVzIiwiaG91cnMiLCJnZXRIb3VycyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImluZGV4IiwiZm9ybWF0VGltZSIsInNlY29uZHMiLCJmbG9vciIsInJlbWFpbmluZ1NlY29uZHMiLCJpbmNyZW1lbnRDbGljayIsInJhbmRvbUltYWdlIiwicmFuZG9tIiwic2V0VGltZW91dCIsImNsYWltQ2hlc3QiLCJyZXdhcmQiLCJndWFyZFJlc3VsdCIsImF1dGhHdWFyZCIsInByb21wdCIsInNob3dUb2FzdCIsImR1cmF0aW9uIiwib3Blbk1v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