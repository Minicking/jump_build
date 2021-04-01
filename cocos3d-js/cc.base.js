System.register(['./deprecated-4ec15e5e.js', './deprecated-b99c04b5.js', './index-caa5c4e5.js', './fence-5435bcd1.js', './html-text-parser-a9bbdc96.js', './SubContextView-a8900bae.js', './component-event-handler-b65b5a5a.js'], function (exports) {
    'use strict';
    var Pool, legacyCC, log, warn, error, assert, _throw, logID, warnID, errorID, assertID, debug, _createForOfIteratorHelperLoose, Vec3, _createClass, _classCallCheck, Mat4, ccenum, ccclass, type, _applyDecoratedDescriptor, _inherits, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, serializable, editable, RecyclePool, CachedArray, join, extname, mainFileName, basename, dirname, changeExtname, changeBasename, _normalize, stripSep, getSeperator, GFXAttributeName, GFXFormat, GFXBufferUsageBit, GFXMemoryUsageBit, uploadJointData, MINIMUM_JOINT_TEXTURE_SIZE, selectJointsMediumFormat, jointTextureSamplerHash, JointTexturePool, JointAnimationInfo, getWorldMatrix, getTransform, deleteTransform, SkinningModel, MorphModel, GFXPrimitiveMode, cylinder, applyDefaultGeometryOptions, box, plane, capsule, Ambient, CameraFOVAxis, CameraProjection, CameraAperture, CameraISO, CameraShutter, SKYBOX_FLAG, Camera, CameraVisFlags, VisibilityFlags, DirectionalLight, ColorTemperatureToRGB, LightType, nt2lm, Light, ModelType, Model, ShadowType, PCFType, Shadows, RenderScene, Skybox, SpotLight, SubModel, RenderQueue, PassStage, PropertyType, genHandle, getPropertyTypeFromHandle, getTypeFromHandle, getSetIndexFromHandle, getBindingFromHandle, getOffsetFromHandle, customizeType, type2reader, type2writer, getDefaultFromType, overrideMacros, BatchingSchemes, Pass, programLib, SamplerInfoIndex, defaultSamplerHash, genSamplerHash, samplerLib, nearestPOT, TextureBufferPool, MaterialInstance, PassInstance, MeshRenderer, Mesh, pipelineDefine, isPropertyPath, isCustomPath, HierarchyPath, ComponentPath, evaluatePath, createMesh, BakedSkinningModel, SphereLight, UniformProxyFactory, MorphWeightsValueProxy, MorphWeightsAllValueProxy, CubicSplineVec2Value, CubicSplineVec3Value, CubicSplineVec4Value, CubicSplineQuatValue, CubicSplineNumberValue;
    return {
        setters: [function (module) {
            Pool = module.P;
            legacyCC = module.l;
            log = module.o;
            warn = module.w;
            error = module.p;
            assert = module.q;
            _throw = module.u;
            logID = module.v;
            warnID = module.x;
            errorID = module.y;
            assertID = module.z;
            debug = module.B;
            _createForOfIteratorHelperLoose = module.D;
            Vec3 = module.V;
            _createClass = module.j;
            _classCallCheck = module.d;
            Mat4 = module.M;
            ccenum = module.E;
            ccclass = module.c;
            type = module.t;
            _applyDecoratedDescriptor = module._;
            _inherits = module.b;
            _possibleConstructorReturn = module.e;
            _getPrototypeOf = module.f;
            _initializerDefineProperty = module.g;
            _assertThisInitialized = module.i;
            serializable = module.s;
            editable = module.F;
            var _setter = {};
            _setter.AffineTransform = module.S;
            _setter.Asset = module.aC;
            _setter.BitMask = module.ai;
            _setter.CCBoolean = module.aw;
            _setter.CCClass = module.ar;
            _setter.CCFloat = module.av;
            _setter.CCInteger = module.au;
            _setter.CCObject = module.as;
            _setter.CCString = module.ax;
            _setter.Color = module.Y;
            _setter.Component = module.C;
            _setter.EPSILON = module.$;
            _setter.Enum = module.aj;
            _setter.Event = module.ay;
            _setter.EventTarget = module.az;
            _setter.Eventify = module.aA;
            _setter.JavaScript = module.aE;
            _setter.Mat3 = module.O;
            _setter.Mat4 = module.M;
            _setter.Pool = module.P;
            _setter.Quat = module.Q;
            _setter.RawAsset = module.aB;
            _setter.Rect = module.W;
            _setter.Script = module.aD;
            _setter.Size = module.T;
            _setter.TypeScript = module.aF;
            _setter.ValueType = module.ak;
            _setter.Vec2 = module.H;
            _setter.Vec3 = module.V;
            _setter.Vec4 = module.K;
            _setter.absMax = module.ah;
            _setter.absMaxComponent = module.ag;
            _setter.approx = module.a1;
            _setter.assert = module.q;
            _setter.assertID = module.z;
            _setter.bits = module.G;
            _setter.ccenum = module.E;
            _setter.cclegacy = module.l;
            _setter.clamp = module.k;
            _setter.clamp01 = module.a2;
            _setter.color = module.Z;
            _setter.equals = module.a0;
            _setter.error = module.p;
            _setter.errorID = module.y;
            _setter.inverseLerp = module.af;
            _setter.isDisplayStats = module.aG;
            _setter.isValid = module.at;
            _setter.js = module.al;
            _setter.lerp = module.a3;
            _setter.log = module.o;
            _setter.logID = module.v;
            _setter.markAsWarning = module.aq;
            _setter.mat4 = module.R;
            _setter.misc = module.am;
            _setter.nextPow2 = module.ac;
            _setter.pingPong = module.ae;
            _setter.pseudoRandom = module.a9;
            _setter.pseudoRandomRange = module.aa;
            _setter.pseudoRandomRangeInt = module.ab;
            _setter.quat = module.N;
            _setter.random = module.a6;
            _setter.randomRange = module.a7;
            _setter.randomRangeInt = module.a8;
            _setter.rect = module.X;
            _setter.removeProperty = module.ap;
            _setter.repeat = module.ad;
            _setter.replaceProperty = module.ao;
            _setter.setDefaultLogTimes = module.an;
            _setter.setDisplayStats = module.aH;
            _setter.size = module.U;
            _setter.sys = module.aI;
            _setter.toDegree = module.a5;
            _setter.toRadian = module.a4;
            _setter.v2 = module.I;
            _setter.v3 = module.J;
            _setter.v4 = module.L;
            _setter.warn = module.w;
            _setter.warnID = module.x;
            exports(_setter);
        }, function (module) {
            RecyclePool = module.R;
            CachedArray = module.C;
            join = module.j;
            extname = module.e;
            mainFileName = module.m;
            basename = module.b;
            dirname = module.d;
            changeExtname = module.c;
            changeBasename = module.a;
            _normalize = module._;
            stripSep = module.s;
            getSeperator = module.g;
            GFXAttributeName = module.G;
            GFXFormat = module.f;
            GFXBufferUsageBit = module.h;
            GFXMemoryUsageBit = module.i;
            uploadJointData = module.u;
            MINIMUM_JOINT_TEXTURE_SIZE = module.M;
            selectJointsMediumFormat = module.k;
            jointTextureSamplerHash = module.l;
            JointTexturePool = module.J;
            JointAnimationInfo = module.n;
            getWorldMatrix = module.o;
            getTransform = module.p;
            deleteTransform = module.q;
            SkinningModel = module.S;
            MorphModel = module.r;
            GFXPrimitiveMode = module.t;
            cylinder = module.v;
            applyDefaultGeometryOptions = module.w;
            box = module.x;
            plane = module.y;
            capsule = module.z;
            Ambient = module.A;
            CameraFOVAxis = module.B;
            CameraProjection = module.D;
            CameraAperture = module.E;
            CameraISO = module.F;
            CameraShutter = module.H;
            SKYBOX_FLAG = module.I;
            Camera = module.K;
            CameraVisFlags = module.L;
            VisibilityFlags = module.V;
            DirectionalLight = module.N;
            ColorTemperatureToRGB = module.O;
            LightType = module.P;
            nt2lm = module.Q;
            Light = module.T;
            ModelType = module.U;
            Model = module.W;
            ShadowType = module.X;
            PCFType = module.Y;
            Shadows = module.Z;
            RenderScene = module.$;
            Skybox = module.a0;
            SpotLight = module.a1;
            SubModel = module.a2;
            RenderQueue = module.a3;
            PassStage = module.a4;
            PropertyType = module.a5;
            genHandle = module.a6;
            getPropertyTypeFromHandle = module.a7;
            getTypeFromHandle = module.a8;
            getSetIndexFromHandle = module.a9;
            getBindingFromHandle = module.aa;
            getOffsetFromHandle = module.ab;
            customizeType = module.ac;
            type2reader = module.ad;
            type2writer = module.ae;
            getDefaultFromType = module.af;
            overrideMacros = module.ag;
            BatchingSchemes = module.ah;
            Pass = module.ai;
            programLib = module.aj;
            SamplerInfoIndex = module.ak;
            defaultSamplerHash = module.al;
            genSamplerHash = module.am;
            samplerLib = module.an;
            nearestPOT = module.ao;
            TextureBufferPool = module.ap;
            MaterialInstance = module.aq;
            PassInstance = module.ar;
            MeshRenderer = module.as;
            Mesh = module.at;
            pipelineDefine = module.au;
            isPropertyPath = module.av;
            isCustomPath = module.aw;
            HierarchyPath = module.ax;
            ComponentPath = module.ay;
            evaluatePath = module.az;
            createMesh = module.aA;
            var _setter = {};
            _setter.Acceleration = module.ba;
            _setter.AssetLibrary = module.aW;
            _setter.BASELINE_RATIO = module.aC;
            _setter.BaseNode = module.cV;
            _setter.BitmapFont = module.b0;
            _setter.CachedArray = module.C;
            _setter.CompactValueTypeArray = module.aP;
            _setter.DESCRIPTOR_BUFFER_TYPE = module.bj;
            _setter.DESCRIPTOR_DYNAMIC_TYPE = module.ci;
            _setter.DESCRIPTOR_SAMPLER_TYPE = module.bk;
            _setter.Downloader = module.cQ;
            _setter.EffectAsset = module.b2;
            _setter.EventAcceleration = module.bd;
            _setter.EventKeyboard = module.be;
            _setter.EventMouse = module.bb;
            _setter.EventTouch = module.bc;
            _setter.Font = module.b1;
            _setter.ForwardFlow = module.cJ;
            _setter.ForwardPipeline = module.cI;
            _setter.ForwardStage = module.cK;
            _setter.GFXAPI = module.cc;
            _setter.GFXAddress = module.bI;
            _setter.GFXAttributeName = module.G;
            _setter.GFXBindingMappingInfo = module.ce;
            _setter.GFXBlendFactor = module.bF;
            _setter.GFXBlendOp = module.bE;
            _setter.GFXBlendState = module.cn;
            _setter.GFXBlendTarget = module.cm;
            _setter.GFXBuffer = module.bo;
            _setter.GFXBufferAccessBit = module.by;
            _setter.GFXBufferFlagBit = module.bx;
            _setter.GFXBufferTextureCopy = module.c3;
            _setter.GFXBufferUsageBit = module.h;
            _setter.GFXClearFlag = module.b_;
            _setter.GFXColor = module.bZ;
            _setter.GFXColorAttachment = module.cr;
            _setter.GFXColorMask = module.bG;
            _setter.GFXCommandBuffer = module.bp;
            _setter.GFXCommandBufferType = module.bP;
            _setter.GFXComparisonFunc = module.bC;
            _setter.GFXCullMode = module.bB;
            _setter.GFXDepthStencilAttachment = module.cs;
            _setter.GFXDepthStencilState = module.cl;
            _setter.GFXDescriptorSet = module.bl;
            _setter.GFXDescriptorSetLayout = module.cj;
            _setter.GFXDescriptorType = module.bO;
            _setter.GFXDevice = module.cf;
            _setter.GFXDrawInfo = module.bm;
            _setter.GFXDynamicStateFlagBit = module.bU;
            _setter.GFXExtent = module.c0;
            _setter.GFXFeature = module.cd;
            _setter.GFXFilter = module.bH;
            _setter.GFXFormat = module.f;
            _setter.GFXFormatInfo = module.c5;
            _setter.GFXFormatInfos = module.c7;
            _setter.GFXFormatSize = module.c8;
            _setter.GFXFormatSurfaceSize = module.c9;
            _setter.GFXFormatType = module.c4;
            _setter.GFXFramebuffer = module.cg;
            _setter.GFXGetTypeSize = module.ca;
            _setter.GFXInputAssembler = module.ch;
            _setter.GFXInputState = module.co;
            _setter.GFXLoadOp = module.bQ;
            _setter.GFXMemoryStatus = module.c6;
            _setter.GFXMemoryUsageBit = module.i;
            _setter.GFXObject = module.bv;
            _setter.GFXObjectType = module.bu;
            _setter.GFXOffset = module.b$;
            _setter.GFXPipelineBindPoint = module.bT;
            _setter.GFXPipelineState = module.cp;
            _setter.GFXPolygonMode = module.bz;
            _setter.GFXPrimitiveMode = module.t;
            _setter.GFXQueue = module.cq;
            _setter.GFXQueueType = module.bW;
            _setter.GFXRasterizerState = module.ck;
            _setter.GFXRect = module.bX;
            _setter.GFXRenderPass = module.ct;
            _setter.GFXSampleCount = module.bL;
            _setter.GFXSampler = module.cv;
            _setter.GFXSamplerState = module.cu;
            _setter.GFXShadeModel = module.bA;
            _setter.GFXShader = module.cB;
            _setter.GFXShaderInfo = module.cA;
            _setter.GFXShaderStage = module.cw;
            _setter.GFXShaderStageFlagBit = module.bN;
            _setter.GFXStencilFace = module.bV;
            _setter.GFXStencilOp = module.bD;
            _setter.GFXStoreOp = module.bR;
            _setter.GFXTexture = module.cD;
            _setter.GFXTextureCopy = module.c2;
            _setter.GFXTextureFlagBit = module.bM;
            _setter.GFXTextureLayout = module.bS;
            _setter.GFXTextureSubres = module.c1;
            _setter.GFXTextureType = module.bJ;
            _setter.GFXTextureUsageBit = module.bK;
            _setter.GFXType = module.bw;
            _setter.GFXUniform = module.cx;
            _setter.GFXUniformBlock = module.cy;
            _setter.GFXUniformSampler = module.cz;
            _setter.GFXViewport = module.bY;
            _setter.GFX_DRAW_INFO_SIZE = module.bn;
            _setter.GFX_MAX_ATTACHMENTS = module.bs;
            _setter.GFX_MAX_BUFFER_BINDINGS = module.bt;
            _setter.GFX_MAX_TEXTURE_UNITS = module.br;
            _setter.GFX_MAX_VERTEX_ATTRIBUTES = module.bq;
            _setter.Game = module.bh;
            _setter.ImageAsset = module.aX;
            _setter.IsPowerOf2 = module.cC;
            _setter.JsonAsset = module.aV;
            _setter.LabelAtlas = module.a$;
            _setter.Layers = module.cY;
            _setter.Loader = module.cR;
            _setter.LoadingItems = module.cU;
            _setter.Material = module.b3;
            _setter.Mesh = module.at;
            _setter.MeshRenderer = module.as;
            _setter.MissingScript = module.d0;
            _setter.ModelComponent = module.as;
            _setter.Node = module.cW;
            _setter.NodeActivator = module.c$;
            _setter.Pipeline = module.cS;
            _setter.Prefab = module.aR;
            _setter.PrefabInfo = module.aH;
            _setter.PrivateNode = module.c_;
            _setter.RecyclePool = module.R;
            _setter.RenderFlow = module.cF;
            _setter.RenderPipeline = module.cE;
            _setter.RenderStage = module.cG;
            _setter.RenderTexture = module.b6;
            _setter.RenderView = module.cH;
            _setter.RenderableComponent = module.d3;
            _setter.RenderingSubMesh = module.b4;
            _setter.Scene = module.cX;
            _setter.SceneAsset = module.aS;
            _setter.ShadowFlow = module.cL;
            _setter.ShadowStage = module.cM;
            _setter.SkelAnimDataHub = module.d4;
            _setter.Skeleton = module.b5;
            _setter.SpriteAtlas = module.aT;
            _setter.SpriteFrame = module.b7;
            _setter.SystemEventType = module.bg;
            _setter.TTFFont = module.a_;
            _setter.TextAsset = module.aU;
            _setter.Texture2D = module.aY;
            _setter.TextureCube = module.aZ;
            _setter.Touch = module.bf;
            _setter.UIFlow = module.cN;
            _setter.UIStage = module.cO;
            _setter.WorldNode3DToLocalNodeUI = module.aJ;
            _setter.WorldNode3DToWorldNodeUI = module.aK;
            _setter._decorator = module.aM;
            _setter.builtinResMgr = module.d2;
            _setter.convertUtils = module.aL;
            _setter.deserialize = module.aN;
            _setter.effects = module.d1;
            _setter.eventManager = module.b9;
            _setter.find = module.cZ;
            _setter.fragmentText = module.aG;
            _setter.game = module.bi;
            _setter.getPathFromRoot = module.d5;
            _setter.getTypedArrayConstructor = module.cb;
            _setter.getWorldTransformUntilRoot = module.d6;
            _setter.instantiate = module.aO;
            _setter.isUnicodeCJK = module.aD;
            _setter.isUnicodeSpace = module.aE;
            _setter.loader = module.cT;
            _setter.macro = module.b8;
            _setter.murmurhash2_32_gc = module.aI;
            _setter.path = module.aB;
            _setter.safeMeasureText = module.aF;
            _setter.textureUtil = module.aQ;
            _setter.url = module.cP;
            exports(_setter);
        }, function (module) {
            BakedSkinningModel = module.B;
            SphereLight = module.S;
            UniformProxyFactory = module.U;
            MorphWeightsValueProxy = module.M;
            MorphWeightsAllValueProxy = module.a;
            CubicSplineVec2Value = module.C;
            CubicSplineVec3Value = module.b;
            CubicSplineVec4Value = module.c;
            CubicSplineQuatValue = module.d;
            CubicSplineNumberValue = module.e;
            var _setter = {};
            _setter.AnimCurve = module.z;
            _setter.Animation = module.v;
            _setter.AnimationClip = module.I;
            _setter.AnimationComponent = module.v;
            _setter.AnimationManager = module.J;
            _setter.AnimationState = module.A;
            _setter.BatchedSkinningModelComponent = module.i;
            _setter.Camera = module.f;
            _setter.CameraComponent = module.f;
            _setter.ComponentModifier = module.o;
            _setter.CubicSplineNumberValue = module.e;
            _setter.CubicSplineQuatValue = module.d;
            _setter.CubicSplineVec2Value = module.C;
            _setter.CubicSplineVec3Value = module.b;
            _setter.CubicSplineVec4Value = module.c;
            _setter.CurveValueAdapter = module.p;
            _setter.DirectionalLight = module.D;
            _setter.DirectionalLightComponent = module.D;
            _setter.EventInfo = module.E;
            _setter.HierachyModifier = module.H;
            _setter.Light = module.L;
            _setter.LightComponent = module.L;
            _setter.Profiler = module.P;
            _setter.RatioSampler = module.R;
            _setter.SkeletalAnimation = module.w;
            _setter.SkeletalAnimationComponent = module.w;
            _setter.SkeletalAnimationState = module.K;
            _setter.SkinnedMeshBatchRenderer = module.i;
            _setter.SkinnedMeshRenderer = module.h;
            _setter.SkinnedMeshUnit = module.j;
            _setter.SkinningModelComponent = module.h;
            _setter.SkinningModelUnit = module.j;
            _setter.Socket = module.N;
            _setter.SphereLight = module.k;
            _setter.SphereLightComponent = module.k;
            _setter.SpotLight = module.l;
            _setter.SpotLightComponent = module.l;
            _setter.UniformCurveValueAdapter = module.q;
            _setter.bezier = module.x;
            _setter.bezierByTime = module.y;
            _setter.computeRatioByType = module.G;
            _setter.easing = module.n;
            _setter.geometry = module.g;
            _setter.isCustomTargetModifier = module.t;
            _setter.isElementModifier = module.s;
            _setter.isPropertyModifier = module.r;
            _setter.math = module.m;
            _setter.profiler = module.O;
            _setter.sampleAnimationCurve = module.F;
            _setter.utils = module.u;
            exports(_setter);
        }, function (module) {
            var _setter = {};
            _setter.GFXFence = module.a;
            _setter.GFXPipelineLayout = module.G;
            exports(_setter);
        }, function (module) {
            exports('HtmlTextParser', module.H);
        }, function (module) {
            var _setter = {};
            _setter.ResolutionPolicy = module.R;
            _setter.SubContextView = module.S;
            _setter.SystemEvent = module.a;
            _setter.View = module.V;
            _setter.screen = module.s;
            _setter.systemEvent = module.b;
            _setter.view = module.v;
            exports(_setter);
        }, function (module) {
            var _setter = {};
            _setter.Director = module.D;
            _setter.EventHandler = module.E;
            _setter.RenderWindow = module.R;
            _setter.Scheduler = module.S;
            _setter.System = module.a;
            _setter.director = module.d;
            exports(_setter);
        }],
        execute: function () {

            /**
             * @hidden
             */

            var index = /*#__PURE__*/Object.freeze({
                __proto__: null,
                Pool: Pool,
                RecyclePool: RecyclePool,
                CachedArray: CachedArray
            });
            exports('memop', index);

            /**
             * @hidden
             */
            // import Url from './load-pipeline/url';
            // cc.Pipeline = Pipeline;
            // cc.url = Url;
            // cc.AssetLibrary = AssetLibrary;
            // CCDebug.js

            legacyCC.log = log;
            legacyCC.warn = warn;
            legacyCC.error = error;
            legacyCC.assert = assert;
            legacyCC._throw = _throw;
            legacyCC.logID = logID;
            legacyCC.warnID = warnID;
            legacyCC.errorID = errorID;
            legacyCC.assertID = assertID;
            legacyCC.debug = debug; // path.js

            legacyCC.path = {
              join: join,
              extname: extname,
              mainFileName: mainFileName,
              basename: basename,
              dirname: dirname,
              changeExtname: changeExtname,
              changeBasename: changeBasename,
              _normalize: _normalize,
              stripSep: stripSep,

              get sep() {
                return getSeperator();
              }

            };

            /**
             * @hidden
             */
            function createIA(device, data) {
              if (!data.positions) {
                console.error('The data must have positions field');
                return null;
              }

              var verts = [];
              var vcount = data.positions.length / 3;

              for (var i = 0; i < vcount; ++i) {
                verts.push(data.positions[3 * i], data.positions[3 * i + 1], data.positions[3 * i + 2]);

                if (data.normals) {
                  verts.push(data.normals[3 * i], data.normals[3 * i + 1], data.normals[3 * i + 2]);
                }

                if (data.uvs) {
                  verts.push(data.uvs[2 * i], data.uvs[2 * i + 1]);
                }

                if (data.colors) {
                  verts.push(data.colors[3 * i], data.uvs[3 * i + 1], data.colors[3 * i + 2]);
                }
              }

              var vfmt = [];
              vfmt.push({
                name: GFXAttributeName.ATTR_POSITION,
                format: GFXFormat.RGB32F
              });

              if (data.normals) {
                vfmt.push({
                  name: GFXAttributeName.ATTR_NORMAL,
                  format: GFXFormat.RGB32F
                });
              }

              if (data.uvs) {
                vfmt.push({
                  name: GFXAttributeName.ATTR_TEX_COORD,
                  format: GFXFormat.RG32F
                });
              }

              if (data.colors) {
                vfmt.push({
                  name: GFXAttributeName.ATTR_COLOR,
                  format: GFXFormat.RGB32F
                });
              }

              var vb = device.createBuffer({
                usage: GFXBufferUsageBit.VERTEX | GFXBufferUsageBit.TRANSFER_DST,
                memUsage: GFXMemoryUsageBit.HOST | GFXMemoryUsageBit.DEVICE,
                size: verts.length * 4,
                stride: verts.length * 4 / vcount
              });
              vb.update(new Float32Array(verts));
              var ib = device.createBuffer({
                usage: GFXBufferUsageBit.INDEX | GFXBufferUsageBit.TRANSFER_DST,
                memUsage: GFXMemoryUsageBit.HOST | GFXMemoryUsageBit.DEVICE,
                size: data.indices.length * 2,
                stride: 2
              });
              ib.update(new Uint16Array(data.indices));
              return device.createInputAssembler({
                attributes: vfmt,
                vertexBuffers: [vb],
                indexBuffer: ib
              });
            }

            /**
             * @hidden
             */
            var _stageOffset = 0;
            var _name2stageID = {};
            var config = {
              addStage: function addStage(name) {
                // already added
                if (_name2stageID[name] !== undefined) {
                  return;
                }

                var stageID = 1 << _stageOffset;
                _name2stageID[name] = stageID;
                _stageOffset += 1;
              },
              stageID: function stageID(name) {
                var id = _name2stageID[name];

                if (id === undefined) {
                  return -1;
                }

                return id;
              },
              stageIDs: function stageIDs(nameList) {
                var key = 0;

                for (var _iterator = _createForOfIteratorHelperLoose(nameList), _step; !(_step = _iterator()).done;) {
                  var name = _step.value;
                  var id = _name2stageID[name];

                  if (id !== undefined) {
                    key |= id;
                  }
                }

                return key;
              }
            };

            var index$1 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                uploadJointData: uploadJointData,
                MINIMUM_JOINT_TEXTURE_SIZE: MINIMUM_JOINT_TEXTURE_SIZE,
                selectJointsMediumFormat: selectJointsMediumFormat,
                jointTextureSamplerHash: jointTextureSamplerHash,
                JointTexturePool: JointTexturePool,
                JointAnimationInfo: JointAnimationInfo,
                getWorldMatrix: getWorldMatrix,
                getTransform: getTransform,
                deleteTransform: deleteTransform,
                SkinningModel: SkinningModel,
                BakedSkinningModel: BakedSkinningModel,
                MorphModel: MorphModel
            });

            /**
             * 几何图形模块
             * @category 3d/primitive
             */

            /**
             * @deprecated
             */
            function wireframe(indices) {
              var offsets = [[0, 1], [1, 2], [2, 0]];
              var lines = [];
              var lineIDs = {};

              for (var i = 0; i < indices.length; i += 3) {
                for (var k = 0; k < 3; ++k) {
                  var i1 = indices[i + offsets[k][0]];
                  var i2 = indices[i + offsets[k][1]]; // check if we already have the line in our lines

                  var id = i1 > i2 ? i2 << 16 | i1 : i1 << 16 | i2;

                  if (lineIDs[id] === undefined) {
                    lineIDs[id] = 0;
                    lines.push(i1, i2);
                  }
                }
              }

              return lines;
            }
            /**
             * @deprecated
             */

            function invWinding(indices) {
              var newIB = [];

              for (var i = 0; i < indices.length; i += 3) {
                newIB.push(indices[i], indices[i + 2], indices[i + 1]);
              }

              return newIB;
            }
            /**
             * @deprecated
             */

            function toWavefrontOBJ(primitive) {
              var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

              if (!primitive.indices || !primitive.uvs || !primitive.normals || primitive.primitiveMode !== undefined && primitive.primitiveMode !== GFXPrimitiveMode.TRIANGLE_LIST) {
                return '';
              }

              var v = primitive.positions;
              var t = primitive.uvs;
              var n = primitive.normals;
              var IB = primitive.indices;

              var V = function V(i) {
                return "".concat(IB[i] + 1, "/").concat(IB[i] + 1, "/").concat(IB[i] + 1);
              };

              var content = '';

              for (var i = 0; i < v.length; i += 3) {
                content += "v ".concat(v[i] * scale, " ").concat(v[i + 1] * scale, " ").concat(v[i + 2] * scale, "\n");
              }

              for (var _i = 0; _i < t.length; _i += 2) {
                content += "vt ".concat(t[_i], " ").concat(t[_i + 1], "\n");
              }

              for (var _i2 = 0; _i2 < n.length; _i2 += 3) {
                content += "vn ".concat(n[_i2], " ").concat(n[_i2 + 1], " ").concat(n[_i2 + 2], "\n");
              }

              for (var _i3 = 0; _i3 < IB.length; _i3 += 3) {
                content += "f ".concat(V(_i3), " ").concat(V(_i3 + 1), " ").concat(V(_i3 + 2), "\n");
              }

              return content;
            }
            /**
             * @deprecated
             */

            function normals(positions, nms) {
              var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
              var verts = new Array(2 * positions.length);

              for (var i = 0; i < positions.length / 3; ++i) {
                var i3 = 3 * i;
                var i6 = 6 * i; // line start

                verts[i6 + 0] = positions[i3 + 0];
                verts[i6 + 1] = positions[i3 + 1];
                verts[i6 + 2] = positions[i3 + 2]; // line end

                verts[i6 + 3] = positions[i3 + 0] + nms[i3 + 0] * length;
                verts[i6 + 4] = positions[i3 + 1] + nms[i3 + 1] * length;
                verts[i6 + 5] = positions[i3 + 2] + nms[i3 + 2] * length;
              }

              return verts;
            }

            /**
             * @category 3d/primitive
             */

            /**
             * @en
             * Generate a cone with radius 0.5, height 1, centered at origin,
             * but may be repositioned through the `center` option.
             * @zh
             * 生成一个圆锥。
             * @param radius 圆锥半径。
             * @param height 圆锥高度。
             * @param opts 圆锥参数选项。
             */
            function cone()
            /* TODO: Explicit since ISSUE https://github.com/microsoft/TypeScript/issues/31280 , changes required once the issue is fixed. */
            {
              var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
              var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
              var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
              return cylinder(0, radius, height, opts);
            }

            /**
             * @category 3d/primitive
             */
            /**
             * @en
             * Generate a quad with width and height both to 1, centered at origin.
             * @zh
             * 生成一个四边形，宽高都为1，中心在原点。
             * @param options 参数选项。
             */

            function quad(options) {
              var normalizedOptions = applyDefaultGeometryOptions(options);
              var result = {
                positions: [-0.5, -0.5, 0, // bottom-left
                -0.5, 0.5, 0, // top-left
                0.5, 0.5, 0, // top-right
                0.5, -0.5, 0 // bottom-right
                ],
                indices: [0, 3, 1, 3, 2, 1],
                minPos: {
                  x: -0.5,
                  y: -0.5,
                  z: 0
                },
                maxPos: {
                  x: 0.5,
                  y: 0.5,
                  z: 0
                },
                boundingRadius: Math.sqrt(0.5 * 0.5 + 0.5 * 0.5)
              };

              if (normalizedOptions.includeNormal !== false) {
                result.normals = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1];
              }

              if (normalizedOptions.includeUV !== false) {
                result.uvs = [0, 0, 0, 1, 1, 1, 1, 0];
              }

              return result;
            }

            /**
             * @category 3d/primitive
             */

            /**
             * @en
             * Generate a shpere with radius 0.5.
             * @zh
             * 生成一个球。
             * @param radius 球半径。
             * @param options 参数选项。
             */
            function sphere() {
              var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
              var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              var segments = opts.segments !== undefined ? opts.segments : 32; // lat === latitude
              // lon === longitude

              var positions = [];
              var normals = [];
              var uvs = [];
              var indices = [];
              var minPos = new Vec3(-radius, -radius, -radius);
              var maxPos = new Vec3(radius, radius, radius);
              var boundingRadius = radius;

              for (var lat = 0; lat <= segments; ++lat) {
                var theta = lat * Math.PI / segments;
                var sinTheta = Math.sin(theta);
                var cosTheta = -Math.cos(theta);

                for (var lon = 0; lon <= segments; ++lon) {
                  var phi = lon * 2 * Math.PI / segments - Math.PI / 2.0;
                  var sinPhi = Math.sin(phi);
                  var cosPhi = Math.cos(phi);
                  var x = sinPhi * sinTheta;
                  var y = cosTheta;
                  var z = cosPhi * sinTheta;
                  var u = lon / segments;
                  var v = lat / segments;
                  positions.push(x * radius, y * radius, z * radius);
                  normals.push(x, y, z);
                  uvs.push(u, v);

                  if (lat < segments && lon < segments) {
                    var seg1 = segments + 1;
                    var a = seg1 * lat + lon;
                    var b = seg1 * (lat + 1) + lon;
                    var c = seg1 * (lat + 1) + lon + 1;
                    var d = seg1 * lat + lon + 1;
                    indices.push(a, d, b);
                    indices.push(d, c, b);
                  }
                }
              }

              return {
                positions: positions,
                indices: indices,
                normals: normals,
                uvs: uvs,
                minPos: minPos,
                maxPos: maxPos,
                boundingRadius: boundingRadius
              };
            }

            /**
             * @category 3d/primitive
             */

            /**
             * @en
             * Generate a torus with raidus 0.4, tube 0.1 and centered at origin.
             * @zh
             * 生成一个环面。
             * @param radius 环面半径。
             * @param tube 管形大小。
             * @param opts 参数选项。
             */
            function torus() {
              var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.4;
              var tube = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
              var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
              var radialSegments = opts.radialSegments || 32;
              var tubularSegments = opts.tubularSegments || 32;
              var arc = opts.arc || 2.0 * Math.PI;
              var positions = [];
              var normals = [];
              var uvs = [];
              var indices = [];
              var minPos = new Vec3(-radius - tube, -tube, -radius - tube);
              var maxPos = new Vec3(radius + tube, tube, radius + tube);
              var boundingRadius = radius + tube;

              for (var j = 0; j <= radialSegments; j++) {
                for (var i = 0; i <= tubularSegments; i++) {
                  var u = i / tubularSegments;
                  var v = j / radialSegments;
                  var u1 = u * arc;
                  var v1 = v * Math.PI * 2; // vertex

                  var x = (radius + tube * Math.cos(v1)) * Math.sin(u1);
                  var y = tube * Math.sin(v1);
                  var z = (radius + tube * Math.cos(v1)) * Math.cos(u1); // this vector is used to calculate the normal

                  var nx = Math.sin(u1) * Math.cos(v1);
                  var ny = Math.sin(v1);
                  var nz = Math.cos(u1) * Math.cos(v1);
                  positions.push(x, y, z);
                  normals.push(nx, ny, nz);
                  uvs.push(u, v);

                  if (i < tubularSegments && j < radialSegments) {
                    var seg1 = tubularSegments + 1;
                    var a = seg1 * j + i;
                    var b = seg1 * (j + 1) + i;
                    var c = seg1 * (j + 1) + i + 1;
                    var d = seg1 * j + i + 1;
                    indices.push(a, d, b);
                    indices.push(d, c, b);
                  }
                }
              }

              return {
                positions: positions,
                normals: normals,
                uvs: uvs,
                indices: indices,
                minPos: minPos,
                maxPos: maxPos,
                boundingRadius: boundingRadius
              };
            }

            /**
             * @category 3d/primitive
             */
            /**
             * @en
             * The definition of the parameter for building a circle.
             * @zh
             * 圆形参数选项。
             */

            /**
             * @zh
             * 应用默认圆参数。
             * @param options 圆参数。
             */
            function applyDefaultCircleOptions(options) {
              options = applyDefaultGeometryOptions(options);
              options.segments = 64;
              return options;
            }
            /**
             * @en
             * Generate a circle with radius 1, centered at origin,
             * but may be repositioned through the `center` option.
             * @zh
             * 生成一个圆，其半径是单位1，中心点在原点。
             * @param options 参数选项。
             */


            function circle(options) {
              var normalizedOptions = applyDefaultCircleOptions(options);
              var segments = normalizedOptions.segments;
              var positions = new Array(3 * (segments + 1));
              positions[0] = 0;
              positions[1] = 0;
              positions[2] = 0;
              var indices = new Array(1 + segments * 2);
              indices[0] = 0;
              var step = Math.PI * 2 / segments;

              for (var iSegment = 0; iSegment < segments; ++iSegment) {
                var angle = step * iSegment;
                var x = Math.cos(angle);
                var y = Math.sin(angle);
                var p = (iSegment + 1) * 3;
                positions[p + 0] = x;
                positions[p + 1] = y;
                positions[p + 2] = 0;
                var i = iSegment * 2;
                indices[1 + i] = iSegment + 1;
                indices[1 + (i + 1)] = iSegment + 2;
              }

              if (segments > 0) {
                indices[indices.length - 1] = 1;
              }

              var result = {
                positions: positions,
                indices: indices,
                minPos: {
                  x: 1,
                  y: 1,
                  z: 0
                },
                maxPos: {
                  x: -1,
                  y: -1,
                  z: 0
                },
                boundingRadius: 1,
                primitiveMode: GFXPrimitiveMode.TRIANGLE_FAN
              };
              return result;
            }

            /**
             * @category 3d/primitive
             */

            /**
             * @en
             * Translate the geometry.
             * @zh
             * 平移几何体。
             * @param geometry 几何体信息。
             * @param offset 偏移量。
             */
            function translate(geometry, offset) {
              var x = offset.x || 0;
              var y = offset.y || 0;
              var z = offset.z || 0;
              var nVertex = Math.floor(geometry.positions.length / 3);

              for (var iVertex = 0; iVertex < nVertex; ++iVertex) {
                var iX = iVertex * 3;
                var iY = iVertex * 3 + 1;
                var iZ = iVertex * 3 + 2;
                geometry.positions[iX] = geometry.positions[iX] + x;
                geometry.positions[iY] = geometry.positions[iY] + y;
                geometry.positions[iZ] = geometry.positions[iZ] + z;
              }

              if (geometry.minPos) {
                geometry.minPos.x += x;
                geometry.minPos.y += y;
                geometry.minPos.z += z;
              }

              if (geometry.maxPos) {
                geometry.maxPos.x += x;
                geometry.maxPos.y += y;
                geometry.maxPos.z += z;
              }

              return geometry;
            }
            /**
             * @en
             * Scale the geometry.
             * @zh
             * 缩放几何体。
             * @param geometry 几何体信息。
             * @param value 缩放量。
             */

            function scale(geometry, value) {
              var x = value.x || 0;
              var y = value.y || 0;
              var z = value.z || 0;
              var nVertex = Math.floor(geometry.positions.length / 3);

              for (var iVertex = 0; iVertex < nVertex; ++iVertex) {
                var iX = iVertex * 3;
                var iY = iVertex * 3 + 1;
                var iZ = iVertex * 3 + 2;
                geometry.positions[iX] *= x;
                geometry.positions[iY] *= y;
                geometry.positions[iZ] *= z;
              }

              if (geometry.minPos) {
                geometry.minPos.x *= x;
                geometry.minPos.y *= y;
                geometry.minPos.z *= z;
              }

              if (geometry.maxPos) {
                geometry.maxPos.x *= x;
                geometry.maxPos.y *= y;
                geometry.maxPos.z *= z;
              }

              geometry.boundingRadius = Math.max(Math.max(x, y), z);
              return geometry;
            }
            /**
             * @en
             * Converts geometry to wireframe mode. Only geometry with triangle topology is supported.
             * @zh
             * 将几何体转换为线框模式，仅支持三角形拓扑的几何体。
             * @param geometry 几何体信息。
             */

            function wireframed(geometry) {
              var indices = geometry.indices;

              if (!indices) {
                return geometry;
              } // We only support triangles' wireframe.


              if (geometry.primitiveMode && geometry.primitiveMode !== GFXPrimitiveMode.TRIANGLE_LIST) {
                return geometry;
              }

              var offsets = [[0, 1], [1, 2], [2, 0]];
              var lines = [];
              var lineIDs = {};

              for (var i = 0; i < indices.length; i += 3) {
                for (var k = 0; k < 3; ++k) {
                  var i1 = indices[i + offsets[k][0]];
                  var i2 = indices[i + offsets[k][1]]; // check if we already have the line in our lines

                  var id = i1 > i2 ? i2 << 16 | i1 : i1 << 16 | i2;

                  if (lineIDs[id] === undefined) {
                    lineIDs[id] = 0;
                    lines.push(i1, i2);
                  }
                }
              }

              geometry.indices = lines;
              geometry.primitiveMode = GFXPrimitiveMode.LINE_LIST;
              return geometry;
            }

            /**
             * @category 3d/primitive
             */

            var primitives = /*#__PURE__*/Object.freeze({
                __proto__: null,
                box: box,
                cone: cone,
                cylinder: cylinder,
                plane: plane,
                quad: quad,
                sphere: sphere,
                torus: torus,
                capsule: capsule,
                circle: circle,
                translate: translate,
                scale: scale,
                wireframed: wireframed,
                wireframe: wireframe,
                invWinding: invWinding,
                toWavefrontOBJ: toWavefrontOBJ,
                normals: normals,
                applyDefaultGeometryOptions: applyDefaultGeometryOptions
            });
            exports('primitives', primitives);

            var index$2 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                Ambient: Ambient,
                get CameraFOVAxis () { return CameraFOVAxis; },
                get CameraProjection () { return CameraProjection; },
                get CameraAperture () { return CameraAperture; },
                get CameraISO () { return CameraISO; },
                get CameraShutter () { return CameraShutter; },
                SKYBOX_FLAG: SKYBOX_FLAG,
                Camera: Camera,
                CameraVisFlags: CameraVisFlags,
                VisibilityFlags: VisibilityFlags,
                DirectionalLight: DirectionalLight,
                ColorTemperatureToRGB: ColorTemperatureToRGB,
                get LightType () { return LightType; },
                nt2lm: nt2lm,
                Light: Light,
                get ModelType () { return ModelType; },
                Model: Model,
                ShadowType: ShadowType,
                PCFType: PCFType,
                Shadows: Shadows,
                RenderScene: RenderScene,
                Skybox: Skybox,
                SphereLight: SphereLight,
                SpotLight: SpotLight,
                SubModel: SubModel
            });

            var addStage = config.addStage;

            var renderer = /*#__PURE__*/Object.freeze({
                __proto__: null,
                addStage: addStage,
                scene: index$2,
                models: index$1,
                createIA: createIA,
                get RenderQueue () { return RenderQueue; },
                get PassStage () { return PassStage; },
                get PropertyType () { return PropertyType; },
                genHandle: genHandle,
                getPropertyTypeFromHandle: getPropertyTypeFromHandle,
                getTypeFromHandle: getTypeFromHandle,
                getSetIndexFromHandle: getSetIndexFromHandle,
                getBindingFromHandle: getBindingFromHandle,
                getOffsetFromHandle: getOffsetFromHandle,
                customizeType: customizeType,
                type2reader: type2reader,
                type2writer: type2writer,
                getDefaultFromType: getDefaultFromType,
                overrideMacros: overrideMacros,
                get BatchingSchemes () { return BatchingSchemes; },
                Pass: Pass,
                programLib: programLib,
                get SamplerInfoIndex () { return SamplerInfoIndex; },
                defaultSamplerHash: defaultSamplerHash,
                genSamplerHash: genSamplerHash,
                samplerLib: samplerLib,
                nearestPOT: nearestPOT,
                TextureBufferPool: TextureBufferPool,
                MaterialInstance: MaterialInstance,
                PassInstance: PassInstance
            });
            exports('renderer', renderer);

            function checkMaterialisSame(comp1, comp2) {
              var matNum = comp1.sharedMaterials.length;

              if (matNum !== comp2.sharedMaterials.length) {
                return false;
              }

              for (var i = 0; i < matNum; i++) {
                if (comp1.getRenderMaterial(i) !== comp2.getRenderMaterial(i)) {
                  return false;
                }
              }

              return true;
            }
            /**
             * @en Utility for 3d model static batching
             * @zh 服务于 3D 模型静态合批的工具类
             */


            var BatchingUtility = exports('BatchingUtility', /*#__PURE__*/function () {
              function BatchingUtility() {
                _classCallCheck(this, BatchingUtility);
              }

              _createClass(BatchingUtility, null, [{
                key: "batchStaticModel",

                /**
                 * Collect the Models under `staticModelRoot`,
                 * merge all the meshes statically into one (while disabling each component),
                 * and attach it to a new Model on `batchedRoot`.
                 * The world transform of each model is guaranteed to be preserved.
                 *
                 * For a more fine-grained control over the process, use `Mesh.merge` directly.
                 * @param staticModelRoot root of all the static models to be batched
                 * @param batchedRoot the target output node
                 */
                value: function batchStaticModel(staticModelRoot, batchedRoot) {
                  var models = staticModelRoot.getComponentsInChildren(MeshRenderer);

                  if (models.length < 2) {
                    console.error('the number of static models to batch is less than 2,it needn\'t batch.');
                    return false;
                  }

                  for (var i = 1; i < models.length; i++) {
                    if (!models[0].mesh.validateMergingMesh(models[i].mesh)) {
                      console.error('the meshes of ' + models[0].node.name + ' and ' + models[i].node.name + ' can\'t be merged');
                      return false;
                    }

                    if (!checkMaterialisSame(models[0], models[i])) {
                      console.error('the materials of ' + models[0].node.name + ' and ' + models[i].node.name + ' can\'t be merged');
                      return false;
                    }
                  }

                  var batchedMesh = new Mesh();
                  var worldMat = new Mat4();
                  var rootWorldMatInv = new Mat4();
                  staticModelRoot.getWorldMatrix(rootWorldMatInv);
                  Mat4.invert(rootWorldMatInv, rootWorldMatInv);

                  for (var _i = 0; _i < models.length; _i++) {
                    var comp = models[_i];
                    comp.node.getWorldMatrix(worldMat);
                    Mat4.multiply(worldMat, rootWorldMatInv, worldMat);
                    batchedMesh.merge(models[_i].mesh, worldMat);
                    comp.enabled = false;
                  }

                  var batchedModel = batchedRoot.addComponent(MeshRenderer);
                  batchedModel.mesh = batchedMesh;
                  batchedModel.sharedMaterials = models[0].sharedMaterials;
                  return true;
                }
                /**
                 * Undoes everything `batchStaticModel` did.
                 *
                 * @param staticModelRoot root of all the static models to be batched
                 * @param batchedRoot the target output node
                 */

              }, {
                key: "unbatchStaticModel",
                value: function unbatchStaticModel(staticModelRoot, batchedRoot) {
                  var models = staticModelRoot.getComponentsInChildren(MeshRenderer);

                  for (var i = 0; i < models.length; i++) {
                    var comp = models[i];
                    comp.enabled = true;
                  }

                  var batchedModel = batchedRoot.getComponent(MeshRenderer);

                  if (batchedModel) {
                    batchedModel.destroy();
                  }

                  return true;
                }
              }]);

              return BatchingUtility;
            }());

            /**
             * @category pipeline
             */
            var pipeline = exports('pipeline', pipelineDefine);

            /**
             * @hidden
             */

            var animation = /*#__PURE__*/Object.freeze({
                __proto__: null,
                UniformProxyFactory: UniformProxyFactory,
                MorphWeightsValueProxy: MorphWeightsValueProxy,
                MorphWeightsAllValueProxy: MorphWeightsAllValueProxy,
                isPropertyPath: isPropertyPath,
                isCustomPath: isCustomPath,
                HierarchyPath: HierarchyPath,
                ComponentPath: ComponentPath,
                evaluatePath: evaluatePath,
                CubicSplineVec2Value: CubicSplineVec2Value,
                CubicSplineVec3Value: CubicSplineVec3Value,
                CubicSplineVec4Value: CubicSplineVec4Value,
                CubicSplineQuatValue: CubicSplineQuatValue,
                CubicSplineNumberValue: CubicSplineNumberValue
            });
            exports('animation', animation);

            /****************************************************************************
             Copyright (c) 2016 Chukong Technologies Inc.
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
             ****************************************************************************/

            /**
             * @en
             *  `NodePool` is the cache pool designed for node type.<br/>
             *  It can helps you to improve your game performance for objects which need frequent release and recreate operations<br/>
             *
             * It's recommended to create `NodePool` instances by node type, the type corresponds to node type in game design, not the class,
             * for example, a prefab is a specific node type. <br/>
             * When you create a node pool, you can pass a Component which contains `unuse`, `reuse` functions to control the content of node.<br/>
             *
             * Some common use case is :<br/>
             *      1. Bullets in game (die very soon, massive creation and recreation, no side effect on other objects)<br/>
             *      2. Blocks in candy crash (massive creation and recreation)<br/>
             *      etc...
             * @zh
             * `NodePool` 是用于管理节点对象的对象缓存池。<br/>
             * 它可以帮助您提高游戏性能，适用于优化对象的反复创建和销毁<br/>
             * 以前 cocos2d-x 中的 pool 和新的节点事件注册系统不兼容，因此请使用 `NodePool` 来代替。
             *
             * 新的 NodePool 需要实例化之后才能使用，每种不同的节点对象池需要一个不同的对象池实例，这里的种类对应于游戏中的节点设计，一个 prefab 相当于一个种类的节点。<br/>
             * 在创建缓冲池时，可以传入一个包含 unuse, reuse 函数的组件类型用于节点的回收和复用逻辑。<br/>
             *
             * 一些常见的用例是：<br/>
             *      1.在游戏中的子弹（死亡很快，频繁创建，对其他对象无副作用）<br/>
             *      2.糖果粉碎传奇中的木块（频繁创建）。
             *      等等....
             */
            var NodePool = exports('NodePool', /*#__PURE__*/function () {
              /**
               * @en The pool handler component, it could be the class name or the constructor.
               * @zh 缓冲池处理组件，用于节点的回收和复用逻辑，这个属性可以是组件类名或组件的构造函数。
               */

              /**
               * @en
               * Constructor for creating a pool for a specific node template (usually a prefab).
               * You can pass a component (type or name) argument for handling event for reusing and recycling node.
               * @zh
               * 使用构造函数来创建一个节点专用的对象池，您可以传递一个组件类型或名称，用于处理节点回收和复用时的事件逻辑。
               * @param poolHandlerComp @en The constructor or the class name of the component to control the unuse/reuse logic. @zh 处理节点回收和复用事件逻辑的组件类型或名称。
               * @example
               * import { NodePool, Prefab } from 'cc';
               *  properties: {
               *      template: Prefab
               *     },
               *     onLoad () {
               *       // MyTemplateHandler is a component with 'unuse' and 'reuse' to handle events when node is reused or recycled.
               *       this.myPool = new NodePool('MyTemplateHandler');
               *     }
               *  }
               */
              function NodePool(poolHandlerComp) {
                _classCallCheck(this, NodePool);

                this.poolHandlerComp = void 0;
                this._pool = void 0;
                this.poolHandlerComp = poolHandlerComp;
                this._pool = [];
              }
              /**
               * @en The current available size in the pool
               * @zh 获取当前缓冲池的可用对象数量
               */


              _createClass(NodePool, [{
                key: "size",
                value: function size() {
                  return this._pool.length;
                }
                /**
                 * @en Destroy all cached nodes in the pool
                 * @zh 销毁对象池中缓存的所有节点
                 */

              }, {
                key: "clear",
                value: function clear() {
                  var count = this._pool.length;

                  for (var i = 0; i < count; ++i) {
                    this._pool[i].destroy();
                  }

                  this._pool.length = 0;
                }
                /**
                 * @en Put a new Node into the pool.
                 * It will automatically remove the node from its parent without cleanup.
                 * It will also invoke unuse method of the poolHandlerComp if exist.
                 * @zh 向缓冲池中存入一个不再需要的节点对象。
                 * 这个函数会自动将目标节点从父节点上移除，但是不会进行 cleanup 操作。
                 * 这个函数会调用 poolHandlerComp 的 unuse 函数，如果组件和函数都存在的话。
                 * @example
                 * import { instantiate } from 'cc';
                 * const myNode = instantiate(this.template);
                 * this.myPool.put(myNode);
                 */

              }, {
                key: "put",
                value: function put(obj) {
                  if (obj && this._pool.indexOf(obj) === -1) {
                    // Remove from parent, but don't cleanup
                    obj.removeFromParent(); // Invoke pool handler
                    // @ts-ignore

                    var handler = this.poolHandlerComp ? obj.getComponent(this.poolHandlerComp) : null;

                    if (handler && handler.unuse) {
                      handler.unuse();
                    }

                    this._pool.push(obj);
                  }
                }
                /**
                 * @en Get a obj from pool, if no available object in pool, null will be returned.
                 * This function will invoke the reuse function of poolHandlerComp if exist.
                 * @zh 获取对象池中的对象，如果对象池没有可用对象，则返回空。
                 * 这个函数会调用 poolHandlerComp 的 reuse 函数，如果组件和函数都存在的话。
                 * @param args - 向 poolHandlerComp 中的 'reuse' 函数传递的参数
                 * @example
                 *   let newNode = this.myPool.get();
                 */

              }, {
                key: "get",
                value: function get() {
                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  var last = this._pool.length - 1;

                  if (last < 0) {
                    return null;
                  } else {
                    // Pop the last object in pool
                    var obj = this._pool[last];
                    this._pool.length = last; // Invoke pool handler
                    // @ts-ignore

                    var handler = this.poolHandlerComp ? obj.getComponent(this.poolHandlerComp) : null;

                    if (handler && handler.reuse) {
                      handler.reuse(arguments);
                    }

                    return obj;
                  }
                }
              }]);

              return NodePool;
            }());
            legacyCC.NodePool = NodePool;

            var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _class3, _temp;
            var PrimitiveType;

            (function (PrimitiveType) {
              PrimitiveType[PrimitiveType["BOX"] = 0] = "BOX";
              PrimitiveType[PrimitiveType["SPHERE"] = 1] = "SPHERE";
              PrimitiveType[PrimitiveType["CYLINDER"] = 2] = "CYLINDER";
              PrimitiveType[PrimitiveType["CONE"] = 3] = "CONE";
              PrimitiveType[PrimitiveType["CAPSULE"] = 4] = "CAPSULE";
              PrimitiveType[PrimitiveType["TORUS"] = 5] = "TORUS";
              PrimitiveType[PrimitiveType["PLANE"] = 6] = "PLANE";
              PrimitiveType[PrimitiveType["QUAD"] = 7] = "QUAD";
            })(PrimitiveType || (PrimitiveType = {}));

            ccenum(PrimitiveType);
            /**
             * @en
             * Basic primitive mesh, this can be generate some primitive mesh at runtime.
             * @zh
             * 基础图形网格，可以在运行时构建一些基础的网格。
             */

            var Primitive = exports('Primitive', (_dec = ccclass('cc.Primitive'), _dec2 = type(PrimitiveType), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Mesh) {
              _inherits(Primitive, _Mesh);

              /**
               * @en
               * The type of the primitive mesh, set it before you call onLoaded.
               * @zh
               * 此基础图形网格的类型，请在 onLoaded 调用之前设置。
               */

              /**
               * @en
               * The option for build the primitive mesh, set it before you call onLoaded.
               * @zh
               * 创建此基础图形网格的可选参数，请在 onLoaded 调用之前设置。
               */
              function Primitive() {
                var _this;

                var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PrimitiveType.BOX;

                _classCallCheck(this, Primitive);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(Primitive).call(this));

                _initializerDefineProperty(_this, "type", _descriptor, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "info", _descriptor2, _assertThisInitialized(_this));

                _this.type = type;
                return _this;
              }
              /**
               * @en
               * Construct the primitive mesh with `type` and `info`.
               * @zh
               * 根据`type`和`info`构建相应的网格。
               */


              _createClass(Primitive, [{
                key: "onLoaded",
                value: function onLoaded() {
                  createMesh(primitives[PrimitiveType[this.type].toLowerCase()](this.info), this);
                }
              }]);

              return Primitive;
            }(Mesh), _class3.PrimitiveType = PrimitiveType, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return PrimitiveType.BOX;
              }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "info", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return {};
              }
            })), _class2)) || _class));
            legacyCC.Primitive = Primitive;

            /**
             * @hidden
             */
            legacyCC.renderer = renderer;
            legacyCC.primitives = primitives;

        }
    };
});
