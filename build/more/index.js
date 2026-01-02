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
                            width: "100%",
                            height: "100%",
                            flexDirection: "column",
                            backgroundColor: "#000000"
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
                            position: "relative",
                            flexShrink: 0
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
                                "header-content"
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
                                "page-time-display"
                            ]
                        ],
                        {
                            color: "#ffffff",
                            fontSize: "24px"
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
                                "menu-list"
                            ]
                        ],
                        {
                            flex: 1,
                            width: "100%",
                            paddingTop: "0",
                            paddingRight: "20px",
                            paddingBottom: "0",
                            paddingLeft: "20px"
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
                            setInterval(this.updateTime, 10000);
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
                        goTo (page) {
                            _system.default.push({
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
                                        "header-content"
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
                        ]),
                        aiot.__ce__("list", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "menu-list"
                                ]
                            }
                        }, [
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "default",
                                    classList: [
                                        "menu-item"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.goTo("announcement", evt);
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
                                        value: "公告"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "default",
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
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "default",
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
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "default",
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
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "default",
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
                            aiot.__ce__("list-item", {
                                __vm__: _vm_,
                                __opts__: {
                                    type: "default",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZVxcaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL0JhbmRQZXQvc3JjL21vcmUvaW5kZXgudXgiXSwic291cmNlc0NvbnRlbnQiOlsiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNi44XCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjYuOFwiOyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uL2JhY2sucG5nXCIgY2xhc3M9XCJwYWdlLWhlYWRlci1iYWNrLWJ1dHRvblwiIG9uY2xpY2s9XCJnb0JhY2tcIj48L2ltYWdlPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1jb250ZW50XCI+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicGFnZS10aW1lLWRpc3BsYXlcIj57eyB0aW1lIH19PC90ZXh0PlxuICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtaGVhZGVyLXRpdGxlXCI+5pu05aSaPC90ZXh0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGxpc3QgY2xhc3M9XCJtZW51LWxpc3RcIj5cbiAgICAgIDxsaXN0LWl0ZW0gdHlwZT1cImRlZmF1bHRcIiBjbGFzcz1cIm1lbnUtaXRlbVwiIG9uY2xpY2s9XCJnb1RvKCdhbm5vdW5jZW1lbnQnKVwiPlxuICAgICAgICA8dGV4dCBjbGFzcz1cIm1lbnUtdGV4dFwiPuWFrOWRijwvdGV4dD5cbiAgICAgIDwvbGlzdC1pdGVtPlxuICAgICAgPGxpc3QtaXRlbSB0eXBlPVwiZGVmYXVsdFwiIGNsYXNzPVwibWVudS1pdGVtXCIgb25jbGljaz1cImdvVG8oJ2xlYWRlcmJvYXJkJylcIj5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJtZW51LXRleHRcIj7mjpLooYzmppw8L3RleHQ+XG4gICAgICA8L2xpc3QtaXRlbT5cbiAgICAgIDxsaXN0LWl0ZW0gdHlwZT1cImRlZmF1bHRcIiBjbGFzcz1cIm1lbnUtaXRlbVwiIG9uY2xpY2s9XCJnb1RvKCdleGNoYW5nZScpXCI+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibWVudS10ZXh0XCI+54mp5ZOB5Lqk5o2iPC90ZXh0PlxuICAgICAgPC9saXN0LWl0ZW0+XG4gICAgICA8bGlzdC1pdGVtIHR5cGU9XCJkZWZhdWx0XCIgY2xhc3M9XCJtZW51LWl0ZW1cIiBvbmNsaWNrPVwiZ29UbygnbWFya2V0JylcIj5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJtZW51LXRleHRcIj7nianlk4HluILlnLo8L3RleHQ+XG4gICAgICA8L2xpc3QtaXRlbT5cbiAgICAgIDxsaXN0LWl0ZW0gdHlwZT1cImRlZmF1bHRcIiBjbGFzcz1cIm1lbnUtaXRlbVwiIG9uY2xpY2s9XCJnb1RvKCdjdXN0b21pemUnKVwiPlxuICAgICAgICA8dGV4dCBjbGFzcz1cIm1lbnUtdGV4dFwiPuiHquWumuS5ieWuoOeJqTwvdGV4dD5cbiAgICAgIDwvbGlzdC1pdGVtPlxuICAgICAgPGxpc3QtaXRlbSB0eXBlPVwiZGVmYXVsdFwiIGNsYXNzPVwibWVudS1pdGVtXCIgb25jbGljaz1cImdvVG8oJ3NldHRpbmdzJylcIj5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJtZW51LXRleHRcIj7orr7nva48L3RleHQ+XG4gICAgICA8L2xpc3QtaXRlbT5cbiAgICA8L2xpc3Q+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAucGFnZS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgfVxuICAuaGVhZGVyLWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAucGFnZS10aW1lLWRpc3BsYXkge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAucGFnZS1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxuICAubWVudS1saXN0IHtcbiAgICBmbGV4OiAxOyAvKiBMZXQgdGhlIGxpc3QgdGFrZSB0aGUgcmVtYWluaW5nIHNwYWNlICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG4gIC5tZW51LWl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIC5tZW51LXRleHQge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGE6IHtcbiAgICAgIHRpbWU6ICcwMDowMCdcbiAgICB9LFxuICAgIG9uSW5pdCgpIHtcbiAgICAgIHRoaXMudXBkYXRlVGltZSgpO1xuICAgICAgc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVUaW1lLCAxMDAwMCk7XG4gICAgfSxcbiAgICB1cGRhdGVUaW1lKCkge1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgY29uc3QgbWludXRlcyA9IG5vdy5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgdGhpcy50aW1lID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xuICAgIH0sXG4gICAgZ29CYWNrKCkge1xuICAgICAgcm91dGVyLmJhY2soKTtcbiAgICB9LFxuICAgIGdvVG8ocGFnZSkge1xuICAgICAgcm91dGVyLnB1c2goeyB1cmk6IHBhZ2UgfSk7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiZGF0YSIsInRpbWUiLCJvbkluaXQiLCJ1cGRhdGVUaW1lIiwic2V0SW50ZXJ2YWwiLCJub3ciLCJEYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImdvQmFjayIsInJvdXRlciIsImJhY2siLCJnb1RvIiwicGFnZSIsInB1c2giLCJ1cmkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUFBLG9CQUFvQixFQUFFLEdBQUcsSUFBTzs7O29CQ0FoQ0Esb0JBQW9CLElBQUksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDeUZ6QixJQUFBQyxVQUFBQyx1QkFBQUMsZUFBQTtvQkFBb0MsU0FBQUQsdUJBQUFFLENBQUE7d0JBQUEsT0FBQUEsS0FBQUEsRUFBQUMsVUFBQSxHQUFBRCxJQUFBOzRCQUFBRSxTQUFBRjt3QkFBQTtvQkFBQTtvQkFBQSxJQUFBRyxXQUFBQyxRQUFBRixPQUFBLEdBRXJCO3dCQUNiRyxNQUFNOzRCQUNKQyxNQUFNO3dCQUNSO3dCQUNBQzs0QkFDRSxJQUFJLENBQUNDLFVBQVU7NEJBQ2ZDLFlBQVksSUFBSSxDQUFDRCxVQUFVLEVBQUU7d0JBQy9CO3dCQUNBQTs0QkFDRSxNQUFNRSxNQUFNLElBQUlDOzRCQUNoQixNQUFNQyxRQUFRRixJQUFJRyxRQUFRLEdBQUdDLFFBQVEsR0FBR0MsUUFBUSxDQUFDLEdBQUc7NEJBQ3BELE1BQU1DLFVBQVVOLElBQUlPLFVBQVUsR0FBR0gsUUFBUSxHQUFHQyxRQUFRLENBQUMsR0FBRzs0QkFDeEQsSUFBSSxDQUFDVCxJQUFJLEdBQUcsR0FBR00sTUFBTSxDQUFDLEVBQUVJLFNBQVM7d0JBQ25DO3dCQUNBRTs0QkFDRUMsUUFBQUEsT0FBTSxDQUFDQyxJQUFJO3dCQUNiO3dCQUNBQyxNQUFLQyxJQUFJOzRCQUNQSCxRQUFBQSxPQUFNLENBQUNJLElBQUksQ0FBQztnQ0FBRUMsS0FBS0Y7NEJBQUs7d0JBQzFCO29CQUNGIn0=