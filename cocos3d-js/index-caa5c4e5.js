System.register(['./deprecated-4ec15e5e.js', './deprecated-b99c04b5.js', './SubContextView-a8900bae.js', './component-event-handler-b65b5a5a.js'], function (exports) {
  'use strict';
  var bits, Vec2, v2, Vec3, v3, Vec4, v4, Quat, quat, Mat3, Mat4, mat4, AffineTransform, Size, size, Rect, rect, Color, color, EPSILON$2, equals, approx, clamp, clamp01, lerp, toRadian, toDegree, random, randomRange, randomRangeInt, pseudoRandom, pseudoRandomRange, pseudoRandomRangeInt, nextPow2, repeat$1, pingPong, inverseLerp, absMaxComponent, absMax, _createClass, _classCallCheck, _inherits, _possibleConstructorReturn, _getPrototypeOf, legacyCC, _get, ccclass, type, executeInEditMode, _applyDecoratedDescriptor, help, menu, tooltip, _initializerDefineProperty, _assertThisInitialized, editable, CCString, serializable, visible, _slicedToArray, _set, Enum, displayOrder, Component, slide, range, unit, removeProperty, replaceProperty, js, _float, warn, _createForOfIteratorHelperLoose, errorID, _typeof, ValueType, Asset, error, _toConsumableArray, getError, assertIsNonNullable, ccenum, remove, Eventify, createMap, contains, warnID, MutableForwardIterator, enums, distance, intersect, line, plane, ray, triangle, sphere, aabb, obb, frustum, Keyframe, AnimationCurve, ERaycastMode, ModelType, GFXBufferUsageBit, GFXMemoryUsageBit, UBOSkinningTexture, UniformJointTexture, UBOSkinningAnimation, samplerLib, jointTextureSamplerHash, INST_JOINT_ANIM_INFO, MorphModel, find, readMesh, createMesh, readBuffer, writeBuffer, mapBuffer, nt2lm, LightType, Light$1, Skeleton, Node, executionOrder, SkinningModel, MeshRenderer, GFXAttributeName, GFXFormat, GFXFormatInfos, Mesh, Material, override, getWorldTransformUntilRoot, GFXBufferTextureCopy, Texture2D, Filter, PixelFormat, GFXType, CameraProjection, CameraFOVAxis, CameraAperture, CameraShutter, CameraISO, SKYBOX_FLAG, GFXClearFlag, Layers, RenderTexture, TransformBit, CAMERA_DEFAULT_MASK, DirectionalLight$1, SpotLight$1, Pass, PropertyType, getDefaultFromType, builtinResMgr, TextureBase, isLerpable, WrapMode, ComponentPath, SkelAnimDataHub, CompactValueTypeArray, murmurhash2_32_gc, isPropertyPath, evaluatePath, WrappedInfo, WrapModeMask, HierarchyPath, getWorldMatrix, deleteTransform, getTransform, GFXTextureType, GFXTextureUsageBit, PipelineStateManager, SetIndex, DSPool, PassPool, PassView, ShaderPool, GFXCommandBufferType, GFXAddress, EventTouch, GFXCommandBuffer, SubModel, view, director, Director, Scheduler, System;
  return {
    setters: [function (module) {
      bits = module.G;
      Vec2 = module.H;
      v2 = module.I;
      Vec3 = module.V;
      v3 = module.J;
      Vec4 = module.K;
      v4 = module.L;
      Quat = module.Q;
      quat = module.N;
      Mat3 = module.O;
      Mat4 = module.M;
      mat4 = module.R;
      AffineTransform = module.S;
      Size = module.T;
      size = module.U;
      Rect = module.W;
      rect = module.X;
      Color = module.Y;
      color = module.Z;
      EPSILON$2 = module.$;
      equals = module.a0;
      approx = module.a1;
      clamp = module.k;
      clamp01 = module.a2;
      lerp = module.a3;
      toRadian = module.a4;
      toDegree = module.a5;
      random = module.a6;
      randomRange = module.a7;
      randomRangeInt = module.a8;
      pseudoRandom = module.a9;
      pseudoRandomRange = module.aa;
      pseudoRandomRangeInt = module.ab;
      nextPow2 = module.ac;
      repeat$1 = module.ad;
      pingPong = module.ae;
      inverseLerp = module.af;
      absMaxComponent = module.ag;
      absMax = module.ah;
      _createClass = module.j;
      _classCallCheck = module.d;
      _inherits = module.b;
      _possibleConstructorReturn = module.e;
      _getPrototypeOf = module.f;
      legacyCC = module.l;
      _get = module.aN;
      ccclass = module.c;
      type = module.t;
      executeInEditMode = module.b1;
      _applyDecoratedDescriptor = module._;
      help = module.h;
      menu = module.m;
      tooltip = module.a;
      _initializerDefineProperty = module.g;
      _assertThisInitialized = module.i;
      editable = module.F;
      CCString = module.ax;
      serializable = module.s;
      visible = module.b5;
      _slicedToArray = module.bD;
      _set = module.bE;
      Enum = module.aj;
      displayOrder = module.b2;
      Component = module.C;
      slide = module.bw;
      range = module.r;
      unit = module.bF;
      removeProperty = module.ap;
      replaceProperty = module.ao;
      js = module.n;
      _float = module.ba;
      warn = module.w;
      _createForOfIteratorHelperLoose = module.D;
      errorID = module.y;
      _typeof = module.aY;
      ValueType = module.ak;
      Asset = module.aC;
      error = module.p;
      _toConsumableArray = module.aQ;
      getError = module.aZ;
      assertIsNonNullable = module.aP;
      ccenum = module.E;
      remove = module.bG;
      Eventify = module.aA;
      createMap = module.bk;
      contains = module.bH;
      warnID = module.x;
      MutableForwardIterator = module.bz;
    }, function (module) {
      enums = module.dt;
      distance = module.du;
      intersect = module.dv;
      line = module.dw;
      plane = module.dx;
      ray = module.dy;
      triangle = module.dz;
      sphere = module.dA;
      aabb = module.dB;
      obb = module.dC;
      frustum = module.dD;
      Keyframe = module.dE;
      AnimationCurve = module.dF;
      ERaycastMode = module.dG;
      ModelType = module.U;
      GFXBufferUsageBit = module.h;
      GFXMemoryUsageBit = module.i;
      UBOSkinningTexture = module.dH;
      UniformJointTexture = module.dI;
      UBOSkinningAnimation = module.dJ;
      samplerLib = module.an;
      jointTextureSamplerHash = module.l;
      INST_JOINT_ANIM_INFO = module.dK;
      MorphModel = module.r;
      find = module.cZ;
      readMesh = module.dL;
      createMesh = module.aA;
      readBuffer = module.dM;
      writeBuffer = module.dN;
      mapBuffer = module.dO;
      nt2lm = module.Q;
      LightType = module.P;
      Light$1 = module.T;
      Skeleton = module.b5;
      Node = module.cW;
      executionOrder = module.dd;
      SkinningModel = module.S;
      MeshRenderer = module.as;
      GFXAttributeName = module.G;
      GFXFormat = module.f;
      GFXFormatInfos = module.c7;
      Mesh = module.at;
      Material = module.b3;
      override = module.dP;
      getWorldTransformUntilRoot = module.d6;
      GFXBufferTextureCopy = module.c3;
      Texture2D = module.aY;
      Filter = module.dQ;
      PixelFormat = module.df;
      GFXType = module.bw;
      CameraProjection = module.D;
      CameraFOVAxis = module.B;
      CameraAperture = module.E;
      CameraShutter = module.H;
      CameraISO = module.F;
      SKYBOX_FLAG = module.I;
      GFXClearFlag = module.b_;
      Layers = module.cY;
      RenderTexture = module.b6;
      TransformBit = module.dR;
      CAMERA_DEFAULT_MASK = module.dS;
      DirectionalLight$1 = module.N;
      SpotLight$1 = module.a1;
      Pass = module.ai;
      PropertyType = module.a5;
      getDefaultFromType = module.af;
      builtinResMgr = module.d2;
      TextureBase = module.de;
      isLerpable = module.dT;
      WrapMode = module.dU;
      ComponentPath = module.ay;
      SkelAnimDataHub = module.d4;
      CompactValueTypeArray = module.aP;
      murmurhash2_32_gc = module.aI;
      isPropertyPath = module.av;
      evaluatePath = module.az;
      WrappedInfo = module.dV;
      WrapModeMask = module.dW;
      HierarchyPath = module.ax;
      getWorldMatrix = module.o;
      deleteTransform = module.q;
      getTransform = module.p;
      GFXTextureType = module.bJ;
      GFXTextureUsageBit = module.bK;
      PipelineStateManager = module.dX;
      SetIndex = module.dm;
      DSPool = module.dl;
      PassPool = module.dn;
      PassView = module.dp;
      ShaderPool = module.dY;
      GFXCommandBufferType = module.bP;
      GFXAddress = module.bI;
      EventTouch = module.bc;
      GFXCommandBuffer = module.bp;
      SubModel = module.a2;
    }, function (module) {
      view = module.v;
    }, function (module) {
      director = module.d;
      Director = module.D;
      Scheduler = module.S;
      System = module.a;
    }],
    execute: function () {

      exports({
        F: sampleAnimationCurve,
        G: computeRatioByType,
        r: isPropertyModifier,
        s: isElementModifier,
        t: isCustomTargetModifier,
        x: bezier,
        y: bezierByTime
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

      var math = /*#__PURE__*/Object.freeze({
        __proto__: null,
        bits: bits,
        Vec2: Vec2,
        v2: v2,
        Vec3: Vec3,
        v3: v3,
        Vec4: Vec4,
        v4: v4,
        Quat: Quat,
        quat: quat,
        Mat3: Mat3,
        Mat4: Mat4,
        mat4: mat4,
        AffineTransform: AffineTransform,
        Size: Size,
        size: size,
        Rect: Rect,
        rect: rect,
        Color: Color,
        color: color,
        EPSILON: EPSILON$2,
        equals: equals,
        approx: approx,
        clamp: clamp,
        clamp01: clamp01,
        lerp: lerp,
        toRadian: toRadian,
        toDegree: toDegree,
        random: random,
        randomRange: randomRange,
        randomRangeInt: randomRangeInt,
        pseudoRandom: pseudoRandom,
        pseudoRandomRange: pseudoRandomRange,
        pseudoRandomRangeInt: pseudoRandomRangeInt,
        nextPow2: nextPow2,
        repeat: repeat$1,
        pingPong: pingPong,
        inverseLerp: inverseLerp,
        absMaxComponent: absMaxComponent,
        absMax: absMax
      });
      exports('m', math);

      /**
       * @en
       * Basic Geometry: capsule.
       * @zh
       * 基础几何，胶囊体。
       */
      var capsule = exports('Q', /*#__PURE__*/function () {
        _createClass(capsule, [{
          key: "type",

          /**
           * @en
           * Gets the type of the shape.
           * @zh
           * 获取形状的类型。
           */
          get: function get() {
            return this._type;
          }
        }]);

        function capsule() {
          var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
          var halfHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
          var axis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

          _classCallCheck(this, capsule);

          this._type = void 0;
          this.radius = void 0;
          this.halfHeight = void 0;
          this.axis = void 0;
          this.center = void 0;
          this.rotation = void 0;
          this.ellipseCenter0 = void 0;
          this.ellipseCenter1 = void 0;
          this._type = enums.SHAPE_CAPSULE;
          this.radius = radius;
          this.halfHeight = halfHeight;
          this.axis = axis;
          this.center = new Vec3();
          this.rotation = new Quat();
          this.ellipseCenter0 = new Vec3(0, halfHeight, 0);
          this.ellipseCenter1 = new Vec3(0, -halfHeight, 0);
          this.updateCache();
        }
        /**
         * @en
         * Transform this capsule.
         * @zh
         * 变换此胶囊体。
         */


        _createClass(capsule, [{
          key: "transform",
          value: function transform(m, pos, rot, scale, out) {
            var ws = scale;
            var s = absMaxComponent(ws);
            out.radius = this.radius * Math.abs(s);
            var halfTotalWorldHeight = (this.halfHeight + this.radius) * Math.abs(ws.y);
            var halfWorldHeight = halfTotalWorldHeight - out.radius;
            if (halfWorldHeight < 0) halfWorldHeight = 0;
            out.halfHeight = halfWorldHeight;
            Vec3.transformMat4(out.center, this.center, m);
            Quat.multiply(out.rotation, this.rotation, rot);
            out.updateCache();
          }
        }, {
          key: "updateCache",
          value: function updateCache() {
            this.updateLocalCenter();
            Vec3.transformQuat(this.ellipseCenter0, this.ellipseCenter0, this.rotation);
            Vec3.transformQuat(this.ellipseCenter1, this.ellipseCenter1, this.rotation);
            this.ellipseCenter0.add(this.center);
            this.ellipseCenter1.add(this.center);
          }
        }, {
          key: "updateLocalCenter",
          value: function updateLocalCenter() {
            var halfHeight = this.halfHeight;
            var axis = this.axis;

            switch (axis) {
              case 0:
                this.ellipseCenter0.set(halfHeight, 0, 0);
                this.ellipseCenter1.set(-halfHeight, 0, 0);
                break;

              case 1:
                this.ellipseCenter0.set(0, halfHeight, 0);
                this.ellipseCenter1.set(0, -halfHeight, 0);
                break;

              case 2:
                this.ellipseCenter0.set(0, 0, halfHeight);
                this.ellipseCenter1.set(0, 0, -halfHeight);
                break;
            }
          }
        }]);

        return capsule;
      }());

      /**
       * @category geometry
       */

      var geometry = /*#__PURE__*/Object.freeze({
        __proto__: null,
        distance: distance,
        enums: enums,
        intersect: intersect,
        line: line,
        plane: plane,
        ray: ray,
        triangle: triangle,
        sphere: sphere,
        aabb: aabb,
        obb: obb,
        capsule: capsule,
        frustum: frustum,
        Keyframe: Keyframe,
        AnimationCurve: AnimationCurve,
        get ERaycastMode () { return ERaycastMode; }
      });
      exports('g', geometry);

      var myPatches = [{
        name: 'CC_USE_SKINNING',
        value: true
      }, {
        name: 'CC_USE_BAKED_ANIMATION',
        value: true
      }];
      /**
       * @en
       * The skinning model that is using baked animation.
       * @zh
       * 预烘焙动画的蒙皮模型。
       */

      var BakedSkinningModel = exports('B', /*#__PURE__*/function (_MorphModel) {
        _inherits(BakedSkinningModel, _MorphModel);

        // uninitialized
        function BakedSkinningModel() {
          var _this;

          _classCallCheck(this, BakedSkinningModel);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(BakedSkinningModel).call(this));
          _this.uploadedAnim = undefined;
          _this._jointsMedium = void 0;
          _this._skeleton = null;
          _this._mesh = null;
          _this._dataPoolManager = void 0;
          _this._instAnimInfoIdx = -1;
          _this.type = ModelType.BAKED_SKINNING;
          _this._dataPoolManager = legacyCC.director.root.dataPoolManager;
          var jointTextureInfo = new Float32Array(4);

          var animInfo = _this._dataPoolManager.jointAnimationInfo.getData();

          _this._jointsMedium = {
            buffer: null,
            jointTextureInfo: jointTextureInfo,
            animInfo: animInfo,
            texture: null,
            boundsInfo: null
          };
          return _this;
        }

        _createClass(BakedSkinningModel, [{
          key: "destroy",
          value: function destroy() {
            this.uploadedAnim = undefined; // uninitialized

            this._jointsMedium.boundsInfo = null;

            if (this._jointsMedium.buffer) {
              this._jointsMedium.buffer.destroy();

              this._jointsMedium.buffer = null;
            }

            this._applyJointTexture();

            _get(_getPrototypeOf(BakedSkinningModel.prototype), "destroy", this).call(this);
          }
        }, {
          key: "bindSkeleton",
          value: function bindSkeleton() {
            var skeleton = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var skinningRoot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var mesh = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            this._skeleton = skeleton;
            this._mesh = mesh;

            if (!skeleton || !skinningRoot || !mesh) {
              return;
            }

            this.transform = skinningRoot;
            var resMgr = this._dataPoolManager;
            this._jointsMedium.animInfo = resMgr.jointAnimationInfo.getData(skinningRoot.uuid);

            if (!this._jointsMedium.buffer) {
              this._jointsMedium.buffer = this._device.createBuffer({
                usage: GFXBufferUsageBit.UNIFORM | GFXBufferUsageBit.TRANSFER_DST,
                memUsage: GFXMemoryUsageBit.HOST | GFXMemoryUsageBit.DEVICE,
                size: UBOSkinningTexture.SIZE,
                stride: UBOSkinningTexture.SIZE
              });
            }
          }
        }, {
          key: "updateTransform",
          value: function updateTransform(stamp) {
            _get(_getPrototypeOf(BakedSkinningModel.prototype), "updateTransform", this).call(this, stamp);

            if (!this.uploadedAnim) {
              return;
            }

            var _this$_jointsMedium = this._jointsMedium,
                animInfo = _this$_jointsMedium.animInfo,
                boundsInfo = _this$_jointsMedium.boundsInfo;
            var skelBound = boundsInfo[animInfo.data[0]];
            var node = this.transform;

            if (this._worldBounds && skelBound) {
              // @ts-ignore TS2339
              skelBound.transform(node._mat, node._pos, node._rot, node._scale, this._worldBounds);
            }
          } // update fid buffer only when visible

        }, {
          key: "updateUBOs",
          value: function updateUBOs(stamp) {
            _get(_getPrototypeOf(BakedSkinningModel.prototype), "updateUBOs", this).call(this, stamp);

            var info = this._jointsMedium.animInfo;
            var idx = this._instAnimInfoIdx;

            if (idx >= 0) {
              var view = this.instancedAttributes.list[idx].view;
              view[0] = info.data[0];
            } else if (info.dirty) {
              info.buffer.update(info.data);
              info.dirty = false;
            }

            return true;
          }
        }, {
          key: "createBoundingShape",
          value: function createBoundingShape(minPos, maxPos) {
            if (!minPos || !maxPos) {
              return;
            }

            this._worldBounds = new aabb();
          }
        }, {
          key: "uploadAnimation",
          value: function uploadAnimation(anim) {
            if (!this._skeleton || !this._mesh || this.uploadedAnim === anim) {
              return;
            }

            this.uploadedAnim = anim;
            var resMgr = this._dataPoolManager;
            var texture = null;

            if (anim) {
              texture = resMgr.jointTexturePool.getSequencePoseTexture(this._skeleton, anim, this._mesh, this.transform);
              this._jointsMedium.boundsInfo = texture && texture.bounds.get(this._mesh.hash);
              this._modelBounds = null; // don't calc bounds again in Model
            } else {
              texture = resMgr.jointTexturePool.getDefaultPoseTexture(this._skeleton, this._mesh, this.transform);
              this._jointsMedium.boundsInfo = null;
              this._modelBounds = texture && texture.bounds.get(this._mesh.hash)[0];
            }

            this._applyJointTexture(texture);
          }
        }, {
          key: "_applyJointTexture",
          value: function _applyJointTexture() {
            var texture = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var oldTex = this._jointsMedium.texture;

            if (oldTex && oldTex !== texture) {
              this._dataPoolManager.jointTexturePool.releaseHandle(oldTex);
            }

            this._jointsMedium.texture = texture;

            if (!texture) {
              return;
            }

            var _this$_jointsMedium2 = this._jointsMedium,
                buffer = _this$_jointsMedium2.buffer,
                jointTextureInfo = _this$_jointsMedium2.jointTextureInfo;
            jointTextureInfo[0] = texture.handle.texture.width;
            jointTextureInfo[1] = this._skeleton.joints.length;
            jointTextureInfo[2] = texture.pixelOffset + 0.1; // guard against floor() underflow

            jointTextureInfo[3] = 1 / jointTextureInfo[0];
            this.updateInstancedJointTextureInfo();

            if (buffer) {
              buffer.update(jointTextureInfo);
            }

            var tex = texture.handle.texture;

            for (var i = 0; i < this._subModels.length; ++i) {
              var descriptorSet = this._subModels[i].descriptorSet;
              descriptorSet.bindTexture(UniformJointTexture.binding, tex);
            }
          }
        }, {
          key: "getMacroPatches",
          value: function getMacroPatches(subModelIndex) {
            var patches = _get(_getPrototypeOf(BakedSkinningModel.prototype), "getMacroPatches", this).call(this, subModelIndex);

            return patches ? patches.concat(myPatches) : myPatches;
          }
        }, {
          key: "_updateLocalDescriptors",
          value: function _updateLocalDescriptors(submodelIdx, descriptorSet) {
            _get(_getPrototypeOf(BakedSkinningModel.prototype), "_updateLocalDescriptors", this).call(this, submodelIdx, descriptorSet);

            var _this$_jointsMedium3 = this._jointsMedium,
                buffer = _this$_jointsMedium3.buffer,
                texture = _this$_jointsMedium3.texture,
                animInfo = _this$_jointsMedium3.animInfo;
            descriptorSet.bindBuffer(UBOSkinningTexture.BLOCK.binding, buffer);
            descriptorSet.bindBuffer(UBOSkinningAnimation.BLOCK.binding, animInfo.buffer);

            if (texture) {
              var sampler = samplerLib.getSampler(this._device, jointTextureSamplerHash);
              descriptorSet.bindTexture(UniformJointTexture.binding, texture.handle.texture);
              descriptorSet.bindSampler(UniformJointTexture.binding, sampler);
            }
          }
        }, {
          key: "_updateInstancedAttributes",
          value: function _updateInstancedAttributes(attributes, pass) {
            _get(_getPrototypeOf(BakedSkinningModel.prototype), "_updateInstancedAttributes", this).call(this, attributes, pass);

            this._instAnimInfoIdx = this._getInstancedAttributeIndex(INST_JOINT_ANIM_INFO);
            this.updateInstancedJointTextureInfo();
          }
        }, {
          key: "updateInstancedJointTextureInfo",
          value: function updateInstancedJointTextureInfo() {
            var _this$_jointsMedium4 = this._jointsMedium,
                jointTextureInfo = _this$_jointsMedium4.jointTextureInfo,
                animInfo = _this$_jointsMedium4.animInfo;
            var idx = this._instAnimInfoIdx;

            if (idx >= 0) {
              // update instancing data too
              var view = this.instancedAttributes.list[idx].view;
              view[0] = animInfo.data[0];
              view[1] = jointTextureInfo[1];
              view[2] = jointTextureInfo[2];
            }
          }
        }]);

        return BakedSkinningModel;
      }(MorphModel));

      /**
       * save a color buffer to a PPM file
       */
      function toPPM(buffer, w, h) {
        return "P3 ".concat(w, " ").concat(h, " 255\n").concat(buffer.filter(function (e, i) {
          return i % 4 < 3;
        }).toString(), "\n");
      }

      var utils = /*#__PURE__*/Object.freeze({
        __proto__: null,
        find: find,
        toPPM: toPPM,
        readMesh: readMesh,
        createMesh: createMesh,
        readBuffer: readBuffer,
        writeBuffer: writeBuffer,
        mapBuffer: mapBuffer
      });
      exports('u', utils);

      var SphereLight = exports('S', /*#__PURE__*/function (_Light) {
        _inherits(SphereLight, _Light);

        _createClass(SphereLight, [{
          key: "position",
          get: function get() {
            return this._pos;
          }
        }, {
          key: "size",
          set: function set(size) {
            this._size = size;
          },
          get: function get() {
            return this._size;
          }
        }, {
          key: "range",
          set: function set(range) {
            this._range = range;
            this._needUpdate = true;
          },
          get: function get() {
            return this._range;
          }
        }, {
          key: "luminance",
          set: function set(lum) {
            this._luminance = lum;
          },
          get: function get() {
            return this._luminance;
          }
        }, {
          key: "aabb",
          get: function get() {
            return this._aabb;
          }
        }]);

        function SphereLight() {
          var _this;

          _classCallCheck(this, SphereLight);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(SphereLight).call(this));
          _this._needUpdate = false;
          _this._size = 0.15;
          _this._range = 1.0;
          _this._luminance = 1700 / nt2lm(_this._size);
          _this._pos = void 0;
          _this._aabb = void 0;
          _this._type = LightType.SPHERE;
          _this._aabb = aabb.create();
          _this._pos = new Vec3();
          return _this;
        }

        _createClass(SphereLight, [{
          key: "update",
          value: function update() {
            if (this._node && (this._node.hasChangedFlags || this._needUpdate)) {
              this._node.getWorldPosition(this._pos);

              aabb.set(this._aabb, this._pos.x, this._pos.y, this._pos.z, this._range, this._range, this._range);
              this._needUpdate = false;
            }
          }
        }]);

        return SphereLight;
      }(Light$1));

      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _temp;
      /**
       * @en The skinned mesh renderer component.
       * @zh 蒙皮网格渲染器组件。
       */

      var SkinnedMeshRenderer = exports('h', (_dec = ccclass('cc.SkinnedMeshRenderer'), _dec2 = help(), _dec3 = executionOrder(100), _dec4 = menu(), _dec5 = type(Skeleton), _dec6 = type(Node), _dec7 = type(Skeleton), _dec8 = type(Node), _dec9 = tooltip(), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = _dec4(_class = (_class2 = (_temp = /*#__PURE__*/function (_MeshRenderer) {
        _inherits(SkinnedMeshRenderer, _MeshRenderer);

        _createClass(SkinnedMeshRenderer, [{
          key: "skeleton",

          /**
           * @en The skeleton asset.
           * @zh 骨骼资源。
           */
          get: function get() {
            return this._skeleton;
          },
          set: function set(val) {
            if (val === this._skeleton) {
              return;
            }

            this._skeleton = val;

            this._update();
          }
          /**
           * @en The skinning root. (The node where the controlling Animation is located)
           * 骨骼根节点的引用，对应控制此模型的动画组件所在节点。
           */

        }, {
          key: "skinningRoot",
          get: function get() {
            return this._skinningRoot;
          },
          set: function set(value) {
            if (value === this._skinningRoot) {
              return;
            }

            this._skinningRoot = value;

            this._updateModelType();

            this._update();
          }
        }, {
          key: "model",
          get: function get() {
            return this._model;
          }
        }]);

        function SkinnedMeshRenderer() {
          var _this;

          _classCallCheck(this, SkinnedMeshRenderer);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(SkinnedMeshRenderer).call(this));

          _initializerDefineProperty(_this, "_skeleton", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_skinningRoot", _descriptor2, _assertThisInitialized(_this));

          _this._clip = null;
          _this._modelType = BakedSkinningModel;
          return _this;
        }

        _createClass(SkinnedMeshRenderer, [{
          key: "__preload",
          value: function __preload() {
            this._updateModelType();
          }
        }, {
          key: "uploadAnimation",
          value: function uploadAnimation(clip) {
            this._clip = clip;

            if (this.model && this.model.uploadAnimation) {
              this.model.uploadAnimation(clip);
            }
          }
        }, {
          key: "setUseBakedAnimation",
          value: function setUseBakedAnimation() {
            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var modelType = val ? BakedSkinningModel : SkinningModel;

            if (this._modelType === modelType) {
              return;
            }

            this._modelType = modelType;

            if (this._model) {
              legacyCC.director.root.destroyModel(this._model);
              this._model = null;
              this._models.length = 0;

              this._updateModels();

              this._updateCastShadow();

              if (this.enabledInHierarchy) {
                this._attachToScene();
              }
            }
          }
        }, {
          key: "setMaterial",
          value: function setMaterial(material, index) {
            _get(_getPrototypeOf(SkinnedMeshRenderer.prototype), "setMaterial", this).call(this, material, index);

            if (this._modelType === SkinningModel) {
              this.getMaterialInstance(index);
            }
          }
        }, {
          key: "_updateModelParams",
          value: function _updateModelParams() {
            this._update(); // should bind skeleton before super create pso


            _get(_getPrototypeOf(SkinnedMeshRenderer.prototype), "_updateModelParams", this).call(this);
          }
        }, {
          key: "_updateModelType",
          value: function _updateModelType() {
            if (!this._skinningRoot) {
              return;
            }

            var comp = this._skinningRoot.getComponent('cc.SkeletalAnimation');

            if (comp) {
              this.setUseBakedAnimation(comp.useBakedAnimation);
            }
          }
        }, {
          key: "_update",
          value: function _update() {
            if (this.model) {
              this.model.bindSkeleton(this._skeleton, this._skinningRoot, this._mesh);

              if (this.model.uploadAnimation) {
                this.model.uploadAnimation(this._clip);
              }
            }
          }
        }]);

        return SkinnedMeshRenderer;
      }(MeshRenderer), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_skeleton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_skinningRoot", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "skeleton", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "skeleton"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "skinningRoot", [_dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "skinningRoot"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class));

      var _dec$1, _dec2$1, _dec3$1, _dec4$1, _dec5$1, _class$1, _class2$1, _descriptor$1, _descriptor2$1, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp$1, _dec6$1, _dec7$1, _dec8$1, _dec9$1, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class4, _class5, _descriptor7, _descriptor8, _descriptor9, _temp2;

      var repeat = function repeat(n) {
        return n - Math.floor(n);
      };

      var batch_id = {
        name: GFXAttributeName.ATTR_BATCH_ID,
        format: GFXFormat.R32F,
        isNormalized: false
      };
      var batch_uv = {
        name: GFXAttributeName.ATTR_BATCH_UV,
        format: GFXFormat.RG32F,
        isNormalized: false
      };
      var batch_extras_size = GFXFormatInfos[batch_id.format].size + GFXFormatInfos[batch_uv.format].size;
      var SkinnedMeshUnit = exports('j', (_dec$1 = ccclass('cc.SkinnedMeshUnit'), _dec2$1 = type(Mesh), _dec3$1 = type(Skeleton), _dec4$1 = type(Material), _dec5$1 = type(SkinnedMeshRenderer), _dec$1(_class$1 = (_class2$1 = (_temp$1 = /*#__PURE__*/function () {
        function SkinnedMeshUnit() {
          _classCallCheck(this, SkinnedMeshUnit);

          _initializerDefineProperty(this, "mesh", _descriptor$1, this);

          _initializerDefineProperty(this, "skeleton", _descriptor2$1, this);

          _initializerDefineProperty(this, "material", _descriptor3, this);

          _initializerDefineProperty(this, "_localTransform", _descriptor4, this);

          _initializerDefineProperty(this, "_offset", _descriptor5, this);

          _initializerDefineProperty(this, "_size", _descriptor6, this);
        }

        _createClass(SkinnedMeshUnit, [{
          key: "offset",

          /**
           * @en UV offset on texture atlas.
           * @zh 在图集中的 uv 坐标偏移。
           */
          set: function set(offset) {
            Vec2.copy(this._offset, offset);
          },
          get: function get() {
            return this._offset;
          }
          /**
           * @en UV extent on texture atlas.
           * @zh 在图集中占的 UV 尺寸。
           */

        }, {
          key: "size",
          set: function set(size) {
            Vec2.copy(this._size, size);
          },
          get: function get() {
            return this._size;
          }
          /**
           * @en Convenient setter, copying all necessary information from target [[SkinnedMeshRenderer]] component.
           * @zh 复制目标 [[SkinnedMeshRenderer]] 的所有属性到本单元，方便快速配置。
           */

        }, {
          key: "copyFrom",
          set: function set(comp) {
            if (!comp) {
              return;
            }

            this.mesh = comp.mesh;
            this.skeleton = comp.skeleton;
            this.material = comp.getMaterial(0);

            if (comp.skinningRoot) {
              getWorldTransformUntilRoot(comp.node, comp.skinningRoot, this._localTransform);
            }
          },
          get: function get() {
            return null;
          }
        }]);

        return SkinnedMeshUnit;
      }(), _temp$1), (_descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "mesh", [_dec2$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$1.prototype, "skeleton", [_dec3$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2$1.prototype, "material", [_dec4$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2$1.prototype, "_localTransform", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Mat4();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2$1.prototype, "_offset", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(0, 0);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2$1.prototype, "_size", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(1, 1);
        }
      }), _applyDecoratedDescriptor(_class2$1.prototype, "offset", [editable], Object.getOwnPropertyDescriptor(_class2$1.prototype, "offset"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "size", [editable], Object.getOwnPropertyDescriptor(_class2$1.prototype, "size"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "copyFrom", [_dec5$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "copyFrom"), _class2$1.prototype)), _class2$1)) || _class$1));
      var m4_local = new Mat4();
      var m4_1 = new Mat4();
      var v3_1 = new Vec3();
      /**
       * @en The skinned mesh batch renderer component, batches multiple skeleton-sharing [[SkinnedMeshRenderer]].
       * @zh 蒙皮模型合批组件，用于合并绘制共享同一骨骼资源的所有蒙皮网格。
       */

      var SkinnedMeshBatchRenderer = exports('i', (_dec6$1 = ccclass('cc.SkinnedMeshBatchRenderer'), _dec7$1 = help(), _dec8$1 = executionOrder(100), _dec9$1 = menu(), _dec10 = tooltip(), _dec11 = type([CCString]), _dec12 = tooltip(), _dec13 = type([SkinnedMeshUnit]), _dec14 = tooltip(), _dec15 = visible(), _dec16 = visible(), _dec6$1(_class4 = _dec7$1(_class4 = _dec8$1(_class4 = executeInEditMode(_class4 = _dec9$1(_class4 = (_class5 = (_temp2 = /*#__PURE__*/function (_SkinnedMeshRenderer) {
        _inherits(SkinnedMeshBatchRenderer, _SkinnedMeshRenderer);

        function SkinnedMeshBatchRenderer() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, SkinnedMeshBatchRenderer);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SkinnedMeshBatchRenderer)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "atlasSize", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "batchableTextureNames", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "units", _descriptor9, _assertThisInitialized(_this));

          _this._textures = {};
          _this._batchMaterial = null;
          return _this;
        }

        _createClass(SkinnedMeshBatchRenderer, [{
          key: "onLoad",
          value: function onLoad() {
            _get(_getPrototypeOf(SkinnedMeshBatchRenderer.prototype), "onLoad", this).call(this);

            this.cook();
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            for (var tex in this._textures) {
              this._textures[tex].destroy();
            }

            this._textures = {};

            if (this._mesh) {
              this._mesh.destroy();

              this._mesh = null;
            }

            _get(_getPrototypeOf(SkinnedMeshBatchRenderer.prototype), "onDestroy", this).call(this);
          }
        }, {
          key: "_onMaterialModified",
          value: function _onMaterialModified(idx, material) {
            this.cookMaterials();

            _get(_getPrototypeOf(SkinnedMeshBatchRenderer.prototype), "_onMaterialModified", this).call(this, idx, this.getMaterialInstance(idx));
          }
        }, {
          key: "cook",
          value: function cook() {
            this.cookMaterials();
            this.cookSkeletons();
            this.cookMeshes();
          }
        }, {
          key: "cookMaterials",
          value: function cookMaterials() {
            var _this2 = this;

            if (!this._batchMaterial) {
              this._batchMaterial = this.getMaterial(0);
            }

            var mat = this.getMaterialInstance(0);

            if (!mat || !this._batchMaterial || !this._batchMaterial.effectAsset) {
              console.warn('incomplete batch material!');
              return;
            }

            mat.copy(this._batchMaterial);
            this.resizeAtlases();
            var tech = mat.effectAsset.techniques[mat.technique];

            var _loop = function _loop(i) {
              var pass = tech.passes[i];

              if (!pass.properties) {
                return "continue";
              }

              var _loop2 = function _loop2(prop) {
                if (pass.properties[prop].type >= GFXType.SAMPLER1D) {
                  // samplers
                  var tex = null;

                  if (_this2.batchableTextureNames.find(function (n) {
                    return n === prop;
                  })) {
                    tex = _this2._textures[prop];

                    if (!tex) {
                      tex = _this2.createTexture(prop);
                    }

                    _this2.cookTextures(tex, prop, i);
                  } else {
                    _this2.units.some(function (u) {
                      return tex = u.material && u.material.getProperty(prop, i);
                    });
                  }

                  if (tex) {
                    mat.setProperty(prop, tex, i);
                  }
                } else {
                  // vectors
                  var value = [];

                  for (var u = 0; u < _this2.units.length; u++) {
                    var unit = _this2.units[u];

                    if (!unit.material) {
                      continue;
                    }

                    value.push(unit.material.getProperty(prop.slice(0, -3), i));
                  }

                  mat.setProperty(prop, value, i);
                }
              };

              for (var prop in pass.properties) {
                _loop2(prop);
              }
            };

            for (var i = 0; i < tech.passes.length; i++) {
              var _ret = _loop(i);

              if (_ret === "continue") continue;
            }
          }
        }, {
          key: "cookSkeletons",
          value: function cookSkeletons() {

            if (!this._skinningRoot) {
              console.warn('no skinning root specified!');
              return;
            } // merge joints accordingly


            var joints = [];
            var bindposes = [];

            for (var u = 0; u < this.units.length; u++) {
              var unit = this.units[u];

              if (!unit || !unit.skeleton) {
                continue;
              }

              var partial = unit.skeleton;
              Mat4.invert(m4_local, unit._localTransform);

              var _loop3 = function _loop3(i) {
                var path = partial.joints[i];
                var idx = joints.findIndex(function (p) {
                  return p === path;
                });

                if (idx >= 0) {

                  return "continue";
                }

                joints.push(path); // cancel out local transform

                bindposes.push(Mat4.multiply(new Mat4(), partial.bindposes[i] || Mat4.IDENTITY, m4_local));
              };

              for (var i = 0; i < partial.joints.length; i++) {
                var _ret2 = _loop3(i);

                if (_ret2 === "continue") continue;
              }
            } // sort the array to be more cache-friendly


            var idxMap = Array.from(Array(joints.length).keys()).sort(function (a, b) {
              if (joints[a] > joints[b]) {
                return 1;
              }

              if (joints[a] < joints[b]) {
                return -1;
              }

              return 0;
            });
            var skeleton = new Skeleton();
            skeleton.joints = joints.map(function (_, idx, arr) {
              return arr[idxMap[idx]];
            });
            skeleton.bindposes = bindposes.map(function (_, idx, arr) {
              return arr[idxMap[idx]];
            }); // apply

            if (this._skeleton) {
              this._skeleton.destroy();
            }

            this.skeleton = skeleton;
          }
        }, {
          key: "cookMeshes",
          value: function cookMeshes() {
            var _this4 = this;

            var isValid = false;

            for (var u = 0; u < this.units.length; u++) {
              var unit = this.units[u];

              if (unit.mesh) {
                isValid = true;
                break;
              }
            }

            if (!isValid || !this._skinningRoot) {
              return;
            }

            if (this._mesh) {
              this._mesh.destroyRenderingMesh();
            } else {
              this._mesh = new Mesh();
            }

            var posOffset = 0;
            var posFormat = GFXFormat.UNKNOWN;
            var normalOffset = 0;
            var normalFormat = GFXFormat.UNKNOWN;
            var tangentOffset = 0;
            var tangentFormat = GFXFormat.UNKNOWN;
            var uvOffset = 0;
            var uvFormat = GFXFormat.UNKNOWN;
            var jointOffset = 0;
            var jointFormat = GFXFormat.UNKNOWN; // prepare joint index map

            var jointIndexMap = new Array(this.units.length);
            var unitLen = this.units.length;

            for (var i = 0; i < unitLen; i++) {
              var _unit = this.units[i];

              if (!_unit || !_unit.skeleton) {
                continue;
              }

              jointIndexMap[i] = _unit.skeleton.joints.map(function (j) {
                return _this4._skeleton.joints.findIndex(function (ref) {
                  return j === ref;
                });
              });
            }

            var _loop4 = function _loop4(_i) {
              var unit = _this4.units[_i];

              if (!unit || !unit.mesh || !unit.mesh.data) {
                return "continue";
              }

              var newMesh = _this4._createUnitMesh(_i, unit.mesh);

              var dataView = new DataView(newMesh.data.buffer);
              Mat4.inverseTranspose(m4_local, unit._localTransform);
              var offset = unit.offset;
              var size = unit.size;

              var _loop5 = function _loop5(b) {
                var bundle = newMesh.struct.vertexBundles[b]; // apply local transform to mesh

                posOffset = bundle.view.offset;
                posFormat = GFXFormat.UNKNOWN;

                for (var a = 0; a < bundle.attributes.length; a++) {
                  var attr = bundle.attributes[a];

                  if (attr.name === GFXAttributeName.ATTR_POSITION) {
                    posFormat = attr.format;
                    break;
                  }

                  posOffset += GFXFormatInfos[attr.format].size;
                }

                if (posFormat) {
                  var pos = readBuffer(dataView, posFormat, posOffset, bundle.view.length, bundle.view.stride);

                  for (var j = 0; j < pos.length; j += 3) {
                    Vec3.fromArray(v3_1, pos, j);
                    Vec3.transformMat4(v3_1, v3_1, unit._localTransform);
                    Vec3.toArray(pos, v3_1, j);
                  }

                  writeBuffer(dataView, pos, posFormat, posOffset, bundle.view.stride);
                }

                normalOffset = bundle.view.offset;
                normalFormat = GFXFormat.UNKNOWN;

                for (var _a = 0; _a < bundle.attributes.length; _a++) {
                  var _attr = bundle.attributes[_a];

                  if (_attr.name === GFXAttributeName.ATTR_NORMAL) {
                    normalFormat = _attr.format;
                    break;
                  }

                  normalOffset += GFXFormatInfos[_attr.format].size;
                }

                if (normalFormat) {
                  var normal = readBuffer(dataView, normalFormat, normalOffset, bundle.view.length, bundle.view.stride);

                  for (var _j = 0; _j < normal.length; _j += 3) {
                    Vec3.fromArray(v3_1, normal, _j);
                    Vec3.transformMat4Normal(v3_1, v3_1, m4_local);
                    Vec3.toArray(normal, v3_1, _j);
                  }

                  writeBuffer(dataView, normal, normalFormat, normalOffset, bundle.view.stride);
                }

                tangentOffset = bundle.view.offset;
                tangentFormat = GFXFormat.UNKNOWN;

                for (var _a2 = 0; _a2 < bundle.attributes.length; _a2++) {
                  var _attr2 = bundle.attributes[_a2];

                  if (_attr2.name === GFXAttributeName.ATTR_TANGENT) {
                    tangentFormat = _attr2.format;
                    break;
                  }

                  tangentOffset += GFXFormatInfos[_attr2.format].size;
                }

                if (tangentFormat) {
                  var tangent = readBuffer(dataView, tangentFormat, tangentOffset, bundle.view.length, bundle.view.stride);

                  for (var _j2 = 0; _j2 < tangent.length; _j2 += 3) {
                    Vec3.fromArray(v3_1, tangent, _j2);
                    Vec3.transformMat4Normal(v3_1, v3_1, m4_local);
                    Vec3.toArray(tangent, v3_1, _j2);
                  }

                  writeBuffer(dataView, tangent, tangentFormat, tangentOffset, bundle.view.stride);
                } // merge UV


                uvOffset = bundle.view.offset;
                uvFormat = GFXFormat.UNKNOWN;

                for (var _a3 = 0; _a3 < bundle.attributes.length; _a3++) {
                  var _attr3 = bundle.attributes[_a3];

                  if (_attr3.name === GFXAttributeName.ATTR_BATCH_UV) {
                    uvFormat = _attr3.format;
                    break;
                  }

                  uvOffset += GFXFormatInfos[_attr3.format].size;
                }

                if (uvFormat) {
                  mapBuffer(dataView, function (cur, idx) {
                    cur = repeat(cur); // warp to [0, 1] first

                    var comp = idx === 0 ? 'x' : 'y';
                    return cur * size[comp] + offset[comp];
                  }, uvFormat, uvOffset, bundle.view.length, bundle.view.stride, dataView);
                } // merge joint indices


                var idxMap = jointIndexMap[_i];

                if (!idxMap) {
                  return "continue";
                }

                jointOffset = bundle.view.offset;
                jointFormat = GFXFormat.UNKNOWN;

                for (var _a4 = 0; _a4 < bundle.attributes.length; _a4++) {
                  var _attr4 = bundle.attributes[_a4];

                  if (_attr4.name === GFXAttributeName.ATTR_JOINTS) {
                    jointFormat = _attr4.format;
                    break;
                  }

                  jointOffset += GFXFormatInfos[_attr4.format].size;
                }

                if (jointFormat) {
                  mapBuffer(dataView, function (cur) {
                    return idxMap[cur];
                  }, jointFormat, jointOffset, bundle.view.length, bundle.view.stride, dataView);
                }
              };

              for (var b = 0; b < newMesh.struct.vertexBundles.length; b++) {
                var _ret4 = _loop5(b);

                if (_ret4 === "continue") continue;
              }

              _this4._mesh.merge(newMesh);
            };

            for (var _i = 0; _i < unitLen; _i++) {
              var _ret3 = _loop4(_i);

              if (_ret3 === "continue") continue;
            }

            this._onMeshChanged(this._mesh);

            this._updateModels();
          }
        }, {
          key: "cookTextures",
          value: function cookTextures(target, prop, passIdx) {
            var texImages = [];
            var texImageRegions = [];
            var texBuffers = [];
            var texBufferRegions = [];

            for (var u = 0; u < this.units.length; u++) {
              var unit = this.units[u];

              if (!unit.material) {
                continue;
              }

              var partial = unit.material.getProperty(prop, passIdx);

              if (partial && partial.image && partial.image.data) {
                var region = new GFXBufferTextureCopy();
                region.texOffset.x = unit.offset.x * this.atlasSize;
                region.texOffset.y = unit.offset.y * this.atlasSize;
                region.texExtent.width = unit.size.x * this.atlasSize;
                region.texExtent.height = unit.size.y * this.atlasSize;
                var data = partial.image.data;

                if (data instanceof HTMLCanvasElement || data instanceof HTMLImageElement) {
                  texImages.push(data);
                  texImageRegions.push(region);
                } else {
                  texBuffers.push(data);
                  texBufferRegions.push(region);
                }
              }
            }

            var gfxTex = target.getGFXTexture();
            var device = legacyCC.director.root.device;

            if (texBuffers.length > 0) {
              device.copyBuffersToTexture(texBuffers, gfxTex, texBufferRegions);
            }

            if (texImages.length > 0) {
              device.copyTexImagesToTexture(texImages, gfxTex, texImageRegions);
            }
          }
        }, {
          key: "createTexture",
          value: function createTexture(prop) {
            var tex = new Texture2D();
            tex.setFilters(Filter.LINEAR, Filter.LINEAR);
            tex.setMipFilter(Filter.LINEAR);
            tex.reset({
              width: this.atlasSize,
              height: this.atlasSize,
              format: PixelFormat.RGBA8888
            });
            tex.loaded = true;
            this._textures[prop] = tex;
            return tex;
          }
        }, {
          key: "resizeAtlases",
          value: function resizeAtlases() {
            for (var prop in this._textures) {
              var tex = this._textures[prop];
              tex.reset({
                width: this.atlasSize,
                height: this.atlasSize,
                format: PixelFormat.RGBA8888
              });
            }
          }
        }, {
          key: "_createUnitMesh",
          value: function _createUnitMesh(unitIdx, mesh) {
            // add batch ID to this temp mesh
            // first, update bookkeeping
            var newMeshStruct = JSON.parse(JSON.stringify(mesh.struct));
            var modifiedBundles = {};

            for (var p = 0; p < mesh.struct.primitives.length; p++) {
              var primitive = mesh.struct.primitives[p];
              var uvOffset = 0;
              var uvFormat = GFXFormat.UNKNOWN;
              var bundleIdx = 0;

              for (; bundleIdx < primitive.vertexBundelIndices.length; bundleIdx++) {
                var bundle = mesh.struct.vertexBundles[primitive.vertexBundelIndices[bundleIdx]];
                uvOffset = bundle.view.offset;
                uvFormat = GFXFormat.UNKNOWN;

                for (var a = 0; a < bundle.attributes.length; a++) {
                  var attr = bundle.attributes[a];

                  if (attr.name === GFXAttributeName.ATTR_TEX_COORD) {
                    uvFormat = attr.format;
                    break;
                  }

                  uvOffset += GFXFormatInfos[attr.format].size;
                }

                if (uvFormat) {
                  break;
                }
              }

              if (modifiedBundles[bundleIdx] !== undefined) {
                continue;
              }

              modifiedBundles[bundleIdx] = [uvFormat, uvOffset];
              var newBundle = newMeshStruct.vertexBundles[bundleIdx]; // put the new UVs in the same bundle with original UVs

              newBundle.attributes.push(batch_id);
              newBundle.attributes.push(batch_uv);
              newBundle.view.offset = 0;
              newBundle.view.length += newBundle.view.count * batch_extras_size;
              newBundle.view.stride += batch_extras_size;
            }

            var totalLength = 0;

            for (var b = 0; b < newMeshStruct.vertexBundles.length; b++) {
              totalLength += newMeshStruct.vertexBundles[b].view.length;
            }

            for (var _p = 0; _p < newMeshStruct.primitives.length; _p++) {
              var pm = newMeshStruct.primitives[_p];

              if (pm.indexView) {
                pm.indexView.offset = totalLength;
                totalLength += pm.indexView.length;
              }
            } // now, we ride!


            var newMeshData = new Uint8Array(totalLength);
            var oldMeshData = mesh.data;
            var newDataView = new DataView(newMeshData.buffer);
            var oldDataView = new DataView(oldMeshData.buffer);
            var isLittleEndian = legacyCC.sys.isLittleEndian;

            for (var _b in modifiedBundles) {
              var _newBundle = newMeshStruct.vertexBundles[_b];
              var oldBundle = mesh.struct.vertexBundles[_b];

              var _modifiedBundles$_b = _slicedToArray(modifiedBundles[_b], 2),
                  _uvFormat = _modifiedBundles$_b[0],
                  _uvOffset = _modifiedBundles$_b[1];

              var uvs = readBuffer(oldDataView, _uvFormat, _uvOffset, oldBundle.view.length, oldBundle.view.stride);
              var oldView = oldBundle.view;
              var newView = _newBundle.view;
              var oldStride = oldView.stride;
              var newStride = newView.stride;
              var oldOffset = oldView.offset;
              var newOffset = newView.offset;

              for (var j = 0; j < newView.count; j++) {
                var srcVertex = oldMeshData.subarray(oldOffset, oldOffset + oldStride);
                newMeshData.set(srcVertex, newOffset); // insert batch ID

                newDataView.setFloat32(newOffset + oldStride, unitIdx); // insert batch UV

                newDataView.setFloat32(newOffset + oldStride + 4, uvs[j * 2], isLittleEndian);
                newDataView.setFloat32(newOffset + oldStride + 8, uvs[j * 2 + 1], isLittleEndian);
                newOffset += newStride;
                oldOffset += oldStride;
              }
            }

            for (var k = 0; k < newMeshStruct.primitives.length; k++) {
              var oldPrimitive = mesh.struct.primitives[k];
              var newPrimitive = newMeshStruct.primitives[k];

              if (oldPrimitive.indexView && newPrimitive.indexView) {
                var _oldStride = oldPrimitive.indexView.stride;
                var _newStride = newPrimitive.indexView.stride;
                var _oldOffset = oldPrimitive.indexView.offset;
                var _newOffset = newPrimitive.indexView.offset;

                for (var _j3 = 0; _j3 < newPrimitive.indexView.count; _j3++) {
                  var srcIndices = oldMeshData.subarray(_oldOffset, _oldOffset + _oldStride);
                  newMeshData.set(srcIndices, _newOffset);
                  _newOffset += _newStride;
                  _oldOffset += _oldStride;
                }
              }
            }

            var newMesh = new Mesh();
            newMesh.reset({
              struct: newMeshStruct,
              data: newMeshData
            });
            return newMesh;
          }
        }, {
          key: "mesh",
          get: function get() {
            return _get(_getPrototypeOf(SkinnedMeshBatchRenderer.prototype), "mesh", this);
          },
          set: function set(val) {
            _set(_getPrototypeOf(SkinnedMeshBatchRenderer.prototype), "mesh", val, this, true);
          }
        }, {
          key: "skeleton",
          get: function get() {
            return _get(_getPrototypeOf(SkinnedMeshBatchRenderer.prototype), "skeleton", this);
          },
          set: function set(val) {
            _set(_getPrototypeOf(SkinnedMeshBatchRenderer.prototype), "skeleton", val, this, true);
          }
        }]);

        return SkinnedMeshBatchRenderer;
      }(SkinnedMeshRenderer), _temp2), (_descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "atlasSize", [serializable, _dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1024;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class5.prototype, "batchableTextureNames", [_dec11, serializable, _dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class5.prototype, "units", [_dec13, serializable, _dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "mesh", [override, _dec15], Object.getOwnPropertyDescriptor(_class5.prototype, "mesh"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "skeleton", [override, _dec16], Object.getOwnPropertyDescriptor(_class5.prototype, "skeleton"), _class5.prototype)), _class5)) || _class4) || _class4) || _class4) || _class4) || _class4));

      var _dec$2, _dec2$2, _dec3$2, _dec4$2, _dec5$2, _dec6$2, _dec7$2, _dec8$2, _dec9$2, _dec10$1, _dec11$1, _dec12$1, _dec13$1, _dec14$1, _dec15$1, _dec16$1, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _class$2, _class2$2, _descriptor$2, _descriptor2$2, _descriptor3$1, _descriptor4$1, _descriptor5$1, _descriptor6$1, _descriptor7$1, _descriptor8$1, _descriptor9$1, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _class3, _temp$2;

      var _temp_vec3_1 = new Vec3();
      /**
       * @en The projection type.
       * @zh 投影类型。
       */


      var ProjectionType = Enum(CameraProjection);
      var FOVAxis = Enum(CameraFOVAxis);
      var Aperture = Enum(CameraAperture);
      var Shutter = Enum(CameraShutter);
      var ISO = Enum(CameraISO);
      var ClearFlag = Enum({
        SKYBOX: SKYBOX_FLAG | GFXClearFlag.DEPTH_STENCIL,
        SOLID_COLOR: GFXClearFlag.ALL,
        DEPTH_ONLY: GFXClearFlag.DEPTH_STENCIL,
        DONT_CLEAR: GFXClearFlag.NONE
      }); // tslint:disable: no-shadowed-variable

      var Camera = exports('f', (_dec$2 = ccclass('cc.Camera'), _dec2$2 = help(), _dec3$2 = menu(), _dec4$2 = displayOrder(), _dec5$2 = tooltip(), _dec6$2 = type(Layers.BitMask), _dec7$2 = displayOrder(), _dec8$2 = tooltip(), _dec9$2 = type(ClearFlag), _dec10$1 = displayOrder(), _dec11$1 = tooltip(), _dec12$1 = displayOrder(), _dec13$1 = tooltip(), _dec14$1 = displayOrder(), _dec15$1 = tooltip(), _dec16$1 = displayOrder(), _dec17 = tooltip(), _dec18 = type(ProjectionType), _dec19 = displayOrder(), _dec20 = tooltip(), _dec21 = type(FOVAxis), _dec22 = displayOrder(), _dec23 = tooltip(), _dec24 = displayOrder(), _dec25 = tooltip(), _dec26 = displayOrder(), _dec27 = tooltip(), _dec28 = displayOrder(), _dec29 = tooltip(), _dec30 = displayOrder(), _dec31 = tooltip(), _dec32 = type(Aperture), _dec33 = displayOrder(), _dec34 = tooltip(), _dec35 = type(Shutter), _dec36 = displayOrder(), _dec37 = tooltip(), _dec38 = type(ISO), _dec39 = displayOrder(), _dec40 = tooltip(), _dec41 = displayOrder(), _dec42 = tooltip(), _dec43 = type(RenderTexture), _dec44 = displayOrder(), _dec45 = tooltip(), _dec$2(_class$2 = _dec2$2(_class$2 = _dec3$2(_class$2 = executeInEditMode(_class$2 = (_class2$2 = (_temp$2 = _class3 = /*#__PURE__*/function (_Component) {
        _inherits(Camera, _Component);

        function Camera() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Camera);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Camera)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "_projection", _descriptor$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_priority", _descriptor2$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_fov", _descriptor3$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_fovAxis", _descriptor4$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_orthoHeight", _descriptor5$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_near", _descriptor6$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_far", _descriptor7$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_color", _descriptor8$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_depth", _descriptor9$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_stencil", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_clearFlags", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_rect", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_aperture", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_shutter", _descriptor14, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_iso", _descriptor15, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_screenScale", _descriptor16, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_visibility", _descriptor17, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_targetTexture", _descriptor18, _assertThisInitialized(_this));

          _this._camera = null;
          _this._inEditorMode = false;
          _this._flows = undefined;
          return _this;
        }

        _createClass(Camera, [{
          key: "onLoad",
          value: function onLoad() {
            this._createCamera();
          }
        }, {
          key: "onEnable",
          value: function onEnable() {
            this.node.hasChangedFlags |= TransformBit.POSITION; // trigger camera matrix update

            if (this._camera) {
              this._attachToScene();

              return;
            }
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            if (this._camera) {
              this._detachFromScene();
            }
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            if (this._camera) {
              legacyCC.director.root.destroyCamera(this._camera);
              this._camera = null;
            }

            if (this._targetTexture) {
              this._targetTexture.off('resize');
            }
          }
        }, {
          key: "screenPointToRay",
          value: function screenPointToRay(x, y, out) {
            if (!out) {
              out = ray.create();
            }

            if (this._camera) {
              this._camera.screenPointToRay(out, x, y);
            }

            return out;
          }
        }, {
          key: "worldToScreen",
          value: function worldToScreen(worldPos, out) {
            if (!out) {
              out = new Vec3();
            }

            if (this._camera) {
              this._camera.worldToScreen(out, worldPos);
            }

            return out;
          }
        }, {
          key: "screenToWorld",
          value: function screenToWorld(screenPos, out) {
            if (!out) {
              out = this.node.getWorldPosition();
            }

            if (this._camera) {
              this._camera.screenToWorld(out, screenPos);
            }

            return out;
          }
          /**
           * @en 3D node to UI local node coordinates. The converted value is the offset under the UI node.
           *
           * @zh 3D 节点转 UI 本地节点坐标。转换后的值是该 UI 节点下的偏移。
           * @param wpos 3D 节点世界坐标
           * @param uiNode UI 节点
           * @param out 返回在当前传入的 UI 节点下的偏移量
           *
           * @example
           * ```ts
           * this.convertToUINode(target.worldPosition, uiNode.parent, out);
           * uiNode.position = out;
           * ```
           */

        }, {
          key: "convertToUINode",
          value: function convertToUINode(wpos, uiNode, out) {
            if (!out) {
              out = new Vec3();
            }

            if (!this._camera) {
              return out;
            }

            this.worldToScreen(wpos, _temp_vec3_1);
            var cmp = uiNode.getComponent('cc.UITransform');
            var designSize = view.getVisibleSize();
            var xoffset = _temp_vec3_1.x - this._camera.width * 0.5;
            var yoffset = _temp_vec3_1.y - this._camera.height * 0.5;
            _temp_vec3_1.x = xoffset / legacyCC.view.getScaleX() + designSize.width * 0.5;
            _temp_vec3_1.y = yoffset / legacyCC.view.getScaleY() + designSize.height * 0.5;

            if (cmp) {
              cmp.convertToNodeSpaceAR(_temp_vec3_1, out);
            }

            return out;
          }
        }, {
          key: "_createCamera",
          value: function _createCamera() {
            this._camera = legacyCC.director.root.createCamera();

            this._camera.initialize({
              name: this.node.name,
              node: this.node,
              projection: this._projection,
              window: this._inEditorMode ? legacyCC.director.root && legacyCC.director.root.mainWindow : legacyCC.director.root && legacyCC.director.root.tempWindow,
              priority: this._priority,
              flows: this._flows
            });

            if (this._camera) {
              this._camera.viewport = this._rect;
              this._camera.fovAxis = this._fovAxis;
              this._camera.fov = toRadian(this._fov);
              this._camera.orthoHeight = this._orthoHeight;
              this._camera.nearClip = this._near;
              this._camera.farClip = this._far;
              var r = this._color.x;
              var g = this._color.y;
              var b = this._color.z;
              var a = this._color.w;
              this._camera.clearColor = {
                r: r,
                g: g,
                b: b,
                a: a
              };
              this._camera.clearDepth = this._depth;
              this._camera.clearStencil = this._stencil;
              this._camera.clearFlag = this._clearFlags;
              this._camera.visibility = this._visibility;
              this._camera.aperture = this._aperture;
              this._camera.shutter = this._shutter;
              this._camera.iso = this._iso;
            }

            this._updateTargetTexture();
          }
        }, {
          key: "_attachToScene",
          value: function _attachToScene() {
            if (!this.node.scene || !this._camera) {
              return;
            }

            if (this._camera && this._camera.scene) {
              this._camera.scene.removeCamera(this._camera);
            }

            var scene = this._getRenderScene();

            scene.addCamera(this._camera);
          }
        }, {
          key: "_detachFromScene",
          value: function _detachFromScene() {
            if (this._camera && this._camera.scene) {
              this._camera.scene.removeCamera(this._camera);
            }
          }
        }, {
          key: "_chechTargetTextureEvent",
          value: function _chechTargetTextureEvent(old) {
            var _this2 = this;

            var resizeFunc = function resizeFunc(window) {
              if (_this2._camera) {
                _this2._camera.setFixedSize(window.width, window.height);
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

            if (this._targetTexture) {
              var window = this._targetTexture.window;

              this._camera.changeTargetWindow(window);

              this._camera.setFixedSize(window.width, window.height);
            }
          }
        }, {
          key: "camera",
          get: function get() {
            return this._camera;
          }
          /**
           * @en Render priority of the camera, in ascending-order.
           * @zh 相机的渲染优先级，值越小越优先渲染。
           */

        }, {
          key: "priority",
          get: function get() {
            return this._priority;
          },
          set: function set(val) {
            this._priority = val;

            if (this._camera) {
              this._camera.priority = val;
            }
          }
          /**
           * @en Visibility mask, declaring a set of node layers that will be visible to this camera.
           * @zh 可见性掩码，声明在当前相机中可见的节点层级集合。
           */

        }, {
          key: "visibility",
          get: function get() {
            return this._visibility;
          },
          set: function set(val) {
            this._visibility = val;

            if (this._camera) {
              this._camera.visibility = val;
            }
          }
          /**
           * @en Clearing flags of the camera, specifies which part of the framebuffer will be actually cleared every frame.
           * @zh 相机的缓冲清除标志位，指定帧缓冲的哪部分要每帧清除。
           */

        }, {
          key: "clearFlags",
          get: function get() {
            return this._clearFlags;
          },
          set: function set(val) {
            this._clearFlags = val;

            if (this._camera) {
              this._camera.clearFlag = val;
            }
          }
          /**
           * @en Clearing color of the camera.
           * @zh 相机的颜色缓冲默认值。
           */

        }, {
          key: "clearColor",
          get: function get() {
            return this._color;
          },
          set: function set(val) {
            this._color.set(val);

            if (this._camera) {
              this._camera.clearColor.r = this._color.x;
              this._camera.clearColor.g = this._color.y;
              this._camera.clearColor.b = this._color.z;
              this._camera.clearColor.a = this._color.w;
            }
          }
          /**
           * @en Clearing depth of the camera.
           * @zh 相机的深度缓冲默认值。
           */

        }, {
          key: "clearDepth",
          get: function get() {
            return this._depth;
          },
          set: function set(val) {
            this._depth = val;

            if (this._camera) {
              this._camera.clearDepth = val;
            }
          }
          /**
           * @en Clearing stencil of the camera.
           * @zh 相机的模板缓冲默认值。
           */

        }, {
          key: "clearStencil",
          get: function get() {
            return this._stencil;
          },
          set: function set(val) {
            this._stencil = val;

            if (this._camera) {
              this._camera.clearStencil = val;
            }
          }
          /**
           * @en Projection type of the camera.
           * @zh 相机的投影类型。
           */

        }, {
          key: "projection",
          get: function get() {
            return this._projection;
          },
          set: function set(val) {
            this._projection = val;

            if (this._camera) {
              this._camera.projectionType = val;
            }
          }
          /**
           * @en The axis on which the FOV would be fixed regardless of screen aspect changes.
           * @zh 指定视角的固定轴向，在此轴上不会跟随屏幕长宽比例变化。
           */

        }, {
          key: "fovAxis",
          get: function get() {
            return this._fovAxis;
          },
          set: function set(val) {
            if (val === this._fovAxis) {
              return;
            }

            this._fovAxis = val;

            if (this._camera) {
              this._camera.fovAxis = val;

              if (val === CameraFOVAxis.VERTICAL) {
                this.fov = this._fov * this._camera.aspect;
              } else {
                this.fov = this._fov / this._camera.aspect;
              }
            }
          }
          /**
           * @en Field of view of the camera.
           * @zh 相机的视角大小。
           */

        }, {
          key: "fov",
          get: function get() {
            return this._fov;
          },
          set: function set(val) {
            this._fov = val;

            if (this._camera) {
              this._camera.fov = toRadian(val);
            }
          }
          /**
           * @en Viewport height in orthographic mode.
           * @zh 正交模式下的相机视角高度。
           */

        }, {
          key: "orthoHeight",
          get: function get() {
            return this._orthoHeight;
          },
          set: function set(val) {
            this._orthoHeight = val;

            if (this._camera) {
              this._camera.orthoHeight = val;
            }
          }
          /**
           * @en Near clipping distance of the camera, should be as large as possible within acceptable range.
           * @zh 相机的近裁剪距离，应在可接受范围内尽量取最大。
           */

        }, {
          key: "near",
          get: function get() {
            return this._near;
          },
          set: function set(val) {
            this._near = val;

            if (this._camera) {
              this._camera.nearClip = val;
            }
          }
          /**
           * @en Far clipping distance of the camera, should be as small as possible within acceptable range.
           * @zh 相机的远裁剪距离，应在可接受范围内尽量取最小。
           */

        }, {
          key: "far",
          get: function get() {
            return this._far;
          },
          set: function set(val) {
            this._far = val;

            if (this._camera) {
              this._camera.farClip = val;
            }
          }
          /**
           * @en Camera aperture, controls the exposure parameter.
           * @zh 相机光圈，影响相机的曝光参数。
           */

        }, {
          key: "aperture",
          get: function get() {
            return this._aperture;
          },
          set: function set(val) {
            this._aperture = val;

            if (this._camera) {
              this._camera.aperture = val;
            }
          }
          /**
           * @en Camera shutter, controls the exposure parameter.
           * @zh 相机快门，影响相机的曝光参数。
           */

        }, {
          key: "shutter",
          get: function get() {
            return this._shutter;
          },
          set: function set(val) {
            this._shutter = val;

            if (this._camera) {
              this._camera.shutter = val;
            }
          }
          /**
           * @en Camera ISO, controls the exposure parameter.
           * @zh 相机感光度，影响相机的曝光参数。
           */

        }, {
          key: "iso",
          get: function get() {
            return this._iso;
          },
          set: function set(val) {
            this._iso = val;

            if (this._camera) {
              this._camera.iso = val;
            }
          }
          /**
           * @en Screen viewport of the camera wrt. the sceen size.
           * @zh 此相机最终渲染到屏幕上的视口位置和大小。
           */

        }, {
          key: "rect",
          get: function get() {
            return this._rect;
          },
          set: function set(val) {
            this._rect = val;

            if (this._camera) {
              this._camera.viewport = val;
            }
          }
          /**
           * @en Output render texture of the camera. Default to null, which outputs directly to screen.
           * @zh 指定此相机的渲染输出目标贴图，默认为空，直接渲染到屏幕。
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

            this._chechTargetTextureEvent(old);

            this._updateTargetTexture();

            if (!value && this._camera) {
              this._camera.changeTargetWindow( null);

              this._camera.isWindowSize = true;
            }
          }
          /**
           * @en Scale of the internal buffer size,
           * set to 1 to keep the same with the canvas size.
           * @zh 相机内部缓冲尺寸的缩放值, 1 为与 canvas 尺寸相同。
           */

        }, {
          key: "screenScale",
          get: function get() {
            return this._screenScale;
          },
          set: function set(val) {
            this._screenScale = val;

            if (this._camera) {
              this._camera.screenScale = val;
            }
          }
        }, {
          key: "inEditorMode",
          get: function get() {
            return this._inEditorMode;
          },
          set: function set(value) {
            this._inEditorMode = value;

            if (this._camera) {
              this._camera.changeTargetWindow(value ? legacyCC.director.root && legacyCC.director.root.mainWindow : legacyCC.director.root && legacyCC.director.root.tempWindow);
            }
          }
        }, {
          key: "flows",
          set: function set(val) {
            if (this._camera) {
              this._camera.flows = val;
            }

            this._flows = val;
          }
        }]);

        return Camera;
      }(Component), _class3.ProjectionType = ProjectionType, _class3.FOVAxis = FOVAxis, _class3.ClearFlag = ClearFlag, _class3.Aperture = Aperture, _class3.Shutter = Shutter, _class3.ISO = ISO, _temp$2), (_descriptor$2 = _applyDecoratedDescriptor(_class2$2.prototype, "_projection", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ProjectionType.PERSPECTIVE;
        }
      }), _descriptor2$2 = _applyDecoratedDescriptor(_class2$2.prototype, "_priority", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_fov", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 45;
        }
      }), _descriptor4$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_fovAxis", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return FOVAxis.VERTICAL;
        }
      }), _descriptor5$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_orthoHeight", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor6$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_near", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor7$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_far", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1000;
        }
      }), _descriptor8$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_color", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color('#333333');
        }
      }), _descriptor9$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_depth", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2$2.prototype, "_stencil", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2$2.prototype, "_clearFlags", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ClearFlag.SOLID_COLOR;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2$2.prototype, "_rect", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Rect(0, 0, 1, 1);
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2$2.prototype, "_aperture", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Aperture.F16_0;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2$2.prototype, "_shutter", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Shutter.D125;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2$2.prototype, "_iso", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ISO.ISO100;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2$2.prototype, "_screenScale", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2$2.prototype, "_visibility", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return CAMERA_DEFAULT_MASK;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2$2.prototype, "_targetTexture", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2$2.prototype, "priority", [_dec4$2, _dec5$2], Object.getOwnPropertyDescriptor(_class2$2.prototype, "priority"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "visibility", [_dec6$2, _dec7$2, _dec8$2], Object.getOwnPropertyDescriptor(_class2$2.prototype, "visibility"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "clearFlags", [_dec9$2, _dec10$1, _dec11$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "clearFlags"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "clearColor", [_dec12$1, _dec13$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "clearColor"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "clearDepth", [_dec14$1, _dec15$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "clearDepth"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "clearStencil", [_dec16$1, _dec17], Object.getOwnPropertyDescriptor(_class2$2.prototype, "clearStencil"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "projection", [_dec18, _dec19, _dec20], Object.getOwnPropertyDescriptor(_class2$2.prototype, "projection"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "fovAxis", [_dec21, _dec22, _dec23], Object.getOwnPropertyDescriptor(_class2$2.prototype, "fovAxis"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "fov", [_dec24, _dec25], Object.getOwnPropertyDescriptor(_class2$2.prototype, "fov"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "orthoHeight", [_dec26, _dec27], Object.getOwnPropertyDescriptor(_class2$2.prototype, "orthoHeight"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "near", [_dec28, _dec29], Object.getOwnPropertyDescriptor(_class2$2.prototype, "near"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "far", [_dec30, _dec31], Object.getOwnPropertyDescriptor(_class2$2.prototype, "far"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "aperture", [_dec32, _dec33, _dec34], Object.getOwnPropertyDescriptor(_class2$2.prototype, "aperture"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "shutter", [_dec35, _dec36, _dec37], Object.getOwnPropertyDescriptor(_class2$2.prototype, "shutter"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "iso", [_dec38, _dec39, _dec40], Object.getOwnPropertyDescriptor(_class2$2.prototype, "iso"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "rect", [_dec41, _dec42], Object.getOwnPropertyDescriptor(_class2$2.prototype, "rect"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "targetTexture", [_dec43, _dec44, _dec45], Object.getOwnPropertyDescriptor(_class2$2.prototype, "targetTexture"), _class2$2.prototype)), _class2$2)) || _class$2) || _class$2) || _class$2) || _class$2));
      legacyCC.Camera = Camera;

      var _dec$3, _class$3, _class2$3, _descriptor$3, _descriptor2$3, _descriptor3$2, _temp$3, _dec2$3, _dec3$3, _dec4$3, _dec5$3, _dec6$3, _dec7$3, _class4$1, _class5$1, _descriptor4$2, _descriptor5$2, _descriptor6$2, _descriptor7$2, _class6, _temp2$1;
      var PhotometricTerm = Enum({
        LUMINOUS_POWER: 0,
        LUMINANCE: 1
      });
      /**
       * @en static light settings.
       * @zh 静态灯光设置
       */

      var StaticLightSettings = (_dec$3 = ccclass('cc.StaticLightSettings'), _dec$3(_class$3 = (_class2$3 = (_temp$3 = /*#__PURE__*/function () {
        function StaticLightSettings() {
          _classCallCheck(this, StaticLightSettings);

          _initializerDefineProperty(this, "_editorOnly", _descriptor$3, this);

          _initializerDefineProperty(this, "_bakeable", _descriptor2$3, this);

          _initializerDefineProperty(this, "_castShadow", _descriptor3$2, this);
        }

        _createClass(StaticLightSettings, [{
          key: "editorOnly",

          /**
           * @en editor only.
           * @zh 是否只在编辑器里生效。
           */
          get: function get() {
            return this._editorOnly;
          },
          set: function set(val) {
            this._editorOnly = val;
          }
          /**
           * @en bakeable.
           * @zh 是否可烘培。
           */

        }, {
          key: "bakeable",
          get: function get() {
            return this._bakeable;
          },
          set: function set(val) {
            this._bakeable = val;
          }
          /**
           * @en cast shadow.
           * @zh 是否投射阴影。
           */

        }, {
          key: "castShadow",
          get: function get() {
            return this._castShadow;
          },
          set: function set(val) {
            this._castShadow = val;
          }
        }]);

        return StaticLightSettings;
      }(), _temp$3), (_descriptor$3 = _applyDecoratedDescriptor(_class2$3.prototype, "_editorOnly", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2$3 = _applyDecoratedDescriptor(_class2$3.prototype, "_bakeable", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3$2 = _applyDecoratedDescriptor(_class2$3.prototype, "_castShadow", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2$3.prototype, "editorOnly", [editable], Object.getOwnPropertyDescriptor(_class2$3.prototype, "editorOnly"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "bakeable", [editable], Object.getOwnPropertyDescriptor(_class2$3.prototype, "bakeable"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "castShadow", [editable], Object.getOwnPropertyDescriptor(_class2$3.prototype, "castShadow"), _class2$3.prototype)), _class2$3)) || _class$3); // tslint:disable: no-shadowed-variable

      var Light = exports('L', (_dec2$3 = ccclass('cc.Light'), _dec3$3 = tooltip(), _dec4$3 = tooltip(), _dec5$3 = range(), _dec6$3 = tooltip(), _dec7$3 = type(StaticLightSettings), _dec2$3(_class4$1 = (_class5$1 = (_temp2$1 = _class6 = /*#__PURE__*/function (_Component) {
        _inherits(Light, _Component);

        _createClass(Light, [{
          key: "color",

          /**
           * @en
           * Color of the light.
           * @zh
           * 光源颜色。
           */
          get: function get() {
            return this._color;
          },
          set: function set(val) {
            this._color = val;

            if (this._light) {
              this._light.color.x = val.r / 255.0;
              this._light.color.y = val.g / 255.0;
              this._light.color.z = val.b / 255.0;
            }
          }
          /**
           * @en
           * Whether to enable light color temperature.
           * @zh
           * 是否启用光源色温。
           */

        }, {
          key: "useColorTemperature",
          get: function get() {
            return this._useColorTemperature;
          },
          set: function set(enable) {
            this._useColorTemperature = enable;

            if (this._light) {
              this._light.useColorTemperature = enable;
            }
          }
          /**
           * @en
           * The light color temperature.
           * @zh
           * 光源色温。
           */

        }, {
          key: "colorTemperature",
          get: function get() {
            return this._colorTemperature;
          },
          set: function set(val) {
            this._colorTemperature = val;

            if (this._light) {
              this._light.colorTemperature = val;
            }
          }
          /**
           * @en
           * static light settings.
           * @zh
           * 静态灯光设置。
           */

        }, {
          key: "staticSettings",
          get: function get() {
            return this._staticSettings;
          },
          set: function set(val) {
            this._staticSettings = val;
          }
          /**
           * @en
           * The light type.
           * @zh
           * 光源类型。
           */

        }, {
          key: "type",
          get: function get() {
            return this._type;
          }
        }]);

        function Light() {
          var _this;

          _classCallCheck(this, Light);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Light).call(this));

          _initializerDefineProperty(_this, "_color", _descriptor4$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_useColorTemperature", _descriptor5$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_colorTemperature", _descriptor6$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_staticSettings", _descriptor7$2, _assertThisInitialized(_this));

          _this._type = LightType.UNKNOWN;
          _this._lightType = void 0;
          _this._light = null;
          _this._lightType = Light$1;
          return _this;
        }

        _createClass(Light, [{
          key: "onLoad",
          value: function onLoad() {
            this._createLight();
          }
        }, {
          key: "onEnable",
          value: function onEnable() {
            this._attachToScene();
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            this._detachFromScene();
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            this._destroyLight();
          }
        }, {
          key: "_createLight",
          value: function _createLight() {
            if (!this._light) {
              this._light = legacyCC.director.root.createLight(this._lightType);
            }

            this.color = this._color;
            this.useColorTemperature = this._useColorTemperature;
            this.colorTemperature = this._colorTemperature;
            this._light.node = this.node;
          }
        }, {
          key: "_destroyLight",
          value: function _destroyLight() {
            if (this._light) {
              legacyCC.director.root.destroyLight(this);
              this._light = null;
            }
          }
        }, {
          key: "_attachToScene",
          value: function _attachToScene() {
            this._detachFromScene();

            if (this._light && !this._light.scene && this.node.scene) {
              var renderScene = this._getRenderScene();

              switch (this._type) {
                case LightType.DIRECTIONAL:
                  renderScene.addDirectionalLight(this._light);
                  renderScene.setMainLight(this._light);
                  break;

                case LightType.SPHERE:
                  renderScene.addSphereLight(this._light);
                  break;

                case LightType.SPOT:
                  renderScene.addSpotLight(this._light);
                  break;
              }
            }
          }
        }, {
          key: "_detachFromScene",
          value: function _detachFromScene() {
            if (this._light && this._light.scene) {
              var renderScene = this._light.scene;

              switch (this._type) {
                case LightType.DIRECTIONAL:
                  renderScene.removeDirectionalLight(this._light);
                  renderScene.unsetMainLight(this._light);
                  break;

                case LightType.SPHERE:
                  renderScene.removeSphereLight(this._light);
                  break;

                case LightType.SPOT:
                  renderScene.removeSpotLight(this._light);
                  break;
              }
            }
          }
        }]);

        return Light;
      }(Component), _class6.Type = LightType, _class6.PhotometricTerm = PhotometricTerm, _temp2$1), (_descriptor4$2 = _applyDecoratedDescriptor(_class5$1.prototype, "_color", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.WHITE.clone();
        }
      }), _descriptor5$2 = _applyDecoratedDescriptor(_class5$1.prototype, "_useColorTemperature", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6$2 = _applyDecoratedDescriptor(_class5$1.prototype, "_colorTemperature", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6550;
        }
      }), _descriptor7$2 = _applyDecoratedDescriptor(_class5$1.prototype, "_staticSettings", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new StaticLightSettings();
        }
      }), _applyDecoratedDescriptor(_class5$1.prototype, "color", [_dec3$3], Object.getOwnPropertyDescriptor(_class5$1.prototype, "color"), _class5$1.prototype), _applyDecoratedDescriptor(_class5$1.prototype, "useColorTemperature", [_dec4$3], Object.getOwnPropertyDescriptor(_class5$1.prototype, "useColorTemperature"), _class5$1.prototype), _applyDecoratedDescriptor(_class5$1.prototype, "colorTemperature", [slide, _dec5$3, _dec6$3], Object.getOwnPropertyDescriptor(_class5$1.prototype, "colorTemperature"), _class5$1.prototype), _applyDecoratedDescriptor(_class5$1.prototype, "staticSettings", [_dec7$3], Object.getOwnPropertyDescriptor(_class5$1.prototype, "staticSettings"), _class5$1.prototype)), _class5$1)) || _class4$1));

      var _dec$4, _dec2$4, _dec3$4, _dec4$4, _dec5$4, _class$4, _class2$4, _descriptor$4, _temp$4;
      var DirectionalLight = exports('D', (_dec$4 = ccclass('cc.DirectionalLight'), _dec2$4 = help(), _dec3$4 = menu(), _dec4$4 = unit(), _dec5$4 = tooltip(), _dec$4(_class$4 = _dec2$4(_class$4 = _dec3$4(_class$4 = executeInEditMode(_class$4 = (_class2$4 = (_temp$4 = /*#__PURE__*/function (_Light) {
        _inherits(DirectionalLight, _Light);

        _createClass(DirectionalLight, [{
          key: "illuminance",

          /**
           * @en
           * The light source intensity.
           * @zh
           * 光源强度。
           */
          get: function get() {
            return this._illuminance;
          },
          set: function set(val) {
            this._illuminance = val;

            if (this._light) {
              this._light.illuminance = this._illuminance;
            }
          }
        }]);

        function DirectionalLight() {
          var _this;

          _classCallCheck(this, DirectionalLight);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(DirectionalLight).call(this));

          _initializerDefineProperty(_this, "_illuminance", _descriptor$4, _assertThisInitialized(_this));

          _this._type = LightType.DIRECTIONAL;
          _this._light = null;
          _this._lightType = DirectionalLight$1;
          return _this;
        }

        _createClass(DirectionalLight, [{
          key: "_createLight",
          value: function _createLight() {
            _get(_getPrototypeOf(DirectionalLight.prototype), "_createLight", this).call(this);

            if (!this._light) {
              return;
            }

            this.illuminance = this._illuminance;
          }
        }]);

        return DirectionalLight;
      }(Light), _temp$4), (_descriptor$4 = _applyDecoratedDescriptor(_class2$4.prototype, "_illuminance", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 65000;
        }
      }), _applyDecoratedDescriptor(_class2$4.prototype, "illuminance", [_dec4$4, _dec5$4], Object.getOwnPropertyDescriptor(_class2$4.prototype, "illuminance"), _class2$4.prototype)), _class2$4)) || _class$4) || _class$4) || _class$4) || _class$4));

      var _dec$5, _dec2$5, _dec3$5, _dec4$5, _dec5$5, _dec6$4, _dec7$4, _dec8$3, _dec9$3, _dec10$2, _dec11$2, _class$5, _class2$5, _descriptor$5, _descriptor2$4, _descriptor3$3, _descriptor4$3, _temp$5;
      var SphereLight$1 = exports('k', (_dec$5 = ccclass('cc.SphereLight'), _dec2$5 = help(), _dec3$5 = menu(), _dec4$5 = unit(), _dec5$5 = tooltip(), _dec6$4 = unit(), _dec7$4 = tooltip(), _dec8$3 = type(PhotometricTerm), _dec9$3 = tooltip(), _dec10$2 = tooltip(), _dec11$2 = tooltip(), _dec$5(_class$5 = _dec2$5(_class$5 = _dec3$5(_class$5 = executeInEditMode(_class$5 = (_class2$5 = (_temp$5 = /*#__PURE__*/function (_Light) {
        _inherits(SphereLight$1, _Light);

        _createClass(SphereLight$1, [{
          key: "luminousPower",

          /**
           * @en Luminous power of the light.
           * @zh 光通量。
           */
          get: function get() {
            return this._luminance * nt2lm(this._size);
          },
          set: function set(val) {
            this._luminance = val / nt2lm(this._size);

            if (this._light) {
              this._light.luminance = this._luminance;
            }
          }
          /**
           * @en Luminance of the light.
           * @zh 光亮度。
           */

        }, {
          key: "luminance",
          get: function get() {
            return this._luminance;
          },
          set: function set(val) {
            this._luminance = val;

            if (this._light) {
              this._light.luminance = val;
            }
          }
          /**
           * @en The photometric term currently being used.
           * @zh 当前使用的光度学计量单位。
           */

        }, {
          key: "term",
          get: function get() {
            return this._term;
          },
          set: function set(val) {
            this._term = val;
          }
          /**
           * @en
           * Size of the light.
           * @zh
           * 光源大小。
           */

        }, {
          key: "size",
          get: function get() {
            return this._size;
          },
          set: function set(val) {
            this._size = val;

            if (this._light) {
              this._light.size = val;
            }
          }
          /**
           * @en
           * Range of the light.
           * @zh
           * 光源范围。
           */

        }, {
          key: "range",
          get: function get() {
            return this._range;
          },
          set: function set(val) {
            this._range = val;

            if (this._light) {
              this._light.range = val;
            }
          }
        }]);

        function SphereLight$1() {
          var _this;

          _classCallCheck(this, SphereLight$1);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(SphereLight$1).call(this));

          _initializerDefineProperty(_this, "_size", _descriptor$5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_luminance", _descriptor2$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_term", _descriptor3$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_range", _descriptor4$3, _assertThisInitialized(_this));

          _this._type = LightType.SPHERE;
          _this._light = null;
          _this._lightType = SphereLight;
          return _this;
        }

        _createClass(SphereLight$1, [{
          key: "_createLight",
          value: function _createLight() {
            _get(_getPrototypeOf(SphereLight$1.prototype), "_createLight", this).call(this);

            if (!this._light) {
              return;
            }

            this.luminance = this._luminance;
            this.size = this._size;
            this.range = this._range;
          }
        }]);

        return SphereLight$1;
      }(Light), _temp$5), (_descriptor$5 = _applyDecoratedDescriptor(_class2$5.prototype, "_size", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.15;
        }
      }), _descriptor2$4 = _applyDecoratedDescriptor(_class2$5.prototype, "_luminance", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1700 / nt2lm(0.15);
        }
      }), _descriptor3$3 = _applyDecoratedDescriptor(_class2$5.prototype, "_term", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return PhotometricTerm.LUMINOUS_POWER;
        }
      }), _descriptor4$3 = _applyDecoratedDescriptor(_class2$5.prototype, "_range", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2$5.prototype, "luminousPower", [_dec4$5, _dec5$5], Object.getOwnPropertyDescriptor(_class2$5.prototype, "luminousPower"), _class2$5.prototype), _applyDecoratedDescriptor(_class2$5.prototype, "luminance", [_dec6$4, _dec7$4], Object.getOwnPropertyDescriptor(_class2$5.prototype, "luminance"), _class2$5.prototype), _applyDecoratedDescriptor(_class2$5.prototype, "term", [_dec8$3, _dec9$3], Object.getOwnPropertyDescriptor(_class2$5.prototype, "term"), _class2$5.prototype), _applyDecoratedDescriptor(_class2$5.prototype, "size", [_dec10$2], Object.getOwnPropertyDescriptor(_class2$5.prototype, "size"), _class2$5.prototype), _applyDecoratedDescriptor(_class2$5.prototype, "range", [_dec11$2], Object.getOwnPropertyDescriptor(_class2$5.prototype, "range"), _class2$5.prototype)), _class2$5)) || _class$5) || _class$5) || _class$5) || _class$5));

      var _dec$6, _dec2$6, _dec3$6, _dec4$6, _dec5$6, _dec6$5, _dec7$5, _dec8$4, _dec9$4, _dec10$3, _dec11$3, _dec12$2, _dec13$2, _class$6, _class2$6, _descriptor$6, _descriptor2$5, _descriptor3$4, _descriptor4$4, _descriptor5$3, _temp$6;
      var SpotLight = exports('l', (_dec$6 = ccclass('cc.SpotLight'), _dec2$6 = help(), _dec3$6 = menu(), _dec4$6 = unit(), _dec5$6 = tooltip(), _dec6$5 = unit(), _dec7$5 = tooltip(), _dec8$4 = type(PhotometricTerm), _dec9$4 = tooltip(), _dec10$3 = tooltip(), _dec11$3 = tooltip(), _dec12$2 = range(), _dec13$2 = tooltip(), _dec$6(_class$6 = _dec2$6(_class$6 = _dec3$6(_class$6 = executeInEditMode(_class$6 = (_class2$6 = (_temp$6 = /*#__PURE__*/function (_Light) {
        _inherits(SpotLight, _Light);

        _createClass(SpotLight, [{
          key: "luminousPower",

          /**
           * @en Luminous power of the light.
           * @zh 光通量。
           */
          get: function get() {
            return this._luminance * nt2lm(this._size);
          },
          set: function set(val) {
            this._luminance = val / nt2lm(this._size);

            if (this._light) {
              this._light.luminance = this._luminance;
            }
          }
          /**
           * @en Luminance of the light.
           * @zh 光亮度。
           */

        }, {
          key: "luminance",
          get: function get() {
            return this._luminance;
          },
          set: function set(val) {
            this._luminance = val;

            if (this._light) {
              this._light.luminance = val;
            }
          }
          /**
           * @en The photometric term currently being used.
           * @zh 当前使用的光度学计量单位。
           */

        }, {
          key: "term",
          get: function get() {
            return this._term;
          },
          set: function set(val) {
            this._term = val;
          }
          /**
           * @en
           * Size of the light.
           * @zh
           * 光源大小。
           */

        }, {
          key: "size",
          get: function get() {
            return this._size;
          },
          set: function set(val) {
            this._size = val;

            if (this._light) {
              this._light.size = val;
            }
          }
          /**
           * @en
           * Range of the light.
           * @zh
           * 光源范围。
           */

        }, {
          key: "range",
          get: function get() {
            return this._range;
          },
          set: function set(val) {
            this._range = val;

            if (this._light) {
              this._light.range = val;
            }
          }
          /**
           * @en
           * The spot light cone angle.
           * @zh
           * 聚光灯锥角。
           */

        }, {
          key: "spotAngle",
          get: function get() {
            return this._spotAngle;
          },
          set: function set(val) {
            this._spotAngle = val;

            if (this._light) {
              this._light.spotAngle = toRadian(val);
            }
          }
        }]);

        function SpotLight() {
          var _this;

          _classCallCheck(this, SpotLight);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(SpotLight).call(this));

          _initializerDefineProperty(_this, "_size", _descriptor$6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_luminance", _descriptor2$5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_term", _descriptor3$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_range", _descriptor4$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_spotAngle", _descriptor5$3, _assertThisInitialized(_this));

          _this._type = LightType.SPOT;
          _this._light = null;
          _this._lightType = SpotLight$1;
          return _this;
        }

        _createClass(SpotLight, [{
          key: "_createLight",
          value: function _createLight() {
            _get(_getPrototypeOf(SpotLight.prototype), "_createLight", this).call(this);

            if (!this._light) {
              return;
            }

            this.luminance = this._luminance;
            this.size = this._size;
            this.range = this._range;
            this.spotAngle = this._spotAngle;
          }
        }]);

        return SpotLight;
      }(Light), _temp$6), (_descriptor$6 = _applyDecoratedDescriptor(_class2$6.prototype, "_size", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.15;
        }
      }), _descriptor2$5 = _applyDecoratedDescriptor(_class2$6.prototype, "_luminance", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1700 / nt2lm(0.15);
        }
      }), _descriptor3$4 = _applyDecoratedDescriptor(_class2$6.prototype, "_term", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return PhotometricTerm.LUMINOUS_POWER;
        }
      }), _descriptor4$4 = _applyDecoratedDescriptor(_class2$6.prototype, "_range", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor5$3 = _applyDecoratedDescriptor(_class2$6.prototype, "_spotAngle", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 60;
        }
      }), _applyDecoratedDescriptor(_class2$6.prototype, "luminousPower", [_dec4$6, _dec5$6], Object.getOwnPropertyDescriptor(_class2$6.prototype, "luminousPower"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "luminance", [_dec6$5, _dec7$5], Object.getOwnPropertyDescriptor(_class2$6.prototype, "luminance"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "term", [_dec8$4, _dec9$4], Object.getOwnPropertyDescriptor(_class2$6.prototype, "term"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "size", [_dec10$3], Object.getOwnPropertyDescriptor(_class2$6.prototype, "size"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "range", [_dec11$3], Object.getOwnPropertyDescriptor(_class2$6.prototype, "range"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "spotAngle", [slide, _dec12$2, _dec13$2], Object.getOwnPropertyDescriptor(_class2$6.prototype, "spotAngle"), _class2$6.prototype)), _class2$6)) || _class$6) || _class$6) || _class$6) || _class$6));

      /**
       * @category component
       */
      removeProperty(MeshRenderer.prototype, 'MeshRenderer.prototype', [{
        name: 'enableDynamicBatching'
      }, {
        name: 'recieveShadows'
      }]);
      replaceProperty(Camera, 'Camera', [{
        name: 'CameraClearFlag',
        newName: 'ClearFlag'
      }]);
      replaceProperty(Camera.prototype, 'Camera.prototype', [{
        name: 'color',
        newName: 'clearColor'
      }, {
        name: 'depth',
        newName: 'clearDepth'
      }, {
        name: 'stencil',
        newName: 'clearStencil'
      }]);
      legacyCC.CameraComponent = Camera;
      js.setClassAlias(Camera, 'cc.CameraComponent');
      legacyCC.LightComponent = Light;
      js.setClassAlias(Light, 'cc.LightComponent');
      legacyCC.DirectionalLightComponent = DirectionalLight;
      js.setClassAlias(DirectionalLight, 'cc.DirectionalLightComponent');
      legacyCC.SphereLightComponent = SphereLight$1;
      js.setClassAlias(SphereLight$1, 'cc.SphereLightComponent');
      legacyCC.SpotLightComponent = SpotLight;
      js.setClassAlias(SpotLight, 'cc.SpotLightComponent');
      legacyCC.ModelComponent = MeshRenderer;
      js.setClassAlias(MeshRenderer, 'cc.ModelComponent');
      legacyCC.SkinningModelComponent = SkinnedMeshRenderer;
      js.setClassAlias(SkinnedMeshRenderer, 'cc.SkinningModelComponent');
      legacyCC.SkinningModelUnit = SkinnedMeshUnit;
      js.setClassAlias(SkinnedMeshUnit, 'cc.SkinningModelUnit');
      legacyCC.BatchedSkinningModelComponent = SkinnedMeshBatchRenderer;
      js.setClassAlias(SkinnedMeshBatchRenderer, 'cc.BatchedSkinningModelComponent');

      /*
       Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

       http://www.cocos.com

       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated engine source code (the 'Software'), a limited,
       worldwide, royalty-free, non-assignable, revocable and non-exclusive license
       to use Cocos Creator solely to develop games on your target platforms. You shall
       not use Cocos Creator software for developing other software or tools that's
       used for developing games. You are not granted to publish, distribute,
       sublicense, and/or sell copies of Cocos Creator.

       The software or tools in this License Agreement are licensed, not sold.
       Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

       THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */
      legacyCC.utils = utils;

      var _dec$7, _class$7, _class2$7, _descriptor$7, _descriptor2$6, _descriptor3$5, _temp$7;
      /**
       * @en
       * Value proxy factory for setting uniform on material target.
       * @zh
       * 用于设置材质目标上指定 Uniform 的曲线值代理工厂。
       */

      var UniformProxyFactory = exports('U', (_dec$7 = ccclass('cc.animation.UniformProxyFactory'), _dec$7(_class$7 = (_class2$7 = (_temp$7 = /*#__PURE__*/function () {
        /**
         * @en Pass index.
         * @zh Pass 索引。
         */

        /**
         * @en Uniform name.
         * @zh Uniform 名称。
         */

        /**
         * @en
         * Specify the aimed channel of the uniform.
         * Use this when you're aiming at a single channel of the uniform instead of who uniform.
         * For example, only green(1) channel of a color uniform.
         * @zh
         * 指定目标 Uniform 的通道。
         * 当你希望设置 Uniform 单独的通道而非整个 Uniform 时应该当使用此字段。
         * 例如，仅设置颜色 Uniform 的红色通道。
         */
        function UniformProxyFactory(uniformName, passIndex) {
          _classCallCheck(this, UniformProxyFactory);

          _initializerDefineProperty(this, "passIndex", _descriptor$7, this);

          _initializerDefineProperty(this, "uniformName", _descriptor2$6, this);

          _initializerDefineProperty(this, "channelIndex", _descriptor3$5, this);

          this.passIndex = passIndex || 0;
          this.uniformName = uniformName || '';
        }

        _createClass(UniformProxyFactory, [{
          key: "forTarget",
          value: function forTarget(target) {
            var pass = target.passes[this.passIndex];
            var handle = pass.getHandle(this.uniformName);

            if (!handle) {
              throw new Error("Material \"".concat(target.name, "\" has no uniform \"").concat(this.uniformName, "\""));
            }

            var propertyType = Pass.getPropertyTypeFromHandle(handle);

            if (propertyType === PropertyType.UBO) {
              var realHandle = this.channelIndex === undefined ? handle : pass.getHandle(this.uniformName, this.channelIndex, GFXType.FLOAT);

              if (!realHandle) {
                throw new Error("Uniform \"".concat(this.uniformName, " (in material ").concat(target.name, ") has no channel ").concat(this.channelIndex, "\""));
              }

              if (isUniformArray(pass, this.uniformName)) {
                return {
                  set: function set(value) {
                    pass.setUniformArray(realHandle, value);
                  }
                };
              } else {
                return {
                  set: function set(value) {
                    pass.setUniform(realHandle, value);
                  }
                };
              }
            } else if (propertyType === PropertyType.SAMPLER) {
              var binding = Pass.getBindingFromHandle(handle);
              var prop = pass.properties[this.uniformName];
              var texName = prop && prop.value ? prop.value + '-texture' : getDefaultFromType(prop.type);
              var dftTex = builtinResMgr.get(texName);

              if (!dftTex) {
                warn("Illegal texture default value: ".concat(texName, "."));
                dftTex = builtinResMgr.get('default-texture');
              }

              return {
                set: function set(value) {
                  if (!value) {
                    value = dftTex;
                  }

                  var texture = value.getGFXTexture();

                  if (!texture || !texture.width || !texture.height) {
                    return;
                  }

                  pass.bindTexture(binding, texture);

                  if (value instanceof TextureBase) {
                    pass.bindSampler(binding, samplerLib.getSampler(legacyCC.game._gfxDevice, value.getSamplerHash()));
                  }
                }
              };
            } else {
              throw new Error("Animations are not available for uniforms with property type ".concat(propertyType, "."));
            }
          }
        }]);

        return UniformProxyFactory;
      }(), _temp$7), (_descriptor$7 = _applyDecoratedDescriptor(_class2$7.prototype, "passIndex", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2$6 = _applyDecoratedDescriptor(_class2$7.prototype, "uniformName", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor3$5 = _applyDecoratedDescriptor(_class2$7.prototype, "channelIndex", [_float], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return undefined;
        }
      })), _class2$7)) || _class$7));

      function isUniformArray(pass, name) {
        for (var _iterator = _createForOfIteratorHelperLoose(pass.shaderInfo.blocks), _step; !(_step = _iterator()).done;) {
          var block = _step.value;

          for (var _iterator2 = _createForOfIteratorHelperLoose(block.members), _step2; !(_step2 = _iterator2()).done;) {
            var uniform = _step2.value;

            if (uniform.name === name) {
              return uniform.count > 1;
            }
          }
        }

        return false;
      }

      var _dec$8, _class$8, _class2$8, _descriptor$8, _temp$8, _dec2$7, _class4$2;
      var MorphWeightsValueProxy = exports('M', (_dec$8 = ccclass('cc.animation.MorphWeightsValueProxy'), _dec$8(_class$8 = (_class2$8 = (_temp$8 = /*#__PURE__*/function () {
        function MorphWeightsValueProxy() {
          _classCallCheck(this, MorphWeightsValueProxy);

          _initializerDefineProperty(this, "subMeshIndex", _descriptor$8, this);
        }

        _createClass(MorphWeightsValueProxy, [{
          key: "forTarget",
          value: function forTarget(target) {
            var _this = this;

            return {
              set: function set(value) {
                target.setWeights(value, _this.subMeshIndex);
              }
            };
          }
        }]);

        return MorphWeightsValueProxy;
      }(), _temp$8), (_descriptor$8 = _applyDecoratedDescriptor(_class2$8.prototype, "subMeshIndex", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2$8)) || _class$8));
      /**
       * @en
       * Value proxy factory for setting morph weights of each sub-mesh on model component target.
       * @zh
       * 用于设置模型组件目标上所有子网格形变权重的曲线值代理工厂。
       */

      var MorphWeightsAllValueProxy = exports('a', (_dec2$7 = ccclass('cc.animation.MorphWeightsAllValueProxy'), _dec2$7(_class4$2 = /*#__PURE__*/function () {
        function MorphWeightsAllValueProxy() {
          _classCallCheck(this, MorphWeightsAllValueProxy);
        }

        _createClass(MorphWeightsAllValueProxy, [{
          key: "forTarget",
          value: function forTarget(target) {
            return {
              set: function set(value) {
                var _target$mesh$struct$p, _target$mesh;

                var nSubMeshes = (_target$mesh$struct$p = (_target$mesh = target.mesh) === null || _target$mesh === void 0 ? void 0 : _target$mesh.struct.primitives.length) !== null && _target$mesh$struct$p !== void 0 ? _target$mesh$struct$p : 0;

                for (var iSubMesh = 0; iSubMesh < nSubMeshes; ++iSubMesh) {
                  target.setWeights(value, iSubMesh);
                }
              }
            };
          }
        }]);

        return MorphWeightsAllValueProxy;
      }()) || _class4$2));

      var _dec2$8, _class4$3, _class5$2, _descriptor4$5, _descriptor5$4, _descriptor6$3, _temp2$2;

      function makeCubicSplineValueConstructor(name, constructorX, scaleFx, scaleAndAdd) {
        var _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

        var tempValue = new constructorX();
        var m0 = new constructorX();
        var m1 = new constructorX();
        var CubicSplineValueClass = (_dec = ccclass(name), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function () {
          function CubicSplineValueClass(dataPoint, inTangent, outTangent) {
            _classCallCheck(this, CubicSplineValueClass);

            _initializerDefineProperty(this, "dataPoint", _descriptor, this);

            _initializerDefineProperty(this, "inTangent", _descriptor2, this);

            _initializerDefineProperty(this, "outTangent", _descriptor3, this);

            this.dataPoint = dataPoint || new constructorX();
            this.inTangent = inTangent || new constructorX();
            this.outTangent = outTangent || new constructorX();
          }

          _createClass(CubicSplineValueClass, [{
            key: "lerp",
            value: function lerp(to, t, dt) {
              var p0 = this.dataPoint;
              var p1 = to.dataPoint; // dt => t_k+1 - t_k

              m0 = scaleFx(m0, this.inTangent, dt);
              m1 = scaleFx(m1, to.outTangent, dt);
              var t_3 = t * t * t;
              var t_2 = t * t;
              var f_0 = 2 * t_3 - 3 * t_2 + 1;
              var f_1 = t_3 - 2 * t_2 + t;
              var f_2 = -2 * t_3 + 3 * t_2;
              var f_3 = t_3 - t_2;
              tempValue = scaleFx(tempValue, p0, f_0);
              tempValue = scaleAndAdd(tempValue, tempValue, m0, f_1);
              tempValue = scaleAndAdd(tempValue, tempValue, p1, f_2);
              tempValue = scaleAndAdd(tempValue, tempValue, m1, f_3);
              return tempValue;
            }
          }, {
            key: "getNoLerp",
            value: function getNoLerp() {
              return this.dataPoint;
            }
          }]);

          return CubicSplineValueClass;
        }(), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dataPoint", [serializable], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return new constructorX();
          }
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "inTangent", [serializable], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return new constructorX();
          }
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "outTangent", [serializable], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return new constructorX();
          }
        })), _class2)) || _class); // @ts-ignore TS2367

        if (constructorX === Quat) {
          var _lerp = CubicSplineValueClass.prototype.lerp;

          CubicSplineValueClass.prototype.lerp = function (to, t, dt) {
            var result = _lerp.call(this, to, t, dt);

            Quat.normalize(result, result);
            return result;
          };
        }

        return CubicSplineValueClass;
      }

      var CubicSplineVec2Value = exports('C', makeCubicSplineValueConstructor('cc.CubicSplineVec2Value', Vec2, Vec2.multiplyScalar, Vec2.scaleAndAdd));
      legacyCC.CubicSplineVec2Value = CubicSplineVec2Value;
      var CubicSplineVec3Value = exports('b', makeCubicSplineValueConstructor('cc.CubicSplineVec3Value', Vec3, Vec3.multiplyScalar, Vec3.scaleAndAdd));
      legacyCC.CubicSplineVec3Value = CubicSplineVec3Value;
      var CubicSplineVec4Value = exports('c', makeCubicSplineValueConstructor('cc.CubicSplineVec4Value', Vec4, Vec4.multiplyScalar, Vec4.scaleAndAdd));
      legacyCC.CubicSplineVec4Value = CubicSplineVec4Value;
      var CubicSplineQuatValue = exports('d', makeCubicSplineValueConstructor('cc.CubicSplineQuatValue', Quat, Quat.multiplyScalar, Quat.scaleAndAdd));
      legacyCC.CubicSplineQuatValue = CubicSplineQuatValue;
      var CubicSplineNumberValue = exports('e', (_dec2$8 = ccclass('cc.CubicSplineNumberValue'), _dec2$8(_class4$3 = (_class5$2 = (_temp2$2 = /*#__PURE__*/function () {
        function CubicSplineNumberValue(dataPoint, inTangent, outTangent) {
          _classCallCheck(this, CubicSplineNumberValue);

          _initializerDefineProperty(this, "dataPoint", _descriptor4$5, this);

          _initializerDefineProperty(this, "inTangent", _descriptor5$4, this);

          _initializerDefineProperty(this, "outTangent", _descriptor6$3, this);

          this.dataPoint = dataPoint;
          this.inTangent = inTangent;
          this.outTangent = outTangent;
        }

        _createClass(CubicSplineNumberValue, [{
          key: "lerp",
          value: function lerp(to, t, dt) {
            var p0 = this.dataPoint;
            var p1 = to.dataPoint; // dt => t_k+1 - t_k

            var m0 = this.outTangent * dt;
            var m1 = to.inTangent * dt;
            var t_3 = t * t * t;
            var t_2 = t * t;
            var f_0 = 2 * t_3 - 3 * t_2 + 1;
            var f_1 = t_3 - 2 * t_2 + t;
            var f_2 = -2 * t_3 + 3 * t_2;
            var f_3 = t_3 - t_2;
            return p0 * f_0 + m0 * f_1 + p1 * f_2 + m1 * f_3;
          }
        }, {
          key: "getNoLerp",
          value: function getNoLerp() {
            return this.dataPoint;
          }
        }]);

        return CubicSplineNumberValue;
      }(), _temp2$2), (_descriptor4$5 = _applyDecoratedDescriptor(_class5$2.prototype, "dataPoint", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5$4 = _applyDecoratedDescriptor(_class5$2.prototype, "inTangent", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6$3 = _applyDecoratedDescriptor(_class5$2.prototype, "outTangent", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class5$2)) || _class4$3));
      legacyCC.CubicSplineNumberValue = CubicSplineNumberValue;

      /**
       * @category animation
       */
      function constant() {
        return 0;
      }
      function linear(k) {
        return k;
      }
      function quadIn(k) {
        return k * k;
      }
      function quadOut(k) {
        return k * (2 - k);
      }
      function quadInOut(k) {
        k *= 2;

        if (k < 1) {
          return 0.5 * k * k;
        }

        return -0.5 * (--k * (k - 2) - 1);
      }
      function cubicIn(k) {
        return k * k * k;
      }
      function cubicOut(k) {
        return --k * k * k + 1;
      }
      function cubicInOut(k) {
        k *= 2;

        if (k < 1) {
          return 0.5 * k * k * k;
        }

        return 0.5 * ((k -= 2) * k * k + 2);
      }
      function quartIn(k) {
        return k * k * k * k;
      }
      function quartOut(k) {
        return 1 - --k * k * k * k;
      }
      function quartInOut(k) {
        k *= 2;

        if (k < 1) {
          return 0.5 * k * k * k * k;
        }

        return -0.5 * ((k -= 2) * k * k * k - 2);
      }
      function quintIn(k) {
        return k * k * k * k * k;
      }
      function quintOut(k) {
        return --k * k * k * k * k + 1;
      }
      function quintInOut(k) {
        k *= 2;

        if (k < 1) {
          return 0.5 * k * k * k * k * k;
        }

        return 0.5 * ((k -= 2) * k * k * k * k + 2);
      }
      function sineIn(k) {
        return 1 - Math.cos(k * Math.PI / 2);
      }
      function sineOut(k) {
        return Math.sin(k * Math.PI / 2);
      }
      function sineInOut(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
      }
      function expoIn(k) {
        return k === 0 ? 0 : Math.pow(1024, k - 1);
      }
      function expoOut(k) {
        return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
      }
      function expoInOut(k) {
        if (k === 0) {
          return 0;
        }

        if (k === 1) {
          return 1;
        }

        k *= 2;

        if (k < 1) {
          return 0.5 * Math.pow(1024, k - 1);
        }

        return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
      }
      function circIn(k) {
        return 1 - Math.sqrt(1 - k * k);
      }
      function circOut(k) {
        return Math.sqrt(1 - --k * k);
      }
      function circInOut(k) {
        k *= 2;

        if (k < 1) {
          return -0.5 * (Math.sqrt(1 - k * k) - 1);
        }

        return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
      }
      function elasticIn(k) {
        var s;
        var a = 0.1;
        var p = 0.4;

        if (k === 0) {
          return 0;
        }

        if (k === 1) {
          return 1;
        }

        if (!a || a < 1) {
          a = 1;
          s = p / 4;
        } else {
          s = p * Math.asin(1 / a) / (2 * Math.PI);
        }

        return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
      }
      function elasticOut(k) {
        var s;
        var a = 0.1;
        var p = 0.4;

        if (k === 0) {
          return 0;
        }

        if (k === 1) {
          return 1;
        }

        if (!a || a < 1) {
          a = 1;
          s = p / 4;
        } else {
          s = p * Math.asin(1 / a) / (2 * Math.PI);
        }

        return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
      }
      function elasticInOut(k) {
        var s;
        var a = 0.1;
        var p = 0.4;

        if (k === 0) {
          return 0;
        }

        if (k === 1) {
          return 1;
        }

        if (!a || a < 1) {
          a = 1;
          s = p / 4;
        } else {
          s = p * Math.asin(1 / a) / (2 * Math.PI);
        }

        k *= 2;

        if (k < 1) {
          return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
        }

        return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
      }
      function backIn(k) {
        var s = 1.70158;
        return k * k * ((s + 1) * k - s);
      }
      function backOut(k) {
        var s = 1.70158;
        return --k * k * ((s + 1) * k + s) + 1;
      }
      function backInOut(k) {
        var s = 1.70158 * 1.525;
        k *= 2;

        if (k < 1) {
          return 0.5 * (k * k * ((s + 1) * k - s));
        }

        return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
      }
      function bounceIn(k) {
        return 1 - bounceOut(1 - k);
      }
      function bounceOut(k) {
        if (k < 1 / 2.75) {
          return 7.5625 * k * k;
        } else if (k < 2 / 2.75) {
          return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
        } else if (k < 2.5 / 2.75) {
          return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
        } else {
          return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
        }
      }
      function bounceInOut(k) {
        if (k < 0.5) {
          return bounceIn(k * 2) * 0.5;
        }

        return bounceOut(k * 2 - 1) * 0.5 + 0.5;
      }
      function smooth(k) {
        if (k <= 0) {
          return 0;
        }

        if (k >= 1) {
          return 1;
        }

        return k * k * (3 - 2 * k);
      }
      function fade(k) {
        if (k <= 0) {
          return 0;
        }

        if (k >= 1) {
          return 1;
        }

        return k * k * k * (k * (k * 6 - 15) + 10);
      }
      var quadOutIn = _makeOutIn(quadIn, quadOut);
      var cubicOutIn = _makeOutIn(cubicIn, cubicOut);
      var quartOutIn = _makeOutIn(quartIn, quartOut);
      var quintOutIn = _makeOutIn(quintIn, quintOut);
      var sineOutIn = _makeOutIn(sineIn, sineOut);
      var expoOutIn = _makeOutIn(expoIn, expoOut);
      var circOutIn = _makeOutIn(circIn, circOut);
      var elasticOutIn = _makeOutIn(elasticIn, elasticOut);
      var backOutIn = _makeOutIn(backIn, backOut);
      var bounceOutIn = _makeOutIn(bounceIn, bounceOut);

      function _makeOutIn(fnIn, fnOut) {
        return function (k) {
          if (k < 0.5) {
            return fnOut(k * 2) / 2;
          }

          return fnIn(2 * k - 1) / 2 + 0.5;
        };
      }

      var easing = /*#__PURE__*/Object.freeze({
        __proto__: null,
        constant: constant,
        linear: linear,
        quadIn: quadIn,
        quadOut: quadOut,
        quadInOut: quadInOut,
        cubicIn: cubicIn,
        cubicOut: cubicOut,
        cubicInOut: cubicInOut,
        quartIn: quartIn,
        quartOut: quartOut,
        quartInOut: quartInOut,
        quintIn: quintIn,
        quintOut: quintOut,
        quintInOut: quintInOut,
        sineIn: sineIn,
        sineOut: sineOut,
        sineInOut: sineInOut,
        expoIn: expoIn,
        expoOut: expoOut,
        expoInOut: expoInOut,
        circIn: circIn,
        circOut: circOut,
        circInOut: circInOut,
        elasticIn: elasticIn,
        elasticOut: elasticOut,
        elasticInOut: elasticInOut,
        backIn: backIn,
        backOut: backOut,
        backInOut: backInOut,
        bounceIn: bounceIn,
        bounceOut: bounceOut,
        bounceInOut: bounceInOut,
        smooth: smooth,
        fade: fade,
        quadOutIn: quadOutIn,
        cubicOutIn: cubicOutIn,
        quartOutIn: quartOutIn,
        quintOutIn: quintOutIn,
        sineOutIn: sineOutIn,
        expoOutIn: expoOutIn,
        circOutIn: circOutIn,
        elasticOutIn: elasticOutIn,
        backOutIn: backOutIn,
        bounceOutIn: bounceOutIn
      });
      exports('n', easing);

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
      // tslint:disable
      var EPSILON = 1e-6;
      /**
       * Searches the entire sorted Array for an element and returns the index of the element.
       * @param array
       * @param value
       * @return The index of item in the sorted Array, if item is found; otherwise, a negative number that is the bitwise complement of the index of the next element that is larger than item or, if there is no larger element, the bitwise complement of array's length.
       */
      // function binarySearch (array, value) {
      //     for (var l = 0, h = array.length - 1, m = h >>> 1;
      //          l <= h;
      //          m = (l + h) >>> 1
      //     ) {
      //         var test = array[m];
      //         if (test > value) {
      //             h = m - 1;
      //         }
      //         else if (test < value) {
      //             l = m + 1;
      //         }
      //         else {
      //             return m;
      //         }
      //     }
      //     return ~l;
      // }

      /**
       * Searches the entire sorted Array for an element and returns the index of the element.
       * It accepts iteratee which is invoked for value and each element of array to compute their sort ranking.
       * The iteratee is invoked with one argument: (value).
       * @param array
       * @param value
       * @param iteratee - the iteratee invoked per element
       * @return The index of item in the sorted Array, if item is found; otherwise, a negative number that is the bitwise complement of the index of the next element that is larger than item or, if there is no larger element, the bitwise complement of array's length.
       */
      // function binarySearchBy (array, value, iteratee) {
      //     for (var l = 0, h = array.length - 1, m = h >>> 1;
      //          l <= h;
      //          m = (l + h) >>> 1
      //     ) {
      //         var test = iteratee(array[m]);
      //         if (test > value) {
      //             h = m - 1;
      //         }
      //         else if (test < value) {
      //             l = m + 1;
      //         }
      //         else {
      //             return m;
      //         }
      //     }
      //     return ~l;
      // }

      function binarySearchEpsilon(array, value) {
        var l = 0;

        for (var h = array.length - 1, m = h >>> 1; l <= h; m = l + h >>> 1) {
          var test = array[m];

          if (test > value + EPSILON) {
            h = m - 1;
          } else if (test < value - EPSILON) {
            l = m + 1;
          } else {
            return m;
          }
        }

        return ~l;
      }

      var EPSILON$1 = 1e-6;
      function binarySearchEpsilon$1(array, value) {
        var low = 0;
        var high = array.length - 1;
        var middle = high >>> 1;

        for (; low <= high; middle = low + high >>> 1) {
          var middleValue = array[middle];

          if (middleValue > value + EPSILON$1) {
            high = middle - 1;
          } else if (middleValue < value - EPSILON$1) {
            low = middle + 1;
          } else {
            return middle;
          }
        }

        return ~low;
      }

      /**
       * @category animation
       */
      function bezier(C1, C2, C3, C4, t) {
        var t1 = 1 - t;
        return C1 * t1 * t1 * t1 + C2 * 3 * t1 * t1 * t + C3 * 3 * t1 * t * t + C4 * t * t * t;
      }
      legacyCC.bezier = bezier; // var sin = Math.sin;

      var cos = Math.cos;
      var acos = Math.acos;
      var max = Math.max; // var atan2 = Math.atan2;

      var pi = Math.PI;
      var tau = 2 * pi;
      var sqrt = Math.sqrt;

      function crt(v) {
        if (v < 0) {
          return -Math.pow(-v, 1 / 3);
        } else {
          return Math.pow(v, 1 / 3);
        }
      } // Modified from http://jsbin.com/yibipofeqi/1/edit, optimized for animations.
      // The origin Cardano's algorithm is based on http://www.trans4mind.com/personal_development/mathematics/polynomials/cubicAlgebra.htm


      function cardano(curve, x) {
        // align curve with the intersecting line:
        // var line = {p1: {x: x, y: 0}, p2: {x: x, y: 1}};
        // var aligned = align(curve, line);
        //// and rewrite from [a(1-t)^3 + 3bt(1-t)^2 + 3c(1-t)t^2 + dt^3] form
        //    pa = aligned[0].y,
        //    pb = aligned[1].y,
        //    pc = aligned[2].y,
        //    pd = aligned[3].y;
        ////// curve = [{x:0, y:1}, {x: curve[0], y: 1-curve[1]}, {x: curve[2], y: 1-curve[3]}, {x:1, y:0}];
        var pa = x - 0;
        var pb = x - curve[0];
        var pc = x - curve[2];
        var pd = x - 1; // to [t^3 + at^2 + bt + c] form:

        var pa3 = pa * 3;
        var pb3 = pb * 3;
        var pc3 = pc * 3;
        var d = -pa + pb3 - pc3 + pd;
        var rd = 1 / d;
        var r3 = 1 / 3;
        var a = (pa3 - 6 * pb + pc3) * rd;
        var a3 = a * r3;
        var b = (-pa3 + pb3) * rd;
        var c = pa * rd; // then, determine p and q:

        var p = (3 * b - a * a) * r3;
        var p3 = p * r3;
        var q = (2 * a * a * a - 9 * a * b + 27 * c) / 27;
        var q2 = q / 2; // and determine the discriminant:

        var discriminant = q2 * q2 + p3 * p3 * p3; // and some reserved variables

        var u1;
        var v1;
        var x1;
        var x2;
        var x3; // If the discriminant is negative, use polar coordinates
        // to get around square roots of negative numbers

        if (discriminant < 0) {
          var mp3 = -p * r3;
          var mp33 = mp3 * mp3 * mp3;
          var r = sqrt(mp33); // compute cosphi corrected for IEEE float rounding:

          var t = -q / (2 * r);
          var cosphi = t < -1 ? -1 : t > 1 ? 1 : t;
          var phi = acos(cosphi);
          var crtr = crt(r);
          var t1 = 2 * crtr;
          x1 = t1 * cos(phi * r3) - a3;
          x2 = t1 * cos((phi + tau) * r3) - a3;
          x3 = t1 * cos((phi + 2 * tau) * r3) - a3; // choose best percentage

          if (0 <= x1 && x1 <= 1) {
            if (0 <= x2 && x2 <= 1) {
              if (0 <= x3 && x3 <= 1) {
                return max(x1, x2, x3);
              } else {
                return max(x1, x2);
              }
            } else if (0 <= x3 && x3 <= 1) {
              return max(x1, x3);
            } else {
              return x1;
            }
          } else {
            if (0 <= x2 && x2 <= 1) {
              if (0 <= x3 && x3 <= 1) {
                return max(x2, x3);
              } else {
                return x2;
              }
            } else {
              return x3;
            }
          }
        } else if (discriminant === 0) {
          u1 = q2 < 0 ? crt(-q2) : -crt(q2);
          x1 = 2 * u1 - a3;
          x2 = -u1 - a3; // choose best percentage

          if (0 <= x1 && x1 <= 1) {
            if (0 <= x2 && x2 <= 1) {
              return max(x1, x2);
            } else {
              return x1;
            }
          } else {
            return x2;
          }
        } // one real root, and two imaginary roots
        else {
            var sd = sqrt(discriminant);
            u1 = crt(-q2 + sd);
            v1 = crt(q2 + sd);
            x1 = u1 - v1 - a3;
            return x1;
          }
      }

      function bezierByTime(controlPoints, x) {
        var percent = cardano(controlPoints, x); // t

        var p0y = 0; // a

        var p1y = controlPoints[1]; // b

        var p2y = controlPoints[3]; // c

        var p3y = 1; // d

        var t1 = 1 - percent;
        return p0y * t1 * t1 * t1 + p1y * 3 * percent * t1 * t1 + p2y * 3 * percent * percent * t1 + p3y * percent * percent * percent;
      }
      legacyCC.bezierByTime = bezierByTime;

      /**
       * 表示曲线值，曲线值可以是任意类型，但必须符合插值方式的要求。
       */

      var RatioSampler = exports('R', /*#__PURE__*/function () {
        function RatioSampler(ratios) {
          _classCallCheck(this, RatioSampler);

          this.ratios = void 0;
          this._findRatio = void 0;
          this.ratios = ratios; // If every piece of ratios are the same, we can use the quick function to find frame index.

          var currRatioDif;
          var lastRatioDif;
          var canOptimize = true;
          var EPSILON = 1e-6;

          for (var i = 1, l = ratios.length; i < l; i++) {
            currRatioDif = ratios[i] - ratios[i - 1];

            if (i === 1) {
              lastRatioDif = currRatioDif;
            } else if (Math.abs(currRatioDif - lastRatioDif) > EPSILON) {
              canOptimize = false;
              break;
            }
          }

          this._findRatio = canOptimize ? quickFindIndex : binarySearchEpsilon$1;
        }

        _createClass(RatioSampler, [{
          key: "sample",
          value: function sample(ratio) {
            return this._findRatio(this.ratios, ratio);
          }
        }]);

        return RatioSampler;
      }());
      legacyCC.RatioSampler = RatioSampler;
      /**
       * 动画曲线。
       */

      var AnimCurve = exports('z', /*#__PURE__*/function () {
        _createClass(AnimCurve, null, [{
          key: "Bezier",
          value: function Bezier(controlPoints) {
            return controlPoints;
          }
        }]);

        function AnimCurve(propertyCurveData, duration) {
          _classCallCheck(this, AnimCurve);

          this.types = undefined;
          this.type = null;
          this._values = [];
          this._lerp = undefined;
          this._duration = void 0;
          this._array = void 0;
          this._duration = duration; // Install values.

          this._values = propertyCurveData.values;

          var getCurveType = function getCurveType(easingMethod) {
            if (typeof easingMethod === 'string') {
              return easingMethod;
            } else if (Array.isArray(easingMethod)) {
              if (easingMethod[0] === easingMethod[1] && easingMethod[2] === easingMethod[3]) {
                return AnimCurve.Linear;
              } else {
                return AnimCurve.Bezier(easingMethod);
              }
            } else {
              return AnimCurve.Linear;
            }
          };

          if (propertyCurveData.easingMethod !== undefined) {
            this.type = getCurveType(propertyCurveData.easingMethod);
          } else if (Array.isArray(propertyCurveData.easingMethods)) {
            this.types = propertyCurveData.easingMethods.map(getCurveType);
          } else if (propertyCurveData.easingMethods !== undefined) {
            this.types = new Array(this._values.length).fill(null);

            for (var _i = 0, _Object$keys = Object.keys(propertyCurveData.easingMethods); _i < _Object$keys.length; _i++) {
              var index = _Object$keys[_i];
              this.types[index] = getCurveType(propertyCurveData.easingMethods[index]);
            }
          } else {
            this.type = null;
          }

          var firstValue = propertyCurveData.values[0];
          var interpolate = propertyCurveData.interpolate === undefined ? true : propertyCurveData.interpolate; // Setup the lerp function.

          if (interpolate) {
            this._lerp = selectLerpFx(firstValue);
          }

          if (propertyCurveData._arrayLength !== undefined) {
            this._array = new Array(propertyCurveData._arrayLength);
          }
        }

        _createClass(AnimCurve, [{
          key: "hasLerp",
          value: function hasLerp() {
            return !!this._lerp;
          }
        }, {
          key: "valueAt",
          value: function valueAt(index) {
            if (this._array === undefined) {
              var value = this._values[index];

              if (value && value.getNoLerp) {
                return value.getNoLerp();
              } else {
                return value;
              }
            } else {
              for (var i = 0; i < this._array.length; ++i) {
                this._array[i] = this._values[this._array.length * index + i];
              }

              return this._array;
            }
          }
        }, {
          key: "valueBetween",
          value: function valueBetween(ratio, from, fromRatio, to, toRatio) {
            if (this._lerp) {
              var type = this.types ? this.types[from] : this.type;
              var dRatio = toRatio - fromRatio;
              var ratioBetweenFrames = (ratio - fromRatio) / dRatio;

              if (type) {
                ratioBetweenFrames = computeRatioByType(ratioBetweenFrames, type);
              }

              if (this._array === undefined) {
                var fromVal = this._values[from];
                var toVal = this._values[to];

                var value = this._lerp(fromVal, toVal, ratioBetweenFrames, dRatio * this._duration);

                return value;
              } else {
                for (var i = 0; i < this._array.length; ++i) {
                  var _fromVal = this._values[this._array.length * from + i];
                  var _toVal = this._values[this._array.length * to + i];
                  this._array[i] = this._lerp(_fromVal, _toVal, ratioBetweenFrames, dRatio * this._duration);
                }

                return this._array;
              }
            } else {
              if (this._array === undefined) {
                return this.valueAt(from);
              } else {
                for (var _i2 = 0; _i2 < this._array.length; ++_i2) {
                  this._array[_i2] = this._values[this._array.length * from + _i2];
                }

                return this._array;
              }
            }
          }
        }, {
          key: "empty",
          value: function empty() {
            return this._values.length === 0;
          }
          /**
           * Returns if this curve only yields constants.
           */

        }, {
          key: "constant",
          value: function constant() {
            return this._values.length === 1;
          }
        }]);

        return AnimCurve;
      }());
      AnimCurve.Linear = null;
      legacyCC.AnimCurve = AnimCurve;
      var EventInfo = exports('E', /*#__PURE__*/function () {
        function EventInfo() {
          _classCallCheck(this, EventInfo);

          this.events = [];
        }

        _createClass(EventInfo, [{
          key: "add",

          /**
           * @param func event function
           * @param params event params
           */
          value: function add(func, params) {
            this.events.push({
              func: func || '',
              params: params || []
            });
          }
        }]);

        return EventInfo;
      }());
      /**
       * 采样动画曲线。
       * @param curve 动画曲线。
       * @param sampler 采样器。
       * @param ratio 采样比率。
       */

      function sampleAnimationCurve(curve, sampler, ratio) {
        var index = sampler.sample(ratio);

        if (index < 0) {
          index = ~index;

          if (index <= 0) {
            index = 0;
          } else if (index >= sampler.ratios.length) {
            index = sampler.ratios.length - 1;
          } else {
            return curve.valueBetween(ratio, index - 1, sampler.ratios[index - 1], index, sampler.ratios[index]);
          }
        }

        return curve.valueAt(index);
      }
      legacyCC.sampleAnimationCurve = sampleAnimationCurve;
      /**
       * Compute a new ratio by curve type.
       * @param ratio - The origin ratio
       * @param type - If it's Array, then ratio will be computed with bezierByTime.
       * If it's string, then ratio will be computed with cc.easing function
       */

      function computeRatioByType(ratio, type) {
        if (typeof type === 'string') {
          var func = easing[type];

          if (func) {
            ratio = func(ratio);
          } else {
            errorID(3906, type);
          }
        } else if (Array.isArray(type)) {
          // bezier curve
          ratio = bezierByTime(type, ratio);
        }

        return ratio;
      }
      /**
       * Use this function if intervals between frames are same.
       */

      function quickFindIndex(ratios, ratio) {
        var length = ratios.length - 1;

        if (length === 0) {
          return 0;
        }

        var start = ratios[0];

        if (ratio < start) {
          return 0;
        }

        var end = ratios[length];

        if (ratio > end) {
          return length;
        }

        ratio = (ratio - start) / (end - start);
        var eachLength = 1 / length;
        var index = ratio / eachLength;
        var floorIndex = index | 0;
        var EPSILON = 1e-6;

        if (index - floorIndex < EPSILON) {
          return floorIndex;
        } else if (floorIndex + 1 - index < EPSILON) {
          return floorIndex + 1;
        }

        return ~(floorIndex + 1);
      }

      var selectLerpFx = function () {
        function makeValueTypeLerpFx(constructor) {
          var tempValue = new constructor();
          return function (from, to, ratio) {
            // @ts-ignore
            constructor.lerp(tempValue, from, to, ratio);
            return tempValue;
          };
        }

        function callLerpable(from, to, t, dt) {
          return from.lerp(to, t, dt);
        }

        function makeQuatSlerpFx() {
          var tempValue = new Quat();
          return function (from, to, t, dt) {
            return Quat.slerp(tempValue, from, to, t);
          };
        }

        return function (value) {
          if (value === null) {
            return undefined;
          }

          if (typeof value === 'number') {
            return lerp;
          } else if (_typeof(value) === 'object' && value.constructor) {
            if (value instanceof Quat) {
              return makeQuatSlerpFx();
            } else if (value instanceof ValueType) {
              return makeValueTypeLerpFx(value.constructor);
            } else if (value.constructor === Number) {
              return lerp;
            } else if (isLerpable(value)) {
              return callLerpable;
            }
          }

          return undefined;
        };
      }();

      var _dec$9, _class$9, _class2$9, _descriptor$9, _descriptor2$7, _descriptor3$6, _descriptor4$6, _descriptor5$5, _descriptor6$4, _descriptor7$3, _descriptor8$2, _descriptor9$2, _descriptor10$1, _class3$1, _temp$9;
      var AnimationClip = exports('I', (_dec$9 = ccclass('cc.AnimationClip'), _dec$9(_class$9 = (_class2$9 = (_temp$9 = _class3$1 = /*#__PURE__*/function (_Asset) {
        _inherits(AnimationClip, _Asset);

        function AnimationClip() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, AnimationClip);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AnimationClip)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "sample", _descriptor$9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "speed", _descriptor2$7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "wrapMode", _descriptor3$6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "events", _descriptor4$6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_duration", _descriptor5$5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_keys", _descriptor6$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_stepness", _descriptor7$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_curves", _descriptor8$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_commonTargets", _descriptor9$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_hash", _descriptor10$1, _assertThisInitialized(_this));

          _this.frameRate = 0;
          _this._ratioSamplers = [];
          _this._runtimeCurves = void 0;
          _this._runtimeEvents = void 0;
          _this._data = null;
          return _this;
        }

        _createClass(AnimationClip, [{
          key: "onLoaded",
          value: function onLoaded() {
            this.frameRate = this.sample;

            this._decodeCVTAs();
          }
        }, {
          key: "getPropertyCurves",
          value: function getPropertyCurves() {
            if (!this._runtimeCurves) {
              this._createPropertyCurves();
            }

            return this._runtimeCurves;
          }
          /**
           * @zh 提交事件数据的修改。
           * 当你修改了 `this.events` 时，必须调用 `this.updateEventDatas()` 使修改生效。
           * @en
           * Commit event data update.
           * You should call this function after you changed the `events` data to take effect.
           * @internal
           */

        }, {
          key: "updateEventDatas",
          value: function updateEventDatas() {
            delete this._runtimeEvents;
          }
          /**
           * @en Gets the event group shall be processed at specified ratio.
           * @zh 获取事件组应按指定比例处理。
           * @param ratio The ratio.
           * @internal
           */

        }, {
          key: "getEventGroupIndexAtRatio",
          value: function getEventGroupIndexAtRatio(ratio) {
            if (!this._runtimeEvents) {
              this._createRuntimeEvents();
            }

            var result = binarySearchEpsilon(this._runtimeEvents.ratios, ratio);
            return result;
          }
          /**
           * @zh 返回本动画是否包含事件数据。
           * @en Returns if this animation contains event data.
           * @protected
           */

        }, {
          key: "hasEvents",
          value: function hasEvents() {
            return this.events.length !== 0;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            legacyCC.director.root.dataPoolManager.releaseAnimationClip(this);
            SkelAnimDataHub.destroy(this);
            return _get(_getPrototypeOf(AnimationClip.prototype), "destroy", this).call(this);
          }
        }, {
          key: "_createPropertyCurves",
          value: function _createPropertyCurves() {
            var _this2 = this;

            this._ratioSamplers = this._keys.map(function (keys) {
              return new RatioSampler(keys.map(function (key) {
                return key / _this2._duration;
              }));
            });
            this._runtimeCurves = this._curves.map(function (targetCurve) {
              return {
                curve: new AnimCurve(targetCurve.data, _this2._duration),
                modifiers: targetCurve.modifiers,
                valueAdapter: targetCurve.valueAdapter,
                sampler: _this2._ratioSamplers[targetCurve.data.keys],
                commonTarget: targetCurve.commonTarget
              };
            });

            this._applyStepness();
          }
        }, {
          key: "_createRuntimeEvents",
          value: function _createRuntimeEvents() {
            var _this3 = this;

            var ratios = [];
            var eventGroups = [];
            var events = this.events.sort(function (a, b) {
              return a.frame - b.frame;
            });

            var _loop = function _loop() {
              var eventData = _step.value;
              var ratio = eventData.frame / _this3._duration;
              var i = ratios.findIndex(function (r) {
                return r === ratio;
              });

              if (i < 0) {
                i = ratios.length;
                ratios.push(ratio);
                eventGroups.push({
                  events: []
                });
              }

              eventGroups[i].events.push({
                functionName: eventData.func,
                parameters: eventData.params
              });
            };

            for (var _iterator = _createForOfIteratorHelperLoose(events), _step; !(_step = _iterator()).done;) {
              _loop();
            }

            this._runtimeEvents = {
              ratios: ratios,
              eventGroups: eventGroups
            };
          }
        }, {
          key: "_applyStepness",
          value: function _applyStepness() {
            if (!this._runtimeCurves) {
              return;
            } // for (const propertyCurve of this._propertyCurves) {
            //     propertyCurve.curve.stepfy(this._stepness);
            // }

          }
        }, {
          key: "_decodeCVTAs",
          value: function _decodeCVTAs() {
            var binaryBuffer = ArrayBuffer.isView(this._nativeAsset) ? this._nativeAsset.buffer : this._nativeAsset;

            if (!binaryBuffer) {
              return;
            }

            var maybeCompressedKeys = this._keys;

            for (var iKey = 0; iKey < maybeCompressedKeys.length; ++iKey) {
              var keys = maybeCompressedKeys[iKey];

              if (keys instanceof CompactValueTypeArray) {
                maybeCompressedKeys[iKey] = keys.decompress(binaryBuffer);
              }
            }

            for (var iCurve = 0; iCurve < this._curves.length; ++iCurve) {
              var curve = this._curves[iCurve];

              if (curve.data.values instanceof CompactValueTypeArray) {
                curve.data.values = curve.data.values.decompress(binaryBuffer);
              }
            }
          }
        }, {
          key: "duration",

          /**
           * @zh 动画的周期。
           * @en Animation duration.
           */
          get: function get() {
            return this._duration;
          },
          set: function set(value) {
            this._duration = value;
          }
          /**
           * @zh 曲线可引用的所有时间轴。
           * @en Frame keys referenced by curves.
           */

        }, {
          key: "keys",
          get: function get() {
            return this._keys;
          },
          set: function set(value) {
            this._keys = value;
          }
          /**
           * @protected
           */

        }, {
          key: "eventGroups",
          get: function get() {
            if (!this._runtimeEvents) {
              this._createRuntimeEvents();
            }

            return this._runtimeEvents.eventGroups;
          }
          /**
           * @protected
           */

        }, {
          key: "stepness",
          get: function get() {
            return this._stepness;
          }
          /**
           * @protected
           */
          ,
          set: function set(value) {
            this._stepness = value;

            this._applyStepness();
          }
        }, {
          key: "hash",
          get: function get() {
            // hashes should already be computed offline, but if not, make one
            if (this._hash) {
              return this._hash;
            }

            var data = this._nativeAsset;
            var buffer = new Uint8Array(ArrayBuffer.isView(data) ? data.buffer : data);
            return this._hash = murmurhash2_32_gc(buffer, 666);
          }
        }, {
          key: "curves",
          get: function get() {
            return this._curves;
          },
          set: function set(value) {
            this._curves = value;
            delete this._runtimeCurves;
          }
          /**
           * 此动画的数据。
           */

        }, {
          key: "data",
          get: function get() {
            return this._data;
          }
        }, {
          key: "commonTargets",
          get: function get() {
            return this._commonTargets;
          },
          set: function set(value) {
            this._commonTargets = value;
          }
        }], [{
          key: "createWithSpriteFrames",

          /**
           * @en Crate clip with a set of sprite frames
           * @zh 使用一组序列帧图片来创建动画剪辑
           * @example
           * ```
           * import { AnimationClip } from 'cc';
           * const clip = AnimationClip.createWithSpriteFrames(spriteFrames, 10);
           * ```
           */
          value: function createWithSpriteFrames(spriteFrames, sample) {
            if (!Array.isArray(spriteFrames)) {
              errorID(3905);
              return null;
            }

            var clip = new AnimationClip();
            clip.sample = sample || clip.sample;
            clip.duration = spriteFrames.length / clip.sample;
            var step = 1 / clip.sample;
            var keys = new Array(spriteFrames.length);
            var values = new Array(keys.length);

            for (var i = 0; i < spriteFrames.length; i++) {
              keys[i] = i * step;
              values[i] = spriteFrames[i];
            }

            clip.keys = [keys];
            clip.curves = [{
              modifiers: [new ComponentPath('cc.Sprite'), 'spriteFrame'],
              data: {
                keys: 0,
                values: values
              }
            }];
            return clip;
          }
          /**
           * @zh 动画帧率，单位为帧/秒。注意此属性仅用于编辑器动画编辑。
           * @en Animation frame rate: frames per second.
           * Note this property is only used for animation editing in Editor.
           */

        }]);

        return AnimationClip;
      }(Asset), _class3$1.preventDeferredLoadDependents = true, _class3$1.WrapMode = WrapMode, _temp$9), (_descriptor$9 = _applyDecoratedDescriptor(_class2$9.prototype, "sample", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 60;
        }
      }), _descriptor2$7 = _applyDecoratedDescriptor(_class2$9.prototype, "speed", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor3$6 = _applyDecoratedDescriptor(_class2$9.prototype, "wrapMode", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return WrapMode.Normal;
        }
      }), _descriptor4$6 = _applyDecoratedDescriptor(_class2$9.prototype, "events", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5$5 = _applyDecoratedDescriptor(_class2$9.prototype, "_duration", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6$4 = _applyDecoratedDescriptor(_class2$9.prototype, "_keys", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7$3 = _applyDecoratedDescriptor(_class2$9.prototype, "_stepness", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor8$2 = _applyDecoratedDescriptor(_class2$9.prototype, "_curves", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9$2 = _applyDecoratedDescriptor(_class2$9.prototype, "_commonTargets", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10$1 = _applyDecoratedDescriptor(_class2$9.prototype, "_hash", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2$9)) || _class$9));
      legacyCC.AnimationClip = AnimationClip;

      function createBoundTarget(target, modifiers, valueAdapter) {
        var ap;
        var lastPath = modifiers[modifiers.length - 1];

        if (modifiers.length !== 0 && isPropertyPath(lastPath) && !valueAdapter) {
          var resultTarget = evaluatePath.apply(void 0, [target].concat(_toConsumableArray(modifiers.slice(0, modifiers.length - 1))));

          if (resultTarget === null) {
            return null;
          }

          ap = {
            isProxy: false,
            object: resultTarget,
            property: lastPath
          };
        } else if (!valueAdapter) {
          error("Empty animation curve.");
          return null;
        } else {
          var _resultTarget = evaluatePath.apply(void 0, [target].concat(_toConsumableArray(modifiers)));

          if (_resultTarget === null) {
            return null;
          }

          ap = {
            isProxy: true,
            proxy: valueAdapter.forTarget(_resultTarget)
          };
        }

        return {
          setValue: function setValue(value) {
            if (ap.isProxy) {
              ap.proxy.set(value);
            } else {
              ap.object[ap.property] = value;
            }
          },
          getValue: function getValue() {
            if (ap.isProxy) {
              if (!ap.proxy.get) {
                error("Target doesn't provide a get method.");
                return null;
              } else {
                return ap.proxy.get();
              }
            } else {
              return ap.object[ap.property];
            }
          }
        };
      }
      function createBufferedTarget(target, modifiers, valueAdapter) {
        var boundTarget = createBoundTarget(target, modifiers, valueAdapter);

        if (boundTarget === null) {
          return null;
        }

        var value = boundTarget.getValue();
        var copyable = getBuiltinCopy(value);

        if (!copyable) {
          error("Value is not copyable!");
          return null;
        }

        var buffer = copyable.createBuffer();
        var copy = copyable.copy;
        return Object.assign(boundTarget, {
          peek: function peek() {
            return buffer;
          },
          pull: function pull() {
            var value = boundTarget.getValue();
            copy(buffer, value);
          },
          push: function push() {
            boundTarget.setValue(buffer);
          }
        });
      }

      var getBuiltinCopy = function () {
        var map = new Map();
        map.set(Vec2, {
          createBuffer: function createBuffer() {
            return new Vec2();
          },
          copy: Vec2.copy
        });
        map.set(Vec3, {
          createBuffer: function createBuffer() {
            return new Vec3();
          },
          copy: Vec3.copy
        });
        map.set(Vec4, {
          createBuffer: function createBuffer() {
            return new Vec4();
          },
          copy: Vec4.copy
        });
        map.set(Color, {
          createBuffer: function createBuffer() {
            return new Color();
          },
          copy: Color.copy
        });
        return function (value) {
          return map.get(value === null || value === void 0 ? void 0 : value.constructor);
        };
      }();

      var Playable = /*#__PURE__*/function () {
        function Playable() {
          _classCallCheck(this, Playable);

          this._isPlaying = false;
          this._isPaused = false;
          this._stepOnce = false;
        }

        _createClass(Playable, [{
          key: "play",

          /**
           * @en Play this animation.
           * @zh 播放动画。
           */
          value: function play() {
            if (this._isPlaying) {
              if (this._isPaused) {
                this._isPaused = false;
                this.onResume();
              } else {
                this.onError(getError(3912));
              }
            } else {
              this._isPlaying = true;
              this.onPlay();
            }
          }
          /**
           * @en Stop this animation.
           * @zh 停止动画播放。
           */

        }, {
          key: "stop",
          value: function stop() {
            if (this._isPlaying) {
              this._isPlaying = false;
              this.onStop(); // need reset pause flag after onStop

              this._isPaused = false;
            }
          }
          /**
           * @en Pause this animation.
           * @zh 暂停动画。
           */

        }, {
          key: "pause",
          value: function pause() {
            if (this._isPlaying && !this._isPaused) {
              this._isPaused = true;
              this.onPause();
            }
          }
          /**
           * @en Resume this animation.
           * @zh 重新播放动画。
           */

        }, {
          key: "resume",
          value: function resume() {
            if (this._isPlaying && this._isPaused) {
              this._isPaused = false;
              this.onResume();
            }
          }
          /**
           * @en Perform a single frame step.
           * @zh 执行一帧动画。
           */

        }, {
          key: "step",
          value: function step() {
            this.pause();
            this._stepOnce = true;

            if (!this._isPlaying) {
              this.play();
            }
          }
        }, {
          key: "update",
          value: function update(deltaTime) {}
        }, {
          key: "onPlay",
          value: function onPlay() {}
        }, {
          key: "onPause",
          value: function onPause() {}
        }, {
          key: "onResume",
          value: function onResume() {}
        }, {
          key: "onStop",
          value: function onStop() {}
        }, {
          key: "onError",
          value: function onError(message) {}
        }, {
          key: "isPlaying",

          /**
           * @en Whether if this `Playable` is in playing.
           * @zh 该 `Playable` 是否正在播放状态。
           * @default false
           */
          get: function get() {
            return this._isPlaying;
          }
          /**
           * @en Whether if this `Playable` has been paused. This can be true even if in edit mode(isPlaying == false).
           * @zh 该 `Playable` 是否已被暂停。
           * @default false
           */

        }, {
          key: "isPaused",
          get: function get() {
            return this._isPaused;
          }
          /**
           * @en Whether if this `Playable` has been paused or stopped.
           * @zh 该 `Playable` 是否已被暂停或停止。
           */

        }, {
          key: "isMotionless",
          get: function get() {
            return !this.isPlaying || this.isPaused;
          }
        }]);

        return Playable;
      }();

      var BlendStateBuffer = /*#__PURE__*/function () {
        function BlendStateBuffer() {
          _classCallCheck(this, BlendStateBuffer);

          this._nodeBlendStates = new Map();
          this._states = new Set();
        }

        _createClass(BlendStateBuffer, [{
          key: "ref",
          value: function ref(node, property) {
            var nodeBlendState = this._nodeBlendStates.get(node);

            if (!nodeBlendState) {
              nodeBlendState = {
                dirty: false,
                properties: {}
              };

              this._nodeBlendStates.set(node, nodeBlendState);
            }

            var propertyBlendState = nodeBlendState.properties[property];

            if (!propertyBlendState) {
              propertyBlendState = nodeBlendState.properties[property] = new PropertyBlendState(nodeBlendState, isVec3Property(property) ? new Vec3() : new Quat());
            }

            ++propertyBlendState.refCount;
            return propertyBlendState;
          }
        }, {
          key: "deRef",
          value: function deRef(node, property) {
            var nodeBlendState = this._nodeBlendStates.get(node);

            if (!nodeBlendState) {
              return;
            }

            var propertyBlendState = nodeBlendState.properties[property];

            if (!propertyBlendState) {
              return;
            }

            --propertyBlendState.refCount;

            if (propertyBlendState.refCount > 0) {
              return;
            }

            delete nodeBlendState.properties[property];

            if (isEmptyNodeBlendState(nodeBlendState)) {
              this._nodeBlendStates["delete"](node);
            }
          }
        }, {
          key: "apply",
          value: function apply() {
            this._nodeBlendStates.forEach(function (nodeBlendState, node) {
              if (!nodeBlendState.dirty) {
                return;
              }

              nodeBlendState.dirty = false;
              var _nodeBlendState$prope = nodeBlendState.properties,
                  position = _nodeBlendState$prope.position,
                  scale = _nodeBlendState$prope.scale,
                  rotation = _nodeBlendState$prope.rotation,
                  eulerAngles = _nodeBlendState$prope.eulerAngles;
              var t;
              var s;
              var r;
              var anyChanged = false;

              if (position && position.weight !== 0) {
                position.weight = 0;
                t = position.value;
                anyChanged = true;
              }

              if (scale && scale.weight !== 0) {
                scale.weight = 0;
                s = scale.value;
                anyChanged = true;
              } // Note: rotation and eulerAngles can not co-exist.


              if (rotation && rotation.weight !== 0) {
                rotation.weight = 0;
                r = rotation.value;
                anyChanged = true;
              }

              if (eulerAngles && eulerAngles.weight !== 0) {
                eulerAngles.weight = 0;
                r = eulerAngles.value;
                anyChanged = true;
              }

              if (anyChanged) {
                node.setRTS(r, t, s);
              }
            });

            this._states.forEach(function (state) {
              state.onBlendFinished();
            });
          }
        }, {
          key: "bindState",
          value: function bindState(state) {
            this._states.add(state);
          }
        }, {
          key: "unbindState",
          value: function unbindState(state) {
            this._states["delete"](state);
          }
        }]);

        return BlendStateBuffer;
      }();
      function createBlendStateWriter(blendState, node, property, host,
      /**
       * True if this writer will write constant value each time.
       */
      constants) {
        var blendFunction = isVec3Property(property) ? additive3D : additiveQuat;
        var propertyBlendState = blendState.ref(node, property);
        var isConstCacheValid = false;
        var lastWeight = -1;
        return {
          destroy: function destroy() {
            assertIsNonNullable(propertyBlendState);

            if (propertyBlendState) {
              blendState.deRef(node, property);
              propertyBlendState = null;
            }
          },
          forTarget: function forTarget() {
            return {
              /**
               * Gets the node's actual property for now.
               */
              get: function get() {
                return node[property];
              },
              set: function set(value) {
                if (!propertyBlendState || !host.enabled) {
                  return;
                }

                var weight = host.weight;

                if (constants) {
                  if (weight !== 1 || weight !== lastWeight) {
                    // If there are multi writer for this property at this time,
                    // or if the weight has been changed since last write,
                    // we should invalidate the cache.
                    isConstCacheValid = false;
                  } else if (isConstCacheValid) {
                    // Otherwise, we may keep to use the cache.
                    // i.e we leave the weight to 0 to prevent the property from modifying.
                    return;
                  }
                }

                blendFunction(value, weight, propertyBlendState);
                propertyBlendState.weight += weight;
                propertyBlendState.markAsDirty();
                isConstCacheValid = true;
                lastWeight = weight;
              }
            };
          }
        };
      }

      function isQuatProperty(property) {
        return property === 'rotation';
      }

      function isVec3Property(property) {
        return !isQuatProperty(property);
      }

      var PropertyBlendState = /*#__PURE__*/function () {
        /**
         * How many writer reference this property.
         */
        function PropertyBlendState(node, value) {
          _classCallCheck(this, PropertyBlendState);

          this.weight = 0;
          this.value = void 0;
          this.refCount = 0;
          this._node = void 0;
          this._node = node;
          this.value = value;
        }

        _createClass(PropertyBlendState, [{
          key: "markAsDirty",
          value: function markAsDirty() {
            this._node.dirty = true;
          }
        }]);

        return PropertyBlendState;
      }();

      function isEmptyNodeBlendState(nodeBlendState) {
        // Which is equal to `Object.keys(nodeBlendState.properties).length === 0`.
        return !nodeBlendState.properties.position && !nodeBlendState.properties.rotation && !nodeBlendState.properties.eulerAngles && !nodeBlendState.properties.scale;
      }
      /**
       * If propertyBlendState.weight equals to zero, the propertyBlendState.value is dirty.
       * You shall handle this situation correctly.
       */


      function additive3D(value, weight, propertyBlendState) {
        if (propertyBlendState.weight === 0) {
          Vec3.zero(propertyBlendState.value);
        }

        if (weight === 0) {
          return propertyBlendState.value;
        } else if (weight === 1) {
          return Vec3.copy(propertyBlendState.value, value);
        }

        return Vec3.scaleAndAdd(propertyBlendState.value, propertyBlendState.value, value, weight);
      }

      function additiveQuat(value, weight, propertyBlendState) {
        if (propertyBlendState.weight === 0) {
          Quat.identity(propertyBlendState.value);
        }

        if (weight === 0) {
          return propertyBlendState.value;
        } else if (weight === 1) {
          return Quat.copy(propertyBlendState.value, value);
        }

        var t = weight / (propertyBlendState.weight + weight);
        return Quat.slerp(propertyBlendState.value, propertyBlendState.value, value, t);
      }

      /**
       * @en The event type supported by Animation
       * @zh Animation 支持的事件类型。
       */
      var EventType;

      (function (EventType) {
        EventType["PLAY"] = "play";
        EventType["STOP"] = "stop";
        EventType["PAUSE"] = "pause";
        EventType["RESUME"] = "resume";
        EventType["LASTFRAME"] = "lastframe";
        EventType["FINISHED"] = "finished";
      })(EventType || (EventType = {}));

      ccenum(EventType);
      var ICurveInstance = /*#__PURE__*/function () {
        function ICurveInstance(runtimeCurve, target, boundTarget) {
          _classCallCheck(this, ICurveInstance);

          this.commonTargetIndex = void 0;
          this._curve = void 0;
          this._boundTarget = void 0;
          this._rootTargetProperty = void 0;
          this._curveDetail = void 0;
          this._curve = runtimeCurve.curve;
          this._curveDetail = runtimeCurve;
          this._boundTarget = boundTarget;
        }

        _createClass(ICurveInstance, [{
          key: "applySample",
          value: function applySample(ratio, index, lerpRequired, samplerResultCache, weight) {
            if (this._curve.empty()) {
              return;
            }

            var value;

            if (!this._curve.hasLerp() || !lerpRequired) {
              value = this._curve.valueAt(index);
            } else {
              value = this._curve.valueBetween(ratio, samplerResultCache.from, samplerResultCache.fromRatio, samplerResultCache.to, samplerResultCache.toRatio);
            }

            this._setValue(value, weight);
          }
        }, {
          key: "_setValue",
          value: function _setValue(value, weight) {
            this._boundTarget.setValue(value);
          }
        }, {
          key: "propertyName",
          get: function get() {
            return this._rootTargetProperty || '';
          }
        }, {
          key: "curveDetail",
          get: function get() {
            return this._curveDetail;
          }
        }]);

        return ICurveInstance;
      }();
      /**
       * The curves in ISamplerSharedGroup share a same keys.
       */

      function makeSamplerSharedGroup(sampler) {
        return {
          sampler: sampler,
          curves: [],
          samplerResultCache: {
            from: 0,
            fromRatio: 0,
            to: 0,
            toRatio: 0
          }
        };
      }

      var InvalidIndex = -1;
      /**
       * @en
       * The AnimationState gives full control over animation playback process.
       * In most cases the Animation Component is sufficient and easier to use. Use the AnimationState if you need full control.
       * @zh
       * AnimationState 完全控制动画播放过程。<br/>
       * 大多数情况下 动画组件 是足够和易于使用的。如果您需要更多的动画控制接口，请使用 AnimationState。
       *
       */

      var AnimationState = exports('A', /*#__PURE__*/function (_Playable) {
        _inherits(AnimationState, _Playable);

        _createClass(AnimationState, [{
          key: "clip",

          /**
           * @en The clip that is being played by this animation state.
           * @zh 此动画状态正在播放的剪辑。
           */
          get: function get() {
            return this._clip;
          }
          /**
           * @en The name of the playing animation.
           * @zh 动画的名字。
           */

        }, {
          key: "name",
          get: function get() {
            return this._name;
          }
        }, {
          key: "length",
          get: function get() {
            return this.duration;
          }
          /**
           * @en
           * Wrapping mode of the playing animation.
           * Notice : dynamic change wrapMode will reset time and repeatCount property
           * @zh
           * 动画循环方式。
           * 需要注意的是，动态修改 wrapMode 时，会重置 time 以及 repeatCount。
           * @default: WrapMode.Normal
           */

        }, {
          key: "wrapMode",
          get: function get() {
            return this._wrapMode;
          },
          set: function set(value) {
            this._wrapMode = value;


            this.time = 0;

            if (value & WrapModeMask.Loop) {
              this.repeatCount = Infinity;
            } else {
              this.repeatCount = 1;
            }
          }
          /**
           * @en The animation's iteration count property.
           *
           * A real number greater than or equal to zero (including positive infinity) representing the number of times
           * to repeat the animation node.
           *
           * Values less than zero and NaN values are treated as the value 1.0 for the purpose of timing model
           * calculations.
           *
           * @zh 迭代次数，指动画播放多少次后结束, normalize time。 如 2.5（2次半）。
           *
           * @default 1
           */

        }, {
          key: "repeatCount",
          get: function get() {
            return this._repeatCount;
          },
          set: function set(value) {
            this._repeatCount = value;
            var shouldWrap = this._wrapMode & WrapModeMask.ShouldWrap;
            var reverse = (this.wrapMode & WrapModeMask.Reverse) === WrapModeMask.Reverse;

            if (value === Infinity && !shouldWrap && !reverse) {
              this._process = this.simpleProcess;
            } else {
              this._process = this.process;
            }
          }
          /**
           * @en The start delay which represents the number of seconds from an animation's start time to the start of
           * the active interval.
           * @zh 延迟多少秒播放。
           * @default 0
           */

        }, {
          key: "delay",
          get: function get() {
            return this._delay;
          },
          set: function set(value) {
            this._delayTime = this._delay = value;
          } // http://www.w3.org/TR/web-animations/#idl-def-AnimationTiming

          /**
           * @en The iteration duration of this animation in seconds. (length)
           * @zh 单次动画的持续时间，秒。（动画长度）
           * @readOnly
           */

        }]);

        function AnimationState(clip) {
          var _this;

          var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

          _classCallCheck(this, AnimationState);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(AnimationState).call(this));
          _this.duration = 1;
          _this.speed = 1;
          _this.time = 0;
          _this.weight = 0;
          _this.frameRate = 0;
          _this._wrapMode = WrapMode.Normal;
          _this._repeatCount = 1;
          _this._currentFramePlayed = false;
          _this._delay = 0;
          _this._delayTime = 0;
          _this._wrappedInfo = new WrappedInfo();
          _this._lastWrapInfo = null;
          _this._lastWrapInfoEvent = null;
          _this._process = _this.process;
          _this._target = null;
          _this._targetNode = null;
          _this._clip = void 0;
          _this._name = void 0;
          _this._lastIterations = void 0;
          _this._samplerSharedGroups = [];
          _this._commonTargetStatuses = [];
          _this._curveLoaded = false;
          _this._ignoreIndex = InvalidIndex;
          _this._blendStateBuffer = null;
          _this._blendStateWriters = [];
          _this._allowLastFrame = false;
          _this._blendStateWriterHost = {
            weight: 0,
            enabled: false
          };
          _this._clip = clip;
          _this._name = name || clip && clip.name;
          return _this;
        }

        _createClass(AnimationState, [{
          key: "initialize",
          value: function initialize(root, propertyCurves) {
            var _legacyCC$director$ge,
                _legacyCC$director$ge2,
                _this2 = this;

            if (this._curveLoaded) {
              return;
            }

            this._curveLoaded = true;

            this._destroyBlendStateWriters();

            this._samplerSharedGroups.length = 0;
            this._blendStateBuffer = (_legacyCC$director$ge = (_legacyCC$director$ge2 = legacyCC.director.getAnimationManager()) === null || _legacyCC$director$ge2 === void 0 ? void 0 : _legacyCC$director$ge2.blendState) !== null && _legacyCC$director$ge !== void 0 ? _legacyCC$director$ge : null;

            if (this._blendStateBuffer) {
              this._blendStateBuffer.bindState(this);
            }

            this._targetNode = root;
            var clip = this._clip;
            this.duration = clip.duration;
            this.speed = clip.speed;
            this.wrapMode = clip.wrapMode;
            this.frameRate = clip.sample;

            if ((this.wrapMode & WrapModeMask.Loop) === WrapModeMask.Loop) {
              this.repeatCount = Infinity;
            } else {
              this.repeatCount = 1;
            }
            /**
             * Create the bound target. Especially optimized for skeletal case.
             */


            var createBoundTargetOptimized = function createBoundTargetOptimized(createFn, rootTarget, path, valueAdapter, isConstant) {
              if (!isTargetingTRS(path) || !_this2._blendStateBuffer) {
                return createFn(rootTarget, path, valueAdapter);
              } else {
                var targetNode = evaluatePath.apply(void 0, [rootTarget].concat(_toConsumableArray(path.slice(0, path.length - 1))));

                if (targetNode !== null && targetNode instanceof Node) {
                  var propertyName = path[path.length - 1];
                  var blendStateWriter = createBlendStateWriter(_this2._blendStateBuffer, targetNode, propertyName, _this2._blendStateWriterHost, isConstant);

                  _this2._blendStateWriters.push(blendStateWriter);

                  return createFn(rootTarget, [], blendStateWriter);
                }
              }

              return null;
            };

            this._commonTargetStatuses = clip.commonTargets.map(function (commonTarget, index) {
              var target = createBoundTargetOptimized(createBufferedTarget, root, commonTarget.modifiers, commonTarget.valueAdapter, false);

              if (target === null) {
                return null;
              } else {
                return {
                  target: target,
                  changed: false
                };
              }
            });

            if (!propertyCurves) {
              propertyCurves = clip.getPropertyCurves();
            }

            var _loop = function _loop(iPropertyCurve) {
              var propertyCurve = propertyCurves[iPropertyCurve];

              var samplerSharedGroup = _this2._samplerSharedGroups.find(function (value) {
                return value.sampler === propertyCurve.sampler;
              });

              if (!samplerSharedGroup) {
                samplerSharedGroup = makeSamplerSharedGroup(propertyCurve.sampler);

                _this2._samplerSharedGroups.push(samplerSharedGroup);
              }

              var rootTarget = void 0;

              if (typeof propertyCurve.commonTarget === 'undefined') {
                rootTarget = root;
              } else {
                var commonTargetStatus = _this2._commonTargetStatuses[propertyCurve.commonTarget];

                if (!commonTargetStatus) {
                  return "continue";
                }

                rootTarget = commonTargetStatus.target.peek();
              }

              var boundTarget = createBoundTargetOptimized(createBoundTarget, rootTarget, propertyCurve.modifiers, propertyCurve.valueAdapter, propertyCurve.curve.constant());

              if (boundTarget === null) ; else {
                var curveInstance = new ICurveInstance(propertyCurve, rootTarget, boundTarget);
                curveInstance.commonTargetIndex = propertyCurve.commonTarget;
                samplerSharedGroup.curves.push(curveInstance);
              }
            };

            for (var iPropertyCurve = 0; iPropertyCurve < propertyCurves.length; ++iPropertyCurve) {
              var _ret = _loop(iPropertyCurve);

              if (_ret === "continue") continue;
            }
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._destroyBlendStateWriters();
          }
          /**
           * @private
           */

        }, {
          key: "onBlendFinished",
          value: function onBlendFinished() {
            this._blendStateWriterHost.enabled = false;
          }
          /**
           * @deprecated Since V1.1.1, animation states were no longer defined as event targets.
           * To process animation events, use `Animation` instead.
           */

        }, {
          key: "emit",
          value: function emit() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            legacyCC.director.getAnimationManager().pushDelayEvent(this._emit, this, args);
          }
          /**
           * @deprecated Since V1.1.1, animation states were no longer defined as event targets.
           * To process animation events, use `Animation` instead.
           */

        }, {
          key: "on",
          value: function on(type, callback, target) {
            if (this._target && this._target.isValid) {
              return this._target.on(type, callback, target);
            } else {
              return null;
            }
          }
          /**
           * @deprecated Since V1.1.1, animation states were no longer defined as event targets.
           * To process animation events, use `Animation` instead.
           */

        }, {
          key: "once",
          value: function once(type, callback, target) {
            if (this._target && this._target.isValid) {
              return this._target.once(type, callback, target);
            } else {
              return null;
            }
          }
          /**
           * @deprecated Since V1.1.1, animation states were no longer defined as event targets.
           * To process animation events, use `Animation` instead.
           */

        }, {
          key: "off",
          value: function off(type, callback, target) {
            if (this._target && this._target.isValid) {
              this._target.off(type, callback, target);
            }
          }
          /**
           * @zh
           * 是否允许触发 `LastFrame` 事件。
           * @en
           * Whether `LastFrame` should be triggered.
           * @param allowed True if the last frame events may be triggered.
           */

        }, {
          key: "allowLastFrameEvent",
          value: function allowLastFrameEvent(allowed) {
            this._allowLastFrame = allowed;
          }
        }, {
          key: "_setEventTarget",
          value: function _setEventTarget(target) {
            this._target = target;
          }
        }, {
          key: "setTime",
          value: function setTime(time) {
            this._currentFramePlayed = false;
            this.time = time || 0;

            {
              this._lastWrapInfoEvent = null;
              this._ignoreIndex = InvalidIndex;
              var info = this.getWrappedInfo(time, this._wrappedInfo);
              var direction = info.direction;

              var frameIndex = this._clip.getEventGroupIndexAtRatio(info.ratio); // only ignore when time not on a frame index


              if (frameIndex < 0) {
                frameIndex = ~frameIndex - 1; // if direction is inverse, then increase index

                if (direction < 0) {
                  frameIndex += 1;
                }

                this._ignoreIndex = frameIndex;
              }
            }
          }
        }, {
          key: "update",
          value: function update(delta) {
            // calculate delay time
            if (this._delayTime > 0) {
              this._delayTime -= delta;

              if (this._delayTime > 0) {
                // still waiting
                return;
              }
            } // make first frame perfect
            // var playPerfectFirstFrame = (this.time === 0);


            if (this._currentFramePlayed) {
              this.time += delta * this.speed;
            } else {
              this._currentFramePlayed = true;
            }

            this._process();
          }
        }, {
          key: "_needReverse",
          value: function _needReverse(currentIterations) {
            var wrapMode = this.wrapMode;
            var needReverse = false;

            if ((wrapMode & WrapModeMask.PingPong) === WrapModeMask.PingPong) {
              var isEnd = currentIterations - (currentIterations | 0) === 0;

              if (isEnd && currentIterations > 0) {
                currentIterations -= 1;
              }

              var isOddIteration = currentIterations & 1;

              if (isOddIteration) {
                needReverse = !needReverse;
              }
            }

            if ((wrapMode & WrapModeMask.Reverse) === WrapModeMask.Reverse) {
              needReverse = !needReverse;
            }

            return needReverse;
          }
        }, {
          key: "getWrappedInfo",
          value: function getWrappedInfo(time, info) {
            info = info || new WrappedInfo();
            var stopped = false;
            var duration = this.duration;
            var repeatCount = this.repeatCount;
            var currentIterations = time > 0 ? time / duration : -(time / duration);

            if (currentIterations >= repeatCount) {
              currentIterations = repeatCount;
              stopped = true;
              var tempRatio = repeatCount - (repeatCount | 0);

              if (tempRatio === 0) {
                tempRatio = 1; // 如果播放过，动画不复位
              }

              time = tempRatio * duration * (time > 0 ? 1 : -1);
            }

            if (time > duration) {
              var tempTime = time % duration;
              time = tempTime === 0 ? duration : tempTime;
            } else if (time < 0) {
              time = time % duration;

              if (time !== 0) {
                time += duration;
              }
            }

            var needReverse = false;
            var shouldWrap = this._wrapMode & WrapModeMask.ShouldWrap;

            if (shouldWrap) {
              needReverse = this._needReverse(currentIterations);
            }

            var direction = needReverse ? -1 : 1;

            if (this.speed < 0) {
              direction *= -1;
            } // calculate wrapped time


            if (shouldWrap && needReverse) {
              time = duration - time;
            }

            info.ratio = time / duration;
            info.time = time;
            info.direction = direction;
            info.stopped = stopped;
            info.iterations = currentIterations;
            return info;
          }
        }, {
          key: "sample",
          value: function sample() {
            var info = this.getWrappedInfo(this.time, this._wrappedInfo);

            this._sampleCurves(info.ratio);

            {
              this._sampleEvents(info);
            }

            return info;
          }
        }, {
          key: "process",
          value: function process() {
            // sample
            var info = this.sample();

            if (this._allowLastFrame) {
              var lastInfo;

              if (!this._lastWrapInfo) {
                lastInfo = this._lastWrapInfo = new WrappedInfo(info);
              } else {
                lastInfo = this._lastWrapInfo;
              }

              if (this.repeatCount > 1 && (info.iterations | 0) > (lastInfo.iterations | 0)) {
                this.emit(EventType.LASTFRAME, this);
              }

              lastInfo.set(info);
            }

            if (info.stopped) {
              this.stop();
              this.emit(EventType.FINISHED, this);
            }
          }
        }, {
          key: "simpleProcess",
          value: function simpleProcess() {
            var duration = this.duration;
            var time = this.time % duration;

            if (time < 0) {
              time += duration;
            }

            var ratio = time / duration;

            this._sampleCurves(ratio);

            {
              if (this._clip.hasEvents()) {
                this._sampleEvents(this.getWrappedInfo(this.time, this._wrappedInfo));
              }
            }

            if (this._allowLastFrame) {
              if (this._lastIterations === undefined) {
                this._lastIterations = ratio;
              }

              if (this.time > 0 && this._lastIterations > ratio || this.time < 0 && this._lastIterations < ratio) {
                this.emit(EventType.LASTFRAME, this);
              }

              this._lastIterations = ratio;
            }
          }
        }, {
          key: "cache",
          value: function cache(frames) {}
        }, {
          key: "onPlay",
          value: function onPlay() {
            this.setTime(0);
            this._delayTime = this._delay;

            this._onReplayOrResume();

            this.emit(EventType.PLAY, this);
          }
        }, {
          key: "onStop",
          value: function onStop() {
            if (!this.isPaused) {
              this._onPauseOrStop();
            }

            this.emit(EventType.STOP, this);
          }
        }, {
          key: "onResume",
          value: function onResume() {
            this._onReplayOrResume();

            this.emit(EventType.RESUME, this);
          }
        }, {
          key: "onPause",
          value: function onPause() {
            this._onPauseOrStop();

            this.emit(EventType.PAUSE, this);
          }
        }, {
          key: "_sampleCurves",
          value: function _sampleCurves(ratio) {
            this._blendStateWriterHost.weight = this.weight;
            this._blendStateWriterHost.enabled = true; // Before we sample, we pull values of common targets.

            for (var iCommonTarget = 0; iCommonTarget < this._commonTargetStatuses.length; ++iCommonTarget) {
              var commonTargetStatus = this._commonTargetStatuses[iCommonTarget];

              if (!commonTargetStatus) {
                continue;
              }

              commonTargetStatus.target.pull();
              commonTargetStatus.changed = false;
            }

            for (var iSamplerSharedGroup = 0, szSamplerSharedGroup = this._samplerSharedGroups.length; iSamplerSharedGroup < szSamplerSharedGroup; ++iSamplerSharedGroup) {
              var samplerSharedGroup = this._samplerSharedGroups[iSamplerSharedGroup];
              var sampler = samplerSharedGroup.sampler;
              var samplerResultCache = samplerSharedGroup.samplerResultCache;
              var index = 0;
              var lerpRequired = false;

              if (!sampler) {
                index = 0;
              } else {
                index = sampler.sample(ratio);

                if (index < 0) {
                  index = ~index;

                  if (index <= 0) {
                    index = 0;
                  } else if (index >= sampler.ratios.length) {
                    index = sampler.ratios.length - 1;
                  } else {
                    lerpRequired = true;
                    samplerResultCache.from = index - 1;
                    samplerResultCache.fromRatio = sampler.ratios[samplerResultCache.from];
                    samplerResultCache.to = index;
                    samplerResultCache.toRatio = sampler.ratios[samplerResultCache.to];
                    index = samplerResultCache.from;
                  }
                }
              }

              for (var iCurveInstance = 0, szCurves = samplerSharedGroup.curves.length; iCurveInstance < szCurves; ++iCurveInstance) {
                var curveInstance = samplerSharedGroup.curves[iCurveInstance];
                curveInstance.applySample(ratio, index, lerpRequired, samplerResultCache, this.weight);

                if (curveInstance.commonTargetIndex !== undefined) {
                  var _commonTargetStatus = this._commonTargetStatuses[curveInstance.commonTargetIndex];

                  if (_commonTargetStatus) {
                    _commonTargetStatus.changed = true;
                  }
                }
              }
            } // After sample, we push values of common targets.


            for (var _iCommonTarget = 0; _iCommonTarget < this._commonTargetStatuses.length; ++_iCommonTarget) {
              var _commonTargetStatus2 = this._commonTargetStatuses[_iCommonTarget];

              if (!_commonTargetStatus2) {
                continue;
              }

              if (_commonTargetStatus2.changed) {
                _commonTargetStatus2.target.push();
              }
            }
          }
        }, {
          key: "_sampleEvents",
          value: function _sampleEvents(wrapInfo) {
            var length = this._clip.eventGroups.length;
            var direction = wrapInfo.direction;

            var eventIndex = this._clip.getEventGroupIndexAtRatio(wrapInfo.ratio);

            if (eventIndex < 0) {
              eventIndex = ~eventIndex - 1; // If direction is inverse, increase index.

              if (direction < 0) {
                eventIndex += 1;
              }
            }

            if (this._ignoreIndex !== eventIndex) {
              this._ignoreIndex = InvalidIndex;
            }

            wrapInfo.frameIndex = eventIndex;

            if (!this._lastWrapInfoEvent) {
              this._fireEvent(eventIndex);

              this._lastWrapInfoEvent = new WrappedInfo(wrapInfo);
              return;
            }

            var wrapMode = this.wrapMode;
            var currentIterations = wrapIterations(wrapInfo.iterations);
            var lastWrappedInfo = this._lastWrapInfoEvent;
            var lastIterations = wrapIterations(lastWrappedInfo.iterations);
            var lastIndex = lastWrappedInfo.frameIndex;
            var lastDirection = lastWrappedInfo.direction;
            var iterationsChanged = lastIterations !== -1 && currentIterations !== lastIterations;

            if (lastIndex === eventIndex && iterationsChanged && length === 1) {
              this._fireEvent(0);
            } else if (lastIndex !== eventIndex || iterationsChanged) {
              direction = lastDirection;

              do {
                if (lastIndex !== eventIndex) {
                  if (direction === -1 && lastIndex === 0 && eventIndex > 0) {
                    if ((wrapMode & WrapModeMask.PingPong) === WrapModeMask.PingPong) {
                      direction *= -1;
                    } else {
                      lastIndex = length;
                    }

                    lastIterations++;
                  } else if (direction === 1 && lastIndex === length - 1 && eventIndex < length - 1) {
                    if ((wrapMode & WrapModeMask.PingPong) === WrapModeMask.PingPong) {
                      direction *= -1;
                    } else {
                      lastIndex = -1;
                    }

                    lastIterations++;
                  }

                  if (lastIndex === eventIndex) {
                    break;
                  }

                  if (lastIterations > currentIterations) {
                    break;
                  }
                }

                lastIndex += direction;
                legacyCC.director.getAnimationManager().pushDelayEvent(this._fireEvent, this, [lastIndex]);
              } while (lastIndex !== eventIndex && lastIndex > -1 && lastIndex < length);
            }

            this._lastWrapInfoEvent.set(wrapInfo);
          }
        }, {
          key: "_emit",
          value: function _emit(type, state) {
            if (this._target && this._target.isValid) {
              this._target.emit(type, type, state);
            }
          }
        }, {
          key: "_fireEvent",
          value: function _fireEvent(index) {
            if (!this._targetNode || !this._targetNode.isValid) {
              return;
            }

            var eventGroups = this._clip.eventGroups;

            if (index < 0 || index >= eventGroups.length || this._ignoreIndex === index) {
              return;
            }

            var eventGroup = eventGroups[index];
            var components = this._targetNode.components;

            for (var _iterator = _createForOfIteratorHelperLoose(eventGroup.events), _step; !(_step = _iterator()).done;) {
              var event = _step.value;
              var functionName = event.functionName;

              for (var _iterator2 = _createForOfIteratorHelperLoose(components), _step2; !(_step2 = _iterator2()).done;) {
                var component = _step2.value;
                var fx = component[functionName];

                if (typeof fx === 'function') {
                  fx.apply(component, event.parameters);
                }
              }
            }
          }
        }, {
          key: "_onReplayOrResume",
          value: function _onReplayOrResume() {
            legacyCC.director.getAnimationManager().addAnimation(this);
          }
        }, {
          key: "_onPauseOrStop",
          value: function _onPauseOrStop() {
            legacyCC.director.getAnimationManager().removeAnimation(this);
          }
        }, {
          key: "_destroyBlendStateWriters",
          value: function _destroyBlendStateWriters() {
            for (var iBlendStateWriter = 0; iBlendStateWriter < this._blendStateWriters.length; ++iBlendStateWriter) {
              this._blendStateWriters[iBlendStateWriter].destroy();
            }

            this._blendStateWriters.length = 0;

            if (this._blendStateBuffer) {
              this._blendStateBuffer.unbindState(this);

              this._blendStateBuffer = null;
            }

            this._blendStateWriterHost.enabled = false;
          }
        }, {
          key: "curveLoaded",
          get: function get() {
            return this._curveLoaded;
          }
        }]);

        return AnimationState;
      }(Playable));

      function isTargetingTRS(path) {
        var prs;

        if (path.length === 1 && typeof path[0] === 'string') {
          prs = path[0];
        } else if (path.length > 1) {
          for (var i = 0; i < path.length - 1; ++i) {
            if (!(path[i] instanceof HierarchyPath)) {
              return false;
            }
          }

          prs = path[path.length - 1];
        }

        switch (prs) {
          case 'position':
          case 'scale':
          case 'rotation':
          case 'eulerAngles':
            return true;

          default:
            return false;
        }
      }

      function wrapIterations(iterations) {
        if (iterations - (iterations | 0) === 0) {
          iterations -= 1;
        }

        return iterations | 0;
      }

      legacyCC.AnimationState = AnimationState;

      var CrossFade = /*#__PURE__*/function (_Playable) {
        _inherits(CrossFade, _Playable);

        function CrossFade() {
          var _this;

          _classCallCheck(this, CrossFade);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(CrossFade).call(this));
          _this._managedStates = [];
          _this._fadings = [];
          return _this;
        }

        _createClass(CrossFade, [{
          key: "update",
          value: function update(deltaTime) {
            if (this.isMotionless) {
              return;
            } // Set all state's weight to 0.


            for (var iManagedState = 0; iManagedState < this._managedStates.length; ++iManagedState) {
              var state = this._managedStates[iManagedState].state;

              if (state) {
                state.weight = 0;
              }
            } // Allocate weights.


            var absoluteWeight = 1.0;
            var deadFadingBegin = this._fadings.length;

            for (var iFading = 0; iFading < this._fadings.length; ++iFading) {
              var fading = this._fadings[iFading];
              fading.easeTime += deltaTime; // We should properly handle the case of
              // `fading.easeTime === 0 && fading.easeDuration === 0`, which yields `NaN`.

              var relativeWeight = fading.easeDuration === 0 ? 1 : clamp01(fading.easeTime / fading.easeDuration);
              var weight = relativeWeight * absoluteWeight;
              absoluteWeight = absoluteWeight * (1.0 - relativeWeight);

              if (fading.target.state) {
                fading.target.state.weight += weight;
              }

              if (fading.easeTime >= fading.easeDuration) {
                deadFadingBegin = iFading + 1;
                fading.easeTime = fading.easeDuration;
                break;
              }
            } // Kill fadings having no lifetime.


            if (deadFadingBegin !== this._fadings.length) {
              for (var iDeadFading = deadFadingBegin; iDeadFading < this._fadings.length; ++iDeadFading) {
                var deadFading = this._fadings[iDeadFading];
                --deadFading.target.reference;

                if (deadFading.target.reference <= 0) {
                  if (deadFading.target.state) {
                    deadFading.target.state.stop();
                  }

                  remove(this._managedStates, deadFading.target);
                }
              }

              this._fadings.splice(deadFadingBegin);
            }

            for (var _iManagedState = 0; _iManagedState < this._managedStates.length; ++_iManagedState) {
              var _state = this._managedStates[_iManagedState].state;

              if (_state && _state.isMotionless) {
                _state.sample();
              }
            }
          }
          /**
           * 在指定时间内将从当前动画状态切换到指定的动画状态。
           * @param state 指定的动画状态。
           * @param duration 切换时间。
           */

        }, {
          key: "crossFade",
          value: function crossFade(state, duration) {
            var _target$state;

            if (this._managedStates.length === 0) {
              // If we are cross fade from a "initial" pose,
              // we do not use the duration.
              // It's meaning-less and may get a bad visual effect.
              duration = 0;
            }

            if (duration === 0) {
              this.clear();
            }

            var target = this._managedStates.find(function (weightedState) {
              return weightedState.state === state;
            });

            if (!target) {
              target = {
                state: state,
                reference: 0
              };

              if (state) {
                state.play();
              }

              this._managedStates.push(target);
            } else if ((_target$state = target.state) === null || _target$state === void 0 ? void 0 : _target$state.isMotionless) {
              target.state.play();
            }

            ++target.reference;

            this._fadings.unshift({
              easeDuration: duration,
              easeTime: 0,
              target: target
            });
          }
        }, {
          key: "clear",
          value: function clear() {
            for (var iManagedState = 0; iManagedState < this._managedStates.length; ++iManagedState) {
              var state = this._managedStates[iManagedState].state;

              if (state) {
                state.stop();
              }
            }

            this._managedStates.length = 0;
            this._fadings.length = 0;
          }
        }, {
          key: "onPlay",
          value: function onPlay() {
            _get(_getPrototypeOf(CrossFade.prototype), "onPlay", this).call(this);

            legacyCC.director.getAnimationManager().addCrossFade(this);
          }
          /**
           * 停止我们淡入淡出的所有动画状态并停止淡入淡出。
           */

        }, {
          key: "onPause",
          value: function onPause() {
            _get(_getPrototypeOf(CrossFade.prototype), "onPause", this).call(this);

            legacyCC.director.getAnimationManager().removeCrossFade(this);

            for (var iManagedState = 0; iManagedState < this._managedStates.length; ++iManagedState) {
              var state = this._managedStates[iManagedState].state;

              if (state) {
                state.pause();
              }
            }
          }
          /**
           * 恢复我们淡入淡出的所有动画状态并继续淡入淡出。
           */

        }, {
          key: "onResume",
          value: function onResume() {
            _get(_getPrototypeOf(CrossFade.prototype), "onResume", this).call(this);

            legacyCC.director.getAnimationManager().addCrossFade(this);

            for (var iManagedState = 0; iManagedState < this._managedStates.length; ++iManagedState) {
              var state = this._managedStates[iManagedState].state;

              if (state) {
                state.resume();
              }
            }
          }
          /**
           * 停止所有淡入淡出的动画状态。
           */

        }, {
          key: "onStop",
          value: function onStop() {
            _get(_getPrototypeOf(CrossFade.prototype), "onStop", this).call(this);

            legacyCC.director.getAnimationManager().removeCrossFade(this);
            this.clear();
          }
        }]);

        return CrossFade;
      }(Playable);

      var _dec$a, _dec2$9, _dec3$7, _dec4$7, _dec5$7, _dec6$6, _dec7$6, _dec8$5, _dec9$5, _dec10$4, _class$a, _class2$a, _descriptor$a, _descriptor2$8, _descriptor3$7, _class3$2, _temp$a;
      /**
       * @en
       * Animation component governs a group of animation states to control playback of the states.
       * For convenient, it stores a group of animation clips.
       * Each of those clips would have an associated animation state uniquely created.
       * Animation component is eventful, it dispatch a serials playback status events.
       * See [[EventType]].
       * @zh
       * 动画组件管理一组动画状态，控制它们的播放。
       * 为了方便，动画组件还存储了一组动画剪辑。
       * 每个剪辑都会独自创建一个关联的动画状态对象。
       * 动画组件具有事件特性，它会派发一系列播放状态相关的事件。
       * 参考 [[EventType]]
       */

      var Animation = exports('v', (_dec$a = ccclass('cc.Animation'), _dec2$9 = help(), _dec3$7 = executionOrder(99), _dec4$7 = menu(), _dec5$7 = type([AnimationClip]), _dec6$6 = tooltip(), _dec7$6 = type(AnimationClip), _dec8$5 = tooltip(), _dec9$5 = tooltip(), _dec10$4 = type([AnimationClip]), _dec$a(_class$a = _dec2$9(_class$a = _dec3$7(_class$a = executeInEditMode(_class$a = _dec4$7(_class$a = (_class2$a = (_temp$a = _class3$2 = /*#__PURE__*/function (_Eventify) {
        _inherits(Animation, _Eventify);

        function Animation() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Animation);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Animation)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "playOnLoad", _descriptor$a, _assertThisInitialized(_this));

          _this._crossFade = new CrossFade();
          _this._nameToState = createMap(true);

          _initializerDefineProperty(_this, "_clips", _descriptor2$8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_defaultClip", _descriptor3$7, _assertThisInitialized(_this));

          _this._hasBeenPlayed = false;
          return _this;
        }

        _createClass(Animation, [{
          key: "onLoad",
          value: function onLoad() {
            this.clips = this._clips;

            for (var stateName in this._nameToState) {
              var state = this._nameToState[stateName];
              state.initialize(this.node);
            }
          }
        }, {
          key: "start",
          value: function start() {
            if ( this.playOnLoad && !this._hasBeenPlayed && this._defaultClip) {
              this.crossFade(this._defaultClip.name, 0);
            }
          }
        }, {
          key: "onEnable",
          value: function onEnable() {
            this._crossFade.resume();
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            this._crossFade.pause();
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            this._crossFade.stop();

            for (var name in this._nameToState) {
              var state = this._nameToState[name];
              state.destroy();
            }

            this._nameToState = createMap(true);
          }
          /**
           * @en
           * Switch to play specified animation state, without fading.
           * @zh
           * 立即切换到指定动画状态。
           * @param name The name of the animation to be played, if absent, the default clip will be played
           */

        }, {
          key: "play",
          value: function play(name) {
            this._hasBeenPlayed = true;

            if (!name) {
              if (!this._defaultClip) {
                return;
              } else {
                name = this._defaultClip.name;
              }
            }

            this.crossFade(name, 0);
          }
          /**
           * @en
           * Smoothly switch to play specified animation state.
           * @zn
           * 平滑地切换到指定动画状态。
           * @param name The name of the animation to switch to
           * @param duration The duration of the cross fade, default value is 0.3s
           */

        }, {
          key: "crossFade",
          value: function crossFade(name) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
            this._hasBeenPlayed = true;
            var state = this._nameToState[name];

            if (state) {
              this._crossFade.play();

              this._crossFade.crossFade(state, duration);
            }
          }
          /**
           * @en
           * Pause all animation states and all switching.
           * @zh
           * 暂停所有动画状态，并暂停所有切换。
           */

        }, {
          key: "pause",
          value: function pause() {
            this._crossFade.pause();
          }
          /**
           * @en
           * Resume all animation states and all switching.
           * @zh
           * 恢复所有动画状态，并恢复所有切换。
           */

        }, {
          key: "resume",
          value: function resume() {
            this._crossFade.resume();
          }
          /**
           * @en
           * Stop all animation states and all switching.
           * @zh
           * 停止所有动画状态，并停止所有切换。
           */

        }, {
          key: "stop",
          value: function stop() {
            this._crossFade.stop();
          }
          /**
           * @en
           * Get specified animation state.
           * @zh
           * 获取指定的动画状态。
           * @deprecated please use [[getState]]
           */

        }, {
          key: "getAnimationState",
          value: function getAnimationState(name) {
            return this.getState(name);
          }
          /**
           * @en
           * Get specified animation state.
           * @zh
           * 获取指定的动画状态。
           * @param name The name of the animation
           * @returns If no animation found, return null, otherwise the correspond animation state is returned
           */

        }, {
          key: "getState",
          value: function getState(name) {
            var state = this._nameToState[name];

            if (state && !state.curveLoaded) {
              state.initialize(this.node);
            }

            return state || null;
          }
          /**
           * @en
           * Creates a state for specified clip.
           * If there is already a clip with same name, the existing animation state will be stopped and overridden.
           * @zh
           * 使用指定的动画剪辑创建一个动画状态。
           * 若指定名称的动画状态已存在，已存在的动画状态将先被设为停止并被覆盖。
           * @param clip The animation clip
           * @param name The animation state name, if absent, the default clip's name will be used
           * @returns The animation state created
           */

        }, {
          key: "createState",
          value: function createState(clip, name) {
            name = name || clip.name;
            this.removeState(name);
            return this._doCreateState(clip, name);
          }
          /**
           * @en
           * Stops and removes specified clip.
           * @zh
           * 停止并移除指定的动画状态。
           * @param name The name of the animation state
           */

        }, {
          key: "removeState",
          value: function removeState(name) {
            var state = this._nameToState[name];

            if (state) {
              state.allowLastFrameEvent(false);
              state.stop();
              delete this._nameToState[name];
            }
          }
          /**
           * 添加一个动画剪辑到 `this.clips`中并以此剪辑创建动画状态。
           * @deprecated please use [[createState]]
           * @param clip The animation clip
           * @param name The animation state name, if absent, the default clip's name will be used
           * @returns The created animation state
           */

        }, {
          key: "addClip",
          value: function addClip(clip, name) {
            if (!contains(this._clips, clip)) {
              this._clips.push(clip);
            }

            return this.createState(clip, name);
          }
          /**
           * @en
           * Remove clip from the animation list. This will remove the clip and any animation states based on it.<br>
           * If there are animation states depend on the clip are playing or clip is defaultClip, it will not delete the clip.<br>
           * But if force is true, then will always remove the clip and any animation states based on it. If clip is defaultClip, defaultClip will be reset to null
           * @zh
           * 从动画列表中移除指定的动画剪辑，<br/>
           * 如果依赖于 clip 的 AnimationState 正在播放或者 clip 是 defaultClip 的话，默认是不会删除 clip 的。<br/>
           * 但是如果 force 参数为 true，则会强制停止该动画，然后移除该动画剪辑和相关的动画。这时候如果 clip 是 defaultClip，defaultClip 将会被重置为 null。<br/>
           * @deprecated please use [[removeState]]
           * @param force - If force is true, then will always remove the clip and any animation states based on it.
           */

        }, {
          key: "removeClip",
          value: function removeClip(clip, force) {
            var removalState;

            for (var name in this._nameToState) {
              var state = this._nameToState[name];
              var stateClip = state.clip;

              if (stateClip === clip) {
                removalState = state;
                break;
              }
            }

            if (clip === this._defaultClip) {
              if (force) {
                this._defaultClip = null;
              } else {
                {
                  warnID(3902);
                }

                return;
              }
            }

            if (removalState && removalState.isPlaying) {
              if (force) {
                removalState.stop();
              } else {
                {
                  warnID(3903);
                }

                return;
              }
            }

            this._clips = this._clips.filter(function (item) {
              return item !== clip;
            });

            if (removalState) {
              delete this._nameToState[removalState.name];
            }
          }
          /**
           * @en
           * Register animation event callback.<bg>
           * The event arguments will provide the AnimationState which emit the event.<bg>
           * When play an animation, will auto register the event callback to the AnimationState,<bg>
           * and unregister the event callback from the AnimationState when animation stopped.
           * @zh
           * 注册动画事件回调。<bg>
           * 回调的事件里将会附上发送事件的 AnimationState。<bg>
           * 当播放一个动画时，会自动将事件注册到对应的 AnimationState 上，停止播放时会将事件从这个 AnimationState 上取消注册。
           * @param type The event type to listen to
           * @param callback The callback when event triggered
           * @param target The callee when invoke the callback, could be absent
           * @return The registered callback
           * @example
           * ```ts
           * onPlay: function (type, state) {
           *     // callback
           * }
           *
           * // register event to all animation
           * animation.on('play', this.onPlay, this);
           * ```
           */

        }, {
          key: "on",
          value: function on(type, callback, thisArg, once) {
            var ret = _get(_getPrototypeOf(Animation.prototype), "on", this).call(this, type, callback, thisArg, once);

            if (type === EventType.LASTFRAME) {
              this._syncAllowLastFrameEvent();
            }

            return ret;
          }
        }, {
          key: "once",
          value: function once(type, callback, thisArg) {
            var ret = _get(_getPrototypeOf(Animation.prototype), "once", this).call(this, type, callback, thisArg);

            if (type === EventType.LASTFRAME) {
              this._syncAllowLastFrameEvent();
            }

            return ret;
          }
          /**
           * @en
           * Unregister animation event callback.
           * @zh
           * 取消注册动画事件回调。
           * @param {String} type The event type to unregister
           * @param {Function} callback The callback to unregister
           * @param {Object} target The callee of the callback, could be absent
           * @example
           * ```ts
           * // unregister event to all animation
           * animation.off('play', this.onPlay, this);
           * ```
           */

        }, {
          key: "off",
          value: function off(type, callback, thisArg) {
            _get(_getPrototypeOf(Animation.prototype), "off", this).call(this, type, callback, thisArg);

            if (type === EventType.LASTFRAME) {
              this._syncDisallowLastFrameEvent();
            }
          }
        }, {
          key: "_createState",
          value: function _createState(clip, name) {
            return new AnimationState(clip, name);
          }
        }, {
          key: "_doCreateState",
          value: function _doCreateState(clip, name) {
            var state = this._createState(clip, name);

            state._setEventTarget(this);

            state.allowLastFrameEvent(this.hasEventListener(EventType.LASTFRAME));

            if (this.node) {
              state.initialize(this.node);
            }

            this._nameToState[state.name] = state;
            return state;
          }
        }, {
          key: "_getStateByNameOrDefaultClip",
          value: function _getStateByNameOrDefaultClip(name) {
            if (!name) {
              if (!this._defaultClip) {
                return null;
              } else {
                name = this._defaultClip.name;
              }
            }

            var state = this._nameToState[name];

            if (state) {
              return state;
            } else {
              return null;
            }
          }
        }, {
          key: "_removeStateOfAutomaticClip",
          value: function _removeStateOfAutomaticClip(clip) {
            // tslint:disable-next-line:forin
            for (var name in this._nameToState) {
              var state = this._nameToState[name];

              if (equalClips(clip, state.clip)) {
                state.stop();
                delete this._nameToState[name];
              }
            }
          }
        }, {
          key: "_syncAllowLastFrameEvent",
          value: function _syncAllowLastFrameEvent() {
            if (this.hasEventListener(EventType.LASTFRAME)) {
              for (var stateName in this._nameToState) {
                this._nameToState[stateName].allowLastFrameEvent(true);
              }
            }
          }
        }, {
          key: "_syncDisallowLastFrameEvent",
          value: function _syncDisallowLastFrameEvent() {
            if (!this.hasEventListener(EventType.LASTFRAME)) {
              for (var stateName in this._nameToState) {
                this._nameToState[stateName].allowLastFrameEvent(false);
              }
            }
          }
        }, {
          key: "clips",

          /**
           * @en
           * Gets or sets clips this component governs.
           * When set, associated animation state of each existing clip will be stopped.
           * If the existing default clip is not in the set of new clips, default clip will be reset to null.
           * @zh
           * 获取或设置此组件管理的剪辑。
           * 设置时，已有剪辑关联的动画状态将被停止；若默认剪辑不在新的动画剪辑中，将被重置为空。
           */
          get: function get() {
            return this._clips;
          },
          set: function set(value) {
            var _this2 = this;

            if (this._crossFade) {
              this._crossFade.clear();
            } // Remove state for old automatic clips.


            for (var _iterator = _createForOfIteratorHelperLoose(this._clips), _step; !(_step = _iterator()).done;) {
              var clip = _step.value;

              if (clip) {
                this._removeStateOfAutomaticClip(clip);
              }
            } // Create state for new clips.


            for (var _iterator2 = _createForOfIteratorHelperLoose(value), _step2; !(_step2 = _iterator2()).done;) {
              var _clip = _step2.value;

              if (_clip) {
                this.createState(_clip);
              }
            } // Default clip should be in the list of automatic clips.


            var newDefaultClip = value.find(function (clip) {
              return equalClips(clip, _this2._defaultClip);
            });

            if (newDefaultClip) {
              this._defaultClip = newDefaultClip;
            } else {
              this._defaultClip = null;
            }

            this._clips = value;
          }
          /**
           * @en
           * Gets or sets the default clip.
           * @en
           * 获取或设置默认剪辑。
           * 设置时，若指定的剪辑不在 `this.clips` 中则会被自动添加至 `this.clips`。
           * @see [[playOnLoad]]
           */

        }, {
          key: "defaultClip",
          get: function get() {
            return this._defaultClip;
          },
          set: function set(value) {
            this._defaultClip = value;

            if (!value) {
              return;
            }

            var isBoundedDefaultClip = this._clips.findIndex(function (clip) {
              return equalClips(clip, value);
            }) >= 0;

            if (!isBoundedDefaultClip) {
              this._clips.push(value);

              this.createState(value);
            }
          }
        }]);

        return Animation;
      }(Eventify(Component)), _class3$2.EventType = EventType, _temp$a), (_applyDecoratedDescriptor(_class2$a.prototype, "clips", [_dec5$7, _dec6$6], Object.getOwnPropertyDescriptor(_class2$a.prototype, "clips"), _class2$a.prototype), _applyDecoratedDescriptor(_class2$a.prototype, "defaultClip", [_dec7$6, _dec8$5], Object.getOwnPropertyDescriptor(_class2$a.prototype, "defaultClip"), _class2$a.prototype), _descriptor$a = _applyDecoratedDescriptor(_class2$a.prototype, "playOnLoad", [serializable, _dec9$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2$8 = _applyDecoratedDescriptor(_class2$a.prototype, "_clips", [_dec10$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3$7 = _applyDecoratedDescriptor(_class2$a.prototype, "_defaultClip", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$a)) || _class$a) || _class$a) || _class$a) || _class$a) || _class$a));

      function equalClips(clip1, clip2) {
        if (clip1 === clip2) {
          return true;
        }

        return !!clip1 && !!clip2 && (clip1.name === clip2.name || clip1._uuid === clip2._uuid);
      }

      var m4_1$1 = new Mat4();
      var m4_2 = new Mat4();
      var noCurves = [];
      var SkeletalAnimationState = exports('K', /*#__PURE__*/function (_AnimationState) {
        _inherits(SkeletalAnimationState, _AnimationState);

        function SkeletalAnimationState(clip) {
          var _this;

          var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

          _classCallCheck(this, SkeletalAnimationState);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(SkeletalAnimationState).call(this, clip, name));
          _this._frames = 1;
          _this._bakedDuration = 0;
          _this._animInfo = null;
          _this._sockets = [];
          _this._animInfoMgr = void 0;
          _this._comps = [];
          _this._parent = null;
          _this._curvesInited = false;
          _this._animInfoMgr = legacyCC.director.root.dataPoolManager.jointAnimationInfo;
          return _this;
        }

        _createClass(SkeletalAnimationState, [{
          key: "initialize",
          value: function initialize(root) {
            if (this._curveLoaded) {
              return;
            }

            this._comps.length = 0;
            var comps = root.getComponentsInChildren(SkinnedMeshRenderer);

            for (var i = 0; i < comps.length; ++i) {
              var comp = comps[i];

              if (comp.skinningRoot === root) {
                this._comps.push(comp);
              }
            }

            this._parent = root.getComponent('cc.SkeletalAnimation');
            var baked = this._parent.useBakedAnimation;

            _get(_getPrototypeOf(SkeletalAnimationState.prototype), "initialize", this).call(this, root, baked ? noCurves : undefined);

            this._curvesInited = !baked;
            var info = SkelAnimDataHub.getOrExtract(this.clip).info;
            this._frames = info.frames - 1;
            this._animInfo = this._animInfoMgr.getData(root.uuid);
            this._bakedDuration = this._frames / info.sample; // last key
          }
        }, {
          key: "onPlay",
          value: function onPlay() {
            _get(_getPrototypeOf(SkeletalAnimationState.prototype), "onPlay", this).call(this);

            var baked = this._parent.useBakedAnimation;

            if (baked) {
              this._sampleCurves = this._sampleCurvesBaked;
              this.duration = this._bakedDuration;

              this._animInfoMgr.switchClip(this._animInfo, this._clip);

              for (var i = 0; i < this._comps.length; ++i) {
                this._comps[i].uploadAnimation(this.clip);
              }
            } else {
              this._sampleCurves = _get(_getPrototypeOf(SkeletalAnimationState.prototype), "_sampleCurves", this);
              this.duration = this._clip.duration;

              if (!this._curvesInited) {
                this._curveLoaded = false;

                _get(_getPrototypeOf(SkeletalAnimationState.prototype), "initialize", this).call(this, this._targetNode);

                this._curvesInited = true;
              }
            }
          }
        }, {
          key: "rebuildSocketCurves",
          value: function rebuildSocketCurves(sockets) {
            this._sockets.length = 0;

            if (!this._targetNode) {
              return null;
            }

            var root = this._targetNode;

            for (var i = 0; i < sockets.length; ++i) {
              var socket = sockets[i];
              var targetNode = root.getChildByPath(socket.path);

              if (!socket.target) {
                continue;
              }

              var clipData = SkelAnimDataHub.getOrExtract(this.clip);
              var animPath = socket.path;
              var source = clipData.data[animPath];
              var animNode = targetNode;
              var downstream = void 0;

              while (!source) {
                var idx = animPath.lastIndexOf('/');
                animPath = animPath.substring(0, idx);
                source = clipData.data[animPath];

                if (animNode) {
                  if (!downstream) {
                    downstream = Mat4.identity(m4_2);
                  }

                  Mat4.fromRTS(m4_1$1, animNode.rotation, animNode.position, animNode.scale);
                  Mat4.multiply(downstream, m4_1$1, downstream);
                  animNode = animNode.parent;
                }

                if (idx < 0) {
                  break;
                }
              }

              var curveData = source && source.worldMatrix.values;
              var frames = clipData.info.frames;
              var transforms = [];

              for (var f = 0; f < frames; f++) {
                var mat = void 0;

                if (curveData && downstream) {
                  // curve & static two-way combination
                  mat = Mat4.multiply(m4_1$1, curveData[f], downstream);
                } else if (curveData) {
                  // there is a curve directly controlling the joint
                  mat = curveData[f];
                } else if (downstream) {
                  // fallback to default pose if no animation curve can be found upstream
                  mat = downstream;
                } else {
                  // bottom line: render the original mesh as-is
                  mat = Mat4.IDENTITY;
                }

                var tfm = {
                  pos: new Vec3(),
                  rot: new Quat(),
                  scale: new Vec3()
                };
                Mat4.toRTS(mat, tfm.rot, tfm.pos, tfm.scale);
                transforms.push(tfm);
              }

              this._sockets.push({
                target: socket.target,
                frames: transforms
              });
            }
          }
        }, {
          key: "_sampleCurvesBaked",
          value: function _sampleCurvesBaked(ratio) {
            var info = this._animInfo;
            var curFrame = ratio * this._frames + 0.5 | 0;

            if (curFrame === info.data[0]) {
              return;
            }

            info.data[0] = curFrame;
            info.dirty = true;

            for (var i = 0; i < this._sockets.length; ++i) {
              var _this$_sockets$i = this._sockets[i],
                  target = _this$_sockets$i.target,
                  frames = _this$_sockets$i.frames;
              var _frames$curFrame = frames[curFrame],
                  pos = _frames$curFrame.pos,
                  rot = _frames$curFrame.rot,
                  scale = _frames$curFrame.scale; // ratio guaranteed to be in [0, 1]

              target.setRTS(rot, pos, scale);
            }
          }
        }]);

        return SkeletalAnimationState;
      }(AnimationState));

      var _dec$b, _dec2$a, _class$b, _class2$b, _descriptor$b, _descriptor2$9, _temp$b, _dec3$8, _dec4$8, _dec5$8, _dec6$7, _dec7$7, _dec8$6, _dec9$6, _dec10$5, _class4$4, _class5$3, _descriptor3$8, _descriptor4$7, _class6$1, _temp2$3;
      var Socket = exports('N', (_dec$b = ccclass('cc.SkeletalAnimation.Socket'), _dec2$a = type(Node), _dec$b(_class$b = (_class2$b = (_temp$b =
      /**
       * @en Path of the target joint.
       * @zh 此挂点的目标骨骼路径。
       */

      /**
       * @en Transform output node.
       * @zh 此挂点的变换信息输出节点。
       */
      function Socket() {
        var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, Socket);

        _initializerDefineProperty(this, "path", _descriptor$b, this);

        _initializerDefineProperty(this, "target", _descriptor2$9, this);

        this.path = path;
        this.target = target;
      }, _temp$b), (_descriptor$b = _applyDecoratedDescriptor(_class2$b.prototype, "path", [serializable, editable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2$9 = _applyDecoratedDescriptor(_class2$b.prototype, "target", [_dec2$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$b)) || _class$b));
      js.setClassAlias(Socket, 'cc.SkeletalAnimationComponent.Socket');
      var m4_1$2 = new Mat4();
      var m4_2$1 = new Mat4();

      function collectRecursively(node) {
        var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var out = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        for (var i = 0; i < node.children.length; i++) {
          var child = node.children[i];

          if (!child) {
            continue;
          }

          var path = prefix ? "".concat(prefix, "/").concat(child.name) : child.name;
          out.push(path);
          collectRecursively(child, path, out);
        }

        return out;
      }
      /**
       * @en
       * Skeletal animation component, offers the following features on top of [[Animation]]:
       * * Choice between baked animation and real-time calculation, to leverage efficiency and expressiveness.
       * * Joint socket system: Create any socket node directly under the animation component root node,
       *   find your target joint and register both to the socket list, so that the socket node would be in-sync with the joint.
       * @zh
       * 骨骼动画组件，在普通动画组件基础上额外提供以下功能：
       * * 可选预烘焙动画模式或实时计算模式，用以权衡运行时效率与效果；
       * * 提供骨骼挂点功能：通过在动画根节点下创建挂点节点，并在骨骼动画组件上配置 socket 列表，挂点节点的 Transform 就能与骨骼保持同步。
       */


      var SkeletalAnimation = exports('w', (_dec3$8 = ccclass('cc.SkeletalAnimation'), _dec4$8 = help(), _dec5$8 = executionOrder(99), _dec6$7 = menu(), _dec7$7 = type([Socket]), _dec8$6 = tooltip(), _dec9$6 = tooltip(), _dec10$5 = type([Socket]), _dec3$8(_class4$4 = _dec4$8(_class4$4 = _dec5$8(_class4$4 = executeInEditMode(_class4$4 = _dec6$7(_class4$4 = (_class5$3 = (_temp2$3 = _class6$1 = /*#__PURE__*/function (_Animation) {
        _inherits(SkeletalAnimation, _Animation);

        function SkeletalAnimation() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, SkeletalAnimation);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SkeletalAnimation)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "_useBakedAnimation", _descriptor3$8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_sockets", _descriptor4$7, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(SkeletalAnimation, [{
          key: "onDestroy",
          value: function onDestroy() {
            _get(_getPrototypeOf(SkeletalAnimation.prototype), "onDestroy", this).call(this);

            legacyCC.director.root.dataPoolManager.jointAnimationInfo.destroy(this.node.uuid);
            legacyCC.director.getAnimationManager().removeSockets(this.node, this._sockets);
          }
        }, {
          key: "start",
          value: function start() {
            this.sockets = this._sockets;
            this.useBakedAnimation = this._useBakedAnimation;

            _get(_getPrototypeOf(SkeletalAnimation.prototype), "start", this).call(this);
          }
        }, {
          key: "querySockets",
          value: function querySockets() {
            var animPaths = this._defaultClip && Object.keys(SkelAnimDataHub.getOrExtract(this._defaultClip).data).sort().reduce(function (acc, cur) {
              return cur.startsWith(acc[acc.length - 1]) ? acc : (acc.push(cur), acc);
            }, []) || [];

            if (!animPaths.length) {
              return ['please specify a valid default animation clip first'];
            }

            var out = [];

            for (var i = 0; i < animPaths.length; i++) {
              var path = animPaths[i];
              var node = this.node.getChildByPath(path);

              if (!node) {
                continue;
              }

              out.push(path);
              collectRecursively(node, path, out);
            }

            return out;
          }
        }, {
          key: "rebuildSocketAnimations",
          value: function rebuildSocketAnimations() {
            for (var _iterator = _createForOfIteratorHelperLoose(this._sockets), _step; !(_step = _iterator()).done;) {
              var socket = _step.value;
              var joint = this.node.getChildByPath(socket.path);
              var target = socket.target;

              if (joint && target) {
                target.name = "".concat(socket.path.substring(socket.path.lastIndexOf('/') + 1), " Socket");
                target.parent = this.node;
                getWorldTransformUntilRoot(joint, this.node, m4_1$2);
                Mat4.fromRTS(m4_2$1, target.rotation, target.position, target.scale);

                if (!Mat4.equals(m4_2$1, m4_1$2)) {
                  target.matrix = m4_1$2;
                }
              }
            }

            for (var _i = 0, _Object$keys = Object.keys(this._nameToState); _i < _Object$keys.length; _i++) {
              var stateName = _Object$keys[_i];
              var state = this._nameToState[stateName];
              state.rebuildSocketCurves(this._sockets);
            }
          }
        }, {
          key: "createSocket",
          value: function createSocket(path) {
            var socket = this._sockets.find(function (s) {
              return s.path === path;
            });

            if (socket) {
              return socket.target;
            }

            var joint = this.node.getChildByPath(path);

            if (!joint) {
              console.warn('illegal socket path');
              return null;
            }

            var target = new Node();
            target.parent = this.node;

            this._sockets.push(new Socket(path, target));

            this.rebuildSocketAnimations();
            return target;
          }
        }, {
          key: "_createState",
          value: function _createState(clip, name) {
            return new SkeletalAnimationState(clip, name);
          }
        }, {
          key: "_doCreateState",
          value: function _doCreateState(clip, name) {
            var state = _get(_getPrototypeOf(SkeletalAnimation.prototype), "_doCreateState", this).call(this, clip, name);

            state.rebuildSocketCurves(this._sockets);
            return state;
          }
        }, {
          key: "sockets",

          /**
           * @en
           * The joint sockets this animation component maintains.<br>
           * Sockets have to be registered here before attaching custom nodes to animated joints.
           * @zh
           * 当前动画组件维护的挂点数组。要挂载自定义节点到受动画驱动的骨骼上，必须先在此注册挂点。
           */
          get: function get() {
            return this._sockets;
          },
          set: function set(val) {
            if (!this._useBakedAnimation) {
              var animMgr = legacyCC.director.getAnimationManager();
              animMgr.removeSockets(this.node, this._sockets);
              animMgr.addSockets(this.node, val);
            }

            this._sockets = val;
            this.rebuildSocketAnimations();
          }
          /**
           * @en
           * Whether to bake animations. Default to true,<br>
           * which substantially increases performance while making all animations completely fixed.<br>
           * Dynamically changing this property will take effect when playing the next animation clip.
           * @zh
           * 是否使用预烘焙动画，默认启用，可以大幅提高运行效时率，但所有动画效果会被彻底固定，不支持任何形式的编辑和混合。<br>
           * 运行时动态修改此选项会在播放下一条动画片段时生效。
           */

        }, {
          key: "useBakedAnimation",
          get: function get() {
            return this._useBakedAnimation;
          },
          set: function set(val) {
            this._useBakedAnimation = val;
            var comps = this.node.getComponentsInChildren(SkinnedMeshRenderer);

            for (var i = 0; i < comps.length; ++i) {
              var comp = comps[i];

              if (comp.skinningRoot === this.node) {
                comp.setUseBakedAnimation(this._useBakedAnimation);
              }
            }

            if (this._useBakedAnimation) {
              legacyCC.director.getAnimationManager().removeSockets(this.node, this._sockets);
            } else {
              legacyCC.director.getAnimationManager().addSockets(this.node, this._sockets);
            }
          }
        }]);

        return SkeletalAnimation;
      }(Animation), _class6$1.Socket = Socket, _temp2$3), (_applyDecoratedDescriptor(_class5$3.prototype, "sockets", [_dec7$7, _dec8$6], Object.getOwnPropertyDescriptor(_class5$3.prototype, "sockets"), _class5$3.prototype), _applyDecoratedDescriptor(_class5$3.prototype, "useBakedAnimation", [_dec9$6], Object.getOwnPropertyDescriptor(_class5$3.prototype, "useBakedAnimation"), _class5$3.prototype), _descriptor3$8 = _applyDecoratedDescriptor(_class5$3.prototype, "_useBakedAnimation", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4$7 = _applyDecoratedDescriptor(_class5$3.prototype, "_sockets", [_dec10$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class5$3)) || _class4$4) || _class4$4) || _class4$4) || _class4$4) || _class4$4));

      /**
       * @category animation
       */

      replaceProperty(Animation.prototype, 'Animation', [{
        'name': 'getAnimationState',
        'newName': 'getState'
      }, {
        'name': 'addClip',
        'newName': 'createState'
      }, {
        'name': 'removeClip',
        'newName': 'removeState',
        'customFunction': function customFunction() {
          var arg0 = arguments.length <= 0 ? undefined : arguments[0];
          return Animation.prototype.removeState.call(this, arg0.name);
        }
      }]);
      legacyCC.AnimationComponent = Animation;
      js.setClassAlias(Animation, 'cc.AnimationComponent');
      legacyCC.SkeletalAnimationComponent = SkeletalAnimation;
      js.setClassAlias(SkeletalAnimation, 'cc.SkeletalAnimationComponent');

      var _class$c, _class2$c, _temp$c;
      var AnimationManager = exports('J', ccclass(_class$c = (_temp$c = _class2$c = /*#__PURE__*/function (_System) {
        _inherits(AnimationManager, _System);

        function AnimationManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, AnimationManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AnimationManager)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this._anims = new MutableForwardIterator([]);
          _this._delayEvents = [];
          _this._blendStateBuffer = new BlendStateBuffer();
          _this._crossFades = [];
          _this._sockets = [];
          return _this;
        }

        _createClass(AnimationManager, [{
          key: "addCrossFade",
          value: function addCrossFade(crossFade) {
            this._crossFades.push(crossFade);
          }
        }, {
          key: "removeCrossFade",
          value: function removeCrossFade(crossFade) {
            remove(this._crossFades, crossFade);
          }
        }, {
          key: "update",
          value: function update(dt) {
            var _delayEvents = this._delayEvents,
                _crossFades = this._crossFades,
                _sockets = this._sockets;

            for (var i = 0, l = _crossFades.length; i < l; i++) {
              _crossFades[i].update(dt);
            }

            var iterator = this._anims;
            var array = iterator.array;

            for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
              var anim = array[iterator.i];

              if (!anim.isMotionless) {
                anim.update(dt);
              }
            }

            this._blendStateBuffer.apply();

            var stamp = legacyCC.director.getTotalFrames();

            for (var _i = 0, _l = _sockets.length; _i < _l; _i++) {
              var _sockets$_i = _sockets[_i],
                  target = _sockets$_i.target,
                  transform = _sockets$_i.transform;
              target.matrix = getWorldMatrix(transform, stamp);
            }

            for (var _i2 = 0, _l2 = _delayEvents.length; _i2 < _l2; _i2++) {
              var event = _delayEvents[_i2];
              event.fn.apply(event.thisArg, event.args);
            }

            _delayEvents.length = 0;
          }
        }, {
          key: "destruct",
          value: function destruct() {}
        }, {
          key: "addAnimation",
          value: function addAnimation(anim) {
            var index = this._anims.array.indexOf(anim);

            if (index === -1) {
              this._anims.push(anim);
            }
          }
        }, {
          key: "removeAnimation",
          value: function removeAnimation(anim) {
            var index = this._anims.array.indexOf(anim);

            if (index >= 0) {
              this._anims.fastRemoveAt(index);
            } else {
              errorID(3907);
            }
          }
        }, {
          key: "pushDelayEvent",
          value: function pushDelayEvent(fn, thisArg, args) {
            this._delayEvents.push({
              fn: fn,
              thisArg: thisArg,
              args: args
            });
          }
        }, {
          key: "addSockets",
          value: function addSockets(root, sockets) {
            var _this2 = this;

            var _loop = function _loop(i) {
              var socket = sockets[i];

              if (_this2._sockets.find(function (s) {
                return s.target === socket.target;
              })) {
                return "continue";
              }

              var targetNode = root.getChildByPath(socket.path);
              var transform = socket.target && targetNode && getTransform(targetNode, root);

              if (transform) {
                _this2._sockets.push({
                  target: socket.target,
                  transform: transform
                });
              }
            };

            for (var i = 0; i < sockets.length; ++i) {
              var _ret = _loop(i);

              if (_ret === "continue") continue;
            }
          }
        }, {
          key: "removeSockets",
          value: function removeSockets(root, sockets) {
            for (var i = 0; i < sockets.length; ++i) {
              var socketToRemove = sockets[i];

              for (var j = 0; j < this._sockets.length; ++j) {
                var socket = this._sockets[j];

                if (socket.target === socketToRemove.target) {
                  deleteTransform(socket.transform.node);
                  this._sockets[j] = this._sockets[this._sockets.length - 1];
                  this._sockets.length--;
                  break;
                }
              }
            }
          }
        }, {
          key: "blendState",
          get: function get() {
            return this._blendStateBuffer;
          }
        }]);

        return AnimationManager;
      }(System), _class2$c.ID = 'animation', _temp$c)) || _class$c);
      director.on(Director.EVENT_INIT, function () {
        var animationManager = new AnimationManager();
        director.registerSystem(AnimationManager.ID, animationManager, Scheduler.PRIORITY_SYSTEM);
      });
      legacyCC.AnimationManager = AnimationManager;

      var _dec$c, _class$d, _dec2$b, _class2$d, _dec3$9, _class3$3, _dec4$9, _class4$5;
      legacyCC.easing = easing;
      /**
       * Alias of `HierarchyPath`.
       * @deprecated Since v1.1.
       */

      var HierachyModifier = exports('H', (_dec$c = ccclass('cc.HierachyModifier'), _dec$c(_class$d = /*#__PURE__*/function (_HierarchyPath) {
        _inherits(HierachyModifier, _HierarchyPath);

        function HierachyModifier() {
          _classCallCheck(this, HierachyModifier);

          return _possibleConstructorReturn(this, _getPrototypeOf(HierachyModifier).apply(this, arguments));
        }

        return HierachyModifier;
      }(HierarchyPath)) || _class$d));
      legacyCC.HierachyModifier = HierachyModifier;
      /**
       * Alias of `ComponentPath`.
       * @deprecated Since v1.1.
       */

      var ComponentModifier = exports('o', (_dec2$b = ccclass('cc.ComponentModifier'), _dec2$b(_class2$d = /*#__PURE__*/function (_ComponentPath) {
        _inherits(ComponentModifier, _ComponentPath);

        function ComponentModifier() {
          _classCallCheck(this, ComponentModifier);

          return _possibleConstructorReturn(this, _getPrototypeOf(ComponentModifier).apply(this, arguments));
        }

        return ComponentModifier;
      }(ComponentPath)) || _class2$d));
      legacyCC.ComponentModifier = ComponentModifier;
      /**
       * Implements `IValueProxyFactory` but do nothing.
       * @deprecated Since v1.1.
       */

      var CurveValueAdapter = exports('p', (_dec3$9 = ccclass('cc.CurveValueAdapter'), _dec3$9(_class3$3 = /*#__PURE__*/function () {
        function CurveValueAdapter() {
          _classCallCheck(this, CurveValueAdapter);
        }

        _createClass(CurveValueAdapter, [{
          key: "forTarget",
          value: function forTarget(target) {
            return {
              set: function set() {}
            };
          }
        }]);

        return CurveValueAdapter;
      }()) || _class3$3));
      legacyCC.CurveValueAdapter = CurveValueAdapter;
      /**
       * Alias of `UniformProxyFactory`.
       * @deprecated Since v1.1.
       */

      var UniformCurveValueAdapter = exports('q', (_dec4$9 = ccclass('cc.UniformCurveValueAdapter'), _dec4$9(_class4$5 = /*#__PURE__*/function (_UniformProxyFactory) {
        _inherits(UniformCurveValueAdapter, _UniformProxyFactory);

        function UniformCurveValueAdapter() {
          _classCallCheck(this, UniformCurveValueAdapter);

          return _possibleConstructorReturn(this, _getPrototypeOf(UniformCurveValueAdapter).apply(this, arguments));
        }

        return UniformCurveValueAdapter;
      }(UniformProxyFactory)) || _class4$5));
      legacyCC.UniformCurveValueAdapter = UniformCurveValueAdapter;
      /**
       * Alias of `isPropertyPath(path) && typeof path === 'string'`.
       * @deprecated Since v1.1.
       */

      function isPropertyModifier(path) {
        return typeof path === 'string';
      }
      legacyCC.isPropertyModifier = isPropertyModifier;
      /**
       * Alias of `isPropertyPath(path) && typeof path === 'number'`.
       * @deprecated Since v1.1.
       */

      function isElementModifier(path) {
        return typeof path === 'number';
      }
      legacyCC.isElementModifier = isElementModifier;
      /**
       * Alias of `isCustomPath()`.
       * @deprecated Since v1.1.
       */

      function isCustomTargetModifier(path, constructor) {
        return path instanceof constructor;
      }
      legacyCC.isCustomTargetModifier = isCustomTargetModifier;

      var Counter = /*#__PURE__*/function () {
        _createClass(Counter, [{
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(val) {
            this._value = val;
          }
        }]);

        function Counter(id, opts, now) {
          _classCallCheck(this, Counter);

          this._id = void 0;
          this._opts = void 0;
          this._accumStart = void 0;
          this._total = 0;
          this._value = 0;
          this._averageValue = 0;
          this._accumValue = 0;
          this._accumSamples = 0;
          this._id = id;
          this._opts = opts;
          this._accumStart = now;
        }

        _createClass(Counter, [{
          key: "sample",
          value: function sample(now) {
            this._average(this._value, now);
          }
        }, {
          key: "human",
          value: function human() {
            var _this$_opts = this._opts,
                average = _this$_opts.average,
                isInteger = _this$_opts.isInteger;
            var v = average ? this._averageValue : this._value;
            return isInteger ? Math.round(v) : Math.round(v * 100) / 100;
          }
        }, {
          key: "alarm",
          value: function alarm() {
            return this._opts.below && this._value < this._opts.below || this._opts.over && this._value > this._opts.over;
          }
        }, {
          key: "_average",
          value: function _average(v) {
            var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (this._opts.average) {
              this._accumValue += v;
              ++this._accumSamples;
              var t = now;

              if (t - this._accumStart >= this._opts.average) {
                this._averageValue = this._accumValue / this._accumSamples;
                this._accumValue = 0;
                this._accumStart = t;
                this._accumSamples = 0;
              }
            }
          }
        }]);

        return Counter;
      }();

      var _dec$d, _class$e, _temp$d;
      var PerfCounter = (_dec$d = ccclass('cc.PerfCounter'), _dec$d(_class$e = (_temp$d = /*#__PURE__*/function (_Counter) {
        _inherits(PerfCounter, _Counter);

        function PerfCounter(id, opts, now) {
          var _this;

          _classCallCheck(this, PerfCounter);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(PerfCounter).call(this, id, opts, now));
          _this._time = void 0;
          _this._time = now;
          return _this;
        }

        _createClass(PerfCounter, [{
          key: "start",
          value: function start() {
            var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            this._time = now; // DISABLE: long time running will cause performance drop down
            // window.performance.mark(this._idstart);
          }
        }, {
          key: "end",
          value: function end() {
            var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            this._value = now - this._time; // DISABLE: long time running will cause performance drop down
            // window.performance.mark(this._idend);
            // window.performance.measure(this._id, this._idstart, this._idend);

            this._average(this._value);
          }
        }, {
          key: "tick",
          value: function tick() {
            this.end();
            this.start();
          }
        }, {
          key: "frame",
          value: function frame(now) {
            var t = now;
            var e = t - this._time;
            this._total++;
            var avg = this._opts.average || 1000;

            if (e > avg) {
              this._value = this._total * 1000 / e;
              this._total = 0;
              this._time = t;

              this._average(this._value);
            }
          }
        }]);

        return PerfCounter;
      }(Counter), _temp$d)) || _class$e);

      var _characters = '0123456789. ';
      var _string2offset = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '.': 10
      };
      var _profileInfo = {
        frame: {
          desc: 'Frame time (ms)',
          min: 0,
          max: 50,
          average: 500
        },
        fps: {
          desc: 'Framerate (FPS)',
          below: 30,
          average: 500,
          isInteger: true
        },
        draws: {
          desc: 'Draw call',
          isInteger: true
        },
        instances: {
          desc: 'Instance Count',
          isInteger: true
        },
        tricount: {
          desc: 'Triangle',
          isInteger: true
        },
        logic: {
          desc: 'Game Logic (ms)',
          min: 0,
          max: 50,
          average: 500,
          color: '#080'
        },
        physics: {
          desc: 'Physics (ms)',
          min: 0,
          max: 50,
          average: 500
        },
        render: {
          desc: 'Renderer (ms)',
          min: 0,
          max: 50,
          average: 500,
          color: '#f90'
        },
        textureMemory: {
          desc: 'GFX Texture Mem(M)'
        },
        bufferMemory: {
          desc: 'GFX Buffer Mem(M)'
        }
      };
      var _constants = {
        fontSize: 23,
        quadHeight: 0.4,
        segmentsPerLine: 8,
        textureWidth: 256,
        textureHeight: 256
      };
      var Profiler = exports('P', /*#__PURE__*/function () {
        // total lines to display
        // update use time
        function Profiler() {
          _classCallCheck(this, Profiler);

          this._stats = null;
          this.id = '__Profiler__';
          this._showFPS = false;
          this._rootNode = null;
          this._device = null;
          this._canvas = null;
          this._ctx = null;
          this._texture = null;
          this._region = new GFXBufferTextureCopy();
          this._canvasArr = [];
          this._regionArr = [this._region];
          this.digitsData = null;
          this.pass = null;
          this._canvasDone = false;
          this._statsDone = false;
          this._inited = false;
          this._lineHeight = _constants.textureHeight / (Object.keys(_profileInfo).length + 1);
          this._wordHeight = 0;
          this._eachNumWidth = 0;
          this._totalLines = 0;
          this.lastTime = 0;

          {
            this._canvas = document.createElement('canvas');
            this._ctx = this._canvas.getContext('2d');

            this._canvasArr.push(this._canvas);
          }
        }

        _createClass(Profiler, [{
          key: "isShowingStats",
          value: function isShowingStats() {
            return this._showFPS;
          }
        }, {
          key: "hideStats",
          value: function hideStats() {
            if (this._showFPS) {
              if (this._rootNode) {
                this._rootNode.active = false;
              }

              legacyCC.game.off(legacyCC.Game.EVENT_RESTART, this.generateNode, this);
              legacyCC.director.off(legacyCC.Director.EVENT_BEFORE_UPDATE, this.beforeUpdate, this);
              legacyCC.director.off(legacyCC.Director.EVENT_AFTER_UPDATE, this.afterUpdate, this);
              legacyCC.director.off(legacyCC.Director.EVENT_BEFORE_PHYSICS, this.beforePhysics, this);
              legacyCC.director.off(legacyCC.Director.EVENT_AFTER_PHYSICS, this.afterPhysics, this);
              legacyCC.director.off(legacyCC.Director.EVENT_BEFORE_DRAW, this.beforeDraw, this);
              legacyCC.director.off(legacyCC.Director.EVENT_AFTER_DRAW, this.afterDraw, this);
              this._showFPS = false;
            }
          }
        }, {
          key: "showStats",
          value: function showStats() {
            if (!this._showFPS) {
              if (!this._device) {
                this._device = legacyCC.director.root.device;
              }

              this.generateCanvas();
              this.generateStats();
              legacyCC.game.once(legacyCC.Game.EVENT_ENGINE_INITED, this.generateNode, this);
              legacyCC.game.on(legacyCC.Game.EVENT_RESTART, this.generateNode, this);

              if (this._rootNode) {
                this._rootNode.active = true;
              }

              legacyCC.director.on(legacyCC.Director.EVENT_BEFORE_UPDATE, this.beforeUpdate, this);
              legacyCC.director.on(legacyCC.Director.EVENT_AFTER_UPDATE, this.afterUpdate, this);
              legacyCC.director.on(legacyCC.Director.EVENT_BEFORE_PHYSICS, this.beforePhysics, this);
              legacyCC.director.on(legacyCC.Director.EVENT_AFTER_PHYSICS, this.afterPhysics, this);
              legacyCC.director.on(legacyCC.Director.EVENT_BEFORE_DRAW, this.beforeDraw, this);
              legacyCC.director.on(legacyCC.Director.EVENT_AFTER_DRAW, this.afterDraw, this);
              this._showFPS = true;
              this._canvasDone = true;
              this._statsDone = true;
            }
          }
        }, {
          key: "generateCanvas",
          value: function generateCanvas() {
            if (this._canvasDone) {
              return;
            }

            var textureWidth = _constants.textureWidth,
                textureHeight = _constants.textureHeight;

            if (!this._ctx || !this._canvas) {
              return;
            }

            this._canvas.width = textureWidth;
            this._canvas.height = textureHeight;
            this._canvas.style.width = "".concat(this._canvas.width);
            this._canvas.style.height = "".concat(this._canvas.height);
            this._ctx.font = "".concat(_constants.fontSize, "px Arial");
            this._ctx.textBaseline = 'top';
            this._ctx.fillStyle = '#fff';
            this._texture = this._device.createTexture({
              type: GFXTextureType.TEX2D,
              usage: GFXTextureUsageBit.SAMPLED | GFXTextureUsageBit.TRANSFER_DST,
              format: GFXFormat.RGBA8,
              width: textureWidth,
              height: textureHeight
            });
            this._region.texExtent.width = textureWidth;
            this._region.texExtent.height = textureHeight;
          }
        }, {
          key: "generateStats",
          value: function generateStats() {
            if (this._statsDone || !this._ctx || !this._canvas) {
              return;
            }

            this._stats = null;
            var now = performance.now();
            this._ctx.textAlign = 'left';
            var i = 0;

            for (var id in _profileInfo) {
              var element = _profileInfo[id];

              this._ctx.fillText(element.desc, 0, i * this._lineHeight);

              element.counter = new PerfCounter(id, element, now);
              i++;
            }

            this._totalLines = i;
            this._wordHeight = this._totalLines * this._lineHeight / this._canvas.height;

            for (var j = 0; j < _characters.length; ++j) {
              var offset = this._ctx.measureText(_characters[j]).width;

              this._eachNumWidth = Math.max(this._eachNumWidth, offset);
            }

            for (var _j = 0; _j < _characters.length; ++_j) {
              this._ctx.fillText(_characters[_j], _j * this._eachNumWidth, this._totalLines * this._lineHeight);
            }

            this._eachNumWidth /= this._canvas.width;
            this._stats = _profileInfo;
            this._canvasArr[0] = this._canvas;

            this._device.copyTexImagesToTexture(this._canvasArr, this._texture, this._regionArr);
          }
        }, {
          key: "generateNode",
          value: function generateNode() {
            if (this._rootNode && this._rootNode.isValid) {
              return;
            }

            this._rootNode = new Node('PROFILER_NODE');
            legacyCC.game.addPersistRootNode(this._rootNode);
            var cameraNode = new Node('Profiler_Camera');
            cameraNode.setPosition(0, 0, 1.5);
            cameraNode.parent = this._rootNode;
            var camera = cameraNode.addComponent('cc.Camera');
            camera.projection = Camera.ProjectionType.ORTHO;
            camera.near = 1;
            camera.far = 2;
            camera.orthoHeight = this._device.height;
            camera.visibility = Layers.BitMask.PROFILER;
            camera.clearFlags = GFXClearFlag.NONE;
            camera.priority = 0xffffffff; // after everything else

            camera.flows = ['UIFlow'];
            var managerNode = new Node('Profiler_Root');
            managerNode.parent = this._rootNode;
            var height = _constants.quadHeight;
            var rowHeight = height / this._totalLines;
            var lWidth = height / this._wordHeight;
            var scale = rowHeight / _constants.fontSize;
            var columnWidth = this._eachNumWidth * this._canvas.width * scale;
            var vertexPos = [0, height, 0, // top-left
            lWidth, height, 0, // top-right
            lWidth, 0, 0, // bottom-right
            0, 0, 0 // bottom-left
            ];
            var vertexindices = [0, 2, 1, 0, 3, 2];
            var vertexUV = [0, 0, -1, 0, 1, 0, -1, 0, 1, this._wordHeight, -1, 0, 0, this._wordHeight, -1, 0];
            var offset = 0;

            for (var i = 0; i < this._totalLines; i++) {
              for (var j = 0; j < _constants.segmentsPerLine; j++) {
                vertexPos.push(lWidth + j * columnWidth, height - i * rowHeight, 0); // tl

                vertexPos.push(lWidth + (j + 1) * columnWidth, height - i * rowHeight, 0); // tr

                vertexPos.push(lWidth + (j + 1) * columnWidth, height - (i + 1) * rowHeight, 0); // br

                vertexPos.push(lWidth + j * columnWidth, height - (i + 1) * rowHeight, 0); // bl

                offset = (i * _constants.segmentsPerLine + j + 1) * 4;
                vertexindices.push(0 + offset, 2 + offset, 1 + offset, 0 + offset, 3 + offset, 2 + offset);
                var idx = i * _constants.segmentsPerLine + j;
                var z = Math.floor(idx / 4);
                var w = idx - z * 4;
                vertexUV.push(0, this._wordHeight, z, w); // tl

                vertexUV.push(this._eachNumWidth, this._wordHeight, z, w); // tr

                vertexUV.push(this._eachNumWidth, 1, z, w); // br

                vertexUV.push(0, 1, z, w); // bl
              }
            } // device NDC correction


            var ySign = this._device.screenSpaceSignY;

            for (var _i = 1; _i < vertexPos.length; _i += 3) {
              vertexPos[_i] *= ySign;
            }

            var modelCom = managerNode.addComponent(MeshRenderer);
            modelCom.mesh = createMesh({
              positions: vertexPos,
              indices: vertexindices,
              colors: vertexUV // pack all the necessary info in a_color: { x: u, y: v, z: id.x, w: id.y }

            });

            var _material = new Material();

            _material.initialize({
              effectName: 'util/profiler'
            });

            _material.setProperty('offset', new Vec4(-0.9, -0.9 * ySign, this._eachNumWidth, 0));

            var pass = this.pass = _material.passes[0];
            var handle = pass.getBinding('mainTexture');
            var binding = pass.getBinding('digits');
            pass.bindTexture(handle, this._texture);
            this.digitsData = pass.blocks[binding];
            modelCom.material = _material;
            modelCom.node.layer = Layers.Enum.PROFILER;
            this._inited = true;
          }
        }, {
          key: "beforeUpdate",
          value: function beforeUpdate() {
            if (!this._stats) {
              return;
            }

            var now = performance.now();

            this._stats.frame.counter.end(now);

            this._stats.frame.counter.start(now);

            this._stats.logic.counter.start(now);
          }
        }, {
          key: "afterUpdate",
          value: function afterUpdate() {
            if (!this._stats) {
              return;
            }

            var now = performance.now();

            if (legacyCC.director.isPaused()) {
              this._stats.frame.counter.start(now);
            } else {
              this._stats.logic.counter.end(now);
            }
          }
        }, {
          key: "beforePhysics",
          value: function beforePhysics() {
            if (!this._stats) {
              return;
            }

            var now = performance.now();

            this._stats.physics.counter.start(now);
          }
        }, {
          key: "afterPhysics",
          value: function afterPhysics() {
            if (!this._stats) {
              return;
            }

            var now = performance.now();

            this._stats.physics.counter.end(now);
          }
        }, {
          key: "beforeDraw",
          value: function beforeDraw() {
            if (!this._stats) {
              return;
            }

            var now = performance.now();

            this._stats.render.counter.start(now);
          }
        }, {
          key: "afterDraw",
          value: function afterDraw() {
            if (!this._stats || !this._inited) {
              return;
            }

            var now = performance.now();

            this._stats.fps.counter.frame(now);

            this._stats.render.counter.end(now);

            if (now - this.lastTime < 500) {
              return;
            }

            this.lastTime = now;
            var device = this._device;
            this._stats.draws.counter.value = device.numDrawCalls;
            this._stats.instances.counter.value = device.numInstances;
            this._stats.bufferMemory.counter.value = device.memoryStatus.bufferSize / (1024 * 1024);
            this._stats.textureMemory.counter.value = device.memoryStatus.textureSize / (1024 * 1024);
            this._stats.tricount.counter.value = device.numTris;
            var i = 0;
            var view = this.digitsData;

            for (var id in this._stats) {
              var stat = this._stats[id];
              stat.counter.sample(now);
              var result = stat.counter.human().toString();

              for (var j = _constants.segmentsPerLine - 1; j >= 0; j--) {
                var index = i * _constants.segmentsPerLine + j;
                var character = result[result.length - (_constants.segmentsPerLine - j)];
                var offset = _string2offset[character];

                if (offset === undefined) {
                  offset = 11;
                }

                view[index] = offset;
              }

              i++;
            } // @ts-ignore


            this.pass._rootBufferDirty = true;
          }
        }]);

        return Profiler;
      }());
      var profiler = exports('O', new Profiler());
      legacyCC.profiler = profiler;

      var SplashScreen = /*#__PURE__*/function () {
        _createClass(SplashScreen, [{
          key: "main",
          value: function main(root) {
            if (root == null) return console.error('RENDER ROOT IS NULL.');

            if (window._CCSettings && window._CCSettings.splashScreen) {
              this.setting = window._CCSettings.splashScreen;
              this.setting.totalTime = this.setting.totalTime != null ? this.setting.totalTime : 3000;
              this.setting.base64src = this.setting.base64src || '';
              this.setting.effect = this.setting.effect || 'FADE-INOUT';
              this.setting.clearColor = this.setting.clearColor || {
                r: 0.88,
                g: 0.88,
                b: 0.88,
                a: 1.0
              };
              this.setting.displayRatio = this.setting.displayRatio != null ? this.setting.displayRatio : 0.4;
              this.setting.displayWatermark = this.setting.displayWatermark != null ? this.setting.displayWatermark : true;
            } else {
              this.setting = {
                totalTime: 3000,
                base64src: '',
                effect: 'FADE-INOUT',
                clearColor: {
                  r: 0.88,
                  g: 0.88,
                  b: 0.88,
                  a: 1.0
                },
                displayRatio: 0.4,
                displayWatermark: true
              };
            }

            if (this.setting.base64src === '' || this.setting.totalTime <= 0) {
              if (this.callBack) {
                this.callBack();
              }

              this.callBack = null;
              this.setting = null;
              this._directCall = true;
              return;
            } else {
              legacyCC.view.enableRetina(true);
              var designRes = window._CCSettings.designResolution;

              if (designRes) {
                legacyCC.view.setDesignResolutionSize(designRes.width, designRes.height, designRes.policy);
              } else {
                legacyCC.view.setDesignResolutionSize(960, 640, 4);
              }

              this.root = root;
              this.device = root.device;
              legacyCC.game.once(legacyCC.Game.EVENT_GAME_INITED, function () {
                legacyCC.director._lateUpdate = performance.now();
              }, legacyCC.director);
              this.callBack = null;
              this.cancelAnimate = false;
              this.startTime = -1;
              this.clearColors = [this.setting.clearColor];
              this.screenWidth = this.device.width;
              this.screenHeight = this.device.height;
              this.image = new Image();
              this.image.onload = this.init.bind(this);
              this.image.src = this.setting.base64src;
            }
          }
        }, {
          key: "setOnFinish",
          value: function setOnFinish(cb) {
            if (this._directCall) {
              if (cb) {
                delete SplashScreen._ins;
                return cb();
              }
            }

            this.callBack = cb;
          }
        }, {
          key: "_tryToStart",
          value: function _tryToStart() {
            if (this._splashFinish && this._loadFinish) {
              if (this.callBack) {
                this.callBack();
                this.hide();
              }
            }
          }
        }, {
          key: "init",
          value: function init() {
            var _this = this;

            this.initCMD();
            this.initIA();
            this.initPSO();

            if (this.setting.displayWatermark) {
              this.initText();
            }

            var animate = function animate(time) {
              if (_this.cancelAnimate) {
                return;
              }

              if (_this.startTime < 0) {
                _this.startTime = time;
              }

              var elapsedTime = time - _this.startTime;
              /** update uniform */

              var PERCENT = clamp01(elapsedTime / _this.setting.totalTime);
              var u_p = cubicOut(PERCENT);
              if (_this.setting.effect === 'NONE') u_p = 1.0;

              _this.material.setProperty('u_precent', u_p);

              _this.material.passes[0].update();

              if (_this.setting.displayWatermark && _this.textMaterial) {
                _this.textMaterial.setProperty('u_precent', u_p);

                _this.textMaterial.passes[0].update();
              }

              _this.frame(time);

              if (elapsedTime > _this.setting.totalTime) {
                _this.splashFinish = true;
              }

              requestAnimationFrame(animate);
            };

            this.handle = requestAnimationFrame(animate);
          }
        }, {
          key: "hide",
          value: function hide() {
            cancelAnimationFrame(this.handle);
            this.cancelAnimate = true; // here delay destroy：because ios immediately destroy input assmebler will crash & native renderer will mess.

            setTimeout(this.destroy.bind(this));
          }
        }, {
          key: "frame",
          value: function frame(time) {
            if (this.cancelAnimate) return; // TODO: hack for cocosPlay & XIAOMI cause on landscape canvas value is wrong

            var device = this.device;
            device.acquire(); // record command

            var cmdBuff = this.cmdBuff;
            var framebuffer = this.framebuffer;
            var renderArea = this.renderArea;
            cmdBuff.begin();
            cmdBuff.beginRenderPass(framebuffer.renderPass, framebuffer, renderArea, this.clearColors, 1.0, 0);
            var hPass = this.material.passes[0].handle;
            var pso = PipelineStateManager.getOrCreatePipelineState(device, hPass, this.shader, framebuffer.renderPass, this.assmebler);
            cmdBuff.bindPipelineState(pso);
            cmdBuff.bindDescriptorSet(SetIndex.MATERIAL, DSPool.get(PassPool.get(hPass, PassView.DESCRIPTOR_SET)));
            cmdBuff.bindInputAssembler(this.assmebler);
            cmdBuff.draw(this.assmebler);

            if (this.setting.displayWatermark && this.textShader && this.textAssmebler) {
              var hPassText = this.textMaterial.passes[0].handle;
              var psoWatermark = PipelineStateManager.getOrCreatePipelineState(device, hPassText, this.textShader, framebuffer.renderPass, this.textAssmebler);
              cmdBuff.bindPipelineState(psoWatermark);
              cmdBuff.bindDescriptorSet(SetIndex.MATERIAL, DSPool.get(PassPool.get(hPassText, PassView.DESCRIPTOR_SET)));
              cmdBuff.bindInputAssembler(this.textAssmebler);
              cmdBuff.draw(this.textAssmebler);
            }

            cmdBuff.endRenderPass();
            cmdBuff.end();
            device.queue.submit([cmdBuff]);
            device.present();
          }
        }, {
          key: "initText",
          value: function initText() {
            /** texure */
            this.textImg = document.createElement('canvas');
            this.textImg.width = 330;
            this.textImg.height = 30;
            this.textImg.style.width = "".concat(this.textImg.width);
            this.textImg.style.height = "".concat(this.textImg.height);
            var ctx = this.textImg.getContext('2d');
            ctx.font = "".concat(18, "px Arial");
            ctx.textBaseline = 'top';
            ctx.textAlign = 'left';
            ctx.fillStyle = '`#424242`';
            var text = 'Powered by Cocos Creator 3D';
            var textMetrics = ctx.measureText(text);
            ctx.fillText(text, (330 - textMetrics.width) / 2, 6);
            this.textRegion = new GFXBufferTextureCopy();
            this.textRegion.texExtent.width = this.textImg.width;
            this.textRegion.texExtent.height = this.textImg.height;
            this.textRegion.texExtent.depth = 1;
            this.textTexture = this.device.createTexture({
              type: GFXTextureType.TEX2D,
              usage: GFXTextureUsageBit.SAMPLED | GFXTextureUsageBit.TRANSFER_DST,
              format: GFXFormat.RGBA8,
              width: this.textImg.width,
              height: this.textImg.height
            });
            this.device.copyTexImagesToTexture([this.textImg], this.textTexture, [this.textRegion]);
            /** PSO */

            this.textMaterial = new Material();
            this.textMaterial.initialize({
              effectName: 'util/splash-screen'
            });
            var pass = this.textMaterial.passes[0];
            var binding = pass.getBinding('mainTexture');
            pass.bindTexture(binding, this.textTexture);
            this.textShader = ShaderPool.get(pass.getShaderVariant());
            DSPool.get(PassPool.get(pass.handle, PassView.DESCRIPTOR_SET)).update();
            /** Assembler */
            // create vertex buffer

            var vbStride = Float32Array.BYTES_PER_ELEMENT * 4;
            var vbSize = vbStride * 4;
            this.textVB = this.device.createBuffer({
              usage: GFXBufferUsageBit.VERTEX | GFXBufferUsageBit.TRANSFER_DST,
              memUsage: GFXMemoryUsageBit.HOST | GFXMemoryUsageBit.DEVICE,
              size: vbSize,
              stride: vbStride
            });
            var verts = new Float32Array(4 * 4);
            var w = -this.textImg.width / 2;
            var h = -this.textImg.height / 2;

            if (this.screenWidth < this.screenHeight) {
              w = -this.screenWidth / 2 * 0.5;
              h = w / (this.textImg.width / this.textImg.height);
            } else {
              w = -this.screenHeight / 2 * 0.5;
              h = w / (this.textImg.width / this.textImg.height);
            }

            var n = 0;
            verts[n++] = w;
            verts[n++] = h;
            verts[n++] = 0.0;
            verts[n++] = 1.0;
            verts[n++] = -w;
            verts[n++] = h;
            verts[n++] = 1.0;
            verts[n++] = 1.0;
            verts[n++] = w;
            verts[n++] = -h;
            verts[n++] = 0.0;
            verts[n++] = 0.0;
            verts[n++] = -w;
            verts[n++] = -h;
            verts[n++] = 1.0;
            verts[n++] = 0.0; // translate to bottom

            for (var i = 0; i < verts.length; i += 4) {
              verts[i] = verts[i] + this.screenWidth / 2;
              verts[i + 1] = verts[i + 1] + this.screenHeight * 0.1;
            } // transform to clipspace


            var ySign = this.device.screenSpaceSignY;

            for (var _i = 0; _i < verts.length; _i += 4) {
              verts[_i] = verts[_i] / this.screenWidth * 2 - 1;
              verts[_i + 1] = (verts[_i + 1] / this.screenHeight * 2 - 1) * ySign;
            }

            this.textVB.update(verts); // create index buffer

            var ibStride = Uint16Array.BYTES_PER_ELEMENT;
            var ibSize = ibStride * 6;
            this.textIB = this.device.createBuffer({
              usage: GFXBufferUsageBit.INDEX | GFXBufferUsageBit.TRANSFER_DST,
              memUsage: GFXMemoryUsageBit.HOST | GFXMemoryUsageBit.DEVICE,
              size: ibSize,
              stride: ibStride
            });
            var indices = new Uint16Array(6);
            indices[0] = 0;
            indices[1] = 1;
            indices[2] = 2;
            indices[3] = 1;
            indices[4] = 3;
            indices[5] = 2;
            this.textIB.update(indices);
            var attributes = [{
              name: 'a_position',
              format: GFXFormat.RG32F
            }, {
              name: 'a_texCoord',
              format: GFXFormat.RG32F
            }];
            this.textAssmebler = this.device.createInputAssembler({
              attributes: attributes,
              vertexBuffers: [this.textVB],
              indexBuffer: this.textIB
            });
          }
        }, {
          key: "initCMD",
          value: function initCMD() {
            var device = this.device;
            this.renderArea = {
              x: 0,
              y: 0,
              width: device.width,
              height: device.height
            };
            this.framebuffer = this.root.mainWindow.framebuffer;
            this.cmdBuff = device.createCommandBuffer({
              queue: device.queue,
              type: GFXCommandBufferType.PRIMARY
            });
          }
        }, {
          key: "initIA",
          value: function initIA() {
            var device = this.device; // create vertex buffer

            var vbStride = Float32Array.BYTES_PER_ELEMENT * 4;
            var vbSize = vbStride * 4;
            this.vertexBuffers = device.createBuffer({
              usage: GFXBufferUsageBit.VERTEX | GFXBufferUsageBit.TRANSFER_DST,
              memUsage: GFXMemoryUsageBit.HOST | GFXMemoryUsageBit.DEVICE,
              size: vbSize,
              stride: vbStride
            });
            var verts = new Float32Array(4 * 4);
            var w = -this.image.width / 2;
            var h = -this.image.height / 2;

            if (this.screenWidth < this.screenHeight) {
              w = -this.screenWidth / 2 * this.setting.displayRatio;
              h = w / (this.image.width / this.image.height);
            } else {
              w = -this.screenHeight / 2 * this.setting.displayRatio;
              h = w / (this.image.width / this.image.height);
            }

            var n = 0;
            verts[n++] = w;
            verts[n++] = h;
            verts[n++] = 0.0;
            verts[n++] = 1.0;
            verts[n++] = -w;
            verts[n++] = h;
            verts[n++] = 1.0;
            verts[n++] = 1.0;
            verts[n++] = w;
            verts[n++] = -h;
            verts[n++] = 0.0;
            verts[n++] = 0;
            verts[n++] = -w;
            verts[n++] = -h;
            verts[n++] = 1.0;
            verts[n++] = 0; // translate to center

            for (var i = 0; i < verts.length; i += 4) {
              verts[i] = verts[i] + this.screenWidth / 2;
              verts[i + 1] = verts[i + 1] + this.screenHeight / 2;
            } // transform to clipspace


            var ySign = device.screenSpaceSignY;

            for (var _i2 = 0; _i2 < verts.length; _i2 += 4) {
              verts[_i2] = verts[_i2] / this.screenWidth * 2 - 1;
              verts[_i2 + 1] = (verts[_i2 + 1] / this.screenHeight * 2 - 1) * ySign;
            }

            this.vertexBuffers.update(verts); // create index buffer

            var ibStride = Uint16Array.BYTES_PER_ELEMENT;
            var ibSize = ibStride * 6;
            this.indicesBuffers = device.createBuffer({
              usage: GFXBufferUsageBit.INDEX | GFXBufferUsageBit.TRANSFER_DST,
              memUsage: GFXMemoryUsageBit.HOST | GFXMemoryUsageBit.DEVICE,
              size: ibSize,
              stride: ibStride
            });
            var indices = new Uint16Array(6);
            indices[0] = 0;
            indices[1] = 1;
            indices[2] = 2;
            indices[3] = 1;
            indices[4] = 3;
            indices[5] = 2;
            this.indicesBuffers.update(indices);
            var attributes = [{
              name: 'a_position',
              format: GFXFormat.RG32F
            }, {
              name: 'a_texCoord',
              format: GFXFormat.RG32F
            }];
            this.assmebler = device.createInputAssembler({
              attributes: attributes,
              vertexBuffers: [this.vertexBuffers],
              indexBuffer: this.indicesBuffers
            });
          }
        }, {
          key: "initPSO",
          value: function initPSO() {
            var device = this.device;
            this.material = new Material();
            this.material.initialize({
              effectName: 'util/splash-screen'
            });
            this.sampler = device.createSampler({
              'addressU': GFXAddress.CLAMP,
              'addressV': GFXAddress.CLAMP
            });
            this.texture = device.createTexture({
              type: GFXTextureType.TEX2D,
              usage: GFXTextureUsageBit.SAMPLED | GFXTextureUsageBit.TRANSFER_DST,
              format: GFXFormat.RGBA8,
              width: this.image.width,
              height: this.image.height
            });
            var pass = this.material.passes[0];
            var binding = pass.getBinding('mainTexture');
            pass.bindTexture(binding, this.texture);
            this.shader = ShaderPool.get(pass.getShaderVariant());
            var descriptorSet = DSPool.get(PassPool.get(pass.handle, PassView.DESCRIPTOR_SET));
            descriptorSet.bindSampler(binding, this.sampler);
            descriptorSet.update();
            this.region = new GFXBufferTextureCopy();
            this.region.texExtent.width = this.image.width;
            this.region.texExtent.height = this.image.height;
            this.region.texExtent.depth = 1;
            device.copyTexImagesToTexture([this.image], this.texture, [this.region]);
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.callBack = null;
            this.clearColors = null;
            this.device = null;
            this.image = null;
            this.framebuffer = null;
            this.renderArea = null;
            this.region = null;
            this.cmdBuff.destroy();
            this.cmdBuff = null;
            this.shader = null;
            this.material.destroy();
            this.material = null;
            this.texture.destroy();
            this.texture = null;
            this.assmebler.destroy();
            this.assmebler = null;
            this.vertexBuffers.destroy();
            this.vertexBuffers = null;
            this.indicesBuffers.destroy();
            this.indicesBuffers = null;
            this.sampler.destroy();
            this.sampler = null;
            /** text */

            if (this.setting.displayWatermark && this.textImg) {
              this.textImg = null;
              this.textRegion = null;
              this.textShader = null;
              this.textMaterial.destroy();
              this.textMaterial = null;
              this.textTexture.destroy();
              this.textTexture = null;
              this.textAssmebler.destroy();
              this.textAssmebler = null;
              this.textVB.destroy();
              this.textVB = null;
              this.textIB.destroy();
              this.textIB = null;
            }

            this.setting = null;
            delete SplashScreen._ins;
          }
        }, {
          key: "splashFinish",
          set: function set(v) {
            this._splashFinish = v;

            this._tryToStart();
          }
        }, {
          key: "loadFinish",
          set: function set(v) {
            this._loadFinish = v;

            this._tryToStart();
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!SplashScreen._ins) {
              SplashScreen._ins = new SplashScreen();
            }

            return SplashScreen._ins;
          }
        }]);

        function SplashScreen() {
          _classCallCheck(this, SplashScreen);

          this.handle = 0;
          this.callBack = null;
          this.cancelAnimate = false;
          this.startTime = -1;
          this._splashFinish = false;
          this._loadFinish = false;
          this._directCall = false;
        }

        return SplashScreen;
      }();
      SplashScreen._ins = void 0;
      legacyCC.internal.SplashScreen = SplashScreen;

      /**
       * @hidden
       */

      var vmath = {};
      replaceProperty(vmath, 'vmath', [{
        name: 'vec2',
        newName: 'Vec2',
        target: math,
        targetName: 'math'
      }, {
        name: 'vec3',
        newName: 'Vec3',
        target: math,
        targetName: 'math'
      }, {
        name: 'vec4',
        newName: 'Vec4',
        target: math,
        targetName: 'math'
      }, {
        name: 'quat',
        newName: 'Quat',
        target: math,
        targetName: 'math'
      }, {
        name: 'mat3',
        newName: 'Mat3',
        target: math,
        targetName: 'math'
      }, {
        name: 'mat4',
        newName: 'Mat4',
        target: math,
        targetName: 'math'
      }, {
        name: 'color4',
        newName: 'Color',
        target: math,
        targetName: 'math'
      }, {
        name: 'rect',
        newName: 'Rect',
        target: math,
        targetName: 'math'
      }, {
        name: 'approx',
        newName: 'approx',
        target: math,
        targetName: 'math'
      }, {
        name: 'EPSILON',
        newName: 'EPSILON',
        target: math,
        targetName: 'math'
      }, {
        name: 'equals',
        newName: 'equals',
        target: math,
        targetName: 'math'
      }, {
        name: 'clamp',
        newName: 'clamp',
        target: math,
        targetName: 'math'
      }, {
        name: 'clamp01',
        newName: 'clamp01',
        target: math,
        targetName: 'math'
      }, {
        name: 'lerp',
        newName: 'lerp',
        target: math,
        targetName: 'math'
      }, {
        name: 'toRadian',
        newName: 'toRadian',
        target: math,
        targetName: 'math'
      }, {
        name: 'toDegree',
        newName: 'toDegree',
        target: math,
        targetName: 'math'
      }, {
        name: 'random',
        newName: 'random',
        target: math,
        targetName: 'math'
      }, {
        name: 'randomRange',
        newName: 'randomRange',
        target: math,
        targetName: 'math'
      }, {
        name: 'randomRangeInt',
        newName: 'randomRangeInt',
        target: math,
        targetName: 'math'
      }, {
        name: 'pseudoRandom',
        newName: 'pseudoRandom',
        target: math,
        targetName: 'math'
      }, {
        name: 'pseudoRandomRangeInt',
        newName: 'pseudoRandomRangeInt',
        target: math,
        targetName: 'math'
      }, {
        name: 'nextPow2',
        newName: 'nextPow2',
        target: math,
        targetName: 'math'
      }, {
        name: 'repeat',
        newName: 'repeat',
        target: math,
        targetName: 'math'
      }, {
        name: 'pingPong',
        newName: 'pingPong',
        target: math,
        targetName: 'math'
      }, {
        name: 'inverseLerp',
        newName: 'inverseLerp',
        target: math,
        targetName: 'math'
      }]);
      legacyCC.vmath = vmath;

      replaceProperty(Scheduler.prototype, 'Scheduler.prototype', [{
        name: 'enableForTarget',
        newName: 'enableForTarget',
        target: Scheduler,
        targetName: 'Scheduler'
      }]); // Events

      replaceProperty(EventTouch.prototype, 'EventTouch.prototype', [{
        name: 'getUILocationInView',
        newName: 'getLocationInView',
        target: EventTouch,
        targetName: 'EventTouch'
      }]);
      replaceProperty(legacyCC, 'cc', [{
        name: 'GFXDynamicState',
        newName: 'GFXDynamicStateFlagBit'
      }, {
        name: 'GFXBindingType',
        newName: 'GFXDescriptorType'
      }, {
        name: 'GFXBindingLayout',
        newName: 'GFXDescriptorSet'
      }]);
      removeProperty(GFXCommandBuffer.prototype, 'GFXCommandBuffer.prototype', [{
        name: 'bindBindingLayout',
        suggest: 'Use `bindDescriptorSet` instead'
      }]);
      replaceProperty(SubModel.prototype, 'SubModel.prototype', [{
        name: 'subMeshData',
        newName: 'subMesh'
      }]);
      removeProperty(SubModel.prototype, 'SubModel.prototype', [{
        name: 'getSubModel',
        suggest: 'Use `subModels[i]` instead'
      }, {
        name: 'subModelNum',
        suggest: 'Use `subModels.length` instead'
      }]);

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
      legacyCC.math = math;
      legacyCC.geometry = geometry;

    }
  };
});
