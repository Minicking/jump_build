System.register(['./deprecated-4ec15e5e.js', './deprecated-b99c04b5.js'], function (exports) {
    'use strict';
    var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, GFXObjectType, GFXObject;
    return {
        setters: [function (module) {
            _inherits = module.b;
            _createClass = module.j;
            _classCallCheck = module.d;
            _possibleConstructorReturn = module.e;
            _getPrototypeOf = module.f;
        }, function (module) {
            GFXObjectType = module.bu;
            GFXObject = module.bv;
        }],
        execute: function () {

            /**
             * @en GFX pipeline layout.
             * @zh GFX 管线布局。
             */
            var GFXPipelineLayout = exports('G', /*#__PURE__*/function (_GFXObject) {
              _inherits(GFXPipelineLayout, _GFXObject);

              _createClass(GFXPipelineLayout, [{
                key: "setLayouts",
                get: function get() {
                  return this._setLayouts;
                }
              }]);

              function GFXPipelineLayout(device) {
                var _this;

                _classCallCheck(this, GFXPipelineLayout);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(GFXPipelineLayout).call(this, GFXObjectType.PIPELINE_LAYOUT));
                _this._device = void 0;
                _this._setLayouts = [];
                _this._device = device;
                return _this;
              }

              return GFXPipelineLayout;
            }(GFXObject));

            /**
             * @en GFX Fence.
             * @zh GFX 同步信号。
             */
            var GFXFence = exports('a', /*#__PURE__*/function (_GFXObject) {
              _inherits(GFXFence, _GFXObject);

              function GFXFence(device) {
                var _this;

                _classCallCheck(this, GFXFence);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(GFXFence).call(this, GFXObjectType.FENCE));
                _this._device = void 0;
                _this._device = device;
                return _this;
              }

              return GFXFence;
            }(GFXObject));

        }
    };
});
