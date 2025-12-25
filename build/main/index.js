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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpblxcaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvYXBpLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2F1dGgtZ3VhcmQuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL0JhbmRQZXQvc3JjL21haW4vaW5kZXgudXgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBpLXNlcnZpY2UuanNcbmltcG9ydCBmZXRjaCBmcm9tICdAc3lzdGVtLmZldGNoJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQHN5c3RlbS5zdG9yYWdlJztcbmltcG9ydCBwcm9tcHQgZnJvbSAnQHN5c3RlbS5wcm9tcHQnO1xuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25maWcuanMnO1xuXG5jbGFzcyBBcGlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8g5Lit6L2s5pyN5Yqh5Zmo5Zyw5Z2AIC0g5LuOIGNvbmZpZy5qcyDor7vlj5ZcbiAgICB0aGlzLmJhc2VVcmwgPSBDT05GSUcuU0VSVkVSLkJBU0VfVVJMO1xuICAgIHRoaXMuYmFzZUhlYWRlcnMgPSB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH1cbiAgfVxuXG4gIC8vIOmAmueUqOivt+axguaWueazlSAtIOmAmui/h+S4rei9rOacjeWKoeWZqOi9rOWPkVxuICBhc3luYyByZXF1ZXN0KGFjdGlvbiwgZGF0YSA9IHt9KSB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVXJsfS9hcGlgO1xuICAgIFxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICB1cmwsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcjogdGhpcy5iYXNlSGVhZGVycyxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXG4gICAgfTtcblxuICAgIG9wdGlvbnMuZGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgYWN0aW9uLCAuLi5kYXRhIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZldGNoLmZldGNoKHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcblxuICAgICAgICAgIGlmIChyZXNwb25zZS5jb2RlID49IDIwMCAmJiByZXNwb25zZS5jb2RlIDwgMzAwKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlRGF0YSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgSFRUUCBFcnJvcjogJHtyZXNwb25zZS5jb2RlfWAsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYEhUVFAgJHtyZXNwb25zZS5jb2RlfTogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZURhdGEpfWApKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogKGVycm9yLCBjb2RlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgUmVxdWVzdCBGYWlsZWQ6ICR7Y29kZX1gLCBlcnJvcik7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgUmVxdWVzdCBmYWlsZWQ6ICR7ZXJyb3IuZGF0YX1gKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLy8g6I635Y+W5o6S6KGM5qacXG4gIGFzeW5jIGdldFJhbmtpbmdzKGxpbWl0ID0gMTApIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdnZXRfcmFua2luZ3MnLCB7XG4gICAgICAgIGxpbWl0OiBsaW1pdFxuICAgICAgfSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIHJhbmtpbmdzOiByZXN1bHQucmFua2luZ3MgfHwgW11cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign6I635Y+W5o6S6KGM5qac5aSx6LSlOicsIGVycm9yKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIHJhbmtpbmdzOiBbXSxcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyDkuIrmiqXngrnlh7vmrKHmlbBcbiAgYXN5bmMgc3luY0NsaWNrcyh1c2VySWQsIGNsaWNrQ291bnQpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0KCdzeW5jX2NsaWNrcycsIHtcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxuICAgICAgICBjbGlja19jb3VudDogY2xpY2tDb3VudFxuICAgICAgfSlcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfkuIrmiqXngrnlh7vmrKHmlbDlpLHotKU6JywgZXJyb3IpXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cblxuICAvLyDmo4Dmn6XlrqDnianlkI3mmK/lkKblj6/nlKhcbiAgYXN5bmMgY2hlY2tQZXROYW1lQXZhaWxhYmlsaXR5KHBldE5hbWUpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdjaGVja19wZXRfbmFtZScsIHtcbiAgICAgICAgcGV0X25hbWU6IHBldE5hbWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgLi4ucmVzdWx0IH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+ajgOafpeWuoOeJqeWQjeWPr+eUqOaAp+aXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UsIGlzQXZhaWxhYmxlOiBmYWxzZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIOS/ruaUueWuoOeJqeWQjVxuICBhc3luYyBzZXRQZXROYW1lKHVzZXJJZCwgbmV3TmFtZSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ3NldF9wZXRfbmFtZScsIHtcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxuICAgICAgICBuZXdfbmFtZTogbmV3TmFtZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfkv67mlLnlrqDnianlkI3lpLHotKU6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICB9XG5cbiAgLy8g6aKE5r+A5rS75qOA5p+lXG4gIGFzeW5jIGNoZWNrRGV2aWNlUmVnaXN0cmF0aW9uKGRldmljZUlkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnY2hlY2tfcmVnaXN0cmF0aW9uJywge1xuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCfpooTmv4DmtLvmo4Dmn6XmiJDlip86JywgcmVzdWx0KTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfpooTmv4DmtLvmo4Dmn6Xml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICB9XG5cbiAgLy8g5rOo5YaM6K6+5aSH5bm26I635Y+W55So5oi3SURcbiAgYXN5bmMgcmVnaXN0ZXJBbmRHZXRVc2VySWQoZGV2aWNlSWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdyZWdpc3Rlcl9kZXZpY2VfYW5kX2dldF9pZCcsIHtcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfms6jlhozorr7lpIflubbojrflj5bnlKjmiLdJROaIkOWKnzonLCByZXN1bHQudXNlckluZm8pO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1c2VySW5mbzogcmVzdWx0LnVzZXJJbmZvIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCfojrflj5bnlKjmiLdJROWksei0pTonLCByZXN1bHQgPyByZXN1bHQuZXJyb3IgOiAn5pyq55+l6ZSZ6K+vJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogKHJlc3VsdCA/IHJlc3VsdC5lcnJvciA6ICfmnI3liqHlmajmnKrov5Tlm57miJDlip/nirbmgIEnKSB9O1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfms6jlhozmiJbojrflj5bnlKjmiLdJROaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cblxuICAvLyDpqozor4HnlKjmiLdJROW5tuaBouWkjeaVsOaNrlxuICBhc3luYyB2ZXJpZnlVc2VySWRBbmRSZXN0b3JlKGRldmljZUlkLCB1c2VySWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCd2ZXJpZnlfdXNlcl9pZF9hbmRfcmVzdG9yZScsIHtcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZCxcbiAgICAgICAgdXNlcl9pZDogdXNlcklkXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdXNlckluZm86IHJlc3VsdC51c2VySW5mbyB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAocmVzdWx0ID8gcmVzdWx0LmVycm9yIDogJ+mqjOivgeWksei0pScpIH07XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+mqjOivgeeUqOaIt0lE5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBpU2VydmljZSgpXG4iLCIvLyBzcmMvY29tbW9uL2pzL2F1dGgtZ3VhcmQuanNcblxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQHN5c3RlbS5zdG9yYWdlJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xuaW1wb3J0IEFwaVNlcnZpY2UgZnJvbSAnLi9hcGktc2VydmljZS5qcyc7XG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSB1c2VyIGhhcyB0aGUgbmVjZXNzYXJ5IGFjdGl2YXRpb24gYW5kIGNyZWRlbnRpYWxzIHRvIGFjY2VzcyBhIG5ldHdvcmsgZmVhdHVyZS5cbiAqIFRoaXMgZnVuY3Rpb24gaW1wbGVtZW50cyB0aGUgZm9sbG93aW5nIGxvZ2ljOlxuICogMS4gQ2hlY2tzIGZvciBhIGxvY2FsIGFjdGl2YXRpb24gZmxhZy4gSWYgbm90IHByZXNlbnQsIHJlZGlyZWN0cyB0byB0aGUgYWN0aXZhdGlvbiBwYWdlLlxuICogMi4gSWYgbG9jYWxseSBhY3RpdmF0ZWQsIGNoZWNrcyBmb3Igc3RvcmVkIHVzZXIgaW5mbyB3aXRoIGEgc2VydmVyLXNpZGUgSUQuXG4gKiAzLiBJZiB1c2VyIGluZm8gaXMgbWlzc2luZywgaXQgYXR0ZW1wdHMgdG8gZmV0Y2ggaXQgZnJvbSB0aGUgc2VydmVyIHVzaW5nIHRoZSBzdG9yZWQgZGV2aWNlIGNvZGUuXG4gKiA0LiBSZXR1cm5zIHRoZSBhY2Nlc3Mgc3RhdHVzIGFuZCB1c2VyIGluZm8uXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fSBBbiBvYmplY3Qgd2l0aDogeyBjYW5BY2Nlc3M6IGJvb2xlYW4sIHVzZXJJbmZvOiBPYmplY3R8bnVsbCwgbWVzc2FnZTogc3RyaW5nIH1cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2hlY2tOZXR3b3JrQWNjZXNzKCkge1xuICB0cnkge1xuICAgIC8vIDEuIENoZWNrIGZvciBsb2NhbCBhY3RpdmF0aW9uXG4gICAgY29uc3QgbG9jYWxBY3RpdmF0aW9uID0gYXdhaXQgc3RvcmFnZS5nZXQoeyBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuSVNfTE9DQUxMWV9BQ1RJVkFURUQgfSk7XG4gICAgaWYgKGxvY2FsQWN0aXZhdGlvbi52YWx1ZSAhPT0gJ3RydWUnKSB7XG4gICAgICByb3V0ZXIucHVzaCh7IHVyaTogJ2FjdGl2YXRlJyB9KTtcbiAgICAgIHJldHVybiB7IGNhbkFjY2VzczogZmFsc2UsIHVzZXJJbmZvOiBudWxsLCBtZXNzYWdlOiAn6K6+5aSH5pyq5r+A5rS777yM6K+35YWI5r+A5rS744CCJyB9O1xuICAgIH1cblxuICAgIC8vIDIuIENoZWNrIGZvciBleGlzdGluZyBVc2VyIElEXG4gICAgY29uc3QgdXNlckluZm9SZXN1bHQgPSBhd2FpdCBzdG9yYWdlLmdldCh7IGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8gfSk7XG4gICAgaWYgKHVzZXJJbmZvUmVzdWx0LnZhbHVlKSB7XG4gICAgICBjb25zdCB1c2VySW5mbyA9IEpTT04ucGFyc2UodXNlckluZm9SZXN1bHQudmFsdWUpO1xuICAgICAgaWYgKHVzZXJJbmZvICYmIHVzZXJJbmZvLmlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBdXRoR3VhcmQ6IFVzZXIgSUQgZm91bmQgaW4gc3RvcmFnZS4nKTtcbiAgICAgICAgcmV0dXJuIHsgY2FuQWNjZXNzOiB0cnVlLCB1c2VySW5mbzogdXNlckluZm8sIG1lc3NhZ2U6ICfpqozor4HpgJrov4cnIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMy4gVXNlciBJRCBpcyBtaXNzaW5nLCB0cnkgdG8gZmV0Y2ggaXRcbiAgICBjb25zb2xlLmxvZygnQXV0aEd1YXJkOiBVc2VyIElEIG5vdCBmb3VuZCwgYXR0ZW1wdGluZyB0byBmZXRjaCBmcm9tIHNlcnZlci4nKTtcbiAgICBcbiAgICAvLyBXZSBuZWVkIHRoZSBkZXZpY2UgY29kZSB0byBnZXQgdGhlIHVzZXIgSURcbiAgICBjb25zdCBkZXZpY2VDb2RlUmVzdWx0ID0gYXdhaXQgc3RvcmFnZS5nZXQoeyBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuREVWSUNFX0lEIH0pO1xuICAgIGlmICghZGV2aWNlQ29kZVJlc3VsdC52YWx1ZSkge1xuICAgICAgICAvLyBUaGlzIGNhc2UgaXMgdW5saWtlbHkgaWYgbG9jYWwgYWN0aXZhdGlvbiB3b3JrZWQsIGJ1dCBnb29kIHRvIGhhbmRsZS5cbiAgICAgICAgcm91dGVyLnB1c2goeyB1cmk6ICdhY3RpdmF0ZScgfSk7XG4gICAgICAgIHJldHVybiB7IGNhbkFjY2VzczogZmFsc2UsIHVzZXJJbmZvOiBudWxsLCBtZXNzYWdlOiAn5peg5rOV5om+5Yiw6K6+5aSH56CB77yM6K+36YeN5paw5r+A5rS744CCJyB9O1xuICAgIH1cbiAgICBjb25zdCBkZXZpY2VDb2RlID0gZGV2aWNlQ29kZVJlc3VsdC52YWx1ZTtcblxuICAgIGNvbnN0IGFwaVJlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2UucmVnaXN0ZXJBbmRHZXRVc2VySWQoZGV2aWNlQ29kZSk7XG5cbiAgICBpZiAoYXBpUmVzdWx0LnN1Y2Nlc3MgJiYgYXBpUmVzdWx0LnVzZXJJbmZvICYmIChhcGlSZXN1bHQudXNlckluZm8uaWQgfHwgYXBpUmVzdWx0LnVzZXJJbmZvLnVzZXJfbnVtYmVyKSkge1xuICAgICAgY29uc29sZS5sb2coJ0F1dGhHdWFyZDogU3VjY2Vzc2Z1bGx5IGZldGNoZWQgbmV3IFVzZXIgSUQuJyk7XG4gICAgICBcbiAgICAgIGNvbnN0IHVzZXJJbmZvVG9TYXZlID0ge1xuICAgICAgICBpZDogYXBpUmVzdWx0LnVzZXJJbmZvLmlkIHx8IGFwaVJlc3VsdC51c2VySW5mby51c2VyX251bWJlcixcbiAgICAgICAgdXNlcl9udW1iZXI6IGFwaVJlc3VsdC51c2VySW5mby51c2VyX251bWJlcixcbiAgICAgICAgcGV0X25hbWU6IGFwaVJlc3VsdC51c2VySW5mby5wZXRfbmFtZSxcbiAgICAgICAgdG90YWxfY2xpY2tzOiBhcGlSZXN1bHQudXNlckluZm8udG90YWxfY2xpY2tzIHx8IDBcbiAgICAgIH07XG5cbiAgICAgIC8vIFNhdmUgdGhlIG5ld2x5IGZldGNoZWQgdXNlciBpbmZvXG4gICAgICBhd2FpdCBzdG9yYWdlLnNldCh7IGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8sIHZhbHVlOiBKU09OLnN0cmluZ2lmeSh1c2VySW5mb1RvU2F2ZSkgfSk7XG4gICAgICByZXR1cm4geyBjYW5BY2Nlc3M6IHRydWUsIHVzZXJJbmZvOiB1c2VySW5mb1RvU2F2ZSwgbWVzc2FnZTogJ+eUqOaIt0lE6I635Y+W5oiQ5YqfJyB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnQXV0aEd1YXJkOiBGYWlsZWQgdG8gZmV0Y2ggVXNlciBJRC4nKTtcbiAgICAgIHJldHVybiB7IGNhbkFjY2VzczogZmFsc2UsIHVzZXJJbmZvOiBudWxsLCBtZXNzYWdlOiAn6I635Y+W55So5oi3SUTlpLHotKXvvIzor7fmo4Dmn6XnvZHnu5zlkI7ph43or5XjgIInIH07XG4gICAgfVxuXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBdXRoR3VhcmQ6IEVycm9yIGR1cmluZyBjaGVja05ldHdvcmtBY2Nlc3MnLCBlKTtcbiAgICByZXR1cm4geyBjYW5BY2Nlc3M6IGZhbHNlLCB1c2VySW5mbzogbnVsbCwgbWVzc2FnZTogYOWPkeeUn+mUmeivrzogJHtlLm1lc3NhZ2V9YCB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY2hlY2tOZXR3b3JrQWNjZXNzXG59O1xuIiwiLy8gY29uZmlnLmpzXG5leHBvcnQgY29uc3QgQ09ORklHID0ge1xuICAvLyDkuK3ovazmnI3liqHlmajphY3nva5cbiAgU0VSVkVSOiB7XG4gICAgQkFTRV9VUkw6ICdodHRwOi8vMTAzLjIwNS4yNTMuODc6MjIyMDcnXG4gIH0sXG4gIFxuICAvLyDms6jmhI/vvJpVUkwg5YmN57yA5ZyoIGFwaS1zZXJ2aWNlLmpzIOS4reehrOe8lueggeS6hlxuICAvLyDov5nph4zkuI3lho3pnIDopoHphY3nva5cbiAgXG4gIC8vIOW6lOeUqOmFjee9rlxuICBBUFA6IHtcbiAgICBOQU1FOiAnQmFuZFBldCcsXG4gICAgVkVSU0lPTjogJzAuMy41IEFscGhhJyxcbiAgICBNQVhfQ0xJQ0tTX1BFUl9CQVRDSDogNTAsXG4gICAgU1lOQ19JTlRFUlZBTDogMzAwMDAwLFxuICAgIFJBTktfTElNSVQ6IDEwXG4gIH0sXG4gIFxuICAvLyDlrZjlgqjplK7lkI1cbiAgU1RPUkFHRV9LRVlTOiB7XG4gICAgREVWSUNFX0lEOiAnZGV2aWNlX2lkJyxcbiAgICBVU0VSX0lORk86ICd1c2VyX2luZm8nLFxuICAgIFBFTkRJTkdfQ0xJQ0tTOiAncGVuZGluZ19jbGlja3MnLFxuICAgIExBU1RfU1lOQ19USU1FOiAnbGFzdF9zeW5jX3RpbWUnLFxuICAgIFRPVEFMX0NMSUNLUzogJ3RvdGFsX2NsaWNrcydcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNi44XCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjYuOFwiOyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDx0ZXh0IGNsYXNzPVwidGltZVwiPnt7IHRpbWUgfX08L3RleHQ+XG4gICAgPGRpdiBjbGFzcz1cImxlZnQtY2hlc3RcIiBvbmNsaWNrPVwiY2xhaW1DaGVzdCgwKVwiPlxuICAgICAgPHRleHQgY2xhc3M9XCJjaGVzdC1sYWJlbFwiPuWuneeusTwvdGV4dD5cbiAgICAgIDx0ZXh0IHNob3c9XCJ7eyFjaGVzdHNbMF0uY2xhaW1lZH19XCIgY2xhc3M9XCJjaGVzdC1jb3N0XCI+6Iqx6LS5OiAxMDAwPC90ZXh0PlxuICAgICAgPHRleHQgc2hvdz1cInt7Y2hlc3RzWzBdLmNsYWltZWR9fVwiIGNsYXNzPVwiY2hlc3QtdGltZXJcIj57eyBjaGVzdHNbMF0udGltZXJEaXNwbGF5IH19PC90ZXh0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jaGVzdFwiIG9uY2xpY2s9XCJjbGFpbUNoZXN0KDEpXCI+XG4gICAgICA8dGV4dCBjbGFzcz1cImNoZXN0LWxhYmVsXCI+5a6d566xPC90ZXh0PlxuICAgICAgPHRleHQgc2hvdz1cInt7IWNoZXN0c1sxXS5jbGFpbWVkfX1cIiBjbGFzcz1cImNoZXN0LWNvc3RcIj7oirHotLk6IDEwMDA8L3RleHQ+XG4gICAgICA8dGV4dCBzaG93PVwie3tjaGVzdHNbMV0uY2xhaW1lZH19XCIgY2xhc3M9XCJjaGVzdC10aW1lclwiPnt7IGNoZXN0c1sxXS50aW1lckRpc3BsYXkgfX08L3RleHQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBldC1jb250YWluZXJcIiBvbmNsaWNrPVwiaW5jcmVtZW50Q2xpY2tcIj5cbiAgICAgIDxpbWFnZSBjbGFzcz1cInBldC1pbWFnZVwiIHNyYz1cInt7IHBldEltYWdlIH19XCI+PC9pbWFnZT5cbiAgICAgIDx0ZXh0IGNsYXNzPVwicGV0LW5hbWVcIj57eyBwZXROYW1lIH19PC90ZXh0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJib3R0b20tYmFyXCI+XG48aW1hZ2Ugc3JjPVwiLi4vY29tbW9uL21vcmUucG5nXCIgY2xhc3M9XCJtb3JlLWJ1dHRvblwiIG9uY2xpY2s9XCJvcGVuTW9yZVwiPjwvaW1hZ2U+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2xpY2stY291bnRlclwiPlxuICAgICAgICA8dGV4dCBjbGFzcz1cImNsaWNrLWNvdW50ZXItdGV4dFwiPnt7IGNsaWNrQ291bnQgfX08L3RleHQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gIC5jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICB9XG4gIC50aW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNHB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgfVxuICAubGVmdC1jaGVzdCwgLnJpZ2h0LWNoZXN0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwNXB4O1xuICAgIGhlaWdodDogMTA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RBQTUyMDsgLyogR29sZGVuUm9kICovXG4gICAgYm9yZGVyLXJhZGl1czogMTAuNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiA3cHg7XG4gIH1cbiAgLmxlZnQtY2hlc3Qge1xuICAgIHRvcDogNzBweDtcbiAgICBsZWZ0OiAxNHB4O1xuICB9XG4gIC5yaWdodC1jaGVzdCB7XG4gICAgdG9wOiA3MHB4O1xuICAgIHJpZ2h0OiAxNHB4O1xuICB9XG4gIC5jaGVzdC1wcm9ncmVzcyB7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAuY2hlc3QtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIH1cbiAgLmNoZXN0LWNvc3Qge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMTYuOHB4O1xuICB9XG4gIC5jaGVzdC10aW1lciB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgZm9udC1zaXplOiAxNi44cHg7XG4gIH1cbiAgLnBldC1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMjEwcHg7XG4gICAgaGVpZ2h0OiAyMTBweDtcbiAgfVxuICAucGV0LWltYWdlIHtcbiAgICB3aWR0aDogMjEwcHg7IC8qIDE0MCAqIDEuNSAqL1xuICAgIGhlaWdodDogMjEwcHg7IC8qIDE0MCAqIDEuNSAqL1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cbiAgLnBldC1uYW1lIHtcbiAgICBjb2xvcjogIzg4ODg4ODtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDsgLyogSW5jcmVhc2VkIGZyb20gMTBweCB0byAyMHB4ICovXG4gIH1cbiAgLmJvdHRvbS1iYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIxcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAubW9yZS1idXR0b24ge1xuICAgIHdpZHRoOiA1NnB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAubW9yZS1idXR0b24tdGV4dCB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICB9XG4gIC5jbGljay1jb3VudGVyIHtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5jbGljay1jb3VudGVyLXRleHQge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XG4gIGltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XG4gIGltcG9ydCBwcm9tcHQgZnJvbSAnQHN5c3RlbS5wcm9tcHQnO1xuICBpbXBvcnQgQXBpU2VydmljZSBmcm9tICcuLi9jb21tb24vanMvYXBpLXNlcnZpY2UuanMnO1xuICBpbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuLi9jb21tb24vanMvY29uZmlnLmpzJztcbiAgaW1wb3J0IGF1dGhHdWFyZCBmcm9tICcuLi9jb21tb24vanMvYXV0aC1ndWFyZC5qcyc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGE6IHtcbiAgICAgIHRpbWU6ICcwMDowMCcsXG4gICAgICBwZXROYW1lOiAnKOaXoOWQjSknLFxuICAgICAgY2xpY2tDb3VudDogMCxcbiAgICAgIHBlbmRpbmdDbGlja3M6IDAsXG4gICAgICBwZXRJbWFnZTogJy9jb21tb24vUmEwLnBuZycsXG4gICAgICBjaGVzdHM6IFtcbiAgICAgICAgeyBjbGFpbWVkOiBmYWxzZSwgcmVmcmVzaFRpbWVzdGFtcDogMCwgdGltZXJEaXNwbGF5OiAn6Iqx6LS5OiAxMDAwJyB9LFxuICAgICAgICB7IGNsYWltZWQ6IGZhbHNlLCByZWZyZXNoVGltZXN0YW1wOiAwLCB0aW1lckRpc3BsYXk6ICfoirHotLk6IDEwMDAnIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIG9uSW5pdCgpIHtcbiAgICAgIHRoaXMudXBkYXRlVGltZSgpO1xuICAgICAgdGhpcy5sb2FkSW5pdGlhbFN0YXRlKCk7XG4gICAgICBcbiAgICAgIC8vIFNldCB1cCBpbnRlcnZhbHMgdW5jb25kaXRpb25hbGx5LiBUaGUgZ3VhcmQgaW5zaWRlIHN5bmNDbGlja3Mgd2lsbCBoYW5kbGUgbG9naWMuXG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLnN5bmNDbGlja3MuYmluZCh0aGlzKSwgQ09ORklHLkFQUC5TWU5DX0lOVEVSVkFMKTtcbiAgICAgIHNldEludGVydmFsKHRoaXMudXBkYXRlVGltZSwgNTAwMCk7XG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZUNoZXN0VGltZXJzLmJpbmQodGhpcyksIDEwMDApO1xuICAgIH0sXG4gICAgYXN5bmMgbG9hZEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgLy8gTG9hZCBub24tdXNlci1zcGVjaWZpYyBkYXRhXG4gICAgICAgIHN0b3JhZ2UuZ2V0KHtcbiAgICAgICAgICAgIGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5QRU5ESU5HX0NMSUNLUyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7IHRoaXMucGVuZGluZ0NsaWNrcyA9IHBhcnNlSW50KGRhdGEpIHx8IDA7IH1cbiAgICAgICAgfSk7XG4gICAgICAgIHN0b3JhZ2UuZ2V0KHtcbiAgICAgICAgICAgIGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5UT1RBTF9DTElDS1MsXG4gICAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4geyB0aGlzLmNsaWNrQ291bnQgPSBwYXJzZUludChkYXRhKSB8fCAwOyB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gQWxzbyB0cnkgdG8gbG9hZCB1c2VyLXNwZWNpZmljIGRhdGEgaWYgYXZhaWxhYmxlLCBidXQgZG9uJ3QgZ2F0ZSBhbnl0aGluZ1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdXNlckluZm9SZXN1bHQgPSBhd2FpdCBzdG9yYWdlLmdldCh7IGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8gfSk7XG4gICAgICAgICAgICBpZiAodXNlckluZm9SZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VySW5mbyA9IEpTT04ucGFyc2UodXNlckluZm9SZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySW5mbyAmJiB1c2VySW5mby5pZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBldE5hbWUgPSB1c2VySW5mby5wZXRfbmFtZSB8fCAnKOaXoOWQjSknO1xuICAgICAgICAgICAgICAgICAgICAvLyBQb3RlbnRpYWxseSBsb2FkIHNlcnZlci1zeW5jZWQgY2xpY2tDb3VudCBoZXJlIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNsaWNrQ291bnQgPSB1c2VySW5mby5jbGlja19jb3VudCB8fCB0aGlzLmNsaWNrQ291bnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGUpIHsgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgdXNlciBpbmZvIG9uIGluaXQ6XCIsIGUpfVxuXG4gICAgICAgIHRoaXMubG9hZENoZXN0U3RhdGVzKCk7XG4gICAgfSxcbiAgICBsb2FkQ2hlc3RTdGF0ZXMoKSB7XG4gICAgICBzdG9yYWdlLmdldCh7XG4gICAgICAgIGtleTogJ2NoZXN0U3RhdGVzJyxcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgbG9hZGVkQ2hlc3RzID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY2hlc3RzID0gbG9hZGVkQ2hlc3RzLm1hcChjaGVzdCA9PiB7XG4gICAgICAgICAgICAgIGlmIChjaGVzdC5yZWZyZXNoVGltZXN0YW1wID4gMCAmJiBjaGVzdC5jbGFpbWVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nVGltZSA9IE1hdGgubWF4KDAsIGNoZXN0LnJlZnJlc2hUaW1lc3RhbXAgLSBEYXRlLm5vdygpKTtcbiAgICAgICAgICAgICAgICBpZiAocmVtYWluaW5nVGltZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICBjaGVzdC5jbGFpbWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBjaGVzdC5yZWZyZXNoVGltZXN0YW1wID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGNoZXN0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNhdmVDaGVzdFN0YXRlcygpIHtcbiAgICAgIHN0b3JhZ2Uuc2V0KHsga2V5OiAnY2hlc3RTdGF0ZXMnLCB2YWx1ZTogSlNPTi5zdHJpbmdpZnkodGhpcy5jaGVzdHMpIH0pO1xuICAgIH0sXG4gICAgdXBkYXRlVGltZSgpIHtcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBob3VycyA9IG5vdy5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgIHRoaXMudGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICB9LFxuICAgIHVwZGF0ZUNoZXN0VGltZXJzKCkge1xuICAgICAgdGhpcy5jaGVzdHMuZm9yRWFjaCgoY2hlc3QsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChjaGVzdC5jbGFpbWVkICYmIGNoZXN0LnJlZnJlc2hUaW1lc3RhbXAgPiAwKSB7XG4gICAgICAgICAgY29uc3QgcmVtYWluaW5nVGltZSA9IE1hdGgubWF4KDAsIGNoZXN0LnJlZnJlc2hUaW1lc3RhbXAgLSBEYXRlLm5vdygpKTtcbiAgICAgICAgICB0aGlzLmNoZXN0c1tpbmRleF0udGltZXJEaXNwbGF5ID0gdGhpcy5mb3JtYXRUaW1lKHJlbWFpbmluZ1RpbWUgLyAxMDAwKTtcbiAgICAgICAgICBpZiAocmVtYWluaW5nVGltZSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNoZXN0c1tpbmRleF0uY2xhaW1lZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jaGVzdHNbaW5kZXhdLnJlZnJlc2hUaW1lc3RhbXAgPSAwO1xuICAgICAgICAgICAgdGhpcy5zYXZlQ2hlc3RTdGF0ZXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZm9ybWF0VGltZShzZWNvbmRzKSB7XG4gICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xuICAgICAgY29uc3QgcmVtYWluaW5nU2Vjb25kcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAlIDYwKTtcbiAgICAgIHJldHVybiBgJHttaW51dGVzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX06JHtyZW1haW5pbmdTZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gO1xuICAgIH0sXG4gICAgaW5jcmVtZW50Q2xpY2soKSB7XG4gICAgICB0aGlzLmNsaWNrQ291bnQrKztcbiAgICAgIHRoaXMucGVuZGluZ0NsaWNrcysrO1xuICAgICAgc3RvcmFnZS5zZXQoeyBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuUEVORElOR19DTElDS1MsIHZhbHVlOiB0aGlzLnBlbmRpbmdDbGlja3MudG9TdHJpbmcoKSB9KTtcbiAgICAgIHN0b3JhZ2Uuc2V0KHsga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLlRPVEFMX0NMSUNLUywgdmFsdWU6IHRoaXMuY2xpY2tDb3VudC50b1N0cmluZygpIH0pO1xuXG4gICAgICAvLyBSYW5kb21seSBzd2l0Y2ggcGV0IGltYWdlIHRvIFJhMSBvciBSYTJcbiAgICAgIGNvbnN0IHJhbmRvbUltYWdlID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICcvY29tbW9uL1JhMS5wbmcnIDogJy9jb21tb24vUmEyLnBuZyc7XG4gICAgICB0aGlzLnBldEltYWdlID0gcmFuZG9tSW1hZ2U7XG5cbiAgICAgIC8vIFJlc2V0IHRvIFJhMCBhZnRlciBhIHNob3J0IGRlbGF5XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5wZXRJbWFnZSA9ICcvY29tbW9uL1JhMC5wbmcnO1xuICAgICAgfSwgMjAwKTtcbiAgICB9LFxuICAgIGNsYWltQ2hlc3QoaW5kZXgpIHtcbiAgICAgIGNvbnN0IGNoZXN0ID0gdGhpcy5jaGVzdHNbaW5kZXhdO1xuICAgICAgaWYgKGNoZXN0LmNsYWltZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NoZXN0IGlzIG9uIGNvb2xkb3duLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jbGlja0NvdW50ID49IDEwMDApIHtcbiAgICAgICAgdGhpcy5jbGlja0NvdW50IC09IDEwMDA7XG4gICAgICAgIGNvbnN0IHJld2FyZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwMCkgKyAxMDA7XG4gICAgICAgIHRoaXMuY2xpY2tDb3VudCArPSByZXdhcmQ7XG4gICAgICAgIHN0b3JhZ2Uuc2V0KHsga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLlRPVEFMX0NMSUNLUywgdmFsdWU6IHRoaXMuY2xpY2tDb3VudC50b1N0cmluZygpIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhgQ2hlc3QgJHtpbmRleH0gY2xhaW1lZCEgUmV3YXJkZWQgJHtyZXdhcmR9IGNsaWNrcy5gKTtcbiAgICAgICAgdGhpcy5jaGVzdHNbaW5kZXhdLmNsYWltZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNoZXN0c1tpbmRleF0ucmVmcmVzaFRpbWVzdGFtcCA9IERhdGUubm93KCkgKyAoMzAgKiA2MCAqIDEwMDApO1xuICAgICAgICB0aGlzLnNhdmVDaGVzdFN0YXRlcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vdCBlbm91Z2ggY2xpY2tzIHRvIG9wZW4gY2hlc3QuJyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBzeW5jQ2xpY2tzKCkge1xuICAgICAgaWYgKHRoaXMucGVuZGluZ0NsaWNrcyA9PT0gMCkge1xuICAgICAgICByZXR1cm47IC8vIE5vIG5lZWQgdG8gY2hlY2sgYXV0aCBpZiB0aGVyZSdzIG5vdGhpbmcgdG8gc3luY1xuICAgICAgfVxuXG4gICAgICBjb25zdCBndWFyZFJlc3VsdCA9IGF3YWl0IGF1dGhHdWFyZC5jaGVja05ldHdvcmtBY2Nlc3MoKTtcbiAgICAgIGlmICghZ3VhcmRSZXN1bHQuY2FuQWNjZXNzKSB7XG4gICAgICAgIHByb21wdC5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6IGd1YXJkUmVzdWx0Lm1lc3NhZ2UsXG4gICAgICAgICAgZHVyYXRpb246IDMwMDBcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc3QgdXNlcklkID0gZ3VhcmRSZXN1bHQudXNlckluZm8uaWQ7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLnN5bmNDbGlja3ModXNlcklkLCB0aGlzLnBlbmRpbmdDbGlja3MpO1xuICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgIHRoaXMucGVuZGluZ0NsaWNrcyA9IDA7XG4gICAgICAgIHN0b3JhZ2Uuc2V0KHsga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLlBFTkRJTkdfQ0xJQ0tTLCB2YWx1ZTogJzAnIH0pO1xuICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHsgbWVzc2FnZTogJ+eCueWHu+asoeaVsOW3suWQjOatpScgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHsgbWVzc2FnZTogJ+WQjOatpeWksei0pe+8jOivt+eojeWQjumHjeivlScgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvcGVuTW9yZSgpIHtcbiAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgdXJpOiAnbW9yZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX3N5c3RlbTIiLCJfc3lzdGVtMyIsIl9zeXN0ZW00IiwiX2NvbmZpZyIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJvd25LZXlzIiwiciIsInQiLCJPYmplY3QiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsInZhbHVlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiQXBpU2VydmljZSIsImNvbnN0cnVjdG9yIiwiYmFzZVVybCIsIkNPTkZJRyIsIlNFUlZFUiIsIkJBU0VfVVJMIiwiYmFzZUhlYWRlcnMiLCJyZXF1ZXN0IiwiYWN0aW9uIiwiZGF0YSIsInVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXIiLCJyZXNwb25zZVR5cGUiLCJKU09OIiwic3RyaW5naWZ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInJlc3BvbnNlRGF0YSIsImNvZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImZhaWwiLCJnZXRSYW5raW5ncyIsImxpbWl0IiwicmVzdWx0IiwicmFua2luZ3MiLCJtZXNzYWdlIiwic3luY0NsaWNrcyIsInVzZXJJZCIsImNsaWNrQ291bnQiLCJ1c2VyX2lkIiwiY2xpY2tfY291bnQiLCJjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkiLCJwZXROYW1lIiwicGV0X25hbWUiLCJpc0F2YWlsYWJsZSIsInNldFBldE5hbWUiLCJuZXdOYW1lIiwibmV3X25hbWUiLCJjaGVja0RldmljZVJlZ2lzdHJhdGlvbiIsImRldmljZUlkIiwiZGV2aWNlX2lkIiwibG9nIiwicmVnaXN0ZXJBbmRHZXRVc2VySWQiLCJ1c2VySW5mbyIsInZlcmlmeVVzZXJJZEFuZFJlc3RvcmUiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJfYXBpU2VydmljZSIsImNoZWNrTmV0d29ya0FjY2VzcyIsImxvY2FsQWN0aXZhdGlvbiIsImdldCIsImtleSIsIlNUT1JBR0VfS0VZUyIsIklTX0xPQ0FMTFlfQUNUSVZBVEVEIiwidXJpIiwiY2FuQWNjZXNzIiwidXNlckluZm9SZXN1bHQiLCJVU0VSX0lORk8iLCJwYXJzZSIsImlkIiwiZGV2aWNlQ29kZVJlc3VsdCIsIkRFVklDRV9JRCIsImRldmljZUNvZGUiLCJhcGlSZXN1bHQiLCJ1c2VyX251bWJlciIsInVzZXJJbmZvVG9TYXZlIiwidG90YWxfY2xpY2tzIiwic2V0IiwiQVBQIiwiTkFNRSIsIlZFUlNJT04iLCJNQVhfQ0xJQ0tTX1BFUl9CQVRDSCIsIlNZTkNfSU5URVJWQUwiLCJSQU5LX0xJTUlUIiwiUEVORElOR19DTElDS1MiLCJMQVNUX1NZTkNfVElNRSIsIlRPVEFMX0NMSUNLUyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJfYXV0aEd1YXJkIiwidGltZSIsInBlbmRpbmdDbGlja3MiLCJwZXRJbWFnZSIsImNoZXN0cyIsImNsYWltZWQiLCJyZWZyZXNoVGltZXN0YW1wIiwidGltZXJEaXNwbGF5Iiwib25Jbml0IiwidXBkYXRlVGltZSIsImxvYWRJbml0aWFsU3RhdGUiLCJzZXRJbnRlcnZhbCIsImJpbmQiLCJ1cGRhdGVDaGVzdFRpbWVycyIsInN0b3JhZ2UiLCJwYXJzZUludCIsImxvYWRDaGVzdFN0YXRlcyIsImxvYWRlZENoZXN0cyIsIm1hcCIsImNoZXN0IiwicmVtYWluaW5nVGltZSIsIk1hdGgiLCJtYXgiLCJEYXRlIiwibm93Iiwic2F2ZUNoZXN0U3RhdGVzIiwiaG91cnMiLCJnZXRIb3VycyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImluZGV4IiwiZm9ybWF0VGltZSIsInNlY29uZHMiLCJmbG9vciIsInJlbWFpbmluZ1NlY29uZHMiLCJpbmNyZW1lbnRDbGljayIsInJhbmRvbUltYWdlIiwicmFuZG9tIiwic2V0VGltZW91dCIsImNsYWltQ2hlc3QiLCJyZXdhcmQiLCJndWFyZFJlc3VsdCIsImF1dGhHdWFyZCIsInByb21wdCIsInNob3dUb2FzdCIsImR1cmF0aW9uIiwib3Blbk1vcmUiLCJyb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUNBLElBQUFBLFVBQUFDLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFDLFdBQUFGLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFFLFdBQUFILHVCQUFBQyxlQUFBO3dCQUNBLElBQUFHLFdBQUFKLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFJLFVBQUFDLG9CQUFBO3dCQUFxQyxTQUFBTix1QkFBQU8sQ0FBQTs0QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7Z0NBQUFFLFNBQUFGOzRCQUFBO3dCQUFBO3dCQUFBLFNBQUFHLFFBQUFILENBQUEsRUFBQUksQ0FBQTs0QkFBQSxJQUFBQyxJQUFBQyxPQUFBQyxJQUFBLENBQUFQOzRCQUFBLElBQUFNLE9BQUFFLHFCQUFBO2dDQUFBLElBQUFDLElBQUFILE9BQUFFLHFCQUFBLENBQUFSO2dDQUFBSSxLQUFBSyxDQUFBQSxJQUFBQSxFQUFBQyxNQUFBLFVBQUFOLENBQUE7b0NBQUEsT0FBQUUsT0FBQUssd0JBQUEsQ0FBQVgsR0FBQUksR0FBQVEsVUFBQTtnQ0FBQSxLQUFBUCxFQUFBUSxJQUFBLENBQUFDLEtBQUEsQ0FBQVQsR0FBQUk7NEJBQUE7NEJBQUEsT0FBQUo7d0JBQUE7d0JBQUEsU0FBQVUsY0FBQWYsQ0FBQTs0QkFBQSxRQUFBSSxJQUFBLEdBQUFBLElBQUFZLFVBQUFDLE1BQUEsRUFBQWIsSUFBQTtnQ0FBQSxJQUFBQyxJQUFBLFFBQUFXLFNBQUEsQ0FBQVosRUFBQSxHQUFBWSxTQUFBLENBQUFaLEVBQUE7Z0NBQUFB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