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
                    "./src/common/js/back-interceptor.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports["default"] = void 0;
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.router"));
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        class BackInterceptor {
                            constructor(){
                                this.isBlocking = false;
                                this.blockReason = '';
                                this.originalBack = null;
                            }
                            enable(reason = '请先完成应用更新') {
                                this.isBlocking = true;
                                this.blockReason = reason;
                                if (!this.originalBack) this.originalBack = _system.default.back;
                                _system.default.back = ()=>{
                                    if (this.isBlocking) return void _system2.default.showToast({
                                        message: this.blockReason,
                                        duration: 2000
                                    });
                                    if (this.originalBack) this.originalBack.call(_system.default);
                                };
                                console.log('返回拦截器启用:', reason);
                            }
                            disable() {
                                this.isBlocking = false;
                                this.blockReason = '';
                                if (this.originalBack) {
                                    _system.default.back = this.originalBack;
                                    this.originalBack = null;
                                }
                                console.log('返回拦截器禁用');
                            }
                            intercept(reason) {
                                this.enable(reason);
                            }
                            restore() {
                                this.disable();
                            }
                        }
                        var _default = exports["default"] = new BackInterceptor();
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
                                    "force-update-container"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                                height: "100%",
                                backgroundColor: "#000000",
                                paddingTop: "40px",
                                paddingRight: "40px",
                                paddingBottom: "40px",
                                paddingLeft: "40px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "update-content"
                                ]
                            ],
                            {
                                flex: 1,
                                width: "100%",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "update-title"
                                ]
                            ],
                            {
                                fontSize: "36px",
                                color: "#ffffff",
                                marginBottom: "20px",
                                textAlign: "center",
                                fontWeight: "bold"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "version-text"
                                ]
                            ],
                            {
                                fontSize: "28px",
                                color: "#aaaaaa",
                                marginBottom: "40px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "changelog-container"
                                ]
                            ],
                            {
                                width: "100%",
                                flexDirection: "column",
                                marginBottom: "40px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "changelog-title"
                                ]
                            ],
                            {
                                fontSize: "32px",
                                color: "#ffffff",
                                marginBottom: "20px",
                                fontWeight: "bold"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "changelog-scroll"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "250px",
                                paddingTop: "20px",
                                paddingRight: "20px",
                                paddingBottom: "20px",
                                paddingLeft: "20px",
                                backgroundColor: "#1a1a1a",
                                borderRadius: "10px",
                                marginBottom: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "changelog-text"
                                ]
                            ],
                            {
                                fontSize: "28px",
                                color: "#dddddd",
                                lineHeight: "40px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "force-notice"
                                ]
                            ],
                            {
                                width: "100%",
                                paddingTop: "20px",
                                paddingRight: "20px",
                                paddingBottom: "20px",
                                paddingLeft: "20px",
                                backgroundColor: "#2b0000",
                                borderRadius: "10px",
                                marginBottom: "30px",
                                borderTopColor: "#f44336",
                                borderRightColor: "#f44336",
                                borderBottomColor: "#f44336",
                                borderLeftColor: "#f44336",
                                borderStyle: "solid",
                                borderTopWidth: "2px",
                                borderRightWidth: "2px",
                                borderBottomWidth: "2px",
                                borderLeftWidth: "2px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "force-notice-text"
                                ]
                            ],
                            {
                                fontSize: "28px",
                                color: "#ff8a80",
                                textAlign: "center",
                                fontWeight: "bold"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "check-button"
                                ]
                            ],
                            {
                                width: "80%",
                                height: "80px",
                                backgroundColor: "#4caf50",
                                borderRadius: "40px",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "check-button-text"
                                ]
                            ],
                            {
                                fontSize: "30px",
                                color: "#ffffff",
                                fontWeight: "bold"
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
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                        var _backInterceptor = _interopRequireDefault(__webpack_require__("./src/common/js/back-interceptor.js"));
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
                            data: {
                                updateInfo: {}
                            },
                            onInit () {
                                this.updateInfo = this.$page.param.updateInfo || {};
                                _backInterceptor.default.intercept('请先完成应用更新');
                            },
                            relaunchApp () {
                                _system2.default.showToast({
                                    message: '正在重启应用...',
                                    duration: 1500
                                });
                                setTimeout(()=>{
                                    _system.default.replace({
                                        uri: '/main'
                                    });
                                }, 1500);
                            },
                            onDestroy () {
                                _backInterceptor.default.restore();
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
                                    "force-update-container"
                                ]
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "update-content"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "update-title"
                                        ],
                                        value: function() {
                                            return _vm_.updateInfo.title || "\u53D1\u73B0\u65B0\u7248\u672C";
                                        }
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "version-text"
                                        ],
                                        value: function() {
                                            return "新版本: " + _vm_.updateInfo.version_name;
                                        }
                                    }
                                }, []),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "changelog-container"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "changelog-title"
                                            ],
                                            value: "更新内容:"
                                        }
                                    }, []),
                                    aiot.__ce__("scroll", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "changelog-scroll"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "changelog-text"
                                                ],
                                                value: function() {
                                                    return _vm_.updateInfo.changelog;
                                                }
                                            }
                                        }, [])
                                    ])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "force-notice"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "force-notice-text"
                                            ],
                                            value: "此版本为强制更新, 请去更新最新版本即可"
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "check-button"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.relaunchApp(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "check-button-text"
                                            ],
                                            value: "我已更新, 点击继续"
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
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yY2UtdXBkYXRlXFxpbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9iYWNrLWludGVyY2VwdG9yLmpzIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvZm9yY2UtdXBkYXRlL2luZGV4LnV4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9jb21tb24vanMvYmFjay1pbnRlcmNlcHRvci5qc1xuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XG5pbXBvcnQgcHJvbXB0IGZyb20gJ0BzeXN0ZW0ucHJvbXB0JztcblxuY2xhc3MgQmFja0ludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pc0Jsb2NraW5nID0gZmFsc2U7XG4gICAgdGhpcy5ibG9ja1JlYXNvbiA9ICcnO1xuICAgIHRoaXMub3JpZ2luYWxCYWNrID0gbnVsbDtcbiAgfVxuICBcbiAgLy8g5ZCv55So5oum5oiqXG4gIGVuYWJsZShyZWFzb24gPSAn6K+35YWI5a6M5oiQ5bqU55So5pu05pawJykge1xuICAgIHRoaXMuaXNCbG9ja2luZyA9IHRydWU7XG4gICAgdGhpcy5ibG9ja1JlYXNvbiA9IHJlYXNvbjtcbiAgICBcbiAgICAvLyDkv53lrZjljp/lp4tiYWNr5pa55rOVXG4gICAgaWYgKCF0aGlzLm9yaWdpbmFsQmFjaykge1xuICAgICAgdGhpcy5vcmlnaW5hbEJhY2sgPSByb3V0ZXIuYmFjaztcbiAgICB9XG4gICAgXG4gICAgLy8g6YeN5YaZYmFja+aWueazlVxuICAgIHJvdXRlci5iYWNrID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNCbG9ja2luZykge1xuICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiB0aGlzLmJsb2NrUmVhc29uLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIOaBouWkjeWOn+Wni2JhY2vmlrnms5VcbiAgICAgIGlmICh0aGlzLm9yaWdpbmFsQmFjaykge1xuICAgICAgICB0aGlzLm9yaWdpbmFsQmFjay5jYWxsKHJvdXRlcik7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBjb25zb2xlLmxvZygn6L+U5Zue5oum5oiq5Zmo5ZCv55SoOicsIHJlYXNvbik7XG4gIH1cbiAgXG4gIC8vIOemgeeUqOaLpuaIqlxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuaXNCbG9ja2luZyA9IGZhbHNlO1xuICAgIHRoaXMuYmxvY2tSZWFzb24gPSAnJztcbiAgICBcbiAgICAvLyDmgaLlpI3ljp/lp4tiYWNr5pa55rOVXG4gICAgaWYgKHRoaXMub3JpZ2luYWxCYWNrKSB7XG4gICAgICByb3V0ZXIuYmFjayA9IHRoaXMub3JpZ2luYWxCYWNrO1xuICAgICAgdGhpcy5vcmlnaW5hbEJhY2sgPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZygn6L+U5Zue5oum5oiq5Zmo56aB55SoJyk7XG4gIH1cbiAgXG4gIC8vIOaLpuaIqui/lOWbnuaMiemSrlxuICBpbnRlcmNlcHQocmVhc29uKSB7XG4gICAgdGhpcy5lbmFibGUocmVhc29uKTtcbiAgfVxuICBcbiAgLy8g5oGi5aSN5Y6f5aeL6L+U5Zue5Yqf6IO9XG4gIHJlc3RvcmUoKSB7XG4gICAgdGhpcy5kaXNhYmxlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEJhY2tJbnRlcmNlcHRvcigpOyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjYuOFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS42LjhcIjsiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJmb3JjZS11cGRhdGUtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInVwZGF0ZS1jb250ZW50XCI+XG4gICAgICA8dGV4dCBjbGFzcz1cInVwZGF0ZS10aXRsZVwiPnt7dXBkYXRlSW5mby50aXRsZSB8fCAn5Y+R546w5paw54mI5pysJ319PC90ZXh0PlxuICAgICAgPHRleHQgY2xhc3M9XCJ2ZXJzaW9uLXRleHRcIj7mlrDniYjmnKw6IHt7dXBkYXRlSW5mby52ZXJzaW9uX25hbWV9fTwvdGV4dD5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzcz1cImNoYW5nZWxvZy1jb250YWluZXJcIj5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJjaGFuZ2Vsb2ctdGl0bGVcIj7mm7TmlrDlhoXlrrk6PC90ZXh0PlxuICAgICAgICA8c2Nyb2xsIGNsYXNzPVwiY2hhbmdlbG9nLXNjcm9sbFwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2hhbmdlbG9nLXRleHRcIj57e3VwZGF0ZUluZm8uY2hhbmdlbG9nfX08L3RleHQ+XG4gICAgICAgIDwvc2Nyb2xsPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JjZS1ub3RpY2VcIj5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJmb3JjZS1ub3RpY2UtdGV4dFwiPuatpOeJiOacrOS4uuW8uuWItuabtOaWsCwg6K+35Y675pu05paw5pyA5paw54mI5pys5Y2z5Y+vPC90ZXh0PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3M9XCJjaGVjay1idXR0b25cIiBvbmNsaWNrPVwicmVsYXVuY2hBcHBcIj5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJjaGVjay1idXR0b24tdGV4dFwiPuaIkeW3suabtOaWsCwg54K55Ye757un57utPC90ZXh0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAuZm9yY2UtdXBkYXRlLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gIH1cbiAgXG4gIC51cGRhdGUtY29udGVudCB7XG4gICAgZmxleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC51cGRhdGUtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLnZlcnNpb24tdGV4dCB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGNvbG9yOiAjQUFBQUFBO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cbiAgXG4gIC5jaGFuZ2Vsb2ctY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cbiAgXG4gIC5jaGFuZ2Vsb2ctdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAuY2hhbmdlbG9nLXNjcm9sbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICAuY2hhbmdlbG9nLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBjb2xvcjogI0RERERERDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgfVxuICBcbiAgLmZvcmNlLW5vdGljZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIwMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRjQ0MzM2O1xuICB9XG4gIFxuICAuZm9yY2Utbm90aWNlLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBjb2xvcjogI0ZGOEE4MDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuY2hlY2stYnV0dG9uIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogODBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmNoZWNrLWJ1dHRvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xuICBpbXBvcnQgcHJvbXB0IGZyb20gJ0BzeXN0ZW0ucHJvbXB0JztcbiAgaW1wb3J0IEJhY2tJbnRlcmNlcHRvciBmcm9tICcuLi9jb21tb24vanMvYmFjay1pbnRlcmNlcHRvci5qcyc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGE6IHtcbiAgICAgIHVwZGF0ZUluZm86IHt9LFxuICAgIH0sXG4gICAgb25Jbml0KCkge1xuICAgICAgLy8g5LuO6aG16Z2i5Y+C5pWw6I635Y+W5pu05paw5L+h5oGvXG4gICAgICB0aGlzLnVwZGF0ZUluZm8gPSB0aGlzLiRwYWdlLnBhcmFtLnVwZGF0ZUluZm8gfHwge307XG4gICAgICAvLyDlkK/nlKjov5Tlm57mi6bmiKrvvIznlKjmiLfml6Dms5Xov5Tlm55cbiAgICAgIEJhY2tJbnRlcmNlcHRvci5pbnRlcmNlcHQoJ+ivt+WFiOWujOaIkOW6lOeUqOabtOaWsCcpO1xuICAgIH0sXG4gICAgXG4gICAgLy8g55So5oi354K55Ye74oCc5oiR5bey5pu05paw4oCdXG4gICAgcmVsYXVuY2hBcHAoKSB7XG4gICAgICBwcm9tcHQuc2hvd1RvYXN0KHtcbiAgICAgICAgbWVzc2FnZTogJ+ato+WcqOmHjeWQr+W6lOeUqC4uLicsXG4gICAgICAgIGR1cmF0aW9uOiAxNTAwXG4gICAgICB9KTtcbiAgICAgIC8vIOabv+aNouWIsOS4u+mhte+8jGFwcC51eOS4reeahOmAu+i+keS8muWGjeasoeajgOafpeabtOaWsFxuICAgICAgLy8g5aaC5p6c55So5oi355yf55qE5pu05paw5LqG77yM5bCx6IO95q2j5bi46L+b5YWlXG4gICAgICAvLyDlpoLmnpzmsqHmm7TmlrDvvIzkvJrlho3mrKHooqvmi6bmiKrliLDov5nkuKrpobXpnaJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByb3V0ZXIucmVwbGFjZSh7XG4gICAgICAgICAgdXJpOiAnL21haW4nXG4gICAgICAgIH0pO1xuICAgICAgfSwgMTUwMCk7XG4gICAgfSxcblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgIC8vIOWcqOmhtemdoumUgOavgeaXtu+8iOeQhuiuuuS4iuS4jeW6lOivpeWPkeeUn++8jOmZpOmdnuabtOaWsOaIkOWKn++8ieaBouWkjei/lOWbnumUruWKn+iDvVxuICAgICAgQmFja0ludGVyY2VwdG9yLnJlc3RvcmUoKTtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIl9zeXN0ZW0yIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiQmFja0ludGVyY2VwdG9yIiwiY29uc3RydWN0b3IiLCJpc0Jsb2NraW5nIiwiYmxvY2tSZWFzb24iLCJvcmlnaW5hbEJhY2siLCJlbmFibGUiLCJyZWFzb24iLCJiYWNrIiwic2hvd1RvYXN0IiwibWVzc2FnZSIsImR1cmF0aW9uIiwiY2FsbCIsImNvbnNvbGUiLCJsb2ciLCJkaXNhYmxlIiwiaW50ZXJjZXB0IiwicmVzdG9yZSIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJfYmFja0ludGVyY2VwdG9yIiwicmVxdWlyZSIsImRhdGEiLCJ1cGRhdGVJbmZvIiwib25Jbml0IiwiJHBhZ2UiLCJwYXJhbSIsInJlbGF1bmNoQXBwIiwicHJvbXB0Iiwic2V0VGltZW91dCIsInJvdXRlciIsInJlcGxhY2UiLCJ1cmkiLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUNBLElBQUFBLFVBQUFDLHVCQUFBQyxlQUFBO3dCQUNBLElBQUFDLFdBQUFGLHVCQUFBQyxlQUFBO3dCQUFvQyxTQUFBRCx1QkFBQUcsQ0FBQTs0QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7Z0NBQUFFLFNBQUFGOzRCQUFBO3dCQUFBO3dCQUVwQyxNQUFNRzs0QkFDSkMsYUFBYztnQ0FDWixJQUFJLENBQUNDLFVBQVUsR0FBRztnQ0FDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUc7Z0NBQ25CLElBQUksQ0FBQ0MsWUFBWSxHQUFHOzRCQUN0Qjs0QkFHQUMsT0FBT0MsU0FBUyxVQUFVLEVBQUU7Z0NBQzFCLElBQUksQ0FBQ0osVUFBVSxHQUFHO2dDQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0c7Z0NBR25CLElBQUksQ0FBQyxJQUFJLENBQUNGLFlBQVksRUFDcEIsSUFBSSxDQUFDQSxZQUFZLEdBQUdYLFFBQUFNLE9BQU0sQ0FBQ1EsSUFBSTtnQ0FJakNkLFFBQUFNLE9BQU0sQ0FBQ1EsSUFBSSxHQUFHO29DQUNaLElBQUksSUFBSSxDQUFDTCxVQUFVLEVBQUUsWUFDbkJOLFNBQUFHLE9BQU0sQ0FBQ1MsU0FBUyxDQUFDO3dDQUNmQyxTQUFTLElBQUksQ0FBQ04sV0FBVzt3Q0FDekJPLFVBQVU7b0NBQ1o7b0NBS0YsSUFBSSxJQUFJLENBQUNOLFlBQVksRUFDbkIsSUFBSSxDQUFDQSxZQUFZLENBQUNPLElBQUksQ0FBQ2xCLFFBQUFNLE9BQU07Z0NBRWpDO2dDQUVBYSxRQUFRQyxHQUFHLENBQUMsWUFBWVA7NEJBQzFCOzRCQUdBUSxVQUFVO2dDQUNSLElBQUksQ0FBQ1osVUFBVSxHQUFHO2dDQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBRztnQ0FHbkIsSUFBSSxJQUFJLENBQUNDLFlBQVksRUFBRTtvQ0FDckJYLFFBQUFNLE9BQU0sQ0FBQ1EsSUFBSSxHQUFHLElBQUksQ0FBQ0gsWUFBWTtvQ0FDL0IsSUFBSSxDQUFDQSxZQUFZLEdBQUc7Z0NBQ3RCO2dDQUVBUSxRQUFRQyxHQUFHLENBQUM7NEJBQ2Q7NEJBR0FFLFVBQVVULE1BQU0sRUFBRTtnQ0FDaEIsSUFBSSxDQUFDRCxNQUFNLENBQUNDOzRCQUNkOzRCQUdBVSxVQUFVO2dDQUNSLElBQUksQ0FBQ0YsT0FBTzs0QkFDZDt3QkFDRjt3QkFBQyxJQUFBRyxXQUFBQyxPQUFBQSxDQUFBQSxVQUFBLEdBRWMsSUFBSWxCOzs7Ozs7Ozs7Ozs7OztvQkNqRW5CbUIsb0JBQW9CLEVBQUUsR0FBRyxJQUFPOzs7b0JDQWhDQSxvQkFBb0IsSUFBSSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JDc0h6QixJQUFBMUIsVUFBQUMsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQUMsV0FBQUYsdUJBQUFDLGVBQUE7d0JBQ0EsSUFBQXlCLG1CQUFBMUIsdUJBQUEyQixvQkFBQTt3QkFBK0QsU0FBQTNCLHVCQUFBRyxDQUFBOzRCQUFBLE9BQUFBLEtBQUFBLEVBQUFDLFVBQUEsR0FBQUQsSUFBQTtnQ0FBQUUsU0FBQUY7NEJBQUE7d0JBQUE7d0JBQUEsSUFBQW9CLFdBQUFDLFFBQUFuQixPQUFBLEdBRWhEOzRCQUNidUIsTUFBTTtnQ0FDSkMsWUFBWSxDQUFDOzRCQUNmOzRCQUNBQztnQ0FFRSxJQUFJLENBQUNELFVBQVUsR0FBRyxJQUFJLENBQUNFLEtBQUssQ0FBQ0MsS0FBSyxDQUFDSCxVQUFVLElBQUksQ0FBQztnQ0FFbER2QixpQkFBQUEsT0FBZSxDQUFDZSxTQUFTLENBQUM7NEJBQzVCOzRCQUdBWTtnQ0FDRUMsU0FBQUEsT0FBTSxDQUFDcEIsU0FBUyxDQUFDO29DQUNmQyxTQUFTO29DQUNUQyxVQUFVO2dDQUNaO2dDQUlBbUIsV0FBVztvQ0FDVEMsUUFBQUEsT0FBTSxDQUFDQyxPQUFPLENBQUM7d0NBQ2JDLEtBQUs7b0NBQ1A7Z0NBQ0YsR0FBRzs0QkFDTDs0QkFFQUM7Z0NBRUVqQyxpQkFBQUEsT0FBZSxDQUFDZ0IsT0FBTzs0QkFDekI7d0JBQ0YifQ==