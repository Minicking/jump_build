System.register([], function (exports, module) {
    'use strict';
    return {
        execute: async function () {

            exports('w', waitForAmmoInstantiation);

            let ammo;
            let isWasm = false;
            if (typeof WebAssembly === 'undefined') {
                ammo = await module.import('./ammo.full-d18e6e02.js');
            } else {
                ammo = await module.import('./ammo.wasm-dea6da07.js');
                isWasm = true;
            }
            var AmmoClosure = ammo.default;

            var AmmoJs = /*#__PURE__*/Object.freeze({
                __proto__: null,
                'default': AmmoClosure,
                get isWasm () { return isWasm; }
            });

            var Ammo = exports('A', {});

            /**
             * With the stage 3 proposal "top level await",
             * we may got a simple `await waitForAmmoInstantiation();` statement in this module.
             * It guarantees the promise `waitForAmmoInstantiation()`
             * is resolved before this module finished its execution. 
             * But this technique is rarely implemented for now and can not be implemented in CommonJS.
             * We have to expose this waiting function to beg for earlier invocation by the external.
             * In Cocos Creator Editor's implementation,
             * it awaits for the:
             * ```ts
             * import thisFunction from 'cc.wait-for-ammo-instantiated';
             * await thisFunction();
             * ```
             * before `'cc.physics-ammo'` can be imported;
             * @param wasmBinary The .wasm file, if any.
             */

            function waitForAmmoInstantiation(wasmBinary) {
              // `this` needed by ammo closure.
              var ammoClosureThis = {};

              if (typeof wasmBinary !== 'undefined') {
                // See https://emscripten.org/docs/compiling/WebAssembly.html#wasm-files-and-compilation
                Ammo['wasmBinary'] = wasmBinary;
              }

              return new Promise(function (resolve, reject) {
                AmmoClosure.call(ammoClosureThis, Ammo).then(function () {
                  resolve();
                });
              });
            }

            (function (_waitForAmmoInstantiation) {
              var isWasm = _waitForAmmoInstantiation.isWasm = 'isWasm' in AmmoJs;
            })(waitForAmmoInstantiation || (waitForAmmoInstantiation = exports('w', {})));

        }
    };
});
