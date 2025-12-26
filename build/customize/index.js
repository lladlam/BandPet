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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9taXplXFxpbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY3VzdG9taXplL2luZGV4LnV4Il0sInNvdXJjZXNDb250ZW50IjpbIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjYuOFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS42LjhcIjsiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXItY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlclwiPlxyXG4gICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vYmFjay5wbmdcIiBjbGFzcz1cInBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uXCIgb25jbGljaz1cImdvQmFja1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZS10aW1lXCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtdGltZS1kaXNwbGF5XCI+e3sgdGltZSB9fTwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicGFnZS1oZWFkZXItdGl0bGVcIj7oh6rlrprkuYnlrqDniak8L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWxpc3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCIgb25jbGljaz1cImdvVG9OYW1pbmdcIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibWVudS10ZXh0XCI+5a6g54mp5ZG95ZCNPC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiV0lQLXNtYWxsXCI+77yI5YW25LuW6Ieq5a6a5LmJ5Yqf6IO95q2j5Zyo5byA5Y+R5Lit77yJPC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4gIC5wYWdlLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLnBhZ2UtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIC5wYWdlLXRpbWUtZGlzcGxheSB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICB9XHJcbiAgLnBhZ2UtaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG4gIC5wYWdlLWhlYWRlci1iYWNrLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUU5MEZGO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAucGFnZS1oZWFkZXItdGl0bGUge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG4gIC5oZWFkZXItdGl0bGUtdGltZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLnBhZ2UtY29udGVudCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAubWVudS1saXN0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLm1lbnUtaXRlbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBOyAvKiBFdmVuIGRhcmtlciBncmV5ICovXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICAubWVudS10ZXh0IHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gIH1cclxuICAuV0lQLXNtYWxsIHtcclxuICAgIGNvbG9yOiAjQUFBQUFBO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRpbWU6ICcwMDowMCdcclxuICAgIH0sXHJcbiAgICBvbkluaXQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlVGltZSgpO1xyXG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVRpbWUsIDUwMDApO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZVRpbWUoKSB7XHJcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICBjb25zdCBtaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgIHRoaXMudGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9YDtcclxuICAgIH0sXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgIHJvdXRlci5iYWNrKCk7XHJcbiAgICB9LFxyXG4gICAgZ29Ub05hbWluZygpIHtcclxuICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgIHVyaTogJ25hbWluZydcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJkYXRhIiwidGltZSIsIm9uSW5pdCIsInVwZGF0ZVRpbWUiLCJzZXRJbnRlcnZhbCIsIm5vdyIsIkRhdGUiLCJob3VycyIsImdldEhvdXJzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZ29CYWNrIiwicm91dGVyIiwiYmFjayIsImdvVG9OYW1pbmciLCJwdXNoIiwidXJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFBQSxvQkFBb0IsRUFBRSxHQUFHLElBQU87OztvQkNBaENBLG9CQUFvQixJQUFJLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ2dHekIsSUFBQUMsVUFBQUMsdUJBQUFDLGVBQUE7b0JBQW9DLFNBQUFELHVCQUFBRSxDQUFBO3dCQUFBLE9BQUFBLEtBQUFBLEVBQUFDLFVBQUEsR0FBQUQsSUFBQTs0QkFBQUUsU0FBQUY7d0JBQUE7b0JBQUE7b0JBQUEsSUFBQUcsV0FBQUMsUUFBQUYsT0FBQSxHQUVyQjt3QkFDYkcsTUFBTTs0QkFDSkMsTUFBTTt3QkFDUjt3QkFDQUM7NEJBQ0UsSUFBSSxDQUFDQyxVQUFVOzRCQUNmQyxZQUFZLElBQUksQ0FBQ0QsVUFBVSxFQUFFO3dCQUMvQjt3QkFDQUE7NEJBQ0UsTUFBTUUsTUFBTSxJQUFJQzs0QkFDaEIsTUFBTUMsUUFBUUYsSUFBSUcsUUFBUSxHQUFHQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHOzRCQUNwRCxNQUFNQyxVQUFVTixJQUFJTyxVQUFVLEdBQUdILFFBQVEsR0FBR0MsUUFBUSxDQUFDLEdBQUc7NEJBQ3hELElBQUksQ0FBQ1QsSUFBSSxHQUFHLEdBQUdNLE1BQU0sQ0FBQyxFQUFFSSxTQUFTO3dCQUNuQzt3QkFDQUU7NEJBQ0VDLFFBQUFBLE9BQU0sQ0FBQ0MsSUFBSTt3QkFDYjt3QkFDQUM7NEJBQ0VGLFFBQUFBLE9BQU0sQ0FBQ0csSUFBSSxDQUFDO2dDQUNWQyxLQUFLOzRCQUNQO3dCQUNGO29CQUNGIn0=