System.register(['./deprecated-4ec15e5e.js', './deprecated-b99c04b5.js', './index-caa5c4e5.js', './SubContextView-a8900bae.js', './component-event-handler-b65b5a5a.js', './index-33108427.js', './terrain-asset-1902cdce.js', './array-collision-matrix-08a7aad0.js', './util-92597975.js'], function () {
    'use strict';
    var _createClass, _classCallCheck, Mat4, Vec3, Quat, _inherits, _possibleConstructorReturn, _getPrototypeOf, _get, removeProperty, intersect, obb, sphere, capsule, PhysicsSystem, EAxisDirection, select, ArrayCollisionMatrix, maxComponent;
    return {
        setters: [function (module) {
            _createClass = module.j;
            _classCallCheck = module.d;
            Mat4 = module.M;
            Vec3 = module.V;
            Quat = module.Q;
            _inherits = module.b;
            _possibleConstructorReturn = module.e;
            _getPrototypeOf = module.f;
            _get = module.aN;
            removeProperty = module.ap;
        }, function (module) {
            intersect = module.dv;
            obb = module.dC;
            sphere = module.dA;
        }, function (module) {
            capsule = module.Q;
        }, function () {}, function () {}, function (module) {
            PhysicsSystem = module.P;
            EAxisDirection = module.a;
            select = module.s;
        }, function () {}, function (module) {
            ArrayCollisionMatrix = module.A;
        }, function (module) {
            maxComponent = module.m;
        }],
        execute: function () {

            var BuiltinObject = /*#__PURE__*/function () {
              function BuiltinObject() {
                _classCallCheck(this, BuiltinObject);

                this.collisionFilterGroup = PhysicsSystem.PhysicsGroup.DEFAULT;
                this.collisionFilterMask = -1;
              }

              _createClass(BuiltinObject, [{
                key: "getGroup",

                /** group */
                value: function getGroup() {
                  return this.collisionFilterGroup;
                }
              }, {
                key: "setGroup",
                value: function setGroup(v) {
                  this.collisionFilterGroup = v;
                }
              }, {
                key: "addGroup",
                value: function addGroup(v) {
                  this.collisionFilterGroup |= v;
                }
              }, {
                key: "removeGroup",
                value: function removeGroup(v) {
                  this.collisionFilterGroup &= ~v;
                }
                /** mask */

              }, {
                key: "getMask",
                value: function getMask() {
                  return this.collisionFilterMask;
                }
              }, {
                key: "setMask",
                value: function setMask(v) {
                  this.collisionFilterMask = v;
                }
              }, {
                key: "addMask",
                value: function addMask(v) {
                  this.collisionFilterMask |= v;
                }
              }, {
                key: "removeMask",
                value: function removeMask(v) {
                  this.collisionFilterMask &= ~v;
                }
              }]);

              return BuiltinObject;
            }();

            // tslint:disable: prefer-for-of
            var m4_0 = new Mat4();
            var v3_0 = new Vec3();
            var v3_1 = new Vec3();
            var quat_0 = new Quat();
            /**
             * Built-in static collider, no physical forces involved
             */

            var BuiltinSharedBody = /*#__PURE__*/function (_BuiltinObject) {
              _inherits(BuiltinSharedBody, _BuiltinObject);

              _createClass(BuiltinSharedBody, [{
                key: "id",
                get: function get() {
                  return this._id;
                }
                /**
                 * add or remove from world \
                 * add, if enable \
                 * remove, if disable & shapes.length == 0 & wrappedBody disable
                 */

              }, {
                key: "enabled",
                set: function set(v) {
                  if (v) {
                    if (this.index < 0) {
                      this.index = this.world.bodies.length;
                      this.world.addSharedBody(this);
                      this.syncInitial();
                    }
                  } else {
                    if (this.index >= 0) {
                      var isRemove = this.shapes.length == 0;

                      if (isRemove) {
                        this.index = -1;
                        this.world.removeSharedBody(this);
                      }
                    }
                  }
                }
              }, {
                key: "reference",
                set: function set(v) {
                  v ? this.ref++ : this.ref--;

                  if (this.ref == 0) {
                    this.destroy();
                  }
                }
                /** id generator */

              }], [{
                key: "getSharedBody",
                value: function getSharedBody(node, wrappedWorld) {
                  var key = node.uuid;

                  if (BuiltinSharedBody.sharedBodesMap.has(key)) {
                    return BuiltinSharedBody.sharedBodesMap.get(key);
                  } else {
                    var newSB = new BuiltinSharedBody(node, wrappedWorld);
                    BuiltinSharedBody.sharedBodesMap.set(node.uuid, newSB);
                    return newSB;
                  }
                }
              }]);

              function BuiltinSharedBody(node, world) {
                var _this;

                _classCallCheck(this, BuiltinSharedBody);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(BuiltinSharedBody).call(this));
                _this._id = void 0;
                _this.index = -1;
                _this.ref = 0;
                _this.node = void 0;
                _this.world = void 0;
                _this.shapes = [];
                _this.wrappedBody = null;
                _this._id = BuiltinSharedBody.idCounter++;
                _this.node = node;
                _this.world = world;
                return _this;
              }

              _createClass(BuiltinSharedBody, [{
                key: "intersects",
                value: function intersects(body) {
                  for (var i = 0; i < this.shapes.length; i++) {
                    var shapeA = this.shapes[i];

                    for (var j = 0; j < body.shapes.length; j++) {
                      var shapeB = body.shapes[j];

                      if (shapeA.collider.needTriggerEvent || shapeB.collider.needTriggerEvent) {
                        if (intersect.resolve(shapeA.worldShape, shapeB.worldShape)) {
                          this.world.shapeArr.push(shapeA);
                          this.world.shapeArr.push(shapeB);
                        }
                      }
                    }
                  }
                }
              }, {
                key: "addShape",
                value: function addShape(shape) {
                  var i = this.shapes.indexOf(shape);

                  if (i < 0) {
                    this.shapes.push(shape);
                  }
                }
              }, {
                key: "removeShape",
                value: function removeShape(shape) {
                  var i = this.shapes.indexOf(shape);

                  if (i >= 0) {
                    this.shapes.splice(i, 1);
                  }
                }
              }, {
                key: "syncSceneToPhysics",
                value: function syncSceneToPhysics() {
                  if (this.node.hasChangedFlags) {
                    this.node.getWorldMatrix(m4_0);
                    v3_0.set(this.node.worldPosition);
                    quat_0.set(this.node.worldRotation);
                    v3_1.set(this.node.worldScale);

                    for (var i = 0; i < this.shapes.length; i++) {
                      this.shapes[i].transform(m4_0, v3_0, quat_0, v3_1);
                    }
                  }
                }
              }, {
                key: "syncInitial",
                value: function syncInitial() {
                  this.node.getWorldMatrix(m4_0);
                  v3_0.set(this.node.worldPosition);
                  quat_0.set(this.node.worldRotation);
                  v3_1.set(this.node.worldScale);

                  for (var i = 0; i < this.shapes.length; i++) {
                    this.shapes[i].transform(m4_0, v3_0, quat_0, v3_1);
                  }
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  BuiltinSharedBody.sharedBodesMap["delete"](this.node.uuid);
                  this.node = null;
                  this.world = null;
                  this.shapes = null;
                }
              }]);

              return BuiltinSharedBody;
            }(BuiltinObject);
            BuiltinSharedBody.sharedBodesMap = new Map();
            BuiltinSharedBody.idCounter = 0;

            var hitPoint = new Vec3();
            var TriggerEventObject = {
              type: 'onTriggerEnter',
              selfCollider: null,
              otherCollider: null,
              impl: {}
            };
            /**
             * Built-in collision system, intended for use as a
             * efficient discrete collision detector,
             * not a full physical simulator
             */

            var BuiltInWorld = /*#__PURE__*/function () {
              function BuiltInWorld() {
                _classCallCheck(this, BuiltInWorld);

                this.shapeArr = [];
                this.bodies = [];
                this._shapeArrPrev = [];
                this._collisionMatrix = new ArrayCollisionMatrix();
                this._collisionMatrixPrev = new ArrayCollisionMatrix();
              }

              _createClass(BuiltInWorld, [{
                key: "setGravity",
                value: function setGravity(v) {}
              }, {
                key: "setAllowSleep",
                value: function setAllowSleep(v) {}
              }, {
                key: "setDefaultMaterial",
                value: function setDefaultMaterial(v) {}
              }, {
                key: "step",
                value: function step(deltaTime) {
                  // store and reset collision array
                  var tmp = this._shapeArrPrev;
                  this._shapeArrPrev = this.shapeArr;
                  this.shapeArr = tmp;
                  this.shapeArr.length = 0; // collision detection

                  for (var i = 0; i < this.bodies.length; i++) {
                    var bodyA = this.bodies[i];

                    for (var j = i + 1; j < this.bodies.length; j++) {
                      var bodyB = this.bodies[j]; // first, Check collision filter masks

                      if ((bodyA.collisionFilterGroup & bodyB.collisionFilterMask) === 0 || (bodyB.collisionFilterGroup & bodyA.collisionFilterMask) === 0) {
                        continue;
                      }

                      bodyA.intersects(bodyB);
                    }
                  }
                }
              }, {
                key: "syncSceneToPhysics",
                value: function syncSceneToPhysics() {
                  for (var i = 0; i < this.bodies.length; i++) {
                    this.bodies[i].syncSceneToPhysics();
                  }
                }
              }, {
                key: "emitEvents",
                value: function emitEvents() {
                  this.emitTriggerEvent();
                }
              }, {
                key: "raycastClosest",
                value: function raycastClosest(worldRay, options, out) {
                  var tmp_d = Infinity;
                  var max_d = options.maxDistance;
                  var mask = options.mask;

                  for (var i = 0; i < this.bodies.length; i++) {
                    var body = this.bodies[i];
                    if (!(body.collisionFilterGroup & mask)) continue;

                    for (var _i = 0; _i < body.shapes.length; _i++) {
                      var shape = body.shapes[_i];
                      var distance = intersect.resolve(worldRay, shape.worldShape);

                      if (distance == 0 || distance > max_d) {
                        continue;
                      }

                      if (tmp_d > distance) {
                        tmp_d = distance;
                        Vec3.normalize(hitPoint, worldRay.d);
                        Vec3.scaleAndAdd(hitPoint, worldRay.o, hitPoint, distance);

                        out._assign(hitPoint, distance, shape.collider, Vec3.ZERO);
                      }
                    }
                  }

                  return !(tmp_d == Infinity);
                }
              }, {
                key: "raycast",
                value: function raycast(worldRay, options, pool, results) {
                  var max_d = options.maxDistance;
                  var mask = options.mask;

                  for (var i = 0; i < this.bodies.length; i++) {
                    var body = this.bodies[i];
                    if (!(body.collisionFilterGroup & mask)) continue;

                    for (var _i2 = 0; _i2 < body.shapes.length; _i2++) {
                      var shape = body.shapes[_i2];
                      var distance = intersect.resolve(worldRay, shape.worldShape);

                      if (distance == 0 || distance > max_d) {
                        continue;
                      } else {
                        var r = pool.add();
                        worldRay.computeHit(hitPoint, distance);

                        r._assign(hitPoint, distance, shape.collider, Vec3.ZERO);

                        results.push(r);
                      }
                    }
                  }

                  return results.length > 0;
                }
              }, {
                key: "getSharedBody",
                value: function getSharedBody(node) {
                  return BuiltinSharedBody.getSharedBody(node, this);
                }
              }, {
                key: "addSharedBody",
                value: function addSharedBody(body) {
                  var index = this.bodies.indexOf(body);

                  if (index < 0) {
                    this.bodies.push(body);
                  }
                }
              }, {
                key: "removeSharedBody",
                value: function removeSharedBody(body) {
                  var index = this.bodies.indexOf(body);

                  if (index >= 0) {
                    this.bodies.splice(index, 1);
                  }
                }
              }, {
                key: "updateCollisionMatrix",
                value: function updateCollisionMatrix(group, mask) {
                  for (var i = 0; i < this.bodies.length; i++) {
                    var b = this.bodies[i];

                    if (b.collisionFilterGroup == group) {
                      b.collisionFilterMask = mask;
                    }
                  }
                }
              }, {
                key: "emitTriggerEvent",
                value: function emitTriggerEvent() {
                  var shapeA;
                  var shapeB;

                  for (var i = 0; i < this.shapeArr.length; i += 2) {
                    shapeA = this.shapeArr[i];
                    shapeB = this.shapeArr[i + 1];
                    TriggerEventObject.selfCollider = shapeA.collider;
                    TriggerEventObject.otherCollider = shapeB.collider;

                    this._collisionMatrix.set(shapeA.id, shapeB.id, true);

                    if (this._collisionMatrixPrev.get(shapeA.id, shapeB.id)) {
                      // emit stay
                      TriggerEventObject.type = 'onTriggerStay';
                    } else {
                      // first trigger, emit enter
                      TriggerEventObject.type = 'onTriggerEnter';
                    }

                    if (shapeA.collider) {
                      shapeA.collider.emit(TriggerEventObject.type, TriggerEventObject);
                    }

                    TriggerEventObject.selfCollider = shapeB.collider;
                    TriggerEventObject.otherCollider = shapeA.collider;

                    if (shapeB.collider) {
                      shapeB.collider.emit(TriggerEventObject.type, TriggerEventObject);
                    }
                  }

                  for (var _i3 = 0; _i3 < this._shapeArrPrev.length; _i3 += 2) {
                    shapeA = this._shapeArrPrev[_i3];
                    shapeB = this._shapeArrPrev[_i3 + 1];

                    if (this._collisionMatrixPrev.get(shapeA.id, shapeB.id)) {
                      if (!this._collisionMatrix.get(shapeA.id, shapeB.id)) {
                        // emit exit
                        TriggerEventObject.type = 'onTriggerExit';
                        TriggerEventObject.selfCollider = shapeA.collider;
                        TriggerEventObject.otherCollider = shapeB.collider;

                        if (shapeA.collider) {
                          shapeA.collider.emit(TriggerEventObject.type, TriggerEventObject);
                        }

                        TriggerEventObject.selfCollider = shapeB.collider;
                        TriggerEventObject.otherCollider = shapeA.collider;

                        if (shapeB.collider) {
                          shapeB.collider.emit(TriggerEventObject.type, TriggerEventObject);
                        }

                        this._collisionMatrix.set(shapeA.id, shapeB.id, false);
                      }
                    }
                  }

                  var temp = this._collisionMatrixPrev.matrix;
                  this._collisionMatrixPrev.matrix = this._collisionMatrix.matrix;
                  this._collisionMatrix.matrix = temp;

                  this._collisionMatrix.reset();
                }
              }, {
                key: "impl",
                get: function get() {
                  return this;
                }
              }]);

              return BuiltInWorld;
            }();

            var BuiltinRigidBody = /*#__PURE__*/function () {
              function BuiltinRigidBody() {
                _classCallCheck(this, BuiltinRigidBody);
              }

              _createClass(BuiltinRigidBody, [{
                key: "initialize",
                value: function initialize(com) {
                  this._rigidBody = com;
                  this._sharedBody = PhysicsSystem.instance.physicsWorld.getSharedBody(this._rigidBody.node);
                  this._sharedBody.reference = true;
                  this._sharedBody.wrappedBody = this;
                }
              }, {
                key: "onEnable",
                value: function onEnable() {
                  this._sharedBody.setGroup(this._rigidBody.group);

                  if (PhysicsSystem.instance.useCollisionMatrix) {
                    this._sharedBody.setMask(PhysicsSystem.instance.collisionMatrix[this._rigidBody.group]);
                  }

                  this._sharedBody.enabled = true;
                }
              }, {
                key: "onDisable",
                value: function onDisable() {
                  this._sharedBody.enabled = false;
                }
              }, {
                key: "onDestroy",
                value: function onDestroy() {
                  this._sharedBody.reference = false;
                  this._rigidBody = null;
                  this._sharedBody = null;
                }
              }, {
                key: "setMass",
                value: function setMass(v) {}
              }, {
                key: "setLinearDamping",
                value: function setLinearDamping(v) {}
              }, {
                key: "setAngularDamping",
                value: function setAngularDamping(v) {}
              }, {
                key: "setIsKinematic",
                value: function setIsKinematic(v) {}
              }, {
                key: "useGravity",
                value: function useGravity(v) {}
              }, {
                key: "fixRotation",
                value: function fixRotation(v) {}
              }, {
                key: "setLinearFactor",
                value: function setLinearFactor(v) {}
              }, {
                key: "setAngularFactor",
                value: function setAngularFactor(v) {}
              }, {
                key: "setAllowSleep",
                value: function setAllowSleep(v) {}
              }, {
                key: "wakeUp",
                value: function wakeUp() {}
              }, {
                key: "sleep",
                value: function sleep() {}
              }, {
                key: "clearState",
                value: function clearState() {}
              }, {
                key: "clearForces",
                value: function clearForces() {}
              }, {
                key: "clearVelocity",
                value: function clearVelocity() {}
              }, {
                key: "setSleepThreshold",
                value: function setSleepThreshold(v) {}
              }, {
                key: "getSleepThreshold",
                value: function getSleepThreshold() {
                  return 0;
                }
              }, {
                key: "getLinearVelocity",
                value: function getLinearVelocity(out) {}
              }, {
                key: "setLinearVelocity",
                value: function setLinearVelocity(value) {}
              }, {
                key: "getAngularVelocity",
                value: function getAngularVelocity(out) {}
              }, {
                key: "setAngularVelocity",
                value: function setAngularVelocity(value) {}
              }, {
                key: "applyForce",
                value: function applyForce(force, relativePoint) {}
              }, {
                key: "applyLocalForce",
                value: function applyLocalForce(force, relativePoint) {}
              }, {
                key: "applyImpulse",
                value: function applyImpulse(force, relativePoint) {}
              }, {
                key: "applyLocalImpulse",
                value: function applyLocalImpulse(force, relativePoint) {}
              }, {
                key: "applyTorque",
                value: function applyTorque(torque) {}
              }, {
                key: "applyLocalTorque",
                value: function applyLocalTorque(torque) {}
              }, {
                key: "setGroup",
                value: function setGroup(v) {
                  this._sharedBody.setGroup(v);
                }
              }, {
                key: "getGroup",
                value: function getGroup() {
                  return this._sharedBody.getGroup();
                }
              }, {
                key: "addGroup",
                value: function addGroup(v) {
                  this._sharedBody.addGroup(v);
                }
              }, {
                key: "removeGroup",
                value: function removeGroup(v) {
                  this._sharedBody.removeGroup(v);
                }
              }, {
                key: "setMask",
                value: function setMask(v) {
                  this._sharedBody.setMask(v);
                }
              }, {
                key: "getMask",
                value: function getMask() {
                  return this._sharedBody.getMask();
                }
              }, {
                key: "addMask",
                value: function addMask(v) {
                  this._sharedBody.addMask(v);
                }
              }, {
                key: "removeMask",
                value: function removeMask(v) {
                  this._sharedBody.removeMask(v);
                }
              }, {
                key: "impl",
                get: function get() {
                  return this;
                }
              }, {
                key: "isAwake",
                get: function get() {
                  return true;
                }
              }, {
                key: "isSleepy",
                get: function get() {
                  return false;
                }
              }, {
                key: "isSleeping",
                get: function get() {
                  return false;
                }
              }, {
                key: "rigidBody",
                get: function get() {
                  return this._rigidBody;
                }
              }, {
                key: "sharedBody",
                get: function get() {
                  return this._sharedBody;
                }
              }]);

              return BuiltinRigidBody;
            }();

            var BuiltinShape = /*#__PURE__*/function () {
              function BuiltinShape() {
                _classCallCheck(this, BuiltinShape);

                this.id = BuiltinShape.idCounter++;
              }

              _createClass(BuiltinShape, [{
                key: "getAABB",
                value: function getAABB(v) {}
              }, {
                key: "getBoundingSphere",
                value: function getBoundingSphere(v) {}
              }, {
                key: "setMaterial",
                value: function setMaterial(v) {}
              }, {
                key: "setAsTrigger",
                value: function setAsTrigger(v) {}
              }, {
                key: "setCenter",
                value: function setCenter(v) {
                  Vec3.copy(this._localShape.center, v);
                }
              }, {
                key: "initialize",
                value: function initialize(comp) {
                  this._collider = comp;
                  this._sharedBody = PhysicsSystem.instance.physicsWorld.getSharedBody(this._collider.node);
                  this._sharedBody.reference = true;
                }
              }, {
                key: "onLoad",
                value: function onLoad() {
                  this.setCenter(this._collider.center);
                }
              }, {
                key: "onEnable",
                value: function onEnable() {
                  this._sharedBody.addShape(this);

                  this._sharedBody.enabled = true;
                }
              }, {
                key: "onDisable",
                value: function onDisable() {
                  this._sharedBody.removeShape(this);

                  this._sharedBody.enabled = false;
                }
              }, {
                key: "onDestroy",
                value: function onDestroy() {
                  this._sharedBody.reference = false;
                  this._collider = null;
                  this._localShape = null;
                  this._worldShape = null;
                }
              }, {
                key: "transform",
                value: function transform(m, pos, rot, scale) {
                  this._localShape.transform(m, pos, rot, scale, this._worldShape);
                }
                /** group */

              }, {
                key: "getGroup",
                value: function getGroup() {
                  return this._sharedBody.getGroup();
                }
              }, {
                key: "setGroup",
                value: function setGroup(v) {
                  this._sharedBody.setGroup(v);
                }
              }, {
                key: "addGroup",
                value: function addGroup(v) {
                  this._sharedBody.addGroup(v);
                }
              }, {
                key: "removeGroup",
                value: function removeGroup(v) {
                  this._sharedBody.removeGroup(v);
                }
                /** mask */

              }, {
                key: "getMask",
                value: function getMask() {
                  return this._sharedBody.getMask();
                }
              }, {
                key: "setMask",
                value: function setMask(v) {
                  this._sharedBody.setMask(v);
                }
              }, {
                key: "addMask",
                value: function addMask(v) {
                  this._sharedBody.addMask(v);
                }
              }, {
                key: "removeMask",
                value: function removeMask(v) {
                  this._sharedBody.removeMask(v);
                }
              }, {
                key: "attachedRigidBody",
                get: function get() {
                  return null;
                }
              }, {
                key: "localShape",
                get: function get() {
                  return this._localShape;
                }
              }, {
                key: "worldShape",
                get: function get() {
                  return this._worldShape;
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._worldShape;
                }
              }, {
                key: "sharedBody",
                get: function get() {
                  return this._sharedBody;
                }
              }, {
                key: "collider",
                get: function get() {
                  return this._collider;
                }
                /** id generator */

              }]);

              return BuiltinShape;
            }();
            BuiltinShape.idCounter = 0;

            var BuiltinBoxShape = /*#__PURE__*/function (_BuiltinShape) {
              _inherits(BuiltinBoxShape, _BuiltinShape);

              _createClass(BuiltinBoxShape, [{
                key: "localObb",
                get: function get() {
                  return this._localShape;
                }
              }, {
                key: "worldObb",
                get: function get() {
                  return this._worldShape;
                }
              }, {
                key: "collider",
                get: function get() {
                  return this._collider;
                }
              }]);

              function BuiltinBoxShape() {
                var _this;

                _classCallCheck(this, BuiltinBoxShape);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(BuiltinBoxShape).call(this));
                _this._localShape = new obb();
                _this._worldShape = new obb();
                return _this;
              }

              _createClass(BuiltinBoxShape, [{
                key: "setSize",
                value: function setSize(size) {
                  Vec3.multiplyScalar(this.localObb.halfExtents, size, 0.5);
                  Vec3.multiply(this.worldObb.halfExtents, this.localObb.halfExtents, this.collider.node.worldScale);
                }
              }, {
                key: "onLoad",
                value: function onLoad() {
                  _get(_getPrototypeOf(BuiltinBoxShape.prototype), "onLoad", this).call(this);

                  this.setSize(this.collider.size);
                }
              }]);

              return BuiltinBoxShape;
            }(BuiltinShape);

            var BuiltinSphereShape = /*#__PURE__*/function (_BuiltinShape) {
              _inherits(BuiltinSphereShape, _BuiltinShape);

              _createClass(BuiltinSphereShape, [{
                key: "setRadius",
                value: function setRadius(radius) {
                  this.localSphere.radius = radius;
                  var s = maxComponent(this.collider.node.worldScale);
                  this.worldSphere.radius = this.localSphere.radius * s;
                }
              }, {
                key: "localSphere",
                get: function get() {
                  return this._localShape;
                }
              }, {
                key: "worldSphere",
                get: function get() {
                  return this._worldShape;
                }
              }, {
                key: "collider",
                get: function get() {
                  return this._collider;
                }
              }]);

              function BuiltinSphereShape() {
                var _this;

                var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;

                _classCallCheck(this, BuiltinSphereShape);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(BuiltinSphereShape).call(this));
                _this._localShape = new sphere(0, 0, 0, radius);
                _this._worldShape = new sphere(0, 0, 0, radius);
                return _this;
              }

              _createClass(BuiltinSphereShape, [{
                key: "onLoad",
                value: function onLoad() {
                  _get(_getPrototypeOf(BuiltinSphereShape.prototype), "onLoad", this).call(this);

                  this.setRadius(this.collider.radius);
                }
              }]);

              return BuiltinSphereShape;
            }(BuiltinShape);

            var BuiltinCapsuleShape = /*#__PURE__*/function (_BuiltinShape) {
              _inherits(BuiltinCapsuleShape, _BuiltinShape);

              _createClass(BuiltinCapsuleShape, [{
                key: "localCapsule",
                get: function get() {
                  return this._localShape;
                }
              }, {
                key: "worldCapsule",
                get: function get() {
                  return this._worldShape;
                }
              }, {
                key: "collider",
                get: function get() {
                  return this._collider;
                }
              }]);

              function BuiltinCapsuleShape() {
                var _this;

                var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
                var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
                var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EAxisDirection.Y_AXIS;

                _classCallCheck(this, BuiltinCapsuleShape);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(BuiltinCapsuleShape).call(this));
                var halfHeight = (height - radius * 2) / 2;
                var h = halfHeight < 0 ? 0 : halfHeight;
                _this._localShape = new capsule(radius, h, direction);
                _this._worldShape = new capsule(radius, h, direction);
                return _this;
              }

              _createClass(BuiltinCapsuleShape, [{
                key: "setRadius",
                value: function setRadius(v) {
                  this.localCapsule.radius = v;
                  this.transform(this._sharedBody.node.worldMatrix, this._sharedBody.node.worldPosition, this._sharedBody.node.worldRotation, this._sharedBody.node.worldScale);
                }
              }, {
                key: "setCylinderHeight",
                value: function setCylinderHeight(v) {
                  this.localCapsule.halfHeight = v / 2;
                  this.localCapsule.updateCache();
                  this.transform(this._sharedBody.node.worldMatrix, this._sharedBody.node.worldPosition, this._sharedBody.node.worldRotation, this._sharedBody.node.worldScale);
                }
              }, {
                key: "setDirection",
                value: function setDirection(v) {
                  this.localCapsule.axis = v;
                  this.localCapsule.updateCache();
                  this.worldCapsule.axis = v;
                  this.worldCapsule.updateCache();
                  this.transform(this._sharedBody.node.worldMatrix, this._sharedBody.node.worldPosition, this._sharedBody.node.worldRotation, this._sharedBody.node.worldScale);
                }
              }, {
                key: "onLoad",
                value: function onLoad() {
                  _get(_getPrototypeOf(BuiltinCapsuleShape.prototype), "onLoad", this).call(this);

                  this.setRadius(this.collider.radius);
                  this.setDirection(this.collider.direction);
                }
              }]);

              return BuiltinCapsuleShape;
            }(BuiltinShape);

            /**
             * @hidden
             */
            removeProperty(BuiltinCapsuleShape.prototype, 'shape.prototype', [{
              'name': 'setHeight',
              'suggest': 'You should use the interface provided by the component.'
            }]);

            /**
             * @hidden
             */
            select('builtin', {
              RigidBody: BuiltinRigidBody,
              BoxShape: BuiltinBoxShape,
              SphereShape: BuiltinSphereShape,
              PhysicsWorld: BuiltInWorld,
              CapsuleShape: BuiltinCapsuleShape
            });

        }
    };
});
