System.register(['./deprecated-4ec15e5e.js', './deprecated-b99c04b5.js', './component-event-handler-b65b5a5a.js', './terrain-asset-1902cdce.js'], function (exports) {
    'use strict';
    var _createClass, _classCallCheck, clamp, ccclass, _applyDecoratedDescriptor, type, executeInEditMode, serializable, editable, legacyCC, Vec2, Vec4, Rect, help, visible, disallowAnimation, Size, _initializerDefineProperty, _inherits, _possibleConstructorReturn, _getPrototypeOf, _get, _assertThisInitialized, _createForOfIteratorHelperLoose, isValid, Vec3, Component, EffectAsset, disallowMultiple, PrivateNode, GFXBufferUsageBit, GFXMemoryUsageBit, GFXAttributeName, GFXFormat, RenderingSubMesh, GFXPrimitiveMode, Model, Texture2D, PixelFormat, Filter, WrapMode, Material, builtinResMgr, RenderableComponent, director, TerrainAsset, TERRAIN_BLOCK_VERTEX_COMPLEXITY, TERRAIN_BLOCK_TILE_COMPLEXITY, TERRAIN_BLOCK_VERTEX_SIZE, TERRAIN_MAX_LAYER_COUNT, TerrainLayerInfo, TERRAIN_HEIGHT_FMAX, TERRAIN_HEIGHT_FMIN, TERRAIN_HEIGHT_BASE, TERRAIN_HEIGHT_FACTORY;
    return {
        setters: [function (module) {
            _createClass = module.j;
            _classCallCheck = module.d;
            clamp = module.k;
            ccclass = module.c;
            _applyDecoratedDescriptor = module._;
            type = module.t;
            executeInEditMode = module.b1;
            serializable = module.s;
            editable = module.F;
            legacyCC = module.l;
            Vec2 = module.H;
            Vec4 = module.K;
            Rect = module.W;
            help = module.h;
            visible = module.b5;
            disallowAnimation = module.bN;
            Size = module.T;
            _initializerDefineProperty = module.g;
            _inherits = module.b;
            _possibleConstructorReturn = module.e;
            _getPrototypeOf = module.f;
            _get = module.aN;
            _assertThisInitialized = module.i;
            _createForOfIteratorHelperLoose = module.D;
            isValid = module.at;
            Vec3 = module.V;
            Component = module.C;
        }, function (module) {
            EffectAsset = module.b2;
            disallowMultiple = module.d9;
            PrivateNode = module.c_;
            GFXBufferUsageBit = module.h;
            GFXMemoryUsageBit = module.i;
            GFXAttributeName = module.G;
            GFXFormat = module.f;
            RenderingSubMesh = module.b4;
            GFXPrimitiveMode = module.t;
            Model = module.W;
            Texture2D = module.aY;
            PixelFormat = module.df;
            Filter = module.dQ;
            WrapMode = module.dZ;
            Material = module.b3;
            builtinResMgr = module.d2;
            RenderableComponent = module.d3;
        }, function (module) {
            director = module.d;
        }, function (module) {
            TerrainAsset = module.T;
            TERRAIN_BLOCK_VERTEX_COMPLEXITY = module.a;
            TERRAIN_BLOCK_TILE_COMPLEXITY = module.b;
            TERRAIN_BLOCK_VERTEX_SIZE = module.c;
            TERRAIN_MAX_LAYER_COUNT = module.d;
            TerrainLayerInfo = module.e;
            TERRAIN_HEIGHT_FMAX = module.f;
            TERRAIN_HEIGHT_FMIN = module.g;
            TERRAIN_HEIGHT_BASE = module.h;
            TERRAIN_HEIGHT_FACTORY = module.i;
            var _setter = {};
            _setter.TERRAIN_BLOCK_TILE_COMPLEXITY = module.b;
            _setter.TERRAIN_BLOCK_VERTEX_COMPLEXITY = module.a;
            _setter.TERRAIN_BLOCK_VERTEX_SIZE = module.c;
            _setter.TERRAIN_DATA_VERSION = module.p;
            _setter.TERRAIN_DATA_VERSION2 = module.q;
            _setter.TERRAIN_DATA_VERSION3 = module.r;
            _setter.TERRAIN_DATA_VERSION_DEFAULT = module.s;
            _setter.TERRAIN_EAST_INDEX = module.o;
            _setter.TERRAIN_HEIGHT_BASE = module.h;
            _setter.TERRAIN_HEIGHT_FACTORY = module.i;
            _setter.TERRAIN_HEIGHT_FMAX = module.f;
            _setter.TERRAIN_HEIGHT_FMIN = module.g;
            _setter.TERRAIN_MAX_BLEND_LAYERS = module.k;
            _setter.TERRAIN_MAX_LAYER_COUNT = module.d;
            _setter.TERRAIN_MAX_LEVELS = module.j;
            _setter.TERRAIN_NORTH_INDEX = module.l;
            _setter.TERRAIN_SOUTH_INDEX = module.m;
            _setter.TERRAIN_WEST_INDEX = module.n;
            _setter.TerrainAsset = module.T;
            _setter.TerrainLayerInfo = module.e;
            exports(_setter);
        }],
        execute: function () {

            var HeightField = exports('HeightField', /*#__PURE__*/function () {
              function HeightField(w, h) {
                _classCallCheck(this, HeightField);

                this.data = new Uint16Array();
                this.w = 0;
                this.h = 0;
                this.w = w;
                this.h = h;
                this.data = new Uint16Array(w * h);

                for (var i = 0; i < w * h; ++i) {
                  this.data[i] = 0;
                }
              }

              _createClass(HeightField, [{
                key: "set",
                value: function set(i, j, value) {
                  this.data[j * this.w + i] = value;
                }
              }, {
                key: "get",
                value: function get(i, j) {
                  return this.data[j * this.w + i];
                }
              }, {
                key: "getClamp",
                value: function getClamp(i, j) {
                  i = clamp(i, 0, this.w - 1);
                  j = clamp(j, 0, this.h - 1);
                  return this.get(i, j);
                }
              }, {
                key: "getAt",
                value: function getAt(x, y) {
                  var fx = x;
                  var fy = y;
                  var ix0 = Math.floor(fx);
                  var iz0 = Math.floor(fy);
                  var ix1 = ix0 + 1;
                  var iz1 = iz0 + 1;
                  var dx = fx - ix0;
                  var dz = fy - iz0;
                  ix0 = clamp(ix0, 0, this.w - 1);
                  iz0 = clamp(iz0, 0, this.h - 1);
                  ix1 = clamp(ix1, 0, this.w - 1);
                  iz1 = clamp(iz1, 0, this.h - 1);
                  var a = this.get(ix0, iz0);
                  var b = this.get(ix1, iz0);
                  var c = this.get(ix0, iz1);
                  var d = this.get(ix1, iz1);
                  var m = (b + c) * 0.5;

                  if (dx + dz <= 1.0) {
                    d = m + (m - a);
                  } else {
                    a = m + (m - d);
                  }

                  var h1 = a * (1.0 - dx) + b * dx;
                  var h2 = c * (1.0 - dx) + d * dx;
                  var h = h1 * (1.0 - dz) + h2 * dz;
                  return h;
                }
              }]);

              return HeightField;
            }());

            var _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _dec2, _class4, _class5, _descriptor5, _descriptor6, _temp2, _dec3, _class7, _class8, _descriptor7, _temp3, _dec4, _class10, _class11, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _temp4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class13, _class14, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _temp5;
            /**
             * @en Terrain info
             * @zh 地形信息
             */

            var TerrainInfo = exports('TerrainInfo', (_dec = ccclass('cc.TerrainInfo'), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function () {
              function TerrainInfo() {
                _classCallCheck(this, TerrainInfo);

                _initializerDefineProperty(this, "tileSize", _descriptor, this);

                _initializerDefineProperty(this, "blockCount", _descriptor2, this);

                _initializerDefineProperty(this, "weightMapSize", _descriptor3, this);

                _initializerDefineProperty(this, "lightMapSize", _descriptor4, this);
              }

              _createClass(TerrainInfo, [{
                key: "size",

                /**
                 * @en terrain size
                 * @zh 地形大小
                 */
                get: function get() {
                  var sz = new Size(0, 0);
                  sz.width = this.blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY * this.tileSize;
                  sz.height = this.blockCount[1] * TERRAIN_BLOCK_TILE_COMPLEXITY * this.tileSize;
                  return sz;
                }
                /**
                 * @en tile count
                 * @zh 栅格数量
                 */

              }, {
                key: "tileCount",
                get: function get() {
                  var _tileCount = [0, 0];
                  _tileCount[0] = this.blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY;
                  _tileCount[1] = this.blockCount[1] * TERRAIN_BLOCK_TILE_COMPLEXITY;
                  return _tileCount;
                }
                /**
                 * @en vertex count
                 * @zh 顶点数量
                 */

              }, {
                key: "vertexCount",
                get: function get() {
                  var _vertexCount = this.tileCount;
                  _vertexCount[0] += 1;
                  _vertexCount[1] += 1;
                  return _vertexCount;
                }
              }]);

              return TerrainInfo;
            }(), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tileSize", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 1;
              }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "blockCount", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [1, 1];
              }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "weightMapSize", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 128;
              }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lightMapSize", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 128;
              }
            })), _class2)) || _class));
            /**
             * @en Terrain layer
             * @zh 地形纹理层
             */

            var TerrainLayer = exports('TerrainLayer', (_dec2 = ccclass('cc.TerrainLayer'), _dec2(_class4 = (_class5 = (_temp2 = function TerrainLayer() {
              _classCallCheck(this, TerrainLayer);

              _initializerDefineProperty(this, "detailMap", _descriptor5, this);

              _initializerDefineProperty(this, "tileSize", _descriptor6, this);
            }, _temp2), (_descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "detailMap", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "tileSize", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 1;
              }
            })), _class5)) || _class4));
            /**
             * @en Terrain renderable
             * @zh 地形渲染组件
             */

            var TerrainRenderable = /*#__PURE__*/function (_RenderableComponent) {
              _inherits(TerrainRenderable, _RenderableComponent);

              function TerrainRenderable() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, TerrainRenderable);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TerrainRenderable)).call.apply(_getPrototypeOf2, [this].concat(args)));
                _this._model = null;
                _this._meshData = null;
                _this._brushMaterial = null;
                _this._currentMaterial = null;
                _this._currentMaterialLayers = 0;
                return _this;
              }

              _createClass(TerrainRenderable, [{
                key: "destroy",
                value: function destroy() {
                  // this._invalidMaterial();
                  if (this._model != null) {
                    legacyCC.director.root.destroyModel(this._model);
                    this._model = null;
                  }

                  return _get(_getPrototypeOf(TerrainRenderable.prototype), "destroy", this).call(this);
                }
              }, {
                key: "_invalidMaterial",
                value: function _invalidMaterial() {
                  if (this._currentMaterial == null) {
                    return;
                  }

                  this._clearMaterials();

                  this._currentMaterial = null;

                  if (this._model != null) {
                    this._model.enabled = false;
                  }
                }
              }, {
                key: "_updateMaterial",
                value: function _updateMaterial(block, init) {
                  if (this._meshData == null || this._model == null) {
                    return;
                  }

                  var nLayers = block.getMaxLayer();

                  if (this._currentMaterial == null || nLayers !== this._currentMaterialLayers) {
                    this._currentMaterial = new Material();

                    this._currentMaterial.initialize({
                      effectAsset: block.getTerrain().getEffectAsset(),
                      defines: block._getMaterialDefines(nLayers)
                    });

                    if (this._brushMaterial !== null) {
                      var passes = this._currentMaterial.passes;
                      passes.push(this._brushMaterial.passes[0]);
                    }

                    if (init) {
                      this._model.initSubModel(0, this._meshData, this._currentMaterial);
                    }

                    this.setMaterial(this._currentMaterial, 0);
                    this._currentMaterialLayers = nLayers;
                    this._model.enabled = true;
                  }
                }
              }, {
                key: "_onMaterialModified",
                value: function _onMaterialModified(idx, mtl) {
                  if (this._model == null) {
                    return;
                  }

                  this._onRebuildPSO(idx, mtl || this._getBuiltinMaterial());
                }
              }, {
                key: "_onRebuildPSO",
                value: function _onRebuildPSO(idx, material) {
                  if (this._model) {
                    this._model.setSubModelMaterial(idx, material);
                  }
                }
              }, {
                key: "_clearMaterials",
                value: function _clearMaterials() {
                  if (this._model == null) {
                    return;
                  }

                  this._onMaterialModified(0, null);
                }
              }, {
                key: "_getBuiltinMaterial",
                value: function _getBuiltinMaterial() {
                  return builtinResMgr.get('missing-material');
                }
              }]);

              return TerrainRenderable;
            }(RenderableComponent);
            /**
             * @en Terrain block info
             * @zh 地形块信息
             */


            var TerrainBlockInfo = exports('TerrainBlockInfo', (_dec3 = ccclass('cc.TerrainBlockInfo'), _dec3(_class7 = (_class8 = (_temp3 = function TerrainBlockInfo() {
              _classCallCheck(this, TerrainBlockInfo);

              _initializerDefineProperty(this, "layers", _descriptor7, this);
            }, _temp3), (_descriptor7 = _applyDecoratedDescriptor(_class8.prototype, "layers", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [-1, -1, -1, -1];
              }
            })), _class8)) || _class7));
            /**
             * @en Terrain block light map info
             * @zh 地形块光照图信息
             */

            var TerrainBlockLightmapInfo = exports('TerrainBlockLightmapInfo', (_dec4 = ccclass('cc.TerrainBlockLightmapInfo'), _dec4(_class10 = (_class11 = (_temp4 = function TerrainBlockLightmapInfo() {
              _classCallCheck(this, TerrainBlockLightmapInfo);

              _initializerDefineProperty(this, "texture", _descriptor8, this);

              _initializerDefineProperty(this, "UOff", _descriptor9, this);

              _initializerDefineProperty(this, "VOff", _descriptor10, this);

              _initializerDefineProperty(this, "UScale", _descriptor11, this);

              _initializerDefineProperty(this, "VScale", _descriptor12, this);
            }, _temp4), (_descriptor8 = _applyDecoratedDescriptor(_class11.prototype, "texture", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor9 = _applyDecoratedDescriptor(_class11.prototype, "UOff", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0;
              }
            }), _descriptor10 = _applyDecoratedDescriptor(_class11.prototype, "VOff", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0;
              }
            }), _descriptor11 = _applyDecoratedDescriptor(_class11.prototype, "UScale", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0;
              }
            }), _descriptor12 = _applyDecoratedDescriptor(_class11.prototype, "VScale", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0;
              }
            })), _class11)) || _class10));
            /**
             * @en Terrain block
             * @zh 地形块
             */

            var TerrainBlock = exports('TerrainBlock', /*#__PURE__*/function () {
              // private _neighbor: TerrainBlock|null[] = [null, null, null, null];
              function TerrainBlock(t, i, j) {
                _classCallCheck(this, TerrainBlock);

                this._terrain = void 0;
                this._info = void 0;
                this._node = void 0;
                this._renderable = void 0;
                this._index = [1, 1];
                this._weightMap = null;
                this._lightmapInfo = null;
                this._terrain = t;
                this._info = t.getBlockInfo(i, j);
                this._index[0] = i;
                this._index[1] = j;
                this._lightmapInfo = t._getLightmapInfo(i, j);
                this._node = new PrivateNode(''); // @ts-ignore

                this._node.setParent(this._terrain.node); // @ts-ignore


                this._node._objFlags |= legacyCC.Object.Flags.DontSave;
                this._renderable = this._node.addComponent(TerrainRenderable);
              }

              _createClass(TerrainBlock, [{
                key: "build",
                value: function build() {
                  var gfxDevice = director.root.device; // vertex buffer

                  var vertexData = new Float32Array(TERRAIN_BLOCK_VERTEX_SIZE * TERRAIN_BLOCK_VERTEX_COMPLEXITY * TERRAIN_BLOCK_VERTEX_COMPLEXITY);
                  var index = 0;

                  for (var j = 0; j < TERRAIN_BLOCK_VERTEX_COMPLEXITY; ++j) {
                    for (var i = 0; i < TERRAIN_BLOCK_VERTEX_COMPLEXITY; ++i) {
                      var x = this._index[0] * TERRAIN_BLOCK_TILE_COMPLEXITY + i;
                      var y = this._index[1] * TERRAIN_BLOCK_TILE_COMPLEXITY + j;

                      var position = this._terrain.getPosition(x, y);

                      var normal = this._terrain.getNormal(x, y);

                      var uv = new Vec2(i / TERRAIN_BLOCK_TILE_COMPLEXITY, j / TERRAIN_BLOCK_TILE_COMPLEXITY);
                      vertexData[index++] = position.x;
                      vertexData[index++] = position.y;
                      vertexData[index++] = position.z;
                      vertexData[index++] = normal.x;
                      vertexData[index++] = normal.y;
                      vertexData[index++] = normal.z;
                      vertexData[index++] = uv.x;
                      vertexData[index++] = uv.y;
                    }
                  }

                  var vertexBuffer = gfxDevice.createBuffer({
                    usage: GFXBufferUsageBit.VERTEX | GFXBufferUsageBit.TRANSFER_DST,
                    memUsage: GFXMemoryUsageBit.HOST | GFXMemoryUsageBit.DEVICE,
                    size: TERRAIN_BLOCK_VERTEX_SIZE * Float32Array.BYTES_PER_ELEMENT * TERRAIN_BLOCK_VERTEX_COMPLEXITY * TERRAIN_BLOCK_VERTEX_COMPLEXITY,
                    stride: TERRAIN_BLOCK_VERTEX_SIZE * Float32Array.BYTES_PER_ELEMENT
                  });
                  vertexBuffer.update(vertexData); // initialize renderable

                  var gfxAttributes = [{
                    name: GFXAttributeName.ATTR_POSITION,
                    format: GFXFormat.RGB32F
                  }, {
                    name: GFXAttributeName.ATTR_NORMAL,
                    format: GFXFormat.RGB32F
                  }, {
                    name: GFXAttributeName.ATTR_TEX_COORD,
                    format: GFXFormat.RG32F
                  }];
                  var subMesh = this._renderable._meshData = new RenderingSubMesh([vertexBuffer], gfxAttributes, GFXPrimitiveMode.TRIANGLE_LIST);
                  subMesh.indexBuffer = this._terrain._getSharedIndexBuffer() || undefined;
                  this._renderable._model = legacyCC.director.root.createModel(Model);

                  this._renderable._model.initialize(this._node);

                  this._renderable._getRenderScene().addModel(this._renderable._model); // reset weightmap


                  this._updateWeightMap(); // reset material


                  this._updateMaterial(true);
                }
              }, {
                key: "rebuild",
                value: function rebuild() {
                  this._updateHeight();

                  this._updateWeightMap();

                  this._renderable._invalidMaterial();

                  this._updateMaterial(false);
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  if (this._renderable != null) {
                    this._renderable.destroy();
                  }

                  if (this._node != null) {
                    this._node.destroy();
                  }

                  if (this._weightMap != null) {
                    this._weightMap.destroy();
                  }
                }
              }, {
                key: "update",
                value: function update() {
                  this._updateMaterial(false);

                  var mtl = this._renderable._currentMaterial;

                  if (mtl != null) {
                    var nlayers = this.getMaxLayer();
                    var uvScale = new Vec4(1, 1, 1, 1);

                    if (nlayers === 0) {
                      if (this.layers[0] !== -1) {
                        var l0 = this._terrain.getLayer(this.layers[0]);

                        if (l0 != null) {
                          uvScale.x = 1.0 / l0.tileSize;
                        }

                        mtl.setProperty('detailMap0', l0 != null ? l0.detailMap : null);
                      } else {
                        mtl.setProperty('detailMap0', legacyCC.builtinResMgr.get('default-texture'));
                      }
                    } else if (nlayers === 1) {
                      var _l = this._terrain.getLayer(this.layers[0]);

                      var l1 = this._terrain.getLayer(this.layers[1]);

                      if (_l != null) {
                        uvScale.x = 1.0 / _l.tileSize;
                      }

                      if (l1 != null) {
                        uvScale.y = 1.0 / l1.tileSize;
                      }

                      mtl.setProperty('weightMap', this._weightMap);
                      mtl.setProperty('detailMap0', _l != null ? _l.detailMap : null);
                      mtl.setProperty('detailMap1', l1 != null ? l1.detailMap : null);
                    } else if (nlayers === 2) {
                      var _l2 = this._terrain.getLayer(this.layers[0]);

                      var _l3 = this._terrain.getLayer(this.layers[1]);

                      var l2 = this._terrain.getLayer(this.layers[2]);

                      if (_l2 != null) {
                        uvScale.x = 1.0 / _l2.tileSize;
                      }

                      if (_l3 != null) {
                        uvScale.y = 1.0 / _l3.tileSize;
                      }

                      if (l2 != null) {
                        uvScale.z = 1.0 / l2.tileSize;
                      }

                      mtl.setProperty('weightMap', this._weightMap);
                      mtl.setProperty('detailMap0', _l2 != null ? _l2.detailMap : null);
                      mtl.setProperty('detailMap1', _l3 != null ? _l3.detailMap : null);
                      mtl.setProperty('detailMap2', l2 != null ? l2.detailMap : null);
                    } else if (nlayers === 3) {
                      var _l4 = this._terrain.getLayer(this.layers[0]);

                      var _l5 = this._terrain.getLayer(this.layers[1]);

                      var _l6 = this._terrain.getLayer(this.layers[2]);

                      var l3 = this._terrain.getLayer(this.layers[3]);

                      if (_l4 != null) {
                        uvScale.x = 1.0 / _l4.tileSize;
                      }

                      if (_l5 != null) {
                        uvScale.y = 1.0 / _l5.tileSize;
                      }

                      if (_l6 != null) {
                        uvScale.z = 1.0 / _l6.tileSize;
                      }

                      if (l3 != null) {
                        uvScale.z = 1.0 / l3.tileSize;
                      }

                      mtl.setProperty('weightMap', this._weightMap);
                      mtl.setProperty('detailMap0', _l4 != null ? _l4.detailMap : null);
                      mtl.setProperty('detailMap1', _l5 != null ? _l5.detailMap : null);
                      mtl.setProperty('detailMap2', _l6 != null ? _l6.detailMap : null);
                      mtl.setProperty('detailMap3', l3 != null ? l3.detailMap : null);
                    }

                    mtl.setProperty('UVScale', uvScale);

                    if (this.lightmap != null) {
                      mtl.setProperty('lightMap', this.lightmap);
                      mtl.setProperty('lightMapUVParam', this.lightmapUVParam);
                    }
                  }
                }
              }, {
                key: "setBrushMaterial",
                value: function setBrushMaterial(mtl) {
                  if (this._renderable._brushMaterial !== mtl) {
                    this._renderable._brushMaterial = mtl;

                    this._renderable._invalidMaterial();
                  }
                }
                /**
                 * @en get layers
                 * @zh 获得纹理层索引
                 */

              }, {
                key: "getTerrain",

                /**
                 * @en get terrain owner
                 * @zh 获得地形对象
                 */
                value: function getTerrain() {
                  return this._terrain;
                }
                /**
                 * @en get index
                 * @zh 获得地形索引
                 */

              }, {
                key: "getIndex",
                value: function getIndex() {
                  return this._index;
                }
                /**
                 * @en get rect bound
                 * @zh 获得地形矩形包围体
                 */

              }, {
                key: "getRect",
                value: function getRect() {
                  var rect = new Rect();
                  rect.x = this._index[0] * TERRAIN_BLOCK_TILE_COMPLEXITY;
                  rect.y = this._index[1] * TERRAIN_BLOCK_TILE_COMPLEXITY;
                  rect.width = TERRAIN_BLOCK_TILE_COMPLEXITY;
                  rect.height = TERRAIN_BLOCK_TILE_COMPLEXITY;
                  return rect;
                }
                /**
                 * @en set layer
                 * @zh 设置纹理层
                 */

              }, {
                key: "setLayer",
                value: function setLayer(index, layerId) {
                  if (this.layers[index] !== layerId) {
                    this.layers[index] = layerId;

                    this._renderable._invalidMaterial();

                    this._updateMaterial(false);
                  }
                }
                /**
                 * @en get layer
                 * @zh 获得纹理层
                 */

              }, {
                key: "getLayer",
                value: function getLayer(index) {
                  return this.layers[index];
                }
                /**
                 * @en get max layer index
                 * @zh 获得最大纹理索引
                 */

              }, {
                key: "getMaxLayer",
                value: function getMaxLayer() {
                  if (this.layers[3] >= 0) {
                    return 3;
                  } else if (this.layers[2] >= 0) {
                    return 2;
                  } else if (this.layers[1] >= 0) {
                    return 1;
                  } else {
                    return 0;
                  }
                }
              }, {
                key: "_getMaterialDefines",
                value: function _getMaterialDefines(nlayers) {
                  if (this.lightmap != null) {
                    if (nlayers === 0) {
                      return {
                        LAYERS: 1,
                        LIGHT_MAP: 1
                      };
                    } else if (nlayers === 1) {
                      return {
                        LAYERS: 2,
                        LIGHT_MAP: 1
                      };
                    } else if (nlayers === 2) {
                      return {
                        LAYERS: 3,
                        LIGHT_MAP: 1
                      };
                    } else if (nlayers === 3) {
                      return {
                        LAYERS: 4,
                        LIGHT_MAP: 1
                      };
                    }
                  } else {
                    if (nlayers === 0) {
                      return {
                        LAYERS: 1
                      };
                    } else if (nlayers === 1) {
                      return {
                        LAYERS: 2
                      };
                    } else if (nlayers === 2) {
                      return {
                        LAYERS: 3
                      };
                    } else if (nlayers === 3) {
                      return {
                        LAYERS: 4
                      };
                    }
                  }

                  return {
                    LAYERS: 0
                  };
                }
              }, {
                key: "_invalidMaterial",
                value: function _invalidMaterial() {
                  this._renderable._invalidMaterial();
                }
              }, {
                key: "_updateMaterial",
                value: function _updateMaterial(init) {
                  this._renderable._updateMaterial(this, init);
                }
              }, {
                key: "_updateHeight",
                value: function _updateHeight() {
                  if (this._renderable._meshData == null) {
                    return;
                  }

                  var vertexData = new Float32Array(TERRAIN_BLOCK_VERTEX_SIZE * TERRAIN_BLOCK_VERTEX_COMPLEXITY * TERRAIN_BLOCK_VERTEX_COMPLEXITY);
                  var index = 0;

                  for (var j = 0; j < TERRAIN_BLOCK_VERTEX_COMPLEXITY; ++j) {
                    for (var i = 0; i < TERRAIN_BLOCK_VERTEX_COMPLEXITY; ++i) {
                      var x = this._index[0] * TERRAIN_BLOCK_TILE_COMPLEXITY + i;
                      var y = this._index[1] * TERRAIN_BLOCK_TILE_COMPLEXITY + j;

                      var position = this._terrain.getPosition(x, y);

                      var normal = this._terrain.getNormal(x, y);

                      var uv = new Vec2(i / TERRAIN_BLOCK_VERTEX_COMPLEXITY, j / TERRAIN_BLOCK_VERTEX_COMPLEXITY);
                      vertexData[index++] = position.x;
                      vertexData[index++] = position.y;
                      vertexData[index++] = position.z;
                      vertexData[index++] = normal.x;
                      vertexData[index++] = normal.y;
                      vertexData[index++] = normal.z;
                      vertexData[index++] = uv.x;
                      vertexData[index++] = uv.y;
                    }
                  }

                  this._renderable._meshData.vertexBuffers[0].update(vertexData);
                }
              }, {
                key: "_updateWeightMap",
                value: function _updateWeightMap() {
                  var nlayers = this.getMaxLayer();

                  if (nlayers === 0) {
                    if (this._weightMap != null) {
                      this._weightMap.destroy();

                      this._weightMap = null;
                    }

                    return;
                  } else {
                    if (this._weightMap == null) {
                      this._weightMap = new Texture2D();

                      this._weightMap.create(this._terrain.weightMapSize, this._terrain.weightMapSize, PixelFormat.RGBA8888);

                      this._weightMap.setFilters(Filter.LINEAR, Filter.LINEAR);

                      this._weightMap.setWrapMode(WrapMode.CLAMP_TO_EDGE, WrapMode.CLAMP_TO_EDGE);
                    }
                  }

                  var weightData = new Uint8Array(this._terrain.weightMapSize * this._terrain.weightMapSize * 4);
                  var weightIndex = 0;

                  for (var j = 0; j < this._terrain.weightMapSize; ++j) {
                    for (var i = 0; i < this._terrain.weightMapSize; ++i) {
                      var x = this._index[0] * this._terrain.weightMapSize + i;
                      var y = this._index[1] * this._terrain.weightMapSize + j;

                      var w = this._terrain.getWeight(x, y);

                      weightData[weightIndex * 4 + 0] = Math.floor(w.x * 255);
                      weightData[weightIndex * 4 + 1] = Math.floor(w.y * 255);
                      weightData[weightIndex * 4 + 2] = Math.floor(w.z * 255);
                      weightData[weightIndex * 4 + 3] = Math.floor(w.w * 255);
                      weightIndex += 1;
                    }
                  }

                  this._weightMap.uploadData(weightData);
                }
              }, {
                key: "_updateLightmap",
                value: function _updateLightmap(info) {
                  this._lightmapInfo = info;

                  this._invalidMaterial();
                }
              }, {
                key: "layers",
                get: function get() {
                  return this._info.layers;
                }
                /**
                 * @en get light map
                 * @zh 获得光照图
                 */

              }, {
                key: "lightmap",
                get: function get() {
                  return this._lightmapInfo ? this._lightmapInfo.texture : null;
                }
                /**
                 * @en get light map uv parameter
                 * @zh 获得光照图纹理坐标参数
                 */

              }, {
                key: "lightmapUVParam",
                get: function get() {
                  if (this._lightmapInfo != null) {
                    return new Vec4(this._lightmapInfo.UOff, this._lightmapInfo.VOff, this._lightmapInfo.UScale, this._lightmapInfo.VScale);
                  } else {
                    return new Vec4(0, 0, 0, 0);
                  }
                }
              }]);

              return TerrainBlock;
            }());
            /**
             * @en Terrain
             * @zh 地形组件
             */

            var Terrain = exports('Terrain', (_dec5 = ccclass('cc.Terrain'), _dec6 = help(), _dec7 = type(TerrainAsset), _dec8 = type(EffectAsset), _dec9 = visible(), _dec10 = type(TerrainLayer), _dec11 = type(TerrainAsset), _dec12 = visible(), _dec13 = type(EffectAsset), _dec14 = visible(), _dec15 = type(TerrainInfo), _dec5(_class13 = _dec6(_class13 = executeInEditMode(_class13 = disallowMultiple(_class13 = (_class14 = (_temp5 = /*#__PURE__*/function (_Component) {
              _inherits(Terrain, _Component);

              function Terrain() {
                var _this2;

                _classCallCheck(this, Terrain);

                _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Terrain).call(this)); // initialize layers

                _initializerDefineProperty(_this2, "__asset", _descriptor13, _assertThisInitialized(_this2));

                _initializerDefineProperty(_this2, "_effectAsset", _descriptor14, _assertThisInitialized(_this2));

                _initializerDefineProperty(_this2, "_layers", _descriptor15, _assertThisInitialized(_this2));

                _initializerDefineProperty(_this2, "_blockInfos", _descriptor16, _assertThisInitialized(_this2));

                _initializerDefineProperty(_this2, "_lightmapInfos", _descriptor17, _assertThisInitialized(_this2));

                _this2._tileSize = 1;
                _this2._blockCount = [1, 1];
                _this2._weightMapSize = 128;
                _this2._lightMapSize = 128;
                _this2._heights = new Uint16Array();
                _this2._weights = new Uint8Array();
                _this2._normals = [];
                _this2._blocks = [];
                _this2._sharedIndexBuffer = null;

                for (var i = 0; i < TERRAIN_MAX_LAYER_COUNT; ++i) {
                  _this2._layers.push(null);
                }

                return _this2;
              }

              _createClass(Terrain, [{
                key: "build",

                /**
                 * @en build
                 * @zh 构建地形
                 */
                value: function build(info) {
                  this._tileSize = info.tileSize;
                  this._blockCount[0] = info.blockCount[0];
                  this._blockCount[1] = info.blockCount[1];
                  this._weightMapSize = info.weightMapSize;
                  this._lightMapSize = info.lightMapSize;
                  return this._buildImp();
                }
                /**
                 * @en rebuild
                 * @zh 重建地形
                 */

              }, {
                key: "rebuild",
                value: function rebuild(info) {
                  // build block info
                  var blockInfos = [];

                  for (var i = 0; i < info.blockCount[0] * info.blockCount[1]; ++i) {
                    blockInfos.push(new TerrainBlockInfo());
                  }

                  var w = Math.min(this._blockCount[0], info.blockCount[0]);
                  var h = Math.min(this._blockCount[1], info.blockCount[1]);

                  for (var j = 0; j < h; ++j) {
                    for (var _i2 = 0; _i2 < w; ++_i2) {
                      var index0 = j * info.blockCount[0] + _i2;
                      var index1 = j * this.blockCount[0] + _i2;
                      blockInfos[index0] = this._blockInfos[index1];
                    }
                  }

                  this._blockInfos = blockInfos;

                  for (var _iterator = _createForOfIteratorHelperLoose(this._blocks), _step; !(_step = _iterator()).done;) {
                    var block = _step.value;
                    block.destroy();
                  }

                  this._blocks = []; // build heights

                  this._rebuildHeights(info); // build weights


                  this._rebuildWeights(info); // update info


                  this._tileSize = info.tileSize;
                  this._blockCount[0] = info.blockCount[0];
                  this._blockCount[1] = info.blockCount[1];
                  this._weightMapSize = info.weightMapSize;
                  this._lightMapSize = info.lightMapSize; // build blocks

                  this._buildNormals();

                  for (var _j2 = 0; _j2 < this._blockCount[1]; ++_j2) {
                    for (var _i3 = 0; _i3 < this._blockCount[0]; ++_i3) {
                      this._blocks.push(new TerrainBlock(this, _i3, _j2));
                    }
                  }

                  for (var _iterator2 = _createForOfIteratorHelperLoose(this._blocks), _step2; !(_step2 = _iterator2()).done;) {
                    var _i4 = _step2.value;

                    _i4.build();
                  }
                }
                /**
                 * @en import height field
                 * @zh 导入高度图
                 */

              }, {
                key: "importHeightField",
                value: function importHeightField(hf, heightScale) {
                  var index = 0;

                  for (var j = 0; j < this.vertexCount[1]; ++j) {
                    for (var i = 0; i < this.vertexCount[0]; ++i) {
                      var u = i / this.tileCount[0];
                      var v = j / this.tileCount[1];
                      var h = hf.getAt(u * hf.w, v * hf.h) * heightScale;
                      this._heights[index++] = h;
                    }
                  }

                  this._buildNormals(); // rebuild all blocks


                  for (var _iterator3 = _createForOfIteratorHelperLoose(this._blocks), _step3; !(_step3 = _iterator3()).done;) {
                    var _i5 = _step3.value;

                    _i5._updateHeight();
                  }
                }
                /**
                 * @en export height field
                 * @zh 导出高度图
                 */

              }, {
                key: "exportHeightField",
                value: function exportHeightField(hf, heightScale) {
                  var index = 0;

                  for (var j = 0; j < hf.h; ++j) {
                    for (var i = 0; i < hf.w; ++i) {
                      var u = i / (hf.w - 1);
                      var v = j / (hf.h - 1);
                      var x = u * this.size.width;
                      var y = v * this.size.height;
                      var h = this.getHeightAt(x, y);

                      if (h != null) {
                        hf.data[index++] = h * heightScale;
                      }
                    }
                  }
                }
              }, {
                key: "exportAsset",
                value: function exportAsset() {
                  var asset = new TerrainAsset();
                  asset.tileSize = this.tileSize;
                  asset.blockCount = this.blockCount;
                  asset.lightMapSize = this.lightMapSize;
                  asset.weightMapSize = this.weightMapSize;
                  asset.heights = this.heights;
                  asset.weights = this.weights;
                  asset.layerBuffer = new Array(this._blocks.length * 4);

                  for (var i = 0; i < this._blocks.length; ++i) {
                    asset.layerBuffer[i * 4 + 0] = this._blocks[i].layers[0];
                    asset.layerBuffer[i * 4 + 1] = this._blocks[i].layers[1];
                    asset.layerBuffer[i * 4 + 2] = this._blocks[i].layers[2];
                    asset.layerBuffer[i * 4 + 3] = this._blocks[i].layers[3];
                  }

                  for (var _i6 = 0; _i6 < this._layers.length; ++_i6) {
                    var temp = this._layers[_i6];

                    if (temp && temp.detailMap && isValid(temp.detailMap)) {
                      var layer = new TerrainLayerInfo();
                      layer.slot = _i6;
                      layer.tileSize = temp.tileSize;
                      layer.detailMap = temp.detailMap._uuid;
                      asset.layerInfos.push(layer);
                    }
                  }

                  return asset;
                }
              }, {
                key: "getEffectAsset",
                value: function getEffectAsset() {
                  if (this._effectAsset === null) {
                    return legacyCC.EffectAsset.get('builtin-terrain');
                  } else {
                    return this._effectAsset;
                  }
                }
              }, {
                key: "onLoad",
                value: function onLoad() {
                  var gfxDevice = legacyCC.director.root.device; // initialize shared index buffer

                  var indexData = new Uint16Array(TERRAIN_BLOCK_TILE_COMPLEXITY * TERRAIN_BLOCK_TILE_COMPLEXITY * 6);
                  var index = 0;

                  for (var j = 0; j < TERRAIN_BLOCK_TILE_COMPLEXITY; ++j) {
                    for (var i = 0; i < TERRAIN_BLOCK_TILE_COMPLEXITY; ++i) {
                      var a = j * TERRAIN_BLOCK_VERTEX_COMPLEXITY + i;
                      var b = j * TERRAIN_BLOCK_VERTEX_COMPLEXITY + i + 1;
                      var c = (j + 1) * TERRAIN_BLOCK_VERTEX_COMPLEXITY + i;
                      var d = (j + 1) * TERRAIN_BLOCK_VERTEX_COMPLEXITY + i + 1; // face 1

                      indexData[index++] = a;
                      indexData[index++] = c;
                      indexData[index++] = b; // face 2

                      indexData[index++] = b;
                      indexData[index++] = c;
                      indexData[index++] = d;
                    }
                  }

                  this._sharedIndexBuffer = gfxDevice.createBuffer({
                    usage: GFXBufferUsageBit.INDEX | GFXBufferUsageBit.TRANSFER_DST,
                    memUsage: GFXMemoryUsageBit.HOST | GFXMemoryUsageBit.DEVICE,
                    size: Uint16Array.BYTES_PER_ELEMENT * TERRAIN_BLOCK_TILE_COMPLEXITY * TERRAIN_BLOCK_TILE_COMPLEXITY * 6,
                    stride: Uint16Array.BYTES_PER_ELEMENT
                  });

                  this._sharedIndexBuffer.update(indexData);
                }
              }, {
                key: "onEnable",
                value: function onEnable() {
                  if (this._blocks.length === 0) {
                    this._buildImp();
                  }
                }
              }, {
                key: "onDisable",
                value: function onDisable() {
                  for (var _iterator4 = _createForOfIteratorHelperLoose(this._blocks), _step4; !(_step4 = _iterator4()).done;) {
                    var i = _step4.value;
                    i.destroy();
                  }

                  this._blocks = [];
                }
              }, {
                key: "onDestroy",
                value: function onDestroy() {
                  for (var i = 0; i < this._layers.length; ++i) {
                    this._layers[i] = null;
                  }

                  if (this._sharedIndexBuffer != null) {
                    this._sharedIndexBuffer.destroy();
                  }
                }
              }, {
                key: "onRestore",
                value: function onRestore() {
                  this.onDisable();
                  this.onLoad();

                  this._buildImp(true);
                }
              }, {
                key: "update",
                value: function update(deltaTime) {
                  for (var _iterator5 = _createForOfIteratorHelperLoose(this._blocks), _step5; !(_step5 = _iterator5()).done;) {
                    var i = _step5.value;
                    i.update();
                  }
                }
                /**
                 * @en add layer
                 * @zh 添加纹理层
                 */

              }, {
                key: "addLayer",
                value: function addLayer(layer) {
                  for (var i = 0; i < this._layers.length; ++i) {
                    if (this._layers[i] == null) {
                      this._layers[i] = layer;
                      return i;
                    }
                  }

                  return -1;
                }
                /**
                 * @en set layer
                 * @zh 设置纹理层
                 */

              }, {
                key: "setLayer",
                value: function setLayer(i, layer) {
                  this._layers[i] = layer;
                }
                /**
                 * @en remove layer
                 * @zh 移除纹理层
                 */

              }, {
                key: "removeLayer",
                value: function removeLayer(id) {
                  this._layers[id] = null;
                }
                /**
                 * @en get layer
                 * @zh 获得纹理层
                 */

              }, {
                key: "getLayer",
                value: function getLayer(id) {
                  if (id === -1) {
                    return null;
                  }

                  return this._layers[id];
                }
                /**
                 * @en get position
                 * @zh 获得地形上的位置
                 */

              }, {
                key: "getPosition",
                value: function getPosition(i, j) {
                  var x = i * this._tileSize;
                  var z = j * this._tileSize;
                  var y = this.getHeight(i, j);
                  return new Vec3(x, y, z);
                }
              }, {
                key: "getHeightField",
                value: function getHeightField() {
                  return this._heights;
                }
                /**
                 * @en set height
                 * @zh 设置地形上的高度
                 */

              }, {
                key: "setHeight",
                value: function setHeight(i, j, h) {
                  h = clamp(h, TERRAIN_HEIGHT_FMIN, TERRAIN_HEIGHT_FMAX);
                  this._heights[j * this.vertexCount[0] + i] = TERRAIN_HEIGHT_BASE + h / TERRAIN_HEIGHT_FACTORY;
                }
                /**
                 * @en get height
                 * @zh 获得地形上的高度
                 */

              }, {
                key: "getHeight",
                value: function getHeight(i, j) {
                  return (this._heights[j * this.vertexCount[0] + i] - TERRAIN_HEIGHT_BASE) * TERRAIN_HEIGHT_FACTORY;
                }
                /**
                 * @en set height
                 * @zh 设置高度
                 */

              }, {
                key: "getHeightClamp",
                value: function getHeightClamp(i, j) {
                  i = clamp(i, 0, this.vertexCount[0] - 1);
                  j = clamp(j, 0, this.vertexCount[1] - 1);
                  return this.getHeight(i, j);
                }
                /**
                 * @en get height by point
                 * @zh 根据点的坐标获得高度
                 */

              }, {
                key: "getHeightAt",
                value: function getHeightAt(x, y) {
                  var fx = x / this.tileSize;
                  var fy = y / this.tileSize;
                  var ix0 = Math.floor(fx);
                  var iz0 = Math.floor(fy);
                  var ix1 = ix0 + 1;
                  var iz1 = iz0 + 1;
                  var dx = fx - ix0;
                  var dz = fy - iz0;

                  if (ix0 < 0 || ix0 > this.vertexCount[0] - 1 || iz0 < 0 || iz0 > this.vertexCount[1] - 1) {
                    return null;
                  }

                  ix0 = clamp(ix0, 0, this.vertexCount[0] - 1);
                  iz0 = clamp(iz0, 0, this.vertexCount[1] - 1);
                  ix1 = clamp(ix1, 0, this.vertexCount[0] - 1);
                  iz1 = clamp(iz1, 0, this.vertexCount[1] - 1);
                  var a = this.getHeight(ix0, iz0);
                  var b = this.getHeight(ix1, iz0);
                  var c = this.getHeight(ix0, iz1);
                  var d = this.getHeight(ix1, iz1);
                  var m = (b + c) * 0.5;

                  if (dx + dz <= 1.0) {
                    d = m + (m - a);
                  } else {
                    a = m + (m - d);
                  }

                  var h1 = a * (1.0 - dx) + b * dx;
                  var h2 = c * (1.0 - dx) + d * dx;
                  var h = h1 * (1.0 - dz) + h2 * dz;
                  return h;
                }
              }, {
                key: "_setNormal",
                value: function _setNormal(i, j, n) {
                  var index = j * this.vertexCount[0] + i;
                  this._normals[index * 3 + 0] = n.x;
                  this._normals[index * 3 + 1] = n.y;
                  this._normals[index * 3 + 2] = n.z;
                }
                /**
                 * @en get normal
                 * @zh 获得法线
                 */

              }, {
                key: "getNormal",
                value: function getNormal(i, j) {
                  var index = j * this.vertexCount[0] + i;
                  var n = new Vec3();
                  n.x = this._normals[index * 3 + 0];
                  n.y = this._normals[index * 3 + 1];
                  n.z = this._normals[index * 3 + 2];
                  return n;
                }
                /**
                 * @en get normal by point
                 * @zh 根据点的坐标获得法线
                 */

              }, {
                key: "getNormalAt",
                value: function getNormalAt(x, y) {
                  var fx = x / this.tileSize;
                  var fy = y / this.tileSize;
                  var ix0 = Math.floor(fx);
                  var iz0 = Math.floor(fy);
                  var ix1 = ix0 + 1;
                  var iz1 = iz0 + 1;
                  var dx = fx - ix0;
                  var dz = fy - iz0;

                  if (ix0 < 0 || ix0 > this.vertexCount[0] - 1 || iz0 < 0 || iz0 > this.vertexCount[1] - 1) {
                    return null;
                  }

                  ix0 = clamp(ix0, 0, this.vertexCount[0] - 1);
                  iz0 = clamp(iz0, 0, this.vertexCount[1] - 1);
                  ix1 = clamp(ix1, 0, this.vertexCount[0] - 1);
                  iz1 = clamp(iz1, 0, this.vertexCount[1] - 1);
                  var a = this.getNormal(ix0, iz0);
                  var b = this.getNormal(ix1, iz0);
                  var c = this.getNormal(ix0, iz1);
                  var d = this.getNormal(ix1, iz1);
                  var m = new Vec3();
                  Vec3.add(m, b, c).multiplyScalar(0.5);

                  if (dx + dz <= 1.0) {
                    // d = m + (m - a);
                    d.set(m);
                    d.subtract(a);
                    d.add(m);
                  } else {
                    // a = m + (m - d);
                    a.set(m);
                    a.subtract(d);
                    a.add(m);
                  }

                  var n1 = new Vec3();
                  var n2 = new Vec3();
                  var n = new Vec3();
                  Vec3.lerp(n1, a, b, dx);
                  Vec3.lerp(n2, c, d, dx);
                  Vec3.lerp(n, n1, n2, dz);
                  return n;
                }
                /**
                 * @en set weight
                 * @zh 设置权重
                 */

              }, {
                key: "setWeight",
                value: function setWeight(i, j, w) {
                  var index = j * this._weightMapSize * this._blockCount[0] + i;
                  this._weights[index * 4 + 0] = w.x * 255;
                  this._weights[index * 4 + 1] = w.y * 255;
                  this._weights[index * 4 + 2] = w.z * 255;
                  this._weights[index * 4 + 3] = w.w * 255;
                }
                /**
                 * @en get weight
                 * @zh 获得权重
                 */

              }, {
                key: "getWeight",
                value: function getWeight(i, j) {
                  var index = j * this._weightMapSize * this._blockCount[0] + i;
                  var w = new Vec4();
                  w.x = this._weights[index * 4 + 0] / 255.0;
                  w.y = this._weights[index * 4 + 1] / 255.0;
                  w.z = this._weights[index * 4 + 2] / 255.0;
                  w.w = this._weights[index * 4 + 3] / 255.0;
                  return w;
                }
                /**
                 * @en get normal by point
                 * @zh 根据点的坐标获得权重
                 */

              }, {
                key: "getWeightAt",
                value: function getWeightAt(x, y) {
                  var fx = x / this.tileSize;
                  var fy = y / this.tileSize;
                  var ix0 = Math.floor(fx);
                  var iz0 = Math.floor(fy);
                  var ix1 = ix0 + 1;
                  var iz1 = iz0 + 1;
                  var dx = fx - ix0;
                  var dz = fy - iz0;

                  if (ix0 < 0 || ix0 > this.vertexCount[0] - 1 || iz0 < 0 || iz0 > this.vertexCount[1] - 1) {
                    return null;
                  }

                  ix0 = clamp(ix0, 0, this.vertexCount[0] - 1);
                  iz0 = clamp(iz0, 0, this.vertexCount[1] - 1);
                  ix1 = clamp(ix1, 0, this.vertexCount[0] - 1);
                  iz1 = clamp(iz1, 0, this.vertexCount[1] - 1);
                  var a = this.getWeight(ix0, iz0);
                  var b = this.getWeight(ix1, iz0);
                  var c = this.getWeight(ix0, iz1);
                  var d = this.getWeight(ix1, iz1);
                  var m = new Vec4();
                  Vec4.add(m, b, c).multiplyScalar(0.5);

                  if (dx + dz <= 1.0) {
                    d = new Vec4();
                    Vec4.subtract(d, m, a).add(m);
                  } else {
                    a = new Vec4();
                    Vec4.subtract(a, m, d).add(m);
                  }

                  var n1 = new Vec4();
                  var n2 = new Vec4();
                  var n = new Vec4();
                  Vec4.lerp(n1, a, b, dx);
                  Vec4.lerp(n2, c, d, dx);
                  Vec4.lerp(n, n1, n2, dz);
                  return n;
                }
                /**
                 * @en get block info
                 * @zh 获得地形块信息
                 */

              }, {
                key: "getBlockInfo",
                value: function getBlockInfo(i, j) {
                  return this._blockInfos[j * this._blockCount[0] + i];
                }
                /**
                 * @en get block
                 * @zh 获得地形块对象
                 */

              }, {
                key: "getBlock",
                value: function getBlock(i, j) {
                  return this._blocks[j * this._blockCount[0] + i];
                }
                /**
                 * @en get all blocks
                 * @zh 获得地形块缓存
                 */

              }, {
                key: "getBlocks",
                value: function getBlocks() {
                  return this._blocks;
                }
                /**
                 * @en ray check
                 * @zh 射线检测
                 * @param start ray start
                 * @param dir ray direction
                 * @param step ray step
                 * @param worldSpace is world space
                 */

              }, {
                key: "rayCheck",
                value: function rayCheck(start, dir, step) {
                  var worldSpace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
                  var MAX_COUNT = 2000;
                  var trace = start;

                  if (worldSpace) {
                    Vec3.subtract(trace, start, this.node.getWorldPosition());
                  }

                  var delta = new Vec3();
                  delta.set(dir);
                  delta.multiplyScalar(step);
                  var position = null;

                  if (dir.equals(new Vec3(0, 1, 0))) {
                    var y = this.getHeightAt(trace.x, trace.z);

                    if (y != null && trace.y <= y) {
                      position = new Vec3(trace.x, y, trace.z);
                    }
                  } else if (dir.equals(new Vec3(0, -1, 0))) {
                    var _y2 = this.getHeightAt(trace.x, trace.z);

                    if (_y2 != null && trace.y >= _y2) {
                      position = new Vec3(trace.x, _y2, trace.z);
                    }
                  } else {
                    var i = 0; // 优先大步进查找

                    while (i++ < MAX_COUNT) {
                      var _y3 = this.getHeightAt(trace.x, trace.z);

                      if (_y3 != null && trace.y <= _y3) {
                        break;
                      }

                      trace.add(dir);
                    } // 穷举法


                    while (i++ < MAX_COUNT) {
                      var _y4 = this.getHeightAt(trace.x, trace.z);

                      if (_y4 != null && trace.y <= _y4) {
                        position = new Vec3(trace.x, _y4, trace.z);
                        break;
                      }

                      trace.add(delta);
                    }
                  }

                  return position;
                }
              }, {
                key: "_getSharedIndexBuffer",
                value: function _getSharedIndexBuffer() {
                  return this._sharedIndexBuffer;
                }
              }, {
                key: "_resetLightmap",
                value: function _resetLightmap(enble) {
                  this._lightmapInfos.length = 0;

                  if (enble) {
                    for (var i = 0; i < this._blockCount[0] * this._blockCount[1]; ++i) {
                      this._lightmapInfos.push(new TerrainBlockLightmapInfo());
                    }
                  }
                }
              }, {
                key: "_updateLightmap",
                value: function _updateLightmap(blockId, tex, uOff, vOff, uScale, vScale) {
                  this._lightmapInfos[blockId].texture = tex;
                  this._lightmapInfos[blockId].UOff = uOff;
                  this._lightmapInfos[blockId].VOff = vOff;
                  this._lightmapInfos[blockId].UScale = uScale;
                  this._lightmapInfos[blockId].VScale = vScale;

                  this._blocks[blockId]._updateLightmap(this._lightmapInfos[blockId]);
                }
              }, {
                key: "_getLightmapInfo",
                value: function _getLightmapInfo(i, j) {
                  var index = j * this._blockCount[0] + i;
                  return index < this._lightmapInfos.length ? this._lightmapInfos[index] : null;
                }
              }, {
                key: "_calcNormal",
                value: function _calcNormal(x, z) {
                  var flip = 1;
                  var here = this.getPosition(x, z);
                  var right;
                  var up;

                  if (x < this.vertexCount[0] - 1) {
                    right = this.getPosition(x + 1, z);
                  } else {
                    flip *= -1;
                    right = this.getPosition(x - 1, z);
                  }

                  if (z < this.vertexCount[1] - 1) {
                    up = this.getPosition(x, z + 1);
                  } else {
                    flip *= -1;
                    up = this.getPosition(x, z - 1);
                  }

                  right.subtract(here);
                  up.subtract(here);
                  var normal = new Vec3();
                  normal.set(up);
                  normal.cross(right);
                  normal.multiplyScalar(flip);
                  normal.normalize();
                  return normal;
                }
              }, {
                key: "_buildNormals",
                value: function _buildNormals() {
                  var index = 0;

                  for (var y = 0; y < this.vertexCount[1]; ++y) {
                    for (var x = 0; x < this.vertexCount[0]; ++x) {
                      var n = this._calcNormal(x, y);

                      this._normals[index * 3 + 0] = n.x;
                      this._normals[index * 3 + 1] = n.y;
                      this._normals[index * 3 + 2] = n.z;
                      index += 1;
                    }
                  }
                }
              }, {
                key: "_buildImp",
                value: function _buildImp() {
                  var _this3 = this;

                  var restore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                  if (this.valid) {
                    return true;
                  }

                  if (!restore && this.__asset != null) {
                    this._tileSize = this.__asset.tileSize;
                    this._blockCount = this.__asset.blockCount;
                    this._weightMapSize = this.__asset.weightMapSize;
                    this._lightMapSize = this.__asset.lightMapSize;
                    this._heights = this.__asset.heights;
                    this._weights = this.__asset.weights; // build layers

                    var initial = true;

                    for (var i = 0; i < this._layers.length; ++i) {
                      if (this._layers[i] != null) {
                        initial = false;
                      }
                    }

                    if (initial && this._asset != null) {
                      var _loop = function _loop() {
                        var i = _step6.value;
                        var layer = new TerrainLayer();
                        layer.tileSize = i.tileSize;
                        legacyCC.loader.loadRes(i.detailMap, Texture2D, function (err, asset) {
                          layer.detailMap = asset;
                        });
                        _this3._layers[i.slot] = layer;
                      };

                      for (var _iterator6 = _createForOfIteratorHelperLoose(this._asset.layerInfos), _step6; !(_step6 = _iterator6()).done;) {
                        _loop();
                      }
                    }
                  }

                  if (this._blockCount[0] === 0 || this._blockCount[1] === 0) {
                    return false;
                  } // build heights & normals


                  var vertexCount = this.vertexCount[0] * this.vertexCount[1];

                  if (this._heights === null || this._heights.length !== vertexCount) {
                    this._heights = new Uint16Array(vertexCount);
                    this._normals = new Array(vertexCount * 3);

                    for (var _i7 = 0; _i7 < vertexCount; ++_i7) {
                      this._heights[_i7] = TERRAIN_HEIGHT_BASE;
                      this._normals[_i7 * 3 + 0] = 0;
                      this._normals[_i7 * 3 + 1] = 1;
                      this._normals[_i7 * 3 + 2] = 0;
                    }
                  } else {
                    this._normals = new Array(vertexCount * 3);

                    this._buildNormals();
                  } // build weights


                  var weightMapComplexityU = this._weightMapSize * this._blockCount[0];
                  var weightMapComplexityV = this._weightMapSize * this._blockCount[1];

                  if (this._weights.length !== weightMapComplexityU * weightMapComplexityV * 4) {
                    this._weights = new Uint8Array(weightMapComplexityU * weightMapComplexityV * 4);

                    for (var _i8 = 0; _i8 < weightMapComplexityU * weightMapComplexityV; ++_i8) {
                      this._weights[_i8 * 4 + 0] = 255;
                      this._weights[_i8 * 4 + 1] = 0;
                      this._weights[_i8 * 4 + 2] = 0;
                      this._weights[_i8 * 4 + 3] = 0;
                    }
                  } // build blocks


                  if (this._blockInfos.length !== this._blockCount[0] * this._blockCount[1]) {
                    this._blockInfos = [];

                    for (var j = 0; j < this._blockCount[1]; ++j) {
                      for (var _i9 = 0; _i9 < this._blockCount[0]; ++_i9) {
                        var info = new TerrainBlockInfo();

                        if (this._asset != null) {
                          info.layers[0] = this._asset.getLayer(_i9, j, 0);
                          info.layers[1] = this._asset.getLayer(_i9, j, 1);

                          if (info.layers[1] === info.layers[0]) {
                            info.layers[1] = -1;
                          }

                          info.layers[2] = this._asset.getLayer(_i9, j, 2);

                          if (info.layers[2] === info.layers[0]) {
                            info.layers[2] = -1;
                          }

                          info.layers[3] = this._asset.getLayer(_i9, j, 3);

                          if (info.layers[3] === info.layers[0]) {
                            info.layers[3] = -1;
                          }
                        }

                        this._blockInfos.push(info);
                      }
                    }
                  }

                  for (var _j3 = 0; _j3 < this._blockCount[1]; ++_j3) {
                    for (var _i10 = 0; _i10 < this._blockCount[0]; ++_i10) {
                      this._blocks.push(new TerrainBlock(this, _i10, _j3));
                    }
                  }

                  for (var _iterator7 = _createForOfIteratorHelperLoose(this._blocks), _step7; !(_step7 = _iterator7()).done;) {
                    var _i11 = _step7.value;

                    _i11.build();
                  }
                }
              }, {
                key: "_rebuildHeights",
                value: function _rebuildHeights(info) {
                  if (this.vertexCount[0] === info.vertexCount[0] && this.vertexCount[1] === info.vertexCount[1]) {
                    return false;
                  }

                  var heights = new Uint16Array(info.vertexCount[0] * info.vertexCount[1]);

                  for (var i = 0; i < heights.length; ++i) {
                    heights[i] = TERRAIN_HEIGHT_BASE;
                  }

                  var w = Math.min(this.vertexCount[0], info.vertexCount[0]);
                  var h = Math.min(this.vertexCount[1], info.vertexCount[1]);

                  for (var j = 0; j < h; ++j) {
                    for (var _i12 = 0; _i12 < w; ++_i12) {
                      var index0 = j * info.vertexCount[0] + _i12;
                      var index1 = j * this.vertexCount[0] + _i12;
                      heights[index0] = this._heights[index1];
                    }
                  }

                  this._heights = heights;
                  return true;
                }
              }, {
                key: "_rebuildWeights",
                value: function _rebuildWeights(info) {
                  var _this4 = this;

                  var oldWeightMapSize = this._weightMapSize;
                  var oldWeightMapComplexityU = this._weightMapSize * this._blockCount[0];
                  var oldWeightMapComplexityV = this._weightMapSize * this._blockCount[1];
                  var weightMapComplexityU = info.weightMapSize * info.blockCount[0];
                  var weightMapComplexityV = info.weightMapSize * info.blockCount[1];

                  if (weightMapComplexityU === oldWeightMapComplexityU && weightMapComplexityV === oldWeightMapComplexityV) {
                    return false;
                  }

                  var weights = new Uint8Array(weightMapComplexityU * weightMapComplexityV * 4);

                  for (var i = 0; i < weightMapComplexityU * weightMapComplexityV; ++i) {
                    weights[i * 4 + 0] = 255;
                    weights[i * 4 + 1] = 0;
                    weights[i * 4 + 2] = 0;
                    weights[i * 4 + 3] = 0;
                  }

                  var w = Math.min(info.blockCount[0], this._blockCount[0]);
                  var h = Math.min(info.blockCount[1], this._blockCount[1]); // get weight

                  var getOldWeight = function getOldWeight(_i, _j, _weights) {
                    var index = _j * oldWeightMapComplexityU + _i;
                    var weight = new Vec4();
                    weight.x = _weights[index * 4 + 0] / 255.0;
                    weight.y = _weights[index * 4 + 1] / 255.0;
                    weight.z = _weights[index * 4 + 2] / 255.0;
                    weight.w = _weights[index * 4 + 3] / 255.0;
                    return weight;
                  }; // sample weight


                  var sampleOldWeight = function sampleOldWeight(_x, _y, _xOff, _yOff, _weights) {
                    var ix0 = Math.floor(_x);
                    var iz0 = Math.floor(_y);
                    var ix1 = ix0 + 1;
                    var iz1 = iz0 + 1;
                    var dx = _x - ix0;
                    var dz = _y - iz0;
                    var a = getOldWeight(ix0 + _xOff, iz0 + _yOff, _this4._weights);
                    var b = getOldWeight(ix1 + _xOff, iz0 + _yOff, _this4._weights);
                    var c = getOldWeight(ix0 + _xOff, iz1 + _yOff, _this4._weights);
                    var d = getOldWeight(ix1 + _xOff, iz1 + _yOff, _this4._weights);
                    var m = new Vec4();
                    Vec4.add(m, b, c).multiplyScalar(0.5);

                    if (dx + dz <= 1.0) {
                      d.set(m);
                      d.subtract(a);
                      d.add(m);
                    } else {
                      a.set(m);
                      a.subtract(d);
                      a.add(m);
                    }

                    var n1 = new Vec4();
                    var n2 = new Vec4();
                    var n = new Vec4();
                    Vec4.lerp(n1, a, b, dx);
                    Vec4.lerp(n2, c, d, dx);
                    Vec4.lerp(n, n1, n2, dz);
                    return n;
                  }; // fill new weights


                  for (var j = 0; j < h; ++j) {
                    for (var _i13 = 0; _i13 < w; ++_i13) {
                      var uOff = _i13 * oldWeightMapSize;
                      var vOff = j * oldWeightMapSize;

                      for (var v = 0; v < info.weightMapSize; ++v) {
                        for (var u = 0; u < info.weightMapSize; ++u) {
                          // tslint:disable-next-line: no-shadowed-variable
                          var _w = void 0;

                          if (info.weightMapSize === oldWeightMapSize) {
                            _w = getOldWeight(u + uOff, v + vOff, this._weights);
                          } else {
                            var x = u / (info.weightMapSize - 1) * (oldWeightMapSize - 1);
                            var y = v / (info.weightMapSize - 1) * (oldWeightMapSize - 1);
                            _w = sampleOldWeight(x, y, uOff, vOff, this._weights);
                          }

                          var du = _i13 * info.weightMapSize + u;
                          var dv = j * info.weightMapSize + v;
                          var index = dv * weightMapComplexityU + du;
                          weights[index * 4 + 0] = _w.x * 255;
                          weights[index * 4 + 1] = _w.y * 255;
                          weights[index * 4 + 2] = _w.z * 255;
                          weights[index * 4 + 3] = _w.w * 255;
                        }
                      }
                    }
                  }

                  this._weights = weights;
                  return true;
                }
              }, {
                key: "_asset",
                set: function set(value) {
                  if (this.__asset !== value) {
                    this.__asset = value;

                    if (this.__asset != null && this.valid) {
                      // rebuild
                      for (var _iterator8 = _createForOfIteratorHelperLoose(this._blocks), _step8; !(_step8 = _iterator8()).done;) {
                        var block = _step8.value;
                        block.destroy();
                      }

                      this._blocks = [];
                      this._blockInfos = [];

                      this._buildImp();
                    }
                  }
                },
                get: function get() {
                  return this.__asset;
                }
                /**
                 * @en Terrain effect asset
                 * @zh 地形特效资源
                 */

              }, {
                key: "effectAsset",
                set: function set(value) {
                  if (this._effectAsset === value) {
                    return;
                  }

                  this._effectAsset = value;

                  for (var _iterator9 = _createForOfIteratorHelperLoose(this._blocks), _step9; !(_step9 = _iterator9()).done;) {
                    var i = _step9.value;

                    i._invalidMaterial();
                  }
                },
                get: function get() {
                  return this._effectAsset;
                }
                /**
                 * @en get terrain size
                 * @zh 获得地形大小
                 */

              }, {
                key: "size",
                get: function get() {
                  var sz = new Size(0, 0);
                  sz.width = this.blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY * this.tileSize;
                  sz.height = this.blockCount[1] * TERRAIN_BLOCK_TILE_COMPLEXITY * this.tileSize;
                  return sz;
                }
                /**
                 * @en get tile size
                 * @zh 获得栅格大小
                 */

              }, {
                key: "tileSize",
                get: function get() {
                  return this._tileSize;
                }
                /**
                 * @en get tile count
                 * @zh 获得栅格数量
                 */

              }, {
                key: "tileCount",
                get: function get() {
                  return [this.blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY, this.blockCount[1] * TERRAIN_BLOCK_TILE_COMPLEXITY];
                }
                /**
                 * @en get vertex count
                 * @zh 获得顶点数量
                 */

              }, {
                key: "vertexCount",
                get: function get() {
                  var _vertexCount = this.tileCount;
                  _vertexCount[0] += 1;
                  _vertexCount[1] += 1;
                  return _vertexCount;
                }
                /**
                 * @en get block count
                 * @zh 获得地形块数量
                 */

              }, {
                key: "blockCount",
                get: function get() {
                  return this._blockCount;
                }
                /**
                 * @en get light map size
                 * @zh 获得光照图大小
                 */

              }, {
                key: "lightMapSize",
                get: function get() {
                  return this._lightMapSize;
                }
                /**
                 * @en get weight map size
                 * @zh 获得权重图大小
                 */

              }, {
                key: "weightMapSize",
                get: function get() {
                  return this._weightMapSize;
                }
                /**
                 * @en get height buffer
                 * @zh 获得高度缓存
                 */

              }, {
                key: "heights",
                get: function get() {
                  return this._heights;
                }
                /**
                 * @en get weight buffer
                 * @zh 获得权重缓存
                 */

              }, {
                key: "weights",
                get: function get() {
                  return this._weights;
                }
                /**
                 * @en check valid
                 * @zh 检测是否有效
                 */

              }, {
                key: "valid",
                get: function get() {
                  return this._blocks.length > 0;
                }
                /**
                 * @en get terrain info
                 * @zh 获得地形信息
                 */

              }, {
                key: "info",
                get: function get() {
                  var ti = new TerrainInfo();
                  ti.tileSize = this.tileSize;
                  ti.blockCount[0] = this.blockCount[0];
                  ti.blockCount[1] = this.blockCount[1];
                  ti.weightMapSize = this.weightMapSize;
                  ti.lightMapSize = this.lightMapSize;
                  return ti;
                }
              }]);

              return Terrain;
            }(Component), _temp5), (_descriptor13 = _applyDecoratedDescriptor(_class14.prototype, "__asset", [_dec7, serializable, disallowAnimation], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor14 = _applyDecoratedDescriptor(_class14.prototype, "_effectAsset", [_dec8, serializable, disallowAnimation, _dec9], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor15 = _applyDecoratedDescriptor(_class14.prototype, "_layers", [_dec10, serializable, disallowAnimation], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _descriptor16 = _applyDecoratedDescriptor(_class14.prototype, "_blockInfos", [serializable, disallowAnimation], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _descriptor17 = _applyDecoratedDescriptor(_class14.prototype, "_lightmapInfos", [serializable, disallowAnimation], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _applyDecoratedDescriptor(_class14.prototype, "_asset", [_dec11, _dec12], Object.getOwnPropertyDescriptor(_class14.prototype, "_asset"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "effectAsset", [_dec13, _dec14], Object.getOwnPropertyDescriptor(_class14.prototype, "effectAsset"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "info", [_dec15], Object.getOwnPropertyDescriptor(_class14.prototype, "info"), _class14.prototype)), _class14)) || _class13) || _class13) || _class13) || _class13));

        }
    };
});
