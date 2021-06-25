System.register([], function (exports) {
    'use strict';
    return {
        execute: function () {

            exports({
                g: getWrap,
                m: maxComponent,
                s: setWrap
            });

            /**
             * @hidden
             */
            function setWrap(object, wrapper) {
              object.__cc_wrapper__ = wrapper;
            }
            function getWrap(object) {
              return object.__cc_wrapper__;
            }
            function maxComponent(v) {
              return Math.max(v.x, Math.max(v.y, v.z));
            }

        }
    };
});
