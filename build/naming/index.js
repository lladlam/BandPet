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
                    "./src/InputMethod/InputMethod.ux" (module, __unused_rspack_exports, __webpack_require__) {
                        var $app_style$ = [
                            [
                                [
                                    [
                                        0,
                                        "page"
                                    ]
                                ],
                                {
                                    width: "100%",
                                    position: "absolute",
                                    left: 0,
                                    bottom: 0
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "item"
                                    ]
                                ],
                                {
                                    height: "52px",
                                    flex: 1
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtn0"
                                    ]
                                ],
                                {
                                    color: "#ffffff",
                                    fontSize: "28px",
                                    backgroundColor: "rgba(38, 38, 38, 0)",
                                    borderRadius: 0,
                                    height: "52px",
                                    width: "52px",
                                    textAlign: "center"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtn02"
                                    ]
                                ],
                                {
                                    color: "rgb(255, 255, 255)",
                                    backgroundColor: "rgba(38, 38, 38, 0)",
                                    borderRadius: "0px",
                                    fontSize: "32px",
                                    textAlign: "center",
                                    height: "42px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtnfull"
                                    ]
                                ],
                                {
                                    color: "#ffffff",
                                    fontSize: "24px",
                                    fontWeight: "bold",
                                    backgroundColor: "#262626",
                                    borderRadius: "12px",
                                    marginRight: "4px",
                                    height: "52px",
                                    width: "40px",
                                    textAlign: "center",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtnt9"
                                    ]
                                ],
                                {
                                    color: "#ffffff",
                                    fontSize: "25px",
                                    fontWeight: "bold",
                                    backgroundColor: "#262626",
                                    borderRadius: "999px",
                                    marginRight: "4px",
                                    width: "94px",
                                    height: "60px",
                                    textAlign: "center",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "caltext"
                                    ]
                                ],
                                {
                                    textAlign: "left",
                                    lineHeight: "38px",
                                    lines: 1,
                                    textOverflow: "ellipsis",
                                    color: "#0d84ff",
                                    height: "45px",
                                    fontSize: "28px",
                                    fontWeight: "bold",
                                    paddingLeft: "8px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "list3"
                                    ]
                                ],
                                {
                                    position: "absolute",
                                    top: "38px",
                                    left: "78px",
                                    width: "324px",
                                    height: "160px",
                                    flexDirection: "column",
                                    backgroundColor: "#262626",
                                    borderRadius: "12px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "item3"
                                    ]
                                ],
                                {
                                    width: "324px",
                                    height: "52px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtn67"
                                    ]
                                ],
                                {
                                    color: "rgb(255, 255, 255)",
                                    fontSize: "32px",
                                    fontWeight: "bold",
                                    backgroundColor: "rgb(38, 38, 38)",
                                    marginRight: "4px",
                                    width: "60px",
                                    height: "60px",
                                    borderRadius: "30px",
                                    textAlign: "center",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px"
                                }
                            ],
                            [
                                [
                                    [
                                        1,
                                        "keyboard67"
                                    ]
                                ],
                                {
                                    position: "absolute",
                                    left: "0px",
                                    top: "82px",
                                    width: "100%",
                                    height: "170px"
                                }
                            ],
                            [
                                [
                                    [
                                        1,
                                        "keyboard66"
                                    ]
                                ],
                                {
                                    position: "absolute",
                                    left: "0px",
                                    top: "82px",
                                    width: "100%",
                                    height: "170px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "list67"
                                    ]
                                ],
                                {
                                    top: "0px",
                                    width: "96.4%",
                                    height: "170px",
                                    borderRadius: "30px",
                                    backgroundColor: "#262626",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px",
                                    paddingTop: "0px",
                                    paddingRight: "10px",
                                    paddingBottom: "0px",
                                    paddingLeft: "10px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "item67"
                                    ]
                                ],
                                {
                                    height: "50px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtn66"
                                    ]
                                ],
                                {
                                    color: "rgb(255, 255, 255)",
                                    fontSize: "32px",
                                    fontWeight: "bold",
                                    backgroundColor: "rgb(38, 38, 38)",
                                    marginRight: "3px",
                                    width: "60px",
                                    height: "60px",
                                    borderRadius: "30px",
                                    textAlign: "center",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "list66"
                                    ]
                                ],
                                {
                                    position: "absolute",
                                    left: "3px",
                                    top: "0px",
                                    width: "186px",
                                    height: "186px",
                                    borderRadius: "30px",
                                    backgroundColor: "#262626",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px",
                                    paddingTop: "10px",
                                    paddingRight: "10px",
                                    paddingBottom: "10px",
                                    paddingLeft: "10px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "item66"
                                    ]
                                ],
                                {
                                    height: "42px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "waiting-keys"
                                    ]
                                ],
                                {
                                    width: "36px",
                                    height: "40px",
                                    textAlign: "center"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "keyboard-rows-rect-t9"
                                    ]
                                ],
                                {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    flexDirection: "row",
                                    flexShrink: 0,
                                    height: "55px",
                                    width: "100%"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtnt9-rect"
                                    ]
                                ],
                                {
                                    flex: 1,
                                    height: "55px",
                                    marginTop: "0",
                                    marginRight: "3px",
                                    marginBottom: "0",
                                    marginLeft: "3px",
                                    width: "unset"
                                }
                            ]
                        ];
                        var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                            "use strict";
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.default = void 0;
                            var _system = _interopRequireDefault($app_require$1("@app-module/system.vibrator"));
                            var _system2 = _interopRequireDefault($app_require$1("@app-module/system.device"));
                            var _dicUtil = __webpack_require__("./src/InputMethod/assets/dicUtil.js");
                            function _interopRequireDefault(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            function doSearchDic(word, cb) {
                                let hanzi = _dicUtil.SimpleInputMethod.getHanzi(word);
                                cb(hanzi && hanzi[0] ? hanzi[0] : []);
                            }
                            function deleteLast(t) {
                                if (t) return t.substr(0, t.length - 1);
                                return "";
                            }
                            var _default = exports.default = {
                                props: {
                                    hide: {
                                        default: true
                                    },
                                    keyboardtype: {
                                        default: "QWERTY"
                                    },
                                    maxlength: {
                                        default: 5
                                    },
                                    vibratemode: {
                                        default: ""
                                    },
                                    screentype: {
                                        default: "circle"
                                    }
                                },
                                data: {
                                    cval: "",
                                    resultList: [],
                                    resultList2: [],
                                    waitingList: [],
                                    waitingIndex: -1,
                                    lastWaitingStr: "",
                                    downFlag: "",
                                    lang: "cn",
                                    numFlag: false,
                                    upperFlag: false,
                                    cvalList: [
                                        0,
                                        1,
                                        2,
                                        3,
                                        4
                                    ],
                                    percent67: 52,
                                    percent66: 0,
                                    screenWidth: 336,
                                    keys: {
                                        full: [
                                            [
                                                "Q",
                                                "W",
                                                "E",
                                                "R",
                                                "T",
                                                "Y",
                                                "U",
                                                "I",
                                                "O",
                                                "P"
                                            ],
                                            [
                                                "A",
                                                "S",
                                                "D",
                                                "F",
                                                "G",
                                                "H",
                                                "J",
                                                "K",
                                                "L"
                                            ],
                                            [
                                                "Z",
                                                "X",
                                                "C",
                                                "V",
                                                "B",
                                                "N",
                                                "M"
                                            ]
                                        ],
                                        sign: [
                                            [
                                                "1",
                                                "2",
                                                "3",
                                                "4",
                                                "5",
                                                "6",
                                                "7",
                                                "8",
                                                "9",
                                                "0"
                                            ],
                                            [
                                                "~",
                                                "!",
                                                "@",
                                                "#",
                                                "%",
                                                "“",
                                                "”",
                                                "*",
                                                "?",
                                                "/"
                                            ],
                                            [
                                                "(",
                                                ")",
                                                "-",
                                                "_",
                                                ":",
                                                ";",
                                                "，",
                                                "。",
                                                "."
                                            ]
                                        ],
                                        sign62: [
                                            [
                                                "2",
                                                "3",
                                                "4",
                                                "5",
                                                "6",
                                                "7",
                                                "8",
                                                "9"
                                            ],
                                            [
                                                "!",
                                                "@",
                                                "#",
                                                "%",
                                                "“",
                                                "”",
                                                "*"
                                            ],
                                            [
                                                ")",
                                                "-",
                                                "_",
                                                ":",
                                                ";"
                                            ]
                                        ],
                                        full62: [
                                            [
                                                "W",
                                                "E",
                                                "R",
                                                "T",
                                                "Y",
                                                "U",
                                                "I",
                                                "O"
                                            ],
                                            [
                                                "S",
                                                "D",
                                                "F",
                                                "G",
                                                "H",
                                                "J",
                                                "K"
                                            ],
                                            [
                                                "X",
                                                "C",
                                                "V",
                                                "B",
                                                "N"
                                            ]
                                        ],
                                        t9: [
                                            [
                                                "abc",
                                                "def"
                                            ],
                                            [
                                                "ghi",
                                                "jkl",
                                                "mno"
                                            ],
                                            [
                                                "pqrs",
                                                "tuv",
                                                "wxyz"
                                            ]
                                        ]
                                    }
                                },
                                onInit () {
                                    if (this.maxlength) {
                                        const tempCvalList = [];
                                        for(let i = 0; i < this.maxlength; i++)tempCvalList.push(i);
                                        this.cvalList = tempCvalList;
                                    }
                                    if ("rect" === this.screentype || "pill-shaped" === this.screentype) this.adjustScreenWidth();
                                    this.$watch("hide", "watchHidePropsChange");
                                    this.$watch("maxlength", "watchMaxLengthPropsChange");
                                },
                                addAllTxt (txt) {
                                    this.$emit("complete", {
                                        content: txt
                                    });
                                },
                                onRsSelect (txt) {
                                    this.onVibrate();
                                    this.cval = "";
                                    this.addAllTxt(txt);
                                    this.clearWaiting();
                                    this.resetReslutList();
                                    this.downFlag = "";
                                },
                                onBtnClick (sign) {
                                    this.onVibrate();
                                    switch(sign){
                                        case "AC":
                                            this.cval = "";
                                            this.clearWaiting();
                                            this.resetReslutList();
                                            break;
                                        case "lang":
                                            if ("cn" === this.lang) this.lang = "en";
                                            else this.lang = "cn";
                                            this.cval = "";
                                            this.clearWaiting();
                                            this.resetReslutList();
                                            break;
                                        case "D":
                                            if (this.waitingIndex >= 0) {
                                                this.clearWaiting();
                                                this.resetReslutList();
                                            } else if (this.cval.length > 0) {
                                                this.cval = deleteLast(this.cval);
                                                this.resetReslutList();
                                            } else this.$emit("delete", {});
                                            break;
                                        case "space":
                                            this.addAllTxt(" ");
                                            break;
                                        case "down":
                                            this.downFlag = "down" === this.downFlag ? "" : "down";
                                            break;
                                        case "select":
                                            if (this.lastWaitingStr != sign && this.lastWaitingStr) {
                                                if ("cn" === this.lang) this.cval += this.waitingList[this.waitingIndex];
                                                else if (this.upperFlag) this.addAllTxt(this.waitingList[this.waitingIndex].toUpperCase());
                                                else this.addAllTxt(this.waitingList[this.waitingIndex].toLowerCase());
                                                this.clearWaiting();
                                                this.resetReslutList();
                                            }
                                            break;
                                        case "switchNum":
                                            this.numFlag = true;
                                            this.cval = "";
                                            this.clearWaiting();
                                            this.resetReslutList();
                                            break;
                                        case "switchCn":
                                            this.numFlag = false;
                                            break;
                                        case "switchUpper":
                                            this.upperFlag = true;
                                            break;
                                        case "switchLow":
                                            this.upperFlag = false;
                                            break;
                                        default:
                                            if (1 === sign.length) this.addAllTxt(sign);
                                            else {
                                                if (this.waitingIndex >= 0) if (this.lastWaitingStr === sign) {
                                                    this.waitingIndex++;
                                                    if (this.waitingIndex >= this.lastWaitingStr.length) this.waitingIndex = 0;
                                                } else {
                                                    if ("cn" === this.lang) this.cval += this.waitingList[this.waitingIndex];
                                                    else if (this.upperFlag) this.addAllTxt(this.waitingList[this.waitingIndex].toUpperCase());
                                                    else this.addAllTxt(this.waitingList[this.waitingIndex].toLowerCase());
                                                    this.lastWaitingStr = sign;
                                                    this.waitingIndex = 0;
                                                    this.waitingList = sign.split("");
                                                }
                                                else {
                                                    this.lastWaitingStr = sign;
                                                    this.waitingIndex = 0;
                                                    this.waitingList = sign.split("");
                                                }
                                                this.resetReslutList();
                                            }
                                            break;
                                    }
                                },
                                clearWaiting () {
                                    this.waitingList = [];
                                    this.waitingIndex = -1;
                                    this.lastWaitingStr = "";
                                },
                                resetReslutList () {
                                    if ("circle" != this.screentype) {
                                        const cvalWaitingElement = this.$element("cvalWaiting");
                                        if (cvalWaitingElement) cvalWaitingElement.scrollTo({
                                            top: 0,
                                            left: 0,
                                            behavior: "smooth"
                                        });
                                    }
                                    let watingStr = "";
                                    if (this.lastWaitingStr && this.lastWaitingStr[this.waitingIndex]) watingStr = this.lastWaitingStr[this.waitingIndex];
                                    if (!(this.cval + watingStr) || "cn" != this.lang) {
                                        this.resultList = [];
                                        this.setResultListAll();
                                        return;
                                    }
                                    this.getResultByWord(this.cval + watingStr);
                                },
                                setResultListAll () {
                                    this.resultList2 = [];
                                    let array = [];
                                    for(let i = 0; i < this.resultList.length; i++){
                                        array.push(this.resultList[i]);
                                        if (array.length === parseInt(this.maxlength)) {
                                            this.resultList2.push(array);
                                            array = [];
                                        }
                                    }
                                    if (array.length > 0 && array.length < parseInt(this.maxlength)) this.resultList2.push(array);
                                },
                                getResultByWord (val) {
                                    const that = this;
                                    doSearchDic(val, function(data) {
                                        that.resultList = data;
                                        that.setResultListAll();
                                    });
                                },
                                onSelect (num) {
                                    this.$emit("keyDown", {
                                        content: num
                                    });
                                    if ("T9" === this.keyboardtype && "pill-shaped" !== this.screentype) return void this.onBtnClick(num);
                                    this.onVibrate();
                                    if ("cn" !== this.lang || this.numFlag) if ("en" !== this.lang || this.numFlag) this.addAllTxt(num);
                                    else if (this.upperFlag) this.addAllTxt(num.toUpperCase());
                                    else this.addAllTxt(num.toLowerCase());
                                    else this.cval += num.toLowerCase();
                                    this.resetReslutList();
                                },
                                onSelectWaiting (num) {
                                    this.onVibrate();
                                    if ("cn" === this.lang) this.cval += this.waitingList[num].toString();
                                    else if (this.upperFlag) this.addAllTxt(this.waitingList[num].toUpperCase());
                                    else this.addAllTxt(this.waitingList[num].toLowerCase());
                                    this.clearWaiting();
                                    this.resetReslutList();
                                },
                                watchHidePropsChange (newV, oldV) {
                                    this.$emit("visibilityChange", {
                                        visible: newV
                                    });
                                },
                                watchMaxLengthPropsChange (newV, oldV) {
                                    if (newV) {
                                        const tempCvalList = [];
                                        for(let i = 0; i < newV; i++)tempCvalList.push(i);
                                        this.cvalList = tempCvalList;
                                    }
                                },
                                onVibrate () {
                                    if ("" != this.vibratemode) _system.default.vibrate({
                                        mode: this.vibratemode
                                    });
                                },
                                handelScroll (event) {
                                    let percentTemp67 = event.scrollX / 636 * 100 + 52.8;
                                    this.percent67 = parseInt(percentTemp67 <= 100 ? percentTemp67 : 100);
                                    let percentTemp66 = event.scrollX / 633 * 100;
                                    this.percent66 = parseInt(percentTemp66 <= 100 ? percentTemp66 : 100);
                                },
                                pushCval () {
                                    this.onVibrate();
                                    let temp = this.cval;
                                    this.cval = "";
                                    this.clearWaiting();
                                    this.resetReslutList();
                                    this.addAllTxt(temp);
                                },
                                adjustScreenWidth () {
                                    _system2.default.getInfo({
                                        success: (data)=>{
                                            this.screenWidth = data.screenWidth;
                                        }
                                    });
                                }
                            };
                        };
                        var $app_template$ = function(vm) {
                            const _vm_ = vm || this;
                            return aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "page"
                                    ],
                                    style: {
                                        flexDirection: "column"
                                    },
                                    show: function() {
                                        return !_vm_.hide;
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        style: {
                                            backgroundColor: "black"
                                        }
                                    }
                                }, [
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return "circle" === _vm_.screentype;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    style: {
                                                        width: "480px",
                                                        height: "321px"
                                                    }
                                                }
                                            }, [
                                                aiot.__ci__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        shown: function() {
                                                            return "T9" != _vm_.keyboardtype;
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                style: {
                                                                    width: "480px",
                                                                    height: "321px"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/InputMethod/assets/full/back2.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "38px",
                                                                        left: "7px",
                                                                        width: "466px",
                                                                        height: "52px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchCn", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/InputMethod/assets/full/123.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "266px",
                                                                        left: "119px",
                                                                        width: "120px",
                                                                        height: "48px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchNum", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag && "cn" === _vm_.lang;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/InputMethod/assets/full/bigA.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "266px",
                                                                        left: "119px",
                                                                        width: "120px",
                                                                        height: "48px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchLow", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && _vm_.upperFlag && "en" === _vm_.lang;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/InputMethod/assets/full/A.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "266px",
                                                                        left: "119px",
                                                                        width: "120px",
                                                                        height: "48px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchUpper", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.upperFlag && "en" === _vm_.lang;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "38px",
                                                                        left: "78px",
                                                                        width: "324px",
                                                                        height: "52px",
                                                                        backgroundColor: "rgb(38, 38, 38)",
                                                                        borderRadius: "12px",
                                                                        borderTopColor: "#333333",
                                                                        borderRightColor: "#333333",
                                                                        borderBottomColor: "#333333",
                                                                        borderLeftColor: "#333333",
                                                                        borderStyle: "solid",
                                                                        borderTopWidth: "3px",
                                                                        borderRightWidth: "3px",
                                                                        borderBottomWidth: "3px",
                                                                        borderLeftWidth: "3px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    show: function() {
                                                                        return _vm_.resultList.length > 0;
                                                                    },
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "43px",
                                                                        left: "355px"
                                                                    },
                                                                    src: "/InputMethod/assets/full/down.png",
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("down", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: function() {
                                                                        return "/InputMethod/assets/full/" + _vm_.lang + ".png";
                                                                    },
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "38px",
                                                                        left: "7px",
                                                                        width: "67px",
                                                                        height: "52px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("lang", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "-4px",
                                                                        left: "78px",
                                                                        width: "324px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag && _vm_.cval;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "caltext"
                                                                        ],
                                                                        style: {
                                                                            width: "296px"
                                                                        },
                                                                        value: function() {
                                                                            return _vm_.cval + "_";
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "38px",
                                                                        left: "80px",
                                                                        width: "277px"
                                                                    },
                                                                    show: function() {
                                                                        return "cn" === _vm_.lang && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.cvalList;
                                                                        },
                                                                        key: "$idx",
                                                                        value: "$item"
                                                                    }
                                                                }, function($idx, $item) {
                                                                    return [
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "item",
                                                                                    "column",
                                                                                    "center"
                                                                                ]
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("input", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    show: function() {
                                                                                        return _vm_.resultList.length > $idx;
                                                                                    },
                                                                                    classList: [
                                                                                        "calbtn0"
                                                                                    ],
                                                                                    type: "button",
                                                                                    value: function() {
                                                                                        return _vm_.resultList[$idx];
                                                                                    },
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onRsSelect(_vm_.resultList[$idx], evt);
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ])
                                                                    ];
                                                                })
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "38px",
                                                                        left: "80px",
                                                                        width: "320px",
                                                                        height: "52px",
                                                                        alignContent: "center",
                                                                        alignItems: "center",
                                                                        justifyContent: "center"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag && "en" === _vm_.lang;
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchNum", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/InputMethod/assets/full/123_boardless.png"
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ci__({
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    shown: function() {
                                                                        return "down" === _vm_.downFlag;
                                                                    }
                                                                }
                                                            }, function() {
                                                                return [
                                                                    aiot.__ce__("list", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "list3"
                                                                            ]
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.resultList2;
                                                                                },
                                                                                key: "$idx",
                                                                                value: "itemArray"
                                                                            }
                                                                        }, function($idx, itemArray) {
                                                                            return [
                                                                                aiot.__ce__("list-item", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        type: "waitingRows62t9",
                                                                                        classList: [
                                                                                            "item3"
                                                                                        ]
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return itemArray;
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "item"
                                                                                        }
                                                                                    }, function($idx, item) {
                                                                                        return [
                                                                                            aiot.__ce__("div", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "item",
                                                                                                        "column",
                                                                                                        "center"
                                                                                                    ],
                                                                                                    style: {
                                                                                                        height: "52px"
                                                                                                    }
                                                                                                }
                                                                                            }, [
                                                                                                aiot.__ce__("input", {
                                                                                                    __vm__: _vm_,
                                                                                                    __opts__: {
                                                                                                        classList: [
                                                                                                            "calbtn0"
                                                                                                        ],
                                                                                                        type: "button",
                                                                                                        value: function() {
                                                                                                            return item;
                                                                                                        },
                                                                                                        events: {
                                                                                                            click: function(evt) {
                                                                                                                return _vm_.onRsSelect(item, evt);
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }, [])
                                                                                            ])
                                                                                        ];
                                                                                    })
                                                                                ])
                                                                            ];
                                                                        })
                                                                    ])
                                                                ];
                                                            }),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "95px",
                                                                        left: "8px",
                                                                        width: "464px",
                                                                        height: "52px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/InputMethod/assets/full/Q.png",
                                                                        style: {
                                                                            width: "54px",
                                                                            height: "52px",
                                                                            marginRight: "4px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("Q", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.keys["full62"][0];
                                                                        },
                                                                        key: "$idx",
                                                                        value: "item"
                                                                    }
                                                                }, function($idx, item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtnfull"
                                                                                ],
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect(item, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return item;
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                }),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/InputMethod/assets/full/P.png",
                                                                        style: {
                                                                            width: "54px",
                                                                            height: "52px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("P", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "152px",
                                                                        left: "23px",
                                                                        width: "438px",
                                                                        height: "52px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/InputMethod/assets/full/btA.png",
                                                                        style: {
                                                                            width: "60px",
                                                                            height: "52px",
                                                                            marginRight: "4px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("A", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.keys["full62"][1];
                                                                        },
                                                                        key: "$idx",
                                                                        value: "item"
                                                                    }
                                                                }, function($idx, item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtnfull"
                                                                                ],
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect(item, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return item;
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                }),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/InputMethod/assets/full/L.png",
                                                                        style: {
                                                                            width: "60px",
                                                                            height: "52px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("L", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "209px",
                                                                        left: "56px",
                                                                        width: "368px",
                                                                        height: "52px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/InputMethod/assets/full/Z.png",
                                                                        style: {
                                                                            width: "72px",
                                                                            height: "52px",
                                                                            marginRight: "4px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("Z", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.keys["full62"][2];
                                                                        },
                                                                        key: "$idx",
                                                                        value: "item"
                                                                    }
                                                                }, function($idx, item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtnfull"
                                                                                ],
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect(item, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return item;
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                }),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/InputMethod/assets/full/M.png",
                                                                        style: {
                                                                            width: "72px",
                                                                            height: "52px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("M", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "95px",
                                                                        left: "8px",
                                                                        width: "464px",
                                                                        height: "52px"
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/InputMethod/assets/full/1.png",
                                                                        style: {
                                                                            width: "54px",
                                                                            height: "52px",
                                                                            marginRight: "4px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("1", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.keys["sign62"][0];
                                                                        },
                                                                        key: "$idx",
                                                                        value: "item"
                                                                    }
                                                                }, function($idx, item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtnfull"
                                                                                ],
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect(item, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return item;
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                }),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/InputMethod/assets/full/0.png",
                                                                        style: {
                                                                            width: "54px",
                                                                            height: "52px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("0", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "152px",
                                                                        left: "23px",
                                                                        width: "438px",
                                                                        height: "52px"
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/InputMethod/assets/full/2-1.png",
                                                                        style: {
                                                                            width: "60px",
                                                                            height: "52px",
                                                                            marginRight: "4px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("~", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.keys["sign62"][1];
                                                                        },
                                                                        key: "$idx",
                                                                        value: "item"
                                                                    }
                                                                }, function($idx, item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtnfull"
                                                                                ],
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect(item, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return item;
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                }),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/InputMethod/assets/full/2-2.png",
                                                                        style: {
                                                                            width: "60px",
                                                                            height: "52px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("?", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "209px",
                                                                        left: "56px",
                                                                        width: "368px",
                                                                        height: "52px"
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/InputMethod/assets/full/3-1.png",
                                                                        style: {
                                                                            width: "72px",
                                                                            height: "52px",
                                                                            marginRight: "4px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("(", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.keys["sign62"][2];
                                                                        },
                                                                        key: "$idx",
                                                                        value: "item"
                                                                    }
                                                                }, function($idx, item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtnfull"
                                                                                ],
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect(item, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return item;
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                }),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/InputMethod/assets/full/3-2.png",
                                                                        style: {
                                                                            width: "72px",
                                                                            height: "52px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("\u3001", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/InputMethod/assets/full/del.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "38px",
                                                                        left: "406px",
                                                                        width: "67px",
                                                                        height: "52px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("D", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/InputMethod/assets/full/space.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "266px",
                                                                        left: "242px",
                                                                        width: "120px",
                                                                        height: "48px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("space", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/InputMethod/assets/full/4-2.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "266px",
                                                                        left: "242px",
                                                                        width: "120px",
                                                                        height: "48px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onSelect("\u3002", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/InputMethod/assets/full/4-1.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "266px",
                                                                        left: "119px",
                                                                        width: "120px",
                                                                        height: "48px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onSelect("\uFF0C", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "204px",
                                                                        left: "78px"
                                                                    },
                                                                    src: "/InputMethod/assets/full/up.png",
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("down", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "down" === _vm_.downFlag;
                                                                    }
                                                                }
                                                            }, [])
                                                        ])
                                                    ];
                                                }),
                                                aiot.__ci__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        shown: function() {
                                                            return !("T9" != _vm_.keyboardtype);
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                style: {
                                                                    width: "480px",
                                                                    height: "321px"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/InputMethod/assets/t9/back2.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "35px",
                                                                        left: "31px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchCn", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/InputMethod/assets/t9/123.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "99px",
                                                                        left: "31px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchNum", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag && "cn" === _vm_.lang;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/InputMethod/assets/t9/bigA.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "99px",
                                                                        left: "31px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchLow", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag && _vm_.upperFlag && "en" === _vm_.lang;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/InputMethod/assets/t9/a.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "99px",
                                                                        left: "31px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchUpper", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag && !_vm_.upperFlag && "en" === _vm_.lang;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "35px",
                                                                        left: "95px",
                                                                        width: "290px",
                                                                        height: "60px",
                                                                        backgroundColor: "rgb(38, 38, 38)",
                                                                        borderRadius: "999px",
                                                                        borderTopColor: "#333333",
                                                                        borderRightColor: "#333333",
                                                                        borderBottomColor: "#333333",
                                                                        borderLeftColor: "#333333",
                                                                        borderStyle: "solid",
                                                                        borderTopWidth: "3px",
                                                                        borderRightWidth: "3px",
                                                                        borderBottomWidth: "3px",
                                                                        borderLeftWidth: "3px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    show: function() {
                                                                        return _vm_.resultList.length > 0;
                                                                    },
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "44px",
                                                                        left: "338px"
                                                                    },
                                                                    src: "/InputMethod/assets/full/down.png",
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("down", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: function() {
                                                                        return "/InputMethod/assets/t9/" + _vm_.lang + ".png";
                                                                    },
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "35px",
                                                                        left: "31px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("lang", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "-4px",
                                                                        left: "95px",
                                                                        width: "145px",
                                                                        height: "40px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag && _vm_.cval;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "caltext"
                                                                        ],
                                                                        style: {
                                                                            width: "145px"
                                                                        },
                                                                        value: function() {
                                                                            return _vm_.cval + "_";
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    },
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "-4px",
                                                                        left: "240px",
                                                                        width: "145px",
                                                                        height: "40px",
                                                                        justifyContent: "flex-end"
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.waitingList;
                                                                        },
                                                                        key: "$idx",
                                                                        value: "$item"
                                                                    }
                                                                }, function($idx, $item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "waiting-keys"
                                                                                ],
                                                                                style: function() {
                                                                                    return __webpack_require__.g.$translateStyle$("color:" + ($idx === _vm_.waitingIndex ? "rgb(13,132,255)" : "white") + ";");
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelectWaiting($idx, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return _vm_.waitingList[$idx];
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                })
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "39px",
                                                                        left: "105px",
                                                                        width: "233px"
                                                                    },
                                                                    show: function() {
                                                                        return "cn" === _vm_.lang && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.cvalList;
                                                                        },
                                                                        key: "$idx",
                                                                        value: "$item"
                                                                    }
                                                                }, function($idx, $item) {
                                                                    return [
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "item",
                                                                                    "column",
                                                                                    "center"
                                                                                ]
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("input", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    show: function() {
                                                                                        return _vm_.resultList.length > $idx;
                                                                                    },
                                                                                    classList: [
                                                                                        "calbtn0"
                                                                                    ],
                                                                                    type: "button",
                                                                                    value: function() {
                                                                                        return _vm_.resultList[$idx];
                                                                                    },
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onRsSelect(_vm_.resultList[$idx], evt);
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ])
                                                                    ];
                                                                })
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "35px",
                                                                        left: "95px",
                                                                        width: "290px",
                                                                        height: "60px",
                                                                        alignContent: "center",
                                                                        alignItems: "center",
                                                                        justifyContent: "center"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag && "en" === _vm_.lang;
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchNum", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/InputMethod/assets/full/123_boardless.png"
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ci__({
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    shown: function() {
                                                                        return "down" === _vm_.downFlag;
                                                                    }
                                                                }
                                                            }, function() {
                                                                return [
                                                                    aiot.__ce__("list", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "list3"
                                                                            ]
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.resultList2;
                                                                                },
                                                                                key: "$idx",
                                                                                value: "itemArray"
                                                                            }
                                                                        }, function($idx, itemArray) {
                                                                            return [
                                                                                aiot.__ce__("list-item", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        type: "waitingRows62full",
                                                                                        classList: [
                                                                                            "item3"
                                                                                        ]
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return itemArray;
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "item"
                                                                                        }
                                                                                    }, function($idx, item) {
                                                                                        return [
                                                                                            aiot.__ce__("div", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "item",
                                                                                                        "column",
                                                                                                        "center"
                                                                                                    ],
                                                                                                    style: {
                                                                                                        height: "52px"
                                                                                                    }
                                                                                                }
                                                                                            }, [
                                                                                                aiot.__ce__("input", {
                                                                                                    __vm__: _vm_,
                                                                                                    __opts__: {
                                                                                                        classList: [
                                                                                                            "calbtn0"
                                                                                                        ],
                                                                                                        type: "button",
                                                                                                        value: function() {
                                                                                                            return item;
                                                                                                        },
                                                                                                        events: {
                                                                                                            click: function(evt) {
                                                                                                                return _vm_.onRsSelect(item, evt);
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }, [])
                                                                                            ])
                                                                                        ];
                                                                                    })
                                                                                ])
                                                                            ];
                                                                        })
                                                                    ])
                                                                ];
                                                            }),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "99px",
                                                                        left: "95px",
                                                                        width: "294px",
                                                                        height: "60px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("select", evt);
                                                                            }
                                                                        },
                                                                        value: "选择"
                                                                    }
                                                                }, []),
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.keys["t9"][0];
                                                                        },
                                                                        key: "$idx",
                                                                        value: "item"
                                                                    }
                                                                }, function($idx, item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtnt9"
                                                                                ],
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect(item, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return item.toUpperCase();
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                })
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "163px",
                                                                        left: "95px",
                                                                        width: "294px",
                                                                        height: "60px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.keys["t9"][1];
                                                                        },
                                                                        key: "$idx",
                                                                        value: "item"
                                                                    }
                                                                }, function($idx, item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtnt9"
                                                                                ],
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect(item, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return item.toUpperCase();
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                })
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "227px",
                                                                        left: "95px",
                                                                        width: "294px",
                                                                        height: "60px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.keys["t9"][2];
                                                                        },
                                                                        key: "$idx",
                                                                        value: "item"
                                                                    }
                                                                }, function($idx, item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtnt9"
                                                                                ],
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect(item, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return item.toUpperCase();
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                })
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "35px",
                                                                        left: "95px",
                                                                        width: "294px",
                                                                        height: "60px"
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("7", evt);
                                                                            }
                                                                        },
                                                                        value: "7"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("8", evt);
                                                                            }
                                                                        },
                                                                        value: "8"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("9", evt);
                                                                            }
                                                                        },
                                                                        value: "9"
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "99px",
                                                                        left: "95px",
                                                                        width: "294px",
                                                                        height: "60px"
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("4", evt);
                                                                            }
                                                                        },
                                                                        value: "4"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("5", evt);
                                                                            }
                                                                        },
                                                                        value: "5"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("6", evt);
                                                                            }
                                                                        },
                                                                        value: "6"
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "163px",
                                                                        left: "95px",
                                                                        width: "294px",
                                                                        height: "60px"
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("1", evt);
                                                                            }
                                                                        },
                                                                        value: "1"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("2", evt);
                                                                            }
                                                                        },
                                                                        value: "2"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("3", evt);
                                                                            }
                                                                        },
                                                                        value: "3"
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "227px",
                                                                        left: "95px",
                                                                        width: "294px",
                                                                        height: "60px"
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("\uFF0C", evt);
                                                                            }
                                                                        },
                                                                        value: "，"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("0", evt);
                                                                            }
                                                                        },
                                                                        value: "0"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("\u3002", evt);
                                                                            }
                                                                        },
                                                                        value: "。"
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/InputMethod/assets/t9/del.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "35px",
                                                                        left: "389px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("D", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/InputMethod/assets/t9/space.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "99px",
                                                                        left: "389px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("space", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "204px",
                                                                        left: "78px"
                                                                    },
                                                                    src: "/InputMethod/assets/full/up.png",
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("down", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "down" === _vm_.downFlag;
                                                                    }
                                                                }
                                                            }, [])
                                                        ])
                                                    ];
                                                })
                                            ])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return "rect" === _vm_.screentype;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    style: {
                                                        width: "100%",
                                                        height: "255px",
                                                        flexDirection: "column"
                                                    }
                                                }
                                            }, [
                                                aiot.__ci__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        shown: function() {
                                                            return "T9" == _vm_.keyboardtype && !_vm_.numFlag;
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "-11px",
                                                                    width: "100%",
                                                                    height: "276px",
                                                                    justifyContent: "center"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        top: "77px",
                                                                        height: "189px",
                                                                        width: "100%",
                                                                        alignItems: "stretch",
                                                                        justifyContent: "space-between",
                                                                        flexDirection: "column",
                                                                        paddingTop: "6px",
                                                                        paddingRight: "3px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "3px"
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "keyboard-rows-rect-t9"
                                                                        ]
                                                                    }
                                                                }, [
                                                                    aiot.__ce__("text", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "calbtnt9",
                                                                                "calbtnt9-rect"
                                                                            ],
                                                                            events: {
                                                                                click: function(evt) {
                                                                                    return _vm_.onSelect("select", evt);
                                                                                }
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__ce__("span", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                value: "选择"
                                                                            }
                                                                        }),
                                                                        aiot.__ci__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                shown: function() {
                                                                                    return 0 != _vm_.waitingList.length;
                                                                                }
                                                                            }
                                                                        }, function() {
                                                                            return [
                                                                                aiot.__ce__("span", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "waiting-keys"
                                                                                        ],
                                                                                        style: {
                                                                                            color: "rgb(13, 132, 255)"
                                                                                        },
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelectWaiting(_vm_.waitingIndex, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return _vm_.waitingList[_vm_.waitingIndex].toUpperCase();
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ]),
                                                                    aiot.__cf__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            exp: function() {
                                                                                return _vm_.keys["t9"][0];
                                                                            },
                                                                            key: "$idx",
                                                                            value: "item"
                                                                        }
                                                                    }, function($idx, item) {
                                                                        return [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "calbtnt9",
                                                                                        "calbtnt9-rect"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect(item, evt);
                                                                                        }
                                                                                    },
                                                                                    value: function() {
                                                                                        return item.toUpperCase();
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ];
                                                                    })
                                                                ]),
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "keyboard-rows-rect-t9"
                                                                        ]
                                                                    }
                                                                }, [
                                                                    aiot.__cf__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            exp: function() {
                                                                                return _vm_.keys["t9"][1];
                                                                            },
                                                                            key: "$idx",
                                                                            value: "item"
                                                                        }
                                                                    }, function($idx, item) {
                                                                        return [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "calbtnt9",
                                                                                        "calbtnt9-rect"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect(item, evt);
                                                                                        }
                                                                                    },
                                                                                    value: function() {
                                                                                        return item.toUpperCase();
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ];
                                                                    })
                                                                ]),
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "keyboard-rows-rect-t9"
                                                                        ]
                                                                    }
                                                                }, [
                                                                    aiot.__cf__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            exp: function() {
                                                                                return _vm_.keys["t9"][2];
                                                                            },
                                                                            key: "$idx",
                                                                            value: "item"
                                                                        }
                                                                    }, function($idx, item) {
                                                                        return [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "calbtnt9",
                                                                                        "calbtnt9-rect"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect(item, evt);
                                                                                        }
                                                                                    },
                                                                                    value: function() {
                                                                                        return item.toUpperCase();
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ];
                                                                    })
                                                                ])
                                                            ])
                                                        ])
                                                    ];
                                                }),
                                                aiot.__ci__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        shown: function() {
                                                            return !("T9" == _vm_.keyboardtype && !_vm_.numFlag);
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "-11px",
                                                                    width: "100%",
                                                                    height: "276px",
                                                                    justifyContent: "center"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("progress", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    percent: function() {
                                                                        return _vm_.percent67;
                                                                    },
                                                                    style: {
                                                                        position: "absolute",
                                                                        bottom: "12px",
                                                                        width: "80px",
                                                                        color: "#ffffff",
                                                                        strokeWidth: "6px",
                                                                        layerColor: "#262626"
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("scroll", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    id: "keyboard67",
                                                                    scrollX: function() {
                                                                        return true;
                                                                    },
                                                                    events: {
                                                                        scroll: function(evt) {
                                                                            return _vm_.handelScroll(evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return !_vm_.numFlag;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    left: "6px",
                                                                                    flexDirection: "column"
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "0px",
                                                                                        marginTop: "0px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["full"][0];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                })
                                                                            ]),
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "32px",
                                                                                        marginTop: "-5px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["full"][1];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                })
                                                                            ]),
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "64px",
                                                                                        marginTop: "-5px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["full"][2];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                }),
                                                                                aiot.__ce__("image", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        src: "/InputMethod/assets/horizontal/space.png",
                                                                                        style: {
                                                                                            width: "60px",
                                                                                            height: "60px"
                                                                                        },
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onBtnClick("space", evt);
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ])
                                                                        ])
                                                                    ];
                                                                }),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return !!_vm_.numFlag;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    left: "6px",
                                                                                    flexDirection: "column"
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "0px",
                                                                                        marginTop: "0px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["sign"][0];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                })
                                                                            ]),
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "32px",
                                                                                        marginTop: "-5px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["sign"][1];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                })
                                                                            ]),
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "64px",
                                                                                        marginTop: "-5px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["sign"][2];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                })
                                                                            ])
                                                                        ])
                                                                    ];
                                                                })
                                                            ])
                                                        ])
                                                    ];
                                                }),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        style: {
                                                            width: "100%",
                                                            flexDirection: "row",
                                                            justifyContent: "center",
                                                            top: "6px",
                                                            paddingTop: "0",
                                                            paddingRight: "6px",
                                                            paddingBottom: "0",
                                                            paddingLeft: "6px"
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return "" === _vm_.downFlag && !_vm_.numFlag && "cn" === _vm_.lang;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/InputMethod/assets/horizontal/cn.png",
                                                                    style: {
                                                                        paddingTop: "6px",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "6px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("lang", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return "cn" === _vm_.lang && !_vm_.numFlag;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        marginLeft: "6px",
                                                                        flex: 1,
                                                                        height: "60px",
                                                                        backgroundColor: "#262626",
                                                                        borderTopColor: "#333333",
                                                                        borderRightColor: "#333333",
                                                                        borderBottomColor: "#333333",
                                                                        borderLeftColor: "#333333",
                                                                        borderTopWidth: "3px",
                                                                        borderRightWidth: "3px",
                                                                        borderBottomWidth: "3px",
                                                                        borderLeftWidth: "3px",
                                                                        borderRadius: "100px",
                                                                        flexDirection: "row",
                                                                        alignItems: "center"
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("scroll", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        id: "cvalWaiting",
                                                                        scrollX: function() {
                                                                            return true;
                                                                        },
                                                                        style: {
                                                                            position: "absolute",
                                                                            width: "85%",
                                                                            height: "42px"
                                                                        }
                                                                    }
                                                                }, [
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                position: "absolute",
                                                                                left: "0px",
                                                                                height: "42px",
                                                                                paddingLeft: "20px",
                                                                                paddingRight: "20px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtn02"
                                                                                ],
                                                                                style: {
                                                                                    paddingRight: "10px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.pushCval(evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return _vm_.cval;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.cvalList;
                                                                                },
                                                                                key: "$idx",
                                                                                value: "$item"
                                                                            }
                                                                        }, function($idx, $item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        show: function() {
                                                                                            return _vm_.resultList.length > $idx;
                                                                                        },
                                                                                        classList: [
                                                                                            "calbtn02"
                                                                                        ],
                                                                                        style: {
                                                                                            paddingRight: "10px"
                                                                                        },
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onRsSelect(_vm_.resultList[$idx], evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return _vm_.resultList[$idx];
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ])
                                                                ]),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return _vm_.resultList.length > 0;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    right: "8px",
                                                                                    width: "60px",
                                                                                    height: "40px"
                                                                                },
                                                                                src: "/InputMethod/assets/horizontal/down2.png",
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("down", evt);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                })
                                                            ])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return "" === _vm_.downFlag && !_vm_.numFlag && "en" === _vm_.lang;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/InputMethod/assets/horizontal/en.png",
                                                                    style: {
                                                                        paddingTop: "6px",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "6px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("lang", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return "" === _vm_.downFlag && _vm_.upperFlag && "en" === _vm_.lang && !_vm_.numFlag;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/InputMethod/assets/horizontal/bigA.png",
                                                                    style: {
                                                                        paddingTop: "6px",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "6px",
                                                                        marginLeft: "6px",
                                                                        width: "94px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchLow", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return "" === _vm_.downFlag && !_vm_.upperFlag && "en" === _vm_.lang && !_vm_.numFlag;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/InputMethod/assets/horizontal/a.png",
                                                                    style: {
                                                                        paddingTop: "6px",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "6px",
                                                                        marginLeft: "6px",
                                                                        width: "94px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchUpper", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return "" === _vm_.downFlag && !_vm_.numFlag && "en" === _vm_.lang;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/InputMethod/assets/horizontal/123.png",
                                                                    style: {
                                                                        marginLeft: "6px",
                                                                        paddingTop: "6px",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "6px",
                                                                        width: "94px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchNum", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return _vm_.numFlag;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/InputMethod/assets/horizontal/back2.png",
                                                                    style: {
                                                                        marginLeft: "6px",
                                                                        paddingTop: "6px",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "6px",
                                                                        width: "159px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchCn", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return !_vm_.numFlag;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/InputMethod/assets/horizontal/del.png",
                                                                    style: {
                                                                        marginLeft: "6px",
                                                                        paddingTop: "6px",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "6px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("D", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return !!_vm_.numFlag;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/InputMethod/assets/horizontal/del2.png",
                                                                    style: {
                                                                        marginLeft: "6px",
                                                                        paddingTop: "6px",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "6px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("D", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    })
                                                ]),
                                                aiot.__ci__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        shown: function() {
                                                            return "down" === _vm_.downFlag;
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                style: {
                                                                    position: "absolute",
                                                                    left: "0px",
                                                                    top: "0px",
                                                                    width: "100%",
                                                                    height: "252px",
                                                                    backgroundColor: "black",
                                                                    justifyContent: "center",
                                                                    flexDirection: "column",
                                                                    alignItems: "center"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "list67"
                                                                    ]
                                                                }
                                                            }, [
                                                                aiot.__ce__("list", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        style: {
                                                                            width: "100%",
                                                                            height: "100%"
                                                                        }
                                                                    }
                                                                }, [
                                                                    aiot.__cf__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            exp: function() {
                                                                                return _vm_.resultList2;
                                                                            },
                                                                            key: "$idx",
                                                                            value: "itemArray"
                                                                        }
                                                                    }, function($idx, itemArray) {
                                                                        return [
                                                                            aiot.__ce__("list-item", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    type: "waitingRows67",
                                                                                    classList: [
                                                                                        "item67"
                                                                                    ]
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return itemArray;
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("div", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "item",
                                                                                                    "column",
                                                                                                    "center"
                                                                                                ]
                                                                                            }
                                                                                        }, [
                                                                                            aiot.__ce__("input", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "calbtn02"
                                                                                                    ],
                                                                                                    type: "button",
                                                                                                    value: function() {
                                                                                                        return item;
                                                                                                    },
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onRsSelect(item, evt);
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ])
                                                                                    ];
                                                                                })
                                                                            ])
                                                                        ];
                                                                    })
                                                                ])
                                                            ]),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        marginTop: "5px"
                                                                    },
                                                                    src: "/InputMethod/assets/horizontal/up2.png",
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("down", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ])
                                                    ];
                                                })
                                            ])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return "pill-shaped" === _vm_.screentype;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    style: {
                                                        width: "100%",
                                                        height: "305px"
                                                    }
                                                }
                                            }, [
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        style: {
                                                            position: "absolute",
                                                            left: "0px",
                                                            top: "34px",
                                                            width: "100%",
                                                            height: "276px"
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("progress", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            percent: function() {
                                                                return 30 + _vm_.percent66;
                                                            },
                                                            type: "arc",
                                                            style: function() {
                                                                return __webpack_require__.g.$translateStyle$("start-angle:204deg;total-angle:-48deg;width:188px;height:188px;top:82px;left:2px;position:absolute;color:#ffffff;stroke-width:6px;layer-color:#262626;margin-left: " + (_vm_.screenWidth - 192) / 2 + "px;");
                                                            }
                                                        }
                                                    }, []),
                                                    aiot.__ce__("scroll", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            id: "keyboard66",
                                                            scrollX: function() {
                                                                return true;
                                                            },
                                                            events: {
                                                                scroll: function(evt) {
                                                                    return _vm_.handelScroll(evt);
                                                                }
                                                            },
                                                            style: function() {
                                                                return __webpack_require__.g.$translateStyle$("padding-left: " + (_vm_.screenWidth - 192) / 2 + "px;padding-right: " + (_vm_.screenWidth - 192) / 2 + "px;");
                                                            }
                                                        }
                                                    }, [
                                                        aiot.__ci__({
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                shown: function() {
                                                                    return !_vm_.numFlag;
                                                                }
                                                            }
                                                        }, function() {
                                                            return [
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        style: {
                                                                            left: "3px",
                                                                            flexDirection: "column"
                                                                        }
                                                                    }
                                                                }, [
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "0px",
                                                                                marginTop: "0px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["full"][0];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ]),
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "32px",
                                                                                marginTop: "-5px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["full"][1];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ]),
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "64px",
                                                                                marginTop: "-5px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["full"][2];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        }),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/InputMethod/assets/arc/space.png",
                                                                                style: {
                                                                                    width: "60px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("space", evt);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ])
                                                                ])
                                                            ];
                                                        }),
                                                        aiot.__ci__({
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                shown: function() {
                                                                    return !!_vm_.numFlag;
                                                                }
                                                            }
                                                        }, function() {
                                                            return [
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        style: {
                                                                            left: "3px",
                                                                            flexDirection: "column"
                                                                        }
                                                                    }
                                                                }, [
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "0px",
                                                                                marginTop: "0px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign"][0];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ]),
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "32px",
                                                                                marginTop: "-5px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign"][1];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ]),
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "64px",
                                                                                marginTop: "-5px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign"][2];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ])
                                                                ])
                                                            ];
                                                        })
                                                    ])
                                                ]),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        style: function() {
                                                            return __webpack_require__.g.$translateStyle$("position: absolute;left: " + (_vm_.screenWidth - 192) / 2 + "px;top: 0px;width: 192px;height: 110px;");
                                                        },
                                                        static: true
                                                    }
                                                }, [
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            style: {
                                                                position: "absolute",
                                                                left: "3px",
                                                                top: "47px",
                                                                width: "186px",
                                                                height: "60px"
                                                            },
                                                            src: "/InputMethod/assets/arc/search.png"
                                                        }
                                                    }, []),
                                                    aiot.__ce__("scroll", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            id: "cvalWaiting",
                                                            scrollX: function() {
                                                                return true;
                                                            },
                                                            style: {
                                                                position: "absolute",
                                                                left: "15px",
                                                                top: "56px",
                                                                width: "144px",
                                                                height: "42px"
                                                            }
                                                        }
                                                    }, [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                style: {
                                                                    position: "absolute",
                                                                    left: "0px",
                                                                    top: "0px",
                                                                    height: "42px",
                                                                    paddingRight: "20px"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("text", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "calbtn02"
                                                                    ],
                                                                    style: {
                                                                        paddingRight: "10px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.pushCval(evt);
                                                                        }
                                                                    },
                                                                    value: function() {
                                                                        return _vm_.cval;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__cf__({
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    exp: function() {
                                                                        return _vm_.cvalList;
                                                                    },
                                                                    key: "$idx",
                                                                    value: "$item"
                                                                }
                                                            }, function($idx, $item) {
                                                                return [
                                                                    aiot.__ce__("text", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            show: function() {
                                                                                return _vm_.resultList.length > $idx;
                                                                            },
                                                                            classList: [
                                                                                "calbtn02"
                                                                            ],
                                                                            style: {
                                                                                paddingRight: "10px"
                                                                            },
                                                                            events: {
                                                                                click: function(evt) {
                                                                                    return _vm_.onRsSelect(_vm_.resultList[$idx], evt);
                                                                                }
                                                                            },
                                                                            value: function() {
                                                                                return _vm_.resultList[$idx];
                                                                            }
                                                                        }
                                                                    }, [])
                                                                ];
                                                            })
                                                        ])
                                                    ]),
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            show: function() {
                                                                return _vm_.resultList.length > 0;
                                                            },
                                                            style: {
                                                                position: "absolute",
                                                                left: "120px",
                                                                top: "57px",
                                                                width: "60px",
                                                                height: "40px"
                                                            },
                                                            src: "/InputMethod/assets/arc/down2.png",
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.onBtnClick("down", evt);
                                                                }
                                                            }
                                                        }
                                                    }, []),
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: function() {
                                                                return "/InputMethod/assets/arc/" + _vm_.lang + ".png";
                                                            },
                                                            style: {
                                                                position: "absolute",
                                                                top: "0px",
                                                                left: "9px",
                                                                width: "48px",
                                                                height: "42px"
                                                            },
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.onBtnClick("lang", evt);
                                                                }
                                                            },
                                                            show: function() {
                                                                return "" === _vm_.downFlag && !_vm_.numFlag;
                                                            }
                                                        }
                                                    }, []),
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/InputMethod/assets/arc/back2.png",
                                                            style: {
                                                                position: "absolute",
                                                                top: "0px",
                                                                left: "9px",
                                                                width: "48px",
                                                                height: "42px"
                                                            },
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.onBtnClick("switchCn", evt);
                                                                }
                                                            },
                                                            show: function() {
                                                                return _vm_.numFlag && "cn" === _vm_.lang;
                                                            }
                                                        }
                                                    }, []),
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/InputMethod/assets/arc/123.png",
                                                            style: {
                                                                position: "absolute",
                                                                left: "70px",
                                                                top: "0px",
                                                                width: "52px",
                                                                height: "42px"
                                                            },
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.onBtnClick("switchNum", evt);
                                                                }
                                                            },
                                                            show: function() {
                                                                return "" === _vm_.downFlag && !_vm_.numFlag && "cn" === _vm_.lang;
                                                            }
                                                        }
                                                    }, []),
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/InputMethod/assets/arc/bigA.png",
                                                            style: {
                                                                position: "absolute",
                                                                top: "0px",
                                                                left: "72px",
                                                                width: "48px",
                                                                height: "42px"
                                                            },
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.onBtnClick("switchLow", evt);
                                                                }
                                                            },
                                                            show: function() {
                                                                return "" === _vm_.downFlag && _vm_.upperFlag && "en" === _vm_.lang;
                                                            }
                                                        }
                                                    }, []),
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/InputMethod/assets/arc/a.png",
                                                            style: {
                                                                position: "absolute",
                                                                top: "0px",
                                                                left: "72px",
                                                                width: "48px",
                                                                height: "42px"
                                                            },
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.onBtnClick("switchUpper", evt);
                                                                }
                                                            },
                                                            show: function() {
                                                                return "" === _vm_.downFlag && !_vm_.upperFlag && "en" === _vm_.lang;
                                                            }
                                                        }
                                                    }, []),
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/InputMethod/assets/arc/del.png",
                                                            style: {
                                                                position: "absolute",
                                                                left: "135px",
                                                                top: "0px",
                                                                width: "48px",
                                                                height: "42px"
                                                            },
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.onBtnClick("D", evt);
                                                                }
                                                            }
                                                        }
                                                    }, [])
                                                ]),
                                                aiot.__ci__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        shown: function() {
                                                            return "down" === _vm_.downFlag;
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "47px",
                                                                    width: "100%",
                                                                    height: "263px",
                                                                    backgroundColor: "black"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: function() {
                                                                        return __webpack_require__.g.$translateStyle$("position: absolute;left: " + (_vm_.screenWidth - 192) / 2 + "px;width: 192px;height: 263px;");
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("list", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "list66"
                                                                        ]
                                                                    }
                                                                }, [
                                                                    aiot.__cf__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            exp: function() {
                                                                                return _vm_.resultList2;
                                                                            },
                                                                            key: "$idx",
                                                                            value: "itemArray"
                                                                        }
                                                                    }, function($idx, itemArray) {
                                                                        return [
                                                                            aiot.__ce__("list-item", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    type: "waitingRows66",
                                                                                    classList: [
                                                                                        "item66"
                                                                                    ]
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return itemArray;
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("div", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "item",
                                                                                                    "column",
                                                                                                    "center"
                                                                                                ]
                                                                                            }
                                                                                        }, [
                                                                                            aiot.__ce__("input", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "calbtn0"
                                                                                                    ],
                                                                                                    type: "button",
                                                                                                    value: function() {
                                                                                                        return item;
                                                                                                    },
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onRsSelect(item, evt);
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ])
                                                                                    ];
                                                                                })
                                                                            ])
                                                                        ];
                                                                    })
                                                                ]),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        style: {
                                                                            position: "absolute",
                                                                            top: "196px",
                                                                            left: "56px",
                                                                            width: "80px",
                                                                            height: "60px"
                                                                        },
                                                                        src: "/InputMethod/assets/arc/up2.png",
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onBtnClick("down", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])
                                                            ])
                                                        ])
                                                    ];
                                                })
                                            ])
                                        ];
                                    })
                                ])
                            ]);
                        };
                        module.exports = function($app_exports$) {
                            $app_script$({}, $app_exports$, $app_require$1);
                            $app_exports$.default.template = $app_template$;
                            $app_exports$.default.style = $app_style$;
                        };
                    },
                    "./src/InputMethod/assets/dic.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.dict = void 0;
                        const dict = exports.dict = {
                            a: "阿啊呵腌嗄吖锕",
                            e: "额阿俄恶鹅遏鄂厄饿峨扼娥鳄哦蛾噩愕讹锷垩婀鹗萼谔莪腭锇颚呃阏屙苊轭",
                            ai: "爱埃艾碍癌哀挨矮隘蔼唉皑哎霭捱暧嫒嗳瑷嗌锿砹",
                            ei: "诶",
                            xi: "系西席息希习吸喜细析戏洗悉锡溪惜稀袭夕洒晰昔牺腊烯熙媳栖膝隙犀蹊硒兮熄曦禧嬉玺奚汐徙羲铣淅嘻歙熹矽蟋郗唏皙隰樨浠忾蜥檄郄翕阋鳃舾屣葸螅咭粞觋欷僖醯鼷裼穸饩舄禊诶菥蓰",
                            yi: "一以已意议义益亿易医艺食依移衣异伊仪宜射遗疑毅谊亦疫役忆抑尾乙译翼蛇溢椅沂泄逸蚁夷邑怡绎彝裔姨熠贻矣屹颐倚诣胰奕翌疙弈轶蛾驿壹猗臆弋铱旖漪迤佚翊诒怿痍懿饴峄揖眙镒仡黟肄咿翳挹缢呓刈咦嶷羿钇殪荑薏蜴镱噫癔苡悒嗌瘗衤佾埸圯舣酏劓",
                            an: "安案按岸暗鞍氨俺胺铵谙庵黯鹌桉埯犴揞厂广",
                            han: "厂汉韩含旱寒汗涵函喊憾罕焊翰邯撼瀚憨捍酣悍鼾邗颔蚶晗菡旰顸犴焓撖",
                            ang: "昂仰盎肮",
                            ao: "奥澳傲熬凹鳌敖遨鏖袄坳翱嗷拗懊岙螯骜獒鏊艹媪廒聱",
                            wa: "瓦挖娃洼袜蛙凹哇佤娲呙腽",
                            yu: "于与育余预域予遇奥语誉玉鱼雨渔裕愈娱欲吁舆宇羽逾豫郁寓吾狱喻御浴愉禹俞邪榆愚渝尉淤虞屿峪粥驭瑜禺毓钰隅芋熨瘀迂煜昱汩於臾盂聿竽萸妪腴圄谕觎揄龉谀俣馀庾妤瘐鬻欤鹬阈嵛雩鹆圉蜮伛纡窬窳饫蓣狳肀舁蝓燠",
                            niu: "牛纽扭钮拗妞忸狃",
                            o: "哦噢喔",
                            ba: "把八巴拔伯吧坝爸霸罢芭跋扒叭靶疤笆耙鲅粑岜灞钯捌菝魃茇",
                            pa: "怕帕爬扒趴琶啪葩耙杷钯筢",
                            pi: "被批副否皮坏辟啤匹披疲罢僻毗坯脾譬劈媲屁琵邳裨痞癖陂丕枇噼霹吡纰砒铍淠郫埤濞睥芘蚍圮鼙罴蜱疋貔仳庀擗甓陴",
                            bi: "比必币笔毕秘避闭佛辟壁弊彼逼碧鼻臂蔽拂泌璧庇痹毙弼匕鄙陛裨贲敝蓖吡篦纰俾铋毖筚荸薜婢哔跸濞秕荜愎睥妣芘箅髀畀滗狴萆嬖襞舭",
                            bai: "百白败摆伯拜柏佰掰呗擘捭稗",
                            bo: "波博播勃拨薄佛伯玻搏柏泊舶剥渤卜驳簿脖膊簸菠礴箔铂亳钵帛擘饽跛钹趵檗啵鹁擗踣",
                            bei: "北被备倍背杯勃贝辈悲碑臂卑悖惫蓓陂钡狈呗焙碚褙庳鞴孛鹎邶鐾",
                            ban: "办版半班般板颁伴搬斑扮拌扳瓣坂阪绊钣瘢舨癍",
                            pan: "判盘番潘攀盼拚畔胖叛拌蹒磐爿蟠泮袢襻丬",
                            bin: "份宾频滨斌彬濒殡缤鬓槟摈膑玢镔豳髌傧",
                            bang: "帮邦彭旁榜棒膀镑绑傍磅蚌谤梆浜蒡",
                            pang: "旁庞乓磅螃彷滂逄耪",
                            beng: "泵崩蚌蹦迸绷甭嘣甏堋",
                            bao: "报保包宝暴胞薄爆炮饱抱堡剥鲍曝葆瀑豹刨褒雹孢苞煲褓趵鸨龅勹",
                            bu: "不部步布补捕堡埔卜埠簿哺怖钚卟瓿逋晡醭钸",
                            pu: "普暴铺浦朴堡葡谱埔扑仆蒲曝瀑溥莆圃璞濮菩蹼匍噗氆攵镨攴镤",
                            mian: "面棉免绵缅勉眠冕娩腼渑湎沔黾宀眄",
                            po: "破繁坡迫颇朴泊婆泼魄粕鄱珀陂叵笸泺皤钋钷",
                            fan: "反范犯繁饭泛翻凡返番贩烦拚帆樊藩矾梵蕃钒幡畈蘩蹯燔",
                            fu: "府服副负富复福夫妇幅付扶父符附腐赴佛浮覆辅傅伏抚赋辐腹弗肤阜袱缚甫氟斧孚敷俯拂俘咐腑孵芙涪釜脯茯馥宓绂讣呋罘麸蝠匐芾蜉跗凫滏蝮驸绋蚨砩桴赙菔呒趺苻拊阝鲋怫稃郛莩幞祓艴黻黼鳆",
                            ben: "本体奔苯笨夯贲锛畚坌",
                            feng: "风丰封峰奉凤锋冯逢缝蜂枫疯讽烽俸沣酆砜葑唪",
                            bian: "变便边编遍辩鞭辨贬匾扁卞汴辫砭苄蝙鳊弁窆笾煸褊碥忭缏",
                            pian: "便片篇偏骗翩扁骈胼蹁谝犏缏",
                            zhen: "镇真针圳振震珍阵诊填侦臻贞枕桢赈祯帧甄斟缜箴疹砧榛鸩轸稹溱蓁胗椹朕畛浈",
                            biao: "表标彪镖裱飚膘飙镳婊骠飑杓髟鳔灬瘭",
                            piao: "票朴漂飘嫖瓢剽缥殍瞟骠嘌莩螵",
                            huo: "和活或货获火伙惑霍祸豁嚯藿锪蠖钬耠镬夥灬劐攉",
                            bie: "别鳖憋瘪蹩",
                            min: "民敏闽闵皿泯岷悯珉抿黾缗玟愍苠鳘",
                            fen: "分份纷奋粉氛芬愤粪坟汾焚酚吩忿棼玢鼢瀵偾鲼",
                            bing: "并病兵冰屏饼炳秉丙摒柄槟禀枋邴冫",
                            geng: "更耕颈庚耿梗埂羹哽赓绠鲠",
                            fang: "方放房防访纺芳仿坊妨肪邡舫彷枋鲂匚钫",
                            xian: "现先县见线限显险献鲜洗宪纤陷闲贤仙衔掀咸嫌掺羡弦腺痫娴舷馅酰铣冼涎暹籼锨苋蚬跹岘藓燹鹇氙莶霰跣猃彡祆筅",
                            fou: "不否缶",
                            ca: "拆擦嚓礤",
                            cha: "查察差茶插叉刹茬楂岔诧碴嚓喳姹杈汊衩搽槎镲苴檫馇锸猹",
                            cai: "才采财材菜彩裁蔡猜踩睬",
                            can: "参残餐灿惨蚕掺璨惭粲孱骖黪",
                            shen: "信深参身神什审申甚沈伸慎渗肾绅莘呻婶娠砷蜃哂椹葚吲糁渖诜谂矧胂",
                            cen: "参岑涔",
                            san: "三参散伞叁糁馓毵",
                            cang: "藏仓苍沧舱臧伧",
                            zang: "藏脏葬赃臧奘驵",
                            chen: "称陈沈沉晨琛臣尘辰衬趁忱郴宸谌碜嗔抻榇伧谶龀肜",
                            cao: "草操曹槽糙嘈漕螬艚屮",
                            ce: "策测册侧厕栅恻",
                            ze: "责则泽择侧咋啧仄箦赜笮舴昃迮帻",
                            zhai: "债择齐宅寨侧摘窄斋祭翟砦瘵哜",
                            dao: "到道导岛倒刀盗稻蹈悼捣叨祷焘氘纛刂帱忉",
                            ceng: "层曾蹭噌",
                            zha: "查扎炸诈闸渣咋乍榨楂札栅眨咤柞喳喋铡蚱吒怍砟揸痄哳齄",
                            chai: "差拆柴钗豺侪虿瘥",
                            ci: "次此差词辞刺瓷磁兹慈茨赐祠伺雌疵鹚糍呲粢",
                            zi: "资自子字齐咨滋仔姿紫兹孜淄籽梓鲻渍姊吱秭恣甾孳訾滓锱辎趑龇赀眦缁呲笫谘嵫髭茈粢觜耔",
                            cuo: "措错磋挫搓撮蹉锉厝嵯痤矬瘥脞鹾",
                            chan: "产单阐崭缠掺禅颤铲蝉搀潺蟾馋忏婵孱觇廛谄谗澶骣羼躔蒇冁",
                            shan: "山单善陕闪衫擅汕扇掺珊禅删膳缮赡鄯栅煽姗跚鳝嬗潸讪舢苫疝掸膻钐剡蟮芟埏彡骟",
                            zhan: "展战占站崭粘湛沾瞻颤詹斩盏辗绽毡栈蘸旃谵搌",
                            xin: "新心信辛欣薪馨鑫芯锌忻莘昕衅歆囟忄镡",
                            lian: "联连练廉炼脸莲恋链帘怜涟敛琏镰濂楝鲢殓潋裢裣臁奁莶蠊蔹",
                            chang: "场长厂常偿昌唱畅倡尝肠敞倘猖娼淌裳徜昶怅嫦菖鲳阊伥苌氅惝鬯",
                            zhang: "长张章障涨掌帐胀彰丈仗漳樟账杖璋嶂仉瘴蟑獐幛鄣嫜",
                            chao: "超朝潮炒钞抄巢吵剿绰嘲晁焯耖怊",
                            zhao: "着照招找召朝赵兆昭肇罩钊沼嘲爪诏濯啁棹笊",
                            zhou: "调州周洲舟骤轴昼宙粥皱肘咒帚胄绉纣妯啁诌繇碡籀酎荮",
                            che: "车彻撤尺扯澈掣坼砗屮",
                            ju: "车局据具举且居剧巨聚渠距句拒俱柜菊拘炬桔惧矩鞠驹锯踞咀瞿枸掬沮莒橘飓疽钜趄踽遽琚龃椐苣裾榘狙倨榉苴讵雎锔窭鞫犋屦醵",
                            cheng: "成程城承称盛抢乘诚呈净惩撑澄秤橙骋逞瞠丞晟铛埕塍蛏柽铖酲裎枨",
                            rong: "容荣融绒溶蓉熔戎榕茸冗嵘肜狨蝾",
                            sheng: "生声升胜盛乘圣剩牲甸省绳笙甥嵊晟渑眚",
                            deng: "等登邓灯澄凳瞪蹬噔磴嶝镫簦戥",
                            zhi: "制之治质职只志至指织支值知识直致执置止植纸拓智殖秩旨址滞氏枝芝脂帜汁肢挚稚酯掷峙炙栉侄芷窒咫吱趾痔蜘郅桎雉祉郦陟痣蛭帙枳踯徵胝栀贽祗豸鸷摭轵卮轾彘觯絷跖埴夂黹忮骘膣踬",
                            zheng: "政正证争整征郑丁症挣蒸睁铮筝拯峥怔诤狰徵钲",
                            tang: "堂唐糖汤塘躺趟倘棠烫淌膛搪镗傥螳溏帑羰樘醣螗耥铴瑭",
                            chi: "持吃池迟赤驰尺斥齿翅匙痴耻炽侈弛叱啻坻眙嗤墀哧茌豉敕笞饬踟蚩柢媸魑篪褫彳鸱螭瘛眵傺",
                            shi: "是时实事市十使世施式势视识师史示石食始士失适试什泽室似诗饰殖释驶氏硕逝湿蚀狮誓拾尸匙仕柿矢峙侍噬嗜栅拭嘘屎恃轼虱耆舐莳铈谥炻豕鲥饣螫酾筮埘弑礻蓍鲺贳",
                            qi: "企其起期气七器汽奇齐启旗棋妻弃揭枝歧欺骑契迄亟漆戚岂稽岐琦栖缉琪泣乞砌祁崎绮祺祈凄淇杞脐麒圻憩芪伎俟畦耆葺沏萋骐鳍綦讫蕲屺颀亓碛柒啐汔綮萁嘁蛴槭欹芑桤丌蜞",
                            chuai: "揣踹啜搋膪",
                            tuo: "托脱拓拖妥驼陀沱鸵驮唾椭坨佗砣跎庹柁橐乇铊沲酡鼍箨柝",
                            duo: "多度夺朵躲铎隋咄堕舵垛惰哆踱跺掇剁柁缍沲裰哚隳",
                            xue: "学血雪削薛穴靴谑噱鳕踅泶彐",
                            chong: "重种充冲涌崇虫宠忡憧舂茺铳艟",
                            chou: "筹抽绸酬愁丑臭仇畴稠瞅踌惆俦瘳雠帱",
                            qiu: "求球秋丘邱仇酋裘龟囚遒鳅虬蚯泅楸湫犰逑巯艽俅蝤赇鼽糗",
                            xiu: "修秀休宿袖绣臭朽锈羞嗅岫溴庥馐咻髹鸺貅",
                            chu: "出处础初助除储畜触楚厨雏矗橱锄滁躇怵绌搐刍蜍黜杵蹰亍樗憷楮",
                            tuan: "团揣湍疃抟彖",
                            zhui: "追坠缀揣椎锥赘惴隹骓缒",
                            chuan: "传川船穿串喘椽舛钏遄氚巛舡",
                            zhuan: "专转传赚砖撰篆馔啭颛",
                            yuan: "元员院原源远愿园援圆缘袁怨渊苑宛冤媛猿垣沅塬垸鸳辕鸢瑗圜爰芫鼋橼螈眢箢掾",
                            cuan: "窜攒篡蹿撺爨汆镩",
                            chuang: "创床窗闯幢疮怆",
                            zhuang: "装状庄壮撞妆幢桩奘僮戆",
                            chui: "吹垂锤炊椎陲槌捶棰",
                            chun: "春纯醇淳唇椿蠢鹑朐莼肫蝽",
                            zhun: "准屯淳谆肫窀",
                            cu: "促趋趣粗簇醋卒蹴猝蹙蔟殂徂",
                            dun: "吨顿盾敦蹲墩囤沌钝炖盹遁趸砘礅",
                            qu: "区去取曲趋渠趣驱屈躯衢娶祛瞿岖龋觑朐蛐癯蛆苣阒诎劬蕖蘧氍黢蠼璩麴鸲磲",
                            xu: "需许续须序徐休蓄畜虚吁绪叙旭邪恤墟栩絮圩婿戌胥嘘浒煦酗诩朐盱蓿溆洫顼勖糈砉醑",
                            chuo: "辍绰戳淖啜龊踔辶",
                            zu: "组族足祖租阻卒俎诅镞菹",
                            ji: "济机其技基记计系期际及集级几给积极己纪即继击既激绩急奇吉季齐疾迹鸡剂辑籍寄挤圾冀亟寂暨脊跻肌稽忌饥祭缉棘矶汲畸姬藉瘠骥羁妓讥稷蓟悸嫉岌叽伎鲫诘楫荠戟箕霁嵇觊麂畿玑笈犄芨唧屐髻戢佶偈笄跽蒺乩咭赍嵴虮掎齑殛鲚剞洎丌墼蕺彐芰哜",
                            cong: "从丛匆聪葱囱琮淙枞骢苁璁",
                            zong: "总从综宗纵踪棕粽鬃偬枞腙",
                            cou: "凑辏腠楱",
                            cui: "衰催崔脆翠萃粹摧璀瘁悴淬啐隹毳榱",
                            wei: "为位委未维卫围违威伟危味微唯谓伪慰尾魏韦胃畏帷喂巍萎蔚纬潍尉渭惟薇苇炜圩娓诿玮崴桅偎逶倭猥囗葳隗痿猬涠嵬韪煨艉隹帏闱洧沩隈鲔軎",
                            cun: "村存寸忖皴",
                            zuo: "作做座左坐昨佐琢撮祚柞唑嘬酢怍笮阼胙",
                            zuan: "钻纂攥缵躜",
                            da: "大达打答搭沓瘩惮嗒哒耷鞑靼褡笪怛妲",
                            dai: "大代带待贷毒戴袋歹呆隶逮岱傣棣怠殆黛甙埭诒绐玳呔迨",
                            tai: "大台太态泰抬胎汰钛苔薹肽跆邰鲐酞骀炱",
                            ta: "他它她拓塔踏塌榻沓漯獭嗒挞蹋趿遢铊鳎溻闼",
                            dan: "但单石担丹胆旦弹蛋淡诞氮郸耽殚惮儋眈疸澹掸膻啖箪聃萏瘅赕",
                            lu: "路六陆录绿露鲁卢炉鹿禄赂芦庐碌麓颅泸卤潞鹭辘虏璐漉噜戮鲈掳橹轳逯渌蓼撸鸬栌氇胪镥簏舻辂垆",
                            tan: "谈探坦摊弹炭坛滩贪叹谭潭碳毯瘫檀痰袒坍覃忐昙郯澹钽锬",
                            ren: "人任认仁忍韧刃纫饪妊荏稔壬仞轫亻衽",
                            jie: "家结解价界接节她届介阶街借杰洁截姐揭捷劫戒皆竭桔诫楷秸睫藉拮芥诘碣嗟颉蚧孑婕疖桀讦疥偈羯袷哜喈卩鲒骱",
                            yan: "研严验演言眼烟沿延盐炎燕岩宴艳颜殷彦掩淹阎衍铅雁咽厌焰堰砚唁焉晏檐蜒奄俨腌妍谚兖筵焱偃闫嫣鄢湮赝胭琰滟阉魇酽郾恹崦芫剡鼹菸餍埏谳讠厣罨",
                            dang: "当党档荡挡宕砀铛裆凼菪谠",
                            tao: "套讨跳陶涛逃桃萄淘掏滔韬叨洮啕绦饕鼗",
                            tiao: "条调挑跳迢眺苕窕笤佻啁粜髫铫祧龆蜩鲦",
                            te: "特忑忒铽慝",
                            de: "的地得德底锝",
                            dei: "得",
                            di: "的地第提低底抵弟迪递帝敌堤蒂缔滴涤翟娣笛棣荻谛狄邸嘀砥坻诋嫡镝碲骶氐柢籴羝睇觌",
                            ti: "体提题弟替梯踢惕剔蹄棣啼屉剃涕锑倜悌逖嚏荑醍绨鹈缇裼",
                            tui: "推退弟腿褪颓蜕忒煺",
                            you: "有由又优游油友右邮尤忧幼犹诱悠幽佑釉柚铀鱿囿酉攸黝莠猷蝣疣呦蚴莸莜铕宥繇卣牖鼬尢蚰侑",
                            dian: "电点店典奠甸碘淀殿垫颠滇癫巅惦掂癜玷佃踮靛钿簟坫阽",
                            tian: "天田添填甜甸恬腆佃舔钿阗忝殄畋栝掭",
                            zhu: "主术住注助属逐宁著筑驻朱珠祝猪诸柱竹铸株瞩嘱贮煮烛苎褚蛛拄铢洙竺蛀渚伫杼侏澍诛茱箸炷躅翥潴邾槠舳橥丶瘃麈疰",
                            nian: "年念酿辗碾廿捻撵拈蔫鲶埝鲇辇黏",
                            diao: "调掉雕吊钓刁貂凋碉鲷叼铫铞",
                            yao: "要么约药邀摇耀腰遥姚窑瑶咬尧钥谣肴夭侥吆疟妖幺杳舀窕窈曜鹞爻繇徭轺铫鳐崾珧",
                            die: "跌叠蝶迭碟爹谍牒耋佚喋堞瓞鲽垤揲蹀",
                            she: "设社摄涉射折舍蛇拾舌奢慑赦赊佘麝歙畲厍猞揲滠",
                            ye: "业也夜叶射野液冶喝页爷耶邪咽椰烨掖拽曳晔谒腋噎揶靥邺铘揲",
                            xie: "些解协写血叶谢械鞋胁斜携懈契卸谐泄蟹邪歇泻屑挟燮榭蝎撷偕亵楔颉缬邂鲑瀣勰榍薤绁渫廨獬躞",
                            zhe: "这者着著浙折哲蔗遮辙辄柘锗褶蜇蛰鹧谪赭摺乇磔螫",
                            ding: "定订顶丁鼎盯钉锭叮仃铤町酊啶碇腚疔玎耵",
                            diu: "丢铥",
                            ting: "听庭停厅廷挺亭艇婷汀铤烃霆町蜓葶梃莛",
                            dong: "动东董冬洞懂冻栋侗咚峒氡恫胴硐垌鸫岽胨",
                            tong: "同通统童痛铜桶桐筒彤侗佟潼捅酮砼瞳恸峒仝嗵僮垌茼",
                            zhong: "中重种众终钟忠仲衷肿踵冢盅蚣忪锺舯螽夂",
                            dou: "都斗读豆抖兜陡逗窦渎蚪痘蔸钭篼",
                            du: "度都独督读毒渡杜堵赌睹肚镀渎笃竺嘟犊妒牍蠹椟黩芏髑",
                            duan: "断段短端锻缎煅椴簖",
                            dui: "对队追敦兑堆碓镦怼憝",
                            rui: "瑞兑锐睿芮蕊蕤蚋枘",
                            yue: "月说约越乐跃兑阅岳粤悦曰钥栎钺樾瀹龠哕刖",
                            tun: "吞屯囤褪豚臀饨暾氽",
                            hui: "会回挥汇惠辉恢徽绘毁慧灰贿卉悔秽溃荟晖彗讳诲珲堕诙蕙晦睢麾烩茴喙桧蛔洄浍虺恚蟪咴隳缋哕",
                            wu: "务物无五武午吴舞伍污乌误亡恶屋晤悟吾雾芜梧勿巫侮坞毋诬呜钨邬捂鹜兀婺妩於戊鹉浯蜈唔骛仵焐芴鋈庑鼯牾怃圬忤痦迕杌寤阢",
                            ya: "亚压雅牙押鸭呀轧涯崖邪芽哑讶鸦娅衙丫蚜碣垭伢氩桠琊揠吖睚痖疋迓岈砑",
                            he: "和合河何核盖贺喝赫荷盒鹤吓呵苛禾菏壑褐涸阂阖劾诃颌嗬貉曷翮纥盍",
                            wo: "我握窝沃卧挝涡斡渥幄蜗喔倭莴龌肟硪",
                            en: "恩摁蒽",
                            n: "嗯唔",
                            er: "而二尔儿耳迩饵洱贰铒珥佴鸸鲕",
                            fa: "发法罚乏伐阀筏砝垡珐",
                            quan: "全权券泉圈拳劝犬铨痊诠荃醛蜷颧绻犭筌鬈悛辁畎",
                            fei: "费非飞肥废菲肺啡沸匪斐蜚妃诽扉翡霏吠绯腓痱芾淝悱狒榧砩鲱篚镄",
                            pei: "配培坏赔佩陪沛裴胚妃霈淠旆帔呸醅辔锫",
                            ping: "平评凭瓶冯屏萍苹乒坪枰娉俜鲆",
                            fo: "佛",
                            hu: "和护许户核湖互乎呼胡戏忽虎沪糊壶葫狐蝴弧瑚浒鹄琥扈唬滹惚祜囫斛笏芴醐猢怙唿戽槲觳煳鹕冱瓠虍岵鹱烀轷",
                            ga: "夹咖嘎尬噶旮伽尕钆尜",
                            ge: "个合各革格歌哥盖隔割阁戈葛鸽搁胳舸疙铬骼蛤咯圪镉颌仡硌嗝鬲膈纥袼搿塥哿虼",
                            ha: "哈蛤铪",
                            xia: "下夏峡厦辖霞夹虾狭吓侠暇遐瞎匣瑕唬呷黠硖罅狎瘕柙",
                            gai: "改该盖概溉钙丐芥赅垓陔戤",
                            hai: "海还害孩亥咳骸骇氦嗨胲醢",
                            gan: "干感赶敢甘肝杆赣乾柑尴竿秆橄矸淦苷擀酐绀泔坩旰疳澉",
                            gang: "港钢刚岗纲冈杠缸扛肛罡戆筻",
                            jiang: "将强江港奖讲降疆蒋姜浆匠酱僵桨绛缰犟豇礓洚茳糨耩",
                            hang: "行航杭巷夯吭桁沆绗颃",
                            gong: "工公共供功红贡攻宫巩龚恭拱躬弓汞蚣珙觥肱廾",
                            hong: "红宏洪轰虹鸿弘哄烘泓訇蕻闳讧荭黉薨",
                            guang: "广光逛潢犷胱咣桄",
                            qiong: "穷琼穹邛茕筇跫蛩銎",
                            gao: "高告搞稿膏糕镐皋羔锆杲郜睾诰藁篙缟槁槔",
                            hao: "好号毫豪耗浩郝皓昊皋蒿壕灏嚎濠蚝貉颢嗥薅嚆",
                            li: "理力利立里李历例离励礼丽黎璃厉厘粒莉梨隶栗荔沥犁漓哩狸藜罹篱鲤砺吏澧俐骊溧砾莅锂笠蠡蛎痢雳俪傈醴栎郦俚枥喱逦娌鹂戾砬唳坜疠蜊黧猁鬲粝蓠呖跞疬缡鲡鳢嫠詈悝苈篥轹",
                            jia: "家加价假佳架甲嘉贾驾嫁夹稼钾挟拮迦伽颊浃枷戛荚痂颉镓笳珈岬胛袈郏葭袷瘕铗跏蛱恝哿",
                            luo: "落罗络洛逻螺锣骆萝裸漯烙摞骡咯箩珞捋荦硌雒椤镙跞瘰泺脶猡倮蠃",
                            ke: "可科克客刻课颗渴壳柯棵呵坷恪苛咳磕珂稞瞌溘轲窠嗑疴蝌岢铪颏髁蚵缂氪骒钶锞",
                            qia: "卡恰洽掐髂袷咭葜",
                            gei: "给",
                            gen: "根跟亘艮哏茛",
                            hen: "很狠恨痕哏",
                            gou: "构购够句沟狗钩拘勾苟垢枸篝佝媾诟岣彀缑笱鞲觏遘",
                            kou: "口扣寇叩抠佝蔻芤眍筘",
                            gu: "股古顾故固鼓骨估谷贾姑孤雇辜菇沽咕呱锢钴箍汩梏痼崮轱鸪牯蛊诂毂鹘菰罟嘏臌觚瞽蛄酤牿鲴",
                            pai: "牌排派拍迫徘湃俳哌蒎",
                            gua: "括挂瓜刮寡卦呱褂剐胍诖鸹栝呙",
                            tou: "投头透偷愉骰亠",
                            guai: "怪拐乖",
                            kuai: "会快块筷脍蒯侩浍郐蒉狯哙",
                            guan: "关管观馆官贯冠惯灌罐莞纶棺斡矜倌鹳鳏盥掼涫",
                            wan: "万完晚湾玩碗顽挽弯蔓丸莞皖宛婉腕蜿惋烷琬畹豌剜纨绾脘菀芄箢",
                            ne: "呢哪呐讷疒",
                            gui: "规贵归轨桂柜圭鬼硅瑰跪龟匮闺诡癸鳜桧皈鲑刽晷傀眭妫炅庋簋刿宄匦",
                            jun: "军均俊君峻菌竣钧骏龟浚隽郡筠皲麇捃",
                            jiong: "窘炯迥炅冂扃",
                            jue: "决绝角觉掘崛诀獗抉爵嚼倔厥蕨攫珏矍蹶谲镢鳜噱桷噘撅橛孓觖劂爝",
                            gun: "滚棍辊衮磙鲧绲丨",
                            hun: "婚混魂浑昏棍珲荤馄诨溷阍",
                            guo: "国过果郭锅裹帼涡椁囗蝈虢聒埚掴猓崞蜾呙馘",
                            hei: "黑嘿嗨",
                            kan: "看刊勘堪坎砍侃嵌槛瞰阚龛戡凵莰",
                            heng: "衡横恒亨哼珩桁蘅",
                            mo: "万没么模末冒莫摩墨默磨摸漠脉膜魔沫陌抹寞蘑摹蓦馍茉嘿谟秣蟆貉嫫镆殁耱嬷麽瘼貊貘",
                            peng: "鹏朋彭膨蓬碰苹棚捧亨烹篷澎抨硼怦砰嘭蟛堋",
                            hou: "后候厚侯猴喉吼逅篌糇骺後鲎瘊堠",
                            hua: "化华划话花画滑哗豁骅桦猾铧砉",
                            huai: "怀坏淮徊槐踝",
                            huan: "还环换欢患缓唤焕幻痪桓寰涣宦垸洹浣豢奂郇圜獾鲩鬟萑逭漶锾缳擐",
                            xun: "讯训迅孙寻询循旬巡汛勋逊熏徇浚殉驯鲟薰荀浔洵峋埙巽郇醺恂荨窨蕈曛獯",
                            huang: "黄荒煌皇凰慌晃潢谎惶簧璜恍幌湟蝗磺隍徨遑肓篁鳇蟥癀",
                            nai: "能乃奶耐奈鼐萘氖柰佴艿",
                            luan: "乱卵滦峦鸾栾銮挛孪脔娈",
                            qie: "切且契窃茄砌锲怯伽惬妾趄挈郄箧慊",
                            jian: "建间件见坚检健监减简艰践兼鉴键渐柬剑尖肩舰荐箭浅剪俭碱茧奸歼拣捡煎贱溅槛涧堑笺谏饯锏缄睑謇蹇腱菅翦戬毽笕犍硷鞯牮枧湔鲣囝裥踺搛缣鹣蒹谫僭戋趼楗",
                            nan: "南难男楠喃囡赧腩囝蝻",
                            qian: "前千钱签潜迁欠纤牵浅遣谦乾铅歉黔谴嵌倩钳茜虔堑钎骞阡掮钤扦芊犍荨仟芡悭缱佥愆褰凵肷岍搴箝慊椠",
                            qiang: "强抢疆墙枪腔锵呛羌蔷襁羟跄樯戕嫱戗炝镪锖蜣",
                            xiang: "向项相想乡象响香降像享箱羊祥湘详橡巷翔襄厢镶飨饷缃骧芗庠鲞葙蟓",
                            jiao: "教交较校角觉叫脚缴胶轿郊焦骄浇椒礁佼蕉娇矫搅绞酵剿嚼饺窖跤蛟侥狡姣皎茭峤铰醮鲛湫徼鹪僬噍艽挢敫",
                            zhuo: "着著缴桌卓捉琢灼浊酌拙茁涿镯淖啄濯焯倬擢斫棹诼浞禚",
                            qiao: "桥乔侨巧悄敲俏壳雀瞧翘窍峭锹撬荞跷樵憔鞘橇峤诮谯愀鞒硗劁缲",
                            xiao: "小效销消校晓笑肖削孝萧俏潇硝宵啸嚣霄淆哮筱逍姣箫骁枭哓绡蛸崤枵魈",
                            si: "司四思斯食私死似丝饲寺肆撕泗伺嗣祀厮驷嘶锶俟巳蛳咝耜笥纟糸鸶缌澌姒汜厶兕",
                            kai: "开凯慨岂楷恺揩锴铠忾垲剀锎蒈",
                            jin: "进金今近仅紧尽津斤禁锦劲晋谨筋巾浸襟靳瑾烬缙钅矜觐堇馑荩噤廑妗槿赆衿卺",
                            qin: "亲勤侵秦钦琴禽芹沁寝擒覃噙矜嗪揿溱芩衾廑锓吣檎螓",
                            jing: "经京精境竞景警竟井惊径静劲敬净镜睛晶颈荆兢靖泾憬鲸茎腈菁胫阱旌粳靓痉箐儆迳婧肼刭弪獍",
                            ying: "应营影英景迎映硬盈赢颖婴鹰荧莹樱瑛蝇萦莺颍膺缨瀛楹罂荥萤鹦滢蓥郢茔嘤璎嬴瘿媵撄潆",
                            jiu: "就究九酒久救旧纠舅灸疚揪咎韭玖臼柩赳鸠鹫厩啾阄桕僦鬏",
                            zui: "最罪嘴醉咀蕞觜",
                            juan: "卷捐圈眷娟倦绢隽镌涓鹃鄄蠲狷锩桊",
                            suan: "算酸蒜狻",
                            yun: "员运云允孕蕴韵酝耘晕匀芸陨纭郧筠恽韫郓氲殒愠昀菀狁",
                            qun: "群裙逡麇",
                            ka: "卡喀咖咔咯佧胩",
                            kang: "康抗扛慷炕亢糠伉钪闶",
                            keng: "坑铿吭",
                            kao: "考靠烤拷铐栲尻犒",
                            ken: "肯垦恳啃龈裉",
                            yin: "因引银印音饮阴隐姻殷淫尹荫吟瘾寅茵圻垠鄞湮蚓氤胤龈窨喑铟洇狺夤廴吲霪茚堙",
                            kong: "空控孔恐倥崆箜",
                            ku: "苦库哭酷裤枯窟挎骷堀绔刳喾",
                            kua: "跨夸垮挎胯侉",
                            kui: "亏奎愧魁馈溃匮葵窥盔逵睽馗聩喟夔篑岿喹揆隗傀暌跬蒉愦悝蝰",
                            kuan: "款宽髋",
                            kuang: "况矿框狂旷眶匡筐邝圹哐贶夼诳诓纩",
                            que: "确却缺雀鹊阙瘸榷炔阕悫",
                            kun: "困昆坤捆琨锟鲲醌髡悃阃",
                            kuo: "扩括阔廓蛞",
                            la: "拉落垃腊啦辣蜡喇剌旯砬邋瘌",
                            lai: "来莱赖睐徕籁涞赉濑癞崃疠铼",
                            lan: "兰览蓝篮栏岚烂滥缆揽澜拦懒榄斓婪阑褴罱啉谰镧漤",
                            lin: "林临邻赁琳磷淋麟霖鳞凛拎遴蔺吝粼嶙躏廪檩啉辚膦瞵懔",
                            lang: "浪朗郎廊狼琅榔螂阆锒莨啷蒗稂",
                            liang: "量两粮良辆亮梁凉谅粱晾靓踉莨椋魉墚",
                            lao: "老劳落络牢捞涝烙姥佬崂唠酪潦痨醪铑铹栳耢",
                            mu: "目模木亩幕母牧莫穆姆墓慕牟牡募睦缪沐暮拇姥钼苜仫毪坶",
                            le: "了乐勒肋叻鳓嘞仂泐",
                            lei: "类累雷勒泪蕾垒磊擂镭肋羸耒儡嫘缧酹嘞诔檑",
                            sui: "随岁虽碎尿隧遂髓穗绥隋邃睢祟濉燧谇眭荽",
                            lie: "列烈劣裂猎冽咧趔洌鬣埒捩躐",
                            leng: "冷愣棱楞塄",
                            ling: "领令另零灵龄陵岭凌玲铃菱棱伶羚苓聆翎泠瓴囹绫呤棂蛉酃鲮柃",
                            lia: "俩",
                            liao: "了料疗辽廖聊寥缪僚燎缭撂撩嘹潦镣寮蓼獠钌尥鹩",
                            liu: "流刘六留柳瘤硫溜碌浏榴琉馏遛鎏骝绺镏旒熘鹨锍",
                            lun: "论轮伦仑纶沦抡囵",
                            lv: "率律旅绿虑履吕铝屡氯缕滤侣驴榈闾偻褛捋膂稆",
                            lou: "楼露漏陋娄搂篓喽镂偻瘘髅耧蝼嵝蒌",
                            mao: "贸毛矛冒貌茂茅帽猫髦锚懋袤牦卯铆耄峁瑁蟊茆蝥旄泖昴瞀",
                            long: "龙隆弄垄笼拢聋陇胧珑窿茏咙砻垅泷栊癃",
                            nong: "农浓弄脓侬哝",
                            shuang: "双爽霜孀泷",
                            shu: "术书数属树输束述署朱熟殊蔬舒疏鼠淑叔暑枢墅俞曙抒竖蜀薯梳戍恕孰沭赎庶漱塾倏澍纾姝菽黍腧秫毹殳疋摅",
                            shuai: "率衰帅摔甩蟀",
                            lve: "略掠锊",
                            ma: "么马吗摩麻码妈玛嘛骂抹蚂唛蟆犸杩",
                            me: "么麽",
                            mai: "买卖麦迈脉埋霾荬劢",
                            man: "满慢曼漫埋蔓瞒蛮鳗馒幔谩螨熳缦镘颟墁鞔",
                            mi: "米密秘迷弥蜜谜觅靡泌眯麋猕谧咪糜宓汨醚嘧弭脒冖幂祢縻蘼芈糸敉",
                            men: "们门闷瞒汶扪焖懑鞔钔",
                            mang: "忙盲茫芒氓莽蟒邙硭漭",
                            meng: "蒙盟梦猛孟萌氓朦锰檬勐懵蟒蜢虻黾蠓艨甍艋瞢礞",
                            miao: "苗秒妙描庙瞄缪渺淼藐缈邈鹋杪眇喵",
                            mou: "某谋牟缪眸哞鍪蛑侔厶",
                            miu: "缪谬",
                            mei: "美没每煤梅媒枚妹眉魅霉昧媚玫酶镁湄寐莓袂楣糜嵋镅浼猸鹛",
                            wen: "文问闻稳温纹吻蚊雯紊瘟汶韫刎璺玟阌",
                            mie: "灭蔑篾乜咩蠛",
                            ming: "明名命鸣铭冥茗溟酩瞑螟暝",
                            na: "内南那纳拿哪娜钠呐捺衲镎肭",
                            nei: "内那哪馁",
                            nuo: "难诺挪娜糯懦傩喏搦锘",
                            ruo: "若弱偌箬",
                            nang: "囊馕囔曩攮",
                            nao: "脑闹恼挠瑙淖孬垴铙桡呶硇猱蛲",
                            ni: "你尼呢泥疑拟逆倪妮腻匿霓溺旎昵坭铌鲵伲怩睨猊",
                            nen: "嫩恁",
                            neng: "能",
                            nin: "您恁",
                            niao: "鸟尿溺袅脲茑嬲",
                            nie: "摄聂捏涅镍孽捻蘖啮蹑嗫臬镊颞乜陧",
                            niang: "娘酿",
                            ning: "宁凝拧泞柠咛狞佞聍甯",
                            nu: "努怒奴弩驽帑孥胬",
                            nv: "女钕衄恧",
                            ru: "入如女乳儒辱汝茹褥孺濡蠕嚅缛溽铷洳薷襦颥蓐",
                            nuan: "暖",
                            nve: "虐疟",
                            re: "热若惹喏",
                            ou: "区欧偶殴呕禺藕讴鸥瓯沤耦怄",
                            pao: "跑炮泡抛刨袍咆疱庖狍匏脬",
                            pou: "剖掊裒",
                            pen: "喷盆湓",
                            pie: "瞥撇苤氕丿",
                            pin: "品贫聘频拼拚颦姘嫔榀牝",
                            se: "色塞瑟涩啬穑铯槭",
                            qing: "情青清请亲轻庆倾顷卿晴氢擎氰罄磬蜻箐鲭綮苘黥圊檠謦",
                            zan: "赞暂攒堑昝簪糌瓒錾趱拶",
                            shao: "少绍召烧稍邵哨韶捎勺梢鞘芍苕劭艄筲杓潲",
                            sao: "扫骚嫂梢缫搔瘙臊埽缲鳋",
                            sha: "沙厦杀纱砂啥莎刹杉傻煞鲨霎嗄痧裟挲铩唼歃",
                            xuan: "县选宣券旋悬轩喧玄绚渲璇炫萱癣漩眩暄煊铉楦泫谖痃碹揎镟儇",
                            ran: "然染燃冉苒髯蚺",
                            rang: "让壤攘嚷瓤穰禳",
                            rao: "绕扰饶娆桡荛",
                            reng: "仍扔",
                            ri: "日",
                            rou: "肉柔揉糅鞣蹂",
                            ruan: "软阮朊",
                            run: "润闰",
                            sa: "萨洒撒飒卅仨脎",
                            suo: "所些索缩锁莎梭琐嗦唆唢娑蓑羧挲桫嗍睃",
                            sai: "思赛塞腮噻鳃",
                            shui: "说水税谁睡氵",
                            sang: "桑丧嗓搡颡磉",
                            sen: "森",
                            seng: "僧",
                            shai: "筛晒",
                            shang: "上商尚伤赏汤裳墒晌垧觞殇熵绱",
                            xing: "行省星腥猩惺兴刑型形邢饧醒幸杏性姓陉荇荥擤悻硎",
                            shou: "收手受首售授守寿瘦兽狩绶艏扌",
                            shuo: "说数硕烁朔铄妁槊蒴搠",
                            su: "速素苏诉缩塑肃俗宿粟溯酥夙愫簌稣僳谡涑蔌嗉觫",
                            shua: "刷耍唰",
                            shuan: "栓拴涮闩",
                            shun: "顺瞬舜吮",
                            song: "送松宋讼颂耸诵嵩淞怂悚崧凇忪竦菘",
                            sou: "艘搜擞嗽嗖叟馊薮飕嗾溲锼螋瞍",
                            sun: "损孙笋荪榫隼狲飧",
                            teng: "腾疼藤滕誊",
                            tie: "铁贴帖餮萜",
                            tu: "土突图途徒涂吐屠兔秃凸荼钍菟堍酴",
                            wai: "外歪崴",
                            wang: "王望往网忘亡旺汪枉妄惘罔辋魍",
                            weng: "翁嗡瓮蓊蕹",
                            zhua: "抓挝爪",
                            yang: "样养央阳洋扬杨羊详氧仰秧痒漾疡泱殃恙鸯徉佯怏炀烊鞅蛘",
                            xiong: "雄兄熊胸凶匈汹芎",
                            yo: "哟唷",
                            yong: "用永拥勇涌泳庸俑踊佣咏雍甬镛臃邕蛹恿慵壅痈鳙墉饔喁",
                            za: "杂扎咱砸咋匝咂拶",
                            zai: "在再灾载栽仔宰哉崽甾",
                            zao: "造早遭枣噪灶燥糟凿躁藻皂澡蚤唣",
                            zei: "贼",
                            zen: "怎谮",
                            zeng: "增曾综赠憎锃甑罾缯",
                            zhei: "这",
                            zou: "走邹奏揍诹驺陬楱鄹鲰",
                            zhuai: "转拽",
                            zun: "尊遵鳟樽撙",
                            dia: "嗲",
                            nou: "耨"
                        };
                    },
                    "./src/InputMethod/assets/dicUtil.js" (__unused_rspack_module, exports, __webpack_require__) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.SimpleInputMethod = void 0;
                        var _dic = __webpack_require__("./src/InputMethod/assets/dic.js");
                        let SimpleInputMethod = exports.SimpleInputMethod = {
                            dict: {}
                        };
                        SimpleInputMethod.initDict = function() {
                            this.dict.py2hz = _dic.dict;
                            this.dict.py2hz2 = {};
                            this.dict.py2hz2['i'] = 'i';
                            for(let key in this.dict.py2hz){
                                let ch = key[0];
                                if (!this.dict.py2hz2[ch]) this.dict.py2hz2[ch] = this.dict.py2hz[key];
                            }
                        };
                        SimpleInputMethod.getSingleHanzi = function(pinyin) {
                            return this.dict.py2hz2[pinyin] || this.dict.py2hz[pinyin] || '';
                        };
                        SimpleInputMethod.getHanzi = function(pinyin) {
                            let result = this.getSingleHanzi(pinyin);
                            if (result) return [
                                result.split(''),
                                pinyin
                            ];
                            let temp = '';
                            let start = Math.min(pinyin.length, 6);
                            for(let i = start; i >= 1; i--){
                                let str = pinyin.substr(0, i);
                                let rs = this.getSingleHanzi(str);
                                if (rs) return [
                                    rs.split(''),
                                    str
                                ];
                            }
                            return [
                                [],
                                ''
                            ];
                        };
                        SimpleInputMethod.initDict();
                    },
                    "./src/common/js/api-service.js" (__unused_rspack_module, exports, __webpack_require__) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports["default"] = void 0;
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.fetch"));
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.router"));
                        var _system3 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                        var _system4 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                        var _config = __webpack_require__("./src/common/js/config.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        function ownKeys(e, r) {
                            var t = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                r && (o = o.filter(function(r) {
                                    return Object.getOwnPropertyDescriptor(e, r).enumerable;
                                })), t.push.apply(t, o);
                            }
                            return t;
                        }
                        function _objectSpread(e) {
                            for(var r = 1; r < arguments.length; r++){
                                var t = null != arguments[r] ? arguments[r] : {};
                                r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
                                    _defineProperty(e, r, t[r]);
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
                                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                                });
                            }
                            return e;
                        }
                        function _defineProperty(e, r, t) {
                            return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
                                value: t,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[r] = t, e;
                        }
                        function _toPropertyKey(t) {
                            var i = _toPrimitive(t, "string");
                            return "symbol" == typeof i ? i : i + "";
                        }
                        function _toPrimitive(t, r) {
                            if ("object" != typeof t || !t) return t;
                            var e = t[Symbol.toPrimitive];
                            if (void 0 !== e) {
                                var i = e.call(t, r || "default");
                                if ("object" != typeof i) return i;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === r ? String : Number)(t);
                        }
                        class ApiService {
                            constructor(){
                                this.baseUrl = _config.CONFIG.SERVER.BASE_URL;
                                this.baseHeaders = {
                                    'Content-Type': 'application/json'
                                };
                            }
                            async request(action, data = {}) {
                                const url = `${this.baseUrl}/api`;
                                const options = {
                                    url,
                                    method: 'POST',
                                    header: this.baseHeaders,
                                    responseType: 'json'
                                };
                                options.data = JSON.stringify(_objectSpread({
                                    action
                                }, data));
                                return new Promise((resolve, reject)=>{
                                    _system.default.fetch(_objectSpread(_objectSpread({}, options), {}, {
                                        success: (response)=>{
                                            const responseData = response.data || {};
                                            if (response.code >= 200 && response.code < 300) resolve(responseData);
                                            else {
                                                console.error(`HTTP Error: ${response.code}`, response);
                                                reject(new Error(`HTTP ${response.code}: ${JSON.stringify(responseData)}`));
                                            }
                                        },
                                        fail: (error, code)=>{
                                            console.error(`[ApiService] Request Failed. Code: ${code}, Error: ${JSON.stringify(error)}`);
                                            reject(new Error(`Request failed: ${error.data || 'Connection is invalid'}`));
                                        }
                                    }));
                                });
                            }
                            async getRankings(limit = 10) {
                                try {
                                    const result = await this.request('get_rankings', {
                                        limit: limit
                                    });
                                    return {
                                        success: true,
                                        rankings: result.rankings || []
                                    };
                                } catch (error) {
                                    console.error('获取排行榜失败:', error);
                                    return {
                                        success: false,
                                        rankings: [],
                                        error: error.message
                                    };
                                }
                            }
                            async syncClicks(userId, clickCount) {
                                try {
                                    await this.request('sync_clicks', {
                                        user_id: userId,
                                        click_count: clickCount
                                    });
                                    return {
                                        success: true
                                    };
                                } catch (error) {
                                    console.error('上报点击次数失败:', error);
                                    return {
                                        success: false,
                                        error: error.message
                                    };
                                }
                            }
                            async syncFromServer(userId) {
                                try {
                                    const result = await this.request('sync_from_server', {
                                        user_id: userId
                                    });
                                    if (result && result.success) {
                                        console.log('从服务器同步数据成功:', result.userInfo);
                                        return {
                                            success: true,
                                            userInfo: result.userInfo
                                        };
                                    }
                                    console.error('同步数据失败:', result ? result.error : '未知错误');
                                    return {
                                        success: false,
                                        error: result ? result.error : '服务器未返回成功状态'
                                    };
                                } catch (error) {
                                    console.error('从服务器同步数据时发生网络错误:', error);
                                    return {
                                        success: false,
                                        error: error.message
                                    };
                                }
                            }
                            async checkPetNameAvailability(petName) {
                                try {
                                    const result = await this.request('check_pet_name', {
                                        pet_name: petName
                                    });
                                    return _objectSpread({
                                        success: true
                                    }, result);
                                } catch (error) {
                                    console.error('检查宠物名可用性时发生网络错误:', error);
                                    return {
                                        success: false,
                                        error: error.message,
                                        isAvailable: false
                                    };
                                }
                            }
                            async setPetName(userId, newName) {
                                try {
                                    const result = await this.request('set_pet_name', {
                                        user_id: userId,
                                        new_name: newName
                                    });
                                    return result;
                                } catch (error) {
                                    console.error('修改宠物名失败:', error);
                                    return {
                                        success: false,
                                        error: error.message
                                    };
                                }
                            }
                            async checkDeviceRegistration(deviceId) {
                                try {
                                    const result = await this.request('check_registration', {
                                        device_id: deviceId
                                    });
                                    console.log('预激活检查成功:', result);
                                    return result;
                                } catch (error) {
                                    console.error('预激活检查时发生网络错误:', error);
                                    return {
                                        is_registered: false,
                                        can_auto_activate: false,
                                        error: error.message
                                    };
                                }
                            }
                            async registerAndGetUserId(deviceId) {
                                try {
                                    return await this.request('register_device_and_get_id', {
                                        device_id: deviceId
                                    });
                                } catch (error) {
                                    console.error('注册或获取用户ID时发生网络错误:', error);
                                    return {
                                        success: false,
                                        message: error.message
                                    };
                                }
                            }
                            async getAnnouncements(limit = 10) {
                                try {
                                    const result = await this.request('get_announcements', {
                                        limit: limit
                                    });
                                    console.log('Original announcement result from server:', JSON.stringify(result));
                                    return {
                                        success: result.success || false,
                                        announcements: result.announcements || [],
                                        count: result.count || 0,
                                        timestamp: result.timestamp,
                                        error: result.error
                                    };
                                } catch (error) {
                                    console.error('获取公告失败:', error);
                                    return {
                                        success: false,
                                        error: error.message,
                                        announcements: [],
                                        count: 0
                                    };
                                }
                            }
                            async checkAppUpdate(currentVersionCode) {
                                try {
                                    const result = await this.request('check_update', {
                                        current_version_code: currentVersionCode
                                    });
                                    return {
                                        success: result.success || false,
                                        hasUpdate: result.has_update || false,
                                        updateInfo: result.update_info || null,
                                        isForceUpdate: result.is_force_update || false,
                                        currentVersionCode: result.current_version_code || currentVersionCode,
                                        latestVersionCode: result.latest_version_code || currentVersionCode,
                                        error: result.error
                                    };
                                } catch (error) {
                                    console.error('检查更新失败:', error);
                                    return {
                                        success: false,
                                        error: error.message,
                                        hasUpdate: false,
                                        isForceUpdate: false
                                    };
                                }
                            }
                        }
                        var _default = exports["default"] = new ApiService();
                    },
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
                                VERSION_CODE: 35,
                                MAX_CLICKS_PER_BATCH: 50,
                                SYNC_INTERVAL: 60000,
                                RANK_LIMIT: 10,
                                CHECK_UPDATE_INTERVAL: 3600000,
                                ANNOUNCEMENT_CACHE_TIME: 300000
                            },
                            STORAGE_KEYS: {
                                DEVICE_ID: 'device_id',
                                IS_LOCALLY_ACTIVATED: 'is_locally_activated',
                                USER_INFO: 'user_info',
                                PENDING_CLICKS: 'pending_clicks',
                                LAST_SYNC_TIME: 'last_sync_time',
                                TOTAL_CLICKS: 'total_clicks',
                                LAST_UPDATE_CHECK_TIME: 'last_update_check_time',
                                LAST_ANNOUNCEMENT_FETCH_TIME: 'last_announcement_fetch_time',
                                CACHED_ANNOUNCEMENTS: 'cached_announcements',
                                CACHED_UPDATE_INFO: 'cached_update_info',
                                IGNORED_VERSION: 'ignored_version_code',
                                FORCE_UPDATE_REQUIRED: 'force_update_required'
                            }
                        };
                    },
                    "./src/common/js/userService.js" (__unused_rspack_module, exports, __webpack_require__) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports["default"] = void 0;
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.device"));
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                        var _apiService = _interopRequireDefault(__webpack_require__("./src/common/js/api-service.js"));
                        var _config = __webpack_require__("./src/common/js/config.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        class UserService {
                            _storageGet(key) {
                                return new Promise((resolve)=>{
                                    _system2.default.get({
                                        key: key,
                                        success: (data)=>resolve(data),
                                        fail: ()=>resolve(null)
                                    });
                                });
                            }
                            _storageSet(key, value) {
                                return new Promise((resolve, reject)=>{
                                    _system2.default.set({
                                        key: key,
                                        value: value,
                                        success: resolve,
                                        fail: (err, code)=>reject(new Error(`Storage.set failed for '${key}': ${err} (${code})`))
                                    });
                                });
                            }
                            _getRawDeviceId() {
                                return new Promise((resolve)=>{
                                    _system.default.getSerial({
                                        success: async (data)=>{
                                            let serial = data ? data.serial : null;
                                            if ('NA' === serial) {
                                                console.warn("Device serial is 'NA', using a fixed test serial.");
                                                serial = 'TESTVM-SN-0123456789';
                                            }
                                            if (!serial) {
                                                console.error('Failed to get a valid device serial.');
                                                resolve(null);
                                                return;
                                            }
                                            try {
                                                await this._storageSet(_config.CONFIG.STORAGE_KEYS.DEVICE_ID, serial);
                                                console.log('Saved raw device ID:', serial);
                                                resolve(serial);
                                            } catch (e) {
                                                console.error('Failed to save raw device ID to storage:', e);
                                                resolve(null);
                                            }
                                        },
                                        fail: (err, code)=>{
                                            console.error("Connection is invalid");
                                            resolve(null);
                                        }
                                    });
                                });
                            }
                            async _saveUserInfo(userInfo) {
                                if (!userInfo || !userInfo.id && !userInfo.user_number) throw new Error("User info is invalid, cannot save.");
                                const userInfoToSave = {
                                    id: userInfo.id || userInfo.user_number,
                                    user_number: userInfo.user_number,
                                    pet_name: userInfo.pet_name,
                                    total_clicks: userInfo.total_clicks || 0
                                };
                                await this._storageSet(_config.CONFIG.STORAGE_KEYS.USER_INFO, JSON.stringify(userInfoToSave));
                                console.log("Successfully saved user info to storage:", userInfoToSave);
                                return userInfoToSave;
                            }
                            async ensureUserIsRegistered(forceSync = false) {
                                console.log('[UserService] Checking for existing user info in storage...');
                                const existingUserInfoJSON = await this._storageGet(_config.CONFIG.STORAGE_KEYS.USER_INFO);
                                if (existingUserInfoJSON) {
                                    try {
                                        const userInfo = JSON.parse(existingUserInfoJSON);
                                        if (userInfo && userInfo.id) if (forceSync) {
                                            console.log('[UserService] Force sync enabled. Attempting to sync latest data from server...');
                                            try {
                                                const syncResult = await _apiService.default.syncFromServer(userInfo.id);
                                                if (syncResult && syncResult.success) {
                                                    console.log('[UserService] Successfully synced from server.');
                                                    return await this._saveUserInfo(syncResult.userInfo);
                                                }
                                                console.warn('[UserService] Sync from server failed, will use stale local data. Error:', syncResult ? syncResult.error : 'Unknown error');
                                                return userInfo;
                                            } catch (syncError) {
                                                console.error('[UserService] A critical error occurred during server sync:', syncError);
                                                return userInfo;
                                            }
                                        } else {
                                            console.log('[UserService] User is already registered. Found info:', userInfo);
                                            return userInfo;
                                        }
                                    } catch (e) {
                                        console.warn('[UserService] User info in storage is malformed. Proceeding with registration.');
                                    }
                                }
                                console.log('[UserService] User not found locally. Starting silent registration process...');
                                const deviceId = await this._getRawDeviceId();
                                if (!deviceId) {
                                    console.error('[UserService] CRITICAL: Cannot proceed with registration: failed to get device ID.');
                                    return null;
                                }
                                console.log(`[UserService] Got device ID: ${deviceId}`);
                                try {
                                    console.log('[UserService] Checking device registration with server...');
                                    const regResult = await _apiService.default.checkDeviceRegistration(deviceId);
                                    console.log('[UserService] Server registration check response:', JSON.stringify(regResult));
                                    if (regResult && regResult.is_registered && regResult.userInfo) {
                                        console.log('[UserService] Device is already registered on server. Restoring user info.');
                                        return await this._saveUserInfo(regResult.userInfo);
                                    }
                                    console.log('[UserService] Device not registered. Attempting to register a new user...');
                                    const newRegResult = await _apiService.default.registerAndGetUserId(deviceId);
                                    console.log('[UserService] Server new user registration response:', JSON.stringify(newRegResult));
                                    if (newRegResult && newRegResult.success && newRegResult.userInfo) {
                                        console.log('[UserService] Successfully registered new user.');
                                        return await this._saveUserInfo(newRegResult.userInfo);
                                    }
                                    console.error('[UserService] CRITICAL: Failed to register new user.', newRegResult ? newRegResult.message : 'No result from server');
                                    return null;
                                } catch (e) {
                                    console.error('[UserService] CRITICAL: An error occurred during the silent registration API calls:', e);
                                    return null;
                                }
                            }
                            async updatePendingClicks(amount) {
                                if ('number' != typeof amount || isNaN(amount)) {
                                    console.warn('[UserService] updatePendingClicks received an invalid amount:', amount);
                                    return null;
                                }
                                try {
                                    const pendingClicksData = await this._storageGet(_config.CONFIG.STORAGE_KEYS.PENDING_CLICKS);
                                    let currentClicks = parseInt(pendingClicksData) || 0;
                                    const newClicks = currentClicks + amount;
                                    await this._storageSet(_config.CONFIG.STORAGE_KEYS.PENDING_CLICKS, newClicks.toString());
                                    console.log(`[UserService] Pending clicks updated by ${amount}. New value: ${newClicks}`);
                                    return newClicks;
                                } catch (e) {
                                    console.error('[UserService] Failed to update pending clicks in storage:', e);
                                    return null;
                                }
                            }
                            async triggerClickSync() {
                                console.log('[UserService] Triggering click sync...');
                                const userInfoJSON = await this._storageGet(_config.CONFIG.STORAGE_KEYS.USER_INFO);
                                if (!userInfoJSON) {
                                    console.warn('[UserService] Sync aborted: User info not found in storage.');
                                    return false;
                                }
                                let userInfo;
                                try {
                                    userInfo = JSON.parse(userInfoJSON);
                                    if (!userInfo || !userInfo.id) {
                                        console.warn('[UserService] Sync aborted: User ID is invalid.');
                                        return false;
                                    }
                                } catch (e) {
                                    console.warn('[UserService] Sync aborted: Could not parse user info.');
                                    return false;
                                }
                                const pendingClicksData = await this._storageGet(_config.CONFIG.STORAGE_KEYS.PENDING_CLICKS);
                                const clicksToSync = parseInt(pendingClicksData);
                                if (isNaN(clicksToSync)) {
                                    console.log('[UserService] No pending clicks to sync (value is NaN).');
                                    return true;
                                }
                                console.log(`[UserService] Found ${clicksToSync} pending clicks for user ${userInfo.id}. Syncing...`);
                                const result = await _apiService.default.syncClicks(userInfo.id, clicksToSync);
                                if (result.success) {
                                    console.log('[UserService] Sync successful. Resetting pending clicks.');
                                    await this._storageSet(_config.CONFIG.STORAGE_KEYS.PENDING_CLICKS, '0');
                                    return true;
                                }
                                console.error('[UserService] Sync failed:', result.error);
                                return false;
                            }
                            async forceSyncFromServer() {
                                console.log('[UserService] Starting force sync from server...');
                                try {
                                    console.log('[UserService] Step 1: Syncing local pending clicks before fetching server data.');
                                    const clickSyncSuccess = await this.triggerClickSync();
                                    if (!clickSyncSuccess) {
                                        const errorMsg = '无法同步本地点击数据，已取消从服务器更新，以防数据丢失。';
                                        console.error(`[UserService] ${errorMsg}`);
                                        return {
                                            success: false,
                                            message: errorMsg
                                        };
                                    }
                                    console.log('[UserService] Step 1: Local pending clicks synced successfully.');
                                    console.log('[UserService] Step 2: Fetching latest user data from server.');
                                    const userInfo = await this.ensureUserIsRegistered(true);
                                    if (userInfo && userInfo.id) {
                                        console.log('[UserService] Step 2: Successfully fetched and updated user info. UserInfo:', userInfo);
                                        console.log('[UserService] Force sync complete. Local storage is now up-to-date.');
                                        return {
                                            success: true,
                                            message: '同步成功！'
                                        };
                                    }
                                    {
                                        const errorMsg = '无法从服务器获取最新用户数据。';
                                        console.error(`[UserService] ${errorMsg}`);
                                        return {
                                            success: false,
                                            message: errorMsg
                                        };
                                    }
                                } catch (e) {
                                    console.error('[UserService] An error occurred during the force sync process:', e);
                                    return {
                                        success: false,
                                        message: '同步失败，发生未知错误'
                                    };
                                }
                            }
                        }
                        var _default = exports["default"] = new UserService();
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
                    __webpack_require__.g = (()=>{
                        if ('object' == typeof globalThis) return globalThis;
                        try {
                            return this || new Function('return this')();
                        } catch (e) {
                            if ('object' == typeof window) return window;
                        }
                    })();
                })();
                (()=>{
                    __webpack_require__.rv = ()=>"1.6.8";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.6.8";
                })();
                var __webpack_exports__ = {};
                (()=>{
                    $app_exports$['inputmethod'] = __webpack_require__("./src/InputMethod/InputMethod.ux");
                    var $app_style$ = [
                        [
                            [
                                [
                                    0,
                                    "page-container"
                                ]
                            ],
                            {
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
                                    "content-wrapper"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "100%",
                                flexDirection: "column",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "close-keyboard-button"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                width: "80px",
                                height: "80px",
                                zIndex: 100
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
                                marginTop: 0,
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
                                justifyContent: "center",
                                position: "relative"
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
                                flex: 1,
                                alignItems: "center",
                                overflowY: "scroll"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "content-container"
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
                                    "current-name-section"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                alignItems: "center",
                                marginBottom: "30px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "current-name-section"
                                ],
                                [
                                    2,
                                    "text"
                                ]
                            ],
                            {
                                color: "#aaaaaa",
                                fontSize: "28px",
                                marginBottom: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "name-input"
                                ]
                            ],
                            {
                                width: "90%",
                                height: "70px",
                                backgroundColor: "#1a1a1a",
                                borderRadius: "15px",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                paddingLeft: "20px",
                                marginBottom: "40px",
                                position: "relative"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "name-input"
                                ],
                                [
                                    2,
                                    "text"
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
                                    "cursor"
                                ]
                            ],
                            {
                                width: "4px",
                                height: "40px",
                                backgroundColor: "#007aff",
                                animationName: "blink",
                                animationDuration: "1s",
                                animationIterationCount: "infinite"
                            }
                        ],
                        [
                            [
                                [
                                    3,
                                    "blink"
                                ]
                            ],
                            {
                                keyframes: "[{\"time\":0,\"opacity\":1},{\"time\":100,\"opacity\":0}]"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "confirm-button"
                                ]
                            ],
                            {
                                width: "100px",
                                height: "100px",
                                borderRadius: "50px",
                                backgroundColor: "#007aff",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "status-text"
                                ]
                            ],
                            {
                                color: "#ff3b30",
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
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                        var _system3 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                        var _apiService = _interopRequireDefault(__webpack_require__("./src/common/js/api-service.js"));
                        var _userService = _interopRequireDefault(__webpack_require__("./src/common/js/userService.js"));
                        var _config = __webpack_require__("./src/common/js/config.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        function ownKeys(e, r) {
                            var t = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                r && (o = o.filter(function(r) {
                                    return Object.getOwnPropertyDescriptor(e, r).enumerable;
                                })), t.push.apply(t, o);
                            }
                            return t;
                        }
                        function _objectSpread(e) {
                            for(var r = 1; r < arguments.length; r++){
                                var t = null != arguments[r] ? arguments[r] : {};
                                r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
                                    _defineProperty(e, r, t[r]);
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
                                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                                });
                            }
                            return e;
                        }
                        function _defineProperty(e, r, t) {
                            return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
                                value: t,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[r] = t, e;
                        }
                        function _toPropertyKey(t) {
                            var i = _toPrimitive(t, "string");
                            return "symbol" == typeof i ? i : i + "";
                        }
                        function _toPrimitive(t, r) {
                            if ("object" != typeof t || !t) return t;
                            var e = t[Symbol.toPrimitive];
                            if (void 0 !== e) {
                                var i = e.call(t, r || "default");
                                if ("object" != typeof i) return i;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === r ? String : Number)(t);
                        }
                        var _default = exports.default = {
                            data: {
                                time: '00:00',
                                currentPetName: '...',
                                newPetName: '',
                                statusMessage: '',
                                showKeyboard: false,
                                maxNameLength: 10
                            },
                            async onInit () {
                                this.updateTime();
                                setInterval(this.updateTime, 10000);
                                try {
                                    const userInfoJSON = await _system2.default.get({
                                        key: _config.CONFIG.STORAGE_KEYS.USER_INFO
                                    });
                                    if (userInfoJSON) {
                                        const userInfo = JSON.parse(userInfoJSON);
                                        this.currentPetName = userInfo.pet_name || '未命名';
                                    } else this.currentPetName = '未命名';
                                } catch (e) {
                                    this.currentPetName = '未命名';
                                }
                            },
                            updateTime () {
                                const now = new Date();
                                const hours = now.getHours().toString().padStart(2, '0');
                                const minutes = now.getMinutes().toString().padStart(2, '0');
                                this.time = `${hours}:${minutes}`;
                            },
                            toggleKeyboard (show) {
                                this.showKeyboard = show;
                            },
                            handleKeyboardComplete (e) {
                                const newChar = e.detail.content;
                                if (this.newPetName.length < this.maxNameLength) this.newPetName += newChar;
                                else _system3.default.showToast({
                                    message: `名字最长为 ${this.maxNameLength} 个字符`
                                });
                            },
                            handleKeyboardDelete () {
                                if (this.newPetName.length > 0) this.newPetName = this.newPetName.slice(0, -1);
                            },
                            async savePetName () {
                                if (!this.newPetName || this.newPetName.length > this.maxNameLength) {
                                    this.statusMessage = `名字需在1-${this.maxNameLength}个字符之间`;
                                    return;
                                }
                                this.statusMessage = '正在验证用户...';
                                const userInfo = await _userService.default.ensureUserIsRegistered();
                                if (!userInfo) {
                                    _system3.default.showToast({
                                        message: '无法获取用户信息, 请检查网络后重启应用',
                                        duration: 3000
                                    });
                                    this.statusMessage = '错误: 用户未登录';
                                    return;
                                }
                                this.statusMessage = '正在检查名称可用性...';
                                const availabilityResult = await _apiService.default.checkPetNameAvailability(this.newPetName);
                                if (!availabilityResult.success || !availabilityResult.isAvailable) {
                                    this.statusMessage = `保存失败: ${false === availabilityResult.isAvailable ? '该名称已被使用' : availabilityResult.error || '无法检查名称'}`;
                                    return;
                                }
                                this.statusMessage = '名称可用，正在保存...';
                                const setResult = await _apiService.default.setPetName(userInfo.id, this.newPetName);
                                if (setResult.success) {
                                    this.currentPetName = this.newPetName;
                                    this.newPetName = '';
                                    this.statusMessage = '';
                                    const updatedUserInfo = _objectSpread(_objectSpread({}, userInfo), {}, {
                                        pet_name: this.currentPetName
                                    });
                                    await _system2.default.set({
                                        key: _config.CONFIG.STORAGE_KEYS.USER_INFO,
                                        value: JSON.stringify(updatedUserInfo)
                                    });
                                    _system3.default.showToast({
                                        message: '宠物名字已更新！'
                                    });
                                    this.toggleKeyboard(false);
                                    setTimeout(()=>{
                                        _system.default.back();
                                    }, 1500);
                                } else this.statusMessage = `保存失败: ${setResult.error || '未知错误'}`;
                            },
                            goBack () {
                                if (this.showKeyboard) this.toggleKeyboard(false);
                                else _system.default.back();
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
                                    classList: [
                                        "content-wrapper"
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
                                                    value: "宠物命名"
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
                                                "content-container"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "current-name-section"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    value: function() {
                                                        return "当前名字: " + _vm_.currentPetName;
                                                    }
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "name-input"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.toggleKeyboard(true, evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    value: function() {
                                                        return _vm_.newPetName || "\u70B9\u51FB\u8F93\u5165\u65B0\u540D\u5B57";
                                                    }
                                                }
                                            }, []),
                                            aiot.__ci__({
                                                __vm__: _vm_,
                                                __opts__: {
                                                    shown: function() {
                                                        return !_vm_.newPetName;
                                                    }
                                                }
                                            }, function() {
                                                return [
                                                    aiot.__ce__("div", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "cursor"
                                                            ]
                                                        }
                                                    }, [])
                                                ];
                                            })
                                        ]),
                                        aiot.__ce__("image", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                src: "/common/check.png",
                                                classList: [
                                                    "confirm-button"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.savePetName(evt);
                                                    }
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "status-text"
                                                ],
                                                value: function() {
                                                    return _vm_.statusMessage;
                                                }
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__cc__("inputmethod", {
                                __vm__: _vm_,
                                __opts__: {
                                    hide: function() {
                                        return !_vm_.showKeyboard;
                                    },
                                    keyboardtype: "QWERTY",
                                    screentype: "rect",
                                    events: {
                                        complete: function(evt) {
                                            return _vm_.handleKeyboardComplete(evt);
                                        },
                                        delete: function(evt) {
                                            return _vm_.handleKeyboardDelete(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("image", {
                                __vm__: _vm_,
                                __opts__: {
                                    src: "/common/ShowKeyBoard.png",
                                    classList: [
                                        "close-keyboard-button"
                                    ],
                                    show: function() {
                                        return _vm_.showKeyboard;
                                    },
                                    events: {
                                        click: function(evt) {
                                            return _vm_.toggleKeyboard(false, evt);
                                        }
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
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtaW5nXFxpbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0JhbmRQZXQvc3JjL0lucHV0TWV0aG9kL0lucHV0TWV0aG9kLnV4Iiwid2VicGFjazovL0JhbmRQZXQvc3JjL0lucHV0TWV0aG9kL2Fzc2V0cy9kaWMuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvSW5wdXRNZXRob2QvYXNzZXRzL2RpY1V0aWwuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzIiwid2VicGFjazovL0JhbmRQZXQvc3JjL2NvbW1vbi9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvY29tbW9uL2pzL3VzZXJTZXJ2aWNlLmpzIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9CYW5kUGV0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL0JhbmRQZXQvc3JjL25hbWluZy9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInBhZ2VcIiBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XCIgc2hvdz1cInt7IWhpZGV9fVwiPlxyXG4gICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6YmxhY2tcIiA+XHJcbiAgICAgIDwhLS0g5ZyG5bGPNjIgLS0+XHJcbiAgICAgIDxkaXYgaWY9XCJ7e3NjcmVlbnR5cGU9PT0nY2lyY2xlJ319XCIgc3R5bGU9XCJ3aWR0aDogNDgwcHg7aGVpZ2h0OiAzMjFweDtcIj5cclxuICAgICAgICA8IS0tIOWFqOmUruebmCAtLT5cclxuICAgICAgICA8ZGl2IGlmPVwie3trZXlib2FyZHR5cGUhPSdUOSd9fVwiIHN0eWxlPVwid2lkdGg6IDQ4MHB4O2hlaWdodDogMzIxcHg7XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvYmFjazIucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjM4cHg7bGVmdDo3cHg7d2lkdGg6NDY2cHg7aGVpZ2h0OjUycHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3dpdGNoQ24nKVwiIHNob3c9XCJ7e251bUZsYWd9fVwiIC8+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvMTIzLnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDoyNjZweDtsZWZ0OjExOXB4O3dpZHRoOjEyMHB4O2hlaWdodDo0OHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3N3aXRjaE51bScpXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyAmJiAhbnVtRmxhZyAmJiBsYW5nPT09J2NuJ319XCIgLz5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC9iaWdBLnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDoyNjZweDtsZWZ0OjExOXB4O3dpZHRoOjEyMHB4O2hlaWdodDo0OHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3N3aXRjaExvdycpXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyAmJiB1cHBlckZsYWcgJiYgbGFuZz09PSdlbid9fVwiIC8+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvQS5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MjY2cHg7bGVmdDoxMTlweDt3aWR0aDoxMjBweDtoZWlnaHQ6NDhweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzd2l0Y2hVcHBlcicpXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyAmJiAhdXBwZXJGbGFnICYmIGxhbmc9PT0nZW4nfX1cIiAvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MzhweDtsZWZ0Ojc4cHg7d2lkdGg6MzI0cHg7aGVpZ2h0OjUycHg7YmFja2dyb3VuZC1jb2xvcjpyZ2IoMzgsMzgsMzgpO2JvcmRlci1yYWRpdXM6IDEycHg7Ym9yZGVyOiAzcHggc29saWQgIzMzMzMzM1wiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycmJiAhbnVtRmxhZ319XCI+PC9kaXY+XHJcbiAgICAgICAgICA8aW1nIHNob3c9XCJ7e3Jlc3VsdExpc3QubGVuZ3RoID4gMH19XCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjQzcHg7bGVmdDozNTVweDtcIiBzcmM9XCIuL2Fzc2V0cy9mdWxsL2Rvd24ucG5nXCIgQGNsaWNrPVwib25CdG5DbGljaygnZG93bicpXCIgLz5cclxuICAgICAgICAgIDwhLS0g5bim5Y+Y6YeP55qE55u45a+56Lev5b6E5ZyoIGFpb3QtdG9va2l0IDIuMC40IOS4reS/ruWkjSAtLT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC97e2xhbmd9fS5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MzhweDtsZWZ0OjdweDt3aWR0aDo2N3B4O2hlaWdodDo1MnB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2xhbmcnKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWd9fVwiIC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDotNHB4O2xlZnQ6NzhweDt3aWR0aDozMjRweDtcIiBzaG93PVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnICYmIGN2YWx9fVwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbHRleHRcIiBzdHlsZT1cIndpZHRoOjI5NnB4O1wiPiB7e2N2YWx9fV8gPC90ZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDozOHB4O2xlZnQ6ODBweDt3aWR0aDoyNzdweFwiIHNob3c9XCJ7e2xhbmcgPT09ICdjbicmJiAhbnVtRmxhZ319XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIGNvbHVtbiBjZW50ZXJcIiBmb3I9XCJ7e2N2YWxMaXN0fX1cIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgc2hvdz0ne3tyZXN1bHRMaXN0Lmxlbmd0aCA+ICRpZHh9fScgY2xhc3M9XCJjYWxidG4wXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwie3tyZXN1bHRMaXN0WyRpZHhdfX1cIiBAY2xpY2s9XCJvblJzU2VsZWN0KHJlc3VsdExpc3RbJGlkeF0pXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjM4cHg7bGVmdDo4MHB4O3dpZHRoOjMyMHB4O2hlaWdodDo1MnB4O2FsaWduLWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO2p1c3RpZnktY29udGVudDogY2VudGVyXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyAmJiAhbnVtRmxhZyAmJiBsYW5nPT09J2VuJ319XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3dpdGNoTnVtJylcIiA+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC8xMjNfYm9hcmRsZXNzLnBuZ1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwhLS0g6L+Z6YeM5L2/55Soc2hvd+S8muWvvOiHtOavj+asoei+k+WFpemDveS8muWKoOi9veWFqOmDqOWAmemAieWIl+ihqO+8jOW+iOWNoSAtLT5cclxuICAgICAgICAgIDxsaXN0IGNsYXNzPVwibGlzdDNcIiBpZj1cInt7ZG93bkZsYWc9PT0nZG93bid9fVwiPlxyXG4gICAgICAgICAgICA8bGlzdC1pdGVtIHR5cGU9XCJ3YWl0aW5nUm93czYydDlcIiBjbGFzcz1cIml0ZW0zXCIgZm9yPVwie3tpdGVtQXJyYXkgaW4gcmVzdWx0TGlzdDJ9fVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIGNvbHVtbiBjZW50ZXJcIiBzdHlsZT1cImhlaWdodDo1MnB4O1wiIGZvcj1cInt7aXRlbSBpbiBpdGVtQXJyYXl9fVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiY2FsYnRuMFwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cInt7aXRlbX19XCIgQGNsaWNrPVwib25Sc1NlbGVjdChpdGVtKVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGlzdC1pdGVtPlxyXG4gICAgICAgICAgPC9saXN0PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6OTVweDtsZWZ0OjhweDt3aWR0aDo0NjRweDtoZWlnaHQ6NTJweDtcIiBzaG93PVwie3tkb3duRmxhZz09PScnJiYhbnVtRmxhZ319XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC9RLnBuZ1wiIHN0eWxlPVwid2lkdGg6NTRweDtoZWlnaHQ6NTJweDttYXJnaW4tcmlnaHQ6IDRweDtcIiBAY2xpY2s9XCJvblNlbGVjdCgnUScpXCIgLz5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG5mdWxsXCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ2Z1bGw2MiddWzBdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvUC5wbmdcIiBzdHlsZT1cIndpZHRoOjU0cHg7aGVpZ2h0OjUycHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ1AnKVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjE1MnB4O2xlZnQ6MjNweDt3aWR0aDo0MzhweDtoZWlnaHQ6NTJweDtcIiBzaG93PVwie3tkb3duRmxhZz09PScnJiYhbnVtRmxhZ319XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC9idEEucG5nXCIgc3R5bGU9XCJ3aWR0aDo2MHB4O2hlaWdodDo1MnB4O21hcmdpbi1yaWdodDogNHB4O1wiIEBjbGljaz1cIm9uU2VsZWN0KCdBJylcIiAvPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bmZ1bGxcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snZnVsbDYyJ11bMV19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC9MLnBuZ1wiIHN0eWxlPVwid2lkdGg6NjBweDtoZWlnaHQ6NTJweDtcIiBAY2xpY2s9XCJvblNlbGVjdCgnTCcpXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MjA5cHg7bGVmdDo1NnB4O3dpZHRoOjM2OHB4O2hlaWdodDo1MnB4O1wiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycmJiFudW1GbGFnfX1cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsL1oucG5nXCIgc3R5bGU9XCJ3aWR0aDo3MnB4O2hlaWdodDo1MnB4O21hcmdpbi1yaWdodDogNHB4O1wiIEBjbGljaz1cIm9uU2VsZWN0KCdaJylcIiAvPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bmZ1bGxcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snZnVsbDYyJ11bMl19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC9NLnBuZ1wiIHN0eWxlPVwid2lkdGg6NzJweDtoZWlnaHQ6NTJweDtcIiBAY2xpY2s9XCJvblNlbGVjdCgnTScpXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6OTVweDtsZWZ0OjhweDt3aWR0aDo0NjRweDtoZWlnaHQ6NTJweDtcIiBzaG93PVwie3tudW1GbGFnfX1cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsLzEucG5nXCIgc3R5bGU9XCJ3aWR0aDo1NHB4O2hlaWdodDo1MnB4O21hcmdpbi1yaWdodDogNHB4O1wiIEBjbGljaz1cIm9uU2VsZWN0KCcxJylcIiAvPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bmZ1bGxcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snc2lnbjYyJ11bMF19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC8wLnBuZ1wiIHN0eWxlPVwid2lkdGg6NTRweDtoZWlnaHQ6NTJweDtcIiBAY2xpY2s9XCJvblNlbGVjdCgnMCcpXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MTUycHg7bGVmdDoyM3B4O3dpZHRoOjQzOHB4O2hlaWdodDo1MnB4O1wiIHNob3c9XCJ7e251bUZsYWd9fVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvMi0xLnBuZ1wiIHN0eWxlPVwid2lkdGg6NjBweDtoZWlnaHQ6NTJweDttYXJnaW4tcmlnaHQ6IDRweDtcIiBAY2xpY2s9XCJvblNlbGVjdCgnficpXCIgLz5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG5mdWxsXCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ242MiddWzFdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvMi0yLnBuZ1wiIHN0eWxlPVwid2lkdGg6NjBweDtoZWlnaHQ6NTJweDtcIiBAY2xpY2s9XCJvblNlbGVjdCgnPycpXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MjA5cHg7bGVmdDo1NnB4O3dpZHRoOjM2OHB4O2hlaWdodDo1MnB4O1wiIHNob3c9XCJ7e251bUZsYWd9fVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvMy0xLnBuZ1wiIHN0eWxlPVwid2lkdGg6NzJweDtoZWlnaHQ6NTJweDttYXJnaW4tcmlnaHQ6IDRweDtcIiBAY2xpY2s9XCJvblNlbGVjdCgnKCcpXCIgLz5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG5mdWxsXCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ242MiddWzJdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvMy0yLnBuZ1wiIHN0eWxlPVwid2lkdGg6NzJweDtoZWlnaHQ6NTJweDtcIiBAY2xpY2s9XCJvblNlbGVjdCgn44CBJylcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvZGVsLnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDozOHB4O2xlZnQ6NDA2cHg7d2lkdGg6NjdweDtoZWlnaHQ6NTJweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdEJylcIiBzaG93PVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnIH19XCIgLz5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC9zcGFjZS5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MjY2cHg7bGVmdDoyNDJweDt3aWR0aDoxMjBweDtoZWlnaHQ6NDhweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzcGFjZScpXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyAmJiAhbnVtRmxhZyB9fVwiIC8+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvNC0yLnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDoyNjZweDtsZWZ0OjI0MnB4O3dpZHRoOjEyMHB4O2hlaWdodDo0OHB4O1wiIEBjbGljaz1cIm9uU2VsZWN0KCfjgIInKVwiIHNob3c9XCJ7e251bUZsYWcgfX1cIiAvPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsLzQtMS5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MjY2cHg7bGVmdDoxMTlweDt3aWR0aDoxMjBweDtoZWlnaHQ6NDhweDtcIiBAY2xpY2s9XCJvblNlbGVjdCgn77yMJylcIiBzaG93PVwie3tudW1GbGFnIH19XCIgLz5cclxuICAgICAgICAgIDxpbWcgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjIwNHB4O2xlZnQ6NzhweDtcIiBzcmM9XCIuL2Fzc2V0cy9mdWxsL3VwLnBuZ1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2Rvd24nKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09J2Rvd24nfX1cIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0g5Lmd6ZSuIC0tPlxyXG4gICAgICAgIDxkaXYgZWxzZSBzdHlsZT1cIndpZHRoOiA0ODBweDtoZWlnaHQ6IDMyMXB4O1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy90OS9iYWNrMi5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MzVweDtsZWZ0OjMxcHg7d2lkdGg6IDYwcHg7aGVpZ2h0OiA2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3N3aXRjaENuJylcIiBzaG93PVwie3tudW1GbGFnfX1cIiAvPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy90OS8xMjMucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjk5cHg7bGVmdDozMXB4O3dpZHRoOiA2MHB4O2hlaWdodDogNjBweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzd2l0Y2hOdW0nKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgbGFuZz09PSdjbid9fVwiIC8+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL3Q5L2JpZ0EucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjk5cHg7bGVmdDozMXB4O3dpZHRoOiA2MHB4O2hlaWdodDogNjBweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzd2l0Y2hMb3cnKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgdXBwZXJGbGFnICYmIGxhbmc9PT0nZW4nfX1cIiAvPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy90OS9hLnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDo5OXB4O2xlZnQ6MzFweDt3aWR0aDogNjBweDtoZWlnaHQ6IDYwcHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3dpdGNoVXBwZXInKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgIXVwcGVyRmxhZyAmJiBsYW5nPT09J2VuJ319XCIgLz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjM1cHg7bGVmdDo5NXB4O3dpZHRoOjI5MHB4O2hlaWdodDo2MHB4O2JhY2tncm91bmQtY29sb3I6cmdiKDM4LDM4LDM4KTtib3JkZXItcmFkaXVzOiA5OTlweDtib3JkZXI6IDNweCBzb2xpZCAjMzMzMzMzXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyYmICFudW1GbGFnfX1cIj48L2Rpdj5cclxuICAgICAgICAgIDxpbWcgc2hvdz1cInt7cmVzdWx0TGlzdC5sZW5ndGggPiAwfX1cIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6NDRweDtsZWZ0OjMzOHB4O1wiIHNyYz1cIi4vYXNzZXRzL2Z1bGwvZG93bi5wbmdcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdkb3duJylcIiAvPlxyXG4gICAgICAgICAgPCEtLSDluKblj5jph4/nmoTnm7jlr7not6/lvoTlnKggYWlvdC10b29raXQgMi4wLjQg5Lit5L+u5aSNIC0tPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy90OS97e2xhbmd9fS5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MzVweDtsZWZ0OjMxcHg7d2lkdGg6IDYwcHg7aGVpZ2h0OiA2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2xhbmcnKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWd9fVwiIC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDotNHB4O2xlZnQ6OTVweDt3aWR0aDoxNDVweDtoZWlnaHQ6NDBweDtcIiBzaG93PVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnICYmIGN2YWx9fVwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbHRleHRcIiBzdHlsZT1cIndpZHRoOjE0NXB4O1wiPiB7e2N2YWx9fV8gPC90ZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWd9fVwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDotNHB4O2xlZnQ6MjQwcHg7d2lkdGg6MTQ1cHg7aGVpZ2h0OjQwcHg7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGZvcj1cInt7d2FpdGluZ0xpc3R9fVwiIGNsYXNzPVwid2FpdGluZy1rZXlzXCIgc3R5bGU9XCJjb2xvcjp7eyRpZHg9PT13YWl0aW5nSW5kZXggPyAncmdiKDEzLDEzMiwyNTUpJyA6ICd3aGl0ZSd9fTtcIiBAY2xpY2s9XCJvblNlbGVjdFdhaXRpbmcoJGlkeClcIj57e3dhaXRpbmdMaXN0WyRpZHhdfX08L3RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjM5cHg7bGVmdDoxMDVweDt3aWR0aDoyMzNweFwiIHNob3c9XCJ7e2xhbmcgPT09ICdjbicmJiAhbnVtRmxhZ319XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIGNvbHVtbiBjZW50ZXJcIiBmb3I9XCJ7e2N2YWxMaXN0fX1cIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgc2hvdz0ne3tyZXN1bHRMaXN0Lmxlbmd0aCA+ICRpZHh9fScgY2xhc3M9XCJjYWxidG4wXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwie3tyZXN1bHRMaXN0WyRpZHhdfX1cIiBAY2xpY2s9XCJvblJzU2VsZWN0KHJlc3VsdExpc3RbJGlkeF0pXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjM1cHg7bGVmdDo5NXB4O3dpZHRoOjI5MHB4O2hlaWdodDo2MHB4O2FsaWduLWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO2p1c3RpZnktY29udGVudDogY2VudGVyXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyAmJiAhbnVtRmxhZyAmJiBsYW5nPT09J2VuJ319XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3dpdGNoTnVtJylcIiA+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC8xMjNfYm9hcmRsZXNzLnBuZ1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwhLS0g6L+Z6YeM5L2/55Soc2hvd+S8muWvvOiHtOavj+asoei+k+WFpemDveS8muWKoOi9veWFqOmDqOWAmemAieWIl+ihqO+8jOW+iOWNoSAtLT5cclxuICAgICAgICAgIDxsaXN0IGNsYXNzPVwibGlzdDNcIiBpZj1cInt7ZG93bkZsYWc9PT0nZG93bid9fVwiPlxyXG4gICAgICAgICAgICA8bGlzdC1pdGVtIHR5cGU9XCJ3YWl0aW5nUm93czYyZnVsbFwiIGNsYXNzPVwiaXRlbTNcIiBmb3I9XCJ7e2l0ZW1BcnJheSBpbiByZXN1bHRMaXN0Mn19XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gY29sdW1uIGNlbnRlclwiIHN0eWxlPVwiaGVpZ2h0OjUycHg7XCIgZm9yPVwie3tpdGVtIGluIGl0ZW1BcnJheX19XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJjYWxidG4wXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwie3tpdGVtfX1cIiBAY2xpY2s9XCJvblJzU2VsZWN0KGl0ZW0pXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saXN0LWl0ZW0+XHJcbiAgICAgICAgICA8L2xpc3Q+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDo5OXB4O2xlZnQ6OTVweDt3aWR0aDoyOTRweDtoZWlnaHQ6NjBweDtcIiBzaG93PVwie3tkb3duRmxhZz09PScnJiYhbnVtRmxhZ319XCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRudDlcIiBAY2xpY2s9XCJvblNlbGVjdCgnc2VsZWN0JylcIj7pgInmi6k8L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRudDlcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1sndDknXVswXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW0udG9VcHBlckNhc2UoKX19PC90ZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDoxNjNweDtsZWZ0Ojk1cHg7d2lkdGg6Mjk0cHg7aGVpZ2h0OjYwcHg7XCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyYmIW51bUZsYWd9fVwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3Q5J11bMV19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtLnRvVXBwZXJDYXNlKCl9fTwvdGV4dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MjI3cHg7bGVmdDo5NXB4O3dpZHRoOjI5NHB4O2hlaWdodDo2MHB4O1wiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycmJiFudW1GbGFnfX1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OVwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWyd0OSddWzJdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbS50b1VwcGVyQ2FzZSgpfX08L3RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjM1cHg7bGVmdDo5NXB4O3dpZHRoOjI5NHB4O2hlaWdodDo2MHB4O1wiIHNob3c9XCJ7e251bUZsYWd9fVwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJzcnKVwiPjc8L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRudDlcIiBAY2xpY2s9XCJvblNlbGVjdCgnOCcpXCI+ODwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OVwiIEBjbGljaz1cIm9uU2VsZWN0KCc5JylcIj45PC90ZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDo5OXB4O2xlZnQ6OTVweDt3aWR0aDoyOTRweDtoZWlnaHQ6NjBweDtcIiBzaG93PVwie3tudW1GbGFnfX1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OVwiIEBjbGljaz1cIm9uU2VsZWN0KCc0JylcIj40PC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJzUnKVwiPjU8L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRudDlcIiBAY2xpY2s9XCJvblNlbGVjdCgnNicpXCI+NjwvdGV4dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MTYzcHg7bGVmdDo5NXB4O3dpZHRoOjI5NHB4O2hlaWdodDo2MHB4O1wiIHNob3c9XCJ7e251bUZsYWd9fVwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJzEnKVwiPjE8L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRudDlcIiBAY2xpY2s9XCJvblNlbGVjdCgnMicpXCI+MjwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OVwiIEBjbGljaz1cIm9uU2VsZWN0KCczJylcIj4zPC90ZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDoyMjdweDtsZWZ0Ojk1cHg7d2lkdGg6Mjk0cHg7aGVpZ2h0OjYwcHg7XCIgc2hvdz1cInt7bnVtRmxhZ319XCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRudDlcIiBAY2xpY2s9XCJvblNlbGVjdCgn77yMJylcIj7vvIw8L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRudDlcIiBAY2xpY2s9XCJvblNlbGVjdCgnMCcpXCI+MDwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OVwiIEBjbGljaz1cIm9uU2VsZWN0KCfjgIInKVwiPuOAgjwvdGV4dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy90OS9kZWwucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjM1cHg7bGVmdDozODlweDt3aWR0aDogNjBweDtoZWlnaHQ6IDYwcHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnRCcpXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyB9fVwiIC8+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL3Q5L3NwYWNlLnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDo5OXB4O2xlZnQ6Mzg5cHg7d2lkdGg6IDYwcHg7aGVpZ2h0OiA2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3NwYWNlJylcIiBzaG93PVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnIH19XCIgLz5cclxuICAgICAgICAgIDxpbWcgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjIwNHB4O2xlZnQ6NzhweDtcIiBzcmM9XCIuL2Fzc2V0cy9mdWxsL3VwLnBuZ1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2Rvd24nKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09J2Rvd24nfX1cIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPCEtLSDmlrnlsY82NyAtLT5cclxuICAgICAgPGRpdiBpZj1cInt7c2NyZWVudHlwZT09PSdyZWN0J319XCIgc3R5bGU9XCJ3aWR0aDogMTAwJTtoZWlnaHQ6IDI1NXB4O2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cIj5cclxuICAgICAgICA8IS0tIOS5nemUruS4reaWhyAtLT5cclxuICAgICAgICA8ZGl2IGlmPVwie3trZXlib2FyZHR5cGU9PSdUOScgJiYgIW51bUZsYWd9fVwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOi0xMXB4O3dpZHRoOjEwMCU7aGVpZ2h0OjI3NnB4O2p1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cInRvcDo3N3B4O2hlaWdodDoxODlweDt3aWR0aDoxMDAlO2FsaWduLWl0ZW1zOiBzdHJldGNoO2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtmbGV4LWRpcmVjdGlvbjogY29sdW1uO3BhZGRpbmc6NnB4IDNweFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5Ym9hcmQtcm93cy1yZWN0LXQ5XCI+XHJcbiAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OSBjYWxidG50OS1yZWN0XCIgQGNsaWNrPVwib25TZWxlY3QoJ3NlbGVjdCcpXCI+XHJcbiAgICAgICAgICAgICAgICDpgInmi6lcclxuICAgICAgICAgICAgICAgIDxzcGFuIGlmPVwie3t3YWl0aW5nTGlzdC5sZW5ndGggIT0gMH19XCIgY2xhc3M9XCJ3YWl0aW5nLWtleXNcIiBzdHlsZT1cImNvbG9yOnJnYigxMywxMzIsMjU1KTtcIiBAY2xpY2s9XCJvblNlbGVjdFdhaXRpbmcod2FpdGluZ0luZGV4KVwiPlxyXG4gICAgICAgICAgICAgICAgICB7e3dhaXRpbmdMaXN0W3dhaXRpbmdJbmRleF0udG9VcHBlckNhc2UoKX19XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRudDkgY2FsYnRudDktcmVjdFwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWyd0OSddWzBdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbS50b1VwcGVyQ2FzZSgpfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5Ym9hcmQtcm93cy1yZWN0LXQ5XCI+XHJcbiAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OSBjYWxidG50OS1yZWN0XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3Q5J11bMV19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtLnRvVXBwZXJDYXNlKCl9fTwvdGV4dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlib2FyZC1yb3dzLXJlY3QtdDlcIj5cclxuICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5IGNhbGJ0bnQ5LXJlY3RcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1sndDknXVsyXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW0udG9VcHBlckNhc2UoKX19PC90ZXh0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgZWxzZSBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDotMTFweDt3aWR0aDoxMDAlO2hlaWdodDoyNzZweDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclwiPlxyXG4gICAgICAgICAgPHByb2dyZXNzIHBlcmNlbnQ9XCJ7e3BlcmNlbnQ2N319XCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206IDEycHg7d2lkdGg6ODBweDtjb2xvcjojZmZmZmZmO3N0cm9rZS13aWR0aDo2cHg7bGF5ZXItY29sb3I6IzI2MjYyNjtcIj48L3Byb2dyZXNzPlxyXG4gICAgICAgICAgPHNjcm9sbCBpZD1cImtleWJvYXJkNjdcIiBzY3JvbGwteD1cInt7dHJ1ZX19XCIgb25zY3JvbGw9XCJoYW5kZWxTY3JvbGxcIj5cclxuICAgICAgICAgICAgPGRpdiBpZj1cInt7IW51bUZsYWd9fVwiIHN0eWxlPVwibGVmdDogNnB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDBweDttYXJnaW4tdG9wOiAwcHg7aGVpZ2h0OiA2MHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG42N1wiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydmdWxsJ11bMF19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tbGVmdDogMzJweDttYXJnaW4tdG9wOiAtNXB4O2hlaWdodDogNjBweDtcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuNjdcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snZnVsbCddWzFdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDY0cHg7bWFyZ2luLXRvcDogLTVweDtoZWlnaHQ6IDYwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjY3XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ2Z1bGwnXVsyXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3RhdGljIHNyYz1cIi4vYXNzZXRzL2hvcml6b250YWwvc3BhY2UucG5nXCIgc3R5bGU9XCJ3aWR0aDogNjBweDtoZWlnaHQ6IDYwcHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3BhY2UnKVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGVsc2Ugc3R5bGU9XCJsZWZ0OiA2cHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tbGVmdDogMHB4O21hcmdpbi10b3A6IDBweDtoZWlnaHQ6IDYwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjY3XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ24nXVswXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAzMnB4O21hcmdpbi10b3A6IC01cHg7aGVpZ2h0OiA2MHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG42N1wiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydzaWduJ11bMV19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tbGVmdDogNjRweDttYXJnaW4tdG9wOiAtNXB4O2hlaWdodDogNjBweDtcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuNjdcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snc2lnbiddWzJdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvc2Nyb2xsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMTAwJTsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHRvcDo2cHg7IHBhZGRpbmc6MCA2cHg7XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2hvcml6b250YWwvY24ucG5nXCIgc3R5bGU9XCJwYWRkaW5nOiA2cHg7d2lkdGg6IDYwcHg7aGVpZ2h0OiA2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2xhbmcnKVwiIGlmPVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnICYmIGxhbmc9PT0nY24nfX1cIiAvPlxyXG4gICAgICAgICAgPGRpdiBpZj1cInt7bGFuZyA9PT0gJ2NuJyAmJiAhbnVtRmxhZ319XCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogNnB4O2ZsZXg6IDE7aGVpZ2h0OiA2MHB4O2JhY2tncm91bmQtY29sb3I6IzI2MjYyNjtib3JkZXItY29sb3I6ICMzMzMzMzM7IGJvcmRlci13aWR0aDogM3B4OyBib3JkZXItcmFkaXVzOiAxMDBweDtmbGV4LWRpcmVjdGlvbjogcm93O2FsaWduLWl0ZW1zOmNlbnRlclwiPlxyXG4gICAgICAgICAgICA8c2Nyb2xsIGlkPVwiY3ZhbFdhaXRpbmdcIiBzY3JvbGwteD1cInt7dHJ1ZX19XCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDogODUlO2hlaWdodDogNDJweDtcIj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiAwcHg7aGVpZ2h0OiA0MnB4O3BhZGRpbmctbGVmdDoyMHB4O3BhZGRpbmctcmlnaHQ6MjBweFwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG4wMlwiIHN0eWxlPVwicGFkZGluZy1yaWdodDoxMHB4XCIgQGNsaWNrPVwicHVzaEN2YWxcIj57e2N2YWx9fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGZvcj1cInt7Y3ZhbExpc3R9fVwiIHNob3c9XCJ7e3Jlc3VsdExpc3QubGVuZ3RoID4gJGlkeH19XCIgY2xhc3M9XCJjYWxidG4wMlwiIHN0eWxlPVwicGFkZGluZy1yaWdodDoxMHB4XCIgQGNsaWNrPVwib25Sc1NlbGVjdChyZXN1bHRMaXN0WyRpZHhdKVwiPnt7cmVzdWx0TGlzdFskaWR4XX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3Njcm9sbD5cclxuICAgICAgICAgICAgPGltZyBpZj1cInt7cmVzdWx0TGlzdC5sZW5ndGggPiAwfX1cIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3JpZ2h0OiA4cHg7IHdpZHRoOiA2MHB4O2hlaWdodDogNDBweDtcIiBzcmM9XCIuL2Fzc2V0cy9ob3Jpem9udGFsL2Rvd24yLnBuZ1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2Rvd24nKVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaG9yaXpvbnRhbC9lbi5wbmdcIiBzdHlsZT1cInBhZGRpbmc6IDZweDt3aWR0aDogNjBweDtoZWlnaHQ6IDYwcHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnbGFuZycpXCIgaWY9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgbGFuZz09PSdlbid9fVwiIC8+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2hvcml6b250YWwvYmlnQS5wbmdcIiBzdHlsZT1cInBhZGRpbmc6IDZweDttYXJnaW4tbGVmdDogNnB4O3dpZHRoOjk0cHg7aGVpZ2h0OjYwcHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3dpdGNoTG93JylcIiBpZj1cInt7ZG93bkZsYWc9PT0nJyAmJiB1cHBlckZsYWcgJiYgbGFuZz09PSdlbicmJiAhbnVtRmxhZ319XCIgLz5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaG9yaXpvbnRhbC9hLnBuZ1wiIHN0eWxlPVwicGFkZGluZzogNnB4O21hcmdpbi1sZWZ0OiA2cHg7d2lkdGg6OTRweDtoZWlnaHQ6NjBweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzd2l0Y2hVcHBlcicpXCIgaWY9XCJ7e2Rvd25GbGFnPT09JycgJiYgIXVwcGVyRmxhZyAmJiBsYW5nPT09J2VuJyYmICFudW1GbGFnfX1cIiAvPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9ob3Jpem9udGFsLzEyMy5wbmdcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA2cHg7cGFkZGluZzogNnB4O21hcmdpbi1sZWZ0OiA2cHg7d2lkdGg6IDk0cHg7aGVpZ2h0OiA2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3N3aXRjaE51bScpXCIgaWY9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgbGFuZz09PSdlbid9fVwiIC8+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2hvcml6b250YWwvYmFjazIucG5nXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogNnB4O3BhZGRpbmc6IDZweDt3aWR0aDogMTU5cHg7aGVpZ2h0OiA2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3N3aXRjaENuJylcIiBpZj1cInt7bnVtRmxhZ319XCIgLz5cclxuICAgICAgICAgIDxpbWcgaWY9XCJ7eyFudW1GbGFnfX1cIiBzcmM9XCIuL2Fzc2V0cy9ob3Jpem9udGFsL2RlbC5wbmdcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA2cHg7cGFkZGluZzogNnB4O3dpZHRoOiA2MHB4O2hlaWdodDogNjBweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdEJylcIiAvPlxyXG4gICAgICAgICAgPGltZyBlbHNlIHNyYz1cIi4vYXNzZXRzL2hvcml6b250YWwvZGVsMi5wbmdcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA2cHg7cGFkZGluZzogNnB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ0QnKVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSDov5nph4zkvb/nlKhzaG935Lya5a+86Ie05q+P5qyh6L6T5YWl6YO95Lya5Yqg6L295YWo6YOo5YCZ6YCJ5YiX6KGo77yM5b6I5Y2hIC0tPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMHB4O3RvcDogMHB4O3dpZHRoOiAxMDAlO2hlaWdodDogMjUycHg7YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgYWxpZ24taXRlbXM6Y2VudGVyXCIgaWY9XCJ7e2Rvd25GbGFnPT09J2Rvd24nfX1cIj5cclxuICAgICAgICAgIDxkaXYgc3RhdGljIGNsYXNzPVwibGlzdDY3XCI+XHJcbiAgICAgICAgICAgIDxsaXN0IHN0YXRpYyBzdHlsZT1cIndpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7XCI+XHJcbiAgICAgICAgICAgICAgPGxpc3QtaXRlbSB0eXBlPVwid2FpdGluZ1Jvd3M2N1wiIGNsYXNzPVwiaXRlbTY3XCIgZm9yPVwie3tpdGVtQXJyYXkgaW4gcmVzdWx0TGlzdDJ9fVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gY29sdW1uIGNlbnRlclwiIGZvcj1cInt7aXRlbSBpbiBpdGVtQXJyYXl9fVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJjYWxidG4wMlwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cInt7aXRlbX19XCIgQGNsaWNrPVwib25Sc1NlbGVjdChpdGVtKVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpc3QtaXRlbT5cclxuICAgICAgICAgICAgPC9saXN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW1nIHN0YXRpYyBzdHlsZT1cIm1hcmdpbi10b3A6NXB4XCIgc3JjPVwiLi9hc3NldHMvaG9yaXpvbnRhbC91cDIucG5nXCIgQGNsaWNrPVwib25CdG5DbGljaygnZG93bicpXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwhLS0g6IO25ZuK5bGPNjYgLS0+XHJcbiAgICAgIDxkaXYgaWY9XCJ7e3NjcmVlbnR5cGU9PT0ncGlsbC1zaGFwZWQnfX1cIiBzdHlsZT1cIndpZHRoOiAxMDAlO2hlaWdodDogMzA1cHhcIj5cclxuICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6MHB4O3RvcDozNHB4O3dpZHRoOjEwMCU7aGVpZ2h0OjI3NnB4O1wiPlxyXG4gICAgICAgICAgPHByb2dyZXNzIHBlcmNlbnQ9XCJ7ezMwK3BlcmNlbnQ2Nn19XCIgdHlwZT1cImFyY1wiIHN0eWxlPVwic3RhcnQtYW5nbGU6MjA0ZGVnO3RvdGFsLWFuZ2xlOi00OGRlZzt3aWR0aDoxODhweDtoZWlnaHQ6MTg4cHg7dG9wOjgycHg7bGVmdDoycHg7cG9zaXRpb246YWJzb2x1dGU7Y29sb3I6I2ZmZmZmZjtzdHJva2Utd2lkdGg6NnB4O2xheWVyLWNvbG9yOiMyNjI2MjY7bWFyZ2luLWxlZnQ6IHt7KHNjcmVlbldpZHRoIC0gMTkyKS8yfX1weDtcIj48L3Byb2dyZXNzPlxyXG4gICAgICAgICAgPHNjcm9sbCBpZD1cImtleWJvYXJkNjZcIiBzY3JvbGwteD1cInt7dHJ1ZX19XCIgb25zY3JvbGw9XCJoYW5kZWxTY3JvbGxcIiBzdHlsZT1cInBhZGRpbmctbGVmdDoge3soc2NyZWVuV2lkdGggLSAxOTIpLzJ9fXB4O3BhZGRpbmctcmlnaHQ6IHt7KHNjcmVlbldpZHRoIC0gMTkyKS8yfX1weDtcIj5cclxuICAgICAgICAgICAgPGRpdiBpZj1cInt7IW51bUZsYWd9fVwiIHN0eWxlPVwibGVmdDogM3B4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDBweDttYXJnaW4tdG9wOiAwcHg7aGVpZ2h0OiA2MHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG42NlwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydmdWxsJ11bMF19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tbGVmdDogMzJweDttYXJnaW4tdG9wOiAtNXB4O2hlaWdodDogNjBweDtcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuNjZcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snZnVsbCddWzFdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDY0cHg7bWFyZ2luLXRvcDogLTVweDtoZWlnaHQ6IDYwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjY2XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ2Z1bGwnXVsyXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3RhdGljIHNyYz1cIi4vYXNzZXRzL2FyYy9zcGFjZS5wbmdcIiBzdHlsZT1cIndpZHRoOiA2MHB4O2hlaWdodDogNjBweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzcGFjZScpXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZWxzZSBzdHlsZT1cImxlZnQ6IDNweDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcIj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAwcHg7bWFyZ2luLXRvcDogMHB4O2hlaWdodDogNjBweDtcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuNjZcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snc2lnbiddWzBdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDMycHg7bWFyZ2luLXRvcDogLTVweDtoZWlnaHQ6IDYwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjY2XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ24nXVsxXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA2NHB4O21hcmdpbi10b3A6IC01cHg7aGVpZ2h0OiA2MHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG42NlwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydzaWduJ11bMl19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9zY3JvbGw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDoge3soc2NyZWVuV2lkdGggLSAxOTIpLzJ9fXB4O3RvcDogMHB4O3dpZHRoOiAxOTJweDtoZWlnaHQ6IDExMHB4O1wiPiBcclxuICAgICAgICAgIDxpbWcgc3RhdGljIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDNweDt0b3A6IDQ3cHg7d2lkdGg6IDE4NnB4O2hlaWdodDogNjBweDtcIiBzcmM9XCIuL2Fzc2V0cy9hcmMvc2VhcmNoLnBuZ1wiIC8+XHJcbiAgICAgICAgICA8c2Nyb2xsIGlkPVwiY3ZhbFdhaXRpbmdcIiBzY3JvbGwteD1cInt7dHJ1ZX19XCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMTVweDt0b3A6IDU2cHg7d2lkdGg6IDE0NHB4O2hlaWdodDogNDJweDtcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiAwcHg7dG9wOiAwcHg7aGVpZ2h0OiA0MnB4O3BhZGRpbmctcmlnaHQ6MjBweFwiPlxyXG4gICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuMDJcIiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6MTBweFwiIEBjbGljaz1cInB1c2hDdmFsXCI+e3tjdmFsfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgPHRleHQgZm9yPVwie3tjdmFsTGlzdH19XCIgc2hvdz1cInt7cmVzdWx0TGlzdC5sZW5ndGggPiAkaWR4fX1cIiBjbGFzcz1cImNhbGJ0bjAyXCIgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OjEwcHhcIiBAY2xpY2s9XCJvblJzU2VsZWN0KHJlc3VsdExpc3RbJGlkeF0pXCI+e3tyZXN1bHRMaXN0WyRpZHhdfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9zY3JvbGw+XHJcbiAgICAgICAgICA8aW1nIHNob3c9XCJ7e3Jlc3VsdExpc3QubGVuZ3RoID4gMH19XCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMTIwcHg7dG9wOiA1N3B4O3dpZHRoOiA2MHB4O2hlaWdodDogNDBweDtcIiBzcmM9XCIuL2Fzc2V0cy9hcmMvZG93bjIucG5nXCIgQGNsaWNrPVwib25CdG5DbGljaygnZG93bicpXCIgLz5cclxuICAgICAgICAgIDwhLS0g5bim5Y+Y6YeP55qE55u45a+56Lev5b6E5ZyoIGFpb3QtdG9va2l0IDIuMC40IOS4reS/ruWkjSAtLT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvYXJjL3t7bGFuZ319LnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDowcHg7bGVmdDo5cHg7d2lkdGg6IDQ4cHg7aGVpZ2h0OiA0MnB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2xhbmcnKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWd9fVwiIC8+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2FyYy9iYWNrMi5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MHB4O2xlZnQ6OXB4O3dpZHRoOiA0OHB4O2hlaWdodDogNDJweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzd2l0Y2hDbicpXCIgc2hvdz1cInt7bnVtRmxhZyAmJiBsYW5nPT09J2NuJ319XCIgLz5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvYXJjLzEyMy5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiA3MHB4O3RvcDogMHB4O3dpZHRoOiA1MnB4O2hlaWdodDogNDJweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzd2l0Y2hOdW0nKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgbGFuZz09PSdjbid9fVwiIC8+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2FyYy9iaWdBLnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDowcHg7bGVmdDo3MnB4O3dpZHRoOjQ4cHg7aGVpZ2h0OjQycHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3dpdGNoTG93JylcIiBzaG93PVwie3tkb3duRmxhZz09PScnICYmIHVwcGVyRmxhZyAmJiBsYW5nPT09J2VuJ319XCIgLz5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvYXJjL2EucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjBweDtsZWZ0OjcycHg7d2lkdGg6NDhweDtoZWlnaHQ6NDJweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzd2l0Y2hVcHBlcicpXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyAmJiAhdXBwZXJGbGFnICYmIGxhbmc9PT0nZW4nfX1cIiAvPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9hcmMvZGVsLnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDEzNXB4O3RvcDogMHB4O3dpZHRoOiA0OHB4O2hlaWdodDogNDJweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdEJylcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0g6L+Z6YeM5L2/55Soc2hvd+S8muWvvOiHtOavj+asoei+k+WFpemDveS8muWKoOi9veWFqOmDqOWAmemAieWIl+ihqO+8jOW+iOWNoSAtLT5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDogNDdweDt3aWR0aDogMTAwJTtoZWlnaHQ6IDI2M3B4O2JhY2tncm91bmQtY29sb3I6IGJsYWNrO1wiIGlmPVwie3tkb3duRmxhZz09PSdkb3duJ319XCI+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO2xlZnQ6IHt7KHNjcmVlbldpZHRoIC0gMTkyKS8yfX1weDt3aWR0aDogMTkycHg7aGVpZ2h0OiAyNjNweDtcIj4gXHJcbiAgICAgICAgICAgIDxsaXN0IHN0YXRpYyBjbGFzcz1cImxpc3Q2NlwiPlxyXG4gICAgICAgICAgICAgIDxsaXN0LWl0ZW0gdHlwZT1cIndhaXRpbmdSb3dzNjZcIiBjbGFzcz1cIml0ZW02NlwiIGZvcj1cInt7aXRlbUFycmF5IGluIHJlc3VsdExpc3QyfX1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIGNvbHVtbiBjZW50ZXJcIiBmb3I9XCJ7e2l0ZW0gaW4gaXRlbUFycmF5fX1cIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiY2FsYnRuMFwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cInt7aXRlbX19XCIgQGNsaWNrPVwib25Sc1NlbGVjdChpdGVtKVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpc3QtaXRlbT5cclxuICAgICAgICAgICAgPC9saXN0PlxyXG4gICAgICAgICAgICA8aW1nIHN0YXRpYyBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MTk2cHg7bGVmdDo1NnB4O3dpZHRoOiA4MHB4O2hlaWdodDogNjBweDtcIiBzcmM9XCIuL2Fzc2V0cy9hcmMvdXAyLnBuZ1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2Rvd24nKVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB2aWJyYXRvciBmcm9tIFwiQHN5c3RlbS52aWJyYXRvclwiO1xyXG5pbXBvcnQgZGV2aWNlIGZyb20gJ0BzeXN0ZW0uZGV2aWNlJ1xyXG5pbXBvcnQgeyBTaW1wbGVJbnB1dE1ldGhvZCB9IGZyb20gXCIuL2Fzc2V0cy9kaWNVdGlsLmpzXCI7XHJcbmZ1bmN0aW9uIGRvU2VhcmNoRGljKHdvcmQsIGNiKSB7XHJcbiAgbGV0IGhhbnppID0gU2ltcGxlSW5wdXRNZXRob2QuZ2V0SGFuemkod29yZCk7XHJcbiAgaWYgKGhhbnppICYmIGhhbnppWzBdKSB7XHJcbiAgICBjYihoYW56aVswXSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNiKFtdKTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gZGVsZXRlTGFzdCh0KSB7XHJcbiAgaWYgKHQpIHtcclxuICAgIHJldHVybiB0LnN1YnN0cigwLCB0Lmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuICByZXR1cm4gXCJcIjtcclxufVxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIGhpZGU6IHtcclxuICAgICAgZGVmYXVsdDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBrZXlib2FyZHR5cGU6IHtcclxuICAgICAgZGVmYXVsdDogXCJRV0VSVFlcIixcclxuICAgIH0sXHJcbiAgICBtYXhsZW5ndGg6IHtcclxuICAgICAgZGVmYXVsdDogNSxcclxuICAgIH0sXHJcbiAgICB2aWJyYXRlbW9kZToge1xyXG4gICAgICBkZWZhdWx0OiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHNjcmVlbnR5cGU6IHtcclxuICAgICAgZGVmYXVsdDogXCJjaXJjbGVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBkYXRhOiB7XHJcbiAgICBjdmFsOiBcIlwiLFxyXG4gICAgcmVzdWx0TGlzdDogW10sXHJcbiAgICByZXN1bHRMaXN0MjogW10sXHJcbiAgICB3YWl0aW5nTGlzdDogW10sXHJcbiAgICB3YWl0aW5nSW5kZXg6IC0xLFxyXG4gICAgbGFzdFdhaXRpbmdTdHI6IFwiXCIsXHJcbiAgICBkb3duRmxhZzogXCJcIixcclxuICAgIGxhbmc6IFwiY25cIixcclxuICAgIG51bUZsYWc6IGZhbHNlLFxyXG4gICAgdXBwZXJGbGFnOiBmYWxzZSxcclxuICAgIGN2YWxMaXN0OiBbMCwgMSwgMiwgMywgNF0sXHJcbiAgICBwZXJjZW50Njc6IDUyLFxyXG4gICAgcGVyY2VudDY2OiAwLFxyXG4gICAgLy8g6ZKI5a+5c2NyZWVuU2hhcGXkuLpyZWN055qE6K6+5aSH77yM5Lya6Ieq5Yqo6I635Y+Wc2NyZWVuV2lkdGjlubbnu5HlrprliLDmoLlkaXZcclxuICAgIC8vIOi/meagt+S+v+iDveWQjOaXtumAgumFjW42N+WSjG82NeeUmuiHs+aYr+WQjue7reiuvuWkh++8jOS9huWunumZheaViOaenOWPr+iDveWPl2Rlc2lnbldpZHRo5b2x5ZONXHJcbiAgICBzY3JlZW5XaWR0aDogMzM2LFxyXG4gICAga2V5czoge1xyXG4gICAgICBmdWxsOiBbXHJcbiAgICAgICAgW1wiUVwiLCBcIldcIiwgXCJFXCIsIFwiUlwiLCBcIlRcIiwgXCJZXCIsIFwiVVwiLCBcIklcIiwgXCJPXCIsIFwiUFwiXSxcclxuICAgICAgICBbXCJBXCIsIFwiU1wiLCBcIkRcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJKXCIsIFwiS1wiLCBcIkxcIl0sXHJcbiAgICAgICAgW1wiWlwiLCBcIlhcIiwgXCJDXCIsIFwiVlwiLCBcIkJcIiwgXCJOXCIsIFwiTVwiXSxcclxuICAgICAgXSxcclxuICAgICAgc2lnbjogW1xyXG4gICAgICAgIFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjBcIl0sXHJcbiAgICAgICAgW1wiflwiLCBcIiFcIiwgXCJAXCIsIFwiI1wiLCBcIiVcIiwgXCLigJxcIiwgXCLigJ1cIiwgXCIqXCIsIFwiP1wiLCBcIi9cIl0sXHJcbiAgICAgICAgW1wiKFwiLCBcIilcIiwgXCItXCIsIFwiX1wiLCBcIjpcIiwgXCI7XCIsIFwi77yMXCIsIFwi44CCXCIsIFwiLlwiXSxcclxuICAgICAgXSxcclxuICAgICAgc2lnbjYyOiBbXHJcbiAgICAgICAgW1wiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIl0sXHJcbiAgICAgICAgW1wiIVwiLCBcIkBcIiwgXCIjXCIsIFwiJVwiLCBcIuKAnFwiLCBcIuKAnVwiLCBcIipcIl0sXHJcbiAgICAgICAgW1wiKVwiLCBcIi1cIiwgXCJfXCIsIFwiOlwiLCBcIjtcIl0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGZ1bGw2MjogW1xyXG4gICAgICAgIFtcIldcIiwgXCJFXCIsIFwiUlwiLCBcIlRcIiwgXCJZXCIsIFwiVVwiLCBcIklcIiwgXCJPXCJdLFxyXG4gICAgICAgIFtcIlNcIiwgXCJEXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSlwiLCBcIktcIl0sXHJcbiAgICAgICAgW1wiWFwiLCBcIkNcIiwgXCJWXCIsIFwiQlwiLCBcIk5cIl0sXHJcbiAgICAgIF0sXHJcbiAgICAgIHQ5OiBbXHJcbiAgICAgICAgW1wiYWJjXCIsIFwiZGVmXCJdLFxyXG4gICAgICAgIFtcImdoaVwiLCBcImprbFwiLCBcIm1ub1wiXSxcclxuICAgICAgICBbXCJwcXJzXCIsIFwidHV2XCIsIFwid3h5elwiXSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBvbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5tYXhsZW5ndGgpIHtcclxuICAgICAgY29uc3QgdGVtcEN2YWxMaXN0ID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXhsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRlbXBDdmFsTGlzdC5wdXNoKGkpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY3ZhbExpc3QgPSB0ZW1wQ3ZhbExpc3Q7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zY3JlZW50eXBlID09PSBcInJlY3RcIiB8fCB0aGlzLnNjcmVlbnR5cGUgPT09IFwicGlsbC1zaGFwZWRcIikge1xyXG4gICAgICB0aGlzLmFkanVzdFNjcmVlbldpZHRoKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLiR3YXRjaChcImhpZGVcIiwgXCJ3YXRjaEhpZGVQcm9wc0NoYW5nZVwiKTtcclxuICAgIHRoaXMuJHdhdGNoKFwibWF4bGVuZ3RoXCIsIFwid2F0Y2hNYXhMZW5ndGhQcm9wc0NoYW5nZVwiKTtcclxuICB9LFxyXG4gIGFkZEFsbFR4dCh0eHQpIHtcclxuICAgIHRoaXMuJGVtaXQoXCJjb21wbGV0ZVwiLCB7IGNvbnRlbnQ6IHR4dCB9KTtcclxuICB9LFxyXG4gIG9uUnNTZWxlY3QodHh0KSB7XHJcbiAgICB0aGlzLm9uVmlicmF0ZSgpO1xyXG4gICAgdGhpcy5jdmFsID0gXCJcIjtcclxuICAgIHRoaXMuYWRkQWxsVHh0KHR4dCk7XHJcbiAgICB0aGlzLmNsZWFyV2FpdGluZygpO1xyXG4gICAgdGhpcy5yZXNldFJlc2x1dExpc3QoKTtcclxuICAgIHRoaXMuZG93bkZsYWcgPSBcIlwiO1xyXG4gIH0sXHJcbiAgb25CdG5DbGljayhzaWduKSB7XHJcbiAgICB0aGlzLm9uVmlicmF0ZSgpO1xyXG4gICAgc3dpdGNoIChzaWduKSB7XHJcbiAgICAgIGNhc2UgXCJBQ1wiOlxyXG4gICAgICAgIHRoaXMuY3ZhbCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jbGVhcldhaXRpbmcoKTtcclxuICAgICAgICB0aGlzLnJlc2V0UmVzbHV0TGlzdCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibGFuZ1wiOlxyXG4gICAgICAgIGlmICh0aGlzLmxhbmcgPT09IFwiY25cIikge1xyXG4gICAgICAgICAgdGhpcy5sYW5nID0gXCJlblwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmxhbmcgPSBcImNuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3ZhbCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jbGVhcldhaXRpbmcoKTtcclxuICAgICAgICB0aGlzLnJlc2V0UmVzbHV0TGlzdCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiRFwiOlxyXG4gICAgICAgIGlmICh0aGlzLndhaXRpbmdJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLmNsZWFyV2FpdGluZygpO1xyXG4gICAgICAgICAgdGhpcy5yZXNldFJlc2x1dExpc3QoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3ZhbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLmN2YWwgPSBkZWxldGVMYXN0KHRoaXMuY3ZhbCk7XHJcbiAgICAgICAgICB0aGlzLnJlc2V0UmVzbHV0TGlzdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLiRlbWl0KFwiZGVsZXRlXCIsIHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJzcGFjZVwiOlxyXG4gICAgICAgIHRoaXMuYWRkQWxsVHh0KFwiIFwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImRvd25cIjpcclxuICAgICAgICB0aGlzLmRvd25GbGFnID0gdGhpcy5kb3duRmxhZyA9PT0gXCJkb3duXCIgPyBcIlwiIDogXCJkb3duXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJzZWxlY3RcIjpcclxuICAgICAgICBpZiAodGhpcy5sYXN0V2FpdGluZ1N0ciAhPSBzaWduICYmIHRoaXMubGFzdFdhaXRpbmdTdHIpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmxhbmcgPT09IFwiY25cIikge1xyXG4gICAgICAgICAgICB0aGlzLmN2YWwgKz0gdGhpcy53YWl0aW5nTGlzdFt0aGlzLndhaXRpbmdJbmRleF07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51cHBlckZsYWcpIHtcclxuICAgICAgICAgICAgICB0aGlzLmFkZEFsbFR4dCh0aGlzLndhaXRpbmdMaXN0W3RoaXMud2FpdGluZ0luZGV4XS50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmFkZEFsbFR4dCh0aGlzLndhaXRpbmdMaXN0W3RoaXMud2FpdGluZ0luZGV4XS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5jbGVhcldhaXRpbmcoKTtcclxuICAgICAgICAgIHRoaXMucmVzZXRSZXNsdXRMaXN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwic3dpdGNoTnVtXCI6XHJcbiAgICAgICAgdGhpcy5udW1GbGFnID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmN2YWwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY2xlYXJXYWl0aW5nKCk7XHJcbiAgICAgICAgdGhpcy5yZXNldFJlc2x1dExpc3QoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInN3aXRjaENuXCI6XHJcbiAgICAgICAgdGhpcy5udW1GbGFnID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJzd2l0Y2hVcHBlclwiOlxyXG4gICAgICAgIHRoaXMudXBwZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInN3aXRjaExvd1wiOlxyXG4gICAgICAgIHRoaXMudXBwZXJGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgaWYgKHNpZ24ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZEFsbFR4dChzaWduKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHRoaXMud2FpdGluZ0luZGV4ID49IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGFzdFdhaXRpbmdTdHIgPT09IHNpZ24pIHtcclxuICAgICAgICAgICAgICB0aGlzLndhaXRpbmdJbmRleCsrO1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLndhaXRpbmdJbmRleCA+PSB0aGlzLmxhc3RXYWl0aW5nU3RyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YWl0aW5nSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5sYW5nID09PSBcImNuXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3ZhbCArPSB0aGlzLndhaXRpbmdMaXN0W3RoaXMud2FpdGluZ0luZGV4XTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXBwZXJGbGFnKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQWxsVHh0KFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FpdGluZ0xpc3RbdGhpcy53YWl0aW5nSW5kZXhdLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmFkZEFsbFR4dChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhaXRpbmdMaXN0W3RoaXMud2FpdGluZ0luZGV4XS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0aGlzLmxhc3RXYWl0aW5nU3RyID0gc2lnbjtcclxuICAgICAgICAgICAgICB0aGlzLndhaXRpbmdJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgdGhpcy53YWl0aW5nTGlzdCA9IHNpZ24uc3BsaXQoXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFdhaXRpbmdTdHIgPSBzaWduO1xyXG4gICAgICAgICAgICB0aGlzLndhaXRpbmdJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMud2FpdGluZ0xpc3QgPSBzaWduLnNwbGl0KFwiXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5yZXNldFJlc2x1dExpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjbGVhcldhaXRpbmcoKSB7XHJcbiAgICB0aGlzLndhaXRpbmdMaXN0ID0gW107XHJcbiAgICB0aGlzLndhaXRpbmdJbmRleCA9IC0xO1xyXG4gICAgdGhpcy5sYXN0V2FpdGluZ1N0ciA9IFwiXCI7XHJcbiAgfSxcclxuICAgICAgcmVzZXRSZXNsdXRMaXN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNjcmVlbnR5cGUgIT0gXCJjaXJjbGVcIikge1xyXG4gICAgICAgICAgY29uc3QgY3ZhbFdhaXRpbmdFbGVtZW50ID0gdGhpcy4kZWxlbWVudChcImN2YWxXYWl0aW5nXCIpO1xyXG4gICAgICAgICAgaWYgKGN2YWxXYWl0aW5nRWxlbWVudCkgeyAvLyBBZGQgbnVsbCBjaGVjayBoZXJlXHJcbiAgICAgICAgICAgIGN2YWxXYWl0aW5nRWxlbWVudC5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgd2F0aW5nU3RyID0gXCJcIjtcclxuICAgICAgICBpZiAodGhpcy5sYXN0V2FpdGluZ1N0ciAmJiB0aGlzLmxhc3RXYWl0aW5nU3RyW3RoaXMud2FpdGluZ0luZGV4XSkge1xyXG4gICAgICAgICAgd2F0aW5nU3RyID0gdGhpcy5sYXN0V2FpdGluZ1N0clt0aGlzLndhaXRpbmdJbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghKHRoaXMuY3ZhbCArIHdhdGluZ1N0cikgfHwgdGhpcy5sYW5nICE9IFwiY25cIikge1xyXG4gICAgICAgICAgdGhpcy5yZXN1bHRMaXN0ID0gW107XHJcbiAgICAgICAgICB0aGlzLnNldFJlc3VsdExpc3RBbGwoKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXRSZXN1bHRCeVdvcmQodGhpcy5jdmFsICsgd2F0aW5nU3RyKTtcclxuICAgICAgfSwgIHNldFJlc3VsdExpc3RBbGwoKSB7XHJcbiAgICB0aGlzLnJlc3VsdExpc3QyID0gW107XHJcbiAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZXN1bHRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFycmF5LnB1c2godGhpcy5yZXN1bHRMaXN0W2ldKTtcclxuICAgICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gcGFyc2VJbnQodGhpcy5tYXhsZW5ndGgpKSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRMaXN0Mi5wdXNoKGFycmF5KTtcclxuICAgICAgICBhcnJheSA9IFtdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoYXJyYXkubGVuZ3RoID4gMCAmJiBhcnJheS5sZW5ndGggPCBwYXJzZUludCh0aGlzLm1heGxlbmd0aCkpIHtcclxuICAgICAgdGhpcy5yZXN1bHRMaXN0Mi5wdXNoKGFycmF5KTtcclxuICAgIH1cclxuICB9LFxyXG4gIGdldFJlc3VsdEJ5V29yZCh2YWwpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgZG9TZWFyY2hEaWModmFsLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICB0aGF0LnJlc3VsdExpc3QgPSBkYXRhO1xyXG4gICAgICB0aGF0LnNldFJlc3VsdExpc3RBbGwoKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgb25TZWxlY3QobnVtKSB7XHJcbiAgICB0aGlzLiRlbWl0KFwia2V5RG93blwiLCB7IGNvbnRlbnQ6IG51bSB9KTtcclxuICAgIGlmICh0aGlzLmtleWJvYXJkdHlwZSA9PT0gXCJUOVwiICYmIHRoaXMuc2NyZWVudHlwZSAhPT0gXCJwaWxsLXNoYXBlZFwiKSB7XHJcbiAgICAgIHRoaXMub25CdG5DbGljayhudW0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uVmlicmF0ZSgpO1xyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gXCJjblwiICYmICF0aGlzLm51bUZsYWcpIHtcclxuICAgICAgdGhpcy5jdmFsICs9IG51bS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmxhbmcgPT09IFwiZW5cIiAmJiAhdGhpcy5udW1GbGFnKSB7XHJcbiAgICAgIGlmICh0aGlzLnVwcGVyRmxhZykge1xyXG4gICAgICAgIHRoaXMuYWRkQWxsVHh0KG51bS50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFkZEFsbFR4dChudW0udG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQWxsVHh0KG51bSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlc2V0UmVzbHV0TGlzdCgpO1xyXG4gIH0sXHJcbiAgb25TZWxlY3RXYWl0aW5nKG51bSkge1xyXG4gICAgdGhpcy5vblZpYnJhdGUoKTtcclxuICAgIGlmICh0aGlzLmxhbmcgPT09IFwiY25cIikge1xyXG4gICAgICB0aGlzLmN2YWwgKz0gdGhpcy53YWl0aW5nTGlzdFtudW1dLnRvU3RyaW5nKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy51cHBlckZsYWcpIHtcclxuICAgICAgICB0aGlzLmFkZEFsbFR4dCh0aGlzLndhaXRpbmdMaXN0W251bV0udG9VcHBlckNhc2UoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hZGRBbGxUeHQodGhpcy53YWl0aW5nTGlzdFtudW1dLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsZWFyV2FpdGluZygpO1xyXG4gICAgdGhpcy5yZXNldFJlc2x1dExpc3QoKTtcclxuICB9LFxyXG4gIHdhdGNoSGlkZVByb3BzQ2hhbmdlKG5ld1YsIG9sZFYpIHtcclxuICAgIHRoaXMuJGVtaXQoXCJ2aXNpYmlsaXR5Q2hhbmdlXCIsIHsgdmlzaWJsZTogbmV3ViB9KTtcclxuICB9LFxyXG4gIHdhdGNoTWF4TGVuZ3RoUHJvcHNDaGFuZ2UobmV3Viwgb2xkVikge1xyXG4gICAgaWYgKG5ld1YpIHtcclxuICAgICAgY29uc3QgdGVtcEN2YWxMaXN0ID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3VjsgaSsrKSB7XHJcbiAgICAgICAgdGVtcEN2YWxMaXN0LnB1c2goaSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jdmFsTGlzdCA9IHRlbXBDdmFsTGlzdDtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uVmlicmF0ZSgpIHtcclxuICAgIGlmICh0aGlzLnZpYnJhdGVtb2RlICE9IFwiXCIpIHtcclxuICAgICAgdmlicmF0b3IudmlicmF0ZSh7IG1vZGU6IHRoaXMudmlicmF0ZW1vZGUgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBoYW5kZWxTY3JvbGwoZXZlbnQpIHtcclxuICAgIGxldCBwZXJjZW50VGVtcDY3ID0gKGV2ZW50LnNjcm9sbFggLyA2MzYpICogMTAwICsgNTIuODtcclxuICAgIHRoaXMucGVyY2VudDY3ID0gcGFyc2VJbnQocGVyY2VudFRlbXA2NyA8PSAxMDAgPyBwZXJjZW50VGVtcDY3IDogMTAwKTtcclxuICAgIGxldCBwZXJjZW50VGVtcDY2ID0gKGV2ZW50LnNjcm9sbFggLyA2MzMpICogMTAwO1xyXG4gICAgdGhpcy5wZXJjZW50NjYgPSBwYXJzZUludChwZXJjZW50VGVtcDY2IDw9IDEwMCA/IHBlcmNlbnRUZW1wNjYgOiAxMDApO1xyXG4gIH0sXHJcbiAgcHVzaEN2YWwoKSB7XHJcbiAgICB0aGlzLm9uVmlicmF0ZSgpO1xyXG4gICAgbGV0IHRlbXAgPSB0aGlzLmN2YWw7XHJcbiAgICB0aGlzLmN2YWwgPSBcIlwiO1xyXG4gICAgdGhpcy5jbGVhcldhaXRpbmcoKTtcclxuICAgIHRoaXMucmVzZXRSZXNsdXRMaXN0KCk7XHJcbiAgICB0aGlzLmFkZEFsbFR4dCh0ZW1wKTtcclxuICB9LFxyXG4gIGFkanVzdFNjcmVlbldpZHRoKCl7XHJcbiAgICBkZXZpY2UuZ2V0SW5mbyh7XHJcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5XaWR0aCA9IGRhdGEuc2NyZWVuV2lkdGg7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLnBhZ2Uge1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0bGVmdDowO1xyXG5cdGJvdHRvbTowXHJcbn1cclxuLml0ZW0ge1xyXG5cdGhlaWdodDo1MnB4O1xyXG5cdGZsZXg6MVxyXG59XHJcbi5jYWxidG4wIHtcclxuXHRjb2xvcjojZmZmO1xyXG5cdGZvbnQtc2l6ZToyOHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6cmdiYSgzOCwzOCwzOCwwKTtcclxuXHRib3JkZXItcmFkaXVzOjA7XHJcblx0aGVpZ2h0OjUycHg7XHJcblx0d2lkdGg6NTJweDtcclxuXHR0ZXh0LWFsaWduOmNlbnRlclxyXG59XHJcbi5jYWxidG4wMiB7XHJcblx0Y29sb3I6cmdiKDI1NSwyNTUsMjU1KTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMzgsMzgsMzgsMCk7XHJcblx0Ym9yZGVyLXJhZGl1czowcHg7XHJcblx0Zm9udC1zaXplOjMycHg7XHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0aGVpZ2h0OjQycHg7XHJcbn1cclxuLmNhbGJ0bmZ1bGwge1xyXG5cdGNvbG9yOiNmZmY7XHJcblx0Zm9udC1zaXplOjI0cHg7XHJcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiMyNjI2MjY7XHJcblx0Ym9yZGVyLXJhZGl1czoxMnB4O1xyXG5cdG1hcmdpbi1yaWdodDo0cHg7XHJcblx0aGVpZ2h0OjUycHg7XHJcblx0d2lkdGg6NDBweDtcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRib3JkZXI6M3B4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNilcclxufVxyXG4uY2FsYnRudDkge1xyXG5cdGNvbG9yOiNmZmY7XHJcblx0Zm9udC1zaXplOjI1cHg7XHJcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiMyNjI2MjY7XHJcblx0Ym9yZGVyLXJhZGl1czo5OTlweDtcclxuXHRtYXJnaW4tcmlnaHQ6NHB4O1xyXG5cdHdpZHRoOjk0cHg7XHJcblx0aGVpZ2h0OjYwcHg7XHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0Ym9yZGVyOjNweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpXHJcbn1cclxuLmNhbHRleHQge1xyXG5cdHRleHQtYWxpZ246bGVmdDtcclxuXHRsaW5lLWhlaWdodDozOHB4O1xyXG5cdGxpbmVzOjE7XHJcblx0dGV4dC1vdmVyZmxvdzplbGxpcHNpcztcclxuXHRjb2xvcjojMGQ4NGZmO1xyXG5cdGhlaWdodDo0NXB4O1xyXG5cdGZvbnQtc2l6ZToyOHB4O1xyXG5cdHRleHQtYWxpZ246bGVmdDtcclxuXHRmb250LXdlaWdodDpib2xkO1xyXG5cdHBhZGRpbmctbGVmdDo4cHhcclxufVxyXG4ubGlzdDMge1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdHRvcDozOHB4O1xyXG5cdGxlZnQ6NzhweDtcclxuXHR3aWR0aDozMjRweDtcclxuXHRoZWlnaHQ6MTYwcHg7XHJcblx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzI2MjYyNjtcclxuXHRib3JkZXItcmFkaXVzOjEycHhcclxufVxyXG4uaXRlbTMge1xyXG5cdHdpZHRoOjMyNHB4O1xyXG5cdGhlaWdodDo1MnB4XHJcbn1cclxuLmNhbGJ0bjY3IHtcclxuXHRjb2xvcjpyZ2IoMjU1LDI1NSwyNTUpO1xyXG5cdGZvbnQtc2l6ZTozMnB4O1xyXG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjpyZ2IoMzgsMzgsMzgpO1xyXG5cdG1hcmdpbi1yaWdodDo0cHg7XHJcblx0d2lkdGg6NjBweDtcclxuXHRoZWlnaHQ6NjBweDtcclxuXHRib3JkZXItcmFkaXVzOjMwcHg7XHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0Ym9yZGVyOjNweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpO1xyXG59XHJcbiNrZXlib2FyZDY3IHtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRsZWZ0OjBweDtcclxuXHR0b3A6ODJweDtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGhlaWdodDoxNzBweDtcclxufVxyXG4ja2V5Ym9hcmQ2NiB7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0bGVmdDowcHg7XHJcblx0dG9wOjgycHg7XHJcblx0d2lkdGg6MTAwJTtcclxuXHRoZWlnaHQ6MTcwcHg7XHJcbn1cclxuLmxpc3Q2NyB7XHJcblx0dG9wOjBweDtcclxuXHR3aWR0aDo5Ni40JTtcclxuXHRoZWlnaHQ6MTcwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czozMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzI2MjYyNjtcclxuXHRib3JkZXI6M3B4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XHJcblx0cGFkZGluZzowcHggMTBweDtcclxufVxyXG4uaXRlbTY3IHtcclxuXHRoZWlnaHQ6NTBweDtcclxufVxyXG4uY2FsYnRuNjYge1xyXG5cdGNvbG9yOnJnYigyNTUsMjU1LDI1NSk7XHJcblx0Zm9udC1zaXplOjMycHg7XHJcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYigzOCwzOCwzOCk7XHJcblx0bWFyZ2luLXJpZ2h0OjNweDtcclxuXHR3aWR0aDo2MHB4O1xyXG5cdGhlaWdodDo2MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6MzBweDtcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRib3JkZXI6M3B4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XHJcbn1cclxuLmxpc3Q2NiB7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0bGVmdDozcHg7XHJcblx0dG9wOjBweDtcclxuXHR3aWR0aDoxODZweDtcclxuXHRoZWlnaHQ6MTg2cHg7XHJcblx0Ym9yZGVyLXJhZGl1czozMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzI2MjYyNjtcclxuXHRib3JkZXI6M3B4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XHJcblx0cGFkZGluZzoxMHB4XHJcbn1cclxuLml0ZW02NiB7XHJcblx0aGVpZ2h0OjQycHg7XHJcbn1cclxuLndhaXRpbmcta2V5cyB7XHJcblx0d2lkdGg6MzZweDtcclxuXHRoZWlnaHQ6NDBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5rZXlib2FyZC1yb3dzLXJlY3QtdDkgeyBcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGhlaWdodDogNTVweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhbGJ0bnQ5LXJlY3QgeyBcclxuICBmbGV4OjE7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIG1hcmdpbjogMCAzcHg7XHJcbiAgd2lkdGg6IHVuc2V0O1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIi8qKlxyXG4gKiDmlLblvZXluLjnlKjmsYnlrZc2NzYz5Liq77yM5LiN5pSv5oyB5aOw6LCD77yM5pSv5oyB5aSa6Z+z5a2X77yM5bm25oyJ54Wn5rGJ5a2X5L2/55So6aKR546H55Sx5L2O5Yiw6auY5o6S5bqPXHJcbiAqL1xyXG5jb25zdCBkaWN0ID0ge1wiYVwiOlwi6Zi/5ZWK5ZG16IWM5ZeE5ZCW6ZSVXCIsXCJlXCI6XCLpop3pmL/kv4TmgbbpuYXpgY/phILljoTppb/ls6jmibzlqKXps4Tlk6bom77lmanmhJXorrnplLflnqnlqYDpuZfokLzosJTojqroha3plIfpoprlkYPpmI/lsZnoi4rova1cIixcImFpXCI6XCLniLHln4Poib7noo3nmYzlk4DmjKjnn67pmpjolLzllInnmpHlk47pnK3mjbHmmqflq5Lll7Pnkbfll4zplL/noLlcIixcImVpXCI6XCLor7ZcIixcInhpXCI6XCLns7vopb/luK3mga/luIzkuaDlkLjllpznu4bmnpDmiI/mtJfmgonplKHmuqrmg5znqIDooq3lpJXmtJLmmbDmmJTnibrohYrng6/nhpnlqrPmoJbohp3pmpnnioDouYrnoZLlha7nhoTmm6bnpqflrInnjrrlpZrmsZDlvpnnvrLpk6Pmt4XlmLvmrZnnhrnnn73on4vpg5fllI/nmpnpmrDmqKjmtaDlv77onKXmqoTpg4Tnv5XpmIvps4PoiL7lsaPokbjonoXlkq3nsp7op4vmrLflg5bphq/pvLfoo7znqbjppanoiITnporor7boj6Xok7BcIixcInlpXCI6XCLkuIDku6Xlt7LmhI/orq7kuYnnm4rkur/mmJPljLvoibrpo5/kvp3np7vooaPlvILkvIrku6rlrpzlsITpgZfnlpHmr4XosIrkuqbnlqvlvbnlv4bmipHlsL7kuZnor5Hnv7zom4fmuqLmpIXmsoLms4TpgLjomoHlpLfpgpHmgKHnu47lvZ3oo5Tlp6jnhqDotLvnn6PlsbnpopDlgJror6Pog7DlpZXnv4znlpnlvIjovbbom77pqb/lo7nnjJfoh4blvIvpk7Hml5bmvKrov6TkvZrnv4ror5LmgL/nl43mh7/ppbTls4Tmj5bnnJnplZLku6Hpu5/ogoTlkr/nv7PmjLnnvKLlkZPliIjlkqbltrfnvr/pkofmrqrojZHolo/onLTplbHlmavnmZToi6HmgpLll4znmJfooaTkvb7ln7jlnK/oiKPphY/lipNcIixcImFuXCI6XCLlronmoYjmjInlsrjmmpfpno3msKjkv7rog7rpk7XosJnlurXpu6/puYzmoYnln6/nirTmj57ljoLlub9cIixcImhhblwiOlwi5Y6C5rGJ6Z+p5ZCr5pex5a+S5rGX5ra15Ye95ZaK5oa+572V54SK57+w6YKv5pK854Ca5oao5o2N6YWj5oKN6by+6YKX6aKU6Jq25pmX6I+h5pew6aG454q054ST5pKWXCIsXCJhbmdcIjpcIuaYguS7sOebjuiCrlwiLFwiYW9cIjpcIuWlpea+s+WCsueGrOWHuemzjOaVlumBqOmPluiihOWds+e/seWXt+aLl+aHiuWymeier+mqnOeNkumPiuiJueWqquW7kuiBsVwiLFwid2FcIjpcIueTpuaMluWog+a0vOiinOibmeWHueWTh+S9pOWosuWRmeiFvVwiLFwieXVcIjpcIuS6juS4juiCsuS9memihOWfn+S6iOmBh+WlpeivreiqieeOiemxvOmbqOa4lOijleaEiOWoseassuWQgeiIhuWuh+e+vemAvuixq+mDgeWvk+WQvueLseWWu+W+oea1tOaEieemueS/numCquamhuaEmua4neWwiea3pOiZnuWxv+WzqueypempreeRnOemuuavk+mSsOmaheiKi+eGqOeYgOi/gueFnOaYseaxqeaWvOiHvuebguiBv+erveiQuOWmquiFtOWchOiwleinjuaPhOm+ieiwgOS/o+mmgOW6vuWmpOeYkOmsu+aspOm5rOmYiOW1m+mbqem5huWcieicruS8m+e6oeeqrOeqs+mlq+iTo+eLs+iCgOiIgeidk+eHoFwiLFwibml1XCI6XCLniZvnur3mia3pkq7mi5flpp7lv7jni4NcIixcIm9cIjpcIuWTpuWZouWWlFwiLFwiYmFcIjpcIuaKiuWFq+W3tOaLlOS8r+WQp+WdneeIuOmcuOe9ouiKrei3i+aJkuWPremdtueWpOeshuiAmemyheeykeWynOeBnumSr+aNjOiPnemtg+iMh1wiLFwicGFcIjpcIuaAleW4leeIrOaJkui2tOeQtuWVquiRqeiAmeadt+mSr+etolwiLFwicGlcIjpcIuiiq+aJueWJr+WQpuearuWdj+i+n+WVpOWMueaKq+eWsue9ouWDu+avl+Wdr+iEvuitrOWKiOWqsuWxgeeQtemCs+ijqOeXnueZlumZguS4leaeh+WZvOmcueWQoee6sOegkumTjea3oOmDq+WfpOa/nuedpeiKmOiajeWcrum8mee9tOicseeWi+iylOS7s+W6gOaTl+eUk+mZtFwiLFwiYmlcIjpcIuavlOW/heW4geeslOavleenmOmBv+mXreS9m+i+n+WjgeW8iuW9vOmAvOeip+m8u+iHguiUveaLguazjOeSp+W6h+eXueavmeW8vOWMlemEmemZm+ijqOi0suaVneiTluWQoeevpue6sOS/vumTi+avluetmuiNuOiWnOWpouWTlOi3uOa/nuenleiNnOaEjuedpeWmo+iKmOeuhemrgOeVgOa7l+eLtOiQhuWsluilnuiIrVwiLFwiYmFpXCI6XCLnmb7nmb3otKXmkYbkvK/mi5zmn4/kvbDmjrDlkZfmk5jmja3nqJdcIixcImJvXCI6XCLms6LljZrmkq3li4Pmi6joloTkvZvkvK/njrvmkI/mn4/ms4roiLbliaXmuKTljZzpqbPnsL/ohJbohornsLjoj6DnpLTnrpTpk4LkurPpkrXluJvmk5jppb3ot5vpkrnotrXmqpfllbXpuYHmk5fouKNcIixcImJlaVwiOlwi5YyX6KKr5aSH5YCN6IOM5p2v5YuD6LSd6L6I5oKy56KR6IeC5Y2R5oKW5oOr6JOT6ZmC6ZKh54uI5ZGX54SZ56Ka6KSZ5bqz6Z605a2b6bmO6YK26ZC+XCIsXCJiYW5cIjpcIuWKnueJiOWNiuePreiIrOadv+migeS8tOaQrOaWkeaJruaLjOaJs+eTo+WdgumYque7iumSo+eYouiIqOeZjVwiLFwicGFuXCI6XCLliKTnm5jnlarmvZjmlIDnm7zmi5rnlZTog5blj5vmi4zouZLno5DniL/on6Dms67ooqLopbvkuKxcIixcImJpblwiOlwi5Lu95a6+6aKR5ruo5paM5b2s5r+S5q6h57yk6ayT5qef5pGI6IaR546i6ZWU6LGz6auM5YKnXCIsXCJiYW5nXCI6XCLluK7pgqblva3ml4Hmppzmo5LohoDplZHnu5Hlgo3no4XomozosKTmoobmtZzokqFcIixcInBhbmdcIjpcIuaXgeW6nuS5k+ejheieg+W9t+a7gumAhOiAqlwiLFwiYmVuZ1wiOlwi5rO15bSp6JqM6Lmm6L+457u355St5Zij55SP5aCLXCIsXCJiYW9cIjpcIuaKpeS/neWMheWuneaatOiDnuiWhOeIhueCrumlseaKseWgoeWJpemyjeabneiRhueAkeixueWIqOikkumbueWtouiLnueFsuikk+i2tem4qOm+heWLuVwiLFwiYnVcIjpcIuS4jemDqOatpeW4g+ihpeaNleWgoeWflOWNnOWfoOewv+WTuuaAlumSmuWNn+eTv+mAi+aZoemGremSuFwiLFwicHVcIjpcIuaZruaatOmTuua1puactOWgoeiRoeiwseWflOaJkeS7huiSsuabneeAkea6peiOhuWcg+eSnua/ruiPqei5vOWMjeWZl+awhuaUtemVqOaUtOmVpFwiLFwibWlhblwiOlwi6Z2i5qOJ5YWN57u157yF5YuJ55yg5YaV5aip6IW85riR5rmO5rKU6bu+5a6A55yEXCIsXCJwb1wiOlwi56C057mB5Z2h6L+r6aKH5py05rOK5amG5rO86a2E57KV6YSx54+A6ZmC5Y+156y45rO655qk6ZKL6ZK3XCIsXCJmYW5cIjpcIuWPjeiMg+eKr+e5gemlreazm+e/u+WHoei/lOeVqui0qeeDpuaLmuW4huaoiuiXqeefvuaiteiVg+mSkuW5oeeViOiYqei5r+eHlFwiLFwiZnVcIjpcIuW6nOacjeWJr+i0n+WvjOWkjeemj+Wkq+Wmh+W5heS7mOaJtueItuespumZhOiFkOi1tOS9m+a1ruimhui+heWCheS8j+aKmui1i+i+kOiFueW8l+iCpOmYnOiisee8mueUq+awn+aWp+WtmuaVt+S/r+aLguS/mOWSkOiFkeWtteiKmea2qumHnOiEr+iMr+mmpeWuk+e7guiuo+WRi+e9mOm6uOidoOWMkOiKvuiciei3l+WHq+a7j+idrumpuOe7i+iaqOegqeahtOi1meiPlOWRkui2uuiLu+aLiumYnemyi+aAq+eog+mDm+iOqeW5nuelk+iJtOm7u+m7vOmzhlwiLFwiYmVuXCI6XCLmnKzkvZPlpZToi6/nrKjlpK/otLLplJvnlZrlnYxcIixcImZlbmdcIjpcIumjjuS4sOWwgeWzsOWlieWHpOmUi+WGr+mAoue8neicguaeq+eWr+iuveeDveS/uOayo+mFhuegnOiRkeWUqlwiLFwiYmlhblwiOlwi5Y+Y5L6/6L6557yW6YGN6L6p6Z6t6L6o6LSs5Yy+5omB5Y2e5rG06L6r56Ct6IuE6J2Z6bOK5byB56qG56y+54W46KSK56Kl5b+t57yPXCIsXCJwaWFuXCI6XCLkvr/niYfnr4flgY/pqpfnv6nmiYHpqojog7zouYHosJ3nio/nvI9cIixcInpoZW5cIjpcIumVh+ecn+mSiOWcs+aMr+mch+ePjemYteiviuWhq+S+puiHu+i0nuaeleahoui1iOelr+W4p+eUhOaWn+e8nOeutOeWueegp+amm+m4qei9uOeouea6seiTgeiDl+akueacleeVm+a1iFwiLFwiYmlhb1wiOlwi6KGo5qCH5b2q6ZWW6KOx6aOa6IaY6aOZ6ZWz5amK6aqg6aOR5p2T6auf6bOU54Gs55itXCIsXCJwaWFvXCI6XCLnpajmnLTmvILpo5jlq5bnk6Llib3nvKXmro3nnp/pqqDlmIzojqnonrVcIixcImh1b1wiOlwi5ZKM5rS75oiW6LSn6I6354Gr5LyZ5oOR6ZyN56W46LGB5Zqv6Je/6ZSq6KCW6ZKs6ICg6ZWs5aSl54Gs5YqQ5pSJXCIsXCJiaWVcIjpcIuWIq+mzluaGi+eYqui5qVwiLFwibWluXCI6XCLmsJHmlY/pl73pl7Xnmr/ms6/lsrfmgq/nj4nmir/pu77nvJfnjp/mhI3oi6Dps5hcIixcImZlblwiOlwi5YiG5Lu957q35aWL57KJ5rCb6Iqs5oSk57Kq5Z2f5rG+54Sa6YWa5ZCp5b+/5qO8546i6byi54C15YG+6bK8XCIsXCJiaW5nXCI6XCLlubbnl4XlhbXlhrDlsY/ppbzngrPnp4nkuJnmkZLmn4Tmp5/npoDmnovpgrTlhqtcIixcImdlbmdcIjpcIuabtOiAlemiiOW6muiAv+ail+Wfgue+ueWTvei1k+e7oOmyoFwiLFwiZmFuZ1wiOlwi5pa55pS+5oi/6Ziy6K6/57q66Iqz5Lu/5Z2K5aao6IKq6YKh6Iir5b235p6L6bKC5Yya6ZKrXCIsXCJ4aWFuXCI6XCLnjrDlhYjljr/op4Hnur/pmZDmmL7pmannjK7pspzmtJflrqrnuqTpmbfpl7LotKTku5nooZTmjoDlkrjlq4zmjrrnvqHlvKbohbrnl6vlqLToiLfppoXphbDpk6Plhrzmto7mmrnnsbzplKjoi4vomqzot7nlspjol5Pnh7npuYfmsJnojrbpnLDot6PnjIPlvaHnpYbnrYVcIixcImZvdVwiOlwi5LiN5ZCm57y2XCIsXCJjYVwiOlwi5ouG5pOm5ZqT56SkXCIsXCJjaGFcIjpcIuafpeWvn+W3ruiMtuaPkuWPieWIueiMrOalguWylOivp+eitOWak+WWs+WnueadiOaxiuihqeaQveanjumVsuiLtOaqq+mmh+mUuOeMuVwiLFwiY2FpXCI6XCLmiY3ph4fotKLmnZDoj5zlvanoo4HolKHnjJzouKnnnaxcIixcImNhblwiOlwi5Y+C5q6L6aSQ54G/5oOo6JqV5o6655Ko5oOt57Ky5a2x6aqW6buqXCIsXCJzaGVuXCI6XCLkv6Hmt7Hlj4LouqvnpZ7ku4DlrqHnlLPnlJrmsojkvLjmhY7muJfogr7nu4XojpjlkbvlqbblqKDnoLfonIPlk4LmpLnokZrlkLLns4HmuJbor5zosILnn6fog4JcIixcImNlblwiOlwi5Y+C5bKR5raUXCIsXCJzYW5cIjpcIuS4ieWPguaVo+S8nuWPgeezgemmk+avtVwiLFwiY2FuZ1wiOlwi6JeP5LuT6IuN5rKn6Iix6Ien5LynXCIsXCJ6YW5nXCI6XCLol4/ohI/okazotYPoh6flpZjpqbVcIixcImNoZW5cIjpcIuensOmZiOayiOayieaZqOeQm+iHo+WwmOi+sOihrOi2geW/semDtOWuuOiwjOeinOWXlOaKu+amh+S8p+iwtum+gOiCnFwiLFwiY2FvXCI6XCLojYnmk43mm7nmp73ns5nlmIjmvJXonqzoiZrlsa5cIixcImNlXCI6XCLnrZbmtYvlhozkvqfljpXmoIXmgbtcIixcInplXCI6XCLotKPliJnms73mi6nkvqflkovllafku4TnrqbotZznrK7oiLTmmIPov67luLtcIixcInpoYWlcIjpcIuWAuuaLqem9kOWuheWvqOS+p+aRmOeqhOaWi+elree/n+egpueYteWTnFwiLFwiZGFvXCI6XCLliLDpgZPlr7zlspvlgJLliIDnm5fnqLvouYjmgrzmjaPlj6jnpbfnhJjmsJjnupvliILluLHlv4lcIixcImNlbmdcIjpcIuWxguabvui5reWZjFwiLFwiemhhXCI6XCLmn6XmiY7ngrjor4jpl7jmuKPlkovkuY3mpqjmpYLmnK3moIXnnKjlkqTmn57llrPllovpk6HomrHlkJLmgI3noJ/mj7jnl4Tlk7PpvYRcIixcImNoYWlcIjpcIuW3ruaLhuaftOmSl+ixuuS+quiZv+eYpVwiLFwiY2lcIjpcIuasoeatpOW3ruivjei+nuWIuueTt+ejgeWFueaFiOiMqOi1kOeloOS8uumbjOeWtem5muezjeWRsueyolwiLFwiemlcIjpcIui1hOiHquWtkOWtl+m9kOWSqOa7i+S7lOWnv+e0q+WFueWtnOa3hOexveaik+myu+a4jeWniuWQseenreaBo+eUvuWts+iovua7k+mUsei+jui2kem+h+i1gOecpue8geWRsuesq+iwmOW1q+mrreiMiOeyouinnOiAlFwiLFwiY3VvXCI6XCLmjqrplJnno4vmjKvmkJPmkq7ouYnplInljp3lta/nl6Tnn6znmKXohJ7pub5cIixcImNoYW5cIjpcIuS6p+WNlemYkOW0ree8oOaOuuemhemipOmTsuidieaQgOa9uuifvummi+W/j+WpteWtseinh+W7m+iwhOiwl+a+tumqo+e+vOi6lOiSh+WGgVwiLFwic2hhblwiOlwi5bGx5Y2V5ZaE6ZmV6Zeq6KGr5pOF5rGV5omH5o6654+K56aF5Yig6Iaz57yu6LWh6YSv5qCF54W95aeX6Lea6bOd5ayX5r246K6q6Iii6Iur55ad5o646Ia76ZKQ5Ymh6J+u6Iqf5Z+P5b2h6aqfXCIsXCJ6aGFuXCI6XCLlsZXmiJjljaDnq5nltK3nspjmuZvmsr7nnrvpoqToqbnmlqnnm4/ovpfnu73mr6HmoIjomLjml4PosLXmkIxcIixcInhpblwiOlwi5paw5b+D5L+h6L6b5qyj6Jaq6aao6ZGr6Iqv6ZSM5b+76I6Y5piV6KGF5q2G5Zuf5b+E6ZWhXCIsXCJsaWFuXCI6XCLogZTov57nu4Plu4nngrzohLjojrLmgYvpk77luJjmgJzmtp/mlZvnkI/plbDmv4LmpZ3psqLmrpPmvYvoo6Loo6Poh4HlpYHojrbooIrolLlcIixcImNoYW5nXCI6XCLlnLrplb/ljoLluLjlgb/mmIzllLHnlYXlgKHlsJ3ogqDmlZ7lgJjnjJblqLzmt4zoo7PlvpzmmLbmgIXlq6boj5bpsrPpmIrkvKXoi4zmsIXmg53prK9cIixcInpoYW5nXCI6XCLplb/lvKDnq6DpmpzmtqjmjozluJDog4DlvbDkuIjku5fmvLPmqJ/otKbmnZbnkovltoLku4nnmLTon5HnjZDluZvphKPlq5xcIixcImNoYW9cIjpcIui2heacnea9rueCkumSnuaKhOW3ouWQteWJv+e7sOWYsuaZgeeEr+iAluaAilwiLFwiemhhb1wiOlwi552A54Wn5oub5om+5Y+s5pyd6LW15YWG5pit6IKH572p6ZKK5rK85Ziy54iq6K+P5r+v5ZWB5qO556yKXCIsXCJ6aG91XCI6XCLosIPlt57lkajmtLLoiJ/pqqTovbTmmLzlrpnnsqXnmrHogpjlkpLluJrog4Tnu4nnuqPlpq/llYHor4znuYfnoqHnsYDphY7oja5cIixcImNoZVwiOlwi6L2m5b275pKk5bC65omv5r6I5o6j5Z2856CX5bGuXCIsXCJqdVwiOlwi6L2m5bGA5o2u5YW35Li+5LiU5bGF5Ymn5beo6IGa5rig6Led5Y+l5ouS5L+x5p+c6I+K5ouY54Ks5qGU5oOn55+p6Z6g6am56ZSv6Lie5ZKA556/5p645o6s5rKu6I6S5qmY6aOT55a96ZKc6LaE6Li96YG955Ca6b6D5qSQ6Iuj6KO+5qaY54uZ5YCo5qaJ6Iu06K616ZuO6ZSU56qt6Z6r54qL5bGm6Ya1XCIsXCJjaGVuZ1wiOlwi5oiQ56iL5Z+O5om/56ew55ub5oqi5LmY6K+a5ZGI5YeA5oOp5pKR5r6E56ek5qmZ6aqL6YCe556g5Lie5pmf6ZOb5Z+V5aGN6JuP5p+96ZOW6YWy6KOO5p6oXCIsXCJyb25nXCI6XCLlrrnojaPono3nu5Lmurbok4nnhpTmiI7mppXojLjlhpfltZjogpzni6jonb5cIixcInNoZW5nXCI6XCLnlJ/lo7DljYfog5znm5vkuZjlnKPliannibLnlLjnnIHnu7PnrJnnlKXltYrmmZ/muJHnnJpcIixcImRlbmdcIjpcIuetieeZu+mCk+eBr+a+hOWHs+eequi5rOWZlOejtOW2nemVq+ewpuaIpVwiLFwiemhpXCI6XCLliLbkuYvmsrvotKjogYzlj6rlv5foh7PmjIfnu4fmlK/lgLznn6Xor4bnm7Toh7Tmiafnva7mraLmpI3nurjmi5Pmmbrmrpbnp6nml6jlnYDmu57msI/mnp3oip3ohILluJzmsYHogqLmjJrnqJrpha/mjrfls5nngpnmoInkvoToirfnqpLlkqvlkLHotr7nl5TonJjpg4XmoY7pm4nnpYnpg6bpmZ/nl6Pom63luJnmnrPouK/lvrXog53moIDotL3npZfosbjpuLfmka3ovbXlja7ovb7lvZjop6/ntbfot5bln7TlpILpu7nlv67pqpjohqPouKxcIixcInpoZW5nXCI6XCLmlL/mraPor4HkuonmlbTlvoHpg5HkuIHnl4fmjKPokrjnnYHpk67nrZ3mi6/ls6XmgJTor6Tni7DlvrXpkrJcIixcInRhbmdcIjpcIuWgguWUkOezluaxpOWhmOi6uui2n+WAmOajoOeDq+a3jOiGm+aQqumVl+WCpeies+a6j+W4kee+sOaomOmGo+iel+iApemTtOeRrVwiLFwiY2hpXCI6XCLmjIHlkIPmsaDov5/otaTpqbDlsLrmlqXpvb/nv4XljJnnl7TogLvngr3kvojlvJvlj7HllbvlnbvnnJnll6TlooDlk6fojIzosYnmlZXnrJ7ppazouJ/omqnmn6LlqrjprZHnr6ropKvlvbPpuLHonq3nmJvnnLXlgrpcIixcInNoaVwiOlwi5piv5pe25a6e5LqL5biC5Y2B5L2/5LiW5pa95byP5Yq/6KeG6K+G5biI5Y+y56S655+z6aOf5aeL5aOr5aSx6YCC6K+V5LuA5rO95a6k5Ly86K+X6aWw5q6W6YeK6am25rCP56GV6YCd5rm/6JqA54uu6KqT5ou+5bC45YyZ5LuV5p+/55+i5bOZ5L6N5Zms5Zec5qCF5out5ZiY5bGO5oGD6L286Jmx6ICG6IiQ6I6z6ZOI6LCl54K76LGV6bKl6aWj6J6r6YW+562u5Z+Y5byR56S76JON6bK66LSzXCIsXCJxaVwiOlwi5LyB5YW26LW35pyf5rCU5LiD5Zmo5rG95aWH6b2Q5ZCv5peX5qOL5aa75byD5o+t5p6d5q2n5qy66aqR5aWR6L+E5Lqf5ryG5oia5bKC56i95bKQ55Cm5qCW57yJ55Cq5rOj5Lme56CM56WB5bSO57uu56W656WI5YeE5reH5p2e6ISQ6bqS5Zy75oap6Iqq5LyO5L+f55Wm6ICG6JG65rKP6JCL6aqQ6bON57am6K6r6JWy5bG66aKA5LqT56Kb5p+S5ZWQ5rGU57au6JCB5ZiB6Ju05qet5qy56IqR5qGk5LiM6JyeXCIsXCJjaHVhaVwiOlwi5o+j6Li55ZWc5pCL6IaqXCIsXCJ0dW9cIjpcIuaJmOiEseaLk+aLluWmpempvOmZgOaysem4tempruWUvuakreWdqOS9l+ego+i3juW6ueafgeapkOS5h+mTiuaysumFoem8jeeuqOafnVwiLFwiZHVvXCI6XCLlpJrluqblpLrmnLXourLpk47pmovlkoTloJXoiLXlnpvmg7Dlk4bouLHot7rmjofliYHmn4HnvI3msrLoo7Dlk5rpmrNcIixcInh1ZVwiOlwi5a2m6KGA6Zuq5YmK6Jab56m06Z206LCR5Zmx6bOV6LiF5rO25b2QXCIsXCJjaG9uZ1wiOlwi6YeN56eN5YWF5Yay5raM5bSH6Jmr5a6g5b+h5oan6IiC6Iy66ZOz6ImfXCIsXCJjaG91XCI6XCLnrbnmir3nu7jphazmhIHkuJHoh63ku4fnlbTnqKDnnoXouIzmg4bkv6bnmLPpm6DluLFcIixcInFpdVwiOlwi5rGC55CD56eL5LiY6YKx5LuH6YWL6KOY6b6f5Zua6YGS6bOF6Jms6Jqv5rOF5qW45rmr54qw6YCR5bev6Im95L+F6J2k6LWH6by957OXXCIsXCJ4aXVcIjpcIuS/ruengOS8keWuv+iilue7o+iHreacvemUiOe+nuWXheWyq+a6tOW6pemmkOWSu+mruem4uuiyhVwiLFwiY2h1XCI6XCLlh7rlpITnoYDliJ3liqnpmaTlgqjnlZzop6bmpZrljqjpm4/nn5fmqbHplITmu4HouofmgLXnu4zmkJDliI3onI3pu5zmnbXoubDkuo3mqJfmhrfmpa5cIixcInR1YW5cIjpcIuWbouaPo+a5jeeWg+aKn+W9llwiLFwiemh1aVwiOlwi6L+95Z2g57yA5o+j5qSO6ZSl6LWY5oO06Zq56aqT57ySXCIsXCJjaHVhblwiOlwi5Lyg5bed6Ii556m/5Liy5ZaY5qS96Iib6ZKP6YGE5rCa5beb6IihXCIsXCJ6aHVhblwiOlwi5LiT6L2s5Lyg6LWa56CW5pKw56+G6aaU5ZWt6aKbXCIsXCJ5dWFuXCI6XCLlhYPlkZjpmaLljp/mupDov5zmhL/lm63mj7TlnIbnvJjoooHmgKjmuIroi5HlrpvlhqTlqpvnjL/lnqPmsoXloazlnrjpuLPovpXpuKLnkZflnJzniLDoiqvpvIvmqbzonojnnKLnrqLmjr5cIixcImN1YW5cIjpcIueqnOaUkuevoei5v+aSuueIqOaxhumVqVwiLFwiY2h1YW5nXCI6XCLliJvluornqpfpl6/luaLnlq7mgIZcIixcInpodWFuZ1wiOlwi6KOF54q25bqE5aOu5pKe5aaG5bmi5qGp5aWY5YOu5oiGXCIsXCJjaHVpXCI6XCLlkLnlnoLplKTngormpI7pmbLmp4zmjbbmo7BcIixcImNodW5cIjpcIuaYpee6r+mGh+a3s+WUh+akv+igoum5keackOiOvOiCq+idvVwiLFwiemh1blwiOlwi5YeG5bGv5rez6LCG6IKr56qAXCIsXCJjdVwiOlwi5L+D6LaL6Laj57KX57CH6YaL5Y2S6Lm054yd6LmZ6JSf5q6C5b6CXCIsXCJkdW5cIjpcIuWQqOmhv+ebvuaVpui5suWiqeWbpOayjOmSneeCluebuemBgei2uOegmOekhVwiLFwicXVcIjpcIuWMuuWOu+WPluabsui2i+a4oOi2o+mpseWxiOi6r+ihouWotuelm+eev+Wylum+i+inkeackOibkOeZr+ibhuiLo+mYkuivjuWKrOiVluiYp+awjem7ouigvOeSqem6tOm4suejslwiLFwieHVcIjpcIumcgOiuuOe7remhu+W6j+W+kOS8keiThOeVnOiZmuWQgee7quWPmeaXremCquaBpOWin+agqee1ruWcqeWpv+aIjOiDpeWYmOa1kueFpumFl+ivqeackOebseiTv+a6hua0q+mhvOWLlueziOegiemGkVwiLFwiY2h1b1wiOlwi6L6N57uw5oiz5reW5ZWc6b6K6LiU6L62XCIsXCJ6dVwiOlwi57uE5peP6Laz56WW56ef6Zi75Y2S5L+O6K+F6ZWe6I+5XCIsXCJqaVwiOlwi5rWO5py65YW25oqA5Z+66K6w6K6h57O75pyf6ZmF5Y+K6ZuG57qn5Yeg57uZ56ev5p6B5bex57qq5Y2z57un5Ye75pei5r+A57up5oCl5aWH5ZCJ5a2j6b2Q55a+6L+56bih5YmC6L6R57GN5a+E5oyk5Zy+5YaA5Lqf5a+C5pqo6ISK6Le76IKM56i95b+M6aWl56Wt57yJ5qOY55+25rGy55W45aes6JeJ55ig6aql576B5aaT6K6l56i36JOf5oK45auJ5bKM5Y+95LyO6bKr6K+Y5qWr6I2g5oif566V6ZyB5bWH6KeK6bqC55W/546R56yI54qE6Iqo5ZSn5bGQ6au75oii5L225YGI56yE6Le96JK65Lmp5ZKt6LWN5bW06Jmu5o6O6b2R5q6b6bKa5Yme5rSO5LiM5aK86JW65b2Q6Iqw5ZOcXCIsXCJjb25nXCI6XCLku47kuJvljIbogarokbHlm7HnkK7mt5nmnp7pqqLoi4HnkoFcIixcInpvbmdcIjpcIuaAu+S7jue7vOWul+e6tei4quajleeyvemsg+WBrOaenuiFmVwiLFwiY291XCI6XCLlh5Hovo/ohaDmpbFcIixcImN1aVwiOlwi6KGw5YKs5bSU6ISG57+g6JCD57K55pGn55KA55iB5oK05res5ZWQ6Zq55q+z5qaxXCIsXCJ3ZWlcIjpcIuS4uuS9jeWnlOacque7tOWNq+WbtOi/neWogeS8n+WNseWRs+W+ruWUr+iwk+S8quaFsOWwvumtj+mfpuiDg+eVj+W4t+WWguW3jeiQjuiUmue6rOa9jeWwiea4reaDn+iWh+iLh+eCnOWcqeWok+ivv+eOruW0tOahheWBjumAtuWAreeMpeWbl+iRs+mal+eXv+eMrOa2oOW1rOmfqueFqOiJiemaueW4j+mXsea0p+ayqemaiOmylOi7jlwiLFwiY3VuXCI6XCLmnZHlrZjlr7jlv5bnmrRcIixcInp1b1wiOlwi5L2c5YGa5bqn5bem5Z2Q5pio5L2Q55Ci5pKu56Wa5p+e5ZSR5Zis6YWi5oCN56yu6Zi86IOZXCIsXCJ6dWFuXCI6XCLpkrvnuoLmlKXnvLXoupxcIixcImRhXCI6XCLlpKfovr7miZPnrZTmkK3mspPnmKnmg67ll5Llk5LogLfpnpHpnbzopKHnrKrmgJvlprJcIixcImRhaVwiOlwi5aSn5Luj5bim5b6F6LS35q+S5oi06KKL5q255ZGG6Zq26YCu5bKx5YKj5qOj5oCg5q6G6bub55SZ5Z+t6K+S57uQ546z5ZGU6L+oXCIsXCJ0YWlcIjpcIuWkp+WPsOWkquaAgeazsOaKrOiDjuaxsOmSm+iLlOiWueiCvei3humCsOmykOmFnumqgOeCsVwiLFwidGFcIjpcIuS7luWug+WlueaLk+WhlOi4j+WhjOamu+ayk+a8r+eNreWXkuaMnui5i+i2v+mBoumTiumzjua6u+mXvFwiLFwiZGFuXCI6XCLkvYbljZXnn7Pmi4XkuLnog4bml6blvLnom4vmt6Hor57msK7pg7jogL3mrprmg67lhIvnnIjnlrjmvrnmjrjohrvllZbnrqrogYPokI/nmIXotZVcIixcImx1XCI6XCLot6/lha3pmYblvZXnu7/pnLLpsoHljaLngonpub/npoTotYLoiqblupDnoozpupPpooXms7jljaTmvZ7pua3ovpjomY/nkpDmvInlmZzmiK7psojmjrPmqbnovbPpgK/muIzok7zmkrjpuKzmoIzmsIfog6rplaXnsI/oiLvovoLlnoZcIixcInRhblwiOlwi6LCI5o6i5Z2m5pGK5by554Kt5Z2b5rup6LSq5Y+56LCt5r2t56Kz5q+v55ir5qqA55ew6KKS5Z2N6KaD5b+Q5piZ6YOv5r656ZK96ZSsXCIsXCJyZW5cIjpcIuS6uuS7u+iupOS7geW/jemfp+WIg+e6q+mlquWmiuiNj+eolOWjrOS7nui9q+S6u+ihvVwiLFwiamllXCI6XCLlrrbnu5Pop6Pku7fnlYzmjqXoioLlpbnlsYrku4vpmLbooZflgJ/mnbDmtIHmiKrlp5Dmj63mjbfliqvmiJLnmobnq63moZTor6vmpbfnp7jnnavol4nmi67oiqXor5jnoqPll5/poonomqflrZHlqZXnlpbmoYDorqbnlqXlgYjnvq/oorflk5zllojljanpspLpqrFcIixcInlhblwiOlwi56CU5Lil6aqM5ryU6KiA55y854Of5rK/5bu255uQ54KO54eV5bKp5a606Imz6aKc5q635b2m5o6p5re56ZiO6KGN6ZOF6ZuB5ZK95Y6M54Sw5aCw56Ca5ZSB54SJ5pmP5qqQ6JyS5aWE5L+o6IWM5aaN6LCa5YWW562154Sx5YGD6Zer5auj6YSi5rmu6LWd6IOt55Cw5ruf6ZiJ6a2H6YW96YO+5oG55bSm6Iqr5Ymh6by56I+46aSN5Z+P6LCz6K6g5Y6j572oXCIsXCJkYW5nXCI6XCLlvZPlhZrmoaPojaHmjKHlrpXnoIDpk5voo4blh7zoj6rosKBcIixcInRhb1wiOlwi5aWX6K6o6Lez6Zm25rab6YCD5qGD6JCE5reY5o6P5ruU6Z+s5Y+o5rSu5ZWV57um6aWV6byXXCIsXCJ0aWFvXCI6XCLmnaHosIPmjJHot7Pov6LnnLroi5XnqpXnrKTkvbvllYHnspzpq6vpk6vnpafpvobonKnpsqZcIixcInRlXCI6XCLnibnlv5Hlv5Lpk73mhZ1cIixcImRlXCI6XCLnmoTlnLDlvpflvrflupXplJ1cIixcImRlaVwiOlwi5b6XXCIsXCJkaVwiOlwi55qE5Zyw56ys5o+Q5L2O5bqV5oq15byf6L+q6YCS5bid5pWM5aCk6JKC57yU5ru05rak57+f5aij56yb5qOj6I276LCb54uE6YK45ZiA56Cl5Z276K+L5auh6ZWd56Ky6aq25rCQ5p+i57G0576d552H6KeMXCIsXCJ0aVwiOlwi5L2T5o+Q6aKY5byf5pu/5qKv6Lii5oOV5YmU6LmE5qOj5ZW85bGJ5YmD5raV6ZSR5YCc5oKM6YCW5ZqP6I2R6YaN57uo6bmI57yH6KO8XCIsXCJ0dWlcIjpcIuaOqOmAgOW8n+iFv+ikqumik+icleW/kueFulwiLFwieW91XCI6XCLmnInnlLHlj4jkvJjmuLjmsrnlj4vlj7Ppgq7lsKTlv6flubznirnor7HmgqDlub3kvZHph4nmn5rpk4Dpsb/lm7/phYnmlLjpu53ojqDnjLfonaPnlqPlkabomrTojrjojpzpk5XlrqXnuYfljaPniZbpvKzlsKLomrDkvpFcIixcImRpYW5cIjpcIueUteeCueW6l+WFuOWloOeUuOeimOa3gOauv+Weq+mioOa7h+eZq+W3heaDpuaOgueZnOeOt+S9g+i4rumdm+mSv+ewn+Wdq+mYvVwiLFwidGlhblwiOlwi5aSp55Sw5re75aGr55Sc55S45oGs6IWG5L2D6IiU6ZK/6ZiX5b+d5q6E55WL5qCd5o6tXCIsXCJ6aHVcIjpcIuS4u+acr+S9j+azqOWKqeWxnumAkOWugeiRl+etkempu+acseePoOelneeMquivuOafseeruemTuOagqueeqeWYsei0rueFrueDm+iLjuikmuibm+aLhOmToua0meeruuibgOa4muS8q+advOS+j+a+jeivm+iMseeuuOeCt+i6hee/pea9tOmCvuanoOiIs+appeS4tueYg+m6iOeWsFwiLFwibmlhblwiOlwi5bm05b+16YW/6L6X56K+5bu/5o275pK15ouI6JSr6bK25Z+d6bKH6L6H6buPXCIsXCJkaWFvXCI6XCLosIPmjonpm5XlkIrpkpPliIHosoLlh4vnoonpsrflj7zpk6vpk55cIixcInlhb1wiOlwi6KaB5LmI57qm6I2v6YKA5pGH6ICA6IWw6YGl5aea56qR55G25ZKs5bCn6ZKl6LCj6IK05aSt5L6l5ZCG55af5aaW5bm65p2z6IiA56qV56qI5puc6bme54i757mH5b6t6L266ZOr6bOQ5bS+54+nXCIsXCJkaWVcIjpcIui3jOWPoOidtui/reein+eIueiwjeeJkuiAi+S9muWWi+WgnueTnumyveWepOaPsui5gFwiLFwic2hlXCI6XCLorr7npL7mkYTmtonlsITmipjoiI3om4fmi77oiIzlpaLmhZHotabotYrkvZjpup3mrZnnlbLljo3njJ7mj7Lmu6BcIixcInllXCI6XCLkuJrkuZ/lpJzlj7blsITph47mtrLlhrbllp3pobXniLfogLbpgqrlkr3mpLDng6jmjpbmi73mm7PmmZTosJLohYvlmY7mj7bpnaXpgrrpk5jmj7JcIixcInhpZVwiOlwi5Lqb6Kej5Y2P5YaZ6KGA5Y+26LCi5qKw6Z6L6IOB5pac5pC65oeI5aWR5Y246LCQ5rOE6J+56YKq5q2H5rO75bGR5oyf54eu5qat6J2O5pK35YGV5Lq15qWU6aKJ57ys6YKC6bKR54Cj5Yuw5qaN6Jak57uB5rir5buo542s6LqeXCIsXCJ6aGVcIjpcIui/meiAheedgOiRl+a1meaKmOWTsuiUl+mBrui+mei+hOafmOmUl+iktuich+ibsOm5p+iwqui1reaRuuS5h+ejlOieq1wiLFwiZGluZ1wiOlwi5a6a6K6i6aG25LiB6byO55uv6ZKJ6ZSt5Y+u5LuD6ZOk55S66YWK5ZW256KH6IWa55aU546O6IC1XCIsXCJkaXVcIjpcIuS4oumTpVwiLFwidGluZ1wiOlwi5ZCs5bqt5YGc5Y6F5bu35oy65Lqt6ImH5am35rGA6ZOk54OD6ZyG55S66JyT6JG25qKD6I6bXCIsXCJkb25nXCI6XCLliqjkuJzokaPlhqzmtJ7mh4LlhrvmoIvkvpflkprls5LmsKHmgavog7TnoZDlnozpuKvlsr3og6hcIixcInRvbmdcIjpcIuWQjOmAmue7n+erpeeXm+mTnOahtuahkOetkuW9pOS+l+S9n+a9vOaNhemFruegvOees+aBuOWzkuS7neWXteWDruWejOiMvFwiLFwiemhvbmdcIjpcIuS4remHjeenjeS8l+e7iOmSn+W/oOS7suiht+iCv+i4teWGouebheiao+W/qumUuuiIr+ieveWkglwiLFwiZG91XCI6XCLpg73mlpfor7vosYbmipblhZzpmaHpgJfnqqbmuI7omqrnl5jolLjpkq3nr7xcIixcImR1XCI6XCLluqbpg73ni6znnaPor7vmr5LmuKHmnZzloLXotYznnbnogprplYDmuI7nrIPnq7rlmJ/niorlppLniY3ooLnmpJ/pu6noio/pq5FcIixcImR1YW5cIjpcIuaWreauteefreerr+mUu+e8jueFheaktOewllwiLFwiZHVpXCI6XCLlr7npmJ/ov73mlablhZHloIbnopPplabmgLzmhp1cIixcInJ1aVwiOlwi55Ge5YWR6ZSQ552/6Iqu6JWK6JWk6JqL5p6YXCIsXCJ5dWVcIjpcIuaciOivtOe6pui2iuS5kOi3g+WFkemYheWys+eypOaCpuabsOmSpeagjumSuuaovueAuem+oOWTleWIllwiLFwidHVuXCI6XCLlkJ7lsa/lm6TopKrosZroh4Dppajmmr7msL1cIixcImh1aVwiOlwi5Lya5Zue5oyl5rGH5oOg6L6J5oGi5b6957uY5q+B5oWn54Gw6LS/5Y2J5oKU56e95rqD6I2f5pmW5b2X6K6z6K+y54+y5aCV6K+Z6JWZ5pmm552i6bq+54Op6Iy05ZaZ5qGn6JuU5rSE5rWN6Jm65oGa6J+q5ZK06Zqz57yL5ZOVXCIsXCJ3dVwiOlwi5Yqh54mp5peg5LqU5q2m5Y2I5ZC06Iie5LyN5rGh5LmM6K+v5Lqh5oG25bGL5pmk5oKf5ZC+6Zu+6Iqc5qKn5Yu/5ber5L6u5Z2e5q+L6K+s5ZGc6ZKo6YKs5o2C6bmc5YWA5am65aap5pa85oiK6bmJ5rWv6JyI5ZSU6aqb5Lu154SQ6Iq06YuI5bqR6byv54m+5oCD5Zys5b+k55em6L+V5p2M5a+k6ZiiXCIsXCJ5YVwiOlwi5Lqa5Y6L6ZuF54mZ5oq86bit5ZGA6L2n5rav5bSW6YKq6Iq95ZOR6K626bim5aiF6KGZ5Lir6Jqc56Kj5Z6t5Lyi5rCp5qGg55CK5o+g5ZCW552a55eW55aL6L+T5bKI56CRXCIsXCJoZVwiOlwi5ZKM5ZCI5rKz5L2V5qC455uW6LS65Zad6LWr6I2355uS6bmk5ZCT5ZG16Iub56a+6I+P5aOR6KSQ5ra46ZiC6ZiW5Yq+6K+D6aKM5Zes6LKJ5pu357+u57ql55uNXCIsXCJ3b1wiOlwi5oiR5o+h56qd5rKD5Y2n5oyd5rah5pah5ril5bmE6JyX5ZaU5YCt6I606b6M6IKf56GqXCIsXCJlblwiOlwi5oGp5pGB6JK9XCIsXCJuXCI6XCLll6/llJRcIixcImVyXCI6XCLogIzkuozlsJTlhL/ogLPov6nppbXmtLHotLDpk5Lnj6XkvbTpuLjpspVcIixcImZhXCI6XCLlj5Hms5XnvZrkuY/kvJDpmIDnrY/noJ3lnqHnj5BcIixcInF1YW5cIjpcIuWFqOadg+WIuOazieWciOaLs+WKneeKrOmTqOeXiuivoOiNg+mGm+ict+mip+e7u+eKreetjOmsiOaCm+i+geeVjlwiLFwiZmVpXCI6XCLotLnpnZ7po57ogqXlup/oj7LogrrllaHmsrjljKrmlpDonJrlpoPor73miYnnv6HpnI/lkKDnu6/ohZPnl7Hoir7mt53mgrHni5LmpqfnoKnpsrHnr5rplYRcIixcInBlaVwiOlwi6YWN5Z+55Z2P6LWU5L2p6Zmq5rKb6KO06IOa5aaD6ZyI5reg5peG5biU5ZG46YaF6L6U6ZSrXCIsXCJwaW5nXCI6XCLlubPor4Tlh63nk7blhq/lsY/okI3oi7nkuZLlnarmnrDlqInkv5zpsoZcIixcImZvXCI6XCLkvZtcIixcImh1XCI6XCLlkozmiqTorrjmiLfmoLjmuZbkupLkuY7lkbzog6HmiI/lv73omY7msqrns4rlo7bokavni5DonbTlvKfnkZrmtZLpuYTnkKXmiYjllKzmu7nmg5rnpZzlm6vmlpvnrI/oirTphpDnjKLmgJnllL/miL3mp7Lop7PnhbPpuZXlhrHnk6DomY3lsrXpubHng4DovbdcIixcImdhXCI6XCLlpLnlkpblmI7lsKzlmbbml67kvL3lsJXpkoblsJxcIixcImdlXCI6XCLkuKrlkIjlkITpnanmoLzmrYzlk6Xnm5bpmpTlibLpmIHmiIjokZvpuL3mkIHog7PoiLjnlpnpk6zpqrzom6Tlkq/lnKrplYnpoozku6HnoYzll53prLLohojnuqXoorzmkL/loaXlk7/ombxcIixcImhhXCI6XCLlk4jom6Tpk6pcIixcInhpYVwiOlwi5LiL5aSP5bOh5Y6m6L6W6Zye5aS56Jm+54ut5ZCT5L6g5pqH6YGQ556O5Yyj55GV5ZSs5ZG36bug56GW572F54uO55iV5p+ZXCIsXCJnYWlcIjpcIuaUueivpeebluamgua6iemSmeS4kOiKpei1heWek+mZlOaIpFwiLFwiaGFpXCI6XCLmtbfov5jlrrPlrankuqXlkrPpqrjpqofmsKbll6jog7LphqJcIixcImdhblwiOlwi5bmy5oSf6LW25pWi55SY6IKd5p2G6LWj5Lm+5p+R5bC056u/56eG5qmE55+45rem6Iu35pOA6YWQ57uA5rOU5Z2p5pew55az5r6JXCIsXCJnYW5nXCI6XCLmuK/pkqLliJrlspfnurLlhojmnaDnvLjmiZvogpvnvaHmiIbnrbtcIixcImppYW5nXCI6XCLlsIblvLrmsZ/muK/lpZborrLpmY3nlobokovlp5zmtYbljKDphbHlg7Xmoajnu5vnvLDnip/osYfnpJPmtJrojLPns6jogKlcIixcImhhbmdcIjpcIuihjOiIquadreW3t+Wkr+WQreahgeayhue7l+mig1wiLFwiZ29uZ1wiOlwi5bel5YWs5YWx5L6b5Yqf57qi6LSh5pS75a6r5bep6b6a5oGt5oux6Lqs5byT5rGe6Jqj54+Z6Kel6IKx5bu+XCIsXCJob25nXCI6XCLnuqLlro/mtKrovbDombnpuL/lvJjlk4Tng5jms5PoqIfolbvpl7Porqfoja3pu4nolqhcIixcImd1YW5nXCI6XCLlub/lhYnpgJvmvaLnirfog7HlkqPmoYRcIixcInFpb25nXCI6XCLnqbfnkLznqbnpgpvojJXnrYfot6vom6npio5cIixcImdhb1wiOlwi6auY5ZGK5pCe56i/6IaP57OV6ZWQ55qL576U6ZSG5p2y6YOc552+6K+w6JeB56+Z57yf5qeB5qeUXCIsXCJoYW9cIjpcIuWlveWPt+avq+ixquiAl+a1qemDneeak+aYiueai+iSv+WjleeBj+Wajua/oOianeiyiemiouWXpeiWheWahlwiLFwibGlcIjpcIueQhuWKm+WIqeeri+mHjOadjuWOhuS+i+emu+WKseekvOS4vem7jueSg+WOieWOmOeykuiOieaiqOmatuagl+iNlOaypeeKgea8k+WTqeeLuOiXnOe9ueevsemypOeguuWQj+a+p+S/kOmqiua6p+egvuiOhemUguesoOigoeibjueXoumbs+S/quWCiOmGtOagjumDpuS/muaepeWWsemApuWojOm5guaIvuegrOWUs+WdnOeWoOicium7p+eMgemssueyneiToOWRlui3nueWrOe8oemyoemzouWroOipiOaCneiLiOevpei9uVwiLFwiamlhXCI6XCLlrrbliqDku7flgYfkvbPmnrbnlLLlmInotL7pqb7lq4HlpLnnqLzpkr7mjJ/mi67ov6bkvL3poormtYPmnrfmiJvojZrnl4LpoonplZPnrLPnj4jlsqzog5vooojpg4/oka3oorfnmJXpk5fot4/om7HmgZ3lk79cIixcImx1b1wiOlwi6JC9572X57uc5rSb6YC76J666ZSj6aqG6JCd6KO45ryv54OZ5pGe6aqh5ZKv566p54+e5o2L6I2m56GM6ZuS5qSk6ZWZ6Lee55iw5rO66IS254yh5YCu6KCDXCIsXCJrZVwiOlwi5Y+v56eR5YWL5a6i5Yi76K++6aKX5ri05aOz5p+v5qO15ZG15Z235oGq6Iub5ZKz56OV54+C56ie556M5rqY6L2y56qg5ZeR55a06J2M5bKi6ZOq6aKP6auB6Jq157yC5rCq6aqS6ZK26ZSeXCIsXCJxaWFcIjpcIuWNoeaBsOa0veaOkOmrguiit+WSreiRnFwiLFwiZ2VpXCI6XCLnu5lcIixcImdlblwiOlwi5qC56Lef5LqY6Imu5ZOP6IybXCIsXCJoZW5cIjpcIuW+iOeLoOaBqOeXleWTj1wiLFwiZ291XCI6XCLmnoTotK3lpJ/lj6Xmsp/ni5fpkqnmi5jli77oi5/lnqLmnrjnr53kvZ3lqr7or5/lsqPlvYDnvJHnrLHpnrLop4/pgZhcIixcImtvdVwiOlwi5Y+j5omj5a+H5Y+p5oqg5L2d6JS76Iqk55yN562YXCIsXCJndVwiOlwi6IKh5Y+k6aG+5pWF5Zu66byT6aqo5Lyw6LC36LS+5aeR5a2k6ZuH6L6c6I+H5rK95ZKV5ZGx6ZSi6ZK0566N5rGp5qKP55e85bSu6L2x6biq54mv6JuK6K+C5q+C6bmY6I+w572f5ZiP6IeM6Kea55696JuE6YWk54m/6bK0XCIsXCJwYWlcIjpcIueJjOaOkua0vuaLjei/q+W+mOa5g+S/s+WTjOiSjlwiLFwiZ3VhXCI6XCLmi6zmjILnk5zliK7lr6HljablkbHopILliZDog43or5bpuLnmoJ3lkZlcIixcInRvdVwiOlwi5oqV5aS06YCP5YG35oSJ6aqw5LqgXCIsXCJndWFpXCI6XCLmgKrmi5DkuZZcIixcImt1YWlcIjpcIuS8muW/q+Wdl+ett+iEjeiSr+S+qea1jemDkOiSieeLr+WTmVwiLFwiZ3VhblwiOlwi5YWz566h6KeC6aaG5a6Y6LSv5Yag5oOv54GM572Q6I6e57q25qO65pah55+c5YCM6bmz6bOP55ul5o685rarXCIsXCJ3YW5cIjpcIuS4h+WujOaZmua5vueOqeeil+mhveaMveW8r+iUk+S4uOiOnuealuWum+WpieiFleicv+aDi+eDt+eQrOeVueixjOWJnOe6qOe7vuiEmOiPgOiKhOeuolwiLFwibmVcIjpcIuWRouWTquWRkOiut+eWklwiLFwiZ3VpXCI6XCLop4TotLXlvZLovajmoYLmn5zlnK3prLznoYXnkbDot6rpvp/ljK7pl7ror6Hnmbjps5zmoafnmojpspHliL3mmbflgoDnnK3lpqvngoXluovnsIvliL/lroTljKZcIixcImp1blwiOlwi5Yab5Z2H5L+K5ZCb5bO76I+M56uj6ZKn6aqP6b6f5rWa6Zq96YOh562g55qy6bqH5o2DXCIsXCJqaW9uZ1wiOlwi56qY54Kv6L+l54KF5YaC5omDXCIsXCJqdWVcIjpcIuWGs+e7neinkuinieaOmOW0m+ivgOeNl+aKieeIteWavOWAlOWOpeiVqOaUq+ePj+efjei5tuiwsumVoumznOWZseaht+WZmOaSheapm+Wtk+inluWKgueInVwiLFwiZ3VuXCI6XCLmu5rmo43ovorooa7no5npsqfnu7LkuKhcIixcImh1blwiOlwi5ama5re36a2C5rWR5piP5qON54+y6I2k6aaE6K+o5rq36ZiNXCIsXCJndW9cIjpcIuWbvei/h+aenOmDremUheijueW4vOa2oeakgeWbl+idiOiZouiBkuWfmuaOtOeMk+W0nuicvuWRmemmmFwiLFwiaGVpXCI6XCLpu5HlmL/ll6hcIixcImthblwiOlwi55yL5YiK5YuY5aCq5Z2O56CN5L6D5bWM5qeb556w6Zia6b6b5oih5Ye16I6wXCIsXCJoZW5nXCI6XCLooaHmqKrmgZLkuqjlk7znj6nmoYHomIVcIixcIm1vXCI6XCLkuIfmsqHkuYjmqKHmnKvlhpLojqvmkanloqjpu5jno6jmkbjmvKDohInohpzprZTmsqvpmYzmirnlr57omJHmkbnok6bppo3ojInlmL/osJ/np6Pon4bosonlq6vplYbmroHogLHlrLfpur3nmLzosorosphcIixcInBlbmdcIjpcIum5j+aci+W9reiGqOiTrOeisOiLueajmuaNp+S6qOeDueevt+a+juaKqOehvOaApuegsOWYreifm+Wgi1wiLFwiaG91XCI6XCLlkI7lgJnljprkvq/njLTllonlkLzpgIXnr4zns4fpqrrlvozpso7nmIrloKBcIixcImh1YVwiOlwi5YyW5Y2O5YiS6K+d6Iqx55S75ruR5ZOX6LGB6aqF5qGm54y+6ZOn56CJXCIsXCJodWFpXCI6XCLmgIDlnY/mt67lvormp5DouJ1cIixcImh1YW5cIjpcIui/mOeOr+aNouasouaCo+e8k+WUpOeEleW5u+eXquahk+WvsOa2o+WupuWeuOa0uea1o+ixouWlgumDh+WcnOeNvumyqemsn+iQkemArea8tumUvue8s+aTkFwiLFwieHVuXCI6XCLorq/orq3ov4XlrZnlr7vor6Llvqrml6zlt6HmsZvli4vpgIrnho/lvofmtZrmronpqa/psp/olrDojYDmtZTmtLXls4vln5nlt73pg4fphrrmgYLojajnqqjolYjmm5vnja9cIixcImh1YW5nXCI6XCLpu4TojZLnhYznmoflh7DmhYzmmYPmvaLosI7mg7bnsKfnkpzmgY3luYzmuZ/onZfno7rpmo3lvqjpgZHogpPnr4Hps4fon6XnmYBcIixcIm5haVwiOlwi6IO95LmD5aW26ICQ5aWI6byQ6JCY5rCW5p+w5L206Im/XCIsXCJsdWFuXCI6XCLkubHljbXmu6bls6bpuL7moL7piq7mjJvlrarohJTlqIhcIixcInFpZVwiOlwi5YiH5LiU5aWR56qD6IyE56CM6ZSy5oCv5Ly95oOs5aa+6LaE5oyI6YOE566n5oWKXCIsXCJqaWFuXCI6XCLlu7rpl7Tku7bop4HlnZrmo4DlgaXnm5Hlh4/nroDoibDot7XlhbzpibTplK7muJDmn6zliZHlsJbogqnoiLDojZDnrq3mtYXliarkv63norHojKflpbjmrbzmi6PmjaHnhY7otLHmuoXmp5vmtqfloJHnrLrosI/ppa/plI/nvITnnZHorIfouYfohbHoj4Xnv6bmiKzmr73nrJXnio3nobfpnq/nia7mnqfmuZTpsqPlm53oo6XouLrmkJvnvKPpuaPokrnosKvlg63miIvotrzmpZdcIixcIm5hblwiOlwi5Y2X6Zq+55S35qWg5ZaD5Zuh6LWn6IWp5Zud6J27XCIsXCJxaWFuXCI6XCLliY3ljYPpkrHnrb7mvZzov4HmrKDnuqTnibXmtYXpgaPosKbkub7pk4XmrYnpu5TosLTltYzlgKnpkrPojJzomZTloJHpko7pqp7pmKHmjq7pkqTmiaboiornio3ojajku5/oiqHmgq3nvLHkvaXmhIbopLDlh7Xogrflso3mkLTnrp3mhYrmpKBcIixcInFpYW5nXCI6XCLlvLrmiqLnloblopnmnqrohZTplLXlkZvnvozolLfopYHnvp/ot4TmqK/miJXlq7HmiJfngp3plarplJbonKNcIixcInhpYW5nXCI6XCLlkJHpobnnm7jmg7PkuaHosaHlk43pppnpmY3lg4/kuqvnrrHnvornpaXmuZjor6bmqaHlt7fnv5TopYTljqLplbbpo6jppbfnvIPpqqfoipfluqDpsp7okZnon5NcIixcImppYW9cIjpcIuaVmeS6pOi+g+agoeinkuinieWPq+iEmue8tOiDtui9v+mDiueEpumqhOa1h+akkuekgeS9vOiVieWoh+efq+aQhee7numFteWJv+WavOmluueqlui3pOibn+S+peeLoeWno+eajuiMreWzpOmTsOmGrumym+a5q+W+vOm5quWDrOWZjeiJveaMouaVq1wiLFwiemh1b1wiOlwi552A6JGX57y05qGM5Y2T5o2J55Ci54G85rWK6YWM5ouZ6IyB5ra/6ZWv5reW5ZWE5r+v54Sv5YCs5pOi5par5qO56K+85rWe56aaXCIsXCJxaWFvXCI6XCLmoaXkuZTkvqjlt6fmgoTmlbLkv4/lo7Ppm4Dnnqfnv5jnqo3ls63plLnmkqzojZ7ot7fmqLXmhpTpnpjmqYfls6Tor67osK/mhIDpnpLnoZflioHnvLJcIixcInhpYW9cIjpcIuWwj+aViOmUgOa2iOagoeaZk+eskeiCluWJiuWtneiQp+S/j+a9h+ehneWuteWVuOWao+mchOa3huWTruetsemAjeWno+euq+mqgeaereWTk+e7oeibuOW0pOaetemtiFwiLFwic2lcIjpcIuWPuOWbm+aAneaWr+mjn+engeatu+S8vOS4nemlsuWvuuiChuaSleazl+S8uuWXo+elgOWOrumpt+WYtumUtuS/n+W3s+ibs+WSneiAnOespee6n+ezuOm4tue8jOa+jOWnkuaxnOWOtuWFlVwiLFwia2FpXCI6XCLlvIDlh6/mhajlsoLmpbfmgbrmj6nplLTpk6Dlv77lnrLliYDplI7okohcIixcImppblwiOlwi6L+b6YeR5LuK6L+R5LuF57Sn5bC95rSl5pak56aB6ZSm5Yqy5pmL6LCo562L5be+5rW46KWf6Z2z55G+54Os57yZ6ZKF55+c6KeQ5aCH6aaR6I2p5Zmk5buR5aaX5qe/6LWG6KG/5Y26XCIsXCJxaW5cIjpcIuS6suWLpOS+teenpumSpueQtOemveiKueaygeWvneaTkuimg+WZmeefnOWXquaPv+a6seiKqeihvuW7kemUk+WQo+aqjuiek1wiLFwiamluZ1wiOlwi57uP5Lqs57K+5aKD56ue5pmv6K2m56uf5LqV5oOK5b6E6Z2Z5Yqy5pWs5YeA6ZWc552b5pm26aKI6I2G5YWi6Z2W5rO+5oas6bK46IyO6IWI6I+B6IOr6Zix5peM57Kz6Z2T55eJ566Q5YSG6L+z5amn6IK85Yit5byq542NXCIsXCJ5aW5nXCI6XCLlupTokKXlvbHoi7Hmma/ov47mmKDnoaznm4jotaLpopblqbTpubDojafojrnmqLHnkZvonYfokKbojrrpoo3ohrrnvKjngJvmpbnnvYLojaXokKTpuabmu6Lok6Xpg6LojJTlmKTnko7lrLTnmL/lqrXmkoTmvYZcIixcImppdVwiOlwi5bCx56m25Lmd6YWS5LmF5pWR5pen57qg6IiF54G455aa5o+q5ZKO6Z+t546W6Ie85p+p6LWz6big6bmr5Y6p5ZW+6ZiE5qGV5YOm6ayPXCIsXCJ6dWlcIjpcIuacgOe9quWYtOmGieWSgOiVnuinnFwiLFwianVhblwiOlwi5Y235o2Q5ZyI55y35aif5YCm57ui6Zq96ZWM5raT6bmD6YSE6KCy54u36ZSp5qGKXCIsXCJzdWFuXCI6XCLnrpfphbjokpzni7tcIixcInl1blwiOlwi5ZGY6L+Q5LqR5YWB5a2V6JW06Z+16YWd6ICY5pmV5YyA6Iq46Zmo57qt6YOn562g5oG96Z+r6YOT5rCy5q6S5oSg5piA6I+A54uBXCIsXCJxdW5cIjpcIue+pOijmemAoem6h1wiLFwia2FcIjpcIuWNoeWWgOWSluWSlOWSr+S9p+iDqVwiLFwia2FuZ1wiOlwi5bq35oqX5omb5oW354KV5Lqi57Og5LyJ6ZKq6Ze2XCIsXCJrZW5nXCI6XCLlnZHpk7/lkK1cIixcImthb1wiOlwi6ICD6Z2g54Ok5ou36ZOQ5qCy5bC754qSXCIsXCJrZW5cIjpcIuiCr+WepuaBs+WVg+m+iOijiVwiLFwieWluXCI6XCLlm6DlvJXpk7bljbDpn7Pppa7pmLTpmpDlp7vmrrfmt6vlsLnojavlkJ/nmL7lr4XojLXlnLvlnqDphJ7mua7ompPmsKTog6TpvojnqqjllpHpk5/mtIfni7rlpKTlu7TlkLLpnKrojJrloJlcIixcImtvbmdcIjpcIuepuuaOp+WtlOaBkOWApeW0hueunFwiLFwia3VcIjpcIuiLpuW6k+WTremFt+ijpOaer+eqn+aMjumqt+WggOe7lOWIs+WWvlwiLFwia3VhXCI6XCLot6jlpLjlnq7mjI7og6/kvolcIixcImt1aVwiOlwi5LqP5aWO5oSn6a2B6aaI5rqD5Yyu6JG156ql55uU6YC155296aaX6IGp5Zaf5aSU56+R5bK/5Za55o+G6ZqX5YKA5pqM6Les6JKJ5oSm5oKd6J2wXCIsXCJrdWFuXCI6XCLmrL7lrr3pq4tcIixcImt1YW5nXCI6XCLlhrXnn7/moYbni4Lml7fnnLbljKHnrZDpgp3lnLnlk5DotLblpLzor7Por5PnuqlcIixcInF1ZVwiOlwi56Gu5Y2057y66ZuA6bmK6ZiZ55i45qa354KU6ZiV5oKrXCIsXCJrdW5cIjpcIuWbsOaYhuWdpOaNhueQqOmUn+mysumGjOmroeaCg+mYg1wiLFwia3VvXCI6XCLmianmi6zpmJTlu5Pom55cIixcImxhXCI6XCLmi4nokL3lnoPohYrllabovqPonKHllofliYzml6/noKzpgovnmIxcIixcImxhaVwiOlwi5p2l6I6x6LWW552Q5b6V57GB5rae6LWJ5r+R55me5bSD55ag6ZO8XCIsXCJsYW5cIjpcIuWFsOiniOiTneevruagj+WymueDgua7pee8huaPvea+nOaLpuaHkuamhOaWk+WpqumYkeiktOe9seWVieiwsOmVp+a8pFwiLFwibGluXCI6XCLmnpfkuLTpgrvotYHnkLPno7fmt4vpup/pnJbps57lh5vmi47pgbTolLrlkJ3nsrzltpnouo/lu6rmqqnllYnovprohqbnnrXmh5RcIixcImxhbmdcIjpcIua1quacl+mDjuW7iueLvOeQheamlOiegumYhumUkuiOqOWVt+iSl+eoglwiLFwibGlhbmdcIjpcIumHj+S4pOeyruiJr+i+huS6ruaigeWHieiwheeyseaZvumdk+i4ieiOqOaki+mtieWimlwiLFwibGFvXCI6XCLogIHlirPokL3nu5zniaLmjZ7mtp3ng5nlp6XkvazltILllKDpharmvabnl6jphqrpk5Hpk7nmoLPogKJcIixcIm11XCI6XCLnm67mqKHmnKjkuqnluZXmr43niafojqvnqYblp4blopPmhZXniZ/niaHli5/nnabnvKrmspDmmq7mi4flp6Xpkrzoi5zku6vmr6rlnbZcIixcImxlXCI6XCLkuobkuZDli5Logovlj7vps5PlmJ7ku4Lms5BcIixcImxlaVwiOlwi57G757Sv6Zu35YuS5rOq6JW+5Z6S56OK5pOC6ZWt6IKL57646ICS5YSh5auY57yn6YW55Zie6K+U5qqRXCIsXCJzdWlcIjpcIumaj+WygeiZveeijuWwv+map+mBgumrk+epl+e7pemai+mCg+edoueln+a/ieeHp+iwh+ecreiNvVwiLFwibGllXCI6XCLliJfng4jliqPoo4LnjI7lhr3lkqfotpTmtIzprKPln5LmjanoupBcIixcImxlbmdcIjpcIuWGt+aEo+ajsealnuWhhFwiLFwibGluZ1wiOlwi6aKG5Luk5Y+m6Zu254G16b6E6Zm15bKt5YeM546y6ZOD6I+x5qOx5Ly2576a6IuT6IGG57+O5rOg55O05Zu557ur5ZGk5qOC6JuJ6YWD6bKu5p+DXCIsXCJsaWFcIjpcIuS/qVwiLFwibGlhb1wiOlwi5LqG5paZ55aX6L695buW6IGK5a+l57yq5YOa54eO57yt5pKC5pKp5Zi55r2m6ZWj5a+u6JO8542g6ZKM5bCl6bmpXCIsXCJsaXVcIjpcIua1geWImOWFreeVmeafs+eYpOehq+a6nOeijOa1j+amtOeQiemmj+mBm+mOj+mqnee7uumVj+aXkueGmOm5qOmUjVwiLFwibHVuXCI6XCLorrrova7kvKbku5HnurbmsqbmiqHlm7VcIixcImx2XCI6XCLnjoflvovml4Xnu7/omZHlsaXlkJXpk53lsaHmsK/nvJXmu6TkvqPpqbTmpojpl77lgbvopJvmjYvohoLnqIZcIixcImxvdVwiOlwi5qW86Zyy5ryP6ZmL5aiE5pCC56+T5Za96ZWC5YG755iY6auF6ICn6J285bWd6JKMXCIsXCJtYW9cIjpcIui0uOavm+efm+WGkuiyjOiMguiMheW4veeMq+mrpumUmuaHi+iipOeJpuWNr+mThuiAhOWzgeeRgeifiuiMhuidpeaXhOazluaYtOeegFwiLFwibG9uZ1wiOlwi6b6Z6ZqG5byE5Z6E56y85oui6IGL6ZmH6IOn54+R56q/6IyP5ZKZ56C75Z6F5rO35qCK55mDXCIsXCJub25nXCI6XCLlhpzmtZPlvITohJPkvqzlk51cIixcInNodWFuZ1wiOlwi5Y+M54i96Zyc5a2A5rO3XCIsXCJzaHVcIjpcIuacr+S5puaVsOWxnuagkei+k+adn+i/sOe9suacseeGn+auiuiUrOiIkueWj+m8oOa3keWPlOaakeaeouWiheS/nuabmeaKkuerluicgOiWr+ais+aIjeaBleWtsOayrei1juW6tua8seWhvuWAj+a+jee6vuWnneiPvem7jeiFp+enq+avueaus+eWi+aRhVwiLFwic2h1YWlcIjpcIueOh+ihsOW4heaRlOeUqeifgFwiLFwibHZlXCI6XCLnlaXmjqDplIpcIixcIm1hXCI6XCLkuYjpqazlkJfmkanpurvnoIHlpojnjpvlmJvpqoLmirnomoLllJvon4bnirjmnalcIixcIm1lXCI6XCLkuYjpur1cIixcIm1haVwiOlwi5Lmw5Y2W6bqm6L+I6ISJ5Z+L6Zy+6I2s5YqiXCIsXCJtYW5cIjpcIua7oeaFouabvOa8q+Wfi+iUk+eekuibrumzl+mmkuW5lOiwqeieqOeGs+e8pumVmOmin+WigemelFwiLFwibWlcIjpcIuexs+WvhuenmOi/t+W8peicnOiwnOinhemdoeazjOecr+m6i+eMleiwp+WSqueznOWuk+axqOmGmuWYp+W8reiEkuWGluW5gueloue4u+iYvOiKiOezuOaViVwiLFwibWVuXCI6XCLku6zpl6jpl7fnnpLmsbbmiarnhJbmh5HpnpTpkpRcIixcIm1hbmdcIjpcIuW/meebsuiMq+iKkuawk+iOveifkumCmeehrea8rVwiLFwibWVuZ1wiOlwi6JKZ55uf5qKm54yb5a2f6JCM5rCT5pym6ZSw5qqs5YuQ5oe16J+S6Jyi6Jm76bu+6KCT6Imo55SN6ImL556i56SeXCIsXCJtaWFvXCI6XCLoi5fnp5Llppnmj4/lupnnnoTnvKrmuLrmt7zol5DnvIjpgojpuYvmnarnnIfllrVcIixcIm1vdVwiOlwi5p+Q6LCL54mf57yq55y45ZOe6Y2q6JuR5L6U5Y62XCIsXCJtaXVcIjpcIue8quiwrFwiLFwibWVpXCI6XCLnvo7msqHmr4/nhaTmooXlqpLmnprlprnnnInprYXpnInmmKflqprnjqvphbbplYHmuYTlr5DojpPoooLmpaPns5zltYvplYXmtbznjLjpuZtcIixcIndlblwiOlwi5paH6Zeu6Ze756iz5rip57q55ZC76JqK6Zuv57SK55if5rG26Z+r5YiO55K6546f6ZiMXCIsXCJtaWVcIjpcIueBreiUkeevvuS5nOWSqeigm1wiLFwibWluZ1wiOlwi5piO5ZCN5ZG96bij6ZOt5Yal6IyX5rqf6YWp556R6J6f5pqdXCIsXCJuYVwiOlwi5YaF5Y2X6YKj57qz5ou/5ZOq5aic6ZKg5ZGQ5o266KGy6ZWO6IKtXCIsXCJuZWlcIjpcIuWGhemCo+WTqummgVwiLFwibnVvXCI6XCLpmr7or7rmjKrlqJzns6/mh6blgqnllo/mkKbplJhcIixcInJ1b1wiOlwi6Iul5byx5YGM566sXCIsXCJuYW5nXCI6XCLlm4rpppXlm5Tmm6nmlK5cIixcIm5hb1wiOlwi6ISR6Ze55oG85oyg55GZ5reW5a2s5Z606ZOZ5qGh5ZG256GH54yx6JuyXCIsXCJuaVwiOlwi5L2g5bC85ZGi5rOl55aR5ouf6YCG5YCq5aau6IW75Yy/6ZyT5rq65peO5pi15Z2t6ZOM6bK15Lyy5oCp552o54yKXCIsXCJuZW5cIjpcIuWrqeaBgVwiLFwibmVuZ1wiOlwi6IO9XCIsXCJuaW5cIjpcIuaCqOaBgVwiLFwibmlhb1wiOlwi6bif5bC/5rq66KKF6ISy6IyR5ayyXCIsXCJuaWVcIjpcIuaRhOiBguaNj+a2hemVjeWtveaNu+iYluWVrui5keWXq+iHrOmViuminuS5nOmZp1wiLFwibmlhbmdcIjpcIuWomOmFv1wiLFwibmluZ1wiOlwi5a6B5Yed5oun5rOe5p+g5ZKb54ue5L2e6IGN55SvXCIsXCJudVwiOlwi5Yqq5oCS5aW05byp6am95biR5a2l6IOsXCIsXCJudlwiOlwi5aWz6ZKV6KGE5oGnXCIsXCJydVwiOlwi5YWl5aaC5aWz5Lmz5YSS6L6x5rGd6Iy56KSl5a265r+h6KCV5ZqF57yb5rq96ZO35rSz6Ja36KWm6aKl6JOQXCIsXCJudWFuXCI6XCLmmpZcIixcIm52ZVwiOlwi6JmQ55afXCIsXCJyZVwiOlwi54Ot6Iul5oO55ZaPXCIsXCJvdVwiOlwi5Yy65qyn5YG25q605ZGV56a66JeV6K606bil55Ov5rKk6ICm5oCEXCIsXCJwYW9cIjpcIui3keeCruazoeaKm+WIqOiijeWShueWseW6lueLjeWMj+iErFwiLFwicG91XCI6XCLliZbmjoroo5JcIixcInBlblwiOlwi5Za355uG5rmTXCIsXCJwaWVcIjpcIueepeaSh+iLpOawleS4v1wiLFwicGluXCI6XCLlk4HotKvogZjpopHmi7zmi5rpoqblp5jlq5TmpoDniZ1cIixcInNlXCI6XCLoibLloZ7nkZ/mtqnllaznqZHpk6/mp61cIixcInFpbmdcIjpcIuaDhemdkua4heivt+S6sui9u+W6huWAvumht+WNv+aZtOawouaTjuawsOe9hOejrOicu+eukOmyree2ruiLmOm7peWciuaqoOisplwiLFwiemFuXCI6XCLotZ7mmoLmlJLloJHmmJ3nsKrns4znk5LpjL7otrHmi7ZcIixcInNoYW9cIjpcIuWwkee7jeWPrOeDp+eojemCteWTqOmftuaNjuWLuuaioumemOiKjeiLleWKreiJhOetsuadk+a9slwiLFwic2FvXCI6XCLmiavpqprlq4LmoqLnvKvmkJTnmJnoh4rln73nvLLps4tcIixcInNoYVwiOlwi5rKZ5Y6m5p2A57qx56CC5ZWl6I6O5Yi55p2J5YK754We6bKo6ZyO5ZeE55en6KOf5oyy6ZOp5ZS85q2DXCIsXCJ4dWFuXCI6XCLljr/pgInlrqPliLjml4vmgqzovanllqfnjoTnu5rmuLLnkofngqvokLHnmaPmvKnnnKnmmoTnhYrpk4nmpabms6vosJbnl4Pnornmj47plZ/lhIdcIixcInJhblwiOlwi54S25p+T54eD5YaJ6IuS6auv6Jq6XCIsXCJyYW5nXCI6XCLorqnlo6TmlJjlmrfnk6TnqbDnprNcIixcInJhb1wiOlwi57uV5omw6aW25aiG5qGh6I2bXCIsXCJyZW5nXCI6XCLku43miZRcIixcInJpXCI6XCLml6VcIixcInJvdVwiOlwi6IKJ5p+U5o+J57OF6Z6j6LmCXCIsXCJydWFuXCI6XCLova/pmK7mnIpcIixcInJ1blwiOlwi5ram6ZewXCIsXCJzYVwiOlwi6JCo5rSS5pKS6aOS5Y2F5Luo6ISOXCIsXCJzdW9cIjpcIuaJgOS6m+e0oue8qemUgeiOjuaireeQkOWXpuWUhuWUouWokeiTkee+p+aMsuahq+WXjeedg1wiLFwic2FpXCI6XCLmgJ3otZvloZ7oha7lmbvps4NcIixcInNodWlcIjpcIuivtOawtOeojuiwgeedoeawtVwiLFwic2FuZ1wiOlwi5qGR5Lin5ZeT5pCh6aKh56OJXCIsXCJzZW5cIjpcIuajrlwiLFwic2VuZ1wiOlwi5YOnXCIsXCJzaGFpXCI6XCLnrZvmmZJcIixcInNoYW5nXCI6XCLkuIrllYblsJrkvKTotY/msaToo7PlopLmmYzlnqfop57mrofnhrXnu7FcIixcInhpbmdcIjpcIuihjOecgeaYn+iFpeeMqeaDuuWFtOWIkeWei+W9oumCoumlp+mGkuW5uOadj+aAp+Wnk+mZieiNh+iNpeaTpOaCu+ehjlwiLFwic2hvdVwiOlwi5pS25omL5Y+X6aaW5ZSu5o6I5a6I5a+/55im5YW954up57u26ImP5omMXCIsXCJzaHVvXCI6XCLor7TmlbDnoZXng4HmnJTpk4TlpoHmp4rokrTmkKBcIixcInN1XCI6XCLpgJ/ntKDoi4/or4nnvKnloZHogoPkv5flrr/nsp/muq/phaXlpJnmhKvnsIznqKPlg7PosKHmtpHolIzll4nop6tcIixcInNodWFcIjpcIuWIt+iAjeWUsFwiLFwic2h1YW5cIjpcIuagk+aLtOa2rumXqVwiLFwic2h1blwiOlwi6aG6556s6Iic5ZCuXCIsXCJzb25nXCI6XCLpgIHmnb7lrovorrzpooLogLjor7Xltanmt57mgILmgprltKflh4flv6rnq6boj5hcIixcInNvdVwiOlwi6ImY5pCc5pOe5Ze95ZeW5Y+f6aaK6Jau6aOV5Ze+5rqy6ZS86J6L556NXCIsXCJzdW5cIjpcIuaNn+Wtmeesi+iNquamq+mavOeLsumjp1wiLFwidGVuZ1wiOlwi6IW+55a86Jek5ruV6KqKXCIsXCJ0aWVcIjpcIumTgei0tOW4lumkruiQnFwiLFwidHVcIjpcIuWcn+eqgeWbvumAlOW+kua2guWQkOWxoOWFlOeng+WHuOiNvOmSjeiPn+WgjemFtFwiLFwid2FpXCI6XCLlpJbmrarltLRcIixcIndhbmdcIjpcIueOi+acm+W+gOe9keW/mOS6oeaXuuaxquaeieWmhOaDmOe9lOi+i+mtjVwiLFwid2VuZ1wiOlwi57+B5Zeh55Ou6JOK6JW5XCIsXCJ6aHVhXCI6XCLmipPmjJ3niKpcIixcInlhbmdcIjpcIuagt+WFu+WkrumYs+a0i+aJrOadqOe+iuivpuawp+S7sOenp+eXkua8vueWoeazseaug+aBmem4r+W+ieS9r+aAj+eCgOeDiumeheibmFwiLFwieGlvbmdcIjpcIumbhOWFhOeGiuiDuOWHtuWMiOaxueiKjlwiLFwieW9cIjpcIuWTn+WUt1wiLFwieW9uZ1wiOlwi55So5rC45oul5YuH5raM5rOz5bq45L+R6LiK5L2j5ZKP6ZuN55Ss6ZWb6IeD6YKV6Ju55oG/5oW15aOF55eI6bOZ5aKJ6aWU5ZaBXCIsXCJ6YVwiOlwi5p2C5omO5ZKx56C45ZKL5Yyd5ZKC5ou2XCIsXCJ6YWlcIjpcIuWcqOWGjeeBvui9veagveS7lOWusOWTieW0veeUvlwiLFwiemFvXCI6XCLpgKDml6npga3mnqPlmarngbbnh6Xns5/lh7/ouoHol7vnmoLmvqHomqTllKNcIixcInplaVwiOlwi6LS8XCIsXCJ6ZW5cIjpcIuaAjuiwrlwiLFwiemVuZ1wiOlwi5aKe5pu+57u86LWg5oaO6ZSD55SR572+57yvXCIsXCJ6aGVpXCI6XCLov5lcIixcInpvdVwiOlwi6LWw6YK55aWP5o+N6K+56am66Zms5qWx6YS56bKwXCIsXCJ6aHVhaVwiOlwi6L2s5ou9XCIsXCJ6dW5cIjpcIuWwiumBtemzn+aoveaSmVwiLFwiZGlhXCI6XCLll7JcIixcIm5vdVwiOlwi6ICoXCJ9O1xyXG5cclxuZXhwb3J0IHsgZGljdCB9IiwiaW1wb3J0IHsgZGljdCB9IGZyb20gJy4vZGljLmpzJ1xyXG5cclxubGV0IFNpbXBsZUlucHV0TWV0aG9kID0ge1xyXG4gICAgZGljdDoge31cclxufVxyXG5cclxuU2ltcGxlSW5wdXRNZXRob2QuaW5pdERpY3QgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuZGljdC5weTJoeiA9IGRpY3Q7XHJcbiAgICB0aGlzLmRpY3QucHkyaHoyID0ge307XHJcbiAgICB0aGlzLmRpY3QucHkyaHoyWydpJ10gPSAnaSc7IC8vIGnmr5TovoPnibnmrorvvIzmsqHmnInnrKblkIjnmoTmsYnlrZfvvIzmiYDku6XnibnmrorlpITnkIZcclxuXHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5kaWN0LnB5Mmh6KSB7XHJcbiAgICAgICAgbGV0IGNoID0ga2V5WzBdO1xyXG4gICAgICAgIGlmICghdGhpcy5kaWN0LnB5Mmh6MltjaF0pIHtcclxuICAgICAgICAgICAgdGhpcy5kaWN0LnB5Mmh6MltjaF0gPSB0aGlzLmRpY3QucHkyaHpba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5TaW1wbGVJbnB1dE1ldGhvZC5nZXRTaW5nbGVIYW56aSA9IGZ1bmN0aW9uKHBpbnlpbil7XHJcbiAgICByZXR1cm4gdGhpcy5kaWN0LnB5Mmh6MltwaW55aW5dIHx8IHRoaXMuZGljdC5weTJoeltwaW55aW5dIHx8ICcnO1xyXG59XHJcblxyXG5TaW1wbGVJbnB1dE1ldGhvZC5nZXRIYW56aSA9IGZ1bmN0aW9uKHBpbnlpbikge1xyXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuZ2V0U2luZ2xlSGFuemkocGlueWluKTtcclxuICAgIGlmIChyZXN1bHQpIHJldHVybiBbcmVzdWx0LnNwbGl0KCcnKSwgcGlueWluXTtcclxuXHJcbiAgICBsZXQgdGVtcCA9ICcnO1xyXG4gICAgbGV0IHN0YXJ0ID0gTWF0aC5taW4ocGlueWluLmxlbmd0aCwgNik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpID49IDE7IGktLSkge1xyXG4gICAgICAgIGxldCBzdHIgPSBwaW55aW4uc3Vic3RyKDAsIGkpO1xyXG4gICAgICAgIGxldCBycyA9IHRoaXMuZ2V0U2luZ2xlSGFuemkoc3RyKTtcclxuICAgICAgICBpZiAocnMpIHJldHVybiBbcnMuc3BsaXQoJycpLCBzdHJdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbW10sICcnXTsgLy8g55CG6K665LiK5LiA6Iis5LiN5Lya5Ye6546w6L+Z56eN5oOF5Ya1XHJcbn07XHJcblxyXG5TaW1wbGVJbnB1dE1ldGhvZC5pbml0RGljdCgpO1xyXG5cclxuZXhwb3J0IHsgU2ltcGxlSW5wdXRNZXRob2QgfSAvL+aNouaIkGV4cG9ydCBkZWZhdWx0IFNpbXBsZUlucHV0TWV0aG9kO+S4jeiDveeUqCIsIi8vIGFwaS1zZXJ2aWNlLmpzXHJcbmltcG9ydCBmZXRjaCBmcm9tICdAc3lzdGVtLmZldGNoJztcclxuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcic7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XHJcbmltcG9ydCBwcm9tcHQgZnJvbSAnQHN5c3RlbS5wcm9tcHQnO1xyXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy5qcyc7XHJcblxyXG5jbGFzcyBBcGlTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIOS4rei9rOacjeWKoeWZqOWcsOWdgCAtIOS7jiBjb25maWcuanMg6K+75Y+WXHJcbiAgICB0aGlzLmJhc2VVcmwgPSBDT05GSUcuU0VSVkVSLkJBU0VfVVJMO1xyXG4gICAgdGhpcy5iYXNlSGVhZGVycyA9IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOmAmueUqOivt+axguaWueazlSAtIOmAmui/h+S4rei9rOacjeWKoeWZqOi9rOWPkVxyXG4gIGFzeW5jIHJlcXVlc3QoYWN0aW9uLCBkYXRhID0ge30pIHtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vYXBpYDtcclxuICAgIFxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyOiB0aGlzLmJhc2VIZWFkZXJzLFxyXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xyXG4gICAgfTtcclxuXHJcbiAgICBvcHRpb25zLmRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IGFjdGlvbiwgLi4uZGF0YSB9KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZXRjaC5mZXRjaCh7XHJcbiAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XHJcblxyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUgPj0gMjAwICYmIHJlc3BvbnNlLmNvZGUgPCAzMDApIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZURhdGEpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBIVFRQIEVycm9yOiAke3Jlc3BvbnNlLmNvZGV9YCwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBIVFRQICR7cmVzcG9uc2UuY29kZX06ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2VEYXRhKX1gKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IChlcnJvciwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgLy8gREVUQUlMRUQgTE9HR0lORyBGT1IgTkVUV09SSyBGQUlMVVJFU1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgW0FwaVNlcnZpY2VdIFJlcXVlc3QgRmFpbGVkLiBDb2RlOiAke2NvZGV9LCBFcnJvcjogJHtKU09OLnN0cmluZ2lmeShlcnJvcil9YCk7XHJcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZDogJHtlcnJvci5kYXRhIHx8ICdDb25uZWN0aW9uIGlzIGludmFsaWQnfWApKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyDojrflj5bmjpLooYzmppxcclxuICBhc3luYyBnZXRSYW5raW5ncyhsaW1pdCA9IDEwKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2dldF9yYW5raW5ncycsIHtcclxuICAgICAgICBsaW1pdDogbGltaXRcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIHJhbmtpbmdzOiByZXN1bHQucmFua2luZ3MgfHwgW11cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign6I635Y+W5o6S6KGM5qac5aSx6LSlOicsIGVycm9yKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIHJhbmtpbmdzOiBbXSxcclxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDkuIrmiqXngrnlh7vmrKHmlbBcclxuICBhc3luYyBzeW5jQ2xpY2tzKHVzZXJJZCwgY2xpY2tDb3VudCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0KCdzeW5jX2NsaWNrcycsIHtcclxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXHJcbiAgICAgICAgY2xpY2tfY291bnQ6IGNsaWNrQ291bnRcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfkuIrmiqXngrnlh7vmrKHmlbDlpLHotKU6JywgZXJyb3IpXHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5LuO5pyN5Yqh5Zmo5ZCM5q2l5pWw5o2uXHJcbiAgYXN5bmMgc3luY0Zyb21TZXJ2ZXIodXNlcklkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ3N5bmNfZnJvbV9zZXJ2ZXInLCB7XHJcbiAgICAgICAgdXNlcl9pZDogdXNlcklkXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfku47mnI3liqHlmajlkIzmraXmlbDmja7miJDlip86JywgcmVzdWx0LnVzZXJJbmZvKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1c2VySW5mbzogcmVzdWx0LnVzZXJJbmZvIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign5ZCM5q2l5pWw5o2u5aSx6LSlOicsIHJlc3VsdCA/IHJlc3VsdC5lcnJvciA6ICfmnKrnn6XplJnor68nKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IChyZXN1bHQgPyByZXN1bHQuZXJyb3IgOiAn5pyN5Yqh5Zmo5pyq6L+U5Zue5oiQ5Yqf54q25oCBJykgfTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5LuO5pyN5Yqh5Zmo5ZCM5q2l5pWw5o2u5pe25Y+R55Sf572R57uc6ZSZ6K+vOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDmo4Dmn6XlrqDnianlkI3mmK/lkKblj6/nlKhcclxuICBhc3luYyBjaGVja1BldE5hbWVBdmFpbGFiaWxpdHkocGV0TmFtZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdjaGVja19wZXRfbmFtZScsIHtcclxuICAgICAgICBwZXRfbmFtZTogcGV0TmFtZVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgLi4ucmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfmo4Dmn6XlrqDnianlkI3lj6/nlKjmgKfml7blj5HnlJ/nvZHnu5zplJnor686JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UsIGlzQXZhaWxhYmxlOiBmYWxzZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5L+u5pS55a6g54mp5ZCNXHJcbiAgYXN5bmMgc2V0UGV0TmFtZSh1c2VySWQsIG5ld05hbWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnc2V0X3BldF9uYW1lJywge1xyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcclxuICAgICAgICBuZXdfbmFtZTogbmV3TmFtZVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S/ruaUueWuoOeJqeWQjeWksei0pTonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g6aKE5r+A5rS75qOA5p+lXHJcbiAgYXN5bmMgY2hlY2tEZXZpY2VSZWdpc3RyYXRpb24oZGV2aWNlSWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnY2hlY2tfcmVnaXN0cmF0aW9uJywge1xyXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWRcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfpooTmv4DmtLvmo4Dmn6XmiJDlip86JywgcmVzdWx0KTtcclxuICAgICAgLy8g55u05o6l6L+U5Zue5pyN5Yqh5Zmo55qE5Y6f5aeL5ZON5bqU77yMVUnlsYLmnJ/mnJvnmoTmmK/miYHlubPnu5PmnoRcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+mihOa/gOa0u+ajgOafpeaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XHJcbiAgICAgIC8vIOi/lOWbnuS4gOS4quWFvOWuueeahOmUmeivr+Wvueixoe+8jOmBv+WFjVVJ5bGC5bSp5rqDXHJcbiAgICAgIHJldHVybiB7IGlzX3JlZ2lzdGVyZWQ6IGZhbHNlLCBjYW5fYXV0b19hY3RpdmF0ZTogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDms6jlhozorr7lpIflubbojrflj5bnlKjmiLdJRFxyXG4gIGFzeW5jIHJlZ2lzdGVyQW5kR2V0VXNlcklkKGRldmljZUlkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBQYXNzIHRoZSBzZXJ2ZXIgcmVzcG9uc2UgZGlyZWN0bHkgdG8gdGhlIFVJIGxheWVyXHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3QoJ3JlZ2lzdGVyX2RldmljZV9hbmRfZ2V0X2lkJywge1xyXG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWRcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfms6jlhozmiJbojrflj5bnlKjmiLdJROaXtuWPkeeUn+e9kee7nOmUmeivrzonLCBlcnJvcik7XHJcbiAgICAgIC8vIFJldHVybiBhIGNvbXBhdGlibGUgZXJyb3Igb2JqZWN0XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDojrflj5blhazlkYrliJfooahcclxuICBhc3luYyBnZXRBbm5vdW5jZW1lbnRzKGxpbWl0ID0gMTApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnZ2V0X2Fubm91bmNlbWVudHMnLCB7XHJcbiAgICAgICAgbGltaXQ6IGxpbWl0XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygnT3JpZ2luYWwgYW5ub3VuY2VtZW50IHJlc3VsdCBmcm9tIHNlcnZlcjonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogcmVzdWx0LnN1Y2Nlc3MgfHwgZmFsc2UsXHJcbiAgICAgICAgYW5ub3VuY2VtZW50czogcmVzdWx0LmFubm91bmNlbWVudHMgfHwgW10sXHJcbiAgICAgICAgY291bnQ6IHJlc3VsdC5jb3VudCB8fCAwLFxyXG4gICAgICAgIHRpbWVzdGFtcDogcmVzdWx0LnRpbWVzdGFtcCxcclxuICAgICAgICBlcnJvcjogcmVzdWx0LmVycm9yXHJcbiAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfojrflj5blhazlkYrlpLHotKU6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgIGFubm91bmNlbWVudHM6IFtdLFxyXG4gICAgICAgIGNvdW50OiAwXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDmo4Dmn6XlupTnlKjmm7TmlrBcclxuICBhc3luYyBjaGVja0FwcFVwZGF0ZShjdXJyZW50VmVyc2lvbkNvZGUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdCgnY2hlY2tfdXBkYXRlJywge1xyXG4gICAgICAgIGN1cnJlbnRfdmVyc2lvbl9jb2RlOiBjdXJyZW50VmVyc2lvbkNvZGVcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlc3VsdC5zdWNjZXNzIHx8IGZhbHNlLFxyXG4gICAgICAgIGhhc1VwZGF0ZTogcmVzdWx0Lmhhc191cGRhdGUgfHwgZmFsc2UsXHJcbiAgICAgICAgdXBkYXRlSW5mbzogcmVzdWx0LnVwZGF0ZV9pbmZvIHx8IG51bGwsXHJcbiAgICAgICAgaXNGb3JjZVVwZGF0ZTogcmVzdWx0LmlzX2ZvcmNlX3VwZGF0ZSB8fCBmYWxzZSxcclxuICAgICAgICBjdXJyZW50VmVyc2lvbkNvZGU6IHJlc3VsdC5jdXJyZW50X3ZlcnNpb25fY29kZSB8fCBjdXJyZW50VmVyc2lvbkNvZGUsXHJcbiAgICAgICAgbGF0ZXN0VmVyc2lvbkNvZGU6IHJlc3VsdC5sYXRlc3RfdmVyc2lvbl9jb2RlIHx8IGN1cnJlbnRWZXJzaW9uQ29kZSxcclxuICAgICAgICBlcnJvcjogcmVzdWx0LmVycm9yXHJcbiAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfmo4Dmn6Xmm7TmlrDlpLHotKU6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgIGhhc1VwZGF0ZTogZmFsc2UsXHJcbiAgICAgICAgaXNGb3JjZVVwZGF0ZTogZmFsc2VcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBcGlTZXJ2aWNlKClcclxuIiwiLy8gY29uZmlnLmpzXHJcbmV4cG9ydCBjb25zdCBDT05GSUcgPSB7XHJcbiAgLy8g5Lit6L2s5pyN5Yqh5Zmo6YWN572uXHJcbiAgU0VSVkVSOiB7XHJcbiAgICBCQVNFX1VSTDogJ2h0dHA6Ly8xMDMuMjA1LjI1My44NzoyMjIwNydcclxuICB9LFxyXG4gIFxyXG4gIC8vIOazqOaEj++8mlVSTCDliY3nvIDlnKggYXBpLXNlcnZpY2UuanMg5Lit56Gs57yW56CB5LqGXHJcbiAgLy8g6L+Z6YeM5LiN5YaN6ZyA6KaB6YWN572uXHJcbiAgXHJcbiAgLy8g5bqU55So6YWN572uXHJcbiAgQVBQOiB7XHJcbiAgICBOQU1FOiAnQmFuZFBldCcsXHJcbiAgICBWRVJTSU9OOiAnMC4zLjUgQWxwaGEnLFxyXG4gICAgVkVSU0lPTl9DT0RFOiAzNSwgIC8vIOaWsOWinu+8mueUqOS6jueJiOacrOavlOi+g+eahOaVsOWtl++8iDAuMy41IC0+IDM177yJXHJcbiAgICBNQVhfQ0xJQ0tTX1BFUl9CQVRDSDogNTAsXHJcbiAgICBTWU5DX0lOVEVSVkFMOiA2MDAwMCxcclxuICAgIFJBTktfTElNSVQ6IDEwLFxyXG4gICAgXHJcbiAgICAvLyDmm7TmlrDmo4Dmn6XphY3nva7vvIjmlrDlop7vvIlcclxuICAgIENIRUNLX1VQREFURV9JTlRFUlZBTDogMzYwMDAwMCwgLy8gMeWwj+aXtuajgOafpeS4gOasoeabtOaWsFxyXG4gICAgQU5OT1VOQ0VNRU5UX0NBQ0hFX1RJTUU6IDMwMDAwMCwgLy8gNeWIhumSn+e8k+WtmOWFrOWRilxyXG4gIH0sXHJcbiAgXHJcbiAgLy8g5a2Y5YKo6ZSu5ZCNXHJcbiAgU1RPUkFHRV9LRVlTOiB7XHJcbiAgICBERVZJQ0VfSUQ6ICdkZXZpY2VfaWQnLFxyXG4gICAgSVNfTE9DQUxMWV9BQ1RJVkFURUQ6ICdpc19sb2NhbGx5X2FjdGl2YXRlZCcsXHJcbiAgICBVU0VSX0lORk86ICd1c2VyX2luZm8nLFxyXG4gICAgUEVORElOR19DTElDS1M6ICdwZW5kaW5nX2NsaWNrcycsXHJcbiAgICBMQVNUX1NZTkNfVElNRTogJ2xhc3Rfc3luY190aW1lJyxcclxuICAgIFRPVEFMX0NMSUNLUzogJ3RvdGFsX2NsaWNrcycsXHJcbiAgICBcclxuICAgIC8vIOaWsOWinuWtmOWCqOmUrlxyXG4gICAgTEFTVF9VUERBVEVfQ0hFQ0tfVElNRTogJ2xhc3RfdXBkYXRlX2NoZWNrX3RpbWUnLFxyXG4gICAgTEFTVF9BTk5PVU5DRU1FTlRfRkVUQ0hfVElNRTogJ2xhc3RfYW5ub3VuY2VtZW50X2ZldGNoX3RpbWUnLFxyXG4gICAgQ0FDSEVEX0FOTk9VTkNFTUVOVFM6ICdjYWNoZWRfYW5ub3VuY2VtZW50cycsXHJcbiAgICBDQUNIRURfVVBEQVRFX0lORk86ICdjYWNoZWRfdXBkYXRlX2luZm8nLFxyXG4gICAgSUdOT1JFRF9WRVJTSU9OOiAnaWdub3JlZF92ZXJzaW9uX2NvZGUnLCAvLyDnlKjmiLflv73nlaXnmoTniYjmnKxcclxuICAgIEZPUkNFX1VQREFURV9SRVFVSVJFRDogJ2ZvcmNlX3VwZGF0ZV9yZXF1aXJlZCcsIC8vIOaYr+WQpumcgOimgeW8uuWItuabtOaWsFxyXG4gIH1cclxufVxyXG4iLCIvLyBzcmMvY29tbW9uL2pzL3VzZXJTZXJ2aWNlLmpzXG5pbXBvcnQgZGV2aWNlIGZyb20gJ0BzeXN0ZW0uZGV2aWNlJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XG5pbXBvcnQgQXBpU2VydmljZSBmcm9tICcuL2FwaS1zZXJ2aWNlLmpzJztcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vY29uZmlnLmpzJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgdG8gaGFuZGxlIHNpbGVudCB1c2VyIHJlZ2lzdHJhdGlvbiBhbmQgZGF0YSByZXRyaWV2YWwuXG4gKi9cbmNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgXG4gIC8qKlxuICAgKiBQcm9taXNpZmllZCBoZWxwZXIgZm9yIHN0b3JhZ2UuZ2V0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSB0byByZXRyaWV2ZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gVGhlIHZhbHVlIGZyb20gc3RvcmFnZSwgb3IgbnVsbCBpZiBub3QgZm91bmQuXG4gICAqL1xuICBfc3RvcmFnZUdldChrZXkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHN0b3JhZ2UuZ2V0KHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiByZXNvbHZlKGRhdGEpLFxuICAgICAgICBmYWlsOiAoKSA9PiByZXNvbHZlKG51bGwpLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUHJvbWlzaWZpZWQgaGVscGVyIGZvciBzdG9yYWdlLnNldC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gc2V0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgdmFsdWUgdG8gc3RvcmUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgX3N0b3JhZ2VTZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzdG9yYWdlLnNldCh7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXG4gICAgICAgIGZhaWw6IChlcnIsIGNvZGUpID0+IHJlamVjdChuZXcgRXJyb3IoYFN0b3JhZ2Uuc2V0IGZhaWxlZCBmb3IgJyR7a2V5fSc6ICR7ZXJyfSAoJHtjb2RlfSlgKSksXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHJhdyBkZXZpY2UgaWRlbnRpZmllciwgdXNpbmcgYSBmYWxsYmFjayBmb3Igc2ltdWxhdG9ycy5cbiAgICogSXQgYWxzbyBzYXZlcyB0aGUgcmF3IElEIHRvIHN0b3JhZ2UgZm9yIGZ1dHVyZSB1c2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZ3xudWxsPn0gVGhlIHJhdyBkZXZpY2UgSUQgb3IgbnVsbCBvbiBmYWlsdXJlLlxuICAgKi9cbiAgX2dldFJhd0RldmljZUlkKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgZGV2aWNlLmdldFNlcmlhbCh7XG4gICAgICAgIHN1Y2Nlc3M6IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICAgICAgbGV0IHNlcmlhbCA9IGRhdGEgPyBkYXRhLnNlcmlhbCA6IG51bGw7XG4gICAgICAgICAgaWYgKHNlcmlhbCA9PT0gJ05BJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRGV2aWNlIHNlcmlhbCBpcyAnTkEnLCB1c2luZyBhIGZpeGVkIHRlc3Qgc2VyaWFsLlwiKTtcbiAgICAgICAgICAgIHNlcmlhbCA9ICdURVNUVk0tU04tMDEyMzQ1Njc4OSc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFzZXJpYWwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBnZXQgYSB2YWxpZCBkZXZpY2Ugc2VyaWFsLicpO1xuICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgcmF3IElEIGZvciBvdGhlciBzZXJ2aWNlcyB0aGF0IG1pZ2h0IG5lZWQgaXQgKGUuZy4sIEFQSSBjYWxscylcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX3N0b3JhZ2VTZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5ERVZJQ0VfSUQsIHNlcmlhbCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2F2ZWQgcmF3IGRldmljZSBJRDonLCBzZXJpYWwpO1xuICAgICAgICAgICAgcmVzb2x2ZShzZXJpYWwpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBzYXZlIHJhdyBkZXZpY2UgSUQgdG8gc3RvcmFnZTonLCBlKTtcbiAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAoZXJyLCBjb2RlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgQ29ubmVjdGlvbiBpcyBpbnZhbGlkYCk7XG4gICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIHRoZSB1c2VyIGluZm9ybWF0aW9uIHRvIGxvY2FsIHN0b3JhZ2UuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB1c2VySW5mbyAtIFRoZSB1c2VyIGluZm8gb2JqZWN0IHJlY2VpdmVkIGZyb20gdGhlIHNlcnZlci5cbiAgICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0Pn0gVGhlIHVzZXIgaW5mbyB0aGF0IHdhcyBzYXZlZC5cbiAgICovXG4gIGFzeW5jIF9zYXZlVXNlckluZm8odXNlckluZm8pIHtcbiAgICBpZiAoIXVzZXJJbmZvIHx8ICghdXNlckluZm8uaWQgJiYgIXVzZXJJbmZvLnVzZXJfbnVtYmVyKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBpbmZvIGlzIGludmFsaWQsIGNhbm5vdCBzYXZlLlwiKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdXNlckluZm9Ub1NhdmUgPSB7XG4gICAgICBpZDogdXNlckluZm8uaWQgfHwgdXNlckluZm8udXNlcl9udW1iZXIsXG4gICAgICB1c2VyX251bWJlcjogdXNlckluZm8udXNlcl9udW1iZXIsXG4gICAgICBwZXRfbmFtZTogdXNlckluZm8ucGV0X25hbWUsXG4gICAgICB0b3RhbF9jbGlja3M6IHVzZXJJbmZvLnRvdGFsX2NsaWNrcyB8fCAwXG4gICAgfTtcblxuICAgIGF3YWl0IHRoaXMuX3N0b3JhZ2VTZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8sIEpTT04uc3RyaW5naWZ5KHVzZXJJbmZvVG9TYXZlKSk7XG4gICAgY29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgc2F2ZWQgdXNlciBpbmZvIHRvIHN0b3JhZ2U6XCIsIHVzZXJJbmZvVG9TYXZlKTtcbiAgICByZXR1cm4gdXNlckluZm9Ub1NhdmU7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG1haW4gcHVibGljIG1ldGhvZC4gSXQgZW5zdXJlcyB0aGF0IHVzZXIgaW5mb3JtYXRpb24gaXMgcHJlc2VudCBpbiBzdG9yYWdlLlxuICAgKiBJZiBub3QsIGl0IHNpbGVudGx5IGdldHMgYSBkZXZpY2UgSUQsIGNoZWNrcyB3aXRoIHRoZSBzZXJ2ZXIsIGFuZCBlaXRoZXJcbiAgICogcmV0cmlldmVzIGV4aXN0aW5nIHVzZXIgZGF0YSBvciByZWdpc3RlcnMgYSBuZXcgdXNlci5cbiAgICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0fG51bGw+fSBUaGUgdXNlciBpbmZvLCBvciBudWxsIGlmIHRoZSBwcm9jZXNzIGZhaWxzLlxuICAgKi9cbiAgYXN5bmMgZW5zdXJlVXNlcklzUmVnaXN0ZXJlZChmb3JjZVN5bmMgPSBmYWxzZSkge1xuICAgIC8vIDEuIENoZWNrIGlmIHVzZXIgaW5mbyBhbHJlYWR5IGV4aXN0cyBhbmQgaXMgdmFsaWQuXG4gICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gQ2hlY2tpbmcgZm9yIGV4aXN0aW5nIHVzZXIgaW5mbyBpbiBzdG9yYWdlLi4uJyk7XG4gICAgY29uc3QgZXhpc3RpbmdVc2VySW5mb0pTT04gPSBhd2FpdCB0aGlzLl9zdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuVVNFUl9JTkZPKTtcbiAgICBpZiAoZXhpc3RpbmdVc2VySW5mb0pTT04pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gSlNPTi5wYXJzZShleGlzdGluZ1VzZXJJbmZvSlNPTik7XG4gICAgICAgIGlmICh1c2VySW5mbyAmJiB1c2VySW5mby5pZCkge1xuICAgICAgICAgIGlmIChmb3JjZVN5bmMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIEZvcmNlIHN5bmMgZW5hYmxlZC4gQXR0ZW1wdGluZyB0byBzeW5jIGxhdGVzdCBkYXRhIGZyb20gc2VydmVyLi4uJyk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCBzeW5jUmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5zeW5jRnJvbVNlcnZlcih1c2VySW5mby5pZCk7XG4gICAgICAgICAgICAgIGlmIChzeW5jUmVzdWx0ICYmIHN5bmNSZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFN1Y2Nlc3NmdWxseSBzeW5jZWQgZnJvbSBzZXJ2ZXIuJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX3NhdmVVc2VySW5mbyhzeW5jUmVzdWx0LnVzZXJJbmZvKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1tVc2VyU2VydmljZV0gU3luYyBmcm9tIHNlcnZlciBmYWlsZWQsIHdpbGwgdXNlIHN0YWxlIGxvY2FsIGRhdGEuIEVycm9yOicsIHN5bmNSZXN1bHQgPyBzeW5jUmVzdWx0LmVycm9yIDogJ1Vua25vd24gZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlckluZm87IC8vIFJldHVybiBzdGFsZSBkYXRhIGlmIHN5bmMgZmFpbHNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoc3luY0Vycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tVc2VyU2VydmljZV0gQSBjcml0aWNhbCBlcnJvciBvY2N1cnJlZCBkdXJpbmcgc2VydmVyIHN5bmM6Jywgc3luY0Vycm9yKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHVzZXJJbmZvOyAvLyBSZXR1cm4gc3RhbGUgZGF0YSBvbiBjcml0aWNhbCBzeW5jIGZhaWx1cmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gVXNlciBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuIEZvdW5kIGluZm86JywgdXNlckluZm8pO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXJJbmZvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBNYWxmb3JtZWQgSlNPTiwgcHJvY2VlZCB3aXRoIHJlZ2lzdHJhdGlvbi5cbiAgICAgICAgY29uc29sZS53YXJuKCdbVXNlclNlcnZpY2VdIFVzZXIgaW5mbyBpbiBzdG9yYWdlIGlzIG1hbGZvcm1lZC4gUHJvY2VlZGluZyB3aXRoIHJlZ2lzdHJhdGlvbi4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBVc2VyIG5vdCBmb3VuZCBsb2NhbGx5LiBTdGFydGluZyBzaWxlbnQgcmVnaXN0cmF0aW9uIHByb2Nlc3MuLi4nKTtcblxuICAgIC8vIDIuIEdldCBEZXZpY2UgSURcbiAgICBjb25zdCBkZXZpY2VJZCA9IGF3YWl0IHRoaXMuX2dldFJhd0RldmljZUlkKCk7XG4gICAgaWYgKCFkZXZpY2VJZCkge1xuICAgICAgY29uc29sZS5lcnJvcignW1VzZXJTZXJ2aWNlXSBDUklUSUNBTDogQ2Fubm90IHByb2NlZWQgd2l0aCByZWdpc3RyYXRpb246IGZhaWxlZCB0byBnZXQgZGV2aWNlIElELicpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBbVXNlclNlcnZpY2VdIEdvdCBkZXZpY2UgSUQ6ICR7ZGV2aWNlSWR9YCk7XG5cbiAgICB0cnkge1xuICAgICAgLy8gMy4gQ2hlY2sgaWYgdGhlIGRldmljZSBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQgb24gdGhlIHNlcnZlclxuICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gQ2hlY2tpbmcgZGV2aWNlIHJlZ2lzdHJhdGlvbiB3aXRoIHNlcnZlci4uLicpO1xuICAgICAgY29uc3QgcmVnUmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5jaGVja0RldmljZVJlZ2lzdHJhdGlvbihkZXZpY2VJZCk7XG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTZXJ2ZXIgcmVnaXN0cmF0aW9uIGNoZWNrIHJlc3BvbnNlOicsIEpTT04uc3RyaW5naWZ5KHJlZ1Jlc3VsdCkpO1xuXG5cbiAgICAgIGlmIChyZWdSZXN1bHQgJiYgcmVnUmVzdWx0LmlzX3JlZ2lzdGVyZWQgJiYgcmVnUmVzdWx0LnVzZXJJbmZvKSB7XG4gICAgICAgIC8vIERldmljZSBpcyBrbm93biwgc2F2ZSB0aGUgaW5mbyBhbmQgd2UncmUgZG9uZS5cbiAgICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gRGV2aWNlIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCBvbiBzZXJ2ZXIuIFJlc3RvcmluZyB1c2VyIGluZm8uJyk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9zYXZlVXNlckluZm8ocmVnUmVzdWx0LnVzZXJJbmZvKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gNC4gSWYgbm90IHJlZ2lzdGVyZWQsIGNyZWF0ZSBhIG5ldyB1c2VyIHJlY29yZC5cbiAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIERldmljZSBub3QgcmVnaXN0ZXJlZC4gQXR0ZW1wdGluZyB0byByZWdpc3RlciBhIG5ldyB1c2VyLi4uJyk7XG4gICAgICBjb25zdCBuZXdSZWdSZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLnJlZ2lzdGVyQW5kR2V0VXNlcklkKGRldmljZUlkKTtcbiAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFNlcnZlciBuZXcgdXNlciByZWdpc3RyYXRpb24gcmVzcG9uc2U6JywgSlNPTi5zdHJpbmdpZnkobmV3UmVnUmVzdWx0KSk7XG5cblxuICAgICAgaWYgKG5ld1JlZ1Jlc3VsdCAmJiBuZXdSZWdSZXN1bHQuc3VjY2VzcyAmJiBuZXdSZWdSZXN1bHQudXNlckluZm8pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gU3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWQgbmV3IHVzZXIuJyk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9zYXZlVXNlckluZm8obmV3UmVnUmVzdWx0LnVzZXJJbmZvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tVc2VyU2VydmljZV0gQ1JJVElDQUw6IEZhaWxlZCB0byByZWdpc3RlciBuZXcgdXNlci4nLCBuZXdSZWdSZXN1bHQgPyBuZXdSZWdSZXN1bHQubWVzc2FnZSA6ICdObyByZXN1bHQgZnJvbSBzZXJ2ZXInKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignW1VzZXJTZXJ2aWNlXSBDUklUSUNBTDogQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHRoZSBzaWxlbnQgcmVnaXN0cmF0aW9uIEFQSSBjYWxsczonLCBlKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBudW1iZXIgb2YgcGVuZGluZyBjbGlja3MgYnkgYSBnaXZlbiBhbW91bnQuXG4gICAqIFRoaXMgaXMgdGhlIGNlbnRyYWxpemVkIG1ldGhvZCBmb3IgYWxsIGNsaWNrIG1vZGlmaWNhdGlvbnMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbW91bnQgLSBUaGUgbnVtYmVyIHRvIGFkZCB0byBwZW5kaW5nIGNsaWNrcy4gQ2FuIGJlIG5lZ2F0aXZlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXJ8bnVsbD59IFRoZSBuZXcgbnVtYmVyIG9mIHBlbmRpbmcgY2xpY2tzLCBvciBudWxsIG9uIGZhaWx1cmUuXG4gICAqL1xuICBhc3luYyB1cGRhdGVQZW5kaW5nQ2xpY2tzKGFtb3VudCkge1xuICAgIGlmICh0eXBlb2YgYW1vdW50ICE9PSAnbnVtYmVyJyB8fCBpc05hTihhbW91bnQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tVc2VyU2VydmljZV0gdXBkYXRlUGVuZGluZ0NsaWNrcyByZWNlaXZlZCBhbiBpbnZhbGlkIGFtb3VudDonLCBhbW91bnQpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBlbmRpbmdDbGlja3NEYXRhID0gYXdhaXQgdGhpcy5fc3RvcmFnZUdldChDT05GSUcuU1RPUkFHRV9LRVlTLlBFTkRJTkdfQ0xJQ0tTKTtcbiAgICAgIGxldCBjdXJyZW50Q2xpY2tzID0gcGFyc2VJbnQocGVuZGluZ0NsaWNrc0RhdGEpIHx8IDA7XG4gICAgICBcbiAgICAgIGNvbnN0IG5ld0NsaWNrcyA9IGN1cnJlbnRDbGlja3MgKyBhbW91bnQ7XG4gICAgICBcbiAgICAgIGF3YWl0IHRoaXMuX3N0b3JhZ2VTZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5QRU5ESU5HX0NMSUNLUywgbmV3Q2xpY2tzLnRvU3RyaW5nKCkpO1xuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyhgW1VzZXJTZXJ2aWNlXSBQZW5kaW5nIGNsaWNrcyB1cGRhdGVkIGJ5ICR7YW1vdW50fS4gTmV3IHZhbHVlOiAke25ld0NsaWNrc31gKTtcbiAgICAgIHJldHVybiBuZXdDbGlja3M7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignW1VzZXJTZXJ2aWNlXSBGYWlsZWQgdG8gdXBkYXRlIHBlbmRpbmcgY2xpY2tzIGluIHN0b3JhZ2U6JywgZSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgcGVuZGluZyBjbGlja3MgZnJvbSBzdG9yYWdlIGFuZCBzeW5jcyB0aGVtIHdpdGggdGhlIHNlcnZlci5cbiAgICogVGhpcyBpcyBhIHNlbGYtY29udGFpbmVkLCBmaXJlLWFuZC1mb3JnZXQgbWV0aG9kLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gVHJ1ZSBvbiBzdWNjZXNzLCBmYWxzZSBvbiBmYWlsdXJlIG9yIGlmIG5vIHN5bmMgd2FzIG5lZWRlZC5cbiAgICovXG4gIGFzeW5jIHRyaWdnZXJDbGlja1N5bmMoKSB7XG4gICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gVHJpZ2dlcmluZyBjbGljayBzeW5jLi4uJyk7XG4gICAgXG4gICAgLy8gMS4gR2V0IHVzZXIgaW5mb1xuICAgIGNvbnN0IHVzZXJJbmZvSlNPTiA9IGF3YWl0IHRoaXMuX3N0b3JhZ2VHZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8pO1xuICAgIGlmICghdXNlckluZm9KU09OKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tVc2VyU2VydmljZV0gU3luYyBhYm9ydGVkOiBVc2VyIGluZm8gbm90IGZvdW5kIGluIHN0b3JhZ2UuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGxldCB1c2VySW5mbztcbiAgICB0cnkge1xuICAgICAgdXNlckluZm8gPSBKU09OLnBhcnNlKHVzZXJJbmZvSlNPTik7XG4gICAgICBpZiAoIXVzZXJJbmZvIHx8ICF1c2VySW5mby5pZCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tVc2VyU2VydmljZV0gU3luYyBhYm9ydGVkOiBVc2VyIElEIGlzIGludmFsaWQuJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGNvbnNvbGUud2FybignW1VzZXJTZXJ2aWNlXSBTeW5jIGFib3J0ZWQ6IENvdWxkIG5vdCBwYXJzZSB1c2VyIGluZm8uJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMi4gR2V0IHBlbmRpbmcgY2xpY2tzXG4gICAgY29uc3QgcGVuZGluZ0NsaWNrc0RhdGEgPSBhd2FpdCB0aGlzLl9zdG9yYWdlR2V0KENPTkZJRy5TVE9SQUdFX0tFWVMuUEVORElOR19DTElDS1MpO1xuICAgIGNvbnN0IGNsaWNrc1RvU3luYyA9IHBhcnNlSW50KHBlbmRpbmdDbGlja3NEYXRhKTtcblxuICAgIGlmIChpc05hTihjbGlja3NUb1N5bmMpKSB7XG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBObyBwZW5kaW5nIGNsaWNrcyB0byBzeW5jICh2YWx1ZSBpcyBOYU4pLicpO1xuICAgICAgcmV0dXJuIHRydWU7IC8vIE5vdGhpbmcgdG8gZG8sIHNvIGl0J3MgYSBcInN1Y2Nlc3NcIlxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGBbVXNlclNlcnZpY2VdIEZvdW5kICR7Y2xpY2tzVG9TeW5jfSBwZW5kaW5nIGNsaWNrcyBmb3IgdXNlciAke3VzZXJJbmZvLmlkfS4gU3luY2luZy4uLmApO1xuXG4gICAgLy8gMy4gQ2FsbCBBUElcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLnN5bmNDbGlja3ModXNlckluZm8uaWQsIGNsaWNrc1RvU3luYyk7XG5cbiAgICAvLyA0LiBVcGRhdGUgc3RvcmFnZSBvbiBzdWNjZXNzXG4gICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTeW5jIHN1Y2Nlc3NmdWwuIFJlc2V0dGluZyBwZW5kaW5nIGNsaWNrcy4nKTtcbiAgICAgIGF3YWl0IHRoaXMuX3N0b3JhZ2VTZXQoQ09ORklHLlNUT1JBR0VfS0VZUy5QRU5ESU5HX0NMSUNLUywgJzAnKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbVXNlclNlcnZpY2VdIFN5bmMgZmFpbGVkOicsIHJlc3VsdC5lcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgdGhlIGxhdGVzdCB1c2VyIGRhdGEgZnJvbSB0aGUgc2VydmVyIGFuZCBvdmVyd3JpdGVzIGxvY2FsIHN0b3JhZ2UuXG4gICAqIFRoaXMgbWV0aG9kIHJ1bnMgdGhlIGZ1bGwgcmVnaXN0cmF0aW9uL2xvZ2luIGZsb3cgdG8gZW5zdXJlIGRhdGEgaXMgY29uc2lzdGVudC5cbiAgICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZ30+fVxuICAgKi9cbiAgYXN5bmMgZm9yY2VTeW5jRnJvbVNlcnZlcigpIHtcbiAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdGFydGluZyBmb3JjZSBzeW5jIGZyb20gc2VydmVyLi4uJyk7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIC8vIDEuIEZvcmNlIGEgc3luYyBvZiBhbnkgcGVuZGluZyBjbGlja3MgRklSU1QuXG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdGVwIDE6IFN5bmNpbmcgbG9jYWwgcGVuZGluZyBjbGlja3MgYmVmb3JlIGZldGNoaW5nIHNlcnZlciBkYXRhLicpO1xuICAgICAgY29uc3QgY2xpY2tTeW5jU3VjY2VzcyA9IGF3YWl0IHRoaXMudHJpZ2dlckNsaWNrU3luYygpO1xuXG4gICAgICBpZiAoIWNsaWNrU3luY1N1Y2Nlc3MpIHtcbiAgICAgICAgLy8gSWYgdGhlIGNsaWNrIHN5bmMgZmFpbHMsIHdlIHNob3VsZCBub3QgcHJvY2VlZCwgYXMgd2UgbWlnaHQgb3ZlcndyaXRlIHRoZSBsb2NhbCBzdGF0ZVxuICAgICAgICAvLyB3aXRoIHN0YWxlIHNlcnZlciBkYXRhLCBjYXVzaW5nIHRoZSB1c2VyIHRvIGxvc2UgdGhlaXIgcGVuZGluZyBjbGlja3MuXG4gICAgICAgIGNvbnN0IGVycm9yTXNnID0gJ+aXoOazleWQjOatpeacrOWcsOeCueWHu+aVsOaNru+8jOW3suWPlua2iOS7juacjeWKoeWZqOabtOaWsO+8jOS7pemYsuaVsOaNruS4ouWkseOAgic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtVc2VyU2VydmljZV0gJHtlcnJvck1zZ31gKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yTXNnIH07XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdGVwIDE6IExvY2FsIHBlbmRpbmcgY2xpY2tzIHN5bmNlZCBzdWNjZXNzZnVsbHkuJyk7XG5cblxuICAgICAgLy8gMi4gTm93LCBydW4gdGhlIGZ1bGwgZ2V0L3JlZ2lzdGVyIHVzZXIgZmxvdyB0byBnZXQgdGhlIGxhdGVzdCBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnW1VzZXJTZXJ2aWNlXSBTdGVwIDI6IEZldGNoaW5nIGxhdGVzdCB1c2VyIGRhdGEgZnJvbSBzZXJ2ZXIuJyk7XG4gICAgICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IHRoaXMuZW5zdXJlVXNlcklzUmVnaXN0ZXJlZCh0cnVlKTtcblxuICAgICAgaWYgKHVzZXJJbmZvICYmIHVzZXJJbmZvLmlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbVXNlclNlcnZpY2VdIFN0ZXAgMjogU3VjY2Vzc2Z1bGx5IGZldGNoZWQgYW5kIHVwZGF0ZWQgdXNlciBpbmZvLiBVc2VySW5mbzonLCB1c2VySW5mbyk7XG4gICAgICAgIC8vIFRoZSBlbnN1cmVVc2VySXNSZWdpc3RlcmVkIG1ldGhvZCBhbHJlYWR5IHNhdmVzIHRoZSBuZXcgdXNlciBpbmZvLCB3aGljaCBpbmNsdWRlcyB0aGUgdXBkYXRlZCB0b3RhbF9jbGlja3MuXG4gICAgICAgIC8vIEFuZCB0cmlnZ2VyQ2xpY2tTeW5jIGFscmVhZHkgcmVzZXQgcGVuZGluZ19jbGlja3MgdG8gMC4gU28sIHdlIGFyZSBkb25lLlxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1tVc2VyU2VydmljZV0gRm9yY2Ugc3luYyBjb21wbGV0ZS4gTG9jYWwgc3RvcmFnZSBpcyBub3cgdXAtdG8tZGF0ZS4nKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ+WQjOatpeaIkOWKn++8gScgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVycm9yTXNnID0gJ+aXoOazleS7juacjeWKoeWZqOiOt+WPluacgOaWsOeUqOaIt+aVsOaNruOAgic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtVc2VyU2VydmljZV0gJHtlcnJvck1zZ31gKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yTXNnIH07XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignW1VzZXJTZXJ2aWNlXSBBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgdGhlIGZvcmNlIHN5bmMgcHJvY2VzczonLCBlKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAn5ZCM5q2l5aSx6LSl77yM5Y+R55Sf5pyq55+l6ZSZ6K+vJyB9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlclNlcnZpY2UoKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9ICgoKSA9PiB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjYuOFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS42LjhcIjsiLCI8aW1wb3J0IG5hbWU9XCJJbnB1dE1ldGhvZFwiIHNyYz1cIi4uL0lucHV0TWV0aG9kL0lucHV0TWV0aG9kLnV4XCI+PC9pbXBvcnQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPHN0YWNrIGNsYXNzPVwicGFnZS1jb250YWluZXJcIj5cblxuICAgIDwhLS0gTGF5ZXIgMTogTWFpbiBDb250ZW50IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cblxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vY29tbW9uL2JhY2sucG5nXCIgY2xhc3M9XCJwYWdlLWhlYWRlci1iYWNrLWJ1dHRvblwiIG9uY2xpY2s9XCJnb0JhY2tcIj48L2ltYWdlPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGUtdGltZVwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLXRpbWUtZGlzcGxheVwiPnt7IHRpbWUgfX08L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtaGVhZGVyLXRpdGxlXCI+5a6g54mp5ZG95ZCNPC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LW5hbWUtc2VjdGlvblwiPlxuICAgICAgICAgICAgPHRleHQ+5b2T5YmN5ZCN5a2XOiB7eyBjdXJyZW50UGV0TmFtZSB9fTwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZS1pbnB1dFwiIG9uY2xpY2s9XCJ0b2dnbGVLZXlib2FyZCh0cnVlKVwiPlxuICAgICAgICAgICAgPHRleHQ+e3sgbmV3UGV0TmFtZSB8fCAn54K55Ye76L6T5YWl5paw5ZCN5a2XJyB9fTwvdGV4dD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXJzb3JcIiBpZj1cInt7IW5ld1BldE5hbWV9fVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vY2hlY2sucG5nXCIgY2xhc3M9XCJjb25maXJtLWJ1dHRvblwiIG9uY2xpY2s9XCJzYXZlUGV0TmFtZVwiPjwvaW1hZ2U+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJzdGF0dXMtdGV4dFwiPnt7IHN0YXR1c01lc3NhZ2UgfX08L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIExheWVyIDI6IEtleWJvYXJkIC0tPlxuICAgIDxJbnB1dE1ldGhvZCBoaWRlPVwie3shc2hvd0tleWJvYXJkfX1cIiBrZXlib2FyZHR5cGU9XCJRV0VSVFlcIiBzY3JlZW50eXBlPVwicmVjdFwiIG9uY29tcGxldGU9XCJoYW5kbGVLZXlib2FyZENvbXBsZXRlXCIgb25kZWxldGU9XCJoYW5kbGVLZXlib2FyZERlbGV0ZVwiPjwvSW5wdXRNZXRob2Q+XG5cbiAgICA8IS0tIExheWVyIDM6IENsb3NlIEJ1dHRvbiAob24gdG9wIG9mIGV2ZXJ5dGhpbmcpIC0tPlxuICAgIDxpbWFnZSBzcmM9XCIuLi9jb21tb24vU2hvd0tleUJvYXJkLnBuZ1wiIGNsYXNzPVwiY2xvc2Uta2V5Ym9hcmQtYnV0dG9uXCIgc2hvdz1cInt7c2hvd0tleWJvYXJkfX1cIiBvbmNsaWNrPVwidG9nZ2xlS2V5Ym9hcmQoZmFsc2UpXCI+PC9pbWFnZT5cbiAgPC9zdGFjaz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5jb250ZW50LXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmNsb3NlLWtleWJvYXJkLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgei1pbmRleDogMTAwO1xuICB9XG4gIC5wYWdlLWhlYWRlci1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLnBhZ2UtdGltZS1kaXNwbGF5IHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIH1cbiAgLnBhZ2UtaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIHRpdGxlIGJsb2NrICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBBbmNob3IgZm9yIGJhY2sgYnV0dG9uICovXG4gIH1cbiAgLnBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgfVxuICAucGFnZS1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxuICAuaGVhZGVyLXRpdGxlLXRpbWUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAucGFnZS1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDE7IC8qIFRha2UgdXAgcmVtYWluaW5nIHZlcnRpY2FsIHNwYWNlICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7IC8qIEFsbG93IGNvbnRlbnQgdG8gc2Nyb2xsICovXG4gIH1cbiAgLmNvbnRlbnQtY29udGFpbmVyIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuY3VycmVudC1uYW1lLXNlY3Rpb24geyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XG4gIC5jdXJyZW50LW5hbWUtc2VjdGlvbiB0ZXh0IHsgY29sb3I6ICNBQUE7IGZvbnQtc2l6ZTogMjhweDsgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuICAubmFtZS1pbnB1dCB7IFxuICAgIHdpZHRoOiA5MCU7IFxuICAgIGhlaWdodDogNzBweDsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTsgXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7IFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7IFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAubmFtZS1pbnB1dCB0ZXh0IHsgY29sb3I6ICNGRkY7IGZvbnQtc2l6ZTogMzJweDsgfVxuICAuY3Vyc29yIHtcbiAgICB3aWR0aDogNHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QUZGO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBibGluaztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICB9XG4gIEBrZXlmcmFtZXMgYmxpbmsge1xuICAgIGZyb20geyBvcGFjaXR5OiAxOyB9XG4gICAgdG8geyBvcGFjaXR5OiAwOyB9XG4gIH1cbiAgLmNvbmZpcm0tYnV0dG9uIHsgd2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDEwMHB4OyBib3JkZXItcmFkaXVzOiA1MHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QUZGOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuc3RhdHVzLXRleHQgeyBjb2xvcjogI0ZGM0IzMDsgZm9udC1zaXplOiAyNHB4OyBtYXJnaW4tdG9wOiAyMHB4OyB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInO1xuICAgIGltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSc7XG4gICAgaW1wb3J0IHByb21wdCBmcm9tICdAc3lzdGVtLnByb21wdCc7XG4gICAgaW1wb3J0IEFwaVNlcnZpY2UgZnJvbSAnLi4vY29tbW9uL2pzL2FwaS1zZXJ2aWNlLmpzJztcbiAgICBpbXBvcnQgVXNlclNlcnZpY2UgZnJvbSAnLi4vY29tbW9uL2pzL3VzZXJTZXJ2aWNlLmpzJztcbiAgICBpbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuLi9jb21tb24vanMvY29uZmlnLmpzJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGltZTogJzAwOjAwJyxcbiAgICAgICAgY3VycmVudFBldE5hbWU6ICcuLi4nLCBcbiAgICAgICAgbmV3UGV0TmFtZTogJycsXG4gICAgICAgIHN0YXR1c01lc3NhZ2U6ICcnLFxuICAgICAgICBzaG93S2V5Ym9hcmQ6IGZhbHNlLFxuICAgICAgICBtYXhOYW1lTGVuZ3RoOiAxMCAvLyBNYXggbGVuZ3RoIGZvciB0aGUgcGV0IG5hbWVcbiAgICAgIH0sXG4gICAgICBhc3luYyBvbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVGltZSgpO1xuICAgICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVRpbWUsIDEwMDAwKTtcbiAgXG4gICAgICAgIC8vIEF0dGVtcHQgdG8gbG9hZCBjdXJyZW50IG5hbWUgZm9yIGRpc3BsYXkgcHVycG9zZXMgb25seVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHVzZXJJbmZvSlNPTiA9IGF3YWl0IHN0b3JhZ2UuZ2V0KHsga2V5OiBDT05GSUcuU1RPUkFHRV9LRVlTLlVTRVJfSU5GTyB9KTtcbiAgICAgICAgICBpZiAodXNlckluZm9KU09OKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VySW5mbyA9IEpTT04ucGFyc2UodXNlckluZm9KU09OKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBldE5hbWUgPSB1c2VySW5mby5wZXRfbmFtZSB8fCAn5pyq5ZG95ZCNJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGV0TmFtZSA9ICfmnKrlkb3lkI0nO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRoaXMuY3VycmVudFBldE5hbWUgPSAn5pyq5ZG95ZCNJztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHVwZGF0ZVRpbWUoKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBtaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIHRoaXMudGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICAgIH0sXG4gICAgICB0b2dnbGVLZXlib2FyZChzaG93KSB7XG4gICAgICAgIHRoaXMuc2hvd0tleWJvYXJkID0gc2hvdztcbiAgICAgIH0sXG4gICAgICBoYW5kbGVLZXlib2FyZENvbXBsZXRlKGUpIHtcbiAgICAgICAgY29uc3QgbmV3Q2hhciA9IGUuZGV0YWlsLmNvbnRlbnQ7XG4gICAgICAgIGlmICh0aGlzLm5ld1BldE5hbWUubGVuZ3RoIDwgdGhpcy5tYXhOYW1lTGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLm5ld1BldE5hbWUgKz0gbmV3Q2hhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21wdC5zaG93VG9hc3QoeyBtZXNzYWdlOiBg5ZCN5a2X5pyA6ZW/5Li6ICR7dGhpcy5tYXhOYW1lTGVuZ3RofSDkuKrlrZfnrKZgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBoYW5kbGVLZXlib2FyZERlbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubmV3UGV0TmFtZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm5ld1BldE5hbWUgPSB0aGlzLm5ld1BldE5hbWUuc2xpY2UoMCwgLTEpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgc2F2ZVBldE5hbWUoKSB7XG4gICAgICAgIGlmICghdGhpcy5uZXdQZXROYW1lIHx8IHRoaXMubmV3UGV0TmFtZS5sZW5ndGggPiB0aGlzLm1heE5hbWVMZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSBg5ZCN5a2X6ZyA5ZyoMS0ke3RoaXMubWF4TmFtZUxlbmd0aH3kuKrlrZfnrKbkuYvpl7RgO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gJ+ato+WcqOmqjOivgeeUqOaIty4uLic7XG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gYXdhaXQgVXNlclNlcnZpY2UuZW5zdXJlVXNlcklzUmVnaXN0ZXJlZCgpO1xuICAgICAgICBpZiAoIXVzZXJJbmZvKSB7XG4gICAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7IG1lc3NhZ2U6ICfml6Dms5Xojrflj5bnlKjmiLfkv6Hmga8sIOivt+ajgOafpee9kee7nOWQjumHjeWQr+W6lOeUqCcsIGR1cmF0aW9uOiAzMDAwIH0pO1xuICAgICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICfplJnor686IOeUqOaIt+acqueZu+W9lSc7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gIFxuICAgICAgICB0aGlzLnN0YXR1c01lc3NhZ2UgPSAn5q2j5Zyo5qOA5p+l5ZCN56ew5Y+v55So5oCnLi4uJztcbiAgICAgICAgY29uc3QgYXZhaWxhYmlsaXR5UmVzdWx0ID0gYXdhaXQgQXBpU2VydmljZS5jaGVja1BldE5hbWVBdmFpbGFiaWxpdHkodGhpcy5uZXdQZXROYW1lKTtcbiAgXG4gICAgICAgIGlmICghYXZhaWxhYmlsaXR5UmVzdWx0LnN1Y2Nlc3MgfHwgIWF2YWlsYWJpbGl0eVJlc3VsdC5pc0F2YWlsYWJsZSkge1xuICAgICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9IGDkv53lrZjlpLHotKU6ICR7YXZhaWxhYmlsaXR5UmVzdWx0LmlzQXZhaWxhYmxlID09PSBmYWxzZSA/ICfor6XlkI3np7Dlt7Looqvkvb/nlKgnIDogKGF2YWlsYWJpbGl0eVJlc3VsdC5lcnJvciB8fCAn5peg5rOV5qOA5p+l5ZCN56ewJyl9YDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgXG4gICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICflkI3np7Dlj6/nlKjvvIzmraPlnKjkv53lrZguLi4nO1xuICAgICAgICBjb25zdCBzZXRSZXN1bHQgPSBhd2FpdCBBcGlTZXJ2aWNlLnNldFBldE5hbWUodXNlckluZm8uaWQsIHRoaXMubmV3UGV0TmFtZSk7XG4gIFxuICAgICAgICBpZiAoc2V0UmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRQZXROYW1lID0gdGhpcy5uZXdQZXROYW1lO1xuICAgICAgICAgIHRoaXMubmV3UGV0TmFtZSA9ICcnO1xuICAgICAgICAgIHRoaXMuc3RhdHVzTWVzc2FnZSA9ICcnO1xuICBcbiAgICAgICAgICBjb25zdCB1cGRhdGVkVXNlckluZm8gPSB7IC4uLnVzZXJJbmZvLCBwZXRfbmFtZTogdGhpcy5jdXJyZW50UGV0TmFtZSB9O1xuICAgICAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KHtcbiAgICAgICAgICAgIGtleTogQ09ORklHLlNUT1JBR0VfS0VZUy5VU0VSX0lORk8sXG4gICAgICAgICAgICB2YWx1ZTogSlNPTi5zdHJpbmdpZnkodXBkYXRlZFVzZXJJbmZvKVxuICAgICAgICAgIH0pO1xuICBcbiAgICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHsgbWVzc2FnZTogJ+WuoOeJqeWQjeWtl+W3suabtOaWsO+8gScgfSk7XG4gICAgICAgICAgdGhpcy50b2dnbGVLZXlib2FyZChmYWxzZSk7IC8vIEhpZGUga2V5Ym9hcmQgb24gc3VjY2Vzc1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcm91dGVyLmJhY2soKTtcbiAgICAgICAgICB9LCAxNTAwKTtcbiAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zdGF0dXNNZXNzYWdlID0gYOS/neWtmOWksei0pTogJHtzZXRSZXN1bHQuZXJyb3IgfHwgJ+acquefpemUmeivryd9YDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdvQmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hvd0tleWJvYXJkKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVLZXlib2FyZChmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm91dGVyLmJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbiJdLCJuYW1lcyI6WyJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfc3lzdGVtMiIsIl9kaWNVdGlsIiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsImRvU2VhcmNoRGljIiwid29yZCIsImNiIiwiaGFuemkiLCJTaW1wbGVJbnB1dE1ldGhvZCIsImdldEhhbnppIiwiZGVsZXRlTGFzdCIsInQiLCJzdWJzdHIiLCJsZW5ndGgiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJwcm9wcyIsImhpZGUiLCJrZXlib2FyZHR5cGUiLCJtYXhsZW5ndGgiLCJ2aWJyYXRlbW9kZSIsInNjcmVlbnR5cGUiLCJkYXRhIiwiY3ZhbCIsInJlc3VsdExpc3QiLCJyZXN1bHRMaXN0MiIsIndhaXRpbmdMaXN0Iiwid2FpdGluZ0luZGV4IiwibGFzdFdhaXRpbmdTdHIiLCJkb3duRmxhZyIsImxhbmciLCJudW1GbGFnIiwidXBwZXJGbGFnIiwiY3ZhbExpc3QiLCJwZXJjZW50NjciLCJwZXJjZW50NjYiLCJzY3JlZW5XaWR0aCIsImtleXMiLCJmdWxsIiwic2lnbiIsInNpZ242MiIsImZ1bGw2MiIsInQ5Iiwib25Jbml0IiwidGVtcEN2YWxMaXN0IiwiaSIsInB1c2giLCJhZGp1c3RTY3JlZW5XaWR0aCIsIiR3YXRjaCIsImFkZEFsbFR4dCIsInR4dCIsIiRlbWl0IiwiY29udGVudCIsIm9uUnNTZWxlY3QiLCJvblZpYnJhdGUiLCJjbGVhcldhaXRpbmciLCJyZXNldFJlc2x1dExpc3QiLCJvbkJ0bkNsaWNrIiwidG9VcHBlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0IiwiY3ZhbFdhaXRpbmdFbGVtZW50IiwiJGVsZW1lbnQiLCJzY3JvbGxUbyIsInRvcCIsImxlZnQiLCJiZWhhdmlvciIsIndhdGluZ1N0ciIsInNldFJlc3VsdExpc3RBbGwiLCJnZXRSZXN1bHRCeVdvcmQiLCJhcnJheSIsInBhcnNlSW50IiwidmFsIiwidGhhdCIsIm9uU2VsZWN0IiwibnVtIiwib25TZWxlY3RXYWl0aW5nIiwidG9TdHJpbmciLCJ3YXRjaEhpZGVQcm9wc0NoYW5nZSIsIm5ld1YiLCJvbGRWIiwidmlzaWJsZSIsIndhdGNoTWF4TGVuZ3RoUHJvcHNDaGFuZ2UiLCJ2aWJyYXRvciIsInZpYnJhdGUiLCJtb2RlIiwiaGFuZGVsU2Nyb2xsIiwiZXZlbnQiLCJwZXJjZW50VGVtcDY3Iiwic2Nyb2xsWCIsInBlcmNlbnRUZW1wNjYiLCJwdXNoQ3ZhbCIsInRlbXAiLCJkZXZpY2UiLCJnZXRJbmZvIiwic3VjY2VzcyIsImRpY3QiLCJfZGljIiwiaW5pdERpY3QiLCJweTJoeiIsInB5Mmh6MiIsImtleSIsImNoIiwiZ2V0U2luZ2xlSGFuemkiLCJwaW55aW4iLCJyZXN1bHQiLCJzdGFydCIsIk1hdGgiLCJtaW4iLCJzdHIiLCJycyIsIl9zeXN0ZW0zIiwiX3N5c3RlbTQiLCJfY29uZmlnIiwib3duS2V5cyIsInIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJvIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJ2YWx1ZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX3RvUHJpbWl0aXZlIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiQXBpU2VydmljZSIsImNvbnN0cnVjdG9yIiwiYmFzZVVybCIsIkNPTkZJRyIsIlNFUlZFUiIsIkJBU0VfVVJMIiwiYmFzZUhlYWRlcnMiLCJyZXF1ZXN0IiwiYWN0aW9uIiwidXJsIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlciIsInJlc3BvbnNlVHlwZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwicmVzcG9uc2UiLCJyZXNwb25zZURhdGEiLCJjb2RlIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJmYWlsIiwiZ2V0UmFua2luZ3MiLCJsaW1pdCIsInJhbmtpbmdzIiwibWVzc2FnZSIsInN5bmNDbGlja3MiLCJ1c2VySWQiLCJjbGlja0NvdW50IiwidXNlcl9pZCIsImNsaWNrX2NvdW50Iiwic3luY0Zyb21TZXJ2ZXIiLCJsb2ciLCJ1c2VySW5mbyIsImNoZWNrUGV0TmFtZUF2YWlsYWJpbGl0eSIsInBldE5hbWUiLCJwZXRfbmFtZSIsImlzQXZhaWxhYmxlIiwic2V0UGV0TmFtZSIsIm5ld05hbWUiLCJuZXdfbmFtZSIsImNoZWNrRGV2aWNlUmVnaXN0cmF0aW9uIiwiZGV2aWNlSWQiLCJkZXZpY2VfaWQiLCJpc19yZWdpc3RlcmVkIiwiY2FuX2F1dG9fYWN0aXZhdGUiLCJyZWdpc3RlckFuZEdldFVzZXJJZCIsImdldEFubm91bmNlbWVudHMiLCJhbm5vdW5jZW1lbnRzIiwiY291bnQiLCJ0aW1lc3RhbXAiLCJjaGVja0FwcFVwZGF0ZSIsImN1cnJlbnRWZXJzaW9uQ29kZSIsImN1cnJlbnRfdmVyc2lvbl9jb2RlIiwiaGFzVXBkYXRlIiwiaGFzX3VwZGF0ZSIsInVwZGF0ZUluZm8iLCJ1cGRhdGVfaW5mbyIsImlzRm9yY2VVcGRhdGUiLCJpc19mb3JjZV91cGRhdGUiLCJsYXRlc3RWZXJzaW9uQ29kZSIsImxhdGVzdF92ZXJzaW9uX2NvZGUiLCJBUFAiLCJOQU1FIiwiVkVSU0lPTiIsIlZFUlNJT05fQ09ERSIsIk1BWF9DTElDS1NfUEVSX0JBVENIIiwiU1lOQ19JTlRFUlZBTCIsIlJBTktfTElNSVQiLCJDSEVDS19VUERBVEVfSU5URVJWQUwiLCJBTk5PVU5DRU1FTlRfQ0FDSEVfVElNRSIsIlNUT1JBR0VfS0VZUyIsIkRFVklDRV9JRCIsIklTX0xPQ0FMTFlfQUNUSVZBVEVEIiwiVVNFUl9JTkZPIiwiUEVORElOR19DTElDS1MiLCJMQVNUX1NZTkNfVElNRSIsIlRPVEFMX0NMSUNLUyIsIkxBU1RfVVBEQVRFX0NIRUNLX1RJTUUiLCJMQVNUX0FOTk9VTkNFTUVOVF9GRVRDSF9USU1FIiwiQ0FDSEVEX0FOTk9VTkNFTUVOVFMiLCJDQUNIRURfVVBEQVRFX0lORk8iLCJJR05PUkVEX1ZFUlNJT04iLCJGT1JDRV9VUERBVEVfUkVRVUlSRUQiLCJfYXBpU2VydmljZSIsIlVzZXJTZXJ2aWNlIiwiX3N0b3JhZ2VHZXQiLCJnZXQiLCJfc3RvcmFnZVNldCIsInNldCIsImVyciIsIl9nZXRSYXdEZXZpY2VJZCIsImdldFNlcmlhbCIsInNlcmlhbCIsIndhcm4iLCJfc2F2ZVVzZXJJbmZvIiwiaWQiLCJ1c2VyX251bWJlciIsInVzZXJJbmZvVG9TYXZlIiwidG90YWxfY2xpY2tzIiwiZW5zdXJlVXNlcklzUmVnaXN0ZXJlZCIsImZvcmNlU3luYyIsImV4aXN0aW5nVXNlckluZm9KU09OIiwicGFyc2UiLCJzeW5jUmVzdWx0Iiwic3luY0Vycm9yIiwicmVnUmVzdWx0IiwibmV3UmVnUmVzdWx0IiwidXBkYXRlUGVuZGluZ0NsaWNrcyIsImFtb3VudCIsImlzTmFOIiwicGVuZGluZ0NsaWNrc0RhdGEiLCJjdXJyZW50Q2xpY2tzIiwibmV3Q2xpY2tzIiwidHJpZ2dlckNsaWNrU3luYyIsInVzZXJJbmZvSlNPTiIsImNsaWNrc1RvU3luYyIsImZvcmNlU3luY0Zyb21TZXJ2ZXIiLCJjbGlja1N5bmNTdWNjZXNzIiwiZXJyb3JNc2ciLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwid2luZG93IiwiX3VzZXJTZXJ2aWNlIiwidGltZSIsImN1cnJlbnRQZXROYW1lIiwibmV3UGV0TmFtZSIsInN0YXR1c01lc3NhZ2UiLCJzaG93S2V5Ym9hcmQiLCJtYXhOYW1lTGVuZ3RoIiwidXBkYXRlVGltZSIsInNldEludGVydmFsIiwic3RvcmFnZSIsIm5vdyIsIkRhdGUiLCJob3VycyIsImdldEhvdXJzIiwicGFkU3RhcnQiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsInRvZ2dsZUtleWJvYXJkIiwic2hvdyIsImhhbmRsZUtleWJvYXJkQ29tcGxldGUiLCJuZXdDaGFyIiwiZGV0YWlsIiwicHJvbXB0Iiwic2hvd1RvYXN0IiwiaGFuZGxlS2V5Ym9hcmREZWxldGUiLCJzbGljZSIsInNhdmVQZXROYW1lIiwiZHVyYXRpb24iLCJhdmFpbGFiaWxpdHlSZXN1bHQiLCJzZXRSZXN1bHQiLCJ1cGRhdGVkVXNlckluZm8iLCJzZXRUaW1lb3V0Iiwicm91dGVyIiwiYmFjayIsImdvQmFjayJdLCJtYXBwaW5ncyI6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QUFXLEdBQUdkLEtBQUtjLFdBQVc7d0NBQ3JDO29DQUNGO2dDQUNGOzRCQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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