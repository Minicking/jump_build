System.register(['./deprecated-4ec15e5e.js', './deprecated-b99c04b5.js'], function (exports) {
    'use strict';
    var legacyCC, _inherits, _createClass, Size, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _assertThisInitialized, Rect, Vec2, errorID, logID, JSB, RUNTIME_BASED, MINIGAME, EventTarget, _get, replaceProperty, ccenum, ccclass, type, executeInEditMode, _applyDecoratedDescriptor, displayOrder, tooltip, _initializerDefineProperty, _createForOfIteratorHelperLoose, serializable, Color, editable, help, menu, range, clamp, Component, SystemEventType, inputManager, EventListener, eventManager, GFXBlendFactor, disallowMultiple, requireComponent, UITransform, MaterialInstance, RenderData, builtinResMgr, RenderableComponent, SpriteAtlas, SpriteFrame, executionOrder, TextureBase, PixelFormat, ImageAsset, Node;
    return {
        setters: [function (module) {
            legacyCC = module.l;
            _inherits = module.b;
            _createClass = module.j;
            Size = module.T;
            _classCallCheck = module.d;
            _possibleConstructorReturn = module.e;
            _getPrototypeOf = module.f;
            _assertThisInitialized = module.i;
            Rect = module.W;
            Vec2 = module.H;
            errorID = module.y;
            logID = module.v;
            JSB = module.bA;
            RUNTIME_BASED = module.bB;
            MINIGAME = module.bC;
            EventTarget = module.az;
            _get = module.aN;
            replaceProperty = module.ao;
            ccenum = module.E;
            ccclass = module.c;
            type = module.t;
            executeInEditMode = module.b1;
            _applyDecoratedDescriptor = module._;
            displayOrder = module.b2;
            tooltip = module.a;
            _initializerDefineProperty = module.g;
            _createForOfIteratorHelperLoose = module.D;
            serializable = module.s;
            Color = module.Y;
            editable = module.F;
            help = module.h;
            menu = module.m;
            range = module.r;
            clamp = module.k;
            Component = module.C;
        }, function (module) {
            SystemEventType = module.bg;
            inputManager = module.d7;
            EventListener = module.d8;
            eventManager = module.b9;
            GFXBlendFactor = module.bF;
            disallowMultiple = module.d9;
            requireComponent = module.da;
            UITransform = module.db;
            MaterialInstance = module.aq;
            RenderData = module.dc;
            builtinResMgr = module.d2;
            RenderableComponent = module.d3;
            SpriteAtlas = module.aT;
            SpriteFrame = module.b7;
            executionOrder = module.dd;
            TextureBase = module.de;
            PixelFormat = module.df;
            ImageAsset = module.aX;
            Node = module.cW;
        }],
        execute: function () {

            exports('I', void 0);

            /*
             Copyright (c) 2011-2012 cocos2d-x.org
             Copyright (c) 2013-2016 Chukong Technologies Inc.
             Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

             http://www.cocos2d-x.org

             Permission is hereby granted, free of charge, to any person obtaining a copy
             of this software and associated documentation files (the "Software"), to deal
             in the Software without restriction, including without limitation the rights
             to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             copies of the Software, and to permit persons to whom the Software is
             furnished to do so, subject to the following conditions:

             The above copyright notice and this permission notice shall be included in
             all copies or substantial portions of the Software.

             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             THE SOFTWARE.
            */
            /**
             * `visibleRect` is a singleton object which defines the actual visible rect of the current view,
             * it should represent the same rect as `view.getViewportRect()`
             */

            var visibleRect = exports('c', {
              /**
               * Top left coordinate of the screen related to the game scene.
               */
              topLeft: legacyCC.v2(0, 0),

              /**
               * Top right coordinate of the screen related to the game scene.
               */
              topRight: legacyCC.v2(0, 0),

              /**
               * Top center coordinate of the screen related to the game scene.
               */
              top: legacyCC.v2(0, 0),

              /**
               * Bottom left coordinate of the screen related to the game scene.
               */
              bottomLeft: legacyCC.v2(0, 0),

              /**
               * Bottom right coordinate of the screen related to the game scene.
               */
              bottomRight: legacyCC.v2(0, 0),

              /**
               * Bottom center coordinate of the screen related to the game scene.
               */
              bottom: legacyCC.v2(0, 0),

              /**
               * Center coordinate of the screen related to the game scene.
               */
              center: legacyCC.v2(0, 0),

              /**
               * Left center coordinate of the screen related to the game scene.
               */
              left: legacyCC.v2(0, 0),

              /**
               * Right center coordinate of the screen related to the game scene.
               */
              right: legacyCC.v2(0, 0),

              /**
               * Width of the screen.
               */
              width: 0,

              /**
               * Height of the screen.
               */
              height: 0,

              /**
               * initialize
               */
              init: function init(visibleRect_) {
                var w = this.width = visibleRect_.width;
                var h = this.height = visibleRect_.height;
                var l = visibleRect_.x;
                var b = visibleRect_.y;
                var t = b + h;
                var r = l + w; // top

                this.topLeft.x = l;
                this.topLeft.y = t;
                this.topRight.x = r;
                this.topRight.y = t;
                this.top.x = l + w / 2;
                this.top.y = t; // bottom

                this.bottomLeft.x = l;
                this.bottomLeft.y = b;
                this.bottomRight.x = r;
                this.bottomRight.y = b;
                this.bottom.x = l + w / 2;
                this.bottom.y = b; // center

                this.center.x = l + w / 2;
                this.center.y = b + h / 2; // left

                this.left.x = l;
                this.left.y = b + h / 2; // right

                this.right.x = r;
                this.right.y = b + h / 2;
              }
            });
            legacyCC.visibleRect = visibleRect;

            var BrowserGetter = /*#__PURE__*/function () {
              function BrowserGetter() {
                _classCallCheck(this, BrowserGetter);

                this.html = void 0;
                this.meta = {
                  width: 'device-width'
                };
                this.adaptationType = legacyCC.sys.browserType;
              }

              _createClass(BrowserGetter, [{
                key: "init",
                value: function init() {
                  {
                    this.html = document.getElementsByTagName('html')[0];
                  }
                }
              }, {
                key: "availWidth",
                value: function availWidth(frame) {
                  if (legacyCC.sys.isMobile || !frame || frame === this.html) {
                    return window.innerWidth;
                  } else {
                    return frame.clientWidth;
                  }
                }
              }, {
                key: "availHeight",
                value: function availHeight(frame) {
                  if (legacyCC.sys.isMobile || !frame || frame === this.html) {
                    return window.innerHeight;
                  } else {
                    return frame.clientHeight;
                  }
                }
              }]);

              return BrowserGetter;
            }();

            var __BrowserGetter = new BrowserGetter();

            if (legacyCC.sys.os === legacyCC.sys.OS_IOS) {
              // All browsers are WebView
              __BrowserGetter.adaptationType = legacyCC.sys.BROWSER_TYPE_SAFARI;
            }

            switch (__BrowserGetter.adaptationType) {
              case legacyCC.sys.BROWSER_TYPE_SAFARI:
                __BrowserGetter.meta['minimal-ui'] = 'true';

              case legacyCC.sys.BROWSER_TYPE_SOUGOU:
              case legacyCC.sys.BROWSER_TYPE_UC:
                __BrowserGetter.availWidth = function (frame) {
                  return frame.clientWidth;
                };

                __BrowserGetter.availHeight = function (frame) {
                  return frame.clientHeight;
                };

                break;
            }
            /**
             * @en View represents the game window.<br/>
             * It's main task include: <br/>
             *  - Apply the design resolution policy to the UI Canvas<br/>
             *  - Provide interaction with the window, like resize event on web, retina display support, etc...<br/>
             *  - Manage the scale and translation of canvas related to the frame on Web<br/>
             * <br/>
             * With {{view}} as its singleton initialized by the engine, you don't need to call any constructor or create functions,<br/>
             * the standard way to use it is by calling:<br/>
             *  - view.methodName(); <br/>
             * @zh View 代表游戏窗口视图，它的核心功能包括：
             *  - 对所有 UI Canvas 进行设计分辨率适配。
             *  - 提供窗口视图的交互，比如监听 resize 事件，控制 retina 屏幕适配，等等。
             *  - 控制 Canvas 节点相对于外层 DOM 节点的缩放和偏移。
             * 引擎会自动初始化它的单例对象 {{view}}，所以你不需要实例化任何 View，只需要直接使用 `view.methodName();`
             */


            var View = exports('V', /*#__PURE__*/function (_EventTarget) {
              _inherits(View, _EventTarget);

              function View() {
                var _this;

                _classCallCheck(this, View);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(View).call(this));
                _this._resizeWithBrowserSize = void 0;
                _this._designResolutionSize = void 0;
                _this._originalDesignResolutionSize = void 0;
                _this._frameSize = void 0;
                _this._scaleX = void 0;
                _this._scaleY = void 0;
                _this._viewportRect = void 0;
                _this._visibleRect = void 0;
                _this._autoFullScreen = void 0;
                _this._devicePixelRatio = void 0;
                _this._maxPixelRatio = void 0;
                _this._retinaEnabled = void 0;
                _this._resizeCallback = void 0;
                _this._resizing = void 0;
                _this._orientationChanging = void 0;
                _this._isRotated = void 0;
                _this._orientation = void 0;
                _this._isAdjustViewport = void 0;
                _this._antiAliasEnabled = void 0;
                _this._resolutionPolicy = void 0;
                _this._rpExactFit = void 0;
                _this._rpShowAll = void 0;
                _this._rpNoBorder = void 0;
                _this._rpFixedHeight = void 0;
                _this._rpFixedWidth = void 0;

                var _t = _assertThisInitialized(_this);

                var _strategyer = ContainerStrategy;
                var _strategy = ContentStrategy; // Size of parent node that contains cc.game.container and cc.game.canvas

                _this._frameSize = new Size(0, 0); // resolution size, it is the size appropriate for the app resources.

                _this._designResolutionSize = new Size(0, 0);
                _this._originalDesignResolutionSize = new Size(0, 0);
                _this._scaleX = 1;
                _this._scaleY = 1; // Viewport is the container's rect related to content's coordinates in pixel

                _this._viewportRect = new Rect(0, 0, 0, 0); // The visible rect in content's coordinate in point

                _this._visibleRect = new Rect(0, 0, 0, 0); // Auto full screen disabled by default

                _this._autoFullScreen = false; // The device's pixel ratio (for retina displays)

                _this._devicePixelRatio = 1;

                {
                  _this._maxPixelRatio = 2;
                } // Retina disabled by default


                _this._retinaEnabled = false; // Custom callback for resize event

                _this._resizeCallback = null;
                _this._resizing = false;
                _this._resizeWithBrowserSize = false;
                _this._orientationChanging = true;
                _this._isRotated = false;
                _this._orientation = legacyCC.macro.ORIENTATION_AUTO;
                _this._isAdjustViewport = true;
                _this._antiAliasEnabled = false; // Setup system default resolution policies

                _this._rpExactFit = new ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.EXACT_FIT);
                _this._rpShowAll = new ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.SHOW_ALL);
                _this._rpNoBorder = new ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.NO_BORDER);
                _this._rpFixedHeight = new ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.FIXED_HEIGHT);
                _this._rpFixedWidth = new ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.FIXED_WIDTH);
                _this._resolutionPolicy = _this._rpShowAll;
                legacyCC.game.once(legacyCC.Game.EVENT_ENGINE_INITED, _this.init, _assertThisInitialized(_this));
                return _this;
              }

              _createClass(View, [{
                key: "init",
                value: function init() {
                  __BrowserGetter.init();

                  this._initFrameSize();

                  this.enableAntiAlias(true);
                  var w = legacyCC.game.canvas.width;
                  var h = legacyCC.game.canvas.height;
                  this._designResolutionSize.width = w;
                  this._designResolutionSize.height = h;
                  this._originalDesignResolutionSize.width = w;
                  this._originalDesignResolutionSize.height = h;
                  this._viewportRect.width = w;
                  this._viewportRect.height = h;
                  this._visibleRect.width = w;
                  this._visibleRect.height = h;
                  legacyCC.winSize.width = this._visibleRect.width;
                  legacyCC.winSize.height = this._visibleRect.height;

                  if (legacyCC.visibleRect) {
                    legacyCC.visibleRect.init(this._visibleRect);
                  }
                }
                /**
                 * @en
                 * Sets whether resize canvas automatically when browser's size changed.<br/>
                 * Useful only on web.
                 * @zh 设置当发现浏览器的尺寸改变时，是否自动调整 canvas 尺寸大小。
                 * 仅在 Web 模式下有效。
                 * @param enabled - Whether enable automatic resize with browser's resize event
                 */

              }, {
                key: "resizeWithBrowserSize",
                value: function resizeWithBrowserSize(enabled) {
                  if (enabled) {
                    // enable
                    if (!this._resizeWithBrowserSize) {
                      this._resizeWithBrowserSize = true;
                      window.addEventListener('resize', this._resizeEvent);
                      window.addEventListener('orientationchange', this._orientationChange);
                    }
                  } else {
                    // disable
                    if (this._resizeWithBrowserSize) {
                      this._resizeWithBrowserSize = false;
                      window.removeEventListener('resize', this._resizeEvent);
                      window.removeEventListener('orientationchange', this._orientationChange);
                    }
                  }
                }
                /**
                 * @en
                 * Sets the callback function for `view`'s resize action,<br/>
                 * this callback will be invoked before applying resolution policy, <br/>
                 * so you can do any additional modifications within the callback.<br/>
                 * Useful only on web.
                 * @zh 设置 `view` 调整视窗尺寸行为的回调函数，
                 * 这个回调函数会在应用适配模式之前被调用，
                 * 因此你可以在这个回调函数内添加任意附加改变，
                 * 仅在 Web 平台下有效。
                 * @param callback - The callback function
                 */

              }, {
                key: "setResizeCallback",
                value: function setResizeCallback(callback) {
                  if (typeof callback === 'function' || callback == null) {
                    this._resizeCallback = callback;
                  }
                }
                /**
                 * @en
                 * Sets the orientation of the game, it can be landscape, portrait or auto.
                 * When set it to landscape or portrait, and screen w/h ratio doesn't fit,
                 * `view` will automatically rotate the game canvas using CSS.
                 * Note that this function doesn't have any effect in native,
                 * in native, you need to set the application orientation in native project settings
                 * @zh 设置游戏屏幕朝向，它能够是横版，竖版或自动。
                 * 当设置为横版或竖版，并且屏幕的宽高比例不匹配时，
                 * `view` 会自动用 CSS 旋转游戏场景的 canvas，
                 * 这个方法不会对 native 部分产生任何影响，对于 native 而言，你需要在应用设置中的设置排版。
                 * @param orientation - Possible values: macro.ORIENTATION_LANDSCAPE | macro.ORIENTATION_PORTRAIT | macro.ORIENTATION_AUTO
                 */

              }, {
                key: "setOrientation",
                value: function setOrientation(orientation) {
                  orientation = orientation & legacyCC.macro.ORIENTATION_AUTO;

                  if (orientation && this._orientation !== orientation) {
                    this._orientation = orientation;
                  }
                }
                /**
                 * @en
                 * Sets whether the engine modify the "viewport" meta in your web page.<br/>
                 * It's enabled by default, we strongly suggest you not to disable it.<br/>
                 * And even when it's enabled, you can still set your own "viewport" meta, it won't be overridden<br/>
                 * Only useful on web
                 * @zh 设置引擎是否调整 viewport meta 来配合屏幕适配。
                 * 默认设置为启动，我们强烈建议你不要将它设置为关闭。
                 * 即使当它启动时，你仍然能够设置你的 viewport meta，它不会被覆盖。
                 * 仅在 Web 模式下有效
                 * @param enabled - Enable automatic modification to "viewport" meta
                 */

              }, {
                key: "adjustViewportMeta",
                value: function adjustViewportMeta(enabled) {
                  this._isAdjustViewport = enabled;
                }
                /**
                 * @en
                 * Retina support is enabled by default for Apple device but disabled for other devices,<br/>
                 * it takes effect only when you called setDesignResolutionPolicy<br/>
                 * Only useful on web
                 * @zh 对于 Apple 这种支持 Retina 显示的设备上默认进行优化而其他类型设备默认不进行优化，
                 * 它仅会在你调用 setDesignResolutionPolicy 方法时有影响。
                 * 仅在 Web 模式下有效。
                 * @param enabled - Enable or disable retina display
                 */

              }, {
                key: "enableRetina",
                value: function enableRetina(enabled) {
                  this._retinaEnabled = !!enabled;
                }
                /**
                 * @en
                 * Check whether retina display is enabled.<br/>
                 * Only useful on web
                 * @zh 检查是否对 Retina 显示设备进行优化。
                 * 仅在 Web 模式下有效。
                 */

              }, {
                key: "isRetinaEnabled",
                value: function isRetinaEnabled() {
                  return this._retinaEnabled;
                }
                /**
                 * @en Whether to Enable on anti-alias
                 * @zh 控制抗锯齿是否开启
                 * @param enabled - Enable or not anti-alias
                 */

              }, {
                key: "enableAntiAlias",
                value: function enableAntiAlias(enabled) {
                  if (this._antiAliasEnabled === enabled) {
                    return;
                  }

                  this._antiAliasEnabled = enabled;

                  if (legacyCC.game.renderType === legacyCC.Game.RENDER_TYPE_WEBGL) {
                    var cache = legacyCC.loader._cache; // tslint:disable-next-line: forin

                    for (var key in cache) {
                      var item = cache[key];
                      var tex = item && item.content instanceof legacyCC.Texture2D ? item.content : null;

                      if (tex) {
                        var Filter = legacyCC.Texture2D.Filter;

                        if (enabled) {
                          tex.setFilters(Filter.LINEAR, Filter.LINEAR);
                        } else {
                          tex.setFilters(Filter.NEAREST, Filter.NEAREST);
                        }
                      }
                    }
                  } else if (legacyCC.game.renderType === legacyCC.Game.RENDER_TYPE_CANVAS) {
                    var ctx = legacyCC.game.canvas.getContext('2d');
                    ctx.imageSmoothingEnabled = enabled;
                    ctx.mozImageSmoothingEnabled = enabled;
                  }
                }
                /**
                 * @en Returns whether the current enable on anti-alias
                 * @zh 返回当前是否抗锯齿
                 */

              }, {
                key: "isAntiAliasEnabled",
                value: function isAntiAliasEnabled() {
                  return this._antiAliasEnabled;
                }
                /**
                 * @en
                 * If enabled, the application will try automatically to enter full screen mode on mobile devices<br/>
                 * You can pass true as parameter to enable it and disable it by passing false.<br/>
                 * Only useful on web
                 * @zh 启动时，移动端游戏会在移动端自动尝试进入全屏模式。
                 * 你能够传入 true 为参数去启动它，用 false 参数来关闭它。
                 * @param enabled - Enable or disable auto full screen on mobile devices
                 */

              }, {
                key: "enableAutoFullScreen",
                value: function enableAutoFullScreen(enabled) {
                  if (enabled && enabled !== this._autoFullScreen && legacyCC.sys.isMobile && legacyCC.sys.browserType !== legacyCC.sys.BROWSER_TYPE_WECHAT) {
                    // Automatically full screen when user touches on mobile version
                    this._autoFullScreen = true;
                    legacyCC.screen.autoFullScreen(legacyCC.game.frame);
                  } else {
                    this._autoFullScreen = false;
                  }
                }
                /**
                 * @en
                 * Check whether auto full screen is enabled.<br/>
                 * Only useful on web
                 * @zh 检查自动进入全屏模式是否启动。
                 * 仅在 Web 模式下有效。
                 * @return Auto full screen enabled or not
                 */

              }, {
                key: "isAutoFullScreenEnabled",
                value: function isAutoFullScreenEnabled() {
                  return this._autoFullScreen;
                }
                /*
                 * Not support on native.<br/>
                 * On web, it sets the size of the canvas.
                 * @zh 这个方法并不支持 native 平台，在 Web 平台下，可以用来设置 canvas 尺寸。
                 * @private
                 * @param {Number} width
                 * @param {Number} height
                 */

              }, {
                key: "setCanvasSize",
                value: function setCanvasSize(width, height) {
                  var canvas = legacyCC.game.canvas;
                  var container = legacyCC.game.container;
                  this._devicePixelRatio = window.devicePixelRatio;
                  canvas.width = width * this._devicePixelRatio;
                  canvas.height = height * this._devicePixelRatio; // canvas.width = width;
                  // canvas.height = height;

                  canvas.style.width = width + 'px';
                  canvas.style.height = height + 'px';
                  container.style.width = width + 'px';
                  container.style.height = height + 'px';

                  this._resizeEvent();
                }
                /**
                 * @en
                 * Returns the canvas size of the view.<br/>
                 * On native platforms, it returns the screen size since the view is a fullscreen view.<br/>
                 * On web, it returns the size of the canvas element.
                 * @zh 返回视图中 canvas 的尺寸。
                 * 在 native 平台下，它返回全屏视图下屏幕的尺寸。
                 * 在 Web 平台下，它返回 canvas 元素尺寸。
                 */

              }, {
                key: "getCanvasSize",
                value: function getCanvasSize() {
                  return new Size(legacyCC.game.canvas.width, legacyCC.game.canvas.height);
                }
                /**
                 * @en
                 * Returns the frame size of the view.<br/>
                 * On native platforms, it returns the screen size since the view is a fullscreen view.<br/>
                 * On web, it returns the size of the canvas's outer DOM element.
                 * @zh 返回视图中边框尺寸。
                 * 在 native 平台下，它返回全屏视图下屏幕的尺寸。
                 * 在 web 平台下，它返回 canvas 元素的外层 DOM 元素尺寸。
                 */

              }, {
                key: "getFrameSize",
                value: function getFrameSize() {
                  return new Size(this._frameSize.width, this._frameSize.height);
                }
                /**
                 * @en On native, it sets the frame size of view.<br/>
                 * On web, it sets the size of the canvas's outer DOM element.
                 * @zh 在 native 平台下，设置视图框架尺寸。
                 * 在 web 平台下，设置 canvas 外层 DOM 元素尺寸。
                 * @param {Number} width
                 * @param {Number} height
                 */

              }, {
                key: "setFrameSize",
                value: function setFrameSize(width, height) {
                  this._frameSize.width = width;
                  this._frameSize.height = height;
                  legacyCC.frame.style.width = width + 'px';
                  legacyCC.frame.style.height = height + 'px';

                  this._resizeEvent();
                }
                /**
                 * @en Returns the visible area size of the view port.
                 * @zh 返回视图窗口可见区域尺寸。
                 */

              }, {
                key: "getVisibleSize",
                value: function getVisibleSize() {
                  return new Size(this._visibleRect.width, this._visibleRect.height);
                }
                /**
                 * @en Returns the visible area size of the view port.
                 * @zh 返回视图窗口可见区域像素尺寸。
                 */

              }, {
                key: "getVisibleSizeInPixel",
                value: function getVisibleSizeInPixel() {
                  return new Size(this._visibleRect.width * this._scaleX, this._visibleRect.height * this._scaleY);
                }
                /**
                 * @en Returns the visible origin of the view port.
                 * @zh 返回视图窗口可见区域原点。
                 */

              }, {
                key: "getVisibleOrigin",
                value: function getVisibleOrigin() {
                  return new Vec2(this._visibleRect.x, this._visibleRect.y);
                }
                /**
                 * @en Returns the visible origin of the view port.
                 * @zh 返回视图窗口可见区域像素原点。
                 */

              }, {
                key: "getVisibleOriginInPixel",
                value: function getVisibleOriginInPixel() {
                  return new Vec2(this._visibleRect.x * this._scaleX, this._visibleRect.y * this._scaleY);
                }
                /**
                 * @en Returns the current resolution policy
                 * @zh 返回当前分辨率方案
                 * @see {{ResolutionPolicy}}
                 */

              }, {
                key: "getResolutionPolicy",
                value: function getResolutionPolicy() {
                  return this._resolutionPolicy;
                }
                /**
                 * @en Sets the current resolution policy
                 * @zh 设置当前分辨率模式
                 * @see {{ResolutionPolicy}}
                 */

              }, {
                key: "setResolutionPolicy",
                value: function setResolutionPolicy(resolutionPolicy) {
                  var _t = this;

                  if (resolutionPolicy instanceof ResolutionPolicy) {
                    _t._resolutionPolicy = resolutionPolicy;
                  } // Ensure compatibility with JSB
                  else {
                      var _locPolicy = ResolutionPolicy;

                      if (resolutionPolicy === _locPolicy.EXACT_FIT) {
                        _t._resolutionPolicy = _t._rpExactFit;
                      }

                      if (resolutionPolicy === _locPolicy.SHOW_ALL) {
                        _t._resolutionPolicy = _t._rpShowAll;
                      }

                      if (resolutionPolicy === _locPolicy.NO_BORDER) {
                        _t._resolutionPolicy = _t._rpNoBorder;
                      }

                      if (resolutionPolicy === _locPolicy.FIXED_HEIGHT) {
                        _t._resolutionPolicy = _t._rpFixedHeight;
                      }

                      if (resolutionPolicy === _locPolicy.FIXED_WIDTH) {
                        _t._resolutionPolicy = _t._rpFixedWidth;
                      }
                    }
                } // tslint:disable: max-line-length

                /**
                 * @en Sets the resolution policy with designed view size in points.<br/>
                 * The resolution policy include: <br/>
                 * [1] ResolutionExactFit       Fill screen by stretch-to-fit: if the design resolution ratio of width to height is different from the screen resolution ratio, your game view will be stretched.<br/>
                 * [2] ResolutionNoBorder       Full screen without black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two areas of your game view will be cut.<br/>
                 * [3] ResolutionShowAll        Full screen with black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two black borders will be shown.<br/>
                 * [4] ResolutionFixedHeight    Scale the content's height to screen's height and proportionally scale its width<br/>
                 * [5] ResolutionFixedWidth     Scale the content's width to screen's width and proportionally scale its height<br/>
                 * [ResolutionPolicy]        [Web only feature] Custom resolution policy, constructed by ResolutionPolicy<br/>
                 * @zh 通过设置设计分辨率和匹配模式来进行游戏画面的屏幕适配。
                 * @param width Design resolution width.
                 * @param height Design resolution height.
                 * @param resolutionPolicy The resolution policy desired
                 */

              }, {
                key: "setDesignResolutionSize",
                value: function setDesignResolutionSize(width, height, resolutionPolicy) {
                  // Defensive code
                  if (!(width > 0 || height > 0)) {
                    errorID(2200);
                    return;
                  }

                  this.setResolutionPolicy(resolutionPolicy);
                  var policy = this._resolutionPolicy;

                  if (policy) {
                    policy.preApply(this);
                  } // Reinit frame size


                  if (legacyCC.sys.isMobile) {
                    this._adjustViewportMeta();
                  } // Permit to re-detect the orientation of device.


                  this._orientationChanging = true; // If resizing, then frame size is already initialized, this logic should be improved

                  if (!this._resizing) {
                    this._initFrameSize();
                  }

                  if (!policy) {
                    logID(2201);
                    return;
                  }

                  this._originalDesignResolutionSize.width = this._designResolutionSize.width = width;
                  this._originalDesignResolutionSize.height = this._designResolutionSize.height = height;
                  var result = policy.apply(this, this._designResolutionSize);

                  if (result.scale && result.scale.length === 2) {
                    this._scaleX = result.scale[0];
                    this._scaleY = result.scale[1];
                  }

                  if (result.viewport) {
                    var vp = this._viewportRect;
                    var vb = this._visibleRect;
                    var rv = result.viewport;
                    vp.x = rv.x;
                    vp.y = rv.y;
                    vp.width = rv.width;
                    vp.height = rv.height;
                    vb.x = 0;
                    vb.y = 0;
                    vb.width = rv.width / this._scaleX;
                    vb.height = rv.height / this._scaleY;
                  }

                  policy.postApply(this);
                  legacyCC.winSize.width = this._visibleRect.width;
                  legacyCC.winSize.height = this._visibleRect.height;

                  if (visibleRect) {
                    visibleRect.init(this._visibleRect);
                  }

                  this.emit('design-resolution-changed');
                }
                /**
                 * @en Returns the designed size for the view.
                 * Default resolution size is the same as 'getFrameSize'.
                 * @zh 返回视图的设计分辨率。
                 * 默认下分辨率尺寸同 `getFrameSize` 方法相同
                 */

              }, {
                key: "getDesignResolutionSize",
                value: function getDesignResolutionSize() {
                  return new Size(this._designResolutionSize.width, this._designResolutionSize.height);
                }
                /**
                 * @en Sets the container to desired pixel resolution and fit the game content to it.
                 * This function is very useful for adaptation in mobile browsers.
                 * In some HD android devices, the resolution is very high, but its browser performance may not be very good.
                 * In this case, enabling retina display is very costy and not suggested, and if retina is disabled, the image may be blurry.
                 * But this API can be helpful to set a desired pixel resolution which is in between.
                 * This API will do the following:
                 *     1. Set viewport's width to the desired width in pixel
                 *     2. Set body width to the exact pixel resolution
                 *     3. The resolution policy will be reset with designed view size in points.
                 * @zh 设置容器（container）需要的像素分辨率并且适配相应分辨率的游戏内容。
                 * @param width Design resolution width.
                 * @param height Design resolution height.
                 * @param resolutionPolicy The resolution policy desired
                 */

              }, {
                key: "setRealPixelResolution",
                value: function setRealPixelResolution(width, height, resolutionPolicy) {
                  {
                    // Set viewport's width
                    this._setViewportMeta({
                      width: width
                    }, true); // Set body width to the exact pixel resolution


                    document.documentElement.style.width = width + 'px';
                    document.body.style.width = width + 'px';
                    document.body.style.left = '0px';
                    document.body.style.top = '0px';
                  } // Reset the resolution size and policy


                  this.setDesignResolutionSize(width, height, resolutionPolicy);
                }
                /**
                 * @en Returns the view port rectangle.
                 * @zh 返回视窗剪裁区域。
                 */

              }, {
                key: "getViewportRect",
                value: function getViewportRect() {
                  return this._viewportRect;
                }
                /**
                 * @en Returns scale factor of the horizontal direction (X axis).
                 * @zh 返回横轴的缩放比，这个缩放比是将画布像素分辨率放到设计分辨率的比例。
                 */

              }, {
                key: "getScaleX",
                value: function getScaleX() {
                  return this._scaleX;
                }
                /**
                 * @en Returns scale factor of the vertical direction (Y axis).
                 * @zh 返回纵轴的缩放比，这个缩放比是将画布像素分辨率缩放到设计分辨率的比例。
                 */

              }, {
                key: "getScaleY",
                value: function getScaleY() {
                  return this._scaleY;
                }
                /**
                 * @en Returns device pixel ratio for retina display.
                 * @zh 返回设备或浏览器像素比例。
                 */

              }, {
                key: "getDevicePixelRatio",
                value: function getDevicePixelRatio() {
                  return this._devicePixelRatio;
                }
                /**
                 * @en Returns the real location in view for a translation based on a related position
                 * @zh 将屏幕坐标转换为游戏视图下的坐标。
                 * @param tx - The X axis translation
                 * @param ty - The Y axis translation
                 * @param relatedPos - The related position object including "left", "top", "width", "height" informations
                 * @param out - The out object to save the conversion result
                 */

              }, {
                key: "convertToLocationInView",
                value: function convertToLocationInView(tx, ty, relatedPos, out) {
                  var result = out || new Vec2();
                  var x = this._devicePixelRatio * (tx - relatedPos.left);
                  var y = this._devicePixelRatio * (relatedPos.top + relatedPos.height - ty);

                  if (this._isRotated) {
                    result.x = legacyCC.game.canvas.width - y;
                    result.y = x;
                  } else {
                    result.x = x;
                    result.y = y;
                  }

                  return result;
                } // _convertMouseToLocationInView (in_out_point, relatedPos) {
                //     var viewport = this._viewportRect, _t = this;
                //     in_out_point.x = ((_t._devicePixelRatio * (in_out_point.x - relatedPos.left)) - viewport.x) / _t._scaleX;
                //     in_out_point.y = (_t._devicePixelRatio * (relatedPos.top + relatedPos.height - in_out_point.y) - viewport.y) / _t._scaleY;
                // }

              }, {
                key: "_convertPointWithScale",
                value: function _convertPointWithScale(point) {
                  var viewport = this._viewportRect;
                  point.x = (point.x - viewport.x) / this._scaleX;
                  point.y = (point.y - viewport.y) / this._scaleY;
                } // Resize helper functions

              }, {
                key: "_resizeEvent",
                value: function _resizeEvent() {
                  var _view = legacyCC.view; // Check frame size changed or not

                  var prevFrameW = _view._frameSize.width;
                  var prevFrameH = _view._frameSize.height;
                  var prevRotated = _view._isRotated;

                  if (legacyCC.sys.isMobile) {
                    var containerStyle = legacyCC.game.container.style;
                    var margin = containerStyle.margin;
                    containerStyle.margin = '0';
                    containerStyle.display = 'none';

                    _view._initFrameSize();

                    containerStyle.margin = margin;
                    containerStyle.display = 'block';
                  } else {
                    _view._initFrameSize();
                  }

                  if ( !_view._orientationChanging && _view._isRotated === prevRotated && _view._frameSize.width === prevFrameW && _view._frameSize.height === prevFrameH) {
                    return;
                  } // Frame size changed, do resize works


                  var width = _view._originalDesignResolutionSize.width;
                  var height = _view._originalDesignResolutionSize.height;
                  _view._resizing = true;

                  if (width > 0) {
                    _view.setDesignResolutionSize(width, height, _view._resolutionPolicy);
                  }

                  _view._resizing = false;

                  _view.emit('canvas-resize');

                  if (_view._resizeCallback) {
                    _view._resizeCallback.call();
                  }
                }
              }, {
                key: "_orientationChange",
                value: function _orientationChange() {
                  legacyCC.view._orientationChanging = true;

                  legacyCC.view._resizeEvent();
                }
              }, {
                key: "_initFrameSize",
                value: function _initFrameSize() {
                  var locFrameSize = this._frameSize;

                  var w = __BrowserGetter.availWidth(legacyCC.game.frame);

                  var h = __BrowserGetter.availHeight(legacyCC.game.frame);

                  var isLandscape = w >= h;

                  if ( !legacyCC.sys.isMobile || isLandscape && this._orientation & legacyCC.macro.ORIENTATION_LANDSCAPE || !isLandscape && this._orientation & legacyCC.macro.ORIENTATION_PORTRAIT) {
                    locFrameSize.width = w;
                    locFrameSize.height = h;
                    legacyCC.game.container.style['-webkit-transform'] = 'rotate(0deg)';
                    legacyCC.game.container.style.transform = 'rotate(0deg)';
                    this._isRotated = false;
                  } else {
                    locFrameSize.width = h;
                    locFrameSize.height = w;
                    legacyCC.game.container.style['-webkit-transform'] = 'rotate(90deg)';
                    legacyCC.game.container.style.transform = 'rotate(90deg)';
                    legacyCC.game.container.style['-webkit-transform-origin'] = '0px 0px 0px';
                    legacyCC.game.container.style.transformOrigin = '0px 0px 0px';
                    this._isRotated = true; // Fix for issue: https://github.com/cocos-creator/fireball/issues/8365
                    // Reference: https://www.douban.com/note/343402554/
                    // For Chrome, z-index not working after container transform rotate 90deg.
                    // Because 'transform' style adds canvas (the top-element of container) to a new stack context.
                    // That causes the DOM Input was hidden under canvas.
                    // This should be done after container rotated, instead of in style-mobile.css.

                    legacyCC.game.canvas.style['-webkit-transform'] = 'translateZ(0px)';
                    legacyCC.game.canvas.style.transform = 'translateZ(0px)';
                  }

                  if (this._orientationChanging) {
                    setTimeout(function () {
                      legacyCC.view._orientationChanging = false;
                    }, 1000);
                  }
                } // hack

              }, {
                key: "_adjustSizeKeepCanvasSize",
                value: function _adjustSizeKeepCanvasSize() {
                  var designWidth = this._originalDesignResolutionSize.width;
                  var designHeight = this._originalDesignResolutionSize.height;

                  if (designWidth > 0) {
                    this.setDesignResolutionSize(designWidth, designHeight, this._resolutionPolicy);
                  }
                }
              }, {
                key: "_setViewportMeta",
                value: function _setViewportMeta(metas, overwrite) {
                  var vp = document.getElementById('cocosMetaElement');

                  if (vp && overwrite) {
                    document.head.removeChild(vp);
                  }

                  var elems = document.getElementsByName('viewport');
                  var currentVP = elems ? elems[0] : null;
                  var content;
                  var key;
                  var pattern;
                  content = currentVP ? currentVP.content : '';
                  vp = vp || document.createElement('meta');
                  vp.id = 'cocosMetaElement';
                  vp.name = 'viewport';
                  vp.content = '';

                  for (key in metas) {
                    if (content.indexOf(key) === -1) {
                      content += ',' + key + '=' + metas[key];
                    } else if (overwrite) {
                      pattern = new RegExp(key + '\s*=\s*[^,]+');
                      content.replace(pattern, key + '=' + metas[key]);
                    }
                  }

                  if (/^,/.test(content)) {
                    content = content.substr(1);
                  }

                  vp.content = content; // For adopting certain android devices which don't support second viewport

                  if (currentVP) {
                    currentVP.content = content;
                  }

                  document.head.appendChild(vp);
                }
              }, {
                key: "_adjustViewportMeta",
                value: function _adjustViewportMeta() {
                  if (this._isAdjustViewport && !JSB && !RUNTIME_BASED && !MINIGAME) {
                    this._setViewportMeta(__BrowserGetter.meta, false);

                    this._isAdjustViewport = false;
                  }
                }
              }, {
                key: "_convertMouseToLocation",
                value: function _convertMouseToLocation(in_out_point, relatedPos) {
                  in_out_point.x = this._devicePixelRatio * (in_out_point.x - relatedPos.left);
                  in_out_point.y = this._devicePixelRatio * (relatedPos.top + relatedPos.height - in_out_point.y);
                }
              }, {
                key: "_convertTouchWidthScale",
                value: function _convertTouchWidthScale(selTouch) {
                  var viewport = this._viewportRect;
                  var scaleX = this._scaleX;
                  var scaleY = this._scaleY;
                  selTouch._point.x = (selTouch._point.x - viewport.x) / scaleX;
                  selTouch._point.y = (selTouch._point.y - viewport.y) / scaleY;
                  selTouch._prevPoint.x = (selTouch._prevPoint.x - viewport.x) / scaleX;
                  selTouch._prevPoint.y = (selTouch._prevPoint.y - viewport.y) / scaleY;
                }
              }, {
                key: "_convertTouchesWithScale",
                value: function _convertTouchesWithScale(touches) {
                  var viewport = this._viewportRect;
                  var scaleX = this._scaleX;
                  var scaleY = this._scaleY;
                  var selPoint;
                  var selPrePoint; // tslint:disable-next-line: prefer-for-of

                  for (var i = 0; i < touches.length; i++) {
                    var selTouch = touches[i];
                    selPoint = selTouch._point;
                    selPrePoint = selTouch._prevPoint;
                    selPoint.x = (selPoint.x - viewport.x) / scaleX;
                    selPoint.y = (selPoint.y - viewport.y) / scaleY;
                    selPrePoint.x = (selPrePoint.x - viewport.x) / scaleX;
                    selPrePoint.y = (selPrePoint.y - viewport.y) / scaleY;
                  }
                }
              }]);

              return View;
            }(EventTarget));
            /**
             * !en
             * Emit when design resolution changed.
             * !zh
             * 当设计分辨率改变时发送。
             * @event design-resolution-changed
             */

            View.instance = void 0;

            /** 
             * ContainerStrategy class is the root strategy class of container's scale strategy,
             * it controls the behavior of how to scale the cc.game.container and cc.game.canvas object
             */
            var ContainerStrategy = /*#__PURE__*/function () {
              function ContainerStrategy() {
                _classCallCheck(this, ContainerStrategy);

                this.name = 'ContainerStrategy';
              }

              _createClass(ContainerStrategy, [{
                key: "preApply",

                /**
                 * @en Manipulation before appling the strategy
                 * @zh 在应用策略之前的操作
                 * @param view - The target view
                 */
                value: function preApply(_view) {}
                /**
                 * @en Function to apply this strategy
                 * @zh 策略应用方法
                 * @param view
                 * @param designedResolution
                 */

              }, {
                key: "apply",
                value: function apply(_view, designedResolution) {}
                /**
                 * @en
                 * Manipulation after applying the strategy
                 * @zh 策略调用之后的操作
                 * @param view  The target view
                 */

              }, {
                key: "postApply",
                value: function postApply(_view) {}
              }, {
                key: "_setupContainer",
                value: function _setupContainer(_view, w, h) {
                  var locCanvas = legacyCC.game.canvas;
                  var locContainer = legacyCC.game.container;

                  if (legacyCC.sys.os === legacyCC.sys.OS_ANDROID) {
                    document.body.style.width = (_view._isRotated ? h : w) + 'px';
                    document.body.style.height = (_view._isRotated ? w : h) + 'px';
                  } // Setup style


                  locContainer.style.width = locCanvas.style.width = w + 'px';
                  locContainer.style.height = locCanvas.style.height = h + 'px'; // Setup pixel ratio for retina display

                  var devicePixelRatio = _view._devicePixelRatio = 1;

                  if (_view.isRetinaEnabled()) {
                    devicePixelRatio = _view._devicePixelRatio = Math.min(_view._maxPixelRatio, window.devicePixelRatio || 1);
                  } // Setup canvas


                  locCanvas.width = w * devicePixelRatio;
                  locCanvas.height = h * devicePixelRatio;
                }
              }, {
                key: "_fixContainer",
                value: function _fixContainer() {
                  // Add container to document body
                  document.body.insertBefore(legacyCC.game.container, document.body.firstChild); // Set body's width height to window's size, and forbid overflow, so that game will be centered

                  var bs = document.body.style;
                  bs.width = window.innerWidth + 'px';
                  bs.height = window.innerHeight + 'px';
                  bs.overflow = 'hidden'; // Body size solution doesn't work on all mobile browser so this is the aleternative: fixed container

                  var contStyle = legacyCC.game.container.style;
                  contStyle.position = 'fixed';
                  contStyle.left = contStyle.top = '0px'; // Reposition body

                  document.body.scrollTop = 0;
                }
              }]);

              return ContainerStrategy;
            }();
            /**
             * @en
             * Emit when canvas resize.
             * @zh
             * 当画布大小改变时发送。
             * @event canvas-resize
             */

            /**
             * ContentStrategy class is the root strategy class of content's scale strategy,
             * it controls the behavior of how to scale the scene and setup the viewport for the game
             *
             * @class ContentStrategy
             */


            ContainerStrategy.EQUAL_TO_FRAME = void 0;
            ContainerStrategy.PROPORTION_TO_FRAME = void 0;

            var ContentStrategy = /*#__PURE__*/function () {
              function ContentStrategy() {
                _classCallCheck(this, ContentStrategy);

                this.name = 'ContentStrategy';
                this._result = void 0;
                this._result = {
                  scale: [1, 1],
                  viewport: null
                };
              }
              /**
               * @en Manipulation before applying the strategy
               * @zh 策略应用前的操作
               * @param view - The target view
               */


              _createClass(ContentStrategy, [{
                key: "preApply",
                value: function preApply(_view) {}
                /**
                 * @en Function to apply this strategy
                 * The return value is {scale: [scaleX, scaleY], viewport: {new Rect}},
                 * The target view can then apply these value to itself, it's preferred not to modify directly its private variables
                 * @zh 调用策略方法
                 * @return The result scale and viewport rect
                 */

              }, {
                key: "apply",
                value: function apply(_view, designedResolution) {
                  return {
                    scale: [1, 1]
                  };
                }
                /**
                 * @en Manipulation after applying the strategy
                 * @zh 策略调用之后的操作
                 * @param view - The target view
                 */

              }, {
                key: "postApply",
                value: function postApply(_view) {}
              }, {
                key: "_buildResult",
                value: function _buildResult(containerW, containerH, contentW, contentH, scaleX, scaleY) {
                  // Makes content fit better the canvas
                  if (Math.abs(containerW - contentW) < 2) {
                    contentW = containerW;
                  }

                  if (Math.abs(containerH - contentH) < 2) {
                    contentH = containerH;
                  }

                  var viewport = new Rect(Math.round((containerW - contentW) / 2), Math.round((containerH - contentH) / 2), contentW, contentH);
                  this._result.scale = [scaleX, scaleY];
                  this._result.viewport = viewport;
                  return this._result;
                }
              }]);

              return ContentStrategy;
            }();

            ContentStrategy.EXACT_FIT = void 0;
            ContentStrategy.SHOW_ALL = void 0;
            ContentStrategy.NO_BORDER = void 0;
            ContentStrategy.FIXED_HEIGHT = void 0;
            ContentStrategy.FIXED_WIDTH = void 0;

            (function () {
              // Container scale strategys

              /**
               * @class EqualToFrame
               * @extends ContainerStrategy
               */
              var EqualToFrame = /*#__PURE__*/function (_ContainerStrategy) {
                _inherits(EqualToFrame, _ContainerStrategy);

                function EqualToFrame() {
                  var _getPrototypeOf2;

                  var _this2;

                  _classCallCheck(this, EqualToFrame);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this2 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EqualToFrame)).call.apply(_getPrototypeOf2, [this].concat(args)));
                  _this2.name = 'EqualToFrame';
                  return _this2;
                }

                _createClass(EqualToFrame, [{
                  key: "apply",
                  value: function apply(_view) {
                    var frameH = _view._frameSize.height;
                    var containerStyle = legacyCC.game.container.style;

                    this._setupContainer(_view, _view._frameSize.width, _view._frameSize.height); // Setup container's margin and padding


                    if (_view._isRotated) {
                      containerStyle.margin = '0 0 0 ' + frameH + 'px';
                    } else {
                      containerStyle.margin = '0px';
                    }

                    containerStyle.padding = '0px';
                  }
                }]);

                return EqualToFrame;
              }(ContainerStrategy);
              /**
               * @class ProportionalToFrame
               * @extends ContainerStrategy
               */


              var ProportionalToFrame = /*#__PURE__*/function (_ContainerStrategy2) {
                _inherits(ProportionalToFrame, _ContainerStrategy2);

                function ProportionalToFrame() {
                  var _getPrototypeOf3;

                  var _this3;

                  _classCallCheck(this, ProportionalToFrame);

                  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                  }

                  _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(ProportionalToFrame)).call.apply(_getPrototypeOf3, [this].concat(args)));
                  _this3.name = 'ProportionalToFrame';
                  return _this3;
                }

                _createClass(ProportionalToFrame, [{
                  key: "apply",
                  value: function apply(_view, designedResolution) {
                    var frameW = _view._frameSize.width;
                    var frameH = _view._frameSize.height;
                    var containerStyle = legacyCC.game.container.style;
                    var designW = designedResolution.width;
                    var designH = designedResolution.height;
                    var scaleX = frameW / designW;
                    var scaleY = frameH / designH;
                    var containerW;
                    var containerH;
                    scaleX < scaleY ? (containerW = frameW, containerH = designH * scaleX) : (containerW = designW * scaleY, containerH = frameH); // Adjust container size with integer value

                    var offx = Math.round((frameW - containerW) / 2);
                    var offy = Math.round((frameH - containerH) / 2);
                    containerW = frameW - 2 * offx;
                    containerH = frameH - 2 * offy;

                    this._setupContainer(_view, containerW, containerH);

                    {
                      // Setup container's margin and padding
                      if (_view._isRotated) {
                        containerStyle.margin = '0 0 0 ' + frameH + 'px';
                      } else {
                        containerStyle.margin = '0px';
                      }

                      containerStyle.paddingLeft = offx + 'px';
                      containerStyle.paddingRight = offx + 'px';
                      containerStyle.paddingTop = offy + 'px';
                      containerStyle.paddingBottom = offy + 'px';
                    }
                  }
                }]);

                return ProportionalToFrame;
              }(ContainerStrategy); // need to adapt prototype before instantiating
              // @ts-ignore


              var _global = typeof window === 'undefined' ? global : window;

              var globalAdapter = _global.__globalAdapter;

              if (globalAdapter) {
                if (globalAdapter.adaptContainerStrategy) {
                  globalAdapter.adaptContainerStrategy(ContainerStrategy.prototype);
                }

                if (globalAdapter.adaptView) {
                  globalAdapter.adaptView(View.prototype);
                }
              } // Alias: Strategy that makes the container's size equals to the frame's size


              ContainerStrategy.EQUAL_TO_FRAME = new EqualToFrame(); // Alias: Strategy that scale proportionally the container's size to frame's size

              ContainerStrategy.PROPORTION_TO_FRAME = new ProportionalToFrame(); // Content scale strategys

              var ExactFit = /*#__PURE__*/function (_ContentStrategy) {
                _inherits(ExactFit, _ContentStrategy);

                function ExactFit() {
                  var _getPrototypeOf4;

                  var _this4;

                  _classCallCheck(this, ExactFit);

                  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                    args[_key3] = arguments[_key3];
                  }

                  _this4 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(ExactFit)).call.apply(_getPrototypeOf4, [this].concat(args)));
                  _this4.name = 'ExactFit';
                  return _this4;
                }

                _createClass(ExactFit, [{
                  key: "apply",
                  value: function apply(_view, designedResolution) {
                    var containerW = legacyCC.game.canvas.width;
                    var containerH = legacyCC.game.canvas.height;
                    var scaleX = containerW / designedResolution.width;
                    var scaleY = containerH / designedResolution.height;
                    return this._buildResult(containerW, containerH, containerW, containerH, scaleX, scaleY);
                  }
                }]);

                return ExactFit;
              }(ContentStrategy);

              var ShowAll = /*#__PURE__*/function (_ContentStrategy2) {
                _inherits(ShowAll, _ContentStrategy2);

                function ShowAll() {
                  var _getPrototypeOf5;

                  var _this5;

                  _classCallCheck(this, ShowAll);

                  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                    args[_key4] = arguments[_key4];
                  }

                  _this5 = _possibleConstructorReturn(this, (_getPrototypeOf5 = _getPrototypeOf(ShowAll)).call.apply(_getPrototypeOf5, [this].concat(args)));
                  _this5.name = 'ShowAll';
                  return _this5;
                }

                _createClass(ShowAll, [{
                  key: "apply",
                  value: function apply(_view, designedResolution) {
                    var containerW = legacyCC.game.canvas.width;
                    var containerH = legacyCC.game.canvas.height;
                    var designW = designedResolution.width;
                    var designH = designedResolution.height;
                    var scaleX = containerW / designW;
                    var scaleY = containerH / designH;
                    var scale = 0;
                    var contentW;
                    var contentH;
                    scaleX < scaleY ? (scale = scaleX, contentW = containerW, contentH = designH * scale) : (scale = scaleY, contentW = designW * scale, contentH = containerH);
                    return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
                  }
                }]);

                return ShowAll;
              }(ContentStrategy);

              var NoBorder = /*#__PURE__*/function (_ContentStrategy3) {
                _inherits(NoBorder, _ContentStrategy3);

                function NoBorder() {
                  var _getPrototypeOf6;

                  var _this6;

                  _classCallCheck(this, NoBorder);

                  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                    args[_key5] = arguments[_key5];
                  }

                  _this6 = _possibleConstructorReturn(this, (_getPrototypeOf6 = _getPrototypeOf(NoBorder)).call.apply(_getPrototypeOf6, [this].concat(args)));
                  _this6.name = 'NoBorder';
                  return _this6;
                }

                _createClass(NoBorder, [{
                  key: "apply",
                  value: function apply(_view, designedResolution) {
                    var containerW = legacyCC.game.canvas.width;
                    var containerH = legacyCC.game.canvas.height;
                    var designW = designedResolution.width;
                    var designH = designedResolution.height;
                    var scaleX = containerW / designW;
                    var scaleY = containerH / designH;
                    var scale;
                    var contentW;
                    var contentH;
                    scaleX < scaleY ? (scale = scaleY, contentW = designW * scale, contentH = containerH) : (scale = scaleX, contentW = containerW, contentH = designH * scale);
                    return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
                  }
                }]);

                return NoBorder;
              }(ContentStrategy);

              var FixedHeight = /*#__PURE__*/function (_ContentStrategy4) {
                _inherits(FixedHeight, _ContentStrategy4);

                function FixedHeight() {
                  var _getPrototypeOf7;

                  var _this7;

                  _classCallCheck(this, FixedHeight);

                  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                    args[_key6] = arguments[_key6];
                  }

                  _this7 = _possibleConstructorReturn(this, (_getPrototypeOf7 = _getPrototypeOf(FixedHeight)).call.apply(_getPrototypeOf7, [this].concat(args)));
                  _this7.name = 'FixedHeight';
                  return _this7;
                }

                _createClass(FixedHeight, [{
                  key: "apply",
                  value: function apply(_view, designedResolution) {
                    var containerW = legacyCC.game.canvas.width;
                    var containerH = legacyCC.game.canvas.height;
                    var designH = designedResolution.height;
                    var scale = containerH / designH;
                    var contentW = containerW;
                    var contentH = containerH;
                    return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
                  }
                }]);

                return FixedHeight;
              }(ContentStrategy);

              var FixedWidth = /*#__PURE__*/function (_ContentStrategy5) {
                _inherits(FixedWidth, _ContentStrategy5);

                function FixedWidth() {
                  var _getPrototypeOf8;

                  var _this8;

                  _classCallCheck(this, FixedWidth);

                  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
                    args[_key7] = arguments[_key7];
                  }

                  _this8 = _possibleConstructorReturn(this, (_getPrototypeOf8 = _getPrototypeOf(FixedWidth)).call.apply(_getPrototypeOf8, [this].concat(args)));
                  _this8.name = 'FixedWidth';
                  return _this8;
                }

                _createClass(FixedWidth, [{
                  key: "apply",
                  value: function apply(_view, designedResolution) {
                    var containerW = legacyCC.game.canvas.width;
                    var containerH = legacyCC.game.canvas.height;
                    var designW = designedResolution.width;
                    var scale = containerW / designW;
                    var contentW = containerW;
                    var contentH = containerH;
                    return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
                  }
                }]);

                return FixedWidth;
              }(ContentStrategy); // Alias: Strategy to scale the content's size to container's size, non proportional


              ContentStrategy.EXACT_FIT = new ExactFit(); // Alias: Strategy to scale the content's size proportionally to maximum size and keeps the whole content area to be visible

              ContentStrategy.SHOW_ALL = new ShowAll(); // Alias: Strategy to scale the content's size proportionally to fill the whole container area

              ContentStrategy.NO_BORDER = new NoBorder(); // Alias: Strategy to scale the content's height to container's height and proportionally scale its width

              ContentStrategy.FIXED_HEIGHT = new FixedHeight(); // Alias: Strategy to scale the content's width to container's width and proportionally scale its height

              ContentStrategy.FIXED_WIDTH = new FixedWidth();
            })();
            /**
             * ResolutionPolicy class is the root strategy class of scale strategy,
             * its main task is to maintain the compatibility with Cocos2d-x</p>
             */


            var ResolutionPolicy = exports('R', /*#__PURE__*/function () {
              /**
               * The entire application is visible in the specified area without trying to preserve the original aspect ratio.<br/>
               * Distortion can occur, and the application may appear stretched or compressed.
               */

              /**
               * The entire application fills the specified area, without distortion but possibly with some cropping,<br/>
               * while maintaining the original aspect ratio of the application.
               */

              /**
               * The entire application is visible in the specified area without distortion while maintaining the original<br/>
               * aspect ratio of the application. Borders can appear on two sides of the application.
               */

              /**
               * The application takes the height of the design resolution size and modifies the width of the internal<br/>
               * canvas so that it fits the aspect ratio of the device<br/>
               * no distortion will occur however you must make sure your application works on different<br/>
               * aspect ratios
               */

              /**
               * The application takes the width of the design resolution size and modifies the height of the internal<br/>
               * canvas so that it fits the aspect ratio of the device<br/>
               * no distortion will occur however you must make sure your application works on different<br/>
               * aspect ratios
               */

              /**
               * Unknown policy
               */

              /**
               * Constructor of ResolutionPolicy
               * @param containerStg
               * @param contentStg
               */
              function ResolutionPolicy(containerStg, contentStg) {
                _classCallCheck(this, ResolutionPolicy);

                this.name = 'ResolutionPolicy';
                this._containerStrategy = void 0;
                this._contentStrategy = void 0;
                this._containerStrategy = null;
                this._contentStrategy = null;
                this.setContainerStrategy(containerStg);
                this.setContentStrategy(contentStg);
              }

              _createClass(ResolutionPolicy, [{
                key: "preApply",

                /**
                 * @en Manipulation before applying the resolution policy
                 * @zh 策略应用前的操作
                 * @param _view The target view
                 */
                value: function preApply(_view) {
                  this._containerStrategy.preApply(_view);

                  this._contentStrategy.preApply(_view);
                }
                /**
                 * @en Function to apply this resolution policy
                 * The return value is {scale: [scaleX, scaleY], viewport: {new Rect}},
                 * The target view can then apply these value to itself, it's preferred not to modify directly its private variables
                 * @zh 调用策略方法
                 * @param _view - The target view
                 * @param designedResolution - The user defined design resolution
                 * @return An object contains the scale X/Y values and the viewport rect
                 */

              }, {
                key: "apply",
                value: function apply(_view, designedResolution) {
                  this._containerStrategy.apply(_view, designedResolution);

                  return this._contentStrategy.apply(_view, designedResolution);
                }
                /**
                 * @en Manipulation after appyling the strategy
                 * @zh 策略应用之后的操作
                 * @param _view - The target view
                 */

              }, {
                key: "postApply",
                value: function postApply(_view) {
                  this._containerStrategy.postApply(_view);

                  this._contentStrategy.postApply(_view);
                }
                /**
                 * @en Setup the container's scale strategy
                 * @zh 设置容器的适配策略
                 * @param containerStg The container strategy
                 */

              }, {
                key: "setContainerStrategy",
                value: function setContainerStrategy(containerStg) {
                  if (containerStg instanceof ContainerStrategy) {
                    this._containerStrategy = containerStg;
                  }
                }
                /**
                 * @en Setup the content's scale strategy
                 * @zh 设置内容的适配策略
                 * @param contentStg The content strategy
                 */

              }, {
                key: "setContentStrategy",
                value: function setContentStrategy(contentStg) {
                  if (contentStg instanceof ContentStrategy) {
                    this._contentStrategy = contentStg;
                  }
                }
              }, {
                key: "canvasSize",
                get: function get() {
                  return legacyCC.v2(legacyCC.game.canvas.width, legacyCC.game.canvas.height);
                }
              }]);

              return ResolutionPolicy;
            }());
            ResolutionPolicy.EXACT_FIT = 0;
            ResolutionPolicy.NO_BORDER = 1;
            ResolutionPolicy.SHOW_ALL = 2;
            ResolutionPolicy.FIXED_HEIGHT = 3;
            ResolutionPolicy.FIXED_WIDTH = 4;
            ResolutionPolicy.UNKNOWN = 5;
            ResolutionPolicy.ContainerStrategy = ContainerStrategy;
            ResolutionPolicy.ContentStrategy = ContentStrategy;
            legacyCC.ResolutionPolicy = ResolutionPolicy;
            /**
             * @en view is the singleton view object.
             * @zh view 是全局的视图单例对象。
             */

            var view = exports('v', View.instance = legacyCC.view = new View());
            /**
             * @en winSize is the alias object for the size of the current game window.
             * @zh winSize 为当前的游戏窗口的大小。
             */

            legacyCC.winSize = new Size();

            var keyboardListener = null;
            var accelerationListener = null;
            var touchListener = null;
            var mouseListener = null;
            /**
            * @en
            * The System event, it currently supports keyboard events and accelerometer events.<br/>
            * You can get the `SystemEvent` instance with `systemEvent`.<br/>
            * @zh
            * 系统事件，它目前支持按键事件和重力感应事件。<br/>
            * 你可以通过 `systemEvent` 获取到 `SystemEvent` 的实例。<br/>
            * @example
            * ```
            * import { systemEvent, SystemEvent } from 'cc';
            * systemEvent.on(SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
            * systemEvent.off(SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
            * ```
            */

            var SystemEvent = exports('a', /*#__PURE__*/function (_EventTarget) {
              _inherits(SystemEvent, _EventTarget);

              function SystemEvent() {
                _classCallCheck(this, SystemEvent);

                return _possibleConstructorReturn(this, _getPrototypeOf(SystemEvent).call(this));
              }
              /**
               * @en
               * Sets whether to enable the accelerometer event listener or not.
               *
               * @zh
               * 是否启用加速度计事件。
               */


              _createClass(SystemEvent, [{
                key: "setAccelerometerEnabled",
                value: function setAccelerometerEnabled(isEnabled) {


                  if (isEnabled && window.DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === 'function') {
                    DeviceMotionEvent.requestPermission().then(function (response) {
                      console.log("Device Motion Event request permission: ".concat(response));
                      inputManager.setAccelerometerEnabled(response === 'granted');
                    });
                  } else {
                    inputManager.setAccelerometerEnabled(isEnabled);
                  }
                }
                /**
                 * @en
                 * Sets the accelerometer interval value.
                 *
                 * @zh
                 * 设置加速度计间隔值。
                 */

              }, {
                key: "setAccelerometerInterval",
                value: function setAccelerometerInterval(interval) {

                  inputManager.setAccelerometerInterval(interval);
                }
              }, {
                key: "on",

                /**
                 * @en
                 * Register an callback of a specific system event type.
                 * @zh
                 * 注册特定事件类型回调。
                 *
                 * @param type - The event type
                 * @param callback - The event listener's callback
                 * @param target - The event listener's target and callee
                 */
                value: function on(type, callback, target, once) {

                  _get(_getPrototypeOf(SystemEvent.prototype), "on", this).call(this, type, callback, target, once); // Keyboard


                  if (type === SystemEventType.KEY_DOWN || type === SystemEventType.KEY_UP) {
                    if (!keyboardListener) {
                      keyboardListener = EventListener.create({
                        event: EventListener.KEYBOARD,
                        onKeyPressed: function onKeyPressed(keyCode, event) {
                          event.type = SystemEventType.KEY_DOWN;
                          systemEvent.emit(event.type, event);
                        },
                        onKeyReleased: function onKeyReleased(keyCode, event) {
                          event.type = SystemEventType.KEY_UP;
                          systemEvent.emit(event.type, event);
                        }
                      });
                      eventManager.addListener(keyboardListener, 256);
                    }
                  } // Acceleration


                  if (type === SystemEventType.DEVICEMOTION) {
                    if (!accelerationListener) {
                      accelerationListener = EventListener.create({
                        event: EventListener.ACCELERATION,
                        callback: function callback(acc, event) {
                          event.type = SystemEventType.DEVICEMOTION;
                          legacyCC.systemEvent.emit(event.type, event);
                        }
                      });
                      eventManager.addListener(accelerationListener, 256);
                    }
                  } // touch


                  if (type === SystemEventType.TOUCH_START || type === SystemEventType.TOUCH_MOVE || type === SystemEventType.TOUCH_END || type === SystemEventType.TOUCH_CANCEL) {
                    if (!touchListener) {
                      touchListener = EventListener.create({
                        event: EventListener.TOUCH_ONE_BY_ONE,
                        onTouchBegan: function onTouchBegan(touch, event) {
                          event.type = SystemEventType.TOUCH_START;
                          legacyCC.systemEvent.emit(event.type, touch, event);
                          return true;
                        },
                        onTouchMoved: function onTouchMoved(touch, event) {
                          event.type = SystemEventType.TOUCH_MOVE;
                          legacyCC.systemEvent.emit(event.type, touch, event);
                        },
                        onTouchEnded: function onTouchEnded(touch, event) {
                          event.type = SystemEventType.TOUCH_END;
                          legacyCC.systemEvent.emit(event.type, touch, event);
                        },
                        onTouchCancelled: function onTouchCancelled(touch, event) {
                          event.type = SystemEventType.TOUCH_CANCEL;
                          legacyCC.systemEvent.emit(event.type, touch, event);
                        }
                      });
                      eventManager.addListener(touchListener, 256);
                    }
                  } // mouse


                  if (type === SystemEventType.MOUSE_DOWN || type === SystemEventType.MOUSE_MOVE || type === SystemEventType.MOUSE_UP || type === SystemEventType.MOUSE_WHEEL) {
                    if (!mouseListener) {
                      mouseListener = EventListener.create({
                        event: EventListener.MOUSE,
                        onMouseDown: function onMouseDown(event) {
                          event.type = SystemEventType.MOUSE_DOWN;
                          legacyCC.systemEvent.emit(event.type, event);
                        },
                        onMouseMove: function onMouseMove(event) {
                          event.type = SystemEventType.MOUSE_MOVE;
                          legacyCC.systemEvent.emit(event.type, event);
                        },
                        onMouseUp: function onMouseUp(event) {
                          event.type = SystemEventType.MOUSE_UP;
                          legacyCC.systemEvent.emit(event.type, event);
                        },
                        onMouseScroll: function onMouseScroll(event) {
                          event.type = SystemEventType.MOUSE_WHEEL;
                          legacyCC.systemEvent.emit(event.type, event);
                        }
                      });
                      eventManager.addListener(mouseListener, 256);
                    }
                  }

                  return callback;
                }
                /**
                 * @en
                 * Removes the listeners previously registered with the same type, callback, target and or useCapture,
                 * if only type is passed as parameter, all listeners registered with that type will be removed.
                 * @zh
                 * 删除之前用同类型，回调，目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。
                 *
                 * @param type - A string representing the event type being removed.
                 * @param callback - The callback to remove.
                 * @param target - The target (this object) to invoke the callback, if it's not given, only callback without target will be removed
                 */

              }, {
                key: "off",
                value: function off(type, callback, target) {

                  _get(_getPrototypeOf(SystemEvent.prototype), "off", this).call(this, type, callback, target); // Keyboard


                  if (keyboardListener && (type === SystemEventType.KEY_DOWN || type === SystemEventType.KEY_UP)) {
                    var hasKeyDownEventListener = this.hasEventListener(SystemEventType.KEY_DOWN);
                    var hasKeyUpEventListener = this.hasEventListener(SystemEventType.KEY_UP);

                    if (!hasKeyDownEventListener && !hasKeyUpEventListener) {
                      eventManager.removeListener(keyboardListener);
                      keyboardListener = null;
                    }
                  } // Acceleration


                  if (accelerationListener && type === SystemEventType.DEVICEMOTION) {
                    eventManager.removeListener(accelerationListener);
                    accelerationListener = null;
                  }

                  if (touchListener && (type === SystemEventType.TOUCH_START || type === SystemEventType.TOUCH_MOVE || type === SystemEventType.TOUCH_END || type === SystemEventType.TOUCH_CANCEL)) {
                    var hasTouchStart = this.hasEventListener(SystemEventType.TOUCH_START);
                    var hasTouchMove = this.hasEventListener(SystemEventType.TOUCH_MOVE);
                    var hasTouchEnd = this.hasEventListener(SystemEventType.TOUCH_END);
                    var hasTouchCancel = this.hasEventListener(SystemEventType.TOUCH_CANCEL);

                    if (!hasTouchStart && !hasTouchMove && !hasTouchEnd && !hasTouchCancel) {
                      eventManager.removeListener(touchListener);
                      touchListener = null;
                    }
                  }

                  if (mouseListener && (type === SystemEventType.MOUSE_DOWN || type === SystemEventType.MOUSE_MOVE || type === SystemEventType.MOUSE_UP || type === SystemEventType.MOUSE_WHEEL)) {
                    var hasMouseDown = this.hasEventListener(SystemEventType.MOUSE_DOWN);
                    var hasMouseMove = this.hasEventListener(SystemEventType.MOUSE_MOVE);
                    var hasMouseUp = this.hasEventListener(SystemEventType.MOUSE_UP);
                    var hasMouseWheel = this.hasEventListener(SystemEventType.MOUSE_WHEEL);

                    if (!hasMouseDown && !hasMouseMove && !hasMouseUp && !hasMouseWheel) {
                      eventManager.removeListener(mouseListener);
                      mouseListener = null;
                    }
                  }
                }
              }]);

              return SystemEvent;
            }(EventTarget));
            SystemEvent.EventType = SystemEventType;
            legacyCC.SystemEvent = SystemEvent;
            /**
             * @module cc
             */

            /**
             * @en The singleton of the SystemEvent, there should only be one instance to be used globally
             * @zh 系统事件单例，方便全局使用。
             */

            var systemEvent = exports('b', new SystemEvent());
            legacyCC.systemEvent = systemEvent;

            /**
             * @hidden
             */
            replaceProperty(SystemEventType, 'Node.EventType', [{
              name: 'POSITION_PART',
              newName: 'TRANSFORM_CHANGED'
            }, {
              name: 'ROTATION_PART',
              newName: 'TRANSFORM_CHANGED'
            }, {
              name: 'SCALE_PART',
              newName: 'TRANSFORM_CHANGED'
            }]);

            /*
             Copyright (c) 2008-2010 Ricardo Quesada
             Copyright (c) 2011-2012 cocos2d-x.org
             Copyright (c) 2013-2016 Chukong Technologies Inc.
             Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

             http://www.cocos2d-x.org

             Permission is hereby granted, free of charge, to any person obtaining a copy
             of this software and associated documentation files (the "Software"), to deal
             in the Software without restriction, including without limitation the rights
             to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             copies of the Software, and to permit persons to whom the Software is
             furnished to do so, subject to the following conditions:

             The above copyright notice and this permission notice shall be included in
             all copies or substantial portions of the Software.

             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             THE SOFTWARE.
            */
            /**
             * @en The screen API provides an easy way for web content to be presented using the user's entire screen.
             * It's designed for web platforms and some mobile browsers don't provide such behavior, e.g. Safari
             * @zh screen 单例对象提供简单的方法来尝试让 Web 内容进入全屏模式。这是 Web 平台特有的行为，在部分浏览器上并不支持这样的功能。
             */

            var screen = exports('s', {
              _supportsFullScreen: false,
              // the pre fullscreenchange function
              _preOnFullScreenChange: null,
              _touchEvent: '',
              _fn: null,
              // Function mapping for cross browser support
              _fnMap: [['requestFullscreen', 'exitFullscreen', 'fullscreenchange', 'fullscreenEnabled', 'fullscreenElement'], ['requestFullScreen', 'exitFullScreen', 'fullScreenchange', 'fullScreenEnabled', 'fullScreenElement'], ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitIsFullScreen', 'webkitCurrentFullScreenElement'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozfullscreenchange', 'mozFullScreen', 'mozFullScreenElement'], ['msRequestFullscreen', 'msExitFullscreen', 'MSFullscreenChange', 'msFullscreenEnabled', 'msFullscreenElement']],

              /**
               * @en Initialization
               * @zh 初始化函数
               */
              init: function init() {
                this._fn = {};
                var i,
                    l,
                    val,
                    map = this._fnMap,
                    valL;

                for (i = 0, l = map.length; i < l; i++) {
                  val = map[i];

                  if (val && typeof document[val[1]] !== 'undefined') {
                    for (i = 0, valL = val.length; i < valL; i++) {
                      this._fn[map[0][i]] = val[i];
                    }

                    break;
                  }
                }

                this._supportsFullScreen = this._fn.requestFullscreen !== undefined;
                this._touchEvent = 'ontouchstart' in window ? 'touchstart' : 'mousedown';
              },

              /**
               * @en Return true if it's in full screen state now.
               * @zh 当前是否处在全屏状态下
               * @returns {Boolean}
               */
              fullScreen: function fullScreen() {
                if (!this._supportsFullScreen) {
                  return false;
                } else if (document[this._fn.fullscreenElement] === undefined || document[this._fn.fullscreenElement] === null) {
                  return false;
                } else {
                  return true;
                }
              },

              /**
               * @en Request to enter full screen mode with the given element.
               * Many browser forbid to enter full screen mode without an user intended interaction.
               * For simplify the process, you can try to use {{autoFullScreen}} which will try to enter full screen mode during the next user touch event.
               * @zh 尝试使当前节点进入全屏模式，很多浏览器不允许程序触发这样的行为，必须在一个用户交互回调中才会生效。
               * 如果希望更简单一些，可以尝试用 {{autoFullScreen}} 来自动监听用户触摸事件并在下一次触摸事件中尝试进入全屏模式。
               * @param element The element to request full screen state
               * @param onFullScreenChange callback function when full screen state changed
               */
              requestFullScreen: function requestFullScreen(element, onFullScreenChange) {
                if (!this._supportsFullScreen) {
                  return;
                }

                element = element || document.documentElement;

                if (onFullScreenChange) {
                  var eventName = this._fn.fullscreenchange;

                  if (this._preOnFullScreenChange) {
                    document.removeEventListener(eventName, this._preOnFullScreenChange);
                  }

                  this._preOnFullScreenChange = onFullScreenChange;
                  document.addEventListener(eventName, onFullScreenChange, false);
                }

                return element[this._fn.requestFullscreen]();
              },

              /**
               * @en Exit the full mode.
               * @zh 退出全屏模式
               * @return Success or not
               */
              exitFullScreen: function exitFullScreen() {
                return this._supportsFullScreen ? document[this._fn.exitFullscreen]() : true;
              },

              /**
               * @en Automatically request full screen during the next touch/click event
               * @zh 自动监听触摸、鼠标事件并在下一次事件触发时尝试进入全屏模式
               * @param element The element to request full screen state
               * @param onFullScreenChange callback function when full screen state changed
               */
              autoFullScreen: function autoFullScreen(element, onFullScreenChange) {
                element = element || document.body;
                var touchTarget = legacyCC.game.canvas || element;
                var theScreen = this; // Function bind will be too complicated here because we need the callback function's reference to remove the listener

                function callback() {
                  touchTarget.removeEventListener(theScreen._touchEvent, callback);
                  theScreen.requestFullScreen(element, onFullScreenChange);
                }

                this.requestFullScreen(element, onFullScreenChange);
                touchTarget.addEventListener(this._touchEvent, callback);
              }
            });
            screen.init();
            legacyCC.screen = screen;

            var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _temp;

            ccenum(GFXBlendFactor);
            /**
             * @en
             * The shader property type of the material after instantiation.
             *
             * @zh
             * 实例后的材质的着色器属性类型。
             */

            var InstanceMaterialType;

            (function (InstanceMaterialType) {
              InstanceMaterialType[InstanceMaterialType["ADD_COLOR"] = 0] = "ADD_COLOR";
              InstanceMaterialType[InstanceMaterialType["ADD_COLOR_AND_TEXTURE"] = 1] = "ADD_COLOR_AND_TEXTURE";
              InstanceMaterialType[InstanceMaterialType["GRAYSCALE"] = 2] = "GRAYSCALE";
              InstanceMaterialType[InstanceMaterialType["USE_ALPHA_SEPARATED"] = 3] = "USE_ALPHA_SEPARATED";
              InstanceMaterialType[InstanceMaterialType["USE_ALPHA_SEPARATED_AND_GRAY"] = 4] = "USE_ALPHA_SEPARATED_AND_GRAY";
            })(InstanceMaterialType || (InstanceMaterialType = exports('I', {})));

            var _matInsInfo = {
              parent: null,
              owner: null,
              subModelIdx: 0
            };
            /**
             * @en Base class for 2D components which supports rendering features.
             * This component will setup [[NodeUIProperties.uiComp]] in its owner [[Node]]
             *
             * @zh 所有支持渲染的 2D 组件的基类。
             * 这个组件会设置 [[Node]] 上的 [[NodeUIProperties.uiComp]]。
             */

            var UIRenderable = exports('U', (_dec = ccclass('cc.UIRenderable'), _dec2 = requireComponent(UITransform), _dec3 = type(GFXBlendFactor), _dec4 = displayOrder(), _dec5 = tooltip(), _dec6 = type(GFXBlendFactor), _dec7 = displayOrder(), _dec8 = tooltip(), _dec9 = displayOrder(), _dec10 = tooltip(), _dec(_class = _dec2(_class = disallowMultiple(_class = executeInEditMode(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_RenderableComponent) {
              _inherits(UIRenderable, _RenderableComponent);

              function UIRenderable() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, UIRenderable);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UIRenderable)).call.apply(_getPrototypeOf2, [this].concat(args)));
                _this._uiMaterial = null;
                _this._uiMaterialIns = null;
                _this._uiMaterialDirty = false;
                _this._uiMatInsDirty = false;

                _initializerDefineProperty(_this, "_srcBlendFactor", _descriptor, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_dstBlendFactor", _descriptor2, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_color", _descriptor3, _assertThisInitialized(_this));

                _this._assembler = null;
                _this._postAssembler = null;
                _this._renderData = null;
                _this._renderDataFlag = true;
                _this._renderFlag = true;
                _this._delegateSrc = null;
                _this._instanceMaterialType = InstanceMaterialType.ADD_COLOR_AND_TEXTURE;
                _this._blendTemplate = {
                  blendState: {
                    targets: [{
                      blendSrc: GFXBlendFactor.SRC_ALPHA,
                      blendDst: GFXBlendFactor.ONE_MINUS_SRC_ALPHA
                    }]
                  }
                };
                _this._lastParent = null;
                return _this;
              }

              _createClass(UIRenderable, [{
                key: "getUIRenderMaterial",
                value: function getUIRenderMaterial() {
                  return this._uiMaterialIns || this._uiMaterial;
                }
              }, {
                key: "getUIMaterialInstance",
                value: function getUIMaterialInstance() {
                  if (!this._uiMaterialIns || this._uiMatInsDirty) {
                    _matInsInfo.owner = this;
                    _matInsInfo.parent = this._uiMaterial;
                    this._uiMaterialIns = new MaterialInstance(_matInsInfo);
                    this._uiMatInsDirty = false;
                  }

                  return this._uiMaterialIns;
                }
              }, {
                key: "__preload",
                value: function __preload() {
                  this.node._uiProps.uiComp = this;

                  if (this._flushAssembler) {
                    this._flushAssembler();
                  }
                }
              }, {
                key: "onEnable",
                value: function onEnable() {
                  this.node.on(SystemEventType.ANCHOR_CHANGED, this._nodeStateChange, this);
                  this.node.on(SystemEventType.SIZE_CHANGED, this._nodeStateChange, this);
                  this._renderFlag = this._canRender();
                }
              }, {
                key: "onDisable",
                value: function onDisable() {
                  this.node.off(SystemEventType.ANCHOR_CHANGED, this._nodeStateChange, this);
                  this.node.off(SystemEventType.SIZE_CHANGED, this._nodeStateChange, this);
                  this._renderFlag = false;
                }
              }, {
                key: "onDestroy",
                value: function onDestroy() {
                  if (this.node._uiProps.uiComp === this) {
                    this.node._uiProps.uiComp = null;
                  }

                  this.destroyRenderData();

                  if (this._materialInstances) {
                    for (var i = 0; i < this._materialInstances.length; i++) {
                      this._materialInstances[i].destroy();
                    }
                  }

                  if (this._uiMaterialIns) {
                    this._uiMaterialIns.destroy();
                  }

                  this._renderData = null;
                }
                /**
                 * @en Marks the render data of the current component as modified so that the render data is recalculated.
                 * @zh 标记当前组件的渲染数据为已修改状态，这样渲染数据才会重新计算。
                 * @param enable Marked necessary to update or not
                 */

              }, {
                key: "markForUpdateRenderData",
                value: function markForUpdateRenderData() {
                  var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                  this._renderFlag = this._canRender();

                  if (enable && this._renderFlag) {
                    var renderData = this._renderData;

                    if (renderData) {
                      renderData.vertDirty = true;
                    }

                    this._renderDataFlag = enable;
                  } else if (!enable) {
                    this._renderDataFlag = enable;
                  }
                }
                /**
                 * @en Request new render data object.
                 * @zh 请求新的渲染数据对象。
                 * @return The new render data
                 */

              }, {
                key: "requestRenderData",
                value: function requestRenderData() {
                  var data = RenderData.add();
                  this._renderData = data;
                  return data;
                }
                /**
                 * @en Destroy current render data.
                 * @zh 销毁当前渲染数据。
                 */

              }, {
                key: "destroyRenderData",
                value: function destroyRenderData() {
                  if (!this._renderData) {
                    return;
                  }

                  RenderData.remove(this._renderData);
                  this._renderData = null;
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
                value: function updateAssembler(render) {
                  if (this._renderFlag) {
                    this._checkAndUpdateRenderData();

                    this._render(render);
                  }
                }
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
                value: function postUpdateAssembler(render) {
                  if (this._renderFlag) {
                    this._postRender(render);
                  }
                }
              }, {
                key: "_render",
                value: function _render(render) {}
              }, {
                key: "_postRender",
                value: function _postRender(render) {}
              }, {
                key: "_checkAndUpdateRenderData",
                value: function _checkAndUpdateRenderData() {
                  if (this._renderDataFlag) {
                    this._assembler.updateRenderData(this);

                    this._renderDataFlag = false;
                  }
                }
              }, {
                key: "_canRender",
                value: function _canRender() {
                  // this.getMaterial(0) !== null still can render is hack for builtin Material
                  return this.enabled && (this._delegateSrc ? this._delegateSrc.activeInHierarchy : this.enabledInHierarchy);
                }
              }, {
                key: "_postCanRender",
                value: function _postCanRender() {}
              }, {
                key: "_updateColor",
                value: function _updateColor() {
                  if (this._assembler && this._assembler.updateColor) {
                    this._assembler.updateColor(this);
                  }
                }
              }, {
                key: "_updateBlendFunc",
                value: function _updateBlendFunc() {
                  var mat = this.getMaterial(0);
                  var target = this._blendTemplate.blendState.targets[0];

                  if (mat) {
                    if (target.blendDst !== this._dstBlendFactor || target.blendSrc !== this._srcBlendFactor) {
                      mat = this.material;
                      target.blendDst = this._dstBlendFactor;
                      target.blendSrc = this._srcBlendFactor;
                      mat.overridePipelineStates(this._blendTemplate, 0);
                    }

                    return mat;
                  }

                  if (this._uiMaterialIns !== null && this._uiMatInsDirty || target.blendDst !== this._dstBlendFactor || target.blendSrc !== this._srcBlendFactor) {
                    mat = this.getUIMaterialInstance();
                    target.blendDst = this._dstBlendFactor;
                    target.blendSrc = this._srcBlendFactor;
                    mat.overridePipelineStates(this._blendTemplate, 0);
                  }

                  return mat || this.getUIRenderMaterial();
                } // pos, rot, scale changed

              }, {
                key: "_nodeStateChange",
                value: function _nodeStateChange(type) {
                  if (this._renderData) {
                    this.markForUpdateRenderData();
                  }

                  for (var _iterator = _createForOfIteratorHelperLoose(this.node.children), _step; !(_step = _iterator()).done;) {
                    var child = _step.value;
                    var renderComp = child.getComponent(UIRenderable);

                    if (renderComp) {
                      renderComp.markForUpdateRenderData();
                    }
                  }
                }
              }, {
                key: "_updateBuiltinMaterial",
                value: function _updateBuiltinMaterial() {
                  // not need _uiMaterialDirty at firstTime
                  var init = false;

                  if (!this._uiMaterial) {
                    init = true;
                  }

                  if (this._uiMaterial && !this._uiMaterialDirty) {
                    return this._uiMaterial;
                  } else {
                    switch (this._instanceMaterialType) {
                      case InstanceMaterialType.ADD_COLOR:
                        this._uiMaterial = builtinResMgr.get('ui-base-material');
                        break;

                      case InstanceMaterialType.ADD_COLOR_AND_TEXTURE:
                        this._uiMaterial = builtinResMgr.get('ui-sprite-material');
                        break;

                      case InstanceMaterialType.GRAYSCALE:
                        this._uiMaterial = builtinResMgr.get('ui-sprite-gray-material');
                        break;

                      case InstanceMaterialType.USE_ALPHA_SEPARATED:
                        this._uiMaterial = builtinResMgr.get('ui-sprite-alpha-sep-material');
                        break;

                      case InstanceMaterialType.USE_ALPHA_SEPARATED_AND_GRAY:
                        this._uiMaterial = builtinResMgr.get('ui-sprite-gray-alpha-sep-material');
                        break;

                      default:
                        this._uiMaterial = builtinResMgr.get('ui-sprite-material');
                        break;
                    }

                    this._uiMaterialDirty = false;

                    if (!init) {
                      this._uiMatInsDirty = true;
                    }

                    return this._uiMaterial;
                  }
                }
              }, {
                key: "srcBlendFactor",

                /**
                 * @en Specifies the source blend mode, it will clone a new material object.
                 * @zh 指定源的混合模式，这会克隆一个新的材质对象，注意这带来的性能和内存损耗。
                 * @example
                 * ```ts
                 * sprite.srcBlendFactor = GFXBlendFactor.ONE;
                 * ```
                 */
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
                /**
                 * @en Specifies the destination blend mode.
                 * @zh 指定目标的混合模式，这会克隆一个新的材质对象，注意这带来的性能和内存损耗。
                 * @example
                 * ```ts
                 * sprite.dstBlendFactor = GFXBlendFactor.ONE_MINUS_SRC_ALPHA;
                 * ```
                 */

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
                /**
                 * @en Main color for rendering, it normally multiplies with texture color.
                 * @zh 渲染颜色，一般情况下会和贴图颜色相乘。
                 */

              }, {
                key: "color",
                get: function get() {
                  return this._color;
                },
                set: function set(value) {
                  if (this._color.equals(value)) {
                    return;
                  }

                  this._color.set(value);

                  this._updateColor();

                  this.markForUpdateRenderData();
                } // hack for builtinMaterial

              }, {
                key: "uiMaterial",

                /**
                 * @en The user customized material, if not set, it will use builtin material resources, and will show nothing on inspector field.
                 * @zh 用户自定义材质，如果没有设置过，那么将使用引擎内置的材质资源，在面板上也不会显示。
                 */
                get: function get() {
                  return this._uiMaterial;
                },
                set: function set(val) {
                  this._uiMaterial = val;
                }
              }, {
                key: "renderData",
                get: function get() {
                  return this._renderData;
                } // Render data can be submitted even if it is not on the node tree

              }, {
                key: "delegateSrc",
                set: function set(value) {
                  this._delegateSrc = value;
                }
                /**
                 * @en The blend factor enums
                 * @zh 混合模式枚举类型
                 * @see [[GFXBlendFactor]]
                 */

              }]);

              return UIRenderable;
            }(RenderableComponent), _class3.BlendState = GFXBlendFactor, _class3.Assembler = null, _class3.PostAssembler = null, _temp), (_applyDecoratedDescriptor(_class2.prototype, "srcBlendFactor", [_dec3, _dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "srcBlendFactor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "dstBlendFactor", [_dec6, _dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "dstBlendFactor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "color", [_dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "color"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_srcBlendFactor", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return GFXBlendFactor.SRC_ALPHA;
              }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_dstBlendFactor", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return GFXBlendFactor.ONE_MINUS_SRC_ALPHA;
              }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_color", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return Color.WHITE.clone();
              }
            })), _class2)) || _class) || _class) || _class) || _class));

            var _dec$1, _dec2$1, _dec3$1, _dec4$1, _dec5$1, _dec6$1, _dec7$1, _dec8$1, _dec9$1, _dec10$1, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class$1, _class2$1, _descriptor$1, _descriptor2$1, _descriptor3$1, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _class3$1, _temp$1;
            /**
             * @en
             * Enum for sprite type.
             *
             * @zh
             * Sprite 类型。
             */

            var SpriteType;

            (function (SpriteType) {
              SpriteType[SpriteType["SIMPLE"] = 0] = "SIMPLE";
              SpriteType[SpriteType["SLICED"] = 1] = "SLICED";
              SpriteType[SpriteType["TILED"] = 2] = "TILED";
              SpriteType[SpriteType["FILLED"] = 3] = "FILLED";
            })(SpriteType || (SpriteType = {}));

            ccenum(SpriteType);
            /**
             * @en
             * Enum for fill type.
             *
             * @zh
             * 填充类型。
             */

            var FillType;

            (function (FillType) {
              FillType[FillType["HORIZONTAL"] = 0] = "HORIZONTAL";
              FillType[FillType["VERTICAL"] = 1] = "VERTICAL";
              FillType[FillType["RADIAL"] = 2] = "RADIAL";
            })(FillType || (FillType = {}));

            ccenum(FillType);
            /**
             * @en
             * Sprite Size can track trimmed size, raw size or none.
             *
             * @zh
             * 精灵尺寸调整模式。
             */

            var SizeMode;

            (function (SizeMode) {
              SizeMode[SizeMode["CUSTOM"] = 0] = "CUSTOM";
              SizeMode[SizeMode["TRIMMED"] = 1] = "TRIMMED";
              SizeMode[SizeMode["RAW"] = 2] = "RAW";
            })(SizeMode || (SizeMode = {}));

            ccenum(SizeMode);
            var EventType;
            /**
             * @en
             * Renders a sprite in the scene.
             *
             * @zh
             * 渲染精灵组件。
             */

            (function (EventType) {
              EventType["SPRITE_FRAME_CHANGED"] = "spriteframe-changed";
            })(EventType || (EventType = {}));

            var Sprite = exports('d', (_dec$1 = ccclass('cc.Sprite'), _dec2$1 = help(), _dec3$1 = executionOrder(110), _dec4$1 = menu(), _dec5$1 = type(SpriteAtlas), _dec6$1 = displayOrder(), _dec7$1 = tooltip(), _dec8$1 = type(SpriteFrame), _dec9$1 = displayOrder(), _dec10$1 = tooltip(), _dec11 = type(SpriteType), _dec12 = displayOrder(), _dec13 = tooltip(), _dec14 = type(FillType), _dec15 = tooltip(), _dec16 = tooltip(), _dec17 = range(), _dec18 = tooltip(), _dec19 = range(), _dec20 = tooltip(), _dec21 = displayOrder(), _dec22 = tooltip(), _dec23 = type(SizeMode), _dec24 = displayOrder(), _dec25 = tooltip(), _dec$1(_class$1 = _dec2$1(_class$1 = _dec3$1(_class$1 = _dec4$1(_class$1 = (_class2$1 = (_temp$1 = _class3$1 = /*#__PURE__*/function (_UIRenderable) {
              _inherits(Sprite, _UIRenderable);

              function Sprite() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, Sprite);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Sprite)).call.apply(_getPrototypeOf2, [this].concat(args)));

                _initializerDefineProperty(_this, "_spriteFrame", _descriptor$1, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_type", _descriptor2$1, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_fillType", _descriptor3$1, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_sizeMode", _descriptor4, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_fillCenter", _descriptor5, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_fillStart", _descriptor6, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_fillRange", _descriptor7, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_isTrimmedMode", _descriptor8, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_useGrayscale", _descriptor9, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_atlas", _descriptor10, _assertThisInitialized(_this));

                return _this;
              }

              _createClass(Sprite, [{
                key: "__preload",
                // static State = State;
                value: function __preload() {
                  this.changeMaterialForDefine();

                  _get(_getPrototypeOf(Sprite.prototype), "__preload", this).call(this);

                  if (this._spriteFrame) {
                    this._spriteFrame.on('load', this._markForUpdateUvDirty, this);

                    this._markForUpdateUvDirty();
                  }
                } // /**
                //  * Change the state of sprite.
                //  * @method setState
                //  * @see `Sprite.State`
                //  * @param state {Sprite.State} NORMAL or GRAY State.
                //  */
                // getState() {
                //     return this._state;
                // }
                // setState(state) {
                //     if (this._state === state) return;
                //     this._state = state;
                //     this._activateMaterial();
                // }
                // onLoad() {}

              }, {
                key: "onEnable",
                value: function onEnable() {
                  _get(_getPrototypeOf(Sprite.prototype), "onEnable", this).call(this); // this._flushAssembler();


                  this._activateMaterial(); // updateBlendFunc for custom material


                  if (this.getMaterial(0)) {
                    this._updateBlendFunc();
                  }
                }
              }, {
                key: "onDestroy",
                value: function onDestroy() {
                  _get(_getPrototypeOf(Sprite.prototype), "onDestroy", this).call(this);

                  this.destroyRenderData();

                  if (this._spriteFrame) {
                    this._spriteFrame.off('load');
                  }
                }
                /**
                 * @en
                 * Quickly switch to other sprite frame in the sprite atlas.
                 * If there is no atlas, the switch fails.
                 *
                 * @zh
                 * 精灵图集内的精灵替换
                 *
                 * @returns
                 */

              }, {
                key: "changeSpriteFrameFromAtlas",
                value: function changeSpriteFrameFromAtlas(name) {
                  if (!this._atlas) {
                    console.warn('SpriteAtlas is null.');
                    return;
                  }

                  var sprite = this._atlas.getSpriteFrame(name);

                  this.spriteFrame = sprite;
                }
              }, {
                key: "changeMaterialForDefine",
                value: function changeMaterialForDefine() {
                  var texture;

                  if (this._spriteFrame) {
                    texture = this._spriteFrame.texture;
                  }

                  var value = false;

                  if (texture instanceof TextureBase) {
                    var format = texture.getPixelFormat();
                    value = format === PixelFormat.RGBA_ETC1 || format === PixelFormat.RGB_A_PVRTC_4BPPV1 || format === PixelFormat.RGB_A_PVRTC_2BPPV1;
                  }

                  if (value && this.grayscale) {
                    this._instanceMaterialType = InstanceMaterialType.USE_ALPHA_SEPARATED_AND_GRAY;
                  } else if (value) {
                    this._instanceMaterialType = InstanceMaterialType.USE_ALPHA_SEPARATED;
                  } else if (this.grayscale) {
                    this._instanceMaterialType = InstanceMaterialType.GRAYSCALE;
                  } else {
                    this._instanceMaterialType = InstanceMaterialType.ADD_COLOR_AND_TEXTURE;
                  }

                  this._uiMaterialDirty = true;
                }
              }, {
                key: "_render",
                value: function _render(render) {
                  render.commitComp(this, this._spriteFrame.getGFXTexture(), this._assembler, this._spriteFrame.texture.getGFXSampler()); // render.commitComp(this, this._spriteFrame!.getGFXTextureView(), this._assembler!);
                }
              }, {
                key: "_canRender",
                value: function _canRender() {
                  // if (cc.game.renderType === cc.game.RENDER_TYPE_CANVAS) {
                  //     if (!this._enabled) { return false; }
                  // } else {
                  //     if (!this._enabled || !this._material) { return false; }
                  // }
                  // const spriteFrame = this._spriteFrame;
                  // if (!spriteFrame || !spriteFrame.textureLoaded()) {
                  //     return false;
                  // }
                  // return true;
                  if (!_get(_getPrototypeOf(Sprite.prototype), "_canRender", this).call(this)) {
                    return false;
                  }

                  var spriteFrame = this._spriteFrame;

                  if (!spriteFrame || !spriteFrame.textureLoaded()) {
                    return false;
                  }

                  return true;
                }
              }, {
                key: "_flushAssembler",
                value: function _flushAssembler() {
                  var assembler = Sprite.Assembler.getAssembler(this);

                  if (this._assembler !== assembler) {
                    this.destroyRenderData();
                    this._assembler = assembler;
                  }

                  if (!this._renderData) {
                    if (this._assembler && this._assembler.createData) {
                      this._renderData = this._assembler.createData(this);
                      this._renderData.material = this.getRenderMaterial(0);
                      this.markForUpdateRenderData();

                      this._updateColor();
                    }
                  }
                }
              }, {
                key: "_applySpriteSize",
                value: function _applySpriteSize() {
                  if (this._spriteFrame) {
                    if (SizeMode.RAW === this._sizeMode) {
                      var size = this._spriteFrame.originalSize;

                      this.node._uiProps.uiTransformComp.setContentSize(size);
                    } else if (SizeMode.TRIMMED === this._sizeMode) {
                      var rect = this._spriteFrame.getRect();

                      this.node._uiProps.uiTransformComp.setContentSize(rect.width, rect.height);
                    }

                    this._activateMaterial();
                  }
                }
              }, {
                key: "_resized",
                value: function _resized() {
                  {
                    return;
                  }
                }
              }, {
                key: "_activateMaterial",
                value: function _activateMaterial() {
                  var spriteFrame = this._spriteFrame;
                  var material = this.getRenderMaterial(0); // WebGL

                  if (legacyCC.game.renderType !== legacyCC.game.RENDER_TYPE_CANVAS) {
                    // if (!material) {
                    //     this._material = cc.builtinResMgr.get('sprite-material');
                    //     material = this._material;
                    //     if (spriteFrame && spriteFrame.textureLoaded()) {
                    //         material!.setProperty('mainTexture', spriteFrame);
                    //         this.markForUpdateRenderData();
                    //     }
                    // }
                    // TODO: use editor assets
                    // else {
                    if (spriteFrame) {
                      if (material) {
                        // const matTexture = material.getProperty('mainTexture');
                        // if (matTexture !== spriteFrame) {
                        // material.setProperty('mainTexture', spriteFrame.texture);
                        this.markForUpdateRenderData(); // }
                      }
                    } // }


                    if (this._renderData) {
                      this._renderData.material = material;
                    }
                  } else {
                    this.markForUpdateRenderData(); // this.markForRender(true);
                  }
                }
                /*
                    private _applyAtlas (spriteFrame: SpriteFrame | null) {
                        if (!EDITOR) {
                            return;
                        }
                        // Set atlas
                        if (spriteFrame) {
                            if (spriteFrame.atlasUuid.length > 0) {
                                if (!this._atlas || this._atlas._uuid !== spriteFrame.atlasUuid) {
                                    const self = this;
                                    AssetLibrary.loadAsset(spriteFrame.atlasUuid, (err, asset) => {
                                        self._atlas = asset;
                                    });
                                }
                            }else{
                                this._atlas = null;
                            }
                        }
                    }
                */

              }, {
                key: "_onTextureLoaded",
                value: function _onTextureLoaded() {
                  if (!this.isValid) {
                    return;
                  }

                  this.changeMaterialForDefine();

                  this._applySpriteSize();
                }
              }, {
                key: "_applySpriteFrame",
                value: function _applySpriteFrame(oldFrame) {
                  // if (oldFrame && oldFrame.off) {
                  //     oldFrame.off('load', this._onTextureLoaded, this);
                  // }
                  var spriteFrame = this._spriteFrame; // if (!spriteFrame || (this._material && this._material._texture) !== (spriteFrame && spriteFrame._texture)) {
                  //     // disable render flow until texture is loaded
                  //     this.markForRender(false);
                  // }

                  if (this._renderData) {
                    if (oldFrame) {
                      oldFrame.off('load', this._markForUpdateUvDirty);
                    }

                    if (spriteFrame) {
                      spriteFrame.on('load', this._markForUpdateUvDirty, this);
                    }

                    if (!this._renderData.uvDirty) {
                      if (oldFrame && spriteFrame) {
                        this._renderData.uvDirty = oldFrame.uvHash !== spriteFrame.uvHash;
                      } else {
                        this._renderData.uvDirty = true;
                      }
                    }

                    this._renderDataFlag = this._renderData.uvDirty;
                  }

                  if (spriteFrame) {
                    if (!oldFrame || spriteFrame !== oldFrame) {
                      // this._material.setProperty('mainTexture', spriteFrame);
                      if (spriteFrame.loaded) {
                        this._onTextureLoaded();
                      } else {
                        spriteFrame.once('load', this._onTextureLoaded, this);
                      }
                    }
                  }
                  /*
                          if (EDITOR) {
                              // Set atlas
                              this._applyAtlas(spriteFrame);
                          }
                  */

                }
                /**
                 * 强制刷新 uv。
                 */

              }, {
                key: "_markForUpdateUvDirty",
                value: function _markForUpdateUvDirty() {
                  if (this._renderData) {
                    this._renderData.uvDirty = true;
                    this._renderDataFlag = true;
                  }
                }
              }, {
                key: "spriteAtlas",

                /**
                 * @en
                 * The sprite atlas where the sprite is.
                 *
                 * @zh
                 * 精灵的图集。
                 */
                get: function get() {
                  return this._atlas;
                },
                set: function set(value) {
                  if (this._atlas === value) {
                    return;
                  }

                  this._atlas = value; //        this.spriteFrame = null;
                }
                /**
                 * @en
                 * The sprite frame of the sprite.
                 *
                 * @zh
                 * 精灵的精灵帧。
                 */

              }, {
                key: "spriteFrame",
                get: function get() {
                  return this._spriteFrame;
                },
                set: function set(value) {
                  if (this._spriteFrame === value) {
                    return;
                  }

                  var lastSprite = this._spriteFrame;
                  this._spriteFrame = value; // render & update render data flag will be triggered while applying new sprite frame

                  this.markForUpdateRenderData(false);

                  this._applySpriteFrame(lastSprite);
                }
                /**
                 * @en
                 * The sprite render type.
                 *
                 * @zh
                 * 精灵渲染类型。
                 *
                 * @example
                 * ```ts
                 * import { Sprite } from 'cc';
                 * sprite.type = Sprite.Type.SIMPLE;
                 * ```
                 */

              }, {
                key: "type",
                get: function get() {
                  return this._type;
                },
                set: function set(value) {
                  if (this._type !== value) {
                    this._type = value;

                    this._flushAssembler();
                  }
                }
                /**
                 * @en
                 * The fill type, This will only have any effect if the "type" is set to “Sprite.Type.FILLED”.
                 *
                 * @zh
                 * 精灵填充类型，仅渲染类型设置为 Sprite.Type.FILLED 时有效。
                 *
                 * @example
                 * ```ts
                 * import { Sprite } from 'cc';
                 * sprite.fillType = Sprite.FillType.HORIZONTAL;
                 * ```
                 */

              }, {
                key: "fillType",
                get: function get() {
                  return this._fillType;
                },
                set: function set(value) {
                  if (this._fillType !== value) {
                    if (value === FillType.RADIAL || this._fillType === FillType.RADIAL) {
                      this.destroyRenderData();
                      this._renderData = null;
                    } else {
                      if (this._renderData) {
                        this.markForUpdateRenderData(true);
                      }
                    }
                  }

                  this._fillType = value;

                  this._flushAssembler();
                }
                /**
                 * @en
                 * The fill Center, This will only have any effect if the "type" is set to “Sprite.Type.FILLED”.
                 *
                 * @zh
                 * 填充中心点，仅渲染类型设置为 Sprite.Type.FILLED 时有效。
                 *
                 * @example
                 * ```ts
                 * import { Vec2 } from 'cc';
                 * sprite.fillCenter = new Vec2(0, 0);
                 * ```
                 */

              }, {
                key: "fillCenter",
                get: function get() {
                  return this._fillCenter;
                },
                set: function set(value) {
                  this._fillCenter.x = value.x;
                  this._fillCenter.y = value.y;

                  if (this._type === SpriteType.FILLED && this._renderData) {
                    this.markForUpdateRenderData();
                  }
                }
                /**
                 * @en
                 * The fill Start, This will only have any effect if the "type" is set to “Sprite.Type.FILLED”.
                 *
                 * @zh
                 * 填充起始点，仅渲染类型设置为 Sprite.Type.FILLED 时有效。
                 *
                 * @example
                 * ```ts
                 * // -1 To 1 between the numbers
                 * sprite.fillStart = 0.5;
                 * ```
                 */

              }, {
                key: "fillStart",
                get: function get() {
                  return this._fillStart;
                },
                set: function set(value) {
                  this._fillStart = clamp(value, -1, 1);

                  if (this._type === SpriteType.FILLED && this._renderData) {
                    this.markForUpdateRenderData();
                    this._renderData.uvDirty = true;
                  }
                }
                /**
                 * @en
                 * The fill Range, This will only have any effect if the "type" is set to “Sprite.Type.FILLED”.
                 *
                 * @zh
                 * 填充范围，仅渲染类型设置为 Sprite.Type.FILLED 时有效。
                 *
                 * @example
                 * ```ts
                 * // -1 To 1 between the numbers
                 * sprite.fillRange = 1;
                 * ```
                 */

              }, {
                key: "fillRange",
                get: function get() {
                  return this._fillRange;
                },
                set: function set(value) {
                  // positive: counterclockwise, negative: clockwise
                  this._fillRange = clamp(value, -1, 1);

                  if (this._type === SpriteType.FILLED && this._renderData) {
                    this.markForUpdateRenderData();
                    this._renderData.uvDirty = true;
                  }
                }
                /**
                 * @en
                 * specify the frame is trimmed or not.
                 *
                 * @zh
                 * 是否使用裁剪模式。
                 *
                 * @example
                 * ```ts
                 * sprite.trim = true;
                 * ```
                 */

              }, {
                key: "trim",
                get: function get() {
                  return this._isTrimmedMode;
                },
                set: function set(value) {
                  if (this._isTrimmedMode === value) {
                    return;
                  }

                  this._isTrimmedMode = value;

                  if (this._type === SpriteType.SIMPLE
                  /*|| this._type === SpriteType.MESH*/
                  && this._renderData) {
                    this.markForUpdateRenderData(true);
                  }
                }
              }, {
                key: "grayscale",
                get: function get() {
                  return this._useGrayscale;
                },
                set: function set(value) {
                  if (this._useGrayscale === value) {
                    return;
                  }

                  this._useGrayscale = value;

                  if (value === true) {
                    this._instanceMaterialType = InstanceMaterialType.GRAYSCALE;
                  } else {
                    this._instanceMaterialType = InstanceMaterialType.ADD_COLOR_AND_TEXTURE;
                  }

                  this._uiMaterialDirty = true;
                }
                /**
                 * @en
                 * Specify the size tracing mode.
                 *
                 * @zh
                 * 精灵尺寸调整模式。
                 *
                 * @example
                 * ```ts
                 * import { Sprite } from 'cc';
                 * sprite.sizeMode = Sprite.SizeMode.CUSTOM;
                 * ```
                 */

              }, {
                key: "sizeMode",
                get: function get() {
                  return this._sizeMode;
                },
                set: function set(value) {
                  if (this._sizeMode === value) {
                    return;
                  }

                  this._sizeMode = value;

                  if (value !== SizeMode.CUSTOM) {
                    this._applySpriteSize();
                  }
                }
              }]);

              return Sprite;
            }(UIRenderable), _class3$1.FillType = FillType, _class3$1.Type = SpriteType, _class3$1.SizeMode = SizeMode, _class3$1.EventType = EventType, _temp$1), (_applyDecoratedDescriptor(_class2$1.prototype, "spriteAtlas", [_dec5$1, _dec6$1, _dec7$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "spriteAtlas"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "spriteFrame", [_dec8$1, _dec9$1, _dec10$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "spriteFrame"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "type", [_dec11, _dec12, _dec13], Object.getOwnPropertyDescriptor(_class2$1.prototype, "type"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "fillType", [_dec14, _dec15], Object.getOwnPropertyDescriptor(_class2$1.prototype, "fillType"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "fillCenter", [_dec16], Object.getOwnPropertyDescriptor(_class2$1.prototype, "fillCenter"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "fillStart", [_dec17, _dec18], Object.getOwnPropertyDescriptor(_class2$1.prototype, "fillStart"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "fillRange", [_dec19, _dec20], Object.getOwnPropertyDescriptor(_class2$1.prototype, "fillRange"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "trim", [_dec21, _dec22], Object.getOwnPropertyDescriptor(_class2$1.prototype, "trim"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "grayscale", [editable], Object.getOwnPropertyDescriptor(_class2$1.prototype, "grayscale"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "sizeMode", [_dec23, _dec24, _dec25], Object.getOwnPropertyDescriptor(_class2$1.prototype, "sizeMode"), _class2$1.prototype), _descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_spriteFrame", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_type", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return SpriteType.SIMPLE;
              }
            }), _descriptor3$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_fillType", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return FillType.HORIZONTAL;
              }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2$1.prototype, "_sizeMode", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return SizeMode.TRIMMED;
              }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2$1.prototype, "_fillCenter", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return new Vec2(0, 0);
              }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2$1.prototype, "_fillStart", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0;
              }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2$1.prototype, "_fillRange", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0;
              }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2$1.prototype, "_isTrimmedMode", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return true;
              }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2$1.prototype, "_useGrayscale", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return false;
              }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2$1.prototype, "_atlas", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            })), _class2$1)) || _class$1) || _class$1) || _class$1) || _class$1));

            var _dec$2, _dec2$2, _dec3$2, _dec4$2, _dec5$2, _dec6$2, _class$2, _class2$2, _descriptor$2, _temp$2;
            /**
             * @en SubContextView is a view component which controls open data context viewport in WeChat game platform.<br/>
             * The component's node size decide the viewport of the sub context content in main context,
             * the entire sub context texture will be scaled to the node's bounding box area.<br/>
             * This component provides multiple important features:<br/>
             * 1. Sub context could use its own resolution size and policy.<br/>
             * 2. Sub context could be minized to smallest size it needed.<br/>
             * 3. Resolution of sub context content could be increased.<br/>
             * 4. User touch input is transformed to the correct viewport.<br/>
             * 5. Texture update is handled by this component. User don't need to worry.<br/>
             * One important thing to be noted, whenever the node's bounding box change,
             * you need to manually reset the viewport of sub context using updateSubContextViewport.
             * @zh SubContextView 可以用来控制微信小游戏平台开放数据域在主域中的视窗的位置。<br/>
             * 这个组件的节点尺寸决定了开放数据域内容在主域中的尺寸，整个开放数据域会被缩放到节点的包围盒范围内。<br/>
             * 在这个组件的控制下，用户可以更自由得控制开放数据域：<br/>
             * 1. 子域中可以使用独立的设计分辨率和适配模式<br/>
             * 2. 子域区域尺寸可以缩小到只容纳内容即可<br/>
             * 3. 子域的分辨率也可以被放大，以便获得更清晰的显示效果<br/>
             * 4. 用户输入坐标会被自动转换到正确的子域视窗中<br/>
             * 5. 子域内容贴图的更新由组件负责，用户不需要处理<br/>
             * 唯一需要注意的是，当子域节点的包围盒发生改变时，开发者需要使用 `updateSubContextViewport` 来手动更新子域视窗。
             */

            var SubContextView = exports('S', (_dec$2 = ccclass('cc.SubContextView'), _dec2$2 = help(), _dec3$2 = executionOrder(110), _dec4$2 = requireComponent(UITransform), _dec5$2 = menu(), _dec6$2 = tooltip(), _dec$2(_class$2 = _dec2$2(_class$2 = _dec3$2(_class$2 = _dec4$2(_class$2 = _dec5$2(_class$2 = (_class2$2 = (_temp$2 = /*#__PURE__*/function (_Component) {
              _inherits(SubContextView, _Component);

              _createClass(SubContextView, [{
                key: "fps",
                get: function get() {
                  return this._fps;
                },
                set: function set(value) {
                  if (this._fps === value) {
                    return;
                  }

                  this._fps = value;
                  this._updateInterval = 1 / value;

                  this._updateSubContextFrameRate();
                }
              }]);

              function SubContextView() {
                var _this;

                _classCallCheck(this, SubContextView);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(SubContextView).call(this));

                _initializerDefineProperty(_this, "_fps", _descriptor$2, _assertThisInitialized(_this));

                _this._sprite = void 0;
                _this._imageAsset = void 0;
                _this._context = void 0;
                _this._updatedTime = 0;
                _this._updateInterval = 0;
                _this._firstlyEnabled = true;
                _this._sprite = null;
                _this._imageAsset = new ImageAsset();
                _this._context = null;
                _this._updatedTime = performance.now();
                return _this;
              }

              _createClass(SubContextView, [{
                key: "onLoad",
                value: function onLoad() {
                  // Setup subcontext canvas size
                  if (window.__globalAdapter && __globalAdapter.getOpenDataContext) {
                    this._updateInterval = 1000 / this._fps;
                    this._context = __globalAdapter.getOpenDataContext(); // reset sharedCanvas width and height

                    this.reset();
                    var image = this._imageAsset;
                    var sharedCanvas = this._context.canvas;
                    image.reset(sharedCanvas);

                    image._texture.create(sharedCanvas.width, sharedCanvas.height);

                    this._sprite = this.node.getComponent(Sprite);

                    if (!this._sprite) {
                      this._sprite = this.node.addComponent(Sprite);
                    }

                    if (this._sprite.spriteFrame) {
                      this._sprite.spriteFrame.texture = this._imageAsset._texture;
                    } else {
                      var sp = new SpriteFrame();
                      sp.texture = this._imageAsset._texture;
                      this._sprite.spriteFrame = sp;
                    }
                  } else {
                    this.enabled = false;
                  }
                }
              }, {
                key: "onEnable",
                value: function onEnable() {
                  if (this._firstlyEnabled && this._context) {
                    this._context.postMessage({
                      fromEngine: true,
                      event: 'boot'
                    });

                    this._firstlyEnabled = false;
                  } else {
                    this._runSubContextMainLoop();
                  }

                  this._registerNodeEvent();

                  this._updateSubContextFrameRate();

                  this.updateSubContextViewport();
                }
              }, {
                key: "onDisable",
                value: function onDisable() {
                  this._unregisterNodeEvent();

                  this._stopSubContextMainLoop();
                }
              }, {
                key: "update",
                value: function update(dt) {
                  var calledUpdateManually = dt === undefined;

                  if (calledUpdateManually) {
                    this._context && this._context.postMessage({
                      fromEngine: true,
                      event: 'step'
                    });

                    this._updateSubContextTexture();

                    return;
                  }

                  var now = performance.now();
                  var deltaTime = now - this._updatedTime;

                  if (deltaTime >= this._updateInterval) {
                    this._updatedTime += this._updateInterval;

                    this._updateSubContextTexture();
                  }
                }
                /**
                 * @en Reset open data context size and viewport
                 * @zh 重置开放数据域的尺寸和视窗
                 */

              }, {
                key: "reset",
                value: function reset() {
                  if (this._context) {
                    this.updateSubContextViewport();
                    var sharedCanvas = this._context.canvas;
                    var transformComp = this.node.getComponent(UITransform);

                    if (sharedCanvas) {
                      sharedCanvas.width = transformComp.width;
                      sharedCanvas.height = transformComp.height;
                    }
                  }
                }
                /**
                 * @en Update the sub context viewport manually, it should be called whenever the node's bounding box changes.
                 * @zh 更新开放数据域相对于主域的 viewport，这个函数应该在节点包围盒改变时手动调用。
                 */

              }, {
                key: "updateSubContextViewport",
                value: function updateSubContextViewport() {
                  if (this._context) {
                    var box = this.node.getComponent(UITransform).getBoundingBoxToWorld();
                    var sx = view.getScaleX();
                    var sy = view.getScaleY();
                    var rect = view.getViewportRect();

                    this._context.postMessage({
                      fromEngine: true,
                      event: 'viewport',
                      x: box.x * sx + rect.x,
                      y: box.y * sy + rect.y,
                      width: box.width * sx,
                      height: box.height * sy
                    });
                  }
                }
              }, {
                key: "_updateSubContextTexture",
                value: function _updateSubContextTexture() {
                  var img = this._imageAsset;

                  if (!img || !this._context) {
                    return;
                  }

                  if (img.width <= 0 || img.height <= 0) {
                    return;
                  }

                  var canvas = this._context.canvas;
                  img.reset(canvas);

                  if (canvas.width > img.width || canvas.height > img.height) {
                    this._imageAsset._texture.create(canvas.width, canvas.height);
                  }

                  this._imageAsset._texture.uploadData(canvas);
                }
              }, {
                key: "_registerNodeEvent",
                value: function _registerNodeEvent() {
                  this.node.on(Node.EventType.TRANSFORM_CHANGED, this.updateSubContextViewport, this);
                  this.node.on(Node.EventType.SIZE_CHANGED, this.updateSubContextViewport, this);
                }
              }, {
                key: "_unregisterNodeEvent",
                value: function _unregisterNodeEvent() {
                  this.node.off(Node.EventType.TRANSFORM_CHANGED, this.updateSubContextViewport, this);
                  this.node.off(Node.EventType.SIZE_CHANGED, this.updateSubContextViewport, this);
                }
              }, {
                key: "_runSubContextMainLoop",
                value: function _runSubContextMainLoop() {
                  if (this._context) {
                    this._context.postMessage({
                      fromEngine: true,
                      event: 'mainLoop',
                      value: true
                    });
                  }
                }
              }, {
                key: "_stopSubContextMainLoop",
                value: function _stopSubContextMainLoop() {
                  if (this._context) {
                    this._context.postMessage({
                      fromEngine: true,
                      event: 'mainLoop',
                      value: false
                    });
                  }
                }
              }, {
                key: "_updateSubContextFrameRate",
                value: function _updateSubContextFrameRate() {
                  if (this._context) {
                    this._context.postMessage({
                      fromEngine: true,
                      event: 'frameRate',
                      value: this._fps
                    });
                  }
                }
              }]);

              return SubContextView;
            }(Component), _temp$2), (_applyDecoratedDescriptor(_class2$2.prototype, "fps", [_dec6$2], Object.getOwnPropertyDescriptor(_class2$2.prototype, "fps"), _class2$2.prototype), _descriptor$2 = _applyDecoratedDescriptor(_class2$2.prototype, "_fps", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 60;
              }
            })), _class2$2)) || _class$2) || _class$2) || _class$2) || _class$2) || _class$2));
            legacyCC.SubContextView = SubContextView;

        }
    };
});
