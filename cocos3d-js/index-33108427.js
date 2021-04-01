System.register(['./deprecated-4ec15e5e.js', './deprecated-b99c04b5.js', './index-caa5c4e5.js', './component-event-handler-b65b5a5a.js', './terrain-asset-1902cdce.js'], function (exports) {
    'use strict';
    var legacyCC, Enum, errorID, warnID, warn, ccclass, _applyDecoratedDescriptor, editable, _inherits, _createClass, equals, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _get, Asset, serializable, Vec3, EDITOR, error, type, executeInEditMode, help, menu, displayOrder, tooltip, visible, Component, Eventify, readOnly, displayName, absMax, replaceProperty, removeProperty, js, RecyclePool, game, disallowMultiple, executionOrder, aabb, sphere, Mesh, requireComponent, director, Director, System, TerrainAsset;
    return {
        setters: [function (module) {
            legacyCC = module.l;
            Enum = module.aj;
            errorID = module.y;
            warnID = module.x;
            warn = module.w;
            ccclass = module.c;
            _applyDecoratedDescriptor = module._;
            editable = module.F;
            _inherits = module.b;
            _createClass = module.j;
            equals = module.a0;
            _classCallCheck = module.d;
            _possibleConstructorReturn = module.e;
            _getPrototypeOf = module.f;
            _initializerDefineProperty = module.g;
            _assertThisInitialized = module.i;
            _get = module.aN;
            Asset = module.aC;
            serializable = module.s;
            Vec3 = module.V;
            EDITOR = module.a$;
            error = module.p;
            type = module.t;
            executeInEditMode = module.b1;
            help = module.h;
            menu = module.m;
            displayOrder = module.b2;
            tooltip = module.a;
            visible = module.b5;
            Component = module.C;
            Eventify = module.aA;
            readOnly = module.bM;
            displayName = module.b3;
            absMax = module.ah;
            replaceProperty = module.ao;
            removeProperty = module.ap;
            js = module.n;
        }, function (module) {
            RecyclePool = module.R;
            game = module.bi;
            disallowMultiple = module.d9;
            executionOrder = module.dd;
            aabb = module.dB;
            sphere = module.dA;
            Mesh = module.at;
            requireComponent = module.da;
        }, function () {}, function (module) {
            director = module.d;
            Director = module.D;
            System = module.a;
        }, function (module) {
            TerrainAsset = module.T;
        }],
        execute: function () {

            exports({
                E: void 0,
                a: void 0,
                s: select
            });

            /**
             * @hidden
             */

            var WRAPPER;
            var physicsEngineId;
            function select(id, wrapper) {
              physicsEngineId = id;
              legacyCC._global['CC_PHYSICS_BUILTIN'] = id == 'builtin';
              legacyCC._global['CC_PHYSICS_CANNON'] = id == "cannon.js";
              legacyCC._global['CC_PHYSICS_AMMO'] = id == "ammo.js";
              WRAPPER = wrapper;
            }

            /**
             * @category physics
             */
            var ERigidBodyType;

            (function (ERigidBodyType) {
              ERigidBodyType[ERigidBodyType["DYNAMIC"] = 1] = "DYNAMIC";
              ERigidBodyType[ERigidBodyType["STATIC"] = 2] = "STATIC";
              ERigidBodyType[ERigidBodyType["KINEMATIC"] = 4] = "KINEMATIC";
            })(ERigidBodyType || (ERigidBodyType = exports('E', {})));

            var EAxisDirection;

            (function (EAxisDirection) {
              EAxisDirection[EAxisDirection["X_AXIS"] = 0] = "X_AXIS";
              EAxisDirection[EAxisDirection["Y_AXIS"] = 1] = "Y_AXIS";
              EAxisDirection[EAxisDirection["Z_AXIS"] = 2] = "Z_AXIS";
            })(EAxisDirection || (EAxisDirection = exports('a', {})));

            Enum(EAxisDirection);
            var ESimplexType;

            (function (ESimplexType) {
              ESimplexType[ESimplexType["VERTEX"] = 1] = "VERTEX";
              ESimplexType[ESimplexType["LINE"] = 2] = "LINE";
              ESimplexType[ESimplexType["TRIANGLE"] = 3] = "TRIANGLE";
              ESimplexType[ESimplexType["TETRAHEDRON"] = 4] = "TETRAHEDRON";
            })(ESimplexType || (ESimplexType = {}));

            Enum(ESimplexType);
            var EColliderType;

            (function (EColliderType) {
              EColliderType[EColliderType["BOX"] = 0] = "BOX";
              EColliderType[EColliderType["SPHERE"] = 1] = "SPHERE";
              EColliderType[EColliderType["CAPSULE"] = 2] = "CAPSULE";
              EColliderType[EColliderType["CYLINDER"] = 3] = "CYLINDER";
              EColliderType[EColliderType["CONE"] = 4] = "CONE";
              EColliderType[EColliderType["MESH"] = 5] = "MESH";
              EColliderType[EColliderType["PLANE"] = 6] = "PLANE";
              EColliderType[EColliderType["SIMPLEX"] = 7] = "SIMPLEX";
              EColliderType[EColliderType["TERRAIN"] = 8] = "TERRAIN";
            })(EColliderType || (EColliderType = {}));

            Enum(EColliderType);
            var EConstraintType;

            (function (EConstraintType) {
              EConstraintType[EConstraintType["POINT_TO_POINT"] = 0] = "POINT_TO_POINT";
              EConstraintType[EConstraintType["HINGE"] = 1] = "HINGE";
              EConstraintType[EConstraintType["CONE_TWIST"] = 2] = "CONE_TWIST";
            })(EConstraintType || (EConstraintType = {}));

            Enum(EConstraintType);

            /**
             * @hidden
             */
            function checkPhysicsModule(obj) {
              if ( obj == null) {
                errorID(9600);
                return true;
              }

              return false;
            }
            function createPhysicsWorld() {
              if ( checkPhysicsModule(WRAPPER.PhysicsWorld)) {
                return null;
              }

              return new WRAPPER.PhysicsWorld();
            }
            function createRigidBody() {
              if ( checkPhysicsModule(WRAPPER.RigidBody)) {
                return null;
              }

              return new WRAPPER.RigidBody();
            }
            var CREATE_COLLIDER_PROXY = {
              INITED: false
            };

            var FUNC = function FUNC() {
              return 0;
            };

            var ENTIRE_SHAPE = {
              impl: null,
              collider: null,
              attachedRigidBody: null,
              initialize: FUNC,
              onLoad: FUNC,
              onEnable: FUNC,
              onDisable: FUNC,
              onDestroy: FUNC,
              setGroup: FUNC,
              getGroup: FUNC,
              addGroup: FUNC,
              removeGroup: FUNC,
              setMask: FUNC,
              getMask: FUNC,
              addMask: FUNC,
              removeMask: FUNC,
              setMaterial: FUNC,
              setAsTrigger: FUNC,
              setCenter: FUNC,
              getAABB: FUNC,
              getBoundingSphere: FUNC,
              setSize: FUNC,
              setRadius: FUNC,
              setCylinderHeight: FUNC,
              setDirection: FUNC,
              setHeight: FUNC,
              setShapeType: FUNC,
              setVertices: FUNC,
              setMesh: FUNC,
              setTerrain: FUNC,
              setNormal: FUNC,
              setConstant: FUNC
            };
            function createShape(type) {
              initColliderProxy();
              return CREATE_COLLIDER_PROXY[type]();
            }

            function initColliderProxy() {
              if (CREATE_COLLIDER_PROXY.INITED) return;
              CREATE_COLLIDER_PROXY.INITED = true;
              var PHYSICS_BUILTIN = legacyCC._global['CC_PHYSICS_BUILTIN'];
              var PHYSICS_CANNON = legacyCC._global['CC_PHYSICS_CANNON'];
              var PHYSICS_AMMO = legacyCC._global['CC_PHYSICS_AMMO'];

              CREATE_COLLIDER_PROXY[EColliderType.BOX] = function createBoxShape(size) {
                if ( checkPhysicsModule(WRAPPER.BoxShape)) {
                  return ENTIRE_SHAPE;
                }

                return new WRAPPER.BoxShape(size);
              };

              CREATE_COLLIDER_PROXY[EColliderType.SPHERE] = function createSphereShape(radius) {
                if ( checkPhysicsModule(WRAPPER.SphereShape)) {
                  return ENTIRE_SHAPE;
                }

                return new WRAPPER.SphereShape(radius);
              };

              CREATE_COLLIDER_PROXY[EColliderType.CAPSULE] = function createCapsuleShape() {
                var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
                var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
                var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

                if (PHYSICS_BUILTIN || PHYSICS_AMMO) {
                  if ( checkPhysicsModule(WRAPPER.CapsuleShape)) {
                    return ENTIRE_SHAPE;
                  }

                  return new WRAPPER.CapsuleShape(radius, height, dir);
                } else {
                  warnID(9610);
                  return ENTIRE_SHAPE;
                }
              };

              CREATE_COLLIDER_PROXY[EColliderType.CYLINDER] = function createCylinderShape() {
                var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
                var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
                var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

                if (PHYSICS_CANNON || PHYSICS_AMMO) {
                  if ( checkPhysicsModule(WRAPPER.CylinderShape)) {
                    return ENTIRE_SHAPE;
                  }

                  return new WRAPPER.CylinderShape(radius, height, dir);
                } else {
                  warnID(9612);
                  return ENTIRE_SHAPE;
                }
              };

              CREATE_COLLIDER_PROXY[EColliderType.CONE] = function createConeShape() {
                var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
                var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

                if (PHYSICS_CANNON || PHYSICS_AMMO) {
                  if ( checkPhysicsModule(WRAPPER.ConeShape)) {
                    return ENTIRE_SHAPE;
                  }

                  return new WRAPPER.ConeShape(radius, height, dir);
                } else {
                  warnID(9612);
                  return ENTIRE_SHAPE;
                }
              };

              CREATE_COLLIDER_PROXY[EColliderType.MESH] = function createTrimeshShape() {
                if (PHYSICS_CANNON || PHYSICS_AMMO) {
                  if ( checkPhysicsModule(WRAPPER.TrimeshShape)) {
                    return ENTIRE_SHAPE;
                  }

                  return new WRAPPER.TrimeshShape();
                } else {
                  warnID(9611);
                  return ENTIRE_SHAPE;
                }
              };

              CREATE_COLLIDER_PROXY[EColliderType.TERRAIN] = function createTerrainShape() {
                if (PHYSICS_CANNON || PHYSICS_AMMO) {
                  if ( checkPhysicsModule(WRAPPER.TerrainShape)) {
                    return ENTIRE_SHAPE;
                  }

                  return new WRAPPER.TerrainShape();
                } else {
                  warn("[Physics]: builtin physics system doesn't support cylinder collider");
                  return ENTIRE_SHAPE;
                }
              };

              CREATE_COLLIDER_PROXY[EColliderType.SIMPLEX] = function createSimplexShape() {
                if (PHYSICS_CANNON || PHYSICS_AMMO) {
                  if ( checkPhysicsModule(WRAPPER.SimplexShape)) {
                    return ENTIRE_SHAPE;
                  }

                  return new WRAPPER.SimplexShape();
                } else {
                  warn("[Physics]: builtin physics system doesn't support simple collider");
                  return ENTIRE_SHAPE;
                }
              };

              CREATE_COLLIDER_PROXY[EColliderType.PLANE] = function createPlaneShape() {
                if (PHYSICS_CANNON || PHYSICS_AMMO) {
                  if ( checkPhysicsModule(WRAPPER.PlaneShape)) {
                    return ENTIRE_SHAPE;
                  }

                  return new WRAPPER.PlaneShape();
                } else {
                  warn("[Physics]: builtin physics system doesn't support plane collider");
                  return ENTIRE_SHAPE;
                }
              };
            } /// CREATE CONSTRAINT ///


            var CREATE_CONSTRAINT_PROXY = {
              INITED: false
            };
            var ENTIRE_CONSTRAINT = {
              'impl': null,
              'initialize': FUNC,
              'onLoad': FUNC,
              'onEnable': FUNC,
              'onDisable': FUNC,
              'onDestroy': FUNC,
              'setEnableCollision': FUNC,
              'setConnectedBody': FUNC,
              'setPivotA': FUNC,
              'setPivotB': FUNC
            };
            function createConstraint(type) {
              initConstraintProxy();
              return CREATE_CONSTRAINT_PROXY[type]();
            }

            function initConstraintProxy() {
              if (CREATE_CONSTRAINT_PROXY.INITED) return;
              CREATE_CONSTRAINT_PROXY.INITED = true;
              var PHYSICS_BUILTIN = legacyCC._global['CC_PHYSICS_BUILTIN'];
              var PHYSICS_CANNON = legacyCC._global['CC_PHYSICS_CANNON'];
              var PHYSICS_AMMO = legacyCC._global['CC_PHYSICS_AMMO'];

              CREATE_CONSTRAINT_PROXY[EConstraintType.POINT_TO_POINT] = function createPointToPointConstraint() {
                if (PHYSICS_CANNON || PHYSICS_AMMO) {
                  if ( checkPhysicsModule(WRAPPER.PointToPointConstraint)) {
                    return ENTIRE_CONSTRAINT;
                  }

                  return new WRAPPER.PointToPointConstraint();
                } else {
                  warn("[Physics]: builtin physics system doesn't support point to point constraint");
                  return ENTIRE_CONSTRAINT;
                }
              };

              CREATE_CONSTRAINT_PROXY[EConstraintType.HINGE] = function createHingeConstraint() {
                if (PHYSICS_CANNON || PHYSICS_AMMO) {
                  if ( checkPhysicsModule(WRAPPER.HingeConstraint)) {
                    return ENTIRE_CONSTRAINT;
                  }

                  return new WRAPPER.HingeConstraint();
                } else {
                  warn("[Physics]: builtin physics system doesn't support hinge constraint");
                  return ENTIRE_CONSTRAINT;
                }
              };

              CREATE_CONSTRAINT_PROXY[EConstraintType.CONE_TWIST] = function createConeTwistConstraint() {
                if (PHYSICS_CANNON || PHYSICS_AMMO) {
                  if ( checkPhysicsModule(WRAPPER.ConeTwistConstraint)) {
                    return null;
                  }

                  return new WRAPPER.ConeTwistConstraint();
                } else {
                  warn("[Physics]: builtin physics system doesn't support cone twist constraint");
                  return ENTIRE_CONSTRAINT;
                }
              };
            }

            var _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _temp;
            /**
             * @en
             * Physics materials.
             * @zh
             * 物理材质。
             */

            var PhysicMaterial = exports('j', (_dec = ccclass('cc.PhysicMaterial'), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Asset) {
              _inherits(PhysicMaterial, _Asset);

              _createClass(PhysicMaterial, [{
                key: "friction",

                /**
                 * @en
                 * Gets all physics material instances.
                 * @zh
                 * 获取所有的物理材质实例。
                 */

                /**
                 * @en
                 * Friction for this material.
                 * @zh
                 * 此材质的摩擦系数。
                 */
                get: function get() {
                  return this._friction;
                },
                set: function set(value) {
                  if (!equals(this._friction, value)) {
                    this._friction = value;
                    this.emit('physics_material_update');
                  }
                }
                /**
                 * @en
                 * Rolling friction for this material.
                 * @zh
                 * 此材质的滚动摩擦系数。
                 */

              }, {
                key: "rollingFriction",
                get: function get() {
                  return this._rollingFriction;
                },
                set: function set(value) {
                  if (!equals(this._rollingFriction, value)) {
                    this._rollingFriction = value;
                    this.emit('physics_material_update');
                  }
                }
                /**
                 * @en
                 * Spinning friction for this material.
                 * @zh
                 * 此材质的自旋摩擦系数。
                 */

              }, {
                key: "spinningFriction",
                get: function get() {
                  return this._spinningFriction;
                },
                set: function set(value) {
                  if (!equals(this._spinningFriction, value)) {
                    this._spinningFriction = value;
                    this.emit('physics_material_update');
                  }
                }
                /**
                 * @en
                 * Restitution for this material.
                 * @zh
                 * 此材质的回弹系数。
                 */

              }, {
                key: "restitution",
                get: function get() {
                  return this._restitution;
                },
                set: function set(value) {
                  if (!equals(this._restitution, value)) {
                    this._restitution = value;
                    this.emit('physics_material_update');
                  }
                }
              }]);

              function PhysicMaterial() {
                var _this;

                _classCallCheck(this, PhysicMaterial);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(PhysicMaterial).call(this));

                _initializerDefineProperty(_this, "_friction", _descriptor, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_rollingFriction", _descriptor2, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_spinningFriction", _descriptor3, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_restitution", _descriptor4, _assertThisInitialized(_this));

                PhysicMaterial.allMaterials.push(_assertThisInitialized(_this));

                if (_this._uuid == '') {
                  _this._uuid = 'pm_' + PhysicMaterial._idCounter++;
                }

                return _this;
              }
              /**
               * @en
               * clone.
               * @zh
               * 克隆。
               */


              _createClass(PhysicMaterial, [{
                key: "clone",
                value: function clone() {
                  var c = new PhysicMaterial();
                  c._friction = this._friction;
                  c._restitution = this._restitution;
                  c._rollingFriction = this._rollingFriction;
                  c._spinningFriction = this._spinningFriction;
                  return c;
                }
                /**
                 * @en
                 * destroy.
                 * @zh
                 * 销毁。
                 * @return 是否成功
                 */

              }, {
                key: "destroy",
                value: function destroy() {
                  if (_get(_getPrototypeOf(PhysicMaterial.prototype), "destroy", this).call(this)) {
                    var idx = PhysicMaterial.allMaterials.indexOf(this);

                    if (idx >= 0) {
                      PhysicMaterial.allMaterials.splice(idx, 1);
                    }

                    return true;
                  } else {
                    return false;
                  }
                }
              }]);

              return PhysicMaterial;
            }(Asset), _class3.allMaterials = [], _class3._idCounter = 0, _temp), (_applyDecoratedDescriptor(_class2.prototype, "friction", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "friction"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "rollingFriction", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "rollingFriction"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spinningFriction", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "spinningFriction"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "restitution", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "restitution"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_friction", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0.5;
              }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_rollingFriction", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0.1;
              }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_spinningFriction", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0.1;
              }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_restitution", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0.1;
              }
            })), _class2)) || _class));

            /**
             * @en
             * Used to store physics ray test results.
             * @zh
             * 用于保存物理射线检测结果。
             */
            var PhysicsRayResult = exports('b', /*#__PURE__*/function () {
              function PhysicsRayResult() {
                _classCallCheck(this, PhysicsRayResult);

                this._hitPoint = new Vec3();
                this._hitNormal = new Vec3();
                this._distance = 0;
                this._collider = null;
              }

              _createClass(PhysicsRayResult, [{
                key: "_assign",

                /**
                 * @en
                 * internal methods.
                 * @zh
                 * 设置射线，此方法由引擎内部使用，请勿在外部脚本调用。
                 */
                value: function _assign(hitPoint, distance, collider, hitNormal) {
                  Vec3.copy(this._hitPoint, hitPoint);
                  Vec3.copy(this._hitNormal, hitNormal);
                  this._distance = distance;
                  this._collider = collider;
                }
                /**
                 * @en
                 * clone.
                 * @zh
                 * 克隆。
                 */

              }, {
                key: "clone",
                value: function clone() {
                  var c = new PhysicsRayResult();
                  Vec3.copy(c._hitPoint, this._hitPoint);
                  Vec3.copy(c._hitNormal, this._hitNormal);
                  c._distance = this._distance;
                  c._collider = this._collider;
                  return c;
                }
              }, {
                key: "hitPoint",

                /**
                 * @en
                 * The hit point，in world space.
                 * @zh
                 * 在世界坐标系下的击中点。
                 */
                get: function get() {
                  return this._hitPoint;
                }
                /**
                 * @en
                 * The distance between the ray origin with the hit.
                 * @zh
                 * 距离。
                 */

              }, {
                key: "distance",
                get: function get() {
                  return this._distance;
                }
                /**
                 * @en
                 * The collider hit by the ray.
                 * @zh
                 * 击中的碰撞盒
                 */

              }, {
                key: "collider",
                get: function get() {
                  return this._collider;
                }
                /**
                 * @en
                 * The normal of the hit plane，in world space.
                 * @zh
                 * 在世界坐标系下击中面的法线。
                 */

              }, {
                key: "hitNormal",
                get: function get() {
                  return this._hitNormal;
                }
              }]);

              return PhysicsRayResult;
            }());

            var PhysicsGroup;

            (function (PhysicsGroup) {
              PhysicsGroup[PhysicsGroup["DEFAULT"] = 1] = "DEFAULT";
            })(PhysicsGroup || (PhysicsGroup = {}));

            Enum(PhysicsGroup);
            legacyCC.internal.PhysicsGroup = PhysicsGroup;

            var CollisionMatrix = function CollisionMatrix() {
              var _this = this;

              _classCallCheck(this, CollisionMatrix);

              this.updateArray = [];

              var _loop = function _loop(i) {
                var key = 1 << i;
                _this["_".concat(key)] = 0;
                Object.defineProperty(_this, key, {
                  'get': function get() {
                    return this["_".concat(key)];
                  },
                  'set': function set(v) {
                    var self = this;

                    if (self["_".concat(key)] != v) {
                      self["_".concat(key)] = v;

                      if (self.updateArray.indexOf(key) < 0) {
                        self.updateArray.push(key);
                      }
                    }
                  }
                });
              };

              for (var i = 0; i < 32; i++) {
                _loop(i);
              }

              this["_1"] = PhysicsGroup.DEFAULT;
            };
            /**
             * @en
             * Physics system.
             * @zh
             * 物理系统。
             */


            var PhysicsSystem = exports('P', /*#__PURE__*/function (_System) {
              _inherits(PhysicsSystem, _System);

              _createClass(PhysicsSystem, [{
                key: "enable",

                /**
                 * @en
                 * Gets or sets whether the physical system is enabled, which can be used to pause or continue running the physical system.
                 * @zh
                 * 获取或设置是否启用物理系统，可以用于暂停或继续运行物理系统。
                 */
                get: function get() {
                  return this._enable;
                },
                set: function set(value) {
                  this._enable = value;
                }
                /**
                 * @zh
                 * Gets or sets whether the physical system allows automatic sleep, which defaults to true.
                 * @zh
                 * 获取或设置物理系统是否允许自动休眠，默认为 true。
                 */

              }, {
                key: "allowSleep",
                get: function get() {
                  return this._allowSleep;
                },
                set: function set(v) {
                  this._allowSleep = v;

                  {
                    this.physicsWorld.setAllowSleep(v);
                  }
                }
                /**
                 * @en
                 * Gets or sets the maximum number of simulated substeps per frame.
                 * @zh
                 * 获取或设置每帧模拟的最大子步数。
                 */

              }, {
                key: "maxSubSteps",
                get: function get() {
                  return this._maxSubSteps;
                },
                set: function set(value) {
                  this._maxSubSteps = value;
                }
                /**
                 * @en
                 * Gets or sets the fixed delta time consumed by each simulation step.
                 * @zh
                 * 获取或设置每步模拟消耗的固定时间。
                 */

              }, {
                key: "fixedTimeStep",
                get: function get() {
                  return this._fixedTimeStep;
                },
                set: function set(value) {
                  this._fixedTimeStep = value;
                }
                /**
                 * @en
                 * Gets or sets the value of gravity in the physical world, which defaults to (0, -10, 0).
                 * @zh
                 * 获取或设置物理世界的重力数值，默认为 (0, -10, 0)。
                 */

              }, {
                key: "gravity",
                get: function get() {
                  return this._gravity;
                },
                set: function set(gravity) {
                  this._gravity.set(gravity);

                  {
                    this.physicsWorld.setGravity(gravity);
                  }
                }
                /**
                 * @en
                 * Gets or sets the default speed threshold for going to sleep.
                 * @zh
                 * 获取或设置进入休眠的默认速度临界值。
                 */

              }, {
                key: "sleepThreshold",
                get: function get() {
                  return this._sleepThreshold;
                },
                set: function set(v) {
                  this._sleepThreshold = v;
                }
                /**
                 * @en
                 * Turn on or off the automatic simulation.
                 * @zh
                 * 获取或设置是否自动模拟。
                 */

              }, {
                key: "autoSimulation",
                get: function get() {
                  return this._autoSimulation;
                },
                set: function set(value) {
                  this._autoSimulation = value;
                }
                /**
                 * @en
                 * Gets the global default physical material.
                 * @zh
                 * 获取全局的默认物理材质。
                 */

              }, {
                key: "defaultMaterial",
                get: function get() {
                  return this._material;
                }
                /**
                 * @en
                 * Gets the wrappered object of the physical world through which you can access the actual underlying object.
                 * @zh
                 * 获取物理世界的封装对象，通过它你可以访问到实际的底层对象。
                 */

              }], [{
                key: "PHYSICS_NONE",
                get: function get() {
                  return !physicsEngineId;
                }
              }, {
                key: "PHYSICS_BUILTIN",
                get: function get() {
                  return physicsEngineId === 'builtin';
                }
              }, {
                key: "PHYSICS_CANNON",
                get: function get() {
                  return physicsEngineId === 'cannon.js';
                }
              }, {
                key: "PHYSICS_AMMO",
                get: function get() {
                  return physicsEngineId === 'ammo.js';
                }
                /**
                 * @en
                 * Gets the ID of the system.
                 * @zh
                 * 获取此系统的ID。
                 */

              }, {
                key: "PhysicsGroup",

                /**
                 * @en
                 * Gets the predefined physics groups.
                 * @zh
                 * 获取预定义的物理分组。
                 */
                get: function get() {
                  return PhysicsGroup;
                }
                /**
                 * @en
                 * Gets the physical system instance.
                 * @zh
                 * 获取物理系统实例。
                 */

              }, {
                key: "instance",
                get: function get() {
                  if ( checkPhysicsModule(PhysicsSystem._instance)) {
                    return null;
                  }

                  return PhysicsSystem._instance;
                }
              }]);

              function PhysicsSystem() {
                var _this2;

                _classCallCheck(this, PhysicsSystem);

                _this2 = _possibleConstructorReturn(this, _getPrototypeOf(PhysicsSystem).call(this));
                _this2.physicsWorld = void 0;
                _this2.raycastClosestResult = new PhysicsRayResult();
                _this2.raycastResults = [];
                _this2.collisionMatrix = new CollisionMatrix();
                _this2.useCollisionMatrix = void 0;
                _this2.useNodeChains = void 0;
                _this2._enable = true;
                _this2._allowSleep = true;
                _this2._maxSubSteps = 1;
                _this2._subStepCount = 0;
                _this2._fixedTimeStep = 1.0 / 60.0;
                _this2._autoSimulation = true;
                _this2._accumulator = 0;
                _this2._sleepThreshold = 0.1;
                _this2._gravity = new Vec3(0, -10, 0);
                _this2._material = new PhysicMaterial();
                _this2.raycastOptions = {
                  'group': -1,
                  'mask': -1,
                  'queryTrigger': true,
                  'maxDistance': 10000000
                };
                _this2.raycastResultPool = new RecyclePool(function () {
                  return new PhysicsRayResult();
                }, 1);
                var config = game.config ? game.config.physics : null;

                if (config) {
                  Vec3.copy(_this2._gravity, config.gravity);
                  _this2._allowSleep = config.allowSleep;
                  _this2._fixedTimeStep = config.fixedTimeStep;
                  _this2._maxSubSteps = config.maxSubSteps;
                  _this2._sleepThreshold = config.sleepThreshold;
                  _this2.autoSimulation = config.autoSimulation;
                  _this2.useNodeChains = config.useNodeChains;
                  _this2.useCollisionMatrix = config.useCollsionMatrix;

                  if (config.defaultMaterial) {
                    _this2._material.friction = config.defaultMaterial.friction;
                    _this2._material.rollingFriction = config.defaultMaterial.rollingFriction;
                    _this2._material.spinningFriction = config.defaultMaterial.spinningFriction;
                    _this2._material.restitution = config.defaultMaterial.restitution;
                  }

                  if (config.collisionMatrix) {
                    for (var i in config.collisionMatrix) {
                      var key = 1 << parseInt(i);
                      _this2.collisionMatrix["_".concat(key)] = config.collisionMatrix[i];
                    }
                  }
                } else {
                  _this2.useCollisionMatrix = false;
                  _this2.useNodeChains = false;
                }

                _this2._material.on('physics_material_update', _this2._updateMaterial, _assertThisInitialized(_this2));

                _this2.physicsWorld = createPhysicsWorld();

                _this2.physicsWorld.setGravity(_this2._gravity);

                _this2.physicsWorld.setAllowSleep(_this2._allowSleep);

                _this2.physicsWorld.setDefaultMaterial(_this2._material);

                return _this2;
              }
              /**
               * @en
               * The lifecycle function is automatically executed after all components `update` and `lateUpadte` are executed.
               * @zh
               * 生命周期函数，在所有组件的`update`和`lateUpadte`执行完成后自动执行。
               * @param deltaTime the time since last frame.
               */


              _createClass(PhysicsSystem, [{
                key: "postUpdate",
                value: function postUpdate(deltaTime) {

                  if (!this._enable) {
                    this.physicsWorld.syncSceneToPhysics();
                    return;
                  }

                  if (this._autoSimulation) {
                    this._subStepCount = 0;
                    this._accumulator += deltaTime;
                    director.emit(Director.EVENT_BEFORE_PHYSICS);

                    while (this._subStepCount < this._maxSubSteps) {
                      if (this._accumulator > this._fixedTimeStep) {
                        this.updateCollisionMatrix();
                        this.physicsWorld.syncSceneToPhysics();
                        this.physicsWorld.step(this._fixedTimeStep);
                        this._accumulator -= this._fixedTimeStep;
                        this._subStepCount++;
                        this.physicsWorld.emitEvents(); // TODO: nesting the dirty flag reset between the syncScenetoPhysics and the simulation to reduce calling syncScenetoPhysics.

                        this.physicsWorld.syncSceneToPhysics();
                      } else {
                        this.physicsWorld.syncSceneToPhysics();
                        break;
                      }
                    }

                    director.emit(Director.EVENT_AFTER_PHYSICS);
                  }
                }
                /**
                 * @en
                 * Reset the accumulator of time to given value.
                 * @zh
                 * 重置时间累积总量为给定值。
                 */

              }, {
                key: "resetAccumulator",
                value: function resetAccumulator() {
                  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                  this._accumulator = time;
                }
                /**
                 * @en
                 * Perform simulation steps for the physics world.
                 * @zh
                 * 执行物理世界的模拟步进。
                 * @param fixedTimeStep
                 */

              }, {
                key: "step",
                value: function step(fixedTimeStep, deltaTime, maxSubSteps) {
                  this.physicsWorld.step(fixedTimeStep, deltaTime, maxSubSteps);
                }
                /**
                 * @en
                 * Sync the scene world transform changes to the physics world.
                 * @zh
                 * 同步场景世界的变化信息到物理世界中。
                 */

              }, {
                key: "syncSceneToPhysics",
                value: function syncSceneToPhysics() {
                  this.physicsWorld.syncSceneToPhysics();
                }
                /**
                 * @en
                 * Emit trigger and collision events.
                 * @zh
                 * 触发`trigger`和`collision`事件。
                 */

              }, {
                key: "emitEvents",
                value: function emitEvents() {
                  this.physicsWorld.emitEvents();
                }
                /**
                 * @en
                 * Updates the mask corresponding to the collision matrix for the lowLevel rigid-body instance.
                 * Automatic execution during automatic simulation.
                 * @zh
                 * 更新底层实例对应于碰撞矩阵的掩码，开启自动模拟时会自动更新。
                 */

              }, {
                key: "updateCollisionMatrix",
                value: function updateCollisionMatrix() {
                  if (this.useCollisionMatrix) {
                    var ua = this.collisionMatrix.updateArray;

                    while (ua.length > 0) {
                      var group = ua.pop();
                      var mask = this.collisionMatrix[group];
                      this.physicsWorld.updateCollisionMatrix(group, mask);
                    }
                  }
                }
                /**
                 * @en
                 * Reset the mask corresponding to all groups of the collision matrix to the given value, the default given value is' 0xffffffff '.
                 * @zh
                 * 重置碰撞矩阵所有分组对应掩码为给定值，默认给定值为`0xffffffff`。
                 */

              }, {
                key: "resetCollisionMatrix",
                value: function resetCollisionMatrix() {
                  var mask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0xffffffff;

                  for (var i = 0; i < 32; i++) {
                    var key = 1 << i;
                    this.collisionMatrix["".concat(key)] = mask;
                  }
                }
                /**
                 * @en
                 * Are collisions between `group1` and `group2`?
                 * @zh
                 * 两分组是否会产生碰撞？
                 */

              }, {
                key: "isCollisionGroup",
                value: function isCollisionGroup(group1, group2) {
                  var cm = this.collisionMatrix;
                  var mask1 = cm[group1];
                  var mask2 = cm[group2];

                  {
                    if (mask1 == undefined || mask2 == undefined) {
                      error("[PHYSICS]: 'isCollisionGroup', the group do not exist in the collision matrix.");
                      return false;
                    }
                  }

                  return group1 & mask2 && group2 & mask1;
                }
                /**
                 * @en
                 * Sets whether collisions occur between `group1` and `group2`.
                 * @zh
                 * 设置两分组间是否产生碰撞。
                 * @param collision is collision occurs?
                 */

              }, {
                key: "setCollisionGroup",
                value: function setCollisionGroup(group1, group2) {
                  var collision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
                  var cm = this.collisionMatrix;

                  {
                    if (cm[group1] == undefined || cm[group2] == undefined) {
                      error("[PHYSICS]: 'setCollisionGroup', the group do not exist in the collision matrix.");
                      return;
                    }
                  }

                  if (collision) {
                    cm[group1] |= group2;
                    cm[group2] |= group1;
                  } else {
                    cm[group1] &= ~group2;
                    cm[group2] &= ~group1;
                  }
                }
                /**
                 * @en
                 * Collision detect all collider, and record all the detected results, through PhysicsSystem.Instance.RaycastResults access to the results.
                 * @zh
                 * 检测所有的碰撞盒，并记录所有被检测到的结果，通过 PhysicsSystem.instance.raycastResults 访问结果。
                 * @param worldRay 世界空间下的一条射线
                 * @param mask 掩码，默认为 0xffffffff
                 * @param maxDistance 最大检测距离，默认为 10000000，目前请勿传入 Infinity 或 Number.MAX_VALUE
                 * @param queryTrigger 是否检测触发器
                 * @return boolean 表示是否有检测到碰撞盒
                 */

              }, {
                key: "raycast",
                value: function raycast(worldRay) {
                  var mask = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0xffffffff;
                  var maxDistance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10000000;
                  var queryTrigger = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
                  this.updateCollisionMatrix();
                  this.raycastResultPool.reset();
                  this.raycastResults.length = 0;
                  this.raycastOptions.mask = mask;
                  this.raycastOptions.maxDistance = maxDistance;
                  this.raycastOptions.queryTrigger = queryTrigger;
                  return this.physicsWorld.raycast(worldRay, this.raycastOptions, this.raycastResultPool, this.raycastResults);
                }
                /**
                 * @en
                 * Collision detect all collider, and record and ray test results with the shortest distance by PhysicsSystem.Instance.RaycastClosestResult access to the results.
                 * @zh
                 * 检测所有的碰撞盒，并记录与射线距离最短的检测结果，通过 PhysicsSystem.instance.raycastClosestResult 访问结果。
                 * @param worldRay 世界空间下的一条射线
                 * @param mask 掩码，默认为 0xffffffff
                 * @param maxDistance 最大检测距离，默认为 10000000，目前请勿传入 Infinity 或 Number.MAX_VALUE
                 * @param queryTrigger 是否检测触发器
                 * @return boolean 表示是否有检测到碰撞盒
                 */

              }, {
                key: "raycastClosest",
                value: function raycastClosest(worldRay) {
                  var mask = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0xffffffff;
                  var maxDistance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10000000;
                  var queryTrigger = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
                  this.updateCollisionMatrix();
                  this.raycastOptions.mask = mask;
                  this.raycastOptions.maxDistance = maxDistance;
                  this.raycastOptions.queryTrigger = queryTrigger;
                  return this.physicsWorld.raycastClosest(worldRay, this.raycastOptions, this.raycastClosestResult);
                }
              }, {
                key: "_updateMaterial",
                value: function _updateMaterial() {
                  this.physicsWorld.setDefaultMaterial(this._material);
                }
              }]);

              return PhysicsSystem;
            }(System));
            PhysicsSystem.ID = 'PHYSICS';
            PhysicsSystem._instance = void 0;
            director.once(Director.EVENT_INIT, function () {
              initPhysicsSystem();
            });

            function initPhysicsSystem() {
              if (!PhysicsSystem.PHYSICS_NONE && !EDITOR) {
                var sys = new legacyCC.PhysicsSystem();
                legacyCC.PhysicsSystem._instance = sys;
                director.registerSystem(PhysicsSystem.ID, sys, 0);
              }
            }

            var _dec$1, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _class$1, _class2$1, _descriptor$1, _descriptor2$1, _descriptor3$1, _descriptor4$1, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _class3$1, _temp$1;
            /**
             * @en
             * Rigid body component.
             * @zh
             * 刚体组件。
             */

            var RigidBody = exports('R', (_dec$1 = ccclass('cc.RigidBody'), _dec2 = help(), _dec3 = menu(), _dec4 = executionOrder(-1), _dec5 = type(PhysicsSystem.PhysicsGroup), _dec6 = displayOrder(), _dec7 = tooltip(), _dec8 = displayOrder(), _dec9 = tooltip(), _dec10 = displayOrder(), _dec11 = visible(), _dec12 = tooltip(), _dec13 = displayOrder(), _dec14 = visible(), _dec15 = tooltip(), _dec16 = displayOrder(), _dec17 = visible(), _dec18 = tooltip(), _dec19 = displayOrder(), _dec20 = visible(), _dec21 = tooltip(), _dec22 = displayOrder(), _dec23 = visible(), _dec24 = tooltip(), _dec25 = displayOrder(), _dec26 = visible(), _dec27 = tooltip(), _dec28 = displayOrder(), _dec29 = visible(), _dec30 = tooltip(), _dec31 = displayOrder(), _dec32 = visible(), _dec33 = tooltip(), _dec$1(_class$1 = _dec2(_class$1 = _dec3(_class$1 = executeInEditMode(_class$1 = disallowMultiple(_class$1 = _dec4(_class$1 = (_class2$1 = (_temp$1 = _class3$1 = /*#__PURE__*/function (_Component) {
              _inherits(RigidBody, _Component);

              function RigidBody() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, RigidBody);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RigidBody)).call.apply(_getPrototypeOf2, [this].concat(args)));
                _this._body = null;

                _initializerDefineProperty(_this, "_group", _descriptor$1, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_mass", _descriptor2$1, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_allowSleep", _descriptor3$1, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_linearDamping", _descriptor4$1, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_angularDamping", _descriptor5, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_fixedRotation", _descriptor6, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_isKinematic", _descriptor7, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_useGravity", _descriptor8, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_linearFactor", _descriptor9, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_angularFactor", _descriptor10, _assertThisInitialized(_this));

                return _this;
              }

              _createClass(RigidBody, [{
                key: "onLoad",
                /// COMPONENT LIFECYCLE ///
                value: function onLoad() {
                  {
                    this._body = createRigidBody();

                    this._body.initialize(this);
                  }
                }
              }, {
                key: "onEnable",
                value: function onEnable() {
                  if (this._body) {
                    this._body.onEnable();
                  }
                }
              }, {
                key: "onDisable",
                value: function onDisable() {
                  if (this._body) {
                    this._body.onDisable();
                  }
                }
              }, {
                key: "onDestroy",
                value: function onDestroy() {
                  if (this._body) {
                    this._body.onDestroy();
                  }
                } /// PUBLIC METHOD ///

                /**
                 * @en
                 * Apply force to a world point. This could, for example, be a point on the Body surface.
                 * @zh
                 * 在世界空间中，相对于刚体的质心的某点上对刚体施加作用力。
                 * @param force - 作用力
                 * @param relativePoint - 作用点，相对于刚体的质心
                 */

              }, {
                key: "applyForce",
                value: function applyForce(force, relativePoint) {
                  if (this._assertOnLoadCalled) {
                    this._body.applyForce(force, relativePoint);
                  }
                }
                /**
                 * @en
                 * Apply force to a local point. This could, for example, be a point on the Body surface.
                 * @zh
                 * 在本地空间中，相对于刚体的质心的某点上对刚体施加作用力。
                 * @param force - 作用力
                 * @param localPoint - 作用点
                 */

              }, {
                key: "applyLocalForce",
                value: function applyLocalForce(force, localPoint) {
                  if (this._assertOnLoadCalled) {
                    this._body.applyLocalForce(force, localPoint);
                  }
                }
                /**
                 * @en
                 * In world space, impulse is applied to the rigid body at some point relative to the center of mass of the rigid body.
                 * @zh
                 * 在世界空间中，相对于刚体的质心的某点上对刚体施加冲量。
                 * @param impulse - 冲量
                 * @param relativePoint - 作用点，相对于刚体的中心点
                 */

              }, {
                key: "applyImpulse",
                value: function applyImpulse(impulse, relativePoint) {
                  if (this._assertOnLoadCalled) {
                    this._body.applyImpulse(impulse, relativePoint);
                  }
                }
                /**
                 * @en
                 * In local space, impulse is applied to the rigid body at some point relative to the center of mass of the rigid body.
                 * @zh
                 * 在本地空间中，相对于刚体的质心的某点上对刚体施加冲量。
                 * @param impulse - 冲量
                 * @param localPoint - 作用点
                 */

              }, {
                key: "applyLocalImpulse",
                value: function applyLocalImpulse(impulse, localPoint) {
                  if (this._assertOnLoadCalled) {
                    this._body.applyLocalImpulse(impulse, localPoint);
                  }
                }
                /**
                 * @en
                 * In world space, torque is applied to the rigid body.
                 * @zh
                 * 在世界空间中，对刚体施加扭矩。
                 * @param torque - 扭矩
                 */

              }, {
                key: "applyTorque",
                value: function applyTorque(torque) {
                  if (this._assertOnLoadCalled) {
                    this._body.applyTorque(torque);
                  }
                }
                /**
                 * @zh
                 * 在本地空间中，对刚体施加扭矩。
                 * @param torque - 扭矩
                 */

              }, {
                key: "applyLocalTorque",
                value: function applyLocalTorque(torque) {
                  if (this._assertOnLoadCalled) {
                    this._body.applyLocalTorque(torque);
                  }
                }
                /**
                 * @en
                 * Wake up the rigid body.
                 * @zh
                 * 唤醒刚体。
                 */

              }, {
                key: "wakeUp",
                value: function wakeUp() {
                  if (this._assertOnLoadCalled) {
                    this._body.wakeUp();
                  }
                }
                /**
                 * @en
                 * Dormancy of rigid body.
                 * @zh
                 * 休眠刚体。
                 */

              }, {
                key: "sleep",
                value: function sleep() {
                  if (this._assertOnLoadCalled) {
                    this._body.sleep();
                  }
                }
                /**
                 * @en
                 * Clear the forces and velocity of the rigid body.
                 * @zh
                 * 清除刚体受到的力和速度。
                 */

              }, {
                key: "clearState",
                value: function clearState() {
                  if (this._assertOnLoadCalled) {
                    this._body.clearState();
                  }
                }
                /**
                 * @en
                 * Clear the forces of the rigid body.
                 * @zh
                 * 清除刚体受到的力。
                 */

              }, {
                key: "clearForces",
                value: function clearForces() {
                  if (this._assertOnLoadCalled) {
                    this._body.clearForces();
                  }
                }
                /**
                 * @en
                 * Clear velocity of the rigid body.
                 * @zh
                 * 清除刚体的速度。
                 */

              }, {
                key: "clearVelocity",
                value: function clearVelocity() {
                  if (this._assertOnLoadCalled) {
                    this._body.clearVelocity();
                  }
                }
                /**
                 * @en
                 * Gets the linear velocity.
                 * @zh
                 * 获取线性速度。
                 * @param out 速度 Vec3
                 */

              }, {
                key: "getLinearVelocity",
                value: function getLinearVelocity(out) {
                  if (this._assertOnLoadCalled) {
                    this._body.getLinearVelocity(out);
                  }
                }
                /**
                 * @en
                 * Sets the linear velocity.
                 * @zh
                 * 设置线性速度。
                 * @param value 速度 Vec3
                 */

              }, {
                key: "setLinearVelocity",
                value: function setLinearVelocity(value) {
                  if (this._assertOnLoadCalled) {
                    this._body.setLinearVelocity(value);
                  }
                }
                /**
                 * @en
                 * Gets the angular velocity.
                 * @zh
                 * 获取旋转速度。
                 * @param out 速度 Vec3
                 */

              }, {
                key: "getAngularVelocity",
                value: function getAngularVelocity(out) {
                  if (this._assertOnLoadCalled) {
                    this._body.getAngularVelocity(out);
                  }
                }
                /**
                 * @en
                 * Sets the angular velocity.
                 * @zh
                 * 设置旋转速度。
                 * @param value 速度 Vec3
                 */

              }, {
                key: "setAngularVelocity",
                value: function setAngularVelocity(value) {
                  if (this._assertOnLoadCalled) {
                    this._body.setAngularVelocity(value);
                  }
                } /// GROUP MASK ///

                /**
                 * @en
                 * Gets the group value.
                 * @zh
                 * 获取分组值。
                 * @returns 整数，范围为 2 的 0 次方 到 2 的 31 次方
                 */

              }, {
                key: "getGroup",
                value: function getGroup() {
                  if (this._assertOnLoadCalled) {
                    return this._body.getGroup();
                  }

                  return 0;
                }
                /**
                 * @en
                 * Sets the group value.
                 * @zh
                 * 设置分组值。
                 * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
                 */

              }, {
                key: "setGroup",
                value: function setGroup(v) {
                  if (this._assertOnLoadCalled) {
                    this.group = v;
                  }
                }
                /**
                 * @en
                 * Add a grouping value to fill in the group you want to join.
                 * @zh
                 * 添加分组值，可填要加入的 group。
                 * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
                 */

              }, {
                key: "addGroup",
                value: function addGroup(v) {
                  if (this._assertOnLoadCalled && !this._assertUseCollisionMatrix) {
                    this._body.addGroup(v);
                  }
                }
                /**
                 * @en
                 * Subtract the grouping value to fill in the group to be removed.
                 * @zh
                 * 减去分组值，可填要移除的 group。
                 * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
                 */

              }, {
                key: "removeGroup",
                value: function removeGroup(v) {
                  if (this._assertOnLoadCalled && !this._assertUseCollisionMatrix) {
                    this._body.removeGroup(v);
                  }
                }
                /**
                 * @en
                 * Gets the mask value.
                 * @zh
                 * 获取掩码值。
                 * @returns 整数，范围为 2 的 0 次方 到 2 的 31 次方
                 */

              }, {
                key: "getMask",
                value: function getMask() {
                  if (this._assertOnLoadCalled) {
                    return this._body.getMask();
                  }

                  return 0;
                }
                /**
                 * @en
                 * Sets the mask value.
                 * @zh
                 * 设置掩码值。
                 * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
                 */

              }, {
                key: "setMask",
                value: function setMask(v) {
                  if (this._assertOnLoadCalled && !this._assertUseCollisionMatrix) {
                    this._body.setMask(v);
                  }
                }
                /**
                 * @en
                 * Add mask values to fill in groups that need to be checked.
                 * @zh
                 * 添加掩码值，可填入需要检查的 group。
                 * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
                 */

              }, {
                key: "addMask",
                value: function addMask(v) {
                  if (this._assertOnLoadCalled && !this._assertUseCollisionMatrix) {
                    this._body.addMask(v);
                  }
                }
                /**
                 * @en
                 * Subtract the mask value to fill in the group that does not need to be checked.
                 * @zh
                 * 减去掩码值，可填入不需要检查的 group。
                 * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
                 */

              }, {
                key: "removeMask",
                value: function removeMask(v) {
                  if (this._assertOnLoadCalled && !this._assertUseCollisionMatrix) {
                    this._body.removeMask(v);
                  }
                }
              }, {
                key: "group",
                /// PUBLIC PROPERTY GETTER\SETTER ///

                /**
                 * @en
                 * Gets or sets the group of the rigid body.
                 * @zh
                 * 获取或设置分组。
                 */
                get: function get() {
                  return this._group;
                },
                set: function set(v) {
                  this._group = v;

                  if (this._body) {
                    this._body.setGroup(v);
                  }
                }
                /**
                 * @en
                 * Gets or sets the mass of the rigid body.
                 * @zh
                 * 获取或设置刚体的质量。
                 */

              }, {
                key: "mass",
                get: function get() {
                  return this._mass;
                },
                set: function set(value) {
                  value = value < 0 ? 0 : value;
                  this._mass = value;

                  if (this._body) {
                    this._body.setMass(value);
                  }
                }
                /**
                 * @en
                 * Gets or sets whether hibernation is allowed.
                 * @zh
                 * 获取或设置是否允许休眠。
                 */

              }, {
                key: "allowSleep",
                get: function get() {
                  return this._allowSleep;
                },
                set: function set(v) {
                  this._allowSleep = v;

                  if (this._body) {
                    this._body.setAllowSleep(v);
                  }
                }
                /**
                 * @en
                 * Gets or sets linear damping.
                 * @zh
                 * 获取或设置线性阻尼。
                 */

              }, {
                key: "linearDamping",
                get: function get() {
                  return this._linearDamping;
                },
                set: function set(value) {
                  this._linearDamping = value;

                  if (this._body) {
                    this._body.setLinearDamping(value);
                  }
                }
                /**
                 * @en
                 * Gets or sets the rotation damping.
                 * @zh
                 * 获取或设置旋转阻尼。
                 */

              }, {
                key: "angularDamping",
                get: function get() {
                  return this._angularDamping;
                },
                set: function set(value) {
                  this._angularDamping = value;

                  if (this._body) {
                    this._body.setAngularDamping(value);
                  }
                }
                /**
                 * @en
                 * Gets or sets whether a rigid body is controlled by a physical system.
                 * @zh
                 * 获取或设置刚体是否由物理系统控制运动。
                 */

              }, {
                key: "isKinematic",
                get: function get() {
                  return this._isKinematic;
                },
                set: function set(value) {
                  this._isKinematic = value;

                  if (this._body) {
                    this._body.setIsKinematic(value);
                  }
                }
                /**
                 * @en
                 * Gets or sets whether a rigid body uses gravity.
                 * @zh
                 * 获取或设置刚体是否使用重力。
                 */

              }, {
                key: "useGravity",
                get: function get() {
                  return this._useGravity;
                },
                set: function set(value) {
                  this._useGravity = value;

                  if (this._body) {
                    this._body.useGravity(value);
                  }
                }
                /**
                 * @en
                 * Gets or sets whether the rigid body is fixed for rotation.
                 * @zh
                 * 获取或设置刚体是否固定旋转。
                 */

              }, {
                key: "fixedRotation",
                get: function get() {
                  return this._fixedRotation;
                },
                set: function set(value) {
                  this._fixedRotation = value;

                  if (this._body) {
                    this._body.fixRotation(value);
                  }
                }
                /**
                 * @en
                 * Gets or sets the linear velocity factor that can be used to control the scaling of the velocity in each axis direction.
                 * @zh
                 * 获取或设置线性速度的因子，可以用来控制每个轴方向上的速度的缩放。
                 */

              }, {
                key: "linearFactor",
                get: function get() {
                  return this._linearFactor;
                },
                set: function set(value) {
                  Vec3.copy(this._linearFactor, value);

                  if (this._body) {
                    this._body.setLinearFactor(this._linearFactor);
                  }
                }
                /**
                 * @en
                 * Gets or sets the rotation speed factor that can be used to control the scaling of the rotation speed in each axis direction.
                 * @zh
                 * 获取或设置旋转速度的因子，可以用来控制每个轴方向上的旋转速度的缩放。
                 */

              }, {
                key: "angularFactor",
                get: function get() {
                  return this._angularFactor;
                },
                set: function set(value) {
                  Vec3.copy(this._angularFactor, value);

                  if (this._body) {
                    this._body.setAngularFactor(this._angularFactor);
                  }
                }
                /**
                 * @en
                 * Gets or sets the speed threshold for going to sleep.
                 * @zh
                 * 获取或设置进入休眠的速度临界值。
                 */

              }, {
                key: "sleepThreshold",
                get: function get() {
                  if (this._assertOnLoadCalled) {
                    return this._body.getSleepThreshold();
                  }

                  return 0;
                },
                set: function set(v) {
                  if (this._assertOnLoadCalled) {
                    this._body.setSleepThreshold(v);
                  }
                }
                /**
                 * @en
                 * Gets whether it is the state of awake.
                 * @zh
                 * 获取是否是唤醒的状态。
                 */

              }, {
                key: "isAwake",
                get: function get() {
                  if (this._assertOnLoadCalled) {
                    return this._body.isAwake;
                  }

                  return false;
                }
                /**
                 * @en
                 * Gets whether you can enter a dormant state.
                 * @zh
                 * 获取是否是可进入休眠的状态。
                 */

              }, {
                key: "isSleepy",
                get: function get() {
                  if (this._assertOnLoadCalled) {
                    return this._body.isSleepy;
                  }

                  return false;
                }
                /**
                 * @en
                 * Gets whether the state is dormant.
                 * @zh
                 * 获取是否是正在休眠的状态。
                 */

              }, {
                key: "isSleeping",
                get: function get() {
                  if (this._assertOnLoadCalled) {
                    return this._body.isSleeping;
                  }

                  return false;
                }
                /**
                 * @en
                 * Gets the wrapper object, through which the lowLevel instance can be accessed.
                 * @zh
                 * 获取封装对象，通过此对象可以访问到底层实例。
                 */

              }, {
                key: "body",
                get: function get() {
                  return this._body;
                }
              }, {
                key: "_assertOnLoadCalled",
                get: function get() {
                  var r = this._isOnLoadCalled == 0;

                  if (r) {
                    error('[Physics]: Please make sure that the node has been added to the scene');
                  }

                  return !r;
                }
              }, {
                key: "_assertUseCollisionMatrix",
                get: function get() {
                  if (PhysicsSystem.instance.useCollisionMatrix) {
                    error('[Physics]: useCollisionMatrix is turn on, using collision matrix instead please.');
                  }

                  return PhysicsSystem.instance.useCollisionMatrix;
                }
              }]);

              return RigidBody;
            }(Component), _class3$1.ERigidBodyType = ERigidBodyType, _temp$1), (_applyDecoratedDescriptor(_class2$1.prototype, "group", [_dec5, _dec6, _dec7], Object.getOwnPropertyDescriptor(_class2$1.prototype, "group"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "mass", [_dec8, _dec9], Object.getOwnPropertyDescriptor(_class2$1.prototype, "mass"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "allowSleep", [_dec10, _dec11, _dec12], Object.getOwnPropertyDescriptor(_class2$1.prototype, "allowSleep"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "linearDamping", [_dec13, _dec14, _dec15], Object.getOwnPropertyDescriptor(_class2$1.prototype, "linearDamping"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "angularDamping", [_dec16, _dec17, _dec18], Object.getOwnPropertyDescriptor(_class2$1.prototype, "angularDamping"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "isKinematic", [_dec19, _dec20, _dec21], Object.getOwnPropertyDescriptor(_class2$1.prototype, "isKinematic"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "useGravity", [_dec22, _dec23, _dec24], Object.getOwnPropertyDescriptor(_class2$1.prototype, "useGravity"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "fixedRotation", [_dec25, _dec26, _dec27], Object.getOwnPropertyDescriptor(_class2$1.prototype, "fixedRotation"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "linearFactor", [_dec28, _dec29, _dec30], Object.getOwnPropertyDescriptor(_class2$1.prototype, "linearFactor"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "angularFactor", [_dec31, _dec32, _dec33], Object.getOwnPropertyDescriptor(_class2$1.prototype, "angularFactor"), _class2$1.prototype), _descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_group", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return PhysicsSystem.PhysicsGroup.DEFAULT;
              }
            }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_mass", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 1;
              }
            }), _descriptor3$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_allowSleep", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return true;
              }
            }), _descriptor4$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_linearDamping", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0.1;
              }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2$1.prototype, "_angularDamping", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0.1;
              }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2$1.prototype, "_fixedRotation", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return false;
              }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2$1.prototype, "_isKinematic", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return false;
              }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2$1.prototype, "_useGravity", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return true;
              }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2$1.prototype, "_linearFactor", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return new Vec3(1, 1, 1);
              }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2$1.prototype, "_angularFactor", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return new Vec3(1, 1, 1);
              }
            })), _class2$1)) || _class$1) || _class$1) || _class$1) || _class$1) || _class$1) || _class$1));

            (function (_RigidBody) {})(RigidBody || (RigidBody = exports('R', {})));

            var _dec$2, _dec2$1, _dec3$1, _dec4$1, _dec5$1, _dec6$1, _dec7$1, _dec8$1, _dec9$1, _dec10$1, _dec11$1, _dec12$1, _dec13$1, _dec14$1, _class$2, _class2$2, _descriptor$2, _descriptor2$2, _descriptor3$2, _class3$2, _temp$2;
            /**
             * @en
             * Base class of collider.
             * @zh
             * 碰撞器的基类。
             */

            var Collider = exports('C', (_dec$2 = ccclass('cc.Collider'), _dec2$1 = type(RigidBody), _dec3$1 = displayName(), _dec4$1 = displayOrder(), _dec5$1 = type(PhysicMaterial), _dec6$1 = displayName(), _dec7$1 = displayOrder(), _dec8$1 = tooltip(), _dec9$1 = displayOrder(), _dec10$1 = tooltip(), _dec11$1 = type(Vec3), _dec12$1 = displayOrder(), _dec13$1 = tooltip(), _dec14$1 = type(PhysicMaterial), _dec$2(_class$2 = (_class2$2 = (_temp$2 = _class3$2 = /*#__PURE__*/function (_Eventify) {
              _inherits(Collider, _Eventify);

              _createClass(Collider, [{
                key: "attachedRigidBody",
                /// PUBLIC PROPERTY GETTER\SETTER ///

                /**
                 * @en
                 * Gets the collider attached rigid-body, this may be null.
                 * @zh
                 * 获取碰撞器所绑定的刚体组件，可能为 null 。
                 */
                get: function get() {
                  return findAttachedBody(this.node); // return this._attachedRigidBody;
                }
                /**
                 * @en
                 * Gets or sets the physical material for this collider.
                 * @zh
                 * 获取或设置此碰撞器的物理材质。
                 */

              }, {
                key: "sharedMaterial",
                get: function get() {
                  return this._material;
                },
                set: function set(value) {
                  {
                    this.material = value;
                  }
                }
                /**
                 * @en
                 * Gets or sets the physics material for this collider, which in Shared state will generate a new instance.
                 * @zh
                 * 获取或设置此碰撞器的物理材质，共享状态下获取将会生成新的实例。
                 */

              }, {
                key: "material",
                get: function get() {
                  if (this._isSharedMaterial && this._material != null) {
                    this._material.off('physics_material_update', this._updateMaterial, this);

                    this._material = this._material.clone();

                    this._material.on('physics_material_update', this._updateMaterial, this);

                    this._isSharedMaterial = false;
                  }

                  return this._material;
                },
                set: function set(value) {
                  if (this._shape) {
                    if (value != null && this._material != null) {
                      if (this._material._uuid != value._uuid) {
                        this._material.off('physics_material_update', this._updateMaterial, this);

                        value.on('physics_material_update', this._updateMaterial, this);
                        this._isSharedMaterial = false;
                        this._material = value;
                      }
                    } else if (value != null && this._material == null) {
                      value.on('physics_material_update', this._updateMaterial, this);
                      this._material = value;
                    } else if (value == null && this._material != null) {
                      this._material.off('physics_material_update', this._updateMaterial, this);

                      this._material = value;
                    }

                    this._updateMaterial();
                  }
                }
                /**
                 * @en
                 * Gets or sets the collider is trigger, this will be always trigger if using builtin.
                 * @zh
                 * 获取或设置碰撞器是否为触发器，若使用 builtin ，属性值无论真假 ，此碰撞器都为触发器。
                 */

              }, {
                key: "isTrigger",
                get: function get() {
                  return this._isTrigger;
                },
                set: function set(value) {
                  this._isTrigger = value;

                  if (this._shape) {
                    this._shape.setAsTrigger(this._isTrigger);
                  }
                }
                /**
                 * @en
                 * Gets or sets the center of the collider, in local space.
                 * @zh
                 * 获取或设置碰撞器的中心点。
                 */

              }, {
                key: "center",
                get: function get() {
                  return this._center;
                },
                set: function set(value) {
                  Vec3.copy(this._center, value);

                  if (this._shape) {
                    this._shape.setCenter(this._center);
                  }
                }
                /**
                 * @en
                 * Gets the wrapper object, through which the lowLevel instance can be accessed.
                 * @zh
                 * 获取封装对象，通过此对象可以访问到底层实例。
                 */

              }, {
                key: "shape",
                get: function get() {
                  return this._shape;
                }
              }, {
                key: "worldBounds",
                get: function get() {
                  if (this._aabb == null) this._aabb = new aabb();
                  if (this._shape) this._shape.getAABB(this._aabb);
                  return this._aabb;
                }
              }, {
                key: "boundingSphere",
                get: function get() {
                  if (this._boundingSphere == null) this._boundingSphere = new sphere();
                  if (this._shape) this._shape.getBoundingSphere(this._boundingSphere);
                  return this._boundingSphere;
                }
              }, {
                key: "needTriggerEvent",
                get: function get() {
                  return this._needTriggerEvent;
                }
              }, {
                key: "needCollisionEvent",
                get: function get() {
                  return this._needCollisionEvent;
                }
              }, {
                key: "_assertOnLoadCalled",
                get: function get() {
                  var r = this._isOnLoadCalled == 0;

                  if (r) {
                    error('[Physics]: Please make sure that the node has been added to the scene');
                  }

                  return !r;
                }
              }, {
                key: "_assertUseCollisionMatrix",
                get: function get() {
                  if (PhysicsSystem.instance.useCollisionMatrix) {
                    error('[Physics]: useCollisionMatrix is turn on, using collision matrix instead please.');
                  }

                  return PhysicsSystem.instance.useCollisionMatrix;
                }
              }]);

              function Collider(type) {
                var _this;

                _classCallCheck(this, Collider);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(Collider).call(this));
                _this.TYPE = void 0;
                _this._shape = null;
                _this._aabb = null;
                _this._boundingSphere = null;
                _this._isSharedMaterial = true;
                _this._needTriggerEvent = false;
                _this._needCollisionEvent = false;

                _initializerDefineProperty(_this, "_material", _descriptor$2, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_isTrigger", _descriptor2$2, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_center", _descriptor3$2, _assertThisInitialized(_this));

                _this.TYPE = type;
                return _this;
              } /// EVENT INTERFACE ///

              /**
               * @en
               * Registers callbacks associated with triggered or collision events.
               * @zh
               * 注册触发或碰撞事件相关的回调。
               * @param type - The event type, onTriggerEnter|onTriggerStay|onTriggerExit|onCollisionEnter|onCollisionStay|onCollisionExit;
               * @param callback - The event callback, signature:`(event?:ICollisionEvent|ITriggerEvent)=>void`.
               * @param target - The event callback target.
               */


              _createClass(Collider, [{
                key: "on",
                value: function on(type, callback, target, once) {
                  var ret = _get(_getPrototypeOf(Collider.prototype), "on", this).call(this, type, callback, target, once);

                  this._updateNeedEvent(type);

                  return ret;
                }
                /**
                 * @en
                 * Unregisters callbacks associated with trigger or collision events that have been registered.
                 * @zh
                 * 取消已经注册的触发或碰撞事件相关的回调。
                 * @param type - The event type, onTriggerEnter|onTriggerStay|onTriggerExit|onCollisionEnter|onCollisionStay|onCollisionExit;
                 * @param callback - The event callback, signature:`(event?:ICollisionEvent|ITriggerEvent)=>void`.
                 * @param target - The event callback target.
                 */

              }, {
                key: "off",
                value: function off(type, callback, target) {
                  _get(_getPrototypeOf(Collider.prototype), "off", this).call(this, type, callback, target);

                  this._updateNeedEvent();
                }
                /**
                 * @en
                 * Registers a callback associated with a trigger or collision event, which is automatically unregistered once executed.
                 * @zh
                 * 注册触发或碰撞事件相关的回调，执行一次后会自动取消注册。
                 * @param type - The event type, onTriggerEnter|onTriggerStay|onTriggerExit|onCollisionEnter|onCollisionStay|onCollisionExit;
                 * @param callback - The event callback, signature:`(event?:ICollisionEvent|ITriggerEvent)=>void`.
                 * @param target - The event callback target.
                 */

              }, {
                key: "once",
                value: function once(type, callback, target) {
                  //TODO: callback invoker now is a entity, after `once` will not calling the upper `off`.
                  var ret = _get(_getPrototypeOf(Collider.prototype), "once", this).call(this, type, callback, target);

                  this._updateNeedEvent(type);

                  return ret;
                }
                /**
                 * @en
                 * Removes all registered events of the specified target or type.
                 * @zh
                 * 移除所有指定目标或类型的注册事件。
                 * @param typeOrTarget - The event type or target.
                 */

              }, {
                key: "removeAll",
                value: function removeAll(typeOrTarget) {
                  _get(_getPrototypeOf(Collider.prototype), "removeAll", this).call(this, typeOrTarget);

                  this._updateNeedEvent();
                } /// GROUP MASK ///

                /**
                 * @en
                 * Gets the group value.
                 * @zh
                 * 获取分组值。
                 * @returns 整数，范围为 2 的 0 次方 到 2 的 31 次方
                 */

              }, {
                key: "getGroup",
                value: function getGroup() {
                  if (this._assertOnLoadCalled) {
                    return this._shape.getGroup();
                  }

                  return 0;
                }
                /**
                 * @en
                 * Sets the group value.
                 * @zh
                 * 设置分组值。
                 * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
                 */

              }, {
                key: "setGroup",
                value: function setGroup(v) {
                  if (this._assertOnLoadCalled) {
                    if (PhysicsSystem.instance.useCollisionMatrix) {
                      var body = this._shape.attachedRigidBody;

                      if (body) {
                        body.group = v;
                      } else {
                        this._shape.setGroup(v);

                        this._updateMask();
                      }
                    } else {
                      this._shape.setGroup(v);
                    }
                  }
                }
                /**
                 * @en
                 * Add a grouping value to fill in the group you want to join.
                 * @zh
                 * 添加分组值，可填要加入的 group。
                 * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
                 */

              }, {
                key: "addGroup",
                value: function addGroup(v) {
                  if (this._assertOnLoadCalled) {
                    if (!this._assertUseCollisionMatrix) {
                      this._shape.addGroup(v);
                    } else {
                      var body = this._shape.attachedRigidBody;

                      if (body) {
                        body.group |= v;
                      } else {
                        this._shape.addGroup(v);

                        this._updateMask();
                      }
                    }
                  }
                }
                /**
                 * @en
                 * Subtract the grouping value to fill in the group to be removed.
                 * @zh
                 * 减去分组值，可填要移除的 group。
                 * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
                 */

              }, {
                key: "removeGroup",
                value: function removeGroup(v) {
                  if (this._assertOnLoadCalled) {
                    if (!this._assertUseCollisionMatrix) {
                      this._shape.removeGroup(v);
                    } else {
                      var body = this._shape.attachedRigidBody;

                      if (body) {
                        body.group &= ~v;
                      } else {
                        this._shape.removeGroup(v);

                        this._updateMask();
                      }
                    }
                  }
                }
                /**
                 * @en
                 * Gets the mask value.
                 * @zh
                 * 获取掩码值。
                 * @returns 整数，范围为 2 的 0 次方 到 2 的 31 次方
                 */

              }, {
                key: "getMask",
                value: function getMask() {
                  if (this._assertOnLoadCalled) {
                    return this._shape.getMask();
                  }

                  return 0;
                }
                /**
                 * @en
                 * Sets the mask value.
                 * @zh
                 * 设置掩码值。
                 * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
                 */

              }, {
                key: "setMask",
                value: function setMask(v) {
                  if (this._assertOnLoadCalled && !this._assertUseCollisionMatrix) {
                    this._shape.setMask(v);
                  }
                }
                /**
                 * @en
                 * Add mask values to fill in groups that need to be checked.
                 * @zh
                 * 添加掩码值，可填入需要检查的 group。
                 * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
                 */

              }, {
                key: "addMask",
                value: function addMask(v) {
                  if (this._assertOnLoadCalled && !this._assertUseCollisionMatrix) {
                    this._shape.addMask(v);
                  }
                }
                /**
                 * @en
                 * Subtract the mask value to fill in the group that does not need to be checked.
                 * @zh
                 * 减去掩码值，可填入不需要检查的 group。
                 * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
                 */

              }, {
                key: "removeMask",
                value: function removeMask(v) {
                  if (this._assertOnLoadCalled && !this._assertUseCollisionMatrix) {
                    this._shape.removeMask(v);
                  }
                } /// COMPONENT LIFECYCLE ///

              }, {
                key: "onLoad",
                value: function onLoad() {
                  {
                    this._shape = createShape(this.TYPE);

                    this._shape.initialize(this);

                    this.sharedMaterial = this._material == null ? PhysicsSystem.instance.defaultMaterial : this._material;

                    this._shape.onLoad();
                  }
                }
              }, {
                key: "onEnable",
                value: function onEnable() {
                  if (this._shape) {
                    this._shape.onEnable();
                  }
                }
              }, {
                key: "onDisable",
                value: function onDisable() {
                  if (this._shape) {
                    this._shape.onDisable();
                  }
                }
              }, {
                key: "onDestroy",
                value: function onDestroy() {
                  if (this._shape) {
                    if (this._material) {
                      this._material.off('physics_material_update', this._updateMaterial, this);
                    }

                    this._shape.onDestroy();
                  }
                }
              }, {
                key: "_updateMaterial",
                value: function _updateMaterial() {
                  if (this._shape) {
                    this._shape.setMaterial(this._material);
                  }
                }
              }, {
                key: "_updateNeedEvent",
                value: function _updateNeedEvent(type) {
                  if (this.isValid) {
                    if (type !== undefined) {
                      if (type == 'onCollisionEnter' || type == 'onCollisionStay' || type == 'onCollisionExit') {
                        this._needCollisionEvent = true;
                      } else if (type == 'onTriggerEnter' || type == 'onTriggerStay' || type == 'onTriggerExit') {
                        this._needTriggerEvent = true;
                      }
                    } else {
                      if (!(this.hasEventListener('onTriggerEnter') || this.hasEventListener('onTriggerStay') || this.hasEventListener('onTriggerExit'))) {
                        this._needTriggerEvent = false;
                      } else if (!(this.hasEventListener('onCollisionEnter') || this.hasEventListener('onCollisionStay') || this.hasEventListener('onCollisionExit'))) {
                        this._needCollisionEvent = false;
                      }
                    }
                  }
                }
              }, {
                key: "_updateMask",
                value: function _updateMask() {
                  this._shape.setMask(PhysicsSystem.instance.collisionMatrix[this._shape.getGroup()]);
                }
              }]);

              return Collider;
            }(Eventify(Component)), _class3$2.EColliderType = EColliderType, _class3$2.EAxisDirection = EAxisDirection, _temp$2), (_applyDecoratedDescriptor(_class2$2.prototype, "attachedRigidBody", [_dec2$1, readOnly, _dec3$1, _dec4$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "attachedRigidBody"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "sharedMaterial", [_dec5$1, _dec6$1, _dec7$1, _dec8$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "sharedMaterial"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "isTrigger", [_dec9$1, _dec10$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "isTrigger"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "center", [_dec11$1, _dec12$1, _dec13$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "center"), _class2$2.prototype), _descriptor$2 = _applyDecoratedDescriptor(_class2$2.prototype, "_material", [_dec14$1], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor2$2 = _applyDecoratedDescriptor(_class2$2.prototype, "_isTrigger", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return false;
              }
            }), _descriptor3$2 = _applyDecoratedDescriptor(_class2$2.prototype, "_center", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return new Vec3();
              }
            })), _class2$2)) || _class$2));

            (function (_Collider) {})(Collider || (Collider = exports('C', {})));

            function findAttachedBody(node) {
              var rb = node.getComponent(RigidBody);

              if (rb && rb.isValid) {
                return rb;
              } else {
                if (node.parent == null || node.parent == node.scene) return null;
                return findAttachedBody(node.parent);
              }
            }

            var _dec$3, _dec2$2, _dec3$2, _dec4$2, _dec5$2, _class$3, _class2$3, _descriptor$3, _temp$3;
            /**
             * @en
             * Box collider component.
             * @zh
             * 盒子碰撞器。
             */

            var BoxCollider = exports('B', (_dec$3 = ccclass('cc.BoxCollider'), _dec2$2 = help(), _dec3$2 = menu(), _dec4$2 = type(Vec3), _dec5$2 = tooltip(), _dec$3(_class$3 = _dec2$2(_class$3 = _dec3$2(_class$3 = executeInEditMode(_class$3 = (_class2$3 = (_temp$3 = /*#__PURE__*/function (_Collider) {
              _inherits(BoxCollider, _Collider);

              _createClass(BoxCollider, [{
                key: "size",
                /// PUBLIC PROPERTY GETTER\SETTER ///

                /**
                 * @en
                 * Gets or sets the size of the box, in local space.
                 * @zh
                 * 获取或设置盒的大小。
                 */
                get: function get() {
                  return this._size;
                },
                set: function set(value) {
                  Vec3.copy(this._size, value);

                  if (this._shape) {
                    this.shape.setSize(this._size);
                  }
                }
                /**
                 * @en
                 * Gets the wrapper object, through which the lowLevel instance can be accessed.
                 * @zh
                 * 获取封装对象，通过此对象可以访问到底层实例。
                 */

              }, {
                key: "shape",
                get: function get() {
                  return this._shape;
                } /// PRIVATE PROPERTY ///

              }]);

              function BoxCollider() {
                var _this;

                _classCallCheck(this, BoxCollider);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(BoxCollider).call(this, EColliderType.BOX));

                _initializerDefineProperty(_this, "_size", _descriptor$3, _assertThisInitialized(_this));

                return _this;
              }

              return BoxCollider;
            }(Collider), _temp$3), (_applyDecoratedDescriptor(_class2$3.prototype, "size", [_dec4$2, _dec5$2], Object.getOwnPropertyDescriptor(_class2$3.prototype, "size"), _class2$3.prototype), _descriptor$3 = _applyDecoratedDescriptor(_class2$3.prototype, "_size", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return new Vec3(1, 1, 1);
              }
            })), _class2$3)) || _class$3) || _class$3) || _class$3) || _class$3));

            var _dec$4, _dec2$3, _dec3$3, _dec4$3, _class$4, _class2$4, _descriptor$4, _temp$4;
            /**
             * @en
             * Sphere collider component.
             * @zh
             * 球碰撞器。
             */

            var SphereCollider = exports('c', (_dec$4 = ccclass('cc.SphereCollider'), _dec2$3 = help(), _dec3$3 = menu(), _dec4$3 = tooltip(), _dec$4(_class$4 = _dec2$3(_class$4 = _dec3$3(_class$4 = executeInEditMode(_class$4 = (_class2$4 = (_temp$4 = /*#__PURE__*/function (_Collider) {
              _inherits(SphereCollider, _Collider);

              _createClass(SphereCollider, [{
                key: "radius",
                /// PUBLIC PROPERTY GETTER\SETTER ///

                /**
                 * @en
                 * Gets or sets the radius of the sphere.
                 * @zh
                 * 获取或设置球的半径。
                 */
                get: function get() {
                  return this._radius;
                },
                set: function set(value) {
                  this._radius = value;

                  {
                    this.shape.setRadius(this._radius);
                  }
                }
                /**
                 * @en
                 * Gets the wrapper object, through which the lowLevel instance can be accessed.
                 * @zh
                 * 获取封装对象，通过此对象可以访问到底层实例。
                 */

              }, {
                key: "shape",
                get: function get() {
                  return this._shape;
                } /// PRIVATE PROPERTY ///

              }]);

              function SphereCollider() {
                var _this;

                _classCallCheck(this, SphereCollider);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(SphereCollider).call(this, EColliderType.SPHERE));

                _initializerDefineProperty(_this, "_radius", _descriptor$4, _assertThisInitialized(_this));

                return _this;
              }

              return SphereCollider;
            }(Collider), _temp$4), (_applyDecoratedDescriptor(_class2$4.prototype, "radius", [_dec4$3], Object.getOwnPropertyDescriptor(_class2$4.prototype, "radius"), _class2$4.prototype), _descriptor$4 = _applyDecoratedDescriptor(_class2$4.prototype, "_radius", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0.5;
              }
            })), _class2$4)) || _class$4) || _class$4) || _class$4) || _class$4));

            var _dec$5, _dec2$4, _dec3$4, _dec4$4, _dec5$3, _dec6$2, _dec7$2, _class$5, _class2$5, _descriptor$5, _descriptor2$3, _descriptor3$3, _temp$5;
            /**
             * @en
             * Capsule collider component.
             * @zh
             * 胶囊体碰撞器。
             */

            var CapsuleCollider = exports('d', (_dec$5 = ccclass('cc.CapsuleCollider'), _dec2$4 = help(), _dec3$4 = menu(), _dec4$4 = tooltip(), _dec5$3 = tooltip(), _dec6$2 = type(EAxisDirection), _dec7$2 = tooltip(), _dec$5(_class$5 = _dec2$4(_class$5 = _dec3$4(_class$5 = executeInEditMode(_class$5 = (_class2$5 = (_temp$5 = /*#__PURE__*/function (_Collider) {
              _inherits(CapsuleCollider, _Collider);

              _createClass(CapsuleCollider, [{
                key: "radius",
                /// PUBLIC PROPERTY GETTER\SETTER ///

                /**
                 * @en
                 * Gets or sets the radius of the sphere on the capsule body, in local space.
                 * @zh
                 * 获取或设置胶囊体在本地坐标系下的球半径。
                 */
                get: function get() {
                  return this._radius;
                },
                set: function set(value) {
                  if (value < 0) value = 0;
                  this._radius = value;

                  {
                    this.shape.setRadius(value);
                  }
                }
                /**
                 * @en
                 * Gets or sets the cylinder on the capsule body is at the corresponding axial height, in local space.
                 * @zh
                 * 获取或设置在本地坐标系下的胶囊体上圆柱体的高度。
                 */

              }, {
                key: "cylinderHeight",
                get: function get() {
                  return this._cylinderHeight;
                },
                set: function set(value) {
                  if (value < 0) value = 0;
                  this._cylinderHeight = value;

                  {
                    this.shape.setCylinderHeight(value);
                  }
                }
                /**
                 * @en
                 * Gets or sets the capsule direction, in local space.
                 * @zh
                 * 获取或设置在本地坐标系下胶囊体的方向。
                 */

              }, {
                key: "direction",
                get: function get() {
                  return this._direction;
                },
                set: function set(value) {
                  value = Math.floor(value);
                  if (value < EAxisDirection.X_AXIS || value > EAxisDirection.Z_AXIS) return;
                  this._direction = value;

                  {
                    this.shape.setDirection(value);
                  }
                }
                /**
                 * @en
                 * Gets or sets the capsule height, in local space, with the minimum value being the diameter of the sphere.
                 * @zh
                 * 获取或设置在本地坐标系下胶囊体的高度，最小值为球的直径。
                 */

              }, {
                key: "height",
                get: function get() {
                  return this._radius * 2 + this._cylinderHeight;
                },
                set: function set(value) {
                  var ch = value - this._radius * 2;
                  if (ch < 0) ch = 0;
                  this.cylinderHeight = ch;
                }
                /**
                 * @en
                 * Gets the capsule body is at the corresponding axial height, in world space.
                 * @zh
                 * 获取胶囊体在世界坐标系下相应胶囊体朝向上的高度，只读属性。
                 */

              }, {
                key: "worldHeight",
                get: function get() {
                  return this._radius * 2 * this._getRadiusScale() + this._cylinderHeight * this._getHeightScale();
                }
                /**
                 * @en
                 * Gets the wrapper object, through which the lowLevel instance can be accessed.
                 * @zh
                 * 获取封装对象，通过此对象可以访问到底层实例。
                 */

              }, {
                key: "shape",
                get: function get() {
                  return this._shape;
                } /// PRIVATE PROPERTY ///

              }]);

              function CapsuleCollider() {
                var _this;

                _classCallCheck(this, CapsuleCollider);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(CapsuleCollider).call(this, EColliderType.CAPSULE));

                _initializerDefineProperty(_this, "_radius", _descriptor$5, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_cylinderHeight", _descriptor2$3, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_direction", _descriptor3$3, _assertThisInitialized(_this));

                return _this;
              }

              _createClass(CapsuleCollider, [{
                key: "_getRadiusScale",
                value: function _getRadiusScale() {
                  if (this.node == null) return 1;
                  var ws = this.node.worldScale;
                  if (this._direction == EAxisDirection.Y_AXIS) return Math.abs(absMax(ws.x, ws.z));else if (this._direction == EAxisDirection.X_AXIS) return Math.abs(absMax(ws.y, ws.z));else return Math.abs(absMax(ws.x, ws.y));
                }
              }, {
                key: "_getHeightScale",
                value: function _getHeightScale() {
                  if (this.node == null) return 1;
                  var ws = this.node.worldScale;
                  if (this._direction == EAxisDirection.Y_AXIS) return Math.abs(ws.y);else if (this._direction == EAxisDirection.X_AXIS) return Math.abs(ws.x);else return Math.abs(ws.z);
                }
              }]);

              return CapsuleCollider;
            }(Collider), _temp$5), (_applyDecoratedDescriptor(_class2$5.prototype, "radius", [_dec4$4], Object.getOwnPropertyDescriptor(_class2$5.prototype, "radius"), _class2$5.prototype), _applyDecoratedDescriptor(_class2$5.prototype, "cylinderHeight", [_dec5$3], Object.getOwnPropertyDescriptor(_class2$5.prototype, "cylinderHeight"), _class2$5.prototype), _applyDecoratedDescriptor(_class2$5.prototype, "direction", [_dec6$2, _dec7$2], Object.getOwnPropertyDescriptor(_class2$5.prototype, "direction"), _class2$5.prototype), _descriptor$5 = _applyDecoratedDescriptor(_class2$5.prototype, "_radius", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0.5;
              }
            }), _descriptor2$3 = _applyDecoratedDescriptor(_class2$5.prototype, "_cylinderHeight", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 1;
              }
            }), _descriptor3$3 = _applyDecoratedDescriptor(_class2$5.prototype, "_direction", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return EAxisDirection.Y_AXIS;
              }
            })), _class2$5)) || _class$5) || _class$5) || _class$5) || _class$5));

            var _dec$6, _dec2$5, _dec3$5, _dec4$5, _dec5$4, _dec6$3, _class$6, _class2$6, _descriptor$6, _descriptor2$4, _descriptor3$4, _temp$6;
            /**
             * @en
             * Cylinder collider component.
             * @zh
             * 圆柱体碰撞器。
             */

            var CylinderCollider = exports('e', (_dec$6 = ccclass('cc.CylinderCollider'), _dec2$5 = help(), _dec3$5 = menu(), _dec4$5 = tooltip(), _dec5$4 = tooltip(), _dec6$3 = type(EAxisDirection), _dec$6(_class$6 = _dec2$5(_class$6 = _dec3$5(_class$6 = executeInEditMode(_class$6 = (_class2$6 = (_temp$6 = /*#__PURE__*/function (_Collider) {
              _inherits(CylinderCollider, _Collider);

              _createClass(CylinderCollider, [{
                key: "radius",
                /// PUBLIC PROPERTY GETTER\SETTER ///

                /**
                 * @en
                 * Gets or sets the radius of the circle on the cylinder body, in local space.
                 * @zh
                 * 获取或设置圆柱体上圆面半径。
                 */
                get: function get() {
                  return this._radius;
                },
                set: function set(value) {
                  if (this._radius == value) return;
                  if (value < 0) value = 0;
                  this._radius = value;

                  {
                    this.shape.setRadius(value);
                  }
                }
                /**
                 * @en
                 * Gets or sets the cylinder body is at the corresponding axial height, in local space.
                 * @zh
                 * 获取或设置圆柱体在相应轴向的高度。
                 */

              }, {
                key: "height",
                get: function get() {
                  return this._height;
                },
                set: function set(value) {
                  if (this._height == value) return;
                  if (value < 0) value = 0;
                  this._height = value;

                  {
                    this.shape.setHeight(value);
                  }
                }
                /**
                 * @en
                 * Gets or sets the cylinder direction, in local space.
                 * @zh
                 * 获取或设置在圆柱体本地空间上的方向。
                 */

              }, {
                key: "direction",
                get: function get() {
                  return this._direction;
                },
                set: function set(value) {
                  if (this._direction == value) return;
                  if (value < EAxisDirection.X_AXIS || value > EAxisDirection.Z_AXIS) return;
                  this._direction = value;

                  {
                    this.shape.setDirection(value);
                  }
                }
              }, {
                key: "shape",
                get: function get() {
                  return this._shape;
                } /// PRIVATE PROPERTY ///

              }]);

              function CylinderCollider() {
                var _this;

                _classCallCheck(this, CylinderCollider);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(CylinderCollider).call(this, EColliderType.CYLINDER));

                _initializerDefineProperty(_this, "_radius", _descriptor$6, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_height", _descriptor2$4, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_direction", _descriptor3$4, _assertThisInitialized(_this));

                return _this;
              }

              return CylinderCollider;
            }(Collider), _temp$6), (_applyDecoratedDescriptor(_class2$6.prototype, "radius", [_dec4$5], Object.getOwnPropertyDescriptor(_class2$6.prototype, "radius"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "height", [_dec5$4], Object.getOwnPropertyDescriptor(_class2$6.prototype, "height"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "direction", [_dec6$3], Object.getOwnPropertyDescriptor(_class2$6.prototype, "direction"), _class2$6.prototype), _descriptor$6 = _applyDecoratedDescriptor(_class2$6.prototype, "_radius", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0.5;
              }
            }), _descriptor2$4 = _applyDecoratedDescriptor(_class2$6.prototype, "_height", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 2;
              }
            }), _descriptor3$4 = _applyDecoratedDescriptor(_class2$6.prototype, "_direction", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return EAxisDirection.Y_AXIS;
              }
            })), _class2$6)) || _class$6) || _class$6) || _class$6) || _class$6));

            var _dec$7, _dec2$6, _dec3$6, _dec4$6, _dec5$5, _dec6$4, _class$7, _class2$7, _descriptor$7, _descriptor2$5, _descriptor3$5, _temp$7;
            /**
             * @en
             * Cone collider component.
             * @zh
             * 圆锥体碰撞器。
             */

            var ConeCollider = exports('f', (_dec$7 = ccclass('cc.ConeCollider'), _dec2$6 = help(), _dec3$6 = menu(), _dec4$6 = tooltip(), _dec5$5 = tooltip(), _dec6$4 = type(EAxisDirection), _dec$7(_class$7 = _dec2$6(_class$7 = _dec3$6(_class$7 = executeInEditMode(_class$7 = (_class2$7 = (_temp$7 = /*#__PURE__*/function (_Collider) {
              _inherits(ConeCollider, _Collider);

              _createClass(ConeCollider, [{
                key: "radius",
                /// PUBLIC PROPERTY GETTER\SETTER ///

                /**
                 * @en
                 * Gets or sets the radius of the circle on the cone body, in local space.
                 * @zh
                 * 获取或设置圆锥体上圆面半径。
                 */
                get: function get() {
                  return this._radius;
                },
                set: function set(value) {
                  if (this._radius == value) return;
                  if (value < 0) value = 0;
                  this._radius = value;

                  {
                    this.shape.setRadius(value);
                  }
                }
                /**
                 * @en
                 * Gets or sets the cone body is at the corresponding axial height, in local space.
                 * @zh
                 * 获取或设置圆锥体在相应轴向的高度。
                 */

              }, {
                key: "height",
                get: function get() {
                  return this._height;
                },
                set: function set(value) {
                  if (this._height == value) return;
                  if (value < 0) value = 0;
                  this._height = value;

                  {
                    this.shape.setHeight(value);
                  }
                }
                /**
                 * @en
                 * Gets or sets the cone direction, in local space.
                 * @zh
                 * 获取或设置在圆锥体本地空间上的方向。
                 */

              }, {
                key: "direction",
                get: function get() {
                  return this._direction;
                },
                set: function set(value) {
                  if (this._direction == value) return;
                  if (value < EAxisDirection.X_AXIS || value > EAxisDirection.Z_AXIS) return;
                  this._direction = value;

                  {
                    this.shape.setDirection(value);
                  }
                }
              }, {
                key: "shape",
                get: function get() {
                  return this._shape;
                } /// PRIVATE PROPERTY ///

              }]);

              function ConeCollider() {
                var _this;

                _classCallCheck(this, ConeCollider);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(ConeCollider).call(this, EColliderType.CONE));

                _initializerDefineProperty(_this, "_radius", _descriptor$7, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_height", _descriptor2$5, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_direction", _descriptor3$5, _assertThisInitialized(_this));

                return _this;
              }

              return ConeCollider;
            }(Collider), _temp$7), (_applyDecoratedDescriptor(_class2$7.prototype, "radius", [_dec4$6], Object.getOwnPropertyDescriptor(_class2$7.prototype, "radius"), _class2$7.prototype), _applyDecoratedDescriptor(_class2$7.prototype, "height", [_dec5$5], Object.getOwnPropertyDescriptor(_class2$7.prototype, "height"), _class2$7.prototype), _applyDecoratedDescriptor(_class2$7.prototype, "direction", [_dec6$4], Object.getOwnPropertyDescriptor(_class2$7.prototype, "direction"), _class2$7.prototype), _descriptor$7 = _applyDecoratedDescriptor(_class2$7.prototype, "_radius", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0.5;
              }
            }), _descriptor2$5 = _applyDecoratedDescriptor(_class2$7.prototype, "_height", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 1;
              }
            }), _descriptor3$5 = _applyDecoratedDescriptor(_class2$7.prototype, "_direction", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return EAxisDirection.Y_AXIS;
              }
            })), _class2$7)) || _class$7) || _class$7) || _class$7) || _class$7));

            var _dec$8, _dec2$7, _dec3$7, _dec4$7, _class$8, _class2$8, _descriptor$8, _descriptor2$6, _temp$8;
            /**
             * @en
             * Triangle mesh collider component.
             * @zh
             * 三角网格碰撞器。
             */

            var MeshCollider = exports('M', (_dec$8 = ccclass('cc.MeshCollider'), _dec2$7 = help(), _dec3$7 = menu(), _dec4$7 = type(Mesh), _dec$8(_class$8 = _dec2$7(_class$8 = _dec3$7(_class$8 = executeInEditMode(_class$8 = (_class2$8 = (_temp$8 = /*#__PURE__*/function (_Collider) {
              _inherits(MeshCollider, _Collider);

              _createClass(MeshCollider, [{
                key: "mesh",
                /// PUBLIC PROPERTY GETTER\SETTER ///

                /**
                 * @en
                 * Gets or sets the mesh assets referenced by this collider.
                 * @zh
                 * 获取或设置此碰撞体引用的网格资源.
                 */
                get: function get() {
                  return this._mesh;
                },
                set: function set(value) {
                  this._mesh = value;
                  this.shape.setMesh(this._mesh);
                }
                /**
                 * @en
                 * Gets or sets whether the collider replaces the mesh with a convex shape.
                 * @zh
                 * 获取或设置此碰撞体是否用凸形状代替网格.
                 */

              }, {
                key: "convex",
                get: function get() {
                  return this._convex;
                },
                set: function set(value) {
                  this._convex = value;
                }
                /**
                 * @en
                 * Gets the wrapper object, through which the lowLevel instance can be accessed.
                 * @zh
                 * 获取封装对象，通过此对象可以访问到底层实例。
                 */

              }, {
                key: "shape",
                get: function get() {
                  return this._shape;
                } /// PRIVATE PROPERTY ///

              }]);

              function MeshCollider() {
                var _this;

                _classCallCheck(this, MeshCollider);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(MeshCollider).call(this, EColliderType.MESH));

                _initializerDefineProperty(_this, "_mesh", _descriptor$8, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_convex", _descriptor2$6, _assertThisInitialized(_this));

                return _this;
              }

              return MeshCollider;
            }(Collider), _temp$8), (_applyDecoratedDescriptor(_class2$8.prototype, "mesh", [_dec4$7], Object.getOwnPropertyDescriptor(_class2$8.prototype, "mesh"), _class2$8.prototype), _applyDecoratedDescriptor(_class2$8.prototype, "convex", [editable], Object.getOwnPropertyDescriptor(_class2$8.prototype, "convex"), _class2$8.prototype), _descriptor$8 = _applyDecoratedDescriptor(_class2$8.prototype, "_mesh", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor2$6 = _applyDecoratedDescriptor(_class2$8.prototype, "_convex", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return false;
              }
            })), _class2$8)) || _class$8) || _class$8) || _class$8) || _class$8));

            var _dec$9, _dec2$8, _dec3$8, _dec4$8, _dec5$6, _dec6$5, _dec7$3, _dec8$2, _dec9$2, _dec10$2, _dec11$2, _dec12$2, _class$9, _class2$9, _descriptor$9, _descriptor2$7, _descriptor3$6, _descriptor4$2, _temp$9;
            /**
             * @en
             * A tool component to help apply force to the rigid body at each frame.
             * @zh
             * 在每帧对一个刚体施加持续的力，依赖 RigidBody 组件。
             */

            var ConstantForce = exports('k', (_dec$9 = ccclass('cc.ConstantForce'), _dec2$8 = help(), _dec3$8 = requireComponent(RigidBody), _dec4$8 = menu(), _dec5$6 = displayOrder(), _dec6$5 = tooltip(), _dec7$3 = displayOrder(), _dec8$2 = tooltip(), _dec9$2 = displayOrder(), _dec10$2 = tooltip(), _dec11$2 = displayOrder(), _dec12$2 = tooltip(), _dec$9(_class$9 = _dec2$8(_class$9 = _dec3$8(_class$9 = _dec4$8(_class$9 = disallowMultiple(_class$9 = executeInEditMode(_class$9 = (_class2$9 = (_temp$9 = /*#__PURE__*/function (_Component) {
              _inherits(ConstantForce, _Component);

              function ConstantForce() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, ConstantForce);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ConstantForce)).call.apply(_getPrototypeOf2, [this].concat(args)));
                _this._rigidBody = null;

                _initializerDefineProperty(_this, "_force", _descriptor$9, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_localForce", _descriptor2$7, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_torque", _descriptor3$6, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_localTorque", _descriptor4$2, _assertThisInitialized(_this));

                _this._mask = 0;
                return _this;
              }

              _createClass(ConstantForce, [{
                key: "onLoad",
                value: function onLoad() {
                  this._rigidBody = this.node.getComponent(RigidBody);

                  this._maskUpdate(this._force, 1);

                  this._maskUpdate(this._localForce, 2);

                  this._maskUpdate(this._torque, 4);

                  this._maskUpdate(this._localTorque, 8);
                }
              }, {
                key: "lateUpdate",
                value: function lateUpdate(dt) {
                  {
                    if (this._rigidBody != null && this._mask != 0) {
                      if (this._mask & 1) this._rigidBody.applyForce(this._force);
                      if (this._mask & 2) this._rigidBody.applyLocalForce(this.localForce);
                      if (this._mask & 4) this._rigidBody.applyTorque(this._torque);
                      if (this._mask & 8) this._rigidBody.applyLocalTorque(this._localTorque);
                    }
                  }
                }
              }, {
                key: "_maskUpdate",
                value: function _maskUpdate(t, m) {
                  if (t.strictEquals(Vec3.ZERO)) {
                    this._mask &= ~m;
                  } else {
                    this._mask |= m;
                  }
                }
              }, {
                key: "force",

                /**
                 * @en
                 * Gets or sets forces in world coordinates.
                 * @zh
                 * 获取或设置世界坐标系下的力。
                 */
                get: function get() {
                  return this._force;
                },
                set: function set(value) {
                  Vec3.copy(this._force, value);

                  this._maskUpdate(this._force, 1);
                }
                /**
                 * @en
                 * Gets or sets the forces in the local coordinate system.
                 * @zh
                 * 获取或设置本地坐标系下的力。
                 */

              }, {
                key: "localForce",
                get: function get() {
                  return this._localForce;
                },
                set: function set(value) {
                  Vec3.copy(this._localForce, value);

                  this._maskUpdate(this.localForce, 2);
                }
                /**
                 * @en
                 * Gets or sets the torsional force in world coordinates.
                 * @zh
                 * 获取或设置世界坐标系下的扭转力。
                 */

              }, {
                key: "torque",
                get: function get() {
                  return this._torque;
                },
                set: function set(value) {
                  Vec3.copy(this._torque, value);

                  this._maskUpdate(this._torque, 4);
                }
                /**
                 * @en
                 * Gets or sets the torsional force in the local coordinate system.
                 * @zh
                 * 获取或设置本地坐标系下的扭转力。
                 */

              }, {
                key: "localTorque",
                get: function get() {
                  return this._localTorque;
                },
                set: function set(value) {
                  Vec3.copy(this._localTorque, value);

                  this._maskUpdate(this._localTorque, 8);
                }
              }]);

              return ConstantForce;
            }(Component), _temp$9), (_descriptor$9 = _applyDecoratedDescriptor(_class2$9.prototype, "_force", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return new Vec3();
              }
            }), _descriptor2$7 = _applyDecoratedDescriptor(_class2$9.prototype, "_localForce", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return new Vec3();
              }
            }), _descriptor3$6 = _applyDecoratedDescriptor(_class2$9.prototype, "_torque", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return new Vec3();
              }
            }), _descriptor4$2 = _applyDecoratedDescriptor(_class2$9.prototype, "_localTorque", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return new Vec3();
              }
            }), _applyDecoratedDescriptor(_class2$9.prototype, "force", [_dec5$6, _dec6$5], Object.getOwnPropertyDescriptor(_class2$9.prototype, "force"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "localForce", [_dec7$3, _dec8$2], Object.getOwnPropertyDescriptor(_class2$9.prototype, "localForce"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "torque", [_dec9$2, _dec10$2], Object.getOwnPropertyDescriptor(_class2$9.prototype, "torque"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "localTorque", [_dec11$2, _dec12$2], Object.getOwnPropertyDescriptor(_class2$9.prototype, "localTorque"), _class2$9.prototype)), _class2$9)) || _class$9) || _class$9) || _class$9) || _class$9) || _class$9) || _class$9));

            var _dec$a, _dec2$9, _dec3$9, _dec4$9, _class$a, _class2$a, _descriptor$a, _temp$a;
            /**
             * @en
             * Terrain collider component.
             * @zh
             * 地形碰撞器。
             */

            var TerrainCollider = exports('T', (_dec$a = ccclass('cc.TerrainCollider'), _dec2$9 = help(), _dec3$9 = menu(), _dec4$9 = type(TerrainAsset), _dec$a(_class$a = _dec2$9(_class$a = _dec3$9(_class$a = executeInEditMode(_class$a = (_class2$a = (_temp$a = /*#__PURE__*/function (_Collider) {
              _inherits(TerrainCollider, _Collider);

              _createClass(TerrainCollider, [{
                key: "terrain",
                /// PUBLIC PROPERTY GETTER\SETTER ///

                /**
                 * @en
                 * Gets or sets the terrain assets referenced by this collider.
                 * @zh
                 * 获取或设置此碰撞体引用的网格资源.
                 */
                get: function get() {
                  return this._terrain;
                },
                set: function set(value) {
                  this._terrain = value;
                  this.shape.setTerrain(this._terrain);
                }
                /**
                 * @en
                 * Gets the wrapper object, through which the lowLevel instance can be accessed.
                 * @zh
                 * 获取封装对象，通过此对象可以访问到底层实例。
                 */

              }, {
                key: "shape",
                get: function get() {
                  return this._shape;
                } /// PRIVATE PROPERTY ///

              }]);

              function TerrainCollider() {
                var _this;

                _classCallCheck(this, TerrainCollider);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(TerrainCollider).call(this, EColliderType.TERRAIN));

                _initializerDefineProperty(_this, "_terrain", _descriptor$a, _assertThisInitialized(_this));

                return _this;
              }

              return TerrainCollider;
            }(Collider), _temp$a), (_applyDecoratedDescriptor(_class2$a.prototype, "terrain", [_dec4$9], Object.getOwnPropertyDescriptor(_class2$a.prototype, "terrain"), _class2$a.prototype), _descriptor$a = _applyDecoratedDescriptor(_class2$a.prototype, "_terrain", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            })), _class2$a)) || _class$a) || _class$a) || _class$a) || _class$a));

            var _dec$b, _dec2$a, _dec3$a, _dec4$a, _dec5$7, _dec6$6, _dec7$4, _class$b, _class2$b, _descriptor$b, _descriptor2$8, _class3$3, _temp$b;
            var SimplexCollider = exports('S', (_dec$b = ccclass('cc.SimplexCollider'), _dec2$a = help(), _dec3$a = menu(), _dec4$a = type(ESimplexType), _dec5$7 = visible(), _dec6$6 = visible(), _dec7$4 = visible(), _dec$b(_class$b = _dec2$a(_class$b = _dec3$a(_class$b = executeInEditMode(_class$b = (_class2$b = (_temp$b = _class3$3 = /*#__PURE__*/function (_Collider) {
              _inherits(SimplexCollider, _Collider);

              _createClass(SimplexCollider, [{
                key: "shapeType",
                /// PUBLIC PROPERTY GETTER\SETTER ///
                get: function get() {
                  return this._shapeType;
                },
                set: function set(v) {
                  this._shapeType = v;

                  {
                    this.shape.setShapeType(v);
                  }
                }
              }, {
                key: "vertex0",
                get: function get() {
                  return this._vertices[0];
                },
                set: function set(v) {
                  Vec3.copy(this._vertices[0], v);
                  this.updateVertices();
                }
              }, {
                key: "vertex1",
                get: function get() {
                  return this._vertices[1];
                },
                set: function set(v) {
                  Vec3.copy(this._vertices[1], v);
                  this.updateVertices();
                }
              }, {
                key: "vertex2",
                get: function get() {
                  return this._vertices[2];
                },
                set: function set(v) {
                  Vec3.copy(this._vertices[2], v);
                  this.updateVertices();
                }
              }, {
                key: "vertex3",
                get: function get() {
                  return this._vertices[3];
                },
                set: function set(v) {
                  Vec3.copy(this._vertices[3], v);
                  this.updateVertices();
                }
                /**
                 * @en
                 * Gets the wrapper object, through which the lowLevel instance can be accessed.
                 * @zh
                 * 获取封装对象，通过此对象可以访问到底层实例。
                 */

              }, {
                key: "shape",
                get: function get() {
                  return this._shape;
                }
              }, {
                key: "vertices",
                get: function get() {
                  return this._vertices;
                } /// PRIVATE PROPERTY ///

              }]);

              function SimplexCollider() {
                var _this;

                _classCallCheck(this, SimplexCollider);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(SimplexCollider).call(this, EColliderType.SIMPLEX));

                _initializerDefineProperty(_this, "_shapeType", _descriptor$b, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_vertices", _descriptor2$8, _assertThisInitialized(_this));

                return _this;
              }

              _createClass(SimplexCollider, [{
                key: "updateVertices",
                value: function updateVertices() {
                  {
                    this.shape.setVertices(this._vertices);
                  }
                }
              }]);

              return SimplexCollider;
            }(Collider), _class3$3.ESimplexType = ESimplexType, _temp$b), (_applyDecoratedDescriptor(_class2$b.prototype, "shapeType", [_dec4$a], Object.getOwnPropertyDescriptor(_class2$b.prototype, "shapeType"), _class2$b.prototype), _applyDecoratedDescriptor(_class2$b.prototype, "vertex0", [editable], Object.getOwnPropertyDescriptor(_class2$b.prototype, "vertex0"), _class2$b.prototype), _applyDecoratedDescriptor(_class2$b.prototype, "vertex1", [_dec5$7], Object.getOwnPropertyDescriptor(_class2$b.prototype, "vertex1"), _class2$b.prototype), _applyDecoratedDescriptor(_class2$b.prototype, "vertex2", [_dec6$6], Object.getOwnPropertyDescriptor(_class2$b.prototype, "vertex2"), _class2$b.prototype), _applyDecoratedDescriptor(_class2$b.prototype, "vertex3", [_dec7$4], Object.getOwnPropertyDescriptor(_class2$b.prototype, "vertex3"), _class2$b.prototype), _descriptor$b = _applyDecoratedDescriptor(_class2$b.prototype, "_shapeType", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return ESimplexType.TETRAHEDRON;
              }
            }), _descriptor2$8 = _applyDecoratedDescriptor(_class2$b.prototype, "_vertices", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [new Vec3(0, 0, 0), new Vec3(0, 0, 1), new Vec3(1, 0, 0), new Vec3(0, 1, 0)];
              }
            })), _class2$b)) || _class$b) || _class$b) || _class$b) || _class$b));

            (function (_SimplexCollider) {})(SimplexCollider || (SimplexCollider = exports('S', {})));

            var _dec$c, _dec2$b, _dec3$b, _dec4$b, _dec5$8, _class$c, _class2$c, _descriptor$c, _descriptor2$9, _temp$c;
            /**
             * @en
             * Plane collider component.
             * @zh
             * 静态平面碰撞器。
             */

            var PlaneCollider = exports('g', (_dec$c = ccclass('cc.PlaneCollider'), _dec2$b = help(), _dec3$b = menu(), _dec4$b = type(Vec3), _dec5$8 = tooltip(), _dec$c(_class$c = _dec2$b(_class$c = _dec3$b(_class$c = executeInEditMode(_class$c = (_class2$c = (_temp$c = /*#__PURE__*/function (_Collider) {
              _inherits(PlaneCollider, _Collider);

              _createClass(PlaneCollider, [{
                key: "normal",
                /// PUBLIC PROPERTY GETTER\SETTER ///

                /**
                 * @en
                 * Gets or sets the normal of the plane, in local space.
                 * @zh
                 * 获取或设置平面在本地坐标系下的法线。
                 */
                get: function get() {
                  return this._normal;
                },
                set: function set(value) {
                  Vec3.copy(this._normal, value);

                  {
                    this.shape.setNormal(this._normal);
                  }
                }
                /**
                 * @en
                 * Gets or sets the value of the plane moving along the normal, in local space.
                 * @zh
                 * 获取或设置平面在本地坐标系下沿着法线移动的数值。
                 */

              }, {
                key: "constant",
                get: function get() {
                  return this._constant;
                },
                set: function set(v) {
                  this._constant = v;

                  {
                    this.shape.setConstant(this._constant);
                  }
                }
                /**
                 * @en
                 * Gets the wrapper object, through which the lowLevel instance can be accessed.
                 * @zh
                 * 获取封装对象，通过此对象可以访问到底层实例。
                 */

              }, {
                key: "shape",
                get: function get() {
                  return this._shape;
                } /// PRIVATE PROPERTY ///

              }]);

              function PlaneCollider() {
                var _this;

                _classCallCheck(this, PlaneCollider);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(PlaneCollider).call(this, EColliderType.PLANE));

                _initializerDefineProperty(_this, "_normal", _descriptor$c, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_constant", _descriptor2$9, _assertThisInitialized(_this));

                return _this;
              }

              return PlaneCollider;
            }(Collider), _temp$c), (_applyDecoratedDescriptor(_class2$c.prototype, "normal", [_dec4$b, _dec5$8], Object.getOwnPropertyDescriptor(_class2$c.prototype, "normal"), _class2$c.prototype), _applyDecoratedDescriptor(_class2$c.prototype, "constant", [editable], Object.getOwnPropertyDescriptor(_class2$c.prototype, "constant"), _class2$c.prototype), _descriptor$c = _applyDecoratedDescriptor(_class2$c.prototype, "_normal", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return new Vec3(0, 1, 0);
              }
            }), _descriptor2$9 = _applyDecoratedDescriptor(_class2$c.prototype, "_constant", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0;
              }
            })), _class2$c)) || _class$c) || _class$c) || _class$c) || _class$c));

            var _dec$d, _dec2$c, _dec3$c, _dec4$c, _dec5$9, _dec6$7, _dec7$5, _dec8$3, _class$d, _class2$d, _descriptor$d, _descriptor2$a, _class3$4, _temp$d;
            var Constraint = exports('h', (_dec$d = ccclass('cc.Constraint'), _dec2$c = requireComponent(RigidBody), _dec3$c = type(RigidBody), _dec4$c = displayOrder(), _dec5$9 = type(RigidBody), _dec6$7 = displayOrder(), _dec7$5 = displayOrder(), _dec8$3 = type(RigidBody), _dec$d(_class$d = _dec2$c(_class$d = (_class2$d = (_temp$d = _class3$4 = /*#__PURE__*/function (_Eventify) {
              _inherits(Constraint, _Eventify);

              _createClass(Constraint, [{
                key: "attachedBody",
                get: function get() {
                  return this.getComponent(RigidBody);
                }
              }, {
                key: "connectedBody",
                get: function get() {
                  return this._connectedBody;
                },
                set: function set(v) {
                  this._connectedBody = v;

                  {
                    if (this._constraint) this._constraint.setConnectedBody(v);
                  }
                }
              }, {
                key: "enableCollision",
                get: function get() {
                  return this._enableCollision;
                },
                set: function set(v) {
                  this._enableCollision = v;

                  {
                    if (this._constraint) this._constraint.setEnableCollision(v);
                  }
                }
              }]);

              function Constraint(type) {
                var _this;

                _classCallCheck(this, Constraint);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(Constraint).call(this));
                _this.TYPE = void 0;

                _initializerDefineProperty(_this, "_enableCollision", _descriptor$d, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_connectedBody", _descriptor2$a, _assertThisInitialized(_this));

                _this._constraint = null;
                _this.TYPE = type;
                return _this;
              } /// COMPONENT LIFECYCLE ///


              _createClass(Constraint, [{
                key: "onLoad",
                value: function onLoad() {
                  {
                    this._constraint = createConstraint(this.TYPE);

                    this._constraint.initialize(this);

                    this._constraint.onLoad();
                  }
                }
              }, {
                key: "onEnable",
                value: function onEnable() {
                  if (this._constraint) {
                    this._constraint.onEnable();
                  }
                }
              }, {
                key: "onDisable",
                value: function onDisable() {
                  if (this._constraint) {
                    this._constraint.onDisable();
                  }
                }
              }, {
                key: "onDestroy",
                value: function onDestroy() {
                  if (this._constraint) {
                    this._constraint.onDestroy();
                  }
                }
              }]);

              return Constraint;
            }(Eventify(Component)), _class3$4.EConstraintType = EConstraintType, _temp$d), (_applyDecoratedDescriptor(_class2$d.prototype, "attachedBody", [_dec3$c, readOnly, _dec4$c], Object.getOwnPropertyDescriptor(_class2$d.prototype, "attachedBody"), _class2$d.prototype), _applyDecoratedDescriptor(_class2$d.prototype, "connectedBody", [_dec5$9, _dec6$7], Object.getOwnPropertyDescriptor(_class2$d.prototype, "connectedBody"), _class2$d.prototype), _applyDecoratedDescriptor(_class2$d.prototype, "enableCollision", [_dec7$5], Object.getOwnPropertyDescriptor(_class2$d.prototype, "enableCollision"), _class2$d.prototype), _descriptor$d = _applyDecoratedDescriptor(_class2$d.prototype, "_enableCollision", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return true;
              }
            }), _descriptor2$a = _applyDecoratedDescriptor(_class2$d.prototype, "_connectedBody", [_dec8$3], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            })), _class2$d)) || _class$d) || _class$d));

            (function (_Constraint) {})(Constraint || (Constraint = exports('h', {})));

            var _dec$e, _dec2$d, _dec3$d, _class$e, _class2$e, _descriptor$e, _descriptor2$b, _descriptor3$7, _descriptor4$3, _temp$e;
            var HingeConstraint = exports('H', (_dec$e = ccclass('cc.HingeConstraint'), _dec2$d = help(), _dec3$d = menu(), _dec$e(_class$e = _dec2$d(_class$e = _dec3$d(_class$e = (_class2$e = (_temp$e = /*#__PURE__*/function (_Constraint) {
              _inherits(HingeConstraint, _Constraint);

              function HingeConstraint() {
                var _this;

                _classCallCheck(this, HingeConstraint);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(HingeConstraint).call(this, EConstraintType.HINGE));

                _initializerDefineProperty(_this, "axisA", _descriptor$e, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "axisB", _descriptor2$b, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "pivotA", _descriptor3$7, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "pivotB", _descriptor4$3, _assertThisInitialized(_this));

                return _this;
              }

              return HingeConstraint;
            }(Constraint), _temp$e), (_descriptor$e = _applyDecoratedDescriptor(_class2$e.prototype, "axisA", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return new Vec3();
              }
            }), _descriptor2$b = _applyDecoratedDescriptor(_class2$e.prototype, "axisB", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return new Vec3();
              }
            }), _descriptor3$7 = _applyDecoratedDescriptor(_class2$e.prototype, "pivotA", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return new Vec3();
              }
            }), _descriptor4$3 = _applyDecoratedDescriptor(_class2$e.prototype, "pivotB", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return new Vec3();
              }
            })), _class2$e)) || _class$e) || _class$e) || _class$e));

            var _dec$f, _dec2$e, _dec3$e, _dec4$d, _dec5$a, _class$f, _class2$f, _descriptor$f, _descriptor2$c, _temp$f;
            var PointToPointConstraint = exports('i', (_dec$f = ccclass('cc.PointToPointConstraint'), _dec2$e = help(), _dec3$e = menu(), _dec4$d = type(Vec3), _dec5$a = type(Vec3), _dec$f(_class$f = _dec2$e(_class$f = _dec3$e(_class$f = (_class2$f = (_temp$f = /*#__PURE__*/function (_Constraint) {
              _inherits(PointToPointConstraint, _Constraint);

              _createClass(PointToPointConstraint, [{
                key: "pivotA",
                get: function get() {
                  return this._pivotA;
                },
                set: function set(v) {
                  Vec3.copy(this._pivotA, v);

                  {
                    this.constraint.setPivotA(this._pivotA);
                  }
                }
              }, {
                key: "pivotB",
                get: function get() {
                  return this._pivotB;
                },
                set: function set(v) {
                  Vec3.copy(this._pivotB, v);

                  {
                    this.constraint.setPivotB(this._pivotB);
                  }
                }
              }, {
                key: "constraint",
                get: function get() {
                  return this._constraint;
                }
              }]);

              function PointToPointConstraint() {
                var _this;

                _classCallCheck(this, PointToPointConstraint);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(PointToPointConstraint).call(this, EConstraintType.POINT_TO_POINT));

                _initializerDefineProperty(_this, "_pivotA", _descriptor$f, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_pivotB", _descriptor2$c, _assertThisInitialized(_this));

                return _this;
              }

              return PointToPointConstraint;
            }(Constraint), _temp$f), (_applyDecoratedDescriptor(_class2$f.prototype, "pivotA", [_dec4$d], Object.getOwnPropertyDescriptor(_class2$f.prototype, "pivotA"), _class2$f.prototype), _applyDecoratedDescriptor(_class2$f.prototype, "pivotB", [_dec5$a], Object.getOwnPropertyDescriptor(_class2$f.prototype, "pivotB"), _class2$f.prototype), _descriptor$f = _applyDecoratedDescriptor(_class2$f.prototype, "_pivotA", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return new Vec3();
              }
            }), _descriptor2$c = _applyDecoratedDescriptor(_class2$f.prototype, "_pivotB", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return new Vec3();
              }
            })), _class2$f)) || _class$f) || _class$f) || _class$f));

            /**
             * @category physics
             */
            replaceProperty(PhysicsSystem, 'PhysicsSystem', [{
              "name": "ins",
              "newName": "instance"
            }]);
            replaceProperty(PhysicsSystem.prototype, 'PhysicsSystem.prototype', [{
              "name": "deltaTime",
              "newName": "fixedTimeStep"
            }, {
              "name": "maxSubStep",
              "newName": "maxSubSteps"
            }]);
            removeProperty(PhysicsSystem.prototype, 'PhysicsSystem.prototype', [{
              "name": "useFixedTime"
            }]);
            replaceProperty(Collider.prototype, 'Collider.prototype', [{
              "name": "attachedRigidbody",
              "newName": "attachedRigidBody"
            }]);
            replaceProperty(BoxCollider.prototype, 'BoxCollider.prototype', [{
              "name": "boxShape",
              "newName": "shape"
            }]);
            replaceProperty(SphereCollider.prototype, 'SphereCollider.prototype', [{
              "name": "sphereShape",
              "newName": "shape"
            }]);
            replaceProperty(CapsuleCollider.prototype, 'CapsuleCollider.prototype', [{
              "name": "capsuleShape",
              "newName": "shape"
            }]);
            replaceProperty(RigidBody.prototype, 'RigidBody.prototype', [{
              "name": "rigidBody",
              "newName": "body"
            }]);
            legacyCC.RigidBodyComponent = RigidBody;
            js.setClassAlias(RigidBody, 'cc.RigidBodyComponent');
            legacyCC.ColliderComponent = Collider;
            js.setClassAlias(Collider, 'cc.ColliderComponent');
            legacyCC.BoxColliderComponent = BoxCollider;
            js.setClassAlias(BoxCollider, 'cc.BoxColliderComponent');
            legacyCC.SphereColliderComponent = SphereCollider;
            js.setClassAlias(SphereCollider, 'cc.SphereColliderComponent');
            js.setClassAlias(CapsuleCollider, 'cc.CapsuleColliderComponent');
            js.setClassAlias(MeshCollider, 'cc.MeshColliderComponent');
            js.setClassAlias(CylinderCollider, 'cc.CylinderColliderComponent');

            /**
             * @hidden
             */
            legacyCC.PhysicsSystem = PhysicsSystem;
            legacyCC.PhysicMaterial = PhysicMaterial;
            legacyCC.PhysicsRayResult = PhysicsRayResult;
            legacyCC.ConstantForce = ConstantForce;

        }
    };
});
