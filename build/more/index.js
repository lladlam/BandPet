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
                                        key: _config.CONFIG.STORAGE_KEYS.USER_INFO,
                                        success: (userInfoData)=>{
                                            if (userInfoData && userInfoData.value) {
                                                try {
                                                    const parsed = JSON.parse(userInfoData.value);
                                                    resolve({
                                                        isActivated: true,
                                                        userInfo: parsed
                                                    });
                                                } catch (e) {
                                                    resolve({
                                                        isActivated: false,
                                                        userInfo: null
                                                    });
                                                }
                                            } else resolve({
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZVxcaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvYXV0aC5qcyIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvY29uZmlnLmpzIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvbW9yZS9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCYW5kUGV0L3NyYy9jb21tb24vanMvYXV0aC5qc1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQHN5c3RlbS5zdG9yYWdlJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25maWcuanMnO1xuXG5leHBvcnQgY29uc3QgYXV0aCA9IHtcbiAgLyoqXG4gICAqIEdldHMgdGhlIHVzZXIncyBhY3RpdmF0aW9uIHN0YXRlIGZyb20gc3RvcmFnZS5cbiAgICogUmV0dXJucyB0cnVlIGlmIHVzZXIgaW5mbyBleGlzdHMgaW4gc3RvcmFnZS5cbiAgICovXG4gIGFzeW5jIGdldEFjdGl2YXRpb25TdGF0ZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHN0b3JhZ2UuZ2V0KHtcbiAgICAgICAga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTyxcbiAgICAgICAgc3VjY2VzczogKHVzZXJJbmZvRGF0YSkgPT4ge1xuICAgICAgICAgIGlmICh1c2VySW5mb0RhdGEgJiYgdXNlckluZm9EYXRhLnZhbHVlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHVzZXJJbmZvRGF0YS52YWx1ZSk7XG4gICAgICAgICAgICAgIHJlc29sdmUoeyBpc0FjdGl2YXRlZDogdHJ1ZSwgdXNlckluZm86IHBhcnNlZCB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh7IGlzQWN0aXZhdGVkOiBmYWxzZSwgdXNlckluZm86IG51bGwgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBpc0FjdGl2YXRlZDogZmFsc2UsIHVzZXJJbmZvOiBudWxsIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoeyBpc0FjdGl2YXRlZDogZmFsc2UsIHVzZXJJbmZvOiBudWxsIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbiIsIi8vIGNvbmZpZy5qc1xuZXhwb3J0IGNvbnN0IENPTkZJRyA9IHtcbiAgLy8g5Lit6L2s5pyN5Yqh5Zmo6YWN572uXG4gIFNFUlZFUjoge1xuICAgIEJBU0VfVVJMOiAnaHR0cDovLzEwMy4yMDUuMjUzLjg3OjIyMjA3J1xuICB9LFxuICBcbiAgLy8g5rOo5oSP77yaVVJMIOWJjee8gOWcqCBhcGktc2VydmljZS5qcyDkuK3noaznvJbnoIHkuoZcbiAgLy8g6L+Z6YeM5LiN5YaN6ZyA6KaB6YWN572uXG4gIFxuICAvLyDlupTnlKjphY3nva5cbiAgQVBQOiB7XG4gICAgTkFNRTogJ0JhbmRQZXQnLFxuICAgIFZFUlNJT046ICcwLjMuNSBBbHBoYScsXG4gICAgTUFYX0NMSUNLU19QRVJfQkFUQ0g6IDUwLFxuICAgIFNZTkNfSU5URVJWQUw6IDMwMDAwMCxcbiAgICBSQU5LX0xJTUlUOiAxMFxuICB9LFxuICBcbiAgLy8g5a2Y5YKo6ZSu5ZCNXG4gIFNUT1JBR0VfS0VZUzoge1xuICAgIERFVklDRV9JRDogJ2RldmljZV9pZCcsXG4gICAgVVNFUl9JTkZPOiAndXNlcl9pbmZvJyxcbiAgICBQRU5ESU5HX0NMSUNLUzogJ3BlbmRpbmdfY2xpY2tzJyxcbiAgICBMQVNUX1NZTkNfVElNRTogJ2xhc3Rfc3luY190aW1lJyxcbiAgICBUT1RBTF9DTElDS1M6ICd0b3RhbF9jbGlja3MnXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjYuOFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS42LjhcIjsiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uL2JhY2sucG5nXCIgY2xhc3M9XCJwYWdlLWhlYWRlci1iYWNrLWJ1dHRvblwiIG9uY2xpY2s9XCJnb0JhY2tcIj48L2ltYWdlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRpdGxlLXRpbWVcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtdGltZS1kaXNwbGF5XCI+e3sgdGltZSB9fTwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtaGVhZGVyLXRpdGxlXCI+5pu05aSaPC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWxpc3RcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiIG9uY2xpY2s9XCJnb1RvKCdsZWFkZXJib2FyZCcpXCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJtZW51LXRleHRcIj7mjpLooYzmppw8L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCIgb25jbGljaz1cImdvVG8oJ2V4Y2hhbmdlJylcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cIm1lbnUtdGV4dFwiPueJqeWTgeS6pOaNojwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiBvbmNsaWNrPVwiZ29UbygnbWFya2V0JylcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cIm1lbnUtdGV4dFwiPueJqeWTgeW4guWcujwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiBvbmNsaWNrPVwiZ29UbygnY3VzdG9taXplJylcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cIm1lbnUtdGV4dFwiPuiHquWumuS5ieWuoOeJqTwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiBvbmNsaWNrPVwiZ29Ubygnc2V0dGluZ3MnKVwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibWVudS10ZXh0XCI+6K6+572uPC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAucGFnZS10aW1lLWRpc3BsYXkge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUU5MEZGO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5wYWdlLWhlYWRlci1iYWNrLWFycm93IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cbiAgLmhlYWRlci10aXRsZS10aW1lIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnBhZ2UtY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAubWVudS1saXN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgLm1lbnUtaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTsgLyogRXZlbiBkYXJrZXIgZ3JleSAqL1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAubWVudS10ZXh0IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xuICBpbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vY29tbW9uL2pzL2F1dGguanMnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhOiB7XG4gICAgICB0aW1lOiAnMDA6MDAnXG4gICAgfSxcbiAgICBvbkluaXQoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICAgIHNldEludGVydmFsKHRoaXMudXBkYXRlVGltZSwgNTAwMCk7XG4gICAgfSxcbiAgICB1cGRhdGVUaW1lKCkge1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgY29uc3QgbWludXRlcyA9IG5vdy5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgdGhpcy50aW1lID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xuICAgIH0sXG4gICAgZ29CYWNrKCkge1xuICAgICAgcm91dGVyLmJhY2soKTtcbiAgICB9LFxuICAgIGFzeW5jIGdvVG8ocGFnZSkge1xuICAgICAgY29uc3QgcHJvdGVjdGVkUm91dGVzID0gWydsZWFkZXJib2FyZCcsICdleGNoYW5nZScsICdtYXJrZXQnXTtcbiAgICAgIGlmIChwcm90ZWN0ZWRSb3V0ZXMuaW5jbHVkZXMocGFnZSkpIHtcbiAgICAgICAgY29uc3QgeyBpc0FjdGl2YXRlZCB9ID0gYXdhaXQgYXV0aC5nZXRBY3RpdmF0aW9uU3RhdGUoKTtcbiAgICAgICAgaWYgKGlzQWN0aXZhdGVkKSB7XG4gICAgICAgICAgcm91dGVyLnB1c2goeyB1cmk6IHBhZ2UgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm91dGVyLnB1c2goeyB1cmk6ICdhY3RpdmF0ZScgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdXRlci5wdXNoKHsgdXJpOiBwYWdlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX3N5c3RlbTIiLCJfY29uZmlnIiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsImF1dGgiLCJleHBvcnRzIiwiZ2V0QWN0aXZhdGlvblN0YXRlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJnZXQiLCJrZXkiLCJDT05GSUciLCJTVE9SQUdFX0tFWVMiLCJVU0VSX0lORk8iLCJzdWNjZXNzIiwidXNlckluZm9EYXRhIiwidmFsdWUiLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJpc0FjdGl2YXRlZCIsInVzZXJJbmZvIiwiZmFpbCIsIlNFUlZFUiIsIkJBU0VfVVJMIiwiQVBQIiwiTkFNRSIsIlZFUlNJT04iLCJNQVhfQ0xJQ0tTX1BFUl9CQVRDSCIsIlNZTkNfSU5URVJWQUwiLCJSQU5LX0xJTUlUIiwiREVWSUNFX0lEIiwiUEVORElOR19DTElDS1MiLCJMQVNUX1NZTkNfVElNRSIsIlRPVEFMX0NMSUNLUyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJfYXV0aCIsIl9kZWZhdWx0IiwiZGF0YSIsInRpbWUiLCJvbkluaXQiLCJ1cGRhdGVUaW1lIiwic2V0SW50ZXJ2YWwiLCJub3ciLCJEYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImdvQmFjayIsInJvdXRlciIsImJhY2siLCJnb1RvIiwicGFnZSIsInByb3RlY3RlZFJvdXRlcyIsImluY2x1ZGVzIiwicHVzaCIsInVyaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQ0EsSUFBQUEsVUFBQUMsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUMsV0FBQUYsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUUsVUFBQUMsb0JBQUE7d0JBQXFDLFNBQUFKLHVCQUFBSyxDQUFBOzRCQUFBLE9BQUFBLEtBQUFBLEVBQUFDLFVBQUEsR0FBQUQsSUFBQTtnQ0FBQUUsU0FBQUY7NEJBQUE7d0JBQUE7d0JBRTlCLE1BQU1HLE9BQUlDLFFBQUFBLElBQUEsR0FBRzs0QkFLbEIsTUFBTUM7Z0NBQ0osT0FBTyxJQUFJQyxRQUFTQyxDQUFBQTtvQ0FDbEJiLFFBQUFRLE9BQU8sQ0FBQ00sR0FBRyxDQUFDO3dDQUNWQyxLQUFLWCxRQUFBWSxNQUFNLENBQUNDLFlBQVksQ0FBQ0MsU0FBUzt3Q0FDbENDLFNBQVVDLENBQUFBOzRDQUNSLElBQUlBLGdCQUFnQkEsYUFBYUMsS0FBSyxFQUFFO2dEQUN0QyxJQUFJO29EQUNGLE1BQU1DLFNBQVNDLEtBQUtDLEtBQUssQ0FBQ0osYUFBYUMsS0FBSztvREFDNUNSLFFBQVE7d0RBQUVZLGFBQWE7d0RBQU1DLFVBQVVKO29EQUFPO2dEQUNoRCxFQUFFLE9BQU9oQixHQUFHO29EQUNWTyxRQUFRO3dEQUFFWSxhQUFhO3dEQUFPQyxVQUFVO29EQUFLO2dEQUMvQzs0Q0FDRixPQUNFYixRQUFRO2dEQUFFWSxhQUFhO2dEQUFPQyxVQUFVOzRDQUFLO3dDQUVqRDt3Q0FDQUMsTUFBTUE7NENBQ0pkLFFBQVE7Z0RBQUVZLGFBQWE7Z0RBQU9DLFVBQVU7NENBQUs7d0NBQy9DO29DQUNGO2dDQUNGOzRCQUNGO3dCQUNGOzs7Ozs7Ozt3QkMvQk8sTUFBTVYsU0FBTU4sUUFBQUEsTUFBQSxHQUFHOzRCQUVwQmtCLFFBQVE7Z0NBQ05DLFVBQVU7NEJBQ1o7NEJBTUFDLEtBQUs7Z0NBQ0hDLE1BQU07Z0NBQ05DLFNBQVM7Z0NBQ1RDLHNCQUFzQjtnQ0FDdEJDLGVBQWU7Z0NBQ2ZDLFlBQVk7NEJBQ2Q7NEJBR0FsQixjQUFjO2dDQUNabUIsV0FBVztnQ0FDWGxCLFdBQVc7Z0NBQ1htQixnQkFBZ0I7Z0NBQ2hCQyxnQkFBZ0I7Z0NBQ2hCQyxjQUFjOzRCQUNoQjt3QkFDRjs7Ozs7Ozs7Ozs7Ozs7b0JDM0JBQyxvQkFBb0IsRUFBRSxHQUFHLElBQU87OztvQkNBaENBLG9CQUFvQixJQUFJLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQ3lHekIsSUFBQXhDLFVBQUFDLHVCQUFBQyxlQUFBO3dCQUNBLElBQUF1QyxRQUFBcEMsb0JBQUE7d0JBQTRDLFNBQUFKLHVCQUFBSyxDQUFBOzRCQUFBLE9BQUFBLEtBQUFBLEVBQUFDLFVBQUEsR0FBQUQsSUFBQTtnQ0FBQUUsU0FBQUY7NEJBQUE7d0JBQUE7d0JBQUEsSUFBQW9DLFdBQUFoQyxRQUFBRixPQUFBLEdBRTdCOzRCQUNibUMsTUFBTTtnQ0FDSkMsTUFBTTs0QkFDUjs0QkFDQUM7Z0NBQ0UsSUFBSSxDQUFDQyxVQUFVO2dDQUNmQyxZQUFZLElBQUksQ0FBQ0QsVUFBVSxFQUFFOzRCQUMvQjs0QkFDQUE7Z0NBQ0UsTUFBTUUsTUFBTSxJQUFJQztnQ0FDaEIsTUFBTUMsUUFBUUYsSUFBSUcsUUFBUSxHQUFHQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHO2dDQUNwRCxNQUFNQyxVQUFVTixJQUFJTyxVQUFVLEdBQUdILFFBQVEsR0FBR0MsUUFBUSxDQUFDLEdBQUc7Z0NBQ3hELElBQUksQ0FBQ1QsSUFBSSxHQUFHLEdBQUdNLE1BQU0sQ0FBQyxFQUFFSSxTQUFTOzRCQUNuQzs0QkFDQUU7Z0NBQ0VDLFFBQUFBLE9BQU0sQ0FBQ0MsSUFBSTs0QkFDYjs0QkFDQSxNQUFNQyxNQUFLQyxJQUFJO2dDQUNiLE1BQU1DLGtCQUFrQjtvQ0FBQztvQ0FBZTtvQ0FBWTtpQ0FBUztnQ0FDN0QsSUFBSUEsZ0JBQWdCQyxRQUFRLENBQUNGLE9BQU87b0NBQ2xDLE1BQU0sRUFBRW5DLFdBQVcsRUFBRSxHQUFHLE1BQU1oQixNQUFBQSxJQUFJLENBQUNFLGtCQUFrQjtvQ0FDckQsSUFBSWMsYUFDRmdDLFFBQUFBLE9BQU0sQ0FBQ00sSUFBSSxDQUFDO3dDQUFFQyxLQUFLSjtvQ0FBSzt5Q0FFeEJILFFBQUFBLE9BQU0sQ0FBQ00sSUFBSSxDQUFDO3dDQUFFQyxLQUFLO29DQUFXO2dDQUVsQyxPQUNFUCxRQUFBQSxPQUFNLENBQUNNLElBQUksQ0FBQztvQ0FBRUMsS0FBS0o7Z0NBQUs7NEJBRTVCO3dCQUNGIn0=