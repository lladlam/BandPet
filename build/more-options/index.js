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
                                            console.error(`[ApiService] Request Failed. Code: ${code}, Error: ${JSON.stringify(error)}`);
                                            reject(new Error(`Request failed: ${error.data || 'Connection is invalid'}`));
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
                            async getAnnouncements(limit = 10) {
                                try {
                                    const result = await this.request('get_announcements', {
                                        limit: limit
                                    });
                                    console.log('Original announcement result from server:', JSON.stringify(result));
                                    return {
                                        success: result.success || false,
                                        announcements: result.announcements || [],
                                        count: result.count || 0,
                                        timestamp: result.timestamp,
                                        error: result.error
                                    };
                                } catch (error) {
                                    console.error('获取公告失败:', error);
                                    return {
                                        success: false,
                                        error: error.message,
                                        announcements: [],
                                        count: 0
                                    };
                                }
                            }
                            async checkAppUpdate(currentVersionCode) {
                                console.log('[ApiService] checkAppUpdate called with currentVersionCode:', currentVersionCode);
                                try {
                                    const result = await this.request('check_update', {
                                        current_version_code: currentVersionCode
                                    });
                                    console.log('[ApiService] checkAppUpdate raw result:', JSON.stringify(result));
                                    console.log('[ApiService] checkAppUpdate has_update:', result.has_update);
                                    console.log('[ApiService] checkAppUpdate update_info:', JSON.stringify(result.update_info));
                                    console.log('[ApiService] checkAppUpdate is_force_update:', result.is_force_update);
                                    let updateInfo = null;
                                    if (result.update_info) {
                                        updateInfo = {
                                            version_name: result.update_info.version_name || '',
                                            version_code: result.update_info.version_code || 0,
                                            title: result.update_info.title || '发现新版本',
                                            changelog: result.update_info.changelog || '',
                                            download_url: result.update_info.download_url || '',
                                            force_update: result.update_info.force_update || false,
                                            min_required_version: result.update_info.min_required_version || 0,
                                            release_time: result.update_info.release_time || ''
                                        };
                                        console.log('[ApiService] checkAppUpdate updateInfo constructed:', JSON.stringify(updateInfo));
                                    } else console.log('[ApiService] checkAppUpdate update_info is null or undefined');
                                    const returnResult = {
                                        success: result.success || false,
                                        hasUpdate: result.has_update || false,
                                        updateInfo: updateInfo,
                                        isForceUpdate: result.is_force_update || false,
                                        currentVersionCode: result.current_version_code || currentVersionCode,
                                        latestVersionCode: result.latest_version_code || currentVersionCode,
                                        error: result.error
                                    };
                                    console.log('[ApiService] checkAppUpdate return result:', JSON.stringify(returnResult));
                                    return returnResult;
                                } catch (error) {
                                    console.error('[ApiService] checkAppUpdate error:', error);
                                    console.error('[ApiService] checkAppUpdate error message:', error.message);
                                    console.error('[ApiService] checkAppUpdate error stack:', error.stack);
                                    return {
                                        success: false,
                                        error: error.message,
                                        hasUpdate: false,
                                        isForceUpdate: false
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
                                VERSION: '0.4.3 Alpha',
                                VERSION_CODE: 43,
                                MAX_CLICKS_PER_BATCH: 50,
                                SYNC_INTERVAL: 30000,
                                RANK_LIMIT: 10,
                                CHECK_UPDATE_INTERVAL: 3600000,
                                ANNOUNCEMENT_CACHE_TIME: 300000
                            },
                            STORAGE_KEYS: {
                                DEVICE_ID: 'device_id',
                                IS_LOCALLY_ACTIVATED: 'is_locally_activated',
                                USER_INFO: 'user_info',
                                PENDING_CLICKS: 'pending_clicks',
                                LAST_SYNC_TIME: 'last_sync_time',
                                TOTAL_CLICKS: 'total_clicks',
                                LAST_UPDATE_CHECK_TIME: 'last_update_check_time',
                                LAST_ANNOUNCEMENT_FETCH_TIME: 'last_announcement_fetch_time',
                                CACHED_ANNOUNCEMENTS: 'cached_announcements',
                                CACHED_UPDATE_INFO: 'cached_update_info',
                                IGNORED_VERSION: 'ignored_version_code',
                                FORCE_UPDATE_REQUIRED: 'force_update_required',
                                VIBRATION_ENABLED: 'vibration_enabled'
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
                                marginBottom: "2px"
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
                                justifyContent: "center",
                                position: "relative"
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
                                position: "absolute",
                                left: "0px"
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
                                alignItems: "center"
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
                                flex: 1,
                                alignItems: "center",
                                overflowY: "scroll"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "settings-list"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                width: "90%"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "setting-item"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "80px",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                paddingTop: "0",
                                paddingRight: "20px",
                                paddingBottom: "0",
                                paddingLeft: "20px",
                                backgroundColor: "#1a1a1a",
                                borderRadius: "15px",
                                marginBottom: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "setting-label"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "30px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "vibration-switch"
                                ]
                            ],
                            {
                                width: "80px",
                                height: "40px",
                                trackColor: "#4cd964",
                                thumbColor: "#ffffff"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "setting-description"
                                ]
                            ],
                            {
                                width: "100%",
                                paddingTop: "0",
                                paddingRight: "20px",
                                paddingBottom: "0",
                                paddingLeft: "20px",
                                marginBottom: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "description-text"
                                ]
                            ],
                            {
                                color: "#666666",
                                fontSize: "22px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "update-button"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "70px",
                                backgroundColor: "#1a1a1a",
                                borderRadius: "15px",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "20px",
                                marginBottom: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "update-button-text"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "30px"
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
                        var _system3 = _interopRequireDefault($app_require$1("@app-module/system.vibrator"));
                        var _system4 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                        var _config = __webpack_require__("./src/common/js/config.js");
                        var _apiService = _interopRequireDefault(__webpack_require__("./src/common/js/api-service.js"));
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
                                    fail: (err, code)=>reject(new Error(`Storage.set failed: ${err} (${code})`))
                                });
                            });
                        var _default = exports.default = {
                            data: {
                                time: '00:00',
                                vibrationEnabled: true
                            },
                            onInit () {
                                this.updateTime();
                                this.loadSettings();
                                setInterval(this.updateTime, 10000);
                            },
                            updateTime () {
                                const now = new Date();
                                const hours = now.getHours().toString().padStart(2, '0');
                                const minutes = now.getMinutes().toString().padStart(2, '0');
                                this.time = `${hours}:${minutes}`;
                            },
                            async loadSettings () {
                                try {
                                    const setting = await _promisifiedStorageGet(_config.CONFIG.STORAGE_KEYS.VIBRATION_ENABLED);
                                    this.vibrationEnabled = 'false' !== setting;
                                    console.log('[MoreOptions] Loaded vibration setting:', this.vibrationEnabled);
                                } catch (e) {
                                    console.error('[MoreOptions] Failed to load settings:', e);
                                    this.vibrationEnabled = true;
                                }
                            },
                            async onVibrationChange (e) {
                                this.vibrationEnabled = e.checked;
                                try {
                                    await _promisifiedStorageSet(_config.CONFIG.STORAGE_KEYS.VIBRATION_ENABLED, this.vibrationEnabled.toString());
                                    console.log('[MoreOptions] Saved vibration setting:', this.vibrationEnabled);
                                    if (this.vibrationEnabled) _system3.default.vibrate({
                                        mode: 'short'
                                    });
                                } catch (e) {
                                    console.error('[MoreOptions] Failed to save vibration setting:', e);
                                }
                            },
                            goBack () {
                                _system.default.back();
                            },
                            async checkUpdate () {
                                console.log('[MoreOptions] Checking for updates...');
                                try {
                                    _system4.default.showToast({
                                        message: '正在检查更新...',
                                        duration: 1500
                                    });
                                    const currentVersionCode = _config.CONFIG.APP.VERSION_CODE;
                                    const result = await _apiService.default.checkAppUpdate(currentVersionCode);
                                    console.log('[MoreOptions] Update check result:', JSON.stringify(result));
                                    if (result.success && result.hasUpdate && result.updateInfo) {
                                        const versionName = result.updateInfo.version_name || '新版本';
                                        _system4.default.showToast({
                                            message: `有新版本更新！版本号：${versionName}`,
                                            duration: 2500
                                        });
                                    } else _system4.default.showToast({
                                        message: '当前已是最新版本',
                                        duration: 1500
                                    });
                                } catch (error) {
                                    console.error('[MoreOptions] Update check failed:', error);
                                    _system4.default.showToast({
                                        message: '检查更新失败',
                                        duration: 1500
                                    });
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
                                                value: "更多选项"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
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
                                            "settings-list"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "setting-item"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "setting-label"
                                                ],
                                                value: "点击震动"
                                            }
                                        }, []),
                                        aiot.__ce__("switch", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                checked: function() {
                                                    return _vm_.vibrationEnabled;
                                                },
                                                classList: [
                                                    "vibration-switch"
                                                ],
                                                events: {
                                                    change: function(evt) {
                                                        return _vm_.onVibrationChange(evt);
                                                    }
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "setting-description"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "description-text"
                                                ],
                                                value: "开启后，点击宠物时会有轻微震动反馈"
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "update-button"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.checkUpdate(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "update-button-text"
                                                ],
                                                value: "检查更新"
                                            }
                                        }, [])
                                    ])
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1vcHRpb25zXFxpbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9hcGktc2VydmljZS5qcyIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvY29uZmlnLmpzIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvbW9yZS1vcHRpb25zL2luZGV4LnV4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwaS1zZXJ2aWNlLmpzXHJcbmltcG9ydCBmZXRjaCBmcm9tICdAc3lzdGVtLmZldGNoJztcclxuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XHJcbmltcG9ydCBwcm9tcHQgZnJvbSAnQHN5c3RlbS5wcm9tcHQnO1xyXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XHJcblxyXG5jbGFzcyBBcGlTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIOS4rei9rOacjeWKoeWZqOWcsOWdgCAtIOS7jiBjb25maWcuanMg6K+75Y+WXHJcbiAgICB0aGlzLmJhc2VVcmwgPSBDT05GSUcuU0VSVkVSLkJBU0VfVVJMO1xyXG4gICAgdGhpcy5iYXNlSGVhZGVycyA9IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOmAmueUqOivt+axguaWueazlSAtIOmAmui/h+S4rei9rOacjeWKoeWZqOi9rOWPkVxyXG4gIGFzeW5jIHJlcXVlc3QoYWN0aW9uLCBkYXRhID0ge30pIHtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vYXBpYDtcclxuICAgIFxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyOiB0aGlzLmJhc2VIZWFkZXJzLFxyXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xyXG4gICAgfTtcclxuXHJcbiAgICBvcHRpb25zLmRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IGFjdGlvbiwgLi4uZGF0YSB9KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZXRjaC5mZXRjaCh7XHJcbiAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XHJcblxyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUgPj0gMjAwICYmIHJlc3BvbnNlLmNvZGUgPCAzMDApIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZURhdGEpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBIVFRQIEVycm9yOiAke3Jlc3BvbnNlLmNvZGV9YCwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBIVFRQICR7cmVzcG9uc2UuY29kZX06ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2VEYXRhKX1gKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IChlcnJvciwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgLy8gREVUQUlMRUQgTE9HR0lORyBGT1IgTkVUV09SSyBGQUlMVVJFU1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgW0FwaVNlcnZpY2VdIFJlcXVlc3QgRmFpbGVkLiBDb2RlOiAke2NvZGV9LCBFcnJvcjogJHtKU09OLnN0cmluZ2lmeShlcnJvcil9YCk7XHJcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZDogJHtlcnJvci5kYXRhIHx8ICdDb25uZWN0aW9uIGlzIGludmFsaWQnfWApKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyDojrflj5bmjpLooYzmppxcclxuICBhc3luYyBnZXRSYW5raW5ncyhsaW1pdCA9IDEwKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2dldF9yYW5raW5ncycsIHtcclxuICAgICAgICBsaW1pdDogbGltaXRcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIHJhbmtpbmdzOiByZXN1bHQucmFua2luZ3MgfHwgW11cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign6I635Y+W5o6S6KGM5qac5aSx6LSlOicsIGVycm9yKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIHJhbmtpbmdzOiBbXSxcclxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDkuIrmiqXngrnlh7vmrKHmlbBcclxuICBhc3luYyBzeW5jQ2xpY2tzKHVzZXJJZCwgY2xpY2tDb3VudCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0KCdzeW5jX2NsaWNrcycsIHtcclxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXHJcbiAgICAgICAgY2xpY2tfY291bnQ6IGNsaWNrQ291bnRcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfkuIrmiqXngrnlh7vmrKHmlbDlpLHotKU6JywgZXJyb3IpXHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5LuO5pyN5Yqh5Zmo5ZCM5q2l5pWw5o2uXHJcbiAgYXN5bmMgc3luY0Zyb21TZXJ2ZXIodXNlcklkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ3N5bmNfZnJvbV9zZXJ2ZXInLCB7XHJcbiAgICAgICAgdXNlcl9pZDogdXNlcklkXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfku47mnI3liqHlmajlkIzmraXmlbDmja7miJDlip86JywgcmVzdWx0LnVzZXJJbmZvKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1c2VySW5mbzogcmVzdWx0LnVzZXJJbmZvIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign5ZCM5q2l5pWw5o2u5aSx6LSlOicsIHJlc3VsdCA/IHJlc3VsdC5lcnJvciA6ICfmnKrnn6XplJnor68nKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IChyZXN1bHQgPyByZXN1bHQuZXJyb3IgOiAn5pyN5Yqh5Zmo5pyq6L+U5Zue5oiQ5Yqf54q25oCBJykgfTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5LuO5pyN5Yqh5Zmo5ZCM5q2l5pWw5o2u5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDmo4Dmn6XlrqDnianlkI3mmK/lkKblj6/nlKhcclxuICBhc3luYyBjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkocGV0TmFtZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdjaGVja19wZXRfbmFtZScsIHtcclxuICAgICAgICBwZXRfbmFtZTogcGV0TmFtZVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgLi4ucmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfmo4Dmn6XlrqDnianlkI3lj6/nlKjmgKfml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UsIGlzQXZhaWxhYmxlOiBmYWxzZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5L+u5pS55a6g54mp5ZCNXHJcbiAgYXN5bmMgc2V0UGV0TmFtZSh1c2VySWQsIG5ld05hbWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnc2V0X3BldF9uYW1lJywge1xyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcclxuICAgICAgICBuZXdfbmFtZTogbmV3TmFtZVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S/ruaUueWuoOeJqeWQjeWksei0pTonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g6aKE5r+A5rS75qOA5p+lXHJcbiAgYXN5bmMgY2hlY2tEZXZpY2VSZWdpc3RyYXRpb24oZGV2aWNlSWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnY2hlY2tfcmVnaXN0cmF0aW9uJywge1xyXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWRcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfpooTmv4DmtLvmo4Dmn6XmiJDlip86JywgcmVzdWx0KTtcclxuICAgICAgLy8g55u05o6l6L+U5Zue5pyN5Yqh5Zmo55qE5Y6f5aeL5ZON5bqU77yMVUnlsYLmnJ/mnJvnmoTmmK/miYHlubPnu5PmnoRcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+mihOa/gOa0u+ajgOafpeaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XHJcbiAgICAgIC8vIOi/lOWbnuS4gOS4quWFvOWuueeahOmUmeivr+Wvueixoe+8jOmBv+WFjVVJ5bGC5bSp5rqDXHJcbiAgICAgIHJldHVybiB7IGlzX3JlZ2lzdGVyZWQ6IGZhbHNlLCBjYW5fYXV0b19hY3RpdmF0ZTogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDms6jlhozorr7lpIflubbojrflj5bnlKjmiLdJRFxyXG4gIGFzeW5jIHJlZ2lzdGVyQW5kR2V0VXNlcklkKGRldmljZUlkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBQYXNzIHRoZSBzZXJ2ZXIgcmVzcG9uc2UgZGlyZWN0bHkgdG8gdGhlIFVJIGxheWVyXHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3QoJ3JlZ2lzdGVyX2RldmljZV9hbmRfZ2V0X2lkJywge1xyXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWRcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfms6jlhozmiJbojrflj5bnlKjmiLdJROaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XHJcbiAgICAgIC8vIFJldHVybiBhIGNvbXBhdGlibGUgZXJyb3Igb2JqZWN0XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDojrflj5blhazlkYrliJfooahcclxuICBhc3luYyBnZXRBbm5vdW5jZW1lbnRzKGxpbWl0ID0gMTApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnZ2V0X2Fubm91bmNlbWVudHMnLCB7XHJcbiAgICAgICAgbGltaXQ6IGxpbWl0XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygnT3JpZ2luYWwgYW5ub3VuY2VtZW50IHJlc3VsdCBmcm9tIHNlcnZlcjonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogcmVzdWx0LnN1Y2Nlc3MgfHwgZmFsc2UsXHJcbiAgICAgICAgYW5ub3VuY2VtZW50czogcmVzdWx0LmFubm91bmNlbWVudHMgfHwgW10sXHJcbiAgICAgICAgY291bnQ6IHJlc3VsdC5jb3VudCB8fCAwLFxyXG4gICAgICAgIHRpbWVzdGFtcDogcmVzdWx0LnRpbWVzdGFtcCxcclxuICAgICAgICBlcnJvcjogcmVzdWx0LmVycm9yXHJcbiAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfojrflj5blhazlkYrlpLHotKU6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgIGFubm91bmNlbWVudHM6IFtdLFxyXG4gICAgICAgIGNvdW50OiAwXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDmo4Dmn6XlupTnlKjmm7TmlrBcclxuICBhc3luYyBjaGVja0FwcFVwZGF0ZShjdXJyZW50VmVyc2lvbkNvZGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgY2FsbGVkIHdpdGggY3VycmVudFZlcnNpb25Db2RlOicsIGN1cnJlbnRWZXJzaW9uQ29kZSk7XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnY2hlY2tfdXBkYXRlJywge1xyXG4gICAgICAgIGN1cnJlbnRfdmVyc2lvbl9jb2RlOiBjdXJyZW50VmVyc2lvbkNvZGVcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZygnW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIHJhdyByZXN1bHQ6JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgaGFzX3VwZGF0ZTonLCByZXN1bHQuaGFzX3VwZGF0ZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgdXBkYXRlX2luZm86JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LnVwZGF0ZV9pbmZvKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgaXNfZm9yY2VfdXBkYXRlOicsIHJlc3VsdC5pc19mb3JjZV91cGRhdGUpO1xyXG4gICAgICBcclxuICAgICAgLy8g56Gu5L+dIHVwZGF0ZUluZm8g5YyF5ZCr5omA5pyJ5b+F6KaB5a2X5q61XHJcbiAgICAgIGxldCB1cGRhdGVJbmZvID0gbnVsbDtcclxuICAgICAgaWYgKHJlc3VsdC51cGRhdGVfaW5mbykge1xyXG4gICAgICAgIHVwZGF0ZUluZm8gPSB7XHJcbiAgICAgICAgICB2ZXJzaW9uX25hbWU6IHJlc3VsdC51cGRhdGVfaW5mby52ZXJzaW9uX25hbWUgfHwgJycsXHJcbiAgICAgICAgICB2ZXJzaW9uX2NvZGU6IHJlc3VsdC51cGRhdGVfaW5mby52ZXJzaW9uX2NvZGUgfHwgMCxcclxuICAgICAgICAgIHRpdGxlOiByZXN1bHQudXBkYXRlX2luZm8udGl0bGUgfHwgJ+WPkeeOsOaWsOeJiOacrCcsXHJcbiAgICAgICAgICBjaGFuZ2Vsb2c6IHJlc3VsdC51cGRhdGVfaW5mby5jaGFuZ2Vsb2cgfHwgJycsXHJcbiAgICAgICAgICBkb3dubG9hZF91cmw6IHJlc3VsdC51cGRhdGVfaW5mby5kb3dubG9hZF91cmwgfHwgJycsXHJcbiAgICAgICAgICBmb3JjZV91cGRhdGU6IHJlc3VsdC51cGRhdGVfaW5mby5mb3JjZV91cGRhdGUgfHwgZmFsc2UsXHJcbiAgICAgICAgICBtaW5fcmVxdWlyZWRfdmVyc2lvbjogcmVzdWx0LnVwZGF0ZV9pbmZvLm1pbl9yZXF1aXJlZF92ZXJzaW9uIHx8IDAsXHJcbiAgICAgICAgICByZWxlYXNlX3RpbWU6IHJlc3VsdC51cGRhdGVfaW5mby5yZWxlYXNlX3RpbWUgfHwgJydcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgdXBkYXRlSW5mbyBjb25zdHJ1Y3RlZDonLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVJbmZvKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tBcGlTZXJ2aWNlXSBjaGVja0FwcFVwZGF0ZSB1cGRhdGVfaW5mbyBpcyBudWxsIG9yIHVuZGVmaW5lZCcpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCByZXR1cm5SZXN1bHQgPSB7XHJcbiAgICAgICAgc3VjY2VzczogcmVzdWx0LnN1Y2Nlc3MgfHwgZmFsc2UsXHJcbiAgICAgICAgaGFzVXBkYXRlOiByZXN1bHQuaGFzX3VwZGF0ZSB8fCBmYWxzZSxcclxuICAgICAgICB1cGRhdGVJbmZvOiB1cGRhdGVJbmZvLFxyXG4gICAgICAgIGlzRm9yY2VVcGRhdGU6IHJlc3VsdC5pc19mb3JjZV91cGRhdGUgfHwgZmFsc2UsXHJcbiAgICAgICAgY3VycmVudFZlcnNpb25Db2RlOiByZXN1bHQuY3VycmVudF92ZXJzaW9uX2NvZGUgfHwgY3VycmVudFZlcnNpb25Db2RlLFxyXG4gICAgICAgIGxhdGVzdFZlcnNpb25Db2RlOiByZXN1bHQubGF0ZXN0X3ZlcnNpb25fY29kZSB8fCBjdXJyZW50VmVyc2lvbkNvZGUsXHJcbiAgICAgICAgZXJyb3I6IHJlc3VsdC5lcnJvclxyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ1tBcGlTZXJ2aWNlXSBjaGVja0FwcFVwZGF0ZSByZXR1cm4gcmVzdWx0OicsIEpTT04uc3RyaW5naWZ5KHJldHVyblJlc3VsdCkpO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHJldHVyblJlc3VsdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tBcGlTZXJ2aWNlXSBjaGVja0FwcFVwZGF0ZSBlcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tBcGlTZXJ2aWNlXSBjaGVja0FwcFVwZGF0ZSBlcnJvciBtZXNzYWdlOicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgZXJyb3Igc3RhY2s6JywgZXJyb3Iuc3RhY2spO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgIGhhc1VwZGF0ZTogZmFsc2UsXHJcbiAgICAgICAgaXNGb3JjZVVwZGF0ZTogZmFsc2VcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBcGlTZXJ2aWNlKClcclxuIiwiLy8gY29uZmlnLmpzXHJcbmV4cG9ydCBjb25zdCBDT05GSUcgPSB7XHJcbiAgLy8g5Lit6L2s5pyN5Yqh5Zmo6YWN572uXHJcbiAgU0VSVkVSOiB7XHJcbiAgICBCQVNFX1VSTDogJ2h0dHA6Ly8xMDMuMjA1LjI1My44NzoyMjIwNydcclxuICB9LFxyXG4gIFxyXG4gIC8vIOazqOaEj++8mlVSTCDliY3nvIDlnKggYXBpLXNlcnZpY2UuanMg5Lit56Gs57yW56CB5LqGXHJcbiAgLy8g6L+Z6YeM5LiN5YaN6ZyA6KaB6YWN572uXHJcbiAgXHJcbiAgLy8g5bqU55So6YWN572uXHJcbiAgQVBQOiB7XHJcbiAgICBOQU1FOiAnQmFuZFBldCcsXHJcbiAgICBWRVJTSU9OOiAnMC40LjMgQWxwaGEnLFxyXG4gICAgVkVSU0lPTl9DT0RFOiA0MywgIC8vIOeUqOS6jueJiOacrOavlOi+g+eahOaVsOWtl++8iDAuNC4zIC0+IDQz77yJXHJcbiAgICBNQVhfQ0xJQ0tTX1BFUl9CQVRDSDogNTAsXHJcbiAgICBTWU5DX0lOVEVSVkFMOiAzMDAwMCwgIC8vIDMw56eS6Ieq5Yqo5ZCM5q2l5LiA5qyhXHJcbiAgICBSQU5LX0xJTUlUOiAxMCxcclxuICAgIFxyXG4gICAgLy8g5pu05paw5qOA5p+l6YWN572uXHJcbiAgICBDSEVDS19VUERBVEVfSU5URVJWQUw6IDM2MDAwMDAsIC8vIDHlsI/ml7bmo4Dmn6XkuIDmrKHmm7TmlrDvvIgzNjAwMDAw5q+r56eS77yJXHJcbiAgICBBTk5PVU5DRU1FTlRfQ0FDSEVfVElNRTogMzAwMDAwLCAvLyA15YiG6ZKf57yT5a2Y5YWs5ZGKXHJcbiAgfSxcclxuICBcclxuICAvLyDlrZjlgqjplK7lkI1cclxuICBTVE9SQUdFX0tFWVM6IHtcclxuICAgIERFVklDRV9JRDogJ2RldmljZV9pZCcsXHJcbiAgICBJU19MT0NBTExZX0FDVElWQVRFRDogJ2lzX2xvY2FsbHlfYWN0aXZhdGVkJyxcclxuICAgIFVTRVJfSU5GTzogJ3VzZXJfaW5mbycsXHJcbiAgICBQRU5ESU5HX0NMSUNLUzogJ3BlbmRpbmdfY2xpY2tzJyxcclxuICAgIExBU1RfU1lOQ19USU1FOiAnbGFzdF9zeW5jX3RpbWUnLFxyXG4gICAgVE9UQUxfQ0xJQ0tTOiAndG90YWxfY2xpY2tzJyxcclxuICAgIFxyXG4gICAgLy8g5pu05paw55u45YWz5a2Y5YKo6ZSuXHJcbiAgICBMQVNUX1VQREFURV9DSEVDS19USU1FOiAnbGFzdF91cGRhdGVfY2hlY2tfdGltZScsXHJcbiAgICBMQVNUX0FOTk9VTkNFTUVOVF9GRVRDSF9USU1FOiAnbGFzdF9hbm5vdW5jZW1lbnRfZmV0Y2hfdGltZScsXHJcbiAgICBDQUNIRURfQU5OT1VOQ0VNRU5UUzogJ2NhY2hlZF9hbm5vdW5jZW1lbnRzJyxcclxuICAgIENBQ0hFRF9VUERBVEVfSU5GTzogJ2NhY2hlZF91cGRhdGVfaW5mbycsXHJcbiAgICBJR05PUkVEX1ZFUlNJT046ICdpZ25vcmVkX3ZlcnNpb25fY29kZScsIC8vIOeUqOaIt+W/veeVpeeahOeJiOacrFxyXG4gICAgRk9SQ0VfVVBEQVRFX1JFUVVJUkVEOiAnZm9yY2VfdXBkYXRlX3JlcXVpcmVkJywgLy8g5piv5ZCm6ZyA6KaB5by65Yi25pu05pawXHJcbiAgICBcclxuICAgIC8vIOeUqOaIt+WBj+Wlveiuvue9rlxyXG4gICAgVklCUkFUSU9OX0VOQUJMRUQ6ICd2aWJyYXRpb25fZW5hYmxlZCcsIC8vIOeCueWHu+mch+WKqOW8gOWFs1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS42LjhcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNi44XCI7IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJcIj5cclxuICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uL2JhY2sucG5nXCIgY2xhc3M9XCJwYWdlLWhlYWRlci1iYWNrLWJ1dHRvblwiIG9uY2xpY2s9XCJnb0JhY2tcIj48L2ltYWdlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGUtdGltZVwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLXRpbWUtZGlzcGxheVwiPnt7IHRpbWUgfX08L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtaGVhZGVyLXRpdGxlXCI+5pu05aSa6YCJ6aG5PC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtbGlzdFwiPlxyXG4gICAgICAgIDwhLS0g6ZyH5Yqo5byA5YWzIC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nLWl0ZW1cIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic2V0dGluZy1sYWJlbFwiPueCueWHu+mch+WKqDwvdGV4dD5cclxuICAgICAgICAgIDxzd2l0Y2ggXHJcbiAgICAgICAgICAgIGNoZWNrZWQ9XCJ7eyB2aWJyYXRpb25FbmFibGVkIH19XCIgXHJcbiAgICAgICAgICAgIGNsYXNzPVwidmlicmF0aW9uLXN3aXRjaFwiXHJcbiAgICAgICAgICAgIEBjaGFuZ2U9XCJvblZpYnJhdGlvbkNoYW5nZVwiPlxyXG4gICAgICAgICAgPC9zd2l0Y2g+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPCEtLSDpnIfliqjor7TmmI4gLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmctZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiZGVzY3JpcHRpb24tdGV4dFwiPuW8gOWQr+WQju+8jOeCueWHu+WuoOeJqeaXtuS8muaciei9u+W+rumch+WKqOWPjemmiDwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8IS0tIOajgOafpeabtOaWsOaMiemSriAtLT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidXBkYXRlLWJ1dHRvblwiIG9uY2xpY2s9XCJjaGVja1VwZGF0ZVwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJ1cGRhdGUtYnV0dG9uLXRleHRcIj7mo4Dmn6Xmm7TmlrA8L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGU+XHJcbiAgLnBhZ2UtY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAucGFnZS1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLnBhZ2UtdGltZS1kaXNwbGF5IHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIH1cclxuICAucGFnZS1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAucGFnZS1oZWFkZXItYmFjay1idXR0b24ge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIC5wYWdlLWhlYWRlci10aXRsZSB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICB9XHJcbiAgLmhlYWRlci10aXRsZS10aW1lIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAucGFnZS1jb250ZW50IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxuICAuc2V0dGluZ3MtbGlzdCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbiAgLnNldHRpbmctaXRlbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAuc2V0dGluZy1sYWJlbCB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgLnZpYnJhdGlvbi1zd2l0Y2gge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB0cmFjay1jb2xvcjogIzRDRDk2NDtcclxuICAgIHRodW1iLWNvbG9yOiAjRkZGRkZGO1xyXG4gIH1cclxuICAuc2V0dGluZy1kZXNjcmlwdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIC5kZXNjcmlwdGlvbi10ZXh0IHtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxuICAudXBkYXRlLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIC51cGRhdGUtYnV0dG9uLXRleHQge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcclxuICBpbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xyXG4gIGltcG9ydCB2aWJyYXRvciBmcm9tICdAc3lzdGVtLnZpYnJhdG9yJztcclxuICBpbXBvcnQgcHJvbXB0IGZyb20gJ0BzeXN0ZW0ucHJvbXB0JztcclxuICBpbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuLi9jb21tb24vanMvY29uZmlnLmpzJztcclxuICBpbXBvcnQgQXBpU2VydmljZSBmcm9tICcuLi9jb21tb24vanMvYXBpLXNlcnZpY2UuanMnO1xyXG5cclxuICAvLyBQcm9taXNpZmllZCBoZWxwZXIgZm9yIHN0b3JhZ2UuZ2V0XHJcbiAgY29uc3QgX3Byb21pc2lmaWVkU3RvcmFnZUdldCA9IChrZXkpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBzdG9yYWdlLmdldCh7XHJcbiAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHJlc29sdmUoZGF0YSksXHJcbiAgICAgICAgZmFpbDogKCkgPT4gcmVzb2x2ZShudWxsKVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIFByb21pc2lmaWVkIGhlbHBlciBmb3Igc3RvcmFnZS5zZXRcclxuICBjb25zdCBfcHJvbWlzaWZpZWRTdG9yYWdlU2V0ID0gKGtleSwgdmFsdWUpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHN0b3JhZ2Uuc2V0KHtcclxuICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcclxuICAgICAgICBmYWlsOiAoZXJyLCBjb2RlKSA9PiByZWplY3QobmV3IEVycm9yKGBTdG9yYWdlLnNldCBmYWlsZWQ6ICR7ZXJyfSAoJHtjb2RlfSlgKSlcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRpbWU6ICcwMDowMCcsXHJcbiAgICAgIHZpYnJhdGlvbkVuYWJsZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG9uSW5pdCgpIHtcclxuICAgICAgdGhpcy51cGRhdGVUaW1lKCk7XHJcbiAgICAgIHRoaXMubG9hZFNldHRpbmdzKCk7XHJcbiAgICAgIHNldEludGVydmFsKHRoaXMudXBkYXRlVGltZSwgMTAwMDApO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdXBkYXRlVGltZSgpIHtcclxuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgY29uc3QgaG91cnMgPSBub3cuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgdGhpcy50aW1lID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYXN5bmMgbG9hZFNldHRpbmdzKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSBhd2FpdCBfcHJvbWlzaWZpZWRTdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuVklCUkFUSU9OX0VOQUJMRUQpO1xyXG4gICAgICAgIC8vIOm7mOiupOW8gOWQr+mch+WKqO+8jOWPquacieaYjuehruiuvue9ruS4uiAnZmFsc2UnIOaXtuaJjeWFs+mXrVxyXG4gICAgICAgIHRoaXMudmlicmF0aW9uRW5hYmxlZCA9IHNldHRpbmcgIT09ICdmYWxzZSc7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tNb3JlT3B0aW9uc10gTG9hZGVkIHZpYnJhdGlvbiBzZXR0aW5nOicsIHRoaXMudmlicmF0aW9uRW5hYmxlZCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdbTW9yZU9wdGlvbnNdIEZhaWxlZCB0byBsb2FkIHNldHRpbmdzOicsIGUpO1xyXG4gICAgICAgIHRoaXMudmlicmF0aW9uRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGFzeW5jIG9uVmlicmF0aW9uQ2hhbmdlKGUpIHtcclxuICAgICAgdGhpcy52aWJyYXRpb25FbmFibGVkID0gZS5jaGVja2VkO1xyXG4gICAgICBcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBfcHJvbWlzaWZpZWRTdG9yYWdlU2V0KFxyXG4gICAgICAgICAgQ09ORklHLlNUT1JBR0VfS0VZUy5WSUJSQVRJT05fRU5BQkxFRCwgXHJcbiAgICAgICAgICB0aGlzLnZpYnJhdGlvbkVuYWJsZWQudG9TdHJpbmcoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tNb3JlT3B0aW9uc10gU2F2ZWQgdmlicmF0aW9uIHNldHRpbmc6JywgdGhpcy52aWJyYXRpb25FbmFibGVkKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDlvIDlkK/ml7bnu5nnlKjmiLfkuIDkuKrpnIfliqjlj43ppohcclxuICAgICAgICBpZiAodGhpcy52aWJyYXRpb25FbmFibGVkKSB7XHJcbiAgICAgICAgICB2aWJyYXRvci52aWJyYXRlKHtcclxuICAgICAgICAgICAgbW9kZTogJ3Nob3J0J1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignW01vcmVPcHRpb25zXSBGYWlsZWQgdG8gc2F2ZSB2aWJyYXRpb24gc2V0dGluZzonLCBlKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ29CYWNrKCkge1xyXG4gICAgICByb3V0ZXIuYmFjaygpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy8g5qOA5p+l5pu05pawXHJcbiAgICBhc3luYyBjaGVja1VwZGF0ZSgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1tNb3JlT3B0aW9uc10gQ2hlY2tpbmcgZm9yIHVwZGF0ZXMuLi4nKTtcclxuICAgICAgXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICBtZXNzYWdlOiAn5q2j5Zyo5qOA5p+l5pu05pawLi4uJyxcclxuICAgICAgICAgIGR1cmF0aW9uOiAxNTAwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY3VycmVudFZlcnNpb25Db2RlID0gQ09ORklHLkFQUC5WRVJTSU9OX0NPREU7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5jaGVja0FwcFVwZGF0ZShjdXJyZW50VmVyc2lvbkNvZGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbTW9yZU9wdGlvbnNdIFVwZGF0ZSBjaGVjayByZXN1bHQ6JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzICYmIHJlc3VsdC5oYXNVcGRhdGUgJiYgcmVzdWx0LnVwZGF0ZUluZm8pIHtcclxuICAgICAgICAgIGNvbnN0IHZlcnNpb25OYW1lID0gcmVzdWx0LnVwZGF0ZUluZm8udmVyc2lvbl9uYW1lIHx8ICfmlrDniYjmnKwnO1xyXG4gICAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGDmnInmlrDniYjmnKzmm7TmlrDvvIHniYjmnKzlj7fvvJoke3ZlcnNpb25OYW1lfWAsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyNTAwXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICflvZPliY3lt7LmmK/mnIDmlrDniYjmnKwnLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tNb3JlT3B0aW9uc10gVXBkYXRlIGNoZWNrIGZhaWxlZDonLCBlcnJvcik7XHJcbiAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICBtZXNzYWdlOiAn5qOA5p+l5pu05paw5aSx6LSlJyxcclxuICAgICAgICAgIGR1cmF0aW9uOiAxNTAwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PiJdLCJuYW1lcyI6WyJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfc3lzdGVtMiIsIl9zeXN0ZW0zIiwiX3N5c3RlbTQiLCJfY29uZmlnIiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIm93bktleXMiLCJyIiwidCIsIk9iamVjdCIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJvIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5IiwidmFsdWUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImkiLCJfdG9QcmltaXRpdmUiLCJTeW1ib2wiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJBcGlTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJiYXNlVXJsIiwiQ09ORklHIiwiU0VSVkVSIiwiQkFTRV9VUkwiLCJiYXNlSGVhZGVycyIsInJlcXVlc3QiLCJhY3Rpb24iLCJkYXRhIiwidXJsIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlciIsInJlc3BvbnNlVHlwZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwic3VjY2VzcyIsInJlc3BvbnNlIiwicmVzcG9uc2VEYXRhIiwiY29kZSIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiZmFpbCIsImdldFJhbmtpbmdzIiwibGltaXQiLCJyZXN1bHQiLCJyYW5raW5ncyIsIm1lc3NhZ2UiLCJzeW5jQ2xpY2tzIiwidXNlcklkIiwiY2xpY2tDb3VudCIsInVzZXJfaWQiLCJjbGlja19jb3VudCIsInN5bmNGcm9tU2VydmVyIiwibG9nIiwidXNlckluZm8iLCJjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkiLCJwZXROYW1lIiwicGV0X25hbWUiLCJpc0F2YWlsYWJsZSIsInNldFBldE5hbWUiLCJuZXdOYW1lIiwibmV3X25hbWUiLCJjaGVja0RldmljZVJlZ2lzdHJhdGlvbiIsImRldmljZUlkIiwiZGV2aWNlX2lkIiwiaXNfcmVnaXN0ZXJlZCIsImNhbl9hdXRvX2FjdGl2YXRlIiwicmVnaXN0ZXJBbmRHZXRVc2VySWQiLCJnZXRBbm5vdW5jZW1lbnRzIiwiYW5ub3VuY2VtZW50cyIsImNvdW50IiwidGltZXN0YW1wIiwiY2hlY2tBcHBVcGRhdGUiLCJjdXJyZW50VmVyc2lvbkNvZGUiLCJjdXJyZW50X3ZlcnNpb25fY29kZSIsImhhc191cGRhdGUiLCJ1cGRhdGVfaW5mbyIsImlzX2ZvcmNlX3VwZGF0ZSIsInVwZGF0ZUluZm8iLCJ2ZXJzaW9uX25hbWUiLCJ2ZXJzaW9uX2NvZGUiLCJ0aXRsZSIsImNoYW5nZWxvZyIsImRvd25sb2FkX3VybCIsImZvcmNlX3VwZGF0ZSIsIm1pbl9yZXF1aXJlZF92ZXJzaW9uIiwicmVsZWFzZV90aW1lIiwicmV0dXJuUmVzdWx0IiwiaGFzVXBkYXRlIiwiaXNGb3JjZVVwZGF0ZSIsImxhdGVzdFZlcnNpb25Db2RlIiwibGF0ZXN0X3ZlcnNpb25fY29kZSIsInN0YWNrIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiQVBQIiwiTkFNRSIsIlZFUlNJT04iLCJWRVJTSU9OX0NPREUiLCJNQVhfQ0xJQ0tTX1BFUl9CQVRDSCIsIlNZTkNfSU5URVJWQUwiLCJSQU5LX0xJTUlUIiwiQ0hFQ0tfVVBEQVRFX0lOVEVSVkFMIiwiQU5OT1VOQ0VNRU5UX0NBQ0hFX1RJTUUiLCJTVE9SQUdFX0tFWVMiLCJERVZJQ0VfSUQiLCJJU19MT0NBTExZX0FDVElWQVRFRCIsIlVTRVJfSU5GTyIsIlBFTkRJTkdfQ0xJQ0tTIiwiTEFTVF9TWU5DX1RJTUUiLCJUT1RBTF9DTElDS1MiLCJMQVNUX1VQREFURV9DSEVDS19USU1FIiwiTEFTVF9BTk5PVU5DRU1FTlRfRkVUQ0hfVElNRSIsIkNBQ0hFRF9BTk5PVU5DRU1FTlRTIiwiQ0FDSEVEX1VQREFURV9JTkZPIiwiSUdOT1JFRF9WRVJTSU9OIiwiRk9SQ0VfVVBEQVRFX1JFUVVJUkVEIiwiVklCUkFUSU9OX0VOQUJMRUQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX2FwaVNlcnZpY2UiLCJfcHJvbWlzaWZpZWRTdG9yYWdlR2V0Iiwia2V5Iiwic3RvcmFnZSIsImdldCIsIl9wcm9taXNpZmllZFN0b3JhZ2VTZXQiLCJzZXQiLCJlcnIiLCJ0aW1lIiwidmlicmF0aW9uRW5hYmxlZCIsIm9uSW5pdCIsInVwZGF0ZVRpbWUiLCJsb2FkU2V0dGluZ3MiLCJzZXRJbnRlcnZhbCIsIm5vdyIsIkRhdGUiLCJob3VycyIsImdldEhvdXJzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwic2V0dGluZyIsIm9uVmlicmF0aW9uQ2hhbmdlIiwiY2hlY2tlZCIsInZpYnJhdG9yIiwidmlicmF0ZSIsIm1vZGUiLCJnb0JhY2siLCJyb3V0ZXIiLCJiYWNrIiwiY2hlY2tVcGRhdGUiLCJwcm9tcHQiLCJzaG93VG9hc3QiLCJkdXJhdGlvbiIsInZlcnNpb25OYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFDQSxJQUFBQSxVQUFBQyx1QkFBQUMsZUFBQTt3QkFDQSxJQUFBQyxXQUFBRix1QkFBQUMsZUFBQTt3QkFDQSxJQUFBRSxXQUFBSCx1QkFBQUMsZUFBQTt3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