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
                                justifyContent: "flex-start"
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
                        var _system4 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                        var _apiService = _interopRequireDefault(__webpack_require__("./src/common/js/api-service.js"));
                        var _config = __webpack_require__("./src/common/js/config.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
                            data: {
                                time: '00:00',
                                rawDeviceId: null,
                                displayedDeviceCode: '正在生成...',
                                activationCode: '',
                                userIdInput: '',
                                statusMessage: '',
                                uiState: 'enter_activation_code'
                            },
                            async onInit () {
                                this.updateTime();
                                setInterval(this.updateTime, 5000);
                                const generated = await this.processDeviceIdentifier();
                                if (generated) this.attemptAutoActivation();
                                else {
                                    this.displayedDeviceCode = '获取失败';
                                    this.statusMessage = '无法获取设备标识，请重启应用。';
                                }
                            },
                            async handleActivationSuccess (userInfo) {
                                await _system3.default.set({
                                    key: _config.CONFIG.STORAGE_KEYS.IS_LOCALLY_ACTIVATED,
                                    value: 'true'
                                });
                                const userInfoToSave = {
                                    id: userInfo.id || userInfo.user_number,
                                    user_number: userInfo.user_number,
                                    pet_name: userInfo.pet_name,
                                    total_clicks: userInfo.total_clicks || 0
                                };
                                await _system3.default.set({
                                    key: _config.CONFIG.STORAGE_KEYS.USER_INFO,
                                    value: JSON.stringify(userInfoToSave)
                                });
                                setTimeout(()=>{
                                    _system.default.replace({
                                        uri: 'main'
                                    });
                                }, 1000);
                            },
                            async attemptAutoActivation () {
                                if (!this.rawDeviceId) return;
                                this.statusMessage = '正在检查设备注册信息...';
                                const result = await _apiService.default.checkDeviceRegistration(this.rawDeviceId);
                                if (result.success && result.data && result.data.is_registered) {
                                    const { userInfo, auto_activation_count, reason } = result.data;
                                    if ('logged_in_on_newer_device' === reason) {
                                        this.statusMessage = '此设备之前绑定的用户已在其他设备上登录，请重新激活。';
                                        return;
                                    }
                                    if (result.data.can_auto_activate) {
                                        this.statusMessage = `自动激活成功！正在恢复数据... (${(auto_activation_count || 0) + 1}/5)`;
                                        await this.handleActivationSuccess(userInfo);
                                    } else this.statusMessage = '自动激活次数已达上限，请手动激活。';
                                } else this.statusMessage = '';
                            },
                            updateTime () {
                                const now = new Date();
                                const hours = now.getHours().toString().padStart(2, '0');
                                const minutes = now.getMinutes().toString().padStart(2, '0');
                                this.time = `${hours}:${minutes}`;
                            },
                            goBack () {
                                if ('enter_user_id' === this.uiState) {
                                    this.uiState = 'enter_activation_code';
                                    this.statusMessage = '';
                                    this.userIdInput = '';
                                } else _system.default.back();
                            },
                            handleKeyClick (e) {
                                const key = e.detail.value;
                                if ('enter_user_id' === this.uiState) if ('⌫' === key) this.userIdInput = this.userIdInput.slice(0, -1);
                                else if ('✓' === key) this.verifyUserIdAndProceed();
                                else this.userIdInput += key;
                                else if ('⌫' === key) this.activationCode = this.activationCode.slice(0, -1);
                                else if ('✓' === key) this.activate();
                                else this.activationCode += key;
                            },
                            async verifyUserIdAndProceed () {
                                if (!this.userIdInput || !this.rawDeviceId) return;
                                this.statusMessage = '正在验证用户ID...';
                                const result = await _apiService.default.verifyUserIdAndRestore(this.rawDeviceId, this.userIdInput);
                                if (result.success && result.userInfo) {
                                    this.statusMessage = '验证成功，正在恢复数据...';
                                    await this.handleActivationSuccess(result.userInfo);
                                } else this.statusMessage = result.error || '用户ID验证失败，请重试。';
                            },
                            processDeviceIdentifier () {
                                return new Promise((resolve)=>{
                                    _system2.default.getSerial({
                                        success: (data)=>{
                                            if (!data || !data.serial || 'NA' === data.serial) {
                                                console.error('Failed to get serial: returned an invalid identifier:', data.serial);
                                                resolve(false);
                                                return;
                                            }
                                            this.rawDeviceId = data.serial;
                                            _system3.default.set({
                                                key: _config.CONFIG.STORAGE_KEYS.DEVICE_ID,
                                                value: this.rawDeviceId,
                                                success: ()=>{
                                                    let processedSerial = this.rawDeviceId.substring(0, 13).replace(/\//g, '');
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
                                                        console.error('Processed serial is not a 12-digit number.');
                                                        resolve(false);
                                                        return;
                                                    }
                                                    const pairs = numericSerial.match(/.{1,2}/g) || [];
                                                    const selectedPairs = [
                                                        pairs[0],
                                                        pairs[2],
                                                        pairs[4]
                                                    ];
                                                    const sumAB = parseInt(selectedPairs[0][0], 10) + parseInt(selectedPairs[0][1], 10);
                                                    const sumEF = parseInt(selectedPairs[1][0], 10) + parseInt(selectedPairs[1][1], 10);
                                                    const sumIJ = parseInt(selectedPairs[2][0], 10) + parseInt(selectedPairs[2][1], 10);
                                                    const sumBFJ = parseInt(selectedPairs[0][1], 10) + parseInt(selectedPairs[1][1], 10) + parseInt(selectedPairs[2][1], 10);
                                                    this.displayedDeviceCode = `${String(sumAB).padStart(2, '0')}${String(sumEF).padStart(2, '0')}${String(sumIJ).padStart(2, '0')}${String(sumBFJ).padStart(2, '0')}1`;
                                                    console.log('Raw Device ID:', this.rawDeviceId);
                                                    console.log('Displayed Device Code:', this.displayedDeviceCode);
                                                    resolve(true);
                                                },
                                                fail: (err, code)=>{
                                                    console.error(`Failed to save raw device ID to storage. Code: ${code}, Error: ${err}`);
                                                    resolve(false);
                                                }
                                            });
                                        },
                                        fail: (err, code)=>{
                                            console.error(`Failed to get serial. Code: ${code}, Error: ${err}`);
                                            resolve(false);
                                        }
                                    });
                                });
                            },
                            async activate () {
                                if (!this.activationCode || 11 !== this.activationCode.length) {
                                    this.statusMessage = "激活码长度不正确，应为11位";
                                    return;
                                }
                                const ac = this.activationCode;
                                const G_val = parseInt(ac[6], 10);
                                const K_val = parseInt(ac[10], 10);
                                const HI_modified_num = parseInt(`${ac[7]}${ac[8]}`, 10) - G_val - K_val;
                                if (HI_modified_num < 0 || HI_modified_num > 99) {
                                    this.statusMessage = "激活失败: HI减法结果无效";
                                    return;
                                }
                                const HI_modified_str = String(HI_modified_num).padStart(2, '0');
                                const AB_val = parseInt(`${ac[0]}${ac[1]}`, 10);
                                const CD_val = parseInt(`${ac[2]}${ac[3]}`, 10);
                                const EF_val = parseInt(`${ac[4]}${ac[5]}`, 10);
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
                                const groupABCDEFHIJ = `${String(AB_divided).padStart(2, '0')}${String(CD_divided).padStart(2, '0')}${String(EF_divided).padStart(2, '0')}${HI_modified_str}${ac[9]}`;
                                if (groupABCDEFHIJ !== this.displayedDeviceCode) {
                                    this.statusMessage = "激活失败: 设备码不匹配";
                                    return;
                                }
                                const now = new Date();
                                let currentMinutes = now.getMinutes();
                                if (currentMinutes <= 9) currentMinutes += 60;
                                const GJ_value = parseInt(`${ac[6]}${ac[9]}`, 10);
                                const diff = currentMinutes - GJ_value;
                                if (diff > 10 || diff < 0) {
                                    this.statusMessage = `激活失败: 时间校验不通过 (差值: ${diff})`;
                                    return;
                                }
                                this.statusMessage = "本地校验成功，正在注册设备...";
                                try {
                                    var _result$userInfo, _result$userInfo2;
                                    const result = await _apiService.default.registerAndGetUserId(this.rawDeviceId);
                                    if (result.success && (null != (_result$userInfo = result.userInfo) && _result$userInfo.id || null != (_result$userInfo2 = result.userInfo) && _result$userInfo2.user_number)) {
                                        this.statusMessage = "激活成功！已获取用户ID。";
                                        await this.handleActivationSuccess(result.userInfo);
                                    } else if ('user_id_verification_required' === result.reason) {
                                        this.statusMessage = result.message || '此用户名已存在，请输入用户ID以验证。';
                                        this.uiState = 'enter_user_id';
                                    } else this.statusMessage = "激活失败: " + (result.error || "无法从服务器获取用户信息");
                                } catch (e) {
                                    this.statusMessage = "激活失败: 网络请求错误，请重试。";
                                }
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
                                                value: function() {
                                                    return "enter_user_id" === _vm_.uiState ? "\u9A8C\u8BC1\u7528\u6237ID" : "\u6FC0\u6D3B";
                                                }
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
                                                        return _vm_.displayedDeviceCode;
                                                    }
                                                }
                                            }, [])
                                        ])
                                    ]),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return "enter_activation_code" === _vm_.uiState;
                                            }
                                        }
                                    }, function() {
                                        return [
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
                                            ])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return "enter_user_id" === _vm_.uiState;
                                            }
                                        }
                                    }, function() {
                                        return [
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
                                                        value: "用户ID"
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
                                                                return _vm_.userIdInput || "\u70B9\u51FB\u8F93\u5165\u7528\u6237ID";
                                                            }
                                                        }
                                                    }, [])
                                                ])
                                            ])
                                        ];
                                    }),
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZhdGVcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9hY3RpdmF0ZS9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcGktc2VydmljZS5qc1xuaW1wb3J0IGZldGNoIGZyb20gJ0BzeXN0ZW0uZmV0Y2gnO1xuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xuaW1wb3J0IHByb21wdCBmcm9tICdAc3lzdGVtLnByb21wdCc7XG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XG5cbmNsYXNzIEFwaVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJhc2VIZWFkZXJzID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgQ09ORklHLlNVUEFCQVNFLktFWSxcbiAgICAgICdhcGlrZXknOiBDT05GSUcuU1VQQUJBU0UuS0VZXG4gICAgfVxuICB9XG5cbiAgLy8g6YCa55So6K+35rGC5pa55rOVXG4gIGFzeW5jIHJlcXVlc3QoZW5kcG9pbnQsIG1ldGhvZCA9ICdQT1NUJywgZGF0YSA9IG51bGwpIHtcbiAgICBjb25zdCB1cmwgPSBgJHtDT05GSUcuU1VQQUJBU0UuVVJMfS9mdW5jdGlvbnMvdjEvJHtlbmRwb2ludH1gXG4gICAgXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZCxcbiAgICAgIGhlYWRlcjogdGhpcy5iYXNlSGVhZGVycyxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXG4gICAgfVxuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIG9wdGlvbnMuZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZldGNoLmZldGNoKHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcblxuICAgICAgICAgIFxuXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUgPj0gMjAwICYmIHJlc3BvbnNlLmNvZGUgPCAzMDApIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2VEYXRhKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBIVFRQIEVycm9yOiAke3Jlc3BvbnNlLmNvZGV9YCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgSFRUUCAke3Jlc3BvbnNlLmNvZGV9OiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlRGF0YSl9YCkpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAoZXJyb3IsIGNvZGUpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBSZXF1ZXN0IEZhaWxlZDogJHtjb2RlfWAsIGVycm9yKTtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZDogJHtlcnJvci5kYXRhfWApKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvLyDojrflj5bmjpLooYzmppxcbiAgYXN5bmMgZ2V0UmFua2luZ3MobGltaXQgPSAxMCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2JyaWdodC1yZXNwb25kZXInLCAnUE9TVCcsIHtcbiAgICAgICAgYWN0aW9uOiAnZ2V0X3JhbmtpbmdzJyxcbiAgICAgICAgbGltaXQ6IGxpbWl0XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgcmFua2luZ3M6IHJlc3VsdC5yYW5raW5ncyB8fCBbXVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfojrflj5bmjpLooYzmppzlpLHotKU6JywgZXJyb3IpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgcmFua2luZ3M6IFtdLFxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIOS4iuaKpeeCueWHu+asoeaVsFxuICBhc3luYyBzeW5jQ2xpY2tzKHVzZXJJZCwgY2xpY2tDb3VudCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLnJlcXVlc3QoJ2JyaWdodC1yZXNwb25kZXInLCAnUE9TVCcsIHtcbiAgICAgICAgYWN0aW9uOiAnc3luY19jbGlja3MnLFxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgICAgIGNsaWNrX2NvdW50OiBjbGlja0NvdW50XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S4iuaKpeeCueWHu+asoeaVsOWksei0pTonLCBlcnJvcilcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIOajgOafpeWuoOeJqeWQjeaYr+WQpuWPr+eUqFxuICBhc3luYyBjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkocGV0TmFtZSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2JyaWdodC1yZXNwb25kZXInLCAnUE9TVCcsIHtcbiAgICAgICAgYWN0aW9uOiAnY2hlY2tfcGV0X25hbWUnLFxuICAgICAgICBwZXRfbmFtZTogcGV0TmFtZVxuICAgICAgfSk7XG4gICAgICAvLyDlgYforr7mnI3liqHlmajov5Tlm54geyBpc0F2YWlsYWJsZTogdHJ1ZS9mYWxzZSB9XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCAuLi5yZXN1bHQgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5qOA5p+l5a6g54mp5ZCN5Y+v55So5oCn5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSwgaXNBdmFpbGFibGU6IGZhbHNlIH07XG4gICAgfVxuICB9XG5cbiAgLy8g5L+u5pS55a6g54mp5ZCNXG4gIGFzeW5jIHNldFBldE5hbWUodXNlcklkLCBuZXdOYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdzZXRfcGV0X25hbWUnLFxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgICAgIG5ld19uYW1lOiBuZXdOYW1lXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S/ruaUueWuoOeJqeWQjeWksei0pTonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cblxuICAvLyDpooTmv4DmtLvmo4Dmn6VcbiAgYXN5bmMgY2hlY2tEZXZpY2VSZWdpc3RyYXRpb24oZGV2aWNlSWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdicmlnaHQtcmVzcG9uZGVyJywgJ1BPU1QnLCB7XG4gICAgICAgIGFjdGlvbjogJ2NoZWNrX3JlZ2lzdHJhdGlvbicsXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWRcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ+mihOa/gOa0u+ajgOafpeaIkOWKnzonLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+mihOa/gOa0u+ajgOafpeaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cblxuICAvLyDms6jlhozorr7lpIflubbojrflj5bnlKjmiLdJRFxuICBhc3luYyByZWdpc3RlckFuZEdldFVzZXJJZChkZXZpY2VJZCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2JyaWdodC1yZXNwb25kZXInLCAnUE9TVCcsIHtcbiAgICAgICAgYWN0aW9uOiAncmVnaXN0ZXJfZGV2aWNlX2FuZF9nZXRfaWQnLFxuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkXG4gICAgICB9KTtcbiAgICAgIC8vIOWBh+iuvuacjeWKoeWZqOaIkOWKn+aXtui/lOWbniB7IHN1Y2Nlc3M6IHRydWUsIHVzZXJJbmZvOiB7IGlkOiAnLi4uJywgLi4uIH0gfVxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICBjb25zb2xlLmxvZygn5rOo5YaM6K6+5aSH5bm26I635Y+W55So5oi3SUTmiJDlip86JywgcmVzdWx0LnVzZXJJbmZvKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdXNlckluZm86IHJlc3VsdC51c2VySW5mbyB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcign6I635Y+W55So5oi3SUTlpLHotKU6JywgcmVzdWx0ID8gcmVzdWx0LmVycm9yIDogJ+acquefpemUmeivrycpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IChyZXN1bHQgPyByZXN1bHQuZXJyb3IgOiAn5pyN5Yqh5Zmo5pyq6L+U5Zue5oiQ5Yqf54q25oCBJykgfTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5rOo5YaM5oiW6I635Y+W55So5oi3SUTml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICB9XG5cbiAgLy8g6aqM6K+B55So5oi3SUTlubbmgaLlpI3mlbDmja5cbiAgYXN5bmMgdmVyaWZ5VXNlcklkQW5kUmVzdG9yZShkZXZpY2VJZCwgdXNlcklkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICd2ZXJpZnlfdXNlcl9pZF9hbmRfcmVzdG9yZScsXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWQsXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZFxuICAgICAgfSk7XG4gICAgICAvLyDlgYforr7mnI3liqHlmajmiJDlip/ml7bov5Tlm54geyBzdWNjZXNzOiB0cnVlLCB1c2VySW5mbzogeyAuLi4gfSB9XG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVzZXJJbmZvOiByZXN1bHQudXNlckluZm8gfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogKHJlc3VsdCA/IHJlc3VsdC5lcnJvciA6ICfpqozor4HlpLHotKUnKSB9O1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfpqozor4HnlKjmiLdJROaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwaVNlcnZpY2UoKVxuIiwiLy8gY29uZmlnLmpzXG5leHBvcnQgY29uc3QgQ09ORklHID0ge1xuICAvLyBTdXBhYmFzZemFjee9rlxuICBTVVBBQkFTRToge1xuICAgIFVSTDogJ2h0dHBzOi8vanF1YnlxbmhneXhhenBucGp5cWYuc3VwYWJhc2UuY28nLFxuICAgIEtFWTogJ3NiX3B1Ymxpc2hhYmxlX19VTVlHdjFWRG8tWnJPdnVVZ1pMRmdfV0txeWM3TS0nLCAvLyDor7fmm7/mjaLkuLrkvaDnmoRTdXBhYmFzZeWMv+WQjeWvhumSpVxuICB9LFxuICBcbiAgLy8g5bqU55So6YWN572uXG4gIEFQUDoge1xuICAgIE5BTUU6ICdCYW5kUGV0JyxcbiAgICBWRVJTSU9OOiAnMS4wLjAnLFxuICAgIE1BWF9DTElDS1NfUEVSX0JBVENIOiA1MCwgLy8g5om56YeP5LiK5Lyg5pyA5aSn54K55Ye75pWwXG4gICAgU1lOQ19JTlRFUlZBTDogMzAwMDAwLCAvLyA15YiG6ZKf5ZCM5q2l5LiA5qyhXG4gICAgUkFOS19MSU1JVDogMTAgLy8g5o6S6KGM5qac5pi+56S65pWw6YePXG4gIH0sXG4gIFxuICAvLyDlrZjlgqjplK7lkI1cbiAgU1RPUkFHRV9LRVlTOiB7XG4gICAgSVNfTE9DQUxMWV9BQ1RJVkFURUQ6ICdpc19sb2NhbGx5X2FjdGl2YXRlZCcsXG4gICAgREVWSUNFX0lEOiAnZGV2aWNlX2lkJyxcbiAgICBVU0VSX0lORk86ICd1c2VyX2luZm8nLFxuICAgIFBFTkRJTkdfQ0xJQ0tTOiAncGVuZGluZ19jbGlja3MnLFxuICAgIExBU1RfU1lOQ19USU1FOiAnbGFzdF9zeW5jX3RpbWUnLFxuICAgIFRPVEFMX0NMSUNLUzogJ3RvdGFsX2NsaWNrcydcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNi44XCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjYuOFwiOyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vYmFjay5wbmdcIiBjbGFzcz1cInBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uXCIgb25jbGljaz1cImdvQmFja1wiPjwvaW1hZ2U+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGUtdGltZVwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicGFnZS10aW1lLWRpc3BsYXlcIj57eyB0aW1lIH19PC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicGFnZS1oZWFkZXItdGl0bGVcIj57eyB1aVN0YXRlID09PSAnZW50ZXJfdXNlcl9pZCcgPyAn6aqM6K+B55So5oi3SUQnIDogJ+a/gOa0uycgfX08L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPHNjcm9sbCBjbGFzcz1cImNvbnRlbnQtc2Nyb2xsLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLWNvZGUtc2VjdGlvblwiPlxuICAgICAgICAgIDx0ZXh0PuaCqOeahOiuvuWkh+eggeS4ujwvdGV4dD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29kZS1ib3hcIj5cbiAgICAgICAgICAgIDwhLS0gRGlzcGxheSB0aGUgcHJvY2Vzc2VkIGNvZGUgLS0+XG4gICAgICAgICAgICA8dGV4dD57eyBkaXNwbGF5ZWREZXZpY2VDb2RlIH19PC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIEFjdGl2YXRpb24gQ29kZSBJbnB1dCBTdGF0ZSAtLT5cbiAgICAgICAgPGRpdiBpZj1cInt7IHVpU3RhdGUgPT09ICdlbnRlcl9hY3RpdmF0aW9uX2NvZGUnIH19XCIgY2xhc3M9XCJhY3RpdmF0aW9uLWNvZGUtc2VjdGlvblwiPlxuICAgICAgICAgIDx0ZXh0Pua/gOa0u+eggTwvdGV4dD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtYm94XCI+XG4gICAgICAgICAgICA8dGV4dD57eyBhY3RpdmF0aW9uQ29kZSB8fCAn54K55Ye76L6T5YWlJyB9fTwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBVc2VyIElEIElucHV0IFN0YXRlIC0tPlxuICAgICAgICA8ZGl2IGlmPVwie3sgdWlTdGF0ZSA9PT0gJ2VudGVyX3VzZXJfaWQnIH19XCIgY2xhc3M9XCJhY3RpdmF0aW9uLWNvZGUtc2VjdGlvblwiPlxuICAgICAgICAgIDx0ZXh0PueUqOaIt0lEPC90ZXh0PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgICAgIDx0ZXh0Pnt7IHVzZXJJZElucHV0IHx8ICfngrnlh7vovpPlhaXnlKjmiLdJRCcgfX08L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgPCEtLSBUOSBLZXlib2FyZCAodGVtcGxhdGUgcmVtYWlucyB0aGUgc2FtZSkgLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInQ5LWtleWJvYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5Ym9hcmQtcm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwiaGFuZGxlS2V5Q2xpY2soe2RldGFpbDoge3ZhbHVlOiAnMSd9fSlcIj5cbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uLzEucG5nXCIgY2xhc3M9XCJrZXktaWNvblwiPjwvaW1hZ2U+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCIgb25jbGljaz1cImhhbmRsZUtleUNsaWNrKHtkZXRhaWw6IHt2YWx1ZTogJzInfX0pXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi8yLnBuZ1wiIGNsYXNzPVwia2V5LWljb25cIj48L2ltYWdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJoYW5kbGVLZXlDbGljayh7ZGV0YWlsOiB7dmFsdWU6ICczJ319KVwiPlxuICAgICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vMy5wbmdcIiBjbGFzcz1cImtleS1pY29uXCI+PC9pbWFnZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlib2FyZC1yb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJoYW5kbGVLZXlDbGljayh7ZGV0YWlsOiB7dmFsdWU6ICc0J319KVwiPlxuICAgICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vNC5wbmdcIiBjbGFzcz1cImtleS1pY29uXCI+PC9pbWFnZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwiaGFuZGxlS2V5Q2xpY2soe2RldGFpbDoge3ZhbHVlOiAnNSd9fSlcIj5cbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uLzUucG5nXCIgY2xhc3M9XCJrZXktaWNvblwiPjwvaW1hZ2U+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCIgb25jbGljaz1cImhhbmRsZUtleUNsaWNrKHtkZXRhaWw6IHt2YWx1ZTogJzYnfX0pXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi82LnBuZ1wiIGNsYXNzPVwia2V5LWljb25cIj48L2ltYWdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleWJvYXJkLXJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCIgb25jbGljaz1cImhhbmRsZUtleUNsaWNrKHtkZXRhaWw6IHt2YWx1ZTogJzcnfX0pXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi83LnBuZ1wiIGNsYXNzPVwia2V5LWljb25cIj48L2ltYWdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJoYW5kbGVLZXlDbGljayh7ZGV0YWlsOiB7dmFsdWU6ICc4J319KVwiPlxuICAgICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vOC5wbmdcIiBjbGFzcz1cImtleS1pY29uXCI+PC9pbWFnZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwiaGFuZGxlS2V5Q2xpY2soe2RldGFpbDoge3ZhbHVlOiAnOSd9fSlcIj5cbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uLzkucG5nXCIgY2xhc3M9XCJrZXktaWNvblwiPjwvaW1hZ2U+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5Ym9hcmQtcm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwiaGFuZGxlS2V5Q2xpY2soe2RldGFpbDoge3ZhbHVlOiAn4oyrJ319KVwiPlxuICAgICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vZGVsLnBuZ1wiIGNsYXNzPVwia2V5LWljb25cIj48L2ltYWdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJoYW5kbGVLZXlDbGljayh7ZGV0YWlsOiB7dmFsdWU6ICcwJ319KVwiPlxuICAgICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vMC5wbmdcIiBjbGFzcz1cImtleS1pY29uXCI+PC9pbWFnZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwiaGFuZGxlS2V5Q2xpY2soe2RldGFpbDoge3ZhbHVlOiAn4pyTJ319KVwiPlxuICAgICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vU21hbGxDaGVjay5wbmdcIiBjbGFzcz1cImtleS1pY29uXCI+PC9pbWFnZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3Njcm9sbD5cblxuICAgIDx0ZXh0IGNsYXNzPVwic3RhdHVzLXRleHRcIj57eyBzdGF0dXNNZXNzYWdlIH19PC90ZXh0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgLyogU3R5bGVzIHJlbWFpbiB1bmNoYW5nZWQgKi9cbiAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAucGFnZS10aW1lLWRpc3BsYXkge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICAucGFnZS1oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTBweDtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuICAucGFnZS1oZWFkZXItYmFjay1idXR0b24ge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cbiAgLmhlYWRlci10aXRsZS10aW1lIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5jb250ZW50LXNjcm9sbC1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnBhZ2UtY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICB9XG4gIC5kZXZpY2UtY29kZS1zZWN0aW9uLCAuYWN0aXZhdGlvbi1jb2RlLXNlY3Rpb24ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5kZXZpY2UtY29kZS1zZWN0aW9uIHRleHQsIC5hY3RpdmF0aW9uLWNvZGUtc2VjdGlvbiB0ZXh0IHsgY29sb3I6ICNBQUE7IGZvbnQtc2l6ZTogMjhweDsgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuICAuY29kZS1ib3gsIC5pbnB1dC1ib3gge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IC0xcHggMTBweDtcbiAgfVxuICAuY29kZS1ib3ggdGV4dCB7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIC5pbnB1dC1ib3gge1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuaW5wdXQtYm94IHRleHQge1xuICAgICAgY29sb3I6ICNGRkY7XG4gIH1cbiAgLmFjdGlvbnMgeyB3aWR0aDogMTAwJTsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IG1hcmdpbi10b3A6IC0xcHg7IH1cbiAgLnN0YXR1cy10ZXh0IHsgY29sb3I6ICNGRjNCMzA7IGZvbnQtc2l6ZTogMjRweDsgbWFyZ2luLXRvcDogMjBweDsgfVxuICAudDkta2V5Ym9hcmQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICB9XG4gIC5rZXlib2FyZC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgfVxuICAua2V5IHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmMyZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbjogLTIwcHggOHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmtleS1pY29uIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xuICBpbXBvcnQgZGV2aWNlIGZyb20gJ0BzeXN0ZW0uZGV2aWNlJztcbiAgaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQHN5c3RlbS5zdG9yYWdlJztcbiAgaW1wb3J0IHByb21wdCBmcm9tICdAc3lzdGVtLnByb21wdCc7XG4gIGltcG9ydCBBcGlTZXJ2aWNlIGZyb20gJy4uL2NvbW1vbi9qcy9hcGktc2VydmljZS5qcyc7XG4gIGltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4uL2NvbW1vbi9qcy9jb25maWcuanMnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhOiB7XG4gICAgICB0aW1lOiAnMDA6MDAnLFxuICAgICAgcmF3RGV2aWNlSWQ6IG51bGwsIC8vIFRvIHN0b3JlIHRoZSByYXcgc3lzdGVtIGlkZW50aWZpZXJcbiAgICAgIGRpc3BsYXllZERldmljZUNvZGU6ICfmraPlnKjnlJ/miJAuLi4nLCAvLyBUbyBzdG9yZSB0aGUgcHJvY2Vzc2VkIGNvZGUgZm9yIGRpc3BsYXkgYW5kIGxvY2FsIHZhbGlkYXRpb25cbiAgICAgIGFjdGl2YXRpb25Db2RlOiAnJyxcbiAgICAgIHVzZXJJZElucHV0OiAnJyxcbiAgICAgIHN0YXR1c01lc3NhZ2U6ICcnLFxuICAgICAgdWlTdGF0ZTogJ2VudGVyX2FjdGl2YXRpb25fY29kZScsXG4gICAgfSxcblxuICAgIGFzeW5jIG9uSW5pdCgpIHtcbiAgICAgIHRoaXMudXBkYXRlVGltZSgpO1xuICAgICAgc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVUaW1lLCA1MDAwKTtcbiAgICAgIFxuICAgICAgY29uc3QgZ2VuZXJhdGVkID0gYXdhaXQgdGhpcy5wcm9jZXNzRGV2aWNlSWRlbnRpZmllcigpO1xuICAgICAgaWYgKGdlbmVyYXRlZCkge1xuICAgICAgICB0aGlzLmF0dGVtcHRBdXRvQWN0aXZhdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5ZWREZXZpY2VDb2RlID0gJ+iOt+WPluWksei0pSc7XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICfml6Dms5Xojrflj5borr7lpIfmoIfor4bvvIzor7fph43lkK/lupTnlKjjgIInO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBOZXcgY2VudHJhbGl6ZWQgc3VjY2VzcyBoYW5kbGVyXG4gICAgYXN5bmMgaGFuZGxlQWN0aXZhdGlvblN1Y2Nlc3ModXNlckluZm8pIHtcbiAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KHsgXG4gICAgICAgIGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5JU19MT0NBTExZX0FDVElWQVRFRCwgXG4gICAgICAgIHZhbHVlOiAndHJ1ZScgXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgLy8gVGhlIHJhd0RldmljZUlkIGlzIGFscmVhZHkgc2F2ZWQgaW4gc3RvcmFnZSBmcm9tIHByb2Nlc3NEZXZpY2VJZGVudGlmaWVyXG4gICAgICBcbiAgICAgIGNvbnN0IHVzZXJJbmZvVG9TYXZlID0ge1xuICAgICAgICBpZDogdXNlckluZm8uaWQgfHwgdXNlckluZm8udXNlcl9udW1iZXIsXG4gICAgICAgIHVzZXJfbnVtYmVyOiB1c2VySW5mby51c2VyX251bWJlcixcbiAgICAgICAgcGV0X25hbWU6IHVzZXJJbmZvLnBldF9uYW1lLFxuICAgICAgICB0b3RhbF9jbGlja3M6IHVzZXJJbmZvLnRvdGFsX2NsaWNrcyB8fCAwXG4gICAgICB9O1xuICAgICAgYXdhaXQgc3RvcmFnZS5zZXQoeyBcbiAgICAgICAga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTywgXG4gICAgICAgIHZhbHVlOiBKU09OLnN0cmluZ2lmeSh1c2VySW5mb1RvU2F2ZSkgXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJvdXRlci5yZXBsYWNlKHsgdXJpOiAnbWFpbicgfSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9LFxuXG4gICAgYXN5bmMgYXR0ZW1wdEF1dG9BY3RpdmF0aW9uKCkge1xuICAgICAgaWYgKCF0aGlzLnJhd0RldmljZUlkKSByZXR1cm47XG4gICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn5q2j5Zyo5qOA5p+l6K6+5aSH5rOo5YaM5L+h5oGvLi4uJztcbiAgICAgIC8vIFVzZSByYXdEZXZpY2VJZCBmb3Igc2VydmVyIGNvbW11bmljYXRpb25cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2UuY2hlY2tEZXZpY2VSZWdpc3RyYXRpb24odGhpcy5yYXdEZXZpY2VJZCk7XG5cbiAgICAgIGlmIChyZXN1bHQuc3VjY2VzcyAmJiByZXN1bHQuZGF0YSAmJiByZXN1bHQuZGF0YS5pc19yZWdpc3RlcmVkKSB7XG4gICAgICAgIGNvbnN0IHsgdXNlckluZm8sIGF1dG9fYWN0aXZhdGlvbl9jb3VudCwgcmVhc29uIH0gPSByZXN1bHQuZGF0YTtcblxuICAgICAgICBpZiAocmVhc29uID09PSAnbG9nZ2VkX2luX29uX25ld2VyX2RldmljZScpIHtcbiAgICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn5q2k6K6+5aSH5LmL5YmN57uR5a6a55qE55So5oi35bey5Zyo5YW25LuW6K6+5aSH5LiK55m75b2V77yM6K+36YeN5paw5r+A5rS744CCJztcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0LmRhdGEuY2FuX2F1dG9fYWN0aXZhdGUpIHtcbiAgICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSBg6Ieq5Yqo5r+A5rS75oiQ5Yqf77yB5q2j5Zyo5oGi5aSN5pWw5o2uLi4uICgkeyhhdXRvX2FjdGl2YXRpb25fY291bnQgfHwgMCkgKyAxfS81KWA7XG4gICAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVBY3RpdmF0aW9uU3VjY2Vzcyh1c2VySW5mbyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gJ+iHquWKqOa/gOa0u+asoeaVsOW3sui+vuS4iumZkO+8jOivt+aJi+WKqOa/gOa0u+OAgic7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICcnOyAvLyBOb3QgcmVnaXN0ZXJlZCBvciBBUEkgZmFpbGVkXG4gICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZVRpbWUoKSB7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgaG91cnMgPSBub3cuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICBjb25zdCBtaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICB0aGlzLnRpbWUgPSBgJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfSxcblxuICAgIGdvQmFjaygpIHtcbiAgICAgIGlmICh0aGlzLnVpU3RhdGUgPT09ICdlbnRlcl91c2VyX2lkJykge1xuICAgICAgICB0aGlzLnVpU3RhdGUgPSAnZW50ZXJfYWN0aXZhdGlvbl9jb2RlJztcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gJyc7XG4gICAgICAgIHRoaXMudXNlcklkSW5wdXQgPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdXRlci5iYWNrKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZUtleUNsaWNrKGUpIHtcbiAgICAgIGNvbnN0IGtleSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgaWYgKHRoaXMudWlTdGF0ZSA9PT0gJ2VudGVyX3VzZXJfaWQnKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICfijKsnKSB0aGlzLnVzZXJJZElucHV0ID0gdGhpcy51c2VySWRJbnB1dC5zbGljZSgwLCAtMSk7XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ+KckycpIHRoaXMudmVyaWZ5VXNlcklkQW5kUHJvY2VlZCgpO1xuICAgICAgICBlbHNlIHRoaXMudXNlcklkSW5wdXQgKz0ga2V5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ+KMqycpIHRoaXMuYWN0aXZhdGlvbkNvZGUgPSB0aGlzLmFjdGl2YXRpb25Db2RlLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAn4pyTJykgdGhpcy5hY3RpdmF0ZSgpO1xuICAgICAgICBlbHNlIHRoaXMuYWN0aXZhdGlvbkNvZGUgKz0ga2V5O1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyB2ZXJpZnlVc2VySWRBbmRQcm9jZWVkKCkge1xuICAgICAgaWYgKCF0aGlzLnVzZXJJZElucHV0IHx8ICF0aGlzLnJhd0RldmljZUlkKSByZXR1cm47XG4gICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn5q2j5Zyo6aqM6K+B55So5oi3SUQuLi4nO1xuICAgICAgLy8gVXNlIHJhd0RldmljZUlkIGZvciBzZXJ2ZXIgY29tbXVuaWNhdGlvblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS52ZXJpZnlVc2VySWRBbmRSZXN0b3JlKHRoaXMucmF3RGV2aWNlSWQsIHRoaXMudXNlcklkSW5wdXQpO1xuXG4gICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MgJiYgcmVzdWx0LnVzZXJJbmZvKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICfpqozor4HmiJDlip/vvIzmraPlnKjmgaLlpI3mlbDmja4uLi4nO1xuICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZUFjdGl2YXRpb25TdWNjZXNzKHJlc3VsdC51c2VySW5mbyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSByZXN1bHQuZXJyb3IgfHwgJ+eUqOaIt0lE6aqM6K+B5aSx6LSl77yM6K+36YeN6K+V44CCJztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUmVuYW1lZCBmcm9tIGdlbmVyYXRlRGV2aWNlQ29kZSB0byBiZSBtb3JlIGRlc2NyaXB0aXZlXG4gICAgcHJvY2Vzc0RldmljZUlkZW50aWZpZXIoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgZGV2aWNlLmdldFNlcmlhbCh7XG4gICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5zZXJpYWwgfHwgZGF0YS5zZXJpYWwgPT09ICdOQScpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdldCBzZXJpYWw6IHJldHVybmVkIGFuIGludmFsaWQgaWRlbnRpZmllcjonLCBkYXRhLnNlcmlhbCk7XG4gICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIDEuIFN0b3JlIHRoZSByYXcgc3lzdGVtIGlkZW50aWZpZXJcbiAgICAgICAgICAgIHRoaXMucmF3RGV2aWNlSWQgPSBkYXRhLnNlcmlhbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gMi4gU2F2ZSB0aGUgcmF3IGlkZW50aWZpZXIgdG8gc3RvcmFnZSBmb3IgdGhlIGF1dGgtZ3VhcmRcbiAgICAgICAgICAgIHN0b3JhZ2Uuc2V0KHtcbiAgICAgICAgICAgICAga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLkRFVklDRV9JRCxcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMucmF3RGV2aWNlSWQsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAzLiBQcm9jZXNzIHRoZSBpZGVudGlmaWVyIGZvciBsb2NhbCBhY3RpdmF0aW9uIGxvZ2ljXG4gICAgICAgICAgICAgICAgbGV0IHByb2Nlc3NlZFNlcmlhbCA9IHRoaXMucmF3RGV2aWNlSWQuc3Vic3RyaW5nKDAsIDEzKS5yZXBsYWNlKC9cXC8vZywgJycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxldHRlclRvTnVtYmVyTWFwID0geyAnQSc6IDEsICdCJzogMiwgJ0MnOiAzLCAnRCc6IDQsICdFJzogNSB9O1xuICAgICAgICAgICAgICAgIGxldCBudW1lcmljU2VyaWFsID0gJyc7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9jZXNzZWRTZXJpYWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGxldCBjaGFyID0gcHJvY2Vzc2VkU2VyaWFsW2ldLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICBpZiAoY2hhciA+PSAnRicgJiYgY2hhciA8PSAnWicpIGNoYXIgPSAnRSc7XG4gICAgICAgICAgICAgICAgICBpZiAobGV0dGVyVG9OdW1iZXJNYXBbY2hhcl0pIG51bWVyaWNTZXJpYWwgKz0gbGV0dGVyVG9OdW1iZXJNYXBbY2hhcl07XG4gICAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNOYU4ocGFyc2VJbnQoY2hhciwgMTApKSkgbnVtZXJpY1NlcmlhbCArPSBjaGFyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobnVtZXJpY1NlcmlhbC5sZW5ndGggPCAxMikgbnVtZXJpY1NlcmlhbCA9IG51bWVyaWNTZXJpYWwucGFkRW5kKDEyLCAnMCcpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG51bWVyaWNTZXJpYWwubGVuZ3RoID4gMTIpIG51bWVyaWNTZXJpYWwgPSBudW1lcmljU2VyaWFsLnN1YnN0cmluZygwLCAxMik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKG51bWVyaWNTZXJpYWwubGVuZ3RoICE9PSAxMiB8fCAhL15cXGR7MTJ9JC8udGVzdChudW1lcmljU2VyaWFsKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdQcm9jZXNzZWQgc2VyaWFsIGlzIG5vdCBhIDEyLWRpZ2l0IG51bWJlci4nKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwYWlycyA9IG51bWVyaWNTZXJpYWwubWF0Y2goLy57MSwyfS9nKSB8fCBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZFBhaXJzID0gW3BhaXJzWzBdLCBwYWlyc1syXSwgcGFpcnNbNF1dO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1bUFCID0gcGFyc2VJbnQoc2VsZWN0ZWRQYWlyc1swXVswXSwgMTApICsgcGFyc2VJbnQoc2VsZWN0ZWRQYWlyc1swXVsxXSwgMTApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1bUVGID0gcGFyc2VJbnQoc2VsZWN0ZWRQYWlyc1sxXVswXSwgMTApICsgcGFyc2VJbnQoc2VsZWN0ZWRQYWlyc1sxXVsxXSwgMTApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1bUlKID0gcGFyc2VJbnQoc2VsZWN0ZWRQYWlyc1syXVswXSwgMTApICsgcGFyc2VJbnQoc2VsZWN0ZWRQYWlyc1syXVsxXSwgMTApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1bUJGSiA9IHBhcnNlSW50KHNlbGVjdGVkUGFpcnNbMF1bMV0sIDEwKSArIHBhcnNlSW50KHNlbGVjdGVkUGFpcnNbMV1bMV0sIDEwKSArIHBhcnNlSW50KHNlbGVjdGVkUGFpcnNbMl1bMV0sIDEwKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyA0LiBTZXQgdGhlIGRpc3BsYXllZCBjb2RlXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWREZXZpY2VDb2RlID0gYCR7U3RyaW5nKHN1bUFCKS5wYWRTdGFydCgyLCAnMCcpfSR7U3RyaW5nKHN1bUVGKS5wYWRTdGFydCgyLCAnMCcpfSR7U3RyaW5nKHN1bUlKKS5wYWRTdGFydCgyLCAnMCcpfSR7U3RyaW5nKHN1bUJGSikucGFkU3RhcnQoMiwgJzAnKX0xYDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmF3IERldmljZSBJRDonLCB0aGlzLnJhd0RldmljZUlkKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGlzcGxheWVkIERldmljZSBDb2RlOicsIHRoaXMuZGlzcGxheWVkRGV2aWNlQ29kZSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZmFpbDogKGVyciwgY29kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBzYXZlIHJhdyBkZXZpY2UgSUQgdG8gc3RvcmFnZS4gQ29kZTogJHtjb2RlfSwgRXJyb3I6ICR7ZXJyfWApO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IChlcnIsIGNvZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBnZXQgc2VyaWFsLiBDb2RlOiAke2NvZGV9LCBFcnJvcjogJHtlcnJ9YCk7XG4gICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGFzeW5jIGFjdGl2YXRlKCkge1xuICAgICAgaWYgKCF0aGlzLmFjdGl2YXRpb25Db2RlIHx8IHRoaXMuYWN0aXZhdGlvbkNvZGUubGVuZ3RoICE9PSAxMSkge1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSBcIua/gOa0u+eggemVv+W6puS4jeato+ehru+8jOW6lOS4ujEx5L2NXCI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gU3RlcCAxOiBMb2NhbCB2YWxpZGF0aW9uIGFnYWluc3QgdGhlIHByb2Nlc3NlZC9kaXNwbGF5ZWQgY29kZVxuICAgICAgY29uc3QgYWMgPSB0aGlzLmFjdGl2YXRpb25Db2RlO1xuICAgICAgY29uc3QgR192YWwgPSBwYXJzZUludChhY1s2XSwgMTApO1xuICAgICAgY29uc3QgS192YWwgPSBwYXJzZUludChhY1sxMF0sIDEwKTtcbiAgICAgIGNvbnN0IEhJX21vZGlmaWVkX251bSA9IHBhcnNlSW50KGAke2FjWzddfSR7YWNbOF19YCwgMTApIC0gR192YWwgLSBLX3ZhbDtcbiAgICAgIGlmIChISV9tb2RpZmllZF9udW0gPCAwIHx8IEhJX21vZGlmaWVkX251bSA+IDk5KSB7XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IFwi5r+A5rS75aSx6LSlOiBISeWHj+azlee7k+aenOaXoOaViFwiO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBISV9tb2RpZmllZF9zdHIgPSBTdHJpbmcoSElfbW9kaWZpZWRfbnVtKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgY29uc3QgQUJfdmFsID0gcGFyc2VJbnQoYCR7YWNbMF19JHthY1sxXX1gLCAxMCk7XG4gICAgICBjb25zdCBDRF92YWwgPSBwYXJzZUludChgJHthY1syXX0ke2FjWzNdfWAsIDEwKTtcbiAgICAgIGNvbnN0IEVGX3ZhbCA9IHBhcnNlSW50KGAke2FjWzRdfSR7YWNbNV19YCwgMTApO1xuICAgICAgbGV0IEFCX2RpdmlkZWQsIENEX2RpdmlkZWQsIEVGX2RpdmlkZWQ7XG4gICAgICBpZiAoR192YWwgPT09IDApIHtcbiAgICAgICAgQUJfZGl2aWRlZCA9IEFCX3ZhbDsgQ0RfZGl2aWRlZCA9IENEX3ZhbDsgRUZfZGl2aWRlZCA9IEVGX3ZhbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEFCX2RpdmlkZWQgPSBNYXRoLmZsb29yKEFCX3ZhbCAvIEdfdmFsKTtcbiAgICAgICAgQ0RfZGl2aWRlZCA9IE1hdGguZmxvb3IoQ0RfdmFsIC8gR192YWwpO1xuICAgICAgICBFRl9kaXZpZGVkID0gTWF0aC5mbG9vcihFRl92YWwgLyBHX3ZhbCk7XG4gICAgICB9XG4gICAgICBjb25zdCBncm91cEFCQ0RFRkhJSiA9IGAke1N0cmluZyhBQl9kaXZpZGVkKS5wYWRTdGFydCgyLCAnMCcpfSR7U3RyaW5nKENEX2RpdmlkZWQpLnBhZFN0YXJ0KDIsICcwJyl9JHtTdHJpbmcoRUZfZGl2aWRlZCkucGFkU3RhcnQoMiwgJzAnKX0ke0hJX21vZGlmaWVkX3N0cn0ke2FjWzldfWA7XG4gICAgICBcbiAgICAgIC8vIENvbXBhcmUgYWdhaW5zdCB0aGUgZGlzcGxheWVkL3Byb2Nlc3NlZCBjb2RlXG4gICAgICBpZiAoZ3JvdXBBQkNERUZISUogIT09IHRoaXMuZGlzcGxheWVkRGV2aWNlQ29kZSkge1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSBcIua/gOa0u+Wksei0pTog6K6+5aSH56CB5LiN5Yy56YWNXCI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGxldCBjdXJyZW50TWludXRlcyA9IG5vdy5nZXRNaW51dGVzKCk7XG4gICAgICBpZiAoY3VycmVudE1pbnV0ZXMgPD0gOSkgY3VycmVudE1pbnV0ZXMgKz0gNjA7XG4gICAgICBjb25zdCBHSl92YWx1ZSA9IHBhcnNlSW50KGAke2FjWzZdfSR7YWNbOV19YCwgMTApO1xuICAgICAgY29uc3QgZGlmZiA9IGN1cnJlbnRNaW51dGVzIC0gR0pfdmFsdWU7XG5cbiAgICAgIGlmIChkaWZmID4gMTAgfHwgZGlmZiA8IDApIHtcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gYOa/gOa0u+Wksei0pTog5pe26Ze05qCh6aqM5LiN6YCa6L+HICjlt67lgLw6ICR7ZGlmZn0pYDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBTdGVwIDI6IFNlcnZlciBSZWdpc3RyYXRpb24gdXNpbmcgdGhlIHJhdyBpZGVudGlmaWVyXG4gICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSBcIuacrOWcsOagoemqjOaIkOWKn++8jOato+WcqOazqOWGjOiuvuWkhy4uLlwiO1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVXNlIHJhd0RldmljZUlkIGZvciBzZXJ2ZXIgY29tbXVuaWNhdGlvblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLnJlZ2lzdGVyQW5kR2V0VXNlcklkKHRoaXMucmF3RGV2aWNlSWQpO1xuXG4gICAgICAgIGlmIChyZXN1bHQuc3VjY2VzcyAmJiAocmVzdWx0LnVzZXJJbmZvPy5pZCB8fCByZXN1bHQudXNlckluZm8/LnVzZXJfbnVtYmVyKSkge1xuICAgICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IFwi5r+A5rS75oiQ5Yqf77yB5bey6I635Y+W55So5oi3SUTjgIJcIjtcbiAgICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZUFjdGl2YXRpb25TdWNjZXNzKHJlc3VsdC51c2VySW5mbyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5yZWFzb24gPT09ICd1c2VyX2lkX3ZlcmlmaWNhdGlvbl9yZXF1aXJlZCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gcmVzdWx0Lm1lc3NhZ2UgfHwgJ+atpOeUqOaIt+WQjeW3suWtmOWcqO+8jOivt+i+k+WFpeeUqOaIt0lE5Lul6aqM6K+B44CCJztcbiAgICAgICAgICAgICAgdGhpcy51aVN0YXRlID0gJ2VudGVyX3VzZXJfaWQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IFwi5r+A5rS75aSx6LSlOiBcIiArIChyZXN1bHQuZXJyb3IgfHwgXCLml6Dms5Xku47mnI3liqHlmajojrflj5bnlKjmiLfkv6Hmga9cIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IFwi5r+A5rS75aSx6LSlOiDnvZHnu5zor7fmsYLplJnor6/vvIzor7fph43or5XjgIJcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PiJdLCJuYW1lcyI6WyJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfc3lzdGVtMiIsIl9zeXN0ZW0zIiwiX3N5c3RlbTQiLCJfY29uZmlnIiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIm93bktleXMiLCJyIiwidCIsIk9iamVjdCIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJvIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5IiwidmFsdWUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImkiLCJfdG9QcmltaXRpdmUiLCJTeW1ib2wiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJBcGlTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJiYXNlSGVhZGVycyIsIkNPTkZJRyIsIlNVUEFCQVNFIiwiS0VZIiwicmVxdWVzdCIsImVuZHBvaW50IiwibWV0aG9kIiwiZGF0YSIsInVybCIsIlVSTCIsIm9wdGlvbnMiLCJoZWFkZXIiLCJyZXNwb25zZVR5cGUiLCJKU09OIiwic3RyaW5naWZ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInJlc3BvbnNlRGF0YSIsImNvZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImZhaWwiLCJnZXRSYW5raW5ncyIsImxpbWl0IiwicmVzdWx0IiwiYWN0aW9uIiwicmFua2luZ3MiLCJtZXNzYWdlIiwic3luY0NsaWNrcyIsInVzZXJJZCIsImNsaWNrQ291bnQiLCJ1c2VyX2lkIiwiY2xpY2tfY291bnQiLCJjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkiLCJwZXROYW1lIiwicGV0X25hbWUiLCJpc0F2YWlsYWJsZSIsInNldFBldE5hbWUiLCJuZXdOYW1lIiwibmV3X25hbWUiLCJjaGVja0RldmljZVJlZ2lzdHJhdGlvbiIsImRldmljZUlkIiwiZGV2aWNlX2lkIiwibG9nIiwicmVnaXN0ZXJBbmRHZXRVc2VySWQiLCJ1c2VySW5mbyIsInZlcmlmeVVzZXJJZEFuZFJlc3RvcmUiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJBUFAiLCJOQU1FIiwiVkVSU0lPTiIsIk1BWF9DTElDS1NfUEVSX0JBVENIIiwiU1lOQ19JTlRFUlZBTCIsIlJBTktfTElNSVQiLCJTVE9SQUdFX0tFWVMiLCJJU19MT0NBTExZX0FDVElWQVRFRCIsIkRFVklDRV9JRCIsIlVTRVJfSU5GTyIsIlBFTkRJTkdfQ0xJQ0tTIiwiTEFTVF9TWU5DX1RJTUUiLCJUT1RBTF9DTElDS1MiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX2FwaVNlcnZpY2UiLCJ0aW1lIiwicmF3RGV2aWNlSWQiLCJkaXNwbGF5ZWREZXZpY2VDb2RlIiwiYWN0aXZhdGlvbkNvZGUiLCJ1c2VySWRJbnB1dCIsInN0YXR1c01lc3NhZ2UiLCJ1aVN0YXRlIiwib25Jbml0IiwidXBkYXRlVGltZSIsInNldEludGVydmFsIiwiZ2VuZXJhdGVkIiwicHJvY2Vzc0RldmljZUlkZW50aWZpZXIiLCJhdHRlbXB0QXV0b0FjdGl2YXRpb24iLCJoYW5kbGVBY3RpdmF0aW9uU3VjY2VzcyIsInN0b3JhZ2UiLCJzZXQiLCJrZXkiLCJ1c2VySW5mb1RvU2F2ZSIsImlkIiwidXNlcl9udW1iZXIiLCJ0b3RhbF9jbGlja3MiLCJzZXRUaW1lb3V0Iiwicm91dGVyIiwicmVwbGFjZSIsInVyaSIsImlzX3JlZ2lzdGVyZWQiLCJhdXRvX2FjdGl2YXRpb25fY291bnQiLCJyZWFzb24iLCJjYW5fYXV0b19hY3RpdmF0ZSIsIm5vdyIsIkRhdGUiLCJob3VycyIsImdldEhvdXJzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZ29CYWNrIiwiYmFjayIsImhhbmRsZUtleUNsaWNrIiwiZGV0YWlsIiwic2xpY2UiLCJ2ZXJpZnlVc2VySWRBbmRQcm9jZWVkIiwiYWN0aXZhdGUiLCJkZXZpY2UiLCJnZXRTZXJpYWwiLCJzZXJpYWwiLCJwcm9jZXNzZWRTZXJpYWwiLCJzdWJzdHJpbmciLCJsZXR0ZXJUb051bWJlck1hcCIsIm51bWVyaWNTZXJpYWwiLCJjaGFyIiwidG9VcHBlckNhc2UiLCJpc05hTiIsInBhcnNlSW50IiwicGFkRW5kIiwidGVzdCIsInBhaXJzIiwibWF0Y2giLCJzZWxlY3RlZFBhaXJzIiwic3VtQUIiLCJzdW1FRiIsInN1bUlKIiwic3VtQkZKIiwiZXJyIiwiYWMiLCJHX3ZhbCIsIktfdmFsIiwiSElfbW9kaWZpZWRfbnVtIiwiSElfbW9kaWZpZWRfc3RyIiwiQUJfdmFsIiwiQ0RfdmFsIiwiRUZfdmFsIiwiQUJfZGl2aWRlZCIsIkNEX2RpdmlkZWQiLCJFRl9kaXZpZGVkIiwiTWF0aCIsImZsb29yIiwiZ3JvdXBBQkNERUZISUoiLCJjdXJyZW50TWludXRlcyIsIkdKX3ZhbHVlIiwiZGlmZiIsIl9yZXN1bHQkdXNlckluZm8iLCJfcmVzdWx0JHVzZXJJbmZvMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQ0EsSUFBQUEsVUFBQUMsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUMsV0FBQUYsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUUsV0FBQUgsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUcsV0FBQUosdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUksVUFBQUMsb0JBQUE7d0JBQXFDLFNBQUFOLHVCQUFBTyxDQUFBOzRCQUFBLE9BQUFBLEtBQUFBLEVBQUFDLFVBQUEsR0FBQUQsSUFBQTtnQ0FBQUUsU0FBQUY7NEJBQUE7d0JBQUE7d0JBQUEsU0FBQUcsUUFBQUgsQ0FBQSxFQUFBSSxDQUFBOzRCQUFBLElBQUFDLElBQUFDLE9BQUFDLElBQUEsQ0FBQVA7NEJBQUEsSUFBQU0sT0FBQUUscUJBQUE7Z0NBQUEsSUFBQUMsSUFBQUgsT0FBQUUscUJBQUEsQ0FBQVI7Z0NBQUFJLEtBQUFLLENBQUFBLElBQUFBLEVBQUFDLE1BQUEsVUFBQU4sQ0FBQTtvQ0FBQSxPQUFBRSxPQUFBSyx3QkFBQSxDQUFBWCxHQUFBSSxHQUFBUSxVQUFBO2dDQUFBLEtBQUFQLEVBQUFRLElBQUEsQ0FBQUMsS0FBQSxDQUFBVCxHQUFBSTs0QkFBQTs0QkFBQSxPQUFBSjt3QkFBQTt3QkFBQSxTQUFBVSxjQUFBZixDQUFB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