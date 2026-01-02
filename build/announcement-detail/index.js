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
                            alignItems: "center",
                            overflowY: "scroll"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3VuY2VtZW50LWRldGFpbFxcaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2Fubm91bmNlbWVudC1kZXRhaWwvaW5kZXgudXgiXSwic291cmNlc0NvbnRlbnQiOlsiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNi44XCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjYuOFwiOyIsIjx0ZW1wbGF0ZT5cbiAgPHN0YWNrIGNsYXNzPVwicGFnZS1jb250YWluZXJcIj5cbiAgICA8IS0tIE1haW4gY29udGVudCBjb250YWluZXIgLS0+XG4gICAgPGRpdiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGUtdGltZVwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLXRpbWUtZGlzcGxheVwiPnt7IHRpbWUgfX08L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtaGVhZGVyLXRpdGxlXCI+5YWs5ZGK6K+m5oOFPC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8IS0tIFBhZ2UgU3BlY2lmaWMgQ29udGVudCAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC1jb250ZW50XCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJkZXRhaWwtdGl0bGVcIj57eyB0aXRsZSB9fTwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImRldGFpbC1kYXRlXCI+e3sgY3JlYXRpb25fZGF0ZSB9fTwvdGV4dD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiZGV0YWlsLWJvZHlcIj57eyBib2R5IH19PC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwhLS0gQmFjayBCdXR0b24gb24gdG9wIGxheWVyIC0tPlxuICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vYmFjay5wbmdcIiBjbGFzcz1cInBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uXCIgb25jbGljaz1cImdvQmFja1wiIHN0eWxlPVwidG9wOiA1cHg7XCI+PC9pbWFnZT5cbiAgPC9zdGFjaz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAucGFnZS1oZWFkZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICB9XG4gIC5wYWdlLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgfVxuICAuaGVhZGVyLXRpdGxlLXRpbWUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAucGFnZS10aW1lLWRpc3BsYXkge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cbiAgLnBhZ2UtY29udGVudCB7XG4gICAgZmxleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsOyAvKiBUaGlzIHdvcmtzIHdpdGhpbiBhIHN0YWNrIGxheW91dCAqL1xuICB9XG4gIC5kZXRhaWwtY29udGVudCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5kZXRhaWwtdGl0bGUge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIC5kZXRhaWwtZGF0ZSB7XG4gICAgY29sb3I6ICNBQUFBQUE7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgLmRpdmlkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAuZGV0YWlsLWJvZHkge1xuICAgIGNvbG9yOiAjRTBFMEUwO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIC8vIFBlciBkb2N1bWVudGF0aW9uLCByb3V0ZXIgcGFyYW1zIG11c3QgYmUgZGVjbGFyZWQgaW4gJ3Byb3RlY3RlZCcuXG4gICAgcHJvdGVjdGVkOiB7XG4gICAgICBhbm5vdW5jZW1lbnQ6IHt9XG4gICAgfSxcbiAgICBwcml2YXRlOiB7XG4gICAgICB0aW1lOiAnMDA6MDAnLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgYm9keTogJycsXG4gICAgICBjcmVhdGlvbl9kYXRlOiAnJ1xuICAgIH0sXG4gICAgb25Jbml0KCkge1xuICAgICAgdGhpcy51cGRhdGVUaW1lKCk7XG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVRpbWUsIDEwMDAwKTtcbiAgICB9LFxuICAgIG9uU2hvdygpIHtcbiAgICAgIC8vIExvZ2ljIG1vdmVkIHRvIG9uU2hvdywgYXMgcm91dGVyIHBhcmFtcyBhcmUgZ3VhcmFudGVlZCB0byBiZSBhdmFpbGFibGUgaGVyZS5cbiAgICAgIC8vIFRoZSBwYXJhbWV0ZXIgaXMgcGFzc2VkIGFzIGEgSlNPTiBzdHJpbmcsIHNvIGl0IG5lZWRzIHRvIGJlIHBhcnNlZC5cbiAgICAgIGxldCBhbm5vdW5jZW1lbnREYXRhID0gdGhpcy5hbm5vdW5jZW1lbnQ7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBJZiBpdCdzIGEgc3RyaW5nLCBwYXJzZSBpdC4gSWYgaXQncyBhbHJlYWR5IGFuIG9iamVjdCwgdGhpcyB3b24ndCBodXJ0LlxuICAgICAgICBpZiAodHlwZW9mIGFubm91bmNlbWVudERhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgYW5ub3VuY2VtZW50RGF0YSA9IEpTT04ucGFyc2UoYW5ub3VuY2VtZW50RGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5ub3VuY2VtZW50RGF0YSAmJiBhbm5vdW5jZW1lbnREYXRhLnRpdGxlKSB7XG4gICAgICAgICAgdGhpcy50aXRsZSA9IGFubm91bmNlbWVudERhdGEudGl0bGU7XG4gICAgICAgICAgdGhpcy5ib2R5ID0gYW5ub3VuY2VtZW50RGF0YS5jb250ZW50O1xuICAgICAgICAgIHRoaXMuY3JlYXRpb25fZGF0ZSA9IHRoaXMuZm9ybWF0RGF0ZShhbm5vdW5jZW1lbnREYXRhLmNyZWF0ZWRfYXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcnNlZCBkYXRhIGlzIGludmFsaWQuXCIpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBcIuWKoOi9veWksei0pVwiO1xuICAgICAgICB0aGlzLmJvZHkgPSBcIuacquiDveWKoOi9veWFrOWRiuWGheWuue+8jOivt+i/lOWbnumHjeivleOAglwiO1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQW5ub3VuY2VtZW50IGRhdGEgbm90IHJlY2VpdmVkIG9yIGludmFsaWQuIFJhdyBkYXRhOlwiLCB0aGlzLmFubm91bmNlbWVudCwgXCJFcnJvcjpcIiwgZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVUaW1lKCkge1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgY29uc3QgbWludXRlcyA9IG5vdy5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgdGhpcy50aW1lID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xuICAgIH0sXG4gICAgZm9ybWF0RGF0ZShkYXRlU3RyaW5nKSB7XG4gICAgICBpZiAoIWRhdGVTdHJpbmcpIHJldHVybiAnJztcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgICAgIHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7KGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX0tJHtkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9YDtcbiAgICB9LFxuICAgIGdvQmFjaygpIHtcbiAgICAgIHJvdXRlci5iYWNrKCk7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwicHJvdGVjdGVkIiwiYW5ub3VuY2VtZW50IiwicHJpdmF0ZSIsInRpbWUiLCJ0aXRsZSIsImJvZHkiLCJjcmVhdGlvbl9kYXRlIiwib25Jbml0IiwidXBkYXRlVGltZSIsInNldEludGVydmFsIiwib25TaG93IiwiYW5ub3VuY2VtZW50RGF0YSIsIkpTT04iLCJwYXJzZSIsImNvbnRlbnQiLCJmb3JtYXREYXRlIiwiY3JlYXRlZF9hdCIsIkVycm9yIiwiY29uc29sZSIsImVycm9yIiwibm93IiwiRGF0ZSIsImhvdXJzIiwiZ2V0SG91cnMiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ29CYWNrIiwicm91dGVyIiwiYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBQUEsb0JBQW9CLEVBQUUsR0FBRyxJQUFPOzs7b0JDQWhDQSxvQkFBb0IsSUFBSSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDcUd6QixJQUFBQyxVQUFBQyx1QkFBQUMsZUFBQTtvQkFBb0MsU0FBQUQsdUJBQUFFLENBQUE7d0JBQUEsT0FBQUEsS0FBQUEsRUFBQUMsVUFBQSxHQUFBRCxJQUFBOzRCQUFBRSxTQUFBRjt3QkFBQTtvQkFBQTtvQkFBQSxJQUFBRyxXQUFBQyxRQUFBRixPQUFBLEdBRXJCO3dCQUViRyxXQUFXOzRCQUNUQyxjQUFjLENBQUM7d0JBQ2pCO3dCQUNBQyxTQUFTOzRCQUNQQyxNQUFNOzRCQUNOQyxPQUFPOzRCQUNQQyxNQUFNOzRCQUNOQyxlQUFlO3dCQUNqQjt3QkFDQUM7NEJBQ0UsSUFBSSxDQUFDQyxVQUFVOzRCQUNmQyxZQUFZLElBQUksQ0FBQ0QsVUFBVSxFQUFFO3dCQUMvQjt3QkFDQUU7NEJBR0UsSUFBSUMsbUJBQW1CLElBQUksQ0FBQ1YsWUFBWTs0QkFDeEMsSUFBSTtnQ0FFRixJQUFJLEFBQTRCLFlBQTVCLE9BQU9VLGtCQUNUQSxtQkFBbUJDLEtBQUtDLEtBQUssQ0FBQ0Y7Z0NBR2hDLElBQUlBLG9CQUFvQkEsaUJBQWlCUCxLQUFLLEVBQUU7b0NBQzlDLElBQUksQ0FBQ0EsS0FBSyxHQUFHTyxpQkFBaUJQLEtBQUs7b0NBQ25DLElBQUksQ0FBQ0MsSUFBSSxHQUFHTSxpQkFBaUJHLE9BQU87b0NBQ3BDLElBQUksQ0FBQ1IsYUFBYSxHQUFHLElBQUksQ0FBQ1MsVUFBVSxDQUFDSixpQkFBaUJLLFVBQVU7Z0NBQ2xFLE9BQ0UsTUFBTSxJQUFJQyxNQUFNOzRCQUVwQixFQUFFLE9BQU90QixHQUFHO2dDQUNWLElBQUksQ0FBQ1MsS0FBSyxHQUFHO2dDQUNiLElBQUksQ0FBQ0MsSUFBSSxHQUFHO2dDQUNaYSxRQUFRQyxLQUFLLENBQUMsd0RBQXdELElBQUksQ0FBQ2xCLFlBQVksRUFBRSxVQUFVTjs0QkFDckc7d0JBQ0Y7d0JBQ0FhOzRCQUNFLE1BQU1ZLE1BQU0sSUFBSUM7NEJBQ2hCLE1BQU1DLFFBQVFGLElBQUlHLFFBQVEsR0FBR0MsUUFBUSxHQUFHQyxRQUFRLENBQUMsR0FBRzs0QkFDcEQsTUFBTUMsVUFBVU4sSUFBSU8sVUFBVSxHQUFHSCxRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHOzRCQUN4RCxJQUFJLENBQUN0QixJQUFJLEdBQUcsR0FBR21CLE1BQU0sQ0FBQyxFQUFFSSxTQUFTO3dCQUNuQzt3QkFDQVgsWUFBV2EsVUFBVTs0QkFDbkIsSUFBSSxDQUFDQSxZQUFZLE9BQU87NEJBQ3hCLE1BQU1DLE9BQU8sSUFBSVIsS0FBS087NEJBQ3RCLE9BQU8sR0FBR0MsS0FBS0MsV0FBVyxHQUFHLENBQUMsRUFBRSxBQUFDRCxDQUFBQSxLQUFLRSxRQUFRLEtBQUssR0FBR1AsUUFBUSxHQUFHQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRUksS0FBS0csT0FBTyxHQUFHUixRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHLE1BQU07d0JBQ25JO3dCQUNBUTs0QkFDRUMsUUFBQUEsT0FBTSxDQUFDQyxJQUFJO3dCQUNiO29CQUNGIn0=