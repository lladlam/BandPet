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
                    "./src/common/js/auth.js" (__unused_rspack_module, exports, __webpack_require__) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.auth = void 0;
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.router"));
                        var _config = __webpack_require__("./src/common/js/config.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        const auth = exports.auth = {
                            async getActivationState () {
                                return new Promise((resolve)=>{
                                    _system.default.get({
                                        key: 'is_activated',
                                        success: (isActivatedData)=>{
                                            if ('true' === isActivatedData) _system.default.get({
                                                key: _config.CONFIG.STORAGE_KEYS.USER_INFO,
                                                success: (userInfoData)=>{
                                                    resolve({
                                                        isActivated: true,
                                                        userInfo: userInfoData ? JSON.parse(userInfoData) : null
                                                    });
                                                },
                                                fail: ()=>{
                                                    resolve({
                                                        isActivated: false,
                                                        userInfo: null
                                                    });
                                                }
                                            });
                                            else resolve({
                                                isActivated: false,
                                                userInfo: null
                                            });
                                        },
                                        fail: ()=>{
                                            resolve({
                                                isActivated: false,
                                                userInfo: null
                                            });
                                        }
                                    });
                                });
                            }
                        };
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
                                borderRadius: "40px",
                                backgroundColor: "#1e90ff",
                                justifyContent: "center",
                                alignItems: "center",
                                marginRight: "10px"
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
                                height: "100%",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "menu-list"
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
                                    "menu-item"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "90px",
                                borderRadius: "20px",
                                backgroundColor: "#1a1a1a",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: "15px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "menu-text"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                fontSize: "35px"
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
                        var _auth = __webpack_require__("./src/common/js/auth.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
                            data: {
                                time: '00:00'
                            },
                            onInit () {
                                this.updateTime();
                                setInterval(this.updateTime, 5000);
                            },
                            updateTime () {
                                const now = new Date();
                                const hours = now.getHours().toString().padStart(2, '0');
                                const minutes = now.getMinutes().toString().padStart(2, '0');
                                this.time = `${hours}:${minutes}`;
                            },
                            goBack () {
                                _system.default.back();
                            },
                            async goTo (page) {
                                const protectedRoutes = [
                                    'leaderboard',
                                    'exchange',
                                    'market'
                                ];
                                if (protectedRoutes.includes(page)) {
                                    const { isActivated } = await _auth.auth.getActivationState();
                                    if (isActivated) _system.default.push({
                                        uri: page
                                    });
                                    else _system.default.push({
                                        uri: 'activate'
                                    });
                                } else _system.default.push({
                                    uri: page
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
                                                value: "更多"
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
                                            "menu-list"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "menu-item"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.goTo("leaderboard", evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "menu-text"
                                                ],
                                                value: "排行榜"
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "menu-item"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.goTo("exchange", evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "menu-text"
                                                ],
                                                value: "物品交换"
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "menu-item"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.goTo("market", evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "menu-text"
                                                ],
                                                value: "物品市场"
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "menu-item"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.goTo("customize", evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "menu-text"
                                                ],
                                                value: "自定义宠物"
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "menu-item"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.goTo("settings", evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "menu-text"
                                                ],
                                                value: "设置"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZVxcaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvYXV0aC5qcyIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvY29uZmlnLmpzIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvbW9yZS9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCYW5kUGV0L3NyYy9jb21tb24vanMvYXV0aC5qc1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQHN5c3RlbS5zdG9yYWdlJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25maWcuanMnO1xuXG5leHBvcnQgY29uc3QgYXV0aCA9IHtcbiAgLyoqXG4gICAqIEdldHMgdGhlIHVzZXIncyBhY3RpdmF0aW9uIHN0YXRlIGZyb20gc3RvcmFnZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8e2lzQWN0aXZhdGVkOiBib29sZWFuLCB1c2VySW5mbzogYW55fT59XG4gICAqL1xuICBhc3luYyBnZXRBY3RpdmF0aW9uU3RhdGUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBzdG9yYWdlLmdldCh7XG4gICAgICAgIGtleTogJ2lzX2FjdGl2YXRlZCcsXG4gICAgICAgIHN1Y2Nlc3M6IChpc0FjdGl2YXRlZERhdGEpID0+IHtcbiAgICAgICAgICBpZiAoaXNBY3RpdmF0ZWREYXRhID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHN0b3JhZ2UuZ2V0KHtcbiAgICAgICAgICAgICAga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTyxcbiAgICAgICAgICAgICAgc3VjY2VzczogKHVzZXJJbmZvRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgaXNBY3RpdmF0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICB1c2VySW5mbzogdXNlckluZm9EYXRhID8gSlNPTi5wYXJzZSh1c2VySW5mb0RhdGEpIDogbnVsbFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmYWlsOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQWN0aXZhdGVkIGJ1dCBjb3VsZG4ndCBnZXQgdXNlciBpbmZvXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7IGlzQWN0aXZhdGVkOiBmYWxzZSwgdXNlckluZm86IG51bGwgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBOb3QgYWN0aXZhdGVkXG4gICAgICAgICAgICByZXNvbHZlKHsgaXNBY3RpdmF0ZWQ6IGZhbHNlLCB1c2VySW5mbzogbnVsbCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6ICgpID0+IHtcbiAgICAgICAgICAvLyBGYWlsZWQgdG8gZ2V0IGFjdGl2YXRpb24gc3RhdHVzXG4gICAgICAgICAgcmVzb2x2ZSh7IGlzQWN0aXZhdGVkOiBmYWxzZSwgdXNlckluZm86IG51bGwgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuIiwiLy8gY29uZmlnLmpzXG5leHBvcnQgY29uc3QgQ09ORklHID0ge1xuICAvLyDms6jmhI/vvJpVUkwg5YmN57yA5ZyoIGFwaS1zZXJ2aWNlLmpzIOS4reehrOe8lueggeS6hlxuICAvLyDov5nph4zkuI3lho3pnIDopoHphY3nva5cbiAgXG4gIC8vIOW6lOeUqOmFjee9rlxuICBBUFA6IHtcbiAgICBOQU1FOiAnQmFuZFBldCcsXG4gICAgVkVSU0lPTjogJzEuMC4wJyxcbiAgICBNQVhfQ0xJQ0tTX1BFUl9CQVRDSDogNTAsXG4gICAgU1lOQ19JTlRFUlZBTDogMzAwMDAwLFxuICAgIFJBTktfTElNSVQ6IDEwXG4gIH0sXG4gIFxuICAvLyDlrZjlgqjplK7lkI1cbiAgU1RPUkFHRV9LRVlTOiB7XG4gICAgSVNfTE9DQUxMWV9BQ1RJVkFURUQ6ICdpc19sb2NhbGx5X2FjdGl2YXRlZCcsXG4gICAgREVWSUNFX0lEOiAnZGV2aWNlX2lkJyxcbiAgICBVU0VSX0lORk86ICd1c2VyX2luZm8nLFxuICAgIFBFTkRJTkdfQ0xJQ0tTOiAncGVuZGluZ19jbGlja3MnLFxuICAgIExBU1RfU1lOQ19USU1FOiAnbGFzdF9zeW5jX3RpbWUnLFxuICAgIFRPVEFMX0NMSUNLUzogJ3RvdGFsX2NsaWNrcydcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNi44XCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjYuOFwiOyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vYmFjay5wbmdcIiBjbGFzcz1cInBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uXCIgb25jbGljaz1cImdvQmFja1wiPjwvaW1hZ2U+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGUtdGltZVwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicGFnZS10aW1lLWRpc3BsYXlcIj57eyB0aW1lIH19PC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicGFnZS1oZWFkZXItdGl0bGVcIj7mm7TlpJo8L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtbGlzdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCIgb25jbGljaz1cImdvVG8oJ2xlYWRlcmJvYXJkJylcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cIm1lbnUtdGV4dFwiPuaOkuihjOamnDwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiBvbmNsaWNrPVwiZ29UbygnZXhjaGFuZ2UnKVwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibWVudS10ZXh0XCI+54mp5ZOB5Lqk5o2iPC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiIG9uY2xpY2s9XCJnb1RvKCdtYXJrZXQnKVwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibWVudS10ZXh0XCI+54mp5ZOB5biC5Zy6PC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiIG9uY2xpY2s9XCJnb1RvKCdjdXN0b21pemUnKVwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibWVudS10ZXh0XCI+6Ieq5a6a5LmJ5a6g54mpPC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiIG9uY2xpY2s9XCJnb1RvKCdzZXR0aW5ncycpXCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJtZW51LXRleHRcIj7orr7nva48L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAucGFnZS1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAucGFnZS1oZWFkZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5wYWdlLXRpbWUtZGlzcGxheSB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgfVxuICAucGFnZS1oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTBweDtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuICAucGFnZS1oZWFkZXItYmFjay1idXR0b24ge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTkwRkY7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLWJhY2stYXJyb3cge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgfVxuICAucGFnZS1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxuICAuaGVhZGVyLXRpdGxlLXRpbWUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAucGFnZS1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5tZW51LWxpc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAubWVudS1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBOyAvKiBFdmVuIGRhcmtlciBncmV5ICovXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIC5tZW51LXRleHQge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XG4gIGltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9jb21tb24vanMvYXV0aC5qcyc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGE6IHtcbiAgICAgIHRpbWU6ICcwMDowMCdcbiAgICB9LFxuICAgIG9uSW5pdCgpIHtcbiAgICAgIHRoaXMudXBkYXRlVGltZSgpO1xuICAgICAgc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVUaW1lLCA1MDAwKTtcbiAgICB9LFxuICAgIHVwZGF0ZVRpbWUoKSB7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgaG91cnMgPSBub3cuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICBjb25zdCBtaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICB0aGlzLnRpbWUgPSBgJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfSxcbiAgICBnb0JhY2soKSB7XG4gICAgICByb3V0ZXIuYmFjaygpO1xuICAgIH0sXG4gICAgYXN5bmMgZ29UbyhwYWdlKSB7XG4gICAgICBjb25zdCBwcm90ZWN0ZWRSb3V0ZXMgPSBbJ2xlYWRlcmJvYXJkJywgJ2V4Y2hhbmdlJywgJ21hcmtldCddO1xuICAgICAgaWYgKHByb3RlY3RlZFJvdXRlcy5pbmNsdWRlcyhwYWdlKSkge1xuICAgICAgICBjb25zdCB7IGlzQWN0aXZhdGVkIH0gPSBhd2FpdCBhdXRoLmdldEFjdGl2YXRpb25TdGF0ZSgpO1xuICAgICAgICBpZiAoaXNBY3RpdmF0ZWQpIHtcbiAgICAgICAgICByb3V0ZXIucHVzaCh7IHVyaTogcGFnZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3V0ZXIucHVzaCh7IHVyaTogJ2FjdGl2YXRlJyB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm91dGVyLnB1c2goeyB1cmk6IHBhZ2UgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfc3lzdGVtMiIsIl9jb25maWciLCJyZXF1aXJlIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiYXV0aCIsImV4cG9ydHMiLCJnZXRBY3RpdmF0aW9uU3RhdGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImdldCIsImtleSIsInN1Y2Nlc3MiLCJpc0FjdGl2YXRlZERhdGEiLCJDT05GSUciLCJTVE9SQUdFX0tFWVMiLCJVU0VSX0lORk8iLCJ1c2VySW5mb0RhdGEiLCJpc0FjdGl2YXRlZCIsInVzZXJJbmZvIiwiSlNPTiIsInBhcnNlIiwiZmFpbCIsIkFQUCIsIk5BTUUiLCJWRVJTSU9OIiwiTUFYX0NMSUNLU19QRVJfQkFUQ0giLCJTWU5DX0lOVEVSVkFMIiwiUkFOS19MSU1JVCIsIklTX0xPQ0FMTFlfQUNUSVZBVEVEIiwiREVWSUNFX0lEIiwiUEVORElOR19DTElDS1MiLCJMQVNUX1NZTkNfVElNRSIsIlRPVEFMX0NMSUNLUyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJfYXV0aCIsIl9kZWZhdWx0IiwiZGF0YSIsInRpbWUiLCJvbkluaXQiLCJ1cGRhdGVUaW1lIiwic2V0SW50ZXJ2YWwiLCJub3ciLCJEYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImdvQmFjayIsInJvdXRlciIsImJhY2siLCJnb1RvIiwicGFnZSIsInByb3RlY3RlZFJvdXRlcyIsImluY2x1ZGVzIiwicHVzaCIsInVyaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQ0EsSUFBQUEsVUFBQUMsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUMsV0FBQUYsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUUsVUFBQUMsb0JBQUE7d0JBQXFDLFNBQUFKLHVCQUFBSyxDQUFBOzRCQUFBLE9BQUFBLEtBQUFBLEVBQUFDLFVBQUEsR0FBQUQsSUFBQTtnQ0FBQUUsU0FBQUY7NEJBQUE7d0JBQUE7d0JBRTlCLE1BQU1HLE9BQUlDLFFBQUFBLElBQUEsR0FBRzs0QkFLbEIsTUFBTUM7Z0NBQ0osT0FBTyxJQUFJQyxRQUFTQyxDQUFBQTtvQ0FDbEJiLFFBQUFRLE9BQU8sQ0FBQ00sR0FBRyxDQUFDO3dDQUNWQyxLQUFLO3dDQUNMQyxTQUFVQyxDQUFBQTs0Q0FDUixJQUFJQSxBQUFvQixXQUFwQkEsaUJBQ0ZqQixRQUFBUSxPQUFPLENBQUNNLEdBQUcsQ0FBQztnREFDVkMsS0FBS1gsUUFBQWMsTUFBTSxDQUFDQyxZQUFZLENBQUNDLFNBQVM7Z0RBQ2xDSixTQUFVSyxDQUFBQTtvREFDUlIsUUFBUTt3REFDTlMsYUFBYTt3REFDYkMsVUFBVUYsZUFBZUcsS0FBS0MsS0FBSyxDQUFDSixnQkFBZ0I7b0RBQ3REO2dEQUNGO2dEQUNBSyxNQUFNQTtvREFFSmIs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