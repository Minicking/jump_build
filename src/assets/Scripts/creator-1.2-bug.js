(function (root) {
  var exports = undefined,
      module = undefined,
      require = undefined;
  var define = undefined;
  (function () {
    [// 所有插件脚本写入的全局变量的名称
    'MGOBE'].forEach(globalVariableName => {
      const descriptor = Object.getOwnPropertyDescriptor(window, globalVariableName);

      if (descriptor) {
        descriptor.enumerable = false;
        Object.defineProperty(window, globalVariableName, descriptor);
      }
    });
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