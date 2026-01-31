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
                                    "page-header-back-arrow"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "50px"
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
                                    "leaderboard-list"
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
                                height: "120px",
                                backgroundColor: "#1a1a1a",
                                borderRadius: "15px",
                                marginBottom: "10px",
                                paddingTop: "0",
                                paddingRight: "20px",
                                paddingBottom: "0",
                                paddingLeft: "20px",
                                justifyContent: "flex-start",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "rank-info"
                                ]
                            ],
                            {
                                flexDirection: "row",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "rank-number"
                                ]
                            ],
                            {
                                color: "#aaaaaa",
                                fontSize: "30px",
                                marginRight: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "name-and-score"
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
                                    "rank-name"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "30px",
                                marginBottom: "5px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "rank-score"
                                ]
                            ],
                            {
                                color: "#aaaaaa",
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
                                rankings: [],
                                statusMessage: '正在加载...'
                            },
                            onInit () {
                                this.updateTime();
                                setInterval(this.updateTime, 10000);
                                this.fetchRankings();
                            },
                            updateTime () {
                                const now = new Date();
                                const hours = now.getHours().toString().padStart(2, '0');
                                const minutes = now.getMinutes().toString().padStart(2, '0');
                                this.time = `${hours}:${minutes}`;
                            },
                            async fetchRankings () {
                                console.log('[Leaderboard] Fetching rankings...');
                                const result = await _apiService.default.getRankings();
                                console.log('[Leaderboard] API Response:', JSON.stringify(result));
                                if (result.success && result.rankings.length > 0) {
                                    this.rankings = result.rankings;
                                    this.statusMessage = '';
                                    console.log(`[Leaderboard] Successfully loaded ${result.rankings.length} ranking entries.`);
                                } else if (result.success && 0 === result.rankings.length) {
                                    this.statusMessage = '排行榜上还没有人，快去点击吧！';
                                    console.log('[Leaderboard] API returned success with 0 rankings.');
                                } else {
                                    console.error("[Leaderboard] Failed to fetch rankings:", result.error);
                                    this.statusMessage = '无法加载排行榜，请稍后重试。';
                                }
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
                                                    value: "排行榜"
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
                                                return _vm_.rankings.length > 0;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("list", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "leaderboard-list"
                                                    ]
                                                }
                                            }, [
                                                aiot.__cf__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        exp: function() {
                                                            return _vm_.rankings;
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
                                                                        "rank-info"
                                                                    ]
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "rank-number"
                                                                        ],
                                                                        value: function() {
                                                                            return $idx + 1;
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "name-and-score"
                                                                        ]
                                                                    }
                                                                }, [
                                                                    aiot.__ce__("text", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "rank-name"
                                                                            ],
                                                                            value: function() {
                                                                                return $item.pet_name;
                                                                            }
                                                                        }
                                                                    }, []),
                                                                    aiot.__ce__("text", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "rank-score"
                                                                            ],
                                                                            value: function() {
                                                                                return $item.clicks + " 次点击";
                                                                            }
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
                                                return 0 === _vm_.rankings.length && _vm_.statusMessage;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZGVyYm9hcmRcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9sZWFkZXJib2FyZC9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcGktc2VydmljZS5qc1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnQHN5c3RlbS5mZXRjaCc7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xyXG5pbXBvcnQgcHJvbXB0IGZyb20gJ0BzeXN0ZW0ucHJvbXB0JztcclxuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25maWcuanMnO1xyXG5cclxuY2xhc3MgQXBpU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyDkuK3ovazmnI3liqHlmajlnLDlnYAgLSDku44gY29uZmlnLmpzIOivu+WPllxyXG4gICAgdGhpcy5iYXNlVXJsID0gQ09ORklHLlNFUlZFUi5CQVNFX1VSTDtcclxuICAgIHRoaXMuYmFzZUhlYWRlcnMgPSB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDpgJrnlKjor7fmsYLmlrnms5UgLSDpgJrov4fkuK3ovazmnI3liqHlmajovazlj5FcclxuICBhc3luYyByZXF1ZXN0KGFjdGlvbiwgZGF0YSA9IHt9KSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9L2FwaWA7XHJcbiAgICBcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIHVybCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcjogdGhpcy5iYXNlSGVhZGVycyxcclxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbidcclxuICAgIH07XHJcblxyXG4gICAgb3B0aW9ucy5kYXRhID0gSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb24sIC4uLmRhdGEgfSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZmV0Y2guZmV0Y2goe1xyXG4gICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xyXG5cclxuICAgICAgICAgIGlmIChyZXNwb25zZS5jb2RlID49IDIwMCAmJiByZXNwb25zZS5jb2RlIDwgMzAwKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2VEYXRhKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgSFRUUCBFcnJvcjogJHtyZXNwb25zZS5jb2RlfWAsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgSFRUUCAke3Jlc3BvbnNlLmNvZGV9OiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlRGF0YSl9YCkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiAoZXJyb3IsIGNvZGUpID0+IHtcclxuICAgICAgICAgIC8vIERFVEFJTEVEIExPR0dJTkcgRk9SIE5FVFdPUksgRkFJTFVSRVNcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtBcGlTZXJ2aWNlXSBSZXF1ZXN0IEZhaWxlZC4gQ29kZTogJHtjb2RlfSwgRXJyb3I6ICR7SlNPTi5zdHJpbmdpZnkoZXJyb3IpfWApO1xyXG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgUmVxdWVzdCBmYWlsZWQ6ICR7ZXJyb3IuZGF0YSB8fCAnQ29ubmVjdGlvbiBpcyBpbnZhbGlkJ31gKSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8g6I635Y+W5o6S6KGM5qacXHJcbiAgYXN5bmMgZ2V0UmFua2luZ3MobGltaXQgPSAxMCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdnZXRfcmFua2luZ3MnLCB7XHJcbiAgICAgICAgbGltaXQ6IGxpbWl0XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICByYW5raW5nczogcmVzdWx0LnJhbmtpbmdzIHx8IFtdXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaOkuihjOamnOWksei0pTonLCBlcnJvcilcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICByYW5raW5nczogW10sXHJcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5LiK5oql54K55Ye75qyh5pWwXHJcbiAgYXN5bmMgc3luY0NsaWNrcyh1c2VySWQsIGNsaWNrQ291bnQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHRoaXMucmVxdWVzdCgnc3luY19jbGlja3MnLCB7XHJcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxyXG4gICAgICAgIGNsaWNrX2NvdW50OiBjbGlja0NvdW50XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5LiK5oql54K55Ye75qyh5pWw5aSx6LSlOicsIGVycm9yKVxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOS7juacjeWKoeWZqOWQjOatpeaVsOaNrlxyXG4gIGFzeW5jIHN5bmNGcm9tU2VydmVyKHVzZXJJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdzeW5jX2Zyb21fc2VydmVyJywge1xyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZFxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5LuO5pyN5Yqh5Zmo5ZCM5q2l5pWw5o2u5oiQ5YqfOicsIHJlc3VsdC51c2VySW5mbyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdXNlckluZm86IHJlc3VsdC51c2VySW5mbyB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+WQjOatpeaVsOaNruWksei0pTonLCByZXN1bHQgPyByZXN1bHQuZXJyb3IgOiAn5pyq55+l6ZSZ6K+vJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAocmVzdWx0ID8gcmVzdWx0LmVycm9yIDogJ+acjeWKoeWZqOacqui/lOWbnuaIkOWKn+eKtuaAgScpIH07XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S7juacjeWKoeWZqOWQjOatpeaVsOaNruaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5qOA5p+l5a6g54mp5ZCN5piv5ZCm5Y+v55SoXHJcbiAgYXN5bmMgY2hlY2tQZXROYW1lQXZhaWxhYmlsaXR5KHBldE5hbWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnY2hlY2tfcGV0X25hbWUnLCB7XHJcbiAgICAgICAgcGV0X25hbWU6IHBldE5hbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIC4uLnJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5qOA5p+l5a6g54mp5ZCN5Y+v55So5oCn5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlLCBpc0F2YWlsYWJsZTogZmFsc2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOS/ruaUueWuoOeJqeWQjVxyXG4gIGFzeW5jIHNldFBldE5hbWUodXNlcklkLCBuZXdOYW1lKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ3NldF9wZXRfbmFtZScsIHtcclxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXHJcbiAgICAgICAgbmV3X25hbWU6IG5ld05hbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfkv67mlLnlrqDnianlkI3lpLHotKU6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOmihOa/gOa0u+ajgOafpVxyXG4gIGFzeW5jIGNoZWNrRGV2aWNlUmVnaXN0cmF0aW9uKGRldmljZUlkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2NoZWNrX3JlZ2lzdHJhdGlvbicsIHtcclxuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygn6aKE5r+A5rS75qOA5p+l5oiQ5YqfOicsIHJlc3VsdCk7XHJcbiAgICAgIC8vIOebtOaOpei/lOWbnuacjeWKoeWZqOeahOWOn+Wni+WTjeW6lO+8jFVJ5bGC5pyf5pyb55qE5piv5omB5bmz57uT5p6EXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfpooTmv4DmtLvmo4Dmn6Xml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xyXG4gICAgICAvLyDov5Tlm57kuIDkuKrlhbzlrrnnmoTplJnor6/lr7nosaHvvIzpgb/lhY1VSeWxguW0qea6g1xyXG4gICAgICByZXR1cm4geyBpc19yZWdpc3RlcmVkOiBmYWxzZSwgY2FuX2F1dG9fYWN0aXZhdGU6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5rOo5YaM6K6+5aSH5bm26I635Y+W55So5oi3SURcclxuICBhc3luYyByZWdpc3RlckFuZEdldFVzZXJJZChkZXZpY2VJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gUGFzcyB0aGUgc2VydmVyIHJlc3BvbnNlIGRpcmVjdGx5IHRvIHRoZSBVSSBsYXllclxyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0KCdyZWdpc3Rlcl9kZXZpY2VfYW5kX2dldF9pZCcsIHtcclxuICAgICAgICBkZXZpY2VfaWQ6IGRldmljZUlkXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5rOo5YaM5oiW6I635Y+W55So5oi3SUTml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xyXG4gICAgICAvLyBSZXR1cm4gYSBjb21wYXRpYmxlIGVycm9yIG9iamVjdFxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g6I635Y+W5YWs5ZGK5YiX6KGoXHJcbiAgYXN5bmMgZ2V0QW5ub3VuY2VtZW50cyhsaW1pdCA9IDEwKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2dldF9hbm5vdW5jZW1lbnRzJywge1xyXG4gICAgICAgIGxpbWl0OiBsaW1pdFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coJ09yaWdpbmFsIGFubm91bmNlbWVudCByZXN1bHQgZnJvbSBzZXJ2ZXI6JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlc3VsdC5zdWNjZXNzIHx8IGZhbHNlLFxyXG4gICAgICAgIGFubm91bmNlbWVudHM6IHJlc3VsdC5hbm5vdW5jZW1lbnRzIHx8IFtdLFxyXG4gICAgICAgIGNvdW50OiByZXN1bHQuY291bnQgfHwgMCxcclxuICAgICAgICB0aW1lc3RhbXA6IHJlc3VsdC50aW1lc3RhbXAsXHJcbiAgICAgICAgZXJyb3I6IHJlc3VsdC5lcnJvclxyXG4gICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign6I635Y+W5YWs5ZGK5aSx6LSlOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICBhbm5vdW5jZW1lbnRzOiBbXSxcclxuICAgICAgICBjb3VudDogMFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5qOA5p+l5bqU55So5pu05pawXHJcbiAgYXN5bmMgY2hlY2tBcHBVcGRhdGUoY3VycmVudFZlcnNpb25Db2RlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIGNhbGxlZCB3aXRoIGN1cnJlbnRWZXJzaW9uQ29kZTonLCBjdXJyZW50VmVyc2lvbkNvZGUpO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2NoZWNrX3VwZGF0ZScsIHtcclxuICAgICAgICBjdXJyZW50X3ZlcnNpb25fY29kZTogY3VycmVudFZlcnNpb25Db2RlXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ1tBcGlTZXJ2aWNlXSBjaGVja0FwcFVwZGF0ZSByYXcgcmVzdWx0OicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICBjb25zb2xlLmxvZygnW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIGhhc191cGRhdGU6JywgcmVzdWx0Lmhhc191cGRhdGUpO1xyXG4gICAgICBjb25zb2xlLmxvZygnW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIHVwZGF0ZV9pbmZvOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdC51cGRhdGVfaW5mbykpO1xyXG4gICAgICBjb25zb2xlLmxvZygnW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIGlzX2ZvcmNlX3VwZGF0ZTonLCByZXN1bHQuaXNfZm9yY2VfdXBkYXRlKTtcclxuICAgICAgXHJcbiAgICAgIC8vIOehruS/nSB1cGRhdGVJbmZvIOWMheWQq+aJgOacieW/heimgeWtl+autVxyXG4gICAgICBsZXQgdXBkYXRlSW5mbyA9IG51bGw7XHJcbiAgICAgIGlmIChyZXN1bHQudXBkYXRlX2luZm8pIHtcclxuICAgICAgICB1cGRhdGVJbmZvID0ge1xyXG4gICAgICAgICAgdmVyc2lvbl9uYW1lOiByZXN1bHQudXBkYXRlX2luZm8udmVyc2lvbl9uYW1lIHx8ICcnLFxyXG4gICAgICAgICAgdmVyc2lvbl9jb2RlOiByZXN1bHQudXBkYXRlX2luZm8udmVyc2lvbl9jb2RlIHx8IDAsXHJcbiAgICAgICAgICB0aXRsZTogcmVzdWx0LnVwZGF0ZV9pbmZvLnRpdGxlIHx8ICflj5HnjrDmlrDniYjmnKwnLFxyXG4gICAgICAgICAgY2hhbmdlbG9nOiByZXN1bHQudXBkYXRlX2luZm8uY2hhbmdlbG9nIHx8ICcnLFxyXG4gICAgICAgICAgZG93bmxvYWRfdXJsOiByZXN1bHQudXBkYXRlX2luZm8uZG93bmxvYWRfdXJsIHx8ICcnLFxyXG4gICAgICAgICAgZm9yY2VfdXBkYXRlOiByZXN1bHQudXBkYXRlX2luZm8uZm9yY2VfdXBkYXRlIHx8IGZhbHNlLFxyXG4gICAgICAgICAgbWluX3JlcXVpcmVkX3ZlcnNpb246IHJlc3VsdC51cGRhdGVfaW5mby5taW5fcmVxdWlyZWRfdmVyc2lvbiB8fCAwLFxyXG4gICAgICAgICAgcmVsZWFzZV90aW1lOiByZXN1bHQudXBkYXRlX2luZm8ucmVsZWFzZV90aW1lIHx8ICcnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zb2xlLmxvZygnW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIHVwZGF0ZUluZm8gY29uc3RydWN0ZWQ6JywgSlNPTi5zdHJpbmdpZnkodXBkYXRlSW5mbykpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgdXBkYXRlX2luZm8gaXMgbnVsbCBvciB1bmRlZmluZWQnKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc3QgcmV0dXJuUmVzdWx0ID0ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlc3VsdC5zdWNjZXNzIHx8IGZhbHNlLFxyXG4gICAgICAgIGhhc1VwZGF0ZTogcmVzdWx0Lmhhc191cGRhdGUgfHwgZmFsc2UsXHJcbiAgICAgICAgdXBkYXRlSW5mbzogdXBkYXRlSW5mbyxcclxuICAgICAgICBpc0ZvcmNlVXBkYXRlOiByZXN1bHQuaXNfZm9yY2VfdXBkYXRlIHx8IGZhbHNlLFxyXG4gICAgICAgIGN1cnJlbnRWZXJzaW9uQ29kZTogcmVzdWx0LmN1cnJlbnRfdmVyc2lvbl9jb2RlIHx8IGN1cnJlbnRWZXJzaW9uQ29kZSxcclxuICAgICAgICBsYXRlc3RWZXJzaW9uQ29kZTogcmVzdWx0LmxhdGVzdF92ZXJzaW9uX2NvZGUgfHwgY3VycmVudFZlcnNpb25Db2RlLFxyXG4gICAgICAgIGVycm9yOiByZXN1bHQuZXJyb3JcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgcmV0dXJuIHJlc3VsdDonLCBKU09OLnN0cmluZ2lmeShyZXR1cm5SZXN1bHQpKTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiByZXR1cm5SZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdbQXBpU2VydmljZV0gY2hlY2tBcHBVcGRhdGUgZXJyb3IgbWVzc2FnZTonLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgY29uc29sZS5lcnJvcignW0FwaVNlcnZpY2VdIGNoZWNrQXBwVXBkYXRlIGVycm9yIHN0YWNrOicsIGVycm9yLnN0YWNrKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICBoYXNVcGRhdGU6IGZhbHNlLFxyXG4gICAgICAgIGlzRm9yY2VVcGRhdGU6IGZhbHNlXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBpU2VydmljZSgpXHJcbiIsIi8vIGNvbmZpZy5qc1xyXG5leHBvcnQgY29uc3QgQ09ORklHID0ge1xyXG4gIC8vIOS4rei9rOacjeWKoeWZqOmFjee9rlxyXG4gIFNFUlZFUjoge1xyXG4gICAgQkFTRV9VUkw6ICdodHRwOi8vMTAzLjIwNS4yNTMuODc6MjIyMDcnXHJcbiAgfSxcclxuICBcclxuICAvLyDms6jmhI/vvJpVUkwg5YmN57yA5ZyoIGFwaS1zZXJ2aWNlLmpzIOS4reehrOe8lueggeS6hlxyXG4gIC8vIOi/memHjOS4jeWGjemcgOimgemFjee9rlxyXG4gIFxyXG4gIC8vIOW6lOeUqOmFjee9rlxyXG4gIEFQUDoge1xyXG4gICAgTkFNRTogJ0JhbmRQZXQnLFxyXG4gICAgVkVSU0lPTjogJzAuNC4zIEFscGhhJyxcclxuICAgIFZFUlNJT05fQ09ERTogNDMsICAvLyDnlKjkuo7niYjmnKzmr5TovoPnmoTmlbDlrZfvvIgwLjQuMyAtPiA0M++8iVxyXG4gICAgTUFYX0NMSUNLU19QRVJfQkFUQ0g6IDUwLFxyXG4gICAgU1lOQ19JTlRFUlZBTDogMzAwMDAsICAvLyAzMOenkuiHquWKqOWQjOatpeS4gOasoVxyXG4gICAgUkFOS19MSU1JVDogMTAsXHJcbiAgICBcclxuICAgIC8vIOabtOaWsOajgOafpemFjee9rlxyXG4gICAgQ0hFQ0tfVVBEQVRFX0lOVEVSVkFMOiAzNjAwMDAwLCAvLyAx5bCP5pe25qOA5p+l5LiA5qyh5pu05paw77yIMzYwMDAwMOavq+enku+8iVxyXG4gICAgQU5OT1VOQ0VNRU5UX0NBQ0hFX1RJTUU6IDMwMDAwMCwgLy8gNeWIhumSn+e8k+WtmOWFrOWRilxyXG4gIH0sXHJcbiAgXHJcbiAgLy8g5a2Y5YKo6ZSu5ZCNXHJcbiAgU1RPUkFHRV9LRVlTOiB7XHJcbiAgICBERVZJQ0VfSUQ6ICdkZXZpY2VfaWQnLFxyXG4gICAgSVNfTE9DQUxMWV9BQ1RJVkFURUQ6ICdpc19sb2NhbGx5X2FjdGl2YXRlZCcsXHJcbiAgICBVU0VSX0lORk86ICd1c2VyX2luZm8nLFxyXG4gICAgUEVORElOR19DTElDS1M6ICdwZW5kaW5nX2NsaWNrcycsXHJcbiAgICBMQVNUX1NZTkNfVElNRTogJ2xhc3Rfc3luY190aW1lJyxcclxuICAgIFRPVEFMX0NMSUNLUzogJ3RvdGFsX2NsaWNrcycsXHJcbiAgICBcclxuICAgIC8vIOabtOaWsOebuOWFs+WtmOWCqOmUrlxyXG4gICAgTEFTVF9VUERBVEVfQ0hFQ0tfVElNRTogJ2xhc3RfdXBkYXRlX2NoZWNrX3RpbWUnLFxyXG4gICAgTEFTVF9BTk5PVU5DRU1FTlRfRkVUQ0hfVElNRTogJ2xhc3RfYW5ub3VuY2VtZW50X2ZldGNoX3RpbWUnLFxyXG4gICAgQ0FDSEVEX0FOTk9VTkNFTUVOVFM6ICdjYWNoZWRfYW5ub3VuY2VtZW50cycsXHJcbiAgICBDQUNIRURfVVBEQVRFX0lORk86ICdjYWNoZWRfdXBkYXRlX2luZm8nLFxyXG4gICAgSUdOT1JFRF9WRVJTSU9OOiAnaWdub3JlZF92ZXJzaW9uX2NvZGUnLCAvLyDnlKjmiLflv73nlaXnmoTniYjmnKxcclxuICAgIEZPUkNFX1VQREFURV9SRVFVSVJFRDogJ2ZvcmNlX3VwZGF0ZV9yZXF1aXJlZCcsIC8vIOaYr+WQpumcgOimgeW8uuWItuabtOaWsFxyXG4gICAgXHJcbiAgICAvLyDnlKjmiLflgY/lpb3orr7nva5cclxuICAgIFZJQlJBVElPTl9FTkFCTEVEOiAndmlicmF0aW9uX2VuYWJsZWQnLCAvLyDngrnlh7vpnIfliqjlvIDlhbNcclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNi44XCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjYuOFwiOyIsIjx0ZW1wbGF0ZT5cbiAgPHN0YWNrIGNsYXNzPVwicGFnZS1jb250YWluZXJcIj5cbiAgICA8IS0tIE1haW4gY29udGVudCBjb250YWluZXIgLS0+XG4gICAgPGRpdiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICAgIDwhLS0gQmFjayBidXR0b24gbW92ZWQgdG8gdG9wIGxheWVyIG9mIHN0YWNrIC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGUtdGltZVwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLXRpbWUtZGlzcGxheVwiPnt7IHRpbWUgfX08L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtaGVhZGVyLXRpdGxlXCI+5o6S6KGM5qacPC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGVudFwiPlxuICAgICAgICA8bGlzdCBjbGFzcz1cImxlYWRlcmJvYXJkLWxpc3RcIiBpZj1cInt7IHJhbmtpbmdzLmxlbmd0aCA+IDAgfX1cIj5cbiAgICAgICAgICA8bGlzdC1pdGVtIGZvcj1cInt7cmFua2luZ3N9fVwiIGNsYXNzPVwibGlzdC1pdGVtXCIgdHlwZT1cImRlZmF1bHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYW5rLWluZm9cIj5cbiAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJyYW5rLW51bWJlclwiPnt7JGlkeCArIDF9fTwvdGV4dD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWUtYW5kLXNjb3JlXCI+XG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJyYW5rLW5hbWVcIj57eyRpdGVtLnBldF9uYW1lfX08L3RleHQ+XG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJyYW5rLXNjb3JlXCI+e3skaXRlbS5jbGlja3N9fSDmrKHngrnlh7s8L3RleHQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saXN0LWl0ZW0+XG4gICAgICAgIDwvbGlzdD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YXR1cy1jb250YWluZXJcIiBpZj1cInt7IHJhbmtpbmdzLmxlbmd0aCA9PT0gMCAmJiBzdGF0dXNNZXNzYWdlIH19XCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJzdGF0dXMtdGV4dFwiPnt7IHN0YXR1c01lc3NhZ2UgfX08L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPCEtLSBCYWNrIEJ1dHRvbiBvbiB0b3AgbGF5ZXIgZm9yIGd1YXJhbnRlZWQgY2xpY2thYmlsaXR5IC0tPlxuICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vYmFjay5wbmdcIiBjbGFzcz1cInBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uXCIgb25jbGljaz1cImdvQmFja1wiIHN0eWxlPVwidG9wOiA1cHg7XCI+PC9pbWFnZT5cbiAgPC9zdGFjaz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAucGFnZS10aW1lLWRpc3BsYXkge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIHRpdGxlIGJsb2NrICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBBbmNob3IgZm9yIGJhY2sgYnV0dG9uICovXG4gIH1cbiAgLnBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgfVxuICAucGFnZS1oZWFkZXItYmFjay1hcnJvdyB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG4gIC5wYWdlLWhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG4gIC5oZWFkZXItdGl0bGUtdGltZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5wYWdlLWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleDogMTsgLyogVGFrZSB1cCByZW1haW5pbmcgdmVydGljYWwgc3BhY2UgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgLyogQWxsb3cgY29udGVudCB0byBzY3JvbGwgKi9cbiAgfVxuICAubGVhZGVyYm9hcmQtbGlzdCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLmxpc3QtaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMjBweDsgLyogSW5jcmVhc2VkIGhlaWdodCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IC8qIENoYW5nZWQgZnJvbSBzcGFjZS1iZXR3ZWVuICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAucmFuay1pbmZvIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnJhbmstbnVtYmVyIHtcbiAgICBjb2xvcjogI0FBQUFBQTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gIC5uYW1lLWFuZC1zY29yZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgLyogQWxpZ24gbmFtZSBhbmQgc2NvcmUgdG8gdGhlIGxlZnQgKi9cbiAgfVxuICAucmFuay1uYW1lIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4OyAvKiBBZGQgc3BhY2UgYmV0d2VlbiBuYW1lIGFuZCBzY29yZSAqL1xuICB9XG4gIC5yYW5rLXNjb3JlIHtcbiAgICBjb2xvcjogI0FBQUFBQTsgLyogQ2hhbmdlZCBjb2xvciB0byBkaXN0aW5ndWlzaCAqL1xuICAgIGZvbnQtc2l6ZTogMjRweDsgLyogTWFkZSBzY29yZSBzbGlnaHRseSBzbWFsbGVyICovXG4gIH1cbiAgLnN0YXR1cy1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIC5zdGF0dXMtdGV4dCB7XG4gICAgY29sb3I6ICNBQUFBQUE7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XG4gIGltcG9ydCBBcGlTZXJ2aWNlIGZyb20gJy4uL2NvbW1vbi9qcy9hcGktc2VydmljZS5qcyc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGE6IHtcbiAgICAgIHRpbWU6ICcwMDowMCcsXG4gICAgICByYW5raW5nczogW10sXG4gICAgICBzdGF0dXNNZXNzYWdlOiAn5q2j5Zyo5Yqg6L29Li4uJ1xuICAgIH0sXG4gICAgb25Jbml0KCkge1xuICAgICAgdGhpcy51cGRhdGVUaW1lKCk7XG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVRpbWUsIDEwMDAwKTtcbiAgICAgIHRoaXMuZmV0Y2hSYW5raW5ncygpO1xuICAgIH0sXG4gICAgdXBkYXRlVGltZSgpIHtcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBob3VycyA9IG5vdy5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgIHRoaXMudGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICB9LFxuICAgIGFzeW5jIGZldGNoUmFua2luZ3MoKSB7XG4gICAgICBjb25zb2xlLmxvZygnW0xlYWRlcmJvYXJkXSBGZXRjaGluZyByYW5raW5ncy4uLicpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5nZXRSYW5raW5ncygpO1xuICAgICAgXG4gICAgICBjb25zb2xlLmxvZygnW0xlYWRlcmJvYXJkXSBBUEkgUmVzcG9uc2U6JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cbiAgICAgIGlmIChyZXN1bHQuc3VjY2VzcyAmJiByZXN1bHQucmFua2luZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnJhbmtpbmdzID0gcmVzdWx0LnJhbmtpbmdzO1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAnJzsgLy8gQ2xlYXIgc3RhdHVzIG9uIHN1Y2Nlc3NcbiAgICAgICAgY29uc29sZS5sb2coYFtMZWFkZXJib2FyZF0gU3VjY2Vzc2Z1bGx5IGxvYWRlZCAke3Jlc3VsdC5yYW5raW5ncy5sZW5ndGh9IHJhbmtpbmcgZW50cmllcy5gKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnN1Y2Nlc3MgJiYgcmVzdWx0LnJhbmtpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn5o6S6KGM5qac5LiK6L+Y5rKh5pyJ5Lq677yM5b+r5Y6754K55Ye75ZCn77yBJztcbiAgICAgICAgY29uc29sZS5sb2coJ1tMZWFkZXJib2FyZF0gQVBJIHJldHVybmVkIHN1Y2Nlc3Mgd2l0aCAwIHJhbmtpbmdzLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltMZWFkZXJib2FyZF0gRmFpbGVkIHRvIGZldGNoIHJhbmtpbmdzOlwiLCByZXN1bHQuZXJyb3IpO1xuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn5peg5rOV5Yqg6L295o6S6KGM5qac77yM6K+356iN5ZCO6YeN6K+V44CCJztcbiAgICAgIH1cbiAgICB9LFxuICAgIGdvQmFjaygpIHtcbiAgICAgIHJvdXRlci5iYWNrKCk7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfc3lzdGVtMiIsIl9zeXN0ZW0zIiwiX3N5c3RlbTQiLCJfY29uZmlnIiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIm93bktleXMiLCJyIiwidCIsIk9iamVjdCIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJvIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5IiwidmFsdWUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImkiLCJfdG9QcmltaXRpdmUiLCJTeW1ib2wiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJBcGlTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJiYXNlVXJsIiwiQ09ORklHIiwiU0VSVkVSIiwiQkFTRV9VUkwiLCJiYXNlSGVhZGVycyIsInJlcXVlc3QiLCJhY3Rpb24iLCJkYXRhIiwidXJsIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlciIsInJlc3BvbnNlVHlwZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwic3VjY2VzcyIsInJlc3BvbnNlIiwicmVzcG9uc2VEYXRhIiwiY29kZSIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiZmFpbCIsImdldFJhbmtpbmdzIiwibGltaXQiLCJyZXN1bHQiLCJyYW5raW5ncyIsIm1lc3NhZ2UiLCJzeW5jQ2xpY2tzIiwidXNlcklkIiwiY2xpY2tDb3VudCIsInVzZXJfaWQiLCJjbGlja19jb3VudCIsInN5bmNGcm9tU2VydmVyIiwibG9nIiwidXNlckluZm8iLCJjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkiLCJwZXROYW1lIiwicGV0X25hbWUiLCJpc0F2YWlsYWJsZSIsInNldFBldE5hbWUiLCJuZXdOYW1lIiwibmV3X25hbWUiLCJjaGVja0RldmljZVJlZ2lzdHJhdGlvbiIsImRldmljZUlkIiwiZGV2aWNlX2lkIiwiaXNfcmVnaXN0ZXJlZCIsImNhbl9hdXRvX2FjdGl2YXRlIiwicmVnaXN0ZXJBbmRHZXRVc2VySWQiLCJnZXRBbm5vdW5jZW1lbnRzIiwiYW5ub3VuY2VtZW50cyIsImNvdW50IiwidGltZXN0YW1wIiwiY2hlY2tBcHBVcGRhdGUiLCJjdXJyZW50VmVyc2lvbkNvZGUiLCJjdXJyZW50X3ZlcnNpb25fY29kZSIsImhhc191cGRhdGUiLCJ1cGRhdGVfaW5mbyIsImlzX2ZvcmNlX3VwZGF0ZSIsInVwZGF0ZUluZm8iLCJ2ZXJzaW9uX25hbWUiLCJ2ZXJzaW9uX2NvZGUiLCJ0aXRsZSIsImNoYW5nZWxvZyIsImRvd25sb2FkX3VybCIsImZvcmNlX3VwZGF0ZSIsIm1pbl9yZXF1aXJlZF92ZXJzaW9uIiwicmVsZWFzZV90aW1lIiwicmV0dXJuUmVzdWx0IiwiaGFzVXBkYXRlIiwiaXNGb3JjZVVwZGF0ZSIsImxhdGVzdFZlcnNpb25Db2RlIiwibGF0ZXN0X3ZlcnNpb25fY29kZSIsInN0YWNrIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiQVBQIiwiTkFNRSIsIlZFUlNJT04iLCJWRVJTSU9OX0NPREUiLCJNQVhfQ0xJQ0tTX1BFUl9CQVRDSCIsIlNZTkNfSU5URVJWQUwiLCJSQU5LX0xJTUlUIiwiQ0hFQ0tfVVBEQVRFX0lOVEVSVkFMIiwiQU5OT1VOQ0VNRU5UX0NBQ0hFX1RJTUUiLCJTVE9SQUdFX0tFWVMiLCJERVZJQ0VfSUQiLCJJU19MT0NBTExZX0FDVElWQVRFRCIsIlVTRVJfSU5GTyIsIlBFTkRJTkdfQ0xJQ0tTIiwiTEFTVF9TWU5DX1RJTUUiLCJUT1RBTF9DTElDS1MiLCJMQVNUX1VQREFURV9DSEVDS19USU1FIiwiTEFTVF9BTk5PVU5DRU1FTlRfRkVUQ0hfVElNRSIsIkNBQ0hFRF9BTk5PVU5DRU1FTlRTIiwiQ0FDSEVEX1VQREFURV9JTkZPIiwiSUdOT1JFRF9WRVJTSU9OIiwiRk9SQ0VfVVBEQVRFX1JFUVVJUkVEIiwiVklCUkFUSU9OX0VOQUJMRUQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX2FwaVNlcnZpY2UiLCJ0aW1lIiwic3RhdHVzTWVzc2FnZSIsIm9uSW5pdCIsInVwZGF0ZVRpbWUiLCJzZXRJbnRlcnZhbCIsImZldGNoUmFua2luZ3MiLCJub3ciLCJEYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImdvQmFjayIsInJvdXRlciIsImJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUNBLElBQUFBLFVBQUFDLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFDLFdBQUFGLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFFLFdBQUFILHVCQUFBQyxlQUFBO3dCQUNBLElBQUFHLFdBQUFKLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFJLFVBQUFDLG9CQUFBO3dCQUFxQyxTQUFBTix1QkFBQU8sQ0FBQTs0QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7Z0NBQUFFLFNBQUFGOzRCQUFBO3dCQUFBO3dCQUFBLFNBQUFHLFFBQUFILENBQUEsRUFBQUksQ0FBQTs0QkFBQSxJQUFBQyxJQUFBQyxPQUFBQyxJQUFBLENBQUFQOzRCQUFBLElBQUFNLE9BQUFFLHFCQUFBO2dDQUFBLElBQUFDLElBQUFILE9BQUFFLHFCQUFBLENBQUFSO2dDQUFBSSxLQUFBSyxDQUFBQSxJQUFBQSxFQUFBQyxNQUFBLFVBQUFOLENBQUE7b0NBQUEsT0FBQUUsT0FBQUssd0JBQUEsQ0FBQVgsR0FBQUksR0FBQVEsVUFBQTtnQ0FBQSxLQUFBUCxFQUFBUSxJQUFBLENBQUFDLEtBQUEsQ0FBQVQsR0FBQUk7NEJBQUE7NEJBQUEsT0FBQUo7d0JBQUE7d0JBQUEsU0FBQVUsY0FBQWYsQ0FBQTs0QkFBQSxRQUFBSSxJQUFBLEdBQUFBLElBQUFZLFVBQUFDLE1BQUEsRUFBQWIsSUFBQTtnQ0FBQSxJQUFBQyxJQUFBLFFBQUFXLFNB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