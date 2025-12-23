export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createAppHandler = function() {
            return (()=>{
                var __webpack_modules__ = {
                    "./src/manifest.json" (module) {
                        "use strict";
                        module.exports = JSON.parse('{"package":"com.lladlam.bandpet.9pro","name":"BandPet","versionName":"1.0.0","versionCode":1,"minPlatformVersion":1000,"icon":"/common/icon.png","deviceTypeList":["watch"],"features":[{"name":"system.router"},{"name":"system.device"},{"name":"system.fetch"},{"name":"system.storage"},{"name":"hapjs.permission.DEVICE_INFO"},{"name":"system.vibrator"},{"name":"system.prompt"}],"config":{"logLevel":"log","designWidth":336},"router":{"entry":"main","pages":{"main":{"component":"index"},"more":{"component":"index"},"leaderboard":{"component":"index"},"exchange":{"component":"index"},"market":{"component":"index"},"customize":{"component":"index"},"settings":{"component":"index"},"activate":{"component":"index"},"about":{"component":"index"},"naming":{"component":"index"}}},"display":{"backgroundColor":"#000000","textColor":"#ffffff"}}');
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
                (()=>{
                    var $app_style$ = [];
                    var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.default = void 0;
                        var _default = exports.default = {
                            onCreate () {
                                console.log('[lifecycle] [app] onCreate');
                            },
                            onShow () {
                                console.log('[lifecycle] [app] onShow');
                            },
                            onHide () {
                                console.log('[lifecycle] [app] onHide');
                            },
                            onDestroy () {
                                console.log('[lifecycle] [app] onDestroy');
                            },
                            onError (err) {
                                console.log(`[lifecycle] [app] onError errmsg: ${err.message}`);
                                console.log(`[lifecycle] [app] onError error stack: ${err.stack}`);
                            }
                        };
                    };
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.style = $app_style$;
                    $app_exports$.default.manifest = __webpack_require__("./src/manifest.json");
                    var $translateStyle$ = function(value) {
                        if ('string' == typeof value) return Object.fromEntries(value.split(';').filter((item)=>Boolean(item && item.trim())).map((item)=>{
                            const matchs = item.match(/([^:]+):(.*)/);
                            if (matchs && matchs.length > 2) return [
                                matchs[1].trim().replace(/-([a-z])/g, (_, match)=>match.toUpperCase()),
                                matchs[2].trim()
                            ];
                            return [];
                        }));
                        return value;
                    };
                    __webpack_require__.g.$translateStyle$ = $translateStyle$;
                })();
            })();
        };
        return createAppHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmFuZFBldC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL0JhbmRQZXQvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vQmFuZFBldC9zcmMvYXBwLnV4Il0sInNvdXJjZXNDb250ZW50IjpbIl9fd2VicGFja19yZXF1aXJlX18uZyA9ICgoKSA9PiB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjYuOFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS42LjhcIjsiLCI8c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBvbkNyZWF0ZSgpIHtcbiAgICBjb25zb2xlLmxvZygnW2xpZmVjeWNsZV0gW2FwcF0gb25DcmVhdGUnKTtcbiAgfSxcblxuICBvblNob3coKSB7XG4gICAgY29uc29sZS5sb2coJ1tsaWZlY3ljbGVdIFthcHBdIG9uU2hvdycpO1xuICB9LFxuXG4gIG9uSGlkZSgpIHtcbiAgICBjb25zb2xlLmxvZygnW2xpZmVjeWNsZV0gW2FwcF0gb25IaWRlJyk7XG4gIH0sXG5cbiAgb25EZXN0cm95KCkge1xuICAgIGNvbnNvbGUubG9nKCdbbGlmZWN5Y2xlXSBbYXBwXSBvbkRlc3Ryb3knKTtcbiAgfSxcblxuICBvbkVycm9yKGVycikge1xuICAgIGNvbnNvbGUubG9nKGBbbGlmZWN5Y2xlXSBbYXBwXSBvbkVycm9yIGVycm1zZzogJHtlcnIubWVzc2FnZX1gKVxuICAgIGNvbnNvbGUubG9nKGBbbGlmZWN5Y2xlXSBbYXBwXSBvbkVycm9yIGVycm9yIHN0YWNrOiAke2Vyci5zdGFja31gKVxuICB9XG59XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwiZSIsIndpbmRvdyIsIiIsIm9uQ3JlYXRlIiwiY29uc29sZSIsImxvZyIsIm9uU2hvdyIsIm9uSGlkZSIsIm9uRGVzdHJveSIsIm9uRXJyb3IiLCJlcnIiLCJtZXNzYWdlIiwic3RhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBQUEsb0JBQW9CLENBQUMsR0FBRyxBQUFDO3dCQUN4QixJQUFJLEFBQXNCLFlBQXRCLE9BQU9DLFlBQXlCLE9BQU9BO3dCQUMzQyxJQUFJOzRCQUNILE9BQU8sSUFBSSxJQUFJLElBQUlDLFNBQVM7d0JBQzdCLEVBQUUsT0FBT0MsR0FBRzs0QkFDWCxJQUFJLEFBQWtCLFlBQWxCLE9BQU9DLFFBQXFCLE9BQU9BO3dCQUN4QztvQkFDRDs7O29CQ1BBSixvQkFBb0IsRUFBRSxHQUFHLElBQU87OztvQkNBaENBLG9CQUFvQixJQUFJLEdBQUc7Ozs7Ozs7Ozs7d0JDQzNCSyxJQUFBQSxXQUFBQSxRQUFBQSxPQUFBQSxHQUFlOzRCQUNiQztnQ0FDRUMsUUFBUUMsR0FBRyxDQUFDOzRCQUNkOzRCQUVBQztnQ0FDRUYsUUFBUUMsR0FBRyxDQUFDOzRCQUNkOzRCQUVBRTtnQ0FDRUgsUUFBUUMsR0FBRyxDQUFDOzRCQUNkOzRCQUVBRztnQ0FDRUosUUFBUUMsR0FBRyxDQUFDOzRCQUNkOzRCQUVBSSxTQUFRQyxHQUFHO2dDQUNUTixRQUFRQyxHQUFHLENBQUMsQ0FBQyxrQ0FBa0MsRUFBRUssSUFBSUMsT0FBTyxFQUFFO2dDQUM5RFAsUUFBUUMsR0FBRyxDQUFDLENBQUMsdUNBQXVDLEVBQUVLLElBQUlFLEtBQUssRUFBRTs0QkFDbkU7d0JBQ0YifQ==