System.register([], function (exports) {
	'use strict';
	return {
		execute: function () {

			exports({
				a: commonjsRequire,
				c: createCommonjsModule
			});

			function createCommonjsModule(fn, module) {
				return module = { exports: {} }, fn(module, module.exports), module.exports;
			}

			function commonjsRequire () {
				throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
			}

		}
	};
});
