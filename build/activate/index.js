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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZhdGVcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9hY3RpdmF0ZS9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcGktc2VydmljZS5qc1xuaW1wb3J0IGZldGNoIGZyb20gJ0BzeXN0ZW0uZmV0Y2gnO1xuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xuaW1wb3J0IHByb21wdCBmcm9tICdAc3lzdGVtLnByb21wdCc7XG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XG5cbmNsYXNzIEFwaVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJhc2VIZWFkZXJzID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIC8vIOaJi+eOr+S4jemcgOimgSBBUEkgS2V5IOmqjOivgVxuICAgIH1cbiAgfVxuXG4gIC8vIOmAmueUqOivt+axguaWueazlSAtIOS/ruaUuSBVUkwg5Li6IEhUVFBcbiAgYXN5bmMgcmVxdWVzdChlbmRwb2ludCwgbWV0aG9kID0gJ1BPU1QnLCBkYXRhID0gbnVsbCkge1xuICAgIC8vIOmHjeimge+8muaUueS4uiBIVFRQIOWNj+iurlxuICAgIGNvbnN0IHVybCA9IGBodHRwOi8vanF1YnlxbmhneXhhenBucGp5cWYuc3VwYWJhc2UuY28vZnVuY3Rpb25zL3YxLyR7ZW5kcG9pbnR9YFxuICAgIFxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICB1cmwsXG4gICAgICBtZXRob2QsXG4gICAgICBoZWFkZXI6IHRoaXMuYmFzZUhlYWRlcnMsXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xuICAgIH1cblxuICAgIGlmIChkYXRhKSB7XG4gICAgICBvcHRpb25zLmRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmZXRjaC5mZXRjaCh7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XG5cbiAgICAgICAgICBpZiAocmVzcG9uc2UuY29kZSA+PSAyMDAgJiYgcmVzcG9uc2UuY29kZSA8IDMwMCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZURhdGEpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEhUVFAgRXJyb3I6ICR7cmVzcG9uc2UuY29kZX1gLCByZXNwb25zZSk7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBIVFRQICR7cmVzcG9uc2UuY29kZX06ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2VEYXRhKX1gKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IChlcnJvciwgY29kZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFJlcXVlc3QgRmFpbGVkOiAke2NvZGV9YCwgZXJyb3IpO1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkOiAke2Vycm9yLmRhdGF9YCkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8vIOiOt+WPluaOkuihjOamnFxuICBhc3luYyBnZXRSYW5raW5ncyhsaW1pdCA9IDEwKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdnZXRfcmFua2luZ3MnLFxuICAgICAgICBsaW1pdDogbGltaXRcbiAgICAgIH0pXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICByYW5raW5nczogcmVzdWx0LnJhbmtpbmdzIHx8IFtdXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaOkuihjOamnOWksei0pTonLCBlcnJvcilcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICByYW5raW5nczogW10sXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8g5LiK5oql54K55Ye75qyh5pWwXG4gIGFzeW5jIHN5bmNDbGlja3ModXNlcklkLCBjbGlja0NvdW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdzeW5jX2NsaWNrcycsXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcbiAgICAgICAgY2xpY2tfY291bnQ6IGNsaWNrQ291bnRcbiAgICAgIH0pXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5LiK5oql54K55Ye75qyh5pWw5aSx6LSlOicsIGVycm9yKVxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICB9XG5cbiAgLy8g5qOA5p+l5a6g54mp5ZCN5piv5ZCm5Y+v55SoXG4gIGFzeW5jIGNoZWNrUGV0TmFtZUF2YWlsYWJpbGl0eShwZXROYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdjaGVja19wZXRfbmFtZScsXG4gICAgICAgIHBldF9uYW1lOiBwZXROYW1lXG4gICAgICB9KTtcbiAgICAgIC8vIOWBh+iuvuacjeWKoeWZqOi/lOWbniB7IGlzQXZhaWxhYmxlOiB0cnVlL2ZhbHNlIH1cbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIC4uLnJlc3VsdCB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfmo4Dmn6XlrqDnianlkI3lj6/nlKjmgKfml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlLCBpc0F2YWlsYWJsZTogZmFsc2UgfTtcbiAgICB9XG4gIH1cblxuICAvLyDkv67mlLnlrqDnianlkI1cbiAgYXN5bmMgc2V0UGV0TmFtZSh1c2VySWQsIG5ld05hbWUpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdicmlnaHQtcmVzcG9uZGVyJywgJ1BPU1QnLCB7XG4gICAgICAgIGFjdGlvbjogJ3NldF9wZXRfbmFtZScsXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcbiAgICAgICAgbmV3X25hbWU6IG5ld05hbWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5L+u5pS55a6g54mp5ZCN5aSx6LSlOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIOmihOa/gOa0u+ajgOafpVxuICBhc3luYyBjaGVja0RldmljZVJlZ2lzdHJhdGlvbihkZXZpY2VJZCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2JyaWdodC1yZXNwb25kZXInLCAnUE9TVCcsIHtcbiAgICAgICAgYWN0aW9uOiAnY2hlY2tfcmVnaXN0cmF0aW9uJyxcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygn6aKE5r+A5rS75qOA5p+l5oiQ5YqfOicsIHJlc3VsdCk7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign6aKE5r+A5rS75qOA5p+l5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIOazqOWGjOiuvuWkh+W5tuiOt+WPlueUqOaIt0lEXG4gIGFzeW5jIHJlZ2lzdGVyQW5kR2V0VXNlcklkKGRldmljZUlkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnYnJpZ2h0LXJlc3BvbmRlcicsICdQT1NUJywge1xuICAgICAgICBhY3Rpb246ICdyZWdpc3Rlcl9kZXZpY2VfYW5kX2dldF9pZCcsXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWRcbiAgICAgIH0pO1xuICAgICAgLy8g5YGH6K6+5pyN5Yqh5Zmo5oiQ5Yqf5pe26L+U5ZueIHsgc3VjY2VzczogdHJ1ZSwgdXNlckluZm86IHsgaWQ6ICcuLi4nLCAuLi4gfSB9XG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfms6jlhozorr7lpIflubbojrflj5bnlKjmiLdJROaIkOWKnzonLCByZXN1bHQudXNlckluZm8pO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1c2VySW5mbzogcmVzdWx0LnVzZXJJbmZvIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCfojrflj5bnlKjmiLdJROWksei0pTonLCByZXN1bHQgPyByZXN1bHQuZXJyb3IgOiAn5pyq55+l6ZSZ6K+vJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogKHJlc3VsdCA/IHJlc3VsdC5lcnJvciA6ICfmnI3liqHlmajmnKrov5Tlm57miJDlip/nirbmgIEnKSB9O1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfms6jlhozmiJbojrflj5bnlKjmiLdJROaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cblxuICAvLyDpqozor4HnlKjmiLdJROW5tuaBouWkjeaVsOaNrlxuICBhc3luYyB2ZXJpZnlVc2VySWRBbmRSZXN0b3JlKGRldmljZUlkLCB1c2VySWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdicmlnaHQtcmVzcG9uZGVyJywgJ1BPU1QnLCB7XG4gICAgICAgIGFjdGlvbjogJ3ZlcmlmeV91c2VyX2lkX2FuZF9yZXN0b3JlJyxcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZCxcbiAgICAgICAgdXNlcl9pZDogdXNlcklkXG4gICAgICB9KTtcbiAgICAgIC8vIOWBh+iuvuacjeWKoeWZqOaIkOWKn+aXtui/lOWbniB7IHN1Y2Nlc3M6IHRydWUsIHVzZXJJbmZvOiB7IC4uLiB9IH1cbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdXNlckluZm86IHJlc3VsdC51c2VySW5mbyB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAocmVzdWx0ID8gcmVzdWx0LmVycm9yIDogJ+mqjOivgeWksei0pScpIH07XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+mqjOivgeeUqOaIt0lE5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBpU2VydmljZSgpXG4iLCIvLyBjb25maWcuanNcbmV4cG9ydCBjb25zdCBDT05GSUcgPSB7XG4gIC8vIOazqOaEj++8mlVSTCDliY3nvIDlnKggYXBpLXNlcnZpY2UuanMg5Lit56Gs57yW56CB5LqGXG4gIC8vIOi/memHjOS4jeWGjemcgOimgemFjee9rlxuICBcbiAgLy8g5bqU55So6YWN572uXG4gIEFQUDoge1xuICAgIE5BTUU6ICdCYW5kUGV0JyxcbiAgICBWRVJTSU9OOiAnMS4wLjAnLFxuICAgIE1BWF9DTElDS1NfUEVSX0JBVENIOiA1MCxcbiAgICBTWU5DX0lOVEVSVkFMOiAzMDAwMDAsXG4gICAgUkFOS19MSU1JVDogMTBcbiAgfSxcbiAgXG4gIC8vIOWtmOWCqOmUruWQjVxuICBTVE9SQUdFX0tFWVM6IHtcbiAgICBJU19MT0NBTExZX0FDVElWQVRFRDogJ2lzX2xvY2FsbHlfYWN0aXZhdGVkJyxcbiAgICBERVZJQ0VfSUQ6ICdkZXZpY2VfaWQnLFxuICAgIFVTRVJfSU5GTzogJ3VzZXJfaW5mbycsXG4gICAgUEVORElOR19DTElDS1M6ICdwZW5kaW5nX2NsaWNrcycsXG4gICAgTEFTVF9TWU5DX1RJTUU6ICdsYXN0X3N5bmNfdGltZScsXG4gICAgVE9UQUxfQ0xJQ0tTOiAndG90YWxfY2xpY2tzJ1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS42LjhcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNi44XCI7IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicGFnZS1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi9iYWNrLnBuZ1wiIGNsYXNzPVwicGFnZS1oZWFkZXItYmFjay1idXR0b25cIiBvbmNsaWNrPVwiZ29CYWNrXCI+PC9pbWFnZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZS10aW1lXCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLXRpbWUtZGlzcGxheVwiPnt7IHRpbWUgfX08L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLWhlYWRlci10aXRsZVwiPnt7IHVpU3RhdGUgPT09ICdlbnRlcl91c2VyX2lkJyA/ICfpqozor4HnlKjmiLdJRCcgOiAn5r+A5rS7JyB9fTwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8c2Nyb2xsIGNsYXNzPVwiY29udGVudC1zY3JvbGwtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtY29kZS1zZWN0aW9uXCI+XG4gICAgICAgICAgPHRleHQ+5oKo55qE6K6+5aSH56CB5Li6PC90ZXh0PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2RlLWJveFwiPlxuICAgICAgICAgICAgPCEtLSBEaXNwbGF5IHRoZSBwcm9jZXNzZWQgY29kZSAtLT5cbiAgICAgICAgICAgIDx0ZXh0Pnt7IGRpc3BsYXllZERldmljZUNvZGUgfX08L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gQWN0aXZhdGlvbiBDb2RlIElucHV0IFN0YXRlIC0tPlxuICAgICAgICA8ZGl2IGlmPVwie3sgdWlTdGF0ZSA9PT0gJ2VudGVyX2FjdGl2YXRpb25fY29kZScgfX1cIiBjbGFzcz1cImFjdGl2YXRpb24tY29kZS1zZWN0aW9uXCI+XG4gICAgICAgICAgPHRleHQ+5r+A5rS756CBPC90ZXh0PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgICAgIDx0ZXh0Pnt7IGFjdGl2YXRpb25Db2RlIHx8ICfngrnlh7vovpPlhaUnIH19PC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIFVzZXIgSUQgSW5wdXQgU3RhdGUgLS0+XG4gICAgICAgIDxkaXYgaWY9XCJ7eyB1aVN0YXRlID09PSAnZW50ZXJfdXNlcl9pZCcgfX1cIiBjbGFzcz1cImFjdGl2YXRpb24tY29kZS1zZWN0aW9uXCI+XG4gICAgICAgICAgPHRleHQ+55So5oi3SUQ8L3RleHQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWJveFwiPlxuICAgICAgICAgICAgPHRleHQ+e3sgdXNlcklkSW5wdXQgfHwgJ+eCueWHu+i+k+WFpeeUqOaIt0lEJyB9fTwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIj5cbiAgICAgICAgICA8IS0tIFQ5IEtleWJvYXJkICh0ZW1wbGF0ZSByZW1haW5zIHRoZSBzYW1lKSAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidDkta2V5Ym9hcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlib2FyZC1yb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJoYW5kbGVLZXlDbGljayh7ZGV0YWlsOiB7dmFsdWU6ICcxJ319KVwiPlxuICAgICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vMS5wbmdcIiBjbGFzcz1cImtleS1pY29uXCI+PC9pbWFnZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwiaGFuZGxlS2V5Q2xpY2soe2RldGFpbDoge3ZhbHVlOiAnMid9fSlcIj5cbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uLzIucG5nXCIgY2xhc3M9XCJrZXktaWNvblwiPjwvaW1hZ2U+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCIgb25jbGljaz1cImhhbmRsZUtleUNsaWNrKHtkZXRhaWw6IHt2YWx1ZTogJzMnfX0pXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi8zLnBuZ1wiIGNsYXNzPVwia2V5LWljb25cIj48L2ltYWdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleWJvYXJkLXJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCIgb25jbGljaz1cImhhbmRsZUtleUNsaWNrKHtkZXRhaWw6IHt2YWx1ZTogJzQnfX0pXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi80LnBuZ1wiIGNsYXNzPVwia2V5LWljb25cIj48L2ltYWdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJoYW5kbGVLZXlDbGljayh7ZGV0YWlsOiB7dmFsdWU6ICc1J319KVwiPlxuICAgICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vNS5wbmdcIiBjbGFzcz1cImtleS1pY29uXCI+PC9pbWFnZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwiaGFuZGxlS2V5Q2xpY2soe2RldGFpbDoge3ZhbHVlOiAnNid9fSlcIj5cbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uLzYucG5nXCIgY2xhc3M9XCJrZXktaWNvblwiPjwvaW1hZ2U+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5Ym9hcmQtcm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwiaGFuZGxlS2V5Q2xpY2soe2RldGFpbDoge3ZhbHVlOiAnNyd9fSlcIj5cbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uLzcucG5nXCIgY2xhc3M9XCJrZXktaWNvblwiPjwvaW1hZ2U+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCIgb25jbGljaz1cImhhbmRsZUtleUNsaWNrKHtkZXRhaWw6IHt2YWx1ZTogJzgnfX0pXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi84LnBuZ1wiIGNsYXNzPVwia2V5LWljb25cIj48L2ltYWdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJoYW5kbGVLZXlDbGljayh7ZGV0YWlsOiB7dmFsdWU6ICc5J319KVwiPlxuICAgICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vOS5wbmdcIiBjbGFzcz1cImtleS1pY29uXCI+PC9pbWFnZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlib2FyZC1yb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJoYW5kbGVLZXlDbGljayh7ZGV0YWlsOiB7dmFsdWU6ICfijKsnfX0pXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi9kZWwucG5nXCIgY2xhc3M9XCJrZXktaWNvblwiPjwvaW1hZ2U+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCIgb25jbGljaz1cImhhbmRsZUtleUNsaWNrKHtkZXRhaWw6IHt2YWx1ZTogJzAnfX0pXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi8wLnBuZ1wiIGNsYXNzPVwia2V5LWljb25cIj48L2ltYWdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJoYW5kbGVLZXlDbGljayh7ZGV0YWlsOiB7dmFsdWU6ICfinJMnfX0pXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi9TbWFsbENoZWNrLnBuZ1wiIGNsYXNzPVwia2V5LWljb25cIj48L2ltYWdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2Nyb2xsPlxuXG4gICAgPHRleHQgY2xhc3M9XCJzdGF0dXMtdGV4dFwiPnt7IHN0YXR1c01lc3NhZ2UgfX08L3RleHQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAvKiBTdHlsZXMgcmVtYWluIHVuY2hhbmdlZCAqL1xuICAucGFnZS1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAucGFnZS1oZWFkZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5wYWdlLXRpbWUtZGlzcGxheSB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIC5wYWdlLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5wYWdlLWhlYWRlci1iYWNrLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAucGFnZS1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxuICAuaGVhZGVyLXRpdGxlLXRpbWUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgLmNvbnRlbnQtc2Nyb2xsLWNvbnRhaW5lciB7XG4gICAgZmxleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucGFnZS1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIH1cbiAgLmRldmljZS1jb2RlLXNlY3Rpb24sIC5hY3RpdmF0aW9uLWNvZGUtc2VjdGlvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLmRldmljZS1jb2RlLXNlY3Rpb24gdGV4dCwgLmFjdGl2YXRpb24tY29kZS1zZWN0aW9uIHRleHQgeyBjb2xvcjogI0FBQTsgZm9udC1zaXplOiAyOHB4OyBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XG4gIC5jb2RlLWJveCwgLmlucHV0LWJveCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogLTFweCAxMHB4O1xuICB9XG4gIC5jb2RlLWJveCB0ZXh0IHtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgLmlucHV0LWJveCB7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5pbnB1dC1ib3ggdGV4dCB7XG4gICAgICBjb2xvcjogI0ZGRjtcbiAgfVxuICAuYWN0aW9ucyB7IHdpZHRoOiAxMDAlOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgbWFyZ2luLXRvcDogLTFweDsgfVxuICAuc3RhdHVzLXRleHQgeyBjb2xvcjogI0ZGM0IzMDsgZm9udC1zaXplOiAyNHB4OyBtYXJnaW4tdG9wOiAyMHB4OyB9XG4gIC50OS1rZXlib2FyZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gIH1cbiAgLmtleWJvYXJkLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICB9XG4gIC5rZXkge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyYzJlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgbWFyZ2luOiAtMjBweCA4cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAua2V5LWljb24ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XG4gIGltcG9ydCBkZXZpY2UgZnJvbSAnQHN5c3RlbS5kZXZpY2UnO1xuICBpbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xuICBpbXBvcnQgcHJvbXB0IGZyb20gJ0BzeXN0ZW0ucHJvbXB0JztcbiAgaW1wb3J0IEFwaVNlcnZpY2UgZnJvbSAnLi4vY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzJztcbiAgaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi4vY29tbW9uL2pzL2NvbmZpZy5qcyc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGE6IHtcbiAgICAgIHRpbWU6ICcwMDowMCcsXG4gICAgICByYXdEZXZpY2VJZDogbnVsbCwgLy8gVG8gc3RvcmUgdGhlIHJhdyBzeXN0ZW0gaWRlbnRpZmllclxuICAgICAgZGlzcGxheWVkRGV2aWNlQ29kZTogJ+ato+WcqOeUn+aIkC4uLicsIC8vIFRvIHN0b3JlIHRoZSBwcm9jZXNzZWQgY29kZSBmb3IgZGlzcGxheSBhbmQgbG9jYWwgdmFsaWRhdGlvblxuICAgICAgYWN0aXZhdGlvbkNvZGU6ICcnLFxuICAgICAgdXNlcklkSW5wdXQ6ICcnLFxuICAgICAgc3RhdHVzTWVzc2FnZTogJycsXG4gICAgICB1aVN0YXRlOiAnZW50ZXJfYWN0aXZhdGlvbl9jb2RlJyxcbiAgICB9LFxuXG4gICAgYXN5bmMgb25Jbml0KCkge1xuICAgICAgdGhpcy51cGRhdGVUaW1lKCk7XG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVRpbWUsIDUwMDApO1xuICAgICAgXG4gICAgICBjb25zdCBnZW5lcmF0ZWQgPSBhd2FpdCB0aGlzLnByb2Nlc3NEZXZpY2VJZGVudGlmaWVyKCk7XG4gICAgICBpZiAoZ2VuZXJhdGVkKSB7XG4gICAgICAgIHRoaXMuYXR0ZW1wdEF1dG9BY3RpdmF0aW9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc3BsYXllZERldmljZUNvZGUgPSAn6I635Y+W5aSx6LSlJztcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gJ+aXoOazleiOt+WPluiuvuWkh+agh+ivhu+8jOivt+mHjeWQr+W6lOeUqOOAgic7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIE5ldyBjZW50cmFsaXplZCBzdWNjZXNzIGhhbmRsZXJcbiAgICBhc3luYyBoYW5kbGVBY3RpdmF0aW9uU3VjY2Vzcyh1c2VySW5mbykge1xuICAgICAgYXdhaXQgc3RvcmFnZS5zZXQoeyBcbiAgICAgICAga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLklTX0xPQ0FMTFlfQUNUSVZBVEVELCBcbiAgICAgICAgdmFsdWU6ICd0cnVlJyBcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICAvLyBUaGUgcmF3RGV2aWNlSWQgaXMgYWxyZWFkeSBzYXZlZCBpbiBzdG9yYWdlIGZyb20gcHJvY2Vzc0RldmljZUlkZW50aWZpZXJcbiAgICAgIFxuICAgICAgY29uc3QgdXNlckluZm9Ub1NhdmUgPSB7XG4gICAgICAgIGlkOiB1c2VySW5mby5pZCB8fCB1c2VySW5mby51c2VyX251bWJlcixcbiAgICAgICAgdXNlcl9udW1iZXI6IHVzZXJJbmZvLnVzZXJfbnVtYmVyLFxuICAgICAgICBwZXRfbmFtZTogdXNlckluZm8ucGV0X25hbWUsXG4gICAgICAgIHRvdGFsX2NsaWNrczogdXNlckluZm8udG90YWxfY2xpY2tzIHx8IDBcbiAgICAgIH07XG4gICAgICBhd2FpdCBzdG9yYWdlLnNldCh7IFxuICAgICAgICBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPLCBcbiAgICAgICAgdmFsdWU6IEpTT04uc3RyaW5naWZ5KHVzZXJJbmZvVG9TYXZlKSBcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoeyB1cmk6ICdtYWluJyB9KTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0sXG5cbiAgICBhc3luYyBhdHRlbXB0QXV0b0FjdGl2YXRpb24oKSB7XG4gICAgICBpZiAoIXRoaXMucmF3RGV2aWNlSWQpIHJldHVybjtcbiAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICfmraPlnKjmo4Dmn6Xorr7lpIfms6jlhozkv6Hmga8uLi4nO1xuICAgICAgLy8gVXNlIHJhd0RldmljZUlkIGZvciBzZXJ2ZXIgY29tbXVuaWNhdGlvblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5jaGVja0RldmljZVJlZ2lzdHJhdGlvbih0aGlzLnJhd0RldmljZUlkKTtcblxuICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzICYmIHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLmlzX3JlZ2lzdGVyZWQpIHtcbiAgICAgICAgY29uc3QgeyB1c2VySW5mbywgYXV0b19hY3RpdmF0aW9uX2NvdW50LCByZWFzb24gfSA9IHJlc3VsdC5kYXRhO1xuXG4gICAgICAgIGlmIChyZWFzb24gPT09ICdsb2dnZWRfaW5fb25fbmV3ZXJfZGV2aWNlJykge1xuICAgICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICfmraTorr7lpIfkuYvliY3nu5HlrprnmoTnlKjmiLflt7LlnKjlhbbku5borr7lpIfkuIrnmbvlvZXvvIzor7fph43mlrDmv4DmtLvjgIInO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQuZGF0YS5jYW5fYXV0b19hY3RpdmF0ZSkge1xuICAgICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IGDoh6rliqjmv4DmtLvmiJDlip/vvIHmraPlnKjmgaLlpI3mlbDmja4uLi4gKCR7KGF1dG9fYWN0aXZhdGlvbl9jb3VudCB8fCAwKSArIDF9LzUpYDtcbiAgICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZUFjdGl2YXRpb25TdWNjZXNzKHVzZXJJbmZvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn6Ieq5Yqo5r+A5rS75qyh5pWw5bey6L6+5LiK6ZmQ77yM6K+35omL5Yqo5r+A5rS744CCJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gJyc7IC8vIE5vdCByZWdpc3RlcmVkIG9yIEFQSSBmYWlsZWRcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlVGltZSgpIHtcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBob3VycyA9IG5vdy5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgIHRoaXMudGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICB9LFxuXG4gICAgZ29CYWNrKCkge1xuICAgICAgaWYgKHRoaXMudWlTdGF0ZSA9PT0gJ2VudGVyX3VzZXJfaWQnKSB7XG4gICAgICAgIHRoaXMudWlTdGF0ZSA9ICdlbnRlcl9hY3RpdmF0aW9uX2NvZGUnO1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAnJztcbiAgICAgICAgdGhpcy51c2VySWRJbnB1dCA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm91dGVyLmJhY2soKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlS2V5Q2xpY2soZSkge1xuICAgICAgY29uc3Qga2V5ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICBpZiAodGhpcy51aVN0YXRlID09PSAnZW50ZXJfdXNlcl9pZCcpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ+KMqycpIHRoaXMudXNlcklkSW5wdXQgPSB0aGlzLnVzZXJJZElucHV0LnNsaWNlKDAsIC0xKTtcbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAn4pyTJykgdGhpcy52ZXJpZnlVc2VySWRBbmRQcm9jZWVkKCk7XG4gICAgICAgIGVsc2UgdGhpcy51c2VySWRJbnB1dCArPSBrZXk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoa2V5ID09PSAn4oyrJykgdGhpcy5hY3RpdmF0aW9uQ29kZSA9IHRoaXMuYWN0aXZhdGlvbkNvZGUuc2xpY2UoMCwgLTEpO1xuICAgICAgICBlbHNlIGlmIChrZXkgPT09ICfinJMnKSB0aGlzLmFjdGl2YXRlKCk7XG4gICAgICAgIGVsc2UgdGhpcy5hY3RpdmF0aW9uQ29kZSArPSBrZXk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFzeW5jIHZlcmlmeVVzZXJJZEFuZFByb2NlZWQoKSB7XG4gICAgICBpZiAoIXRoaXMudXNlcklkSW5wdXQgfHwgIXRoaXMucmF3RGV2aWNlSWQpIHJldHVybjtcbiAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICfmraPlnKjpqozor4HnlKjmiLdJRC4uLic7XG4gICAgICAvLyBVc2UgcmF3RGV2aWNlSWQgZm9yIHNlcnZlciBjb21tdW5pY2F0aW9uXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLnZlcmlmeVVzZXJJZEFuZFJlc3RvcmUodGhpcy5yYXdEZXZpY2VJZCwgdGhpcy51c2VySWRJbnB1dCk7XG5cbiAgICAgIGlmIChyZXN1bHQuc3VjY2VzcyAmJiByZXN1bHQudXNlckluZm8pIHtcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gJ+mqjOivgeaIkOWKn++8jOato+WcqOaBouWkjeaVsOaNri4uLic7XG4gICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlQWN0aXZhdGlvblN1Y2Nlc3MocmVzdWx0LnVzZXJJbmZvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IHJlc3VsdC5lcnJvciB8fCAn55So5oi3SUTpqozor4HlpLHotKXvvIzor7fph43or5XjgIInO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBSZW5hbWVkIGZyb20gZ2VuZXJhdGVEZXZpY2VDb2RlIHRvIGJlIG1vcmUgZGVzY3JpcHRpdmVcbiAgICBwcm9jZXNzRGV2aWNlSWRlbnRpZmllcigpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBkZXZpY2UuZ2V0U2VyaWFsKHtcbiAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLnNlcmlhbCB8fCBkYXRhLnNlcmlhbCA9PT0gJ05BJykge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZ2V0IHNlcmlhbDogcmV0dXJuZWQgYW4gaW52YWxpZCBpZGVudGlmaWVyOicsIGRhdGEuc2VyaWFsKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gMS4gU3RvcmUgdGhlIHJhdyBzeXN0ZW0gaWRlbnRpZmllclxuICAgICAgICAgICAgdGhpcy5yYXdEZXZpY2VJZCA9IGRhdGEuc2VyaWFsO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAyLiBTYXZlIHRoZSByYXcgaWRlbnRpZmllciB0byBzdG9yYWdlIGZvciB0aGUgYXV0aC1ndWFyZFxuICAgICAgICAgICAgc3RvcmFnZS5zZXQoe1xuICAgICAgICAgICAgICBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuREVWSUNFX0lELFxuICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5yYXdEZXZpY2VJZCxcbiAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIDMuIFByb2Nlc3MgdGhlIGlkZW50aWZpZXIgZm9yIGxvY2FsIGFjdGl2YXRpb24gbG9naWNcbiAgICAgICAgICAgICAgICBsZXQgcHJvY2Vzc2VkU2VyaWFsID0gdGhpcy5yYXdEZXZpY2VJZC5zdWJzdHJpbmcoMCwgMTMpLnJlcGxhY2UoL1xcLy9nLCAnJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGV0dGVyVG9OdW1iZXJNYXAgPSB7ICdBJzogMSwgJ0InOiAyLCAnQyc6IDMsICdEJzogNCwgJ0UnOiA1IH07XG4gICAgICAgICAgICAgICAgbGV0IG51bWVyaWNTZXJpYWwgPSAnJztcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2Nlc3NlZFNlcmlhbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgbGV0IGNoYXIgPSBwcm9jZXNzZWRTZXJpYWxbaV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgIGlmIChjaGFyID49ICdGJyAmJiBjaGFyIDw9ICdaJykgY2hhciA9ICdFJztcbiAgICAgICAgICAgICAgICAgIGlmIChsZXR0ZXJUb051bWJlck1hcFtjaGFyXSkgbnVtZXJpY1NlcmlhbCArPSBsZXR0ZXJUb051bWJlck1hcFtjaGFyXTtcbiAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc05hTihwYXJzZUludChjaGFyLCAxMCkpKSBudW1lcmljU2VyaWFsICs9IGNoYXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChudW1lcmljU2VyaWFsLmxlbmd0aCA8IDEyKSBudW1lcmljU2VyaWFsID0gbnVtZXJpY1NlcmlhbC5wYWRFbmQoMTIsICcwJyk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobnVtZXJpY1NlcmlhbC5sZW5ndGggPiAxMikgbnVtZXJpY1NlcmlhbCA9IG51bWVyaWNTZXJpYWwuc3Vic3RyaW5nKDAsIDEyKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAobnVtZXJpY1NlcmlhbC5sZW5ndGggIT09IDEyIHx8ICEvXlxcZHsxMn0kLy50ZXN0KG51bWVyaWNTZXJpYWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Byb2Nlc3NlZCBzZXJpYWwgaXMgbm90IGEgMTItZGlnaXQgbnVtYmVyLicpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHBhaXJzID0gbnVtZXJpY1NlcmlhbC5tYXRjaCgvLnsxLDJ9L2cpIHx8IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUGFpcnMgPSBbcGFpcnNbMF0sIHBhaXJzWzJdLCBwYWlyc1s0XV07XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VtQUIgPSBwYXJzZUludChzZWxlY3RlZFBhaXJzWzBdWzBdLCAxMCkgKyBwYXJzZUludChzZWxlY3RlZFBhaXJzWzBdWzFdLCAxMCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VtRUYgPSBwYXJzZUludChzZWxlY3RlZFBhaXJzWzFdWzBdLCAxMCkgKyBwYXJzZUludChzZWxlY3RlZFBhaXJzWzFdWzFdLCAxMCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VtSUogPSBwYXJzZUludChzZWxlY3RlZFBhaXJzWzJdWzBdLCAxMCkgKyBwYXJzZUludChzZWxlY3RlZFBhaXJzWzJdWzFdLCAxMCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VtQkZKID0gcGFyc2VJbnQoc2VsZWN0ZWRQYWlyc1swXVsxXSwgMTApICsgcGFyc2VJbnQoc2VsZWN0ZWRQYWlyc1sxXVsxXSwgMTApICsgcGFyc2VJbnQoc2VsZWN0ZWRQYWlyc1syXVsxXSwgMTApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIDQuIFNldCB0aGUgZGlzcGxheWVkIGNvZGVcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXllZERldmljZUNvZGUgPSBgJHtTdHJpbmcoc3VtQUIpLnBhZFN0YXJ0KDIsICcwJyl9JHtTdHJpbmcoc3VtRUYpLnBhZFN0YXJ0KDIsICcwJyl9JHtTdHJpbmcoc3VtSUopLnBhZFN0YXJ0KDIsICcwJyl9JHtTdHJpbmcoc3VtQkZKKS5wYWRTdGFydCgyLCAnMCcpfTFgO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSYXcgRGV2aWNlIElEOicsIHRoaXMucmF3RGV2aWNlSWQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEaXNwbGF5ZWQgRGV2aWNlIENvZGU6JywgdGhpcy5kaXNwbGF5ZWREZXZpY2VDb2RlKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmYWlsOiAoZXJyLCBjb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIHNhdmUgcmF3IGRldmljZSBJRCB0byBzdG9yYWdlLiBDb2RlOiAke2NvZGV9LCBFcnJvcjogJHtlcnJ9YCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogKGVyciwgY29kZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGdldCBzZXJpYWwuIENvZGU6ICR7Y29kZX0sIEVycm9yOiAke2Vycn1gKTtcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgYXN5bmMgYWN0aXZhdGUoKSB7XG4gICAgICBpZiAoIXRoaXMuYWN0aXZhdGlvbkNvZGUgfHwgdGhpcy5hY3RpdmF0aW9uQ29kZS5sZW5ndGggIT09IDExKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IFwi5r+A5rS756CB6ZW/5bqm5LiN5q2j56Gu77yM5bqU5Li6MTHkvY1cIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBTdGVwIDE6IExvY2FsIHZhbGlkYXRpb24gYWdhaW5zdCB0aGUgcHJvY2Vzc2VkL2Rpc3BsYXllZCBjb2RlXG4gICAgICBjb25zdCBhYyA9IHRoaXMuYWN0aXZhdGlvbkNvZGU7XG4gICAgICBjb25zdCBHX3ZhbCA9IHBhcnNlSW50KGFjWzZdLCAxMCk7XG4gICAgICBjb25zdCBLX3ZhbCA9IHBhcnNlSW50KGFjWzEwXSwgMTApO1xuICAgICAgY29uc3QgSElfbW9kaWZpZWRfbnVtID0gcGFyc2VJbnQoYCR7YWNbN119JHthY1s4XX1gLCAxMCkgLSBHX3ZhbCAtIEtfdmFsO1xuICAgICAgaWYgKEhJX21vZGlmaWVkX251bSA8IDAgfHwgSElfbW9kaWZpZWRfbnVtID4gOTkpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gXCLmv4DmtLvlpLHotKU6IEhJ5YeP5rOV57uT5p6c5peg5pWIXCI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IEhJX21vZGlmaWVkX3N0ciA9IFN0cmluZyhISV9tb2RpZmllZF9udW0pLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICBjb25zdCBBQl92YWwgPSBwYXJzZUludChgJHthY1swXX0ke2FjWzFdfWAsIDEwKTtcbiAgICAgIGNvbnN0IENEX3ZhbCA9IHBhcnNlSW50KGAke2FjWzJdfSR7YWNbM119YCwgMTApO1xuICAgICAgY29uc3QgRUZfdmFsID0gcGFyc2VJbnQoYCR7YWNbNF19JHthY1s1XX1gLCAxMCk7XG4gICAgICBsZXQgQUJfZGl2aWRlZCwgQ0RfZGl2aWRlZCwgRUZfZGl2aWRlZDtcbiAgICAgIGlmIChHX3ZhbCA9PT0gMCkge1xuICAgICAgICBBQl9kaXZpZGVkID0gQUJfdmFsOyBDRF9kaXZpZGVkID0gQ0RfdmFsOyBFRl9kaXZpZGVkID0gRUZfdmFsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQUJfZGl2aWRlZCA9IE1hdGguZmxvb3IoQUJfdmFsIC8gR192YWwpO1xuICAgICAgICBDRF9kaXZpZGVkID0gTWF0aC5mbG9vcihDRF92YWwgLyBHX3ZhbCk7XG4gICAgICAgIEVGX2RpdmlkZWQgPSBNYXRoLmZsb29yKEVGX3ZhbCAvIEdfdmFsKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGdyb3VwQUJDREVGSElKID0gYCR7U3RyaW5nKEFCX2RpdmlkZWQpLnBhZFN0YXJ0KDIsICcwJyl9JHtTdHJpbmcoQ0RfZGl2aWRlZCkucGFkU3RhcnQoMiwgJzAnKX0ke1N0cmluZyhFRl9kaXZpZGVkKS5wYWRTdGFydCgyLCAnMCcpfSR7SElfbW9kaWZpZWRfc3RyfSR7YWNbOV19YDtcbiAgICAgIFxuICAgICAgLy8gQ29tcGFyZSBhZ2FpbnN0IHRoZSBkaXNwbGF5ZWQvcHJvY2Vzc2VkIGNvZGVcbiAgICAgIGlmIChncm91cEFCQ0RFRkhJSiAhPT0gdGhpcy5kaXNwbGF5ZWREZXZpY2VDb2RlKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IFwi5r+A5rS75aSx6LSlOiDorr7lpIfnoIHkuI3ljLnphY1cIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IGN1cnJlbnRNaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKTtcbiAgICAgIGlmIChjdXJyZW50TWludXRlcyA8PSA5KSBjdXJyZW50TWludXRlcyArPSA2MDtcbiAgICAgIGNvbnN0IEdKX3ZhbHVlID0gcGFyc2VJbnQoYCR7YWNbNl19JHthY1s5XX1gLCAxMCk7XG4gICAgICBjb25zdCBkaWZmID0gY3VycmVudE1pbnV0ZXMgLSBHSl92YWx1ZTtcblxuICAgICAgaWYgKGRpZmYgPiAxMCB8fCBkaWZmIDwgMCkge1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSBg5r+A5rS75aSx6LSlOiDml7bpl7TmoKHpqozkuI3pgJrov4cgKOW3ruWAvDogJHtkaWZmfSlgO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIFN0ZXAgMjogU2VydmVyIFJlZ2lzdHJhdGlvbiB1c2luZyB0aGUgcmF3IGlkZW50aWZpZXJcbiAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IFwi5pys5Zyw5qCh6aqM5oiQ5Yqf77yM5q2j5Zyo5rOo5YaM6K6+5aSHLi4uXCI7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBVc2UgcmF3RGV2aWNlSWQgZm9yIHNlcnZlciBjb21tdW5pY2F0aW9uXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2UucmVnaXN0ZXJBbmRHZXRVc2VySWQodGhpcy5yYXdEZXZpY2VJZCk7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzICYmIChyZXN1bHQudXNlckluZm8/LmlkIHx8IHJlc3VsdC51c2VySW5mbz8udXNlcl9udW1iZXIpKSB7XG4gICAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gXCLmv4DmtLvmiJDlip/vvIHlt7Lojrflj5bnlKjmiLdJROOAglwiO1xuICAgICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlQWN0aXZhdGlvblN1Y2Nlc3MocmVzdWx0LnVzZXJJbmZvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocmVzdWx0LnJlYXNvbiA9PT0gJ3VzZXJfaWRfdmVyaWZpY2F0aW9uX3JlcXVpcmVkJykge1xuICAgICAgICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSByZXN1bHQubWVzc2FnZSB8fCAn5q2k55So5oi35ZCN5bey5a2Y5Zyo77yM6K+36L6T5YWl55So5oi3SUTku6Xpqozor4HjgIInO1xuICAgICAgICAgICAgICB0aGlzLnVpU3RhdGUgPSAnZW50ZXJfdXNlcl9pZCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gXCLmv4DmtLvlpLHotKU6IFwiICsgKHJlc3VsdC5lcnJvciB8fCBcIuaXoOazleS7juacjeWKoeWZqOiOt+WPlueUqOaIt+S/oeaBr1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gXCLmv4DmtLvlpLHotKU6IOe9kee7nOivt+axgumUmeivr++8jOivt+mHjeivleOAglwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+Il0sIm5hbWVzIjpbIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIl9zeXN0ZW0yIiwiX3N5c3RlbTMiLCJfc3lzdGVtNCIsIl9jb25maWciLCJyZXF1aXJlIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0Iiwib3duS2V5cyIsInIiLCJ0IiwiT2JqZWN0Iiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIm8iLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwicHVzaCIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJ2YWx1ZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiaSIsIl90b1ByaW1pdGl2ZSIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIkFwaVNlcnZpY2UiLCJjb25zdHJ1Y3RvciIsImJhc2VIZWFkZXJzIiwicmVxdWVzdCIsImVuZHBvaW50IiwibWV0aG9kIiwiZGF0YSIsInVybCIsIm9wdGlvbnMiLCJoZWFkZXIiLCJyZXNwb25zZVR5cGUiLCJKU09OIiwic3RyaW5naWZ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInJlc3BvbnNlRGF0YSIsImNvZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImZhaWwiLCJnZXRSYW5raW5ncyIsImxpbWl0IiwicmVzdWx0IiwiYWN0aW9uIiwicmFua2luZ3MiLCJtZXNzYWdlIiwic3luY0NsaWNrcyIsInVzZXJJZCIsImNsaWNrQ291bnQiLCJ1c2VyX2lkIiwiY2xpY2tfY291bnQiLCJjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkiLCJwZXROYW1lIiwicGV0X25hbWUiLCJpc0F2YWlsYWJsZSIsInNldFBldE5hbWUiLCJuZXdOYW1lIiwibmV3X25hbWUiLCJjaGVja0RldmljZVJlZ2lzdHJhdGlvbiIsImRldmljZUlkIiwiZGV2aWNlX2lkIiwibG9nIiwicmVnaXN0ZXJBbmRHZXRVc2VySWQiLCJ1c2VySW5mbyIsInZlcmlmeVVzZXJJZEFuZFJlc3RvcmUiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJDT05GSUciLCJBUFAiLCJOQU1FIiwiVkVSU0lPTiIsIk1BWF9DTElDS1NfUEVSX0JBVENIIiwiU1lOQ19JTlRFUlZBTCIsIlJBTktfTElNSVQiLCJTVE9SQUdFX0tFWVMiLCJJU19MT0NBTExZX0FDVElWQVRFRCIsIkRFVklDRV9JRCIsIlVTRVJfSU5GTyIsIlBFTkRJTkdfQ0xJQ0tTIiwiTEFTVF9TWU5DX1RJTUUiLCJUT1RBTF9DTElDS1MiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX2FwaVNlcnZpY2UiLCJ0aW1lIiwicmF3RGV2aWNlSWQiLCJkaXNwbGF5ZWREZXZpY2VDb2RlIiwiYWN0aXZhdGlvbkNvZGUiLCJ1c2VySWRJbnB1dCIsInN0YXR1c01lc3NhZ2UiLCJ1aVN0YXRlIiwib25Jbml0IiwidXBkYXRlVGltZSIsInNldEludGVydmFsIiwiZ2VuZXJhdGVkIiwicHJvY2Vzc0RldmljZUlkZW50aWZpZXIiLCJhdHRlbXB0QXV0b0FjdGl2YXRpb24iLCJoYW5kbGVBY3RpdmF0aW9uU3VjY2VzcyIsInN0b3JhZ2UiLCJzZXQiLCJrZXkiLCJ1c2VySW5mb1RvU2F2ZSIsImlkIiwidXNlcl9udW1iZXIiLCJ0b3RhbF9jbGlja3MiLCJzZXRUaW1lb3V0Iiwicm91dGVyIiwicmVwbGFjZSIsInVyaSIsImlzX3JlZ2lzdGVyZWQiLCJhdXRvX2FjdGl2YXRpb25fY291bnQiLCJyZWFzb24iLCJjYW5fYXV0b19hY3RpdmF0ZSIsIm5vdyIsIkRhdGUiLCJob3VycyIsImdldEhvdXJzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZ29CYWNrIiwiYmFjayIsImhhbmRsZUtleUNsaWNrIiwiZGV0YWlsIiwic2xpY2UiLCJ2ZXJpZnlVc2VySWRBbmRQcm9jZWVkIiwiYWN0aXZhdGUiLCJkZXZpY2UiLCJnZXRTZXJpYWwiLCJzZXJpYWwiLCJwcm9jZXNzZWRTZXJpYWwiLCJzdWJzdHJpbmciLCJsZXR0ZXJUb051bWJlck1hcCIsIm51bWVyaWNTZXJpYWwiLCJjaGFyIiwidG9VcHBlckNhc2UiLCJpc05hTiIsInBhcnNlSW50IiwicGFkRW5kIiwidGVzdCIsInBhaXJzIiwibWF0Y2giLCJzZWxlY3RlZFBhaXJzIiwic3VtQUIiLCJzdW1FRiIsInN1bUlKIiwic3VtQkZKIiwiZXJyIiwiYWMiLCJHX3ZhbCIsIktfdmFsIiwiSElfbW9kaWZpZWRfbnVtIiwiSElfbW9kaWZpZWRfc3RyIiwiQUJfdmFsIiwiQ0RfdmFsIiwiRUZfdmFsIiwiQUJfZGl2aWRlZCIsIkNEX2RpdmlkZWQiLCJFRl9kaXZpZGVkIiwiTWF0aCIsImZsb29yIiwiZ3JvdXBBQkNERUZISUoiLCJjdXJyZW50TWludXRlcyIsIkdKX3ZhbHVlIiwiZGlmZiIsIl9yZXN1bHQkdXNlckluZm8iLCJfcmVzdWx0JHVzZXJJbmZvMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQ0EsSUFBQUEsVUFBQUMsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUMsV0FBQUYsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUUsV0FBQUgsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUcsV0FBQUosdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUksVUFBQUMsb0JBQUE7d0JBQXFDLFNBQUFOLHVCQUFBTyxDQUFBOzRCQUFBLE9BQUFBLEtBQUFBLEVBQUFDLFVBQUEsR0FBQUQsSUFBQTtnQ0FBQUUsU0FBQUY7NEJBQUE7d0JBQUE7d0JBQUEsU0FBQUcsUUFBQUgsQ0FBQSxFQUFBSSxDQUFBOzRCQUFBLElBQUFDLElBQUFDLE9BQUFDLElBQUEsQ0FBQVA7NEJBQUEsSUFBQU0sT0FBQUUscUJBQUE7Z0NBQUEsSUFBQUMsSUFBQUgsT0FBQUUscUJBQUEsQ0FBQVI7Z0NBQUFJLEtBQUFLLENBQUFBLElBQUFBLEVBQUFDLE1BQUEsVUFBQU4sQ0FBQTtvQ0FBQSxPQUFBRSxPQUFBSyx3QkFBQSxDQUFBWCxHQUFBSSxHQUFBUSxVQUFBO2dDQUFBLEtBQUFQLEVBQUFRLElBQUEsQ0FBQUMsS0FBQSxDQUFBVCxHQUFBSTs0QkFBQTs0QkFBQSxPQUFBSjt3QkFBQTt3QkFBQSxTQUFBVSxjQUFBZixDQUFBOzRCQUFBLFFBQUFJLElBQUEsR0FBQUEsSUFBQVksVUFBQUMsTUFBQSxFQUFBYixJQUFBO2dDQUFBLElBQUFDLElBQUEsUUFBQVcsU0FBQSxDQUFBWixFQUFBLEdBQUFZLFNBQUEsQ0FBQVosRUFBQTtnQ0FBQUEsSUFBQSxJQUFBRCxRQUFBRyxPQUFBRCxJQUFBLElBQUFhLE9BQUEsVUFBQWQsQ0FBQTtvQ0FBQWUsZ0JBQUFuQixHQUFBSSxHQUFBQyxDQUFB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