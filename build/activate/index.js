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
                                this.statusMessage = '正在保存激活信息...';
                                try {
                                    await new Promise((resolve, reject)=>{
                                        _system3.default.set({
                                            key: _config.CONFIG.STORAGE_KEYS.IS_LOCALLY_ACTIVATED,
                                            value: 'true',
                                            success: resolve,
                                            fail: (err, code)=>reject(`Failed to save activation status: ${err} (${code})`)
                                        });
                                    });
                                    const userInfoToSave = {
                                        id: userInfo.id || userInfo.user_number,
                                        user_number: userInfo.user_number,
                                        pet_name: userInfo.pet_name,
                                        total_clicks: userInfo.total_clicks || 0
                                    };
                                    await new Promise((resolve, reject)=>{
                                        _system3.default.set({
                                            key: _config.CONFIG.STORAGE_KEYS.USER_INFO,
                                            value: JSON.stringify(userInfoToSave),
                                            success: resolve,
                                            fail: (err, code)=>reject(`Failed to save user info: ${err} (${code})`)
                                        });
                                    });
                                    this.statusMessage = '激活成功！正在跳转...';
                                    setTimeout(()=>{
                                        _system.default.replace({
                                            uri: 'main'
                                        });
                                    }, 1000);
                                } catch (e) {
                                    console.error('Failed to save activation data: ' + e);
                                    this.statusMessage = '激活失败：无法写入本地数据。';
                                }
                            },
                            async attemptAutoActivation () {
                                if (!this.rawDeviceId) return;
                                this.statusMessage = '正在检查设备注册信息...';
                                const result = await _apiService.default.checkDeviceRegistration(this.rawDeviceId);
                                if (result && result.is_registered) if (result.can_auto_activate) {
                                    this.statusMessage = `自动激活成功！正在恢复数据... (${(result.auto_activation_count || 0) + 1}/5)`;
                                    await this.handleActivationSuccess(result.userInfo);
                                } else this.statusMessage = result.message || '自动激活次数已达上限，请手动激活。';
                                else this.statusMessage = '';
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
                                try {
                                    const result = await _apiService.default.verifyUserIdAndRestore(this.rawDeviceId, this.userIdInput);
                                    if (result && result.success && result.userInfo) {
                                        this.statusMessage = '验证成功，正在恢复数据...';
                                        await this.handleActivationSuccess(result.userInfo);
                                    } else this.statusMessage = "验证失败: " + (result ? result.message : "网络或未知错误");
                                } catch (e) {
                                    this.statusMessage = '验证失败：网络或系统错误。';
                                    console.error('Error during user ID verification: ' + e);
                                }
                            },
                            processDeviceIdentifier () {
                                return new Promise((resolve)=>{
                                    _system2.default.getSerial({
                                        success: (data)=>{
                                            let serialForProcessing = data ? data.serial : null;
                                            if ('NA' === serialForProcessing) {
                                                console.warn("Device serial is 'NA'. Using a fixed test serial for activation.");
                                                serialForProcessing = 'TESTVM-SN-0123456789';
                                            }
                                            if (!serialForProcessing) {
                                                console.error('Failed to get a valid serial for processing.');
                                                resolve(false);
                                                return;
                                            }
                                            this.rawDeviceId = serialForProcessing;
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
                                                    console.log('Using Device ID for activation:', this.rawDeviceId);
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
                                    const result = await _apiService.default.registerAndGetUserId(this.rawDeviceId);
                                    if (result && result.success && result.userInfo) {
                                        this.statusMessage = "激活成功！已获取用户ID。";
                                        await this.handleActivationSuccess(result.userInfo);
                                    } else this.statusMessage = "激活失败: " + (result ? result.message : "网络或未知错误");
                                } catch (e) {
                                    this.statusMessage = "激活失败: 网络请求错误，请重试。";
                                    console.error('Error during activation: ' + e);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZhdGVcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9hY3RpdmF0ZS9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcGktc2VydmljZS5qc1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnQHN5c3RlbS5mZXRjaCc7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xyXG5pbXBvcnQgcHJvbXB0IGZyb20gJ0BzeXN0ZW0ucHJvbXB0JztcclxuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25maWcuanMnO1xyXG5cclxuY2xhc3MgQXBpU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyDkuK3ovazmnI3liqHlmajlnLDlnYAgLSDku44gY29uZmlnLmpzIOivu+WPllxyXG4gICAgdGhpcy5iYXNlVXJsID0gQ09ORklHLlNFUlZFUi5CQVNFX1VSTDtcclxuICAgIHRoaXMuYmFzZUhlYWRlcnMgPSB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDpgJrnlKjor7fmsYLmlrnms5UgLSDpgJrov4fkuK3ovazmnI3liqHlmajovazlj5FcclxuICBhc3luYyByZXF1ZXN0KGFjdGlvbiwgZGF0YSA9IHt9KSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9L2FwaWA7XHJcbiAgICBcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIHVybCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcjogdGhpcy5iYXNlSGVhZGVycyxcclxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbidcclxuICAgIH07XHJcblxyXG4gICAgb3B0aW9ucy5kYXRhID0gSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb24sIC4uLmRhdGEgfSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZmV0Y2guZmV0Y2goe1xyXG4gICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xyXG5cclxuICAgICAgICAgIGlmIChyZXNwb25zZS5jb2RlID49IDIwMCAmJiByZXNwb25zZS5jb2RlIDwgMzAwKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2VEYXRhKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgSFRUUCBFcnJvcjogJHtyZXNwb25zZS5jb2RlfWAsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgSFRUUCAke3Jlc3BvbnNlLmNvZGV9OiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlRGF0YSl9YCkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiAoZXJyb3IsIGNvZGUpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFJlcXVlc3QgRmFpbGVkOiAke2NvZGV9YCwgZXJyb3IpO1xyXG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgUmVxdWVzdCBmYWlsZWQ6ICR7ZXJyb3IuZGF0YX1gKSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8g6I635Y+W5o6S6KGM5qacXHJcbiAgYXN5bmMgZ2V0UmFua2luZ3MobGltaXQgPSAxMCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdnZXRfcmFua2luZ3MnLCB7XHJcbiAgICAgICAgbGltaXQ6IGxpbWl0XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICByYW5raW5nczogcmVzdWx0LnJhbmtpbmdzIHx8IFtdXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaOkuihjOamnOWksei0pTonLCBlcnJvcilcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICByYW5raW5nczogW10sXHJcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5LiK5oql54K55Ye75qyh5pWwXHJcbiAgYXN5bmMgc3luY0NsaWNrcyh1c2VySWQsIGNsaWNrQ291bnQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHRoaXMucmVxdWVzdCgnc3luY19jbGlja3MnLCB7XHJcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxyXG4gICAgICAgIGNsaWNrX2NvdW50OiBjbGlja0NvdW50XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5LiK5oql54K55Ye75qyh5pWw5aSx6LSlOicsIGVycm9yKVxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOajgOafpeWuoOeJqeWQjeaYr+WQpuWPr+eUqFxyXG4gIGFzeW5jIGNoZWNrUGV0TmFtZUF2YWlsYWJpbGl0eShwZXROYW1lKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2NoZWNrX3BldF9uYW1lJywge1xyXG4gICAgICAgIHBldF9uYW1lOiBwZXROYW1lXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCAuLi5yZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+ajgOafpeWuoOeJqeWQjeWPr+eUqOaAp+aXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSwgaXNBdmFpbGFibGU6IGZhbHNlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDkv67mlLnlrqDnianlkI1cclxuICBhc3luYyBzZXRQZXROYW1lKHVzZXJJZCwgbmV3TmFtZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdzZXRfcGV0X25hbWUnLCB7XHJcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxyXG4gICAgICAgIG5ld19uYW1lOiBuZXdOYW1lXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5L+u5pS55a6g54mp5ZCN5aSx6LSlOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDpooTmv4DmtLvmo4Dmn6VcclxuICBhc3luYyBjaGVja0RldmljZVJlZ2lzdHJhdGlvbihkZXZpY2VJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdjaGVja19yZWdpc3RyYXRpb24nLCB7XHJcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coJ+mihOa/gOa0u+ajgOafpeaIkOWKnzonLCByZXN1bHQpO1xyXG4gICAgICAvLyDnm7TmjqXov5Tlm57mnI3liqHlmajnmoTljp/lp4vlk43lupTvvIxVSeWxguacn+acm+eahOaYr+aJgeW5s+e7k+aehFxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign6aKE5r+A5rS75qOA5p+l5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcclxuICAgICAgLy8g6L+U5Zue5LiA5Liq5YW85a6555qE6ZSZ6K+v5a+56LGh77yM6YG/5YWNVUnlsYLltKnmuoNcclxuICAgICAgcmV0dXJuIHsgaXNfcmVnaXN0ZXJlZDogZmFsc2UsIGNhbl9hdXRvX2FjdGl2YXRlOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOazqOWGjOiuvuWkh+W5tuiOt+WPlueUqOaIt0lEXHJcbiAgYXN5bmMgcmVnaXN0ZXJBbmRHZXRVc2VySWQoZGV2aWNlSWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIFBhc3MgdGhlIHNlcnZlciByZXNwb25zZSBkaXJlY3RseSB0byB0aGUgVUkgbGF5ZXJcclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucmVxdWVzdCgncmVnaXN0ZXJfZGV2aWNlX2FuZF9nZXRfaWQnLCB7XHJcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+azqOWGjOaIluiOt+WPlueUqOaIt0lE5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcclxuICAgICAgLy8gUmV0dXJuIGEgY29tcGF0aWJsZSBlcnJvciBvYmplY3RcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOmqjOivgeeUqOaIt0lE5bm25oGi5aSN5pWw5o2uXHJcbiAgYXN5bmMgdmVyaWZ5VXNlcklkQW5kUmVzdG9yZShkZXZpY2VJZCwgdXNlcklkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBQYXNzIHRoZSBzZXJ2ZXIgcmVzcG9uc2UgZGlyZWN0bHkgdG8gdGhlIFVJIGxheWVyXHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3QoJ3ZlcmlmeV91c2VyX2lkX2FuZF9yZXN0b3JlJywge1xyXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWQsXHJcbiAgICAgICAgdXNlcl9pZDogdXNlcklkXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign6aqM6K+B55So5oi3SUTml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xyXG4gICAgICAvLyBSZXR1cm4gYSBjb21wYXRpYmxlIGVycm9yIG9iamVjdFxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwaVNlcnZpY2UoKVxyXG4iLCIvLyBjb25maWcuanNcclxuZXhwb3J0IGNvbnN0IENPTkZJRyA9IHtcclxuICAvLyDkuK3ovazmnI3liqHlmajphY3nva5cclxuICBTRVJWRVI6IHtcclxuICAgIEJBU0VfVVJMOiAnaHR0cDovLzEwMy4yMDUuMjUzLjg3OjIyMjA3J1xyXG4gIH0sXHJcbiAgXHJcbiAgLy8g5rOo5oSP77yaVVJMIOWJjee8gOWcqCBhcGktc2VydmljZS5qcyDkuK3noaznvJbnoIHkuoZcclxuICAvLyDov5nph4zkuI3lho3pnIDopoHphY3nva5cclxuICBcclxuICAvLyDlupTnlKjphY3nva5cclxuICBBUFA6IHtcclxuICAgIE5BTUU6ICdCYW5kUGV0JyxcclxuICAgIFZFUlNJT046ICcwLjMuNSBBbHBoYScsXHJcbiAgICBNQVhfQ0xJQ0tTX1BFUl9CQVRDSDogNTAsXHJcbiAgICBTWU5DX0lOVEVSVkFMOiAzMDAwMDAsXHJcbiAgICBSQU5LX0xJTUlUOiAxMFxyXG4gIH0sXHJcbiAgXHJcbiAgLy8g5a2Y5YKo6ZSu5ZCNXHJcbiAgU1RPUkFHRV9LRVlTOiB7XHJcbiAgICBERVZJQ0VfSUQ6ICdkZXZpY2VfaWQnLFxyXG4gICAgSVNfTE9DQUxMWV9BQ1RJVkFURUQ6ICdpc19sb2NhbGx5X2FjdGl2YXRlZCcsXHJcbiAgICBVU0VSX0lORk86ICd1c2VyX2luZm8nLFxyXG4gICAgUEVORElOR19DTElDS1M6ICdwZW5kaW5nX2NsaWNrcycsXHJcbiAgICBMQVNUX1NZTkNfVElNRTogJ2xhc3Rfc3luY190aW1lJyxcclxuICAgIFRPVEFMX0NMSUNLUzogJ3RvdGFsX2NsaWNrcydcclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNi44XCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjYuOFwiOyIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicGFnZS1jb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyXCI+XHJcbiAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi9iYWNrLnBuZ1wiIGNsYXNzPVwicGFnZS1oZWFkZXItYmFjay1idXR0b25cIiBvbmNsaWNrPVwiZ29CYWNrXCI+PC9pbWFnZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRpdGxlLXRpbWVcIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicGFnZS10aW1lLWRpc3BsYXlcIj57eyB0aW1lIH19PC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLWhlYWRlci10aXRsZVwiPnt7IHVpU3RhdGUgPT09ICdlbnRlcl91c2VyX2lkJyA/ICfpqozor4HnlKjmiLdJRCcgOiAn5r+A5rS7JyB9fTwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPHNjcm9sbCBjbGFzcz1cImNvbnRlbnQtc2Nyb2xsLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1jb2RlLXNlY3Rpb25cIj5cclxuICAgICAgICAgIDx0ZXh0PuaCqOeahOiuvuWkh+eggeS4ujwvdGV4dD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2RlLWJveFwiPlxyXG4gICAgICAgICAgICA8IS0tIERpc3BsYXkgdGhlIHByb2Nlc3NlZCBjb2RlIC0tPlxyXG4gICAgICAgICAgICA8dGV4dD57eyBkaXNwbGF5ZWREZXZpY2VDb2RlIH19PC90ZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwhLS0gQWN0aXZhdGlvbiBDb2RlIElucHV0IFN0YXRlIC0tPlxyXG4gICAgICAgIDxkaXYgaWY9XCJ7eyB1aVN0YXRlID09PSAnZW50ZXJfYWN0aXZhdGlvbl9jb2RlJyB9fVwiIGNsYXNzPVwiYWN0aXZhdGlvbi1jb2RlLXNlY3Rpb25cIj5cclxuICAgICAgICAgIDx0ZXh0Pua/gOa0u+eggTwvdGV4dD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgPHRleHQ+e3sgYWN0aXZhdGlvbkNvZGUgfHwgJ+eCueWHu+i+k+WFpScgfX08L3RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPCEtLSBVc2VyIElEIElucHV0IFN0YXRlIC0tPlxyXG4gICAgICAgIDxkaXYgaWY9XCJ7eyB1aVN0YXRlID09PSAnZW50ZXJfdXNlcl9pZCcgfX1cIiBjbGFzcz1cImFjdGl2YXRpb24tY29kZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICA8dGV4dD7nlKjmiLdJRDwvdGV4dD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgPHRleHQ+e3sgdXNlcklkSW5wdXQgfHwgJ+eCueWHu+i+k+WFpeeUqOaIt0lEJyB9fTwvdGV4dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgICAgPCEtLSBUOSBLZXlib2FyZCAodGVtcGxhdGUgcmVtYWlucyB0aGUgc2FtZSkgLS0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidDkta2V5Ym9hcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleWJvYXJkLXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwiaGFuZGxlS2V5Q2xpY2soe2RldGFpbDoge3ZhbHVlOiAnMSd9fSlcIj5cclxuICAgICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vMS5wbmdcIiBjbGFzcz1cImtleS1pY29uXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCIgb25jbGljaz1cImhhbmRsZUtleUNsaWNrKHtkZXRhaWw6IHt2YWx1ZTogJzInfX0pXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uLzIucG5nXCIgY2xhc3M9XCJrZXktaWNvblwiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJoYW5kbGVLZXlDbGljayh7ZGV0YWlsOiB7dmFsdWU6ICczJ319KVwiPlxyXG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi8zLnBuZ1wiIGNsYXNzPVwia2V5LWljb25cIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleWJvYXJkLXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwiaGFuZGxlS2V5Q2xpY2soe2RldGFpbDoge3ZhbHVlOiAnNCd9fSlcIj5cclxuICAgICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vNC5wbmdcIiBjbGFzcz1cImtleS1pY29uXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCIgb25jbGljaz1cImhhbmRsZUtleUNsaWNrKHtkZXRhaWw6IHt2YWx1ZTogJzUnfX0pXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uLzUucG5nXCIgY2xhc3M9XCJrZXktaWNvblwiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJoYW5kbGVLZXlDbGljayh7ZGV0YWlsOiB7dmFsdWU6ICc2J319KVwiPlxyXG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi82LnBuZ1wiIGNsYXNzPVwia2V5LWljb25cIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleWJvYXJkLXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwiaGFuZGxlS2V5Q2xpY2soe2RldGFpbDoge3ZhbHVlOiAnNyd9fSlcIj5cclxuICAgICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vNy5wbmdcIiBjbGFzcz1cImtleS1pY29uXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCIgb25jbGljaz1cImhhbmRsZUtleUNsaWNrKHtkZXRhaWw6IHt2YWx1ZTogJzgnfX0pXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uLzgucG5nXCIgY2xhc3M9XCJrZXktaWNvblwiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJoYW5kbGVLZXlDbGljayh7ZGV0YWlsOiB7dmFsdWU6ICc5J319KVwiPlxyXG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi85LnBuZ1wiIGNsYXNzPVwia2V5LWljb25cIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleWJvYXJkLXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwiaGFuZGxlS2V5Q2xpY2soe2RldGFpbDoge3ZhbHVlOiAn4oyrJ319KVwiPlxyXG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi9kZWwucG5nXCIgY2xhc3M9XCJrZXktaWNvblwiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJoYW5kbGVLZXlDbGljayh7ZGV0YWlsOiB7dmFsdWU6ICcwJ319KVwiPlxyXG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi8wLnBuZ1wiIGNsYXNzPVwia2V5LWljb25cIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwiaGFuZGxlS2V5Q2xpY2soe2RldGFpbDoge3ZhbHVlOiAn4pyTJ319KVwiPlxyXG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi9TbWFsbENoZWNrLnBuZ1wiIGNsYXNzPVwia2V5LWljb25cIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2Nyb2xsPlxyXG5cclxuICAgIDx0ZXh0IGNsYXNzPVwic3RhdHVzLXRleHRcIj57eyBzdGF0dXNNZXNzYWdlIH19PC90ZXh0PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4gIC8qIFN0eWxlcyByZW1haW4gdW5jaGFuZ2VkICovXHJcbiAgLnBhZ2UtY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAucGFnZS1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLnBhZ2UtdGltZS1kaXNwbGF5IHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgLnBhZ2UtaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG4gIC5wYWdlLWhlYWRlci1iYWNrLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLnBhZ2UtaGVhZGVyLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gIH1cclxuICAuaGVhZGVyLXRpdGxlLXRpbWUge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuICAuY29udGVudC1zY3JvbGwtY29udGFpbmVyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnBhZ2UtY29udGVudCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgfVxyXG4gIC5kZXZpY2UtY29kZS1zZWN0aW9uLCAuYWN0aXZhdGlvbi1jb2RlLXNlY3Rpb24ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICAuZGV2aWNlLWNvZGUtc2VjdGlvbiB0ZXh0LCAuYWN0aXZhdGlvbi1jb2RlLXNlY3Rpb24gdGV4dCB7IGNvbG9yOiAjQUFBOyBmb250LXNpemU6IDI4cHg7IG1hcmdpbi1ib3R0b206IDEwcHg7IH1cclxuICAuY29kZS1ib3gsIC5pbnB1dC1ib3gge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogLTFweCAxMHB4O1xyXG4gIH1cclxuICAuY29kZS1ib3ggdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxuICAuaW5wdXQtYm94IHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5pbnB1dC1ib3ggdGV4dCB7XHJcbiAgICAgIGNvbG9yOiAjRkZGO1xyXG4gIH1cclxuICAuYWN0aW9ucyB7IHdpZHRoOiAxMDAlOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgbWFyZ2luLXRvcDogLTFweDsgfVxyXG4gIC5zdGF0dXMtdGV4dCB7IGNvbG9yOiAjRkYzQjMwOyBmb250LXNpemU6IDI0cHg7IG1hcmdpbi10b3A6IDIwcHg7IH1cclxuICAudDkta2V5Ym9hcmQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gIH1cclxuICAua2V5Ym9hcmQtcm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgfVxyXG4gIC5rZXkge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyYzJlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbjogLTIwcHggOHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAua2V5LWljb24ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcclxuICBpbXBvcnQgZGV2aWNlIGZyb20gJ0BzeXN0ZW0uZGV2aWNlJztcclxuICBpbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xyXG4gIGltcG9ydCBwcm9tcHQgZnJvbSAnQHN5c3RlbS5wcm9tcHQnO1xyXG4gIGltcG9ydCBBcGlTZXJ2aWNlIGZyb20gJy4uL2NvbW1vbi9qcy9hcGktc2VydmljZS5qcyc7XHJcbiAgaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi4vY29tbW9uL2pzL2NvbmZpZy5qcyc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGltZTogJzAwOjAwJyxcclxuICAgICAgcmF3RGV2aWNlSWQ6IG51bGwsIC8vIFRvIHN0b3JlIHRoZSByYXcgc3lzdGVtIGlkZW50aWZpZXJcclxuICAgICAgZGlzcGxheWVkRGV2aWNlQ29kZTogJ+ato+WcqOeUn+aIkC4uLicsIC8vIFRvIHN0b3JlIHRoZSBwcm9jZXNzZWQgY29kZSBmb3IgZGlzcGxheSBhbmQgbG9jYWwgdmFsaWRhdGlvblxyXG4gICAgICBhY3RpdmF0aW9uQ29kZTogJycsXHJcbiAgICAgIHVzZXJJZElucHV0OiAnJyxcclxuICAgICAgc3RhdHVzTWVzc2FnZTogJycsXHJcbiAgICAgIHVpU3RhdGU6ICdlbnRlcl9hY3RpdmF0aW9uX2NvZGUnLFxyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBvbkluaXQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlVGltZSgpO1xyXG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVRpbWUsIDUwMDApO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgZ2VuZXJhdGVkID0gYXdhaXQgdGhpcy5wcm9jZXNzRGV2aWNlSWRlbnRpZmllcigpO1xyXG4gICAgICBpZiAoZ2VuZXJhdGVkKSB7XHJcbiAgICAgICAgdGhpcy5hdHRlbXB0QXV0b0FjdGl2YXRpb24oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXllZERldmljZUNvZGUgPSAn6I635Y+W5aSx6LSlJztcclxuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn5peg5rOV6I635Y+W6K6+5aSH5qCH6K+G77yM6K+36YeN5ZCv5bqU55So44CCJztcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBOZXcgY2VudHJhbGl6ZWQgc3VjY2VzcyBoYW5kbGVyXHJcbiAgICBhc3luYyBoYW5kbGVBY3RpdmF0aW9uU3VjY2Vzcyh1c2VySW5mbykge1xyXG4gICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn5q2j5Zyo5L+d5a2Y5r+A5rS75L+h5oGvLi4uJztcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBQcm9taXNpZnkgdGhlIGZpcnN0IHN0b3JhZ2Uuc2V0IGNhbGxcclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICBzdG9yYWdlLnNldCh7XHJcbiAgICAgICAgICAgIGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5JU19MT0NBTExZX0FDVElWQVRFRCxcclxuICAgICAgICAgICAgdmFsdWU6ICd0cnVlJyxcclxuICAgICAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcclxuICAgICAgICAgICAgZmFpbDogKGVyciwgY29kZSkgPT4gcmVqZWN0KGBGYWlsZWQgdG8gc2F2ZSBhY3RpdmF0aW9uIHN0YXR1czogJHtlcnJ9ICgke2NvZGV9KWApXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVGhlIHJhd0RldmljZUlkIGlzIGFscmVhZHkgc2F2ZWQgaW4gc3RvcmFnZSBmcm9tIHByb2Nlc3NEZXZpY2VJZGVudGlmaWVyXHJcbiAgICAgICAgY29uc3QgdXNlckluZm9Ub1NhdmUgPSB7XHJcbiAgICAgICAgICBpZDogdXNlckluZm8uaWQgfHwgdXNlckluZm8udXNlcl9udW1iZXIsXHJcbiAgICAgICAgICB1c2VyX251bWJlcjogdXNlckluZm8udXNlcl9udW1iZXIsXHJcbiAgICAgICAgICBwZXRfbmFtZTogdXNlckluZm8ucGV0X25hbWUsXHJcbiAgICAgICAgICB0b3RhbF9jbGlja3M6IHVzZXJJbmZvLnRvdGFsX2NsaWNrcyB8fCAwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gUHJvbWlzaWZ5IHRoZSBzZWNvbmQgc3RvcmFnZS5zZXQgY2FsbFxyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIHN0b3JhZ2Uuc2V0KHtcclxuICAgICAgICAgICAga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTyxcclxuICAgICAgICAgICAgdmFsdWU6IEpTT04uc3RyaW5naWZ5KHVzZXJJbmZvVG9TYXZlKSxcclxuICAgICAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcclxuICAgICAgICAgICAgZmFpbDogKGVyciwgY29kZSkgPT4gcmVqZWN0KGBGYWlsZWQgdG8gc2F2ZSB1c2VyIGluZm86ICR7ZXJyfSAoJHtjb2RlfSlgKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICfmv4DmtLvmiJDlip/vvIHmraPlnKjot7PovawuLi4nO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgcm91dGVyLnJlcGxhY2UoeyB1cmk6ICdtYWluJyB9KTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc2F2ZSBhY3RpdmF0aW9uIGRhdGE6ICcgKyBlKTtcclxuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn5r+A5rS75aSx6LSl77ya5peg5rOV5YaZ5YWl5pys5Zyw5pWw5o2u44CCJztcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBhdHRlbXB0QXV0b0FjdGl2YXRpb24oKSB7XHJcbiAgICAgIGlmICghdGhpcy5yYXdEZXZpY2VJZCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn5q2j5Zyo5qOA5p+l6K6+5aSH5rOo5YaM5L+h5oGvLi4uJztcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2UuY2hlY2tEZXZpY2VSZWdpc3RyYXRpb24odGhpcy5yYXdEZXZpY2VJZCk7XHJcblxyXG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5pc19yZWdpc3RlcmVkKSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5jYW5fYXV0b19hY3RpdmF0ZSkge1xyXG4gICAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gYOiHquWKqOa/gOa0u+aIkOWKn++8geato+WcqOaBouWkjeaVsOaNri4uLiAoJHsocmVzdWx0LmF1dG9fYWN0aXZhdGlvbl9jb3VudCB8fCAwKSArIDF9LzUpYDtcclxuICAgICAgICAgIC8vIFRoZSB1c2VySW5mbyBpcyBhdCB0aGUgdG9wIGxldmVsIG9mIHRoZSByZXN1bHRcclxuICAgICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlQWN0aXZhdGlvblN1Y2Nlc3MocmVzdWx0LnVzZXJJbmZvKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gYXV0b19hY3RpdmF0aW9uX2V4Y2VlZGVkIG9yIG90aGVyIHJlYXNvbnNcclxuICAgICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IHJlc3VsdC5tZXNzYWdlIHx8ICfoh6rliqjmv4DmtLvmrKHmlbDlt7Lovr7kuIrpmZDvvIzor7fmiYvliqjmv4DmtLvjgIInO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBOb3QgcmVnaXN0ZXJlZCBvciBBUEkgZmFpbGVkIChyZXN1bHQgaXMgbnVsbC91bmRlZmluZWQpXHJcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gJyc7IC8vIENsZWFyIHN0YXR1cyBtZXNzYWdlIGFzIGl0J3Mgbm90IGFuIGVycm9yLCBqdXN0IG5vdCByZWdpc3RlcmVkXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlVGltZSgpIHtcclxuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgY29uc3QgaG91cnMgPSBub3cuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgdGhpcy50aW1lID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xyXG4gICAgfSxcclxuXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgIGlmICh0aGlzLnVpU3RhdGUgPT09ICdlbnRlcl91c2VyX2lkJykge1xyXG4gICAgICAgIHRoaXMudWlTdGF0ZSA9ICdlbnRlcl9hY3RpdmF0aW9uX2NvZGUnO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIHRoaXMudXNlcklkSW5wdXQgPSAnJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByb3V0ZXIuYmFjaygpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZUtleUNsaWNrKGUpIHtcclxuICAgICAgY29uc3Qga2V5ID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgIGlmICh0aGlzLnVpU3RhdGUgPT09ICdlbnRlcl91c2VyX2lkJykge1xyXG4gICAgICAgIGlmIChrZXkgPT09ICfijKsnKSB0aGlzLnVzZXJJZElucHV0ID0gdGhpcy51c2VySWRJbnB1dC5zbGljZSgwLCAtMSk7XHJcbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAn4pyTJykgdGhpcy52ZXJpZnlVc2VySWRBbmRQcm9jZWVkKCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnVzZXJJZElucHV0ICs9IGtleTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoa2V5ID09PSAn4oyrJykgdGhpcy5hY3RpdmF0aW9uQ29kZSA9IHRoaXMuYWN0aXZhdGlvbkNvZGUuc2xpY2UoMCwgLTEpO1xyXG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ+KckycpIHRoaXMuYWN0aXZhdGUoKTtcclxuICAgICAgICBlbHNlIHRoaXMuYWN0aXZhdGlvbkNvZGUgKz0ga2V5O1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIHZlcmlmeVVzZXJJZEFuZFByb2NlZWQoKSB7XHJcbiAgICAgIGlmICghdGhpcy51c2VySWRJbnB1dCB8fCAhdGhpcy5yYXdEZXZpY2VJZCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn5q2j5Zyo6aqM6K+B55So5oi3SUQuLi4nO1xyXG4gICAgICBcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLnZlcmlmeVVzZXJJZEFuZFJlc3RvcmUodGhpcy5yYXdEZXZpY2VJZCwgdGhpcy51c2VySWRJbnB1dCk7XHJcblxyXG4gICAgICAgIC8vIEFjY29yZGluZyB0byBBUEkgc3BlYyAjNywgYSBzdWNjZXNzZnVsIGNhbGwgcmV0dXJucyBzdWNjZXNzOnRydWUgYW5kIGEgdXNlckluZm8gb2JqZWN0LlxyXG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN1Y2Nlc3MgJiYgcmVzdWx0LnVzZXJJbmZvKSB7XHJcbiAgICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn6aqM6K+B5oiQ5Yqf77yM5q2j5Zyo5oGi5aSN5pWw5o2uLi4uJztcclxuICAgICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlQWN0aXZhdGlvblN1Y2Nlc3MocmVzdWx0LnVzZXJJbmZvKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gSGFuZGxlIGZhaWx1cmUgZnJvbSBzcGVjICM4LCAjMTYgZXRjLlxyXG4gICAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gXCLpqozor4HlpLHotKU6IFwiICsgKHJlc3VsdCA/IHJlc3VsdC5tZXNzYWdlIDogXCLnvZHnu5zmiJbmnKrnn6XplJnor69cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gJ+mqjOivgeWksei0pe+8mue9kee7nOaIluezu+e7n+mUmeivr+OAgic7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHVzZXIgSUQgdmVyaWZpY2F0aW9uOiAnICsgZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gUmVuYW1lZCBmcm9tIGdlbmVyYXRlRGV2aWNlQ29kZSB0byBiZSBtb3JlIGRlc2NyaXB0aXZlXHJcbiAgICBwcm9jZXNzRGV2aWNlSWRlbnRpZmllcigpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgZGV2aWNlLmdldFNlcmlhbCh7XHJcbiAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2VyaWFsRm9yUHJvY2Vzc2luZyA9IGRhdGEgPyBkYXRhLnNlcmlhbCA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgc2VyaWFsIGlzICdOQScgKGxpa2VseSBhIHNpbXVsYXRvciksIHJlcGxhY2UgaXQgd2l0aCBhIGZpeGVkIHRlc3QgSUQuXHJcbiAgICAgICAgICAgIGlmIChzZXJpYWxGb3JQcm9jZXNzaW5nID09PSAnTkEnKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRGV2aWNlIHNlcmlhbCBpcyAnTkEnLiBVc2luZyBhIGZpeGVkIHRlc3Qgc2VyaWFsIGZvciBhY3RpdmF0aW9uLlwiKTtcclxuICAgICAgICAgICAgICBzZXJpYWxGb3JQcm9jZXNzaW5nID0gJ1RFU1RWTS1TTi0wMTIzNDU2Nzg5JzsgLy8gQSBmaXhlZCwgdmFsaWQtbG9va2luZyBzdHJpbmdcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGlmICghc2VyaWFsRm9yUHJvY2Vzc2luZykge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBnZXQgYSB2YWxpZCBzZXJpYWwgZm9yIHByb2Nlc3NpbmcuJyk7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAxLiBTdG9yZSB0aGUgcmF3IHN5c3RlbSBpZGVudGlmaWVyICh3aGljaCBtaWdodCBiZSB0aGUgdGVzdCBvbmUpXHJcbiAgICAgICAgICAgIHRoaXMucmF3RGV2aWNlSWQgPSBzZXJpYWxGb3JQcm9jZXNzaW5nO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gMi4gU2F2ZSB0aGUgcmF3IGlkZW50aWZpZXIgdG8gc3RvcmFnZSBmb3IgdGhlIGF1dGgtZ3VhcmRcclxuICAgICAgICAgICAgc3RvcmFnZS5zZXQoe1xyXG4gICAgICAgICAgICAgIGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5ERVZJQ0VfSUQsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMucmF3RGV2aWNlSWQsXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gMy4gUHJvY2VzcyB0aGUgaWRlbnRpZmllciBmb3IgbG9jYWwgYWN0aXZhdGlvbiBsb2dpY1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb2Nlc3NlZFNlcmlhbCA9IHRoaXMucmF3RGV2aWNlSWQuc3Vic3RyaW5nKDAsIDEzKS5yZXBsYWNlKC9cXC8vZywgJycpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGV0dGVyVG9OdW1iZXJNYXAgPSB7ICdBJzogMSwgJ0InOiAyLCAnQyc6IDMsICdEJzogNCwgJ0UnOiA1IH07XHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtZXJpY1NlcmlhbCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9jZXNzZWRTZXJpYWwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgbGV0IGNoYXIgPSBwcm9jZXNzZWRTZXJpYWxbaV0udG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGNoYXIgPj0gJ0YnICYmIGNoYXIgPD0gJ1onKSBjaGFyID0gJ0UnO1xyXG4gICAgICAgICAgICAgICAgICBpZiAobGV0dGVyVG9OdW1iZXJNYXBbY2hhcl0pIG51bWVyaWNTZXJpYWwgKz0gbGV0dGVyVG9OdW1iZXJNYXBbY2hhcl07XHJcbiAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc05hTihwYXJzZUludChjaGFyLCAxMCkpKSBudW1lcmljU2VyaWFsICs9IGNoYXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobnVtZXJpY1NlcmlhbC5sZW5ndGggPCAxMikgbnVtZXJpY1NlcmlhbCA9IG51bWVyaWNTZXJpYWwucGFkRW5kKDEyLCAnMCcpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobnVtZXJpY1NlcmlhbC5sZW5ndGggPiAxMikgbnVtZXJpY1NlcmlhbCA9IG51bWVyaWNTZXJpYWwuc3Vic3RyaW5nKDAsIDEyKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKG51bWVyaWNTZXJpYWwubGVuZ3RoICE9PSAxMiB8fCAhL15cXGR7MTJ9JC8udGVzdChudW1lcmljU2VyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Byb2Nlc3NlZCBzZXJpYWwgaXMgbm90IGEgMTItZGlnaXQgbnVtYmVyLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYWlycyA9IG51bWVyaWNTZXJpYWwubWF0Y2goLy57MSwyfS9nKSB8fCBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUGFpcnMgPSBbcGFpcnNbMF0sIHBhaXJzWzJdLCBwYWlyc1s0XV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdW1BQiA9IHBhcnNlSW50KHNlbGVjdGVkUGFpcnNbMF1bMF0sIDEwKSArIHBhcnNlSW50KHNlbGVjdGVkUGFpcnNbMF1bMV0sIDEwKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1bUVGID0gcGFyc2VJbnQoc2VsZWN0ZWRQYWlyc1sxXVswXSwgMTApICsgcGFyc2VJbnQoc2VsZWN0ZWRQYWlyc1sxXVsxXSwgMTApO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VtSUogPSBwYXJzZUludChzZWxlY3RlZFBhaXJzWzJdWzBdLCAxMCkgKyBwYXJzZUludChzZWxlY3RlZFBhaXJzWzJdWzFdLCAxMCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdW1CRkogPSBwYXJzZUludChzZWxlY3RlZFBhaXJzWzBdWzFdLCAxMCkgKyBwYXJzZUludChzZWxlY3RlZFBhaXJzWzFdWzFdLCAxMCkgKyBwYXJzZUludChzZWxlY3RlZFBhaXJzWzJdWzFdLCAxMCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIDQuIFNldCB0aGUgZGlzcGxheWVkIGNvZGVcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkRGV2aWNlQ29kZSA9IGAke1N0cmluZyhzdW1BQikucGFkU3RhcnQoMiwgJzAnKX0ke1N0cmluZyhzdW1FRikucGFkU3RhcnQoMiwgJzAnKX0ke1N0cmluZyhzdW1JSikucGFkU3RhcnQoMiwgJzAnKX0ke1N0cmluZyhzdW1CRkopLnBhZFN0YXJ0KDIsICcwJyl9MWA7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVc2luZyBEZXZpY2UgSUQgZm9yIGFjdGl2YXRpb246JywgdGhpcy5yYXdEZXZpY2VJZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGlzcGxheWVkIERldmljZSBDb2RlOicsIHRoaXMuZGlzcGxheWVkRGV2aWNlQ29kZSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZmFpbDogKGVyciwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIHNhdmUgcmF3IGRldmljZSBJRCB0byBzdG9yYWdlLiBDb2RlOiAke2NvZGV9LCBFcnJvcjogJHtlcnJ9YCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IChlcnIsIGNvZGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGdldCBzZXJpYWwuIENvZGU6ICR7Y29kZX0sIEVycm9yOiAke2Vycn1gKTtcclxuICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZSgpIHtcclxuICAgICAgaWYgKCF0aGlzLmFjdGl2YXRpb25Db2RlIHx8IHRoaXMuYWN0aXZhdGlvbkNvZGUubGVuZ3RoICE9PSAxMSkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IFwi5r+A5rS756CB6ZW/5bqm5LiN5q2j56Gu77yM5bqU5Li6MTHkvY1cIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFN0ZXAgMTogTG9jYWwgdmFsaWRhdGlvbiBhZ2FpbnN0IHRoZSBwcm9jZXNzZWQvZGlzcGxheWVkIGNvZGVcclxuICAgICAgY29uc3QgYWMgPSB0aGlzLmFjdGl2YXRpb25Db2RlO1xyXG4gICAgICBjb25zdCBHX3ZhbCA9IHBhcnNlSW50KGFjWzZdLCAxMCk7XHJcbiAgICAgIGNvbnN0IEtfdmFsID0gcGFyc2VJbnQoYWNbMTBdLCAxMCk7XHJcbiAgICAgIGNvbnN0IEhJX21vZGlmaWVkX251bSA9IHBhcnNlSW50KGAke2FjWzddfSR7YWNbOF19YCwgMTApIC0gR192YWwgLSBLX3ZhbDtcclxuICAgICAgaWYgKEhJX21vZGlmaWVkX251bSA8IDAgfHwgSElfbW9kaWZpZWRfbnVtID4gOTkpIHtcclxuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSBcIua/gOa0u+Wksei0pTogSEnlh4/ms5Xnu5Pmnpzml6DmlYhcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgSElfbW9kaWZpZWRfc3RyID0gU3RyaW5nKEhJX21vZGlmaWVkX251bSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgY29uc3QgQUJfdmFsID0gcGFyc2VJbnQoYCR7YWNbMF19JHthY1sxXX1gLCAxMCk7XHJcbiAgICAgIGNvbnN0IENEX3ZhbCA9IHBhcnNlSW50KGAke2FjWzJdfSR7YWNbM119YCwgMTApO1xyXG4gICAgICBjb25zdCBFRl92YWwgPSBwYXJzZUludChgJHthY1s0XX0ke2FjWzVdfWAsIDEwKTtcclxuICAgICAgbGV0IEFCX2RpdmlkZWQsIENEX2RpdmlkZWQsIEVGX2RpdmlkZWQ7XHJcbiAgICAgIGlmIChHX3ZhbCA9PT0gMCkge1xyXG4gICAgICAgIEFCX2RpdmlkZWQgPSBBQl92YWw7IENEX2RpdmlkZWQgPSBDRF92YWw7IEVGX2RpdmlkZWQgPSBFRl92YWw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgQUJfZGl2aWRlZCA9IE1hdGguZmxvb3IoQUJfdmFsIC8gR192YWwpO1xyXG4gICAgICAgIENEX2RpdmlkZWQgPSBNYXRoLmZsb29yKENEX3ZhbCAvIEdfdmFsKTtcclxuICAgICAgICBFRl9kaXZpZGVkID0gTWF0aC5mbG9vcihFRl92YWwgLyBHX3ZhbCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZ3JvdXBBQkNERUZISUogPSBgJHtTdHJpbmcoQUJfZGl2aWRlZCkucGFkU3RhcnQoMiwgJzAnKX0ke1N0cmluZyhDRF9kaXZpZGVkKS5wYWRTdGFydCgyLCAnMCcpfSR7U3RyaW5nKEVGX2RpdmlkZWQpLnBhZFN0YXJ0KDIsICcwJyl9JHtISV9tb2RpZmllZF9zdHJ9JHthY1s5XX1gO1xyXG4gICAgICBcclxuICAgICAgLy8gQ29tcGFyZSBhZ2FpbnN0IHRoZSBkaXNwbGF5ZWQvcHJvY2Vzc2VkIGNvZGVcclxuICAgICAgaWYgKGdyb3VwQUJDREVGSElKICE9PSB0aGlzLmRpc3BsYXllZERldmljZUNvZGUpIHtcclxuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSBcIua/gOa0u+Wksei0pTog6K6+5aSH56CB5LiN5Yy56YWNXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBsZXQgY3VycmVudE1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpO1xyXG4gICAgICBpZiAoY3VycmVudE1pbnV0ZXMgPD0gOSkgY3VycmVudE1pbnV0ZXMgKz0gNjA7XHJcbiAgICAgIGNvbnN0IEdKX3ZhbHVlID0gcGFyc2VJbnQoYCR7YWNbNl19JHthY1s5XX1gLCAxMCk7XHJcbiAgICAgIGNvbnN0IGRpZmYgPSBjdXJyZW50TWludXRlcyAtIEdKX3ZhbHVlO1xyXG5cclxuICAgICAgaWYgKGRpZmYgPiAxMCB8fCBkaWZmIDwgMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IGDmv4DmtLvlpLHotKU6IOaXtumXtOagoemqjOS4jemAmui/hyAo5beu5YC8OiAke2RpZmZ9KWA7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBTdGVwIDI6IFNlcnZlciBSZWdpc3RyYXRpb24gdXNpbmcgdGhlIHJhdyBpZGVudGlmaWVyXHJcbiAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IFwi5pys5Zyw5qCh6aqM5oiQ5Yqf77yM5q2j5Zyo5rOo5YaM6K6+5aSHLi4uXCI7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gVXNlIHJhd0RldmljZUlkIGZvciBzZXJ2ZXIgY29tbXVuaWNhdGlvblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2UucmVnaXN0ZXJBbmRHZXRVc2VySWQodGhpcy5yYXdEZXZpY2VJZCk7XHJcblxyXG4gICAgICAgIC8vIEFjY29yZGluZyB0byBBUEkgc3BlYyAjMiAmICMzLCBhIHN1Y2Nlc3NmdWwgY2FsbCBhbHdheXMgcmV0dXJucyBzdWNjZXNzOnRydWUgYW5kIGEgdXNlckluZm8gb2JqZWN0LlxyXG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN1Y2Nlc3MgJiYgcmVzdWx0LnVzZXJJbmZvKSB7XHJcbiAgICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSBcIua/gOa0u+aIkOWKn++8geW3suiOt+WPlueUqOaIt0lE44CCXCI7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZUFjdGl2YXRpb25TdWNjZXNzKHJlc3VsdC51c2VySW5mbyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIEhhbmRsZSBnZW5lcmljIGZhaWx1cmUgZnJvbSBzcGVjICMxNiwgIzE3IGV0Yy5cclxuICAgICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IFwi5r+A5rS75aSx6LSlOiBcIiArIChyZXN1bHQgPyByZXN1bHQubWVzc2FnZSA6IFwi572R57uc5oiW5pyq55+l6ZSZ6K+vXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IFwi5r+A5rS75aSx6LSlOiDnvZHnu5zor7fmsYLplJnor6/vvIzor7fph43or5XjgIJcIjtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgYWN0aXZhdGlvbjogJyArIGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD4iXSwibmFtZXMiOlsiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX3N5c3RlbTIiLCJfc3lzdGVtMyIsIl9zeXN0ZW00IiwiX2NvbmZpZyIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJvd25LZXlzIiwiciIsInQiLCJPYmplY3QiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsInZhbHVlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiQXBpU2VydmljZSIsImNvbnN0cnVjdG9yIiwiYmFzZVVybCIsIkNPTkZJRyIsIlNFUlZFUiIsIkJBU0VfVVJMIiwiYmFzZUhlYWRlcnMiLCJyZXF1ZXN0IiwiYWN0aW9uIiwiZGF0YSIsInVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXIiLCJyZXNwb25zZVR5cGUiLCJKU09OIiwic3RyaW5naWZ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInJlc3BvbnNlRGF0YSIsImNvZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImZhaWwiLCJnZXRSYW5raW5ncyIsImxpbWl0IiwicmVzdWx0IiwicmFua2luZ3MiLCJtZXNzYWdlIiwic3luY0NsaWNrcyIsInVzZXJJZCIsImNsaWNrQ291bnQiLCJ1c2VyX2lkIiwiY2xpY2tfY291bnQiLCJjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkiLCJwZXROYW1lIiwicGV0X25hbWUiLCJpc0F2YWlsYWJsZSIsInNldFBldE5hbWUiLCJuZXdOYW1lIiwibmV3X25hbWUiLCJjaGVja0RldmljZVJlZ2lzdHJhdGlvbiIsImRldmljZUlkIiwiZGV2aWNlX2lkIiwibG9nIiwiaXNfcmVnaXN0ZXJlZCIsImNhbl9hdXRvX2FjdGl2YXRlIiwicmVnaXN0ZXJBbmRHZXRVc2VySWQiLCJ2ZXJpZnlVc2VySWRBbmRSZXN0b3JlIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiQVBQIiwiTkFNRSIsIlZFUlNJT04iLCJNQVhfQ0xJQ0tTX1BFUl9CQVRDSCIsIlNZTkNfSU5URVJWQUwiLCJSQU5LX0xJTUlUIiwiU1RPUkFHRV9LRVlTIiwiREVWSUNFX0lEIiwiSVNfTE9DQUxMWV9BQ1RJVkFURUQiLCJVU0VSX0lORk8iLCJQRU5ESU5HX0NMSUNLUyIsIkxBU1RfU1lOQ19USU1FIiwiVE9UQUxfQ0xJQ0tTIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl9hcGlTZXJ2aWNlIiwidGltZSIsInJhd0RldmljZUlkIiwiZGlzcGxheWVkRGV2aWNlQ29kZSIsImFjdGl2YXRpb25Db2RlIiwidXNlcklkSW5wdXQiLCJzdGF0dXNNZXNzYWdlIiwidWlTdGF0ZSIsIm9uSW5pdCIsInVwZGF0ZVRpbWUiLCJzZXRJbnRlcnZhbCIsImdlbmVyYXRlZCIsInByb2Nlc3NEZXZpY2VJZGVudGlmaWVyIiwiYXR0ZW1wdEF1dG9BY3RpdmF0aW9uIiwiaGFuZGxlQWN0aXZhdGlvblN1Y2Nlc3MiLCJ1c2VySW5mbyIsInN0b3JhZ2UiLCJzZXQiLCJrZXkiLCJlcnIiLCJ1c2VySW5mb1RvU2F2ZSIsImlkIiwidXNlcl9udW1iZXIiLCJ0b3RhbF9jbGlja3MiLCJzZXRUaW1lb3V0Iiwicm91dGVyIiwicmVwbGFjZSIsInVyaSIsImF1dG9fYWN0aXZhdGlvbl9jb3VudCIsIm5vdyIsIkRhdGUiLCJob3VycyIsImdldEhvdXJzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZ29CYWNrIiwiYmFjayIsImhhbmRsZUtleUNsaWNrIiwiZGV0YWlsIiwic2xpY2UiLCJ2ZXJpZnlVc2VySWRBbmRQcm9jZWVkIiwiYWN0aXZhdGUiLCJkZXZpY2UiLCJnZXRTZXJpYWwiLCJzZXJpYWxGb3JQcm9jZXNzaW5nIiwic2VyaWFsIiwid2FybiIsInByb2Nlc3NlZFNlcmlhbCIsInN1YnN0cmluZyIsImxldHRlclRvTnVtYmVyTWFwIiwibnVtZXJpY1NlcmlhbCIsImNoYXIiLCJ0b1VwcGVyQ2FzZSIsImlzTmFOIiwicGFyc2VJbnQiLCJwYWRFbmQiLCJ0ZXN0IiwicGFpcnMiLCJtYXRjaCIsInNlbGVjdGVkUGFpcnMiLCJzdW1BQiIsInN1bUVGIiwic3VtSUoiLCJzdW1CRkoiLCJhYyIsIkdfdmFsIiwiS192YWwiLCJISV9tb2RpZmllZF9udW0iLCJISV9tb2RpZmllZF9zdHIiLCJBQl92YWwiLCJDRF92YWwiLCJFRl92YWwiLCJBQl9kaXZpZGVkIiwiQ0RfZGl2aWRlZCIsIkVGX2RpdmlkZWQiLCJNYXRoIiwiZmxvb3IiLCJncm91cEFCQ0RFRkhJSiIsImN1cnJlbnRNaW51dGVzIiwiR0pfdmFsdWUiLCJkaWZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFDQSxJQUFBQSxVQUFBQyx1QkFBQUMsZUFBQTt3QkFDQSxJQUFBQyxXQUFBRix1QkFBQUMsZUFBQTt3QkFDQSxJQUFBRSxXQUFBSCx1QkFBQUMsZUFBQTt3QkFDQSxJQUFBRyxXQUFBSix1QkFBQUMsZUFBQTt3QkFDQSxJQUFBSSxVQUFBQyxvQkFBQTt3QkFBcUMsU0FBQU4sdUJBQUFPLENBQUE7NEJBQUEsT0FBQUEsS0FBQUEsRUFBQUMsVUFBQSxHQUFBRCxJQUFBO2dDQUFBRSxTQUFBRjs0QkFBQTt3QkFBQTt3QkFBQSxTQUFBRyxRQUFBSCxDQUFBLEVBQUFJLENBQUE7NEJBQUEsSUFBQUMsSUFBQUMsT0FBQUMsSUFBQSxDQUFBUDs0QkFBQSxJQUFBTSxPQUFBRSxxQkFBQTtnQ0FBQSxJQUFBQyxJQUFBSCxPQUFBRSxxQkFBQSxDQUFBUjtnQ0FBQUksS0FBQUssQ0FBQUEsSUFBQUEsRUFBQUMsTUFBQSxVQUFBTixDQUFBO29DQUFBLE9BQUFFLE9BQUFLLHdCQUFBLENBQUFYLEdBQUFJLEdBQUFRLFVBQUE7Z0NBQUEsS0FBQVAsRUFBQVEsSUFBQSxDQUFBQyxLQUFBLENBQUFULEdBQUFJOzRCQUFBOzRCQUFBLE9BQUFKO3dCQUFBO3dCQUFBLFNBQUFVLGNBQUFmLENBQUE7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