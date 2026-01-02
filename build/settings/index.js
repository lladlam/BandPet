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
                                VERSION_CODE: 35,
                                MAX_CLICKS_PER_BATCH: 50,
                                SYNC_INTERVAL: 60000,
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
                                FORCE_UPDATE_REQUIRED: 'force_update_required'
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
                                position: "relative",
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
                                    "settings-content"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                width: "90%",
                                marginTop: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "info-item"
                                ]
                            ],
                            {
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "20px",
                                paddingTop: "20px",
                                paddingRight: "20px",
                                paddingBottom: "20px",
                                paddingLeft: "20px",
                                backgroundColor: "#1a1a1a",
                                borderRadius: "15px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "info-label"
                                ]
                            ],
                            {
                                color: "#aaaaaa",
                                fontSize: "30px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "info-value"
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
                                    "about-button"
                                ]
                            ],
                            {
                                position: "absolute",
                                bottom: "30px",
                                width: "140px",
                                height: "60px",
                                backgroundColor: "#1a1a1a",
                                borderRadius: "30px",
                                justifyContent: "center",
                                alignItems: "center",
                                right: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sync-button"
                                ]
                            ],
                            {
                                position: "absolute",
                                bottom: "30px",
                                width: "140px",
                                height: "60px",
                                backgroundColor: "#1a1a1a",
                                borderRadius: "30px",
                                justifyContent: "center",
                                alignItems: "center",
                                left: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "about-button-text"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "28px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sync-button-text"
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
                        var _config = __webpack_require__("./src/common/js/config.js");
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
                        var _default = exports.default = {
                            data: {
                                time: '00:00',
                                petName: '加载中...',
                                userId: '加载中...'
                            },
                            onInit () {
                                this.loadUserInfo();
                                this.updateTime();
                                setInterval(this.updateTime, 10000);
                            },
                            async loadUserInfo () {
                                console.log('[SettingsPage] Loading user info...');
                                try {
                                    const userInfoJSON = await _promisifiedStorageGet(_config.CONFIG.STORAGE_KEYS.USER_INFO);
                                    if (userInfoJSON) {
                                        console.log('[SettingsPage] Found user info data in storage.');
                                        const userInfo = JSON.parse(userInfoJSON);
                                        if (userInfo && userInfo.id) {
                                            this.petName = userInfo.pet_name || '(无名)';
                                            this.userId = userInfo.id || '无';
                                            console.log(`[SettingsPage] Successfully loaded user info: Name='${this.petName}', ID='${this.userId}'`);
                                        } else {
                                            console.warn('[SettingsPage] User info data was found, but it was invalid (missing id).');
                                            this.petName = '信息无效';
                                            this.userId = '无';
                                        }
                                    } else {
                                        console.warn('[SettingsPage] Could not find user info in storage.');
                                        this.petName = '无信息';
                                        this.userId = '无';
                                    }
                                } catch (e) {
                                    console.error("[SettingsPage] A critical error occurred while loading user info:", e);
                                    this.petName = '加载失败';
                                    this.userId = '加载失败';
                                }
                            },
                            updateTime () {
                                const now = new Date();
                                const hours = now.getHours().toString().padStart(2, '0');
                                const minutes = now.getMinutes().toString().padStart(2, '0');
                                this.time = `${hours}:${minutes}`;
                            },
                            async handleCloudSync () {
                                _system.default.push({
                                    uri: 'sync'
                                });
                            },
                            goBack () {
                                _system.default.back();
                            },
                            goToAbout () {
                                _system.default.push({
                                    uri: 'about'
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
                                                value: "设置"
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
                                            "settings-content"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "info-item"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "info-label"
                                                ],
                                                value: "您的宠物:"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "info-value"
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
                                                "info-item"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "info-label"
                                                ],
                                                value: "ID:"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "info-value"
                                                ],
                                                value: function() {
                                                    return _vm_.userId;
                                                }
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "sync-button"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.handleCloudSync(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "sync-button-text"
                                        ],
                                        value: "云端同步"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "about-button"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.goToAbout(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "about-button-text"
                                        ],
                                        value: "关于"
                                    }
                                }, [])
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3NcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL0JhbmRQZXQvc3JjL3NldHRpbmdzL2luZGV4LnV4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbmZpZy5qc1xyXG5leHBvcnQgY29uc3QgQ09ORklHID0ge1xyXG4gIC8vIOS4rei9rOacjeWKoeWZqOmFjee9rlxyXG4gIFNFUlZFUjoge1xyXG4gICAgQkFTRV9VUkw6ICdodHRwOi8vMTAzLjIwNS4yNTMuODc6MjIyMDcnXHJcbiAgfSxcclxuICBcclxuICAvLyDms6jmhI/vvJpVUkwg5YmN57yA5ZyoIGFwaS1zZXJ2aWNlLmpzIOS4reehrOe8lueggeS6hlxyXG4gIC8vIOi/memHjOS4jeWGjemcgOimgemFjee9rlxyXG4gIFxyXG4gIC8vIOW6lOeUqOmFjee9rlxyXG4gIEFQUDoge1xyXG4gICAgTkFNRTogJ0JhbmRQZXQnLFxyXG4gICAgVkVSU0lPTjogJzAuMy41IEFscGhhJyxcclxuICAgIFZFUlNJT05fQ09ERTogMzUsICAvLyDmlrDlop7vvJrnlKjkuo7niYjmnKzmr5TovoPnmoTmlbDlrZfvvIgwLjMuNSAtPiAzNe+8iVxyXG4gICAgTUFYX0NMSUNLU19QRVJfQkFUQ0g6IDUwLFxyXG4gICAgU1lOQ19JTlRFUlZBTDogNjAwMDAsXHJcbiAgICBSQU5LX0xJTUlUOiAxMCxcclxuICAgIFxyXG4gICAgLy8g5pu05paw5qOA5p+l6YWN572u77yI5paw5aKe77yJXHJcbiAgICBDSEVDS19VUERBVEVfSU5URVJWQUw6IDM2MDAwMDAsIC8vIDHlsI/ml7bmo4Dmn6XkuIDmrKHmm7TmlrBcclxuICAgIEFOTk9VTkNFTUVOVF9DQUNIRV9USU1FOiAzMDAwMDAsIC8vIDXliIbpkp/nvJPlrZjlhazlkYpcclxuICB9LFxyXG4gIFxyXG4gIC8vIOWtmOWCqOmUruWQjVxyXG4gIFNUT1JBR0VfS0VZUzoge1xyXG4gICAgREVWSUNFX0lEOiAnZGV2aWNlX2lkJyxcclxuICAgIElTX0xPQ0FMTFlfQUNUSVZBVEVEOiAnaXNfbG9jYWxseV9hY3RpdmF0ZWQnLFxyXG4gICAgVVNFUl9JTkZPOiAndXNlcl9pbmZvJyxcclxuICAgIFBFTkRJTkdfQ0xJQ0tTOiAncGVuZGluZ19jbGlja3MnLFxyXG4gICAgTEFTVF9TWU5DX1RJTUU6ICdsYXN0X3N5bmNfdGltZScsXHJcbiAgICBUT1RBTF9DTElDS1M6ICd0b3RhbF9jbGlja3MnLFxyXG4gICAgXHJcbiAgICAvLyDmlrDlop7lrZjlgqjplK5cclxuICAgIExBU1RfVVBEQVRFX0NIRUNLX1RJTUU6ICdsYXN0X3VwZGF0ZV9jaGVja190aW1lJyxcclxuICAgIExBU1RfQU5OT1VOQ0VNRU5UX0ZFVENIX1RJTUU6ICdsYXN0X2Fubm91bmNlbWVudF9mZXRjaF90aW1lJyxcclxuICAgIENBQ0hFRF9BTk5PVU5DRU1FTlRTOiAnY2FjaGVkX2Fubm91bmNlbWVudHMnLFxyXG4gICAgQ0FDSEVEX1VQREFURV9JTkZPOiAnY2FjaGVkX3VwZGF0ZV9pbmZvJyxcclxuICAgIElHTk9SRURfVkVSU0lPTjogJ2lnbm9yZWRfdmVyc2lvbl9jb2RlJywgLy8g55So5oi35b+955Wl55qE54mI5pysXHJcbiAgICBGT1JDRV9VUERBVEVfUkVRVUlSRUQ6ICdmb3JjZV91cGRhdGVfcmVxdWlyZWQnLCAvLyDmmK/lkKbpnIDopoHlvLrliLbmm7TmlrBcclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNi44XCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjYuOFwiOyIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicGFnZS1jb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyXCI+XHJcbiAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi9iYWNrLnBuZ1wiIGNsYXNzPVwicGFnZS1oZWFkZXItYmFjay1idXR0b25cIiBvbmNsaWNrPVwiZ29CYWNrXCI+PC9pbWFnZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRpdGxlLXRpbWVcIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicGFnZS10aW1lLWRpc3BsYXlcIj57eyB0aW1lIH19PC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLWhlYWRlci10aXRsZVwiPuiuvue9rjwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1pdGVtXCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImluZm8tbGFiZWxcIj7mgqjnmoTlrqDniak6PC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJpbmZvLXZhbHVlXCI+e3sgcGV0TmFtZSB9fTwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1pdGVtXCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImluZm8tbGFiZWxcIj5JRDo8L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImluZm8tdmFsdWVcIj57eyB1c2VySWQgfX08L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic3luYy1idXR0b25cIiBvbmNsaWNrPVwiaGFuZGxlQ2xvdWRTeW5jXCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJzeW5jLWJ1dHRvbi10ZXh0XCI+5LqR56uv5ZCM5q2lPC90ZXh0PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtYnV0dG9uXCIgb25jbGljaz1cImdvVG9BYm91dFwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiYWJvdXQtYnV0dG9uLXRleHRcIj7lhbPkuo48L3RleHQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuICAucGFnZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBBZGQgdGhpcyBmb3IgYWJzb2x1dGUgcG9zaXRpb25pbmcgY29udGV4dCAqL1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5wYWdlLWhlYWRlci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICAucGFnZS10aW1lLWRpc3BsYXkge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgfVxyXG4gIC5wYWdlLWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciB0aXRsZSBibG9jayAqL1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBBbmNob3IgZm9yIGJhY2sgYnV0dG9uICovXHJcbiAgfVxyXG4gIC5wYWdlLWhlYWRlci1iYWNrLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDBweDtcclxuICB9XHJcbiAgLnBhZ2UtaGVhZGVyLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gIH1cclxuICAuaGVhZGVyLXRpdGxlLXRpbWUge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5wYWdlLWNvbnRlbnQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleDogMTsgLyogVGFrZSB1cCByZW1haW5pbmcgdmVydGljYWwgc3BhY2UgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7IC8qIEFsbG93IGNvbnRlbnQgdG8gc2Nyb2xsICovXHJcbiAgfVxyXG4gIC5zZXR0aW5ncy1jb250ZW50IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgLmluZm8taXRlbSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTsgLyogRXZlbiBkYXJrZXIgZ3JleSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcbiAgLmluZm8tbGFiZWwge1xyXG4gICAgY29sb3I6ICNBQUFBQUE7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG4gIC5pbmZvLXZhbHVlIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICAuYWJvdXQtYnV0dG9uLCAuc3luYy1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgd2lkdGg6IDE0MHB4OyAvKiBJbmNyZWFzZWQgd2lkdGggKi9cclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuYWJvdXQtYnV0dG9uIHtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICAuc3luYy1idXR0b24ge1xyXG4gICAgbGVmdDogMjBweDtcclxuICB9XHJcbiAgLmFib3V0LWJ1dHRvbi10ZXh0LCAuc3luYy1idXR0b24tdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMjhweDsgLyogQWRqdXN0ZWQgZm9udCBzaXplICovXHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcclxuICBpbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xyXG4gIGltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4uL2NvbW1vbi9qcy9jb25maWcuanMnO1xyXG5cclxuICAvLyBQcm9taXNpZmllZCBoZWxwZXIgZm9yIHN0b3JhZ2UuZ2V0IHRvIGhhbmRsZSBhc3luYy9hd2FpdCBjb3JyZWN0bHkuXHJcbiAgY29uc3QgX3Byb21pc2lmaWVkU3RvcmFnZUdldCA9IChrZXkpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBzdG9yYWdlLmdldCh7XHJcbiAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHJlc29sdmUoZGF0YSksXHJcbiAgICAgICAgZmFpbDogKCkgPT4gcmVzb2x2ZShudWxsKVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGltZTogJzAwOjAwJyxcclxuICAgICAgcGV0TmFtZTogJ+WKoOi9veS4rS4uLicsXHJcbiAgICAgIHVzZXJJZDogJ+WKoOi9veS4rS4uLidcclxuICAgIH0sXHJcbiAgICBvbkluaXQoKSB7XHJcbiAgICAgIHRoaXMubG9hZFVzZXJJbmZvKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlVGltZSgpO1xyXG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVRpbWUsIDEwMDAwKTsgLy8gVXBkYXRlIGV2ZXJ5IDUgc2Vjb25kc1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGxvYWRVc2VySW5mbygpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1tTZXR0aW5nc1BhZ2VdIExvYWRpbmcgdXNlciBpbmZvLi4uJyk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlckluZm9KU09OID0gYXdhaXQgX3Byb21pc2lmaWVkU3RvcmFnZUdldChDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTyk7XHJcblxyXG4gICAgICAgIGlmICh1c2VySW5mb0pTT04pIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbU2V0dGluZ3NQYWdlXSBGb3VuZCB1c2VyIGluZm8gZGF0YSBpbiBzdG9yYWdlLicpO1xyXG4gICAgICAgICAgY29uc3QgdXNlckluZm8gPSBKU09OLnBhcnNlKHVzZXJJbmZvSlNPTik7XHJcbiAgICAgICAgICBpZiAodXNlckluZm8gJiYgdXNlckluZm8uaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wZXROYW1lID0gdXNlckluZm8ucGV0X25hbWUgfHwgJyjml6DlkI0pJztcclxuICAgICAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySW5mby5pZCB8fCAn5pegJztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFtTZXR0aW5nc1BhZ2VdIFN1Y2Nlc3NmdWxseSBsb2FkZWQgdXNlciBpbmZvOiBOYW1lPScke3RoaXMucGV0TmFtZX0nLCBJRD0nJHt0aGlzLnVzZXJJZH0nYCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1tTZXR0aW5nc1BhZ2VdIFVzZXIgaW5mbyBkYXRhIHdhcyBmb3VuZCwgYnV0IGl0IHdhcyBpbnZhbGlkIChtaXNzaW5nIGlkKS4nKTtcclxuICAgICAgICAgICAgdGhpcy5wZXROYW1lID0gJ+S/oeaBr+aXoOaViCc7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcklkID0gJ+aXoCc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdbU2V0dGluZ3NQYWdlXSBDb3VsZCBub3QgZmluZCB1c2VyIGluZm8gaW4gc3RvcmFnZS4nKTtcclxuICAgICAgICAgICAgdGhpcy5wZXROYW1lID0gJ+aXoOS/oeaBryc7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcklkID0gJ+aXoCc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltTZXR0aW5nc1BhZ2VdIEEgY3JpdGljYWwgZXJyb3Igb2NjdXJyZWQgd2hpbGUgbG9hZGluZyB1c2VyIGluZm86XCIsIGUpO1xyXG4gICAgICAgIHRoaXMucGV0TmFtZSA9ICfliqDovb3lpLHotKUnO1xyXG4gICAgICAgIHRoaXMudXNlcklkID0gJ+WKoOi9veWksei0pSc7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGVUaW1lKCkge1xyXG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBjb25zdCBob3VycyA9IG5vdy5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgY29uc3QgbWludXRlcyA9IG5vdy5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICB0aGlzLnRpbWUgPSBgJHtob3Vyc306JHttaW51dGVzfWA7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgaGFuZGxlQ2xvdWRTeW5jKCkge1xyXG4gICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgdXJpOiAnc3luYydcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ29CYWNrKCkge1xyXG4gICAgICByb3V0ZXIuYmFjaygpO1xyXG4gICAgfSxcclxuICAgIGdvVG9BYm91dCgpIHtcclxuICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgIHVyaTogJ2Fib3V0J1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PiJdLCJuYW1lcyI6WyJDT05GSUciLCJleHBvcnRzIiwiU0VSVkVSIiwiQkFTRV9VUkwiLCJBUFAiLCJOQU1FIiwiVkVSU0lPTiIsIlZFUlNJT05fQ09ERSIsIk1BWF9DTElDS1NfUEVSX0JBVENIIiwiU1lOQ19JTlRFUlZBTCIsIlJBTktfTElNSVQiLCJDSEVDS19VUERBVEVfSU5URVJWQUwiLCJBTk5PVU5DRU1FTlRfQ0FDSEVfVElNRSIsIlNUT1JBR0VfS0VZUyIsIkRFVklDRV9JRCIsIklTX0xPQ0FMTFlfQUNUSVZBVEVEIiwiVVNFUl9JTkZPIiwiUEVORElOR19DTElDS1MiLCJMQVNUX1NZTkNfVElNRSIsIlRPVEFMX0NMSUNLUyIsIkxBU1RfVVBEQVRFX0NIRUNLX1RJTUUiLCJMQVNUX0FOTk9VTkNFTUVOVF9GRVRDSF9USU1FIiwiQ0FDSEVEX0FOTk9VTkNFTUVOVFMiLCJDQUNIRURfVVBEQVRFX0lORk8iLCJJR05PUkVEX1ZFUlNJT04iLCJGT1JDRV9VUERBVEVfUkVRVUlSRUQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX3N5c3RlbTIiLCJfY29uZmlnIiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9wcm9taXNpZmllZFN0b3JhZ2VHZXQiLCJrZXkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN0b3JhZ2UiLCJnZXQiLCJzdWNjZXNzIiwiZGF0YSIsImZhaWwiLCJfZGVmYXVsdCIsInRpbWUiLCJwZXROYW1lIiwidXNlcklkIiwib25Jbml0IiwibG9hZFVzZXJJbmZvIiwidXBkYXRlVGltZSIsInNldEludGVydmFsIiwiY29uc29sZSIsImxvZyIsInVzZXJJbmZvSlNPTiIsInVzZXJJbmZvIiwiSlNPTiIsInBhcnNlIiwiaWQiLCJwZXRfbmFtZSIsIndhcm4iLCJlcnJvciIsIm5vdyIsIkRhdGUiLCJob3VycyIsImdldEhvdXJzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiaGFuZGxlQ2xvdWRTeW5jIiwicm91dGVyIiwicHVzaCIsInVyaSIsImdvQmFjayIsImJhY2siLCJnb1RvQWJvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUNPLE1BQU1BLFNBQU1DLFFBQUFBLE1BQUEsR0FBRzs0QkFFcEJDLFFBQVE7Z0NBQ05DLFVBQVU7NEJBQ1o7NEJBTUFDLEtBQUs7Z0NBQ0hDLE1BQU07Z0NBQ05DLFNBQVM7Z0NBQ1RDLGNBQWM7Z0NBQ2RDLHNCQUFzQjtnQ0FDdEJDLGVBQWU7Z0NBQ2ZDLFlBQVk7Z0NBR1pDLHVCQUF1QjtnQ0FDdkJDLHlCQUF5Qjs0QkFD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