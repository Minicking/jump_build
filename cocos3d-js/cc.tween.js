System.register(['./deprecated-4ec15e5e.js', './deprecated-b99c04b5.js', './index-caa5c4e5.js', './SubContextView-a8900bae.js', './component-event-handler-b65b5a5a.js'], function (exports) {
    'use strict';
    var _createClass, errorID, legacyCC, logID, CCObject, _classCallCheck, _inherits, _possibleConstructorReturn, _getPrototypeOf, warnID, _typeof, warn, RenderableComponent, macro, easing, director, Director, System;
    return {
        setters: [function (module) {
            _createClass = module.j;
            errorID = module.y;
            legacyCC = module.l;
            logID = module.v;
            CCObject = module.as;
            _classCallCheck = module.d;
            _inherits = module.b;
            _possibleConstructorReturn = module.e;
            _getPrototypeOf = module.f;
            warnID = module.x;
            _typeof = module.aY;
            warn = module.w;
        }, function (module) {
            RenderableComponent = module.d3;
            macro = module.b8;
        }, function (module) {
            easing = module.n;
        }, function () {}, function (module) {
            director = module.d;
            Director = module.D;
            System = module.a;
        }],
        execute: function () {

            exports({
                tween: tween,
                tweenUtil: tweenUtil
            });

            var ID_COUNTER = 0;
            /*
             * @class HashElement
             * @constructor
             * @private
             */

            var HashElement = function HashElement() {
              _classCallCheck(this, HashElement);

              this.actions = [];
              this.target = null;
              this.actionIndex = 0;
              this.currentAction = null;
              this.paused = false;
              this.lock = false;
            };
            /**
             * !#en
             * `ActionManager` is a class that can manage actions.<br/>
             * Normally you won't need to use this class directly. 99% of the cases you will use the CCNode interface,
             * which uses this class's singleton object.
             * But there are some cases where you might need to use this class. <br/>
             * Examples:<br/>
             * - When you want to run an action where the target is different from a CCNode.<br/>
             * - When you want to pause / resume the actions<br/>
             * !#zh
             * `ActionManager` 是可以管理动作的单例类。<br/>
             * 通常你并不需要直接使用这个类，99%的情况您将使用 CCNode 的接口。<br/>
             * 但也有一些情况下，您可能需要使用这个类。 <br/>
             * 例如：
             *  - 当你想要运行一个动作，但目标不是 CCNode 类型时。 <br/>
             *  - 当你想要暂停/恢复动作时。 <br/>
             * @class ActionManager
             * @example {@link cocos2d/core/CCActionManager/ActionManager.js}
             */


            var ActionManager = /*#__PURE__*/function () {
              function ActionManager() {
                _classCallCheck(this, ActionManager);

                this._hashTargets = new Map();
                this._arrayTargets = [];
                this._elementPool = [];
              }

              _createClass(ActionManager, [{
                key: "_searchElementByTarget",
                value: function _searchElementByTarget(arr, target) {
                  for (var k = 0; k < arr.length; k++) {
                    if (target === arr[k].target) return arr[k];
                  }

                  return null;
                }
              }, {
                key: "_getElement",
                value: function _getElement(target, paused) {
                  var element = this._elementPool.pop();

                  if (!element) {
                    element = new HashElement();
                  }

                  element.target = target;
                  element.paused = !!paused;
                  return element;
                }
              }, {
                key: "_putElement",
                value: function _putElement(element) {
                  element.actions.length = 0;
                  element.actionIndex = 0;
                  element.currentAction = null;
                  element.paused = false;
                  element.target = null;
                  element.lock = false;

                  this._elementPool.push(element);
                }
                /**
                 * !#en
                 * Adds an action with a target.<br/>
                 * If the target is already present, then the action will be added to the existing target.
                 * If the target is not present, a new instance of this target will be created either paused or not, and the action will be added to the newly created target.
                 * When the target is paused, the queued actions won't be 'ticked'.
                 * !#zh
                 * 增加一个动作，同时还需要提供动作的目标对象，目标对象是否暂停作为参数。<br/>
                 * 如果目标已存在，动作将会被直接添加到现有的节点中。<br/>
                 * 如果目标不存在，将为这一目标创建一个新的实例，并将动作添加进去。<br/>
                 * 当目标状态的 paused 为 true，动作将不会被执行
                 *
                 * @method addAction
                 * @param {Action} action
                 * @param {object} target
                 * @param {Boolean} paused
                 */

              }, {
                key: "addAction",
                value: function addAction(action, target, paused) {
                  if (!action || !target) {
                    errorID(1000);
                    return;
                  }

                  if (target.uuid == null) {
                    target.uuid = '_TWEEN_UUID_' + ID_COUNTER++;
                  } //check if the action target already exists


                  var element = this._hashTargets.get(target); //if doesn't exists, create a hashelement and push in mpTargets


                  if (!element) {
                    element = this._getElement(target, paused);

                    this._hashTargets.set(target, element);

                    this._arrayTargets.push(element);
                  } else if (!element.actions) {
                    element.actions = [];
                  } // update target due to the same UUID is allowed for different scenarios


                  element.target = target;
                  element.actions.push(action);
                  action.startWithTarget(target);
                }
                /**
                 * !#en Removes all actions from all the targets.
                 * !#zh 移除所有对象的所有动作。
                 * @method removeAllActions
                 */

              }, {
                key: "removeAllActions",
                value: function removeAllActions() {
                  var locTargets = this._arrayTargets;

                  for (var i = 0; i < locTargets.length; i++) {
                    var element = locTargets[i];
                    if (element) this._putElement(element);
                  }

                  this._arrayTargets.length = 0;
                  this._hashTargets = new Map();
                }
                /**
                 * !#en
                 * Removes all actions from a certain target. <br/>
                 * All the actions that belongs to the target will be removed.
                 * !#zh
                 * 移除指定对象上的所有动作。<br/>
                 * 属于该目标的所有的动作将被删除。
                 * @method removeAllActionsFromTarget
                 * @param {Node} target
                 */

              }, {
                key: "removeAllActionsFromTarget",
                value: function removeAllActionsFromTarget(target) {
                  // explicit null handling
                  if (target == null) return;

                  var element = this._hashTargets.get(target);

                  if (element) {
                    element.actions.length = 0;

                    this._deleteHashElement(element);
                  }
                }
                /**
                 * !#en Removes an action given an action reference.
                 * !#zh 移除指定的动作。
                 * @method removeAction
                 * @param {Action} action
                 */

              }, {
                key: "removeAction",
                value: function removeAction(action) {
                  // explicit null handling
                  if (action == null) return;
                  var target = action.getOriginalTarget();

                  var element = this._hashTargets.get(target);

                  if (element) {
                    for (var i = 0; i < element.actions.length; i++) {
                      if (element.actions[i] === action) {
                        element.actions.splice(i, 1); // update actionIndex in case we are in tick. looping over the actions

                        if (element.actionIndex >= i) element.actionIndex--;
                        break;
                      }
                    }
                  }
                }
              }, {
                key: "_removeActionByTag",
                value: function _removeActionByTag(tag, element, target) {
                  for (var i = 0, l = element.actions.length; i < l; ++i) {
                    var action = element.actions[i];

                    if (action && action.getTag() === tag) {
                      if (target && action.getOriginalTarget() !== target) {
                        continue;
                      }

                      this._removeActionAtIndex(i, element);

                      break;
                    }
                  }
                }
                /**
                 * !#en Removes an action given its tag and the target.
                 * !#zh 删除指定对象下特定标签的一个动作，将删除首个匹配到的动作。
                 * @method removeActionByTag
                 * @param {Number} tag
                 * @param {Node} target
                 */

              }, {
                key: "removeActionByTag",
                value: function removeActionByTag(tag, target) {
                  var _this = this;

                  if (tag === legacyCC.Action.TAG_INVALID) logID(1002);
                  var hashTargets = this._hashTargets;

                  if (target) {
                    var element = hashTargets.get(target);

                    if (element) {
                      this._removeActionByTag(tag, element, target);
                    }
                  } else {
                    hashTargets.forEach(function (element) {
                      _this._removeActionByTag(tag, element);
                    });
                  }
                }
                /**
                 * !#en Gets an action given its tag an a target.
                 * !#zh 通过目标对象和标签获取一个动作。
                 * @method getActionByTag
                 * @param {Number} tag
                 * @param {Node} target
                 * @return {Action|null}  return the Action with the given tag on success
                 */

              }, {
                key: "getActionByTag",
                value: function getActionByTag(tag, target) {
                  if (tag === legacyCC.Action.TAG_INVALID) logID(1004);

                  var element = this._hashTargets.get(target);

                  if (element) {
                    if (element.actions != null) {
                      for (var i = 0; i < element.actions.length; ++i) {
                        var action = element.actions[i];
                        if (action && action.getTag() === tag) return action;
                      }
                    }

                    logID(1005, tag);
                  }

                  return null;
                }
                /**
                 * !#en
                 * Returns the numbers of actions that are running in a certain target. <br/>
                 * Composable actions are counted as 1 action. <br/>
                 * Example: <br/>
                 * - If you are running 1 Sequence of 7 actions, it will return 1. <br/>
                 * - If you are running 7 Sequences of 2 actions, it will return 7.
                 * !#zh
                 * 返回指定对象下所有正在运行的动作数量。 <br/>
                 * 组合动作被算作一个动作。<br/>
                 * 例如：<br/>
                 *  - 如果您正在运行 7 个动作组成的序列动作（Sequence），这个函数将返回 1。<br/>
                 *  - 如果你正在运行 2 个序列动作（Sequence）和 5 个普通动作，这个函数将返回 7。<br/>
                 *
                 * @method getNumberOfRunningActionsInTarget
                 * @param {Node} target
                 * @return {Number}
                 */

              }, {
                key: "getNumberOfRunningActionsInTarget",
                value: function getNumberOfRunningActionsInTarget(target) {
                  var element = this._hashTargets.get(target);

                  if (element) return element.actions ? element.actions.length : 0;
                  return 0;
                }
                /**
                 * !#en Pauses the target: all running actions and newly added actions will be paused.
                 * !#zh 暂停指定对象：所有正在运行的动作和新添加的动作都将会暂停。
                 * @method pauseTarget
                 * @param {Node} target
                 */

              }, {
                key: "pauseTarget",
                value: function pauseTarget(target) {
                  var element = this._hashTargets.get(target);

                  if (element) element.paused = true;
                }
                /**
                 * !#en Resumes the target. All queued actions will be resumed.
                 * !#zh 让指定目标恢复运行。在执行序列中所有被暂停的动作将重新恢复运行。
                 * @method resumeTarget
                 * @param {Node} target
                 */

              }, {
                key: "resumeTarget",
                value: function resumeTarget(target) {
                  var element = this._hashTargets.get(target);

                  if (element) element.paused = false;
                }
                /**
                 * !#en Pauses all running actions, returning a list of targets whose actions were paused.
                 * !#zh 暂停所有正在运行的动作，返回一个包含了那些动作被暂停了的目标对象的列表。
                 * @method pauseAllRunningActions
                 * @return {Array}  a list of targets whose actions were paused.
                 */

              }, {
                key: "pauseAllRunningActions",
                value: function pauseAllRunningActions() {
                  var idsWithActions = [];
                  var locTargets = this._arrayTargets;

                  for (var i = 0; i < locTargets.length; i++) {
                    var element = locTargets[i];

                    if (element && !element.paused) {
                      element.paused = true;
                      idsWithActions.push(element.target);
                    }
                  }

                  return idsWithActions;
                }
                /**
                 * !#en Resume a set of targets (convenience function to reverse a pauseAllRunningActions or pauseTargets call).
                 * !#zh 让一组指定对象恢复运行（用来逆转 pauseAllRunningActions 效果的便捷函数）。
                 * @method resumeTargets
                 * @param {Array} targetsToResume
                 */

              }, {
                key: "resumeTargets",
                value: function resumeTargets(targetsToResume) {
                  if (!targetsToResume) return;

                  for (var i = 0; i < targetsToResume.length; i++) {
                    if (targetsToResume[i]) this.resumeTarget(targetsToResume[i]);
                  }
                }
                /**
                 * !#en Pause a set of targets.
                 * !#zh 暂停一组指定对象。
                 * @method pauseTargets
                 * @param {Array} targetsToPause
                 */

              }, {
                key: "pauseTargets",
                value: function pauseTargets(targetsToPause) {
                  if (!targetsToPause) return;

                  for (var i = 0; i < targetsToPause.length; i++) {
                    if (targetsToPause[i]) this.pauseTarget(targetsToPause[i]);
                  }
                }
                /**
                 * !#en
                 * purges the shared action manager. It releases the retained instance. <br/>
                 * because it uses this, so it can not be static.
                 * !#zh
                 * 清除共用的动作管理器。它释放了持有的实例。 <br/>
                 * 因为它使用 this，因此它不能是静态的。
                 * @method purgeSharedManager
                 */

              }, {
                key: "purgeSharedManager",
                value: function purgeSharedManager() {
                  legacyCC.director.getScheduler().unscheduleUpdate(this);
                } //protected

              }, {
                key: "_removeActionAtIndex",
                value: function _removeActionAtIndex(index, element) {
                  var action = element.actions[index];
                  element.actions.splice(index, 1); // update actionIndex in case we are in tick. looping over the actions

                  if (element.actionIndex >= index) element.actionIndex--;

                  if (element.actions.length === 0) {
                    this._deleteHashElement(element);
                  }
                }
              }, {
                key: "_deleteHashElement",
                value: function _deleteHashElement(element) {
                  var ret = false;

                  if (element && !element.lock) {
                    if (this._hashTargets.get(element.target)) {
                      this._hashTargets["delete"](element.target);

                      var targets = this._arrayTargets;

                      for (var i = 0, l = targets.length; i < l; i++) {
                        if (targets[i] === element) {
                          targets.splice(i, 1);
                          break;
                        }
                      }

                      this._putElement(element);

                      ret = true;
                    }
                  }

                  return ret;
                }
                /**
                 * !#en The ActionManager update。
                 * !#zh ActionManager 主循环。
                 * @method update
                 * @param {Number} dt delta time in seconds
                 */

              }, {
                key: "update",
                value: function update(dt) {
                  var locTargets = this._arrayTargets;
                  var locCurrTarget;

                  for (var elt = 0; elt < locTargets.length; elt++) {
                    this._currentTarget = locTargets[elt];
                    locCurrTarget = this._currentTarget;
                    var target = locCurrTarget.target;

                    if (target instanceof CCObject && !target.isValid) {
                      this.removeAllActionsFromTarget(target);
                      elt--;
                      continue;
                    }

                    if (!locCurrTarget.paused && locCurrTarget.actions) {
                      locCurrTarget.lock = true; // The 'actions' CCMutableArray may change while inside this loop.

                      for (locCurrTarget.actionIndex = 0; locCurrTarget.actionIndex < locCurrTarget.actions.length; locCurrTarget.actionIndex++) {
                        locCurrTarget.currentAction = locCurrTarget.actions[locCurrTarget.actionIndex];
                        if (!locCurrTarget.currentAction) continue; //use for speed

                        locCurrTarget.currentAction.step(dt * (locCurrTarget.currentAction._speedMethod ? locCurrTarget.currentAction._speed : 1));

                        if (locCurrTarget.currentAction && locCurrTarget.currentAction.isDone()) {
                          locCurrTarget.currentAction.stop();
                          var action = locCurrTarget.currentAction; // Make currentAction nil to prevent removeAction from salvaging it.

                          locCurrTarget.currentAction = null;
                          this.removeAction(action);
                        }

                        locCurrTarget.currentAction = null;
                      }

                      locCurrTarget.lock = false;
                    } // only delete currentTarget if no actions were scheduled during the cycle (issue #481)


                    if (locCurrTarget.actions.length === 0) {
                      this._deleteHashElement(locCurrTarget) && elt--;
                    }
                  }
                }
              }]);

              return ActionManager;
            }();

            /**
             * @en 
             * Tween system.
             * @zh
             * 缓动系统。
             */

            var TweenSystem = exports('TweenSystem', /*#__PURE__*/function (_System) {
              _inherits(TweenSystem, _System);

              function TweenSystem() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, TweenSystem);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TweenSystem)).call.apply(_getPrototypeOf2, [this].concat(args)));
                _this.actionMgr = new ActionManager();
                return _this;
              }

              _createClass(TweenSystem, [{
                key: "postUpdate",

                /**
                 * @en
                 * The postUpdate will auto execute after all compnents update and lateUpdate.
                 * @zh
                 * 此方法会在组件 lateUpdate 之后自动执行。
                 * @param dt 间隔时间
                 */
                value: function postUpdate(dt) {
                  {
                    this.actionMgr.update(dt);
                  }
                }
              }, {
                key: "ActionManager",

                /**
                 * @en
                 * Gets the action manager.
                 * @zh
                 * 获取动作管理器。
                 */
                get: function get() {
                  return this.actionMgr;
                }
              }]);

              return TweenSystem;
            }(System));
            TweenSystem.ID = 'TWEEN';
            TweenSystem.instance = void 0;
            director.on(Director.EVENT_INIT, function () {
              var sys = new TweenSystem();
              TweenSystem.instance = sys;
              director.registerSystem(TweenSystem.ID, sys, 100);
            });

            /**
             * !#en Base classAction for action classes.
             * !#zh Action 类是所有动作类型的基类。
             * @class Action
             */

            var Action = /*#__PURE__*/function () {
              function Action() {
                _classCallCheck(this, Action);

                this.originalTarget = null;
                this.target = null;
                this.tag = Action.TAG_INVALID;
              }

              _createClass(Action, [{
                key: "clone",

                /**
                 * !#en
                 * to copy object with deep copy.
                 * returns a clone of action.
                 * !#zh 返回一个克隆的动作。
                 * @method clone
                 * @return {Action}
                 */
                value: function clone() {
                  var action = new Action();
                  action.originalTarget = null;
                  action.target = null;
                  action.tag = this.tag;
                  return action;
                }
                /**
                 * !#en
                 * return true if the action has finished.
                 * !#zh 如果动作已完成就返回 true。
                 * @method isDone
                 * @return {Boolean}
                 */

              }, {
                key: "isDone",
                value: function isDone() {
                  return true;
                } // called before the action start. It will also set the target.

              }, {
                key: "startWithTarget",
                value: function startWithTarget(target) {
                  this.originalTarget = target;
                  this.target = target;
                } // called after the action has finished. It will set the 'target' to nil.

              }, {
                key: "stop",
                value: function stop() {
                  this.target = null;
                } // called every frame with it's delta time. <br />

              }, {
                key: "step",
                value: function step(dt) {
                  logID(1006);
                } // Called once per frame. Time is the number of seconds of a frame interval.

              }, {
                key: "update",
                value: function update(dt) {
                  logID(1007);
                }
                /**
                 * !#en get the target.
                 * !#zh 获取当前目标节点。
                 * @method getTarget
                 * @return {object}
                 */

              }, {
                key: "getTarget",
                value: function getTarget() {
                  return this.target;
                }
                /**
                 * !#en The action will modify the target properties.
                 * !#zh 设置目标节点。
                 * @method setTarget
                 * @param {object} target
                 */

              }, {
                key: "setTarget",
                value: function setTarget(target) {
                  this.target = target;
                }
                /**
                 * !#en get the original target.
                 * !#zh 获取原始目标节点。
                 * @method getOriginalTarget
                 * @return {object}
                 */

              }, {
                key: "getOriginalTarget",
                value: function getOriginalTarget() {
                  return this.originalTarget;
                } // Set the original target, since target can be nil.
                // Is the target that were used to run the action.
                // Unless you are doing something complex, like `ActionManager`, you should NOT call this method.

              }, {
                key: "setOriginalTarget",
                value: function setOriginalTarget(originalTarget) {
                  this.originalTarget = originalTarget;
                }
                /**
                 * !#en get tag number.
                 * !#zh 获取用于识别动作的标签。
                 * @method getTag
                 * @return {Number}
                 */

              }, {
                key: "getTag",
                value: function getTag() {
                  return this.tag;
                }
                /**
                 * !#en set tag number.
                 * !#zh 设置标签，用于识别动作。
                 * @method setTag
                 * @param {Number} tag
                 */

              }, {
                key: "setTag",
                value: function setTag(tag) {
                  this.tag = tag;
                }
                /**
                 * !#en
                 * Returns a reversed action. <br />
                 * For example: <br />
                 * - The action will be x coordinates of 0 move to 100. <br />
                 * - The reversed action will be x of 100 move to 0.
                 * - Will be rewritten
                 * !#zh 返回一个新的动作，执行与原动作完全相反的动作。
                 * @method reverse
                 * @return {Action | null}
                 */

              }, {
                key: "reverse",
                value: function reverse() {
                  logID(1008);
                  return null;
                } // Currently JavaScript Bindigns (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
                // and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
                // This is a hack, and should be removed once JSB fixes the retain/release bug.

              }, {
                key: "retain",
                value: function retain() {} // Currently JavaScript Bindigns (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
                // and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
                // This is a hack, and should be removed once JSB fixes the retain/release bug.

              }, {
                key: "release",
                value: function release() {}
              }]);

              return Action;
            }();
            /**
             * !#en
             * Base class actions that do have a finite time duration. <br/>
             * Possible actions: <br/>
             * - An action with a duration of 0 seconds. <br/>
             * - An action with a duration of 35.5 seconds.
             *
             * Infinite time actions are valid
             * !#zh 有限时间动作，这种动作拥有时长 duration 属性。
             * @class FiniteTimeAction
             * @extends Action
             */

            Action.TAG_INVALID = -1;
            var FiniteTimeAction = /*#__PURE__*/function (_Action) {
              _inherits(FiniteTimeAction, _Action);

              function FiniteTimeAction() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, FiniteTimeAction);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FiniteTimeAction)).call.apply(_getPrototypeOf2, [this].concat(args)));
                _this._duration = 0;
                _this._timesForRepeat = 1;
                return _this;
              }

              _createClass(FiniteTimeAction, [{
                key: "getDuration",

                /**
                 * !#en get duration of the action. (seconds).
                 * !#zh 获取动作以秒为单位的持续时间。
                 * @method getDuration
                 * @return {Number}
                 */
                value: function getDuration() {
                  return this._duration * (this._timesForRepeat || 1);
                }
                /**
                 * !#en set duration of the action. (seconds).
                 * !#zh 设置动作以秒为单位的持续时间。
                 * @method setDuration
                 * @param {Number} duration
                 */

              }, {
                key: "setDuration",
                value: function setDuration(duration) {
                  this._duration = duration;
                }
                /**
                 * !#en
                 * to copy object with deep copy.
                 * returns a clone of action.
                 * !#zh 返回一个克隆的动作。
                 * @method clone
                 * @return {FiniteTimeAction}
                 */

              }, {
                key: "clone",
                value: function clone() {
                  return new FiniteTimeAction();
                }
              }]);

              return FiniteTimeAction;
            }(Action);

            /**
             * !#en Instant actions are immediate actions. They don't have a duration like the ActionInterval actions.
             * !#zh 即时动作，这种动作立即就会执行，继承自 FiniteTimeAction。
             * @class ActionInstant
             * @extends FiniteTimeAction
             */

            var ActionInstant = /*#__PURE__*/function (_FiniteTimeAction) {
              _inherits(ActionInstant, _FiniteTimeAction);

              function ActionInstant() {
                _classCallCheck(this, ActionInstant);

                return _possibleConstructorReturn(this, _getPrototypeOf(ActionInstant).apply(this, arguments));
              }

              _createClass(ActionInstant, [{
                key: "isDone",
                value: function isDone() {
                  return true;
                }
              }, {
                key: "step",
                value: function step(dt) {
                  this.update(1);
                }
              }, {
                key: "update",
                value: function update(dt) {} //nothing

                /**
                 * returns a reversed action. <br />
                 * For example: <br />
                 * - The action is x coordinates of 0 move to 100. <br />
                 * - The reversed action will be x of 100 move to 0.
                 * @returns {Action}
                 */

              }, {
                key: "reverse",
                value: function reverse() {
                  return this.clone();
                }
              }, {
                key: "clone",
                value: function clone() {
                  return new ActionInstant();
                }
              }]);

              return ActionInstant;
            }(FiniteTimeAction);
            /*
             * Show the node.
             * @class Show
             * @extends ActionInstant
             */

            var Show = /*#__PURE__*/function (_ActionInstant) {
              _inherits(Show, _ActionInstant);

              function Show() {
                _classCallCheck(this, Show);

                return _possibleConstructorReturn(this, _getPrototypeOf(Show).apply(this, arguments));
              }

              _createClass(Show, [{
                key: "update",
                value: function update(dt) {
                  var _renderComps = this.target.getComponentsInChildren(RenderableComponent);

                  for (var i = 0; i < _renderComps.length; ++i) {
                    var render = _renderComps[i];
                    render.enabled = true;
                  }
                }
              }, {
                key: "reverse",
                value: function reverse() {
                  return new Hide();
                }
              }, {
                key: "clone",
                value: function clone() {
                  return new Show();
                }
              }]);

              return Show;
            }(ActionInstant);
            /**
             * !#en Show the Node.
             * !#zh 立即显示。
             * @method show
             * @return {ActionInstant}
             * @example
             * // example
             * var showAction = show();
             */

            function show() {
              return new Show();
            }
            /*
             * Hide the node.
             * @class Hide
             * @extends ActionInstant
             */

            var Hide = /*#__PURE__*/function (_ActionInstant2) {
              _inherits(Hide, _ActionInstant2);

              function Hide() {
                _classCallCheck(this, Hide);

                return _possibleConstructorReturn(this, _getPrototypeOf(Hide).apply(this, arguments));
              }

              _createClass(Hide, [{
                key: "update",
                value: function update(dt) {
                  var _renderComps = this.target.getComponentsInChildren(RenderableComponent);

                  for (var i = 0; i < _renderComps.length; ++i) {
                    var render = _renderComps[i];
                    render.enabled = false;
                  }
                }
              }, {
                key: "reverse",
                value: function reverse() {
                  return new Show();
                }
              }, {
                key: "clone",
                value: function clone() {
                  return new Hide();
                }
              }]);

              return Hide;
            }(ActionInstant);
            /**
             * !#en Hide the node.
             * !#zh 立即隐藏。
             * @method hide
             * @return {ActionInstant}
             * @example
             * // example
             * var hideAction = hide();
             */

            function hide() {
              return new Hide();
            }
            /*
             * Delete self in the next frame.
             * @class RemoveSelf
             * @extends ActionInstant
             * @param {Boolean} [isNeedCleanUp=true]
             *
             * @example
             * // example
             * var removeSelfAction = new RemoveSelf(false);
             */

            var RemoveSelf = /*#__PURE__*/function (_ActionInstant4) {
              _inherits(RemoveSelf, _ActionInstant4);

              function RemoveSelf(isNeedCleanUp) {
                var _this;

                _classCallCheck(this, RemoveSelf);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(RemoveSelf).call(this));
                _this._isNeedCleanUp = true;
                isNeedCleanUp !== undefined && _this.init(isNeedCleanUp);
                return _this;
              }

              _createClass(RemoveSelf, [{
                key: "update",
                value: function update(dt) {
                  this.target.removeFromParent();

                  if (this._isNeedCleanUp) {
                    this.target.destroy();
                  }
                }
              }, {
                key: "init",
                value: function init(isNeedCleanUp) {
                  this._isNeedCleanUp = isNeedCleanUp;
                  return true;
                }
              }, {
                key: "reverse",
                value: function reverse() {
                  return new RemoveSelf(this._isNeedCleanUp);
                }
              }, {
                key: "clone",
                value: function clone() {
                  return new RemoveSelf(this._isNeedCleanUp);
                }
              }]);

              return RemoveSelf;
            }(ActionInstant);
            /**
             * !#en Create a RemoveSelf object with a flag indicate whether the target should be cleaned up while removing.
             * !#zh 从父节点移除自身。
             * @method removeSelf
             * @param {Boolean} [isNeedCleanUp = true]
             * @return {ActionInstant}
             *
             * @example
             * // example
             * var removeSelfAction = removeSelf();
             */

            function removeSelf(isNeedCleanUp) {
              return new RemoveSelf(isNeedCleanUp);
            }
            /*
             * Calls a 'callback'.
             * @class CallFunc
             * @extends ActionInstant
             * @param {function} selector
             * @param {object} [selectorTarget=null]
             * @param {*} [data=null] data for function, it accepts all data types.
             * @example
             * // example
             * // CallFunc without data
             * var finish = new CallFunc(this.removeSprite, this);
             *
             * // CallFunc with data
             * var finish = new CallFunc(this.removeFromParentAndCleanup, this,  true);
             */

            var CallFunc = /*#__PURE__*/function (_ActionInstant5) {
              _inherits(CallFunc, _ActionInstant5);

              /*
               * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
              * Creates a CallFunc action with the callback.
              * @param {function} selector
              * @param {object} [selectorTarget=null]
              * @param {*} [data=null] data for function, it accepts all data types.
              */
              function CallFunc(selector, selectorTarget, data) {
                var _this2;

                _classCallCheck(this, CallFunc);

                _this2 = _possibleConstructorReturn(this, _getPrototypeOf(CallFunc).call(this));
                _this2._selectorTarget = null;
                _this2._function = null;
                _this2._data = null;

                _this2.initWithFunction(selector, selectorTarget, data);

                return _this2;
              }
              /*
               * Initializes the action with a function or function and its target
               * @param {function} selector
               * @param {object|Null} selectorTarget
               * @param {*|Null} [data] data for function, it accepts all data types.
               * @return {Boolean}
               */


              _createClass(CallFunc, [{
                key: "initWithFunction",
                value: function initWithFunction(selector, selectorTarget, data) {
                  if (selector) {
                    this._function = selector;
                  }

                  if (selectorTarget) {
                    this._selectorTarget = selectorTarget;
                  }

                  if (data !== undefined) {
                    this._data = data;
                  }

                  return true;
                }
                /*
                 * execute the function.
                 */

              }, {
                key: "execute",
                value: function execute() {
                  if (this._function) {
                    this._function.call(this._selectorTarget, this.target, this._data);
                  }
                }
              }, {
                key: "update",
                value: function update(dt) {
                  this.execute();
                }
                /*
                 * Get selectorTarget.
                 * @return {object}
                 */

              }, {
                key: "getTargetCallback",
                value: function getTargetCallback() {
                  return this._selectorTarget;
                }
                /*
                 * Set selectorTarget.
                 * @param {object} sel
                 */

              }, {
                key: "setTargetCallback",
                value: function setTargetCallback(sel) {
                  if (sel !== this._selectorTarget) {
                    if (this._selectorTarget) this._selectorTarget = null;
                    this._selectorTarget = sel;
                  }
                }
              }, {
                key: "clone",
                value: function clone() {
                  var action = new CallFunc();
                  action.initWithFunction(this._function, this._selectorTarget, this._data);
                  return action;
                }
              }]);

              return CallFunc;
            }(ActionInstant);
            /**
             * !#en Creates the action with the callback.
             * !#zh 执行回调函数。
             * @method callFunc
             * @param {function} selector
             * @param {object} [selectorTarget=null]
             * @param {*} [data=null] - data for function, it accepts all data types.
             * @return {ActionInstant}
             * @example
             * // example
             * // CallFunc without data
             * var finish = callFunc(this.removeSprite, this);
             *
             * // CallFunc with data
             * var finish = callFunc(this.removeFromParentAndCleanup, this._grossini,  true);
             */

            function callFunc(selector, selectorTarget, data) {
              return new CallFunc(selector, selectorTarget, data);
            }

            /**
             * !#en
             * <p> An interval action is an action that takes place within a certain period of time. <br/>
             * It has an start time, and a finish time. The finish time is the parameter<br/>
             * duration plus the start time.</p>
             *
             * <p>These CCActionInterval actions have some interesting properties, like:<br/>
             * - They can run normally (default)  <br/>
             * - They can run reversed with the reverse method   <br/>
             * - They can run with the time altered with the Accelerate, AccelDeccel and Speed actions. </p>
             *
             * <p>For example, you can simulate a Ping Pong effect running the action normally and<br/>
             * then running it again in Reverse mode. </p>
             * !#zh 时间间隔动作，这种动作在已定时间内完成，继承 FiniteTimeAction。
             * @class ActionInterval
             * @extends FiniteTimeAction
             * @param {Number} d duration in seconds
             */

            var ActionInterval = /*#__PURE__*/function (_FiniteTimeAction) {
              _inherits(ActionInterval, _FiniteTimeAction);

              //Compatible with repeat class, Discard after can be deleted
              //Compatible with repeat class, Discard after can be deleted
              function ActionInterval(d) {
                var _this;

                _classCallCheck(this, ActionInterval);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(ActionInterval).call(this));
                _this.MAX_VALUE = 2;
                _this._elapsed = 0;
                _this._firstTick = false;
                _this._easeList = [];
                _this._speed = 1;
                _this._repeatForever = false;
                _this._repeatMethod = false;
                _this._speedMethod = false;

                if (d !== undefined && !isNaN(d)) {
                  _this.initWithDuration(d);
                }

                return _this;
              }
              /*
               * How many seconds had elapsed since the actions started to run.
               * @return {Number}
               */


              _createClass(ActionInterval, [{
                key: "getElapsed",
                value: function getElapsed() {
                  return this._elapsed;
                }
                /*
                 * Initializes the action.
                 * @param {Number} d duration in seconds
                 * @return {Boolean}
                 */

              }, {
                key: "initWithDuration",
                value: function initWithDuration(d) {
                  this._duration = d === 0 ? macro.FLT_EPSILON : d; // prevent division by 0
                  // This comparison could be in step:, but it might decrease the performance
                  // by 3% in heavy based action games.

                  this._elapsed = 0;
                  this._firstTick = true;
                  return true;
                }
              }, {
                key: "isDone",
                value: function isDone() {
                  return this._elapsed >= this._duration;
                }
              }, {
                key: "_cloneDecoration",
                value: function _cloneDecoration(action) {
                  action._repeatForever = this._repeatForever;
                  action._speed = this._speed;
                  action._timesForRepeat = this._timesForRepeat;
                  action._easeList = this._easeList;
                  action._speedMethod = this._speedMethod;
                  action._repeatMethod = this._repeatMethod;
                }
              }, {
                key: "_reverseEaseList",
                value: function _reverseEaseList(action) {
                  if (this._easeList) {
                    action._easeList = [];

                    for (var i = 0; i < this._easeList.length; i++) {
                      action._easeList.push(this._easeList[i]);
                    }
                  }
                }
              }, {
                key: "clone",
                value: function clone() {
                  var action = new ActionInterval(this._duration);

                  this._cloneDecoration(action);

                  return action;
                }
                /**
                 * !#en Implementation of ease motion.
                 * !#zh 缓动运动。
                 * @method easing
                 * @param {Object} easeObj
                 * @returns {ActionInterval}
                 * @example
                 * import { easeIn } from 'cc';
                 * action.easing(easeIn(3.0));
                 */

              }, {
                key: "easing",
                value: function easing(easeObj) {
                  if (this._easeList) this._easeList.length = 0;else this._easeList = [];

                  for (var i = 0; i < arguments.length; i++) {
                    this._easeList.push(arguments[i]);
                  }

                  return this;
                }
              }, {
                key: "_computeEaseTime",
                value: function _computeEaseTime(dt) {
                  // var locList = this._easeList;
                  // if ((!locList) || (locList.length === 0))
                  //     return dt;
                  // for (var i = 0, n = locList.length; i < n; i++)
                  //     dt = locList[i].easing(dt);
                  return dt;
                }
              }, {
                key: "step",
                value: function step(dt) {
                  if (this._firstTick) {
                    this._firstTick = false;
                    this._elapsed = 0;
                  } else this._elapsed += dt; //this.update((1 > (this._elapsed / this._duration)) ? this._elapsed / this._duration : 1);
                  //this.update(Math.max(0, Math.min(1, this._elapsed / Math.max(this._duration, cc.macro.FLT_EPSILON))));


                  var t = this._elapsed / (this._duration > 0.0000001192092896 ? this._duration : 0.0000001192092896);
                  t = 1 > t ? t : 1;
                  this.update(t > 0 ? t : 0); //Compatible with repeat class, Discard after can be deleted (this._repeatMethod)

                  if (this._repeatMethod && this._timesForRepeat > 1 && this.isDone()) {
                    if (!this._repeatForever) {
                      this._timesForRepeat--;
                    } //var diff = locInnerAction.getElapsed() - locInnerAction._duration;


                    this.startWithTarget(this.target); // to prevent jerk. issue #390 ,1247
                    //this._innerAction.step(0);
                    //this._innerAction.step(diff);

                    this.step(this._elapsed - this._duration);
                  }
                }
              }, {
                key: "startWithTarget",
                value: function startWithTarget(target) {
                  Action.prototype.startWithTarget.call(this, target);
                  this._elapsed = 0;
                  this._firstTick = true;
                }
              }, {
                key: "reverse",
                value: function reverse() {
                  logID(1010);
                  return this;
                }
                /*
                 * Set amplitude rate.
                 * @warning It should be overridden in subclass.
                 * @param {Number} amp
                 */

              }, {
                key: "setAmplitudeRate",
                value: function setAmplitudeRate(amp) {
                  // Abstract class needs implementation
                  logID(1011);
                }
                /*
                 * Get amplitude rate.
                 * @warning It should be overridden in subclass.
                 * @return {Number} 0
                 */

              }, {
                key: "getAmplitudeRate",
                value: function getAmplitudeRate() {
                  // Abstract class needs implementation
                  logID(1012);
                  return 0;
                }
                /**
                 * !#en
                 * Changes the speed of an action, making it take longer (speed>1)
                 * or less (speed<1) time. <br/>
                 * Useful to simulate 'slow motion' or 'fast forward' effect.
                 * !#zh
                 * 改变一个动作的速度，使它的执行使用更长的时间（speed > 1）<br/>
                 * 或更少（speed < 1）可以有效得模拟“慢动作”或“快进”的效果。
                 * @param {Number} speed
                 * @returns {Action}
                 */

              }, {
                key: "speed",
                value: function speed(_speed) {
                  if (_speed <= 0) {
                    logID(1013);
                    return this;
                  }

                  this._speedMethod = true; //Compatible with repeat class, Discard after can be deleted

                  this._speed *= _speed;
                  return this;
                }
                /**
                 * Get this action speed.
                 * @return {Number}
                 */

              }, {
                key: "getSpeed",
                value: function getSpeed() {
                  return this._speed;
                }
                /**
                 * Set this action speed.
                 * @param {Number} speed
                 * @returns {ActionInterval}
                 */

              }, {
                key: "setSpeed",
                value: function setSpeed(speed) {
                  this._speed = speed;
                  return this;
                }
                /**
                 * !#en
                 * Repeats an action a number of times.
                 * To repeat an action forever use the CCRepeatForever action.
                 * !#zh 重复动作可以按一定次数重复一个动作，使用 RepeatForever 动作来永远重复一个动作。
                 * @method repeat
                 * @param {Number} times
                 * @returns {ActionInterval}
                 */

              }, {
                key: "repeat",
                value: function repeat(times) {
                  times = Math.round(times);

                  if (isNaN(times) || times < 1) {
                    logID(1014);
                    return this;
                  }

                  this._repeatMethod = true; //Compatible with repeat class, Discard after can be deleted

                  this._timesForRepeat *= times;
                  return this;
                }
                /**
                 * !#en
                 * Repeats an action for ever.  <br/>
                 * To repeat the an action for a limited number of times use the Repeat action. <br/>
                 * !#zh 永远地重复一个动作，有限次数内重复一个动作请使用 Repeat 动作。
                 * @method repeatForever
                 * @returns {ActionInterval}
                 */

              }, {
                key: "repeatForever",
                value: function repeatForever() {
                  this._repeatMethod = true; //Compatible with repeat class, Discard after can be deleted

                  this._timesForRepeat = this.MAX_VALUE;
                  this._repeatForever = true;
                  return this;
                }
              }]);

              return ActionInterval;
            }(FiniteTimeAction);
            /*
             * Runs actions sequentially, one after another.
             */

            var Sequence = /*#__PURE__*/function (_ActionInterval) {
              _inherits(Sequence, _ActionInterval);

              function Sequence(tempArray) {
                var _this2;

                _classCallCheck(this, Sequence);

                _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Sequence).call(this));
                _this2._actions = [];
                _this2._split = 0;
                _this2._last = 0;
                _this2._reversed = false;
                var paramArray = tempArray instanceof Array ? tempArray : arguments;

                if (paramArray.length === 1) {
                  errorID(1019);
                  return _possibleConstructorReturn(_this2);
                }

                var last = paramArray.length - 1;
                if (last >= 0 && paramArray[last] == null) logID(1015);

                if (last >= 0) {
                  var prev = paramArray[0],
                      action1;

                  for (var i = 1; i < last; i++) {
                    if (paramArray[i]) {
                      action1 = prev;
                      prev = Sequence._actionOneTwo(action1, paramArray[i]);
                    }
                  }

                  _this2.initWithTwoActions(prev, paramArray[last]);
                }

                return _this2;
              }
              /*
               * Initializes the action <br/>
               * @param {FiniteTimeAction} actionOne
               * @param {FiniteTimeAction} actionTwo
               * @return {Boolean}
               */


              _createClass(Sequence, [{
                key: "initWithTwoActions",
                value: function initWithTwoActions(actionOne, actionTwo) {
                  if (!actionOne || !actionTwo) {
                    errorID(1025);
                    return false;
                  }

                  var durationOne = actionOne._duration,
                      durationTwo = actionTwo._duration;
                  durationOne *= actionOne._repeatMethod ? actionOne._timesForRepeat : 1;
                  durationTwo *= actionTwo._repeatMethod ? actionTwo._timesForRepeat : 1;
                  var d = durationOne + durationTwo;
                  this.initWithDuration(d);
                  this._actions[0] = actionOne;
                  this._actions[1] = actionTwo;
                  return true;
                }
              }, {
                key: "clone",
                value: function clone() {
                  var action = new Sequence();

                  this._cloneDecoration(action);

                  action.initWithTwoActions(this._actions[0].clone(), this._actions[1].clone());
                  return action;
                }
              }, {
                key: "startWithTarget",
                value: function startWithTarget(target) {
                  ActionInterval.prototype.startWithTarget.call(this, target);
                  this._split = this._actions[0]._duration / this._duration;
                  this._split *= this._actions[0]._repeatMethod ? this._actions[0]._timesForRepeat : 1;
                  this._last = -1;
                }
              }, {
                key: "stop",
                value: function stop() {
                  // Issue #1305
                  if (this._last !== -1) this._actions[this._last].stop();
                  Action.prototype.stop.call(this);
                }
              }, {
                key: "update",
                value: function update(dt) {
                  var new_t,
                      found = 0;
                  var locSplit = this._split;
                  var locActions = this._actions;
                  var locLast = this._last;
                  var actionFound;
                  dt = this._computeEaseTime(dt);

                  if (dt < locSplit) {
                    // action[0]
                    new_t = locSplit !== 0 ? dt / locSplit : 1;

                    if (found === 0 && locLast === 1 && this._reversed) {
                      // Reverse mode ?
                      // XXX: Bug. this case doesn't contemplate when _last==-1, found=0 and in "reverse mode"
                      // since it will require a hack to know if an action is on reverse mode or not.
                      // "step" should be overriden, and the "reverseMode" value propagated to inner Sequences.
                      locActions[1].update(0);
                      locActions[1].stop();
                    }
                  } else {
                    // action[1]
                    found = 1;
                    new_t = locSplit === 1 ? 1 : (dt - locSplit) / (1 - locSplit);

                    if (locLast === -1) {
                      // action[0] was skipped, execute it.
                      locActions[0].startWithTarget(this.target);
                      locActions[0].update(1);
                      locActions[0].stop();
                    }

                    if (locLast === 0) {
                      // switching to action 1. stop action 0.
                      locActions[0].update(1);
                      locActions[0].stop();
                    }
                  }

                  actionFound = locActions[found]; // Last action found and it is done.

                  if (locLast === found && actionFound.isDone()) return; // Last action not found

                  if (locLast !== found) actionFound.startWithTarget(this.target);
                  new_t = new_t * actionFound._timesForRepeat;
                  actionFound.update(new_t > 1 ? new_t % 1 : new_t);
                  this._last = found;
                }
              }, {
                key: "reverse",
                value: function reverse() {
                  var action = Sequence._actionOneTwo(this._actions[1].reverse(), this._actions[0].reverse());

                  this._cloneDecoration(action);

                  this._reverseEaseList(action);

                  action._reversed = true;
                  return action;
                }
              }]);

              return Sequence;
            }(ActionInterval);
            /**
             * !#en
             * Helper constructor to create an array of sequenceable actions
             * The created action will run actions sequentially, one after another.
             * !#zh 顺序执行动作，创建的动作将按顺序依次运行。
             * @method sequence
             * @param {FiniteTimeAction|FiniteTimeAction[]} actionOrActionArray
             * @param {FiniteTimeAction} ...tempArray
             * @return {ActionInterval}
             * @example
             * import { sequence } from 'cc';
             * 
             * // Create sequence with actions
             * const seq = sequence(act1, act2);
             *
             * // Create sequence with array
             * const seq = sequence(actArray);
             */
            // todo: It should be use new

            Sequence._actionOneTwo = function (actionOne, actionTwo) {
              var sequence = new Sequence();
              sequence.initWithTwoActions(actionOne, actionTwo);
              return sequence;
            };

            function sequence(
            /*Multiple Arguments*/
            tempArray) {
              var paramArray = tempArray instanceof Array ? tempArray : arguments;

              if (paramArray.length === 1) {
                errorID(1019);
                return null;
              }

              var last = paramArray.length - 1;
              if (last >= 0 && paramArray[last] == null) logID(1015);
              var result = null;

              if (last >= 0) {
                result = paramArray[0];

                for (var i = 1; i <= last; i++) {
                  if (paramArray[i]) {
                    result = Sequence._actionOneTwo(result, paramArray[i]);
                  }
                }
              }

              return result;
            }
            /*
             * Repeats an action a number of times.
             * To repeat an action forever use the CCRepeatForever action.
             * @class Repeat
             * @extends ActionInterval
             * @param {FiniteTimeAction} action
             * @param {Number} times
             * @example
             * import { Repeat, sequence } from 'cc';
             * const rep = new Repeat(sequence(jump2, jump1), 5);
             */

            var Repeat = /*#__PURE__*/function (_ActionInterval2) {
              _inherits(Repeat, _ActionInterval2);

              function Repeat(action, times) {
                var _this3;

                _classCallCheck(this, Repeat);

                _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Repeat).call(this));
                _this3._times = 0;
                _this3._total = 0;
                _this3._nextDt = 0;
                _this3._actionInstant = false;
                _this3._innerAction = null;
                times !== undefined && _this3.initWithAction(action, times);
                return _this3;
              }
              /*
               * @param {FiniteTimeAction} action
               * @param {Number} times
               * @return {Boolean}
               */


              _createClass(Repeat, [{
                key: "initWithAction",
                value: function initWithAction(action, times) {
                  var duration = action._duration * times;

                  if (this.initWithDuration(duration)) {
                    this._times = times;
                    this._innerAction = action;

                    if (action instanceof ActionInstant) {
                      this._actionInstant = true;
                      this._times -= 1;
                    }

                    this._total = 0;
                    return true;
                  }

                  return false;
                }
              }, {
                key: "clone",
                value: function clone() {
                  var action = new Repeat();

                  this._cloneDecoration(action);

                  action.initWithAction(this._innerAction.clone(), this._times);
                  return action;
                }
              }, {
                key: "startWithTarget",
                value: function startWithTarget(target) {
                  this._total = 0;
                  this._nextDt = this._innerAction._duration / this._duration;
                  ActionInterval.prototype.startWithTarget.call(this, target);

                  this._innerAction.startWithTarget(target);
                }
              }, {
                key: "stop",
                value: function stop() {
                  this._innerAction.stop();

                  Action.prototype.stop.call(this);
                }
              }, {
                key: "update",
                value: function update(dt) {
                  dt = this._computeEaseTime(dt);
                  var locInnerAction = this._innerAction;
                  var locDuration = this._duration;
                  var locTimes = this._times;
                  var locNextDt = this._nextDt;

                  if (dt >= locNextDt) {
                    while (dt > locNextDt && this._total < locTimes) {
                      locInnerAction.update(1);
                      this._total++;
                      locInnerAction.stop();
                      locInnerAction.startWithTarget(this.target);
                      locNextDt += locInnerAction._duration / locDuration;
                      this._nextDt = locNextDt > 1 ? 1 : locNextDt;
                    } // fix for issue #1288, incorrect end value of repeat


                    if (dt >= 1.0 && this._total < locTimes) {
                      // fix for cocos-creator/fireball/issues/4310
                      locInnerAction.update(1);
                      this._total++;
                    } // don't set a instant action back or update it, it has no use because it has no duration


                    if (!this._actionInstant) {
                      if (this._total === locTimes) {
                        locInnerAction.stop();
                      } else {
                        // issue #390 prevent jerk, use right update
                        locInnerAction.update(dt - (locNextDt - locInnerAction._duration / locDuration));
                      }
                    }
                  } else {
                    locInnerAction.update(dt * locTimes % 1.0);
                  }
                }
              }, {
                key: "isDone",
                value: function isDone() {
                  return this._total === this._times;
                }
              }, {
                key: "reverse",
                value: function reverse() {
                  var action = new Repeat(this._innerAction.reverse(), this._times);

                  this._cloneDecoration(action);

                  this._reverseEaseList(action);

                  return action;
                }
                /*
                 * Set inner Action.
                 * @param {FiniteTimeAction} action
                 */

              }, {
                key: "setInnerAction",
                value: function setInnerAction(action) {
                  if (this._innerAction !== action) {
                    this._innerAction = action;
                  }
                }
                /*
                 * Get inner Action.
                 * @return {FiniteTimeAction}
                 */

              }, {
                key: "getInnerAction",
                value: function getInnerAction() {
                  return this._innerAction;
                }
              }]);

              return Repeat;
            }(ActionInterval);
            /**
             * !#en Creates a Repeat action. Times is an unsigned integer between 1 and pow(2,30)
             * !#zh 重复动作，可以按一定次数重复一个动，如果想永远重复一个动作请使用 repeatForever 动作来完成。
             * @method repeat
             * @param {FiniteTimeAction} action
             * @param {Number} times
             * @return {Action}
             * @example
             * import { repeat, sequence } from 'cc';
             * const rep = repeat(sequence(jump2, jump1), 5);
             */

            function repeat(action, times) {
              return new Repeat(action, times);
            }
            /*
             * Repeats an action for ever.  <br/>
             * To repeat the an action for a limited number of times use the Repeat action. <br/>
             * @warning This action can't be Sequenceable because it is not an IntervalAction
             * @class RepeatForever
             * @extends ActionInterval
             * @param {ActionInterval} action
             * @example
             * import { sequence, RepeatForever } from 'cc';
             * const rep = new RepeatForever(sequence(jump2, jump1), 5);
             */

            var RepeatForever = /*#__PURE__*/function (_ActionInterval3) {
              _inherits(RepeatForever, _ActionInterval3);

              function RepeatForever(action) {
                var _this4;

                _classCallCheck(this, RepeatForever);

                _this4 = _possibleConstructorReturn(this, _getPrototypeOf(RepeatForever).call(this));
                _this4._innerAction = null;
                action && _this4.initWithAction(action);
                return _this4;
              }
              /*
               * @param {ActionInterval} action
               * @return {Boolean}
               */


              _createClass(RepeatForever, [{
                key: "initWithAction",
                value: function initWithAction(action) {
                  if (!action) {
                    errorID(1026);
                    return false;
                  }

                  this._innerAction = action;
                  return true;
                }
              }, {
                key: "clone",
                value: function clone() {
                  var action = new RepeatForever();

                  this._cloneDecoration(action);

                  action.initWithAction(this._innerAction.clone());
                  return action;
                }
              }, {
                key: "startWithTarget",
                value: function startWithTarget(target) {
                  ActionInterval.prototype.startWithTarget.call(this, target);

                  this._innerAction.startWithTarget(target);
                }
              }, {
                key: "step",
                value: function step(dt) {
                  var locInnerAction = this._innerAction;
                  locInnerAction.step(dt);

                  if (locInnerAction.isDone()) {
                    //var diff = locInnerAction.getElapsed() - locInnerAction._duration;
                    locInnerAction.startWithTarget(this.target); // to prevent jerk. issue #390 ,1247
                    //this._innerAction.step(0);
                    //this._innerAction.step(diff);

                    locInnerAction.step(locInnerAction.getElapsed() - locInnerAction._duration);
                  }
                }
              }, {
                key: "isDone",
                value: function isDone() {
                  return false;
                }
              }, {
                key: "reverse",
                value: function reverse() {
                  var action = new RepeatForever(this._innerAction.reverse());

                  this._cloneDecoration(action);

                  this._reverseEaseList(action);

                  return action;
                }
                /*
                 * Set inner action.
                 * @param {ActionInterval} action
                 */

              }, {
                key: "setInnerAction",
                value: function setInnerAction(action) {
                  if (this._innerAction !== action) {
                    this._innerAction = action;
                  }
                }
                /*
                 * Get inner action.
                 * @return {ActionInterval}
                 */

              }, {
                key: "getInnerAction",
                value: function getInnerAction() {
                  return this._innerAction;
                }
              }]);

              return RepeatForever;
            }(ActionInterval);
            /**
             * !#en Create a acton which repeat forever, as it runs forever, it can't be added into `sequence` and `spawn`.
             * !#zh 永远地重复一个动作，有限次数内重复一个动作请使用 repeat 动作，由于这个动作不会停止，所以不能被添加到 `sequence` 或 `spawn` 中。
             * @method repeatForever
             * @param {FiniteTimeAction} action
             * @return {ActionInterval}
             * @example
             * import { repeatForever, rotateBy } from 'cc';
             * var repeat = repeatForever(rotateBy(1.0, 360));
             */

            function repeatForever(action) {
              return new RepeatForever(action);
            }
            /*
             * Spawn a new action immediately
             * @class Spawn
             * @extends ActionInterval
             */

            var Spawn = /*#__PURE__*/function (_ActionInterval4) {
              _inherits(Spawn, _ActionInterval4);

              function Spawn(tempArray) {
                var _this5;

                _classCallCheck(this, Spawn);

                _this5 = _possibleConstructorReturn(this, _getPrototypeOf(Spawn).call(this));
                _this5._one = null;
                _this5._two = null;
                var paramArray = tempArray instanceof Array ? tempArray : arguments;

                if (paramArray.length === 1) {
                  errorID(1020);
                  return _possibleConstructorReturn(_this5);
                }

                var last = paramArray.length - 1;
                if (last >= 0 && paramArray[last] == null) logID(1015);

                if (last >= 0) {
                  var prev = paramArray[0],
                      action1;

                  for (var i = 1; i < last; i++) {
                    if (paramArray[i]) {
                      action1 = prev;
                      prev = Spawn._actionOneTwo(action1, paramArray[i]);
                    }
                  }

                  _this5.initWithTwoActions(prev, paramArray[last]);
                }

                return _this5;
              }
              /* initializes the Spawn action with the 2 actions to spawn
               * @param {FiniteTimeAction} action1
               * @param {FiniteTimeAction} action2
               * @return {Boolean}
               */


              _createClass(Spawn, [{
                key: "initWithTwoActions",
                value: function initWithTwoActions(action1, action2) {
                  if (!action1 || !action2) {
                    errorID(1027);
                    return false;
                  }

                  var ret = false;
                  var d1 = action1._duration;
                  var d2 = action2._duration;

                  if (this.initWithDuration(Math.max(d1, d2))) {
                    this._one = action1;
                    this._two = action2;

                    if (d1 > d2) {
                      this._two = Sequence._actionOneTwo(action2, delayTime(d1 - d2));
                    } else if (d1 < d2) {
                      this._one = Sequence._actionOneTwo(action1, delayTime(d2 - d1));
                    }

                    ret = true;
                  }

                  return ret;
                }
              }, {
                key: "clone",
                value: function clone() {
                  var action = new Spawn();

                  this._cloneDecoration(action);

                  action.initWithTwoActions(this._one.clone(), this._two.clone());
                  return action;
                }
              }, {
                key: "startWithTarget",
                value: function startWithTarget(target) {
                  ActionInterval.prototype.startWithTarget.call(this, target);

                  this._one.startWithTarget(target);

                  this._two.startWithTarget(target);
                }
              }, {
                key: "stop",
                value: function stop() {
                  this._one.stop();

                  this._two.stop();

                  Action.prototype.stop.call(this);
                }
              }, {
                key: "update",
                value: function update(dt) {
                  dt = this._computeEaseTime(dt);
                  if (this._one) this._one.update(dt);
                  if (this._two) this._two.update(dt);
                }
              }, {
                key: "reverse",
                value: function reverse() {
                  var action = Spawn._actionOneTwo(this._one.reverse(), this._two.reverse());

                  this._cloneDecoration(action);

                  this._reverseEaseList(action);

                  return action;
                }
              }]);

              return Spawn;
            }(ActionInterval);
            /**
             * !#en Create a spawn action which runs several actions in parallel.
             * !#zh 同步执行动作，同步执行一组动作。
             * @method spawn
             * @param {FiniteTimeAction|FiniteTimeAction[]} actionOrActionArray
             * @param {FiniteTimeAction} ...tempArray
             * @return {FiniteTimeAction}
             * @example
             * import { spawn, jumpBy, rotateBy, Vec2 } from 'cc';
             * const action = spawn(jumpBy(2, new Vec2(300, 0), 50, 4), rotateBy(2, 720));
             * todo:It should be the direct use new
             */

            Spawn._actionOneTwo = function (action1, action2) {
              var pSpawn = new Spawn();
              pSpawn.initWithTwoActions(action1, action2);
              return pSpawn;
            };

            function spawn(
            /*Multiple Arguments*/
            tempArray) {
              var paramArray = tempArray instanceof Array ? tempArray : arguments;

              if (paramArray.length === 1) {
                errorID(1020);
                return null;
              }

              if (paramArray.length > 0 && paramArray[paramArray.length - 1] == null) logID(1015);
              var prev = paramArray[0];

              for (var i = 1; i < paramArray.length; i++) {
                if (paramArray[i] != null) prev = Spawn._actionOneTwo(prev, paramArray[i]);
              }

              return prev;
            }
            /* Delays the action a certain amount of seconds
             * @class DelayTime
             * @extends ActionInterval
             */

            var DelayTime = /*#__PURE__*/function (_ActionInterval5) {
              _inherits(DelayTime, _ActionInterval5);

              function DelayTime() {
                _classCallCheck(this, DelayTime);

                return _possibleConstructorReturn(this, _getPrototypeOf(DelayTime).apply(this, arguments));
              }

              _createClass(DelayTime, [{
                key: "update",
                value: function update(dt) {}
              }, {
                key: "reverse",
                value: function reverse() {
                  var action = new DelayTime(this._duration);

                  this._cloneDecoration(action);

                  this._reverseEaseList(action);

                  return action;
                }
              }, {
                key: "clone",
                value: function clone() {
                  var action = new DelayTime();

                  this._cloneDecoration(action);

                  action.initWithDuration(this._duration);
                  return action;
                }
              }]);

              return DelayTime;
            }(ActionInterval);
            /**
             * !#en Delays the action a certain amount of seconds.
             * !#zh 延迟指定的时间量。
             * @method delayTime
             * @param {Number} d duration in seconds
             * @return {ActionInterval}
             * @example
             * import { delayTime } from 'cc';
             * const delay = delayTime(1);
             */


            function delayTime(d) {
              return new DelayTime(d);
            }
            /**
             * <p>
             * Executes an action in reverse order, from time=duration to time=0                                     <br/>
             * @warning Use this action carefully. This action is not sequenceable.                                 <br/>
             * Use it as the default "reversed" method of your own actions, but using it outside the "reversed"      <br/>
             * scope is not recommended.
             * </p>
             * @class ReverseTime
             * @extends ActionInterval
             * @param {FiniteTimeAction} action
             * @example
             * import ReverseTime from 'cc';
             * var reverse = new ReverseTime(this);
             */

            var ReverseTime = /*#__PURE__*/function (_ActionInterval6) {
              _inherits(ReverseTime, _ActionInterval6);

              function ReverseTime(action) {
                var _this6;

                _classCallCheck(this, ReverseTime);

                _this6 = _possibleConstructorReturn(this, _getPrototypeOf(ReverseTime).call(this));
                _this6._other = null;
                action && _this6.initWithAction(action);
                return _this6;
              }
              /*
               * @param {FiniteTimeAction} action
               * @return {Boolean}
               */


              _createClass(ReverseTime, [{
                key: "initWithAction",
                value: function initWithAction(action) {
                  if (!action) {
                    errorID(1028);
                    return false;
                  }

                  if (action === this._other) {
                    errorID(1029);
                    return false;
                  }

                  if (ActionInterval.prototype.initWithDuration.call(this, action._duration)) {
                    // Don't leak if action is reused
                    this._other = action;
                    return true;
                  }

                  return false;
                }
              }, {
                key: "clone",
                value: function clone() {
                  var action = new ReverseTime();

                  this._cloneDecoration(action);

                  action.initWithAction(this._other.clone());
                  return action;
                }
              }, {
                key: "startWithTarget",
                value: function startWithTarget(target) {
                  ActionInterval.prototype.startWithTarget.call(this, target);

                  this._other.startWithTarget(target);
                }
              }, {
                key: "update",
                value: function update(dt) {
                  dt = this._computeEaseTime(dt);
                  if (this._other) this._other.update(1 - dt);
                }
              }, {
                key: "reverse",
                value: function reverse() {
                  return this._other.clone();
                }
              }, {
                key: "stop",
                value: function stop() {
                  this._other.stop();

                  Action.prototype.stop.call(this);
                }
              }]);

              return ReverseTime;
            }(ActionInterval);
            /**
             * !#en Executes an action in reverse order, from time=duration to time=0.
             * !#zh 反转目标动作的时间轴。
             * @method reverseTime
             * @param {FiniteTimeAction} action
             * @return {ActionInterval}
             * @example
             * import { reverseTime } from 'cc';
             * const reverse = reverseTime(this);
             */

            function reverseTime(action) {
              return new ReverseTime(action);
            }

            /** adapter */

            function TweenEasinAdapter(easingName) {
              var initialChar = easingName.charAt(0);

              if (/[A-Z]/.test(initialChar)) {
                easingName = easingName.replace(initialChar, initialChar.toLowerCase());
                var arr = easingName.split('-');

                if (arr.length == 2) {
                  var str0 = arr[0];

                  if (str0 == 'linear') {
                    easingName = 'linear';
                  } else {
                    var str1 = arr[1];

                    switch (str0) {
                      case 'quadratic':
                        easingName = 'quad' + str1;
                        break;

                      case 'quartic':
                        easingName = 'quart' + str1;
                        break;

                      case 'quintic':
                        easingName = 'quint' + str1;
                        break;

                      case 'sinusoidal':
                        easingName = 'sine' + str1;
                        break;

                      case 'exponential':
                        easingName = 'expo' + str1;
                        break;

                      case 'circular':
                        easingName = 'circ' + str1;
                        break;

                      default:
                        easingName = str0 + str1;
                        break;
                    }
                  }
                }
              }

              return easingName;
            }
            /** checker */


            function TweenOptionChecker(opts) {
              var header = ' [Tween:] ';
              var message = ' option is not support in v' + legacyCC.ENGINE_VERSION;

              if (opts['delay']) {
                warn(header + 'delay' + message);
              }

              if (opts['repeat']) {
                warn(header + 'repeat' + message);
              }

              if (opts['repeatDelay']) {
                warn(header + 'repeatDelay' + message);
              }

              if (opts['interpolation']) {
                warn(header + 'interpolation' + message);
              }

              if (opts['onStop']) {
                warn(header + 'onStop' + message);
              }
            }

            var TweenAction = /*#__PURE__*/function (_ActionInterval) {
              _inherits(TweenAction, _ActionInterval);

              function TweenAction(duration, props, opts) {
                var _this;

                _classCallCheck(this, TweenAction);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(TweenAction).call(this));
                _this._opts = void 0;
                _this._props = void 0;
                _this._originProps = void 0;

                if (opts == null) {
                  opts = Object.create(null);
                } else {
                  /** checker */
                  TweenOptionChecker(opts);
                  /** adapter */

                  if (opts.easing && typeof opts.easing === 'string') {
                    opts.easing = TweenEasinAdapter(opts.easing);
                  } // global easing or progress used for this action


                  if (!opts.progress) {
                    opts.progress = _this.progress;
                  }

                  if (opts.easing && typeof opts.easing === 'string') {
                    var easingName = opts.easing;
                    opts.easing = easing[easingName];

                    if (!opts.easing) {
                      warnID(1031, easingName);
                    }
                  }
                }

                _this._opts = opts;
                _this._props = Object.create(null);

                for (var name in props) {
                  var value = props[name]; // property may have custom easing or progress function

                  var _easing = void 0,
                      progress = void 0;

                  if (value.value !== undefined && (value.easing || value.progress)) {
                    if (typeof value.easing === 'string') {
                      _easing = _easing[value.easing];
                      !_easing && warnID(1031, value.easing);
                    } else {
                      _easing = value.easing;
                    }

                    progress = value.progress;
                    value = value.value;
                  }

                  var prop = Object.create(null);
                  prop.value = value;
                  prop.easing = _easing;
                  prop.progress = progress;
                  _this._props[name] = prop;
                }

                _this._originProps = props;

                _this.initWithDuration(duration);

                return _this;
              }

              _createClass(TweenAction, [{
                key: "clone",
                value: function clone() {
                  var action = new TweenAction(this._duration, this._originProps, this._opts);

                  this._cloneDecoration(action);

                  return action;
                }
              }, {
                key: "startWithTarget",
                value: function startWithTarget(target) {
                  ActionInterval.prototype.startWithTarget.call(this, target);
                  var relative = !!this._opts.relative;
                  var props = this._props;

                  for (var property in props) {
                    var _t = target[property];

                    if (_t === undefined) {
                      continue;
                    }

                    var prop = props[property];
                    var value = prop.value;

                    if (typeof _t === "number") {
                      prop.start = _t;
                      prop.current = _t;
                      prop.end = relative ? _t + value : value;
                    } else if (_typeof(_t) === "object") {
                      if (prop.start == null) {
                        prop.start = {};
                        prop.current = {};
                        prop.end = {};
                      }

                      for (var k in value) {
                        prop.start[k] = _t[k];
                        prop.current[k] = _t[k];
                        prop.end[k] = relative ? _t[k] + value[k] : value[k];
                      }
                    }
                  }

                  if (this._opts.onStart) {
                    this._opts.onStart(this.target);
                  }
                }
              }, {
                key: "update",
                value: function update(t) {
                  var target = this.target;
                  if (!target) return;
                  var props = this._props;
                  var opts = this._opts;
                  var easingTime = t;
                  if (opts.easing) easingTime = opts.easing(t);
                  var progress = opts.progress;

                  for (var name in props) {
                    var prop = props[name];
                    var time = prop.easing ? prop.easing(t) : easingTime;
                    var interpolation = prop.progress ? prop.progress : progress;
                    var start = prop.start;
                    var end = prop.end;

                    if (typeof start === 'number') {
                      prop.current = interpolation(start, end, prop.current, time);
                    } else if (_typeof(start) === 'object') {
                      // const value = prop.value;
                      for (var k in start) {
                        // if (value[k].easing) {
                        //     time = value[k].easing(t);
                        // }
                        // if (value[k].progress) {
                        //     interpolation = value[k].easing(t);
                        // }
                        prop.current[k] = interpolation(start[k], end[k], prop.current[k], time);
                      }
                    }

                    target[name] = prop.current;
                  }

                  if (opts.onUpdate) {
                    opts.onUpdate(this.target, t);
                  }

                  if (t == 1 && opts.onComplete) {
                    opts.onComplete(this.target);
                  }
                }
              }, {
                key: "progress",
                value: function progress(start, end, current, t) {
                  return current = start + (end - start) * t;
                }
              }]);

              return TweenAction;
            }(ActionInterval);

            var SetAction = /*#__PURE__*/function (_ActionInstant) {
              _inherits(SetAction, _ActionInstant);

              function SetAction(props) {
                var _this;

                _classCallCheck(this, SetAction);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(SetAction).call(this));
                _this._props = void 0;
                _this._props = {};
                props !== undefined && _this.init(props);
                return _this;
              }

              _createClass(SetAction, [{
                key: "init",
                value: function init(props) {
                  for (var name in props) {
                    this._props[name] = props[name];
                  }

                  return true;
                }
              }, {
                key: "update",
                value: function update() {
                  var props = this._props;
                  var target = this.target;

                  for (var name in props) {
                    target[name] = props[name];
                  }
                }
              }, {
                key: "clone",
                value: function clone() {
                  var action = new SetAction();
                  action.init(this._props);
                  return action;
                }
              }]);

              return SetAction;
            }(ActionInstant);

            /**
             * @en
             * Tween provide a simple and flexible way to action, It's transplanted from cocos creator。
             * @zh
             * Tween 提供了一个简单灵活的方法来缓动目标，从 creator 移植而来。
             * @class Tween
             * @param {Object} [target]
             * @example
             * tween(this.node)
             *   .to(1, {scale: new Vec3(2, 2, 2), position: new Vec3(5, 5, 5)})
             *   .call(() => { console.log('This is a callback'); })
             *   .by(1, {scale: new Vec3(-1, -1, -1), position: new Vec3(-5, -5, -5)}, {easing: 'sineOutIn'})
             *   .start()
             */

            var Tween = exports('Tween', /*#__PURE__*/function () {
              function Tween(target) {
                _classCallCheck(this, Tween);

                this._actions = [];
                this._finalAction = null;
                this._target = null;
                this._tag = Action.TAG_INVALID;
                this._target = target === undefined ? null : target;
              }
              /**
               * @en Sets tween tag
               * @zh 设置缓动的标签
               */


              _createClass(Tween, [{
                key: "tag",
                value: function tag(_tag) {
                  this._tag = _tag;
                  return this;
                }
                /**
                 * @en
                 * Insert an action or tween to this sequence.
                 * @zh
                 * 插入一个 tween 到队列中。
                 * @method then 
                 * @param {Tween} other
                 * @return {Tween}
                 */

              }, {
                key: "then",
                value: function then(other) {
                  if (other instanceof Action) {
                    this._actions.push(other.clone());
                  } else {
                    this._actions.push(other._union());
                  }

                  return this;
                }
                /**
                 * @en
                 * Sets tween target.
                 * @zh
                 * 设置 tween 的 target。
                 * @method target
                 * @param {Object} target
                 * @return {Tween}
                 */

              }, {
                key: "target",
                value: function target(_target) {
                  this._target = _target;
                  return this;
                }
                /**
                 * @en
                 * Start this tween.
                 * @zh
                 * 运行当前 tween。
                 * @method start
                 * @return {Tween}
                 */

              }, {
                key: "start",
                value: function start() {
                  if (!this._target) {
                    warn('Please set target to tween first');
                    return this;
                  }

                  if (this._finalAction) {
                    TweenSystem.instance.ActionManager.removeAction(this._finalAction);
                  }

                  this._finalAction = this._union();

                  this._finalAction.setTag(this._tag);

                  TweenSystem.instance.ActionManager.addAction(this._finalAction, this._target, false);
                  return this;
                }
                /**
                 * @en
                 * Stop this tween.
                 * @zh
                 * 停止当前 tween。
                 * @method stop
                 * @return {Tween}
                 */

              }, {
                key: "stop",
                value: function stop() {
                  if (this._finalAction) {
                    TweenSystem.instance.ActionManager.removeAction(this._finalAction);
                  }

                  return this;
                }
                /**
                 * @en
                 * Clone a tween.
                 * @zh
                 * 克隆当前 tween。
                 * @method clone
                 * @param {Object} [target]
                 * @return {Tween}
                 */

              }, {
                key: "clone",
                value: function clone(target) {
                  var action = this._union();

                  return tween(target).then(action.clone());
                }
                /**
                 * @en
                 * Integrate all previous actions to an action.
                 * @zh
                 * 将之前所有的 action 整合为一个 action。
                 * @method union
                 * @return {Tween}
                 */

              }, {
                key: "union",
                value: function union() {
                  var action = this._union();

                  this._actions.length = 0;

                  this._actions.push(action);

                  return this;
                }
                /**
                 * @en
                 * Add an action which calculate with absolute value.
                 * @zh
                 * 添加一个对属性进行绝对值计算的 action。
                 * @method to
                 * @param {number} duration 缓动时间，单位为秒
                 * @param {Object} props 缓动的属性列表
                 * @param {Object} [opts] 可选的缓动功能
                 * @param {Function} [opts.progress]
                 * @param {Function|String} [opts.easing]
                 * @return {Tween}
                 */

              }, {
                key: "to",
                value: function to(duration, props, opts) {
                  opts = opts || Object.create(null);
                  opts.relative = false;
                  var action = new TweenAction(duration, props, opts);

                  this._actions.push(action);

                  return this;
                }
                /**
                 * @en
                 * Add an action which calculate with relative value.
                 * @zh
                 * 添加一个对属性进行相对值计算的 action。
                 * @method by
                 * @param {number} duration 缓动时间，单位为秒
                 * @param {Object} props 缓动的属性列表
                 * @param {Object} [opts] 可选的缓动功能
                 * @param {Function} [opts.progress]
                 * @param {Function|String} [opts.easing]
                 * @return {Tween}
                 */

              }, {
                key: "by",
                value: function by(duration, props, opts) {
                  opts = opts || Object.create(null);
                  opts.relative = true;
                  var action = new TweenAction(duration, props, opts);

                  this._actions.push(action);

                  return this;
                }
                /**
                 * @en
                 * Directly set target properties.
                 * @zh
                 * 直接设置 target 的属性。
                 * @method set
                 * @param {Object} props
                 * @return {Tween}
                 */

              }, {
                key: "set",
                value: function set(props) {
                  var action = new SetAction(props);

                  this._actions.push(action);

                  return this;
                }
                /**
                 * @en
                 * Add an delay action.
                 * @zh
                 * 添加一个延时 action。
                 * @method delay
                 * @param {number} duration 
                 * @return {Tween}
                 */

              }, {
                key: "delay",
                value: function delay(duration) {
                  var action = delayTime(duration);

                  this._actions.push(action);

                  return this;
                }
                /**
                 * @en
                 * Add an callback action.
                 * @zh
                 * 添加一个回调 action。
                 * @method call
                 * @param {Function} callback
                 * @return {Tween}
                 */

              }, {
                key: "call",
                value: function call(callback) {
                  var action = callFunc(callback);

                  this._actions.push(action);

                  return this;
                }
                /**
                 * @en
                 * Add an sequence action.
                 * @zh
                 * 添加一个队列 action。
                 * @method sequence
                 * @param {Tween} action
                 * @param {Tween} ...actions
                 * @return {Tween}
                 */

              }, {
                key: "sequence",
                value: function sequence() {
                  var action = Tween._wrappedSequence.apply(Tween, arguments);

                  this._actions.push(action);

                  return this;
                }
                /**
                 * @en
                 * Add an parallel action.
                 * @zh
                 * 添加一个并行 action。
                 * @method parallel
                 * @param {Tween} action
                 * @param {Tween} ...actions
                 * @return {Tween}
                 */

              }, {
                key: "parallel",
                value: function parallel() {
                  var action = Tween._wrappedParallel.apply(Tween, arguments);

                  this._actions.push(action);

                  return this;
                }
                /**
                 * @en
                 * Add an repeat action.
                 * This action will integrate before actions to a sequence action as their parameters.
                 * @zh
                 * 添加一个重复 action，这个 action 会将前一个动作作为他的参数。
                 * @method repeat
                 * @param {number} repeatTimes 重复次数
                 * @param {Tween} embedTween 可选，嵌入 Tween
                 * @return {Tween}
                 */

              }, {
                key: "repeat",
                value: function repeat$1(repeatTimes, embedTween) {
                  /** adapter */
                  if (repeatTimes == Infinity) {
                    return this.repeatForever(embedTween);
                  }

                  var actions = this._actions;
                  var action;

                  if (embedTween instanceof Tween) {
                    action = embedTween._union();
                  } else {
                    action = actions.pop();
                  }

                  actions.push(repeat(action, repeatTimes));
                  return this;
                }
                /**
                 * @en
                 * Add an repeat forever action.
                 * This action will integrate before actions to a sequence action as their parameters.
                 * @zh
                 * 添加一个永久重复 action，这个 action 会将前一个动作作为他的参数。
                 * @method repeatForever
                 * @param {Tween} embedTween 可选，嵌入 Tween
                 * @return {Tween}
                 */

              }, {
                key: "repeatForever",
                value: function repeatForever$1(embedTween) {
                  var actions = this._actions;
                  var action;

                  if (embedTween instanceof Tween) {
                    action = embedTween._union();
                  } else {
                    action = actions.pop();
                  }

                  actions.push(repeatForever(action));
                  return this;
                }
                /**
                 * @en
                 * Add an reverse time action.
                 * This action will integrate before actions to a sequence action as their parameters.
                 * @zh
                 * 添加一个倒置时间 action，这个 action 会将前一个动作作为他的参数。
                 * @method reverseTime
                 * @param {Tween} embedTween 可选，嵌入 Tween
                 * @return {Tween}
                 */

              }, {
                key: "reverseTime",
                value: function reverseTime$1(embedTween) {
                  var actions = this._actions;
                  var action;

                  if (embedTween instanceof Tween) {
                    action = embedTween._union();
                  } else {
                    action = actions.pop();
                  }

                  actions.push(reverseTime(action));
                  return this;
                }
                /**
                 * @en
                 * Add an hide action, only for node target.
                 * @zh
                 * 添加一个隐藏 action，只适用于 target 是节点类型的。
                 * @method hide
                 * @return {Tween}
                 */

              }, {
                key: "hide",
                value: function hide$1() {
                  var action = hide();

                  this._actions.push(action);

                  return this;
                }
                /**
                 * @en
                 * Add an show action, only for node target.
                 * @zh
                 * 添加一个显示 action，只适用于 target 是节点类型的。
                 * @method show
                 * @return {Tween}
                 */

              }, {
                key: "show",
                value: function show$1() {
                  var action = show();

                  this._actions.push(action);

                  return this;
                }
                /**
                 * @en
                 * Add an removeSelf action, only for node target.
                 * @zh
                 * 添加一个移除自己 action，只适用于 target 是节点类型的。
                 * @method removeSelf
                 * @return {Tween}
                 */

              }, {
                key: "removeSelf",
                value: function removeSelf$1() {
                  var action = removeSelf(false);

                  this._actions.push(action);

                  return this;
                }
                /**
                 * @en 
                 * Stop all tweens
                 * @zh 
                 * 停止所有缓动
                 */

              }, {
                key: "_union",
                value: function _union() {
                  var actions = this._actions;
                  var action;

                  if (actions.length === 1) {
                    action = actions[0];
                  } else {
                    action = sequence(actions);
                  }

                  return action;
                }
              }, {
                key: "_destroy",
                value: function _destroy() {
                  this.stop();
                }
              }], [{
                key: "stopAll",
                value: function stopAll() {
                  TweenSystem.instance.ActionManager.removeAllActions();
                }
                /**
                 * @en 
                 * Stop all tweens by tag
                 * @zh 
                 * 停止所有指定标签的缓动
                 */

              }, {
                key: "stopAllByTag",
                value: function stopAllByTag(tag, target) {
                  TweenSystem.instance.ActionManager.removeActionByTag(tag, target);
                }
                /**
                 * @en 
                 * Stop all tweens by target
                 * @zh 
                 * 停止所有指定对象的缓动
                 */

              }, {
                key: "stopAllByTarget",
                value: function stopAllByTarget(target) {
                  TweenSystem.instance.ActionManager.removeAllActionsFromTarget(target);
                }
              }, {
                key: "_wrappedSequence",
                value: function _wrappedSequence() {
                  var tmp_args = Tween._tmp_args;
                  tmp_args.length = 0;

                  for (var l = arguments.length, i = 0; i < l; i++) {
                    var arg = tmp_args[i] = i < 0 || arguments.length <= i ? undefined : arguments[i];

                    if (arg instanceof Tween) {
                      tmp_args[i] = arg._union();
                    }
                  }

                  return sequence.apply(sequence, tmp_args);
                }
              }, {
                key: "_wrappedParallel",
                value: function _wrappedParallel() {
                  var tmp_args = Tween._tmp_args;
                  tmp_args.length = 0;

                  for (var l = arguments.length, i = 0; i < l; i++) {
                    var arg = tmp_args[i] = i < 0 || arguments.length <= i ? undefined : arguments[i];

                    if (arg instanceof Tween) {
                      tmp_args[i] = arg._union();
                    }
                  }

                  return spawn.apply(spawn, tmp_args);
                }
              }]);

              return Tween;
            }());
            Tween._tmp_args = [];
            legacyCC.Tween = Tween;
            /**
             * @en
             * tween is a utility function that helps instantiate Tween instances.
             * @zh
             * tween 是一个工具函数，帮助实例化 Tween 实例。
             * @param target 缓动的目标
             * @returns Tween 实例
             * @example
             * tween(this.node)
             *   .to(1, {scale: new Vec3(2, 2, 2), position: new Vec3(5, 5, 5)})
             *   .call(() => { console.log('This is a callback'); })
             *   .by(1, {scale: new Vec3(-1, -1, -1)}, {easing: 'sineOutIn'})
             *   .start()
             */

            function tween(target) {
              return new Tween(target);
            }
            legacyCC.tween = tween;
            /**
             * @en
             * tweenUtil is a utility function that helps instantiate Tween instances.
             * @zh
             * tweenUtil 是一个工具函数，帮助实例化 Tween 实例。
             * @deprecated please use `tween` instead.
             */

            function tweenUtil(target) {
              warn("tweenUtil' is deprecated, please use 'tween' instead ");
              return new Tween(target);
            }
            legacyCC.tweenUtil = tweenUtil;

        }
    };
});
