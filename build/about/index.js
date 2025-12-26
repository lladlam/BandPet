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
                                        value: "版本 0.3.4 Alpha"
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
                                                value: "0.3.4Alpha:增加中转"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXRcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9CYW5kUGV0L3NyYy9hYm91dC9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS42LjhcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNi44XCI7IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJcIj5cclxuICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uL2JhY2sucG5nXCIgY2xhc3M9XCJwYWdlLWhlYWRlci1iYWNrLWJ1dHRvblwiIG9uY2xpY2s9XCJnb0JhY2tcIj48L2ltYWdlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGUtdGltZVwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLXRpbWUtZGlzcGxheVwiPnt7IHRpbWUgfX08L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtaGVhZGVyLXRpdGxlXCI+5YWz5LqOPC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiYXBwLW5hbWVcIj5CQU5EUEVUPC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiYXBwLXZlcnNpb25cIj7niYjmnKwgMC4zLjQgQWxwaGE8L3RleHQ+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlcGFyYXRvclwiPjwvZGl2PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiZGV2LXRpdGxlXCI+5Y+C5LiO5byA5Y+R55qE5Lq65ZGYPC90ZXh0PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXYtbGlzdFwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJkZXYtbmFtZVwiPkBsbGFkbGFtKOS7o+eggSk8L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImRldi1uYW1lXCI+QEVyaWPpvZDpvZAoVUnorr7orqEpPC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJkZXYtbmFtZVwiPkDlvqHkuI7prZrkvZnpsbwo576O5pyvKTwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiZGV2LW5hbWVcIj5A5peg5rqQ5rWB5rKZKOaPkOS+m1VJ5oCd6LevKTwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImRldi10aXRsZVwiPuaIkeeahOWkhOWls+S9nO+8jOWPquS4uuS6huS9oOOAgjwvdGV4dD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2LWxpc3RcIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiZGV2LW5hbWVcIj4wLjMuNEFscGhhOuWinuWKoOS4rei9rDwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGU+XHJcbiAgLnBhZ2UtY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAucGFnZS1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLnBhZ2UtdGltZS1kaXNwbGF5IHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIH1cclxuICAucGFnZS1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcbiAgLnBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAucGFnZS1oZWFkZXItdGl0bGUge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG4gIC5oZWFkZXItdGl0bGUtdGltZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLnBhZ2UtY29udGVudCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuY29udGVudCB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi10b3A6IDIwcHg7IH1cclxuICAuYXBwLW5hbWUgeyBjb2xvcjogI0ZGRjsgZm9udC1zaXplOiA0NXB4OyBmb250LXdlaWdodDogYm9sZDsgfVxyXG4gIC5hcHAtdmVyc2lvbiB7IGNvbG9yOiAjQUFBOyBmb250LXNpemU6IDI0cHg7IG1hcmdpbi10b3A6IDEwcHg7IH1cclxuICAuc2VwYXJhdG9yIHsgd2lkdGg6IDgwJTsgaGVpZ2h0OiAxcHg7IGJhY2tncm91bmQtY29sb3I6ICMyMjI7IG1hcmdpbjogMzBweCAwOyB9XHJcbiAgLmRldi10aXRsZSB7IGNvbG9yOiAjQUFBOyBmb250LXNpemU6IDI0cHg7IG1hcmdpbi1ib3R0b206IDIwcHg7IH1cclxuICAuZGV2LWxpc3QgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcbiAgLmRldi1uYW1lIHsgY29sb3I6ICNGRkY7IGZvbnQtc2l6ZTogMjhweDsgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRpbWU6ICcwMDowMCdcclxuICAgIH0sXHJcbiAgICBvbkluaXQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlVGltZSgpO1xyXG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVRpbWUsIDUwMDApO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZVRpbWUoKSB7XHJcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICBjb25zdCBtaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgIHRoaXMudGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9YDtcclxuICAgIH0sXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgIHJvdXRlci5iYWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJkYXRhIiwidGltZSIsIm9uSW5pdCIsInVwZGF0ZVRpbWUiLCJzZXRJbnRlcnZhbCIsIm5vdyIsIkRhdGUiLCJob3VycyIsImdldEhvdXJzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZ29CYWNrIiwicm91dGVyIiwiYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBQUEsb0JBQW9CLEVBQUUsR0FBRyxJQUFPOzs7b0JDQWhDQSxvQkFBb0IsSUFBSSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ3NGekIsSUFBQUMsVUFBQUMsdUJBQUFDLGVBQUE7b0JBQW9DLFNBQUFELHVCQUFBRSxDQUFBO3dCQUFBLE9BQUFBLEtBQUFBLEVBQUFDLFVBQUEsR0FBQUQsSUFBQTs0QkFBQUUsU0FBQUY7d0JBQUE7b0JBQUE7b0JBQUEsSUFBQUcsV0FBQUMsUUFBQUYsT0FBQSxHQUNyQjt3QkFDYkcsTUFBTTs0QkFDSkMsTUFBTTt3QkFDUjt3QkFDQUM7NEJBQ0UsSUFBSSxDQUFDQyxVQUFVOzRCQUNmQyxZQUFZLElBQUksQ0FBQ0QsVUFBVSxFQUFFO3dCQUMvQjt3QkFDQUE7NEJBQ0UsTUFBTUUsTUFBTSxJQUFJQzs0QkFDaEIsTUFBTUMsUUFBUUYsSUFBSUcsUUFBUSxHQUFHQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHOzRCQUNwRCxNQUFNQyxVQUFVTixJQUFJTyxVQUFVLEdBQUdILFFBQVEsR0FBR0MsUUFBUSxDQUFDLEdBQUc7NEJBQ3hELElBQUksQ0FBQ1QsSUFBSSxHQUFHLEdBQUdNLE1BQU0sQ0FBQyxFQUFFSSxTQUFTO3dCQUNuQzt3QkFDQUU7NEJBQ0VDLFFBQUFBLE9BQU0sQ0FBQ0MsSUFBSTt3QkFDYjtvQkFDRiJ9