System.register(['./deprecated-4ec15e5e.js', './deprecated-b99c04b5.js'], function (exports) {
    'use strict';
    var _createClass, _classCallCheck, IDGenerator, _inherits, _possibleConstructorReturn, _getPrototypeOf, createMap, legacyCC, warnID, assertID, errorID, logID, sys, Pool, _createForOfIteratorHelperLoose, _assertThisInitialized, v2, size, CCObject, error, array, EventTarget, ccclass, type, _applyDecoratedDescriptor, serializable, editable, _initializerDefineProperty, GFXFormat, GFXTextureType, GFXTextureUsageBit, JointTexturePool, JointAnimationInfo, GFXBufferUsageBit, GFXMemoryUsageBit, IAPool, NULL_HANDLE, GFXComparisonFunc, GFXStencilOp, ModelType, Model, SubModelPool, SubModelView, RenderPriority, DSPool, SubModel, EffectAsset, programLib, SetIndex, Material, PassPool, PassView, GFXAttributeName, RecyclePool, Layers, CachedArray, ModelLocalBindings, RenderScene, Camera, GFXColorAttachment, GFXDepthStencilAttachment, GFXStoreOp, builtinResMgr, ForwardPipeline, RenderView, LightType, ComponentScheduler, NodeActivator, Game, eventManager, autoRelease, Node;
    return {
        setters: [function (module) {
            _createClass = module.j;
            _classCallCheck = module.d;
            IDGenerator = module.aO;
            _inherits = module.b;
            _possibleConstructorReturn = module.e;
            _getPrototypeOf = module.f;
            createMap = module.bk;
            legacyCC = module.l;
            warnID = module.x;
            assertID = module.z;
            errorID = module.y;
            logID = module.v;
            sys = module.aI;
            Pool = module.P;
            _createForOfIteratorHelperLoose = module.D;
            _assertThisInitialized = module.i;
            v2 = module.I;
            size = module.U;
            CCObject = module.as;
            error = module.p;
            array = module.by;
            EventTarget = module.az;
            ccclass = module.c;
            type = module.t;
            _applyDecoratedDescriptor = module._;
            serializable = module.s;
            editable = module.F;
            _initializerDefineProperty = module.g;
        }, function (module) {
            GFXFormat = module.f;
            GFXTextureType = module.bJ;
            GFXTextureUsageBit = module.bK;
            JointTexturePool = module.J;
            JointAnimationInfo = module.n;
            GFXBufferUsageBit = module.h;
            GFXMemoryUsageBit = module.i;
            IAPool = module.dg;
            NULL_HANDLE = module.dh;
            GFXComparisonFunc = module.bC;
            GFXStencilOp = module.bD;
            ModelType = module.U;
            Model = module.W;
            SubModelPool = module.di;
            SubModelView = module.dj;
            RenderPriority = module.dk;
            DSPool = module.dl;
            SubModel = module.a2;
            EffectAsset = module.b2;
            programLib = module.aj;
            SetIndex = module.dm;
            Material = module.b3;
            PassPool = module.dn;
            PassView = module.dp;
            GFXAttributeName = module.G;
            RecyclePool = module.R;
            Layers = module.cY;
            CachedArray = module.C;
            ModelLocalBindings = module.dq;
            RenderScene = module.$;
            Camera = module.K;
            GFXColorAttachment = module.cr;
            GFXDepthStencilAttachment = module.cs;
            GFXStoreOp = module.bR;
            builtinResMgr = module.d2;
            ForwardPipeline = module.cI;
            RenderView = module.cH;
            LightType = module.P;
            ComponentScheduler = module.dr;
            NodeActivator = module.c$;
            Game = module.bh;
            eventManager = module.b9;
            autoRelease = module.ds;
            Node = module.cW;
        }],
        execute: function () {

            /**
             * @en The render window represents the render target, it could be an off screen frame buffer or the on screen buffer.
             * @zh 渲染窗口代表了一个渲染目标，可以是离屏的帧缓冲，也可以是屏幕缓冲
             */
            var RenderWindow = exports('R', /*#__PURE__*/function () {
              _createClass(RenderWindow, [{
                key: "width",

                /**
                 * @en Get window width.
                 * @zh 窗口宽度。
                 */
                get: function get() {
                  return this._width;
                }
                /**
                 * @en Get window height.
                 * @zh 窗口高度。
                 */

              }, {
                key: "height",
                get: function get() {
                  return this._height;
                }
                /**
                 * @en Get window frame buffer.
                 * @zh 帧缓冲对象。
                 */

              }, {
                key: "framebuffer",
                get: function get() {
                  return this._framebuffer;
                }
              }, {
                key: "shouldSyncSizeWithSwapchain",
                get: function get() {
                  return this._shouldSyncSizeWithSwapchain;
                }
                /**
                 * @en Whether it has on screen attachments
                 * @zh 这个渲染窗口是否指向在屏缓冲
                 */

              }, {
                key: "hasOnScreenAttachments",
                get: function get() {
                  return this._hasOnScreenAttachments;
                }
                /**
                 * @en Whether it has off screen attachments
                 * @zh 这个渲染窗口是否指向离屏缓冲
                 */

              }, {
                key: "hasOffScreenAttachments",
                get: function get() {
                  return this._hasOffScreenAttachments;
                }
                /**
                 * @private
                 */

              }], [{
                key: "registerCreateFunc",
                value: function registerCreateFunc(root) {
                  root._createWindowFun = function (_root) {
                    return new RenderWindow(_root);
                  };
                }
              }]);

              function RenderWindow(root) {
                _classCallCheck(this, RenderWindow);

                this._title = '';
                this._width = 1;
                this._height = 1;
                this._nativeWidth = 1;
                this._nativeHeight = 1;
                this._renderPass = null;
                this._colorTextures = [];
                this._depthStencilTexture = null;
                this._framebuffer = null;
                this._swapchainBufferIndices = 0;
                this._shouldSyncSizeWithSwapchain = false;
                this._hasOnScreenAttachments = false;
                this._hasOffScreenAttachments = false;
              }

              _createClass(RenderWindow, [{
                key: "initialize",
                value: function initialize(device, info) {
                  if (info.title !== undefined) {
                    this._title = info.title;
                  }

                  if (info.swapchainBufferIndices !== undefined) {
                    this._swapchainBufferIndices = info.swapchainBufferIndices;
                  }

                  if (info.shouldSyncSizeWithSwapchain !== undefined) {
                    this._shouldSyncSizeWithSwapchain = info.shouldSyncSizeWithSwapchain;
                  }

                  this._width = info.width;
                  this._height = info.height;
                  this._nativeWidth = this._width;
                  this._nativeHeight = this._height;
                  var _info$renderPassInfo = info.renderPassInfo,
                      colorAttachments = _info$renderPassInfo.colorAttachments,
                      depthStencilAttachment = _info$renderPassInfo.depthStencilAttachment;

                  for (var i = 0; i < colorAttachments.length; i++) {
                    if (colorAttachments[i].format === GFXFormat.UNKNOWN) {
                      colorAttachments[i].format = device.colorFormat;
                    }
                  }

                  if (depthStencilAttachment && depthStencilAttachment.format === GFXFormat.UNKNOWN) {
                    depthStencilAttachment.format = device.depthStencilFormat;
                  }

                  this._renderPass = device.createRenderPass(info.renderPassInfo);

                  for (var _i = 0; _i < colorAttachments.length; _i++) {
                    var colorTex = null;

                    if (!(this._swapchainBufferIndices & 1 << _i)) {
                      colorTex = device.createTexture({
                        type: GFXTextureType.TEX2D,
                        usage: GFXTextureUsageBit.COLOR_ATTACHMENT | GFXTextureUsageBit.SAMPLED,
                        format: colorAttachments[_i].format,
                        width: this._width,
                        height: this._height
                      });
                      this._hasOffScreenAttachments = true;
                    } else {
                      this._hasOnScreenAttachments = true;
                    }

                    this._colorTextures.push(colorTex);
                  } // Use the sign bit to indicate depth attachment


                  if (depthStencilAttachment) {
                    if (this._swapchainBufferIndices >= 0) {
                      this._depthStencilTexture = device.createTexture({
                        type: GFXTextureType.TEX2D,
                        usage: GFXTextureUsageBit.DEPTH_STENCIL_ATTACHMENT | GFXTextureUsageBit.SAMPLED,
                        format: depthStencilAttachment.format,
                        width: this._width,
                        height: this._height
                      });
                      this._hasOffScreenAttachments = true;
                    } else {
                      this._hasOnScreenAttachments = true;
                    }
                  }

                  this._framebuffer = device.createFramebuffer({
                    renderPass: this._renderPass,
                    colorTextures: this._colorTextures,
                    depthStencilTexture: this._depthStencilTexture
                  });
                  return true;
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  if (this._depthStencilTexture) {
                    this._depthStencilTexture.destroy();

                    this._depthStencilTexture = null;
                  }

                  for (var i = 0; i < this._colorTextures.length; i++) {
                    var colorTexture = this._colorTextures[i];

                    if (colorTexture) {
                      colorTexture.destroy();
                    }
                  }

                  this._colorTextures.length = 0;

                  if (this._framebuffer) {
                    this._framebuffer.destroy();

                    this._framebuffer = null;
                  }
                }
                /**
                 * @en Resize window.
                 * @zh 重置窗口大小。
                 * @param width The new width.
                 * @param height The new height.
                 */

              }, {
                key: "resize",
                value: function resize(width, height) {
                  this._width = width;
                  this._height = height;

                  if (width > this._nativeWidth || height > this._nativeHeight) {
                    this._nativeWidth = width;
                    this._nativeHeight = height;
                    var needRebuild = false;

                    if (this._depthStencilTexture) {
                      this._depthStencilTexture.resize(width, height);

                      needRebuild = true;
                    }

                    for (var i = 0; i < this._colorTextures.length; i++) {
                      var colorTex = this._colorTextures[i];

                      if (colorTex) {
                        colorTex.resize(width, height);
                        needRebuild = true;
                      }
                    }

                    if (needRebuild && this._framebuffer) {
                      this._framebuffer.destroy();

                      this._framebuffer.initialize({
                        renderPass: this._renderPass,
                        colorTextures: this._colorTextures,
                        depthStencilTexture: this._depthStencilTexture
                      });
                    }
                  }
                }
              }]);

              return RenderWindow;
            }());

            /*
             Copyright (c) 2019 Xiamen Yaji Software Co., Ltd.

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
             * @hidden
             */

            /**
             * @en Base class for all functional system managed by [[Director]].
             * @zh 功能系统的基类，由 [[Director]] 管理。
             */
            var System = exports('a', /*#__PURE__*/function () {
              function System() {
                _classCallCheck(this, System);

                this._id = '';
                this._priority = 0;
                this._executeInEditMode = false;
              }

              _createClass(System, [{
                key: "init",

                /**
                 * @en Init the system, will be invoked by [[Director]] when registered, should be implemented if needed.
                 * @zh 系统初始化函数，会在注册时被 [[Director]] 调用，如果需要的话应该由子类实现
                 */
                value: function init() {}
                /**
                 * @en Update function of the system, it will be invoked between all components update phase and late update phase.
                 * @zh 系统的帧更新函数，它会在所有组件的 update 和 lateUpdate 之间被调用
                 * @param dt Delta time after the last frame
                 */

              }, {
                key: "update",
                value: function update(dt) {}
                /**
                 * @en Post update function of the system, it will be invoked after all components late update phase and before the rendering process.
                 * @zh 系统的帧后处理函数，它会在所有组件的 lateUpdate 之后以及渲染之前被调用
                 * @param dt Delta time after the last frame
                 */

              }, {
                key: "postUpdate",
                value: function postUpdate(dt) {}
              }, {
                key: "priority",
                set: function set(value) {
                  this._priority = value;
                },
                get: function get() {
                  return this._priority;
                }
              }, {
                key: "id",
                set: function set(id) {
                  this._id = id;
                },
                get: function get() {
                  return this._id;
                }
                /**
                 * @en Sorting between different systems.
                 * @zh 不同系统间排序。
                 * @param a System a
                 * @param b System b
                 */

              }], [{
                key: "sortByPriority",
                value: function sortByPriority(a, b) {
                  if (a._priority < b._priority) {
                    return 1;
                  } else if (a._priority > b.priority) {
                    return -1;
                  } else {
                    return 0;
                  }
                }
              }]);

              return System;
            }());

            var MAX_POOL_SIZE = 20;
            var idGenerator = new IDGenerator('Scheduler');

            // data structures

            /**
             * @en A list double-linked list used for "updates with priority"
             * @zh 用于“优先更新”的列表
             * @class ListEntry
             * @param target not retained (retained by hashUpdateEntry)
             * @param priority
             * @param paused
             * @param markedForDeletion selector will no longer be called and entry will be removed at end of the next tick
             */
            var ListEntry = function ListEntry(target, priority, paused, markedForDeletion) {
              _classCallCheck(this, ListEntry);

              this.target = void 0;
              this.priority = void 0;
              this.paused = void 0;
              this.markedForDeletion = void 0;
              this.target = target;
              this.priority = priority;
              this.paused = paused;
              this.markedForDeletion = markedForDeletion;
            };
            /**
             * @en A update entry list
             * @zh 更新条目列表
             * @class HashUpdateEntry
             * @param list Which list does it belong to ?
             * @param entry entry in the list
             * @param target hash key (retained)
             * @param callback
             */


            ListEntry.get = function (target, priority, paused, markedForDeletion) {
              var result = ListEntry._listEntries.pop();

              if (result) {
                result.target = target;
                result.priority = priority;
                result.paused = paused;
                result.markedForDeletion = markedForDeletion;
              } else {
                result = new ListEntry(target, priority, paused, markedForDeletion);
              }

              return result;
            };

            ListEntry.put = function (entry) {
              if (ListEntry._listEntries.length < MAX_POOL_SIZE) {
                entry.target = null;

                ListEntry._listEntries.push(entry);
              }
            };

            ListEntry._listEntries = [];

            var HashUpdateEntry = function HashUpdateEntry(list, entry, target, callback) {
              _classCallCheck(this, HashUpdateEntry);

              this.list = void 0;
              this.entry = void 0;
              this.target = void 0;
              this.callback = void 0;
              this.list = list;
              this.entry = entry;
              this.target = target;
              this.callback = callback;
            };
            /**
             * @en Hash Element used for "selectors with interval"
             * @zh “用于间隔选择”的哈希元素
             * @class HashTimerEntry
             * @param timers
             * @param target  hash key (retained)
             * @param timerIndex
             * @param currentTimer
             * @param currentTimerSalvaged
             * @param paused
             */


            HashUpdateEntry.get = function (list, entry, target, callback) {
              var result = HashUpdateEntry._hashUpdateEntries.pop();

              if (result) {
                result.list = list;
                result.entry = entry;
                result.target = target;
                result.callback = callback;
              } else {
                result = new HashUpdateEntry(list, entry, target, callback);
              }

              return result;
            };

            HashUpdateEntry.put = function (entry) {
              if (HashUpdateEntry._hashUpdateEntries.length < MAX_POOL_SIZE) {
                entry.list = entry.entry = entry.target = entry.callback = null;

                HashUpdateEntry._hashUpdateEntries.push(entry);
              }
            };

            HashUpdateEntry._hashUpdateEntries = [];

            var HashTimerEntry = function HashTimerEntry(timers, target, timerIndex, currentTimer, currentTimerSalvaged, paused) {
              _classCallCheck(this, HashTimerEntry);

              this.timers = void 0;
              this.target = void 0;
              this.timerIndex = void 0;
              this.currentTimer = void 0;
              this.currentTimerSalvaged = void 0;
              this.paused = void 0;
              this.timers = timers;
              this.target = target;
              this.timerIndex = timerIndex;
              this.currentTimer = currentTimer;
              this.currentTimerSalvaged = currentTimerSalvaged;
              this.paused = paused;
            };
            /*
             * Light weight timer
             */


            HashTimerEntry.get = function (timers, target, timerIndex, currentTimer, currentTimerSalvaged, paused) {
              var result = HashTimerEntry._hashTimerEntries.pop();

              if (result) {
                result.timers = timers;
                result.target = target;
                result.timerIndex = timerIndex;
                result.currentTimer = currentTimer;
                result.currentTimerSalvaged = currentTimerSalvaged;
                result.paused = paused;
              } else {
                result = new HashTimerEntry(timers, target, timerIndex, currentTimer, currentTimerSalvaged, paused);
              }

              return result;
            };

            HashTimerEntry.put = function (entry) {
              if (HashTimerEntry._hashTimerEntries.length < MAX_POOL_SIZE) {
                entry.timers = entry.target = entry.currentTimer = null;

                HashTimerEntry._hashTimerEntries.push(entry);
              }
            };

            HashTimerEntry._hashTimerEntries = [];

            var CallbackTimer = /*#__PURE__*/function () {
              function CallbackTimer() {
                _classCallCheck(this, CallbackTimer);

                this._lock = void 0;
                this._scheduler = void 0;
                this._elapsed = void 0;
                this._runForever = void 0;
                this._useDelay = void 0;
                this._timesExecuted = void 0;
                this._repeat = void 0;
                this._delay = void 0;
                this._interval = void 0;
                this._target = void 0;
                this._callback = void 0;
                this._lock = false;
                this._scheduler = null;
                this._elapsed = -1;
                this._runForever = false;
                this._useDelay = false;
                this._timesExecuted = 0;
                this._repeat = 0;
                this._delay = 0;
                this._interval = 0;
                this._target = null;
                this._callback = null;
              }

              _createClass(CallbackTimer, [{
                key: "initWithCallback",
                value: function initWithCallback(scheduler, callback, target, seconds, repeat, delay) {
                  this._lock = false;
                  this._scheduler = scheduler;
                  this._target = target;
                  this._callback = callback;
                  this._elapsed = -1;
                  this._interval = seconds;
                  this._delay = delay;
                  this._useDelay = this._delay > 0;
                  this._repeat = repeat;
                  this._runForever = this._repeat === legacyCC.macro.REPEAT_FOREVER;
                  return true;
                }
                /**
                 * @return returns interval of timer
                 */

              }, {
                key: "getInterval",
                value: function getInterval() {
                  return this._interval;
                }
                /**
                 * @en Set interval in seconds
                 * @zh 以秒为单位设置时间间隔
                 */

              }, {
                key: "setInterval",
                value: function setInterval(interval) {
                  this._interval = interval;
                }
                /**
                 * @en Update function which triggers the timer
                 * @zh 计时更新函数，用来触发计时器
                 * @param dt delta time
                 */

              }, {
                key: "update",
                value: function update(dt) {
                  if (this._elapsed === -1) {
                    this._elapsed = 0;
                    this._timesExecuted = 0;
                  } else {
                    this._elapsed += dt;

                    if (this._runForever && !this._useDelay) {
                      // standard timer usage
                      if (this._elapsed >= this._interval) {
                        this.trigger();
                        this._elapsed = 0;
                      }
                    } else {
                      // advanced usage
                      if (this._useDelay) {
                        if (this._elapsed >= this._delay) {
                          this.trigger();
                          this._elapsed -= this._delay;
                          this._timesExecuted += 1;
                          this._useDelay = false;
                        }
                      } else {
                        if (this._elapsed >= this._interval) {
                          this.trigger();
                          this._elapsed = 0;
                          this._timesExecuted += 1;
                        }
                      }

                      if (this._callback && !this._runForever && this._timesExecuted > this._repeat) {
                        this.cancel();
                      }
                    }
                  }
                }
              }, {
                key: "getCallback",
                value: function getCallback() {
                  return this._callback;
                }
              }, {
                key: "trigger",
                value: function trigger() {
                  if (this._target && this._callback) {
                    this._lock = true;

                    this._callback.call(this._target, this._elapsed);

                    this._lock = false;
                  }
                }
              }, {
                key: "cancel",
                value: function cancel() {
                  // override
                  this._scheduler.unschedule(this._callback, this._target);
                }
              }]);

              return CallbackTimer;
            }();
            /**
             * @en
             * Scheduler is responsible of triggering the scheduled callbacks.<br>
             * You should not use NSTimer. Instead use this class.<br>
             * <br>
             * There are 2 different types of callbacks (selectors):<br>
             *     - update callback: the 'update' callback will be called every frame. You can customize the priority.<br>
             *     - custom callback: A custom callback will be called every frame, or with a custom interval of time<br>
             * <br>
             * The 'custom selectors' should be avoided when possible. It is faster,<br>
             * and consumes less memory to use the 'update callback'. *
             * @zh
             * Scheduler 是负责触发回调函数的类。<br>
             * 通常情况下，建议使用 `director.getScheduler()` 来获取系统定时器。<br>
             * 有两种不同类型的定时器：<br>
             *     - update 定时器：每一帧都会触发。您可以自定义优先级。<br>
             *     - 自定义定时器：自定义定时器可以每一帧或者自定义的时间间隔触发。<br>
             * 如果希望每帧都触发，应该使用 update 定时器，使用 update 定时器更快，而且消耗更少的内存。
             *
             * @class Scheduler
             */


            CallbackTimer._timers = [];

            CallbackTimer.get = function () {
              return CallbackTimer._timers.pop() || new CallbackTimer();
            };

            CallbackTimer.put = function (timer) {
              if (CallbackTimer._timers.length < MAX_POOL_SIZE && !timer._lock) {
                timer._scheduler = timer._target = timer._callback = null;

                CallbackTimer._timers.push(timer);
              }
            };

            var Scheduler = exports('S', /*#__PURE__*/function (_System) {
              _inherits(Scheduler, _System);

              _createClass(Scheduler, null, [{
                key: "enableForTarget",

                /**
                 * @en Priority level reserved for system services.
                 * @zh 系统服务的优先级。
                 */

                /**
                 * @en Minimum priority level for user scheduling.
                 * @zh 用户调度最低优先级。
                 */

                /**
                 * @en This method should be called for any target which needs to schedule tasks, and this method should be called before any scheduler API usage.<bg>
                 * This method will add a `id` property if it doesn't exist.
                 * @zh 任何需要用 Scheduler 管理任务的对象主体都应该调用这个方法，并且应该在调用任何 Scheduler API 之前调用这个方法。<bg>
                 * 这个方法会给对象添加一个 `id` 属性，如果这个属性不存在的话。
                 * @param target
                 */
                value: function enableForTarget(target) {
                  var found = false;

                  if (target.uuid) {
                    found = true;
                  } else if (target.id) {
                    found = true;
                  }

                  if (!found) {
                    // @ts-ignore
                    if (target.__instanceId) {
                      warnID(1513);
                    } else {
                      target.id = idGenerator.getNewId();
                    }
                  }
                }
              }]);

              function Scheduler() {
                var _this;

                _classCallCheck(this, Scheduler);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(Scheduler).call(this));
                _this._timeScale = void 0;
                _this._updatesNegList = void 0;
                _this._updates0List = void 0;
                _this._updatesPosList = void 0;
                _this._hashForUpdates = void 0;
                _this._hashForTimers = void 0;
                _this._currentTarget = void 0;
                _this._currentTargetSalvaged = void 0;
                _this._updateHashLocked = void 0;
                _this._arrayForTimers = void 0;
                _this._timeScale = 1.0;
                _this._updatesNegList = []; // list of priority < 0

                _this._updates0List = []; // list of priority == 0

                _this._updatesPosList = []; // list of priority > 0

                _this._hashForUpdates = createMap(true); // hash used to fetch quickly the list entries for pause, delete, etc

                _this._hashForTimers = createMap(true); // Used for "selectors with interval"

                _this._currentTarget = null;
                _this._currentTargetSalvaged = false;
                _this._updateHashLocked = false; // If true unschedule will not remove anything from a hash. Elements will only be marked for deletion.

                _this._arrayForTimers = []; // Speed up indexing
                // this._arrayForUpdates = [];   // Speed up indexing

                return _this;
              } // -----------------------public method-------------------------

              /**
               * @en
               * Modifies the time of all scheduled callbacks.<br>
               * You can use this property to create a 'slow motion' or 'fast forward' effect.<br>
               * Default is 1.0. To create a 'slow motion' effect, use values below 1.0.<br>
               * To create a 'fast forward' effect, use values higher than 1.0.<br>
               * Note：It will affect EVERY scheduled selector / action.
               * @zh
               * 设置时间间隔的缩放比例。<br>
               * 您可以使用这个方法来创建一个 “slow motion（慢动作）” 或 “fast forward（快进）” 的效果。<br>
               * 默认是 1.0。要创建一个 “slow motion（慢动作）” 效果,使用值低于 1.0。<br>
               * 要使用 “fast forward（快进）” 效果，使用值大于 1.0。<br>
               * 注意：它影响该 Scheduler 下管理的所有定时器。
               * @param timeScale
               */


              _createClass(Scheduler, [{
                key: "setTimeScale",
                value: function setTimeScale(timeScale) {
                  this._timeScale = timeScale;
                }
                /**
                 * @en Returns time scale of scheduler.
                 * @zh 获取时间间隔的缩放比例。
                 */

              }, {
                key: "getTimeScale",
                value: function getTimeScale() {
                  return this._timeScale;
                }
                /**
                 * @en 'update' the scheduler. (You should NEVER call this method, unless you know what you are doing.)
                 * @zh update 调度函数。(不应该直接调用这个方法，除非完全了解这么做的结果)
                 * @param dt delta time
                 */

              }, {
                key: "update",
                value: function update(dt) {
                  this._updateHashLocked = true;

                  if (this._timeScale !== 1) {
                    dt *= this._timeScale;
                  }

                  var i;
                  var list;
                  var len;
                  var entry;

                  for (i = 0, list = this._updatesNegList, len = list.length; i < len; i++) {
                    entry = list[i];

                    if (!entry.paused && !entry.markedForDeletion) {
                      entry.target.update(dt);
                    }
                  }

                  for (i = 0, list = this._updates0List, len = list.length; i < len; i++) {
                    entry = list[i];

                    if (!entry.paused && !entry.markedForDeletion) {
                      entry.target.update(dt);
                    }
                  }

                  for (i = 0, list = this._updatesPosList, len = list.length; i < len; i++) {
                    entry = list[i];

                    if (!entry.paused && !entry.markedForDeletion) {
                      entry.target.update(dt);
                    }
                  } // Iterate over all the custom selectors


                  var elt;
                  var arr = this._arrayForTimers;

                  for (i = 0; i < arr.length; i++) {
                    elt = arr[i];
                    this._currentTarget = elt;
                    this._currentTargetSalvaged = false;

                    if (!elt.paused) {
                      // The 'timers' array may change while inside this loop
                      for (elt.timerIndex = 0; elt.timerIndex < elt.timers.length; ++elt.timerIndex) {
                        elt.currentTimer = elt.timers[elt.timerIndex];
                        elt.currentTimerSalvaged = false;
                        elt.currentTimer.update(dt);
                        elt.currentTimer = null;
                      }
                    } // only delete currentTarget if no actions were scheduled during the cycle (issue #481)


                    if (this._currentTargetSalvaged && this._currentTarget.timers.length === 0) {
                      this._removeHashElement(this._currentTarget);

                      --i;
                    }
                  } // delete all updates that are marked for deletion
                  // updates with priority < 0


                  for (i = 0, list = this._updatesNegList; i < list.length;) {
                    entry = list[i];

                    if (entry.markedForDeletion) {
                      this._removeUpdateFromHash(entry);
                    } else {
                      i++;
                    }
                  }

                  for (i = 0, list = this._updates0List; i < list.length;) {
                    entry = list[i];

                    if (entry.markedForDeletion) {
                      this._removeUpdateFromHash(entry);
                    } else {
                      i++;
                    }
                  }

                  for (i = 0, list = this._updatesPosList; i < list.length;) {
                    entry = list[i];

                    if (entry.markedForDeletion) {
                      this._removeUpdateFromHash(entry);
                    } else {
                      i++;
                    }
                  }

                  this._updateHashLocked = false;
                  this._currentTarget = null;
                }
                /**
                 * @en
                 * <p>
                 *   The scheduled method will be called every 'interval' seconds.<br/>
                 *   If paused is YES, then it won't be called until it is resumed.<br/>
                 *   If 'interval' is 0, it will be called every frame, but if so, it recommended to use 'scheduleUpdateForTarget:' instead.<br/>
                 *   If the callback function is already scheduled, then only the interval parameter will be updated without re-scheduling it again.<br/>
                 *   repeat let the action be repeated repeat + 1 times, use `macro.REPEAT_FOREVER` to let the action run continuously<br/>
                 *   delay is the amount of time the action will wait before it'll start<br/>
                 * </p>
                 * @zh
                 * 指定回调函数，调用对象等信息来添加一个新的定时器。<br/>
                 * 如果 paused 值为 true，那么直到 resume 被调用才开始计时。<br/>
                 * 当时间间隔达到指定值时，设置的回调函数将会被调用。<br/>
                 * 如果 interval 值为 0，那么回调函数每一帧都会被调用，但如果是这样，
                 * 建议使用 scheduleUpdateForTarget 代替。<br/>
                 * 如果回调函数已经被定时器使用，那么只会更新之前定时器的时间间隔参数，不会设置新的定时器。<br/>
                 * repeat 值可以让定时器触发 repeat + 1 次，使用 `macro.REPEAT_FOREVER`
                 * 可以让定时器一直循环触发。<br/>
                 * delay 值指定延迟时间，定时器会在延迟指定的时间之后开始计时。
                 * @param callback
                 * @param target
                 * @param interval
                 * @param [repeat]
                 * @param [delay=0]
                 * @param [paused=fasle]
                 */

              }, {
                key: "schedule",
                value: function schedule(callback, target, interval, repeat, delay, paused) {

                  if (typeof callback !== 'function') {
                    var tmp = callback; // @ts-ignore

                    callback = target;
                    target = tmp;
                  } // selector, target, interval, repeat, delay, paused
                  // selector, target, interval, paused


                  if (arguments.length === 3 || arguments.length === 4 || arguments.length === 5) {
                    paused = !!repeat;
                    repeat = legacyCC.macro.REPEAT_FOREVER;
                    delay = 0;
                  }

                  assertID(target, 1502);
                  var targetId = target.uuid || target.id;

                  if (!targetId) {
                    errorID(1510);
                    return;
                  }

                  var element = this._hashForTimers[targetId];

                  if (!element) {
                    // Is this the 1st element ? Then set the pause level to all the callback_fns of this target
                    element = HashTimerEntry.get(null, target, 0, null, null, paused);

                    this._arrayForTimers.push(element);

                    this._hashForTimers[targetId] = element;
                  } else if (element.paused !== paused) {
                    warnID(1511);
                  }

                  var timer;
                  var i;

                  if (element.timers == null) {
                    element.timers = [];
                  } else {
                    for (i = 0; i < element.timers.length; ++i) {
                      timer = element.timers[i];

                      if (timer && callback === timer._callback) {
                        logID(1507, timer.getInterval(), interval);
                        timer._interval = interval;
                        return;
                      }
                    }
                  }

                  timer = CallbackTimer.get();
                  timer.initWithCallback(this, callback, target, interval, repeat, delay);
                  element.timers.push(timer);

                  if (this._currentTarget === element && this._currentTargetSalvaged) {
                    this._currentTargetSalvaged = false;
                  }
                }
                /**
                 * @en
                 * Schedules the update callback for a given target,
                 * During every frame after schedule started, the "update" function of target will be invoked.
                 * @zh
                 * 使用指定的优先级为指定的对象设置 update 定时器。<br>
                 * update 定时器每一帧都会被触发，触发时自动调用指定对象的 "update" 函数。<br>
                 * 优先级的值越低，定时器被触发的越早。
                 * @param target
                 * @param priority
                 * @param paused
                 */

              }, {
                key: "scheduleUpdate",
                value: function scheduleUpdate(target, priority, paused) {
                  var targetId = target.uuid || target.id;

                  if (!targetId) {
                    errorID(1510);
                    return;
                  }

                  var hashElement = this._hashForUpdates[targetId];

                  if (hashElement && hashElement.entry) {
                    // check if priority has changed
                    if (hashElement.entry.priority !== priority) {
                      if (this._updateHashLocked) {
                        logID(1506);
                        hashElement.entry.markedForDeletion = false;
                        hashElement.entry.paused = paused;
                        return;
                      } else {
                        // will be added again outside if (hashElement).
                        this.unscheduleUpdate(target);
                      }
                    } else {
                      hashElement.entry.markedForDeletion = false;
                      hashElement.entry.paused = paused;
                      return;
                    }
                  }

                  var listElement = ListEntry.get(target, priority, paused, false);
                  var ppList; // most of the updates are going to be 0, that's way there
                  // is an special list for updates with priority 0

                  if (priority === 0) {
                    ppList = this._updates0List;

                    this._appendIn(ppList, listElement);
                  } else {
                    ppList = priority < 0 ? this._updatesNegList : this._updatesPosList;

                    this._priorityIn(ppList, listElement, priority);
                  } // update hash entry for quick access


                  this._hashForUpdates[targetId] = HashUpdateEntry.get(ppList, listElement, target, null);
                }
                /**
                 * @en
                 * Unschedules a callback for a callback and a given target.<br>
                 * If you want to unschedule the "update", use `unscheduleUpdate()`
                 * @zh
                 * 根据指定的回调函数和调用对象。<br>
                 * 如果需要取消 update 定时器，请使用 unscheduleUpdate()。
                 * @param callback The callback to be unscheduled
                 * @param target The target bound to the callback.
                 */

              }, {
                key: "unschedule",
                value: function unschedule(callback, target) {
                  // callback, target
                  // explicity handle nil arguments when removing an object
                  if (!target || !callback) {
                    return;
                  }

                  var targetId = target.uuid || target.id;

                  if (!targetId) {
                    errorID(1510);
                    return;
                  }

                  var self = this;
                  var element = self._hashForTimers[targetId];

                  if (element) {
                    var timers = element.timers;

                    for (var i = 0, li = timers.length; i < li; i++) {
                      var timer = timers[i];

                      if (callback === timer._callback) {
                        if (timer === element.currentTimer && !element.currentTimerSalvaged) {
                          element.currentTimerSalvaged = true;
                        }

                        timers.splice(i, 1);
                        CallbackTimer.put(timer); // update timerIndex in case we are in tick;, looping over the actions

                        if (element.timerIndex >= i) {
                          element.timerIndex--;
                        }

                        if (timers.length === 0) {
                          if (self._currentTarget === element) {
                            self._currentTargetSalvaged = true;
                          } else {
                            self._removeHashElement(element);
                          }
                        }

                        return;
                      }
                    }
                  }
                }
                /**
                 * @en Unschedules the update callback for a given target.
                 * @zh 取消指定对象的 update 定时器。
                 * @param target The target to be unscheduled.
                 */

              }, {
                key: "unscheduleUpdate",
                value: function unscheduleUpdate(target) {
                  if (!target) {
                    return;
                  }

                  var targetId = target.uuid || target.id;

                  if (!targetId) {
                    errorID(1510);
                    return;
                  }

                  var element = this._hashForUpdates[targetId];

                  if (element) {
                    if (this._updateHashLocked) {
                      element.entry.markedForDeletion = true;
                    } else {
                      this._removeUpdateFromHash(element.entry);
                    }
                  }
                }
                /**
                 * @en
                 * Unschedules all scheduled callbacks for a given target.
                 * This also includes the "update" callback.
                 * @zh 取消指定对象的所有定时器，包括 update 定时器。
                 * @param target The target to be unscheduled.
                 */

              }, {
                key: "unscheduleAllForTarget",
                value: function unscheduleAllForTarget(target) {
                  // explicit nullptr handling
                  if (!target) {
                    return;
                  }

                  var targetId = target.uuid || target.id;

                  if (!targetId) {
                    errorID(1510);
                    return;
                  } // Custom Selectors


                  var element = this._hashForTimers[targetId];

                  if (element) {
                    var timers = element.timers;

                    if (timers.indexOf(element.currentTimer) > -1 && !element.currentTimerSalvaged) {
                      element.currentTimerSalvaged = true;
                    }

                    for (var i = 0, l = timers.length; i < l; i++) {
                      CallbackTimer.put(timers[i]);
                    }

                    timers.length = 0;

                    if (this._currentTarget === element) {
                      this._currentTargetSalvaged = true;
                    } else {
                      this._removeHashElement(element);
                    }
                  } // update selector


                  this.unscheduleUpdate(target);
                }
                /**
                 * @en
                 * Unschedules all scheduled callbacks from all targets including the system callbacks.<br/>
                 * You should NEVER call this method, unless you know what you are doing.
                 * @zh
                 * 取消所有对象的所有定时器，包括系统定时器。<br/>
                 * 不用调用此函数，除非你确定你在做什么。
                 */

              }, {
                key: "unscheduleAll",
                value: function unscheduleAll() {
                  this.unscheduleAllWithMinPriority(legacyCC.Scheduler.PRIORITY_SYSTEM);
                }
                /**
                 * @en
                 * Unschedules all callbacks from all targets with a minimum priority.<br/>
                 * You should only call this with `PRIORITY_NON_SYSTEM_MIN` or higher.
                 * @zh
                 * 取消所有优先级的值大于指定优先级的定时器。<br/>
                 * 你应该只取消优先级的值大于 PRIORITY_NON_SYSTEM_MIN 的定时器。
                 * @param minPriority The minimum priority of selector to be unscheduled. Which means, all selectors which
                 *        priority is higher than minPriority will be unscheduled.
                 */

              }, {
                key: "unscheduleAllWithMinPriority",
                value: function unscheduleAllWithMinPriority(minPriority) {
                  // Custom Selectors
                  var i;
                  var element;
                  var arr = this._arrayForTimers;

                  for (i = arr.length - 1; i >= 0; i--) {
                    element = arr[i];
                    this.unscheduleAllForTarget(element.target);
                  } // Updates selectors


                  var entry;
                  var temp_length = 0;

                  if (minPriority < 0) {
                    for (i = 0; i < this._updatesNegList.length;) {
                      temp_length = this._updatesNegList.length;
                      entry = this._updatesNegList[i];

                      if (entry && entry.priority >= minPriority) {
                        this.unscheduleUpdate(entry.target);
                      }

                      if (temp_length === this._updatesNegList.length) {
                        i++;
                      }
                    }
                  }

                  if (minPriority <= 0) {
                    for (i = 0; i < this._updates0List.length;) {
                      temp_length = this._updates0List.length;
                      entry = this._updates0List[i];

                      if (entry) {
                        this.unscheduleUpdate(entry.target);
                      }

                      if (temp_length === this._updates0List.length) {
                        i++;
                      }
                    }
                  }

                  for (i = 0; i < this._updatesPosList.length;) {
                    temp_length = this._updatesPosList.length;
                    entry = this._updatesPosList[i];

                    if (entry && entry.priority >= minPriority) {
                      this.unscheduleUpdate(entry.target);
                    }

                    if (temp_length === this._updatesPosList.length) {
                      i++;
                    }
                  }
                }
                /**
                 * @en Checks whether a callback for a given target is scheduled.
                 * @zh 检查指定的回调函数和回调对象组合是否存在定时器。
                 * @param callback The callback to check.
                 * @param target The target of the callback.
                 * @return True if the specified callback is invoked, false if not.
                 */

              }, {
                key: "isScheduled",
                value: function isScheduled(callback, target) {
                  // key, target
                  // selector, target
                  assertID(callback, 1508);
                  assertID(target, 1509);
                  var targetId = target.uuid || target.id;

                  if (!targetId) {
                    errorID(1510);
                    return;
                  }

                  var element = this._hashForTimers[targetId];

                  if (!element) {
                    return false;
                  }

                  if (element.timers == null) {
                    return false;
                  } else {
                    var timers = element.timers; // tslint:disable-next-line: prefer-for-of

                    for (var i = 0; i < timers.length; ++i) {
                      var timer = timers[i];

                      if (callback === timer._callback) {
                        return true;
                      }
                    }

                    return false;
                  }
                }
                /**
                 * @en
                 * Pause all selectors from all targets.<br/>
                 * You should NEVER call this method, unless you know what you are doing.
                 * @zh
                 * 暂停所有对象的所有定时器。<br/>
                 * 不要调用这个方法，除非你知道你正在做什么。
                 */

              }, {
                key: "pauseAllTargets",
                value: function pauseAllTargets() {
                  return this.pauseAllTargetsWithMinPriority(legacyCC.Scheduler.PRIORITY_SYSTEM);
                }
                /**
                 * @en
                 * Pause all selectors from all targets with a minimum priority. <br/>
                 * You should only call this with kCCPriorityNonSystemMin or higher.
                 * @zh
                 * 暂停所有优先级的值大于指定优先级的定时器。<br/>
                 * 你应该只暂停优先级的值大于 PRIORITY_NON_SYSTEM_MIN 的定时器。
                 * @param minPriority
                 */

              }, {
                key: "pauseAllTargetsWithMinPriority",
                value: function pauseAllTargetsWithMinPriority(minPriority) {
                  var idsWithSelectors = [];
                  var self = this;
                  var element;
                  var locArrayForTimers = self._arrayForTimers;
                  var i;
                  var li; // Custom Selectors

                  for (i = 0, li = locArrayForTimers.length; i < li; i++) {
                    element = locArrayForTimers[i];

                    if (element) {
                      element.paused = true;
                      idsWithSelectors.push(element.target);
                    }
                  }

                  var entry;

                  if (minPriority < 0) {
                    for (i = 0; i < this._updatesNegList.length; i++) {
                      entry = this._updatesNegList[i];

                      if (entry) {
                        if (entry.priority >= minPriority) {
                          entry.paused = true;
                          idsWithSelectors.push(entry.target);
                        }
                      }
                    }
                  }

                  if (minPriority <= 0) {
                    for (i = 0; i < this._updates0List.length; i++) {
                      entry = this._updates0List[i];

                      if (entry) {
                        entry.paused = true;
                        idsWithSelectors.push(entry.target);
                      }
                    }
                  }

                  for (i = 0; i < this._updatesPosList.length; i++) {
                    entry = this._updatesPosList[i];

                    if (entry) {
                      if (entry.priority >= minPriority) {
                        entry.paused = true;
                        idsWithSelectors.push(entry.target);
                      }
                    }
                  }

                  return idsWithSelectors;
                }
                /**
                 * @en
                 * Resume selectors on a set of targets.<br/>
                 * This can be useful for undoing a call to pauseAllCallbacks.
                 * @zh
                 * 恢复指定数组中所有对象的定时器。<br/>
                 * 这个函数是 pauseAllCallbacks 的逆操作。
                 * @param targetsToResume
                 */

              }, {
                key: "resumeTargets",
                value: function resumeTargets(targetsToResume) {
                  if (!targetsToResume) {
                    return;
                  } // tslint:disable-next-line: prefer-for-of


                  for (var i = 0; i < targetsToResume.length; i++) {
                    this.resumeTarget(targetsToResume[i]);
                  }
                }
                /**
                 * @en
                 * Pauses the target.<br/>
                 * All scheduled selectors/update for a given target won't be 'ticked' until the target is resumed.<br/>
                 * If the target is not present, nothing happens.
                 * @zh
                 * 暂停指定对象的定时器。<br/>
                 * 指定对象的所有定时器都会被暂停。<br/>
                 * 如果指定的对象没有定时器，什么也不会发生。
                 * @param target
                 */

              }, {
                key: "pauseTarget",
                value: function pauseTarget(target) {
                  assertID(target, 1503);
                  var targetId = target.uuid || target.id;

                  if (!targetId) {
                    errorID(1510);
                    return;
                  } // customer selectors


                  var self = this;
                  var element = self._hashForTimers[targetId];

                  if (element) {
                    element.paused = true;
                  } // update callback


                  var elementUpdate = self._hashForUpdates[targetId];

                  if (elementUpdate) {
                    elementUpdate.entry.paused = true;
                  }
                }
                /**
                 * @en
                 * Resumes the target.<br/>
                 * The 'target' will be unpaused, so all schedule selectors/update will be 'ticked' again.<br/>
                 * If the target is not present, nothing happens.
                 * @zh
                 * 恢复指定对象的所有定时器。<br/>
                 * 指定对象的所有定时器将继续工作。<br/>
                 * 如果指定的对象没有定时器，什么也不会发生。
                 * @param target
                 */

              }, {
                key: "resumeTarget",
                value: function resumeTarget(target) {
                  assertID(target, 1504);
                  var targetId = target.uuid || target.id;

                  if (!targetId) {
                    errorID(1510);
                    return;
                  } // custom selectors


                  var self = this;
                  var element = self._hashForTimers[targetId];

                  if (element) {
                    element.paused = false;
                  } // update callback


                  var elementUpdate = self._hashForUpdates[targetId];

                  if (elementUpdate) {
                    elementUpdate.entry.paused = false;
                  }
                }
                /**
                 * @en Returns whether or not the target is paused.
                 * @zh 返回指定对象的定时器是否处于暂停状态。
                 * @param target
                 */

              }, {
                key: "isTargetPaused",
                value: function isTargetPaused(target) {
                  assertID(target, 1505);
                  var targetId = target.uuid || target.id;

                  if (!targetId) {
                    errorID(1510);
                    return false;
                  } // Custom selectors


                  var element = this._hashForTimers[targetId];

                  if (element) {
                    return element.paused;
                  }

                  var elementUpdate = this._hashForUpdates[targetId];

                  if (elementUpdate) {
                    return elementUpdate.entry.paused;
                  }

                  return false;
                } // -----------------------private method----------------------

              }, {
                key: "_removeHashElement",
                value: function _removeHashElement(element) {
                  var targetId = element.target.uuid || element.target.id;
                  delete this._hashForTimers[targetId];
                  var arr = this._arrayForTimers;

                  for (var i = 0, l = arr.length; i < l; i++) {
                    if (arr[i] === element) {
                      arr.splice(i, 1);
                      break;
                    }
                  }

                  HashTimerEntry.put(element);
                }
              }, {
                key: "_removeUpdateFromHash",
                value: function _removeUpdateFromHash(entry) {
                  var targetId = entry.target.uuid || entry.target.id;
                  var self = this;
                  var element = self._hashForUpdates[targetId];

                  if (element) {
                    // Remove list entry from list
                    var list = element.list;
                    var listEntry = element.entry;

                    for (var i = 0, l = list.length; i < l; i++) {
                      if (list[i] === listEntry) {
                        list.splice(i, 1);
                        break;
                      }
                    }

                    delete self._hashForUpdates[targetId];
                    ListEntry.put(listEntry);
                    HashUpdateEntry.put(element);
                  }
                }
              }, {
                key: "_priorityIn",
                value: function _priorityIn(ppList, listElement, priority) {
                  for (var i = 0; i < ppList.length; i++) {
                    if (priority < ppList[i].priority) {
                      ppList.splice(i, 0, listElement);
                      return;
                    }
                  }

                  ppList.push(listElement);
                }
              }, {
                key: "_appendIn",
                value: function _appendIn(ppList, listElement) {
                  ppList.push(listElement);
                }
              }]);

              return Scheduler;
            }(System));
            Scheduler.PRIORITY_SYSTEM = 1 << 31;
            Scheduler.PRIORITY_NON_SYSTEM = Scheduler.PRIORITY_SYSTEM + 1;
            Scheduler.ID = 'scheduler';
            legacyCC.Scheduler = Scheduler;

            var DataPoolManager = /*#__PURE__*/function () {
              function DataPoolManager(device) {
                _classCallCheck(this, DataPoolManager);

                this.jointTexturePool = void 0;
                this.jointAnimationInfo = void 0;
                this.jointTexturePool = new JointTexturePool(device);
                this.jointAnimationInfo = new JointAnimationInfo(device);
              }

              _createClass(DataPoolManager, [{
                key: "releaseSkeleton",
                value: function releaseSkeleton(skeleton) {
                  this.jointTexturePool.releaseSkeleton(skeleton);
                }
              }, {
                key: "releaseAnimationClip",
                value: function releaseAnimationClip(clip) {
                  this.jointTexturePool.releaseAnimationClip(clip);
                }
              }, {
                key: "clear",
                value: function clear() {
                  this.jointTexturePool.clear();
                  this.jointAnimationInfo.clear();
                }
              }]);

              return DataPoolManager;
            }();

            var MeshBuffer = exports('M', /*#__PURE__*/function () {
              // NOTE:
              // actually 256 * 4 * (vertexFormat._bytes / 4)
              // include pos, uv, color in ui attributes
              function MeshBuffer(batcher) {
                _classCallCheck(this, MeshBuffer);

                this.vData = null;
                this.iData = null;
                this.attributes = null;
                this.vertexBuffers = [];
                this.indexBuffer = null;
                this.byteStart = 0;
                this.byteOffset = 0;
                this.indicesStart = 0;
                this.indicesOffset = 0;
                this.vertexStart = 0;
                this.vertexOffset = 0;
                this.lastByteOffset = 1;
                this._batcher = void 0;
                this._dirty = false;
                this._vertexFormatBytes = 9 * Float32Array.BYTES_PER_ELEMENT;
                this._initVDataCount = 256 * this._vertexFormatBytes;
                this._initIDataCount = 256 * 6;
                this._outOfCallback = null;
                this._hInputAssemblers = [];
                this._nextFreeIAHandle = 0;
                this._batcher = batcher;
              }

              _createClass(MeshBuffer, [{
                key: "initialize",
                value: function initialize(attrs, outOfCallback) {
                  this._outOfCallback = outOfCallback;
                  var vbStride = Float32Array.BYTES_PER_ELEMENT * 9;
                  if (!this.vertexBuffers.length) this.vertexBuffers.push(this._batcher.device.createBuffer({
                    usage: GFXBufferUsageBit.VERTEX | GFXBufferUsageBit.TRANSFER_DST,
                    memUsage: GFXMemoryUsageBit.HOST | GFXMemoryUsageBit.DEVICE,
                    size: vbStride,
                    stride: vbStride
                  }));
                  var ibStride = Uint16Array.BYTES_PER_ELEMENT;
                  if (!this.indexBuffer) this.indexBuffer = this._batcher.device.createBuffer({
                    usage: GFXBufferUsageBit.INDEX | GFXBufferUsageBit.TRANSFER_DST,
                    memUsage: GFXMemoryUsageBit.HOST | GFXMemoryUsageBit.DEVICE,
                    size: ibStride,
                    stride: ibStride
                  });
                  this.attributes = attrs;

                  this._reallocBuffer();
                }
              }, {
                key: "request",
                value: function request() {
                  var vertexCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
                  var indicesCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
                  this.lastByteOffset = this.byteOffset;
                  var byteOffset = this.byteOffset + vertexCount * this._vertexFormatBytes;
                  var indicesOffset = this.indicesOffset + indicesCount;

                  if (vertexCount + this.vertexOffset > 65535) {
                    // merge last state
                    this._batcher.autoMergeBatches();

                    if (this._outOfCallback) {
                      this._outOfCallback.call(this._batcher, vertexCount, indicesCount);
                    }

                    return false;
                  }

                  var byteLength = this.vData.byteLength;
                  var indicesLength = this.iData.length;

                  if (byteOffset > byteLength || indicesOffset > indicesLength) {
                    while (byteLength < byteOffset || indicesLength < indicesOffset) {
                      this._initVDataCount *= 2;
                      this._initIDataCount *= 2;
                      byteLength = this._initVDataCount * 4;
                      indicesLength = this._initIDataCount;
                    }

                    this._reallocBuffer();
                  }

                  this.vertexOffset += vertexCount;
                  this.indicesOffset += indicesCount;
                  this.byteOffset = byteOffset;
                  this._dirty = true;
                  return true;
                }
              }, {
                key: "reset",
                value: function reset() {
                  this.byteStart = 0;
                  this.byteOffset = 0;
                  this.indicesStart = 0;
                  this.indicesOffset = 0;
                  this.vertexStart = 0;
                  this.vertexOffset = 0;
                  this.lastByteOffset = 0;
                  this._nextFreeIAHandle = 0;
                  this._dirty = false;
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  this.attributes = null;
                  this.vertexBuffers[0].destroy();
                  this.vertexBuffers.length = 0;
                  this.indexBuffer.destroy();
                  this.indexBuffer = null;

                  for (var i = 0; i < this._hInputAssemblers.length; i++) {
                    IAPool.free(this._hInputAssemblers[i]);
                  }

                  this._hInputAssemblers.length = 0;
                }
              }, {
                key: "recordBatch",
                value: function recordBatch() {
                  var vCount = this.indicesOffset - this.indicesStart;
                  if (!vCount) return NULL_HANDLE;

                  if (this._hInputAssemblers.length <= this._nextFreeIAHandle) {
                    this._hInputAssemblers.push(IAPool.alloc(this._batcher.device, this));
                  }

                  var hIA = this._hInputAssemblers[this._nextFreeIAHandle++];
                  var ia = IAPool.get(hIA);
                  ia.firstIndex = this.indicesStart;
                  ia.indexCount = vCount;
                  return hIA;
                }
              }, {
                key: "uploadData",
                value: function uploadData() {
                  if (this.byteOffset === 0 || !this._dirty) {
                    return;
                  }

                  var verticesData = new Float32Array(this.vData.buffer, 0, this.byteOffset >> 2);
                  var indicesData = new Uint16Array(this.iData.buffer, 0, this.indicesOffset);

                  if (this.byteOffset > this.vertexBuffers[0].size) {
                    this.vertexBuffers[0].resize(this.byteOffset);
                  }

                  this.vertexBuffers[0].update(verticesData);

                  if (this.indicesOffset * 2 > this.indexBuffer.size) {
                    this.indexBuffer.resize(this.indicesOffset * 2);
                  }

                  this.indexBuffer.update(indicesData);
                }
              }, {
                key: "_reallocBuffer",
                value: function _reallocBuffer() {
                  this._reallocVData(true);

                  this._reallocIData(true);
                }
              }, {
                key: "_reallocVData",
                value: function _reallocVData(copyOldData) {
                  var oldVData;

                  if (this.vData) {
                    oldVData = new Uint8Array(this.vData.buffer);
                  }

                  this.vData = new Float32Array(this._initVDataCount);

                  if (oldVData && copyOldData) {
                    var newData = new Uint8Array(this.vData.buffer);

                    for (var i = 0, l = oldVData.length; i < l; i++) {
                      newData[i] = oldVData[i];
                    }
                  }
                }
              }, {
                key: "_reallocIData",
                value: function _reallocIData(copyOldData) {
                  var oldIData = this.iData;
                  this.iData = new Uint16Array(this._initIDataCount);

                  if (oldIData && copyOldData) {
                    var iData = this.iData;

                    for (var i = 0, l = oldIData.length; i < l; i++) {
                      iData[i] = oldIData[i];
                    }
                  }
                }
              }]);

              return MeshBuffer;
            }());
            MeshBuffer.OPACITY_OFFSET = 8;

            // Stage types
            var Stage;

            (function (Stage) {
              Stage[Stage["DISABLED"] = 0] = "DISABLED";
              Stage[Stage["CLEAR"] = 1] = "CLEAR";
              Stage[Stage["ENTER_LEVEL"] = 2] = "ENTER_LEVEL";
              Stage[Stage["ENABLED"] = 3] = "ENABLED";
              Stage[Stage["EXIT_LEVEL"] = 4] = "EXIT_LEVEL";
            })(Stage || (Stage = {}));

            var StencilManager = exports('b', /*#__PURE__*/function () {
              function StencilManager() {
                _classCallCheck(this, StencilManager);

                this.stage = Stage.DISABLED;
                this._maskStack = [];
                this._stencilPattern = {
                  stencilTest: true,
                  func: GFXComparisonFunc.ALWAYS,
                  stencilMask: 0xffff,
                  writeMask: 0xffff,
                  failOp: GFXStencilOp.KEEP,
                  zFailOp: GFXStencilOp.KEEP,
                  passOp: GFXStencilOp.KEEP,
                  ref: 1
                };
              }

              _createClass(StencilManager, [{
                key: "pushMask",
                value: function pushMask(mask) {
                  this._maskStack.push(mask);
                }
              }, {
                key: "clear",
                value: function clear() {
                  this.stage = Stage.CLEAR;
                }
              }, {
                key: "enterLevel",
                value: function enterLevel() {
                  this.stage = Stage.ENTER_LEVEL;
                }
              }, {
                key: "enableMask",
                value: function enableMask() {
                  this.stage = Stage.ENABLED;
                }
              }, {
                key: "exitMask",
                value: function exitMask() {
                  if (this._maskStack.length === 0) {
                    // cc.errorID(9001);
                    return;
                  }

                  this._maskStack.pop();

                  if (this._maskStack.length === 0) {
                    this.stage = Stage.DISABLED;
                  } else {
                    this.stage = Stage.ENABLED;
                  }
                }
              }, {
                key: "handleMaterial",
                value: function handleMaterial(mat) {
                  var pattern = this._stencilPattern;

                  if (this.stage === Stage.DISABLED) {
                    pattern.stencilTest = false;
                    pattern.func = GFXComparisonFunc.ALWAYS;
                    pattern.failOp = GFXStencilOp.KEEP;
                    pattern.stencilMask = pattern.writeMask = 0xffff;
                    pattern.ref = 1;
                  } else {
                    pattern.stencilTest = true;

                    if (this.stage === Stage.ENABLED) {
                      pattern.func = GFXComparisonFunc.EQUAL;
                      pattern.failOp = GFXStencilOp.KEEP;
                      pattern.stencilMask = pattern.ref = this.getStencilRef();
                      pattern.writeMask = this.getWriteMask();
                    } else if (this.stage === Stage.CLEAR) {
                      var mask = this._maskStack[this._maskStack.length - 1];
                      pattern.func = GFXComparisonFunc.NEVER;
                      pattern.failOp = mask.inverted ? GFXStencilOp.REPLACE : GFXStencilOp.ZERO;
                      pattern.writeMask = pattern.stencilMask = pattern.ref = this.getWriteMask();
                    } else if (this.stage === Stage.ENTER_LEVEL) {
                      var _mask = this._maskStack[this._maskStack.length - 1];
                      pattern.func = GFXComparisonFunc.NEVER;
                      pattern.failOp = _mask.inverted ? GFXStencilOp.ZERO : GFXStencilOp.REPLACE;
                      pattern.writeMask = pattern.stencilMask = pattern.ref = this.getWriteMask();
                    }
                  }

                  return this._changed(mat.passes[0]);
                }
              }, {
                key: "getWriteMask",
                value: function getWriteMask() {
                  return 1 << this._maskStack.length - 1;
                }
              }, {
                key: "getExitWriteMask",
                value: function getExitWriteMask() {
                  return 1 << this._maskStack.length;
                }
              }, {
                key: "getStencilRef",
                value: function getStencilRef() {
                  var result = 0;

                  for (var i = 0; i < this._maskStack.length; ++i) {
                    result += 0x00000001 << i;
                  }

                  return result;
                }
              }, {
                key: "reset",
                value: function reset() {
                  // reset stack and stage
                  this._maskStack.length = 0;
                  this.stage = Stage.DISABLED;
                }
              }, {
                key: "_changed",
                value: function _changed(pass) {
                  var stencilState = pass.depthStencilState;
                  var pattern = this._stencilPattern;

                  if (pattern.stencilTest !== stencilState.stencilTestFront || pattern.func !== stencilState.stencilFuncFront || pattern.failOp !== stencilState.stencilFailOpFront || pattern.zFailOp !== stencilState.stencilZFailOpFront || pattern.passOp !== stencilState.stencilPassOpFront || pattern.stencilMask !== stencilState.stencilReadMaskFront || pattern.writeMask !== stencilState.stencilWriteMaskFront || pattern.ref !== stencilState.stencilRefFront) {
                    return true;
                  }

                  return false;
                }
              }, {
                key: "pattern",
                get: function get() {
                  return this._stencilPattern;
                }
              }]);

              return StencilManager;
            }());
            StencilManager.sharedManager = null;
            StencilManager.sharedManager = new StencilManager();

            var UIBatchModel = /*#__PURE__*/function (_Model) {
              _inherits(UIBatchModel, _Model);

              function UIBatchModel() {
                var _this;

                _classCallCheck(this, UIBatchModel);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(UIBatchModel).call(this));
                _this._subModel = void 0;
                _this.type = ModelType.UI_BATCH;
                _this._subModel = new UISubModel();

                _this._subModel.initialize();

                _this._subModels[0] = _this._subModel;
                return _this;
              }

              _createClass(UIBatchModel, [{
                key: "updateTransform",
                value: function updateTransform() {}
              }, {
                key: "updateUBOs",
                value: function updateUBOs(stamp) {
                  // Should updatePass when updateUBOs
                  var subModels = this._subModels;

                  for (var i = 0; i < subModels.length; i++) {
                    subModels[i].update();
                  }

                  this._updateStamp = stamp;

                  if (!this._transformUpdated) {
                    return;
                  }

                  this._transformUpdated = false;
                }
              }, {
                key: "directInitialize",
                value: function directInitialize(batch) {
                  this._subModel.directInitialize(batch.material.passes, batch.hInputAssembler, batch.hDescriptorSet);
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  this._subModel.destroy();
                }
              }]);

              return UIBatchModel;
            }(Model);

            var UISubModel = /*#__PURE__*/function (_SubModel) {
              _inherits(UISubModel, _SubModel);

              function UISubModel() {
                _classCallCheck(this, UISubModel);

                return _possibleConstructorReturn(this, _getPrototypeOf(UISubModel).apply(this, arguments));
              }

              _createClass(UISubModel, [{
                key: "initialize",
                value: function initialize() {
                  this._handle = SubModelPool.alloc();
                  SubModelPool.set(this._handle, SubModelView.PRIORITY, RenderPriority.DEFAULT);
                }
              }, {
                key: "directInitialize",
                value: function directInitialize(passes, iaHandle, dsHandle) {
                  this._passes = passes;

                  this._flushPassInfo();

                  SubModelPool.set(this._handle, SubModelView.INPUT_ASSEMBLER, iaHandle);
                  SubModelPool.set(this._handle, SubModelView.DESCRIPTOR_SET, dsHandle);
                  this._inputAssembler = IAPool.get(iaHandle);
                  this._descriptorSet = DSPool.get(dsHandle);
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  SubModelPool.free(this._handle);
                  this._descriptorSet = null;
                  this._inputAssembler = null;
                  this._priority = RenderPriority.DEFAULT;
                  this._handle = NULL_HANDLE;
                  this._patches = null;
                  this._subMesh = null;
                  this._passes = null;
                }
              }]);

              return UISubModel;
            }(SubModel);

            var _dsInfo = {
              layout: null
            };
            var UIDrawBatch = exports('U', /*#__PURE__*/function () {
              function UIDrawBatch() {
                _classCallCheck(this, UIDrawBatch);

                this.bufferBatch = null;
                this.camera = null;
                this.model = null;
                this.material = null;
                this.texture = null;
                this.sampler = null;
                this.hInputAssembler = NULL_HANDLE;
                this.hDescriptorSet = NULL_HANDLE;
                this.useLocalData = null;
                this.isStatic = false;
                var root = legacyCC.director.root;
                var programName = EffectAsset.get('builtin-sprite').shaders[0].name;
                programLib.getGFXShader(root.device, programName, {
                  USE_TEXTURE: true
                }, root.pipeline);
                _dsInfo.layout = programLib.getPipelineLayout(programName).setLayouts[SetIndex.LOCAL];
                this.hDescriptorSet = DSPool.alloc(root.device, _dsInfo);
              }

              _createClass(UIDrawBatch, [{
                key: "destroy",
                value: function destroy(ui) {
                  if (this.hDescriptorSet) {
                    DSPool.free(this.hDescriptorSet);
                    this.hDescriptorSet = NULL_HANDLE;
                  }
                }
              }, {
                key: "clear",
                value: function clear() {
                  this.bufferBatch = null;
                  this.hInputAssembler = NULL_HANDLE;
                  this.camera = null;
                  this.material = null;
                  this.texture = null;
                  this.sampler = null;
                  this.model = null;
                  this.isStatic = false;
                }
              }]);

              return UIDrawBatch;
            }());

            var UIMaterial = /*#__PURE__*/function () {
              function UIMaterial() {
                _classCallCheck(this, UIMaterial);

                this._material = null;
                this._pass = null;
                this._hDescriptorSet = NULL_HANDLE;
                this._refCount = 0;
              }

              _createClass(UIMaterial, [{
                key: "initialize",
                value: function initialize(info) {
                  if (!info.material) {
                    return false;
                  }

                  this._material = new Material();

                  this._material.copy(info.material);

                  this._pass = this._material.passes[0];

                  this._pass.update();

                  this._hDescriptorSet = PassPool.get(this._pass.handle, PassView.DESCRIPTOR_SET);
                  return true;
                }
              }, {
                key: "increase",
                value: function increase() {
                  this._refCount++;
                  return this._refCount;
                }
              }, {
                key: "decrease",
                value: function decrease() {
                  this._refCount--;

                  if (this._refCount === 0) {
                    this.destroy();
                  }

                  return this._refCount;
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  if (this._material) {
                    this._material.destroy();

                    this._material = null;
                  }

                  this._refCount = 0;
                }
              }, {
                key: "material",
                get: function get() {
                  return this._material;
                }
              }, {
                key: "pass",
                get: function get() {
                  return this._pass;
                }
              }, {
                key: "hDescriptorSet",
                get: function get() {
                  return this._hDescriptorSet;
                }
              }]);

              return UIMaterial;
            }();

            /*
             Copyright (c) 2019 Xiamen Yaji Software Co., Ltd.

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
            var vfmt = exports('v', [{
              name: GFXAttributeName.ATTR_POSITION,
              format: GFXFormat.RGB32F
            }, {
              name: GFXAttributeName.ATTR_TEX_COORD,
              format: GFXFormat.RG32F
            }, {
              name: GFXAttributeName.ATTR_COLOR,
              format: GFXFormat.RGBA32F
            }]);

            var UIVertexFormat = /*#__PURE__*/Object.freeze({
                __proto__: null,
                vfmt: vfmt
            });
            exports('c', UIVertexFormat);

            var isIOS14OrIPadOS14Device = sys.os === sys.OS_IOS && sys.isBrowser && /(iPhone OS 1[4-9])|(Version\/1[4-9][\.\d]*)|(iOS 1[4-9])/.test(window.navigator.userAgent);
            /**
             * @zh
             * UI 渲染流程
             */

            var UI = /*#__PURE__*/function () {
              _createClass(UI, [{
                key: "renderScene",
                get: function get() {
                  return this._scene;
                }
              }, {
                key: "currBufferBatch",
                get: function get() {
                  return this._currMeshBuffer;
                },
                set: function set(value) {
                  if (!value) {
                    return;
                  }

                  this._currMeshBuffer = value;
                }
              }, {
                key: "currStaticRoot",
                set: function set(value) {
                  this._currStaticRoot = value;
                }
              }]);

              function UI(_root) {
                var _this = this;

                _classCallCheck(this, UI);

                this.device = void 0;
                this._screens = [];
                this._bufferBatchPool = new RecyclePool(function () {
                  return new MeshBuffer(_this);
                }, 128);
                this._drawBatchPool = void 0;
                this._scene = void 0;
                this._attributes = [];
                this._meshBuffers = [];
                this._meshBufferUseCount = 0;
                this._uiMaterials = new Map();
                this._canvasMaterials = new Map();
                this._batches = void 0;
                this._uiModelPool = null;
                this._modelInUse = void 0;
                this._emptyMaterial = new Material();
                this._currMaterial = this._emptyMaterial;
                this._currTexture = null;
                this._currSampler = null;
                this._currCanvas = null;
                this._currMeshBuffer = null;
                this._currStaticRoot = null;
                this._currComponent = null;
                this._parentOpacity = 1;
                this._root = _root;
                this.device = _root.device;
                this._scene = this._root.createScene({
                  name: 'GUIScene'
                });
                this._uiModelPool = new Pool(function () {
                  var model = legacyCC.director.root.createModel(UIBatchModel);
                  model.enabled = true;
                  model.visFlags |= Layers.Enum.UI_3D;
                  return model;
                }, 2);
                this._modelInUse = new CachedArray(10);
                this._batches = new CachedArray(64);
                this._drawBatchPool = new Pool(function () {
                  return new UIDrawBatch();
                }, 128);
                legacyCC.director.on(legacyCC.Director.EVENT_BEFORE_DRAW, this.update, this);
              }

              _createClass(UI, [{
                key: "initialize",
                value: function initialize() {
                  this._attributes = vfmt;

                  this._requireBufferBatch();

                  return true;
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  var _this2 = this;

                  for (var i = 0; i < this._batches.length; i++) {
                    if (this._batches.array[i]) {
                      this._batches.array[i].destroy(this);
                    }
                  }

                  this._batches.destroy();

                  for (var _i = 0; _i < this._meshBuffers.length; _i++) {
                    this._meshBuffers[_i].destroy();
                  }

                  if (this._drawBatchPool) {
                    this._drawBatchPool.destroy(function (obj) {
                      obj.destroy(_this2);
                    });
                  }

                  if (this._uiModelPool) {
                    this._uiModelPool.destroy(function (obj) {
                      obj.destroy();
                    });
                  }

                  this._meshBuffers.splice(0);

                  legacyCC.director.root.destroyScene(this._scene);
                  legacyCC.director.off(legacyCC.Director.EVENT_BEFORE_DRAW, this.update, this);
                }
              }, {
                key: "getRenderSceneGetter",
                value: function getRenderSceneGetter() {
                  return Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this), 'renderScene').get.bind(this);
                }
              }, {
                key: "_getUIMaterial",
                value: function _getUIMaterial(mat) {
                  if (this._uiMaterials.has(mat.hash)) {
                    return this._uiMaterials.get(mat.hash);
                  } else {
                    var uiMat = new UIMaterial();
                    uiMat.initialize({
                      material: mat
                    });

                    this._uiMaterials.set(mat.hash, uiMat);

                    return uiMat;
                  }
                }
              }, {
                key: "_removeUIMaterial",
                value: function _removeUIMaterial(hash) {
                  if (this._uiMaterials.has(hash)) {
                    if (this._uiMaterials.get(hash).decrease() === 0) {
                      this._uiMaterials["delete"](hash);
                    }
                  }
                }
                /**
                 * @en
                 * Add the managed Canvas.
                 *
                 * @zh
                 * 添加屏幕组件管理。
                 *
                 * @param comp - 屏幕组件。
                 */

              }, {
                key: "addScreen",
                value: function addScreen(comp) {
                  var screens = this._screens; // clear the canvas old visibility cache in canvasMaterial list

                  for (var i = 0; i < screens.length; i++) {
                    var screen = screens[i];

                    if (screen.camera) {
                      var visibility = screen.camera.view.visibility;

                      var matRecord = this._canvasMaterials.get(visibility);

                      if (matRecord) {
                        var matHashInter = matRecord.keys();
                        var matHash = matHashInter.next();

                        while (!matHash.done) {
                          this._removeUIMaterial(matHash.value);

                          matHash = matHashInter.next();
                        }

                        matRecord.clear();
                      }
                    }
                  }

                  this._screens.push(comp);

                  this._screens.sort(this._screenSort);

                  for (var _i2 = 0; _i2 < screens.length; _i2++) {
                    var element = screens[_i2];

                    if (element.camera) {
                      element.camera.view.visibility = Layers.BitMask.UI_2D | _i2 + 1;

                      if (!this._canvasMaterials.has(element.camera.view.visibility)) {
                        this._canvasMaterials.set(element.camera.view.visibility, new Map());
                      }
                    }
                  }
                }
                /**
                 * @en
                 * Get the Canvas by number.
                 *
                 * @zh
                 * 通过屏幕编号获得屏幕组件。
                 *
                 * @param visibility - 屏幕编号。
                 */

              }, {
                key: "getScreen",
                value: function getScreen(visibility) {
                  var screens = this._screens;

                  for (var i = 0; i < screens.length; ++i) {
                    var screen = screens[i];

                    if (screen.camera) {
                      if (screen.camera.view.visibility === visibility) {
                        return screen;
                      }
                    }
                  }

                  return null;
                }
                /**
                 * @zh
                 * Removes the Canvas from the list.
                 *
                 * @param comp - 被移除的屏幕。
                 */

              }, {
                key: "removeScreen",
                value: function removeScreen(comp) {
                  var _this3 = this;

                  var idx = this._screens.indexOf(comp);

                  if (idx === -1) {
                    return;
                  }

                  this._screens.splice(idx, 1);

                  if (comp.camera) {
                    var matRecord = this._canvasMaterials.get(comp.camera.view.visibility);

                    var matHashInter = matRecord.keys();
                    var matHash = matHashInter.next();

                    while (!matHash.done) {
                      this._removeUIMaterial(matHash.value);

                      matHash = matHashInter.next();
                    }

                    matRecord.clear();
                  }

                  var camera;

                  for (var i = idx; i < this._screens.length; i++) {
                    camera = this._screens[i].camera;

                    if (camera) {
                      (function () {
                        var matRecord = _this3._canvasMaterials.get(camera.view.visibility);

                        camera.view.visibility = Layers.BitMask.UI_2D | i + 1;

                        var newMatRecord = _this3._canvasMaterials.get(camera.view.visibility);

                        matRecord.forEach(function (value, key) {
                          newMatRecord.set(key, value);
                        });
                        matRecord.clear();
                      })();
                    }
                  }
                }
              }, {
                key: "update",
                value: function update(dt) {
                  this._renderScreens(); // update buffers


                  if (this._batches.length > 0) {
                    var buffers = this._meshBuffers;

                    for (var i = 0; i < buffers.length; ++i) {
                      var bufferBatch = buffers[i];
                      bufferBatch.uploadData();
                      bufferBatch.reset();
                    }
                  }

                  this.render();

                  this._reset();
                }
              }, {
                key: "sortScreens",
                value: function sortScreens() {
                  this._screens.sort(this._screenSort);
                }
              }, {
                key: "render",
                value: function render() {
                  var batchPriority = 0;

                  for (var m = 0; m < this._modelInUse.length; m++) {
                    this._scene.removeModel(this._modelInUse.get(m));

                    this._uiModelPool.free(this._modelInUse.get(m));
                  }

                  this._modelInUse.clear();

                  if (this._batches.length) {
                    for (var i = 0; i < this._batches.length; ++i) {
                      var batch = this._batches.array[i];

                      if (batch.model) {
                        if (batch.camera) {
                          var visFlags = batch.camera.view.visibility;
                          batch.model.visFlags = visFlags;
                          batch.model.node.layer = visFlags;
                        }

                        var subModels = batch.model.subModels;

                        for (var j = 0; j < subModels.length; j++) {
                          subModels[j].priority = batchPriority++;
                        }
                      } else {
                        var descriptorSet = DSPool.get(batch.hDescriptorSet);
                        var binding = ModelLocalBindings.SAMPLER_SPRITE;
                        descriptorSet.bindTexture(binding, batch.texture);
                        descriptorSet.bindSampler(binding, batch.sampler);
                        descriptorSet.update();

                        var uiModel = this._uiModelPool.alloc();

                        uiModel.directInitialize(batch);

                        this._scene.addModel(uiModel);

                        uiModel.subModels[0].priority = batchPriority++;

                        if (batch.camera) {
                          uiModel.visFlags = batch.camera.view.visibility;

                          if (this._canvasMaterials.get(batch.camera.view.visibility).get(batch.material.hash) == null) {
                            this._canvasMaterials.get(batch.camera.view.visibility).set(batch.material.hash, 1);
                          }
                        }

                        this._modelInUse.push(uiModel);
                      }
                    }
                  }
                }
                /**
                 * @en
                 * Render component data submission process of UI.
                 * The submitted vertex data is the UI for world coordinates.
                 * For example: The UI components except Graphics and UIModel.
                 *
                 * @zh
                 * UI 渲染组件数据提交流程（针对提交的顶点数据是世界坐标的提交流程，例如：除 Graphics 和 UIModel 的大部分 ui 组件）。
                 * 此处的数据最终会生成需要提交渲染的 model 数据。
                 *
                 * @param comp - 当前执行组件。
                 * @param frame - 当前执行组件贴图。
                 * @param assembler - 当前组件渲染数据组装器。
                 */

              }, {
                key: "commitComp",
                value: function commitComp(comp) {
                  var frame = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                  var assembler = arguments.length > 2 ? arguments[2] : undefined;
                  var sampler = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                  var renderComp = comp;
                  var texture = frame;
                  var samp = sampler;
                  var mat = renderComp.getRenderMaterial(0);

                  if (!mat) {
                    mat = renderComp._updateBuiltinMaterial();
                    mat = renderComp._updateBlendFunc();
                  }

                  if (this._currMaterial !== mat || this._currTexture !== texture || this._currSampler !== samp) {
                    this.autoMergeBatches(this._currComponent);
                    this._currComponent = renderComp;
                    this._currMaterial = mat;
                    this._currTexture = texture;
                    this._currSampler = samp;
                  }

                  if (assembler) {
                    assembler.fillBuffers(renderComp, this);

                    this._applyOpacity(renderComp);
                  }
                }
                /**
                 * @en
                 * Render component data submission process of UI.
                 * The submitted vertex data is the UI for local coordinates.
                 * For example: The UI components of Graphics and UIModel.
                 *
                 * @zh
                 * UI 渲染组件数据提交流程（针对例如： Graphics 和 UIModel 等数据量较为庞大的 ui 组件）。
                 *
                 * @param comp - 当前执行组件。
                 * @param model - 提交渲染的 model 数据。
                 * @param mat - 提交渲染的材质。
                 */

              }, {
                key: "commitModel",
                value: function commitModel(comp, model, mat) {
                  // if the last comp is spriteComp, previous comps should be batched.
                  if (this._currMaterial !== this._emptyMaterial) {
                    this.autoMergeBatches();
                  }

                  if (mat) {
                    var rebuild = false;

                    if (StencilManager.sharedManager.handleMaterial(mat)) {
                      var state = StencilManager.sharedManager.pattern;
                      mat.overridePipelineStates({
                        depthStencilState: {
                          stencilTestFront: state.stencilTest,
                          stencilFuncFront: state.func,
                          stencilReadMaskFront: state.stencilMask,
                          stencilWriteMaskFront: state.writeMask,
                          stencilFailOpFront: state.failOp,
                          stencilZFailOpFront: state.zFailOp,
                          stencilPassOpFront: state.passOp,
                          stencilRefFront: state.ref,
                          stencilTestBack: state.stencilTest,
                          stencilFuncBack: state.func,
                          stencilReadMaskBack: state.stencilMask,
                          stencilWriteMaskBack: state.writeMask,
                          stencilFailOpBack: state.failOp,
                          stencilZFailOpBack: state.zFailOp,
                          stencilPassOpBack: state.passOp,
                          stencilRefBack: state.ref
                        }
                      });
                      rebuild = true;
                    }

                    if (rebuild && model) {
                      for (var i = 0; i < model.subModels.length; i++) {
                        model.setSubModelMaterial(i, mat);
                      }
                    }
                  }

                  var uiCanvas = this._currCanvas;

                  var curDrawBatch = this._drawBatchPool.alloc();

                  curDrawBatch.camera = uiCanvas && uiCanvas.camera;
                  curDrawBatch.model = model;
                  curDrawBatch.bufferBatch = null;
                  curDrawBatch.material = mat;
                  curDrawBatch.texture = null;
                  curDrawBatch.sampler = null; // reset current render state to null

                  this._currMaterial = this._emptyMaterial;
                  this._currComponent = null;
                  this._currTexture = null;
                  this._currSampler = null;

                  this._batches.push(curDrawBatch);
                }
                /**
                 * @en
                 * Submit separate render data.
                 * This data does not participate in the batch.
                 *
                 * @zh
                 * 提交独立渲染数据.
                 * @param comp 静态组件
                 */

              }, {
                key: "commitStaticBatch",
                value: function commitStaticBatch(comp) {
                  this._batches.concat(comp.drawBatchList);

                  this.finishMergeBatches();
                }
                /**
                 * @en
                 * End a section of render data and submit according to the batch condition.
                 *
                 * @zh
                 * 根据合批条件，结束一段渲染数据并提交。
                 */

              }, {
                key: "autoMergeBatches",
                value: function autoMergeBatches(renderComp) {
                  var buffer = this._currMeshBuffer;
                  var uiCanvas = this._currCanvas;
                  var hIA = buffer.recordBatch();
                  var mat = this._currMaterial;

                  if (!hIA || !mat) {
                    return;
                  }

                  if (renderComp && StencilManager.sharedManager.handleMaterial(mat)) {
                    this._currMaterial = mat = renderComp.getUIMaterialInstance();
                    var state = StencilManager.sharedManager.pattern;
                    mat.overridePipelineStates({
                      depthStencilState: {
                        stencilTestFront: state.stencilTest,
                        stencilFuncFront: state.func,
                        stencilReadMaskFront: state.stencilMask,
                        stencilWriteMaskFront: state.writeMask,
                        stencilFailOpFront: state.failOp,
                        stencilZFailOpFront: state.zFailOp,
                        stencilPassOpFront: state.passOp,
                        stencilRefFront: state.ref,
                        stencilTestBack: state.stencilTest,
                        stencilFuncBack: state.func,
                        stencilReadMaskBack: state.stencilMask,
                        stencilWriteMaskBack: state.writeMask,
                        stencilFailOpBack: state.failOp,
                        stencilZFailOpBack: state.zFailOp,
                        stencilPassOpBack: state.passOp,
                        stencilRefBack: state.ref
                      }
                    });
                  }

                  var curDrawBatch = this._currStaticRoot ? this._currStaticRoot._requireDrawBatch() : this._drawBatchPool.alloc();
                  curDrawBatch.camera = uiCanvas && uiCanvas.camera;
                  curDrawBatch.bufferBatch = buffer;
                  curDrawBatch.material = mat;
                  curDrawBatch.texture = this._currTexture;
                  curDrawBatch.sampler = this._currSampler;
                  curDrawBatch.hInputAssembler = hIA;

                  this._batches.push(curDrawBatch);

                  buffer.vertexStart = buffer.vertexOffset;
                  buffer.indicesStart = buffer.indicesOffset;
                  buffer.byteStart = buffer.byteOffset; // HACK: After sharing buffer between drawcalls, the performance degradation a lots on iOS 14 or iPad OS 14 device
                  // TODO: Maybe it can be removed after Apple fixes it?

                  if (isIOS14OrIPadOS14Device) {
                    this._requireBufferBatch();
                  }
                }
                /**
                 * @en
                 * Force changes to current batch data and merge
                 *
                 * @zh
                 * 强行修改当前批次数据并合并。
                 *
                 * @param material - 当前批次的材质。
                 * @param sprite - 当前批次的精灵帧。
                 */

              }, {
                key: "forceMergeBatches",
                value: function forceMergeBatches(material, sprite) {
                  this._currMaterial = material;
                  this._currTexture = sprite;
                  this.autoMergeBatches();
                }
                /**
                 * @en
                 * Forced to merge the data of the previous batch to start a new batch.
                 *
                 * @zh
                 * 强制合并上一个批次的数据，开启新一轮合批。
                 */

              }, {
                key: "finishMergeBatches",
                value: function finishMergeBatches() {
                  this.autoMergeBatches();
                  this._currMaterial = this._emptyMaterial;
                  this._currTexture = null;
                  this._currComponent = null;
                }
              }, {
                key: "_destroyUIMaterials",
                value: function _destroyUIMaterials() {
                  var matIter = this._uiMaterials.values();

                  var result = matIter.next();

                  while (!result.done) {
                    var uiMat = result.value;
                    uiMat.destroy();
                    result = matIter.next();
                  }

                  this._uiMaterials.clear();
                }
              }, {
                key: "_walk",
                value: function _walk(node) {
                  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                  var len = node.children.length;
                  var parentOpacity = this._parentOpacity;
                  this._parentOpacity *= node._uiProps.opacity;

                  this._preprocess(node);

                  if (len > 0 && !node._static) {
                    var children = node.children;

                    for (var i = 0; i < children.length; ++i) {
                      var child = children[i];

                      this._walk(child, level);
                    }
                  }

                  this._postprocess(node);

                  this._parentOpacity = parentOpacity;
                  level += 1;
                }
              }, {
                key: "_renderScreens",
                value: function _renderScreens() {
                  var screens = this._screens;

                  for (var i = 0; i < screens.length; ++i) {
                    var screen = screens[i];

                    if (!screen.enabledInHierarchy) {
                      continue;
                    }

                    this._currCanvas = screen;

                    this._recursiveScreenNode(screen.node);
                  }
                }
              }, {
                key: "_preprocess",
                value: function _preprocess(node) {
                  if (!node._uiProps.uiTransformComp) {
                    return;
                  } // parent changed can flush child visibility


                  node._uiProps.uiTransformComp._canvas = this._currCanvas;
                  var render = node._uiProps.uiComp;

                  if (render && render.enabledInHierarchy) {
                    render.updateAssembler(this);
                  }
                }
              }, {
                key: "_postprocess",
                value: function _postprocess(node) {
                  var render = node._uiProps.uiComp;

                  if (render && render.enabledInHierarchy) {
                    render.postUpdateAssembler(this);
                  }
                }
              }, {
                key: "_recursiveScreenNode",
                value: function _recursiveScreenNode(screen) {
                  this._walk(screen);

                  this.autoMergeBatches(this._currComponent);
                }
              }, {
                key: "_reset",
                value: function _reset() {
                  for (var i = 0; i < this._batches.length; ++i) {
                    var batch = this._batches.array[i];

                    if (batch.isStatic) {
                      continue;
                    }

                    batch.clear();

                    this._drawBatchPool.free(batch);
                  }

                  this._parentOpacity = 1;

                  this._batches.clear();

                  this._currMaterial = this._emptyMaterial;
                  this._currCanvas = null;
                  this._currTexture = null;
                  this._currSampler = null;
                  this._currComponent = null;
                  this._meshBufferUseCount = 0;

                  this._requireBufferBatch();

                  StencilManager.sharedManager.reset();
                }
              }, {
                key: "_createMeshBuffer",
                value: function _createMeshBuffer() {
                  var batch = this._bufferBatchPool.add();

                  batch.initialize(this._attributes, this._requireBufferBatch.bind(this));

                  this._meshBuffers.push(batch);

                  return batch;
                }
              }, {
                key: "_requireBufferBatch",
                value: function _requireBufferBatch() {
                  if (this._meshBufferUseCount >= this._meshBuffers.length) {
                    this._currMeshBuffer = this._createMeshBuffer();
                  } else {
                    this._currMeshBuffer = this._meshBuffers[this._meshBufferUseCount];
                  }

                  this._meshBufferUseCount++;

                  if (arguments.length === 2) {
                    this._currMeshBuffer.request(arguments[0], arguments[1]);
                  }
                }
              }, {
                key: "_screenSort",
                value: function _screenSort(a, b) {
                  var delta = a.priority - b.priority;
                  return delta === 0 ? a.node.getSiblingIndex() - b.node.getSiblingIndex() : delta;
                }
              }, {
                key: "_applyOpacity",
                value: function _applyOpacity(comp) {
                  var color = comp.color.a / 255;
                  var opacity = this._parentOpacity = this._parentOpacity * color;
                  var byteOffset = this._currMeshBuffer.byteOffset >> 2;
                  var vbuf = this._currMeshBuffer.vData;
                  var lastByteOffset = this._currMeshBuffer.lastByteOffset >> 2;

                  for (var i = lastByteOffset; i < byteOffset; i += 9) {
                    vbuf[i + MeshBuffer.OPACITY_OFFSET] = opacity;
                  }

                  this._currMeshBuffer.lastByteOffset = this._currMeshBuffer.byteOffset;
                }
              }]);

              return UI;
            }();

            /**
             * @zh
             * Root描述信息
             */

            /**
             * @zh
             * Root类
             */
            var Root = /*#__PURE__*/function () {
              _createClass(Root, [{
                key: "device",

                /**
                 * @zh
                 * GFX设备
                 */
                get: function get() {
                  return this._device;
                }
                /**
                 * @zh
                 * 主窗口
                 */

              }, {
                key: "mainWindow",
                get: function get() {
                  return this._mainWindow;
                }
                /**
                 * @zh
                 * 当前窗口
                 */

              }, {
                key: "curWindow",
                set: function set(window) {
                  this._curWindow = window;
                },
                get: function get() {
                  return this._curWindow;
                }
                /**
                 * @zh
                 * 临时窗口（用于数据传输）
                 */

              }, {
                key: "tempWindow",
                set: function set(window) {
                  this._tempWindow = window;
                },
                get: function get() {
                  return this._tempWindow;
                }
                /**
                 * @zh
                 * 窗口列表
                 */

              }, {
                key: "windows",
                get: function get() {
                  return this._windows;
                }
                /**
                 * @zh
                 * 渲染管线
                 */

              }, {
                key: "pipeline",
                get: function get() {
                  return this._pipeline;
                }
                /**
                 * @zh
                 * UI实例
                 */

              }, {
                key: "ui",
                get: function get() {
                  return this._ui;
                }
                /**
                 * @zh
                 * 场景列表
                 */

              }, {
                key: "scenes",
                get: function get() {
                  return this._scenes;
                }
                /**
                 * @zh
                 * 累计时间（秒）
                 */

              }, {
                key: "cumulativeTime",
                get: function get() {
                  return this._time;
                }
                /**
                 * @zh
                 * 帧时间（秒）
                 */

              }, {
                key: "frameTime",
                get: function get() {
                  return this._frameTime;
                }
                /**
                 * @zh
                 * 一秒内的累计帧数
                 */

              }, {
                key: "frameCount",
                get: function get() {
                  return this._frameCount;
                }
                /**
                 * @zh
                 * 每秒帧率
                 */

              }, {
                key: "fps",
                get: function get() {
                  return this._fps;
                }
                /**
                 * @zh
                 * 每秒固定帧率
                 */

              }, {
                key: "fixedFPS",
                set: function set(fps) {
                  if (fps > 0) {
                    this._fixedFPS = fps;
                    this._fixedFPSFrameTime = 1000.0 / fps;
                  } else {
                    this._fixedFPSFrameTime = 0;
                  }
                },
                get: function get() {
                  return this._fixedFPS;
                }
              }, {
                key: "dataPoolManager",
                get: function get() {
                  return this._dataPoolMgr;
                }
              }]);

              /**
               * 构造函数
               * @param device GFX设备
               */
              function Root(device) {
                var _this = this;

                _classCallCheck(this, Root);

                this._createSceneFun = null;
                this._createWindowFun = null;
                this._device = void 0;
                this._windows = [];
                this._mainWindow = null;
                this._curWindow = null;
                this._tempWindow = null;
                this._pipeline = null;
                this._ui = null;
                this._dataPoolMgr = void 0;
                this._scenes = [];
                this._cameras = [];
                this._views = [];
                this._modelPools = new Map();
                this._cameraPool = null;
                this._lightPools = new Map();
                this._time = 0;
                this._frameTime = 0;
                this._fpsTime = 0;
                this._frameCount = 0;
                this._fps = 0;
                this._fixedFPS = 0;
                this._fixedFPSFrameTime = 0;
                this._device = device;
                this._dataPoolMgr = new DataPoolManager(device);
                RenderScene.registerCreateFunc(this);
                RenderWindow.registerCreateFunc(this);
                this._cameraPool = new Pool(function () {
                  return new Camera(_this._device);
                }, 4);
              }
              /**
               * @zh
               * 初始化函数
               * @param info Root描述信息
               */


              _createClass(Root, [{
                key: "initialize",
                value: function initialize(info) {
                  var _this2 = this;

                  var colorAttachment = new GFXColorAttachment();
                  var depthStencilAttachment = new GFXDepthStencilAttachment();
                  depthStencilAttachment.depthStoreOp = GFXStoreOp.DISCARD;
                  depthStencilAttachment.stencilStoreOp = GFXStoreOp.DISCARD;
                  this._mainWindow = this.createWindow({
                    title: 'rootMainWindow',
                    width: this._device.width,
                    height: this._device.height,
                    renderPassInfo: {
                      colorAttachments: [colorAttachment],
                      depthStencilAttachment: depthStencilAttachment
                    },
                    swapchainBufferIndices: -1 // always on screen

                  });
                  this._curWindow = this._mainWindow;
                  builtinResMgr.initBuiltinRes(this._device);
                  legacyCC.view.on('design-resolution-changed', function () {
                    var width = legacyCC.game.canvas.width;
                    var height = legacyCC.game.canvas.height;

                    _this2.resize(width, height);
                  }, this);
                  return true;
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  this.clearCameras();
                  this.destroyScenes();

                  if (this._pipeline) {
                    this._pipeline.destroy();

                    this._pipeline = null;
                  }

                  if (this._ui) {
                    this._ui.destroy();

                    this._ui = null;
                  }

                  this._curWindow = null;
                  this._mainWindow = null;
                  this.dataPoolManager.clear();
                }
                /**
                 * @zh
                 * 重置大小
                 * @param width 屏幕宽度
                 * @param height 屏幕高度
                 */

              }, {
                key: "resize",
                value: function resize(width, height) {
                  // const w = width / cc.view._devicePixelRatio;
                  // const h = height / cc.view._devicePixelRatio;
                  this._device.resize(width, height);

                  this._mainWindow.resize(width, height);

                  for (var _iterator = _createForOfIteratorHelperLoose(this._windows), _step; !(_step = _iterator()).done;) {
                    var window = _step.value;

                    if (window.shouldSyncSizeWithSwapchain) {
                      window.resize(width, height);
                    }
                  }

                  for (var _iterator2 = _createForOfIteratorHelperLoose(this._cameras), _step2; !(_step2 = _iterator2()).done;) {
                    var camera = _step2.value;

                    if (camera.isWindowSize) {
                      camera.resize(width, height);
                    }
                  }
                }
              }, {
                key: "setRenderPipeline",
                value: function setRenderPipeline(rppl) {
                  if (!rppl) {
                    rppl = new ForwardPipeline();
                    rppl.initialize({
                      flows: []
                    });
                  }

                  this._pipeline = rppl;

                  if (!this._pipeline.activate()) {
                    return false;
                  }

                  var scene = legacyCC.director.getScene();

                  if (scene) {
                    scene.globals.activate();
                  }

                  this.onGlobalPipelineStateChanged();

                  if (this._ui) {
                    this._ui.destroy();
                  }

                  this._ui = new UI(this);

                  if (!this._ui.initialize()) {
                    this.destroy();
                    return false;
                  }

                  return true;
                }
              }, {
                key: "onGlobalPipelineStateChanged",
                value: function onGlobalPipelineStateChanged() {
                  for (var i = 0; i < this._cameras.length; i++) {
                    this._cameras[i].view.onGlobalPipelineStateChanged();
                  }

                  for (var _i = 0; _i < this._scenes.length; _i++) {
                    this._scenes[_i].onGlobalPipelineStateChanged();
                  }
                }
                /**
                 * @zh
                 * 激活指定窗口为当前窗口
                 * @param window GFX窗口
                 */

              }, {
                key: "activeWindow",
                value: function activeWindow(window) {
                  this._curWindow = window;
                }
                /**
                 * @zh
                 * 重置累计时间
                 */

              }, {
                key: "resetCumulativeTime",
                value: function resetCumulativeTime() {
                  this._time = 0;
                }
                /**
                 * @zh
                 * 每帧执行函数
                 * @param deltaTime 间隔时间
                 */

              }, {
                key: "frameMove",
                value: function frameMove(deltaTime) {
                  this._frameTime = deltaTime;
                  /*
                  if (this._fixedFPSFrameTime > 0) {
                       const elapsed = this._frameTime * 1000.0;
                      if (this._fixedFPSFrameTime > elapsed) {
                          // tslint:disable-next-line: only-arrow-functions
                          setTimeout(function () {}, this._fixedFPSFrameTime - elapsed);
                      }
                  }
                  */

                  ++this._frameCount;
                  this._time += this._frameTime;
                  this._fpsTime += this._frameTime;

                  if (this._fpsTime > 1.0) {
                    this._fps = this._frameCount;
                    this._frameCount = 0;
                    this._fpsTime = 0.0;
                  }

                  if (this._pipeline) {
                    this._device.acquire();

                    this._views.length = 0;
                    var cameras = this._cameras;
                    var stamp = legacyCC.director.getTotalFrames();

                    for (var i = 0; i < cameras.length; i++) {
                      var camera = this._cameras[i];
                      var view = camera.view;

                      if (view.isEnable && view.window) {
                        camera.update();
                        camera.scene.update(stamp);

                        this._views.push(view);
                      }
                    }

                    this._pipeline.render(this._views);

                    this._device.present();
                  }
                }
                /**
                 * @zh
                 * 创建窗口
                 * @param info GFX窗口描述信息
                 */

              }, {
                key: "createWindow",
                value: function createWindow(info) {
                  var window = this._createWindowFun(this);

                  window.initialize(this.device, info);

                  this._windows.push(window);

                  return window;
                }
                /**
                 * @zh
                 * 销毁指定的窗口
                 * @param window GFX窗口
                 */

              }, {
                key: "destroyWindow",
                value: function destroyWindow(window) {
                  for (var i = 0; i < this._windows.length; ++i) {
                    if (this._windows[i] === window) {
                      window.destroy();

                      this._windows.splice(i, 1);

                      return;
                    }
                  }
                }
                /**
                 * @zh
                 * 销毁全部窗口
                 */

              }, {
                key: "destroyWindows",
                value: function destroyWindows() {
                  for (var _iterator3 = _createForOfIteratorHelperLoose(this._windows), _step3; !(_step3 = _iterator3()).done;) {
                    var window = _step3.value;
                    window.destroy();
                  }

                  this._windows = [];
                }
                /**
                 * @zh
                 * 创建渲染场景
                 * @param info 渲染场景描述信息
                 */

              }, {
                key: "createScene",
                value: function createScene(info) {
                  var scene = this._createSceneFun(this);

                  scene.initialize(info);

                  this._scenes.push(scene);

                  return scene;
                }
                /**
                 * @zh
                 * 销毁指定的渲染场景
                 * @param scene 渲染场景
                 */

              }, {
                key: "destroyScene",
                value: function destroyScene(scene) {
                  for (var i = 0; i < this._scenes.length; ++i) {
                    if (this._scenes[i] === scene) {
                      scene.destroy();

                      this._scenes.splice(i, 1);

                      return;
                    }
                  }
                }
                /**
                 * @zh
                 * 销毁全部场景
                 */

              }, {
                key: "destroyScenes",
                value: function destroyScenes() {
                  for (var _iterator4 = _createForOfIteratorHelperLoose(this._scenes), _step4; !(_step4 = _iterator4()).done;) {
                    var scene = _step4.value;
                    scene.destroy();
                  }

                  this._scenes = [];
                }
                /**
                 * @zh
                 * 创建渲染视图
                 * @param info 渲染视图描述信息
                 */

              }, {
                key: "createView",
                value: function createView(info) {
                  var view = new RenderView();
                  view.initialize(info);
                  return view;
                }
                /**
                 * @zh
                 * 添加渲染相机
                 * @param camera 渲染相机
                 */

              }, {
                key: "attachCamera",
                value: function attachCamera(camera) {
                  for (var i = 0; i < this._cameras.length; i++) {
                    if (this._cameras[i] === camera) {
                      return;
                    }
                  }

                  this._cameras.push(camera);

                  this.sortViews();
                }
                /**
                 * @zh
                 * 移除渲染相机
                 * @param camera 相机
                 */

              }, {
                key: "detachCamera",
                value: function detachCamera(camera) {
                  for (var i = 0; i < this._cameras.length; ++i) {
                    if (this._cameras[i] === camera) {
                      this._cameras.splice(i, 1);

                      return;
                    }
                  }
                }
                /**
                 * @zh
                 * 销毁全部渲染相机
                 */

              }, {
                key: "clearCameras",
                value: function clearCameras() {
                  this._cameras.length = 0;
                }
              }, {
                key: "createModel",
                value: function createModel(mClass) {
                  var p = this._modelPools.get(mClass);

                  if (!p) {
                    this._modelPools.set(mClass, new Pool(function () {
                      return new mClass();
                    }, 10));

                    p = this._modelPools.get(mClass);
                  }

                  return p.alloc();
                }
              }, {
                key: "destroyModel",
                value: function destroyModel(m) {
                  var p = this._modelPools.get(m.constructor);

                  if (p) {
                    p.free(m);
                    m.destroy();

                    if (m.scene) {
                      m.scene.removeModel(m);
                    }
                  } else {
                    console.warn("'".concat(m.constructor.name, "'is not in the model pool and cannot be destroyed by destroyModel."));
                  }
                }
              }, {
                key: "createCamera",
                value: function createCamera() {
                  return this._cameraPool.alloc();
                }
              }, {
                key: "destroyCamera",
                value: function destroyCamera(c) {
                  this._cameraPool.free(c);

                  c.destroy();

                  if (c.scene) {
                    c.scene.removeCamera(c);
                  }

                  c.isWindowSize = true;
                }
              }, {
                key: "createLight",
                value: function createLight(lClass) {
                  var l = this._lightPools.get(lClass);

                  if (!l) {
                    this._lightPools.set(lClass, new Pool(function () {
                      return new lClass();
                    }, 4));

                    l = this._lightPools.get(lClass);
                  }

                  return l.alloc();
                }
              }, {
                key: "destroyLight",
                value: function destroyLight(l) {
                  var p = this._lightPools.get(l.constructor);

                  l.destroy();

                  if (p) {
                    p.free(l);

                    if (l.scene) {
                      switch (l.type) {
                        case LightType.SPHERE:
                          l.scene.removeSphereLight(l);
                          break;

                        case LightType.SPOT:
                          l.scene.removeSpotLight(l);
                          break;
                      }
                    }
                  }
                }
              }, {
                key: "sortViews",
                value: function sortViews() {
                  this._cameras.sort(function (a, b) {
                    return a.view.priority - b.view.priority;
                  });
                }
              }]);

              return Root;
            }();

            /**
             * @en
             * <p>
             *    ATTENTION: USE `director` INSTEAD OF `Director`.<br/>
             *    `director` is a singleton object which manage your game's logic flow.<br/>
             *    Since the `director` is a singleton, you don't need to call any constructor or create functions,<br/>
             *    the standard way to use it is by calling:<br/>
             *      - `director.methodName();` <br/>
             *
             *    It creates and handle the main Window and manages how and when to execute the Scenes.<br/>
             *    <br/>
             *    The `director` is also responsible for:<br/>
             *      - initializing the OpenGL context<br/>
             *      - setting the OpenGL pixel format (default on is RGB565)<br/>
             *      - setting the OpenGL buffer depth (default on is 0-bit)<br/>
             *      - setting the color for clear screen (default one is BLACK)<br/>
             *      - setting the projection (default one is 3D)<br/>
             *      - setting the orientation (default one is Portrait)<br/>
             *      <br/>
             *    <br/>
             *    The `director` also sets the default OpenGL context:<br/>
             *      - GL_TEXTURE_2D is enabled<br/>
             *      - GL_VERTEX_ARRAY is enabled<br/>
             *      - GL_COLOR_ARRAY is enabled<br/>
             *      - GL_TEXTURE_COORD_ARRAY is enabled<br/>
             * </p>
             * <p>
             *   `director` also synchronizes timers with the refresh rate of the display.<br/>
             *   Features and Limitations:<br/>
             *      - Scheduled timers & drawing are synchronizes with the refresh rate of the display<br/>
             *      - Only supports animation intervals of 1/60 1/30 & 1/15<br/>
             * </p>
             *
             * @zh
             * <p>
             *     注意：用 `director` 代替 `Director`。<br/>
             *     `director` 一个管理你的游戏的逻辑流程的单例对象。<br/>
             *     由于 `director` 是一个单例，你不需要调用任何构造函数或创建函数，<br/>
             *     使用它的标准方法是通过调用：<br/>
             *       - `director.methodName();`
             *     <br/>
             *     它创建和处理主窗口并且管理什么时候执行场景。<br/>
             *     <br/>
             *     `director` 还负责：<br/>
             *      - 初始化 OpenGL 环境。<br/>
             *      - 设置OpenGL像素格式。(默认是 RGB565)<br/>
             *      - 设置OpenGL缓冲区深度 (默认是 0-bit)<br/>
             *      - 设置空白场景的颜色 (默认是 黑色)<br/>
             *      - 设置投影 (默认是 3D)<br/>
             *      - 设置方向 (默认是 Portrait)<br/>
             *    <br/>
             *    `director` 设置了 OpenGL 默认环境 <br/>
             *      - GL_TEXTURE_2D   启用。<br/>
             *      - GL_VERTEX_ARRAY 启用。<br/>
             *      - GL_COLOR_ARRAY  启用。<br/>
             *      - GL_TEXTURE_COORD_ARRAY 启用。<br/>
             * </p>
             * <p>
             *   `director` 也同步定时器与显示器的刷新速率。
             *   <br/>
             *   特点和局限性: <br/>
             *      - 将计时器 & 渲染与显示器的刷新频率同步。<br/>
             *      - 只支持动画的间隔 1/60 1/30 & 1/15。<br/>
             * </p>
             */

            var Director = exports('D', /*#__PURE__*/function (_EventTarget) {
              _inherits(Director, _EventTarget);

              /**
               * @en The event which will be triggered when the singleton of Director initialized.
               * @zh Director 单例初始化时触发的事件
               * @event Director.EVENT_INIT
               */

              /**
               * @en The event which will be triggered when the singleton of Director initialized.
               * @zh Director 单例初始化时触发的事件
               */

              /**
               * @en The event which will be triggered when the singleton of Director reset.
               * @zh Director 单例重置时触发的事件
               * @event Director.EVENT_RESET
               */

              /**
               * @en The event which will be triggered when the singleton of Director reset.
               * @zh Director 单例重置时触发的事件
               */

              /**
               * @en The event which will be triggered before loading a new scene.
               * @zh 加载新场景之前所触发的事件。
               * @event Director.EVENT_BEFORE_SCENE_LOADING
               * @param {String} sceneName - The loading scene name
               */

              /**
               * @en The event which will be triggered before loading a new scene.
               * @zh 加载新场景之前所触发的事件。
               */

              /**
               * @en The event which will be triggered before launching a new scene.
               * @zh 运行新场景之前所触发的事件。
               * @event Director.EVENT_BEFORE_SCENE_LAUNCH
               * @param {String} sceneName - New scene which will be launched
               */

              /**
               * @en The event which will be triggered before launching a new scene.
               * @zh 运行新场景之前所触发的事件。
               */

              /**
               * @en The event which will be triggered after launching a new scene.
               * @zh 运行新场景之后所触发的事件。
               * @event Director.EVENT_AFTER_SCENE_LAUNCH
               * @param {String} sceneName - New scene which is launched
               */

              /**
               * @en The event which will be triggered after launching a new scene.
               * @zh 运行新场景之后所触发的事件。
               */

              /**
               * @en The event which will be triggered at the beginning of every frame.
               * @zh 每个帧的开始时所触发的事件。
               * @event Director.EVENT_BEFORE_UPDATE
               */

              /**
               * @en The event which will be triggered at the beginning of every frame.
               * @zh 每个帧的开始时所触发的事件。
               */

              /**
               * @en The event which will be triggered after engine and components update logic.
               * @zh 将在引擎和组件 “update” 逻辑之后所触发的事件。
               * @event Director.EVENT_AFTER_UPDATE
               */

              /**
               * @en The event which will be triggered after engine and components update logic.
               * @zh 将在引擎和组件 “update” 逻辑之后所触发的事件。
               */

              /**
               * @en The event which will be triggered before the rendering process.
               * @zh 渲染过程之前所触发的事件。
               * @event Director.EVENT_BEFORE_DRAW
               */

              /**
               * @en The event which will be triggered before the rendering process.
               * @zh 渲染过程之前所触发的事件。
               */

              /**
               * @en The event which will be triggered after the rendering process.
               * @zh 渲染过程之后所触发的事件。
               */

              /**
               * @en The event which will be triggered after the rendering process.
               * @zh 渲染过程之后所触发的事件。
               */

              /**
               * The event which will be triggered before the physics process.<br/>
               * 物理过程之前所触发的事件。
               */

              /**
               * The event which will be triggered after the physics process.<br/>
               * 物理过程之后所触发的事件。
               */
              function Director() {
                var _this;

                _classCallCheck(this, Director);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(Director).call(this));
                _this._compScheduler = void 0;
                _this._nodeActivator = void 0;
                _this._invalid = void 0;
                _this._paused = void 0;
                _this._purgeDirectorInNextLoop = void 0;
                _this._root = void 0;
                _this._loadingScene = void 0;
                _this._scene = void 0;
                _this._totalFrames = void 0;
                _this._lastUpdate = void 0;
                _this._deltaTime = void 0;
                _this._scheduler = void 0;
                _this._systems = void 0;
                _this._invalid = false; // paused?

                _this._paused = false; // purge?

                _this._purgeDirectorInNextLoop = false; // root

                _this._root = null; // scenes

                _this._loadingScene = '';
                _this._scene = null; // FPS

                _this._totalFrames = 0;
                _this._lastUpdate = 0;
                _this._deltaTime = 0.0; // Scheduler for user registration update

                _this._scheduler = new Scheduler(); // Scheduler for life-cycle methods in component

                _this._compScheduler = new ComponentScheduler(); // Node activator

                _this._nodeActivator = new NodeActivator();
                _this._systems = [];
                legacyCC.game.once(Game.EVENT_RENDERER_INITED, _this._initOnRendererInitialized, _assertThisInitialized(_this));
                return _this;
              }
              /**
               * @en Calculates delta time since last time it was called, the result is saved to an internal property.
               * @zh 计算从上一帧到现在的时间间隔，结果保存在私有属性中
               */


              _createClass(Director, [{
                key: "calculateDeltaTime",
                value: function calculateDeltaTime() {
                  var now = performance.now();
                  this._deltaTime = (now - this._lastUpdate) / 1000;

                  if ( this._deltaTime > 1) {
                    this._deltaTime = 1 / 60.0;
                  }

                  this._lastUpdate = now;
                }
                /**
                 * @en
                 * Converts a view coordinate to an WebGL coordinate<br/>
                 * Useful to convert (multi) touches coordinates to the current layout (portrait or landscape)<br/>
                 * Implementation can be found in directorWebGL.
                 * @zh 将触摸点的屏幕坐标转换为 WebGL View 下的坐标。
                 * @deprecated since v2.0
                 */

              }, {
                key: "convertToGL",
                value: function convertToGL(uiPoint) {
                  var container = legacyCC.game.container;
                  var view = legacyCC.view;
                  var box = container.getBoundingClientRect();
                  var left = box.left + window.pageXOffset - container.clientLeft;
                  var top = box.top + window.pageYOffset - container.clientTop;
                  var x = view._devicePixelRatio * (uiPoint.x - left);
                  var y = view._devicePixelRatio * (top + box.height - uiPoint.y);
                  return view._isRotated ? v2(view._viewportRect.width - y, x) : v2(x, y);
                }
                /**
                 * @en
                 * Converts an OpenGL coordinate to a view coordinate<br/>
                 * Useful to convert node points to window points for calls such as glScissor<br/>
                 * Implementation can be found in directorWebGL.
                 * @zh 将触摸点的 WebGL View 坐标转换为屏幕坐标。
                 * @deprecated since v2.0
                 */

              }, {
                key: "convertToUI",
                value: function convertToUI(glPoint) {
                  var container = legacyCC.game.container;
                  var view = legacyCC.view;
                  var box = container.getBoundingClientRect();
                  var left = box.left + window.pageXOffset - container.clientLeft;
                  var top = box.top + window.pageYOffset - container.clientTop;
                  var uiPoint = v2(0, 0);

                  if (view._isRotated) {
                    uiPoint.x = left + glPoint.y / view._devicePixelRatio;
                    uiPoint.y = top + box.height - (view._viewportRect.width - glPoint.x) / view._devicePixelRatio;
                  } else {
                    uiPoint.x = left + glPoint.x * view._devicePixelRatio;
                    uiPoint.y = top + box.height - glPoint.y * view._devicePixelRatio;
                  }

                  return uiPoint;
                }
                /**
                 * @en End the life of director in the next frame
                 * @zh 执行完当前帧后停止 director 的执行
                 */

              }, {
                key: "end",
                value: function end() {
                  this._purgeDirectorInNextLoop = true;
                }
                /**
                 * @en
                 * Returns the size of the WebGL view in points.<br/>
                 * It takes into account any possible rotation (device orientation) of the window.
                 * @zh 获取视图的大小，以点为单位。
                 * @deprecated since v2.0
                 */

              }, {
                key: "getWinSize",
                value: function getWinSize() {
                  return size(legacyCC.winSize);
                }
                /**
                 * @en
                 * Returns the size of the OpenGL view in pixels.<br/>
                 * It takes into account any possible rotation (device orientation) of the window.<br/>
                 * On Mac winSize and winSizeInPixels return the same value.
                 * (The pixel here refers to the resource resolution. If you want to get the physics resolution of device, you need to use `view.getFrameSize()`)
                 * @zh
                 * 获取视图大小，以像素为单位（这里的像素指的是资源分辨率。
                 * 如果要获取屏幕物理分辨率，需要用 `view.getFrameSize()`）
                 * @deprecated since v2.0
                 */

              }, {
                key: "getWinSizeInPixels",
                value: function getWinSizeInPixels() {
                  return size(legacyCC.winSize);
                }
                /**
                 * @en Pause the director's ticker, only involve the game logic execution.<br>
                 * It won't pause the rendering process nor the event manager.<br>
                 * If you want to pause the entire game including rendering, audio and event,<br>
                 * please use `game.pause`.
                 * @zh 暂停正在运行的场景，该暂停只会停止游戏逻辑执行，但是不会停止渲染和 UI 响应。<br>
                 * 如果想要更彻底得暂停游戏，包含渲染，音频和事件，请使用 `game.pause` 。
                 */

              }, {
                key: "pause",
                value: function pause() {
                  if (this._paused) {
                    return;
                  }

                  this._paused = true;
                }
                /**
                 * @en Removes cached all cocos2d cached data.
                 * @zh 删除cocos2d所有的缓存数据
                 * @deprecated since v2.0
                 */

              }, {
                key: "purgeCachedData",
                value: function purgeCachedData() {
                  legacyCC.loader.releaseAll();
                }
                /**
                 * @en Purge the `director` itself, including unschedule all schedule,<br>
                 * remove all event listeners, clean up and exit the running scene, stops all animations, clear cached data.
                 * @zh 清除 `director` 本身，包括停止所有的计时器，<br>
                 * 移除所有的事件监听器，清理并退出当前运行的场景，停止所有动画，清理缓存数据。
                 */

              }, {
                key: "purgeDirector",
                value: function purgeDirector() {
                  // cleanup scheduler
                  this._scheduler.unscheduleAll();

                  this._compScheduler.unscheduleAll();

                  this._nodeActivator.reset(); // Disable event dispatching


                  if (eventManager) {
                    eventManager.setEnabled(false);
                  }

                  {
                    if (legacyCC.isValid(this._scene)) {
                      this._scene.destroy();
                    }

                    this._scene = null;
                  }

                  this.stopAnimation(); // Clear all caches

                  legacyCC.loader.releaseAll();
                }
                /**
                 * @en Reset the director, can be used to restart the director after purge
                 * @zh 重置此 Director，可用于在清除后重启 Director。
                 */

              }, {
                key: "reset",
                value: function reset() {
                  this.purgeDirector();
                  this.emit(Director.EVENT_RESET);

                  if (eventManager) {
                    eventManager.setEnabled(true);
                  }

                  this.startAnimation();
                }
                /**
                 * @en
                 * Run a scene. Replaces the running scene with a new one or enter the first scene.<br>
                 * The new scene will be launched immediately.
                 * @zh 运行指定场景。将正在运行的场景替换为（或重入为）新场景。新场景将立即启动。
                 * @param scene - The need run scene.
                 * @param onBeforeLoadScene - The function invoked at the scene before loading.
                 * @param onLaunched - The function invoked at the scene after launch.
                 */

              }, {
                key: "runSceneImmediate",
                value: function runSceneImmediate(scene, onBeforeLoadScene, onLaunched) {
                  assertID(scene instanceof legacyCC.Scene, 1216);

                  var uuid = legacyCC.loader._getReferenceKey(scene.uuid); // Scene cannot be cached in loader, because it will be destroyed after switching.


                  legacyCC.loader.removeItem(uuid);

                  {
                    console.time('InitScene');
                  } // @ts-ignore


                  scene._load(); // ensure scene initialized


                  {
                    console.timeEnd('InitScene');
                  } // Re-attach or replace persist nodes


                  {
                    console.time('AttachPersist');
                  }

                  var persistNodeList = Object.keys(legacyCC.game._persistRootNodes).map(function (x) {
                    return legacyCC.game._persistRootNodes[x];
                  });

                  for (var i = 0; i < persistNodeList.length; i++) {
                    var node = persistNodeList[i];
                    node.emit(legacyCC.Node.SCENE_CHANGED_FOR_PERSISTS, scene.renderScene);
                    var existNode = scene.getChildByUuid(node.uuid);

                    if (existNode) {
                      // scene also contains the persist node, select the old one
                      var index = existNode.getSiblingIndex();

                      existNode._destroyImmediate();

                      scene.insertChild(node, index);
                    } else {
                      node.parent = scene;
                    }
                  }

                  {
                    console.timeEnd('AttachPersist');
                  }

                  var oldScene = this._scene;

                  {
                    // auto release assets
                    {
                      console.time('AutoRelease');
                    }

                    var autoReleaseAssets = oldScene && oldScene.autoReleaseAssets && oldScene.dependAssets;
                    autoRelease(autoReleaseAssets, scene.dependAssets, persistNodeList);

                    {
                      console.timeEnd('AutoRelease');
                    }
                  } // unload scene


                  {
                    console.time('Destroy');
                  }

                  if (legacyCC.isValid(oldScene)) {
                    oldScene.destroy();
                  }

                  this._scene = null; // purge destroyed nodes belongs to old scene

                  CCObject._deferredDestroy();

                  {
                    console.timeEnd('Destroy');
                  }

                  if (onBeforeLoadScene) {
                    onBeforeLoadScene();
                  }

                  this.emit(legacyCC.Director.EVENT_BEFORE_SCENE_LAUNCH, scene); // Run an Entity Scene

                  this._scene = scene;

                  {
                    console.time('Activate');
                  } // @ts-ignore


                  scene._activate();

                  {
                    console.timeEnd('Activate');
                  } // start scene


                  if (this._root) {
                    this._root.resetCumulativeTime();
                  }

                  this.startAnimation();

                  if (onLaunched) {
                    onLaunched(null, scene);
                  }

                  this.emit(legacyCC.Director.EVENT_AFTER_SCENE_LAUNCH, scene);
                }
                /**
                 * @en
                 * Run a scene. Replaces the running scene with a new one or enter the first scene.<br>
                 * The new scene will be launched at the end of the current frame.<br>
                 * @zh 运行指定场景。
                 * @param scene - The need run scene.
                 * @param onBeforeLoadScene - The function invoked at the scene before loading.
                 * @param onLaunched - The function invoked at the scene after launch.
                 * @private
                 */

              }, {
                key: "runScene",
                value: function runScene(scene, onBeforeLoadScene, onLaunched) {
                  var _this2 = this;

                  assertID(scene, 1205);
                  assertID(scene instanceof legacyCC.Scene, 1216); // ensure scene initialized
                  // @ts-ignore

                  scene._load(); // Delay run / replace scene to the end of the frame


                  this.once(legacyCC.Director.EVENT_AFTER_DRAW, function () {
                    _this2.runSceneImmediate(scene, onBeforeLoadScene, onLaunched);
                  });
                } //  @Scene loading section

              }, {
                key: "_getSceneUuid",
                value: function _getSceneUuid(key) {
                  var scenes = legacyCC.game._sceneInfos;

                  if (typeof key === 'string') {
                    if (!key.endsWith('.scene')) {
                      key += '.scene';
                    }

                    if (key[0] !== '/' && !key.startsWith('db://')) {
                      key = '/' + key; // 使用全名匹配
                    } // search scene
                    // tslint:disable-next-line: prefer-for-of


                    for (var i = 0; i < scenes.length; i++) {
                      var info = scenes[i];

                      if (info.url.endsWith(key)) {
                        return info;
                      }
                    }
                  } else if (typeof key === 'number') {
                    if (0 <= key && key < scenes.length) {
                      return scenes[key];
                    } else {
                      errorID(1206, key);
                    }
                  } else {
                    errorID(1207, key);
                  }

                  return null;
                }
                /**
                 * @en Loads the scene by its name.
                 * @zh 通过场景名称进行加载场景。
                 *
                 * @param sceneName - The name of the scene to load.
                 * @param onLaunched - callback, will be called after scene launched.
                 * @return if error, return false
                 */

              }, {
                key: "loadScene",
                value: function loadScene(sceneName, onLaunched, onUnloaded) {
                  if (this._loadingScene) {
                    errorID(1208, sceneName, this._loadingScene);
                    return false;
                  }

                  var info = this._getSceneUuid(sceneName);

                  if (info) {
                    var _uuid = info.uuid;
                    this.emit(legacyCC.Director.EVENT_BEFORE_SCENE_LOADING, sceneName);
                    this._loadingScene = sceneName;

                    this._loadSceneByUuid(_uuid, onLaunched, onUnloaded);

                    return true;
                  } else {
                    errorID(1209, sceneName);
                    return false;
                  }
                }
                /**
                 * @en
                 * Pre-loads the scene to reduces loading time. You can call this method at any time you want.<br>
                 * After calling this method, you still need to launch the scene by `director.loadScene`.<br>
                 * It will be totally fine to call `director.loadScene` at any time even if the preloading is not<br>
                 * yet finished, the scene will be launched after loaded automatically.
                 * @zh 预加载场景，你可以在任何时候调用这个方法。
                 * 调用完后，你仍然需要通过 `director.loadScene` 来启动场景，因为这个方法不会执行场景加载操作。<br>
                 * 就算预加载还没完成，你也可以直接调用 `director.loadScene`，加载完成后场景就会启动。
                 * @param sceneName 场景名称。
                 * @param onLoaded 加载回调。
                 */

              }, {
                key: "preloadScene",
                value: function preloadScene(sceneName, arg1, arg2) {
                  var onProgress;
                  var onLoaded;

                  if (arg2 === undefined) {
                    onLoaded = arg1;
                    onProgress = void 0;
                  } else {
                    onLoaded = arg2;
                    onProgress = arg1;
                  }

                  var info = this._getSceneUuid(sceneName);

                  if (info) {
                    this.emit(legacyCC.Director.EVENT_BEFORE_SCENE_LOADING, sceneName);
                    legacyCC.loader.load({
                      uuid: info.uuid,
                      type: 'uuid'
                    }, onProgress, function (err, asset) {
                      if (err) {
                        errorID(1210, sceneName, err.message);
                      }

                      if (onLoaded) {
                        onLoaded(err, asset);
                      }
                    });
                  } else {
                    var err = 'Can not preload the scene "' + sceneName + '" because it is not in the build settings.';

                    if (onLoaded) {
                      onLoaded(new Error(err));
                    }

                    error('preloadScene: ' + err);
                  }
                }
                /**
                 * @en Loads the scene by its uuid.
                 * @zh 通过 uuid 加载场景。
                 * @param uuid 场景资源的 uuid。
                 * @param doNotRun 仅加载和初始化场景，但并不运行。此参数仅在编辑器环境中生效。
                 * @private
                 */

              }, {
                key: "_loadSceneByUuid",
                value: function _loadSceneByUuid(uuid, arg1, arg2, arg3) {
                  var onLaunched;
                  var onUnloaded;

                  {
                    onLaunched = arg1;
                    onUnloaded = arg2;
                  } // legacyCC.AssetLibrary.unloadAsset(uuid);     // force reload


                  console.time('LoadScene ' + uuid);
                  legacyCC.AssetLibrary.loadAsset(uuid, function (err, sceneAsset) {
                    console.timeEnd('LoadScene ' + uuid);
                    var self = director;
                    self._loadingScene = '';

                    if (err) {
                      err = 'Failed to load scene: ' + err;
                      error(err);
                    } else {
                      if (sceneAsset instanceof legacyCC.SceneAsset) {
                        var _scene = sceneAsset.scene;
                        _scene._id = sceneAsset._uuid;
                        _scene._name = sceneAsset._name;

                        {
                          self.runSceneImmediate(_scene, onUnloaded, onLaunched);
                        }

                        return;
                      } else {
                        err = 'The asset ' + uuid + ' is not a scene';
                        error(err);
                      }
                    }

                    if (onLaunched) {
                      onLaunched(err);
                    }
                  });
                }
                /**
                 * @en Resume game logic execution after pause, if the current scene is not paused, nothing will happen.
                 * @zh 恢复暂停场景的游戏逻辑，如果当前场景没有暂停将没任何事情发生。
                 */

              }, {
                key: "resume",
                value: function resume() {
                  if (!this._paused) {
                    return;
                  }

                  this._lastUpdate = performance.now();

                  if (!this._lastUpdate) {
                    logID(1200);
                  }

                  this._paused = false;
                  this._deltaTime = 0;
                }
                /**
                 * @en
                 * Enables or disables WebGL depth test.<br>
                 * Implementation can be found in directorCanvas.js/directorWebGL.js
                 * @zh 启用/禁用深度测试（在 Canvas 渲染模式下不会生效）。
                 * @deprecated since v2.0
                 */

              }, {
                key: "setDepthTest",
                value: function setDepthTest(value) {
                  if (!legacyCC.Camera.main) {
                    return;
                  }

                  legacyCC.Camera.main.depth = !!value;
                }
                /**
                 * @en
                 * Set color for clear screen.<br>
                 * (Implementation can be found in directorCanvas.js/directorWebGL.js)
                 * @zh
                 * 设置场景的默认擦除颜色。<br>
                 * 支持全透明，但不支持透明度为中间值。要支持全透明需手工开启 `macro.ENABLE_TRANSPARENT_CANVAS`。
                 * @deprecated since v2.0
                 */

              }, {
                key: "setClearColor",
                value: function setClearColor(clearColor) {
                  if (!legacyCC.Camera.main) {
                    return;
                  }

                  legacyCC.Camera.main.backgroundColor = clearColor;
                }
              }, {
                key: "getRunningScene",

                /**
                 * @en Returns current logic Scene.
                 * @zh 获取当前逻辑场景。
                 * @deprecated Since v2.0.
                 */
                value: function getRunningScene() {
                  return this._scene;
                }
                /**
                 * @en Returns current logic Scene.
                 * @zh 获取当前逻辑场景。
                 * @example
                 * ```
                 * import { director } from 'cc';
                 * // This will help you to get the Canvas node in scene
                 * director.getScene().getChildByName('Canvas');
                 * ```
                 */

              }, {
                key: "getScene",
                value: function getScene() {
                  return this._scene;
                }
                /**
                 * @en Returns the FPS value. Please use [[Game.setFrameRate]] to control animation interval.
                 * @zh 获取单位帧执行时间。请使用 [[Game.setFrameRate]] 来控制游戏帧率。
                 * @deprecated since v2.0.
                 */

              }, {
                key: "getAnimationInterval",
                value: function getAnimationInterval() {
                  return 1000 / legacyCC.game.getFrameRate();
                }
                /**
                 * @en Sets animation interval, this doesn't control the main loop.<br>
                 * To control the game's frame rate overall, please use `game.setFrameRate`
                 * @zh 设置动画间隔，这不控制主循环。<br>
                 * 要控制游戏的帧速率，请使用 `game.setFrameRate`
                 * @deprecated since v2.0
                 * @param value - The animation interval desired.
                 */

              }, {
                key: "setAnimationInterval",
                value: function setAnimationInterval(value) {
                  legacyCC.game.setFrameRate(Math.round(1000 / value));
                }
                /**
                 * @en Returns the delta time since last frame.
                 * @zh 获取上一帧的增量时间。
                 */

              }, {
                key: "getDeltaTime",
                value: function getDeltaTime() {
                  return this._deltaTime;
                }
                /**
                 * @en Returns the current time.
                 * @zh 获取当前帧的时间。
                 */

              }, {
                key: "getCurrentTime",
                value: function getCurrentTime() {
                  return this._lastUpdate;
                }
                /**
                 * @en Returns how many frames were called since the director started.
                 * @zh 获取 director 启动以来游戏运行的总帧数。
                 */

              }, {
                key: "getTotalFrames",
                value: function getTotalFrames() {
                  return this._totalFrames;
                }
                /**
                 * @en Returns whether or not the Director is paused.
                 * @zh 是否处于暂停状态。
                 */

              }, {
                key: "isPaused",
                value: function isPaused() {
                  return this._paused;
                }
                /**
                 * @en Returns the scheduler associated with this director.
                 * @zh 获取和 director 相关联的调度器。
                 */

              }, {
                key: "getScheduler",
                value: function getScheduler() {
                  return this._scheduler;
                }
                /**
                 * @en Sets the scheduler associated with this director.
                 * @zh 设置和 director 相关联的调度器。
                 */

              }, {
                key: "setScheduler",
                value: function setScheduler(scheduler) {
                  if (this._scheduler !== scheduler) {
                    this.unregisterSystem(this._scheduler);
                    this._scheduler = scheduler;
                    this.registerSystem(Scheduler.ID, scheduler, 200);
                  }
                }
                /**
                 * @en Register a system.
                 * @zh 注册一个系统。
                 */

              }, {
                key: "registerSystem",
                value: function registerSystem(name, sys, priority) {
                  sys.id = name;
                  sys.priority = priority;
                  sys.init();

                  this._systems.push(sys);

                  this._systems.sort(System.sortByPriority);
                }
              }, {
                key: "unregisterSystem",
                value: function unregisterSystem(sys) {
                  array.fastRemove(this._systems, sys);

                  this._systems.sort(System.sortByPriority);
                }
                /**
                 * @en get a system.
                 * @zh 获取一个 system。
                 */

              }, {
                key: "getSystem",
                value: function getSystem(name) {
                  return this._systems.find(function (sys) {
                    return sys.id === name;
                  });
                }
                /**
                 * @en Returns the `AnimationManager` associated with this director. Please use getSystem(AnimationManager.ID)
                 * @zh 获取和 director 相关联的 `AnimationManager`（动画管理器）。请使用 getSystem(AnimationManager.ID) 来替代
                 * @deprecated
                 */

              }, {
                key: "getAnimationManager",
                value: function getAnimationManager() {
                  return this.getSystem(legacyCC.AnimationManager.ID);
                } // Loop management

                /**
                 * @en Starts Animation
                 * @zh 开始动画
                 */

              }, {
                key: "startAnimation",
                value: function startAnimation() {
                  this._invalid = false;
                  this._lastUpdate = performance.now();
                }
                /**
                 * @en Stops animation
                 * @zh 停止动画
                 */

              }, {
                key: "stopAnimation",
                value: function stopAnimation() {
                  this._invalid = true;
                }
                /**
                 * @en Run main loop of director
                 * @zh 运行主循环
                 */

              }, {
                key: "mainLoop",
                value: function mainLoop(time) {
                  if (this._purgeDirectorInNextLoop) {
                    this._purgeDirectorInNextLoop = false;
                    this.purgeDirector();
                  } else if (!this._invalid) {
                    // calculate "global" dt
                    this.calculateDeltaTime();
                    var dt = this._deltaTime; // Update

                    if (!this._paused) {
                      this.emit(Director.EVENT_BEFORE_UPDATE); // Call start for new added components

                      this._compScheduler.startPhase(); // Update for components


                      this._compScheduler.updatePhase(dt); // Update systems


                      for (var i = 0; i < this._systems.length; ++i) {
                        this._systems[i].update(dt);
                      } // Late update for components


                      this._compScheduler.lateUpdatePhase(dt); // User can use this event to do things after update


                      this.emit(Director.EVENT_AFTER_UPDATE); // Destroy entities that have been removed recently

                      CCObject._deferredDestroy(); // Post update systems


                      for (var _i = 0; _i < this._systems.length; ++_i) {
                        this._systems[_i].postUpdate(dt);
                      }
                    }

                    this.emit(Director.EVENT_BEFORE_DRAW);

                    this._root.frameMove(this._deltaTime);

                    this.emit(Director.EVENT_AFTER_DRAW);
                    eventManager.frameUpdateListeners();
                    Node.bookOfChange.clear();
                    this._totalFrames++;
                  }
                }
              }, {
                key: "_initOnRendererInitialized",
                value: function _initOnRendererInitialized() {
                  this._totalFrames = 0;
                  this._lastUpdate = performance.now();
                  this._paused = false;
                  this._purgeDirectorInNextLoop = false; // Event manager

                  if (eventManager) {
                    eventManager.setEnabled(true);
                  } // Scheduler
                  // TODO: have a solid organization of priority and expose to user


                  this.registerSystem(Scheduler.ID, this._scheduler, 200);
                  this.emit(Director.EVENT_INIT);
                }
              }, {
                key: "_init",
                value: function _init() {
                  legacyCC.loader.init(this);
                  this._root = new Root(legacyCC.game._gfxDevice);
                  var rootInfo = {};

                  if (!this._root.initialize(rootInfo)) {
                    errorID(1217);
                    return false;
                  }

                  return true;
                }
              }, {
                key: "root",
                get: function get() {
                  return this._root;
                }
              }]);

              return Director;
            }(EventTarget));
            Director.EVENT_INIT = 'director_init';
            Director.EVENT_RESET = 'director_reset';
            Director.EVENT_BEFORE_SCENE_LOADING = 'director_before_scene_loading';
            Director.EVENT_BEFORE_SCENE_LAUNCH = 'director_before_scene_launch';
            Director.EVENT_AFTER_SCENE_LAUNCH = 'director_after_scene_launch';
            Director.EVENT_BEFORE_UPDATE = 'director_before_update';
            Director.EVENT_AFTER_UPDATE = 'director_after_update';
            Director.EVENT_BEFORE_DRAW = 'director_before_draw';
            Director.EVENT_AFTER_DRAW = 'director_after_draw';
            Director.EVENT_BEFORE_PHYSICS = 'director_before_physics';
            Director.EVENT_AFTER_PHYSICS = 'director_after_physics';
            Director.instance = void 0;
            legacyCC.Director = Director;
            /**
             * 导演类。
             */

            var director = exports('d', Director.instance = legacyCC.director = new Director());

            var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;
            /**
             * @en
             * The EventHandle class sets the event callback in the scene.
             * This class allows the user to set the callback target node,target component name,component method name, and call the target method through the `emit` method.
             * @zh
             * “EventHandler” 类用来设置场景中的事件回调，该类允许用户设置回调目标节点，目标组件名，组件方法名，并可通过 emit 方法调用目标函数。
             *
             * @example
             * ```ts
             * import { Component } from 'cc';
             * const eventHandler = new Component.EventHandler();
             * eventHandler.target = newTarget;
             * eventHandler.component = "MainMenu";
             * eventHandler.handler = "OnClick";
             * eventHandler.customEventData = "my data";
             * ```
             */

            var EventHandler = exports('E', (_dec = ccclass('cc.ClickEvent'), _dec2 = type(legacyCC.Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function () {
              function EventHandler() {
                _classCallCheck(this, EventHandler);

                _initializerDefineProperty(this, "target", _descriptor, this);

                _initializerDefineProperty(this, "component", _descriptor2, this);

                _initializerDefineProperty(this, "_componentId", _descriptor3, this);

                _initializerDefineProperty(this, "handler", _descriptor4, this);

                _initializerDefineProperty(this, "customEventData", _descriptor5, this);
              }

              _createClass(EventHandler, [{
                key: "emit",

                /**
                 * @en Trigger the target callback with given arguments
                 * @zh 触发目标组件上的指定 handler 函数，可以选择传递参数。
                 * @param params - The arguments for invoking the callback
                 * @example
                 * ```ts
                 * import { Component } from 'cc';
                 * const eventHandler = new Component.EventHandler();
                 * eventHandler.target = newTarget;
                 * eventHandler.component = "MainMenu";
                 * eventHandler.handler = "OnClick"
                 * eventHandler.emit(["param1", "param2", ....]);
                 * ```
                 */
                value: function emit(params) {
                  var target = this.target;

                  if (!legacyCC.isValid(target)) {
                    return;
                  }

                  this._genCompIdIfNeeded();

                  var compType = legacyCC.js._getClassById(this._componentId);

                  var comp = target.getComponent(compType);

                  if (!legacyCC.isValid(comp)) {
                    return;
                  }

                  var handler = comp[this.handler];

                  if (typeof handler !== 'function') {
                    return;
                  }

                  if (this.customEventData != null && this.customEventData !== '') {
                    params = params.slice();
                    params.push(this.customEventData);
                  }

                  handler.apply(comp, params);
                }
              }, {
                key: "_compName2Id",
                value: function _compName2Id(compName) {
                  var comp = legacyCC.js.getClassByName(compName);
                  return legacyCC.js._getClassId(comp);
                }
              }, {
                key: "_compId2Name",
                value: function _compId2Name(compId) {
                  var comp = legacyCC.js._getClassById(compId);

                  return legacyCC.js.getClassName(comp);
                } // to be deprecated in the future

              }, {
                key: "_genCompIdIfNeeded",
                value: function _genCompIdIfNeeded() {
                  if (!this._componentId) {
                    this._componentName = this.component;
                    this.component = '';
                  }
                }
              }, {
                key: "_componentName",
                get: function get() {
                  this._genCompIdIfNeeded();

                  return this._compId2Name(this._componentId);
                },
                set: function set(value) {
                  this._componentId = this._compName2Id(value);
                }
                /**
                 * @en
                 * Dispatching component events.
                 * @zh
                 * 组件事件派发。
                 *
                 * @param events - The event list to be emitted
                 * @param args - The callback arguments
                 */

              }], [{
                key: "emitEvents",
                value: function emitEvents(events) {
                  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                  }

                  for (var i = 0, l = events.length; i < l; i++) {
                    var event = events[i];

                    if (!(event instanceof EventHandler)) {
                      continue;
                    }

                    event.emit(args);
                  }
                }
                /**
                 * @en Target node.
                 * @zh 目标节点。
                 */

              }]);

              return EventHandler;
            }(), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "component", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return '';
              }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_componentId", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return '';
              }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "handler", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return '';
              }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "customEventData", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return '';
              }
            })), _class2)) || _class));
            legacyCC.Component.EventHandler = EventHandler;

        }
    };
});
