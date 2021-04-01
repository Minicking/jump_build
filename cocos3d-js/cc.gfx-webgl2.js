System.register(['./deprecated-4ec15e5e.js', './deprecated-b99c04b5.js', './fence-5435bcd1.js', './SubContextView-a8900bae.js', './webgl-define-06187b8f.js'], function (exports) {
    'use strict';
    var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, errorID, _typeof, error, _createForOfIteratorHelperLoose, warnID, warn, legacyCC, DESCRIPTOR_BUFFER_TYPE, DESCRIPTOR_SAMPLER_TYPE, GFXDescriptorSet, GFXFormat, GFXTextureFlagBit, GFXFormatInfos, GFXFilter, GFXDrawInfo, GFXMemoryUsageBit, GFXBufferUsageBit, GFXTextureType, GFXFormatSize, GFXSampleCount, GFXLoadOp, GFXColorMask, GFXCullMode, GFXDynamicStateFlagBit, GFXStencilFace, GFXType, CachedArray, GFXShaderStageFlagBit, GFXBufferFlagBit, GFXBuffer, GFXCommandBufferType, GFXCommandBuffer, GFXFramebuffer, GFXInputAssembler, DESCRIPTOR_DYNAMIC_TYPE, GFXDescriptorSetLayout, GFXPipelineState, GFXQueue, GFXRenderPass, GFXSampler, GFXShader, GFX_MAX_BUFFER_BINDINGS, GFX_MAX_TEXTURE_UNITS, GFXRasterizerState, GFXDepthStencilState, GFXBlendState, GFX_MAX_VERTEX_ATTRIBUTES, IsPowerOf2, GFXFormatSurfaceSize, GFXTexture, GFXBindingMappingInfo, macro, GFXAPI, GFXFeature, GFXQueueType, GFXTextureUsageBit, getTypedArrayConstructor, GFXDevice, GFXFence, GFXPipelineLayout, WebGLEXT;
    return {
        setters: [function (module) {
            _inherits = module.b;
            _classCallCheck = module.d;
            _possibleConstructorReturn = module.e;
            _getPrototypeOf = module.f;
            _createClass = module.j;
            errorID = module.y;
            _typeof = module.aY;
            error = module.p;
            _createForOfIteratorHelperLoose = module.D;
            warnID = module.x;
            warn = module.w;
            legacyCC = module.l;
        }, function (module) {
            DESCRIPTOR_BUFFER_TYPE = module.bj;
            DESCRIPTOR_SAMPLER_TYPE = module.bk;
            GFXDescriptorSet = module.bl;
            GFXFormat = module.f;
            GFXTextureFlagBit = module.bM;
            GFXFormatInfos = module.c7;
            GFXFilter = module.bH;
            GFXDrawInfo = module.bm;
            GFXMemoryUsageBit = module.i;
            GFXBufferUsageBit = module.h;
            GFXTextureType = module.bJ;
            GFXFormatSize = module.c8;
            GFXSampleCount = module.bL;
            GFXLoadOp = module.bQ;
            GFXColorMask = module.bG;
            GFXCullMode = module.bB;
            GFXDynamicStateFlagBit = module.bU;
            GFXStencilFace = module.bV;
            GFXType = module.bw;
            CachedArray = module.C;
            GFXShaderStageFlagBit = module.bN;
            GFXBufferFlagBit = module.bx;
            GFXBuffer = module.bo;
            GFXCommandBufferType = module.bP;
            GFXCommandBuffer = module.bp;
            GFXFramebuffer = module.cg;
            GFXInputAssembler = module.ch;
            DESCRIPTOR_DYNAMIC_TYPE = module.ci;
            GFXDescriptorSetLayout = module.cj;
            GFXPipelineState = module.cp;
            GFXQueue = module.cq;
            GFXRenderPass = module.ct;
            GFXSampler = module.cv;
            GFXShader = module.cB;
            GFX_MAX_BUFFER_BINDINGS = module.bt;
            GFX_MAX_TEXTURE_UNITS = module.br;
            GFXRasterizerState = module.ck;
            GFXDepthStencilState = module.cl;
            GFXBlendState = module.cn;
            GFX_MAX_VERTEX_ATTRIBUTES = module.bq;
            IsPowerOf2 = module.cC;
            GFXFormatSurfaceSize = module.c9;
            GFXTexture = module.cD;
            GFXBindingMappingInfo = module.ce;
            macro = module.b8;
            GFXAPI = module.cc;
            GFXFeature = module.cd;
            GFXQueueType = module.bW;
            GFXTextureUsageBit = module.bK;
            getTypedArrayConstructor = module.cb;
            GFXDevice = module.cf;
        }, function (module) {
            GFXFence = module.a;
            GFXPipelineLayout = module.G;
        }, function () {}, function (module) {
            WebGLEXT = module.W;
        }],
        execute: function () {

            var WebGL2DescriptorSet = /*#__PURE__*/function (_GFXDescriptorSet) {
              _inherits(WebGL2DescriptorSet, _GFXDescriptorSet);

              function WebGL2DescriptorSet() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, WebGL2DescriptorSet);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WebGL2DescriptorSet)).call.apply(_getPrototypeOf2, [this].concat(args)));
                _this._gpuDescriptorSet = null;
                return _this;
              }

              _createClass(WebGL2DescriptorSet, [{
                key: "initialize",
                value: function initialize(info) {
                  this._layout = info.layout;
                  var _gpuDescriptorSetLayo = info.layout.gpuDescriptorSetLayout,
                      bindings = _gpuDescriptorSetLayo.bindings,
                      descriptorCount = _gpuDescriptorSetLayo.descriptorCount,
                      descriptorIndices = _gpuDescriptorSetLayo.descriptorIndices;
                  this._buffers = Array(descriptorCount).fill(null);
                  this._textures = Array(descriptorCount).fill(null);
                  this._samplers = Array(descriptorCount).fill(null);
                  var gpuDescriptors = [];
                  this._gpuDescriptorSet = {
                    gpuDescriptors: gpuDescriptors,
                    descriptorIndices: descriptorIndices
                  };

                  for (var i = 0; i < bindings.length; ++i) {
                    var binding = bindings[i];

                    for (var j = 0; j < binding.count; j++) {
                      gpuDescriptors.push({
                        type: binding.descriptorType,
                        gpuBuffer: null,
                        gpuTexture: null,
                        gpuSampler: null
                      });
                    }
                  }

                  return true;
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  this._layout = null;
                  this._gpuDescriptorSet = null;
                }
              }, {
                key: "update",
                value: function update() {
                  if (this._isDirty && this._gpuDescriptorSet) {
                    var descriptors = this._gpuDescriptorSet.gpuDescriptors;

                    for (var i = 0; i < descriptors.length; ++i) {
                      if (descriptors[i].type & DESCRIPTOR_BUFFER_TYPE) {
                        if (this._buffers[i]) {
                          descriptors[i].gpuBuffer = this._buffers[i].gpuBuffer;
                        }
                      } else if (descriptors[i].type & DESCRIPTOR_SAMPLER_TYPE) {
                        if (this._textures[i]) {
                          descriptors[i].gpuTexture = this._textures[i].gpuTexture;
                        }

                        if (this._samplers[i]) {
                          descriptors[i].gpuSampler = this._samplers[i].gpuSampler;
                        }
                      }
                    }

                    this._isDirty = false;
                  }
                }
              }, {
                key: "gpuDescriptorSet",
                get: function get() {
                  return this._gpuDescriptorSet;
                }
              }]);

              return WebGL2DescriptorSet;
            }(GFXDescriptorSet);

            var WebGLWraps = [0x2901, // WebGLRenderingContext.REPEAT
            0x8370, // WebGLRenderingContext.MIRRORED_REPEAT
            0x812F, // WebGLRenderingContext.CLAMP_TO_EDGE
            0x812F // WebGLRenderingContext.CLAMP_TO_EDGE
            ];
            var SAMPLES = [1, 2, 4, 8, 16, 32, 64];

            var _f32v4 = new Float32Array(4); // tslint:disable: max-line-length

            function GFXFormatToWebGLType(format, gl) {
              switch (format) {
                case GFXFormat.R8:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.R8SN:
                  return gl.BYTE;

                case GFXFormat.R8UI:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.R8I:
                  return gl.BYTE;

                case GFXFormat.R16F:
                  return gl.HALF_FLOAT;

                case GFXFormat.R16UI:
                  return gl.UNSIGNED_SHORT;

                case GFXFormat.R16I:
                  return gl.SHORT;

                case GFXFormat.R32F:
                  return gl.FLOAT;

                case GFXFormat.R32UI:
                  return gl.UNSIGNED_INT;

                case GFXFormat.R32I:
                  return gl.INT;

                case GFXFormat.RG8:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.RG8SN:
                  return gl.BYTE;

                case GFXFormat.RG8UI:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.RG8I:
                  return gl.BYTE;

                case GFXFormat.RG16F:
                  return gl.HALF_FLOAT;

                case GFXFormat.RG16UI:
                  return gl.UNSIGNED_SHORT;

                case GFXFormat.RG16I:
                  return gl.SHORT;

                case GFXFormat.RG32F:
                  return gl.FLOAT;

                case GFXFormat.RG32UI:
                  return gl.UNSIGNED_INT;

                case GFXFormat.RG32I:
                  return gl.INT;

                case GFXFormat.RGB8:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.SRGB8:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.RGB8SN:
                  return gl.BYTE;

                case GFXFormat.RGB8UI:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.RGB8I:
                  return gl.BYTE;

                case GFXFormat.RGB16F:
                  return gl.HALF_FLOAT;

                case GFXFormat.RGB16UI:
                  return gl.UNSIGNED_SHORT;

                case GFXFormat.RGB16I:
                  return gl.SHORT;

                case GFXFormat.RGB32F:
                  return gl.FLOAT;

                case GFXFormat.RGB32UI:
                  return gl.UNSIGNED_INT;

                case GFXFormat.RGB32I:
                  return gl.INT;

                case GFXFormat.BGRA8:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.RGBA8:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.SRGB8_A8:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.RGBA8SN:
                  return gl.BYTE;

                case GFXFormat.RGBA8UI:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.RGBA8I:
                  return gl.BYTE;

                case GFXFormat.RGBA16F:
                  return gl.HALF_FLOAT;

                case GFXFormat.RGBA16UI:
                  return gl.UNSIGNED_SHORT;

                case GFXFormat.RGBA16I:
                  return gl.SHORT;

                case GFXFormat.RGBA32F:
                  return gl.FLOAT;

                case GFXFormat.RGBA32UI:
                  return gl.UNSIGNED_INT;

                case GFXFormat.RGBA32I:
                  return gl.INT;

                case GFXFormat.R5G6B5:
                  return gl.UNSIGNED_SHORT_5_6_5;

                case GFXFormat.R11G11B10F:
                  return gl.UNSIGNED_INT_10F_11F_11F_REV;

                case GFXFormat.RGB5A1:
                  return gl.UNSIGNED_SHORT_5_5_5_1;

                case GFXFormat.RGBA4:
                  return gl.UNSIGNED_SHORT_4_4_4_4;

                case GFXFormat.RGB10A2:
                  return gl.UNSIGNED_INT_2_10_10_10_REV;

                case GFXFormat.RGB10A2UI:
                  return gl.UNSIGNED_INT_2_10_10_10_REV;

                case GFXFormat.RGB9E5:
                  return gl.FLOAT;

                case GFXFormat.D16:
                  return gl.UNSIGNED_SHORT;

                case GFXFormat.D16S8:
                  return gl.UNSIGNED_INT_24_8;
                // no D16S8 support

                case GFXFormat.D24:
                  return gl.UNSIGNED_INT;

                case GFXFormat.D24S8:
                  return gl.UNSIGNED_INT_24_8;

                case GFXFormat.D32F:
                  return gl.FLOAT;

                case GFXFormat.D32F_S8:
                  return gl.FLOAT_32_UNSIGNED_INT_24_8_REV;

                case GFXFormat.BC1:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.BC1_SRGB:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.BC2:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.BC2_SRGB:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.BC3:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.BC3_SRGB:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.BC4:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.BC4_SNORM:
                  return gl.BYTE;

                case GFXFormat.BC5:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.BC5_SNORM:
                  return gl.BYTE;

                case GFXFormat.BC6H_SF16:
                  return gl.FLOAT;

                case GFXFormat.BC6H_UF16:
                  return gl.FLOAT;

                case GFXFormat.BC7:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.BC7_SRGB:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.ETC_RGB8:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.ETC2_RGB8:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.ETC2_SRGB8:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.ETC2_RGB8_A1:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.ETC2_SRGB8_A1:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.ETC2_RGB8:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.ETC2_SRGB8:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.EAC_R11:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.EAC_R11SN:
                  return gl.BYTE;

                case GFXFormat.EAC_RG11:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.EAC_RG11SN:
                  return gl.BYTE;

                case GFXFormat.PVRTC_RGB2:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.PVRTC_RGBA2:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.PVRTC_RGB4:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.PVRTC_RGBA4:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.PVRTC2_2BPP:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.PVRTC2_4BPP:
                  return gl.UNSIGNED_BYTE;

                case GFXFormat.ASTC_RGBA_4x4:
                case GFXFormat.ASTC_RGBA_5x4:
                case GFXFormat.ASTC_RGBA_5x5:
                case GFXFormat.ASTC_RGBA_6x5:
                case GFXFormat.ASTC_RGBA_6x6:
                case GFXFormat.ASTC_RGBA_8x5:
                case GFXFormat.ASTC_RGBA_8x6:
                case GFXFormat.ASTC_RGBA_8x8:
                case GFXFormat.ASTC_RGBA_10x5:
                case GFXFormat.ASTC_RGBA_10x6:
                case GFXFormat.ASTC_RGBA_10x8:
                case GFXFormat.ASTC_RGBA_10x10:
                case GFXFormat.ASTC_RGBA_12x10:
                case GFXFormat.ASTC_RGBA_12x12:
                case GFXFormat.ASTC_SRGBA_4x4:
                case GFXFormat.ASTC_SRGBA_5x4:
                case GFXFormat.ASTC_SRGBA_5x5:
                case GFXFormat.ASTC_SRGBA_6x5:
                case GFXFormat.ASTC_SRGBA_6x6:
                case GFXFormat.ASTC_SRGBA_8x5:
                case GFXFormat.ASTC_SRGBA_8x6:
                case GFXFormat.ASTC_SRGBA_8x8:
                case GFXFormat.ASTC_SRGBA_10x5:
                case GFXFormat.ASTC_SRGBA_10x6:
                case GFXFormat.ASTC_SRGBA_10x8:
                case GFXFormat.ASTC_SRGBA_10x10:
                case GFXFormat.ASTC_SRGBA_12x10:
                case GFXFormat.ASTC_SRGBA_12x12:
                  return gl.UNSIGNED_BYTE;

                default:
                  {
                    return gl.UNSIGNED_BYTE;
                  }
              }
            }
            function GFXFormatToWebGLInternalFormat(format, gl) {
              switch (format) {
                case GFXFormat.A8:
                  return gl.ALPHA;

                case GFXFormat.L8:
                  return gl.LUMINANCE;

                case GFXFormat.LA8:
                  return gl.LUMINANCE_ALPHA;

                case GFXFormat.R8:
                  return gl.R8;

                case GFXFormat.R8SN:
                  return gl.R8_SNORM;

                case GFXFormat.R8UI:
                  return gl.R8UI;

                case GFXFormat.R8I:
                  return gl.R8I;

                case GFXFormat.RG8:
                  return gl.RG8;

                case GFXFormat.RG8SN:
                  return gl.RG8_SNORM;

                case GFXFormat.RG8UI:
                  return gl.RG8UI;

                case GFXFormat.RG8I:
                  return gl.RG8I;

                case GFXFormat.RGB8:
                  return gl.RGB8;

                case GFXFormat.RGB8SN:
                  return gl.RGB8_SNORM;

                case GFXFormat.RGB8UI:
                  return gl.RGB8UI;

                case GFXFormat.RGB8I:
                  return gl.RGB8I;

                case GFXFormat.BGRA8:
                  return gl.RGBA8;

                case GFXFormat.RGBA8:
                  return gl.RGBA8;

                case GFXFormat.RGBA8SN:
                  return gl.RGBA8_SNORM;

                case GFXFormat.RGBA8UI:
                  return gl.RGBA8UI;

                case GFXFormat.RGBA8I:
                  return gl.RGBA8I;

                case GFXFormat.R16I:
                  return gl.R16I;

                case GFXFormat.R16UI:
                  return gl.R16UI;

                case GFXFormat.R16F:
                  return gl.R16F;

                case GFXFormat.RG16I:
                  return gl.RG16I;

                case GFXFormat.RG16UI:
                  return gl.RG16UI;

                case GFXFormat.RG16F:
                  return gl.RG16F;

                case GFXFormat.RGB16I:
                  return gl.RGB16I;

                case GFXFormat.RGB16UI:
                  return gl.RGB16UI;

                case GFXFormat.RGB16F:
                  return gl.RGB16F;

                case GFXFormat.RGBA16I:
                  return gl.RGBA16I;

                case GFXFormat.RGBA16UI:
                  return gl.RGBA16UI;

                case GFXFormat.RGBA16F:
                  return gl.RGBA16F;

                case GFXFormat.R32I:
                  return gl.R32I;

                case GFXFormat.R32UI:
                  return gl.R32UI;

                case GFXFormat.R32F:
                  return gl.R32F;

                case GFXFormat.RG32I:
                  return gl.RG32I;

                case GFXFormat.RG32UI:
                  return gl.RG32UI;

                case GFXFormat.RG32F:
                  return gl.RG32F;

                case GFXFormat.RGB32I:
                  return gl.RGB32I;

                case GFXFormat.RGB32UI:
                  return gl.RGB32UI;

                case GFXFormat.RGB32F:
                  return gl.RGB32F;

                case GFXFormat.RGBA32I:
                  return gl.RGBA32I;

                case GFXFormat.RGBA32UI:
                  return gl.RGBA32UI;

                case GFXFormat.RGBA32F:
                  return gl.RGBA32F;

                case GFXFormat.R5G6B5:
                  return gl.RGB565;

                case GFXFormat.RGB5A1:
                  return gl.RGB5_A1;

                case GFXFormat.RGBA4:
                  return gl.RGBA4;

                case GFXFormat.RGB10A2:
                  return gl.RGB10_A2;

                case GFXFormat.RGB10A2UI:
                  return gl.RGB10_A2UI;

                case GFXFormat.R11G11B10F:
                  return gl.R11F_G11F_B10F;

                case GFXFormat.D16:
                  return gl.DEPTH_COMPONENT16;

                case GFXFormat.D16S8:
                  return gl.DEPTH24_STENCIL8;
                // no D16S8 support

                case GFXFormat.D24:
                  return gl.DEPTH_COMPONENT24;

                case GFXFormat.D24S8:
                  return gl.DEPTH24_STENCIL8;

                case GFXFormat.D32F:
                  return gl.DEPTH_COMPONENT32F;

                case GFXFormat.D32F_S8:
                  return gl.DEPTH32F_STENCIL8;

                case GFXFormat.BC1:
                  return WebGLEXT.COMPRESSED_RGB_S3TC_DXT1_EXT;

                case GFXFormat.BC1_ALPHA:
                  return WebGLEXT.COMPRESSED_RGBA_S3TC_DXT1_EXT;

                case GFXFormat.BC1_SRGB:
                  return WebGLEXT.COMPRESSED_SRGB_S3TC_DXT1_EXT;

                case GFXFormat.BC1_SRGB_ALPHA:
                  return WebGLEXT.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;

                case GFXFormat.BC2:
                  return WebGLEXT.COMPRESSED_RGBA_S3TC_DXT3_EXT;

                case GFXFormat.BC2_SRGB:
                  return WebGLEXT.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;

                case GFXFormat.BC3:
                  return WebGLEXT.COMPRESSED_RGBA_S3TC_DXT5_EXT;

                case GFXFormat.BC3_SRGB:
                  return WebGLEXT.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;

                case GFXFormat.ETC_RGB8:
                  return WebGLEXT.COMPRESSED_RGB_ETC1_WEBGL;

                case GFXFormat.ETC2_RGB8:
                  return WebGLEXT.COMPRESSED_RGB8_ETC2;

                case GFXFormat.ETC2_SRGB8:
                  return WebGLEXT.COMPRESSED_SRGB8_ETC2;

                case GFXFormat.ETC2_RGB8_A1:
                  return WebGLEXT.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2;

                case GFXFormat.ETC2_SRGB8_A1:
                  return WebGLEXT.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2;

                case GFXFormat.ETC2_RGBA8:
                  return WebGLEXT.COMPRESSED_RGBA8_ETC2_EAC;

                case GFXFormat.ETC2_SRGB8_A8:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC;

                case GFXFormat.EAC_R11:
                  return WebGLEXT.COMPRESSED_R11_EAC;

                case GFXFormat.EAC_R11SN:
                  return WebGLEXT.COMPRESSED_SIGNED_R11_EAC;

                case GFXFormat.EAC_RG11:
                  return WebGLEXT.COMPRESSED_RG11_EAC;

                case GFXFormat.EAC_RG11SN:
                  return WebGLEXT.COMPRESSED_SIGNED_RG11_EAC;

                case GFXFormat.PVRTC_RGB2:
                  return WebGLEXT.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;

                case GFXFormat.PVRTC_RGBA2:
                  return WebGLEXT.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;

                case GFXFormat.PVRTC_RGB4:
                  return WebGLEXT.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;

                case GFXFormat.PVRTC_RGBA4:
                  return WebGLEXT.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;

                case GFXFormat.ASTC_RGBA_4x4:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_4x4_KHR;

                case GFXFormat.ASTC_RGBA_5x4:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_5x4_KHR;

                case GFXFormat.ASTC_RGBA_5x5:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_5x5_KHR;

                case GFXFormat.ASTC_RGBA_6x5:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_6x5_KHR;

                case GFXFormat.ASTC_RGBA_6x6:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_6x6_KHR;

                case GFXFormat.ASTC_RGBA_8x5:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_8x5_KHR;

                case GFXFormat.ASTC_RGBA_8x6:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_8x6_KHR;

                case GFXFormat.ASTC_RGBA_8x8:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_8x8_KHR;

                case GFXFormat.ASTC_RGBA_10x5:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_10x5_KHR;

                case GFXFormat.ASTC_RGBA_10x6:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_10x6_KHR;

                case GFXFormat.ASTC_RGBA_10x8:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_10x8_KHR;

                case GFXFormat.ASTC_RGBA_10x10:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_10x10_KHR;

                case GFXFormat.ASTC_RGBA_12x10:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_12x10_KHR;

                case GFXFormat.ASTC_RGBA_12x12:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_12x12_KHR;

                case GFXFormat.ASTC_SRGBA_4x4:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;

                case GFXFormat.ASTC_SRGBA_5x4:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;

                case GFXFormat.ASTC_SRGBA_5x5:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;

                case GFXFormat.ASTC_SRGBA_6x5:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;

                case GFXFormat.ASTC_SRGBA_6x6:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;

                case GFXFormat.ASTC_SRGBA_8x5:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;

                case GFXFormat.ASTC_SRGBA_8x6:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;

                case GFXFormat.ASTC_SRGBA_8x8:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;

                case GFXFormat.ASTC_SRGBA_10x5:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;

                case GFXFormat.ASTC_SRGBA_10x6:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;

                case GFXFormat.ASTC_SRGBA_10x8:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;

                case GFXFormat.ASTC_SRGBA_10x10:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;

                case GFXFormat.ASTC_SRGBA_12x10:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;

                case GFXFormat.ASTC_SRGBA_12x12:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;

                default:
                  {
                    console.error('Unsupported GFXFormat, convert to WebGL internal format failed.');
                    return gl.RGBA;
                  }
              }
            }
            function GFXFormatToWebGLFormat(format, gl) {
              switch (format) {
                case GFXFormat.A8:
                  return gl.ALPHA;

                case GFXFormat.L8:
                  return gl.LUMINANCE;

                case GFXFormat.LA8:
                  return gl.LUMINANCE_ALPHA;

                case GFXFormat.R8:
                case GFXFormat.R8SN:
                  return gl.RED;

                case GFXFormat.R8UI:
                case GFXFormat.R8I:
                  return gl.RED;

                case GFXFormat.RG8:
                case GFXFormat.RG8SN:
                case GFXFormat.RG8UI:
                case GFXFormat.RG8I:
                  return gl.RG;

                case GFXFormat.RGB8:
                case GFXFormat.RGB8SN:
                case GFXFormat.RGB8UI:
                case GFXFormat.RGB8I:
                  return gl.RGB;

                case GFXFormat.BGRA8:
                case GFXFormat.RGBA8:
                case GFXFormat.RGBA8SN:
                case GFXFormat.RGBA8UI:
                case GFXFormat.RGBA8I:
                  return gl.RGBA;

                case GFXFormat.R16UI:
                case GFXFormat.R16I:
                case GFXFormat.R16F:
                  return gl.RED;

                case GFXFormat.RG16UI:
                case GFXFormat.RG16I:
                case GFXFormat.RG16F:
                  return gl.RG;

                case GFXFormat.RGB16UI:
                case GFXFormat.RGB16I:
                case GFXFormat.RGB16F:
                  return gl.RGB;

                case GFXFormat.RGBA16UI:
                case GFXFormat.RGBA16I:
                case GFXFormat.RGBA16F:
                  return gl.RGBA;

                case GFXFormat.R32UI:
                case GFXFormat.R32I:
                case GFXFormat.R32F:
                  return gl.RED;

                case GFXFormat.RG32UI:
                case GFXFormat.RG32I:
                case GFXFormat.RG32F:
                  return gl.RG;

                case GFXFormat.RGB32UI:
                case GFXFormat.RGB32I:
                case GFXFormat.RGB32F:
                  return gl.RGB;

                case GFXFormat.RGBA32UI:
                case GFXFormat.RGBA32I:
                case GFXFormat.RGBA32F:
                  return gl.RGBA;

                case GFXFormat.RGB10A2:
                  return gl.RGBA;

                case GFXFormat.R11G11B10F:
                  return gl.RGB;

                case GFXFormat.R5G6B5:
                  return gl.RGB;

                case GFXFormat.RGB5A1:
                  return gl.RGBA;

                case GFXFormat.RGBA4:
                  return gl.RGBA;

                case GFXFormat.D16:
                  return gl.DEPTH_COMPONENT;

                case GFXFormat.D16S8:
                  return gl.DEPTH_STENCIL;

                case GFXFormat.D24:
                  return gl.DEPTH_COMPONENT;

                case GFXFormat.D24S8:
                  return gl.DEPTH_STENCIL;

                case GFXFormat.D32F:
                  return gl.DEPTH_COMPONENT;

                case GFXFormat.D32F_S8:
                  return gl.DEPTH_STENCIL;

                case GFXFormat.BC1:
                  return WebGLEXT.COMPRESSED_RGB_S3TC_DXT1_EXT;

                case GFXFormat.BC1_ALPHA:
                  return WebGLEXT.COMPRESSED_RGBA_S3TC_DXT1_EXT;

                case GFXFormat.BC1_SRGB:
                  return WebGLEXT.COMPRESSED_SRGB_S3TC_DXT1_EXT;

                case GFXFormat.BC1_SRGB_ALPHA:
                  return WebGLEXT.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;

                case GFXFormat.BC2:
                  return WebGLEXT.COMPRESSED_RGBA_S3TC_DXT3_EXT;

                case GFXFormat.BC2_SRGB:
                  return WebGLEXT.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;

                case GFXFormat.BC3:
                  return WebGLEXT.COMPRESSED_RGBA_S3TC_DXT5_EXT;

                case GFXFormat.BC3_SRGB:
                  return WebGLEXT.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;

                case GFXFormat.ETC_RGB8:
                  return WebGLEXT.COMPRESSED_RGB_ETC1_WEBGL;

                case GFXFormat.ETC2_RGB8:
                  return WebGLEXT.COMPRESSED_RGB8_ETC2;

                case GFXFormat.ETC2_SRGB8:
                  return WebGLEXT.COMPRESSED_SRGB8_ETC2;

                case GFXFormat.ETC2_RGB8_A1:
                  return WebGLEXT.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2;

                case GFXFormat.ETC2_SRGB8_A1:
                  return WebGLEXT.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2;

                case GFXFormat.ETC2_RGBA8:
                  return WebGLEXT.COMPRESSED_RGBA8_ETC2_EAC;

                case GFXFormat.ETC2_SRGB8_A8:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC;

                case GFXFormat.EAC_R11:
                  return WebGLEXT.COMPRESSED_R11_EAC;

                case GFXFormat.EAC_R11SN:
                  return WebGLEXT.COMPRESSED_SIGNED_R11_EAC;

                case GFXFormat.EAC_RG11:
                  return WebGLEXT.COMPRESSED_RG11_EAC;

                case GFXFormat.EAC_RG11SN:
                  return WebGLEXT.COMPRESSED_SIGNED_RG11_EAC;

                case GFXFormat.PVRTC_RGB2:
                  return WebGLEXT.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;

                case GFXFormat.PVRTC_RGBA2:
                  return WebGLEXT.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;

                case GFXFormat.PVRTC_RGB4:
                  return WebGLEXT.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;

                case GFXFormat.PVRTC_RGBA4:
                  return WebGLEXT.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;

                case GFXFormat.ASTC_RGBA_4x4:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_4x4_KHR;

                case GFXFormat.ASTC_RGBA_5x4:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_5x4_KHR;

                case GFXFormat.ASTC_RGBA_5x5:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_5x5_KHR;

                case GFXFormat.ASTC_RGBA_6x5:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_6x5_KHR;

                case GFXFormat.ASTC_RGBA_6x6:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_6x6_KHR;

                case GFXFormat.ASTC_RGBA_8x5:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_8x5_KHR;

                case GFXFormat.ASTC_RGBA_8x6:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_8x6_KHR;

                case GFXFormat.ASTC_RGBA_8x8:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_8x8_KHR;

                case GFXFormat.ASTC_RGBA_10x5:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_10x5_KHR;

                case GFXFormat.ASTC_RGBA_10x6:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_10x6_KHR;

                case GFXFormat.ASTC_RGBA_10x8:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_10x8_KHR;

                case GFXFormat.ASTC_RGBA_10x10:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_10x10_KHR;

                case GFXFormat.ASTC_RGBA_12x10:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_12x10_KHR;

                case GFXFormat.ASTC_RGBA_12x12:
                  return WebGLEXT.COMPRESSED_RGBA_ASTC_12x12_KHR;

                case GFXFormat.ASTC_SRGBA_4x4:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;

                case GFXFormat.ASTC_SRGBA_5x4:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;

                case GFXFormat.ASTC_SRGBA_5x5:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;

                case GFXFormat.ASTC_SRGBA_6x5:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;

                case GFXFormat.ASTC_SRGBA_6x6:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;

                case GFXFormat.ASTC_SRGBA_8x5:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;

                case GFXFormat.ASTC_SRGBA_8x6:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;

                case GFXFormat.ASTC_SRGBA_8x8:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;

                case GFXFormat.ASTC_SRGBA_10x5:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;

                case GFXFormat.ASTC_SRGBA_10x6:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;

                case GFXFormat.ASTC_SRGBA_10x8:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;

                case GFXFormat.ASTC_SRGBA_10x10:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;

                case GFXFormat.ASTC_SRGBA_12x10:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;

                case GFXFormat.ASTC_SRGBA_12x12:
                  return WebGLEXT.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;

                default:
                  {
                    console.error('Unsupported GFXFormat, convert to WebGL format failed.');
                    return gl.RGBA;
                  }
              }
            }

            function GFXTypeToWebGLType(type, gl) {
              switch (type) {
                case GFXType.BOOL:
                  return gl.BOOL;

                case GFXType.BOOL2:
                  return gl.BOOL_VEC2;

                case GFXType.BOOL3:
                  return gl.BOOL_VEC3;

                case GFXType.BOOL4:
                  return gl.BOOL_VEC4;

                case GFXType.INT:
                  return gl.INT;

                case GFXType.INT2:
                  return gl.INT_VEC2;

                case GFXType.INT3:
                  return gl.INT_VEC3;

                case GFXType.INT4:
                  return gl.INT_VEC4;

                case GFXType.UINT:
                  return gl.UNSIGNED_INT;

                case GFXType.FLOAT:
                  return gl.FLOAT;

                case GFXType.FLOAT2:
                  return gl.FLOAT_VEC2;

                case GFXType.FLOAT3:
                  return gl.FLOAT_VEC3;

                case GFXType.FLOAT4:
                  return gl.FLOAT_VEC4;

                case GFXType.MAT2:
                  return gl.FLOAT_MAT2;

                case GFXType.MAT2X3:
                  return gl.FLOAT_MAT2x3;

                case GFXType.MAT2X4:
                  return gl.FLOAT_MAT2x4;

                case GFXType.MAT3X2:
                  return gl.FLOAT_MAT3x2;

                case GFXType.MAT3:
                  return gl.FLOAT_MAT3;

                case GFXType.MAT3X4:
                  return gl.FLOAT_MAT3x4;

                case GFXType.MAT4X2:
                  return gl.FLOAT_MAT4x2;

                case GFXType.MAT4X3:
                  return gl.FLOAT_MAT4x3;

                case GFXType.MAT4:
                  return gl.FLOAT_MAT4;

                case GFXType.SAMPLER2D:
                  return gl.SAMPLER_2D;

                case GFXType.SAMPLER2D_ARRAY:
                  return gl.SAMPLER_2D_ARRAY;

                case GFXType.SAMPLER3D:
                  return gl.SAMPLER_3D;

                case GFXType.SAMPLER_CUBE:
                  return gl.SAMPLER_CUBE;

                default:
                  {
                    console.error('Unsupported GLType, convert to GL type failed.');
                    return GFXType.UNKNOWN;
                  }
              }
            }

            function WebGLTypeToGFXType(glType, gl) {
              switch (glType) {
                case gl.BOOL:
                  return GFXType.BOOL;

                case gl.BOOL_VEC2:
                  return GFXType.BOOL2;

                case gl.BOOL_VEC3:
                  return GFXType.BOOL3;

                case gl.BOOL_VEC4:
                  return GFXType.BOOL4;

                case gl.INT:
                  return GFXType.INT;

                case gl.INT_VEC2:
                  return GFXType.INT2;

                case gl.INT_VEC3:
                  return GFXType.INT3;

                case gl.INT_VEC4:
                  return GFXType.INT4;

                case gl.UNSIGNED_INT:
                  return GFXType.UINT;

                case gl.UNSIGNED_INT_VEC2:
                  return GFXType.UINT2;

                case gl.UNSIGNED_INT_VEC3:
                  return GFXType.UINT3;

                case gl.UNSIGNED_INT_VEC4:
                  return GFXType.UINT4;

                case gl.UNSIGNED_INT:
                  return GFXType.UINT;

                case gl.FLOAT:
                  return GFXType.FLOAT;

                case gl.FLOAT_VEC2:
                  return GFXType.FLOAT2;

                case gl.FLOAT_VEC3:
                  return GFXType.FLOAT3;

                case gl.FLOAT_VEC4:
                  return GFXType.FLOAT4;

                case gl.FLOAT_MAT2:
                  return GFXType.MAT2;

                case gl.FLOAT_MAT2x3:
                  return GFXType.MAT2X3;

                case gl.FLOAT_MAT2x4:
                  return GFXType.MAT2X4;

                case gl.FLOAT_MAT3x2:
                  return GFXType.MAT3X2;

                case gl.FLOAT_MAT3:
                  return GFXType.MAT3;

                case gl.FLOAT_MAT3x4:
                  return GFXType.MAT3X4;

                case gl.FLOAT_MAT4x2:
                  return GFXType.MAT4X2;

                case gl.FLOAT_MAT4x3:
                  return GFXType.MAT4X3;

                case gl.FLOAT_MAT4:
                  return GFXType.MAT4;

                case gl.SAMPLER_2D:
                  return GFXType.SAMPLER2D;

                case gl.SAMPLER_2D_ARRAY:
                  return GFXType.SAMPLER2D_ARRAY;

                case gl.SAMPLER_3D:
                  return GFXType.SAMPLER3D;

                case gl.SAMPLER_CUBE:
                  return GFXType.SAMPLER_CUBE;

                default:
                  {
                    console.error('Unsupported GLType, convert to GFXType failed.');
                    return GFXType.UNKNOWN;
                  }
              }
            }

            function WebGLGetTypeSize(glType, gl) {
              switch (glType) {
                case gl.BOOL:
                  return 4;

                case gl.BOOL_VEC2:
                  return 8;

                case gl.BOOL_VEC3:
                  return 12;

                case gl.BOOL_VEC4:
                  return 16;

                case gl.INT:
                  return 4;

                case gl.INT_VEC2:
                  return 8;

                case gl.INT_VEC3:
                  return 12;

                case gl.INT_VEC4:
                  return 16;

                case gl.UNSIGNED_INT:
                  return 4;

                case gl.UNSIGNED_INT_VEC2:
                  return 8;

                case gl.UNSIGNED_INT_VEC3:
                  return 12;

                case gl.UNSIGNED_INT_VEC4:
                  return 16;

                case gl.FLOAT:
                  return 4;

                case gl.FLOAT_VEC2:
                  return 8;

                case gl.FLOAT_VEC3:
                  return 12;

                case gl.FLOAT_VEC4:
                  return 16;

                case gl.FLOAT_MAT2:
                  return 16;

                case gl.FLOAT_MAT2x3:
                  return 24;

                case gl.FLOAT_MAT2x4:
                  return 32;

                case gl.FLOAT_MAT3x2:
                  return 24;

                case gl.FLOAT_MAT3:
                  return 36;

                case gl.FLOAT_MAT3x4:
                  return 48;

                case gl.FLOAT_MAT4x2:
                  return 32;

                case gl.FLOAT_MAT4x3:
                  return 48;

                case gl.FLOAT_MAT4:
                  return 64;

                case gl.SAMPLER_2D:
                  return 4;

                case gl.SAMPLER_2D_ARRAY:
                  return 4;

                case gl.SAMPLER_2D_ARRAY_SHADOW:
                  return 4;

                case gl.SAMPLER_3D:
                  return 4;

                case gl.SAMPLER_CUBE:
                  return 4;

                case gl.INT_SAMPLER_2D:
                  return 4;

                case gl.INT_SAMPLER_2D_ARRAY:
                  return 4;

                case gl.INT_SAMPLER_3D:
                  return 4;

                case gl.INT_SAMPLER_CUBE:
                  return 4;

                case gl.UNSIGNED_INT_SAMPLER_2D:
                  return 4;

                case gl.UNSIGNED_INT_SAMPLER_2D_ARRAY:
                  return 4;

                case gl.UNSIGNED_INT_SAMPLER_3D:
                  return 4;

                case gl.UNSIGNED_INT_SAMPLER_CUBE:
                  return 4;

                default:
                  {
                    console.error('Unsupported GLType, get type failed.');
                    return 0;
                  }
              }
            }

            function WebGLGetComponentCount(glType, gl) {
              switch (glType) {
                case gl.FLOAT_MAT2:
                  return 2;

                case gl.FLOAT_MAT2x3:
                  return 2;

                case gl.FLOAT_MAT2x4:
                  return 2;

                case gl.FLOAT_MAT3x2:
                  return 3;

                case gl.FLOAT_MAT3:
                  return 3;

                case gl.FLOAT_MAT3x4:
                  return 3;

                case gl.FLOAT_MAT4x2:
                  return 4;

                case gl.FLOAT_MAT4x3:
                  return 4;

                case gl.FLOAT_MAT4:
                  return 4;

                default:
                  {
                    return 1;
                  }
              }
            }

            var WebGLCmpFuncs = [0x0200, // WebGLRenderingContext.NEVER,
            0x0201, // WebGLRenderingContext.LESS,
            0x0202, // WebGLRenderingContext.EQUAL,
            0x0203, // WebGLRenderingContext.LEQUAL,
            0x0204, // WebGLRenderingContext.GREATER,
            0x0205, // WebGLRenderingContext.NOTEQUAL,
            0x0206, // WebGLRenderingContext.GEQUAL,
            0x0207 // WebGLRenderingContext.ALWAYS,
            ];
            var WebGLStencilOps = [0x0000, // WebGLRenderingContext.ZERO,
            0x1E00, // WebGLRenderingContext.KEEP,
            0x1E01, // WebGLRenderingContext.REPLACE,
            0x1E02, // WebGLRenderingContext.INCR,
            0x1E03, // WebGLRenderingContext.DECR,
            0x150A, // WebGLRenderingContext.INVERT,
            0x8507, // WebGLRenderingContext.INCR_WRAP,
            0x8508 // WebGLRenderingContext.DECR_WRAP,
            ];
            var WebGLBlendOps = [0x8006, // WebGLRenderingContext.FUNC_ADD,
            0x800A, // WebGLRenderingContext.FUNC_SUBTRACT,
            0x800B, // WebGLRenderingContext.FUNC_REVERSE_SUBTRACT,
            0x8006, // WebGLRenderingContext.FUNC_ADD,
            0x8006 // WebGLRenderingContext.FUNC_ADD,
            ];
            var WebGLBlendFactors = [0x0000, // WebGLRenderingContext.ZERO,
            0x0001, // WebGLRenderingContext.ONE,
            0x0302, // WebGLRenderingContext.SRC_ALPHA,
            0x0304, // WebGLRenderingContext.DST_ALPHA,
            0x0303, // WebGLRenderingContext.ONE_MINUS_SRC_ALPHA,
            0x0305, // WebGLRenderingContext.ONE_MINUS_DST_ALPHA,
            0x0300, // WebGLRenderingContext.SRC_COLOR,
            0x0306, // WebGLRenderingContext.DST_COLOR,
            0x0301, // WebGLRenderingContext.ONE_MINUS_SRC_COLOR,
            0x0307, // WebGLRenderingContext.ONE_MINUS_DST_COLOR,
            0x0308, // WebGLRenderingContext.SRC_ALPHA_SATURATE,
            0x8001, // WebGLRenderingContext.CONSTANT_COLOR,
            0x8002, // WebGLRenderingContext.ONE_MINUS_CONSTANT_COLOR,
            0x8003, // WebGLRenderingContext.CONSTANT_ALPHA,
            0x8004 // WebGLRenderingContext.ONE_MINUS_CONSTANT_ALPHA,
            ];
            var WebGL2Cmd;

            (function (WebGL2Cmd) {
              WebGL2Cmd[WebGL2Cmd["BEGIN_RENDER_PASS"] = 0] = "BEGIN_RENDER_PASS";
              WebGL2Cmd[WebGL2Cmd["END_RENDER_PASS"] = 1] = "END_RENDER_PASS";
              WebGL2Cmd[WebGL2Cmd["BIND_STATES"] = 2] = "BIND_STATES";
              WebGL2Cmd[WebGL2Cmd["DRAW"] = 3] = "DRAW";
              WebGL2Cmd[WebGL2Cmd["UPDATE_BUFFER"] = 4] = "UPDATE_BUFFER";
              WebGL2Cmd[WebGL2Cmd["COPY_BUFFER_TO_TEXTURE"] = 5] = "COPY_BUFFER_TO_TEXTURE";
              WebGL2Cmd[WebGL2Cmd["COUNT"] = 6] = "COUNT";
            })(WebGL2Cmd || (WebGL2Cmd = {}));

            var WebGL2CmdObject = function WebGL2CmdObject(type) {
              _classCallCheck(this, WebGL2CmdObject);

              this.cmdType = void 0;
              this.refCount = 0;
              this.cmdType = type;
            };
            var WebGL2CmdBeginRenderPass = /*#__PURE__*/function (_WebGL2CmdObject) {
              _inherits(WebGL2CmdBeginRenderPass, _WebGL2CmdObject);

              function WebGL2CmdBeginRenderPass() {
                var _this;

                _classCallCheck(this, WebGL2CmdBeginRenderPass);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(WebGL2CmdBeginRenderPass).call(this, WebGL2Cmd.BEGIN_RENDER_PASS));
                _this.gpuRenderPass = null;
                _this.gpuFramebuffer = null;
                _this.renderArea = {
                  x: 0,
                  y: 0,
                  width: 0,
                  height: 0
                };
                _this.clearColors = [];
                _this.clearDepth = 1.0;
                _this.clearStencil = 0;
                return _this;
              }

              _createClass(WebGL2CmdBeginRenderPass, [{
                key: "clear",
                value: function clear() {
                  this.gpuFramebuffer = null;
                  this.clearColors.length = 0;
                }
              }]);

              return WebGL2CmdBeginRenderPass;
            }(WebGL2CmdObject);
            var WebGL2CmdBindStates = /*#__PURE__*/function (_WebGL2CmdObject2) {
              _inherits(WebGL2CmdBindStates, _WebGL2CmdObject2);

              function WebGL2CmdBindStates() {
                var _this2;

                _classCallCheck(this, WebGL2CmdBindStates);

                _this2 = _possibleConstructorReturn(this, _getPrototypeOf(WebGL2CmdBindStates).call(this, WebGL2Cmd.BIND_STATES));
                _this2.gpuPipelineState = null;
                _this2.gpuInputAssembler = null;
                _this2.gpuDescriptorSets = [];
                _this2.dynamicOffsets = [];
                _this2.viewport = null;
                _this2.scissor = null;
                _this2.lineWidth = null;
                _this2.depthBias = null;
                _this2.blendConstants = [];
                _this2.depthBounds = null;
                _this2.stencilWriteMask = null;
                _this2.stencilCompareMask = null;
                return _this2;
              }

              _createClass(WebGL2CmdBindStates, [{
                key: "clear",
                value: function clear() {
                  this.gpuPipelineState = null;
                  this.gpuInputAssembler = null;
                  this.gpuDescriptorSets.length = 0;
                  this.dynamicOffsets.length = 0;
                  this.viewport = null;
                  this.scissor = null;
                  this.lineWidth = null;
                  this.depthBias = null;
                  this.blendConstants.length = 0;
                  this.depthBounds = null;
                  this.stencilWriteMask = null;
                  this.stencilCompareMask = null;
                }
              }]);

              return WebGL2CmdBindStates;
            }(WebGL2CmdObject);
            var WebGL2CmdDraw = /*#__PURE__*/function (_WebGL2CmdObject3) {
              _inherits(WebGL2CmdDraw, _WebGL2CmdObject3);

              function WebGL2CmdDraw() {
                var _this3;

                _classCallCheck(this, WebGL2CmdDraw);

                _this3 = _possibleConstructorReturn(this, _getPrototypeOf(WebGL2CmdDraw).call(this, WebGL2Cmd.DRAW));
                _this3.drawInfo = new GFXDrawInfo();
                return _this3;
              }

              _createClass(WebGL2CmdDraw, [{
                key: "clear",
                value: function clear() {}
              }]);

              return WebGL2CmdDraw;
            }(WebGL2CmdObject);
            var WebGL2CmdUpdateBuffer = /*#__PURE__*/function (_WebGL2CmdObject4) {
              _inherits(WebGL2CmdUpdateBuffer, _WebGL2CmdObject4);

              function WebGL2CmdUpdateBuffer() {
                var _this4;

                _classCallCheck(this, WebGL2CmdUpdateBuffer);

                _this4 = _possibleConstructorReturn(this, _getPrototypeOf(WebGL2CmdUpdateBuffer).call(this, WebGL2Cmd.UPDATE_BUFFER));
                _this4.gpuBuffer = null;
                _this4.buffer = null;
                _this4.offset = 0;
                _this4.size = 0;
                return _this4;
              }

              _createClass(WebGL2CmdUpdateBuffer, [{
                key: "clear",
                value: function clear() {
                  this.gpuBuffer = null;
                  this.buffer = null;
                }
              }]);

              return WebGL2CmdUpdateBuffer;
            }(WebGL2CmdObject);
            var WebGL2CmdCopyBufferToTexture = /*#__PURE__*/function (_WebGL2CmdObject5) {
              _inherits(WebGL2CmdCopyBufferToTexture, _WebGL2CmdObject5);

              function WebGL2CmdCopyBufferToTexture() {
                var _this5;

                _classCallCheck(this, WebGL2CmdCopyBufferToTexture);

                _this5 = _possibleConstructorReturn(this, _getPrototypeOf(WebGL2CmdCopyBufferToTexture).call(this, WebGL2Cmd.COPY_BUFFER_TO_TEXTURE));
                _this5.gpuTexture = null;
                _this5.buffers = [];
                _this5.regions = [];
                return _this5;
              }

              _createClass(WebGL2CmdCopyBufferToTexture, [{
                key: "clear",
                value: function clear() {
                  this.gpuTexture = null;
                  this.buffers.length = 0;
                  this.regions.length = 0;
                }
              }]);

              return WebGL2CmdCopyBufferToTexture;
            }(WebGL2CmdObject);
            var WebGL2CmdPackage = /*#__PURE__*/function () {
              function WebGL2CmdPackage() {
                _classCallCheck(this, WebGL2CmdPackage);

                this.cmds = new CachedArray(1);
                this.beginRenderPassCmds = new CachedArray(1);
                this.bindStatesCmds = new CachedArray(1);
                this.drawCmds = new CachedArray(1);
                this.updateBufferCmds = new CachedArray(1);
                this.copyBufferToTextureCmds = new CachedArray(1);
              }

              _createClass(WebGL2CmdPackage, [{
                key: "clearCmds",
                value: function clearCmds(allocator) {
                  if (this.beginRenderPassCmds.length) {
                    allocator.beginRenderPassCmdPool.freeCmds(this.beginRenderPassCmds);
                    this.beginRenderPassCmds.clear();
                  }

                  if (this.bindStatesCmds.length) {
                    allocator.bindStatesCmdPool.freeCmds(this.bindStatesCmds);
                    this.bindStatesCmds.clear();
                  }

                  if (this.drawCmds.length) {
                    allocator.drawCmdPool.freeCmds(this.drawCmds);
                    this.drawCmds.clear();
                  }

                  if (this.updateBufferCmds.length) {
                    allocator.updateBufferCmdPool.freeCmds(this.updateBufferCmds);
                    this.updateBufferCmds.clear();
                  }

                  if (this.copyBufferToTextureCmds.length) {
                    allocator.copyBufferToTextureCmdPool.freeCmds(this.copyBufferToTextureCmds);
                    this.copyBufferToTextureCmds.clear();
                  }

                  this.cmds.clear();
                }
              }]);

              return WebGL2CmdPackage;
            }();
            function WebGL2CmdFuncCreateBuffer(device, gpuBuffer) {
              var gl = device.gl;
              var cache = device.stateCache;
              var glUsage = gpuBuffer.memUsage & GFXMemoryUsageBit.HOST ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;

              if (gpuBuffer.usage & GFXBufferUsageBit.VERTEX) {
                gpuBuffer.glTarget = gl.ARRAY_BUFFER;
                var glBuffer = gl.createBuffer();

                if (glBuffer) {
                  gpuBuffer.glBuffer = glBuffer;

                  if (gpuBuffer.size > 0) {
                    if (device.useVAO) {
                      if (cache.glVAO) {
                        gl.bindVertexArray(null);
                        cache.glVAO = null;
                      }
                    }

                    if (device.stateCache.glArrayBuffer !== gpuBuffer.glBuffer) {
                      gl.bindBuffer(gl.ARRAY_BUFFER, gpuBuffer.glBuffer);
                      device.stateCache.glArrayBuffer = gpuBuffer.glBuffer;
                    }

                    gl.bufferData(gl.ARRAY_BUFFER, gpuBuffer.size, glUsage);
                    gl.bindBuffer(gl.ARRAY_BUFFER, null);
                    device.stateCache.glArrayBuffer = null;
                  }
                }
              } else if (gpuBuffer.usage & GFXBufferUsageBit.INDEX) {
                gpuBuffer.glTarget = gl.ELEMENT_ARRAY_BUFFER;

                var _glBuffer = gl.createBuffer();

                if (_glBuffer) {
                  gpuBuffer.glBuffer = _glBuffer;

                  if (gpuBuffer.size > 0) {
                    if (device.useVAO) {
                      if (cache.glVAO) {
                        gl.bindVertexArray(null);
                        cache.glVAO = null;
                      }
                    }

                    if (device.stateCache.glElementArrayBuffer !== gpuBuffer.glBuffer) {
                      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.glBuffer);
                      device.stateCache.glElementArrayBuffer = gpuBuffer.glBuffer;
                    }

                    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.size, glUsage);
                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
                    device.stateCache.glElementArrayBuffer = null;
                  }
                }
              } else if (gpuBuffer.usage & GFXBufferUsageBit.UNIFORM) {
                gpuBuffer.glTarget = gl.UNIFORM_BUFFER;

                var _glBuffer2 = gl.createBuffer();

                if (_glBuffer2 && gpuBuffer.size > 0) {
                  gpuBuffer.glBuffer = _glBuffer2;

                  if (device.stateCache.glUniformBuffer !== gpuBuffer.glBuffer) {
                    gl.bindBuffer(gl.UNIFORM_BUFFER, gpuBuffer.glBuffer);
                    device.stateCache.glUniformBuffer = gpuBuffer.glBuffer;
                  }

                  gl.bufferData(gl.UNIFORM_BUFFER, gpuBuffer.size, glUsage);
                  gl.bindBuffer(gl.UNIFORM_BUFFER, null);
                  device.stateCache.glUniformBuffer = null;
                }
              } else if (gpuBuffer.usage & GFXBufferUsageBit.INDIRECT) {
                gpuBuffer.glTarget = gl.NONE;
              } else if (gpuBuffer.usage & GFXBufferUsageBit.TRANSFER_DST) {
                gpuBuffer.glTarget = gl.NONE;
              } else if (gpuBuffer.usage & GFXBufferUsageBit.TRANSFER_SRC) {
                gpuBuffer.glTarget = gl.NONE;
              } else {
                console.error('Unsupported GFXBufferType, create buffer failed.');
                gpuBuffer.glTarget = gl.NONE;
              }
            }
            function WebGL2CmdFuncDestroyBuffer(device, gpuBuffer) {
              var gl = device.gl;

              if (gpuBuffer.glBuffer) {
                // Firefox 75+ implicitly unbind whatever buffer there was on the slot sometimes
                // can be reproduced in the static batching scene at https://github.com/cocos-creator/test-cases-3d
                switch (gpuBuffer.glTarget) {
                  case gl.ARRAY_BUFFER:
                    if (device.useVAO && device.stateCache.glVAO) {
                      gl.bindVertexArray(null);
                      device.stateCache.glVAO = null;
                    }

                    gl.bindBuffer(gl.ARRAY_BUFFER, null);
                    device.stateCache.glArrayBuffer = null;
                    break;

                  case gl.ELEMENT_ARRAY_BUFFER:
                    if (device.useVAO && device.stateCache.glVAO) {
                      gl.bindVertexArray(null);
                      device.stateCache.glVAO = null;
                    }

                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
                    device.stateCache.glElementArrayBuffer = null;
                    break;

                  case gl.UNIFORM_BUFFER:
                    gl.bindBuffer(gl.UNIFORM_BUFFER, null);
                    device.stateCache.glUniformBuffer = null;
                    break;
                }

                gl.deleteBuffer(gpuBuffer.glBuffer);
                gpuBuffer.glBuffer = null;
              }
            }
            function WebGL2CmdFuncResizeBuffer(device, gpuBuffer) {
              var gl = device.gl;
              var cache = device.stateCache;
              var glUsage = gpuBuffer.memUsage & GFXMemoryUsageBit.HOST ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;

              if (gpuBuffer.usage & GFXBufferUsageBit.VERTEX) {
                if (device.useVAO) {
                  if (cache.glVAO) {
                    gl.bindVertexArray(null);
                    cache.glVAO = null;
                  }
                }

                if (cache.glArrayBuffer !== gpuBuffer.glBuffer) {
                  gl.bindBuffer(gl.ARRAY_BUFFER, gpuBuffer.glBuffer);
                }

                if (gpuBuffer.buffer) {
                  gl.bufferData(gl.ARRAY_BUFFER, gpuBuffer.buffer, glUsage);
                } else {
                  gl.bufferData(gl.ARRAY_BUFFER, gpuBuffer.size, glUsage);
                }

                gl.bindBuffer(gl.ARRAY_BUFFER, null);
                cache.glArrayBuffer = null;
              } else if (gpuBuffer.usage & GFXBufferUsageBit.INDEX) {
                if (device.useVAO) {
                  if (cache.glVAO) {
                    gl.bindVertexArray(null);
                    cache.glVAO = null;
                  }
                }

                if (device.stateCache.glElementArrayBuffer !== gpuBuffer.glBuffer) {
                  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.glBuffer);
                }

                if (gpuBuffer.buffer) {
                  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.buffer, glUsage);
                } else {
                  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.size, glUsage);
                }

                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
                device.stateCache.glElementArrayBuffer = null;
              } else if (gpuBuffer.usage & GFXBufferUsageBit.UNIFORM) {
                if (device.stateCache.glUniformBuffer !== gpuBuffer.glBuffer) {
                  gl.bindBuffer(gl.UNIFORM_BUFFER, gpuBuffer.glBuffer);
                }

                gl.bufferData(gl.UNIFORM_BUFFER, gpuBuffer.size, glUsage);
                gl.bindBuffer(gl.UNIFORM_BUFFER, null);
                device.stateCache.glUniformBuffer = null;
              } else if (gpuBuffer.usage & GFXBufferUsageBit.INDIRECT || gpuBuffer.usage & GFXBufferUsageBit.TRANSFER_DST || gpuBuffer.usage & GFXBufferUsageBit.TRANSFER_SRC) {
                gpuBuffer.glTarget = gl.NONE;
              } else {
                console.error('Unsupported GFXBufferType, create buffer failed.');
                gpuBuffer.glTarget = gl.NONE;
              }
            }
            function WebGL2CmdFuncUpdateBuffer(device, gpuBuffer, buffer, offset, size) {
              if (gpuBuffer.usage & GFXBufferUsageBit.INDIRECT) {
                gpuBuffer.indirects.length = offset;
                Array.prototype.push.apply(gpuBuffer.indirects, buffer.drawInfos);
              } else {
                var buff = buffer;
                var gl = device.gl;
                var cache = device.stateCache;

                switch (gpuBuffer.glTarget) {
                  case gl.ARRAY_BUFFER:
                    {
                      if (cache.glVAO) {
                        gl.bindVertexArray(null);
                        cache.glVAO = null;
                      }

                      if (cache.glArrayBuffer !== gpuBuffer.glBuffer) {
                        gl.bindBuffer(gl.ARRAY_BUFFER, gpuBuffer.glBuffer);
                        cache.glArrayBuffer = gpuBuffer.glBuffer;
                      }

                      if (size === buff.byteLength) {
                        gl.bufferSubData(gpuBuffer.glTarget, offset, buff);
                      } else {
                        gl.bufferSubData(gpuBuffer.glTarget, offset, buff.slice(0, size));
                      }

                      break;
                    }

                  case gl.ELEMENT_ARRAY_BUFFER:
                    {
                      if (cache.glVAO) {
                        gl.bindVertexArray(null);
                        cache.glVAO = null;
                      }

                      if (cache.glElementArrayBuffer !== gpuBuffer.glBuffer) {
                        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.glBuffer);
                        cache.glElementArrayBuffer = gpuBuffer.glBuffer;
                      }

                      if (size === buff.byteLength) {
                        gl.bufferSubData(gpuBuffer.glTarget, offset, buff);
                      } else {
                        gl.bufferSubData(gpuBuffer.glTarget, offset, buff.slice(0, size));
                      }

                      break;
                    }

                  case gl.UNIFORM_BUFFER:
                    {
                      if (cache.glUniformBuffer !== gpuBuffer.glBuffer) {
                        gl.bindBuffer(gl.UNIFORM_BUFFER, gpuBuffer.glBuffer);
                        cache.glUniformBuffer = gpuBuffer.glBuffer;
                      }

                      if (size === buff.byteLength) {
                        gl.bufferSubData(gpuBuffer.glTarget, offset, buff);
                      } else {
                        gl.bufferSubData(gpuBuffer.glTarget, offset, new Float32Array(buff, 0, size / 4));
                      }

                      break;
                    }

                  default:
                    {
                      console.error('Unsupported GFXBufferType, update buffer failed.');
                      return;
                    }
                }
              }
            }
            function WebGL2CmdFuncCreateTexture(device, gpuTexture) {
              var gl = device.gl;
              gpuTexture.glInternalFmt = GFXFormatToWebGLInternalFormat(gpuTexture.format, gl);
              gpuTexture.glFormat = GFXFormatToWebGLFormat(gpuTexture.format, gl);
              gpuTexture.glType = GFXFormatToWebGLType(gpuTexture.format, gl);
              var w = gpuTexture.width;
              var h = gpuTexture.height;

              switch (gpuTexture.type) {
                case GFXTextureType.TEX2D:
                  {
                    gpuTexture.glTarget = gl.TEXTURE_2D;
                    var maxSize = Math.max(w, h);

                    if (maxSize > device.maxTextureSize) {
                      errorID(9100, maxSize, device.maxTextureSize);
                    }

                    if (gpuTexture.samples === GFXSampleCount.X1) {
                      var glTexture = gl.createTexture();

                      if (glTexture && gpuTexture.size > 0) {
                        gpuTexture.glTexture = glTexture;
                        var glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];

                        if (glTexUnit.glTexture !== gpuTexture.glTexture) {
                          gl.bindTexture(gl.TEXTURE_2D, gpuTexture.glTexture);
                          glTexUnit.glTexture = gpuTexture.glTexture;
                        }

                        if (!GFXFormatInfos[gpuTexture.format].isCompressed) {
                          for (var i = 0; i < gpuTexture.mipLevel; ++i) {
                            gl.texImage2D(gl.TEXTURE_2D, i, gpuTexture.glInternalFmt, w, h, 0, gpuTexture.glFormat, gpuTexture.glType, null);
                            w = Math.max(1, w >> 1);
                            h = Math.max(1, h >> 1);
                          }
                        } else {
                          if (gpuTexture.glInternalFmt !== WebGLEXT.COMPRESSED_RGB_ETC1_WEBGL) {
                            for (var _i = 0; _i < gpuTexture.mipLevel; ++_i) {
                              var imgSize = GFXFormatSize(gpuTexture.format, w, h, 1);
                              var view = new Uint8Array(imgSize);
                              gl.compressedTexImage2D(gl.TEXTURE_2D, _i, gpuTexture.glInternalFmt, w, h, 0, view);
                              w = Math.max(1, w >> 1);
                              h = Math.max(1, h >> 1);
                            }
                          } else {
                            // init 2 x 2 texture
                            var _imgSize = GFXFormatSize(gpuTexture.format, 2, 2, 1);

                            var _view = new Uint8Array(_imgSize);

                            gl.compressedTexImage2D(gl.TEXTURE_2D, 0, gpuTexture.glInternalFmt, 2, 2, 0, _view);
                          }
                        }
                        /*
                        if (gpuTexture.isPowerOf2) {
                            gpuTexture.glWrapS = gl.REPEAT;
                            gpuTexture.glWrapT = gl.REPEAT;
                        } else {
                            gpuTexture.glWrapS = gl.CLAMP_TO_EDGE;
                            gpuTexture.glWrapT = gl.CLAMP_TO_EDGE;
                        }
                        gpuTexture.glMinFilter = gl.LINEAR;
                        gpuTexture.glMagFilter = gl.LINEAR;
                        gl.texParameteri(gpuTexture.glTarget, gl.TEXTURE_WRAP_S, gpuTexture.glWrapS);
                        gl.texParameteri(gpuTexture.glTarget, gl.TEXTURE_WRAP_T, gpuTexture.glWrapT);
                        gl.texParameteri(gpuTexture.glTarget, gl.TEXTURE_MIN_FILTER, gpuTexture.glMinFilter);
                        gl.texParameteri(gpuTexture.glTarget, gl.TEXTURE_MAG_FILTER, gpuTexture.glMagFilter);
                        */

                      } else {
                        gl.deleteTexture(glTexture);
                      }
                    } else {
                      var glRenderbuffer = gl.createRenderbuffer();

                      if (glRenderbuffer && gpuTexture.size > 0) {
                        gpuTexture.glRenderbuffer = glRenderbuffer;

                        if (device.stateCache.glRenderbuffer !== gpuTexture.glRenderbuffer) {
                          gl.bindRenderbuffer(gl.RENDERBUFFER, gpuTexture.glRenderbuffer);
                          device.stateCache.glRenderbuffer = gpuTexture.glRenderbuffer;
                        }

                        gl.renderbufferStorageMultisample(gl.RENDERBUFFER, SAMPLES[gpuTexture.samples], gpuTexture.glInternalFmt, gpuTexture.width, gpuTexture.height);
                      }
                    }

                    break;
                  }

                case GFXTextureType.CUBE:
                  {
                    gpuTexture.glTarget = gl.TEXTURE_CUBE_MAP;

                    var _maxSize = Math.max(w, h);

                    if (_maxSize > device.maxCubeMapTextureSize) {
                      errorID(9100, _maxSize, device.maxTextureSize);
                    }

                    var _glTexture = gl.createTexture();

                    if (_glTexture && gpuTexture.size > 0) {
                      gpuTexture.glTexture = _glTexture;
                      var _glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];

                      if (_glTexUnit.glTexture !== gpuTexture.glTexture) {
                        gl.bindTexture(gl.TEXTURE_CUBE_MAP, gpuTexture.glTexture);
                        _glTexUnit.glTexture = gpuTexture.glTexture;
                      }

                      if (!GFXFormatInfos[gpuTexture.format].isCompressed) {
                        for (var f = 0; f < 6; ++f) {
                          w = gpuTexture.width;
                          h = gpuTexture.height;

                          for (var _i2 = 0; _i2 < gpuTexture.mipLevel; ++_i2) {
                            gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, _i2, gpuTexture.glInternalFmt, w, h, 0, gpuTexture.glFormat, gpuTexture.glType, null);
                            w = Math.max(1, w >> 1);
                            h = Math.max(1, h >> 1);
                          }
                        }
                      } else {
                        if (gpuTexture.glInternalFmt !== WebGLEXT.COMPRESSED_RGB_ETC1_WEBGL) {
                          for (var _f = 0; _f < 6; ++_f) {
                            w = gpuTexture.width;
                            h = gpuTexture.height;

                            for (var _i3 = 0; _i3 < gpuTexture.mipLevel; ++_i3) {
                              var _imgSize2 = GFXFormatSize(gpuTexture.format, w, h, 1);

                              var _view2 = new Uint8Array(_imgSize2);

                              gl.compressedTexImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + _f, _i3, gpuTexture.glInternalFmt, w, h, 0, _view2);
                              w = Math.max(1, w >> 1);
                              h = Math.max(1, h >> 1);
                            }
                          }
                        } else {
                          for (var _f2 = 0; _f2 < 6; ++_f2) {
                            var _imgSize3 = GFXFormatSize(gpuTexture.format, 2, 2, 1);

                            var _view3 = new Uint8Array(_imgSize3);

                            gl.compressedTexImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + _f2, 0, gpuTexture.glInternalFmt, 2, 2, 0, _view3);
                          }
                        }
                      }
                      /*
                      if (gpuTexture.isPowerOf2) {
                          gpuTexture.glWrapS = gl.REPEAT;
                          gpuTexture.glWrapT = gl.REPEAT;
                      } else {
                          gpuTexture.glWrapS = gl.CLAMP_TO_EDGE;
                          gpuTexture.glWrapT = gl.CLAMP_TO_EDGE;
                      }
                      gpuTexture.glMinFilter = gl.LINEAR;
                      gpuTexture.glMagFilter = gl.LINEAR;
                       gl.texParameteri(gpuTexture.glTarget, gl.TEXTURE_WRAP_S, gpuTexture.glWrapS);
                      gl.texParameteri(gpuTexture.glTarget, gl.TEXTURE_WRAP_T, gpuTexture.glWrapT);
                      gl.texParameteri(gpuTexture.glTarget, gl.TEXTURE_MIN_FILTER, gpuTexture.glMinFilter);
                      gl.texParameteri(gpuTexture.glTarget, gl.TEXTURE_MAG_FILTER, gpuTexture.glMagFilter);
                      */

                    }

                    break;
                  }

                default:
                  {
                    console.error('Unsupported GFXTextureType, create texture failed.');
                    gpuTexture.type = GFXTextureType.TEX2D;
                    gpuTexture.glTarget = gl.TEXTURE_2D;
                  }
              }
            }
            function WebGL2CmdFuncDestroyTexture(device, gpuTexture) {
              if (gpuTexture.glTexture) {
                device.gl.deleteTexture(gpuTexture.glTexture);
                gpuTexture.glTexture = null;
              }

              if (gpuTexture.glRenderbuffer) {
                device.gl.deleteRenderbuffer(gpuTexture.glRenderbuffer);
                gpuTexture.glRenderbuffer = null;
              }
            }
            function WebGL2CmdFuncResizeTexture(device, gpuTexture) {
              var gl = device.gl;
              gpuTexture.glInternalFmt = GFXFormatToWebGLInternalFormat(gpuTexture.format, gl);
              gpuTexture.glFormat = GFXFormatToWebGLFormat(gpuTexture.format, gl);
              gpuTexture.glType = GFXFormatToWebGLType(gpuTexture.format, gl);
              var w = gpuTexture.width;
              var h = gpuTexture.height;

              switch (gpuTexture.type) {
                case GFXTextureType.TEX2D:
                  {
                    gpuTexture.glTarget = gl.TEXTURE_2D;
                    var maxSize = Math.max(w, h);

                    if (maxSize > device.maxTextureSize) {
                      errorID(9100, maxSize, device.maxTextureSize);
                    }

                    if (gpuTexture.samples === GFXSampleCount.X1) {
                      var glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];

                      if (glTexUnit.glTexture !== gpuTexture.glTexture) {
                        gl.bindTexture(gl.TEXTURE_2D, gpuTexture.glTexture);
                        glTexUnit.glTexture = gpuTexture.glTexture;
                      }

                      if (!GFXFormatInfos[gpuTexture.format].isCompressed) {
                        for (var i = 0; i < gpuTexture.mipLevel; ++i) {
                          gl.texImage2D(gl.TEXTURE_2D, i, gpuTexture.glInternalFmt, w, h, 0, gpuTexture.glFormat, gpuTexture.glType, null);
                          w = Math.max(1, w >> 1);
                          h = Math.max(1, h >> 1);
                        }
                      } else {
                        if (gpuTexture.glInternalFmt !== WebGLEXT.COMPRESSED_RGB_ETC1_WEBGL) {
                          for (var _i4 = 0; _i4 < gpuTexture.mipLevel; ++_i4) {
                            var imgSize = GFXFormatSize(gpuTexture.format, w, h, 1);
                            var view = new Uint8Array(imgSize);
                            gl.compressedTexImage2D(gl.TEXTURE_2D, _i4, gpuTexture.glInternalFmt, w, h, 0, view);
                            w = Math.max(1, w >> 1);
                            h = Math.max(1, h >> 1);
                          }
                        }
                      }
                    } else {
                      var glRenderbuffer = gl.createRenderbuffer();

                      if (glRenderbuffer && gpuTexture.size > 0) {
                        gpuTexture.glRenderbuffer = glRenderbuffer;

                        if (device.stateCache.glRenderbuffer !== gpuTexture.glRenderbuffer) {
                          gl.bindRenderbuffer(gl.RENDERBUFFER, gpuTexture.glRenderbuffer);
                          device.stateCache.glRenderbuffer = gpuTexture.glRenderbuffer;
                        }

                        gl.renderbufferStorageMultisample(gl.RENDERBUFFER, SAMPLES[gpuTexture.samples], gpuTexture.glInternalFmt, gpuTexture.width, gpuTexture.height);
                      }
                    }

                    break;
                  }

                case GFXTextureType.CUBE:
                  {
                    gpuTexture.type = GFXTextureType.CUBE;
                    gpuTexture.glTarget = gl.TEXTURE_CUBE_MAP;

                    var _maxSize2 = Math.max(w, h);

                    if (_maxSize2 > device.maxCubeMapTextureSize) {
                      errorID(9100, _maxSize2, device.maxTextureSize);
                    }

                    var _glTexUnit2 = device.stateCache.glTexUnits[device.stateCache.texUnit];

                    if (_glTexUnit2.glTexture !== gpuTexture.glTexture) {
                      gl.bindTexture(gl.TEXTURE_CUBE_MAP, gpuTexture.glTexture);
                      _glTexUnit2.glTexture = gpuTexture.glTexture;
                    }

                    if (!GFXFormatInfos[gpuTexture.format].isCompressed) {
                      for (var f = 0; f < 6; ++f) {
                        w = gpuTexture.width;
                        h = gpuTexture.height;

                        for (var _i5 = 0; _i5 < gpuTexture.mipLevel; ++_i5) {
                          gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, _i5, gpuTexture.glInternalFmt, w, h, 0, gpuTexture.glFormat, gpuTexture.glType, null);
                          w = Math.max(1, w >> 1);
                          h = Math.max(1, h >> 1);
                        }
                      }
                    } else {
                      if (gpuTexture.glInternalFmt !== WebGLEXT.COMPRESSED_RGB_ETC1_WEBGL) {
                        for (var _f3 = 0; _f3 < 6; ++_f3) {
                          w = gpuTexture.width;
                          h = gpuTexture.height;

                          for (var _i6 = 0; _i6 < gpuTexture.mipLevel; ++_i6) {
                            var _imgSize4 = GFXFormatSize(gpuTexture.format, w, h, 1);

                            var _view4 = new Uint8Array(_imgSize4);

                            gl.compressedTexImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + _f3, _i6, gpuTexture.glInternalFmt, w, h, 0, _view4);
                            w = Math.max(1, w >> 1);
                            h = Math.max(1, h >> 1);
                          }
                        }
                      }
                    }

                    break;
                  }

                default:
                  {
                    console.error('Unsupported GFXTextureType, create texture failed.');
                    gpuTexture.type = GFXTextureType.TEX2D;
                    gpuTexture.glTarget = gl.TEXTURE_2D;
                  }
              }
            }
            function WebGL2CmdFuncCreateSampler(device, gpuSampler) {
              var gl = device.gl;
              var glSampler = gl.createSampler();

              if (glSampler) {
                if (gpuSampler.minFilter === GFXFilter.LINEAR || gpuSampler.minFilter === GFXFilter.ANISOTROPIC) {
                  if (gpuSampler.mipFilter === GFXFilter.LINEAR || gpuSampler.mipFilter === GFXFilter.ANISOTROPIC) {
                    gpuSampler.glMinFilter = gl.LINEAR_MIPMAP_LINEAR;
                  } else if (gpuSampler.mipFilter === GFXFilter.POINT) {
                    gpuSampler.glMinFilter = gl.LINEAR_MIPMAP_NEAREST;
                  } else {
                    gpuSampler.glMinFilter = gl.LINEAR;
                  }
                } else {
                  if (gpuSampler.mipFilter === GFXFilter.LINEAR || gpuSampler.mipFilter === GFXFilter.ANISOTROPIC) {
                    gpuSampler.glMinFilter = gl.NEAREST_MIPMAP_LINEAR;
                  } else if (gpuSampler.mipFilter === GFXFilter.POINT) {
                    gpuSampler.glMinFilter = gl.NEAREST_MIPMAP_NEAREST;
                  } else {
                    gpuSampler.glMinFilter = gl.NEAREST;
                  }
                }

                if (gpuSampler.magFilter === GFXFilter.LINEAR || gpuSampler.magFilter === GFXFilter.ANISOTROPIC) {
                  gpuSampler.glMagFilter = gl.LINEAR;
                } else {
                  gpuSampler.glMagFilter = gl.NEAREST;
                }

                gpuSampler.glWrapS = WebGLWraps[gpuSampler.addressU];
                gpuSampler.glWrapT = WebGLWraps[gpuSampler.addressV];
                gpuSampler.glWrapR = WebGLWraps[gpuSampler.addressW];
                gpuSampler.glSampler = glSampler;
                gl.samplerParameteri(glSampler, gl.TEXTURE_MIN_FILTER, gpuSampler.glMinFilter);
                gl.samplerParameteri(glSampler, gl.TEXTURE_MAG_FILTER, gpuSampler.glMagFilter);
                gl.samplerParameteri(glSampler, gl.TEXTURE_WRAP_S, gpuSampler.glWrapS);
                gl.samplerParameteri(glSampler, gl.TEXTURE_WRAP_T, gpuSampler.glWrapT);
                gl.samplerParameteri(glSampler, gl.TEXTURE_WRAP_R, gpuSampler.glWrapR);
                gl.samplerParameterf(glSampler, gl.TEXTURE_MIN_LOD, gpuSampler.minLOD);
                gl.samplerParameterf(glSampler, gl.TEXTURE_MAX_LOD, gpuSampler.maxLOD);
              }
            }
            function WebGL2CmdFuncDestroySampler(device, gpuSampler) {
              if (gpuSampler.glSampler) {
                device.gl.deleteSampler(gpuSampler.glSampler);
                gpuSampler.glSampler = null;
              }
            }
            function WebGL2CmdFuncCreateFramebuffer(device, gpuFramebuffer) {
              if (!gpuFramebuffer.gpuColorTextures.length && !gpuFramebuffer.gpuDepthStencilTexture) {
                return;
              } // onscreen fbo


              var gl = device.gl;
              var attachments = [];
              var glFramebuffer = gl.createFramebuffer();

              if (glFramebuffer) {
                gpuFramebuffer.glFramebuffer = glFramebuffer;

                if (device.stateCache.glFramebuffer !== gpuFramebuffer.glFramebuffer) {
                  gl.bindFramebuffer(gl.FRAMEBUFFER, gpuFramebuffer.glFramebuffer);
                  device.stateCache.glFramebuffer = gpuFramebuffer.glFramebuffer;
                }

                for (var i = 0; i < gpuFramebuffer.gpuColorTextures.length; ++i) {
                  var colorTexture = gpuFramebuffer.gpuColorTextures[i];

                  if (colorTexture) {
                    if (colorTexture.glTexture) {
                      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, colorTexture.glTarget, colorTexture.glTexture, 0); // level should be 0.
                    } else {
                      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, gl.RENDERBUFFER, colorTexture.glRenderbuffer);
                    }

                    attachments.push(gl.COLOR_ATTACHMENT0 + i);
                  }
                }

                var dst = gpuFramebuffer.gpuDepthStencilTexture;

                if (dst) {
                  var glAttachment = GFXFormatInfos[dst.format].hasStencil ? gl.DEPTH_STENCIL_ATTACHMENT : gl.DEPTH_ATTACHMENT;

                  if (dst.glTexture) {
                    gl.framebufferTexture2D(gl.FRAMEBUFFER, glAttachment, dst.glTarget, dst.glTexture, 0); // level must be 0
                  } else {
                    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, glAttachment, gl.RENDERBUFFER, dst.glRenderbuffer);
                  }
                }

                gl.drawBuffers(attachments);
                var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);

                if (status !== gl.FRAMEBUFFER_COMPLETE) {
                  switch (status) {
                    case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                      {
                        console.error('glCheckFramebufferStatus() - FRAMEBUFFER_INCOMPLETE_ATTACHMENT');
                        break;
                      }

                    case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                      {
                        console.error('glCheckFramebufferStatus() - FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT');
                        break;
                      }

                    case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                      {
                        console.error('glCheckFramebufferStatus() - FRAMEBUFFER_INCOMPLETE_DIMENSIONS');
                        break;
                      }

                    case gl.FRAMEBUFFER_UNSUPPORTED:
                      {
                        console.error('glCheckFramebufferStatus() - FRAMEBUFFER_UNSUPPORTED');
                        break;
                      }
                  }
                }
              }
            }
            function WebGL2CmdFuncDestroyFramebuffer(device, gpuFramebuffer) {
              if (gpuFramebuffer.glFramebuffer) {
                device.gl.deleteFramebuffer(gpuFramebuffer.glFramebuffer);
                gpuFramebuffer.glFramebuffer = null;
              }
            }
            function WebGL2CmdFuncCreateShader(device, gpuShader) {
              var gl = device.gl;

              var _loop = function _loop(k) {
                var gpuStage = gpuShader.gpuStages[k];
                var glShaderType = 0;
                var shaderTypeStr = '';
                var lineNumber = 1;

                switch (gpuStage.type) {
                  case GFXShaderStageFlagBit.VERTEX:
                    {
                      shaderTypeStr = 'VertexShader';
                      glShaderType = gl.VERTEX_SHADER;
                      break;
                    }

                  case GFXShaderStageFlagBit.FRAGMENT:
                    {
                      shaderTypeStr = 'FragmentShader';
                      glShaderType = gl.FRAGMENT_SHADER;
                      break;
                    }

                  default:
                    {
                      console.error('Unsupported GFXShaderType.');
                      return {
                        v: void 0
                      };
                    }
                }

                var glShader = gl.createShader(glShaderType);

                if (glShader) {
                  gpuStage.glShader = glShader;
                  gl.shaderSource(gpuStage.glShader, '#version 300 es\n' + gpuStage.source);
                  gl.compileShader(gpuStage.glShader);

                  if (!gl.getShaderParameter(gpuStage.glShader, gl.COMPILE_STATUS)) {
                    console.error(shaderTypeStr + ' in \'' + gpuShader.name + '\' compilation failed.');
                    console.error('Shader source dump:', gpuStage.source.replace(/^|\n/g, function () {
                      return "\n".concat(lineNumber++, " ");
                    }));
                    console.error(gl.getShaderInfoLog(gpuStage.glShader));

                    for (var l = 0; l < gpuShader.gpuStages.length; l++) {
                      var stage = gpuShader.gpuStages[k];

                      if (stage.glShader) {
                        gl.deleteShader(stage.glShader);
                        stage.glShader = null;
                      }
                    }

                    return {
                      v: void 0
                    };
                  }
                }
              };

              for (var k = 0; k < gpuShader.gpuStages.length; k++) {
                var _ret = _loop(k);

                if (_typeof(_ret) === "object") return _ret.v;
              }

              var glProgram = gl.createProgram();

              if (!glProgram) {
                return;
              }

              gpuShader.glProgram = glProgram; // link program

              for (var _k = 0; _k < gpuShader.gpuStages.length; _k++) {
                var gpuStage = gpuShader.gpuStages[_k];
                gl.attachShader(gpuShader.glProgram, gpuStage.glShader);
              }

              gl.linkProgram(gpuShader.glProgram); // detach & delete immediately

              for (var _k2 = 0; _k2 < gpuShader.gpuStages.length; _k2++) {
                var _gpuStage = gpuShader.gpuStages[_k2];

                if (_gpuStage.glShader) {
                  gl.detachShader(gpuShader.glProgram, _gpuStage.glShader);
                  gl.deleteShader(_gpuStage.glShader);
                  _gpuStage.glShader = null;
                }
              }

              if (gl.getProgramParameter(gpuShader.glProgram, gl.LINK_STATUS)) {
                console.info('Shader \'' + gpuShader.name + '\' compilation successed.');
              } else {
                console.error('Failed to link shader \'' + gpuShader.name + '\'.');
                console.error(gl.getProgramInfoLog(gpuShader.glProgram));
                return;
              } // parse inputs


              var activeAttribCount = gl.getProgramParameter(gpuShader.glProgram, gl.ACTIVE_ATTRIBUTES);
              gpuShader.glInputs = new Array(activeAttribCount);

              for (var i = 0; i < activeAttribCount; ++i) {
                var attribInfo = gl.getActiveAttrib(gpuShader.glProgram, i);

                if (attribInfo) {
                  var varName = void 0;
                  var nameOffset = attribInfo.name.indexOf('[');

                  if (nameOffset !== -1) {
                    varName = attribInfo.name.substr(0, nameOffset);
                  } else {
                    varName = attribInfo.name;
                  }

                  var glLoc = gl.getAttribLocation(gpuShader.glProgram, varName);
                  var type = WebGLTypeToGFXType(attribInfo.type, gl);
                  var stride = WebGLGetTypeSize(attribInfo.type, gl);
                  gpuShader.glInputs[i] = {
                    name: varName,
                    type: type,
                    stride: stride,
                    count: attribInfo.size,
                    size: stride * attribInfo.size,
                    glType: attribInfo.type,
                    glLoc: glLoc
                  };
                }
              } // create uniform blocks


              var activeBlockCount = gl.getProgramParameter(gpuShader.glProgram, gl.ACTIVE_UNIFORM_BLOCKS);
              var blockName;
              var blockIdx;
              var blockSize;
              var block;

              if (activeBlockCount) {
                gpuShader.glBlocks = new Array(activeBlockCount);

                for (var b = 0; b < activeBlockCount; ++b) {
                  blockName = gl.getActiveUniformBlockName(gpuShader.glProgram, b);

                  var _nameOffset = blockName.indexOf('[');

                  if (_nameOffset !== -1) {
                    blockName = blockName.substr(0, _nameOffset);
                  } // blockIdx = gl.getUniformBlockIndex(gpuShader.glProgram, blockName);


                  block = null;

                  for (var _k3 = 0; _k3 < gpuShader.blocks.length; _k3++) {
                    if (gpuShader.blocks[_k3].name === blockName) {
                      block = gpuShader.blocks[_k3];
                      break;
                    }
                  }

                  if (!block) {
                    error("Block '".concat(blockName, "' does not bound"));
                  } else {
                    // blockIdx = gl.getUniformBlockIndex(gpuShader.glProgram, blockName);
                    blockIdx = b;
                    blockSize = gl.getActiveUniformBlockParameter(gpuShader.glProgram, blockIdx, gl.UNIFORM_BLOCK_DATA_SIZE);
                    var glBinding = block.binding + (device.bindingMappingInfo.bufferOffsets[block.set] || 0);
                    gl.uniformBlockBinding(gpuShader.glProgram, blockIdx, glBinding);
                    gpuShader.glBlocks[b] = {
                      set: block.set,
                      binding: block.binding,
                      idx: blockIdx,
                      name: blockName,
                      size: blockSize,
                      glBinding: glBinding
                    };
                  }
                }
              } // create uniform samplers


              if (gpuShader.samplers.length > 0) {
                gpuShader.glSamplers = new Array(gpuShader.samplers.length);

                for (var _i7 = 0; _i7 < gpuShader.samplers.length; ++_i7) {
                  var sampler = gpuShader.samplers[_i7];
                  gpuShader.glSamplers[_i7] = {
                    set: sampler.set,
                    binding: sampler.binding,
                    name: sampler.name,
                    type: sampler.type,
                    units: [],
                    glUnits: null,
                    glType: GFXTypeToWebGLType(sampler.type, gl),
                    glLoc: -1
                  };
                }
              } // parse uniforms


              var activeUniformCount = gl.getProgramParameter(gpuShader.glProgram, gl.ACTIVE_UNIFORMS);
              var unitIdx = 0;
              var glActiveSamplers = [];

              for (var _i8 = 0; _i8 < activeUniformCount; ++_i8) {
                var uniformInfo = gl.getActiveUniform(gpuShader.glProgram, _i8);

                if (uniformInfo) {
                  var _glLoc = gl.getUniformLocation(gpuShader.glProgram, uniformInfo.name);

                  if (_glLoc !== null) {
                    var _varName = void 0;

                    var _nameOffset2 = uniformInfo.name.indexOf('[');

                    if (_nameOffset2 !== -1) {
                      _varName = uniformInfo.name.substr(0, _nameOffset2);
                    } else {
                      _varName = uniformInfo.name;
                    }

                    var isSampler = uniformInfo.type === gl.SAMPLER_2D || uniformInfo.type === gl.SAMPLER_CUBE;

                    if (isSampler) {
                      for (var _k4 = 0; _k4 < gpuShader.glSamplers.length; _k4++) {
                        var glSampler = gpuShader.glSamplers[_k4];

                        if (glSampler.name === _varName) {
                          // let varSize = stride * uniformInfo.size;
                          for (var t = 0; t < uniformInfo.size; ++t) {
                            glSampler.units.push(unitIdx + t);
                          }

                          glSampler.glLoc = _glLoc;
                          unitIdx += uniformInfo.size;
                          glActiveSamplers.push(glSampler);
                          break;
                        }
                      } // for

                    }
                  }
                }
              } // for


              if (glActiveSamplers.length) {
                if (device.stateCache.glProgram !== gpuShader.glProgram) {
                  gl.useProgram(gpuShader.glProgram);
                }

                for (var _k5 = 0; _k5 < glActiveSamplers.length; _k5++) {
                  var _glSampler = glActiveSamplers[_k5];
                  _glSampler.glUnits = new Int32Array(_glSampler.units);
                  gl.uniform1iv(_glSampler.glLoc, _glSampler.glUnits);
                }

                if (device.stateCache.glProgram !== gpuShader.glProgram) {
                  gl.useProgram(device.stateCache.glProgram);
                }
              } // strip out the inactive ones


              for (var _i9 = 0; _i9 < gpuShader.glSamplers.length;) {
                if (gpuShader.glSamplers[_i9].units.length) {
                  _i9++;
                } else {
                  gpuShader.glSamplers[_i9] = gpuShader.glSamplers[gpuShader.glSamplers.length - 1];
                  gpuShader.glSamplers.length--;
                }
              }
            }
            function WebGL2CmdFuncDestroyShader(device, gpuShader) {
              if (gpuShader.glProgram) {
                device.gl.deleteProgram(gpuShader.glProgram);
                gpuShader.glProgram = null;
              }
            }
            function WebGL2CmdFuncCreateInputAssember(device, gpuInputAssembler) {
              var gl = device.gl;
              gpuInputAssembler.glAttribs = new Array(gpuInputAssembler.attributes.length);
              var offsets = [0, 0, 0, 0, 0, 0, 0, 0];

              for (var i = 0; i < gpuInputAssembler.attributes.length; ++i) {
                var attrib = gpuInputAssembler.attributes[i];
                var stream = attrib.stream !== undefined ? attrib.stream : 0; // if (stream < gpuInputAssembler.gpuVertexBuffers.length) {

                var gpuBuffer = gpuInputAssembler.gpuVertexBuffers[stream];
                var glType = GFXFormatToWebGLType(attrib.format, gl);
                var size = GFXFormatInfos[attrib.format].size;
                gpuInputAssembler.glAttribs[i] = {
                  name: attrib.name,
                  glBuffer: gpuBuffer.glBuffer,
                  glType: glType,
                  size: size,
                  count: GFXFormatInfos[attrib.format].count,
                  stride: gpuBuffer.stride,
                  componentCount: WebGLGetComponentCount(glType, gl),
                  isNormalized: attrib.isNormalized !== undefined ? attrib.isNormalized : false,
                  isInstanced: attrib.isInstanced !== undefined ? attrib.isInstanced : false,
                  offset: offsets[stream]
                };
                offsets[stream] += size;
              }
            }
            function WebGL2CmdFuncDestroyInputAssembler(device, gpuInputAssembler) {
              var it = gpuInputAssembler.glVAOs.values();
              var res = it.next();

              while (!res.done) {
                device.gl.deleteVertexArray(res.value);
                res = it.next();
              }

              gpuInputAssembler.glVAOs.clear();
            }
            var gfxStateCache = {
              gpuPipelineState: null,
              gpuInputAssembler: null,
              gpuShader: null,
              glPrimitive: 0,
              reverseCW: false,
              invalidateAttachments: []
            };
            function WebGL2CmdFuncBeginRenderPass(device, gpuRenderPass, gpuFramebuffer, renderArea, clearColors, clearDepth, clearStencil) {
              gfxStateCache.gpuInputAssembler = null;
              gfxStateCache.gpuShader = null;
              var gl = device.gl;
              var cache = device.stateCache;
              var clears = 0;

              if (gpuFramebuffer && gpuRenderPass) {
                if (cache.glFramebuffer !== gpuFramebuffer.glFramebuffer) {
                  gl.bindFramebuffer(gl.FRAMEBUFFER, gpuFramebuffer.glFramebuffer);
                  cache.glFramebuffer = gpuFramebuffer.glFramebuffer; // render targets are drawn with flipped-Y

                  var reverseCW = !!gpuFramebuffer.glFramebuffer;

                  if (reverseCW !== gfxStateCache.reverseCW) {
                    gfxStateCache.reverseCW = reverseCW;
                    var isCCW = !device.stateCache.rs.isFrontFaceCCW;
                    gl.frontFace(isCCW ? gl.CCW : gl.CW);
                    device.stateCache.rs.isFrontFaceCCW = isCCW;
                  }
                }

                if (cache.viewport.left !== renderArea.x || cache.viewport.top !== renderArea.y || cache.viewport.width !== renderArea.width || cache.viewport.height !== renderArea.height) {
                  gl.viewport(renderArea.x, renderArea.y, renderArea.width, renderArea.height);
                  cache.viewport.left = renderArea.x;
                  cache.viewport.top = renderArea.y;
                  cache.viewport.width = renderArea.width;
                  cache.viewport.height = renderArea.height;
                }

                if (cache.scissorRect.x !== renderArea.x || cache.scissorRect.y !== renderArea.y || cache.scissorRect.width !== renderArea.width || cache.scissorRect.height !== renderArea.height) {
                  gl.scissor(renderArea.x, renderArea.y, renderArea.width, renderArea.height);
                  cache.scissorRect.x = renderArea.x;
                  cache.scissorRect.y = renderArea.y;
                  cache.scissorRect.width = renderArea.width;
                  cache.scissorRect.height = renderArea.height;
                }

                gfxStateCache.invalidateAttachments.length = 0;

                for (var j = 0; j < clearColors.length; ++j) {
                  var colorAttachment = gpuRenderPass.colorAttachments[j];

                  if (colorAttachment.format !== GFXFormat.UNKNOWN) {
                    switch (colorAttachment.loadOp) {
                      case GFXLoadOp.LOAD:
                        break;
                      // GL default behavior

                      case GFXLoadOp.CLEAR:
                        {
                          if (cache.bs.targets[0].blendColorMask !== GFXColorMask.ALL) {
                            gl.colorMask(true, true, true, true);
                          }

                          if (!gpuFramebuffer.isOffscreen) {
                            var clearColor = clearColors[0];
                            gl.clearColor(clearColor.r, clearColor.g, clearColor.b, clearColor.a);
                            clears |= gl.COLOR_BUFFER_BIT;
                          } else {
                            _f32v4[0] = clearColors[j].r;
                            _f32v4[1] = clearColors[j].g;
                            _f32v4[2] = clearColors[j].b;
                            _f32v4[3] = clearColors[j].a;
                            gl.clearBufferfv(gl.COLOR, j, _f32v4);
                          }

                          break;
                        }

                      case GFXLoadOp.DISCARD:
                        {
                          // invalidate the framebuffer
                          gfxStateCache.invalidateAttachments.push(gl.COLOR_ATTACHMENT0 + j);
                          break;
                        }
                    }
                  }
                } // if (curGPURenderPass)


                if (gpuRenderPass.depthStencilAttachment) {
                  if (gpuRenderPass.depthStencilAttachment.format !== GFXFormat.UNKNOWN) {
                    switch (gpuRenderPass.depthStencilAttachment.depthLoadOp) {
                      case GFXLoadOp.LOAD:
                        break;
                      // GL default behavior

                      case GFXLoadOp.CLEAR:
                        {
                          if (!cache.dss.depthWrite) {
                            gl.depthMask(true);
                          }

                          gl.clearDepth(clearDepth);
                          clears |= gl.DEPTH_BUFFER_BIT;
                          break;
                        }

                      case GFXLoadOp.DISCARD:
                        {
                          // invalidate the framebuffer
                          gfxStateCache.invalidateAttachments.push(gl.DEPTH_ATTACHMENT);
                          break;
                        }
                    }

                    if (GFXFormatInfos[gpuRenderPass.depthStencilAttachment.format].hasStencil) {
                      switch (gpuRenderPass.depthStencilAttachment.stencilLoadOp) {
                        case GFXLoadOp.LOAD:
                          break;
                        // GL default behavior

                        case GFXLoadOp.CLEAR:
                          {
                            if (!cache.dss.stencilWriteMaskFront) {
                              gl.stencilMaskSeparate(gl.FRONT, 0xffff);
                            }

                            if (!cache.dss.stencilWriteMaskBack) {
                              gl.stencilMaskSeparate(gl.BACK, 0xffff);
                            }

                            gl.clearStencil(clearStencil);
                            clears |= gl.STENCIL_BUFFER_BIT;
                            break;
                          }

                        case GFXLoadOp.DISCARD:
                          {
                            // invalidate the framebuffer
                            gfxStateCache.invalidateAttachments.push(gl.STENCIL_ATTACHMENT);
                            break;
                          }
                      }
                    }
                  }
                } // if (curGPURenderPass.depthStencilAttachment)


                if (gpuFramebuffer.glFramebuffer && gfxStateCache.invalidateAttachments.length) {
                  gl.invalidateFramebuffer(gl.FRAMEBUFFER, gfxStateCache.invalidateAttachments);
                }

                if (clears) {
                  gl.clear(clears);
                } // restore states


                if (clears & gl.COLOR_BUFFER_BIT) {
                  var colorMask = cache.bs.targets[0].blendColorMask;

                  if (colorMask !== GFXColorMask.ALL) {
                    var r = (colorMask & GFXColorMask.R) !== GFXColorMask.NONE;
                    var g = (colorMask & GFXColorMask.G) !== GFXColorMask.NONE;
                    var b = (colorMask & GFXColorMask.B) !== GFXColorMask.NONE;
                    var a = (colorMask & GFXColorMask.A) !== GFXColorMask.NONE;
                    gl.colorMask(r, g, b, a);
                  }
                }

                if (clears & gl.DEPTH_BUFFER_BIT && !cache.dss.depthWrite) {
                  gl.depthMask(false);
                }

                if (clears & gl.STENCIL_BUFFER_BIT) {
                  if (!cache.dss.stencilWriteMaskFront) {
                    gl.stencilMaskSeparate(gl.FRONT, 0);
                  }

                  if (!cache.dss.stencilWriteMaskBack) {
                    gl.stencilMaskSeparate(gl.BACK, 0);
                  }
                }
              } // if (gpuFramebuffer)

            }
            function WebGL2CmdFuncBindStates(device, gpuPipelineState, gpuInputAssembler, gpuDescriptorSets, dynamicOffsets, viewport, scissor, lineWidth, depthBias, blendConstants, depthBounds, stencilWriteMask, stencilCompareMask) {
              var gl = device.gl;
              var cache = device.stateCache;
              var gpuShader = gfxStateCache.gpuShader = gpuPipelineState && gpuPipelineState.gpuShader;
              var isShaderChanged = false; // bind pipeline

              if (gpuPipelineState && gfxStateCache.gpuPipelineState !== gpuPipelineState) {
                gfxStateCache.gpuPipelineState = gpuPipelineState;
                gfxStateCache.glPrimitive = gpuPipelineState.glPrimitive;

                if (gpuShader) {
                  var glProgram = gpuShader.glProgram;

                  if (cache.glProgram !== glProgram) {
                    gl.useProgram(glProgram);
                    cache.glProgram = glProgram;
                    isShaderChanged = true;
                  }
                } // rasterizer state


                var rs = gpuPipelineState.rs;

                if (rs) {
                  if (cache.rs.cullMode !== rs.cullMode) {
                    switch (rs.cullMode) {
                      case GFXCullMode.NONE:
                        {
                          gl.disable(gl.CULL_FACE);
                          break;
                        }

                      case GFXCullMode.FRONT:
                        {
                          gl.enable(gl.CULL_FACE);
                          gl.cullFace(gl.FRONT);
                          break;
                        }

                      case GFXCullMode.BACK:
                        {
                          gl.enable(gl.CULL_FACE);
                          gl.cullFace(gl.BACK);
                          break;
                        }
                    }

                    device.stateCache.rs.cullMode = rs.cullMode;
                  }

                  var isFrontFaceCCW = rs.isFrontFaceCCW !== gfxStateCache.reverseCW; // boolean XOR

                  if (device.stateCache.rs.isFrontFaceCCW !== isFrontFaceCCW) {
                    gl.frontFace(isFrontFaceCCW ? gl.CCW : gl.CW);
                    device.stateCache.rs.isFrontFaceCCW = isFrontFaceCCW;
                  }

                  if (device.stateCache.rs.depthBias !== rs.depthBias || device.stateCache.rs.depthBiasSlop !== rs.depthBiasSlop) {
                    gl.polygonOffset(rs.depthBias, rs.depthBiasSlop);
                    device.stateCache.rs.depthBias = rs.depthBias;
                    device.stateCache.rs.depthBiasSlop = rs.depthBiasSlop;
                  }

                  if (device.stateCache.rs.lineWidth !== rs.lineWidth) {
                    gl.lineWidth(rs.lineWidth);
                    device.stateCache.rs.lineWidth = rs.lineWidth;
                  }
                } // rasterizater state
                // depth-stencil state


                var dss = gpuPipelineState.dss;

                if (dss) {
                  if (cache.dss.depthTest !== dss.depthTest) {
                    if (dss.depthTest) {
                      gl.enable(gl.DEPTH_TEST);
                    } else {
                      gl.disable(gl.DEPTH_TEST);
                    }

                    cache.dss.depthTest = dss.depthTest;
                  }

                  if (cache.dss.depthWrite !== dss.depthWrite) {
                    gl.depthMask(dss.depthWrite);
                    cache.dss.depthWrite = dss.depthWrite;
                  }

                  if (cache.dss.depthFunc !== dss.depthFunc) {
                    gl.depthFunc(WebGLCmpFuncs[dss.depthFunc]);
                    cache.dss.depthFunc = dss.depthFunc;
                  } // front


                  if (cache.dss.stencilTestFront !== dss.stencilTestFront || cache.dss.stencilTestBack !== dss.stencilTestBack) {
                    if (dss.stencilTestFront || dss.stencilTestBack) {
                      gl.enable(gl.STENCIL_TEST);
                    } else {
                      gl.disable(gl.STENCIL_TEST);
                    }

                    cache.dss.stencilTestFront = dss.stencilTestFront;
                    cache.dss.stencilTestBack = dss.stencilTestBack;
                  }

                  if (cache.dss.stencilFuncFront !== dss.stencilFuncFront || cache.dss.stencilRefFront !== dss.stencilRefFront || cache.dss.stencilReadMaskFront !== dss.stencilReadMaskFront) {
                    gl.stencilFuncSeparate(gl.FRONT, WebGLCmpFuncs[dss.stencilFuncFront], dss.stencilRefFront, dss.stencilReadMaskFront);
                    cache.dss.stencilFuncFront = dss.stencilFuncFront;
                    cache.dss.stencilRefFront = dss.stencilRefFront;
                    cache.dss.stencilReadMaskFront = dss.stencilReadMaskFront;
                  }

                  if (cache.dss.stencilFailOpFront !== dss.stencilFailOpFront || cache.dss.stencilZFailOpFront !== dss.stencilZFailOpFront || cache.dss.stencilPassOpFront !== dss.stencilPassOpFront) {
                    gl.stencilOpSeparate(gl.FRONT, WebGLStencilOps[dss.stencilFailOpFront], WebGLStencilOps[dss.stencilZFailOpFront], WebGLStencilOps[dss.stencilPassOpFront]);
                    cache.dss.stencilFailOpFront = dss.stencilFailOpFront;
                    cache.dss.stencilZFailOpFront = dss.stencilZFailOpFront;
                    cache.dss.stencilPassOpFront = dss.stencilPassOpFront;
                  }

                  if (cache.dss.stencilWriteMaskFront !== dss.stencilWriteMaskFront) {
                    gl.stencilMaskSeparate(gl.FRONT, dss.stencilWriteMaskFront);
                    cache.dss.stencilWriteMaskFront = dss.stencilWriteMaskFront;
                  } // back


                  if (cache.dss.stencilFuncBack !== dss.stencilFuncBack || cache.dss.stencilRefBack !== dss.stencilRefBack || cache.dss.stencilReadMaskBack !== dss.stencilReadMaskBack) {
                    gl.stencilFuncSeparate(gl.BACK, WebGLCmpFuncs[dss.stencilFuncBack], dss.stencilRefBack, dss.stencilReadMaskBack);
                    cache.dss.stencilFuncBack = dss.stencilFuncBack;
                    cache.dss.stencilRefBack = dss.stencilRefBack;
                    cache.dss.stencilReadMaskBack = dss.stencilReadMaskBack;
                  }

                  if (cache.dss.stencilFailOpBack !== dss.stencilFailOpBack || cache.dss.stencilZFailOpBack !== dss.stencilZFailOpBack || cache.dss.stencilPassOpBack !== dss.stencilPassOpBack) {
                    gl.stencilOpSeparate(gl.BACK, WebGLStencilOps[dss.stencilFailOpBack], WebGLStencilOps[dss.stencilZFailOpBack], WebGLStencilOps[dss.stencilPassOpBack]);
                    cache.dss.stencilFailOpBack = dss.stencilFailOpBack;
                    cache.dss.stencilZFailOpBack = dss.stencilZFailOpBack;
                    cache.dss.stencilPassOpBack = dss.stencilPassOpBack;
                  }

                  if (cache.dss.stencilWriteMaskBack !== dss.stencilWriteMaskBack) {
                    gl.stencilMaskSeparate(gl.BACK, dss.stencilWriteMaskBack);
                    cache.dss.stencilWriteMaskBack = dss.stencilWriteMaskBack;
                  }
                } // depth-stencil state
                // blend state


                var bs = gpuPipelineState.bs;

                if (bs) {
                  if (cache.bs.isA2C !== bs.isA2C) {
                    if (bs.isA2C) {
                      gl.enable(gl.SAMPLE_ALPHA_TO_COVERAGE);
                    } else {
                      gl.disable(gl.SAMPLE_ALPHA_TO_COVERAGE);
                    }

                    cache.bs.isA2C = bs.isA2C;
                  }

                  if (cache.bs.blendColor.r !== bs.blendColor.r || cache.bs.blendColor.g !== bs.blendColor.g || cache.bs.blendColor.b !== bs.blendColor.b || cache.bs.blendColor.a !== bs.blendColor.a) {
                    gl.blendColor(bs.blendColor.r, bs.blendColor.g, bs.blendColor.b, bs.blendColor.a);
                    cache.bs.blendColor.r = bs.blendColor.r;
                    cache.bs.blendColor.g = bs.blendColor.g;
                    cache.bs.blendColor.b = bs.blendColor.b;
                    cache.bs.blendColor.a = bs.blendColor.a;
                  }

                  var target0 = bs.targets[0];
                  var target0Cache = cache.bs.targets[0];

                  if (target0Cache.blend !== target0.blend) {
                    if (target0.blend) {
                      gl.enable(gl.BLEND);
                    } else {
                      gl.disable(gl.BLEND);
                    }

                    target0Cache.blend = target0.blend;
                  }

                  if (target0Cache.blendEq !== target0.blendEq || target0Cache.blendAlphaEq !== target0.blendAlphaEq) {
                    gl.blendEquationSeparate(WebGLBlendOps[target0.blendEq], WebGLBlendOps[target0.blendAlphaEq]);
                    target0Cache.blendEq = target0.blendEq;
                    target0Cache.blendAlphaEq = target0.blendAlphaEq;
                  }

                  if (target0Cache.blendSrc !== target0.blendSrc || target0Cache.blendDst !== target0.blendDst || target0Cache.blendSrcAlpha !== target0.blendSrcAlpha || target0Cache.blendDstAlpha !== target0.blendDstAlpha) {
                    gl.blendFuncSeparate(WebGLBlendFactors[target0.blendSrc], WebGLBlendFactors[target0.blendDst], WebGLBlendFactors[target0.blendSrcAlpha], WebGLBlendFactors[target0.blendDstAlpha]);
                    target0Cache.blendSrc = target0.blendSrc;
                    target0Cache.blendDst = target0.blendDst;
                    target0Cache.blendSrcAlpha = target0.blendSrcAlpha;
                    target0Cache.blendDstAlpha = target0.blendDstAlpha;
                  }

                  if (target0Cache.blendColorMask !== target0.blendColorMask) {
                    gl.colorMask((target0.blendColorMask & GFXColorMask.R) !== GFXColorMask.NONE, (target0.blendColorMask & GFXColorMask.G) !== GFXColorMask.NONE, (target0.blendColorMask & GFXColorMask.B) !== GFXColorMask.NONE, (target0.blendColorMask & GFXColorMask.A) !== GFXColorMask.NONE);
                    target0Cache.blendColorMask = target0.blendColorMask;
                  }
                } // blend state

              } // bind pipeline
              // bind descriptor sets


              if (gpuPipelineState && gpuPipelineState.gpuPipelineLayout && gpuShader) {
                var blockLen = gpuShader.glBlocks.length;
                var dynamicOffsetIndices = gpuPipelineState.gpuPipelineLayout.dynamicOffsetIndices;

                for (var j = 0; j < blockLen; j++) {
                  var glBlock = gpuShader.glBlocks[j];
                  var gpuDescriptorSet = gpuDescriptorSets[glBlock.set];
                  var gpuDescriptor = gpuDescriptorSet && gpuDescriptorSet.gpuDescriptors[glBlock.binding];

                  if (!gpuDescriptor || !gpuDescriptor.gpuBuffer) {
                    error("Buffer binding '".concat(glBlock.name, "' at set ").concat(glBlock.set, " binding ").concat(glBlock.binding, " is not bounded"));
                    continue;
                  }

                  var dynamicOffsetIndexSet = dynamicOffsetIndices[glBlock.set];
                  var dynamicOffsetIndex = dynamicOffsetIndexSet && dynamicOffsetIndexSet[glBlock.binding];
                  var offset = gpuDescriptor.gpuBuffer.glOffset;
                  if (dynamicOffsetIndex >= 0) offset += dynamicOffsets[dynamicOffsetIndex];

                  if (cache.glBindUBOs[glBlock.glBinding] !== gpuDescriptor.gpuBuffer.glBuffer || cache.glBindUBOOffsets[glBlock.glBinding] !== offset) {
                    if (offset) {
                      gl.bindBufferRange(gl.UNIFORM_BUFFER, glBlock.glBinding, gpuDescriptor.gpuBuffer.glBuffer, offset, gpuDescriptor.gpuBuffer.size);
                    } else {
                      gl.bindBufferBase(gl.UNIFORM_BUFFER, glBlock.glBinding, gpuDescriptor.gpuBuffer.glBuffer);
                    }

                    cache.glUniformBuffer = cache.glBindUBOs[glBlock.glBinding] = gpuDescriptor.gpuBuffer.glBuffer;
                    cache.glBindUBOOffsets[glBlock.glBinding] = offset;
                  }
                }

                var samplerLen = gpuShader.glSamplers.length;

                for (var i = 0; i < samplerLen; i++) {
                  var _gpuDescriptorSet$des;

                  var glSampler = gpuShader.glSamplers[i];
                  var _gpuDescriptorSet = gpuDescriptorSets[glSampler.set];
                  var descriptorIndex = (_gpuDescriptorSet$des = _gpuDescriptorSet === null || _gpuDescriptorSet === void 0 ? void 0 : _gpuDescriptorSet.descriptorIndices[glSampler.binding]) !== null && _gpuDescriptorSet$des !== void 0 ? _gpuDescriptorSet$des : -1;

                  var _gpuDescriptor = _gpuDescriptorSet && _gpuDescriptorSet.gpuDescriptors[descriptorIndex];

                  for (var l = 0; l < glSampler.units.length; l++) {
                    var texUnit = glSampler.units[l];
                    var glTexUnit = cache.glTexUnits[texUnit];

                    if (!_gpuDescriptor || !_gpuDescriptor.gpuTexture || !_gpuDescriptor.gpuSampler) {
                      error("Sampler binding '".concat(glSampler.name, "' at set ").concat(glSampler.set, " binding ").concat(glSampler.binding, " index ").concat(l, " is not bounded"));
                      continue;
                    }

                    if (_gpuDescriptor.gpuTexture && _gpuDescriptor.gpuTexture.size > 0) {
                      var gpuTexture = _gpuDescriptor.gpuTexture;

                      if (glTexUnit.glTexture !== gpuTexture.glTexture) {
                        if (cache.texUnit !== texUnit) {
                          gl.activeTexture(gl.TEXTURE0 + texUnit);
                          cache.texUnit = texUnit;
                        }

                        if (gpuTexture.glTexture) {
                          gl.bindTexture(gpuTexture.glTarget, gpuTexture.glTexture);
                        } else {
                          gl.bindTexture(gpuTexture.glTarget, device.nullTex2D.gpuTexture.glTexture);
                        }

                        glTexUnit.glTexture = gpuTexture.glTexture;
                      }

                      var gpuSampler = _gpuDescriptor.gpuSampler;

                      if (cache.glSamplerUnits[texUnit] !== gpuSampler.glSampler) {
                        gl.bindSampler(texUnit, gpuSampler.glSampler);
                        cache.glSamplerUnits[texUnit] = gpuSampler.glSampler;
                      }
                    }

                    _gpuDescriptor = _gpuDescriptorSet.gpuDescriptors[++descriptorIndex];
                  }
                }
              } // bind descriptor sets
              // bind vertex/index buffer


              if (gpuInputAssembler && gpuShader && (isShaderChanged || gfxStateCache.gpuInputAssembler !== gpuInputAssembler)) {
                gfxStateCache.gpuInputAssembler = gpuInputAssembler;

                if (device.useVAO) {
                  // check vao
                  var glVAO = gpuInputAssembler.glVAOs.get(gpuShader.glProgram);

                  if (!glVAO) {
                    glVAO = gl.createVertexArray();
                    gpuInputAssembler.glVAOs.set(gpuShader.glProgram, glVAO);
                    gl.bindVertexArray(glVAO);
                    gl.bindBuffer(gl.ARRAY_BUFFER, null);
                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
                    cache.glArrayBuffer = null;
                    cache.glElementArrayBuffer = null;
                    var glAttrib;

                    for (var _j = 0; _j < gpuShader.glInputs.length; _j++) {
                      var glInput = gpuShader.glInputs[_j];
                      glAttrib = null;

                      for (var k = 0; k < gpuInputAssembler.glAttribs.length; k++) {
                        var attrib = gpuInputAssembler.glAttribs[k];

                        if (attrib.name === glInput.name) {
                          glAttrib = attrib;
                          break;
                        }
                      }

                      if (glAttrib) {
                        if (cache.glArrayBuffer !== glAttrib.glBuffer) {
                          gl.bindBuffer(gl.ARRAY_BUFFER, glAttrib.glBuffer);
                          cache.glArrayBuffer = glAttrib.glBuffer;
                        }

                        for (var c = 0; c < glAttrib.componentCount; ++c) {
                          var glLoc = glInput.glLoc + c;
                          var attribOffset = glAttrib.offset + glAttrib.size * c;
                          gl.enableVertexAttribArray(glLoc);
                          cache.glCurrentAttribLocs[glLoc] = true;
                          gl.vertexAttribPointer(glLoc, glAttrib.count, glAttrib.glType, glAttrib.isNormalized, glAttrib.stride, attribOffset);
                          gl.vertexAttribDivisor(glLoc, glAttrib.isInstanced ? 1 : 0);
                        }
                      }
                    }

                    var gpuBuffer = gpuInputAssembler.gpuIndexBuffer;

                    if (gpuBuffer) {
                      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gpuBuffer.glBuffer);
                    }

                    gl.bindVertexArray(null);
                    gl.bindBuffer(gl.ARRAY_BUFFER, null);
                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
                    cache.glArrayBuffer = null;
                    cache.glElementArrayBuffer = null;
                  }

                  if (cache.glVAO !== glVAO) {
                    gl.bindVertexArray(glVAO);
                    cache.glVAO = glVAO;
                  }
                } else {
                  for (var a = 0; a < device.maxVertexAttributes; ++a) {
                    cache.glCurrentAttribLocs[a] = false;
                  }

                  for (var _j2 = 0; _j2 < gpuShader.glInputs.length; _j2++) {
                    var _glInput = gpuShader.glInputs[_j2];
                    var _glAttrib = null;

                    for (var _k6 = 0; _k6 < gpuInputAssembler.glAttribs.length; _k6++) {
                      var _attrib = gpuInputAssembler.glAttribs[_k6];

                      if (_attrib.name === _glInput.name) {
                        _glAttrib = _attrib;
                        break;
                      }
                    }

                    if (_glAttrib) {
                      if (cache.glArrayBuffer !== _glAttrib.glBuffer) {
                        gl.bindBuffer(gl.ARRAY_BUFFER, _glAttrib.glBuffer);
                        cache.glArrayBuffer = _glAttrib.glBuffer;
                      }

                      for (var _c = 0; _c < _glAttrib.componentCount; ++_c) {
                        var _glLoc2 = _glInput.glLoc + _c;

                        var _attribOffset = _glAttrib.offset + _glAttrib.size * _c;

                        if (!cache.glEnabledAttribLocs[_glLoc2] && _glLoc2 >= 0) {
                          gl.enableVertexAttribArray(_glLoc2);
                          cache.glEnabledAttribLocs[_glLoc2] = true;
                        }

                        cache.glCurrentAttribLocs[_glLoc2] = true;
                        gl.vertexAttribPointer(_glLoc2, _glAttrib.count, _glAttrib.glType, _glAttrib.isNormalized, _glAttrib.stride, _attribOffset);
                        gl.vertexAttribDivisor(_glLoc2, _glAttrib.isInstanced ? 1 : 0);
                      }
                    }
                  } // for


                  var _gpuBuffer = gpuInputAssembler.gpuIndexBuffer;

                  if (_gpuBuffer) {
                    if (cache.glElementArrayBuffer !== _gpuBuffer.glBuffer) {
                      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, _gpuBuffer.glBuffer);
                      cache.glElementArrayBuffer = _gpuBuffer.glBuffer;
                    }
                  }

                  for (var _a = 0; _a < device.maxVertexAttributes; ++_a) {
                    if (cache.glEnabledAttribLocs[_a] !== cache.glCurrentAttribLocs[_a]) {
                      gl.disableVertexAttribArray(_a);
                      cache.glEnabledAttribLocs[_a] = false;
                    }
                  }
                }
              } // bind vertex/index buffer


              if (gpuPipelineState) {
                for (var _k7 = 0; _k7 < gpuPipelineState.dynamicStates.length; _k7++) {
                  var dynamicState = gpuPipelineState.dynamicStates[_k7];

                  switch (dynamicState) {
                    case GFXDynamicStateFlagBit.VIEWPORT:
                      {
                        if (viewport) {
                          if (cache.viewport.left !== viewport.left || cache.viewport.top !== viewport.top || cache.viewport.width !== viewport.width || cache.viewport.height !== viewport.height) {
                            gl.viewport(viewport.left, viewport.top, viewport.width, viewport.height);
                            cache.viewport.left = viewport.left;
                            cache.viewport.top = viewport.top;
                            cache.viewport.width = viewport.width;
                            cache.viewport.height = viewport.height;
                          }
                        }

                        break;
                      }

                    case GFXDynamicStateFlagBit.SCISSOR:
                      {
                        if (scissor) {
                          if (cache.scissorRect.x !== scissor.x || cache.scissorRect.y !== scissor.y || cache.scissorRect.width !== scissor.width || cache.scissorRect.height !== scissor.height) {
                            gl.scissor(scissor.x, scissor.y, scissor.width, scissor.height);
                            cache.scissorRect.x = scissor.x;
                            cache.scissorRect.y = scissor.y;
                            cache.scissorRect.width = scissor.width;
                            cache.scissorRect.height = scissor.height;
                          }
                        }

                        break;
                      }

                    case GFXDynamicStateFlagBit.LINE_WIDTH:
                      {
                        if (lineWidth) {
                          if (cache.rs.lineWidth !== lineWidth) {
                            gl.lineWidth(lineWidth);
                            cache.rs.lineWidth = lineWidth;
                          }
                        }

                        break;
                      }

                    case GFXDynamicStateFlagBit.DEPTH_BIAS:
                      {
                        if (depthBias) {
                          if (cache.rs.depthBias !== depthBias.constantFactor || cache.rs.depthBiasSlop !== depthBias.slopeFactor) {
                            gl.polygonOffset(depthBias.constantFactor, depthBias.slopeFactor);
                            cache.rs.depthBias = depthBias.constantFactor;
                            cache.rs.depthBiasSlop = depthBias.slopeFactor;
                          }
                        }

                        break;
                      }

                    case GFXDynamicStateFlagBit.BLEND_CONSTANTS:
                      {
                        if (cache.bs.blendColor.r !== blendConstants[0] || cache.bs.blendColor.g !== blendConstants[1] || cache.bs.blendColor.b !== blendConstants[2] || cache.bs.blendColor.a !== blendConstants[3]) {
                          gl.blendColor(blendConstants[0], blendConstants[1], blendConstants[2], blendConstants[3]);
                          cache.bs.blendColor.r = blendConstants[0];
                          cache.bs.blendColor.g = blendConstants[1];
                          cache.bs.blendColor.b = blendConstants[2];
                          cache.bs.blendColor.a = blendConstants[3];
                        }

                        break;
                      }

                    case GFXDynamicStateFlagBit.STENCIL_WRITE_MASK:
                      {
                        if (stencilWriteMask) {
                          switch (stencilWriteMask.face) {
                            case GFXStencilFace.FRONT:
                              {
                                if (cache.dss.stencilWriteMaskFront !== stencilWriteMask.writeMask) {
                                  gl.stencilMaskSeparate(gl.FRONT, stencilWriteMask.writeMask);
                                  cache.dss.stencilWriteMaskFront = stencilWriteMask.writeMask;
                                }

                                break;
                              }

                            case GFXStencilFace.BACK:
                              {
                                if (cache.dss.stencilWriteMaskBack !== stencilWriteMask.writeMask) {
                                  gl.stencilMaskSeparate(gl.BACK, stencilWriteMask.writeMask);
                                  cache.dss.stencilWriteMaskBack = stencilWriteMask.writeMask;
                                }

                                break;
                              }

                            case GFXStencilFace.ALL:
                              {
                                if (cache.dss.stencilWriteMaskFront !== stencilWriteMask.writeMask || cache.dss.stencilWriteMaskBack !== stencilWriteMask.writeMask) {
                                  gl.stencilMask(stencilWriteMask.writeMask);
                                  cache.dss.stencilWriteMaskFront = stencilWriteMask.writeMask;
                                  cache.dss.stencilWriteMaskBack = stencilWriteMask.writeMask;
                                }

                                break;
                              }
                          }
                        }

                        break;
                      }

                    case GFXDynamicStateFlagBit.STENCIL_COMPARE_MASK:
                      {
                        if (stencilCompareMask) {
                          switch (stencilCompareMask.face) {
                            case GFXStencilFace.FRONT:
                              {
                                if (cache.dss.stencilRefFront !== stencilCompareMask.reference || cache.dss.stencilReadMaskFront !== stencilCompareMask.compareMask) {
                                  gl.stencilFuncSeparate(gl.FRONT, WebGLCmpFuncs[cache.dss.stencilFuncFront], stencilCompareMask.reference, stencilCompareMask.compareMask);
                                  cache.dss.stencilRefFront = stencilCompareMask.reference;
                                  cache.dss.stencilReadMaskFront = stencilCompareMask.compareMask;
                                }

                                break;
                              }

                            case GFXStencilFace.BACK:
                              {
                                if (cache.dss.stencilRefBack !== stencilCompareMask.reference || cache.dss.stencilReadMaskBack !== stencilCompareMask.compareMask) {
                                  gl.stencilFuncSeparate(gl.BACK, WebGLCmpFuncs[cache.dss.stencilFuncBack], stencilCompareMask.reference, stencilCompareMask.compareMask);
                                  cache.dss.stencilRefBack = stencilCompareMask.reference;
                                  cache.dss.stencilReadMaskBack = stencilCompareMask.compareMask;
                                }

                                break;
                              }

                            case GFXStencilFace.ALL:
                              {
                                if (cache.dss.stencilRefFront !== stencilCompareMask.reference || cache.dss.stencilReadMaskFront !== stencilCompareMask.compareMask || cache.dss.stencilRefBack !== stencilCompareMask.reference || cache.dss.stencilReadMaskBack !== stencilCompareMask.compareMask) {
                                  gl.stencilFunc(WebGLCmpFuncs[cache.dss.stencilFuncBack], stencilCompareMask.reference, stencilCompareMask.compareMask);
                                  cache.dss.stencilRefFront = stencilCompareMask.reference;
                                  cache.dss.stencilReadMaskFront = stencilCompareMask.compareMask;
                                  cache.dss.stencilRefBack = stencilCompareMask.reference;
                                  cache.dss.stencilReadMaskBack = stencilCompareMask.compareMask;
                                }

                                break;
                              }
                          }
                        }

                        break;
                      }
                  } // switch

                } // for

              } // if

            }
            function WebGL2CmdFuncDraw(device, drawInfo) {
              var gl = device.gl;
              var gpuInputAssembler = gfxStateCache.gpuInputAssembler,
                  gpuShader = gfxStateCache.gpuShader,
                  glPrimitive = gfxStateCache.glPrimitive;

              if (gpuInputAssembler && gpuShader) {
                if (gpuInputAssembler.gpuIndirectBuffer) {
                  var indirects = gpuInputAssembler.gpuIndirectBuffer.indirects;

                  for (var k = 0; k < indirects.length; k++) {
                    var subDrawInfo = indirects[k];
                    var gpuBuffer = gpuInputAssembler.gpuIndexBuffer;

                    if (subDrawInfo.instanceCount) {
                      if (gpuBuffer) {
                        if (subDrawInfo.indexCount > 0) {
                          var offset = subDrawInfo.firstIndex * gpuBuffer.stride;
                          gl.drawElementsInstanced(glPrimitive, subDrawInfo.indexCount, gpuInputAssembler.glIndexType, offset, subDrawInfo.instanceCount);
                        }
                      } else {
                        gl.drawArraysInstanced(glPrimitive, subDrawInfo.firstVertex, subDrawInfo.vertexCount, subDrawInfo.instanceCount);
                      }
                    } else {
                      if (gpuBuffer) {
                        if (subDrawInfo.indexCount > 0) {
                          var _offset = subDrawInfo.firstIndex * gpuBuffer.stride;

                          gl.drawElements(glPrimitive, subDrawInfo.indexCount, gpuInputAssembler.glIndexType, _offset);
                        }
                      } else {
                        gl.drawArrays(glPrimitive, subDrawInfo.firstVertex, subDrawInfo.vertexCount);
                      }
                    }
                  }
                } else {
                  if (drawInfo.instanceCount) {
                    if (gpuInputAssembler.gpuIndexBuffer) {
                      if (drawInfo.indexCount > 0) {
                        var _offset2 = drawInfo.firstIndex * gpuInputAssembler.gpuIndexBuffer.stride;

                        gl.drawElementsInstanced(glPrimitive, drawInfo.indexCount, gpuInputAssembler.glIndexType, _offset2, drawInfo.instanceCount);
                      }
                    } else {
                      gl.drawArraysInstanced(glPrimitive, drawInfo.firstVertex, drawInfo.vertexCount, drawInfo.instanceCount);
                    }
                  } else {
                    if (gpuInputAssembler.gpuIndexBuffer) {
                      if (drawInfo.indexCount > 0) {
                        var _offset3 = drawInfo.firstIndex * gpuInputAssembler.gpuIndexBuffer.stride;

                        gl.drawElements(glPrimitive, drawInfo.indexCount, gpuInputAssembler.glIndexType, _offset3);
                      }
                    } else {
                      gl.drawArrays(glPrimitive, drawInfo.firstVertex, drawInfo.vertexCount);
                    }
                  }
                }
              }
            }
            var cmdIds = new Array(WebGL2Cmd.COUNT);
            function WebGL2CmdFuncExecuteCmds(device, cmdPackage) {
              cmdIds.fill(0);

              for (var i = 0; i < cmdPackage.cmds.length; ++i) {
                var cmd = cmdPackage.cmds.array[i];
                var cmdId = cmdIds[cmd]++;

                switch (cmd) {
                  case WebGL2Cmd.BEGIN_RENDER_PASS:
                    {
                      var cmd0 = cmdPackage.beginRenderPassCmds.array[cmdId];
                      WebGL2CmdFuncBeginRenderPass(device, cmd0.gpuRenderPass, cmd0.gpuFramebuffer, cmd0.renderArea, cmd0.clearColors, cmd0.clearDepth, cmd0.clearStencil);
                      break;
                    }

                  /*
                  case WebGL2Cmd.END_RENDER_PASS: {
                      // WebGL 2.0 doesn't support store operation of attachments.
                      // GFXStoreOp.Store is the default GL behavior.
                      break;
                  }
                  */

                  case WebGL2Cmd.BIND_STATES:
                    {
                      var cmd2 = cmdPackage.bindStatesCmds.array[cmdId];
                      WebGL2CmdFuncBindStates(device, cmd2.gpuPipelineState, cmd2.gpuInputAssembler, cmd2.gpuDescriptorSets, cmd2.dynamicOffsets, cmd2.viewport, cmd2.scissor, cmd2.lineWidth, cmd2.depthBias, cmd2.blendConstants, cmd2.depthBounds, cmd2.stencilWriteMask, cmd2.stencilCompareMask);
                      break;
                    }

                  case WebGL2Cmd.DRAW:
                    {
                      var cmd3 = cmdPackage.drawCmds.array[cmdId];
                      WebGL2CmdFuncDraw(device, cmd3.drawInfo);
                      break;
                    }

                  case WebGL2Cmd.UPDATE_BUFFER:
                    {
                      var cmd4 = cmdPackage.updateBufferCmds.array[cmdId];
                      WebGL2CmdFuncUpdateBuffer(device, cmd4.gpuBuffer, cmd4.buffer, cmd4.offset, cmd4.size);
                      break;
                    }

                  case WebGL2Cmd.COPY_BUFFER_TO_TEXTURE:
                    {
                      var cmd5 = cmdPackage.copyBufferToTextureCmds.array[cmdId];
                      WebGL2CmdFuncCopyBuffersToTexture(device, cmd5.buffers, cmd5.gpuTexture, cmd5.regions);
                      break;
                    }
                } // switch

              } // for

            }
            function WebGL2CmdFuncCopyTexImagesToTexture(device, texImages, gpuTexture, regions) {
              var gl = device.gl;
              var glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];

              if (glTexUnit.glTexture !== gpuTexture.glTexture) {
                gl.bindTexture(gpuTexture.glTarget, gpuTexture.glTexture);
                glTexUnit.glTexture = gpuTexture.glTexture;
              }

              var n = 0;
              var f = 0;

              switch (gpuTexture.glTarget) {
                case gl.TEXTURE_2D:
                  {
                    for (var k = 0; k < regions.length; k++) {
                      var region = regions[k];
                      gl.texSubImage2D(gl.TEXTURE_2D, region.texSubres.mipLevel, region.texOffset.x, region.texOffset.y, gpuTexture.glFormat, gpuTexture.glType, texImages[n++]);
                    }

                    break;
                  }

                case gl.TEXTURE_CUBE_MAP:
                  {
                    for (var _k8 = 0; _k8 < regions.length; _k8++) {
                      var _region = regions[_k8];
                      var fcount = _region.texSubres.baseArrayLayer + _region.texSubres.layerCount;

                      for (f = _region.texSubres.baseArrayLayer; f < fcount; ++f) {
                        gl.texSubImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, _region.texSubres.mipLevel, _region.texOffset.x, _region.texOffset.y, gpuTexture.glFormat, gpuTexture.glType, texImages[n++]);
                      }
                    }

                    break;
                  }

                default:
                  {
                    console.error('Unsupported GL texture type, copy buffer to texture failed.');
                  }
              }

              if (gpuTexture.flags & GFXTextureFlagBit.GEN_MIPMAP) {
                gl.generateMipmap(gpuTexture.glTarget);
              }
            }
            function WebGL2CmdFuncCopyBuffersToTexture(device, buffers, gpuTexture, regions) {
              var gl = device.gl;
              var glTexUnit = device.stateCache.glTexUnits[device.stateCache.texUnit];

              if (glTexUnit.glTexture !== gpuTexture.glTexture) {
                gl.bindTexture(gpuTexture.glTarget, gpuTexture.glTexture);
                glTexUnit.glTexture = gpuTexture.glTexture;
              }

              var n = 0;
              var w = 1;
              var h = 1;
              var f = 0;
              var fmtInfo = GFXFormatInfos[gpuTexture.format];
              var isCompressed = fmtInfo.isCompressed;

              switch (gpuTexture.glTarget) {
                case gl.TEXTURE_2D:
                  {
                    for (var k = 0; k < regions.length; k++) {
                      var region = regions[k];
                      w = region.texExtent.width;
                      h = region.texExtent.height;
                      var pixels = buffers[n++];

                      if (!isCompressed) {
                        gl.texSubImage2D(gl.TEXTURE_2D, region.texSubres.mipLevel, region.texOffset.x, region.texOffset.y, w, h, gpuTexture.glFormat, gpuTexture.glType, pixels);
                      } else {
                        if (gpuTexture.glInternalFmt !== WebGLEXT.COMPRESSED_RGB_ETC1_WEBGL) {
                          gl.compressedTexSubImage2D(gl.TEXTURE_2D, region.texSubres.mipLevel, region.texOffset.x, region.texOffset.y, w, h, gpuTexture.glFormat, pixels);
                        } else {
                          gl.compressedTexImage2D(gl.TEXTURE_2D, region.texSubres.mipLevel, gpuTexture.glInternalFmt, w, h, 0, pixels);
                        }
                      }
                    }

                    break;
                  }

                case gl.TEXTURE_CUBE_MAP:
                  {
                    for (var _k9 = 0; _k9 < regions.length; _k9++) {
                      var _region2 = regions[_k9];
                      var fcount = _region2.texSubres.baseArrayLayer + _region2.texSubres.layerCount;

                      for (f = _region2.texSubres.baseArrayLayer; f < fcount; ++f) {
                        w = _region2.texExtent.width;
                        h = _region2.texExtent.height;
                        var _pixels = buffers[n++];

                        if (!isCompressed) {
                          gl.texSubImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, _region2.texSubres.mipLevel, _region2.texOffset.x, _region2.texOffset.y, w, h, gpuTexture.glFormat, gpuTexture.glType, _pixels);
                        } else {
                          if (gpuTexture.glInternalFmt !== WebGLEXT.COMPRESSED_RGB_ETC1_WEBGL) {
                            gl.compressedTexSubImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, _region2.texSubres.mipLevel, _region2.texOffset.x, _region2.texOffset.y, w, h, gpuTexture.glFormat, _pixels);
                          } else {
                            gl.compressedTexImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, _region2.texSubres.mipLevel, gpuTexture.glInternalFmt, w, h, 0, _pixels);
                          }
                        }
                      }
                    }

                    break;
                  }

                default:
                  {
                    console.error('Unsupported GL texture type, copy buffer to texture failed.');
                  }
              }

              if (gpuTexture.flags & GFXTextureFlagBit.GEN_MIPMAP) {
                gl.generateMipmap(gpuTexture.glTarget);
              }
            }
            function WebGL2CmdFuncBlitFramebuffer(device, src, dst, srcRect, dstRect, filter) {
              var gl = device.gl;

              if (device.stateCache.glReadFramebuffer !== src.glFramebuffer) {
                gl.bindFramebuffer(gl.READ_FRAMEBUFFER, src.glFramebuffer);
                device.stateCache.glReadFramebuffer = src.glFramebuffer;
              }

              var rebindFBO = dst.glFramebuffer !== device.stateCache.glFramebuffer;

              if (rebindFBO) {
                gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, dst.glFramebuffer);
              }

              var mask = 0;

              if (src.gpuColorTextures.length > 0) {
                mask |= gl.COLOR_BUFFER_BIT;
              }

              if (src.gpuDepthStencilTexture) {
                mask |= gl.DEPTH_BUFFER_BIT;

                if (GFXFormatInfos[src.gpuDepthStencilTexture.format].hasStencil) {
                  mask |= gl.STENCIL_BUFFER_BIT;
                }
              }

              var glFilter = filter === GFXFilter.LINEAR || filter === GFXFilter.ANISOTROPIC ? gl.LINEAR : gl.NEAREST;
              gl.blitFramebuffer(srcRect.x, srcRect.y, srcRect.x + srcRect.width, srcRect.y + srcRect.height, dstRect.x, dstRect.y, dstRect.x + dstRect.width, dstRect.y + dstRect.height, mask, glFilter);

              if (rebindFBO) {
                gl.bindFramebuffer(gl.FRAMEBUFFER, device.stateCache.glFramebuffer);
              }
            }

            var WebGL2Buffer = /*#__PURE__*/function (_GFXBuffer) {
              _inherits(WebGL2Buffer, _GFXBuffer);

              function WebGL2Buffer() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, WebGL2Buffer);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WebGL2Buffer)).call.apply(_getPrototypeOf2, [this].concat(args)));
                _this._gpuBuffer = null;
                return _this;
              }

              _createClass(WebGL2Buffer, [{
                key: "initialize",
                value: function initialize(info) {
                  if ('buffer' in info) {
                    // buffer view
                    this._isBufferView = true;
                    var buffer = info.buffer;
                    this._usage = buffer.usage;
                    this._memUsage = buffer.memUsage;
                    this._size = this._stride = info.range;
                    this._count = 1;
                    this._flags = buffer.flags;
                    this._gpuBuffer = {
                      usage: this._usage,
                      memUsage: this._memUsage,
                      size: this._size,
                      stride: this._stride,
                      buffer: this._bakcupBuffer,
                      indirects: buffer.gpuBuffer.indirects,
                      glTarget: buffer.gpuBuffer.glTarget,
                      glBuffer: buffer.gpuBuffer.glBuffer,
                      glOffset: info.offset
                    };
                  } else {
                    // native buffer
                    this._usage = info.usage;
                    this._memUsage = info.memUsage;
                    this._size = info.size;
                    this._stride = Math.max(info.stride || this._size, 1);
                    this._count = this._size / this._stride;
                    this._flags = info.flags !== undefined ? info.flags : GFXBufferFlagBit.NONE;

                    if (this._usage & GFXBufferUsageBit.INDIRECT) {
                      this._indirectBuffer = {
                        drawInfos: []
                      };
                    }

                    if (this._flags & GFXBufferFlagBit.BAKUP_BUFFER) {
                      this._bakcupBuffer = new Uint8Array(this._size);
                      this._device.memoryStatus.bufferSize += this._size;
                    }

                    this._gpuBuffer = {
                      usage: this._usage,
                      memUsage: this._memUsage,
                      size: this._size,
                      stride: this._stride,
                      buffer: this._bakcupBuffer,
                      indirects: [],
                      glTarget: 0,
                      glBuffer: null,
                      glOffset: 0
                    };

                    if (info.usage & GFXBufferUsageBit.INDIRECT) {
                      this._gpuBuffer.indirects = this._indirectBuffer.drawInfos;
                    }

                    WebGL2CmdFuncCreateBuffer(this._device, this._gpuBuffer);
                    this._device.memoryStatus.bufferSize += this._size;
                  }

                  return true;
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  if (this._gpuBuffer) {
                    if (!this._isBufferView) {
                      WebGL2CmdFuncDestroyBuffer(this._device, this._gpuBuffer);
                      this._device.memoryStatus.bufferSize -= this._size;
                    }

                    this._gpuBuffer = null;
                  }

                  this._bakcupBuffer = null;
                }
              }, {
                key: "resize",
                value: function resize(size) {
                  if (this._isBufferView) {
                    console.warn('cannot resize buffer views!');
                    return;
                  }

                  var oldSize = this._size;

                  if (oldSize === size) {
                    return;
                  }

                  this._size = size;
                  this._count = this._size / this._stride;

                  if (this._bakcupBuffer) {
                    var oldView = this._bakcupBuffer;
                    this._bakcupBuffer = new Uint8Array(this._size);

                    this._bakcupBuffer.set(oldView);

                    this._device.memoryStatus.bufferSize -= oldSize;
                    this._device.memoryStatus.bufferSize += size;
                  }

                  if (this._gpuBuffer) {
                    if (this._bakcupBuffer) {
                      this._gpuBuffer.buffer = this._bakcupBuffer;
                    }

                    this._gpuBuffer.size = size;

                    if (size > 0) {
                      WebGL2CmdFuncResizeBuffer(this._device, this._gpuBuffer);
                      this._device.memoryStatus.bufferSize -= oldSize;
                      this._device.memoryStatus.bufferSize += size;
                    }
                  }
                }
              }, {
                key: "update",
                value: function update(buffer, offset, size) {
                  if (this._isBufferView) {
                    console.warn('cannot update through buffer views!');
                    return;
                  }

                  var buffSize;

                  if (size !== undefined) {
                    buffSize = size;
                  } else if (this._usage & GFXBufferUsageBit.INDIRECT) {
                    buffSize = 0;
                  } else {
                    buffSize = buffer.byteLength;
                  }

                  if (this._bakcupBuffer && buffer !== this._bakcupBuffer.buffer) {
                    var view = new Uint8Array(buffer, 0, size);

                    this._bakcupBuffer.set(view, offset);
                  }

                  WebGL2CmdFuncUpdateBuffer(this._device, this._gpuBuffer, buffer, offset || 0, buffSize);
                }
              }, {
                key: "gpuBuffer",
                get: function get() {
                  return this._gpuBuffer;
                }
              }]);

              return WebGL2Buffer;
            }(GFXBuffer);

            var WebGL2CommandPool = /*#__PURE__*/function () {
              function WebGL2CommandPool(clazz, count) {
                _classCallCheck(this, WebGL2CommandPool);

                this._frees = void 0;
                this._freeIdx = 0;
                this._freeCmds = void 0;
                this._frees = new Array(count);
                this._freeCmds = new CachedArray(count);

                for (var i = 0; i < count; ++i) {
                  this._frees[i] = new clazz();
                }

                this._freeIdx = count - 1;
              }
              /*
              public alloc (clazz: new() => T): T {
                  return new clazz();
              }
              */


              _createClass(WebGL2CommandPool, [{
                key: "alloc",
                value: function alloc(clazz) {
                  if (this._freeIdx < 0) {
                    var size = this._frees.length * 2;
                    var temp = this._frees;
                    this._frees = new Array(size);
                    var increase = size - temp.length;

                    for (var i = 0; i < increase; ++i) {
                      this._frees[i] = new clazz();
                    }

                    for (var _i = increase, j = 0; _i < size; ++_i, ++j) {
                      this._frees[_i] = temp[j];
                    }

                    this._freeIdx += increase;
                  }

                  var cmd = this._frees[this._freeIdx];
                  this._frees[this._freeIdx--] = null;
                  ++cmd.refCount;
                  return cmd;
                }
              }, {
                key: "free",
                value: function free(cmd) {
                  if (--cmd.refCount === 0) {
                    this._freeCmds.push(cmd);
                  }
                }
              }, {
                key: "freeCmds",
                value: function freeCmds(cmds) {
                  // return ;
                  for (var i = 0; i < cmds.length; ++i) {
                    if (--cmds.array[i].refCount === 0) {
                      this._freeCmds.push(cmds.array[i]);
                    }
                  }
                }
              }, {
                key: "release",
                value: function release() {
                  for (var i = 0; i < this._freeCmds.length; ++i) {
                    var cmd = this._freeCmds.array[i];
                    cmd.clear();
                    this._frees[++this._freeIdx] = cmd;
                  }

                  this._freeCmds.clear();
                }
              }]);

              return WebGL2CommandPool;
            }();
            var WebGL2CommandAllocator = /*#__PURE__*/function () {
              function WebGL2CommandAllocator() {
                _classCallCheck(this, WebGL2CommandAllocator);

                this.beginRenderPassCmdPool = void 0;
                this.bindStatesCmdPool = void 0;
                this.drawCmdPool = void 0;
                this.updateBufferCmdPool = void 0;
                this.copyBufferToTextureCmdPool = void 0;
                this.beginRenderPassCmdPool = new WebGL2CommandPool(WebGL2CmdBeginRenderPass, 1);
                this.bindStatesCmdPool = new WebGL2CommandPool(WebGL2CmdBindStates, 1);
                this.drawCmdPool = new WebGL2CommandPool(WebGL2CmdDraw, 1);
                this.updateBufferCmdPool = new WebGL2CommandPool(WebGL2CmdUpdateBuffer, 1);
                this.copyBufferToTextureCmdPool = new WebGL2CommandPool(WebGL2CmdCopyBufferToTexture, 1);
              }

              _createClass(WebGL2CommandAllocator, [{
                key: "clearCmds",
                value: function clearCmds(cmdPackage) {
                  if (cmdPackage.beginRenderPassCmds.length) {
                    this.beginRenderPassCmdPool.freeCmds(cmdPackage.beginRenderPassCmds);
                    cmdPackage.beginRenderPassCmds.clear();
                  }

                  if (cmdPackage.bindStatesCmds.length) {
                    this.bindStatesCmdPool.freeCmds(cmdPackage.bindStatesCmds);
                    cmdPackage.bindStatesCmds.clear();
                  }

                  if (cmdPackage.drawCmds.length) {
                    this.drawCmdPool.freeCmds(cmdPackage.drawCmds);
                    cmdPackage.drawCmds.clear();
                  }

                  if (cmdPackage.updateBufferCmds.length) {
                    this.updateBufferCmdPool.freeCmds(cmdPackage.updateBufferCmds);
                    cmdPackage.updateBufferCmds.clear();
                  }

                  if (cmdPackage.copyBufferToTextureCmds.length) {
                    this.copyBufferToTextureCmdPool.freeCmds(cmdPackage.copyBufferToTextureCmds);
                    cmdPackage.copyBufferToTextureCmds.clear();
                  }

                  cmdPackage.cmds.clear();
                }
              }, {
                key: "releaseCmds",
                value: function releaseCmds() {
                  this.beginRenderPassCmdPool.release();
                  this.bindStatesCmdPool.release();
                  this.drawCmdPool.release();
                  this.updateBufferCmdPool.release();
                  this.copyBufferToTextureCmdPool.release();
                }
              }]);

              return WebGL2CommandAllocator;
            }();

            var WebGL2CommandBuffer = /*#__PURE__*/function (_GFXCommandBuffer) {
              _inherits(WebGL2CommandBuffer, _GFXCommandBuffer);

              function WebGL2CommandBuffer() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, WebGL2CommandBuffer);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WebGL2CommandBuffer)).call.apply(_getPrototypeOf2, [this].concat(args)));
                _this.cmdPackage = new WebGL2CmdPackage();
                _this._webGLAllocator = null;
                _this._isInRenderPass = false;
                _this._curGPUPipelineState = null;
                _this._curGPUDescriptorSets = [];
                _this._curGPUInputAssembler = null;
                _this._curDynamicOffsets = [];
                _this._curViewport = null;
                _this._curScissor = null;
                _this._curLineWidth = null;
                _this._curDepthBias = null;
                _this._curBlendConstants = [];
                _this._curDepthBounds = null;
                _this._curStencilWriteMask = null;
                _this._curStencilCompareMask = null;
                _this._isStateInvalied = false;
                return _this;
              }

              _createClass(WebGL2CommandBuffer, [{
                key: "initialize",
                value: function initialize(info) {
                  this._type = info.type;
                  this._queue = info.queue;
                  this._webGLAllocator = this._device.cmdAllocator;
                  var setCount = this._device.bindingMappingInfo.bufferOffsets.length;

                  for (var i = 0; i < setCount; i++) {
                    this._curGPUDescriptorSets.push(null);

                    this._curDynamicOffsets.push([]);
                  }

                  return true;
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  if (this._webGLAllocator) {
                    this._webGLAllocator.clearCmds(this.cmdPackage);

                    this._webGLAllocator = null;
                  }
                }
              }, {
                key: "begin",
                value: function begin(renderPass) {

                  this._webGLAllocator.clearCmds(this.cmdPackage);

                  this._curGPUPipelineState = null;
                  this._curGPUInputAssembler = null;
                  this._curGPUDescriptorSets.length = 0;

                  for (var i = 0; i < this._curDynamicOffsets.length; i++) {
                    this._curDynamicOffsets[i].length = 0;
                  }

                  this._curViewport = null;
                  this._curScissor = null;
                  this._curLineWidth = null;
                  this._curDepthBias = null;
                  this._curBlendConstants.length = 0;
                  this._curDepthBounds = null;
                  this._curStencilWriteMask = null;
                  this._curStencilCompareMask = null;
                  this._numDrawCalls = 0;
                  this._numInstances = 0;
                  this._numTris = 0;
                }
              }, {
                key: "end",
                value: function end() {
                  if (this._isStateInvalied) {
                    this.bindStates();
                  }

                  this._isInRenderPass = false;
                }
              }, {
                key: "beginRenderPass",
                value: function beginRenderPass(renderPass, framebuffer, renderArea, clearColors, clearDepth, clearStencil) {
                  var cmd = this._webGLAllocator.beginRenderPassCmdPool.alloc(WebGL2CmdBeginRenderPass);

                  cmd.gpuRenderPass = renderPass.gpuRenderPass;
                  cmd.gpuFramebuffer = framebuffer.gpuFramebuffer;
                  cmd.renderArea = renderArea;

                  for (var i = 0; i < clearColors.length; ++i) {
                    cmd.clearColors[i] = clearColors[i];
                  }

                  cmd.clearDepth = clearDepth;
                  cmd.clearStencil = clearStencil;
                  this.cmdPackage.beginRenderPassCmds.push(cmd);
                  this.cmdPackage.cmds.push(WebGL2Cmd.BEGIN_RENDER_PASS);
                  this._isInRenderPass = true;
                }
              }, {
                key: "endRenderPass",
                value: function endRenderPass() {
                  this._isInRenderPass = false;
                }
              }, {
                key: "bindPipelineState",
                value: function bindPipelineState(pipelineState) {
                  var gpuPipelineState = pipelineState.gpuPipelineState;

                  if (gpuPipelineState !== this._curGPUPipelineState) {
                    this._curGPUPipelineState = gpuPipelineState;
                    this._isStateInvalied = true;
                  }
                }
              }, {
                key: "bindDescriptorSet",
                value: function bindDescriptorSet(set, descriptorSet, dynamicOffsets) {
                  var gpuDescriptorSets = descriptorSet.gpuDescriptorSet;

                  if (gpuDescriptorSets !== this._curGPUDescriptorSets[set]) {
                    this._curGPUDescriptorSets[set] = gpuDescriptorSets;
                    this._isStateInvalied = true;
                  }

                  if (dynamicOffsets) {
                    var offsets = this._curDynamicOffsets[set];

                    for (var i = 0; i < dynamicOffsets.length; i++) {
                      offsets[i] = dynamicOffsets[i];
                    }

                    offsets.length = dynamicOffsets.length;
                    this._isStateInvalied = true;
                  }
                }
              }, {
                key: "bindInputAssembler",
                value: function bindInputAssembler(inputAssembler) {
                  var gpuInputAssembler = inputAssembler.gpuInputAssembler;
                  this._curGPUInputAssembler = gpuInputAssembler;
                  this._isStateInvalied = true;
                }
              }, {
                key: "setViewport",
                value: function setViewport(viewport) {
                  if (!this._curViewport) {
                    this._curViewport = {
                      left: viewport.left,
                      top: viewport.top,
                      width: viewport.width,
                      height: viewport.height,
                      minDepth: viewport.minDepth,
                      maxDepth: viewport.maxDepth
                    };
                  } else {
                    if (this._curViewport.left !== viewport.left || this._curViewport.top !== viewport.top || this._curViewport.width !== viewport.width || this._curViewport.height !== viewport.height || this._curViewport.minDepth !== viewport.minDepth || this._curViewport.maxDepth !== viewport.maxDepth) {
                      this._curViewport.left = viewport.left;
                      this._curViewport.top = viewport.top;
                      this._curViewport.width = viewport.width;
                      this._curViewport.height = viewport.height;
                      this._curViewport.minDepth = viewport.minDepth;
                      this._curViewport.maxDepth = viewport.maxDepth;
                      this._isStateInvalied = true;
                    }
                  }
                }
              }, {
                key: "setScissor",
                value: function setScissor(scissor) {
                  if (!this._curScissor) {
                    this._curScissor = {
                      x: scissor.x,
                      y: scissor.y,
                      width: scissor.width,
                      height: scissor.height
                    };
                  } else {
                    if (this._curScissor.x !== scissor.x || this._curScissor.y !== scissor.y || this._curScissor.width !== scissor.width || this._curScissor.height !== scissor.height) {
                      this._curScissor.x = scissor.x;
                      this._curScissor.y = scissor.y;
                      this._curScissor.width = scissor.width;
                      this._curScissor.height = scissor.height;
                      this._isStateInvalied = true;
                    }
                  }
                }
              }, {
                key: "setLineWidth",
                value: function setLineWidth(lineWidth) {
                  if (this._curLineWidth !== lineWidth) {
                    this._curLineWidth = lineWidth;
                    this._isStateInvalied = true;
                  }
                }
              }, {
                key: "setDepthBias",
                value: function setDepthBias(depthBiasConstantFactor, depthBiasClamp, depthBiasSlopeFactor) {
                  if (!this._curDepthBias) {
                    this._curDepthBias = {
                      constantFactor: depthBiasConstantFactor,
                      clamp: depthBiasClamp,
                      slopeFactor: depthBiasSlopeFactor
                    };
                    this._isStateInvalied = true;
                  } else {
                    if (this._curDepthBias.constantFactor !== depthBiasConstantFactor || this._curDepthBias.clamp !== depthBiasClamp || this._curDepthBias.slopeFactor !== depthBiasSlopeFactor) {
                      this._curDepthBias.constantFactor = depthBiasConstantFactor;
                      this._curDepthBias.clamp = depthBiasClamp;
                      this._curDepthBias.slopeFactor = depthBiasSlopeFactor;
                      this._isStateInvalied = true;
                    }
                  }
                }
              }, {
                key: "setBlendConstants",
                value: function setBlendConstants(blendConstants) {
                  if (blendConstants.length === 4 && (this._curBlendConstants[0] !== blendConstants[0] || this._curBlendConstants[1] !== blendConstants[1] || this._curBlendConstants[2] !== blendConstants[2] || this._curBlendConstants[3] !== blendConstants[3])) {
                    this._curBlendConstants.length = 0;
                    Array.prototype.push.apply(this._curBlendConstants, blendConstants);
                    this._isStateInvalied = true;
                  }
                }
              }, {
                key: "setDepthBound",
                value: function setDepthBound(minDepthBounds, maxDepthBounds) {
                  if (!this._curDepthBounds) {
                    this._curDepthBounds = {
                      minBounds: minDepthBounds,
                      maxBounds: maxDepthBounds
                    };
                    this._isStateInvalied = true;
                  } else {
                    if (this._curDepthBounds.minBounds !== minDepthBounds || this._curDepthBounds.maxBounds !== maxDepthBounds) {
                      this._curDepthBounds = {
                        minBounds: minDepthBounds,
                        maxBounds: maxDepthBounds
                      };
                      this._isStateInvalied = true;
                    }
                  }
                }
              }, {
                key: "setStencilWriteMask",
                value: function setStencilWriteMask(face, writeMask) {
                  if (!this._curStencilWriteMask) {
                    this._curStencilWriteMask = {
                      face: face,
                      writeMask: writeMask
                    };
                    this._isStateInvalied = true;
                  } else {
                    if (this._curStencilWriteMask.face !== face || this._curStencilWriteMask.writeMask !== writeMask) {
                      this._curStencilWriteMask.face = face;
                      this._curStencilWriteMask.writeMask = writeMask;
                      this._isStateInvalied = true;
                    }
                  }
                }
              }, {
                key: "setStencilCompareMask",
                value: function setStencilCompareMask(face, reference, compareMask) {
                  if (!this._curStencilCompareMask) {
                    this._curStencilCompareMask = {
                      face: face,
                      reference: reference,
                      compareMask: compareMask
                    };
                    this._isStateInvalied = true;
                  } else {
                    if (this._curStencilCompareMask.face !== face || this._curStencilCompareMask.reference !== reference || this._curStencilCompareMask.compareMask !== compareMask) {
                      this._curStencilCompareMask.face = face;
                      this._curStencilCompareMask.reference = reference;
                      this._curStencilCompareMask.compareMask = compareMask;
                      this._isStateInvalied = true;
                    }
                  }
                }
              }, {
                key: "draw",
                value: function draw(inputAssembler) {
                  if (this._type === GFXCommandBufferType.PRIMARY && this._isInRenderPass || this._type === GFXCommandBufferType.SECONDARY) {
                    if (this._isStateInvalied) {
                      this.bindStates();
                    }

                    var cmd = this._webGLAllocator.drawCmdPool.alloc(WebGL2CmdDraw); // cmd.drawInfo = inputAssembler;


                    cmd.drawInfo.vertexCount = inputAssembler.vertexCount;
                    cmd.drawInfo.firstVertex = inputAssembler.firstVertex;
                    cmd.drawInfo.indexCount = inputAssembler.indexCount;
                    cmd.drawInfo.firstIndex = inputAssembler.firstIndex;
                    cmd.drawInfo.vertexOffset = inputAssembler.vertexOffset;
                    cmd.drawInfo.instanceCount = inputAssembler.instanceCount;
                    cmd.drawInfo.firstInstance = inputAssembler.firstInstance;
                    this.cmdPackage.drawCmds.push(cmd);
                    this.cmdPackage.cmds.push(WebGL2Cmd.DRAW);
                    ++this._numDrawCalls;
                    this._numInstances += inputAssembler.instanceCount;
                    var indexCount = inputAssembler.indexCount || inputAssembler.vertexCount;

                    if (this._curGPUPipelineState) {
                      var glPrimitive = this._curGPUPipelineState.glPrimitive;

                      switch (glPrimitive) {
                        case 0x0004:
                          {
                            // WebGLRenderingContext.TRIANGLES
                            this._numTris += indexCount / 3 * Math.max(inputAssembler.instanceCount, 1);
                            break;
                          }

                        case 0x0005: // WebGLRenderingContext.TRIANGLE_STRIP

                        case 0x0006:
                          {
                            // WebGLRenderingContext.TRIANGLE_FAN
                            this._numTris += (indexCount - 2) * Math.max(inputAssembler.instanceCount, 1);
                            break;
                          }
                      }
                    }
                  } else {
                    console.error('Command \'draw\' must be recorded inside a render pass.');
                  }
                }
              }, {
                key: "updateBuffer",
                value: function updateBuffer(buffer, data, offset, size) {
                  if (this._type === GFXCommandBufferType.PRIMARY && !this._isInRenderPass || this._type === GFXCommandBufferType.SECONDARY) {
                    var gpuBuffer = buffer.gpuBuffer;

                    if (gpuBuffer) {
                      var cmd = this._webGLAllocator.updateBufferCmdPool.alloc(WebGL2CmdUpdateBuffer);

                      var buffSize;

                      if (size !== undefined) {
                        buffSize = size;
                      } else if (buffer.usage & GFXBufferUsageBit.INDIRECT) {
                        buffSize = 0;
                      } else {
                        buffSize = data.byteLength;
                      }

                      var buff = data;
                      cmd.gpuBuffer = gpuBuffer;
                      cmd.buffer = buff;
                      cmd.offset = offset !== undefined ? offset : 0;
                      cmd.size = buffSize;
                      this.cmdPackage.updateBufferCmds.push(cmd);
                      this.cmdPackage.cmds.push(WebGL2Cmd.UPDATE_BUFFER);
                    }
                  } else {
                    console.error('Command \'updateBuffer\' must be recorded outside a render pass.');
                  }
                }
              }, {
                key: "copyBuffersToTexture",
                value: function copyBuffersToTexture(buffers, texture, regions) {
                  if (this._type === GFXCommandBufferType.PRIMARY && !this._isInRenderPass || this._type === GFXCommandBufferType.SECONDARY) {
                    var gpuTexture = texture.gpuTexture;

                    if (gpuTexture) {
                      var cmd = this._webGLAllocator.copyBufferToTextureCmdPool.alloc(WebGL2CmdCopyBufferToTexture);

                      cmd.gpuTexture = gpuTexture;
                      cmd.buffers = buffers;
                      cmd.regions = regions;
                      this.cmdPackage.copyBufferToTextureCmds.push(cmd);
                      this.cmdPackage.cmds.push(WebGL2Cmd.COPY_BUFFER_TO_TEXTURE);
                    }
                  } else {
                    console.error('Command \'copyBufferToTexture\' must be recorded outside a render pass.');
                  }
                }
              }, {
                key: "execute",
                value: function execute(cmdBuffs, count) {
                  for (var i = 0; i < count; ++i) {
                    var webGL2CmdBuff = cmdBuffs[i];

                    for (var c = 0; c < webGL2CmdBuff.cmdPackage.beginRenderPassCmds.length; ++c) {
                      var cmd = webGL2CmdBuff.cmdPackage.beginRenderPassCmds.array[c];
                      ++cmd.refCount;
                      this.cmdPackage.beginRenderPassCmds.push(cmd);
                    }

                    for (var _c = 0; _c < webGL2CmdBuff.cmdPackage.bindStatesCmds.length; ++_c) {
                      var _cmd = webGL2CmdBuff.cmdPackage.bindStatesCmds.array[_c];
                      ++_cmd.refCount;
                      this.cmdPackage.bindStatesCmds.push(_cmd);
                    }

                    for (var _c2 = 0; _c2 < webGL2CmdBuff.cmdPackage.drawCmds.length; ++_c2) {
                      var _cmd2 = webGL2CmdBuff.cmdPackage.drawCmds.array[_c2];
                      ++_cmd2.refCount;
                      this.cmdPackage.drawCmds.push(_cmd2);
                    }

                    for (var _c3 = 0; _c3 < webGL2CmdBuff.cmdPackage.updateBufferCmds.length; ++_c3) {
                      var _cmd3 = webGL2CmdBuff.cmdPackage.updateBufferCmds.array[_c3];
                      ++_cmd3.refCount;
                      this.cmdPackage.updateBufferCmds.push(_cmd3);
                    }

                    for (var _c4 = 0; _c4 < webGL2CmdBuff.cmdPackage.copyBufferToTextureCmds.length; ++_c4) {
                      var _cmd4 = webGL2CmdBuff.cmdPackage.copyBufferToTextureCmds.array[_c4];
                      ++_cmd4.refCount;
                      this.cmdPackage.copyBufferToTextureCmds.push(_cmd4);
                    }

                    this.cmdPackage.cmds.concat(webGL2CmdBuff.cmdPackage.cmds.array);
                    this._numDrawCalls += webGL2CmdBuff._numDrawCalls;
                    this._numInstances += webGL2CmdBuff._numInstances;
                    this._numTris += webGL2CmdBuff._numTris;
                  }
                }
              }, {
                key: "bindStates",
                value: function bindStates() {
                  var bindStatesCmd = this._webGLAllocator.bindStatesCmdPool.alloc(WebGL2CmdBindStates);

                  bindStatesCmd.gpuPipelineState = this._curGPUPipelineState;
                  Array.prototype.push.apply(bindStatesCmd.gpuDescriptorSets, this._curGPUDescriptorSets);

                  for (var i = 0; i < this._curDynamicOffsets.length; i++) {
                    Array.prototype.push.apply(bindStatesCmd.dynamicOffsets, this._curDynamicOffsets[i]);
                  }

                  bindStatesCmd.gpuInputAssembler = this._curGPUInputAssembler;
                  bindStatesCmd.viewport = this._curViewport;
                  bindStatesCmd.scissor = this._curScissor;
                  bindStatesCmd.lineWidth = this._curLineWidth;
                  bindStatesCmd.depthBias = this._curDepthBias;
                  Array.prototype.push.apply(bindStatesCmd.blendConstants, this._curBlendConstants);
                  bindStatesCmd.depthBounds = this._curDepthBounds;
                  bindStatesCmd.stencilWriteMask = this._curStencilWriteMask;
                  bindStatesCmd.stencilCompareMask = this._curStencilCompareMask;
                  this.cmdPackage.bindStatesCmds.push(bindStatesCmd);
                  this.cmdPackage.cmds.push(WebGL2Cmd.BIND_STATES);
                  this._isStateInvalied = false;
                }
              }, {
                key: "webGLDevice",
                get: function get() {
                  return this._device;
                }
              }]);

              return WebGL2CommandBuffer;
            }(GFXCommandBuffer);

            var WebGL2Fence = /*#__PURE__*/function (_GFXFence) {
              _inherits(WebGL2Fence, _GFXFence);

              function WebGL2Fence() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, WebGL2Fence);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WebGL2Fence)).call.apply(_getPrototypeOf2, [this].concat(args)));
                _this._sync = null;
                return _this;
              }

              _createClass(WebGL2Fence, [{
                key: "initialize",
                value: function initialize(info) {
                  return true;
                }
              }, {
                key: "destroy",
                value: function destroy() {}
              }, {
                key: "wait",
                value: function wait() {
                  if (this._sync) {
                    var gl = this._device.gl;
                    gl.clientWaitSync(this._sync, 0, gl.TIMEOUT_IGNORED);
                  }
                }
              }, {
                key: "reset",
                value: function reset() {
                  if (this._sync) {
                    var gl = this._device.gl;
                    gl.deleteSync(this._sync);
                    this._sync = null;
                  }
                }
              }, {
                key: "insert",
                value: function insert() {
                  var gl = this._device.gl;

                  if (this._sync) {
                    gl.deleteSync(this._sync);
                  }

                  this._sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
                }
              }]);

              return WebGL2Fence;
            }(GFXFence);

            var WebGL2Framebuffer = /*#__PURE__*/function (_GFXFramebuffer) {
              _inherits(WebGL2Framebuffer, _GFXFramebuffer);

              function WebGL2Framebuffer() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, WebGL2Framebuffer);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WebGL2Framebuffer)).call.apply(_getPrototypeOf2, [this].concat(args)));
                _this._gpuFramebuffer = null;
                return _this;
              }

              _createClass(WebGL2Framebuffer, [{
                key: "initialize",
                value: function initialize(info) {
                  this._renderPass = info.renderPass;
                  this._colorTextures = info.colorTextures || [];
                  this._depthStencilTexture = info.depthStencilTexture || null;

                  if (info.depStencilMipmapLevel && info.depStencilMipmapLevel !== 0) {
                    console.warn('The mipmap level of th texture image to be attached of depth stencil attachment should be 0. Convert to 0.');
                  }

                  if (info.colorMipmapLevels && info.colorMipmapLevels.length > 0) {
                    for (var i = 0; i < info.colorMipmapLevels.length; ++i) {
                      if (info.colorMipmapLevels[i] !== 0) {
                        console.warn("The mipmap level of th texture image to be attached of color attachment ".concat(i, " should be 0. Convert to 0."));
                      }
                    }
                  }

                  var gpuColorTextures = [];

                  if (info.colorTextures !== undefined) {
                    for (var _i = 0; _i < info.colorTextures.length; _i++) {
                      var colorTexture = info.colorTextures[_i];

                      if (colorTexture) {
                        gpuColorTextures.push(colorTexture.gpuTexture);
                      }
                    }
                  }

                  var gpuDepthStencilTexture = null;

                  if (info.depthStencilTexture) {
                    gpuDepthStencilTexture = info.depthStencilTexture.gpuTexture;
                  }

                  this._gpuFramebuffer = {
                    gpuRenderPass: info.renderPass.gpuRenderPass,
                    gpuColorTextures: gpuColorTextures,
                    gpuDepthStencilTexture: gpuDepthStencilTexture,
                    glFramebuffer: null
                  };
                  WebGL2CmdFuncCreateFramebuffer(this._device, this._gpuFramebuffer);
                  return true;
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  if (this._gpuFramebuffer) {
                    WebGL2CmdFuncDestroyFramebuffer(this._device, this._gpuFramebuffer);
                    this._gpuFramebuffer = null;
                  }
                }
              }, {
                key: "gpuFramebuffer",
                get: function get() {
                  return this._gpuFramebuffer;
                }
              }]);

              return WebGL2Framebuffer;
            }(GFXFramebuffer);

            var WebGL2InputAssembler = /*#__PURE__*/function (_GFXInputAssembler) {
              _inherits(WebGL2InputAssembler, _GFXInputAssembler);

              function WebGL2InputAssembler() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, WebGL2InputAssembler);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WebGL2InputAssembler)).call.apply(_getPrototypeOf2, [this].concat(args)));
                _this._gpuInputAssembler = null;
                return _this;
              }

              _createClass(WebGL2InputAssembler, [{
                key: "initialize",
                value: function initialize(info) {
                  if (info.vertexBuffers.length === 0) {
                    console.error('GFXInputAssemblerInfo.vertexBuffers is null.');
                    return false;
                  }

                  this._attributes = info.attributes;
                  this._attributesHash = this.computeAttributesHash();
                  this._vertexBuffers = info.vertexBuffers;

                  if (info.indexBuffer !== undefined) {
                    this._indexBuffer = info.indexBuffer;
                    this._indexCount = this._indexBuffer.size / this._indexBuffer.stride;
                    this._firstIndex = 0;
                  } else {
                    var vertBuff = this._vertexBuffers[0];
                    this._vertexCount = vertBuff.size / vertBuff.stride;
                    this._firstVertex = 0;
                    this._vertexOffset = 0;
                  }

                  this._instanceCount = 0;
                  this._firstInstance = 0;
                  this._indirectBuffer = info.indirectBuffer || null;
                  var gpuVertexBuffers = new Array(info.vertexBuffers.length);

                  for (var i = 0; i < info.vertexBuffers.length; ++i) {
                    var vb = info.vertexBuffers[i];

                    if (vb.gpuBuffer) {
                      gpuVertexBuffers[i] = vb.gpuBuffer;
                    }
                  }

                  var gpuIndexBuffer = null;
                  var glIndexType = 0;

                  if (info.indexBuffer) {
                    gpuIndexBuffer = info.indexBuffer.gpuBuffer;

                    if (gpuIndexBuffer) {
                      switch (gpuIndexBuffer.stride) {
                        case 1:
                          glIndexType = 0x1401;
                          break;
                        // WebGLRenderingContext.UNSIGNED_BYTE

                        case 2:
                          glIndexType = 0x1403;
                          break;
                        // WebGLRenderingContext.UNSIGNED_SHORT

                        case 4:
                          glIndexType = 0x1405;
                          break;
                        // WebGLRenderingContext.UNSIGNED_INT

                        default:
                          {
                            console.error('Illegal index buffer stride.');
                          }
                      }
                    }
                  }

                  var gpuIndirectBuffer = null;

                  if (info.indirectBuffer !== undefined) {
                    gpuIndirectBuffer = info.indirectBuffer.gpuBuffer;
                  }

                  this._gpuInputAssembler = {
                    attributes: info.attributes,
                    gpuVertexBuffers: gpuVertexBuffers,
                    gpuIndexBuffer: gpuIndexBuffer,
                    gpuIndirectBuffer: gpuIndirectBuffer,
                    glAttribs: [],
                    glIndexType: glIndexType,
                    glVAOs: new Map()
                  };
                  WebGL2CmdFuncCreateInputAssember(this._device, this._gpuInputAssembler);
                  return true;
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  var webgl2Dev = this._device;

                  if (this._gpuInputAssembler && webgl2Dev.useVAO) {
                    WebGL2CmdFuncDestroyInputAssembler(webgl2Dev, this._gpuInputAssembler);
                  }

                  this._gpuInputAssembler = null;
                }
              }, {
                key: "gpuInputAssembler",
                get: function get() {
                  return this._gpuInputAssembler;
                }
              }]);

              return WebGL2InputAssembler;
            }(GFXInputAssembler);

            var WebGL2DescriptorSetLayout = /*#__PURE__*/function (_GFXDescriptorSetLayo) {
              _inherits(WebGL2DescriptorSetLayout, _GFXDescriptorSetLayo);

              function WebGL2DescriptorSetLayout() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, WebGL2DescriptorSetLayout);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WebGL2DescriptorSetLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));
                _this._gpuDescriptorSetLayout = null;
                return _this;
              }

              _createClass(WebGL2DescriptorSetLayout, [{
                key: "initialize",
                value: function initialize(info) {
                  Array.prototype.push.apply(this._bindings, info.bindings);
                  var descriptorCount = 0;

                  for (var i = 0; i < this._bindings.length; i++) {
                    var binding = this._bindings[i];

                    this._descriptorIndices.push(descriptorCount);

                    descriptorCount += binding.count;
                  }

                  this._descriptorIndices.push(descriptorCount);

                  var dynamicBindings = [];

                  for (var _i = 0; _i < this._bindings.length; _i++) {
                    var _binding = this._bindings[_i];

                    if (_binding.descriptorType & DESCRIPTOR_DYNAMIC_TYPE) {
                      for (var j = 0; j < _binding.count; j++) {
                        dynamicBindings.push(_i);
                      }
                    }
                  }

                  this._gpuDescriptorSetLayout = {
                    bindings: this._bindings,
                    dynamicBindings: dynamicBindings,
                    descriptorIndices: this._descriptorIndices,
                    descriptorCount: descriptorCount
                  };
                  return true;
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  this._bindings.length = 0;
                }
              }, {
                key: "gpuDescriptorSetLayout",
                get: function get() {
                  return this._gpuDescriptorSetLayout;
                }
              }]);

              return WebGL2DescriptorSetLayout;
            }(GFXDescriptorSetLayout);

            var WebGL2PipelineLayout = /*#__PURE__*/function (_GFXPipelineLayout) {
              _inherits(WebGL2PipelineLayout, _GFXPipelineLayout);

              function WebGL2PipelineLayout() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, WebGL2PipelineLayout);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WebGL2PipelineLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));
                _this._gpuPipelineLayout = null;
                return _this;
              }

              _createClass(WebGL2PipelineLayout, [{
                key: "initialize",
                value: function initialize(info) {
                  Array.prototype.push.apply(this._setLayouts, info.setLayouts);
                  var dynamicOffsetIndices = [];
                  var gpuSetLayouts = [];
                  var dynamicOffsetOffsets = [];
                  var dynamicOffsetCount = 0;
                  var idx = 0;

                  for (var i = 0; i < this._setLayouts.length; i++) {
                    var setLayout = this._setLayouts[i];
                    var dynamicBindings = setLayout.gpuDescriptorSetLayout.dynamicBindings;
                    var bindings = setLayout.bindings;
                    var indices = [];
                    gpuSetLayouts.push(setLayout.gpuDescriptorSetLayout);

                    for (var j = 0, k = 0; j < bindings.length; j++) {
                      if (dynamicBindings[k] === j) {
                        indices.push(idx);

                        while (dynamicBindings[k] === j) {
                          k++, idx++;
                        }
                      } else {
                        indices.push(-1);
                      }
                    }

                    dynamicOffsetIndices.push(indices);
                    dynamicOffsetOffsets.push(dynamicOffsetCount);
                    dynamicOffsetCount += dynamicBindings.length;
                  }

                  this._gpuPipelineLayout = {
                    gpuSetLayouts: gpuSetLayouts,
                    dynamicOffsetCount: dynamicOffsetCount,
                    dynamicOffsetOffsets: dynamicOffsetOffsets,
                    dynamicOffsetIndices: dynamicOffsetIndices
                  };
                  return true;
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  this._setLayouts.length = 0;
                }
              }, {
                key: "gpuPipelineLayout",
                get: function get() {
                  return this._gpuPipelineLayout;
                }
              }]);

              return WebGL2PipelineLayout;
            }(GFXPipelineLayout);

            var WebGLPrimitives = [0x0000, // WebGLRenderingContext.POINTS,
            0x0001, // WebGLRenderingContext.LINES,
            0x0003, // WebGLRenderingContext.LINE_STRIP,
            0x0002, // WebGLRenderingContext.LINE_LOOP,
            0x0000, // WebGLRenderingContext.NONE,
            0x0000, // WebGLRenderingContext.NONE,
            0x0000, // WebGLRenderingContext.NONE,
            0x0004, // WebGLRenderingContext.TRIANGLES,
            0x0005, // WebGLRenderingContext.TRIANGLE_STRIP,
            0x0006, // WebGLRenderingContext.TRIANGLE_FAN,
            0x0000, // WebGLRenderingContext.NONE,
            0x0000, // WebGLRenderingContext.NONE,
            0x0000, // WebGLRenderingContext.NONE,
            0x0000 // WebGLRenderingContext.NONE,
            ];
            var WebGL2PipelineState = /*#__PURE__*/function (_GFXPipelineState) {
              _inherits(WebGL2PipelineState, _GFXPipelineState);

              function WebGL2PipelineState() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, WebGL2PipelineState);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WebGL2PipelineState)).call.apply(_getPrototypeOf2, [this].concat(args)));
                _this._gpuPipelineState = null;
                return _this;
              }

              _createClass(WebGL2PipelineState, [{
                key: "initialize",
                value: function initialize(info) {
                  this._primitive = info.primitive;
                  this._shader = info.shader;
                  this._pipelineLayout = info.pipelineLayout;
                  this._rs = info.rasterizerState;
                  this._dss = info.depthStencilState;
                  this._bs = info.blendState;
                  this._is = info.inputState;
                  this._renderPass = info.renderPass;

                  if (info.dynamicStates !== undefined) {
                    this._dynamicStates = info.dynamicStates;
                  }

                  var dynamicStates = [];

                  for (var i = 0; i < 31; i++) {
                    if (this._dynamicStates & 1 << i) {
                      dynamicStates.push(1 << i);
                    }
                  }

                  this._gpuPipelineState = {
                    glPrimitive: WebGLPrimitives[info.primitive],
                    gpuShader: info.shader.gpuShader,
                    gpuPipelineLayout: info.pipelineLayout.gpuPipelineLayout,
                    rs: info.rasterizerState,
                    dss: info.depthStencilState,
                    bs: info.blendState,
                    gpuRenderPass: info.renderPass.gpuRenderPass,
                    dynamicStates: dynamicStates
                  };
                  return true;
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  this._gpuPipelineState = null;
                }
              }, {
                key: "gpuPipelineState",
                get: function get() {
                  return this._gpuPipelineState;
                }
              }]);

              return WebGL2PipelineState;
            }(GFXPipelineState);

            var _dynamicOffsets = [];
            var WebGL2PrimaryCommandBuffer = /*#__PURE__*/function (_WebGL2CommandBuffer) {
              _inherits(WebGL2PrimaryCommandBuffer, _WebGL2CommandBuffer);

              function WebGL2PrimaryCommandBuffer() {
                _classCallCheck(this, WebGL2PrimaryCommandBuffer);

                return _possibleConstructorReturn(this, _getPrototypeOf(WebGL2PrimaryCommandBuffer).apply(this, arguments));
              }

              _createClass(WebGL2PrimaryCommandBuffer, [{
                key: "beginRenderPass",
                value: function beginRenderPass(renderPass, framebuffer, renderArea, clearColors, clearDepth, clearStencil) {
                  WebGL2CmdFuncBeginRenderPass(this._device, renderPass.gpuRenderPass, framebuffer.gpuFramebuffer, renderArea, clearColors, clearDepth, clearStencil);
                  this._isInRenderPass = true;
                }
              }, {
                key: "draw",
                value: function draw(inputAssembler) {
                  if (this._isInRenderPass) {
                    if (this._isStateInvalied) {
                      this.bindStates();
                    }

                    WebGL2CmdFuncDraw(this._device, inputAssembler);
                    ++this._numDrawCalls;
                    this._numInstances += inputAssembler.instanceCount;
                    var indexCount = inputAssembler.indexCount || inputAssembler.vertexCount;

                    if (this._curGPUPipelineState) {
                      var glPrimitive = this._curGPUPipelineState.glPrimitive;

                      switch (glPrimitive) {
                        case 0x0004:
                          {
                            // WebGLRenderingContext.TRIANGLES
                            this._numTris += indexCount / 3 * Math.max(inputAssembler.instanceCount, 1);
                            break;
                          }

                        case 0x0005: // WebGLRenderingContext.TRIANGLE_STRIP

                        case 0x0006:
                          {
                            // WebGLRenderingContext.TRIANGLE_FAN
                            this._numTris += (indexCount - 2) * Math.max(inputAssembler.instanceCount, 1);
                            break;
                          }
                      }
                    }
                  } else {
                    console.error('Command \'draw\' must be recorded inside a render pass.');
                  }
                }
              }, {
                key: "updateBuffer",
                value: function updateBuffer(buffer, data, offset, size) {
                  if (!this._isInRenderPass) {
                    var gpuBuffer = buffer.gpuBuffer;

                    if (gpuBuffer) {
                      if (offset === undefined) {
                        offset = 0;
                      }

                      var buffSize;

                      if (size !== undefined) {
                        buffSize = size;
                      } else if (buffer.usage & GFXBufferUsageBit.INDIRECT) {
                        buffSize = 0;
                      } else {
                        buffSize = data.byteLength;
                      }

                      WebGL2CmdFuncUpdateBuffer(this._device, gpuBuffer, data, offset, buffSize);
                    }
                  } else {
                    console.error('Command \'updateBuffer\' must be recorded outside a render pass.');
                  }
                }
              }, {
                key: "copyBuffersToTexture",
                value: function copyBuffersToTexture(buffers, texture, regions) {
                  if (!this._isInRenderPass) {
                    var gpuTexture = texture.gpuTexture;

                    if (gpuTexture) {
                      WebGL2CmdFuncCopyBuffersToTexture(this._device, buffers, gpuTexture, regions);
                    }
                  } else {
                    console.error('Command \'copyBufferToTexture\' must be recorded outside a render pass.');
                  }
                }
              }, {
                key: "execute",
                value: function execute(cmdBuffs, count) {
                  for (var i = 0; i < count; ++i) {
                    // actually they are secondary buffers, the cast here is only for type checking
                    var webGL2CmdBuff = cmdBuffs[i];
                    WebGL2CmdFuncExecuteCmds(this._device, webGL2CmdBuff.cmdPackage);
                    this._numDrawCalls += webGL2CmdBuff._numDrawCalls;
                    this._numInstances += webGL2CmdBuff._numInstances;
                    this._numTris += webGL2CmdBuff._numTris;
                  }
                }
              }, {
                key: "bindStates",
                value: function bindStates() {
                  _dynamicOffsets.length = 0;

                  for (var i = 0; i < this._curDynamicOffsets.length; i++) {
                    Array.prototype.push.apply(_dynamicOffsets, this._curDynamicOffsets[i]);
                  }

                  WebGL2CmdFuncBindStates(this._device, this._curGPUPipelineState, this._curGPUInputAssembler, this._curGPUDescriptorSets, _dynamicOffsets, this._curViewport, this._curScissor, this._curLineWidth, this._curDepthBias, this._curBlendConstants, this._curDepthBounds, this._curStencilWriteMask, this._curStencilCompareMask);
                  this._isStateInvalied = false;
                }
              }]);

              return WebGL2PrimaryCommandBuffer;
            }(WebGL2CommandBuffer);

            var WebGL2Queue = /*#__PURE__*/function (_GFXQueue) {
              _inherits(WebGL2Queue, _GFXQueue);

              function WebGL2Queue() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, WebGL2Queue);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WebGL2Queue)).call.apply(_getPrototypeOf2, [this].concat(args)));
                _this.numDrawCalls = 0;
                _this.numInstances = 0;
                _this.numTris = 0;
                return _this;
              }

              _createClass(WebGL2Queue, [{
                key: "initialize",
                value: function initialize(info) {
                  this._type = info.type;
                  return true;
                }
              }, {
                key: "destroy",
                value: function destroy() {}
              }, {
                key: "submit",
                value: function submit(cmdBuffs, fence) {
                  // TODO: Async
                  if (!this._isAsync) {
                    for (var i = 0; i < cmdBuffs.length; i++) {
                      var cmdBuff = cmdBuffs[i]; // WebGL2CmdFuncExecuteCmds(this._device as WebGL2Device, cmdBuff.cmdPackage); // opted out

                      this.numDrawCalls += cmdBuff.numDrawCalls;
                      this.numInstances += cmdBuff.numInstances;
                      this.numTris += cmdBuff.numTris;
                    }
                  }

                  if (fence) {
                    fence.insert();
                  }
                }
              }, {
                key: "clear",
                value: function clear() {
                  this.numDrawCalls = 0;
                  this.numInstances = 0;
                  this.numTris = 0;
                }
              }]);

              return WebGL2Queue;
            }(GFXQueue);

            var WebGL2RenderPass = /*#__PURE__*/function (_GFXRenderPass) {
              _inherits(WebGL2RenderPass, _GFXRenderPass);

              function WebGL2RenderPass() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, WebGL2RenderPass);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WebGL2RenderPass)).call.apply(_getPrototypeOf2, [this].concat(args)));
                _this._gpuRenderPass = null;
                return _this;
              }

              _createClass(WebGL2RenderPass, [{
                key: "initialize",
                value: function initialize(info) {
                  this._colorInfos = info.colorAttachments;
                  this._depthStencilInfo = info.depthStencilAttachment;

                  if (info.subPasses) {
                    this._subPasses = info.subPasses;
                  }

                  this._gpuRenderPass = {
                    colorAttachments: this._colorInfos,
                    depthStencilAttachment: this._depthStencilInfo
                  };
                  this._hash = this.computeHash();
                  return true;
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  this._gpuRenderPass = null;
                }
              }, {
                key: "gpuRenderPass",
                get: function get() {
                  return this._gpuRenderPass;
                }
              }]);

              return WebGL2RenderPass;
            }(GFXRenderPass);

            var WebGL2Sampler = /*#__PURE__*/function (_GFXSampler) {
              _inherits(WebGL2Sampler, _GFXSampler);

              function WebGL2Sampler() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, WebGL2Sampler);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WebGL2Sampler)).call.apply(_getPrototypeOf2, [this].concat(args)));
                _this._gpuSampler = null;
                return _this;
              }

              _createClass(WebGL2Sampler, [{
                key: "initialize",
                value: function initialize(info) {
                  if (info.name !== undefined) {
                    this._state.name = info.name;
                  }

                  if (info.minFilter !== undefined) {
                    this._state.minFilter = info.minFilter;
                  }

                  if (info.magFilter !== undefined) {
                    this._state.magFilter = info.magFilter;
                  }

                  if (info.mipFilter !== undefined) {
                    this._state.mipFilter = info.mipFilter;
                  }

                  if (info.addressU !== undefined) {
                    this._state.addressU = info.addressU;
                  }

                  if (info.addressV !== undefined) {
                    this._state.addressV = info.addressV;
                  }

                  if (info.addressW !== undefined) {
                    this._state.addressW = info.addressW;
                  }

                  if (info.maxAnisotropy !== undefined) {
                    this._state.maxAnisotropy = info.maxAnisotropy;
                  }

                  if (info.cmpFunc !== undefined) {
                    this._state.cmpFunc = info.cmpFunc;
                  }

                  if (info.borderColor !== undefined) {
                    this._state.borderColor = info.borderColor;
                  }

                  if (info.minLOD !== undefined) {
                    this._state.minLOD = info.minLOD;
                  }

                  if (info.maxLOD !== undefined) {
                    this._state.maxLOD = info.maxLOD;
                  }

                  if (info.mipLODBias !== undefined) {
                    this._state.mipLODBias = info.mipLODBias;
                  }

                  this._gpuSampler = {
                    glSampler: null,
                    minFilter: this._state.minFilter,
                    magFilter: this._state.magFilter,
                    mipFilter: this._state.mipFilter,
                    addressU: this._state.addressU,
                    addressV: this._state.addressV,
                    addressW: this._state.addressW,
                    minLOD: this._state.minLOD,
                    maxLOD: this._state.maxLOD,
                    glMinFilter: 0,
                    glMagFilter: 0,
                    glWrapS: 0,
                    glWrapT: 0,
                    glWrapR: 0
                  };
                  WebGL2CmdFuncCreateSampler(this._device, this._gpuSampler);
                  return true;
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  if (this._gpuSampler) {
                    WebGL2CmdFuncDestroySampler(this._device, this._gpuSampler);
                    this._gpuSampler = null;
                  }
                }
              }, {
                key: "gpuSampler",
                get: function get() {
                  return this._gpuSampler;
                }
              }]);

              return WebGL2Sampler;
            }(GFXSampler);

            var WebGL2Shader = /*#__PURE__*/function (_GFXShader) {
              _inherits(WebGL2Shader, _GFXShader);

              function WebGL2Shader() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, WebGL2Shader);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WebGL2Shader)).call.apply(_getPrototypeOf2, [this].concat(args)));
                _this._gpuShader = null;
                return _this;
              }

              _createClass(WebGL2Shader, [{
                key: "initialize",
                value: function initialize(info) {
                  this._name = info.name;
                  this._stages = info.stages;
                  this._attributes = info.attributes;
                  this._blocks = info.blocks;
                  this._samplers = info.samplers;
                  this._gpuShader = {
                    name: info.name ? info.name : '',
                    blocks: info.blocks !== undefined ? info.blocks : [],
                    samplers: info.samplers !== undefined ? info.samplers : [],
                    gpuStages: new Array(info.stages.length),
                    glProgram: null,
                    glInputs: [],
                    glUniforms: [],
                    glBlocks: [],
                    glSamplers: []
                  };

                  for (var i = 0; i < info.stages.length; ++i) {
                    var stage = info.stages[i];
                    this._gpuShader.gpuStages[i] = {
                      type: stage.stage,
                      source: stage.source,
                      glShader: null
                    };
                  }

                  WebGL2CmdFuncCreateShader(this._device, this._gpuShader);
                  return true;
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  if (this._gpuShader) {
                    WebGL2CmdFuncDestroyShader(this._device, this._gpuShader);
                    this._gpuShader = null;
                  }
                }
              }, {
                key: "gpuShader",
                get: function get() {
                  return this._gpuShader;
                }
              }]);

              return WebGL2Shader;
            }(GFXShader);

            var WebGL2StateCache = function WebGL2StateCache() {
              _classCallCheck(this, WebGL2StateCache);

              this.glArrayBuffer = null;
              this.glElementArrayBuffer = null;
              this.glUniformBuffer = null;
              this.glBindUBOs = void 0;
              this.glBindUBOOffsets = void 0;
              this.glVAO = null;
              this.texUnit = 0;
              this.glTexUnits = void 0;
              this.glSamplerUnits = void 0;
              this.glRenderbuffer = null;
              this.glFramebuffer = null;
              this.glReadFramebuffer = null;
              this.viewport = void 0;
              this.scissorRect = void 0;
              this.rs = void 0;
              this.dss = void 0;
              this.bs = void 0;
              this.glProgram = null;
              this.glEnabledAttribLocs = void 0;
              this.glCurrentAttribLocs = void 0;
              this.glBindUBOs = new Array(GFX_MAX_BUFFER_BINDINGS);
              this.glBindUBOs.fill(null);
              this.glBindUBOOffsets = new Array(GFX_MAX_BUFFER_BINDINGS);
              this.glBindUBOOffsets.fill(0);
              this.glTexUnits = new Array(GFX_MAX_TEXTURE_UNITS);
              this.glSamplerUnits = new Array(GFX_MAX_TEXTURE_UNITS);
              this.glSamplerUnits.fill(null);
              this.viewport = {
                left: 0.0,
                top: 0.0,
                width: 0.0,
                height: 0.0,
                minDepth: 0.0,
                maxDepth: 0.0
              };
              this.scissorRect = {
                x: 0.0,
                y: 0.0,
                width: 0.0,
                height: 0.0
              };
              this.rs = new GFXRasterizerState();
              this.dss = new GFXDepthStencilState();
              this.bs = new GFXBlendState();
              this.glEnabledAttribLocs = new Array(GFX_MAX_VERTEX_ATTRIBUTES);
              this.glCurrentAttribLocs = new Array(GFX_MAX_VERTEX_ATTRIBUTES);
              this.glEnabledAttribLocs.fill(false);
              this.glCurrentAttribLocs.fill(false);

              for (var i = 0; i < GFX_MAX_TEXTURE_UNITS; ++i) {
                this.glTexUnits[i] = {
                  glTexture: null
                };
              }
            };

            var WebGL2Texture = /*#__PURE__*/function (_GFXTexture) {
              _inherits(WebGL2Texture, _GFXTexture);

              function WebGL2Texture() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, WebGL2Texture);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WebGL2Texture)).call.apply(_getPrototypeOf2, [this].concat(args)));
                _this._gpuTexture = null;
                return _this;
              }

              _createClass(WebGL2Texture, [{
                key: "initialize",
                value: function initialize(info) {
                  if ('texture' in info) {
                    console.log('WebGL2 does not support texture view.');
                    return false;
                  }

                  this._type = info.type;
                  this._usage = info.usage;
                  this._format = info.format;
                  this._width = info.width;
                  this._height = info.height;

                  if (info.depth !== undefined) {
                    this._depth = info.depth;
                  }

                  if (info.layerCount !== undefined) {
                    this._layerCount = info.layerCount;
                  }

                  if (info.levelCount !== undefined) {
                    this._levelCount = info.levelCount;
                  }

                  if (info.samples !== undefined) {
                    this._samples = info.samples;
                  }

                  if (info.flags !== undefined) {
                    this._flags = info.flags;
                  }

                  this._isPowerOf2 = IsPowerOf2(this._width) && IsPowerOf2(this._height);
                  this._size = GFXFormatSurfaceSize(this._format, this.width, this.height, this.depth, this._levelCount) * this._layerCount;

                  if (this._flags & GFXTextureFlagBit.BAKUP_BUFFER) {
                    this._buffer = new ArrayBuffer(this._size);
                  }

                  this._gpuTexture = {
                    type: this._type,
                    format: this._format,
                    usage: this._usage,
                    width: this._width,
                    height: this._height,
                    depth: this._depth,
                    size: this._size,
                    arrayLayer: this._layerCount,
                    mipLevel: this._levelCount,
                    samples: this._samples,
                    flags: this._flags,
                    isPowerOf2: this._isPowerOf2,
                    glTarget: 0,
                    glInternalFmt: 0,
                    glFormat: 0,
                    glType: 0,
                    glUsage: 0,
                    glTexture: null,
                    glRenderbuffer: null,
                    glWrapS: 0,
                    glWrapT: 0,
                    glMinFilter: 0,
                    glMagFilter: 0
                  };
                  WebGL2CmdFuncCreateTexture(this._device, this._gpuTexture);
                  this._device.memoryStatus.textureSize += this._size;
                  return true;
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  if (this._gpuTexture) {
                    WebGL2CmdFuncDestroyTexture(this._device, this._gpuTexture);
                    this._device.memoryStatus.textureSize -= this._size;
                    this._gpuTexture = null;
                  }

                  this._buffer = null;
                }
              }, {
                key: "resize",
                value: function resize(width, height) {
                  var oldSize = this._size;
                  this._width = width;
                  this._height = height;
                  this._size = GFXFormatSurfaceSize(this._format, this.width, this.height, this.depth, this._levelCount) * this._layerCount;

                  if (this._gpuTexture) {
                    this._gpuTexture.width = width;
                    this._gpuTexture.height = height;
                    this._gpuTexture.size = this._size;
                    WebGL2CmdFuncResizeTexture(this._device, this._gpuTexture);
                    this._device.memoryStatus.textureSize -= oldSize;
                    this._device.memoryStatus.textureSize += this._size;
                  }
                }
              }, {
                key: "gpuTexture",
                get: function get() {
                  return this._gpuTexture;
                }
              }]);

              return WebGL2Texture;
            }(GFXTexture);

            var eventWebGLContextLost = 'webglcontextlost';
            var WebGL2Device = exports('WebGL2Device', /*#__PURE__*/function (_GFXDevice) {
              _inherits(WebGL2Device, _GFXDevice);

              function WebGL2Device() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, WebGL2Device);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WebGL2Device)).call.apply(_getPrototypeOf2, [this].concat(args)));
                _this.stateCache = new WebGL2StateCache();
                _this.cmdAllocator = new WebGL2CommandAllocator();
                _this.nullTex2D = null;
                _this.nullTexCube = null;
                _this._webGL2RC = null;
                _this._isAntialias = true;
                _this._isPremultipliedAlpha = true;
                _this._useVAO = true;
                _this._bindingMappingInfo = new GFXBindingMappingInfo();
                _this._webGLContextLostHandler = null;
                _this._extensions = null;
                _this._EXT_texture_filter_anisotropic = null;
                _this._OES_texture_float_linear = null;
                _this._OES_texture_half_float_linear = null;
                _this._EXT_color_buffer_float = null;
                _this._EXT_disjoint_timer_query_webgl2 = null;
                _this._WEBGL_compressed_texture_etc1 = null;
                _this._WEBGL_compressed_texture_etc = null;
                _this._WEBGL_compressed_texture_pvrtc = null;
                _this._WEBGL_compressed_texture_astc = null;
                _this._WEBGL_compressed_texture_s3tc = null;
                _this._WEBGL_compressed_texture_s3tc_srgb = null;
                _this._WEBGL_debug_renderer_info = null;
                _this._WEBGL_texture_storage_multisample = null;
                _this._WEBGL_debug_shaders = null;
                _this._WEBGL_lose_context = null;
                return _this;
              }

              _createClass(WebGL2Device, [{
                key: "initialize",
                value: function initialize(info) {
                  this._canvas = info.canvasElm;

                  if (info.isAntialias !== undefined) {
                    this._isAntialias = info.isAntialias;
                  }

                  if (info.isPremultipliedAlpha !== undefined) {
                    this._isPremultipliedAlpha = info.isPremultipliedAlpha;
                  }

                  if (info.bindingMappingInfo !== undefined) {
                    this._bindingMappingInfo = info.bindingMappingInfo;
                  }

                  if (!this._bindingMappingInfo.bufferOffsets.length) this._bindingMappingInfo.bufferOffsets.push(0);
                  if (!this._bindingMappingInfo.samplerOffsets.length) this._bindingMappingInfo.samplerOffsets.push(0);

                  try {
                    var webGLCtxAttribs = {
                      alpha: macro.ENABLE_TRANSPARENT_CANVAS,
                      antialias: this._isAntialias,
                      depth: true,
                      stencil: true,
                      premultipliedAlpha: this._isPremultipliedAlpha,
                      preserveDrawingBuffer: false,
                      powerPreference: 'default',
                      failIfMajorPerformanceCaveat: false
                    };
                    this._webGL2RC = this._canvas.getContext('webgl2', webGLCtxAttribs);
                  } catch (err) {
                    console.warn(err);
                    return false;
                  }

                  if (!this._webGL2RC) {
                    console.warn('This device does not support WebGL2.');
                    return false;
                  }

                  this._webGLContextLostHandler = this._onWebGLContextLost.bind(this);

                  this._canvas.addEventListener(eventWebGLContextLost, this._onWebGLContextLost);

                  this._canvas2D = document.createElement('canvas');
                  console.info('WebGL2 device initialized.');
                  this._gfxAPI = GFXAPI.WEBGL2;
                  this._deviceName = 'WebGL2';
                  var gl = this._webGL2RC;
                  this._WEBGL_debug_renderer_info = this.getExtension('WEBGL_debug_renderer_info');

                  if (this._WEBGL_debug_renderer_info) {
                    this._renderer = gl.getParameter(this._WEBGL_debug_renderer_info.UNMASKED_RENDERER_WEBGL);
                    this._vendor = gl.getParameter(this._WEBGL_debug_renderer_info.UNMASKED_VENDOR_WEBGL);
                  } else {
                    this._renderer = gl.getParameter(gl.RENDERER);
                    this._vendor = gl.getParameter(gl.VENDOR);
                  }

                  this._version = gl.getParameter(gl.VERSION);
                  this._maxVertexAttributes = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
                  this._maxVertexUniformVectors = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);
                  this._maxFragmentUniformVectors = gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS);
                  this._maxTextureUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
                  this._maxVertexTextureUnits = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
                  this._maxUniformBufferBindings = gl.getParameter(gl.MAX_UNIFORM_BUFFER_BINDINGS);
                  this._maxUniformBlockSize = gl.getParameter(gl.MAX_UNIFORM_BLOCK_SIZE);
                  this._maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
                  this._maxCubeMapTextureSize = gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
                  this._uboOffsetAlignment = gl.getParameter(gl.UNIFORM_BUFFER_OFFSET_ALIGNMENT);
                  this._depthBits = gl.getParameter(gl.DEPTH_BITS);
                  this._stencilBits = gl.getParameter(gl.STENCIL_BITS); // let maxVertexUniformBlocks = gl.getParameter(gl.MAX_VERTEX_UNIFORM_BLOCKS);
                  // let maxFragmentUniformBlocks = gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_BLOCKS);

                  this._devicePixelRatio = info.devicePixelRatio || 1.0;
                  this._width = this._canvas.width;
                  this._height = this._canvas.height;
                  this._nativeWidth = Math.max(info.nativeWidth || this._width, 0);
                  this._nativeHeight = Math.max(info.nativeHeight || this._height, 0);
                  this._colorFmt = GFXFormat.RGBA8;

                  if (this._depthBits === 32) {
                    if (this._stencilBits === 8) {
                      this._depthStencilFmt = GFXFormat.D32F_S8;
                    } else {
                      this._depthStencilFmt = GFXFormat.D32F;
                    }
                  } else if (this._depthBits === 24) {
                    if (this._stencilBits === 8) {
                      this._depthStencilFmt = GFXFormat.D24S8;
                    } else {
                      this._depthStencilFmt = GFXFormat.D24;
                    }
                  } else {
                    if (this._stencilBits === 8) {
                      this._depthStencilFmt = GFXFormat.D16S8;
                    } else {
                      this._depthStencilFmt = GFXFormat.D16;
                    }
                  }

                  this._extensions = gl.getSupportedExtensions();
                  var extensions = '';

                  if (this._extensions) {
                    for (var _iterator = _createForOfIteratorHelperLoose(this._extensions), _step; !(_step = _iterator()).done;) {
                      var ext = _step.value;
                      extensions += ext + ' ';
                    }

                    console.debug('EXTENSIONS: ' + extensions);
                  }

                  this._EXT_texture_filter_anisotropic = this.getExtension('EXT_texture_filter_anisotropic');
                  this._EXT_color_buffer_float = this.getExtension('EXT_color_buffer_float');
                  this._EXT_disjoint_timer_query_webgl2 = this.getExtension('EXT_disjoint_timer_query_webgl2');
                  this._OES_texture_float_linear = this.getExtension('OES_texture_float_linear');
                  this._OES_texture_half_float_linear = this.getExtension('OES_texture_half_float_linear');
                  this._WEBGL_compressed_texture_etc1 = this.getExtension('WEBGL_compressed_texture_etc1');
                  this._WEBGL_compressed_texture_etc = this.getExtension('WEBGL_compressed_texture_etc');
                  this._WEBGL_compressed_texture_pvrtc = this.getExtension('WEBGL_compressed_texture_pvrtc');
                  this._WEBGL_compressed_texture_astc = this.getExtension('WEBGL_compressed_texture_astc');
                  this._WEBGL_compressed_texture_s3tc = this.getExtension('WEBGL_compressed_texture_s3tc');
                  this._WEBGL_compressed_texture_s3tc_srgb = this.getExtension('WEBGL_compressed_texture_s3tc_srgb');
                  this._WEBGL_texture_storage_multisample = this.getExtension('WEBGL_texture_storage_multisample');
                  this._WEBGL_debug_shaders = this.getExtension('WEBGL_debug_shaders');
                  this._WEBGL_lose_context = this.getExtension('WEBGL_lose_context');

                  this._features.fill(false);

                  this._features[GFXFeature.TEXTURE_FLOAT] = true;
                  this._features[GFXFeature.TEXTURE_HALF_FLOAT] = true;
                  this._features[GFXFeature.FORMAT_R11G11B10F] = true;
                  this._features[GFXFeature.FORMAT_RGB8] = true;
                  this._features[GFXFeature.FORMAT_D16] = true;
                  this._features[GFXFeature.FORMAT_D24] = true;
                  this._features[GFXFeature.FORMAT_D32F] = true;
                  this._features[GFXFeature.FORMAT_D24S8] = true;
                  this._features[GFXFeature.FORMAT_D32FS8] = true;
                  this._features[GFXFeature.MSAA] = true;
                  this._features[GFXFeature.ELEMENT_INDEX_UINT] = true;
                  this._features[GFXFeature.INSTANCED_ARRAYS] = true;

                  if (this._EXT_color_buffer_float) {
                    this._features[GFXFeature.COLOR_FLOAT] = true;
                    this._features[GFXFeature.COLOR_HALF_FLOAT] = true;
                  }

                  if (this._OES_texture_float_linear) {
                    this._features[GFXFeature.TEXTURE_FLOAT_LINEAR] = true;
                  }

                  if (this._OES_texture_half_float_linear) {
                    this._features[GFXFeature.TEXTURE_HALF_FLOAT_LINEAR] = true;
                  }

                  var compressedFormat = '';

                  if (this._WEBGL_compressed_texture_etc1) {
                    this._features[GFXFeature.FORMAT_ETC1] = true;
                    compressedFormat += 'etc1 ';
                  }

                  if (this._WEBGL_compressed_texture_etc) {
                    this._features[GFXFeature.FORMAT_ETC2] = true;
                    compressedFormat += 'etc2 ';
                  }

                  if (this._WEBGL_compressed_texture_s3tc) {
                    this._features[GFXFeature.FORMAT_DXT] = true;
                    compressedFormat += 'dxt ';
                  }

                  if (this._WEBGL_compressed_texture_pvrtc) {
                    this._features[GFXFeature.FORMAT_PVRTC] = true;
                    compressedFormat += 'pvrtc ';
                  }

                  if (this._WEBGL_compressed_texture_astc) {
                    this._features[GFXFeature.FORMAT_ASTC] = true;
                    compressedFormat += 'astc ';
                  }

                  console.info('RENDERER: ' + this._renderer);
                  console.info('VENDOR: ' + this._vendor);
                  console.info('VERSION: ' + this._version);
                  console.info('DPR: ' + this._devicePixelRatio);
                  console.info('SCREEN_SIZE: ' + this._width + ' x ' + this._height);
                  console.info('NATIVE_SIZE: ' + this._nativeWidth + ' x ' + this._nativeHeight);
                  console.info('MAX_VERTEX_ATTRIBS: ' + this._maxVertexAttributes);
                  console.info('MAX_VERTEX_UNIFORM_VECTORS: ' + this._maxVertexUniformVectors);
                  console.info('MAX_FRAGMENT_UNIFORM_VECTORS: ' + this._maxFragmentUniformVectors);
                  console.info('MAX_TEXTURE_IMAGE_UNITS: ' + this._maxTextureUnits);
                  console.info('MAX_VERTEX_TEXTURE_IMAGE_UNITS: ' + this._maxVertexTextureUnits);
                  console.info('MAX_UNIFORM_BUFFER_BINDINGS: ' + this._maxUniformBufferBindings);
                  console.info('MAX_UNIFORM_BLOCK_SIZE: ' + this._maxUniformBlockSize);
                  console.info('DEPTH_BITS: ' + this._depthBits);
                  console.info('STENCIL_BITS: ' + this._stencilBits);
                  console.info('UNIFORM_BUFFER_OFFSET_ALIGNMENT: ' + this._uboOffsetAlignment);

                  if (this._EXT_texture_filter_anisotropic) {
                    console.info('MAX_TEXTURE_MAX_ANISOTROPY_EXT: ' + this._EXT_texture_filter_anisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                  }

                  console.info('USE_VAO: ' + this._useVAO);
                  console.info('COMPRESSED_FORMAT: ' + compressedFormat); // init states

                  this.initStates(gl); // create queue

                  this._queue = this.createQueue({
                    type: GFXQueueType.GRAPHICS
                  }); // create default null texture

                  this.nullTex2D = new WebGL2Texture(this);
                  this.nullTex2D.initialize({
                    type: GFXTextureType.TEX2D,
                    usage: GFXTextureUsageBit.SAMPLED,
                    format: GFXFormat.RGBA8,
                    width: 2,
                    height: 2,
                    flags: GFXTextureFlagBit.GEN_MIPMAP
                  });
                  this.nullTexCube = new WebGL2Texture(this);
                  this.nullTexCube.initialize({
                    type: GFXTextureType.TEX2D,
                    usage: GFXTextureUsageBit.SAMPLED,
                    format: GFXFormat.RGBA8,
                    width: 2,
                    height: 2,
                    layerCount: 6,
                    flags: GFXTextureFlagBit.CUBEMAP | GFXTextureFlagBit.GEN_MIPMAP
                  });
                  var nullTexRegion = {
                    buffStride: 0,
                    buffTexHeight: 0,
                    texOffset: {
                      x: 0,
                      y: 0,
                      z: 0
                    },
                    texExtent: {
                      width: 2,
                      height: 2,
                      depth: 1
                    },
                    texSubres: {
                      mipLevel: 0,
                      baseArrayLayer: 0,
                      layerCount: 1
                    }
                  };
                  var nullTexBuff = new Uint8Array(this.nullTex2D.size);
                  nullTexBuff.fill(0);
                  this.copyBuffersToTexture([nullTexBuff], this.nullTex2D, [nullTexRegion]);
                  nullTexRegion.texSubres.layerCount = 6;
                  this.copyBuffersToTexture([nullTexBuff, nullTexBuff, nullTexBuff, nullTexBuff, nullTexBuff, nullTexBuff], this.nullTexCube, [nullTexRegion]);
                  return true;
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  if (this._canvas && this._webGLContextLostHandler) {
                    this._canvas.removeEventListener(eventWebGLContextLost, this._webGLContextLostHandler);

                    this._webGLContextLostHandler = null;
                  }

                  if (this.nullTex2D) {
                    this.nullTex2D.destroy();
                    this.nullTex2D = null;
                  }

                  if (this.nullTexCube) {
                    this.nullTexCube.destroy();
                    this.nullTexCube = null;
                  } // for (let i = 0; i < this._primaries.length; i++) {
                  //     this._primaries[i].destroy();
                  // }
                  // this._nextPrimary = this._primaries.length = 0;
                  // for (let i = 0; i < this._secondaries.length; i++) {
                  //     this._secondaries[i].destroy();
                  // }
                  // this._nextSecondary = this._secondaries.length = 0;


                  if (this._queue) {
                    this._queue.destroy();

                    this._queue = null;
                  }

                  this._extensions = null;
                  this._webGL2RC = null;
                }
              }, {
                key: "resize",
                value: function resize(width, height) {
                  if (this._width !== width || this._height !== height) {
                    console.info('Resizing device: ' + width + 'x' + height);
                    this._canvas.width = width;
                    this._canvas.height = height;
                    this._width = width;
                    this._height = height;
                  }
                }
              }, {
                key: "acquire",
                value: function acquire() {
                  this.cmdAllocator.releaseCmds();
                }
              }, {
                key: "present",
                value: function present() {
                  var queue = this._queue;
                  this._numDrawCalls = queue.numDrawCalls;
                  this._numInstances = queue.numInstances;
                  this._numTris = queue.numTris;
                  queue.clear();
                }
              }, {
                key: "createCommandBuffer",
                value: function createCommandBuffer(info) {
                  // const ctor = WebGLCommandBuffer; // opt to instant invocation
                  var ctor = info.type === GFXCommandBufferType.PRIMARY ? WebGL2PrimaryCommandBuffer : WebGL2CommandBuffer;
                  var cmdBuff = new ctor(this);

                  if (cmdBuff.initialize(info)) {
                    return cmdBuff;
                  }

                  return null;
                }
              }, {
                key: "createBuffer",
                value: function createBuffer(info) {
                  var buffer = new WebGL2Buffer(this);

                  if (buffer.initialize(info)) {
                    return buffer;
                  }

                  return null;
                }
              }, {
                key: "createTexture",
                value: function createTexture(info) {
                  var texture = new WebGL2Texture(this);

                  if (texture.initialize(info)) {
                    return texture;
                  }

                  return null;
                }
              }, {
                key: "createSampler",
                value: function createSampler(info) {
                  var sampler = new WebGL2Sampler(this);

                  if (sampler.initialize(info)) {
                    return sampler;
                  }

                  return null;
                }
              }, {
                key: "createDescriptorSet",
                value: function createDescriptorSet(info) {
                  var descriptorSet = new WebGL2DescriptorSet(this);

                  if (descriptorSet.initialize(info)) {
                    return descriptorSet;
                  }

                  return null;
                }
              }, {
                key: "createShader",
                value: function createShader(info) {
                  var shader = new WebGL2Shader(this);

                  if (shader.initialize(info)) {
                    return shader;
                  }

                  return null;
                }
              }, {
                key: "createInputAssembler",
                value: function createInputAssembler(info) {
                  var inputAssembler = new WebGL2InputAssembler(this);

                  if (inputAssembler.initialize(info)) {
                    return inputAssembler;
                  }

                  return null;
                }
              }, {
                key: "createRenderPass",
                value: function createRenderPass(info) {
                  var renderPass = new WebGL2RenderPass(this);

                  if (renderPass.initialize(info)) {
                    return renderPass;
                  }

                  return null;
                }
              }, {
                key: "createFramebuffer",
                value: function createFramebuffer(info) {
                  var framebuffer = new WebGL2Framebuffer(this);

                  if (framebuffer.initialize(info)) {
                    return framebuffer;
                  }

                  return null;
                }
              }, {
                key: "createDescriptorSetLayout",
                value: function createDescriptorSetLayout(info) {
                  var descriptorSetLayout = new WebGL2DescriptorSetLayout(this);

                  if (descriptorSetLayout.initialize(info)) {
                    return descriptorSetLayout;
                  }

                  return null;
                }
              }, {
                key: "createPipelineLayout",
                value: function createPipelineLayout(info) {
                  var pipelineLayout = new WebGL2PipelineLayout(this);

                  if (pipelineLayout.initialize(info)) {
                    return pipelineLayout;
                  }

                  return null;
                }
              }, {
                key: "createPipelineState",
                value: function createPipelineState(info) {
                  var pipelineState = new WebGL2PipelineState(this);

                  if (pipelineState.initialize(info)) {
                    return pipelineState;
                  }

                  return null;
                }
              }, {
                key: "createFence",
                value: function createFence(info) {
                  var fence = new WebGL2Fence(this);

                  if (fence.initialize(info)) {
                    return fence;
                  }

                  return null;
                }
              }, {
                key: "createQueue",
                value: function createQueue(info) {
                  var queue = new WebGL2Queue(this);

                  if (queue.initialize(info)) {
                    return queue;
                  }

                  return null;
                }
              }, {
                key: "copyBuffersToTexture",
                value: function copyBuffersToTexture(buffers, texture, regions) {
                  WebGL2CmdFuncCopyBuffersToTexture(this, buffers, texture.gpuTexture, regions);
                }
              }, {
                key: "copyTexImagesToTexture",
                value: function copyTexImagesToTexture(texImages, texture, regions) {
                  WebGL2CmdFuncCopyTexImagesToTexture(this, texImages, texture.gpuTexture, regions);
                }
              }, {
                key: "copyFramebufferToBuffer",
                value: function copyFramebufferToBuffer(srcFramebuffer, dstBuffer, regions) {
                  var gl = this._webGL2RC;
                  var gpuFramebuffer = srcFramebuffer.gpuFramebuffer;
                  var format = gpuFramebuffer.gpuColorTextures[0].format;
                  var glFormat = GFXFormatToWebGLFormat(format, gl);
                  var glType = GFXFormatToWebGLType(format, gl);
                  var ctor = getTypedArrayConstructor(GFXFormatInfos[format]);
                  var curFBO = this.stateCache.glFramebuffer;

                  if (this.stateCache.glFramebuffer !== gpuFramebuffer.glFramebuffer) {
                    gl.bindFramebuffer(gl.FRAMEBUFFER, gpuFramebuffer.glFramebuffer);
                    this.stateCache.glFramebuffer = gpuFramebuffer.glFramebuffer;
                  }

                  var view = new ctor(dstBuffer);

                  for (var _iterator2 = _createForOfIteratorHelperLoose(regions), _step2; !(_step2 = _iterator2()).done;) {
                    var region = _step2.value;
                    var w = region.texExtent.width;
                    var h = region.texExtent.height;
                    gl.readPixels(region.texOffset.x, region.texOffset.y, w, h, glFormat, glType, view);
                  }

                  if (this.stateCache.glFramebuffer !== curFBO) {
                    gl.bindFramebuffer(gl.FRAMEBUFFER, curFBO);
                    this.stateCache.glFramebuffer = curFBO;
                  }
                }
              }, {
                key: "blitFramebuffer",
                value: function blitFramebuffer(src, dst, srcRect, dstRect, filter) {
                  var srcFBO = src.gpuFramebuffer;
                  var dstFBO = dst.gpuFramebuffer;
                  WebGL2CmdFuncBlitFramebuffer(this, srcFBO, dstFBO, srcRect, dstRect, filter);
                }
              }, {
                key: "getExtension",
                value: function getExtension(ext) {
                  var prefixes = ['', 'WEBKIT_', 'MOZ_'];

                  for (var i = 0; i < prefixes.length; ++i) {
                    var _ext = this.gl.getExtension(prefixes[i] + ext);

                    if (_ext) {
                      return _ext;
                    }
                  }

                  return null;
                }
              }, {
                key: "initStates",
                value: function initStates(gl) {
                  gl.activeTexture(gl.TEXTURE0);
                  gl.pixelStorei(gl.PACK_ALIGNMENT, 1);
                  gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
                  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
                  gl.bindFramebuffer(gl.FRAMEBUFFER, null); // rasteriazer state

                  gl.enable(gl.CULL_FACE);
                  gl.cullFace(gl.BACK);
                  gl.frontFace(gl.CCW);
                  gl.polygonOffset(0.0, 0.0); // depth stencil state

                  gl.enable(gl.DEPTH_TEST);
                  gl.depthMask(true);
                  gl.depthFunc(gl.LESS);
                  gl.stencilFuncSeparate(gl.FRONT, gl.ALWAYS, 1, 0xffff);
                  gl.stencilOpSeparate(gl.FRONT, gl.KEEP, gl.KEEP, gl.KEEP);
                  gl.stencilMaskSeparate(gl.FRONT, 0xffff);
                  gl.stencilFuncSeparate(gl.BACK, gl.ALWAYS, 1, 0xffff);
                  gl.stencilOpSeparate(gl.BACK, gl.KEEP, gl.KEEP, gl.KEEP);
                  gl.stencilMaskSeparate(gl.BACK, 0xffff);
                  gl.disable(gl.STENCIL_TEST); // blend state

                  gl.disable(gl.SAMPLE_ALPHA_TO_COVERAGE);
                  gl.disable(gl.BLEND);
                  gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
                  gl.blendFuncSeparate(gl.ONE, gl.ZERO, gl.ONE, gl.ZERO);
                  gl.colorMask(true, true, true, true);
                  gl.blendColor(0.0, 0.0, 0.0, 0.0);
                }
              }, {
                key: "_onWebGLContextLost",
                value: function _onWebGLContextLost(event) {
                  warnID(11000);
                  warn(event); // 2020.9.3: `preventDefault` is not available on some platforms
                  // event.preventDefault();
                }
              }, {
                key: "gl",
                get: function get() {
                  return this._webGL2RC;
                }
              }, {
                key: "isAntialias",
                get: function get() {
                  return this._isAntialias;
                }
              }, {
                key: "isPremultipliedAlpha",
                get: function get() {
                  return this._isPremultipliedAlpha;
                }
              }, {
                key: "useVAO",
                get: function get() {
                  return this._useVAO;
                }
              }, {
                key: "bindingMappingInfo",
                get: function get() {
                  return this._bindingMappingInfo;
                }
              }, {
                key: "EXT_texture_filter_anisotropic",
                get: function get() {
                  return this._EXT_texture_filter_anisotropic;
                }
              }, {
                key: "OES_texture_float_linear",
                get: function get() {
                  return this._OES_texture_float_linear;
                }
              }, {
                key: "EXT_color_buffer_float",
                get: function get() {
                  return this._EXT_color_buffer_float;
                }
              }, {
                key: "EXT_disjoint_timer_query_webgl2",
                get: function get() {
                  return this._EXT_disjoint_timer_query_webgl2;
                }
              }, {
                key: "WEBGL_compressed_texture_etc1",
                get: function get() {
                  return this._WEBGL_compressed_texture_etc1;
                }
              }, {
                key: "WEBGL_compressed_texture_etc",
                get: function get() {
                  return this._WEBGL_compressed_texture_etc;
                }
              }, {
                key: "WEBGL_compressed_texture_pvrtc",
                get: function get() {
                  return this._WEBGL_compressed_texture_pvrtc;
                }
              }, {
                key: "WEBGL_compressed_texture_s3tc",
                get: function get() {
                  return this._WEBGL_compressed_texture_s3tc;
                }
              }, {
                key: "WEBGL_compressed_texture_s3tc_srgb",
                get: function get() {
                  return this._WEBGL_compressed_texture_s3tc_srgb;
                }
              }, {
                key: "WEBGL_texture_storage_multisample",
                get: function get() {
                  return this._WEBGL_texture_storage_multisample;
                }
              }, {
                key: "WEBGL_debug_shaders",
                get: function get() {
                  return this._WEBGL_debug_shaders;
                }
              }, {
                key: "WEBGL_lose_context",
                get: function get() {
                  return this._WEBGL_lose_context;
                }
              }]);

              return WebGL2Device;
            }(GFXDevice));

            /**
             * @hidden
             */
            legacyCC.WebGL2Device = WebGL2Device;

        }
    };
});
