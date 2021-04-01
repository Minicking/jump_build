System.register(['./deprecated-4ec15e5e.js', './deprecated-b99c04b5.js', './index-caa5c4e5.js', './SubContextView-a8900bae.js', './component-event-handler-b65b5a5a.js', './ammo-instantiated-e4ebeae9.js', './index-33108427.js', './terrain-asset-1902cdce.js', './array-collision-matrix-08a7aad0.js'], function () {
    'use strict';
    var Vec3, Quat, _createClass, _classCallCheck, _inherits, _possibleConstructorReturn, _getPrototypeOf, _get, absMax, warnID, warn, removeProperty, replaceProperty, GFXPrimitiveMode, TransformBit, Ammo$1, PhysicsSystem, ERigidBodyType, select, ArrayCollisionMatrix;
    return {
        setters: [function (module) {
            Vec3 = module.V;
            Quat = module.Q;
            _createClass = module.j;
            _classCallCheck = module.d;
            _inherits = module.b;
            _possibleConstructorReturn = module.e;
            _getPrototypeOf = module.f;
            _get = module.aN;
            absMax = module.ah;
            warnID = module.x;
            warn = module.w;
            removeProperty = module.ap;
            replaceProperty = module.ao;
        }, function (module) {
            GFXPrimitiveMode = module.t;
            TransformBit = module.dR;
        }, function () {}, function () {}, function () {}, function (module) {
            Ammo$1 = module.A;
        }, function (module) {
            PhysicsSystem = module.P;
            ERigidBodyType = module.E;
            select = module.s;
        }, function () {}, function (module) {
            ArrayCollisionMatrix = module.A;
        }],
        execute: function () {

            function cocos2AmmoVec3(out, v) {
              out.setValue(v.x, v.y, v.z);
              return out;
            }
            function ammo2CocosVec3(out, v) {
              out.x = v.x();
              out.y = v.y();
              out.z = v.z();
              return out;
            }
            function cocos2AmmoQuat(out, q) {
              out.setValue(q.x, q.y, q.z, q.w);
              return out;
            }
            function ammo2CocosQuat(out, q) {
              out.x = q.x();
              out.y = q.y();
              out.z = q.z();
              out.w = q.w();
              return out;
            }
            function ammoDeletePtr(obj, klass) {
              delete klass.__cache__[obj.ptr];
            } // TODO : Ammo['deletePtr'] = deletePtr;

            function cocos2AmmoTriMesh(out, mesh) {
              var len = mesh.renderingSubMeshes.length;

              for (var i = 0; i < len; i++) {
                var subMesh = mesh.renderingSubMeshes[i];
                var geoInfo = subMesh.geometricInfo;

                if (geoInfo) {
                  var primitiveMode = subMesh.primitiveMode;
                  var vb = geoInfo.positions;
                  var ib = geoInfo.indices;

                  if (primitiveMode == GFXPrimitiveMode.TRIANGLE_LIST) {
                    var cnt = ib.length;

                    for (var j = 0; j < cnt; j += 3) {
                      var i0 = ib[j] * 3;
                      var i1 = ib[j + 1] * 3;
                      var i2 = ib[j + 2] * 3;
                      var v0 = new Ammo$1.btVector3(vb[i0], vb[i0 + 1], vb[i0 + 2]);
                      var v1 = new Ammo$1.btVector3(vb[i1], vb[i1 + 1], vb[i1 + 2]);
                      var v2 = new Ammo$1.btVector3(vb[i2], vb[i2 + 1], vb[i2 + 2]);
                      out.addTriangle(v0, v1, v2);
                      Ammo$1.destroy(v0);
                      Ammo$1.destroy(v1);
                      Ammo$1.destroy(v2);
                    }
                  } else if (primitiveMode == GFXPrimitiveMode.TRIANGLE_STRIP) {
                    var _cnt = ib.length - 2;

                    var rev = 0;

                    for (var _j = 0; _j < _cnt; _j += 1) {
                      var _i = ib[_j - rev] * 3;

                      var _i2 = ib[_j + rev + 1] * 3;

                      var _i3 = ib[_j + 2] * 3;

                      var _v = new Ammo$1.btVector3(vb[_i], vb[_i + 1], vb[_i + 2]);

                      var _v2 = new Ammo$1.btVector3(vb[_i2], vb[_i2 + 1], vb[_i2 + 2]);

                      var _v3 = new Ammo$1.btVector3(vb[_i3], vb[_i3 + 1], vb[_i3 + 2]);

                      out.addTriangle(_v, _v2, _v3);
                      Ammo$1.destroy(_v);
                      Ammo$1.destroy(_v2);
                      Ammo$1.destroy(_v3);
                    }
                  } else if (primitiveMode == GFXPrimitiveMode.TRIANGLE_FAN) {
                    var _cnt2 = ib.length - 1;

                    var _i4 = ib[0] * 3;

                    var _v4 = new Ammo$1.btVector3(vb[_i4], vb[_i4 + 1], vb[_i4 + 2]);

                    for (var _j2 = 1; _j2 < _cnt2; _j2 += 1) {
                      var _i5 = ib[_j2] * 3;

                      var _i6 = ib[_j2 + 1] * 3;

                      var _v5 = new Ammo$1.btVector3(vb[_i5], vb[_i5 + 1], vb[_i5 + 2]);

                      var _v6 = new Ammo$1.btVector3(vb[_i6], vb[_i6 + 1], vb[_i6 + 2]);

                      out.addTriangle(_v4, _v5, _v6);
                      Ammo$1.destroy(_v4);
                      Ammo$1.destroy(_v5);
                      Ammo$1.destroy(_v6);
                    }
                  }
                }
              }

              return out;
            }

            var EAmmoSharedBodyDirty;

            (function (EAmmoSharedBodyDirty) {
              EAmmoSharedBodyDirty[EAmmoSharedBodyDirty["BODY_RE_ADD"] = 1] = "BODY_RE_ADD";
              EAmmoSharedBodyDirty[EAmmoSharedBodyDirty["GHOST_RE_ADD"] = 2] = "GHOST_RE_ADD";
            })(EAmmoSharedBodyDirty || (EAmmoSharedBodyDirty = {}));

            var AmmoCollisionFlags;

            (function (AmmoCollisionFlags) {
              AmmoCollisionFlags[AmmoCollisionFlags["CF_STATIC_OBJECT"] = 1] = "CF_STATIC_OBJECT";
              AmmoCollisionFlags[AmmoCollisionFlags["CF_KINEMATIC_OBJECT"] = 2] = "CF_KINEMATIC_OBJECT";
              AmmoCollisionFlags[AmmoCollisionFlags["CF_NO_CONTACT_RESPONSE"] = 4] = "CF_NO_CONTACT_RESPONSE";
              AmmoCollisionFlags[AmmoCollisionFlags["CF_CUSTOM_MATERIAL_CALLBACK"] = 8] = "CF_CUSTOM_MATERIAL_CALLBACK";
              AmmoCollisionFlags[AmmoCollisionFlags["CF_CHARACTER_OBJECT"] = 16] = "CF_CHARACTER_OBJECT";
              AmmoCollisionFlags[AmmoCollisionFlags["CF_DISABLE_VISUALIZE_OBJECT"] = 32] = "CF_DISABLE_VISUALIZE_OBJECT";
              AmmoCollisionFlags[AmmoCollisionFlags["CF_DISABLE_SPU_COLLISION_PROCESSING"] = 64] = "CF_DISABLE_SPU_COLLISION_PROCESSING";
            })(AmmoCollisionFlags || (AmmoCollisionFlags = {}));
            Ammo$1.AmmoCollisionFlags = AmmoCollisionFlags;
            var AmmoCollisionObjectTypes;

            (function (AmmoCollisionObjectTypes) {
              AmmoCollisionObjectTypes[AmmoCollisionObjectTypes["CO_COLLISION_OBJECT"] = 1] = "CO_COLLISION_OBJECT";
              AmmoCollisionObjectTypes[AmmoCollisionObjectTypes["CO_RIGID_BODY"] = 2] = "CO_RIGID_BODY";
              AmmoCollisionObjectTypes[AmmoCollisionObjectTypes["CO_GHOST_OBJECT"] = 4] = "CO_GHOST_OBJECT";
              AmmoCollisionObjectTypes[AmmoCollisionObjectTypes["CO_SOFT_BODY"] = 8] = "CO_SOFT_BODY";
              AmmoCollisionObjectTypes[AmmoCollisionObjectTypes["CO_HF_FLUID"] = 16] = "CO_HF_FLUID";
              AmmoCollisionObjectTypes[AmmoCollisionObjectTypes["CO_USER_TYPE"] = 32] = "CO_USER_TYPE";
              AmmoCollisionObjectTypes[AmmoCollisionObjectTypes["CO_FEATHERSTONE_LINK"] = 64] = "CO_FEATHERSTONE_LINK";
            })(AmmoCollisionObjectTypes || (AmmoCollisionObjectTypes = {}));
            Ammo$1.AmmoCollisionObjectTypes = AmmoCollisionObjectTypes;
            var AmmoCollisionObjectStates;

            (function (AmmoCollisionObjectStates) {
              AmmoCollisionObjectStates[AmmoCollisionObjectStates["ACTIVE_TAG"] = 1] = "ACTIVE_TAG";
              AmmoCollisionObjectStates[AmmoCollisionObjectStates["ISLAND_SLEEPING"] = 2] = "ISLAND_SLEEPING";
              AmmoCollisionObjectStates[AmmoCollisionObjectStates["WANTS_DEACTIVATION"] = 3] = "WANTS_DEACTIVATION";
              AmmoCollisionObjectStates[AmmoCollisionObjectStates["DISABLE_DEACTIVATION"] = 4] = "DISABLE_DEACTIVATION";
              AmmoCollisionObjectStates[AmmoCollisionObjectStates["DISABLE_SIMULATION"] = 5] = "DISABLE_SIMULATION";
            })(AmmoCollisionObjectStates || (AmmoCollisionObjectStates = {}));

            var AmmoAnisotropicFrictionFlags;

            (function (AmmoAnisotropicFrictionFlags) {
              AmmoAnisotropicFrictionFlags[AmmoAnisotropicFrictionFlags["CF_ANISOTROPIC_FRICTION_DISABLED"] = 0] = "CF_ANISOTROPIC_FRICTION_DISABLED";
              AmmoAnisotropicFrictionFlags[AmmoAnisotropicFrictionFlags["CF_ANISOTROPIC_FRICTION"] = 1] = "CF_ANISOTROPIC_FRICTION";
              AmmoAnisotropicFrictionFlags[AmmoAnisotropicFrictionFlags["CF_ANISOTROPIC_ROLLING_FRICTION"] = 2] = "CF_ANISOTROPIC_ROLLING_FRICTION";
            })(AmmoAnisotropicFrictionFlags || (AmmoAnisotropicFrictionFlags = {}));
            Ammo$1.AmmoAnisotropicFrictionFlags = AmmoAnisotropicFrictionFlags;
            var AmmoRigidBodyFlags;

            (function (AmmoRigidBodyFlags) {
              AmmoRigidBodyFlags[AmmoRigidBodyFlags["BT_DISABLE_WORLD_GRAVITY"] = 1] = "BT_DISABLE_WORLD_GRAVITY";
              AmmoRigidBodyFlags[AmmoRigidBodyFlags["BT_ENABLE_GYROPSCOPIC_FORCE"] = 2] = "BT_ENABLE_GYROPSCOPIC_FORCE";
            })(AmmoRigidBodyFlags || (AmmoRigidBodyFlags = {}));
            Ammo$1.AmmoRigidBodyFlags = AmmoRigidBodyFlags; /// btDispatcher uses these types
            /// IMPORTANT NOTE:The types are ordered polyhedral, implicit convex and concave
            /// to facilitate type checking
            /// CUSTOM_POLYHEDRAL_SHAPE_TYPE,CUSTOM_CONVEX_SHAPE_TYPE and CUSTOM_CONCAVE_SHAPE_TYPE can be used to extend Bullet without modifying source code

            var AmmoBroadphaseNativeTypes;

            (function (AmmoBroadphaseNativeTypes) {
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["BOX_SHAPE_PROXYTYPE"] = 0] = "BOX_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["TRIANGLE_SHAPE_PROXYTYPE"] = 1] = "TRIANGLE_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["TETRAHEDRAL_SHAPE_PROXYTYPE"] = 2] = "TETRAHEDRAL_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["CONVEX_TRIANGLEMESH_SHAPE_PROXYTYPE"] = 3] = "CONVEX_TRIANGLEMESH_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["CONVEX_HULL_SHAPE_PROXYTYPE"] = 4] = "CONVEX_HULL_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["CONVEX_POINT_CLOUD_SHAPE_PROXYTYPE"] = 5] = "CONVEX_POINT_CLOUD_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["CUSTOM_POLYHEDRAL_SHAPE_TYPE"] = 6] = "CUSTOM_POLYHEDRAL_SHAPE_TYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["IMPLICIT_CONVEX_SHAPES_START_HERE"] = 7] = "IMPLICIT_CONVEX_SHAPES_START_HERE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["SPHERE_SHAPE_PROXYTYPE"] = 8] = "SPHERE_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["MULTI_SPHERE_SHAPE_PROXYTYPE"] = 9] = "MULTI_SPHERE_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["CAPSULE_SHAPE_PROXYTYPE"] = 10] = "CAPSULE_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["CONE_SHAPE_PROXYTYPE"] = 11] = "CONE_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["CONVEX_SHAPE_PROXYTYPE"] = 12] = "CONVEX_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["CYLINDER_SHAPE_PROXYTYPE"] = 13] = "CYLINDER_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["UNIFORM_SCALING_SHAPE_PROXYTYPE"] = 14] = "UNIFORM_SCALING_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["MINKOWSKI_SUM_SHAPE_PROXYTYPE"] = 15] = "MINKOWSKI_SUM_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["MINKOWSKI_DIFFERENCE_SHAPE_PROXYTYPE"] = 16] = "MINKOWSKI_DIFFERENCE_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["BOX_2D_SHAPE_PROXYTYPE"] = 17] = "BOX_2D_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["CONVEX_2D_SHAPE_PROXYTYPE"] = 18] = "CONVEX_2D_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["CUSTOM_CONVEX_SHAPE_TYPE"] = 19] = "CUSTOM_CONVEX_SHAPE_TYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["CONCAVE_SHAPES_START_HERE"] = 20] = "CONCAVE_SHAPES_START_HERE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["TRIANGLE_MESH_SHAPE_PROXYTYPE"] = 21] = "TRIANGLE_MESH_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["SCALED_TRIANGLE_MESH_SHAPE_PROXYTYPE"] = 22] = "SCALED_TRIANGLE_MESH_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["FAST_CONCAVE_MESH_PROXYTYPE"] = 23] = "FAST_CONCAVE_MESH_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["TERRAIN_SHAPE_PROXYTYPE"] = 24] = "TERRAIN_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["GIMPACT_SHAPE_PROXYTYPE"] = 25] = "GIMPACT_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["MULTIMATERIAL_TRIANGLE_MESH_PROXYTYPE"] = 26] = "MULTIMATERIAL_TRIANGLE_MESH_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["EMPTY_SHAPE_PROXYTYPE"] = 27] = "EMPTY_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["STATIC_PLANE_PROXYTYPE"] = 28] = "STATIC_PLANE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["CUSTOM_CONCAVE_SHAPE_TYPE"] = 29] = "CUSTOM_CONCAVE_SHAPE_TYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["CONCAVE_SHAPES_END_HERE"] = 30] = "CONCAVE_SHAPES_END_HERE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["COMPOUND_SHAPE_PROXYTYPE"] = 31] = "COMPOUND_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["SOFTBODY_SHAPE_PROXYTYPE"] = 32] = "SOFTBODY_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["HFFLUID_SHAPE_PROXYTYPE"] = 33] = "HFFLUID_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["HFFLUID_BUOYANT_CONVEX_SHAPE_PROXYTYPE"] = 34] = "HFFLUID_BUOYANT_CONVEX_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["INVALID_SHAPE_PROXYTYPE"] = 35] = "INVALID_SHAPE_PROXYTYPE";
              AmmoBroadphaseNativeTypes[AmmoBroadphaseNativeTypes["MAX_BROADPHASE_COLLISION_TYPES"] = 36] = "MAX_BROADPHASE_COLLISION_TYPES";
            })(AmmoBroadphaseNativeTypes || (AmmoBroadphaseNativeTypes = {}));
            Ammo$1.AmmoBroadphaseNativeTypes = AmmoBroadphaseNativeTypes;
            var AmmoCollisionFilterGroups;

            (function (AmmoCollisionFilterGroups) {
              AmmoCollisionFilterGroups[AmmoCollisionFilterGroups["DefaultFilter"] = 1] = "DefaultFilter";
              AmmoCollisionFilterGroups[AmmoCollisionFilterGroups["StaticFilter"] = 2] = "StaticFilter";
              AmmoCollisionFilterGroups[AmmoCollisionFilterGroups["KinematicFilter"] = 4] = "KinematicFilter";
              AmmoCollisionFilterGroups[AmmoCollisionFilterGroups["DebrisFilter"] = 8] = "DebrisFilter";
              AmmoCollisionFilterGroups[AmmoCollisionFilterGroups["SensorTrigger"] = 16] = "SensorTrigger";
              AmmoCollisionFilterGroups[AmmoCollisionFilterGroups["CharacterFilter"] = 32] = "CharacterFilter";
              AmmoCollisionFilterGroups[AmmoCollisionFilterGroups["AllFilter"] = -1] = "AllFilter";
            })(AmmoCollisionFilterGroups || (AmmoCollisionFilterGroups = {}));
            Ammo$1.AmmoCollisionFilterGroups = AmmoCollisionFilterGroups;
            var AmmoDispatcherFlags;

            (function (AmmoDispatcherFlags) {
              AmmoDispatcherFlags[AmmoDispatcherFlags["CD_STATIC_STATIC_REPORTED"] = 1] = "CD_STATIC_STATIC_REPORTED";
              AmmoDispatcherFlags[AmmoDispatcherFlags["CD_USE_RELATIVE_CONTACT_BREAKING_THRESHOLD"] = 2] = "CD_USE_RELATIVE_CONTACT_BREAKING_THRESHOLD";
              AmmoDispatcherFlags[AmmoDispatcherFlags["CD_DISABLE_CONTACTPOOL_DYNAMIC_ALLOCATION"] = 4] = "CD_DISABLE_CONTACTPOOL_DYNAMIC_ALLOCATION";
            })(AmmoDispatcherFlags || (AmmoDispatcherFlags = {}));
            Ammo$1.AmmoDispatcherFlags = AmmoDispatcherFlags;

            var TriggerEventObject = {
              type: 'onTriggerEnter',
              selfCollider: null,
              otherCollider: null,
              impl: null
            };
            var CollisionEventObject = {
              type: 'onCollisionEnter',
              selfCollider: null,
              otherCollider: null,
              contacts: [],
              impl: null
            };
            var AmmoConstant = /*#__PURE__*/function () {
              function AmmoConstant() {
                _classCallCheck(this, AmmoConstant);

                this.EMPTY_SHAPE = new Ammo$1.btEmptyShape();
                this.TRANSFORM = new Ammo$1.btTransform();
                this.VECTOR3_0 = new Ammo$1.btVector3();
                this.VECTOR3_1 = new Ammo$1.btVector3();
                this.QUAT_0 = new Ammo$1.btQuaternion();
              }

              _createClass(AmmoConstant, null, [{
                key: "instance",
                get: function get() {
                  if (AmmoConstant._instance == null) AmmoConstant._instance = new AmmoConstant();
                  return AmmoConstant._instance;
                }
              }]);

              return AmmoConstant;
            }();
            AmmoConstant._instance = void 0;
            var CC_V3_0 = new Vec3();
            var CC_V3_1 = new Vec3();
            var CC_QUAT_0 = new Quat();

            var v3_0 = CC_V3_0;
            var v3_1 = CC_V3_1;
            var AmmoRigidBody = /*#__PURE__*/function () {
              _createClass(AmmoRigidBody, [{
                key: "setMass",
                value: function setMass(value) {
                  // See https://studiofreya.com/game-maker/bullet-physics/bullet-physics-how-to-change-body-mass/
                  var localInertia = AmmoConstant.instance.VECTOR3_0; // const localInertia = this._sharedBody.bodyStruct.localInertia;

                  localInertia.setValue(1.6666666269302368, 1.6666666269302368, 1.6666666269302368);
                  var shape = this.impl.getCollisionShape();

                  if (shape.isCompound()) {
                    if (this._sharedBody.bodyCompoundShape.getNumChildShapes() > 0) {
                      shape.calculateLocalInertia(this._rigidBody.mass, localInertia);
                    }
                  } else {
                    shape.calculateLocalInertia(this._rigidBody.mass, localInertia);
                  }

                  this.impl.setMassProps(value, localInertia);

                  this._wakeUpIfSleep();

                  this._sharedBody.dirty |= EAmmoSharedBodyDirty.BODY_RE_ADD;
                }
              }, {
                key: "setLinearDamping",
                value: function setLinearDamping(value) {
                  this.impl.setDamping(this._rigidBody.linearDamping, this._rigidBody.angularDamping);
                }
              }, {
                key: "setAngularDamping",
                value: function setAngularDamping(value) {
                  this.impl.setDamping(this._rigidBody.linearDamping, this._rigidBody.angularDamping);
                }
              }, {
                key: "setIsKinematic",
                value: function setIsKinematic(value) {
                  var m_collisionFlags = this.impl.getCollisionFlags();

                  if (value) {
                    m_collisionFlags |= AmmoCollisionFlags.CF_KINEMATIC_OBJECT;
                  } else {
                    m_collisionFlags &= ~AmmoCollisionFlags.CF_KINEMATIC_OBJECT;
                  }

                  this.impl.setCollisionFlags(m_collisionFlags);
                }
              }, {
                key: "useGravity",
                value: function useGravity(value) {
                  var m_rigidBodyFlag = this.impl.getFlags();

                  if (value) {
                    m_rigidBodyFlag &= ~AmmoRigidBodyFlags.BT_DISABLE_WORLD_GRAVITY;
                  } else {
                    this.impl.setGravity(cocos2AmmoVec3(AmmoConstant.instance.VECTOR3_0, Vec3.ZERO));
                    m_rigidBodyFlag |= AmmoRigidBodyFlags.BT_DISABLE_WORLD_GRAVITY;
                  }

                  this.impl.setFlags(m_rigidBodyFlag);

                  this._wakeUpIfSleep();

                  this._sharedBody.dirty |= EAmmoSharedBodyDirty.BODY_RE_ADD;
                }
              }, {
                key: "fixRotation",
                value: function fixRotation(value) {
                  if (value) {
                    /** TODO : should i reset angular velocity & torque ? */
                    this.impl.setAngularFactor(cocos2AmmoVec3(AmmoConstant.instance.VECTOR3_0, Vec3.ZERO));
                  } else {
                    this.impl.setAngularFactor(cocos2AmmoVec3(AmmoConstant.instance.VECTOR3_0, this._rigidBody.angularFactor));
                  }

                  this._wakeUpIfSleep();
                }
              }, {
                key: "setLinearFactor",
                value: function setLinearFactor(value) {
                  this.impl.setLinearFactor(cocos2AmmoVec3(AmmoConstant.instance.VECTOR3_0, value));

                  this._wakeUpIfSleep();
                }
              }, {
                key: "setAngularFactor",
                value: function setAngularFactor(value) {
                  if (!this._rigidBody.fixedRotation) {
                    this.impl.setAngularFactor(cocos2AmmoVec3(AmmoConstant.instance.VECTOR3_0, value));
                  }

                  this._wakeUpIfSleep();
                }
              }, {
                key: "setAllowSleep",
                value: function setAllowSleep(v) {
                  if (v) {
                    this.impl.forceActivationState(AmmoCollisionObjectStates.ACTIVE_TAG);
                  } else {
                    this.impl.forceActivationState(AmmoCollisionObjectStates.DISABLE_DEACTIVATION);
                  }

                  this._wakeUpIfSleep();
                }
              }, {
                key: "isAwake",
                get: function get() {
                  var state = this.impl.getActivationState();
                  return state == AmmoCollisionObjectStates.ACTIVE_TAG || state == AmmoCollisionObjectStates.DISABLE_DEACTIVATION;
                }
              }, {
                key: "isSleepy",
                get: function get() {
                  var state = this.impl.getActivationState();
                  return state == AmmoCollisionObjectStates.WANTS_DEACTIVATION;
                }
              }, {
                key: "isSleeping",
                get: function get() {
                  var state = this.impl.getActivationState();
                  return state == AmmoCollisionObjectStates.ISLAND_SLEEPING;
                }
              }, {
                key: "isEnabled",
                get: function get() {
                  return this._isEnabled;
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._sharedBody.body;
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

              function AmmoRigidBody() {
                _classCallCheck(this, AmmoRigidBody);

                this.id = void 0;
                this._isEnabled = false;
                this.id = AmmoRigidBody.idCounter++;
              }

              _createClass(AmmoRigidBody, [{
                key: "clearState",
                value: function clearState() {
                  this.impl.clearState();
                }
              }, {
                key: "clearVelocity",
                value: function clearVelocity() {
                  this.setLinearVelocity(Vec3.ZERO);
                  this.setAngularVelocity(Vec3.ZERO);
                }
              }, {
                key: "clearForces",
                value: function clearForces() {
                  this.impl.clearForces();
                }
                /** LIFECYCLE */

              }, {
                key: "initialize",
                value: function initialize(com) {
                  this._rigidBody = com;
                  this._sharedBody = PhysicsSystem.instance.physicsWorld.getSharedBody(this._rigidBody.node, this);
                  this._sharedBody.reference = true;
                }
              }, {
                key: "onEnable",
                value: function onEnable() {
                  this._isEnabled = true;
                  this.setGroup(this._rigidBody.group);

                  if (PhysicsSystem.instance.useCollisionMatrix) {
                    this.setMask(PhysicsSystem.instance.collisionMatrix[this._rigidBody.group]);
                  }

                  this.setMass(this._rigidBody.mass);
                  this.setAllowSleep(this._rigidBody.allowSleep);
                  this.setLinearDamping(this._rigidBody.linearDamping);
                  this.setAngularDamping(this._rigidBody.angularDamping);
                  this.setIsKinematic(this._rigidBody.isKinematic);
                  this.fixRotation(this._rigidBody.fixedRotation);
                  this.setLinearFactor(this._rigidBody.linearFactor);
                  this.setAngularFactor(this._rigidBody.angularFactor);
                  this.useGravity(this._rigidBody.useGravity);
                  this._sharedBody.bodyEnabled = true;
                }
              }, {
                key: "onDisable",
                value: function onDisable() {
                  this._isEnabled = false;
                  this._sharedBody.bodyEnabled = false;
                }
              }, {
                key: "onDestroy",
                value: function onDestroy() {
                  this._sharedBody.reference = false;
                  this._rigidBody = null;
                  this._sharedBody = null;
                }
                /** INTERFACE */

              }, {
                key: "wakeUp",
                value: function wakeUp() {
                  var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                  this.impl.activate(force);
                }
              }, {
                key: "sleep",
                value: function sleep() {
                  return this.impl.wantsSleeping();
                }
              }, {
                key: "setSleepThreshold",
                value: function setSleepThreshold(v) {
                  this._wakeUpIfSleep();

                  this.impl.setSleepingThresholds(v, v);
                }
              }, {
                key: "getSleepThreshold",
                value: function getSleepThreshold() {
                  return this.impl['getLinearSleepingThreshold']();
                }
                /** type */

              }, {
                key: "getType",
                value: function getType() {
                  if (this.impl.isStaticOrKinematicObject()) {
                    if (this.impl.isKinematicObject()) {
                      return ERigidBodyType.KINEMATIC;
                    } else {
                      return ERigidBodyType.STATIC;
                    }
                  } else {
                    return ERigidBodyType.DYNAMIC;
                  }
                }
                /** kinematic */

              }, {
                key: "getLinearVelocity",
                value: function getLinearVelocity(out) {
                  return ammo2CocosVec3(out, this.impl.getLinearVelocity());
                }
              }, {
                key: "setLinearVelocity",
                value: function setLinearVelocity(value) {
                  this._wakeUpIfSleep();

                  cocos2AmmoVec3(this.impl.getLinearVelocity(), value);
                }
              }, {
                key: "getAngularVelocity",
                value: function getAngularVelocity(out) {
                  return ammo2CocosVec3(out, this.impl.getAngularVelocity());
                }
              }, {
                key: "setAngularVelocity",
                value: function setAngularVelocity(value) {
                  this._wakeUpIfSleep();

                  cocos2AmmoVec3(this.impl.getAngularVelocity(), value);
                }
                /** dynamic */

              }, {
                key: "applyLocalForce",
                value: function applyLocalForce(force, rel_pos) {
                  this._sharedBody.syncSceneToPhysics();

                  this._wakeUpIfSleep();

                  var quat = this._sharedBody.node.worldRotation;
                  var v = Vec3.transformQuat(v3_0, force, quat);
                  var rp = rel_pos ? Vec3.transformQuat(v3_1, rel_pos, quat) : Vec3.ZERO;
                  this.impl.applyForce(cocos2AmmoVec3(AmmoConstant.instance.VECTOR3_0, v), cocos2AmmoVec3(AmmoConstant.instance.VECTOR3_1, rp));
                }
              }, {
                key: "applyLocalTorque",
                value: function applyLocalTorque(torque) {
                  this._sharedBody.syncSceneToPhysics();

                  this._wakeUpIfSleep();

                  Vec3.transformQuat(v3_0, torque, this._sharedBody.node.worldRotation);
                  this.impl.applyTorque(cocos2AmmoVec3(AmmoConstant.instance.VECTOR3_0, v3_0));
                }
              }, {
                key: "applyLocalImpulse",
                value: function applyLocalImpulse(impulse, rel_pos) {
                  this._sharedBody.syncSceneToPhysics();

                  this._wakeUpIfSleep();

                  var quat = this._sharedBody.node.worldRotation;
                  var v = Vec3.transformQuat(v3_0, impulse, quat);
                  var rp = rel_pos ? Vec3.transformQuat(v3_1, rel_pos, quat) : Vec3.ZERO;
                  this.impl.applyImpulse(cocos2AmmoVec3(AmmoConstant.instance.VECTOR3_0, v), cocos2AmmoVec3(AmmoConstant.instance.VECTOR3_1, rp));
                }
              }, {
                key: "applyForce",
                value: function applyForce(force, rel_pos) {
                  this._sharedBody.syncSceneToPhysics();

                  this._wakeUpIfSleep();

                  var rp = rel_pos ? rel_pos : Vec3.ZERO;
                  this.impl.applyForce(cocos2AmmoVec3(AmmoConstant.instance.VECTOR3_0, force), cocos2AmmoVec3(AmmoConstant.instance.VECTOR3_1, rp));
                }
              }, {
                key: "applyTorque",
                value: function applyTorque(torque) {
                  this._sharedBody.syncSceneToPhysics();

                  this._wakeUpIfSleep();

                  this.impl.applyTorque(cocos2AmmoVec3(AmmoConstant.instance.VECTOR3_0, torque));
                }
              }, {
                key: "applyImpulse",
                value: function applyImpulse(impulse, rel_pos) {
                  this._sharedBody.syncSceneToPhysics();

                  this._wakeUpIfSleep();

                  var rp = rel_pos ? rel_pos : Vec3.ZERO;
                  this.impl.applyImpulse(cocos2AmmoVec3(AmmoConstant.instance.VECTOR3_0, impulse), cocos2AmmoVec3(AmmoConstant.instance.VECTOR3_1, rp));
                }
                /** group mask */

              }, {
                key: "getGroup",
                value: function getGroup() {
                  return this._sharedBody.collisionFilterGroup;
                }
              }, {
                key: "setGroup",
                value: function setGroup(v) {
                  this._sharedBody.collisionFilterGroup = v;
                }
              }, {
                key: "addGroup",
                value: function addGroup(v) {
                  this._sharedBody.collisionFilterGroup |= v;
                }
              }, {
                key: "removeGroup",
                value: function removeGroup(v) {
                  this._sharedBody.collisionFilterGroup &= ~v;
                }
              }, {
                key: "getMask",
                value: function getMask() {
                  return this._sharedBody.collisionFilterMask;
                }
              }, {
                key: "setMask",
                value: function setMask(v) {
                  this._sharedBody.collisionFilterMask = v;
                }
              }, {
                key: "addMask",
                value: function addMask(v) {
                  this._sharedBody.collisionFilterMask |= v;
                }
              }, {
                key: "removeMask",
                value: function removeMask(v) {
                  this._sharedBody.collisionFilterMask &= ~v;
                }
              }, {
                key: "_wakeUpIfSleep",
                value: function _wakeUpIfSleep() {
                  if (!this.isAwake) this.impl.activate(true);
                }
              }]);

              return AmmoRigidBody;
            }();
            AmmoRigidBody.idCounter = 0;

            var AmmoInstance = /*#__PURE__*/function () {
              function AmmoInstance() {
                _classCallCheck(this, AmmoInstance);
              }

              _createClass(AmmoInstance, null, [{
                key: "bodyStructs",
                get: function get() {
                  return this.bodyAndGhosts;
                }
              }, {
                key: "ghostStructs",
                get: function get() {
                  return this.bodyAndGhosts;
                }
              }]);

              return AmmoInstance;
            }();
            AmmoInstance.bodyAndGhosts = {};

            var v3_0$1 = CC_V3_0;
            var quat_0 = CC_QUAT_0;
            var sharedIDCounter = 0;
            /**
             * shared object, node : shared = 1 : 1
             * body for static \ dynamic \ kinematic (collider)
             * ghost for trigger
             */

            var AmmoSharedBody = /*#__PURE__*/function () {
              _createClass(AmmoSharedBody, [{
                key: "wrappedBody",
                get: function get() {
                  return this._wrappedBody;
                }
              }, {
                key: "bodyCompoundShape",
                get: function get() {
                  return this.bodyStruct.shape;
                }
              }, {
                key: "ghostCompoundShape",
                get: function get() {
                  return this.ghostStruct.shape;
                }
              }, {
                key: "body",
                get: function get() {
                  return this.bodyStruct.body;
                }
              }, {
                key: "ghost",
                get: function get() {
                  return this.ghostStruct.ghost;
                }
              }, {
                key: "collisionFilterGroup",
                get: function get() {
                  return this._collisionFilterGroup;
                },
                set: function set(v) {
                  if (v != this._collisionFilterGroup) {
                    this._collisionFilterGroup = v;
                    this.dirty |= EAmmoSharedBodyDirty.BODY_RE_ADD;
                    this.dirty |= EAmmoSharedBodyDirty.GHOST_RE_ADD;
                  }
                }
              }, {
                key: "collisionFilterMask",
                get: function get() {
                  return this._collisionFilterMask;
                },
                set: function set(v) {
                  if (v != this._collisionFilterMask) {
                    this._collisionFilterMask = v;
                    this.dirty |= EAmmoSharedBodyDirty.BODY_RE_ADD;
                    this.dirty |= EAmmoSharedBodyDirty.GHOST_RE_ADD;
                  }
                }
              }, {
                key: "bodyStruct",
                get: function get() {
                  this._instantiateBodyStruct();

                  return this._bodyStruct;
                }
              }, {
                key: "ghostStruct",
                get: function get() {
                  this._instantiateGhostStruct();

                  return this._ghostStruct;
                }
              }, {
                key: "bodyEnabled",

                /**
                 * add or remove from world \
                 * add, if enable \
                 * remove, if disable & shapes.length == 0 & wrappedBody disable
                 */
                set: function set(v) {
                  if (v) {
                    if (this.bodyIndex < 0) {
                      this.bodyIndex = this.wrappedWorld.bodies.length;
                      this.body.clearState();
                      this.wrappedWorld.addSharedBody(this);
                      this.syncInitialBody();
                    }
                  } else {
                    if (this.bodyIndex >= 0) {
                      var isRemoveBody = this.bodyStruct.wrappedShapes.length == 0 && this.wrappedBody == null || this.bodyStruct.wrappedShapes.length == 0 && this.wrappedBody != null && !this.wrappedBody.isEnabled || this.bodyStruct.wrappedShapes.length == 0 && this.wrappedBody != null && !this.wrappedBody.rigidBody.enabledInHierarchy;

                      if (isRemoveBody) {
                        this.body.clearState(); // clear velocity etc.

                        this.bodyIndex = -1;
                        this.wrappedWorld.removeSharedBody(this);
                      }
                    }
                  }
                }
              }, {
                key: "ghostEnabled",
                set: function set(v) {
                  if (v) {
                    if (this.ghostIndex < 0 && this.ghostStruct.wrappedShapes.length > 0) {
                      this.ghostIndex = 1;
                      this.wrappedWorld.addGhostObject(this);
                      this.syncInitialGhost();
                    }
                  } else {
                    if (this.ghostIndex >= 0) {
                      /** remove trigger */
                      var isRemoveGhost = this.ghostStruct.wrappedShapes.length == 0 && this.ghost;

                      if (isRemoveGhost) {
                        this.ghostIndex = -1;
                        this.wrappedWorld.removeGhostObject(this);
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
              }], [{
                key: "getSharedBody",
                value: function getSharedBody(node, wrappedWorld, wrappedBody) {
                  var key = node.uuid;
                  var newSB;

                  if (AmmoSharedBody.sharedBodesMap.has(key)) {
                    newSB = AmmoSharedBody.sharedBodesMap.get(key);
                  } else {
                    newSB = new AmmoSharedBody(node, wrappedWorld);
                    AmmoSharedBody.sharedBodesMap.set(node.uuid, newSB);
                  }

                  if (wrappedBody) {
                    newSB._wrappedBody = wrappedBody;
                  }

                  return newSB;
                }
              }]);

              function AmmoSharedBody(node, wrappedWorld) {
                _classCallCheck(this, AmmoSharedBody);

                this.id = void 0;
                this.node = void 0;
                this.wrappedWorld = void 0;
                this.dirty = 0;
                this._collisionFilterGroup = PhysicsSystem.PhysicsGroup.DEFAULT;
                this._collisionFilterMask = -1;
                this.ref = 0;
                this.bodyIndex = -1;
                this.ghostIndex = -1;
                this._wrappedBody = null;
                this.id = AmmoSharedBody.idCounter++;
                this.wrappedWorld = wrappedWorld;
                this.node = node;
              }

              _createClass(AmmoSharedBody, [{
                key: "_instantiateBodyStruct",
                value: function _instantiateBodyStruct() {
                  if (this._bodyStruct) return;
                  /** body struct */

                  var st = new Ammo$1.btTransform();
                  st.setIdentity();
                  cocos2AmmoVec3(st.getOrigin(), this.node.worldPosition);
                  var bodyQuat = new Ammo$1.btQuaternion();
                  cocos2AmmoQuat(bodyQuat, this.node.worldRotation);
                  st.setRotation(bodyQuat);
                  var motionState = new Ammo$1.btDefaultMotionState(st);
                  var localInertia = new Ammo$1.btVector3(1.6666666269302368, 1.6666666269302368, 1.6666666269302368);
                  var bodyShape = new Ammo$1.btCompoundShape();
                  var rbInfo = new Ammo$1.btRigidBodyConstructionInfo(0, motionState, AmmoConstant.instance.EMPTY_SHAPE, localInertia);
                  var body = new Ammo$1.btRigidBody(rbInfo);
                  var sleepTd = PhysicsSystem.instance.sleepThreshold;
                  body.setSleepingThresholds(sleepTd, sleepTd);
                  this._bodyStruct = {
                    'id': sharedIDCounter++,
                    'body': body,
                    'localInertia': localInertia,
                    'motionState': motionState,
                    'startTransform': st,
                    'shape': bodyShape,
                    'rbInfo': rbInfo,
                    'worldQuat': bodyQuat,
                    'wrappedShapes': [],
                    'useCompound': false
                  };
                  AmmoInstance.bodyStructs['KEY' + this._bodyStruct.id] = this._bodyStruct;
                  this.body.setUserIndex(this._bodyStruct.id);
                  this.body.setActivationState(AmmoCollisionObjectStates.DISABLE_DEACTIVATION);
                  if (Ammo$1['CC_CONFIG']['ignoreSelfBody'] && this._ghostStruct) this.ghost.setIgnoreCollisionCheck(this.body, true);
                }
              }, {
                key: "_instantiateGhostStruct",
                value: function _instantiateGhostStruct() {
                  if (this._ghostStruct) return;
                  /** ghost struct */

                  var ghost = new Ammo$1.btCollisionObject();
                  var ghostShape = new Ammo$1.btCompoundShape();
                  ghost.setCollisionShape(ghostShape);
                  ghost.setCollisionFlags(AmmoCollisionFlags.CF_NO_CONTACT_RESPONSE);
                  this._ghostStruct = {
                    'id': sharedIDCounter++,
                    'ghost': ghost,
                    'shape': ghostShape,
                    'worldQuat': new Ammo$1.btQuaternion(),
                    'wrappedShapes': []
                  };
                  AmmoInstance.ghostStructs['KEY' + this._ghostStruct.id] = this._ghostStruct;
                  this.ghost.setUserIndex(this._ghostStruct.id);
                  this.ghost.setActivationState(AmmoCollisionObjectStates.DISABLE_DEACTIVATION);
                  if (Ammo$1['CC_CONFIG']['ignoreSelfBody'] && this._bodyStruct) this.ghost.setIgnoreCollisionCheck(this.body, true);
                }
              }, {
                key: "addShape",
                value: function addShape(v, isTrigger) {
                  function switchShape(that, shape) {
                    that.body.setCollisionShape(shape);
                    that.dirty |= EAmmoSharedBodyDirty.BODY_RE_ADD;

                    if (that._wrappedBody && that._wrappedBody.isEnabled) {
                      that._wrappedBody.setMass(that._wrappedBody.rigidBody.mass);
                    }
                  }

                  if (isTrigger) {
                    var index = this.ghostStruct.wrappedShapes.indexOf(v);

                    if (index < 0) {
                      this.ghostStruct.wrappedShapes.push(v);
                      v.setCompound(this.ghostCompoundShape);
                      this.ghostEnabled = true;
                    }
                  } else {
                    var _index = this.bodyStruct.wrappedShapes.indexOf(v);

                    if (_index < 0) {
                      this.bodyStruct.wrappedShapes.push(v);

                      if (this.bodyStruct.useCompound) {
                        v.setCompound(this.bodyCompoundShape);
                      } else {
                        var l = this.bodyStruct.wrappedShapes.length;

                        if (l == 1 && !v.needCompound()) {
                          switchShape(this, v.impl);
                        } else {
                          this.bodyStruct.useCompound = true;

                          for (var i = 0; i < l; i++) {
                            var childShape = this.bodyStruct.wrappedShapes[i];
                            childShape.setCompound(this.bodyCompoundShape);
                          }

                          switchShape(this, this.bodyStruct.shape);
                        }
                      }

                      this.bodyEnabled = true;
                    }
                  }
                }
              }, {
                key: "removeShape",
                value: function removeShape(v, isTrigger) {
                  if (isTrigger) {
                    var index = this.ghostStruct.wrappedShapes.indexOf(v);

                    if (index >= 0) {
                      this.ghostStruct.wrappedShapes.splice(index, 1);
                      v.setCompound(null);
                      this.ghostEnabled = false;
                    }
                  } else {
                    var _index2 = this.bodyStruct.wrappedShapes.indexOf(v);

                    if (_index2 >= 0) {
                      if (this.bodyStruct.useCompound) {
                        v.setCompound(null);
                      } else {
                        this.body.setCollisionShape(AmmoConstant.instance.EMPTY_SHAPE);
                      }

                      this.body.activate(true);
                      this.dirty |= EAmmoSharedBodyDirty.BODY_RE_ADD;
                      this.bodyStruct.wrappedShapes.splice(_index2, 1);
                      this.bodyEnabled = false;
                    }
                  }
                }
              }, {
                key: "updateDirty",
                value: function updateDirty() {
                  if (this.dirty) {
                    if (this.bodyIndex >= 0 && this.dirty & EAmmoSharedBodyDirty.BODY_RE_ADD) this.updateBodyByReAdd();
                    if (this.ghostIndex >= 0 && this.dirty & EAmmoSharedBodyDirty.GHOST_RE_ADD) this.updateGhostByReAdd();
                    this.dirty = 0;
                  }
                }
              }, {
                key: "syncSceneToPhysics",
                value: function syncSceneToPhysics() {
                  if (this.node.hasChangedFlags) {
                    var wt = this.body.getWorldTransform();
                    cocos2AmmoVec3(wt.getOrigin(), this.node.worldPosition);
                    cocos2AmmoQuat(this.bodyStruct.worldQuat, this.node.worldRotation);
                    wt.setRotation(this.bodyStruct.worldQuat);
                    if (this.isBodySleeping()) this.body.activate();

                    if (this.node.hasChangedFlags & TransformBit.SCALE) {
                      for (var i = 0; i < this.bodyStruct.wrappedShapes.length; i++) {
                        this.bodyStruct.wrappedShapes[i].setScale();
                      }
                    }
                  }
                }
                /**
                 * TODO: use motion state
                 */

              }, {
                key: "syncPhysicsToScene",
                value: function syncPhysicsToScene() {
                  if (this.body.isStaticObject() || this.isBodySleeping()) {
                    return;
                  } // let transform = new Ammo.btTransform();
                  // this.body.getMotionState().getWorldTransform(transform);


                  var wt0 = this.body.getWorldTransform();
                  this.node.worldPosition = ammo2CocosVec3(v3_0$1, wt0.getOrigin());
                  wt0.getBasis().getRotation(this.bodyStruct.worldQuat);
                  this.node.worldRotation = ammo2CocosQuat(quat_0, this.bodyStruct.worldQuat);
                  var wt1 = this.ghost.getWorldTransform();
                  cocos2AmmoVec3(wt1.getOrigin(), this.node.worldPosition);
                  cocos2AmmoQuat(this.ghostStruct.worldQuat, this.node.worldRotation);
                  wt1.setRotation(this.ghostStruct.worldQuat);
                }
              }, {
                key: "syncSceneToGhost",
                value: function syncSceneToGhost() {
                  if (this.node.hasChangedFlags) {
                    var wt1 = this.ghost.getWorldTransform();
                    cocos2AmmoVec3(wt1.getOrigin(), this.node.worldPosition);
                    cocos2AmmoQuat(this.ghostStruct.worldQuat, this.node.worldRotation);
                    wt1.setRotation(this.ghostStruct.worldQuat);
                    this.ghost.activate();

                    if (this.node.hasChangedFlags & TransformBit.SCALE) {
                      for (var i = 0; i < this.ghostStruct.wrappedShapes.length; i++) {
                        this.ghostStruct.wrappedShapes[i].setScale();
                      }
                    }
                  }
                }
              }, {
                key: "syncInitialBody",
                value: function syncInitialBody() {
                  var wt = this.body.getWorldTransform();
                  cocos2AmmoVec3(wt.getOrigin(), this.node.worldPosition);
                  cocos2AmmoQuat(this.bodyStruct.worldQuat, this.node.worldRotation);
                  wt.setRotation(this.bodyStruct.worldQuat);

                  for (var i = 0; i < this.bodyStruct.wrappedShapes.length; i++) {
                    this.bodyStruct.wrappedShapes[i].setScale();
                  }

                  this.body.activate();
                }
              }, {
                key: "syncInitialGhost",
                value: function syncInitialGhost() {
                  var wt1 = this.ghost.getWorldTransform();
                  cocos2AmmoVec3(wt1.getOrigin(), this.node.worldPosition);
                  cocos2AmmoQuat(this.ghostStruct.worldQuat, this.node.worldRotation);
                  wt1.setRotation(this.ghostStruct.worldQuat);

                  for (var i = 0; i < this.ghostStruct.wrappedShapes.length; i++) {
                    this.ghostStruct.wrappedShapes[i].setScale();
                  }

                  this.ghost.activate();
                }
                /**
                 * see: https://pybullet.org/Bullet/phpBB3/viewtopic.php?f=9&t=5312&p=19094&hilit=how+to+change+group+mask#p19097
                 */

              }, {
                key: "updateBodyByReAdd",
                value: function updateBodyByReAdd() {
                  if (this.bodyIndex >= 0) {
                    this.wrappedWorld.removeSharedBody(this);
                    this.bodyIndex = this.wrappedWorld.bodies.length;
                    this.wrappedWorld.addSharedBody(this);
                  }
                }
              }, {
                key: "updateGhostByReAdd",
                value: function updateGhostByReAdd() {
                  if (this.ghostIndex >= 0) {
                    this.wrappedWorld.removeGhostObject(this);
                    this.ghostIndex = this.wrappedWorld.ghosts.length;
                    this.wrappedWorld.addGhostObject(this);
                  }
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  AmmoSharedBody.sharedBodesMap["delete"](this.node.uuid);
                  this.node = null;
                  this.wrappedWorld = null;

                  if (this._bodyStruct) {
                    var bodyStruct = this._bodyStruct;
                    Ammo$1.destroy(bodyStruct.localInertia);
                    Ammo$1.destroy(bodyStruct.worldQuat);
                    Ammo$1.destroy(bodyStruct.startTransform);
                    Ammo$1.destroy(bodyStruct.motionState);
                    Ammo$1.destroy(bodyStruct.rbInfo);
                    Ammo$1.destroy(bodyStruct.shape);
                    ammoDeletePtr(bodyStruct.shape, Ammo$1.btCollisionShape);
                    var body = Ammo$1.castObject(bodyStruct.body, Ammo$1.btRigidBody);
                    body['wrapped'] = null; // Ammo.destroy(bodyStruct.body);

                    ammoDeletePtr(bodyStruct.body, Ammo$1.btRigidBody);
                    ammoDeletePtr(bodyStruct.body, Ammo$1.btCollisionObject);
                    var key0 = 'KEY' + bodyStruct.id;
                    delete AmmoInstance.bodyStructs[key0];
                    this._bodyStruct = null;
                  }

                  if (this._ghostStruct) {
                    var ghostStruct = this._ghostStruct;
                    Ammo$1.destroy(ghostStruct.worldQuat);
                    Ammo$1.destroy(ghostStruct.shape);
                    ammoDeletePtr(ghostStruct.shape, Ammo$1.btCollisionShape);
                    Ammo$1.destroy(ghostStruct.ghost);
                    var key1 = 'KEY' + ghostStruct.id;
                    delete AmmoInstance.bodyStructs[key1];
                    this._ghostStruct = null;
                  }
                }
              }, {
                key: "isBodySleeping",
                value: function isBodySleeping() {
                  var state = this.body.getActivationState();
                  return state == AmmoCollisionObjectStates.ISLAND_SLEEPING;
                }
              }]);

              return AmmoSharedBody;
            }();
            AmmoSharedBody.idCounter = 0;
            AmmoSharedBody.sharedBodesMap = new Map();

            /**
             * @class TupleDictionary
             * @constructor
             */
            var TupleDictionary = /*#__PURE__*/function () {
              /**
               * The data storage
               */
              function TupleDictionary() {
                _classCallCheck(this, TupleDictionary);

                this.data = void 0;
                this.data = {
                  keys: []
                };
              }
              /**
               * @method get
               * @param  {number} i
               * @param  {number} j
               * @return {Object}
               */


              _createClass(TupleDictionary, [{
                key: "get",
                value: function get(i, j) {
                  if (i > j) {
                    // swap
                    var temp = j;
                    j = i;
                    i = temp;
                  }

                  return this.data[i + '-' + j];
                }
              }, {
                key: "set",

                /**
                 * @method set
                 * @param  {number} i
                 * @param  {number} j
                 * @param {Object} value
                 */
                value: function set(i, j, value) {
                  if (i > j) {
                    var temp = j;
                    j = i;
                    i = temp;
                  }

                  var key = i + '-' + j;

                  if (value == null) {
                    var idx = this.data.keys.indexOf(key);

                    if (idx != -1) {
                      this.data.keys.splice(idx, 1);
                      delete this.data[key];
                      return value;
                    }
                  } // Check if key already exists


                  if (!this.get(i, j)) {
                    this.data.keys.push(key);
                  }

                  this.data[key] = value;
                  return this.data[key];
                }
              }, {
                key: "reset",

                /**
                 * @method reset
                 */
                value: function reset() {
                  var data = this.data,
                      keys = data.keys;

                  while (keys.length > 0) {
                    var key = keys.pop();
                    delete data[key];
                  }
                }
              }, {
                key: "getLength",

                /**
                 * @method getLength
                 */
                value: function getLength() {
                  return this.data.keys.length;
                }
              }, {
                key: "getKeyByIndex",

                /**
                 * @method getKeyByIndex
                 * @param {number} index
                 */
                value: function getKeyByIndex(index) {
                  return this.data.keys[index];
                }
              }, {
                key: "getDataByKey",

                /**
                 * @method getDataByKey
                 * @param {string} Key
                 */
                value: function getDataByKey(Key) {
                  return this.data[Key];
                }
              }]);

              return TupleDictionary;
            }();

            var AmmoContactEquation = /*#__PURE__*/function () {
              _createClass(AmmoContactEquation, [{
                key: "isBodyA",
                get: function get() {
                  var sb = this.event.selfCollider.shape.sharedBody.body;
                  var b0 = this.event.impl.getBody0();
                  return Ammo.compare(b0, sb);
                }
              }]);

              function AmmoContactEquation(event) {
                _classCallCheck(this, AmmoContactEquation);

                this.impl = null;
                this.event = void 0;
                this.event = event;
              }

              _createClass(AmmoContactEquation, [{
                key: "getLocalPointOnA",
                value: function getLocalPointOnA(out) {
                  if (this.impl) ammo2CocosVec3(out, this.impl.m_localPointA);
                }
              }, {
                key: "getLocalPointOnB",
                value: function getLocalPointOnB(out) {
                  if (this.impl) ammo2CocosVec3(out, this.impl.m_localPointB);
                }
              }, {
                key: "getWorldPointOnA",
                value: function getWorldPointOnA(out) {
                  if (this.impl) ammo2CocosVec3(out, this.impl.m_positionWorldOnA);
                }
              }, {
                key: "getWorldPointOnB",
                value: function getWorldPointOnB(out) {
                  if (this.impl) ammo2CocosVec3(out, this.impl.m_positionWorldOnB);
                }
              }, {
                key: "getLocalNormalOnB",
                value: function getLocalNormalOnB(out) {
                  if (this.impl) {
                    var inv_rot = CC_QUAT_0;
                    var bt_rot = AmmoConstant.instance.QUAT_0;
                    var body = this.event.impl.getBody1();
                    body.getWorldTransform().getBasis().getRotation(bt_rot);
                    ammo2CocosQuat(inv_rot, bt_rot);
                    Quat.invert(inv_rot, inv_rot);
                    ammo2CocosVec3(out, this.impl.m_normalWorldOnB);
                    Vec3.transformQuat(out, out, inv_rot);
                  }
                }
              }, {
                key: "getWorldNormalOnB",
                value: function getWorldNormalOnB(out) {
                  if (this.impl) ammo2CocosVec3(out, this.impl.m_normalWorldOnB);
                }
              }]);

              return AmmoContactEquation;
            }();

            var contactsPool = [];
            var v3_0$2 = CC_V3_0;
            var v3_1$1 = CC_V3_1;
            var AmmoWorld = /*#__PURE__*/function () {
              _createClass(AmmoWorld, [{
                key: "setAllowSleep",
                value: function setAllowSleep(v) {}
              }, {
                key: "setDefaultMaterial",
                value: function setDefaultMaterial(v) {}
              }, {
                key: "setGravity",
                value: function setGravity(gravity) {
                  cocos2AmmoVec3(this._btGravity, gravity);

                  this._btWorld.setGravity(this._btGravity);
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._btWorld;
                }
              }]);

              function AmmoWorld(options) {
                _classCallCheck(this, AmmoWorld);

                this._btWorld = void 0;
                this._btBroadphase = void 0;
                this._btSolver = void 0;
                this._btDispatcher = void 0;
                this._btGravity = void 0;
                this.bodies = [];
                this.ghosts = [];
                this.constraints = [];
                this.triggerArrayMat = new ArrayCollisionMatrix();
                this.collisionArrayMat = new ArrayCollisionMatrix();
                this.contactsDic = new TupleDictionary();
                this.oldContactsDic = new TupleDictionary();
                this.closeHitCB = new Ammo$1.ClosestRayResultCallback(new Ammo$1.btVector3(), new Ammo$1.btVector3());
                this.allHitsCB = new Ammo$1.AllHitsRayResultCallback(new Ammo$1.btVector3(), new Ammo$1.btVector3());
                var collisionConfiguration = new Ammo$1.btDefaultCollisionConfiguration();
                this._btDispatcher = new Ammo$1.btCollisionDispatcher(collisionConfiguration);

                this._btDispatcher.setDispatcherFlags(AmmoDispatcherFlags.CD_STATIC_STATIC_REPORTED);

                this._btBroadphase = new Ammo$1.btDbvtBroadphase();
                this._btSolver = new Ammo$1.btSequentialImpulseConstraintSolver();
                this._btWorld = new Ammo$1.btDiscreteDynamicsWorld(this._btDispatcher, this._btBroadphase, this._btSolver, collisionConfiguration);
                this._btGravity = new Ammo$1.btVector3(0, -10, 0);

                this._btWorld.setGravity(this._btGravity);
              }

              _createClass(AmmoWorld, [{
                key: "step",
                value: function step(deltaTime, timeSinceLastCalled) {
                  var maxSubStep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                  if (this.bodies.length == 0 && this.ghosts.length == 0) return;
                  if (timeSinceLastCalled == undefined) timeSinceLastCalled = deltaTime;

                  this._btWorld.stepSimulation(timeSinceLastCalled, maxSubStep, deltaTime);

                  for (var i = 0; i < this.bodies.length; i++) {
                    this.bodies[i].syncPhysicsToScene();
                  }
                }
              }, {
                key: "syncSceneToPhysics",
                value: function syncSceneToPhysics() {
                  for (var i = 0; i < this.ghosts.length; i++) {
                    this.ghosts[i].updateDirty();
                    this.ghosts[i].syncSceneToGhost();
                  }

                  for (var _i = 0; _i < this.bodies.length; _i++) {
                    this.bodies[_i].updateDirty();

                    this.bodies[_i].syncSceneToPhysics();
                  }
                }
              }, {
                key: "raycast",
                value: function raycast(worldRay, options, pool, results) {
                  var from = cocos2AmmoVec3(this.allHitsCB.m_rayFromWorld, worldRay.o);
                  worldRay.computeHit(v3_0$2, options.maxDistance);
                  var to = cocos2AmmoVec3(this.allHitsCB.m_rayToWorld, v3_0$2);
                  this.allHitsCB.m_collisionFilterGroup = -1;
                  this.allHitsCB.m_collisionFilterMask = options.mask;
                  this.allHitsCB.m_closestHitFraction = 1;
                  this.allHitsCB.m_shapePart = -1;
                  this.allHitsCB.m_collisionObject = null;
                  this.allHitsCB.m_shapeParts.clear();
                  this.allHitsCB.m_hitFractions.clear();
                  this.allHitsCB.m_collisionObjects.clear(); // TODO: typing

                  var hp = this.allHitsCB.m_hitPointWorld;
                  var hn = this.allHitsCB.m_hitNormalWorld;
                  hp.clear();
                  hn.clear();

                  this._btWorld.rayTest(from, to, this.allHitsCB);

                  if (this.allHitsCB.hasHit()) {
                    for (var i = 0, n = this.allHitsCB.m_collisionObjects.size(); i < n; i++) {
                      var btObj = this.allHitsCB.m_collisionObjects.at(i);
                      var btCs = btObj.getCollisionShape();
                      var shape = void 0;

                      if (btCs.isCompound()) {
                        var shapeIndex = this.allHitsCB.m_shapeParts.at(i);
                        var index = btObj.getUserIndex();
                        var shared = AmmoInstance.bodyAndGhosts['KEY' + index];
                        shape = shared.wrappedShapes[shapeIndex];
                      } else {
                        shape = btCs['wrapped'];
                      }

                      ammo2CocosVec3(v3_0$2, hp.at(i));
                      ammo2CocosVec3(v3_1$1, hn.at(i));
                      var distance = Vec3.distance(worldRay.o, v3_0$2);
                      var r = pool.add();

                      r._assign(v3_0$2, distance, shape.collider, v3_1$1);

                      results.push(r);
                    }

                    return true;
                  }

                  return false;
                }
                /**
                 * Ray cast, and return information of the closest hit.
                 * @return True if any body was hit.
                 */

              }, {
                key: "raycastClosest",
                value: function raycastClosest(worldRay, options, result) {
                  var from = cocos2AmmoVec3(this.closeHitCB.m_rayFromWorld, worldRay.o);
                  worldRay.computeHit(v3_0$2, options.maxDistance);
                  var to = cocos2AmmoVec3(this.closeHitCB.m_rayToWorld, v3_0$2);
                  this.closeHitCB.m_collisionFilterGroup = -1;
                  this.closeHitCB.m_collisionFilterMask = options.mask;
                  this.closeHitCB.m_closestHitFraction = 1;
                  this.closeHitCB.m_collisionObject = null;

                  this._btWorld.rayTest(from, to, this.closeHitCB);

                  if (this.closeHitCB.hasHit()) {
                    var btObj = this.closeHitCB.m_collisionObject;
                    var btCs = btObj.getCollisionShape();
                    var shape;

                    if (btCs.isCompound()) {
                      var index = btObj.getUserIndex();
                      var shared = AmmoInstance.bodyAndGhosts['KEY' + index];
                      var shapeIndex = this.closeHitCB.m_shapePart;
                      shape = shared.wrappedShapes[shapeIndex];
                    } else {
                      shape = btCs['wrapped'];
                    }

                    ammo2CocosVec3(v3_0$2, this.closeHitCB.m_hitPointWorld);
                    ammo2CocosVec3(v3_1$1, this.closeHitCB.m_hitNormalWorld);
                    var distance = Vec3.distance(worldRay.o, v3_0$2);

                    result._assign(v3_0$2, distance, shape.collider, v3_1$1);

                    return true;
                  }

                  return false;
                }
              }, {
                key: "getSharedBody",
                value: function getSharedBody(node, wrappedBody) {
                  return AmmoSharedBody.getSharedBody(node, this, wrappedBody);
                }
              }, {
                key: "addSharedBody",
                value: function addSharedBody(sharedBody) {
                  var i = this.bodies.indexOf(sharedBody);

                  if (i < 0) {
                    this.bodies.push(sharedBody);

                    this._btWorld.addRigidBody(sharedBody.body, sharedBody.collisionFilterGroup, sharedBody.collisionFilterMask);
                  }
                }
              }, {
                key: "removeSharedBody",
                value: function removeSharedBody(sharedBody) {
                  var i = this.bodies.indexOf(sharedBody);

                  if (i >= 0) {
                    this.bodies.splice(i, 1);

                    this._btWorld.removeRigidBody(sharedBody.body);
                  }
                }
              }, {
                key: "addGhostObject",
                value: function addGhostObject(sharedBody) {
                  var i = this.ghosts.indexOf(sharedBody);

                  if (i < 0) {
                    this.ghosts.push(sharedBody);

                    this._btWorld.addCollisionObject(sharedBody.ghost, sharedBody.collisionFilterGroup, sharedBody.collisionFilterMask);
                  }
                }
              }, {
                key: "removeGhostObject",
                value: function removeGhostObject(sharedBody) {
                  var i = this.ghosts.indexOf(sharedBody);

                  if (i >= 0) {
                    this.ghosts.splice(i, 1);

                    this._btWorld.removeCollisionObject(sharedBody.ghost);
                  }
                }
              }, {
                key: "addConstraint",
                value: function addConstraint(constraint) {
                  var i = this.constraints.indexOf(constraint);

                  if (i < 0) {
                    this.constraints.push(constraint);

                    this._btWorld.addConstraint(constraint.impl, !constraint.constraint.enableCollision);

                    constraint.index = i;
                  }
                }
              }, {
                key: "removeConstraint",
                value: function removeConstraint(constraint) {
                  var i = this.constraints.indexOf(constraint);

                  if (i >= 0) {
                    this.constraints.splice(i, 1);

                    this._btWorld.removeConstraint(constraint.impl);

                    constraint.index = -1;
                  }
                }
              }, {
                key: "updateCollisionMatrix",
                value: function updateCollisionMatrix(group, mask) {
                  for (var i = 0; i < this.ghosts.length; i++) {
                    var g = this.ghosts[i];

                    if (g.collisionFilterGroup == group) {
                      g.collisionFilterMask = mask;
                    }
                  }

                  for (var _i2 = 0; _i2 < this.bodies.length; _i2++) {
                    var b = this.bodies[_i2];

                    if (b.collisionFilterGroup == group) {
                      b.collisionFilterMask = mask;
                    }
                  }
                }
              }, {
                key: "emitEvents",
                value: function emitEvents() {
                  var numManifolds = this._btDispatcher.getNumManifolds();

                  for (var i = 0; i < numManifolds; i++) {
                    var manifold = this._btDispatcher.getManifoldByIndexInternal(i);

                    var body0 = manifold.getBody0();
                    var body1 = manifold.getBody1();
                    if (!Ammo$1['CC_CONFIG']['emitStaticCollision'] && body0.isStaticObject() && body1.isStaticObject()) continue; //TODO: SUPPORT CHARACTER EVENT

                    if (body0['useCharacter'] || body1['useCharacter']) continue;
                    var isUseCCD = body0['useCCD'] || body1['useCCD'];
                    var numContacts = manifold.getNumContacts();

                    for (var j = 0; j < numContacts; j++) {
                      var manifoldPoint = manifold.getContactPoint(j);
                      var d = manifoldPoint.getDistance();

                      if (d <= 0) {
                        var s0 = manifoldPoint.getShape0();
                        var s1 = manifoldPoint.getShape1();
                        var shape0 = void 0;
                        var shape1 = void 0;

                        if (isUseCCD) {
                          if (body0['useCCD']) {
                            var asb = body0['wrapped'].sharedBody;
                            if (!asb) continue;
                            shape0 = asb.bodyStruct.wrappedShapes[0];
                          } else {
                            var btShape0 = body0.getCollisionShape();

                            if (btShape0.isCompound()) {
                              // TODO: SUPPORT COMPOUND COLLISION WITH CCD
                              continue;
                            } else {
                              shape0 = btShape0.wrapped;
                            }
                          }

                          if (body1['useCCD']) {
                            var _asb = body1['wrapped'].sharedBody;
                            if (!_asb) continue;
                            shape1 = _asb.bodyStruct.wrappedShapes[0];
                          } else {
                            var btShape1 = body1.getCollisionShape();

                            if (btShape1.isCompound()) {
                              // TODO: SUPPORT COMPOUND COLLISION WITH CCD
                              continue;
                            } else {
                              shape1 = btShape1.wrapped;
                            }
                          }
                        } else {
                          if (s0.isCompound()) {
                            var com = Ammo$1.castObject(s0, Ammo$1.btCompoundShape);
                            shape0 = com.getChildShape(manifoldPoint.m_index0).wrapped;
                          } else {
                            shape0 = s0.wrapped;
                          }

                          if (s1.isCompound()) {
                            var _com = Ammo$1.castObject(s1, Ammo$1.btCompoundShape);

                            shape1 = _com.getChildShape(manifoldPoint.m_index1).wrapped;
                          } else {
                            shape1 = s1.wrapped;
                          }
                        }

                        if (shape0.collider.needTriggerEvent || shape1.collider.needTriggerEvent || shape0.collider.needCollisionEvent || shape1.collider.needCollisionEvent) {
                          // current contact
                          var item = this.contactsDic.get(shape0.id, shape1.id);

                          if (item == null) {
                            item = this.contactsDic.set(shape0.id, shape1.id, {
                              shape0: shape0,
                              shape1: shape1,
                              contacts: [],
                              impl: manifold
                            });
                          }

                          item.contacts.push(manifoldPoint);
                        }
                      }
                    }
                  } // is enter or stay


                  var dicL = this.contactsDic.getLength();

                  while (dicL--) {
                    contactsPool.push.apply(contactsPool, CollisionEventObject.contacts);
                    CollisionEventObject.contacts.length = 0;
                    var key = this.contactsDic.getKeyByIndex(dicL);
                    var data = this.contactsDic.getDataByKey(key);
                    var _shape = data.shape0;
                    var _shape2 = data.shape1;
                    this.oldContactsDic.set(_shape.id, _shape2.id, data);
                    var collider0 = _shape.collider;
                    var collider1 = _shape2.collider;

                    if (collider0 && collider1) {
                      var isTrigger = collider0.isTrigger || collider1.isTrigger;

                      if (isTrigger) {
                        if (this.triggerArrayMat.get(_shape.id, _shape2.id)) {
                          TriggerEventObject.type = 'onTriggerStay';
                        } else {
                          TriggerEventObject.type = 'onTriggerEnter';
                          this.triggerArrayMat.set(_shape.id, _shape2.id, true);
                        }

                        TriggerEventObject.impl = data.impl;
                        TriggerEventObject.selfCollider = collider0;
                        TriggerEventObject.otherCollider = collider1;
                        collider0.emit(TriggerEventObject.type, TriggerEventObject);
                        TriggerEventObject.selfCollider = collider1;
                        TriggerEventObject.otherCollider = collider0;
                        collider1.emit(TriggerEventObject.type, TriggerEventObject);
                      } else {
                        var _body = collider0.attachedRigidBody;
                        var _body2 = collider1.attachedRigidBody;

                        if (_body && _body2) {
                          if (_body.isSleeping && _body2.isSleeping) continue;
                        } else if (_body == null && _body2) {
                          if (_body2.isSleeping) continue;
                        } else if (_body2 == null && _body) {
                          if (_body.isSleeping) continue;
                        }

                        if (this.collisionArrayMat.get(_shape.id, _shape2.id)) {
                          CollisionEventObject.type = 'onCollisionStay';
                        } else {
                          CollisionEventObject.type = 'onCollisionEnter';
                          this.collisionArrayMat.set(_shape.id, _shape2.id, true);
                        }

                        for (var _i3 = 0; _i3 < data.contacts.length; _i3++) {
                          var cq = data.contacts[_i3];

                          if (contactsPool.length > 0) {
                            var c = contactsPool.pop();
                            c.impl = cq;
                            CollisionEventObject.contacts.push(c);
                          } else {
                            var _c = new AmmoContactEquation(CollisionEventObject);

                            _c.impl = cq;
                            CollisionEventObject.contacts.push(_c);
                          }
                        }

                        CollisionEventObject.impl = data.impl;
                        CollisionEventObject.selfCollider = collider0;
                        CollisionEventObject.otherCollider = collider1;
                        collider0.emit(CollisionEventObject.type, CollisionEventObject);
                        CollisionEventObject.selfCollider = collider1;
                        CollisionEventObject.otherCollider = collider0;
                        collider1.emit(CollisionEventObject.type, CollisionEventObject);
                      }

                      if (this.oldContactsDic.get(_shape.id, _shape2.id) == null) {
                        this.oldContactsDic.set(_shape.id, _shape2.id, data);
                      }
                    }
                  } // is exit


                  var oldDicL = this.oldContactsDic.getLength();

                  while (oldDicL--) {
                    var _key = this.oldContactsDic.getKeyByIndex(oldDicL);

                    var _data = this.oldContactsDic.getDataByKey(_key);

                    var _shape3 = _data.shape0;
                    var _shape4 = _data.shape1;
                    var _collider = _shape3.collider;
                    var _collider2 = _shape4.collider;

                    if (_collider && _collider2) {
                      var _isTrigger = _collider.isTrigger || _collider2.isTrigger;

                      if (this.contactsDic.getDataByKey(_key) == null) {
                        if (_isTrigger) {
                          if (this.triggerArrayMat.get(_shape3.id, _shape4.id)) {
                            TriggerEventObject.type = 'onTriggerExit';
                            TriggerEventObject.selfCollider = _collider;
                            TriggerEventObject.otherCollider = _collider2;

                            _collider.emit(TriggerEventObject.type, TriggerEventObject);

                            TriggerEventObject.selfCollider = _collider2;
                            TriggerEventObject.otherCollider = _collider;

                            _collider2.emit(TriggerEventObject.type, TriggerEventObject);

                            this.triggerArrayMat.set(_shape3.id, _shape4.id, false);
                            this.oldContactsDic.set(_shape3.id, _shape4.id, null);
                          }
                        } else {
                          if (this.collisionArrayMat.get(_shape3.id, _shape4.id)) {
                            contactsPool.push.apply(contactsPool, CollisionEventObject.contacts);
                            CollisionEventObject.contacts.length = 0;

                            for (var _i4 = 0; _i4 < _data.contacts.length; _i4++) {
                              var _cq = _data.contacts[_i4];

                              if (contactsPool.length > 0) {
                                var _c2 = contactsPool.pop();

                                _c2.impl = _cq;
                                CollisionEventObject.contacts.push(_c2);
                              } else {
                                var _c3 = new AmmoContactEquation(CollisionEventObject);

                                _c3.impl = _cq;
                                CollisionEventObject.contacts.push(_c3);
                              }
                            }

                            CollisionEventObject.type = 'onCollisionExit';
                            CollisionEventObject.selfCollider = _collider;
                            CollisionEventObject.otherCollider = _collider2;

                            _collider.emit(CollisionEventObject.type, CollisionEventObject);

                            CollisionEventObject.selfCollider = _collider2;
                            CollisionEventObject.otherCollider = _collider;

                            _collider2.emit(CollisionEventObject.type, CollisionEventObject);

                            this.collisionArrayMat.set(_shape3.id, _shape4.id, false);
                            this.oldContactsDic.set(_shape3.id, _shape4.id, null);
                          }
                        }
                      }
                    }
                  }

                  this.contactsDic.reset();
                }
              }]);

              return AmmoWorld;
            }();

            var v3_0$3 = CC_V3_0;
            var AmmoShape = /*#__PURE__*/function () {
              _createClass(AmmoShape, [{
                key: "setMaterial",
                value: function setMaterial(v) {
                  if (!this._isTrigger && this._isEnabled && v) {
                    if (this._btCompound) {
                      this._btCompound.setMaterial(this._index, v.friction, v.restitution, v.rollingFriction, v.spinningFriction);
                    } else {
                      this._sharedBody.body.setFriction(v.friction);

                      this._sharedBody.body.setRestitution(v.restitution);

                      this._sharedBody.body.setRollingFriction(v.rollingFriction);

                      this._sharedBody.body.setSpinningFriction(v.spinningFriction);
                    }
                  }
                }
              }, {
                key: "setCenter",
                value: function setCenter(v) {
                  Vec3.copy(v3_0$3, v);
                  v3_0$3.multiply(this._collider.node.worldScale);
                  cocos2AmmoVec3(this.transform.getOrigin(), v3_0$3);
                  this.updateCompoundTransform();
                }
              }, {
                key: "setAsTrigger",
                value: function setAsTrigger(v) {
                  if (this._isTrigger == v) return;

                  if (this._isEnabled) {
                    this._sharedBody.removeShape(this, !v);

                    this._sharedBody.addShape(this, v);
                  }

                  this._isTrigger = v;
                }
              }, {
                key: "attachedRigidBody",
                get: function get() {
                  if (this._sharedBody.wrappedBody) {
                    return this._sharedBody.wrappedBody.rigidBody;
                  }

                  return null;
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._btShape;
                }
              }, {
                key: "collider",
                get: function get() {
                  return this._collider;
                }
              }, {
                key: "sharedBody",
                get: function get() {
                  return this._sharedBody;
                }
              }, {
                key: "index",
                get: function get() {
                  return this._index;
                }
              }]);

              function AmmoShape(type) {
                _classCallCheck(this, AmmoShape);

                this.id = void 0;
                this.type = void 0;
                this._index = -1;
                this._isEnabled = false;
                this._isBinding = false;
                this._isTrigger = false;
                this._btCompound = null;
                this.transform = void 0;
                this.pos = void 0;
                this.quat = void 0;
                this.scale = void 0;
                this.type = type;
                this.id = AmmoShape.idCounter++;
                this.pos = new Ammo$1.btVector3();
                this.quat = new Ammo$1.btQuaternion();
                this.transform = new Ammo$1.btTransform(this.quat, this.pos);
                this.transform.setIdentity();
                this.scale = new Ammo$1.btVector3(1, 1, 1);
              }

              _createClass(AmmoShape, [{
                key: "getAABB",
                value: function getAABB(v) {
                  var TRANS = AmmoConstant.instance.TRANSFORM;
                  TRANS.setIdentity();
                  TRANS.setRotation(cocos2AmmoQuat(AmmoConstant.instance.QUAT_0, this._collider.node.worldRotation));
                  var MIN = AmmoConstant.instance.VECTOR3_0;
                  var MAX = AmmoConstant.instance.VECTOR3_1;

                  this._btShape.getAabb(TRANS, MIN, MAX);

                  v.halfExtents.set((MAX.x() - MIN.x()) / 2, (MAX.y() - MIN.y()) / 2, (MAX.z() - MIN.z()) / 2);
                  Vec3.add(v.center, this._collider.node.worldPosition, this._collider.center);
                }
              }, {
                key: "getBoundingSphere",
                value: function getBoundingSphere(v) {
                  v.radius = this._btShape.getLocalBoundingSphere();
                  Vec3.add(v.center, this._collider.node.worldPosition, this._collider.center);
                }
              }, {
                key: "initialize",
                value: function initialize(com) {
                  this._collider = com;
                  this._isBinding = true;
                  this.onComponentSet();
                  this.setWrapper();
                  this._sharedBody = PhysicsSystem.instance.physicsWorld.getSharedBody(this._collider.node);
                  this._sharedBody.reference = true;
                } // virtual

              }, {
                key: "onComponentSet",
                value: function onComponentSet() {}
              }, {
                key: "onLoad",
                value: function onLoad() {
                  this.setCenter(this._collider.center);
                  this.setAsTrigger(this._collider.isTrigger);
                }
              }, {
                key: "onEnable",
                value: function onEnable() {
                  this._isEnabled = true;

                  this._sharedBody.addShape(this, this._isTrigger);

                  this.setMaterial(this.collider.sharedMaterial);
                }
              }, {
                key: "onDisable",
                value: function onDisable() {
                  this._isEnabled = false;

                  this._sharedBody.removeShape(this, this._isTrigger);
                }
              }, {
                key: "onDestroy",
                value: function onDestroy() {
                  this._sharedBody.reference = false;
                  this._btCompound = null;
                  this._collider = null;
                  var shape = Ammo$1.castObject(this._btShape, Ammo$1.btCollisionShape);
                  shape['wrapped'] = null;
                  Ammo$1.destroy(this.pos);
                  Ammo$1.destroy(this.quat);
                  Ammo$1.destroy(this.scale);
                  Ammo$1.destroy(this.transform);
                  Ammo$1.destroy(this._btShape);
                  ammoDeletePtr(this._btShape, Ammo$1.btCollisionShape);
                  this._btShape = null;
                  this.transform = null;
                  this.pos = null;
                  this.quat = null;
                  this.scale = null;
                }
                /** group mask */

              }, {
                key: "getGroup",
                value: function getGroup() {
                  return this._sharedBody.collisionFilterGroup;
                }
              }, {
                key: "setGroup",
                value: function setGroup(v) {
                  this._sharedBody.collisionFilterGroup = v;
                }
              }, {
                key: "addGroup",
                value: function addGroup(v) {
                  this._sharedBody.collisionFilterGroup |= v;
                }
              }, {
                key: "removeGroup",
                value: function removeGroup(v) {
                  this._sharedBody.collisionFilterGroup &= ~v;
                }
              }, {
                key: "getMask",
                value: function getMask() {
                  return this._sharedBody.collisionFilterMask;
                }
              }, {
                key: "setMask",
                value: function setMask(v) {
                  this._sharedBody.collisionFilterMask = v;
                }
              }, {
                key: "addMask",
                value: function addMask(v) {
                  this._sharedBody.collisionFilterMask |= v;
                }
              }, {
                key: "removeMask",
                value: function removeMask(v) {
                  this._sharedBody.collisionFilterMask &= ~v;
                }
              }, {
                key: "setCompound",
                value: function setCompound(compound) {
                  if (this._btCompound) {
                    this._btCompound.removeChildShape(this._btShape);

                    this._index = -1;
                  }

                  if (compound) {
                    this._index = compound.getNumChildShapes();
                    compound.addChildShape(this.transform, this._btShape);
                  }

                  this._btCompound = compound;
                }
              }, {
                key: "setWrapper",
                value: function setWrapper() {
                  var shape = Ammo$1.castObject(this._btShape, Ammo$1.btCollisionShape);
                  shape['wrapped'] = this;
                }
              }, {
                key: "setScale",
                value: function setScale() {
                  this.setCenter(this._collider.center);
                }
              }, {
                key: "updateCompoundTransform",
                value: function updateCompoundTransform() {
                  if (this._btCompound) {
                    this._btCompound.updateChildTransform(this.index, this.transform, true);
                  } else if (this._isEnabled && !this._isTrigger) {
                    if (this._sharedBody && !this._sharedBody.bodyStruct.useCompound) {
                      this._sharedBody.dirty |= EAmmoSharedBodyDirty.BODY_RE_ADD;
                    }
                  }
                }
              }, {
                key: "needCompound",
                value: function needCompound() {
                  if (this.type == AmmoBroadphaseNativeTypes.TERRAIN_SHAPE_PROXYTYPE) return true;
                  if (this._collider.center.equals(Vec3.ZERO)) return false;
                  return true;
                }
                /**DEBUG */

              }, {
                key: "debugTransform",
                value: function debugTransform(n) {
                  if (AmmoShape._debugTransform == null) {
                    AmmoShape._debugTransform = new Ammo$1.btTransform();
                  }

                  var wt;

                  if (this._isTrigger) {
                    wt = this._sharedBody.ghost.getWorldTransform();
                  } else {
                    wt = this._sharedBody.body.getWorldTransform();
                  }

                  var lt = this.transform;

                  AmmoShape._debugTransform.setIdentity();

                  AmmoShape._debugTransform.op_mul(wt).op_mul(lt);

                  var origin = AmmoShape._debugTransform.getOrigin();

                  n.worldPosition = new Vec3(origin.x(), origin.y(), origin.z());

                  var rotation = AmmoShape._debugTransform.getRotation();

                  n.worldRotation = new Quat(rotation.x(), rotation.y(), rotation.z(), rotation.w());
                  var scale = this.impl.getLocalScaling();
                  n.scale = new Vec3(scale.x(), scale.y(), scale.z());
                }
              }]);

              return AmmoShape;
            }();
            AmmoShape.idCounter = 0;
            AmmoShape._debugTransform = void 0;

            var v3_0$4 = CC_V3_0;
            var AmmoBoxShape = /*#__PURE__*/function (_AmmoShape) {
              _inherits(AmmoBoxShape, _AmmoShape);

              _createClass(AmmoBoxShape, [{
                key: "setSize",
                value: function setSize(size) {
                  Vec3.multiplyScalar(v3_0$4, size, 0.5);
                  cocos2AmmoVec3(this.halfExt, v3_0$4);
                  this.impl.setUnscaledHalfExtents(this.halfExt);
                  this.updateCompoundTransform();
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._btShape;
                }
              }, {
                key: "collider",
                get: function get() {
                  return this._collider;
                }
              }]);

              function AmmoBoxShape() {
                var _this;

                _classCallCheck(this, AmmoBoxShape);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(AmmoBoxShape).call(this, AmmoBroadphaseNativeTypes.BOX_SHAPE_PROXYTYPE));
                _this.halfExt = void 0;
                _this.halfExt = new Ammo$1.btVector3(0.5, 0.5, 0.5);
                _this._btShape = new Ammo$1.btBoxShape(_this.halfExt);
                return _this;
              }

              _createClass(AmmoBoxShape, [{
                key: "onComponentSet",
                value: function onComponentSet() {
                  this.setSize(this.collider.size);
                  this.setScale();
                }
              }, {
                key: "onDestroy",
                value: function onDestroy() {
                  Ammo$1.destroy(this.halfExt);
                  ammoDeletePtr(this.halfExt, Ammo$1.btVector3);
                  this.halfExt = null;

                  _get(_getPrototypeOf(AmmoBoxShape.prototype), "onDestroy", this).call(this);
                }
              }, {
                key: "setScale",
                value: function setScale() {
                  _get(_getPrototypeOf(AmmoBoxShape.prototype), "setScale", this).call(this);

                  cocos2AmmoVec3(this.scale, this._collider.node.worldScale);

                  this._btShape.setLocalScaling(this.scale);

                  this.updateCompoundTransform();
                }
              }]);

              return AmmoBoxShape;
            }(AmmoShape);

            var v3_0$5 = CC_V3_0;
            var AmmoSphereShape = /*#__PURE__*/function (_AmmoShape) {
              _inherits(AmmoSphereShape, _AmmoShape);

              _createClass(AmmoSphereShape, [{
                key: "setRadius",
                value: function setRadius(radius) {
                  this.impl.setUnscaledRadius(radius);
                  this.updateCompoundTransform();
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._btShape;
                }
              }, {
                key: "collider",
                get: function get() {
                  return this._collider;
                }
              }]);

              function AmmoSphereShape() {
                var _this;

                _classCallCheck(this, AmmoSphereShape);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(AmmoSphereShape).call(this, AmmoBroadphaseNativeTypes.SPHERE_SHAPE_PROXYTYPE));
                _this._btShape = new Ammo$1.btSphereShape(0.5);
                return _this;
              }

              _createClass(AmmoSphereShape, [{
                key: "onComponentSet",
                value: function onComponentSet() {
                  this.setRadius(this.collider.radius);
                  this.setScale();
                }
              }, {
                key: "setScale",
                value: function setScale() {
                  _get(_getPrototypeOf(AmmoSphereShape.prototype), "setScale", this).call(this);

                  var ws = this._collider.node.worldScale;
                  var absX = Math.abs(ws.x);
                  var absY = Math.abs(ws.y);
                  var absZ = Math.abs(ws.z);
                  var max_sp = Math.max(Math.max(absX, absY), absZ);
                  v3_0$5.set(max_sp, max_sp, max_sp);
                  cocos2AmmoVec3(this.scale, v3_0$5);

                  this._btShape.setLocalScaling(this.scale);

                  this.updateCompoundTransform();
                }
              }]);

              return AmmoSphereShape;
            }(AmmoShape);

            var AmmoCapsuleShape = /*#__PURE__*/function (_AmmoShape) {
              _inherits(AmmoCapsuleShape, _AmmoShape);

              _createClass(AmmoCapsuleShape, [{
                key: "setCylinderHeight",
                value: function setCylinderHeight(v) {
                  this.updateProperties(this.collider.radius, this.collider.cylinderHeight, this.collider.direction, this._collider.node.worldScale);
                }
              }, {
                key: "setDirection",
                value: function setDirection(v) {
                  this.updateProperties(this.collider.radius, this.collider.cylinderHeight, this.collider.direction, this._collider.node.worldScale);
                }
              }, {
                key: "setRadius",
                value: function setRadius(v) {
                  this.updateProperties(this.collider.radius, this.collider.cylinderHeight, this.collider.direction, this._collider.node.worldScale);
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._btShape;
                }
              }, {
                key: "collider",
                get: function get() {
                  return this._collider;
                }
              }]);

              function AmmoCapsuleShape() {
                var _this;

                _classCallCheck(this, AmmoCapsuleShape);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(AmmoCapsuleShape).call(this, AmmoBroadphaseNativeTypes.CAPSULE_SHAPE_PROXYTYPE));
                _this._btShape = new Ammo$1.btCapsuleShape(0.5, 1);
                return _this;
              }

              _createClass(AmmoCapsuleShape, [{
                key: "onLoad",
                value: function onLoad() {
                  _get(_getPrototypeOf(AmmoCapsuleShape.prototype), "onLoad", this).call(this);

                  this.setRadius(this.collider.radius);
                }
              }, {
                key: "setScale",
                value: function setScale() {
                  _get(_getPrototypeOf(AmmoCapsuleShape.prototype), "setScale", this).call(this);

                  this.setRadius(this.collider.radius);
                }
              }, {
                key: "updateProperties",
                value: function updateProperties(radius, height, direction, scale) {
                  var ws = scale;
                  var upAxis = direction;

                  if (upAxis == 1) {
                    var wr = radius * Math.abs(absMax(ws.x, ws.z));
                    var halfH = height / 2 * Math.abs(ws.y);
                    this.impl.updateProp(wr, halfH, upAxis);
                  } else if (upAxis == 0) {
                    var _wr = radius * Math.abs(absMax(ws.y, ws.z));

                    var _halfH = height / 2 * Math.abs(ws.x);

                    this.impl.updateProp(_wr, _halfH, upAxis);
                  } else {
                    var _wr2 = radius * Math.abs(absMax(ws.x, ws.y));

                    var _halfH2 = height / 2 * Math.abs(ws.z);

                    this.impl.updateProp(_wr2, _halfH2, upAxis);
                  }

                  this.updateCompoundTransform();
                }
              }]);

              return AmmoCapsuleShape;
            }(AmmoShape);

            var AmmoTrimeshShape = /*#__PURE__*/function (_AmmoShape) {
              _inherits(AmmoTrimeshShape, _AmmoShape);

              _createClass(AmmoTrimeshShape, [{
                key: "setMesh",
                value: function setMesh(v) {
                  if (!this._isBinding) return;

                  if (this._btShape != null && this._btShape != AmmoConstant.instance.EMPTY_SHAPE) {
                    // TODO: change the mesh after initialization
                    warnID(9620);
                  } else {
                    var mesh = v;

                    if (mesh && mesh.renderingSubMeshes.length > 0) {
                      var btTriangleMesh = this._getBtTriangleMesh(mesh);

                      if (this.collider.convex) {
                        this._btShape = new Ammo$1.btConvexTriangleMeshShape(btTriangleMesh, true);
                      } else {
                        this._btShape = new Ammo$1.btBvhTriangleMeshShape(btTriangleMesh, true, true);
                      }

                      cocos2AmmoVec3(this.scale, this._collider.node.worldScale);

                      this._btShape.setMargin(0.01);

                      this._btShape.setLocalScaling(this.scale);

                      this.setWrapper();
                      this.setCompound(this._btCompound);
                    } else {
                      this._btShape = AmmoConstant.instance.EMPTY_SHAPE;
                    }
                  }
                }
              }, {
                key: "collider",
                get: function get() {
                  return this._collider;
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._btShape;
                }
              }]);

              function AmmoTrimeshShape() {
                var _this;

                _classCallCheck(this, AmmoTrimeshShape);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(AmmoTrimeshShape).call(this, AmmoBroadphaseNativeTypes.TRIANGLE_MESH_SHAPE_PROXYTYPE));
                _this.refBtTriangleMesh = null;
                return _this;
              }

              _createClass(AmmoTrimeshShape, [{
                key: "onComponentSet",
                value: function onComponentSet() {
                  this.setMesh(this.collider.mesh);
                }
              }, {
                key: "onDestroy",
                value: function onDestroy() {
                  if (this.refBtTriangleMesh) {
                    Ammo$1.destroy(this.refBtTriangleMesh);
                  }

                  _get(_getPrototypeOf(AmmoTrimeshShape.prototype), "onDestroy", this).call(this);
                }
              }, {
                key: "setCompound",
                value: function setCompound(compound) {
                  _get(_getPrototypeOf(AmmoTrimeshShape.prototype), "setCompound", this).call(this, compound);

                  this.impl.setUserIndex(this._index);
                }
              }, {
                key: "setScale",
                value: function setScale() {
                  _get(_getPrototypeOf(AmmoTrimeshShape.prototype), "setScale", this).call(this);

                  cocos2AmmoVec3(this.scale, this._collider.node.worldScale);

                  this._btShape.setLocalScaling(this.scale);

                  this.updateCompoundTransform();
                }
              }, {
                key: "_getBtTriangleMesh",
                value: function _getBtTriangleMesh(mesh) {
                  var btTriangleMesh;

                  if (Ammo$1['CC_CACHE']['btTriangleMesh'].enable) {
                    if (Ammo$1['CC_CACHE']['btTriangleMesh'][mesh._uuid] == null) {
                      var btm = new Ammo$1.btTriangleMesh();
                      Ammo$1['CC_CACHE']['btTriangleMesh'][mesh._uuid] = btm;
                      cocos2AmmoTriMesh(btm, mesh);
                    }

                    btTriangleMesh = Ammo$1['CC_CACHE']['btTriangleMesh'][mesh._uuid];
                  } else {
                    this.refBtTriangleMesh = btTriangleMesh = new Ammo$1.btTriangleMesh();
                    cocos2AmmoTriMesh(btTriangleMesh, mesh);
                  }

                  return btTriangleMesh;
                }
              }]);

              return AmmoTrimeshShape;
            }(AmmoShape);

            var AmmoCylinderShape = /*#__PURE__*/function (_AmmoShape) {
              _inherits(AmmoCylinderShape, _AmmoShape);

              _createClass(AmmoCylinderShape, [{
                key: "setHeight",
                value: function setHeight(v) {
                  this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
                }
              }, {
                key: "setDirection",
                value: function setDirection(v) {
                  this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
                }
              }, {
                key: "setRadius",
                value: function setRadius(v) {
                  this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._btShape;
                }
              }, {
                key: "collider",
                get: function get() {
                  return this._collider;
                }
              }]);

              function AmmoCylinderShape() {
                var _this;

                _classCallCheck(this, AmmoCylinderShape);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(AmmoCylinderShape).call(this, AmmoBroadphaseNativeTypes.CYLINDER_SHAPE_PROXYTYPE));
                _this.halfExtents = void 0;
                _this.halfExtents = new Ammo$1.btVector3(0.5, 1, 0.5);
                _this._btShape = new Ammo$1.btCylinderShape(_this.halfExtents);
                return _this;
              }

              _createClass(AmmoCylinderShape, [{
                key: "onLoad",
                value: function onLoad() {
                  _get(_getPrototypeOf(AmmoCylinderShape.prototype), "onLoad", this).call(this);

                  this.setRadius(this.collider.radius);
                }
              }, {
                key: "onDestroy",
                value: function onDestroy() {
                  Ammo$1.destroy(this.halfExtents);
                  ammoDeletePtr(this.halfExtents, Ammo$1.btVector3);

                  _get(_getPrototypeOf(AmmoCylinderShape.prototype), "onDestroy", this).call(this);
                }
              }, {
                key: "setScale",
                value: function setScale() {
                  _get(_getPrototypeOf(AmmoCylinderShape.prototype), "setScale", this).call(this);

                  this.setRadius(this.collider.radius);
                }
              }, {
                key: "updateProperties",
                value: function updateProperties(radius, height, direction, scale) {
                  var ws = scale;
                  var upAxis = direction;

                  if (upAxis == 1) {
                    var wh = height * Math.abs(ws.y);
                    var wr = radius * Math.abs(absMax(ws.x, ws.z));
                    var halfH = wh / 2;
                    this.impl.updateProp(wr, halfH, upAxis);
                  } else if (upAxis == 0) {
                    var _wh = height * Math.abs(ws.x);

                    var _wr = radius * Math.abs(absMax(ws.y, ws.z));

                    var _halfH = _wh / 2;

                    this.impl.updateProp(_wr, _halfH, upAxis);
                  } else {
                    var _wh2 = height * Math.abs(ws.z);

                    var _wr2 = radius * Math.abs(absMax(ws.x, ws.y));

                    var _halfH2 = _wh2 / 2;

                    this.impl.updateProp(_wr2, _halfH2, upAxis);
                  }

                  this.updateCompoundTransform();
                }
              }]);

              return AmmoCylinderShape;
            }(AmmoShape);

            var AmmoConeShape = /*#__PURE__*/function (_AmmoShape) {
              _inherits(AmmoConeShape, _AmmoShape);

              _createClass(AmmoConeShape, [{
                key: "setHeight",
                value: function setHeight(v) {
                  this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
                }
              }, {
                key: "setDirection",
                value: function setDirection(v) {
                  this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
                }
              }, {
                key: "setRadius",
                value: function setRadius(v) {
                  this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._btShape;
                }
              }, {
                key: "collider",
                get: function get() {
                  return this._collider;
                }
              }]);

              function AmmoConeShape() {
                var _this;

                _classCallCheck(this, AmmoConeShape);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(AmmoConeShape).call(this, AmmoBroadphaseNativeTypes.CONE_SHAPE_PROXYTYPE));
                _this._btShape = new Ammo$1.btConeShape(0.5, 1);
                return _this;
              }

              _createClass(AmmoConeShape, [{
                key: "onLoad",
                value: function onLoad() {
                  _get(_getPrototypeOf(AmmoConeShape.prototype), "onLoad", this).call(this);

                  this.setRadius(this.collider.radius);
                }
              }, {
                key: "setScale",
                value: function setScale() {
                  _get(_getPrototypeOf(AmmoConeShape.prototype), "setScale", this).call(this);

                  this.setRadius(this.collider.radius);
                }
              }, {
                key: "updateProperties",
                value: function updateProperties(radius, height, direction, scale) {
                  var ws = scale;
                  var upAxis = direction;

                  if (upAxis == 1) {
                    var wh = height * Math.abs(ws.y);
                    var wr = radius * Math.abs(absMax(ws.x, ws.z));
                    this.impl.setRadius(wr);
                    this.impl.setHeight(wh);
                  } else if (upAxis == 0) {
                    var _wh = height * Math.abs(ws.x);

                    var _wr = radius * Math.abs(absMax(ws.y, ws.z));

                    this.impl.setRadius(_wr);
                    this.impl.setHeight(_wh);
                  } else {
                    var _wh2 = height * Math.abs(ws.z);

                    var _wr2 = radius * Math.abs(absMax(ws.x, ws.y));

                    this.impl.setRadius(_wr2);
                    this.impl.setHeight(_wh2);
                  }

                  this.impl.setConeUpIndex(upAxis);
                  this.scale.setValue(1, 1, 1);
                  this.impl.setLocalScaling(this.scale);
                  this.updateCompoundTransform();
                }
              }]);

              return AmmoConeShape;
            }(AmmoShape);

            var AmmoTerrainShape = /*#__PURE__*/function (_AmmoShape) {
              _inherits(AmmoTerrainShape, _AmmoShape);

              _createClass(AmmoTerrainShape, [{
                key: "setTerrain",
                value: function setTerrain(v) {
                  if (!this._isBinding) return;

                  if (this._btShape != null && this._btShape != AmmoConstant.instance.EMPTY_SHAPE) {
                    // TODO: change the terrain asset after initialization
                    warn("[Physics] Ammo change the terrain asset after initialization is not support.");
                  } else {
                    var terrain = v;

                    if (terrain) {
                      this._terrainID = terrain._uuid;
                      this._tileSize = terrain.tileSize;
                      var sizeI = terrain.getVertexCountI();
                      var sizeJ = terrain.getVertexCountJ();
                      this._buffPtr = Ammo$1._malloc(4 * sizeI * sizeJ);
                      var offset = 0;
                      var maxHeight = Number.MIN_VALUE;
                      var minHeight = Number.MAX_VALUE;

                      for (var j = 0; j < sizeJ; j++) {
                        for (var i = 0; i < sizeI; i++) {
                          var _v = terrain.getHeight(i, j);

                          Ammo$1.HEAPF32[this._buffPtr + offset >> 2] = _v;
                          maxHeight = maxHeight < _v ? _v : maxHeight;
                          minHeight = minHeight > _v ? _v : minHeight;
                          offset += 4;
                        }
                      }

                      maxHeight += 0.1;
                      minHeight -= 0.1;

                      this._localOffset.set((sizeI - 1) / 2 * this._tileSize, (maxHeight + minHeight) / 2, (sizeJ - 1) / 2 * this._tileSize);

                      var heightScale = 1;
                      var hdt = "PHY_FLOAT";
                      var upAxis = 1;
                      var flipQuadEdges = false;
                      this._btShape = new Ammo$1.btHeightfieldTerrainShape(sizeI, sizeJ, this._buffPtr, heightScale, minHeight, maxHeight, upAxis, hdt, flipQuadEdges);
                      this.scale.setValue(this._tileSize, 1, this._tileSize);

                      this._btShape.setLocalScaling(this.scale);
                    } else {
                      this._btShape = AmmoConstant.instance.EMPTY_SHAPE;
                    }
                  }
                }
              }, {
                key: "collider",
                get: function get() {
                  return this._collider;
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._btShape;
                }
              }]);

              function AmmoTerrainShape() {
                var _this;

                _classCallCheck(this, AmmoTerrainShape);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(AmmoTerrainShape).call(this, AmmoBroadphaseNativeTypes.TERRAIN_SHAPE_PROXYTYPE));
                _this._terrainID = void 0;
                _this._buffPtr = void 0;
                _this._tileSize = void 0;
                _this._localOffset = void 0;
                _this._terrainID = '';
                _this._buffPtr = 0;
                _this._tileSize = 0;
                _this._localOffset = new Vec3();
                return _this;
              }

              _createClass(AmmoTerrainShape, [{
                key: "onComponentSet",
                value: function onComponentSet() {
                  this.setTerrain(this.collider.terrain);
                }
              }, {
                key: "onDestroy",
                value: function onDestroy() {
                  if (this._buffPtr) Ammo$1['_free'](this._buffPtr);

                  _get(_getPrototypeOf(AmmoTerrainShape.prototype), "onDestroy", this).call(this);
                }
              }, {
                key: "setCompound",
                value: function setCompound(compound) {
                  _get(_getPrototypeOf(AmmoTerrainShape.prototype), "setCompound", this).call(this, compound);

                  this.impl.setUserIndex(this._index);
                }
              }, {
                key: "setCenter",
                value: function setCenter(v) {
                  Vec3.copy(CC_V3_0, v);
                  CC_V3_0.add(this._localOffset);
                  CC_V3_0.multiply(this._collider.node.worldScale);
                  cocos2AmmoVec3(this.transform.getOrigin(), CC_V3_0);
                  this.updateCompoundTransform();
                } // setScale () {
                //     // TODO: handle scale
                // }

              }]);

              return AmmoTerrainShape;
            }(AmmoShape);

            var AmmoSimplexShape = /*#__PURE__*/function (_AmmoShape) {
              _inherits(AmmoSimplexShape, _AmmoShape);

              _createClass(AmmoSimplexShape, [{
                key: "setShapeType",
                value: function setShapeType(v) {
                  if (this._isBinding) ;
                }
              }, {
                key: "setVertices",
                value: function setVertices(v) {
                  //TODO: Fix
                  var length = this.VERTICES.length;

                  for (var i = 0; i < length; i++) {
                    cocos2AmmoVec3(this.VERTICES[i], v[i]);
                  }

                  cocos2AmmoVec3(this.scale, this._collider.node.worldScale);

                  this._btShape.setLocalScaling(this.scale);

                  if (this._btCompound) {
                    this._btCompound.updateChildTransform(this.index, this.transform, true);
                  }
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._btShape;
                }
              }, {
                key: "collider",
                get: function get() {
                  return this._collider;
                }
              }]);

              function AmmoSimplexShape() {
                var _this;

                _classCallCheck(this, AmmoSimplexShape);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(AmmoSimplexShape).call(this, AmmoBroadphaseNativeTypes.TETRAHEDRAL_SHAPE_PROXYTYPE));
                _this.VERTICES = [];
                _this._btShape = new Ammo$1.btBU_Simplex1to4();
                return _this;
              }

              _createClass(AmmoSimplexShape, [{
                key: "onComponentSet",
                value: function onComponentSet() {
                  var length = this.collider.shapeType;
                  var vertices = this.collider.vertices;

                  for (var i = 0; i < length; i++) {
                    this.VERTICES[i] = new Ammo$1.btVector3();
                    cocos2AmmoVec3(this.VERTICES[i], vertices[i]);
                    this.impl.addVertex(this.VERTICES[i]);
                  }

                  cocos2AmmoVec3(this.scale, this._collider.node.worldScale);

                  this._btShape.setLocalScaling(this.scale);
                }
              }, {
                key: "onLoad",
                value: function onLoad() {
                  _get(_getPrototypeOf(AmmoSimplexShape.prototype), "onLoad", this).call(this);

                  this.collider.updateVertices();
                }
              }, {
                key: "onDestroy",
                value: function onDestroy() {
                  var length = this.VERTICES.length;

                  for (var i = 0; i < length; i++) {
                    Ammo$1.destroy(this.VERTICES[i]);
                  }

                  this.VERTICES = null;

                  _get(_getPrototypeOf(AmmoSimplexShape.prototype), "onDestroy", this).call(this);
                }
              }, {
                key: "setScale",
                value: function setScale() {
                  _get(_getPrototypeOf(AmmoSimplexShape.prototype), "setScale", this).call(this);

                  cocos2AmmoVec3(this.scale, this._collider.node.worldScale);

                  this._btShape.setLocalScaling(this.scale);

                  if (this._btCompound) {
                    this._btCompound.updateChildTransform(this.index, this.transform, true);
                  }
                }
              }]);

              return AmmoSimplexShape;
            }(AmmoShape);

            var AmmoPlaneShape = /*#__PURE__*/function (_AmmoShape) {
              _inherits(AmmoPlaneShape, _AmmoShape);

              _createClass(AmmoPlaneShape, [{
                key: "setNormal",
                value: function setNormal(v) {
                  cocos2AmmoVec3(this.impl.getPlaneNormal(), v);
                  this.updateCompoundTransform();
                }
              }, {
                key: "setConstant",
                value: function setConstant(v) {
                  this.impl.setPlaneConstant(v);
                  this.updateCompoundTransform();
                }
              }, {
                key: "setScale",
                value: function setScale() {
                  _get(_getPrototypeOf(AmmoPlaneShape.prototype), "setScale", this).call(this);

                  cocos2AmmoVec3(this.scale, this._collider.node.worldScale);

                  this._btShape.setLocalScaling(this.scale);

                  this.updateCompoundTransform();
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._btShape;
                }
              }, {
                key: "collider",
                get: function get() {
                  return this._collider;
                }
              }]);

              function AmmoPlaneShape() {
                var _this;

                _classCallCheck(this, AmmoPlaneShape);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(AmmoPlaneShape).call(this, AmmoBroadphaseNativeTypes.STATIC_PLANE_PROXYTYPE));
                _this.NORMAL = void 0;
                _this.NORMAL = new Ammo$1.btVector3(0, 1, 0);
                _this._btShape = new Ammo$1.btStaticPlaneShape(_this.NORMAL, 0);
                return _this;
              }

              _createClass(AmmoPlaneShape, [{
                key: "onComponentSet",
                value: function onComponentSet() {
                  cocos2AmmoVec3(this.impl.getPlaneNormal(), this.collider.normal);
                  this.impl.setPlaneConstant(this.collider.constant);
                  this.setScale();
                }
              }, {
                key: "onDestroy",
                value: function onDestroy() {
                  _get(_getPrototypeOf(AmmoPlaneShape.prototype), "onDestroy", this).call(this);

                  Ammo$1.destroy(this.NORMAL);
                  ammoDeletePtr(this.NORMAL, Ammo$1.btVector3);
                  this.NORMAL = null;
                }
              }]);

              return AmmoPlaneShape;
            }(AmmoShape);

            var AmmoConstraint = /*#__PURE__*/function () {
              function AmmoConstraint() {
                _classCallCheck(this, AmmoConstraint);

                this.dirty = 0;
                this.index = -1;
                this._rigidBody = null;
                this._collided = false;
              }

              _createClass(AmmoConstraint, [{
                key: "setConnectedBody",
                value: function setConnectedBody(v) {// TODO: support dynamic change connected body
                }
              }, {
                key: "setEnableCollision",
                value: function setEnableCollision(v) {
                  if (this._collided != v) {
                    this._collided = v;
                    this.updateByReAdd();
                  }
                }
              }, {
                key: "updateByReAdd",
                value: function updateByReAdd() {
                  if (this._rigidBody && this.index >= 0) {
                    var sb = this._rigidBody.body.sharedBody;
                    sb.wrappedWorld.removeConstraint(this);
                    sb.wrappedWorld.addConstraint(this);
                  }
                }
              }, {
                key: "initialize",
                value: function initialize(v) {
                  this._com = v;
                  this._rigidBody = v.attachedBody;
                  this._collided = v.enableCollision;
                  this.onComponentSet();
                } // virtual

              }, {
                key: "onComponentSet",
                value: function onComponentSet() {}
              }, {
                key: "onLoad",
                value: function onLoad() {}
              }, {
                key: "onEnable",
                value: function onEnable() {
                  if (this._rigidBody) {
                    var sb = this._rigidBody.body.sharedBody;
                    sb.wrappedWorld.addConstraint(this);
                  }
                }
              }, {
                key: "onDisable",
                value: function onDisable() {
                  if (this._rigidBody) {
                    var sb = this._rigidBody.body.sharedBody;
                    sb.wrappedWorld.removeConstraint(this);
                  }
                }
              }, {
                key: "onDestroy",
                value: function onDestroy() {
                  Ammo$1.destroy(this._impl);
                  this._com = null;
                  this._rigidBody = null;
                  this._impl = null;
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._impl;
                }
              }, {
                key: "constraint",
                get: function get() {
                  return this._com;
                }
              }]);

              return AmmoConstraint;
            }();

            var AmmoPointToPointConstraint = /*#__PURE__*/function (_AmmoConstraint) {
              _inherits(AmmoPointToPointConstraint, _AmmoConstraint);

              function AmmoPointToPointConstraint() {
                _classCallCheck(this, AmmoPointToPointConstraint);

                return _possibleConstructorReturn(this, _getPrototypeOf(AmmoPointToPointConstraint).apply(this, arguments));
              }

              _createClass(AmmoPointToPointConstraint, [{
                key: "setPivotA",
                value: function setPivotA(v) {
                  if (this._pivotA) {
                    Vec3.multiply(CC_V3_0, v, this._com.node.worldScale);
                    cocos2AmmoVec3(this._pivotA, CC_V3_0);
                    this.impl.setPivotA(this._pivotA);
                  }
                }
              }, {
                key: "setPivotB",
                value: function setPivotB(v) {
                  Vec3.copy(CC_V3_0, v);
                  var cb = this._com.connectedBody;

                  if (cb) {
                    Vec3.multiply(CC_V3_0, v, cb.node.worldScale);
                  } else {
                    Vec3.add(CC_V3_0, CC_V3_0, this._com.node.worldPosition);
                    Vec3.multiply(CC_V3_1, this.constraint.pivotA, this._com.node.worldScale);
                    Vec3.add(CC_V3_0, CC_V3_0, CC_V3_1);
                  }

                  cocos2AmmoVec3(this._pivotB, CC_V3_0);
                  this.impl.setPivotB(this._pivotB);
                }
              }, {
                key: "onComponentSet",
                value: function onComponentSet() {
                  if (this._rigidBody) {
                    var bodyA = this._rigidBody.body.impl;
                    var cb = this.constraint.connectedBody;
                    var bodyB;

                    if (cb) {
                      bodyB = cb.body.impl;
                    }

                    this._pivotA = new Ammo$1.btVector3();
                    this._pivotB = new Ammo$1.btVector3();

                    if (bodyB) {
                      this._impl = new Ammo$1.btPoint2PointConstraint(bodyA, bodyB, this._pivotA, this._pivotB);
                    } else {
                      this._impl = new Ammo$1.btPoint2PointConstraint(bodyA, this._pivotA);
                    }

                    this.setPivotA(this.constraint.pivotA);
                    this.setPivotB(this.constraint.pivotB);
                  }
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._impl;
                }
              }, {
                key: "constraint",
                get: function get() {
                  return this._com;
                }
              }]);

              return AmmoPointToPointConstraint;
            }(AmmoConstraint);

            var AmmoHingeConstraint = /*#__PURE__*/function (_AmmoConstraint) {
              _inherits(AmmoHingeConstraint, _AmmoConstraint);

              function AmmoHingeConstraint() {
                _classCallCheck(this, AmmoHingeConstraint);

                return _possibleConstructorReturn(this, _getPrototypeOf(AmmoHingeConstraint).apply(this, arguments));
              }

              _createClass(AmmoHingeConstraint, [{
                key: "setPivotA",
                value: function setPivotA(v) {
                  if (this._pivotA) {
                    Vec3.multiply(CC_V3_0, v, this._com.node.worldScale);
                    cocos2AmmoVec3(this._pivotA, CC_V3_0); // this.impl.setPivotA(this._pivotA);
                  }
                }
              }, {
                key: "setPivotB",
                value: function setPivotB(v) {
                  if (this._pivotB) {
                    Vec3.copy(CC_V3_0, v);
                    var cb = this._com.connectedBody;

                    if (cb) {
                      Vec3.multiply(CC_V3_0, v, cb.node.worldScale);
                    }

                    cocos2AmmoVec3(this._pivotB, CC_V3_0); // this.impl.setPivotB(this._pivotB);
                  }
                }
              }, {
                key: "setAxisA",
                value: function setAxisA(v) {}
              }, {
                key: "setAxisB",
                value: function setAxisB(v) {}
              }, {
                key: "onComponentSet",
                value: function onComponentSet() {
                  if (this._rigidBody) {
                    var bodyA = this._rigidBody.body.impl;
                    var cb = this.constraint.connectedBody;
                    var bodyB;

                    if (cb) {
                      bodyB = cb.body.impl;
                    }

                    this._pivotA = new Ammo$1.btVector3();
                    this._pivotB = new Ammo$1.btVector3();
                    this.setPivotA(this.constraint.pivotA);
                    this.setPivotB(this.constraint.pivotB);
                    this._axisA = new Ammo$1.btVector3();
                    this._axisB = new Ammo$1.btVector3();
                    cocos2AmmoVec3(this._axisA, this.constraint.axisA);
                    cocos2AmmoVec3(this._axisB, this.constraint.axisB);

                    if (bodyB) {
                      this._impl = new Ammo$1.btHingeConstraint(bodyA, bodyB, this._pivotA, this._pivotB, this._axisA, this._axisB);
                    } else {
                      var quat = new Quat();
                      Quat.rotationTo(quat, Vec3.UNIT_Z, this.constraint.axisA);
                      var qa = new Ammo$1.btQuaternion(quat.x, quat.y, quat.z, quat.w);
                      var rbAFrame = new Ammo$1.btTransform();
                      rbAFrame.setIdentity();
                      rbAFrame.setOrigin(this._pivotA);
                      rbAFrame.setRotation(qa);
                      this._impl = new Ammo$1.btHingeConstraint(bodyA, rbAFrame);
                    }
                  }
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._impl;
                }
              }, {
                key: "constraint",
                get: function get() {
                  return this._com;
                }
              }]);

              return AmmoHingeConstraint;
            }(AmmoConstraint);

            removeProperty(AmmoCapsuleShape.prototype, 'shape.prototype', [{
              'name': 'setHeight',
              'suggest': 'You should use the interface provided by the component.'
            }]);
            replaceProperty(AmmoContactEquation.prototype, 'IContactEquation.prototype', [{
              'name': 'contactA',
              'newName': 'getLocalPointOnA',
              'customGetter': function customGetter() {
                var out = new Vec3();
                AmmoContactEquation.prototype.getLocalPointOnA.call(this, out);
                return out;
              }
            }, {
              'name': 'contactB',
              'newName': 'getLocalPointOnB',
              'customGetter': function customGetter() {
                var out = new Vec3();
                AmmoContactEquation.prototype.getLocalPointOnB.call(this, out);
                return out;
              }
            }, {
              'name': 'normal',
              'newName': 'getLocalNormalOnB',
              'customGetter': function customGetter() {
                var out = new Vec3();
                AmmoContactEquation.prototype.getLocalNormalOnB.call(this, out);
                return out;
              }
            }]);

            select('ammo.js', {
              PhysicsWorld: AmmoWorld,
              RigidBody: AmmoRigidBody,
              BoxShape: AmmoBoxShape,
              SphereShape: AmmoSphereShape,
              CapsuleShape: AmmoCapsuleShape,
              TrimeshShape: AmmoTrimeshShape,
              CylinderShape: AmmoCylinderShape,
              ConeShape: AmmoConeShape,
              TerrainShape: AmmoTerrainShape,
              SimplexShape: AmmoSimplexShape,
              PlaneShape: AmmoPlaneShape,
              PointToPointConstraint: AmmoPointToPointConstraint,
              HingeConstraint: AmmoHingeConstraint
            });

            /**
             * @hidden
             */
            // polyfill for wechat
            if (window.atob == null) {
              window.atob = function (input) {
                var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                var output = "";
                var chr1 = 0,
                    chr2 = 0,
                    chr3 = 0;
                var enc1 = 0,
                    enc2 = 0,
                    enc3 = 0,
                    enc4 = 0;
                var i = 0;
                input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

                do {
                  enc1 = keyStr.indexOf(input.charAt(i++));
                  enc2 = keyStr.indexOf(input.charAt(i++));
                  enc3 = keyStr.indexOf(input.charAt(i++));
                  enc4 = keyStr.indexOf(input.charAt(i++));
                  chr1 = enc1 << 2 | enc2 >> 4;
                  chr2 = (enc2 & 15) << 4 | enc3 >> 2;
                  chr3 = (enc3 & 3) << 6 | enc4;
                  output = output + String.fromCharCode(chr1);

                  if (enc3 !== 64) {
                    output = output + String.fromCharCode(chr2);
                  }

                  if (enc4 !== 64) {
                    output = output + String.fromCharCode(chr3);
                  }
                } while (i < input.length);

                return output;
              };
            }
            window.Ammo = Ammo$1; //polyfill config

            Ammo$1['CC_CONFIG'] = {
              'ignoreSelfBody': true,
              'emitStaticCollision': false
            };
            Ammo$1['CC_CACHE'] = {
              'btTriangleMesh': {
                'enable': false
              }
            };

        }
    };
});
