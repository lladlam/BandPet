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
                            marginBottom: "10px",
                            flexShrink: 0
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
                            justifyContent: "center"
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
                                "page-content"
                            ]
                        ],
                        {
                            flex: 1,
                            width: "100%",
                            flexDirection: "column",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "detail-content"
                            ]
                        ],
                        {
                            width: "90%",
                            flexDirection: "column"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "detail-title"
                            ]
                        ],
                        {
                            color: "#ffffff",
                            fontSize: "32px",
                            marginBottom: "15px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "detail-date"
                            ]
                        ],
                        {
                            color: "#aaaaaa",
                            fontSize: "24px",
                            marginBottom: "15px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "divider"
                            ]
                        ],
                        {
                            width: "100%",
                            height: "1px",
                            backgroundColor: "#333333",
                            marginBottom: "15px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "detail-body"
                            ]
                        ],
                        {
                            color: "#e0e0e0",
                            fontSize: "28px",
                            width: "100%"
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
                        protected: {
                            announcement: {}
                        },
                        private: {
                            time: '00:00',
                            title: '',
                            body: '',
                            creation_date: ''
                        },
                        onInit () {
                            this.updateTime();
                            setInterval(this.updateTime, 10000);
                        },
                        onShow () {
                            let announcementData = this.announcement;
                            try {
                                if ('string' == typeof announcementData) announcementData = JSON.parse(announcementData);
                                if (announcementData && announcementData.title) {
                                    this.title = announcementData.title;
                                    this.body = announcementData.content;
                                    this.creation_date = this.formatDate(announcementData.created_at);
                                } else throw new Error("Parsed data is invalid.");
                            } catch (e) {
                                this.title = "加载失败";
                                this.body = "未能加载公告内容，请返回重试。";
                                console.error("Announcement data not received or invalid. Raw data:", this.announcement, "Error:", e);
                            }
                        },
                        updateTime () {
                            const now = new Date();
                            const hours = now.getHours().toString().padStart(2, '0');
                            const minutes = now.getMinutes().toString().padStart(2, '0');
                            this.time = `${hours}:${minutes}`;
                        },
                        formatDate (dateString) {
                            if (!dateString) return '';
                            const date = new Date(dateString);
                            return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
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
                    return aiot.__ce__("stack", {
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
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    flexDirection: "column"
                                }
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
                                                value: "公告详情"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("scroll", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "page-content"
                                    ],
                                    scrollY: "true"
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "detail-content"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "detail-title"
                                            ],
                                            value: function() {
                                                return _vm_.title;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "detail-date"
                                            ],
                                            value: function() {
                                                return _vm_.creation_date;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "divider"
                                            ]
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "detail-body"
                                            ],
                                            value: function() {
                                                return _vm_.body;
                                            }
                                        }
                                    }, [])
                                ])
                            ])
                        ]),
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
                                },
                                style: {
                                    top: "5px"
                                }
                            }
                        }, [])
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3VuY2VtZW50LWRldGFpbFxcaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2Fubm91bmNlbWVudC1kZXRhaWwvaW5kZXgudXgiXSwic291cmNlc0NvbnRlbnQiOlsiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNi44XCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjYuOFwiOyIsIjx0ZW1wbGF0ZT5cbiAgPHN0YWNrIGNsYXNzPVwicGFnZS1jb250YWluZXJcIj5cbiAgICA8IS0tIE1haW4gY29udGVudCBjb250YWluZXIgLS0+XG4gICAgPGRpdiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGUtdGltZVwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLXRpbWUtZGlzcGxheVwiPnt7IHRpbWUgfX08L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtaGVhZGVyLXRpdGxlXCI+5YWs5ZGK6K+m5oOFPC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8IS0tIFBhZ2UgU3BlY2lmaWMgQ29udGVudCAtLT5cbiAgICAgIDxzY3JvbGwgY2xhc3M9XCJwYWdlLWNvbnRlbnRcIiBzY3JvbGwteT1cInRydWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC1jb250ZW50XCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJkZXRhaWwtdGl0bGVcIj57eyB0aXRsZSB9fTwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImRldGFpbC1kYXRlXCI+e3sgY3JlYXRpb25fZGF0ZSB9fTwvdGV4dD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiZGV0YWlsLWJvZHlcIj57eyBib2R5IH19PC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2Nyb2xsPlxuICAgIDwvZGl2PlxuICAgIDwhLS0gQmFjayBCdXR0b24gb24gdG9wIGxheWVyIC0tPlxuICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vYmFjay5wbmdcIiBjbGFzcz1cInBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uXCIgb25jbGljaz1cImdvQmFja1wiIHN0eWxlPVwidG9wOiA1cHg7XCI+PC9pbWFnZT5cbiAgPC9zdGFjaz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAucGFnZS1oZWFkZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICB9XG4gIC5wYWdlLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgfVxuICAuaGVhZGVyLXRpdGxlLXRpbWUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAucGFnZS10aW1lLWRpc3BsYXkge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cbiAgLnBhZ2UtY29udGVudCB7XG4gICAgZmxleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmRldGFpbC1jb250ZW50IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmRldGFpbC10aXRsZSB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgLmRldGFpbC1kYXRlIHtcbiAgICBjb2xvcjogI0FBQUFBQTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAuZGl2aWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIC5kZXRhaWwtYm9keSB7XG4gICAgY29sb3I6ICNFMEUwRTA7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJztcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgLy8gUGVyIGRvY3VtZW50YXRpb24sIHJvdXRlciBwYXJhbXMgbXVzdCBiZSBkZWNsYXJlZCBpbiAncHJvdGVjdGVkJy5cbiAgICBwcm90ZWN0ZWQ6IHtcbiAgICAgIGFubm91bmNlbWVudDoge31cbiAgICB9LFxuICAgIHByaXZhdGU6IHtcbiAgICAgIHRpbWU6ICcwMDowMCcsXG4gICAgICB0aXRsZTogJycsXG4gICAgICBib2R5OiAnJyxcbiAgICAgIGNyZWF0aW9uX2RhdGU6ICcnXG4gICAgfSxcbiAgICBvbkluaXQoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICAgIHNldEludGVydmFsKHRoaXMudXBkYXRlVGltZSwgMTAwMDApO1xuICAgIH0sXG4gICAgb25TaG93KCkge1xuICAgICAgLy8gTG9naWMgbW92ZWQgdG8gb25TaG93LCBhcyByb3V0ZXIgcGFyYW1zIGFyZSBndWFyYW50ZWVkIHRvIGJlIGF2YWlsYWJsZSBoZXJlLlxuICAgICAgLy8gVGhlIHBhcmFtZXRlciBpcyBwYXNzZWQgYXMgYSBKU09OIHN0cmluZywgc28gaXQgbmVlZHMgdG8gYmUgcGFyc2VkLlxuICAgICAgbGV0IGFubm91bmNlbWVudERhdGEgPSB0aGlzLmFubm91bmNlbWVudDtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIElmIGl0J3MgYSBzdHJpbmcsIHBhcnNlIGl0LiBJZiBpdCdzIGFscmVhZHkgYW4gb2JqZWN0LCB0aGlzIHdvbid0IGh1cnQuXG4gICAgICAgIGlmICh0eXBlb2YgYW5ub3VuY2VtZW50RGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBhbm5vdW5jZW1lbnREYXRhID0gSlNPTi5wYXJzZShhbm5vdW5jZW1lbnREYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbm5vdW5jZW1lbnREYXRhICYmIGFubm91bmNlbWVudERhdGEudGl0bGUpIHtcbiAgICAgICAgICB0aGlzLnRpdGxlID0gYW5ub3VuY2VtZW50RGF0YS50aXRsZTtcbiAgICAgICAgICB0aGlzLmJvZHkgPSBhbm5vdW5jZW1lbnREYXRhLmNvbnRlbnQ7XG4gICAgICAgICAgdGhpcy5jcmVhdGlvbl9kYXRlID0gdGhpcy5mb3JtYXREYXRlKGFubm91bmNlbWVudERhdGEuY3JlYXRlZF9hdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyc2VkIGRhdGEgaXMgaW52YWxpZC5cIik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IFwi5Yqg6L295aSx6LSlXCI7XG4gICAgICAgIHRoaXMuYm9keSA9IFwi5pyq6IO95Yqg6L295YWs5ZGK5YaF5a6577yM6K+36L+U5Zue6YeN6K+V44CCXCI7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbm5vdW5jZW1lbnQgZGF0YSBub3QgcmVjZWl2ZWQgb3IgaW52YWxpZC4gUmF3IGRhdGE6XCIsIHRoaXMuYW5ub3VuY2VtZW50LCBcIkVycm9yOlwiLCBlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHVwZGF0ZVRpbWUoKSB7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgaG91cnMgPSBub3cuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICBjb25zdCBtaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICB0aGlzLnRpbWUgPSBgJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfSxcbiAgICBmb3JtYXREYXRlKGRhdGVTdHJpbmcpIHtcbiAgICAgIGlmICghZGF0ZVN0cmluZykgcmV0dXJuICcnO1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICAgICAgcmV0dXJuIGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHsoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfS0ke2RhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gO1xuICAgIH0sXG4gICAgZ29CYWNrKCkge1xuICAgICAgcm91dGVyLmJhY2soKTtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwicHJvdGVjdGVkIiwiYW5ub3VuY2VtZW50IiwicHJpdmF0ZSIsInRpbWUiLCJ0aXRsZSIsImJvZHkiLCJjcmVhdGlvbl9kYXRlIiwib25Jbml0IiwidXBkYXRlVGltZSIsInNldEludGVydmFsIiwib25TaG93IiwiYW5ub3VuY2VtZW50RGF0YSIsIkpTT04iLCJwYXJzZSIsImNvbnRlbnQiLCJmb3JtYXREYXRlIiwiY3JlYXRlZF9hdCIsIkVycm9yIiwiY29uc29sZSIsImVycm9yIiwibm93IiwiRGF0ZSIsImhvdXJzIiwiZ2V0SG91cnMiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ29CYWNrIiwicm91dGVyIiwiYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBQUEsb0JBQW9CLEVBQUUsR0FBRyxJQUFPOzs7b0JDQWhDQSxvQkFBb0IsSUFBSSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNvR3pCLElBQUFDLFVBQUFDLHVCQUFBQyxlQUFBO29CQUFvQyxTQUFBRCx1QkFBQUUsQ0FBQTt3QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7NEJBQUFFLFNBQUFGO3dCQUFBO29CQUFBO29CQUFBLElBQUFHLFdBQUFDLFFBQUFGLE9BQUEsR0FFckI7d0JBRWJHLFdBQVc7NEJBQ1RDLGNBQWMsQ0FBQzt3QkFDakI7d0JBQ0FDLFNBQVM7NEJBQ1BDLE1BQU07NEJBQ05DLE9BQU87NEJBQ1BDLE1BQU07NEJBQ05DLGVBQWU7d0JBQ2pCO3dCQUNBQzs0QkFDRSxJQUFJLENBQUNDLFVBQVU7NEJBQ2ZDLFlBQVksSUFBSSxDQUFDRCxVQUFVLEVBQUU7d0JBQy9CO3dCQUNBRTs0QkFHRSxJQUFJQyxtQkFBbUIsSUFBSSxDQUFDVixZQUFZOzRCQUN4QyxJQUFJO2dDQUVGLElBQUksQUFBNEIsWUFBNUIsT0FBT1Usa0JBQ1RBLG1CQUFtQkMsS0FBS0MsS0FBSyxDQUFDRjtnQ0FHaEMsSUFBSUEsb0JBQW9CQSxpQkFBaUJQLEtBQUssRUFBRTtvQ0FDOUMsSUFBSSxDQUFDQSxLQUFLLEdBQUdPLGlCQUFpQlAsS0FBSztvQ0FDbkMsSUFBSSxDQUFDQyxJQUFJLEdBQUdNLGlCQUFpQkcsT0FBTztvQ0FDcEMsSUFBSSxDQUFDUixhQUFhLEdBQUcsSUFBSSxDQUFDUyxVQUFVLENBQUNKLGlCQUFpQkssVUFBVTtnQ0FDbEUsT0FDRSxNQUFNLElBQUlDLE1BQU07NEJBRXBCLEVBQUUsT0FBT3RCLEdBQUc7Z0NBQ1YsSUFBSSxDQUFDUyxLQUFLLEdBQUc7Z0NBQ2IsSUFBSSxDQUFDQyxJQUFJLEdBQUc7Z0NBQ1phLFFBQVFDLEtBQUssQ0FBQyx3REFBd0QsSUFBSSxDQUFDbEIsWUFBWSxFQUFFLFVBQVVOOzRCQUNyRzt3QkFDRjt3QkFDQWE7NEJBQ0UsTUFBTVksTUFBTSxJQUFJQzs0QkFDaEIsTUFBTUMsUUFBUUYsSUFBSUcsUUFBUSxHQUFHQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHOzRCQUNwRCxNQUFNQyxVQUFVTixJQUFJTyxVQUFVLEdBQUdILFFBQVEsR0FBR0MsUUFBUSxDQUFDLEdBQUc7NEJBQ3hELElBQUksQ0FBQ3RCLElBQUksR0FBRyxHQUFHbUIsTUFBTSxDQUFDLEVBQUVJLFNBQVM7d0JBQ25DO3dCQUNBWCxZQUFXYSxVQUFVOzRCQUNuQixJQUFJLENBQUNBLFlBQVksT0FBTzs0QkFDeEIsTUFBTUMsT0FBTyxJQUFJUixLQUFLTzs0QkFDdEIsT0FBTyxHQUFHQyxLQUFLQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLEFBQUNELENBQUFBLEtBQUtFLFFBQVEsS0FBSyxHQUFHUCxRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFSSxLQUFLRyxPQUFPLEdBQUdSLFFBQVEsR0FBR0MsUUFBUSxDQUFDLEdBQUcsTUFBTTt3QkFDbkk7d0JBQ0FROzRCQUNFQyxRQUFBQSxPQUFNLENBQUNDLElBQUk7d0JBQ2I7b0JBQ0YifQ==