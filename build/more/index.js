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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZVxcaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvYXV0aC5qcyIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9jb21tb24vanMvY29uZmlnLmpzIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvbW9yZS9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCYW5kUGV0L3NyYy9jb21tb24vanMvYXV0aC5qc1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcclxuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25maWcuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGggPSB7XHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgdXNlcidzIGFjdGl2YXRpb24gc3RhdGUgZnJvbSBzdG9yYWdlLlxyXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB1c2VyIGluZm8gZXhpc3RzIGluIHN0b3JhZ2UuXHJcbiAgICovXHJcbiAgYXN5bmMgZ2V0QWN0aXZhdGlvblN0YXRlKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHN0b3JhZ2UuZ2V0KHtcclxuICAgICAgICBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPLFxyXG4gICAgICAgIHN1Y2Nlc3M6ICh1c2VySW5mb0RhdGEpID0+IHtcclxuICAgICAgICAgIGlmICh1c2VySW5mb0RhdGEgJiYgdXNlckluZm9EYXRhLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZSh1c2VySW5mb0RhdGEudmFsdWUpO1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoeyBpc0FjdGl2YXRlZDogdHJ1ZSwgdXNlckluZm86IHBhcnNlZCB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoeyBpc0FjdGl2YXRlZDogZmFsc2UsIHVzZXJJbmZvOiBudWxsIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXNvbHZlKHsgaXNBY3RpdmF0ZWQ6IGZhbHNlLCB1c2VySW5mbzogbnVsbCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6ICgpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoeyBpc0FjdGl2YXRlZDogZmFsc2UsIHVzZXJJbmZvOiBudWxsIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbiIsIi8vIGNvbmZpZy5qc1xyXG5leHBvcnQgY29uc3QgQ09ORklHID0ge1xyXG4gIC8vIOS4rei9rOacjeWKoeWZqOmFjee9rlxyXG4gIFNFUlZFUjoge1xyXG4gICAgQkFTRV9VUkw6ICdodHRwOi8vMTAzLjIwNS4yNTMuODc6MjIyMDcnXHJcbiAgfSxcclxuICBcclxuICAvLyDms6jmhI/vvJpVUkwg5YmN57yA5ZyoIGFwaS1zZXJ2aWNlLmpzIOS4reehrOe8lueggeS6hlxyXG4gIC8vIOi/memHjOS4jeWGjemcgOimgemFjee9rlxyXG4gIFxyXG4gIC8vIOW6lOeUqOmFjee9rlxyXG4gIEFQUDoge1xyXG4gICAgTkFNRTogJ0JhbmRQZXQnLFxyXG4gICAgVkVSU0lPTjogJzAuMy41IEFscGhhJyxcclxuICAgIE1BWF9DTElDS1NfUEVSX0JBVENIOiA1MCxcclxuICAgIFNZTkNfSU5URVJWQUw6IDMwMDAwMCxcclxuICAgIFJBTktfTElNSVQ6IDEwXHJcbiAgfSxcclxuICBcclxuICAvLyDlrZjlgqjplK7lkI1cclxuICBTVE9SQUdFX0tFWVM6IHtcclxuICAgIERFVklDRV9JRDogJ2RldmljZV9pZCcsXHJcbiAgICBJU19MT0NBTExZX0FDVElWQVRFRDogJ2lzX2xvY2FsbHlfYWN0aXZhdGVkJyxcclxuICAgIFVTRVJfSU5GTzogJ3VzZXJfaW5mbycsXHJcbiAgICBQRU5ESU5HX0NMSUNLUzogJ3BlbmRpbmdfY2xpY2tzJyxcclxuICAgIExBU1RfU1lOQ19USU1FOiAnbGFzdF9zeW5jX3RpbWUnLFxyXG4gICAgVE9UQUxfQ0xJQ0tTOiAndG90YWxfY2xpY2tzJ1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS42LjhcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNi44XCI7IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJcIj5cclxuICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uL2JhY2sucG5nXCIgY2xhc3M9XCJwYWdlLWhlYWRlci1iYWNrLWJ1dHRvblwiIG9uY2xpY2s9XCJnb0JhY2tcIj48L2ltYWdlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGUtdGltZVwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLXRpbWUtZGlzcGxheVwiPnt7IHRpbWUgfX08L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtaGVhZGVyLXRpdGxlXCI+5pu05aSaPC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWVudS1saXN0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiIG9uY2xpY2s9XCJnb1RvKCdsZWFkZXJib2FyZCcpXCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cIm1lbnUtdGV4dFwiPuaOkuihjOamnDwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCIgb25jbGljaz1cImdvVG8oJ2V4Y2hhbmdlJylcIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibWVudS10ZXh0XCI+54mp5ZOB5Lqk5o2iPC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiBvbmNsaWNrPVwiZ29UbygnbWFya2V0JylcIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibWVudS10ZXh0XCI+54mp5ZOB5biC5Zy6PC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiBvbmNsaWNrPVwiZ29UbygnY3VzdG9taXplJylcIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibWVudS10ZXh0XCI+6Ieq5a6a5LmJ5a6g54mpPC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiBvbmNsaWNrPVwiZ29Ubygnc2V0dGluZ3MnKVwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJtZW51LXRleHRcIj7orr7nva48L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGU+XHJcbiAgLnBhZ2UtY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAucGFnZS1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLnBhZ2UtdGltZS1kaXNwbGF5IHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIH1cclxuICAucGFnZS1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcbiAgLnBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTkwRkY7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5wYWdlLWhlYWRlci1iYWNrLWFycm93IHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxuICAucGFnZS1oZWFkZXItdGl0bGUge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG4gIC5oZWFkZXItdGl0bGUtdGltZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLnBhZ2UtY29udGVudCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAubWVudS1saXN0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuICAubWVudS1pdGVtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7IC8qIEV2ZW4gZGFya2VyIGdyZXkgKi9cclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIC5tZW51LXRleHQge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcclxuICBpbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vY29tbW9uL2pzL2F1dGguanMnO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRpbWU6ICcwMDowMCdcclxuICAgIH0sXHJcbiAgICBvbkluaXQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlVGltZSgpO1xyXG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVRpbWUsIDUwMDApO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZVRpbWUoKSB7XHJcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICBjb25zdCBtaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgIHRoaXMudGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9YDtcclxuICAgIH0sXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgIHJvdXRlci5iYWNrKCk7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgZ29UbyhwYWdlKSB7XHJcbiAgICAgIGNvbnN0IHByb3RlY3RlZFJvdXRlcyA9IFsnbGVhZGVyYm9hcmQnLCAnZXhjaGFuZ2UnLCAnbWFya2V0J107XHJcbiAgICAgIGlmIChwcm90ZWN0ZWRSb3V0ZXMuaW5jbHVkZXMocGFnZSkpIHtcclxuICAgICAgICBjb25zdCB7IGlzQWN0aXZhdGVkIH0gPSBhd2FpdCBhdXRoLmdldEFjdGl2YXRpb25TdGF0ZSgpO1xyXG4gICAgICAgIGlmIChpc0FjdGl2YXRlZCkge1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goeyB1cmk6IHBhZ2UgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKHsgdXJpOiAnYWN0aXZhdGUnIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByb3V0ZXIucHVzaCh7IHVyaTogcGFnZSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbiJdLCJuYW1lcyI6WyJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfc3lzdGVtMiIsIl9jb25maWciLCJyZXF1aXJlIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiYXV0aCIsImV4cG9ydHMiLCJnZXRBY3RpdmF0aW9uU3RhdGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImdldCIsImtleSIsIkNPTkZJRyIsIlNUT1JBR0VfS0VZUyIsIlVTRVJfSU5GTyIsInN1Y2Nlc3MiLCJ1c2VySW5mb0RhdGEiLCJ2YWx1ZSIsInBhcnNlZCIsIkpTT04iLCJwYXJzZSIsImlzQWN0aXZhdGVkIiwidXNlckluZm8iLCJmYWlsIiwiU0VSVkVSIiwiQkFTRV9VUkwiLCJBUFAiLCJOQU1FIiwiVkVSU0lPTiIsIk1BWF9DTElDS1NfUEVSX0JBVENIIiwiU1lOQ19JTlRFUlZBTCIsIlJBTktfTElNSVQiLCJERVZJQ0VfSUQiLCJJU19MT0NBTExZX0FDVElWQVRFRCIsIlBFTkRJTkdfQ0xJQ0tTIiwiTEFTVF9TWU5DX1RJTUUiLCJUT1RBTF9DTElDS1MiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX2F1dGgiLCJfZGVmYXVsdCIsImRhdGEiLCJ0aW1lIiwib25Jbml0IiwidXBkYXRlVGltZSIsInNldEludGVydmFsIiwibm93IiwiRGF0ZSIsImhvdXJzIiwiZ2V0SG91cnMiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJnb0JhY2siLCJyb3V0ZXIiLCJiYWNrIiwiZ29UbyIsInBhZ2UiLCJwcm90ZWN0ZWRSb3V0ZXMiLCJpbmNsdWRlcyIsInB1c2giLCJ1cmkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUNBLElBQUFBLFVBQUFDLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFDLFdBQUFGLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFFLFVBQUFDLG9CQUFBO3dCQUFxQyxTQUFBSix1QkFBQUssQ0FBQTs0QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7Z0NBQUFFLFNBQUFGOzRCQUFBO3dCQUFBO3dCQUU5QixNQUFNRyxPQUFJQyxRQUFBQSxJQUFBLEdBQUc7NEJBS2xCLE1BQU1DO2dDQUNKLE9BQU8sSUFBSUMsUUFBU0MsQ0FBQUE7b0NBQ2xCYixRQUFBUSxPQUFPLENBQUNNLEdBQUcsQ0FBQzt3Q0FDVkMsS0FBS1gsUUFBQVksTUFBTSxDQUFDQyxZQUFZLENB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