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
                                marginBottom: "20px",
                                flexShrink: 0
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
                                    "announcement-list"
                                ]
                            ],
                            {
                                width: "90%",
                                flexGrow: 1
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "list-item"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "180px",
                                backgroundColor: "#1a1a1a",
                                borderRadius: "15px",
                                marginBottom: "10px",
                                paddingTop: "15px",
                                paddingRight: "20px",
                                paddingBottom: "15px",
                                paddingLeft: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "item-content"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                justifyContent: "space-between",
                                width: "100%",
                                height: "100%"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "text-content"
                                ]
                            ],
                            {
                                flexDirection: "column"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "announcement-title"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "28px",
                                marginBottom: "8px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "announcement-body"
                                ]
                            ],
                            {
                                color: "#aaaaaa",
                                fontSize: "24px",
                                lines: 1,
                                textOverflow: "ellipsis"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "detail-button-container"
                                ]
                            ],
                            {
                                width: "100%",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                                marginTop: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "detail-button"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                backgroundColor: "#26a69a",
                                paddingTop: "8px",
                                paddingRight: "12px",
                                paddingBottom: "8px",
                                paddingLeft: "12px",
                                borderRadius: "10px",
                                fontSize: "24px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "status-container"
                                ]
                            ],
                            {
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                paddingTop: "20px",
                                paddingRight: "20px",
                                paddingBottom: "20px",
                                paddingLeft: "20px"
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
                                color: "#aaaaaa",
                                fontSize: "28px",
                                textAlign: "center"
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
                        var _apiService = _interopRequireDefault(__webpack_require__("./src/common/js/api-service.js"));
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
                            data: {
                                time: '00:00',
                                announcements: [],
                                statusMessage: '正在加载...'
                            },
                            onInit () {
                                this.updateTime();
                                setInterval(this.updateTime, 10000);
                                this.fetchAnnouncements();
                            },
                            updateTime () {
                                const now = new Date();
                                const hours = now.getHours().toString().padStart(2, '0');
                                const minutes = now.getMinutes().toString().padStart(2, '0');
                                this.time = `${hours}:${minutes}`;
                            },
                            async fetchAnnouncements () {
                                console.log('[Announcement] Fetching announcements...');
                                const result = await _apiService.default.getAnnouncements(10);
                                console.log('[Announcement] API Response:', JSON.stringify(result));
                                if (result.success && result.announcements && result.announcements.length > 0) {
                                    this.announcements = result.announcements;
                                    this.statusMessage = '';
                                } else if (result.success && (!result.announcements || 0 === result.announcements.length)) this.statusMessage = '暂无公告';
                                else {
                                    console.error("[Announcement] Failed to fetch announcements:", result.error);
                                    this.statusMessage = '无法加载公告，请稍后重试。';
                                }
                            },
                            openDetail (index) {
                                const announcement = this.announcements[index];
                                if (announcement) _system.default.push({
                                    uri: 'announcement-detail',
                                    params: {
                                        announcement: announcement
                                    }
                                });
                            },
                            goBack () {
                                _system.default.back();
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
                        return aiot.__ce__("stack", {
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
                                    style: {
                                        width: "100%",
                                        height: "100%",
                                        flexDirection: "column",
                                        alignItems: "center"
                                    }
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
                                                    value: "公告"
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
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.announcements.length > 0;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("list", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "announcement-list"
                                                    ]
                                                }
                                            }, [
                                                aiot.__cf__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        exp: function() {
                                                            return _vm_.announcements;
                                                        },
                                                        key: "$idx",
                                                        value: "$item"
                                                    }
                                                }, function($idx, $item) {
                                                    return [
                                                        aiot.__ce__("list-item", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                classList: [
                                                                    "list-item"
                                                                ],
                                                                type: "default"
                                                            }
                                                        }, [
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "item-content"
                                                                    ]
                                                                }
                                                            }, [
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "text-content"
                                                                        ]
                                                                    }
                                                                }, [
                                                                    aiot.__ce__("text", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "announcement-title"
                                                                            ],
                                                                            value: function() {
                                                                                return $item.title;
                                                                            }
                                                                        }
                                                                    }, []),
                                                                    aiot.__ce__("text", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "announcement-body"
                                                                            ],
                                                                            value: function() {
                                                                                return $item.content;
                                                                            }
                                                                        }
                                                                    }, [])
                                                                ]),
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "detail-button-container"
                                                                        ]
                                                                    }
                                                                }, [
                                                                    aiot.__ce__("text", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "detail-button"
                                                                            ],
                                                                            events: {
                                                                                click: function(evt) {
                                                                                    return _vm_.openDetail($idx, evt);
                                                                                }
                                                                            },
                                                                            value: "查看详情"
                                                                        }
                                                                    }, [])
                                                                ])
                                                            ])
                                                        ])
                                                    ];
                                                })
                                            ])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return 0 === _vm_.announcements.length && _vm_.statusMessage;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "status-container"
                                                    ]
                                                }
                                            }, [
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
                                            ])
                                        ];
                                    })
                                ])
                            ]),
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
                                    },
                                    style: {
                                        top: "5px"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3VuY2VtZW50XFxpbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9hcGktc2VydmljZS5qcyIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvY29uZmlnLmpzIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvYW5ub3VuY2VtZW50L2luZGV4LnV4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwaS1zZXJ2aWNlLmpzXHJcbmltcG9ydCBmZXRjaCBmcm9tICdAc3lzdGVtLmZldGNoJztcclxuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XHJcbmltcG9ydCBwcm9tcHQgZnJvbSAnQHN5c3RlbS5wcm9tcHQnO1xyXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XHJcblxyXG5jbGFzcyBBcGlTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIOS4rei9rOacjeWKoeWZqOWcsOWdgCAtIOS7jiBjb25maWcuanMg6K+75Y+WXHJcbiAgICB0aGlzLmJhc2VVcmwgPSBDT05GSUcuU0VSVkVSLkJBU0VfVVJMO1xyXG4gICAgdGhpcy5iYXNlSGVhZGVycyA9IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOmAmueUqOivt+axguaWueazlSAtIOmAmui/h+S4rei9rOacjeWKoeWZqOi9rOWPkVxyXG4gIGFzeW5jIHJlcXVlc3QoYWN0aW9uLCBkYXRhID0ge30pIHtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vYXBpYDtcclxuICAgIFxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyOiB0aGlzLmJhc2VIZWFkZXJzLFxyXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xyXG4gICAgfTtcclxuXHJcbiAgICBvcHRpb25zLmRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IGFjdGlvbiwgLi4uZGF0YSB9KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZXRjaC5mZXRjaCh7XHJcbiAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XHJcblxyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUgPj0gMjAwICYmIHJlc3BvbnNlLmNvZGUgPCAzMDApIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZURhdGEpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBIVFRQIEVycm9yOiAke3Jlc3BvbnNlLmNvZGV9YCwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBIVFRQICR7cmVzcG9uc2UuY29kZX06ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2VEYXRhKX1gKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IChlcnJvciwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgLy8gREVUQUlMRUQgTE9HR0lORyBGT1IgTkVUV09SSyBGQUlMVVJFU1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgW0FwaVNlcnZpY2VdIFJlcXVlc3QgRmFpbGVkLiBDb2RlOiAke2NvZGV9LCBFcnJvcjogJHtKU09OLnN0cmluZ2lmeShlcnJvcil9YCk7XHJcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZDogJHtlcnJvci5kYXRhIHx8ICdDb25uZWN0aW9uIGlzIGludmFsaWQnfWApKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyDojrflj5bmjpLooYzmppxcclxuICBhc3luYyBnZXRSYW5raW5ncyhsaW1pdCA9IDEwKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2dldF9yYW5raW5ncycsIHtcclxuICAgICAgICBsaW1pdDogbGltaXRcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIHJhbmtpbmdzOiByZXN1bHQucmFua2luZ3MgfHwgW11cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign6I635Y+W5o6S6KGM5qac5aSx6LSlOicsIGVycm9yKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIHJhbmtpbmdzOiBbXSxcclxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDkuIrmiqXngrnlh7vmrKHmlbBcclxuICBhc3luYyBzeW5jQ2xpY2tzKHVzZXJJZCwgY2xpY2tDb3VudCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0KCdzeW5jX2NsaWNrcycsIHtcclxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXHJcbiAgICAgICAgY2xpY2tfY291bnQ6IGNsaWNrQ291bnRcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfkuIrmiqXngrnlh7vmrKHmlbDlpLHotKU6JywgZXJyb3IpXHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5LuO5pyN5Yqh5Zmo5ZCM5q2l5pWw5o2uXHJcbiAgYXN5bmMgc3luY0Zyb21TZXJ2ZXIodXNlcklkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ3N5bmNfZnJvbV9zZXJ2ZXInLCB7XHJcbiAgICAgICAgdXNlcl9pZDogdXNlcklkXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfku47mnI3liqHlmajlkIzmraXmlbDmja7miJDlip86JywgcmVzdWx0LnVzZXJJbmZvKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1c2VySW5mbzogcmVzdWx0LnVzZXJJbmZvIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign5ZCM5q2l5pWw5o2u5aSx6LSlOicsIHJlc3VsdCA/IHJlc3VsdC5lcnJvciA6ICfmnKrnn6XplJnor68nKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IChyZXN1bHQgPyByZXN1bHQuZXJyb3IgOiAn5pyN5Yqh5Zmo5pyq6L+U5Zue5oiQ5Yqf54q25oCBJykgfTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5LuO5pyN5Yqh5Zmo5ZCM5q2l5pWw5o2u5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDmo4Dmn6XlrqDnianlkI3mmK/lkKblj6/nlKhcclxuICBhc3luYyBjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkocGV0TmFtZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdjaGVja19wZXRfbmFtZScsIHtcclxuICAgICAgICBwZXRfbmFtZTogcGV0TmFtZVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgLi4ucmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfmo4Dmn6XlrqDnianlkI3lj6/nlKjmgKfml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UsIGlzQXZhaWxhYmxlOiBmYWxzZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5L+u5pS55a6g54mp5ZCNXHJcbiAgYXN5bmMgc2V0UGV0TmFtZSh1c2VySWQsIG5ld05hbWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnc2V0X3BldF9uYW1lJywge1xyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcclxuICAgICAgICBuZXdfbmFtZTogbmV3TmFtZVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S/ruaUueWuoOeJqeWQjeWksei0pTonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g6aKE5r+A5rS75qOA5p+lXHJcbiAgYXN5bmMgY2hlY2tEZXZpY2VSZWdpc3RyYXRpb24oZGV2aWNlSWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnY2hlY2tfcmVnaXN0cmF0aW9uJywge1xyXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWRcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfpooTmv4DmtLvmo4Dmn6XmiJDlip86JywgcmVzdWx0KTtcclxuICAgICAgLy8g55u05o6l6L+U5Zue5pyN5Yqh5Zmo55qE5Y6f5aeL5ZON5bqU77yMVUnlsYLmnJ/mnJvnmoTmmK/miYHlubPnu5PmnoRcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+mihOa/gOa0u+ajgOafpeaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XHJcbiAgICAgIC8vIOi/lOWbnuS4gOS4quWFvOWuueeahOmUmeivr+Wvueixoe+8jOmBv+WFjVVJ5bGC5bSp5rqDXHJcbiAgICAgIHJldHVybiB7IGlzX3JlZ2lzdGVyZWQ6IGZhbHNlLCBjYW5fYXV0b19hY3RpdmF0ZTogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDms6jlhozorr7lpIflubbojrflj5bnlKjmiLdJRFxyXG4gIGFzeW5jIHJlZ2lzdGVyQW5kR2V0VXNlcklkKGRldmljZUlkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBQYXNzIHRoZSBzZXJ2ZXIgcmVzcG9uc2UgZGlyZWN0bHkgdG8gdGhlIFVJIGxheWVyXHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3QoJ3JlZ2lzdGVyX2RldmljZV9hbmRfZ2V0X2lkJywge1xyXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWRcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfms6jlhozmiJbojrflj5bnlKjmiLdJROaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XHJcbiAgICAgIC8vIFJldHVybiBhIGNvbXBhdGlibGUgZXJyb3Igb2JqZWN0XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDojrflj5blhazlkYrliJfooahcclxuICBhc3luYyBnZXRBbm5vdW5jZW1lbnRzKGxpbWl0ID0gMTApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnZ2V0X2Fubm91bmNlbWVudHMnLCB7XHJcbiAgICAgICAgbGltaXQ6IGxpbWl0XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygnT3JpZ2luYWwgYW5ub3VuY2VtZW50IHJlc3VsdCBmcm9tIHNlcnZlcjonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogcmVzdWx0LnN1Y2Nlc3MgfHwgZmFsc2UsXHJcbiAgICAgICAgYW5ub3VuY2VtZW50czogcmVzdWx0LmFubm91bmNlbWVudHMgfHwgW10sXHJcbiAgICAgICAgY291bnQ6IHJlc3VsdC5jb3VudCB8fCAwLFxyXG4gICAgICAgIHRpbWVzdGFtcDogcmVzdWx0LnRpbWVzdGFtcCxcclxuICAgICAgICBlcnJvcjogcmVzdWx0LmVycm9yXHJcbiAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfojrflj5blhazlkYrlpLHotKU6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgIGFubm91bmNlbWVudHM6IFtdLFxyXG4gICAgICAgIGNvdW50OiAwXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDmo4Dmn6XlupTnlKjmm7TmlrBcclxuICBhc3luYyBjaGVja0FwcFVwZGF0ZShjdXJyZW50VmVyc2lvbkNvZGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgY2FsbGVkIHdpdGggY3VycmVudFZlcnNpb25Db2RlOicsIGN1cnJlbnRWZXJzaW9uQ29kZSk7XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnY2hlY2tfdXBkYXRlJywge1xyXG4gICAgICAgIGN1cnJlbnRfdmVyc2lvbl9jb2RlOiBjdXJyZW50VmVyc2lvbkNvZGVcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZygnW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIHJhdyByZXN1bHQ6JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgaGFzX3VwZGF0ZTonLCByZXN1bHQuaGFzX3VwZGF0ZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgdXBkYXRlX2luZm86JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LnVwZGF0ZV9pbmZvKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgaXNfZm9yY2VfdXBkYXRlOicsIHJlc3VsdC5pc19mb3JjZV91cGRhdGUpO1xyXG4gICAgICBcclxuICAgICAgLy8g56Gu5L+dIHVwZGF0ZUluZm8g5YyF5ZCr5omA5pyJ5b+F6KaB5a2X5q61XHJcbiAgICAgIGxldCB1cGRhdGVJbmZvID0gbnVsbDtcclxuICAgICAgaWYgKHJlc3VsdC51cGRhdGVfaW5mbykge1xyXG4gICAgICAgIHVwZGF0ZUluZm8gPSB7XHJcbiAgICAgICAgICB2ZXJzaW9uX25hbWU6IHJlc3VsdC51cGRhdGVfaW5mby52ZXJzaW9uX25hbWUgfHwgJycsXHJcbiAgICAgICAgICB2ZXJzaW9uX2NvZGU6IHJlc3VsdC51cGRhdGVfaW5mby52ZXJzaW9uX2NvZGUgfHwgMCxcclxuICAgICAgICAgIHRpdGxlOiByZXN1bHQudXBkYXRlX2luZm8udGl0bGUgfHwgJ+WPkeeOsOaWsOeJiOacrCcsXHJcbiAgICAgICAgICBjaGFuZ2Vsb2c6IHJlc3VsdC51cGRhdGVfaW5mby5jaGFuZ2Vsb2cgfHwgJycsXHJcbiAgICAgICAgICBkb3dubG9hZF91cmw6IHJlc3VsdC51cGRhdGVfaW5mby5kb3dubG9hZF91cmwgfHwgJycsXHJcbiAgICAgICAgICBmb3JjZV91cGRhdGU6IHJlc3VsdC51cGRhdGVfaW5mby5mb3JjZV91cGRhdGUgfHwgZmFsc2UsXHJcbiAgICAgICAgICBtaW5fcmVxdWlyZWRfdmVyc2lvbjogcmVzdWx0LnVwZGF0ZV9pbmZvLm1pbl9yZXF1aXJlZF92ZXJzaW9uIHx8IDAsXHJcbiAgICAgICAgICByZWxlYXNlX3RpbWU6IHJlc3VsdC51cGRhdGVfaW5mby5yZWxlYXNlX3RpbWUgfHwgJydcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgdXBkYXRlSW5mbyBjb25zdHJ1Y3RlZDonLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVJbmZvKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tBcGlTZXJ2aWNlXSBjaGVja0FwcFVwZGF0ZSB1cGRhdGVfaW5mbyBpcyBudWxsIG9yIHVuZGVmaW5lZCcpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCByZXR1cm5SZXN1bHQgPSB7XHJcbiAgICAgICAgc3VjY2VzczogcmVzdWx0LnN1Y2Nlc3MgfHwgZmFsc2UsXHJcbiAgICAgICAgaGFzVXBkYXRlOiByZXN1bHQuaGFzX3VwZGF0ZSB8fCBmYWxzZSxcclxuICAgICAgICB1cGRhdGVJbmZvOiB1cGRhdGVJbmZvLFxyXG4gICAgICAgIGlzRm9yY2VVcGRhdGU6IHJlc3VsdC5pc19mb3JjZV91cGRhdGUgfHwgZmFsc2UsXHJcbiAgICAgICAgY3VycmVudFZlcnNpb25Db2RlOiByZXN1bHQuY3VycmVudF92ZXJzaW9uX2NvZGUgfHwgY3VycmVudFZlcnNpb25Db2RlLFxyXG4gICAgICAgIGxhdGVzdFZlcnNpb25Db2RlOiByZXN1bHQubGF0ZXN0X3ZlcnNpb25fY29kZSB8fCBjdXJyZW50VmVyc2lvbkNvZGUsXHJcbiAgICAgICAgZXJyb3I6IHJlc3VsdC5lcnJvclxyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ1tBcGlTZXJ2aWNlXSBjaGVja0FwcFVwZGF0ZSByZXR1cm4gcmVzdWx0OicsIEpTT04uc3RyaW5naWZ5KHJldHVyblJlc3VsdCkpO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHJldHVyblJlc3VsdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tBcGlTZXJ2aWNlXSBjaGVja0FwcFVwZGF0ZSBlcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tBcGlTZXJ2aWNlXSBjaGVja0FwcFVwZGF0ZSBlcnJvciBtZXNzYWdlOicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgZXJyb3Igc3RhY2s6JywgZXJyb3Iuc3RhY2spO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgIGhhc1VwZGF0ZTogZmFsc2UsXHJcbiAgICAgICAgaXNGb3JjZVVwZGF0ZTogZmFsc2VcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBcGlTZXJ2aWNlKClcclxuIiwiLy8gY29uZmlnLmpzXHJcbmV4cG9ydCBjb25zdCBDT05GSUcgPSB7XHJcbiAgLy8g5Lit6L2s5pyN5Yqh5Zmo6YWN572uXHJcbiAgU0VSVkVSOiB7XHJcbiAgICBCQVNFX1VSTDogJ2h0dHA6Ly8xMDMuMjA1LjI1My44NzoyMjIwNydcclxuICB9LFxyXG4gIFxyXG4gIC8vIOazqOaEj++8mlVSTCDliY3nvIDlnKggYXBpLXNlcnZpY2UuanMg5Lit56Gs57yW56CB5LqGXHJcbiAgLy8g6L+Z6YeM5LiN5YaN6ZyA6KaB6YWN572uXHJcbiAgXHJcbiAgLy8g5bqU55So6YWN572uXHJcbiAgQVBQOiB7XHJcbiAgICBOQU1FOiAnQmFuZFBldCcsXHJcbiAgICBWRVJTSU9OOiAnMC40LjMgQWxwaGEnLFxyXG4gICAgVkVSU0lPTl9DT0RFOiA0MywgIC8vIOeUqOS6jueJiOacrOavlOi+g+eahOaVsOWtl++8iDAuNC4zIC0+IDQz77yJXHJcbiAgICBNQVhfQ0xJQ0tTX1BFUl9CQVRDSDogNTAsXHJcbiAgICBTWU5DX0lOVEVSVkFMOiAzMDAwMCwgIC8vIDMw56eS6Ieq5Yqo5ZCM5q2l5LiA5qyhXHJcbiAgICBSQU5LX0xJTUlUOiAxMCxcclxuICAgIFxyXG4gICAgLy8g5pu05paw5qOA5p+l6YWN572uXHJcbiAgICBDSEVDS19VUERBVEVfSU5URVJWQUw6IDM2MDAwMDAsIC8vIDHlsI/ml7bmo4Dmn6XkuIDmrKHmm7TmlrDvvIgzNjAwMDAw5q+r56eS77yJXHJcbiAgICBBTk5PVU5DRU1FTlRfQ0FDSEVfVElNRTogMzAwMDAwLCAvLyA15YiG6ZKf57yT5a2Y5YWs5ZGKXHJcbiAgfSxcclxuICBcclxuICAvLyDlrZjlgqjplK7lkI1cclxuICBTVE9SQUdFX0tFWVM6IHtcclxuICAgIERFVklDRV9JRDogJ2RldmljZV9pZCcsXHJcbiAgICBJU19MT0NBTExZX0FDVElWQVRFRDogJ2lzX2xvY2FsbHlfYWN0aXZhdGVkJyxcclxuICAgIFVTRVJfSU5GTzogJ3VzZXJfaW5mbycsXHJcbiAgICBQRU5ESU5HX0NMSUNLUzogJ3BlbmRpbmdfY2xpY2tzJyxcclxuICAgIExBU1RfU1lOQ19USU1FOiAnbGFzdF9zeW5jX3RpbWUnLFxyXG4gICAgVE9UQUxfQ0xJQ0tTOiAndG90YWxfY2xpY2tzJyxcclxuICAgIFxyXG4gICAgLy8g5pu05paw55u45YWz5a2Y5YKo6ZSuXHJcbiAgICBMQVNUX1VQREFURV9DSEVDS19USU1FOiAnbGFzdF91cGRhdGVfY2hlY2tfdGltZScsXHJcbiAgICBMQVNUX0FOTk9VTkNFTUVOVF9GRVRDSF9USU1FOiAnbGFzdF9hbm5vdW5jZW1lbnRfZmV0Y2hfdGltZScsXHJcbiAgICBDQUNIRURfQU5OT1VOQ0VNRU5UUzogJ2NhY2hlZF9hbm5vdW5jZW1lbnRzJyxcclxuICAgIENBQ0hFRF9VUERBVEVfSU5GTzogJ2NhY2hlZF91cGRhdGVfaW5mbycsXHJcbiAgICBJR05PUkVEX1ZFUlNJT046ICdpZ25vcmVkX3ZlcnNpb25fY29kZScsIC8vIOeUqOaIt+W/veeVpeeahOeJiOacrFxyXG4gICAgRk9SQ0VfVVBEQVRFX1JFUVVJUkVEOiAnZm9yY2VfdXBkYXRlX3JlcXVpcmVkJywgLy8g5piv5ZCm6ZyA6KaB5by65Yi25pu05pawXHJcbiAgICBcclxuICAgIC8vIOeUqOaIt+WBj+Wlveiuvue9rlxyXG4gICAgVklCUkFUSU9OX0VOQUJMRUQ6ICd2aWJyYXRpb25fZW5hYmxlZCcsIC8vIOeCueWHu+mch+WKqOW8gOWFs1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS42LjhcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNi44XCI7IiwiPHRlbXBsYXRlPlxuICA8c3RhY2sgY2xhc3M9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgIDwhLS0gTWFpbiBjb250ZW50IGNvbnRhaW5lciAtLT5cbiAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZS10aW1lXCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtdGltZS1kaXNwbGF5XCI+e3sgdGltZSB9fTwvdGV4dD5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicGFnZS1oZWFkZXItdGl0bGVcIj7lhazlkYo8L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50XCI+XG4gICAgICAgIDxsaXN0IGNsYXNzPVwiYW5ub3VuY2VtZW50LWxpc3RcIiBpZj1cInt7IGFubm91bmNlbWVudHMubGVuZ3RoID4gMCB9fVwiPlxuICAgICAgICAgIDxsaXN0LWl0ZW0gZm9yPVwie3thbm5vdW5jZW1lbnRzfX1cIiBjbGFzcz1cImxpc3QtaXRlbVwiIHR5cGU9XCJkZWZhdWx0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImFubm91bmNlbWVudC10aXRsZVwiPnt7JGl0ZW0udGl0bGV9fTwvdGV4dD5cbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImFubm91bmNlbWVudC1ib2R5XCI+e3skaXRlbS5jb250ZW50fX08L3RleHQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8IS0tIEFsdGVybmF0aXZlOiBcIkRldGFpbHNcIiBidXR0b24gLS0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiZGV0YWlsLWJ1dHRvblwiIG9uY2xpY2s9XCJvcGVuRGV0YWlsKCRpZHgpXCI+5p+l55yL6K+m5oOFPC90ZXh0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGlzdC1pdGVtPlxuICAgICAgICA8L2xpc3Q+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0dXMtY29udGFpbmVyXCIgaWY9XCJ7eyBhbm5vdW5jZW1lbnRzLmxlbmd0aCA9PT0gMCAmJiBzdGF0dXNNZXNzYWdlIH19XCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJzdGF0dXMtdGV4dFwiPnt7IHN0YXR1c01lc3NhZ2UgfX08L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPCEtLSBCYWNrIEJ1dHRvbiBvbiB0b3AgbGF5ZXIgZm9yIGd1YXJhbnRlZWQgY2xpY2thYmlsaXR5IC0tPlxuICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vYmFjay5wbmdcIiBjbGFzcz1cInBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uXCIgb25jbGljaz1cImdvQmFja1wiIHN0eWxlPVwidG9wOiA1cHg7XCI+PC9pbWFnZT5cbiAgPC9zdGFjaz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBmbGV4LXNocmluazogMDsgXG4gIH1cbiAgLnBhZ2UtdGltZS1kaXNwbGF5IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB9XG4gIC5wYWdlLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5wYWdlLWhlYWRlci1iYWNrLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cbiAgLmhlYWRlci10aXRsZS10aW1lIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnBhZ2UtY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4OiAxO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsOyBcbiAgfVxuICAuYW5ub3VuY2VtZW50LWxpc3Qge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG4gIC5saXN0LWl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTgwcHg7IC8qIEluY3JlYXNlZCBoZWlnaHQgZm9yIHRoZSBidXR0b24gKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIH1cbiAgLml0ZW0tY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIFRvIHB1c2ggYnV0dG9uIHRvIGJvdHRvbSAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAudGV4dC1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5hbm5vdW5jZW1lbnQtdGl0bGUge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cbiAgLmFubm91bmNlbWVudC1ib2R5IHtcbiAgICBjb2xvcjogI0FBQUFBQTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZXM6IDE7IFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIC5kZXRhaWwtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyBcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC5kZXRhaWwtYnV0dG9uIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZBNjlBO1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIC5zdGF0dXMtY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICAuc3RhdHVzLXRleHQge1xuICAgIGNvbG9yOiAjQUFBQUFBO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xuICBpbXBvcnQgQXBpU2VydmljZSBmcm9tICcuLi9jb21tb24vanMvYXBpLXNlcnZpY2UuanMnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhOiB7XG4gICAgICB0aW1lOiAnMDA6MDAnLFxuICAgICAgYW5ub3VuY2VtZW50czogW10sXG4gICAgICBzdGF0dXNNZXNzYWdlOiAn5q2j5Zyo5Yqg6L29Li4uJ1xuICAgIH0sXG4gICAgb25Jbml0KCkge1xuICAgICAgdGhpcy51cGRhdGVUaW1lKCk7XG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVRpbWUsIDEwMDAwKTtcbiAgICAgIHRoaXMuZmV0Y2hBbm5vdW5jZW1lbnRzKCk7XG4gICAgfSxcbiAgICB1cGRhdGVUaW1lKCkge1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgY29uc3QgbWludXRlcyA9IG5vdy5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgdGhpcy50aW1lID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xuICAgIH0sXG4gICAgYXN5bmMgZmV0Y2hBbm5vdW5jZW1lbnRzKCkge1xuICAgICAgY29uc29sZS5sb2coJ1tBbm5vdW5jZW1lbnRdIEZldGNoaW5nIGFubm91bmNlbWVudHMuLi4nKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaVNlcnZpY2UuZ2V0QW5ub3VuY2VtZW50cygxMCk7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKCdbQW5ub3VuY2VtZW50XSBBUEkgUmVzcG9uc2U6JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cbiAgICAgIGlmIChyZXN1bHQuc3VjY2VzcyAmJiByZXN1bHQuYW5ub3VuY2VtZW50cyAmJiByZXN1bHQuYW5ub3VuY2VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuYW5ub3VuY2VtZW50cyA9IHJlc3VsdC5hbm5vdW5jZW1lbnRzO1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAnJztcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnN1Y2Nlc3MgJiYgKCFyZXN1bHQuYW5ub3VuY2VtZW50cyB8fCByZXN1bHQuYW5ub3VuY2VtZW50cy5sZW5ndGggPT09IDApKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICfmmoLml6DlhazlkYonO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltBbm5vdW5jZW1lbnRdIEZhaWxlZCB0byBmZXRjaCBhbm5vdW5jZW1lbnRzOlwiLCByZXN1bHQuZXJyb3IpO1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn5peg5rOV5Yqg6L295YWs5ZGK77yM6K+356iN5ZCO6YeN6K+V44CCJztcbiAgICAgIH1cbiAgICB9LFxuICAgIG9wZW5EZXRhaWwoaW5kZXgpIHtcbiAgICAgIGNvbnN0IGFubm91bmNlbWVudCA9IHRoaXMuYW5ub3VuY2VtZW50c1tpbmRleF07XG4gICAgICBpZiAoYW5ub3VuY2VtZW50KSB7XG4gICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICB1cmk6ICdhbm5vdW5jZW1lbnQtZGV0YWlsJyxcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIGFubm91bmNlbWVudDogYW5ub3VuY2VtZW50XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdvQmFjaygpIHtcbiAgICAgIHJvdXRlci5iYWNrKCk7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfc3lzdGVtMiIsIl9zeXN0ZW0zIiwiX3N5c3RlbTQiLCJfY29uZmlnIiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIm93bktleXMiLCJyIiwidCIsIk9iamVjdCIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJvIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5IiwidmFsdWUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImkiLCJfdG9QcmltaXRpdmUiLCJTeW1ib2wiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJBcGlTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJiYXNlVXJsIiwiQ09ORklHIiwiU0VSVkVSIiwiQkFTRV9VUkwiLCJiYXNlSGVhZGVycyIsInJlcXVlc3QiLCJhY3Rpb24iLCJkYXRhIiwidXJsIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlciIsInJlc3BvbnNlVHlwZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwic3VjY2VzcyIsInJlc3BvbnNlIiwicmVzcG9uc2VEYXRhIiwiY29kZSIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiZmFpbCIsImdldFJhbmtpbmdzIiwibGltaXQiLCJyZXN1bHQiLCJyYW5raW5ncyIsIm1lc3NhZ2UiLCJzeW5jQ2xpY2tzIiwidXNlcklkIiwiY2xpY2tDb3VudCIsInVzZXJfaWQiLCJjbGlja19jb3VudCIsInN5bmNGcm9tU2VydmVyIiwibG9nIiwidXNlckluZm8iLCJjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkiLCJwZXROYW1lIiwicGV0X25hbWUiLCJpc0F2YWlsYWJsZSIsInNldFBldE5hbWUiLCJuZXdOYW1lIiwibmV3X25hbWUiLCJjaGVja0RldmljZVJlZ2lzdHJhdGlvbiIsImRldmljZUlkIiwiZGV2aWNlX2lkIiwiaXNfcmVnaXN0ZXJlZCIsImNhbl9hdXRvX2FjdGl2YXRlIiwicmVnaXN0ZXJBbmRHZXRVc2VySWQiLCJnZXRBbm5vdW5jZW1lbnRzIiwiYW5ub3VuY2VtZW50cyIsImNvdW50IiwidGltZXN0YW1wIiwiY2hlY2tBcHBVcGRhdGUiLCJjdXJyZW50VmVyc2lvbkNvZGUiLCJjdXJyZW50X3ZlcnNpb25fY29kZSIsImhhc191cGRhdGUiLCJ1cGRhdGVfaW5mbyIsImlzX2ZvcmNlX3VwZGF0ZSIsInVwZGF0ZUluZm8iLCJ2ZXJzaW9uX25hbWUiLCJ2ZXJzaW9uX2NvZGUiLCJ0aXRsZSIsImNoYW5nZWxvZyIsImRvd25sb2FkX3VybCIsImZvcmNlX3VwZGF0ZSIsIm1pbl9yZXF1aXJlZF92ZXJzaW9uIiwicmVsZWFzZV90aW1lIiwicmV0dXJuUmVzdWx0IiwiaGFzVXBkYXRlIiwiaXNGb3JjZVVwZGF0ZSIsImxhdGVzdFZlcnNpb25Db2RlIiwibGF0ZXN0X3ZlcnNpb25fY29kZSIsInN0YWNrIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiQVBQIiwiTkFNRSIsIlZFUlNJT04iLCJWRVJTSU9OX0NPREUiLCJNQVhfQ0xJQ0tTX1BFUl9CQVRDSCIsIlNZTkNfSU5URVJWQUwiLCJSQU5LX0xJTUlUIiwiQ0hFQ0tfVVBEQVRFX0lOVEVSVkFMIiwiQU5OT1VOQ0VNRU5UX0NBQ0hFX1RJTUUiLCJTVE9SQUdFX0tFWVMiLCJERVZJQ0VfSUQiLCJJU19MT0NBTExZX0FDVElWQVRFRCIsIlVTRVJfSU5GTyIsIlBFTkRJTkdfQ0xJQ0tTIiwiTEFTVF9TWU5DX1RJTUUiLCJUT1RBTF9DTElDS1MiLCJMQVNUX1VQREFURV9DSEVDS19USU1FIiwiTEFTVF9BTk5PVU5DRU1FTlRfRkVUQ0hfVElNRSIsIkNBQ0hFRF9BTk5PVU5DRU1FTlRTIiwiQ0FDSEVEX1VQREFURV9JTkZPIiwiSUdOT1JFRF9WRVJTSU9OIiwiRk9SQ0VfVVBEQVRFX1JFUVVJUkVEIiwiVklCUkFUSU9OX0VOQUJMRUQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX2FwaVNlcnZpY2UiLCJ0aW1lIiwic3RhdHVzTWVzc2FnZSIsIm9uSW5pdCIsInVwZGF0ZVRpbWUiLCJzZXRJbnRlcnZhbCIsImZldGNoQW5ub3VuY2VtZW50cyIsIm5vdyIsIkRhdGUiLCJob3VycyIsImdldEhvdXJzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwib3BlbkRldGFpbCIsImluZGV4IiwiYW5ub3VuY2VtZW50Iiwicm91dGVyIiwidXJpIiwicGFyYW1zIiwiZ29CYWNrIiwiYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQ0EsSUFBQUEsVUFBQUMsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUMsV0FBQUYsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUUsV0FBQUgsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUcsV0FBQUosdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUksVUFBQUMsb0JBQUE7d0JBQXFDLFNBQUFOLHVCQUFBTyxDQUFBOzRCQUFBLE9BQUFBLEtBQUFBLEVBQUFDLFVBQUEsR0FBQUQsSUFBQTtnQ0FBQUUsU0FBQUY7NEJBQUE7d0JBQUE7d0JBQUEsU0FBQUcsUUFBQUgsQ0FBQSxFQUFBSSxDQUFBOzRCQUFBLElBQUFDLElBQUFDLE9BQUFDLElBQUEsQ0FBQVA7NEJBQUEsSUFBQU0sT0FBQUUscUJBQUE7Z0NBQUEsSUFBQUMsSUFBQUgsT0FBQUUscUJBQUEsQ0FBQVI7Z0NBQUFJLEtBQUFLLENBQUFBLElBQUFBLEVBQUFDLE1B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