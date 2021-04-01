(function (root) {
  var exports = undefined,
      module = undefined,
      require = undefined;
  var define = undefined;
  (function () {
    ;

    (function () {
      let url = "didiurl://";
      let ua = navigator.userAgent.toLowerCase();
      let isAndroid = ua.indexOf('android') > -1;

      function iosRunCommand(cmdName, params, success, failure) {
        var cmdObj = {
          "call": cmdName
        };

        if (success) {
          cmdObj["success"] = success;
        }

        if (failure) {
          cmdObj["failure"] = failure;
        }

        if (params) {
          if (typeof params == 'object') {
            params.echoMsg = "msg";
          }

          cmdObj["args"] = params;
        }

        var cmd = url + encodeURIComponent(JSON.stringify(cmdObj)); // IOS

        var rootElm = document.documentElement;
        var newFrameElm = document.createElement("IFRAME");
        newFrameElm.setAttribute("src", cmd);
        rootElm.appendChild(newFrameElm);
        newFrameElm.parentNode.removeChild(newFrameElm);
      }

      window.RunNative = function (func, params, success, fail) {
        if (isAndroid) {
          LNAndroidInterface[func](JSON.stringify(params), success, fail);
        } else {
          return iosRunCommand(func, params, success, fail);
        }
      };
    })();
  }).call(root);
})( // The environment-specific global.
function () {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  if (typeof this !== 'undefined') return this;
  return {};
}.call(this));