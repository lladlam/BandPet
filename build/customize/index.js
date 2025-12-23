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
                var __webpack_modules__ = {};
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
                            width: "90%",
                            alignItems: "center"
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
                    ],
                    [
                        [
                            [
                                0,
                                "WIP-small"
                            ]
                        ],
                        {
                            color: "#aaaaaa",
                            fontSize: "24px",
                            marginTop: "20px"
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
                        goToNaming () {
                            _system.default.push({
                                uri: 'naming'
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
                                            value: "自定义宠物"
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
                                                return _vm_.goToNaming(evt);
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
                                            value: "宠物命名"
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "WIP-small"
                                        ],
                                        value: "（其他自定义功能正在开发中）"
                                    }
                                }, [])
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
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9taXplXFxpbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY3VzdG9taXplL2luZGV4LnV4Il0sInNvdXJjZXNDb250ZW50IjpbIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjYuOFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS42LjhcIjsiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uL2JhY2sucG5nXCIgY2xhc3M9XCJwYWdlLWhlYWRlci1iYWNrLWJ1dHRvblwiIG9uY2xpY2s9XCJnb0JhY2tcIj48L2ltYWdlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRpdGxlLXRpbWVcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtdGltZS1kaXNwbGF5XCI+e3sgdGltZSB9fTwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtaGVhZGVyLXRpdGxlXCI+6Ieq5a6a5LmJ5a6g54mpPC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWxpc3RcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiIG9uY2xpY2s9XCJnb1RvTmFtaW5nXCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJtZW51LXRleHRcIj7lrqDnianlkb3lkI08L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGV4dCBjbGFzcz1cIldJUC1zbWFsbFwiPu+8iOWFtuS7luiHquWumuS5ieWKn+iDveato+WcqOW8gOWPkeS4re+8iTwvdGV4dD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAucGFnZS10aW1lLWRpc3BsYXkge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUU5MEZGO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5wYWdlLWhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG4gIC5oZWFkZXItdGl0bGUtdGltZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5wYWdlLWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLm1lbnUtbGlzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLm1lbnUtaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTsgLyogRXZlbiBkYXJrZXIgZ3JleSAqL1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAubWVudS10ZXh0IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gIH1cbiAgLldJUC1zbWFsbCB7XG4gICAgY29sb3I6ICNBQUFBQUE7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhOiB7XG4gICAgICB0aW1lOiAnMDA6MDAnXG4gICAgfSxcbiAgICBvbkluaXQoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICAgIHNldEludGVydmFsKHRoaXMudXBkYXRlVGltZSwgNTAwMCk7XG4gICAgfSxcbiAgICB1cGRhdGVUaW1lKCkge1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgY29uc3QgbWludXRlcyA9IG5vdy5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgdGhpcy50aW1lID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xuICAgIH0sXG4gICAgZ29CYWNrKCkge1xuICAgICAgcm91dGVyLmJhY2soKTtcbiAgICB9LFxuICAgIGdvVG9OYW1pbmcoKSB7XG4gICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgIHVyaTogJ25hbWluZydcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsImRhdGEiLCJ0aW1lIiwib25Jbml0IiwidXBkYXRlVGltZSIsInNldEludGVydmFsIiwibm93IiwiRGF0ZSIsImhvdXJzIiwiZ2V0SG91cnMiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJnb0JhY2siLCJyb3V0ZXIiLCJiYWNrIiwiZ29Ub05hbWluZyIsInB1c2giLCJ1cmkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUFBLG9CQUFvQixFQUFFLEdBQUcsSUFBTzs7O29CQ0FoQ0Esb0JBQW9CLElBQUksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDZ0d6QixJQUFBQyxVQUFBQyx1QkFBQUMsZUFBQTtvQkFBb0MsU0FBQUQsdUJBQUFFLENBQUE7d0JBQUEsT0FBQUEsS0FBQUEsRUFBQUMsVUFBQSxHQUFBRCxJQUFBOzRCQUFBRSxTQUFBRjt3QkFBQTtvQkFBQTtvQkFBQSxJQUFBRyxXQUFBQyxRQUFBRixPQUFBLEdBRXJCO3dCQUNiRyxNQUFNOzRCQUNKQyxNQUFNO3dCQUNSO3dCQUNBQzs0QkFDRSxJQUFJLENBQUNDLFVBQVU7NEJBQ2ZDLFlBQVksSUFBSSxDQUFDRCxVQUFVLEVBQUU7d0JBQy9CO3dCQUNBQTs0QkFDRSxNQUFNRSxNQUFNLElBQUlDOzRCQUNoQixNQUFNQyxRQUFRRixJQUFJRyxRQUFRLEdBQUdDLFFBQVEsR0FBR0MsUUFBUSxDQUFDLEdBQUc7NEJBQ3BELE1BQU1DLFVBQVVOLElBQUlPLFVBQVUsR0FBR0gsUUFBUSxHQUFHQyxRQUFRLENBQUMsR0FBRzs0QkFDeEQsSUFBSSxDQUFDVCxJQUFJLEdBQUcsR0FBR00sTUFBTSxDQUFDLEVBQUVJLFNBQVM7d0JBQ25DO3dCQUNBRTs0QkFDRUMsUUFBQUEsT0FBTSxDQUFDQyxJQUFJO3dCQUNiO3dCQUNBQzs0QkFDRUYsUUFBQUEsT0FBTSxDQUFDRyxJQUFJLENBQUM7Z0NBQ1ZDLEtBQUs7NEJBQ1A7d0JBQ0Y7b0JBQ0YifQ==