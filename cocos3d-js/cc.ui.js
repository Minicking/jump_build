System.register(['./deprecated-4ec15e5e.js', './deprecated-b99c04b5.js', './index-caa5c4e5.js', './html-text-parser-a9bbdc96.js', './SubContextView-a8900bae.js', './component-event-handler-b65b5a5a.js'], function (exports) {
  'use strict';
  var Vec3, Enum, ccclass, type, executeInEditMode, _applyDecoratedDescriptor, legacyCC, help, menu, tooltip, serializable, Color, _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, Rect, Component, removeProperty, js, Mat4, ccenum, displayOrder, rangeMin, rangeMax, lerp, multiline, displayName, visible, warnID, _get, _set, contains, sys, Size, editable, Vec2, clamp$1, slide, range, clamp01, warn, Pool, _createForOfIteratorHelperLoose, Event, logID, editorOnly, array, mixin, addon, isChildClassOf, errorID, GFXClearFlag, RenderTexture, disallowMultiple, executionOrder, requireComponent, UITransform, Node, game, SpriteFrame, SystemEventType, Font, Material, override, BitmapFont, ImageAsset, macro, TransformBit, Model, MaterialInstance, builtinResMgr, Game, PrivateNode, SpriteAtlas, TTFFont, loader, fragmentText, BASELINE_RATIO, isUnicodeCJK, isUnicodeSpace, EventTouch, RenderPriority, Scene, RecyclePool, MeshRenderData, GFXAttributeName, GFXFormat, GFXPrimitiveMode, createMesh, safeMeasureText, PixelFormat, Texture2D, Camera, HtmlTextParser, view, visibleRect, UIRenderable, Sprite, screen, InstanceMaterialType, View, director, EventHandler, Director, MeshBuffer, UIDrawBatch, vfmt, StencilManager, UIVertexFormat;
  return {
    setters: [function (module) {
      Vec3 = module.V;
      Enum = module.aj;
      ccclass = module.c;
      type = module.t;
      executeInEditMode = module.b1;
      _applyDecoratedDescriptor = module._;
      legacyCC = module.l;
      help = module.h;
      menu = module.m;
      tooltip = module.a;
      serializable = module.s;
      Color = module.Y;
      _inherits = module.b;
      _createClass = module.j;
      _classCallCheck = module.d;
      _possibleConstructorReturn = module.e;
      _getPrototypeOf = module.f;
      _initializerDefineProperty = module.g;
      _assertThisInitialized = module.i;
      Rect = module.W;
      Component = module.C;
      removeProperty = module.ap;
      js = module.n;
      Mat4 = module.M;
      ccenum = module.E;
      displayOrder = module.b2;
      rangeMin = module.aU;
      rangeMax = module.aV;
      lerp = module.a3;
      multiline = module.bO;
      displayName = module.b3;
      visible = module.b5;
      warnID = module.x;
      _get = module.aN;
      _set = module.bE;
      contains = module.bP;
      sys = module.aI;
      Size = module.T;
      editable = module.F;
      Vec2 = module.H;
      clamp$1 = module.k;
      slide = module.bw;
      range = module.r;
      clamp01 = module.a2;
      warn = module.w;
      Pool = module.bg;
      _createForOfIteratorHelperLoose = module.D;
      Event = module.ay;
      logID = module.v;
      editorOnly = module.bd;
      array = module.by;
      mixin = module.aX;
      addon = module.bQ;
      isChildClassOf = module.a_;
      errorID = module.y;
    }, function (module) {
      GFXClearFlag = module.b_;
      RenderTexture = module.b6;
      disallowMultiple = module.d9;
      executionOrder = module.dd;
      requireComponent = module.da;
      UITransform = module.db;
      Node = module.cW;
      game = module.bi;
      SpriteFrame = module.b7;
      SystemEventType = module.bg;
      Font = module.b1;
      Material = module.b3;
      override = module.dP;
      BitmapFont = module.b0;
      ImageAsset = module.aX;
      macro = module.b8;
      TransformBit = module.dR;
      Model = module.W;
      MaterialInstance = module.aq;
      builtinResMgr = module.d2;
      Game = module.bh;
      PrivateNode = module.c_;
      SpriteAtlas = module.aT;
      TTFFont = module.a_;
      loader = module.cT;
      fragmentText = module.aG;
      BASELINE_RATIO = module.aC;
      isUnicodeCJK = module.aD;
      isUnicodeSpace = module.aE;
      EventTouch = module.bc;
      RenderPriority = module.dk;
      Scene = module.cX;
      RecyclePool = module.R;
      MeshRenderData = module.d_;
      GFXAttributeName = module.G;
      GFXFormat = module.f;
      GFXPrimitiveMode = module.t;
      createMesh = module.aA;
      safeMeasureText = module.aF;
      PixelFormat = module.df;
      Texture2D = module.aY;
      var _setter = {};
      _setter.UITransform = module.db;
      _setter.UITransformComponent = module.db;
      exports(_setter);
    }, function (module) {
      Camera = module.f;
    }, function (module) {
      HtmlTextParser = module.H;
    }, function (module) {
      view = module.v;
      visibleRect = module.c;
      UIRenderable = module.U;
      Sprite = module.d;
      screen = module.s;
      InstanceMaterialType = module.I;
      View = module.V;
      var _setter = {};
      _setter.InstanceMaterialType = module.I;
      _setter.RenderComponent = module.U;
      _setter.Sprite = module.d;
      _setter.SpriteComponent = module.d;
      _setter.UIRenderable = module.U;
      exports(_setter);
    }, function (module) {
      director = module.d;
      EventHandler = module.E;
      Director = module.D;
      MeshBuffer = module.M;
      UIDrawBatch = module.U;
      vfmt = module.v;
      StencilManager = module.b;
      UIVertexFormat = module.c;
      var _setter = {};
      _setter.MeshBuffer = module.M;
      _setter.StencilManager = module.b;
      _setter.UIVertexFormat = module.c;
      exports(_setter);
    }],
    execute: function () {

      exports({
        CacheMode: void 0,
        HorizontalTextAlignment: void 0,
        Overflow: void 0,
        VerticalTextAlignment: void 0
      });

      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

      var _worldPos = new Vec3();

      var CanvasClearFlag = Enum({
        SOLID_COLOR: GFXClearFlag.ALL,
        DEPTH_ONLY: GFXClearFlag.DEPTH_STENCIL,
        DONT_CLEAR: GFXClearFlag.NONE
      });
      var RenderMode = Enum({
        OVERLAY: 0,
        INTERSPERSE: 1
      });
      /**
       * @en
       * The root node of UI.
       * Provide an aligned window for all child nodes, also provides ease of setting screen adaptation policy interfaces from the editor.
       * Line-of-sight range is -999 to 1000.
       *
       * @zh
       * 作为 UI 根节点，为所有子节点提供对齐视窗，另外提供屏幕适配策略接口，方便从编辑器设置。
       * 注：由于本节点的尺寸会跟随屏幕拉伸，所以 anchorPoint 只支持 (0.5, 0.5)，否则适配不同屏幕时坐标会有偏差。
       * UI 的视距范围是 -999 ～ 1000.
       */

      var Canvas = function (v) { return exports({ Canvas: v, CanvasComponent: v }), v; }((_dec = ccclass('cc.Canvas'), _dec2 = help(), _dec3 = executionOrder(100), _dec4 = requireComponent(UITransform), _dec5 = menu(), _dec6 = type(CanvasClearFlag), _dec7 = tooltip(), _dec8 = tooltip(), _dec9 = type(RenderMode), _dec10 = tooltip(), _dec11 = tooltip(), _dec12 = type(RenderTexture), _dec13 = tooltip(), _dec14 = type(CanvasClearFlag), _dec15 = type(RenderMode), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = executeInEditMode(_class = disallowMultiple(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(Canvas, _Component);

        _createClass(Canvas, [{
          key: "clearFlag",

          /**
           * @en
           * The flags to clear the built in camera.
           *
           * @zh
           * 清理屏幕缓冲标记。
           */
          get: function get() {
            return this._clearFlag;
          },
          set: function set(val) {
            this._clearFlag = val;

            if (this._camera) {
              this._camera.clearFlag = this._clearFlag;
            }
          }
          /**
           * @en
           * The color clearing value of the builtin camera.
           *
           * @zh
           * 内置相机的颜色缓冲默认值。
           */

        }, {
          key: "color",
          get: function get() {
            return this._color;
          },
          set: function set(val) {
            Color.copy(this._color, val);

            if (this._camera) {
              this._camera.clearColor.r = val.r / 255;
              this._camera.clearColor.g = val.g / 255;
              this._camera.clearColor.b = val.b / 255;
              this._camera.clearColor.a = val.a / 255;
            }
          }
          /**
           * @en
           * The render mode of Canvas.
           * When you choose the mode of INTERSPERSE, You can specify the rendering order of the Canvas with the camera in the scene.
           * When you choose the mode of OVERLAY, the builtin camera of Canvas will render after all scene cameras are rendered.
           * NOTE: The cameras in the scene (including the Canvas built-in camera) must have a ClearFlag selection of SOLID_COLOR,
           * otherwise a splash screen may appear on the mobile device.
           *
           * @zh
           * Canvas 渲染模式。
           * intersperse 下可以指定 Canvas 与场景中的相机的渲染顺序，overlay 下 Canvas 会在所有场景相机渲染完成后渲染。
           * 注意：场景里的相机（包括 Canvas 内置的相机）必须有一个的 ClearFlag 选择 SOLID_COLOR，否则在移动端可能会出现闪屏。
           */

        }, {
          key: "renderMode",
          get: function get() {
            return this._renderMode;
          },
          set: function set(val) {
            this._renderMode = val;

            if (this._camera) {
              this._camera.priority = this._getViewPriority();
            }
          }
          /**
           * @en
           * Camera render priority.
           * When you choose the RenderModel of INTERSPERSE, specifies the render order with other cameras.
           * When you choose the RenderModel of OVERLAY, specifies sorting with the rest of the Canvas.
           *
           * @zh
           * 相机渲染优先级。当 RenderMode 为 intersperse 时，指定与其它相机的渲染顺序，当 RenderMode 为 overlay 时，指定跟其余 Canvas 做排序使用。需要对多 Canvas 设定 priority 以免出现不同平台下的闪屏问题。
           *
           * @param value - 渲染优先级。
           */

        }, {
          key: "priority",
          get: function get() {
            return this._priority;
          },
          set: function set(val) {
            this._priority = val;

            if (this._camera) {
              this._camera.priority = this._getViewPriority();
            }

            if (director.root && director.root.ui) {
              director.root.ui.sortScreens();
            }
          }
          /**
           * @en
           * Set the target render texture.
           *
           * @zh
           * 设置目标渲染纹理。
           */

        }, {
          key: "targetTexture",
          get: function get() {
            return this._targetTexture;
          },
          set: function set(value) {
            if (this._targetTexture === value) {
              return;
            }

            var old = this._targetTexture;
            this._targetTexture = value;

            this._checkTargetTextureEvent(old);

            this._updateTargetTexture();
          }
        }, {
          key: "visibility",
          get: function get() {
            if (this._camera) {
              return this._camera.view.visibility;
            }

            return -1;
          }
        }, {
          key: "camera",
          get: function get() {
            return this._camera;
          } // /**
          //  * @zh
          //  * 当前激活的画布组件，场景同一时间只能有一个激活的画布。
          //  */
          // public static instance: Canvas | null = null;

        }]);

        function Canvas() {
          var _this;

          _classCallCheck(this, Canvas);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Canvas).call(this));

          _initializerDefineProperty(_this, "_priority", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_targetTexture", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_clearFlag", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_color", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_renderMode", _descriptor5, _assertThisInitialized(_this));

          _this._thisOnResized = void 0;
          _this._camera = null;
          _this._pos = new Vec3();
          _this._thisOnResized = _this.alignWithScreen.bind(_assertThisInitialized(_this)); // // TODO:maybe remove when multiple scene
          // if (!Canvas.instance){
          //     Canvas.instance = this;
          // }

          return _this;
        }

        _createClass(Canvas, [{
          key: "__preload",
          value: function __preload() {
            var cameraNode = new Node('UICamera_' + this.node.name);
            cameraNode.setPosition(0, 0, 1000);

            {
              this._camera = director.root.createCamera();

              this._camera.initialize({
                name: 'ui_' + this.node.name,
                node: cameraNode,
                projection: Camera.ProjectionType.ORTHO,
                priority: this._getViewPriority(),
                flows: ['UIFlow']
              });

              this._camera.fov = 45;
              this._camera.clearFlag = this.clearFlag;
              this._camera.farClip = 2000;
              this._camera.viewport = new Rect(0, 0, 1, 1);
              this.color = this._color;

              this._checkTargetTextureEvent(null);

              this._updateTargetTexture();
            }

            view.on('design-resolution-changed', this._thisOnResized); // this.applySettings();

            this.alignWithScreen();
            director.root.ui.addScreen(this);
          }
        }, {
          key: "onEnable",
          value: function onEnable() {
            if (this._camera) {
              director.root.ui.renderScene.addCamera(this._camera);
            }
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            if (this._camera) {
              director.root.ui.renderScene.removeCamera(this._camera);
            }
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            director.root.ui.removeScreen(this);

            if (this._camera) {
              director.root.destroyCamera(this._camera);
            }

            if (this._targetTexture) {
              this._targetTexture.off('resize');
            }

            view.off('design-resolution-changed', this._thisOnResized); // if (Canvas.instance === this) {
            //     Canvas.instance = null;
            // }
          }
          /**
           * @en
           * Screen alignment.
           *
           * @zh
           * 屏幕对齐。
           */

        }, {
          key: "alignWithScreen",
          value: function alignWithScreen() {
            var nodeSize;
            var designSize;
            this.node.getPosition(this._pos);
            var visibleSize = visibleRect;

            {
              nodeSize = visibleSize;
              designSize = view.getDesignResolutionSize();
              var policy = view.getResolutionPolicy(); // const clipTopRight = !this.fitHeight && !this.fitWidth;

              var clipTopRight = policy === legacyCC.view._rpNoBorder;
              var offsetX = 0;
              var offsetY = 0;

              if (clipTopRight) {
                // offset the canvas to make it in the center of screen
                offsetX = (designSize.width - visibleSize.width) * 0.5;
                offsetY = (designSize.height - visibleSize.height) * 0.5;
              }

              Vec3.set(_worldPos, visibleSize.width * 0.5 + offsetX, visibleSize.height * 0.5 + offsetY, 0);
            }

            if (!this._pos.equals(_worldPos)) {
              this.node.setPosition(_worldPos);
            }

            var trans = this.node._uiProps.uiTransformComp;

            if (trans.width !== nodeSize.width) {
              trans.width = nodeSize.width;
            }

            if (trans.height !== nodeSize.height) {
              trans.height = nodeSize.height;
            }

            this.node.getWorldPosition(_worldPos);
            var camera = this._camera;

            if (camera) {
              if (this._targetTexture) {
                var win = this._targetTexture.window;
                camera.setFixedSize(win.width, win.height);
                camera.orthoHeight = visibleSize.height / 2;
              } else {
                var size = game.canvas;
                camera.resize(size.width, size.height);
                camera.orthoHeight = game.canvas.height / view.getScaleY() / 2;
              }

              camera.node.setPosition(_worldPos.x, _worldPos.y, 1000);
              camera.update();
            }
          }
        }, {
          key: "_checkTargetTextureEvent",
          value: function _checkTargetTextureEvent(old) {
            var _this2 = this;

            var resizeFunc = function resizeFunc(win) {
              if (_this2._camera) {
                _this2._camera.setFixedSize(win.width, win.height);
              }
            };

            if (old) {
              old.off('resize');
            }

            if (this._targetTexture) {
              this._targetTexture.on('resize', resizeFunc, this);
            }
          }
        }, {
          key: "_updateTargetTexture",
          value: function _updateTargetTexture() {
            if (!this._camera) {
              return;
            }

            var camera = this._camera;

            if (!this._targetTexture) {
              camera.changeTargetWindow();
              camera.orthoHeight = game.canvas.height / view.getScaleY() / 2;
              camera.isWindowSize = true;
            } else {
              var win = this._targetTexture.window;
              camera.changeTargetWindow(win);
              camera.orthoHeight = visibleRect.height / 2;
              camera.isWindowSize = false;
            }
          }
        }, {
          key: "_getViewPriority",
          value: function _getViewPriority() {
            return this._renderMode === RenderMode.OVERLAY ? this._priority | 1 << 30 : this._priority;
          }
        }]);

        return Canvas;
      }(Component), _temp), (_applyDecoratedDescriptor(_class2.prototype, "clearFlag", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "clearFlag"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "color", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "color"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "renderMode", [_dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "renderMode"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "priority", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "priority"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "targetTexture", [_dec12, _dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "targetTexture"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_priority", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_targetTexture", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_clearFlag", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return CanvasClearFlag.DEPTH_ONLY;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_color", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(0, 0, 0, 0);
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_renderMode", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return RenderMode.OVERLAY;
        }
      })), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class));
      legacyCC.Canvas = Canvas;

      var _dec$1, _dec2$1, _dec3$1, _class$1, _temp$1;
      var UIComponent = exports('UIComponent', (_dec$1 = ccclass('cc.UIComponent'), _dec2$1 = requireComponent(UITransform), _dec3$1 = executionOrder(110), _dec$1(_class$1 = _dec2$1(_class$1 = _dec3$1(_class$1 = disallowMultiple(_class$1 = executeInEditMode(_class$1 = (_temp$1 = /*#__PURE__*/function (_Component) {
        _inherits(UIComponent, _Component);

        function UIComponent() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, UIComponent);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UIComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this._lastParent = null;
          return _this;
        }

        _createClass(UIComponent, [{
          key: "__preload",
          value: function __preload() {
            this.node._uiProps.uiComp = this;
          }
        }, {
          key: "onEnable",
          value: function onEnable() {}
        }, {
          key: "onDisable",
          value: function onDisable() {}
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            if (this.node._uiProps.uiComp === this) {
              this.node._uiProps.uiComp = null;
            }
          }
          /**
           * @en Render data submission procedure, it update and assemble the render data to 2D data buffers before all children submission process.
           * Usually called each frame when the ui flow assemble all render data to geometry buffers.
           * Don't call it unless you know what you are doing.
           * @zh 渲染数据组装程序，这个方法会在所有子节点数据组装之前更新并组装当前组件的渲染数据到 UI 的顶点数据缓冲区中。
           * 一般在 UI 渲染流程中调用，用于组装所有的渲染数据到顶点数据缓冲区。
           * 注意：不要手动调用该函数，除非你理解整个流程。
           */

        }, {
          key: "updateAssembler",
          value: function updateAssembler(render) {}
          /**
           * @en Post render data submission procedure, it's executed after assembler updated for all children.
           * It may assemble some extra render data to the geometry buffers, or it may only change some render states.
           * Don't call it unless you know what you are doing.
           * @zh 后置渲染数据组装程序，它会在所有子节点的渲染数据组装完成后被调用。
           * 它可能会组装额外的渲染数据到顶点数据缓冲区，也可能只是重置一些渲染状态。
           * 注意：不要手动调用该函数，除非你理解整个流程。
           */

        }, {
          key: "postUpdateAssembler",
          value: function postUpdateAssembler(render) {}
        }]);

        return UIComponent;
      }(Component), _temp$1)) || _class$1) || _class$1) || _class$1) || _class$1) || _class$1));

      /**
       * @category ui
       */
      removeProperty(UIComponent.prototype, 'UIComponent', [{
        name: '_visibility'
      }, {
        name: 'setVisibility'
      }]);
      legacyCC.UITransformComponent = UITransform;
      js.setClassAlias(UITransform, 'cc.UITransformComponent');
      js.setClassAlias(UIRenderable, 'cc.RenderComponent');
      legacyCC.CanvasComponent = Canvas;
      js.setClassAlias(Canvas, 'cc.CanvasComponent');

      /**
       * @hidden
       */
      var vec3_temp = new Vec3();

      var _worldMatrix = new Mat4();

      function fillVertices3D(node, renderer, renderData, color) {
        var dataList = renderData.data;
        var buffer = renderer.currBufferBatch;
        var vertexOffset = buffer.byteOffset >> 2;
        var vertexCount = renderData.vertexCount;
        var indicesOffset = buffer.indicesOffset;
        var vertexId = buffer.vertexOffset;
        var isRecreate = buffer.request(vertexCount, renderData.indicesCount);

        if (!isRecreate) {
          buffer = renderer.currBufferBatch;
          vertexCount = 0;
          indicesOffset = 0;
          vertexId = 0;
        } // buffer data may be realloc, need get reference after request.


        var vBuf = buffer.vData;
        node.getWorldMatrix(_worldMatrix);

        for (var i = 0; i < vertexCount; i++) {
          var vert = dataList[i];
          Vec3.set(vec3_temp, vert.x, vert.y, 0);
          Vec3.transformMat4(vec3_temp, vec3_temp, _worldMatrix);
          vBuf[vertexOffset++] = vec3_temp.x;
          vBuf[vertexOffset++] = vec3_temp.y;
          vBuf[vertexOffset++] = vec3_temp.z;
          vBuf[vertexOffset++] = vert.u;
          vBuf[vertexOffset++] = vert.v;
          Color.toArray(vBuf, color, vertexOffset);
          vertexOffset += 4;
        } // buffer data may be realloc, need get reference after request.


        var iBuf = buffer.iData;

        for (var _i = 0; _i < renderData.dataLength; _i++) {
          iBuf[indicesOffset + _i] = vertexId + _i;
        }
      }
      function fillMeshVertices3D(node, renderer, renderData, color) {
        var dataList = renderData.data;
        var buffer = renderer.currBufferBatch;
        var vertexOffset = buffer.byteOffset >> 2;
        var vertexCount = renderData.vertexCount;
        var indicesOffset = buffer.indicesOffset;
        var vertexId = buffer.vertexOffset;
        var isRecreate = buffer.request(vertexCount, renderData.indicesCount);

        if (!isRecreate) {
          buffer = renderer.currBufferBatch;
          vertexCount = 0;
          indicesOffset = 0;
          vertexId = 0;
        } // buffer data may be realloc, need get reference after request.


        var vBuf = buffer.vData;
        var iBuf = buffer.iData;
        node.getWorldMatrix(_worldMatrix);

        for (var i = 0; i < vertexCount; i++) {
          var vert = dataList[i];
          Vec3.set(vec3_temp, vert.x, vert.y, 0);
          Vec3.transformMat4(vec3_temp, vec3_temp, _worldMatrix);
          vBuf[vertexOffset++] = vec3_temp.x;
          vBuf[vertexOffset++] = vec3_temp.y;
          vBuf[vertexOffset++] = vec3_temp.z;
          vBuf[vertexOffset++] = vert.u;
          vBuf[vertexOffset++] = vert.v;
          Color.toArray(vBuf, color, vertexOffset);
          vertexOffset += 4;
        } // fill index data


        for (var _i2 = 0, count = vertexCount / 4; _i2 < count; _i2++) {
          var start = vertexId + _i2 * 4;
          iBuf[indicesOffset++] = start;
          iBuf[indicesOffset++] = start + 1;
          iBuf[indicesOffset++] = start + 2;
          iBuf[indicesOffset++] = start + 1;
          iBuf[indicesOffset++] = start + 3;
          iBuf[indicesOffset++] = start + 2;
        }
      }
      function fillVerticesWithoutCalc3D(node, renderer, renderData, color) {
        var dataList = renderData.data;
        var buffer = renderer.currBufferBatch;
        var vertexOffset = buffer.byteOffset >> 2; // buffer

        var vertexCount = renderData.vertexCount;
        var indicesOffset = buffer.indicesOffset;
        var vertexId = buffer.vertexOffset;
        var isRecreate = buffer.request(vertexCount, renderData.indicesCount);

        if (!isRecreate) {
          buffer = renderer.currBufferBatch;
          vertexCount = 0;
          indicesOffset = 0;
          vertexId = 0;
        } // buffer data may be realloc, need get reference after request.


        var vBuf = buffer.vData;

        for (var i = 0; i < vertexCount; i++) {
          var vert = dataList[i];
          vBuf[vertexOffset++] = vert.x;
          vBuf[vertexOffset++] = vert.y;
          vBuf[vertexOffset++] = vert.z;
          vBuf[vertexOffset++] = vert.u;
          vBuf[vertexOffset++] = vert.v;
          Color.toArray(vBuf, color, vertexOffset);
          vertexOffset += 4;
        } // buffer data may be realloc, need get reference after request.


        var iBuf = buffer.iData;
        iBuf[indicesOffset++] = vertexId;
        iBuf[indicesOffset++] = vertexId + 1;
        iBuf[indicesOffset++] = vertexId + 2;
        iBuf[indicesOffset++] = vertexId + 1;
        iBuf[indicesOffset++] = vertexId + 3;
        iBuf[indicesOffset++] = vertexId + 2;
      }

      var _dec$2, _dec2$2, _dec3$2, _dec4$1, _dec5$1, _dec6$1, _dec7$1, _dec8$1, _dec9$1, _dec10$1, _dec11$1, _dec12$1, _dec13$1, _dec14$1, _dec15$1, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _class$2, _class2$1, _descriptor$1, _descriptor2$1, _descriptor3$1, _descriptor4$1, _descriptor5$1, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _class3, _temp$2;

      var _tempColor = new Color();
      /**
       * @en Enum for transition type.
       *
       * @zh 过渡类型。
       */


      var Transition;

      (function (Transition) {
        Transition[Transition["NONE"] = 0] = "NONE";
        Transition[Transition["COLOR"] = 1] = "COLOR";
        Transition[Transition["SPRITE"] = 2] = "SPRITE";
        Transition[Transition["SCALE"] = 3] = "SCALE";
      })(Transition || (Transition = {}));

      ccenum(Transition);
      var State;
      /**
       * @en The event types of [[Button]]. All button events are distributed by the owner Node, not the component
       * @zh [[Button]] 的事件类型，注意：事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       */

      (function (State) {
        State["NORMAL"] = "normal";
        State["HOVER"] = "hover";
        State["PRESSED"] = "pressed";
        State["DISABLED"] = "disabled";
      })(State || (State = {}));

      var EventType;
      /**
       * @en
       * Button has 4 Transition types<br/>
       * When Button state changed:<br/>
       *  If Transition type is Button.Transition.NONE, Button will do nothing<br/>
       *  If Transition type is Button.Transition.COLOR, Button will change target's color<br/>
       *  If Transition type is Button.Transition.SPRITE, Button will change target Sprite's sprite<br/>
       *  If Transition type is Button.Transition.SCALE, Button will change target node's scale<br/>
       *
       * Button will trigger 5 events:<br/>
       *  Button.EVENT_TOUCH_DOWN<br/>
       *  Button.EVENT_TOUCH_UP<br/>
       *  Button.EVENT_HOVER_IN<br/>
       *  Button.EVENT_HOVER_MOVE<br/>
       *  Button.EVENT_HOVER_OUT<br/>
       *  User can get the current clicked node with 'event.target' from event object which is passed as parameter in the callback function of click event.
       *
       * @zh
       * 按钮组件。可以被按下,或者点击。<br/>
       *
       * 按钮可以通过修改 Transition 来设置按钮状态过渡的方式：<br/>
       *   - `Button.Transition.NONE`   // 不做任何过渡<br/>
       *   - `Button.Transition.COLOR`  // 进行颜色之间过渡<br/>
       *   - `Button.Transition.SPRITE` // 进行精灵之间过渡<br/>
       *   - `Button.Transition.SCALE` // 进行缩放过渡<br/>
       *
       * 按钮可以绑定事件（但是必须要在按钮的 Node 上才能绑定事件）：<br/>
       *   // 以下事件可以在全平台上都触发<br/>
       *   - `Node.EventType.TOUCH_START`  // 按下时事件<br/>
       *   - `Node.EventType.TOUCH_Move`   // 按住移动后事件<br/>
       *   - `Node.EventType.TOUCH_END`    // 按下后松开后事件<br/>
       *   - `Node.EventType.TOUCH_CANCEL` // 按下取消事件<br/>
       *   // 以下事件只在 PC 平台上触发<br/>
       *   - `Node.EventType.MOUSE_DOWN`  // 鼠标按下时事件<br/>
       *   - `Node.EventType.MOUSE_MOVE`  // 鼠标按住移动后事件<br/>
       *   - `Node.EventType.MOUSE_ENTER` // 鼠标进入目标事件<br/>
       *   - `Node.EventType.MOUSE_LEAVE` // 鼠标离开目标事件<br/>
       *   - `Node.EventType.MOUSE_UP`    // 鼠标松开事件<br/>
       *   - `Node.EventType.MOUSE_WHEEL` // 鼠标滚轮事件<br/>
       *
       * @example
       * ```ts
       * import { log, Node } from 'cc';
       * // Add an event to the button.
       * button.node.on(Node.EventType.TOUCH_START, (event) => {
       *     log("This is a callback after the trigger event");
       * });
       * // You could also add a click event
       * //Note: In this way, you can't get the touch event info, so use it wisely.
       * button.node.on('click', (button) => {
       *    //The event is a custom event, you could get the Button component via first argument
       * })
       * ```
       */

      (function (EventType) {
        EventType["CLICK"] = "click";
      })(EventType || (EventType = {}));

      var Button = function (v) { return exports({ Button: v, ButtonComponent: v }), v; }((_dec$2 = ccclass('cc.Button'), _dec2$2 = help(), _dec3$2 = executionOrder(110), _dec4$1 = menu(), _dec5$1 = requireComponent(UITransform), _dec6$1 = type(Node), _dec7$1 = displayOrder(), _dec8$1 = tooltip(), _dec9$1 = displayOrder(), _dec10$1 = tooltip(), _dec11$1 = type(Transition), _dec12$1 = displayOrder(), _dec13$1 = tooltip(), _dec14$1 = tooltip(), _dec15$1 = tooltip(), _dec16 = tooltip(), _dec17 = tooltip(), _dec18 = rangeMin(), _dec19 = rangeMax(), _dec20 = tooltip(), _dec21 = tooltip(), _dec22 = type(SpriteFrame), _dec23 = tooltip(), _dec24 = type(SpriteFrame), _dec25 = tooltip(), _dec26 = type(SpriteFrame), _dec27 = tooltip(), _dec28 = type(SpriteFrame), _dec29 = tooltip(), _dec30 = type([EventHandler]), _dec31 = displayOrder(), _dec32 = tooltip(), _dec$2(_class$2 = _dec2$2(_class$2 = _dec3$2(_class$2 = _dec4$1(_class$2 = _dec5$1(_class$2 = executeInEditMode(_class$2 = (_class2$1 = (_temp$2 = _class3 = /*#__PURE__*/function (_Component) {
        _inherits(Button, _Component);

        function Button() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Button);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "clickEvents", _descriptor$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_interactable", _descriptor2$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_transition", _descriptor3$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_normalColor", _descriptor4$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_hoverColor", _descriptor5$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_pressColor", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_disabledColor", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_normalSprite", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_hoverSprite", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_pressedSprite", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_disabledSprite", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_duration", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_zoomScale", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_target", _descriptor14, _assertThisInitialized(_this));

          _this._pressed = false;
          _this._hovered = false;
          _this._fromColor = new Color();
          _this._toColor = new Color();
          _this._time = 0;
          _this._transitionFinished = true;
          _this._fromScale = new Vec3();
          _this._toScale = new Vec3();
          _this._originalScale = new Vec3();
          _this._sprite = null;
          _this._targetScale = new Vec3();
          return _this;
        }

        _createClass(Button, [{
          key: "__preload",
          value: function __preload() {
            if (!this.target) {
              this.target = this.node;
            }

            var sprite = this.node.getComponent(Sprite);

            if (sprite) {
              this._normalSprite = sprite.spriteFrame;
            }

            this._applyTarget();

            this._updateState();
          }
        }, {
          key: "onEnable",
          value: function onEnable() {

            // check sprite frames
            //
            {
              this._registerEvent();
            }
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            this._resetState();

            {
              this.node.off(SystemEventType.TOUCH_START, this._onTouchBegan, this);
              this.node.off(SystemEventType.TOUCH_MOVE, this._onTouchMove, this);
              this.node.off(SystemEventType.TOUCH_END, this._onTouchEnded, this);
              this.node.off(SystemEventType.TOUCH_CANCEL, this._onTouchCancel, this);
              this.node.off(SystemEventType.MOUSE_ENTER, this._onMouseMoveIn, this);
              this.node.off(SystemEventType.MOUSE_LEAVE, this._onMouseMoveOut, this);
            }
          }
        }, {
          key: "update",
          value: function update(dt) {
            var target = this._target ? this._target : this.node;

            if (this._transitionFinished) {
              return;
            }

            if (this._transition !== Transition.COLOR && this._transition !== Transition.SCALE) {
              return;
            }

            this._time += dt;
            var ratio = 1.0;

            if (this._duration > 0) {
              ratio = this._time / this._duration;
            }

            if (ratio >= 1) {
              ratio = 1;
              this._transitionFinished = true;
            }

            var renderComp = target.getComponent(UIRenderable);

            if (!renderComp) {
              return;
            }

            if (this._transition === Transition.COLOR) {
              Color.lerp(_tempColor, this._fromColor, this._toColor, ratio);
              renderComp.color = _tempColor;
            } else if (this.transition === Transition.SCALE) {
              target.getScale(this._targetScale);
              this._targetScale.x = lerp(this._fromScale.x, this._toScale.x, ratio);
              this._targetScale.y = lerp(this._fromScale.y, this._toScale.y, ratio);
              target.setScale(this._targetScale);
            }
          }
        }, {
          key: "_resizeNodeToTargetNode",
          value: function _resizeNodeToTargetNode() {
            var targetTrans = this._target && this._target._uiProps.uiTransformComp;
          }
        }, {
          key: "_resetState",
          value: function _resetState() {
            this._pressed = false;
            this._hovered = false; // Restore button status

            var target = this._target;

            if (!target) {
              return;
            }

            var renderComp = target.getComponent(UIRenderable);

            if (!renderComp) {
              return;
            }

            var transition = this._transition;

            if (transition === Transition.COLOR && this._interactable) {
              renderComp.color = this._normalColor;
            } else if (transition === Transition.SCALE) {
              target.setScale(this._originalScale);
            }

            this._transitionFinished = true;
          }
        }, {
          key: "_registerEvent",
          value: function _registerEvent() {
            this.node.on(SystemEventType.TOUCH_START, this._onTouchBegan, this);
            this.node.on(SystemEventType.TOUCH_MOVE, this._onTouchMove, this);
            this.node.on(SystemEventType.TOUCH_END, this._onTouchEnded, this);
            this.node.on(SystemEventType.TOUCH_CANCEL, this._onTouchCancel, this);
            this.node.on(SystemEventType.MOUSE_ENTER, this._onMouseMoveIn, this);
            this.node.on(SystemEventType.MOUSE_LEAVE, this._onMouseMoveOut, this);
          }
        }, {
          key: "_getTargetSprite",
          value: function _getTargetSprite(target) {
            var sprite = null;

            if (target) {
              sprite = target.getComponent(Sprite);
            }

            return sprite;
          }
        }, {
          key: "_applyTarget",
          value: function _applyTarget() {
            this._sprite = this._getTargetSprite(this._target);

            if (this._target) {
              Vec3.copy(this._originalScale, this._target.getScale());
            }
          } // touch event handler

        }, {
          key: "_onTouchBegan",
          value: function _onTouchBegan(event) {
            if (!this._interactable || !this.enabledInHierarchy) {
              return;
            }

            this._pressed = true;

            this._updateState();

            if (event) {
              event.propagationStopped = true;
            }
          }
        }, {
          key: "_onTouchMove",
          value: function _onTouchMove(event) {
            if (!this._interactable || !this.enabledInHierarchy || !this._pressed) {
              return;
            } // mobile phone will not emit _onMouseMoveOut,
            // so we have to do hit test when touch moving


            if (!event) {
              return false;
            }

            var touch = event.touch;

            if (!touch) {
              return false;
            }

            var hit = this.node._uiProps.uiTransformComp.isHit(touch.getUILocation());

            if (this._transition === Transition.SCALE && this._target) {
              if (hit) {
                Vec3.copy(this._fromScale, this._originalScale);
                Vec3.multiplyScalar(this._toScale, this._originalScale, this._zoomScale);
                this._transitionFinished = false;
              } else {
                this._time = 0;
                this._transitionFinished = true;

                if (this._target) {
                  this._target.setScale(this._originalScale);
                }
              }
            } else {
              var state;

              if (hit) {
                state = State.PRESSED;
              } else {
                state = State.NORMAL;
              }

              this._applyTransition(state);
            }

            if (event) {
              event.propagationStopped = true;
            }
          }
        }, {
          key: "_onTouchEnded",
          value: function _onTouchEnded(event) {
            if (!this._interactable || !this.enabledInHierarchy) {
              return;
            }

            if (this._pressed) {
              EventHandler.emitEvents(this.clickEvents, event);
              this.node.emit(EventType.CLICK, this);
            }

            this._pressed = false;

            this._updateState();

            if (event) {
              event.propagationStopped = true;
            }
          }
        }, {
          key: "_onTouchCancel",
          value: function _onTouchCancel(event) {
            if (!this._interactable || !this.enabledInHierarchy) {
              return;
            }

            this._pressed = false;

            this._updateState();
          }
        }, {
          key: "_onMouseMoveIn",
          value: function _onMouseMoveIn(event) {
            if (this._pressed || !this.interactable || !this.enabledInHierarchy) {
              return;
            }

            if (this._transition === Transition.SPRITE && !this._hoverSprite) {
              return;
            }

            if (!this._hovered) {
              this._hovered = true;

              this._updateState();
            }
          }
        }, {
          key: "_onMouseMoveOut",
          value: function _onMouseMoveOut(event) {
            if (this._hovered) {
              this._hovered = false;

              this._updateState();
            }
          } // state handler

        }, {
          key: "_updateState",
          value: function _updateState() {
            var state = this._getButtonState();

            this._applyTransition(state);
          }
        }, {
          key: "_getButtonState",
          value: function _getButtonState() {
            var state = State.NORMAL;

            if (!this._interactable) {
              state = State.DISABLED;
            } else if (this._pressed) {
              state = State.PRESSED;
            } else if (this._hovered) {
              state = State.HOVER;
            }

            return state.toString();
          }
        }, {
          key: "_updateColorTransition",
          value: function _updateColorTransition(state) {
            var color = this[state + 'Color'];
            var target = this._target;

            if (!target) {
              return;
            }

            var renderComp = target.getComponent(UIRenderable);

            if (!renderComp) {
              return;
            }

            if ( state === State.DISABLED) {
              renderComp.color = color;
            } else {
              this._fromColor = renderComp.color.clone();
              this._toColor = color;
              this._time = 0;
              this._transitionFinished = false;
            }
          }
        }, {
          key: "_updateSpriteTransition",
          value: function _updateSpriteTransition(state) {
            var sprite = this[state + 'Sprite'];

            if (this._sprite && sprite) {
              this._sprite.spriteFrame = sprite;
            }
          }
        }, {
          key: "_updateScaleTransition",
          value: function _updateScaleTransition(state) {
            if (!this._interactable) {
              return;
            }

            if (state === State.PRESSED) {
              this._zoomUp();
            } else {
              this._zoomBack();
            }
          }
        }, {
          key: "_zoomUp",
          value: function _zoomUp() {
            Vec3.copy(this._fromScale, this._originalScale);
            Vec3.multiplyScalar(this._toScale, this._originalScale, this._zoomScale);
            this._time = 0;
            this._transitionFinished = false;
          }
        }, {
          key: "_zoomBack",
          value: function _zoomBack() {
            if (!this._target) {
              return;
            }

            Vec3.copy(this._fromScale, this._target.getScale());
            Vec3.copy(this._toScale, this._originalScale);
            this._time = 0;
            this._transitionFinished = false;
          }
        }, {
          key: "_applyTransition",
          value: function _applyTransition(state) {
            var transition = this._transition;

            if (transition === Transition.COLOR) {
              this._updateColorTransition(state);
            } else if (transition === Transition.SPRITE) {
              this._updateSpriteTransition(state);
            } else if (transition === Transition.SCALE) {
              this._updateScaleTransition(state);
            }
          }
        }, {
          key: "target",

          /**
           * @en
           * Transition target.
           * When Button state changed:
           * - If Transition type is Button.Transition.NONE, Button will do nothing.
           * - If Transition type is Button.Transition.COLOR, Button will change target's color.
           * - If Transition type is Button.Transition.SPRITE, Button will change target Sprite's sprite.
           *
           * @zh
           * 需要过渡的目标。<br/>
           * 当前按钮状态改变规则：<br/>
           * - 如果 Transition type 选择 Button.Transition.NONE，按钮不做任何过渡。
           * - 如果 Transition type 选择 Button.Transition.COLOR，按钮会对目标颜色进行颜色之间的过渡。
           * - 如果 Transition type 选择 Button.Transition.Sprite，按钮会对目标 Sprite 进行 Sprite 之间的过渡。
           */
          get: function get() {
            return this._target;
          },
          set: function set(value) {
            if (this._target === value) {
              return;
            }

            this._target = value;

            this._applyTarget();
          }
          /**
           * @en
           * Whether the Button is disabled.
           * If true, the Button will trigger event and do transition.
           *
           * @zh
           * 按钮事件是否被响应，如果为 false，则按钮将被禁用。
           */

        }, {
          key: "interactable",
          get: function get() {
            return this._interactable;
          },
          set: function set(value) {
            // if (EDITOR) {
            //     if (value) {
            //         this._previousNormalSprite = this.normalSprite;
            //     } else {
            //         this.normalSprite = this._previousNormalSprite;
            //     }
            // }
            this._interactable = value;

            this._updateState();

            if (!this._interactable) {
              this._resetState();
            }
          }
        }, {
          key: "_resizeToTarget",
          set: function set(value) {
            if (value) {
              this._resizeNodeToTargetNode();
            }
          }
          /**
           * @en
           * Transition type.
           *
           * @zh
           * 按钮状态改变时过渡方式。
           */

        }, {
          key: "transition",
          get: function get() {
            return this._transition;
          },
          set: function set(value) {
            if (this._transition === value) {
              return;
            }

            this._transition = value;
          } // color transition

          /**
           * @en
           * Normal state color.
           *
           * @zh
           * 普通状态下按钮所显示的颜色。
           */

        }, {
          key: "normalColor",
          get: function get() {
            return this._normalColor;
          },
          set: function set(value) {
            if (this._normalColor === value) {
              return;
            }

            this._normalColor.set(value);

            this._updateState();
          }
          /**
           * @en
           * Pressed state color.
           *
           * @zh
           * 按下状态时按钮所显示的颜色。
           */

        }, {
          key: "pressedColor",
          get: function get() {
            return this._pressColor;
          },
          set: function set(value) {
            if (this._pressColor === value) {
              return;
            }

            this._pressColor.set(value);
          }
          /**
           * @en
           * Hover state color.
           *
           * @zh
           * 悬停状态下按钮所显示的颜色。
           */

        }, {
          key: "hoverColor",
          get: function get() {
            return this._hoverColor;
          },
          set: function set(value) {
            if (this._hoverColor === value) {
              return;
            }

            this._hoverColor.set(value);
          }
          /**
           * @en
           * Disabled state color.
           *
           * @zh
           * 禁用状态下按钮所显示的颜色。
           */

        }, {
          key: "disabledColor",
          get: function get() {
            return this._disabledColor;
          },
          set: function set(value) {
            if (this._disabledColor === value) {
              return;
            }

            this._disabledColor.set(value);

            this._updateState();
          }
          /**
           * @en
           * Color and Scale transition duration.
           *
           * @zh
           * 颜色过渡和缩放过渡时所需时间。
           */

        }, {
          key: "duration",
          get: function get() {
            return this._duration;
          },
          set: function set(value) {
            if (this._duration === value) {
              return;
            }

            this._duration = value;
          }
          /**
           * @en
           * When user press the button, the button will zoom to a scale.
           * The final scale of the button equals (button original scale * zoomScale)
           *
           * @zh
           * 当用户点击按钮后，按钮会缩放到一个值，这个值等于 Button 原始 scale * zoomScale。
           */

        }, {
          key: "zoomScale",
          get: function get() {
            return this._zoomScale;
          },
          set: function set(value) {
            if (this._zoomScale === value) {
              return;
            }

            this._zoomScale = value;
          } // sprite transition

          /**
           * @en
           * Normal state sprite.
           *
           * @zh
           * 普通状态下按钮所显示的 Sprite。
           */

        }, {
          key: "normalSprite",
          get: function get() {
            return this._normalSprite;
          },
          set: function set(value) {
            if (this._normalSprite === value) {
              return;
            }

            this._normalSprite = value;
            var sprite = this.node.getComponent(Sprite);

            if (sprite) {
              sprite.spriteFrame = value;
            }

            this._updateState();
          }
          /**
           * @en
           * Pressed state sprite.
           *
           * @zh
           * 按下状态时按钮所显示的 Sprite。
           */

        }, {
          key: "pressedSprite",
          get: function get() {
            return this._pressedSprite;
          },
          set: function set(value) {
            if (this._pressedSprite === value) {
              return;
            }

            this._pressedSprite = value;

            this._updateState();
          }
          /**
           * @en
           * Hover state sprite.
           *
           * @zh
           * 悬停状态下按钮所显示的 Sprite。
           */

        }, {
          key: "hoverSprite",
          get: function get() {
            return this._hoverSprite;
          },
          set: function set(value) {
            if (this._hoverSprite === value) {
              return;
            }

            this._hoverSprite = value;

            this._updateState();
          }
          /**
           * @en
           * Disabled state sprite.
           *
           * @zh
           * 禁用状态下按钮所显示的 Sprite。
           */

        }, {
          key: "disabledSprite",
          get: function get() {
            return this._disabledSprite;
          },
          set: function set(value) {
            if (this._disabledSprite === value) {
              return;
            }

            this._disabledSprite = value;

            this._updateState();
          }
        }]);

        return Button;
      }(Component), _class3.Transition = Transition, _class3.EventType = EventType, _temp$2), (_applyDecoratedDescriptor(_class2$1.prototype, "target", [_dec6$1, _dec7$1, _dec8$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "target"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "interactable", [_dec9$1, _dec10$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "interactable"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "transition", [_dec11$1, _dec12$1, _dec13$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "transition"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "normalColor", [_dec14$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "normalColor"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "pressedColor", [_dec15$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "pressedColor"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "hoverColor", [_dec16], Object.getOwnPropertyDescriptor(_class2$1.prototype, "hoverColor"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "disabledColor", [_dec17], Object.getOwnPropertyDescriptor(_class2$1.prototype, "disabledColor"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "duration", [_dec18, _dec19, _dec20], Object.getOwnPropertyDescriptor(_class2$1.prototype, "duration"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "zoomScale", [_dec21], Object.getOwnPropertyDescriptor(_class2$1.prototype, "zoomScale"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "normalSprite", [_dec22, _dec23], Object.getOwnPropertyDescriptor(_class2$1.prototype, "normalSprite"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "pressedSprite", [_dec24, _dec25], Object.getOwnPropertyDescriptor(_class2$1.prototype, "pressedSprite"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "hoverSprite", [_dec26, _dec27], Object.getOwnPropertyDescriptor(_class2$1.prototype, "hoverSprite"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "disabledSprite", [_dec28, _dec29], Object.getOwnPropertyDescriptor(_class2$1.prototype, "disabledSprite"), _class2$1.prototype), _descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "clickEvents", [_dec30, serializable, _dec31, _dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_interactable", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_transition", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Transition.NONE;
        }
      }), _descriptor4$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_normalColor", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(214, 214, 214, 255);
        }
      }), _descriptor5$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_hoverColor", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(211, 211, 211, 255);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2$1.prototype, "_pressColor", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.WHITE.clone();
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2$1.prototype, "_disabledColor", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(124, 124, 124, 255);
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2$1.prototype, "_normalSprite", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2$1.prototype, "_hoverSprite", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2$1.prototype, "_pressedSprite", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2$1.prototype, "_disabledSprite", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2$1.prototype, "_duration", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2$1.prototype, "_zoomScale", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.2;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2$1.prototype, "_target", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$1)) || _class$2) || _class$2) || _class$2) || _class$2) || _class$2) || _class$2));

      /**
       * @hidden
       */
      var CanvasPool = exports('CanvasPool', /*#__PURE__*/function () {
        function CanvasPool() {
          _classCallCheck(this, CanvasPool);

          this.pool = [];
        }

        _createClass(CanvasPool, [{
          key: "get",
          value: function get() {
            var data = this.pool.pop();

            if (!data) {
              var canvas = document.createElement('canvas');
              var context = canvas.getContext('2d');
              data = {
                canvas: canvas,
                context: context
              };
            }

            return data;
          }
        }, {
          key: "put",
          value: function put(canvas) {
            if (this.pool.length >= 32) {
              return;
            }

            this.pool.push(canvas);
          }
        }]);

        return CanvasPool;
      }()); // export function packToDynamicAtlas(comp, frame) {
      //     // TODO: Material API design and export from editor could affect the material activation process
      //     // need to update the logic here
      //     if (frame && !TEST) {
      //         if (!frame._original && dynamicAtlasManager) {
      //             let packedFrame = dynamicAtlasManager.insertSpriteFrame(frame);
      //             if (packedFrame) {
      //                 frame._setDynamicAtlasFrame(packedFrame);
      //             }
      //         }
      //         if (comp.sharedMaterials[0].getProperty('texture') !== frame._texture) {
      //             comp._activateMaterial();
      //         }
      //     }
      // }

      var _dec$3, _dec2$3, _dec3$3, _dec4$2, _dec5$2, _dec6$2, _dec7$2, _dec8$2, _dec9$2, _dec10$2, _dec11$2, _dec12$2, _dec13$2, _dec14$2, _dec15$2, _dec16$1, _dec17$1, _dec18$1, _dec19$1, _dec20$1, _dec21$1, _dec22$1, _dec23$1, _dec24$1, _dec25$1, _dec26$1, _dec27$1, _dec28$1, _dec29$1, _dec30$1, _dec31$1, _dec32$1, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _class$3, _class2$2, _descriptor$2, _descriptor2$2, _descriptor3$2, _descriptor4$2, _descriptor5$2, _descriptor6$1, _descriptor7$1, _descriptor8$1, _descriptor9$1, _descriptor10$1, _descriptor11$1, _descriptor12$1, _descriptor13$1, _descriptor14$1, _descriptor15, _descriptor16, _class3$1, _temp$3;

      /**
       * @en Enum for horizontal text alignment.
       *
       * @zh 文本横向对齐类型。
       */
      var HorizontalTextAlignment;

      (function (HorizontalTextAlignment) {
        HorizontalTextAlignment[HorizontalTextAlignment["LEFT"] = 0] = "LEFT";
        HorizontalTextAlignment[HorizontalTextAlignment["CENTER"] = 1] = "CENTER";
        HorizontalTextAlignment[HorizontalTextAlignment["RIGHT"] = 2] = "RIGHT";
      })(HorizontalTextAlignment || (HorizontalTextAlignment = exports('HorizontalTextAlignment', {})));

      ccenum(HorizontalTextAlignment);
      /**
       * @en Enum for vertical text alignment.
       *
       * @zh 文本垂直对齐类型。
       */

      var VerticalTextAlignment;

      (function (VerticalTextAlignment) {
        VerticalTextAlignment[VerticalTextAlignment["TOP"] = 0] = "TOP";
        VerticalTextAlignment[VerticalTextAlignment["CENTER"] = 1] = "CENTER";
        VerticalTextAlignment[VerticalTextAlignment["BOTTOM"] = 2] = "BOTTOM";
      })(VerticalTextAlignment || (VerticalTextAlignment = exports('VerticalTextAlignment', {})));

      ccenum(VerticalTextAlignment);
      /**
       * @en Enum for Overflow.
       *
       * @zh 文本超载类型。
       */

      var Overflow;

      (function (Overflow) {
        Overflow[Overflow["NONE"] = 0] = "NONE";
        Overflow[Overflow["CLAMP"] = 1] = "CLAMP";
        Overflow[Overflow["SHRINK"] = 2] = "SHRINK";
        Overflow[Overflow["RESIZE_HEIGHT"] = 3] = "RESIZE_HEIGHT";
      })(Overflow || (Overflow = exports('Overflow', {})));

      ccenum(Overflow);
      /**
       * @en Enum for cache mode.
       *
       * @zh 文本图集缓存类型。
       */

      var CacheMode;

      (function (CacheMode) {
        CacheMode[CacheMode["NONE"] = 0] = "NONE";
        CacheMode[CacheMode["BITMAP"] = 1] = "BITMAP";
        CacheMode[CacheMode["CHAR"] = 2] = "CHAR";
      })(CacheMode || (CacheMode = exports('CacheMode', {})));

      ccenum(CacheMode);
      /**
       * @zh
       * Type 类型。
       */

      /**
       * @zh
       * TTF字体。
       */

      /**
       * @zh
       * 位图字体。
       */

      /**
       * @zh
       * 系统字体。
       */

      /**
       * @en
       * The Label Component.
       *
       * @zh
       * 文字标签组件。
       */

      var Label = function (v) { return exports({ Label: v, LabelComponent: v }), v; }((_dec$3 = ccclass('cc.Label'), _dec2$3 = help(), _dec3$3 = executionOrder(110), _dec4$2 = menu(), _dec5$2 = displayOrder(), _dec6$2 = tooltip(), _dec7$2 = type(HorizontalTextAlignment), _dec8$2 = displayOrder(), _dec9$2 = tooltip(), _dec10$2 = type(VerticalTextAlignment), _dec11$2 = displayOrder(), _dec12$2 = tooltip(), _dec13$2 = displayOrder(), _dec14$2 = tooltip(), _dec15$2 = displayOrder(), _dec16$1 = tooltip(), _dec17$1 = displayOrder(), _dec18$1 = tooltip(), _dec19$1 = type(Overflow), _dec20$1 = displayOrder(), _dec21$1 = tooltip(), _dec22$1 = displayOrder(), _dec23$1 = tooltip(), _dec24$1 = type(Font), _dec25$1 = displayOrder(), _dec26$1 = tooltip(), _dec27$1 = displayOrder(), _dec28$1 = tooltip(), _dec29$1 = type(CacheMode), _dec30$1 = displayOrder(), _dec31$1 = tooltip(), _dec32$1 = displayOrder(), _dec33 = tooltip(), _dec34 = displayOrder(), _dec35 = tooltip(), _dec36 = displayOrder(), _dec37 = tooltip(), _dec38 = type(Material), _dec39 = displayName(), _dec40 = visible(), _dec$3(_class$3 = _dec2$3(_class$3 = _dec3$3(_class$3 = _dec4$2(_class$3 = (_class2$2 = (_temp$3 = _class3$1 = /*#__PURE__*/function (_UIRenderable) {
        _inherits(Label, _UIRenderable);

        _createClass(Label, [{
          key: "string",

          /**
           * @en
           * Content string of label.
           *
           * @zh
           * 标签显示的文本内容。
           */
          get: function get() {
            return this._string;
          },
          set: function set(value) {
            value = value + '';

            if (this._string === value) {
              return;
            }

            this._string = value;
            this.updateRenderData();
          }
          /**
           * @en
           * Horizontal Alignment of label.
           *
           * @zh
           * 文本内容的水平对齐方式。
           */

        }, {
          key: "horizontalAlign",
          get: function get() {
            return this._horizontalAlign;
          },
          set: function set(value) {
            if (this._horizontalAlign === value) {
              return;
            }

            this._horizontalAlign = value;
            this.updateRenderData();
          }
          /**
           * @en
           * Vertical Alignment of label.
           *
           * @zh
           * 文本内容的垂直对齐方式。
           */

        }, {
          key: "verticalAlign",
          get: function get() {
            return this._verticalAlign;
          },
          set: function set(value) {
            if (this._verticalAlign === value) {
              return;
            }

            this._verticalAlign = value;
            this.updateRenderData();
          }
          /**
           * @en
           * The actual rendering font size in shrink mode.
           *
           * @zh
           * SHRINK 模式下面文本实际渲染的字体大小。
           */

        }, {
          key: "actualFontSize",
          get: function get() {
            return this._actualFontSize;
          },
          set: function set(value) {
            this._actualFontSize = value;
          }
          /**
           * @en
           * Font size of label.
           *
           * @zh
           * 文本字体大小。
           */

        }, {
          key: "fontSize",
          get: function get() {
            return this._fontSize;
          },
          set: function set(value) {
            if (this._fontSize === value) {
              return;
            }

            this._fontSize = value;
            this.updateRenderData();
          }
          /**
           * @en
           * Font family of label, only take effect when useSystemFont property is true.
           *
           * @zh
           * 文本字体名称, 只在 useSystemFont 属性为 true 的时候生效。
           */

        }, {
          key: "fontFamily",
          get: function get() {
            return this._fontFamily;
          },
          set: function set(value) {
            if (this._fontFamily === value) {
              return;
            }

            this._fontFamily = value;
            this.updateRenderData();
          }
          /**
           * @en
           * Line Height of label.
           *
           * @zh
           * 文本行高。
           */

        }, {
          key: "lineHeight",
          get: function get() {
            return this._lineHeight;
          },
          set: function set(value) {
            if (this._lineHeight === value) {
              return;
            }

            this._lineHeight = value;
            this.updateRenderData();
          }
          /**
           * @en
           * Overflow of label.
           *
           * @zh
           * 文字显示超出范围时的处理方式。
           */

        }, {
          key: "overflow",
          get: function get() {
            return this._overflow;
          },
          set: function set(value) {
            if (this._overflow === value) {
              return;
            }

            this._overflow = value;
            this.updateRenderData();
          }
          /**
           * @en
           * Whether auto wrap label when string width is large than label width.
           *
           * @zh
           * 是否自动换行。
           */

        }, {
          key: "enableWrapText",
          get: function get() {
            return this._enableWrapText;
          },
          set: function set(value) {
            if (this._enableWrapText === value) {
              return;
            }

            this._enableWrapText = value;
            this.updateRenderData();
          }
          /**
           * @en
           * The font of label.
           *
           * @zh
           * 文本字体。
           */

        }, {
          key: "font",
          get: function get() {
            // return this._N$file;
            return this._font;
          },
          set: function set(value) {
            if (this._font === value) {
              return;
            } // if delete the font, we should change isSystemFontUsed to true


            this._isSystemFontUsed = !value;


            this._font = value; // if (value && this._isSystemFontUsed)
            //     this._isSystemFontUsed = false;

            if (typeof value === 'string') {
              warnID(4000);
            }

            if (this._renderData) {
              this.destroyRenderData();
              this._renderData = null;
            }

            this._fontAtlas = null;
            this.updateRenderData(true);
          }
          /**
           * @en
           * Whether use system font name or not.
           *
           * @zh
           * 是否使用系统字体。
           */

        }, {
          key: "useSystemFont",
          get: function get() {
            return this._isSystemFontUsed;
          },
          set: function set(value) {
            if (this._isSystemFontUsed === value) {
              return;
            }

            this.destroyRenderData();
            this._renderData = null;

            this._isSystemFontUsed = !!value;

            if (value) {
              this.font = null;

              this._flushAssembler();

              this.updateRenderData();
            } // else if (!this._userDefinedFont) {
            //     this.disableRender();
            // }

          }
          /**
           * @en
           * The cache mode of label. This mode only supports system fonts.
           *
           * @zh
           * 文本缓存模式, 该模式只支持系统字体。
           */

        }, {
          key: "cacheMode",
          get: function get() {
            return this._cacheMode;
          },
          set: function set(value) {
            if (this._cacheMode === value) {
              return;
            } // if (this._cacheMode === CacheMode.BITMAP && !(this._font instanceof BitmapFont) && this._frame) {
            //     this._frame._resetDynamicAtlasFrame();
            // }


            if (this._cacheMode === CacheMode.CHAR) {
              this._ttfSpriteFrame = null;
            }

            this._cacheMode = value;
            this.updateRenderData(true);
          }
        }, {
          key: "spriteFrame",
          get: function get() {
            return this._texture;
          }
          /**
           * @en
           * Whether the font is bold.
           *
           * @zh
           * 字体是否加粗。
           */

        }, {
          key: "isBold",
          get: function get() {
            return this._isBold;
          },
          set: function set(value) {
            if (this._isBold === value) {
              return;
            }

            this._isBold = value;
            this.updateRenderData();
          }
          /**
           * @en
           * Whether the font is italic.
           *
           * @zh
           * 字体是否倾斜。
           */

        }, {
          key: "isItalic",
          get: function get() {
            return this._isItalic;
          },
          set: function set(value) {
            if (this._isItalic === value) {
              return;
            }

            this._isItalic = value;
            this.updateRenderData();
          }
          /**
           * @en
           * Whether the font is underline.
           *
           * @zh
           * 字体是否加下划线。
           */

        }, {
          key: "isUnderline",
          get: function get() {
            return this._isUnderline;
          },
          set: function set(value) {
            if (this._isUnderline === value) {
              return;
            }

            this._isUnderline = value;
            this.updateRenderData();
          }
        }, {
          key: "sharedMaterials",
          get: function get() {
            return _get(_getPrototypeOf(Label.prototype), "sharedMaterials", this);
          },
          set: function set(val) {
            _set(_getPrototypeOf(Label.prototype), "sharedMaterials", val, this, true);
          }
        }, {
          key: "assemblerData",
          get: function get() {
            return this._assemblerData;
          }
        }, {
          key: "fontAtlas",
          get: function get() {
            return this._fontAtlas;
          },
          set: function set(value) {
            this._fontAtlas = value;
          }
        }, {
          key: "spacingX",
          get: function get() {
            return this._spacingX;
          },
          set: function set(value) {
            if (this._spacingX === value) {
              return;
            }

            this._spacingX = value;
            this.updateRenderData();
          }
        }, {
          key: "_bmFontOriginalSize",
          get: function get() {
            if (this._font instanceof BitmapFont) {
              return this._font.fontSize;
            } else {
              return -1;
            }
          }
        }]);

        function Label() {
          var _this;

          _classCallCheck(this, Label);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Label).call(this));

          _initializerDefineProperty(_this, "_useOriginalSize", _descriptor$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_string", _descriptor2$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_horizontalAlign", _descriptor3$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_verticalAlign", _descriptor4$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_actualFontSize", _descriptor5$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_fontSize", _descriptor6$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_fontFamily", _descriptor7$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_lineHeight", _descriptor8$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_overflow", _descriptor9$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_enableWrapText", _descriptor10$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_font", _descriptor11$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isSystemFontUsed", _descriptor12$1, _assertThisInitialized(_this));

          _this._spacingX = 0;

          _initializerDefineProperty(_this, "_isItalic", _descriptor13$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isBold", _descriptor14$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isUnderline", _descriptor15, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_cacheMode", _descriptor16, _assertThisInitialized(_this));

          _this._N$file = null;
          _this._texture = null;
          _this._ttfSpriteFrame = null;
          _this._userDefinedFont = null;
          _this._assemblerData = null;
          _this._fontAtlas = null;
          _this._letterTexture = null;

          _this._ttfSpriteFrame = null;
          return _this;
        }

        _createClass(Label, [{
          key: "onEnable",
          value: function onEnable() {
            _get(_getPrototypeOf(Label.prototype), "onEnable", this).call(this); // TODO: Hack for barbarians


            if (!this._font && !this._isSystemFontUsed) {
              this.useSystemFont = true;
            } // Reapply default font family if necessary


            if (this._isSystemFontUsed && !this._fontFamily) {
              this.fontFamily = 'Arial';
            }

            this.updateRenderData(true);
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            _get(_getPrototypeOf(Label.prototype), "onDisable", this).call(this);
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            if (this._assembler && this._assembler.resetAssemblerData) {
              this._assembler.resetAssemblerData(this._assemblerData);
            }

            this._assemblerData = null;

            if (this._ttfSpriteFrame) {
              var tex = this._ttfSpriteFrame.texture;

              if (tex) {
                var tex2d = tex;

                if (tex2d.image) {
                  tex2d.image.destroy();
                }

                tex.destroy();
              }

              this._ttfSpriteFrame = null;
            } // texture cannot be destroyed in here, lettertexture image source is public.


            this._letterTexture = null;

            _get(_getPrototypeOf(Label.prototype), "onDestroy", this).call(this);
          }
        }, {
          key: "updateRenderData",
          value: function updateRenderData() {
            var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.markForUpdateRenderData();

            if (force) {
              this._flushAssembler();

              this._applyFontTexture();
            }
          }
        }, {
          key: "_render",
          value: function _render(render) {
            render.commitComp(this, this._texture.getGFXTexture(), this._assembler, this._texture.getGFXSampler());
          }
        }, {
          key: "_updateColor",
          value: function _updateColor() {
            if (this._font instanceof BitmapFont) {
              _get(_getPrototypeOf(Label.prototype), "_updateColor", this).call(this);
            } else {
              this.updateRenderData(false);
            }
          }
        }, {
          key: "_canRender",
          value: function _canRender() {
            if (!_get(_getPrototypeOf(Label.prototype), "_canRender", this).call(this) || !this._string) {
              return false;
            }

            var font = this._font;

            if (font && font instanceof BitmapFont) {
              var spriteFrame = font.spriteFrame; // cannot be activated if texture not loaded yet

              if (!spriteFrame || !spriteFrame.textureLoaded()) {
                return false;
              }
            }

            return true;
          }
        }, {
          key: "_flushAssembler",
          value: function _flushAssembler() {
            var assembler = Label.Assembler.getAssembler(this);

            if (this._assembler !== assembler) {
              this.destroyRenderData();
              this._assembler = assembler;
            }

            if (!this._renderData) {
              if (this._assembler && this._assembler.createData) {
                this._renderData = this._assembler.createData(this);
                this._renderData.material = this.material;
              }
            }
          }
        }, {
          key: "_applyFontTexture",
          value: function _applyFontTexture() {
            var _this2 = this;

            var font = this._font;

            if (font instanceof BitmapFont) {
              var spriteFrame = font.spriteFrame;

              var onBMFontTextureLoaded = function onBMFontTextureLoaded() {
                // TODO: old texture in material have been released by loader
                _this2._texture = spriteFrame;

                if (_this2._assembler) {
                  _this2._assembler.updateRenderData(_this2);
                }
              }; // cannot be activated if texture not loaded yet


              if (spriteFrame) {
                if (spriteFrame.loaded || spriteFrame.textureLoaded) {
                  onBMFontTextureLoaded();
                } else {
                  spriteFrame.once('load', onBMFontTextureLoaded, this);
                }
              }
            } else {
              if (this.cacheMode === CacheMode.CHAR) {
                this._letterTexture = this._assembler.getAssemblerData();
                this._texture = this._letterTexture;
              } else if (!this._ttfSpriteFrame) {
                this._ttfSpriteFrame = new SpriteFrame();
                this._assemblerData = this._assembler.getAssemblerData();
                var image = new ImageAsset(this._assemblerData.canvas);
                var tex = image._texture;
                this._ttfSpriteFrame.texture = tex;
              }

              if (this.cacheMode !== CacheMode.CHAR) {
                // this._frame._refreshTexture(this._texture);
                this._texture = this._ttfSpriteFrame;
              }

              if (this._assembler) {
                this._assembler.updateRenderData(this);
              }
            }
          }
        }]);

        return Label;
      }(UIRenderable), _class3$1.HorizontalAlign = HorizontalTextAlignment, _class3$1.VerticalAlign = VerticalTextAlignment, _class3$1.Overflow = Overflow, _class3$1.CacheMode = CacheMode, _class3$1._canvasPool = new CanvasPool(), _temp$3), (_applyDecoratedDescriptor(_class2$2.prototype, "string", [_dec5$2, _dec6$2, multiline], Object.getOwnPropertyDescriptor(_class2$2.prototype, "string"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "horizontalAlign", [_dec7$2, _dec8$2, _dec9$2], Object.getOwnPropertyDescriptor(_class2$2.prototype, "horizontalAlign"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "verticalAlign", [_dec10$2, _dec11$2, _dec12$2], Object.getOwnPropertyDescriptor(_class2$2.prototype, "verticalAlign"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "fontSize", [_dec13$2, _dec14$2], Object.getOwnPropertyDescriptor(_class2$2.prototype, "fontSize"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "fontFamily", [_dec15$2, _dec16$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "fontFamily"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "lineHeight", [_dec17$1, _dec18$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "lineHeight"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "overflow", [_dec19$1, _dec20$1, _dec21$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "overflow"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "enableWrapText", [_dec22$1, _dec23$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "enableWrapText"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "font", [_dec24$1, _dec25$1, _dec26$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "font"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "useSystemFont", [_dec27$1, _dec28$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "useSystemFont"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "cacheMode", [_dec29$1, _dec30$1, _dec31$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "cacheMode"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "isBold", [_dec32$1, _dec33], Object.getOwnPropertyDescriptor(_class2$2.prototype, "isBold"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "isItalic", [_dec34, _dec35], Object.getOwnPropertyDescriptor(_class2$2.prototype, "isItalic"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "isUnderline", [_dec36, _dec37], Object.getOwnPropertyDescriptor(_class2$2.prototype, "isUnderline"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "sharedMaterials", [_dec38, override, _dec39, _dec40], Object.getOwnPropertyDescriptor(_class2$2.prototype, "sharedMaterials"), _class2$2.prototype), _descriptor$2 = _applyDecoratedDescriptor(_class2$2.prototype, "_useOriginalSize", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2$2 = _applyDecoratedDescriptor(_class2$2.prototype, "_string", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'label';
        }
      }), _descriptor3$2 = _applyDecoratedDescriptor(_class2$2.prototype, "_horizontalAlign", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return HorizontalTextAlignment.CENTER;
        }
      }), _descriptor4$2 = _applyDecoratedDescriptor(_class2$2.prototype, "_verticalAlign", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return VerticalTextAlignment.CENTER;
        }
      }), _descriptor5$2 = _applyDecoratedDescriptor(_class2$2.prototype, "_actualFontSize", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_fontSize", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 40;
        }
      }), _descriptor7$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_fontFamily", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'Arial';
        }
      }), _descriptor8$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_lineHeight", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 40;
        }
      }), _descriptor9$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_overflow", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Overflow.NONE;
        }
      }), _descriptor10$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_enableWrapText", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor11$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_font", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_isSystemFontUsed", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor13$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_isItalic", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor14$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_isBold", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2$2.prototype, "_isUnderline", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2$2.prototype, "_cacheMode", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return CacheMode.NONE;
        }
      })), _class2$2)) || _class$3) || _class$3) || _class$3) || _class$3));

      /**
       * @hidden
       */
      var tabIndexUtil = /*#__PURE__*/function () {
        function tabIndexUtil() {
          _classCallCheck(this, tabIndexUtil);
        }

        _createClass(tabIndexUtil, null, [{
          key: "add",
          value: function add(editBoxImpl) {
            var list = this._tabIndexList;
            var index = list.indexOf(editBoxImpl);

            if (index === -1) {
              list.push(editBoxImpl);
            }
          }
        }, {
          key: "remove",
          value: function remove(editBoxImpl) {
            var list = this._tabIndexList;
            var index = list.indexOf(editBoxImpl);

            if (index !== -1) {
              list.splice(index, 1);
            }
          }
        }, {
          key: "resort",
          value: function resort() {
            this._tabIndexList.sort(function (a, b) {
              return a._delegate.tabIndex - b._delegate.tabIndex;
            });
          }
        }, {
          key: "next",
          value: function next(editBoxImpl) {
            var list = this._tabIndexList;
            var index = list.indexOf(editBoxImpl);
            editBoxImpl.setFocus(false);

            if (index !== -1) {
              var nextImpl = list[index + 1];

              if (nextImpl && nextImpl._delegate.tabIndex >= 0) {
                nextImpl.setFocus(true);
              }
            }
          }
        }]);

        return tabIndexUtil;
      }();
      tabIndexUtil._tabIndexList = [];

      /*
       Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

       http://www.cocos.com

       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated engine source code (the "Software"), a limited,
       worldwide, royalty-free, non-assignable, revocable and non-exclusive license
       to use Cocos Creator solely to develop games on your target platforms. You shall
       not use Cocos Creator software for developing other software or tools that's
       used for developing games. You are not granted to publish, distribute,
       sublicense, and/or sell copies of Cocos Creator.

       The software or tools in this License Agreement are licensed, not sold.
       Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */
      /**
       * 键盘的返回键类型。
       * @readonly
       * @enum EditBox.KeyboardReturnType
       */

      var KeyboardReturnType;

      (function (KeyboardReturnType) {
        KeyboardReturnType[KeyboardReturnType["DEFAULT"] = 0] = "DEFAULT";
        KeyboardReturnType[KeyboardReturnType["DONE"] = 1] = "DONE";
        KeyboardReturnType[KeyboardReturnType["SEND"] = 2] = "SEND";
        KeyboardReturnType[KeyboardReturnType["SEARCH"] = 3] = "SEARCH";
        KeyboardReturnType[KeyboardReturnType["GO"] = 4] = "GO";
        KeyboardReturnType[KeyboardReturnType["NEXT"] = 5] = "NEXT";
      })(KeyboardReturnType || (KeyboardReturnType = {}));

      Enum(KeyboardReturnType);
      /**
       * 输入模式。
       * @readonly
       * @enum EditBox.InputMode
       */

      var InputMode;

      (function (InputMode) {
        InputMode[InputMode["ANY"] = 0] = "ANY";
        InputMode[InputMode["EMAIL_ADDR"] = 1] = "EMAIL_ADDR";
        InputMode[InputMode["NUMERIC"] = 2] = "NUMERIC";
        InputMode[InputMode["PHONE_NUMBER"] = 3] = "PHONE_NUMBER";
        InputMode[InputMode["URL"] = 4] = "URL";
        InputMode[InputMode["DECIMAL"] = 5] = "DECIMAL";
        InputMode[InputMode["SINGLE_LINE"] = 6] = "SINGLE_LINE";
      })(InputMode || (InputMode = {}));

      Enum(InputMode);
      /**
       * 定义了一些用于设置文本显示和文本格式化的标志位。
       * @readonly
       * @enum EditBox.InputFlag
       */

      var InputFlag;

      (function (InputFlag) {
        InputFlag[InputFlag["PASSWORD"] = 0] = "PASSWORD";
        InputFlag[InputFlag["SENSITIVE"] = 1] = "SENSITIVE";
        InputFlag[InputFlag["INITIAL_CAPS_WORD"] = 2] = "INITIAL_CAPS_WORD";
        InputFlag[InputFlag["INITIAL_CAPS_SENTENCE"] = 3] = "INITIAL_CAPS_SENTENCE";
        InputFlag[InputFlag["INITIAL_CAPS_ALL_CHARACTERS"] = 4] = "INITIAL_CAPS_ALL_CHARACTERS";
        InputFlag[InputFlag["DEFAULT"] = 5] = "DEFAULT";
      })(InputFlag || (InputFlag = {}));

      Enum(InputFlag);

      /*
       Copyright (c) 2011-2012 cocos2d-x.org
       Copyright (c) 2012 James Chen
       Copyright (c) 2013-2016 Chukong Technologies Inc.
       Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

       https://www.cocos.com/

       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated engine source code (the "Software"), a limited,
       worldwide, royalty-free, non-assignable, revocable and non-exclusive license
       to use Cocos Creator solely to develop games on your target platforms. You shall
       not use Cocos Creator software for developing other software or tools that's
       used for developing games. You are not granted to publish, distribute,
       sublicense, and/or sell copies of Cocos Creator.

       The software or tools in this License Agreement are licensed, not sold.
       Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */

      /**
       * @hidden
       */
      var EditBoxImplBase = /*#__PURE__*/function () {
        function EditBoxImplBase() {
          _classCallCheck(this, EditBoxImplBase);

          this._editing = false;
          this._delegate = null;
        }

        _createClass(EditBoxImplBase, [{
          key: "init",
          value: function init(delegate) {}
        }, {
          key: "onEnable",
          value: function onEnable() {}
        }, {
          key: "update",
          value: function update() {}
        }, {
          key: "onDisable",
          value: function onDisable() {
            if (this._editing) {
              this.endEditing();
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            this._delegate = null;
          }
        }, {
          key: "setTabIndex",
          value: function setTabIndex(index) {}
        }, {
          key: "setSize",
          value: function setSize(width, height) {}
        }, {
          key: "setFocus",
          value: function setFocus(value) {
            if (value) {
              this.beginEditing();
            } else {
              this.endEditing();
            }
          }
        }, {
          key: "isFocused",
          value: function isFocused() {
            return this._editing;
          }
        }, {
          key: "beginEditing",
          value: function beginEditing() {}
        }, {
          key: "endEditing",
          value: function endEditing() {}
        }]);

        return EditBoxImplBase;
      }();

      var SCROLLY = 40;
      var LEFT_PADDING = 2;
      var DELAY_TIME = 400;

      var _matrix = new Mat4();

      var _matrix_temp = new Mat4();

      var _vec3 = new Vec3();

      var _currentEditBoxImpl = null;
      var _domCount = 0;
      var EditBoxImpl = /*#__PURE__*/function (_EditBoxImplBase) {
        _inherits(EditBoxImpl, _EditBoxImplBase);

        function EditBoxImpl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, EditBoxImpl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EditBoxImpl)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this._delegate = null;
          _this._inputMode = -1;
          _this._inputFlag = -1;
          _this._returnType = -1;
          _this.__eventListeners = {};
          _this.__fullscreen = false;
          _this.__autoResize = false;
          _this.__orientationChanged = void 0;
          _this._edTxt = null;
          _this._isTextArea = false;
          _this._textLabelFont = null;
          _this._textLabelFontSize = null;
          _this._textLabelFontColor = null;
          _this._textLabelAlign = null;
          _this._placeholderLabelFont = null;
          _this._placeholderLabelFontSize = null;
          _this._placeholderLabelFontColor = null;
          _this._placeholderLabelAlign = null;
          _this._placeholderLineHeight = null;
          _this._placeholderStyleSheet = null;
          _this._domId = "EditBoxId_".concat(++_domCount);
          return _this;
        }

        _createClass(EditBoxImpl, [{
          key: "init",
          value: function init(delegate) {
            if (!delegate) {
              return;
            }

            this._delegate = delegate;

            if (delegate.inputMode === InputMode.ANY) {
              this._createTextArea();
            } else {
              this._createInput();
            }

            tabIndexUtil.add(this);
            this.setTabIndex(delegate.tabIndex);

            this._initStyleSheet();

            this._registerEventListeners();

            this._addDomToGameContainer();

            this.__fullscreen = view.isAutoFullScreenEnabled();
            this.__autoResize = view._resizeWithBrowserSize;
          }
        }, {
          key: "clear",
          value: function clear() {
            this._removeEventListeners();

            this._removeDomFromGameContainer();

            tabIndexUtil.remove(this); // clear while editing

            if (_currentEditBoxImpl === this) {
              _currentEditBoxImpl = null;
            }

            this._delegate = null;
          }
        }, {
          key: "update",
          value: function update() {
            this._updateMatrix();
          }
        }, {
          key: "setTabIndex",
          value: function setTabIndex(index) {
            this._edTxt.tabIndex = index;
            tabIndexUtil.resort();
          }
        }, {
          key: "setSize",
          value: function setSize(width, height) {
            var elem = this._edTxt;

            if (elem) {
              elem.style.width = width + 'px';
              elem.style.height = height + 'px';
            }
          }
        }, {
          key: "beginEditing",
          value: function beginEditing() {
            if (_currentEditBoxImpl && _currentEditBoxImpl !== this) {
              _currentEditBoxImpl.setFocus(false);
            }

            this._editing = true;
            _currentEditBoxImpl = this;

            this._delegate._editBoxEditingDidBegan();

            this._showDom();

            this._edTxt.focus();
          }
        }, {
          key: "endEditing",
          value: function endEditing() {
            this._edTxt.blur();
          }
        }, {
          key: "_createInput",
          value: function _createInput() {
            this._isTextArea = false;
            this._edTxt = document.createElement('input');
          }
        }, {
          key: "_createTextArea",
          value: function _createTextArea() {
            this._isTextArea = true;
            this._edTxt = document.createElement('textarea');
          }
        }, {
          key: "_addDomToGameContainer",
          value: function _addDomToGameContainer() {
            if (game.container && this._edTxt) {
              game.container.appendChild(this._edTxt);
              document.head.appendChild(this._placeholderStyleSheet);
            }
          }
        }, {
          key: "_removeDomFromGameContainer",
          value: function _removeDomFromGameContainer() {
            var hasElem = contains(game.container, this._edTxt);

            if (hasElem && this._edTxt) {
              game.container.removeChild(this._edTxt);
            }

            var hasStyleSheet = contains(document.head, this._placeholderStyleSheet);

            if (hasStyleSheet) {
              document.head.removeChild(this._placeholderStyleSheet);
            }

            this._edTxt = null;
            this._placeholderStyleSheet = null;
          }
        }, {
          key: "_showDom",
          value: function _showDom() {
            this._updateMaxLength();

            this._updateInputType();

            this._updateStyleSheet();

            if (this._edTxt && this._delegate) {
              this._edTxt.style.display = '';

              this._delegate._hideLabels();
            }

            if (sys.isMobile) {
              this._showDomOnMobile();
            }
          }
        }, {
          key: "_hideDom",
          value: function _hideDom() {
            var elem = this._edTxt;

            if (elem && this._delegate) {
              elem.style.display = 'none';

              this._delegate._showLabels();
            }

            if (sys.isMobile) {
              this._hideDomOnMobile();
            }
          }
        }, {
          key: "_showDomOnMobile",
          value: function _showDomOnMobile() {
            if (sys.os !== sys.OS_ANDROID) {
              return;
            }

            if (this.__fullscreen) {
              view.enableAutoFullScreen(false);
              screen.exitFullScreen();
            }

            if (this.__autoResize) {
              view.resizeWithBrowserSize(false);
            }

            this._adjustWindowScroll();
          }
        }, {
          key: "_hideDomOnMobile",
          value: function _hideDomOnMobile() {
            var _this2 = this;

            if (sys.os === sys.OS_ANDROID) {
              if (this.__autoResize) {
                view.resizeWithBrowserSize(true);
              } // In case enter full screen when soft keyboard still showing


              setTimeout(function () {
                if (!_currentEditBoxImpl) {
                  if (_this2.__fullscreen) {
                    view.enableAutoFullScreen(true);
                  }
                }
              }, DELAY_TIME);
            }

            this._scrollBackWindow();
          }
        }, {
          key: "_adjustWindowScroll",
          value: function _adjustWindowScroll() {
            var self = this;
            setTimeout(function () {
              if (window.scrollY < SCROLLY) {
                self._edTxt.scrollIntoView({
                  block: 'start',
                  inline: 'nearest',
                  behavior: 'smooth'
                });
              }
            }, DELAY_TIME);
          }
        }, {
          key: "_scrollBackWindow",
          value: function _scrollBackWindow() {
            setTimeout(function () {
              if (sys.browserType === sys.BROWSER_TYPE_WECHAT && sys.os === sys.OS_IOS) {
                if (window.top) {
                  window.top.scrollTo(0, 0);
                }

                return;
              }

              window.scrollTo(0, 0);
            }, DELAY_TIME);
          }
        }, {
          key: "_updateMatrix",
          value: function _updateMatrix() {
            if (!this._edTxt) {
              return;
            }

            var node = this._delegate.node;
            var scaleX = view.getScaleX();
            var scaleY = view.getScaleY();
            var viewport = view.getViewportRect();
            var dpr = view.getDevicePixelRatio();
            node.getWorldMatrix(_matrix);
            var transform = node._uiProps.uiTransformComp;

            if (transform) {
              Vec3.set(_vec3, -transform.anchorX * transform.width, -transform.anchorY * transform.height, _vec3.z);
            }

            Mat4.transform(_matrix, _matrix, _vec3);

            if (!node._uiProps.uiTransformComp) {
              return false;
            }

            var canvas = director.root.ui.getScreen(node._uiProps.uiTransformComp.visibility);

            if (!canvas) {
              return;
            } // camera.getWorldToCameraMatrix(_matrix_temp);


            canvas.node.getWorldRT(_matrix_temp);
            var m12 = _matrix_temp.m12;
            var m13 = _matrix_temp.m13;
            var center = visibleRect.center;
            _matrix_temp.m12 = center.x - (_matrix_temp.m00 * m12 + _matrix_temp.m04 * m13);
            _matrix_temp.m13 = center.y - (_matrix_temp.m01 * m12 + _matrix_temp.m05 * m13);
            Mat4.multiply(_matrix_temp, _matrix_temp, _matrix);
            scaleX /= dpr;
            scaleY /= dpr;
            var container = game.container;
            var a = _matrix_temp.m00 * scaleX;
            var b = _matrix.m01;
            var c = _matrix.m04;
            var d = _matrix_temp.m05 * scaleY;
            var offsetX = parseInt(container && container.style.paddingLeft || '0');
            offsetX += viewport.x / dpr;
            var offsetY = parseInt(container && container.style.paddingBottom || '0');
            offsetY += viewport.y / dpr;
            var tx = _matrix_temp.m12 * scaleX + offsetX;
            var ty = _matrix_temp.m13 * scaleY + offsetY;
            var matrix = 'matrix(' + a + ',' + -b + ',' + -c + ',' + d + ',' + tx + ',' + -ty + ')';
            this._edTxt.style.transform = matrix;
            this._edTxt.style['-webkit-transform'] = matrix;
            this._edTxt.style['transform-origin'] = '0px 100% 0px';
            this._edTxt.style['-webkit-transform-origin'] = '0px 100% 0px';
          }
        }, {
          key: "_updateInputType",
          value: function _updateInputType() {
            var delegate = this._delegate;
            var inputMode = delegate.inputMode;
            var inputFlag = delegate.inputFlag;
            var returnType = delegate.returnType;
            var elem = this._edTxt;

            if (this._inputMode === inputMode && this._inputFlag === inputFlag && this._returnType === returnType) {
              return;
            } // update cache


            this._inputMode = inputMode;
            this._inputFlag = inputFlag;
            this._returnType = returnType; // FIX ME: TextArea actually dose not support password type.

            if (this._isTextArea) {
              // input flag
              var transform = 'none';

              if (inputFlag === InputFlag.INITIAL_CAPS_ALL_CHARACTERS) {
                transform = 'uppercase';
              } else if (inputFlag === InputFlag.INITIAL_CAPS_WORD) {
                transform = 'capitalize';
              }

              elem.style.textTransform = transform;
              return;
            }

            elem = elem; // begin to updateInputType

            if (inputFlag === InputFlag.PASSWORD) {
              elem.type = 'password';
              return;
            } // input mode


            var type = elem.type;

            if (inputMode === InputMode.EMAIL_ADDR) {
              type = 'email';
            } else if (inputMode === InputMode.NUMERIC || inputMode === InputMode.DECIMAL) {
              type = 'number';
            } else if (inputMode === InputMode.PHONE_NUMBER) {
              type = 'number';
              elem.pattern = '[0-9]*';
            } else if (inputMode === InputMode.URL) {
              type = 'url';
            } else {
              type = 'text';

              if (returnType === KeyboardReturnType.SEARCH) {
                type = 'search';
              }
            }

            elem.type = type; // input flag

            var textTransform = 'none';

            if (inputFlag === InputFlag.INITIAL_CAPS_ALL_CHARACTERS) {
              textTransform = 'uppercase';
            } else if (inputFlag === InputFlag.INITIAL_CAPS_WORD) {
              textTransform = 'capitalize';
            }

            elem.style.textTransform = textTransform;
          }
        }, {
          key: "_updateMaxLength",
          value: function _updateMaxLength() {
            var maxLength = this._delegate.maxLength;

            if (maxLength < 0) {
              maxLength = 65535;
            }

            this._edTxt.maxLength = maxLength;
          }
        }, {
          key: "_initStyleSheet",
          value: function _initStyleSheet() {
            if (!this._edTxt) {
              return;
            }

            var elem = this._edTxt;
            elem.style.color = '#000000';
            elem.style.border = '0px';
            elem.style.background = 'transparent';
            elem.style.width = '100%';
            elem.style.height = '100%';
            elem.style.outline = 'medium';
            elem.style.padding = '0';
            elem.style.textTransform = 'uppercase';
            elem.style.display = 'none';
            elem.style.position = 'absolute';
            elem.style.bottom = '0px';
            elem.style.left = LEFT_PADDING + 'px';
            elem.className = 'cocosEditBox';
            elem.style.fontFamily = 'Arial';
            elem.id = this._domId;

            if (!this._isTextArea) {
              elem = elem;
              elem.type = 'text';
              elem.style['-moz-appearance'] = 'textfield';
            } else {
              elem.style.resize = 'none';
              elem.style.overflowY = 'scroll';
            }

            this._placeholderStyleSheet = document.createElement('style');
          }
        }, {
          key: "_updateStyleSheet",
          value: function _updateStyleSheet() {
            var delegate = this._delegate;
            var elem = this._edTxt;

            if (elem && delegate) {
              elem.value = delegate.string;
              elem.placeholder = delegate.placeholder;

              this._updateTextLabel(delegate.textLabel);

              this._updatePlaceholderLabel(delegate.placeholderLabel);
            }
          }
        }, {
          key: "_updateTextLabel",
          value: function _updateTextLabel(textLabel) {
            if (!textLabel) {
              return;
            }

            var font = textLabel.font;

            if (font && !(font instanceof BitmapFont)) {
              font = font._fontFamily;
            } else {
              font = textLabel.fontFamily;
            }

            var fontSize = textLabel.fontSize * textLabel.node.scale.y;

            if (this._textLabelFont === font && this._textLabelFontSize === fontSize && this._textLabelFontColor === textLabel.fontColor && this._textLabelAlign === textLabel.horizontalAlign) {
              return;
            }

            this._textLabelFont = font;
            this._textLabelFontSize = fontSize;
            this._textLabelFontColor = textLabel.fontColor;
            this._textLabelAlign = textLabel.horizontalAlign;

            if (!this._edTxt) {
              return;
            }

            var elem = this._edTxt;
            elem.style.fontSize = "".concat(fontSize, "px");
            elem.style.color = textLabel.color.toCSS('rgba');
            elem.style.fontFamily = font;

            switch (textLabel.horizontalAlign) {
              case Label.HorizontalAlign.LEFT:
                elem.style.textAlign = 'left';
                break;

              case Label.HorizontalAlign.CENTER:
                elem.style.textAlign = 'center';
                break;

              case Label.HorizontalAlign.RIGHT:
                elem.style.textAlign = 'right';
                break;
            }
          }
        }, {
          key: "_updatePlaceholderLabel",
          value: function _updatePlaceholderLabel(placeholderLabel) {
            if (!placeholderLabel) {
              return;
            }

            var font = placeholderLabel.font;

            if (font && !(font instanceof BitmapFont)) {
              font = placeholderLabel.font._fontFamily;
            } else {
              font = placeholderLabel.fontFamily;
            }

            var fontSize = placeholderLabel.fontSize * placeholderLabel.node.scale.y;

            if (this._placeholderLabelFont === font && this._placeholderLabelFontSize === fontSize && this._placeholderLabelFontColor === placeholderLabel.fontColor && this._placeholderLabelAlign === placeholderLabel.horizontalAlign && this._placeholderLineHeight === placeholderLabel.fontSize) {
              return;
            }

            this._placeholderLabelFont = font;
            this._placeholderLabelFontSize = fontSize;
            this._placeholderLabelFontColor = placeholderLabel.fontColor;
            this._placeholderLabelAlign = placeholderLabel.horizontalAlign;
            this._placeholderLineHeight = placeholderLabel.fontSize;
            var styleEl = this._placeholderStyleSheet;
            var fontColor = placeholderLabel.color.toCSS('rgba');
            var lineHeight = placeholderLabel.fontSize;
            var horizontalAlign = '';

            switch (placeholderLabel.horizontalAlign) {
              case Label.HorizontalAlign.LEFT:
                horizontalAlign = 'left';
                break;

              case Label.HorizontalAlign.CENTER:
                horizontalAlign = 'center';
                break;

              case Label.HorizontalAlign.RIGHT:
                horizontalAlign = 'right';
                break;
            }

            styleEl.innerHTML = "#".concat(this._domId, "::-webkit-input-placeholder{text-transform: initial;-family: ").concat(font, ";font-size: ").concat(fontSize, "px;color: ").concat(fontColor, ";line-height: ").concat(lineHeight, "px;text-align: ").concat(horizontalAlign, ";}") + "#".concat(this._domId, "::-moz-placeholder{text-transform: initial;-family: ").concat(font, ";font-size: ").concat(fontSize, "px;color: ").concat(fontColor, ";line-height: ").concat(lineHeight, "px;text-align: ").concat(horizontalAlign, ";}") + "#".concat(this._domId, "::-ms-input-placeholder{text-transform: initial;-family: ").concat(font, ";font-size: ").concat(fontSize, "px;color: ").concat(fontColor, ";line-height: ").concat(lineHeight, "px;text-align: ").concat(horizontalAlign, ";}"); // EDGE_BUG_FIX: hide clear button, because clearing input box in Edge does not emit input event
            // issue refference: https://github.com/angular/angular/issues/26307

            if (legacyCC.sys.browserType === legacyCC.sys.BROWSER_TYPE_EDGE) {
              styleEl.innerHTML += "#".concat(this._domId, "::-ms-clear{display: none;}");
            }
          }
        }, {
          key: "_registerEventListeners",
          value: function _registerEventListeners() {
            if (!this._edTxt) {
              return;
            }

            var impl = this;
            var elem = this._edTxt;
            var inputLock = false;
            var cbs = this.__eventListeners;

            cbs.compositionStart = function () {
              inputLock = true;
            };

            cbs.compositionEnd = function () {
              inputLock = false;

              impl._delegate._editBoxTextChanged(elem.value);
            };

            cbs.onInput = function () {
              if (inputLock) {
                return;
              }

              var delegate = impl._delegate; // input of number type doesn't support maxLength attribute

              var maxLength = delegate.maxLength;

              if (maxLength >= 0) {
                elem.value = elem.value.slice(0, maxLength);
              }

              delegate._editBoxTextChanged(elem.value);
            };

            cbs.onClick = function () {
              if (impl._editing) {
                if (sys.isMobile) {
                  impl._adjustWindowScroll();
                }
              }
            };

            cbs.onKeydown = function (e) {
              if (e.keyCode === macro.KEY.enter) {
                e.propagationStopped = true;

                impl._delegate._editBoxEditingReturn();

                if (!impl._isTextArea) {
                  elem.blur();
                }
              } else if (e.keyCode === macro.KEY.tab) {
                e.propagationStopped = true;
                e.preventDefault();
                tabIndexUtil.next(impl);
              }
            };

            cbs.onBlur = function () {
              // on mobile, sometimes input element doesn't fire compositionend event
              if (sys.isMobile && inputLock) {
                cbs.compositionEnd();
              }

              impl._editing = false;
              _currentEditBoxImpl = null;

              impl._hideDom();

              impl._delegate._editBoxEditingDidEnded();
            };

            elem.addEventListener('compositionstart', cbs.compositionStart);
            elem.addEventListener('compositionend', cbs.compositionEnd);
            elem.addEventListener('input', cbs.onInput);
            elem.addEventListener('keydown', cbs.onKeydown);
            elem.addEventListener('blur', cbs.onBlur);
            elem.addEventListener('touchstart', cbs.onClick);
          }
        }, {
          key: "_removeEventListeners",
          value: function _removeEventListeners() {
            if (!this._edTxt) {
              return;
            }

            var elem = this._edTxt;
            var cbs = this.__eventListeners;
            elem.removeEventListener('compositionstart', cbs.compositionStart);
            elem.removeEventListener('compositionend', cbs.compositionEnd);
            elem.removeEventListener('input', cbs.onInput);
            elem.removeEventListener('keydown', cbs.onKeydown);
            elem.removeEventListener('blur', cbs.onBlur);
            elem.removeEventListener('touchstart', cbs.onClick);
            cbs.compositionStart = null;
            cbs.compositionEnd = null;
            cbs.onInput = null;
            cbs.onKeydown = null;
            cbs.onBlur = null;
            cbs.onClick = null;
          }
        }]);

        return EditBoxImpl;
      }(EditBoxImplBase);

      var _dec$4, _dec2$4, _dec3$4, _dec4$3, _dec5$3, _dec6$3, _dec7$3, _dec8$3, _dec9$3, _dec10$3, _dec11$3, _dec12$3, _dec13$3, _dec14$3, _dec15$3, _dec16$2, _dec17$2, _dec18$2, _dec19$2, _dec20$2, _dec21$2, _dec22$2, _dec23$2, _dec24$2, _dec25$2, _dec26$2, _dec27$2, _dec28$2, _dec29$2, _dec30$2, _dec31$2, _dec32$2, _dec33$1, _dec34$1, _dec35$1, _dec36$1, _dec37$1, _dec38$1, _dec39$1, _dec40$1, _dec41, _dec42, _dec43, _class$4, _class2$3, _descriptor$3, _descriptor2$3, _descriptor3$3, _descriptor4$3, _descriptor5$3, _descriptor6$2, _descriptor7$2, _descriptor8$2, _descriptor9$2, _descriptor10$2, _descriptor11$2, _descriptor12$2, _descriptor13$2, _descriptor14$2, _class3$2, _temp$4;
      var LEFT_PADDING$1 = 2;

      function capitalize(str) {
        return str.replace(/(?:^|\s)\S/g, function (a) {
          return a.toUpperCase();
        });
      }

      function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

      var EventType$1;
      /**
       * @en
       * `EditBox` is a component for inputing text, you can use it to gather small amounts of text from users.
       *
       * @zh
       * `EditBox` 组件，用于获取用户的输入文本。
       */

      (function (EventType) {
        EventType["EDITING_DID_BEGAN"] = "editing-did-began";
        EventType["EDITING_DID_ENDED"] = "editing-did-ended";
        EventType["TEXT_CHANGED"] = "text-changed";
        EventType["EDITING_RETURN"] = "editing-return";
      })(EventType$1 || (EventType$1 = {}));

      var EditBox = function (v) { return exports({ EditBox: v, EditBoxComponent: v }), v; }((_dec$4 = ccclass('cc.EditBox'), _dec2$4 = help(), _dec3$4 = executionOrder(100), _dec4$3 = menu(), _dec5$3 = requireComponent(UITransform), _dec6$3 = displayOrder(), _dec7$3 = tooltip(), _dec8$3 = displayOrder(), _dec9$3 = tooltip(), _dec10$3 = type(Label), _dec11$3 = displayOrder(), _dec12$3 = tooltip(), _dec13$3 = type(Label), _dec14$3 = displayOrder(), _dec15$3 = tooltip(), _dec16$2 = type(SpriteFrame), _dec17$2 = displayOrder(), _dec18$2 = tooltip(), _dec19$2 = type(InputFlag), _dec20$2 = displayOrder(), _dec21$2 = tooltip(), _dec22$2 = type(InputMode), _dec23$2 = displayOrder(), _dec24$2 = tooltip(), _dec25$2 = type(KeyboardReturnType), _dec26$2 = displayOrder(), _dec27$2 = tooltip(), _dec28$2 = displayOrder(), _dec29$2 = tooltip(), _dec30$2 = displayOrder(), _dec31$2 = tooltip(), _dec32$2 = type([EventHandler]), _dec33$1 = displayOrder(), _dec34$1 = tooltip(), _dec35$1 = type([EventHandler]), _dec36$1 = displayOrder(), _dec37$1 = tooltip(), _dec38$1 = type([EventHandler]), _dec39$1 = displayOrder(), _dec40$1 = tooltip(), _dec41 = type([EventHandler]), _dec42 = displayOrder(), _dec43 = tooltip(), _dec$4(_class$4 = _dec2$4(_class$4 = _dec3$4(_class$4 = _dec4$3(_class$4 = _dec5$3(_class$4 = executeInEditMode(_class$4 = (_class2$3 = (_temp$4 = _class3$2 = /*#__PURE__*/function (_Component) {
        _inherits(EditBox, _Component);

        function EditBox() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, EditBox);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EditBox)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "editingDidBegan", _descriptor$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "textChanged", _descriptor2$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "editingDidEnded", _descriptor3$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "editingReturn", _descriptor4$3, _assertThisInitialized(_this));

          _this._impl = null;
          _this._background = null;

          _initializerDefineProperty(_this, "_textLabel", _descriptor5$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_placeholderLabel", _descriptor6$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_returnType", _descriptor7$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_useOriginalSize", _descriptor8$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_string", _descriptor9$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_tabIndex", _descriptor10$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_backgroundImage", _descriptor11$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_inputFlag", _descriptor12$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_inputMode", _descriptor13$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_maxLength", _descriptor14$2, _assertThisInitialized(_this));

          _this._isLabelVisible = false;
          return _this;
        }

        _createClass(EditBox, [{
          key: "__preload",
          value: function __preload() {
            this._init();
          }
        }, {
          key: "onEnable",
          value: function onEnable() {
            {
              this._registerEvent();
            }

            if (this._impl) {
              this._impl.onEnable();
            }
          }
        }, {
          key: "update",
          value: function update() {
            if (this._impl) {
              this._impl.update();
            }
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            {
              this._unregisterEvent();
            }

            if (this._impl) {
              this._impl.onDisable();
            }
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            if (this._impl) {
              this._impl.clear();
            }
          }
          /**
           * @en Let the EditBox get focus
           * @zh 让当前 EditBox 获得焦点。
           */

        }, {
          key: "setFocus",
          value: function setFocus() {
            if (this._impl) {
              this._impl.setFocus(true);
            }
          }
          /**
           * @en Let the EditBox get focus
           * @zh 让当前 EditBox 获得焦点
           */

        }, {
          key: "focus",
          value: function focus() {
            if (this._impl) {
              this._impl.setFocus(true);
            }
          }
          /**
           * @en Let the EditBox lose focus
           * @zh 让当前 EditBox 失去焦点
           */

        }, {
          key: "blur",
          value: function blur() {
            if (this._impl) {
              this._impl.setFocus(false);
            }
          }
          /**
           * @en Determine whether EditBox is getting focus or not.
           * @zh 判断 EditBox 是否获得了焦点。
           * Note: only available on Web at the moment.
           */

        }, {
          key: "isFocused",
          value: function isFocused() {
            if (this._impl) {
              return this._impl.isFocused();
            }

            return false;
          }
        }, {
          key: "_editBoxEditingDidBegan",
          value: function _editBoxEditingDidBegan() {
            EventHandler.emitEvents(this.editingDidBegan, this);
            this.node.emit(EventType$1.EDITING_DID_BEGAN, this);
          }
        }, {
          key: "_editBoxEditingDidEnded",
          value: function _editBoxEditingDidEnded() {
            EventHandler.emitEvents(this.editingDidEnded, this);
            this.node.emit(EventType$1.EDITING_DID_ENDED, this);
          }
        }, {
          key: "_editBoxTextChanged",
          value: function _editBoxTextChanged(text) {
            text = this._updateLabelStringStyle(text, true);
            this.string = text;
            EventHandler.emitEvents(this.textChanged, text, this);
            this.node.emit(EventType$1.TEXT_CHANGED, this);
          }
        }, {
          key: "_editBoxEditingReturn",
          value: function _editBoxEditingReturn() {
            EventHandler.emitEvents(this.editingReturn, this);
            this.node.emit(EventType$1.EDITING_RETURN, this);
          }
        }, {
          key: "_showLabels",
          value: function _showLabels() {
            this._isLabelVisible = true;

            this._updateLabels();
          }
        }, {
          key: "_hideLabels",
          value: function _hideLabels() {
            this._isLabelVisible = false;

            if (this._textLabel) {
              this._textLabel.node.active = false;
            }

            if (this._placeholderLabel) {
              this._placeholderLabel.node.active = false;
            }
          }
        }, {
          key: "_onTouchBegan",
          value: function _onTouchBegan(event) {
            event.propagationStopped = true;
          }
        }, {
          key: "_onTouchCancel",
          value: function _onTouchCancel(event) {
            event.propagationStopped = true;
          }
        }, {
          key: "_onTouchEnded",
          value: function _onTouchEnded(event) {
            if (this._impl) {
              this._impl.beginEditing();
            }

            event.propagationStopped = true;
          }
        }, {
          key: "_init",
          value: function _init() {
            this._createBackgroundSprite();

            this._updatePlaceholderLabel();

            this._updateTextLabel();

            this._isLabelVisible = true;
            this.node.on(SystemEventType.SIZE_CHANGED, this._resizeChildNodes, this);
            var impl = this._impl = new EditBox._EditBoxImpl();
            impl.init(this);

            this._updateString(this._string);

            this._syncSize();
          }
        }, {
          key: "_createBackgroundSprite",
          value: function _createBackgroundSprite() {
            if (!this._background) {
              this._background = this.node.getComponent(Sprite);

              if (!this._background) {
                this._background = this.node.addComponent(Sprite);
              }
            }

            this._background.type = Sprite.Type.SLICED;
            this._background.spriteFrame = this._backgroundImage;
          }
        }, {
          key: "_updateTextLabel",
          value: function _updateTextLabel() {
            var textLabel = this._textLabel; // If textLabel doesn't exist, create one.

            if (!textLabel) {
              var node = this.node.getChildByName('TEXT_LABEL');

              if (!node) {
                node = new Node('TEXT_LABEL');
              }

              textLabel = node.getComponent(Label);

              if (!textLabel) {
                textLabel = node.addComponent(Label);
              }

              node.parent = this.node;
              this._textLabel = textLabel;
            } // update


            var transformComp = this._textLabel.node._uiProps.uiTransformComp;
            transformComp.setAnchorPoint(0, 1);
            textLabel.overflow = Label.Overflow.CLAMP;

            if (this._inputMode === InputMode.ANY) {
              textLabel.verticalAlign = VerticalTextAlignment.TOP;
              textLabel.enableWrapText = true;
            } else {
              textLabel.verticalAlign = VerticalTextAlignment.CENTER;
              textLabel.enableWrapText = false;
            }

            textLabel.string = this._updateLabelStringStyle(this._string);
          }
        }, {
          key: "_updatePlaceholderLabel",
          value: function _updatePlaceholderLabel() {
            var placeholderLabel = this._placeholderLabel; // If placeholderLabel doesn't exist, create one.

            if (!placeholderLabel) {
              var node = this.node.getChildByName('PLACEHOLDER_LABEL');

              if (!node) {
                node = new Node('PLACEHOLDER_LABEL');
              }

              placeholderLabel = node.getComponent(Label);

              if (!placeholderLabel) {
                placeholderLabel = node.addComponent(Label);
              }

              node.parent = this.node;
              this._placeholderLabel = placeholderLabel;
            } // update


            var transform = this._placeholderLabel.node._uiProps.uiTransformComp;
            transform.setAnchorPoint(0, 1);
            placeholderLabel.overflow = Label.Overflow.CLAMP;

            if (this._inputMode === InputMode.ANY) {
              placeholderLabel.verticalAlign = VerticalTextAlignment.TOP;
              placeholderLabel.enableWrapText = true;
            } else {
              placeholderLabel.verticalAlign = VerticalTextAlignment.CENTER;
              placeholderLabel.enableWrapText = false;
            }

            placeholderLabel.string = this.placeholder;
          }
        }, {
          key: "_syncSize",
          value: function _syncSize() {
            var trans = this.node._uiProps.uiTransformComp;
            var size = trans.contentSize;

            if (this._background) {
              var bgTrans = this._background.node._uiProps.uiTransformComp;
              bgTrans.anchorPoint = trans.anchorPoint;
              bgTrans.setContentSize(size);
            }

            this._updateLabelPosition(size);

            if (this._impl) {
              this._impl.setSize(size.width, size.height);
            }
          }
        }, {
          key: "_updateLabels",
          value: function _updateLabels() {
            if (this._isLabelVisible) {
              var content = this._string;

              if (this._textLabel) {
                this._textLabel.node.active = content !== '';
              }

              if (this._placeholderLabel) {
                this._placeholderLabel.node.active = content === '';
              }
            }
          }
        }, {
          key: "_updateString",
          value: function _updateString(text) {
            var textLabel = this._textLabel; // Not inited yet

            if (!textLabel) {
              return;
            }

            var displayText = text;

            if (displayText) {
              displayText = this._updateLabelStringStyle(displayText);
            }

            textLabel.string = displayText;

            this._updateLabels();
          }
        }, {
          key: "_updateLabelStringStyle",
          value: function _updateLabelStringStyle(text) {
            var ignorePassword = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var inputFlag = this._inputFlag;

            if (!ignorePassword && inputFlag === InputFlag.PASSWORD) {
              var passwordString = '';
              var len = text.length;

              for (var i = 0; i < len; ++i) {
                passwordString += "\u25CF";
              }

              text = passwordString;
            } else if (inputFlag === InputFlag.INITIAL_CAPS_ALL_CHARACTERS) {
              text = text.toUpperCase();
            } else if (inputFlag === InputFlag.INITIAL_CAPS_WORD) {
              text = capitalize(text);
            } else if (inputFlag === InputFlag.INITIAL_CAPS_SENTENCE) {
              text = capitalizeFirstLetter(text);
            }

            return text;
          }
        }, {
          key: "_registerEvent",
          value: function _registerEvent() {
            this.node.on(SystemEventType.TOUCH_START, this._onTouchBegan, this);
            this.node.on(SystemEventType.TOUCH_END, this._onTouchEnded, this);
          }
        }, {
          key: "_unregisterEvent",
          value: function _unregisterEvent() {
            this.node.off(SystemEventType.TOUCH_START, this._onTouchBegan, this);
            this.node.off(SystemEventType.TOUCH_END, this._onTouchEnded, this);
          }
        }, {
          key: "_updateLabelPosition",
          value: function _updateLabelPosition(size) {
            var trans = this.node._uiProps.uiTransformComp;
            var offX = -trans.anchorX * trans.width;
            var offY = -trans.anchorY * trans.height;
            var placeholderLabel = this._placeholderLabel;
            var textLabel = this._textLabel;

            if (textLabel) {
              textLabel.node._uiProps.uiTransformComp.setContentSize(size.width - LEFT_PADDING$1, size.height);

              textLabel.node.position = new Vec3(offX + LEFT_PADDING$1, offY + size.height, textLabel.node.position.z);
              textLabel.verticalAlign = this._inputMode === InputMode.ANY ? VerticalTextAlignment.TOP : VerticalTextAlignment.CENTER;
              textLabel.enableWrapText = this._inputMode === InputMode.ANY ? true : false;
            }

            if (placeholderLabel) {
              placeholderLabel.node._uiProps.uiTransformComp.setContentSize(size.width - LEFT_PADDING$1, size.height);

              placeholderLabel.lineHeight = size.height;
              placeholderLabel.node.position = new Vec3(offX + LEFT_PADDING$1, offY + size.height, placeholderLabel.node.position.z);
              placeholderLabel.verticalAlign = this._inputMode === InputMode.ANY ? VerticalTextAlignment.TOP : VerticalTextAlignment.CENTER;
              placeholderLabel.enableWrapText = this._inputMode === InputMode.ANY ? true : false;
            }
          }
        }, {
          key: "_resizeChildNodes",
          value: function _resizeChildNodes() {
            var trans = this.node._uiProps.uiTransformComp;
            var textLabelNode = this._textLabel && this._textLabel.node;

            if (textLabelNode) {
              textLabelNode.position = new Vec3(-trans.width / 2, trans.height / 2, textLabelNode.position.z);

              textLabelNode._uiProps.uiTransformComp.setContentSize(trans.contentSize);
            }

            var placeholderLabelNode = this._placeholderLabel && this._placeholderLabel.node;

            if (placeholderLabelNode) {
              placeholderLabelNode.position = new Vec3(-trans.width / 2, trans.height / 2, placeholderLabelNode.position.z);

              placeholderLabelNode._uiProps.uiTransformComp.setContentSize(trans.contentSize);
            }

            var backgroundNode = this._background && this._background.node;

            if (backgroundNode) {
              backgroundNode._uiProps.uiTransformComp.setContentSize(trans.contentSize);
            }
          }
        }, {
          key: "string",

          /**
           * @en
           * Input string of EditBox.
           *
           * @zh
           * 输入框的初始输入内容，如果为空则会显示占位符的文本。
           */
          get: function get() {
            return this._string;
          },
          set: function set(value) {
            if (this._maxLength >= 0 && value.length >= this._maxLength) {
              value = value.slice(0, this._maxLength);
            }

            this._string = value;

            this._updateString(value);
          }
          /**
           * @en
           * The display text of placeholder.
           *
           * @zh
           * 输入框占位符的文本内容。
           */

        }, {
          key: "placeholder",
          get: function get() {
            if (!this._placeholderLabel) {
              return '';
            }

            return this._placeholderLabel.string;
          },
          set: function set(value) {
            if (this._placeholderLabel) {
              this._placeholderLabel.string = value;
            }
          }
          /**
           * @en
           * The Label component attached to the node for EditBox's input text label
           *
           * @zh
           * 输入框输入文本节点上挂载的 Label 组件对象
           */

        }, {
          key: "textLabel",
          get: function get() {
            return this._textLabel;
          },
          set: function set(oldValue) {
            if (this._textLabel !== oldValue) {
              this._textLabel = oldValue;

              if (this._textLabel) {
                this._updateTextLabel();

                this._updateLabels();
              }
            }
          }
          /**
           * @en
           * The Label component attached to the node for EditBox's placeholder text label.
           *
           * @zh
           * 输入框占位符节点上挂载的 Label 组件对象。
           */

        }, {
          key: "placeholderLabel",
          get: function get() {
            return this._placeholderLabel;
          },
          set: function set(oldValue) {
            if (this._placeholderLabel !== oldValue) {
              this._placeholderLabel = oldValue;

              if (this._placeholderLabel) {
                this._updatePlaceholderLabel();

                this._updateLabels();
              }
            }
          }
          /**
           * @en
           * The background image of EditBox.
           *
           * @zh
           * 输入框的背景图片。
           */

        }, {
          key: "backgroundImage",
          get: function get() {
            return this._backgroundImage;
          },
          set: function set(value) {
            if (this._backgroundImage === value) {
              return;
            }

            this._backgroundImage = value;

            this._createBackgroundSprite();
          }
          /**
           * @en
           * Set the input flags that are to be applied to the EditBox.
           *
           * @zh
           * 指定输入标志位，可以指定输入方式为密码或者单词首字母大写。
           */

        }, {
          key: "inputFlag",
          get: function get() {
            return this._inputFlag;
          },
          set: function set(value) {
            this._inputFlag = value;

            this._updateString(this._string);
          }
          /**
           * @en
           * Set the input mode of the edit box.
           * If you pass ANY, it will create a multiline EditBox.
           *
           * @zh
           * 指定输入模式: ANY表示多行输入，其它都是单行输入，移动平台上还可以指定键盘样式。
           */

        }, {
          key: "inputMode",
          get: function get() {
            return this._inputMode;
          },
          set: function set(oldValue) {
            if (this._inputMode !== oldValue) {
              this._inputMode = oldValue;

              this._updateTextLabel();

              this._updatePlaceholderLabel();
            }
          }
          /**
           * @en
           * The return key type of EditBox.
           * Note: it is meaningless for web platforms and desktop platforms.
           *
           * @zh
           * 指定移动设备上面回车按钮的样式。
           * 注意：这个选项对 web 平台与 desktop 平台无效。
           */

        }, {
          key: "returnType",
          get: function get() {
            return this._returnType;
          },
          set: function set(value) {
            this._returnType = value;
          }
          /**
           * @en
           * The maximize input length of EditBox.
           * - If pass a value less than 0, it won't limit the input number of characters.
           * - If pass 0, it doesn't allow input any characters.
           *
           * @zh
           * 输入框最大允许输入的字符个数。
           * - 如果值为小于 0 的值，则不会限制输入字符个数。
           * - 如果值为 0，则不允许用户进行任何输入。
           */

        }, {
          key: "maxLength",
          get: function get() {
            return this._maxLength;
          },
          set: function set(value) {
            this._maxLength = value;
          }
          /**
           * @en
           * Set the tabIndex of the DOM input element (only useful on Web).
           *
           * @zh
           * 修改 DOM 输入元素的 tabIndex（这个属性只有在 Web 上面修改有意义）。
           */

        }, {
          key: "tabIndex",
          get: function get() {
            return this._tabIndex;
          },
          set: function set(value) {
            if (this._tabIndex !== value) {
              this._tabIndex = value;

              if (this._impl) {
                this._impl.setTabIndex(value);
              }
            }
          }
        }]);

        return EditBox;
      }(Component), _class3$2._EditBoxImpl = EditBoxImplBase, _class3$2.KeyboardReturnType = KeyboardReturnType, _class3$2.InputFlag = InputFlag, _class3$2.InputMode = InputMode, _class3$2.EventType = EventType$1, _temp$4), (_applyDecoratedDescriptor(_class2$3.prototype, "string", [_dec6$3, _dec7$3], Object.getOwnPropertyDescriptor(_class2$3.prototype, "string"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "placeholder", [_dec8$3, _dec9$3], Object.getOwnPropertyDescriptor(_class2$3.prototype, "placeholder"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "textLabel", [_dec10$3, _dec11$3, _dec12$3], Object.getOwnPropertyDescriptor(_class2$3.prototype, "textLabel"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "placeholderLabel", [_dec13$3, _dec14$3, _dec15$3], Object.getOwnPropertyDescriptor(_class2$3.prototype, "placeholderLabel"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "backgroundImage", [_dec16$2, _dec17$2, _dec18$2], Object.getOwnPropertyDescriptor(_class2$3.prototype, "backgroundImage"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "inputFlag", [_dec19$2, _dec20$2, _dec21$2], Object.getOwnPropertyDescriptor(_class2$3.prototype, "inputFlag"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "inputMode", [_dec22$2, _dec23$2, _dec24$2], Object.getOwnPropertyDescriptor(_class2$3.prototype, "inputMode"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "returnType", [_dec25$2, _dec26$2, _dec27$2], Object.getOwnPropertyDescriptor(_class2$3.prototype, "returnType"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "maxLength", [_dec28$2, _dec29$2], Object.getOwnPropertyDescriptor(_class2$3.prototype, "maxLength"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "tabIndex", [_dec30$2, _dec31$2], Object.getOwnPropertyDescriptor(_class2$3.prototype, "tabIndex"), _class2$3.prototype), _descriptor$3 = _applyDecoratedDescriptor(_class2$3.prototype, "editingDidBegan", [_dec32$2, serializable, _dec33$1, _dec34$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2$3 = _applyDecoratedDescriptor(_class2$3.prototype, "textChanged", [_dec35$1, serializable, _dec36$1, _dec37$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3$3 = _applyDecoratedDescriptor(_class2$3.prototype, "editingDidEnded", [_dec38$1, serializable, _dec39$1, _dec40$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4$3 = _applyDecoratedDescriptor(_class2$3.prototype, "editingReturn", [_dec41, serializable, _dec42, _dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5$3 = _applyDecoratedDescriptor(_class2$3.prototype, "_textLabel", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6$2 = _applyDecoratedDescriptor(_class2$3.prototype, "_placeholderLabel", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7$2 = _applyDecoratedDescriptor(_class2$3.prototype, "_returnType", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return KeyboardReturnType.DEFAULT;
        }
      }), _descriptor8$2 = _applyDecoratedDescriptor(_class2$3.prototype, "_useOriginalSize", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor9$2 = _applyDecoratedDescriptor(_class2$3.prototype, "_string", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor10$2 = _applyDecoratedDescriptor(_class2$3.prototype, "_tabIndex", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor11$2 = _applyDecoratedDescriptor(_class2$3.prototype, "_backgroundImage", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12$2 = _applyDecoratedDescriptor(_class2$3.prototype, "_inputFlag", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return InputFlag.DEFAULT;
        }
      }), _descriptor13$2 = _applyDecoratedDescriptor(_class2$3.prototype, "_inputMode", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return InputMode.ANY;
        }
      }), _descriptor14$2 = _applyDecoratedDescriptor(_class2$3.prototype, "_maxLength", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      })), _class2$3)) || _class$4) || _class$4) || _class$4) || _class$4) || _class$4) || _class$4));

      if (sys.isBrowser) {
        EditBox._EditBoxImpl = EditBoxImpl;
      }
      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event editing-did-began
       * @param {Event.EventCustom} event
       * @param {EditBox} editbox - The EditBox component.
       */

      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event editing-did-ended
       * @param {Event.EventCustom} event
       * @param {EditBox} editbox - The EditBox component.
       */

      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event text-changed
       * @param {Event.EventCustom} event
       * @param {EditBox} editbox - The EditBox component.
       */

      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event editing-return
       * @param {Event.EventCustom} event
       * @param {EditBox} editbox - The EditBox component.
       */

      /**
       * @en if you don't need the EditBox and it isn't in any running Scene, you should
       * call the destroy method on this component or the associated node explicitly.
       * Otherwise, the created DOM element won't be removed from web page.
       * @zh
       * 如果你不再使用 EditBox，并且组件未添加到场景中，那么你必须手动对组件或所在节点调用 destroy。
       * 这样才能移除网页上的 DOM 节点，避免 Web 平台内存泄露。
       * @example
       * ```
       * editbox.node.parent = null;  // or  editbox.node.removeFromParent(false);
       * // when you don't need editbox anymore
       * editbox.node.destroy();
       * ```
       * @return {Boolean} whether it is the first time the destroy being called
       */

      var _dec$5, _dec2$5, _dec3$5, _dec4$4, _dec5$4, _dec6$4, _dec7$4, _dec8$4, _dec9$4, _dec10$4, _dec11$4, _dec12$4, _dec13$4, _dec14$4, _dec15$4, _dec16$3, _dec17$3, _dec18$3, _dec19$3, _dec20$3, _dec21$3, _dec22$3, _dec23$3, _dec24$3, _class$5, _class2$4, _descriptor$4, _descriptor2$4, _descriptor3$4, _descriptor4$4, _descriptor5$4, _descriptor6$3, _descriptor7$3, _descriptor8$3, _descriptor9$3, _descriptor10$3, _descriptor11$3, _descriptor12$3, _descriptor13$3, _descriptor14$3, _class3$3, _temp$5;
      var NodeEvent = SystemEventType;
      /**
       * @en Enum for layout.
       *
       * @zh 布局类型。
       */

      var Type;

      (function (Type) {
        Type[Type["NONE"] = 0] = "NONE";
        Type[Type["HORIZONTAL"] = 1] = "HORIZONTAL";
        Type[Type["VERTICAL"] = 2] = "VERTICAL";
        Type[Type["GRID"] = 3] = "GRID";
      })(Type || (Type = {}));

      ccenum(Type);
      /**
       * @en Enum for Layout Resize Mode.
       *
       * @zh 缩放模式。
       */

      var ResizeMode;

      (function (ResizeMode) {
        ResizeMode[ResizeMode["NONE"] = 0] = "NONE";
        ResizeMode[ResizeMode["CONTAINER"] = 1] = "CONTAINER";
        ResizeMode[ResizeMode["CHILDREN"] = 2] = "CHILDREN";
      })(ResizeMode || (ResizeMode = {}));

      ccenum(ResizeMode);
      /**
       * @en Enum for Grid Layout start axis direction.
       *
       * @zh 布局轴向，只用于 GRID 布局。
       */

      var AxisDirection;

      (function (AxisDirection) {
        AxisDirection[AxisDirection["HORIZONTAL"] = 0] = "HORIZONTAL";
        AxisDirection[AxisDirection["VERTICAL"] = 1] = "VERTICAL";
      })(AxisDirection || (AxisDirection = {}));

      ccenum(AxisDirection);
      /**
       * @en Enum for vertical layout direction.
       *
       * @zh 垂直方向布局方式。
       */

      var VerticalDirection;

      (function (VerticalDirection) {
        VerticalDirection[VerticalDirection["BOTTOM_TO_TOP"] = 0] = "BOTTOM_TO_TOP";
        VerticalDirection[VerticalDirection["TOP_TO_BOTTOM"] = 1] = "TOP_TO_BOTTOM";
      })(VerticalDirection || (VerticalDirection = {}));

      ccenum(VerticalDirection);
      /**
       * @en Enum for horizontal layout direction.
       *
       * @zh 水平方向布局方式。
       */

      var HorizontalDirection;

      (function (HorizontalDirection) {
        HorizontalDirection[HorizontalDirection["LEFT_TO_RIGHT"] = 0] = "LEFT_TO_RIGHT";
        HorizontalDirection[HorizontalDirection["RIGHT_TO_LEFT"] = 1] = "RIGHT_TO_LEFT";
      })(HorizontalDirection || (HorizontalDirection = {}));

      ccenum(HorizontalDirection);

      var _tempPos = new Vec3();

      var _tempScale = new Vec3();
      /**
       * @en
       * The Layout is a container component, use it to arrange child elements easily.<br>
       * Note：<br>
       * 1.Scaling and rotation of child nodes are not considered.<br>
       * 2.After setting the Layout, the results need to be updated until the next frame,unless you manually call.[[updateLayout]]
       *
       * @zh
       * Layout 组件相当于一个容器，能自动对它的所有子节点进行统一排版。<br>
       * 注意：<br>
       * 1.不会考虑子节点的缩放和旋转。<br>
       * 2.对 Layout 设置后结果需要到下一帧才会更新，除非你设置完以后手动调用。[[updateLayout]]
       */


      var Layout = function (v) { return exports({ Layout: v, LayoutComponent: v }), v; }((_dec$5 = ccclass('cc.Layout'), _dec2$5 = help(), _dec3$5 = executionOrder(110), _dec4$4 = menu(), _dec5$4 = requireComponent(UITransform), _dec6$4 = type(Type), _dec7$4 = tooltip(), _dec8$4 = type(ResizeMode), _dec9$4 = tooltip(), _dec10$4 = tooltip(), _dec11$4 = type(AxisDirection), _dec12$4 = tooltip(), _dec13$4 = tooltip(), _dec14$4 = tooltip(), _dec15$4 = tooltip(), _dec16$3 = tooltip(), _dec17$3 = tooltip(), _dec18$3 = tooltip(), _dec19$3 = type(VerticalDirection), _dec20$3 = tooltip(), _dec21$3 = type(HorizontalDirection), _dec22$3 = tooltip(), _dec23$3 = tooltip(), _dec24$3 = tooltip(), _dec$5(_class$5 = _dec2$5(_class$5 = _dec3$5(_class$5 = _dec4$4(_class$5 = _dec5$4(_class$5 = executeInEditMode(_class$5 = (_class2$4 = (_temp$5 = _class3$3 = /*#__PURE__*/function (_Component) {
        _inherits(Layout, _Component);

        function Layout() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Layout);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Layout)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "_resizeMode", _descriptor$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_N$layoutType", _descriptor2$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_N$padding", _descriptor3$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_cellSize", _descriptor4$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_startAxis", _descriptor5$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_paddingLeft", _descriptor6$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_paddingRight", _descriptor7$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_paddingTop", _descriptor8$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_paddingBottom", _descriptor9$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_spacingX", _descriptor10$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_spacingY", _descriptor11$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_verticalDirection", _descriptor12$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_horizontalDirection", _descriptor13$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_affectedByScale", _descriptor14$3, _assertThisInitialized(_this));

          _this._layoutSize = new Size(300, 200);
          _this._layoutDirty = true;
          _this._isAlign = false;
          return _this;
        }

        _createClass(Layout, [{
          key: "updateLayout",

          /**
           * @en
           * Perform the layout update.
           *
           * @zh
           * 立即执行更新布局。
           *
           * @example
           * ```ts
           * import { Layout, log } from 'cc';
           * layout.type = Layout.HORIZONTAL;
           * layout.node.addChild(childNode);
           * log(childNode.x); // not yet changed
           * layout.updateLayout();
           * log(childNode.x); // changed
           * ```
           */
          value: function updateLayout() {
            if (this._layoutDirty && this.node.children.length > 0) {
              this._doLayout();

              this._layoutDirty = false;
            }
          }
        }, {
          key: "onEnable",
          value: function onEnable() {
            this._addEventListeners();

            var trans = this.node._uiProps.uiTransformComp;

            if (trans.contentSize.equals(Size.ZERO)) {
              trans.setContentSize(this._layoutSize);
            }

            if (this._N$padding !== 0) {
              this._migratePaddingData();
            }

            this._doLayoutDirty();
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            this._removeEventListeners();
          }
        }, {
          key: "_migratePaddingData",
          value: function _migratePaddingData() {
            this._paddingLeft = this._N$padding;
            this._paddingRight = this._N$padding;
            this._paddingTop = this._N$padding;
            this._paddingBottom = this._N$padding;
            this._N$padding = 0;
          }
        }, {
          key: "_addEventListeners",
          value: function _addEventListeners() {
            director.on(Director.EVENT_AFTER_UPDATE, this.updateLayout, this);
            this.node.on(NodeEvent.SIZE_CHANGED, this._resized, this);
            this.node.on(NodeEvent.ANCHOR_CHANGED, this._doLayoutDirty, this);
            this.node.on(NodeEvent.CHILD_ADDED, this._childAdded, this);
            this.node.on(NodeEvent.CHILD_REMOVED, this._childRemoved, this); // this.node.on(NodeEvent.CHILD_REORDER, this._doLayoutDirty, this);

            this._addChildrenEventListeners();
          }
        }, {
          key: "_removeEventListeners",
          value: function _removeEventListeners() {
            director.off(Director.EVENT_AFTER_UPDATE, this.updateLayout, this);
            this.node.off(NodeEvent.SIZE_CHANGED, this._resized, this);
            this.node.off(NodeEvent.ANCHOR_CHANGED, this._doLayoutDirty, this);
            this.node.off(NodeEvent.CHILD_ADDED, this._childAdded, this);
            this.node.off(NodeEvent.CHILD_REMOVED, this._childRemoved, this); // this.node.off(NodeEvent.CHILD_REORDER, this._doLayoutDirty, this);

            this._removeChildrenEventListeners();
          }
        }, {
          key: "_addChildrenEventListeners",
          value: function _addChildrenEventListeners() {
            var children = this.node.children;

            for (var i = 0; i < children.length; ++i) {
              var child = children[i];
              child.on(NodeEvent.TRANSFORM_CHANGED, this._doScaleDirty, this);
              child.on(NodeEvent.SIZE_CHANGED, this._doLayoutDirty, this);
              child.on(NodeEvent.TRANSFORM_CHANGED, this._transformDirty, this);
              child.on(NodeEvent.ANCHOR_CHANGED, this._doLayoutDirty, this);
              child.on('active-in-hierarchy-changed', this._doLayoutDirty, this);
            }
          }
        }, {
          key: "_removeChildrenEventListeners",
          value: function _removeChildrenEventListeners() {
            var children = this.node.children;

            for (var i = 0; i < children.length; ++i) {
              var child = children[i];
              child.off(NodeEvent.TRANSFORM_CHANGED, this._doScaleDirty, this);
              child.off(NodeEvent.SIZE_CHANGED, this._doLayoutDirty, this);
              child.off(NodeEvent.TRANSFORM_CHANGED, this._transformDirty, this);
              child.off(NodeEvent.ANCHOR_CHANGED, this._doLayoutDirty, this);
              child.off('active-in-hierarchy-changed', this._doLayoutDirty, this);
            }
          }
        }, {
          key: "_childAdded",
          value: function _childAdded(child) {
            child.on(NodeEvent.TRANSFORM_CHANGED, this._doScaleDirty, this);
            child.on(NodeEvent.SIZE_CHANGED, this._doLayoutDirty, this);
            child.on(NodeEvent.TRANSFORM_CHANGED, this._transformDirty, this);
            child.on(NodeEvent.ANCHOR_CHANGED, this._doLayoutDirty, this);
            child.on('active-in-hierarchy-changed', this._doLayoutDirty, this);

            this._doLayoutDirty();
          }
        }, {
          key: "_childRemoved",
          value: function _childRemoved(child) {
            child.off(NodeEvent.TRANSFORM_CHANGED, this._doScaleDirty, this);
            child.off(NodeEvent.SIZE_CHANGED, this._doLayoutDirty, this);
            child.off(NodeEvent.TRANSFORM_CHANGED, this._transformDirty, this);
            child.off(NodeEvent.ANCHOR_CHANGED, this._doLayoutDirty, this);
            child.off('active-in-hierarchy-changed', this._doLayoutDirty, this);

            this._doLayoutDirty();
          }
        }, {
          key: "_resized",
          value: function _resized() {
            this._layoutSize.set(this.node._uiProps.uiTransformComp.contentSize);

            this._doLayoutDirty();
          }
        }, {
          key: "_doLayoutHorizontally",
          value: function _doLayoutHorizontally(baseWidth, rowBreak, fnPositionY, applyChildren) {
            var trans = this.node._uiProps.uiTransformComp;
            var layoutAnchor = trans.anchorPoint;
            var children = this.node.children;
            var sign = 1;
            var paddingX = this._paddingLeft;
            var startPos = -layoutAnchor.x * baseWidth;

            if (this._horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
              sign = -1;
              startPos = (1 - layoutAnchor.x) * baseWidth;
              paddingX = this._paddingRight;
            }

            var nextX = startPos + sign * paddingX - sign * this._spacingX;
            var rowMaxHeight = 0;
            var tempMaxHeight = 0;
            var secondMaxHeight = 0;
            var row = 0;
            var containerResizeBoundary = 0;
            var maxHeightChildAnchorY = 0;
            var activeChildCount = 0;

            for (var i = 0; i < children.length; ++i) {
              if (children[i].activeInHierarchy) {
                activeChildCount++;
              }
            }

            var newChildWidth = this._cellSize.width;

            if (this._N$layoutType !== Type.GRID && this._resizeMode === ResizeMode.CHILDREN) {
              newChildWidth = (baseWidth - (this._paddingLeft + this._paddingRight) - (activeChildCount - 1) * this._spacingX) / activeChildCount;
            }

            for (var _i = 0; _i < children.length; ++_i) {
              var child = children[_i];
              var childTrans = child._uiProps.uiTransformComp;

              if (!child.activeInHierarchy || !childTrans) {
                continue;
              }

              child.getScale(_tempScale);

              var childScaleX = this._getUsedScaleValue(_tempScale.x);

              var childScaleY = this._getUsedScaleValue(_tempScale.y); // for resizing children


              if (this._resizeMode === ResizeMode.CHILDREN) {
                childTrans.width = newChildWidth / childScaleX;

                if (this._N$layoutType === Type.GRID) {
                  childTrans.height = this._cellSize.height / childScaleY;
                }
              }

              var anchorX = childTrans.anchorX;
              var childBoundingBoxWidth = childTrans.width * childScaleX;
              var childBoundingBoxHeight = childTrans.height * childScaleY;

              if (secondMaxHeight > tempMaxHeight) {
                tempMaxHeight = secondMaxHeight;
              }

              if (childBoundingBoxHeight >= tempMaxHeight) {
                secondMaxHeight = tempMaxHeight;
                tempMaxHeight = childBoundingBoxHeight;
                maxHeightChildAnchorY = childTrans.anchorY;
              }

              if (this._horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
                anchorX = 1 - childTrans.anchorX;
              }

              nextX = nextX + sign * anchorX * childBoundingBoxWidth + sign * this._spacingX;
              var rightBoundaryOfChild = sign * (1 - anchorX) * childBoundingBoxWidth;

              if (rowBreak) {
                var rowBreakBoundary = nextX + rightBoundaryOfChild + sign * (sign > 0 ? this._paddingRight : this._paddingLeft);
                var leftToRightRowBreak = false;

                if (this._horizontalDirection === HorizontalDirection.LEFT_TO_RIGHT && rowBreakBoundary > (1 - layoutAnchor.x) * baseWidth) {
                  leftToRightRowBreak = true;
                }

                var rightToLeftRowBreak = false;

                if (this._horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT && rowBreakBoundary < -layoutAnchor.x * baseWidth) {
                  rightToLeftRowBreak = true;
                }

                if (leftToRightRowBreak || rightToLeftRowBreak) {
                  if (childBoundingBoxHeight >= tempMaxHeight) {
                    if (secondMaxHeight === 0) {
                      secondMaxHeight = tempMaxHeight;
                    }

                    rowMaxHeight += secondMaxHeight;
                    secondMaxHeight = tempMaxHeight;
                  } else {
                    rowMaxHeight += tempMaxHeight;
                    secondMaxHeight = childBoundingBoxHeight;
                    tempMaxHeight = 0;
                  }

                  nextX = startPos + sign * (paddingX + anchorX * childBoundingBoxWidth);
                  row++;
                }
              }

              var finalPositionY = fnPositionY(child, childTrans, rowMaxHeight, row);

              if (baseWidth >= childBoundingBoxWidth + this._paddingLeft + this._paddingRight) {
                if (applyChildren) {
                  child.getPosition(_tempPos);
                  child.setPosition(nextX, finalPositionY, _tempPos.z);
                }
              }

              var signX = 1;
              var tempFinalPositionY = void 0;
              var topMargin = tempMaxHeight === 0 ? childBoundingBoxHeight : tempMaxHeight;

              if (this._verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
                containerResizeBoundary = containerResizeBoundary || trans.height;
                signX = -1;
                tempFinalPositionY = finalPositionY + signX * (topMargin * maxHeightChildAnchorY + this._paddingBottom);

                if (tempFinalPositionY < containerResizeBoundary) {
                  containerResizeBoundary = tempFinalPositionY;
                }
              } else {
                containerResizeBoundary = containerResizeBoundary || -trans.height;
                tempFinalPositionY = finalPositionY + signX * (topMargin * maxHeightChildAnchorY + this._paddingTop);

                if (tempFinalPositionY > containerResizeBoundary) {
                  containerResizeBoundary = tempFinalPositionY;
                }
              }

              nextX += rightBoundaryOfChild;
            }

            return containerResizeBoundary;
          }
        }, {
          key: "_doLayoutVertically",
          value: function _doLayoutVertically(baseHeight, columnBreak, fnPositionX, applyChildren) {
            var trans = this.node._uiProps.uiTransformComp;
            var layoutAnchor = trans.anchorPoint;
            var children = this.node.children;
            var sign = 1;
            var paddingY = this._paddingBottom;
            var bottomBoundaryOfLayout = -layoutAnchor.y * baseHeight;

            if (this._verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
              sign = -1;
              bottomBoundaryOfLayout = (1 - layoutAnchor.y) * baseHeight;
              paddingY = this._paddingTop;
            }

            var nextY = bottomBoundaryOfLayout + sign * paddingY - sign * this._spacingY;
            var columnMaxWidth = 0;
            var tempMaxWidth = 0;
            var secondMaxWidth = 0;
            var column = 0;
            var containerResizeBoundary = 0;
            var maxWidthChildAnchorX = 0;
            var activeChildCount = 0;

            for (var i = 0; i < children.length; ++i) {
              if (children[i].activeInHierarchy) {
                activeChildCount++;
              }
            }

            var newChildHeight = this._cellSize.height;

            if (this._N$layoutType !== Type.GRID && this._resizeMode === ResizeMode.CHILDREN) {
              newChildHeight = (baseHeight - (this._paddingTop + this._paddingBottom) - (activeChildCount - 1) * this._spacingY) / activeChildCount;
            }

            for (var _i2 = 0; _i2 < children.length; ++_i2) {
              var child = children[_i2];

              if (!child) {
                continue;
              }

              var scale = child.getScale();

              var childScaleX = this._getUsedScaleValue(scale.x);

              var childScaleY = this._getUsedScaleValue(scale.y);

              var childTrans = child._uiProps.uiTransformComp;

              if (!child.activeInHierarchy || !childTrans) {
                continue;
              } // for resizing children


              if (this._resizeMode === ResizeMode.CHILDREN) {
                childTrans.height = newChildHeight / childScaleY;

                if (this._N$layoutType === Type.GRID) {
                  childTrans.width = this._cellSize.width / childScaleX;
                }
              }

              var anchorY = childTrans.anchorY;
              var childBoundingBoxWidth = childTrans.width * childScaleX;
              var childBoundingBoxHeight = childTrans.height * childScaleY;

              if (secondMaxWidth > tempMaxWidth) {
                tempMaxWidth = secondMaxWidth;
              }

              if (childBoundingBoxWidth >= tempMaxWidth) {
                secondMaxWidth = tempMaxWidth;
                tempMaxWidth = childBoundingBoxWidth;
                maxWidthChildAnchorX = childTrans.anchorX;
              }

              if (this._verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
                anchorY = 1 - childTrans.anchorY;
              }

              nextY = nextY + sign * anchorY * childBoundingBoxHeight + sign * this._spacingY;
              var topBoundaryOfChild = sign * (1 - anchorY) * childBoundingBoxHeight;

              if (columnBreak) {
                var columnBreakBoundary = nextY + topBoundaryOfChild + sign * (sign > 0 ? this._paddingTop : this._paddingBottom);
                var bottomToTopColumnBreak = false;

                if (this._verticalDirection === VerticalDirection.BOTTOM_TO_TOP && columnBreakBoundary > (1 - layoutAnchor.y) * baseHeight) {
                  bottomToTopColumnBreak = true;
                }

                var topToBottomColumnBreak = false;

                if (this._verticalDirection === VerticalDirection.TOP_TO_BOTTOM && columnBreakBoundary < -layoutAnchor.y * baseHeight) {
                  topToBottomColumnBreak = true;
                }

                if (bottomToTopColumnBreak || topToBottomColumnBreak) {
                  if (childBoundingBoxWidth >= tempMaxWidth) {
                    if (secondMaxWidth === 0) {
                      secondMaxWidth = tempMaxWidth;
                    }

                    columnMaxWidth += secondMaxWidth;
                    secondMaxWidth = tempMaxWidth;
                  } else {
                    columnMaxWidth += tempMaxWidth;
                    secondMaxWidth = childBoundingBoxWidth;
                    tempMaxWidth = 0;
                  }

                  nextY = bottomBoundaryOfLayout + sign * (paddingY + anchorY * childBoundingBoxHeight);
                  column++;
                }
              }

              var finalPositionX = fnPositionX(child, childTrans, columnMaxWidth, column);

              if (baseHeight >= childBoundingBoxHeight + (this._paddingTop + this._paddingBottom)) {
                if (applyChildren) {
                  child.getPosition(_tempPos);
                  child.setPosition(finalPositionX, nextY, _tempPos.z);
                }
              }

              var signX = 1;
              var tempFinalPositionX = void 0; // when the item is the last column break item, the tempMaxWidth will be 0.

              var rightMargin = tempMaxWidth === 0 ? childBoundingBoxWidth : tempMaxWidth;

              if (this._horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
                signX = -1;
                containerResizeBoundary = containerResizeBoundary || trans.width;
                tempFinalPositionX = finalPositionX + signX * (rightMargin * maxWidthChildAnchorX + this._paddingLeft);

                if (tempFinalPositionX < containerResizeBoundary) {
                  containerResizeBoundary = tempFinalPositionX;
                }
              } else {
                containerResizeBoundary = containerResizeBoundary || -trans.width;
                tempFinalPositionX = finalPositionX + signX * (rightMargin * maxWidthChildAnchorX + this._paddingRight);

                if (tempFinalPositionX > containerResizeBoundary) {
                  containerResizeBoundary = tempFinalPositionX;
                }
              }

              nextY += topBoundaryOfChild;
            }

            return containerResizeBoundary;
          }
        }, {
          key: "_doLayoutBasic",
          value: function _doLayoutBasic() {
            var children = this.node.children;
            var allChildrenBoundingBox = null;

            for (var i = 0; i < children.length; ++i) {
              var child = children[i];
              var childTransform = child._uiProps.uiTransformComp;

              if (!childTransform) {
                continue;
              }

              if (child.activeInHierarchy) {
                if (!allChildrenBoundingBox) {
                  allChildrenBoundingBox = childTransform.getBoundingBoxToWorld();
                } else {
                  Rect.union(allChildrenBoundingBox, allChildrenBoundingBox, childTransform.getBoundingBoxToWorld());
                }
              }
            }

            if (allChildrenBoundingBox) {
              var parentTransform = this.node.parent.getComponent(UITransform);

              if (!parentTransform) {
                return;
              }

              Vec3.set(_tempPos, allChildrenBoundingBox.x, allChildrenBoundingBox.y, 0);
              var leftBottomInParentSpace = new Vec3();
              parentTransform.convertToNodeSpaceAR(_tempPos, leftBottomInParentSpace);
              Vec3.set(leftBottomInParentSpace, leftBottomInParentSpace.x - this._paddingLeft, leftBottomInParentSpace.y - this._paddingBottom, leftBottomInParentSpace.z);
              Vec3.set(_tempPos, allChildrenBoundingBox.x + allChildrenBoundingBox.width, allChildrenBoundingBox.y + allChildrenBoundingBox.height, 0);
              var rightTopInParentSpace = new Vec3();
              parentTransform.convertToNodeSpaceAR(_tempPos, rightTopInParentSpace);
              Vec3.set(rightTopInParentSpace, rightTopInParentSpace.x + this._paddingRight, rightTopInParentSpace.y + this._paddingTop, rightTopInParentSpace.z);
              var newSize = legacyCC.size(parseFloat((rightTopInParentSpace.x - leftBottomInParentSpace.x).toFixed(2)), parseFloat((rightTopInParentSpace.y - leftBottomInParentSpace.y).toFixed(2)));
              this.node.getPosition(_tempPos);
              var trans = this.node._uiProps.uiTransformComp;

              if (newSize.width !== 0) {
                var newAnchorX = (_tempPos.x - leftBottomInParentSpace.x) / newSize.width;
                trans.anchorX = parseFloat(newAnchorX.toFixed(2));
              }

              if (newSize.height !== 0) {
                var newAnchorY = (_tempPos.y - leftBottomInParentSpace.y) / newSize.height;
                trans.anchorY = parseFloat(newAnchorY.toFixed(2));
              }

              trans.setContentSize(newSize);
            }
          }
        }, {
          key: "_doLayoutGridAxisHorizontal",
          value: function _doLayoutGridAxisHorizontal(layoutAnchor, layoutSize) {
            var _this2 = this;

            var baseWidth = layoutSize.width;
            var sign = 1;
            var bottomBoundaryOfLayout = -layoutAnchor.y * layoutSize.height;
            var paddingY = this._paddingBottom;

            if (this._verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
              sign = -1;
              bottomBoundaryOfLayout = (1 - layoutAnchor.y) * layoutSize.height;
              paddingY = this._paddingTop;
            }

            var self = this;

            var fnPositionY = function fnPositionY(child, childTrans, topOffset, row) {
              return bottomBoundaryOfLayout + sign * (topOffset + childTrans.anchorY * childTrans.height * self._getUsedScaleValue(child.getScale().y) + paddingY + row * _this2._spacingY);
            };

            var newHeight = 0;

            if (this._resizeMode === ResizeMode.CONTAINER) {
              // calculate the new height of container, it won't change the position of it's children
              var boundary = this._doLayoutHorizontally(baseWidth, true, fnPositionY, false);

              newHeight = bottomBoundaryOfLayout - boundary;

              if (newHeight < 0) {
                newHeight *= -1;
              }

              bottomBoundaryOfLayout = -layoutAnchor.y * newHeight;

              if (this._verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
                sign = -1;
                bottomBoundaryOfLayout = (1 - layoutAnchor.y) * newHeight;
              }
            }

            this._doLayoutHorizontally(baseWidth, true, fnPositionY, true);

            if (this._resizeMode === ResizeMode.CONTAINER) {
              this.node._uiProps.uiTransformComp.setContentSize(baseWidth, newHeight);
            }
          }
        }, {
          key: "_doLayoutGridAxisVertical",
          value: function _doLayoutGridAxisVertical(layoutAnchor, layoutSize) {
            var _this3 = this;

            var baseHeight = layoutSize.height;
            var sign = 1;
            var leftBoundaryOfLayout = -layoutAnchor.x * layoutSize.width;
            var paddingX = this._paddingLeft;

            if (this._horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
              sign = -1;
              leftBoundaryOfLayout = (1 - layoutAnchor.x) * layoutSize.width;
              paddingX = this._paddingRight;
            }

            var self = this;

            var fnPositionX = function fnPositionX(child, childTrans, leftOffset, column) {
              return leftBoundaryOfLayout + sign * (leftOffset + childTrans.anchorX * childTrans.width * self._getUsedScaleValue(child.getScale().x) + paddingX + column * _this3._spacingX);
            };

            var newWidth = 0;

            if (this._resizeMode === ResizeMode.CONTAINER) {
              var boundary = this._doLayoutVertically(baseHeight, true, fnPositionX, false);

              newWidth = leftBoundaryOfLayout - boundary;

              if (newWidth < 0) {
                newWidth *= -1;
              }

              leftBoundaryOfLayout = -layoutAnchor.x * newWidth;

              if (this._horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
                sign = -1;
                leftBoundaryOfLayout = (1 - layoutAnchor.x) * newWidth;
              }
            }

            this._doLayoutVertically(baseHeight, true, fnPositionX, true);

            if (this._resizeMode === ResizeMode.CONTAINER) {
              this.node._uiProps.uiTransformComp.setContentSize(newWidth, baseHeight);
            }
          }
        }, {
          key: "_doLayoutGrid",
          value: function _doLayoutGrid() {
            var trans = this.node._uiProps.uiTransformComp;
            var layoutAnchor = trans.anchorPoint;
            var layoutSize = trans.contentSize;

            if (this.startAxis === AxisDirection.HORIZONTAL) {
              this._doLayoutGridAxisHorizontal(layoutAnchor, layoutSize);
            } else if (this.startAxis === AxisDirection.VERTICAL) {
              this._doLayoutGridAxisVertical(layoutAnchor, layoutSize);
            }
          }
        }, {
          key: "_getHorizontalBaseWidth",
          value: function _getHorizontalBaseWidth(children) {
            var newWidth = 0;
            var activeChildCount = 0;

            if (this._resizeMode === ResizeMode.CONTAINER) {
              for (var i = 0; i < children.length; ++i) {
                var child = children[i];
                child.getScale(_tempScale);
                var childTrans = child._uiProps.uiTransformComp;

                if (child.activeInHierarchy && childTrans) {
                  activeChildCount++;
                  newWidth += childTrans.width * this._getUsedScaleValue(_tempScale.x);
                }
              }

              newWidth += (activeChildCount - 1) * this._spacingX + this._paddingLeft + this._paddingRight;
            } else {
              newWidth = this.node._uiProps.uiTransformComp.width;
            }

            return newWidth;
          }
        }, {
          key: "_getVerticalBaseHeight",
          value: function _getVerticalBaseHeight(children) {
            var newHeight = 0;
            var activeChildCount = 0;

            if (this._resizeMode === ResizeMode.CONTAINER) {
              for (var i = 0; i < children.length; ++i) {
                var child = children[i];
                child.getScale(_tempScale);
                var childTrans = child._uiProps.uiTransformComp;

                if (child.activeInHierarchy && childTrans) {
                  activeChildCount++;
                  newHeight += childTrans.height * this._getUsedScaleValue(_tempScale.y);
                }
              }

              newHeight += (activeChildCount - 1) * this._spacingY + this._paddingBottom + this._paddingTop;
            } else {
              newHeight = this.node._uiProps.uiTransformComp.height;
            }

            return newHeight;
          }
        }, {
          key: "_doLayout",
          value: function _doLayout() {
            var _this4 = this;

            if (this._N$layoutType === Type.HORIZONTAL) {
              var newWidth = this._getHorizontalBaseWidth(this.node.children);

              var fnPositionY = function fnPositionY(child) {
                var pos = _this4._isAlign ? Vec3.ZERO : child.position;
                return pos.y;
              };

              this._doLayoutHorizontally(newWidth, false, fnPositionY, true);

              this._isAlign = false;
              this.node._uiProps.uiTransformComp.width = newWidth;
            } else if (this._N$layoutType === Type.VERTICAL) {
              var newHeight = this._getVerticalBaseHeight(this.node.children);

              var fnPositionX = function fnPositionX(child) {
                var pos = _this4._isAlign ? Vec3.ZERO : child.position;
                return pos.x;
              };

              this._doLayoutVertically(newHeight, false, fnPositionX, true);

              this._isAlign = false;
              this.node._uiProps.uiTransformComp.height = newHeight;
            } else if (this._N$layoutType === Type.NONE) {
              if (this._resizeMode === ResizeMode.CONTAINER) {
                this._doLayoutBasic();
              }
            } else if (this._N$layoutType === Type.GRID) {
              this._doLayoutGrid();
            }
          }
        }, {
          key: "_getUsedScaleValue",
          value: function _getUsedScaleValue(value) {
            return this._affectedByScale ? Math.abs(value) : 1;
          }
        }, {
          key: "_transformDirty",
          value: function _transformDirty(type) {
            if (!(type & TransformBit.POSITION)) {
              return;
            }

            this._doLayoutDirty();
          }
        }, {
          key: "_doLayoutDirty",
          value: function _doLayoutDirty() {
            this._layoutDirty = true;
          }
        }, {
          key: "_doScaleDirty",
          value: function _doScaleDirty(type) {
            if (type & TransformBit.SCALE) {
              this._layoutDirty = this._layoutDirty || this._affectedByScale;
            }
          }
        }, {
          key: "type",

          /**
           * @en
           * The layout type.
           *
           * @zh
           * 布局类型。
           */
          get: function get() {
            return this._N$layoutType;
          },
          set: function set(value) {
            this._N$layoutType = value;

            this._isAlign = true;

            this._doLayoutDirty();
          }
          /**
           * @en
           * The are three resize modes for Layout. None, resize Container and resize children.
           *
           * @zh
           * 缩放模式。
           */

        }, {
          key: "resizeMode",
          get: function get() {
            return this._resizeMode;
          },
          set: function set(value) {
            if (this._N$layoutType === Type.NONE && value === ResizeMode.CHILDREN) {
              return;
            }

            this._resizeMode = value;

            this._doLayoutDirty();
          }
          /**
           * @en
           * The cell size for grid layout.
           *
           * @zh
           * 每个格子的大小，只有布局类型为 GRID 的时候才有效。
           */

        }, {
          key: "cellSize",
          get: function get() {
            return this._cellSize;
          },
          set: function set(value) {
            if (this._cellSize === value) {
              return;
            }

            this._cellSize.set(value);

            this._doLayoutDirty();
          }
          /**
           * @en
           * The start axis for grid layout. If you choose horizontal, then children will layout horizontally at first,
           * and then break line on demand. Choose vertical if you want to layout vertically at first .
           *
           * @zh
           * 起始轴方向类型，可进行水平和垂直布局排列，只有布局类型为 GRID 的时候才有效。
           */

        }, {
          key: "startAxis",
          get: function get() {
            return this._startAxis;
          },
          set: function set(value) {
            if (this._startAxis === value) {
              return;
            }

            this._startAxis = value;

            this._doLayoutDirty();
          }
          /**
           * @en
           * The left padding of layout, it only effect the layout in one direction.
           *
           * @zh
           * 容器内左边距，只会在一个布局方向上生效。
           */

        }, {
          key: "paddingLeft",
          get: function get() {
            return this._paddingLeft;
          },
          set: function set(value) {
            if (this._paddingLeft === value) {
              return;
            }

            this._paddingLeft = value;

            this._doLayoutDirty();
          }
          /**
           * @en
           * The right padding of layout, it only effect the layout in one direction.
           *
           * @zh
           * 容器内右边距，只会在一个布局方向上生效。
           */

        }, {
          key: "paddingRight",
          get: function get() {
            return this._paddingRight;
          },
          set: function set(value) {
            if (this._paddingRight === value) {
              return;
            }

            this._paddingRight = value;

            this._doLayoutDirty();
          }
          /**
           * @en
           * The top padding of layout, it only effect the layout in one direction.
           *
           * @zh
           * 容器内上边距，只会在一个布局方向上生效。
           */

        }, {
          key: "paddingTop",
          get: function get() {
            return this._paddingTop;
          },
          set: function set(value) {
            if (this._paddingTop === value) {
              return;
            }

            this._paddingTop = value;

            this._doLayoutDirty();
          }
          /**
           * @en
           * The bottom padding of layout, it only effect the layout in one direction.
           *
           * @zh
           * 容器内下边距，只会在一个布局方向上生效。
           */

        }, {
          key: "paddingBottom",
          get: function get() {
            return this._paddingBottom;
          },
          set: function set(value) {
            if (this._paddingBottom === value) {
              return;
            }

            this._paddingBottom = value;

            this._doLayoutDirty();
          }
          /**
           * @en
           * The distance in x-axis between each element in layout.
           *
           * @zh
           * 子节点之间的水平间距。
           */

        }, {
          key: "spacingX",
          get: function get() {
            return this._spacingX;
          },
          set: function set(value) {
            if (this._spacingX === value) {
              return;
            }

            this._spacingX = value;

            this._doLayoutDirty();
          }
          /**
           * @en
           * The distance in y-axis between each element in layout.
           *
           * @zh
           * 子节点之间的垂直间距。
           */

        }, {
          key: "spacingY",
          get: function get() {
            return this._spacingY;
          },
          set: function set(value) {
            if (this._spacingY === value) {
              return;
            }

            this._spacingY = value;

            this._doLayoutDirty();
          }
          /**
           * @en
           * Only take effect in Vertical layout mode.
           * This option changes the start element's positioning.
           *
           * @zh
           * 垂直排列子节点的方向。
           */

        }, {
          key: "verticalDirection",
          get: function get() {
            return this._verticalDirection;
          },
          set: function set(value) {
            if (this._verticalDirection === value) {
              return;
            }

            this._verticalDirection = value;

            this._doLayoutDirty();
          }
          /**
           * @en
           * Only take effect in horizontal layout mode.
           * This option changes the start element's positioning.
           *
           * @zh
           * 水平排列子节点的方向。
           */

        }, {
          key: "horizontalDirection",
          get: function get() {
            return this._horizontalDirection;
          },
          set: function set(value) {
            if (this._horizontalDirection === value) {
              return;
            }

            this._horizontalDirection = value;

            this._doLayoutDirty();
          }
          /**
           * @en
           * The padding of layout, it will effect the layout in horizontal and vertical direction.
           *
           * @zh
           * 容器内边距，该属性会在四个布局方向上生效。
           */

        }, {
          key: "padding",
          get: function get() {
            return this._paddingLeft;
          },
          set: function set(value) {
            this._N$padding = value;

            this._migratePaddingData();

            this._doLayoutDirty();
          }
          /**
           * @en
           * Adjust the layout if the children scaled.
           *
           * @zh
           * 子节点缩放比例是否影响布局。
           */

        }, {
          key: "affectedByScale",
          get: function get() {
            return this._affectedByScale;
          },
          set: function set(value) {
            this._affectedByScale = value;

            this._doLayoutDirty();
          }
        }]);

        return Layout;
      }(Component), _class3$3.Type = Type, _class3$3.VerticalDirection = VerticalDirection, _class3$3.HorizontalDirection = HorizontalDirection, _class3$3.ResizeMode = ResizeMode, _class3$3.AxisDirection = AxisDirection, _temp$5), (_applyDecoratedDescriptor(_class2$4.prototype, "type", [_dec6$4, _dec7$4], Object.getOwnPropertyDescriptor(_class2$4.prototype, "type"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "resizeMode", [_dec8$4, _dec9$4], Object.getOwnPropertyDescriptor(_class2$4.prototype, "resizeMode"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "cellSize", [_dec10$4], Object.getOwnPropertyDescriptor(_class2$4.prototype, "cellSize"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "startAxis", [_dec11$4, _dec12$4], Object.getOwnPropertyDescriptor(_class2$4.prototype, "startAxis"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "paddingLeft", [_dec13$4], Object.getOwnPropertyDescriptor(_class2$4.prototype, "paddingLeft"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "paddingRight", [_dec14$4], Object.getOwnPropertyDescriptor(_class2$4.prototype, "paddingRight"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "paddingTop", [_dec15$4], Object.getOwnPropertyDescriptor(_class2$4.prototype, "paddingTop"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "paddingBottom", [_dec16$3], Object.getOwnPropertyDescriptor(_class2$4.prototype, "paddingBottom"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "spacingX", [_dec17$3], Object.getOwnPropertyDescriptor(_class2$4.prototype, "spacingX"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "spacingY", [_dec18$3], Object.getOwnPropertyDescriptor(_class2$4.prototype, "spacingY"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "verticalDirection", [_dec19$3, _dec20$3], Object.getOwnPropertyDescriptor(_class2$4.prototype, "verticalDirection"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "horizontalDirection", [_dec21$3, _dec22$3], Object.getOwnPropertyDescriptor(_class2$4.prototype, "horizontalDirection"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "padding", [_dec23$3], Object.getOwnPropertyDescriptor(_class2$4.prototype, "padding"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "affectedByScale", [_dec24$3], Object.getOwnPropertyDescriptor(_class2$4.prototype, "affectedByScale"), _class2$4.prototype), _descriptor$4 = _applyDecoratedDescriptor(_class2$4.prototype, "_resizeMode", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ResizeMode.NONE;
        }
      }), _descriptor2$4 = _applyDecoratedDescriptor(_class2$4.prototype, "_N$layoutType", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Type.NONE;
        }
      }), _descriptor3$4 = _applyDecoratedDescriptor(_class2$4.prototype, "_N$padding", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4$4 = _applyDecoratedDescriptor(_class2$4.prototype, "_cellSize", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Size(40, 40);
        }
      }), _descriptor5$4 = _applyDecoratedDescriptor(_class2$4.prototype, "_startAxis", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return AxisDirection.HORIZONTAL;
        }
      }), _descriptor6$3 = _applyDecoratedDescriptor(_class2$4.prototype, "_paddingLeft", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7$3 = _applyDecoratedDescriptor(_class2$4.prototype, "_paddingRight", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor8$3 = _applyDecoratedDescriptor(_class2$4.prototype, "_paddingTop", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor9$3 = _applyDecoratedDescriptor(_class2$4.prototype, "_paddingBottom", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor10$3 = _applyDecoratedDescriptor(_class2$4.prototype, "_spacingX", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor11$3 = _applyDecoratedDescriptor(_class2$4.prototype, "_spacingY", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor12$3 = _applyDecoratedDescriptor(_class2$4.prototype, "_verticalDirection", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return VerticalDirection.TOP_TO_BOTTOM;
        }
      }), _descriptor13$3 = _applyDecoratedDescriptor(_class2$4.prototype, "_horizontalDirection", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return HorizontalDirection.LEFT_TO_RIGHT;
        }
      }), _descriptor14$3 = _applyDecoratedDescriptor(_class2$4.prototype, "_affectedByScale", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2$4)) || _class$5) || _class$5) || _class$5) || _class$5) || _class$5) || _class$5));

      /*
       Copyright (c) 2013-2016 Chukong Technologies Inc.
       Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

       http://www.cocos.com

       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated engine source code (the "Software"), a limited,
        worldwide, royalty-free, non-assignable, revocable and non-exclusive license
       to use Cocos Creator solely to develop games on your target platforms. You shall
        not use Cocos Creator software for developing other software or tools that's
        used for developing games. You are not granted to publish, distribute,
        sublicense, and/or sell copies of Cocos Creator.

       The software or tools in this License Agreement are licensed, not sold.
       Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */
      /**
       * @en Enum for LineCap.
       * @zh 线段末端属性
       * @enum Graphics.LineCap
       */

      var LineCap;

      (function (LineCap) {
        LineCap[LineCap["BUTT"] = 0] = "BUTT";
        LineCap[LineCap["ROUND"] = 1] = "ROUND";
        LineCap[LineCap["SQUARE"] = 2] = "SQUARE";
      })(LineCap || (LineCap = {}));

      ccenum(LineCap);
      /**
       * @en Enum for LineJoin.
       * @zh 线段拐角属性
       * @enum Graphics.LineJoin
       */

      var LineJoin;

      (function (LineJoin) {
        LineJoin[LineJoin["BEVEL"] = 0] = "BEVEL";
        LineJoin[LineJoin["ROUND"] = 1] = "ROUND";
        LineJoin[LineJoin["MITER"] = 2] = "MITER";
      })(LineJoin || (LineJoin = {}));

      ccenum(LineJoin); // PointFlags

      var PointFlags;

      (function (PointFlags) {
        PointFlags[PointFlags["PT_CORNER"] = 1] = "PT_CORNER";
        PointFlags[PointFlags["PT_LEFT"] = 2] = "PT_LEFT";
        PointFlags[PointFlags["PT_BEVEL"] = 4] = "PT_BEVEL";
        PointFlags[PointFlags["PT_INNERBEVEL"] = 8] = "PT_INNERBEVEL";
      })(PointFlags || (PointFlags = {}));

      ccenum(PointFlags);

      var _dec$6, _dec2$6, _dec3$6, _dec4$5, _dec5$5, _dec6$5, _dec7$5, _dec8$5, _dec9$5, _dec10$5, _dec11$5, _dec12$5, _class$6, _class2$5, _descriptor$5, _descriptor2$5, _descriptor3$5, _descriptor4$5, _descriptor5$5, _descriptor6$4, _class3$4, _temp$6;
      var _matInsInfo = {
        parent: null,
        owner: null,
        subModelIdx: 0
      };
      /**
       * @en
       * Graphics component.
       *
       * @zh
       * 自定义图形类
       */

      var Graphics = function (v) { return exports({ Graphics: v, GraphicsComponent: v }), v; }((_dec$6 = ccclass('cc.Graphics'), _dec2$6 = help(), _dec3$6 = executionOrder(110), _dec4$5 = menu(), _dec5$5 = type(LineJoin), _dec6$5 = tooltip(), _dec7$5 = type(LineCap), _dec8$5 = tooltip(), _dec9$5 = tooltip(), _dec10$5 = tooltip(), _dec11$5 = tooltip(), _dec12$5 = visible(), _dec$6(_class$6 = _dec2$6(_class$6 = _dec3$6(_class$6 = _dec4$5(_class$6 = (_class2$5 = (_temp$6 = _class3$4 = /*#__PURE__*/function (_UIRenderable) {
        _inherits(Graphics, _UIRenderable);

        _createClass(Graphics, [{
          key: "lineWidth",

          /**
           * @en
           * Current line width.
           *
           * @zh
           * 当前线条宽度。
           */
          get: function get() {
            return this._lineWidth;
          },
          set: function set(value) {
            this._lineWidth = value;

            if (!this.impl) {
              return;
            }

            this.impl.lineWidth = value;
          }
          /**
           * @en
           * Determines how two connecting segments (of lines, arcs or curves) with non-zero lengths in a shape are joined together.
           *
           * @zh
           * 用来设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性。
           */

        }, {
          key: "lineJoin",
          get: function get() {
            return this._lineJoin;
          },
          set: function set(value) {
            this._lineJoin = value;

            if (!this.impl) {
              return;
            }

            this.impl.lineJoin = value;
          }
          /**
           * @en
           * Determines how the end points of every line are drawn.
           *
           * @zh
           * 指定如何绘制每一条线段末端。
           */

        }, {
          key: "lineCap",
          get: function get() {
            return this._lineCap;
          },
          set: function set(value) {
            this._lineCap = value;

            if (!this.impl) {
              return;
            }

            this.impl.lineCap = value;
          }
          /**
           * @en
           * Stroke color.
           *
           * @zh
           * 线段颜色。
           */

        }, {
          key: "strokeColor",
          get: function get() {
            return this._strokeColor;
          },
          set: function set(value) {
            if (!this.impl) {
              return;
            }

            this._strokeColor.set(value);

            this.impl.strokeColor = this._strokeColor;
          }
          /**
           * @en
           * Fill color.
           *
           * @zh
           * 填充颜色。
           */

        }, {
          key: "fillColor",
          get: function get() {
            return this._fillColor;
          },
          set: function set(value) {
            if (!this.impl) {
              return;
            }

            this._fillColor.set(value);

            this.impl.fillColor = this._fillColor;
          }
          /**
           * @en
           * Sets the miter limit ratio.
           *
           * @zh
           * 设置斜接面限制比例。
           */

        }, {
          key: "miterLimit",
          get: function get() {
            return this._miterLimit;
          },
          set: function set(value) {
            this._miterLimit = value; // this.impl.miterLimit = value;
          }
        }, {
          key: "color",
          get: function get() {
            return this._color;
          },
          set: function set(value) {
            if (this._color === value) {
              return;
            }

            this._color.set(value);

            this._updateColor();

            this.markForUpdateRenderData();
          }
        }]);

        function Graphics() {
          var _this;

          _classCallCheck(this, Graphics);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Graphics).call(this));
          _this.impl = null;
          _this.model = null;

          _initializerDefineProperty(_this, "_lineWidth", _descriptor$5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_strokeColor", _descriptor2$5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_lineJoin", _descriptor3$5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_lineCap", _descriptor4$5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_fillColor", _descriptor5$5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_miterLimit", _descriptor6$4, _assertThisInitialized(_this));

          _this._instanceMaterialType = InstanceMaterialType.ADD_COLOR;
          _this._uiMaterialDirty = true;
          return _this;
        }

        _createClass(Graphics, [{
          key: "onRestore",
          value: function onRestore() {
            if (!this.impl) {
              this._flushAssembler();
            }
          }
        }, {
          key: "__preload",
          value: function __preload() {
            _get(_getPrototypeOf(Graphics.prototype), "__preload", this).call(this); // this._flushAssembler();


            this.impl = this._assembler && this._assembler.createImpl(this);
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            this._sceneGetter = director.root.ui.getRenderSceneGetter();

            if (!this.model) {
              this.model = director.root.createModel(Model);
            }

            this.helpInstanceMaterial();
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            this._detachFromScene();
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            _get(_getPrototypeOf(Graphics.prototype), "onDestroy", this).call(this);

            this._sceneGetter = null;

            if (this.model) {
              this.model.destroy();
              director.root.destroyModel(this.model);
              this.model = null;
            }

            if (!this.impl) {
              return;
            }

            this.impl.clear();
            this.impl = null;
          }
          /**
           * @en
           * Move path start point to (x,y).
           *
           * @zh
           * 移动路径起点到坐标(x, y)。
           *
           * @param x - 移动坐标 x 轴。
           * @param y - 移动坐标 y 轴。
           */

        }, {
          key: "moveTo",
          value: function moveTo(x, y) {
            if (!this.impl) {
              return;
            }

            this.impl.moveTo(x, y);
          }
          /**
           * @en
           * Adds a straight line to the path.
           *
           * @zh
           * 绘制直线路径。
           *
           * @param x - 绘制路径坐标 x 轴。
           * @param y - 绘制路径坐标 y 轴。
           */

        }, {
          key: "lineTo",
          value: function lineTo(x, y) {
            if (!this.impl) {
              return;
            }

            this.impl.lineTo(x, y);
          }
          /**
           * @en
           * Adds a cubic Bézier curve to the path.
           *
           * @zh
           * 绘制三次贝赛尔曲线路径。
           *
           * @param c1x - 第一个控制点的坐标 x 轴。
           * @param c1y - 第一个控制点的坐标 y 轴。
           * @param c2x - 第二个控制点的坐标 x 轴。
           * @param c2y - 第二个控制点的坐标 y 轴。
           * @param x - 最后一个控制点的坐标 x 轴。
           * @param y - 最后一个控制点的坐标 y 轴。
           */

        }, {
          key: "bezierCurveTo",
          value: function bezierCurveTo(c1x, c1y, c2x, c2y, x, y) {
            if (!this.impl) {
              return;
            }

            this.impl.bezierCurveTo(c1x, c1y, c2x, c2y, x, y);
          }
          /**
           * @en
           * Adds a quadratic Bézier curve to the path.
           *
           * @zh
           * 绘制二次贝赛尔曲线路径。
           *
           * @param cx - 起始控制点的坐标 x 轴。
           * @param cy - 起始控制点的坐标 y 轴。
           * @param x - 终点控制点的坐标 x 轴。
           * @param y - 终点控制点的坐标 x 轴。
           */

        }, {
          key: "quadraticCurveTo",
          value: function quadraticCurveTo(cx, cy, x, y) {
            if (!this.impl) {
              return;
            }

            this.impl.quadraticCurveTo(cx, cy, x, y);
          }
          /**
           * @en
           * Adds an arc to the path which is centered at (cx, cy) position with radius r starting at startAngle
           * and ending at endAngle going in the given direction by counterclockwise (defaulting to false).
           *
           * @zh
           * 绘制圆弧路径。圆弧路径的圆心在 (cx, cy) 位置，半径为 r ，根据 counterclockwise （默认为false）指定的方向从 startAngle 开始绘制，到 endAngle 结束。
           *
           * @param cx - 中心控制点的坐标 x 轴。
           * @param cy - 中心控制点的坐标 y 轴。
           * @param r - 圆弧弧度。
           * @param startAngle - 开始弧度，从正 x 轴顺时针方向测量。
           * @param endAngle - 结束弧度，从正 x 轴顺时针方向测量。
           * @param counterclockwise 如果为真，在两个角度之间逆时针绘制。默认顺时针。
           */

        }, {
          key: "arc",
          value: function arc(cx, cy, r, startAngle, endAngle, counterclockwise) {
            if (!this.impl) {
              return;
            }

            this.impl.arc(cx, cy, r, startAngle, endAngle, counterclockwise);
          }
          /**
           * @en
           * Adds an ellipse to the path.
           *
           * @zh
           * 绘制椭圆路径。
           *
           * @param cx - 中心点的坐标 x 轴。
           * @param cy - 中心点的坐标 y 轴。
           * @param rx - 椭圆 x 轴半径。
           * @param ry - 椭圆 y 轴半径。
           */

        }, {
          key: "ellipse",
          value: function ellipse(cx, cy, rx, ry) {
            if (!this.impl) {
              return;
            }

            this.impl.ellipse(cx, cy, rx, ry);
          }
          /**
           * @en
           * Adds a circle to the path.
           *
           * @zh
           * 绘制圆形路径。
           *
           * @param cx - 中心点的坐标 x 轴。
           * @param cy - 中心点的坐标 y 轴。
           * @param r - 圆半径。
           */

        }, {
          key: "circle",
          value: function circle(cx, cy, r) {
            if (!this.impl) {
              return;
            }

            this.impl.circle(cx, cy, r);
          }
          /**
           * @en
           * Adds a rectangle to the path.
           *
           * @zh
           * 绘制矩形路径。
           *
           * @param x - 矩形起始坐标 x 轴。
           * @param y - 矩形起始坐标 y 轴。
           * @param w - 矩形宽度。
           * @param h - 矩形高度。
           */

        }, {
          key: "rect",
          value: function rect(x, y, w, h) {
            if (!this.impl) {
              return;
            }

            this.impl.rect(x, y, w, h);
          }
          /**
           * @en
           * Adds a round corner rectangle to the path.
           *
           * @zh
           * 绘制圆角矩形路径。
           *
           * @param x - 矩形起始坐标 x 轴。
           * @param y - 矩形起始坐标 y 轴。
           * @param w - 矩形宽度。
           * @param h - 矩形高度。
           * @param r - 矩形圆角半径。
           */

        }, {
          key: "roundRect",
          value: function roundRect(x, y, w, h, r) {
            if (!this.impl) {
              return;
            }

            this.impl.roundRect(x, y, w, h, r);
          }
          /**
           * @en
           * Draws a filled rectangle.
           *
           * @zh
           * 绘制填充矩形。
           *
           * @param x - 矩形起始坐标 x 轴。
           * @param y - 矩形起始坐标 y 轴。
           * @param w - 矩形宽度。
           * @param h - 矩形高度。
           */

        }, {
          key: "fillRect",
          value: function fillRect(x, y, w, h) {
            this.rect(x, y, w, h);
            this.fill();
          }
          /**
           * @en
           * Erasing any previously drawn content.
           *
           * @zh
           * 擦除之前绘制的所有内容的方法。
           */

        }, {
          key: "clear",
          value: function clear() {
            var clean = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (!this.impl) {
              return;
            }

            this.impl.clear(clean);

            this._detachFromScene();

            if (this.model) {
              this.model.destroy();
            }

            this.markForUpdateRenderData();
          }
          /**
           * @en
           * Causes the point of the pen to move back to the start of the current path.
           * It tries to add a straight line from the current point to the start.
           *
           * @zh
           * 将笔点返回到当前路径起始点的。它尝试从当前点到起始点绘制一条直线。
           */

        }, {
          key: "close",
          value: function close() {
            if (!this.impl) {
              return;
            }

            this.impl.close();
          }
          /**
           * @en
           * Strokes the current or given path with the current stroke style.
           *
           * @zh
           * 根据当前的画线样式，绘制当前或已经存在的路径。
           */

        }, {
          key: "stroke",
          value: function stroke() {
            if (!this._assembler) {
              this._flushAssembler();
            }

            this._assembler.stroke(this);

            this._attachToScene();
          }
          /**
           * @en
           * Fills the current or given path with the current fill style.
           *
           * @zh
           * 根据当前的画线样式，填充当前或已经存在的路径。
           */

        }, {
          key: "fill",
          value: function fill() {
            if (!this._assembler) {
              this._flushAssembler();
            }

            this._assembler.fill(this);

            this._attachToScene();
          }
          /**
           * @en
           * Manual instance material.
           *
           * @zh
           * 辅助材质实例化。可用于只取数据而无实体情况下渲染使用。特殊情况可参考：[[instanceMaterial]]
           */

        }, {
          key: "helpInstanceMaterial",
          value: function helpInstanceMaterial() {
            var mat = null;
            _matInsInfo.owner = this;

            if (this.sharedMaterial) {
              _matInsInfo.parent = this.sharedMaterial[0];
              mat = new MaterialInstance(_matInsInfo);
            } else {
              _matInsInfo.parent = builtinResMgr.get('ui-graphics-material');
              mat = new MaterialInstance(_matInsInfo);
              mat.recompileShaders({
                USE_LOCAL: true
              });
            }

            this._uiMaterial = _matInsInfo.parent;
            this._uiMaterialIns = mat;

            if (!this.impl) {
              this._flushAssembler();

              this.impl = this._assembler && this._assembler.createImpl(this);
            }
          }
        }, {
          key: "_render",
          value: function _render(render) {
            render.commitModel(this, this.model, this._uiMaterialIns);
          }
        }, {
          key: "_flushAssembler",
          value: function _flushAssembler() {
            var assembler = Graphics.Assembler.getAssembler(this);

            if (this._assembler !== assembler) {
              this._assembler = assembler;
            }
          }
        }, {
          key: "_canRender",
          value: function _canRender() {
            if (!_get(_getPrototypeOf(Graphics.prototype), "_canRender", this).call(this)) {
              return false;
            }

            return !!this.model && this.model.inited;
          }
        }, {
          key: "_attachToScene",
          value: function _attachToScene() {
            var scene = director.root.ui.renderScene;

            if (!this.model || this.model.scene === scene) {
              return;
            }

            if (this.model.scene !== null) {
              this._detachFromScene();
            }

            scene.addModel(this.model);
          }
        }, {
          key: "_detachFromScene",
          value: function _detachFromScene() {
            if (this.model && this.model.scene) {
              this.model.scene.removeModel(this.model);
              this.model.scene = null;
            }
          }
        }]);

        return Graphics;
      }(UIRenderable), _class3$4.LineJoin = LineJoin, _class3$4.LineCap = LineCap, _temp$6), (_applyDecoratedDescriptor(_class2$5.prototype, "lineWidth", [editable], Object.getOwnPropertyDescriptor(_class2$5.prototype, "lineWidth"), _class2$5.prototype), _applyDecoratedDescriptor(_class2$5.prototype, "lineJoin", [_dec5$5, _dec6$5], Object.getOwnPropertyDescriptor(_class2$5.prototype, "lineJoin"), _class2$5.prototype), _applyDecoratedDescriptor(_class2$5.prototype, "lineCap", [_dec7$5, _dec8$5], Object.getOwnPropertyDescriptor(_class2$5.prototype, "lineCap"), _class2$5.prototype), _applyDecoratedDescriptor(_class2$5.prototype, "strokeColor", [_dec9$5], Object.getOwnPropertyDescriptor(_class2$5.prototype, "strokeColor"), _class2$5.prototype), _applyDecoratedDescriptor(_class2$5.prototype, "fillColor", [_dec10$5], Object.getOwnPropertyDescriptor(_class2$5.prototype, "fillColor"), _class2$5.prototype), _applyDecoratedDescriptor(_class2$5.prototype, "miterLimit", [_dec11$5], Object.getOwnPropertyDescriptor(_class2$5.prototype, "miterLimit"), _class2$5.prototype), _applyDecoratedDescriptor(_class2$5.prototype, "color", [override, _dec12$5], Object.getOwnPropertyDescriptor(_class2$5.prototype, "color"), _class2$5.prototype), _descriptor$5 = _applyDecoratedDescriptor(_class2$5.prototype, "_lineWidth", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2$5 = _applyDecoratedDescriptor(_class2$5.prototype, "_strokeColor", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.BLACK.clone();
        }
      }), _descriptor3$5 = _applyDecoratedDescriptor(_class2$5.prototype, "_lineJoin", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return LineJoin.MITER;
        }
      }), _descriptor4$5 = _applyDecoratedDescriptor(_class2$5.prototype, "_lineCap", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return LineCap.BUTT;
        }
      }), _descriptor5$5 = _applyDecoratedDescriptor(_class2$5.prototype, "_fillColor", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.WHITE.clone();
        }
      }), _descriptor6$4 = _applyDecoratedDescriptor(_class2$5.prototype, "_miterLimit", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      })), _class2$5)) || _class$6) || _class$6) || _class$6) || _class$6));

      var _dec$7, _dec2$7, _dec3$7, _dec4$6, _dec5$6, _dec6$6, _dec7$6, _dec8$6, _dec9$6, _dec10$6, _dec11$6, _class$7, _class2$6, _descriptor$6, _descriptor2$6, _descriptor3$6, _class3$5, _temp$7;

      var _worldMatrix$1 = new Mat4();

      var _vec2_temp = new Vec2();

      var _mat4_temp = new Mat4();

      var _circlePoints = [];

      function _calculateCircle(center, radius, segments) {
        _circlePoints.length = 0;
        var anglePerStep = Math.PI * 2 / segments;

        for (var step = 0; step < segments; ++step) {
          _circlePoints.push(new Vec3(radius.x * Math.cos(anglePerStep * step) + center.x, radius.y * Math.sin(anglePerStep * step) + center.y, 0));
        }

        return _circlePoints;
      }
      /**
       * @en The type for mask.
       *
       * @zh 遮罩组件类型。
       */


      var MaskType;

      (function (MaskType) {
        MaskType[MaskType["RECT"] = 0] = "RECT";
        MaskType[MaskType["ELLIPSE"] = 1] = "ELLIPSE";
        MaskType[MaskType["GRAPHICS_STENCIL"] = 2] = "GRAPHICS_STENCIL";
      })(MaskType || (MaskType = {}));

      ccenum(MaskType);
      var SEGMENTS_MIN = 3;
      var SEGMENTS_MAX = 10000;
      /**
       * @en
       * The Mask Component.
       *
       * @zh
       * 遮罩组件。
       */

      var Mask = function (v) { return exports({ Mask: v, MaskComponent: v }), v; }((_dec$7 = ccclass('cc.Mask'), _dec2$7 = help(), _dec3$7 = executionOrder(110), _dec4$6 = menu(), _dec5$6 = type(MaskType), _dec6$6 = displayOrder(), _dec7$6 = tooltip(), _dec8$6 = tooltip(), _dec9$6 = visible(), _dec10$6 = visible(), _dec11$6 = visible(), _dec$7(_class$7 = _dec2$7(_class$7 = _dec3$7(_class$7 = _dec4$6(_class$7 = (_class2$6 = (_temp$7 = _class3$5 = /*#__PURE__*/function (_UIRenderable) {
        _inherits(Mask, _UIRenderable);

        _createClass(Mask, [{
          key: "type",

          /**
           * @en
           * The mask type.
           *
           * @zh
           * 遮罩类型。
           */
          get: function get() {
            return this._type;
          },
          set: function set(value) {
            if (this._type === value) {
              return;
            }

            this._type = value;

            this._updateGraphics();

            if (this._renderData) {
              this.destroyRenderData();
              this._renderData = null;
            }
          }
          /**
           * @en
           * Reverse mask (Not supported Canvas Mode)
           * .
           * @zh
           * 反向遮罩（不支持 Canvas 模式）。
           */

        }, {
          key: "inverted",
          get: function get() {
            return this._inverted;
          },
          set: function set(value) {
            if (legacyCC.game.renderType === Game.RENDER_TYPE_CANVAS) {
              warnID(4202);
              return;
            }

            this._inverted = value;
          }
          /**
           * @en
           * The segments for ellipse mask.
           *
           * TODO: remove segments, not supported by graphics
           * @zh
           * 椭圆遮罩的曲线细分数。
           */

        }, {
          key: "segments",
          get: function get() {
            return this._segments;
          },
          set: function set(value) {
            if (this._segments === value) {
              return;
            }

            this._segments = clamp$1(value, SEGMENTS_MIN, SEGMENTS_MAX);

            this._updateGraphics();
          }
        }, {
          key: "graphics",
          get: function get() {
            return this._graphics;
          }
        }, {
          key: "clearGraphics",
          get: function get() {
            return this._clearGraphics;
          }
        }, {
          key: "dstBlendFactor",
          get: function get() {
            return this._dstBlendFactor;
          },
          set: function set(value) {
            if (this._dstBlendFactor === value) {
              return;
            }

            this._dstBlendFactor = value;

            this._updateBlendFunc();
          }
        }, {
          key: "srcBlendFactor",
          get: function get() {
            return this._srcBlendFactor;
          },
          set: function set(value) {
            if (this._srcBlendFactor === value) {
              return;
            }

            this._srcBlendFactor = value;

            this._updateBlendFunc();
          }
        }, {
          key: "color",
          get: function get() {
            return this._color;
          },
          set: function set(value) {
            if (this._color === value) {
              return;
            }

            this._color.set(value);

            this.markForUpdateRenderData();
          }
        }]);

        function Mask() {
          var _this;

          _classCallCheck(this, Mask);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Mask).call(this));

          _initializerDefineProperty(_this, "_type", _descriptor$6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_inverted", _descriptor2$6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_segments", _descriptor3$6, _assertThisInitialized(_this));

          _this._graphics = null;
          _this._clearGraphics = null;
          _this._instanceMaterialType = InstanceMaterialType.ADD_COLOR;
          _this._uiMaterialDirty = true;
          return _this;
        }

        _createClass(Mask, [{
          key: "onLoad",
          value: function onLoad() {
            this._createGraphics();

            if (this._clearGraphics) {
              this._clearGraphics.onLoad();
            }

            if (this._graphics) {
              this._graphics.onLoad();
            }
          }
          /**
           * @zh
           * 图形内容重塑。
           */

        }, {
          key: "onRestore",
          value: function onRestore() {
            this._createGraphics();

            this._updateGraphics();
          }
        }, {
          key: "onEnable",
          value: function onEnable() {
            _get(_getPrototypeOf(Mask.prototype), "onEnable", this).call(this);

            this._enableGraphics();

            view.on('design-resolution-changed', this._updateClearGraphics, this);
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            _get(_getPrototypeOf(Mask.prototype), "onDisable", this).call(this);

            this._disableGraphics();

            view.off('design-resolution-changed', this._updateClearGraphics);
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            _get(_getPrototypeOf(Mask.prototype), "onDestroy", this).call(this);

            this._removeGraphics();
          }
          /**
           * @zh
           * 根据屏幕坐标计算点击事件。
           *
           * @param cameraPt  屏幕点转换到相机坐标系下的点。
           */

        }, {
          key: "isHit",
          value: function isHit(cameraPt) {
            var uiTrans = this.node._uiProps.uiTransformComp;
            var size = uiTrans.contentSize;
            var w = size.width;
            var h = size.height;
            var testPt = _vec2_temp;
            this.node.getWorldMatrix(_worldMatrix$1);
            Mat4.invert(_mat4_temp, _worldMatrix$1);
            Vec2.transformMat4(testPt, cameraPt, _mat4_temp);
            var ap = uiTrans.anchorPoint;
            testPt.x += ap.x * w;
            testPt.y += ap.y * h;
            var result = false;

            if (this.type === MaskType.RECT || this.type === MaskType.GRAPHICS_STENCIL) {
              result = testPt.x >= 0 && testPt.y >= 0 && testPt.x <= w && testPt.y <= h;
            } else if (this.type === MaskType.ELLIPSE) {
              var rx = w / 2;
              var ry = h / 2;
              var px = testPt.x - 0.5 * w;
              var py = testPt.y - 0.5 * h;
              result = px * px / (rx * rx) + py * py / (ry * ry) < 1;
            }

            if (this._inverted) {
              result = !result;
            }

            return result;
          }
        }, {
          key: "_render",
          value: function _render(render) {
            render.commitComp(this, null, this._assembler);
          }
        }, {
          key: "_postRender",
          value: function _postRender(render) {
            if (!this._postAssembler) {
              return;
            }

            render.commitComp(this, null, this._postAssembler);
          }
        }, {
          key: "_nodeStateChange",
          value: function _nodeStateChange(type) {
            _get(_getPrototypeOf(Mask.prototype), "_nodeStateChange", this).call(this, type);

            this._updateGraphics();
          }
        }, {
          key: "_resolutionChanged",
          value: function _resolutionChanged() {
            this._updateClearGraphics();
          }
        }, {
          key: "_canRender",
          value: function _canRender() {
            if (!_get(_getPrototypeOf(Mask.prototype), "_canRender", this).call(this)) {
              return false;
            }

            return this._clearGraphics !== null && this._graphics !== null;
          }
        }, {
          key: "_flushAssembler",
          value: function _flushAssembler() {
            var assembler = Mask.Assembler.getAssembler(this);
            var posAssembler = Mask.PostAssembler.getAssembler(this);

            if (this._assembler !== assembler) {
              this.destroyRenderData();
              this._assembler = assembler;
            }

            if (this._postAssembler !== posAssembler) {
              this._postAssembler = posAssembler;
            }

            if (!this._renderData) {
              if (this._assembler && this._assembler.createData) {
                this._renderData = this._assembler.createData(this);
                this._renderData.material = this.sharedMaterial;
                this.markForUpdateRenderData();
              }
            }
          }
        }, {
          key: "_createGraphics",
          value: function _createGraphics() {
            if (!this._clearGraphics) {
              var node = new Node('clear-graphics');
              var clearGraphics = this._clearGraphics = node.addComponent(Graphics);
              clearGraphics.delegateSrc = this.node;
              clearGraphics.lineWidth = 0;
              var color = Color.WHITE.clone();
              color.a = 0;
              clearGraphics.fillColor = color;
            }

            if (!this._graphics) {
              var graphics = this._graphics = new Graphics();
              graphics.node = this.node;
              graphics.node.getWorldMatrix();
              graphics.lineWidth = 0;

              var _color = Color.WHITE.clone();

              _color.a = 0;
              graphics.fillColor = _color;
            }
          }
        }, {
          key: "_updateClearGraphics",
          value: function _updateClearGraphics() {
            if (!this._clearGraphics) {
              return;
            }

            var size = visibleRect;

            this._clearGraphics.node.setWorldPosition(size.width / 2, size.height / 2, 0);

            this._clearGraphics.clear();

            this._clearGraphics.rect(-size.width / 2, -size.height / 2, size.width, size.height);

            this._clearGraphics.fill();
          }
        }, {
          key: "_updateGraphics",
          value: function _updateGraphics() {
            if (!this._graphics) {
              return;
            }

            var uiTrans = this.node._uiProps.uiTransformComp;
            var graphics = this._graphics; // Share render data with graphics content

            graphics.clear();
            var size = uiTrans.contentSize;
            var width = size.width;
            var height = size.height;
            var ap = uiTrans.anchorPoint;
            var x = -width * ap.x;
            var y = -height * ap.y;

            if (this._type === MaskType.RECT) {
              graphics.rect(x, y, width, height);
            } else if (this._type === MaskType.ELLIPSE) {
              var center = new Vec3(x + width / 2, y + height / 2, 0);
              var radius = new Vec3(width / 2, height / 2, 0);

              var points = _calculateCircle(center, radius, this._segments);

              for (var i = 0; i < points.length; ++i) {
                var point = points[i];

                if (i === 0) {
                  graphics.moveTo(point.x, point.y);
                } else {
                  graphics.lineTo(point.x, point.y);
                }
              }

              graphics.close();
            }

            graphics.fill();
          }
        }, {
          key: "_enableGraphics",
          value: function _enableGraphics() {
            if (this._clearGraphics) {
              this._clearGraphics.onEnable();

              this._updateClearGraphics();
            }

            if (this._graphics) {
              this._graphics.onEnable();

              this._updateGraphics();
            }
          }
        }, {
          key: "_disableGraphics",
          value: function _disableGraphics() {
            if (this._graphics) {
              this._graphics.onDisable();
            }

            if (this._clearGraphics) {
              this._clearGraphics.onDisable();
            }
          }
        }, {
          key: "_removeGraphics",
          value: function _removeGraphics() {
            if (this._graphics) {
              this._graphics.destroy();
            }

            if (this._clearGraphics) {
              this._clearGraphics.destroy();
            }
          }
        }]);

        return Mask;
      }(UIRenderable), _class3$5.Type = MaskType, _temp$7), (_applyDecoratedDescriptor(_class2$6.prototype, "type", [_dec5$6, _dec6$6, _dec7$6], Object.getOwnPropertyDescriptor(_class2$6.prototype, "type"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "inverted", [_dec8$6], Object.getOwnPropertyDescriptor(_class2$6.prototype, "inverted"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "segments", [editable], Object.getOwnPropertyDescriptor(_class2$6.prototype, "segments"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "dstBlendFactor", [override, _dec9$6], Object.getOwnPropertyDescriptor(_class2$6.prototype, "dstBlendFactor"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "srcBlendFactor", [override, _dec10$6], Object.getOwnPropertyDescriptor(_class2$6.prototype, "srcBlendFactor"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "color", [override, _dec11$6], Object.getOwnPropertyDescriptor(_class2$6.prototype, "color"), _class2$6.prototype), _descriptor$6 = _applyDecoratedDescriptor(_class2$6.prototype, "_type", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return MaskType.RECT;
        }
      }), _descriptor2$6 = _applyDecoratedDescriptor(_class2$6.prototype, "_inverted", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3$6 = _applyDecoratedDescriptor(_class2$6.prototype, "_segments", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 64;
        }
      })), _class2$6)) || _class$7) || _class$7) || _class$7) || _class$7)); // tslint:disable-next-line

      legacyCC.Mask = Mask;

      var _dec$8, _dec2$8, _dec3$8, _dec4$7, _dec5$7, _dec6$7, _dec7$7, _dec8$7, _dec9$7, _dec10$7, _dec11$7, _dec12$6, _dec13$5, _class$8, _class2$7, _descriptor$7, _descriptor2$7, _descriptor3$7, _descriptor4$6, _descriptor5$6, _class3$6, _temp$8;

      /**
       * @en
       * Enum for ProgressBar mode.
       *
       * @zh
       * 进度条模式。
       */
      var Mode;

      (function (Mode) {
        Mode[Mode["HORIZONTAL"] = 0] = "HORIZONTAL";
        Mode[Mode["VERTICAL"] = 1] = "VERTICAL";
        Mode[Mode["FILLED"] = 2] = "FILLED";
      })(Mode || (Mode = {}));

      Enum(Mode);
      /**
       * @en
       * Visual indicator of progress in some operation.
       * Displays a bar to the user representing how far the operation has progressed.
       *
       * @zh
       * 进度条组件，可用于显示加载资源时的进度。
       *
       * @example
       * ```ts
       * // update progressBar
       * update(dt) {
       *     var progress = progressBar.progress;
       *     if (progress > 0) {
       *         progress += dt;
       *     }
       *     else {
       *         progress = 1;
       *     }
       *     progressBar.progress = progress;
       * }
       * ```
       */

      var  // @executeInEditMode
      ProgressBar = function (v) { return exports({ ProgressBar: v, ProgressBarComponent: v }), v; }((_dec$8 = ccclass('cc.ProgressBar'), _dec2$8 = help(), _dec3$8 = executionOrder(110), _dec4$7 = menu(), _dec5$7 = requireComponent(UITransform), _dec6$7 = type(Sprite), _dec7$7 = tooltip(), _dec8$7 = type(Mode), _dec9$7 = tooltip(), _dec10$7 = tooltip(), _dec11$7 = range(), _dec12$6 = tooltip(), _dec13$5 = tooltip(), _dec$8(_class$8 = _dec2$8(_class$8 = _dec3$8(_class$8 = _dec4$7(_class$8 = _dec5$7(_class$8 = (_class2$7 = (_temp$8 = _class3$6 = /*#__PURE__*/function (_Component) {
        _inherits(ProgressBar, _Component);

        function ProgressBar() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, ProgressBar);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ProgressBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "_barSprite", _descriptor$7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_mode", _descriptor2$7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_totalLength", _descriptor3$7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_progress", _descriptor4$6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_reverse", _descriptor5$6, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(ProgressBar, [{
          key: "_initBarSprite",
          value: function _initBarSprite() {
            if (this._barSprite) {
              var entity = this._barSprite.node;

              if (!entity) {
                return;
              }

              var trans = this.node._uiProps.uiTransformComp;
              var nodeSize = trans.contentSize;
              var nodeAnchor = trans.anchorPoint;
              var barSpriteSize = entity._uiProps.uiTransformComp.contentSize; // if (entity.parent === this.node) {
              //     this.node.setContentSize(barSpriteSize);
              // }

              if (this._barSprite.fillType === Sprite.FillType.RADIAL) {
                this._mode = Mode.FILLED;
              }

              if (this._mode === Mode.HORIZONTAL) {
                this.totalLength = barSpriteSize.width;
              } else if (this._mode === Mode.VERTICAL) {
                this.totalLength = barSpriteSize.height;
              } else {
                this.totalLength = this._barSprite.fillRange;
              }

              if (entity.parent === this.node) {
                var x = -nodeSize.width * nodeAnchor.x;
                entity.setPosition(x, 0, 0);
              }
            }
          }
        }, {
          key: "_updateBarStatus",
          value: function _updateBarStatus() {
            if (this._barSprite) {
              var entity = this._barSprite.node;

              if (!entity) {
                return;
              }

              var entTrans = entity._uiProps.uiTransformComp;
              var entityAnchorPoint = entTrans.anchorPoint;
              var entitySize = entTrans.contentSize;
              var entityPosition = entity.getPosition();
              var anchorPoint = new Vec2(0, 0.5);
              var progress = clamp01(this._progress);
              var actualLenth = this._totalLength * progress;
              var finalContentSize = entitySize;
              var totalWidth = 0;
              var totalHeight = 0;

              switch (this._mode) {
                case Mode.HORIZONTAL:
                  if (this._reverse) {
                    anchorPoint = new Vec2(1, 0.5);
                  }

                  finalContentSize = new Size(actualLenth, entitySize.height);
                  totalWidth = this._totalLength;
                  totalHeight = entitySize.height;
                  break;

                case Mode.VERTICAL:
                  if (this._reverse) {
                    anchorPoint = new Vec2(0.5, 1);
                  } else {
                    anchorPoint = new Vec2(0.5, 0);
                  }

                  finalContentSize = new Size(entitySize.width, actualLenth);
                  totalWidth = entitySize.width;
                  totalHeight = this._totalLength;
                  break;
              } // handling filled mode


              if (this._mode === Mode.FILLED) {
                if (this._barSprite.type !== Sprite.Type.FILLED) {
                  warn('ProgressBar FILLED mode only works when barSprite\'s Type is FILLED!');
                } else {
                  if (this._reverse) {
                    actualLenth = actualLenth * -1;
                  }

                  this._barSprite.fillRange = actualLenth;
                }
              } else {
                if (this._barSprite.type !== Sprite.Type.FILLED) {
                  var anchorOffsetX = anchorPoint.x - entityAnchorPoint.x;
                  var anchorOffsetY = anchorPoint.y - entityAnchorPoint.y;
                  var finalPosition = new Vec3(totalWidth * anchorOffsetX, totalHeight * anchorOffsetY, 0);
                  entity.setPosition(entityPosition.x + finalPosition.x, entityPosition.y + finalPosition.y, entityPosition.z);
                  entTrans.setAnchorPoint(anchorPoint);
                  entTrans.setContentSize(finalContentSize);
                } else {
                  warn('ProgressBar non-FILLED mode only works when barSprite\'s Type is non-FILLED!');
                }
              }
            }
          }
        }, {
          key: "barSprite",

          /**
           * @en
           * The targeted Sprite which will be changed progressively.
           *
           * @zh
           * 用来显示进度条比例的 Sprite 对象。
           */
          get: function get() {
            return this._barSprite;
          },
          set: function set(value) {
            if (this._barSprite === value) {
              return;
            }

            this._barSprite = value;

            this._initBarSprite();
          }
          /**
           * @en
           * The progress mode, there are two modes supported now: horizontal and vertical.
           *
           * @zh
           * 进度条的模式。
           */

        }, {
          key: "mode",
          get: function get() {
            return this._mode;
          },
          set: function set(value) {
            if (this._mode === value) {
              return;
            }

            this._mode = value;

            if (this._barSprite) {
              var entity = this._barSprite.node;

              if (!entity) {
                return;
              }

              var entitySize = entity._uiProps.uiTransformComp.contentSize;

              if (this._mode === Mode.HORIZONTAL) {
                this.totalLength = entitySize.width;
              } else if (this._mode === Mode.VERTICAL) {
                this.totalLength = entitySize.height;
              } else if (this._mode === Mode.FILLED) {
                this.totalLength = this._barSprite.fillRange;
              }
            }
          }
          /**
           * @en
           * The total width or height of the bar sprite.
           *
           * @zh
           * 进度条实际的总长度。
           */

        }, {
          key: "totalLength",
          get: function get() {
            return this._totalLength;
          },
          set: function set(value) {
            if (this._mode === Mode.FILLED) {
              value = clamp01(value);
            }

            this._totalLength = value;

            this._updateBarStatus();
          }
          /**
           * @en
           * The current progress of the bar sprite. The valid value is between 0-1.
           *
           * @zh
           * 当前进度值，该数值的区间是 0-1 之间。
           */

        }, {
          key: "progress",
          get: function get() {
            return this._progress;
          },
          set: function set(value) {
            if (this._progress === value) {
              return;
            }

            this._progress = value;

            this._updateBarStatus();
          }
          /**
           * @en
           * Whether reverse the progress direction of the bar sprite.
           *
           * @zh
           * 进度条是否进行反方向变化。
           */

        }, {
          key: "reverse",
          get: function get() {
            return this._reverse;
          },
          set: function set(value) {
            if (this._reverse === value) {
              return;
            }

            this._reverse = value;

            if (this._barSprite) {
              this._barSprite.fillStart = 1 - this._barSprite.fillStart;
            }

            this._updateBarStatus();
          }
        }]);

        return ProgressBar;
      }(Component), _class3$6.Mode = Mode, _temp$8), (_applyDecoratedDescriptor(_class2$7.prototype, "barSprite", [_dec6$7, _dec7$7], Object.getOwnPropertyDescriptor(_class2$7.prototype, "barSprite"), _class2$7.prototype), _applyDecoratedDescriptor(_class2$7.prototype, "mode", [_dec8$7, _dec9$7], Object.getOwnPropertyDescriptor(_class2$7.prototype, "mode"), _class2$7.prototype), _applyDecoratedDescriptor(_class2$7.prototype, "totalLength", [_dec10$7], Object.getOwnPropertyDescriptor(_class2$7.prototype, "totalLength"), _class2$7.prototype), _applyDecoratedDescriptor(_class2$7.prototype, "progress", [_dec11$7, slide, _dec12$6], Object.getOwnPropertyDescriptor(_class2$7.prototype, "progress"), _class2$7.prototype), _applyDecoratedDescriptor(_class2$7.prototype, "reverse", [_dec13$5], Object.getOwnPropertyDescriptor(_class2$7.prototype, "reverse"), _class2$7.prototype), _descriptor$7 = _applyDecoratedDescriptor(_class2$7.prototype, "_barSprite", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$7 = _applyDecoratedDescriptor(_class2$7.prototype, "_mode", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Mode.HORIZONTAL;
        }
      }), _descriptor3$7 = _applyDecoratedDescriptor(_class2$7.prototype, "_totalLength", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor4$6 = _applyDecoratedDescriptor(_class2$7.prototype, "_progress", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor5$6 = _applyDecoratedDescriptor(_class2$7.prototype, "_reverse", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2$7)) || _class$8) || _class$8) || _class$8) || _class$8) || _class$8));

      var _dec$9, _dec2$9, _dec3$9, _dec4$8, _dec5$8, _dec6$8, _dec7$8, _class$9, _class2$8, _descriptor$8, _descriptor2$8, _temp$9;
      var LabelOutline = function (v) { return exports({ LabelOutline: v, LabelOutlineComponent: v }), v; }((_dec$9 = ccclass('cc.LabelOutline'), _dec2$9 = help(), _dec3$9 = executionOrder(110), _dec4$8 = menu(), _dec5$8 = requireComponent(Label), _dec6$8 = tooltip(), _dec7$8 = tooltip(), _dec$9(_class$9 = _dec2$9(_class$9 = _dec3$9(_class$9 = _dec4$8(_class$9 = _dec5$8(_class$9 = executeInEditMode(_class$9 = (_class2$8 = (_temp$9 = /*#__PURE__*/function (_Component) {
        _inherits(LabelOutline, _Component);

        function LabelOutline() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, LabelOutline);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LabelOutline)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "_color", _descriptor$8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_width", _descriptor2$8, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(LabelOutline, [{
          key: "onEnable",
          value: function onEnable() {
            this._updateRenderData();
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            this._updateRenderData();
          }
        }, {
          key: "_updateRenderData",
          value: function _updateRenderData() {
            var label = this.node.getComponent(Label);

            if (label) {
              label.updateRenderData(true);
            }
          }
        }, {
          key: "color",

          /**
           * @en
           * Outline color.
           *
           * @zh
           * 改变描边的颜色。
           *
           * @example
           * ```ts
           * import { Color } from 'cc';
           * outline.color = new Color(0.5, 0.3, 0.7, 1.0);
           * ```
           */
          get: function get() {
            return this._color;
          },
          set: function set(value) {
            if (this._color === value) {
              return;
            }

            this._color.set(value);

            this._updateRenderData();
          }
          /**
           * @en
           * Change the outline width.
           *
           * @zh
           * 改变描边的宽度。
           *
           * @example
           * ```ts
           * outline.width = 3;
           * ```
           */

        }, {
          key: "width",
          get: function get() {
            return this._width;
          },
          set: function set(value) {
            if (this._width === value) {
              return;
            }

            this._width = value;

            this._updateRenderData();
          }
        }]);

        return LabelOutline;
      }(Component), _temp$9), (_descriptor$8 = _applyDecoratedDescriptor(_class2$8.prototype, "_color", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(0, 0, 0, 255);
        }
      }), _descriptor2$8 = _applyDecoratedDescriptor(_class2$8.prototype, "_width", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _applyDecoratedDescriptor(_class2$8.prototype, "color", [_dec6$8], Object.getOwnPropertyDescriptor(_class2$8.prototype, "color"), _class2$8.prototype), _applyDecoratedDescriptor(_class2$8.prototype, "width", [_dec7$8], Object.getOwnPropertyDescriptor(_class2$8.prototype, "width"), _class2$8.prototype)), _class2$8)) || _class$9) || _class$9) || _class$9) || _class$9) || _class$9) || _class$9));

      var _dec$a, _dec2$a, _dec3$a, _dec4$9, _dec5$9, _dec6$9, _dec7$9, _dec8$8, _dec9$8, _dec10$8, _dec11$8, _dec12$7, _dec13$6, _dec14$5, _dec15$5, _dec16$4, _dec17$4, _dec18$4, _dec19$4, _class$a, _class2$9, _descriptor$9, _descriptor2$9, _descriptor3$8, _descriptor4$7, _descriptor5$7, _descriptor6$5, _descriptor7$4, _descriptor8$4, _descriptor9$4, _descriptor10$4, _descriptor11$4, _descriptor12$4, _class3$7, _temp$a;

      var _htmlTextParser = new HtmlTextParser();

      var RichTextChildName = 'RICHTEXT_CHILD';
      var RichTextChildImageName = 'RICHTEXT_Image_CHILD';
      /**
       * 富文本池。<br/>
       */

      var pool = new Pool(function (labelSeg) {

        if (!legacyCC.isValid(labelSeg.node)) {
          return false;
        } else {
          var outline = labelSeg.node.getComponent(LabelOutline);

          if (outline) {
            outline.width = 0;
          }
        }

        return true;
      }, 20); // @ts-ignore

      pool.get = function (str, richtext) {
        var labelSeg = this._get();

        if (!labelSeg) {
          labelSeg = {
            node: new PrivateNode(RichTextChildName),
            comp: null,
            lineCount: 0,
            styleIndex: 0,
            imageOffset: '',
            clickParam: '',
            clickHandler: ''
          };
        }

        var labelNode = labelSeg.node;

        if (!labelNode) {
          labelNode = new PrivateNode(RichTextChildName);
        }

        var label = labelNode.getComponent(Label);

        if (!label) {
          label = labelNode.addComponent(Label);
        }

        label.string = str;
        label.horizontalAlign = HorizontalTextAlignment.LEFT;
        label.verticalAlign = VerticalTextAlignment.TOP; // label._forceUseCanvas = true;

        labelNode.setPosition(0, 0, 0);
        var trans = labelNode._uiProps.uiTransformComp;
        trans.setAnchorPoint(0.5, 0.5);
        var labelObj = {
          node: labelNode,
          comp: label,
          lineCount: 0,
          styleIndex: 0,
          imageOffset: '',
          clickParam: '',
          clickHandler: ''
        };
        return labelObj;
      };

      var RichText = function (v) { return exports({ RichText: v, RichTextComponent: v }), v; }((_dec$a = ccclass('cc.RichText'), _dec2$a = help(), _dec3$a = executionOrder(110), _dec4$9 = menu(), _dec5$9 = tooltip(), _dec6$9 = type(HorizontalTextAlignment), _dec7$9 = tooltip(), _dec8$8 = tooltip(), _dec9$8 = tooltip(), _dec10$8 = type(Font), _dec11$8 = tooltip(), _dec12$7 = tooltip(), _dec13$6 = type(CacheMode), _dec14$5 = tooltip(), _dec15$5 = tooltip(), _dec16$4 = tooltip(), _dec17$4 = type(SpriteAtlas), _dec18$4 = tooltip(), _dec19$4 = tooltip(), _dec$a(_class$a = _dec2$a(_class$a = _dec3$a(_class$a = _dec4$9(_class$a = executeInEditMode(_class$a = (_class2$9 = (_temp$a = _class3$7 = /*#__PURE__*/function (_UIComponent) {
        _inherits(RichText, _UIComponent);

        _createClass(RichText, [{
          key: "string",

          /**
           * @en
           * Content string of RichText.
           *
           * @zh
           * 富文本显示的文本内容。
           */
          get: function get() {
            return this._string;
          },
          set: function set(value) {
            if (this._string === value) {
              return;
            }

            this._string = value;

            this._updateRichTextStatus();
          }
          /**
           * @en
           * Horizontal Alignment of each line in RichText.
           *
           * @zh
           * 文本内容的水平对齐方式。
           */

        }, {
          key: "horizontalAlign",
          get: function get() {
            return this._horizontalAlign;
          },
          set: function set(value) {
            if (this.horizontalAlign === value) {
              return;
            }

            this._horizontalAlign = value;
            this._layoutDirty = true;

            this._updateRichTextStatus();
          }
          /**
           * @en
           * Font size of RichText.
           *
           * @zh
           * 富文本字体大小。
           */

        }, {
          key: "fontSize",
          get: function get() {
            return this._fontSize;
          },
          set: function set(value) {
            if (this._fontSize === value) {
              return;
            }

            this._fontSize = value;
            this._layoutDirty = true;

            this._updateRichTextStatus();
          }
          /**
           * @en
           * Custom System font of RichText
           *
           * @zh
           * 富文本定制系统字体
           */

        }, {
          key: "fontFamily",
          get: function get() {
            return this._fontFamily;
          },
          set: function set(value) {
            if (this._fontFamily === value) return;
            this._fontFamily = value;
            this._layoutDirty = true;

            this._updateRichTextStatus();
          }
          /**
           * @en
           * Custom System font of RichText.
           *
           * @zh
           * 富文本定制字体。
           */

        }, {
          key: "font",
          get: function get() {
            return this._font;
          },
          set: function set(value) {
            if (this._font === value) {
              return;
            }

            this._font = value;
            this._layoutDirty = true;

            if (this._font) {

              this.useSystemFont = false;

              this._onTTFLoaded();
            } else {
              this.useSystemFont = true;
            }

            this._updateRichTextStatus();
          }
          /**
           * @en
           * Whether use system font name or not.
           *
           * @zh
           * 是否使用系统字体。
           */

        }, {
          key: "useSystemFont",
          get: function get() {
            return this._isSystemFontUsed;
          },
          set: function set(value) {
            if (this._isSystemFontUsed === value) {
              return;
            }

            this._isSystemFontUsed = value;

            this._layoutDirty = true;

            this._updateRichTextStatus();
          }
          /**
           * @en
           * The cache mode of label. This mode only supports system fonts.
           *
           * @zh
           * 文本缓存模式, 该模式只支持系统字体。
           */

        }, {
          key: "cacheMode",
          get: function get() {
            return this._cacheMode;
          },
          set: function set(value) {
            if (this._cacheMode === value) {
              return;
            }

            this._cacheMode = value;

            this._updateRichTextStatus();
          }
          /**
           * @en
           * The maximize width of the RichText.
           *
           * @zh
           * 富文本的最大宽度。
           */

        }, {
          key: "maxWidth",
          get: function get() {
            return this._maxWidth;
          },
          set: function set(value) {
            if (this._maxWidth === value) {
              return;
            }

            this._maxWidth = value;
            this._layoutDirty = true;

            this._updateRichTextStatus();
          }
          /**
           * @en
           * Line Height of RichText.
           *
           * @zh
           * 富文本行高。
           */

        }, {
          key: "lineHeight",
          get: function get() {
            return this._lineHeight;
          },
          set: function set(value) {
            if (this._lineHeight === value) {
              return;
            }

            this._lineHeight = value;
            this._layoutDirty = true;

            this._updateRichTextStatus();
          }
          /**
           * @en
           * The image atlas for the img tag. For each src value in the img tag, there should be a valid spriteFrame in the image atlas.
           *
           * @zh
           * 对于 img 标签里面的 src 属性名称，都需要在 imageAtlas 里面找到一个有效的 spriteFrame，否则 img tag 会判定为无效。
           */

        }, {
          key: "imageAtlas",
          get: function get() {
            return this._imageAtlas;
          },
          set: function set(value) {
            if (this._imageAtlas === value) {
              return;
            }

            this._imageAtlas = value;
            this._layoutDirty = true;

            this._updateRichTextStatus();
          }
          /**
           * @en
           * Once checked, the RichText will block all input events (mouse and touch) within
           * the bounding box of the node, preventing the input from penetrating into the underlying node.
           *
           * @zh
           * 选中此选项后，RichText 将阻止节点边界框中的所有输入事件（鼠标和触摸），从而防止输入事件穿透到底层节点。
           */

        }, {
          key: "handleTouchEvent",
          get: function get() {
            return this._handleTouchEvent;
          },
          set: function set(value) {
            if (this._handleTouchEvent === value) {
              return;
            }

            this._handleTouchEvent = value;

            if (this.enabledInHierarchy) {
              this.handleTouchEvent ? this._addEventListeners() : this._removeEventListeners();
            }
          }
        }]);

        function RichText() {
          var _this;

          _classCallCheck(this, RichText);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(RichText).call(this));

          _initializerDefineProperty(_this, "_lineHeight", _descriptor$9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_string", _descriptor2$9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_horizontalAlign", _descriptor3$8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_fontSize", _descriptor4$7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_maxWidth", _descriptor5$7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_fontFamily", _descriptor6$5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_font", _descriptor7$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isSystemFontUsed", _descriptor8$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_userDefinedFont", _descriptor9$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_cacheMode", _descriptor10$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_imageAtlas", _descriptor11$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_handleTouchEvent", _descriptor12$4, _assertThisInitialized(_this));

          _this._textArray = [];
          _this._labelSegments = [];
          _this._labelSegmentsCache = [];
          _this._linesWidth = [];
          _this._lineCount = 1;
          _this._labelWidth = 0;
          _this._labelHeight = 0;
          _this._layoutDirty = true;
          _this._lineOffsetX = 0;
          _this._updateRichTextStatus = void 0;

          _this._updateRichTextStatus = _this._updateRichText;
          return _this;
        }

        _createClass(RichText, [{
          key: "onEnable",
          value: function onEnable() {
            if (this.handleTouchEvent) {
              this._addEventListeners();
            }

            this._updateRichText();

            this._activateChildren(true);
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            if (this.handleTouchEvent) {
              this._removeEventListeners();
            }

            this._activateChildren(false);
          }
        }, {
          key: "start",
          value: function start() {
            this._onTTFLoaded();

            this.node.on(Node.EventType.ANCHOR_CHANGED, this._updateRichTextPosition, this);
          }
        }, {
          key: "onRestore",
          value: function onRestore() {
            {
              return;
            } // TODO: refine undo/redo system
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            for (var _iterator = _createForOfIteratorHelperLoose(this._labelSegments), _step; !(_step = _iterator()).done;) {
              var seg = _step.value;
              seg.node.removeFromParent();
              pool.put(seg);
            }

            this.node.off(Node.EventType.ANCHOR_CHANGED, this._updateRichTextPosition, this);
          }
        }, {
          key: "_addEventListeners",
          value: function _addEventListeners() {
            this.node.on(Node.EventType.TOUCH_END, this._onTouchEnded, this);
          }
        }, {
          key: "_removeEventListeners",
          value: function _removeEventListeners() {
            this.node.off(Node.EventType.TOUCH_END, this._onTouchEnded, this);
          }
        }, {
          key: "_updateLabelSegmentTextAttributes",
          value: function _updateLabelSegmentTextAttributes() {
            var _this2 = this;

            this._labelSegments.forEach(function (item) {
              _this2._applyTextAttribute(item);
            });
          }
        }, {
          key: "_createFontLabel",
          value: function _createFontLabel(str) {
            // @ts-ignore
            return pool.get(str, this);
          }
        }, {
          key: "_onTTFLoaded",
          value: function _onTTFLoaded() {
            if (this._font instanceof TTFFont) {
              if (this._font._nativeAsset) {
                this._layoutDirty = true;

                this._updateRichText();
              } else {
                var self = this;
                loader.load(this._font.nativeUrl, function (err, fontFamily) {
                  self._layoutDirty = true;

                  self._updateRichText();
                });
              }
            } else {
              this._layoutDirty = true;

              this._updateRichText();
            }
          }
        }, {
          key: "_measureText",
          value: function _measureText(styleIndex, string) {
            var self = this;

            var func = function func(s) {
              var label;

              if (self._labelSegmentsCache.length === 0) {
                label = self._createFontLabel(s);

                self._labelSegmentsCache.push(label);
              } else {
                label = self._labelSegmentsCache[0];
                label.node.getComponent(Label).string = s;
              }

              label.styleIndex = styleIndex;

              self._applyTextAttribute(label);

              var labelSize = label.node._uiProps.uiTransformComp.contentSize;
              return labelSize.width;
            };

            if (string) {
              return func(string);
            } else {
              return func;
            }
          }
        }, {
          key: "_onTouchEnded",
          value: function _onTouchEnded(event) {
            var _this3 = this;

            var components = this.node.getComponents(Component);

            var _loop = function _loop() {
              var seg = _step2.value;
              var clickHandler = seg.clickHandler;
              var clickParam = seg.clickParam;

              if (clickHandler && _this3._containsTouchLocation(seg, event.touch.getUILocation())) {
                components.forEach(function (component) {
                  var func = component[clickHandler];

                  if (component.enabledInHierarchy && func) {
                    func.call(component, event, clickParam);
                  }
                });
                event.propagationStopped = true;
              }
            };

            for (var _iterator2 = _createForOfIteratorHelperLoose(this._labelSegments), _step2; !(_step2 = _iterator2()).done;) {
              _loop();
            }
          }
        }, {
          key: "_containsTouchLocation",
          value: function _containsTouchLocation(label, point) {
            var comp = label.node.getComponent(UITransform);

            if (!comp) {
              return false;
            }

            var myRect = comp.getBoundingBoxToWorld();
            return myRect.contains(point);
          }
        }, {
          key: "_resetState",
          value: function _resetState() {
            var _this4 = this;

            var children = this.node.children;

            var _loop2 = function _loop2(i) {
              var child = children[i];

              if (child.name === RichTextChildName || child.name === RichTextChildImageName) {
                if (child.parent === _this4.node) {
                  child.parent = null;
                } else {
                  // In case child.parent !== this.node, child cannot be removed from children
                  children.splice(i, 1);
                }

                if (child.name === RichTextChildName) {
                  var index = _this4._labelSegments.findIndex(function (seg) {
                    return seg.node === child;
                  });

                  if (index !== -1) {
                    pool.put(_this4._labelSegments[index]);
                  }
                }
              }
            };

            for (var i = children.length - 1; i >= 0; i--) {
              _loop2(i);
            }

            this._labelSegments.length = 0;
            this._labelSegmentsCache.length = 0;
            this._linesWidth.length = 0;
            this._lineOffsetX = 0;
            this._lineCount = 1;
            this._labelWidth = 0;
            this._labelHeight = 0;
            this._layoutDirty = true;
          }
        }, {
          key: "_activateChildren",
          value: function _activateChildren(active) {
            for (var i = this.node.children.length - 1; i >= 0; i--) {
              var child = this.node.children[i];

              if (child.name === RichTextChildName || child.name === RichTextChildImageName) {
                child.active = active;
              }
            }
          }
        }, {
          key: "_addLabelSegment",
          value: function _addLabelSegment(stringToken, styleIndex) {
            var labelSegment;

            if (this._labelSegmentsCache.length === 0) {
              labelSegment = this._createFontLabel(stringToken);
            } else {
              labelSegment = this._labelSegmentsCache.pop();
              var label = labelSegment.node.getComponent(Label);

              if (label) {
                label.string = stringToken;
              }
            }

            labelSegment.styleIndex = styleIndex;
            labelSegment.lineCount = this._lineCount;

            labelSegment.node._uiProps.uiTransformComp.setAnchorPoint(0, 0);

            this._applyTextAttribute(labelSegment); // @ts-ignore


            this.node.addChild(labelSegment.node);

            this._labelSegments.push(labelSegment);

            return labelSegment;
          }
        }, {
          key: "_updateRichTextWithMaxWidth",
          value: function _updateRichTextWithMaxWidth(labelString, labelWidth, styleIndex) {
            var fragmentWidth = labelWidth;
            var labelSegment;

            if (this._lineOffsetX > 0 && fragmentWidth + this._lineOffsetX > this._maxWidth) {
              // concat previous line
              var checkStartIndex = 0;

              while (this._lineOffsetX <= this._maxWidth) {
                var checkEndIndex = this._getFirstWordLen(labelString, checkStartIndex, labelString.length);

                var checkString = labelString.substr(checkStartIndex, checkEndIndex);

                var checkStringWidth = this._measureText(styleIndex, checkString);

                if (this._lineOffsetX + checkStringWidth <= this._maxWidth) {
                  this._lineOffsetX += checkStringWidth;
                  checkStartIndex += checkEndIndex;
                } else {
                  if (checkStartIndex > 0) {
                    var remainingString = labelString.substr(0, checkStartIndex);

                    this._addLabelSegment(remainingString, styleIndex);

                    labelString = labelString.substr(checkStartIndex, labelString.length);
                    fragmentWidth = this._measureText(styleIndex, labelString);
                  }

                  this._updateLineInfo();

                  break;
                }
              }
            }

            if (fragmentWidth > this._maxWidth) {
              var fragments = fragmentText(labelString, fragmentWidth, this._maxWidth, this._measureText(styleIndex));

              for (var k = 0; k < fragments.length; ++k) {
                var splitString = fragments[k];
                labelSegment = this._addLabelSegment(splitString, styleIndex);
                var labelSize = labelSegment.node._uiProps.uiTransformComp.contentSize;
                this._lineOffsetX += labelSize.width;

                if (fragments.length > 1 && k < fragments.length - 1) {
                  this._updateLineInfo();
                }
              }
            } else {
              this._lineOffsetX += fragmentWidth;

              this._addLabelSegment(labelString, styleIndex);
            }
          }
        }, {
          key: "_isLastComponentCR",
          value: function _isLastComponentCR(stringToken) {
            return stringToken.length - 1 === stringToken.lastIndexOf('\n');
          }
        }, {
          key: "_updateLineInfo",
          value: function _updateLineInfo() {
            this._linesWidth.push(this._lineOffsetX);

            this._lineOffsetX = 0;
            this._lineCount++;
          }
        }, {
          key: "_needsUpdateTextLayout",
          value: function _needsUpdateTextLayout(newTextArray) {
            if (this._layoutDirty || !this._textArray || !newTextArray) {
              return true;
            }

            if (this._textArray.length !== newTextArray.length) {
              return true;
            }

            for (var i = 0; i < this._textArray.length; i++) {
              var oldItem = this._textArray[i];
              var newItem = newTextArray[i];

              if (oldItem.text !== newItem.text) {
                return true;
              } else {
                var oldStyle = oldItem.style,
                    newStyle = newItem.style;

                if (oldStyle) {
                  if (newStyle) {
                    if (!!newStyle.outline !== !!oldStyle.outline) {
                      return true;
                    }

                    if (oldStyle.size !== newStyle.size || oldStyle.italic !== newStyle.italic || oldStyle.isImage !== newStyle.isImage) {
                      return true;
                    }

                    if (oldStyle.src !== newStyle.src || oldStyle.imageAlign !== newStyle.imageAlign || oldStyle.imageHeight !== newStyle.imageHeight || oldStyle.imageWidth !== newStyle.imageWidth || oldStyle.imageOffset !== newStyle.imageOffset) {
                      return true;
                    }
                  } else {
                    if (oldStyle.size || oldStyle.italic || oldStyle.isImage || oldStyle.outline) {
                      return true;
                    }
                  }
                } else {
                  if (newStyle) {
                    if (newStyle.size || newStyle.italic || newStyle.isImage || newStyle.outline) {
                      return true;
                    }
                  }
                }
              }
            }

            return false;
          }
        }, {
          key: "_addRichTextImageElement",
          value: function _addRichTextImageElement(richTextElement) {
            if (!richTextElement.style) {
              return;
            }

            var style = richTextElement.style;
            var spriteFrameName = style.src;

            var spriteFrame = this._imageAtlas && spriteFrameName && this._imageAtlas.getSpriteFrame(spriteFrameName);

            if (!spriteFrame) {
              warnID(4400);
            } else {
              var spriteNode = new PrivateNode(RichTextChildImageName);
              var sprite = spriteNode.addComponent(Sprite);

              switch (style.imageAlign) {
                case 'top':
                  spriteNode._uiProps.uiTransformComp.setAnchorPoint(0, 1);

                  break;

                case 'center':
                  spriteNode._uiProps.uiTransformComp.setAnchorPoint(0, 0.5);

                  break;

                default:
                  spriteNode._uiProps.uiTransformComp.setAnchorPoint(0, 0);

                  break;
              }

              sprite.type = Sprite.Type.SLICED;
              sprite.sizeMode = Sprite.SizeMode.CUSTOM; // Why need to set spriteFrame before can add child ??

              sprite.spriteFrame = spriteFrame; // @ts-ignore

              this.node.addChild(spriteNode);
              var obj = {
                node: spriteNode,
                comp: sprite,
                lineCount: 0,
                styleIndex: 0,
                imageOffset: style.imageOffset || '',
                clickParam: '',
                clickHandler: ''
              };

              this._labelSegments.push(obj);

              var spriteRect = spriteFrame.rect.clone();
              var scaleFactor = 1;
              var spriteWidth = spriteRect.width;
              var spriteHeight = spriteRect.height;
              var expectWidth = style.imageWidth || 0;
              var expectHeight = style.imageHeight || 0;

              if (expectHeight > 0) {
                scaleFactor = expectHeight / spriteHeight;
                spriteWidth = spriteWidth * scaleFactor;
                spriteHeight = spriteHeight * scaleFactor;
              } else {
                scaleFactor = this._lineHeight / spriteHeight;
                spriteWidth = spriteWidth * scaleFactor;
                spriteHeight = spriteHeight * scaleFactor;
              }

              if (expectWidth > 0) {
                spriteWidth = expectWidth;
              }

              if (this._maxWidth > 0) {
                if (this._lineOffsetX + spriteWidth > this._maxWidth) {
                  this._updateLineInfo();
                }

                this._lineOffsetX += spriteWidth;
              } else {
                this._lineOffsetX += spriteWidth;

                if (this._lineOffsetX > this._labelWidth) {
                  this._labelWidth = this._lineOffsetX;
                }
              }

              spriteNode._uiProps.uiTransformComp.setContentSize(spriteWidth, spriteHeight);

              obj.lineCount = this._lineCount;
              obj.clickHandler = '';
              obj.clickParam = '';
              var event = style.event;

              if (event) {
                obj.clickHandler = event['click'];
                obj.clickParam = event['param'];
              }
            }
          }
        }, {
          key: "_updateRichText",
          value: function _updateRichText() {
            if (!this.enabledInHierarchy) {
              return;
            }

            var newTextArray = _htmlTextParser.parse(this._string);

            if (!this._needsUpdateTextLayout(newTextArray)) {
              this._textArray = newTextArray.slice();

              this._updateLabelSegmentTextAttributes();

              return;
            }

            this._textArray = newTextArray.slice();

            this._resetState();

            var lastEmptyLine = false;
            var label;

            for (var i = 0; i < this._textArray.length; ++i) {
              var richTextElement = this._textArray[i];
              var text = richTextElement.text;

              if (text === undefined) {
                continue;
              } // handle <br/> <img /> tag


              if (text === '') {
                if (richTextElement.style && richTextElement.style.isNewLine) {
                  this._updateLineInfo();

                  continue;
                }

                if (richTextElement.style && richTextElement.style.isImage && this._imageAtlas) {
                  this._addRichTextImageElement(richTextElement);

                  continue;
                }
              }

              var multilineTexts = text.split('\n');

              for (var j = 0; j < multilineTexts.length; ++j) {
                var labelString = multilineTexts[j];

                if (labelString === '') {
                  // for continues \n
                  if (this._isLastComponentCR(text) && j === multilineTexts.length - 1) {
                    continue;
                  }

                  this._updateLineInfo();

                  lastEmptyLine = true;
                  continue;
                }

                lastEmptyLine = false;

                if (this._maxWidth > 0) {
                  var labelWidth = this._measureText(i, labelString);

                  this._updateRichTextWithMaxWidth(labelString, labelWidth, i);

                  if (multilineTexts.length > 1 && j < multilineTexts.length - 1) {
                    this._updateLineInfo();
                  }
                } else {
                  label = this._addLabelSegment(labelString, i);
                  this._lineOffsetX += label.node._uiProps.uiTransformComp.width;

                  if (this._lineOffsetX > this._labelWidth) {
                    this._labelWidth = this._lineOffsetX;
                  }

                  if (multilineTexts.length > 1 && j < multilineTexts.length - 1) {
                    this._updateLineInfo();
                  }
                }
              }
            }

            if (!lastEmptyLine) {
              this._linesWidth.push(this._lineOffsetX);
            }

            if (this._maxWidth > 0) {
              this._labelWidth = this._maxWidth;
            }

            this._labelHeight = (this._lineCount + BASELINE_RATIO) * this._lineHeight; // trigger "size-changed" event

            this.node._uiProps.uiTransformComp.setContentSize(this._labelWidth, this._labelHeight);

            this._updateRichTextPosition();

            this._layoutDirty = false;
          }
        }, {
          key: "_getFirstWordLen",
          value: function _getFirstWordLen(text, startIndex, textLen) {
            var character = text.charAt(startIndex);

            if (isUnicodeCJK(character) || isUnicodeSpace(character)) {
              return 1;
            }

            var len = 1;

            for (var index = startIndex + 1; index < textLen; ++index) {
              character = text.charAt(index);

              if (isUnicodeSpace(character) || isUnicodeCJK(character)) {
                break;
              }

              len++;
            }

            return len;
          }
        }, {
          key: "_updateRichTextPosition",
          value: function _updateRichTextPosition() {
            var nextTokenX = 0;
            var nextLineIndex = 1;
            var totalLineCount = this._lineCount;
            var trans = this.node._uiProps.uiTransformComp;
            var anchorX = trans.anchorX;
            var anchorY = trans.anchorY;

            for (var i = 0; i < this._labelSegments.length; ++i) {
              var segment = this._labelSegments[i];
              var lineCount = segment.lineCount;

              if (lineCount > nextLineIndex) {
                nextTokenX = 0;
                nextLineIndex = lineCount;
              }

              var lineOffsetX = this._labelWidth * (this._horizontalAlign * 0.5 - anchorX);

              switch (this._horizontalAlign) {
                case HorizontalTextAlignment.LEFT:
                  break;

                case HorizontalTextAlignment.CENTER:
                  lineOffsetX -= this._linesWidth[lineCount - 1] / 2;
                  break;

                case HorizontalTextAlignment.RIGHT:
                  lineOffsetX -= this._linesWidth[lineCount - 1];
                  break;
              }

              var pos = segment.node.position;
              segment.node.setPosition(nextTokenX + lineOffsetX, this._lineHeight * (totalLineCount - lineCount) - this._labelHeight * anchorY, pos.z);

              if (lineCount === nextLineIndex) {
                nextTokenX += segment.node._uiProps.uiTransformComp.width;
              }

              var sprite = segment.node.getComponent(Sprite);

              if (sprite) {
                var position = segment.node.position.clone(); // adjust img align (from <img align=top|center|bottom>)

                var lineHeightSet = this._lineHeight;
                var lineHeightReal = this._lineHeight * (1 + BASELINE_RATIO); //single line node height

                switch (segment.node._uiProps.uiTransformComp.anchorY) {
                  case 1:
                    position.y += lineHeightSet + (lineHeightReal - lineHeightSet) / 2;
                    break;

                  case 0.5:
                    position.y += lineHeightReal / 2;
                    break;

                  default:
                    position.y += (lineHeightReal - lineHeightSet) / 2;
                    break;
                } // adjust img offset (from <img offset=12|12,34>)


                if (segment.imageOffset) {
                  var offsets = segment.imageOffset.split(',');

                  if (offsets.length === 1 && offsets[0]) {
                    var offsetY = parseFloat(offsets[0]);
                    if (Number.isInteger(offsetY)) position.y += offsetY;
                  } else if (offsets.length === 2) {
                    var offsetX = parseFloat(offsets[0]);

                    var _offsetY = parseFloat(offsets[1]);

                    if (Number.isInteger(offsetX)) position.x += offsetX;
                    if (Number.isInteger(_offsetY)) position.y += _offsetY;
                  }
                }

                segment.node.position = position;
              } //adjust y for label with outline


              var outline = segment.node.getComponent(LabelOutline);

              if (outline) {
                var _position = segment.node.position.clone();

                _position.y = _position.y - outline.width;
                segment.node.position = _position;
              }
            }
          }
        }, {
          key: "_convertLiteralColorValue",
          value: function _convertLiteralColorValue(color) {
            var colorValue = color.toUpperCase();

            if (Color[colorValue]) {
              return Color[colorValue];
            } else {
              var out = new Color();
              return out.fromHEX(color);
            }
          }
        }, {
          key: "_applyTextAttribute",
          value: function _applyTextAttribute(labelSeg) {
            var label = labelSeg.node.getComponent(Label);

            if (!label) {
              return;
            }

            var index = labelSeg.styleIndex;
            var textStyle;

            if (this._textArray[index]) {
              textStyle = this._textArray[index].style;
            }

            if (textStyle) {
              label.color = this._convertLiteralColorValue(textStyle.color || 'white');
              label.isBold = !!textStyle.bold;
              label.isItalic = !!textStyle.italic; // TODO: temporary implementation, the italic effect should be implemented in the internal of label-assembler.
              // if (textStyle.italic) {
              //     labelNode.skewX = 12;
              // }

              label.isUnderline = !!textStyle.underline;

              if (textStyle.outline) {
                var labelOutline = labelSeg.node.getComponent(LabelOutline);

                if (!labelOutline) {
                  labelOutline = labelSeg.node.addComponent(LabelOutline);
                }

                labelOutline.color = this._convertLiteralColorValue(textStyle.outline.color);
                labelOutline.width = textStyle.outline.width;
              }

              label.fontSize = textStyle.size || this._fontSize;
              labelSeg.clickHandler = '';
              labelSeg.clickParam = '';
              var event = textStyle.event;

              if (event) {
                labelSeg.clickHandler = event['click'] || '';
                labelSeg.clickParam = event['param'] || '';
              }
            } else {
              label.fontSize = this._fontSize;
            }

            label.cacheMode = this._cacheMode;
            var isAsset = this._font instanceof Font;

            if (isAsset && !this._isSystemFontUsed) {
              label.font = this._font;
            } else {
              label.fontFamily = this._fontFamily;
            }

            label.useSystemFont = this._isSystemFontUsed;
            label.lineHeight = this._lineHeight;
            label.updateRenderData(true);
          }
        }]);

        return RichText;
      }(UIComponent), _class3$7.HorizontalAlign = HorizontalTextAlignment, _class3$7.VerticalAlign = VerticalTextAlignment, _temp$a), (_applyDecoratedDescriptor(_class2$9.prototype, "string", [multiline, _dec5$9], Object.getOwnPropertyDescriptor(_class2$9.prototype, "string"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "horizontalAlign", [_dec6$9, _dec7$9], Object.getOwnPropertyDescriptor(_class2$9.prototype, "horizontalAlign"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "fontSize", [_dec8$8], Object.getOwnPropertyDescriptor(_class2$9.prototype, "fontSize"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "fontFamily", [_dec9$8], Object.getOwnPropertyDescriptor(_class2$9.prototype, "fontFamily"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "font", [_dec10$8, _dec11$8], Object.getOwnPropertyDescriptor(_class2$9.prototype, "font"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "useSystemFont", [_dec12$7], Object.getOwnPropertyDescriptor(_class2$9.prototype, "useSystemFont"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "cacheMode", [_dec13$6, _dec14$5], Object.getOwnPropertyDescriptor(_class2$9.prototype, "cacheMode"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "maxWidth", [_dec15$5], Object.getOwnPropertyDescriptor(_class2$9.prototype, "maxWidth"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "lineHeight", [_dec16$4], Object.getOwnPropertyDescriptor(_class2$9.prototype, "lineHeight"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "imageAtlas", [_dec17$4, _dec18$4], Object.getOwnPropertyDescriptor(_class2$9.prototype, "imageAtlas"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "handleTouchEvent", [_dec19$4], Object.getOwnPropertyDescriptor(_class2$9.prototype, "handleTouchEvent"), _class2$9.prototype), _descriptor$9 = _applyDecoratedDescriptor(_class2$9.prototype, "_lineHeight", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 40;
        }
      }), _descriptor2$9 = _applyDecoratedDescriptor(_class2$9.prototype, "_string", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '<color=#00ff00>Rich</color><color=#0fffff>Text</color>';
        }
      }), _descriptor3$8 = _applyDecoratedDescriptor(_class2$9.prototype, "_horizontalAlign", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return HorizontalTextAlignment.LEFT;
        }
      }), _descriptor4$7 = _applyDecoratedDescriptor(_class2$9.prototype, "_fontSize", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 40;
        }
      }), _descriptor5$7 = _applyDecoratedDescriptor(_class2$9.prototype, "_maxWidth", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6$5 = _applyDecoratedDescriptor(_class2$9.prototype, "_fontFamily", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'Arial';
        }
      }), _descriptor7$4 = _applyDecoratedDescriptor(_class2$9.prototype, "_font", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8$4 = _applyDecoratedDescriptor(_class2$9.prototype, "_isSystemFontUsed", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor9$4 = _applyDecoratedDescriptor(_class2$9.prototype, "_userDefinedFont", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10$4 = _applyDecoratedDescriptor(_class2$9.prototype, "_cacheMode", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return CacheMode.NONE;
        }
      }), _descriptor11$4 = _applyDecoratedDescriptor(_class2$9.prototype, "_imageAtlas", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12$4 = _applyDecoratedDescriptor(_class2$9.prototype, "_handleTouchEvent", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2$9)) || _class$a) || _class$a) || _class$a) || _class$a) || _class$a));

      var _dec$b, _dec2$b, _dec3$b, _dec4$a, _dec5$a, _dec6$a, _dec7$a, _dec8$9, _dec9$9, _dec10$9, _dec11$9, _dec12$8, _dec13$7, _dec14$6, _dec15$6, _class$b, _class2$a, _descriptor$a, _descriptor2$a, _descriptor3$9, _descriptor4$8, _descriptor5$8, _class3$8, _temp$b;
      var GETTING_SHORTER_FACTOR = 20;
      var ZERO = new Vec3();

      var _tempPos_1 = new Vec3();

      var _tempPos_2 = new Vec3();

      var defaultAnchor = new Vec2();

      var _tempColor$1 = new Color();
      /**
       * @en
       * Enum for ScrollBar direction.
       *
       * @zh
       * 滚动条方向。
       */


      var Direction;

      (function (Direction) {
        Direction[Direction["HORIZONTAL"] = 0] = "HORIZONTAL";
        Direction[Direction["VERTICAL"] = 1] = "VERTICAL";
      })(Direction || (Direction = {}));

      ccenum(Direction);
      /**
       * @en
       * The ScrollBar control allows the user to scroll an image or other view that is too large to see completely.
       *
       * @zh
       * 滚动条组件。
       */

      var ScrollBar = function (v) { return exports({ ScrollBar: v, ScrollBarComponent: v }), v; }((_dec$b = ccclass('cc.ScrollBar'), _dec2$b = help(), _dec3$b = executionOrder(110), _dec4$a = menu(), _dec5$a = requireComponent(UITransform), _dec6$a = type(Sprite), _dec7$a = displayOrder(), _dec8$9 = tooltip(), _dec9$9 = type(Direction), _dec10$9 = displayOrder(), _dec11$9 = tooltip(), _dec12$8 = displayOrder(), _dec13$7 = tooltip(), _dec14$6 = displayOrder(), _dec15$6 = tooltip(), _dec$b(_class$b = _dec2$b(_class$b = _dec3$b(_class$b = _dec4$a(_class$b = _dec5$a(_class$b = (_class2$a = (_temp$b = _class3$8 = /*#__PURE__*/function (_Component) {
        _inherits(ScrollBar, _Component);

        function ScrollBar() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, ScrollBar);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ScrollBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "_scrollView", _descriptor$a, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_handle", _descriptor2$a, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_direction", _descriptor3$9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_enableAutoHide", _descriptor4$8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_autoHideTime", _descriptor5$8, _assertThisInitialized(_this));

          _this._touching = false;
          _this._opacity = 255;
          _this._autoHideRemainingTime = 0;
          return _this;
        }

        _createClass(ScrollBar, [{
          key: "hide",

          /**
           * @en
           * Hide ScrollBar.
           *
           * @zh
           * 滚动条隐藏。
           */
          value: function hide() {
            this._autoHideRemainingTime = 0;

            this._setOpacity(0);
          }
          /**
           * @en
           * Show ScrollBar.
           *
           * @zh
           * 滚动条显示。
           */

        }, {
          key: "show",
          value: function show() {
            this._autoHideRemainingTime = this._autoHideTime;

            this._setOpacity(this._opacity);
          }
          /**
           * @en
           * Reset the position of ScrollBar.
           *
           * @zh
           * 重置滚动条位置。
           *
           * @param outOfBoundary - 滚动位移。
           */

        }, {
          key: "onScroll",
          value: function onScroll(outOfBoundary) {
            if (!this._scrollView) {
              return;
            }

            var content = this._scrollView.content;

            if (!content) {
              return;
            }

            var contentSize = content._uiProps.uiTransformComp.contentSize;
            var scrollViewSize = this._scrollView.node._uiProps.uiTransformComp.contentSize;
            var barSize = this.node._uiProps.uiTransformComp.contentSize;

            if (this._conditionalDisableScrollBar(contentSize, scrollViewSize)) {
              return;
            }

            if (this._enableAutoHide) {
              this._autoHideRemainingTime = this._autoHideTime;

              this._setOpacity(this._opacity);
            }

            var contentMeasure = 0;
            var scrollViewMeasure = 0;
            var outOfBoundaryValue = 0;
            var contentPosition = 0;
            var handleNodeMeasure = 0;

            if (this._direction === Direction.HORIZONTAL) {
              contentMeasure = contentSize.width;
              scrollViewMeasure = scrollViewSize.width;
              handleNodeMeasure = barSize.width;
              outOfBoundaryValue = outOfBoundary.x;
              contentPosition = -this._convertToScrollViewSpace(content).x;
            } else if (this._direction === Direction.VERTICAL) {
              contentMeasure = contentSize.height;
              scrollViewMeasure = scrollViewSize.height;
              handleNodeMeasure = barSize.height;
              outOfBoundaryValue = outOfBoundary.y;
              contentPosition = -this._convertToScrollViewSpace(content).y;
            }

            var length = this._calculateLength(contentMeasure, scrollViewMeasure, handleNodeMeasure, outOfBoundaryValue);

            var position = this._calculatePosition(contentMeasure, scrollViewMeasure, handleNodeMeasure, contentPosition, outOfBoundaryValue, length);

            this._updateLength(length);

            this._updateHandlerPosition(position);
          }
          /**
           * @zh
           * 滚动视窗设置。
           *
           * @param scrollView - 滚动视窗。
           */

        }, {
          key: "setScrollView",
          value: function setScrollView(scrollView) {
            this._scrollView = scrollView;
          }
        }, {
          key: "onTouchBegan",
          value: function onTouchBegan() {
            if (!this._enableAutoHide) {
              return;
            }

            this._touching = true;
          }
        }, {
          key: "onTouchEnded",
          value: function onTouchEnded() {
            if (!this._enableAutoHide) {
              return;
            }

            this._touching = false;

            if (this._autoHideTime <= 0) {
              return;
            }

            if (this._scrollView) {
              var content = this._scrollView.content;

              if (content) {
                var contentSize = content._uiProps.uiTransformComp.contentSize;
                var scrollViewSize = this._scrollView.node._uiProps.uiTransformComp.contentSize;

                if (this._conditionalDisableScrollBar(contentSize, scrollViewSize)) {
                  return;
                }
              }
            }

            this._autoHideRemainingTime = this._autoHideTime;
          }
        }, {
          key: "onEnable",
          value: function onEnable() {
            var renderComp = this.node.getComponent(Sprite);

            if (renderComp) {
              this._opacity = renderComp.color.a;
            }
          }
        }, {
          key: "start",
          value: function start() {
            if (this._enableAutoHide) {
              this._setOpacity(0);
            }
          }
        }, {
          key: "update",
          value: function update(dt) {
            this._processAutoHide(dt);
          }
        }, {
          key: "_convertToScrollViewSpace",
          value: function _convertToScrollViewSpace(content) {
            var scrollTrans = this._scrollView && this._scrollView.node._uiProps.uiTransformComp;
            var contentTrans = content._uiProps.uiTransformComp;

            if (!scrollTrans || !contentTrans) {
              return ZERO;
            }

            _tempPos_1.set(-contentTrans.anchorX * contentTrans.width, -contentTrans.anchorY * contentTrans.height, 0);

            contentTrans.convertToWorldSpaceAR(_tempPos_1, _tempPos_2);
            var scrollViewSpacePos = scrollTrans.convertToNodeSpaceAR(_tempPos_2);
            scrollViewSpacePos.x += scrollTrans.anchorX * scrollTrans.width;
            scrollViewSpacePos.y += scrollTrans.anchorY * scrollTrans.height;
            return scrollViewSpacePos;
          }
        }, {
          key: "_setOpacity",
          value: function _setOpacity(opacity) {
            if (this._handle) {
              var renderComp = this.node.getComponent(Sprite);

              if (renderComp) {
                _tempColor$1.set(renderComp.color);

                _tempColor$1.a = opacity;
                renderComp.color = _tempColor$1;
              }

              renderComp = this._handle.getComponent(Sprite);

              if (renderComp) {
                _tempColor$1.set(renderComp.color);

                _tempColor$1.a = opacity;
                renderComp.color = _tempColor$1;
              }
            }
          }
        }, {
          key: "_updateHandlerPosition",
          value: function _updateHandlerPosition(position) {
            if (this._handle) {
              var oldPosition = this._fixupHandlerPosition();

              this._handle.node.setPosition(position.x + oldPosition.x, position.y + oldPosition.y, oldPosition.z);
            }
          }
        }, {
          key: "_fixupHandlerPosition",
          value: function _fixupHandlerPosition() {
            var uiTrans = this.node._uiProps.uiTransformComp;
            var barSize = uiTrans.contentSize;
            var barAnchor = uiTrans.anchorPoint;
            var handleSize = this.handle.node._uiProps.uiTransformComp.contentSize;
            var handleParent = this.handle.node.parent;
            Vec3.set(_tempPos_1, -barSize.width * barAnchor.x, -barSize.height * barAnchor.y, 0);

            var leftBottomWorldPosition = this.node._uiProps.uiTransformComp.convertToWorldSpaceAR(_tempPos_1, _tempPos_2);

            var fixupPosition = new Vec3();

            handleParent._uiProps.uiTransformComp.convertToNodeSpaceAR(leftBottomWorldPosition, fixupPosition);

            if (this.direction === Direction.HORIZONTAL) {
              fixupPosition = new Vec3(fixupPosition.x, fixupPosition.y + (barSize.height - handleSize.height) / 2, 0);
            } else if (this.direction === Direction.VERTICAL) {
              fixupPosition = new Vec3(fixupPosition.x + (barSize.width - handleSize.width) / 2, fixupPosition.y, 0);
            }

            this.handle.node.setPosition(fixupPosition);
            return fixupPosition;
          }
        }, {
          key: "_conditionalDisableScrollBar",
          value: function _conditionalDisableScrollBar(contentSize, scrollViewSize) {
            if (contentSize.width <= scrollViewSize.width && this._direction === Direction.HORIZONTAL) {
              return true;
            }

            if (contentSize.height <= scrollViewSize.height && this._direction === Direction.VERTICAL) {
              return true;
            }

            return false;
          }
        }, {
          key: "_calculateLength",
          value: function _calculateLength(contentMeasure, scrollViewMeasure, handleNodeMeasure, outOfBoundary) {
            var denominatorValue = contentMeasure;

            if (outOfBoundary) {
              denominatorValue += (outOfBoundary > 0 ? outOfBoundary : -outOfBoundary) * GETTING_SHORTER_FACTOR;
            }

            var lengthRation = scrollViewMeasure / denominatorValue;
            return handleNodeMeasure * lengthRation;
          }
        }, {
          key: "_calculatePosition",
          value: function _calculatePosition(contentMeasure, scrollViewMeasure, handleNodeMeasure, contentPosition, outOfBoundary, actualLenth) {
            var denominatorValue = contentMeasure - scrollViewMeasure;

            if (outOfBoundary) {
              denominatorValue += Math.abs(outOfBoundary);
            }

            var positionRatio = 0;

            if (denominatorValue) {
              positionRatio = contentPosition / denominatorValue;
              positionRatio = clamp01(positionRatio);
            }

            var position = (handleNodeMeasure - actualLenth) * positionRatio;

            if (this._direction === Direction.VERTICAL) {
              return new Vec3(0, position, 0);
            } else {
              return new Vec3(position, 0, 0);
            }
          }
        }, {
          key: "_updateLength",
          value: function _updateLength(length) {
            if (this._handle) {
              var handleNode = this._handle.node;
              var handleTrans = handleNode._uiProps.uiTransformComp;
              var handleNodeSize = handleTrans.contentSize;
              var anchor = handleTrans.anchorPoint;

              if (anchor.x !== defaultAnchor.x || anchor.y !== defaultAnchor.y) {
                handleTrans.setAnchorPoint(defaultAnchor);
              }

              if (this._direction === Direction.HORIZONTAL) {
                handleTrans.setContentSize(length, handleNodeSize.height);
              } else {
                handleTrans.setContentSize(handleNodeSize.width, length);
              }
            }
          }
        }, {
          key: "_processAutoHide",
          value: function _processAutoHide(deltaTime) {
            if (!this._enableAutoHide || this._autoHideRemainingTime <= 0) {
              return;
            } else if (this._touching) {
              return;
            }

            this._autoHideRemainingTime -= deltaTime;

            if (this._autoHideRemainingTime <= this._autoHideTime) {
              this._autoHideRemainingTime = Math.max(0, this._autoHideRemainingTime);
              var opacity = this._opacity * (this._autoHideRemainingTime / this._autoHideTime);

              this._setOpacity(opacity);
            }
          }
        }, {
          key: "handle",

          /**
           * @en
           * The "handle" part of the ScrollBar.
           *
           * @zh
           * 作为当前滚动区域位置显示的滑块 Sprite。
           */
          get: function get() {
            return this._handle;
          },
          set: function set(value) {
            if (this._handle === value) {
              return;
            }

            this._handle = value;
            this.onScroll(ZERO);
          }
          /**
           * @en
           * The direction of scrolling.
           *
           * @zh
           * ScrollBar 的滚动方向。
           */

        }, {
          key: "direction",
          get: function get() {
            return this._direction;
          },
          set: function set(value) {
            if (this._direction === value) {
              return;
            }

            this._direction = value;
            this.onScroll(new Vec3());
          }
          /**
           * @en
           * Whether enable auto hide or not.
           *
           * @zh
           * 是否在没有滚动动作时自动隐藏 ScrollBar。
           */

        }, {
          key: "enableAutoHide",
          get: function get() {
            return this._enableAutoHide;
          },
          set: function set(value) {
            if (this._enableAutoHide === value) {
              return;
            }

            this._enableAutoHide = value;

            if (this._enableAutoHide) {
              this._setOpacity(0);
            }
          }
          /**
           * @en
           * The time to hide ScrollBar when scroll finished.
           * Note: This value is only useful when enableAutoHide is true.
           *
           * @zh
           * 没有滚动动作后经过多久会自动隐藏。<br/>
           * 注意：只要当 “enableAutoHide” 为 true 时，才有效。
           */

        }, {
          key: "autoHideTime",
          get: function get() {
            return this._autoHideTime;
          },
          set: function set(value) {
            if (this._autoHideTime === value) {
              return;
            }

            this._autoHideTime = value;
          }
        }]);

        return ScrollBar;
      }(Component), _class3$8.Direction = Direction, _temp$b), (_applyDecoratedDescriptor(_class2$a.prototype, "handle", [_dec6$a, _dec7$a, _dec8$9], Object.getOwnPropertyDescriptor(_class2$a.prototype, "handle"), _class2$a.prototype), _applyDecoratedDescriptor(_class2$a.prototype, "direction", [_dec9$9, _dec10$9, _dec11$9], Object.getOwnPropertyDescriptor(_class2$a.prototype, "direction"), _class2$a.prototype), _applyDecoratedDescriptor(_class2$a.prototype, "enableAutoHide", [_dec12$8, _dec13$7], Object.getOwnPropertyDescriptor(_class2$a.prototype, "enableAutoHide"), _class2$a.prototype), _applyDecoratedDescriptor(_class2$a.prototype, "autoHideTime", [_dec14$6, _dec15$6], Object.getOwnPropertyDescriptor(_class2$a.prototype, "autoHideTime"), _class2$a.prototype), _descriptor$a = _applyDecoratedDescriptor(_class2$a.prototype, "_scrollView", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$a = _applyDecoratedDescriptor(_class2$a.prototype, "_handle", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$9 = _applyDecoratedDescriptor(_class2$a.prototype, "_direction", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Direction.HORIZONTAL;
        }
      }), _descriptor4$8 = _applyDecoratedDescriptor(_class2$a.prototype, "_enableAutoHide", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5$8 = _applyDecoratedDescriptor(_class2$a.prototype, "_autoHideTime", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      })), _class2$a)) || _class$b) || _class$b) || _class$b) || _class$b) || _class$b));

      var _dec$c, _dec2$c, _class$c;
      var ViewGroup = exports('ViewGroup', (_dec$c = ccclass('cc.ViewGroup'), _dec2$c = executionOrder(110), _dec$c(_class$c = _dec2$c(_class$c = /*#__PURE__*/function (_Component) {
        _inherits(ViewGroup, _Component);

        function ViewGroup() {
          _classCallCheck(this, ViewGroup);

          return _possibleConstructorReturn(this, _getPrototypeOf(ViewGroup).apply(this, arguments));
        }

        return ViewGroup;
      }(Component)) || _class$c) || _class$c));
      legacyCC.ViewGroup = ViewGroup;

      var _dec$d, _dec2$d, _dec3$c, _dec4$b, _dec5$b, _dec6$b, _dec7$b, _dec8$a, _dec9$a, _dec10$a, _dec11$a, _dec12$9, _dec13$8, _dec14$7, _dec15$7, _dec16$5, _dec17$5, _dec18$5, _dec19$5, _dec20$4, _dec21$4, _dec22$4, _dec23$4, _dec24$4, _dec25$3, _dec26$3, _dec27$3, _dec28$3, _dec29$3, _dec30$3, _dec31$3, _dec32$3, _dec33$2, _class$d, _class2$b, _descriptor$b, _descriptor2$b, _descriptor3$a, _descriptor4$9, _descriptor5$9, _descriptor6$6, _descriptor7$5, _descriptor8$5, _descriptor9$5, _descriptor10$5, _descriptor11$5, _class3$9, _temp$c;
      var NUMBER_OF_GATHERED_TOUCHES_FOR_MOVE_SPEED = 5;
      var OUT_OF_BOUNDARY_BREAKING_FACTOR = 0.05;
      var EPSILON = 1e-4;
      var TOLERANCE = 1e4;
      var MOVEMENT_FACTOR = 0.7;
      var ZERO$1 = new Vec3();

      var _tempVec3 = new Vec3();

      var _tempVec3_1 = new Vec3();

      var _tempVec2 = new Vec2();

      var _tempVec2_1 = new Vec2();

      var quintEaseOut = function quintEaseOut(time) {
        time -= 1;
        return time * time * time * time * time + 1;
      };

      var getTimeInMilliseconds = function getTimeInMilliseconds() {
        var currentTime = new Date();
        return currentTime.getMilliseconds();
      };

      var eventMap = {
        'scroll-to-top': 0,
        'scroll-to-bottom': 1,
        'scroll-to-left': 2,
        'scroll-to-right': 3,
        'scrolling': 4,
        'bounce-bottom': 6,
        'bounce-left': 7,
        'bounce-right': 8,
        'bounce-top': 5,
        'scroll-ended': 9,
        'touch-up': 10,
        'scroll-ended-with-threshold': 11,
        'scroll-began': 12
      };
      /**
       * @en
       * Enum for ScrollView event type.
       *
       * @zh
       * 滚动视图事件类型
       */

      var EventType$2;
      /**
       * @en
       * Layout container for a view hierarchy that can be scrolled by the user,
       * allowing it to be larger than the physical display.
       *
       * @zh
       * 滚动视图组件。
       */

      (function (EventType) {
        EventType["SCROLL_TO_TOP"] = "scroll-to-top";
        EventType["SCROLL_TO_BOTTOM"] = "scroll-to-bottom";
        EventType["SCROLL_TO_LEFT"] = "scroll-to-left";
        EventType["SCROLL_TO_RIGHT"] = "scroll-to-right";
        EventType["SCROLL_BEGAN"] = "scroll-began";
        EventType["SCROLL_ENDED"] = "scroll-ended";
        EventType["BOUNCE_TOP"] = "bounce-top";
        EventType["BOUNCE_BOTTOM"] = "bounce-bottom";
        EventType["BOUNCE_LEFT"] = "bounce-left";
        EventType["BOUNCE_RIGHT"] = "bounce-right";
        EventType["SCROLLING"] = "scrolling";
        EventType["SCROLL_ENG_WITH_THRESHOLD"] = "scroll-ended-with-threshold";
        EventType["TOUCH_UP"] = "touch-up";
      })(EventType$2 || (EventType$2 = {}));

      var ScrollView = function (v) { return exports({ ScrollView: v, ScrollViewComponent: v }), v; }((_dec$d = ccclass('cc.ScrollView'), _dec2$d = help(), _dec3$c = executionOrder(110), _dec4$b = menu(), _dec5$b = requireComponent(UITransform), _dec6$b = range(), _dec7$b = displayOrder(), _dec8$a = tooltip(), _dec9$a = range(), _dec10$a = displayOrder(), _dec11$a = tooltip(), _dec12$9 = displayOrder(), _dec13$8 = tooltip(), _dec14$7 = displayOrder(), _dec15$7 = tooltip(), _dec16$5 = type(Node), _dec17$5 = displayOrder(), _dec18$5 = tooltip(), _dec19$5 = displayOrder(), _dec20$4 = tooltip(), _dec21$4 = type(ScrollBar), _dec22$4 = displayOrder(), _dec23$4 = tooltip(), _dec24$4 = displayOrder(), _dec25$3 = tooltip(), _dec26$3 = type(ScrollBar), _dec27$3 = displayOrder(), _dec28$3 = tooltip(), _dec29$3 = displayOrder(), _dec30$3 = tooltip(), _dec31$3 = type([EventHandler]), _dec32$3 = displayOrder(), _dec33$2 = tooltip(), _dec$d(_class$d = _dec2$d(_class$d = _dec3$c(_class$d = _dec4$b(_class$d = _dec5$b(_class$d = (_class2$b = (_temp$c = _class3$9 = /*#__PURE__*/function (_ViewGroup) {
        _inherits(ScrollView, _ViewGroup);

        function ScrollView() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, ScrollView);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ScrollView)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "bounceDuration", _descriptor$b, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "brake", _descriptor2$b, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "elastic", _descriptor3$a, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "inertia", _descriptor4$9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "horizontal", _descriptor5$9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "vertical", _descriptor6$6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cancelInnerEvents", _descriptor7$5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "scrollEvents", _descriptor8$5, _assertThisInitialized(_this));

          _this._autoScrolling = false;
          _this._scrolling = false;

          _initializerDefineProperty(_this, "_content", _descriptor9$5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_horizontalScrollBar", _descriptor10$5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_verticalScrollBar", _descriptor11$5, _assertThisInitialized(_this));

          _this._topBoundary = 0;
          _this._bottomBoundary = 0;
          _this._leftBoundary = 0;
          _this._rightBoundary = 0;
          _this._touchMoveDisplacements = [];
          _this._touchMoveTimeDeltas = [];
          _this._touchMovePreviousTimestamp = 0;
          _this._touchMoved = false;
          _this._autoScrollAttenuate = false;
          _this._autoScrollStartPosition = new Vec3();
          _this._autoScrollTargetDelta = new Vec3();
          _this._autoScrollTotalTime = 0;
          _this._autoScrollAccumulatedTime = 0;
          _this._autoScrollCurrentlyOutOfBoundary = false;
          _this._autoScrollBraking = false;
          _this._autoScrollBrakingStartPosition = new Vec3();
          _this._outOfBoundaryAmount = new Vec3();
          _this._outOfBoundaryAmountDirty = true;
          _this._stopMouseWheel = false;
          _this._mouseWheelEventElapsedTime = 0.0;
          _this._isScrollEndedWithThresholdEventFired = false;
          _this._scrollEventEmitMask = 0;
          _this._isBouncing = false;
          _this._contentPos = new Vec3();
          _this._deltaPos = new Vec3();
          return _this;
        }

        _createClass(ScrollView, [{
          key: "scrollToBottom",

          /**
           * @en
           * Scroll the content to the bottom boundary of ScrollView.
           *
           * @zh
           * 视图内容将在规定时间内滚动到视图底部。
           *
           * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到底部边界。
           * @param attenuated - 滚动加速是否衰减，默认为 true。
           * @example
           * ```ts
           * // Scroll to the bottom of the view.
           * scrollView.scrollToBottom(0.1);
           * ```
           */
          value: function scrollToBottom(timeInSecond) {
            var attenuated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var moveDelta = this._calculateMovePercentDelta({
              anchor: new Vec2(0, 0),
              applyToHorizontal: false,
              applyToVertical: true
            });

            if (timeInSecond) {
              this._startAutoScroll(moveDelta, timeInSecond, attenuated !== false);
            } else {
              this._moveContent(moveDelta, true);
            }
          }
          /**
           * @en
           * Scroll the content to the top boundary of ScrollView.
           *
           * @zh
           * 视图内容将在规定时间内滚动到视图顶部。
           *
           * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到顶部边界。
           * @param attenuated - 滚动加速是否衰减，默认为 true。
           * @example
           * ```ts
           * // Scroll to the top of the view.
           * scrollView.scrollToTop(0.1);
           * ```
           */

        }, {
          key: "scrollToTop",
          value: function scrollToTop(timeInSecond) {
            var attenuated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var moveDelta = this._calculateMovePercentDelta({
              anchor: new Vec2(0, 1),
              applyToHorizontal: false,
              applyToVertical: true
            });

            if (timeInSecond) {
              this._startAutoScroll(moveDelta, timeInSecond, attenuated !== false);
            } else {
              this._moveContent(moveDelta);
            }
          }
          /**
           * @en
           * Scroll the content to the left boundary of ScrollView.
           *
           * @zh
           * 视图内容将在规定时间内滚动到视图左边。
           *
           * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到左边边界。
           * @param attenuated - 滚动加速是否衰减，默认为 true。
           * @example
           * ```ts
           * // Scroll to the left of the view.
           * scrollView.scrollToLeft(0.1);
           * ```
           */

        }, {
          key: "scrollToLeft",
          value: function scrollToLeft(timeInSecond) {
            var attenuated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var moveDelta = this._calculateMovePercentDelta({
              anchor: new Vec2(0, 0),
              applyToHorizontal: true,
              applyToVertical: false
            });

            if (timeInSecond) {
              this._startAutoScroll(moveDelta, timeInSecond, attenuated !== false);
            } else {
              this._moveContent(moveDelta);
            }
          }
          /**
           * @en
           * Scroll the content to the right boundary of ScrollView.
           *
           * @zh
           * 视图内容将在规定时间内滚动到视图右边。
           *
           * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到右边边界。
           * @param attenuated - 滚动加速是否衰减，默认为 true。
           * @example
           * ```ts
           * // Scroll to the right of the view.
           * scrollView.scrollToRight(0.1);
           * ```
           */

        }, {
          key: "scrollToRight",
          value: function scrollToRight(timeInSecond) {
            var attenuated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var moveDelta = this._calculateMovePercentDelta({
              anchor: new Vec2(1, 0),
              applyToHorizontal: true,
              applyToVertical: false
            });

            if (timeInSecond) {
              this._startAutoScroll(moveDelta, timeInSecond, attenuated !== false);
            } else {
              this._moveContent(moveDelta);
            }
          }
          /**
           * @en
           * Scroll the content to the top left boundary of ScrollView.
           *
           * @zh
           * 视图内容将在规定时间内滚动到视图左上角。
           *
           * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到左上边边界。
           * @param attenuated - 滚动加速是否衰减，默认为 true。
           * @example
           * ```ts
           * // Scroll to the upper left corner of the view.
           * scrollView.scrollToTopLeft(0.1);
           * ```
           */

        }, {
          key: "scrollToTopLeft",
          value: function scrollToTopLeft(timeInSecond) {
            var attenuated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var moveDelta = this._calculateMovePercentDelta({
              anchor: new Vec2(0, 1),
              applyToHorizontal: true,
              applyToVertical: true
            });

            if (timeInSecond) {
              this._startAutoScroll(moveDelta, timeInSecond, attenuated !== false);
            } else {
              this._moveContent(moveDelta);
            }
          }
          /**
           * @en
           * Scroll the content to the top right boundary of ScrollView.
           *
           * @zh
           * 视图内容将在规定时间内滚动到视图右上角。
           *
           * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到右上边界。
           * @param attenuated - 滚动加速是否衰减，默认为 true。
           * @example
           * ```ts
           * // Scroll to the top right corner of the view.
           * scrollView.scrollToTopRight(0.1);
           * ```
           */

        }, {
          key: "scrollToTopRight",
          value: function scrollToTopRight(timeInSecond) {
            var attenuated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var moveDelta = this._calculateMovePercentDelta({
              anchor: new Vec2(1, 1),
              applyToHorizontal: true,
              applyToVertical: true
            });

            if (timeInSecond) {
              this._startAutoScroll(moveDelta, timeInSecond, attenuated !== false);
            } else {
              this._moveContent(moveDelta);
            }
          }
          /**
           * @en
           * Scroll the content to the bottom left boundary of ScrollView.
           *
           * @zh
           * 视图内容将在规定时间内滚动到视图左下角。
           *
           * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到左下边界。
           * @param attenuated - 滚动加速是否衰减，默认为 true。
           * @example
           * ```ts
           * // Scroll to the lower left corner of the view.
           * scrollView.scrollToBottomLeft(0.1);
           * ```
           */

        }, {
          key: "scrollToBottomLeft",
          value: function scrollToBottomLeft(timeInSecond) {
            var attenuated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var moveDelta = this._calculateMovePercentDelta({
              anchor: new Vec2(0, 0),
              applyToHorizontal: true,
              applyToVertical: true
            });

            if (timeInSecond) {
              this._startAutoScroll(moveDelta, timeInSecond, attenuated !== false);
            } else {
              this._moveContent(moveDelta);
            }
          }
          /**
           * @en
           * Scroll the content to the bottom right boundary of ScrollView.
           *
           * @zh
           * 视图内容将在规定时间内滚动到视图右下角。
           *
           * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到右边下边界。
           * @param attenuated - 滚动加速是否衰减，默认为 true。
           * @example
           * ```ts
           * // Scroll to the lower right corner of the view.
           * scrollView.scrollToBottomRight(0.1);
           * ```
           */

        }, {
          key: "scrollToBottomRight",
          value: function scrollToBottomRight(timeInSecond) {
            var attenuated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var moveDelta = this._calculateMovePercentDelta({
              anchor: new Vec2(1, 0),
              applyToHorizontal: true,
              applyToVertical: true
            });

            if (timeInSecond) {
              this._startAutoScroll(moveDelta, timeInSecond, attenuated !== false);
            } else {
              this._moveContent(moveDelta);
            }
          }
          /**
           * @en
           * Scroll with an offset related to the ScrollView's top left origin, if timeInSecond is omitted, then it will jump to the specific offset immediately.
           *
           * @zh
           * 视图内容在规定时间内将滚动到 ScrollView 相对左上角原点的偏移位置, 如果 timeInSecond 参数不传，则立即滚动到指定偏移位置。
           *
           * @param offset - 指定移动偏移量。
           * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到指定偏移量处。
           * @param attenuated - 滚动加速是否衰减，默认为 true。
           * @example
           * ```ts
           * // Scroll to middle position in 0.1 second in x-axis
           * let maxScrollOffset = this.getMaxScrollOffset();
           * scrollView.scrollToOffset(new Vec3(maxScrollOffset.x / 2, 0, 0), 0.1);
           * ```
           */

        }, {
          key: "scrollToOffset",
          value: function scrollToOffset(offset, timeInSecond) {
            var attenuated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var maxScrollOffset = this.getMaxScrollOffset();
            var anchor = new Vec2(0, 0); // if maxScrollOffset is 0, then always align the content's top left origin to the top left corner of its parent

            if (maxScrollOffset.x === 0) {
              anchor.x = 0;
            } else {
              anchor.x = offset.x / maxScrollOffset.x;
            }

            if (maxScrollOffset.y === 0) {
              anchor.y = 1;
            } else {
              anchor.y = (maxScrollOffset.y - offset.y) / maxScrollOffset.y;
            }

            this.scrollTo(anchor, timeInSecond, attenuated);
          }
          /**
           * @en
           * Get the positive offset value corresponds to the content's top left boundary.
           *
           * @zh
           * 获取滚动视图相对于左上角原点的当前滚动偏移。
           *
           * @return - 当前滚动偏移量。
           */

        }, {
          key: "getScrollOffset",
          value: function getScrollOffset() {
            var topDelta = this._getContentTopBoundary() - this._topBoundary;

            var leftDelta = this._getContentLeftBoundary() - this._leftBoundary;

            return new Vec3(leftDelta, topDelta, 0);
          }
          /**
           * @en
           * Get the maximize available  scroll offset.
           *
           * @zh
           * 获取滚动视图最大可以滚动的偏移量。
           *
           * @return - 最大可滚动偏移量。
           */

        }, {
          key: "getMaxScrollOffset",
          value: function getMaxScrollOffset() {
            if (!this._content || !this.view) {
              return ZERO$1;
            }

            var contentSize = this._content._uiProps.uiTransformComp.contentSize;
            var horizontalMaximizeOffset = contentSize.width - this.view.width;
            var verticalMaximizeOffset = contentSize.height - this.view.height;
            horizontalMaximizeOffset = horizontalMaximizeOffset >= 0 ? horizontalMaximizeOffset : 0;
            verticalMaximizeOffset = verticalMaximizeOffset >= 0 ? verticalMaximizeOffset : 0;
            return new Vec3(horizontalMaximizeOffset, verticalMaximizeOffset, 0);
          }
          /**
           * @en
           * Scroll the content to the horizontal percent position of ScrollView.
           *
           * @zh
           * 视图内容在规定时间内将滚动到 ScrollView 水平方向的百分比位置上。
           *
           * @param percent - 0 - 之间的百分比。
           * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到指定水平百分比位置。
           * @param attenuated - 滚动加速是否衰减，默认为 true。
           * @example
           * ```ts
           * // Scroll to middle position.
           * scrollView.scrollToBottomRight(0.5, 0.1);
           * ```
           */

        }, {
          key: "scrollToPercentHorizontal",
          value: function scrollToPercentHorizontal(percent, timeInSecond, attenuated) {
            var moveDelta = this._calculateMovePercentDelta({
              anchor: new Vec2(percent, 0),
              applyToHorizontal: true,
              applyToVertical: false
            });

            if (timeInSecond) {
              this._startAutoScroll(moveDelta, timeInSecond, attenuated !== false);
            } else {
              this._moveContent(moveDelta);
            }
          }
          /**
           * @en
           * Scroll the content to the percent position of ScrollView in any direction.
           *
           * @zh
           * 视图内容在规定时间内进行垂直方向和水平方向的滚动，并且滚动到指定百分比位置上。
           *
           * @param anchor - 在 new Vec2(0,0) and new Vec2(1,1) 上取差值的一个点。
           * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到指定水平或垂直百分比位置。
           * @param attenuated - 滚动加速是否衰减，默认为 true。
           * @example
           * ```ts
           * // Vertical scroll to the bottom of the view.
           * scrollView.scrollTo(new Vec2(0, 1), 0.1);
           *
           * // Horizontal scroll to view right.
           * scrollView.scrollTo(new Vec2(1, 0), 0.1);
           * ```
           */

        }, {
          key: "scrollTo",
          value: function scrollTo(anchor, timeInSecond, attenuated) {
            var moveDelta = this._calculateMovePercentDelta({
              anchor: new Vec2(anchor),
              applyToHorizontal: true,
              applyToVertical: true
            });

            if (timeInSecond) {
              this._startAutoScroll(moveDelta, timeInSecond, attenuated);
            } else {
              this._moveContent(moveDelta);
            }
          }
          /**
           * @en
           * Scroll the content to the vertical percent position of ScrollView.
           *
           * @zh
           * 视图内容在规定时间内滚动到 ScrollView 垂直方向的百分比位置上。
           *
           * @param percent - 0 - 1 之间的百分比。
           * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到指定垂直百分比位置。
           * @param attenuated - 滚动加速是否衰减，默认为 true。
           * @example
           * ```ts
           * scrollView.scrollToPercentVertical(0.5, 0.1);
           * ```
           */

        }, {
          key: "scrollToPercentVertical",
          value: function scrollToPercentVertical(percent, timeInSecond, attenuated) {
            var moveDelta = this._calculateMovePercentDelta({
              anchor: new Vec2(0, percent),
              applyToHorizontal: false,
              applyToVertical: true
            });

            if (timeInSecond) {
              this._startAutoScroll(moveDelta, timeInSecond, attenuated);
            } else {
              this._moveContent(moveDelta);
            }
          }
          /**
           * @en
           * Stop auto scroll immediately.
           *
           * @zh
           * 停止自动滚动, 调用此 API 可以让 ScrollView 立即停止滚动。
           */

        }, {
          key: "stopAutoScroll",
          value: function stopAutoScroll() {
            this._autoScrolling = false;
            this._autoScrollAccumulatedTime = this._autoScrollTotalTime;
          }
          /**
           * @en
           * Modify the content position.
           *
           * @zh
           * 设置当前视图内容的坐标点。
           *
           * @param position - 当前视图坐标点.
           */

        }, {
          key: "setContentPosition",
          value: function setContentPosition(position) {
            if (!this._content) {
              return;
            }

            var contentPos = this.getContentPosition();

            if (Math.abs(position.x - contentPos.x) < EPSILON && Math.abs(position.y - contentPos.y) < EPSILON) {
              return;
            }

            this._content.setPosition(position);

            this._outOfBoundaryAmountDirty = true;
          }
          /**
           * @en
           * Query the content's position in its parent space.
           *
           * @zh
           * 获取当前视图内容的坐标点。
           *
           * @returns - 当前视图内容的坐标点.
           */

        }, {
          key: "getContentPosition",
          value: function getContentPosition() {
            if (!this._content) {
              return ZERO$1;
            }

            this._contentPos.set(this._content.position);

            return this._contentPos;
          }
          /**
           * @en
           * Query whether the user is currently dragging the ScrollView to scroll it.
           *
           * @zh
           * 用户是否在拖拽当前滚动视图。
           *
           * @returns - 是否在拖拽当前滚动视图。
           */

        }, {
          key: "isScrolling",
          value: function isScrolling() {
            return this._scrolling;
          }
          /**
           * @en
           * Query whether the ScrollView is currently scrolling because of a bounceback or inertia slowdown.
           *
           * @zh
           * 当前滚动视图是否在惯性滚动。
           *
           * @returns - 滚动视图是否在惯性滚动。
           */

        }, {
          key: "isAutoScrolling",
          value: function isAutoScrolling() {
            return this._autoScrolling;
          }
        }, {
          key: "getScrollEndedEventTiming",
          value: function getScrollEndedEventTiming() {
            return EPSILON;
          }
        }, {
          key: "start",
          value: function start() {
            this._calculateBoundary(); // Because widget component will adjust content position and scrollView position is correct after visit
            // So this event could make sure the content is on the correct position after loading.


            if (this._content) {
              director.once(Director.EVENT_BEFORE_DRAW, this._adjustContentOutOfBoundary, this);
            }
          }
        }, {
          key: "onEnable",
          value: function onEnable() {
            {
              this._registerEvent();

              if (this._content) {
                this._content.on(Node.EventType.SIZE_CHANGED, this._calculateBoundary, this);

                this._content.on(Node.EventType.TRANSFORM_CHANGED, this._scaleChanged, this);

                if (this.view) {
                  this.view.node.on(Node.EventType.TRANSFORM_CHANGED, this._scaleChanged, this);
                  this.view.node.on(Node.EventType.SIZE_CHANGED, this._calculateBoundary, this);
                }
              }

              this._calculateBoundary();
            }

            this._updateScrollBarState();
          }
        }, {
          key: "update",
          value: function update(dt) {
            if (this._autoScrolling) {
              this._processAutoScrolling(dt);
            }
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            {
              this._unregisterEvent();

              if (this._content) {
                this._content.off(Node.EventType.SIZE_CHANGED, this._calculateBoundary, this);

                this._content.off(Node.EventType.TRANSFORM_CHANGED, this._scaleChanged, this);

                if (this.view) {
                  this.view.node.off(Node.EventType.TRANSFORM_CHANGED, this._scaleChanged, this);
                  this.view.node.off(Node.EventType.SIZE_CHANGED, this._calculateBoundary, this);
                }
              }
            }

            this._hideScrollBar();

            this.stopAutoScroll();
          } // private methods

        }, {
          key: "_registerEvent",
          value: function _registerEvent() {
            this.node.on(Node.EventType.TOUCH_START, this._onTouchBegan, this, true);
            this.node.on(Node.EventType.TOUCH_MOVE, this._onTouchMoved, this, true);
            this.node.on(Node.EventType.TOUCH_END, this._onTouchEnded, this, true);
            this.node.on(Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this, true);
            this.node.on(Node.EventType.MOUSE_WHEEL, this._onMouseWheel, this, true);
          }
        }, {
          key: "_unregisterEvent",
          value: function _unregisterEvent() {
            this.node.off(Node.EventType.TOUCH_START, this._onTouchBegan, this, true);
            this.node.off(Node.EventType.TOUCH_MOVE, this._onTouchMoved, this, true);
            this.node.off(Node.EventType.TOUCH_END, this._onTouchEnded, this, true);
            this.node.off(Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this, true);
            this.node.off(Node.EventType.MOUSE_WHEEL, this._onMouseWheel, this, true);
          }
        }, {
          key: "_onMouseWheel",
          value: function _onMouseWheel(event, captureListeners) {
            if (!this.enabledInHierarchy) {
              return;
            }

            if (this._hasNestedViewGroup(event, captureListeners)) {
              return;
            }

            var deltaMove = new Vec3();
            var wheelPrecision = -0.1;
            var scrollY = event.getScrollY();

            if (this.vertical) {
              deltaMove.set(0, scrollY * wheelPrecision, 0);
            } else if (this.horizontal) {
              deltaMove.set(scrollY * wheelPrecision, 0, 0);
            }

            this._mouseWheelEventElapsedTime = 0;

            this._processDeltaMove(deltaMove);

            if (!this._stopMouseWheel) {
              this._handlePressLogic();

              this.schedule(this._checkMouseWheel, 1.0 / 60, NaN, 0);
              this._stopMouseWheel = true;
            }

            this._stopPropagationIfTargetIsMe(event);
          }
        }, {
          key: "_onTouchBegan",
          value: function _onTouchBegan(event, captureListeners) {
            if (!this.enabledInHierarchy || !this._content) {
              return;
            }

            if (this._hasNestedViewGroup(event, captureListeners)) {
              return;
            }

            this._handlePressLogic();

            this._touchMoved = false;

            this._stopPropagationIfTargetIsMe(event);
          }
        }, {
          key: "_onTouchMoved",
          value: function _onTouchMoved(event, captureListeners) {
            if (!this.enabledInHierarchy || !this._content) {
              return;
            }

            if (this._hasNestedViewGroup(event, captureListeners)) {
              return;
            }

            var touch = event.touch;

            this._handleMoveLogic(touch); // Do not prevent touch events in inner nodes


            if (!this.cancelInnerEvents) {
              return;
            }

            var deltaMove = touch.getUILocation(_tempVec2);
            deltaMove.subtract(touch.getUIStartLocation(_tempVec2_1)); // FIXME: touch move delta should be calculated by DPI.

            if (deltaMove.length() > 7) {
              if (!this._touchMoved && event.target !== this.node) {
                // Simulate touch cancel for target node
                var cancelEvent = new EventTouch(event.getTouches(), event.bubbles);
                cancelEvent.type = Node.EventType.TOUCH_CANCEL;
                cancelEvent.touch = event.touch;
                cancelEvent.simulate = true;
                event.target.dispatchEvent(cancelEvent);
                this._touchMoved = true;
              }
            }

            this._stopPropagationIfTargetIsMe(event);
          }
        }, {
          key: "_onTouchEnded",
          value: function _onTouchEnded(event, captureListeners) {
            if (!this.enabledInHierarchy || !this._content || !event) {
              return;
            }

            if (this._hasNestedViewGroup(event, captureListeners)) {
              return;
            }

            this._dispatchEvent(EventType$2.TOUCH_UP);

            var touch = event.touch;

            this._handleReleaseLogic(touch);

            if (this._touchMoved) {
              event.propagationStopped = true;
            } else {
              this._stopPropagationIfTargetIsMe(event);
            }
          }
        }, {
          key: "_onTouchCancelled",
          value: function _onTouchCancelled(event, captureListeners) {
            if (!this.enabledInHierarchy || !this._content) {
              return;
            }

            if (this._hasNestedViewGroup(event, captureListeners)) {
              return;
            } // Filter touch cancel event send from self


            if (event && !event.simulate) {
              var touch = event.touch;

              this._handleReleaseLogic(touch);
            }

            this._stopPropagationIfTargetIsMe(event);
          }
        }, {
          key: "_calculateBoundary",
          value: function _calculateBoundary() {
            if (this._content && this.view) {
              // refresh content size
              var layout = this._content.getComponent(Layout);

              if (layout && layout.enabledInHierarchy) {
                layout.updateLayout();
              }

              var viewTrans = this.view;
              var anchorX = viewTrans.width * viewTrans.anchorX;
              var anchorY = viewTrans.height * viewTrans.anchorY;
              this._leftBoundary = -anchorX;
              this._bottomBoundary = -anchorY;
              this._rightBoundary = this._leftBoundary + viewTrans.width;
              this._topBoundary = this._bottomBoundary + viewTrans.height;

              this._moveContentToTopLeft(viewTrans.contentSize);
            }
          }
        }, {
          key: "_hasNestedViewGroup",
          value: function _hasNestedViewGroup(event, captureListeners) {
            if (!event || event.eventPhase !== Event.CAPTURING_PHASE) {
              return;
            }

            if (captureListeners) {
              // captureListeners are arranged from child to parent
              for (var _iterator = _createForOfIteratorHelperLoose(captureListeners), _step; !(_step = _iterator()).done;) {
                var listener = _step.value;
                var item = listener;

                if (this.node === item) {
                  if (event.target && event.target.getComponent(ViewGroup)) {
                    return true;
                  }

                  return false;
                }

                if (item.getComponent(ViewGroup)) {
                  return true;
                }
              }
            }

            return false;
          }
        }, {
          key: "_startInertiaScroll",
          value: function _startInertiaScroll(touchMoveVelocity) {
            var inertiaTotalMovement = new Vec3(touchMoveVelocity);
            inertiaTotalMovement.multiplyScalar(MOVEMENT_FACTOR);

            this._startAttenuatingAutoScroll(inertiaTotalMovement, touchMoveVelocity);
          }
        }, {
          key: "_calculateAttenuatedFactor",
          value: function _calculateAttenuatedFactor(distance) {
            if (this.brake <= 0) {
              return 1 - this.brake;
            } // attenuate formula from: http://learnopengl.com/#!Lighting/Light-casters


            return (1 - this.brake) * (1 / (1 + distance * 0.000014 + distance * distance * 0.000000008));
          }
        }, {
          key: "_startAttenuatingAutoScroll",
          value: function _startAttenuatingAutoScroll(deltaMove, initialVelocity) {
            var targetDelta = new Vec3(deltaMove);
            targetDelta.normalize();

            if (this._content && this.view) {
              var contentSize = this._content._uiProps.uiTransformComp.contentSize;
              var scrollViewSize = this.view.contentSize;
              var totalMoveWidth = contentSize.width - scrollViewSize.width;
              var totalMoveHeight = contentSize.height - scrollViewSize.height;

              var attenuatedFactorX = this._calculateAttenuatedFactor(totalMoveWidth);

              var attenuatedFactorY = this._calculateAttenuatedFactor(totalMoveHeight);

              targetDelta.x = targetDelta.x * totalMoveWidth * (1 - this.brake) * attenuatedFactorX;
              targetDelta.y = targetDelta.y * totalMoveHeight * attenuatedFactorY * (1 - this.brake);
              targetDelta.z = 0;
            }

            var originalMoveLength = deltaMove.length();
            var factor = targetDelta.length() / originalMoveLength;
            targetDelta.add(deltaMove);

            if (this.brake > 0 && factor > 7) {
              factor = Math.sqrt(factor);
              var a = new Vec3(deltaMove);
              a.multiplyScalar(factor);
              targetDelta.set(a);
              targetDelta.add(deltaMove);
            }

            var time = this._calculateAutoScrollTimeByInitialSpeed(initialVelocity.length());

            if (this.brake > 0 && factor > 3) {
              factor = 3;
              time = time * factor;
            }

            if (this.brake === 0 && factor > 1) {
              time = time * factor;
            }

            this._startAutoScroll(targetDelta, time, true);
          }
        }, {
          key: "_calculateAutoScrollTimeByInitialSpeed",
          value: function _calculateAutoScrollTimeByInitialSpeed(initialSpeed) {
            return Math.sqrt(Math.sqrt(initialSpeed / 5));
          }
        }, {
          key: "_startAutoScroll",
          value: function _startAutoScroll(deltaMove, timeInSecond) {
            var attenuated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            var adjustedDeltaMove = this._flattenVectorByDirection(deltaMove);

            this._autoScrolling = true;
            this._autoScrollTargetDelta = adjustedDeltaMove;
            this._autoScrollAttenuate = attenuated;
            Vec3.copy(this._autoScrollStartPosition, this.getContentPosition());
            this._autoScrollTotalTime = timeInSecond;
            this._autoScrollAccumulatedTime = 0;
            this._autoScrollBraking = false;
            this._isScrollEndedWithThresholdEventFired = false;
            this._autoScrollBrakingStartPosition = new Vec3();

            var currentOutOfBoundary = this._getHowMuchOutOfBoundary();

            if (!currentOutOfBoundary.equals(ZERO$1, EPSILON)) {
              this._autoScrollCurrentlyOutOfBoundary = true;
            }
          }
        }, {
          key: "_calculateTouchMoveVelocity",
          value: function _calculateTouchMoveVelocity() {
            var totalTime = 0;
            totalTime = this._touchMoveTimeDeltas.reduce(function (a, b) {
              return a + b;
            }, totalTime);

            if (totalTime <= 0 || totalTime >= 0.5) {
              return new Vec3();
            }

            var totalMovement = new Vec3();
            totalMovement = this._touchMoveDisplacements.reduce(function (a, b) {
              a.add(b);
              return a;
            }, totalMovement);
            return new Vec3(totalMovement.x * (1 - this.brake) / totalTime, totalMovement.y * (1 - this.brake) / totalTime, 0);
          }
        }, {
          key: "_flattenVectorByDirection",
          value: function _flattenVectorByDirection(vector) {
            var result = vector;
            result.x = this.horizontal ? result.x : 0;
            result.y = this.vertical ? result.y : 0;
            return result;
          }
        }, {
          key: "_moveContent",
          value: function _moveContent(deltaMove, canStartBounceBack) {
            var adjustedMove = this._flattenVectorByDirection(deltaMove);

            _tempVec3.set(this.getContentPosition());

            _tempVec3.add(adjustedMove);

            _tempVec3.set(Math.floor(_tempVec3.x * TOLERANCE) * EPSILON, Math.floor(_tempVec3.y * TOLERANCE) * EPSILON, _tempVec3.z);

            this.setContentPosition(_tempVec3);

            var outOfBoundary = this._getHowMuchOutOfBoundary();

            this._updateScrollBar(outOfBoundary);

            if (this.elastic && canStartBounceBack) {
              this._startBounceBackIfNeeded();
            }
          }
        }, {
          key: "_getContentLeftBoundary",
          value: function _getContentLeftBoundary() {
            if (!this._content) {
              return -1;
            }

            var contentPos = this.getContentPosition();
            var uiTrans = this._content._uiProps.uiTransformComp;
            return contentPos.x - uiTrans.anchorX * uiTrans.width;
          }
        }, {
          key: "_getContentRightBoundary",
          value: function _getContentRightBoundary() {
            if (!this._content) {
              return -1;
            }

            var uiTrans = this._content._uiProps.uiTransformComp;
            return this._getContentLeftBoundary() + uiTrans.width;
          }
        }, {
          key: "_getContentTopBoundary",
          value: function _getContentTopBoundary() {
            if (!this._content) {
              return -1;
            }

            var uiTrans = this._content._uiProps.uiTransformComp;
            return this._getContentBottomBoundary() + uiTrans.height;
          }
        }, {
          key: "_getContentBottomBoundary",
          value: function _getContentBottomBoundary() {
            if (!this._content) {
              return -1;
            }

            var contentPos = this.getContentPosition();
            var uiTrans = this._content._uiProps.uiTransformComp;
            return contentPos.y - uiTrans.anchorY * uiTrans.height;
          }
        }, {
          key: "_getHowMuchOutOfBoundary",
          value: function _getHowMuchOutOfBoundary(addition) {
            addition = addition || new Vec3();

            if (addition.equals(ZERO$1, EPSILON) && !this._outOfBoundaryAmountDirty) {
              return this._outOfBoundaryAmount;
            }

            var outOfBoundaryAmount = new Vec3();

            if (this._getContentLeftBoundary() + addition.x > this._leftBoundary) {
              outOfBoundaryAmount.x = this._leftBoundary - (this._getContentLeftBoundary() + addition.x);
            } else if (this._getContentRightBoundary() + addition.x < this._rightBoundary) {
              outOfBoundaryAmount.x = this._rightBoundary - (this._getContentRightBoundary() + addition.x);
            }

            if (this._getContentTopBoundary() + addition.y < this._topBoundary) {
              outOfBoundaryAmount.y = this._topBoundary - (this._getContentTopBoundary() + addition.y);
            } else if (this._getContentBottomBoundary() + addition.y > this._bottomBoundary) {
              outOfBoundaryAmount.y = this._bottomBoundary - (this._getContentBottomBoundary() + addition.y);
            }

            if (addition.equals(ZERO$1, EPSILON)) {
              this._outOfBoundaryAmount = outOfBoundaryAmount;
              this._outOfBoundaryAmountDirty = false;
            }

            outOfBoundaryAmount = this._clampDelta(outOfBoundaryAmount);
            return outOfBoundaryAmount;
          }
        }, {
          key: "_updateScrollBar",
          value: function _updateScrollBar(outOfBoundary) {
            if (this._horizontalScrollBar) {
              this._horizontalScrollBar.onScroll(outOfBoundary);
            }

            if (this.verticalScrollBar) {
              this.verticalScrollBar.onScroll(outOfBoundary);
            }
          }
        }, {
          key: "_onScrollBarTouchBegan",
          value: function _onScrollBarTouchBegan() {
            if (this._horizontalScrollBar) {
              this._horizontalScrollBar.onTouchBegan();
            }

            if (this.verticalScrollBar) {
              this.verticalScrollBar.onTouchBegan();
            }
          }
        }, {
          key: "_onScrollBarTouchEnded",
          value: function _onScrollBarTouchEnded() {
            if (this._horizontalScrollBar) {
              this._horizontalScrollBar.onTouchEnded();
            }

            if (this.verticalScrollBar) {
              this.verticalScrollBar.onTouchEnded();
            }
          }
        }, {
          key: "_dispatchEvent",
          value: function _dispatchEvent(event) {
            if (event === EventType$2.SCROLL_ENDED) {
              this._scrollEventEmitMask = 0;
            } else if (event === EventType$2.SCROLL_TO_TOP || event === EventType$2.SCROLL_TO_BOTTOM || event === EventType$2.SCROLL_TO_LEFT || event === EventType$2.SCROLL_TO_RIGHT) {
              var flag = 1 << eventMap[event];

              if (this._scrollEventEmitMask & flag) {
                return;
              } else {
                this._scrollEventEmitMask |= flag;
              }
            }

            EventHandler.emitEvents(this.scrollEvents, this, eventMap[event]);
            this.node.emit(event, this);
          }
        }, {
          key: "_adjustContentOutOfBoundary",
          value: function _adjustContentOutOfBoundary() {
            if (!this._content) {
              return;
            }

            this._outOfBoundaryAmountDirty = true;

            if (this._isOutOfBoundary()) {
              var outOfBoundary = this._getHowMuchOutOfBoundary();

              _tempVec3.set(this.getContentPosition());

              _tempVec3.add(outOfBoundary);

              this._content.setPosition(_tempVec3);

              this._updateScrollBar(ZERO$1);
            }
          }
        }, {
          key: "_hideScrollBar",
          value: function _hideScrollBar() {
            if (this._horizontalScrollBar) {
              this._horizontalScrollBar.hide();
            }

            if (this._verticalScrollBar) {
              this._verticalScrollBar.hide();
            }
          }
        }, {
          key: "_updateScrollBarState",
          value: function _updateScrollBarState() {
            if (!this._content || !this.view) {
              return;
            }

            var viewTrans = this.view;
            var uiTrans = this._content._uiProps.uiTransformComp;

            if (this.verticalScrollBar) {
              if (uiTrans.height < viewTrans.height) {
                this.verticalScrollBar.hide();
              } else {
                this.verticalScrollBar.show();
              }
            }

            if (this.horizontalScrollBar) {
              if (uiTrans.width < viewTrans.width) {
                this.horizontalScrollBar.hide();
              } else {
                this.horizontalScrollBar.show();
              }
            }
          } // This is for ScrollView as children of a Button

        }, {
          key: "_stopPropagationIfTargetIsMe",
          value: function _stopPropagationIfTargetIsMe(event) {
            if (event.eventPhase === Event.AT_TARGET && event.target === this.node) {
              event.propagationStopped = true;
            }
          }
        }, {
          key: "_processDeltaMove",
          value: function _processDeltaMove(deltaMove) {
            this._scrollChildren(deltaMove);

            this._gatherTouchMove(deltaMove);
          }
        }, {
          key: "_handleMoveLogic",
          value: function _handleMoveLogic(touch) {
            this._deltaPos.set(this._getLocalAxisAlignDelta(touch));

            this._processDeltaMove(this._deltaPos);
          }
        }, {
          key: "_handleReleaseLogic",
          value: function _handleReleaseLogic(touch) {
            this._deltaPos.set(this._getLocalAxisAlignDelta(touch));

            this._gatherTouchMove(this._deltaPos);

            this._processInertiaScroll();

            if (this._scrolling) {
              this._scrolling = false;

              if (!this._autoScrolling) {
                this._dispatchEvent(EventType$2.SCROLL_ENDED);
              }
            }
          }
        }, {
          key: "_getLocalAxisAlignDelta",
          value: function _getLocalAxisAlignDelta(touch) {
            var uiTransformComp = this.node._uiProps.uiTransformComp;
            var vec = new Vec3();

            if (uiTransformComp) {
              touch.getUILocation(_tempVec2);
              touch.getUIPreviousLocation(_tempVec2_1);

              _tempVec3.set(_tempVec2.x, _tempVec2.y, 0);

              _tempVec3_1.set(_tempVec2_1.x, _tempVec2_1.y, 0);

              uiTransformComp.convertToNodeSpaceAR(_tempVec3, _tempVec3);
              uiTransformComp.convertToNodeSpaceAR(_tempVec3_1, _tempVec3_1);
              Vec3.subtract(vec, _tempVec3, _tempVec3_1);
            }

            return vec;
          }
        }, {
          key: "_scrollChildren",
          value: function _scrollChildren(deltaMove) {
            deltaMove = this._clampDelta(deltaMove);
            var realMove = deltaMove;
            var outOfBoundary;

            if (this.elastic) {
              outOfBoundary = this._getHowMuchOutOfBoundary();
              realMove.x *= outOfBoundary.x === 0 ? 1 : 0.5;
              realMove.y *= outOfBoundary.y === 0 ? 1 : 0.5;
            }

            if (!this.elastic) {
              outOfBoundary = this._getHowMuchOutOfBoundary(realMove);
              realMove.add(outOfBoundary);
            }

            var scrollEventType;

            if (this._content) {
              var _ref = this._content._uiProps.uiTransformComp,
                  anchorX = _ref.anchorX,
                  anchorY = _ref.anchorY,
                  width = _ref.width,
                  height = _ref.height;
              var pos = this._content.position || ZERO$1;

              if (realMove.y > 0) {
                // up
                var icBottomPos = pos.y - anchorY * height;

                if (icBottomPos + realMove.y >= this._bottomBoundary) {
                  scrollEventType = EventType$2.SCROLL_TO_BOTTOM;
                }
              } else if (realMove.y < 0) {
                // down
                var icTopPos = pos.y - anchorY * height + height;

                if (icTopPos + realMove.y <= this._topBoundary) {
                  scrollEventType = EventType$2.SCROLL_TO_TOP;
                }
              }

              if (realMove.x < 0) {
                // left
                var icRightPos = pos.x - anchorX * width + width;

                if (icRightPos + realMove.x <= this._rightBoundary) {
                  scrollEventType = EventType$2.SCROLL_TO_RIGHT;
                }
              } else if (realMove.x > 0) {
                // right
                var icLeftPos = pos.x - anchorX * width;

                if (icLeftPos + realMove.x >= this._leftBoundary) {
                  scrollEventType = EventType$2.SCROLL_TO_LEFT;
                }
              }
            }

            this._moveContent(realMove, false);

            if (realMove.x !== 0 || realMove.y !== 0) {
              if (!this._scrolling) {
                this._scrolling = true;

                this._dispatchEvent(EventType$2.SCROLL_BEGAN);
              }

              this._dispatchEvent(EventType$2.SCROLLING);
            }

            if (scrollEventType && scrollEventType.length > 0) {
              this._dispatchEvent(scrollEventType);
            }
          }
        }, {
          key: "_handlePressLogic",
          value: function _handlePressLogic() {
            if (this._autoScrolling) {
              this._dispatchEvent(EventType$2.SCROLL_ENDED);
            }

            this._autoScrolling = false;
            this._isBouncing = false;
            this._touchMovePreviousTimestamp = getTimeInMilliseconds();
            this._touchMoveDisplacements.length = 0;
            this._touchMoveTimeDeltas.length = 0;

            this._onScrollBarTouchBegan();
          }
        }, {
          key: "_clampDelta",
          value: function _clampDelta(delta) {
            if (this._content && this.view) {
              var scrollViewSize = this.view.contentSize;
              var uiTrans = this._content._uiProps.uiTransformComp;

              if (uiTrans.width < scrollViewSize.width) {
                delta.x = 0;
              }

              if (uiTrans.height < scrollViewSize.height) {
                delta.y = 0;
              }
            }

            return delta;
          }
        }, {
          key: "_gatherTouchMove",
          value: function _gatherTouchMove(delta) {
            var clampDt = delta.clone();

            this._clampDelta(clampDt);

            while (this._touchMoveDisplacements.length >= NUMBER_OF_GATHERED_TOUCHES_FOR_MOVE_SPEED) {
              this._touchMoveDisplacements.shift();

              this._touchMoveTimeDeltas.shift();
            }

            this._touchMoveDisplacements.push(clampDt);

            var timeStamp = getTimeInMilliseconds();

            this._touchMoveTimeDeltas.push((timeStamp - this._touchMovePreviousTimestamp) / 1000);

            this._touchMovePreviousTimestamp = timeStamp;
          }
        }, {
          key: "_startBounceBackIfNeeded",
          value: function _startBounceBackIfNeeded() {
            if (!this.elastic) {
              return false;
            }

            var bounceBackAmount = this._getHowMuchOutOfBoundary();

            bounceBackAmount = this._clampDelta(bounceBackAmount);

            if (bounceBackAmount.equals(ZERO$1, EPSILON)) {
              return false;
            }

            var bounceBackTime = Math.max(this.bounceDuration, 0);

            this._startAutoScroll(bounceBackAmount, bounceBackTime, true);

            if (!this._isBouncing) {
              if (bounceBackAmount.y > 0) {
                this._dispatchEvent(EventType$2.BOUNCE_TOP);
              }

              if (bounceBackAmount.y < 0) {
                this._dispatchEvent(EventType$2.BOUNCE_BOTTOM);
              }

              if (bounceBackAmount.x > 0) {
                this._dispatchEvent(EventType$2.BOUNCE_RIGHT);
              }

              if (bounceBackAmount.x < 0) {
                this._dispatchEvent(EventType$2.BOUNCE_LEFT);
              }

              this._isBouncing = true;
            }

            return true;
          }
        }, {
          key: "_processInertiaScroll",
          value: function _processInertiaScroll() {
            var bounceBackStarted = this._startBounceBackIfNeeded();

            if (!bounceBackStarted && this.inertia) {
              var touchMoveVelocity = this._calculateTouchMoveVelocity();

              if (!touchMoveVelocity.equals(_tempVec3, EPSILON) && this.brake < 1) {
                this._startInertiaScroll(touchMoveVelocity);
              }
            }

            this._onScrollBarTouchEnded();
          }
        }, {
          key: "_isOutOfBoundary",
          value: function _isOutOfBoundary() {
            var outOfBoundary = this._getHowMuchOutOfBoundary();

            return !outOfBoundary.equals(ZERO$1, EPSILON);
          }
        }, {
          key: "_isNecessaryAutoScrollBrake",
          value: function _isNecessaryAutoScrollBrake() {
            if (this._autoScrollBraking) {
              return true;
            }

            if (this._isOutOfBoundary()) {
              if (!this._autoScrollCurrentlyOutOfBoundary) {
                this._autoScrollCurrentlyOutOfBoundary = true;
                this._autoScrollBraking = true;
                this._autoScrollBrakingStartPosition = this.getContentPosition();
                return true;
              }
            } else {
              this._autoScrollCurrentlyOutOfBoundary = false;
            }

            return false;
          }
        }, {
          key: "_processAutoScrolling",
          value: function _processAutoScrolling(dt) {
            var isAutoScrollBrake = this._isNecessaryAutoScrollBrake();

            var brakingFactor = isAutoScrollBrake ? OUT_OF_BOUNDARY_BREAKING_FACTOR : 1;
            this._autoScrollAccumulatedTime += dt * (1 / brakingFactor);
            var percentage = Math.min(1, this._autoScrollAccumulatedTime / this._autoScrollTotalTime);

            if (this._autoScrollAttenuate) {
              percentage = quintEaseOut(percentage);
            }

            var a = new Vec3(this._autoScrollTargetDelta);
            a.multiplyScalar(percentage);
            var newPosition = new Vec3(this._autoScrollStartPosition);
            newPosition.add(a);
            var reachedEnd = Math.abs(percentage - 1) <= EPSILON;
            var fireEvent = Math.abs(percentage - 1) <= this.getScrollEndedEventTiming();

            if (fireEvent && !this._isScrollEndedWithThresholdEventFired) {
              this._dispatchEvent(EventType$2.SCROLL_ENG_WITH_THRESHOLD);

              this._isScrollEndedWithThresholdEventFired = true;
            }

            if (this.elastic) {
              var brakeOffsetPosition = new Vec3(newPosition);
              brakeOffsetPosition.subtract(this._autoScrollBrakingStartPosition);

              if (isAutoScrollBrake) {
                brakeOffsetPosition.multiplyScalar(brakingFactor);
              }

              newPosition.set(this._autoScrollBrakingStartPosition);
              newPosition.add(brakeOffsetPosition);
            } else {
              var moveDelta = new Vec3(newPosition);
              moveDelta.subtract(this.getContentPosition());

              var outOfBoundary = this._getHowMuchOutOfBoundary(moveDelta);

              if (!outOfBoundary.equals(ZERO$1, EPSILON)) {
                newPosition.add(outOfBoundary);
                reachedEnd = true;
              }
            }

            if (reachedEnd) {
              this._autoScrolling = false;
            }

            var deltaMove = new Vec3(newPosition);
            deltaMove.subtract(this.getContentPosition());

            this._moveContent(this._clampDelta(deltaMove), reachedEnd);

            this._dispatchEvent(EventType$2.SCROLLING);

            if (!this._autoScrolling) {
              this._isBouncing = false;
              this._scrolling = false;

              this._dispatchEvent(EventType$2.SCROLL_ENDED);
            }
          }
        }, {
          key: "_checkMouseWheel",
          value: function _checkMouseWheel(dt) {
            var currentOutOfBoundary = this._getHowMuchOutOfBoundary();

            var maxElapsedTime = 0.1;

            if (!currentOutOfBoundary.equals(ZERO$1, EPSILON)) {
              this._processInertiaScroll();

              this.unschedule(this._checkMouseWheel);

              this._dispatchEvent(EventType$2.SCROLL_ENDED);

              this._stopMouseWheel = false;
              return;
            }

            this._mouseWheelEventElapsedTime += dt; // mouse wheel event is ended

            if (this._mouseWheelEventElapsedTime > maxElapsedTime) {
              this._onScrollBarTouchEnded();

              this.unschedule(this._checkMouseWheel);

              this._dispatchEvent(EventType$2.SCROLL_ENDED);

              this._stopMouseWheel = false;
            }
          }
        }, {
          key: "_calculateMovePercentDelta",
          value: function _calculateMovePercentDelta(options) {
            var anchor = options.anchor;
            var applyToHorizontal = options.applyToHorizontal;
            var applyToVertical = options.applyToVertical;

            this._calculateBoundary();

            anchor.clampf(new Vec2(0, 0), new Vec2(1, 1));

            var bottomDelta = this._getContentBottomBoundary() - this._bottomBoundary;

            bottomDelta = -bottomDelta;

            var leftDelta = this._getContentLeftBoundary() - this._leftBoundary;

            leftDelta = -leftDelta;
            var moveDelta = new Vec3();

            if (this._content && this.view) {
              var totalScrollDelta = 0;
              var uiTrans = this._content._uiProps.uiTransformComp;
              var contentSize = uiTrans.contentSize;
              var scrollSize = this.view.contentSize;

              if (applyToHorizontal) {
                totalScrollDelta = contentSize.width - scrollSize.width;
                moveDelta.x = leftDelta - totalScrollDelta * anchor.x;
              }

              if (applyToVertical) {
                totalScrollDelta = contentSize.height - scrollSize.height;
                moveDelta.y = bottomDelta - totalScrollDelta * anchor.y;
              }
            }

            return moveDelta;
          }
        }, {
          key: "_moveContentToTopLeft",
          value: function _moveContentToTopLeft(scrollViewSize) {
            var bottomDelta = this._getContentBottomBoundary() - this._bottomBoundary;

            bottomDelta = -bottomDelta;
            var moveDelta = new Vec3();
            var totalScrollDelta = 0;

            var leftDelta = this._getContentLeftBoundary() - this._leftBoundary;

            leftDelta = -leftDelta; // 是否限制在上视区上边

            if (this._content) {
              var uiTrans = this._content._uiProps.uiTransformComp;
              var contentSize = uiTrans.contentSize;

              if (contentSize.height < scrollViewSize.height) {
                totalScrollDelta = contentSize.height - scrollViewSize.height;
                moveDelta.y = bottomDelta - totalScrollDelta;
              } // 是否限制在上视区左边


              if (contentSize.width < scrollViewSize.width) {
                totalScrollDelta = contentSize.width - scrollViewSize.width;
                moveDelta.x = leftDelta;
              }
            }

            this._updateScrollBarState();

            this._moveContent(moveDelta);

            this._adjustContentOutOfBoundary();
          }
        }, {
          key: "_scaleChanged",
          value: function _scaleChanged(value) {
            if (value === TransformBit.SCALE) {
              this._calculateBoundary();
            }
          }
        }, {
          key: "content",

          /**
           * @en
           * This is a reference to the UI element to be scrolled.
           *
           * @zh
           * 可滚动展示内容的节点。
           */
          get: function get() {
            return this._content;
          },
          set: function set(value) {
            if (this._content === value) {
              return;
            }

            var viewTrans = value && value.parent && value.parent._uiProps.uiTransformComp;

            if (value && (!value || !viewTrans)) {
              logID(4302);
              return;
            }

            this._content = value;

            this._calculateBoundary();
          }
          /**
           * @en
           * Enable horizontal scroll.
           *
           * @zh
           * 是否开启水平滚动。
           */

        }, {
          key: "horizontalScrollBar",

          /**
           * @en
           * The horizontal scrollbar reference.
           * @zh
           * 水平滚动的 ScrollBar。
           */
          get: function get() {
            return this._horizontalScrollBar;
          },
          set: function set(value) {
            if (this._horizontalScrollBar === value) {
              return;
            }

            this._horizontalScrollBar = value;

            if (this._horizontalScrollBar) {
              this._horizontalScrollBar.setScrollView(this);

              this._updateScrollBar(ZERO$1);
            }
          }
          /**
           * @en
           * Enable vertical scroll.
           *
           * @zh
           * 是否开启垂直滚动。
           */

        }, {
          key: "verticalScrollBar",

          /**
           * @en
           * The vertical scrollbar reference.
           *
           * @zh
           * 垂直滚动的 ScrollBar。
           */
          get: function get() {
            return this._verticalScrollBar;
          },
          set: function set(value) {
            if (this._verticalScrollBar === value) {
              return;
            }

            this._verticalScrollBar = value;

            if (this._verticalScrollBar) {
              this._verticalScrollBar.setScrollView(this);

              this._updateScrollBar(ZERO$1);
            }
          }
          /**
           * @en
           * If cancelInnerEvents is set to true, the scroll behavior will cancel touch events on inner content nodes
           * It's set to true by default.
           *
           * @zh
           * 如果这个属性被设置为 true，那么滚动行为会取消子节点上注册的触摸事件，默认被设置为 true。<br/>
           * 注意，子节点上的 touchstart 事件仍然会触发，触点移动距离非常短的情况下 touchmove 和 touchend 也不会受影响。
           */

        }, {
          key: "view",
          get: function get() {
            var parent = this._content && this._content.parent;

            if (!parent) {
              return null;
            }

            return parent._uiProps.uiTransformComp;
          }
        }]);

        return ScrollView;
      }(ViewGroup), _class3$9.EventType = EventType$2, _temp$c), (_descriptor$b = _applyDecoratedDescriptor(_class2$b.prototype, "bounceDuration", [serializable, _dec6$b, _dec7$b, _dec8$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2$b = _applyDecoratedDescriptor(_class2$b.prototype, "brake", [serializable, _dec9$a, _dec10$a, _dec11$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor3$a = _applyDecoratedDescriptor(_class2$b.prototype, "elastic", [serializable, _dec12$9, _dec13$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4$9 = _applyDecoratedDescriptor(_class2$b.prototype, "inertia", [serializable, _dec14$7, _dec15$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2$b.prototype, "content", [_dec16$5, _dec17$5, _dec18$5], Object.getOwnPropertyDescriptor(_class2$b.prototype, "content"), _class2$b.prototype), _descriptor5$9 = _applyDecoratedDescriptor(_class2$b.prototype, "horizontal", [serializable, _dec19$5, _dec20$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2$b.prototype, "horizontalScrollBar", [_dec21$4, _dec22$4, _dec23$4], Object.getOwnPropertyDescriptor(_class2$b.prototype, "horizontalScrollBar"), _class2$b.prototype), _descriptor6$6 = _applyDecoratedDescriptor(_class2$b.prototype, "vertical", [serializable, _dec24$4, _dec25$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2$b.prototype, "verticalScrollBar", [_dec26$3, _dec27$3, _dec28$3], Object.getOwnPropertyDescriptor(_class2$b.prototype, "verticalScrollBar"), _class2$b.prototype), _descriptor7$5 = _applyDecoratedDescriptor(_class2$b.prototype, "cancelInnerEvents", [serializable, _dec29$3, _dec30$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor8$5 = _applyDecoratedDescriptor(_class2$b.prototype, "scrollEvents", [_dec31$3, serializable, _dec32$3, _dec33$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9$5 = _applyDecoratedDescriptor(_class2$b.prototype, "_content", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10$5 = _applyDecoratedDescriptor(_class2$b.prototype, "_horizontalScrollBar", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11$5 = _applyDecoratedDescriptor(_class2$b.prototype, "_verticalScrollBar", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$b)) || _class$d) || _class$d) || _class$d) || _class$d) || _class$d));
      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event scroll-to-top
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */

      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event scroll-to-bottom
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */

      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event scroll-to-left
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */

      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event scroll-to-right
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */

      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event scrolling
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */

      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event bounce-bottom
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */

      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event bounce-top
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */

      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event bounce-left
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */

      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event bounce-right
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */

      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event scroll-ended
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */

      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event touch-up
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */

      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event scroll-began
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */

      var _dec$e, _dec2$e, _dec3$d, _dec4$c, _dec5$c, _dec6$c, _dec7$c, _dec8$b, _dec9$b, _dec10$b, _dec11$b, _dec12$a, _dec13$9, _class$e, _class2$c, _descriptor$c, _descriptor2$c, _descriptor3$b, _descriptor4$a, _class3$a, _temp$d;

      var _tempPos$1 = new Vec3();
      /**
       * @en
       * The Slider Direction.
       *
       * @zh
       * 滑动器方向。
       */


      var Direction$1;

      (function (Direction) {
        Direction[Direction["Horizontal"] = 0] = "Horizontal";
        Direction[Direction["Vertical"] = 1] = "Vertical";
      })(Direction$1 || (Direction$1 = {}));

      ccenum(Direction$1);
      /**
       * @en
       * The Slider Control.
       *
       * @zh
       * 滑动器组件。
       */

      var Slider = function (v) { return exports({ Slider: v, SliderComponent: v }), v; }((_dec$e = ccclass('cc.Slider'), _dec2$e = help(), _dec3$d = executionOrder(110), _dec4$c = menu(), _dec5$c = requireComponent(UITransform), _dec6$c = type(Sprite), _dec7$c = tooltip(), _dec8$b = type(Direction$1), _dec9$b = tooltip(), _dec10$b = range(), _dec11$b = tooltip(), _dec12$a = type([EventHandler]), _dec13$9 = tooltip(), _dec$e(_class$e = _dec2$e(_class$e = _dec3$d(_class$e = _dec4$c(_class$e = _dec5$c(_class$e = (_class2$c = (_temp$d = _class3$a = /*#__PURE__*/function (_Component) {
        _inherits(Slider, _Component);

        function Slider() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Slider);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Slider)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "slideEvents", _descriptor$c, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_handle", _descriptor2$c, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_direction", _descriptor3$b, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_progress", _descriptor4$a, _assertThisInitialized(_this));

          _this._offset = new Vec3();
          _this._dragging = false;
          _this._touchHandle = false;
          _this._handleLocalPos = new Vec3();
          _this._touchPos = new Vec3();
          return _this;
        }

        _createClass(Slider, [{
          key: "__preload",
          value: function __preload() {
            this._updateHandlePosition();
          } // 注册事件

        }, {
          key: "onEnable",
          value: function onEnable() {
            this._updateHandlePosition();

            this.node.on(SystemEventType.TOUCH_START, this._onTouchBegan, this);
            this.node.on(SystemEventType.TOUCH_MOVE, this._onTouchMoved, this);
            this.node.on(SystemEventType.TOUCH_END, this._onTouchEnded, this);
            this.node.on(SystemEventType.TOUCH_CANCEL, this._onTouchCancelled, this);

            if (this._handle && this._handle.isValid) {
              this._handle.node.on(SystemEventType.TOUCH_START, this._onHandleDragStart, this);

              this._handle.node.on(SystemEventType.TOUCH_MOVE, this._onTouchMoved, this);

              this._handle.node.on(SystemEventType.TOUCH_END, this._onTouchEnded, this);
            }
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            this.node.off(SystemEventType.TOUCH_START, this._onTouchBegan, this);
            this.node.off(SystemEventType.TOUCH_MOVE, this._onTouchMoved, this);
            this.node.off(SystemEventType.TOUCH_END, this._onTouchEnded, this);
            this.node.off(SystemEventType.TOUCH_CANCEL, this._onTouchCancelled, this);

            if (this._handle && this._handle.isValid) {
              this._handle.node.off(SystemEventType.TOUCH_START, this._onHandleDragStart, this);

              this._handle.node.off(SystemEventType.TOUCH_MOVE, this._onTouchMoved, this);

              this._handle.node.off(SystemEventType.TOUCH_END, this._onTouchEnded, this);
            }
          }
        }, {
          key: "_onHandleDragStart",
          value: function _onHandleDragStart(event) {
            if (!event || !this._handle || !this._handle.node._uiProps.uiTransformComp) {
              return;
            }

            this._dragging = true;
            this._touchHandle = true;
            var touhPos = event.touch.getUILocation();
            Vec3.set(this._touchPos, touhPos.x, touhPos.y, 0);

            this._handle.node._uiProps.uiTransformComp.convertToNodeSpaceAR(this._touchPos, this._offset);

            event.propagationStopped = true;
          }
        }, {
          key: "_onTouchBegan",
          value: function _onTouchBegan(event) {
            if (!this._handle || !event) {
              return;
            }

            this._dragging = true;

            if (!this._touchHandle) {
              this._handleSliderLogic(event.touch);
            }

            event.propagationStopped = true;
          }
        }, {
          key: "_onTouchMoved",
          value: function _onTouchMoved(event) {
            if (!this._dragging || !event) {
              return;
            }

            this._handleSliderLogic(event.touch);

            event.propagationStopped = true;
          }
        }, {
          key: "_onTouchEnded",
          value: function _onTouchEnded(event) {
            this._dragging = false;
            this._touchHandle = false;
            this._offset = new Vec3();

            if (event) {
              event.propagationStopped = true;
            }
          }
        }, {
          key: "_onTouchCancelled",
          value: function _onTouchCancelled(event) {
            this._dragging = false;

            if (event) {
              event.propagationStopped = true;
            }
          }
        }, {
          key: "_handleSliderLogic",
          value: function _handleSliderLogic(touch) {
            this._updateProgress(touch);

            this._emitSlideEvent();
          }
        }, {
          key: "_emitSlideEvent",
          value: function _emitSlideEvent() {
            EventHandler.emitEvents(this.slideEvents, this);
            this.node.emit('slide', this);
          }
        }, {
          key: "_updateProgress",
          value: function _updateProgress(touch) {
            if (!this._handle || !touch) {
              return;
            }

            var touchPos = touch.getUILocation();
            Vec3.set(this._touchPos, touchPos.x, touchPos.y, 0);
            var uiTrans = this.node._uiProps.uiTransformComp;
            var localTouchPos = uiTrans.convertToNodeSpaceAR(this._touchPos, _tempPos$1);

            if (this.direction === Direction$1.Horizontal) {
              this.progress = clamp01(0.5 + (localTouchPos.x - this._offset.x) / uiTrans.width);
            } else {
              this.progress = clamp01(0.5 + (localTouchPos.y - this._offset.y) / uiTrans.height);
            }
          }
        }, {
          key: "_updateHandlePosition",
          value: function _updateHandlePosition() {
            if (!this._handle) {
              return;
            }

            this._handleLocalPos.set(this._handle.node.getPosition());

            var uiTrans = this.node._uiProps.uiTransformComp;

            if (this._direction === Direction$1.Horizontal) {
              this._handleLocalPos.x = -uiTrans.width * uiTrans.anchorX + this.progress * uiTrans.width;
            } else {
              this._handleLocalPos.y = -uiTrans.height * uiTrans.anchorY + this.progress * uiTrans.height;
            }

            this._handle.node.setPosition(this._handleLocalPos);
          }
        }, {
          key: "_changeLayout",
          value: function _changeLayout() {
            var uiTrans = this.node._uiProps.uiTransformComp;
            var contentSize = uiTrans.contentSize;
            uiTrans.setContentSize(contentSize.height, contentSize.width);

            if (this._handle) {
              var pos = this._handle.node.position;

              if (this._direction === Direction$1.Horizontal) {
                this._handle.node.setPosition(pos.x, 0, pos.z);
              } else {
                this._handle.node.setPosition(0, pos.y, pos.z);
              }

              this._updateHandlePosition();
            }
          }
        }, {
          key: "handle",

          /**
           * @en
           * The "handle" part of the slider.
           *
           * @zh
           * 滑动器滑块按钮部件。
           */
          get: function get() {
            return this._handle;
          },
          set: function set(value) {
            if (this._handle === value) {
              return;
            }

            this._handle = value;
          }
          /**
           * @en
           * The slider direction.
           *
           * @zh
           * 滑动器方向。
           */

        }, {
          key: "direction",
          get: function get() {
            return this._direction;
          },
          set: function set(value) {
            if (this._direction === value) {
              return;
            }

            this._direction = value;

            this._changeLayout();
          }
          /**
           * @en
           * The current progress of the slider. The valid value is between 0-1.
           *
           * @zh
           * 当前进度值，该数值的区间是 0-1 之间。
           */

        }, {
          key: "progress",
          get: function get() {
            return this._progress;
          },
          set: function set(value) {
            if (this._progress === value) {
              return;
            }

            this._progress = value;

            this._updateHandlePosition();
          }
        }]);

        return Slider;
      }(Component), _class3$a.Direction = Direction$1, _temp$d), (_applyDecoratedDescriptor(_class2$c.prototype, "handle", [_dec6$c, _dec7$c], Object.getOwnPropertyDescriptor(_class2$c.prototype, "handle"), _class2$c.prototype), _applyDecoratedDescriptor(_class2$c.prototype, "direction", [_dec8$b, _dec9$b], Object.getOwnPropertyDescriptor(_class2$c.prototype, "direction"), _class2$c.prototype), _applyDecoratedDescriptor(_class2$c.prototype, "progress", [slide, _dec10$b, _dec11$b], Object.getOwnPropertyDescriptor(_class2$c.prototype, "progress"), _class2$c.prototype), _descriptor$c = _applyDecoratedDescriptor(_class2$c.prototype, "slideEvents", [_dec12$a, serializable, _dec13$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2$c = _applyDecoratedDescriptor(_class2$c.prototype, "_handle", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$b = _applyDecoratedDescriptor(_class2$c.prototype, "_direction", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Direction$1.Horizontal;
        }
      }), _descriptor4$a = _applyDecoratedDescriptor(_class2$c.prototype, "_progress", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      })), _class2$c)) || _class$e) || _class$e) || _class$e) || _class$e) || _class$e));
      /**
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event slide
       * @param {Event.EventCustom} event
       * @param {Slider} slider - The slider component.
       */

      /**
       * @zh
       * 组合任意多个枚举。
       * 此函数的行为等价于返回了一个新的枚举，其成员囊括了所有源枚举的成员。
       * 这些枚举的成员必须各不相同（包括成员名和值），否则行为是未定义的。
       * @en
       * Combine arbitray number of enumerations.
       * It behaves like an enumeration having members that is a combination of members of the source enumerations
       * is returned.
       * These enumerations shall have non-overlaped member names or member values.
       * If not, the behavior is undefined.
       * @example
       * ```ts
       * enum Apple { apple = 'apple', }
       * enum Pen { pen = 'pen' }
       * // As if `enum ApplePen { apple = 'apple'; pen = 'pen'; }`
       * const ApplePen = extendsEnum(Apple, Pen);
       * ```
       */

      function extendsEnum() {
        for (var _len = arguments.length, enums = new Array(_len), _key = 0; _key < _len; _key++) {
          enums[_key] = arguments[_key];
        }

        return Object.assign.apply(Object, [{}].concat(enums));
      }

      var _dec$f, _dec2$f, _dec3$e, _dec4$d, _dec5$d, _dec6$d, _dec7$d, _dec8$c, _dec9$c, _dec10$c, _dec11$c, _dec12$b, _class$f, _class2$d, _descriptor$d, _descriptor2$d, _descriptor3$c, _class3$b, _temp$e;
      var EventType$3;
      /**
       * @en
       * The toggle component is a CheckBox, when it used together with a ToggleGroup,
       * it could be treated as a RadioButton.
       *
       * @zh
       * Toggle 是一个 CheckBox，当它和 ToggleGroup 一起使用的时候，可以变成 RadioButton。
       */

      (function (EventType) {
        EventType["TOGGLE"] = "toggle";
      })(EventType$3 || (EventType$3 = {}));

      var Toggle = function (v) { return exports({ Toggle: v, ToggleComponent: v }), v; }((_dec$f = ccclass('cc.Toggle'), _dec2$f = help(), _dec3$e = executionOrder(110), _dec4$d = menu(), _dec5$d = requireComponent(UITransform), _dec6$d = displayOrder(), _dec7$d = tooltip(), _dec8$c = type(Sprite), _dec9$c = displayOrder(), _dec10$c = tooltip(), _dec11$c = type([EventHandler]), _dec12$b = tooltip(), _dec$f(_class$f = _dec2$f(_class$f = _dec3$e(_class$f = _dec4$d(_class$f = _dec5$d(_class$f = (_class2$d = (_temp$e = _class3$b = /*#__PURE__*/function (_Button) {
        _inherits(Toggle, _Button);

        function Toggle() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Toggle);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Toggle)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "checkEvents", _descriptor$d, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isChecked", _descriptor2$d, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_checkMark", _descriptor3$c, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(Toggle, [{
          key: "_internalToggle",
          value: function _internalToggle() {
            this.isChecked = !this.isChecked;
          }
        }, {
          key: "_set",
          value: function _set(value) {
            var emitEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            if (this._isChecked == value) return;
            this._isChecked = value;
            var group = this._toggleContainer;

            if (group && group.enabled && this.enabled) {
              if (value || !group.anyTogglesChecked() && !group.allowSwitchOff) {
                this._isChecked = true;
                group.notifyToggleCheck(this, emitEvent);
              }
            }

            this.playEffect();

            if (emitEvent) {
              this._emitToggleEvents();
            }
          } //

        }, {
          key: "playEffect",
          value: function playEffect() {
            if (this._checkMark) {
              this._checkMark.node.active = this._isChecked;
            }
          }
          /**
           * @en
           * Set isChecked without invoking checkEvents.
           *
           * @zh
           * 设置 isChecked 而不调用 checkEvents 回调。
           *
           * @param value - 是否被按下
           */

        }, {
          key: "setIsCheckedWithoutNotify",
          value: function setIsCheckedWithoutNotify(value) {
            this._set(value, false);
          }
        }, {
          key: "onEnable",
          value: function onEnable() {
            _get(_getPrototypeOf(Toggle.prototype), "onEnable", this).call(this);

            this.playEffect();

            {
              this.node.on(Toggle.EventType.CLICK, this._internalToggle, this);
            }
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            _get(_getPrototypeOf(Toggle.prototype), "onDisable", this).call(this);

            {
              this.node.off(Toggle.EventType.CLICK, this._internalToggle, this);
            }
          }
        }, {
          key: "OnDestroy",
          value: function OnDestroy() {
            var group = this._toggleContainer;

            if (group) {
              group.ensureValidState();
            }
          }
        }, {
          key: "_emitToggleEvents",
          value: function _emitToggleEvents() {
            this.node.emit(Toggle.EventType.TOGGLE, this);

            if (this.checkEvents) {
              EventHandler.emitEvents(this.checkEvents, this);
            }
          }
        }, {
          key: "isChecked",

          /**
           * @en
           * When this value is true, the check mark component will be enabled,
           * otherwise the check mark component will be disabled.
           *
           * @zh
           * 如果这个设置为 true，则 check mark 组件会处于 enabled 状态，否则处于 disabled 状态。
           */
          get: function get() {
            return this._isChecked;
          },
          set: function set(value) {
            this._set(value);
          }
          /**
           * @en
           * The image used for the checkmark.
           *
           * @zh
           * Toggle 处于选中状态时显示的图片。
           */

        }, {
          key: "checkMark",
          get: function get() {
            return this._checkMark;
          },
          set: function set(value) {
            if (this._checkMark === value) {
              return;
            }

            this._checkMark = value;
          }
        }, {
          key: "_resizeToTarget",
          set: function set(value) {
            if (value) {
              this._resizeNodeToTargetNode();
            }
          }
        }, {
          key: "_toggleContainer",
          get: function get() {
            var parent = this.node.parent;

            if (legacyCC.Node.isNode(parent)) {
              return parent.getComponent('cc.ToggleContainer');
            }

            return null;
          }
        }]);

        return Toggle;
      }(Button), _class3$b.EventType = extendsEnum(EventType$3, EventType), _temp$e), (_applyDecoratedDescriptor(_class2$d.prototype, "isChecked", [_dec6$d, _dec7$d], Object.getOwnPropertyDescriptor(_class2$d.prototype, "isChecked"), _class2$d.prototype), _applyDecoratedDescriptor(_class2$d.prototype, "checkMark", [_dec8$c, _dec9$c, _dec10$c], Object.getOwnPropertyDescriptor(_class2$d.prototype, "checkMark"), _class2$d.prototype), _descriptor$d = _applyDecoratedDescriptor(_class2$d.prototype, "checkEvents", [_dec11$c, serializable, _dec12$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2$d = _applyDecoratedDescriptor(_class2$d.prototype, "_isChecked", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3$c = _applyDecoratedDescriptor(_class2$d.prototype, "_checkMark", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$d)) || _class$f) || _class$f) || _class$f) || _class$f) || _class$f));
      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       *
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event toggle
       * @param {Event.EventCustom} event
       * @param {Toggle} toggle - The Toggle component.
       */

      var _dec$g, _dec2$g, _dec3$f, _dec4$e, _dec5$e, _dec6$e, _dec7$e, _class$g, _class2$e, _descriptor$e, _descriptor2$e, _temp$f;
      /**
       * @en
       * ToggleContainer is not a visible UI component but a way to modify the behavior of a set of Toggles. <br/>
       * Toggles that belong to the same group could only have one of them to be switched on at a time.<br/>
       * Note: All the first layer child node containing the toggle component will auto be added to the container.
       *
       * @zh
       * ToggleGroup 不是一个可见的 UI 组件，它可以用来修改一组 Toggle  组件的行为。当一组 Toggle 属于同一个 ToggleGroup 的时候，<br/>
       * 任何时候只能有一个 Toggle 处于选中状态。
       */

      var ToggleContainer = function (v) { return exports({ ToggleContainer: v, ToggleContainerComponent: v }), v; }((_dec$g = ccclass('cc.ToggleContainer'), _dec2$g = help(), _dec3$f = executionOrder(110), _dec4$e = menu(), _dec5$e = tooltip(), _dec6$e = type([EventHandler]), _dec7$e = tooltip(), _dec$g(_class$g = _dec2$g(_class$g = _dec3$f(_class$g = _dec4$e(_class$g = executeInEditMode(_class$g = (_class2$e = (_temp$f = /*#__PURE__*/function (_Component) {
        _inherits(ToggleContainer, _Component);

        function ToggleContainer() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, ToggleContainer);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ToggleContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "_allowSwitchOff", _descriptor$e, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "checkEvents", _descriptor2$e, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(ToggleContainer, [{
          key: "start",
          value: function start() {
            this.ensureValidState();
          }
        }, {
          key: "activeToggles",
          value: function activeToggles() {
            return this.toggleItems.filter(function (x) {
              return x.isChecked;
            });
          }
        }, {
          key: "anyTogglesChecked",
          value: function anyTogglesChecked() {
            return !!this.toggleItems.find(function (x) {
              return x.isChecked;
            });
          }
          /**
           * @en
           * Refresh the state of the managed toggles.
           *
           * @zh
           * 刷新管理的 toggle 状态。
           *
           * @param toggle - 需要被更新的 toggle。
           * @param emitEvent - 是否需要触发事件
           */

        }, {
          key: "notifyToggleCheck",
          value: function notifyToggleCheck(toggle) {
            var emitEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (!this.enabledInHierarchy) {
              return;
            }

            for (var i = 0; i < this.toggleItems.length; i++) {
              var item = this.toggleItems[i];

              if (item === toggle) {
                continue;
              }

              if (emitEvent) {
                item.isChecked = false;
              } else {
                item.setIsCheckedWithoutNotify(false);
              }
            }

            if (this.checkEvents) {
              legacyCC.Component.EventHandler.emitEvents(this.checkEvents, toggle);
            }
          }
        }, {
          key: "ensureValidState",
          value: function ensureValidState() {
            var toggles = this.toggleItems;

            if (!this._allowSwitchOff && !this.anyTogglesChecked() && toggles.length !== 0) {
              var toggle = toggles[0];
              toggle.isChecked = true;
              this.notifyToggleCheck(toggle);
            }

            var activeToggles = this.activeToggles();

            if (activeToggles.length > 1) {
              var firstToggle = activeToggles[0];

              for (var i = 0; i < activeToggles.length; ++i) {
                var _toggle = activeToggles[i];

                if (_toggle === firstToggle) {
                  continue;
                }

                _toggle.isChecked = false;
              }
            }
          }
        }, {
          key: "allowSwitchOff",

          /**
           * @en
           * If this setting is true, a toggle could be switched off and on when pressed.
           * If it is false, it will make sure there is always only one toggle could be switched on
           * and the already switched on toggle can't be switched off.
           *
           * @zh
           * 如果这个设置为 true，那么 toggle 按钮在被点击的时候可以反复地被选中和未选中。
           */
          get: function get() {
            return this._allowSwitchOff;
          },
          set: function set(value) {
            this._allowSwitchOff = value;
          }
          /**
           * @en
           * If Toggle is clicked, it will trigger event's handler.
           *
           * @zh
           * Toggle 按钮的点击事件列表。
           */

        }, {
          key: "toggleItems",

          /**
           * @en
           * Read only property, return the toggle items array reference managed by ToggleContainer.
           *
           * @zh
           * 只读属性，返回 toggleContainer 管理的 toggle 数组引用。
           */
          get: function get() {
            return this.node.children.map(function (item) {
              var toggle = item.getComponent('cc.Toggle');

              if (toggle && toggle.enabled) {
                return toggle;
              }
            }).filter(Boolean);
          }
        }]);

        return ToggleContainer;
      }(Component), _temp$f), (_descriptor$e = _applyDecoratedDescriptor(_class2$e.prototype, "_allowSwitchOff", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2$e.prototype, "allowSwitchOff", [_dec5$e], Object.getOwnPropertyDescriptor(_class2$e.prototype, "allowSwitchOff"), _class2$e.prototype), _descriptor2$e = _applyDecoratedDescriptor(_class2$e.prototype, "checkEvents", [_dec6$e, serializable, _dec7$e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2$e)) || _class$g) || _class$g) || _class$g) || _class$g) || _class$g));

      var _dec$h, _dec2$h, _dec3$g, _dec4$f, _class$h, _temp$g;
      /**
       * @en
       * The component of model.
       * When you place particles or models in the UI, you must add this component to render.
       * The component must be placed on a node with the [[MeshRenderer]] or the [[Particle]].
       *
       * @zh
       * UI 模型基础组件。
       * 当你在 UI 中放置模型或者粒子的时候，必须添加该组件才能渲染。该组件必须放置在带有 [[MeshRenderer]] 或者 [[Particle]] 组件的节点上。
       */

      var UIMeshRenderer = function (v) { return exports({ UIMeshRenderer: v, UIModelComponent: v }), v; }((_dec$h = ccclass('cc.UIMeshRenderer'), _dec2$h = help(), _dec3$g = executionOrder(110), _dec4$f = menu(), _dec$h(_class$h = _dec2$h(_class$h = _dec3$g(_class$h = _dec4$f(_class$h = (_temp$g = /*#__PURE__*/function (_UIComponent) {
        _inherits(UIMeshRenderer, _UIComponent);

        function UIMeshRenderer() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, UIMeshRenderer);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UIMeshRenderer)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this._models = null;
          _this._modelComponent = null;
          return _this;
        }

        _createClass(UIMeshRenderer, [{
          key: "onLoad",
          value: function onLoad() {
            if (!this.node._uiProps.uiTransformComp) {
              this.node.addComponent('cc.UITransform');
            }

            this._modelComponent = this.getComponent('cc.RenderableComponent');

            if (!this._modelComponent) {
              console.warn("node '".concat(this.node && this.node.name, "' doesn't have any renderable component"));
              return;
            }

            this._modelComponent._sceneGetter = director.root.ui.getRenderSceneGetter();
            this._models = this._modelComponent._collectModels();
          }
        }, {
          key: "onEnable",
          value: function onEnable() {
            _get(_getPrototypeOf(UIMeshRenderer.prototype), "onEnable", this).call(this);

            if (this._modelComponent) {
              this._modelComponent._attachToScene();
            }
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            _get(_getPrototypeOf(UIMeshRenderer.prototype), "onDisable", this).call(this);

            if (this._modelComponent) {
              this._modelComponent._detachFromScene();
            }
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            _get(_getPrototypeOf(UIMeshRenderer.prototype), "onDestroy", this).call(this);

            this._modelComponent = this.getComponent('cc.RenderableComponent');

            if (!this._modelComponent) {
              return;
            }

            this._modelComponent._sceneGetter = null;

            if (legacyCC.isValid(this._modelComponent, true)) {
              this._modelComponent._attachToScene();
            }

            this._models = null;
          }
        }, {
          key: "updateAssembler",
          value: function updateAssembler(render) {
            if (this._models) {
              for (var _iterator = _createForOfIteratorHelperLoose(this._models), _step; !(_step = _iterator()).done;) {
                var m = _step.value;
                render.commitModel.call(render, this, m, this._modelComponent.material);
              }

              return true;
            }

            return false;
          }
        }, {
          key: "update",
          value: function update() {
            this._fitUIRenderQueue();
          }
        }, {
          key: "_fitUIRenderQueue",
          value: function _fitUIRenderQueue() {
            if (!this._modelComponent) {
              return;
            }

            var matNum = this._modelComponent.sharedMaterials.length;

            for (var i = 0; i < matNum; i++) {
              var material = this._modelComponent.getMaterialInstance(i);

              if (material == null) {
                continue;
              }

              var passes = material.passes;
              var passNum = passes.length;

              for (var j = 0; j < passNum; j++) {
                var pass = passes[j]; // @ts-ignore

                pass._priority = RenderPriority.MAX - 11;

                if (!pass.blendState.targets[0].blend) {
                  material.overridePipelineStates({
                    blendState: {
                      targets: [{
                        blend: true
                      }]
                    }
                  }, j);
                }
              }
            }
          }
        }, {
          key: "modelComponent",
          get: function get() {
            return this._modelComponent;
          }
        }]);

        return UIMeshRenderer;
      }(UIComponent), _temp$g)) || _class$h) || _class$h) || _class$h) || _class$h));

      var _dec$i, _dec2$i, _dec3$h, _dec4$g, _dec5$f, _dec6$f, _dec7$f, _dec8$d, _dec9$d, _dec10$d, _dec11$d, _dec12$c, _dec13$a, _dec14$8, _dec15$8, _dec16$6, _dec17$6, _class$i, _class2$f, _descriptor$f, _descriptor2$f, _descriptor3$d, _descriptor4$b, _descriptor5$a, _descriptor6$7, _descriptor7$6, _descriptor8$6, _descriptor9$6, _descriptor10$6, _descriptor11$6, _descriptor12$5, _descriptor13$4, _descriptor14$4, _descriptor15$1, _descriptor16$1, _descriptor17, _descriptor18, _class3$c, _temp$h;

      var _zeroVec3 = new Vec3(); // returns a readonly size of the node


      function getReadonlyNodeSize(parent) {
        if (parent instanceof Scene) {

          return visibleRect;
        } else if (parent._uiProps.uiTransformComp) {
          return parent._uiProps.uiTransformComp.contentSize;
        } else {
          return Size.ZERO;
        }
      }
      function computeInverseTransForTarget(widgetNode, target, out_inverseTranslate, out_inverseScale) {
        var scale = widgetNode.parent ? widgetNode.parent.getScale() : _zeroVec3;
        var scaleX = scale.x;
        var scaleY = scale.y;
        var translateX = 0;
        var translateY = 0;

        for (var node = widgetNode.parent;;) {
          if (!node) {
            // ERROR: widgetNode should be child of target
            out_inverseTranslate.x = out_inverseTranslate.y = 0;
            out_inverseScale.x = out_inverseScale.y = 1;
            return;
          }

          var pos = node.getPosition();
          translateX += pos.x;
          translateY += pos.y;
          node = node.parent; // loop increment

          if (node !== target) {
            scale = node ? node.getScale() : _zeroVec3;
            var sx = scale.x;
            var sy = scale.y;
            translateX *= sx;
            translateY *= sy;
            scaleX *= sx;
            scaleY *= sy;
          } else {
            break;
          }
        }

        out_inverseScale.x = scaleX !== 0 ? 1 / scaleX : 1;
        out_inverseScale.y = scaleY !== 0 ? 1 / scaleY : 1;
        out_inverseTranslate.x = -translateX;
        out_inverseTranslate.y = -translateY;
      }
      /**
       * @en Enum for Widget's alignment mode, indicating when the widget should refresh.
       *
       * @zh Widget 的对齐模式，表示 Widget 应该何时刷新。
       */

      var AlignMode;

      (function (AlignMode) {
        AlignMode[AlignMode["ONCE"] = 0] = "ONCE";
        AlignMode[AlignMode["ALWAYS"] = 1] = "ALWAYS";
        AlignMode[AlignMode["ON_WINDOW_RESIZE"] = 2] = "ON_WINDOW_RESIZE";
      })(AlignMode || (AlignMode = {}));

      ccenum(AlignMode);
      /**
       * @en Enum for Widget's alignment flag, indicating when the widget select alignment.
       *
       * @zh Widget 的对齐标志，表示 Widget 选择对齐状态。
       */

      var AlignFlags;

      (function (AlignFlags) {
        AlignFlags[AlignFlags["TOP"] = 1] = "TOP";
        AlignFlags[AlignFlags["MID"] = 2] = "MID";
        AlignFlags[AlignFlags["BOT"] = 4] = "BOT";
        AlignFlags[AlignFlags["LEFT"] = 8] = "LEFT";
        AlignFlags[AlignFlags["CENTER"] = 16] = "CENTER";
        AlignFlags[AlignFlags["RIGHT"] = 32] = "RIGHT";
        AlignFlags[AlignFlags["HORIZONTAL"] = 56] = "HORIZONTAL";
        AlignFlags[AlignFlags["VERTICAL"] = 7] = "VERTICAL";
      })(AlignFlags || (AlignFlags = {}));

      var TOP_BOT = AlignFlags.TOP | AlignFlags.BOT;
      var LEFT_RIGHT = AlignFlags.LEFT | AlignFlags.RIGHT;
      /**
       * @en
       * Stores and manipulate the anchoring based on its parent.
       * Widget are used for GUI but can also be used for other things.
       * Widget will adjust current node's position and size automatically,
       * but the results after adjustment can not be obtained until the next frame unless you call [[updateAlignment]] manually.
       *
       * @zh Widget 组件，用于设置和适配其相对于父节点的边距，Widget 通常被用于 UI 界面，也可以用于其他地方。<br/>
       * Widget 会自动调整当前节点的坐标和宽高，不过目前调整后的结果要到下一帧才能在脚本里获取到，除非你先手动调用 [[updateAlignment]]。
       */

      var Widget = function (v) { return exports({ Widget: v, WidgetComponent: v }), v; }((_dec$i = ccclass('cc.Widget'), _dec2$i = help(), _dec3$h = executionOrder(110), _dec4$g = menu(), _dec5$f = requireComponent(UITransform), _dec6$f = type(Node), _dec7$f = tooltip(), _dec8$d = tooltip(), _dec9$d = tooltip(), _dec10$d = tooltip(), _dec11$d = tooltip(), _dec12$c = tooltip(), _dec13$a = tooltip(), _dec14$8 = visible(), _dec15$8 = visible(), _dec16$6 = type(AlignMode), _dec17$6 = tooltip(), _dec$i(_class$i = _dec2$i(_class$i = _dec3$h(_class$i = _dec4$g(_class$i = _dec5$f(_class$i = executeInEditMode(_class$i = (_class2$f = (_temp$h = _class3$c = /*#__PURE__*/function (_Component) {
        _inherits(Widget, _Component);

        function Widget() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Widget);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Widget)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this._lastPos = new Vec3();
          _this._lastSize = new Size();
          _this._dirty = true;

          _initializerDefineProperty(_this, "_alignFlags", _descriptor$f, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_target", _descriptor2$f, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_left", _descriptor3$d, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_right", _descriptor4$b, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_top", _descriptor5$a, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_bottom", _descriptor6$7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_horizontalCenter", _descriptor7$6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_verticalCenter", _descriptor8$6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isAbsLeft", _descriptor9$6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isAbsRight", _descriptor10$6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isAbsTop", _descriptor11$6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isAbsBottom", _descriptor12$5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isAbsHorizontalCenter", _descriptor13$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isAbsVerticalCenter", _descriptor14$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_originalWidth", _descriptor15$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_originalHeight", _descriptor16$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_alignMode", _descriptor17, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_lockFlags", _descriptor18, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(Widget, [{
          key: "updateAlignment",

          /**
           * @en
           * Immediately perform the widget alignment. You need to manually call this method only if
           * you need to get the latest results after the alignment before the end of current frame.
           *
           * @zh
           * 立刻执行 widget 对齐操作。这个接口一般不需要手工调用。
           * 只有当你需要在当前帧结束前获得 widget 对齐后的最新结果时才需要手动调用这个方法。
           *
           * @example
           * ```ts
           * import { log } from 'cc';
           * widget.top = 10;       // change top margin
           * log(widget.node.y); // not yet changed
           * widget.updateAlignment();
           * log(widget.node.y); // changed
           * ```
           */
          value: function updateAlignment() {
            legacyCC._widgetManager.updateAlignment(this.node);
          }
        }, {
          key: "_validateTargetInDEV",
          value: function _validateTargetInDEV() {
            {
              return;
            }
          }
        }, {
          key: "setDirty",
          value: function setDirty() {
            this._recursiveDirty();
          }
        }, {
          key: "onEnable",
          value: function onEnable() {
            this.node.getPosition(this._lastPos);

            this._lastSize.set(this.node._uiProps.uiTransformComp.contentSize);

            legacyCC._widgetManager.add(this);

            this._registerEvent();

            this._registerTargetEvents();
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            legacyCC._widgetManager.remove(this);

            this._unregisterEvent();

            this._unregisterTargetEvents();
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            this._removeParentEvent();
          }
        }, {
          key: "_adjustWidgetToAllowMovingInEditor",
          value: function _adjustWidgetToAllowMovingInEditor(eventType) {
            if (
            /*!EDITOR ||*/
            !(eventType & TransformBit.POSITION)) {
              return;
            }

            if (legacyCC._widgetManager.isAligning) {
              return;
            }

            var self = this;
            var newPos = self.node.getPosition();
            var oldPos = this._lastPos;
            var delta = new Vec3(newPos);
            delta.subtract(oldPos);
            var target = self.node.parent;
            var inverseScale = new Vec3(1, 1, 1);

            if (self.target) {
              target = self.target;
              computeInverseTransForTarget(self.node, target, new Vec3(), inverseScale);
            }

            if (!target) {
              return;
            }

            var targetSize = getReadonlyNodeSize(target);
            var deltaInPercent = new Vec3();

            if (targetSize.width !== 0 && targetSize.height !== 0) {
              Vec3.set(deltaInPercent, delta.x / targetSize.width, delta.y / targetSize.height, deltaInPercent.z);
            }

            if (self.isAlignTop) {
              self._top -= (self._isAbsTop ? delta.y : deltaInPercent.y) * inverseScale.y;
            }

            if (self.isAlignBottom) {
              self._bottom += (self._isAbsBottom ? delta.y : deltaInPercent.y) * inverseScale.y;
            }

            if (self.isAlignLeft) {
              self._left += (self._isAbsLeft ? delta.x : deltaInPercent.x) * inverseScale.x;
            }

            if (self.isAlignRight) {
              self._right -= (self._isAbsRight ? delta.x : deltaInPercent.x) * inverseScale.x;
            }

            if (self.isAlignHorizontalCenter) {
              self._horizontalCenter += (self._isAbsHorizontalCenter ? delta.x : deltaInPercent.x) * inverseScale.x;
            }

            if (self.isAlignVerticalCenter) {
              self._verticalCenter += (self._isAbsVerticalCenter ? delta.y : deltaInPercent.y) * inverseScale.y;
            }

            this._recursiveDirty();
          }
        }, {
          key: "_adjustWidgetToAllowResizingInEditor",
          value: function _adjustWidgetToAllowResizingInEditor() {
            // if (!EDITOR) {
            //     return;
            // }
            if (legacyCC._widgetManager.isAligning) {
              return;
            }

            this.setDirty();
            var self = this;
            var trans = self.node._uiProps.uiTransformComp;
            var newSize = trans.contentSize;
            var oldSize = this._lastSize;
            var delta = new Vec3(newSize.width - oldSize.width, newSize.height - oldSize.height, 0);
            var target = self.node.parent;
            var inverseScale = new Vec3(1, 1, 1);

            if (self.target) {
              target = self.target;
              computeInverseTransForTarget(self.node, target, new Vec3(), inverseScale);
            }

            if (!target) {
              return;
            }

            var targetSize = getReadonlyNodeSize(target);
            var deltaInPercent = new Vec3();

            if (targetSize.width !== 0 && targetSize.height !== 0) {
              Vec3.set(deltaInPercent, delta.x / targetSize.width, delta.y / targetSize.height, deltaInPercent.z);
            }

            var anchor = trans.anchorPoint;

            if (self.isAlignTop) {
              self._top -= (self._isAbsTop ? delta.y : deltaInPercent.y) * (1 - anchor.y) * inverseScale.y;
            }

            if (self.isAlignBottom) {
              self._bottom -= (self._isAbsBottom ? delta.y : deltaInPercent.y) * anchor.y * inverseScale.y;
            }

            if (self.isAlignLeft) {
              self._left -= (self._isAbsLeft ? delta.x : deltaInPercent.x) * anchor.x * inverseScale.x;
            }

            if (self.isAlignRight) {
              self._right -= (self._isAbsRight ? delta.x : deltaInPercent.x) * (1 - anchor.x) * inverseScale.x;
            }

            this._recursiveDirty();
          }
        }, {
          key: "_adjustWidgetToAnchorChanged",
          value: function _adjustWidgetToAnchorChanged() {
            this.setDirty();
          }
        }, {
          key: "_adjustTargetToParentChanged",
          value: function _adjustTargetToParentChanged(oldParent) {
            if (oldParent) {
              this._unregisterOldParentEvents(oldParent);
            }

            if (this.node.getParent()) {
              this._registerTargetEvents();
            }
          }
        }, {
          key: "_registerEvent",
          value: function _registerEvent() {
            this.node.on(SystemEventType.TRANSFORM_CHANGED, this._adjustWidgetToAllowMovingInEditor, this);
            this.node.on(SystemEventType.SIZE_CHANGED, this._adjustWidgetToAllowResizingInEditor, this);
            this.node.on(SystemEventType.ANCHOR_CHANGED, this._adjustWidgetToAnchorChanged, this);
            this.node.on(SystemEventType.PARENT_CHANGED, this._adjustTargetToParentChanged, this);
          }
        }, {
          key: "_unregisterEvent",
          value: function _unregisterEvent() {
            this.node.off(SystemEventType.TRANSFORM_CHANGED, this._adjustWidgetToAllowMovingInEditor, this);
            this.node.off(SystemEventType.SIZE_CHANGED, this._adjustWidgetToAllowResizingInEditor, this);
            this.node.off(SystemEventType.ANCHOR_CHANGED, this._adjustWidgetToAnchorChanged, this);
          }
        }, {
          key: "_removeParentEvent",
          value: function _removeParentEvent() {
            this.node.off(SystemEventType.PARENT_CHANGED, this._adjustTargetToParentChanged, this);
          }
        }, {
          key: "_autoChangedValue",
          value: function _autoChangedValue(flag, isAbs) {
            var current = (this._alignFlags & flag) > 0;
            var parentTrans = this.node.parent && this.node.parent._uiProps.uiTransformComp;

            if (!current || !parentTrans) {
              return;
            }

            var size = parentTrans.contentSize;

            if (this.isAlignLeft && flag === AlignFlags.LEFT) {
              this._left = isAbs ? this._left * size.width : this._left / size.width;
            } else if (this.isAlignRight && flag === AlignFlags.RIGHT) {
              this._right = isAbs ? this._right * size.width : this._right / size.width;
            } else if (this.isAlignHorizontalCenter && flag === AlignFlags.CENTER) {
              this._horizontalCenter = isAbs ? this._horizontalCenter * size.width : this._horizontalCenter / size.width;
            } else if (this.isAlignTop && flag === AlignFlags.TOP) {
              this._top = isAbs ? this._top * size.height : this._top / size.height;
            } else if (this.isAlignBottom && flag === AlignFlags.BOT) {
              this._bottom = isAbs ? this._bottom * size.height : this._bottom / size.height;
            } else if (this.isAbsoluteVerticalCenter && flag === AlignFlags.MID) {
              this._verticalCenter = isAbs ? this._verticalCenter / size.height : this._verticalCenter / size.height;
            }

            this._recursiveDirty();
          }
        }, {
          key: "_registerTargetEvents",
          value: function _registerTargetEvents() {
            var target = this._target || this.node.parent;

            if (target) {
              if (target.getComponent(UITransform)) {
                target.on(SystemEventType.TRANSFORM_CHANGED, this._targetChangedOperation, this);
                target.on(SystemEventType.SIZE_CHANGED, this._targetChangedOperation, this);
              } else {
                warnID(6501, this.node.name);
              }
            }
          }
        }, {
          key: "_unregisterTargetEvents",
          value: function _unregisterTargetEvents() {
            var target = this._target || this.node.parent;

            if (target) {
              target.off(SystemEventType.TRANSFORM_CHANGED, this._targetChangedOperation, this);
              target.off(SystemEventType.SIZE_CHANGED, this._targetChangedOperation, this);
            }
          }
        }, {
          key: "_unregisterOldParentEvents",
          value: function _unregisterOldParentEvents(oldParent) {
            var target = this._target || oldParent;

            if (target) {
              target.off(SystemEventType.TRANSFORM_CHANGED, this._targetChangedOperation, this);
              target.off(SystemEventType.SIZE_CHANGED, this._targetChangedOperation, this);
            }
          }
        }, {
          key: "_targetChangedOperation",
          value: function _targetChangedOperation() {
            this._recursiveDirty();
          }
        }, {
          key: "_setAlign",
          value: function _setAlign(flag, isAlign) {
            var current = (this._alignFlags & flag) > 0;

            if (isAlign === current) {
              return;
            }

            var isHorizontal = (flag & LEFT_RIGHT) > 0;
            var trans = this.node._uiProps.uiTransformComp;

            if (isAlign) {
              this._alignFlags |= flag;

              if (isHorizontal) {
                this.isAlignHorizontalCenter = false;

                if (this.isStretchWidth) {
                  // become stretch
                  this._originalWidth = trans.width; // test check conflict
                }
              } else {
                this.isAlignVerticalCenter = false;

                if (this.isStretchHeight) {
                  // become stretch
                  this._originalHeight = trans.height; // test check conflict
                }
              }
            } else {
              if (isHorizontal) {
                if (this.isStretchWidth) {
                  // will cancel stretch
                  trans.width = this._originalWidth;
                }
              } else {
                if (this.isStretchHeight) {
                  // will cancel stretch
                  trans.height = this._originalHeight;
                }
              }

              this._alignFlags &= ~flag;
            }
          }
        }, {
          key: "_recursiveDirty",
          value: function _recursiveDirty() {
            if (this._dirty) {
              return;
            }

            this._dirty = true;
          }
        }, {
          key: "target",

          /**
           * @en
           * Specifies an alignment target that can only be one of the parent nodes of the current node.
           * The default value is null, and when null, indicates the current parent.
           *
           * @zh
           * 指定一个对齐目标，只能是当前节点的其中一个父节点，默认为空，为空时表示当前父节点。
           */
          get: function get() {
            return this._target;
          },
          set: function set(value) {
            if (this._target === value) {
              return;
            }

            this._unregisterTargetEvents();

            this._target = value;

            this._registerTargetEvents();

            this._validateTargetInDEV();

            this._recursiveDirty();
          }
          /**
           * @en
           * Whether to align to the top.
           *
           * @zh
           * 是否对齐上边。
           */

        }, {
          key: "isAlignTop",
          get: function get() {
            return (this._alignFlags & AlignFlags.TOP) > 0;
          },
          set: function set(value) {
            this._setAlign(AlignFlags.TOP, value);

            this._recursiveDirty();
          }
          /**
           * @en
           * Whether to align to the bottom.
           *
           * @zh
           * 是否对齐下边。
           */

        }, {
          key: "isAlignBottom",
          get: function get() {
            return (this._alignFlags & AlignFlags.BOT) > 0;
          },
          set: function set(value) {
            this._setAlign(AlignFlags.BOT, value);

            this._recursiveDirty();
          }
          /**
           * @en
           * Whether to align to the left.
           *
           * @zh
           * 是否对齐左边。
           */

        }, {
          key: "isAlignLeft",
          get: function get() {
            return (this._alignFlags & AlignFlags.LEFT) > 0;
          },
          set: function set(value) {
            this._setAlign(AlignFlags.LEFT, value);

            this._recursiveDirty();
          }
          /**
           * @en
           * Whether to align to the right.
           *
           * @zh
           * 是否对齐右边。
           */

        }, {
          key: "isAlignRight",
          get: function get() {
            return (this._alignFlags & AlignFlags.RIGHT) > 0;
          },
          set: function set(value) {
            this._setAlign(AlignFlags.RIGHT, value);

            this._recursiveDirty();
          }
          /**
           * @en
           * Whether to align vertically.
           *
           * @zh
           * 是否垂直方向对齐中点，开启此项会将垂直方向其他对齐选项取消。
           */

        }, {
          key: "isAlignVerticalCenter",
          get: function get() {
            return (this._alignFlags & AlignFlags.MID) > 0;
          },
          set: function set(value) {
            if (value) {
              this.isAlignTop = false;
              this.isAlignBottom = false;
              this._alignFlags |= AlignFlags.MID;
            } else {
              this._alignFlags &= ~AlignFlags.MID;
            }

            this._recursiveDirty();
          }
          /**
           * @en
           * Whether to align horizontally.
           *
           * @zh
           * 是否水平方向对齐中点，开启此选项会将水平方向其他对齐选项取消。
           */

        }, {
          key: "isAlignHorizontalCenter",
          get: function get() {
            return (this._alignFlags & AlignFlags.CENTER) > 0;
          },
          set: function set(value) {
            if (value) {
              this.isAlignLeft = false;
              this.isAlignRight = false;
              this._alignFlags |= AlignFlags.CENTER;
            } else {
              this._alignFlags &= ~AlignFlags.CENTER;
            }

            this._recursiveDirty();
          }
          /**
           * @en
           * Whether to stretch horizontally, when enable the left and right alignment will be stretched horizontally,
           * the width setting is invalid (read only).
           *
           * @zh
           * 当前是否水平拉伸。当同时启用左右对齐时，节点将会被水平拉伸。此时节点的宽度（只读）。
           */

        }, {
          key: "isStretchWidth",
          get: function get() {
            return (this._alignFlags & LEFT_RIGHT) === LEFT_RIGHT;
          }
          /**
           * @en
           * Whether to stretch vertically, when enable the left and right alignment will be stretched vertically,
           * then height setting is invalid (read only).
           *
           * @zh
           * 当前是否垂直拉伸。当同时启用上下对齐时，节点将会被垂直拉伸，此时节点的高度（只读）。
           */

        }, {
          key: "isStretchHeight",
          get: function get() {
            return (this._alignFlags & TOP_BOT) === TOP_BOT;
          } // ALIGN MARGINS

          /**
           * @en
           * The margins between the top of this node and the top of parent node,
           * the value can be negative, Only available in 'isAlignTop' open.
           *
           * @zh
           * 本节点顶边和父节点顶边的距离，可填写负值，只有在 isAlignTop 开启时才有作用。
           */

        }, {
          key: "top",
          get: function get() {
            return this._top;
          },
          set: function set(value) {
            this._top = value;

            this._recursiveDirty();
          }
          /**
           * @EditorOnly Not for user
           */

        }, {
          key: "editorTop",
          get: function get() {
            return this._isAbsTop ? this._top : this._top * 100;
          },
          set: function set(value) {
            this._top = this._isAbsTop ? value : value / 100;

            this._recursiveDirty();
          }
          /**
           * @en
           * The margins between the bottom of this node and the bottom of parent node,
           * the value can be negative, Only available in 'isAlignBottom' open.
           *
           * @zh
           * 本节点底边和父节点底边的距离，可填写负值，只有在 isAlignBottom 开启时才有作用。
           */

        }, {
          key: "bottom",
          get: function get() {
            return this._bottom;
          },
          set: function set(value) {
            this._bottom = value;

            this._recursiveDirty();
          }
          /**
           * @EditorOnly Not for user
           */

        }, {
          key: "editorBottom",
          get: function get() {
            return this._isAbsBottom ? this._bottom : this._bottom * 100;
          },
          set: function set(value) {
            this._bottom = this._isAbsBottom ? value : value / 100;

            this._recursiveDirty();
          }
          /**
           * @en
           * The margins between the left of this node and the left of parent node,
           * the value can be negative, Only available in 'isAlignLeft' open.
           *
           * @zh
           * 本节点左边和父节点左边的距离，可填写负值，只有在 isAlignLeft 开启时才有作用。
           */

        }, {
          key: "left",
          get: function get() {
            return this._left;
          },
          set: function set(value) {
            this._left = value;

            this._recursiveDirty();
          }
          /**
           * @EditorOnly Not for user
           */

        }, {
          key: "editorLeft",
          get: function get() {
            return this._isAbsLeft ? this._left : this._left * 100;
          },
          set: function set(value) {
            this._left = this._isAbsLeft ? value : value / 100;

            this._recursiveDirty();
          }
          /**
           * @en
           * The margins between the right of this node and the right of parent node,
           * the value can be negative, Only available in 'isAlignRight' open.
           *
           * @zh
           * 本节点右边和父节点右边的距离，可填写负值，只有在 isAlignRight 开启时才有作用。
           */

        }, {
          key: "right",
          get: function get() {
            return this._right;
          },
          set: function set(value) {
            this._right = value;

            this._recursiveDirty();
          }
          /**
           * @EditorOnly Not for user
           */

        }, {
          key: "editorRight",
          get: function get() {
            return this._isAbsRight ? this._right : this._right * 100;
          },
          set: function set(value) {
            this._right = this._isAbsRight ? value : value / 100;

            this._recursiveDirty();
          }
          /**
           * @en
           * Horizontally aligns the midpoint offset value,
           * the value can be negative, Only available in 'isAlignHorizontalCenter' open.
           *
           * @zh
           * 水平居中的偏移值，可填写负值，只有在 isAlignHorizontalCenter 开启时才有作用。
           */

        }, {
          key: "horizontalCenter",
          get: function get() {
            return this._horizontalCenter;
          },
          set: function set(value) {
            this._horizontalCenter = value;

            this._recursiveDirty();
          }
          /**
           * @EditorOnly Not for user
           */

        }, {
          key: "editorHorizontalCenter",
          get: function get() {
            return this._isAbsHorizontalCenter ? this._horizontalCenter : this._horizontalCenter * 100;
          },
          set: function set(value) {
            this._horizontalCenter = this._isAbsHorizontalCenter ? value : value / 100;

            this._recursiveDirty();
          }
          /**
           * @en
           * Vertically aligns the midpoint offset value,
           * the value can be negative, Only available in 'isAlignVerticalCenter' open.
           *
           * @zh
           * 垂直居中的偏移值，可填写负值，只有在 isAlignVerticalCenter 开启时才有作用。
           */

        }, {
          key: "verticalCenter",
          get: function get() {
            return this._verticalCenter;
          },
          set: function set(value) {
            this._verticalCenter = value;

            this._recursiveDirty();
          }
          /**
           * @EditorOnly Not for user
           */

        }, {
          key: "editorVerticalCenter",
          get: function get() {
            return this._isAbsVerticalCenter ? this._verticalCenter : this._verticalCenter * 100;
          },
          set: function set(value) {
            this._verticalCenter = this._isAbsVerticalCenter ? value : value / 100;

            this._recursiveDirty();
          }
          /**
           * @en
           * If true, top is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's height.
           *
           * @zh
           * 如果为 true，"top" 将会以像素作为边距，否则将会以相对父物体高度的比例（0 到 1）作为边距。
           */

        }, {
          key: "isAbsoluteTop",
          get: function get() {
            return this._isAbsTop;
          },
          set: function set(value) {
            if (this._isAbsTop === value) {
              return;
            }

            this._isAbsTop = value;

            this._autoChangedValue(AlignFlags.TOP, this._isAbsTop);
          }
          /**
           * @en
           * If true, bottom is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's height.
           *
           * @zh
           * 如果为 true，"bottom" 将会以像素作为边距，否则将会以相对父物体高度的比例（0 到 1）作为边距。
           */

        }, {
          key: "isAbsoluteBottom",
          get: function get() {
            return this._isAbsBottom;
          },
          set: function set(value) {
            if (this._isAbsBottom === value) {
              return;
            }

            this._isAbsBottom = value;

            this._autoChangedValue(AlignFlags.BOT, this._isAbsBottom);
          }
          /**
           * @en
           * If true, left is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's width.
           *
           * @zh
           * 如果为 true，"left" 将会以像素作为边距，否则将会以相对父物体宽度的比例（0 到 1）作为边距。
           */

        }, {
          key: "isAbsoluteLeft",
          get: function get() {
            return this._isAbsLeft;
          },
          set: function set(value) {
            if (this._isAbsLeft === value) {
              return;
            }

            this._isAbsLeft = value;

            this._autoChangedValue(AlignFlags.LEFT, this._isAbsLeft);
          }
          /**
           * @en
           * If true, right is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's width.
           *
           * @zh
           * 如果为 true，"right" 将会以像素作为边距，否则将会以相对父物体宽度的比例（0 到 1）作为边距。
           */

        }, {
          key: "isAbsoluteRight",
          get: function get() {
            return this._isAbsRight;
          },
          set: function set(value) {
            if (this._isAbsRight === value) {
              return;
            }

            this._isAbsRight = value;

            this._autoChangedValue(AlignFlags.RIGHT, this._isAbsRight);
          }
          /**
           * @en
           * If true, horizontalCenter is pixel margin, otherwise is percentage (0 - 1) margin.
           *
           * @zh
           * 如果为 true，"horizontalCenter" 将会以像素作为偏移值，反之为比例（0 到 1）。
           */

        }, {
          key: "isAbsoluteHorizontalCenter",
          get: function get() {
            return this._isAbsHorizontalCenter;
          },
          set: function set(value) {
            if (this._isAbsHorizontalCenter === value) {
              return;
            }

            this._isAbsHorizontalCenter = value;

            this._autoChangedValue(AlignFlags.CENTER, this._isAbsHorizontalCenter);
          }
          /**
           * @en
           * If true, verticalCenter is pixel margin, otherwise is percentage (0 - 1) margin.
           *
           * @zh
           * 如果为 true，"verticalCenter" 将会以像素作为偏移值，反之为比例（0 到 1）。
           */

        }, {
          key: "isAbsoluteVerticalCenter",
          get: function get() {
            return this._isAbsVerticalCenter;
          },
          set: function set(value) {
            if (this._isAbsVerticalCenter === value) {
              return;
            }

            this._isAbsVerticalCenter = value;

            this._autoChangedValue(AlignFlags.MID, this._isAbsVerticalCenter);
          }
          /**
           * @en
           * Specifies the alignment mode of the Widget, which determines when the widget should refresh.
           *
           * @zh
           * 指定 Widget 的对齐模式，用于决定 Widget 应该何时刷新。
           *
           * @example
           * ```
           * import { Widget } from 'cc';
           * widget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE;
           * ```
           */

        }, {
          key: "alignMode",
          get: function get() {
            return this._alignMode;
          },
          set: function set(value) {
            this._alignMode = value;

            this._recursiveDirty();
          }
          /**
           * @zh
           * 对齐开关，由 AlignFlags 组成
           */

        }, {
          key: "alignFlags",
          get: function get() {
            return this._alignFlags;
          },
          set: function set(value) {
            if (this._alignFlags === value) {
              return;
            }

            this._alignFlags = value;

            this._recursiveDirty();
          }
        }]);

        return Widget;
      }(Component), _class3$c.AlignMode = AlignMode, _temp$h), (_applyDecoratedDescriptor(_class2$f.prototype, "target", [_dec6$f, _dec7$f], Object.getOwnPropertyDescriptor(_class2$f.prototype, "target"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "isAlignTop", [_dec8$d], Object.getOwnPropertyDescriptor(_class2$f.prototype, "isAlignTop"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "isAlignBottom", [_dec9$d], Object.getOwnPropertyDescriptor(_class2$f.prototype, "isAlignBottom"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "isAlignLeft", [_dec10$d], Object.getOwnPropertyDescriptor(_class2$f.prototype, "isAlignLeft"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "isAlignRight", [_dec11$d], Object.getOwnPropertyDescriptor(_class2$f.prototype, "isAlignRight"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "isAlignVerticalCenter", [_dec12$c], Object.getOwnPropertyDescriptor(_class2$f.prototype, "isAlignVerticalCenter"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "isAlignHorizontalCenter", [_dec13$a], Object.getOwnPropertyDescriptor(_class2$f.prototype, "isAlignHorizontalCenter"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "isStretchWidth", [_dec14$8], Object.getOwnPropertyDescriptor(_class2$f.prototype, "isStretchWidth"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "isStretchHeight", [_dec15$8], Object.getOwnPropertyDescriptor(_class2$f.prototype, "isStretchHeight"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "editorTop", [editable], Object.getOwnPropertyDescriptor(_class2$f.prototype, "editorTop"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "editorBottom", [editable], Object.getOwnPropertyDescriptor(_class2$f.prototype, "editorBottom"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "editorLeft", [editable], Object.getOwnPropertyDescriptor(_class2$f.prototype, "editorLeft"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "editorRight", [editable], Object.getOwnPropertyDescriptor(_class2$f.prototype, "editorRight"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "editorHorizontalCenter", [editable], Object.getOwnPropertyDescriptor(_class2$f.prototype, "editorHorizontalCenter"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "editorVerticalCenter", [editable], Object.getOwnPropertyDescriptor(_class2$f.prototype, "editorVerticalCenter"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "isAbsoluteTop", [editable], Object.getOwnPropertyDescriptor(_class2$f.prototype, "isAbsoluteTop"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "isAbsoluteBottom", [editable], Object.getOwnPropertyDescriptor(_class2$f.prototype, "isAbsoluteBottom"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "isAbsoluteLeft", [editable], Object.getOwnPropertyDescriptor(_class2$f.prototype, "isAbsoluteLeft"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "isAbsoluteRight", [editable], Object.getOwnPropertyDescriptor(_class2$f.prototype, "isAbsoluteRight"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "isAbsoluteHorizontalCenter", [editable], Object.getOwnPropertyDescriptor(_class2$f.prototype, "isAbsoluteHorizontalCenter"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "isAbsoluteVerticalCenter", [editable], Object.getOwnPropertyDescriptor(_class2$f.prototype, "isAbsoluteVerticalCenter"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "alignMode", [_dec16$6, _dec17$6], Object.getOwnPropertyDescriptor(_class2$f.prototype, "alignMode"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "alignFlags", [editable], Object.getOwnPropertyDescriptor(_class2$f.prototype, "alignFlags"), _class2$f.prototype), _descriptor$f = _applyDecoratedDescriptor(_class2$f.prototype, "_alignFlags", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2$f = _applyDecoratedDescriptor(_class2$f.prototype, "_target", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$d = _applyDecoratedDescriptor(_class2$f.prototype, "_left", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4$b = _applyDecoratedDescriptor(_class2$f.prototype, "_right", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5$a = _applyDecoratedDescriptor(_class2$f.prototype, "_top", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6$7 = _applyDecoratedDescriptor(_class2$f.prototype, "_bottom", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7$6 = _applyDecoratedDescriptor(_class2$f.prototype, "_horizontalCenter", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor8$6 = _applyDecoratedDescriptor(_class2$f.prototype, "_verticalCenter", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor9$6 = _applyDecoratedDescriptor(_class2$f.prototype, "_isAbsLeft", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor10$6 = _applyDecoratedDescriptor(_class2$f.prototype, "_isAbsRight", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor11$6 = _applyDecoratedDescriptor(_class2$f.prototype, "_isAbsTop", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor12$5 = _applyDecoratedDescriptor(_class2$f.prototype, "_isAbsBottom", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor13$4 = _applyDecoratedDescriptor(_class2$f.prototype, "_isAbsHorizontalCenter", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor14$4 = _applyDecoratedDescriptor(_class2$f.prototype, "_isAbsVerticalCenter", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor15$1 = _applyDecoratedDescriptor(_class2$f.prototype, "_originalWidth", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor16$1 = _applyDecoratedDescriptor(_class2$f.prototype, "_originalHeight", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2$f.prototype, "_alignMode", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return AlignMode.ON_WINDOW_RESIZE;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2$f.prototype, "_lockFlags", [serializable, editorOnly], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2$f)) || _class$i) || _class$i) || _class$i) || _class$i) || _class$i) || _class$i));
      // cc.Widget = module.exports = Widget;
      legacyCC.internal.computeInverseTransForTarget = computeInverseTransForTarget;
      legacyCC.internal.getReadonlyNodeSize = getReadonlyNodeSize;

      var _dec$j, _dec2$j, _dec3$i, _dec4$h, _dec5$g, _dec6$g, _dec7$g, _dec8$e, _dec9$e, _dec10$e, _dec11$e, _class$j, _class2$g, _descriptor$g, _descriptor2$g, _descriptor3$e, _descriptor4$c, _class3$d, _temp$i;

      var _color = new Color();
      /**
       * @en Enum for PageView Indicator direction.
       *
       * @zh 页面视图指示器的摆放方向
       *
       * @enum PageViewIndicator.Direction
       */


      var Direction$2;

      (function (Direction) {
        Direction[Direction["HORIZONTAL"] = 0] = "HORIZONTAL";
        Direction[Direction["VERTICAL"] = 1] = "VERTICAL";
      })(Direction$2 || (Direction$2 = {}));

      ccenum(Direction$2);
      /**
       * @en
       * The Page View Indicator Component.
       *
       * @zh
       * 页面视图每页标记组件
       */

      var PageViewIndicator = function (v) { return exports({ PageViewIndicator: v, PageViewIndicatorComponent: v }), v; }((_dec$j = ccclass('cc.PageViewIndicator'), _dec2$j = help(), _dec3$i = executionOrder(110), _dec4$h = menu(), _dec5$g = type(SpriteFrame), _dec6$g = tooltip(), _dec7$g = type(Direction$2), _dec8$e = tooltip(), _dec9$e = type(Size), _dec10$e = tooltip(), _dec11$e = tooltip(), _dec$j(_class$j = _dec2$j(_class$j = _dec3$i(_class$j = _dec4$h(_class$j = (_class2$g = (_temp$i = _class3$d = /*#__PURE__*/function (_Component) {
        _inherits(PageViewIndicator, _Component);

        function PageViewIndicator() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, PageViewIndicator);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PageViewIndicator)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "spacing", _descriptor$g, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_spriteFrame", _descriptor2$g, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_direction", _descriptor3$e, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_cellSize", _descriptor4$c, _assertThisInitialized(_this));

          _this._layout = null;
          _this._pageView = null;
          _this._indicators = [];
          return _this;
        }

        _createClass(PageViewIndicator, [{
          key: "onLoad",
          value: function onLoad() {
            this._updateLayout();
          }
          /**
           * @en
           * Set Page View.
           *
           * @zh
           * 设置页面视图
           *
           * @param target 页面视图对象
           */

        }, {
          key: "setPageView",
          value: function setPageView(target) {
            this._pageView = target;

            this._refresh();
          }
        }, {
          key: "_updateLayout",
          value: function _updateLayout() {
            this._layout = this.getComponent(Layout);

            if (!this._layout) {
              this._layout = this.addComponent(Layout);
            }

            var layout = this._layout;

            if (this.direction === Direction$2.HORIZONTAL) {
              layout.type = Layout.Type.HORIZONTAL;
              layout.spacingX = this.spacing;
            } else if (this.direction === Direction$2.VERTICAL) {
              layout.type = Layout.Type.VERTICAL;
              layout.spacingY = this.spacing;
            }

            layout.resizeMode = Layout.ResizeMode.CONTAINER;
          }
        }, {
          key: "_createIndicator",
          value: function _createIndicator() {
            var node = new Node();
            var sprite = node.addComponent(Sprite);
            sprite.spriteFrame = this.spriteFrame;
            sprite.sizeMode = Sprite.SizeMode.CUSTOM;
            node.parent = this.node;

            node._uiProps.uiTransformComp.setContentSize(this._cellSize);

            return node;
          }
        }, {
          key: "_changedState",
          value: function _changedState() {
            var indicators = this._indicators;

            if (indicators.length === 0 || !this._pageView) {
              return;
            }

            var idx = this._pageView.curPageIdx;

            if (idx >= indicators.length) {
              return;
            }

            for (var i = 0; i < indicators.length; ++i) {
              var node = indicators[i];

              if (!node._uiProps.uiComp) {
                continue;
              }

              var uiComp = node._uiProps.uiComp;

              _color.set(uiComp.color);

              _color.a = 255 / 2;
              uiComp.color = _color;
            }

            if (indicators[idx]._uiProps.uiComp) {
              var comp = indicators[idx]._uiProps.uiComp;

              _color.set(comp.color);

              _color.a = 255;
              comp.color = _color;
            }
          }
        }, {
          key: "_refresh",
          value: function _refresh() {
            if (!this._pageView) {
              return;
            }

            var indicators = this._indicators;

            var pages = this._pageView.getPages();

            if (pages.length === indicators.length) {
              return;
            }

            var i = 0;

            if (pages.length > indicators.length) {
              for (i = 0; i < pages.length; ++i) {
                if (!indicators[i]) {
                  indicators[i] = this._createIndicator();
                }
              }
            } else {
              var count = indicators.length - pages.length;

              for (i = count; i > 0; --i) {
                var node = indicators[i - 1];
                this.node.removeChild(node);
                indicators.splice(i - 1, 1);
              }
            }

            if (this._layout && this._layout.enabledInHierarchy) {
              this._layout.updateLayout();
            }

            this._changedState();
          }
        }, {
          key: "spriteFrame",

          /**
           * @en
           * The spriteFrame for each element.
           *
           * @zh
           * 每个页面标记显示的图片
           */
          get: function get() {
            return this._spriteFrame;
          },
          set: function set(value) {
            if (this._spriteFrame === value) {
              return;
            }

            this._spriteFrame = value;
          }
          /**
           * @en
           * The location direction of PageViewIndicator.
           *
           * @zh
           * 页面标记摆放方向
           *
           * @param direction 摆放方向
           */

        }, {
          key: "direction",
          get: function get() {
            return this._direction;
          },
          set: function set(value) {
            if (this._direction === value) {
              return;
            }

            this._direction = value;
          }
          /**
           * @en
           * The cellSize for each element.
           *
           * @zh
           * 每个页面标记的大小
           */

        }, {
          key: "cellSize",
          get: function get() {
            return this._cellSize;
          },
          set: function set(value) {
            if (this._cellSize === value) {
              return;
            }

            this._cellSize = value;
          }
        }]);

        return PageViewIndicator;
      }(Component), _class3$d.Direction = Direction$2, _temp$i), (_applyDecoratedDescriptor(_class2$g.prototype, "spriteFrame", [_dec5$g, _dec6$g], Object.getOwnPropertyDescriptor(_class2$g.prototype, "spriteFrame"), _class2$g.prototype), _applyDecoratedDescriptor(_class2$g.prototype, "direction", [_dec7$g, _dec8$e], Object.getOwnPropertyDescriptor(_class2$g.prototype, "direction"), _class2$g.prototype), _applyDecoratedDescriptor(_class2$g.prototype, "cellSize", [_dec9$e, _dec10$e], Object.getOwnPropertyDescriptor(_class2$g.prototype, "cellSize"), _class2$g.prototype), _descriptor$g = _applyDecoratedDescriptor(_class2$g.prototype, "spacing", [serializable, _dec11$e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2$g = _applyDecoratedDescriptor(_class2$g.prototype, "_spriteFrame", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$e = _applyDecoratedDescriptor(_class2$g.prototype, "_direction", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Direction$2.HORIZONTAL;
        }
      }), _descriptor4$c = _applyDecoratedDescriptor(_class2$g.prototype, "_cellSize", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Size(20, 20);
        }
      })), _class2$g)) || _class$j) || _class$j) || _class$j) || _class$j));

      var _dec$k, _dec2$k, _dec3$j, _dec4$i, _dec5$h, _dec6$h, _dec7$h, _dec8$f, _dec9$f, _dec10$f, _dec11$f, _dec12$d, _dec13$b, _dec14$9, _dec15$9, _dec16$7, _dec17$7, _dec18$6, _dec19$6, _dec20$5, _dec21$5, _dec22$5, _dec23$5, _dec24$5, _dec25$4, _dec26$4, _class$k, _class2$h, _descriptor$h, _descriptor2$h, _descriptor3$f, _descriptor4$d, _descriptor5$b, _descriptor6$8, _descriptor7$7, _descriptor8$7, _descriptor9$7, _descriptor10$7, _descriptor11$7, _descriptor12$6, _class3$e, _temp$j;

      var _temp_vec2 = new Vec2();
      /**
       * @en Enum for Page View Size Mode.
       *
       * @zh 页面视图每个页面统一的大小类型
       */


      var SizeMode;

      (function (SizeMode) {
        SizeMode[SizeMode["Unified"] = 0] = "Unified";
        SizeMode[SizeMode["Free"] = 1] = "Free";
      })(SizeMode || (SizeMode = {}));

      ccenum(SizeMode);
      /**
       * @en Enum for Page View Direction.
       *
       * @zh 页面视图滚动类型
       */

      var Direction$3;

      (function (Direction) {
        Direction[Direction["Horizontal"] = 0] = "Horizontal";
        Direction[Direction["Vertical"] = 1] = "Vertical";
      })(Direction$3 || (Direction$3 = {}));

      ccenum(Direction$3);
      /**
       * @en Enum for ScrollView event type.
       *
       * @zh 滚动视图事件类型
       */

      var EventType$4;
      /**
       * @en
       * The PageView control.
       *
       * @zh
       * 页面视图组件
       */

      (function (EventType) {
        EventType["PAGE_TURNING"] = "page-turning";
      })(EventType$4 || (EventType$4 = {}));

      var  // @ts-ignore
      PageView = function (v) { return exports({ PageView: v, PageViewComponent: v }), v; }((_dec$k = ccclass('cc.PageView'), _dec2$k = help(), _dec3$j = executionOrder(110), _dec4$i = menu(), _dec5$h = type(SizeMode), _dec6$h = tooltip(), _dec7$h = type(Direction$3), _dec8$f = tooltip(), _dec9$f = range(), _dec10$f = tooltip(), _dec11$f = range(), _dec12$d = tooltip(), _dec13$b = type(PageViewIndicator), _dec14$9 = tooltip(), _dec15$9 = tooltip(), _dec16$7 = type(ScrollBar), _dec17$7 = visible(), _dec18$6 = type(ScrollBar), _dec19$6 = visible(), _dec20$5 = visible(), _dec21$5 = visible(), _dec22$5 = visible(), _dec23$5 = type([EventHandler]), _dec24$5 = visible(), _dec25$4 = type([EventHandler]), _dec26$4 = tooltip(), _dec$k(_class$k = _dec2$k(_class$k = _dec3$j(_class$k = _dec4$i(_class$k = (_class2$h = (_temp$j = _class3$e = /*#__PURE__*/function (_ScrollView) {
        _inherits(PageView, _ScrollView);

        function PageView() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, PageView);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PageView)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "autoPageTurningThreshold", _descriptor$h, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "horizontal", _descriptor2$h, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "vertical", _descriptor3$f, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cancelInnerEvents", _descriptor4$d, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "scrollEvents", _descriptor5$b, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "pageTurningSpeed", _descriptor6$8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "pageEvents", _descriptor7$7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_sizeMode", _descriptor8$7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_direction", _descriptor9$7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_scrollThreshold", _descriptor10$7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_pageTurningEventTiming", _descriptor11$7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_indicator", _descriptor12$6, _assertThisInitialized(_this));

          _this._curPageIdx = 0;
          _this._lastPageIdx = 0;
          _this._pages = [];
          _this._initContentPos = new Vec3();
          _this._scrollCenterOffsetX = [];
          _this._scrollCenterOffsetY = [];
          _this._touchBeganPosition = new Vec3();
          _this._touchEndPosition = new Vec3();
          return _this;
        }

        _createClass(PageView, [{
          key: "__preload",
          value: function __preload() {
            this.node.on(SystemEventType.SIZE_CHANGED, this._updateAllPagesSize, this);
          }
        }, {
          key: "onEnable",
          value: function onEnable() {
            _get(_getPrototypeOf(PageView.prototype), "onEnable", this).call(this);

            {
              this.node.on(PageView.EventType.SCROLL_ENG_WITH_THRESHOLD, this._dispatchPageTurningEvent, this);
            }
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            _get(_getPrototypeOf(PageView.prototype), "onDisable", this).call(this);

            {
              this.node.off(PageView.EventType.SCROLL_ENG_WITH_THRESHOLD, this._dispatchPageTurningEvent, this);
            }
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            this._initPages();

            if (this.indicator) {
              this.indicator.setPageView(this);
            }
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            this.node.off(SystemEventType.SIZE_CHANGED, this._updateAllPagesSize, this);
          }
          /**
           * @en
           * Returns current page index.
           *
           * @zh
           * 返回当前页面索引。
           *
           * @returns 当前页面索引。
           */

        }, {
          key: "getCurrentPageIndex",
          value: function getCurrentPageIndex() {
            return this._curPageIdx;
          }
          /**
           * @en
           * Set current page index.
           *
           * @zh
           * 设置当前页面索引。
           * @param index 索引。
           */

        }, {
          key: "setCurrentPageIndex",
          value: function setCurrentPageIndex(index) {
            this.scrollToPage(index, 1);
          }
          /**
           * @en
           * Returns all pages of pageview.
           *
           * @zh
           * 返回视图中的所有页面。
           *
           * @returns 输=视图所有页面。
           */

        }, {
          key: "getPages",
          value: function getPages() {
            return this._pages;
          }
          /**
           * @en
           * At the end of the current page view to insert a new view.
           *
           * @zh
           * 在当前页面视图的尾部插入一个新视图。
           *
           * @param page 新视图。
           */

        }, {
          key: "addPage",
          value: function addPage(page) {
            if (!page || this._pages.indexOf(page) !== -1 || !this.content) {
              return;
            }

            if (!page._uiProps.uiTransformComp) {
              logID(4301);
              return;
            }

            this.content.addChild(page);

            this._pages.push(page);

            this._updatePageView();
          }
          /**
           * @en
           * Inserts a page in the specified location.
           *
           * @zh
           * 将页面插入指定位置中。
           *
           * @param page 新视图。
           * @param index 指定位置。
           */

        }, {
          key: "insertPage",
          value: function insertPage(page, index) {
            if (index < 0 || !page || this._pages.indexOf(page) !== -1 || !this.content) {
              return;
            }

            var pageCount = this._pages.length;

            if (index >= pageCount) {
              this.addPage(page);
            } else {
              if (!page._uiProps.uiTransformComp) {
                logID(4301);
                return;
              }

              this._pages.splice(index, 0, page);

              this.content.insertChild(page, index);

              this._updatePageView();
            }
          }
          /**
           * @en
           * Removes a page from PageView.
           *
           * @zh
           * 移除指定页面。
           *
           * @param page 指定页面。
           */

        }, {
          key: "removePage",
          value: function removePage(page) {
            if (!page || !this.content) {
              return;
            }

            var index = this._pages.indexOf(page);

            if (index === -1) {
              warnID(4300, page.name);
              return;
            }

            this.removePageAtIndex(index);
          }
          /**
           * @en
           * Removes a page at index of PageView.
           *
           * @zh
           * 移除指定下标的页面。
           *
           * @param index 页面下标。
           */

        }, {
          key: "removePageAtIndex",
          value: function removePageAtIndex(index) {
            var pageList = this._pages;

            if (index < 0 || index >= pageList.length) {
              return;
            }

            var page = pageList[index];

            if (!page || !this.content) {
              return;
            }

            this.content.removeChild(page);
            pageList.splice(index, 1);

            this._updatePageView();
          }
          /**
           * @en
           * Removes all pages from PageView.
           *
           * @zh
           * 移除所有页面。
           */

        }, {
          key: "removeAllPages",
          value: function removeAllPages() {
            if (!this.content) {
              return;
            }

            var locPages = this._pages;

            for (var i = 0, len = locPages.length; i < len; i++) {
              this.content.removeChild(locPages[i]);
            }

            this._pages.length = 0;

            this._updatePageView();
          }
          /**
           * @en
           * Scroll PageView to index.
           *
           * @zh
           * 滚动到指定页面
           *
           * @param idx index of page.
           * @param timeInSecond scrolling time.
           */

        }, {
          key: "scrollToPage",
          value: function scrollToPage(idx) {
            var timeInSecond = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;

            if (idx < 0 || idx >= this._pages.length) {
              return;
            }

            this._curPageIdx = idx;
            this.scrollToOffset(this._moveOffsetValue(idx), timeInSecond, true);

            if (this.indicator) {
              this.indicator._changedState();
            }
          } // override the method of ScrollView

        }, {
          key: "getScrollEndedEventTiming",
          value: function getScrollEndedEventTiming() {
            return this.pageTurningEventTiming;
          } // 刷新页面视图

        }, {
          key: "_updatePageView",
          value: function _updatePageView() {
            // 当页面数组变化时修改 content 大小
            if (!this.content) {
              return;
            }

            var layout = this.content.getComponent(Layout);

            if (layout && layout.enabled) {
              layout.updateLayout();
            }

            var pageCount = this._pages.length;

            if (this._curPageIdx >= pageCount) {
              this._curPageIdx = pageCount === 0 ? 0 : pageCount - 1;
              this._lastPageIdx = this._curPageIdx;
            } // 进行排序


            var contentPos = this._initContentPos;

            for (var i = 0; i < pageCount; ++i) {
              var page = this._pages[i]; // page.setSiblingIndex(i);

              var pos = page.position;

              if (this.direction === Direction$3.Horizontal) {
                this._scrollCenterOffsetX[i] = Math.abs(contentPos.x + pos.x);
              } else {
                this._scrollCenterOffsetY[i] = Math.abs(contentPos.y + pos.y);
              }
            } // 刷新 indicator 信息与状态


            if (this.indicator) {
              this.indicator._refresh();
            }
          } // 刷新所有页面的大小

        }, {
          key: "_updateAllPagesSize",
          value: function _updateAllPagesSize() {
            var viewTrans = this.view;

            if (!this.content || !viewTrans) {
              return;
            }

            if (this._sizeMode !== SizeMode.Unified) {
              return;
            }

            var locPages =  this._pages;
            var selfSize = viewTrans.contentSize;

            for (var i = 0, len = locPages.length; i < len; i++) {
              locPages[i]._uiProps.uiTransformComp.setContentSize(selfSize);
            }
          }
        }, {
          key: "_handleReleaseLogic",
          value: function _handleReleaseLogic() {
            this._autoScrollToPage();

            if (this._scrolling) {
              this._scrolling = false;

              if (!this._autoScrolling) {
                this._dispatchEvent(PageView.EventType.SCROLL_ENDED);
              }
            }
          }
        }, {
          key: "_onTouchBegan",
          value: function _onTouchBegan(event, captureListeners) {
            event.touch.getUILocation(_temp_vec2);
            Vec3.set(this._touchBeganPosition, _temp_vec2.x, _temp_vec2.y, 0);

            _get(_getPrototypeOf(PageView.prototype), "_onTouchBegan", this).call(this, event, captureListeners);
          }
        }, {
          key: "_onTouchMoved",
          value: function _onTouchMoved(event, captureListeners) {
            _get(_getPrototypeOf(PageView.prototype), "_onTouchMoved", this).call(this, event, captureListeners);
          }
        }, {
          key: "_onTouchEnded",
          value: function _onTouchEnded(event, captureListeners) {
            event.touch.getUILocation(_temp_vec2);
            Vec3.set(this._touchEndPosition, _temp_vec2.x, _temp_vec2.y, 0);

            _get(_getPrototypeOf(PageView.prototype), "_onTouchEnded", this).call(this, event, captureListeners);
          }
        }, {
          key: "_onTouchCancelled",
          value: function _onTouchCancelled(event, captureListeners) {
            event.touch.getUILocation(_temp_vec2);
            Vec3.set(this._touchEndPosition, _temp_vec2.x, _temp_vec2.y, 0);

            _get(_getPrototypeOf(PageView.prototype), "_onTouchCancelled", this).call(this, event, captureListeners);
          }
        }, {
          key: "_onMouseWheel",
          value: function _onMouseWheel() {}
        }, {
          key: "_syncScrollDirection",
          value: function _syncScrollDirection() {
            this.horizontal = this.direction === Direction$3.Horizontal;
            this.vertical = this.direction === Direction$3.Vertical;
          }
        }, {
          key: "_syncSizeMode",
          value: function _syncSizeMode() {
            var viewTrans = this.view;

            if (!this.content || !viewTrans) {
              return;
            }

            var layout = this.content.getComponent(Layout);

            if (layout) {
              if (this._sizeMode === SizeMode.Free && this._pages.length > 0) {
                var firstPageTrans = this._pages[0]._uiProps.uiTransformComp;
                var lastPageTrans = this._pages[this._pages.length - 1]._uiProps.uiTransformComp;

                if (this.direction === Direction$3.Horizontal) {
                  layout.paddingLeft = (viewTrans.width - firstPageTrans.width) / 2;
                  layout.paddingRight = (viewTrans.width - lastPageTrans.width) / 2;
                } else if (this.direction === Direction$3.Vertical) {
                  layout.paddingTop = (viewTrans.height - firstPageTrans.height) / 2;
                  layout.paddingBottom = (viewTrans.height - lastPageTrans.height) / 2;
                }
              }

              layout.updateLayout();
            }
          } // 初始化页面

        }, {
          key: "_initPages",
          value: function _initPages() {
            if (!this.content) {
              return;
            }

            this._initContentPos = this.content.position;
            var children = this.content.children;

            for (var i = 0; i < children.length; ++i) {
              var page = children[i];

              if (this._pages.indexOf(page) >= 0) {
                continue;
              }

              this._pages.push(page);
            }

            this._syncScrollDirection();

            this._syncSizeMode();

            this._updatePageView();
          }
        }, {
          key: "_dispatchPageTurningEvent",
          value: function _dispatchPageTurningEvent() {
            if (this._lastPageIdx === this._curPageIdx) {
              return;
            }

            this._lastPageIdx = this._curPageIdx;
            EventHandler.emitEvents(this.pageEvents, this, EventType$4.PAGE_TURNING);
            this.node.emit(EventType$4.PAGE_TURNING, this);
          } // 快速滑动

        }, {
          key: "_isQuicklyScrollable",
          value: function _isQuicklyScrollable(touchMoveVelocity) {
            if (this.direction === Direction$3.Horizontal) {
              if (Math.abs(touchMoveVelocity.x) > this.autoPageTurningThreshold) {
                return true;
              }
            } else if (this.direction === Direction$3.Vertical) {
              if (Math.abs(touchMoveVelocity.y) > this.autoPageTurningThreshold) {
                return true;
              }
            }

            return false;
          } // 通过 idx 获取偏移值数值

        }, {
          key: "_moveOffsetValue",
          value: function _moveOffsetValue(idx) {
            var offset = new Vec3();

            if (this._sizeMode === SizeMode.Free) {
              if (this.direction === Direction$3.Horizontal) {
                offset.x = this._scrollCenterOffsetX[idx];
              } else if (this.direction === Direction$3.Vertical) {
                offset.y = this._scrollCenterOffsetY[idx];
              }
            } else {
              var viewTrans = this.view;

              if (!viewTrans) {
                return offset;
              }

              if (this.direction === Direction$3.Horizontal) {
                offset.x = idx * viewTrans.width;
              } else if (this.direction === Direction$3.Vertical) {
                offset.y = idx * viewTrans.height;
              }
            }

            return offset;
          }
        }, {
          key: "_getDragDirection",
          value: function _getDragDirection(moveOffset) {
            if (this._direction === Direction$3.Horizontal) {
              if (moveOffset.x === 0) {
                return 0;
              }

              return moveOffset.x > 0 ? 1 : -1;
            } else {
              // 由于滚动 Y 轴的原点在在右上角所以应该是小于 0
              if (moveOffset.y === 0) {
                return 0;
              }

              return moveOffset.y < 0 ? 1 : -1;
            }
          } // 是否超过自动滚动临界值

        }, {
          key: "_isScrollable",
          value: function _isScrollable(offset, index, nextIndex) {
            if (this._sizeMode === SizeMode.Free) {
              var curPageCenter = 0;
              var nextPageCenter = 0;

              if (this.direction === Direction$3.Horizontal) {
                curPageCenter = this._scrollCenterOffsetX[index];
                nextPageCenter = this._scrollCenterOffsetX[nextIndex];
                return Math.abs(offset.x) >= Math.abs(curPageCenter - nextPageCenter) * this.scrollThreshold;
              } else if (this.direction === Direction$3.Vertical) {
                curPageCenter = this._scrollCenterOffsetY[index];
                nextPageCenter = this._scrollCenterOffsetY[nextIndex];
                return Math.abs(offset.y) >= Math.abs(curPageCenter - nextPageCenter) * this.scrollThreshold;
              }
            } else {
              var viewTrans = this.view;

              if (!viewTrans) {
                return;
              }

              if (this.direction === Direction$3.Horizontal) {
                return Math.abs(offset.x) >= viewTrans.width * this.scrollThreshold;
              } else if (this.direction === Direction$3.Vertical) {
                return Math.abs(offset.y) >= viewTrans.height * this.scrollThreshold;
              }
            }
          }
        }, {
          key: "_autoScrollToPage",
          value: function _autoScrollToPage() {
            var bounceBackStarted = this._startBounceBackIfNeeded();

            if (bounceBackStarted) {
              var bounceBackAmount = this._getHowMuchOutOfBoundary();

              bounceBackAmount = this._clampDelta(bounceBackAmount);

              if (bounceBackAmount.x > 0 || bounceBackAmount.y < 0) {
                this._curPageIdx = this._pages.length === 0 ? 0 : this._pages.length - 1;
              }

              if (bounceBackAmount.x < 0 || bounceBackAmount.y > 0) {
                this._curPageIdx = 0;
              }

              if (this.indicator) {
                this.indicator._changedState();
              }
            } else {
              var moveOffset = new Vec3();
              Vec3.subtract(moveOffset, this._touchBeganPosition, this._touchEndPosition);
              var index = this._curPageIdx;

              var nextIndex = index + this._getDragDirection(moveOffset);

              var timeInSecond = this.pageTurningSpeed * Math.abs(index - nextIndex);

              if (nextIndex < this._pages.length) {
                if (this._isScrollable(moveOffset, index, nextIndex)) {
                  this.scrollToPage(nextIndex, timeInSecond);
                  return;
                } else {
                  var touchMoveVelocity = this._calculateTouchMoveVelocity();

                  if (this._isQuicklyScrollable(touchMoveVelocity)) {
                    this.scrollToPage(nextIndex, timeInSecond);
                    return;
                  }
                }
              }

              this.scrollToPage(index, timeInSecond);
            }
          }
        }, {
          key: "sizeMode",

          /**
           * @en
           * Specify the size type of each page in PageView.
           *
           * @zh
           * 页面视图中每个页面大小类型
           */
          get: function get() {
            return this._sizeMode;
          },
          set: function set(value) {
            if (this._sizeMode === value) {
              return;
            }

            this._sizeMode = value;

            this._syncSizeMode();
          }
          /**
           * @en
           * The page view direction.
           *
           * @zh
           * 页面视图滚动类型
           */

        }, {
          key: "direction",
          get: function get() {
            return this._direction;
          },
          set: function set(value) {
            if (this._direction === value) {
              return;
            }

            this._direction = value;

            this._syncScrollDirection();
          }
          /**
           * @en
           * The scroll threshold value, when drag exceeds this value,
           * release the next page will automatically scroll, less than the restore.
           *
           * @zh
           * 滚动临界值，默认单位百分比，当拖拽超出该数值时，松开会自动滚动下一页，小于时则还原。
           */

        }, {
          key: "scrollThreshold",
          get: function get() {
            return this._scrollThreshold;
          },
          set: function set(value) {
            if (this._scrollThreshold === value) {
              return;
            }

            this._scrollThreshold = value;
          }
          /**
           * @en
           * Change the PageTurning event timing of PageView.
           *
           * @zh
           * 设置 PageView PageTurning 事件的发送时机。
           */

        }, {
          key: "pageTurningEventTiming",
          get: function get() {
            return this._pageTurningEventTiming;
          },
          set: function set(value) {
            if (this._pageTurningEventTiming === value) {
              return;
            }

            this._pageTurningEventTiming = value;
          }
          /**
           * @en
           * The Page View Indicator.
           *
           * @zh
           * 页面视图指示器组件
           */

        }, {
          key: "indicator",
          get: function get() {
            return this._indicator;
          },
          set: function set(value) {
            if (this._indicator === value) {
              return;
            }

            this._indicator = value;

            if (this.indicator) {
              this.indicator.setPageView(this);
            }
          }
        }, {
          key: "curPageIdx",
          get: function get() {
            return this._curPageIdx;
          }
        }, {
          key: "verticalScrollBar",
          get: function get() {
            return _get(_getPrototypeOf(PageView.prototype), "verticalScrollBar", this);
          },
          set: function set(value) {
            _set(_getPrototypeOf(PageView.prototype), "verticalScrollBar", value, this, true);
          }
        }, {
          key: "horizontalScrollBar",
          get: function get() {
            return _get(_getPrototypeOf(PageView.prototype), "horizontalScrollBar", this);
          },
          set: function set(value) {
            _set(_getPrototypeOf(PageView.prototype), "horizontalScrollBar", value, this, true);
          }
        }]);

        return PageView;
      }(ScrollView), _class3$e.SizeMode = SizeMode, _class3$e.Direction = Direction$3, _class3$e.EventType = extendsEnum(EventType$4, EventType$2), _temp$j), (_applyDecoratedDescriptor(_class2$h.prototype, "sizeMode", [_dec5$h, _dec6$h], Object.getOwnPropertyDescriptor(_class2$h.prototype, "sizeMode"), _class2$h.prototype), _applyDecoratedDescriptor(_class2$h.prototype, "direction", [_dec7$h, _dec8$f], Object.getOwnPropertyDescriptor(_class2$h.prototype, "direction"), _class2$h.prototype), _applyDecoratedDescriptor(_class2$h.prototype, "scrollThreshold", [slide, _dec9$f, _dec10$f], Object.getOwnPropertyDescriptor(_class2$h.prototype, "scrollThreshold"), _class2$h.prototype), _applyDecoratedDescriptor(_class2$h.prototype, "pageTurningEventTiming", [slide, _dec11$f, _dec12$d], Object.getOwnPropertyDescriptor(_class2$h.prototype, "pageTurningEventTiming"), _class2$h.prototype), _applyDecoratedDescriptor(_class2$h.prototype, "indicator", [_dec13$b, _dec14$9], Object.getOwnPropertyDescriptor(_class2$h.prototype, "indicator"), _class2$h.prototype), _descriptor$h = _applyDecoratedDescriptor(_class2$h.prototype, "autoPageTurningThreshold", [serializable, _dec15$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _applyDecoratedDescriptor(_class2$h.prototype, "verticalScrollBar", [_dec16$7, override, _dec17$7], Object.getOwnPropertyDescriptor(_class2$h.prototype, "verticalScrollBar"), _class2$h.prototype), _applyDecoratedDescriptor(_class2$h.prototype, "horizontalScrollBar", [_dec18$6, override, _dec19$6], Object.getOwnPropertyDescriptor(_class2$h.prototype, "horizontalScrollBar"), _class2$h.prototype), _descriptor2$h = _applyDecoratedDescriptor(_class2$h.prototype, "horizontal", [override, serializable, _dec20$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3$f = _applyDecoratedDescriptor(_class2$h.prototype, "vertical", [override, serializable, _dec21$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4$d = _applyDecoratedDescriptor(_class2$h.prototype, "cancelInnerEvents", [override, serializable, _dec22$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5$b = _applyDecoratedDescriptor(_class2$h.prototype, "scrollEvents", [_dec23$5, serializable, override, _dec24$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6$8 = _applyDecoratedDescriptor(_class2$h.prototype, "pageTurningSpeed", [serializable, editable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.3;
        }
      }), _descriptor7$7 = _applyDecoratedDescriptor(_class2$h.prototype, "pageEvents", [_dec25$4, serializable, _dec26$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8$7 = _applyDecoratedDescriptor(_class2$h.prototype, "_sizeMode", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SizeMode.Unified;
        }
      }), _descriptor9$7 = _applyDecoratedDescriptor(_class2$h.prototype, "_direction", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Direction$3.Horizontal;
        }
      }), _descriptor10$7 = _applyDecoratedDescriptor(_class2$h.prototype, "_scrollThreshold", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor11$7 = _applyDecoratedDescriptor(_class2$h.prototype, "_pageTurningEventTiming", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor12$6 = _applyDecoratedDescriptor(_class2$h.prototype, "_indicator", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$h)) || _class$k) || _class$k) || _class$k) || _class$k));
      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event page-turning
       * @param {Event.EventCustom} event
       * @param {PageView} pageView - The PageView component.
       */

      var _dec$l, _dec2$l, _dec3$k, _dec4$j, _dec5$i, _dec6$i, _dec7$i, _dec8$g, _dec9$g, _dec10$g, _class$l, _class2$i, _temp$k;
      var UIStaticBatch = function (v) { return exports({ UIStaticBatch: v, UIStaticBatchComponent: v }), v; }((_dec$l = ccclass('cc.UIStaticBatch'), _dec2$l = help(), _dec3$k = menu(), _dec4$j = executionOrder(110), _dec5$i = visible(), _dec6$i = visible(), _dec7$i = visible(), _dec8$g = type(Material), _dec9$g = displayName(), _dec10$g = visible(), _dec$l(_class$l = _dec2$l(_class$l = _dec3$k(_class$l = _dec4$j(_class$l = (_class2$i = (_temp$k = /*#__PURE__*/function (_UIRenderable) {
        _inherits(UIStaticBatch, _UIRenderable);

        function UIStaticBatch() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, UIStaticBatch);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UIStaticBatch)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this._init = false;
          _this._meshBuffer = null;
          _this._dirty = true;
          _this._lastMeshBuffer = null;
          _this._uiDrawBatchList = [];
          return _this;
        }

        _createClass(UIStaticBatch, [{
          key: "onLoad",
          value: function onLoad() {
            var ui = this._getUI();

            if (!ui) {
              return;
            }

            var attr = vfmt;
            var buffer = new MeshBuffer(ui);
            buffer.initialize(attr, this._arrivalMaxBuffer);
            this._meshBuffer = buffer;
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            _get(_getPrototypeOf(UIStaticBatch.prototype), "onDestroy", this).call(this);

            this._clearData();

            if (this._meshBuffer) {
              this._meshBuffer.destroy();

              this._meshBuffer = null;
            }
          }
        }, {
          key: "updateAssembler",
          value: function updateAssembler(render) {
            if (this._dirty) {
              render.finishMergeBatches();
              this._lastMeshBuffer = render.currBufferBatch;
              render.currBufferBatch = this._meshBuffer;
              render.currStaticRoot = this;
            }

            if (this._init) {
              render.finishMergeBatches();
              render.commitStaticBatch(this);
            }
          }
        }, {
          key: "postUpdateAssembler",
          value: function postUpdateAssembler(render) {
            if (this._dirty) {
              render.finishMergeBatches();
              render.currBufferBatch = this._lastMeshBuffer;
              render.currStaticRoot = null;
              this._dirty = false;
              this._init = true;
              this.node._static = true;

              this._meshBuffer.uploadData();
            }
          }
          /**
           * @en
           * Recollect data tags.
           * The render data will be recollected during the render phase of the current frame, and the next frame will be rendered using fixed data.
           * Note: 尽量不要频繁调用此接口, 会有一定内存损耗.
           *
           * @zh
           * 重新采集数据标记，会在当前帧的渲染阶段重新采集渲染数据，下一帧开始将会使用固定数据进行渲染。
           * 注意：尽量不要频繁调用此接口，因为会清空原先存储的 ia 数据重新采集，会有一定内存损耗。
           */

        }, {
          key: "markAsDirty",
          value: function markAsDirty() {
            if (!this._getUI()) {
              return;
            }

            this.node._static = false;
            this._dirty = true;
            this._init = false;

            this._clearData();
          }
        }, {
          key: "_requireDrawBatch",
          value: function _requireDrawBatch() {
            var batch = new UIDrawBatch();
            batch.isStatic = true;

            this._uiDrawBatchList.push(batch);

            return batch;
          }
        }, {
          key: "_clearData",
          value: function _clearData() {
            if (this._meshBuffer) {
              this._meshBuffer.reset();

              var ui = this._getUI();

              for (var i = 0; i < this._uiDrawBatchList.length; i++) {
                var element = this._uiDrawBatchList[i];
                element.destroy(ui);
              }
            }

            this._uiDrawBatchList.length = 0;
            this._init = false;
          }
        }, {
          key: "_getUI",
          value: function _getUI() {
            if (director.root && director.root.ui) {
              return director.root.ui;
            }

            warnID(9301);
            return null;
          }
        }, {
          key: "_arrivalMaxBuffer",
          value: function _arrivalMaxBuffer() {
            warnID(9300);
          }
        }, {
          key: "dstBlendFactor",
          get: function get() {
            return this._dstBlendFactor;
          },
          set: function set(value) {
            if (this._dstBlendFactor === value) {
              return;
            }

            this._dstBlendFactor = value;

            this._updateBlendFunc();
          }
        }, {
          key: "srcBlendFactor",
          get: function get() {
            return this._srcBlendFactor;
          },
          set: function set(value) {
            if (this._srcBlendFactor === value) {
              return;
            }

            this._srcBlendFactor = value;

            this._updateBlendFunc();
          }
        }, {
          key: "color",
          get: function get() {
            return this._color;
          },
          set: function set(value) {
            if (this._color === value) {
              return;
            }

            this._color.set(value);

            this._updateColor();

            this.markForUpdateRenderData();
          }
        }, {
          key: "sharedMaterials",
          get: function get() {
            return _get(_getPrototypeOf(UIStaticBatch.prototype), "sharedMaterials", this);
          },
          set: function set(val) {
            _set(_getPrototypeOf(UIStaticBatch.prototype), "sharedMaterials", val, this, true);
          }
        }, {
          key: "drawBatchList",
          get: function get() {
            return this._uiDrawBatchList;
          }
        }]);

        return UIStaticBatch;
      }(UIRenderable), _temp$k), (_applyDecoratedDescriptor(_class2$i.prototype, "dstBlendFactor", [override, _dec5$i], Object.getOwnPropertyDescriptor(_class2$i.prototype, "dstBlendFactor"), _class2$i.prototype), _applyDecoratedDescriptor(_class2$i.prototype, "srcBlendFactor", [override, _dec6$i], Object.getOwnPropertyDescriptor(_class2$i.prototype, "srcBlendFactor"), _class2$i.prototype), _applyDecoratedDescriptor(_class2$i.prototype, "color", [override, _dec7$i], Object.getOwnPropertyDescriptor(_class2$i.prototype, "color"), _class2$i.prototype), _applyDecoratedDescriptor(_class2$i.prototype, "sharedMaterials", [override, _dec8$g, _dec9$g, _dec10$g], Object.getOwnPropertyDescriptor(_class2$i.prototype, "sharedMaterials"), _class2$i.prototype)), _class2$i)) || _class$l) || _class$l) || _class$l) || _class$l));

      var _dec$m, _dec2$m, _dec3$l, _dec4$k, _class$m, _class2$j, _descriptor$i, _temp$l;
      /**
       * @en
       * Set the UI transparency component.
       * This component can be used to influence subsequent render nodes.
       * Nodes that already have a rendering component can modify the alpha channel of color directly.
       *
       * @zh
       * UI 透明度设置组件。可以通过该组件设置透明度来影响后续的渲染节点。已经带有渲染组件的节点可以直接修改 color 的 alpha 通道。
       */

      var UIOpacity = function (v) { return exports({ UIOpacity: v, UIOpacityComponent: v }), v; }((_dec$m = ccclass('cc.UIOpacity'), _dec2$m = help(), _dec3$l = executionOrder(110), _dec4$k = menu(), _dec$m(_class$m = _dec2$m(_class$m = _dec3$l(_class$m = _dec4$k(_class$m = executeInEditMode(_class$m = (_class2$j = (_temp$l = /*#__PURE__*/function (_Component) {
        _inherits(UIOpacity, _Component);

        function UIOpacity() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, UIOpacity);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UIOpacity)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "_opacity", _descriptor$i, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(UIOpacity, [{
          key: "onEnable",
          value: function onEnable() {
            this.node._uiProps.opacity = this._opacity / 255;
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            this.node._uiProps.opacity = 1;
          }
        }, {
          key: "opacity",

          /**
           * @en
           * The transparency value of the impact.
           *
           * @zh
           * 透明度。
           */
          get: function get() {
            return this._opacity;
          },
          set: function set(value) {
            if (this._opacity === value) {
              return;
            }

            this._opacity = value;
            this.node._uiProps.opacity = value / 255;
          }
        }]);

        return UIOpacity;
      }(Component), _temp$l), (_applyDecoratedDescriptor(_class2$j.prototype, "opacity", [editable], Object.getOwnPropertyDescriptor(_class2$j.prototype, "opacity"), _class2$j.prototype), _descriptor$i = _applyDecoratedDescriptor(_class2$j.prototype, "_opacity", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 255;
        }
      })), _class2$j)) || _class$m) || _class$m) || _class$m) || _class$m) || _class$m));

      var _dec$n, _dec2$n, _dec3$m, _dec4$l, _dec5$j, _class$n;
      /**
       * @en
       * This component is used to adjust the layout of current node to respect the safe area of a notched mobile device such as the iPhone X.
       * It is typically used for the top node of the UI interaction area. For specific usage, refer to the official [test-cases-3d/assets/cases/ui/20.safe-area/safe-area.scene](https://github.com/cocos-creator/test-cases-3d).
       *
       * The concept of safe area is to give you a fixed inner rectangle in which you can safely display content that will be drawn on screen.
       * You are strongly discouraged from providing controls outside of this area. But your screen background could embellish edges.
       *
       * This component internally uses the API `sys.getSafeAreaRect();` to obtain the safe area of the current iOS or Android device,
       * and implements the adaptation by using the Widget component and set anchor.
       *
       * @zh
       * 该组件会将所在节点的布局适配到 iPhone X 等异形屏手机的安全区域内，通常用于 UI 交互区域的顶层节点，具体用法可参考官方范例 [test-cases-3d/assets/cases/ui/20.safe-area/safe-area.scene](https://github.com/cocos-creator/test-cases-3d)。
       *
       * 该组件内部通过 API `sys.getSafeAreaRect();` 获取到当前 iOS 或 Android 设备的安全区域，并通过 Widget 组件实现适配。
       *
       */

      var  // @ts-ignore
      SafeArea = function (v) { return exports({ SafeArea: v, SafeAreaComponent: v }), v; }((_dec$n = ccclass('cc.SafeArea'), _dec2$n = help(), _dec3$m = executionOrder(110), _dec4$l = menu(), _dec5$j = requireComponent(Widget), _dec$n(_class$n = _dec2$n(_class$n = _dec3$m(_class$n = executeInEditMode(_class$n = _dec4$l(_class$n = _dec5$j(_class$n = /*#__PURE__*/function (_Component) {
        _inherits(SafeArea, _Component);

        function SafeArea() {
          _classCallCheck(this, SafeArea);

          return _possibleConstructorReturn(this, _getPrototypeOf(SafeArea).apply(this, arguments));
        }

        _createClass(SafeArea, [{
          key: "onEnable",
          value: function onEnable() {
            this.updateArea();
            view.on('canvas-resize', this.updateArea, this);
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            view.off('canvas-resize', this.updateArea, this);
          }
          /**
           * @en Adapt to safe area
           * @zh 立即适配安全区域
           * @method updateArea
           * @example
           * let safeArea = this.node.addComponent(cc.SafeArea);
           * safeArea.updateArea();
           */

        }, {
          key: "updateArea",
          value: function updateArea() {
            // TODO Remove Widget dependencies in the future
            var widget = this.node.getComponent(Widget);
            var uiTransComp = this.node.getComponent(UITransform);

            if (!widget || !uiTransComp) {
              return;
            }

            var winSize = legacyCC.winSize,
                sys = legacyCC.sys;


            widget.updateAlignment();
            var lastPos = this.node.position;
            var lastAnchorPoint = uiTransComp.anchorPoint; //

            widget.isAlignTop = widget.isAlignBottom = widget.isAlignLeft = widget.isAlignRight = true;
            var screenWidth = winSize.width,
                screenHeight = winSize.height;
            var safeArea = sys.getSafeAreaRect();
            console.log(safeArea);
            widget.top = screenHeight - safeArea.y - safeArea.height;
            widget.bottom = safeArea.y;
            widget.left = safeArea.x;
            widget.right = screenWidth - safeArea.x - safeArea.width;
            widget.updateAlignment(); // set anchor, keep the original position unchanged

            var curPos = this.node.position;
            var anchorX = lastAnchorPoint.x - (curPos.x - lastPos.x) / uiTransComp.width;
            var anchorY = lastAnchorPoint.y - (curPos.y - lastPos.y) / uiTransComp.height;
            uiTransComp.setAnchorPoint(anchorX, anchorY); // IMPORTANT: restore to lastPos even if widget is not ALWAYS

            widget.enabled = true;
          }
        }]);

        return SafeArea;
      }(Component)) || _class$n) || _class$n) || _class$n) || _class$n) || _class$n) || _class$n));

      var _dec$o, _dec2$o, _dec3$n, _dec4$m, _dec5$k, _dec6$j, _dec7$j, _dec8$h, _dec9$h, _dec10$h, _dec11$g, _dec12$e, _class$o, _class2$k, _descriptor$j, _descriptor2$i, _descriptor3$g, _descriptor4$e, _descriptor5$c, _temp$m;
      /**
       * @en The component that converts 3D node coordinates to UI node coordinates.
       * It mainly provides the converted world coordinates after mapping and the perspective ratio of the simulated perspective camera.
       * @zh 3D 节点坐标转换到 UI 节点坐标组件
       * 主要提供映射后的转换世界坐标以及模拟透视相机远近比。
       */

      var UICoordinateTracker = function (v) { return exports({ UICoordinateTracker: v, UICoordinateTrackerComponent: v }), v; }((_dec$o = ccclass('cc.UICoordinateTracker'), _dec2$o = help(), _dec3$n = menu(), _dec4$m = executionOrder(110), _dec5$k = type(Node), _dec6$j = tooltip(), _dec7$j = type(Camera), _dec8$h = tooltip(), _dec9$h = tooltip(), _dec10$h = tooltip(), _dec11$g = type([EventHandler]), _dec12$e = tooltip(), _dec$o(_class$o = _dec2$o(_class$o = _dec3$n(_class$o = _dec4$m(_class$o = (_class2$k = (_temp$m = /*#__PURE__*/function (_Component) {
        _inherits(UICoordinateTracker, _Component);

        function UICoordinateTracker() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, UICoordinateTracker);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UICoordinateTracker)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "syncEvents", _descriptor$j, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_target", _descriptor2$i, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_camera", _descriptor3$g, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_useScale", _descriptor4$e, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_distance", _descriptor5$c, _assertThisInitialized(_this));

          _this._transformPos = new Vec3();
          _this._viewPos = new Vec3();
          _this._canMove = true;
          _this._lastWPos = new Vec3();
          _this._lastCameraPos = new Vec3();
          return _this;
        }

        _createClass(UICoordinateTracker, [{
          key: "onEnable",
          value: function onEnable() {
            this._checkCanMove();
          }
        }, {
          key: "update",
          value: function update() {
            var wPos = this.node.worldPosition;
            var camera = this._camera;

            if (!this._canMove || !camera || !camera.camera || this._lastWPos.equals(wPos) && this._lastCameraPos.equals(camera.node.worldPosition)) {
              return;
            }

            this._lastWPos.set(wPos);

            this._lastCameraPos.set(camera.node.worldPosition); // [HACK]


            camera.camera.update();
            camera.convertToUINode(wPos, this._target, this._transformPos);

            if (this._useScale) {
              Vec3.transformMat4(this._viewPos, this.node.worldPosition, camera.camera.matView);
            }

            if (this.syncEvents.length > 0) {
              var data = this._distance / Math.abs(this._viewPos.z);
              EventHandler.emitEvents(this.syncEvents, this._transformPos, data);
            }
          }
        }, {
          key: "_checkCanMove",
          value: function _checkCanMove() {
            this._canMove = !!(this._camera && this._target);
          }
        }, {
          key: "target",

          /**
           * @en
           * Target node.
           *
           * @zh
           * 目标对象。
           */
          get: function get() {
            return this._target;
          },
          set: function set(value) {
            if (this._target === value) {
              return;
            }

            this._target = value;

            this._checkCanMove();
          }
          /**
           * @en
           * 3D camera for conversion.
           *
           * @zh
           * 照射相机。
           */

        }, {
          key: "camera",
          get: function get() {
            return this._camera;
          },
          set: function set(value) {
            if (this._camera === value) {
              return;
            }

            this._camera = value;

            this._checkCanMove();
          }
          /**
           * @en
           * Do you need to scale the converted 2d node size according to how far the 3D node is from the camera.
           * Note:need to combine the distance parameter to calculate.
           *
           * @zh
           * 是否是缩放映射。
           */

        }, {
          key: "useScale",
          get: function get() {
            return this._useScale;
          },
          set: function set(value) {
            if (this._useScale === value) {
              return;
            }

            this._useScale = value;
          }
          /**
           * @en
           * The distance from the camera is the normal display calculation size.
           *
           * @zh
           * 距相机多少距离为正常显示计算大小。
           */

        }, {
          key: "distance",
          get: function get() {
            return this._distance;
          },
          set: function set(value) {
            if (this._distance === value) {
              return;
            }

            this._distance = value;
          }
          /**
           * @en
           * Event callback after value change.
           *
           * @zh
           * 映射数据事件。回调的第一个参数是映射后的本地坐标，第二个是距相机距离比。
           */

        }]);

        return UICoordinateTracker;
      }(Component), _temp$m), (_applyDecoratedDescriptor(_class2$k.prototype, "target", [_dec5$k, _dec6$j], Object.getOwnPropertyDescriptor(_class2$k.prototype, "target"), _class2$k.prototype), _applyDecoratedDescriptor(_class2$k.prototype, "camera", [_dec7$j, _dec8$h], Object.getOwnPropertyDescriptor(_class2$k.prototype, "camera"), _class2$k.prototype), _applyDecoratedDescriptor(_class2$k.prototype, "useScale", [_dec9$h], Object.getOwnPropertyDescriptor(_class2$k.prototype, "useScale"), _class2$k.prototype), _applyDecoratedDescriptor(_class2$k.prototype, "distance", [_dec10$h], Object.getOwnPropertyDescriptor(_class2$k.prototype, "distance"), _class2$k.prototype), _descriptor$j = _applyDecoratedDescriptor(_class2$k.prototype, "syncEvents", [_dec11$g, serializable, _dec12$e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2$i = _applyDecoratedDescriptor(_class2$k.prototype, "_target", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$g = _applyDecoratedDescriptor(_class2$k.prototype, "_camera", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4$e = _applyDecoratedDescriptor(_class2$k.prototype, "_useScale", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5$c = _applyDecoratedDescriptor(_class2$k.prototype, "_distance", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2$k)) || _class$o) || _class$o) || _class$o) || _class$o));

      var _dec$p, _dec2$p, _dec3$o, _class$p;
      var BlockEvents = [SystemEventType.TOUCH_START, SystemEventType.TOUCH_END, SystemEventType.TOUCH_MOVE, SystemEventType.MOUSE_DOWN, SystemEventType.MOUSE_MOVE, SystemEventType.MOUSE_UP, SystemEventType.MOUSE_ENTER, SystemEventType.MOUSE_LEAVE, SystemEventType.MOUSE_WHEEL];

      function stopPropagation(event) {
        event.propagationStopped = true;
      }
      /**
       * @en
       * This component will block all input events (mouse and touch) within the size of the node,
       * preventing the input from penetrating into the underlying node, typically for the background of the top UI.<br>
       * This component does not have any API interface and can be added directly to the scene to take effect.
       * @zh
       * 该组件将拦截所属节点尺寸内的所有输入事件（鼠标和触摸），防止输入穿透到下层节点，一般用于上层 UI 的背景。<br>
       * 该组件没有任何 API 接口，直接添加到场景即可生效。
       */


      var BlockInputEvents = function (v) { return exports({ BlockInputEvents: v, BlockInputEventsComponent: v }), v; }((_dec$p = ccclass('cc.BlockInputEvents'), _dec2$p = help(), _dec3$o = menu(), _dec$p(_class$p = _dec2$p(_class$p = _dec3$o(_class$p = /*#__PURE__*/function (_Component) {
        _inherits(BlockInputEvents, _Component);

        function BlockInputEvents() {
          _classCallCheck(this, BlockInputEvents);

          return _possibleConstructorReturn(this, _getPrototypeOf(BlockInputEvents).apply(this, arguments));
        }

        _createClass(BlockInputEvents, [{
          key: "onEnable",
          value: function onEnable() {
            for (var i = 0; i < BlockEvents.length; i++) {
              // supply the 'this' parameter so that the callback could be added and removed correctly,
              // even if the same component is added more than once to a Node.
              this.node.on(BlockEvents[i], stopPropagation, this);
            }
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            for (var i = 0; i < BlockEvents.length; i++) {
              this.node.off(BlockEvents[i], stopPropagation, this);
            }
          }
        }]);

        return BlockInputEvents;
      }(Component)) || _class$p) || _class$p) || _class$p));

      var _tempPos$2 = new Vec3();

      var _defaultAnchor = new Vec2();

      var tInverseTranslate = new Vec3();
      var tInverseScale = new Vec3(1, 1, 1); // align to borders by adjusting node's position and size (ignore rotation)

      function align(node, widget) {
        var hasTarget = widget.target;
        var target;
        var inverseTranslate = tInverseTranslate;
        var inverseScale = tInverseScale;

        if (hasTarget) {
          target = hasTarget; // inverseTranslate = tInverseTranslate;
          // inverseScale = tInverseScale;

          computeInverseTransForTarget(node, target, inverseTranslate, inverseScale);
        } else {
          target = node.parent;
        }

        if (!target.getComponent(UITransform)) {
          return;
        }

        var targetSize = getReadonlyNodeSize(target);
        var isScene = target instanceof Scene;
        var targetAnchor = isScene ? _defaultAnchor : target.getComponent(UITransform).anchorPoint; // @ts-ignore

        var isRoot =  isScene;
        node.getPosition(_tempPos$2);
        var uiTrans = node._uiProps.uiTransformComp;
        var x = _tempPos$2.x;
        var y = _tempPos$2.y;
        var anchor = uiTrans.anchorPoint;
        var scale = node.getScale();

        if (widget.alignFlags & AlignFlags.HORIZONTAL) {
          var localLeft = 0;
          var localRight = 0;
          var targetWidth = targetSize.width;

          if (isRoot) {
            localLeft = visibleRect.left.x;
            localRight = visibleRect.right.x;
          } else {
            localLeft = -targetAnchor.x * targetWidth;
            localRight = localLeft + targetWidth;
          } // adjust borders according to offsets


          localLeft += widget.isAbsoluteLeft ? widget.left : widget.left * targetWidth;
          localRight -= widget.isAbsoluteRight ? widget.right : widget.right * targetWidth;

          if (hasTarget) {
            localLeft += inverseTranslate.x;
            localLeft *= inverseScale.x;
            localRight += inverseTranslate.x;
            localRight *= inverseScale.x;
          }

          var width = 0;
          var anchorX = anchor.x;
          var scaleX = scale.x;

          if (scaleX < 0) {
            anchorX = 1.0 - anchorX;
            scaleX = -scaleX;
          }

          if (widget.isStretchWidth) {
            width = localRight - localLeft;

            if (scaleX !== 0) {
              uiTrans.width = width / scaleX;
            }

            x = localLeft + anchorX * width;
          } else {
            width = uiTrans.width * scaleX;

            if (widget.isAlignHorizontalCenter) {
              var localHorizontalCenter = widget.isAbsoluteHorizontalCenter ? widget.horizontalCenter : widget.horizontalCenter * targetWidth;
              var targetCenter = (0.5 - targetAnchor.x) * targetSize.width;

              if (hasTarget) {
                localHorizontalCenter *= inverseScale.x;
                targetCenter += inverseTranslate.x;
                targetCenter *= inverseScale.x;
              }

              x = targetCenter + (anchorX - 0.5) * width + localHorizontalCenter;
            } else if (widget.isAlignLeft) {
              x = localLeft + anchorX * width;
            } else {
              x = localRight + (anchorX - 1) * width;
            }
          }

          widget._lastSize.width = width;
        }

        if (widget.alignFlags & AlignFlags.VERTICAL) {
          var localTop = 0;
          var localBottom = 0;
          var targetHeight = targetSize.height;

          if (isRoot) {
            localBottom = visibleRect.bottom.y;
            localTop = visibleRect.top.y;
          } else {
            localBottom = -targetAnchor.y * targetHeight;
            localTop = localBottom + targetHeight;
          } // adjust borders according to offsets


          localBottom += widget.isAbsoluteBottom ? widget.bottom : widget.bottom * targetHeight;
          localTop -= widget.isAbsoluteTop ? widget.top : widget.top * targetHeight;

          if (hasTarget) {
            // transform
            localBottom += inverseTranslate.y;
            localBottom *= inverseScale.y;
            localTop += inverseTranslate.y;
            localTop *= inverseScale.y;
          }

          var height = 0;
          var anchorY = anchor.y;
          var scaleY = scale.y;

          if (scaleY < 0) {
            anchorY = 1.0 - anchorY;
            scaleY = -scaleY;
          }

          if (widget.isStretchHeight) {
            height = localTop - localBottom;

            if (scaleY !== 0) {
              uiTrans.height = height / scaleY;
            }

            y = localBottom + anchorY * height;
          } else {
            height = uiTrans.height * scaleY;

            if (widget.isAlignVerticalCenter) {
              var localVerticalCenter = widget.isAbsoluteVerticalCenter ? widget.verticalCenter : widget.verticalCenter * targetHeight;
              var targetMiddle = (0.5 - targetAnchor.y) * targetSize.height;

              if (hasTarget) {
                localVerticalCenter *= inverseScale.y;
                targetMiddle += inverseTranslate.y;
                targetMiddle *= inverseScale.y;
              }

              y = targetMiddle + (anchorY - 0.5) * height + localVerticalCenter;
            } else if (widget.isAlignBottom) {
              y = localBottom + anchorY * height;
            } else {
              y = localTop + (anchorY - 1) * height;
            }
          }

          widget._lastSize.height = height;
        }

        node.setPosition(x, y, _tempPos$2.z);
        Vec3.set(widget._lastPos, x, y, _tempPos$2.z);
      } // TODO: type is hack, Change to the type actually used (Node or BaseNode) when BaseNode complete


      function visitNode(node) {
        var widget = node.getComponent(Widget);

        if (widget) {

          align(node, widget); // @ts-ignore

          if ( widget.alignMode !== AlignMode.ALWAYS) {
            widget.enabled = false;
          } else {
            if (legacyCC.isValid(node, true)) {
              activeWidgets.push(widget);
            } else {
              return;
            }
          }
        }

        var children = node.children;

        for (var _iterator = _createForOfIteratorHelperLoose(children), _step; !(_step = _iterator()).done;) {
          var child = _step.value;

          if (child.active) {
            visitNode(child);
          }
        }
      } // if (EDITOR) {
      //     const animationState = {
      //         previewing: false,
      //         time: 0,
      //         animatedSinceLastFrame: false,
      //     };
      // }


      function refreshScene() {
        // check animation editor
        // if (EDITOR && !Editor.isBuilder) {
        // var AnimUtils = Editor.require('scene://utils/animation');
        // var EditMode = Editor.require('scene://edit-mode');
        // if (AnimUtils && EditMode) {
        //     var nowPreviewing = (EditMode.curMode().name === 'animation' && !!AnimUtils.Cache.animation);
        //     if (nowPreviewing !== animationState.previewing) {
        //         animationState.previewing = nowPreviewing;
        //         if (nowPreviewing) {
        //             animationState.animatedSinceLastFrame = true;
        //             let component = cc.engine.getInstanceById(AnimUtils.Cache.component);
        //             if (component) {
        //                 let animation = component.getAnimationState(AnimUtils.Cache.animation);
        //                 animationState.time = animation.time;
        //             }
        //         }
        //         else {
        //             animationState.animatedSinceLastFrame = false;
        //         }
        //     }
        //     else if (nowPreviewing) {
        //         let component = cc.engine.getInstanceById(AnimUtils.Cache.component);
        //         if (component) {
        //             let animation = component.getAnimationState(AnimUtils.Cache.animation);
        //             if (animationState.time !== animation.time) {
        //                 animationState.animatedSinceLastFrame = true;
        //                 animationState.time = AnimUtils.Cache.animation.time;
        //             }
        //         }
        //     }
        // }
        // }
        var scene = director.getScene();

        if (scene) {
          widgetManager.isAligning = true;

          if (widgetManager._nodesOrderDirty) {
            activeWidgets.length = 0;
            visitNode(scene);
            widgetManager._nodesOrderDirty = false;
          } else {
            var widget = null;
            var iterator = widgetManager._activeWidgetsIterator; // var AnimUtils;
            // if (EDITOR &&
            //     (AnimUtils = Editor.require('scene://utils/animation')) &&
            //     AnimUtils.Cache.animation) {
            //     var editingNode = cc.engine.getInstanceById(AnimUtils.Cache.rNode);
            //     if (editingNode) {
            //         for (i = activeWidgets.length - 1; i >= 0; i--) {
            //             widget = activeWidgets[i];
            //             var node = widget.node;
            //             if (widget.alignMode !== AlignMode.ALWAYS &&
            //                 animationState.animatedSinceLastFrame &&
            //                 node.isChildOf(editingNode)
            //             ) {
            //                 // widget contains in activeWidgets should aligned at least once
            //                 widget.enabled = false;
            //             }
            //             else {
            //                 align(node, widget);
            //             }
            //         }
            //     }
            // }
            // else {
            // loop reversely will not help to prevent out of sync
            // because user may remove more than one item during a step.

            for (iterator.i = 0; iterator.i < activeWidgets.length; ++iterator.i) {
              widget = activeWidgets[iterator.i];

              if (widget._dirty) {
                align(widget.node, widget);
                widget._dirty = false;
              }
            } // }

          }

          widgetManager.isAligning = false;
        } // check animation editor
      }

      var activeWidgets = []; // updateAlignment from scene to node recursively

      function updateAlignment(node) {
        var parent = node.parent;

        if (parent && Node.isNode(parent)) {
          updateAlignment(parent);
        } // node._widget will be null when widget is disabled


        var widget = node.getComponent(Widget);

        if (widget && parent) {
          align(node, widget);
        }
      }

      var canvasList = [];
      var widgetManager = exports('widgetManager', legacyCC._widgetManager = {
        isAligning: false,
        _nodesOrderDirty: false,
        _activeWidgetsIterator: new array.MutableForwardIterator(activeWidgets),
        // hack
        animationState:  null,
        init: function init() {
          director.on(Director.EVENT_AFTER_UPDATE, refreshScene);

          {
            if (sys.isMobile) {
              var thisOnResized = this.onResized.bind(this);
              window.addEventListener('resize', thisOnResized);
              window.addEventListener('orientationchange', thisOnResized);
            } else {
              View.instance.on('design-resolution-changed', this.onResized, this);
            }
          }
        },
        add: function add(widget) {
          this._nodesOrderDirty = true;
          var canvasComp = director.root.ui.getScreen(widget.node._uiProps.uiTransformComp.visibility);

          if (canvasComp && canvasList.indexOf(canvasComp) === -1) {
            canvasList.push(canvasComp);
            canvasComp.node.on('design-resolution-changed', this.onResized, this);
          }
        },
        remove: function remove(widget) {
          this._activeWidgetsIterator.remove(widget);
        },
        onResized: function onResized() {
          var scene = director.getScene();

          if (scene) {
            this.refreshWidgetOnResized(scene);
          }
        },
        refreshWidgetOnResized: function refreshWidgetOnResized(node) {
          if (Node.isNode(node)) {
            var widget = node.getComponent(Widget);

            if (widget && widget.alignMode === AlignMode.ON_WINDOW_RESIZE) {
              widget.enabled = true;
            }
          }

          var children = node.children;

          for (var _iterator2 = _createForOfIteratorHelperLoose(children), _step2; !(_step2 = _iterator2()).done;) {
            var child = _step2.value;
            this.refreshWidgetOnResized(child);
          }
        },
        updateOffsetsToStayPut: function updateOffsetsToStayPut(widget, e) {
          function i(t, c) {
            return Math.abs(t - c) > 1e-10 ? c : t;
          }

          var widgetNode = widget.node;
          var widgetParent = widgetNode.parent;

          if (widgetParent) {
            var zero = new Vec3();
            var one = new Vec3(1, 1, 1);

            if (widget.target) {
              widgetParent = widget.target;
              computeInverseTransForTarget(widgetNode, widgetParent, zero, one);
            }

            if (!e) {
              return;
            }

            var parentTrans = widgetParent._uiProps.uiTransformComp;
            var trans = widgetNode._uiProps.uiTransformComp;

            if (!parentTrans) {
              warnID(6501, widget.node.name);
              return;
            }

            var parentAP = parentTrans.anchorPoint;
            var matchSize = getReadonlyNodeSize(widgetParent);
            var myAP = trans.anchorPoint;
            var pos = widgetNode.getPosition();
            var alignFlags = AlignFlags;
            var widgetNodeScale = widgetNode.getScale();
            var temp = 0;

            if (e & alignFlags.LEFT) {
              var l = -parentAP.x * matchSize.width;
              l += zero.x;
              l *= one.x;
              temp = pos.x - myAP.x * trans.width * widgetNodeScale.x - l;

              if (!widget.isAbsoluteLeft) {
                temp /= matchSize.width;
              }

              temp /= one.x;
              widget.left = i(widget.left, temp);
            }

            if (e & alignFlags.RIGHT) {
              var r = (1 - parentAP.x) * matchSize.width;
              r += zero.x;
              temp = (r *= one.x) - (pos.x + (1 - myAP.x) * trans.width * widgetNodeScale.x);

              if (!widget.isAbsoluteRight) {
                temp /= matchSize.width;
              }

              temp /= one.x;
              widget.right = i(widget.right, temp);
            }

            if (e & alignFlags.TOP) {
              var t = (1 - parentAP.y) * matchSize.height;
              t += zero.y;
              temp = (t *= one.y) - (pos.y + (1 - myAP.y) * trans.height * widgetNodeScale.y);

              if (!widget.isAbsoluteTop) {
                temp /= matchSize.height;
              }

              temp /= one.y;
              widget.top = i(widget.top, temp);
            }

            if (e & alignFlags.BOT) {
              var b = -parentAP.y * matchSize.height;
              b += zero.y;
              b *= one.y;
              temp = pos.y - myAP.y * trans.height * widgetNodeScale.y - b;

              if (!widget.isAbsoluteBottom) {
                temp /= matchSize.height;
              }

              temp /= one.y;
              widget.bottom = i(widget.bottom, temp);
            }
          }
        },
        updateAlignment: updateAlignment,
        AlignMode: AlignMode,
        AlignFlags: AlignFlags
      });
      director.on(Director.EVENT_INIT, function () {
        widgetManager.init();
      });

      /*
       Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

       http://www.cocos.com

       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated engine source code (the "Software"), a limited,
       worldwide, royalty-free, non-assignable, revocable and non-exclusive license
       to use Cocos Creator solely to develop games on your target platforms. You shall
       not use Cocos Creator software for developing other software or tools that's
       used for developing games. You are not granted to publish, distribute,
       sublicense, and/or sell copies of Cocos Creator.

       The software or tools in this License Agreement are licensed, not sold.
       Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */

      var Aim = // vertex index in coordinates array
      // vertex coordinates
      // previous and next vertex nodes in a polygon ring
      // z-order curve value
      // public z = null;
      // previous and next nodes in z-order
      // indicates whether this is a steiner point
      function Aim(i, x, y) {
        _classCallCheck(this, Aim);

        this.i = void 0;
        this.x = void 0;
        this.y = void 0;
        this.prev = null;
        this.next = null;
        this.z = 0;
        this.prevZ = null;
        this.nextZ = null;
        this.steiner = false;
        this.i = i;
        this.x = x;
        this.y = y;
      }; // create a circular doubly linked list from polygon points in the specified winding order


      function linkedList(datas, start, end, dim, clockwise) {
        var i = 0;
        var last = null;

        if (clockwise === signedArea(datas, start, end, dim) > 0) {
          for (i = start; i < end; i += dim) {
            last = insertNode(i, datas[i], datas[i + 1], last);
          }
        } else {
          for (i = end - dim; i >= start; i -= dim) {
            last = insertNode(i, datas[i], datas[i + 1], last);
          }
        }

        if (last && equals(last, last.next)) {
          removeNode(last);
          last = last.next;
        }

        return last;
      } // eliminate colinear or duplicate points


      function filterPoints(start) {
        var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (!start) {
          return start;
        }

        if (!end) {
          end = start;
        }

        var p = start;
        var again = false;

        do {
          again = false;

          if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;

            if (p === p.next) {
              return null;
            }

            again = true;
          } else {
            p = p.next;
          }
        } while (again || p !== end);

        return end;
      } // main ear slicing loop which triangulates a polygon (given as a linked list)


      function earcutLinked(ear, triangles, dim, minX, minY, size) {
        var pass = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

        if (!ear) {
          return;
        } // interlink polygon nodes in z-order


        if (!pass && size) {
          indexCurve(ear, minX, minY, size);
        }

        var stop = ear;
        var prev = null;
        var next = null; // iterate through ears, slicing them one by one

        while (ear.prev !== ear.next) {
          prev = ear.prev;
          next = ear.next;

          if (size ? isEarHashed(ear, minX, minY, size) : isEar(ear)) {
            // cut off the triangle
            triangles.push(prev.i / dim);
            triangles.push(ear.i / dim);
            triangles.push(next.i / dim);
            removeNode(ear); // skipping the next vertices leads to less sliver triangles

            ear = next.next;
            stop = next.next;
            continue;
          }

          ear = next; // if we looped through the whole remaining polygon and can't find any more ears

          if (ear === stop) {
            // try filtering points and slicing again
            if (!pass) {
              earcutLinked(filterPoints(ear), triangles, dim, minX, minY, size, 1); // if this didn't work, try curing all small self-intersections locally
            } else if (pass === 1) {
              ear = cureLocalIntersections(ear, triangles, dim);
              earcutLinked(ear, triangles, dim, minX, minY, size, 2); // as a last resort, try splitting the remaining polygon into two
            } else if (pass === 2) {
              splitEarcut(ear, triangles, dim, minX, minY, size);
            }

            break;
          }
        }
      } // check whether a polygon node forms a valid ear with adjacent nodes


      function isEar(ear) {
        var a = ear.prev;
        var b = ear;
        var c = ear.next;

        if (area(a, b, c) >= 0) {
          return false;
        } // reflex, can't be an ear
        // now make sure we don't have other points inside the potential ear


        var p = ear.next.next;

        while (p !== ear.prev) {
          if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) {
            return false;
          }

          p = p.next;
        }

        return true;
      }

      function isEarHashed(ear, minX, minY, size) {
        var a = ear.prev;
        var b = ear;
        var c = ear.next;

        if (area(a, b, c) >= 0) {
          return false;
        } // reflex, can't be an ear
        // triangle bbox; min & max are calculated like this for speed


        var minTX = a.x < b.x ? a.x < c.x ? a.x : c.x : b.x < c.x ? b.x : c.x;
        var minTY = a.y < b.y ? a.y < c.y ? a.y : c.y : b.y < c.y ? b.y : c.y;
        var maxTX = a.x > b.x ? a.x > c.x ? a.x : c.x : b.x > c.x ? b.x : c.x;
        var maxTY = a.y > b.y ? a.y > c.y ? a.y : c.y : b.y > c.y ? b.y : c.y; // z-order range for the current triangle bbox;

        var minZ = zOrder(minTX, minTY, minX, minY, size);
        var maxZ = zOrder(maxTX, maxTY, minX, minY, size); // first look for points inside the triangle in increasing z-order

        var p = ear.nextZ;

        while (p && p.z <= maxZ) {
          if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) {
            return false;
          }

          p = p.nextZ;
        } // then look for points in decreasing z-order


        p = ear.prevZ;

        while (p && p.z >= minZ) {
          if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) {
            return false;
          }

          p = p.prevZ;
        }

        return true;
      } // go through all polygon nodes and cure small local self-intersections


      function cureLocalIntersections(start, triangles, dim) {
        var p = start;

        do {
          var a = p.prev;
          var b = p.next.next;

          if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
            triangles.push(a.i / dim);
            triangles.push(p.i / dim);
            triangles.push(b.i / dim); // remove two nodes involved

            removeNode(p);
            removeNode(p.next);
            p = start = b;
          }

          p = p.next;
        } while (p !== start);

        return p;
      } // try splitting polygon into two and triangulate them independently


      function splitEarcut(start, triangles, dim, minX, minY, size) {
        // look for a valid diagonal that divides the polygon into two
        var a = start;

        do {
          var b = a.next.next;

          while (b !== a.prev) {
            if (a.i !== b.i && isValidDiagonal(a, b)) {
              // split the polygon in two by the diagonal
              var c = splitPolygon(a, b); // filter colinear points around the cuts

              a = filterPoints(a, a.next);
              c = filterPoints(c, c.next); // run earcut on each half

              earcutLinked(a, triangles, dim, minX, minY, size);
              earcutLinked(c, triangles, dim, minX, minY, size);
              return;
            }

            b = b.next;
          }

          a = a.next;
        } while (a !== start);
      } // link every hole into the outer loop, producing a single-ring polygon without holes


      function eliminateHoles(datas, holeIndices, outerNode, dim) {
        var queue = [];
        var i = 0;
        var len = 0;
        var start = 0;
        var end = 0;
        var list = null;

        for (i = 0, len = holeIndices.length; i < len; i++) {
          start = holeIndices[i] * dim;
          end = i < len - 1 ? holeIndices[i + 1] * dim : datas.length;
          list = linkedList(datas, start, end, dim, false);

          if (!list) {
            continue;
          }

          if (list === list.next) {
            list.steiner = true;
          }

          queue.push(getLeftmost(list));
        }

        queue.sort(compareX);

        if (!outerNode) {
          return outerNode;
        } // process holes from left to right


        for (i = 0; i < queue.length; i++) {
          eliminateHole(queue[i], outerNode);
          outerNode = filterPoints(outerNode, outerNode.next);
        }

        return outerNode;
      }

      function compareX(a, b) {
        return a.x - b.x;
      } // find a bridge between vertices that connects hole with an outer ring and and link it


      function eliminateHole(hole, outerNode) {
        outerNode = findHoleBridge(hole, outerNode);

        if (outerNode) {
          var b = splitPolygon(outerNode, hole);
          filterPoints(b, b.next);
        }
      } // David Eberly's algorithm for finding a bridge between hole and outer polygon


      function findHoleBridge(hole, outerNode) {
        var p = outerNode;
        var hx = hole.x;
        var hy = hole.y;
        var qx = -Infinity;
        var m = null; // find a segment intersected by a ray from the hole's leftmost point to the left;
        // segment's endpoint with lesser x will be potential connection point

        do {
          if (hy <= p.y && hy >= p.next.y) {
            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);

            if (x <= hx && x > qx) {
              qx = x;

              if (x === hx) {
                if (hy === p.y) {
                  return p;
                }

                if (hy === p.next.y) {
                  return p.next;
                }
              }

              m = p.x < p.next.x ? p : p.next;
            }
          }

          p = p.next;
        } while (p !== outerNode);

        if (!m) {
          return null;
        }

        if (hx === qx) {
          return m.prev;
        } // hole touches outer segment; pick lower endpoint
        // look for points inside the triangle of hole point, segment intersection and endpoint;
        // if there are no points found, we have a valid connection;
        // otherwise choose the point of the minimum angle with the ray as connection point


        var stop = m;
        var mx = m.x;
        var my = m.y;
        var tanMin = Infinity;
        var tan;
        p = m.next;

        while (p !== stop) {
          if (hx >= p.x && p.x >= mx && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {
            tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

            if ((tan < tanMin || tan === tanMin && p.x > m.x) && locallyInside(p, hole)) {
              m = p;
              tanMin = tan;
            }
          }

          p = p.next;
        }

        return m;
      } // interlink polygon nodes in z-order


      function indexCurve(start, minX, minY, size) {
        var p = start;

        do {
          if (p.z === null) {
            p.z = zOrder(p.x, p.y, minX, minY, size);
          }

          p.prevZ = p.prev;
          p.nextZ = p.next;
          p = p.next;
        } while (p !== start);

        p.prevZ.nextZ = null;
        p.prevZ = null;
        sortLinked(p);
      } // Simon Tatham's linked list merge sort algorithm
      // http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html


      function sortLinked(list) {
        var i = 0;
        var p = null;
        var q = null;
        var e = null;
        var tail = null;
        var numMerges = 0;
        var pSize = 0;
        var qSize = 0;
        var inSize = 1;

        do {
          p = list;
          list = null;
          tail = null;
          numMerges = 0;

          while (p) {
            numMerges++;
            q = p;
            pSize = 0;

            for (i = 0; i < inSize; i++) {
              pSize++;
              q = q.nextZ;

              if (!q) {
                break;
              }
            }

            qSize = inSize;

            while (pSize > 0 || qSize > 0 && q) {
              if (pSize === 0) {
                e = q;
                q = q.nextZ;
                qSize--;
              } else if (qSize === 0 || !q) {
                e = p;
                p = p.nextZ;
                pSize--;
              } else if (p.z <= q.z) {
                e = p;
                p = p.nextZ;
                pSize--;
              } else {
                e = q;
                q = q.nextZ;
                qSize--;
              }

              if (tail) {
                tail.nextZ = e;
              } else {
                list = e;
              }

              e.prevZ = tail;
              tail = e;
            }

            p = q;
          }

          tail.nextZ = null;
          inSize *= 2;
        } while (numMerges > 1);

        return list;
      } // z-order of a point given coords and size of the data bounding box


      function zOrder(x, y, minX, minY, size) {
        // coords are transformed into non-negative 15-bit integer range
        x = 32767 * (x - minX) / size;
        y = 32767 * (y - minY) / size;
        x = (x | x << 8) & 0x00FF00FF;
        x = (x | x << 4) & 0x0F0F0F0F;
        x = (x | x << 2) & 0x33333333;
        x = (x | x << 1) & 0x55555555;
        y = (y | y << 8) & 0x00FF00FF;
        y = (y | y << 4) & 0x0F0F0F0F;
        y = (y | y << 2) & 0x33333333;
        y = (y | y << 1) & 0x55555555;
        return x | y << 1;
      } // find the leftmost node of a polygon ring


      function getLeftmost(start) {
        var p = start;
        var leftmost = start;

        do {
          if (p.x < leftmost.x) {
            leftmost = p;
          }

          p = p.next;
        } while (p !== start);

        return leftmost;
      } // check if a point lies within a convex triangle


      function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
        return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 && (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 && (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
      } // check if a diagonal between two polygon nodes is valid (lies in polygon interior)


      function isValidDiagonal(a, b) {
        return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b);
      } // signed area of a triangle


      function area(p, q, r) {
        return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
      } // check if two points are equal


      function equals(p1, p2) {
        return p1.x === p2.x && p1.y === p2.y;
      } // check if two segments intersect


      function intersects(p1, q1, p2, q2) {
        if (equals(p1, q1) && equals(p2, q2) || equals(p1, q2) && equals(p2, q1)) {
          return true;
        }

        return area(p1, q1, p2) > 0 !== area(p1, q1, q2) > 0 && area(p2, q2, p1) > 0 !== area(p2, q2, q1) > 0;
      } // check if a polygon diagonal intersects any polygon segments


      function intersectsPolygon(a, b) {
        var p = a;

        do {
          if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b)) {
            return true;
          }

          p = p.next;
        } while (p !== a);

        return false;
      } // check if a polygon diagonal is locally inside the polygon


      function locallyInside(a, b) {
        return area(a.prev, a, a.next) < 0 ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
      } // check if the middle point of a polygon diagonal is inside the polygon


      function middleInside(a, b) {
        var p = a;
        var inside = false;
        var px = (a.x + b.x) / 2;
        var py = (a.y + b.y) / 2;

        do {
          if (p.y > py !== p.next.y > py && px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x) {
            inside = !inside;
          }

          p = p.next;
        } while (p !== a);

        return inside;
      } // link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
      // if one belongs to the outer ring and another to a hole, it merges it into a single ring


      function splitPolygon(a, b) {
        var a2 = new Aim(a.i, a.x, a.y);
        var b2 = new Aim(b.i, b.x, b.y);
        var an = a.next;
        var bp = b.prev;
        a.next = b;
        b.prev = a;
        a2.next = an;
        an.prev = a2;
        b2.next = a2;
        a2.prev = b2;
        bp.next = b2;
        b2.prev = bp;
        return b2;
      } // create a node and optionally link it with previous one (in a circular doubly linked list)


      function insertNode(i, x, y, last) {
        var p = new Aim(i, x, y);

        if (!last) {
          p.prev = p;
          p.next = p;
        } else {
          p.next = last.next;
          p.prev = last;
          last.next.prev = p;
          last.next = p;
        }

        return p;
      }

      function removeNode(p) {
        p.next.prev = p.prev;
        p.prev.next = p.next;

        if (p.prevZ) {
          p.prevZ.nextZ = p.nextZ;
        }

        if (p.nextZ) {
          p.nextZ.prevZ = p.prevZ;
        }
      }

      function signedArea(datas, start, end, dim) {
        var sum = 0;

        for (var i = start, j = end - dim; i < end; i += dim) {
          sum += (datas[j] - datas[i]) * (datas[i + 1] + datas[j + 1]);
          j = i;
        }

        return sum;
      }

      function earcut(datas, holeIndices, dim) {
        dim = dim || 3;
        var hasHoles = holeIndices ? holeIndices.length : 0;
        var outerLen = hasHoles ? holeIndices[0] * dim : datas.length;
        var outerNode = linkedList(datas, 0, outerLen, dim, true);
        var triangles = [];

        if (!outerNode) {
          return triangles;
        }

        var minX = 0;
        var minY = 0;
        var maxX = 0;
        var maxY = 0;
        var x = 0;
        var y = 0;
        var size = 0;

        if (hasHoles) {
          outerNode = eliminateHoles(datas, holeIndices, outerNode, dim);
        } // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox


        if (datas.length > 80 * dim) {
          minX = maxX = datas[0];
          minY = maxY = datas[1];

          for (var i = dim; i < outerLen; i += dim) {
            x = datas[i];
            y = datas[i + 1];

            if (x < minX) {
              minX = x;
            }

            if (y < minY) {
              minY = y;
            }

            if (x > maxX) {
              maxX = x;
            }

            if (y > maxY) {
              maxY = y;
            }
          } // minX, minY and size are later used to transform coords into integers for z-order calculation


          size = Math.max(maxX - minX, maxY - minY);
        }

        earcutLinked(outerNode, triangles, dim, minX, minY, size);
        return triangles;
      } // // return a percentage difference between the polygon area and its triangulation area;
      // // used to verify correctness of triangulation
      // earcut.deviation = function (data, holeIndices, dim, triangles) {
      //     const hasHoles = holeIndices && holeIndices.length;
      //     const outerLen = hasHoles ? holeIndices[0] * dim : data.length;
      //     let polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
      //     if (hasHoles) {
      //         for (let i = 0, len = holeIndices.length; i < len; i++) {
      //             const start = holeIndices[i] * dim;
      //             const end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
      //             polygonArea -= Math.abs(signedArea(data, start, end, dim));
      //         }
      //     }
      //     let trianglesArea = 0;
      //     for (i = 0; i < triangles.length; i += 3) {
      //         const a = triangles[i] * dim;
      //         const b = triangles[i + 1] * dim;
      //         const c = triangles[i + 2] * dim;
      //         trianglesArea += Math.abs(
      //             (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
      //             (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
      //     }
      //     return polygonArea === 0 && trianglesArea === 0 ? 0 :
      //         Math.abs((trianglesArea - polygonArea) / polygonArea);
      // };
      // // turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
      // earcut.flatten = function (data) {
      //     let dim = data[0][0].length,
      //         result = {vertices: [], holes: [], dimensions: dim},
      //         holeIndex = 0;
      //     for (let i = 0; i < data.length; i++) {
      //         for (let j = 0; j < data[i].length; j++) {
      //             for (let d = 0; d < dim; d++) { result.vertices.push(data[i][j][d]); }
      //         }
      //         if (i > 0) {
      //             holeIndex += data[i - 1].length;
      //             result.holes.push(holeIndex);
      //         }
      //     }
      //     return result;
      // };

      /*
       Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

       http://www.cocos.com

       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated engine source code (the "Software"), a limited,
       worldwide, royalty-free, non-assignable, revocable and non-exclusive license
       to use Cocos Creator solely to develop games on your target platforms. You shall
       not use Cocos Creator software for developing other software or tools that's
       used for developing games. You are not granted to publish, distribute,
       sublicense, and/or sell copies of Cocos Creator.

       The software or tools in this License Agreement are licensed, not sold.
       Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */
      var PI = Math.PI;
      var min = Math.min;
      var max = Math.max;
      var cos = Math.cos;
      var sin = Math.sin;
      var abs = Math.abs;
      var sign = Math.sign;
      var KAPPA90 = 0.5522847493;
      function arc(ctx, cx, cy, r, startAngle, endAngle, counterclockwise) {
        counterclockwise = counterclockwise || false;
        var a = 0;
        var da = 0;
        var hda = 0;
        var kappa = 0;
        var dx = 0;
        var dy = 0;
        var x = 0;
        var y = 0;
        var tanx = 0;
        var tany = 0;
        var px = 0;
        var py = 0;
        var ptanx = 0;
        var ptany = 0;
        var i = 0;
        var ndivs = 0; // Clamp angles

        da = endAngle - startAngle;

        if (counterclockwise) {
          if (abs(da) >= PI * 2) {
            da = PI * 2;
          } else {
            while (da < 0) {
              da += PI * 2;
            }
          }
        } else {
          if (abs(da) >= PI * 2) {
            da = -PI * 2;
          } else {
            while (da > 0) {
              da -= PI * 2;
            }
          }
        } // Split arc into max 90 degree segments.


        ndivs = max(1, min(abs(da) / (PI * 0.5) + 0.5, 5)) | 0;
        hda = da / ndivs / 2.0;
        kappa = abs(4.0 / 3.0 * (1 - cos(hda)) / sin(hda));

        if (!counterclockwise) {
          kappa = -kappa;
        }

        for (i = 0; i <= ndivs; i++) {
          a = startAngle + da * (i / ndivs);
          dx = cos(a);
          dy = sin(a);
          x = cx + dx * r;
          y = cy + dy * r;
          tanx = -dy * r * kappa;
          tany = dx * r * kappa;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.bezierCurveTo(px + ptanx, py + ptany, x - tanx, y - tany, x, y);
          }

          px = x;
          py = y;
          ptanx = tanx;
          ptany = tany;
        }
      }
      function ellipse(ctx, cx, cy, rx, ry) {
        ctx.moveTo(cx - rx, cy);
        ctx.bezierCurveTo(cx - rx, cy + ry * KAPPA90, cx - rx * KAPPA90, cy + ry, cx, cy + ry);
        ctx.bezierCurveTo(cx + rx * KAPPA90, cy + ry, cx + rx, cy + ry * KAPPA90, cx + rx, cy);
        ctx.bezierCurveTo(cx + rx, cy - ry * KAPPA90, cx + rx * KAPPA90, cy - ry, cx, cy - ry);
        ctx.bezierCurveTo(cx - rx * KAPPA90, cy - ry, cx - rx, cy - ry * KAPPA90, cx - rx, cy);
        ctx.close();
      }
      function roundRect(ctx, x, y, w, h, r) {
        if (r < 0.1) {
          ctx.rect(x, y, w, h);
          return;
        } else {
          var rx = min(r, abs(w) * 0.5) * sign(w);
          var ry = min(r, abs(h) * 0.5) * sign(h);
          ctx.moveTo(x, y + ry);
          ctx.lineTo(x, y + h - ry);
          ctx.bezierCurveTo(x, y + h - ry * (1 - KAPPA90), x + rx * (1 - KAPPA90), y + h, x + rx, y + h);
          ctx.lineTo(x + w - rx, y + h);
          ctx.bezierCurveTo(x + w - rx * (1 - KAPPA90), y + h, x + w, y + h - ry * (1 - KAPPA90), x + w, y + h - ry);
          ctx.lineTo(x + w, y + ry);
          ctx.bezierCurveTo(x + w, y + ry * (1 - KAPPA90), x + w - rx * (1 - KAPPA90), y, x + w - rx, y);
          ctx.lineTo(x + rx, y);
          ctx.bezierCurveTo(x + rx * (1 - KAPPA90), y, x, y + ry * (1 - KAPPA90), x, y + ry);
          ctx.close();
        }
      }
      function tesselateBezier(ctx, x1, y1, x2, y2, x3, y3, x4, y4, level, type) {
        var x12 = 0;
        var y12 = 0;
        var x23 = 0;
        var y23 = 0;
        var x34 = 0;
        var y34 = 0;
        var x123 = 0;
        var y123 = 0;
        var x234 = 0;
        var y234 = 0;
        var x1234 = 0;
        var y1234 = 0;
        var dx = 0;
        var dy = 0;
        var d2 = 0;
        var d3 = 0;

        if (level > 10) {
          return;
        }

        x12 = (x1 + x2) * 0.5;
        y12 = (y1 + y2) * 0.5;
        x23 = (x2 + x3) * 0.5;
        y23 = (y2 + y3) * 0.5;
        x34 = (x3 + x4) * 0.5;
        y34 = (y3 + y4) * 0.5;
        x123 = (x12 + x23) * 0.5;
        y123 = (y12 + y23) * 0.5;
        dx = x4 - x1;
        dy = y4 - y1;
        d2 = abs((x2 - x4) * dy - (y2 - y4) * dx);
        d3 = abs((x3 - x4) * dy - (y3 - y4) * dx);

        if ((d2 + d3) * (d2 + d3) < ctx.tessTol * (dx * dx + dy * dy)) {
          ctx.addPoint(x4, y4, type === 0 ? type | PointFlags.PT_BEVEL : type);
          return;
        }

        x234 = (x23 + x34) * 0.5;
        y234 = (y23 + y34) * 0.5;
        x1234 = (x123 + x234) * 0.5;
        y1234 = (y123 + y234) * 0.5;
        tesselateBezier(ctx, x1, y1, x12, y12, x123, y123, x1234, y1234, level + 1, 0);
        tesselateBezier(ctx, x1234, y1234, x234, y234, x34, y34, x4, y4, level + 1, type);
      }

      var Point = /*#__PURE__*/function (_Vec) {
        _inherits(Point, _Vec);

        function Point(x, y) {
          var _this;

          _classCallCheck(this, Point);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Point).call(this, x, y));
          _this.dx = 0;
          _this.dy = 0;
          _this.dmx = 0;
          _this.dmy = 0;
          _this.flags = 0;
          _this.len = 0;

          _this.reset();

          return _this;
        }

        _createClass(Point, [{
          key: "reset",
          value: function reset() {
            this.dx = 0;
            this.dy = 0;
            this.dmx = 0;
            this.dmy = 0;
            this.flags = 0;
            this.len = 0;
          }
        }]);

        return Point;
      }(Vec2);
      var Path = /*#__PURE__*/function () {
        function Path() {
          _classCallCheck(this, Path);

          this.closed = false;
          this.bevel = 0;
          this.complex = true;
          this.points = [];
          this.reset();
        }

        _createClass(Path, [{
          key: "reset",
          value: function reset() {
            this.closed = false;
            this.bevel = 0;
            this.complex = true;

            if (this.points) {
              this.points.length = 0;
            } else {
              this.points = [];
            }
          }
        }]);

        return Path;
      }();
      var Impl = /*#__PURE__*/function () {
        function Impl() {
          _classCallCheck(this, Impl);

          this.dataOffset = 0;
          this.updatePathOffset = false;
          this.pathLength = 0;
          this.pathOffset = 0;
          this.paths = [];
          this.tessTol = 0.25;
          this.distTol = 0.01;
          this.fillColor = Color.WHITE.clone();
          this.lineCap = LineCap.BUTT;
          this.strokeColor = Color.BLACK.clone();
          this.lineJoin = LineJoin.MITER;
          this.lineWidth = 0;
          this.pointsOffset = 0;
          this._commandX = 0;
          this._commandY = 0;
          this._points = [];
          this._renderDataPool = new RecyclePool(function () {
            return new MeshRenderData();
          }, 16);
          this._renderDataList = [];
          this._curPath = null;
        }

        _createClass(Impl, [{
          key: "moveTo",
          value: function moveTo(x, y) {
            if (this.updatePathOffset) {
              this.pathOffset = this.pathLength;
              this.updatePathOffset = false;
            }

            this._addPath();

            this.addPoint(x, y, PointFlags.PT_CORNER);
            this._commandX = x;
            this._commandY = y;
          }
        }, {
          key: "lineTo",
          value: function lineTo(x, y) {
            this.addPoint(x, y, PointFlags.PT_CORNER);
            this._commandX = x;
            this._commandY = y;
          }
        }, {
          key: "bezierCurveTo",
          value: function bezierCurveTo(c1x, c1y, c2x, c2y, x, y) {
            var path = this._curPath;
            var last = path.points[path.points.length - 1];

            if (!last) {
              return;
            }

            if (last.x === c1x && last.y === c1y && c2x === x && c2y === y) {
              this.lineTo(x, y);
              return;
            }

            tesselateBezier(this, last.x, last.y, c1x, c1y, c2x, c2y, x, y, 0, PointFlags.PT_CORNER);
            this._commandX = x;
            this._commandY = y;
          }
        }, {
          key: "quadraticCurveTo",
          value: function quadraticCurveTo(cx, cy, x, y) {
            var x0 = this._commandX;
            var y0 = this._commandY;
            this.bezierCurveTo(x0 + 2.0 / 3.0 * (cx - x0), y0 + 2.0 / 3.0 * (cy - y0), x + 2.0 / 3.0 * (cx - x), y + 2.0 / 3.0 * (cy - y), x, y);
          }
        }, {
          key: "arc",
          value: function arc$1(cx, cy, r, startAngle, endAngle, counterclockwise) {
            arc(this, cx, cy, r, startAngle, endAngle, counterclockwise);
          }
        }, {
          key: "ellipse",
          value: function ellipse$1(cx, cy, rx, ry) {
            ellipse(this, cx, cy, rx, ry);

            this._curPath.complex = false;
          }
        }, {
          key: "circle",
          value: function circle(cx, cy, r) {
            ellipse(this, cx, cy, r, r);

            this._curPath.complex = false;
          }
        }, {
          key: "rect",
          value: function rect(x, y, w, h) {
            this.moveTo(x, y);
            this.lineTo(x + w, y);
            this.lineTo(x + w, y + h);
            this.lineTo(x, y + h);
            this.close();
            this._curPath.complex = false;
          }
        }, {
          key: "roundRect",
          value: function roundRect$1(x, y, w, h, r) {
            roundRect(this, x, y, w, h, r);

            this._curPath.complex = false;
          }
        }, {
          key: "clear",
          value: function clear() {
            var clean = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.pathLength = 0;
            this.pathOffset = 0;
            this.pointsOffset = 0;
            this.dataOffset = 0;
            this._curPath = null;
            this.paths.length = 0;
            this._points.length = 0;
            var dataList = this._renderDataList;

            for (var i = 0, l = dataList.length; i < l; i++) {
              var data = dataList[i];

              if (!data) {
                continue;
              }

              data.reset();
            }

            this._renderDataList.length = 0;

            if (clean) {
              this._renderDataPool.reset();
            }
          }
        }, {
          key: "close",
          value: function close() {
            this._curPath.closed = true;
          }
        }, {
          key: "requestRenderData",
          value: function requestRenderData() {
            var renderData = this._renderDataPool.add();

            this._renderDataList.push(renderData);

            return renderData;
          }
        }, {
          key: "getRenderData",
          value: function getRenderData() {
            if (this._renderDataList.length === 0) {
              this.requestRenderData();
            }

            return this._renderDataList;
          }
        }, {
          key: "addPoint",
          value: function addPoint(x, y, flags) {
            var path = this._curPath;

            if (!path) {
              return;
            }

            var points = this._points;
            var pathPoints = path.points;
            var offset = this.pointsOffset++;
            var pt = points[offset];

            if (!pt) {
              pt = new Point(x, y);
              points.push(pt);
            } else {
              pt.x = x;
              pt.y = y;
            }

            pt.flags = flags;
            pathPoints.push(pt);
          }
        }, {
          key: "_addPath",
          value: function _addPath() {
            var offset = this.pathLength;
            var path = this.paths[offset];

            if (!path) {
              path = new Path();
              this.paths.push(path);
            } else {
              path.reset();
            }

            this.pathLength++;
            this._curPath = path;
            return path;
          }
        }]);

        return Impl;
      }();

      var MAX_VERTEX = 65535;
      var MAX_INDICES = MAX_VERTEX * 2;
      var PI$1 = Math.PI;
      var min$1 = Math.min;
      var max$1 = Math.max;
      var ceil = Math.ceil;
      var acos = Math.acos;
      var cos$1 = Math.cos;
      var sin$1 = Math.sin;
      var atan2 = Math.atan2;
      var attrBytes = 8;
      var attrs = [{
        name: GFXAttributeName.ATTR_POSITION,
        format: GFXFormat.RGB32F
      }, {
        name: GFXAttributeName.ATTR_COLOR,
        format: GFXFormat.RGBA32F
      }];
      var customAttributes = {
        dist: {
          name: 'a_dist',
          format: GFXFormat.R32F
        }
      };
      var positions = [];
      var colors = [];
      var indices = [];
      var dists = [];
      var _renderData = null;
      var _impl = null;

      var _curColor = new Color();

      var vec3_temps = [];

      for (var i = 0; i < 4; i++) {
        vec3_temps.push(new Vec3());
      }

      function curveDivs(r, arc, tol) {
        var da = acos(r / (r + tol)) * 2.0;
        return max$1(2, ceil(arc / da));
      }

      function clamp(v, minNum, maxNum) {
        if (v < minNum) {
          return minNum;
        } else if (v > maxNum) {
          return maxNum;
        }

        return v;
      }
      /**
       * graphics 组装器
       * 可通过 `UI.graphicsAssembler` 获取该组装器。
       */


      var graphicsAssembler = {
        useModel: true,
        createImpl: function createImpl(graphics) {
          return new Impl();
        },
        updateRenderData: function updateRenderData(graphics) {
          var dataList = graphics.impl ? graphics.impl.getRenderData() : [];

          for (var _i = 0, l = dataList.length; _i < l; _i++) {
            dataList[_i].material = graphics.getUIMaterialInstance();
          }
        },
        fillBuffers: function fillBuffers(graphics, renderer) {// this.renderIA!(graphics, renderer);
        },
        renderIA: function renderIA(graphics, renderer) {},
        getRenderData: function getRenderData(graphics, vertexCount) {
          if (!_impl) {
            return null;
          }

          var renderDataList = _impl.getRenderData();

          var renderData = renderDataList[_impl.dataOffset];

          if (!renderData) {
            return null;
          }

          var meshBuffer = renderData;
          var maxVertexCount = meshBuffer ? meshBuffer.vertexCount + vertexCount : 0;

          if (maxVertexCount > MAX_VERTEX || maxVertexCount * 3 > MAX_INDICES) {
            ++_impl.dataOffset; // maxVertexCount = vertexCount;

            if (_impl.dataOffset < renderDataList.length) {
              renderData = renderDataList[_impl.dataOffset];
            } else {
              renderData = _impl.requestRenderData();
              renderDataList[_impl.dataOffset] = renderData;
            }

            renderData.material = graphics.getUIMaterialInstance();
            meshBuffer = renderData;
          }

          if (meshBuffer && meshBuffer.vertexCount < maxVertexCount) {
            meshBuffer.request(vertexCount, vertexCount * 3);
          }

          return renderData;
        },
        stroke: function stroke(graphics) {
          Color.copy(_curColor, graphics.strokeColor); // graphics.node.getWorldMatrix(_currMatrix);

          if (!graphics.impl) {
            return;
          }

          this._flattenPaths(graphics.impl);

          this._expandStroke(graphics);

          graphics.impl.updatePathOffset = true;
          this.end(graphics);
        },
        fill: function fill(graphics) {
          Color.copy(_curColor, graphics.fillColor); // graphics.node.getWorldMatrix(_currMatrix);

          this._expandFill(graphics);

          if (graphics.impl) {
            graphics.impl.updatePathOffset = true;
          }

          this.end(graphics);
        },
        end: function end(graphics) {
          if (graphics.model && graphics.model.inited) {
            graphics.model.destroy();
          }

          var impl = graphics.impl;
          var primitiveMode = GFXPrimitiveMode.TRIANGLE_LIST;
          var renderDataList = impl && impl.getRenderData();

          if (!renderDataList) {
            return;
          }

          var i = 0;
          positions.length = 0;
          dists.length = 0;
          colors.length = 0;
          indices.length = 0;

          for (var _iterator = _createForOfIteratorHelperLoose(renderDataList), _step; !(_step = _iterator()).done;) {
            var renderData = _step.value;
            var len = renderData.byteCount >> 2;
            var vData = renderData.vData;

            for (i = 0; i < len;) {
              positions.push(vData[i++]);
              positions.push(vData[i++]);
              positions.push(vData[i++]);
              colors.push(vData[i++]);
              colors.push(vData[i++]);
              colors.push(vData[i++]);
              colors.push(vData[i++]);
              dists.push(vData[i++]);
            }

            len = renderData.indicesCount;
            var iData = renderData.iData;

            for (i = 0; i < len;) {
              indices.push(iData[i++]);
            }
          }

          if (positions.length === 0 && dists.length === 0 && colors.length === 0 || indices.length === 0) return;
          var mesh = createMesh({
            primitiveMode: primitiveMode,
            positions: positions,
            colors: colors,
            attributes: attrs,
            customAttributes: [{
              attr: customAttributes.dist,
              values: dists
            }],
            indices: indices
          }, undefined, {
            calculateBounds: false
          });
          graphics.model.initialize(graphics.node);
          graphics.model.initSubModel(0, mesh.renderingSubMeshes[0], graphics.getUIMaterialInstance());
          graphics.markForUpdateRenderData();
        },
        _expandStroke: function _expandStroke(graphics) {
          var w = graphics.lineWidth * 0.5;
          var lineCap = graphics.lineCap;
          var lineJoin = graphics.lineJoin;
          var miterLimit = graphics.miterLimit;
          _impl = graphics.impl;

          if (!_impl) {
            return;
          }

          var nCap = curveDivs(w, PI$1, _impl.tessTol);

          this._calculateJoins(_impl, w, lineJoin, miterLimit);

          var paths = _impl.paths; // Calculate max vertex usage.

          var vertexCount = 0;

          for (var _i2 = _impl.pathOffset, l = _impl.pathLength; _i2 < l; _i2++) {
            var path = paths[_i2];
            var pointsLength = path.points.length;

            if (lineJoin === LineJoin.ROUND) {
              vertexCount += (pointsLength + path.bevel * (nCap + 2) + 1) * 2;
            } // plus one for loop
            else {
                vertexCount += (pointsLength + path.bevel * 5 + 1) * 2;
              } // plus one for loop


            if (!path.closed) {
              // space for caps
              if (lineCap === LineCap.ROUND) {
                vertexCount += (nCap * 2 + 2) * 2;
              } else {
                vertexCount += (3 + 3) * 2;
              }
            }
          }

          var meshBuffer = _renderData = this.getRenderData(graphics, vertexCount);

          if (!meshBuffer) {
            return;
          }

          var vData = meshBuffer.vData;
          var iData = meshBuffer.iData;

          for (var _i3 = _impl.pathOffset, _l = _impl.pathLength; _i3 < _l; _i3++) {
            var _path = paths[_i3];
            var pts = _path.points;
            var _pointsLength = pts.length;
            var offset = meshBuffer.vertexStart;
            var p0 = void 0;
            var p1 = void 0;
            var start = 0;
            var end = 0;
            var loop = _path.closed;

            if (loop) {
              // Looping
              p0 = pts[_pointsLength - 1];
              p1 = pts[0];
              start = 0;
              end = _pointsLength;
            } else {
              // Add cap
              p0 = pts[0];
              p1 = pts[1];
              start = 1;
              end = _pointsLength - 1;
            }

            if (!loop) {
              // Add cap
              var dPos = new Point(p1.x, p1.y);
              dPos.subtract(p0);
              dPos.normalize();
              var dx = dPos.x;
              var dy = dPos.y;

              if (lineCap === LineCap.BUTT) {
                this._buttCapStart(p0, dx, dy, w, 0);
              } else if (lineCap === LineCap.SQUARE) {
                this._buttCapStart(p0, dx, dy, w, w);
              } else if (lineCap === LineCap.ROUND) {
                this._roundCapStart(p0, dx, dy, w, nCap);
              }
            }

            for (var j = start; j < end; ++j) {
              if (lineJoin === LineJoin.ROUND) {
                this._roundJoin(p0, p1, w, w, nCap);
              } else if ((p1.flags & (PointFlags.PT_BEVEL | PointFlags.PT_INNERBEVEL)) !== 0) {
                this._bevelJoin(p0, p1, w, w);
              } else {
                this._vSet(p1.x + p1.dmx * w, p1.y + p1.dmy * w, 1);

                this._vSet(p1.x - p1.dmx * w, p1.y - p1.dmy * w, -1);
              }

              p0 = p1;
              p1 = pts[j + 1];
            }

            if (loop) {
              // Loop it
              var vDataOffset = offset * attrBytes;

              this._vSet(vData[vDataOffset], vData[vDataOffset + 1], 1);

              this._vSet(vData[vDataOffset + attrBytes], vData[vDataOffset + attrBytes + 1], -1);
            } else {
              // Add cap
              var _dPos = new Point(p1.x, p1.y);

              _dPos.subtract(p0);

              _dPos.normalize();

              var _dx = _dPos.x;
              var _dy = _dPos.y;

              if (lineCap === LineCap.BUTT) {
                this._buttCapEnd(p1, _dx, _dy, w, 0);
              } else if (lineCap === LineCap.SQUARE) {
                this._buttCapEnd(p1, _dx, _dy, w, w);
              } else if (lineCap === LineCap.ROUND) {
                this._roundCapEnd(p1, _dx, _dy, w, nCap);
              }
            } // stroke indices


            var indicesOffset = meshBuffer.indicesStart;

            for (var begin = offset + 2, over = meshBuffer.vertexStart; begin < over; begin++) {
              iData[indicesOffset++] = begin - 2;
              iData[indicesOffset++] = begin - 1;
              iData[indicesOffset++] = begin;
            }

            meshBuffer.indicesStart = indicesOffset;

            if (indicesOffset !== meshBuffer.indicesCount) {
              var arr = new Array(meshBuffer.indicesCount - indicesOffset);
              meshBuffer.iData.set(arr, indicesOffset);
            }
          }

          _renderData = null;
          _impl = null;
        },
        _expandFill: function _expandFill(graphics) {
          _impl = graphics.impl;

          if (!_impl) {
            return;
          }

          var paths = _impl.paths; // Calculate max vertex usage.

          var vertexCount = 0;

          for (var _i4 = _impl.pathOffset, l = _impl.pathLength; _i4 < l; _i4++) {
            var path = paths[_i4];
            var pointsLength = path.points.length;
            vertexCount += pointsLength;
          }

          var renderData = _renderData = this.getRenderData(graphics, vertexCount);

          if (!renderData) {
            return;
          }

          var meshBuffer = renderData;
          var vData = meshBuffer.vData;
          var iData = meshBuffer.iData;

          for (var _i5 = _impl.pathOffset, _l2 = _impl.pathLength; _i5 < _l2; _i5++) {
            var _path2 = paths[_i5];
            var pts = _path2.points;
            var _pointsLength2 = pts.length;

            if (_pointsLength2 === 0) {
              continue;
            } // Calculate shape vertices.


            var vertexOffset = renderData.vertexStart;

            for (var j = 0; j < _pointsLength2; ++j) {
              this._vSet(pts[j].x, pts[j].y);
            }

            var indicesOffset = renderData.indicesStart;

            if (_path2.complex) {
              var earcutData = [];

              for (var _j = vertexOffset, end = renderData.vertexStart; _j < end; _j++) {
                var vDataOffset = _j * attrBytes;
                earcutData.push(vData[vDataOffset++]);
                earcutData.push(vData[vDataOffset++]);
                earcutData.push(vData[vDataOffset++]);
              }

              var newIndices = earcut(earcutData, null, 3);

              if (!newIndices || newIndices.length === 0) {
                continue;
              }

              for (var _j2 = 0, nIndices = newIndices.length; _j2 < nIndices; _j2++) {
                iData[indicesOffset++] = newIndices[_j2] + vertexOffset;
              }
            } else {
              var first = vertexOffset;

              for (var start = vertexOffset + 2, _end = meshBuffer.vertexStart; start < _end; start++) {
                iData[indicesOffset++] = first;
                iData[indicesOffset++] = start - 1;
                iData[indicesOffset++] = start;
              }
            }

            meshBuffer.indicesStart = indicesOffset;

            if (indicesOffset !== meshBuffer.indicesCount) {
              var arr = new Array(meshBuffer.indicesCount - indicesOffset);
              meshBuffer.iData.set(arr, indicesOffset);
            }
          }

          _renderData = null;
          _impl = null;
        },
        _calculateJoins: function _calculateJoins(impl, w, lineJoin, miterLimit) {
          var iw = 0.0;

          if (w > 0.0) {
            iw = 1 / w;
          } // Calculate which joins needs extra vertices to append, and gather vertex count.


          var paths = impl.paths;

          for (var _i6 = impl.pathOffset, l = impl.pathLength; _i6 < l; _i6++) {
            var path = paths[_i6];
            var pts = path.points;
            var ptsLength = pts.length;
            var p0 = pts[ptsLength - 1];
            var p1 = pts[0];
            path.bevel = 0;

            for (var j = 0; j < ptsLength; j++) {
              var dmr2 = 0;
              var cross = 0;
              var limit = 0; // perp normals

              var dlx0 = p0.dy;
              var dly0 = -p0.dx;
              var dlx1 = p1.dy;
              var dly1 = -p1.dx; // Calculate extrusions

              p1.dmx = (dlx0 + dlx1) * 0.5;
              p1.dmy = (dly0 + dly1) * 0.5;
              dmr2 = p1.dmx * p1.dmx + p1.dmy * p1.dmy;

              if (dmr2 > 0.000001) {
                var scale = 1 / dmr2;

                if (scale > 600) {
                  scale = 600;
                }

                p1.dmx *= scale;
                p1.dmy *= scale;
              } // Keep track of left turns.


              cross = p1.dx * p0.dy - p0.dx * p1.dy;

              if (cross > 0) {
                p1.flags |= PointFlags.PT_LEFT;
              } // Calculate if we should use bevel or miter for inner join.


              limit = max$1(11, min$1(p0.len, p1.len) * iw);

              if (dmr2 * limit * limit < 1) {
                p1.flags |= PointFlags.PT_INNERBEVEL;
              } // Check to see if the corner needs to be beveled.


              if (p1.flags & PointFlags.PT_CORNER) {
                if (dmr2 * miterLimit * miterLimit < 1 || lineJoin === LineJoin.BEVEL || lineJoin === LineJoin.ROUND) {
                  p1.flags |= PointFlags.PT_BEVEL;
                }
              }

              if ((p1.flags & (PointFlags.PT_BEVEL | PointFlags.PT_INNERBEVEL)) !== 0) {
                path.bevel++;
              }

              p0 = p1;
              p1 = pts[j + 1];
            }
          }
        },
        _flattenPaths: function _flattenPaths(impl) {
          var paths = impl.paths;

          for (var _i7 = impl.pathOffset, l = impl.pathLength; _i7 < l; _i7++) {
            var path = paths[_i7];
            var pts = path.points;
            var p0 = pts[pts.length - 1];
            var p1 = pts[0];

            if (p0.equals(p1)) {
              path.closed = true;
              pts.pop();
              p0 = pts[pts.length - 1];
            }

            for (var j = 0, size = pts.length; j < size; j++) {
              // Calculate segment direction and length
              var dPos = new Point(p1.x, p1.y);
              dPos.subtract(p0);
              p0.len = dPos.length();

              if (dPos.x || dPos.y) {
                dPos.normalize();
              }

              p0.dx = dPos.x;
              p0.dy = dPos.y; // Advance

              p0 = p1;
              p1 = pts[j + 1];
            }
          }
        },
        _chooseBevel: function _chooseBevel(bevel, p0, p1, w) {
          var x = p1.x;
          var y = p1.y;
          var x0 = 0;
          var y0 = 0;
          var x1 = 0;
          var y1 = 0;

          if (bevel !== 0) {
            x0 = x + p0.dy * w;
            y0 = y - p0.dx * w;
            x1 = x + p1.dy * w;
            y1 = y - p1.dx * w;
          } else {
            x0 = x1 = x + p1.dmx * w;
            y0 = y1 = y + p1.dmy * w;
          }

          return [x0, y0, x1, y1];
        },
        _buttCapStart: function _buttCapStart(p, dx, dy, w, d) {
          var px = p.x - dx * d;
          var py = p.y - dy * d;
          var dlx = dy;
          var dly = -dx;

          this._vSet(px + dlx * w, py + dly * w, 1);

          this._vSet(px - dlx * w, py - dly * w, -1);
        },
        _buttCapEnd: function _buttCapEnd(p, dx, dy, w, d) {
          var px = p.x + dx * d;
          var py = p.y + dy * d;
          var dlx = dy;
          var dly = -dx;

          this._vSet(px + dlx * w, py + dly * w, 1);

          this._vSet(px - dlx * w, py - dly * w, -1);
        },
        _roundCapStart: function _roundCapStart(p, dx, dy, w, nCap) {
          var px = p.x;
          var py = p.y;
          var dlx = dy;
          var dly = -dx;

          for (var _i8 = 0; _i8 < nCap; _i8++) {
            var a = _i8 / (nCap - 1) * PI$1;
            var ax = cos$1(a) * w;
            var ay = sin$1(a) * w;

            this._vSet(px - dlx * ax - dx * ay, py - dly * ax - dy * ay, 1);

            this._vSet(px, py, 0);
          }

          this._vSet(px + dlx * w, py + dly * w, 1);

          this._vSet(px - dlx * w, py - dly * w, -1);
        },
        _roundCapEnd: function _roundCapEnd(p, dx, dy, w, nCap) {
          var px = p.x;
          var py = p.y;
          var dlx = dy;
          var dly = -dx;

          this._vSet(px + dlx * w, py + dly * w, 1);

          this._vSet(px - dlx * w, py - dly * w, -1);

          for (var _i9 = 0; _i9 < nCap; _i9++) {
            var a = _i9 / (nCap - 1) * PI$1;
            var ax = cos$1(a) * w;
            var ay = sin$1(a) * w;

            this._vSet(px, py, 0);

            this._vSet(px - dlx * ax + dx * ay, py - dly * ax + dy * ay, 1);
          }
        },
        _roundJoin: function _roundJoin(p0, p1, lw, rw, nCap) {
          var dlx0 = p0.dy;
          var dly0 = -p0.dx;
          var dlx1 = p1.dy;
          var dly1 = -p1.dx;
          var p1x = p1.x;
          var p1y = p1.y;

          if ((p1.flags & PointFlags.PT_LEFT) !== 0) {
            var out = this._chooseBevel(p1.flags & PointFlags.PT_INNERBEVEL, p0, p1, lw);

            var lx0 = out[0];
            var ly0 = out[1];
            var lx1 = out[2];
            var ly1 = out[3];
            var a0 = atan2(-dly0, -dlx0);
            var a1 = atan2(-dly1, -dlx1);

            if (a1 > a0) {
              a1 -= PI$1 * 2;
            }

            this._vSet(lx0, ly0, 1);

            this._vSet(p1x - dlx0 * rw, p1.y - dly0 * rw, -1);

            var n = clamp(ceil((a0 - a1) / PI$1) * nCap, 2, nCap);

            for (var _i10 = 0; _i10 < n; _i10++) {
              var u = _i10 / (n - 1);
              var a = a0 + u * (a1 - a0);
              var rx = p1x + cos$1(a) * rw;
              var ry = p1y + sin$1(a) * rw;

              this._vSet(p1x, p1y, 0);

              this._vSet(rx, ry, -1);
            }

            this._vSet(lx1, ly1, 1);

            this._vSet(p1x - dlx1 * rw, p1y - dly1 * rw, -1);
          } else {
            var _out = this._chooseBevel(p1.flags & PointFlags.PT_INNERBEVEL, p0, p1, -rw);

            var rx0 = _out[0];
            var ry0 = _out[1];
            var rx1 = _out[2];
            var ry1 = _out[3];

            var _a = atan2(dly0, dlx0);

            var _a2 = atan2(dly1, dlx1);

            if (_a2 < _a) {
              _a2 += PI$1 * 2;
            }

            this._vSet(p1x + dlx0 * rw, p1y + dly0 * rw, 1);

            this._vSet(rx0, ry0, -1);

            var _n = clamp(ceil((_a2 - _a) / PI$1) * nCap, 2, nCap);

            for (var _i11 = 0; _i11 < _n; _i11++) {
              var _u = _i11 / (_n - 1);

              var _a3 = _a + _u * (_a2 - _a);

              var lx = p1x + cos$1(_a3) * lw;
              var ly = p1y + sin$1(_a3) * lw;

              this._vSet(lx, ly, 1);

              this._vSet(p1x, p1y, 0);
            }

            this._vSet(p1x + dlx1 * rw, p1y + dly1 * rw, 1);

            this._vSet(rx1, ry1, -1);
          }
        },
        _bevelJoin: function _bevelJoin(p0, p1, lw, rw) {
          var rx0 = 0;
          var ry0 = 0;
          var rx1 = 0;
          var ry1 = 0;
          var lx0 = 0;
          var ly0 = 0;
          var lx1 = 0;
          var ly1 = 0;
          var dlx0 = p0.dy;
          var dly0 = -p0.dx;
          var dlx1 = p1.dy;
          var dly1 = -p1.dx;

          if (p1.flags & PointFlags.PT_LEFT) {
            var out = this._chooseBevel(p1.flags & PointFlags.PT_INNERBEVEL, p0, p1, lw);

            lx0 = out[0];
            ly0 = out[1];
            lx1 = out[2];
            ly1 = out[3];

            this._vSet(lx0, ly0, 1);

            this._vSet(p1.x - dlx0 * rw, p1.y - dly0 * rw, -1);

            this._vSet(lx1, ly1, 1);

            this._vSet(p1.x - dlx1 * rw, p1.y - dly1 * rw, -1);
          } else {
            var _out2 = this._chooseBevel(p1.flags & PointFlags.PT_INNERBEVEL, p0, p1, -rw);

            rx0 = _out2[0];
            ry0 = _out2[1];
            rx1 = _out2[2];
            ry1 = _out2[3];

            this._vSet(p1.x + dlx0 * lw, p1.y + dly0 * lw, 1);

            this._vSet(rx0, ry0, -1);

            this._vSet(p1.x + dlx1 * lw, p1.y + dly1 * lw, 1);

            this._vSet(rx1, ry1, -1);
          }
        },
        _vSet: function _vSet(x, y) {
          var distance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          if (!_renderData) {
            return;
          }

          var meshBuffer = _renderData;
          var dataOffset = meshBuffer.vertexStart * attrBytes;
          var vData = meshBuffer.vData; // vec3.set(_tempVec3, x, y, 0);
          // vec3.transformMat4(_tempVec3, _tempVec3, _currMatrix);

          vData[dataOffset++] = x;
          vData[dataOffset++] = y;
          vData[dataOffset++] = 0;
          Color.toArray(vData, _curColor, dataOffset);
          dataOffset += 4;
          vData[dataOffset++] = distance;
          meshBuffer.vertexStart++;
        }
      };

      /*
       Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

       http://www.cocos.com

       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated engine source code (the "Software"), a limited,
       worldwide, royalty-free, non-assignable, revocable and non-exclusive license
       to use Cocos Creator solely to develop games on your target platforms. You shall
       not use Cocos Creator software for developing other software or tools that's
       used for developing games. You are not granted to publish, distribute,
       sublicense, and/or sell copies of Cocos Creator.

       The software or tools in this License Agreement are licensed, not sold.
       Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */
      var graphicsAssemblerManager = exports('graphicsAssembler', {
        getAssembler: function getAssembler(sprite) {
          return graphicsAssembler;
        }
      });
      Graphics.Assembler = graphicsAssemblerManager;

      var FontLetterDefinition = function FontLetterDefinition() {
        _classCallCheck(this, FontLetterDefinition);

        this.u = 0;
        this.v = 0;
        this.width = 0;
        this.height = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.textureID = 0;
        this.validDefinition = false;
        this.xAdvance = 0;
      };

      var FontAtlas = /*#__PURE__*/function () {
        function FontAtlas() {
          _classCallCheck(this, FontAtlas);

          this._letterDefinitions = {};
        }

        _createClass(FontAtlas, [{
          key: "addLetterDefinitions",
          value: function addLetterDefinitions(letter, letterDefinition) {
            this._letterDefinitions[letter] = letterDefinition;
          }
        }, {
          key: "cloneLetterDefinition",
          value: function cloneLetterDefinition() {
            var copyLetterDefinitions = {};

            for (var _i = 0, _Object$keys = Object.keys(this._letterDefinitions); _i < _Object$keys.length; _i++) {
              var _key = _Object$keys[_i];
              var value = new FontLetterDefinition();
              mixin(value, this._letterDefinitions[_key]);
              copyLetterDefinitions[_key] = value;
            }

            return copyLetterDefinitions;
          }
        }, {
          key: "assignLetterDefinitions",
          value: function assignLetterDefinitions(letterDefinition) {
            for (var _i2 = 0, _Object$keys2 = Object.keys(this._letterDefinitions); _i2 < _Object$keys2.length; _i2++) {
              var _key2 = _Object$keys2[_i2];
              var newValue = letterDefinition[_key2];
              var oldValue = this._letterDefinitions[_key2];
              mixin(oldValue, newValue);
            }
          }
        }, {
          key: "scaleFontLetterDefinition",
          value: function scaleFontLetterDefinition(scaleFactor) {
            for (var _i3 = 0, _Object$keys3 = Object.keys(this._letterDefinitions); _i3 < _Object$keys3.length; _i3++) {
              var fontDefinition = _Object$keys3[_i3];
              var letterDefinitions = this._letterDefinitions[fontDefinition];
              letterDefinitions.width *= scaleFactor;
              letterDefinitions.height *= scaleFactor;
              letterDefinitions.offsetX *= scaleFactor;
              letterDefinitions.offsetY *= scaleFactor;
              letterDefinitions.xAdvance *= scaleFactor;
            }
          }
        }, {
          key: "getLetterDefinitionForChar",
          value: function getLetterDefinitionForChar(_char) {
            return this._letterDefinitions[_char.charCodeAt(0)];
          }
        }, {
          key: "letterDefinitions",
          get: function get() {
            return this._letterDefinitions;
          }
        }]);

        return FontAtlas;
      }();
      legacyCC.FontAtlas = FontAtlas;

      var LetterInfo = function LetterInfo() {
        _classCallCheck(this, LetterInfo);

        this["char"] = '';
        this.valid = true;
        this.positionX = 0;
        this.positionY = 0;
        this.lineIndex = 0;
      };

      var _tmpRect = new Rect();

      var _comp = null;
      var _uiTrans = null;
      var _horizontalKerning = [];
      var _lettersInfo = [];
      var _linesWidth = [];
      var _linesOffsetX = [];

      var _labelDimensions = new Size();

      var _fontAtlas = null;
      var _fntConfig = null;
      var _numberOfLines = 0;
      var _textDesiredHeight = 0;
      var _letterOffsetY = 0;
      var _tailoredTopY = 0;
      var _tailoredBottomY = 0;
      var _bmfontScale = 1.0;
      var _spriteFrame = null;
      var _lineSpacing = 0;
      var _string = '';
      var _fontSize = 0;
      var _originFontSize = 0;

      var _contentSize = new Size();

      var _hAlign = 0;
      var _vAlign = 0;
      var _spacingX = 0;
      var _lineHeight = 0;
      var _overflow = 0;
      var _isWrapText = false;
      var _labelWidth = 0;
      var _labelHeight = 0;
      var _maxLineWidth = 0;
      var bmfontUtils = {
        updateRenderData: function updateRenderData(comp) {
          if (!comp.renderData || !comp.renderData.vertDirty) {
            return;
          }

          if (_comp === comp) {
            return;
          }

          _comp = comp;
          _uiTrans = _comp.node._uiProps.uiTransformComp;

          this._updateProperties();

          this._updateContent();

          _comp.actualFontSize = _fontSize;

          _uiTrans.setContentSize(_contentSize);

          _comp.renderData.vertDirty = _comp.renderData.uvDirty = false;
          _comp = null;

          this._resetProperties();
        },
        _updateFontScale: function _updateFontScale() {
          _bmfontScale = _fontSize / _originFontSize;
        },
        _updateProperties: function _updateProperties() {
          if (!_comp) {
            return;
          }

          var fontAsset = _comp.font;

          if (!fontAsset) {
            return;
          }

          _spriteFrame = fontAsset.spriteFrame;
          _fntConfig = fontAsset.fntConfig;
          _fontAtlas = _comp.fontAtlas;

          if (!_fontAtlas) {
            _fontAtlas = new FontAtlas();
            var fontDict = _fntConfig.fontDefDictionary;

            for (var _i4 = 0, _Object$keys4 = Object.keys(fontDict); _i4 < _Object$keys4.length; _i4++) {
              var fontDef = _Object$keys4[_i4];
              var letterDefinition = new FontLetterDefinition();
              var rect = fontDict[fontDef].rect;
              letterDefinition.offsetX = fontDict[fontDef].xOffset;
              letterDefinition.offsetY = fontDict[fontDef].yOffset;
              letterDefinition.width = rect.width;
              letterDefinition.height = rect.height;
              letterDefinition.u = rect.x;
              letterDefinition.v = rect.y; // FIXME: only one texture supported for now

              letterDefinition.textureID = 0;
              letterDefinition.validDefinition = true;
              letterDefinition.xAdvance = fontDict[fontDef].xAdvance;

              _fontAtlas.addLetterDefinitions(fontDef, letterDefinition);
            }

            _comp.fontAtlas = _fontAtlas;
          }

          _string = _comp.string.toString();
          _fontSize = _comp.fontSize;
          _originFontSize = _fntConfig.fontSize;
          var contentSize = _uiTrans.contentSize;
          _contentSize.width = contentSize.width;
          _contentSize.height = contentSize.height;
          _hAlign = _comp.horizontalAlign;
          _vAlign = _comp.verticalAlign;
          _spacingX = _comp.spacingX;
          _overflow = _comp.overflow;
          _lineHeight = _comp.lineHeight; // should wrap text

          if (_overflow === Overflow.NONE) {
            _isWrapText = false;
          } else if (_overflow === Overflow.RESIZE_HEIGHT) {
            _isWrapText = true;
          } else {
            _isWrapText = _comp.enableWrapText;
          }

          this._setupBMFontOverflowMetrics();
        },
        _resetProperties: function _resetProperties() {
          _fontAtlas = null;
          _fntConfig = null;
          _spriteFrame = null;
        },
        _updateContent: function _updateContent() {
          this._updateFontScale();

          this._computeHorizontalKerningForText();

          this._alignText();
        },
        _computeHorizontalKerningForText: function _computeHorizontalKerningForText() {
          var string = _string;
          var stringLen = string.length;
          var kerningDict = _fntConfig.kerningDict;
          var horizontalKerning = _horizontalKerning;
          var prev = -1;

          for (var i = 0; i < stringLen; ++i) {
            var _key3 = string.charCodeAt(i);

            var kerningAmount = kerningDict[prev << 16 | _key3 & 0xffff] || 0;

            if (i < stringLen - 1) {
              horizontalKerning[i] = kerningAmount;
            } else {
              horizontalKerning[i] = 0;
            }

            prev = _key3;
          }
        },
        _multilineTextWrap: function _multilineTextWrap(nextTokenFunc) {
          var textLen = _string.length;
          var lineIndex = 0;
          var nextTokenX = 0;
          var nextTokenY = 0;
          var longestLine = 0;
          var letterRight = 0;
          var highestY = 0;
          var lowestY = 0;
          var letterDef = null;
          var letterPosition = new Vec2();

          this._updateFontScale();

          var letterDefinitions = _fontAtlas.letterDefinitions;

          for (var index = 0; index < textLen;) {
            var character = _string.charAt(index);

            if (character === '\n') {
              _linesWidth.push(letterRight);

              letterRight = 0;
              lineIndex++;
              nextTokenX = 0;
              nextTokenY -= _lineHeight * _bmfontScale + _lineSpacing;

              this._recordPlaceholderInfo(index, character);

              index++;
              continue;
            }

            var tokenLen = nextTokenFunc(_string, index, textLen);
            var tokenHighestY = highestY;
            var tokenLowestY = lowestY;
            var tokenRight = letterRight;
            var nextLetterX = nextTokenX;
            var newLine = false;

            for (var tmp = 0; tmp < tokenLen; ++tmp) {
              var letterIndex = index + tmp;
              character = _string.charAt(letterIndex);

              if (character === '\r') {
                this._recordPlaceholderInfo(letterIndex, character);

                continue;
              }

              letterDef = _fontAtlas && _fontAtlas.getLetterDefinitionForChar(character);

              if (!letterDef) {
                this._recordPlaceholderInfo(letterIndex, character);

                console.log('Can\'t find letter definition in texture atlas ' + _fntConfig.atlasName + ' for letter:' + character);
                continue;
              }

              var letterX = nextLetterX + letterDef.offsetX * _bmfontScale;

              if (_isWrapText && _maxLineWidth > 0 && nextTokenX > 0 && letterX + letterDef.width * _bmfontScale > _maxLineWidth && !isUnicodeSpace(character)) {
                _linesWidth.push(letterRight);

                letterRight = 0;
                lineIndex++;
                nextTokenX = 0;
                nextTokenY -= _lineHeight * _bmfontScale + _lineSpacing;
                newLine = true;
                break;
              } else {
                letterPosition.x = letterX;
              }

              letterPosition.y = nextTokenY - letterDef.offsetY * _bmfontScale;

              this._recordLetterInfo(letterDefinitions, letterPosition, character, letterIndex, lineIndex);

              if (letterIndex + 1 < _horizontalKerning.length && letterIndex < textLen - 1) {
                nextLetterX += _horizontalKerning[letterIndex + 1];
              }

              nextLetterX += letterDef.xAdvance * _bmfontScale + _spacingX;
              tokenRight = letterPosition.x + letterDef.width * _bmfontScale;

              if (tokenHighestY < letterPosition.y) {
                tokenHighestY = letterPosition.y;
              }

              if (tokenLowestY > letterPosition.y - letterDef.height * _bmfontScale) {
                tokenLowestY = letterPosition.y - letterDef.height * _bmfontScale;
              }
            } // end of for loop


            if (newLine) {
              continue;
            }

            nextTokenX = nextLetterX;
            letterRight = tokenRight;

            if (highestY < tokenHighestY) {
              highestY = tokenHighestY;
            }

            if (lowestY > tokenLowestY) {
              lowestY = tokenLowestY;
            }

            if (longestLine < letterRight) {
              longestLine = letterRight;
            }

            index += tokenLen;
          } // end of for loop


          _linesWidth.push(letterRight);

          _numberOfLines = lineIndex + 1;
          _textDesiredHeight = _numberOfLines * _lineHeight * _bmfontScale;

          if (_numberOfLines > 1) {
            _textDesiredHeight += (_numberOfLines - 1) * _lineSpacing;
          }

          _contentSize.width = _labelWidth;
          _contentSize.height = _labelHeight;

          if (_labelWidth <= 0) {
            _contentSize.width = parseFloat(longestLine.toFixed(2));
          }

          if (_labelHeight <= 0) {
            _contentSize.height = parseFloat(_textDesiredHeight.toFixed(2));
          }

          _tailoredTopY = _contentSize.height;
          _tailoredBottomY = 0;

          if (highestY > 0) {
            _tailoredTopY = _contentSize.height + highestY;
          }

          if (lowestY < -_textDesiredHeight) {
            _tailoredBottomY = _textDesiredHeight + lowestY;
          }

          return true;
        },
        _getFirstCharLen: function _getFirstCharLen() {
          return 1;
        },
        _getFirstWordLen: function _getFirstWordLen(text, startIndex, textLen) {
          var character = text.charAt(startIndex);

          if (isUnicodeCJK(character) || character === '\n' || isUnicodeSpace(character)) {
            return 1;
          }

          var len = 1;

          var letterDef = _fontAtlas && _fontAtlas.getLetterDefinitionForChar(character);

          if (!letterDef) {
            return len;
          }

          var nextLetterX = letterDef.xAdvance * _bmfontScale + _spacingX;
          var letterX = 0;

          for (var index = startIndex + 1; index < textLen; ++index) {
            character = text.charAt(index);
            letterDef = _fontAtlas && _fontAtlas.getLetterDefinitionForChar(character);

            if (!letterDef) {
              break;
            }

            letterX = nextLetterX + letterDef.offsetX * _bmfontScale;

            if (letterX + letterDef.width * _bmfontScale > _maxLineWidth && !isUnicodeSpace(character) && _maxLineWidth > 0) {
              return len;
            }

            nextLetterX += letterDef.xAdvance * _bmfontScale + _spacingX;

            if (character === '\n' || isUnicodeSpace(character) || isUnicodeCJK(character)) {
              break;
            }

            len++;
          }

          return len;
        },
        _multilineTextWrapByWord: function _multilineTextWrapByWord() {
          return this._multilineTextWrap(this._getFirstWordLen);
        },
        _multilineTextWrapByChar: function _multilineTextWrapByChar() {
          return this._multilineTextWrap(this._getFirstCharLen);
        },
        _recordPlaceholderInfo: function _recordPlaceholderInfo(letterIndex, _char2) {
          if (letterIndex >= _lettersInfo.length) {
            var tmpInfo = new LetterInfo();

            _lettersInfo.push(tmpInfo);
          }

          _lettersInfo[letterIndex]["char"] = _char2;
          _lettersInfo[letterIndex].valid = false;
        },
        _recordLetterInfo: function _recordLetterInfo(letterDefinitions, letterPosition, character, letterIndex, lineIndex) {
          if (letterIndex >= _lettersInfo.length) {
            var tmpInfo = new LetterInfo();

            _lettersInfo.push(tmpInfo);
          }

          var cIndex = character.charCodeAt(0);
          _lettersInfo[letterIndex].lineIndex = lineIndex;
          _lettersInfo[letterIndex]["char"] = character;
          _lettersInfo[letterIndex].valid = letterDefinitions[cIndex].validDefinition;
          _lettersInfo[letterIndex].positionX = letterPosition.x;
          _lettersInfo[letterIndex].positionY = letterPosition.y;
        },
        _alignText: function _alignText() {
          _textDesiredHeight = 0;
          _linesWidth.length = 0;

          {
            this._multilineTextWrapByWord();
          }

          this._computeAlignmentOffset(); // shrink


          if (_overflow === Overflow.SHRINK) {
            if (_fontSize > 0 && this._isVerticalClamp()) {
              this._shrinkLabelToContentSize(this._isVerticalClamp);
            }
          }

          if (!this._updateQuads()) {
            if (_overflow === Overflow.SHRINK) {
              this._shrinkLabelToContentSize(this._isHorizontalClamp);
            }
          }
        },
        _scaleFontSizeDown: function _scaleFontSizeDown(fontSize) {
          var shouldUpdateContent = true;

          if (!fontSize) {
            fontSize = 0.1;
            shouldUpdateContent = false;
          }

          _fontSize = fontSize;

          if (shouldUpdateContent) {
            this._updateContent();
          }
        },
        _shrinkLabelToContentSize: function _shrinkLabelToContentSize(lambda) {
          var fontSize = _fontSize;
          var originalLineHeight = _lineHeight;
          var fontAtlas = _fontAtlas;
          var i = 0;
          var tempLetterDefinition = fontAtlas ? fontAtlas.cloneLetterDefinition() : {};
          var flag = true;

          while (lambda()) {
            ++i;
            var newFontSize = fontSize - i;
            flag = false;

            if (newFontSize <= 0) {
              break;
            }

            var scale = newFontSize / fontSize;

            if (fontAtlas) {
              fontAtlas.assignLetterDefinitions(tempLetterDefinition);
              fontAtlas.scaleFontLetterDefinition(scale);
            }

            _lineHeight = originalLineHeight * scale;

            {
              this._multilineTextWrapByWord();
            }

            this._computeAlignmentOffset();
          }

          _lineHeight = originalLineHeight;

          if (fontAtlas) {
            fontAtlas.assignLetterDefinitions(tempLetterDefinition);
          }

          if (!flag) {
            if (fontSize - i >= 0) {
              this._scaleFontSizeDown(fontSize - i);
            }
          }
        },
        _isVerticalClamp: function _isVerticalClamp() {
          if (_textDesiredHeight > _contentSize.height) {
            return true;
          } else {
            return false;
          }
        },
        _isHorizontalClamp: function _isHorizontalClamp() {
          if (!_fontAtlas) {
            return;
          }

          var letterClamp = false;

          for (var ctr = 0, l = _string.length; ctr < l; ++ctr) {
            var letterInfo = _lettersInfo[ctr];

            if (letterInfo.valid) {
              var letterDef = _fontAtlas.getLetterDefinitionForChar(letterInfo["char"]);

              if (!letterDef) {
                continue;
              }

              var px = letterInfo.positionX + letterDef.width / 2 * _bmfontScale;
              var lineIndex = letterInfo.lineIndex;

              if (_labelWidth > 0) {
                if (!_isWrapText) {
                  if (px > _contentSize.width) {
                    letterClamp = true;
                    break;
                  }
                } else {
                  var wordWidth = _linesWidth[lineIndex];

                  if (wordWidth > _contentSize.width && (px > _contentSize.width || px < 0)) {
                    letterClamp = true;
                    break;
                  }
                }
              }
            }
          }

          return letterClamp;
        },
        _isHorizontalClamped: function _isHorizontalClamped(px, lineIndex) {
          var wordWidth = _linesWidth[lineIndex];
          var letterOverClamp = px > _contentSize.width || px < 0;

          if (!_isWrapText) {
            return letterOverClamp;
          } else {
            return wordWidth > _contentSize.width && letterOverClamp;
          }
        },
        _updateQuads: function _updateQuads() {
          if (!_comp) {
            return false;
          }

          var letterDefinitions = _fontAtlas ? _fontAtlas.letterDefinitions : {};
          var texture = _spriteFrame;
          var renderData = _comp.renderData;
          renderData.dataLength = renderData.vertexCount = renderData.indicesCount = 0;
          var anchorPoint = _uiTrans.anchorPoint;
          var contentSize = _contentSize;
          var appX = anchorPoint.x * contentSize.width;
          var appY = anchorPoint.y * contentSize.height;
          var ret = true;

          for (var ctr = 0, l = _string.length; ctr < l; ++ctr) {
            var letterInfo = _lettersInfo[ctr];

            if (!letterInfo.valid) {
              continue;
            }

            var letterDef = letterDefinitions[letterInfo["char"].charCodeAt(0)];

            if (!letterDef) {
              console.warn('Can\'t find letter in this bitmap-font');
              continue;
            }

            _tmpRect.height = letterDef.height;
            _tmpRect.width = letterDef.width;
            _tmpRect.x = letterDef.u;
            _tmpRect.y = letterDef.v;
            var py = letterInfo.positionY + _letterOffsetY;

            if (_labelHeight > 0) {
              if (py > _tailoredTopY) {
                var clipTop = py - _tailoredTopY;
                _tmpRect.y += clipTop;
                _tmpRect.height -= clipTop;
                py = py - clipTop;
              }

              if (py - letterDef.height * _bmfontScale < _tailoredBottomY) {
                _tmpRect.height = py < _tailoredBottomY ? 0 : py - _tailoredBottomY;
              }
            }

            var lineIndex = letterInfo.lineIndex;
            var px = letterInfo.positionX + letterDef.width / 2 * _bmfontScale + _linesOffsetX[lineIndex];

            if (_labelWidth > 0) {
              if (this._isHorizontalClamped(px, lineIndex)) {
                if (_overflow === Overflow.CLAMP) {
                  _tmpRect.width = 0;
                } else if (_overflow === Overflow.SHRINK) {
                  if (_contentSize.width > letterDef.width) {
                    ret = false;
                    break;
                  } else {
                    _tmpRect.width = 0;
                  }
                }
              }
            }

            if (_spriteFrame && _tmpRect.height > 0 && _tmpRect.width > 0) {
              var isRotated = _spriteFrame.isRotated();

              var originalSize = _spriteFrame.getOriginalSize();

              var rect = _spriteFrame.getRect();

              var offset = _spriteFrame.getOffset();

              var trimmedLeft = offset.x + (originalSize.width - rect.width) / 2;
              var trimmedTop = offset.y - (originalSize.height - rect.height) / 2;

              if (!isRotated) {
                _tmpRect.x += rect.x - trimmedLeft;
                _tmpRect.y += rect.y + trimmedTop;
              } else {
                var originalX = _tmpRect.x;
                _tmpRect.x = rect.x + rect.height - _tmpRect.y - _tmpRect.height - trimmedTop;
                _tmpRect.y = originalX + rect.y - trimmedLeft;

                if (_tmpRect.y < 0) {
                  _tmpRect.height = _tmpRect.height + trimmedTop;
                }
              }

              var letterPositionX = letterInfo.positionX + _linesOffsetX[letterInfo.lineIndex];
              this.appendQuad(_comp, texture, _tmpRect, isRotated, letterPositionX - appX, py - appY, _bmfontScale);
            }
          }

          return ret;
        },
        appendQuad: function appendQuad(comp, texture, rect, rotated, x, y, scale) {},
        _computeAlignmentOffset: function _computeAlignmentOffset() {
          _linesOffsetX.length = 0;

          switch (_hAlign) {
            case HorizontalTextAlignment.LEFT:
              for (var i = 0; i < _numberOfLines; ++i) {
                _linesOffsetX.push(0);
              }

              break;

            case HorizontalTextAlignment.CENTER:
              for (var _i5 = 0, l = _linesWidth.length; _i5 < l; _i5++) {
                _linesOffsetX.push((_contentSize.width - _linesWidth[_i5]) / 2);
              }

              break;

            case HorizontalTextAlignment.RIGHT:
              for (var _i6 = 0, _l = _linesWidth.length; _i6 < _l; _i6++) {
                _linesOffsetX.push(_contentSize.width - _linesWidth[_i6]);
              }

              break;
          }

          switch (_vAlign) {
            case VerticalTextAlignment.TOP:
              _letterOffsetY = _contentSize.height;
              break;

            case VerticalTextAlignment.CENTER:
              _letterOffsetY = (_contentSize.height + _textDesiredHeight) / 2;
              break;

            case VerticalTextAlignment.BOTTOM:
              _letterOffsetY = _textDesiredHeight;
              break;
          }
        },
        _setupBMFontOverflowMetrics: function _setupBMFontOverflowMetrics() {
          var newWidth = _contentSize.width;
          var newHeight = _contentSize.height;

          if (_overflow === Overflow.RESIZE_HEIGHT) {
            newHeight = 0;
          }

          if (_overflow === Overflow.NONE) {
            newWidth = 0;
            newHeight = 0;
          }

          _labelWidth = newWidth;
          _labelHeight = newHeight;
          _labelDimensions.width = newWidth;
          _labelDimensions.height = newHeight;
          _maxLineWidth = newWidth;
        }
      };

      /*
       Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

       http://www.cocos.com

       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated engine source code (the "Software"), a limited,
       worldwide, royalty-free, non-assignable, revocable and non-exclusive license
       to use Cocos Creator solely to develop games on your target platforms. You shall
       not use Cocos Creator software for developing other software or tools that's
       used for developing games. You are not granted to publish, distribute,
       sublicense, and/or sell copies of Cocos Creator.

       The software or tools in this License Agreement are licensed, not sold.
       Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */
      /**
       * bmfont 组装器
       * 可通过 `UI.bmfont` 获取该组装器。
       */

      var bmfont = {
        createData: function createData(comp) {
          return comp.requestRenderData();
        },
        fillBuffers: function fillBuffers(comp, renderer) {
          var node = comp.node;
          fillMeshVertices3D(node, renderer, comp.renderData, comp.color);
        },
        appendQuad: function appendQuad(comp, spriteFrame, rect, rotated, x, y, scale) {
          var renderData = comp.renderData;

          if (!renderData) {
            return;
          }

          var dataOffset = renderData.dataLength;
          renderData.dataLength += 4;
          renderData.vertexCount = renderData.dataLength;
          renderData.indicesCount = renderData.dataLength / 2 * 3;
          var dataList = renderData.data;
          var texW = spriteFrame.width;
          var texH = spriteFrame.height;
          var rectWidth = rect.width;
          var rectHeight = rect.height;
          var l = 0;
          var b = 0;
          var t = 0;
          var r = 0;

          if (!rotated) {
            l = rect.x / texW;
            r = (rect.x + rectWidth) / texW;
            b = (rect.y + rectHeight) / texH;
            t = rect.y / texH;
            dataList[dataOffset].u = l;
            dataList[dataOffset].v = b;
            dataList[dataOffset + 1].u = r;
            dataList[dataOffset + 1].v = b;
            dataList[dataOffset + 2].u = l;
            dataList[dataOffset + 2].v = t;
            dataList[dataOffset + 3].u = r;
            dataList[dataOffset + 3].v = t;
          } else {
            l = rect.x / texW;
            r = (rect.x + rectHeight) / texW;
            b = (rect.y + rectWidth) / texH;
            t = rect.y / texH;
            dataList[dataOffset].u = l;
            dataList[dataOffset].v = t;
            dataList[dataOffset + 1].u = l;
            dataList[dataOffset + 1].v = b;
            dataList[dataOffset + 2].u = r;
            dataList[dataOffset + 2].v = t;
            dataList[dataOffset + 3].u = r;
            dataList[dataOffset + 3].v = b;
          }

          dataList[dataOffset].x = x;
          dataList[dataOffset].y = y - rectHeight * scale;
          dataList[dataOffset + 1].x = x + rectWidth * scale;
          dataList[dataOffset + 1].y = y - rectHeight * scale;
          dataList[dataOffset + 2].x = x;
          dataList[dataOffset + 2].y = y;
          dataList[dataOffset + 3].x = x + rectWidth * scale;
          dataList[dataOffset + 3].y = y;
        }
      };
      addon(bmfont, bmfontUtils);

      // const OUTLINE_SUPPORTED = cc.js.isChildClassOf(LabelOutline, UIComponent);
      var Overflow$1 = Label.Overflow;
      var WHITE = Color.WHITE.clone();
      var space = 2;
      var TextAlignment = Label.HorizontalAlign;
      var VerticalTextAlignment$1 = Label.VerticalAlign;

      var LetterInfo$1 = function LetterInfo() {
        _classCallCheck(this, LetterInfo);

        this["char"] = '';
        this.valid = true;
        this.x = 0;
        this.y = 0;
        this.line = 0;
        this.hash = '';
      };

      var FontLetterDefinition$1 = function FontLetterDefinition() {
        _classCallCheck(this, FontLetterDefinition);

        this.u = 0;
        this.v = 0;
        this.w = 0;
        this.h = 0;
        this.texture = null;
        this.offsetX = 0;
        this.offsetY = 0;
        this.valid = false;
        this.xAdvance = 0;
      };

      var _backgroundStyle = 'rgba(255, 255, 255, 0.005)';

      var LetterTexture = /*#__PURE__*/function () {
        function LetterTexture(_char, labelInfo) {
          _classCallCheck(this, LetterTexture);

          this.image = null;
          this.labelInfo = void 0;
          this["char"] = void 0;
          this.data = null;
          this.canvas = null;
          this.context = null;
          this.width = 0;
          this.height = 0;
          this.hash = void 0;
          this["char"] = _char;
          this.labelInfo = labelInfo;
          this.hash = _char.charCodeAt(0) + labelInfo.hash;
        }

        _createClass(LetterTexture, [{
          key: "updateRenderData",
          value: function updateRenderData() {
            this._updateProperties();

            this._updateTexture();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.image = null; // Label._canvasPool.put(this._data);
          }
        }, {
          key: "_updateProperties",
          value: function _updateProperties() {
            this.data = Label._canvasPool.get();
            this.canvas = this.data.canvas;
            this.context = this.data.context;

            if (this.context) {
              this.context.font = this.labelInfo.fontDesc;
              var width = safeMeasureText(this.context, this["char"]);
              this.width = parseFloat(width.toFixed(2));
              this.height = this.labelInfo.fontSize;
            }

            if (this.canvas.width !== this.width) {
              this.canvas.width = this.width;
            }

            if (this.canvas.height !== this.height) {
              this.canvas.height = this.height;
            }

            if (!this.image) {
              this.image = new ImageAsset();
            }

            this.image.reset(this.canvas);
          }
        }, {
          key: "_updateTexture",
          value: function _updateTexture() {
            if (!this.context || !this.canvas) {
              return;
            }

            var context = this.context;
            var labelInfo = this.labelInfo;
            var width = this.canvas.width;
            var height = this.canvas.height;
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.clearRect(0, 0, width, height); // Add a white background to avoid black edges.

            context.fillStyle = _backgroundStyle;
            context.fillRect(0, 0, width, height);
            context.font = labelInfo.fontDesc;
            var startX = width / 2;
            var startY = height / 2;
            var color = labelInfo.color; // use round for line join to avoid sharp intersect point

            context.lineJoin = 'round';
            context.fillStyle = "rgba(".concat(color.r, ", ").concat(color.g, ", ").concat(color.b, ", ", 1, ")");

            if (labelInfo.isOutlined) {
              var strokeColor = labelInfo.out || WHITE;
              context.strokeStyle = "rgba(".concat(strokeColor.r, ", ").concat(strokeColor.g, ", ").concat(strokeColor.b, ", ").concat(strokeColor.a / 255, ")");
              context.lineWidth = labelInfo.margin * 2;
              context.strokeText(this["char"], startX, startY);
            }

            context.fillText(this["char"], startX, startY); // this.texture.handleLoadedTexture();
            // (this.image as Texture2D).updateImage();
          }
        }]);

        return LetterTexture;
      }();

      var LetterRenderTexture = /*#__PURE__*/function (_Texture2D) {
        _inherits(LetterRenderTexture, _Texture2D);

        function LetterRenderTexture() {
          _classCallCheck(this, LetterRenderTexture);

          return _possibleConstructorReturn(this, _getPrototypeOf(LetterRenderTexture).apply(this, arguments));
        }

        _createClass(LetterRenderTexture, [{
          key: "initWithSize",

          /**
           * @en
           * Init the render texture with size.
           * @zh
           * 初始化 render texture。
           * @param [width]
           * @param [height]
           * @param [string]
           */
          value: function initWithSize(width, height) {
            var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PixelFormat.RGBA8888;
            this.reset({
              width: width,
              height: height,
              format: format
            });
            this.loaded = true;
            this.emit('load');
          }
          /**
           * @en Draw a texture to the specified position
           * @zh 将指定的图片渲染到指定的位置上。
           * @param {Texture2D} image
           * @param {Number} x
           * @param {Number} y
           */

        }, {
          key: "drawTextureAt",
          value: function drawTextureAt(image, x, y) {
            var gfxTexture = this.getGFXTexture();

            if (!image || !gfxTexture) {
              return;
            }

            var gfxDevice = this._getGFXDevice();

            if (!gfxDevice) {
              console.warn('Unable to get device');
              return;
            }

            var region = {
              buffStride: 0,
              buffTexHeight: 0,
              texOffset: {
                x: x,
                y: y,
                z: 0
              },
              texExtent: {
                width: image.width,
                height: image.height,
                depth: 1
              },
              texSubres: {
                mipLevel: 0,
                baseArrayLayer: 0,
                layerCount: 1
              }
            };
            gfxDevice.copyTexImagesToTexture([image.data], gfxTexture, [region]);
          }
        }]);

        return LetterRenderTexture;
      }(Texture2D);
      var LetterAtlas = /*#__PURE__*/function () {
        _createClass(LetterAtlas, [{
          key: "width",
          get: function get() {
            return this._width;
          }
        }, {
          key: "height",
          get: function get() {
            return this._height;
          }
        }]);

        function LetterAtlas(width, height) {
          _classCallCheck(this, LetterAtlas);

          this.texture = void 0;
          this._x = space;
          this._y = space;
          this._nextY = space;
          this._width = 0;
          this._height = 0;
          this._letterDefinitions = new Map();
          this._dirty = false;
          this.texture = new LetterRenderTexture();
          this.texture.initWithSize(width, height);
          this._width = width;
          this._height = height;
          director.on(Director.EVENT_BEFORE_SCENE_LAUNCH, this.beforeSceneLoad, this);
        }

        _createClass(LetterAtlas, [{
          key: "insertLetterTexture",
          value: function insertLetterTexture(letterTexture) {
            var texture = letterTexture.image;
            var device = director.root.device;

            if (!texture || !this.texture || !device) {
              return null;
            }

            var width = texture.width;
            var height = texture.height;

            if (this._x + width + space > this._width) {
              this._x = space;
              this._y = this._nextY;
            }

            if (this._y + height > this._nextY) {
              this._nextY = this._y + height + space;
            }

            if (this._nextY > this._height) {
              return null;
            }

            this.texture.drawTextureAt(texture, this._x, this._y);
            this._dirty = true;
            var letterDefinition = new FontLetterDefinition$1();
            letterDefinition.u = this._x;
            letterDefinition.v = this._y;
            letterDefinition.texture = this.texture;
            letterDefinition.valid = true;
            letterDefinition.w = letterTexture.width;
            letterDefinition.h = letterTexture.height;
            letterDefinition.xAdvance = letterTexture.width;
            this._x += width + space;

            this._letterDefinitions.set(letterTexture.hash, letterDefinition);
            /*
            const region = new GFXBufferTextureCopy();
            region.texOffset.x = letterDefinition.offsetX;
            region.texOffset.y = letterDefinition.offsetY;
            region.texExtent.width = letterDefinition.w;
            region.texExtent.height = letterDefinition.h;
            */


            return letterDefinition;
          }
        }, {
          key: "update",
          value: function update() {
            if (!this._dirty) {
              return;
            } // this.texture.update();


            this._dirty = false;
          }
        }, {
          key: "reset",
          value: function reset() {
            this._x = space;
            this._y = space;
            this._nextY = space; // const chars = this._letterDefinitions;
            // for (let i = 0, l = (Object.keys(chars)).length; i < l; i++) {
            //     const char = chars[i];
            //     if (!char.valid) {
            //         continue;
            //     }
            //     char.destroy();
            // }
            // this._letterDefinitions = createMap();

            this._letterDefinitions.clear();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.reset();

            if (this.texture) {
              this.texture.destroy();
            }
          }
        }, {
          key: "beforeSceneLoad",
          value: function beforeSceneLoad() {
            this.destroy();
            var texture = new LetterRenderTexture();
            texture.initWithSize(this._width, this._height); // texture.update();

            this.texture = texture;
          }
        }, {
          key: "getLetter",
          value: function getLetter(key) {
            return this._letterDefinitions.get(key);
          }
        }, {
          key: "addLetterDefinitions",
          value: function addLetterDefinitions(key, letterDefinition) {
            this._letterDefinitions[key] = letterDefinition;
          }
        }, {
          key: "cloneLetterDefinition",
          value: function cloneLetterDefinition() {
            var copyLetterDefinitions = {};

            for (var _i = 0, _Object$keys = Object.keys(this._letterDefinitions); _i < _Object$keys.length; _i++) {
              var key = _Object$keys[_i];
              var value = new FontLetterDefinition$1();
              mixin(value, this._letterDefinitions[key]);
              copyLetterDefinitions[key] = value;
            }

            return copyLetterDefinitions;
          }
        }, {
          key: "assignLetterDefinitions",
          value: function assignLetterDefinitions(letterDefinitions) {
            var _this = this;

            letterDefinitions.forEach(function (value, key) {
              var oldValue = _this._letterDefinitions[key];
              mixin(oldValue, value);
            });
          }
        }, {
          key: "scaleFontLetterDefinition",
          value: function scaleFontLetterDefinition(scaleFactor) {
            for (var _i2 = 0, _Object$keys2 = Object.keys(this._letterDefinitions); _i2 < _Object$keys2.length; _i2++) {
              var fontDefinition = _Object$keys2[_i2];
              var letterDefinitions = this._letterDefinitions[fontDefinition];
              letterDefinitions.w *= scaleFactor;
              letterDefinitions.h *= scaleFactor;
              letterDefinitions.offsetX *= scaleFactor;
              letterDefinitions.offsetY *= scaleFactor;
              letterDefinitions.xAdvance *= scaleFactor;
            }
          }
        }, {
          key: "getLetterDefinitionForChar",
          value: function getLetterDefinitionForChar(_char2, labelInfo) {
            var hash = _char2.charCodeAt(0) + labelInfo.hash;

            var letterDefinition = this._letterDefinitions.get(hash);

            if (!letterDefinition) {
              var temp = new LetterTexture(_char2, labelInfo);
              temp.updateRenderData();
              letterDefinition = this.insertLetterTexture(temp);
              temp.destroy();
            }

            return letterDefinition;
          }
        }]);

        return LetterAtlas;
      }();

      var _tmpRect$1 = new Rect();

      var _comp$1 = null;
      var _uiTrans$1 = null;
      var _horizontalKerning$1 = [];
      var _lettersInfo$1 = [];
      var _linesWidth$1 = [];
      var _linesOffsetX$1 = [];

      var _labelDimensions$1 = new Size();

      var _fontAtlas$1 = null;
      var _numberOfLines$1 = 0;
      var _textDesiredHeight$1 = 0;
      var _letterOffsetY$1 = 0;
      var _tailoredTopY$1 = 0;
      var _tailoredBottomY$1 = 0;
      var _bmfontScale$1 = 1.0;
      var _lineSpacing$1 = 0;
      var _string$1 = '';
      var _fontSize$1 = 0;
      var _originFontSize$1 = 0;

      var _contentSize$1 = new Size();

      var _hAlign$1 = 0;
      var _vAlign$1 = 0;
      var _spacingX$1 = 0;
      var _lineHeight$1 = 0;
      var _overflow$1 = 0;
      var _isWrapText$1 = false;
      var _labelWidth$1 = 0;
      var _labelHeight$1 = 0;
      var _maxLineWidth$1 = 0;
      var _atlasWidth = 1024;
      var _atlasHeight = 1024;
      var _fontFamily = '';
      var _isBold = false;
      var _labelInfo = {
        fontSize: 0,
        lineHeight: 0,
        hash: '',
        fontFamily: '',
        fontDesc: 'Arial',
        hAlign: 0,
        vAlign: 0,
        color: WHITE,
        isOutlined: false,
        out: WHITE,
        margin: 0
      };
      var letterFont = {
        getAssemblerData: function getAssemblerData() {
          if (!_fontAtlas$1) {
            _fontAtlas$1 = new LetterAtlas(_atlasWidth, _atlasHeight);
          }

          return _fontAtlas$1.texture;
        },
        updateRenderData: function updateRenderData(comp) {
          if (!comp.renderData || !comp.renderData.vertDirty) {
            return;
          }

          if (_comp$1 === comp) {
            return;
          }

          _comp$1 = comp;
          _uiTrans$1 = comp.node._uiProps.uiTransformComp;

          this._updateFontFamily(comp);

          _labelInfo.fontFamily = _fontFamily;

          this._updateProperties();

          _labelInfo.fontDesc = this._getFontDesc();

          this._updateContent();

          _comp$1.actualFontSize = _fontSize$1;

          _uiTrans$1.setContentSize(_contentSize$1);

          _comp$1.renderData.vertDirty = _comp$1.renderData.uvDirty = false;
          _comp$1 = null;

          this._resetProperties();
        },
        _updateFontScale: function _updateFontScale() {
          _bmfontScale$1 = _fontSize$1 / _originFontSize$1;
        },
        _updateProperties: function _updateProperties() {
          if (!_comp$1) {
            return;
          }

          _string$1 = _comp$1.string.toString();
          _fontSize$1 = _comp$1.fontSize;
          _originFontSize$1 = _fontSize$1;
          var contentSize = _uiTrans$1.contentSize;
          _contentSize$1.width = contentSize.width;
          _contentSize$1.height = contentSize.height;
          _hAlign$1 = _comp$1.horizontalAlign;
          _vAlign$1 = _comp$1.verticalAlign;
          _spacingX$1 = _comp$1.spacingX;
          _overflow$1 = _comp$1.overflow;
          _lineHeight$1 = _comp$1.lineHeight;
          _isBold = _comp$1.isBold; // should wrap text

          if (_overflow$1 === Overflow$1.NONE) {
            _isWrapText$1 = false;
          } else if (_overflow$1 === Overflow$1.RESIZE_HEIGHT) {
            _isWrapText$1 = true;
          } else {
            _isWrapText$1 = _comp$1.enableWrapText;
          } // outline


          var outline =
          /*OUTLINE_SUPPORTED && */
          _comp$1.getComponent(LabelOutline);

          if (outline && outline.enabled) {
            _labelInfo.isOutlined = true;
            _labelInfo.margin = outline.width;
            _labelInfo.out = outline.color;
            _labelInfo.out.a = outline.color.a * _comp$1.color.a / 255.0;
          } else {
            _labelInfo.isOutlined = false;
            _labelInfo.margin = 0;
          }

          _labelInfo.lineHeight = _lineHeight$1;
          _labelInfo.fontSize = _fontSize$1;
          _labelInfo.fontFamily = _fontFamily;
          _labelInfo.color = _comp$1.color;
          _labelInfo.hash = this._computeHash(_labelInfo);

          this._setupBMFontOverflowMetrics();
        },
        _updateFontFamily: function _updateFontFamily(comp) {
          if (!comp.useSystemFont) {
            if (comp.font) {
              if (comp.font._nativeAsset) {
                _fontFamily = comp.font._nativeAsset;
              } else {
                _fontFamily = loader.getRes(comp.font.nativeUrl) || '';

                if (!_fontFamily) {
                  loader.load(comp.font.nativeUrl, function (err, fontFamily) {
                    _fontFamily = fontFamily || 'Arial';

                    if (comp.font) {
                      comp.font._nativeAsset = fontFamily;
                    }

                    comp.updateRenderData(true);
                  });
                }
              }
            } else {
              _fontFamily = 'Arial';
            }
          } else {
            _fontFamily = comp.fontFamily;
          }
        },
        _computeHash: function _computeHash(labelInfo) {
          var hashData = '';
          var color = labelInfo.color.toHEX('#rrggbb');
          var out = '';

          if (labelInfo.isOutlined) {
            out = labelInfo.out.toHEX('#rrggbb');
          }

          return hashData + labelInfo.fontSize + labelInfo.fontFamily + color + out;
        },
        _getFontDesc: function _getFontDesc() {
          var fontDesc = _fontSize$1.toString() + 'px ';
          fontDesc = fontDesc + _fontFamily;

          if (_isBold) {
            fontDesc = 'bold ' + fontDesc;
          }

          return fontDesc;
        },
        _resetProperties: function _resetProperties() {},
        _updateContent: function _updateContent() {
          this._updateFontScale(); // this._computeHorizontalKerningForText();


          this._alignText();
        },
        _computeHorizontalKerningForText: function _computeHorizontalKerningForText() {// const string = _string;
          // const stringLen = string.length;
          // const kerningDict = _fntConfig.kerningDict;
          // const horizontalKerning = _horizontalKerning;
          // let prev = -1;
          // for (let i = 0; i < stringLen; ++i) {
          //     const key = string.charCodeAt(i);
          //     const kerningAmount = kerningDict[(prev << 16) | (key & 0xffff)] || 0;
          //     if (i < stringLen - 1) {
          //         horizontalKerning[i] = kerningAmount;
          //     } else {
          //         horizontalKerning[i] = 0;
          //     }
          //     prev = key;
          // }
        },
        _multilineTextWrap: function _multilineTextWrap(nextTokenFunc) {
          var textLen = _string$1.length;
          var lineIndex = 0;
          var nextTokenX = 0;
          var nextTokenY = 0;
          var longestLine = 0;
          var letterRight = 0;
          var highestY = 0;
          var lowestY = 0;
          var letterDef = null;
          var letterPosition = new Vec2(0, 0);

          this._updateFontScale();

          for (var index = 0; index < textLen;) {
            var character = _string$1.charAt(index);

            if (character === '\n') {
              _linesWidth$1.push(letterRight);

              letterRight = 0;
              lineIndex++;
              nextTokenX = 0;
              nextTokenY -= _lineHeight$1 * _bmfontScale$1 + _lineSpacing$1;

              this._recordPlaceholderInfo(index, character);

              index++;
              continue;
            }

            var tokenLen = nextTokenFunc(_string$1, index, textLen);
            var tokenHighestY = highestY;
            var tokenLowestY = lowestY;
            var tokenRight = letterRight;
            var nextLetterX = nextTokenX;
            var newLine = false;

            for (var tmp = 0; tmp < tokenLen; ++tmp) {
              var letterIndex = index + tmp;
              character = _string$1.charAt(letterIndex);

              if (character === '\r') {
                this._recordPlaceholderInfo(letterIndex, character);

                continue;
              }

              letterDef = _fontAtlas$1 && _fontAtlas$1.getLetterDefinitionForChar(character, _labelInfo);

              if (!letterDef) {
                this._recordPlaceholderInfo(letterIndex, character);

                continue;
              }

              var letterX = nextLetterX + letterDef.offsetX * _bmfontScale$1;

              if (_isWrapText$1 && _maxLineWidth$1 > 0 && nextTokenX > 0 && letterX + letterDef.w * _bmfontScale$1 > _maxLineWidth$1 && !isUnicodeSpace(character)) {
                _linesWidth$1.push(letterRight);

                letterRight = 0;
                lineIndex++;
                nextTokenX = 0;
                nextTokenY -= _lineHeight$1 * _bmfontScale$1 + _lineSpacing$1;
                newLine = true;
                break;
              } else {
                letterPosition.x = letterX;
              }

              letterPosition.y = nextTokenY - letterDef.offsetY * _bmfontScale$1;

              this._recordLetterInfo(letterPosition, character, letterIndex, lineIndex);

              if (letterIndex + 1 < _horizontalKerning$1.length && letterIndex < textLen - 1) {
                nextLetterX += _horizontalKerning$1[letterIndex + 1];
              }

              nextLetterX += letterDef.xAdvance * _bmfontScale$1 + _spacingX$1;
              tokenRight = letterPosition.x + letterDef.w * _bmfontScale$1;

              if (tokenHighestY < letterPosition.y) {
                tokenHighestY = letterPosition.y;
              }

              if (tokenLowestY > letterPosition.y - letterDef.h * _bmfontScale$1) {
                tokenLowestY = letterPosition.y - letterDef.h * _bmfontScale$1;
              }
            } // end of for loop


            if (newLine) {
              continue;
            }

            nextTokenX = nextLetterX;
            letterRight = tokenRight;

            if (highestY < tokenHighestY) {
              highestY = tokenHighestY;
            }

            if (lowestY > tokenLowestY) {
              lowestY = tokenLowestY;
            }

            if (longestLine < letterRight) {
              longestLine = letterRight;
            }

            index += tokenLen;
          } // end of for loop


          _linesWidth$1.push(letterRight);

          _numberOfLines$1 = lineIndex + 1;
          _textDesiredHeight$1 = _numberOfLines$1 * _lineHeight$1 * _bmfontScale$1;

          if (_numberOfLines$1 > 1) {
            _textDesiredHeight$1 += (_numberOfLines$1 - 1) * _lineSpacing$1;
          }

          _contentSize$1.width = _labelWidth$1;
          _contentSize$1.height = _labelHeight$1;

          if (_labelWidth$1 <= 0) {
            _contentSize$1.width = parseFloat(longestLine.toFixed(2));
          }

          if (_labelHeight$1 <= 0) {
            _contentSize$1.height = parseFloat(_textDesiredHeight$1.toFixed(2));
          }

          _tailoredTopY$1 = _contentSize$1.height;
          _tailoredBottomY$1 = 0;

          if (highestY > 0) {
            _tailoredTopY$1 = _contentSize$1.height + highestY;
          }

          if (lowestY < -_textDesiredHeight$1) {
            _tailoredBottomY$1 = _textDesiredHeight$1 + lowestY;
          }

          return true;
        },
        _getFirstCharLen: function _getFirstCharLen() {
          return 1;
        },
        _getFirstWordLen: function _getFirstWordLen(text, startIndex, textLen) {
          var character = text.charAt(startIndex);

          if (isUnicodeCJK(character) || character === '\n' || isUnicodeSpace(character)) {
            return 1;
          }

          if (!_fontAtlas$1) {
            return;
          }

          var len = 1;

          var letterDef = _fontAtlas$1.getLetterDefinitionForChar(character, _labelInfo);

          if (!letterDef) {
            return len;
          }

          var nextLetterX = letterDef.xAdvance * _bmfontScale$1 + _spacingX$1;
          var letterX;

          for (var index = startIndex + 1; index < textLen; ++index) {
            character = text.charAt(index);
            letterDef = _fontAtlas$1.getLetterDefinitionForChar(character, _labelInfo);

            if (!letterDef) {
              break;
            }

            letterX = nextLetterX + letterDef.offsetX * _bmfontScale$1;

            if (letterX + letterDef.w * _bmfontScale$1 > _maxLineWidth$1 && !isUnicodeSpace(character) && _maxLineWidth$1 > 0) {
              return len;
            }

            nextLetterX += letterDef.xAdvance * _bmfontScale$1 + _spacingX$1;

            if (character === '\n' || isUnicodeSpace(character) || isUnicodeCJK(character)) {
              break;
            }

            len++;
          }

          return len;
        },
        _multilineTextWrapByWord: function _multilineTextWrapByWord() {
          return this._multilineTextWrap(this._getFirstWordLen);
        },
        _multilineTextWrapByChar: function _multilineTextWrapByChar() {
          return this._multilineTextWrap(this._getFirstCharLen);
        },
        _recordPlaceholderInfo: function _recordPlaceholderInfo(letterIndex, _char3) {
          if (letterIndex >= _lettersInfo$1.length) {
            var tmpInfo = new LetterInfo$1();

            _lettersInfo$1.push(tmpInfo);
          }

          _lettersInfo$1[letterIndex]["char"] = _char3;
          _lettersInfo$1[letterIndex].hash = _char3.charCodeAt(0) + _labelInfo.hash;
          _lettersInfo$1[letterIndex].valid = false;
        },
        _recordLetterInfo: function _recordLetterInfo(letterPosition, character, letterIndex, lineIndex) {
          if (letterIndex >= _lettersInfo$1.length) {
            var tmpInfo = new LetterInfo$1();

            _lettersInfo$1.push(tmpInfo);
          }

          var _char4 = character.charCodeAt(0);

          var key = _char4 + _labelInfo.hash;
          _lettersInfo$1[letterIndex].line = lineIndex;
          _lettersInfo$1[letterIndex]["char"] = character;
          _lettersInfo$1[letterIndex].hash = key;

          var fontLetter = _fontAtlas$1 && _fontAtlas$1.getLetter(key);

          _lettersInfo$1[letterIndex].valid = fontLetter ? !!fontLetter.valid : false;
          _lettersInfo$1[letterIndex].x = letterPosition.x;
          _lettersInfo$1[letterIndex].y = letterPosition.y;
        },
        _alignText: function _alignText() {
          _textDesiredHeight$1 = 0;
          _linesWidth$1.length = 0;

          {
            this._multilineTextWrapByWord();
          }

          this._computeAlignmentOffset();

          this._updateQuads(); // shrink
          // if (_overflow === Overflow.SHRINK) {
          //     if (_fontSize > 0 && this._isVerticalClamp()) {
          //         this._shrinkLabelToContentSize(this._isVerticalClamp);
          //     }
          // }
          // if (!this._updateQuads()) {
          //     if (_overflow === Overflow.SHRINK) {
          //         this._shrinkLabelToContentSize(this._isHorizontalClamp);
          //     }
          // }

        },
        _scaleFontSizeDown: function _scaleFontSizeDown(fontSize) {
          var shouldUpdateContent = true;

          if (!fontSize) {
            fontSize = 0.1;
            shouldUpdateContent = false;
          }

          _fontSize$1 = fontSize;

          if (shouldUpdateContent) {
            this._updateContent();
          }
        },
        _isVerticalClamp: function _isVerticalClamp() {
          if (_textDesiredHeight$1 > _contentSize$1.height) {
            return true;
          } else {
            return false;
          }
        },
        _isHorizontalClamp: function _isHorizontalClamp() {
          var letterClamp = false;

          for (var ctr = 0, l = _string$1.length; ctr < l; ++ctr) {
            var letterInfo = _lettersInfo$1[ctr];

            if (letterInfo.valid) {
              var letterDef = _fontAtlas$1.getLetter(letterInfo.hash);

              if (!letterDef) {
                continue;
              }

              var px = letterInfo.x + letterDef.w * _bmfontScale$1;
              var lineIndex = letterInfo.line;

              if (_labelWidth$1 > 0) {
                if (!_isWrapText$1) {
                  if (px > _contentSize$1.width) {
                    letterClamp = true;
                    break;
                  }
                } else {
                  var wordWidth = _linesWidth$1[lineIndex];

                  if (wordWidth > _contentSize$1.width && (px > _contentSize$1.width || px < 0)) {
                    letterClamp = true;
                    break;
                  }
                }
              }
            }
          }

          return letterClamp;
        },
        _isHorizontalClamped: function _isHorizontalClamped(px, lineIndex) {
          var wordWidth = _linesWidth$1[lineIndex];
          var letterOverClamp = px > _contentSize$1.width || px < 0;

          if (!_isWrapText$1) {
            return letterOverClamp;
          } else {
            return wordWidth > _contentSize$1.width && letterOverClamp;
          }
        },
        _updateQuads: function _updateQuads() {
          if (!_comp$1 || !_fontAtlas$1) {
            return;
          }

          var texture = _fontAtlas$1.texture;
          var node = _comp$1.node;
          var renderData = _comp$1.renderData;
          renderData.dataLength = renderData.vertexCount = renderData.indicesCount = 0;
          var contentSize = _contentSize$1;
          var ap = _uiTrans$1.anchorPoint;
          var appX = ap.x * contentSize.width;
          var appY = ap.y * contentSize.height;
          var ret = true;

          for (var ctr = 0, l = _string$1.length; ctr < l; ++ctr) {
            var letterInfo = _lettersInfo$1[ctr];

            if (!letterInfo.valid) {
              continue;
            }

            var letterDef = _fontAtlas$1.getLetter(letterInfo.hash);

            if (!letterDef) {
              continue;
            }

            _tmpRect$1.height = letterDef.h;
            _tmpRect$1.width = letterDef.w;
            _tmpRect$1.x = letterDef.u;
            _tmpRect$1.y = letterDef.v;
            var py = letterInfo.y + _letterOffsetY$1;

            if (_labelHeight$1 > 0) {
              if (py > _tailoredTopY$1) {
                var clipTop = py - _tailoredTopY$1;
                _tmpRect$1.y += clipTop;
                _tmpRect$1.height -= clipTop;
                py = py - clipTop;
              }

              if (py - letterDef.h * _bmfontScale$1 < _tailoredBottomY$1) {
                _tmpRect$1.height = py < _tailoredBottomY$1 ? 0 : py - _tailoredBottomY$1;
              }
            }

            var lineIndex = letterInfo.line;
            var px = letterInfo.x + letterDef.w / 2 * _bmfontScale$1 + _linesOffsetX$1[lineIndex];

            if (_labelWidth$1 > 0) {
              if (this._isHorizontalClamped(px, lineIndex)) {
                if (_overflow$1 === Overflow$1.CLAMP) {
                  _tmpRect$1.width = 0;
                } else if (_overflow$1 === Overflow$1.SHRINK) {
                  if (_contentSize$1.width > letterDef.w) {
                    ret = false;
                    break;
                  } else {
                    _tmpRect$1.width = 0;
                  }
                }
              }
            }

            if (_tmpRect$1.height > 0 && _tmpRect$1.width > 0) {
              var letterPositionX = letterInfo.x + _linesOffsetX$1[letterInfo.line];
              this.appendQuad(_comp$1, texture, _tmpRect$1, false, letterPositionX - appX, py - appY, _bmfontScale$1);
            }
          }

          return ret;
        },
        appendQuad: function appendQuad(renderData, texture, rect, rotated, x, y, scale) {},
        _computeAlignmentOffset: function _computeAlignmentOffset() {
          _linesOffsetX$1.length = 0;

          switch (_hAlign$1) {
            case TextAlignment.LEFT:
              for (var i = 0; i < _numberOfLines$1; ++i) {
                _linesOffsetX$1.push(0);
              }

              break;

            case TextAlignment.CENTER:
              for (var _i3 = 0, l = _linesWidth$1.length; _i3 < l; _i3++) {
                _linesOffsetX$1.push((_contentSize$1.width - _linesWidth$1[_i3]) / 2);
              }

              break;

            case TextAlignment.RIGHT:
              for (var _i4 = 0, _l = _linesWidth$1.length; _i4 < _l; _i4++) {
                _linesOffsetX$1.push(_contentSize$1.width - _linesWidth$1[_i4]);
              }

              break;
          }

          switch (_vAlign$1) {
            case VerticalTextAlignment$1.TOP:
              _letterOffsetY$1 = _contentSize$1.height;
              break;

            case VerticalTextAlignment$1.CENTER:
              _letterOffsetY$1 = (_contentSize$1.height + _textDesiredHeight$1) / 2 - (_lineHeight$1 - _fontSize$1) / 2;
              break;

            case VerticalTextAlignment$1.BOTTOM:
              _letterOffsetY$1 = (_contentSize$1.height + _textDesiredHeight$1) / 2 - (_lineHeight$1 - _fontSize$1);
              break;
          }
        },
        _setupBMFontOverflowMetrics: function _setupBMFontOverflowMetrics() {
          var newWidth = _contentSize$1.width;
          var newHeight = _contentSize$1.height;

          if (_overflow$1 === Overflow$1.RESIZE_HEIGHT) {
            newHeight = 0;
          }

          if (_overflow$1 === Overflow$1.NONE) {
            newWidth = 0;
            newHeight = 0;
          }

          _labelWidth$1 = newWidth;
          _labelHeight$1 = newHeight;
          _labelDimensions$1.width = newWidth;
          _labelDimensions$1.height = newHeight;
          _maxLineWidth$1 = newWidth;
        }
      };

      /*
       Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

       https://www.cocos.com/

       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated engine source code (the "Software"), a limited,
       worldwide, royalty-free, non-assignable, revocable and non-exclusive license
       to use Cocos Creator solely to develop games on your target platforms. You shall
       not use Cocos Creator software for developing other software or tools that's
       used for developing games. You are not granted to publish, distribute,
       sublicense, and/or sell copies of Cocos Creator.

       The software or tools in this License Agreement are licensed, not sold.
       Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */
      var WHITE$1 = new Color(255, 255, 255, 255);
      /**
       * letter 组装器
       * 可通过 `UI.letter` 获取该组装器。
       */

      var letter = {
        createData: function createData(comp) {
          return comp.requestRenderData();
        },
        fillBuffers: function fillBuffers(comp, renderer) {
          if (!comp.renderData) {
            return;
          }

          var node = comp.node;
          WHITE$1.a = comp.color.a;
          fillMeshVertices3D(node, renderer, comp.renderData, WHITE$1);
        },
        appendQuad: bmfont.appendQuad
      };
      addon(letter, letterFont);

      var Overflow$2 = Label.Overflow;
      var WHITE$2 = Color.WHITE.clone();
      var OUTLINE_SUPPORTED = isChildClassOf(LabelOutline, Component);
      var _context = null;
      var _canvas = null;
      var _texture = null;
      var _fontDesc = '';
      var _string$2 = '';
      var _fontSize$2 = 0;
      var _drawFontsize = 0;
      var _splitStrings = [];

      var _canvasSize = new Size();

      var _lineHeight$2 = 0;
      var _hAlign$2 = 0;
      var _vAlign$2 = 0;

      var _color$1 = new Color();

      var _fontFamily$1 = '';
      var _overflow$2 = Overflow$2.NONE;
      var _isWrapText$2 = false; // outline

      var _isOutlined = false;

      var _outlineColor = new Color();

      var _outlineWidth = 0;
      var _margin = 0;
      var _isBold$1 = false;
      var _isItalic = false;
      var _isUnderline = false;
      var ttfUtils = {
        getAssemblerData: function getAssemblerData() {
          var sharedLabelData = Label._canvasPool.get();

          sharedLabelData.canvas.width = sharedLabelData.canvas.height = 1;
          return sharedLabelData;
        },
        resetAssemblerData: function resetAssemblerData(assemblerData) {
          if (assemblerData) {
            Label._canvasPool.put(assemblerData);
          }
        },
        updateRenderData: function updateRenderData(comp) {
          if (!comp.renderData || !comp.renderData.vertDirty) {
            return;
          }

          var trans = comp.node._uiProps.uiTransformComp;

          this._updateFontFamily(comp);

          this._updateProperties(comp, trans);

          this._calculateLabelFont();

          this._calculateSplitStrings();

          this._updateLabelDimensions();

          this._calculateTextBaseline();

          this._updateTexture();

          comp.actualFontSize = _fontSize$2;
          trans.setContentSize(_canvasSize);
          this.updateVertexData(comp);
          comp.markForUpdateRenderData(false);
          _context = null;
          _canvas = null;
          _texture = null;
        },
        updateVertexData: function updateVertexData(comp) {},
        _updateFontFamily: function _updateFontFamily(comp) {
          if (!comp.useSystemFont) {
            if (comp.font) {
              if (comp.font._nativeAsset) {
                _fontFamily$1 = comp.font._nativeAsset;
              } else {
                loader.load(comp.font.nativeUrl, function (err, fontFamily) {
                  _fontFamily$1 = fontFamily || 'Arial';
                  comp.font._nativeAsset = fontFamily;
                  comp.updateRenderData(true);
                });
              }
            } else {
              _fontFamily$1 = 'Arial';
            }
          } else {
            _fontFamily$1 = comp.fontFamily;
          }
        },
        _updateProperties: function _updateProperties(comp, trans) {
          var assemblerData = comp.assemblerData;

          if (!assemblerData) {
            return;
          }

          _context = assemblerData.context;
          _canvas = assemblerData.canvas;
          _texture = comp.spriteFrame;
          _string$2 = comp.string.toString();
          _fontSize$2 = comp.fontSize;
          _drawFontsize = _fontSize$2;
          _overflow$2 = comp.overflow;
          _canvasSize.width = trans.width;
          _canvasSize.height = trans.height;
          _lineHeight$2 = comp.lineHeight;
          _hAlign$2 = comp.horizontalAlign;
          _vAlign$2 = comp.verticalAlign;
          _color$1 = comp.color;
          _isBold$1 = comp.isBold;
          _isItalic = comp.isItalic;
          _isUnderline = comp.isUnderline;

          if (_overflow$2 === Overflow$2.NONE) {
            _isWrapText$2 = false;
          } else if (_overflow$2 === Overflow$2.RESIZE_HEIGHT) {
            _isWrapText$2 = true;
          } else {
            _isWrapText$2 = comp.enableWrapText;
          } // outline


          var outline = OUTLINE_SUPPORTED && comp.getComponent(LabelOutline);

          if (outline && outline.enabled) {
            _isOutlined = true;
            _margin = _outlineWidth = outline.width;

            _outlineColor.set(outline.color); // TODO: temporary solution, cascade opacity for outline color


            _outlineColor.a = _outlineColor.a * comp.color.a / 255.0;
          } else {
            _isOutlined = false;
            _margin = 0;
          }
        },
        _calculateFillTextStartPosition: function _calculateFillTextStartPosition() {
          var lineHeight = this._getLineHeight();

          var lineCount = _splitStrings.length;
          var labelX = 0;
          var firstLineLabelY = 0;

          if (_hAlign$2 === HorizontalTextAlignment.RIGHT) {
            labelX = _canvasSize.width - _margin;
          } else if (_hAlign$2 === HorizontalTextAlignment.CENTER) {
            labelX = _canvasSize.width / 2;
          } else {
            labelX = 0 + _margin;
          }

          if (_vAlign$2 === VerticalTextAlignment.TOP) {
            firstLineLabelY = _fontSize$2 * (BASELINE_RATIO / 2);
          } else if (_vAlign$2 === VerticalTextAlignment.CENTER) {
            firstLineLabelY = _canvasSize.height / 2 - lineHeight * (lineCount - 1) / 2;
          } else {
            firstLineLabelY = _canvasSize.height - lineHeight * (lineCount - 1);
          }

          return new Vec2(labelX, firstLineLabelY);
        },
        _updateTexture: function _updateTexture() {
          if (!_context || !_canvas) {
            return;
          }

          _context.clearRect(0, 0, _canvas.width, _canvas.height);

          _context.font = _fontDesc;

          var startPosition = this._calculateFillTextStartPosition();

          var lineHeight = this._getLineHeight(); // use round for line join to avoid sharp intersect point


          _context.lineJoin = 'round';
          _context.fillStyle = "rgba(".concat(_color$1.r, ", ").concat(_color$1.g, ", ").concat(_color$1.b, ", ").concat(_color$1.a / 255, ")");
          var underlineStartPosition; // do real rendering

          for (var i = 0; i < _splitStrings.length; ++i) {
            if (_isOutlined) {
              var strokeColor = _outlineColor || WHITE$2;
              _context.strokeStyle = "rgba(".concat(strokeColor.r, ", ").concat(strokeColor.g, ", ").concat(strokeColor.b, ", ").concat(strokeColor.a / 255, ")");
              _context.lineWidth = _outlineWidth * 2;

              _context.strokeText(_splitStrings[i], startPosition.x, startPosition.y + i * lineHeight);
            }

            _context.fillText(_splitStrings[i], startPosition.x, startPosition.y + i * lineHeight);

            if (_isUnderline) {
              underlineStartPosition = this._calculateUnderlineStartPosition();

              _context.save();

              _context.beginPath();

              _context.lineWidth = _fontSize$2 / 8;
              _context.strokeStyle = "rgba(".concat(_color$1.r, ", ").concat(_color$1.g, ", ").concat(_color$1.b, ", ").concat(_color$1.a / 255, ")");

              _context.moveTo(underlineStartPosition.x, underlineStartPosition.y + i * lineHeight - 1);

              _context.lineTo(underlineStartPosition.x + _canvas.width, underlineStartPosition.y + i * lineHeight - 1);

              _context.stroke();

              _context.restore();
            }
          } // _texture.handleLoadedTexture();


          if (_texture) {
            var tex;

            if (_texture instanceof SpriteFrame) {
              tex = _texture.texture;
            } else {
              tex = _texture;
            }

            var uploadAgain = _canvas.width !== 0 && _canvas.height !== 0;

            if (uploadAgain) {
              tex.reset({
                width: _canvas.width,
                height: _canvas.height,
                mipmapLevel: 1
              });
              tex.uploadData(_canvas);
            }
          }
        },
        _calculateUnderlineStartPosition: function _calculateUnderlineStartPosition() {
          var lineHeight = this._getLineHeight();

          var lineCount = _splitStrings.length;
          var labelX = 0 + _margin;
          var firstLineLabelY = 0;

          if (_vAlign$2 === VerticalTextAlignment.TOP) {
            firstLineLabelY = _fontSize$2;
          } else if (_vAlign$2 === VerticalTextAlignment.CENTER) {
            firstLineLabelY = _canvasSize.height / 2 - lineHeight * (lineCount - 1) / 2 + _fontSize$2 / 2;
          } else {
            firstLineLabelY = _canvasSize.height - lineHeight * (lineCount - 1);
          }

          return new Vec2(labelX, firstLineLabelY);
        },
        _updateLabelDimensions: function _updateLabelDimensions() {
          if (!_context) {
            return;
          }

          var paragraphedStrings = _string$2.split('\n');

          if (_overflow$2 === Overflow$2.RESIZE_HEIGHT) {
            _canvasSize.height = (_splitStrings.length + BASELINE_RATIO) * this._getLineHeight();
          } else if (_overflow$2 === Overflow$2.NONE) {
            _splitStrings = paragraphedStrings;
            var canvasSizeX = 0;
            var canvasSizeY = 0;

            for (var _iterator = _createForOfIteratorHelperLoose(paragraphedStrings), _step; !(_step = _iterator()).done;) {
              var para = _step.value;
              var paraLength = safeMeasureText(_context, para);
              canvasSizeX = canvasSizeX > paraLength ? canvasSizeX : paraLength;
            }

            canvasSizeY = (_splitStrings.length + BASELINE_RATIO) * this._getLineHeight();
            _canvasSize.width = parseFloat(canvasSizeX.toFixed(2)) + 2 * _margin;
            _canvasSize.height = parseFloat(canvasSizeY.toFixed(2));

            if (_isItalic) {
              // 0.0174532925 = 3.141592653 / 180
              _canvasSize.width += _drawFontsize * Math.tan(12 * 0.0174532925);
            }
          }

          if (!_canvas) {
            return;
          }

          _canvas.width = _canvasSize.width;
          _canvas.height = _canvasSize.height;
        },
        _calculateTextBaseline: function _calculateTextBaseline() {
          // let node = this._node;
          var hAlign;
          var vAlign;

          if (_hAlign$2 === HorizontalTextAlignment.RIGHT) {
            hAlign = 'right';
          } else if (_hAlign$2 === HorizontalTextAlignment.CENTER) {
            hAlign = 'center';
          } else {
            hAlign = 'left';
          }

          if (_vAlign$2 === VerticalTextAlignment.TOP) {
            vAlign = 'top';
          } else if (_vAlign$2 === VerticalTextAlignment.CENTER) {
            vAlign = 'middle';
          } else {
            vAlign = 'bottom';
          }

          if (_context) {
            _context.textAlign = hAlign;
            _context.textBaseline = vAlign;
          }
        },
        _calculateSplitStrings: function _calculateSplitStrings() {
          if (!_context) {
            return;
          }

          var paragraphedStrings = _string$2.split('\n');

          if (_isWrapText$2) {
            _splitStrings = [];
            var canvasWidthNoMargin = _canvasSize.width - 2 * _margin;

            for (var _iterator2 = _createForOfIteratorHelperLoose(paragraphedStrings), _step2; !(_step2 = _iterator2()).done;) {
              var para = _step2.value;
              var allWidth = safeMeasureText(_context, para);
              var textFragment = fragmentText(para, allWidth, canvasWidthNoMargin, this._measureText(_context));
              _splitStrings = _splitStrings.concat(textFragment);
            }
          } else {
            _splitStrings = paragraphedStrings;
          }
        },
        _getFontDesc: function _getFontDesc() {
          var fontDesc = _fontSize$2.toString() + 'px ';
          fontDesc = fontDesc + _fontFamily$1;

          if (_isBold$1) {
            fontDesc = 'bold ' + fontDesc;
          }

          if (_isItalic) {
            fontDesc = 'italic ' + fontDesc;
          }

          return fontDesc;
        },
        _getLineHeight: function _getLineHeight() {
          var nodeSpacingY = _lineHeight$2;

          if (nodeSpacingY === 0) {
            nodeSpacingY = _fontSize$2;
          } else {
            nodeSpacingY = nodeSpacingY * _fontSize$2 / _drawFontsize;
          }

          return nodeSpacingY | 0;
        },
        _calculateParagraphLength: function _calculateParagraphLength(paragraphedStrings, ctx) {
          var paragraphLength = [];

          for (var _iterator3 = _createForOfIteratorHelperLoose(paragraphedStrings), _step3; !(_step3 = _iterator3()).done;) {
            var para = _step3.value;
            var width = safeMeasureText(ctx, para);
            paragraphLength.push(width);
          }

          return paragraphLength;
        },
        _measureText: function _measureText(ctx) {
          return function (string) {
            return safeMeasureText(ctx, string);
          };
        },
        _calculateLabelFont: function _calculateLabelFont() {
          if (!_context) {
            return;
          }

          _fontDesc = this._getFontDesc();
          _context.font = _fontDesc;

          if (_overflow$2 === Overflow$2.SHRINK) {
            var paragraphedStrings = _string$2.split('\n');

            var paragraphLength = this._calculateParagraphLength(paragraphedStrings, _context);

            _splitStrings = paragraphedStrings;
            var i = 0;
            var totalHeight = 0;
            var maxLength = 0;

            if (_isWrapText$2) {
              var canvasWidthNoMargin = _canvasSize.width - 2 * _margin;
              var canvasHeightNoMargin = _canvasSize.height - 2 * _margin;

              if (canvasWidthNoMargin < 0 || canvasHeightNoMargin < 0) {
                _fontDesc = this._getFontDesc();
                _context.font = _fontDesc;
                return;
              }

              totalHeight = canvasHeightNoMargin + 1;
              maxLength = canvasWidthNoMargin + 1;
              var actualFontSize = _fontSize$2 + 1;
              var textFragment = [];
              var tryDivideByTwo = true;
              var startShrinkFontSize = actualFontSize | 0;

              while (totalHeight > canvasHeightNoMargin || maxLength > canvasWidthNoMargin) {
                if (tryDivideByTwo) {
                  actualFontSize = startShrinkFontSize / 2 | 0;
                } else {
                  actualFontSize = startShrinkFontSize - 1;
                  startShrinkFontSize = actualFontSize;
                }

                if (actualFontSize <= 0) {
                  logID(4003);
                  break;
                }

                _fontSize$2 = actualFontSize;
                _fontDesc = this._getFontDesc();
                _context.font = _fontDesc;
                _splitStrings = [];
                totalHeight = 0;

                for (i = 0; i < paragraphedStrings.length; ++i) {
                  var j = 0;
                  var allWidth = safeMeasureText(_context, paragraphedStrings[i]);
                  textFragment = fragmentText(paragraphedStrings[i], allWidth, canvasWidthNoMargin, this._measureText(_context));

                  while (j < textFragment.length) {
                    var measureWidth = safeMeasureText(_context, textFragment[j]);
                    maxLength = measureWidth;
                    totalHeight += this._getLineHeight();
                    ++j;
                  }

                  _splitStrings = _splitStrings.concat(textFragment);
                }

                if (tryDivideByTwo) {
                  if (totalHeight > canvasHeightNoMargin) {
                    startShrinkFontSize = actualFontSize | 0;
                  } else {
                    tryDivideByTwo = false;
                    totalHeight = canvasHeightNoMargin + 1;
                  }
                }
              }
            } else {
              totalHeight = paragraphedStrings.length * this._getLineHeight();

              for (i = 0; i < paragraphedStrings.length; ++i) {
                if (maxLength < paragraphLength[i]) {
                  maxLength = paragraphLength[i];
                }
              }

              var scaleX = (_canvasSize.width - 2 * _margin) / maxLength;
              var scaleY = _canvasSize.height / totalHeight;
              _fontSize$2 = _drawFontsize * Math.min(1, scaleX, scaleY) | 0;
              _fontDesc = this._getFontDesc();
              _context.font = _fontDesc;
            }
          }
        }
      };

      /*
       Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

       http://www.cocos.com

       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated engine source code (the "Software"), a limited,
       worldwide, royalty-free, non-assignable, revocable and non-exclusive license
       to use Cocos Creator solely to develop games on your target platforms. You shall
       not use Cocos Creator software for developing other software or tools that's
       used for developing games. You are not granted to publish, distribute,
       sublicense, and/or sell copies of Cocos Creator.

       The software or tools in this License Agreement are licensed, not sold.
       Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */
      var WHITE$3 = Color.WHITE.clone();
      /**
       * ttf 组装器
       * 可通过 `UI.ttf` 获取该组装器。
       */

      var ttf = {
        createData: function createData(comp) {
          var renderData = comp.requestRenderData();
          renderData.dataLength = 4;
          renderData.vertexCount = 4;
          renderData.indicesCount = 6;
          var vData = renderData.vData = new Float32Array(4 * 9);
          vData[3] = vData[21] = vData[22] = vData[31] = 0;
          vData[4] = vData[12] = vData[13] = vData[30] = 1;
          var offset = 5;

          for (var i = 0; i < 4; i++) {
            Color.toArray(vData, WHITE$3, offset);
            offset += 9;
          }

          return renderData;
        },
        fillBuffers: function fillBuffers(comp, renderer) {
          var renderData = comp.renderData;
          var dataList = renderData.data;
          var node = comp.node;
          var buffer = renderer.currBufferBatch;
          var vertexOffset = buffer.byteOffset >> 2;
          var indicesOffset = buffer.indicesOffset;
          var vertexId = buffer.vertexOffset;
          var isRecreate = buffer.request();

          if (!isRecreate) {
            buffer = renderer.currBufferBatch;
            indicesOffset = 0;
            vertexId = 0;
          } // buffer data may be reallocated, need get reference after request.


          var vBuf = buffer.vData;
          var iBuf = buffer.iData;
          var vData = renderData.vData;
          var data0 = dataList[0];
          var data3 = dataList[3];
          /* */

          node.updateWorldTransform(); // @ts-ignore

          var pos = node._pos;
          var rot = node._rot;
          var scale = node._scale;
          var ax = data0.x * scale.x;
          var bx = data3.x * scale.x;
          var ay = data0.y * scale.y;
          var by = data3.y * scale.y;
          var qx = rot.x;
          var qy = rot.y;
          var qz = rot.z;
          var qw = rot.w;
          var qxy = qx * qy;
          var qzw = qz * qw;
          var qxy2 = qx * qx - qy * qy;
          var qzw2 = qw * qw - qz * qz;
          var cx1 = qzw2 + qxy2;
          var cx2 = (qxy - qzw) * 2;
          var cy1 = qzw2 - qxy2;
          var cy2 = (qxy + qzw) * 2;
          var x = pos.x;
          var y = pos.y; // left bottom

          vData[0] = cx1 * ax + cx2 * ay + x;
          vData[1] = cy1 * ay + cy2 * ax + y; // right bottom

          vData[9] = cx1 * bx + cx2 * ay + x;
          vData[10] = cy1 * ay + cy2 * bx + y; // left top

          vData[18] = cx1 * ax + cx2 * by + x;
          vData[19] = cy1 * by + cy2 * ax + y; // right top

          vData[27] = cx1 * bx + cx2 * by + x;
          vData[28] = cy1 * by + cy2 * bx + y;
          vBuf.set(vData, vertexOffset); // fill index data

          iBuf[indicesOffset++] = vertexId;
          iBuf[indicesOffset++] = vertexId + 1;
          iBuf[indicesOffset++] = vertexId + 2;
          iBuf[indicesOffset++] = vertexId + 2;
          iBuf[indicesOffset++] = vertexId + 1;
          iBuf[indicesOffset++] = vertexId + 3;
        },
        updateVertexData: function updateVertexData(comp) {
          var renderData = comp.renderData;

          if (!renderData) {
            return;
          }

          var uiTrans = comp.node._uiProps.uiTransformComp;
          var width = uiTrans.width;
          var height = uiTrans.height;
          var appX = uiTrans.anchorX * width;
          var appY = uiTrans.anchorY * height;
          var data = renderData.data;
          data[0].x = -appX;
          data[0].y = -appY;
          data[3].x = width - appX;
          data[3].y = height - appY;
        }
      };
      addon(ttf, ttfUtils);

      /*
       Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

       http://www.cocos.com

       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated engine source code (the "Software"), a limited,
       worldwide, royalty-free, non-assignable, revocable and non-exclusive license
       to use Cocos Creator solely to develop games on your target platforms. You shall
       not use Cocos Creator software for developing other software or tools that's
       used for developing games. You are not granted to publish, distribute,
       sublicense, and/or sell copies of Cocos Creator.

       The software or tools in this License Agreement are licensed, not sold.
       Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */
      var labelAssembler = exports('labelAssembler', {
        getAssembler: function getAssembler(comp) {
          var assembler = ttf;

          if (comp.font instanceof BitmapFont) {
            assembler = bmfont;
          } else if (comp.cacheMode === Label.CacheMode.CHAR) {
            assembler = letter;
          }

          return assembler;
        } // Skip invalid labels (without own _assembler)
        // updateRenderData(label) {
        //     return label.__allocedDatas;
        // }

      });
      Label.Assembler = labelAssembler;

      /*
       Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

       http://www.cocos.com

       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated engine source code (the "Software"), a limited,
       worldwide, royalty-free, non-assignable, revocable and non-exclusive license
       to use Cocos Creator solely to develop games on your target platforms. You shall
       not use Cocos Creator software for developing other software or tools that's
       used for developing games. You are not granted to publish, distribute,
       sublicense, and/or sell copies of Cocos Creator.

       The software or tools in this License Agreement are licensed, not sold.
       Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */
      var _stencilManager = StencilManager.sharedManager;
      var maskAssembler = {
        createData: function createData(mask) {
          var renderData = mask.requestRenderData();
          renderData.dataLength = 4;
          renderData.vertexCount = 4;
          renderData.indicesCount = 6;
          return renderData;
        },
        updateRenderData: function updateRenderData(mask) {
          var renderData = mask.renderData;

          if (renderData) {
            if (renderData.vertDirty) {
              if (this.updateVertexData) {
                this.updateVertexData(mask);
              }
            }
          }
        },
        updateVertexData: function updateVertexData(mask) {
          var renderData = mask.renderData;

          if (!renderData) {
            return;
          }

          var uiTrans = mask.node._uiProps.uiTransformComp;
          var dataList = renderData.data;
          var cw = uiTrans.width;
          var ch = uiTrans.height;
          var appX = uiTrans.anchorX * cw;
          var appY = uiTrans.anchorY * ch;
          var l = 0;
          var b = 0;
          var r = 0;
          var t = 0; // if (sprite.trim) {

          l = -appX;
          b = -appY;
          r = cw - appX;
          t = ch - appY;
          dataList[0].x = l;
          dataList[0].y = b;
          dataList[3].x = r;
          dataList[3].y = t;
          renderData.vertDirty = false;
        },
        fillBuffers: function fillBuffers(mask, renderer) {
          _stencilManager.pushMask(mask);

          _stencilManager.clear();

          mask.clearGraphics.updateAssembler(renderer);

          _stencilManager.enterLevel();

          mask.graphics.updateAssembler(renderer);

          _stencilManager.enableMask();
        }
      };
      var maskEndAssembler = {
        fillBuffers: function fillBuffers(mask, ui) {
          _stencilManager.exitMask();
        }
      };
      var StartAssembler = {
        getAssembler: function getAssembler() {
          return maskAssembler;
        }
      };
      var PostAssembler = {
        getAssembler: function getAssembler() {
          return maskEndAssembler;
        }
      };
      Mask.Assembler = StartAssembler;
      Mask.PostAssembler = PostAssembler;

      var FillType = Sprite.FillType;
      var matrix = new Mat4();
      /**
       * barFilled 组装器
       * 可通过 `UI.barFilled` 获取该组装器。
       */

      var barFilled = {
        useModel: false,
        updateRenderData: function updateRenderData(sprite) {
          var frame = sprite.spriteFrame; // TODO: Material API design and export from editor could affect the material activation process
          // need to update the logic here
          // if (frame) {
          //     if (!frame._original && dynamicAtlasManager) {
          //         dynamicAtlasManager.insertSpriteFrame(frame);
          //     }
          //     if (sprite._material._texture !== frame._texture) {
          //         sprite._activateMaterial();
          //     }
          // }

          var renderData = sprite.renderData;

          if (renderData && frame) {
            var uvDirty = renderData.uvDirty;
            var vertDirty = renderData.vertDirty;

            if (!uvDirty && !vertDirty) {
              return;
            }

            var fillStart = sprite.fillStart;
            var fillRange = sprite.fillRange;

            if (fillRange < 0) {
              fillStart += fillRange;
              fillRange = -fillRange;
            }

            fillRange = fillStart + fillRange;
            fillStart = fillStart > 1.0 ? 1.0 : fillStart;
            fillStart = fillStart < 0.0 ? 0.0 : fillStart;
            fillRange = fillRange > 1.0 ? 1.0 : fillRange;
            fillRange = fillRange < 0.0 ? 0.0 : fillRange;
            fillRange = fillRange - fillStart;
            fillRange = fillRange < 0 ? 0 : fillRange;
            var fillEnd = fillStart + fillRange;
            fillEnd = fillEnd > 1 ? 1 : fillEnd;

            if (uvDirty) {
              this.updateUVs(sprite, fillStart, fillEnd);
            }

            if (vertDirty) {
              if (this.updateVertexData) {
                this.updateVertexData(sprite, fillStart, fillEnd);
              }

              this.updateWorldVertexData(sprite);
            }
          }
        },
        updateUVs: function updateUVs(sprite, fillStart, fillEnd) {
          var spriteFrame = sprite.spriteFrame;
          var renderData = sprite.renderData;
          var dataList = renderData.data; // build uvs

          var atlasWidth = spriteFrame.width;
          var atlasHeight = spriteFrame.height;
          var textureRect = spriteFrame.getRect(); // uv computation should take spriteSheet into account.

          var ul = 0;
          var vb = 0;
          var ur = 0;
          var vt = 0;
          var quadUV0 = 0;
          var quadUV1 = 0;
          var quadUV2 = 0;
          var quadUV3 = 0;
          var quadUV4 = 0;
          var quadUV5 = 0;
          var quadUV6 = 0;
          var quadUV7 = 0;

          if (spriteFrame.isRotated()) {
            ul = textureRect.x / atlasWidth;
            vb = (textureRect.y + textureRect.width) / atlasHeight;
            ur = (textureRect.x + textureRect.height) / atlasWidth;
            vt = textureRect.y / atlasHeight;
            quadUV0 = quadUV2 = ul;
            quadUV4 = quadUV6 = ur;
            quadUV3 = quadUV7 = vb;
            quadUV1 = quadUV5 = vt;
          } else {
            ul = textureRect.x / atlasWidth;
            vb = (textureRect.y + textureRect.height) / atlasHeight;
            ur = (textureRect.x + textureRect.width) / atlasWidth;
            vt = textureRect.y / atlasHeight;
            quadUV0 = quadUV4 = ul;
            quadUV2 = quadUV6 = ur;
            quadUV1 = quadUV3 = vb;
            quadUV5 = quadUV7 = vt;
          }

          switch (sprite.fillType) {
            case FillType.HORIZONTAL:
              dataList[0].u = quadUV0 + (quadUV2 - quadUV0) * fillStart;
              dataList[0].v = quadUV1 + (quadUV3 - quadUV1) * fillStart;
              dataList[1].u = quadUV0 + (quadUV2 - quadUV0) * fillEnd;
              dataList[1].v = quadUV1 + (quadUV3 - quadUV1) * fillEnd;
              dataList[2].u = quadUV4 + (quadUV6 - quadUV4) * fillStart;
              dataList[2].v = quadUV5 + (quadUV7 - quadUV5) * fillStart;
              dataList[3].u = quadUV4 + (quadUV6 - quadUV4) * fillEnd;
              dataList[3].v = quadUV5 + (quadUV7 - quadUV5) * fillEnd;
              break;

            case FillType.VERTICAL:
              dataList[0].u = quadUV0 + (quadUV4 - quadUV0) * fillStart;
              dataList[0].v = quadUV1 + (quadUV5 - quadUV1) * fillStart;
              dataList[1].u = quadUV2 + (quadUV6 - quadUV2) * fillStart;
              dataList[1].v = quadUV3 + (quadUV7 - quadUV3) * fillStart;
              dataList[2].u = quadUV0 + (quadUV4 - quadUV0) * fillEnd;
              dataList[2].v = quadUV1 + (quadUV5 - quadUV1) * fillEnd;
              dataList[3].u = quadUV2 + (quadUV6 - quadUV2) * fillEnd;
              dataList[3].v = quadUV3 + (quadUV7 - quadUV3) * fillEnd;
              break;

            default:
              errorID(2626);
              break;
          }

          renderData.uvDirty = false;
        },
        updateVertexData: function updateVertexData(sprite, fillStart, fillEnd) {
          var renderData = sprite.renderData;
          var dataList = renderData.data;
          var uiTrans = sprite.node._uiProps.uiTransformComp;
          var width = uiTrans.width;
          var height = uiTrans.height;
          var appX = uiTrans.anchorX * width;
          var appY = uiTrans.anchorY * height;
          var l = -appX;
          var b = -appY;
          var r = width - appX;
          var t = height - appY;
          var progressStart = 0;
          var progressEnd = 0;

          switch (sprite.fillType) {
            case FillType.HORIZONTAL:
              progressStart = l + (r - l) * fillStart;
              progressEnd = l + (r - l) * fillEnd;
              l = progressStart;
              r = progressEnd;
              break;

            case FillType.VERTICAL:
              progressStart = b + (t - b) * fillStart;
              progressEnd = b + (t - b) * fillEnd;
              b = progressStart;
              t = progressEnd;
              break;

            default:
              errorID(2626);
              break;
          }

          dataList[4].x = l;
          dataList[4].y = b;
          dataList[5].x = r;
          dataList[5].y = b;
          dataList[6].x = l;
          dataList[6].y = t;
          dataList[7].x = r;
          dataList[7].y = t;
          renderData.vertDirty = false;
        },
        createData: function createData(sprite) {
          var renderData = sprite.requestRenderData(); // 0-4 for world vertex
          // 5-8 for local vertex

          renderData.dataLength = 8;
          renderData.vertexCount = 4;
          renderData.indicesCount = 6;
          var dataList = renderData.data;

          for (var _iterator = _createForOfIteratorHelperLoose(dataList), _step; !(_step = _iterator()).done;) {
            var data = _step.value;
            data.z = 0;
          }

          return renderData;
        },
        updateWorldVertexData: function updateWorldVertexData(sprite) {
          var node = sprite.node;
          var dataList = sprite.renderData.data;
          node.getWorldMatrix(matrix);

          for (var i = 0; i < 4; i++) {
            var local = dataList[i + 4];
            var world = dataList[i];
            Vec3.transformMat4(world, local, matrix);
          }
        },
        fillBuffers: function fillBuffers(sprite, renderer) {
          if (sprite.node.hasChangedFlags) {
            this.updateWorldVertexData(sprite);
          }

          var node = sprite.node;
          fillVerticesWithoutCalc3D(node, renderer, sprite.renderData, sprite.color);
        }
      };

      var PI_2 = Math.PI * 2;
      var EPSILON$1 = 1e-6;
      var _vertPos = [new Vec2(), new Vec2(), new Vec2(), new Vec2()];

      var _vertices = new Array(4);

      var _uvs = new Array(8);

      var _intersectPoint_1 = [new Vec2(), new Vec2(), new Vec2(), new Vec2()];
      var _intersectPoint_2 = [new Vec2(), new Vec2(), new Vec2(), new Vec2()];

      var _center = new Vec2();

      var _triangles = [new Vec2(), new Vec2(), new Vec2(), new Vec2()];

      function _calcIntersectedPoints(left, right, bottom, top, center, angle, intersectPoints) {
        // left bottom, right, top
        var sinAngle = Math.sin(angle);
        sinAngle = Math.abs(sinAngle) > EPSILON$1 ? sinAngle : 0;
        var cosAngle = Math.cos(angle);
        cosAngle = Math.abs(cosAngle) > EPSILON$1 ? cosAngle : 0;
        var tanAngle = 0;
        var cotAngle = 0;

        if (cosAngle !== 0) {
          tanAngle = sinAngle / cosAngle; // calculate right and left

          if ((left - center.x) * cosAngle > 0) {
            var yLeft = center.y + tanAngle * (left - center.x);
            intersectPoints[0].x = left;
            intersectPoints[0].y = yLeft;
          }

          if ((right - center.x) * cosAngle > 0) {
            var yRight = center.y + tanAngle * (right - center.x);
            intersectPoints[2].x = right;
            intersectPoints[2].y = yRight;
          }
        }

        if (sinAngle !== 0) {
          cotAngle = cosAngle / sinAngle; // calculate  top and bottom

          if ((top - center.y) * sinAngle > 0) {
            var xTop = center.x + cotAngle * (top - center.y);
            intersectPoints[3].x = xTop;
            intersectPoints[3].y = top;
          }

          if ((bottom - center.y) * sinAngle > 0) {
            var xBottom = center.x + cotAngle * (bottom - center.y);
            intersectPoints[1].x = xBottom;
            intersectPoints[1].y = bottom;
          }
        }
      }

      function _calculateVertices(sprite) {
        var uiTrans = sprite.node._uiProps.uiTransformComp;
        var width = uiTrans.width;
        var height = uiTrans.height;
        var appX = uiTrans.anchorX * width;
        var appY = uiTrans.anchorY * height;
        var l = -appX;
        var b = -appY;
        var r = width - appX;
        var t = height - appY;
        var vertices = _vertices;
        vertices[0] = l;
        vertices[1] = b;
        vertices[2] = r;
        vertices[3] = t;
        var fillCenter = sprite.fillCenter;
        var cx = _center.x = Math.min(Math.max(0, fillCenter.x), 1) * (r - l) + l;
        var cy = _center.y = Math.min(Math.max(0, fillCenter.y), 1) * (t - b) + b;
        _vertPos[0].x = _vertPos[3].x = l;
        _vertPos[1].x = _vertPos[2].x = r;
        _vertPos[0].y = _vertPos[1].y = b;
        _vertPos[2].y = _vertPos[3].y = t;

        for (var _iterator = _createForOfIteratorHelperLoose(_triangles), _step; !(_step = _iterator()).done;) {
          var num = _step.value;
          Vec2.set(num, 0, 0);
        }

        if (cx !== vertices[0]) {
          Vec2.set(_triangles[0], 3, 0);
        }

        if (cx !== vertices[2]) {
          Vec2.set(_triangles[2], 1, 2);
        }

        if (cy !== vertices[1]) {
          Vec2.set(_triangles[1], 0, 1);
        }

        if (cy !== vertices[3]) {
          Vec2.set(_triangles[3], 2, 3);
        }
      }

      function _calculateUVs(spriteFrame) {
        var atlasWidth = spriteFrame.width;
        var atlasHeight = spriteFrame.height;
        var textureRect = spriteFrame.getRect();
        var u0 = 0;
        var u1 = 0;
        var v0 = 0;
        var v1 = 0;
        var uvs = _uvs;

        if (spriteFrame.isRotated()) {
          u0 = textureRect.x / atlasWidth;
          u1 = (textureRect.x + textureRect.height) / atlasWidth;
          v0 = textureRect.y / atlasHeight;
          v1 = (textureRect.y + textureRect.width) / atlasHeight;
          uvs[0] = uvs[2] = u0;
          uvs[4] = uvs[6] = u1;
          uvs[3] = uvs[7] = v1;
          uvs[1] = uvs[5] = v0;
        } else {
          u0 = textureRect.x / atlasWidth;
          u1 = (textureRect.x + textureRect.width) / atlasWidth;
          v0 = textureRect.y / atlasHeight;
          v1 = (textureRect.y + textureRect.height) / atlasHeight;
          uvs[0] = uvs[4] = u0;
          uvs[2] = uvs[6] = u1;
          uvs[1] = uvs[3] = v1;
          uvs[5] = uvs[7] = v0;
        }
      }

      function _getVertAngle(start, end) {
        var placementX = end.x - start.x;
        var placementY = end.y - start.y;

        if (placementX === 0 && placementY === 0) {
          return 0;
        } else if (placementX === 0) {
          if (placementY > 0) {
            return Math.PI * 0.5;
          } else {
            return Math.PI * 1.5;
          }
        } else {
          var angle = Math.atan(placementY / placementX);

          if (placementX < 0) {
            angle += Math.PI;
          }

          return angle;
        }
      }

      function _generateTriangle(dataList, offset, vert0, vert1, vert2) {
        var vertices = _vertices;
        var v0x = vertices[0];
        var v0y = vertices[1];
        var v1x = vertices[2];
        var v1y = vertices[3];
        dataList[offset].x = vert0.x;
        dataList[offset].y = vert0.y;
        dataList[offset + 1].x = vert1.x;
        dataList[offset + 1].y = vert1.y;
        dataList[offset + 2].x = vert2.x;
        dataList[offset + 2].y = vert2.y;
        var progressX = 0;
        var progressY = 0;
        progressX = (vert0.x - v0x) / (v1x - v0x);
        progressY = (vert0.y - v0y) / (v1y - v0y);

        _generateUV(progressX, progressY, dataList, offset);

        progressX = (vert1.x - v0x) / (v1x - v0x);
        progressY = (vert1.y - v0y) / (v1y - v0y);

        _generateUV(progressX, progressY, dataList, offset + 1);

        progressX = (vert2.x - v0x) / (v1x - v0x);
        progressY = (vert2.y - v0y) / (v1y - v0y);

        _generateUV(progressX, progressY, dataList, offset + 2);
      }

      function _generateUV(progressX, progressY, data, offset) {
        var uvs = _uvs;
        var px1 = uvs[0] + (uvs[2] - uvs[0]) * progressX;
        var px2 = uvs[4] + (uvs[6] - uvs[4]) * progressX;
        var py1 = uvs[1] + (uvs[3] - uvs[1]) * progressX;
        var py2 = uvs[5] + (uvs[7] - uvs[5]) * progressX;
        var uv = data[offset];
        uv.u = px1 + (px2 - px1) * progressY;
        uv.v = py1 + (py2 - py1) * progressY;
      }
      /**
       * radialFilled 组装器
       * 可通过 `UI.radialFilled` 获取该组装器。
       */


      var radialFilled = {
        useModel: false,
        createData: function createData(sprite) {
          return sprite.requestRenderData();
        },
        updateRenderData: function updateRenderData(sprite) {
          var frame = sprite.spriteFrame; // TODO: Material API design and export from editor could affect the material activation process
          // need to update the logic here
          // if (frame) {
          //     if (!frame._original && dynamicAtlasManager) {
          //         dynamicAtlasManager.insertSpriteFrame(frame);
          //     }
          //     if (sprite._material._texture !== frame._texture) {
          //         sprite._activateMaterial();
          //     }
          // }

          var renderData = sprite.renderData;

          if (renderData && frame) {
            if (renderData.vertDirty || renderData.uvDirty) {
              var dataList = renderData.data;
              var fillStart = sprite.fillStart;
              var fillRange = sprite.fillRange;

              if (fillRange < 0) {
                fillStart += fillRange;
                fillRange = -fillRange;
              } // do round fill start [0,1), include 0, exclude 1


              while (fillStart >= 1.0) {
                fillStart -= 1.0;
              }

              while (fillStart < 0.0) {
                fillStart += 1.0;
              }

              fillStart *= PI_2;
              fillRange *= PI_2;
              var fillEnd = fillStart + fillRange; // build vertices

              _calculateVertices(sprite); // build uvs


              _calculateUVs(frame);

              _calcIntersectedPoints(_vertices[0], _vertices[2], _vertices[1], _vertices[3], _center, fillStart, _intersectPoint_1);

              _calcIntersectedPoints(_vertices[0], _vertices[2], _vertices[1], _vertices[3], _center, fillStart + fillRange, _intersectPoint_2);

              var offset = 0;

              for (var triangleIndex = 0; triangleIndex < 4; ++triangleIndex) {
                var triangle = _triangles[triangleIndex];

                if (!triangle) {
                  continue;
                } // all in


                if (fillRange >= PI_2) {
                  renderData.dataLength = offset + 3;

                  _generateTriangle(dataList, offset, _center, _vertPos[triangle.x], _vertPos[triangle.y]);

                  offset += 3;
                  continue;
                } // test against


                var startAngle = _getVertAngle(_center, _vertPos[triangle.x]);

                var endAngle = _getVertAngle(_center, _vertPos[triangle.y]);

                if (endAngle < startAngle) {
                  endAngle += PI_2;
                }

                startAngle -= PI_2;
                endAngle -= PI_2; // testing

                for (var testIndex = 0; testIndex < 3; ++testIndex) {
                  if (startAngle >= fillEnd) ; else if (startAngle >= fillStart) {
                    renderData.dataLength = offset + 3;

                    if (endAngle >= fillEnd) {
                      // startAngle to fillEnd
                      _generateTriangle(dataList, offset, _center, _vertPos[triangle.x], _intersectPoint_2[triangleIndex]);
                    } else {
                      // startAngle to endAngle
                      _generateTriangle(dataList, offset, _center, _vertPos[triangle.x], _vertPos[triangle.y]);
                    }

                    offset += 3;
                  } else {
                    // startAngle < fillStart
                    if (endAngle <= fillStart) ; else if (endAngle <= fillEnd) {
                      renderData.dataLength = offset + 3; // fillStart to endAngle

                      _generateTriangle(dataList, offset, _center, _intersectPoint_1[triangleIndex], _vertPos[triangle.y]);

                      offset += 3;
                    } else {
                      renderData.dataLength = offset + 3; // fillStart to fillEnd

                      _generateTriangle(dataList, offset, _center, _intersectPoint_1[triangleIndex], _intersectPoint_2[triangleIndex]);

                      offset += 3;
                    }
                  } // add 2 * PI


                  startAngle += PI_2;
                  endAngle += PI_2;
                }
              }

              renderData.indicesCount = renderData.vertexCount = offset;
              renderData.vertDirty = renderData.uvDirty = false;
            }
          }
        },
        fillBuffers: function fillBuffers(comp, renderer) {
          var node = comp.node;
          var renderData = comp.renderData;
          fillVertices3D(node, renderer, renderData, comp.color);
        }
      };

      /*
       Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

       https://www.cocos.com/

       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated engine source code (the "Software"), a limited,
       worldwide, royalty-free, non-assignable, revocable and non-exclusive license
       to use Cocos Creator solely to develop games on your target platforms. You shall
       not use Cocos Creator software for developing other software or tools that's
       used for developing games. You are not granted to publish, distribute,
       sublicense, and/or sell copies of Cocos Creator.

       The software or tools in this License Agreement are licensed, not sold.
       Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */
      var vec3_temps$1 = [];

      for (var i$1 = 0; i$1 < 4; i$1++) {
        vec3_temps$1.push(new Vec3());
      }
      /**
       * simple 组装器
       * 可通过 `UI.simple` 获取该组装器。
       */


      var simple = {
        createData: function createData(sprite) {
          var renderData = sprite.requestRenderData();
          renderData.dataLength = 4;
          renderData.vertexCount = 4;
          renderData.indicesCount = 6;
          renderData.vData = new Float32Array(4 * 9);
          return renderData;
        },
        updateRenderData: function updateRenderData(sprite) {
          var frame = sprite.spriteFrame; // TODO: Material API design and export from editor could affect the material activation process
          // need to update the logic here
          // if (frame) {
          //     if (!frame._original && dynamicAtlasManager) {
          //         dynamicAtlasManager.insertSpriteFrame(frame);
          //     }
          //     if (sprite._material._texture !== frame._texture) {
          //         sprite._activateMaterial();
          //     }
          // }

          var renderData = sprite.renderData;

          if (renderData && frame) {
            if (renderData.vertDirty) {
              this.updateVertexData(sprite);
            }

            if (renderData.uvDirty) {
              this.updateUvs(sprite);
            }
          }
        },
        fillBuffers: function fillBuffers(sprite, renderer) {
          if (sprite === null) {
            return;
          } // const buffer: MeshBuffer = renderer.createBuffer(
          //     sprite.renderData!.vertexCount,
          //     sprite.renderData!.indicesCount,
          // );
          // const commitBuffer: IUIRenderData = renderer.createUIRenderData();


          var dataList = sprite.renderData.data;
          var node = sprite.node;
          var buffer = renderer.currBufferBatch;
          var vertexOffset = buffer.byteOffset >> 2;
          var indicesOffset = buffer.indicesOffset;
          var vertexId = buffer.vertexOffset;
          var isRecreate = buffer.request();

          if (!isRecreate) {
            buffer = renderer.currBufferBatch;
            vertexOffset = 0;
            indicesOffset = 0;
            vertexId = 0;
          } // buffer data may be reallocated, need get reference after request.


          var vBuf = buffer.vData;
          var iBuf = buffer.iData;
          var vData = sprite.renderData.vData;
          var data0 = dataList[0];
          var data3 = dataList[3];
          var matrix = node.worldMatrix;
          var a = matrix.m00;
          var b = matrix.m01;
          var c = matrix.m04;
          var d = matrix.m05;
          var tx = matrix.m12;
          var ty = matrix.m13;
          var vl = data0.x;
          var vr = data3.x;
          var vb = data0.y;
          var vt = data3.y;
          var al = a * vl;
          var ar = a * vr;
          var bl = b * vl;
          var br = b * vr;
          var cb = c * vb;
          var ct = c * vt;
          var db = d * vb;
          var dt = d * vt; // left bottom

          vData[0] = al + cb + tx;
          vData[1] = bl + db + ty; // right bottom

          vData[9] = ar + cb + tx;
          vData[10] = br + db + ty; // left top

          vData[18] = al + ct + tx;
          vData[19] = bl + dt + ty; // right top

          vData[27] = ar + ct + tx;
          vData[28] = br + dt + ty;
          vBuf.set(vData, vertexOffset); // fill index data

          iBuf[indicesOffset++] = vertexId;
          iBuf[indicesOffset++] = vertexId + 1;
          iBuf[indicesOffset++] = vertexId + 2;
          iBuf[indicesOffset++] = vertexId + 2;
          iBuf[indicesOffset++] = vertexId + 1;
          iBuf[indicesOffset++] = vertexId + 3;
        },
        updateVertexData: function updateVertexData(sprite) {
          var renderData = sprite.renderData;

          if (!renderData) {
            return;
          }

          var uiTrans = sprite.node._uiProps.uiTransformComp;
          var dataList = renderData.data;
          var cw = uiTrans.width;
          var ch = uiTrans.height;
          var appX = uiTrans.anchorX * cw;
          var appY = uiTrans.anchorY * ch;
          var l = 0;
          var b = 0;
          var r = 0;
          var t = 0;

          if (sprite.trim) {
            l = -appX;
            b = -appY;
            r = cw - appX;
            t = ch - appY;
          } else {
            var frame = sprite.spriteFrame;
            var originSize = frame.getOriginalSize();
            var rect = frame.getRect();
            var ow = originSize.width;
            var oh = originSize.height;
            var rw = rect.width;
            var rh = rect.height;
            var offset = frame.getOffset();
            var scaleX = cw / ow;
            var scaleY = ch / oh;
            var trimLeft = offset.x + (ow - rw) / 2;
            var trimRight = offset.x - (ow - rw) / 2;
            var trimBottom = offset.y + (oh - rh) / 2;
            var trimTop = offset.y - (oh - rh) / 2;
            l = trimLeft * scaleX - appX;
            b = trimBottom * scaleY - appY;
            r = cw + trimRight * scaleX - appX;
            t = ch + trimTop * scaleY - appY;
          }

          dataList[0].x = l;
          dataList[0].y = b;
          dataList[0].z = 0;
          dataList[3].x = r;
          dataList[3].y = t;
          dataList[3].z = 0;
          renderData.vertDirty = false;
        },
        updateUvs: function updateUvs(sprite) {
          var renderData = sprite.renderData;
          var vData = renderData.vData;
          var uv = sprite.spriteFrame.uv;
          vData[3] = uv[0];
          vData[4] = uv[1];
          vData[12] = uv[2];
          vData[13] = uv[3];
          vData[21] = uv[4];
          vData[22] = uv[5];
          vData[30] = uv[6];
          vData[31] = uv[7];
          renderData.uvDirty = false;
        },
        updateColor: function updateColor(sprite) {
          var vData = sprite.renderData.vData;
          var colorOffset = 5;
          var color = sprite.color;
          var colorR = color.r / 255;
          var colorG = color.g / 255;
          var colorB = color.b / 255;
          var colorA = color.a / 255;

          for (var _i = 0; _i < 4; _i++) {
            vData[colorOffset] = colorR;
            vData[colorOffset + 1] = colorG;
            vData[colorOffset + 2] = colorB;
            vData[colorOffset + 3] = colorA;
            colorOffset += 9;
          }
        }
      };

      /*
       Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

       http://www.cocos.com

       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated engine source code (the "Software"), a limited,
       worldwide, royalty-free, non-assignable, revocable and non-exclusive license
       to use Cocos Creator solely to develop games on your target platforms. You shall
       not use Cocos Creator software for developing other software or tools that's
       used for developing games. You are not granted to publish, distribute,
       sublicense, and/or sell copies of Cocos Creator.

       The software or tools in this License Agreement are licensed, not sold.
       Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */
      var vec3_temp$1 = new Vec3();
      var matrix$1 = new Mat4();
      /**
       * sliced 组装器
       * 可通过 `UI.sliced` 获取该组装器。
       */

      var sliced = {
        useModel: false,
        createData: function createData(sprite) {
          var renderData = sprite.requestRenderData(); // 0-4 for local vertex
          // 5-20 for world vertex

          renderData.dataLength = 20;
          renderData.vertexCount = 16;
          renderData.indicesCount = 54;
          return renderData;
        },
        updateRenderData: function updateRenderData(sprite) {
          var frame = sprite.spriteFrame; // TODO: Material API design and export from editor could affect the material activation process
          // need to update the logic here
          // if (frame) {
          //     if (!frame._original && dynamicAtlasManager) {
          //         dynamicAtlasManager.insertSpriteFrame(frame);
          //     }
          //     if (sprite._material._texture !== frame._texture) {
          //         sprite._activateMaterial();
          //     }
          // }

          var renderData = sprite.renderData;

          if (renderData && frame) {
            var vertDirty = renderData.vertDirty;

            if (vertDirty) {
              this.updateVertexData(sprite);
              this.updateWorldVertexData(sprite);
            }
          }
        },
        updateVertexData: function updateVertexData(sprite) {
          var renderData = sprite.renderData;
          var dataList = renderData.data;
          var uiTrans = sprite.node._uiProps.uiTransformComp;
          var width = uiTrans.width;
          var height = uiTrans.height;
          var appX = uiTrans.anchorX * width;
          var appY = uiTrans.anchorY * height;
          var frame = sprite.spriteFrame;
          var leftWidth = frame.insetLeft;
          var rightWidth = frame.insetRight;
          var topHeight = frame.insetTop;
          var bottomHeight = frame.insetBottom;
          var sizableWidth = width - leftWidth - rightWidth;
          var sizableHeight = height - topHeight - bottomHeight;
          var xScale = width / (leftWidth + rightWidth);
          var yScale = height / (topHeight + bottomHeight);
          xScale = isNaN(xScale) || xScale > 1 ? 1 : xScale;
          yScale = isNaN(yScale) || yScale > 1 ? 1 : yScale;
          sizableWidth = sizableWidth < 0 ? 0 : sizableWidth;
          sizableHeight = sizableHeight < 0 ? 0 : sizableHeight;
          dataList[0].x = -appX;
          dataList[0].y = -appY;
          dataList[1].x = leftWidth * xScale - appX;
          dataList[1].y = bottomHeight * yScale - appY;
          dataList[2].x = dataList[1].x + sizableWidth;
          dataList[2].y = dataList[1].y + sizableHeight;
          dataList[3].x = width - appX;
          dataList[3].y = height - appY;
          renderData.vertDirty = false;
        },
        fillBuffers: function fillBuffers(sprite, renderer) {
          if (sprite.node.hasChangedFlags) {
            this.updateWorldVertexData(sprite);
          }

          var buffer = renderer.currBufferBatch;
          var renderData = sprite.renderData; // const node: Node = sprite.node;
          // const color: Color = sprite.color;

          var dataList = renderData.data;
          var vertexOffset = buffer.byteOffset >> 2;
          var vertexCount = renderData.vertexCount;
          var indicesOffset = buffer.indicesOffset;
          var vertexId = buffer.vertexOffset;
          var uvSliced = sprite.spriteFrame.uvSliced;
          var isRecreate = buffer.request(vertexCount, renderData.indicesCount);

          if (!isRecreate) {
            buffer = renderer.currBufferBatch;
            vertexOffset = 0;
            indicesOffset = 0;
            vertexId = 0;
          } // buffer data may be realloc, need get reference after request.


          var vBuf = buffer.vData; // const  uintbuf = buffer._uintVData,

          var iBuf = buffer.iData;

          for (var i = 4; i < 20; ++i) {
            var vert = dataList[i];
            var uvs = uvSliced[i - 4];
            vBuf[vertexOffset++] = vert.x;
            vBuf[vertexOffset++] = vert.y;
            vBuf[vertexOffset++] = vert.z;
            vBuf[vertexOffset++] = uvs.u;
            vBuf[vertexOffset++] = uvs.v;
            Color.toArray(vBuf, sprite.color, vertexOffset);
            vertexOffset += 4; // uintbuf[vertexOffset++] = color;
          }

          for (var r = 0; r < 3; ++r) {
            for (var c = 0; c < 3; ++c) {
              var start = vertexId + r * 4 + c;
              iBuf[indicesOffset++] = start;
              iBuf[indicesOffset++] = start + 1;
              iBuf[indicesOffset++] = start + 4;
              iBuf[indicesOffset++] = start + 1;
              iBuf[indicesOffset++] = start + 5;
              iBuf[indicesOffset++] = start + 4;
            }
          }
        },
        updateWorldVertexData: function updateWorldVertexData(sprite) {
          var node = sprite.node;
          var dataList = sprite.renderData.data;
          node.getWorldMatrix(matrix$1);

          for (var row = 0; row < 4; ++row) {
            var rowD = dataList[row];

            for (var col = 0; col < 4; ++col) {
              var colD = dataList[col];
              var world = dataList[4 + row * 4 + col];
              Vec3.set(vec3_temp$1, colD.x, rowD.y, 0);
              Vec3.transformMat4(world, vec3_temp$1, matrix$1);
            }
          }
        }
      };

      /*
       Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

       http://www.cocos.com

       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated engine source code (the "Software"), a limited,
       worldwide, royalty-free, non-assignable, revocable and non-exclusive license
       to use Cocos Creator solely to develop games on your target platforms. You shall
       not use Cocos Creator software for developing other software or tools that's
       used for developing games. You are not granted to publish, distribute,
       sublicense, and/or sell copies of Cocos Creator.

       The software or tools in this License Agreement are licensed, not sold.
       Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */
      var vec3_temps$2 = [];

      for (var i$2 = 0; i$2 < 4; i$2++) {
        vec3_temps$2.push(new Vec3());
      }

      var _perVertexLength = 9;
      var tilled = {
        useModel: false,
        createData: function createData(sprite) {
          return sprite.requestRenderData();
        },
        updateRenderData: function updateRenderData(sprite) {
          var renderData = sprite.renderData;
          var frame = sprite.spriteFrame;

          if (!frame || !renderData || !(renderData.uvDirty || renderData.vertDirty)) {
            return;
          }

          var uiTrans = sprite.node._uiProps.uiTransformComp;
          var contentWidth = Math.abs(uiTrans.width);
          var contentHeight = Math.abs(uiTrans.height);
          var appX = uiTrans.anchorX * contentWidth;
          var appY = uiTrans.anchorY * contentHeight;
          var rect = frame.getRect();
          var rectWidth = rect.width;
          var rectHeight = rect.height;
          var hRepeat = contentWidth / rectWidth;
          var vRepeat = contentHeight / rectHeight;
          var row = Math.ceil(vRepeat);
          var col = Math.ceil(hRepeat);
          var dataList = renderData.data;
          renderData.dataLength = Math.max(8, row + 1, col + 1);

          for (var _i = 0; _i <= col; ++_i) {
            dataList[_i].x = Math.min(rectWidth * _i, contentWidth) - appX;
          }

          for (var _i2 = 0; _i2 <= row; ++_i2) {
            dataList[_i2].y = Math.min(rectHeight * _i2, contentHeight) - appY;
          } // update data property


          renderData.vertexCount = row * col * 4;
          renderData.indicesCount = row * col * 6;
          renderData.uvDirty = false;
          renderData.vertDirty = false;
        },
        fillBuffers: function fillBuffers(sprite, renderer) {
          var node = sprite.node;
          var uiTrans = sprite.node._uiProps.uiTransformComp;
          var renderData = sprite.renderData; // buffer

          var buffer = renderer.currBufferBatch; // buffer data may be realloc, need get reference after request.

          var indicesOffset = buffer.indicesOffset;
          var vertexOffset = buffer.byteOffset >> 2;
          var vertexId = buffer.vertexOffset;
          var vertexCount = renderData.vertexCount;
          var indicesCount = renderData.indicesCount;
          var vBuf = buffer.vData;
          var iBuf = buffer.iData;
          var isRecreate = buffer.request(vertexCount, indicesCount);

          if (!isRecreate) {
            buffer = renderer.currBufferBatch;
            vertexOffset = 0;
            indicesOffset = 0;
            vertexId = 0;
          }

          var frame = sprite.spriteFrame;
          var rotated = frame.isRotated();
          var uv = frame.uv;
          var rect = frame.getRect();
          var contentWidth = Math.abs(uiTrans.width);
          var contentHeight = Math.abs(uiTrans.height);
          var hRepeat = contentWidth / rect.width;
          var vRepeat = contentHeight / rect.height;
          var row = Math.ceil(vRepeat);
          var col = Math.ceil(hRepeat);
          var matrix = node.worldMatrix;
          this.fillVertices(vBuf, vertexOffset, matrix, row, col, renderData.data);
          var offset = _perVertexLength;
          var offset1 = offset;
          var offset2 = offset * 2;
          var offset3 = offset * 3;
          var offset4 = offset * 4;
          var coefU = 0;
          var coefV = 0;

          for (var yIndex = 0, yLength = row; yIndex < yLength; ++yIndex) {
            coefV = Math.min(1, vRepeat - yIndex);

            for (var xIndex = 0, xLength = col; xIndex < xLength; ++xIndex) {
              coefU = Math.min(1, hRepeat - xIndex);
              var vertexOffsetU = vertexOffset + 3;
              var vertexOffsetV = vertexOffsetU + 1; // UV

              if (rotated) {
                // lb
                vBuf[vertexOffsetU] = uv[0];
                vBuf[vertexOffsetV] = uv[1]; // rb

                vBuf[vertexOffsetU + offset1] = uv[0];
                vBuf[vertexOffsetV + offset1] = uv[1] + (uv[7] - uv[1]) * coefU; // lt

                vBuf[vertexOffsetU + offset2] = uv[0] + (uv[6] - uv[0]) * coefV;
                vBuf[vertexOffsetV + offset2] = uv[1]; // rt

                vBuf[vertexOffsetU + offset3] = vBuf[vertexOffsetU + offset2];
                vBuf[vertexOffsetV + offset3] = vBuf[vertexOffsetV + offset1];
              } else {
                // lb
                vBuf[vertexOffsetU] = uv[0];
                vBuf[vertexOffsetV] = uv[1]; // rb

                vBuf[vertexOffsetU + offset1] = uv[0] + (uv[6] - uv[0]) * coefU;
                vBuf[vertexOffsetV + offset1] = uv[1]; // lt

                vBuf[vertexOffsetU + offset2] = uv[0];
                vBuf[vertexOffsetV + offset2] = uv[1] + (uv[7] - uv[1]) * coefV; // rt

                vBuf[vertexOffsetU + offset3] = vBuf[vertexOffsetU + offset1];
                vBuf[vertexOffsetV + offset3] = vBuf[vertexOffsetV + offset2];
              } // color


              Color.toArray(vBuf, sprite.color, vertexOffsetV + 1);
              Color.toArray(vBuf, sprite.color, vertexOffsetV + offset1 + 1);
              Color.toArray(vBuf, sprite.color, vertexOffsetV + offset2 + 1);
              Color.toArray(vBuf, sprite.color, vertexOffsetV + offset3 + 1);
              vertexOffset += offset4;
            }
          } // update indices


          for (var _i3 = 0; _i3 < indicesCount; _i3 += 6) {
            iBuf[indicesOffset++] = vertexId;
            iBuf[indicesOffset++] = vertexId + 1;
            iBuf[indicesOffset++] = vertexId + 2;
            iBuf[indicesOffset++] = vertexId + 1;
            iBuf[indicesOffset++] = vertexId + 3;
            iBuf[indicesOffset++] = vertexId + 2;
            vertexId += 4;
          }
        },
        fillVertices: function fillVertices(vBuf, vertexOffset, matrix, row, col, dataList) {
          var x = 0;
          var x1 = 0;
          var y = 0;
          var y1 = 0;

          for (var yIndex = 0, yLength = row; yIndex < yLength; ++yIndex) {
            y = dataList[yIndex].y;
            y1 = dataList[yIndex + 1].y;

            for (var xIndex = 0, xLength = col; xIndex < xLength; ++xIndex) {
              x = dataList[xIndex].x;
              x1 = dataList[xIndex + 1].x;
              Vec3.set(vec3_temps$2[0], x, y, 0);
              Vec3.set(vec3_temps$2[1], x1, y, 0);
              Vec3.set(vec3_temps$2[2], x, y1, 0);
              Vec3.set(vec3_temps$2[3], x1, y1, 0);

              for (var _i4 = 0; _i4 < 4; _i4++) {
                var vec3_temp = vec3_temps$2[_i4];
                Vec3.transformMat4(vec3_temp, vec3_temp, matrix);
                var offset = _i4 * _perVertexLength;
                vBuf[vertexOffset + offset] = vec3_temp.x;
                vBuf[vertexOffset + offset + 1] = vec3_temp.y;
                vBuf[vertexOffset + offset + 2] = vec3_temp.z;
              }

              vertexOffset += 36;
            }
          }
        }
      };

      /*
       Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

       http://www.cocos.com

       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated engine source code (the "Software"), a limited,
       worldwide, royalty-free, non-assignable, revocable and non-exclusive license
       to use Cocos Creator solely to develop games on your target platforms. You shall
       not use Cocos Creator software for developing other software or tools that's
       used for developing games. You are not granted to publish, distribute,
       sublicense, and/or sell copies of Cocos Creator.

       The software or tools in this License Agreement are licensed, not sold.
       Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */
      var SpriteType = Sprite.Type;
      var FillType$1 = Sprite.FillType; // Inline all type switch to avoid jit deoptimization during inlined function change

      var spriteAssembler = exports('spriteAssembler', {
        getAssembler: function getAssembler(spriteComp) {
          var util = simple;
          var comp = spriteComp;

          switch (comp.type) {
            case SpriteType.SLICED:
              util = sliced;
              break;

            case SpriteType.TILED:
              util = tilled;
              break;

            case SpriteType.FILLED:
              if (comp.fillType === FillType$1.RADIAL) {
                util = radialFilled;
              } else {
                util = barFilled;
              }

              break;
            // case SpriteType.MESH:
            //     util = meshRenderUtil;
            //     break;
          }

          return util;
        } // Skip invalid sprites (without own _assembler)
        // updateRenderData (sprite) {
        //     return sprite.__allocedDatas;
        // },

      });
      Sprite.Assembler = spriteAssembler;

      var _dec$q, _class$q;
      /**
       * @deprecated Since v1.2
       */

      var UIReorderComponent = exports('UIReorderComponent', (_dec$q = ccclass('cc.UIReorderComponent'), _dec$q(_class$q = function UIReorderComponent() {
        _classCallCheck(this, UIReorderComponent);

        warnID(1408, 'UIReorderComponent');
      }) || _class$q));
      legacyCC.UIReorderComponent = UIReorderComponent;
      legacyCC.ButtonComponent = Button;
      js.setClassAlias(Button, 'cc.ButtonComponent');
      legacyCC.EditBoxComponent = EditBox;
      js.setClassAlias(EditBox, 'cc.EditBoxComponent');
      legacyCC.LayoutComponent = Layout;
      js.setClassAlias(Layout, 'cc.LayoutComponent');
      legacyCC.MaskComponent = Mask;
      js.setClassAlias(Mask, 'cc.MaskComponent');
      legacyCC.LabelComponent = Label;
      js.setClassAlias(Label, 'cc.LabelComponent');
      legacyCC.LabelOutlineComponent = LabelOutline;
      js.setClassAlias(LabelOutline, 'cc.LabelOutlineComponent');
      legacyCC.ProgressBarComponent = ProgressBar;
      js.setClassAlias(ProgressBar, 'cc.ProgressBarComponent');
      legacyCC.RichTextComponent = RichText;
      js.setClassAlias(RichText, 'cc.RichTextComponent');
      legacyCC.ScrollViewComponent = ScrollView;
      js.setClassAlias(ScrollView, 'cc.ScrollViewComponent');
      legacyCC.ScrollBarComponent = ScrollBar;
      js.setClassAlias(ScrollBar, 'cc.ScrollBarComponent');
      legacyCC.SliderComponent = Slider;
      js.setClassAlias(Slider, 'cc.SliderComponent');
      legacyCC.SpriteComponent = Sprite;
      js.setClassAlias(Sprite, 'cc.SpriteComponent');
      legacyCC.ToggleComponent = Toggle;
      js.setClassAlias(Toggle, 'cc.ToggleComponent');
      legacyCC.ToggleContainerComponent = ToggleContainer;
      js.setClassAlias(ToggleContainer, 'cc.ToggleContainerComponent');
      legacyCC.UIModelComponent = UIMeshRenderer;
      js.setClassAlias(UIMeshRenderer, 'cc.UIModelComponent');
      legacyCC.WidgetComponent = Widget;
      js.setClassAlias(Widget, 'cc.WidgetComponent');
      legacyCC.GraphicsComponent = Graphics;
      js.setClassAlias(Graphics, 'cc.GraphicsComponent');
      legacyCC.PageViewComponent = PageView;
      js.setClassAlias(PageView, 'cc.PageViewComponent');
      legacyCC.PageViewIndicatorComponent = PageViewIndicator;
      js.setClassAlias(PageViewIndicator, 'cc.PageViewIndicatorComponent');
      js.setClassAlias(UIStaticBatch, 'cc.UIStaticBatchComponent');
      js.setClassAlias(UIOpacity, 'cc.UIOpacityComponent');
      legacyCC.SafeAreaComponent = SafeArea;
      js.setClassAlias(SafeArea, 'cc.SafeAreaComponent');
      js.setClassAlias(UICoordinateTracker, 'cc.UICoordinateTrackerComponent');
      legacyCC.BlockInputEventsComponent = BlockInputEvents;
      js.setClassAlias(BlockInputEvents, 'cc.BlockInputEventsComponent');

      /**
       * @hidden
       */
      legacyCC.UI = {
        MeshBuffer: MeshBuffer,
        UIVertexFormat: UIVertexFormat,
        // barFilled,
        // radialFilled,
        // simple,
        // sliced,
        // ttf,
        // bmfont,
        // letter,
        // mask,
        // maskEnd,
        // graphics,
        spriteAssembler: spriteAssembler,
        graphicsAssembler: graphicsAssemblerManager,
        labelAssembler: labelAssembler
      };

    }
  };
});
