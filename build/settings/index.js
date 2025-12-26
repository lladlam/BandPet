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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3NcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL0JhbmRQZXQvc3JjL3NldHRpbmdzL2luZGV4LnV4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbmZpZy5qc1xyXG5leHBvcnQgY29uc3QgQ09ORklHID0ge1xyXG4gIC8vIOS4rei9rOacjeWKoeWZqOmFjee9rlxyXG4gIFNFUlZFUjoge1xyXG4gICAgQkFTRV9VUkw6ICdodHRwOi8vMTAzLjIwNS4yNTMuODc6MjIyMDcnXHJcbiAgfSxcclxuICBcclxuICAvLyDms6jmhI/vvJpVUkwg5YmN57yA5ZyoIGFwaS1zZXJ2aWNlLmpzIOS4reehrOe8lueggeS6hlxyXG4gIC8vIOi/memHjOS4jeWGjemcgOimgemFjee9rlxyXG4gIFxyXG4gIC8vIOW6lOeUqOmFjee9rlxyXG4gIEFQUDoge1xyXG4gICAgTkFNRTogJ0JhbmRQZXQnLFxyXG4gICAgVkVSU0lPTjogJzAuMy41IEFscGhhJyxcclxuICAgIE1BWF9DTElDS1NfUEVSX0JBVENIOiA1MCxcclxuICAgIFNZTkNfSU5URVJWQUw6IDMwMDAwMCxcclxuICAgIFJBTktfTElNSVQ6IDEwXHJcbiAgfSxcclxuICBcclxuICAvLyDlrZjlgqjplK7lkI1cclxuICBTVE9SQUdFX0tFWVM6IHtcclxuICAgIERFVklDRV9JRDogJ2RldmljZV9pZCcsXHJcbiAgICBJU19MT0NBTExZX0FDVElWQVRFRDogJ2lzX2xvY2FsbHlfYWN0aXZhdGVkJyxcclxuICAgIFVTRVJfSU5GTzogJ3VzZXJfaW5mbycsXHJcbiAgICBQRU5ESU5HX0NMSUNLUzogJ3BlbmRpbmdfY2xpY2tzJyxcclxuICAgIExBU1RfU1lOQ19USU1FOiAnbGFzdF9zeW5jX3RpbWUnLFxyXG4gICAgVE9UQUxfQ0xJQ0tTOiAndG90YWxfY2xpY2tzJ1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS42LjhcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNi44XCI7IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJcIj5cclxuICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uL2JhY2sucG5nXCIgY2xhc3M9XCJwYWdlLWhlYWRlci1iYWNrLWJ1dHRvblwiIG9uY2xpY2s9XCJnb0JhY2tcIj48L2ltYWdlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGUtdGltZVwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLXRpbWUtZGlzcGxheVwiPnt7IHRpbWUgfX08L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtaGVhZGVyLXRpdGxlXCI+6K6+572uPC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWl0ZW1cIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaW5mby1sYWJlbFwiPuaCqOeahOWuoOeJqTo8L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImluZm8tdmFsdWVcIj57eyBwZXROYW1lIH19PC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWl0ZW1cIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaW5mby1sYWJlbFwiPklEOjwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaW5mby12YWx1ZVwiPnt7IHVzZXJJZCB9fTwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJhYm91dC1idXR0b25cIiBvbmNsaWNrPVwiZ29Ub0Fib3V0XCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJhYm91dC1idXR0b24tdGV4dFwiPuWFs+S6jjwvdGV4dD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4gIC5wYWdlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIEFkZCB0aGlzIGZvciBhYnNvbHV0ZSBwb3NpdGlvbmluZyBjb250ZXh0ICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLnBhZ2UtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIC5wYWdlLXRpbWUtZGlzcGxheSB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICB9XHJcbiAgLnBhZ2UtaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG4gIC5wYWdlLWhlYWRlci1iYWNrLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUU5MEZGO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAucGFnZS1oZWFkZXItdGl0bGUge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG4gIC5oZWFkZXItdGl0bGUtdGltZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLnBhZ2UtY29udGVudCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuc2V0dGluZ3MtY29udGVudCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5pbmZvLWl0ZW0ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7IC8qIEV2ZW4gZGFya2VyIGdyZXkgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG4gIC5pbmZvLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjQUFBQUFBO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICAuaW5mby12YWx1ZSB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgLmFib3V0LWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7IC8qIEV2ZW4gZGFya2VyIGdyZXkgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5hYm91dC1idXR0b24tdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xyXG4gIGltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XHJcbiAgaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi4vY29tbW9uL2pzL2NvbmZpZy5qcyc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGltZTogJzAwOjAwJyxcclxuICAgICAgcGV0TmFtZTogJ+WKoOi9veS4rS4uLicsXHJcbiAgICAgIHVzZXJJZDogJ+WKoOi9veS4rS4uLidcclxuICAgIH0sXHJcbiAgICBvbkluaXQoKSB7XHJcbiAgICAgIHRoaXMubG9hZFVzZXJJbmZvKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlVGltZSgpO1xyXG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVRpbWUsIDUwMDApOyAvLyBVcGRhdGUgZXZlcnkgNSBzZWNvbmRzXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgbG9hZFVzZXJJbmZvKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvUmVzdWx0ID0gYXdhaXQgc3RvcmFnZS5nZXQoeyBrZXk6IENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPIH0pO1xyXG4gICAgICAgIGlmICh1c2VySW5mb1Jlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgY29uc3QgdXNlckluZm8gPSBKU09OLnBhcnNlKHVzZXJJbmZvUmVzdWx0LnZhbHVlKTtcclxuICAgICAgICAgIGlmICh1c2VySW5mbykge1xyXG4gICAgICAgICAgICB0aGlzLnBldE5hbWUgPSB1c2VySW5mby5wZXRfbmFtZSB8fCAnKOaXoOWQjSknO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJbmZvLmlkIHx8ICfml6AnO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wZXROYW1lID0gJyjmnKrmv4DmtLspJztcclxuICAgICAgICAgICAgdGhpcy51c2VySWQgPSAn5pegJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBldE5hbWUgPSAnKOacqua/gOa0uyknO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJZCA9ICfml6AnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIHVzZXIgaW5mbyBpbiBzZXR0aW5nczpcIiwgZSk7XHJcbiAgICAgICAgdGhpcy5wZXROYW1lID0gJ+WKoOi9veWksei0pSc7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSAn5Yqg6L295aSx6LSlJztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZVRpbWUoKSB7XHJcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICBjb25zdCBtaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgIHRoaXMudGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9YDtcclxuICAgIH0sXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgIHJvdXRlci5iYWNrKCk7XHJcbiAgICB9LFxyXG4gICAgZ29Ub0Fib3V0KCkge1xyXG4gICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgdXJpOiAnYWJvdXQnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+Il0sIm5hbWVzIjpbIkNPTkZJRyIsImV4cG9ydHMiLCJTRVJWRVIiLCJCQVNFX1VSTCIsIkFQUCIsIk5BTUUiLCJWRVJTSU9OIiwiTUFYX0NMSUNLU19QRVJfQkFUQ0giLCJTWU5DX0lOVEVSVkFMIiwiUkFOS19MSU1JVCIsIlNUT1JBR0VfS0VZUyIsIkRFVklDRV9JRCIsIklTX0xPQ0FMTFlfQUNUSVZBVEVEIiwiVVNFUl9JTkZPIiwiUEVORElOR19DTElDS1MiLCJMQVNUX1NZTkNfVElNRSIsIlRPVEFMX0NMSUNLUyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfc3lzdGVtMiIsIl9jb25maWciLCJyZXF1aXJlIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX2RlZmF1bHQiLCJkYXRhIiwidGltZSIsInBldE5hbWUiLCJ1c2VySWQiLCJvbkluaXQiLCJsb2FkVXNlckluZm8iLCJ1cGRhdGVUaW1lIiwic2V0SW50ZXJ2YWwiLCJ1c2VySW5mb1Jlc3VsdCIsInN0b3JhZ2UiLCJnZXQiLCJrZXkiLCJ2YWx1ZSIsInVzZXJJbmZvIiwiSlNPTiIsInBhcnNlIiwicGV0X25hbWUiLCJpZCIsImNvbnNvbGUiLCJlcnJvciIsIm5vdyIsIkRhdGUiLCJob3VycyIsImdldEhvdXJzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZ29CYWNrIiwicm91dGVyIiwiYmFjayIsImdvVG9BYm91dCIsInB1c2giLCJ1cmkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUNPLE1BQU1BLFNBQU1DLFFBQUFBLE1BQUEsR0FBRzs0QkFFcEJDLFFBQVE7Z0NBQ05DLFVBQVU7NEJBQ1o7NEJBTUFDLEtBQUs7Z0NBQ0hDLE1BQU07Z0NBQ05DLFNBQVM7Z0NBQ1RDLHNCQUFzQjtnQ0FDdEJDLGVBQWU7Z0NBQ2ZDLFlBQVk7NEJBQ2Q7NEJBR0FDLGNBQWM7Z0NBQ1pDLFdBQVc7Z0NBQ1hDLHNCQUFzQjtnQ0FDdEJDLFdBQVc7Z0NBQ1hDLGdCQUFnQjtnQ0FDaEJDLGdCQUFnQjtnQ0FDaEJDLGNBQWM7NEJBQ2hCO3dCQUNGOzs7Ozs7Ozs7Ozs7OztvQkM1QkFDLG9CQUFvQixFQUFFLEdBQUcsSUFBTzs7O29CQ0FoQ0Esb0JBQW9CLElBQUksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JDc0h6QixJQUFBQyxVQUFBQyx1QkFBQUMsZUFBQTt3QkFDQSxJQUFBQyxXQUFBRix1QkFBQUMsZUFBQTt3QkFDQSxJQUFBRSxVQUFBQyxvQkFBQTt3QkFBZ0QsU0FBQUosdUJBQUFLLENBQUE7NEJBQUEsT0FBQUEsS0FBQUEsRUFBQUMsVUFBQSxHQUFBRCxJQUFBO2dDQUFBRSxTQUFBRjs0QkFBQTt3QkFBQTt3QkFBQSxJQUFBRyxXQUFBMUIsUUFBQXlCLE9BQUEsR0FFakM7NEJBQ2JFLE1BQU07Z0NBQ0pDLE1BQU07Z0NBQ05DLFNBQVM7Z0NBQ1RDLFFBQVE7NEJBQ1Y7NEJBQ0FDO2dDQUNFLElBQUksQ0FBQ0MsWUFBWTtnQ0FDakIsSUFBSSxDQUFDQyxVQUFVO2dDQUNmQyxZQUFZLElBQUksQ0FBQ0QsVUFBVSxFQUFFOzRCQUMvQjs0QkFDQSxNQUFNRDtnQ0FDSixJQUFJO29DQUNGLE1BQU1HLGlCQUFpQixNQUFNQyxTQUFBQSxPQUFPLENBQUNDLEdBQUcsQ0FBQzt3Q0FBRUMsS0FBS3ZDLFFBQUFBLE1BQU0sQ0FBQ1UsWUFBWSxDQUFDRyxTQUFTO29DQUFDO29DQUM5RSxJQUFJdUIsZUFBZUksS0FBSyxFQUFFO3dDQUN4QixNQUFNQyxXQUFXQyxLQUFLQyxLQUFLLENBQUNQLGVBQWVJLEtBQUs7d0NBQ2hELElBQUlDLFVBQVU7NENBQ1osSUFBSSxDQUFDWCxPQUFPLEdBQUdXLFNBQVNHLFFBQVEsSUFBSTs0Q0FDcEMsSUFBSSxDQUFDYixNQUFNLEdBQUdVLFNBQVNJLEVBQUUsSUFBSTt3Q0FDL0IsT0FBTzs0Q0FDTCxJQUFJLENBQUNmLE9BQU8sR0FBRzs0Q0FDZixJQUFJLENBQUNDLE1BQU0sR0FBRzt3Q0FDaEI7b0NBQ0YsT0FBTzt3Q0FDSCxJQUFJLENBQUNELE9BQU8sR0FBRzt3Q0FDZixJQUFJLENBQUNDLE1BQU0sR0FBRztvQ0FDbEI7Z0NBQ0YsRUFBRSxPQUFPUCxHQUFHO29DQUNWc0IsUUFBUUMsS0FBSyxDQUFDLHdDQUF3Q3ZCO29DQUN0RCxJQUFJLENBQUNNLE9BQU8sR0FBRztvQ0FDZixJQUFJLENBQUNDLE1BQU0sR0FBRztnQ0FDaEI7NEJBQ0Y7NEJBQ0FHO2dDQUNFLE1BQU1jLE1BQU0sSUFBSUM7Z0NBQ2hCLE1BQU1DLFFBQVFGLElBQUlHLFFBQVEsR0FBR0MsUUFBUSxHQUFHQyxRQUFRLENBQUMsR0FBRztnQ0FDcEQsTUFBTUMsVUFBVU4sSUFBSU8sVUFBVSxHQUFHSCxRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHO2dDQUN4RCxJQUFJLENBQUN4QixJQUFJLEdBQUcsR0FBR3FCLE1BQU0sQ0FBQyxFQUFFSSxTQUFTOzRCQUNuQzs0QkFDQUU7Z0NBQ0VDLFFBQUFBLE9BQU0sQ0FBQ0MsSUFBSTs0QkFDYjs0QkFDQUM7Z0NBQ0VGLFFBQUFBLE9BQU0sQ0FBQ0csSUFBSSxDQUFDO29DQUNWQyxLQUFLO2dDQUNQOzRCQUNGO3dCQUNGIn0=