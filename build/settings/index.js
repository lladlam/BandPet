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
                            SUPABASE: {
                                URL: 'https://jqubyqnhgyxazpnpjyqf.supabase.co',
                                KEY: 'sb_publishable__UMYGv1VDo-ZrOvuUgZLFg_WKqyc7M-'
                            },
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
                                right: "20px",
                                bottom: "30px",
                                width: "120px",
                                height: "60px",
                                backgroundColor: "#1a1a1a",
                                borderRadius: "30px",
                                justifyContent: "center",
                                alignItems: "center"
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
                        var _config = __webpack_require__("./src/common/js/config.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
                            data: {
                                time: '00:00',
                                petName: '加载中...',
                                userId: '加载中...'
                            },
                            onInit () {
                                this.loadUserInfo();
                                this.updateTime();
                                setInterval(this.updateTime, 5000);
                            },
                            async loadUserInfo () {
                                try {
                                    const userInfoResult = await _system2.default.get({
                                        key: _config.CONFIG.STORAGE_KEYS.USER_INFO
                                    });
                                    if (userInfoResult.value) {
                                        const userInfo = JSON.parse(userInfoResult.value);
                                        if (userInfo) {
                                            this.petName = userInfo.pet_name || '(无名)';
                                            this.userId = userInfo.id || '无';
                                        } else {
                                            this.petName = '(未激活)';
                                            this.userId = '无';
                                        }
                                    } else {
                                        this.petName = '(未激活)';
                                        this.userId = '无';
                                    }
                                } catch (e) {
                                    console.error("Error loading user info in settings:", e);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3NcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL0JhbmRQZXQvc3JjL3NldHRpbmdzL2luZGV4LnV4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbmZpZy5qc1xuZXhwb3J0IGNvbnN0IENPTkZJRyA9IHtcbiAgLy8gU3VwYWJhc2XphY3nva5cbiAgU1VQQUJBU0U6IHtcbiAgICBVUkw6ICdodHRwczovL2pxdWJ5cW5oZ3l4YXpwbnBqeXFmLnN1cGFiYXNlLmNvJyxcbiAgICBLRVk6ICdzYl9wdWJsaXNoYWJsZV9fVU1ZR3YxVkRvLVpyT3Z1VWdaTEZnX1dLcXljN00tJywgLy8g6K+35pu/5o2i5Li65L2g55qEU3VwYWJhc2XljL/lkI3lr4bpkqVcbiAgfSxcbiAgXG4gIC8vIOW6lOeUqOmFjee9rlxuICBBUFA6IHtcbiAgICBOQU1FOiAnQmFuZFBldCcsXG4gICAgVkVSU0lPTjogJzEuMC4wJyxcbiAgICBNQVhfQ0xJQ0tTX1BFUl9CQVRDSDogNTAsIC8vIOaJuemHj+S4iuS8oOacgOWkp+eCueWHu+aVsFxuICAgIFNZTkNfSU5URVJWQUw6IDMwMDAwMCwgLy8gNeWIhumSn+WQjOatpeS4gOasoVxuICAgIFJBTktfTElNSVQ6IDEwIC8vIOaOkuihjOamnOaYvuekuuaVsOmHj1xuICB9LFxuICBcbiAgLy8g5a2Y5YKo6ZSu5ZCNXG4gIFNUT1JBR0VfS0VZUzoge1xuICAgIElTX0xPQ0FMTFlfQUNUSVZBVEVEOiAnaXNfbG9jYWxseV9hY3RpdmF0ZWQnLFxuICAgIERFVklDRV9JRDogJ2RldmljZV9pZCcsXG4gICAgVVNFUl9JTkZPOiAndXNlcl9pbmZvJyxcbiAgICBQRU5ESU5HX0NMSUNLUzogJ3BlbmRpbmdfY2xpY2tzJyxcbiAgICBMQVNUX1NZTkNfVElNRTogJ2xhc3Rfc3luY190aW1lJyxcbiAgICBUT1RBTF9DTElDS1M6ICd0b3RhbF9jbGlja3MnXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjYuOFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS42LjhcIjsiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uL2JhY2sucG5nXCIgY2xhc3M9XCJwYWdlLWhlYWRlci1iYWNrLWJ1dHRvblwiIG9uY2xpY2s9XCJnb0JhY2tcIj48L2ltYWdlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRpdGxlLXRpbWVcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtdGltZS1kaXNwbGF5XCI+e3sgdGltZSB9fTwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtaGVhZGVyLXRpdGxlXCI+6K6+572uPC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWl0ZW1cIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImluZm8tbGFiZWxcIj7mgqjnmoTlrqDniak6PC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaW5mby12YWx1ZVwiPnt7IHBldE5hbWUgfX08L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1pdGVtXCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJpbmZvLWxhYmVsXCI+SUQ6PC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaW5mby12YWx1ZVwiPnt7IHVzZXJJZCB9fTwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtYnV0dG9uXCIgb25jbGljaz1cImdvVG9BYm91dFwiPlxuICAgICAgICA8dGV4dCBjbGFzcz1cImFib3V0LWJ1dHRvbi10ZXh0XCI+5YWz5LqOPC90ZXh0PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIEFkZCB0aGlzIGZvciBhYnNvbHV0ZSBwb3NpdGlvbmluZyBjb250ZXh0ICovXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5wYWdlLWhlYWRlci1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLnBhZ2UtdGltZS1kaXNwbGF5IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB9XG4gIC5wYWdlLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5wYWdlLWhlYWRlci1iYWNrLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFOTBGRjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAucGFnZS1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxuICAuaGVhZGVyLXRpdGxlLXRpbWUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAucGFnZS1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5zZXR0aW5ncy1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAuaW5mby1pdGVtIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBOyAvKiBFdmVuIGRhcmtlciBncmV5ICovXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuICAuaW5mby1sYWJlbCB7XG4gICAgY29sb3I6ICNBQUFBQUE7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG4gIC5pbmZvLXZhbHVlIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgLmFib3V0LWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIGJvdHRvbTogMzBweDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7IC8qIEV2ZW4gZGFya2VyIGdyZXkgKi9cbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmFib3V0LWJ1dHRvbi10ZXh0IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xuICBpbXBvcnQgc3RvcmFnZSBmcm9tICdAc3lzdGVtLnN0b3JhZ2UnO1xuICBpbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuLi9jb21tb24vanMvY29uZmlnLmpzJztcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YToge1xuICAgICAgdGltZTogJzAwOjAwJyxcbiAgICAgIHBldE5hbWU6ICfliqDovb3kuK0uLi4nLFxuICAgICAgdXNlcklkOiAn5Yqg6L295LitLi4uJ1xuICAgIH0sXG4gICAgb25Jbml0KCkge1xuICAgICAgdGhpcy5sb2FkVXNlckluZm8oKTtcbiAgICAgIHRoaXMudXBkYXRlVGltZSgpO1xuICAgICAgc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVUaW1lLCA1MDAwKTsgLy8gVXBkYXRlIGV2ZXJ5IDUgc2Vjb25kc1xuICAgIH0sXG4gICAgYXN5bmMgbG9hZFVzZXJJbmZvKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlckluZm9SZXN1bHQgPSBhd2FpdCBzdG9yYWdlLmdldCh7IGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8gfSk7XG4gICAgICAgIGlmICh1c2VySW5mb1Jlc3VsdC52YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IHVzZXJJbmZvID0gSlNPTi5wYXJzZSh1c2VySW5mb1Jlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgICAgICB0aGlzLnBldE5hbWUgPSB1c2VySW5mby5wZXRfbmFtZSB8fCAnKOaXoOWQjSknO1xuICAgICAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySW5mby5pZCB8fCAn5pegJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wZXROYW1lID0gJyjmnKrmv4DmtLspJztcbiAgICAgICAgICAgIHRoaXMudXNlcklkID0gJ+aXoCc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wZXROYW1lID0gJyjmnKrmv4DmtLspJztcbiAgICAgICAgICAgIHRoaXMudXNlcklkID0gJ+aXoCc7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgdXNlciBpbmZvIGluIHNldHRpbmdzOlwiLCBlKTtcbiAgICAgICAgdGhpcy5wZXROYW1lID0gJ+WKoOi9veWksei0pSc7XG4gICAgICAgIHRoaXMudXNlcklkID0gJ+WKoOi9veWksei0pSc7XG4gICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVUaW1lKCkge1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgY29uc3QgbWludXRlcyA9IG5vdy5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgdGhpcy50aW1lID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xuICAgIH0sXG4gICAgZ29CYWNrKCkge1xuICAgICAgcm91dGVyLmJhY2soKTtcbiAgICB9LFxuICAgIGdvVG9BYm91dCgpIHtcbiAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgdXJpOiAnYWJvdXQnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PiJdLCJuYW1lcyI6WyJDT05GSUciLCJleHBvcnRzIiwiU1VQQUJBU0UiLCJVUkwiLCJLRVkiLCJBUFAiLCJOQU1FIiwiVkVSU0lPTiIsIk1BWF9DTElDS1NfUEVSX0JBVENIIiwiU1lOQ19JTlRFUlZBTCIsIlJBTktfTElNSVQiLCJTVE9SQUdFX0tFWVMiLCJJU19MT0NBTExZX0FDVElWQVRFRCIsIkRFVklDRV9JRCIsIlVTRVJfSU5GTyIsIlBFTkRJTkdfQ0xJQ0tTIiwiTEFTVF9TWU5DX1RJTUUiLCJUT1RBTF9DTElDS1MiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX3N5c3RlbTIiLCJfY29uZmlnIiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9kZWZhdWx0IiwiZGF0YSIsInRpbWUiLCJwZXROYW1lIiwidXNlcklkIiwib25Jbml0IiwibG9hZFVzZXJJbmZvIiwidXBkYXRlVGltZSIsInNldEludGVydmFsIiwidXNlckluZm9SZXN1bHQiLCJzdG9yYWdlIiwiZ2V0Iiwia2V5IiwidmFsdWUiLCJ1c2VySW5mbyIsIkpTT04iLCJwYXJzZSIsInBldF9uYW1lIiwiaWQiLCJjb25zb2xlIiwiZXJyb3IiLCJub3ciLCJEYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImdvQmFjayIsInJvdXRlciIsImJhY2siLCJnb1RvQWJvdXQiLCJwdXNoIiwidXJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFDTyxNQUFNQSxT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