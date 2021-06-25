System.register([], function (exports) {
  'use strict';
  return {
    execute: function () {

      exports({
        D: _createForOfIteratorHelperLoose,
        E: ccenum,
        I: v2,
        J: v3,
        L: v4,
        N: quat,
        R: mat4,
        U: size,
        X: rect,
        Z: color,
        _: _applyDecoratedDescriptor,
        a0: equals,
        a1: approx,
        a2: clamp01,
        a3: lerp,
        a4: toRadian,
        a5: toDegree,
        a7: randomRange,
        a8: randomRangeInt,
        a9: pseudoRandom,
        aA: Eventify,
        aG: isDisplayStats,
        aH: setDisplayStats,
        aJ: makeEditorClassDecoratorFn,
        aK: makeSmartEditorClassDecorator,
        aL: property,
        aM: _defineProperty,
        aN: _get,
        aP: assertIsNonNullable,
        aQ: _toConsumableArray,
        aR: assertIsTrue,
        aS: nextPow2$1,
        aT: log2,
        aX: mixin,
        aY: _typeof,
        aZ: getError,
        a_: isChildClassOf,
        aa: pseudoRandomRange,
        ab: pseudoRandomRangeInt,
        ac: nextPow2,
        ad: repeat,
        ae: pingPong,
        af: inverseLerp,
        ag: absMaxComponent,
        ah: absMax,
        ai: BitMask,
        aj: Enum,
        an: setDefaultLogTimes,
        ao: void 0,
        ap: void 0,
        aq: void 0,
        ar: CCClass,
        at: isValid,
        b: _inherits,
        b0: getClassByName,
        b4: formerlySerializedAs,
        bD: _slicedToArray,
        bE: _set,
        bG: remove,
        bH: contains,
        bJ: sign,
        bP: contains$1,
        bQ: addon,
        bf: _getClassById,
        bh: clear,
        bi: getClassAttrs,
        bk: createMap,
        bn: _getClassId,
        bo: getClassName,
        bp: obsolete,
        br: pushToMap,
        bs: callInNextTick,
        bt: downloadAudio,
        bv: _resetDebugSetting,
        d: _classCallCheck,
        e: _possibleConstructorReturn,
        f: _getPrototypeOf,
        g: _initializerDefineProperty,
        i: _assertThisInitialized,
        j: _createClass,
        k: clamp,
        o: log,
        p: error,
        q: assert,
        t: type,
        u: _throw,
        v: logID,
        w: warn,
        x: warnID,
        y: errorID,
        z: assertID
      });

      function _typeof(obj) {
        "@babel/helpers - typeof";

        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = exports('aY', function (obj) {
            return typeof obj;
          });
        } else {
          _typeof = exports('aY', function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          });
        }

        return _typeof(obj);
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }

        return obj;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = exports('f', Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        });
        return _getPrototypeOf(o);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };

        return _setPrototypeOf(o, p);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
          return call;
        }

        return _assertThisInitialized(self);
      }

      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null) break;
        }

        return object;
      }

      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = exports('aN', Reflect.get);
        } else {
          _get = exports('aN', function _get(target, property, receiver) {
            var base = _superPropBase(target, property);

            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);

            if (desc.get) {
              return desc.get.call(receiver);
            }

            return desc.value;
          });
        }

        return _get(target, property, receiver || target);
      }

      function set(target, property, value, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.set) {
          set = Reflect.set;
        } else {
          set = function set(target, property, value, receiver) {
            var base = _superPropBase(target, property);

            var desc;

            if (base) {
              desc = Object.getOwnPropertyDescriptor(base, property);

              if (desc.set) {
                desc.set.call(receiver, value);
                return true;
              } else if (!desc.writable) {
                return false;
              }
            }

            desc = Object.getOwnPropertyDescriptor(receiver, property);

            if (desc) {
              if (!desc.writable) {
                return false;
              }

              desc.value = value;
              Object.defineProperty(receiver, property, desc);
            } else {
              _defineProperty(receiver, property, value);
            }

            return true;
          };
        }

        return set(target, property, value, receiver);
      }

      function _set(target, property, value, receiver, isStrict) {
        var s = set(target, property, value, receiver || target);

        if (!s && isStrict) {
          throw new Error('failed to set property');
        }

        return value;
      }

      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }

      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }

      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }

      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
      }

      function _iterableToArrayLimit(arr, i) {
        if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);

            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

        return arr2;
      }

      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      function _createForOfIteratorHelperLoose(o) {
        var i = 0;

        if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
          if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          };
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        i = o[Symbol.iterator]();
        return i.next.bind(i);
      }

      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }

      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }

        return desc;
      }

      var debugInfos = {
      	"1100": "Expected 'data' dict, but not found. Config file: %s",
      	"1101": "Please load the resource first : %s",
      	"1200": "cocos2d: Director: Error in gettimeofday",
      	"1204": "running scene should not null",
      	"1205": "the scene should not null",
      	"1206": "loadScene: The scene index to load (%s) is out of range.",
      	"1207": "loadScene: Unknown name type to load: '%s'",
      	"1208": "loadScene: Failed to load scene '%s' because '%s' is already loading",
      	"1209": "loadScene: Can not load the scene '%s' because it was not in the build settings before playing.",
      	"1210": "Failed to preload '%s', %s",
      	"1211": "loadScene: The scene index to load (%s) is out of range.",
      	"1212": "loadScene: Unknown name type to load: '%s'",
      	"1213": "loadScene: Failed to load scene '%s' because '%s' is already loading",
      	"1214": "loadScene: Can not load the scene '%s' because it was not in the build settings before playing.",
      	"1215": "Failed to preload '%s', %s",
      	"1216": "Director.runSceneImmediate: scene is not valid",
      	"1217": "Director._initOnEngineInitialized: renderer root initialization failed",
      	"1300": "element type is wrong!",
      	"1400": "'%s' is deprecated, please use '%s' instead.",
      	"1401": "The first argument should be the destination object",
      	"1402": "The 'visible' property of %s is deprecated, use 'enabled' instead please.",
      	"1403": "Sorry, cc.audioEngine.willPlayMusic is removed.",
      	"1404": "cc.spriteFrameCache is removed, please use cc.loader to load and cache sprite frames of atlas format.",
      	"1405": "The '%s' will be removed in v2.0, please use '%s' instead.",
      	"1406": "'%s.%s' is removed",
      	"1407": "cc.pool is being removed from v2.0, you are getting cc.js.Pool instead",
      	"1408": "'%s' is removed",
      	"1502": "cc.scheduler.scheduleCallbackForTarget(): target should be non-null.",
      	"1503": "cc.Scheduler.pauseTarget():target should be non-null",
      	"1504": "cc.Scheduler.resumeTarget():target should be non-null",
      	"1505": "cc.Scheduler.isTargetPaused():target should be non-null",
      	"1506": "warning: you CANNOT change update priority in scheduled function",
      	"1507": "scheduler#scheduleSelector. Selector already scheduled. Updating interval from: %.4f to %.4f",
      	"1508": "Argument callback must not be empty",
      	"1509": "Argument target must be non-nullptr",
      	"1510": "cc.Scheduler: Illegal target which doesn't have id, you should do Scheduler.enableForTarget(target) before all scheduler API usage on target",
      	"1511": "cc.Scheduler: pause state of the scheduled task doesn't match the element pause state in Scheduler, the given paused state will be ignored.",
      	"1512": "cc.Scheduler: updateFunc parameter is deprecated in scheduleUpdate function, and will be removed in v2.0",
      	"1513": "cc.Scheduler: scheduler stopped using `__instanceId` as id since v2.0, you should do Scheduler.enableForTarget(target) before all scheduler API usage on target",
      	"1605": "child already added. It can't be added again",
      	"1606": "child must be non-null",
      	"1607": "removeFromParentAndCleanup is deprecated. Use removeFromParent instead",
      	"1608": "boundingBox is deprecated. Use getBoundingBox instead",
      	"1609": "argument tag is an invalid tag",
      	"1619": "callback function must be non-null",
      	"1620": "interval must be positive",
      	"1623": "Set '%s' to normal node (not persist root node).",
      	"1624": "Replacing with the same sgNode",
      	"1625": "The replacement sgNode should not contain any child.",
      	"1626": "Should not set alpha via 'color', set 'opacity' please.",
      	"1627": "Not support for asynchronous creating node in SG",
      	"1632": "Node name can not include '/'.",
      	"1633": "Internal error, should not remove unknown node from parent.",
      	"1634": "addChild: The child to add must be instance of cc.Node, not %s.",
      	"1635": "reorderChild: this child is not in children list.",
      	"1636": "Node's zIndex value can't be greater than cc.macro.MAX_ZINDEX, setting to the maximum value",
      	"1637": "Node's zIndex value can't be smaller than cc.macro.MIN_ZINDEX, setting to the minimum value",
      	"1638": "Private node's zIndex can't be set, it will keep cc.macro.MIN_ZINDEX as its value",
      	"1800": "cc._EventListenerKeyboard.checkAvailable(): Invalid EventListenerKeyboard!",
      	"1801": "cc._EventListenerTouchOneByOne.checkAvailable(): Invalid EventListenerTouchOneByOne!",
      	"1802": "cc._EventListenerTouchAllAtOnce.checkAvailable(): Invalid EventListenerTouchAllAtOnce!",
      	"1803": "cc._EventListenerAcceleration.checkAvailable(): _onAccelerationEvent must be non-nil",
      	"1900": "Invalid parameter.",
      	"2200": "Design resolution not valid",
      	"2201": "should set resolutionPolicy",
      	"2300": "The touches is more than MAX_TOUCHES, nUnusedIndex = %s",
      	"3103": "textureUtil.addImage(): path should be non-null",
      	"3119": "Lazy init texture with image element failed due to image loading failure: %s",
      	"3300": "Rect width exceeds maximum margin: %s",
      	"3301": "Rect height exceeds maximum margin: %s",
      	"3500": "0 priority is forbidden for fixed priority since it's used for scene graph based priority.",
      	"3501": "Invalid listener type!",
      	"3502": "Can't set fixed priority with scene graph based listener.",
      	"3503": "Invalid parameters.",
      	"3504": "listener must be a cc.EventListener object when adding a fixed priority listener",
      	"3505": "The listener has been registered, please don't register it again.",
      	"3506": "Unsupported listener target.",
      	"3507": "Invalid scene graph priority!",
      	"3508": "If program goes here, there should be event in dispatch.",
      	"3509": "_inDispatch should be 1 here.",
      	"3510": "%s's scene graph node not contains in the parent's children",
      	"3511": "event is undefined",
      	"3512": "Event manager only support scene graph priority for ui nodes which contain UIComponent",
      	"3600": "cc.Class will automatically call super constructor of %s, you should not call it manually.",
      	"3601": "The editor property 'playOnFocus' should be used with 'executeInEditMode' in class '%s'",
      	"3602": "Unknown editor property '%s' in class '%s'.",
      	"3603": "Use 'cc.Float' or 'cc.Integer' instead of 'cc.Number' please.",
      	"3604": "Can only indicate one type attribute for %s.",
      	"3605": "The default value of %s is not instance of %s.",
      	"3606": "No needs to indicate the '%s' attribute for %s, which its default value is type of %s.",
      	"3607": "The default value of %s must be an empty string.",
      	"3608": "The type of %s must be CCString, not String.",
      	"3609": "The type of %s must be CCBoolean, not Boolean.",
      	"3610": "The type of %s must be CCFloat or CCInteger, not Number.",
      	"3611": "Can not indicate the '%s' attribute for %s, which its default value is type of %s.",
      	"3612": "%s Just set the default value to 'new %s()' and it will be handled properly.",
      	"3613": "'No need to use 'serializable: false' or 'editorOnly: true' for the getter of '%s.%s', every getter is actually non-serialized.",
      	"3614": "Should not define constructor for cc.Component %s.",
      	"3615": "Each script can have at most one Component.",
      	"3616": "Should not specify class name %s for Component which defines in project.",
      	"3617": "Can not instantiate CCClass '%s' with arguments.",
      	"3618": "ctor of '%s' can not be another CCClass",
      	"3619": "ctor of '%s' must be function type",
      	"3620": "this._super declared in '%s.%s' but no super method defined",
      	"3621": "Unknown type of %s.%s, maybe you want is '%s'.",
      	"3622": "Unknown type of %s.%s, property should be defined in 'properties' or 'ctor'",
      	"3623": "Can not use 'editor' attribute, '%s' not inherits from Components.",
      	"3624": "'%s' overrided '%s' but '%s' is defined as 'false' so the super method will not be called. You can set '%s' to null to disable this warning.",
      	"3625": "[isChildClassOf] superclass should be function type, not",
      	"3626": "Can't remove '%s' because '%s' depends on it.",
      	"3627": "Should not add renderer component (%s) to a Canvas node.",
      	"3628": "Should not add %s to a node which size is already used by its other component.",
      	"3629": "attribute must be type object",
      	"3633": "Properties function of '%s' should return an object!",
      	"3634": "Disallow to use '.' in property name",
      	"3635": "Default array must be empty, set default value of %s.%s to [], and initialize in 'onLoad' or 'ctor' please. (just like 'this.%s = [...];')",
      	"3636": "Do not set default value to non-empty object, unless the object defines its own 'clone' function. Set default value of %s.%s to null or {}, and initialize in 'onLoad' or 'ctor' please. (just like 'this.%s = {foo: bar};')",
      	"3637": "Can not declare %s.%s, it is already defined in the prototype of %s",
      	"3638": "'%s': the getter of '%s' is already defined!",
      	"3639": "Can not apply the specified attribute to the getter of '%s.%s', attribute index: %s",
      	"3640": "'%s': the setter of '%s' is already defined!",
      	"3641": "Can not construct %s because it contains object property.",
      	"3642": "Cannot define %s.%s because static member name can not be '%s'.",
      	"3643": "Can not define a member called 'constructor' in the class '%s', please use 'ctor' instead.",
      	"3644": "Please define 'type' parameter of %s.%s as the actual constructor.",
      	"3645": "Please define 'type' parameter of %s.%s as the constructor of %s.",
      	"3646": "Unknown 'type' parameter of %s.%s：%s",
      	"3647": "The length of range array must be equal or greater than 2",
      	"3648": "Can not declare %s.%s method, it is already defined in the properties of %s.",
      	"3649": "CCClass %s have conflict between its ctor and __ctor__.",
      	"3651": "Can not call `_super` or `prototype.ctor` in ES6 Classes \"%s\", use `super` instead please.",
      	"3652": "Failed to construct a dummy instance of the \"%s\" class using `new` behind the scenes. This is for getting default values declared in TypeScript. Please ensure the class will be able to construct during script's initialization. %s.",
      	"3653": "Please do not specifiy \"default\" attribute in decorator of \"%s\" property in \"%s\" class.\nDefault value must be initialized at their declaration:\n \n// Before:\n@property({ default: 0 }) // <--\n@integer\nvalue;\n// After:\n@integer\nvalue = 0;    // <--",
      	"3654": "Please specifiy a default value for \"%s.%s\" property at its declaration:\n \n// Before:\n@property(...)\nvalue;\n// After:\n@property(...)\nvalue = 0",
      	"3655": "Can not specifiy \"get\" or \"set\"  attribute in decorator for \"%s\" property in \"%s\" class.\nPlease use:\n \n@property(...)\nget %s () {\n    ...\n}\n@property\nset %s (value) {\n    ...\n}",
      	"3656": "The default value of %s.%s must be an empty string. (changed since 1.8)",
      	"3657": "The value assigned to %s should be Texture2D object, not url string. Since 1.8,\nyou can declare a texture object directly in properties by using:\n \n{\n    default: null,\n    type: cc.Texture2D  // use 'type:' instead of 'url:'\n}",
      	"3658": "browser does not support getters",
      	"3659": "Violation error: extending enumerations shall have non-overlaped member names or member values",
      	"3660": "You are explicitly specifying `undefined` type to cc property \"%s\" of cc class \"%s\".\nIs this intended? If not, this may indicate a circular reference.\nFor example:\n \n// foo.ts\nimport { _decorator } from 'cc';\nimport { Bar } from './bar';  // Given that './bar' also reference 'foo.ts'.\n                              // When importing './bar', execution of './bar' is hung on to wait execution of 'foo.ts',\n                              // the `Bar` imported here is `undefined` until './bar' finish its execution.\n                              // It leads to that\n@_decorator.ccclass           //  ↓\nexport class Foo {            //  ↓\n    @_decorator.type(Bar)     //  → is equivalent to `@_decorator.type(undefined)`\n    public bar: Bar;          // To eliminate this error, either:\n                              // - Refactor your module structure(recommended), or\n                              // - specify the type as cc class name: `@_decorator.type('Bar'/* or any name you specified for `Bar` */)`\n}",
      	"3661": "Register a cc-class through `cc.Class({ /* ... */ })` is deprecated (when registering cc-class \"%s\"). Use ES6 class syntax and decorators for that purpose instead.",
      	"3700": "internal error: _prefab is undefined",
      	"3701": "Failed to load prefab asset for node '%s'",
      	"3800": "The target can not be made persist because it's not a cc.Node or it doesn't have _id property.",
      	"3801": "The node can not be made persist because it's not under root node.",
      	"3802": "The node can not be made persist because it's not in current scene.",
      	"3803": "The target can not be made persist because it's not a cc.Node or it doesn't have _id property.",
      	"3804": "getComponent: Type must be non-nil",
      	"3805": "Can't add component '%s' because %s already contains the same component.",
      	"3806": "Can't add component '%s' to %s because it conflicts with the existing '%s' derived component.",
      	"3807": "addComponent: Failed to get class '%s'",
      	"3808": "addComponent: Should not add component ('%s') when the scripts are still loading.",
      	"3809": "addComponent: The component to add must be a constructor",
      	"3810": "addComponent: The component to add must be child class of cc.Component",
      	"3811": "_addComponentAt: The component to add must be a constructor",
      	"3812": "_addComponentAt: Index out of range",
      	"3813": "removeComponent: Component must be non-nil",
      	"3814": "Argument must be non-nil",
      	"3815": "Component not owned by this entity",
      	"3816": "Node '%s' is already activating",
      	"3817": "Sorry, the component of '%s' which with an index of %s is corrupted! It has been removed.",
      	"3818": "Failed to read or parse project.json",
      	"3819": "Warning: target element is not a DIV or CANVAS",
      	"3820": "The renderer doesn't support the renderMode %s",
      	"3821": "Cannot change hierarchy while activating or deactivating the parent.",
      	"3822": "addComponent: Cannot add any component to the scene.",
      	"3900": "Invalid clip to add",
      	"3901": "Invalid clip to remove",
      	"3902": "clip is defaultClip, set force to true to force remove clip and animation state",
      	"3903": "animation state is playing, set force to true to force stop and remove clip and animation state",
      	"3904": "motion path of target [%s] in prop [%s] frame [%s] is not valid",
      	"3905": "sprite frames must be an Array.",
      	"3906": "Can't find easing type [%s]",
      	"3907": "animator not added or already removed",
      	"3908": "animation not added or already removed",
      	"3912": "already-playing",
      	"4000": "Sorry, the cc.Font has been modified from Raw Asset to Asset. Please load the font asset before using.",
      	"4003": "Label font size can't be shirnked less than 0!",
      	"4004": "force notify all fonts loaded!",
      	"4011": "Property spriteFrame of Font '%s' is invalid. Using system font instead.",
      	"4012": "The texture of Font '%s' must be already loaded on JSB. Using system font instead.",
      	"4013": "Sorry, lineHeight of system font not supported on JSB.",
      	"4100": "Property padding is deprecated, please use paddingLeft, paddingRight, paddingTop and paddingBottom instead",
      	"4200": "MaskType: IMAGE_STENCIL only support WebGL mode.",
      	"4201": "The alphaThreshold invalid in Canvas Mode.",
      	"4202": "The inverted invalid in Canvas Mode.",
      	"4300": "Can not found the %s page.",
      	"4301": "Can not add a page without UITransform.",
      	"4302": "Can not set the scroll view content when it hasn't UITransform or its parent hasn't UITransform.",
      	"4400": "Invalid RichText img tag! The sprite frame name can't be found in the ImageAtlas!",
      	"4600": "Script attached to '%s' is missing or invalid.",
      	"4700": "The dom control is not created!",
      	"4800": "unknown asset type",
      	"4901": "loadRes: should not specify the extname in %s %s",
      	"4902": "No need to release non-cached asset.",
      	"4903": "Can not get class '%s'",
      	"4914": "Resources url '%s' does not exist.",
      	"4915": "Pack indices and data do not match in size",
      	"4916": "Failed to download package for %s",
      	"4920": "Sorry, you shouldn't use id as item identity any more, please use url or uuid instead, the current id is being set as url: (%s)",
      	"4921": "Invalid pipe or invalid index provided!",
      	"4922": "The pipe to be inserted is already in the pipeline!",
      	"4923": "Uuid Loader: Parse asset [ %s ] failed : %s",
      	"4924": "JSON Loader: Input item doesn't contain string content",
      	"4925": "Uuid Loader: Deserialize asset [ %s ] failed : %s",
      	"4926": "Audio Downloader: no web audio context.",
      	"4927": "Audio Downloader: audio not supported on this browser!",
      	"4928": "Load %s failed!",
      	"4929": "Load Webp ( %s ) failed",
      	"4930": "Load image ( %s ) failed",
      	"4931": "Download Uuid: can not find type of raw asset[ %s ]: %s",
      	"4932": "Since v1.10, for any atlas (\"%s\") in the \"resources\" directory, it is not possible to find the contained SpriteFrames via `loadRes`, `getRes` or `releaseRes`. Load the SpriteAtlas first and then use `spriteAtlas.getSpriteFrame(name)` instead please.",
      	"4933": "Download Font [ %s ] failed, using Arial or system default font instead",
      	"4934": "Please assure that the full path of sub asset is correct!",
      	"4935": "Failed to skip prefab asset while deserializing PrefabInfo",
      	"5000": "You are trying to destroy a object twice or more.",
      	"5001": "object not yet destroyed",
      	"5100": "Not a plist file!",
      	"5200": "Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option",
      	"5201": "browser don't support web audio",
      	"5202": "This feature supports WebGL render mode only.",
      	"5300": "Type of target to deserialize not matched with data: target is %s, data is %s",
      	"5301": "Can not find script '%s'",
      	"5302": "Can not find class '%s'",
      	"5400": "'%s' is deprecated, use '%s' instead please.",
      	"5401": "'%s' is deprecated, use '%s' instead please.",
      	"5402": "cc.js.addon called on non-object:",
      	"5403": "cc.js.mixin: arguments must be type object:",
      	"5404": "The base class to extend from must be non-nil",
      	"5405": "The class to extend must be non-nil",
      	"5406": "Class should be extended before assigning any prototype members.",
      	"5500": "'notify' can't work with 'get/set' !",
      	"5501": "'notify' must work with 'default' !",
      	"5502": "Invalid url of %s.%s",
      	"5503": "The 'url' attribute of '%s.%s' is undefined when loading script.",
      	"5504": "The 'url' type of '%s.%s' must be child class of cc.RawAsset.",
      	"5505": "The 'url' type of '%s.%s' must not be child class of cc.Asset, otherwise you should use 'type: %s' instead.",
      	"5506": "Can not specify 'type' attribute for '%s.%s', because its 'url' is already defined.",
      	"5507": "The 'default' attribute of '%s.%s' must be an array",
      	"5508": "Invalid type of %s.%s",
      	"5510": "The 'type' attribute of '%s.%s' can not be 'Number', use 'Float' or 'Integer' instead please.",
      	"5511": "The 'type' attribute of '%s.%s' is undefined when loading script",
      	"5512": "Can not serialize '%s.%s' because the specified type is anonymous, please provide a class name or set the 'serializable' attribute of '%s.%s' to 'false'.",
      	"5513": "The 'default' value of '%s.%s' should not be used with a 'get' function.",
      	"5514": "The 'default' value of '%s.%s' should not be used with a 'set' function.",
      	"5515": "The 'default' value of '%s.%s' can not be an constructor. Set default to null please.",
      	"5516": "Property '%s.%s' must define at least one of 'default', 'get' or 'set'.",
      	"5517": "'%s.%s' hides inherited property '%s.%s'. To make the current property override that implementation, add the `override: true` attribute please.",
      	"5600": "Argument must be non-nil",
      	"5601": "Can not get current scene.",
      	"5602": "Scene is destroyed",
      	"5603": "reference node is destroyed",
      	"5700": "no %s or %s on %s",
      	"5800": "%s.lerp not yet implemented.",
      	"5801": "%s.clone not yet implemented.",
      	"5802": "%s.equals not yet implemented.",
      	"5900": "MotionStreak only support WebGL mode.",
      	"5901": "cc.MotionStreak.getOpacity has not been supported.",
      	"5902": "cc.MotionStreak.setOpacity has not been supported.",
      	"6000": "Custom should not be false if file is not specified.",
      	"6001": "The new %s must not be NaN",
      	"6017": "Incomplete or corrupt PNG file",
      	"6018": "Invalid filter algorithm: %s",
      	"6019": "Invalid byte order value.",
      	"6020": "You forgot your towel!",
      	"6021": "Unknown Field Tag: %s",
      	"6022": "Too many bits requested",
      	"6023": "No bits requested",
      	"6024": "Cannot recover from missing StripByteCounts",
      	"6025": "Cannot handle sub-byte bits per sample",
      	"6026": "Cannot handle sub-byte bits per pixel",
      	"6027": "Palette image missing color map",
      	"6028": "Unknown Photometric Interpretation: %s",
      	"6029": "Unkown error",
      	"6030": "cc.ParticleSystem: error decoding or ungzipping textureImageData",
      	"6031": "cc.ParticleSystem: unknown image format with Data",
      	"6032": "cc.ParticleSystem.initWithDictionary() : error loading the texture",
      	"6200": "Canvas doesn't support mesh slot!",
      	"6300": "only cc.DrawNode is accepted as stencil",
      	"6301": "Stencil buffer is not enabled.",
      	"6302": "Nesting more than %d stencils is not supported. Everything will be drawn without stencil for this node and its children.",
      	"6400": "asset.url is not usable in core process",
      	"6401": "asset.urls is not usable in core process",
      	"6402": "AssetLibrary has already been initialized!",
      	"6500": "Widget target must be one of the parent nodes of it",
      	"6501": "%s's widget target must have UITransform, Please add it in target",
      	"6600": "collider not added or already removed",
      	"6601": "Can't find testFunc for (%s, $s).",
      	"6700": "Can't init canvas '%s' because it conflicts with the existing '%s', the scene should only have one active canvas at the same time",
      	"6701": "Should not add Canvas to a node which already contains a renderer component (%s).",
      	"6702": "Should not add Canvas to a node which size is already used by its other component.",
      	"6703": "Can't initialise DrawingPrimitiveWebGL. context need is WebGLRenderingContext",
      	"6704": "Polygon's point must greater than 2",
      	"6705": "Argument must be non-nil",
      	"6800": "Callback of event must be non-nil",
      	"6801": "The message must be provided",
      	"6900": "The thing you want to instantiate must be an object",
      	"6901": "The thing you want to instantiate is nil",
      	"6902": "The thing you want to instantiate is destroyed",
      	"6903": "The instantiate method for given asset do not implemented",
      	"6904": "Can not instantiate array",
      	"6905": "Can not instantiate DOM element",
      	"7000": "Failed to init asset's raw path.",
      	"7001": "Should not load '%s' from script dynamically, unless it is placed in the 'resources' folder.",
      	"7002": "Sorry can not load '%s' because it is not placed in the 'resources' folder.",
      	"7003": "Failed to init builtin asset's raw path.",
      	"7100": "%s already defined in Enum.",
      	"7101": "Sorry, 'cc.Enum' not available on this platform, please report this error here: https://github.com/cocos-creator/engine/issues/new",
      	"7200": "Method 'initWithTMXFile' is no effect now, please set property 'tmxAsset' instead.",
      	"7201": "Method 'initWithXML' is no effect now, please set property 'tmxAsset' instead.",
      	"7202": "Add component TiledLayer into node failed.",
      	"7203": "Property 'mapLoaded' is unused now. Please write the logic to the callback 'start'.",
      	"7210": "TMX Hexa zOrder not supported",
      	"7211": "TMX invalid value",
      	"7214": "propertiesForGID is deprecated. Please use getPropertiesForGID instead.",
      	"7215": "cocos2d: Warning: TMX Layer %s has no tiles",
      	"7216": "cocos2d: TMXFormat: Unsupported TMX version: %s",
      	"7217": "cocos2d: TMXFomat: Unsupported orientation: %s",
      	"7218": "cc.TMXMapInfo.parseXMLFile(): unsupported compression method",
      	"7219": "cc.TMXMapInfo.parseXMLFile(): Only base64 and/or gzip/zlib maps are supported",
      	"7221": "cc.TMXMapInfo.parseXMLFile(): Texture '%s' not found.",
      	"7222": "Parse %s failed.",
      	"7236": "cc.TMXLayer.getTileAt(): TMXLayer: the tiles map has been released",
      	"7237": "cc.TMXLayer.getTileGIDAt(): TMXLayer: the tiles map has been released",
      	"7238": "cc.TMXLayer.setTileGID(): TMXLayer: the tiles map has been released",
      	"7239": "cc.TMXLayer.setTileGID(): invalid gid: %s",
      	"7240": "cc.TMXLayer.getTileFlagsAt(): TMXLayer: the tiles map has been released",
      	"7241": "cc.TiledMap.initWithXML(): Map not found. Please check the filename.",
      	"7401": "Failed to set _defaultArmatureIndex for '%s' because the index is out of range.",
      	"7402": "Failed to set _animationIndex for '%s' because the index is out of range.",
      	"7501": "Failed to set _defaultSkinIndex for '%s' because the index is out of range.",
      	"7502": "Failed to set _animationIndex for '%s' because its skeletonData is invalid.",
      	"7503": "Failed to set _animationIndex for '%s' because the index is out of range.",
      	"7504": "Can not render dynamic created SkeletonData",
      	"7505": "Invalid type of atlasFile, atlas should be registered as raw asset.",
      	"7506": "Failed to load spine atlas '$s'",
      	"7507": "Please re-import '%s' because its textures is not initialized! (This workflow will be improved in the future.)",
      	"7508": "The atlas asset of '%s' is not exists!",
      	"7509": "Spine: Animation not found: %s",
      	"7510": "Spine: Animation not found: %s",
      	"7600": "The context of RenderTexture is invalid.",
      	"7601": "cc.RenderTexture._initWithWidthAndHeightForWebGL() : only RGB and RGBA formats are valid for a render texture;",
      	"7602": "Could not attach texture to the framebuffer",
      	"7603": "clearDepth isn't supported on Cocos2d-Html5",
      	"7604": "saveToFile isn't supported on Cocos2d-Html5",
      	"7605": "newCCImage isn't supported on Cocos2d-Html5",
      	"7700": "On the web is always keep the aspect ratio",
      	"7701": "Can't know status",
      	"7702": "Video player's duration is not ready to get now!",
      	"7800": "Web does not support loading",
      	"7801": "Web does not support query history",
      	"7802": "Web does not support query history",
      	"7803": "The current browser does not support the GoBack",
      	"7804": "The current browser does not support the GoForward",
      	"7805": "Web does not support zoom",
      	"7900": "cc.math.Matrix3.assign(): current matrix equals matIn",
      	"7901": "cc.math.mat4Assign(): pOut equals pIn",
      	"7902": "cc.mat.Matrix4.assignFrom(): mat4 equals current matrix",
      	"7903": "cc.math.Matrix4 equal: pMat1 and pMat2 are same object.",
      	"7904": "cc.math.Matrix4.extractPlane: Invalid plane index",
      	"7905": "cc.math.mat4Assign(): pOut equals pIn",
      	"7906": "cc.mat.Matrix4.assignFrom(): mat4 equals current matrix",
      	"7907": "cc.math.Matrix4 equals: pMat1 and pMat2 are same object.",
      	"7908": "Invalid matrix mode specified",
      	"7909": "current quaternion is an invalid value",
      	"8000": "Can't handle this field type or size",
      	"8001": "No bytes requested",
      	"8002": "Too many bytes requested",
      	"8003": "Missing StripByteCounts!",
      	"8100": "cocos2d: ERROR: Failed to compile shader:\n %s",
      	"8101": "cocos2d: ERROR: Failed to compile vertex shader",
      	"8102": "cocos2d: ERROR: Failed to compile fragment shader",
      	"8103": "cc.GLProgram.link(): Cannot link invalid program",
      	"8104": "cocos2d: ERROR: Failed to link program: %s",
      	"8105": "cocos2d: cc.shaderCache._loadDefaultShader, error shader type",
      	"8106": "Please load the resource firset : %s",
      	"8107": "cc.GLProgram.getUniformLocationForName(): uniform name should be non-null",
      	"8108": "cc.GLProgram.getUniformLocationForName(): Invalid operation. Cannot get uniform location when program is not initialized",
      	"8109": "modelView matrix is undefined.",
      	"8200": "Please set node's active instead of rigidbody's enabled.",
      	"8300": "Should only one camera exists, please check your project.",
      	"8301": "Camera does not support Canvas Mode.",
      	"8400": "Wrong type arguments, 'filePath' must be a String.",
      	"8401": "Since 1.10, `%s` accept %s instance directly, not a URL string. Please directly reference the %s object in your script, or load %s by loader first. Don't use %s's URL anymore.",
      	"9000": "Stencil manager does not support level bigger than %d in this device.",
      	"9001": "Stencil manager is already empty, cannot pop any mask",
      	"9100": "texture size exceeds current device limits %d/%d",
      	"9200": "Priority can't be set in Canvas node",
      	"9300": "The current buffer beyond the limit in ui static component, please reduce the amount",
      	"9301": "The UI has not been initialized",
      	"9302": "Can't getGFXSampler with out device",
      	"9600": "[Physics]: please check to see if physics modules are included",
      	"9610": "[Physics]: cannon.js physics system doesn't support capsule collider",
      	"9611": "[Physics]: builtin physics system doesn't support mesh collider",
      	"9612": "[Physics]: builtin physics system doesn't support cylinder collider",
      	"9620": "[Physics][Ammo]: changing the mesh is not supported after the initialization is completed",
      	"10001": "The sub-mesh contains %d vertices, which beyonds the capability (%d vertices most) of renderer of your platform.",
      	"10002": "Sub-mesh may include at most %d morph targets, but you specified %d.",
      	"11000": "WebGL context lost.",
      	"0100": "%s not yet implemented.",
      	"0200": "You should specify a valid DOM canvas element."
      };

      const EDITOR = exports('a$', false);
      const PREVIEW = false;
      const BUILD = true;
      const TEST = exports('bj', false);
      const WECHAT = exports('bI', false);
      const ALIPAY = false;
      const BAIDU = false;
      const XIAOMI = false;
      const BYTEDANCE = false;
      const OPPO = false;
      const VIVO = false;
      const HUAWEI = false;
      const COCOSPLAY = false;
      const DEBUG = exports('bu', true);
      const RUNTIME_BASED = exports('bB', false);
      const MINIGAME = exports('bC', false);
      const DEV = false;
      const JSB = exports('bA', false);
      const SUPPORT_JIT = true;

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

      var _global = typeof window === 'undefined' ? global : window;
      /**
       * @en
       * The main namespace of Cocos2d-JS, all engine core classes, functions, properties and constants are defined in this namespace.
       * @zh
       * Cocos 引擎的主要命名空间，引擎代码中所有的类，函数，属性和常量都在这个命名空间中定义。
       * @deprecated
       */


      var legacyCC = exports('l', {
        _global: _global
      }); // For internal usage

      legacyCC.internal = {};

      {
        // Supports dynamically access from external scripts such as adapters and debugger.
        // So macros should still defined in global even if inlined in engine.

        /**
         * @en The pre-compilation constant for code tree shaking: CC_BUILD (Available for built package)
         * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_BUILD（在构建后生效）
         */
        _global.CC_BUILD = BUILD;
        /**
         * @en The pre-compilation constant for code tree shaking: CC_TEST (Available for ci test environment)
         * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_TEST（在 CI 测试环境下生效）
         */

        _global.CC_TEST = TEST;
        /**
         * @en The pre-compilation constant for code tree shaking: CC_EDITOR (Available for editor environment)
         * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_EDITOR（在编辑器环境下生效）
         */

        _global.CC_EDITOR = EDITOR;
        /**
         * @en The pre-compilation constant for code tree shaking: CC_PREVIEW (Available for preview)
         * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_PREVIEW（预览时生效）
         */

        _global.CC_PREVIEW = PREVIEW;
        /**
         * @en The pre-compilation constant for code tree shaking: CC_DEV (Internal)
         * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_DEV（内部使用）
         */

        _global.CC_DEV = DEV;
        /**
         * @en The pre-compilation constant for code tree shaking: CC_DEBUG (Available for debug environment)
         * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_DEBUG（在调试模式下生效）
         */

        _global.CC_DEBUG = DEBUG;
        /**
         * @en The pre-compilation constant for code tree shaking: CC_JSB (Available for native application environment)
         * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_JSB（在原生应用环境下生效）
         */

        _global.CC_JSB = JSB;
        /**
         * @en The pre-compilation constant for code tree shaking: CC_BYTEDANCE (Available for Bytedance platform)
         * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_BYTEDANCE（在字节平台上生效）
         */

        _global.CC_BYTEDANCE = BYTEDANCE;
        /**
         * @en The pre-compilation constant for code tree shaking: CC_WECHAT (Available for Wechat mini game platform)
         * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_WECHAT（在微信小游戏平台上生效）
         */

        _global.CC_WECHAT = WECHAT;
        /**
         * @en The pre-compilation constant for code tree shaking: CC_ALIPAY (Available for Alipay mini game platform)
         * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_ALIPAY（在支付宝小游戏平台上生效）
         */

        _global.CC_ALIPAY = ALIPAY;
        /**
         * @en The pre-compilation constant for code tree shaking: CC_XIAOMI (Available for MI mini game platform)
         * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_XIAOMI（在小米小游戏平台上生效）
         */

        _global.CC_XIAOMI = XIAOMI;
        /**
         * @en The pre-compilation constant for code tree shaking: CC_BAIDU (Available for Baidu mini game platform)
         * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_BAIDU（在百度小游戏平台上生效）
         */

        _global.CC_BAIDU = BAIDU;
        /**
         * @en The pre-compilation constant for code tree shaking: CC_COCOSPLAY (Available for Cocos Play platform)
         * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_COCOSPLAY（在 CocosPlay 小游戏平台上生效）
         */

        _global.CC_COCOSPLAY = COCOSPLAY;
        /**
         * @en The pre-compilation constant for code tree shaking: CC_HUAWEI (Available for Huawei mini game platform)
         * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_HUAWEI（在华为快游戏平台上生效）
         */

        _global.CC_HUAWEI = HUAWEI;
        /**
         * @en The pre-compilation constant for code tree shaking: CC_OPPO (Available for OPPO mini game platform)
         * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_OPPO（在 OPPO 小游戏平台上生效）
         */

        _global.CC_OPPO = OPPO;
        /**
         * @en The pre-compilation constant for code tree shaking: CC_VIVO (Available for Vivo mini game platform)
         * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_VIVO（在 Vivo 小游戏平台上生效）
         */

        _global.CC_VIVO = VIVO;
        /**
         * @en The pre-compilation constant for code tree shaking: CC_MINIGAME (Available for general mini game platforms)
         * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_MINIGAME（在各个小游戏平台上生效）
         */

        _global.CC_MINIGAME = MINIGAME;
        /**
         * @en The pre-compilation constant for code tree shaking: CC_RUNTIME_BASED (Available for Huawei, OPPO, Vivo and Cocos Play)
         * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_RUNTIME_BASED（在华为、OPPO、Vivo 和 CocosPlay 平台上生效）
         */

        _global.CC_RUNTIME_BASED = RUNTIME_BASED;
        /**
         * @en The pre-compilation constant for code tree shaking: CC_SUPPORT_JIT (Available for platforms support JIT)
         * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_SUPPORT_JIT（在支持 JIT 的平台上生效）
         */

        _global.CC_SUPPORT_JIT = SUPPORT_JIT;
      }

      var engineVersion = '1.2.0';
      /**
       * The current version of Cocos2d being used.<br/>
       * Please DO NOT remove this String, it is an important flag for bug tracking.<br/>
       * If you post a bug to forum, please attach this flag.
       */

      _global.CocosEngine = legacyCC.ENGINE_VERSION = engineVersion;
      _global.cc = legacyCC;

      /*
       Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

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

      var logList = null;
      var ccLog = console.log;
      var ccWarn = console.log;
      var ccError = console.log;

      var ccAssert = function ccAssert(condition, message) {
        if (!condition) {
          for (var _len = arguments.length, optionalParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            optionalParams[_key - 2] = arguments[_key];
          }

          console.log('ASSERT: ' + formatString.apply(void 0, [message].concat(optionalParams)));
        }
      };

      function formatString(message) {
        for (var _len2 = arguments.length, optionalParams = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          optionalParams[_key2 - 1] = arguments[_key2];
        }

        return legacyCC.js.formatStr.apply(null, [message].concat(optionalParams));
      }
      /**
       * @en Outputs a message to the Cocos Creator Console (editor) or Web Console (runtime).
       * @zh 输出一条消息到 Cocos Creator 编辑器的 Console 或运行时 Web 端的 Console 中。
       * @param message - A JavaScript string containing zero or more substitution strings.
       * @param optionalParams - JavaScript objects with which to replace substitution strings within msg.
       * This gives you additional control over the format of the output.
       */


      function log(message) {
        for (var _len3 = arguments.length, optionalParams = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          optionalParams[_key3 - 1] = arguments[_key3];
        }

        return ccLog.apply(void 0, [message].concat(optionalParams));
      }
      /**
       * @en
       * Outputs a warning message to the Cocos Creator Console (editor) or Web Console (runtime).
       * - In Cocos Creator, warning is yellow.
       * - In Chrome, warning have a yellow warning icon with the message text.
       * @zh
       * 输出警告消息到 Cocos Creator 编辑器的 Console 或运行时 Web 端的 Console 中。<br/>
       * - 在 Cocos Creator 中，警告信息显示是黄色的。<br/>
       * - 在 Chrome 中，警告信息有着黄色的图标以及黄色的消息文本。<br/>
       * @param message - A JavaScript string containing zero or more substitution strings.
       * @param optionalParams - JavaScript objects with which to replace substitution strings within msg.
       * This gives you additional control over the format of the output.
       */

      function warn(message) {
        for (var _len4 = arguments.length, optionalParams = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          optionalParams[_key4 - 1] = arguments[_key4];
        }

        return ccWarn.apply(void 0, [message].concat(optionalParams));
      }
      /**
       * @en
       * Outputs an error message to the Cocos Creator Console (editor) or Web Console (runtime).<br/>
       * - In Cocos Creator, error is red.<br/>
       * - In Chrome, error have a red icon along with red message text.<br/>
       * @zh
       * 输出错误消息到 Cocos Creator 编辑器的 Console 或运行时页面端的 Console 中。<br/>
       * - 在 Cocos Creator 中，错误信息显示是红色的。<br/>
       * - 在 Chrome 中，错误信息有红色的图标以及红色的消息文本。<br/>
       * @param message - A JavaScript string containing zero or more substitution strings.
       * @param optionalParams - JavaScript objects with which to replace substitution strings within msg.
       * This gives you additional control over the format of the output.
       */

      function error(message) {
        for (var _len5 = arguments.length, optionalParams = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
          optionalParams[_key5 - 1] = arguments[_key5];
        }

        return ccError.apply(void 0, [message].concat(optionalParams));
      }
      /**
       * @en
       * Assert the condition and output error messages if the condition is not true.
       * @zh
       * 对检查测试条件进行检查，如果条件不为 true 则输出错误消息
       * @param value - The condition to check on
       * @param message - A JavaScript string containing zero or more substitution strings.
       * @param optionalParams - JavaScript objects with which to replace substitution strings within msg.
       * This gives you additional control over the format of the output.
       */

      function assert(value, message) {
        for (var _len6 = arguments.length, optionalParams = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
          optionalParams[_key6 - 2] = arguments[_key6];
        }

        return ccAssert.apply(void 0, [value, message].concat(optionalParams));
      }
      function _resetDebugSetting(mode) {
        // reset
        ccLog = ccWarn = ccError = ccAssert = function ccAssert() {};

        if (mode === DebugMode.NONE) {
          return;
        }

        if (mode > DebugMode.ERROR) {
          // Log to web page.
          var logToWebPage = function logToWebPage(msg) {
            if (!legacyCC.game.canvas) {
              return;
            }

            if (!logList) {
              var logDiv = document.createElement('Div');
              logDiv.setAttribute('id', 'logInfoDiv');
              logDiv.setAttribute('width', '200');
              logDiv.setAttribute('height', legacyCC.game.canvas.height);
              var logDivStyle = logDiv.style;
              logDivStyle.zIndex = '99999';
              logDivStyle.position = 'absolute';
              logDivStyle.top = logDivStyle.left = '0';
              logList = document.createElement('textarea');
              logList.setAttribute('rows', '20');
              logList.setAttribute('cols', '30');
              logList.setAttribute('disabled', 'true');
              var logListStyle = logList.style;
              logListStyle.backgroundColor = 'transparent';
              logListStyle.borderBottom = '1px solid #cccccc';
              logListStyle.borderTopWidth = logListStyle.borderLeftWidth = logListStyle.borderRightWidth = '0px';
              logListStyle.borderTopStyle = logListStyle.borderLeftStyle = logListStyle.borderRightStyle = 'none';
              logListStyle.padding = '0px';
              logListStyle.margin = '0px';
              logDiv.appendChild(logList);
              legacyCC.game.canvas.parentNode.appendChild(logDiv);
            }

            logList.value = logList.value + msg + '\r\n';
            logList.scrollTop = logList.scrollHeight;
          };

          ccError = function ccError(message) {
            for (var _len7 = arguments.length, optionalParams = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
              optionalParams[_key7 - 1] = arguments[_key7];
            }

            logToWebPage('ERROR :  ' + formatString.apply(void 0, [message].concat(optionalParams)));
          };

          ccAssert = function ccAssert(condition, message) {
            if (!condition) {
              for (var _len8 = arguments.length, optionalParams = new Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
                optionalParams[_key8 - 2] = arguments[_key8];
              }

              logToWebPage('ASSERT: ' + formatString.apply(void 0, [message].concat(optionalParams)));
            }
          };

          if (mode !== DebugMode.ERROR_FOR_WEB_PAGE) {
            ccWarn = function ccWarn(message) {
              for (var _len9 = arguments.length, optionalParams = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
                optionalParams[_key9 - 1] = arguments[_key9];
              }

              logToWebPage('WARN :  ' + formatString.apply(void 0, [message].concat(optionalParams)));
            };
          }

          if (mode === DebugMode.INFO_FOR_WEB_PAGE) {
            ccLog = function ccLog(message) {
              for (var _len10 = arguments.length, optionalParams = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
                optionalParams[_key10 - 1] = arguments[_key10];
              }

              logToWebPage(formatString.apply(void 0, [message].concat(optionalParams)));
            };
          }
        } else if (console && console.log.apply) {
          // console is null when user doesn't open dev tool on IE9
          // Log to console.
          // For JSB
          if (!console.error) {
            console.error = console.log;
          }

          if (!console.warn) {
            console.warn = console.log;
          }

          if ( console.error.bind) {
            // use bind to avoid pollute call stacks
            ccError = console.error.bind(console);
          } else {
            ccError =  function (message) {
              for (var _len11 = arguments.length, optionalParams = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
                optionalParams[_key11 - 1] = arguments[_key11];
              }

              return console.error.apply(console, [message].concat(optionalParams));
            };
          }

          ccAssert = function ccAssert(condition, message) {
            if (!condition) {
              for (var _len12 = arguments.length, optionalParams = new Array(_len12 > 2 ? _len12 - 2 : 0), _key12 = 2; _key12 < _len12; _key12++) {
                optionalParams[_key12 - 2] = arguments[_key12];
              }

              var errorText = formatString.apply(void 0, [message].concat(optionalParams));

              {
                throw new Error(errorText);
              }
            }
          };
        }

        if (mode !== DebugMode.ERROR) {
          if (console.warn.bind) {
            // use bind to avoid pollute call stacks
            ccWarn = console.warn.bind(console);
          } else {
            ccWarn =  function (message) {
              for (var _len13 = arguments.length, optionalParams = new Array(_len13 > 1 ? _len13 - 1 : 0), _key13 = 1; _key13 < _len13; _key13++) {
                optionalParams[_key13 - 1] = arguments[_key13];
              }

              return console.warn.apply(console, [message].concat(optionalParams));
            };
          }
        }

        if (mode === DebugMode.INFO) {
          if (console.log.bind) {
            // use bind to avoid pollute call stacks
            ccLog = console.log.bind(console);
          } else {
            ccLog = function ccLog(message) {
              for (var _len15 = arguments.length, optionalParams = new Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
                optionalParams[_key15 - 1] = arguments[_key15];
              }

              return console.log.apply(console, [message].concat(optionalParams));
            };
          }
        }
      }
      function _throw(error_) {
        {
          var stack = error_.stack;

          if (stack) {
            error( stack);
          } else {
            error(error_);
          }
        }
      }

      function getTypedFormatter(type) {
        return function (id) {
          var msg =  debugInfos[id] || 'unknown id' ;

          for (var _len16 = arguments.length, args = new Array(_len16 > 1 ? _len16 - 1 : 0), _key16 = 1; _key16 < _len16; _key16++) {
            args[_key16 - 1] = arguments[_key16];
          }

          if (args.length === 0) {
            return msg;
          }

          return  formatString.apply(void 0, [msg].concat(args)) ;
        };
      }

      var logFormatter = getTypedFormatter();
      function logID(id) {
        for (var _len17 = arguments.length, optionalParams = new Array(_len17 > 1 ? _len17 - 1 : 0), _key17 = 1; _key17 < _len17; _key17++) {
          optionalParams[_key17 - 1] = arguments[_key17];
        }

        log(logFormatter.apply(void 0, [id].concat(optionalParams)));
      }
      var warnFormatter = getTypedFormatter();
      function warnID(id) {
        for (var _len18 = arguments.length, optionalParams = new Array(_len18 > 1 ? _len18 - 1 : 0), _key18 = 1; _key18 < _len18; _key18++) {
          optionalParams[_key18 - 1] = arguments[_key18];
        }

        warn(warnFormatter.apply(void 0, [id].concat(optionalParams)));
      }
      var errorFormatter = getTypedFormatter();
      function errorID(id) {
        for (var _len19 = arguments.length, optionalParams = new Array(_len19 > 1 ? _len19 - 1 : 0), _key19 = 1; _key19 < _len19; _key19++) {
          optionalParams[_key19 - 1] = arguments[_key19];
        }

        error(errorFormatter.apply(void 0, [id].concat(optionalParams)));
      }
      var assertFormatter = getTypedFormatter();
      function assertID(condition, id) {
        if (condition) {
          return;
        }

        for (var _len20 = arguments.length, optionalParams = new Array(_len20 > 2 ? _len20 - 2 : 0), _key20 = 2; _key20 < _len20; _key20++) {
          optionalParams[_key20 - 2] = arguments[_key20];
        }

        assert(false, assertFormatter.apply(void 0, [id].concat(optionalParams)));
      }
      /**
       * @en Enum for debug modes.
       * @zh 调试模式
       */

      var DebugMode;
      /**
       * @en Gets error message with the error id and possible parameters.
       * @zh 通过 error id 和必要的参数来获取错误信息。
       */

      (function (DebugMode) {
        DebugMode[DebugMode["NONE"] = 0] = "NONE";
        DebugMode[DebugMode["INFO"] = 1] = "INFO";
        DebugMode[DebugMode["WARN"] = 2] = "WARN";
        DebugMode[DebugMode["ERROR"] = 3] = "ERROR";
        DebugMode[DebugMode["INFO_FOR_WEB_PAGE"] = 4] = "INFO_FOR_WEB_PAGE";
        DebugMode[DebugMode["WARN_FOR_WEB_PAGE"] = 5] = "WARN_FOR_WEB_PAGE";
        DebugMode[DebugMode["ERROR_FOR_WEB_PAGE"] = 6] = "ERROR_FOR_WEB_PAGE";
      })(DebugMode || (DebugMode = {}));

      function getError(errorId) {
        for (var _len21 = arguments.length, param = new Array(_len21 > 1 ? _len21 - 1 : 0), _key21 = 1; _key21 < _len21; _key21++) {
          param[_key21 - 1] = arguments[_key21];
        }

        return errorFormatter.apply(void 0, [errorId].concat(param));
      }
      /**
       * @en Returns whether or not to display the FPS and debug information.
       * @zh 是否显示 FPS 信息和部分调试信息。
       */

      function isDisplayStats() {
        return legacyCC.profiler ? legacyCC.profiler.isShowingStats() : false;
      }
      /**
       * @en Sets whether display the FPS and debug informations on the bottom-left corner.
       * @zh 设置是否在左下角显示 FPS 和部分调试。
       */

      function setDisplayStats(displayStats) {
        if (legacyCC.profiler) {
          displayStats ? legacyCC.profiler.showStats() : legacyCC.profiler.hideStats();
          legacyCC.game.config.showFPS = !!displayStats;
        }
      }

      var debug = /*#__PURE__*/Object.freeze({
        __proto__: null,
        log: log,
        warn: warn,
        error: error,
        assert: assert,
        _resetDebugSetting: _resetDebugSetting,
        _throw: _throw,
        logID: logID,
        warnID: warnID,
        errorID: errorID,
        assertID: assertID,
        get DebugMode () { return DebugMode; },
        getError: getError,
        isDisplayStats: isDisplayStats,
        setDisplayStats: setDisplayStats
      });
      exports('B', debug);

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
       * @category core
       */

      /**
       * @example
       * ```
       * import { js } from 'cc';
       * var array = [0, 1, 2, 3, 4];
       * var iterator = new js.array.MutableForwardIterator(array);
       * for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
       *     var item = array[iterator.i];
       *     ...
       * }
       * ```
       */
      var MutableForwardIterator = exports('bz', /*#__PURE__*/function () {
        function MutableForwardIterator(array) {
          _classCallCheck(this, MutableForwardIterator);

          this.i = 0;
          this.array = array;
        }

        _createClass(MutableForwardIterator, [{
          key: "remove",
          value: function remove(value) {
            var index = this.array.indexOf(value);

            if (index >= 0) {
              this.removeAt(index);
            }
          }
        }, {
          key: "removeAt",
          value: function removeAt(i) {
            this.array.splice(i, 1);

            if (i <= this.i) {
              --this.i;
            }
          }
        }, {
          key: "fastRemove",
          value: function fastRemove(value) {
            var index = this.array.indexOf(value);

            if (index >= 0) {
              this.fastRemoveAt(index);
            }
          }
        }, {
          key: "fastRemoveAt",
          value: function fastRemoveAt(i) {
            var array = this.array;
            array[i] = array[array.length - 1];
            --array.length;

            if (i <= this.i) {
              --this.i;
            }
          }
        }, {
          key: "push",
          value: function push(item) {
            this.array.push(item);
          }
        }, {
          key: "length",
          get: function get() {
            return this.array.length;
          },
          set: function set(value) {
            this.array.length = value;

            if (this.i >= value) {
              this.i = value - 1;
            }
          }
        }]);

        return MutableForwardIterator;
      }());

      /**
       * @zh
       * 移除指定索引的数组元素。
       * @en
       * Removes the array item at the specified index.
       * @param array 数组。
       * @param index 待移除元素的索引。
       */

      function removeAt(array, index) {
        array.splice(index, 1);
      }
      /**
       * @zh
       * 移除指定索引的数组元素。
       * 此函数十分高效，但会改变数组的元素次序。
       * @en
       * Removes the array item at the specified index.
       * It's faster but the order of the array will be changed.
       * @param array 数组。
       * @param index 待移除元素的索引。
       */

      function fastRemoveAt(array, index) {
        var length = array.length;

        if (index < 0 || index >= length) {
          return;
        }

        array[index] = array[length - 1];
        array.length = length - 1;
      }
      /**
       * @zh
       * 移除首个指定的数组元素。判定元素相等时相当于于使用了 `Array.prototype.indexOf`。
       * @en
       * Removes the first occurrence of a specific object from the array.
       * Decision of the equality of elements is similar to `Array.prototype.indexOf`.
       * @param array 数组。
       * @param value 待移除元素。
       */

      function remove(array, value) {
        var index = array.indexOf(value);

        if (index >= 0) {
          removeAt(array, index);
          return true;
        } else {
          return false;
        }
      }
      /**
       * @zh
       * 移除首个指定的数组元素。判定元素相等时相当于于使用了 `Array.prototype.indexOf`。
       * 此函数十分高效，但会改变数组的元素次序。
       * @en
       * Removes the first occurrence of a specific object from the array.
       * Decision of the equality of elements is similar to `Array.prototype.indexOf`.
       * It's faster but the order of the array will be changed.
       * @param array 数组。
       * @param value 待移除元素。
       */

      function fastRemove(array, value) {
        var index = array.indexOf(value);

        if (index >= 0) {
          array[index] = array[array.length - 1];
          --array.length;
        }
      }
      /**
       * @zh
       * 移除首个使谓词满足的数组元素。
       * @en
       * Removes the first occurrence of a specific object from the array where `predicate` is `true`.
       * @param array 数组。
       * @param predicate 谓词。
       */

      function removeIf(array, predicate) {
        var index = array.findIndex(predicate);

        if (index >= 0) {
          var _value = array[index];
          removeAt(array, index);
          return _value;
        }
      }
      /**
       * @zh
       * 验证数组的类型。
       * 此函数将用 `instanceof` 操作符验证每一个元素。
       * @en
       * Verify array's Type.
       * This function tests each element using `instanceof` operator.
       * @param array 数组。
       * @param type 类型。
       * @returns 当每一个元素都是指定类型时返回 `true`，否则返回 `false`。
       */

      function verifyType(array, type) {
        if (array && array.length > 0) {
          for (var _iterator = _createForOfIteratorHelperLoose(array), _step; !(_step = _iterator()).done;) {
            var item = _step.value;

            if (!(item instanceof type)) {
              logID(1300);
              return false;
            }
          }
        }

        return true;
      }
      /**
       * @zh
       * 移除多个数组元素。
       * @en
       * Removes multiple array elements.
       * @param array 源数组。
       * @param removals 所有待移除的元素。此数组的每个元素所对应的首个源数组的元素都会被移除。
       */

      function removeArray(array, removals) {
        for (var i = 0, l = removals.length; i < l; i++) {
          remove(array, removals[i]);
        }
      }
      /**
       * @zh
       * 在数组的指定索引上插入对象。
       * @en
       * Inserts some objects at specified index.
       * @param array 数组。
       * @param objects 插入的所有对象。
       * @param index 插入的索引。
       * @returns `array`。
       */

      function appendObjectsAt(array, objects, index) {
        array.splice.apply(array, [index, 0].concat(_toConsumableArray(objects)));
        return array;
      }
      /**
       * @zh
       * 返回数组是否包含指定的元素。
       * @en
       * Determines whether the array contains a specific element.
       * @returns 返回数组是否包含指定的元素。
       */

      function contains(array, value) {
        // eslint-disable-next-line @typescript-eslint/prefer-includes
        return array.indexOf(value) >= 0;
      }
      /**
       * @zh
       * 拷贝数组。
       * @en
       * Copy an array.
       * @param 源数组。
       * @returns 数组的副本。
       */

      function copy(array) {
        var len = array.length;
        var cloned = new Array(len);

        for (var i = 0; i < len; i += 1) {
          cloned[i] = array[i];
        }

        return cloned;
      }

      var jsarray = /*#__PURE__*/Object.freeze({
        __proto__: null,
        removeAt: removeAt,
        fastRemoveAt: fastRemoveAt,
        remove: remove,
        fastRemove: fastRemove,
        removeIf: removeIf,
        verifyType: verifyType,
        removeArray: removeArray,
        appendObjectsAt: appendObjectsAt,
        contains: contains,
        copy: copy,
        MutableForwardIterator: MutableForwardIterator
      });

      var NonUuidMark = '.';
      /**
       * ID generator for runtime.
       */

      var IDGenerator = exports('aO', /*#__PURE__*/function () {
        /*
        * The global id generator might have a conflict problem once every 365 days,
        * if the game runs at 60 FPS and each frame 4760273 counts of new id are requested.
        */

        /**
         * @param [category] You can specify a unique category to avoid id collision with other instance of IdGenerator.
         */
        function IDGenerator(category) {
          _classCallCheck(this, IDGenerator);

          this.id = void 0;
          this.prefix = void 0;
          // Tnit with a random id to emphasize that the returns id should not be stored in persistence data.
          this.id = 0 | Math.random() * 998;
          this.prefix = category ? category + NonUuidMark : '';
        }

        _createClass(IDGenerator, [{
          key: "getNewId",
          value: function getNewId() {

            return this.prefix + ++this.id;
          }
        }]);

        return IDGenerator;
      }());

      IDGenerator.global = new IDGenerator('global');

      var tempCIDGenerator = new IDGenerator('TmpCId.');
      var aliasesTag = typeof Symbol === 'undefined' ? '__aliases__' : Symbol('[[Aliases]]');
      var classNameTag = '__classname__';
      var classIdTag = '__cid__';
      /**
       * Check the object whether is number or not
       * If a number is created by using 'new Number(10086)', the typeof it will be "object"...
       * Then you can use this function if you care about this case.
       */

      function isNumber(object) {
        return typeof object === 'number' || object instanceof Number;
      }
      /**
       * Check the object whether is string or not.
       * If a string is created by using 'new String("blabla")', the typeof it will be "object"...
       * Then you can use this function if you care about this case.
       */

      function isString(object) {
        return typeof object === 'string' || object instanceof String;
      }
      /**
       * Define value, just help to call Object.defineProperty.<br>
       * The configurable will be true.
       * @param [writable=false]
       * @param [enumerable=false]
       */

      var value = exports('bm', function () {
        var descriptor = {
          value: undefined,
          enumerable: false,
          writable: false,
          configurable: true
        };
        return function (object, propertyName, value_, writable, enumerable) {
          descriptor.value = value_;
          descriptor.writable = writable;
          descriptor.enumerable = enumerable;
          Object.defineProperty(object, propertyName, descriptor);
          descriptor.value = undefined;
        };
      }());
      /**
       * Define get set accessor, just help to call Object.defineProperty(...).
       * @param [setter=null]
       * @param [enumerable=false]
       * @param [configurable=false]
       */

      var getset = function () {
        var descriptor = {
          get: undefined,
          set: undefined,
          enumerable: false
        };
        return function (object, propertyName, getter, setter) {
          var enumerable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
          var configurable = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

          if (typeof setter === 'boolean') {
            enumerable = setter;
            setter = undefined;
          }

          descriptor.get = getter;
          descriptor.set = setter;
          descriptor.enumerable = enumerable;
          descriptor.configurable = configurable;
          Object.defineProperty(object, propertyName, descriptor);
          descriptor.get = undefined;
          descriptor.set = undefined;
        };
      }();
      /**
       * Define get accessor, just help to call Object.defineProperty(...).
       * @param [enumerable=false]
       * @param [configurable=false]
       */

      var get = function () {
        var descriptor = {
          get: undefined,
          enumerable: false,
          configurable: false
        };
        return function (object, propertyName, getter, enumerable, configurable) {
          descriptor.get = getter;
          descriptor.enumerable = enumerable;
          descriptor.configurable = configurable;
          Object.defineProperty(object, propertyName, descriptor);
          descriptor.get = undefined;
        };
      }();
      /**
       * Define set accessor, just help to call Object.defineProperty(...).
       * @param [enumerable=false]
       * @param [configurable=false]
       */

      var set$1 = function () {
        var descriptor = {
          set: undefined,
          enumerable: false,
          configurable: false
        };
        return function (object, propertyName, setter, enumerable, configurable) {
          descriptor.set = setter;
          descriptor.enumerable = enumerable;
          descriptor.configurable = configurable;
          Object.defineProperty(object, propertyName, descriptor);
          descriptor.set = undefined;
        };
      }();
      /**
       * @en
       * A simple wrapper of `Object.create(null)` which ensures the return object have no prototype (and thus no inherited members).
       * So we can skip `hasOwnProperty` calls on property lookups.
       * It is a worthwhile optimization than the `{}` literal when `hasOwnProperty` calls are necessary.
       * @zh
       * 该方法是对 `Object.create(null)` 的简单封装。
       * `Object.create(null)` 用于创建无 prototype （也就无继承）的空对象。
       * 这样我们在该对象上查找属性时，就不用进行 `hasOwnProperty` 判断。
       * 在需要频繁判断 `hasOwnProperty` 时，使用这个方法性能会比 `{}` 更高。
       *
       * @param [forceDictMode=false] Apply the delete operator to newly created map object.
       * This causes V8 to put the object in "dictionary mode" and disables creation of hidden classes
       * which are very expensive for objects that are constantly changing shape.
       */

      function createMap(forceDictMode) {
        var map = Object.create(null);

        if (forceDictMode) {
          var INVALID_IDENTIFIER_1 = '.';
          var INVALID_IDENTIFIER_2 = '/';
          map[INVALID_IDENTIFIER_1] = true;
          map[INVALID_IDENTIFIER_2] = true;
          delete map[INVALID_IDENTIFIER_1];
          delete map[INVALID_IDENTIFIER_2];
        }

        return map;
      }
      /**
       * Get class name of the object, if object is just a {} (and which class named 'Object'), it will return "".
       * (modified from <a href="http://stackoverflow.com/questions/1249531/how-to-get-a-javascript-objects-class">the code from this stackoverflow post</a>)
       * @param objOrCtor instance or constructor
       */

      function getClassName(objOrCtor) {
        if (typeof objOrCtor === 'function') {
          var prototype = objOrCtor.prototype;

          if (prototype && prototype.hasOwnProperty(classNameTag) && prototype[classNameTag]) {
            return prototype[classNameTag];
          }

          var retval = ''; //  for browsers which have name property in the constructor of the object, such as chrome

          if (objOrCtor.name) {
            retval = objOrCtor.name;
          }

          if (objOrCtor.toString) {
            var arr;
            var str = objOrCtor.toString();

            if (str.charAt(0) === '[') {
              // str is "[object objectClass]"
              arr = str.match(/\[\w+\s*(\w+)\]/);
            } else {
              // str is function objectClass () {} for IE Firefox
              arr = str.match(/function\s*(\w+)/);
            }

            if (arr && arr.length === 2) {
              retval = arr[1];
            }
          }

          return retval !== 'Object' ? retval : '';
        } else if (objOrCtor && objOrCtor.constructor) {
          return getClassName(objOrCtor.constructor);
        }

        return '';
      }
      /**
       * Defines a polyfill field for obsoleted codes.
       * @param object - YourObject or YourClass.prototype
       * @param obsoleted - "OldParam" or "YourClass.OldParam"
       * @param newExpr - "NewParam" or "YourClass.NewParam"
       * @param  [writable=false]
       */

      function obsolete(object, obsoleted, newExpr, writable) {
        var extractPropName = /([^.]+)$/;
        var oldProp = extractPropName.exec(obsoleted)[0];
        var newProp = extractPropName.exec(newExpr)[0];

        function getter() {

          return this[newProp];
        }

        function setter(value_) {

          this[newProp] = value_;
        }

        if (writable) {
          getset(object, oldProp, getter, setter);
        } else {
          get(object, oldProp, getter);
        }
      }
      /**
       * Defines all polyfill fields for obsoleted codes corresponding to the enumerable properties of props.
       * @param obj - YourObject or YourClass.prototype
       * @param objName - "YourObject" or "YourClass"
       * @param props
       * @param [writable=false]
       */

      function obsoletes(obj, objName, props, writable) {
        for (var obsoleted in props) {
          var newName = props[obsoleted];
          obsolete(obj, objName + '.' + obsoleted, newName, writable);
        }
      }
      var REGEXP_NUM_OR_STR = /(%d)|(%s)/;
      var REGEXP_STR = /%s/;
      /**
       * A string tool to construct a string with format string.
       * @param msg - A JavaScript string containing zero or more substitution strings (%s).
       * @param subst - JavaScript objects with which to replace substitution strings within msg.
       * This gives you additional control over the format of the output.
       * @example
       * ```
       * import { js } from 'cc';
       * js.formatStr("a: %s, b: %s", a, b);
       * js.formatStr(a, b, c);
       * ```
       */

      function formatStr(msg) {
        for (var _len = arguments.length, subst = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          subst[_key - 1] = arguments[_key];
        }

        if (arguments.length === 0) {
          return '';
        }

        if (subst.length === 0) {
          return '' + msg;
        }

        var hasSubstitution = typeof msg === 'string' && REGEXP_NUM_OR_STR.test(msg);

        if (hasSubstitution) {
          for (var _iterator = _createForOfIteratorHelperLoose(subst), _step; !(_step = _iterator()).done;) {
            var arg = _step.value;
            var regExpToTest = typeof arg === 'number' ? REGEXP_NUM_OR_STR : REGEXP_STR;

            if (regExpToTest.test(msg)) {
              msg = msg.replace(regExpToTest, arg);
            } else {
              msg += ' ' + arg;
            }
          }
        } else {
          for (var _iterator2 = _createForOfIteratorHelperLoose(subst), _step2; !(_step2 = _iterator2()).done;) {
            var _arg = _step2.value;
            msg += ' ' + _arg;
          }
        }

        return msg;
      } // see https://github.com/petkaantonov/bluebird/issues/1389

      function shiftArguments() {
        var len = arguments.length - 1;
        var args = new Array(len);

        for (var i = 0; i < len; ++i) {
          args[i] = arguments[i + 1];
        }

        return args;
      }
      /**
       * Get property descriptor in object and all its ancestors.
       */

      function getPropertyDescriptor(object, propertyName) {
        while (object) {
          var pd = Object.getOwnPropertyDescriptor(object, propertyName);

          if (pd) {
            return pd;
          }

          object = Object.getPrototypeOf(object);
        }

        return null;
      }

      function _copyprop(name, source, target) {
        var pd = getPropertyDescriptor(source, name);

        if (pd) {
          Object.defineProperty(target, name, pd);
        }
      }
      /**
       * Copy all properties not defined in object from arguments[1...n].
       * @param object Object to extend its properties.
       * @param sources Source object to copy properties from.
       * @return The result object.
       */


      function addon(object) {
        object = object || {};

        for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          sources[_key2 - 1] = arguments[_key2];
        }

        for (var _i = 0, _sources = sources; _i < _sources.length; _i++) {
          var source = _sources[_i];

          if (source) {
            if (_typeof(source) !== 'object') {
              errorID(5402, source);
              continue;
            }

            for (var name in source) {
              if (!(name in object)) {
                _copyprop(name, source, object);
              }
            }
          }
        }

        return object;
      }
      /**
       * Copy all properties from arguments[1...n] to object.
       * @return The result object.
       */

      function mixin(object) {
        object = object || {};

        for (var _len3 = arguments.length, sources = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          sources[_key3 - 1] = arguments[_key3];
        }

        for (var _i2 = 0, _sources2 = sources; _i2 < _sources2.length; _i2++) {
          var source = _sources2[_i2];

          if (source) {
            if (_typeof(source) !== 'object') {
              errorID(5403, source);
              continue;
            }

            for (var name in source) {
              _copyprop(name, source, object);
            }
          }
        }

        return object;
      }
      /**
       * Derive the class from the supplied base class.
       * Both classes are just native javascript constructors, not created by `Class`, so
       * usually you will want to inherit using [[Class]] instead.
       * @param base The baseclass to inherit.
       * @return The result class.
       */

      function extend(cls, base) {

        for (var p in base) {
          if (base.hasOwnProperty(p)) {
            cls[p] = base[p];
          }
        }

        cls.prototype = Object.create(base.prototype, {
          constructor: {
            value: cls,
            writable: true,
            configurable: true
          }
        });
        return cls;
      }
      /**
       * Get super class.
       * @param constructor The constructor of subclass.
       */

      function getSuper(constructor) {
        var proto = constructor.prototype; // binded function do not have prototype

        var dunderProto = proto && Object.getPrototypeOf(proto);
        return dunderProto && dunderProto.constructor;
      }
      /**
       * Checks whether subclass is child of superclass or equals to superclass.
       */

      function isChildClassOf(subclass, superclass) {
        if (subclass && superclass) {
          if (typeof subclass !== 'function') {
            return false;
          }

          if (typeof superclass !== 'function') {

            return false;
          }

          if (subclass === superclass) {
            return true;
          }

          for (;;) {
            subclass = getSuper(subclass);

            if (!subclass) {
              return false;
            }

            if (subclass === superclass) {
              return true;
            }
          }
        }

        return false;
      }
      /**
       * Removes all enumerable properties from object.
       */

      function clear(object) {
        for (var _i3 = 0, _Object$keys = Object.keys(object); _i3 < _Object$keys.length; _i3++) {
          var key = _Object$keys[_i3];
          delete object[key];
        }
      }

      function isTempClassId(id) {
        return typeof id !== 'string' || id.startsWith(tempCIDGenerator.prefix);
      } // id 注册


      var _idToClass = {};
      var _nameToClass = {};
      /**
       * Register the class by specified id, if its classname is not defined, the class name will also be set.
       * @method _setClassId
       * @param classId
       * @param constructor
       * @private
       */

      function _setClassId(id, constructor) {
        var table = _idToClass; // deregister old

        if (constructor.prototype.hasOwnProperty(classIdTag)) {
          delete table[constructor.prototype[classIdTag]];
        }

        value(constructor.prototype, classIdTag, id); // register class

        if (id) {
          var registered = table[id];

          if (registered && registered !== constructor) {
            var err = 'A Class already exists with the same ' + classIdTag + ' : "' + id + '".';

            error(err);
          } else {
            table[id] = constructor;
          } // if (id === "") {
          //    console.trace("", table === _nameToClass);
          // }

        }
      }

      function doSetClassName(id, constructor) {
        var table = _nameToClass; // deregister old

        if (constructor.prototype.hasOwnProperty(classNameTag)) {
          delete table[constructor.prototype[classNameTag]];
        }

        value(constructor.prototype, classNameTag, id); // register class

        if (id) {
          var registered = table[id];

          if (registered && registered !== constructor) {
            var err = 'A Class already exists with the same ' + classNameTag + ' : "' + id + '".';

            error(err);
          } else {
            table[id] = constructor;
          } // if (id === "") {
          //    console.trace("", table === _nameToClass);
          // }

        }
      }
      /**
       * Register the class by specified name manually
       * @method setClassName
       * @param className
       * @param constructor
       */


      function setClassName(className, constructor) {
        doSetClassName(className, constructor); // auto set class id

        if (!constructor.prototype.hasOwnProperty(classIdTag)) {
          var id = className || tempCIDGenerator.getNewId();

          if (id) {
            _setClassId(id, constructor);
          }
        }
      }
      /**
       * @en Set an alias name for class.
       * If `setClassAlias(target, alias)`, `alias` will be a single way short cut for class `target`.
       * If you try `js.getClassByName(alias)`, you will get target.
       * But `js.getClassName(target)` will return the original name of `target`, not the alias.
       * @zh 为类设置别名。
       * 当 `setClassAlias(target, alias)` 后，
       * `alias` 将作为类 `target`的“单向 ID” 和“单向名称”。
       * 因此，`_getClassById(alias)` 和 `getClassByName(alias)` 都会得到 `target`。
       * 这种映射是单向的，意味着 `getClassName(target)` 和 `_getClassId(target)` 将不会是 `alias`。
       * @param target Constructor of target class.
       * @param alias Alias to set. The name shall not have been set as class name or alias of another class.
       */

      function setClassAlias(target, alias) {
        var nameRegistry = _nameToClass[alias];
        var idRegistry = _idToClass[alias];
        var ok = true;

        if (nameRegistry && nameRegistry !== target) {
          error("\"".concat(alias, "\" has already been set as name or alias of another class."));
          ok = false;
        }

        if (idRegistry && idRegistry !== target) {
          error("\"".concat(alias, "\" has already been set as id or alias of another class."));
          ok = false;
        }

        if (ok) {
          var classAliases = target[aliasesTag];

          if (!classAliases) {
            classAliases = [];
            target[aliasesTag] = classAliases;
          }

          classAliases.push(alias);
          _nameToClass[alias] = target;
          _idToClass[alias] = target;
        }
      }
      /**
       * Unregister a class from fireball.
       *
       * If you dont need a registered class anymore, you should unregister the class so that Fireball will not keep its reference anymore.
       * Please note that its still your responsibility to free other references to the class.
       *
       * @param ...constructor - the class you will want to unregister, any number of classes can be added
       */

      function unregisterClass() {
        for (var _len4 = arguments.length, constructors = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          constructors[_key4] = arguments[_key4];
        }

        for (var _i4 = 0, _constructors = constructors; _i4 < _constructors.length; _i4++) {
          var _constructor = _constructors[_i4];
          var p = _constructor.prototype;
          var classId = p[classIdTag];

          if (classId) {
            delete _idToClass[classId];
          }

          var classname = p[classNameTag];

          if (classname) {
            delete _nameToClass[classname];
          }

          var aliases = p[aliasesTag];

          if (aliases) {
            for (var iAlias = 0; iAlias < aliases.length; ++iAlias) {
              var alias = aliases[iAlias];
              delete _nameToClass[alias];
              delete _idToClass[alias];
            }
          }
        }
      }
      /**
       * Get the registered class by id
       * @param classId
       * @return constructor
       * @private
       */

      function _getClassById(classId) {
        return _idToClass[classId];
      }
      /**
       * Get the registered class by name
       * @param classname
       * @return constructor of the class
       */

      function getClassByName(classname) {
        return _nameToClass[classname];
      }
      /**
       * Get class id of the object
       * @param obj - instance or constructor
       * @param [allowTempId = true]   - can return temp id in editor
       * @return
       * @private
       */

      function _getClassId(obj, allowTempId) {
        allowTempId = typeof allowTempId !== 'undefined' ? allowTempId : true;
        var res;

        if (typeof obj === 'function' && obj.prototype.hasOwnProperty(classIdTag)) {
          res = obj.prototype[classIdTag];

          if (!allowTempId && ( EDITOR) && isTempClassId(res)) {
            return '';
          }

          return res;
        }

        if (obj && obj.constructor) {
          var prototype = obj.constructor.prototype;

          if (prototype && prototype.hasOwnProperty(classIdTag)) {
            res = obj[classIdTag];

            if (!allowTempId && ( EDITOR) && isTempClassId(res)) {
              return '';
            }

            return res;
          }
        }

        return '';
      }

      /*
       Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

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
       * @category core
       */

      /**
       * @en
       * A fixed-length object pool designed for general type.<br>
       * The implementation of this object pool is very simple,
       * it can helps you to improve your game performance for objects which need frequent release and recreate operations<br/>
       * @zh
       * 长度固定的对象缓存池，可以用来缓存各种对象类型。<br/>
       * 这个对象池的实现非常精简，它可以帮助您提高游戏性能，适用于优化对象的反复创建和销毁。
       * @class js.Pool
       * @example
       * ```
       *
       * Example 1:
       *
       * function Details () {
       *     this.uuidList = [];
       * };
       * Details.prototype.reset = function () {
       *     this.uuidList.length = 0;
       * };
       * Details.pool = new js.Pool(function (obj) {
       *     obj.reset();
       * }, 5);
       * Details.pool.get = function () {
       *     return this._get() || new Details();
       * };
       *
       * var detail = Details.pool.get();
       * ...
       * Details.pool.put(detail);
       *
       * Example 2:
       *
       * function Details (buffer) {
       *    this.uuidList = buffer;
       * };
       * ...
       * Details.pool.get = function (buffer) {
       *     var cached = this._get();
       *     if (cached) {
       *         cached.uuidList = buffer;
       *         return cached;
       *     }
       *     else {
       *         return new Details(buffer);
       *     }
       * };
       *
       * var detail = Details.pool.get( [] );
       * ...
       * ```
       */
      var Pool = exports('bg', /*#__PURE__*/function () {
        _createClass(Pool, [{
          key: "get",

          /**
           * @en
           * The current number of available objects, the default is 0, it will gradually increase with the recycle of the object,
           * the maximum will not exceed the size specified when the constructor is called.
           * @zh
           * 当前可用对象数量，一开始默认是 0，随着对象的回收会逐渐增大，最大不会超过调用构造函数时指定的 size。
           * @default 0
           */

          /**
           * @en
           * Get and initialize an object from pool. This method defaults to null and requires the user to implement it.
           * @zh
           * 获取并初始化对象池中的对象。这个方法默认为空，需要用户自己实现。
           * @param args - parameters to used to initialize the object
           */
          value: function get() {
            return this._get();
          }
        }]);

        function Pool(_0, _1) {
          _classCallCheck(this, Pool);

          this.count = void 0;
          this._pool = void 0;
          this._cleanup = void 0;
          var size = _1 === undefined ? _0 : _1;
          var cleanupFunc = _1 === undefined ? null : _0;
          this.count = 0;
          this._pool = new Array(size);
          this._cleanup = cleanupFunc;
        }
        /**
         * @en
         * Get an object from pool, if no available object in the pool, null will be returned.
         * @zh
         * 获取对象池中的对象，如果对象池没有可用对象，则返回空。
         */


        _createClass(Pool, [{
          key: "_get",
          value: function _get() {
            if (this.count > 0) {
              --this.count;
              var cache = this._pool[this.count];
              this._pool[this.count] = null;
              return cache;
            }

            return null;
          }
          /**
           * @en Put an object into the pool.
           * @zh 向对象池返还一个不再需要的对象。
           */

        }, {
          key: "put",
          value: function put(obj) {
            var pool = this._pool;

            if (this.count < pool.length) {
              if (this._cleanup && this._cleanup(obj) === false) {
                return;
              }

              pool[this.count] = obj;
              ++this.count;
            }
          }
          /**
           * @en Resize the pool.
           * @zh 设置对象池容量。
           */

        }, {
          key: "resize",
          value: function resize(length) {
            if (length >= 0) {
              this._pool.length = length;

              if (this.count > length) {
                this.count = length;
              }
            }
          }
        }]);

        return Pool;
      }());

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
      var array = exports('by', jsarray);
      var js = exports('n', {
        IDGenerator: IDGenerator,
        Pool: Pool,
        array: jsarray,
        isNumber: isNumber,
        isString: isString,
        getPropertyDescriptor: getPropertyDescriptor,
        addon: addon,
        mixin: mixin,
        extend: extend,
        getSuper: getSuper,
        isChildClassOf: isChildClassOf,
        clear: clear,
        value: value,
        getset: getset,
        get: get,
        set: set$1,
        unregisterClass: unregisterClass,
        getClassName: getClassName,
        setClassName: setClassName,
        setClassAlias: setClassAlias,
        getClassByName: getClassByName,
        _getClassId: _getClassId,
        _setClassId: _setClassId,
        _getClassById: _getClassById,
        obsolete: obsolete,
        obsoletes: obsoletes,
        formatStr: formatStr,
        shiftArguments: shiftArguments,
        createMap: createMap
      });
      /**
       * This module provides some JavaScript utilities.
       * All members can be accessed with "cc.js".
       */

      legacyCC.js = js;

      var js$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        array: array,
        js: js,
        IDGenerator: IDGenerator,
        Pool: Pool,
        isNumber: isNumber,
        isString: isString,
        value: value,
        getset: getset,
        get: get,
        set: set$1,
        createMap: createMap,
        getClassName: getClassName,
        obsolete: obsolete,
        obsoletes: obsoletes,
        formatStr: formatStr,
        shiftArguments: shiftArguments,
        getPropertyDescriptor: getPropertyDescriptor,
        addon: addon,
        mixin: mixin,
        extend: extend,
        getSuper: getSuper,
        isChildClassOf: isChildClassOf,
        clear: clear,
        _idToClass: _idToClass,
        _nameToClass: _nameToClass,
        _setClassId: _setClassId,
        setClassName: setClassName,
        setClassAlias: setClassAlias,
        unregisterClass: unregisterClass,
        _getClassById: _getClassById,
        getClassByName: getClassByName,
        _getClassId: _getClassId
      });
      exports('al', js$1);

      var BUILTIN_CLASSID_RE = exports('be', /^(?:cc|dragonBones|sp|ccsg)\..+/);
      var BASE64_KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      var values = new Array(123); // max char code in base64Keys

      for (var i = 0; i < 123; ++i) {
        values[i] = 64;
      } // fill with placeholder('=') index


      for (var _i = 0; _i < 64; ++_i) {
        values[BASE64_KEYS.charCodeAt(_i)] = _i;
      } // decoded value indexed by base64 char code


      var BASE64_VALUES = exports('bq', values);
      /**
       * @param ctor
       * @param sameNameGetSets
       * @param diffNameGetSets
       */

      function propertyDefine(ctor, sameNameGetSets, diffNameGetSets) {
        function define(np, propName, getter, setter) {
          var pd = Object.getOwnPropertyDescriptor(np, propName);

          if (pd) {
            if (pd.get) {
              np[getter] = pd.get;
            }

            if (pd.set && setter) {
              np[setter] = pd.set;
            }
          } else {
            var getterFunc = np[getter];

            {
              getset(np, propName, getterFunc, np[setter]);
            }
          }
        }

        var propName,
            np = ctor.prototype;

        for (var _i2 = 0; _i2 < sameNameGetSets.length; _i2++) {
          propName = sameNameGetSets[_i2];
          var suffix = propName[0].toUpperCase() + propName.slice(1);
          define(np, propName, 'get' + suffix, 'set' + suffix);
        }

        for (propName in diffNameGetSets) {
          var gs = diffNameGetSets[propName];
          define(np, propName, gs[0], gs[1]);
        }
      } // set value to map, if key exists, push to array

      function pushToMap(map, key, value, pushFront) {
        var exists = map[key];

        if (exists) {
          if (Array.isArray(exists)) {
            if (pushFront) {
              exists.push(exists[0]);
              exists[0] = value;
            } else {
              exists.push(value);
            }
          } else {
            map[key] = pushFront ? [value, exists] : [exists, value];
          }
        } else {
          map[key] = value;
        }
      }
      function contains$1(refNode, otherNode) {
        if (typeof refNode.contains === 'function') {
          return refNode.contains(otherNode);
        } else if (typeof refNode.compareDocumentPosition === 'function') {
          return !!(refNode.compareDocumentPosition(otherNode) & 16);
        } else {
          var node = otherNode.parentNode;

          if (node) {
            do {
              if (node === refNode) {
                return true;
              } else {
                node = node.parentNode;
              }
            } while (node !== null);
          }

          return false;
        }
      }
      function isDomNode(obj) {
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && typeof Node === 'function') {
          // If "TypeError: Right-hand side of 'instanceof' is not callback" is thrown,
          // it should because window.Node was overwritten.
          return obj instanceof Node;
        } else {
          return obj && _typeof(obj) === 'object' && typeof obj.nodeType === 'number' && typeof obj.nodeName === 'string';
        }
      }
      function callInNextTick(callback, p1, p2) {
        {
          if (callback) {
            setTimeout(function () {
              callback(p1, p2);
            }, 0);
          }
        }
      } // use anonymous function here to ensure it will not being hoisted without EDITOR

      function tryCatchFunctor_EDITOR(funcName) {
        return Function('target', 'try {\n' + '  target.' + funcName + '();\n' + '}\n' + 'catch (e) {\n' + '  cc._throw(e);\n' + '}');
      }
      function isPlainEmptyObj_DEV(obj) {
        if (!obj || obj.constructor !== Object) {
          return false;
        } // jshint ignore: start


        for (var k in obj) {
          return false;
        } // jshint ignore: end


        return true;
      }
      function cloneable_DEV(obj) {
        return obj && typeof obj.clone === 'function' && (obj.constructor && obj.constructor.prototype.hasOwnProperty('clone') || obj.hasOwnProperty('clone'));
      } // if (TEST) {
      //     // editor mocks using in unit tests
      //     if (typeof Editor === 'undefined') {
      //         window.Editor = {
      //             UuidUtils: {
      //                 NonUuidMark: '.',
      //                 uuid () {
      //                     return '' + ((new Date()).getTime() + Math.random());
      //                 },
      //             },
      //         };
      //     }
      // }

      legacyCC.misc = {
        BUILTIN_CLASSID_RE: BUILTIN_CLASSID_RE,
        BASE64_VALUES: BASE64_VALUES,
        propertyDefine: propertyDefine,
        pushToMap: pushToMap,
        contains: contains$1,
        isDomNode: isDomNode,
        callInNextTick: callInNextTick,
        tryCatchFunctor_EDITOR: tryCatchFunctor_EDITOR,
        isPlainEmptyObj_DEV: isPlainEmptyObj_DEV,
        cloneable_DEV: cloneable_DEV
      };

      var misc = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BUILTIN_CLASSID_RE: BUILTIN_CLASSID_RE,
        BASE64_VALUES: BASE64_VALUES,
        propertyDefine: propertyDefine,
        pushToMap: pushToMap,
        contains: contains$1,
        isDomNode: isDomNode,
        callInNextTick: callInNextTick,
        tryCatchFunctor_EDITOR: tryCatchFunctor_EDITOR,
        isPlainEmptyObj_DEV: isPlainEmptyObj_DEV,
        cloneable_DEV: cloneable_DEV
      });
      exports('am', misc);

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
       * @en
       * Define an BitMask type.
       * @zh
       * 定义一个位掩码类型。
       * @param obj A JavaScript literal object containing BitMask names and values
       * @return The defined BitMask type
       */

      function BitMask(obj) {
        if ('__bitmask__' in obj) {
          return obj;
        }

        value(obj, '__bitmask__', null, true);
        var lastIndex = -1;
        var keys = Object.keys(obj);

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var val = obj[key];

          if (val === -1) {
            val = ++lastIndex;
            obj[key] = val;
          } else {
            if (typeof val === 'number') {
              lastIndex = val;
            } else if (typeof val === 'string' && Number.isInteger(parseFloat(key))) {
              continue;
            }
          }

          var reverseKey = '' + val;

          if (key !== reverseKey) {

            value(obj, reverseKey, key);
          }
        }

        return obj;
      }

      BitMask.isBitMask = function (BitMaskType) {
        return BitMaskType && BitMaskType.hasOwnProperty('__bitmask__');
      };

      BitMask.getList = function (BitMaskDef) {
        if (BitMaskDef.__bitmask__) {
          return BitMaskDef.__bitmask__;
        }

        var bitlist = BitMaskDef.__bitmask__ = []; // tslint:disable-next-line: forin

        for (var name in BitMaskDef) {
          var v = BitMaskDef[name];

          if (Number.isInteger(v)) {
            bitlist.push({
              name: name,
              value: v
            });
          }
        }

        bitlist.sort(function (a, b) {
          return a.value - b.value;
        });
        return bitlist;
      };
      legacyCC.BitMask = BitMask;

      /*
       Copyright (c) 2020 Xiamen Yaji Software Co., Ltd.

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
       * Asserts that the expression is non-nullable, i.e. is neither `null` nor `undefined`.
       * @param expr Testing expression.
       * @param message Optional message.
       */

      function assertIsNonNullable(expr, message) {
        assertIsTrue(!(expr === null || expr === undefined), message);
      }
      /**
       * Asserts that the expression evaluated to `true`.
       * @param expr Testing expression.
       * @param message Optional message.
       */

      function assertIsTrue(expr, message) {
        if ( !expr) {
          throw new Error("Assertion failed: ".concat(message !== null && message !== void 0 ? message : '<no-message>'));
        }
      }

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
       * @en
       * Define an enum type. <br/>
       * If a enum item has a value of -1, it will be given an Integer number according to it's order in the list.<br/>
       * Otherwise it will use the value specified by user who writes the enum definition.
       *
       * @zh
       * 定义一个枚举类型。<br/>
       * 用户可以把枚举值设为任意的整数，如果设为 -1，系统将会分配为上一个枚举值 + 1。
       *
       * @param obj - a JavaScript literal object containing enum names and values, or a TypeScript enum type
       * @return the defined enum type
       */

      function Enum(obj) {
        if ('__enums__' in obj) {
          return obj;
        }

        value(obj, '__enums__', null, true);
        return Enum.update(obj);
      }
      /**
       * @en
       * Update the enum object properties.
       * @zh
       * 更新枚举对象的属性列表。
       * @param obj 
       */

      Enum.update = function (obj) {
        var lastIndex = -1;
        var keys = Object.keys(obj); // tslint:disable-next-line: prefer-for-of

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var val = obj[key];

          if (val === -1) {
            val = ++lastIndex;
            obj[key] = val;
          } else {
            if (typeof val === 'number') {
              lastIndex = val;
            } else if (typeof val === 'string' && Number.isInteger(parseFloat(key))) {
              continue;
            }
          }

          var reverseKey = '' + val;

          if (key !== reverseKey) {

            value(obj, reverseKey, key);
          }
        } // auto update list if __enums__ is array


        if (Array.isArray(obj['__enums__'])) {
          updateList(obj);
        }

        return obj;
      };

      (function (_Enum) {})(Enum || (Enum = exports('aj', {})));

      /**
       * Determines if the object is an enum type.
       * @param enumType The object to judge.
       */
      Enum.isEnum = function (enumType) {
        return enumType && enumType.hasOwnProperty('__enums__');
      };

      function assertIsEnum(enumType) {
        assertIsTrue(enumType.hasOwnProperty('__enums__'));
      }
      /**
       * Get the enumerators from the enum type.
       * @param enumType An enum type.
       */


      Enum.getList = function (enumType) {
        assertIsEnum(enumType);

        if (enumType.__enums__) {
          return enumType.__enums__;
        }

        return updateList(enumType);
      };
      /**
       * Update the enumerators from the enum type.
       * @param enumType - the enum type defined from cc.Enum
       * @return {Object[]}
       */


      function updateList(enumType) {
        assertIsEnum(enumType);
        var enums = enumType.__enums__ || [];
        enums.length = 0; // tslint:disable-next-line: forin

        for (var _name in enumType) {
          var v = enumType[_name];

          if (Number.isInteger(v)) {
            enums.push({
              name: _name,
              value: v
            });
          }
        }

        enums.sort(function (a, b) {
          return a.value - b.value;
        });
        enumType.__enums__ = enums;
        return enums;
      }
      /**
       * Make the enum type `enumType` as enumeration so that Creator may identify, operate on it.
       * Formally, as a result of invocation on this function with enum type `enumType`:
       * - `Enum.isEnum(enumType)` returns `true`;
       * - `Enum.getList(enumType)` returns the enumerators of `enumType`.
       * @param enumType An enum type, eg, a kind of type with similar semantic defined by TypeScript.
       */


      function ccenum(enumType) {
        if (!('__enums__' in enumType)) {
          value(enumType, '__enums__', null, true);
        }
      }
      legacyCC.Enum = Enum;

      /**
       * @en The base class of all value types.
       * @zh 所有值类型的基类。
       */

      var ValueType = exports('ak', /*#__PURE__*/function () {
        function ValueType() {
          _classCallCheck(this, ValueType);
        }

        _createClass(ValueType, [{
          key: "clone",

          /**
           * @en
           * Clone the current object. The clone result of the object should be equal to the current object, i.e. satisfy `this.equals(this, value.clone())`.
           * The base version of this method do nothing and returns `this'.
           * The derived class **must** rewrite this method and the returned object should not be `this`, i.e. satisfy `this !== this.clone()`.
           * @zh
           * 克隆当前值。克隆的结果值应与当前值相等，即满足 `this.equals(this, value.clone())`。
           * 本方法的基类版本简单地返回 `this`；
           * 派生类**必须**重写本方法，并且返回的对象不应当为 `this`，即满足 `this !== this.clone()`。
           * @returns The cloned object
           */
          value: function clone() {
            errorID(100, getClassName(this) + '.clone');
            return this;
          }
          /**
           * @en
           * Check whether the current object is equal to the specified object.
           * This check should be interchangeable, i.e. satisfy `this.equals(other) === other.equals(this)`.
           * The base version of this method will returns `false'.
           * @zh
           * 判断当前值是否与指定值相等。此判断应当具有交换性，即满足 `this.equals(other) === other.equals(this)`。
           * 本方法的基类版本简单地返回 `false`。
           * @param other 相比较的值。
           * @returns 相等则返回 `true`，否则返回 `false`。
           */

        }, {
          key: "equals",
          value: function equals(other) {
            // errorID(100, js.getClassName(this) + '.equals');
            return false;
          }
          /**
           * @en
           * Set the property values of the current object with the given object.
           * The base version of this method will returns `this' and the derived class **must** rewrite this method.
           * @zh
           * 赋值当前值使其与指定值相等。
           * 本方法的基类版本简单地返回 `this`，派生类**必须**重写本方法。
           * @param other The other object
           */

        }, {
          key: "set",
          value: function set(other) {
            errorID(100, getClassName(this) + '.set');
          }
          /**
           * @en
           * Convert the current object to a string.
           * The base version of this method will returns an empty string.
           * @zh
           * 返回当前值的字符串表示。
           * 本方法的基类版本返回空字符串。
           * @returns The string representation of the current object
           */

        }, {
          key: "toString",
          value: function toString() {
            return '' + {};
          }
        }]);

        return ValueType;
      }());
      setClassName('cc.ValueType', ValueType);
      legacyCC.ValueType = ValueType;

      var DELIMETER = exports('bl', '$_$');
      function createAttrsSingle(owner, ownerConstructor, superAttrs) {
        var AttrsCtor;

        {
          AttrsCtor = function AttrsCtor() {};
        }

        if (superAttrs) {
          extend(AttrsCtor, superAttrs.constructor);
        }

        var attrs = new AttrsCtor();
        value(owner, '__attrs__', attrs);
        return attrs;
      }
      /**
       * @param subclass Should not have '__attrs__'.
       */

      function createAttrs(subclass) {
        var superClass;
        var chains = legacyCC.Class.getInheritanceChain(subclass);

        for (var i = chains.length - 1; i >= 0; i--) {
          var cls = chains[i];

          var attrs = cls.hasOwnProperty('__attrs__') && cls.__attrs__;

          if (!attrs) {
            superClass = chains[i + 1];
            createAttrsSingle(cls, cls, superClass && superClass.__attrs__);
          }
        }

        superClass = chains[0];
        createAttrsSingle(subclass, subclass, superClass && superClass.__attrs__);
        return subclass.__attrs__;
      } // /**
      //  * @class Class
      //  */

      /**
       * Tag the class with any meta attributes, then return all current attributes assigned to it.
       * This function holds only the attributes, not their implementations.
       * @param constructor The class or instance. If instance, the attribute will be dynamic and only available for the specified instance.
       * @param propertyName The name of property or function, used to retrieve the attributes.
       * @param [newAttributes] The attribute table to mark, new attributes will merged with existed attributes.
       * Attribute whose key starts with '_' will be ignored.
       * @private
       */

      function attr(constructor, propertyName, newAttributes) {
        var attrs, setter;

        if (typeof constructor === 'function') {
          // Attributes shared between instances.
          attrs = getClassAttrs(constructor);
          setter = attrs.constructor.prototype;
        } else {
          // Attributes in instance.
          var instance = constructor;
          attrs = instance.__attrs__;

          if (!attrs) {
            constructor = instance.constructor;
            var clsAttrs = getClassAttrs(constructor);
            attrs = createAttrsSingle(instance, constructor, clsAttrs);
          }

          setter = attrs;
        }

        if (typeof newAttributes === 'undefined') {
          // Get.
          var prefix = propertyName + DELIMETER;
          var ret = {};

          for (var key in attrs) {
            if (key.startsWith(prefix)) {
              ret[key.slice(prefix.length)] = attrs[key];
            }
          }

          return ret;
        } else {
          // Set.
          if (_typeof(newAttributes) === 'object') {
            for (var _key in newAttributes) {
              if (_key.charCodeAt(0) !== 95
              /* _ */
              ) {
                  setter[propertyName + DELIMETER + _key] = newAttributes[_key];
                }
            }
          }
        }
      }
      /**
       * Returns a readonly meta object.
       */

      function getClassAttrs(constructor) {
        return constructor.hasOwnProperty('__attrs__') && constructor.__attrs__ || createAttrs(constructor);
      }
      /**
       * Returns a writable meta object, used to set multi attributes.
       */

      function getClassAttrsProto(constructor) {
        return getClassAttrs(constructor).constructor.prototype;
      }
      function setClassAttr(ctor, propName, key, value) {
        var proto = getClassAttrsProto(ctor);
        proto[propName + DELIMETER + key] = value;
      }
      var PrimitiveType = /*#__PURE__*/function () {
        function PrimitiveType(name, defaultValue) {
          _classCallCheck(this, PrimitiveType);

          this.name = void 0;
          this["default"] = void 0;
          this.name = name;
          this["default"] = defaultValue;
        }

        _createClass(PrimitiveType, [{
          key: "toString",
          value: function toString() {
            return this.name;
          }
        }]);

        return PrimitiveType;
      }();
      /**
       * 指定编辑器以整数形式对待该属性或数组元素。
       * 例如：
       * ```ts
       * import { CCInteger, _decorator } from "Cocos3D";
       *
       * // 在 cc 类定义中:
       *
       * \@_decorator.property({type: CCInteger})
       * count = 0;
       *
       * \@_decorator.property({type: [CCInteger]})
       * array = [];
       * ```
       */

      var CCInteger = exports('au', new PrimitiveType('Integer', 0));
      legacyCC.Integer = CCInteger;
      legacyCC.CCInteger = CCInteger;
      /**
       * 指定编辑器以浮点数形式对待该属性或数组元素。
       * 例如：
       * ```ts
       * import { CCFloat, _decorator } from "Cocos3D";
       *
       * // 在 cc 类定义中:
       *
       * \@_decorator.property({type: CCFloat})
       * x = 0;
       *
       * \@_decorator.property({type: [CCFloat]})
       * array = [];
       * ```
       */

      var CCFloat = exports('av', new PrimitiveType('Float', 0.0));
      legacyCC.Float = CCFloat;
      legacyCC.CCFloat = CCFloat;
      /**
       * 指定编辑器以布尔值形式对待该属性或数组元素。
       * 例如：
       * ```ts
       * import { CCBoolean, _decorator } from "Cocos3D";
       *
       * // 在 cc 类定义中:
       *
       * \@_decorator.property({type: CCBoolean})
       * isTrue = false;
       *
       * \@_decorator.property({type: [CCBoolean]})
       * array = [];
       * ```
       */


      var CCBoolean = exports('aw', new PrimitiveType('Boolean', false));
      legacyCC.Boolean = CCBoolean;
      legacyCC.CCBoolean = CCBoolean;
      /**
       * 指定编辑器以字符串形式对待该属性或数组元素。
       * 例如：
       * ```ts
       * import { CCString, _decorator } from "Cocos3D";
       *
       * // 在 cc 类定义中:
       *
       * \@_decorator.property({type: CCString})
       * name = '';
       *
       * \@_decorator.property({type: [CCString]})
       * array = [];
       * ```
       */

      var CCString = exports('ax', new PrimitiveType('String', ''));
      legacyCC.String = CCString;
      legacyCC.CCString = CCString;
      /*
      BuiltinAttributes: {
          default: defaultValue,
          _canUsedInSetter: false, (default false) (NYI)
      }
      Getter or Setter: {
          hasGetter: true,
          hasSetter: true,
      }
      Callbacks: {
          _onAfterProp: function (constructor, propName) {},
          _onAfterGetter: function (constructor, propName) {}, (NYI)
          _onAfterSetter: function (constructor, propName) {}, (NYI)
      }
       */

      function getTypeChecker(type, attributeName) {
        return function (constructor, mainPropertyName) {
          var propInfo = '"' + getClassName(constructor) + '.' + mainPropertyName + '"';
          var mainPropAttrs = attr(constructor, mainPropertyName);

          if (!mainPropAttrs.saveUrlAsAsset) {
            var mainPropAttrsType = mainPropAttrs.type;

            if (mainPropAttrsType === CCInteger || mainPropAttrsType === CCFloat) {
              mainPropAttrsType = 'Number';
            } else if (mainPropAttrsType === CCString || mainPropAttrsType === CCBoolean) {
              mainPropAttrsType = mainPropAttrsType.toString();
            }

            if (mainPropAttrsType !== type) {
              warnID(3604, propInfo);
              return;
            }
          }

          if (!mainPropAttrs.hasOwnProperty('default')) {
            return;
          }

          var defaultVal = mainPropAttrs["default"];

          if (typeof defaultVal === 'undefined') {
            return;
          }

          var isContainer = Array.isArray(defaultVal) || isPlainEmptyObj_DEV(defaultVal);

          if (isContainer) {
            return;
          }

          var defaultType = _typeof(defaultVal);

          var type_lowerCase = type.toLowerCase();

          if (defaultType === type_lowerCase) {
            if (!mainPropAttrs.saveUrlAsAsset) {
              if (type_lowerCase === 'object') {
                if (defaultVal && !(defaultVal instanceof mainPropAttrs.ctor)) {
                  warnID(3605, propInfo, getClassName(mainPropAttrs.ctor));
                } else {
                  return;
                }
              } else if (type !== 'Number') {
                warnID(3606, attributeName, propInfo, type);
              }
            }
          } else if (defaultType !== 'function') {
            if (type === CCString["default"] && defaultVal == null) {
              if (!isChildClassOf(mainPropAttrs.ctor, legacyCC.RawAsset)) {
                warnID(3607, propInfo);
              }
            } else {
              warnID(3611, attributeName, propInfo, defaultType);
            }
          } else {
            return;
          }

          delete mainPropAttrs.type;
        };
      }
      function getObjTypeChecker(typeCtor) {
        return function (classCtor, mainPropName) {
          getTypeChecker('Object', 'type')(classCtor, mainPropName); // check ValueType

          var defaultDef = getClassAttrs(classCtor)[mainPropName + DELIMETER + 'default'];
          var defaultVal = legacyCC.Class.getDefault(defaultDef);

          if (!Array.isArray(defaultVal) && isChildClassOf(typeCtor, legacyCC.ValueType)) {
            var typename = getClassName(typeCtor);
            var info = formatStr('No need to specify the "type" of "%s.%s" because %s is a child class of ValueType.', getClassName(classCtor), mainPropName, typename);

            if (defaultDef) {
              log(info);
            } else {
              warnID(3612, info, typename, getClassName(classCtor), mainPropName, typename);
            }
          }
        };
      }

      var attributeUtils = /*#__PURE__*/Object.freeze({
        __proto__: null,
        DELIMETER: DELIMETER,
        createAttrsSingle: createAttrsSingle,
        createAttrs: createAttrs,
        attr: attr,
        getClassAttrs: getClassAttrs,
        getClassAttrsProto: getClassAttrsProto,
        setClassAttr: setClassAttr,
        PrimitiveType: PrimitiveType,
        CCInteger: CCInteger,
        CCFloat: CCFloat,
        CCBoolean: CCBoolean,
        CCString: CCString,
        getTypeChecker: getTypeChecker,
        getObjTypeChecker: getObjTypeChecker
      });

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

      var SerializableAttrs = {
        url: {
          canUsedInGet: true
        },
        "default": {},
        serializable: {},
        editorOnly: {},
        formerlySerializedAs: {}
      };
      /**
       * 预处理 notify 等扩展属性
       */

      function parseNotify(val, propName, notify, properties) {
        if (val.get || val.set) {

          return;
        }

        if (val.hasOwnProperty('default')) {
          // 添加新的内部属性，将原来的属性修改为 getter/setter 形式
          // （以 _ 开头将自动设置property 为 visible: false）
          var newKey = '_N$' + propName;

          val.get = function () {
            return this[newKey];
          };

          val.set = function (value) {
            var oldValue = this[newKey];
            this[newKey] = value;
            notify.call(this, oldValue);
          };

          var newValue = {};
          properties[newKey] = newValue; // 将不能用于get方法中的属性移动到newValue中
          // tslint:disable: forin

          for (var attr in SerializableAttrs) {
            var v = SerializableAttrs[attr];

            if (val.hasOwnProperty(attr)) {
              newValue[attr] = val[attr];

              if (!v.canUsedInGet) {
                delete val[attr];
              }
            }
          }
        }
      }
      /**
       * 检查 url
       */


      function checkUrl(val, className, propName, url) {
        if (Array.isArray(url)) {
          if (url.length > 0) {
            url = url[0];
          }
        }

        val.type = url;
      }
      /**
       * 解析类型
       */


      function parseType(val, type, className, propName) {
        if (Array.isArray(type)) {

          if (type.length > 0) {
            if (legacyCC.RawAsset.isRawAssetType(type[0])) {
              val.url = type[0];
              delete val.type;
              return;
            } else {
              val.type = type = type[0];
            }
          } else {
            return errorID(5508, className, propName);
          }
        }
      }

      function postCheckType(val, type, className, propName) {
      }


      function getFullFormOfProperty(options, propname_dev, classname_dev) {
        var isLiteral = options && options.constructor === Object;

        if (!isLiteral) {
          if (Array.isArray(options) && options.length > 0) {
            var type = options[0];
            return {
              "default": [],
              type: options,
              _short: true
            };
          } else if (typeof options === 'function') {
            var _type = options;

            if (!legacyCC.RawAsset.isRawAssetType(_type)) {
              return {
                "default": isChildClassOf(_type, legacyCC.ValueType) ? new _type() : null,
                type: _type,
                _short: true
              };
            }

            return {
              "default": '',
              url: _type,
              _short: true
            };
          } else if (options instanceof PrimitiveType) {
            return {
              "default": options["default"],
              _short: true
            };
          } else {
            return {
              "default": options,
              _short: true
            };
          }
        }

        return null;
      }
      function preprocessAttrs(properties, className, cls, es6) {
        for (var propName in properties) {
          var val = properties[propName];
          var fullForm = getFullFormOfProperty(val);

          if (fullForm) {
            val = properties[propName] = fullForm;
          }

          if (val) {

            var notify = val.notify;

            if (notify) {
              {
                parseNotify(val, propName, notify, properties);
              }
            }

            if ('type' in val) {
              parseType(val, val.type, className, propName);
            }

            if ('url' in val) {
              checkUrl(val, className, propName, val.url);
            }

            if ('type' in val) {
              postCheckType(val, val.type);
            }
          }
        }
      }
      function validateMethodWithProps(func, funcName, className, cls, base) {

        if (typeof func === 'function' || func === null) ; else {

          return false;
        }

        return true;
      }

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
       *
       */

      var requiringFrames = []; // the requiring frame infos

      function push(module, uuid, script, importMeta) {
        if (script === undefined) {
          script = uuid;
          uuid = '';
        }

        requiringFrames.push({
          uuid: uuid,
          script: script,
          module: module,
          exports: module.exports,
          // original exports
          beh: null,
          importMeta: importMeta
        });
      }
      function pop() {
        var frameInfo = requiringFrames.pop(); // check exports

        var module = frameInfo.module;
        var exports = module.exports;

        if (exports === frameInfo.exports) {
          // tslint:disable-next-line: forin
          for (var anykey in exports) {
            // exported
            return;
          } // auto export component


          module.exports = exports = frameInfo.cls;
        }
      }
      function peek() {
        return requiringFrames[requiringFrames.length - 1];
      }
      legacyCC._RF = {
        push: push,
        pop: pop,
        peek: peek
      };

      var DELIMETER$1 = DELIMETER;
      var BUILTIN_ENTRIES = ['name', 'extends', 'mixins', 'ctor', '__ctor__', 'properties', 'statics', 'editor', '__ES6__'];

      function pushUnique(array, item) {
        if (array.indexOf(item) < 0) {
          array.push(item);
        }
      }

      var deferredInitializer = {
        // Configs for classes which needs deferred initialization
        datas: null,
        // register new class
        // data - {cls: cls, cb: properties, mixins: options.mixins}
        push: function push(data) {
          if (this.datas) {
            this.datas.push(data);
          } else {
            this.datas = [data]; // start a new timer to initialize

            var self = this;
            setTimeout(function () {
              self.init();
            }, 0);
          }
        },
        init: function init() {
          var datas = this.datas;

          if (datas) {
            for (var i = 0; i < datas.length; ++i) {
              var data = datas[i];
              var cls = data.cls;
              var properties = data.props;

              if (typeof properties === 'function') {
                properties = properties();
              }

              var _name = getClassName(cls);

              if (properties) {
                declareProperties(cls, _name, properties, cls.$super, data.mixins);
              } else {
                errorID(3633, _name);
              }
            }

            this.datas = null;
          }
        }
      }; // both getter and prop must register the name into __props__ array

      function appendProp(cls, name) {

        pushUnique(cls.__props__, name);
      }

      var tmpArray = [];

      function defineProp(cls, className, propName, val, es6) {
        var defaultValue = val["default"];


        setClassAttr(cls, propName, 'default', defaultValue);
        appendProp(cls, propName); // apply attributes

        var attrs = parseAttributes(cls, val, className, propName);

        if (attrs) {
          var onAfterProp = tmpArray;

          for (var i = 0; i < attrs.length; i++) {
            var attr$1 = attrs[i];
            attr(cls, propName, attr$1);

            if (attr$1.serializable === false) {
              pushUnique(cls.__values__, propName);
            } // register callback


            if (attr$1._onAfterProp) {
              onAfterProp.push(attr$1._onAfterProp);
            }
          } // call callback


          for (var c = 0; c < onAfterProp.length; c++) {
            onAfterProp[c](cls, propName);
          }

          tmpArray.length = 0;
          attrs.length = 0;
        }
      }

      function defineGetSet(cls, name, propName, val, es6) {
        var getter = val.get;
        var setter = val.set;
        var proto = cls.prototype;
        var d = Object.getOwnPropertyDescriptor(proto, propName);
        var setterUndefined = !d;

        if (getter) {

          var attrs = parseAttributes(cls, val, name, propName);

          for (var i = 0; i < attrs.length; i++) {
            attr(cls, propName, attrs[i]);
          }

          attrs.length = 0;
          setClassAttr(cls, propName, 'serializable', false);

          if (!es6) {
            get(proto, propName, getter, setterUndefined, setterUndefined);
          }
        }

        if (setter) {
          if (!es6) {

            set$1(proto, propName, setter, setterUndefined, setterUndefined);
          }
        }
      }

      function getDefault(defaultVal) {
        if (typeof defaultVal === 'function') {
          {
            return defaultVal();
          }
        }

        return defaultVal;
      }

      function mixinWithInherited(dest, src, filter) {
        for (var prop in src) {
          if (!dest.hasOwnProperty(prop) && (!filter || filter(prop))) {
            Object.defineProperty(dest, prop, getPropertyDescriptor(src, prop));
          }
        }
      }

      function doDefine(className, baseClass, mixins, options) {
        var __ctor__ = options.__ctor__;
        var ctor = options.ctor;
        var __es6__ = options.__ES6__;

        var ctors;
        var fireClass;

        if (__es6__) {
          ctors = [ctor];
          fireClass = ctor;
        } else {
          ctors = __ctor__ ? [__ctor__] : _getAllCtors(baseClass, mixins, options);
          fireClass = _createCtor(ctors, baseClass, className, options); // extend - Create a new Class that inherits from this Class

          value(fireClass, 'extend', function (options) {
            options["extends"] = this;
            return CCClass(options);
          }, true);
        }

        value(fireClass, '__ctors__', ctors.length > 0 ? ctors : null, true);
        var prototype = fireClass.prototype;

        if (baseClass) {
          if (!__es6__) {
            extend(fireClass, baseClass); // 这里会把父类的 __props__ 复制给子类

            prototype = fireClass.prototype; // get extended prototype
          }

          fireClass.$super = baseClass;
        }

        if (mixins) {
          var _loop = function _loop(m) {
            var mixin = mixins[m];
            mixinWithInherited(prototype, mixin.prototype); // mixin statics (this will also copy editor attributes for component)

            mixinWithInherited(fireClass, mixin, function (prop) {
              return mixin.hasOwnProperty(prop) && (!DEV );
            }); // mixin attributes

            if (CCClass._isCCClass(mixin)) {
              mixinWithInherited(getClassAttrs(fireClass).constructor.prototype, getClassAttrs(mixin).constructor.prototype);
            }
          };

          for (var m = mixins.length - 1; m >= 0; m--) {
            _loop(m);
          } // restore constuctor overridden by mixin


          prototype.constructor = fireClass;
        }

        if (!__es6__) {
          prototype.__initProps__ = compileProps;
        }

        setClassName(className, fireClass);
        return fireClass;
      }

      function define(className, baseClass, mixins, options) {
        var Component = legacyCC.Component;
        var frame = peek();

        if (frame && isChildClassOf(baseClass, Component)) {
          // project component
          if (isChildClassOf(frame.cls, Component)) {
            errorID(3615);
            return null;
          }

          className = className || frame.script;
        }

        var cls = doDefine(className, baseClass, mixins, options); // for RenderPipeline, RenderFlow, RenderStage

        var isRenderPipeline = isChildClassOf(baseClass, legacyCC.RenderPipeline);
        var isRenderFlow = isChildClassOf(baseClass, legacyCC.RenderFlow);
        var isRenderStage = isChildClassOf(baseClass, legacyCC.RenderStage);
        var isRender = isRenderPipeline || isRenderFlow || isRenderStage || false;

        if (isRender) {
          var renderName = '';

          if (isRenderPipeline) {
            renderName = 'render_pipeline';
          } else if (isRenderFlow) {
            renderName = 'render_flow';
          } else if (isRenderStage) {
            renderName = 'render_stage';
          }

          if (renderName) {
            _setClassId(className, cls);
          }
        }

        if (frame) {
          // 基础的 ts, js 脚本组件
          if (isChildClassOf(baseClass, Component)) {
            var uuid = frame.uuid;

            if (uuid) {
              _setClassId(uuid, cls);
            }

            frame.cls = cls;
          } else if (!isChildClassOf(frame.cls, Component)) {
            frame.cls = cls;
          }
        }

        return cls;
      }

      function getNewValueTypeCodeJit(value) {
        var clsName = getClassName(value);
        var type = value.constructor;
        var res = 'new ' + clsName + '(';

        for (var i = 0; i < type.__props__.length; i++) {
          var prop = type.__props__[i];
          var propVal = value[prop];

          res += propVal;

          if (i < type.__props__.length - 1) {
            res += ',';
          }
        }

        return res + ')';
      } // TODO - move escapeForJS, IDENTIFIER_RE, getNewValueTypeCodeJit to misc.js or a new source file
      // convert a normal string including newlines, quotes and unicode characters into a string literal
      // ready to use in JavaScript source


      function escapeForJS(s) {
        return JSON.stringify(s). // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
        replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
      }

      function getInitPropsJit(attrs, propList) {
        // functions for generated code
        var F = [];
        var func = '';

        for (var i = 0; i < propList.length; i++) {
          var prop = propList[i];
          var attrKey = prop + DELIMETER$1 + 'default';

          if (attrKey in attrs) {
            // getter does not have default
            var statement = void 0;

            if (IDENTIFIER_RE.test(prop)) {
              statement = 'this.' + prop + '=';
            } else {
              statement = 'this[' + escapeForJS(prop) + ']=';
            }

            var expression = void 0;
            var def = attrs[attrKey];

            if (_typeof(def) === 'object' && def) {
              if (def instanceof legacyCC.ValueType) {
                expression = getNewValueTypeCodeJit(def);
              } else if (Array.isArray(def)) {
                expression = '[]';
              } else {
                expression = '{}';
              }
            } else if (typeof def === 'function') {
              var index = F.length;
              F.push(def);
              expression = 'F[' + index + ']()';
            } else if (typeof def === 'string') {
              expression = escapeForJS(def);
            } else {
              // number, boolean, null, undefined
              expression = def;
            }

            statement = statement + expression + ';\n';
            func += statement;
          }
        } // if (TEST && !isPhantomJS) {
        //     console.log(func);
        // }


        var initProps;

        if (F.length === 0) {
          initProps = Function(func);
        } else {
          initProps = Function('F', 'return (function(){\n' + func + '})')(F);
        }

        return initProps;
      }


      var IDENTIFIER_RE = /^[A-Za-z_$][0-9A-Za-z_$]*$/;

      function compileProps(actualClass) {
        // init deferred properties
        var attrs = getClassAttrs(actualClass);
        var propList = actualClass.__props__;

        if (propList === null) {
          deferredInitializer.init();
          propList = actualClass.__props__;
        } // Overwite __initProps__ to avoid compile again.


        var initProps =  getInitPropsJit(attrs, propList) ;
        actualClass.prototype.__initProps__ = initProps; // call instantiateProps immediately, no need to pass actualClass into it anymore
        // (use call to manually bind `this` because `this` may not instanceof actualClass)

        initProps.call(this);
      }

      var _createCtor =  function (ctors, baseClass, className, options) {
        var superCallBounded = baseClass && boundSuperCalls(baseClass, options);
        var ctorName =  'CCClass';
        var body = 'return function ' + ctorName + '(){\n';

        if (superCallBounded) {
          body += 'this._super=null;\n';
        } // instantiate props


        body += 'this.__initProps__(' + ctorName + ');\n'; // call user constructors

        var ctorLen = ctors.length;

        if (ctorLen > 0) {
          var useTryCatch = DEV ;

          if (useTryCatch) {
            body += 'try{\n';
          }

          var SNIPPET = '].apply(this,arguments);\n';

          if (ctorLen === 1) {
            body += ctorName + '.__ctors__[0' + SNIPPET;
          } else {
            body += 'var cs=' + ctorName + '.__ctors__;\n';

            for (var i = 0; i < ctorLen; i++) {
              body += 'cs[' + i + SNIPPET;
            }
          }

          if (useTryCatch) {
            body += '}catch(e){\n' + 'cc._throw(e);\n' + '}\n';
          }
        }

        body += '}';
        return Function(body)();
      } ;

      function _getAllCtors(baseClass, mixins, options) {
        // get base user constructors
        function getCtors(cls) {
          if (CCClass._isCCClass(cls)) {
            return cls.__ctors__ || [];
          } else {
            return [cls];
          }
        }

        var ctors = []; // if (options.__ES6__) {
        //     if (mixins) {
        //         let baseOrMixins = getCtors(baseClass);
        //         for (let b = 0; b < mixins.length; b++) {
        //             let mixin = mixins[b];
        //             if (mixin) {
        //                 let baseCtors = getCtors(mixin);
        //                 for (let c = 0; c < baseCtors.length; c++) {
        //                     if (baseOrMixins.indexOf(baseCtors[c]) < 0) {
        //                         pushUnique(ctors, baseCtors[c]);
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }
        // else {

        var baseOrMixins = [baseClass].concat(mixins);

        for (var b = 0; b < baseOrMixins.length; b++) {
          var baseOrMixin = baseOrMixins[b];

          if (baseOrMixin) {
            var baseCtors = getCtors(baseOrMixin);

            for (var c = 0; c < baseCtors.length; c++) {
              pushUnique(ctors, baseCtors[c]);
            }
          }
        } // }
        // append subclass user constructors


        var ctor = options.ctor;

        if (ctor) {
          ctors.push(ctor);
        }

        return ctors;
      }

      var superCllRegCondition = /xyz/.test(function () {
      }.toString());
      var SuperCallReg = superCllRegCondition ? /\b\._super\b/ : /.*/;

      function boundSuperCalls(baseClass, options, className) {
        var hasSuperCall = false;

        for (var funcName in options) {
          if (BUILTIN_ENTRIES.indexOf(funcName) >= 0) {
            continue;
          }

          var func = options[funcName];

          if (typeof func !== 'function') {
            continue;
          }

          var pd = getPropertyDescriptor(baseClass.prototype, funcName);

          if (pd) {
            var superFunc = pd.value; // ignore pd.get, assume that function defined by getter is just for warnings

            if (typeof superFunc === 'function') {
              if (SuperCallReg.test(func)) {
                hasSuperCall = true; // boundSuperCall

                options[funcName] = function (superFunc, func) {
                  return function () {
                    var tmp = this._super; // Add a new ._super() method that is the same method but on the super-Class

                    this._super = superFunc;
                    var ret = func.apply(this, arguments); // The method only need to be bound temporarily, so we remove it when we're done executing

                    this._super = tmp;
                    return ret;
                  };
                }(superFunc, func);
              }

              continue;
            }
          }
        }

        return hasSuperCall;
      }

      function declareProperties(cls, className, properties, baseClass, mixins, es6) {
        cls.__props__ = [];

        if (baseClass && baseClass.__props__) {
          cls.__props__ = baseClass.__props__.slice();
        }

        if (mixins) {
          for (var m = 0; m < mixins.length; ++m) {
            var mixin = mixins[m];

            if (mixin.__props__) {
              cls.__props__ = cls.__props__.concat(mixin.__props__.filter(function (x) {
                return cls.__props__.indexOf(x) < 0;
              }));
            }
          }
        }

        if (properties) {
          // 预处理属性
          preprocessAttrs(properties, className);

          for (var propName in properties) {
            var val = properties[propName];

            if ('default' in val) {
              defineProp(cls, className, propName, val);
            } else {
              defineGetSet(cls, className, propName, val, es6);
            }
          }
        }

        var attrs = getClassAttrs(cls);
        cls.__values__ = cls.__props__.filter(function (prop) {
          return attrs[prop + DELIMETER$1 + 'serializable'] !== false;
        });
      }

      function CCClass(options) {
        options = options || {};
        var name = options.name;
        var base = options["extends"]
        /* || CCObject*/
        ;
        var mixins = options.mixins; // create constructor

        var cls = define(name, base, mixins, options);

        if (!name) {
          name = legacyCC.js.getClassName(cls);
        }

        cls._sealed = true;

        if (base) {
          base._sealed = false;
        } // define Properties


        var properties = options.properties;

        if (typeof properties === 'function' || base && base.__props__ === null || mixins && mixins.some(function (x) {
          return x.__props__ === null;
        })) {
          {
            deferredInitializer.push({
              cls: cls,
              props: properties,
              mixins: mixins
            });
            cls.__props__ = cls.__values__ = null;
          }
        } else {
          declareProperties(cls, name, properties, base, options.mixins, options.__ES6__);
        } // define statics


        var statics = options.statics;

        if (statics) {
          var staticPropName;

          for (staticPropName in statics) {
            cls[staticPropName] = statics[staticPropName];
          }
        } // define functions


        for (var funcName in options) {
          if (BUILTIN_ENTRIES.indexOf(funcName) >= 0) {
            continue;
          }

          var func = options[funcName];

          if (!validateMethodWithProps(func)) {
            continue;
          } // use value to redefine some super method defined as getter


          value(cls.prototype, funcName, func, true, true);
        }

        var editor = options.editor;

        if (editor) {
          if (isChildClassOf(base, legacyCC.Component)) {
            legacyCC.Component._registerEditorProps(cls, editor);
          }
        }

        return cls;
      }
      /**
       * @en
       * Checks whether the constructor is created by `Class`.
       * @zh
       * 检查构造函数是否由 `Class` 创建。
       * @method _isCCClass
       * @param {Function} constructor
       * @return {Boolean}
       * @private
       */

      CCClass._isCCClass = function (constructor) {
        return constructor && constructor.hasOwnProperty && constructor.hasOwnProperty('__ctors__'); // is not inherited __ctors__
      }; //
      // Optimized define function only for internal classes
      //
      // @method fastDefine
      // @param {String} className
      // @param {Function} constructor
      // @param {Object} serializableFields
      // @private
      //


      CCClass.fastDefine = function (className, constructor, serializableFields) {
        setClassName(className, constructor); // constructor.__ctors__ = constructor.__ctors__ || null;

        var props = constructor.__props__ = constructor.__values__ = Object.keys(serializableFields);
        var attrProtos = getClassAttrsProto(constructor);

        for (var i = 0; i < props.length; i++) {
          var key = props[i];
          attrProtos[key + DELIMETER$1 + 'visible'] = false;
          attrProtos[key + DELIMETER$1 + 'default'] = serializableFields[key];
        }
      };

      CCClass.Attr = attributeUtils;
      CCClass.attr = attr;
      /**
       * Return all super classes.
       * @param constructor The Constructor.
       */

      function getInheritanceChain(constructor) {
        var chain = [];

        for (;;) {
          constructor = getSuper(constructor);

          if (!constructor) {
            break;
          }

          if (constructor !== Object) {
            chain.push(constructor);
          }
        }

        return chain;
      }

      CCClass.getInheritanceChain = getInheritanceChain;
      var PrimitiveTypes = {
        // Specify that the input value must be integer in Properties.
        // Also used to indicates that the type of elements in array or the type of value in dictionary is integer.
        Integer: 'Number',
        // Indicates that the type of elements in array or the type of value in dictionary is double.
        Float: 'Number',
        Boolean: 'Boolean',
        String: 'String'
      };
      var tmpAttrs = [];

      function parseAttributes(constructor, attributes, className, propertyName, usedInGetter) {
        var attrsProto = null;
        var attrsProtoKey = '';

        function getAttrsProto() {
          attrsProtoKey = propertyName + DELIMETER$1;
          return attrsProto = getClassAttrsProto(constructor);
        }

        tmpAttrs.length = 0;
        var result = tmpAttrs;

        if ('type' in attributes && typeof attributes.type === 'undefined') {
          warnID(3660, propertyName, className);
        }

        var type = attributes.type;

        if (type) {
          var primitiveType = PrimitiveTypes[type];

          if (primitiveType) {
            result.push({
              type: type,
              _onAfterProp:  undefined
            });
          } else if (type === 'Object') ; // else if (type === Attr.ScriptUuid) {
          //     result.push({
          //         type: 'Script',
          //         ctor: cc.ScriptAsset,
          //     });
          // }
          else if (_typeof(type) === 'object') {
              if (Enum.isEnum(type)) {
                result.push({
                  type: 'Enum',
                  enumList: Enum.getList(type)
                });
              } else if (BitMask.isBitMask(type)) {
                result.push({
                  type: 'BitMask',
                  bitmaskList: BitMask.getList(type)
                });
              } else ;
            } else if (typeof type === 'function') {
              var typeChecker;

              result.push({
                type: 'Object',
                ctor: type,
                _onAfterProp: typeChecker
              });
            } else ;
        }

        var parseSimpleAttribute = function parseSimpleAttribute(attributeName, expectType) {
          if (attributeName in attributes) {
            var val = attributes[attributeName];

            if (_typeof(val) === expectType) {
              (attrsProto || getAttrsProto())[attrsProtoKey + attributeName] = val;
            }
          }
        };

        if (attributes.editorOnly) {
          {
            (attrsProto || getAttrsProto())[attrsProtoKey + 'editorOnly'] = true;
          }
        } // parseSimpleAttr('preventDeferredLoad', 'boolean');

        if (attributes.url) {
          (attrsProto || getAttrsProto())[attrsProtoKey + 'saveUrlAsAsset'] = true;
        }

        if (attributes.__noImplicit) {
          var _attributes$serializa;

          (attrsProto || getAttrsProto())[attrsProtoKey + 'serializable'] = (_attributes$serializa = attributes.serializable) !== null && _attributes$serializa !== void 0 ? _attributes$serializa : false;
        } else {
          if (attributes.serializable === false) {
            {
              (attrsProto || getAttrsProto())[attrsProtoKey + 'serializable'] = false;
            }
          }
        }

        parseSimpleAttribute('formerlySerializedAs', 'string');

        var range = attributes.range;

        if (range) {
          if (Array.isArray(range)) {
            if (range.length >= 2) {
              (attrsProto || getAttrsProto())[attrsProtoKey + 'min'] = range[0];
              (attrsProto || getAttrsProto())[attrsProtoKey + 'max'] = range[1];

              if (range.length > 2) {
                (attrsProto || getAttrsProto())[attrsProtoKey + 'step'] = range[2];
              }
            }
          }
        }

        parseSimpleAttribute('min', 'number');
        parseSimpleAttribute('max', 'number');
        parseSimpleAttribute('step', 'number');
        return result;
      }

      CCClass.isArray = function (defaultVal) {
        defaultVal = getDefault(defaultVal);
        return Array.isArray(defaultVal);
      };

      CCClass.getDefault = getDefault;
      CCClass.escapeForJS = escapeForJS;
      CCClass.IDENTIFIER_RE = IDENTIFIER_RE;
      CCClass.getNewValueTypeCode =  getNewValueTypeCodeJit;
      legacyCC.Class = CCClass;

      /**
       * @category decorator
       */

      /**
       * @en
       * A class(or property) decorator which does nothing.
       * @zh
       * 一个什么也不做的类（或属性）装饰器。
       */
      var emptyDecorator = function emptyDecorator() {};
      /**
       * @en
       * A function which ignore all arguments and return the `emptyDecorator`.
       * @zh
       * 一个忽略所有参数并且返回 `emptyDecorator` 的函数。
       */

      var emptyDecoratorFn = function emptyDecoratorFn() {
        return emptyDecorator;
      };
      /**
       * @en
       * Acts like `emptyDecorator` if called in form of `@x`;
       * acts like `emptyDecoratorFn` if called in form of `@x(...args)`.
       * @zh
       * 当以 `@x` 形式调用时表现如同 `emptyDecorator`，当以 `@x(...args)` 形式调用时表现如同 `emptyDecoratorFn`。
       */

      var emptySmartClassDecorator = makeSmartClassDecorator(function () {});
      /**
       * @en
       * Make a smart class decorator which can properly handle the following form decorator syntax:
       * - `@x`
       * - `@x(arg0)`
       * 
       * and forward both the decorated class and the `arg0` (in first form, `arg0` is forward as `undefined`) to
       * `decorate`.
       * @zh
       * 创建一个智能类装饰器，它能正确地处理以下形式的装饰器语法：
       * - `@x`
       * - `@x(arg0)`
       * 
       * 并且，将被装饰的类和 `arg0`（若是第一种形式，`arg0` 就是 `undefined`）一起转发给 `decorate`。
       * @param decorate 
       */

      function makeSmartClassDecorator(decorate) {
        return proxyFn;

        function proxyFn(target) {
          if (typeof target === 'function') {
            // If no parameter specified
            return decorate(target);
          } else {
            return function (constructor) {
              return decorate(constructor, target);
            };
          }
        }
      }

      function writeEditorClassProperty(constructor, propertyName, value) {
        var cache = getClassCache(constructor);

        if (cache) {
          var proto = getSubDict(cache, 'proto');
          getSubDict(proto, 'editor')[propertyName] = value;
        }
      }
      /**
       * @en
       * Make a function which accept an argument value and return a class decorator.
       * The decorator sets the editor property `propertyName`, on the decorated class, into that argument value.
       * @zh
       * 创建一个函数，该函数接受一个参数值并返回一个类装饰器。
       * 该装饰器将被装饰类的编辑器属性 `propertyName` 设置为该参数的值。
       * @param propertyName The editor property.
       */


      function makeEditorClassDecoratorFn(propertyName) {
        return function (value) {
          return function (constructor) {
            writeEditorClassProperty(constructor, propertyName, value);
          };
        };
      }
      /**
       * Make a smart class decorator.
       * The smart decorator sets the editor property `propertyName`, on the decorated class, into:
       * - `defaultValue` if the decorator is called with `@x` form, or
       * - the argument if the decorator is called with an argument, eg, the `@x(arg0)` form.
       * @zh
       * 创建一个智能类装饰器。
       * 该智能类装饰器将根据以下情况来设置被装饰类的编辑器属性 `propertyName`：
       * - 如果该装饰器是以 `@x` 形式调用的，该属性将被设置为 `defaultValue`。
       * - 如果该装饰器是以一个参数的形式，即 `@x(arg0)` 的形式调用的，该属性将被设置为传入的参数值。
       * @param propertyName The editor property.
       */

      function makeSmartEditorClassDecorator(propertyName, defaultValue) {
        return makeSmartClassDecorator(function (constructor, decoratedValue) {
          writeEditorClassProperty(constructor, propertyName, defaultValue !== undefined ? defaultValue : decoratedValue);
        });
      } // caches for class construction

      var CACHE_KEY = '__ccclassCache__';
      function getClassCache(ctor, decoratorName) {

        return getSubDict(ctor, CACHE_KEY);
      }
      function getSubDict(obj, key) {
        return obj[key] || (obj[key] = {});
      }

      /**
       * @category decorator
       */
      /**
       * @en Declare a standard ES6 or TS Class as a CCClass, please refer to the [document](https://docs.cocos.com/creator3d/manual/zh/scripting/ccclass.html)
       * @zh 将标准写法的 ES6 或者 TS Class 声明为 CCClass，具体用法请参阅[类型定义](https://docs.cocos.com/creator3d/manual/zh/scripting/ccclass.html)。
       * @param name - The class name used for serialization.
       * @example
       * ```ts
       * import { _decorator, Component } from 'cc';
       * const {ccclass} = _decorator;
       *
       * // define a CCClass, omit the name
       *  @ccclass
       * class NewScript extends Component {
       *     // ...
       * }
       *
       * // define a CCClass with a name
       *  @ccclass('LoginData')
       * class LoginData {
       *     // ...
       * }
       * ```
       */

      var ccclass = exports('c', makeSmartClassDecorator(function (constructor, name) {
        var base = js.getSuper(constructor);

        if (base === Object) {
          base = null;
        }

        var proto = {
          name: name,
          "extends": base,
          ctor: constructor,
          __ES6__: true
        };
        var cache = constructor[CACHE_KEY];

        if (cache) {
          var decoratedProto = cache.proto;

          if (decoratedProto) {
            // decoratedProto.properties = createProperties(ctor, decoratedProto.properties);
            js.mixin(proto, decoratedProto);
          }

          constructor[CACHE_KEY] = undefined;
        }

        var res = CCClass(proto); // validate methods

        return res;
      }));

      function property(target, propertyKey, descriptor) {
        var options = null;

        function normalized(target, propertyKey, descriptor) {
          var cache = getClassCache(target.constructor);

          if (cache) {
            var ccclassProto = getSubDict(cache, 'proto');
            var properties = getSubDict(ccclassProto, 'properties');
            genProperty(target.constructor, properties, propertyKey, options, descriptor, cache);
          }
        }

        if (target === undefined) {
          // @property() => LegacyPropertyDecorator
          return property({
            type: undefined
          });
        } else if (typeof propertyKey === 'undefined') {
          // @property(options) => LegacyPropertyDescriptor
          // @property(type) => LegacyPropertyDescriptor
          options = target;
          return normalized;
        } else {
          // @property
          normalized(target, propertyKey, descriptor);
        }
      }

      function getDefaultFromInitializer(initializer) {
        var value;

        try {
          value = initializer();
        } catch (e) {
          // just lazy initialize by CCClass
          return initializer;
        }

        if (_typeof(value) !== 'object' || value === null) {
          // string boolean number function undefined null
          return value;
        } else {
          // The default attribute will not be used in ES6 constructor actually,
          // so we dont need to simplify into `{}` or `[]` or vec2 completely.
          return initializer;
        }
      }

      function extractActualDefaultValues(ctor) {
        var dummyObj;

        try {
          dummyObj = new ctor();
        } catch (e) {

          return {};
        }

        return dummyObj;
      }

      function genProperty(ctor, properties, propertyKey, options, descriptor, cache) {
        var fullOptions;

        if (options) {
          fullOptions =  getFullFormOfProperty(options);
          fullOptions = fullOptions || options;
        }

        var existsPropertyRecord = properties[propertyKey];
        var propertyRecord = js.mixin(existsPropertyRecord || {}, fullOptions || {});

        if (descriptor && (descriptor.get || descriptor.set)) {

          if (descriptor.get) {
            propertyRecord.get = descriptor.get;
          }

          if (descriptor.set) {
            propertyRecord.set = descriptor.set;
          }
        } else {

          var defaultValue;

          if (descriptor) {
            // In case of Babel, if an initializer is given for class field.
            // That initializer is passed to `descriptor.initializer`.
            // babel
            if (descriptor.initializer) {
              defaultValue = getDefaultFromInitializer(descriptor.initializer);
            }
          } else {
            // In case of TypeScript, we can not directly capture the initializer.
            // We have to be hacking to extract the value.
            var actualDefaultValues = cache["default"] || (cache["default"] = extractActualDefaultValues(ctor));

            if (actualDefaultValues.hasOwnProperty(propertyKey)) {
              defaultValue = actualDefaultValues[propertyKey];
            }
          }

          propertyRecord["default"] = defaultValue;
        }

        properties[propertyKey] = propertyRecord;
      }

      /**
       * @category decorator
       */
      var serializable = exports('s', function serializable(target, propertyKey, descriptor) {
        return property(makeSerializable({}))(target, propertyKey, descriptor);
      });
      function formerlySerializedAs(name) {
        return property(makeSerializable({
          formerlySerializedAs: name
        }));
      }
      /**
       * @en
       * Marks the property as editor only.
       * @zh
       * 设置该属性仅在编辑器中生效。
       */

      var editorOnly = exports('bd', function editorOnly(target, propertyKey, descriptor) {
        return property({
          editorOnly: true
        })(target, propertyKey, descriptor);
      });

      function makeSerializable(options) {
        options.__noImplicit = true;

        if (!('serializable' in options)) {
          options.serializable = true;
        }

        return options;
      }

      /**
       * @category decorator
       */
      /**
       * @en Makes a CCClass that inherit from component execute in edit mode.<br/>
       * By default, all components are only executed in play mode,<br/>
       * which means they will not have their callback functions executed while the Editor is in edit mode.<br/>
       * @zh 允许继承自 Component 的 CCClass 在编辑器里执行。<br/>
       * 默认情况下，所有 Component 都只会在运行时才会执行，也就是说它们的生命周期回调不会在编辑器里触发。
       * @example
       * ```ts
       * import { _decorator, Component } from 'cc';
       * const {ccclass, executeInEditMode} = _decorator;
       *
       *  @ccclass
       *  @executeInEditMode
       * class NewScript extends Component {
       *     // ...
       * }
       * ```
       */

      var executeInEditMode = exports('b1',  emptySmartClassDecorator);
      /**
       * @en Add the current component to the specific menu path in `Add Component` selector of the inspector panel
       * @zh 将当前组件添加到组件菜单中，方便用户查找。例如 "Rendering/CameraCtrl"。
       * @param path - The path is the menu represented like a pathname. For example the menu could be "Rendering/CameraCtrl".
       * @example
       * ```ts
       * import { _decorator, Component } from 'cc';
       * const {ccclass, menu} = _decorator;
       *
       * @ccclass
       * @menu("Rendering/CameraCtrl")
       * class NewScript extends Component {
       *     // ...
       * }
       * ```
       */

      var menu = exports('m',  emptyDecoratorFn);
      /**
       * @en When {{executeInEditMode}} is set, this decorator will decide when a node with the component is on focus whether the editor should running in high FPS mode.
       * @zh 当指定了 "executeInEditMode" 以后，playOnFocus 可以在选中当前组件所在的节点时，提高编辑器的场景刷新频率到 60 FPS，否则场景就只会在必要的时候进行重绘。
       * @example
       * ```ts
       * import { _decorator, Component } from 'cc';
       * const {ccclass, playOnFocus, executeInEditMode} = _decorator;
       *
       * @ccclass
       * @executeInEditMode
       * @playOnFocus
       * class CameraCtrl extends Component {
       *     // ...
       * }
       * ```
       */

      var playOnFocus = exports('b6',  emptySmartClassDecorator);
      /**
       * @en Use a customized inspector page in the **inspector**
       * @zh 自定义当前组件在 **属性检查器** 中渲染时所用的 UI 页面描述。
       * @param url The url of the page definition in js
       * @example
       * ```ts
       * import { _decorator, Component } from 'cc';
       * const {ccclass, inspector} = _decorator;
       *
       * @ccclass
       * @inspector("packages://inspector/inspectors/comps/camera-ctrl.js")
       * class NewScript extends Component {
       *     // ...
       * }
       * ```
       */

      var inspector = exports('b7',  emptyDecoratorFn);
      /**
       * @en Define the icon of the component.
       * @zh 自定义当前组件在编辑器中显示的图标 url。
       * @param url
       * @private
       * @example
       * ```ts
       * import { _decorator, Component } from 'cc';
       * const {ccclass, icon} = _decorator;
       *
       *  @ccclass
       *  @icon("xxxx.png")
       * class NewScript extends Component {
       *     // ...
       * }
       * ```
       */

      var icon = exports('b8',  emptyDecoratorFn);
      /**
       * @en Define the help documentation url, if given, the component section in the **inspector** will have a help documentation icon reference to the web page given. 
       * @zh 指定当前组件的帮助文档的 url，设置过后，在 **属性检查器** 中就会出现一个帮助图标，用户点击将打开指定的网页。
       * @param url The url of the help documentation
       * @example
       * ```ts
       * import { _decorator, Component } from 'cc';
       * const {ccclass, help} = _decorator;
       *
       * @ccclass
       * @help("app://docs/html/components/spine.html")
       * class NewScript extends Component {
       *     // ...
       * }
       * ```
       */

      var help = exports('h',  emptyDecoratorFn);
      /**
       * @en
       * Enables the editor interoperability of the property.
       * @zh
       * 允许该属性与编辑器交互。
       */

      var editable = exports('F',  emptyDecorator );
      /**
       * @en
       * Sets the condition to show the property.
       * @zh
       * 设置在编辑器展示该属性的条件。
       * @param condition 展示条件，当返回 `true` 时展示；否则不展示。
       */

      var visible = exports('b5',  emptyDecoratorFn );
      /**
       * @en
       * Sets the property to be read only in editor.
       * @zh
       * 设置该属性在编辑器中仅是可读的。
       */

      var readOnly = exports('bM',  emptyDecorator );
      /**
       * @en
       * Sets the display name of the property in editor.
       * @zh
       * 设置该属性在编辑器中的显示名称。
       * @param text 显示名称。
       */

      var displayName = exports('b3',  emptyDecoratorFn );
      /**
       * @en
       * Sets the tooltip content of the property in editor.
       * @zh
       * 设置该属性在编辑器中的工具提示内容。
       * @param text 工具提示。
       */

      var tooltip = exports('a',  emptyDecoratorFn );
      /**
       * @en
       * Sets the allowed range of the property in editor.
       * @zh
       * 设置该属性在编辑器中允许设置的范围。
       * @param values 范围。
       */

      var range = exports('r',  emptyDecoratorFn );
      /**
       * @en
       * Sets the allowed min value of the property in editor.
       * @zh
       * 设置该属性在编辑器中允许的最小值。
       * @param value 最小值。
       */

      var rangeMin = exports('aU',  emptyDecoratorFn );
      /**
       * @en
       * Sets the allowed max value of the property in editor.
       * @zh
       * 设置该属性在编辑器中允许的最大值。
       * @param value 最大值。
       */

      var rangeMax = exports('aV',  emptyDecoratorFn );
      /**
       * @en
       * Sets the step of the property in editor.
       * @zh
       * 设置该属性在编辑器中的步进值。
       * @param value 步进值。
       */

      var rangeStep = exports('bx',  emptyDecoratorFn );
      /**
       * @en
       * Enable a slider be given to coordinate the property in editor.
       * @zh
       * 允许在编辑器中提供滑动条来调节值
       */

      var slide = exports('bw',  emptyDecorator );
      /**
       * @en
       * Sets the display order of the property in editor.
       * @zh
       * 设置该属性在编辑器中的显示顺序。
       * @param order 显示顺序。
       */

      var displayOrder = exports('b2',  emptyDecoratorFn );
      /**
       * @en
       * Sets the unit of the property in editor.
       * @zh
       * 设置该属性在编辑器中的计量单位。
       * @param name 计量单位的名称。
       */

      var unit = exports('bF',  emptyDecoratorFn );
      /**
       * @en
       * Sets to convert the value into radian before feed it to the property in editor.
       * @zh
       * 设置在编辑器中赋值该属性前将值先转换为弧度制。
       */

      var radian = exports('bK',  emptyDecorator );
      /**
       * @en
       * Enable multi-line display of the property in editor.
       * @zh
       * 允许在编辑器中对该属性进行多行显示。
       */

      var multiline = exports('bO',  emptyDecorator );
      /**
       * @en
       * Sets the property so that it does not interop with the animation parts in editor.
       * @zh
       * 设置该属性不参与编辑器中动画相关的交互。
       */

      var disallowAnimation = exports('bN',  emptyDecorator );

      /**
       * @category decorator
       */
      /**
       * @en Declare the property as integer
       * @zh 将该属性标记为整数。
       */

      var integer = exports('b9', type(CCInteger));
      /**
       * @en Declare the property as float
       * @zh 将该属性标记为浮点数。
       */

      var _float = exports('ba', type(CCFloat));

      var _boolean = exports('bb', type(CCBoolean));
      var string = exports('bc', type(CCString));
      /**
       * @en Declare the property as the given type
       * @zh 标记该属性的类型。
       * @param type
       */

      function type(type) {
        return property({
          type: type
        });
      }

      /**
       * 事件相关
       * @category event
       */

      /**
       * @en
       * Base class of all kinds of events.
       *
       * @zh
       * 所有事件对象的基类，包含事件相关基本信息。
       */

      var Event = exports('ay', /*#__PURE__*/function () {
        // Event types

        /**
         * @en
         * Code for event without type.
         *
         * @zh
         * 没有类型的事件。
         */

        /**
         * @en
         * The type code of Touch event.
         *
         * @zh
         * 触摸事件类型。
         */

        /**
         * @en
         * The type code of Mouse event.
         *
         * @zh
         * 鼠标事件类型。
         */

        /**
         * @en
         * The type code of Keyboard event.
         *
         * @zh
         * 键盘事件类型。
         */

        /**
         * @en
         * The type code of Acceleration event.
         *
         * @zh
         * 加速器事件类型。
         */
        // Event phases

        /**
         * @en
         * Events not currently dispatched are in this phase.
         *
         * @zh
         * 尚未派发事件阶段。
         */

        /**
         * @en
         * The capturing phase comprises the journey from the root to the last node before the event target's node
         * [markdown](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow)
         *
         * @zh
         * 捕获阶段，包括事件目标节点之前从根节点到最后一个节点的过程。
         */

        /**
         * @en
         * The target phase comprises only the event target node
         * [markdown] (http://www.w3.org/TR/DOM-Level-3-Events/#event-flow)
         *
         * @zh
         * 目标阶段仅包括事件目标节点。
         */

        /**
         * @en
         * The bubbling phase comprises any subsequent nodes encountered on the return trip to the root of the hierarchy
         * [markdown] (http://www.w3.org/TR/DOM-Level-3-Events/#event-flow)
         *
         * @zh
         * 冒泡阶段， 包括回程遇到到层次根节点的任何后续节点。
         */

        /**
         * @en
         * The name of the event (case-sensitive), e.g. "click", "fire", or "submit".
         *
         * @zh
         * 事件类型。
         */

        /**
         * @en
         * Indicate whether the event bubbles up through the hierarchy or not.
         *
         * @zh
         * 表示该事件是否进行冒泡。
         */

        /**
         * @en
         * A reference to the target to which the event was originally dispatched.
         *
         * @zh
         * 最初事件触发的目标。
         */

        /**
         * @en
         * A reference to the currently registered target for the event.
         *
         * @zh
         * 当前目标。
         */

        /**
         * @en
         * Indicates which phase of the event flow is currently being evaluated.
         * Returns an integer value represented by 4 constants:
         *  - Event.NONE = 0
         *  - Event.CAPTURING_PHASE = 1
         *  - Event.AT_TARGET = 2
         *  - Event.BUBBLING_PHASE = 3
         * The phases are explained in the [section 3.1, Event dispatch and DOM event flow]
         * [markdown](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow), of the DOM Level 3 Events specification.
         *
         * @zh
         * 事件阶段。
         */

        /**
         * @en
         * Stops propagation for current event.
         *
         * @zh
         * 停止传递当前事件。
         */

        /**
         * @en
         * Stops propagation for current event immediately,
         * the event won't even be dispatched to the listeners attached in the current target.
         *
         * @zh
         * 立即停止当前事件的传递，事件甚至不会被分派到所连接的当前目标。
         */

        /**
         * @param type - The name of the event (case-sensitive), e.g. "click", "fire", or "submit"
         * @param bubbles - A boolean indicating whether the event bubbles up through the tree or not
         */
        function Event(type, bubbles) {
          _classCallCheck(this, Event);

          this.type = void 0;
          this.bubbles = void 0;
          this.target = null;
          this.currentTarget = null;
          this.eventPhase = 0;
          this.propagationStopped = false;
          this.propagationImmediateStopped = false;
          this.type = type;
          this.bubbles = !!bubbles;
        }
        /**
         * @en
         * Reset the event for being stored in the object pool.
         *
         * @zh
         * 重置事件对象以便在对象池中存储。
         */


        _createClass(Event, [{
          key: "unuse",
          value: function unuse() {
            this.type = Event.NO_TYPE;
            this.target = null;
            this.currentTarget = null;
            this.eventPhase = Event.NONE;
            this.propagationStopped = false;
            this.propagationImmediateStopped = false;
          }
          /**
           * @en
           * Reinitialize the event for being used again after retrieved from the object pool.
           * @zh
           * 重新初始化让对象池中取出的事件可再次使用。
           * @param type - The name of the event (case-sensitive), e.g. "click", "fire", or "submit"
           * @param bubbles - A boolean indicating whether the event bubbles up through the tree or not
           */

        }, {
          key: "reuse",
          value: function reuse(type, bubbles) {
            this.type = type;
            this.bubbles = bubbles || false;
          } // /**
          //  * @en Stops propagation for current event.
          //  * @zh 停止传递当前事件。
          //  */
          // public stopPropagation () {
          //     this.propagationStopped = true;
          // }
          // /**
          //  * @en Stops propagation for current event immediately,
          //  * the event won't even be dispatched to the listeners attached in the current target.
          //  * @zh 立即停止当前事件的传递，事件甚至不会被分派到所连接的当前目标。
          //  */
          // public stopPropagationImmediate () {
          //     this.propagationImmediateStopped = true;
          // }

          /**
           * @en
           * Checks whether the event has been stopped.
           *
           * @zh
           * 检查该事件是否已经停止传递。
           */

        }, {
          key: "isStopped",
          value: function isStopped() {
            return this.propagationStopped || this.propagationImmediateStopped;
          }
          /**
           * @en
           * Gets current target of the event                                                            <br/>
           * note: It only be available when the event listener is associated with node.                <br/>
           * It returns 0 when the listener is associated with fixed priority.
           * @zh
           * 获取当前目标节点
           * @returns - The target with which the event associates.
           */

        }, {
          key: "getCurrentTarget",
          value: function getCurrentTarget() {
            return this.currentTarget;
          }
          /**
           * @en
           * Gets the event type.
           * @zh
           * 获取事件类型。
           */

        }, {
          key: "getType",
          value: function getType() {
            return this.type;
          }
        }]);

        return Event;
      }());
      /* tslint:disable:no-string-literal */


      Event.NO_TYPE = 'no_type';
      Event.TOUCH = 'touch';
      Event.MOUSE = 'mouse';
      Event.KEYBOARD = 'keyboard';
      Event.ACCELERATION = 'acceleration';
      Event.NONE = 0;
      Event.CAPTURING_PHASE = 1;
      Event.AT_TARGET = 2;
      Event.BUBBLING_PHASE = 3;
      legacyCC.Event = Event;

      /**
       * @category memop
       */

      /**
       * @en Typed object pool.
       * It's a traditional design, you can get elements out of the pool or recycle elements by putting back into the pool.
       * @zh 支持类型的对象池。这是一个传统设计的对象池，你可以从对象池中取出对象或是放回不再需要对象来复用。
       * @see [[RecyclePool]]
       */
      var Pool$1 = exports('P', /*#__PURE__*/function () {
        /**
         * @en Constructor with the allocator of elements and initial pool size
         * @zh 使用元素的构造器和初始大小的构造函数
         * @param ctor The allocator of elements in pool, it's invoked directly without `new`
         * @param elementsPerBatch Initial pool size, this size will also be the incremental size when the pool is overloaded
         */
        function Pool(ctor, elementsPerBatch) {
          _classCallCheck(this, Pool);

          this._ctor = void 0;
          this._elementsPerBatch = void 0;
          this._nextAvail = void 0;
          this._freepool = [];
          this._ctor = ctor;
          this._elementsPerBatch = Math.max(elementsPerBatch, 1);
          this._nextAvail = this._elementsPerBatch - 1;

          for (var i = 0; i < this._elementsPerBatch; ++i) {
            this._freepool.push(ctor());
          }
        }
        /**
         * @en Take an object out of the object pool.
         * @zh 从对象池中取出一个对象。
         * @return An object ready for use. This function always return an object.
         */


        _createClass(Pool, [{
          key: "alloc",
          value: function alloc() {
            if (this._nextAvail < 0) {
              var elementsPerBatch = this._elementsPerBatch;

              for (var i = 0; i < elementsPerBatch; i++) {
                this._freepool.push(this._ctor());
              }

              this._nextAvail = elementsPerBatch - 1;
            }

            var ret = this._freepool[this._nextAvail--];
            this._freepool.length--;
            return ret;
          }
          /**
           * @en Put an object back into the object pool.
           * @zh 将一个对象放回对象池中。
           * @param obj The object to be put back into the pool
           */

        }, {
          key: "free",
          value: function free(obj) {
            this._freepool.push(obj);

            this._nextAvail++;
          }
          /**
           * @en Put multiple objects back into the object pool.
           * @zh 将一组对象放回对象池中。
           * @param objs An array of objects to be put back into the pool
           */

        }, {
          key: "freeArray",
          value: function freeArray(objs) {
            Array.prototype.push.apply(this._freepool, objs);
            this._nextAvail += objs.length;
          }
          /**
           * @en Destroy all elements and clear the pool.
           * @zh 释放对象池中所有资源并清空缓存池。
           * @param dtor The destructor function, it will be invoked for all elements in the pool
           */

        }, {
          key: "destroy",
          value: function destroy(dtor) {
            if (dtor) {
              for (var i = 0; i <= this._nextAvail; i++) {
                dtor(this._freepool[i]);
              }
            }

            this._freepool.length = 0;
            this._nextAvail = -1;
          }
        }]);

        return Pool;
      }());

      var Destroyed = 1 << 0;
      var ToDestroy = 1 << 2;
      var DontSave = 1 << 3;
      var EditorOnly = 1 << 4;
      var Dirty = 1 << 5;
      var DontDestroy = 1 << 6;
      var Destroying = 1 << 7;
      var Deactivating = 1 << 8;
      var LockedInEditor = 1 << 9; // var HideInGame = 1 << 9;

      var HideInHierarchy = 1 << 10;
      var IsOnEnableCalled = 1 << 11;
      var IsEditorOnEnableCalled = 1 << 12;
      var IsPreloadStarted = 1 << 13;
      var IsOnLoadCalled = 1 << 14;
      var IsOnLoadStarted = 1 << 15;
      var IsStartCalled = 1 << 16;
      var IsRotationLocked = 1 << 17;
      var IsScaleLocked = 1 << 18;
      var IsAnchorLocked = 1 << 19;
      var IsSizeLocked = 1 << 20;
      var IsPositionLocked = 1 << 21; // var Hide = HideInGame | HideInEditor;
      // should not clone or serialize these flags

      var PersistentMask = ~(ToDestroy | Dirty | Destroying | DontDestroy | Deactivating | IsPreloadStarted | IsOnLoadStarted | IsOnLoadCalled | IsStartCalled | IsOnEnableCalled | IsEditorOnEnableCalled | IsRotationLocked | IsScaleLocked | IsAnchorLocked | IsSizeLocked | IsPositionLocked
      /*RegisteredInEditor*/
      );
      var objectsToDestroy = [];

      function compileDestruct(obj, ctor) {
        var shouldSkipId = obj instanceof legacyCC._BaseNode || obj instanceof legacyCC.Component;
        var idToSkip = shouldSkipId ? '_id' : null;
        var key;
        var propsToReset = {};

        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (key === idToSkip) {
              continue;
            }

            switch (_typeof(obj[key])) {
              case 'string':
                propsToReset[key] = '';
                break;

              case 'object':
              case 'function':
                propsToReset[key] = null;
                break;
            }
          }
        } // Overwrite propsToReset according to Class


        if (CCClass._isCCClass(ctor)) {
          var attrs = legacyCC.Class.Attr.getClassAttrs(ctor);
          var propList = ctor.__props__; // tslint:disable-next-line: prefer-for-of

          for (var i = 0; i < propList.length; i++) {
            key = propList[i];
            var attrKey = key + legacyCC.Class.Attr.DELIMETER + 'default';

            if (attrKey in attrs) {
              if (shouldSkipId && key === '_id') {
                continue;
              }

              switch (_typeof(attrs[attrKey])) {
                case 'string':
                  propsToReset[key] = '';
                  break;

                case 'object':
                case 'function':
                  propsToReset[key] = null;
                  break;

                case 'undefined':
                  propsToReset[key] = undefined;
                  break;
              }
            }
          }
        }

        {
          // compile code
          var func = ''; // tslint:disable: forin

          for (key in propsToReset) {
            var statement = void 0;

            if (CCClass.IDENTIFIER_RE.test(key)) {
              statement = 'o.' + key + '=';
            } else {
              statement = 'o[' + CCClass.escapeForJS(key) + ']=';
            }

            var val = propsToReset[key];

            if (val === '') {
              val = '""';
            }

            func += statement + val + ';\n';
          }

          return Function('o', func);
        }
      }
      /**
       * @en
       * The base class of most of all the objects in Fireball.
       * @zh
       * 大部分对象的基类。
       * @private
       */


      var CCObject = exports('as', /*#__PURE__*/function () {
        _createClass(CCObject, null, [{
          key: "_deferredDestroy",
          value: function _deferredDestroy() {
            var deleteCount = objectsToDestroy.length;

            for (var i = 0; i < deleteCount; ++i) {
              var obj = objectsToDestroy[i];

              if (!(obj._objFlags & Destroyed)) {
                obj._destroyImmediate();
              }
            } // if we called b.destory() in a.onDestroy(), objectsToDestroy will be resized,
            // but we only destroy the objects which called destory in this frame.


            if (deleteCount === objectsToDestroy.length) {
              objectsToDestroy.length = 0;
            } else {
              objectsToDestroy.splice(0, deleteCount);
            }
          }
        }]);

        function CCObject() {
          var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          _classCallCheck(this, CCObject);

          this._objFlags = void 0;
          this._name = void 0;

          /**
           * @default ""
           * @private
           */
          this._name = name;
          /**
           * @default 0
           * @private
           */

          this._objFlags = 0;
        } // MEMBER

        /**
         * @en The name of the object.
         * @zh 该对象的名称。
         * @default ""
         * @example
         * ```
         * obj.name = "New Obj";
         * ```
         */


        _createClass(CCObject, [{
          key: "destroy",

          /**
           * @en
           * Destroy this Object, and release all its own references to other objects.<br/>
           * Actual object destruction will delayed until before rendering.
           * From the next frame, this object is not usable any more.
           * You can use `isValid(obj)` to check whether the object is destroyed before accessing it.
           * @zh
           * 销毁该对象，并释放所有它对其它对象的引用。<br/>
           * 实际销毁操作会延迟到当前帧渲染前执行。从下一帧开始，该对象将不再可用。
           * 您可以在访问对象之前使用 `isValid(obj)` 来检查对象是否已被销毁。
           * @return whether it is the first time the destroy being called
           * @example
           * ```
           * obj.destroy();
           * ```
           */
          value: function destroy() {
            if (this._objFlags & Destroyed) {
              warnID(5000);
              return false;
            }

            if (this._objFlags & ToDestroy) {
              return false;
            }

            this._objFlags |= ToDestroy;
            objectsToDestroy.push(this);

            return true;
          }
          /**
           * Clear all references in the instance.
           *
           * NOTE: this method will not clear the getter or setter functions which defined in the instance of CCObject.
           *       You can override the _destruct method if you need, for example:
           *       _destruct: function () {
           *           for (var key in this) {
           *               if (this.hasOwnProperty(key)) {
           *                   switch (typeof this[key]) {
           *                       case 'string':
           *                           this[key] = '';
           *                           break;
           *                       case 'object':
           *                       case 'function':
           *                           this[key] = null;
           *                           break;
           *               }
           *           }
           *       }
           *
           */

        }, {
          key: "_destruct",
          value: function _destruct() {
            var ctor = this.constructor;
            var destruct = ctor.__destruct__;

            if (!destruct) {
              destruct = compileDestruct(this, ctor);
              value(ctor, '__destruct__', destruct, true);
            }

            destruct(this);
          }
        }, {
          key: "_destroyImmediate",
          value: function _destroyImmediate() {
            if (this._objFlags & Destroyed) {
              errorID(5000);
              return;
            } // engine internal callback
            // @ts-ignore


            if (this._onPreDestroy) {
              // @ts-ignore
              this._onPreDestroy();
            }

            {
              this._destruct();
            }

            this._objFlags |= Destroyed;
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(value) {
            this._name = value;
          }
          /**
           * @en
           * Indicates whether the object is not yet destroyed. (It will not be available after being destroyed)<br>
           * When an object's `destroy` is called, it is actually destroyed after the end of this frame.
           * So `isValid` will return false from the next frame, while `isValid` in the current frame will still be true.
           * If you want to determine whether the current frame has called `destroy`, use `isValid(obj, true)`,
           * but this is often caused by a particular logical requirements, which is not normally required.
           *
           * @zh
           * 表示该对象是否可用（被 destroy 后将不可用）。<br>
           * 当一个对象的 `destroy` 调用以后，会在这一帧结束后才真正销毁。<br>
           * 因此从下一帧开始 `isValid` 就会返回 false，而当前帧内 `isValid` 仍然会是 true。<br>
           * 如果希望判断当前帧是否调用过 `destroy`，请使用 `isValid(obj, true)`，不过这往往是特殊的业务需求引起的，通常情况下不需要这样。
           * @default true
           * @readOnly
           * @example
           * ```ts
           * import { Node, log } from 'cc';
           * const node = new Node();
           * log(node.isValid);    // true
           * node.destroy();
           * log(node.isValid);    // true, still valid in this frame
           * // after a frame...
           * log(node.isValid);    // false, destroyed in the end of last frame
           * ```
           */

        }, {
          key: "isValid",
          get: function get() {
            return !(this._objFlags & Destroyed);
          }
        }]);

        return CCObject;
      }());

      var prototype = CCObject.prototype;
      /*
       * Init this object from the custom serialized data.
       * @method _deserialize
       * @param {Object} data - the serialized json data
       * @param {_Deserializer} ctx
       * @private
       */
      // @ts-ignore


      prototype._deserialize = null;
      /*
       * Called before the object being destroyed.
       * @method _onPreDestroy
       * @private
       */
      // @ts-ignore

      prototype._onPreDestroy = null;
      CCClass.fastDefine('cc.Object', CCObject, {
        _name: '',
        _objFlags: 0
      });
      /**
       * Bit mask that controls object states.
       * @enum Object.Flags
       * @private
       */

      value(CCObject, 'Flags', {
        Destroyed: Destroyed,
        DontSave: DontSave,
        EditorOnly: EditorOnly,
        Dirty: Dirty,
        DontDestroy: DontDestroy,
        PersistentMask: PersistentMask,
        Destroying: Destroying,
        Deactivating: Deactivating,
        LockedInEditor: LockedInEditor,
        HideInHierarchy: HideInHierarchy,
        IsPreloadStarted: IsPreloadStarted,
        IsOnLoadStarted: IsOnLoadStarted,
        IsOnLoadCalled: IsOnLoadCalled,
        IsOnEnableCalled: IsOnEnableCalled,
        IsStartCalled: IsStartCalled,
        IsEditorOnEnableCalled: IsEditorOnEnableCalled,
        IsPositionLocked: IsPositionLocked,
        IsRotationLocked: IsRotationLocked,
        IsScaleLocked: IsScaleLocked,
        IsAnchorLocked: IsAnchorLocked,
        IsSizeLocked: IsSizeLocked
      });

      /*
       * @en
       * Checks whether the object is non-nil and not yet destroyed.<br>
       * When an object's `destroy` is called, it is actually destroyed after the end of this frame.
       * So `isValid` will return false from the next frame, while `isValid` in the current frame will still be true.
       * If you want to determine whether the current frame has called `destroy`, use `isValid(obj, true)`,
       * but this is often caused by a particular logical requirements, which is not normally required.
       *
       * @zh
       * 检查该对象是否不为 null 并且尚未销毁。<br>
       * 当一个对象的 `destroy` 调用以后，会在这一帧结束后才真正销毁。<br>
       * 因此从下一帧开始 `isValid` 就会返回 false，而当前帧内 `isValid` 仍然会是 true。<br>
       * 如果希望判断当前帧是否调用过 `destroy`，请使用 `isValid(obj, true)`，不过这往往是特殊的业务需求引起的，通常情况下不需要这样。
       *
       * @method isValid
       * @param value
       * @param [strictMode=false] - If true, Object called destroy() in this frame will also treated as invalid.
       * @return whether is valid
       * @example
       * ```
       * import { Node, log } from 'cc';
       * var node = new Node();
       * log(isValid(node));    // true
       * node.destroy();
       * log(isValid(node));    // true, still valid in this frame
       * // after a frame...
       * log(isValid(node));    // false, destroyed in the end of last frame
       * ```
       */
      function isValid(value, strictMode) {
        if (_typeof(value) === 'object') {
          return !!value && !(value._objFlags & (strictMode ? Destroyed | ToDestroy : Destroyed));
        } else {
          return typeof value !== 'undefined';
        }
      }
      legacyCC.isValid = isValid;

      legacyCC.Object = CCObject;

      var fastRemoveAt$1 = array.fastRemoveAt;

      function empty() {}

      var CallbackInfo = /*#__PURE__*/function () {
        function CallbackInfo() {
          _classCallCheck(this, CallbackInfo);

          this.callback = empty;
          this.target = undefined;
          this.once = false;
        }

        _createClass(CallbackInfo, [{
          key: "set",
          value: function set(callback, target, once) {
            this.callback = callback || empty;
            this.target = target;
            this.once = !!once;
          }
        }, {
          key: "reset",
          value: function reset() {
            this.target = undefined;
            this.callback = empty;
            this.once = false;
          }
        }, {
          key: "check",
          value: function check() {
            // Validation
            if (this.target instanceof CCObject && !isValid(this.target, true)) {
              return false;
            } else {
              return true;
            }
          }
        }]);

        return CallbackInfo;
      }();

      var callbackInfoPool = new Pool$1(function () {
        return new CallbackInfo();
      }, 32);
      /**
       * @zh 事件监听器列表的简单封装。
       * @en A simple list of event callbacks
       */

      var CallbackList = /*#__PURE__*/function () {
        function CallbackList() {
          _classCallCheck(this, CallbackList);

          this.callbackInfos = [];
          this.isInvoking = false;
          this.containCanceled = false;
        }

        _createClass(CallbackList, [{
          key: "removeByCallback",

          /**
           * @zh 从列表中移除与指定目标相同回调函数的事件。
           * @en Remove the event listeners with the given callback from the list
           *
           * @param cb - The callback to be removed
           */
          value: function removeByCallback(cb) {
            for (var i = 0; i < this.callbackInfos.length; ++i) {
              var info = this.callbackInfos[i];

              if (info && info.callback === cb) {
                info.reset();
                callbackInfoPool.free(info);
                fastRemoveAt$1(this.callbackInfos, i);
                --i;
              }
            }
          }
          /**
           * @zh 从列表中移除与指定目标相同调用者的事件。
           * @en Remove the event listeners with the given target from the list
           * @param target
           */

        }, {
          key: "removeByTarget",
          value: function removeByTarget(target) {
            for (var i = 0; i < this.callbackInfos.length; ++i) {
              var info = this.callbackInfos[i];

              if (info && info.target === target) {
                info.reset();
                callbackInfoPool.free(info);
                fastRemoveAt$1(this.callbackInfos, i);
                --i;
              }
            }
          }
          /**
           * @zh 移除指定编号事件。
           * @en Remove the event listener at the given index
           * @param index
           */

        }, {
          key: "cancel",
          value: function cancel(index) {
            var info = this.callbackInfos[index];

            if (info) {
              info.reset();

              if (this.isInvoking) {
                this.callbackInfos[index] = null;
              } else {
                fastRemoveAt$1(this.callbackInfos, index);
              }

              callbackInfoPool.free(info);
            }

            this.containCanceled = true;
          }
          /**
           * @zh 注销所有事件。
           * @en Cancel all event listeners
           */

        }, {
          key: "cancelAll",
          value: function cancelAll() {
            for (var i = 0; i < this.callbackInfos.length; i++) {
              var info = this.callbackInfos[i];

              if (info) {
                info.reset();
                callbackInfoPool.free(info);
                this.callbackInfos[i] = null;
              }
            }

            this.containCanceled = true;
          }
          /**
           * @zh 立即删除所有取消的回调。（在移除过程中会更加紧凑的排列数组）
           * @en Delete all canceled callbacks and compact array
           */

        }, {
          key: "purgeCanceled",
          value: function purgeCanceled() {
            for (var i = this.callbackInfos.length - 1; i >= 0; --i) {
              var info = this.callbackInfos[i];

              if (!info) {
                fastRemoveAt$1(this.callbackInfos, i);
              }
            }

            this.containCanceled = false;
          }
          /**
           * @zh 清除并重置所有数据。
           * @en Clear all data
           */

        }, {
          key: "clear",
          value: function clear() {
            this.cancelAll();
            this.callbackInfos.length = 0;
            this.isInvoking = false;
            this.containCanceled = false;
          }
        }]);

        return CallbackList;
      }();
      var MAX_SIZE = 16;
      var callbackListPool = new Pool$1(function () {
        return new CallbackList();
      }, MAX_SIZE);

      /**
       * @zh CallbacksInvoker 用来根据事件名（Key）管理事件监听器列表并调用回调方法。
       * @en CallbacksInvoker is used to manager and invoke event listeners with different event keys, 
       * each key is mapped to a CallbackList.
       */
      var CallbacksInvoker = exports('aW', /*#__PURE__*/function () {
        function CallbacksInvoker() {
          _classCallCheck(this, CallbacksInvoker);

          this._callbackTable = createMap(true);
        }

        _createClass(CallbacksInvoker, [{
          key: "on",

          /**
           * @zh 向一个事件名注册一个新的事件监听器，包含回调函数和调用者
           * @en Register an event listener to a given event key with callback and target.
           *
           * @param key - Event type
           * @param callback - Callback function when event triggered
           * @param target - Callback callee
           * @param once - Whether invoke the callback only once (and remove it)
           */
          value: function on(key, callback, target, once) {
            if (!this.hasEventListener(key, callback, target)) {
              var list = this._callbackTable[key];

              if (!list) {
                list = this._callbackTable[key] = callbackListPool.alloc();
              }

              var info = callbackInfoPool.alloc();
              info.set(callback, target, once);
              list.callbackInfos.push(info);
            }

            return callback;
          }
          /**
           * @zh 检查指定事件是否已注册回调。
           * @en Checks whether there is correspond event listener registered on the given event
           * @param key - Event type
           * @param callback - Callback function when event triggered
           * @param target - Callback callee
           */

        }, {
          key: "hasEventListener",
          value: function hasEventListener(key, callback, target) {
            var list = this._callbackTable[key];

            if (!list) {
              return false;
            } // check any valid callback


            var infos = list.callbackInfos;

            if (!callback) {
              // Make sure no cancelled callbacks
              if (list.isInvoking) {
                for (var i = 0; i < infos.length; ++i) {
                  if (infos[i]) {
                    return true;
                  }
                }

                return false;
              } else {
                return infos.length > 0;
              }
            }

            for (var _i = 0; _i < infos.length; ++_i) {
              var info = infos[_i];

              if (info && info.check() && info.callback === callback && info.target === target) {
                return true;
              }
            }

            return false;
          }
          /**
           * @zh 移除在特定事件类型中注册的所有回调或在某个目标中注册的所有回调。
           * @en Removes all callbacks registered in a certain event type or all callbacks registered with a certain target
           * @param keyOrTarget - The event type or target with which the listeners will be removed
           */

        }, {
          key: "removeAll",
          value: function removeAll(keyOrTarget) {
            if (typeof keyOrTarget === 'string') {
              // remove by key
              var list = this._callbackTable[keyOrTarget];

              if (list) {
                if (list.isInvoking) {
                  list.cancelAll();
                } else {
                  list.clear();
                  callbackListPool.free(list);
                  delete this._callbackTable[keyOrTarget];
                }
              }
            } else if (keyOrTarget) {
              // remove by target
              for (var key in this._callbackTable) {
                var _list = this._callbackTable[key];

                if (_list.isInvoking) {
                  var infos = _list.callbackInfos;

                  for (var i = 0; i < infos.length; ++i) {
                    var info = infos[i];

                    if (info && info.target === keyOrTarget) {
                      _list.cancel(i);
                    }
                  }
                } else {
                  _list.removeByTarget(keyOrTarget);
                }
              }
            }
          }
          /**
           * @zh 删除以指定事件，回调函数，目标注册的回调。
           * @en Remove event listeners registered with the given event key, callback and target
           * @param key - Event type
           * @param callback - The callback function of the event listener, if absent all event listeners for the given type will be removed
           * @param target - The callback callee of the event listener
           */

        }, {
          key: "off",
          value: function off(key, callback, target) {
            var list = this._callbackTable[key];

            if (list) {
              var infos = list.callbackInfos;

              if (callback) {
                for (var i = 0; i < infos.length; ++i) {
                  var info = infos[i];

                  if (info && info.callback === callback && info.target === target) {
                    list.cancel(i);
                    break;
                  }
                }
              } else {
                this.removeAll(key);
              }
            }
          }
          /**
           * @zh 派发一个指定事件，并传递需要的参数
           * @en Trigger an event directly with the event name and necessary arguments.
           * @param key - event type
           * @param arg0 - The first argument to be passed to the callback
           * @param arg1 - The second argument to be passed to the callback
           * @param arg2 - The third argument to be passed to the callback
           * @param arg3 - The fourth argument to be passed to the callback
           * @param arg4 - The fifth argument to be passed to the callback
           */

        }, {
          key: "emit",
          value: function emit(key, arg0, arg1, arg2, arg3, arg4) {
            var list = this._callbackTable[key];

            if (list) {
              var rootInvoker = !list.isInvoking;
              list.isInvoking = true;
              var infos = list.callbackInfos;

              for (var i = 0, len = infos.length; i < len; ++i) {
                var info = infos[i];

                if (info) {
                  var callback = info.callback;
                  var target = info.target; // Pre off once callbacks to avoid influence on logic in callback

                  if (info.once) {
                    this.off(key, callback, target);
                  } // Lazy check validity of callback target, 
                  // if target is CCObject and is no longer valid, then remove the callback info directly


                  if (!info.check()) {
                    this.off(key, callback, target);
                  } else {
                    if (target) {
                      callback.call(target, arg0, arg1, arg2, arg3, arg4);
                    } else {
                      callback(arg0, arg1, arg2, arg3, arg4);
                    }
                  }
                }
              }

              if (rootInvoker) {
                list.isInvoking = false;

                if (list.containCanceled) {
                  list.purgeCanceled();
                }
              }
            }
          }
          /**
           * 移除所有回调。
           */

        }, {
          key: "clear",
          value: function clear() {
            for (var key in this._callbackTable) {
              var list = this._callbackTable[key];

              if (list) {
                list.clear();
                callbackListPool.free(list);
                delete this._callbackTable[key];
              }
            }
          }
        }]);

        return CallbacksInvoker;
      }());

      /**
       * @en Generate a new class from the given base class, after polyfill all functionalities in [[IEventified]] as if it's extended from [[EventTarget]]
       * @zh 生成一个类，该类继承自指定的基类，并以和 [[EventTarget]] 等同的方式实现了 [[IEventified]] 的所有接口。
       * @param base The base class
       * @example
       * ```ts
       * class Base { say() { console.log('Hello!'); } }
       * class MyClass extends Eventify(Base) { }
       * function (o: MyClass) {
       *     o.say(); // Ok: Extend from `Base`
       *     o.emit('sing', 'The ghost'); // Ok: `MyClass` implements IEventified
       * }
       * ```
       */
      function Eventify(base) {
        var Eventified = /*#__PURE__*/function (_ref) {
          _inherits(Eventified, _ref);

          function Eventified() {
            var _getPrototypeOf2;

            var _this;

            _classCallCheck(this, Eventified);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Eventified)).call.apply(_getPrototypeOf2, [this].concat(args)));
            _this._callbackTable = createMap(true);
            return _this;
          }

          _createClass(Eventified, [{
            key: "once",
            value: function once(type, callback, target) {
              return this.on(type, callback, target, true);
            }
          }, {
            key: "targetOff",
            value: function targetOff(typeOrTarget) {
              this.removeAll(typeOrTarget);
            }
          }]);

          return Eventified;
        }(base);

        var callbacksInvokerPrototype = CallbacksInvoker.prototype;
        var propertyKeys = Object.getOwnPropertyNames(callbacksInvokerPrototype).concat(Object.getOwnPropertySymbols(callbacksInvokerPrototype));

        for (var iPropertyKey = 0; iPropertyKey < propertyKeys.length; ++iPropertyKey) {
          var propertyKey = propertyKeys[iPropertyKey];

          if (!(propertyKey in Eventified.prototype)) {
            var propertyDescriptor = Object.getOwnPropertyDescriptor(callbacksInvokerPrototype, propertyKey);

            if (propertyDescriptor) {
              Object.defineProperty(Eventified.prototype, propertyKey, propertyDescriptor);
            }
          }
        }

        return Eventified;
      }

      var Empty = function Empty() {
        _classCallCheck(this, Empty);
      };
      /**
       * @en
       * EventTarget is an object to which an event is dispatched when something has occurred.
       * [[Node]]s are the most common event targets, but other objects can be event targets too.
       * If a class cannot extend from EventTarget, it can consider using [[Eventify]].
       *
       * @zh
       * 事件目标是具有注册监听器、派发事件能力的类，[[Node]] 是最常见的事件目标，
       * 但是其他类也可以继承自事件目标以获得管理监听器和派发事件的能力。
       * 如果无法继承自 EventTarget，也可以使用 [[Eventify]]
       */

      var EventTarget = exports('az', Eventify(Empty));
      legacyCC.EventTarget = EventTarget;

      var _dec, _class, _temp;
      /**
       * 原生资源的基类。内部使用。
       * @private
       */

      var RawAsset = exports('aB', (_dec = ccclass('cc.RawAsset'), _dec(_class = (_temp = /*#__PURE__*/function (_CCObject) {
        _inherits(RawAsset, _CCObject);

        _createClass(RawAsset, null, [{
          key: "isRawAssetType",

          /**
           * 内部使用。
           */
          value: function isRawAssetType(ctor) {
            return isChildClassOf(ctor, legacyCC.RawAsset) && !isChildClassOf(ctor, legacyCC.Asset);
          }
          /**
           * 内部使用。
           */
          // @ts-ignore

        }]);

        function RawAsset() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, RawAsset);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RawAsset)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this._uuid = void 0;
          Object.defineProperty(_assertThisInitialized(_this), '_uuid', {
            value: '',
            writable: true // enumerable is false by default, to avoid uuid being assigned to empty string during destroy

          });
          return _this;
        }

        return RawAsset;
      }(CCObject), _temp)) || _class));
      legacyCC.RawAsset = RawAsset;

      var _dec$1, _class$1, _class2, _descriptor, _class3, _temp$1;
      /**
       * @en
       * Base class for handling assets used in Creator.<br/>
       *
       * You may want to override:<br/>
       * - createNode<br/>
       * - getset functions of _nativeAsset<br/>
       * - `Object._serialize`<br/>
       * - `Object._deserialize`<br/>
       * @zh
       * Creator 中的资源基类。<br/>
       *
       * 您可能需要重写：<br/>
       * - createNode <br/>
       * - _nativeAsset 的 getset 方法<br/>
       * - `Object._serialize`<br/>
       * - `Object._deserialize`<br/>
       *
       * @class Asset
       * @extends RawAsset
       */

      var Asset = exports('aC', (_dec$1 = ccclass('cc.Asset'), _dec$1(_class$1 = (_class2 = (_temp$1 = _class3 = /*#__PURE__*/function (_Eventify) {
        _inherits(Asset, _Eventify);

        function Asset() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Asset);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Asset)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.loaded = true;

          _initializerDefineProperty(_this, "_native", _descriptor, _assertThisInitialized(_this));

          _this._file = null;
          return _this;
        }

        _createClass(Asset, [{
          key: "toString",

          /**
           * @en
           * Returns the string representation of the object.<br>
           * The `Asset` object overrides the `toString()` method of the `Object` object.<br>
           * JavaScript calls the toString() method automatically<br>
           * when an asset is to be represented as a text value or when a texture is referred to in a string concatenation.<br>
           * <br>
           * For assets of the native type, it will return `this.nativeUrl`.<br>
           * Otherwise, an empty string is returned.<br>
           * This method may be overwritten by subclasses.
           * @zh
           * 返回对象的字符串表示形式。<br>
           * `Asset` 对象将会重写 `Object` 对象的 `toString()` 方法。<br>
           * 当资源要表示为文本值时或在字符串连接时引用时，<br>
           * JavaScript 会自动调用 toString() 方法。<br>
           * <br>
           * 对于原始类型的资源，它将返回`this.nativeUrl`。<br>
           * 否则，返回空字符串。<br>
           * 子类可能会覆盖此方法。
           * @method toString
           * @return {String}
           */
          value: function toString() {
            return this.nativeUrl;
          }
          /**
           * 应 AssetDB 要求提供这个方法。
           * 返回一个序列化后的对象
           *
           * @method serialize
           * @return {String}
           * @private
           */

        }, {
          key: "serialize",
          value: function serialize() {}
          /**
           * @en
           * Set native file name for this asset.
           * @zh
           * 为此资源设置原始文件名。
           * @seealso nativeUrl
           *
           * @param filename
           * @param inLibrary
           * @private
           */

        }, {
          key: "_setRawAsset",
          value: function _setRawAsset(filename) {
            var inLibrary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (inLibrary !== false) {
              this._native = filename || '';
            } else {
              this._native = '/' + filename; // simply use '/' to tag location where is not in the library
            }
          }
          /**
           * @en
           * Create a new node using this asset in the scene.<br/>
           * If this type of asset dont have its corresponding node type, this method should be null.
           * @zh
           * 使用该资源在场景中创建一个新节点。<br/>
           * 如果这类资源没有相应的节点类型，该方法应该是空的。
           */

        }, {
          key: "nativeUrl",

          /**
           * @en
           * Returns the url of this asset's native object, if none it will returns an empty string.
           * @zh
           * 返回该资源对应的目标平台资源的 URL，如果没有将返回一个空字符串。
           * @readOnly
           */
          get: function get() {
            if (this._native) {
              var name = this._native;

              if (name.charCodeAt(0) === 47) {
                // '/'
                // remove library tag
                // not imported in library, just created on-the-fly
                return name.slice(1);
              }

              if (legacyCC.AssetLibrary) {
                var base = legacyCC.AssetLibrary.getLibUrlNoExt(this._uuid, true);

                if (name.charCodeAt(0) === 46) {
                  // '.'
                  // imported in dir where json exist
                  return base + name;
                } else {
                  // imported in an independent dir
                  return base + '/' + name;
                }
              } else {
                errorID(6400);
              }
            }

            return '';
          }
          /**
           * @en
           * The underlying native asset of this asset if one is available.<br>
           * This property can be used to access additional details or functionality releated to the asset.<br>
           * This property will be initialized by the loader if `_native` is available.
           * @zh
           * 此资源的基础资源（如果有）。 此属性可用于访问与资源相关的其他详细信息或功能。<br>
           * 如果`_native`可用，则此属性将由加载器初始化。
           * @default null
           * @private
           */

        }, {
          key: "_nativeAsset",
          get: function get() {
            return this._file;
          },
          set: function set(obj) {
            this._file = obj;
          }
        }], [{
          key: "deserialize",

          /**
           * 应 AssetDB 要求提供这个方法。
           * @method deserialize
           * @param {String} data
           * @return {Asset}
           */
          value: function deserialize(data) {
            return legacyCC.deserialize(data);
          }
          /**
           * @en
           * Whether the asset is loaded or not
           * @zh
           * 该资源是否已经成功加载。
           */

        }]);

        return Asset;
      }(Eventify(RawAsset)), _class3.preventDeferredLoadDependents = false, _class3.preventPreloadNativeObject = false, _temp$1), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_native", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "_nativeAsset", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_nativeAsset"), _class2.prototype)), _class2)) || _class$1));
      /**
       * @param error - null or the error info
       * @param node - the created node or null
       */

      // @ts-ignore
      Asset.prototype.createNode = null;
      legacyCC.Asset = Asset;

      /**
       * @category component/audio
       */

      var PlayingState = {
        INITIALIZING: 0,
        PLAYING: 1,
        STOPPED: 2
      };
      var AudioPlayer = /*#__PURE__*/function () {
        function AudioPlayer(info) {
          var _this = this;

          _classCallCheck(this, AudioPlayer);

          this._state = PlayingState.STOPPED;
          this._duration = 0;
          this._eventTarget = void 0;
          this._onHide = void 0;
          this._onShow = void 0;
          this._interrupted = false;
          this._blocking = false;
          this._duration = info.duration;
          this._eventTarget = info.eventTarget;

          this._onHide = function () {
            _this._blocking = true;

            if (_this._state !== PlayingState.PLAYING) {
              return;
            }

            _this.pause();

            _this._interrupted = true;
          };

          this._onShow = function () {
            _this._blocking = false;

            if (!_this._interrupted) {
              return;
            }

            _this.play();

            _this._interrupted = false;
          };
          /* handle hide & show */


          legacyCC.game.on(legacyCC.Game.EVENT_HIDE, this._onHide);
          legacyCC.game.on(legacyCC.Game.EVENT_SHOW, this._onShow);
        }

        _createClass(AudioPlayer, [{
          key: "getState",
          value: function getState() {
            return this._state;
          }
        }, {
          key: "getDuration",
          value: function getDuration() {
            return this._duration;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            legacyCC.game.off(legacyCC.Game.EVENT_HIDE, this._onHide);
            legacyCC.game.off(legacyCC.Game.EVENT_SHOW, this._onShow);
          }
        }]);

        return AudioPlayer;
      }();
      legacyCC.internal.AudioPlayer = AudioPlayer;

      /**
       * @category core/math
       */
      var _d2r = Math.PI / 180.0;

      var _r2d = 180.0 / Math.PI;

      var EPSILON = exports('$', 0.000001);
      /**
       * @en Tests whether or not the arguments have approximately the same value, within an absolute<br/>
       * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less<br/>
       * than or equal to 1.0, and a relative tolerance is used for larger values)
       * @zh 在glMatrix的绝对或相对容差范围内，测试参数是否具有近似相同的值。<br/>
       * EPSILON(小于等于1.0的值采用绝对公差，大于1.0的值采用相对公差)
       * @param a The first number to test.
       * @param b The second number to test.
       * @return True if the numbers are approximately equal, false otherwise.
       */

      function equals(a, b) {
        return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
      }
      /**
       * @en Tests whether or not the arguments have approximately the same value by given maxDiff<br/>
       * @zh 通过给定的最大差异，测试参数是否具有近似相同的值。
       * @param a The first number to test.
       * @param b The second number to test.
       * @param maxDiff Maximum difference.
       * @return True if the numbers are approximately equal, false otherwise.
       */

      function approx(a, b, maxDiff) {
        maxDiff = maxDiff || EPSILON;
        return Math.abs(a - b) <= maxDiff;
      }
      /**
       * @en Clamps a value between a minimum float and maximum float value.<br/>
       * @zh 返回最小浮点数和最大浮点数之间的一个数值。可以使用 clamp 函数将不断变化的数值限制在范围内。
       * @param val
       * @param min
       * @param max
       */

      function clamp(val, min, max) {
        if (min > max) {
          var temp = min;
          min = max;
          max = temp;
        }

        return val < min ? min : val > max ? max : val;
      }
      /**
       * @en Clamps a value between 0 and 1.<br/>
       * @zh 将值限制在0和1之间。
       * @param val
       */

      function clamp01(val) {
        return val < 0 ? 0 : val > 1 ? 1 : val;
      }
      /**
       * @param from
       * @param to
       * @param ratio - The interpolation coefficient.
       */

      function lerp(from, to, ratio) {
        return from + (to - from) * ratio;
      }
      /**
       * @en Convert Degree To Radian<br/>
       * @zh 把角度换算成弧度。
       * @param {Number} a Angle in Degrees
       */

      function toRadian(a) {
        return a * _d2r;
      }
      /**
       * @en Convert Radian To Degree<br/>
       * @zh 把弧度换算成角度。
       * @param {Number} a Angle in Radian
       */

      function toDegree(a) {
        return a * _r2d;
      }
      /**
       * @method random
       */

      var random = exports('a6', Math.random);
      /**
       * @en Returns a floating-point random number between min (inclusive) and max (exclusive).<br/>
       * @zh 返回最小(包含)和最大(不包含)之间的浮点随机数。
       * @method randomRange
       * @param min
       * @param max
       * @return The random number.
       */

      function randomRange(min, max) {
        return Math.random() * (max - min) + min;
      }
      /**
       * @en Returns a random integer between min (inclusive) and max (exclusive).<br/>
       * @zh 返回最小(包含)和最大(不包含)之间的随机整数。
       * @param min
       * @param max
       * @return The random integer.
       */

      function randomRangeInt(min, max) {
        return Math.floor(randomRange(min, max));
      }
      /**
       * Linear congruential generator using Hull-Dobell Theorem.
       *
       * @param seed The random seed.
       * @return The pseudo random.
       */

      function pseudoRandom(seed) {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280.0;
      }
      /**
       * Returns a floating-point pseudo-random number between min (inclusive) and max (exclusive).
       *
       * @param seed
       * @param min
       * @param max
       * @return The random number.
       */

      function pseudoRandomRange(seed, min, max) {
        return pseudoRandom(seed) * (max - min) + min;
      }
      /**
       * @en Returns a pseudo-random integer between min (inclusive) and max (exclusive).<br/>
       * @zh 返回最小(包含)和最大(不包含)之间的浮点伪随机数。
       * @param seed
       * @param min
       * @param max
       * @return The random integer.
       */

      function pseudoRandomRangeInt(seed, min, max) {
        return Math.floor(pseudoRandomRange(seed, min, max));
      }
      /**
       * Returns the next power of two for the value.<br/>
       *
       * @param val
       * @return The the next power of two.
       */

      function nextPow2(val) {
        --val;
        val = val >> 1 | val;
        val = val >> 2 | val;
        val = val >> 4 | val;
        val = val >> 8 | val;
        val = val >> 16 | val;
        ++val;
        return val;
      }
      /**
       * @en Returns float remainder for t / length.<br/>
       * @zh 返回t / length的浮点余数。
       * @param t Time start at 0.
       * @param length Time of one cycle.
       * @return The Time wrapped in the first cycle.
       */

      function repeat(t, length) {
        return t - Math.floor(t / length) * length;
      }
      /**
       * Returns time wrapped in ping-pong mode.
       *
       * @param t Time start at 0.
       * @param length Time of one cycle.
       * @return The time wrapped in the first cycle.
       */

      function pingPong(t, length) {
        t = repeat(t, length * 2);
        t = length - Math.abs(t - length);
        return t;
      }
      /**
       * @en Returns ratio of a value within a given range.<br/>
       * @zh 返回给定范围内的值的比率。
       * @param from Start value.
       * @param to End value.
       * @param value Given value.
       * @return The ratio between [from, to].
       */

      function inverseLerp(from, to, value) {
        return (value - from) / (to - from);
      }
      /**
       * @zh 对所有分量的绝对值进行比较大小，返回绝对值最大的分量。
       * @param v 类 Vec3 结构
       * @returns 绝对值最大的分量
       */

      function absMaxComponent(v) {
        if (Math.abs(v.x) > Math.abs(v.y)) {
          if (Math.abs(v.x) > Math.abs(v.z)) {
            return v.x;
          } else {
            return v.z;
          }
        } else {
          if (Math.abs(v.y) > Math.abs(v.z)) {
            return v.y;
          } else {
            return v.z;
          }
        }
      }
      /**
       * @zh 对 a b 的绝对值进行比较大小，返回绝对值最大的值。
       * @param a number
       * @param b number
       */

      function absMax(a, b) {
        if (Math.abs(a) > Math.abs(b)) {
          return a;
        } else {
          return b;
        }
      }

      var AudioPlayerDOM = /*#__PURE__*/function (_AudioPlayer) {
        _inherits(AudioPlayerDOM, _AudioPlayer);

        function AudioPlayerDOM(info) {
          var _this;

          _classCallCheck(this, AudioPlayerDOM);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(AudioPlayerDOM).call(this, info));
          _this._volume = 1;
          _this._loop = false;
          _this._oneShotOngoing = false;
          _this._audio = void 0;
          _this._cbRegistered = false;
          _this._remove_cb = void 0;
          _this._post_play = void 0;
          _this._on_gesture = void 0;
          _this._post_gesture = void 0;
          _this._audio = info.clip;

          _this._remove_cb = function () {
            if (!_this._cbRegistered) {
              return;
            }

            legacyCC.game.canvas.removeEventListener('touchend', _this._on_gesture);
            legacyCC.game.canvas.removeEventListener('mouseup', _this._on_gesture);
            _this._cbRegistered = false;
          };

          _this._post_play = function () {
            _this._state = PlayingState.PLAYING;

            _this._eventTarget.emit('started');

            _this._remove_cb(); // should remove callbacks after any success play

          };

          _this._post_gesture = function () {
            if (_this._interrupted) {
              _this._post_play();

              _this._interrupted = false;
            } else {
              _this._audio.pause();

              _this._audio.currentTime = 0;
            }
          };

          _this._on_gesture = function () {
            if (!_this._audio) {
              return;
            }

            var promise = _this._audio.play();

            if (!promise) {
              // Chrome50/Firefox53 below
              // delay eval here to yield uniform behavior with other platforms
              _this._state = PlayingState.PLAYING;
              legacyCC.director.once(legacyCC.Director.EVENT_AFTER_UPDATE, _this._post_gesture);
              return;
            }

            promise.then(_this._post_gesture);

            _this._remove_cb();
          };

          _this._audio.volume = _this._volume;
          _this._audio.loop = _this._loop; // callback on audio ended

          _this._audio.addEventListener('ended', function () {
            if (_this._oneShotOngoing) {
              return;
            }

            _this._state = PlayingState.STOPPED;
            _this._audio.currentTime = 0;

            _this._eventTarget.emit('ended');
          });
          /* play & stop immediately after receiving a gesture so that
             we can freely invoke play() outside event listeners later */


          legacyCC.game.canvas.addEventListener('touchend', _this._on_gesture);
          legacyCC.game.canvas.addEventListener('mouseup', _this._on_gesture);
          _this._cbRegistered = true;
          return _this;
        }

        _createClass(AudioPlayerDOM, [{
          key: "play",
          value: function play() {
            var _this2 = this;

            if (!this._audio || this._state === PlayingState.PLAYING) {
              return;
            }

            if (this._blocking) {
              this._interrupted = true;
              return;
            }

            var promise = this._audio.play();

            if (!promise) {
              // delay eval here to yield uniform behavior with other platforms
              this._state = PlayingState.PLAYING;
              legacyCC.director.once(legacyCC.Director.EVENT_AFTER_UPDATE, this._post_play);
              return;
            }

            promise.then(this._post_play)["catch"](function () {
              _this2._interrupted = true;
            });
          }
        }, {
          key: "pause",
          value: function pause() {
            if (!this._audio || this._state !== PlayingState.PLAYING) {
              return;
            }

            this._audio.pause();

            this._state = PlayingState.STOPPED;
            this._oneShotOngoing = false;
          }
        }, {
          key: "stop",
          value: function stop() {
            if (!this._audio) {
              return;
            }

            this._audio.currentTime = 0;

            if (this._state !== PlayingState.PLAYING) {
              return;
            }

            this._audio.pause();

            this._state = PlayingState.STOPPED;
            this._oneShotOngoing = false;
          }
        }, {
          key: "playOneShot",
          value: function playOneShot() {
            var _this3 = this;

            var volume = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            /* HTMLMediaElement doesn't support multiple playback at the
               same time so here we fall back to re-start style approach */
            var clip = this._audio;

            if (!clip) {
              return;
            }

            clip.currentTime = 0;
            clip.volume = volume;

            if (this._oneShotOngoing) {
              return;
            }

            clip.loop = false;
            this._oneShotOngoing = true;
            clip.play().then(function () {
              clip.addEventListener('ended', function () {
                clip.currentTime = 0;
                clip.volume = _this3._volume;
                clip.loop = _this3._loop;
                _this3._oneShotOngoing = false;
              }, {
                once: true
              });
            })["catch"](function () {
              _this3._oneShotOngoing = false;
            });
          }
        }, {
          key: "setCurrentTime",
          value: function setCurrentTime(val) {
            if (!this._audio) {
              return;
            }

            this._audio.currentTime = clamp(val, 0, this._duration);
          }
        }, {
          key: "getCurrentTime",
          value: function getCurrentTime() {
            return this._audio ? this._audio.currentTime : 0;
          }
        }, {
          key: "setVolume",
          value: function setVolume(val, immediate) {
            this._volume = val;
            /* note this won't work for ios devices, for there
               is just no way to set HTMLMediaElement's volume */

            if (this._audio) {
              this._audio.volume = val;
            }
          }
        }, {
          key: "getVolume",
          value: function getVolume() {
            if (this._audio) {
              return this._audio.volume;
            }

            return this._volume;
          }
        }, {
          key: "setLoop",
          value: function setLoop(val) {
            this._loop = val;

            if (this._audio) {
              this._audio.loop = val;
            }
          }
        }, {
          key: "getLoop",
          value: function getLoop() {
            return this._loop;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            if (this._audio) {
              this._audio.src = '';
            }

            _get(_getPrototypeOf(AudioPlayerDOM.prototype), "destroy", this).call(this);
          }
        }]);

        return AudioPlayerDOM;
      }(AudioPlayer);

      // @ts-ignore

      var _global$1 = typeof window === 'undefined' ? global : window;

      var NetworkType;

      (function (NetworkType) {
        NetworkType[NetworkType["NONE"] = 0] = "NONE";
        NetworkType[NetworkType["LAN"] = 1] = "LAN";
        NetworkType[NetworkType["WWAN"] = 2] = "WWAN";
      })(NetworkType || (NetworkType = {}));
      /**
       * @en A set of system related variables
       * @zh 一系列系统相关环境变量
       * @main
       */

      var sys = exports('aI', {
        /**
         * @en
         * Network type enumeration
         * @zh
         * 网络类型枚举
         */
        NetworkType: NetworkType,

        /**
         * @en English language code
         * @zh 语言代码 - 英语
         */
        LANGUAGE_ENGLISH: 'en',

        /**
         * @en Chinese language code
         * @zh 语言代码 - 中文
         */
        LANGUAGE_CHINESE: 'zh',

        /**
         * @en French language code
         * @zh 语言代码 - 法语
         */
        LANGUAGE_FRENCH: 'fr',

        /**
         * @en Italian language code
         * @zh 语言代码 - 意大利语
         */
        LANGUAGE_ITALIAN: 'it',

        /**
         * @en German language code
         * @zh 语言代码 - 德语
         */
        LANGUAGE_GERMAN: 'de',

        /**
         * @en Spanish language code
         * @zh 语言代码 - 西班牙语
         */
        LANGUAGE_SPANISH: 'es',

        /**
         * @en Spanish language code
         * @zh 语言代码 - 荷兰语
         */
        LANGUAGE_DUTCH: 'du',

        /**
         * @en Russian language code
         * @zh 语言代码 - 俄罗斯语
         */
        LANGUAGE_RUSSIAN: 'ru',

        /**
         * @en Korean language code
         * @zh 语言代码 - 韩语
         */
        LANGUAGE_KOREAN: 'ko',

        /**
         * @en Japanese language code
         * @zh 语言代码 - 日语
         */
        LANGUAGE_JAPANESE: 'ja',

        /**
         * @en Hungarian language code
         * @zh 语言代码 - 匈牙利语
         */
        LANGUAGE_HUNGARIAN: 'hu',

        /**
         * @en Portuguese language code
         * @zh 语言代码 - 葡萄牙语
         */
        LANGUAGE_PORTUGUESE: 'pt',

        /**
         * @en Arabic language code
         * @zh 语言代码 - 阿拉伯语
         */
        LANGUAGE_ARABIC: 'ar',

        /**
         * @en Norwegian language code
         * @zh 语言代码 - 挪威语
         */
        LANGUAGE_NORWEGIAN: 'no',

        /**
         * @en Polish language code
         * @zh 语言代码 - 波兰语
         */
        LANGUAGE_POLISH: 'pl',

        /**
         * @en Turkish language code
         * @zh 语言代码 - 土耳其语
         */
        LANGUAGE_TURKISH: 'tr',

        /**
         * @en Ukrainian language code
         * @zh 语言代码 - 乌克兰语
         */
        LANGUAGE_UKRAINIAN: 'uk',

        /**
         * @en Romanian language code
         * @zh 语言代码 - 罗马尼亚语
         */
        LANGUAGE_ROMANIAN: 'ro',

        /**
         * @en Bulgarian language code
         * @zh 语言代码 - 保加利亚语
         */
        LANGUAGE_BULGARIAN: 'bg',

        /**
         * @en Unknown language code
         * @zh 语言代码 - 未知
         */
        LANGUAGE_UNKNOWN: 'unknown',

        /**
         * @en Operating System - iOS
         * @zh 操作系统 - iOS
         */
        OS_IOS: 'iOS',

        /**
         * @en Operating System - Android
         * @zh 操作系统 - 安卓
         */
        OS_ANDROID: 'Android',

        /**
         * @en Operating System - Windows
         * @zh 操作系统 - Windows
         */
        OS_WINDOWS: 'Windows',

        /**
         * @en Operating System - Linux
         * @zh 操作系统 - Linux
         */
        OS_LINUX: 'Linux',

        /**
         * @en Operating System - Mac OS X
         * @zh 操作系统 - Mac OS X
         */
        OS_OSX: 'OS X',

        /**
         * @en Operating System - Unknown
         * @zh 操作系统 - 未知
         */
        OS_UNKNOWN: 'Unknown',

        /**
         * @en Platform - Unknown
         * @zh 平台 - 未知
         * @default -1
         */
        UNKNOWN: -1,

        /**
         * @en Platform - 32 bit Windows application
         * @zh 平台 - 32位 Windows 可执行程序
         * @default 0
         */
        WIN32: 0,

        /**
         * @en Platform - Linux
         * @zh 平台 - Linux
         * @default 1
         */
        LINUX: 1,

        /**
         * @en Platform - Mac OS X app
         * @zh 平台 - Mac OS X 原生平台
         * @default 2
         */
        MACOS: 2,

        /**
         * @en Platform - Android native app
         * @zh 平台 - 安卓原生平台
         * @default 3
         */
        ANDROID: 3,

        /**
         * @en Platform - iPhone native app
         * @zh 平台 - iPhone 原生平台
         * @default 4
         */
        IPHONE: 4,

        /**
         * @en Platform - iPad native app
         * @zh 平台 - iPad 原生平台
         * @default 5
         */
        IPAD: 5,

        /**
         * @en Platform - Blackberry devices
         * @zh 平台 - 黑莓设备
         * @default 6
         */
        BLACKBERRY: 6,

        /**
         * @en Platform - NACL
         * @zh 平台 - NACL
         * @default 7
         */
        NACL: 7,

        /**
         * @en Platform - Emscripten compiled runtime
         * @zh 平台 - 编译为 Emscripten 的运行时环境
         * @default 8
         */
        EMSCRIPTEN: 8,

        /**
         * @en Platform - Tizen
         * @zh 平台 - Tizen
         * @default 9
         */
        TIZEN: 9,

        /**
         * @en Platform - Windows RT
         * @zh 平台 - Windows RT
         * @default 10
         */
        WINRT: 10,

        /**
         * @en Platform - Windows Phone 8 app
         * @zh 平台 - Windows Phone 8 原生应用
         * @default 11
         */
        WP8: 11,

        /**
         * @en Platform - Mobile browsers
         * @zh 平台 - 移动浏览器
         * @default 100
         */
        MOBILE_BROWSER: 100,

        /**
         * @en Platform - Desktop browsers
         * @zh 平台 - 桌面端浏览器
         * @default 101
         */
        DESKTOP_BROWSER: 101,

        /**
         * @en Platform - Editor's window process
         * @zh 平台 - 编辑器窗口进程
         * @default 102
         */
        EDITOR_PAGE: 102,

        /**
         * @en Platform - Editor's main process
         * @zh 平台 - 编辑器主进程
         * @default 103
         */
        EDITOR_CORE: 103,

        /**
         * @en Platform - WeChat Mini Game
         * @zh 平台 - 微信小游戏
         * @default 104
         */
        WECHAT_GAME: 104,

        /**
         * @en Platform - QQ Play Game
         * @zh 平台 - QQ Play
         * @default 105
         */
        QQ_PLAY: 105,

        /**
         * @en Browser Type - WeChat inner browser
         * @zh 浏览器类型 - 微信内置浏览器
         * @default "wechat"
         */
        BROWSER_TYPE_WECHAT: 'wechat',

        /**
         * @en Browser Type - Cocos Play Game
         * @zh 浏览器类型 - Cocos Play 游戏
         * @default "cocosplay"
         */
        BROWSER_TYPE_COCOSPLAY: 'cocosplay',

        /**
         * @en Browser Type - huawei quick Game
         * @zh 浏览器类型 - 华为快游戏
         * @default "huaweiquickgame"
         */
        BROWSER_TYPE_HUAWEI_GAME: 'huaweiquickgame',

        /**
        * @en Browser Type - OPPO mini Game
        * @zh 浏览器类型 - OPPO小游戏
        * @default "oppogame"
        */
        BROWSER_TYPE_OPPO_GAME: 'oppogame',

        /**
        * @en Browser Type - vivo mini Game
        * @zh 浏览器类型 - vivo小游戏
        * @default "vivogame"
        */
        BROWSER_TYPE_VIVO_GAME: 'vivogame',

        /**
         * @en Browser Type - Android Browser
         * @zh 浏览器类型 - 安卓浏览器
         * @default "androidbrowser"
         */
        BROWSER_TYPE_ANDROID: 'androidbrowser',

        /**
         * @en Browser Type - Internet Explorer
         * @zh 浏览器类型 - 微软 IE
         * @default "ie"
         */
        BROWSER_TYPE_IE: 'ie',

        /**
         * @en Browser Type - Microsoft Edge
         * @zh 浏览器类型 - 微软 Edge
         * @default "edge"
         */
        BROWSER_TYPE_EDGE: "edge",

        /**
         * @en Browser Type - QQ Browser
         * @zh 浏览器类型 - QQ 浏览器
         * @default "qqbrowser"
         */
        BROWSER_TYPE_QQ: 'qqbrowser',

        /**
         * @en Browser Type - Mobile QQ Browser
         * @zh 浏览器类型 - 手机 QQ 浏览器
         * @default "mqqbrowser"
         */
        BROWSER_TYPE_MOBILE_QQ: 'mqqbrowser',

        /**
         * @en Browser Type - UC Browser
         * @zh 浏览器类型 - UC 浏览器
         * @default "ucbrowser"
         */
        BROWSER_TYPE_UC: 'ucbrowser',

        /**
         * @en Browser Type - Third party integrated UC browser
         * @zh 浏览器类型 - 第三方应用中集成的 UC 浏览器
         * @default "ucbs"
         */
        BROWSER_TYPE_UCBS: 'ucbs',

        /**
         * @en Browser Type - 360 Browser
         * @zh 浏览器类型 - 360 浏览器
         * @default "360browser"
         */
        BROWSER_TYPE_360: '360browser',

        /**
         * @en Browser Type - Baidu Box App
         * @zh 浏览器类型 - Baidu Box App
         * @default "baiduboxapp"
         */
        BROWSER_TYPE_BAIDU_APP: 'baiduboxapp',

        /**
         * @en Browser Type - Baidu Browser
         * @zh 浏览器类型 - 百度浏览器
         * @default "baidubrowser"
         */
        BROWSER_TYPE_BAIDU: 'baidubrowser',

        /**
         * @en Browser Type - Maxthon Browser
         * @zh 浏览器类型 - 傲游浏览器
         * @default "maxthon"
         */
        BROWSER_TYPE_MAXTHON: 'maxthon',

        /**
         * @en Browser Type - Opera Browser
         * @zh 浏览器类型 - Opera 浏览器
         * @default "opera"
         */
        BROWSER_TYPE_OPERA: 'opera',

        /**
         * @en Browser Type - Oupeng Browser
         * @zh 浏览器类型 - 欧朋浏览器
         * @default "oupeng"
         */
        BROWSER_TYPE_OUPENG: 'oupeng',

        /**
         * @en Browser Type - MI UI Browser
         * @zh 浏览器类型 - MIUI 内置浏览器
         * @default "miuibrowser"
         */
        BROWSER_TYPE_MIUI: 'miuibrowser',

        /**
         * @en Browser Type - Firefox Browser
         * @zh 浏览器类型 - Firefox 浏览器
         * @default "firefox"
         */
        BROWSER_TYPE_FIREFOX: 'firefox',

        /**
         * @en Browser Type - Safari Browser
         * @zh 浏览器类型 - Safari 浏览器
         * @default "safari"
         */
        BROWSER_TYPE_SAFARI: 'safari',

        /**
         * @en Browser Type - Chrome Browser
         * @zh 浏览器类型 - Chrome 浏览器
         * @default "chrome"
         */
        BROWSER_TYPE_CHROME: 'chrome',

        /**
         * @en Browser Type - Cheetah Browser
         * @zh 浏览器类型 - 猎豹浏览器
         * @default "liebao"
         */
        BROWSER_TYPE_LIEBAO: 'liebao',

        /**
         * @en Browser Type - QZone Inner Browser
         * @zh 浏览器类型 - QZone 内置浏览器
         * @default "qzone"
         */
        BROWSER_TYPE_QZONE: 'qzone',

        /**
         * @en Browser Type - Sogou Browser
         * @zh 浏览器类型 - 搜狗浏览器
         * @default "sogou"
         */
        BROWSER_TYPE_SOUGOU: 'sogou',

        /**
         * @en Browser Type - Unknown
         * @zh 浏览器类型 - 未知
         * @default "unknown"
         */
        BROWSER_TYPE_UNKNOWN: 'unknown',

        /**
         * @en Whether the running platform is native app
         * @zh 指示运行平台是否是原生平台
         */
        isNative: JSB,

        /**
         * @en Whether the running platform is browser
         * @zh 指示运行平台是否是浏览器
         */
        isBrowser: (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && !MINIGAME && !JSB && !RUNTIME_BASED,

        /**
         * @en Indicate whether the current running context is a mobile system
         * @zh 指示当前运行平台是否是移动端平台
         * @default false
         */
        isMobile: false,

        /**
         * @en Whether the endianness of current platform is little endian
         * @zh 当前平台字节顺序是否是小端序
         */
        isLittleEndian: function () {
          var buffer = new ArrayBuffer(2);
          new DataView(buffer).setInt16(0, 256, true); // Int16Array uses the platform's endianness.

          return new Int16Array(buffer)[0] === 256;
        }(),

        /**
         * @en The running platform
         * @zh 当前运行平台或环境
         * @default {{sys.UNKNOWN}}
         */
        platform: -1,

        /**
         * @en Indicate the current language of the running system
         * @zh 指示当前运行环境的语言
         * @default {{sys.LANGUAGE_UNKNOWN}}
         */
        language: 'unknown',

        /**
         * @en Indicate the running os name
         * @zh 指示当前运行系统
         */
        os: 'Unknown',

        /**
         * @en Indicate the running os version string
         * @zh 指示当前运行系统版本字符串
         */
        osVersion: '',

        /**
         * @en Indicate the running os main version
         * @zh 指示当前系统主版本
         */
        osMainVersion: 0,

        /**
         * @en Indicate the running browser type
         * @zh 指示当前运行的浏览器类型
         */
        browserType: 'unknown',

        /**
         * @en Indicate the running browser version
         * @zh 指示当前运行的浏览器版本
         */
        browserVersion: '',

        /**
         * @en Indicate the real pixel resolution of the whole game window
         * @zh 指示游戏窗口的像素分辨率
         */
        windowPixelResolution: null,

        /**
         * @en The capabilities of the current platform
         * @zh 当前平台的功能可用性
         */
        capabilities: null,

        /**
         * @en It is a local storage component based on HTML5 localStorage API, on web platform, it's equal to window.localStorage
         * @zh HTML5 标准中的 localStorage 的本地存储功能，在 Web 端等价于 window.localStorage
         */
        localStorage: null,

        /**
         * Audio support in the browser
         *
         * MULTI_CHANNEL        : Multiple audio while playing - If it doesn't, you can only play background music
         * WEB_AUDIO            : Support for WebAudio - Support W3C WebAudio standards, all of the audio can be played
         * AUTOPLAY             : Supports auto-play audio - if Don‘t support it, On a touch detecting background music canvas, and then replay
         * REPLAY_AFTER_TOUCH   : The first music will fail, must be replay after touchstart
         * USE_EMPTIED_EVENT    : Whether to use the emptied event to replace load callback
         * DELAY_CREATE_CTX     : delay created the context object - only webAudio
         * NEED_MANUAL_LOOP     : loop attribute failure, need to perform loop manually
         *
         * May be modifications for a few browser version
         * @private
         */
        __audioSupport: null,

        /**
         * @en Get the network type of current device, return `sys.NetworkType.LAN` if failure.
         * @zh 获取当前设备的网络类型, 如果网络类型无法获取，默认将返回 `sys.NetworkType.LAN`
         */
        getNetworkType: function getNetworkType() {
          // TODO: need to implement this for mobile phones.
          return NetworkType.LAN;
        },

        /**
         * @en Get the battery level of current device, return 1.0 if failure.
         * @zh 获取当前设备的电池电量，如果电量无法获取，默认将返回 1
         * @return - 0.0 ~ 1.0
         */
        getBatteryLevel: function getBatteryLevel() {
          // TODO: need to implement this for mobile phones.
          return 1.0;
        },

        /**
         * @en Forces the garbage collection, only available in native platforms
         * @zh 强制进行 JS 内存垃圾回收，尽在原生平台有效
         */
        garbageCollect: function garbageCollect() {// N/A in web
        },

        /**
         * @en Check whether an object is valid,
         * In web engine, it will return true if the object exist
         * In native engine, it will return true if the JS object and the correspond native object are both valid
         * @zh 检查一个对象是否非空或在原生平台有效，
         * 在 Web 平台，只要对象非空或非 Undefined 就会返回 true，在原生平台，我们会检查当前 JS 对象和其绑定的原生对象是否都有效
         * @param obj The object to be checked
         */
        isObjectValid: function isObjectValid(obj) {
          if (obj === null || obj === undefined) {
            return false;
          } else {
            return true;
          }
        },

        /**
         * @en Dump system informations
         * @zh 在控制台打印当前的主要系统信息
         */
        dump: function dump() {
          var str = '';
          str += 'isMobile : ' + this.isMobile + '\r\n';
          str += 'language : ' + this.language + '\r\n';
          str += 'browserType : ' + this.browserType + '\r\n';
          str += 'browserVersion : ' + this.browserVersion + '\r\n';
          str += 'capabilities : ' + JSON.stringify(this.capabilities) + '\r\n';
          str += 'os : ' + this.os + '\r\n';
          str += 'osVersion : ' + this.osVersion + '\r\n';
          str += 'platform : ' + this.platform + '\r\n';
          str += 'Using ' + (legacyCC.game.renderType === legacyCC.game.RENDER_TYPE_WEBGL ? 'WEBGL' : 'CANVAS') + ' renderer.' + '\r\n';
          log(str);
        },

        /**
         * @en Try to open a url in browser, may not work in some platforms
         * @zh 尝试打开一个 web 页面，并非在所有平台都有效
         */
        openURL: function openURL(url) {
          {
            window.open(url);
          }
        },

        /**
         * @en Get the current time in milliseconds
         * @zh 获取当前时间（毫秒为单位）
         */
        now: function now() {
          if (Date.now) {
            return Date.now();
          } else {
            return +new Date();
          }
        },

        /**
         * Dumps rooted objects, only available in native platforms
         * @private
         */
        dumpRoot: function dumpRoot() {// N/A in web
        },

        /**
         * Restart the JS VM, only available in native platforms
         * @private
         */
        restartVM: function restartVM() {// N/A in web
        },

        /**
         * Clean a script in the JS VM, only available in native platforms
         * @private
         */
        cleanScript: function cleanScript(jsfile) {// N/A in web
        },

        /**
         * @en
         * Returns the safe area of the screen. If the screen is not notched, the design resolution will be returned by default.
         * Only supported on Android, iOS and WeChat Mini Game platform.
         * @zh
         * 返回手机屏幕安全区域，如果不是异形屏将默认返回设计分辨率尺寸。目前只支持安卓、iOS 原生平台和微信小游戏平台。
         * @method getSafeAreaRect
         * @return {Rect}
         */
        getSafeAreaRect: function getSafeAreaRect() {
          var visibleSize = legacyCC.view.getVisibleSize();
          return legacyCC.rect(0, 0, visibleSize.width, visibleSize.height);
        }
      }); // ============= Platform Adaptation ==============

      if (_global$1.__globalAdapter && _global$1.__globalAdapter.adaptSys) {
        // init sys info in adapter
        _global$1.__globalAdapter.adaptSys(sys);
      } // TODO: main process flag
      // else if (EDITOR) {
      //     sys.isMobile = false;
      //     sys.platform = sys.EDITOR_CORE;
      //     sys.language = sys.LANGUAGE_UNKNOWN;
      //     sys.os = ({
      //         darwin: sys.OS_OSX,
      //         win32: sys.OS_WINDOWS,
      //         linux: sys.OS_LINUX,
      //     // @ts-ignore
      //     })[process.platform] || sys.OS_UNKNOWN;
      //     sys.browserType = sys.BROWSER_TYPE_UNKNOWN;
      //     sys.browserVersion = '';
      //     sys.windowPixelResolution = {
      //         width: 0,
      //         height: 0,
      //     };
      //     sys.__audioSupport = {};
      // }
      else {
          // browser or runtime
          var win = window,
              nav = win.navigator,
              doc = document,
              docEle = doc.documentElement;
          var ua = nav.userAgent.toLowerCase();

          {
            sys.isMobile = /mobile|android|iphone|ipad/.test(ua);
            sys.platform = sys.isMobile ? sys.MOBILE_BROWSER : sys.DESKTOP_BROWSER;
          }

          var currLanguage = nav.language; // @ts-ignore

          currLanguage = currLanguage ? currLanguage : nav.browserLanguage;
          currLanguage = currLanguage ? currLanguage.split('-')[0] : sys.LANGUAGE_ENGLISH;
          sys.language = currLanguage; // Get the os of system

          var isAndroid = false,
              iOS = false,
              osVersion = '',
              osMajorVersion = 0;
          var uaResult = /android\s*(\d+(?:\.\d+)*)/i.exec(ua) || /android\s*(\d+(?:\.\d+)*)/i.exec(nav.platform);

          if (uaResult) {
            isAndroid = true;
            osVersion = uaResult[1] || '';
            osMajorVersion = parseInt(osVersion) || 0;
          }

          uaResult = /(iPad|iPhone|iPod).*OS ((\d+_?){2,3})/i.exec(ua);

          if (uaResult) {
            iOS = true;
            osVersion = uaResult[2] || '';
            osMajorVersion = parseInt(osVersion) || 0;
          } // refer to https://github.com/cocos-creator/engine/pull/5542 , thanks for contribition from @krapnikkk
          // ipad OS 13 safari identifies itself as "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko)"
          // so use maxTouchPoints to check whether it's desktop safari or not.
          // reference: https://stackoverflow.com/questions/58019463/how-to-detect-device-name-in-safari-on-ios-13-while-it-doesnt-show-the-correct
          // FIXME: should remove it when touch-enabled mac are available
          // TODO: due to compatibility issues, it is still determined to be ios, and a new operating system type ipados may be added later？
          else if (/(iPhone|iPad|iPod)/.exec(nav.platform) || nav.platform === 'MacIntel' && nav.maxTouchPoints && nav.maxTouchPoints > 1) {
              iOS = true;
              osVersion = '';
              osMajorVersion = 0;
            }

          var osName = sys.OS_UNKNOWN;

          if (nav.appVersion.indexOf('Win') !== -1) {
            osName = sys.OS_WINDOWS;
          } else if (iOS) {
            osName = sys.OS_IOS;
          } else if (nav.appVersion.indexOf('Mac') !== -1) {
            osName = sys.OS_OSX;
          } else if (nav.appVersion.indexOf('X11') !== -1 && nav.appVersion.indexOf('Linux') === -1) {
            osName = sys.OS_UNIX;
          } else if (isAndroid) {
            osName = sys.OS_ANDROID;
          } else if (nav.appVersion.indexOf('Linux') !== -1 || ua.indexOf('ubuntu') !== -1) {
            osName = sys.OS_LINUX;
          }

          sys.os = osName;
          sys.osVersion = osVersion;
          sys.osMainVersion = osMajorVersion;
          sys.browserType = sys.BROWSER_TYPE_UNKNOWN;
          /* Determine the browser type */

          (function () {
            var typeReg1 = /mqqbrowser|micromessenger|qq|sogou|qzone|liebao|maxthon|ucbs|360 aphone|360browser|baiduboxapp|baidubrowser|maxthon|mxbrowser|miuibrowser/i;
            var typeReg2 = /qqbrowser|ucbrowser|edge/i;
            var typeReg3 = /chrome|safari|firefox|trident|opera|opr\/|oupeng/i;
            var browserTypes = typeReg1.exec(ua);

            if (!browserTypes) {
              browserTypes = typeReg2.exec(ua);
            }

            if (!browserTypes) {
              browserTypes = typeReg3.exec(ua);
            }

            var browserType = browserTypes ? browserTypes[0].toLowerCase() : sys.BROWSER_TYPE_UNKNOWN;

            if (browserType === 'micromessenger') {
              browserType = sys.BROWSER_TYPE_WECHAT;
            } else if (browserType === 'safari' && isAndroid) {
              browserType = sys.BROWSER_TYPE_ANDROID;
            } else if (browserType === 'qq' && ua.match(/android.*applewebkit/i)) {
              browserType = sys.BROWSER_TYPE_ANDROID;
            } else if (browserType === 'trident') {
              browserType = sys.BROWSER_TYPE_IE;
            } else if (browserType === 'edge') ; else if (browserType === '360 aphone') {
              browserType = sys.BROWSER_TYPE_360;
            } else if (browserType === 'mxbrowser') {
              browserType = sys.BROWSER_TYPE_MAXTHON;
            } else if (browserType === 'opr/') {
              browserType = sys.BROWSER_TYPE_OPERA;
            }

            sys.browserType = browserType;
          })();

          sys.browserVersion = '';
          /* Determine the browser version number */

          (function () {
            var versionReg1 = /(mqqbrowser|micromessenger|qq|sogou|qzone|liebao|maxthon|uc|ucbs|360 aphone|360|baiduboxapp|baidu|maxthon|mxbrowser|miui)(mobile)?(browser)?\/?([\d.]+)/i;
            var versionReg2 = /(qqbrowser|chrome|safari|firefox|trident|opera|opr\/|oupeng)(mobile)?(browser)?\/?([\d.]+)/i;
            var tmp = ua.match(versionReg1);

            if (!tmp) {
              tmp = ua.match(versionReg2);
            }

            sys.browserVersion = tmp ? tmp[4] : '';
          })();

          var _w = window.innerWidth || document.documentElement.clientWidth;

          var _h = window.innerHeight || document.documentElement.clientHeight;

          var _ratio = window.devicePixelRatio || 1;

          sys.windowPixelResolution = {
            width: _ratio * _w,
            height: _ratio * _h
          };

          var _tmpCanvas1 = document.createElement('canvas');

          var create3DContext = function create3DContext(canvas, opt_attribs, opt_contextType) {
            if (opt_contextType) {
              try {
                return canvas.getContext(opt_contextType, opt_attribs);
              } catch (e) {
                return null;
              }
            } else {
              return create3DContext(canvas, opt_attribs, 'webgl') || create3DContext(canvas, opt_attribs, 'experimental-webgl') || create3DContext(canvas, opt_attribs, 'webkit-3d') || create3DContext(canvas, opt_attribs, 'moz-webgl') || null;
            }
          };

          try {
            var localStorage = sys.localStorage = win.localStorage;
            localStorage.setItem('storage', '');
            localStorage.removeItem('storage');
            localStorage = null;
          } catch (e) {
            var warn$1 = function warn() {
              warnID(5200);
            };

            sys.localStorage = {
              getItem: warn$1,
              setItem: warn$1,
              removeItem: warn$1,
              clear: warn$1
            };
          }

          var _supportWebp =  _tmpCanvas1.toDataURL('image/webp').startsWith('data:image/webp');

          var _supportCanvas =  !!_tmpCanvas1.getContext('2d');

          var _supportWebGL = false;

          if (win.WebGLRenderingContext) {
            // @ts-ignore
            if (create3DContext(document.createElement('CANVAS'))) {
              _supportWebGL = true;
            }

            if (_supportWebGL && sys.os === sys.OS_ANDROID) {
              var browserVer = parseFloat(sys.browserVersion);

              switch (sys.browserType) {
                case sys.BROWSER_TYPE_MOBILE_QQ:
                case sys.BROWSER_TYPE_BAIDU:
                case sys.BROWSER_TYPE_BAIDU_APP:
                  // QQ & Baidu Brwoser 6.2+ (using blink kernel)
                  if (browserVer >= 6.2) {
                    _supportWebGL = true;
                  } else {
                    _supportWebGL = false;
                  }

                  break;

                case sys.BROWSER_TYPE_ANDROID:
                  // Android 5+ default browser
                  if (sys.osMainVersion && sys.osMainVersion >= 5) {
                    _supportWebGL = true;
                  }

                  break;

                case sys.BROWSER_TYPE_CHROME:
                  // Chrome on android supports WebGL from v. 30
                  if (browserVer >= 30.0) {
                    _supportWebGL = true;
                  } else {
                    _supportWebGL = false;
                  }

                  break;

                case sys.BROWSER_TYPE_UC:
                  if (browserVer > 11.0) {
                    _supportWebGL = true;
                  } else {
                    _supportWebGL = false;
                  }

                  break;

                case sys.BROWSER_TYPE_360:
                  _supportWebGL = false;
                  break;
              }
            }
          }

          var _capabilities = sys.capabilities = {
            canvas: _supportCanvas,
            opengl: _supportWebGL,
            webp: _supportWebp
          };

          if (docEle.ontouchstart !== undefined || doc.ontouchstart !== undefined || nav.msPointerEnabled) {
            _capabilities.touches = true;
          }

          if (docEle.onmouseup !== undefined) {
            _capabilities.mouse = true;
          }

          if (docEle.onkeyup !== undefined) {
            _capabilities.keyboard = true;
          } // @ts-ignore


          if (win.DeviceMotionEvent || win.DeviceOrientationEvent) {
            _capabilities.accelerometer = true;
          }

          var __audioSupport;

          (function () {
            // check Web Audio's context

            var supportWebAudio = !!(window.AudioContext || window.webkitAudioContext || window.mozAudioContext);
            __audioSupport = {
              ONLY_ONE: false,
              WEB_AUDIO: supportWebAudio,
              DELAY_CREATE_CTX: false
            };

            if (sys.os === sys.OS_IOS) {
              // IOS no event that used to parse completed callback
              // this time is not complete, can not play
              //
              __audioSupport.USE_LOADER_EVENT = 'loadedmetadata';
            }

            if (sys.browserType === sys.BROWSER_TYPE_FIREFOX) {
              __audioSupport.DELAY_CREATE_CTX = true;
              __audioSupport.USE_LOADER_EVENT = 'canplay';
            }

            if (sys.os === sys.OS_ANDROID) {
              if (sys.browserType === sys.BROWSER_TYPE_UC) {
                __audioSupport.ONE_SOURCE = true;
              }
            }
          })();

          try {
            if (__audioSupport.WEB_AUDIO) {
              __audioSupport._context = null;
              Object.defineProperty(__audioSupport, 'context', {
                get: function get() {
                  if (this._context) {
                    return this._context;
                  } // @ts-ignore


                  return this._context = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext)();
                }
              });
            }
          } catch (error) {
            __audioSupport.WEB_AUDIO = false;
            logID(5201);
          }

          var formatSupport = [];

          (function () {
            var audio = document.createElement('audio');

            if (audio.canPlayType) {
              var ogg = audio.canPlayType('audio/ogg; codecs="vorbis"');

              if (ogg) {
                formatSupport.push('.ogg');
              }

              var mp3 = audio.canPlayType('audio/mpeg');

              if (mp3) {
                formatSupport.push('.mp3');
              }

              var wav = audio.canPlayType('audio/wav; codecs="1"');

              if (wav) {
                formatSupport.push('.wav');
              }

              var mp4 = audio.canPlayType('audio/mp4');

              if (mp4) {
                formatSupport.push('.mp4');
              }

              var m4a = audio.canPlayType('audio/x-m4a');

              if (m4a) {
                formatSupport.push('.m4a');
              }
            }
          })();

          __audioSupport.format = formatSupport;
          sys.__audioSupport = __audioSupport;
        }

      legacyCC.sys = sys;

      var audioSupport = sys.__audioSupport;
      var AudioPlayerWeb = /*#__PURE__*/function (_AudioPlayer) {
        _inherits(AudioPlayerWeb, _AudioPlayer);

        function AudioPlayerWeb(info) {
          var _this;

          _classCallCheck(this, AudioPlayerWeb);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(AudioPlayerWeb).call(this, info));
          _this._startTime = 0;
          _this._offset = 0;
          _this._volume = 1;
          _this._loop = false;
          _this._currentTimer = 0;
          _this._audio = void 0;
          _this._context = void 0;
          _this._sourceNode = void 0;
          _this._gainNode = void 0;
          _this._startInvoked = false;
          _this._onEndedCB = void 0;
          _this._onGestureCB = void 0;
          _this._onGestureProceedCB = void 0;
          _this._audio = info.clip;
          _this._context = audioSupport.context;
          _this._sourceNode = _this._context.createBufferSource();
          _this._gainNode = _this._context.createGain();

          _this._gainNode.connect(_this._context.destination);

          _this._onEndedCB = _this._onEnded.bind(_assertThisInitialized(_this));
          _this._onGestureCB = _this._onGesture.bind(_assertThisInitialized(_this));
          _this._onGestureProceedCB = _this._onGestureProceed.bind(_assertThisInitialized(_this)); // Chrome41/Firefox40 below don't have resume

          if (_this._context.state !== 'running' && _this._context.resume) {
            legacyCC.game.canvas.addEventListener('touchend', _this._onGestureCB);
            legacyCC.game.canvas.addEventListener('mouseup', _this._onGestureCB);
          }

          return _this;
        }

        _createClass(AudioPlayerWeb, [{
          key: "play",
          value: function play() {
            if (!this._audio || this._state === PlayingState.PLAYING) {
              return;
            }

            if (this._blocking || this._context.state !== 'running') {
              this._interrupted = true;

              if ('interrupted' === this._context.state && this._context.resume) {
                this._onGesture();
              }

              return;
            }

            this._doPlay();
          }
        }, {
          key: "pause",
          value: function pause() {
            if (this._state !== PlayingState.PLAYING) {
              return;
            }

            this._doStop();

            this._offset += this._context.currentTime - this._startTime;
            this._state = PlayingState.STOPPED;
            clearInterval(this._currentTimer);
          }
        }, {
          key: "stop",
          value: function stop() {
            this._offset = 0;

            if (this._state !== PlayingState.PLAYING) {
              return;
            }

            this._doStop();

            this._state = PlayingState.STOPPED;
            clearInterval(this._currentTimer);
          }
        }, {
          key: "playOneShot",
          value: function playOneShot() {
            var volume = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            if (!this._audio) {
              return;
            }

            var gainNode = this._context.createGain();

            gainNode.connect(this._context.destination);
            gainNode.gain.value = volume;

            var sourceNode = this._context.createBufferSource();

            sourceNode.buffer = this._audio;
            sourceNode.loop = false;
            sourceNode.connect(gainNode);
            sourceNode.start();
          }
        }, {
          key: "setCurrentTime",
          value: function setCurrentTime(val) {
            // throws InvalidState Error on some device if we don't do the clamp here
            // the serialized duration may not be accurate, use the actual duration first
            this._offset = clamp(val, 0, this._audio && this._audio.duration || this._duration);

            if (this._state !== PlayingState.PLAYING) {
              return;
            }

            this._doStop();

            this._doPlay();
          }
        }, {
          key: "getCurrentTime",
          value: function getCurrentTime() {
            if (this._state !== PlayingState.PLAYING) {
              return this._offset;
            }

            return this._context.currentTime - this._startTime + this._offset;
          }
        }, {
          key: "setVolume",
          value: function setVolume(val, immediate) {
            this._volume = val;

            if (!immediate && this._gainNode.gain.setTargetAtTime) {
              this._gainNode.gain.setTargetAtTime(val, this._context.currentTime, 0.01);
            } else {
              this._gainNode.gain.value = val;
            }
          }
        }, {
          key: "getVolume",
          value: function getVolume() {
            return this._volume;
          }
        }, {
          key: "setLoop",
          value: function setLoop(val) {
            this._loop = val;
            this._sourceNode.loop = val;
          }
        }, {
          key: "getLoop",
          value: function getLoop() {
            return this._loop;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            _get(_getPrototypeOf(AudioPlayerWeb.prototype), "destroy", this).call(this);
          }
        }, {
          key: "_doPlay",
          value: function _doPlay() {
            var _this2 = this;

            this._state = PlayingState.PLAYING;
            this._sourceNode = this._context.createBufferSource();
            this._sourceNode.buffer = this._audio;
            this._sourceNode.loop = this._loop;

            this._sourceNode.connect(this._gainNode);

            this._startTime = this._context.currentTime;
            this._startInvoked = false; // delay eval here to yield uniform behavior with other platforms

            legacyCC.director.once(legacyCC.Director.EVENT_AFTER_UPDATE, this._playAndEmit, this);
            /* still not supported by all platforms *
            this._sourceNode.onended = this._onEnded;
            /* doing it manually for now */

            clearInterval(this._currentTimer);
            this._currentTimer = window.setInterval(function () {
              _this2._onEnded();

              clearInterval(_this2._currentTimer);

              if (_this2._sourceNode.loop) {
                _this2._currentTimer = window.setInterval(_this2._onEndedCB, _this2._audio.duration * 1000);
              }
            }, (this._audio.duration - this._offset) * 1000);
          }
        }, {
          key: "_doStop",
          value: function _doStop() {
            // stop can only be called after play
            if (this._startInvoked) {
              this._sourceNode.stop();
            } else {
              legacyCC.director.off(legacyCC.Director.EVENT_AFTER_UPDATE, this._playAndEmit, this);
            }
          }
        }, {
          key: "_playAndEmit",
          value: function _playAndEmit() {
            this._sourceNode.start(0, this._offset);

            this._eventTarget.emit('started');

            this._startInvoked = true;
          }
        }, {
          key: "_onEnded",
          value: function _onEnded() {
            this._offset = 0;
            this._startTime = this._context.currentTime;

            if (this._sourceNode.loop) {
              return;
            }

            this._eventTarget.emit('ended');

            this._state = PlayingState.STOPPED;
          }
        }, {
          key: "_onGestureProceed",
          value: function _onGestureProceed() {
            if (this._interrupted) {
              this._doPlay();

              this._interrupted = false;
            }

            legacyCC.game.canvas.removeEventListener('touchend', this._onGestureCB);
            legacyCC.game.canvas.removeEventListener('mouseup', this._onGestureCB);
          }
        }, {
          key: "_onGesture",
          value: function _onGesture() {
            if (this._context.state !== 'running') {
              this._context.resume().then(this._onGestureProceedCB);
            } else {
              this._onGestureProceed();
            }
          }
        }]);

        return AudioPlayerWeb;
      }(AudioPlayer);

      var _dec$2, _dec2, _class$2, _class2$1, _descriptor$1, _descriptor2, _class3$1, _temp$2;
      var AudioType = Enum({
        WEB_AUDIO: 0,
        DOM_AUDIO: 1,
        JSB_AUDIO: 2,
        UNKNOWN_AUDIO: 3
      });
      /**
       * @en
       * The audio clip asset. <br>
       * 'started' event is emitted once the audio began to play. <br>
       * 'ended' event is emitted once the audio stopped. <br>
       * Low-level platform-specific details are handled independently inside each clip.
       * @zh
       * 音频片段资源。<br>
       * 每当音频片段实际开始播放时，会发出 'started' 事件；<br>
       * 每当音频片段自然结束播放时，会发出 'ended' 事件。<br>
       * 每个片段独立处理自己依赖的平台相关的底层细节。
       */

      var AudioClip = exports('A', (_dec$2 = ccclass('cc.AudioClip'), _dec2 = type(AudioType), _dec$2(_class$2 = (_class2$1 = (_temp$2 = _class3$1 = /*#__PURE__*/function (_Asset) {
        _inherits(AudioClip, _Asset);

        // we serialize this because it's unavailable at runtime on some platforms
        function AudioClip() {
          var _this;

          _classCallCheck(this, AudioClip);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(AudioClip).call(this));

          _initializerDefineProperty(_this, "_duration", _descriptor$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_loadMode", _descriptor2, _assertThisInitialized(_this));

          _this._audio = null;
          _this._player = null;
          _this.loaded = false;
          return _this;
        }

        _createClass(AudioClip, [{
          key: "destroy",
          value: function destroy() {
            if (this._player) {
              this._player.destroy();
            }

            return _get(_getPrototypeOf(AudioClip.prototype), "destroy", this).call(this);
          }
        }, {
          key: "play",
          value: function play() {
            if (this._player) {
              this._player.play();
            }
          }
        }, {
          key: "pause",
          value: function pause() {
            if (this._player) {
              this._player.pause();
            }
          }
        }, {
          key: "stop",
          value: function stop() {
            if (this._player) {
              this._player.stop();
            }
          }
        }, {
          key: "playOneShot",
          value: function playOneShot(volume) {
            if (this._player) {
              this._player.playOneShot(volume);
            }
          }
        }, {
          key: "setCurrentTime",
          value: function setCurrentTime(val) {
            if (this._player) {
              this._player.setCurrentTime(val);
            }
          }
        }, {
          key: "getCurrentTime",
          value: function getCurrentTime() {
            if (this._player) {
              return this._player.getCurrentTime();
            }

            return 0;
          }
        }, {
          key: "getDuration",
          value: function getDuration() {
            if (this._player) {
              return this._player.getDuration();
            }

            return this._duration;
          }
        }, {
          key: "setVolume",
          value: function setVolume(val, immediate) {
            if (this._player) {
              this._player.setVolume(val, immediate || false);
            }
          }
        }, {
          key: "getVolume",
          value: function getVolume() {
            if (this._player) {
              return this._player.getVolume();
            }

            return 1;
          }
        }, {
          key: "setLoop",
          value: function setLoop(val) {
            if (this._player) {
              this._player.setLoop(val);
            }
          }
        }, {
          key: "getLoop",
          value: function getLoop() {
            if (this._player) {
              return this._player.getLoop();
            }

            return false;
          }
        }, {
          key: "_getPlayer",
          value: function _getPlayer(clip) {
            var ctor;

            if (typeof AudioBuffer !== 'undefined' && clip instanceof AudioBuffer) {
              ctor = AudioPlayerWeb;
              this._loadMode = AudioType.WEB_AUDIO;
            } else {
              ctor = AudioPlayerDOM;
              this._loadMode = AudioType.DOM_AUDIO;
            }

            return ctor;
          }
        }, {
          key: "_nativeAsset",
          set: function set(clip) {
            this._audio = clip;

            if (clip) {
              var ctor = this._getPlayer(clip);

              this._player = new ctor({
                clip: clip,
                duration: this._duration,
                eventTarget: this
              });
              this.loaded = true;
              this.emit('load');
            } else {
              this._player = null;
              this._loadMode = AudioType.UNKNOWN_AUDIO;
              this._duration = 0;
              this.loaded = false;
            }
          },
          get: function get() {
            return this._audio;
          }
        }, {
          key: "loadMode",
          get: function get() {
            return this._loadMode;
          }
        }, {
          key: "state",
          get: function get() {
            return this._player ? this._player.getState() : PlayingState.INITIALIZING;
          }
        }]);

        return AudioClip;
      }(Asset), _class3$1.PlayingState = PlayingState, _class3$1.AudioType = AudioType, _class3$1.preventDeferredLoadDependents = true, _temp$2), (_descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_duration", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2$1.prototype, "_loadMode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return AudioType.UNKNOWN_AUDIO;
        }
      })), _class2$1)) || _class$2));
      legacyCC.AudioClip = AudioClip;

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
      var __audioSupport$1 = sys.__audioSupport;
      var formatSupport$1 = __audioSupport$1.format;

      function loadDomAudio(item, callback) {
        var dom = document.createElement('audio');
        dom.src = item.url;

        var clearEvent = function clearEvent() {
          clearTimeout(timer);
          dom.removeEventListener('canplaythrough', success, false);
          dom.removeEventListener('error', failure, false);

          if (__audioSupport$1.USE_LOADER_EVENT) {
            dom.removeEventListener(__audioSupport$1.USE_LOADER_EVENT, success, false);
          }
        };

        var timer = setTimeout(function () {
          if (dom.readyState === 0) {
            failure();
          } else {
            success();
          }
        }, 8000);

        var success = function success() {
          clearEvent();
          callback(null, dom);
        };

        var failure = function failure() {
          clearEvent();
          var message = 'load audio failure - ' + item.url;
          log(message);
          callback(message);
        };

        dom.addEventListener('canplaythrough', success, false);
        dom.addEventListener('error', failure, false);

        if (__audioSupport$1.USE_LOADER_EVENT) {
          dom.addEventListener(__audioSupport$1.USE_LOADER_EVENT, success, false);
        }
      }

      function loadWebAudio(item, callback) {
        var context = __audioSupport$1.context;

        if (!context) {
          callback(new Error(getError(4926)));
        }

        var request = legacyCC.loader.getXMLHttpRequest();
        request.open('GET', item.url, true);
        request.responseType = 'arraybuffer'; // Our asynchronous callback

        request.onload = function () {
          context.decodeAudioData(request.response, function (buffer) {
            // success
            callback(null, buffer);
          }, function () {
            // error
            callback('decode error - ' + item.id, null);
          });
        };

        request.onerror = function () {
          callback('request error - ' + item.id, null);
        };

        request.send();
      }

      function downloadAudio(item, callback) {
        if (formatSupport$1.length === 0) {
          return new Error(getError(4927));
        }

        var audioLoader;

        if (!__audioSupport$1.WEB_AUDIO) {
          audioLoader = loadDomAudio; // If WebAudio is not supported, load using DOM mode
        } else {
          var loadByDeserializedAudio = item._owner instanceof AudioClip;

          if (loadByDeserializedAudio) {
            audioLoader = item._owner.loadMode === AudioType.WEB_AUDIO ? loadWebAudio : loadDomAudio;
          } else {
            audioLoader = item.urlParam && item.urlParam.useDom ? loadDomAudio : loadWebAudio;
          }
        }

        audioLoader(item, callback);
      }

      var _dec$3, _class$3, _dec2$1, _class2$2, _dec3, _class3$2;
      /**
       * @en The script asset base class
       * @zh 脚本资源基类。
       */

      var Script = exports('aD', (_dec$3 = ccclass('cc.Script'), _dec$3(_class$3 = /*#__PURE__*/function (_Asset) {
        _inherits(Script, _Asset);

        function Script() {
          _classCallCheck(this, Script);

          return _possibleConstructorReturn(this, _getPrototypeOf(Script).apply(this, arguments));
        }

        return Script;
      }(Asset)) || _class$3));
      legacyCC._Script = Script;
      /**
       * @en JavaScript asset.
       * @zh JavaScript 脚本资源。
       */

      var JavaScript = exports('aE', (_dec2$1 = ccclass('cc.JavaScript'), _dec2$1(_class2$2 = /*#__PURE__*/function (_Script) {
        _inherits(JavaScript, _Script);

        function JavaScript() {
          _classCallCheck(this, JavaScript);

          return _possibleConstructorReturn(this, _getPrototypeOf(JavaScript).apply(this, arguments));
        }

        return JavaScript;
      }(Script)) || _class2$2));
      legacyCC._JavaScript = JavaScript;
      /**
       * @en TypeScript asset
       * @zh TypeScript 脚本资源。
       */

      var TypeScript = exports('aF', (_dec3 = ccclass('cc.TypeScript'), _dec3(_class3$2 = /*#__PURE__*/function (_Script2) {
        _inherits(TypeScript, _Script2);

        function TypeScript() {
          _classCallCheck(this, TypeScript);

          return _possibleConstructorReturn(this, _getPrototypeOf(TypeScript).apply(this, arguments));
        }

        return TypeScript;
      }(Script)) || _class3$2));
      legacyCC._TypeScript = TypeScript;

      var _dec$4, _dec2$2, _dec3$1, _dec4, _class$4, _class2$3, _descriptor$2, _descriptor2$1, _class3$3, _temp$3;
      var idGenerator = new IDGenerator('Comp'); // @ts-ignore

      var IsOnEnableCalled$1 = CCObject.Flags.IsOnEnableCalled; // @ts-ignore

      var IsOnLoadCalled$1 = CCObject.Flags.IsOnLoadCalled;
      var NullNode = null;
      /**
       * @en
       * Base class for everything attached to Node(Entity).<br/>
       * <br/>
       * NOTE: Not allowed to use construction parameters for Component's subclasses,
       *       because Component is created by the engine.
       * @zh
       * 所有附加到节点的基类。<br/>
       * <br/>
       * 注意：不允许使用组件的子类构造参数，因为组件是由引擎创建的。
       */

      var Component = exports('C', (_dec$4 = ccclass('cc.Component'), _dec2$2 = displayName(), _dec3$1 = type(Script), _dec4 = tooltip(), _dec$4(_class$4 = (_class2$3 = (_temp$3 = _class3$3 = /*#__PURE__*/function (_CCObject) {
        _inherits(Component, _CCObject);

        function Component() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Component);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Component)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "node", _descriptor$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_enabled", _descriptor2$1, _assertThisInitialized(_this));

          _this._sceneGetter = null;
          _this._id = idGenerator.getNewId();
          return _this;
        }

        _createClass(Component, [{
          key: "_getRenderScene",
          // private __scriptUuid = '';

          /**
           * @private
           */
          value: function _getRenderScene() {
            if (this._sceneGetter) {
              return this._sceneGetter();
            } else {
              return this.node.scene._renderScene;
            }
          } // PUBLIC

          /**
           * @en Adds a component class to the node. You can also add component to node by passing in the name of the script.
           * @zh 向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。
           * @param classConstructor The class of component to be retrieved or to be created
           * @example
           * ```ts
           * import { Sprite } from 'cc';
           * const sprite = node.addComponent(Sprite);
           * ```
           */

        }, {
          key: "addComponent",
          value: function addComponent(typeOrClassName) {
            return this.node.addComponent(typeOrClassName);
          }
          /**
           * @en
           * Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
           * You can also get component in the node by passing in the name of the script.
           * @zh
           * 获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
           * 传入参数也可以是脚本的名称。
           * @param classConstructor The class of component to be retrieved or to be created
           * @example
           * ```ts
           * import { Sprite } from 'cc';
           * // get sprite component.
           * var sprite = node.getComponent(Sprite);
           * ```
           */

        }, {
          key: "getComponent",
          value: function getComponent(typeOrClassName) {
            return this.node.getComponent(typeOrClassName);
          }
          /**
           * @en Returns all components of supplied type in the node.
           * @zh 返回节点上指定类型的所有组件。
           * @param classConstructor The class of components to be retrieved
           * @example
           * ```ts
           * import { Sprite } from 'cc';
           * const sprites = node.getComponents(Sprite);
           * ```
           */

        }, {
          key: "getComponents",
          value: function getComponents(typeOrClassName) {
            return this.node.getComponents(typeOrClassName);
          }
          /**
           * @en Returns the component of supplied type in any of its children using depth first search.
           * @zh 递归查找所有子节点中第一个匹配指定类型的组件。
           * @param classConstructor The class of component to be retrieved
           * @example
           * ```ts
           * import { Sprite } from 'cc';
           * const sprite = node.getComponentInChildren(Sprite);
           * ```
           */

        }, {
          key: "getComponentInChildren",
          value: function getComponentInChildren(typeOrClassName) {
            return this.node.getComponentInChildren(typeOrClassName);
          }
          /**
           * @en Returns all components of supplied type in self or any of its children.
           * @zh 递归查找自身或所有子节点中指定类型的组件。
           * @param classConstructor The class of components to be retrieved
           * @example
           * ```ts
           * import { Sprite } from 'cc';
           * const sprites = node.getComponentsInChildren(Sprite);
           * ```
           */

        }, {
          key: "getComponentsInChildren",
          value: function getComponentsInChildren(typeOrClassName) {
            return this.node.getComponentsInChildren(typeOrClassName);
          } // OVERRIDE

        }, {
          key: "destroy",
          value: function destroy() {

            if (_get(_getPrototypeOf(Component.prototype), "destroy", this).call(this)) {
              if (this._enabled && this.node.activeInHierarchy) {
                legacyCC.director._compScheduler.disableComp(this);
              }

              return true;
            }

            return false;
          }
        }, {
          key: "_onPreDestroy",
          value: function _onPreDestroy() {
            // Schedules
            this.unscheduleAllCallbacks(); //


            legacyCC.director._nodeActivator.destroyComp(this); // do remove component


            this.node._removeComponent(this);
          }
        }, {
          key: "_instantiate",
          value: function _instantiate(cloned) {
            if (!cloned) {
              cloned = legacyCC.instantiate._clone(this, this);
            }

            cloned.node = null;
            return cloned;
          } // Scheduler

          /**
           * @en
           * Schedules a custom task.<br/>
           * If the task is already scheduled, then the interval parameter will be updated without scheduling it again.
           * @zh
           * 调度一个自定义的回调任务。<br/>
           * 如果回调任务已调度，那么将不会重复调度它，只会更新时间间隔参数。
           * @param callback  The callback function of the task
           * @param interval  The time interval between each invocation
           * @param repeat    The repeat count of this task, the task will be invoked (repeat + 1) times, use [[macro.REPEAT_FOREVER]] to repeat a task forever
           * @param delay     The delay time for the first invocation
           * @example
           * ```ts
           * import { log } from 'cc';
           * this.schedule((dt) => void log(`time: ${dt}`), 1);
           * ```
           */

        }, {
          key: "schedule",
          value: function schedule(callback) {
            var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : legacyCC.macro.REPEAT_FOREVER;
            var delay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            assertID(callback, 1619);
            assertID(interval >= 0, 1620);
            interval = interval || 0;
            repeat = isNaN(repeat) ? legacyCC.macro.REPEAT_FOREVER : repeat;
            delay = delay || 0;
            var scheduler = legacyCC.director.getScheduler(); // should not use enabledInHierarchy to judge whether paused,
            // because enabledInHierarchy is assigned after onEnable.
            // Actually, if not yet scheduled, resumeTarget/pauseTarget has no effect on component,
            // therefore there is no way to guarantee the paused state other than isTargetPaused.

            var paused = scheduler.isTargetPaused(this);
            scheduler.schedule(callback, this, interval, repeat, delay, paused);
          }
          /**
           * @en Schedules a task that runs only once, with a delay of 0 or larger.
           * @zh 调度一个只运行一次的回调任务，可以指定 0 让回调函数在下一帧立即执行或者在一定的延时之后执行。
           * @method scheduleOnce
           * @see [[schedule]]
           * @param callback  The callback function of the task
           * @param delay  The delay time for the first invocation
           * @example
           * ```ts
           * import { log } from 'cc';
           * this.scheduleOnce((dt) => void log(`time: ${dt}`), 2);
           * ```
           */

        }, {
          key: "scheduleOnce",
          value: function scheduleOnce(callback) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            this.schedule(callback, 0, 0, delay);
          }
          /**
           * @en Un-schedules a custom task.
           * @zh 取消调度一个自定义的回调任务。
           * @param callback_fn  The callback function of the task
           * @example
           * ```ts
           * this.unschedule(_callback);
           * ```
           */

        }, {
          key: "unschedule",
          value: function unschedule(callback_fn) {
            if (!callback_fn) {
              return;
            }

            legacyCC.director.getScheduler().unschedule(callback_fn, this);
          }
          /**
           * @en unschedule all scheduled tasks.
           * @zh 取消调度所有已调度的回调函数。
           * @example
           * ```ts
           * this.unscheduleAllCallbacks();
           * ```
           */

        }, {
          key: "unscheduleAllCallbacks",
          value: function unscheduleAllCallbacks() {
            legacyCC.director.getScheduler().unscheduleAllForTarget(this);
          } // LIFECYCLE METHODS
          // Cocos Creator provides lifecycle methods that you can specify to hook into this process.
          // We provide Pre methods, which are called right before something happens, and Post methods which are called right after something happens.

          /**
           * @en Update is called every frame, if the Component is enabled.<br/>
           * This is a lifecycle method. It may not be implemented in the super class.<br/>
           * You can only call its super class method inside it. It should not be called manually elsewhere.
           * @zh 如果该组件启用，则每帧调用 update。<br/>
           * 该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。
           * @param dt - the delta time in seconds it took to complete the last frame
           */

        }, {
          key: "name",
          get: function get() {
            if (this._name) {
              return this._name;
            }

            var className = getClassName(this);
            var trimLeft = className.lastIndexOf('.');

            if (trimLeft >= 0) {
              className = className.slice(trimLeft + 1);
            }

            return this.node.name + '<' + className + '>';
          },
          set: function set(value) {
            this._name = value;
          }
          /**
           * @en The uuid for editor.
           * @zh 组件的 uuid，用于编辑器。
           * @readOnly
           * @example
           * ```ts
           * import { log } from 'cc';
           * log(comp.uuid);
           * ```
           */

        }, {
          key: "uuid",
          get: function get() {
            return this._id;
          }
        }, {
          key: "__scriptAsset",
          get: function get() {
            return null;
          }
          /**
           * @en Indicates whether this component is enabled or not.
           * @zh 表示该组件自身是否启用。
           * @default true
           * @example
           * ```ts
           * import { log } from 'cc';
           * comp.enabled = true;
           * log(comp.enabled);
           * ```
           */

        }, {
          key: "enabled",
          get: function get() {
            return this._enabled;
          },
          set: function set(value) {
            if (this._enabled !== value) {
              this._enabled = value;

              if (this.node.activeInHierarchy) {
                var compScheduler = legacyCC.director._compScheduler;

                if (value) {
                  compScheduler.enableComp(this);
                } else {
                  compScheduler.disableComp(this);
                }
              }
            }
          }
          /**
           * @en Indicates whether this component is enabled and its node is also active in the hierarchy.
           * @zh 表示该组件是否被启用并且所在的节点也处于激活状态。
           * @readOnly
           * @example
           * ```ts
           * import { log } from 'cc';
           * log(comp.enabledInHierarchy);
           * ```
           */

        }, {
          key: "enabledInHierarchy",
          get: function get() {
            return this._enabled && this.node && this.node.activeInHierarchy;
          }
          /**
           * @en Returns a value which used to indicate the onLoad get called or not.
           * @zh 返回一个值用来判断 onLoad 是否被调用过，不等于 0 时调用过，等于 0 时未调用。
           * @readOnly
           * @example
           * ```ts
           * import { log } from 'cc';
           * log(this._isOnLoadCalled > 0);
           * ```
           */

        }, {
          key: "_isOnLoadCalled",
          get: function get() {
            return this._objFlags & IsOnLoadCalled$1;
          }
        }]);

        return Component;
      }(CCObject), _class3$3.system = null, _temp$3), (_applyDecoratedDescriptor(_class2$3.prototype, "__scriptAsset", [_dec2$2, _dec3$1, _dec4], Object.getOwnPropertyDescriptor(_class2$3.prototype, "__scriptAsset"), _class2$3.prototype), _descriptor$2 = _applyDecoratedDescriptor(_class2$3.prototype, "node", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return NullNode;
        }
      }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$3.prototype, "_enabled", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2$3)) || _class$4));
      var proto = Component.prototype; // @ts-ignore

      proto.update = null; // @ts-ignore

      proto.lateUpdate = null; // @ts-ignore

      proto.__preload = null; // @ts-ignore

      proto.onLoad = null; // @ts-ignore

      proto.start = null; // @ts-ignore

      proto.onEnable = null; // @ts-ignore

      proto.onDisable = null; // @ts-ignore

      proto.onDestroy = null; // @ts-ignore

      proto.onFocusInEditor = null; // @ts-ignore

      proto.onLostFocusInEditor = null; // @ts-ignore

      proto.resetInEditor = null; // @ts-ignore

      proto._getLocalBounds = null; // @ts-ignore

      proto.onRestore = null; // @ts-ignore

      Component._requireComponent = null; // @ts-ignore

      Component._executionOrder = 0;


      value(Component, '_registerEditorProps', function (cls, props) {
        var reqComp = props.requireComponent;

        if (reqComp) {
          cls._requireComponent = reqComp;
        }

        var order = props.executionOrder;

        if (order && typeof order === 'number') {
          cls._executionOrder = order;
        }
      });
      legacyCC.Component = Component;

      /**
       * 数学库
       * @category core/math
       */

      /**
       * Bit twiddling hacks for JavaScript.
       *
       * Author: Mikola Lysenko
       *
       * Ported from Stanford bit twiddling hack library:
       *    http://graphics.stanford.edu/~seander/bithacks.html
       */
      // Number of bits in an integer
      var INT_BITS = 32;
      var INT_MAX = exports('bL', 0x7fffffff);
      var INT_MIN = -1 << INT_BITS - 1;
      /**
       * @en Returns -1, 0, +1 depending on sign of x.
       * @zh 根据x的符号返回 -1，0，+1。
       */

      function sign(v) {
        return (v > 0) - (v < 0);
      }
      /**
       * @en Computes absolute value of integer.
       * @zh 计算整数的绝对值。
       */

      function abs(v) {
        var mask = v >> INT_BITS - 1;
        return (v ^ mask) - mask;
      }
      /**
       * @en Computes minimum of integers x and y.
       * @zh 计算整数x和y中的最小值。
       */

      function min(x, y) {
        return y ^ (x ^ y) & -(x < y);
      }
      /**
       * @en Computes maximum of integers x and y.
       * @zh 计算整数x和y中的最大值。
       */

      function max(x, y) {
        return x ^ (x ^ y) & -(x < y);
      }
      /**
       * @en Checks if a number is a power of two.
       * @zh 检查一个数字是否是2的幂。
       */

      function isPow2(v) {
        return !(v & v - 1) && !!v;
      }
      /**
       * Computes log base 2 of v.
       */

      function log2(v) {
        var r;
        var shift;
        r = (v > 0xFFFF) << 4;
        v >>>= r;
        shift = (v > 0xFF) << 3;
        v >>>= shift;
        r |= shift;
        shift = (v > 0xF) << 2;
        v >>>= shift;
        r |= shift;
        shift = (v > 0x3) << 1;
        v >>>= shift;
        r |= shift;
        return r | v >> 1;
      }
      /**
       * Computes log base 10 of v.
       */

      function log10(v) {
        return v >= 1000000000 ? 9 : v >= 100000000 ? 8 : v >= 10000000 ? 7 : v >= 1000000 ? 6 : v >= 100000 ? 5 : v >= 10000 ? 4 : v >= 1000 ? 3 : v >= 100 ? 2 : v >= 10 ? 1 : 0;
      }
      /**
       * Counts number of bits.
       */

      function popCount(v) {
        v = v - (v >>> 1 & 0x55555555);
        v = (v & 0x33333333) + (v >>> 2 & 0x33333333);
        return (v + (v >>> 4) & 0xF0F0F0F) * 0x1010101 >>> 24;
      }
      /**
       * @en Counts number of trailing zeros.
       * @zh 计算数字后面零的数量。
       */

      function countTrailingZeros(v) {
        var c = 32;
        v &= -v;

        if (v) {
          c--;
        }

        if (v & 0x0000FFFF) {
          c -= 16;
        }

        if (v & 0x00FF00FF) {
          c -= 8;
        }

        if (v & 0x0F0F0F0F) {
          c -= 4;
        }

        if (v & 0x33333333) {
          c -= 2;
        }

        if (v & 0x55555555) {
          c -= 1;
        }

        return c;
      }
      /**
       * Rounds to next power of 2.
       */

      function nextPow2$1(v) {
        v += v === 0;
        --v;
        v |= v >>> 1;
        v |= v >>> 2;
        v |= v >>> 4;
        v |= v >>> 8;
        v |= v >>> 16;
        return v + 1;
      }
      /**
       * Rounds down to previous power of 2.
       */

      function prevPow2(v) {
        v |= v >>> 1;
        v |= v >>> 2;
        v |= v >>> 4;
        v |= v >>> 8;
        v |= v >>> 16;
        return v - (v >>> 1);
      }
      /**
       * Computes parity of word.
       */

      function parity(v) {
        v ^= v >>> 16;
        v ^= v >>> 8;
        v ^= v >>> 4;
        v &= 0xf;
        return 0x6996 >>> v & 1;
      }
      var REVERSE_TABLE = new Array(256);

      (function (tab) {
        for (var i = 0; i < 256; ++i) {
          var v = i;
          var r = i;
          var s = 7;

          for (v >>>= 1; v; v >>>= 1) {
            r <<= 1;
            r |= v & 1;
            --s;
          }

          tab[i] = r << s & 0xff;
        }
      })(REVERSE_TABLE);
      /**
       * Reverse bits in a 32 bit word.
       */


      function reverse(v) {
        return REVERSE_TABLE[v & 0xff] << 24 | REVERSE_TABLE[v >>> 8 & 0xff] << 16 | REVERSE_TABLE[v >>> 16 & 0xff] << 8 | REVERSE_TABLE[v >>> 24 & 0xff];
      }
      /**
       * Interleave bits of 2 coordinates with 16 bits. Useful for fast quadtree codes.
       */

      function interleave2(x, y) {
        x &= 0xFFFF;
        x = (x | x << 8) & 0x00FF00FF;
        x = (x | x << 4) & 0x0F0F0F0F;
        x = (x | x << 2) & 0x33333333;
        x = (x | x << 1) & 0x55555555;
        y &= 0xFFFF;
        y = (y | y << 8) & 0x00FF00FF;
        y = (y | y << 4) & 0x0F0F0F0F;
        y = (y | y << 2) & 0x33333333;
        y = (y | y << 1) & 0x55555555;
        return x | y << 1;
      }
      /**
       * Extracts the nth interleaved component.
       */

      function deinterleave2(v, n) {
        v = v >>> n & 0x55555555;
        v = (v | v >>> 1) & 0x33333333;
        v = (v | v >>> 2) & 0x0F0F0F0F;
        v = (v | v >>> 4) & 0x00FF00FF;
        v = (v | v >>> 16) & 0x000FFFF;
        return v << 16 >> 16;
      }
      /**
       * Interleave bits of 3 coordinates, each with 10 bits.  Useful for fast octree codes.
       */

      function interleave3(x, y, z) {
        x &= 0x3FF;
        x = (x | x << 16) & 4278190335;
        x = (x | x << 8) & 251719695;
        x = (x | x << 4) & 3272356035;
        x = (x | x << 2) & 1227133513;
        y &= 0x3FF;
        y = (y | y << 16) & 4278190335;
        y = (y | y << 8) & 251719695;
        y = (y | y << 4) & 3272356035;
        y = (y | y << 2) & 1227133513;
        x |= y << 1;
        z &= 0x3FF;
        z = (z | z << 16) & 4278190335;
        z = (z | z << 8) & 251719695;
        z = (z | z << 4) & 3272356035;
        z = (z | z << 2) & 1227133513;
        return x | z << 2;
      }
      /**
       * Extracts nth interleaved component of a 3-tuple.
       */

      function deinterleave3(v, n) {
        v = v >>> n & 1227133513;
        v = (v | v >>> 2) & 3272356035;
        v = (v | v >>> 4) & 251719695;
        v = (v | v >>> 8) & 4278190335;
        v = (v | v >>> 16) & 0x3FF;
        return v << 22 >> 22;
      }
      /**
       * Computes next combination in colexicographic order (this is
       * mistakenly called nextPermutation on the bit twiddling hacks page).
       */

      function nextCombination(v) {
        var t = v | v - 1;
        return t + 1 | (~t & -~t) - 1 >>> countTrailingZeros(v) + 1;
      }

      var bits = /*#__PURE__*/Object.freeze({
        __proto__: null,
        INT_BITS: INT_BITS,
        INT_MAX: INT_MAX,
        INT_MIN: INT_MIN,
        sign: sign,
        abs: abs,
        min: min,
        max: max,
        isPow2: isPow2,
        log2: log2,
        log10: log10,
        popCount: popCount,
        countTrailingZeros: countTrailingZeros,
        nextPow2: nextPow2$1,
        prevPow2: prevPow2,
        parity: parity,
        reverse: reverse,
        interleave2: interleave2,
        deinterleave2: deinterleave2,
        interleave3: interleave3,
        deinterleave3: deinterleave3,
        nextCombination: nextCombination
      });
      exports('G', bits);

      /**
       * 二维向量。
       */

      var Vec2 = exports('H', /*#__PURE__*/function (_ValueType) {
        _inherits(Vec2, _ValueType);

        _createClass(Vec2, null, [{
          key: "clone",

          /**
           * @zh 获得指定向量的拷贝
           */
          value: function clone(a) {
            return new Vec2(a.x, a.y);
          }
          /**
           * @zh 复制目标向量
           */

        }, {
          key: "copy",
          value: function copy(out, a) {
            out.x = a.x;
            out.y = a.y;
            return out;
          }
          /**
           * @zh 设置向量值
           */

        }, {
          key: "set",
          value: function set(out, x, y) {
            out.x = x;
            out.y = y;
            return out;
          }
          /**
           * @zh 逐元素向量加法
           */

        }, {
          key: "add",
          value: function add(out, a, b) {
            out.x = a.x + b.x;
            out.y = a.y + b.y;
            return out;
          }
          /**
           * @zh 逐元素向量减法
           */

        }, {
          key: "subtract",
          value: function subtract(out, a, b) {
            out.x = a.x - b.x;
            out.y = a.y - b.y;
            return out;
          }
          /**
           * @zh 逐元素向量乘法
           */

        }, {
          key: "multiply",
          value: function multiply(out, a, b) {
            out.x = a.x * b.x;
            out.y = a.y * b.y;
            return out;
          }
          /**
           * @zh 逐元素向量除法
           */

        }, {
          key: "divide",
          value: function divide(out, a, b) {
            out.x = a.x / b.x;
            out.y = a.y / b.y;
            return out;
          }
          /**
           * @zh 逐元素向量向上取整
           */

        }, {
          key: "ceil",
          value: function ceil(out, a) {
            out.x = Math.ceil(a.x);
            out.y = Math.ceil(a.y);
            return out;
          }
          /**
           * @zh 逐元素向量向下取整
           */

        }, {
          key: "floor",
          value: function floor(out, a) {
            out.x = Math.floor(a.x);
            out.y = Math.floor(a.y);
            return out;
          }
          /**
           * @zh 逐元素向量最小值
           */

        }, {
          key: "min",
          value: function min(out, a, b) {
            out.x = Math.min(a.x, b.x);
            out.y = Math.min(a.y, b.y);
            return out;
          }
          /**
           * @zh 逐元素向量最大值
           */

        }, {
          key: "max",
          value: function max(out, a, b) {
            out.x = Math.max(a.x, b.x);
            out.y = Math.max(a.y, b.y);
            return out;
          }
          /**
           * @zh 逐元素向量四舍五入取整
           */

        }, {
          key: "round",
          value: function round(out, a) {
            out.x = Math.round(a.x);
            out.y = Math.round(a.y);
            return out;
          }
          /**
           * @zh 向量标量乘法
           */

        }, {
          key: "multiplyScalar",
          value: function multiplyScalar(out, a, b) {
            out.x = a.x * b;
            out.y = a.y * b;
            return out;
          }
          /**
           * @zh 逐元素向量乘加: A + B * scale
           */

        }, {
          key: "scaleAndAdd",
          value: function scaleAndAdd(out, a, b, scale) {
            out.x = a.x + b.x * scale;
            out.y = a.y + b.y * scale;
            return out;
          }
          /**
           * @zh 求两向量的欧氏距离
           */

        }, {
          key: "distance",
          value: function distance(a, b) {
            var x = b.x - a.x;
            var y = b.y - a.y;
            return Math.sqrt(x * x + y * y);
          }
          /**
           * @zh 求两向量的欧氏距离平方
           */

        }, {
          key: "squaredDistance",
          value: function squaredDistance(a, b) {
            var x = b.x - a.x;
            var y = b.y - a.y;
            return x * x + y * y;
          }
          /**
           * @zh 求向量长度
           */

        }, {
          key: "len",
          value: function len(a) {
            var x = a.x;
            var y = a.y;
            return Math.sqrt(x * x + y * y);
          }
          /**
           * @zh 求向量长度平方
           */

        }, {
          key: "lengthSqr",
          value: function lengthSqr(a) {
            var x = a.x;
            var y = a.y;
            return x * x + y * y;
          }
          /**
           * @zh 逐元素向量取负
           */

        }, {
          key: "negate",
          value: function negate(out, a) {
            out.x = -a.x;
            out.y = -a.y;
            return out;
          }
          /**
           * @zh 逐元素向量取倒数，接近 0 时返回 Infinity
           */

        }, {
          key: "inverse",
          value: function inverse(out, a) {
            out.x = 1.0 / a.x;
            out.y = 1.0 / a.y;
            return out;
          }
          /**
           * @zh 逐元素向量取倒数，接近 0 时返回 0
           */

        }, {
          key: "inverseSafe",
          value: function inverseSafe(out, a) {
            var x = a.x;
            var y = a.y;

            if (Math.abs(x) < EPSILON) {
              out.x = 0;
            } else {
              out.x = 1.0 / x;
            }

            if (Math.abs(y) < EPSILON) {
              out.y = 0;
            } else {
              out.y = 1.0 / y;
            }

            return out;
          }
          /**
           * @zh 归一化向量
           */

        }, {
          key: "normalize",
          value: function normalize(out, a) {
            var x = a.x;
            var y = a.y;
            var len = x * x + y * y;

            if (len > 0) {
              len = 1 / Math.sqrt(len);
              out.x = x * len;
              out.y = y * len;
            }

            return out;
          }
          /**
           * @zh 向量点积（数量积）
           */

        }, {
          key: "dot",
          value: function dot(a, b) {
            return a.x * b.x + a.y * b.y;
          }
          /**
           * @zh 向量叉积（向量积），注意二维向量的叉积为与 Z 轴平行的三维向量
           */

        }, {
          key: "cross",
          value: function cross(out, a, b) {
            out.x = out.y = 0;
            out.z = a.x * b.y - a.y * b.x;
            return out;
          }
          /**
           * @zh 逐元素向量线性插值： A + t * (B - A)
           */

        }, {
          key: "lerp",
          value: function lerp(out, a, b, t) {
            var x = a.x;
            var y = a.y;
            out.x = x + t * (b.x - x);
            out.y = y + t * (b.y - y);
            return out;
          }
          /**
           * @zh 生成一个在单位圆上均匀分布的随机向量
           * @param scale 生成的向量长度
           */

        }, {
          key: "random",
          value: function random$1(out, scale) {
            scale = scale || 1.0;
            var r = random() * 2.0 * Math.PI;
            out.x = Math.cos(r) * scale;
            out.y = Math.sin(r) * scale;
            return out;
          }
          /**
           * @zh 向量与三维矩阵乘法，默认向量第三位为 1。
           */

        }, {
          key: "transformMat3",
          value: function transformMat3(out, a, m) {
            var x = a.x;
            var y = a.y;
            out.x = m.m00 * x + m.m03 * y + m.m06;
            out.y = m.m01 * x + m.m04 * y + m.m07;
            return out;
          }
          /**
           * @zh 向量与四维矩阵乘法，默认向量第三位为 0，第四位为 1。
           */

        }, {
          key: "transformMat4",
          value: function transformMat4(out, a, m) {
            var x = a.x;
            var y = a.y;
            out.x = m.m00 * x + m.m04 * y + m.m12;
            out.y = m.m01 * x + m.m05 * y + m.m13;
            return out;
          }
          /**
           * @zh 返回向量的字符串表示
           */

        }, {
          key: "str",
          value: function str(a) {
            return "Vec2(".concat(a.x, ", ").concat(a.y, ")");
          }
          /**
           * @zh 向量转数组
           * @param ofs 数组起始偏移量
           */

        }, {
          key: "toArray",
          value: function toArray(out, v) {
            var ofs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            out[ofs + 0] = v.x;
            out[ofs + 1] = v.y;
            return out;
          }
          /**
           * @zh 数组转向量
           * @param ofs 数组起始偏移量
           */

        }, {
          key: "fromArray",
          value: function fromArray(out, arr) {
            var ofs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            out.x = arr[ofs + 0];
            out.y = arr[ofs + 1];
            return out;
          }
          /**
           * @zh 向量等价判断
           */

        }, {
          key: "strictEquals",
          value: function strictEquals(a, b) {
            return a.x === b.x && a.y === b.y;
          }
          /**
           * @zh 排除浮点数误差的向量近似等价判断
           */

        }, {
          key: "equals",
          value: function equals(a, b) {
            var epsilon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EPSILON;
            return Math.abs(a.x - b.x) <= epsilon * Math.max(1.0, Math.abs(a.x), Math.abs(b.x)) && Math.abs(a.y - b.y) <= epsilon * Math.max(1.0, Math.abs(a.y), Math.abs(b.y));
          }
          /**
           * @zh 求两向量夹角弧度
           */

        }, {
          key: "angle",
          value: function angle(a, b) {
            Vec2.normalize(v2_1, a);
            Vec2.normalize(v2_2, b);
            var cosine = Vec2.dot(v2_1, v2_2);

            if (cosine > 1.0) {
              return 0;
            }

            if (cosine < -1.0) {
              return Math.PI;
            }

            return Math.acos(cosine);
          }
          /**
           * x 分量。
           */

        }]);

        function Vec2(x, y) {
          var _this;

          _classCallCheck(this, Vec2);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Vec2).call(this));

          if (x && _typeof(x) === 'object') {
            _this.x = x.x;
            _this.y = x.y;
          } else {
            _this.x = x || 0;
            _this.y = y || 0;
          }

          return _this;
        }
        /**
         * @zh 克隆当前向量。
         */


        _createClass(Vec2, [{
          key: "clone",
          value: function clone() {
            return new Vec2(this.x, this.y);
          }
          /**
           * @zh 设置当前向量使其与指定向量相等。
           * @param other 相比较的向量。
           * @return `this`
           */

        }, {
          key: "set",
          value: function set(x, y) {
            if (x && _typeof(x) === 'object') {
              this.x = x.x;
              this.y = x.y;
            } else {
              this.x = x || 0;
              this.y = y || 0;
            }

            return this;
          }
          /**
           * @zh 判断当前向量是否在误差范围内与指定向量相等。
           * @param other 相比较的向量。
           * @param epsilon 允许的误差，应为非负数。
           * @return 当两向量的各分量都在指定的误差范围内分别相等时，返回 `true`；否则返回 `false`。
           */

        }, {
          key: "equals",
          value: function equals(other) {
            var epsilon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSILON;
            return Math.abs(this.x - other.x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(other.x)) && Math.abs(this.y - other.y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(other.y));
          }
          /**
           * @zh 判断当前向量是否在误差范围内与指定分量的向量相等。
           * @param x 相比较的向量的 x 分量。
           * @param y 相比较的向量的 y 分量。
           * @param epsilon 允许的误差，应为非负数。
           * @return 当两向量的各分量都在指定的误差范围内分别相等时，返回 `true`；否则返回 `false`。
           */

        }, {
          key: "equals2f",
          value: function equals2f(x, y) {
            var epsilon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EPSILON;
            return Math.abs(this.x - x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(x)) && Math.abs(this.y - y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(y));
          }
          /**
           * @zh 判断当前向量是否与指定向量相等。
           * @param other 相比较的向量。
           * @return 两向量的各分量都分别相等时返回 `true`；否则返回 `false`。
           */

        }, {
          key: "strictEquals",
          value: function strictEquals(other) {
            return other && this.x === other.x && this.y === other.y;
          }
          /**
           * @zh 判断当前向量是否与指定分量的向量相等。
           * @param x 指定向量的 x 分量。
           * @param y 指定向量的 y 分量。
           * @return 两向量的各分量都分别相等时返回 `true`；否则返回 `false`。
           */

        }, {
          key: "strictEquals2f",
          value: function strictEquals2f(x, y) {
            return this.x === x && this.y === y;
          }
          /**
           * @zh 返回当前向量的字符串表示。
           * @returns 当前向量的字符串表示。
           */

        }, {
          key: "toString",
          value: function toString() {
            return "(".concat(this.x.toFixed(2), ", ").concat(this.y.toFixed(2), ")");
          }
          /**
           * @zh 根据指定的插值比率，从当前向量到目标向量之间做插值。
           * @param to 目标向量。
           * @param ratio 插值比率，范围为 [0,1]。
           */

        }, {
          key: "lerp",
          value: function lerp(to, ratio) {
            var x = this.x;
            var y = this.y;
            this.x = x + ratio * (to.x - x);
            this.y = y + ratio * (to.y - y);
            return this;
          }
          /**
           * @zh 设置当前向量的值，使其各个分量都处于指定的范围内。
           * @param minInclusive 每个分量都代表了对应分量允许的最小值。
           * @param maxInclusive 每个分量都代表了对应分量允许的最大值。
           * @return `this`
           */

        }, {
          key: "clampf",
          value: function clampf(minInclusive, maxInclusive) {
            this.x = clamp(this.x, minInclusive.x, maxInclusive.x);
            this.y = clamp(this.y, minInclusive.y, maxInclusive.y);
            return this;
          }
          /**
           * @zh 向量加法。将当前向量与指定向量的相加
           * @param other 指定的向量。
           */

        }, {
          key: "add",
          value: function add(other) {
            this.x = this.x + other.x;
            this.y = this.y + other.y;
            return this;
          }
          /**
           * @zh 向量加法。将当前向量与指定分量的向量相加
           * @param x 指定的向量的 x 分量。
           * @param y 指定的向量的 y 分量。
           */

        }, {
          key: "add2f",
          value: function add2f(x, y) {
            this.x = this.x + x;
            this.y = this.y + y;
            return this;
          }
          /**
           * @zh 向量减法。将当前向量减去指定向量
           * @param other 减数向量。
           */

        }, {
          key: "subtract",
          value: function subtract(other) {
            this.x = this.x - other.x;
            this.y = this.y - other.y;
            return this;
          }
          /**
           * @zh 向量减法。将当前向量减去指定分量的向量
           * @param x 指定的向量的 x 分量。
           * @param y 指定的向量的 y 分量。
           */

        }, {
          key: "subtract2f",
          value: function subtract2f(x, y) {
            this.x = this.x - x;
            this.y = this.y - y;
            return this;
          }
          /**
           * @zh 向量数乘。将当前向量数乘指定标量
           * @param scalar 标量乘数。
           */

        }, {
          key: "multiplyScalar",
          value: function multiplyScalar(scalar) {
            if (_typeof(scalar) === 'object') {
              console.warn('should use Vec2.multiply for vector * vector operation');
            }

            this.x = this.x * scalar;
            this.y = this.y * scalar;
            return this;
          }
          /**
           * @zh 向量乘法。将当前向量乘以与指定向量的结果赋值给当前向量。
           * @param other 指定的向量。
           */

        }, {
          key: "multiply",
          value: function multiply(other) {
            if (_typeof(other) !== 'object') {
              console.warn('should use Vec2.scale for vector * scalar operation');
            }

            this.x = this.x * other.x;
            this.y = this.y * other.y;
            return this;
          }
          /**
           * @zh 向量乘法。将当前向量与指定分量的向量相乘的结果赋值给当前向量。
           * @param x 指定的向量的 x 分量。
           * @param y 指定的向量的 y 分量。
           */

        }, {
          key: "multiply2f",
          value: function multiply2f(x, y) {
            this.x = this.x * x;
            this.y = this.y * y;
            return this;
          }
          /**
           * @zh 向量逐元素相除。将当前向量与指定分量的向量相除的结果赋值给当前向量。
           * @param other 指定的向量
           */

        }, {
          key: "divide",
          value: function divide(other) {
            this.x = this.x / other.x;
            this.y = this.y / other.y;
            return this;
          }
          /**
           * @zh 向量逐元素相除。将当前向量与指定分量的向量相除的结果赋值给当前向量。
           * @param x 指定的向量的 x 分量。
           * @param y 指定的向量的 y 分量。
           */

        }, {
          key: "divide2f",
          value: function divide2f(x, y) {
            this.x = this.x / x;
            this.y = this.y / y;
            return this;
          }
          /**
           * @zh 将当前向量的各个分量取反
           */

        }, {
          key: "negative",
          value: function negative() {
            this.x = -this.x;
            this.y = -this.y;
            return this;
          }
          /**
           * @zh 向量点乘。
           * @param other 指定的向量。
           * @return 当前向量与指定向量点乘的结果。
           */

        }, {
          key: "dot",
          value: function dot(other) {
            return this.x * other.x + this.y * other.y;
          }
          /**
           * @zh 向量叉乘。
           * @param other 指定的向量。
           * @return `out`
           */

        }, {
          key: "cross",
          value: function cross(other) {
            return this.x * other.y - this.y * other.x;
          }
          /**
           * 计算向量的长度（模）。
           * @return 向量的长度（模）。
           */

        }, {
          key: "length",
          value: function length() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
          }
          /**
           * 计算向量长度（模）的平方。
           * @return 向量长度（模）的平方。
           */

        }, {
          key: "lengthSqr",
          value: function lengthSqr() {
            return this.x * this.x + this.y * this.y;
          }
          /**
           * @zh 将当前向量归一化。
           */

        }, {
          key: "normalize",
          value: function normalize() {
            var x = this.x;
            var y = this.y;
            var len = x * x + y * y;

            if (len > 0) {
              len = 1 / Math.sqrt(len);
              this.x = this.x * len;
              this.y = this.y * len;
            }

            return this;
          }
          /**
           * @zh 获取当前向量和指定向量之间的角度。
           * @param other 指定的向量。
           * @return 当前向量和指定向量之间的角度（弧度制）；若当前向量和指定向量中存在零向量，将返回 0。
           */

        }, {
          key: "angle",
          value: function angle(other) {
            var magSqr1 = this.lengthSqr();
            var magSqr2 = other.lengthSqr();

            if (magSqr1 === 0 || magSqr2 === 0) {
              console.warn('Can\'t get angle between zero vector');
              return 0.0;
            }

            var dot = this.dot(other);
            var theta = dot / Math.sqrt(magSqr1 * magSqr2);
            theta = clamp(theta, -1.0, 1.0);
            return Math.acos(theta);
          }
          /**
           * @zh 获取当前向量和指定向量之间的有符号角度。<br/>
           * 有符号角度的取值范围为 (-180, 180]，当前向量可以通过逆时针旋转有符号角度与指定向量同向。<br/>
           * @param other 指定的向量。
           * @return 当前向量和指定向量之间的有符号角度（弧度制）；若当前向量和指定向量中存在零向量，将返回 0。
           */

        }, {
          key: "signAngle",
          value: function signAngle(other) {
            var angle = this.angle(other);
            return this.cross(other) < 0 ? -angle : angle;
          }
          /**
           * @zh 将当前向量的旋转
           * @param radians 旋转角度（弧度制）。
           */

        }, {
          key: "rotate",
          value: function rotate(radians) {
            var x = this.x;
            var y = this.y;
            var sin = Math.sin(radians);
            var cos = Math.cos(radians);
            this.x = cos * x - sin * y;
            this.y = sin * x + cos * y;
            return this;
          }
          /**
           * @zh 计算当前向量在指定向量上的投影向量。
           * @param other 指定的向量。
           */

        }, {
          key: "project",
          value: function project(other) {
            var scalar = this.dot(other) / other.dot(other);
            this.x = other.x * scalar;
            this.y = other.y * scalar;
            return this;
          }
          /**
           * @zh 将当前向量视为 z 分量为 0、w 分量为 1 的四维向量，<br/>
           * 应用四维矩阵变换到当前矩阵<br/>
           * @param matrix 变换矩阵。
           */

        }, {
          key: "transformMat4",
          value: function transformMat4(matrix) {
            var x = this.x;
            var y = this.y;
            this.x = matrix.m00 * x + matrix.m04 * y + matrix.m12;
            this.y = matrix.m01 * x + matrix.m05 * y + matrix.m13;
            return this;
          }
        }]);

        return Vec2;
      }(ValueType));
      Vec2.ZERO = Object.freeze(new Vec2(0, 0));
      Vec2.ONE = Object.freeze(new Vec2(1, 1));
      Vec2.NEG_ONE = Object.freeze(new Vec2(-1, -1));
      Vec2.UNIT_X = Object.freeze(new Vec2(1, 0));
      Vec2.UNIT_Y = Object.freeze(new Vec2(0, 1));
      var v2_1 = new Vec2();
      var v2_2 = new Vec2();
      CCClass.fastDefine('cc.Vec2', Vec2, {
        x: 0,
        y: 0
      });
      legacyCC.Vec2 = Vec2;
      function v2(x, y) {
        return new Vec2(x, y);
      }
      legacyCC.v2 = v2;

      /**
       * 三维向量。
       */

      var Vec3 = exports('V', /*#__PURE__*/function (_ValueType) {
        _inherits(Vec3, _ValueType);

        _createClass(Vec3, null, [{
          key: "zero",
          // we use -z for view-dir

          /**
           * @zh 将目标赋值为零向量
           */
          value: function zero(out) {
            out.x = 0;
            out.y = 0;
            out.z = 0;
            return out;
          }
          /**
           * @zh 获得指定向量的拷贝
           */

        }, {
          key: "clone",
          value: function clone(a) {
            return new Vec3(a.x, a.y, a.z);
          }
          /**
           * @zh 复制目标向量
           */

        }, {
          key: "copy",
          value: function copy(out, a) {
            out.x = a.x;
            out.y = a.y;
            out.z = a.z;
            return out;
          }
          /**
           * @zh 设置向量值
           */

        }, {
          key: "set",
          value: function set(out, x, y, z) {
            out.x = x;
            out.y = y;
            out.z = z;
            return out;
          }
          /**
           * @zh 逐元素向量加法
           */

        }, {
          key: "add",
          value: function add(out, a, b) {
            out.x = a.x + b.x;
            out.y = a.y + b.y;
            out.z = a.z + b.z;
            return out;
          }
          /**
           * @zh 逐元素向量减法
           */

        }, {
          key: "subtract",
          value: function subtract(out, a, b) {
            out.x = a.x - b.x;
            out.y = a.y - b.y;
            out.z = a.z - b.z;
            return out;
          }
          /**
           * @zh 逐元素向量乘法 (分量积)
           */

        }, {
          key: "multiply",
          value: function multiply(out, a, b) {
            out.x = a.x * b.x;
            out.y = a.y * b.y;
            out.z = a.z * b.z;
            return out;
          }
          /**
           * @zh 逐元素向量除法
           */

        }, {
          key: "divide",
          value: function divide(out, a, b) {
            out.x = a.x / b.x;
            out.y = a.y / b.y;
            out.z = a.z / b.z;
            return out;
          }
          /**
           * @zh 逐元素向量向上取整
           */

        }, {
          key: "ceil",
          value: function ceil(out, a) {
            out.x = Math.ceil(a.x);
            out.y = Math.ceil(a.y);
            out.z = Math.ceil(a.z);
            return out;
          }
          /**
           * @zh 逐元素向量向下取整
           */

        }, {
          key: "floor",
          value: function floor(out, a) {
            out.x = Math.floor(a.x);
            out.y = Math.floor(a.y);
            out.z = Math.floor(a.z);
            return out;
          }
          /**
           * @zh 逐元素向量最小值
           */

        }, {
          key: "min",
          value: function min(out, a, b) {
            out.x = Math.min(a.x, b.x);
            out.y = Math.min(a.y, b.y);
            out.z = Math.min(a.z, b.z);
            return out;
          }
          /**
           * @zh 逐元素向量最大值
           */

        }, {
          key: "max",
          value: function max(out, a, b) {
            out.x = Math.max(a.x, b.x);
            out.y = Math.max(a.y, b.y);
            out.z = Math.max(a.z, b.z);
            return out;
          }
          /**
           * @zh 逐元素向量四舍五入取整
           */

        }, {
          key: "round",
          value: function round(out, a) {
            out.x = Math.round(a.x);
            out.y = Math.round(a.y);
            out.z = Math.round(a.z);
            return out;
          }
          /**
           * @zh 向量标量乘法
           */

        }, {
          key: "multiplyScalar",
          value: function multiplyScalar(out, a, b) {
            out.x = a.x * b;
            out.y = a.y * b;
            out.z = a.z * b;
            return out;
          }
          /**
           * @zh 逐元素向量乘加: A + B * scale
           */

        }, {
          key: "scaleAndAdd",
          value: function scaleAndAdd(out, a, b, scale) {
            out.x = a.x + b.x * scale;
            out.y = a.y + b.y * scale;
            out.z = a.z + b.z * scale;
            return out;
          }
          /**
           * @zh 求两向量的欧氏距离
           */

        }, {
          key: "distance",
          value: function distance(a, b) {
            var x = b.x - a.x;
            var y = b.y - a.y;
            var z = b.z - a.z;
            return Math.sqrt(x * x + y * y + z * z);
          }
          /**
           * @zh 求两向量的欧氏距离平方
           */

        }, {
          key: "squaredDistance",
          value: function squaredDistance(a, b) {
            var x = b.x - a.x;
            var y = b.y - a.y;
            var z = b.z - a.z;
            return x * x + y * y + z * z;
          }
          /**
           * @zh 求向量长度
           */

        }, {
          key: "len",
          value: function len(a) {
            var x = a.x;
            var y = a.y;
            var z = a.z;
            return Math.sqrt(x * x + y * y + z * z);
          }
          /**
           * @zh 求向量长度平方
           */

        }, {
          key: "lengthSqr",
          value: function lengthSqr(a) {
            var x = a.x;
            var y = a.y;
            var z = a.z;
            return x * x + y * y + z * z;
          }
          /**
           * @zh 逐元素向量取负
           */

        }, {
          key: "negate",
          value: function negate(out, a) {
            out.x = -a.x;
            out.y = -a.y;
            out.z = -a.z;
            return out;
          }
          /**
           * @zh 逐元素向量取倒数，接近 0 时返回 Infinity
           */

        }, {
          key: "invert",
          value: function invert(out, a) {
            out.x = 1.0 / a.x;
            out.y = 1.0 / a.y;
            out.z = 1.0 / a.z;
            return out;
          }
          /**
           * @zh 逐元素向量取倒数，接近 0 时返回 0
           */

        }, {
          key: "invertSafe",
          value: function invertSafe(out, a) {
            var x = a.x;
            var y = a.y;
            var z = a.z;

            if (Math.abs(x) < EPSILON) {
              out.x = 0;
            } else {
              out.x = 1.0 / x;
            }

            if (Math.abs(y) < EPSILON) {
              out.y = 0;
            } else {
              out.y = 1.0 / y;
            }

            if (Math.abs(z) < EPSILON) {
              out.z = 0;
            } else {
              out.z = 1.0 / z;
            }

            return out;
          }
          /**
           * @zh 归一化向量
           */

        }, {
          key: "normalize",
          value: function normalize(out, a) {
            var x = a.x;
            var y = a.y;
            var z = a.z;
            var len = x * x + y * y + z * z;

            if (len > 0) {
              len = 1 / Math.sqrt(len);
              out.x = x * len;
              out.y = y * len;
              out.z = z * len;
            }

            return out;
          }
          /**
           * @zh 向量点积（数量积）
           */

        }, {
          key: "dot",
          value: function dot(a, b) {
            return a.x * b.x + a.y * b.y + a.z * b.z;
          }
          /**
           * @zh 向量叉积（向量积）
           */

        }, {
          key: "cross",
          value: function cross(out, a, b) {
            var ax = a.x,
                ay = a.y,
                az = a.z;
            var bx = b.x,
                by = b.y,
                bz = b.z;
            out.x = ay * bz - az * by;
            out.y = az * bx - ax * bz;
            out.z = ax * by - ay * bx;
            return out;
          }
          /**
           * @zh 逐元素向量线性插值： A + t * (B - A)
           */

        }, {
          key: "lerp",
          value: function lerp(out, a, b, t) {
            out.x = a.x + t * (b.x - a.x);
            out.y = a.y + t * (b.y - a.y);
            out.z = a.z + t * (b.z - a.z);
            return out;
          }
          /**
           * @zh 生成一个在单位球体上均匀分布的随机向量
           * @param scale 生成的向量长度
           */

        }, {
          key: "random",
          value: function random$1(out, scale) {
            scale = scale || 1.0;
            var phi = random() * 2.0 * Math.PI;
            var cosTheta = random() * 2 - 1;
            var sinTheta = Math.sqrt(1 - cosTheta * cosTheta);
            out.x = sinTheta * Math.cos(phi) * scale;
            out.y = sinTheta * Math.sin(phi) * scale;
            out.z = cosTheta * scale;
            return out;
          }
          /**
           * @zh 向量与四维矩阵乘法，默认向量第四位为 1。
           */

        }, {
          key: "transformMat4",
          value: function transformMat4(out, a, m) {
            var x = a.x;
            var y = a.y;
            var z = a.z;
            var rhw = m.m03 * x + m.m07 * y + m.m11 * z + m.m15;
            rhw = rhw ? Math.abs(1 / rhw) : 1;
            out.x = (m.m00 * x + m.m04 * y + m.m08 * z + m.m12) * rhw;
            out.y = (m.m01 * x + m.m05 * y + m.m09 * z + m.m13) * rhw;
            out.z = (m.m02 * x + m.m06 * y + m.m10 * z + m.m14) * rhw;
            return out;
          }
          /**
           * @zh 向量与四维矩阵乘法，默认向量第四位为 0。
           */

        }, {
          key: "transformMat4Normal",
          value: function transformMat4Normal(out, a, m) {
            var x = a.x;
            var y = a.y;
            var z = a.z;
            var rhw = m.m03 * x + m.m07 * y + m.m11 * z;
            rhw = rhw ? Math.abs(1 / rhw) : 1;
            out.x = (m.m00 * x + m.m04 * y + m.m08 * z) * rhw;
            out.y = (m.m01 * x + m.m05 * y + m.m09 * z) * rhw;
            out.z = (m.m02 * x + m.m06 * y + m.m10 * z) * rhw;
            return out;
          }
          /**
           * @zh 向量与三维矩阵乘法
           */

        }, {
          key: "transformMat3",
          value: function transformMat3(out, a, m) {
            var x = a.x;
            var y = a.y;
            var z = a.z;
            out.x = x * m.m00 + y * m.m03 + z * m.m06;
            out.y = x * m.m01 + y * m.m04 + z * m.m07;
            out.z = x * m.m02 + y * m.m05 + z * m.m08;
            return out;
          }
          /**
           * @zh 向量仿射变换
           */

        }, {
          key: "transformAffine",
          value: function transformAffine(out, v, m) {
            var x = v.x;
            var y = v.y;
            var z = v.z;
            out.x = m.m00 * x + m.m04 * y + m.m08 * z + m.m12;
            out.y = m.m01 * x + m.m05 * y + m.m09 * z + m.m13;
            out.x = m.m02 * x + m.m06 * y + m.m10 * z + m.m14;
            return out;
          }
          /**
           * @zh 向量四元数乘法
           */

        }, {
          key: "transformQuat",
          value: function transformQuat(out, a, q) {
            // benchmarks: http://jsperf.com/quaternion-transform-Vec3-implementations
            // calculate quat * vec
            var ix = q.w * a.x + q.y * a.z - q.z * a.y;
            var iy = q.w * a.y + q.z * a.x - q.x * a.z;
            var iz = q.w * a.z + q.x * a.y - q.y * a.x;
            var iw = -q.x * a.x - q.y * a.y - q.z * a.z; // calculate result * inverse quat

            out.x = ix * q.w + iw * -q.x + iy * -q.z - iz * -q.y;
            out.y = iy * q.w + iw * -q.y + iz * -q.x - ix * -q.z;
            out.z = iz * q.w + iw * -q.z + ix * -q.y - iy * -q.x;
            return out;
          }
          /**
           * @zh 以缩放 -> 旋转 -> 平移顺序变换向量
           */

        }, {
          key: "transformRTS",
          value: function transformRTS(out, a, r, t, s) {
            var x = a.x * s.x;
            var y = a.y * s.y;
            var z = a.z * s.z;
            var ix = r.w * x + r.y * z - r.z * y;
            var iy = r.w * y + r.z * x - r.x * z;
            var iz = r.w * z + r.x * y - r.y * x;
            var iw = -r.x * x - r.y * y - r.z * z;
            out.x = ix * r.w + iw * -r.x + iy * -r.z - iz * -r.y + t.x;
            out.y = iy * r.w + iw * -r.y + iz * -r.x - ix * -r.z + t.y;
            out.z = iz * r.w + iw * -r.z + ix * -r.y - iy * -r.x + t.z;
            return out;
          }
          /**
           * @zh 以平移 -> 旋转 -> 缩放顺序逆变换向量
           */

        }, {
          key: "transformInverseRTS",
          value: function transformInverseRTS(out, a, r, t, s) {
            var x = a.x - t.x;
            var y = a.y - t.y;
            var z = a.z - t.z;
            var ix = r.w * x - r.y * z + r.z * y;
            var iy = r.w * y - r.z * x + r.x * z;
            var iz = r.w * z - r.x * y + r.y * x;
            var iw = r.x * x + r.y * y + r.z * z;
            out.x = (ix * r.w + iw * r.x + iy * r.z - iz * r.y) / s.x;
            out.y = (iy * r.w + iw * r.y + iz * r.x - ix * r.z) / s.y;
            out.z = (iz * r.w + iw * r.z + ix * r.y - iy * r.x) / s.z;
            return out;
          }
          /**
           * @zh 绕 X 轴旋转向量指定弧度
           * @param v 待旋转向量
           * @param o 旋转中心
           * @param a 旋转弧度
           */

        }, {
          key: "rotateX",
          value: function rotateX(out, v, o, a) {
            // Translate point to the origin
            var x = v.x - o.x;
            var y = v.y - o.y;
            var z = v.z - o.z; // perform rotation

            var cos = Math.cos(a);
            var sin = Math.sin(a);
            var rx = x;
            var ry = y * cos - z * sin;
            var rz = y * sin + z * cos; // translate to correct position

            out.x = rx + o.x;
            out.y = ry + o.y;
            out.z = rz + o.z;
            return out;
          }
          /**
           * @zh 绕 Y 轴旋转向量指定弧度
           * @param v 待旋转向量
           * @param o 旋转中心
           * @param a 旋转弧度
           */

        }, {
          key: "rotateY",
          value: function rotateY(out, v, o, a) {
            // Translate point to the origin
            var x = v.x - o.x;
            var y = v.y - o.y;
            var z = v.z - o.z; // perform rotation

            var cos = Math.cos(a);
            var sin = Math.sin(a);
            var rx = z * sin + x * cos;
            var ry = y;
            var rz = z * cos - x * sin; // translate to correct position

            out.x = rx + o.x;
            out.y = ry + o.y;
            out.z = rz + o.z;
            return out;
          }
          /**
           * @zh 绕 Z 轴旋转向量指定弧度
           * @param v 待旋转向量
           * @param o 旋转中心
           * @param a 旋转弧度
           */

        }, {
          key: "rotateZ",
          value: function rotateZ(out, v, o, a) {
            // Translate point to the origin
            var x = v.x - o.x;
            var y = v.y - o.y;
            var z = v.z - o.z; // perform rotation

            var cos = Math.cos(a);
            var sin = Math.sin(a);
            var rx = x * cos - y * sin;
            var ry = x * sin + y * cos;
            var rz = z; // translate to correct position

            out.x = rx + o.x;
            out.y = ry + o.y;
            out.z = rz + o.z;
            return out;
          }
          /**
           * @zh 向量转数组
           * @param ofs 数组起始偏移量
           */

        }, {
          key: "toArray",
          value: function toArray(out, v) {
            var ofs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            out[ofs + 0] = v.x;
            out[ofs + 1] = v.y;
            out[ofs + 2] = v.z;
            return out;
          }
          /**
           * @zh 数组转向量
           * @param ofs 数组起始偏移量
           */

        }, {
          key: "fromArray",
          value: function fromArray(out, arr) {
            var ofs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            out.x = arr[ofs + 0];
            out.y = arr[ofs + 1];
            out.z = arr[ofs + 2];
            return out;
          }
          /**
           * @zh 向量等价判断
           */

        }, {
          key: "strictEquals",
          value: function strictEquals(a, b) {
            return a.x === b.x && a.y === b.y && a.z === b.z;
          }
          /**
           * @zh 排除浮点数误差的向量近似等价判断
           */

        }, {
          key: "equals",
          value: function equals(a, b) {
            var epsilon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EPSILON;
            var a0 = a.x,
                a1 = a.y,
                a2 = a.z;
            var b0 = b.x,
                b1 = b.y,
                b2 = b.z;
            return Math.abs(a0 - b0) <= epsilon * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= epsilon * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= epsilon * Math.max(1.0, Math.abs(a2), Math.abs(b2));
          }
          /**
           * @zh 求两向量夹角弧度
           */

        }, {
          key: "angle",
          value: function angle(a, b) {
            Vec3.normalize(v3_1, a);
            Vec3.normalize(v3_2, b);
            var cosine = Vec3.dot(v3_1, v3_2);

            if (cosine > 1.0) {
              return 0;
            }

            if (cosine < -1.0) {
              return Math.PI;
            }

            return Math.acos(cosine);
          }
          /**
           * @zh 计算向量在指定平面上的投影
           * @param a 待投影向量
           * @param n 指定平面的法线
           */

        }, {
          key: "projectOnPlane",
          value: function projectOnPlane(out, a, n) {
            return Vec3.subtract(out, a, Vec3.project(out, a, n));
          }
          /**
           * @zh 计算向量在指定向量上的投影
           * @param a 待投影向量
           * @param n 目标向量
           */

        }, {
          key: "project",
          value: function project(out, a, b) {
            var sqrLen = Vec3.lengthSqr(b);

            if (sqrLen < 0.000001) {
              return Vec3.set(out, 0, 0, 0);
            } else {
              return Vec3.multiplyScalar(out, b, Vec3.dot(a, b) / sqrLen);
            }
          }
          /**
           * x 分量。
           */

        }]);

        function Vec3(x, y, z) {
          var _this;

          _classCallCheck(this, Vec3);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Vec3).call(this));

          if (x && _typeof(x) === 'object') {
            _this.x = x.x;
            _this.y = x.y;
            _this.z = x.z;
          } else {
            _this.x = x || 0;
            _this.y = y || 0;
            _this.z = z || 0;
          }

          return _this;
        }
        /**
         * @zh 克隆当前向量。
         */


        _createClass(Vec3, [{
          key: "clone",
          value: function clone() {
            return new Vec3(this.x, this.y, this.z);
          }
          /**
           * @zh 设置当前向量使其与指定向量相等。
           * @param other 相比较的向量。
           * @returns `this`
           */

        }, {
          key: "set",
          value: function set(x, y, z) {
            if (x && _typeof(x) === 'object') {
              this.x = x.x;
              this.y = x.y;
              this.z = x.z;
            } else {
              this.x = x || 0;
              this.y = y || 0;
              this.z = z || 0;
            }

            return this;
          }
          /**
           * @zh 判断当前向量是否在误差范围内与指定向量相等。
           * @param other 相比较的向量。
           * @param epsilon 允许的误差，应为非负数。
           * @returns 当两向量的各分量都在指定的误差范围内分别相等时，返回 `true`；否则返回 `false`。
           */

        }, {
          key: "equals",
          value: function equals(other) {
            var epsilon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSILON;
            return Math.abs(this.x - other.x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(other.x)) && Math.abs(this.y - other.y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(other.y)) && Math.abs(this.z - other.z) <= epsilon * Math.max(1.0, Math.abs(this.z), Math.abs(other.z));
          }
          /**
           * @zh 判断当前向量是否在误差范围内与指定分量的向量相等。
           * @param x 相比较的向量的 x 分量。
           * @param y 相比较的向量的 y 分量。
           * @param z 相比较的向量的 z 分量。
           * @param epsilon 允许的误差，应为非负数。
           * @returns 当两向量的各分量都在指定的误差范围内分别相等时，返回 `true`；否则返回 `false`。
           */

        }, {
          key: "equals3f",
          value: function equals3f(x, y, z) {
            var epsilon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : EPSILON;
            return Math.abs(this.x - x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(x)) && Math.abs(this.y - y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(y)) && Math.abs(this.z - z) <= epsilon * Math.max(1.0, Math.abs(this.z), Math.abs(z));
          }
          /**
           * @zh 判断当前向量是否与指定向量相等。
           * @param other 相比较的向量。
           * @returns 两向量的各分量都分别相等时返回 `true`；否则返回 `false`。
           */

        }, {
          key: "strictEquals",
          value: function strictEquals(other) {
            return this.x === other.x && this.y === other.y && this.z === other.z;
          }
          /**
           * @zh 判断当前向量是否与指定分量的向量相等。
           * @param x 指定向量的 x 分量。
           * @param y 指定向量的 y 分量。
           * @param z 指定向量的 z 分量。
           * @returns 两向量的各分量都分别相等时返回 `true`；否则返回 `false`。
           */

        }, {
          key: "strictEquals3f",
          value: function strictEquals3f(x, y, z) {
            return this.x === x && this.y === y && this.z === z;
          }
          /**
           * @zh 返回当前向量的字符串表示。
           * @returns 当前向量的字符串表示。
           */

        }, {
          key: "toString",
          value: function toString() {
            return "(".concat(this.x.toFixed(2), ", ").concat(this.y.toFixed(2), ", ").concat(this.z.toFixed(2), ")");
          }
          /**
           * @zh 根据指定的插值比率，从当前向量到目标向量之间做插值。
           * @param to 目标向量。
           * @param ratio 插值比率，范围为 [0,1]。
           */

        }, {
          key: "lerp",
          value: function lerp(to, ratio) {
            this.x = this.x + ratio * (to.x - this.x);
            this.y = this.y + ratio * (to.y - this.y);
            this.z = this.z + ratio * (to.z - this.z);
            return this;
          }
          /**
           * @zh 向量加法。将当前向量与指定向量的相加
           * @param other 指定的向量。
           */

        }, {
          key: "add",
          value: function add(other) {
            this.x = this.x + other.x;
            this.y = this.y + other.y;
            this.z = this.z + other.z;
            return this;
          }
          /**
           * @zh 向量加法。将当前向量与指定分量的向量相加
           * @param x 指定的向量的 x 分量。
           * @param y 指定的向量的 y 分量。
           * @param z 指定的向量的 z 分量。
           */

        }, {
          key: "add3f",
          value: function add3f(x, y, z) {
            this.x = this.x + x;
            this.y = this.y + y;
            this.z = this.z + z;
            return this;
          }
          /**
           * @zh 向量减法。将当前向量减去指定向量的结果。
           * @param other 减数向量。
           */

        }, {
          key: "subtract",
          value: function subtract(other) {
            this.x = this.x - other.x;
            this.y = this.y - other.y;
            this.z = this.z - other.z;
            return this;
          }
          /**
           * @zh 向量减法。将当前向量减去指定分量的向量
           * @param x 指定的向量的 x 分量。
           * @param y 指定的向量的 y 分量。
           * @param z 指定的向量的 z 分量。
           */

        }, {
          key: "subtract3f",
          value: function subtract3f(x, y, z) {
            this.x = this.x - x;
            this.y = this.y - y;
            this.z = this.z - z;
            return this;
          }
          /**
           * @zh 向量数乘。将当前向量数乘指定标量
           * @param scalar 标量乘数。
           */

        }, {
          key: "multiplyScalar",
          value: function multiplyScalar(scalar) {
            if (_typeof(scalar) === 'object') {
              console.warn('should use Vec3.multiply for vector * vector operation');
            }

            this.x = this.x * scalar;
            this.y = this.y * scalar;
            this.z = this.z * scalar;
            return this;
          }
          /**
           * @zh 向量乘法。将当前向量乘以与指定向量的结果赋值给当前向量。
           * @param other 指定的向量。
           */

        }, {
          key: "multiply",
          value: function multiply(other) {
            if (_typeof(other) !== 'object') {
              console.warn('should use Vec3.scale for vector * scalar operation');
            }

            this.x = this.x * other.x;
            this.y = this.y * other.y;
            this.z = this.z * other.z;
            return this;
          }
          /**
           * @zh 向量乘法。将当前向量与指定分量的向量相乘的结果赋值给当前向量。
           * @param x 指定的向量的 x 分量。
           * @param y 指定的向量的 y 分量。
           * @param z 指定的向量的 z 分量。
           */

        }, {
          key: "multiply3f",
          value: function multiply3f(x, y, z) {
            this.x = this.x * x;
            this.y = this.y * y;
            this.z = this.z * z;
            return this;
          }
          /**
           * @zh 向量逐元素相除。将当前向量与指定分量的向量相除的结果赋值给当前向量。
           * @param other 指定的向量
           */

        }, {
          key: "divide",
          value: function divide(other) {
            this.x = this.x / other.x;
            this.y = this.y / other.y;
            this.z = this.z / other.z;
            return this;
          }
          /**
           * @zh 向量逐元素相除。将当前向量与指定分量的向量相除的结果赋值给当前向量。
           * @param x 指定的向量的 x 分量。
           * @param y 指定的向量的 y 分量。
           * @param z 指定的向量的 z 分量。
           */

        }, {
          key: "divide3f",
          value: function divide3f(x, y, z) {
            this.x = this.x / x;
            this.y = this.y / y;
            this.z = this.z / z;
            return this;
          }
          /**
           * @zh 将当前向量的各个分量取反
           */

        }, {
          key: "negative",
          value: function negative() {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
            return this;
          }
          /**
           * @zh 设置当前向量的值，使其各个分量都处于指定的范围内。
           * @param minInclusive 每个分量都代表了对应分量允许的最小值。
           * @param maxInclusive 每个分量都代表了对应分量允许的最大值。
           * @returns `this`
           */

        }, {
          key: "clampf",
          value: function clampf(minInclusive, maxInclusive) {
            this.x = clamp(this.x, minInclusive.x, maxInclusive.x);
            this.y = clamp(this.y, minInclusive.y, maxInclusive.y);
            this.z = clamp(this.z, minInclusive.z, maxInclusive.z);
            return this;
          }
          /**
           * @zh 向量点乘。
           * @param other 指定的向量。
           * @returns 当前向量与指定向量点乘的结果。
           */

        }, {
          key: "dot",
          value: function dot(other) {
            return this.x * other.x + this.y * other.y + this.z * other.z;
          }
          /**
           * @zh 向量叉乘。将当前向量左叉乘指定向量
           * @param other 指定的向量。
           */

        }, {
          key: "cross",
          value: function cross(other) {
            var ax = this.x,
                ay = this.y,
                az = this.z;
            var bx = other.x,
                by = other.y,
                bz = other.z;
            this.x = ay * bz - az * by;
            this.y = az * bx - ax * bz;
            this.z = ax * by - ay * bx;
            return this;
          }
          /**
           * @zh 计算向量的长度（模）。
           * @returns 向量的长度（模）。
           */

        }, {
          key: "length",
          value: function length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
          }
          /**
           * @zh 计算向量长度（模）的平方。
           * @returns 向量长度（模）的平方。
           */

        }, {
          key: "lengthSqr",
          value: function lengthSqr() {
            return this.x * this.x + this.y * this.y + this.z * this.z;
          }
          /**
           * @zh 将当前向量归一化
           */

        }, {
          key: "normalize",
          value: function normalize() {
            var x = this.x;
            var y = this.y;
            var z = this.z;
            var len = x * x + y * y + z * z;

            if (len > 0) {
              len = 1 / Math.sqrt(len);
              this.x = x * len;
              this.y = y * len;
              this.z = z * len;
            }

            return this;
          }
          /**
           * @zh 将当前向量视为 w 分量为 1 的四维向量，应用四维矩阵变换到当前矩阵
           * @param matrix 变换矩阵。
           */

        }, {
          key: "transformMat4",
          value: function transformMat4(matrix) {
            var x = this.x;
            var y = this.y;
            var z = this.z;
            var rhw = matrix.m03 * x + matrix.m07 * y + matrix.m11 * z + matrix.m15;
            rhw = rhw ? 1 / rhw : 1;
            this.x = (matrix.m00 * x + matrix.m04 * y + matrix.m08 * z + matrix.m12) * rhw;
            this.y = (matrix.m01 * x + matrix.m05 * y + matrix.m09 * z + matrix.m13) * rhw;
            this.z = (matrix.m02 * x + matrix.m06 * y + matrix.m10 * z + matrix.m14) * rhw;
            return this;
          }
        }]);

        return Vec3;
      }(ValueType));
      Vec3.UNIT_X = Object.freeze(new Vec3(1, 0, 0));
      Vec3.UNIT_Y = Object.freeze(new Vec3(0, 1, 0));
      Vec3.UNIT_Z = Object.freeze(new Vec3(0, 0, 1));
      Vec3.RIGHT = Object.freeze(new Vec3(1, 0, 0));
      Vec3.UP = Object.freeze(new Vec3(0, 1, 0));
      Vec3.FORWARD = Object.freeze(new Vec3(0, 0, -1));
      Vec3.ZERO = Object.freeze(new Vec3(0, 0, 0));
      Vec3.ONE = Object.freeze(new Vec3(1, 1, 1));
      Vec3.NEG_ONE = Object.freeze(new Vec3(-1, -1, -1));
      var v3_1 = new Vec3();
      var v3_2 = new Vec3();
      CCClass.fastDefine('cc.Vec3', Vec3, {
        x: 0,
        y: 0,
        z: 0
      });
      legacyCC.Vec3 = Vec3;
      function v3(x, y, z) {
        return new Vec3(x, y, z);
      }
      legacyCC.v3 = v3;

      /**
       * 四维向量。
       */

      var Vec4 = exports('K', /*#__PURE__*/function (_ValueType) {
        _inherits(Vec4, _ValueType);

        _createClass(Vec4, null, [{
          key: "clone",

          /**
           * @zh 获得指定向量的拷贝
           */
          value: function clone(a) {
            return new Vec4(a.x, a.y, a.z, a.w);
          }
          /**
           * @zh 复制目标向量
           */

        }, {
          key: "copy",
          value: function copy(out, a) {
            out.x = a.x;
            out.y = a.y;
            out.z = a.z;
            out.w = a.w;
            return out;
          }
          /**
           * @zh 设置向量值
           */

        }, {
          key: "set",
          value: function set(out, x, y, z, w) {
            out.x = x;
            out.y = y;
            out.z = z;
            out.w = w;
            return out;
          }
          /**
           * @zh 逐元素向量加法
           */

        }, {
          key: "add",
          value: function add(out, a, b) {
            out.x = a.x + b.x;
            out.y = a.y + b.y;
            out.z = a.z + b.z;
            out.w = a.w + b.w;
            return out;
          }
          /**
           * @zh 逐元素向量减法
           */

        }, {
          key: "subtract",
          value: function subtract(out, a, b) {
            out.x = a.x - b.x;
            out.y = a.y - b.y;
            out.z = a.z - b.z;
            out.w = a.w - b.w;
            return out;
          }
          /**
           * @zh 逐元素向量乘法
           */

        }, {
          key: "multiply",
          value: function multiply(out, a, b) {
            out.x = a.x * b.x;
            out.y = a.y * b.y;
            out.z = a.z * b.z;
            out.w = a.w * b.w;
            return out;
          }
          /**
           * @zh 逐元素向量除法
           */

        }, {
          key: "divide",
          value: function divide(out, a, b) {
            out.x = a.x / b.x;
            out.y = a.y / b.y;
            out.z = a.z / b.z;
            out.w = a.w / b.w;
            return out;
          }
          /**
           * @zh 逐元素向量向上取整
           */

        }, {
          key: "ceil",
          value: function ceil(out, a) {
            out.x = Math.ceil(a.x);
            out.y = Math.ceil(a.y);
            out.z = Math.ceil(a.z);
            out.w = Math.ceil(a.w);
            return out;
          }
          /**
           * @zh 逐元素向量向下取整
           */

        }, {
          key: "floor",
          value: function floor(out, a) {
            out.x = Math.floor(a.x);
            out.y = Math.floor(a.y);
            out.z = Math.floor(a.z);
            out.w = Math.floor(a.w);
            return out;
          }
          /**
           * @zh 逐元素向量最小值
           */

        }, {
          key: "min",
          value: function min(out, a, b) {
            out.x = Math.min(a.x, b.x);
            out.y = Math.min(a.y, b.y);
            out.z = Math.min(a.z, b.z);
            out.w = Math.min(a.w, b.w);
            return out;
          }
          /**
           * @zh 逐元素向量最大值
           */

        }, {
          key: "max",
          value: function max(out, a, b) {
            out.x = Math.max(a.x, b.x);
            out.y = Math.max(a.y, b.y);
            out.z = Math.max(a.z, b.z);
            out.w = Math.max(a.w, b.w);
            return out;
          }
          /**
           * @zh 逐元素向量四舍五入取整
           */

        }, {
          key: "round",
          value: function round(out, a) {
            out.x = Math.round(a.x);
            out.y = Math.round(a.y);
            out.z = Math.round(a.z);
            out.w = Math.round(a.w);
            return out;
          }
          /**
           * @zh 向量标量乘法
           */

        }, {
          key: "multiplyScalar",
          value: function multiplyScalar(out, a, b) {
            out.x = a.x * b;
            out.y = a.y * b;
            out.z = a.z * b;
            out.w = a.w * b;
            return out;
          }
          /**
           * @zh 逐元素向量乘加: A + B * scale
           */

        }, {
          key: "scaleAndAdd",
          value: function scaleAndAdd(out, a, b, scale) {
            out.x = a.x + b.x * scale;
            out.y = a.y + b.y * scale;
            out.z = a.z + b.z * scale;
            out.w = a.w + b.w * scale;
            return out;
          }
          /**
           * @zh 求两向量的欧氏距离
           */

        }, {
          key: "distance",
          value: function distance(a, b) {
            var x = b.x - a.x;
            var y = b.y - a.y;
            var z = b.z - a.z;
            var w = b.w - a.w;
            return Math.sqrt(x * x + y * y + z * z + w * w);
          }
          /**
           * @zh 求两向量的欧氏距离平方
           */

        }, {
          key: "squaredDistance",
          value: function squaredDistance(a, b) {
            var x = b.x - a.x;
            var y = b.y - a.y;
            var z = b.z - a.z;
            var w = b.w - a.w;
            return x * x + y * y + z * z + w * w;
          }
          /**
           * @zh 求向量长度
           */

        }, {
          key: "len",
          value: function len(a) {
            var x = a.x;
            var y = a.y;
            var z = a.z;
            var w = a.w;
            return Math.sqrt(x * x + y * y + z * z + w * w);
          }
          /**
           * @zh 求向量长度平方
           */

        }, {
          key: "lengthSqr",
          value: function lengthSqr(a) {
            var x = a.x;
            var y = a.y;
            var z = a.z;
            var w = a.w;
            return x * x + y * y + z * z + w * w;
          }
          /**
           * @zh 逐元素向量取负
           */

        }, {
          key: "negate",
          value: function negate(out, a) {
            out.x = -a.x;
            out.y = -a.y;
            out.z = -a.z;
            out.w = -a.w;
            return out;
          }
          /**
           * @zh 逐元素向量取倒数，接近 0 时返回 Infinity
           */

        }, {
          key: "inverse",
          value: function inverse(out, a) {
            out.x = 1.0 / a.x;
            out.y = 1.0 / a.y;
            out.z = 1.0 / a.z;
            out.w = 1.0 / a.w;
            return out;
          }
          /**
           * @zh 逐元素向量取倒数，接近 0 时返回 0
           */

        }, {
          key: "inverseSafe",
          value: function inverseSafe(out, a) {
            var x = a.x;
            var y = a.y;
            var z = a.z;
            var w = a.w;

            if (Math.abs(x) < EPSILON) {
              out.x = 0;
            } else {
              out.x = 1.0 / x;
            }

            if (Math.abs(y) < EPSILON) {
              out.y = 0;
            } else {
              out.y = 1.0 / y;
            }

            if (Math.abs(z) < EPSILON) {
              out.z = 0;
            } else {
              out.z = 1.0 / z;
            }

            if (Math.abs(w) < EPSILON) {
              out.w = 0;
            } else {
              out.w = 1.0 / w;
            }

            return out;
          }
          /**
           * @zh 归一化向量
           */

        }, {
          key: "normalize",
          value: function normalize(out, a) {
            var x = a.x;
            var y = a.y;
            var z = a.z;
            var w = a.w;
            var len = x * x + y * y + z * z + w * w;

            if (len > 0) {
              len = 1 / Math.sqrt(len);
              out.x = x * len;
              out.y = y * len;
              out.z = z * len;
              out.w = w * len;
            }

            return out;
          }
          /**
           * @zh 向量点积（数量积）
           */

        }, {
          key: "dot",
          value: function dot(a, b) {
            return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
          }
          /**
           * @zh 逐元素向量线性插值： A + t * (B - A)
           */

        }, {
          key: "lerp",
          value: function lerp(out, a, b, t) {
            out.x = a.x + t * (b.x - a.x);
            out.y = a.y + t * (b.y - a.y);
            out.z = a.z + t * (b.z - a.z);
            out.w = a.w + t * (b.w - a.w);
            return out;
          }
          /**
           * @zh 生成一个在单位球体上均匀分布的随机向量
           * @param scale 生成的向量长度
           */

        }, {
          key: "random",
          value: function random$1(out, scale) {
            scale = scale || 1.0;
            var phi = random() * 2.0 * Math.PI;
            var cosTheta = random() * 2 - 1;
            var sinTheta = Math.sqrt(1 - cosTheta * cosTheta);
            out.x = sinTheta * Math.cos(phi) * scale;
            out.y = sinTheta * Math.sin(phi) * scale;
            out.z = cosTheta * scale;
            out.w = 0;
            return out;
          }
          /**
           * @zh 向量矩阵乘法
           */

        }, {
          key: "transformMat4",
          value: function transformMat4(out, a, m) {
            var x = a.x;
            var y = a.y;
            var z = a.z;
            var w = a.w;
            out.x = m.m00 * x + m.m04 * y + m.m08 * z + m.m12 * w;
            out.y = m.m01 * x + m.m05 * y + m.m09 * z + m.m13 * w;
            out.z = m.m02 * x + m.m06 * y + m.m10 * z + m.m14 * w;
            out.w = m.m03 * x + m.m07 * y + m.m11 * z + m.m15 * w;
            return out;
          }
          /**
           * @zh 向量仿射变换
           */

        }, {
          key: "transformAffine",
          value: function transformAffine(out, v, m) {
            var x = v.x;
            var y = v.y;
            var z = v.z;
            var w = v.w;
            out.x = m.m00 * x + m.m01 * y + m.m02 * z + m.m03 * w;
            out.y = m.m04 * x + m.m05 * y + m.m06 * z + m.m07 * w;
            out.x = m.m08 * x + m.m09 * y + m.m10 * z + m.m11 * w;
            out.w = v.w;
            return out;
          }
          /**
           * @zh 向量四元数乘法
           */

        }, {
          key: "transformQuat",
          value: function transformQuat(out, a, q) {
            var x = a.x,
                y = a.y,
                z = a.z;
            var _x = q.x;
            var _y = q.y;
            var _z = q.z;
            var _w = q.w; // calculate quat * vec

            var ix = _w * x + _y * z - _z * y;
            var iy = _w * y + _z * x - _x * z;
            var iz = _w * z + _x * y - _y * x;
            var iw = -_x * x - _y * y - _z * z; // calculate result * inverse quat

            out.x = ix * _w + iw * -_x + iy * -_z - iz * -_y;
            out.y = iy * _w + iw * -_y + iz * -_x - ix * -_z;
            out.z = iz * _w + iw * -_z + ix * -_y - iy * -_x;
            out.w = a.w;
            return out;
          }
          /**
           * @zh 向量转数组
           * @param ofs 数组起始偏移量
           */

        }, {
          key: "toArray",
          value: function toArray(out, v) {
            var ofs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            out[ofs + 0] = v.x;
            out[ofs + 1] = v.y;
            out[ofs + 2] = v.z;
            out[ofs + 3] = v.w;
            return out;
          }
          /**
           * @zh 数组转向量
           * @param ofs 数组起始偏移量
           */

        }, {
          key: "fromArray",
          value: function fromArray(out, arr) {
            var ofs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            out.x = arr[ofs + 0];
            out.y = arr[ofs + 1];
            out.z = arr[ofs + 2];
            out.w = arr[ofs + 3];
            return out;
          }
          /**
           * @zh 向量等价判断
           */

        }, {
          key: "strictEquals",
          value: function strictEquals(a, b) {
            return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
          }
          /**
           * @zh 排除浮点数误差的向量近似等价判断
           */

        }, {
          key: "equals",
          value: function equals(a, b) {
            var epsilon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EPSILON;
            return Math.abs(a.x - b.x) <= epsilon * Math.max(1.0, Math.abs(a.x), Math.abs(b.x)) && Math.abs(a.y - b.y) <= epsilon * Math.max(1.0, Math.abs(a.y), Math.abs(b.y)) && Math.abs(a.z - b.z) <= epsilon * Math.max(1.0, Math.abs(a.z), Math.abs(b.z)) && Math.abs(a.w - b.w) <= epsilon * Math.max(1.0, Math.abs(a.w), Math.abs(b.w));
          }
          /**
           * x 分量。
           */

        }]);

        function Vec4(x, y, z, w) {
          var _this;

          _classCallCheck(this, Vec4);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Vec4).call(this));

          if (x && _typeof(x) === 'object') {
            _this.x = x.x;
            _this.y = x.y;
            _this.z = x.z;
            _this.w = x.w;
          } else {
            _this.x = x || 0;
            _this.y = y || 0;
            _this.z = z || 0;
            _this.w = w || 0;
          }

          return _this;
        }
        /**
         * @zh 克隆当前向量。
         */


        _createClass(Vec4, [{
          key: "clone",
          value: function clone() {
            return new Vec4(this.x, this.y, this.z, this.w);
          }
          /**
           * @zh 设置当前向量使其与指定向量相等。
           * @param other 相比较的向量。
           * @returns `this`
           */

        }, {
          key: "set",
          value: function set(x, y, z, w) {
            if (x && _typeof(x) === 'object') {
              this.x = x.x;
              this.y = x.y;
              this.z = x.z;
              this.w = x.w;
            } else {
              this.x = x || 0;
              this.y = y || 0;
              this.z = z || 0;
              this.w = w || 0;
            }

            return this;
          }
          /**
           * @zh 判断当前向量是否在误差范围内与指定向量相等。
           * @param other 相比较的向量。
           * @param epsilon 允许的误差，应为非负数。
           * @returns 当两向量的各分量都在指定的误差范围内分别相等时，返回 `true`；否则返回 `false`。
           */

        }, {
          key: "equals",
          value: function equals(other) {
            var epsilon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSILON;
            return Math.abs(this.x - other.x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(other.x)) && Math.abs(this.y - other.y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(other.y)) && Math.abs(this.z - other.z) <= epsilon * Math.max(1.0, Math.abs(this.z), Math.abs(other.z)) && Math.abs(this.w - other.w) <= epsilon * Math.max(1.0, Math.abs(this.w), Math.abs(other.w));
          }
          /**
           * @zh 判断当前向量是否在误差范围内与指定分量的向量相等。
           * @param x 相比较的向量的 x 分量。
           * @param y 相比较的向量的 y 分量。
           * @param z 相比较的向量的 z 分量。
           * @param w 相比较的向量的 w 分量。
           * @param epsilon 允许的误差，应为非负数。
           * @returns 当两向量的各分量都在指定的误差范围内分别相等时，返回 `true`；否则返回 `false`。
           */

        }, {
          key: "equals4f",
          value: function equals4f(x, y, z, w) {
            var epsilon = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : EPSILON;
            return Math.abs(this.x - x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(x)) && Math.abs(this.y - y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(y)) && Math.abs(this.z - z) <= epsilon * Math.max(1.0, Math.abs(this.z), Math.abs(z)) && Math.abs(this.w - w) <= epsilon * Math.max(1.0, Math.abs(this.w), Math.abs(w));
          }
          /**
           * @zh 判断当前向量是否与指定向量相等。
           * @param other 相比较的向量。
           * @returns 两向量的各分量都分别相等时返回 `true`；否则返回 `false`。
           */

        }, {
          key: "strictEquals",
          value: function strictEquals(other) {
            return this.x === other.x && this.y === other.y && this.z === other.z && this.w === other.w;
          }
          /**
           * @zh 判断当前向量是否与指定分量的向量相等。
           * @param x 指定向量的 x 分量。
           * @param y 指定向量的 y 分量。
           * @param z 指定向量的 z 分量。
           * @param w 指定向量的 w 分量。
           * @returns 两向量的各分量都分别相等时返回 `true`；否则返回 `false`。
           */

        }, {
          key: "strictEquals4f",
          value: function strictEquals4f(x, y, z, w) {
            return this.x === x && this.y === y && this.z === z && this.w === w;
          }
          /**
           * @zh 根据指定的插值比率，从当前向量到目标向量之间做插值。
           * @param to 目标向量。
           * @param ratio 插值比率，范围为 [0,1]。
           */

        }, {
          key: "lerp",
          value: function lerp(to, ratio) {
            var x = this.x;
            var y = this.y;
            var z = this.z;
            var w = this.w;
            this.x = x + ratio * (to.x - x);
            this.y = y + ratio * (to.y - y);
            this.z = z + ratio * (to.z - z);
            this.w = w + ratio * (to.w - w);
            return this;
          }
          /**
           * @zh 返回当前向量的字符串表示。
           * @returns 当前向量的字符串表示。
           */

        }, {
          key: "toString",
          value: function toString() {
            return "(".concat(this.x.toFixed(2), ", ").concat(this.y.toFixed(2), ", ").concat(this.z.toFixed(2), ", ").concat(this.w.toFixed(2), ")");
          }
          /**
           * @zh 设置当前向量的值，使其各个分量都处于指定的范围内。
           * @param minInclusive 每个分量都代表了对应分量允许的最小值。
           * @param maxInclusive 每个分量都代表了对应分量允许的最大值。
           * @returns `this`
           */

        }, {
          key: "clampf",
          value: function clampf(minInclusive, maxInclusive) {
            this.x = clamp(this.x, minInclusive.x, maxInclusive.x);
            this.y = clamp(this.y, minInclusive.y, maxInclusive.y);
            this.z = clamp(this.z, minInclusive.z, maxInclusive.z);
            this.w = clamp(this.w, minInclusive.w, maxInclusive.w);
            return this;
          }
          /**
           * @zh 向量加法。将当前向量与指定向量的相加
           * @param other 指定的向量。
           */

        }, {
          key: "add",
          value: function add(other) {
            this.x = this.x + other.x;
            this.y = this.y + other.y;
            this.z = this.z + other.z;
            this.w = this.w + other.w;
            return this;
          }
          /**
           * @zh 向量加法。将当前向量与指定分量的向量相加
           * @param x 指定的向量的 x 分量。
           * @param y 指定的向量的 y 分量。
           * @param z 指定的向量的 z 分量。
           * @param w 指定的向量的 w 分量。
           */

        }, {
          key: "add4f",
          value: function add4f(x, y, z, w) {
            this.x = this.x + x;
            this.y = this.y + y;
            this.z = this.z + z;
            this.w = this.w + w;
            return this;
          }
          /**
           * @zh 向量减法。将当前向量减去指定向量
           * @param other 减数向量。
           */

        }, {
          key: "subtract",
          value: function subtract(other) {
            this.x = this.x - other.x;
            this.y = this.y - other.y;
            this.z = this.z - other.z;
            this.w = this.w - other.w;
            return this;
          }
          /**
           * @zh 向量减法。将当前向量减去指定分量的向量
           * @param x 指定的向量的 x 分量。
           * @param y 指定的向量的 y 分量。
           * @param z 指定的向量的 z 分量。
           * @param w 指定的向量的 w 分量。
           */

        }, {
          key: "subtract4f",
          value: function subtract4f(x, y, z, w) {
            this.x = this.x - x;
            this.y = this.y - y;
            this.z = this.z - z;
            this.w = this.w - w;
            return this;
          }
          /**
           * @zh 向量数乘。将当前向量数乘指定标量
           * @param scalar 标量乘数。
           */

        }, {
          key: "multiplyScalar",
          value: function multiplyScalar(scalar) {
            if (_typeof(scalar) === 'object') {
              console.warn('should use Vec4.multiply for vector * vector operation');
            }

            this.x = this.x * scalar;
            this.y = this.y * scalar;
            this.z = this.z * scalar;
            this.w = this.w * scalar;
            return this;
          }
          /**
           * @zh 向量乘法。将当前向量乘以指定向量
           * @param other 指定的向量。
           */

        }, {
          key: "multiply",
          value: function multiply(other) {
            if (_typeof(other) !== 'object') {
              console.warn('should use Vec4.scale for vector * scalar operation');
            }

            this.x = this.x * other.x;
            this.y = this.y * other.y;
            this.z = this.z * other.z;
            this.w = this.w * other.w;
            return this;
          }
          /**
           * @zh 向量乘法。将当前向量与指定分量的向量相乘的结果赋值给当前向量。
           * @param x 指定的向量的 x 分量。
           * @param y 指定的向量的 y 分量。
           * @param z 指定的向量的 z 分量。
           * @param w 指定的向量的 w 分量。
           */

        }, {
          key: "multiply4f",
          value: function multiply4f(x, y, z, w) {
            this.x = this.x * x;
            this.y = this.y * y;
            this.z = this.z * z;
            this.w = this.w * w;
            return this;
          }
          /**
           * @zh 向量逐元素相除。将当前向量与指定分量的向量相除的结果赋值给当前向量。
           * @param other 指定的向量
           */

        }, {
          key: "divide",
          value: function divide(other) {
            this.x = this.x / other.x;
            this.y = this.y / other.y;
            this.z = this.z / other.z;
            this.w = this.w / other.w;
            return this;
          }
          /**
           * @zh 向量逐元素相除。将当前向量与指定分量的向量相除的结果赋值给当前向量。
           * @param x 指定的向量的 x 分量。
           * @param y 指定的向量的 y 分量。
           * @param z 指定的向量的 z 分量。
           * @param w 指定的向量的 w 分量。
           */

        }, {
          key: "divide4f",
          value: function divide4f(x, y, z, w) {
            this.x = this.x / x;
            this.y = this.y / y;
            this.z = this.z / z;
            this.w = this.w / w;
            return this;
          }
          /**
           * @zh 将当前向量的各个分量取反
           */

        }, {
          key: "negative",
          value: function negative() {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
            this.w = -this.w;
            return this;
          }
          /**
           * @zh 向量点乘。
           * @param other 指定的向量。
           * @returns 当前向量与指定向量点乘的结果。
           */

        }, {
          key: "dot",
          value: function dot(vector) {
            return this.x * vector.x + this.y * vector.y + this.z * vector.z + this.w * vector.w;
          }
          /**
           * @zh 向量叉乘。视当前向量和指定向量为三维向量（舍弃 w 分量），将当前向量左叉乘指定向量
           * @param other 指定的向量。
           */

        }, {
          key: "cross",
          value: function cross(vector) {
            var ax = this.x,
                ay = this.y,
                az = this.z;
            var bx = vector.x,
                by = vector.y,
                bz = vector.z;
            this.x = ay * bz - az * by;
            this.y = az * bx - ax * bz;
            this.z = ax * by - ay * bx;
            return this;
          }
          /**
           * @zh 计算向量的长度（模）。
           * @returns 向量的长度（模）。
           */

        }, {
          key: "length",
          value: function length() {
            var x = this.x;
            var y = this.y;
            var z = this.z;
            var w = this.w;
            return Math.sqrt(x * x + y * y + z * z + w * w);
          }
          /**
           * @zh 计算向量长度（模）的平方。
           * @returns 向量长度（模）的平方。
           */

        }, {
          key: "lengthSqr",
          value: function lengthSqr() {
            var x = this.x;
            var y = this.y;
            var z = this.z;
            var w = this.w;
            return x * x + y * y + z * z + w * w;
          }
          /**
           * @zh 将当前向量归一化
           */

        }, {
          key: "normalize",
          value: function normalize() {
            var x = this.x;
            var y = this.y;
            var z = this.z;
            var w = this.w;
            var len = x * x + y * y + z * z + w * w;

            if (len > 0) {
              len = 1 / Math.sqrt(len);
              this.x = x * len;
              this.y = y * len;
              this.z = z * len;
              this.w = w * len;
            }

            return this;
          }
          /**
           * @zh 应用四维矩阵变换到当前矩阵
           * @param matrix 变换矩阵。
           */

        }, {
          key: "transformMat4",
          value: function transformMat4(matrix) {
            var x = this.x;
            var y = this.y;
            var z = this.z;
            var w = this.w;
            this.x = matrix.m00 * x + matrix.m04 * y + matrix.m08 * z + matrix.m12 * w;
            this.y = matrix.m01 * x + matrix.m05 * y + matrix.m09 * z + matrix.m13 * w;
            this.z = matrix.m02 * x + matrix.m06 * y + matrix.m10 * z + matrix.m14 * w;
            this.w = matrix.m03 * x + matrix.m07 * y + matrix.m11 * z + matrix.m15 * w;
            return this;
          }
        }]);

        return Vec4;
      }(ValueType));
      Vec4.ZERO = Object.freeze(new Vec4(0, 0, 0, 0));
      Vec4.ONE = Object.freeze(new Vec4(1, 1, 1, 1));
      Vec4.NEG_ONE = Object.freeze(new Vec4(-1, -1, -1, -1));
      CCClass.fastDefine('cc.Vec4', Vec4, {
        x: 0,
        y: 0,
        z: 0,
        w: 0
      });
      legacyCC.Vec4 = Vec4;
      function v4(x, y, z, w) {
        return new Vec4(x, y, z, w);
      }
      legacyCC.v4 = v4;

      /**
       * 表示三维（3x3）矩阵。
       */
      // tslint:disable:one-variable-per-declaration

      var Mat3 = exports('O', /*#__PURE__*/function (_ValueType) {
        _inherits(Mat3, _ValueType);

        _createClass(Mat3, null, [{
          key: "clone",

          /**
           * @zh 获得指定矩阵的拷贝
           */
          value: function clone(a) {
            return new Mat3(a.m00, a.m01, a.m02, a.m03, a.m04, a.m05, a.m06, a.m07, a.m08);
          }
          /**
           * @zh 复制目标矩阵
           */

        }, {
          key: "copy",
          value: function copy(out, a) {
            out.m00 = a.m00;
            out.m01 = a.m01;
            out.m02 = a.m02;
            out.m03 = a.m03;
            out.m04 = a.m04;
            out.m05 = a.m05;
            out.m06 = a.m06;
            out.m07 = a.m07;
            out.m08 = a.m08;
            return out;
          }
          /**
           * @zh 设置矩阵值
           */

        }, {
          key: "set",
          value: function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
            out.m00 = m00;
            out.m01 = m01;
            out.m02 = m02;
            out.m03 = m10;
            out.m04 = m11;
            out.m05 = m12;
            out.m06 = m20;
            out.m07 = m21;
            out.m08 = m22;
            return out;
          }
          /**
           * @zh 将目标赋值为单位矩阵
           */

        }, {
          key: "identity",
          value: function identity(out) {
            out.m00 = 1;
            out.m01 = 0;
            out.m02 = 0;
            out.m03 = 0;
            out.m04 = 1;
            out.m05 = 0;
            out.m06 = 0;
            out.m07 = 0;
            out.m08 = 1;
            return out;
          }
          /**
           * @zh 转置矩阵
           */

        }, {
          key: "transpose",
          value: function transpose(out, a) {
            // If we are transposing ourselves we can skip a few steps but have to cache some values
            if (out === a) {
              var a01 = a.m01;
              var a02 = a.m02;
              var a12 = a.m05;
              out.m01 = a.m03;
              out.m02 = a.m06;
              out.m03 = a01;
              out.m05 = a.m07;
              out.m06 = a02;
              out.m07 = a12;
            } else {
              out.m00 = a.m00;
              out.m01 = a.m03;
              out.m02 = a.m06;
              out.m03 = a.m01;
              out.m04 = a.m04;
              out.m05 = a.m07;
              out.m06 = a.m02;
              out.m07 = a.m05;
              out.m08 = a.m08;
            }

            return out;
          }
          /**
           * @zh 矩阵求逆，注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。
           */

        }, {
          key: "invert",
          value: function invert(out, a) {
            var a00 = a.m00;
            var a01 = a.m01;
            var a02 = a.m02;
            var a10 = a.m03;
            var a11 = a.m04;
            var a12 = a.m05;
            var a20 = a.m06;
            var a21 = a.m07;
            var a22 = a.m08;
            var b01 = a22 * a11 - a12 * a21;
            var b11 = -a22 * a10 + a12 * a20;
            var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

            var det = a00 * b01 + a01 * b11 + a02 * b21;

            if (det === 0) {
              out.m00 = 0;
              out.m01 = 0;
              out.m02 = 0;
              out.m03 = 0;
              out.m04 = 0;
              out.m05 = 0;
              out.m06 = 0;
              out.m07 = 0;
              out.m08 = 0;
              return out;
            }

            det = 1.0 / det;
            out.m00 = b01 * det;
            out.m01 = (-a22 * a01 + a02 * a21) * det;
            out.m02 = (a12 * a01 - a02 * a11) * det;
            out.m03 = b11 * det;
            out.m04 = (a22 * a00 - a02 * a20) * det;
            out.m05 = (-a12 * a00 + a02 * a10) * det;
            out.m06 = b21 * det;
            out.m07 = (-a21 * a00 + a01 * a20) * det;
            out.m08 = (a11 * a00 - a01 * a10) * det;
            return out;
          }
          /**
           * @zh 矩阵行列式
           */

        }, {
          key: "determinant",
          value: function determinant(a) {
            var a00 = a.m00;
            var a01 = a.m01;
            var a02 = a.m02;
            var a10 = a.m03;
            var a11 = a.m04;
            var a12 = a.m05;
            var a20 = a.m06;
            var a21 = a.m07;
            var a22 = a.m08;
            return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
          }
          /**
           * @zh 矩阵乘法
           */

        }, {
          key: "multiply",
          value: function multiply(out, a, b) {
            var a00 = a.m00;
            var a01 = a.m01;
            var a02 = a.m02;
            var a10 = a.m03;
            var a11 = a.m04;
            var a12 = a.m05;
            var a20 = a.m06;
            var a21 = a.m07;
            var a22 = a.m08;
            var b00 = b.m00,
                b01 = b.m01,
                b02 = b.m02;
            var b10 = b.m03,
                b11 = b.m04,
                b12 = b.m05;
            var b20 = b.m06,
                b21 = b.m07,
                b22 = b.m08;
            out.m00 = b00 * a00 + b01 * a10 + b02 * a20;
            out.m01 = b00 * a01 + b01 * a11 + b02 * a21;
            out.m02 = b00 * a02 + b01 * a12 + b02 * a22;
            out.m03 = b10 * a00 + b11 * a10 + b12 * a20;
            out.m04 = b10 * a01 + b11 * a11 + b12 * a21;
            out.m05 = b10 * a02 + b11 * a12 + b12 * a22;
            out.m06 = b20 * a00 + b21 * a10 + b22 * a20;
            out.m07 = b20 * a01 + b21 * a11 + b22 * a21;
            out.m08 = b20 * a02 + b21 * a12 + b22 * a22;
            return out;
          }
          /**
           * @zh 取四阶矩阵的前三阶，与三阶矩阵相乘
           */

        }, {
          key: "multiplyMat4",
          value: function multiplyMat4(out, a, b) {
            var a00 = a.m00;
            var a01 = a.m01;
            var a02 = a.m02;
            var a10 = a.m03;
            var a11 = a.m04;
            var a12 = a.m05;
            var a20 = a.m06;
            var a21 = a.m07;
            var a22 = a.m08;
            var b00 = b.m00,
                b01 = b.m01,
                b02 = b.m02;
            var b10 = b.m04,
                b11 = b.m05,
                b12 = b.m06;
            var b20 = b.m08,
                b21 = b.m09,
                b22 = b.m10;
            out.m00 = b00 * a00 + b01 * a10 + b02 * a20;
            out.m01 = b00 * a01 + b01 * a11 + b02 * a21;
            out.m02 = b00 * a02 + b01 * a12 + b02 * a22;
            out.m03 = b10 * a00 + b11 * a10 + b12 * a20;
            out.m04 = b10 * a01 + b11 * a11 + b12 * a21;
            out.m05 = b10 * a02 + b11 * a12 + b12 * a22;
            out.m06 = b20 * a00 + b21 * a10 + b22 * a20;
            out.m07 = b20 * a01 + b21 * a11 + b22 * a21;
            out.m08 = b20 * a02 + b21 * a12 + b22 * a22;
            return out;
          }
          /**
           * @zh 在给定矩阵变换基础上加入变换
           * @deprecated 将在 1.2 移除，请转用 `Mat3.transform` 方法。
           */

        }, {
          key: "transfrom",
          value: function transfrom(out, a, v) {
            Mat3.transform(out, a, v);
          }
          /**
           * @zh 在给定矩阵变换基础上加入变换
           */

        }, {
          key: "transform",
          value: function transform(out, a, v) {
            var a00 = a.m00;
            var a01 = a.m01;
            var a02 = a.m02;
            var a10 = a.m03;
            var a11 = a.m04;
            var a12 = a.m05;
            var a20 = a.m06;
            var a21 = a.m07;
            var a22 = a.m08;
            var x = v.x,
                y = v.y;
            out.m00 = a00;
            out.m01 = a01;
            out.m02 = a02;
            out.m03 = a10;
            out.m04 = a11;
            out.m05 = a12;
            out.m06 = x * a00 + y * a10 + a20;
            out.m07 = x * a01 + y * a11 + a21;
            out.m08 = x * a02 + y * a12 + a22;
            return out;
          }
          /**
           * @zh 在给定矩阵变换基础上加入新缩放变换
           */

        }, {
          key: "scale",
          value: function scale(out, a, v) {
            var x = v.x,
                y = v.y;
            out.m00 = x * a.m00;
            out.m01 = x * a.m01;
            out.m02 = x * a.m02;
            out.m03 = y * a.m03;
            out.m04 = y * a.m04;
            out.m05 = y * a.m05;
            out.m06 = a.m06;
            out.m07 = a.m07;
            out.m08 = a.m08;
            return out;
          }
          /**
           * @zh 在给定矩阵变换基础上加入新旋转变换
           * @param rad 旋转弧度
           */

        }, {
          key: "rotate",
          value: function rotate(out, a, rad) {
            var a00 = a.m00;
            var a01 = a.m01;
            var a02 = a.m02;
            var a10 = a.m03;
            var a11 = a.m04;
            var a12 = a.m05;
            var a20 = a.m06;
            var a21 = a.m07;
            var a22 = a.m08;
            var s = Math.sin(rad);
            var c = Math.cos(rad);
            out.m00 = c * a00 + s * a10;
            out.m01 = c * a01 + s * a11;
            out.m02 = c * a02 + s * a12;
            out.m03 = c * a10 - s * a00;
            out.m04 = c * a11 - s * a01;
            out.m05 = c * a12 - s * a02;
            out.m06 = a20;
            out.m07 = a21;
            out.m08 = a22;
            return out;
          }
          /**
           * @zh 取四阶矩阵的前三阶
           */

        }, {
          key: "fromMat4",
          value: function fromMat4(out, a) {
            out.m00 = a.m00;
            out.m01 = a.m01;
            out.m02 = a.m02;
            out.m03 = a.m04;
            out.m04 = a.m05;
            out.m05 = a.m06;
            out.m06 = a.m08;
            out.m07 = a.m09;
            out.m08 = a.m10;
            return out;
          }
          /**
           * @zh 根据视口前方向和上方向计算矩阵
           * @param view 视口面向的前方向，必须归一化
           * @param up 视口的上方向，必须归一化，默认为 (0, 1, 0)
           */

        }, {
          key: "fromViewUp",
          value: function fromViewUp(out, view, up) {
            if (Vec3.lengthSqr(view) < EPSILON * EPSILON) {
              Mat3.identity(out);
              return out;
            }

            up = up || Vec3.UNIT_Y;
            Vec3.normalize(v3_1$1, Vec3.cross(v3_1$1, up, view));

            if (Vec3.lengthSqr(v3_1$1) < EPSILON * EPSILON) {
              Mat3.identity(out);
              return out;
            }

            Vec3.cross(v3_2$1, view, v3_1$1);
            Mat3.set(out, v3_1$1.x, v3_1$1.y, v3_1$1.z, v3_2$1.x, v3_2$1.y, v3_2$1.z, view.x, view.y, view.z);
            return out;
          }
          /**
           * @zh 计算位移矩阵
           */

        }, {
          key: "fromTranslation",
          value: function fromTranslation(out, v) {
            out.m00 = 1;
            out.m01 = 0;
            out.m02 = 0;
            out.m03 = 0;
            out.m04 = 1;
            out.m05 = 0;
            out.m06 = v.x;
            out.m07 = v.y;
            out.m08 = 1;
            return out;
          }
          /**
           * @zh 计算缩放矩阵
           */

        }, {
          key: "fromScaling",
          value: function fromScaling(out, v) {
            out.m00 = v.x;
            out.m01 = 0;
            out.m02 = 0;
            out.m03 = 0;
            out.m04 = v.y;
            out.m05 = 0;
            out.m06 = 0;
            out.m07 = 0;
            out.m08 = 1;
            return out;
          }
          /**
           * @zh 计算旋转矩阵
           */

        }, {
          key: "fromRotation",
          value: function fromRotation(out, rad) {
            var s = Math.sin(rad),
                c = Math.cos(rad);
            out.m00 = c;
            out.m01 = s;
            out.m02 = 0;
            out.m03 = -s;
            out.m04 = c;
            out.m05 = 0;
            out.m06 = 0;
            out.m07 = 0;
            out.m08 = 1;
            return out;
          }
          /**
           * @zh 根据四元数旋转信息计算矩阵
           */

        }, {
          key: "fromQuat",
          value: function fromQuat(out, q) {
            var x = q.x,
                y = q.y,
                z = q.z,
                w = q.w;
            var x2 = x + x;
            var y2 = y + y;
            var z2 = z + z;
            var xx = x * x2;
            var yx = y * x2;
            var yy = y * y2;
            var zx = z * x2;
            var zy = z * y2;
            var zz = z * z2;
            var wx = w * x2;
            var wy = w * y2;
            var wz = w * z2;
            out.m00 = 1 - yy - zz;
            out.m03 = yx - wz;
            out.m06 = zx + wy;
            out.m01 = yx + wz;
            out.m04 = 1 - xx - zz;
            out.m07 = zy - wx;
            out.m02 = zx - wy;
            out.m05 = zy + wx;
            out.m08 = 1 - xx - yy;
            return out;
          }
          /**
           * @zh 计算指定四维矩阵的逆转置三维矩阵
           */

        }, {
          key: "inverseTransposeMat4",
          value: function inverseTransposeMat4(out, a) {
            var a00 = a.m00,
                a01 = a.m01,
                a02 = a.m02,
                a03 = a.m03,
                a10 = a.m04,
                a11 = a.m05,
                a12 = a.m06,
                a13 = a.m07,
                a20 = a.m08,
                a21 = a.m09,
                a22 = a.m10,
                a23 = a.m11,
                a30 = a.m12,
                a31 = a.m13,
                a32 = a.m14,
                a33 = a.m15;
            var b00 = a00 * a11 - a01 * a10;
            var b01 = a00 * a12 - a02 * a10;
            var b02 = a00 * a13 - a03 * a10;
            var b03 = a01 * a12 - a02 * a11;
            var b04 = a01 * a13 - a03 * a11;
            var b05 = a02 * a13 - a03 * a12;
            var b06 = a20 * a31 - a21 * a30;
            var b07 = a20 * a32 - a22 * a30;
            var b08 = a20 * a33 - a23 * a30;
            var b09 = a21 * a32 - a22 * a31;
            var b10 = a21 * a33 - a23 * a31;
            var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

            var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

            if (!det) {
              return null;
            }

            det = 1.0 / det;
            out.m00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
            out.m01 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
            out.m02 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
            out.m03 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
            out.m04 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
            out.m05 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
            out.m06 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
            out.m07 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
            out.m08 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
            return out;
          }
          /**
           * @zh 矩阵转数组
           * @param ofs 数组内的起始偏移量
           */

        }, {
          key: "toArray",
          value: function toArray(out, m) {
            var ofs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            out[ofs + 0] = m.m00;
            out[ofs + 1] = m.m01;
            out[ofs + 2] = m.m02;
            out[ofs + 3] = m.m03;
            out[ofs + 4] = m.m04;
            out[ofs + 5] = m.m05;
            out[ofs + 6] = m.m06;
            out[ofs + 7] = m.m07;
            out[ofs + 8] = m.m08;
            return out;
          }
          /**
           * @zh 数组转矩阵
           * @param ofs 数组起始偏移量
           */

        }, {
          key: "fromArray",
          value: function fromArray(out, arr) {
            var ofs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            out.m00 = arr[ofs + 0];
            out.m01 = arr[ofs + 1];
            out.m02 = arr[ofs + 2];
            out.m03 = arr[ofs + 3];
            out.m04 = arr[ofs + 4];
            out.m05 = arr[ofs + 5];
            out.m06 = arr[ofs + 6];
            out.m07 = arr[ofs + 7];
            out.m08 = arr[ofs + 8];
            return out;
          }
          /**
           * @zh 逐元素矩阵加法
           */

        }, {
          key: "add",
          value: function add(out, a, b) {
            out.m00 = a.m00 + b.m00;
            out.m01 = a.m01 + b.m01;
            out.m02 = a.m02 + b.m02;
            out.m03 = a.m03 + b.m03;
            out.m04 = a.m04 + b.m04;
            out.m05 = a.m05 + b.m05;
            out.m06 = a.m06 + b.m06;
            out.m07 = a.m07 + b.m07;
            out.m08 = a.m08 + b.m08;
            return out;
          }
          /**
           * @zh 逐元素矩阵减法
           */

        }, {
          key: "subtract",
          value: function subtract(out, a, b) {
            out.m00 = a.m00 - b.m00;
            out.m01 = a.m01 - b.m01;
            out.m02 = a.m02 - b.m02;
            out.m03 = a.m03 - b.m03;
            out.m04 = a.m04 - b.m04;
            out.m05 = a.m05 - b.m05;
            out.m06 = a.m06 - b.m06;
            out.m07 = a.m07 - b.m07;
            out.m08 = a.m08 - b.m08;
            return out;
          }
          /**
           * @zh 矩阵标量乘法
           */

        }, {
          key: "multiplyScalar",
          value: function multiplyScalar(out, a, b) {
            out.m00 = a.m00 * b;
            out.m01 = a.m01 * b;
            out.m02 = a.m02 * b;
            out.m03 = a.m03 * b;
            out.m04 = a.m04 * b;
            out.m05 = a.m05 * b;
            out.m06 = a.m06 * b;
            out.m07 = a.m07 * b;
            out.m08 = a.m08 * b;
            return out;
          }
          /**
           * @zh 逐元素矩阵标量乘加: A + B * scale
           */

        }, {
          key: "multiplyScalarAndAdd",
          value: function multiplyScalarAndAdd(out, a, b, scale) {
            out.m00 = b.m00 * scale + a.m00;
            out.m01 = b.m01 * scale + a.m01;
            out.m02 = b.m02 * scale + a.m02;
            out.m03 = b.m03 * scale + a.m03;
            out.m04 = b.m04 * scale + a.m04;
            out.m05 = b.m05 * scale + a.m05;
            out.m06 = b.m06 * scale + a.m06;
            out.m07 = b.m07 * scale + a.m07;
            out.m08 = b.m08 * scale + a.m08;
            return out;
          }
          /**
           * @zh 矩阵等价判断
           */

        }, {
          key: "strictEquals",
          value: function strictEquals(a, b) {
            return a.m00 === b.m00 && a.m01 === b.m01 && a.m02 === b.m02 && a.m03 === b.m03 && a.m04 === b.m04 && a.m05 === b.m05 && a.m06 === b.m06 && a.m07 === b.m07 && a.m08 === b.m08;
          }
          /**
           * @zh 排除浮点数误差的矩阵近似等价判断
           */

        }, {
          key: "equals",
          value: function equals(a, b) {
            var epsilon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EPSILON;
            return Math.abs(a.m00 - b.m00) <= epsilon * Math.max(1.0, Math.abs(a.m00), Math.abs(b.m00)) && Math.abs(a.m01 - b.m01) <= epsilon * Math.max(1.0, Math.abs(a.m01), Math.abs(b.m01)) && Math.abs(a.m02 - b.m02) <= epsilon * Math.max(1.0, Math.abs(a.m02), Math.abs(b.m02)) && Math.abs(a.m03 - b.m03) <= epsilon * Math.max(1.0, Math.abs(a.m03), Math.abs(b.m03)) && Math.abs(a.m04 - b.m04) <= epsilon * Math.max(1.0, Math.abs(a.m04), Math.abs(b.m04)) && Math.abs(a.m05 - b.m05) <= epsilon * Math.max(1.0, Math.abs(a.m05), Math.abs(b.m05)) && Math.abs(a.m06 - b.m06) <= epsilon * Math.max(1.0, Math.abs(a.m06), Math.abs(b.m06)) && Math.abs(a.m07 - b.m07) <= epsilon * Math.max(1.0, Math.abs(a.m07), Math.abs(b.m07)) && Math.abs(a.m08 - b.m08) <= epsilon * Math.max(1.0, Math.abs(a.m08), Math.abs(b.m08));
          }
          /**
           * 矩阵第 0 列第 0 行的元素。
           */

        }]);

        function Mat3() {
          var _this;

          var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var m01 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var m02 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var m03 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var m04 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
          var m05 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
          var m06 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
          var m07 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
          var m08 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;

          _classCallCheck(this, Mat3);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Mat3).call(this));

          if (_typeof(m00) === 'object') {
            _this.m00 = m00.m00;
            _this.m01 = m00.m01;
            _this.m02 = m00.m02;
            _this.m03 = m00.m03;
            _this.m04 = m00.m04;
            _this.m05 = m00.m05;
            _this.m06 = m00.m06;
            _this.m07 = m00.m07;
            _this.m08 = m00.m08;
          } else {
            _this.m00 = m00;
            _this.m01 = m01;
            _this.m02 = m02;
            _this.m03 = m03;
            _this.m04 = m04;
            _this.m05 = m05;
            _this.m06 = m06;
            _this.m07 = m07;
            _this.m08 = m08;
          }

          return _this;
        }
        /**
         * @zh 克隆当前矩阵。
         */


        _createClass(Mat3, [{
          key: "clone",
          value: function clone() {
            var t = this;
            return new Mat3(t.m00, t.m01, t.m02, t.m03, t.m04, t.m05, t.m06, t.m07, t.m08);
          }
          /**
           * @zh 设置当前矩阵使其与指定矩阵相等。
           * @param other 相比较的矩阵。
           * @return this
           */

        }, {
          key: "set",
          value: function set() {
            var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var m01 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var m02 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var m03 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var m04 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
            var m05 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
            var m06 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
            var m07 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
            var m08 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;

            if (_typeof(m00) === 'object') {
              this.m00 = m00.m00;
              this.m01 = m00.m01;
              this.m02 = m00.m02;
              this.m03 = m00.m03;
              this.m04 = m00.m04;
              this.m05 = m00.m05;
              this.m06 = m00.m06;
              this.m07 = m00.m07;
              this.m08 = m00.m08;
            } else {
              this.m00 = m00;
              this.m01 = m01;
              this.m02 = m02;
              this.m03 = m03;
              this.m04 = m04;
              this.m05 = m05;
              this.m06 = m06;
              this.m07 = m07;
              this.m08 = m08;
            }

            return this;
          }
          /**
           * @zh 判断当前矩阵是否在误差范围内与指定矩阵相等。
           * @param other 相比较的矩阵。
           * @param epsilon 允许的误差，应为非负数。
           * @return 两矩阵的各元素都分别相等时返回 `true`；否则返回 `false`。
           */

        }, {
          key: "equals",
          value: function equals(other) {
            var epsilon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSILON;
            return Math.abs(this.m00 - other.m00) <= epsilon * Math.max(1.0, Math.abs(this.m00), Math.abs(other.m00)) && Math.abs(this.m01 - other.m01) <= epsilon * Math.max(1.0, Math.abs(this.m01), Math.abs(other.m01)) && Math.abs(this.m02 - other.m02) <= epsilon * Math.max(1.0, Math.abs(this.m02), Math.abs(other.m02)) && Math.abs(this.m03 - other.m03) <= epsilon * Math.max(1.0, Math.abs(this.m03), Math.abs(other.m03)) && Math.abs(this.m04 - other.m04) <= epsilon * Math.max(1.0, Math.abs(this.m04), Math.abs(other.m04)) && Math.abs(this.m05 - other.m05) <= epsilon * Math.max(1.0, Math.abs(this.m05), Math.abs(other.m05)) && Math.abs(this.m06 - other.m06) <= epsilon * Math.max(1.0, Math.abs(this.m06), Math.abs(other.m06)) && Math.abs(this.m07 - other.m07) <= epsilon * Math.max(1.0, Math.abs(this.m07), Math.abs(other.m07)) && Math.abs(this.m08 - other.m08) <= epsilon * Math.max(1.0, Math.abs(this.m08), Math.abs(other.m08));
          }
          /**
           * @zh 判断当前矩阵是否与指定矩阵相等。
           * @param other 相比较的矩阵。
           * @return 两矩阵的各元素都分别相等时返回 `true`；否则返回 `false`。
           */

        }, {
          key: "strictEquals",
          value: function strictEquals(other) {
            return this.m00 === other.m00 && this.m01 === other.m01 && this.m02 === other.m02 && this.m03 === other.m03 && this.m04 === other.m04 && this.m05 === other.m05 && this.m06 === other.m06 && this.m07 === other.m07 && this.m08 === other.m08;
          }
          /**
           * 返回当前矩阵的字符串表示。
           * @return 当前矩阵的字符串表示。
           */

        }, {
          key: "toString",
          value: function toString() {
            var t = this;
            return '[\n' + t.m00 + ', ' + t.m01 + ', ' + t.m02 + ',\n' + t.m03 + ',\n' + t.m04 + ', ' + t.m05 + ',\n' + t.m06 + ', ' + t.m07 + ',\n' + t.m08 + '\n' + ']';
          }
          /**
           * 将当前矩阵设为单位矩阵。
           * @return `this`
           */

        }, {
          key: "identity",
          value: function identity() {
            this.m00 = 1;
            this.m01 = 0;
            this.m02 = 0;
            this.m03 = 0;
            this.m04 = 1;
            this.m05 = 0;
            this.m06 = 0;
            this.m07 = 0;
            this.m08 = 1;
            return this;
          }
          /**
           * @zh 计算当前矩阵的转置矩阵。
           */

        }, {
          key: "transpose",
          value: function transpose() {
            var a01 = this.m01,
                a02 = this.m02,
                a12 = this.m05;
            this.m01 = this.m03;
            this.m02 = this.m06;
            this.m03 = a01;
            this.m05 = this.m07;
            this.m06 = a02;
            this.m07 = a12;
            return this;
          }
          /**
           * @zh 计算当前矩阵的逆矩阵。注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。
           */

        }, {
          key: "invert",
          value: function invert() {
            var a00 = this.m00;
            var a01 = this.m01;
            var a02 = this.m02;
            var a10 = this.m03;
            var a11 = this.m04;
            var a12 = this.m05;
            var a20 = this.m06;
            var a21 = this.m07;
            var a22 = this.m08;
            var b01 = a22 * a11 - a12 * a21;
            var b11 = -a22 * a10 + a12 * a20;
            var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

            var det = a00 * b01 + a01 * b11 + a02 * b21;

            if (det === 0) {
              this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
              return this;
            }

            det = 1.0 / det;
            this.m00 = b01 * det;
            this.m01 = (-a22 * a01 + a02 * a21) * det;
            this.m02 = (a12 * a01 - a02 * a11) * det;
            this.m03 = b11 * det;
            this.m04 = (a22 * a00 - a02 * a20) * det;
            this.m05 = (-a12 * a00 + a02 * a10) * det;
            this.m06 = b21 * det;
            this.m07 = (-a21 * a00 + a01 * a20) * det;
            this.m08 = (a11 * a00 - a01 * a10) * det;
            return this;
          }
          /**
           * 计算当前矩阵的行列式。
           * @return 当前矩阵的行列式。
           */

        }, {
          key: "determinant",
          value: function determinant() {
            var a00 = this.m00;
            var a01 = this.m01;
            var a02 = this.m02;
            var a10 = this.m03;
            var a11 = this.m04;
            var a12 = this.m05;
            var a20 = this.m06;
            var a21 = this.m07;
            var a22 = this.m08;
            return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
          }
          /**
           * @zh 矩阵加法。将当前矩阵与指定矩阵的相加，结果返回给当前矩阵。
           * @param mat 相加的矩阵
           */

        }, {
          key: "add",
          value: function add(mat) {
            this.m00 = this.m00 + mat.m00;
            this.m01 = this.m01 + mat.m01;
            this.m02 = this.m02 + mat.m02;
            this.m03 = this.m03 + mat.m03;
            this.m04 = this.m04 + mat.m04;
            this.m05 = this.m05 + mat.m05;
            this.m06 = this.m06 + mat.m06;
            this.m07 = this.m07 + mat.m07;
            this.m08 = this.m08 + mat.m08;
            return this;
          }
          /**
           * @zh 计算矩阵减法。将当前矩阵减去指定矩阵的结果赋值给当前矩阵。
           * @param mat 减数矩阵。
           */

        }, {
          key: "subtract",
          value: function subtract(mat) {
            this.m00 = this.m00 - mat.m00;
            this.m01 = this.m01 - mat.m01;
            this.m02 = this.m02 - mat.m02;
            this.m03 = this.m03 - mat.m03;
            this.m04 = this.m04 - mat.m04;
            this.m05 = this.m05 - mat.m05;
            this.m06 = this.m06 - mat.m06;
            this.m07 = this.m07 - mat.m07;
            this.m08 = this.m08 - mat.m08;
            return this;
          }
          /**
           * @zh 矩阵乘法。将当前矩阵左乘指定矩阵的结果赋值给当前矩阵。
           * @param mat 指定的矩阵。
           */

        }, {
          key: "multiply",
          value: function multiply(mat) {
            var a00 = this.m00,
                a01 = this.m01,
                a02 = this.m02,
                a10 = this.m03,
                a11 = this.m04,
                a12 = this.m05,
                a20 = this.m06,
                a21 = this.m07,
                a22 = this.m08;
            var b00 = mat.m00,
                b01 = mat.m01,
                b02 = mat.m02;
            var b10 = mat.m03,
                b11 = mat.m04,
                b12 = mat.m05;
            var b20 = mat.m06,
                b21 = mat.m07,
                b22 = mat.m08;
            this.m00 = b00 * a00 + b01 * a10 + b02 * a20;
            this.m01 = b00 * a01 + b01 * a11 + b02 * a21;
            this.m02 = b00 * a02 + b01 * a12 + b02 * a22;
            this.m03 = b10 * a00 + b11 * a10 + b12 * a20;
            this.m04 = b10 * a01 + b11 * a11 + b12 * a21;
            this.m05 = b10 * a02 + b11 * a12 + b12 * a22;
            this.m06 = b20 * a00 + b21 * a10 + b22 * a20;
            this.m07 = b20 * a01 + b21 * a11 + b22 * a21;
            this.m08 = b20 * a02 + b21 * a12 + b22 * a22;
            return this;
          }
          /**
           * @zh 矩阵数乘。将当前矩阵与指定标量的数乘结果赋值给当前矩阵。
           * @param scalar 指定的标量。
           */

        }, {
          key: "multiplyScalar",
          value: function multiplyScalar(scalar) {
            this.m00 = this.m00 * scalar;
            this.m01 = this.m01 * scalar;
            this.m02 = this.m02 * scalar;
            this.m03 = this.m03 * scalar;
            this.m04 = this.m04 * scalar;
            this.m05 = this.m05 * scalar;
            this.m06 = this.m06 * scalar;
            this.m07 = this.m07 * scalar;
            this.m08 = this.m08 * scalar;
            return this;
          }
          /**
           * @zh 将当前矩阵左乘缩放矩阵的结果赋值给当前矩阵，缩放矩阵由各个轴的缩放给出。
           * @param vec 各个轴的缩放。
           */

        }, {
          key: "scale",
          value: function scale(vec) {
            var x = vec.x,
                y = vec.y;
            this.m00 = x * this.m00;
            this.m01 = x * this.m01;
            this.m02 = x * this.m02;
            this.m03 = y * this.m03;
            this.m04 = y * this.m04;
            this.m05 = y * this.m05;
            this.m06 = this.m06;
            this.m07 = this.m07;
            this.m08 = this.m08;
            return this;
          }
          /**
           * @zh 将当前矩阵左乘旋转矩阵的结果赋值给当前矩阵，旋转矩阵由旋转轴和旋转角度给出。
           * @param mat 矩阵
           * @param rad 旋转角度（弧度制）
           */

        }, {
          key: "rotate",
          value: function rotate(rad) {
            var a00 = this.m00;
            var a01 = this.m01;
            var a02 = this.m02;
            var a10 = this.m03;
            var a11 = this.m04;
            var a12 = this.m05;
            var a20 = this.m06;
            var a21 = this.m07;
            var a22 = this.m08;
            var s = Math.sin(rad);
            var c = Math.cos(rad);
            this.m00 = c * a00 + s * a10;
            this.m01 = c * a01 + s * a11;
            this.m02 = c * a02 + s * a12;
            this.m03 = c * a10 - s * a00;
            this.m04 = c * a11 - s * a01;
            this.m05 = c * a12 - s * a02;
            this.m06 = a20;
            this.m07 = a21;
            this.m08 = a22;
            return this;
          }
          /**
           * @zh 重置当前矩阵的值，使其表示指定四元数表示的旋转变换。
           * @param q 四元数表示的旋转变换。
           * @returns this
           */

        }, {
          key: "fromQuat",
          value: function fromQuat(q) {
            var x = q.x,
                y = q.y,
                z = q.z,
                w = q.w;
            var x2 = x + x;
            var y2 = y + y;
            var z2 = z + z;
            var xx = x * x2;
            var yx = y * x2;
            var yy = y * y2;
            var zx = z * x2;
            var zy = z * y2;
            var zz = z * z2;
            var wx = w * x2;
            var wy = w * y2;
            var wz = w * z2;
            this.m00 = 1 - yy - zz;
            this.m03 = yx - wz;
            this.m06 = zx + wy;
            this.m01 = yx + wz;
            this.m04 = 1 - xx - zz;
            this.m07 = zy - wx;
            this.m02 = zx - wy;
            this.m05 = zy + wx;
            this.m08 = 1 - xx - yy;
            return this;
          }
        }]);

        return Mat3;
      }(ValueType));
      Mat3.IDENTITY = Object.freeze(new Mat3());
      var v3_1$1 = new Vec3();
      var v3_2$1 = new Vec3();
      CCClass.fastDefine('cc.Mat3', Mat3, {
        m00: 1,
        m01: 0,
        m02: 0,
        m03: 0,
        m04: 1,
        m05: 0,
        m06: 0,
        m07: 0,
        m08: 1
      });
      legacyCC.Mat3 = Mat3;

      /**
       * 四元数。
       */

      var Quat = exports('Q', /*#__PURE__*/function (_ValueType) {
        _inherits(Quat, _ValueType);

        _createClass(Quat, null, [{
          key: "clone",

          /**
           * @zh 获得指定四元数的拷贝
           */
          value: function clone(a) {
            return new Quat(a.x, a.y, a.z, a.w);
          }
          /**
           * @zh 复制目标四元数
           */

        }, {
          key: "copy",
          value: function copy(out, a) {
            out.x = a.x;
            out.y = a.y;
            out.z = a.z;
            out.w = a.w;
            return out;
          }
          /**
           * @zh 设置四元数值
           */

        }, {
          key: "set",
          value: function set(out, x, y, z, w) {
            out.x = x;
            out.y = y;
            out.z = z;
            out.w = w;
            return out;
          }
          /**
           * @zh 将目标赋值为单位四元数
           */

        }, {
          key: "identity",
          value: function identity(out) {
            out.x = 0;
            out.y = 0;
            out.z = 0;
            out.w = 1;
            return out;
          }
          /**
           * @zh 设置四元数为两向量间的最短路径旋转，默认两向量都已归一化
           */

        }, {
          key: "rotationTo",
          value: function rotationTo(out, a, b) {
            var dot = Vec3.dot(a, b);

            if (dot < -0.999999) {
              Vec3.cross(v3_1$2, Vec3.UNIT_X, a);

              if (v3_1$2.length() < 0.000001) {
                Vec3.cross(v3_1$2, Vec3.UNIT_Y, a);
              }

              Vec3.normalize(v3_1$2, v3_1$2);
              Quat.fromAxisAngle(out, v3_1$2, Math.PI);
              return out;
            } else if (dot > 0.999999) {
              out.x = 0;
              out.y = 0;
              out.z = 0;
              out.w = 1;
              return out;
            } else {
              Vec3.cross(v3_1$2, a, b);
              out.x = v3_1$2.x;
              out.y = v3_1$2.y;
              out.z = v3_1$2.z;
              out.w = 1 + dot;
              return Quat.normalize(out, out);
            }
          }
          /**
           * @zh 获取四元数的旋转轴和旋转弧度
           * @param outAxis 旋转轴输出
           * @param q 源四元数
           * @return 旋转弧度
           */

        }, {
          key: "getAxisAngle",
          value: function getAxisAngle(outAxis, q) {
            var rad = Math.acos(q.w) * 2.0;
            var s = Math.sin(rad / 2.0);

            if (s !== 0.0) {
              outAxis.x = q.x / s;
              outAxis.y = q.y / s;
              outAxis.z = q.z / s;
            } else {
              // If s is zero, return any axis (no rotation - axis does not matter)
              outAxis.x = 1;
              outAxis.y = 0;
              outAxis.z = 0;
            }

            return rad;
          }
          /**
           * @zh 四元数乘法
           */

        }, {
          key: "multiply",
          value: function multiply(out, a, b) {
            var x = a.x * b.w + a.w * b.x + a.y * b.z - a.z * b.y;
            var y = a.y * b.w + a.w * b.y + a.z * b.x - a.x * b.z;
            var z = a.z * b.w + a.w * b.z + a.x * b.y - a.y * b.x;
            var w = a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z;
            out.x = x;
            out.y = y;
            out.z = z;
            out.w = w;
            return out;
          }
          /**
           * @zh 四元数标量乘法
           */

        }, {
          key: "multiplyScalar",
          value: function multiplyScalar(out, a, b) {
            out.x = a.x * b;
            out.y = a.y * b;
            out.z = a.z * b;
            out.w = a.w * b;
            return out;
          }
          /**
           * @zh 四元数乘加：A + B * scale
           */

        }, {
          key: "scaleAndAdd",
          value: function scaleAndAdd(out, a, b, scale) {
            out.x = a.x + b.x * scale;
            out.y = a.y + b.y * scale;
            out.z = a.z + b.z * scale;
            out.w = a.w + b.w * scale;
            return out;
          }
          /**
           * @zh 绕 X 轴旋转指定四元数
           * @param rad 旋转弧度
           */

        }, {
          key: "rotateX",
          value: function rotateX(out, a, rad) {
            rad *= 0.5;
            var bx = Math.sin(rad);
            var bw = Math.cos(rad);
            var x = a.x,
                y = a.y,
                z = a.z,
                w = a.w;
            out.x = x * bw + w * bx;
            out.y = y * bw + z * bx;
            out.z = z * bw - y * bx;
            out.w = w * bw - x * bx;
            return out;
          }
          /**
           * @zh 绕 Y 轴旋转指定四元数
           * @param rad 旋转弧度
           */

        }, {
          key: "rotateY",
          value: function rotateY(out, a, rad) {
            rad *= 0.5;
            var by = Math.sin(rad);
            var bw = Math.cos(rad);
            var x = a.x,
                y = a.y,
                z = a.z,
                w = a.w;
            out.x = x * bw - z * by;
            out.y = y * bw + w * by;
            out.z = z * bw + x * by;
            out.w = w * bw - y * by;
            return out;
          }
          /**
           * @zh 绕 Z 轴旋转指定四元数
           * @param rad 旋转弧度
           */

        }, {
          key: "rotateZ",
          value: function rotateZ(out, a, rad) {
            rad *= 0.5;
            var bz = Math.sin(rad);
            var bw = Math.cos(rad);
            var x = a.x,
                y = a.y,
                z = a.z,
                w = a.w;
            out.x = x * bw + y * bz;
            out.y = y * bw - x * bz;
            out.z = z * bw + w * bz;
            out.w = w * bw - z * bz;
            return out;
          }
          /**
           * @zh 绕世界空间下指定轴旋转四元数
           * @param axis 旋转轴，默认已归一化
           * @param rad 旋转弧度
           */

        }, {
          key: "rotateAround",
          value: function rotateAround(out, rot, axis, rad) {
            // get inv-axis (local to rot)
            Quat.invert(qt_1, rot);
            Vec3.transformQuat(v3_1$2, axis, qt_1); // rotate by inv-axis

            Quat.fromAxisAngle(qt_1, v3_1$2, rad);
            Quat.multiply(out, rot, qt_1);
            return out;
          }
          /**
           * @zh 绕本地空间下指定轴旋转四元数
           * @param axis 旋转轴
           * @param rad 旋转弧度
           */

        }, {
          key: "rotateAroundLocal",
          value: function rotateAroundLocal(out, rot, axis, rad) {
            Quat.fromAxisAngle(qt_1, axis, rad);
            Quat.multiply(out, rot, qt_1);
            return out;
          }
          /**
           * @zh 根据 xyz 分量计算 w 分量，默认已归一化
           */

        }, {
          key: "calculateW",
          value: function calculateW(out, a) {
            out.x = a.x;
            out.y = a.y;
            out.z = a.z;
            out.w = Math.sqrt(Math.abs(1.0 - a.x * a.x - a.y * a.y - a.z * a.z));
            return out;
          }
          /**
           * @zh 四元数点积（数量积）
           */

        }, {
          key: "dot",
          value: function dot(a, b) {
            return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
          }
          /**
           * @zh 逐元素线性插值： A + t * (B - A)
           */

        }, {
          key: "lerp",
          value: function lerp(out, a, b, t) {
            out.x = a.x + t * (b.x - a.x);
            out.y = a.y + t * (b.y - a.y);
            out.z = a.z + t * (b.z - a.z);
            out.w = a.w + t * (b.w - a.w);
            return out;
          }
          /**
           * @zh 四元数球面插值
           */

        }, {
          key: "slerp",
          value: function slerp(out, a, b, t) {
            // benchmarks:
            //    http://jsperf.com/quaternion-slerp-implementations
            var scale0 = 0;
            var scale1 = 0;
            var bx = b.x;
            var by = b.y;
            var bz = b.z;
            var bw = b.w; // calc cosine

            var cosom = a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w; // adjust signs (if necessary)

            if (cosom < 0.0) {
              cosom = -cosom;
              bx = -bx;
              by = -by;
              bz = -bz;
              bw = -bw;
            } // calculate coefficients


            if (1.0 - cosom > 0.000001) {
              // standard case (slerp)
              var omega = Math.acos(cosom);
              var sinom = Math.sin(omega);
              scale0 = Math.sin((1.0 - t) * omega) / sinom;
              scale1 = Math.sin(t * omega) / sinom;
            } else {
              // "from" and "to" quaternions are very close
              //  ... so we can do a linear interpolation
              scale0 = 1.0 - t;
              scale1 = t;
            } // calculate final values


            out.x = scale0 * a.x + scale1 * bx;
            out.y = scale0 * a.y + scale1 * by;
            out.z = scale0 * a.z + scale1 * bz;
            out.w = scale0 * a.w + scale1 * bw;
            return out;
          }
          /**
           * @zh 带两个控制点的四元数球面插值
           */

        }, {
          key: "sqlerp",
          value: function sqlerp(out, a, b, c, d, t) {
            Quat.slerp(qt_1, a, d, t);
            Quat.slerp(qt_2, b, c, t);
            Quat.slerp(out, qt_1, qt_2, 2 * t * (1 - t));
            return out;
          }
          /**
           * @zh 四元数求逆
           */

        }, {
          key: "invert",
          value: function invert(out, a) {
            var dot = a.x * a.x + a.y * a.y + a.z * a.z + a.w * a.w;
            var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

            out.x = -a.x * invDot;
            out.y = -a.y * invDot;
            out.z = -a.z * invDot;
            out.w = a.w * invDot;
            return out;
          }
          /**
           * @zh 求共轭四元数，对单位四元数与求逆等价，但更高效
           */

        }, {
          key: "conjugate",
          value: function conjugate(out, a) {
            out.x = -a.x;
            out.y = -a.y;
            out.z = -a.z;
            out.w = a.w;
            return out;
          }
          /**
           * @zh 求四元数长度
           */

        }, {
          key: "len",
          value: function len(a) {
            return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z + a.w * a.w);
          }
          /**
           * @zh 求四元数长度平方
           */

        }, {
          key: "lengthSqr",
          value: function lengthSqr(a) {
            return a.x * a.x + a.y * a.y + a.z * a.z + a.w * a.w;
          }
          /**
           * @zh 归一化四元数
           */

        }, {
          key: "normalize",
          value: function normalize(out, a) {
            var len = a.x * a.x + a.y * a.y + a.z * a.z + a.w * a.w;

            if (len > 0) {
              len = 1 / Math.sqrt(len);
              out.x = a.x * len;
              out.y = a.y * len;
              out.z = a.z * len;
              out.w = a.w * len;
            }

            return out;
          }
          /**
           * @zh 根据本地坐标轴朝向计算四元数，默认三向量都已归一化且相互垂直
           */

        }, {
          key: "fromAxes",
          value: function fromAxes(out, xAxis, yAxis, zAxis) {
            Mat3.set(m3_1, xAxis.x, xAxis.y, xAxis.z, yAxis.x, yAxis.y, yAxis.z, zAxis.x, zAxis.y, zAxis.z);
            return Quat.normalize(out, Quat.fromMat3(out, m3_1));
          }
          /**
           * @zh 根据视口的前方向和上方向计算四元数
           * @param view 视口面向的前方向，必须归一化
           * @param up 视口的上方向，必须归一化，默认为 (0, 1, 0)
           */

        }, {
          key: "fromViewUp",
          value: function fromViewUp(out, view, up) {
            Mat3.fromViewUp(m3_1, view, up);
            return Quat.normalize(out, Quat.fromMat3(out, m3_1));
          }
          /**
           * @zh 根据旋转轴和旋转弧度计算四元数
           */

        }, {
          key: "fromAxisAngle",
          value: function fromAxisAngle(out, axis, rad) {
            rad = rad * 0.5;
            var s = Math.sin(rad);
            out.x = s * axis.x;
            out.y = s * axis.y;
            out.z = s * axis.z;
            out.w = Math.cos(rad);
            return out;
          }
          /**
           * @zh 根据三维矩阵信息计算四元数，默认输入矩阵不含有缩放信息
           */

        }, {
          key: "fromMat3",
          value: function fromMat3(out, m) {
            var m00 = m.m00,
                m01 = m.m03,
                m02 = m.m06,
                m10 = m.m01,
                m11 = m.m04,
                m12 = m.m07,
                m20 = m.m02,
                m21 = m.m05,
                m22 = m.m08;
            var trace = m00 + m11 + m22;

            if (trace > 0) {
              var s = 0.5 / Math.sqrt(trace + 1.0);
              out.w = 0.25 / s;
              out.x = (m21 - m12) * s;
              out.y = (m02 - m20) * s;
              out.z = (m10 - m01) * s;
            } else if (m00 > m11 && m00 > m22) {
              var _s = 2.0 * Math.sqrt(1.0 + m00 - m11 - m22);

              out.w = (m21 - m12) / _s;
              out.x = 0.25 * _s;
              out.y = (m01 + m10) / _s;
              out.z = (m02 + m20) / _s;
            } else if (m11 > m22) {
              var _s2 = 2.0 * Math.sqrt(1.0 + m11 - m00 - m22);

              out.w = (m02 - m20) / _s2;
              out.x = (m01 + m10) / _s2;
              out.y = 0.25 * _s2;
              out.z = (m12 + m21) / _s2;
            } else {
              var _s3 = 2.0 * Math.sqrt(1.0 + m22 - m00 - m11);

              out.w = (m10 - m01) / _s3;
              out.x = (m02 + m20) / _s3;
              out.y = (m12 + m21) / _s3;
              out.z = 0.25 * _s3;
            }

            return out;
          }
          /**
           * @zh 根据欧拉角信息计算四元数，旋转顺序为 YZX
           */

        }, {
          key: "fromEuler",
          value: function fromEuler(out, x, y, z) {
            x *= halfToRad;
            y *= halfToRad;
            z *= halfToRad;
            var sx = Math.sin(x);
            var cx = Math.cos(x);
            var sy = Math.sin(y);
            var cy = Math.cos(y);
            var sz = Math.sin(z);
            var cz = Math.cos(z);
            out.x = sx * cy * cz + cx * sy * sz;
            out.y = cx * sy * cz + sx * cy * sz;
            out.z = cx * cy * sz - sx * sy * cz;
            out.w = cx * cy * cz - sx * sy * sz;
            return out;
          }
          /**
           * @zh 返回定义此四元数的坐标系 X 轴向量
           */

        }, {
          key: "toAxisX",
          value: function toAxisX(out, q) {
            var fy = 2.0 * q.y;
            var fz = 2.0 * q.z;
            out.x = 1.0 - fy * q.y - fz * q.z;
            out.y = fy * q.x + fz * q.w;
            out.z = fz * q.x + fy * q.w;
            return out;
          }
          /**
           * @zh 返回定义此四元数的坐标系 Y 轴向量
           */

        }, {
          key: "toAxisY",
          value: function toAxisY(out, q) {
            var fx = 2.0 * q.x;
            var fy = 2.0 * q.y;
            var fz = 2.0 * q.z;
            out.x = fy * q.x - fz * q.w;
            out.y = 1.0 - fx * q.x - fz * q.z;
            out.z = fz * q.y + fx * q.w;
            return out;
          }
          /**
           * @zh 返回定义此四元数的坐标系 Z 轴向量
           */

        }, {
          key: "toAxisZ",
          value: function toAxisZ(out, q) {
            var fx = 2.0 * q.x;
            var fy = 2.0 * q.y;
            var fz = 2.0 * q.z;
            out.x = fz * q.x - fy * q.w;
            out.y = fz * q.y - fx * q.w;
            out.z = 1.0 - fx * q.x - fy * q.y;
            return out;
          }
          /**
           * @zh 根据四元数计算欧拉角，返回角度 x, y 在 [-180, 180] 区间内, z 默认在 [-90, 90] 区间内，旋转顺序为 YZX
           * @param outerZ z 取值范围区间改为 [-180, -90] U [90, 180]
           */

        }, {
          key: "toEuler",
          value: function toEuler(out, q, outerZ) {
            var x = q.x,
                y = q.y,
                z = q.z,
                w = q.w;
            var bank = 0;
            var heading = 0;
            var attitude = 0;
            var test = x * y + z * w;

            if (test > 0.499999) {
              bank = 0; // default to zero

              heading = toDegree(2 * Math.atan2(x, w));
              attitude = 90;
            } else if (test < -0.499999) {
              bank = 0; // default to zero

              heading = -toDegree(2 * Math.atan2(x, w));
              attitude = -90;
            } else {
              var sqx = x * x;
              var sqy = y * y;
              var sqz = z * z;
              bank = toDegree(Math.atan2(2 * x * w - 2 * y * z, 1 - 2 * sqx - 2 * sqz));
              heading = toDegree(Math.atan2(2 * y * w - 2 * x * z, 1 - 2 * sqy - 2 * sqz));
              attitude = toDegree(Math.asin(2 * test));

              if (outerZ) {
                bank = -180 * Math.sign(bank + 1e-6) + bank;
                heading = -180 * Math.sign(heading + 1e-6) + heading;
                attitude = 180 * Math.sign(attitude + 1e-6) - attitude;
              }
            }

            out.x = bank;
            out.y = heading;
            out.z = attitude;
            return out;
          }
          /**
           * @zh 四元数转数组
           * @param ofs 数组内的起始偏移量
           */

        }, {
          key: "toArray",
          value: function toArray(out, q) {
            var ofs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            out[ofs + 0] = q.x;
            out[ofs + 1] = q.y;
            out[ofs + 2] = q.z;
            out[ofs + 3] = q.w;
            return out;
          }
          /**
           * @zh 数组转四元数
           * @param ofs 数组起始偏移量
           */

        }, {
          key: "fromArray",
          value: function fromArray(out, arr) {
            var ofs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            out.x = arr[ofs + 0];
            out.y = arr[ofs + 1];
            out.z = arr[ofs + 2];
            out.w = arr[ofs + 3];
            return out;
          }
          /**
           * @zh 四元数等价判断
           */

        }, {
          key: "strictEquals",
          value: function strictEquals(a, b) {
            return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
          }
          /**
           * @zh 排除浮点数误差的四元数近似等价判断
           */

        }, {
          key: "equals",
          value: function equals(a, b) {
            var epsilon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EPSILON;
            return Math.abs(a.x - b.x) <= epsilon * Math.max(1.0, Math.abs(a.x), Math.abs(b.x)) && Math.abs(a.y - b.y) <= epsilon * Math.max(1.0, Math.abs(a.y), Math.abs(b.y)) && Math.abs(a.z - b.z) <= epsilon * Math.max(1.0, Math.abs(a.z), Math.abs(b.z)) && Math.abs(a.w - b.w) <= epsilon * Math.max(1.0, Math.abs(a.w), Math.abs(b.w));
          }
          /**
           * x 分量。
           */

        }]);

        function Quat(x, y, z, w) {
          var _this;

          _classCallCheck(this, Quat);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Quat).call(this));

          if (x && _typeof(x) === 'object') {
            _this.x = x.x;
            _this.y = x.y;
            _this.z = x.z;
            _this.w = x.w;
          } else {
            _this.x = x || 0;
            _this.y = y || 0;
            _this.z = z || 0;
            _this.w = w !== null && w !== void 0 ? w : 1;
          }

          return _this;
        }
        /**
         * @zh 克隆当前四元数。
         */


        _createClass(Quat, [{
          key: "clone",
          value: function clone() {
            return new Quat(this.x, this.y, this.z, this.w);
          }
          /**
           * @zh 设置当前四元数使其与指定四元数相等。
           * @param other 相比较的四元数。
           * @returns `this`
           */

        }, {
          key: "set",
          value: function set(x, y, z, w) {
            if (x && _typeof(x) === 'object') {
              this.x = x.x;
              this.y = x.y;
              this.z = x.z;
              this.w = x.w;
            } else {
              this.x = x || 0;
              this.y = y || 0;
              this.z = z || 0;
              this.w = w !== null && w !== void 0 ? w : 1;
            }

            return this;
          }
          /**
           * @zh 判断当前向量是否在误差范围内与指定向量相等。
           * @param other 相比较的向量。
           * @param epsilon 允许的误差，应为非负数。
           * @returns 当两向量的各分量都在指定的误差范围内分别相等时，返回 `true`；否则返回 `false`。
           */

        }, {
          key: "equals",
          value: function equals(other) {
            var epsilon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSILON;
            return Math.abs(this.x - other.x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(other.x)) && Math.abs(this.y - other.y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(other.y)) && Math.abs(this.z - other.z) <= epsilon * Math.max(1.0, Math.abs(this.z), Math.abs(other.z)) && Math.abs(this.w - other.w) <= epsilon * Math.max(1.0, Math.abs(this.w), Math.abs(other.w));
          }
          /**
           * @zh 判断当前四元数是否与指定四元数相等。
           * @param other 相比较的四元数。
           * @returns 两四元数的各分量都相等时返回 `true`；否则返回 `false`。
           */

        }, {
          key: "strictEquals",
          value: function strictEquals(other) {
            return other && this.x === other.x && this.y === other.y && this.z === other.z && this.w === other.w;
          }
          /**
           * @zh 将当前四元数转化为欧拉角（x-y-z）并赋值给出口向量。
           * @param out 出口向量。
           */

        }, {
          key: "getEulerAngles",
          value: function getEulerAngles(out) {
            return Quat.toEuler(out, this);
          }
          /**
           * @zh 根据指定的插值比率，从当前四元数到目标四元数之间做线性插值。
           * @param to 目标四元数。
           * @param ratio 插值比率，范围为 [0,1]。
           */

        }, {
          key: "lerp",
          value: function lerp(to, ratio) {
            this.x = this.x + ratio * (to.x - this.x);
            this.y = this.y + ratio * (to.y - this.y);
            this.z = this.z + ratio * (to.z - this.z);
            this.w = this.w + ratio * (to.w - this.w);
            return this;
          }
          /**
           * @zh 根据指定的插值比率，从当前四元数到目标四元数之间做球面插值。
           * @param to 目标四元数。
           * @param ratio 插值比率，范围为 [0,1]。
           */

        }, {
          key: "slerp",
          value: function slerp(to, ratio) {
            return Quat.slerp(this, this, to, ratio);
          }
          /**
           * @zh 求四元数长度
           */

        }, {
          key: "length",
          value: function length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
          }
          /**
           * @zh 求四元数长度平方
           */

        }, {
          key: "lengthSqr",
          value: function lengthSqr() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
          }
        }]);

        return Quat;
      }(ValueType));
      Quat.IDENTITY = Object.freeze(new Quat());
      var qt_1 = new Quat();
      var qt_2 = new Quat();
      var v3_1$2 = new Vec3();
      var m3_1 = new Mat3();
      var halfToRad = 0.5 * Math.PI / 180.0;
      CCClass.fastDefine('cc.Quat', Quat, {
        x: 0,
        y: 0,
        z: 0,
        w: 1
      });
      legacyCC.Quat = Quat;
      function quat() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
        return new Quat(x, y, z, w);
      }
      legacyCC.quat = quat;

      /**
       * 表示四维（4x4）矩阵。
       */
      // tslint:disable:one-variable-per-declaration

      var Mat4 = exports('M', /*#__PURE__*/function (_ValueType) {
        _inherits(Mat4, _ValueType);

        _createClass(Mat4, null, [{
          key: "clone",

          /**
           * @zh 获得指定矩阵的拷贝
           */
          value: function clone(a) {
            return new Mat4(a.m00, a.m01, a.m02, a.m03, a.m04, a.m05, a.m06, a.m07, a.m08, a.m09, a.m10, a.m11, a.m12, a.m13, a.m14, a.m15);
          }
          /**
           * @zh 复制目标矩阵
           */

        }, {
          key: "copy",
          value: function copy(out, a) {
            out.m00 = a.m00;
            out.m01 = a.m01;
            out.m02 = a.m02;
            out.m03 = a.m03;
            out.m04 = a.m04;
            out.m05 = a.m05;
            out.m06 = a.m06;
            out.m07 = a.m07;
            out.m08 = a.m08;
            out.m09 = a.m09;
            out.m10 = a.m10;
            out.m11 = a.m11;
            out.m12 = a.m12;
            out.m13 = a.m13;
            out.m14 = a.m14;
            out.m15 = a.m15;
            return out;
          }
          /**
           * @zh 设置矩阵值
           */

        }, {
          key: "set",
          value: function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
            out.m00 = m00;
            out.m01 = m01;
            out.m02 = m02;
            out.m03 = m03;
            out.m04 = m10;
            out.m05 = m11;
            out.m06 = m12;
            out.m07 = m13;
            out.m08 = m20;
            out.m09 = m21;
            out.m10 = m22;
            out.m11 = m23;
            out.m12 = m30;
            out.m13 = m31;
            out.m14 = m32;
            out.m15 = m33;
            return out;
          }
          /**
           * @zh 将目标赋值为单位矩阵
           */

        }, {
          key: "identity",
          value: function identity(out) {
            out.m00 = 1;
            out.m01 = 0;
            out.m02 = 0;
            out.m03 = 0;
            out.m04 = 0;
            out.m05 = 1;
            out.m06 = 0;
            out.m07 = 0;
            out.m08 = 0;
            out.m09 = 0;
            out.m10 = 1;
            out.m11 = 0;
            out.m12 = 0;
            out.m13 = 0;
            out.m14 = 0;
            out.m15 = 1;
            return out;
          }
          /**
           * @zh 转置矩阵
           */

        }, {
          key: "transpose",
          value: function transpose(out, a) {
            // If we are transposing ourselves we can skip a few steps but have to cache some values
            if (out === a) {
              var a01 = a.m01,
                  a02 = a.m02,
                  a03 = a.m03,
                  a12 = a.m06,
                  a13 = a.m07,
                  a23 = a.m11;
              out.m01 = a.m04;
              out.m02 = a.m08;
              out.m03 = a.m12;
              out.m04 = a01;
              out.m06 = a.m09;
              out.m07 = a.m13;
              out.m08 = a02;
              out.m09 = a12;
              out.m11 = a.m14;
              out.m12 = a03;
              out.m13 = a13;
              out.m14 = a23;
            } else {
              out.m00 = a.m00;
              out.m01 = a.m04;
              out.m02 = a.m08;
              out.m03 = a.m12;
              out.m04 = a.m01;
              out.m05 = a.m05;
              out.m06 = a.m09;
              out.m07 = a.m13;
              out.m08 = a.m02;
              out.m09 = a.m06;
              out.m10 = a.m10;
              out.m11 = a.m14;
              out.m12 = a.m03;
              out.m13 = a.m07;
              out.m14 = a.m11;
              out.m15 = a.m15;
            }

            return out;
          }
          /**
           * @zh 矩阵求逆，注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。
           */

        }, {
          key: "invert",
          value: function invert(out, a) {
            var a00 = a.m00;
            var a01 = a.m01;
            var a02 = a.m02;
            var a03 = a.m03;
            var a10 = a.m04;
            var a11 = a.m05;
            var a12 = a.m06;
            var a13 = a.m07;
            var a20 = a.m08;
            var a21 = a.m09;
            var a22 = a.m10;
            var a23 = a.m11;
            var a30 = a.m12;
            var a31 = a.m13;
            var a32 = a.m14;
            var a33 = a.m15;
            var b00 = a00 * a11 - a01 * a10;
            var b01 = a00 * a12 - a02 * a10;
            var b02 = a00 * a13 - a03 * a10;
            var b03 = a01 * a12 - a02 * a11;
            var b04 = a01 * a13 - a03 * a11;
            var b05 = a02 * a13 - a03 * a12;
            var b06 = a20 * a31 - a21 * a30;
            var b07 = a20 * a32 - a22 * a30;
            var b08 = a20 * a33 - a23 * a30;
            var b09 = a21 * a32 - a22 * a31;
            var b10 = a21 * a33 - a23 * a31;
            var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

            var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

            if (det === 0) {
              out.m00 = 0;
              out.m01 = 0;
              out.m02 = 0;
              out.m03 = 0;
              out.m04 = 0;
              out.m05 = 0;
              out.m06 = 0;
              out.m07 = 0;
              out.m08 = 0;
              out.m09 = 0;
              out.m10 = 0;
              out.m11 = 0;
              out.m12 = 0;
              out.m13 = 0;
              out.m14 = 0;
              out.m15 = 0;
              return out;
            }

            det = 1.0 / det;
            out.m00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
            out.m01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
            out.m02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
            out.m03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
            out.m04 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
            out.m05 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
            out.m06 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
            out.m07 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
            out.m08 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
            out.m09 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
            out.m10 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
            out.m11 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
            out.m12 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
            out.m13 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
            out.m14 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
            out.m15 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
            return out;
          }
          /**
           * @zh 矩阵行列式
           */

        }, {
          key: "determinant",
          value: function determinant(a) {
            var a00 = a.m00;
            var a01 = a.m01;
            var a02 = a.m02;
            var a03 = a.m03;
            var a10 = a.m04;
            var a11 = a.m05;
            var a12 = a.m06;
            var a13 = a.m07;
            var a20 = a.m08;
            var a21 = a.m09;
            var a22 = a.m10;
            var a23 = a.m11;
            var a30 = a.m12;
            var a31 = a.m13;
            var a32 = a.m14;
            var a33 = a.m15;
            var b00 = a00 * a11 - a01 * a10;
            var b01 = a00 * a12 - a02 * a10;
            var b02 = a00 * a13 - a03 * a10;
            var b03 = a01 * a12 - a02 * a11;
            var b04 = a01 * a13 - a03 * a11;
            var b05 = a02 * a13 - a03 * a12;
            var b06 = a20 * a31 - a21 * a30;
            var b07 = a20 * a32 - a22 * a30;
            var b08 = a20 * a33 - a23 * a30;
            var b09 = a21 * a32 - a22 * a31;
            var b10 = a21 * a33 - a23 * a31;
            var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

            return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
          }
          /**
           * @zh 矩阵乘法
           */

        }, {
          key: "multiply",
          value: function multiply(out, a, b) {
            var a00 = a.m00;
            var a01 = a.m01;
            var a02 = a.m02;
            var a03 = a.m03;
            var a10 = a.m04;
            var a11 = a.m05;
            var a12 = a.m06;
            var a13 = a.m07;
            var a20 = a.m08;
            var a21 = a.m09;
            var a22 = a.m10;
            var a23 = a.m11;
            var a30 = a.m12;
            var a31 = a.m13;
            var a32 = a.m14;
            var a33 = a.m15; // Cache only the current line of the second matrix

            var b0 = b.m00,
                b1 = b.m01,
                b2 = b.m02,
                b3 = b.m03;
            out.m00 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out.m01 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out.m02 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out.m03 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = b.m04;
            b1 = b.m05;
            b2 = b.m06;
            b3 = b.m07;
            out.m04 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out.m05 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out.m06 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out.m07 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = b.m08;
            b1 = b.m09;
            b2 = b.m10;
            b3 = b.m11;
            out.m08 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out.m09 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out.m10 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out.m11 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = b.m12;
            b1 = b.m13;
            b2 = b.m14;
            b3 = b.m15;
            out.m12 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out.m13 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out.m14 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out.m15 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            return out;
          }
          /**
           * @zh 在给定矩阵变换基础上加入变换
           */

        }, {
          key: "transform",
          value: function transform(out, a, v) {
            var x = v.x,
                y = v.y,
                z = v.z;

            if (a === out) {
              out.m12 = a.m00 * x + a.m04 * y + a.m08 * z + a.m12;
              out.m13 = a.m01 * x + a.m05 * y + a.m09 * z + a.m13;
              out.m14 = a.m02 * x + a.m06 * y + a.m10 * z + a.m14;
              out.m15 = a.m03 * x + a.m07 * y + a.m11 * z + a.m15;
            } else {
              var a00 = a.m00;
              var a01 = a.m01;
              var a02 = a.m02;
              var a03 = a.m03;
              var a10 = a.m04;
              var a11 = a.m05;
              var a12 = a.m06;
              var a13 = a.m07;
              var a20 = a.m08;
              var a21 = a.m09;
              var a22 = a.m10;
              var a23 = a.m11;
              var a30 = a.m12;
              var a31 = a.m13;
              var a32 = a.m14;
              var a33 = a.m15;
              out.m00 = a00;
              out.m01 = a01;
              out.m02 = a02;
              out.m03 = a03;
              out.m04 = a10;
              out.m05 = a11;
              out.m06 = a12;
              out.m07 = a13;
              out.m08 = a20;
              out.m09 = a21;
              out.m10 = a22;
              out.m11 = a23;
              out.m12 = a00 * x + a10 * y + a20 * z + a.m12;
              out.m13 = a01 * x + a11 * y + a21 * z + a.m13;
              out.m14 = a02 * x + a12 * y + a22 * z + a.m14;
              out.m15 = a03 * x + a13 * y + a23 * z + a.m15;
            }

            return out;
          }
          /**
           * @zh 在给定矩阵变换基础上加入新位移变换
           */

        }, {
          key: "translate",
          value: function translate(out, a, v) {
            console.warn('function changed');

            if (a === out) {
              out.m12 += v.x;
              out.m13 += v.y;
              out.m14 += v.z;
            } else {
              out.m00 = a.m00;
              out.m01 = a.m01;
              out.m02 = a.m02;
              out.m03 = a.m03;
              out.m04 = a.m04;
              out.m05 = a.m05;
              out.m06 = a.m06;
              out.m07 = a.m07;
              out.m08 = a.m08;
              out.m09 = a.m09;
              out.m10 = a.m10;
              out.m11 = a.m11;
              out.m12 += v.x;
              out.m13 += v.y;
              out.m14 += v.z;
              out.m15 = a.m15;
            }

            return out;
          }
          /**
           * @zh 在给定矩阵变换基础上加入新缩放变换
           */

        }, {
          key: "scale",
          value: function scale(out, a, v) {
            var x = v.x,
                y = v.y,
                z = v.z;
            out.m00 = a.m00 * x;
            out.m01 = a.m01 * x;
            out.m02 = a.m02 * x;
            out.m03 = a.m03 * x;
            out.m04 = a.m04 * y;
            out.m05 = a.m05 * y;
            out.m06 = a.m06 * y;
            out.m07 = a.m07 * y;
            out.m08 = a.m08 * z;
            out.m09 = a.m09 * z;
            out.m10 = a.m10 * z;
            out.m11 = a.m11 * z;
            out.m12 = a.m12;
            out.m13 = a.m13;
            out.m14 = a.m14;
            out.m15 = a.m15;
            return out;
          }
          /**
           * @zh 在给定矩阵变换基础上加入新旋转变换
           * @param rad 旋转角度
           * @param axis 旋转轴
           */

        }, {
          key: "rotate",
          value: function rotate(out, a, rad, axis) {
            var x = axis.x,
                y = axis.y,
                z = axis.z;
            var len = Math.sqrt(x * x + y * y + z * z);

            if (Math.abs(len) < EPSILON) {
              return null;
            }

            len = 1 / len;
            x *= len;
            y *= len;
            z *= len;
            var s = Math.sin(rad);
            var c = Math.cos(rad);
            var t = 1 - c;
            var a00 = a.m00;
            var a01 = a.m01;
            var a02 = a.m02;
            var a03 = a.m03;
            var a10 = a.m04;
            var a11 = a.m05;
            var a12 = a.m06;
            var a13 = a.m07;
            var a20 = a.m08;
            var a21 = a.m09;
            var a22 = a.m10;
            var a23 = a.m11; // Construct the elements of the rotation matrix

            var b00 = x * x * t + c,
                b01 = y * x * t + z * s,
                b02 = z * x * t - y * s;
            var b10 = x * y * t - z * s,
                b11 = y * y * t + c,
                b12 = z * y * t + x * s;
            var b20 = x * z * t + y * s,
                b21 = y * z * t - x * s,
                b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

            out.m00 = a00 * b00 + a10 * b01 + a20 * b02;
            out.m01 = a01 * b00 + a11 * b01 + a21 * b02;
            out.m02 = a02 * b00 + a12 * b01 + a22 * b02;
            out.m03 = a03 * b00 + a13 * b01 + a23 * b02;
            out.m04 = a00 * b10 + a10 * b11 + a20 * b12;
            out.m05 = a01 * b10 + a11 * b11 + a21 * b12;
            out.m06 = a02 * b10 + a12 * b11 + a22 * b12;
            out.m07 = a03 * b10 + a13 * b11 + a23 * b12;
            out.m08 = a00 * b20 + a10 * b21 + a20 * b22;
            out.m09 = a01 * b20 + a11 * b21 + a21 * b22;
            out.m10 = a02 * b20 + a12 * b21 + a22 * b22;
            out.m11 = a03 * b20 + a13 * b21 + a23 * b22; // If the source and destination differ, copy the unchanged last row

            if (a !== out) {
              out.m12 = a.m12;
              out.m13 = a.m13;
              out.m14 = a.m14;
              out.m15 = a.m15;
            }

            return out;
          }
          /**
           * @zh 在给定矩阵变换基础上加入绕 X 轴的旋转变换
           * @param rad 旋转角度
           */

        }, {
          key: "rotateX",
          value: function rotateX(out, a, rad) {
            var s = Math.sin(rad),
                c = Math.cos(rad),
                a10 = a.m04,
                a11 = a.m05,
                a12 = a.m06,
                a13 = a.m07,
                a20 = a.m08,
                a21 = a.m09,
                a22 = a.m10,
                a23 = a.m11;

            if (a !== out) {
              // If the source and destination differ, copy the unchanged rows
              out.m00 = a.m00;
              out.m01 = a.m01;
              out.m02 = a.m02;
              out.m03 = a.m03;
              out.m12 = a.m12;
              out.m13 = a.m13;
              out.m14 = a.m14;
              out.m15 = a.m15;
            } // Perform axis-specific matrix multiplication


            out.m04 = a10 * c + a20 * s;
            out.m05 = a11 * c + a21 * s;
            out.m06 = a12 * c + a22 * s;
            out.m07 = a13 * c + a23 * s;
            out.m08 = a20 * c - a10 * s;
            out.m09 = a21 * c - a11 * s;
            out.m10 = a22 * c - a12 * s;
            out.m11 = a23 * c - a13 * s;
            return out;
          }
          /**
           * @zh 在给定矩阵变换基础上加入绕 Y 轴的旋转变换
           * @param rad 旋转角度
           */

        }, {
          key: "rotateY",
          value: function rotateY(out, a, rad) {
            var s = Math.sin(rad),
                c = Math.cos(rad),
                a00 = a.m00,
                a01 = a.m01,
                a02 = a.m02,
                a03 = a.m03,
                a20 = a.m08,
                a21 = a.m09,
                a22 = a.m10,
                a23 = a.m11;

            if (a !== out) {
              // If the source and destination differ, copy the unchanged rows
              out.m04 = a.m04;
              out.m05 = a.m05;
              out.m06 = a.m06;
              out.m07 = a.m07;
              out.m12 = a.m12;
              out.m13 = a.m13;
              out.m14 = a.m14;
              out.m15 = a.m15;
            } // Perform axis-specific matrix multiplication


            out.m00 = a00 * c - a20 * s;
            out.m01 = a01 * c - a21 * s;
            out.m02 = a02 * c - a22 * s;
            out.m03 = a03 * c - a23 * s;
            out.m08 = a00 * s + a20 * c;
            out.m09 = a01 * s + a21 * c;
            out.m10 = a02 * s + a22 * c;
            out.m11 = a03 * s + a23 * c;
            return out;
          }
          /**
           * @zh 在给定矩阵变换基础上加入绕 Z 轴的旋转变换
           * @param rad 旋转角度
           */

        }, {
          key: "rotateZ",
          value: function rotateZ(out, a, rad) {
            var s = Math.sin(rad),
                c = Math.cos(rad),
                a00 = a.m00,
                a01 = a.m01,
                a02 = a.m02,
                a03 = a.m03,
                a10 = a.m04,
                a11 = a.m05,
                a12 = a.m06,
                a13 = a.m07; // If the source and destination differ, copy the unchanged last row

            if (a !== out) {
              out.m08 = a.m08;
              out.m09 = a.m09;
              out.m10 = a.m10;
              out.m11 = a.m11;
              out.m12 = a.m12;
              out.m13 = a.m13;
              out.m14 = a.m14;
              out.m15 = a.m15;
            } // Perform axis-specific matrix multiplication


            out.m00 = a00 * c + a10 * s;
            out.m01 = a01 * c + a11 * s;
            out.m02 = a02 * c + a12 * s;
            out.m03 = a03 * c + a13 * s;
            out.m04 = a10 * c - a00 * s;
            out.m05 = a11 * c - a01 * s;
            out.m06 = a12 * c - a02 * s;
            out.m07 = a13 * c - a03 * s;
            return out;
          }
          /**
           * @zh 计算位移矩阵
           */

        }, {
          key: "fromTranslation",
          value: function fromTranslation(out, v) {
            out.m00 = 1;
            out.m01 = 0;
            out.m02 = 0;
            out.m03 = 0;
            out.m04 = 0;
            out.m05 = 1;
            out.m06 = 0;
            out.m07 = 0;
            out.m08 = 0;
            out.m09 = 0;
            out.m10 = 1;
            out.m11 = 0;
            out.m12 = v.x;
            out.m13 = v.y;
            out.m14 = v.z;
            out.m15 = 1;
            return out;
          }
          /**
           * @zh 计算缩放矩阵
           */

        }, {
          key: "fromScaling",
          value: function fromScaling(out, v) {
            out.m00 = v.x;
            out.m01 = 0;
            out.m02 = 0;
            out.m03 = 0;
            out.m04 = 0;
            out.m05 = v.y;
            out.m06 = 0;
            out.m07 = 0;
            out.m08 = 0;
            out.m09 = 0;
            out.m10 = v.z;
            out.m11 = 0;
            out.m12 = 0;
            out.m13 = 0;
            out.m14 = 0;
            out.m15 = 1;
            return out;
          }
          /**
           * @zh 计算旋转矩阵
           */

        }, {
          key: "fromRotation",
          value: function fromRotation(out, rad, axis) {
            var x = axis.x,
                y = axis.y,
                z = axis.z;
            var len = Math.sqrt(x * x + y * y + z * z);

            if (Math.abs(len) < EPSILON) {
              return null;
            }

            len = 1 / len;
            x *= len;
            y *= len;
            z *= len;
            var s = Math.sin(rad);
            var c = Math.cos(rad);
            var t = 1 - c; // Perform rotation-specific matrix multiplication

            out.m00 = x * x * t + c;
            out.m01 = y * x * t + z * s;
            out.m02 = z * x * t - y * s;
            out.m03 = 0;
            out.m04 = x * y * t - z * s;
            out.m05 = y * y * t + c;
            out.m06 = z * y * t + x * s;
            out.m07 = 0;
            out.m08 = x * z * t + y * s;
            out.m09 = y * z * t - x * s;
            out.m10 = z * z * t + c;
            out.m11 = 0;
            out.m12 = 0;
            out.m13 = 0;
            out.m14 = 0;
            out.m15 = 1;
            return out;
          }
          /**
           * @zh 计算绕 X 轴的旋转矩阵
           */

        }, {
          key: "fromXRotation",
          value: function fromXRotation(out, rad) {
            var s = Math.sin(rad),
                c = Math.cos(rad); // Perform axis-specific matrix multiplication

            out.m00 = 1;
            out.m01 = 0;
            out.m02 = 0;
            out.m03 = 0;
            out.m04 = 0;
            out.m05 = c;
            out.m06 = s;
            out.m07 = 0;
            out.m08 = 0;
            out.m09 = -s;
            out.m10 = c;
            out.m11 = 0;
            out.m12 = 0;
            out.m13 = 0;
            out.m14 = 0;
            out.m15 = 1;
            return out;
          }
          /**
           * @zh 计算绕 Y 轴的旋转矩阵
           */

        }, {
          key: "fromYRotation",
          value: function fromYRotation(out, rad) {
            var s = Math.sin(rad),
                c = Math.cos(rad); // Perform axis-specific matrix multiplication

            out.m00 = c;
            out.m01 = 0;
            out.m02 = -s;
            out.m03 = 0;
            out.m04 = 0;
            out.m05 = 1;
            out.m06 = 0;
            out.m07 = 0;
            out.m08 = s;
            out.m09 = 0;
            out.m10 = c;
            out.m11 = 0;
            out.m12 = 0;
            out.m13 = 0;
            out.m14 = 0;
            out.m15 = 1;
            return out;
          }
          /**
           * @zh 计算绕 Z 轴的旋转矩阵
           */

        }, {
          key: "fromZRotation",
          value: function fromZRotation(out, rad) {
            var s = Math.sin(rad),
                c = Math.cos(rad); // Perform axis-specific matrix multiplication

            out.m00 = c;
            out.m01 = s;
            out.m02 = 0;
            out.m03 = 0;
            out.m04 = -s;
            out.m05 = c;
            out.m06 = 0;
            out.m07 = 0;
            out.m08 = 0;
            out.m09 = 0;
            out.m10 = 1;
            out.m11 = 0;
            out.m12 = 0;
            out.m13 = 0;
            out.m14 = 0;
            out.m15 = 1;
            return out;
          }
          /**
           * @zh 根据旋转和位移信息计算矩阵
           */

        }, {
          key: "fromRT",
          value: function fromRT(out, q, v) {
            var x = q.x,
                y = q.y,
                z = q.z,
                w = q.w;
            var x2 = x + x;
            var y2 = y + y;
            var z2 = z + z;
            var xx = x * x2;
            var xy = x * y2;
            var xz = x * z2;
            var yy = y * y2;
            var yz = y * z2;
            var zz = z * z2;
            var wx = w * x2;
            var wy = w * y2;
            var wz = w * z2;
            out.m00 = 1 - (yy + zz);
            out.m01 = xy + wz;
            out.m02 = xz - wy;
            out.m03 = 0;
            out.m04 = xy - wz;
            out.m05 = 1 - (xx + zz);
            out.m06 = yz + wx;
            out.m07 = 0;
            out.m08 = xz + wy;
            out.m09 = yz - wx;
            out.m10 = 1 - (xx + yy);
            out.m11 = 0;
            out.m12 = v.x;
            out.m13 = v.y;
            out.m14 = v.z;
            out.m15 = 1;
            return out;
          }
          /**
           * @zh 提取矩阵的位移信息, 默认矩阵中的变换以 S->R->T 的顺序应用
           */

        }, {
          key: "getTranslation",
          value: function getTranslation(out, mat) {
            out.x = mat.m12;
            out.y = mat.m13;
            out.z = mat.m14;
            return out;
          }
          /**
           * @zh 提取矩阵的缩放信息, 默认矩阵中的变换以 S->R->T 的顺序应用
           */

        }, {
          key: "getScaling",
          value: function getScaling(out, mat) {
            var m00 = m3_1$1.m00 = mat.m00;
            var m01 = m3_1$1.m01 = mat.m01;
            var m02 = m3_1$1.m02 = mat.m02;
            var m04 = m3_1$1.m03 = mat.m04;
            var m05 = m3_1$1.m04 = mat.m05;
            var m06 = m3_1$1.m05 = mat.m06;
            var m08 = m3_1$1.m06 = mat.m08;
            var m09 = m3_1$1.m07 = mat.m09;
            var m10 = m3_1$1.m08 = mat.m10;
            out.x = Math.sqrt(m00 * m00 + m01 * m01 + m02 * m02);
            out.y = Math.sqrt(m04 * m04 + m05 * m05 + m06 * m06);
            out.z = Math.sqrt(m08 * m08 + m09 * m09 + m10 * m10); // account for refections

            if (Mat3.determinant(m3_1$1) < 0) {
              out.x *= -1;
            }

            return out;
          }
          /**
           * @zh 提取矩阵的旋转信息, 默认输入矩阵不含有缩放信息，如考虑缩放应使用 `toRTS` 函数。
           */

        }, {
          key: "getRotation",
          value: function getRotation(out, mat) {
            var trace = mat.m00 + mat.m05 + mat.m10;
            var S = 0;

            if (trace > 0) {
              S = Math.sqrt(trace + 1.0) * 2;
              out.w = 0.25 * S;
              out.x = (mat.m06 - mat.m09) / S;
              out.y = (mat.m08 - mat.m02) / S;
              out.z = (mat.m01 - mat.m04) / S;
            } else if (mat.m00 > mat.m05 && mat.m00 > mat.m10) {
              S = Math.sqrt(1.0 + mat.m00 - mat.m05 - mat.m10) * 2;
              out.w = (mat.m06 - mat.m09) / S;
              out.x = 0.25 * S;
              out.y = (mat.m01 + mat.m04) / S;
              out.z = (mat.m08 + mat.m02) / S;
            } else if (mat.m05 > mat.m10) {
              S = Math.sqrt(1.0 + mat.m05 - mat.m00 - mat.m10) * 2;
              out.w = (mat.m08 - mat.m02) / S;
              out.x = (mat.m01 + mat.m04) / S;
              out.y = 0.25 * S;
              out.z = (mat.m06 + mat.m09) / S;
            } else {
              S = Math.sqrt(1.0 + mat.m10 - mat.m00 - mat.m05) * 2;
              out.w = (mat.m01 - mat.m04) / S;
              out.x = (mat.m08 + mat.m02) / S;
              out.y = (mat.m06 + mat.m09) / S;
              out.z = 0.25 * S;
            }

            return out;
          }
          /**
           * @zh 提取旋转、位移、缩放信息， 默认矩阵中的变换以 S->R->T 的顺序应用
           */

        }, {
          key: "toRTS",
          value: function toRTS(m, q, v, s) {
            s.x = Vec3.set(v3_1$3, m.m00, m.m01, m.m02).length();
            m3_1$1.m00 = m.m00 / s.x;
            m3_1$1.m01 = m.m01 / s.x;
            m3_1$1.m02 = m.m02 / s.x;
            s.y = Vec3.set(v3_1$3, m.m04, m.m05, m.m06).length();
            m3_1$1.m03 = m.m04 / s.y;
            m3_1$1.m04 = m.m05 / s.y;
            m3_1$1.m05 = m.m06 / s.y;
            s.z = Vec3.set(v3_1$3, m.m08, m.m09, m.m10).length();
            m3_1$1.m06 = m.m08 / s.z;
            m3_1$1.m07 = m.m09 / s.z;
            m3_1$1.m08 = m.m10 / s.z;
            var det = Mat3.determinant(m3_1$1);

            if (det < 0) {
              s.x *= -1;
              m3_1$1.m00 *= -1;
              m3_1$1.m01 *= -1;
              m3_1$1.m02 *= -1;
            }

            Quat.fromMat3(q, m3_1$1); // already normalized

            Vec3.set(v, m.m12, m.m13, m.m14);
          }
          /**
           * @zh 根据旋转、位移、缩放信息计算矩阵，以 S->R->T 的顺序应用
           */

        }, {
          key: "fromRTS",
          value: function fromRTS(out, q, v, s) {
            var x = q.x,
                y = q.y,
                z = q.z,
                w = q.w;
            var x2 = x + x;
            var y2 = y + y;
            var z2 = z + z;
            var xx = x * x2;
            var xy = x * y2;
            var xz = x * z2;
            var yy = y * y2;
            var yz = y * z2;
            var zz = z * z2;
            var wx = w * x2;
            var wy = w * y2;
            var wz = w * z2;
            var sx = s.x;
            var sy = s.y;
            var sz = s.z;
            out.m00 = (1 - (yy + zz)) * sx;
            out.m01 = (xy + wz) * sx;
            out.m02 = (xz - wy) * sx;
            out.m03 = 0;
            out.m04 = (xy - wz) * sy;
            out.m05 = (1 - (xx + zz)) * sy;
            out.m06 = (yz + wx) * sy;
            out.m07 = 0;
            out.m08 = (xz + wy) * sz;
            out.m09 = (yz - wx) * sz;
            out.m10 = (1 - (xx + yy)) * sz;
            out.m11 = 0;
            out.m12 = v.x;
            out.m13 = v.y;
            out.m14 = v.z;
            out.m15 = 1;
            return out;
          }
          /**
           * @zh 根据指定的旋转、位移、缩放及变换中心信息计算矩阵，以 S->R->T 的顺序应用
           * @param q 旋转值
           * @param v 位移值
           * @param s 缩放值
           * @param o 指定变换中心
           */

        }, {
          key: "fromRTSOrigin",
          value: function fromRTSOrigin(out, q, v, s, o) {
            var x = q.x,
                y = q.y,
                z = q.z,
                w = q.w;
            var x2 = x + x;
            var y2 = y + y;
            var z2 = z + z;
            var xx = x * x2;
            var xy = x * y2;
            var xz = x * z2;
            var yy = y * y2;
            var yz = y * z2;
            var zz = z * z2;
            var wx = w * x2;
            var wy = w * y2;
            var wz = w * z2;
            var sx = s.x;
            var sy = s.y;
            var sz = s.z;
            var ox = o.x;
            var oy = o.y;
            var oz = o.z;
            out.m00 = (1 - (yy + zz)) * sx;
            out.m01 = (xy + wz) * sx;
            out.m02 = (xz - wy) * sx;
            out.m03 = 0;
            out.m04 = (xy - wz) * sy;
            out.m05 = (1 - (xx + zz)) * sy;
            out.m06 = (yz + wx) * sy;
            out.m07 = 0;
            out.m08 = (xz + wy) * sz;
            out.m09 = (yz - wx) * sz;
            out.m10 = (1 - (xx + yy)) * sz;
            out.m11 = 0;
            out.m12 = v.x + ox - (out.m00 * ox + out.m04 * oy + out.m08 * oz);
            out.m13 = v.y + oy - (out.m01 * ox + out.m05 * oy + out.m09 * oz);
            out.m14 = v.z + oz - (out.m02 * ox + out.m06 * oy + out.m10 * oz);
            out.m15 = 1;
            return out;
          }
          /**
           * @zh 根据指定的旋转信息计算矩阵
           */

        }, {
          key: "fromQuat",
          value: function fromQuat(out, q) {
            var x = q.x,
                y = q.y,
                z = q.z,
                w = q.w;
            var x2 = x + x;
            var y2 = y + y;
            var z2 = z + z;
            var xx = x * x2;
            var yx = y * x2;
            var yy = y * y2;
            var zx = z * x2;
            var zy = z * y2;
            var zz = z * z2;
            var wx = w * x2;
            var wy = w * y2;
            var wz = w * z2;
            out.m00 = 1 - yy - zz;
            out.m01 = yx + wz;
            out.m02 = zx - wy;
            out.m03 = 0;
            out.m04 = yx - wz;
            out.m05 = 1 - xx - zz;
            out.m06 = zy + wx;
            out.m07 = 0;
            out.m08 = zx + wy;
            out.m09 = zy - wx;
            out.m10 = 1 - xx - yy;
            out.m11 = 0;
            out.m12 = 0;
            out.m13 = 0;
            out.m14 = 0;
            out.m15 = 1;
            return out;
          }
          /**
           * @zh 根据指定的视锥体信息计算矩阵
           * @param left 左平面距离
           * @param right 右平面距离
           * @param bottom 下平面距离
           * @param top 上平面距离
           * @param near 近平面距离
           * @param far 远平面距离
           */

        }, {
          key: "frustum",
          value: function frustum(out, left, right, bottom, top, near, far) {
            var rl = 1 / (right - left);
            var tb = 1 / (top - bottom);
            var nf = 1 / (near - far);
            out.m00 = near * 2 * rl;
            out.m01 = 0;
            out.m02 = 0;
            out.m03 = 0;
            out.m04 = 0;
            out.m05 = near * 2 * tb;
            out.m06 = 0;
            out.m07 = 0;
            out.m08 = (right + left) * rl;
            out.m09 = (top + bottom) * tb;
            out.m10 = (far + near) * nf;
            out.m11 = -1;
            out.m12 = 0;
            out.m13 = 0;
            out.m14 = far * near * 2 * nf;
            out.m15 = 0;
            return out;
          }
          /**
           * @zh 计算透视投影矩阵
           * @param fovy 纵向视角高度
           * @param aspect 长宽比
           * @param near 近平面距离
           * @param far 远平面距离
           */

        }, {
          key: "perspective",
          value: function perspective(out, fov, aspect, near, far) {
            var isFOVY = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
            var minClipZ = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : -1;
            var projectionSignY = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
            var f = 1.0 / Math.tan(fov / 2);
            var nf = 1 / (near - far);
            out.m00 = isFOVY ? f / aspect : f;
            out.m01 = 0;
            out.m02 = 0;
            out.m03 = 0;
            out.m04 = 0;
            out.m05 = (isFOVY ? f : f * aspect) * projectionSignY;
            out.m06 = 0;
            out.m07 = 0;
            out.m08 = 0;
            out.m09 = 0;
            out.m10 = (far - minClipZ * near) * nf;
            out.m11 = -1;
            out.m12 = 0;
            out.m13 = 0;
            out.m14 = far * near * nf * (1 - minClipZ);
            out.m15 = 0;
            return out;
          }
          /**
           * @zh 计算正交投影矩阵
           * @param left 左平面距离
           * @param right 右平面距离
           * @param bottom 下平面距离
           * @param top 上平面距离
           * @param near 近平面距离
           * @param far 远平面距离
           */

        }, {
          key: "ortho",
          value: function ortho(out, left, right, bottom, top, near, far) {
            var minClipZ = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : -1;
            var projectionSignY = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;
            var lr = 1 / (left - right);
            var bt = 1 / (bottom - top);
            var nf = 1 / (near - far);
            out.m00 = -2 * lr;
            out.m01 = 0;
            out.m02 = 0;
            out.m03 = 0;
            out.m04 = 0;
            out.m05 = -2 * bt * projectionSignY;
            out.m06 = 0;
            out.m07 = 0;
            out.m08 = 0;
            out.m09 = 0;
            out.m10 = nf * (1 - minClipZ);
            out.m11 = 0;
            out.m12 = (left + right) * lr;
            out.m13 = (top + bottom) * bt;
            out.m14 = (near - minClipZ * far) * nf;
            out.m15 = 1;
            return out;
          }
          /**
           * @zh 根据视点计算矩阵，注意 `eye - center` 不能为零向量或与 `up` 向量平行
           * @param eye 当前位置
           * @param center 目标视点
           * @param up 视口上方向
           */

        }, {
          key: "lookAt",
          value: function lookAt(out, eye, center, up) {
            var eyex = eye.x;
            var eyey = eye.y;
            var eyez = eye.z;
            var upx = up.x;
            var upy = up.y;
            var upz = up.z;
            var centerx = center.x;
            var centery = center.y;
            var centerz = center.z;
            var z0 = eyex - centerx;
            var z1 = eyey - centery;
            var z2 = eyez - centerz;
            var len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
            z0 *= len;
            z1 *= len;
            z2 *= len;
            var x0 = upy * z2 - upz * z1;
            var x1 = upz * z0 - upx * z2;
            var x2 = upx * z1 - upy * z0;
            len = 1 / Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
            x0 *= len;
            x1 *= len;
            x2 *= len;
            var y0 = z1 * x2 - z2 * x1;
            var y1 = z2 * x0 - z0 * x2;
            var y2 = z0 * x1 - z1 * x0;
            out.m00 = x0;
            out.m01 = y0;
            out.m02 = z0;
            out.m03 = 0;
            out.m04 = x1;
            out.m05 = y1;
            out.m06 = z1;
            out.m07 = 0;
            out.m08 = x2;
            out.m09 = y2;
            out.m10 = z2;
            out.m11 = 0;
            out.m12 = -(x0 * eyex + x1 * eyey + x2 * eyez);
            out.m13 = -(y0 * eyex + y1 * eyey + y2 * eyez);
            out.m14 = -(z0 * eyex + z1 * eyey + z2 * eyez);
            out.m15 = 1;
            return out;
          }
          /**
           * @zh 计算逆转置矩阵
           */

        }, {
          key: "inverseTranspose",
          value: function inverseTranspose(out, a) {
            var a00 = a.m00;
            var a01 = a.m01;
            var a02 = a.m02;
            var a03 = a.m03;
            var a10 = a.m04;
            var a11 = a.m05;
            var a12 = a.m06;
            var a13 = a.m07;
            var a20 = a.m08;
            var a21 = a.m09;
            var a22 = a.m10;
            var a23 = a.m11;
            var a30 = a.m12;
            var a31 = a.m13;
            var a32 = a.m14;
            var a33 = a.m15;
            var b00 = a00 * a11 - a01 * a10;
            var b01 = a00 * a12 - a02 * a10;
            var b02 = a00 * a13 - a03 * a10;
            var b03 = a01 * a12 - a02 * a11;
            var b04 = a01 * a13 - a03 * a11;
            var b05 = a02 * a13 - a03 * a12;
            var b06 = a20 * a31 - a21 * a30;
            var b07 = a20 * a32 - a22 * a30;
            var b08 = a20 * a33 - a23 * a30;
            var b09 = a21 * a32 - a22 * a31;
            var b10 = a21 * a33 - a23 * a31;
            var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

            var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

            if (!det) {
              return null;
            }

            det = 1.0 / det;
            out.m00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
            out.m01 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
            out.m02 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
            out.m03 = 0;
            out.m04 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
            out.m05 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
            out.m06 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
            out.m07 = 0;
            out.m08 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
            out.m09 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
            out.m10 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
            out.m11 = 0;
            out.m12 = 0;
            out.m13 = 0;
            out.m14 = 0;
            out.m15 = 1;
            return out;
          }
          /**
           * @zh 矩阵转数组
           * @param ofs 数组内的起始偏移量
           */

        }, {
          key: "toArray",
          value: function toArray(out, m) {
            var ofs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            out[ofs + 0] = m.m00;
            out[ofs + 1] = m.m01;
            out[ofs + 2] = m.m02;
            out[ofs + 3] = m.m03;
            out[ofs + 4] = m.m04;
            out[ofs + 5] = m.m05;
            out[ofs + 6] = m.m06;
            out[ofs + 7] = m.m07;
            out[ofs + 8] = m.m08;
            out[ofs + 9] = m.m09;
            out[ofs + 10] = m.m10;
            out[ofs + 11] = m.m11;
            out[ofs + 12] = m.m12;
            out[ofs + 13] = m.m13;
            out[ofs + 14] = m.m14;
            out[ofs + 15] = m.m15;
            return out;
          }
          /**
           * @zh 数组转矩阵
           * @param ofs 数组起始偏移量
           */

        }, {
          key: "fromArray",
          value: function fromArray(out, arr) {
            var ofs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            out.m00 = arr[ofs + 0];
            out.m01 = arr[ofs + 1];
            out.m02 = arr[ofs + 2];
            out.m03 = arr[ofs + 3];
            out.m04 = arr[ofs + 4];
            out.m05 = arr[ofs + 5];
            out.m06 = arr[ofs + 6];
            out.m07 = arr[ofs + 7];
            out.m08 = arr[ofs + 8];
            out.m09 = arr[ofs + 9];
            out.m10 = arr[ofs + 10];
            out.m11 = arr[ofs + 11];
            out.m12 = arr[ofs + 12];
            out.m13 = arr[ofs + 13];
            out.m14 = arr[ofs + 14];
            out.m15 = arr[ofs + 15];
            return out;
          }
          /**
           * @zh 逐元素矩阵加法
           */

        }, {
          key: "add",
          value: function add(out, a, b) {
            out.m00 = a.m00 + b.m00;
            out.m01 = a.m01 + b.m01;
            out.m02 = a.m02 + b.m02;
            out.m03 = a.m03 + b.m03;
            out.m04 = a.m04 + b.m04;
            out.m05 = a.m05 + b.m05;
            out.m06 = a.m06 + b.m06;
            out.m07 = a.m07 + b.m07;
            out.m08 = a.m08 + b.m08;
            out.m09 = a.m09 + b.m09;
            out.m10 = a.m10 + b.m10;
            out.m11 = a.m11 + b.m11;
            out.m12 = a.m12 + b.m12;
            out.m13 = a.m13 + b.m13;
            out.m14 = a.m14 + b.m14;
            out.m15 = a.m15 + b.m15;
            return out;
          }
          /**
           * @zh 逐元素矩阵减法
           */

        }, {
          key: "subtract",
          value: function subtract(out, a, b) {
            out.m00 = a.m00 - b.m00;
            out.m01 = a.m01 - b.m01;
            out.m02 = a.m02 - b.m02;
            out.m03 = a.m03 - b.m03;
            out.m04 = a.m04 - b.m04;
            out.m05 = a.m05 - b.m05;
            out.m06 = a.m06 - b.m06;
            out.m07 = a.m07 - b.m07;
            out.m08 = a.m08 - b.m08;
            out.m09 = a.m09 - b.m09;
            out.m10 = a.m10 - b.m10;
            out.m11 = a.m11 - b.m11;
            out.m12 = a.m12 - b.m12;
            out.m13 = a.m13 - b.m13;
            out.m14 = a.m14 - b.m14;
            out.m15 = a.m15 - b.m15;
            return out;
          }
          /**
           * @zh 矩阵标量乘法
           */

        }, {
          key: "multiplyScalar",
          value: function multiplyScalar(out, a, b) {
            out.m00 = a.m00 * b;
            out.m01 = a.m01 * b;
            out.m02 = a.m02 * b;
            out.m03 = a.m03 * b;
            out.m04 = a.m04 * b;
            out.m05 = a.m05 * b;
            out.m06 = a.m06 * b;
            out.m07 = a.m07 * b;
            out.m08 = a.m08 * b;
            out.m09 = a.m09 * b;
            out.m10 = a.m10 * b;
            out.m11 = a.m11 * b;
            out.m12 = a.m12 * b;
            out.m13 = a.m13 * b;
            out.m14 = a.m14 * b;
            out.m15 = a.m15 * b;
            return out;
          }
          /**
           * @zh 逐元素矩阵标量乘加: A + B * scale
           */

        }, {
          key: "multiplyScalarAndAdd",
          value: function multiplyScalarAndAdd(out, a, b, scale) {
            out.m00 = a.m00 + b.m00 * scale;
            out.m01 = a.m01 + b.m01 * scale;
            out.m02 = a.m02 + b.m02 * scale;
            out.m03 = a.m03 + b.m03 * scale;
            out.m04 = a.m04 + b.m04 * scale;
            out.m05 = a.m05 + b.m05 * scale;
            out.m06 = a.m06 + b.m06 * scale;
            out.m07 = a.m07 + b.m07 * scale;
            out.m08 = a.m08 + b.m08 * scale;
            out.m09 = a.m09 + b.m09 * scale;
            out.m10 = a.m10 + b.m10 * scale;
            out.m11 = a.m11 + b.m11 * scale;
            out.m12 = a.m12 + b.m12 * scale;
            out.m13 = a.m13 + b.m13 * scale;
            out.m14 = a.m14 + b.m14 * scale;
            out.m15 = a.m15 + b.m15 * scale;
            return out;
          }
          /**
           * @zh 矩阵等价判断
           */

        }, {
          key: "strictEquals",
          value: function strictEquals(a, b) {
            return a.m00 === b.m00 && a.m01 === b.m01 && a.m02 === b.m02 && a.m03 === b.m03 && a.m04 === b.m04 && a.m05 === b.m05 && a.m06 === b.m06 && a.m07 === b.m07 && a.m08 === b.m08 && a.m09 === b.m09 && a.m10 === b.m10 && a.m11 === b.m11 && a.m12 === b.m12 && a.m13 === b.m13 && a.m14 === b.m14 && a.m15 === b.m15;
          }
          /**
           * @zh 排除浮点数误差的矩阵近似等价判断
           */

        }, {
          key: "equals",
          value: function equals(a, b) {
            var epsilon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EPSILON;
            // TAOCP vol.2, 3rd ed., s.4.2.4, p.213-225
            // defines a 'close enough' relationship between u and v that scales for magnitude
            return Math.abs(a.m00 - b.m00) <= epsilon * Math.max(1.0, Math.abs(a.m00), Math.abs(b.m00)) && Math.abs(a.m01 - b.m01) <= epsilon * Math.max(1.0, Math.abs(a.m01), Math.abs(b.m01)) && Math.abs(a.m02 - b.m02) <= epsilon * Math.max(1.0, Math.abs(a.m02), Math.abs(b.m02)) && Math.abs(a.m03 - b.m03) <= epsilon * Math.max(1.0, Math.abs(a.m03), Math.abs(b.m03)) && Math.abs(a.m04 - b.m04) <= epsilon * Math.max(1.0, Math.abs(a.m04), Math.abs(b.m04)) && Math.abs(a.m05 - b.m05) <= epsilon * Math.max(1.0, Math.abs(a.m05), Math.abs(b.m05)) && Math.abs(a.m06 - b.m06) <= epsilon * Math.max(1.0, Math.abs(a.m06), Math.abs(b.m06)) && Math.abs(a.m07 - b.m07) <= epsilon * Math.max(1.0, Math.abs(a.m07), Math.abs(b.m07)) && Math.abs(a.m08 - b.m08) <= epsilon * Math.max(1.0, Math.abs(a.m08), Math.abs(b.m08)) && Math.abs(a.m09 - b.m09) <= epsilon * Math.max(1.0, Math.abs(a.m09), Math.abs(b.m09)) && Math.abs(a.m10 - b.m10) <= epsilon * Math.max(1.0, Math.abs(a.m10), Math.abs(b.m10)) && Math.abs(a.m11 - b.m11) <= epsilon * Math.max(1.0, Math.abs(a.m11), Math.abs(b.m11)) && Math.abs(a.m12 - b.m12) <= epsilon * Math.max(1.0, Math.abs(a.m12), Math.abs(b.m12)) && Math.abs(a.m13 - b.m13) <= epsilon * Math.max(1.0, Math.abs(a.m13), Math.abs(b.m13)) && Math.abs(a.m14 - b.m14) <= epsilon * Math.max(1.0, Math.abs(a.m14), Math.abs(b.m14)) && Math.abs(a.m15 - b.m15) <= epsilon * Math.max(1.0, Math.abs(a.m15), Math.abs(b.m15));
          }
          /**
           * 矩阵第 0 列第 0 行的元素。
           */

        }]);

        function Mat4() {
          var _this;

          var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var m01 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var m02 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var m03 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var m04 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
          var m05 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
          var m06 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
          var m07 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
          var m08 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
          var m09 = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
          var m10 = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 1;
          var m11 = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 0;
          var m12 = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : 0;
          var m13 = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : 0;
          var m14 = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 0;
          var m15 = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : 1;

          _classCallCheck(this, Mat4);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Mat4).call(this));
          _this.m00 = void 0;
          _this.m01 = void 0;
          _this.m02 = void 0;
          _this.m03 = void 0;
          _this.m04 = void 0;
          _this.m05 = void 0;
          _this.m06 = void 0;
          _this.m07 = void 0;
          _this.m08 = void 0;
          _this.m09 = void 0;
          _this.m10 = void 0;
          _this.m11 = void 0;
          _this.m12 = void 0;
          _this.m13 = void 0;
          _this.m14 = void 0;
          _this.m15 = void 0;

          if (_typeof(m00) === 'object') {
            _this.m00 = m00.m00;
            _this.m01 = m00.m01;
            _this.m02 = m00.m02;
            _this.m03 = m00.m03;
            _this.m04 = m00.m04;
            _this.m05 = m00.m05;
            _this.m06 = m00.m06;
            _this.m07 = m00.m07;
            _this.m08 = m00.m08;
            _this.m09 = m00.m09;
            _this.m10 = m00.m10;
            _this.m11 = m00.m11;
            _this.m12 = m00.m12;
            _this.m13 = m00.m13;
            _this.m14 = m00.m14;
            _this.m15 = m00.m15;
          } else {
            _this.m00 = m00;
            _this.m01 = m01;
            _this.m02 = m02;
            _this.m03 = m03;
            _this.m04 = m04;
            _this.m05 = m05;
            _this.m06 = m06;
            _this.m07 = m07;
            _this.m08 = m08;
            _this.m09 = m09;
            _this.m10 = m10;
            _this.m11 = m11;
            _this.m12 = m12;
            _this.m13 = m13;
            _this.m14 = m14;
            _this.m15 = m15;
          }

          return _this;
        }
        /**
         * @zh 克隆当前矩阵。
         */


        _createClass(Mat4, [{
          key: "clone",
          value: function clone() {
            var t = this;
            return new Mat4(t.m00, t.m01, t.m02, t.m03, t.m04, t.m05, t.m06, t.m07, t.m08, t.m09, t.m10, t.m11, t.m12, t.m13, t.m14, t.m15);
          }
          /**
           * @zh 设置当前矩阵使其与指定矩阵相等。
           * @param other 相比较的矩阵。
           * @return this
           */

        }, {
          key: "set",
          value: function set() {
            var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var m01 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var m02 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var m03 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var m04 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
            var m05 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
            var m06 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
            var m07 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
            var m08 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
            var m09 = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
            var m10 = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 1;
            var m11 = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 0;
            var m12 = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : 0;
            var m13 = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : 0;
            var m14 = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 0;
            var m15 = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : 1;

            if (_typeof(m00) === 'object') {
              this.m01 = m00.m01;
              this.m02 = m00.m02;
              this.m03 = m00.m03;
              this.m04 = m00.m04;
              this.m05 = m00.m05;
              this.m06 = m00.m06;
              this.m07 = m00.m07;
              this.m08 = m00.m08;
              this.m09 = m00.m09;
              this.m10 = m00.m10;
              this.m11 = m00.m11;
              this.m12 = m00.m12;
              this.m13 = m00.m13;
              this.m14 = m00.m14;
              this.m15 = m00.m15;
              this.m00 = m00.m00;
            } else {
              this.m01 = m01;
              this.m02 = m02;
              this.m03 = m03;
              this.m04 = m04;
              this.m05 = m05;
              this.m06 = m06;
              this.m07 = m07;
              this.m08 = m08;
              this.m09 = m09;
              this.m10 = m10;
              this.m11 = m11;
              this.m12 = m12;
              this.m13 = m13;
              this.m14 = m14;
              this.m15 = m15;
              this.m00 = m00;
            }

            return this;
          }
          /**
           * @zh 判断当前矩阵是否在误差范围内与指定矩阵相等。
           * @param other 相比较的矩阵。
           * @param epsilon 允许的误差，应为非负数。
           * @return 两矩阵的各元素都分别相等时返回 `true`；否则返回 `false`。
           */

        }, {
          key: "equals",
          value: function equals(other) {
            var epsilon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPSILON;
            return Math.abs(this.m00 - other.m00) <= epsilon * Math.max(1.0, Math.abs(this.m00), Math.abs(other.m00)) && Math.abs(this.m01 - other.m01) <= epsilon * Math.max(1.0, Math.abs(this.m01), Math.abs(other.m01)) && Math.abs(this.m02 - other.m02) <= epsilon * Math.max(1.0, Math.abs(this.m02), Math.abs(other.m02)) && Math.abs(this.m03 - other.m03) <= epsilon * Math.max(1.0, Math.abs(this.m03), Math.abs(other.m03)) && Math.abs(this.m04 - other.m04) <= epsilon * Math.max(1.0, Math.abs(this.m04), Math.abs(other.m04)) && Math.abs(this.m05 - other.m05) <= epsilon * Math.max(1.0, Math.abs(this.m05), Math.abs(other.m05)) && Math.abs(this.m06 - other.m06) <= epsilon * Math.max(1.0, Math.abs(this.m06), Math.abs(other.m06)) && Math.abs(this.m07 - other.m07) <= epsilon * Math.max(1.0, Math.abs(this.m07), Math.abs(other.m07)) && Math.abs(this.m08 - other.m08) <= epsilon * Math.max(1.0, Math.abs(this.m08), Math.abs(other.m08)) && Math.abs(this.m09 - other.m09) <= epsilon * Math.max(1.0, Math.abs(this.m09), Math.abs(other.m09)) && Math.abs(this.m10 - other.m10) <= epsilon * Math.max(1.0, Math.abs(this.m10), Math.abs(other.m10)) && Math.abs(this.m11 - other.m11) <= epsilon * Math.max(1.0, Math.abs(this.m11), Math.abs(other.m11)) && Math.abs(this.m12 - other.m12) <= epsilon * Math.max(1.0, Math.abs(this.m12), Math.abs(other.m12)) && Math.abs(this.m13 - other.m13) <= epsilon * Math.max(1.0, Math.abs(this.m13), Math.abs(other.m13)) && Math.abs(this.m14 - other.m14) <= epsilon * Math.max(1.0, Math.abs(this.m14), Math.abs(other.m14)) && Math.abs(this.m15 - other.m15) <= epsilon * Math.max(1.0, Math.abs(this.m15), Math.abs(other.m15));
          }
          /**
           * @zh 判断当前矩阵是否与指定矩阵相等。
           * @param other 相比较的矩阵。
           * @return 两矩阵的各元素都分别相等时返回 `true`；否则返回 `false`。
           */

        }, {
          key: "strictEquals",
          value: function strictEquals(other) {
            return this.m00 === other.m00 && this.m01 === other.m01 && this.m02 === other.m02 && this.m03 === other.m03 && this.m04 === other.m04 && this.m05 === other.m05 && this.m06 === other.m06 && this.m07 === other.m07 && this.m08 === other.m08 && this.m09 === other.m09 && this.m10 === other.m10 && this.m11 === other.m11 && this.m12 === other.m12 && this.m13 === other.m13 && this.m14 === other.m14 && this.m15 === other.m15;
          }
          /**
           * 返回当前矩阵的字符串表示。
           * @return 当前矩阵的字符串表示。
           */

        }, {
          key: "toString",
          value: function toString() {
            return '[\n' + this.m00 + ', ' + this.m01 + ', ' + this.m02 + ', ' + this.m03 + ',\n' + this.m04 + ', ' + this.m05 + ', ' + this.m06 + ', ' + this.m07 + ',\n' + this.m08 + ', ' + this.m09 + ', ' + this.m10 + ', ' + this.m11 + ',\n' + this.m12 + ', ' + this.m13 + ', ' + this.m14 + ', ' + this.m15 + '\n' + ']';
          }
          /**
           * 将当前矩阵设为单位矩阵。
           * @return `this`
           */

        }, {
          key: "identity",
          value: function identity() {
            this.m00 = 1;
            this.m01 = 0;
            this.m02 = 0;
            this.m03 = 0;
            this.m04 = 0;
            this.m05 = 1;
            this.m06 = 0;
            this.m07 = 0;
            this.m08 = 0;
            this.m09 = 0;
            this.m10 = 1;
            this.m11 = 0;
            this.m12 = 0;
            this.m13 = 0;
            this.m14 = 0;
            this.m15 = 1;
            return this;
          }
          /**
           * @zh 计算当前矩阵的转置矩阵。
           */

        }, {
          key: "transpose",
          value: function transpose() {
            var a01 = this.m01,
                a02 = this.m02,
                a03 = this.m03,
                a12 = this.m06,
                a13 = this.m07,
                a23 = this.m11;
            this.m01 = this.m04;
            this.m02 = this.m08;
            this.m03 = this.m12;
            this.m04 = a01;
            this.m06 = this.m09;
            this.m07 = this.m13;
            this.m08 = a02;
            this.m09 = a12;
            this.m11 = this.m14;
            this.m12 = a03;
            this.m13 = a13;
            this.m14 = a23;
            return this;
          }
          /**
           * @zh 计算当前矩阵的逆矩阵。注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。
           */

        }, {
          key: "invert",
          value: function invert() {
            var a00 = this.m00;
            var a01 = this.m01;
            var a02 = this.m02;
            var a03 = this.m03;
            var a10 = this.m04;
            var a11 = this.m05;
            var a12 = this.m06;
            var a13 = this.m07;
            var a20 = this.m08;
            var a21 = this.m09;
            var a22 = this.m10;
            var a23 = this.m11;
            var a30 = this.m12;
            var a31 = this.m13;
            var a32 = this.m14;
            var a33 = this.m15;
            var b00 = a00 * a11 - a01 * a10;
            var b01 = a00 * a12 - a02 * a10;
            var b02 = a00 * a13 - a03 * a10;
            var b03 = a01 * a12 - a02 * a11;
            var b04 = a01 * a13 - a03 * a11;
            var b05 = a02 * a13 - a03 * a12;
            var b06 = a20 * a31 - a21 * a30;
            var b07 = a20 * a32 - a22 * a30;
            var b08 = a20 * a33 - a23 * a30;
            var b09 = a21 * a32 - a22 * a31;
            var b10 = a21 * a33 - a23 * a31;
            var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

            var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

            if (det === 0) {
              this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
              return this;
            }

            det = 1.0 / det;
            this.m00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
            this.m01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
            this.m02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
            this.m03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
            this.m04 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
            this.m05 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
            this.m06 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
            this.m07 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
            this.m08 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
            this.m09 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
            this.m10 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
            this.m11 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
            this.m12 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
            this.m13 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
            this.m14 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
            this.m15 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
            return this;
          }
          /**
           * 计算当前矩阵的行列式。
           * @return 当前矩阵的行列式。
           */

        }, {
          key: "determinant",
          value: function determinant() {
            var a00 = this.m00;
            var a01 = this.m01;
            var a02 = this.m02;
            var a03 = this.m03;
            var a10 = this.m04;
            var a11 = this.m05;
            var a12 = this.m06;
            var a13 = this.m07;
            var a20 = this.m08;
            var a21 = this.m09;
            var a22 = this.m10;
            var a23 = this.m11;
            var a30 = this.m12;
            var a31 = this.m13;
            var a32 = this.m14;
            var a33 = this.m15;
            var b00 = a00 * a11 - a01 * a10;
            var b01 = a00 * a12 - a02 * a10;
            var b02 = a00 * a13 - a03 * a10;
            var b03 = a01 * a12 - a02 * a11;
            var b04 = a01 * a13 - a03 * a11;
            var b05 = a02 * a13 - a03 * a12;
            var b06 = a20 * a31 - a21 * a30;
            var b07 = a20 * a32 - a22 * a30;
            var b08 = a20 * a33 - a23 * a30;
            var b09 = a21 * a32 - a22 * a31;
            var b10 = a21 * a33 - a23 * a31;
            var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

            return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
          }
          /**
           * @zh 矩阵加法。将当前矩阵与指定矩阵的相加，结果返回给当前矩阵。
           * @param mat 相加的矩阵
           */

        }, {
          key: "add",
          value: function add(mat) {
            this.m00 = this.m00 + mat.m00;
            this.m01 = this.m01 + mat.m01;
            this.m02 = this.m02 + mat.m02;
            this.m03 = this.m03 + mat.m03;
            this.m04 = this.m04 + mat.m04;
            this.m05 = this.m05 + mat.m05;
            this.m06 = this.m06 + mat.m06;
            this.m07 = this.m07 + mat.m07;
            this.m08 = this.m08 + mat.m08;
            this.m09 = this.m09 + mat.m09;
            this.m10 = this.m10 + mat.m10;
            this.m11 = this.m11 + mat.m11;
            this.m12 = this.m12 + mat.m12;
            this.m13 = this.m13 + mat.m13;
            this.m14 = this.m14 + mat.m14;
            this.m15 = this.m15 + mat.m15;
            return this;
          }
          /**
           * @zh 计算矩阵减法。将当前矩阵减去指定矩阵的结果赋值给当前矩阵。
           * @param mat 减数矩阵。
           */

        }, {
          key: "subtract",
          value: function subtract(mat) {
            this.m00 = this.m00 - mat.m00;
            this.m01 = this.m01 - mat.m01;
            this.m02 = this.m02 - mat.m02;
            this.m03 = this.m03 - mat.m03;
            this.m04 = this.m04 - mat.m04;
            this.m05 = this.m05 - mat.m05;
            this.m06 = this.m06 - mat.m06;
            this.m07 = this.m07 - mat.m07;
            this.m08 = this.m08 - mat.m08;
            this.m09 = this.m09 - mat.m09;
            this.m10 = this.m10 - mat.m10;
            this.m11 = this.m11 - mat.m11;
            this.m12 = this.m12 - mat.m12;
            this.m13 = this.m13 - mat.m13;
            this.m14 = this.m14 - mat.m14;
            this.m15 = this.m15 - mat.m15;
            return this;
          }
          /**
           * @zh 矩阵乘法。将当前矩阵左乘指定矩阵的结果赋值给当前矩阵。
           * @param mat 指定的矩阵。
           */

        }, {
          key: "multiply",
          value: function multiply(mat) {
            var a00 = this.m00;
            var a01 = this.m01;
            var a02 = this.m02;
            var a03 = this.m03;
            var a10 = this.m04;
            var a11 = this.m05;
            var a12 = this.m06;
            var a13 = this.m07;
            var a20 = this.m08;
            var a21 = this.m09;
            var a22 = this.m10;
            var a23 = this.m11;
            var a30 = this.m12;
            var a31 = this.m13;
            var a32 = this.m14;
            var a33 = this.m15; // Cache only the current line of the second matrix

            var b0 = mat.m00,
                b1 = mat.m01,
                b2 = mat.m02,
                b3 = mat.m03;
            this.m00 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            this.m01 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            this.m02 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            this.m03 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = mat.m04;
            b1 = mat.m05;
            b2 = mat.m06;
            b3 = mat.m07;
            this.m04 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            this.m05 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            this.m06 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            this.m07 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = mat.m08;
            b1 = mat.m09;
            b2 = mat.m10;
            b3 = mat.m11;
            this.m08 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            this.m09 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            this.m10 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            this.m11 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = mat.m12;
            b1 = mat.m13;
            b2 = mat.m14;
            b3 = mat.m15;
            this.m12 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            this.m13 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            this.m14 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            this.m15 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            return this;
          }
          /**
           * @zh 矩阵数乘。将当前矩阵与指定标量的数乘结果赋值给当前矩阵。
           * @param scalar 指定的标量。
           */

        }, {
          key: "multiplyScalar",
          value: function multiplyScalar(scalar) {
            this.m00 = this.m00 * scalar;
            this.m01 = this.m01 * scalar;
            this.m02 = this.m02 * scalar;
            this.m03 = this.m03 * scalar;
            this.m04 = this.m04 * scalar;
            this.m05 = this.m05 * scalar;
            this.m06 = this.m06 * scalar;
            this.m07 = this.m07 * scalar;
            this.m08 = this.m08 * scalar;
            this.m09 = this.m09 * scalar;
            this.m10 = this.m10 * scalar;
            this.m11 = this.m11 * scalar;
            this.m12 = this.m12 * scalar;
            this.m13 = this.m13 * scalar;
            this.m14 = this.m14 * scalar;
            this.m15 = this.m15 * scalar;
            return this;
          }
          /**
           * @zh 将当前矩阵左乘位移矩阵的结果赋值给当前矩阵，位移矩阵由各个轴的位移给出。
           * @param vec 位移向量。
           */

        }, {
          key: "translate",
          value: function translate(vec) {
            console.warn('function changed');
            this.m12 += vec.x;
            this.m13 += vec.y;
            this.m14 += vec.z;
            return this;
          }
          /**
           * @zh 将当前矩阵左乘缩放矩阵的结果赋值给当前矩阵，缩放矩阵由各个轴的缩放给出。
           * @param vec 各个轴的缩放。
           */

        }, {
          key: "scale",
          value: function scale(vec) {
            var x = vec.x,
                y = vec.y,
                z = vec.z;
            this.m00 = this.m00 * x;
            this.m01 = this.m01 * x;
            this.m02 = this.m02 * x;
            this.m03 = this.m03 * x;
            this.m04 = this.m04 * y;
            this.m05 = this.m05 * y;
            this.m06 = this.m06 * y;
            this.m07 = this.m07 * y;
            this.m08 = this.m08 * z;
            this.m09 = this.m09 * z;
            this.m10 = this.m10 * z;
            this.m11 = this.m11 * z;
            this.m12 = this.m12;
            this.m13 = this.m13;
            this.m14 = this.m14;
            this.m15 = this.m15;
            return this;
          }
          /**
           * @zh 将当前矩阵左乘旋转矩阵的结果赋值给当前矩阵，旋转矩阵由旋转轴和旋转角度给出。
           * @param mat 矩阵
           * @param rad 旋转角度（弧度制）
           * @param axis 旋转轴
           */

        }, {
          key: "rotate",
          value: function rotate(rad, axis) {
            var x = axis.x,
                y = axis.y,
                z = axis.z;
            var len = Math.sqrt(x * x + y * y + z * z);

            if (Math.abs(len) < EPSILON) {
              return null;
            }

            len = 1 / len;
            x *= len;
            y *= len;
            z *= len;
            var s = Math.sin(rad);
            var c = Math.cos(rad);
            var t = 1 - c;
            var a00 = this.m00;
            var a01 = this.m01;
            var a02 = this.m02;
            var a03 = this.m03;
            var a10 = this.m04;
            var a11 = this.m05;
            var a12 = this.m06;
            var a13 = this.m07;
            var a20 = this.m08;
            var a21 = this.m09;
            var a22 = this.m10;
            var a23 = this.m11; // Construct the elements of the rotation matrix

            var b00 = x * x * t + c,
                b01 = y * x * t + z * s,
                b02 = z * x * t - y * s;
            var b10 = x * y * t - z * s,
                b11 = y * y * t + c,
                b12 = z * y * t + x * s;
            var b20 = x * z * t + y * s,
                b21 = y * z * t - x * s,
                b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

            this.m00 = a00 * b00 + a10 * b01 + a20 * b02;
            this.m01 = a01 * b00 + a11 * b01 + a21 * b02;
            this.m02 = a02 * b00 + a12 * b01 + a22 * b02;
            this.m03 = a03 * b00 + a13 * b01 + a23 * b02;
            this.m04 = a00 * b10 + a10 * b11 + a20 * b12;
            this.m05 = a01 * b10 + a11 * b11 + a21 * b12;
            this.m06 = a02 * b10 + a12 * b11 + a22 * b12;
            this.m07 = a03 * b10 + a13 * b11 + a23 * b12;
            this.m08 = a00 * b20 + a10 * b21 + a20 * b22;
            this.m09 = a01 * b20 + a11 * b21 + a21 * b22;
            this.m10 = a02 * b20 + a12 * b21 + a22 * b22;
            this.m11 = a03 * b20 + a13 * b21 + a23 * b22;
            return this;
          }
          /**
           * @zh 从当前矩阵中计算出位移变换的部分，并以各个轴上位移的形式赋值给出口向量。
           * @param out 返回向量，当未指定时将创建为新的向量。
           */

        }, {
          key: "getTranslation",
          value: function getTranslation(out) {
            out.x = this.m12;
            out.y = this.m13;
            out.z = this.m14;
            return out;
          }
          /**
           * @zh 从当前矩阵中计算出缩放变换的部分，并以各个轴上缩放的形式赋值给出口向量。
           * @param out 返回值，当未指定时将创建为新的向量。
           */

        }, {
          key: "getScale",
          value: function getScale(out) {
            var m00 = m3_1$1.m00 = this.m00;
            var m01 = m3_1$1.m01 = this.m01;
            var m02 = m3_1$1.m02 = this.m02;
            var m04 = m3_1$1.m03 = this.m04;
            var m05 = m3_1$1.m04 = this.m05;
            var m06 = m3_1$1.m05 = this.m06;
            var m08 = m3_1$1.m06 = this.m08;
            var m09 = m3_1$1.m07 = this.m09;
            var m10 = m3_1$1.m08 = this.m10;
            out.x = Math.sqrt(m00 * m00 + m01 * m01 + m02 * m02);
            out.y = Math.sqrt(m04 * m04 + m05 * m05 + m06 * m06);
            out.z = Math.sqrt(m08 * m08 + m09 * m09 + m10 * m10); // account for refections

            if (Mat3.determinant(m3_1$1) < 0) {
              out.x *= -1;
            }

            return out;
          }
          /**
           * @zh 从当前矩阵中计算出旋转变换的部分，并以四元数的形式赋值给出口四元数。
           * @param out 返回值，当未指定时将创建为新的四元数。
           */

        }, {
          key: "getRotation",
          value: function getRotation(out) {
            var trace = this.m00 + this.m05 + this.m10;
            var S = 0;

            if (trace > 0) {
              S = Math.sqrt(trace + 1.0) * 2;
              out.w = 0.25 * S;
              out.x = (this.m06 - this.m09) / S;
              out.y = (this.m08 - this.m02) / S;
              out.z = (this.m01 - this.m04) / S;
            } else if (this.m00 > this.m05 && this.m00 > this.m10) {
              S = Math.sqrt(1.0 + this.m00 - this.m05 - this.m10) * 2;
              out.w = (this.m06 - this.m09) / S;
              out.x = 0.25 * S;
              out.y = (this.m01 + this.m04) / S;
              out.z = (this.m08 + this.m02) / S;
            } else if (this.m05 > this.m10) {
              S = Math.sqrt(1.0 + this.m05 - this.m00 - this.m10) * 2;
              out.w = (this.m08 - this.m02) / S;
              out.x = (this.m01 + this.m04) / S;
              out.y = 0.25 * S;
              out.z = (this.m06 + this.m09) / S;
            } else {
              S = Math.sqrt(1.0 + this.m10 - this.m00 - this.m05) * 2;
              out.w = (this.m01 - this.m04) / S;
              out.x = (this.m08 + this.m02) / S;
              out.y = (this.m06 + this.m09) / S;
              out.z = 0.25 * S;
            }

            return out;
          }
          /**
           * @zh 重置当前矩阵的值，使其表示指定的旋转、缩放、位移依次组合的变换。
           * @param q 四元数表示的旋转变换。
           * @param v 位移变换，表示为各个轴的位移。
           * @param s 缩放变换，表示为各个轴的缩放。
           * @return `this`
           */

        }, {
          key: "fromRTS",
          value: function fromRTS(q, v, s) {
            var x = q.x,
                y = q.y,
                z = q.z,
                w = q.w;
            var x2 = x + x;
            var y2 = y + y;
            var z2 = z + z;
            var xx = x * x2;
            var xy = x * y2;
            var xz = x * z2;
            var yy = y * y2;
            var yz = y * z2;
            var zz = z * z2;
            var wx = w * x2;
            var wy = w * y2;
            var wz = w * z2;
            var sx = s.x;
            var sy = s.y;
            var sz = s.z;
            this.m00 = (1 - (yy + zz)) * sx;
            this.m01 = (xy + wz) * sx;
            this.m02 = (xz - wy) * sx;
            this.m03 = 0;
            this.m04 = (xy - wz) * sy;
            this.m05 = (1 - (xx + zz)) * sy;
            this.m06 = (yz + wx) * sy;
            this.m07 = 0;
            this.m08 = (xz + wy) * sz;
            this.m09 = (yz - wx) * sz;
            this.m10 = (1 - (xx + yy)) * sz;
            this.m11 = 0;
            this.m12 = v.x;
            this.m13 = v.y;
            this.m14 = v.z;
            this.m15 = 1;
            return this;
          }
          /**
           * @zh 重置当前矩阵的值，使其表示指定四元数表示的旋转变换。
           * @param q 四元数表示的旋转变换。
           * @return `this`
           */

        }, {
          key: "fromQuat",
          value: function fromQuat(q) {
            var x = q.x,
                y = q.y,
                z = q.z,
                w = q.w;
            var x2 = x + x;
            var y2 = y + y;
            var z2 = z + z;
            var xx = x * x2;
            var yx = y * x2;
            var yy = y * y2;
            var zx = z * x2;
            var zy = z * y2;
            var zz = z * z2;
            var wx = w * x2;
            var wy = w * y2;
            var wz = w * z2;
            this.m00 = 1 - yy - zz;
            this.m01 = yx + wz;
            this.m02 = zx - wy;
            this.m03 = 0;
            this.m04 = yx - wz;
            this.m05 = 1 - xx - zz;
            this.m06 = zy + wx;
            this.m07 = 0;
            this.m08 = zx + wy;
            this.m09 = zy - wx;
            this.m10 = 1 - xx - yy;
            this.m11 = 0;
            this.m12 = 0;
            this.m13 = 0;
            this.m14 = 0;
            this.m15 = 1;
            return this;
          }
        }]);

        return Mat4;
      }(ValueType));
      Mat4.IDENTITY = Object.freeze(new Mat4());
      var v3_1$3 = new Vec3();
      var m3_1$1 = new Mat3();
      CCClass.fastDefine('cc.Mat4', Mat4, {
        m00: 1,
        m01: 0,
        m02: 0,
        m03: 0,
        m04: 0,
        m05: 1,
        m06: 0,
        m07: 0,
        m08: 0,
        m09: 0,
        m10: 1,
        m11: 0,
        m12: 0,
        m13: 0,
        m14: 0,
        m15: 1
      });
      legacyCC.Mat4 = Mat4;
      function mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        return new Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
      }
      legacyCC.mat4 = mat4;

      /**
       * 二维仿射变换矩阵，描述了平移、缩放和缩放。
       */

      var AffineTransform = exports('S', /*#__PURE__*/function () {
        _createClass(AffineTransform, null, [{
          key: "identity",

          /**
           * 创建单位二维仿射变换矩阵，它不进行任何变换。
           */
          value: function identity() {
            return new AffineTransform();
          }
          /**
           * 克隆指定的二维仿射变换矩阵。
           * @param affineTransform 指定的二维仿射变换矩阵。
           */

        }, {
          key: "clone",
          value: function clone(affineTransform) {
            return new AffineTransform(affineTransform.a, affineTransform.b, affineTransform.c, affineTransform.d, affineTransform.tx, affineTransform.ty);
          }
          /**
           * 将两个矩阵相乘的结果赋值给出口矩阵。
           * @param out 出口矩阵。
           * @param t1 左矩阵。
           * @param t2 右矩阵。
           */

        }, {
          key: "concat",
          value: function concat(out, t1, t2) {
            var a = t1.a;
            var b = t1.b;
            var c = t1.c;
            var d = t1.d;
            var tx = t1.tx;
            var ty = t1.ty;
            out.a = a * t2.a + b * t2.c;
            out.b = a * t2.b + b * t2.d;
            out.c = c * t2.a + d * t2.c;
            out.d = c * t2.b + d * t2.d;
            out.tx = tx * t2.a + ty * t2.c + t2.tx;
            out.ty = tx * t2.b + ty * t2.d + t2.ty;
          }
          /**
           * 将矩阵求逆的结果赋值给出口矩阵。
           * @param out 出口矩阵。
           * @param t 求逆的矩阵。
           */

        }, {
          key: "invert",
          value: function invert(out, t) {
            var determinant = 1 / (t.a * t.d - t.b * t.c);
            out.a = determinant * t.d;
            out.b = -determinant * t.b;
            out.c = -determinant * t.c;
            out.d = determinant * t.a;
            out.tx = determinant * (t.c * t.ty - t.d * t.tx);
            out.ty = determinant * (t.b * t.tx - t.a * t.ty);
          }
          /**
           * 将四维矩阵转换为二维仿射变换矩阵并赋值给出口矩阵。
           * @param out 出口矩阵。
           * @param mat 四维矩阵。
           */

        }, {
          key: "fromMat4",
          value: function fromMat4(out, mat) {
            out.a = mat.m00;
            out.b = mat.m01;
            out.c = mat.m04;
            out.d = mat.m05;
            out.tx = mat.m12;
            out.ty = mat.m13;
          }
          /**
           * 应用二维仿射变换矩阵到二维向量上，并将结果赋值给出口向量。
           * @param out 出口向量。
           * @param point 应用变换的向量。
           * @param t 二维仿射变换矩阵。
           */

        }, {
          key: "transformVec2",
          value: function transformVec2(out, point, transOrY, t) {
            var x;
            var y;

            if (t === undefined) {
              t = transOrY;
              x = point.x;
              y = point.y;
            } else {
              x = point;
              y = transOrY;
            }

            out.x = t.a * x + t.c * y + t.tx;
            out.y = t.b * x + t.d * y + t.ty;
          }
          /**
           * 应用二维仿射变换矩阵到二维尺寸上，并将结果赋值给出口尺寸。
           * @param out 出口尺寸。
           * @param size 应用变换的尺寸。
           * @param t 二维仿射变换矩阵。
           */

        }, {
          key: "transformSize",
          value: function transformSize(out, size, t) {
            out.width = t.a * size.width + t.c * size.height;
            out.height = t.b * size.width + t.d * size.height;
          }
          /**
           * 应用二维仿射变换矩阵到矩形上，并将结果赋值给出口矩形。
           * @param out 出口矩形。
           * @param rect 应用变换的矩形。
           * @param t 二维仿射变换矩阵。
           */

        }, {
          key: "transformRect",
          value: function transformRect(out, rect, t) {
            var or = rect.x + rect.width;
            var ot = rect.y + rect.height;
            var lbx = t.a * rect.x + t.c * rect.y + t.tx;
            var lby = t.b * rect.x + t.d * rect.y + t.ty;
            var rbx = t.a * or + t.c * rect.y + t.tx;
            var rby = t.b * or + t.d * rect.y + t.ty;
            var ltx = t.a * rect.x + t.c * ot + t.tx;
            var lty = t.b * rect.x + t.d * ot + t.ty;
            var rtx = t.a * or + t.c * ot + t.tx;
            var rty = t.b * or + t.d * ot + t.ty;
            var minX = Math.min(lbx, rbx, ltx, rtx);
            var maxX = Math.max(lbx, rbx, ltx, rtx);
            var minY = Math.min(lby, rby, lty, rty);
            var maxY = Math.max(lby, rby, lty, rty);
            out.x = minX;
            out.y = minY;
            out.width = maxX - minX;
            out.height = maxY - minY;
          }
          /**
           * 应用二维仿射变换矩阵到矩形上, 并转换为有向包围盒。
           * 这个函数不创建任何内存，你需要先创建包围盒的四个 Vector 对象用来存储结果，并作为前四个参数传入函数。
           */

        }, {
          key: "transformObb",
          value: function transformObb(out_bl, out_tl, out_tr, out_br, rect, anAffineTransform) {
            var tx = anAffineTransform.a * rect.x + anAffineTransform.c * rect.y + anAffineTransform.tx;
            var ty = anAffineTransform.b * rect.x + anAffineTransform.d * rect.y + anAffineTransform.ty;
            var xa = anAffineTransform.a * rect.width;
            var xb = anAffineTransform.b * rect.width;
            var yc = anAffineTransform.c * rect.height;
            var yd = anAffineTransform.d * rect.height;
            out_tl.x = tx;
            out_tl.y = ty;
            out_tr.x = xa + tx;
            out_tr.y = xb + ty;
            out_bl.x = yc + tx;
            out_bl.y = yd + ty;
            out_br.x = xa + yc + tx;
            out_br.y = xb + yd + ty;
          }
        }]);

        /**
         * 构造二维放射变换矩阵。
         * @param a a 元素。
         * @param b b 元素。
         * @param c c 元素。
         * @param d d 元素。
         * @param tx tx 元素。
         * @param ty ty 元素。
         */
        function AffineTransform() {
          var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
          var tx = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
          var ty = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

          _classCallCheck(this, AffineTransform);

          this.a = a;
          this.b = b;
          this.c = c;
          this.d = d;
          this.tx = tx;
          this.ty = ty;
        }

        return AffineTransform;
      }());
      legacyCC.AffineTransform = AffineTransform;

      /**
       * 二维尺寸。
       */

      var Size = exports('T', /*#__PURE__*/function (_ValueType) {
        _inherits(Size, _ValueType);

        _createClass(Size, [{
          key: "x",
          // compatibility with vector interfaces
          set: function set(val) {
            this.width = val;
          },
          get: function get() {
            return this.width;
          }
        }, {
          key: "y",
          set: function set(val) {
            this.height = val;
          },
          get: function get() {
            return this.height;
          }
          /**
           * 宽度。
           */

        }], [{
          key: "lerp",

          /**
           * 根据指定的插值比率，从当前尺寸到目标尺寸之间做插值。
           * @param out 本方法将插值结果赋值给此参数
           * @param from 起始尺寸。
           * @param to 目标尺寸。
           * @param ratio 插值比率，范围为 [0,1]。
           * @returns 当前尺寸的宽和高到目标尺寸的宽和高分别按指定插值比率进行线性插值构成的向量。
           */
          value: function lerp(out, from, to, ratio) {
            out.width = from.width + (to.width - from.width) * ratio;
            out.height = from.height + (to.height - from.height) * ratio;
            return out;
          }
        }]);

        function Size(width, height) {
          var _this;

          _classCallCheck(this, Size);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Size).call(this));

          if (width && _typeof(width) === 'object') {
            _this.height = width.height;
            _this.width = width.width;
          } else {
            _this.width = width || 0;
            _this.height = height || 0;
          }

          return _this;
        }
        /**
         * 克隆当前尺寸。
         */


        _createClass(Size, [{
          key: "clone",
          value: function clone() {
            return new Size(this.width, this.height);
          }
          /**
           * 设置当前尺寸使其与指定的尺寸相等。
           * @param other 相比较的尺寸。
           * @returns `this`
           */

        }, {
          key: "set",
          value: function set(width, height) {
            if (width && _typeof(width) === 'object') {
              this.height = width.height;
              this.width = width.width;
            } else {
              this.width = width || 0;
              this.height = height || 0;
            }

            return this;
          }
          /**
           * 判断当前尺寸是否与指定尺寸的相等。
           * @param other 相比较的尺寸。
           * @returns 两尺寸的宽和高都分别相等时返回 `true`；否则返回 `false`。
           */

        }, {
          key: "equals",
          value: function equals(other) {
            return this.width === other.width && this.height === other.height;
          }
          /**
           * 根据指定的插值比率，从当前尺寸到目标尺寸之间做插值。
           * @param to 目标尺寸。
           * @param ratio 插值比率，范围为 [0,1]。
           */

        }, {
          key: "lerp",
          value: function lerp(to, ratio) {
            this.width = this.width + (to.width - this.width) * ratio;
            this.height = this.height + (to.height - this.height) * ratio;
            return this;
          }
          /**
           * 返回当前尺寸的字符串表示。
           * @returns 当前尺寸的字符串表示。
           */

        }, {
          key: "toString",
          value: function toString() {
            return "(".concat(this.width.toFixed(2), ", ").concat(this.height.toFixed(2), ")");
          }
        }]);

        return Size;
      }(ValueType));
      Size.ZERO = Object.freeze(new Size(0, 0));
      Size.ONE = Object.freeze(new Size(1, 1));
      CCClass.fastDefine('cc.Size', Size, {
        width: 0,
        height: 0
      });
      /**
       * 等价于 `new Size(other)`。
       * @param other 相比较的尺寸。
       * @returns `new Size(other)`
       */

      function size() {
        var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return new Size(width, height);
      }
      legacyCC.size = size;
      legacyCC.Size = Size;

      /**
       * 轴对齐矩形。
       * 矩形内的所有点都大于等于矩形的最小点 (xMin, yMin) 并且小于等于矩形的最大点 (xMax, yMax)。
       * 矩形的宽度定义为 xMax - xMin；高度定义为 yMax - yMin。
       */

      var Rect = exports('W', /*#__PURE__*/function (_ValueType) {
        _inherits(Rect, _ValueType);

        _createClass(Rect, [{
          key: "xMin",

          /**
           * 获取或设置矩形在 x 轴上的最小值。
           */
          get: function get() {
            return this.x;
          },
          set: function set(value) {
            this.width += this.x - value;
            this.x = value;
          }
          /**
           * 获取或设置矩形在 y 轴上的最小值。
           */

        }, {
          key: "yMin",
          get: function get() {
            return this.y;
          },
          set: function set(value) {
            this.height += this.y - value;
            this.y = value;
          }
          /**
           * 获取或设置矩形在 x 轴上的最大值。
           */

        }, {
          key: "xMax",
          get: function get() {
            return this.x + this.width;
          },
          set: function set(value) {
            this.width = value - this.x;
          }
          /**
           * 获取或设置矩形在 y 轴上的最大值。
           */

        }, {
          key: "yMax",
          get: function get() {
            return this.y + this.height;
          },
          set: function set(value) {
            this.height = value - this.y;
          }
          /**
           * 获取或设置矩形中心点的坐标。
           */

        }, {
          key: "center",
          get: function get() {
            return new Vec2(this.x + this.width * 0.5, this.y + this.height * 0.5);
          },
          set: function set(value) {
            this.x = value.x - this.width * 0.5;
            this.y = value.y - this.height * 0.5;
          }
          /**
           * 获取或设置矩形最小点的坐标。
           */

        }, {
          key: "origin",
          get: function get() {
            return new legacyCC.Vec2(this.x, this.y);
          },
          set: function set(value) {
            this.x = value.x;
            this.y = value.y;
          }
          /**
           * 获取或设置矩形的尺寸。
           */

        }, {
          key: "size",
          get: function get() {
            return new Size(this.width, this.height);
          },
          set: function set(value) {
            this.width = value.width;
            this.height = value.height;
          } // compatibility with vector interfaces

        }, {
          key: "z",
          set: function set(val) {
            this.width = val;
          },
          get: function get() {
            return this.width;
          }
        }, {
          key: "w",
          set: function set(val) {
            this.height = val;
          },
          get: function get() {
            return this.height;
          }
          /**
           * 获取或设置矩形最小点的 x 坐标。
           */

        }], [{
          key: "fromMinMax",

          /**
           * 由任意两个点创建一个矩形，目标矩形即是这两个点各向 x、y 轴作线所得到的矩形。
           * @param v1 指定的点。
           * @param v2 指定的点。
           * @returns 目标矩形。
           */
          value: function fromMinMax(out, v1, v2) {
            var minX = Math.min(v1.x, v2.x);
            var minY = Math.min(v1.y, v2.y);
            var maxX = Math.max(v1.x, v2.x);
            var maxY = Math.max(v1.y, v2.y);
            out.x = minX;
            out.y = minY;
            out.width = maxX - minX;
            out.height = maxY - minY;
            return out;
          }
          /**
           * 根据指定的插值比率，从当前矩形到目标矩形之间做插值。
           * @param out 本方法将插值结果赋值给此参数
           * @param from 起始矩形。
           * @param to 目标矩形。
           * @param ratio 插值比率，范围为 [0,1]。
           */

        }, {
          key: "lerp",
          value: function lerp(out, from, to, ratio) {
            var x = from.x;
            var y = from.y;
            var w = from.width;
            var h = from.height;
            out.x = x + (to.x - x) * ratio;
            out.y = y + (to.y - y) * ratio;
            out.width = w + (to.width - w) * ratio;
            out.height = h + (to.height - h) * ratio;
            return out;
          }
          /**
           * 计算当前矩形与指定矩形重叠部分的矩形，将其赋值给出口矩形。
           * @param out 出口矩形。
           * @param one 指定的一个矩形。
           * @param other 指定的另一个矩形。
           */

        }, {
          key: "intersection",
          value: function intersection(out, one, other) {
            var axMin = one.x;
            var ayMin = one.y;
            var axMax = one.x + one.width;
            var ayMax = one.y + one.height;
            var bxMin = other.x;
            var byMin = other.y;
            var bxMax = other.x + other.width;
            var byMax = other.y + other.height;
            out.x = Math.max(axMin, bxMin);
            out.y = Math.max(ayMin, byMin);
            out.width = Math.min(axMax, bxMax) - out.x;
            out.height = Math.min(ayMax, byMax) - out.y;
            return out;
          }
          /**
           * 创建同时包含当前矩形和指定矩形的最小矩形，将其赋值给出口矩形。
           * @param out 出口矩形。
           * @param one 指定的一个矩形。
           * @param other 指定的另一个矩形。
           */

        }, {
          key: "union",
          value: function union(out, one, other) {
            var x = one.x;
            var y = one.y;
            var w = one.width;
            var h = one.height;
            var bx = other.x;
            var by = other.y;
            var bw = other.width;
            var bh = other.height;
            out.x = Math.min(x, bx);
            out.y = Math.min(y, by);
            out.width = Math.max(x + w, bx + bw) - out.x;
            out.height = Math.max(y + h, by + bh) - out.y;
            return out;
          }
        }]);

        function Rect(x, y, width, height) {
          var _this;

          _classCallCheck(this, Rect);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Rect).call(this));

          if (x && _typeof(x) === 'object') {
            _this.y = x.y;
            _this.width = x.width;
            _this.height = x.height;
            _this.x = x.x;
          } else {
            _this.x = x || 0;
            _this.y = y || 0;
            _this.width = width || 0;
            _this.height = height || 0;
          }

          return _this;
        }
        /**
         * 克隆当前矩形。
         */


        _createClass(Rect, [{
          key: "clone",
          value: function clone() {
            return new Rect(this.x, this.y, this.width, this.height);
          }
          /**
           * 设置当前矩形使其与指定矩形相等。
           * @param other 相比较的矩形。
           * @returns `this`
           */

        }, {
          key: "set",
          value: function set(x, y, width, height) {
            if (x && _typeof(x) === 'object') {
              this.y = x.y;
              this.width = x.width;
              this.height = x.height;
              this.x = x.x;
            } else {
              this.x = x || 0;
              this.y = y || 0;
              this.width = width || 0;
              this.height = height || 0;
            }

            return this;
          }
          /**
           * 判断当前矩形是否与指定矩形相等。
           * @param other 相比较的矩形。
           * @returns 两矩阵的最小值和最大值都分别相等时返回 `true`；否则返回 `false`。
           */

        }, {
          key: "equals",
          value: function equals(other) {
            return this.x === other.x && this.y === other.y && this.width === other.width && this.height === other.height;
          }
          /**
           * 根据指定的插值比率，从当前矩形到目标矩形之间做插值。
           * @param to 目标矩形。
           * @param ratio 插值比率，范围为 [0,1]。
           */

        }, {
          key: "lerp",
          value: function lerp(to, ratio) {
            var x = this.x;
            var y = this.y;
            var w = this.width;
            var h = this.height;
            this.x = x + (to.x - x) * ratio;
            this.y = y + (to.y - y) * ratio;
            this.width = w + (to.width - w) * ratio;
            this.height = h + (to.height - h) * ratio;
            return this;
          }
          /**
           * 返回当前矩形的字符串表示。
           * @returns 当前矩形的字符串表示。
           */

        }, {
          key: "toString",
          value: function toString() {
            return "(".concat(this.x.toFixed(2), ", ").concat(this.y.toFixed(2), ", ").concat(this.width.toFixed(2), ", ").concat(this.height.toFixed(2), ")");
          }
          /**
           * 判断当前矩形是否与指定矩形相交。
           * @param other 相比较的矩形。
           * @returns 相交则返回 `true`，否则返回 `false`。
           */

        }, {
          key: "intersects",
          value: function intersects(other) {
            var maxax = this.x + this.width;
            var maxay = this.y + this.height;
            var maxbx = other.x + other.width;
            var maxby = other.y + other.height;
            return !(maxax < other.x || maxbx < this.x || maxay < other.y || maxby < this.y);
          }
          /**
           * 判断当前矩形是否包含指定的点。
           * @param point 指定的点。
           * @returns 指定的点包含在矩形内则返回 `true`，否则返回 `false`。
           */

        }, {
          key: "contains",
          value: function contains(point) {
            return this.x <= point.x && this.x + this.width >= point.x && this.y <= point.y && this.y + this.height >= point.y;
          }
          /**
           * 判断当前矩形是否包含指定矩形。
           * @param other 指定的矩形。
           * @returns 指定矩形所有的点都包含在当前矩形内则返回 `true`，否则返回 `false`。
           */

        }, {
          key: "containsRect",
          value: function containsRect(other) {
            return this.x <= other.x && this.x + this.width >= other.x + other.width && this.y <= other.y && this.y + this.height >= other.y + other.height;
          }
          /**
           * 应用矩阵变换到当前矩形：
           * 应用矩阵变换到当前矩形的最小点得到新的最小点，
           * 将当前矩形的尺寸视为二维向量应用矩阵变换得到新的尺寸；
           * 并将如此构成的新矩形。
           * @param matrix 变换矩阵。
           */

        }, {
          key: "transformMat4",
          value: function transformMat4(mat) {
            var ol = this.x;
            var ob = this.y;
            var or = ol + this.width;
            var ot = ob + this.height;
            var lbx = mat.m00 * ol + mat.m04 * ob + mat.m12;
            var lby = mat.m01 * ol + mat.m05 * ob + mat.m13;
            var rbx = mat.m00 * or + mat.m04 * ob + mat.m12;
            var rby = mat.m01 * or + mat.m05 * ob + mat.m13;
            var ltx = mat.m00 * ol + mat.m04 * ot + mat.m12;
            var lty = mat.m01 * ol + mat.m05 * ot + mat.m13;
            var rtx = mat.m00 * or + mat.m04 * ot + mat.m12;
            var rty = mat.m01 * or + mat.m05 * ot + mat.m13;
            var minX = Math.min(lbx, rbx, ltx, rtx);
            var maxX = Math.max(lbx, rbx, ltx, rtx);
            var minY = Math.min(lby, rby, lty, rty);
            var maxY = Math.max(lby, rby, lty, rty);
            this.x = minX;
            this.y = minY;
            this.width = maxX - minX;
            this.height = maxY - minY;
            return this;
          }
        }]);

        return Rect;
      }(ValueType));
      CCClass.fastDefine('cc.Rect', Rect, {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      });
      legacyCC.Rect = Rect;
      /**
       * 构造与指定矩形相等的矩形。等价于 `new Rect(rect)`。
       * @param rect 相比较的矩形。
       * @returns `new Rect(rect)`
       */

      function rect() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        return new Rect(x, y, width, height);
      }
      legacyCC.rect = rect;

      var toFloat = 1 / 255;
      /**
       * @zh 通过 Red、Green、Blue 颜色通道表示颜色，并通过 Alpha 通道表示不透明度。<br/>
       * 每个通道都为取值范围 [0, 255] 的整数。<br/>
       */

      var Color = exports('Y', /*#__PURE__*/function (_ValueType) {
        _inherits(Color, _ValueType);

        _createClass(Color, [{
          key: "r",

          /**
           * @zh 获取或设置当前颜色的 Red 通道。
           */
          get: function get() {
            return this._val & 0x000000ff;
          },
          set: function set(red) {
            red = ~~clamp(red, 0, 255);
            this._val = (this._val & 0xffffff00 | red) >>> 0;
          }
          /**
           * @zh 获取或设置当前颜色的 Green 通道。
           */

        }, {
          key: "g",
          get: function get() {
            return (this._val & 0x0000ff00) >> 8;
          },
          set: function set(green) {
            green = ~~clamp(green, 0, 255);
            this._val = (this._val & 0xffff00ff | green << 8) >>> 0;
          }
          /**
           * @zh 获取或设置当前颜色的 Blue 通道。
           */

        }, {
          key: "b",
          get: function get() {
            return (this._val & 0x00ff0000) >> 16;
          },
          set: function set(blue) {
            blue = ~~clamp(blue, 0, 255);
            this._val = (this._val & 0xff00ffff | blue << 16) >>> 0;
          }
          /**
           * @zh 获取或设置当前颜色的 Alpha 通道。
           */

        }, {
          key: "a",
          get: function get() {
            return (this._val & 0xff000000) >>> 24;
          },
          set: function set(alpha) {
            alpha = ~~clamp(alpha, 0, 255);
            this._val = (this._val & 0x00ffffff | alpha << 24 >>> 0) >>> 0;
          } // compatibility with vector interfaces

        }, {
          key: "x",
          get: function get() {
            return this.r * toFloat;
          },
          set: function set(value) {
            this.r = value * 255;
          }
        }, {
          key: "y",
          get: function get() {
            return this.g * toFloat;
          },
          set: function set(value) {
            this.g = value * 255;
          }
        }, {
          key: "z",
          get: function get() {
            return this.b * toFloat;
          },
          set: function set(value) {
            this.b = value * 255;
          }
        }, {
          key: "w",
          get: function get() {
            return this.a * toFloat;
          },
          set: function set(value) {
            this.a = value * 255;
          }
        }], [{
          key: "clone",

          /**
           * @zh 获得指定颜色的拷贝
           */
          value: function clone(a) {
            var out = new Color();

            if (a._val) {
              out._val = a._val;
            } else {
              out._val = (a.a << 24 >>> 0) + (a.b << 16) + (a.g << 8) + a.r;
            }

            return out;
          }
          /**
           * @zh 复制目标颜色
           */

        }, {
          key: "copy",
          value: function copy(out, a) {
            out.r = a.r;
            out.g = a.g;
            out.b = a.b;
            out.a = a.a;
            return out;
          }
          /**
           * @zh 设置颜色值
           */

        }, {
          key: "set",
          value: function set(out, r, g, b, a) {
            out.r = r;
            out.g = g;
            out.b = b;
            out.a = a;
            return out;
          }
          /**
           * @zh 从十六进制颜色字符串中读入颜色到 out 中
           */

        }, {
          key: "fromHEX",
          value: function fromHEX(out, hexString) {
            hexString = hexString.indexOf('#') === 0 ? hexString.substring(1) : hexString;
            out.r = parseInt(hexString.substr(0, 2), 16) || 0;
            out.g = parseInt(hexString.substr(2, 2), 16) || 0;
            out.b = parseInt(hexString.substr(4, 2), 16) || 0;
            out.a = parseInt(hexString.substr(6, 2), 16) || 255;
            out._val = (out.a << 24 >>> 0) + (out.b << 16) + (out.g << 8) + out.r;
            return out;
          }
          /**
           * @zh 逐通道颜色加法
           */

        }, {
          key: "add",
          value: function add(out, a, b) {
            out.r = a.r + b.r;
            out.g = a.g + b.g;
            out.b = a.b + b.b;
            out.a = a.a + b.a;
            return out;
          }
          /**
           * @zh 逐通道颜色减法
           */

        }, {
          key: "subtract",
          value: function subtract(out, a, b) {
            out.r = a.r - b.r;
            out.g = a.g - b.g;
            out.b = a.b - b.b;
            out.a = a.a - b.a;
            return out;
          }
          /**
           * @zh 逐通道颜色乘法
           */

        }, {
          key: "multiply",
          value: function multiply(out, a, b) {
            out.r = a.r * b.r;
            out.g = a.g * b.g;
            out.b = a.b * b.b;
            out.a = a.a * b.a;
            return out;
          }
          /**
           * @zh 逐通道颜色除法
           */

        }, {
          key: "divide",
          value: function divide(out, a, b) {
            out.r = a.r / b.r;
            out.g = a.g / b.g;
            out.b = a.b / b.b;
            out.a = a.a / b.a;
            return out;
          }
          /**
           * @zh 全通道统一缩放颜色
           */

        }, {
          key: "scale",
          value: function scale(out, a, b) {
            out.r = a.r * b;
            out.g = a.g * b;
            out.b = a.b * b;
            out.a = a.a * b;
            return out;
          }
          /**
           * @zh 逐通道颜色线性插值：A + t * (B - A)
           */

        }, {
          key: "lerp",
          value: function lerp(out, from, to, ratio) {
            var r = from.r;
            var g = from.g;
            var b = from.b;
            var a = from.a;
            r = r + (to.r - r) * ratio;
            g = g + (to.g - g) * ratio;
            b = b + (to.b - b) * ratio;
            a = a + (to.a - a) * ratio;
            out._val = Math.floor((a << 24 >>> 0) + (b << 16) + (g << 8) + r);
            return out;
          }
          /**
           * @zh 颜色转数组
           * @param ofs 数组起始偏移量
           */

        }, {
          key: "toArray",
          value: function toArray(out, a) {
            var ofs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var scale = a instanceof Color || a.a > 1 ? 1 / 255 : 1;
            out[ofs + 0] = a.r * scale;
            out[ofs + 1] = a.g * scale;
            out[ofs + 2] = a.b * scale;
            out[ofs + 3] = a.a * scale;
            return out;
          }
          /**
           * @zh 数组转颜色
           * @param ofs 数组起始偏移量
           */

        }, {
          key: "fromArray",
          value: function fromArray(arr, out) {
            var ofs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            out.r = arr[ofs + 0] * 255;
            out.g = arr[ofs + 1] * 255;
            out.b = arr[ofs + 2] * 255;
            out.a = arr[ofs + 3] * 255;
            return out;
          }
          /**
           * @zh 颜色等价判断
           */

        }, {
          key: "strictEquals",
          value: function strictEquals(a, b) {
            return a.r === b.r && a.g === b.g && a.b === b.b && a.a === b.a;
          }
          /**
           * @zh 排除浮点数误差的颜色近似等价判断
           */

        }, {
          key: "equals",
          value: function equals(a, b) {
            var epsilon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EPSILON;
            return Math.abs(a.r - b.r) <= epsilon * Math.max(1.0, Math.abs(a.r), Math.abs(b.r)) && Math.abs(a.g - b.g) <= epsilon * Math.max(1.0, Math.abs(a.g), Math.abs(b.g)) && Math.abs(a.b - b.b) <= epsilon * Math.max(1.0, Math.abs(a.b), Math.abs(b.b)) && Math.abs(a.a - b.a) <= epsilon * Math.max(1.0, Math.abs(a.a), Math.abs(b.a));
          }
          /**
           * @zh 获取指定颜色的整型数据表示
           */

        }, {
          key: "hex",
          value: function hex(a) {
            return (a.r * 255 << 24 | a.g * 255 << 16 | a.b * 255 << 8 | a.a * 255) >>> 0;
          }
        }]);

        function Color(r, g, b, a) {
          var _this;

          _classCallCheck(this, Color);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Color).call(this));
          _this._val = 0;

          if (typeof r === 'string') {
            _this.fromHEX(r);
          } else if (g !== undefined) {
            _this.set(r, g, b, a);
          } else {
            _this.set(r);
          }

          return _this;
        }
        /**
         * @zh 克隆当前颜色。
         */


        _createClass(Color, [{
          key: "clone",
          value: function clone() {
            var ret = new Color();
            ret._val = this._val;
            return ret;
          }
          /**
           * @zh 判断当前颜色是否与指定颜色相等。
           * @param other 相比较的颜色。
           * @returns 两颜色的各通道都相等时返回 `true`；否则返回 `false`。
           */

        }, {
          key: "equals",
          value: function equals(other) {
            return other && this._val === other._val;
          }
          /**
           * @zh 根据指定的插值比率，从当前颜色到目标颜色之间做插值。
           * @param to 目标颜色。
           * @param ratio 插值比率，范围为 [0,1]。
           */

        }, {
          key: "lerp",
          value: function lerp(to, ratio) {
            var r = this.r;
            var g = this.g;
            var b = this.b;
            var a = this.a;
            r = r + (to.r - r) * ratio;
            g = g + (to.g - g) * ratio;
            b = b + (to.b - b) * ratio;
            a = a + (to.a - a) * ratio;
            this._val = Math.floor((a << 24 >>> 0) + (b << 16) + (g << 8) + r);
            return this;
          }
          /**
           * @zh 返回当前颜色的字符串表示。
           * @returns 当前颜色的字符串表示。
           */

        }, {
          key: "toString",
          value: function toString() {
            return 'rgba(' + this.r.toFixed() + ', ' + this.g.toFixed() + ', ' + this.b.toFixed() + ', ' + this.a.toFixed() + ')';
          }
          /**
           * @zh 将当前颜色转换为 CSS 格式。
           * @param opt 格式选项。
           * @returns 当前颜色的 CSS 格式。
           */

        }, {
          key: "toCSS",
          value: function toCSS(opt) {
            if (opt === 'rgba') {
              return 'rgba(' + (this.r | 0) + ',' + (this.g | 0) + ',' + (this.b | 0) + ',' + (this.a * toFloat).toFixed(2) + ')';
            } else if (opt === 'rgb') {
              return 'rgb(' + (this.r | 0) + ',' + (this.g | 0) + ',' + (this.b | 0) + ')';
            } else {
              return '#' + this.toHEX(opt);
            }
          }
          /**
           * @zh 从十六进制颜色字符串中读入当前颜色。<br/>
           * 十六进制颜色字符串应该以可选的 "#" 开头，紧跟最多 8 个代表十六进制数字的字符；<br/>
           * 每两个连续字符代表的数值依次作为 Red、Green、Blue 和 Alpha 通道；<br/>
           * 缺省的颜色通道将视为 0；缺省的透明通道将视为 255。<br/>
           * @param hexString 十六进制颜色字符串。
           * @returns `this`
           */

        }, {
          key: "fromHEX",
          value: function fromHEX(hexString) {
            hexString = hexString.indexOf('#') === 0 ? hexString.substring(1) : hexString;
            var r = parseInt(hexString.substr(0, 2), 16) || 0;
            var g = parseInt(hexString.substr(2, 2), 16) || 0;
            var b = parseInt(hexString.substr(4, 2), 16) || 0;
            var a = parseInt(hexString.substr(6, 2), 16) || 255;
            this._val = (a << 24 >>> 0) + (b << 16) + (g << 8) + r;
            return this;
          }
          /**
           * @zh 转换当前颜色为十六进制颜色字符串。
           * @param fmt 格式选项。
           * - `'#rrggbbaa'` 获取Red、Green、Blue、Alpha通道的十六进制值（**两位**，高位补 0）并依次连接；
           * - `'#rrggbb` 与 `'#rrggbbaa'` 类似但不包括 Alpha 通道。
           * @returns 十六进制颜色字符串。
           * @example
           * ```
           * const color = new Color(255, 14, 0, 255);
           * color.toHEX("#rgb");      // "f00";
           * color.toHEX("#rrggbbaa"); // "ff0e00"
           * color.toHEX("#rrggbb");   // "ff0e00ff"
           * ```
           */

        }, {
          key: "toHEX",
          value: function toHEX(fmt) {
            var prefix = '0';
            var hex = [(this.r < 16 ? prefix : '') + (this.r | 0).toString(16), (this.g < 16 ? prefix : '') + (this.g | 0).toString(16), (this.b < 16 ? prefix : '') + (this.b | 0).toString(16)];
            var i = -1;

            if (fmt === '#rgb') {
              for (i = 0; i < hex.length; ++i) {
                if (hex[i].length > 1) {
                  hex[i] = hex[i][0];
                }
              }
            } else if (fmt === '#rrggbb') {
              for (i = 0; i < hex.length; ++i) {
                if (hex[i].length === 1) {
                  hex[i] = '0' + hex[i];
                }
              }
            } else if (fmt === '#rrggbbaa') {
              hex.push((this.a < 16 ? prefix : '') + (this.a | 0).toString(16));
            }

            return hex.join('');
          }
          /**
           * @zh 将当前颜色转换为 RGB 整数值。
           * @returns RGB 整数值。从最低有效位开始，每8位分别是 Red、Green、Blue 通道的值。
           * @example
           * ```
           * const color = Color.YELLOW;
           * color.toRGBValue();
           * ```
           */

        }, {
          key: "toRGBValue",
          value: function toRGBValue() {
            return this._val & 0x00ffffff;
          }
          /**
           * @zh 从 HSV 颜色中读入当前颜色。
           * @param h H 通道。
           * @param s S 通道。
           * @param v V 通道。
           * @returns `this`
           * @example
           * ```
           * const color = Color.YELLOW;
           * color.fromHSV(0, 0, 1); // Color {r: 255, g: 255, b: 255, a: 255};
           * ```
           */

        }, {
          key: "fromHSV",
          value: function fromHSV(h, s, v) {
            var r = 0;
            var g = 0;
            var b = 0;

            if (s === 0) {
              r = g = b = v;
            } else {
              if (v === 0) {
                r = g = b = 0;
              } else {
                if (h === 1) {
                  h = 0;
                }

                h *= 6;
                s = s;
                v = v;
                var i = Math.floor(h);
                var f = h - i;
                var p = v * (1 - s);
                var q = v * (1 - s * f);
                var t = v * (1 - s * (1 - f));

                switch (i) {
                  case 0:
                    r = v;
                    g = t;
                    b = p;
                    break;

                  case 1:
                    r = q;
                    g = v;
                    b = p;
                    break;

                  case 2:
                    r = p;
                    g = v;
                    b = t;
                    break;

                  case 3:
                    r = p;
                    g = q;
                    b = v;
                    break;

                  case 4:
                    r = t;
                    g = p;
                    b = v;
                    break;

                  case 5:
                    r = v;
                    g = p;
                    b = q;
                    break;
                }
              }
            }

            r *= 255;
            g *= 255;
            b *= 255;
            this._val = (this.a << 24 >>> 0) + (b << 16) + (g << 8) + r;
            return this;
          }
          /**
           * @zh 转换当前颜色为 HSV 颜色。
           * @returns HSV 颜色。成员 `h`、`s`、`v` 分别代表 HSV 颜色的 H、S、V 通道。
           * @example
           * ```
           * import { Color } from 'cc';
           * const color = Color.YELLOW;
           * color.toHSV(); // {h: 0.1533864541832669, s: 0.9843137254901961, v: 1}
           * ```
           */

        }, {
          key: "toHSV",
          value: function toHSV() {
            var r = this.r * toFloat;
            var g = this.g * toFloat;
            var b = this.b * toFloat;
            var hsv = {
              h: 0,
              s: 0,
              v: 0
            };
            var max = Math.max(r, g, b);
            var min = Math.min(r, g, b);
            var delta = 0;
            hsv.v = max;
            hsv.s = max ? (max - min) / max : 0;

            if (!hsv.s) {
              hsv.h = 0;
            } else {
              delta = max - min;

              if (r === max) {
                hsv.h = (g - b) / delta;
              } else if (g === max) {
                hsv.h = 2 + (b - r) / delta;
              } else {
                hsv.h = 4 + (r - g) / delta;
              }

              hsv.h /= 6;

              if (hsv.h < 0) {
                hsv.h += 1.0;
              }
            }

            return hsv;
          }
          /**
           * @zh 设置当前颜色使其与指定颜色相等。
           * @param other 相比较的颜色。
           * @overload 重载
           * @param [r=0] 指定的 Red 通道，[0-255]。
           * @param [g=0] 指定的 Green 通道。
           * @param [b=0] 指定的 Blue 通道。
           * @param [a=255] 指定的 Alpha 通道。
           * @returns 当前颜色。
           */

        }, {
          key: "set",
          value: function set(r, g, b, a) {
            if (_typeof(r) === 'object') {
              if (r._val != null) {
                this._val = r._val;
              } else {
                g = r.g || 0;
                b = r.b || 0;
                a = typeof r.a === 'number' ? r.a : 255;
                r = r.r || 0;
                this._val = (a << 24 >>> 0) + (b << 16) + (g << 8) + r;
              }
            } else {
              r = r || 0;
              g = g || 0;
              b = b || 0;
              a = typeof a === 'number' ? a : 255;
              this._val = (a << 24 >>> 0) + (b << 16) + (g << 8) + r;
            }

            return this;
          }
          /**
           * @zh 将当前颜色乘以与指定颜色
           * @param other 指定的颜色。
           */

        }, {
          key: "multiply",
          value: function multiply(other) {
            var r = (this._val & 0x000000ff) * other.r >> 8;
            var g = (this._val & 0x0000ff00) * other.g >> 8;
            var b = (this._val & 0x00ff0000) * other.b >> 8;
            var a = ((this._val & 0xff000000) >>> 8) * other.a;
            this._val = a & 0xff000000 | b & 0x00ff0000 | g & 0x0000ff00 | r & 0x000000ff;
            return this;
          }
        }, {
          key: "_set_r_unsafe",
          value: function _set_r_unsafe(red) {
            this._val = (this._val & 0xffffff00 | red) >>> 0;
            return this;
          }
        }, {
          key: "_set_g_unsafe",
          value: function _set_g_unsafe(green) {
            this._val = (this._val & 0xffff00ff | green << 8) >>> 0;
            return this;
          }
        }, {
          key: "_set_b_unsafe",
          value: function _set_b_unsafe(blue) {
            this._val = (this._val & 0xff00ffff | blue << 16) >>> 0;
            return this;
          }
        }, {
          key: "_set_a_unsafe",
          value: function _set_a_unsafe(alpha) {
            this._val = (this._val & 0x00ffffff | alpha << 24 >>> 0) >>> 0;
            return this;
          }
        }]);

        return Color;
      }(ValueType));
      Color.WHITE = Object.freeze(new Color(255, 255, 255, 255));
      Color.GRAY = Object.freeze(new Color(127, 127, 127, 255));
      Color.BLACK = Object.freeze(new Color(0, 0, 0, 255));
      Color.TRANSPARENT = Object.freeze(new Color(0, 0, 0, 0));
      Color.RED = Object.freeze(new Color(255, 0, 0, 255));
      Color.GREEN = Object.freeze(new Color(0, 255, 0, 255));
      Color.BLUE = Object.freeze(new Color(0, 0, 255, 255));
      Color.CYAN = Object.freeze(new Color(0, 255, 255, 255));
      Color.MAGENTA = Object.freeze(new Color(255, 0, 255, 255));
      Color.YELLOW = Object.freeze(new Color(255, 255, 0, 255));
      CCClass.fastDefine('cc.Color', Color, {
        r: 0,
        g: 0,
        b: 0,
        a: 255
      });
      legacyCC.Color = Color;
      function color(r, g, b, a) {
        return new Color(r, g, b, a);
      }
      legacyCC.color = color;

      /**
       * @hidden
       */
      var defaultLogTimes = 10;
      function setDefaultLogTimes(times) {
        if (times > 0) {
          defaultLogTimes = times;
        }
      }
      var replaceProperty;
      var removeProperty;
      var markAsWarning;
      var replacePropertyLog;
      var markAsWarningLog;
      var removePropertyLog; // if (DEBUG) {

      var messageID = 0;
      var messageMap = new Map();

      replacePropertyLog = function replacePropertyLog(n, dp, n2, newp, f, id) {
        var item = messageMap.get(id);

        if (item && item.logTimes > item.count) {
          f('\'%s\' is deprecated, please use \'%s\' instead.', "".concat(n, ".").concat(dp), "".concat(n2, ".").concat(newp));
          item.count++;
        }
      };

      replaceProperty = exports('ao', function replaceProperty(owner, ownerName, properties) {
        if (owner == null) return;
        properties.forEach(function (item) {
          var id = messageID++;
          messageMap.set(id, {
            id: id,
            count: 0,
            logTimes: item.logTimes !== undefined ? item.logTimes : defaultLogTimes
          });
          var target = item.target != null ? item.target : owner;
          var newName = item.newName != null ? item.newName : item.name;
          var targetName = item.targetName != null ? item.targetName : ownerName;
          var sameTarget = target == owner;

          if (item.customFunction != null) {
            owner[item.name] = function () {
              var _ref;

              replacePropertyLog(ownerName, item.name, targetName, newName, warn, id);
              return (_ref = item.customFunction).call.apply(_ref, [this].concat(Array.prototype.slice.call(arguments)));
            };
          } else if (item.customSetter != null || item.customGetter != null) {
            var hasSetter = item.customSetter != null;
            var hasGetter = item.customGetter != null;

            if (hasSetter && hasGetter) {
              Object.defineProperty(owner, item.name, {
                get: function get() {
                  replacePropertyLog(ownerName, item.name, targetName, newName, warn, id);
                  return item.customGetter.call(this);
                },
                set: function set(v) {
                  replacePropertyLog(ownerName, item.name, targetName, newName, warn, id);
                  item.customSetter.call(this, v);
                }
              });
            } else if (hasSetter) {
              Object.defineProperty(owner, item.name, {
                set: function set(v) {
                  replacePropertyLog(ownerName, item.name, targetName, newName, warn, id);
                  item.customSetter.call(this, v);
                }
              });
            } else if (hasGetter) {
              Object.defineProperty(owner, item.name, {
                get: function get() {
                  replacePropertyLog(ownerName, item.name, targetName, newName, warn, id);
                  return item.customGetter.call(this);
                }
              });
            }
          } else {
            Object.defineProperty(owner, item.name, {
              get: function get() {
                replacePropertyLog(ownerName, item.name, targetName, newName, warn, id);
                return sameTarget ? this[newName] : target[newName];
              },
              set: function set(v) {
                replacePropertyLog(ownerName, item.name, targetName, newName, warn, id);

                if (sameTarget) {
                  this[newName] = v;
                } else {
                  target[newName] = v;
                }
              }
            });
          }
        });
      });

      removePropertyLog = function removePropertyLog(n, dp, f, id, s) {
        var item = messageMap.get(id);
        var ss = s === undefined ? '' : '(' + s + ')';

        if (item && item.logTimes > item.count) {
          f('\'%s\' has been removed. ' + ss, "".concat(n, ".").concat(dp));
          item.count++;
        }
      };

      removeProperty = exports('ap', function removeProperty(owner, ownerName, properties) {
        if (owner == null) return;
        properties.forEach(function (item) {
          var id = messageID++;
          messageMap.set(id, {
            id: id,
            count: 0,
            logTimes: item.logTimes !== undefined ? item.logTimes : defaultLogTimes
          });
          Object.defineProperty(owner, item.name, {
            get: function get() {
              return removePropertyLog(ownerName, item.name, error, id, item.suggest);
            },
            set: function set() {
              removePropertyLog(ownerName, item.name, error, id, item.suggest);
            }
          });
        });
      });

      markAsWarningLog = function markAsWarningLog(n, dp, f, id, s) {
        var item = messageMap.get(id);
        var ss = s === undefined ? '' : '(' + s + ')';

        if (item && item.logTimes > item.count) {
          f('\'%s\' is deprecated. ' + ss, "".concat(n, ".").concat(dp));
          item.count++;
        }
      };

      markAsWarning = exports('aq', function markAsWarning(owner, ownerName, properties) {
        if (owner == null) return;

        var _defaultGetSet = function _defaultGetSet(d, n, dp, f, id, s) {
          if (d.get) {
            var oldGet = d.get();

            d.get = function () {
              markAsWarningLog(n, dp, f, id, s);
              return oldGet.call(this);
            };
          }

          if (d.set) {
            var oldSet = Object.create(d.set);

            d.set = function (v) {
              markAsWarningLog(n, dp, f, id, s);
              oldSet.call(this, v);
            };
          }
        };

        properties.forEach(function (item) {
          var deprecatedProp = item.name;
          var descriptor = Object.getOwnPropertyDescriptor(owner, deprecatedProp);

          if (!descriptor) {
            return;
          }

          var id = messageID++;
          messageMap.set(id, {
            id: id,
            count: 0,
            logTimes: item.logTimes !== undefined ? item.logTimes : defaultLogTimes
          });

          if (descriptor.value != null) {
            if (typeof descriptor.value === 'function') {
              var oldValue = descriptor.value;

              owner[deprecatedProp] = function () {
                markAsWarningLog(ownerName, deprecatedProp, warn, id, item.suggest);
                return oldValue.call.apply(oldValue, [this].concat(Array.prototype.slice.call(arguments)));
              };
            } else {
              _defaultGetSet(descriptor, ownerName, deprecatedProp, warn, id, item.suggest);
            }
          } else {
            _defaultGetSet(descriptor, ownerName, deprecatedProp, warn, id, item.suggest);
          }
        });
      }); // } else {
      //     // for compatible
      //     replaceProperty = () => { };
      //     removeProperty = () => { };
      //     markAsWarning = () => { };
      //     replacePropertyLog = () => { };
      //     removePropertyLog = () => { };
      //     markAsWarningLog = () => { };
      // }

      /**
       * @hidden
       */
      replaceProperty(Vec2, 'Vec2', [{
        name: 'sub',
        newName: 'subtract',
        target: Vec2,
        targetName: 'Vec2'
      }, {
        name: 'mul',
        newName: 'multiply',
        target: Vec2,
        targetName: 'Vec2'
      }, {
        name: 'div',
        newName: 'divide',
        target: Vec2,
        targetName: 'Vec2'
      }, {
        name: 'dist',
        newName: 'distance',
        target: Vec2,
        targetName: 'Vec2'
      }, {
        name: 'sqrDist',
        newName: 'squaredDistance',
        target: Vec2,
        targetName: 'Vec2'
      }, {
        name: 'mag',
        newName: 'len',
        target: Vec2,
        targetName: 'Vec2'
      }, {
        name: 'sqrMag',
        newName: 'lengthSqr',
        target: Vec2,
        targetName: 'Vec2'
      }, {
        name: 'scale',
        newName: 'multiplyScalar',
        target: Vec2,
        targetName: 'Vec2'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Vec2,
        targetName: 'Vec2'
      }]);
      replaceProperty(Vec2.prototype, 'Vec2', [{
        name: 'mag',
        newName: 'length',
        target: Vec2.prototype,
        targetName: 'Vec2'
      }, {
        name: 'magSqr',
        newName: 'lengthSqr',
        target: Vec2.prototype,
        targetName: 'Vec2'
      }, {
        name: 'scale',
        newName: 'multiplyScalar',
        target: Vec2.prototype,
        targetName: 'Vec2'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Vec2.prototype,
        targetName: 'Vec2'
      }]); // 与新添加API 接口重名，需尽快更改后删除此弃用

      removeProperty(Vec2.prototype, 'vmath', [{
        name: 'divide'
      }]);
      replaceProperty(Vec3, 'Vec3', [{
        name: 'sub',
        newName: 'subtract',
        target: Vec3,
        targetName: 'Vec3'
      }, {
        name: 'mul',
        newName: 'multiply',
        target: Vec3,
        targetName: 'Vec3'
      }, {
        name: 'div',
        newName: 'divide',
        target: Vec3,
        targetName: 'Vec3'
      }, {
        name: 'dist',
        newName: 'distance',
        target: Vec3,
        targetName: 'Vec3'
      }, {
        name: 'sqrDist',
        newName: 'squaredDistance',
        target: Vec3,
        targetName: 'Vec3'
      }, {
        name: 'mag',
        newName: 'len',
        target: Vec3,
        targetName: 'Vec3'
      }, {
        name: 'sqrMag',
        newName: 'lengthSqr',
        target: Vec3,
        targetName: 'Vec3'
      }, {
        name: 'scale',
        newName: 'multiplyScalar',
        target: Vec3,
        targetName: 'Vec3'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Vec3,
        targetName: 'Vec3'
      }]);
      replaceProperty(Vec3.prototype, 'Vec3', [{
        name: 'mag',
        newName: 'length',
        target: Vec3.prototype,
        targetName: 'Vec3'
      }, {
        name: 'magSqr',
        newName: 'lengthSqr',
        target: Vec3.prototype,
        targetName: 'Vec3'
      }, {
        name: 'scale',
        newName: 'multiplyScalar',
        target: Vec3.prototype,
        targetName: 'Vec3'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Vec3.prototype,
        targetName: 'Vec3'
      }]); // 与新添加API 接口重名，需尽快更改后删除此弃用

      removeProperty(Vec3.prototype, 'vmath', [{
        name: 'divide'
      }]);
      replaceProperty(Vec4, 'Vec4', [{
        name: 'sub',
        newName: 'subtract',
        target: Vec4,
        targetName: 'Vec4'
      }, {
        name: 'mul',
        newName: 'multiply',
        target: Vec4,
        targetName: 'Vec4'
      }, {
        name: 'div',
        newName: 'divide',
        target: Vec4,
        targetName: 'Vec4'
      }, {
        name: 'dist',
        newName: 'distance',
        target: Vec4,
        targetName: 'Vec4'
      }, {
        name: 'sqrDist',
        newName: 'squaredDistance',
        target: Vec4,
        targetName: 'Vec4'
      }, {
        name: 'mag',
        newName: 'len',
        target: Vec4,
        targetName: 'Vec4'
      }, {
        name: 'sqrMag',
        newName: 'lengthSqr',
        target: Vec4,
        targetName: 'Vec4'
      }, {
        name: 'scale',
        newName: 'multiplyScalar',
        target: Vec4,
        targetName: 'Vec4'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Vec4,
        targetName: 'Vec4'
      }]);
      replaceProperty(Vec4.prototype, 'Vec4', [{
        name: 'mag',
        newName: 'length',
        target: Vec4.prototype,
        targetName: 'Vec4'
      }, {
        name: 'magSqr',
        newName: 'lengthSqr',
        target: Vec4.prototype,
        targetName: 'Vec4'
      }, {
        name: 'scale',
        newName: 'multiplyScalar',
        target: Vec4.prototype,
        targetName: 'Vec4'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Vec4.prototype,
        targetName: 'Vec4'
      }]); // 与新添加API 接口重名，需尽快更改后删除此弃用

      removeProperty(Vec4.prototype, 'vmath', [{
        name: 'divide'
      }]);
      replaceProperty(Quat, 'Quat', [{
        name: 'mag',
        newName: 'len',
        target: Quat,
        targetName: 'Quat'
      }, {
        name: 'mul',
        newName: 'multiply',
        target: Quat,
        targetName: 'Quat'
      }, {
        name: 'sqrMag',
        newName: 'lengthSqr',
        target: Quat,
        targetName: 'Quat'
      }, {
        name: 'scale',
        newName: 'multiplyScalar',
        target: Quat,
        targetName: 'Quat'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Quat,
        targetName: 'Quat'
      }]);
      replaceProperty(Quat.prototype, 'Quat', [{
        name: 'scale',
        newName: 'multiplyScalar',
        target: Quat.prototype,
        targetName: 'Quat'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Quat.prototype,
        targetName: 'Quat'
      }]);
      replaceProperty(Color, 'Color', [{
        name: 'sub',
        newName: 'subtract',
        target: Color,
        targetName: 'Color'
      }, {
        name: 'mul',
        newName: 'multiply',
        target: Color,
        targetName: 'Color'
      }, {
        name: 'div',
        newName: 'divide',
        target: Color,
        targetName: 'Color'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Color,
        targetName: 'Color'
      }, {
        name: 'fromHex',
        newName: 'fromHEX',
        customFunction: function customFunction() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var arg1 = args[1].toString(16);
          return legacyCC.Color.fromHEX(args[0], arg1);
        }
      }]);
      replaceProperty(Mat3, 'Mat3', [{
        name: 'sub',
        newName: 'subtract',
        target: Mat3,
        targetName: 'Mat3'
      }, {
        name: 'mul',
        newName: 'multiply',
        target: Mat3,
        targetName: 'Mat3'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Mat3,
        targetName: 'Mat3'
      }]);
      replaceProperty(Mat3.prototype, 'Mat3', [{
        name: 'sub',
        newName: 'subtract',
        target: Mat3.prototype,
        targetName: 'Mat3'
      }, {
        name: 'mul',
        newName: 'multiply',
        target: Mat3.prototype,
        targetName: 'Mat3'
      }, {
        name: 'mulScalar',
        newName: 'multiplyScalar',
        target: Mat3.prototype,
        targetName: 'Mat3'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Mat3.prototype,
        targetName: 'Mat3'
      }]);
      replaceProperty(Mat4, 'Mat4', [{
        name: 'sub',
        newName: 'subtract',
        target: Mat4,
        targetName: 'Mat4'
      }, {
        name: 'mul',
        newName: 'multiply',
        target: Mat4,
        targetName: 'Mat4'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Mat4,
        targetName: 'Mat4'
      }]);
      replaceProperty(Mat4.prototype, 'Mat4', [{
        name: 'sub',
        newName: 'subtract',
        target: Mat4.prototype,
        targetName: 'Mat4'
      }, {
        name: 'mul',
        newName: 'multiply',
        target: Mat4.prototype,
        targetName: 'Mat4'
      }, {
        name: 'mulScalar',
        newName: 'multiplyScalar',
        target: Mat4.prototype,
        targetName: 'Mat4'
      }, {
        name: 'exactEquals',
        newName: 'strictEquals',
        target: Mat4.prototype,
        targetName: 'Mat4'
      }]);

    }
  };
});
