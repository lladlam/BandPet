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
                                "content"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center",
                            marginTop: "20px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "app-name"
                            ]
                        ],
                        {
                            color: "#ffffff",
                            fontSize: "45px",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "app-version"
                            ]
                        ],
                        {
                            color: "#aaaaaa",
                            fontSize: "24px",
                            marginTop: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "separator"
                            ]
                        ],
                        {
                            width: "80%",
                            height: "1px",
                            backgroundColor: "#222222",
                            marginTop: "30px",
                            marginRight: "0",
                            marginBottom: "30px",
                            marginLeft: "0"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "dev-title"
                            ]
                        ],
                        {
                            color: "#aaaaaa",
                            fontSize: "24px",
                            marginBottom: "20px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "dev-list"
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
                                "dev-name"
                            ]
                        ],
                        {
                            color: "#ffffff",
                            fontSize: "28px",
                            marginBottom: "10px"
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
                                            value: "关于"
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
                                        "content"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "app-name"
                                        ],
                                        value: "BANDPET"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "app-version"
                                        ],
                                        value: "版本 0.3.3 Alpha"
                                    }
                                }, []),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "separator"
                                        ]
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "dev-title"
                                        ],
                                        value: "参与开发的人员"
                                    }
                                }, []),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "dev-list"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "dev-name"
                                            ],
                                            value: "@lladlam(代码)"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "dev-name"
                                            ],
                                            value: "@Eric齐齐(UI设计)"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "dev-name"
                                            ],
                                            value: "@御与魚余鱼(美术)"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "dev-name"
                                            ],
                                            value: "@无源流沙(提供UI思路)"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "dev-title"
                                            ],
                                            value: "我的处女作，只为了你。"
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "dev-list"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "dev-name"
                                                ],
                                                value: "0.3.3 Alpha: 更改账户登录"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "dev-name"
                                                ],
                                                value: "由于Bug砸坏了一个键盘"
                                            }
                                        }, [])
                                    ])
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
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXRcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9hYm91dC9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS42LjhcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNi44XCI7IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicGFnZS1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgICAgPGltYWdlIHNyYz1cIi4uL2NvbW1vbi9iYWNrLnBuZ1wiIGNsYXNzPVwicGFnZS1oZWFkZXItYmFjay1idXR0b25cIiBvbmNsaWNrPVwiZ29CYWNrXCI+PC9pbWFnZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZS10aW1lXCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLXRpbWUtZGlzcGxheVwiPnt7IHRpbWUgfX08L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLWhlYWRlci10aXRsZVwiPuWFs+S6jjwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8dGV4dCBjbGFzcz1cImFwcC1uYW1lXCI+QkFORFBFVDwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJhcHAtdmVyc2lvblwiPueJiOacrCAwLjMuMyBBbHBoYTwvdGV4dD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlcGFyYXRvclwiPjwvZGl2PlxuICAgICAgICA8dGV4dCBjbGFzcz1cImRldi10aXRsZVwiPuWPguS4juW8gOWPkeeahOS6uuWRmDwvdGV4dD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRldi1saXN0XCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJkZXYtbmFtZVwiPkBsbGFkbGFtKOS7o+eggSk8L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJkZXYtbmFtZVwiPkBFcmlj6b2Q6b2QKFVJ6K6+6K6hKTwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImRldi1uYW1lXCI+QOW+oeS4jumtmuS9memxvCjnvo7mnK8pPC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiZGV2LW5hbWVcIj5A5peg5rqQ5rWB5rKZKOaPkOS+m1VJ5oCd6LevKTwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJkZXYtdGl0bGVcIj7miJHnmoTlpITlpbPkvZzvvIzlj6rkuLrkuobkvaDjgII8L3RleHQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXYtbGlzdFwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiZGV2LW5hbWVcIj4wLjMuMyBBbHBoYTog5pu05pS56LSm5oi355m75b2VPC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiZGV2LW5hbWVcIj7nlLHkuo5CdWfnoLjlnY/kuobkuIDkuKrplK7nm5g8L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gIC5wYWdlLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5wYWdlLWhlYWRlci1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLnBhZ2UtdGltZS1kaXNwbGF5IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB9XG4gIC5wYWdlLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5wYWdlLWhlYWRlci1iYWNrLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAucGFnZS1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxuICAuaGVhZGVyLXRpdGxlLXRpbWUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAucGFnZS1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5jb250ZW50IHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luLXRvcDogMjBweDsgfVxuICAuYXBwLW5hbWUgeyBjb2xvcjogI0ZGRjsgZm9udC1zaXplOiA0NXB4OyBmb250LXdlaWdodDogYm9sZDsgfVxuICAuYXBwLXZlcnNpb24geyBjb2xvcjogI0FBQTsgZm9udC1zaXplOiAyNHB4OyBtYXJnaW4tdG9wOiAxMHB4OyB9XG4gIC5zZXBhcmF0b3IgeyB3aWR0aDogODAlOyBoZWlnaHQ6IDFweDsgYmFja2dyb3VuZC1jb2xvcjogIzIyMjsgbWFyZ2luOiAzMHB4IDA7IH1cbiAgLmRldi10aXRsZSB7IGNvbG9yOiAjQUFBOyBmb250LXNpemU6IDI0cHg7IG1hcmdpbi1ib3R0b206IDIwcHg7IH1cbiAgLmRldi1saXN0IHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuZGV2LW5hbWUgeyBjb2xvcjogI0ZGRjsgZm9udC1zaXplOiAyOHB4OyBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGE6IHtcbiAgICAgIHRpbWU6ICcwMDowMCdcbiAgICB9LFxuICAgIG9uSW5pdCgpIHtcbiAgICAgIHRoaXMudXBkYXRlVGltZSgpO1xuICAgICAgc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVUaW1lLCA1MDAwKTtcbiAgICB9LFxuICAgIHVwZGF0ZVRpbWUoKSB7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgaG91cnMgPSBub3cuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICBjb25zdCBtaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICB0aGlzLnRpbWUgPSBgJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfSxcbiAgICBnb0JhY2soKSB7XG4gICAgICByb3V0ZXIuYmFjaygpO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsImRhdGEiLCJ0aW1lIiwib25Jbml0IiwidXBkYXRlVGltZSIsInNldEludGVydmFsIiwibm93IiwiRGF0ZSIsImhvdXJzIiwiZ2V0SG91cnMiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJnb0JhY2siLCJyb3V0ZXIiLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFBQSxvQkFBb0IsRUFBRSxHQUFHLElBQU87OztvQkNBaENBLG9CQUFvQixJQUFJLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDdUZ6QixJQUFBQyxVQUFBQyx1QkFBQUMsZUFBQTtvQkFBb0MsU0FBQUQsdUJBQUFFLENBQUE7d0JBQUEsT0FBQUEsS0FBQUEsRUFBQUMsVUFBQSxHQUFBRCxJQUFBOzRCQUFBRSxTQUFBRjt3QkFBQTtvQkFBQTtvQkFBQSxJQUFBRyxXQUFBQyxRQUFBRixPQUFBLEdBQ3JCO3dCQUNiRyxNQUFNOzRCQUNKQyxNQUFNO3dCQUNSO3dCQUNBQzs0QkFDRSxJQUFJLENBQUNDLFVBQVU7NEJBQ2ZDLFlBQVksSUFBSSxDQUFDRCxVQUFVLEVBQUU7d0JBQy9CO3dCQUNBQTs0QkFDRSxNQUFNRSxNQUFNLElBQUlDOzRCQUNoQixNQUFNQyxRQUFRRixJQUFJRyxRQUFRLEdBQUdDLFFBQVEsR0FBR0MsUUFBUSxDQUFDLEdBQUc7NEJBQ3BELE1BQU1DLFVBQVVOLElBQUlPLFVBQVUsR0FBR0gsUUFBUSxHQUFHQyxRQUFRLENBQUMsR0FBRzs0QkFDeEQsSUFBSSxDQUFDVCxJQUFJLEdBQUcsR0FBR00sTUFBTSxDQUFDLEVBQUVJLFNBQVM7d0JBQ25DO3dCQUNBRTs0QkFDRUMsUUFBQUEsT0FBTSxDQUFDQyxJQUFJO3dCQUNiO29CQUNGIn0=