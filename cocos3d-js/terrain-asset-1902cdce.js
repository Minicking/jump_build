System.register(['./deprecated-4ec15e5e.js', './deprecated-b99c04b5.js'], function (exports) {
    'use strict';
    var _classCallCheck, ccclass, _inherits, _possibleConstructorReturn, _getPrototypeOf, _createClass, legacyCC, Asset;
    return {
        setters: [function (module) {
            _classCallCheck = module.d;
            ccclass = module.c;
            _inherits = module.b;
            _possibleConstructorReturn = module.e;
            _getPrototypeOf = module.f;
            _createClass = module.j;
            legacyCC = module.l;
            Asset = module.aC;
        }, function () {}],
        execute: function () {

            var _dec, _class, _temp;
            var TERRAIN_MAX_LEVELS = exports('j', 4);
            var TERRAIN_MAX_BLEND_LAYERS = exports('k', 4);
            var TERRAIN_MAX_LAYER_COUNT = exports('d', 256);
            var TERRAIN_BLOCK_TILE_COMPLEXITY = exports('b', 32);
            var TERRAIN_BLOCK_VERTEX_COMPLEXITY = exports('a', 33);
            var TERRAIN_BLOCK_VERTEX_SIZE = exports('c', 8); // position + normal + uv

            var TERRAIN_HEIGHT_BASE = exports('h', 32768);
            var TERRAIN_HEIGHT_FACTORY = exports('i', 1.0 / 512.0);
            var TERRAIN_HEIGHT_FMIN = exports('g', -TERRAIN_HEIGHT_BASE * TERRAIN_HEIGHT_FACTORY);
            var TERRAIN_HEIGHT_FMAX = exports('f', (65535 - TERRAIN_HEIGHT_BASE) * TERRAIN_HEIGHT_FACTORY);
            var TERRAIN_NORTH_INDEX = exports('l', 0);
            var TERRAIN_SOUTH_INDEX = exports('m', 1);
            var TERRAIN_WEST_INDEX = exports('n', 2);
            var TERRAIN_EAST_INDEX = exports('o', 3);
            var TERRAIN_DATA_VERSION = exports('p', 0x01010001);
            var TERRAIN_DATA_VERSION2 = exports('q', 0x01010002);
            var TERRAIN_DATA_VERSION3 = exports('r', 0x01010003);
            var TERRAIN_DATA_VERSION_DEFAULT = exports('s', 0x01010111);

            var TerrainBuffer = /*#__PURE__*/function () {
              function TerrainBuffer() {
                _classCallCheck(this, TerrainBuffer);

                this.length = 0;
                this.buffer = new Uint8Array(2048);
                this._buffView = new DataView(this.buffer.buffer);
                this._seekPos = 0;
              }

              _createClass(TerrainBuffer, [{
                key: "reserve",
                value: function reserve(size) {
                  if (this.buffer.byteLength > size) {
                    return;
                  }

                  var capacity = this.buffer.byteLength;

                  while (capacity < size) {
                    capacity += capacity;
                  }

                  var temp = new Uint8Array(capacity);

                  for (var i = 0; i < this.length; ++i) {
                    temp[i] = this.buffer[i];
                  }

                  this.buffer = temp;
                  this._buffView = new DataView(this.buffer.buffer);
                }
              }, {
                key: "assign",
                value: function assign(buff) {
                  this.buffer = buff;
                  this.length = buff.length;
                  this._seekPos = buff.byteOffset;
                  this._buffView = new DataView(buff.buffer);
                }
              }, {
                key: "writeInt8",
                value: function writeInt8(value) {
                  this.reserve(this.length + 1);

                  this._buffView.setInt8(this.length, value);

                  this.length += 1;
                }
              }, {
                key: "writeInt16",
                value: function writeInt16(value) {
                  this.reserve(this.length + 2);

                  this._buffView.setInt16(this.length, value, true);

                  this.length += 2;
                }
              }, {
                key: "writeInt32",
                value: function writeInt32(value) {
                  this.reserve(this.length + 4);

                  this._buffView.setInt32(this.length, value, true);

                  this.length += 4;
                }
              }, {
                key: "writeIntArray",
                value: function writeIntArray(value) {
                  this.reserve(this.length + 4 * value.length);

                  for (var i = 0; i < value.length; ++i) {
                    this._buffView.setInt32(this.length + i * 4, value[i], true);
                  }

                  this.length += 4 * value.length;
                }
              }, {
                key: "writeFloat",
                value: function writeFloat(value) {
                  this.reserve(this.length + 4);

                  this._buffView.setFloat32(this.length, value, true);

                  this.length += 4;
                }
              }, {
                key: "writeFloatArray",
                value: function writeFloatArray(value) {
                  this.reserve(this.length + 4 * value.length);

                  for (var i = 0; i < value.length; ++i) {
                    this._buffView.setFloat32(this.length + i * 4, value[i], true);
                  }

                  this.length += 4 * value.length;
                }
              }, {
                key: "writeString",
                value: function writeString(value) {
                  this.reserve(this.length + value.length + 4);

                  this._buffView.setInt32(this.length, value.length, true);

                  for (var i = 0; i < value.length; ++i) {
                    this._buffView.setInt8(this.length + 4 + i, value.charCodeAt(i));
                  }

                  this.length += value.length + 4;
                }
              }, {
                key: "readInt8",
                value: function readInt8() {
                  var value = this._buffView.getInt8(this._seekPos);

                  this._seekPos += 1;
                  return value;
                }
              }, {
                key: "readInt16",
                value: function readInt16() {
                  var value = this._buffView.getInt16(this._seekPos, true);

                  this._seekPos += 2;
                  return value;
                }
              }, {
                key: "readInt",
                value: function readInt() {
                  var value = this._buffView.getInt32(this._seekPos, true);

                  this._seekPos += 4;
                  return value;
                }
              }, {
                key: "readIntArray",
                value: function readIntArray(value) {
                  for (var i = 0; i < value.length; ++i) {
                    value[i] = this._buffView.getInt32(this._seekPos + i * 4, true);
                  }

                  this._seekPos += 4 * value.length;
                  return value;
                }
              }, {
                key: "readFloat",
                value: function readFloat() {
                  var value = this._buffView.getFloat32(this._seekPos, true);

                  this._seekPos += 4;
                  return value;
                }
              }, {
                key: "readFloatArray",
                value: function readFloatArray(value) {
                  for (var i = 0; i < value.length; ++i) {
                    value[i] = this._buffView.getFloat32(this._seekPos + i * 4, true);
                  }

                  this._seekPos += 4 * value.length;
                  return value;
                }
              }, {
                key: "readString",
                value: function readString() {
                  var length = this.readInt();
                  var value = '';

                  for (var i = 0; i < length; ++i) {
                    value += String.fromCharCode(this.readInt8());
                  }

                  return value;
                }
              }]);

              return TerrainBuffer;
            }();
            /**
             * @en terrain layer info
             * @zh 地形纹理信息
             */


            var TerrainLayerInfo = exports('e', function TerrainLayerInfo() {
              _classCallCheck(this, TerrainLayerInfo);

              this.slot = 0;
              this.tileSize = 1;
              this.detailMap = '';
            });
            /**
             * @en terrain asset
             * @zh 地形资源
             */

            var TerrainAsset = exports('T', (_dec = ccclass('cc.TerrainAsset'), _dec(_class = (_temp = /*#__PURE__*/function (_Asset) {
              _inherits(TerrainAsset, _Asset);

              function TerrainAsset() {
                var _this;

                _classCallCheck(this, TerrainAsset);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(TerrainAsset).call(this));
                _this._data = null;
                _this._tileSize = 1;
                _this._blockCount = [1, 1];
                _this._weightMapSize = 128;
                _this._lightMapSize = 128;
                _this._heights = new Uint16Array();
                _this._weights = new Uint8Array();
                _this._layerBuffer = [-1, -1, -1, -1];
                _this._layerInfos = [];
                _this.loaded = false;
                return _this;
              }

              _createClass(TerrainAsset, [{
                key: "getLayer",

                /**
                 * @en get layer
                 * @zh 获得纹理索引
                 * @param xBlock block index x
                 * @param yBlock block index y
                 * @param layerId layer id
                 */
                value: function getLayer(xBlock, yBlock, layerId) {
                  var blockId = yBlock * this.blockCount[0] + xBlock;
                  var index = blockId * 4 + layerId;

                  if (xBlock < this.blockCount[0] && yBlock < this.blockCount[1] && index < this._layerBuffer.length) {
                    return this._layerBuffer[index];
                  }

                  return -1;
                }
              }, {
                key: "getHeight",
                value: function getHeight(i, j) {
                  var vertexCountX = this._blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY + 1;
                  return (this._heights[j * vertexCountX + i] - TERRAIN_HEIGHT_BASE) * TERRAIN_HEIGHT_FACTORY;
                }
              }, {
                key: "getVertexCountI",
                value: function getVertexCountI() {
                  if (this._blockCount.length < 1) return 0;
                  return this._blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY + 1;
                }
              }, {
                key: "getVertexCountJ",
                value: function getVertexCountJ() {
                  if (this._blockCount.length < 2) return 0;
                  return this._blockCount[1] * TERRAIN_BLOCK_TILE_COMPLEXITY + 1;
                }
              }, {
                key: "_setNativeData",
                value: function _setNativeData(_nativeData) {
                  this._data = _nativeData;
                }
              }, {
                key: "_loadNativeData",
                value: function _loadNativeData(_nativeData) {
                  var stream = new TerrainBuffer();
                  stream.assign(_nativeData); // version

                  var version = stream.readInt();

                  if (version === TERRAIN_DATA_VERSION_DEFAULT) {
                    return true;
                  }

                  if (version !== TERRAIN_DATA_VERSION && version !== TERRAIN_DATA_VERSION2 && version !== TERRAIN_DATA_VERSION3) {
                    return false;
                  } // geometry info


                  this.tileSize = stream.readFloat();
                  stream.readIntArray(this._blockCount);
                  this.weightMapSize = stream.readInt16();
                  this.lightMapSize = stream.readInt16(); // heights

                  var heightBufferSize = stream.readInt();
                  this.heights = new Uint16Array(heightBufferSize);

                  for (var i = 0; i < this.heights.length; ++i) {
                    this.heights[i] = stream.readInt16();
                  } // weights


                  var WeightBufferSize = stream.readInt();
                  this.weights = new Uint8Array(WeightBufferSize);

                  for (var _i = 0; _i < this.weights.length; ++_i) {
                    this.weights[_i] = stream.readInt8();
                  } // layer buffer


                  if (version >= TERRAIN_DATA_VERSION2) {
                    var layerBufferSize = stream.readInt();
                    this.layerBuffer = new Array(layerBufferSize);

                    for (var _i2 = 0; _i2 < this.layerBuffer.length; ++_i2) {
                      this.layerBuffer[_i2] = stream.readInt16();
                    }
                  } // layer infos


                  if (version >= TERRAIN_DATA_VERSION3) {
                    var layerInfoSize = stream.readInt();
                    this.layerInfos = new Array(layerInfoSize);

                    for (var _i3 = 0; _i3 < this.layerInfos.length; ++_i3) {
                      this.layerInfos[_i3] = new TerrainLayerInfo();
                      this.layerInfos[_i3].slot = stream.readInt();
                      this.layerInfos[_i3].tileSize = stream.readFloat();
                      this.layerInfos[_i3].detailMap = stream.readString();
                    }
                  }

                  return true;
                }
              }, {
                key: "_exportNativeData",
                value: function _exportNativeData() {
                  var stream = new TerrainBuffer(); // version

                  stream.writeInt32(TERRAIN_DATA_VERSION3); // geometry info

                  stream.writeFloat(this.tileSize);
                  stream.writeIntArray(this._blockCount);
                  stream.writeInt16(this.weightMapSize);
                  stream.writeInt16(this.lightMapSize); // heights

                  stream.writeInt32(this.heights.length);

                  for (var i = 0; i < this.heights.length; ++i) {
                    stream.writeInt16(this.heights[i]);
                  } // weights


                  stream.writeInt32(this.weights.length);

                  for (var _i4 = 0; _i4 < this.weights.length; ++_i4) {
                    stream.writeInt8(this.weights[_i4]);
                  } // layer buffer


                  stream.writeInt32(this.layerBuffer.length);

                  for (var _i5 = 0; _i5 < this.layerBuffer.length; ++_i5) {
                    stream.writeInt16(this.layerBuffer[_i5]);
                  } // layer infos


                  stream.writeInt32(this.layerInfos.length);

                  for (var _i6 = 0; _i6 < this.layerInfos.length; ++_i6) {
                    stream.writeInt32(this.layerInfos[_i6].slot);
                    stream.writeFloat(this.layerInfos[_i6].tileSize);
                    stream.writeString(this.layerInfos[_i6].detailMap);
                  }

                  return stream.buffer;
                }
              }, {
                key: "_exportDefaultNativeData",
                value: function _exportDefaultNativeData() {
                  var stream = new TerrainBuffer();
                  stream.writeInt32(TERRAIN_DATA_VERSION_DEFAULT);
                  return stream.buffer;
                }
              }, {
                key: "_nativeAsset",
                get: function get() {
                  return this._data.buffer;
                },
                set: function set(value) {
                  if (this._data && this._data.byteLength === value.byteLength) {
                    this._data.set(new Uint8Array(value));

                    if (legacyCC.loader._cache[this.nativeUrl]) {
                      legacyCC.loader._cache[this.nativeUrl].content = this._data.buffer;
                    }
                  } else {
                    this._data = new Uint8Array(value);
                  }

                  this._loadNativeData(this._data);

                  this.loaded = true;
                  this.emit('load');
                }
                /**
                 * @en tile size
                 * @zh 栅格大小
                 */

              }, {
                key: "tileSize",
                set: function set(value) {
                  this._tileSize = value;
                },
                get: function get() {
                  return this._tileSize;
                }
                /**
                 * @en block count
                 * @zh 块数量
                 */

              }, {
                key: "blockCount",
                set: function set(value) {
                  this._blockCount = value;
                },
                get: function get() {
                  return this._blockCount;
                }
                /**
                 * @en light map size
                 * @zh 光照图大小
                 */

              }, {
                key: "lightMapSize",
                set: function set(value) {
                  this._lightMapSize = value;
                },
                get: function get() {
                  return this._lightMapSize;
                }
                /**
                 * @en weight map size
                 * @zh 权重图大小
                 */

              }, {
                key: "weightMapSize",
                set: function set(value) {
                  this._weightMapSize = value;
                },
                get: function get() {
                  return this._weightMapSize;
                }
                /**
                 * @en height buffer
                 * @zh 高度缓存
                 */

              }, {
                key: "heights",
                set: function set(value) {
                  this._heights = value;
                },
                get: function get() {
                  return this._heights;
                }
                /**
                 * @en weight buffer
                 * @zh 权重缓存
                 */

              }, {
                key: "weights",
                set: function set(value) {
                  this._weights = value;
                },
                get: function get() {
                  return this._weights;
                }
                /**
                 * @en layer buffer
                 * @zh 纹理索引缓存
                 */

              }, {
                key: "layerBuffer",
                set: function set(value) {
                  this._layerBuffer = value;
                },
                get: function get() {
                  return this._layerBuffer;
                }
                /**
                 * @en layer info
                 * @zh 纹理信息
                 */

              }, {
                key: "layerInfos",
                set: function set(value) {
                  this._layerInfos = value;
                },
                get: function get() {
                  return this._layerInfos;
                }
              }]);

              return TerrainAsset;
            }(Asset), _temp)) || _class));

        }
    };
});
