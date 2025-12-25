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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZhdGVcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9hY3RpdmF0ZS9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcGktc2VydmljZS5qc1xuaW1wb3J0IGZldGNoIGZyb20gJ0BzeXN0ZW0uZmV0Y2gnO1xuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xuaW1wb3J0IHByb21wdCBmcm9tICdAc3lzdGVtLnByb21wdCc7XG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XG5cbmNsYXNzIEFwaVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyDkuK3ovazmnI3liqHlmajlnLDlnYAgLSDku44gY29uZmlnLmpzIOivu+WPllxuICAgIHRoaXMuYmFzZVVybCA9IENPTkZJRy5TRVJWRVIuQkFTRV9VUkw7XG4gICAgdGhpcy5iYXNlSGVhZGVycyA9IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfVxuICB9XG5cbiAgLy8g6YCa55So6K+35rGC5pa55rOVIC0g6YCa6L+H5Lit6L2s5pyN5Yqh5Zmo6L2s5Y+RXG4gIGFzeW5jIHJlcXVlc3QoYWN0aW9uLCBkYXRhID0ge30pIHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9L2FwaWA7XG4gICAgXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyOiB0aGlzLmJhc2VIZWFkZXJzLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbidcbiAgICB9O1xuXG4gICAgb3B0aW9ucy5kYXRhID0gSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb24sIC4uLmRhdGEgfSk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmV0Y2guZmV0Y2goe1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUgPj0gMjAwICYmIHJlc3BvbnNlLmNvZGUgPCAzMDApIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2VEYXRhKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBIVFRQIEVycm9yOiAke3Jlc3BvbnNlLmNvZGV9YCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgSFRUUCAke3Jlc3BvbnNlLmNvZGV9OiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlRGF0YSl9YCkpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAoZXJyb3IsIGNvZGUpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBSZXF1ZXN0IEZhaWxlZDogJHtjb2RlfWAsIGVycm9yKTtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZDogJHtlcnJvci5kYXRhfWApKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvLyDojrflj5bmjpLooYzmppxcbiAgYXN5bmMgZ2V0UmFua2luZ3MobGltaXQgPSAxMCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2dldF9yYW5raW5ncycsIHtcbiAgICAgICAgbGltaXQ6IGxpbWl0XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgcmFua2luZ3M6IHJlc3VsdC5yYW5raW5ncyB8fCBbXVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfojrflj5bmjpLooYzmppzlpLHotKU6JywgZXJyb3IpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgcmFua2luZ3M6IFtdLFxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIOS4iuaKpeeCueWHu+asoeaVsFxuICBhc3luYyBzeW5jQ2xpY2tzKHVzZXJJZCwgY2xpY2tDb3VudCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLnJlcXVlc3QoJ3N5bmNfY2xpY2tzJywge1xuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgICAgIGNsaWNrX2NvdW50OiBjbGlja0NvdW50XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S4iuaKpeeCueWHu+asoeaVsOWksei0pTonLCBlcnJvcilcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIOajgOafpeWuoOeJqeWQjeaYr+WQpuWPr+eUqFxuICBhc3luYyBjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkocGV0TmFtZSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2NoZWNrX3BldF9uYW1lJywge1xuICAgICAgICBwZXRfbmFtZTogcGV0TmFtZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCAuLi5yZXN1bHQgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign5qOA5p+l5a6g54mp5ZCN5Y+v55So5oCn5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSwgaXNBdmFpbGFibGU6IGZhbHNlIH07XG4gICAgfVxuICB9XG5cbiAgLy8g5L+u5pS55a6g54mp5ZCNXG4gIGFzeW5jIHNldFBldE5hbWUodXNlcklkLCBuZXdOYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnc2V0X3BldF9uYW1lJywge1xuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgICAgIG5ld19uYW1lOiBuZXdOYW1lXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S/ruaUueWuoOeJqeWQjeWksei0pTonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cblxuICAvLyDpooTmv4DmtLvmo4Dmn6VcbiAgYXN5bmMgY2hlY2tEZXZpY2VSZWdpc3RyYXRpb24oZGV2aWNlSWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdjaGVja19yZWdpc3RyYXRpb24nLCB7XG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWRcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ+mihOa/gOa0u+ajgOafpeaIkOWKnzonLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+mihOa/gOa0u+ajgOafpeaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cblxuICAvLyDms6jlhozorr7lpIflubbojrflj5bnlKjmiLdJRFxuICBhc3luYyByZWdpc3RlckFuZEdldFVzZXJJZChkZXZpY2VJZCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ3JlZ2lzdGVyX2RldmljZV9hbmRfZ2V0X2lkJywge1xuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+azqOWGjOiuvuWkh+W5tuiOt+WPlueUqOaIt0lE5oiQ5YqfOicsIHJlc3VsdC51c2VySW5mbyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVzZXJJbmZvOiByZXN1bHQudXNlckluZm8gfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPlueUqOaIt0lE5aSx6LSlOicsIHJlc3VsdCA/IHJlc3VsdC5lcnJvciA6ICfmnKrnn6XplJnor68nKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAocmVzdWx0ID8gcmVzdWx0LmVycm9yIDogJ+acjeWKoeWZqOacqui/lOWbnuaIkOWKn+eKtuaAgScpIH07XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+azqOWGjOaIluiOt+WPlueUqOaIt0lE5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIOmqjOivgeeUqOaIt0lE5bm25oGi5aSN5pWw5o2uXG4gIGFzeW5jIHZlcmlmeVVzZXJJZEFuZFJlc3RvcmUoZGV2aWNlSWQsIHVzZXJJZCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ3ZlcmlmeV91c2VyX2lkX2FuZF9yZXN0b3JlJywge1xuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkLFxuICAgICAgICB1c2VyX2lkOiB1c2VySWRcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1c2VySW5mbzogcmVzdWx0LnVzZXJJbmZvIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IChyZXN1bHQgPyByZXN1bHQuZXJyb3IgOiAn6aqM6K+B5aSx6LSlJykgfTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign6aqM6K+B55So5oi3SUTml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBcGlTZXJ2aWNlKClcbiIsIi8vIGNvbmZpZy5qc1xuZXhwb3J0IGNvbnN0IENPTkZJRyA9IHtcbiAgLy8g5Lit6L2s5pyN5Yqh5Zmo6YWN572uXG4gIFNFUlZFUjoge1xuICAgIEJBU0VfVVJMOiAnaHR0cDovLzEwMy4yMDUuMjUzLjg3OjIyMjA3J1xuICB9LFxuICBcbiAgLy8g5rOo5oSP77yaVVJMIOWJjee8gOWcqCBhcGktc2VydmljZS5qcyDkuK3noaznvJbnoIHkuoZcbiAgLy8g6L+Z6YeM5LiN5YaN6ZyA6KaB6YWN572uXG4gIFxuICAvLyDlupTnlKjphY3nva5cbiAgQVBQOiB7XG4gICAgTkFNRTogJ0JhbmRQZXQnLFxuICAgIFZFUlNJT046ICcwLjMuNSBBbHBoYScsXG4gICAgTUFYX0NMSUNLU19QRVJfQkFUQ0g6IDUwLFxuICAgIFNZTkNfSU5URVJWQUw6IDMwMDAwMCxcbiAgICBSQU5LX0xJTUlUOiAxMFxuICB9LFxuICBcbiAgLy8g5a2Y5YKo6ZSu5ZCNXG4gIFNUT1JBR0VfS0VZUzoge1xuICAgIERFVklDRV9JRDogJ2RldmljZV9pZCcsXG4gICAgVVNFUl9JTkZPOiAndXNlcl9pbmZvJyxcbiAgICBQRU5ESU5HX0NMSUNLUzogJ3BlbmRpbmdfY2xpY2tzJyxcbiAgICBMQVNUX1NZTkNfVElNRTogJ2xhc3Rfc3luY190aW1lJyxcbiAgICBUT1RBTF9DTElDS1M6ICd0b3RhbF9jbGlja3MnXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjYuOFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS42LjhcIjsiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uL2JhY2sucG5nXCIgY2xhc3M9XCJwYWdlLWhlYWRlci1iYWNrLWJ1dHRvblwiIG9uY2xpY2s9XCJnb0JhY2tcIj48L2ltYWdlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRpdGxlLXRpbWVcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtdGltZS1kaXNwbGF5XCI+e3sgdGltZSB9fTwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtaGVhZGVyLXRpdGxlXCI+e3sgdWlTdGF0ZSA9PT0gJ2VudGVyX3VzZXJfaWQnID8gJ+mqjOivgeeUqOaIt0lEJyA6ICfmv4DmtLsnIH19PC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxzY3JvbGwgY2xhc3M9XCJjb250ZW50LXNjcm9sbC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1jb2RlLXNlY3Rpb25cIj5cbiAgICAgICAgICA8dGV4dD7mgqjnmoTorr7lpIfnoIHkuLo8L3RleHQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvZGUtYm94XCI+XG4gICAgICAgICAgICA8IS0tIERpc3BsYXkgdGhlIHByb2Nlc3NlZCBjb2RlIC0tPlxuICAgICAgICAgICAgPHRleHQ+e3sgZGlzcGxheWVkRGV2aWNlQ29kZSB9fTwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBBY3RpdmF0aW9uIENvZGUgSW5wdXQgU3RhdGUgLS0+XG4gICAgICAgIDxkaXYgaWY9XCJ7eyB1aVN0YXRlID09PSAnZW50ZXJfYWN0aXZhdGlvbl9jb2RlJyB9fVwiIGNsYXNzPVwiYWN0aXZhdGlvbi1jb2RlLXNlY3Rpb25cIj5cbiAgICAgICAgICA8dGV4dD7mv4DmtLvnoIE8L3RleHQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWJveFwiPlxuICAgICAgICAgICAgPHRleHQ+e3sgYWN0aXZhdGlvbkNvZGUgfHwgJ+eCueWHu+i+k+WFpScgfX08L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gVXNlciBJRCBJbnB1dCBTdGF0ZSAtLT5cbiAgICAgICAgPGRpdiBpZj1cInt7IHVpU3RhdGUgPT09ICdlbnRlcl91c2VyX2lkJyB9fVwiIGNsYXNzPVwiYWN0aXZhdGlvbi1jb2RlLXNlY3Rpb25cIj5cbiAgICAgICAgICA8dGV4dD7nlKjmiLdJRDwvdGV4dD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtYm94XCI+XG4gICAgICAgICAgICA8dGV4dD57eyB1c2VySWRJbnB1dCB8fCAn54K55Ye76L6T5YWl55So5oi3SUQnIH19PC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiPlxuICAgICAgICAgIDwhLS0gVDkgS2V5Ym9hcmQgKHRlbXBsYXRlIHJlbWFpbnMgdGhlIHNhbWUpIC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0OS1rZXlib2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleWJvYXJkLXJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCIgb25jbGljaz1cImhhbmRsZUtleUNsaWNrKHtkZXRhaWw6IHt2YWx1ZTogJzEnfX0pXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi8xLnBuZ1wiIGNsYXNzPVwia2V5LWljb25cIj48L2ltYWdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJoYW5kbGVLZXlDbGljayh7ZGV0YWlsOiB7dmFsdWU6ICcyJ319KVwiPlxuICAgICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vMi5wbmdcIiBjbGFzcz1cImtleS1pY29uXCI+PC9pbWFnZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwiaGFuZGxlS2V5Q2xpY2soe2RldGFpbDoge3ZhbHVlOiAnMyd9fSlcIj5cbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uLzMucG5nXCIgY2xhc3M9XCJrZXktaWNvblwiPjwvaW1hZ2U+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5Ym9hcmQtcm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwiaGFuZGxlS2V5Q2xpY2soe2RldGFpbDoge3ZhbHVlOiAnNCd9fSlcIj5cbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uLzQucG5nXCIgY2xhc3M9XCJrZXktaWNvblwiPjwvaW1hZ2U+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCIgb25jbGljaz1cImhhbmRsZUtleUNsaWNrKHtkZXRhaWw6IHt2YWx1ZTogJzUnfX0pXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi81LnBuZ1wiIGNsYXNzPVwia2V5LWljb25cIj48L2ltYWdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJoYW5kbGVLZXlDbGljayh7ZGV0YWlsOiB7dmFsdWU6ICc2J319KVwiPlxuICAgICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vNi5wbmdcIiBjbGFzcz1cImtleS1pY29uXCI+PC9pbWFnZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlib2FyZC1yb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJoYW5kbGVLZXlDbGljayh7ZGV0YWlsOiB7dmFsdWU6ICc3J319KVwiPlxuICAgICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vNy5wbmdcIiBjbGFzcz1cImtleS1pY29uXCI+PC9pbWFnZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwiaGFuZGxlS2V5Q2xpY2soe2RldGFpbDoge3ZhbHVlOiAnOCd9fSlcIj5cbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uLzgucG5nXCIgY2xhc3M9XCJrZXktaWNvblwiPjwvaW1hZ2U+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCIgb25jbGljaz1cImhhbmRsZUtleUNsaWNrKHtkZXRhaWw6IHt2YWx1ZTogJzknfX0pXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi85LnBuZ1wiIGNsYXNzPVwia2V5LWljb25cIj48L2ltYWdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleWJvYXJkLXJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCIgb25jbGljaz1cImhhbmRsZUtleUNsaWNrKHtkZXRhaWw6IHt2YWx1ZTogJ+KMqyd9fSlcIj5cbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uL2RlbC5wbmdcIiBjbGFzcz1cImtleS1pY29uXCI+PC9pbWFnZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwiaGFuZGxlS2V5Q2xpY2soe2RldGFpbDoge3ZhbHVlOiAnMCd9fSlcIj5cbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uLzAucG5nXCIgY2xhc3M9XCJrZXktaWNvblwiPjwvaW1hZ2U+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCIgb25jbGljaz1cImhhbmRsZUtleUNsaWNrKHtkZXRhaWw6IHt2YWx1ZTogJ+Kckyd9fSlcIj5cbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uL1NtYWxsQ2hlY2sucG5nXCIgY2xhc3M9XCJrZXktaWNvblwiPjwvaW1hZ2U+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zY3JvbGw+XG5cbiAgICA8dGV4dCBjbGFzcz1cInN0YXR1cy10ZXh0XCI+e3sgc3RhdHVzTWVzc2FnZSB9fTwvdGV4dD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gIC8qIFN0eWxlcyByZW1haW4gdW5jaGFuZ2VkICovXG4gIC5wYWdlLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5wYWdlLWhlYWRlci1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLnBhZ2UtdGltZS1kaXNwbGF5IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5wYWdlLWhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG4gIC5oZWFkZXItdGl0bGUtdGltZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuICAuY29udGVudC1zY3JvbGwtY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wYWdlLWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgfVxuICAuZGV2aWNlLWNvZGUtc2VjdGlvbiwgLmFjdGl2YXRpb24tY29kZS1zZWN0aW9uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAuZGV2aWNlLWNvZGUtc2VjdGlvbiB0ZXh0LCAuYWN0aXZhdGlvbi1jb2RlLXNlY3Rpb24gdGV4dCB7IGNvbG9yOiAjQUFBOyBmb250LXNpemU6IDI4cHg7IG1hcmdpbi1ib3R0b206IDEwcHg7IH1cbiAgLmNvZGUtYm94LCAuaW5wdXQtYm94IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAtMXB4IDEwcHg7XG4gIH1cbiAgLmNvZGUtYm94IHRleHQge1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICAuaW5wdXQtYm94IHtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmlucHV0LWJveCB0ZXh0IHtcbiAgICAgIGNvbG9yOiAjRkZGO1xuICB9XG4gIC5hY3Rpb25zIHsgd2lkdGg6IDEwMCU7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBtYXJnaW4tdG9wOiAtMXB4OyB9XG4gIC5zdGF0dXMtdGV4dCB7IGNvbG9yOiAjRkYzQjMwOyBmb250LXNpemU6IDI0cHg7IG1hcmdpbi10b3A6IDIwcHg7IH1cbiAgLnQ5LWtleWJvYXJkIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgfVxuICAua2V5Ym9hcmQtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIH1cbiAgLmtleSB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzJjMmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBtYXJnaW46IC0yMHB4IDhweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5rZXktaWNvbiB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcbiAgaW1wb3J0IGRldmljZSBmcm9tICdAc3lzdGVtLmRldmljZSc7XG4gIGltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XG4gIGltcG9ydCBwcm9tcHQgZnJvbSAnQHN5c3RlbS5wcm9tcHQnO1xuICBpbXBvcnQgQXBpU2VydmljZSBmcm9tICcuLi9jb21tb24vanMvYXBpLXNlcnZpY2UuanMnO1xuICBpbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuLi9jb21tb24vanMvY29uZmlnLmpzJztcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YToge1xuICAgICAgdGltZTogJzAwOjAwJyxcbiAgICAgIHJhd0RldmljZUlkOiBudWxsLCAvLyBUbyBzdG9yZSB0aGUgcmF3IHN5c3RlbSBpZGVudGlmaWVyXG4gICAgICBkaXNwbGF5ZWREZXZpY2VDb2RlOiAn5q2j5Zyo55Sf5oiQLi4uJywgLy8gVG8gc3RvcmUgdGhlIHByb2Nlc3NlZCBjb2RlIGZvciBkaXNwbGF5IGFuZCBsb2NhbCB2YWxpZGF0aW9uXG4gICAgICBhY3RpdmF0aW9uQ29kZTogJycsXG4gICAgICB1c2VySWRJbnB1dDogJycsXG4gICAgICBzdGF0dXNNZXNzYWdlOiAnJyxcbiAgICAgIHVpU3RhdGU6ICdlbnRlcl9hY3RpdmF0aW9uX2NvZGUnLFxuICAgIH0sXG5cbiAgICBhc3luYyBvbkluaXQoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICAgIHNldEludGVydmFsKHRoaXMudXBkYXRlVGltZSwgNTAwMCk7XG4gICAgICBcbiAgICAgIGNvbnN0IGdlbmVyYXRlZCA9IGF3YWl0IHRoaXMucHJvY2Vzc0RldmljZUlkZW50aWZpZXIoKTtcbiAgICAgIGlmIChnZW5lcmF0ZWQpIHtcbiAgICAgICAgdGhpcy5hdHRlbXB0QXV0b0FjdGl2YXRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlzcGxheWVkRGV2aWNlQ29kZSA9ICfojrflj5blpLHotKUnO1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn5peg5rOV6I635Y+W6K6+5aSH5qCH6K+G77yM6K+36YeN5ZCv5bqU55So44CCJztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gTmV3IGNlbnRyYWxpemVkIHN1Y2Nlc3MgaGFuZGxlclxuICAgIGFzeW5jIGhhbmRsZUFjdGl2YXRpb25TdWNjZXNzKHVzZXJJbmZvKSB7XG4gICAgICBhd2FpdCBzdG9yYWdlLnNldCh7IFxuICAgICAgICBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuSVNfTE9DQUxMWV9BQ1RJVkFURUQsIFxuICAgICAgICB2YWx1ZTogJ3RydWUnIFxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIC8vIFRoZSByYXdEZXZpY2VJZCBpcyBhbHJlYWR5IHNhdmVkIGluIHN0b3JhZ2UgZnJvbSBwcm9jZXNzRGV2aWNlSWRlbnRpZmllclxuICAgICAgXG4gICAgICBjb25zdCB1c2VySW5mb1RvU2F2ZSA9IHtcbiAgICAgICAgaWQ6IHVzZXJJbmZvLmlkIHx8IHVzZXJJbmZvLnVzZXJfbnVtYmVyLFxuICAgICAgICB1c2VyX251bWJlcjogdXNlckluZm8udXNlcl9udW1iZXIsXG4gICAgICAgIHBldF9uYW1lOiB1c2VySW5mby5wZXRfbmFtZSxcbiAgICAgICAgdG90YWxfY2xpY2tzOiB1c2VySW5mby50b3RhbF9jbGlja3MgfHwgMFxuICAgICAgfTtcbiAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KHsgXG4gICAgICAgIGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8sIFxuICAgICAgICB2YWx1ZTogSlNPTi5zdHJpbmdpZnkodXNlckluZm9Ub1NhdmUpIFxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByb3V0ZXIucmVwbGFjZSh7IHVyaTogJ21haW4nIH0pO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSxcblxuICAgIGFzeW5jIGF0dGVtcHRBdXRvQWN0aXZhdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5yYXdEZXZpY2VJZCkgcmV0dXJuO1xuICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gJ+ato+WcqOajgOafpeiuvuWkh+azqOWGjOS/oeaBry4uLic7XG4gICAgICAvLyBVc2UgcmF3RGV2aWNlSWQgZm9yIHNlcnZlciBjb21tdW5pY2F0aW9uXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLmNoZWNrRGV2aWNlUmVnaXN0cmF0aW9uKHRoaXMucmF3RGV2aWNlSWQpO1xuXG4gICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MgJiYgcmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEuaXNfcmVnaXN0ZXJlZCkge1xuICAgICAgICBjb25zdCB7IHVzZXJJbmZvLCBhdXRvX2FjdGl2YXRpb25fY291bnQsIHJlYXNvbiB9ID0gcmVzdWx0LmRhdGE7XG5cbiAgICAgICAgaWYgKHJlYXNvbiA9PT0gJ2xvZ2dlZF9pbl9vbl9uZXdlcl9kZXZpY2UnKSB7XG4gICAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gJ+atpOiuvuWkh+S5i+WJjee7keWumueahOeUqOaIt+W3suWcqOWFtuS7luiuvuWkh+S4iueZu+W9le+8jOivt+mHjeaWsOa/gOa0u+OAgic7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdC5kYXRhLmNhbl9hdXRvX2FjdGl2YXRlKSB7XG4gICAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gYOiHquWKqOa/gOa0u+aIkOWKn++8geato+WcqOaBouWkjeaVsOaNri4uLiAoJHsoYXV0b19hY3RpdmF0aW9uX2NvdW50IHx8IDApICsgMX0vNSlgO1xuICAgICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlQWN0aXZhdGlvblN1Y2Nlc3ModXNlckluZm8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICfoh6rliqjmv4DmtLvmrKHmlbDlt7Lovr7kuIrpmZDvvIzor7fmiYvliqjmv4DmtLvjgIInO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAnJzsgLy8gTm90IHJlZ2lzdGVyZWQgb3IgQVBJIGZhaWxlZFxuICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVUaW1lKCkge1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgY29uc3QgbWludXRlcyA9IG5vdy5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgdGhpcy50aW1lID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xuICAgIH0sXG5cbiAgICBnb0JhY2soKSB7XG4gICAgICBpZiAodGhpcy51aVN0YXRlID09PSAnZW50ZXJfdXNlcl9pZCcpIHtcbiAgICAgICAgdGhpcy51aVN0YXRlID0gJ2VudGVyX2FjdGl2YXRpb25fY29kZSc7XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICcnO1xuICAgICAgICB0aGlzLnVzZXJJZElucHV0ID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3V0ZXIuYmFjaygpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBoYW5kbGVLZXlDbGljayhlKSB7XG4gICAgICBjb25zdCBrZXkgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIGlmICh0aGlzLnVpU3RhdGUgPT09ICdlbnRlcl91c2VyX2lkJykge1xuICAgICAgICBpZiAoa2V5ID09PSAn4oyrJykgdGhpcy51c2VySWRJbnB1dCA9IHRoaXMudXNlcklkSW5wdXQuc2xpY2UoMCwgLTEpO1xuICAgICAgICBlbHNlIGlmIChrZXkgPT09ICfinJMnKSB0aGlzLnZlcmlmeVVzZXJJZEFuZFByb2NlZWQoKTtcbiAgICAgICAgZWxzZSB0aGlzLnVzZXJJZElucHV0ICs9IGtleTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChrZXkgPT09ICfijKsnKSB0aGlzLmFjdGl2YXRpb25Db2RlID0gdGhpcy5hY3RpdmF0aW9uQ29kZS5zbGljZSgwLCAtMSk7XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ+KckycpIHRoaXMuYWN0aXZhdGUoKTtcbiAgICAgICAgZWxzZSB0aGlzLmFjdGl2YXRpb25Db2RlICs9IGtleTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXN5bmMgdmVyaWZ5VXNlcklkQW5kUHJvY2VlZCgpIHtcbiAgICAgIGlmICghdGhpcy51c2VySWRJbnB1dCB8fCAhdGhpcy5yYXdEZXZpY2VJZCkgcmV0dXJuO1xuICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gJ+ato+WcqOmqjOivgeeUqOaIt0lELi4uJztcbiAgICAgIC8vIFVzZSByYXdEZXZpY2VJZCBmb3Igc2VydmVyIGNvbW11bmljYXRpb25cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2UudmVyaWZ5VXNlcklkQW5kUmVzdG9yZSh0aGlzLnJhd0RldmljZUlkLCB0aGlzLnVzZXJJZElucHV0KTtcblxuICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzICYmIHJlc3VsdC51c2VySW5mbykge1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn6aqM6K+B5oiQ5Yqf77yM5q2j5Zyo5oGi5aSN5pWw5o2uLi4uJztcbiAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVBY3RpdmF0aW9uU3VjY2VzcyhyZXN1bHQudXNlckluZm8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gcmVzdWx0LmVycm9yIHx8ICfnlKjmiLdJROmqjOivgeWksei0pe+8jOivt+mHjeivleOAgic7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFJlbmFtZWQgZnJvbSBnZW5lcmF0ZURldmljZUNvZGUgdG8gYmUgbW9yZSBkZXNjcmlwdGl2ZVxuICAgIHByb2Nlc3NEZXZpY2VJZGVudGlmaWVyKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGRldmljZS5nZXRTZXJpYWwoe1xuICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEuc2VyaWFsIHx8IGRhdGEuc2VyaWFsID09PSAnTkEnKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBnZXQgc2VyaWFsOiByZXR1cm5lZCBhbiBpbnZhbGlkIGlkZW50aWZpZXI6JywgZGF0YS5zZXJpYWwpO1xuICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAxLiBTdG9yZSB0aGUgcmF3IHN5c3RlbSBpZGVudGlmaWVyXG4gICAgICAgICAgICB0aGlzLnJhd0RldmljZUlkID0gZGF0YS5zZXJpYWw7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIDIuIFNhdmUgdGhlIHJhdyBpZGVudGlmaWVyIHRvIHN0b3JhZ2UgZm9yIHRoZSBhdXRoLWd1YXJkXG4gICAgICAgICAgICBzdG9yYWdlLnNldCh7XG4gICAgICAgICAgICAgIGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5ERVZJQ0VfSUQsXG4gICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnJhd0RldmljZUlkLFxuICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gMy4gUHJvY2VzcyB0aGUgaWRlbnRpZmllciBmb3IgbG9jYWwgYWN0aXZhdGlvbiBsb2dpY1xuICAgICAgICAgICAgICAgIGxldCBwcm9jZXNzZWRTZXJpYWwgPSB0aGlzLnJhd0RldmljZUlkLnN1YnN0cmluZygwLCAxMykucmVwbGFjZSgvXFwvL2csICcnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsZXR0ZXJUb051bWJlck1hcCA9IHsgJ0EnOiAxLCAnQic6IDIsICdDJzogMywgJ0QnOiA0LCAnRSc6IDUgfTtcbiAgICAgICAgICAgICAgICBsZXQgbnVtZXJpY1NlcmlhbCA9ICcnO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvY2Vzc2VkU2VyaWFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgY2hhciA9IHByb2Nlc3NlZFNlcmlhbFtpXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgaWYgKGNoYXIgPj0gJ0YnICYmIGNoYXIgPD0gJ1onKSBjaGFyID0gJ0UnO1xuICAgICAgICAgICAgICAgICAgaWYgKGxldHRlclRvTnVtYmVyTWFwW2NoYXJdKSBudW1lcmljU2VyaWFsICs9IGxldHRlclRvTnVtYmVyTWFwW2NoYXJdO1xuICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzTmFOKHBhcnNlSW50KGNoYXIsIDEwKSkpIG51bWVyaWNTZXJpYWwgKz0gY2hhcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG51bWVyaWNTZXJpYWwubGVuZ3RoIDwgMTIpIG51bWVyaWNTZXJpYWwgPSBudW1lcmljU2VyaWFsLnBhZEVuZCgxMiwgJzAnKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChudW1lcmljU2VyaWFsLmxlbmd0aCA+IDEyKSBudW1lcmljU2VyaWFsID0gbnVtZXJpY1NlcmlhbC5zdWJzdHJpbmcoMCwgMTIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChudW1lcmljU2VyaWFsLmxlbmd0aCAhPT0gMTIgfHwgIS9eXFxkezEyfSQvLnRlc3QobnVtZXJpY1NlcmlhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignUHJvY2Vzc2VkIHNlcmlhbCBpcyBub3QgYSAxMi1kaWdpdCBudW1iZXIuJyk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFpcnMgPSBudW1lcmljU2VyaWFsLm1hdGNoKC8uezEsMn0vZykgfHwgW107XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRQYWlycyA9IFtwYWlyc1swXSwgcGFpcnNbMl0sIHBhaXJzWzRdXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdW1BQiA9IHBhcnNlSW50KHNlbGVjdGVkUGFpcnNbMF1bMF0sIDEwKSArIHBhcnNlSW50KHNlbGVjdGVkUGFpcnNbMF1bMV0sIDEwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdW1FRiA9IHBhcnNlSW50KHNlbGVjdGVkUGFpcnNbMV1bMF0sIDEwKSArIHBhcnNlSW50KHNlbGVjdGVkUGFpcnNbMV1bMV0sIDEwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdW1JSiA9IHBhcnNlSW50KHNlbGVjdGVkUGFpcnNbMl1bMF0sIDEwKSArIHBhcnNlSW50KHNlbGVjdGVkUGFpcnNbMl1bMV0sIDEwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdW1CRkogPSBwYXJzZUludChzZWxlY3RlZFBhaXJzWzBdWzFdLCAxMCkgKyBwYXJzZUludChzZWxlY3RlZFBhaXJzWzFdWzFdLCAxMCkgKyBwYXJzZUludChzZWxlY3RlZFBhaXJzWzJdWzFdLCAxMCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gNC4gU2V0IHRoZSBkaXNwbGF5ZWQgY29kZVxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkRGV2aWNlQ29kZSA9IGAke1N0cmluZyhzdW1BQikucGFkU3RhcnQoMiwgJzAnKX0ke1N0cmluZyhzdW1FRikucGFkU3RhcnQoMiwgJzAnKX0ke1N0cmluZyhzdW1JSikucGFkU3RhcnQoMiwgJzAnKX0ke1N0cmluZyhzdW1CRkopLnBhZFN0YXJ0KDIsICcwJyl9MWA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JhdyBEZXZpY2UgSUQ6JywgdGhpcy5yYXdEZXZpY2VJZCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Rpc3BsYXllZCBEZXZpY2UgQ29kZTonLCB0aGlzLmRpc3BsYXllZERldmljZUNvZGUpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZhaWw6IChlcnIsIGNvZGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gc2F2ZSByYXcgZGV2aWNlIElEIHRvIHN0b3JhZ2UuIENvZGU6ICR7Y29kZX0sIEVycm9yOiAke2Vycn1gKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiAoZXJyLCBjb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZ2V0IHNlcmlhbC4gQ29kZTogJHtjb2RlfSwgRXJyb3I6ICR7ZXJyfWApO1xuICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBhc3luYyBhY3RpdmF0ZSgpIHtcbiAgICAgIGlmICghdGhpcy5hY3RpdmF0aW9uQ29kZSB8fCB0aGlzLmFjdGl2YXRpb25Db2RlLmxlbmd0aCAhPT0gMTEpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gXCLmv4DmtLvnoIHplb/luqbkuI3mraPnoa7vvIzlupTkuLoxMeS9jVwiO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFN0ZXAgMTogTG9jYWwgdmFsaWRhdGlvbiBhZ2FpbnN0IHRoZSBwcm9jZXNzZWQvZGlzcGxheWVkIGNvZGVcbiAgICAgIGNvbnN0IGFjID0gdGhpcy5hY3RpdmF0aW9uQ29kZTtcbiAgICAgIGNvbnN0IEdfdmFsID0gcGFyc2VJbnQoYWNbNl0sIDEwKTtcbiAgICAgIGNvbnN0IEtfdmFsID0gcGFyc2VJbnQoYWNbMTBdLCAxMCk7XG4gICAgICBjb25zdCBISV9tb2RpZmllZF9udW0gPSBwYXJzZUludChgJHthY1s3XX0ke2FjWzhdfWAsIDEwKSAtIEdfdmFsIC0gS192YWw7XG4gICAgICBpZiAoSElfbW9kaWZpZWRfbnVtIDwgMCB8fCBISV9tb2RpZmllZF9udW0gPiA5OSkge1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSBcIua/gOa0u+Wksei0pTogSEnlh4/ms5Xnu5Pmnpzml6DmlYhcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgSElfbW9kaWZpZWRfc3RyID0gU3RyaW5nKEhJX21vZGlmaWVkX251bSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgIGNvbnN0IEFCX3ZhbCA9IHBhcnNlSW50KGAke2FjWzBdfSR7YWNbMV19YCwgMTApO1xuICAgICAgY29uc3QgQ0RfdmFsID0gcGFyc2VJbnQoYCR7YWNbMl19JHthY1szXX1gLCAxMCk7XG4gICAgICBjb25zdCBFRl92YWwgPSBwYXJzZUludChgJHthY1s0XX0ke2FjWzVdfWAsIDEwKTtcbiAgICAgIGxldCBBQl9kaXZpZGVkLCBDRF9kaXZpZGVkLCBFRl9kaXZpZGVkO1xuICAgICAgaWYgKEdfdmFsID09PSAwKSB7XG4gICAgICAgIEFCX2RpdmlkZWQgPSBBQl92YWw7IENEX2RpdmlkZWQgPSBDRF92YWw7IEVGX2RpdmlkZWQgPSBFRl92YWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBBQl9kaXZpZGVkID0gTWF0aC5mbG9vcihBQl92YWwgLyBHX3ZhbCk7XG4gICAgICAgIENEX2RpdmlkZWQgPSBNYXRoLmZsb29yKENEX3ZhbCAvIEdfdmFsKTtcbiAgICAgICAgRUZfZGl2aWRlZCA9IE1hdGguZmxvb3IoRUZfdmFsIC8gR192YWwpO1xuICAgICAgfVxuICAgICAgY29uc3QgZ3JvdXBBQkNERUZISUogPSBgJHtTdHJpbmcoQUJfZGl2aWRlZCkucGFkU3RhcnQoMiwgJzAnKX0ke1N0cmluZyhDRF9kaXZpZGVkKS5wYWRTdGFydCgyLCAnMCcpfSR7U3RyaW5nKEVGX2RpdmlkZWQpLnBhZFN0YXJ0KDIsICcwJyl9JHtISV9tb2RpZmllZF9zdHJ9JHthY1s5XX1gO1xuICAgICAgXG4gICAgICAvLyBDb21wYXJlIGFnYWluc3QgdGhlIGRpc3BsYXllZC9wcm9jZXNzZWQgY29kZVxuICAgICAgaWYgKGdyb3VwQUJDREVGSElKICE9PSB0aGlzLmRpc3BsYXllZERldmljZUNvZGUpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gXCLmv4DmtLvlpLHotKU6IOiuvuWkh+eggeS4jeWMuemFjVwiO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICBsZXQgY3VycmVudE1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpO1xuICAgICAgaWYgKGN1cnJlbnRNaW51dGVzIDw9IDkpIGN1cnJlbnRNaW51dGVzICs9IDYwO1xuICAgICAgY29uc3QgR0pfdmFsdWUgPSBwYXJzZUludChgJHthY1s2XX0ke2FjWzldfWAsIDEwKTtcbiAgICAgIGNvbnN0IGRpZmYgPSBjdXJyZW50TWludXRlcyAtIEdKX3ZhbHVlO1xuXG4gICAgICBpZiAoZGlmZiA+IDEwIHx8IGRpZmYgPCAwKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IGDmv4DmtLvlpLHotKU6IOaXtumXtOagoemqjOS4jemAmui/hyAo5beu5YC8OiAke2RpZmZ9KWA7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gU3RlcCAyOiBTZXJ2ZXIgUmVnaXN0cmF0aW9uIHVzaW5nIHRoZSByYXcgaWRlbnRpZmllclxuICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gXCLmnKzlnLDmoKHpqozmiJDlip/vvIzmraPlnKjms6jlhozorr7lpIcuLi5cIjtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFVzZSByYXdEZXZpY2VJZCBmb3Igc2VydmVyIGNvbW11bmljYXRpb25cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5yZWdpc3RlckFuZEdldFVzZXJJZCh0aGlzLnJhd0RldmljZUlkKTtcblxuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MgJiYgKHJlc3VsdC51c2VySW5mbz8uaWQgfHwgcmVzdWx0LnVzZXJJbmZvPy51c2VyX251bWJlcikpIHtcbiAgICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSBcIua/gOa0u+aIkOWKn++8geW3suiOt+WPlueUqOaIt0lE44CCXCI7XG4gICAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVBY3RpdmF0aW9uU3VjY2VzcyhyZXN1bHQudXNlckluZm8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChyZXN1bHQucmVhc29uID09PSAndXNlcl9pZF92ZXJpZmljYXRpb25fcmVxdWlyZWQnKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IHJlc3VsdC5tZXNzYWdlIHx8ICfmraTnlKjmiLflkI3lt7LlrZjlnKjvvIzor7fovpPlhaXnlKjmiLdJROS7pemqjOivgeOAgic7XG4gICAgICAgICAgICAgIHRoaXMudWlTdGF0ZSA9ICdlbnRlcl91c2VyX2lkJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSBcIua/gOa0u+Wksei0pTogXCIgKyAocmVzdWx0LmVycm9yIHx8IFwi5peg5rOV5LuO5pyN5Yqh5Zmo6I635Y+W55So5oi35L+h5oGvXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSBcIua/gOa0u+Wksei0pTog572R57uc6K+35rGC6ZSZ6K+v77yM6K+36YeN6K+V44CCXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD4iXSwibmFtZXMiOlsiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX3N5c3RlbTIiLCJfc3lzdGVtMyIsIl9zeXN0ZW00IiwiX2NvbmZpZyIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJvd25LZXlzIiwiciIsInQiLCJPYmplY3QiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsInZhbHVlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiQXBpU2VydmljZSIsImNvbnN0cnVjdG9yIiwiYmFzZVVybCIsIkNPTkZJRyIsIlNFUlZFUiIsIkJBU0VfVVJMIiwiYmFzZUhlYWRlcnMiLCJyZXF1ZXN0IiwiYWN0aW9uIiwiZGF0YSIsInVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXIiLCJyZXNwb25zZVR5cGUiLCJKU09OIiwic3RyaW5naWZ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInJlc3BvbnNlRGF0YSIsImNvZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImZhaWwiLCJnZXRSYW5raW5ncyIsImxpbWl0IiwicmVzdWx0IiwicmFua2luZ3MiLCJtZXNzYWdlIiwic3luY0NsaWNrcyIsInVzZXJJZCIsImNsaWNrQ291bnQiLCJ1c2VyX2lkIiwiY2xpY2tfY291bnQiLCJjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkiLCJwZXROYW1lIiwicGV0X25hbWUiLCJpc0F2YWlsYWJsZSIsInNldFBldE5hbWUiLCJuZXdOYW1lIiwibmV3X25hbWUiLCJjaGVja0RldmljZVJlZ2lzdHJhdGlvbiIsImRldmljZUlkIiwiZGV2aWNlX2lkIiwibG9nIiwicmVnaXN0ZXJBbmRHZXRVc2VySWQiLCJ1c2VySW5mbyIsInZlcmlmeVVzZXJJZEFuZFJlc3RvcmUiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJBUFAiLCJOQU1FIiwiVkVSU0lPTiIsIk1BWF9DTElDS1NfUEVSX0JBVENIIiwiU1lOQ19JTlRFUlZBTCIsIlJBTktfTElNSVQiLCJTVE9SQUdFX0tFWVMiLCJERVZJQ0VfSUQiLCJVU0VSX0lORk8iLCJQRU5ESU5HX0NMSUNLUyIsIkxBU1RfU1lOQ19USU1FIiwiVE9UQUxfQ0xJQ0tTIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl9hcGlTZXJ2aWNlIiwidGltZSIsInJhd0RldmljZUlkIiwiZGlzcGxheWVkRGV2aWNlQ29kZSIsImFjdGl2YXRpb25Db2RlIiwidXNlcklkSW5wdXQiLCJzdGF0dXNNZXNzYWdlIiwidWlTdGF0ZSIsIm9uSW5pdCIsInVwZGF0ZVRpbWUiLCJzZXRJbnRlcnZhbCIsImdlbmVyYXRlZCIsInByb2Nlc3NEZXZpY2VJZGVudGlmaWVyIiwiYXR0ZW1wdEF1dG9BY3RpdmF0aW9uIiwiaGFuZGxlQWN0aXZhdGlvblN1Y2Nlc3MiLCJzdG9yYWdlIiwic2V0Iiwia2V5IiwiSVNfTE9DQUxMWV9BQ1RJVkFURUQiLCJ1c2VySW5mb1RvU2F2ZSIsImlkIiwidXNlcl9udW1iZXIiLCJ0b3RhbF9jbGlja3MiLCJzZXRUaW1lb3V0Iiwicm91dGVyIiwicmVwbGFjZSIsInVyaSIsImlzX3JlZ2lzdGVyZWQiLCJhdXRvX2FjdGl2YXRpb25fY291bnQiLCJyZWFzb24iLCJjYW5fYXV0b19hY3RpdmF0ZSIsIm5vdyIsIkRhdGUiLCJob3VycyIsImdldEhvdXJzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZ29CYWNrIiwiYmFjayIsImhhbmRsZUtleUNsaWNrIiwiZGV0YWlsIiwic2xpY2UiLCJ2ZXJpZnlVc2VySWRBbmRQcm9jZWVkIiwiYWN0aXZhdGUiLCJkZXZpY2UiLCJnZXRTZXJpYWwiLCJzZXJpYWwiLCJwcm9jZXNzZWRTZXJpYWwiLCJzdWJzdHJpbmciLCJsZXR0ZXJUb051bWJlck1hcCIsIm51bWVyaWNTZXJpYWwiLCJjaGFyIiwidG9VcHBlckNhc2UiLCJpc05hTiIsInBhcnNlSW50IiwicGFkRW5kIiwidGVzdCIsInBhaXJzIiwibWF0Y2giLCJzZWxlY3RlZFBhaXJzIiwic3VtQUIiLCJzdW1FRiIsInN1bUlKIiwic3VtQkZKIiwiZXJyIiwiYWMiLCJHX3ZhbCIsIktfdmFsIiwiSElfbW9kaWZpZWRfbnVtIiwiSElfbW9kaWZpZWRfc3RyIiwiQUJfdmFsIiwiQ0RfdmFsIiwiRUZfdmFsIiwiQUJfZGl2aWRlZCIsIkNEX2RpdmlkZWQiLCJFRl9kaXZpZGVkIiwiTWF0aCIsImZsb29yIiwiZ3JvdXBBQkNERUZISUoiLCJjdXJyZW50TWludXRlcyIsIkdKX3ZhbHVlIiwiZGlmZiIsIl9yZXN1bHQkdXNlckluZm8iLCJfcmVzdWx0JHVzZXJJbmZvMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQ0EsSUFBQUEsVUFBQUMsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUMsV0FBQUYsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUUsV0FBQUgsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUcsV0FBQUosdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUksVUFBQUMsb0JBQUE7d0JBQXFDLFNBQUFOLHVCQUFBTyxDQUFBOzRCQUFBLE9BQUFBLEtBQUFBLEVBQUFDLFVBQUEsR0FBQUQsSUFBQTtnQ0FBQUUsU0FBQUY7NEJBQUE7d0JBQUE7d0JBQUEsU0FBQUcsUUFBQUgsQ0FBQSxFQUFBSSxDQUFBOzRCQUFBLElBQUFDLElBQUFDLE9BQUFDLElBQUEsQ0FBQVA7NEJBQUEsSUFBQU0sT0FBQUUscUJBQUE7Z0NBQUEsSUFBQUMsSUFBQUgsT0FBQUUscUJBQUEsQ0FB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