System.register(['./deprecated-4ec15e5e.js'], function (exports) {
    'use strict';
    var _createClass, _classCallCheck;
    return {
        setters: [function (module) {
            _createClass = module.j;
            _classCallCheck = module.d;
        }],
        execute: function () {

            /**
             * Collision "matrix". It's actually a triangular-shaped array of whether two bodies are touching this step, for reference next step
             * @class ArrayCollisionMatrix
             * @constructor
             */
            var ArrayCollisionMatrix = exports('A', /*#__PURE__*/function () {
              function ArrayCollisionMatrix() {
                _classCallCheck(this, ArrayCollisionMatrix);

                this.matrix = [];
              }

              _createClass(ArrayCollisionMatrix, [{
                key: "get",

                /**
                 * Get an element
                 * @method get
                 * @param  {Number} i
                 * @param  {Number} j
                 * @return {Number}
                 */
                value: function get(i, j) {
                  if (j > i) {
                    var temp = j;
                    j = i;
                    i = temp;
                  }

                  return this.matrix[(i * (i + 1) >> 1) + j - 1];
                }
                /**
                 * Set an element
                 * @method set
                 * @param {Number} i
                 * @param {Number} j
                 * @param {boolean} value
                 */

              }, {
                key: "set",
                value: function set(i, j, value) {
                  if (j > i) {
                    var temp = j;
                    j = i;
                    i = temp;
                  }

                  this.matrix[(i * (i + 1) >> 1) + j - 1] = value ? 1 : 0;
                }
                /**
                 * Sets all elements to zero
                 * @method reset
                 */

              }, {
                key: "reset",
                value: function reset() {
                  this.matrix.length = 0;
                }
                /**
                 * Sets the max number of objects
                 * @param {Number} n
                 */

              }, {
                key: "setNumObjects",
                value: function setNumObjects(n) {
                  this.matrix.length = n * (n - 1) >> 1;
                }
              }]);

              return ArrayCollisionMatrix;
            }());

        }
    };
});
