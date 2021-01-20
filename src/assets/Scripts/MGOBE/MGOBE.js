(function (root) {
  var exports = undefined,
      module = undefined,
      require = undefined;
  var define = undefined;
  (function () {
    /*v1.3.6_1*/
    !function (e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.MGOBE = t() : e.MGOBE = t();
    }({}, function () {
      return function (e) {
        var t = {};

        function n(r) {
          if (t[r]) return t[r].exports;
          var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
          };
          return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
        }

        return n.m = e, n.c = t, n.d = function (e, t, r) {
          n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
          });
        }, n.r = function (e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          });
        }, n.t = function (e, t) {
          if (1 & t && (e = n(e)), 8 & t) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var r = Object.create(null);
          if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
          }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
            return e[t];
          }.bind(null, i));
          return r;
        }, n.n = function (e) {
          var t = e && e.__esModule ? function () {
            return e.default;
          } : function () {
            return e;
          };
          return n.d(t, "a", t), t;
        }, n.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }, n.p = "", n(n.s = 14);
      }([function (e, t, n) {
        var r;

        e.exports = r = r || function (e, t) {
          var n = Object.create || function () {
            function e() {}

            return function (t) {
              var n;
              return e.prototype = t, n = new e(), e.prototype = null, n;
            };
          }(),
              r = {},
              i = r.lib = {},
              o = i.Base = {
            extend: function (e) {
              var t = n(this);
              return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {
                t.$super.init.apply(this, arguments);
              }), t.init.prototype = t, t.$super = this, t;
            },
            create: function () {
              var e = this.extend();
              return e.init.apply(e, arguments), e;
            },
            init: function () {},
            mixIn: function (e) {
              for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);

              e.hasOwnProperty("toString") && (this.toString = e.toString);
            },
            clone: function () {
              return this.init.prototype.extend(this);
            }
          },
              s = i.WordArray = o.extend({
            init: function (e, t) {
              e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;
            },
            toString: function (e) {
              return (e || _).stringify(this);
            },
            concat: function (e) {
              var t = this.words,
                  n = e.words,
                  r = this.sigBytes,
                  i = e.sigBytes;
              if (this.clamp(), r % 4) for (var o = 0; o < i; o++) {
                var s = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                t[r + o >>> 2] |= s << 24 - (r + o) % 4 * 8;
              } else for (o = 0; o < i; o += 4) t[r + o >>> 2] = n[o >>> 2];
              return this.sigBytes += i, this;
            },
            clamp: function () {
              var t = this.words,
                  n = this.sigBytes;
              t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
            },
            clone: function () {
              var e = o.clone.call(this);
              return e.words = this.words.slice(0), e;
            },
            random: function (t) {
              for (var n, r = [], i = function (t) {
                t = t;
                var n = 987654321,
                    r = 4294967295;
                return function () {
                  var i = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & r) & r;
                  return i /= 4294967296, (i += .5) * (e.random() > .5 ? 1 : -1);
                };
              }, o = 0; o < t; o += 4) {
                var a = i(4294967296 * (n || e.random()));
                n = 987654071 * a(), r.push(4294967296 * a() | 0);
              }

              return new s.init(r, t);
            }
          }),
              a = r.enc = {},
              _ = a.Hex = {
            stringify: function (e) {
              for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
                var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16));
              }

              return r.join("");
            },
            parse: function (e) {
              for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;

              return new s.init(n, t / 2);
            }
          },
              E = a.Latin1 = {
            stringify: function (e) {
              for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
                var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                r.push(String.fromCharCode(o));
              }

              return r.join("");
            },
            parse: function (e) {
              for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;

              return new s.init(n, t);
            }
          },
              l = a.Utf8 = {
            stringify: function (e) {
              try {
                return decodeURIComponent(escape(E.stringify(e)));
              } catch (e) {
                throw new Error("Malformed UTF-8 data");
              }
            },
            parse: function (e) {
              return E.parse(unescape(encodeURIComponent(e)));
            }
          },
              d = i.BufferedBlockAlgorithm = o.extend({
            reset: function () {
              this._data = new s.init(), this._nDataBytes = 0;
            },
            _append: function (e) {
              "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
            },
            _process: function (t) {
              var n = this._data,
                  r = n.words,
                  i = n.sigBytes,
                  o = this.blockSize,
                  a = i / (4 * o),
                  _ = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * o,
                  E = e.min(4 * _, i);

              if (_) {
                for (var l = 0; l < _; l += o) this._doProcessBlock(r, l);

                var d = r.splice(0, _);
                n.sigBytes -= E;
              }

              return new s.init(d, E);
            },
            clone: function () {
              var e = o.clone.call(this);
              return e._data = this._data.clone(), e;
            },
            _minBufferSize: 0
          }),
              u = (i.Hasher = d.extend({
            cfg: o.extend(),
            init: function (e) {
              this.cfg = this.cfg.extend(e), this.reset();
            },
            reset: function () {
              d.reset.call(this), this._doReset();
            },
            update: function (e) {
              return this._append(e), this._process(), this;
            },
            finalize: function (e) {
              return e && this._append(e), this._doFinalize();
            },
            blockSize: 16,
            _createHelper: function (e) {
              return function (t, n) {
                return new e.init(n).finalize(t);
              };
            },
            _createHmacHelper: function (e) {
              return function (t, n) {
                return new u.HMAC.init(e, n).finalize(t);
              };
            }
          }), r.algo = {});

          return r;
        }(Math);
      }, function (e, t) {}, function (e) {
        e.exports = JSON.parse('{"sdkType":1,"version":"1.3.6"}');
      }, function (e, t, n) {
        var r, i, o;
        e.exports = (o = n(0), i = (r = o).lib.WordArray, r.enc.Base64 = {
          stringify: function (e) {
            var t = e.words,
                n = e.sigBytes,
                r = this._map;
            e.clamp();

            for (var i = [], o = 0; o < n; o += 3) for (var s = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, a = 0; a < 4 && o + .75 * a < n; a++) i.push(r.charAt(s >>> 6 * (3 - a) & 63));

            var _ = r.charAt(64);

            if (_) for (; i.length % 4;) i.push(_);
            return i.join("");
          },
          parse: function (e) {
            var t = e.length,
                n = this._map,
                r = this._reverseMap;

            if (!r) {
              r = this._reverseMap = [];

              for (var o = 0; o < n.length; o++) r[n.charCodeAt(o)] = o;
            }

            var s = n.charAt(64);

            if (s) {
              var a = e.indexOf(s);
              -1 !== a && (t = a);
            }

            return function (e, t, n) {
              for (var r = [], o = 0, s = 0; s < t; s++) if (s % 4) {
                var a = n[e.charCodeAt(s - 1)] << s % 4 * 2,
                    _ = n[e.charCodeAt(s)] >>> 6 - s % 4 * 2;

                r[o >>> 2] |= (a | _) << 24 - o % 4 * 8, o++;
              }

              return i.create(r, o);
            }(e, t, r);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }, o.enc.Base64);
      }, function (e, t, n) {
        var r;
        e.exports = (r = n(0), n(5), n(6), r.HmacSHA1);
      }, function (e, t, n) {
        var r, i, o, s, a, _, E, l;

        e.exports = (i = (r = l = n(0)).lib, o = i.WordArray, s = i.Hasher, a = r.algo, _ = [], E = a.SHA1 = s.extend({
          _doReset: function () {
            this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function (e, t) {
            for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], s = n[3], a = n[4], E = 0; E < 80; E++) {
              if (E < 16) _[E] = 0 | e[t + E];else {
                var l = _[E - 3] ^ _[E - 8] ^ _[E - 14] ^ _[E - 16];
                _[E] = l << 1 | l >>> 31;
              }
              var d = (r << 5 | r >>> 27) + a + _[E];
              d += E < 20 ? 1518500249 + (i & o | ~i & s) : E < 40 ? 1859775393 + (i ^ o ^ s) : E < 60 ? (i & o | i & s | o & s) - 1894007588 : (i ^ o ^ s) - 899497514, a = s, s = o, o = i << 30 | i >>> 2, i = r, r = d;
            }

            n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + o | 0, n[3] = n[3] + s | 0, n[4] = n[4] + a | 0;
          },
          _doFinalize: function () {
            var e = this._data,
                t = e.words,
                n = 8 * this._nDataBytes,
                r = 8 * e.sigBytes;
            return t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), t[15 + (r + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash;
          },
          clone: function () {
            var e = s.clone.call(this);
            return e._hash = this._hash.clone(), e;
          }
        }), r.SHA1 = s._createHelper(E), r.HmacSHA1 = s._createHmacHelper(E), l.SHA1);
      }, function (e, t, n) {
        var r, i, o;
        e.exports = (i = (r = n(0)).lib.Base, o = r.enc.Utf8, void (r.algo.HMAC = i.extend({
          init: function (e, t) {
            e = this._hasher = new e.init(), "string" == typeof t && (t = o.parse(t));
            var n = e.blockSize,
                r = 4 * n;
            t.sigBytes > r && (t = e.finalize(t)), t.clamp();

            for (var i = this._oKey = t.clone(), s = this._iKey = t.clone(), a = i.words, _ = s.words, E = 0; E < n; E++) a[E] ^= 1549556828, _[E] ^= 909522486;

            i.sigBytes = s.sigBytes = r, this.reset();
          },
          reset: function () {
            var e = this._hasher;
            e.reset(), e.update(this._iKey);
          },
          update: function (e) {
            return this._hasher.update(e), this;
          },
          finalize: function (e) {
            var t = this._hasher,
                n = t.finalize(e);
            return t.reset(), t.finalize(this._oKey.clone().concat(n));
          }
        })));
      }, function (e, t, n) {
        var r, i;
        void 0 === (i = "function" == typeof (r = function (e) {
          "use strict";

          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;

          var t = function () {
            function e() {
              var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                  n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                  r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
              !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, e);
              var i,
                  o,
                  s = "";
              this.escapeRegExp = function (e) {
                return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
              }, this.parseInt = function (e, t) {
                return /^(-|\+)?([0-9]+|Infinity)$/.test(e) ? parseInt(e, t) : NaN;
              }, this.seps = "cfhistuCFHISTU", this.minLength = 0 < parseInt(n, 10) ? n : 0, this.salt = "string" == typeof t ? t : "", "string" == typeof r && (this.alphabet = r);

              for (var a = 0; a !== this.alphabet.length; a++) -1 === s.indexOf(this.alphabet.charAt(a)) && (s += this.alphabet.charAt(a));

              if (this.alphabet = s, this.alphabet.length < 16) throw "error: alphabet must contain at least X unique characters".replace("X", 16);
              if (-1 !== this.alphabet.search(" ")) throw "error: alphabet cannot contain spaces";

              for (var _ = 0; _ !== this.seps.length; _++) {
                var E = this.alphabet.indexOf(this.seps.charAt(_));
                -1 === E ? this.seps = this.seps.substr(0, _) + " " + this.seps.substr(_ + 1) : this.alphabet = this.alphabet.substr(0, E) + " " + this.alphabet.substr(E + 1);
              }

              this.alphabet = this.alphabet.replace(/ /g, ""), this.seps = this.seps.replace(/ /g, ""), this.seps = this._shuffle(this.seps, this.salt), (!this.seps.length || 3.5 < this.alphabet.length / this.seps.length) && (i = Math.ceil(this.alphabet.length / 3.5)) > this.seps.length && (o = i - this.seps.length, this.seps += this.alphabet.substr(0, o), this.alphabet = this.alphabet.substr(o)), this.alphabet = this._shuffle(this.alphabet, this.salt);
              var l = Math.ceil(this.alphabet.length / 12);
              this.alphabet.length < 3 ? (this.guards = this.seps.substr(0, l), this.seps = this.seps.substr(l)) : (this.guards = this.alphabet.substr(0, l), this.alphabet = this.alphabet.substr(l));
            }

            var t;
            return (t = [{
              key: "encode",
              value: function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];

                if (!t.length) return "";
                if (t[0] && t[0].constructor === Array && !(t = t[0]).length) return "";

                for (var r = 0; r !== t.length; r++) if (t[r] = this.parseInt(t[r], 10), !(0 <= t[r])) return "";

                return this._encode(t);
              }
            }, {
              key: "decode",
              value: function (e) {
                return e && e.length && "string" == typeof e ? this._decode(e, this.alphabet) : [];
              }
            }, {
              key: "encodeHex",
              value: function (e) {
                if (e = e.toString(), !/^[0-9a-fA-F]+$/.test(e)) return "";

                for (var t = e.match(/[\w\W]{1,12}/g), n = 0; n !== t.length; n++) t[n] = parseInt("1" + t[n], 16);

                return this.encode.apply(this, t);
              }
            }, {
              key: "decodeHex",
              value: function (e) {
                for (var t = [], n = this.decode(e), r = 0; r !== n.length; r++) t += n[r].toString(16).substr(1);

                return t;
              }
            }, {
              key: "_encode",
              value: function (e) {
                for (var t, n = this.alphabet, r = 0, i = 0; i !== e.length; i++) r += e[i] % (i + 100);

                for (var o = t = n.charAt(r % n.length), s = 0; s !== e.length; s++) {
                  var a = e[s],
                      _ = o + this.salt + n;

                  n = this._shuffle(n, _.substr(0, n.length));

                  var E = this._toAlphabet(a, n);

                  if (t += E, s + 1 < e.length) {
                    var l = (a %= E.charCodeAt(0) + s) % this.seps.length;
                    t += this.seps.charAt(l);
                  }
                }

                if (t.length < this.minLength) {
                  var d = (r + t[0].charCodeAt(0)) % this.guards.length,
                      u = this.guards[d];
                  (t = u + t).length < this.minLength && (d = (r + t[2].charCodeAt(0)) % this.guards.length, t += u = this.guards[d]);
                }

                for (var c = parseInt(n.length / 2, 10); t.length < this.minLength;) {
                  var h = (t = (n = this._shuffle(n, n)).substr(c) + t + n.substr(0, c)).length - this.minLength;
                  0 < h && (t = t.substr(h / 2, this.minLength));
                }

                return t;
              }
            }, {
              key: "_decode",
              value: function (e, t) {
                var n = [],
                    r = 0,
                    i = new RegExp("[".concat(this.escapeRegExp(this.guards), "]"), "g"),
                    o = e.replace(i, " "),
                    s = o.split(" ");

                if (3 !== s.length && 2 !== s.length || (r = 1), void 0 !== (o = s[r])[0]) {
                  var a = o[0];
                  o = o.substr(1), i = new RegExp("[".concat(this.escapeRegExp(this.seps), "]"), "g"), s = (o = o.replace(i, " ")).split(" ");

                  for (var _ = 0; _ !== s.length; _++) {
                    var E = s[_],
                        l = a + this.salt + t;
                    t = this._shuffle(t, l.substr(0, t.length)), n.push(this._fromAlphabet(E, t));
                  }

                  this.encode(n) !== e && (n = []);
                }

                return n;
              }
            }, {
              key: "_shuffle",
              value: function (e, t) {
                var n;
                if (!t.length) return e;

                for (var r = (e = e.split("")).length - 1, i = 0, o = 0, s = 0; 0 < r; r--, i++) {
                  i %= t.length, o += n = t.charCodeAt(i);
                  var a = e[s = (n + i + o) % r];
                  e[s] = e[r], e[r] = a;
                }

                return e.join("");
              }
            }, {
              key: "_toAlphabet",
              value: function (e, t) {
                for (var n = ""; n = t.charAt(e % t.length) + n, e = parseInt(e / t.length, 10););

                return n;
              }
            }, {
              key: "_fromAlphabet",
              value: function (e, t) {
                return e.split("").map(function (e) {
                  return t.indexOf(e);
                }).reduce(function (e, n) {
                  return e * t.length + n;
                }, 0);
              }
            }]) && function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
              }
            }(e.prototype, t), e;
          }();

          e.default = t;
        }) ? r.apply(t, [t]) : r) || (e.exports = i);
      }, function (e, t, n) {
        (function (r) {
          var i, o, s;
          o = [n(10)], void 0 === (s = "function" == typeof (i = function (e, t) {
            "use strict";

            var i,
                o = {};
            return o.ByteBuffer = e, o.Long = e.Long || null, o.VERSION = "5.0.3", o.WIRE_TYPES = {}, o.WIRE_TYPES.VARINT = 0, o.WIRE_TYPES.BITS64 = 1, o.WIRE_TYPES.LDELIM = 2, o.WIRE_TYPES.STARTGROUP = 3, o.WIRE_TYPES.ENDGROUP = 4, o.WIRE_TYPES.BITS32 = 5, o.PACKABLE_WIRE_TYPES = [o.WIRE_TYPES.VARINT, o.WIRE_TYPES.BITS64, o.WIRE_TYPES.BITS32], o.TYPES = {
              int32: {
                name: "int32",
                wireType: o.WIRE_TYPES.VARINT,
                defaultValue: 0
              },
              uint32: {
                name: "uint32",
                wireType: o.WIRE_TYPES.VARINT,
                defaultValue: 0
              },
              sint32: {
                name: "sint32",
                wireType: o.WIRE_TYPES.VARINT,
                defaultValue: 0
              },
              int64: {
                name: "int64",
                wireType: o.WIRE_TYPES.VARINT,
                defaultValue: o.Long ? o.Long.ZERO : void 0
              },
              uint64: {
                name: "uint64",
                wireType: o.WIRE_TYPES.VARINT,
                defaultValue: o.Long ? o.Long.UZERO : void 0
              },
              sint64: {
                name: "sint64",
                wireType: o.WIRE_TYPES.VARINT,
                defaultValue: o.Long ? o.Long.ZERO : void 0
              },
              bool: {
                name: "bool",
                wireType: o.WIRE_TYPES.VARINT,
                defaultValue: !1
              },
              double: {
                name: "double",
                wireType: o.WIRE_TYPES.BITS64,
                defaultValue: 0
              },
              string: {
                name: "string",
                wireType: o.WIRE_TYPES.LDELIM,
                defaultValue: ""
              },
              bytes: {
                name: "bytes",
                wireType: o.WIRE_TYPES.LDELIM,
                defaultValue: null
              },
              fixed32: {
                name: "fixed32",
                wireType: o.WIRE_TYPES.BITS32,
                defaultValue: 0
              },
              sfixed32: {
                name: "sfixed32",
                wireType: o.WIRE_TYPES.BITS32,
                defaultValue: 0
              },
              fixed64: {
                name: "fixed64",
                wireType: o.WIRE_TYPES.BITS64,
                defaultValue: o.Long ? o.Long.UZERO : void 0
              },
              sfixed64: {
                name: "sfixed64",
                wireType: o.WIRE_TYPES.BITS64,
                defaultValue: o.Long ? o.Long.ZERO : void 0
              },
              float: {
                name: "float",
                wireType: o.WIRE_TYPES.BITS32,
                defaultValue: 0
              },
              enum: {
                name: "enum",
                wireType: o.WIRE_TYPES.VARINT,
                defaultValue: 0
              },
              message: {
                name: "message",
                wireType: o.WIRE_TYPES.LDELIM,
                defaultValue: null
              },
              group: {
                name: "group",
                wireType: o.WIRE_TYPES.STARTGROUP,
                defaultValue: null
              }
            }, o.MAP_KEY_TYPES = [o.TYPES.int32, o.TYPES.sint32, o.TYPES.sfixed32, o.TYPES.uint32, o.TYPES.fixed32, o.TYPES.int64, o.TYPES.sint64, o.TYPES.sfixed64, o.TYPES.uint64, o.TYPES.fixed64, o.TYPES.bool, o.TYPES.string, o.TYPES.bytes], o.ID_MIN = 1, o.ID_MAX = 536870911, o.convertFieldsToCamelCase = !1, o.populateAccessors = !0, o.populateDefaults = !0, o.Util = ((i = {}).IS_NODE = !("object" != typeof r || r + "" != "[object process]" || r.browser), i.XHR = function () {
              for (var e = [function () {
                return new XMLHttpRequest();
              }, function () {
                return new ActiveXObject("Msxml2.XMLHTTP");
              }, function () {
                return new ActiveXObject("Msxml3.XMLHTTP");
              }, function () {
                return new ActiveXObject("Microsoft.XMLHTTP");
              }], t = null, n = 0; n < e.length; n++) {
                try {
                  t = e[n]();
                } catch (e) {
                  continue;
                }

                break;
              }

              if (!t) throw Error("XMLHttpRequest is not supported");
              return t;
            }, i.fetch = function (e, t) {
              if (t && "function" != typeof t && (t = null), i.IS_NODE) {
                var r = n(12);
                if (t) r.readFile(e, function (e, n) {
                  t(e ? null : "" + n);
                });else try {
                  return r.readFileSync(e);
                } catch (e) {
                  return null;
                }
              } else {
                var o = i.XHR();
                if (o.open("GET", e, !!t), o.setRequestHeader("Accept", "text/plain"), "function" == typeof o.overrideMimeType && o.overrideMimeType("text/plain"), !t) return o.send(null), 200 == o.status || 0 == o.status && "string" == typeof o.responseText ? o.responseText : null;
                if (o.onreadystatechange = function () {
                  4 == o.readyState && (200 == o.status || 0 == o.status && "string" == typeof o.responseText ? t(o.responseText) : t(null));
                }, 4 == o.readyState) return;
                o.send(null);
              }
            }, i.toCamelCase = function (e) {
              return e.replace(/_([a-zA-Z])/g, function (e, t) {
                return t.toUpperCase();
              });
            }, i), o.Lang = {
              DELIM: /[\s\{\}=;:\[\],'"\(\)<>]/g,
              RULE: /^(?:required|optional|repeated|map)$/,
              TYPE: /^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,
              NAME: /^[a-zA-Z_][a-zA-Z_0-9]*$/,
              TYPEDEF: /^[a-zA-Z][a-zA-Z_0-9]*$/,
              TYPEREF: /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
              FQTYPEREF: /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/,
              NUMBER: /^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/,
              NUMBER_DEC: /^(?:[1-9][0-9]*|0)$/,
              NUMBER_HEX: /^0[xX][0-9a-fA-F]+$/,
              NUMBER_OCT: /^0[0-7]+$/,
              NUMBER_FLT: /^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/,
              BOOL: /^(?:true|false)$/i,
              ID: /^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
              NEGID: /^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
              WHITESPACE: /\s/,
              STRING: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
              STRING_DQ: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
              STRING_SQ: /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g
            }, o.DotProto = function (e, t) {
              var n = {},
                  r = function (e) {
                this.source = e + "", this.index = 0, this.line = 1, this.stack = [], this._stringOpen = null;
              },
                  i = r.prototype;

              i._readString = function () {
                var e = '"' === this._stringOpen ? t.STRING_DQ : t.STRING_SQ;
                e.lastIndex = this.index - 1;
                var n = e.exec(this.source);
                if (!n) throw Error("unterminated string");
                return this.index = e.lastIndex, this.stack.push(this._stringOpen), this._stringOpen = null, n[1];
              }, i.next = function () {
                if (this.stack.length > 0) return this.stack.shift();
                if (this.index >= this.source.length) return null;
                if (null !== this._stringOpen) return this._readString();
                var e, n, r;

                do {
                  for (e = !1; t.WHITESPACE.test(r = this.source.charAt(this.index));) if ("\n" === r && ++this.line, ++this.index === this.source.length) return null;

                  if ("/" === this.source.charAt(this.index)) if (++this.index, "/" === this.source.charAt(this.index)) {
                    for (; "\n" !== this.source.charAt(++this.index);) if (this.index == this.source.length) return null;

                    ++this.index, ++this.line, e = !0;
                  } else {
                    if ("*" !== (r = this.source.charAt(this.index))) return "/";

                    do {
                      if ("\n" === r && ++this.line, ++this.index === this.source.length) return null;
                      n = r, r = this.source.charAt(this.index);
                    } while ("*" !== n || "/" !== r);

                    ++this.index, e = !0;
                  }
                } while (e);

                if (this.index === this.source.length) return null;
                var i = this.index;
                if (t.DELIM.lastIndex = 0, !t.DELIM.test(this.source.charAt(i++))) for (; i < this.source.length && !t.DELIM.test(this.source.charAt(i));) ++i;
                var o = this.source.substring(this.index, this.index = i);
                return '"' !== o && "'" !== o || (this._stringOpen = o), o;
              }, i.peek = function () {
                if (0 === this.stack.length) {
                  var e = this.next();
                  if (null === e) return null;
                  this.stack.push(e);
                }

                return this.stack[0];
              }, i.skip = function (e) {
                var t = this.next();
                if (t !== e) throw Error("illegal '" + t + "', '" + e + "' expected");
              }, i.omit = function (e) {
                return this.peek() === e && (this.next(), !0);
              }, i.toString = function () {
                return "Tokenizer (" + this.index + "/" + this.source.length + " at line " + this.line + ")";
              }, n.Tokenizer = r;

              var o = function (e) {
                this.tn = new r(e), this.proto3 = !1;
              },
                  s = o.prototype;

              function a(e, n) {
                var r = -1,
                    i = 1;
                if ("-" == e.charAt(0) && (i = -1, e = e.substring(1)), t.NUMBER_DEC.test(e)) r = parseInt(e);else if (t.NUMBER_HEX.test(e)) r = parseInt(e.substring(2), 16);else {
                  if (!t.NUMBER_OCT.test(e)) throw Error("illegal id value: " + (i < 0 ? "-" : "") + e);
                  r = parseInt(e.substring(1), 8);
                }
                if (r = i * r | 0, !n && r < 0) throw Error("illegal id value: " + (i < 0 ? "-" : "") + e);
                return r;
              }

              function _(e) {
                var n = 1;
                if ("-" == e.charAt(0) && (n = -1, e = e.substring(1)), t.NUMBER_DEC.test(e)) return n * parseInt(e, 10);
                if (t.NUMBER_HEX.test(e)) return n * parseInt(e.substring(2), 16);
                if (t.NUMBER_OCT.test(e)) return n * parseInt(e.substring(1), 8);
                if ("inf" === e) return n * (1 / 0);
                if ("nan" === e) return NaN;
                if (t.NUMBER_FLT.test(e)) return n * parseFloat(e);
                throw Error("illegal number value: " + (n < 0 ? "-" : "") + e);
              }

              function E(e, t, n) {
                void 0 === e[t] ? e[t] = n : (Array.isArray(e[t]) || (e[t] = [e[t]]), e[t].push(n));
              }

              return s.parse = function () {
                var e,
                    n,
                    r = {
                  name: "[ROOT]",
                  package: null,
                  messages: [],
                  enums: [],
                  imports: [],
                  options: {},
                  services: []
                },
                    i = !0;

                try {
                  for (; e = this.tn.next();) switch (e) {
                    case "package":
                      if (!i || null !== r.package) throw Error("unexpected 'package'");
                      if (e = this.tn.next(), !t.TYPEREF.test(e)) throw Error("illegal package name: " + e);
                      this.tn.skip(";"), r.package = e;
                      break;

                    case "import":
                      if (!i) throw Error("unexpected 'import'");
                      ("public" === (e = this.tn.peek()) || (n = "weak" === e)) && this.tn.next(), e = this._readString(), this.tn.skip(";"), n || r.imports.push(e);
                      break;

                    case "syntax":
                      if (!i) throw Error("unexpected 'syntax'");
                      this.tn.skip("="), "proto3" === (r.syntax = this._readString()) && (this.proto3 = !0), this.tn.skip(";");
                      break;

                    case "message":
                      this._parseMessage(r, null), i = !1;
                      break;

                    case "enum":
                      this._parseEnum(r), i = !1;
                      break;

                    case "option":
                      this._parseOption(r);

                      break;

                    case "service":
                      this._parseService(r);

                      break;

                    case "extend":
                      this._parseExtend(r);

                      break;

                    default:
                      throw Error("unexpected '" + e + "'");
                  }
                } catch (e) {
                  throw e.message = "Parse error at line " + this.tn.line + ": " + e.message, e;
                }

                return delete r.name, r;
              }, o.parse = function (e) {
                return new o(e).parse();
              }, s._readString = function () {
                var e,
                    t,
                    n = "";

                do {
                  if ("'" !== (t = this.tn.next()) && '"' !== t) throw Error("illegal string delimiter: " + t);
                  n += this.tn.next(), this.tn.skip(t), e = this.tn.peek();
                } while ('"' === e || '"' === e);

                return n;
              }, s._readValue = function (e) {
                var n = this.tn.peek();
                if ('"' === n || "'" === n) return this._readString();
                if (this.tn.next(), t.NUMBER.test(n)) return _(n);
                if (t.BOOL.test(n)) return "true" === n.toLowerCase();
                if (e && t.TYPEREF.test(n)) return n;
                throw Error("illegal value: " + n);
              }, s._parseOption = function (e, n) {
                var r = this.tn.next(),
                    i = !1;
                if ("(" === r && (i = !0, r = this.tn.next()), !t.TYPEREF.test(r)) throw Error("illegal option name: " + r);
                var o = r;
                i && (this.tn.skip(")"), o = "(" + o + ")", r = this.tn.peek(), t.FQTYPEREF.test(r) && (o += r, this.tn.next())), this.tn.skip("="), this._parseOptionValue(e, o), n || this.tn.skip(";");
              }, s._parseOptionValue = function (e, n) {
                var r = this.tn.peek();
                if ("{" !== r) E(e.options, n, this._readValue(!0));else for (this.tn.skip("{"); "}" !== (r = this.tn.next());) {
                  if (!t.NAME.test(r)) throw Error("illegal option name: " + n + "." + r);
                  this.tn.omit(":") ? E(e.options, n + "." + r, this._readValue(!0)) : this._parseOptionValue(e, n + "." + r);
                }
              }, s._parseService = function (e) {
                var n = this.tn.next();
                if (!t.NAME.test(n)) throw Error("illegal service name at line " + this.tn.line + ": " + n);
                var r = {
                  name: n,
                  rpc: {},
                  options: {}
                };

                for (this.tn.skip("{"); "}" !== (n = this.tn.next());) if ("option" === n) this._parseOption(r);else {
                  if ("rpc" !== n) throw Error("illegal service token: " + n);

                  this._parseServiceRPC(r);
                }

                this.tn.omit(";"), e.services.push(r);
              }, s._parseServiceRPC = function (e) {
                var n = this.tn.next();
                if (!t.NAME.test(n)) throw Error("illegal rpc service method name: " + n);
                var r = n,
                    i = {
                  request: null,
                  response: null,
                  request_stream: !1,
                  response_stream: !1,
                  options: {}
                };
                if (this.tn.skip("("), "stream" === (n = this.tn.next()).toLowerCase() && (i.request_stream = !0, n = this.tn.next()), !t.TYPEREF.test(n)) throw Error("illegal rpc service request type: " + n);
                if (i.request = n, this.tn.skip(")"), "returns" !== (n = this.tn.next()).toLowerCase()) throw Error("illegal rpc service request type delimiter: " + n);

                if (this.tn.skip("("), "stream" === (n = this.tn.next()).toLowerCase() && (i.response_stream = !0, n = this.tn.next()), i.response = n, this.tn.skip(")"), "{" === (n = this.tn.peek())) {
                  for (this.tn.next(); "}" !== (n = this.tn.next());) {
                    if ("option" !== n) throw Error("illegal rpc service token: " + n);

                    this._parseOption(i);
                  }

                  this.tn.omit(";");
                } else this.tn.skip(";");

                void 0 === e.rpc && (e.rpc = {}), e.rpc[r] = i;
              }, s._parseMessage = function (e, n) {
                var r = !!n,
                    i = this.tn.next(),
                    o = {
                  name: "",
                  fields: [],
                  enums: [],
                  messages: [],
                  options: {},
                  services: [],
                  oneofs: {}
                };
                if (!t.NAME.test(i)) throw Error("illegal " + (r ? "group" : "message") + " name: " + i);

                for (o.name = i, r && (this.tn.skip("="), n.id = a(this.tn.next()), o.isGroup = !0), "[" === (i = this.tn.peek()) && n && this._parseFieldOptions(n), this.tn.skip("{"); "}" !== (i = this.tn.next());) if (t.RULE.test(i)) this._parseMessageField(o, i);else if ("oneof" === i) this._parseMessageOneOf(o);else if ("enum" === i) this._parseEnum(o);else if ("message" === i) this._parseMessage(o);else if ("option" === i) this._parseOption(o);else if ("service" === i) this._parseService(o);else if ("extensions" === i) o.hasOwnProperty("extensions") ? o.extensions = o.extensions.concat(this._parseExtensionRanges()) : o.extensions = this._parseExtensionRanges();else if ("reserved" === i) this._parseIgnored();else if ("extend" === i) this._parseExtend(o);else {
                  if (!t.TYPEREF.test(i)) throw Error("illegal message token: " + i);
                  if (!this.proto3) throw Error("illegal field rule: " + i);

                  this._parseMessageField(o, "optional", i);
                }

                return this.tn.omit(";"), e.messages.push(o), o;
              }, s._parseIgnored = function () {
                for (; ";" !== this.tn.peek();) this.tn.next();

                this.tn.skip(";");
              }, s._parseMessageField = function (e, n, r) {
                if (!t.RULE.test(n)) throw Error("illegal message field rule: " + n);
                var i,
                    o = {
                  rule: n,
                  type: "",
                  name: "",
                  options: {},
                  id: 0
                };

                if ("map" === n) {
                  if (r) throw Error("illegal type: " + r);
                  if (this.tn.skip("<"), i = this.tn.next(), !t.TYPE.test(i) && !t.TYPEREF.test(i)) throw Error("illegal message field type: " + i);
                  if (o.keytype = i, this.tn.skip(","), i = this.tn.next(), !t.TYPE.test(i) && !t.TYPEREF.test(i)) throw Error("illegal message field: " + i);
                  if (o.type = i, this.tn.skip(">"), i = this.tn.next(), !t.NAME.test(i)) throw Error("illegal message field name: " + i);
                  o.name = i, this.tn.skip("="), o.id = a(this.tn.next()), "[" === (i = this.tn.peek()) && this._parseFieldOptions(o), this.tn.skip(";");
                } else if ("group" === (r = void 0 !== r ? r : this.tn.next())) {
                  var s = this._parseMessage(e, o);

                  if (!/^[A-Z]/.test(s.name)) throw Error("illegal group name: " + s.name);
                  o.type = s.name, o.name = s.name.toLowerCase(), this.tn.omit(";");
                } else {
                  if (!t.TYPE.test(r) && !t.TYPEREF.test(r)) throw Error("illegal message field type: " + r);
                  if (o.type = r, i = this.tn.next(), !t.NAME.test(i)) throw Error("illegal message field name: " + i);
                  o.name = i, this.tn.skip("="), o.id = a(this.tn.next()), "[" === (i = this.tn.peek()) && this._parseFieldOptions(o), this.tn.skip(";");
                }

                return e.fields.push(o), o;
              }, s._parseMessageOneOf = function (e) {
                var n = this.tn.next();
                if (!t.NAME.test(n)) throw Error("illegal oneof name: " + n);
                var r,
                    i = n,
                    o = [];

                for (this.tn.skip("{"); "}" !== (n = this.tn.next());) (r = this._parseMessageField(e, "optional", n)).oneof = i, o.push(r.id);

                this.tn.omit(";"), e.oneofs[i] = o;
              }, s._parseFieldOptions = function (e) {
                this.tn.skip("[");

                for (var t = !0; "]" !== this.tn.peek();) t || this.tn.skip(","), this._parseOption(e, !0), t = !1;

                this.tn.next();
              }, s._parseEnum = function (e) {
                var n = {
                  name: "",
                  values: [],
                  options: {}
                },
                    r = this.tn.next();
                if (!t.NAME.test(r)) throw Error("illegal name: " + r);

                for (n.name = r, this.tn.skip("{"); "}" !== (r = this.tn.next());) if ("option" === r) this._parseOption(n);else {
                  if (!t.NAME.test(r)) throw Error("illegal name: " + r);
                  this.tn.skip("=");
                  var i = {
                    name: r,
                    id: a(this.tn.next(), !0)
                  };
                  "[" === (r = this.tn.peek()) && this._parseFieldOptions({
                    options: {}
                  }), this.tn.skip(";"), n.values.push(i);
                }

                this.tn.omit(";"), e.enums.push(n);
              }, s._parseExtensionRanges = function () {
                var t,
                    n,
                    r,
                    i = [];

                do {
                  for (n = [];;) {
                    switch (t = this.tn.next()) {
                      case "min":
                        r = e.ID_MIN;
                        break;

                      case "max":
                        r = e.ID_MAX;
                        break;

                      default:
                        r = _(t);
                    }

                    if (n.push(r), 2 === n.length) break;

                    if ("to" !== this.tn.peek()) {
                      n.push(r);
                      break;
                    }

                    this.tn.next();
                  }

                  i.push(n);
                } while (this.tn.omit(","));

                return this.tn.skip(";"), i;
              }, s._parseExtend = function (e) {
                var n = this.tn.next();
                if (!t.TYPEREF.test(n)) throw Error("illegal extend reference: " + n);
                var r = {
                  ref: n,
                  fields: []
                };

                for (this.tn.skip("{"); "}" !== (n = this.tn.next());) if (t.RULE.test(n)) this._parseMessageField(r, n);else {
                  if (!t.TYPEREF.test(n)) throw Error("illegal extend token: " + n);
                  if (!this.proto3) throw Error("illegal field rule: " + n);

                  this._parseMessageField(r, "optional", n);
                }

                return this.tn.omit(";"), e.messages.push(r), r;
              }, s.toString = function () {
                return "Parser at line " + this.tn.line;
              }, n.Parser = o, n;
            }(o, o.Lang), o.Reflect = function (t) {
              var n = {},
                  r = function (e, t, n) {
                this.builder = e, this.parent = t, this.name = n, this.className;
              },
                  i = r.prototype;

              i.fqn = function () {
                for (var e = this.name, t = this; null != (t = t.parent);) e = t.name + "." + e;

                return e;
              }, i.toString = function (e) {
                return (e ? this.className + " " : "") + this.fqn();
              }, i.build = function () {
                throw Error(this.toString(!0) + " cannot be built directly");
              }, n.T = r;

              var o = function (e, t, n, i, o) {
                r.call(this, e, t, n), this.className = "Namespace", this.children = [], this.options = i || {}, this.syntax = o || "proto2";
              },
                  s = o.prototype = Object.create(r.prototype);

              s.getChildren = function (e) {
                if (null == (e = e || null)) return this.children.slice();

                for (var t = [], n = 0, r = this.children.length; n < r; ++n) this.children[n] instanceof e && t.push(this.children[n]);

                return t;
              }, s.addChild = function (e) {
                var t;
                if (t = this.getChild(e.name)) if (t instanceof l.Field && t.name !== t.originalName && null === this.getChild(t.originalName)) t.name = t.originalName;else {
                  if (!(e instanceof l.Field && e.name !== e.originalName && null === this.getChild(e.originalName))) throw Error("Duplicate name in namespace " + this.toString(!0) + ": " + e.name);
                  e.name = e.originalName;
                }
                this.children.push(e);
              }, s.getChild = function (e) {
                for (var t = "number" == typeof e ? "id" : "name", n = 0, r = this.children.length; n < r; ++n) if (this.children[n][t] === e) return this.children[n];

                return null;
              }, s.resolve = function (e, t) {
                var r,
                    i = "string" == typeof e ? e.split(".") : e,
                    o = this,
                    s = 0;

                if ("" === i[s]) {
                  for (; null !== o.parent;) o = o.parent;

                  s++;
                }

                do {
                  do {
                    if (!(o instanceof n.Namespace)) {
                      o = null;
                      break;
                    }

                    if (!(r = o.getChild(i[s])) || !(r instanceof n.T) || t && !(r instanceof n.Namespace)) {
                      o = null;
                      break;
                    }

                    o = r, s++;
                  } while (s < i.length);

                  if (null != o) break;
                  if (null !== this.parent) return this.parent.resolve(e, t);
                } while (null != o);

                return o;
              }, s.qn = function (e) {
                var t = [],
                    r = e;

                do {
                  t.unshift(r.name), r = r.parent;
                } while (null !== r);

                for (var i = 1; i <= t.length; i++) {
                  var o = t.slice(t.length - i);
                  if (e === this.resolve(o, e instanceof n.Namespace)) return o.join(".");
                }

                return e.fqn();
              }, s.build = function () {
                for (var e, t = {}, n = this.children, r = 0, i = n.length; r < i; ++r) (e = n[r]) instanceof o && (t[e.name] = e.build());

                return Object.defineProperty && Object.defineProperty(t, "$options", {
                  value: this.buildOpt()
                }), t;
              }, s.buildOpt = function () {
                for (var e = {}, t = Object.keys(this.options), n = 0, r = t.length; n < r; ++n) {
                  var i = t[n],
                      o = this.options[t[n]];
                  e[i] = o;
                }

                return e;
              }, s.getOption = function (e) {
                return void 0 === e ? this.options : void 0 !== this.options[e] ? this.options[e] : null;
              }, n.Namespace = o;

              var a = function (e, n, r, i, o) {
                if (this.type = e, this.resolvedType = n, this.isMapKey = r, this.syntax = i, this.name = o, r && t.MAP_KEY_TYPES.indexOf(e) < 0) throw Error("Invalid map key type: " + e.name);
              },
                  _ = a.prototype;

              function E(e, n) {
                if (e && "number" == typeof e.low && "number" == typeof e.high && "boolean" == typeof e.unsigned && e.low == e.low && e.high == e.high) return new t.Long(e.low, e.high, void 0 === n ? e.unsigned : n);
                if ("string" == typeof e) return t.Long.fromString(e, n || !1, 10);
                if ("number" == typeof e) return t.Long.fromNumber(e, n || !1);
                throw Error("not convertible to Long");
              }

              a.defaultFieldValue = function (n) {
                if ("string" == typeof n && (n = t.TYPES[n]), void 0 === n.defaultValue) throw Error("default value for type " + n.name + " is not supported");
                return n == t.TYPES.bytes ? new e(0) : n.defaultValue;
              }, _.toString = function () {
                return (this.name || "") + (this.isMapKey ? "map" : "value") + " element";
              }, _.verifyValue = function (n) {
                var r = this;

                function i(e, t) {
                  throw Error("Illegal value for " + r.toString(!0) + " of type " + r.type.name + ": " + e + " (" + t + ")");
                }

                switch (this.type) {
                  case t.TYPES.int32:
                  case t.TYPES.sint32:
                  case t.TYPES.sfixed32:
                    return ("number" != typeof n || n == n && n % 1 != 0) && i(typeof n, "not an integer"), n > 4294967295 ? 0 | n : n;

                  case t.TYPES.uint32:
                  case t.TYPES.fixed32:
                    return ("number" != typeof n || n == n && n % 1 != 0) && i(typeof n, "not an integer"), n < 0 ? n >>> 0 : n;

                  case t.TYPES.int64:
                  case t.TYPES.sint64:
                  case t.TYPES.sfixed64:
                    if (t.Long) try {
                      return E(n, !1);
                    } catch (e) {
                      i(typeof n, e.message);
                    } else i(typeof n, "requires Long.js");

                  case t.TYPES.uint64:
                  case t.TYPES.fixed64:
                    if (t.Long) try {
                      return E(n, !0);
                    } catch (e) {
                      i(typeof n, e.message);
                    } else i(typeof n, "requires Long.js");

                  case t.TYPES.bool:
                    return "boolean" != typeof n && i(typeof n, "not a boolean"), n;

                  case t.TYPES.float:
                  case t.TYPES.double:
                    return "number" != typeof n && i(typeof n, "not a number"), n;

                  case t.TYPES.string:
                    return "string" == typeof n || n && n instanceof String || i(typeof n, "not a string"), "" + n;

                  case t.TYPES.bytes:
                    return e.isByteBuffer(n) ? n : e.wrap(n, "base64");

                  case t.TYPES.enum:
                    var o = this.resolvedType.getChildren(t.Reflect.Enum.Value);

                    for (a = 0; a < o.length; a++) {
                      if (o[a].name == n) return o[a].id;
                      if (o[a].id == n) return o[a].id;
                    }

                    if ("proto3" === this.syntax) return ("number" != typeof n || n == n && n % 1 != 0) && i(typeof n, "not an integer"), (n > 4294967295 || n < 0) && i(typeof n, "not in range for uint32"), n;
                    i(n, "not a valid enum value");

                  case t.TYPES.group:
                  case t.TYPES.message:
                    if (n && "object" == typeof n || i(typeof n, "object expected"), n instanceof this.resolvedType.clazz) return n;

                    if (n instanceof t.Builder.Message) {
                      var s = {};

                      for (var a in n) n.hasOwnProperty(a) && (s[a] = n[a]);

                      n = s;
                    }

                    return new this.resolvedType.clazz(n);
                }

                throw Error("[INTERNAL] Illegal value for " + this.toString(!0) + ": " + n + " (undefined type " + this.type + ")");
              }, _.calculateLength = function (n, r) {
                if (null === r) return 0;
                var i;

                switch (this.type) {
                  case t.TYPES.int32:
                    return r < 0 ? e.calculateVarint64(r) : e.calculateVarint32(r);

                  case t.TYPES.uint32:
                    return e.calculateVarint32(r);

                  case t.TYPES.sint32:
                    return e.calculateVarint32(e.zigZagEncode32(r));

                  case t.TYPES.fixed32:
                  case t.TYPES.sfixed32:
                  case t.TYPES.float:
                    return 4;

                  case t.TYPES.int64:
                  case t.TYPES.uint64:
                    return e.calculateVarint64(r);

                  case t.TYPES.sint64:
                    return e.calculateVarint64(e.zigZagEncode64(r));

                  case t.TYPES.fixed64:
                  case t.TYPES.sfixed64:
                    return 8;

                  case t.TYPES.bool:
                    return 1;

                  case t.TYPES.enum:
                    return e.calculateVarint32(r);

                  case t.TYPES.double:
                    return 8;

                  case t.TYPES.string:
                    return i = e.calculateUTF8Bytes(r), e.calculateVarint32(i) + i;

                  case t.TYPES.bytes:
                    if (r.remaining() < 0) throw Error("Illegal value for " + this.toString(!0) + ": " + r.remaining() + " bytes remaining");
                    return e.calculateVarint32(r.remaining()) + r.remaining();

                  case t.TYPES.message:
                    return i = this.resolvedType.calculate(r), e.calculateVarint32(i) + i;

                  case t.TYPES.group:
                    return (i = this.resolvedType.calculate(r)) + e.calculateVarint32(n << 3 | t.WIRE_TYPES.ENDGROUP);
                }

                throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + r + " (unknown type)");
              }, _.encodeValue = function (n, r, i) {
                if (null === r) return i;

                switch (this.type) {
                  case t.TYPES.int32:
                    r < 0 ? i.writeVarint64(r) : i.writeVarint32(r);
                    break;

                  case t.TYPES.uint32:
                    i.writeVarint32(r);
                    break;

                  case t.TYPES.sint32:
                    i.writeVarint32ZigZag(r);
                    break;

                  case t.TYPES.fixed32:
                    i.writeUint32(r);
                    break;

                  case t.TYPES.sfixed32:
                    i.writeInt32(r);
                    break;

                  case t.TYPES.int64:
                  case t.TYPES.uint64:
                    i.writeVarint64(r);
                    break;

                  case t.TYPES.sint64:
                    i.writeVarint64ZigZag(r);
                    break;

                  case t.TYPES.fixed64:
                    i.writeUint64(r);
                    break;

                  case t.TYPES.sfixed64:
                    i.writeInt64(r);
                    break;

                  case t.TYPES.bool:
                    "string" == typeof r ? i.writeVarint32("false" === r.toLowerCase() ? 0 : !!r) : i.writeVarint32(r ? 1 : 0);
                    break;

                  case t.TYPES.enum:
                    i.writeVarint32(r);
                    break;

                  case t.TYPES.float:
                    i.writeFloat32(r);
                    break;

                  case t.TYPES.double:
                    i.writeFloat64(r);
                    break;

                  case t.TYPES.string:
                    i.writeVString(r);
                    break;

                  case t.TYPES.bytes:
                    if (r.remaining() < 0) throw Error("Illegal value for " + this.toString(!0) + ": " + r.remaining() + " bytes remaining");
                    var o = r.offset;
                    i.writeVarint32(r.remaining()), i.append(r), r.offset = o;
                    break;

                  case t.TYPES.message:
                    var s = new e().LE();
                    this.resolvedType.encode(r, s), i.writeVarint32(s.offset), i.append(s.flip());
                    break;

                  case t.TYPES.group:
                    this.resolvedType.encode(r, i), i.writeVarint32(n << 3 | t.WIRE_TYPES.ENDGROUP);
                    break;

                  default:
                    throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + r + " (unknown type)");
                }

                return i;
              }, _.decode = function (e, n, r) {
                if (n != this.type.wireType) throw Error("Unexpected wire type for element");
                var i, o;

                switch (this.type) {
                  case t.TYPES.int32:
                    return 0 | e.readVarint32();

                  case t.TYPES.uint32:
                    return e.readVarint32() >>> 0;

                  case t.TYPES.sint32:
                    return 0 | e.readVarint32ZigZag();

                  case t.TYPES.fixed32:
                    return e.readUint32() >>> 0;

                  case t.TYPES.sfixed32:
                    return 0 | e.readInt32();

                  case t.TYPES.int64:
                    return e.readVarint64();

                  case t.TYPES.uint64:
                    return e.readVarint64().toUnsigned();

                  case t.TYPES.sint64:
                    return e.readVarint64ZigZag();

                  case t.TYPES.fixed64:
                    return e.readUint64();

                  case t.TYPES.sfixed64:
                    return e.readInt64();

                  case t.TYPES.bool:
                    return !!e.readVarint32();

                  case t.TYPES.enum:
                    return e.readVarint32();

                  case t.TYPES.float:
                    return e.readFloat();

                  case t.TYPES.double:
                    return e.readDouble();

                  case t.TYPES.string:
                    return e.readVString();

                  case t.TYPES.bytes:
                    if (o = e.readVarint32(), e.remaining() < o) throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + o + " required but got only " + e.remaining());
                    return (i = e.clone()).limit = i.offset + o, e.offset += o, i;

                  case t.TYPES.message:
                    return o = e.readVarint32(), this.resolvedType.decode(e, o);

                  case t.TYPES.group:
                    return this.resolvedType.decode(e, -1, r);
                }

                throw Error("[INTERNAL] Illegal decode type");
              }, _.valueFromString = function (n) {
                if (!this.isMapKey) throw Error("valueFromString() called on non-map-key element");

                switch (this.type) {
                  case t.TYPES.int32:
                  case t.TYPES.sint32:
                  case t.TYPES.sfixed32:
                  case t.TYPES.uint32:
                  case t.TYPES.fixed32:
                    return this.verifyValue(parseInt(n));

                  case t.TYPES.int64:
                  case t.TYPES.sint64:
                  case t.TYPES.sfixed64:
                  case t.TYPES.uint64:
                  case t.TYPES.fixed64:
                    return this.verifyValue(n);

                  case t.TYPES.bool:
                    return "true" === n;

                  case t.TYPES.string:
                    return this.verifyValue(n);

                  case t.TYPES.bytes:
                    return e.fromBinary(n);
                }
              }, _.valueToString = function (e) {
                if (!this.isMapKey) throw Error("valueToString() called on non-map-key element");
                return this.type === t.TYPES.bytes ? e.toString("binary") : e.toString();
              }, n.Element = a;

              var l = function (e, t, n, r, i, s) {
                o.call(this, e, t, n, r, s), this.className = "Message", this.extensions = void 0, this.clazz = null, this.isGroup = !!i, this._fields = null, this._fieldsById = null, this._fieldsByName = null;
              },
                  d = l.prototype = Object.create(o.prototype);

              function u(e, n) {
                var r = n.readVarint32(),
                    i = 7 & r,
                    o = r >>> 3;

                switch (i) {
                  case t.WIRE_TYPES.VARINT:
                    do {
                      r = n.readUint8();
                    } while (128 == (128 & r));

                    break;

                  case t.WIRE_TYPES.BITS64:
                    n.offset += 8;
                    break;

                  case t.WIRE_TYPES.LDELIM:
                    r = n.readVarint32(), n.offset += r;
                    break;

                  case t.WIRE_TYPES.STARTGROUP:
                    u(o, n);
                    break;

                  case t.WIRE_TYPES.ENDGROUP:
                    if (o === e) return !1;
                    throw Error("Illegal GROUPEND after unknown group: " + o + " (" + e + " expected)");

                  case t.WIRE_TYPES.BITS32:
                    n.offset += 4;
                    break;

                  default:
                    throw Error("Illegal wire type in unknown group " + e + ": " + i);
                }

                return !0;
              }

              d.build = function (n) {
                if (this.clazz && !n) return this.clazz;

                var r = function (t, n) {
                  var r = n.getChildren(t.Reflect.Message.Field),
                      i = n.getChildren(t.Reflect.Message.OneOf),
                      o = function (s, a) {
                    t.Builder.Message.call(this);

                    for (var _ = 0, E = i.length; _ < E; ++_) this[i[_].name] = null;

                    for (_ = 0, E = r.length; _ < E; ++_) {
                      var l = r[_];
                      this[l.name] = l.repeated ? [] : l.map ? new t.Map(l) : null, !l.required && "proto3" !== n.syntax || null === l.defaultValue || (this[l.name] = l.defaultValue);
                    }

                    var d;
                    if (arguments.length > 0) if (1 !== arguments.length || null === s || "object" != typeof s || !("function" != typeof s.encode || s instanceof o) || Array.isArray(s) || s instanceof t.Map || e.isByteBuffer(s) || s instanceof ArrayBuffer || t.Long && s instanceof t.Long) for (_ = 0, E = arguments.length; _ < E; ++_) void 0 !== (d = arguments[_]) && this.$set(r[_].name, d);else this.$set(s);
                  },
                      s = o.prototype = Object.create(t.Builder.Message.prototype);

                  s.add = function (e, r, i) {
                    var o = n._fieldsByName[e];

                    if (!i) {
                      if (!o) throw Error(this + "#" + e + " is undefined");
                      if (!(o instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + o.toString(!0));
                      if (!o.repeated) throw Error(this + "#" + e + " is not a repeated field");
                      r = o.verifyValue(r, !0);
                    }

                    return null === this[e] && (this[e] = []), this[e].push(r), this;
                  }, s.$add = s.add, s.set = function (e, r, i) {
                    if (e && "object" == typeof e) {
                      for (var o in i = r, e) e.hasOwnProperty(o) && void 0 !== (r = e[o]) && void 0 === n._oneofsByName[o] && this.$set(o, r, i);

                      return this;
                    }

                    var s = n._fieldsByName[e];
                    if (i) this[e] = r;else {
                      if (!s) throw Error(this + "#" + e + " is not a field: undefined");
                      if (!(s instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + s.toString(!0));
                      this[s.name] = r = s.verifyValue(r);
                    }

                    if (s && s.oneof) {
                      var a = this[s.oneof.name];
                      null !== r ? (null !== a && a !== s.name && (this[a] = null), this[s.oneof.name] = s.name) : a === e && (this[s.oneof.name] = null);
                    }

                    return this;
                  }, s.$set = s.set, s.get = function (e, r) {
                    if (r) return this[e];
                    var i = n._fieldsByName[e];
                    if (!(i && i instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: undefined");
                    if (!(i instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + i.toString(!0));
                    return this[i.name];
                  }, s.$get = s.get;

                  for (var a = 0; a < r.length; a++) {
                    var _ = r[a];
                    _ instanceof t.Reflect.Message.ExtensionField || n.builder.options.populateAccessors && function (e) {
                      var t = e.originalName.replace(/(_[a-zA-Z])/g, function (e) {
                        return e.toUpperCase().replace("_", "");
                      });
                      t = t.substring(0, 1).toUpperCase() + t.substring(1);

                      var r = e.originalName.replace(/([A-Z])/g, function (e) {
                        return "_" + e;
                      }),
                          i = function (t, n) {
                        return this[e.name] = n ? t : e.verifyValue(t), this;
                      },
                          o = function () {
                        return this[e.name];
                      };

                      null === n.getChild("set" + t) && (s["set" + t] = i), null === n.getChild("set_" + r) && (s["set_" + r] = i), null === n.getChild("get" + t) && (s["get" + t] = o), null === n.getChild("get_" + r) && (s["get_" + r] = o);
                    }(_);
                  }

                  function E(n, r, i, o) {
                    if (null === n || "object" != typeof n) {
                      if (o && o instanceof t.Reflect.Enum) {
                        var s = t.Reflect.Enum.getName(o.object, n);
                        if (null !== s) return s;
                      }

                      return n;
                    }

                    if (e.isByteBuffer(n)) return r ? n.toBase64() : n.toBuffer();
                    if (t.Long.isLong(n)) return i ? n.toString() : t.Long.fromValue(n);
                    var a;
                    if (Array.isArray(n)) return a = [], n.forEach(function (e, t) {
                      a[t] = E(e, r, i, o);
                    }), a;

                    if (a = {}, n instanceof t.Map) {
                      for (var _ = n.entries(), l = _.next(); !l.done; l = _.next()) a[n.keyElem.valueToString(l.value[0])] = E(l.value[1], r, i, n.valueElem.resolvedType);

                      return a;
                    }

                    var d = n.$type,
                        u = void 0;

                    for (var c in n) n.hasOwnProperty(c) && (d && (u = d.getChild(c)) ? a[c] = E(n[c], r, i, u.resolvedType) : a[c] = E(n[c], r, i));

                    return a;
                  }

                  return s.encode = function (t, r) {
                    "boolean" == typeof t && (r = t, t = void 0);
                    var i = !1;
                    t || (t = new e(), i = !0);
                    var o = t.littleEndian;

                    try {
                      return n.encode(this, t.LE(), r), (i ? t.flip() : t).LE(o);
                    } catch (e) {
                      throw t.LE(o), e;
                    }
                  }, o.encode = function (e, t, n) {
                    return new o(e).encode(t, n);
                  }, s.calculate = function () {
                    return n.calculate(this);
                  }, s.encodeDelimited = function (t, r) {
                    var i = !1;
                    t || (t = new e(), i = !0);
                    var o = new e().LE();
                    return n.encode(this, o, r).flip(), t.writeVarint32(o.remaining()), t.append(o), i ? t.flip() : t;
                  }, s.encodeAB = function () {
                    try {
                      return this.encode().toArrayBuffer();
                    } catch (e) {
                      throw e.encoded && (e.encoded = e.encoded.toArrayBuffer()), e;
                    }
                  }, s.toArrayBuffer = s.encodeAB, s.encodeNB = function () {
                    try {
                      return this.encode().toBuffer();
                    } catch (e) {
                      throw e.encoded && (e.encoded = e.encoded.toBuffer()), e;
                    }
                  }, s.toBuffer = s.encodeNB, s.encode64 = function () {
                    try {
                      return this.encode().toBase64();
                    } catch (e) {
                      throw e.encoded && (e.encoded = e.encoded.toBase64()), e;
                    }
                  }, s.toBase64 = s.encode64, s.encodeHex = function () {
                    try {
                      return this.encode().toHex();
                    } catch (e) {
                      throw e.encoded && (e.encoded = e.encoded.toHex()), e;
                    }
                  }, s.toHex = s.encodeHex, s.toRaw = function (e, t) {
                    return E(this, !!e, !!t, this.$type);
                  }, s.encodeJSON = function () {
                    return JSON.stringify(E(this, !0, !0, this.$type));
                  }, o.decode = function (t, r, i) {
                    "string" == typeof r && (i = r, r = -1), "string" == typeof t ? t = e.wrap(t, i || "base64") : e.isByteBuffer(t) || (t = e.wrap(t));
                    var o = t.littleEndian;

                    try {
                      var s = n.decode(t.LE(), r);
                      return t.LE(o), s;
                    } catch (e) {
                      throw t.LE(o), e;
                    }
                  }, o.decodeDelimited = function (t, r) {
                    if ("string" == typeof t ? t = e.wrap(t, r || "base64") : e.isByteBuffer(t) || (t = e.wrap(t)), t.remaining() < 1) return null;
                    var i = t.offset,
                        o = t.readVarint32();
                    if (t.remaining() < o) return t.offset = i, null;

                    try {
                      var s = n.decode(t.slice(t.offset, t.offset + o).LE());
                      return t.offset += o, s;
                    } catch (e) {
                      throw t.offset += o, e;
                    }
                  }, o.decode64 = function (e) {
                    return o.decode(e, "base64");
                  }, o.decodeHex = function (e) {
                    return o.decode(e, "hex");
                  }, o.decodeJSON = function (e) {
                    return new o(JSON.parse(e));
                  }, s.toString = function () {
                    return n.toString();
                  }, Object.defineProperty && (Object.defineProperty(o, "$options", {
                    value: n.buildOpt()
                  }), Object.defineProperty(s, "$options", {
                    value: o.$options
                  }), Object.defineProperty(o, "$type", {
                    value: n
                  }), Object.defineProperty(s, "$type", {
                    value: n
                  })), o;
                }(t, this);

                this._fields = [], this._fieldsById = {}, this._fieldsByName = {}, this._oneofsByName = {};

                for (var i, o = 0, s = this.children.length; o < s; o++) if ((i = this.children[o]) instanceof R || i instanceof l || i instanceof S) {
                  if (r.hasOwnProperty(i.name)) throw Error("Illegal reflect child of " + this.toString(!0) + ": " + i.toString(!0) + " cannot override static property '" + i.name + "'");
                  r[i.name] = i.build();
                } else if (i instanceof l.Field) i.build(), this._fields.push(i), this._fieldsById[i.id] = i, this._fieldsByName[i.name] = i;else if (i instanceof l.OneOf) this._oneofsByName[i.name] = i;else if (!(i instanceof l.OneOf || i instanceof m)) throw Error("Illegal reflect child of " + this.toString(!0) + ": " + this.children[o].toString(!0));

                return this.clazz = r;
              }, d.encode = function (e, t, n) {
                for (var r, i, o = null, s = 0, a = this._fields.length; s < a; ++s) i = e[(r = this._fields[s]).name], r.required && null === i ? null === o && (o = r) : r.encode(n ? i : r.verifyValue(i), t, e);

                if (null !== o) {
                  var _ = Error("Missing at least one required field for " + this.toString(!0) + ": " + o);

                  throw _.encoded = t, _;
                }

                return t;
              }, d.calculate = function (e) {
                for (var t, n, r = 0, i = 0, o = this._fields.length; i < o; ++i) {
                  if (n = e[(t = this._fields[i]).name], t.required && null === n) throw Error("Missing at least one required field for " + this.toString(!0) + ": " + t);
                  r += t.calculate(n, e);
                }

                return r;
              }, d.decode = function (e, n, r) {
                "number" != typeof n && (n = -1);

                for (var i, o, s, a, _ = e.offset, E = new this.clazz(); e.offset < _ + n || -1 === n && e.remaining() > 0;) {
                  if (s = (i = e.readVarint32()) >>> 3, (o = 7 & i) === t.WIRE_TYPES.ENDGROUP) {
                    if (s !== r) throw Error("Illegal group end indicator for " + this.toString(!0) + ": " + s + " (" + (r ? r + " expected" : "not a group") + ")");
                    break;
                  }

                  if (a = this._fieldsById[s]) {
                    if (a.repeated && !a.options.packed) E[a.name].push(a.decode(o, e));else if (a.map) {
                      var l = a.decode(o, e);
                      E[a.name].set(l[0], l[1]);
                    } else if (E[a.name] = a.decode(o, e), a.oneof) {
                      var d = E[a.oneof.name];
                      null !== d && d !== a.name && (E[d] = null), E[a.oneof.name] = a.name;
                    }
                  } else switch (o) {
                    case t.WIRE_TYPES.VARINT:
                      e.readVarint32();
                      break;

                    case t.WIRE_TYPES.BITS32:
                      e.offset += 4;
                      break;

                    case t.WIRE_TYPES.BITS64:
                      e.offset += 8;
                      break;

                    case t.WIRE_TYPES.LDELIM:
                      var c = e.readVarint32();
                      e.offset += c;
                      break;

                    case t.WIRE_TYPES.STARTGROUP:
                      for (; u(s, e););

                      break;

                    default:
                      throw Error("Illegal wire type for unknown field " + s + " in " + this.toString(!0) + "#decode: " + o);
                  }
                }

                for (var h = 0, p = this._fields.length; h < p; ++h) if (null === E[(a = this._fields[h]).name]) if ("proto3" === this.syntax) E[a.name] = a.defaultValue;else {
                  if (a.required) {
                    var R = Error("Missing at least one required field for " + this.toString(!0) + ": " + a.name);
                    throw R.decoded = E, R;
                  }

                  t.populateDefaults && null !== a.defaultValue && (E[a.name] = a.defaultValue);
                }

                return E;
              }, n.Message = l;

              var c = function (e, n, i, o, s, a, _, E, d, u) {
                r.call(this, e, n, a), this.className = "Message.Field", this.required = "required" === i, this.repeated = "repeated" === i, this.map = "map" === i, this.keyType = o || null, this.type = s, this.resolvedType = null, this.id = _, this.options = E || {}, this.defaultValue = null, this.oneof = d || null, this.syntax = u || "proto2", this.originalName = this.name, this.element = null, this.keyElement = null, !this.builder.options.convertFieldsToCamelCase || this instanceof l.ExtensionField || (this.name = t.Util.toCamelCase(this.name));
              },
                  h = c.prototype = Object.create(r.prototype);

              h.build = function () {
                this.element = new a(this.type, this.resolvedType, !1, this.syntax, this.name), this.map && (this.keyElement = new a(this.keyType, void 0, !0, this.syntax, this.name)), "proto3" !== this.syntax || this.repeated || this.map ? void 0 !== this.options.default && (this.defaultValue = this.verifyValue(this.options.default)) : this.defaultValue = a.defaultFieldValue(this.type);
              }, h.verifyValue = function (e, n) {
                n = n || !1;
                var r,
                    i = this;

                function o(e, t) {
                  throw Error("Illegal value for " + i.toString(!0) + " of type " + i.type.name + ": " + e + " (" + t + ")");
                }

                if (null === e) return this.required && o(typeof e, "required"), "proto3" === this.syntax && this.type !== t.TYPES.message && o(typeof e, "proto3 field without field presence cannot be null"), null;

                if (this.repeated && !n) {
                  Array.isArray(e) || (e = [e]);
                  var s = [];

                  for (r = 0; r < e.length; r++) s.push(this.element.verifyValue(e[r]));

                  return s;
                }

                return this.map && !n ? e instanceof t.Map ? e : (e instanceof Object || o(typeof e, "expected ProtoBuf.Map or raw object for map field"), new t.Map(this, e)) : (!this.repeated && Array.isArray(e) && o(typeof e, "no array expected"), this.element.verifyValue(e));
              }, h.hasWirePresence = function (e, n) {
                if ("proto3" !== this.syntax) return null !== e;
                if (this.oneof && n[this.oneof.name] === this.name) return !0;

                switch (this.type) {
                  case t.TYPES.int32:
                  case t.TYPES.sint32:
                  case t.TYPES.sfixed32:
                  case t.TYPES.uint32:
                  case t.TYPES.fixed32:
                    return 0 !== e;

                  case t.TYPES.int64:
                  case t.TYPES.sint64:
                  case t.TYPES.sfixed64:
                  case t.TYPES.uint64:
                  case t.TYPES.fixed64:
                    return 0 !== e.low || 0 !== e.high;

                  case t.TYPES.bool:
                    return e;

                  case t.TYPES.float:
                  case t.TYPES.double:
                    return 0 !== e;

                  case t.TYPES.string:
                    return e.length > 0;

                  case t.TYPES.bytes:
                    return e.remaining() > 0;

                  case t.TYPES.enum:
                    return 0 !== e;

                  case t.TYPES.message:
                    return null !== e;

                  default:
                    return !0;
                }
              }, h.encode = function (n, r, i) {
                if (null === this.type || "object" != typeof this.type) throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
                if (null === n || this.repeated && 0 == n.length) return r;

                try {
                  var o;
                  if (this.repeated) {
                    if (this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
                      r.writeVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), r.ensureCapacity(r.offset += 1);
                      var s = r.offset;

                      for (o = 0; o < n.length; o++) this.element.encodeValue(this.id, n[o], r);

                      var a = r.offset - s,
                          _ = e.calculateVarint32(a);

                      if (_ > 1) {
                        var E = r.slice(s, r.offset);
                        s += _ - 1, r.offset = s, r.append(E);
                      }

                      r.writeVarint32(a, s - _);
                    } else for (o = 0; o < n.length; o++) r.writeVarint32(this.id << 3 | this.type.wireType), this.element.encodeValue(this.id, n[o], r);
                  } else this.map ? n.forEach(function (n, i, o) {
                    var s = e.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, i) + e.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, n);
                    r.writeVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), r.writeVarint32(s), r.writeVarint32(8 | this.keyType.wireType), this.keyElement.encodeValue(1, i, r), r.writeVarint32(16 | this.type.wireType), this.element.encodeValue(2, n, r);
                  }, this) : this.hasWirePresence(n, i) && (r.writeVarint32(this.id << 3 | this.type.wireType), this.element.encodeValue(this.id, n, r));
                } catch (e) {
                  throw Error("Illegal value for " + this.toString(!0) + ": " + n + " (" + e + ")");
                }

                return r;
              }, h.calculate = function (n, r) {
                if (n = this.verifyValue(n), null === this.type || "object" != typeof this.type) throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
                if (null === n || this.repeated && 0 == n.length) return 0;
                var i = 0;

                try {
                  var o, s;
                  if (this.repeated) {
                    if (this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
                      for (i += e.calculateVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), s = 0, o = 0; o < n.length; o++) s += this.element.calculateLength(this.id, n[o]);

                      i += e.calculateVarint32(s), i += s;
                    } else for (o = 0; o < n.length; o++) i += e.calculateVarint32(this.id << 3 | this.type.wireType), i += this.element.calculateLength(this.id, n[o]);
                  } else this.map ? n.forEach(function (n, r, o) {
                    var s = e.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, r) + e.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, n);
                    i += e.calculateVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), i += e.calculateVarint32(s), i += s;
                  }, this) : this.hasWirePresence(n, r) && (i += e.calculateVarint32(this.id << 3 | this.type.wireType), i += this.element.calculateLength(this.id, n));
                } catch (e) {
                  throw Error("Illegal value for " + this.toString(!0) + ": " + n + " (" + e + ")");
                }

                return i;
              }, h.decode = function (e, n, r) {
                var i, o;
                if (!(!this.map && e == this.type.wireType || !r && this.repeated && this.options.packed && e == t.WIRE_TYPES.LDELIM || this.map && e == t.WIRE_TYPES.LDELIM)) throw Error("Illegal wire type for field " + this.toString(!0) + ": " + e + " (" + this.type.wireType + " expected)");

                if (e == t.WIRE_TYPES.LDELIM && this.repeated && this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0 && !r) {
                  o = n.readVarint32(), o = n.offset + o;

                  for (var s = []; n.offset < o;) s.push(this.decode(this.type.wireType, n, !0));

                  return s;
                }

                if (this.map) {
                  var _ = a.defaultFieldValue(this.keyType);

                  if (i = a.defaultFieldValue(this.type), o = n.readVarint32(), n.remaining() < o) throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + o + " required but got only " + n.remaining());
                  var E = n.clone();

                  for (E.limit = E.offset + o, n.offset += o; E.remaining() > 0;) {
                    var l = E.readVarint32();
                    e = 7 & l;
                    var d = l >>> 3;
                    if (1 === d) _ = this.keyElement.decode(E, e, d);else {
                      if (2 !== d) throw Error("Unexpected tag in map field key/value submessage");
                      i = this.element.decode(E, e, d);
                    }
                  }

                  return [_, i];
                }

                return this.element.decode(n, e, this.id);
              }, n.Message.Field = c;

              var p = function (e, t, n, r, i, o, s) {
                c.call(this, e, t, n, null, r, i, o, s), this.extension;
              };

              p.prototype = Object.create(c.prototype), n.Message.ExtensionField = p, n.Message.OneOf = function (e, t, n) {
                r.call(this, e, t, n), this.fields = [];
              };

              var R = function (e, t, n, r, i) {
                o.call(this, e, t, n, r, i), this.className = "Enum", this.object = null;
              };

              R.getName = function (e, t) {
                for (var n, r = Object.keys(e), i = 0; i < r.length; ++i) if (e[n = r[i]] === t) return n;

                return null;
              }, (R.prototype = Object.create(o.prototype)).build = function (e) {
                if (this.object && !e) return this.object;

                for (var n = new t.Builder.Enum(), r = this.getChildren(R.Value), i = 0, o = r.length; i < o; ++i) n[r[i].name] = r[i].id;

                return Object.defineProperty && Object.defineProperty(n, "$options", {
                  value: this.buildOpt(),
                  enumerable: !1
                }), this.object = n;
              }, n.Enum = R;

              var f = function (e, t, n, i) {
                r.call(this, e, t, n), this.className = "Enum.Value", this.id = i;
              };

              f.prototype = Object.create(r.prototype), n.Enum.Value = f;

              var m = function (e, t, n, i) {
                r.call(this, e, t, n), this.field = i;
              };

              m.prototype = Object.create(r.prototype), n.Extension = m;

              var S = function (e, t, n, r) {
                o.call(this, e, t, n, r), this.className = "Service", this.clazz = null;
              };

              (S.prototype = Object.create(o.prototype)).build = function (n) {
                return this.clazz && !n ? this.clazz : this.clazz = function (t, n) {
                  for (var r = function (e) {
                    t.Builder.Service.call(this), this.rpcImpl = e || function (e, t, n) {
                      setTimeout(n.bind(this, Error("Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services")), 0);
                    };
                  }, i = r.prototype = Object.create(t.Builder.Service.prototype), o = n.getChildren(t.Reflect.Service.RPCMethod), s = 0; s < o.length; s++) !function (t) {
                    i[t.name] = function (r, i) {
                      try {
                        try {
                          r = t.resolvedRequestType.clazz.decode(e.wrap(r));
                        } catch (e) {
                          if (!(e instanceof TypeError)) throw e;
                        }

                        if (null === r || "object" != typeof r) throw Error("Illegal arguments");
                        r instanceof t.resolvedRequestType.clazz || (r = new t.resolvedRequestType.clazz(r)), this.rpcImpl(t.fqn(), r, function (e, r) {
                          if (e) i(e);else {
                            null === r && (r = "");

                            try {
                              r = t.resolvedResponseType.clazz.decode(r);
                            } catch (e) {}

                            r && r instanceof t.resolvedResponseType.clazz ? i(null, r) : i(Error("Illegal response type received in service method " + n.name + "#" + t.name));
                          }
                        });
                      } catch (e) {
                        setTimeout(i.bind(this, e), 0);
                      }
                    }, r[t.name] = function (e, n, i) {
                      new r(e)[t.name](n, i);
                    }, Object.defineProperty && (Object.defineProperty(r[t.name], "$options", {
                      value: t.buildOpt()
                    }), Object.defineProperty(i[t.name], "$options", {
                      value: r[t.name].$options
                    }));
                  }(o[s]);

                  return Object.defineProperty && (Object.defineProperty(r, "$options", {
                    value: n.buildOpt()
                  }), Object.defineProperty(i, "$options", {
                    value: r.$options
                  }), Object.defineProperty(r, "$type", {
                    value: n
                  }), Object.defineProperty(i, "$type", {
                    value: n
                  })), r;
                }(t, this);
              }, n.Service = S;

              var y = function (e, t, n, i) {
                r.call(this, e, t, n), this.className = "Service.Method", this.options = i || {};
              };

              (y.prototype = Object.create(r.prototype)).buildOpt = s.buildOpt, n.Service.Method = y;

              var I = function (e, t, n, r, i, o, s, a) {
                y.call(this, e, t, n, a), this.className = "Service.RPCMethod", this.requestName = r, this.responseName = i, this.requestStream = o, this.responseStream = s, this.resolvedRequestType = null, this.resolvedResponseType = null;
              };

              return I.prototype = Object.create(y.prototype), n.Service.RPCMethod = I, n;
            }(o), o.Builder = function (e, t, r) {
              var i = function (e) {
                this.ns = new r.Namespace(this, null, ""), this.ptr = this.ns, this.resolved = !1, this.result = null, this.files = {}, this.importRoot = null, this.options = e || {};
              },
                  o = i.prototype;

              return i.isMessage = function (e) {
                return "string" == typeof e.name && void 0 === e.values && void 0 === e.rpc;
              }, i.isMessageField = function (e) {
                return "string" == typeof e.rule && "string" == typeof e.name && "string" == typeof e.type && void 0 !== e.id;
              }, i.isEnum = function (e) {
                return "string" == typeof e.name && !(void 0 === e.values || !Array.isArray(e.values) || 0 === e.values.length);
              }, i.isService = function (e) {
                return !("string" != typeof e.name || "object" != typeof e.rpc || !e.rpc);
              }, i.isExtend = function (e) {
                return "string" == typeof e.ref;
              }, o.reset = function () {
                return this.ptr = this.ns, this;
              }, o.define = function (e) {
                if ("string" != typeof e || !t.TYPEREF.test(e)) throw Error("illegal namespace: " + e);
                return e.split(".").forEach(function (e) {
                  var t = this.ptr.getChild(e);
                  null === t && this.ptr.addChild(t = new r.Namespace(this, this.ptr, e)), this.ptr = t;
                }, this), this;
              }, o.create = function (t) {
                if (!t) return this;

                if (Array.isArray(t)) {
                  if (0 === t.length) return this;
                  t = t.slice();
                } else t = [t];

                for (var n = [t]; n.length > 0;) {
                  if (t = n.pop(), !Array.isArray(t)) throw Error("not a valid namespace: " + JSON.stringify(t));

                  for (; t.length > 0;) {
                    var o = t.shift();

                    if (i.isMessage(o)) {
                      var s = new r.Message(this, this.ptr, o.name, o.options, o.isGroup, o.syntax),
                          a = {};
                      o.oneofs && Object.keys(o.oneofs).forEach(function (e) {
                        s.addChild(a[e] = new r.Message.OneOf(this, s, e));
                      }, this), o.fields && o.fields.forEach(function (e) {
                        if (null !== s.getChild(0 | e.id)) throw Error("duplicate or invalid field id in " + s.name + ": " + e.id);
                        if (e.options && "object" != typeof e.options) throw Error("illegal field options in " + s.name + "#" + e.name);
                        var t = null;
                        if ("string" == typeof e.oneof && !(t = a[e.oneof])) throw Error("illegal oneof in " + s.name + "#" + e.name + ": " + e.oneof);
                        e = new r.Message.Field(this, s, e.rule, e.keytype, e.type, e.name, e.id, e.options, t, o.syntax), t && t.fields.push(e), s.addChild(e);
                      }, this);
                      var _ = [];

                      if (o.enums && o.enums.forEach(function (e) {
                        _.push(e);
                      }), o.messages && o.messages.forEach(function (e) {
                        _.push(e);
                      }), o.services && o.services.forEach(function (e) {
                        _.push(e);
                      }), o.extensions && ("number" == typeof o.extensions[0] ? s.extensions = [o.extensions] : s.extensions = o.extensions), this.ptr.addChild(s), _.length > 0) {
                        n.push(t), t = _, _ = null, this.ptr = s, s = null;
                        continue;
                      }

                      _ = null;
                    } else if (i.isEnum(o)) s = new r.Enum(this, this.ptr, o.name, o.options, o.syntax), o.values.forEach(function (e) {
                      s.addChild(new r.Enum.Value(this, s, e.name, e.id));
                    }, this), this.ptr.addChild(s);else if (i.isService(o)) s = new r.Service(this, this.ptr, o.name, o.options), Object.keys(o.rpc).forEach(function (e) {
                      var t = o.rpc[e];
                      s.addChild(new r.Service.RPCMethod(this, s, e, t.request, t.response, !!t.request_stream, !!t.response_stream, t.options));
                    }, this), this.ptr.addChild(s);else {
                      if (!i.isExtend(o)) throw Error("not a valid definition: " + JSON.stringify(o));
                      if (s = this.ptr.resolve(o.ref, !0)) o.fields.forEach(function (t) {
                        if (null !== s.getChild(0 | t.id)) throw Error("duplicate extended field id in " + s.name + ": " + t.id);

                        if (s.extensions) {
                          var n = !1;
                          if (s.extensions.forEach(function (e) {
                            t.id >= e[0] && t.id <= e[1] && (n = !0);
                          }), !n) throw Error("illegal extended field id in " + s.name + ": " + t.id + " (not within valid ranges)");
                        }

                        var i = t.name;
                        this.options.convertFieldsToCamelCase && (i = e.Util.toCamelCase(i));
                        var o = new r.Message.ExtensionField(this, s, t.rule, t.type, this.ptr.fqn() + "." + i, t.id, t.options),
                            a = new r.Extension(this, this.ptr, t.name, o);
                        o.extension = a, this.ptr.addChild(a), s.addChild(o);
                      }, this);else if (!/\.?google\.protobuf\./.test(o.ref)) throw Error("extended message " + o.ref + " is not defined");
                    }

                    o = null, s = null;
                  }

                  t = null, this.ptr = this.ptr.parent;
                }

                return this.resolved = !1, this.result = null, this;
              }, o.import = function (t, r) {
                var i = "/";

                if ("string" == typeof r) {
                  if (e.Util.IS_NODE && (r = n(1).resolve(r)), !0 === this.files[r]) return this.reset();
                  this.files[r] = !0;
                } else if ("object" == typeof r) {
                  var o,
                      s = r.root;
                  if (e.Util.IS_NODE && (s = n(1).resolve(s)), (s.indexOf("\\") >= 0 || r.file.indexOf("\\") >= 0) && (i = "\\"), o = e.Util.IS_NODE ? n(1).join(s, r.file) : s + i + r.file, !0 === this.files[o]) return this.reset();
                  this.files[o] = !0;
                }

                if (t.imports && t.imports.length > 0) {
                  var a,
                      _ = !1;

                  "object" == typeof r ? (this.importRoot = r.root, _ = !0, a = this.importRoot, r = r.file, (a.indexOf("\\") >= 0 || r.indexOf("\\") >= 0) && (i = "\\")) : "string" == typeof r ? this.importRoot ? a = this.importRoot : r.indexOf("/") >= 0 ? "" === (a = r.replace(/\/[^\/]*$/, "")) && (a = "/") : r.indexOf("\\") >= 0 ? (a = r.replace(/\\[^\\]*$/, ""), i = "\\") : a = "." : a = null;

                  for (var E = 0; E < t.imports.length; E++) if ("string" == typeof t.imports[E]) {
                    if (!a) throw Error("cannot determine import root");
                    var l = t.imports[E];
                    if ("google/protobuf/descriptor.proto" === l) continue;
                    if (l = e.Util.IS_NODE ? n(1).join(a, l) : a + i + l, !0 === this.files[l]) continue;
                    /\.proto$/i.test(l) && !e.DotProto && (l = l.replace(/\.proto$/, ".json"));
                    var d = e.Util.fetch(l);
                    if (null === d) throw Error("failed to import '" + l + "' in '" + r + "': file not found");
                    /\.json$/i.test(l) ? this.import(JSON.parse(d + ""), l) : this.import(e.DotProto.Parser.parse(d), l);
                  } else r ? /\.(\w+)$/.test(r) ? this.import(t.imports[E], r.replace(/^(.+)\.(\w+)$/, function (e, t, n) {
                    return t + "_import" + E + "." + n;
                  })) : this.import(t.imports[E], r + "_import" + E) : this.import(t.imports[E]);

                  _ && (this.importRoot = null);
                }

                t.package && this.define(t.package), t.syntax && function e(t) {
                  t.messages && t.messages.forEach(function (n) {
                    n.syntax = t.syntax, e(n);
                  }), t.enums && t.enums.forEach(function (e) {
                    e.syntax = t.syntax;
                  });
                }(t);
                var u = this.ptr;
                return t.options && Object.keys(t.options).forEach(function (e) {
                  u.options[e] = t.options[e];
                }), t.messages && (this.create(t.messages), this.ptr = u), t.enums && (this.create(t.enums), this.ptr = u), t.services && (this.create(t.services), this.ptr = u), t.extends && this.create(t.extends), this.reset();
              }, o.resolveAll = function () {
                var n;
                if (null == this.ptr || "object" == typeof this.ptr.type) return this;
                if (this.ptr instanceof r.Namespace) this.ptr.children.forEach(function (e) {
                  this.ptr = e, this.resolveAll();
                }, this);else if (this.ptr instanceof r.Message.Field) {
                  if (t.TYPE.test(this.ptr.type)) this.ptr.type = e.TYPES[this.ptr.type];else {
                    if (!t.TYPEREF.test(this.ptr.type)) throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                    if (!(n = (this.ptr instanceof r.Message.ExtensionField ? this.ptr.extension.parent : this.ptr.parent).resolve(this.ptr.type, !0))) throw Error("unresolvable type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);

                    if (this.ptr.resolvedType = n, n instanceof r.Enum) {
                      if (this.ptr.type = e.TYPES.enum, "proto3" === this.ptr.syntax && "proto3" !== n.syntax) throw Error("proto3 message cannot reference proto2 enum");
                    } else {
                      if (!(n instanceof r.Message)) throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                      this.ptr.type = n.isGroup ? e.TYPES.group : e.TYPES.message;
                    }
                  }

                  if (this.ptr.map) {
                    if (!t.TYPE.test(this.ptr.keyType)) throw Error("illegal key type for map field in " + this.ptr.toString(!0) + ": " + this.ptr.keyType);
                    this.ptr.keyType = e.TYPES[this.ptr.keyType];
                  }

                  "proto3" === this.ptr.syntax && this.ptr.repeated && void 0 === this.ptr.options.packed && -1 !== e.PACKABLE_WIRE_TYPES.indexOf(this.ptr.type.wireType) && (this.ptr.options.packed = !0);
                } else if (this.ptr instanceof e.Reflect.Service.Method) {
                  if (!(this.ptr instanceof e.Reflect.Service.RPCMethod)) throw Error("illegal service type in " + this.ptr.toString(!0));
                  if (!((n = this.ptr.parent.resolve(this.ptr.requestName, !0)) && n instanceof e.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.requestName);
                  if (this.ptr.resolvedRequestType = n, !((n = this.ptr.parent.resolve(this.ptr.responseName, !0)) && n instanceof e.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.responseName);
                  this.ptr.resolvedResponseType = n;
                } else if (!(this.ptr instanceof e.Reflect.Message.OneOf || this.ptr instanceof e.Reflect.Extension || this.ptr instanceof e.Reflect.Enum.Value)) throw Error("illegal object in namespace: " + typeof this.ptr + ": " + this.ptr);
                return this.reset();
              }, o.build = function (e) {
                if (this.reset(), this.resolved || (this.resolveAll(), this.resolved = !0, this.result = null), null === this.result && (this.result = this.ns.build()), !e) return this.result;

                for (var t = "string" == typeof e ? e.split(".") : e, n = this.result, r = 0; r < t.length; r++) {
                  if (!n[t[r]]) {
                    n = null;
                    break;
                  }

                  n = n[t[r]];
                }

                return n;
              }, o.lookup = function (e, t) {
                return e ? this.ns.resolve(e, t) : this.ns;
              }, o.toString = function () {
                return "Builder";
              }, i.Message = function () {}, i.Enum = function () {}, i.Service = function () {}, i;
            }(o, o.Lang, o.Reflect), o.Map = function (e, t) {
              var n = function (e, n) {
                if (!e.map) throw Error("field is not a map");
                if (this.field = e, this.keyElem = new t.Element(e.keyType, null, !0, e.syntax), this.valueElem = new t.Element(e.type, e.resolvedType, !1, e.syntax), this.map = {}, Object.defineProperty(this, "size", {
                  get: function () {
                    return Object.keys(this.map).length;
                  }
                }), n) for (var r = Object.keys(n), i = 0; i < r.length; i++) {
                  var o = this.keyElem.valueFromString(r[i]),
                      s = this.valueElem.verifyValue(n[r[i]]);
                  this.map[this.keyElem.valueToString(o)] = {
                    key: o,
                    value: s
                  };
                }
              },
                  r = n.prototype;

              function i(e) {
                var t = 0;
                return {
                  next: function () {
                    return t < e.length ? {
                      done: !1,
                      value: e[t++]
                    } : {
                      done: !0
                    };
                  }
                };
              }

              return r.clear = function () {
                this.map = {};
              }, r.delete = function (e) {
                var t = this.keyElem.valueToString(this.keyElem.verifyValue(e)),
                    n = (t in this.map);
                return delete this.map[t], n;
              }, r.entries = function () {
                for (var e, t = [], n = Object.keys(this.map), r = 0; r < n.length; r++) t.push([(e = this.map[n[r]]).key, e.value]);

                return i(t);
              }, r.keys = function () {
                for (var e = [], t = Object.keys(this.map), n = 0; n < t.length; n++) e.push(this.map[t[n]].key);

                return i(e);
              }, r.values = function () {
                for (var e = [], t = Object.keys(this.map), n = 0; n < t.length; n++) e.push(this.map[t[n]].value);

                return i(e);
              }, r.forEach = function (e, t) {
                for (var n, r = Object.keys(this.map), i = 0; i < r.length; i++) e.call(t, (n = this.map[r[i]]).value, n.key, this);
              }, r.set = function (e, t) {
                var n = this.keyElem.verifyValue(e),
                    r = this.valueElem.verifyValue(t);
                return this.map[this.keyElem.valueToString(n)] = {
                  key: n,
                  value: r
                }, this;
              }, r.get = function (e) {
                var t = this.keyElem.valueToString(this.keyElem.verifyValue(e));
                if (t in this.map) return this.map[t].value;
              }, r.has = function (e) {
                return this.keyElem.valueToString(this.keyElem.verifyValue(e)) in this.map;
              }, n;
            }(0, o.Reflect), o.loadProto = function (e, t, n) {
              return ("string" == typeof t || t && "string" == typeof t.file && "string" == typeof t.root) && (n = t, t = void 0), o.loadJson(o.DotProto.Parser.parse(e), t, n);
            }, o.protoFromString = o.loadProto, o.loadProtoFile = function (e, t, n) {
              if (t && "object" == typeof t ? (n = t, t = null) : t && "function" == typeof t || (t = null), t) return o.Util.fetch("string" == typeof e ? e : e.root + "/" + e.file, function (r) {
                if (null !== r) try {
                  t(null, o.loadProto(r, n, e));
                } catch (e) {
                  t(e);
                } else t(Error("Failed to fetch file"));
              });
              var r = o.Util.fetch("object" == typeof e ? e.root + "/" + e.file : e);
              return null === r ? null : o.loadProto(r, n, e);
            }, o.protoFromFile = o.loadProtoFile, o.newBuilder = function (e) {
              return void 0 === (e = e || {}).convertFieldsToCamelCase && (e.convertFieldsToCamelCase = o.convertFieldsToCamelCase), void 0 === e.populateAccessors && (e.populateAccessors = o.populateAccessors), new o.Builder(e);
            }, o.loadJson = function (e, t, n) {
              return ("string" == typeof t || t && "string" == typeof t.file && "string" == typeof t.root) && (n = t, t = null), t && "object" == typeof t || (t = o.newBuilder()), "string" == typeof e && (e = JSON.parse(e)), t.import(e, n), t.resolveAll(), t;
            }, o.loadJsonFile = function (e, t, n) {
              if (t && "object" == typeof t ? (n = t, t = null) : t && "function" == typeof t || (t = null), t) return o.Util.fetch("string" == typeof e ? e : e.root + "/" + e.file, function (r) {
                if (null !== r) try {
                  t(null, o.loadJson(JSON.parse(r), n, e));
                } catch (e) {
                  t(e);
                } else t(Error("Failed to fetch file"));
              });
              var r = o.Util.fetch("object" == typeof e ? e.root + "/" + e.file : e);
              return null === r ? null : o.loadJson(JSON.parse(r), n, e);
            }, o;
          }) ? i.apply(t, o) : i) || (e.exports = s);
        }).call(this, n(9));
      }, function (e, t) {
        var n,
            r,
            i = e.exports = {};

        function o() {
          throw new Error("setTimeout has not been defined");
        }

        function s() {
          throw new Error("clearTimeout has not been defined");
        }

        function a(e) {
          if (n === setTimeout) return setTimeout(e, 0);
          if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);

          try {
            return n(e, 0);
          } catch (t) {
            try {
              return n.call(null, e, 0);
            } catch (t) {
              return n.call(this, e, 0);
            }
          }
        }

        !function () {
          try {
            n = "function" == typeof setTimeout ? setTimeout : o;
          } catch (e) {
            n = o;
          }

          try {
            r = "function" == typeof clearTimeout ? clearTimeout : s;
          } catch (e) {
            r = s;
          }
        }();

        var _,
            E = [],
            l = !1,
            d = -1;

        function u() {
          l && _ && (l = !1, _.length ? E = _.concat(E) : d = -1, E.length && c());
        }

        function c() {
          if (!l) {
            var e = a(u);
            l = !0;

            for (var t = E.length; t;) {
              for (_ = E, E = []; ++d < t;) _ && _[d].run();

              d = -1, t = E.length;
            }

            _ = null, l = !1, function (e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);

              try {
                r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            }(e);
          }
        }

        function h(e, t) {
          this.fun = e, this.array = t;
        }

        function p() {}

        i.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          E.push(new h(e, t)), 1 !== E.length || l || a(c);
        }, h.prototype.run = function () {
          this.fun.apply(null, this.array);
        }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function (e) {
          return [];
        }, i.binding = function (e) {
          throw new Error("process.binding is not supported");
        }, i.cwd = function () {
          return "/";
        }, i.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }, i.umask = function () {
          return 0;
        };
      }, function (e, t, n) {
        var r, i, o;
        i = [n(11)], void 0 === (o = "function" == typeof (r = function (e) {
          "use strict";

          var t = function (e, n, i) {
            if (void 0 === e && (e = t.DEFAULT_CAPACITY), void 0 === n && (n = t.DEFAULT_ENDIAN), void 0 === i && (i = t.DEFAULT_NOASSERT), !i) {
              if ((e |= 0) < 0) throw RangeError("Illegal capacity");
              n = !!n, i = !!i;
            }

            this.buffer = 0 === e ? r : new ArrayBuffer(e), this.view = 0 === e ? null : new Uint8Array(this.buffer), this.offset = 0, this.markedOffset = -1, this.limit = e, this.littleEndian = n, this.noAssert = i;
          };

          t.VERSION = "5.0.1", t.LITTLE_ENDIAN = !0, t.BIG_ENDIAN = !1, t.DEFAULT_CAPACITY = 16, t.DEFAULT_ENDIAN = t.BIG_ENDIAN, t.DEFAULT_NOASSERT = !1, t.Long = e || null;
          var n = t.prototype;
          n.__isByteBuffer__, Object.defineProperty(n, "__isByteBuffer__", {
            value: !0,
            enumerable: !1,
            configurable: !1
          });
          var r = new ArrayBuffer(0),
              i = String.fromCharCode;

          function o(e) {
            var t = 0;
            return function () {
              return t < e.length ? e.charCodeAt(t++) : null;
            };
          }

          function s() {
            var e = [],
                t = [];
            return function () {
              if (0 === arguments.length) return t.join("") + i.apply(String, e);
              e.length + arguments.length > 1024 && (t.push(i.apply(String, e)), e.length = 0), Array.prototype.push.apply(e, arguments);
            };
          }

          function a(e, t, n, r, i) {
            var o,
                s,
                a = 8 * i - r - 1,
                _ = (1 << a) - 1,
                E = _ >> 1,
                l = -7,
                d = n ? i - 1 : 0,
                u = n ? -1 : 1,
                c = e[t + d];

            for (d += u, o = c & (1 << -l) - 1, c >>= -l, l += a; l > 0; o = 256 * o + e[t + d], d += u, l -= 8);

            for (s = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; s = 256 * s + e[t + d], d += u, l -= 8);

            if (0 === o) o = 1 - E;else {
              if (o === _) return s ? NaN : 1 / 0 * (c ? -1 : 1);
              s += Math.pow(2, r), o -= E;
            }
            return (c ? -1 : 1) * s * Math.pow(2, o - r);
          }

          function _(e, t, n, r, i, o) {
            var s,
                a,
                _,
                E = 8 * o - i - 1,
                l = (1 << E) - 1,
                d = l >> 1,
                u = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                c = r ? 0 : o - 1,
                h = r ? 1 : -1,
                p = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;

            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (_ = Math.pow(2, -s)) < 1 && (s--, _ *= 2), (t += s + d >= 1 ? u / _ : u * Math.pow(2, 1 - d)) * _ >= 2 && (s++, _ /= 2), s + d >= l ? (a = 0, s = l) : s + d >= 1 ? (a = (t * _ - 1) * Math.pow(2, i), s += d) : (a = t * Math.pow(2, d - 1) * Math.pow(2, i), s = 0)); i >= 8; e[n + c] = 255 & a, c += h, a /= 256, i -= 8);

            for (s = s << i | a, E += i; E > 0; e[n + c] = 255 & s, c += h, s /= 256, E -= 8);

            e[n + c - h] |= 128 * p;
          }

          t.accessor = function () {
            return Uint8Array;
          }, t.allocate = function (e, n, r) {
            return new t(e, n, r);
          }, t.concat = function (e, n, r, i) {
            "boolean" != typeof n && "string" == typeof n || (i = r, r = n, n = void 0);

            for (var o, s = 0, a = 0, _ = e.length; a < _; ++a) t.isByteBuffer(e[a]) || (e[a] = t.wrap(e[a], n)), (o = e[a].limit - e[a].offset) > 0 && (s += o);

            if (0 === s) return new t(0, r, i);
            var E,
                l = new t(s, r, i);

            for (a = 0; a < _;) (o = (E = e[a++]).limit - E.offset) <= 0 || (l.view.set(E.view.subarray(E.offset, E.limit), l.offset), l.offset += o);

            return l.limit = l.offset, l.offset = 0, l;
          }, t.isByteBuffer = function (e) {
            return !0 === (e && e.__isByteBuffer__);
          }, t.type = function () {
            return ArrayBuffer;
          }, t.wrap = function (e, r, i, o) {
            if ("string" != typeof r && (o = i, i = r, r = void 0), "string" == typeof e) switch (void 0 === r && (r = "utf8"), r) {
              case "base64":
                return t.fromBase64(e, i);

              case "hex":
                return t.fromHex(e, i);

              case "binary":
                return t.fromBinary(e, i);

              case "utf8":
                return t.fromUTF8(e, i);

              case "debug":
                return t.fromDebug(e, i);

              default:
                throw Error("Unsupported encoding: " + r);
            }
            if (null === e || "object" != typeof e) throw TypeError("Illegal buffer");
            var s;
            if (t.isByteBuffer(e)) return (s = n.clone.call(e)).markedOffset = -1, s;
            if (e instanceof Uint8Array) s = new t(0, i, o), e.length > 0 && (s.buffer = e.buffer, s.offset = e.byteOffset, s.limit = e.byteOffset + e.byteLength, s.view = new Uint8Array(e.buffer));else if (e instanceof ArrayBuffer) s = new t(0, i, o), e.byteLength > 0 && (s.buffer = e, s.offset = 0, s.limit = e.byteLength, s.view = e.byteLength > 0 ? new Uint8Array(e) : null);else {
              if ("[object Array]" !== Object.prototype.toString.call(e)) throw TypeError("Illegal buffer");
              (s = new t(e.length, i, o)).limit = e.length;

              for (var a = 0; a < e.length; ++a) s.view[a] = e[a];
            }
            return s;
          }, n.writeBitSet = function (e, t) {
            var n = void 0 === t;

            if (n && (t = this.offset), !this.noAssert) {
              if (!(e instanceof Array)) throw TypeError("Illegal BitSet: Not an array");
              if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
              if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
            }

            var r,
                i = t,
                o = e.length,
                s = o >> 3,
                a = 0;

            for (t += this.writeVarint32(o, t); s--;) r = 1 & !!e[a++] | (1 & !!e[a++]) << 1 | (1 & !!e[a++]) << 2 | (1 & !!e[a++]) << 3 | (1 & !!e[a++]) << 4 | (1 & !!e[a++]) << 5 | (1 & !!e[a++]) << 6 | (1 & !!e[a++]) << 7, this.writeByte(r, t++);

            if (a < o) {
              var _ = 0;

              for (r = 0; a < o;) r |= (1 & !!e[a++]) << _++;

              this.writeByte(r, t++);
            }

            return n ? (this.offset = t, this) : t - i;
          }, n.readBitSet = function (e) {
            var t = void 0 === e;
            t && (e = this.offset);
            var n,
                r = this.readVarint32(e),
                i = r.value,
                o = i >> 3,
                s = 0,
                a = [];

            for (e += r.length; o--;) n = this.readByte(e++), a[s++] = !!(1 & n), a[s++] = !!(2 & n), a[s++] = !!(4 & n), a[s++] = !!(8 & n), a[s++] = !!(16 & n), a[s++] = !!(32 & n), a[s++] = !!(64 & n), a[s++] = !!(128 & n);

            if (s < i) {
              var _ = 0;

              for (n = this.readByte(e++); s < i;) a[s++] = !!(n >> _++ & 1);
            }

            return t && (this.offset = e), a;
          }, n.readBytes = function (e, t) {
            var n = void 0 === t;

            if (n && (t = this.offset), !this.noAssert) {
              if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
              if ((t >>>= 0) < 0 || t + e > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+" + e + ") <= " + this.buffer.byteLength);
            }

            var r = this.slice(t, t + e);
            return n && (this.offset += e), r;
          }, n.writeBytes = n.append, n.writeInt8 = function (e, t) {
            var n = void 0 === t;

            if (n && (t = this.offset), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
              if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
              if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
            }

            t += 1;
            var r = this.buffer.byteLength;
            return t > r && this.resize((r *= 2) > t ? r : t), t -= 1, this.view[t] = e, n && (this.offset += 1), this;
          }, n.writeByte = n.writeInt8, n.readInt8 = function (e) {
            var t = void 0 === e;

            if (t && (e = this.offset), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
              if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
            }

            var n = this.view[e];
            return 128 == (128 & n) && (n = -(255 - n + 1)), t && (this.offset += 1), n;
          }, n.readByte = n.readInt8, n.writeUint8 = function (e, t) {
            var n = void 0 === t;

            if (n && (t = this.offset), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
              if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
              if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
            }

            t += 1;
            var r = this.buffer.byteLength;
            return t > r && this.resize((r *= 2) > t ? r : t), t -= 1, this.view[t] = e, n && (this.offset += 1), this;
          }, n.writeUInt8 = n.writeUint8, n.readUint8 = function (e) {
            var t = void 0 === e;

            if (t && (e = this.offset), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
              if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
            }

            var n = this.view[e];
            return t && (this.offset += 1), n;
          }, n.readUInt8 = n.readUint8, n.writeInt16 = function (e, t) {
            var n = void 0 === t;

            if (n && (t = this.offset), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
              if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
              if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
            }

            t += 2;
            var r = this.buffer.byteLength;
            return t > r && this.resize((r *= 2) > t ? r : t), t -= 2, this.littleEndian ? (this.view[t + 1] = (65280 & e) >>> 8, this.view[t] = 255 & e) : (this.view[t] = (65280 & e) >>> 8, this.view[t + 1] = 255 & e), n && (this.offset += 2), this;
          }, n.writeShort = n.writeInt16, n.readInt16 = function (e) {
            var t = void 0 === e;

            if (t && (e = this.offset), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
              if ((e >>>= 0) < 0 || e + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength);
            }

            var n = 0;
            return this.littleEndian ? (n = this.view[e], n |= this.view[e + 1] << 8) : (n = this.view[e] << 8, n |= this.view[e + 1]), 32768 == (32768 & n) && (n = -(65535 - n + 1)), t && (this.offset += 2), n;
          }, n.readShort = n.readInt16, n.writeUint16 = function (e, t) {
            var n = void 0 === t;

            if (n && (t = this.offset), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
              if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
              if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
            }

            t += 2;
            var r = this.buffer.byteLength;
            return t > r && this.resize((r *= 2) > t ? r : t), t -= 2, this.littleEndian ? (this.view[t + 1] = (65280 & e) >>> 8, this.view[t] = 255 & e) : (this.view[t] = (65280 & e) >>> 8, this.view[t + 1] = 255 & e), n && (this.offset += 2), this;
          }, n.writeUInt16 = n.writeUint16, n.readUint16 = function (e) {
            var t = void 0 === e;

            if (t && (e = this.offset), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
              if ((e >>>= 0) < 0 || e + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength);
            }

            var n = 0;
            return this.littleEndian ? (n = this.view[e], n |= this.view[e + 1] << 8) : (n = this.view[e] << 8, n |= this.view[e + 1]), t && (this.offset += 2), n;
          }, n.readUInt16 = n.readUint16, n.writeInt32 = function (e, t) {
            var n = void 0 === t;

            if (n && (t = this.offset), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
              if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
              if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
            }

            t += 4;
            var r = this.buffer.byteLength;
            return t > r && this.resize((r *= 2) > t ? r : t), t -= 4, this.littleEndian ? (this.view[t + 3] = e >>> 24 & 255, this.view[t + 2] = e >>> 16 & 255, this.view[t + 1] = e >>> 8 & 255, this.view[t] = 255 & e) : (this.view[t] = e >>> 24 & 255, this.view[t + 1] = e >>> 16 & 255, this.view[t + 2] = e >>> 8 & 255, this.view[t + 3] = 255 & e), n && (this.offset += 4), this;
          }, n.writeInt = n.writeInt32, n.readInt32 = function (e) {
            var t = void 0 === e;

            if (t && (e = this.offset), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
              if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength);
            }

            var n = 0;
            return this.littleEndian ? (n = this.view[e + 2] << 16, n |= this.view[e + 1] << 8, n |= this.view[e], n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16, n |= this.view[e + 2] << 8, n |= this.view[e + 3], n += this.view[e] << 24 >>> 0), n |= 0, t && (this.offset += 4), n;
          }, n.readInt = n.readInt32, n.writeUint32 = function (e, t) {
            var n = void 0 === t;

            if (n && (t = this.offset), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
              if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
              if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
            }

            t += 4;
            var r = this.buffer.byteLength;
            return t > r && this.resize((r *= 2) > t ? r : t), t -= 4, this.littleEndian ? (this.view[t + 3] = e >>> 24 & 255, this.view[t + 2] = e >>> 16 & 255, this.view[t + 1] = e >>> 8 & 255, this.view[t] = 255 & e) : (this.view[t] = e >>> 24 & 255, this.view[t + 1] = e >>> 16 & 255, this.view[t + 2] = e >>> 8 & 255, this.view[t + 3] = 255 & e), n && (this.offset += 4), this;
          }, n.writeUInt32 = n.writeUint32, n.readUint32 = function (e) {
            var t = void 0 === e;

            if (t && (e = this.offset), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
              if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength);
            }

            var n = 0;
            return this.littleEndian ? (n = this.view[e + 2] << 16, n |= this.view[e + 1] << 8, n |= this.view[e], n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16, n |= this.view[e + 2] << 8, n |= this.view[e + 3], n += this.view[e] << 24 >>> 0), t && (this.offset += 4), n;
          }, n.readUInt32 = n.readUint32, e && (n.writeInt64 = function (t, n) {
            var r = void 0 === n;

            if (r && (n = this.offset), !this.noAssert) {
              if ("number" == typeof t) t = e.fromNumber(t);else if ("string" == typeof t) t = e.fromString(t);else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
              if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
              if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength);
            }

            "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t)), n += 8;
            var i = this.buffer.byteLength;
            n > i && this.resize((i *= 2) > n ? i : n), n -= 8;
            var o = t.low,
                s = t.high;
            return this.littleEndian ? (this.view[n + 3] = o >>> 24 & 255, this.view[n + 2] = o >>> 16 & 255, this.view[n + 1] = o >>> 8 & 255, this.view[n] = 255 & o, n += 4, this.view[n + 3] = s >>> 24 & 255, this.view[n + 2] = s >>> 16 & 255, this.view[n + 1] = s >>> 8 & 255, this.view[n] = 255 & s) : (this.view[n] = s >>> 24 & 255, this.view[n + 1] = s >>> 16 & 255, this.view[n + 2] = s >>> 8 & 255, this.view[n + 3] = 255 & s, n += 4, this.view[n] = o >>> 24 & 255, this.view[n + 1] = o >>> 16 & 255, this.view[n + 2] = o >>> 8 & 255, this.view[n + 3] = 255 & o), r && (this.offset += 8), this;
          }, n.writeLong = n.writeInt64, n.readInt64 = function (t) {
            var n = void 0 === t;

            if (n && (t = this.offset), !this.noAssert) {
              if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
              if ((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength);
            }

            var r = 0,
                i = 0;
            this.littleEndian ? (r = this.view[t + 2] << 16, r |= this.view[t + 1] << 8, r |= this.view[t], r += this.view[t + 3] << 24 >>> 0, t += 4, i = this.view[t + 2] << 16, i |= this.view[t + 1] << 8, i |= this.view[t], i += this.view[t + 3] << 24 >>> 0) : (i = this.view[t + 1] << 16, i |= this.view[t + 2] << 8, i |= this.view[t + 3], i += this.view[t] << 24 >>> 0, t += 4, r = this.view[t + 1] << 16, r |= this.view[t + 2] << 8, r |= this.view[t + 3], r += this.view[t] << 24 >>> 0);
            var o = new e(r, i, !1);
            return n && (this.offset += 8), o;
          }, n.readLong = n.readInt64, n.writeUint64 = function (t, n) {
            var r = void 0 === n;

            if (r && (n = this.offset), !this.noAssert) {
              if ("number" == typeof t) t = e.fromNumber(t);else if ("string" == typeof t) t = e.fromString(t);else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
              if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
              if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength);
            }

            "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t)), n += 8;
            var i = this.buffer.byteLength;
            n > i && this.resize((i *= 2) > n ? i : n), n -= 8;
            var o = t.low,
                s = t.high;
            return this.littleEndian ? (this.view[n + 3] = o >>> 24 & 255, this.view[n + 2] = o >>> 16 & 255, this.view[n + 1] = o >>> 8 & 255, this.view[n] = 255 & o, n += 4, this.view[n + 3] = s >>> 24 & 255, this.view[n + 2] = s >>> 16 & 255, this.view[n + 1] = s >>> 8 & 255, this.view[n] = 255 & s) : (this.view[n] = s >>> 24 & 255, this.view[n + 1] = s >>> 16 & 255, this.view[n + 2] = s >>> 8 & 255, this.view[n + 3] = 255 & s, n += 4, this.view[n] = o >>> 24 & 255, this.view[n + 1] = o >>> 16 & 255, this.view[n + 2] = o >>> 8 & 255, this.view[n + 3] = 255 & o), r && (this.offset += 8), this;
          }, n.writeUInt64 = n.writeUint64, n.readUint64 = function (t) {
            var n = void 0 === t;

            if (n && (t = this.offset), !this.noAssert) {
              if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
              if ((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength);
            }

            var r = 0,
                i = 0;
            this.littleEndian ? (r = this.view[t + 2] << 16, r |= this.view[t + 1] << 8, r |= this.view[t], r += this.view[t + 3] << 24 >>> 0, t += 4, i = this.view[t + 2] << 16, i |= this.view[t + 1] << 8, i |= this.view[t], i += this.view[t + 3] << 24 >>> 0) : (i = this.view[t + 1] << 16, i |= this.view[t + 2] << 8, i |= this.view[t + 3], i += this.view[t] << 24 >>> 0, t += 4, r = this.view[t + 1] << 16, r |= this.view[t + 2] << 8, r |= this.view[t + 3], r += this.view[t] << 24 >>> 0);
            var o = new e(r, i, !0);
            return n && (this.offset += 8), o;
          }, n.readUInt64 = n.readUint64), n.writeFloat32 = function (e, t) {
            var n = void 0 === t;

            if (n && (t = this.offset), !this.noAssert) {
              if ("number" != typeof e) throw TypeError("Illegal value: " + e + " (not a number)");
              if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
              if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
            }

            t += 4;
            var r = this.buffer.byteLength;
            return t > r && this.resize((r *= 2) > t ? r : t), t -= 4, _(this.view, e, t, this.littleEndian, 23, 4), n && (this.offset += 4), this;
          }, n.writeFloat = n.writeFloat32, n.readFloat32 = function (e) {
            var t = void 0 === e;

            if (t && (e = this.offset), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
              if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength);
            }

            var n = a(this.view, e, this.littleEndian, 23, 4);
            return t && (this.offset += 4), n;
          }, n.readFloat = n.readFloat32, n.writeFloat64 = function (e, t) {
            var n = void 0 === t;

            if (n && (t = this.offset), !this.noAssert) {
              if ("number" != typeof e) throw TypeError("Illegal value: " + e + " (not a number)");
              if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
              if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
            }

            t += 8;
            var r = this.buffer.byteLength;
            return t > r && this.resize((r *= 2) > t ? r : t), t -= 8, _(this.view, e, t, this.littleEndian, 52, 8), n && (this.offset += 8), this;
          }, n.writeDouble = n.writeFloat64, n.readFloat64 = function (e) {
            var t = void 0 === e;

            if (t && (e = this.offset), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
              if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength);
            }

            var n = a(this.view, e, this.littleEndian, 52, 8);
            return t && (this.offset += 8), n;
          }, n.readDouble = n.readFloat64, t.MAX_VARINT32_BYTES = 5, t.calculateVarint32 = function (e) {
            return (e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 1 << 21 ? 3 : e < 1 << 28 ? 4 : 5;
          }, t.zigZagEncode32 = function (e) {
            return ((e |= 0) << 1 ^ e >> 31) >>> 0;
          }, t.zigZagDecode32 = function (e) {
            return e >>> 1 ^ -(1 & e) | 0;
          }, n.writeVarint32 = function (e, n) {
            var r = void 0 === n;

            if (r && (n = this.offset), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
              if (e |= 0, "number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
              if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength);
            }

            var i,
                o = t.calculateVarint32(e);
            n += o;
            var s = this.buffer.byteLength;

            for (n > s && this.resize((s *= 2) > n ? s : n), n -= o, e >>>= 0; e >= 128;) i = 127 & e | 128, this.view[n++] = i, e >>>= 7;

            return this.view[n++] = e, r ? (this.offset = n, this) : o;
          }, n.writeVarint32ZigZag = function (e, n) {
            return this.writeVarint32(t.zigZagEncode32(e), n);
          }, n.readVarint32 = function (e) {
            var t = void 0 === e;

            if (t && (e = this.offset), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
              if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
            }

            var n,
                r = 0,
                i = 0;

            do {
              if (!this.noAssert && e > this.limit) {
                var o = Error("Truncated");
                throw o.truncated = !0, o;
              }

              n = this.view[e++], r < 5 && (i |= (127 & n) << 7 * r), ++r;
            } while (0 != (128 & n));

            return i |= 0, t ? (this.offset = e, i) : {
              value: i,
              length: r
            };
          }, n.readVarint32ZigZag = function (e) {
            var n = this.readVarint32(e);
            return "object" == typeof n ? n.value = t.zigZagDecode32(n.value) : n = t.zigZagDecode32(n), n;
          }, e && (t.MAX_VARINT64_BYTES = 10, t.calculateVarint64 = function (t) {
            "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t));
            var n = t.toInt() >>> 0,
                r = t.shiftRightUnsigned(28).toInt() >>> 0,
                i = t.shiftRightUnsigned(56).toInt() >>> 0;
            return 0 == i ? 0 == r ? n < 16384 ? n < 128 ? 1 : 2 : n < 1 << 21 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 1 << 21 ? 7 : 8 : i < 128 ? 9 : 10;
          }, t.zigZagEncode64 = function (t) {
            return "number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t.toSigned()), t.shiftLeft(1).xor(t.shiftRight(63)).toUnsigned();
          }, t.zigZagDecode64 = function (t) {
            return "number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t.toSigned()), t.shiftRightUnsigned(1).xor(t.and(e.ONE).toSigned().negate()).toSigned();
          }, n.writeVarint64 = function (n, r) {
            var i = void 0 === r;

            if (i && (r = this.offset), !this.noAssert) {
              if ("number" == typeof n) n = e.fromNumber(n);else if ("string" == typeof n) n = e.fromString(n);else if (!(n && n instanceof e)) throw TypeError("Illegal value: " + n + " (not an integer or Long)");
              if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
              if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
            }

            "number" == typeof n ? n = e.fromNumber(n, !1) : "string" == typeof n ? n = e.fromString(n, !1) : !1 !== n.unsigned && (n = n.toSigned());

            var o = t.calculateVarint64(n),
                s = n.toInt() >>> 0,
                a = n.shiftRightUnsigned(28).toInt() >>> 0,
                _ = n.shiftRightUnsigned(56).toInt() >>> 0;

            r += o;
            var E = this.buffer.byteLength;

            switch (r > E && this.resize((E *= 2) > r ? E : r), r -= o, o) {
              case 10:
                this.view[r + 9] = _ >>> 7 & 1;

              case 9:
                this.view[r + 8] = 9 !== o ? 128 | _ : 127 & _;

              case 8:
                this.view[r + 7] = 8 !== o ? a >>> 21 | 128 : a >>> 21 & 127;

              case 7:
                this.view[r + 6] = 7 !== o ? a >>> 14 | 128 : a >>> 14 & 127;

              case 6:
                this.view[r + 5] = 6 !== o ? a >>> 7 | 128 : a >>> 7 & 127;

              case 5:
                this.view[r + 4] = 5 !== o ? 128 | a : 127 & a;

              case 4:
                this.view[r + 3] = 4 !== o ? s >>> 21 | 128 : s >>> 21 & 127;

              case 3:
                this.view[r + 2] = 3 !== o ? s >>> 14 | 128 : s >>> 14 & 127;

              case 2:
                this.view[r + 1] = 2 !== o ? s >>> 7 | 128 : s >>> 7 & 127;

              case 1:
                this.view[r] = 1 !== o ? 128 | s : 127 & s;
            }

            return i ? (this.offset += o, this) : o;
          }, n.writeVarint64ZigZag = function (e, n) {
            return this.writeVarint64(t.zigZagEncode64(e), n);
          }, n.readVarint64 = function (t) {
            var n = void 0 === t;

            if (n && (t = this.offset), !this.noAssert) {
              if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
              if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength);
            }

            var r = t,
                i = 0,
                o = 0,
                s = 0,
                a = 0;
            if (i = 127 & (a = this.view[t++]), 128 & a && (i |= (127 & (a = this.view[t++])) << 7, (128 & a || this.noAssert && void 0 === a) && (i |= (127 & (a = this.view[t++])) << 14, (128 & a || this.noAssert && void 0 === a) && (i |= (127 & (a = this.view[t++])) << 21, (128 & a || this.noAssert && void 0 === a) && (o = 127 & (a = this.view[t++]), (128 & a || this.noAssert && void 0 === a) && (o |= (127 & (a = this.view[t++])) << 7, (128 & a || this.noAssert && void 0 === a) && (o |= (127 & (a = this.view[t++])) << 14, (128 & a || this.noAssert && void 0 === a) && (o |= (127 & (a = this.view[t++])) << 21, (128 & a || this.noAssert && void 0 === a) && (s = 127 & (a = this.view[t++]), (128 & a || this.noAssert && void 0 === a) && (s |= (127 & (a = this.view[t++])) << 7, 128 & a || this.noAssert && void 0 === a)))))))))) throw Error("Buffer overrun");

            var _ = e.fromBits(i | o << 28, o >>> 4 | s << 24, !1);

            return n ? (this.offset = t, _) : {
              value: _,
              length: t - r
            };
          }, n.readVarint64ZigZag = function (n) {
            var r = this.readVarint64(n);
            return r && r.value instanceof e ? r.value = t.zigZagDecode64(r.value) : r = t.zigZagDecode64(r), r;
          }), n.writeCString = function (e, t) {
            var n = void 0 === t;
            n && (t = this.offset);
            var r,
                i = e.length;

            if (!this.noAssert) {
              if ("string" != typeof e) throw TypeError("Illegal str: Not a string");

              for (r = 0; r < i; ++r) if (0 === e.charCodeAt(r)) throw RangeError("Illegal str: Contains NULL-characters");

              if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
              if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
            }

            i = l.calculateUTF16asUTF8(o(e))[1], t += i + 1;
            var s = this.buffer.byteLength;
            return t > s && this.resize((s *= 2) > t ? s : t), t -= i + 1, l.encodeUTF16toUTF8(o(e), function (e) {
              this.view[t++] = e;
            }.bind(this)), this.view[t++] = 0, n ? (this.offset = t, this) : i;
          }, n.readCString = function (e) {
            var t = void 0 === e;

            if (t && (e = this.offset), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
              if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
            }

            var n,
                r = e,
                i = -1;
            return l.decodeUTF8toUTF16(function () {
              if (0 === i) return null;
              if (e >= this.limit) throw RangeError("Illegal range: Truncated data, " + e + " < " + this.limit);
              return 0 === (i = this.view[e++]) ? null : i;
            }.bind(this), n = s(), !0), t ? (this.offset = e, n()) : {
              string: n(),
              length: e - r
            };
          }, n.writeIString = function (e, t) {
            var n = void 0 === t;

            if (n && (t = this.offset), !this.noAssert) {
              if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
              if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
              if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
            }

            var r,
                i = t;
            r = l.calculateUTF16asUTF8(o(e), this.noAssert)[1], t += 4 + r;
            var s = this.buffer.byteLength;
            if (t > s && this.resize((s *= 2) > t ? s : t), t -= 4 + r, this.littleEndian ? (this.view[t + 3] = r >>> 24 & 255, this.view[t + 2] = r >>> 16 & 255, this.view[t + 1] = r >>> 8 & 255, this.view[t] = 255 & r) : (this.view[t] = r >>> 24 & 255, this.view[t + 1] = r >>> 16 & 255, this.view[t + 2] = r >>> 8 & 255, this.view[t + 3] = 255 & r), t += 4, l.encodeUTF16toUTF8(o(e), function (e) {
              this.view[t++] = e;
            }.bind(this)), t !== i + 4 + r) throw RangeError("Illegal range: Truncated data, " + t + " == " + (t + 4 + r));
            return n ? (this.offset = t, this) : t - i;
          }, n.readIString = function (e) {
            var n = void 0 === e;

            if (n && (e = this.offset), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
              if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength);
            }

            var r = e,
                i = this.readUint32(e),
                o = this.readUTF8String(i, t.METRICS_BYTES, e += 4);
            return e += o.length, n ? (this.offset = e, o.string) : {
              string: o.string,
              length: e - r
            };
          }, t.METRICS_CHARS = "c", t.METRICS_BYTES = "b", n.writeUTF8String = function (e, t) {
            var n,
                r = void 0 === t;

            if (r && (t = this.offset), !this.noAssert) {
              if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
              if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
            }

            var i = t;
            n = l.calculateUTF16asUTF8(o(e))[1], t += n;
            var s = this.buffer.byteLength;
            return t > s && this.resize((s *= 2) > t ? s : t), t -= n, l.encodeUTF16toUTF8(o(e), function (e) {
              this.view[t++] = e;
            }.bind(this)), r ? (this.offset = t, this) : t - i;
          }, n.writeString = n.writeUTF8String, t.calculateUTF8Chars = function (e) {
            return l.calculateUTF16asUTF8(o(e))[0];
          }, t.calculateUTF8Bytes = function (e) {
            return l.calculateUTF16asUTF8(o(e))[1];
          }, t.calculateString = t.calculateUTF8Bytes, n.readUTF8String = function (e, n, r) {
            "number" == typeof n && (r = n, n = void 0);
            var i = void 0 === r;

            if (i && (r = this.offset), void 0 === n && (n = t.METRICS_CHARS), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal length: " + e + " (not an integer)");
              if (e |= 0, "number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
              if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
            }

            var o,
                a = 0,
                _ = r;

            if (n === t.METRICS_CHARS) {
              if (o = s(), l.decodeUTF8(function () {
                return a < e && r < this.limit ? this.view[r++] : null;
              }.bind(this), function (e) {
                ++a, l.UTF8toUTF16(e, o);
              }), a !== e) throw RangeError("Illegal range: Truncated data, " + a + " == " + e);
              return i ? (this.offset = r, o()) : {
                string: o(),
                length: r - _
              };
            }

            if (n === t.METRICS_BYTES) {
              if (!this.noAssert) {
                if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                if ((r >>>= 0) < 0 || r + e > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+" + e + ") <= " + this.buffer.byteLength);
              }

              var E = r + e;
              if (l.decodeUTF8toUTF16(function () {
                return r < E ? this.view[r++] : null;
              }.bind(this), o = s(), this.noAssert), r !== E) throw RangeError("Illegal range: Truncated data, " + r + " == " + E);
              return i ? (this.offset = r, o()) : {
                string: o(),
                length: r - _
              };
            }

            throw TypeError("Unsupported metrics: " + n);
          }, n.readString = n.readUTF8String, n.writeVString = function (e, n) {
            var r = void 0 === n;

            if (r && (n = this.offset), !this.noAssert) {
              if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
              if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
              if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength);
            }

            var i,
                s,
                a = n;
            i = l.calculateUTF16asUTF8(o(e), this.noAssert)[1], s = t.calculateVarint32(i), n += s + i;
            var _ = this.buffer.byteLength;
            if (n > _ && this.resize((_ *= 2) > n ? _ : n), n -= s + i, n += this.writeVarint32(i, n), l.encodeUTF16toUTF8(o(e), function (e) {
              this.view[n++] = e;
            }.bind(this)), n !== a + i + s) throw RangeError("Illegal range: Truncated data, " + n + " == " + (n + i + s));
            return r ? (this.offset = n, this) : n - a;
          }, n.readVString = function (e) {
            var n = void 0 === e;

            if (n && (e = this.offset), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
              if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
            }

            var r = e,
                i = this.readVarint32(e),
                o = this.readUTF8String(i.value, t.METRICS_BYTES, e += i.length);
            return e += o.length, n ? (this.offset = e, o.string) : {
              string: o.string,
              length: e - r
            };
          }, n.append = function (e, n, r) {
            "number" != typeof n && "string" == typeof n || (r = n, n = void 0);
            var i = void 0 === r;

            if (i && (r = this.offset), !this.noAssert) {
              if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
              if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
            }

            e instanceof t || (e = t.wrap(e, n));
            var o = e.limit - e.offset;
            if (o <= 0) return this;
            r += o;
            var s = this.buffer.byteLength;
            return r > s && this.resize((s *= 2) > r ? s : r), r -= o, this.view.set(e.view.subarray(e.offset, e.limit), r), e.offset += o, i && (this.offset += o), this;
          }, n.appendTo = function (e, t) {
            return e.append(this, t), this;
          }, n.assert = function (e) {
            return this.noAssert = !e, this;
          }, n.capacity = function () {
            return this.buffer.byteLength;
          }, n.clear = function () {
            return this.offset = 0, this.limit = this.buffer.byteLength, this.markedOffset = -1, this;
          }, n.clone = function (e) {
            var n = new t(0, this.littleEndian, this.noAssert);
            return e ? (n.buffer = new ArrayBuffer(this.buffer.byteLength), n.view = new Uint8Array(n.buffer)) : (n.buffer = this.buffer, n.view = this.view), n.offset = this.offset, n.markedOffset = this.markedOffset, n.limit = this.limit, n;
          }, n.compact = function (e, t) {
            if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
              if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
              if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
            }

            if (0 === e && t === this.buffer.byteLength) return this;
            var n = t - e;
            if (0 === n) return this.buffer = r, this.view = null, this.markedOffset >= 0 && (this.markedOffset -= e), this.offset = 0, this.limit = 0, this;
            var i = new ArrayBuffer(n),
                o = new Uint8Array(i);
            return o.set(this.view.subarray(e, t)), this.buffer = i, this.view = o, this.markedOffset >= 0 && (this.markedOffset -= e), this.offset = 0, this.limit = n, this;
          }, n.copy = function (e, n) {
            if (void 0 === e && (e = this.offset), void 0 === n && (n = this.limit), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
              if (e >>>= 0, "number" != typeof n || n % 1 != 0) throw TypeError("Illegal end: Not an integer");
              if (n >>>= 0, e < 0 || e > n || n > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + n + " <= " + this.buffer.byteLength);
            }

            if (e === n) return new t(0, this.littleEndian, this.noAssert);
            var r = n - e,
                i = new t(r, this.littleEndian, this.noAssert);
            return i.offset = 0, i.limit = r, i.markedOffset >= 0 && (i.markedOffset -= e), this.copyTo(i, 0, e, n), i;
          }, n.copyTo = function (e, n, r, i) {
            var o, s;
            if (!this.noAssert && !t.isByteBuffer(e)) throw TypeError("Illegal target: Not a ByteBuffer");
            if (n = (s = void 0 === n) ? e.offset : 0 | n, r = (o = void 0 === r) ? this.offset : 0 | r, i = void 0 === i ? this.limit : 0 | i, n < 0 || n > e.buffer.byteLength) throw RangeError("Illegal target range: 0 <= " + n + " <= " + e.buffer.byteLength);
            if (r < 0 || i > this.buffer.byteLength) throw RangeError("Illegal source range: 0 <= " + r + " <= " + this.buffer.byteLength);
            var a = i - r;
            return 0 === a ? e : (e.ensureCapacity(n + a), e.view.set(this.view.subarray(r, i), n), o && (this.offset += a), s && (e.offset += a), this);
          }, n.ensureCapacity = function (e) {
            var t = this.buffer.byteLength;
            return t < e ? this.resize((t *= 2) > e ? t : e) : this;
          }, n.fill = function (e, t, n) {
            var r = void 0 === t;

            if (r && (t = this.offset), "string" == typeof e && e.length > 0 && (e = e.charCodeAt(0)), void 0 === t && (t = this.offset), void 0 === n && (n = this.limit), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
              if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
              if (t >>>= 0, "number" != typeof n || n % 1 != 0) throw TypeError("Illegal end: Not an integer");
              if (n >>>= 0, t < 0 || t > n || n > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + n + " <= " + this.buffer.byteLength);
            }

            if (t >= n) return this;

            for (; t < n;) this.view[t++] = e;

            return r && (this.offset = t), this;
          }, n.flip = function () {
            return this.limit = this.offset, this.offset = 0, this;
          }, n.mark = function (e) {
            if (e = void 0 === e ? this.offset : e, !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
              if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
            }

            return this.markedOffset = e, this;
          }, n.order = function (e) {
            if (!this.noAssert && "boolean" != typeof e) throw TypeError("Illegal littleEndian: Not a boolean");
            return this.littleEndian = !!e, this;
          }, n.LE = function (e) {
            return this.littleEndian = void 0 === e || !!e, this;
          }, n.BE = function (e) {
            return this.littleEndian = void 0 !== e && !e, this;
          }, n.prepend = function (e, n, r) {
            "number" != typeof n && "string" == typeof n || (r = n, n = void 0);
            var i = void 0 === r;

            if (i && (r = this.offset), !this.noAssert) {
              if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
              if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
            }

            e instanceof t || (e = t.wrap(e, n));
            var o = e.limit - e.offset;
            if (o <= 0) return this;
            var s = o - r;

            if (s > 0) {
              var a = new ArrayBuffer(this.buffer.byteLength + s),
                  _ = new Uint8Array(a);

              _.set(this.view.subarray(r, this.buffer.byteLength), o), this.buffer = a, this.view = _, this.offset += s, this.markedOffset >= 0 && (this.markedOffset += s), this.limit += s, r += s;
            } else new Uint8Array(this.buffer);

            return this.view.set(e.view.subarray(e.offset, e.limit), r - o), e.offset = e.limit, i && (this.offset -= o), this;
          }, n.prependTo = function (e, t) {
            return e.prepend(this, t), this;
          }, n.printDebug = function (e) {
            "function" != typeof e && (e = console.log.bind(console)), e(this.toString() + "\n-------------------------------------------------------------------\n" + this.toDebug(!0));
          }, n.remaining = function () {
            return this.limit - this.offset;
          }, n.reset = function () {
            return this.markedOffset >= 0 ? (this.offset = this.markedOffset, this.markedOffset = -1) : this.offset = 0, this;
          }, n.resize = function (e) {
            if (!this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal capacity: " + e + " (not an integer)");
              if ((e |= 0) < 0) throw RangeError("Illegal capacity: 0 <= " + e);
            }

            if (this.buffer.byteLength < e) {
              var t = new ArrayBuffer(e),
                  n = new Uint8Array(t);
              n.set(this.view), this.buffer = t, this.view = n;
            }

            return this;
          }, n.reverse = function (e, t) {
            if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
              if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
              if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
            }

            return e === t || Array.prototype.reverse.call(this.view.subarray(e, t)), this;
          }, n.skip = function (e) {
            if (!this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal length: " + e + " (not an integer)");
              e |= 0;
            }

            var t = this.offset + e;
            if (!this.noAssert && (t < 0 || t > this.buffer.byteLength)) throw RangeError("Illegal length: 0 <= " + this.offset + " + " + e + " <= " + this.buffer.byteLength);
            return this.offset = t, this;
          }, n.slice = function (e, t) {
            if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
              if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
              if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
            }

            var n = this.clone();
            return n.offset = e, n.limit = t, n;
          }, n.toBuffer = function (e) {
            var t = this.offset,
                n = this.limit;

            if (!this.noAssert) {
              if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: Not an integer");
              if (t >>>= 0, "number" != typeof n || n % 1 != 0) throw TypeError("Illegal limit: Not an integer");
              if (n >>>= 0, t < 0 || t > n || n > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + n + " <= " + this.buffer.byteLength);
            }

            if (!e && 0 === t && n === this.buffer.byteLength) return this.buffer;
            if (t === n) return r;
            var i = new ArrayBuffer(n - t);
            return new Uint8Array(i).set(new Uint8Array(this.buffer).subarray(t, n), 0), i;
          }, n.toArrayBuffer = n.toBuffer, n.toString = function (e, t, n) {
            if (void 0 === e) return "ByteBufferAB(offset=" + this.offset + ",markedOffset=" + this.markedOffset + ",limit=" + this.limit + ",capacity=" + this.capacity() + ")";

            switch ("number" == typeof e && (n = t = e = "utf8"), e) {
              case "utf8":
                return this.toUTF8(t, n);

              case "base64":
                return this.toBase64(t, n);

              case "hex":
                return this.toHex(t, n);

              case "binary":
                return this.toBinary(t, n);

              case "debug":
                return this.toDebug();

              case "columns":
                return this.toColumns();

              default:
                throw Error("Unsupported encoding: " + e);
            }
          };

          var E = function () {
            for (var e = {}, t = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47], n = [], r = 0, i = t.length; r < i; ++r) n[t[r]] = r;

            return e.encode = function (e, n) {
              for (var r, i; null !== (r = e());) n(t[r >> 2 & 63]), i = (3 & r) << 4, null !== (r = e()) ? (n(t[63 & ((i |= r >> 4 & 15) | r >> 4 & 15)]), i = (15 & r) << 2, null !== (r = e()) ? (n(t[63 & (i | r >> 6 & 3)]), n(t[63 & r])) : (n(t[63 & i]), n(61))) : (n(t[63 & i]), n(61), n(61));
            }, e.decode = function (e, t) {
              var r, i, o;

              function s(e) {
                throw Error("Illegal character code: " + e);
              }

              for (; null !== (r = e());) if (void 0 === (i = n[r]) && s(r), null !== (r = e()) && (void 0 === (o = n[r]) && s(r), t(i << 2 >>> 0 | (48 & o) >> 4), null !== (r = e()))) {
                if (void 0 === (i = n[r])) {
                  if (61 === r) break;
                  s(r);
                }

                if (t((15 & o) << 4 >>> 0 | (60 & i) >> 2), null !== (r = e())) {
                  if (void 0 === (o = n[r])) {
                    if (61 === r) break;
                    s(r);
                  }

                  t((3 & i) << 6 >>> 0 | o);
                }
              }
            }, e.test = function (e) {
              return /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e);
            }, e;
          }();

          n.toBase64 = function (e, t) {
            if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), t |= 0, (e |= 0) < 0 || t > this.capacity || e > t) throw RangeError("begin, end");
            var n;
            return E.encode(function () {
              return e < t ? this.view[e++] : null;
            }.bind(this), n = s()), n();
          }, t.fromBase64 = function (e, n) {
            if ("string" != typeof e) throw TypeError("str");
            var r = new t(e.length / 4 * 3, n),
                i = 0;
            return E.decode(o(e), function (e) {
              r.view[i++] = e;
            }), r.limit = i, r;
          }, t.btoa = function (e) {
            return t.fromBinary(e).toBase64();
          }, t.atob = function (e) {
            return t.fromBase64(e).toBinary();
          }, n.toBinary = function (e, t) {
            if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), t |= 0, (e |= 0) < 0 || t > this.capacity() || e > t) throw RangeError("begin, end");
            if (e === t) return "";

            for (var n = [], r = []; e < t;) n.push(this.view[e++]), n.length >= 1024 && (r.push(String.fromCharCode.apply(String, n)), n = []);

            return r.join("") + String.fromCharCode.apply(String, n);
          }, t.fromBinary = function (e, n) {
            if ("string" != typeof e) throw TypeError("str");

            for (var r, i = 0, o = e.length, s = new t(o, n); i < o;) {
              if ((r = e.charCodeAt(i)) > 255) throw RangeError("illegal char code: " + r);
              s.view[i++] = r;
            }

            return s.limit = o, s;
          }, n.toDebug = function (e) {
            for (var t, n = -1, r = this.buffer.byteLength, i = "", o = "", s = ""; n < r;) {
              if (-1 !== n && (i += (t = this.view[n]) < 16 ? "0" + t.toString(16).toUpperCase() : t.toString(16).toUpperCase(), e && (o += t > 32 && t < 127 ? String.fromCharCode(t) : ".")), ++n, e && n > 0 && n % 16 == 0 && n !== r) {
                for (; i.length < 51;) i += " ";

                s += i + o + "\n", i = o = "";
              }

              n === this.offset && n === this.limit ? i += n === this.markedOffset ? "!" : "|" : n === this.offset ? i += n === this.markedOffset ? "[" : "<" : n === this.limit ? i += n === this.markedOffset ? "]" : ">" : i += n === this.markedOffset ? "'" : e || 0 !== n && n !== r ? " " : "";
            }

            if (e && " " !== i) {
              for (; i.length < 51;) i += " ";

              s += i + o + "\n";
            }

            return e ? s : i;
          }, t.fromDebug = function (e, n, r) {
            for (var i, o, s = e.length, a = new t((s + 1) / 3 | 0, n, r), _ = 0, E = 0, l = !1, d = !1, u = !1, c = !1, h = !1; _ < s;) {
              switch (i = e.charAt(_++)) {
                case "!":
                  if (!r) {
                    if (d || u || c) {
                      h = !0;
                      break;
                    }

                    d = u = c = !0;
                  }

                  a.offset = a.markedOffset = a.limit = E, l = !1;
                  break;

                case "|":
                  if (!r) {
                    if (d || c) {
                      h = !0;
                      break;
                    }

                    d = c = !0;
                  }

                  a.offset = a.limit = E, l = !1;
                  break;

                case "[":
                  if (!r) {
                    if (d || u) {
                      h = !0;
                      break;
                    }

                    d = u = !0;
                  }

                  a.offset = a.markedOffset = E, l = !1;
                  break;

                case "<":
                  if (!r) {
                    if (d) {
                      h = !0;
                      break;
                    }

                    d = !0;
                  }

                  a.offset = E, l = !1;
                  break;

                case "]":
                  if (!r) {
                    if (c || u) {
                      h = !0;
                      break;
                    }

                    c = u = !0;
                  }

                  a.limit = a.markedOffset = E, l = !1;
                  break;

                case ">":
                  if (!r) {
                    if (c) {
                      h = !0;
                      break;
                    }

                    c = !0;
                  }

                  a.limit = E, l = !1;
                  break;

                case "'":
                  if (!r) {
                    if (u) {
                      h = !0;
                      break;
                    }

                    u = !0;
                  }

                  a.markedOffset = E, l = !1;
                  break;

                case " ":
                  l = !1;
                  break;

                default:
                  if (!r && l) {
                    h = !0;
                    break;
                  }

                  if (o = parseInt(i + e.charAt(_++), 16), !r && (isNaN(o) || o < 0 || o > 255)) throw TypeError("Illegal str: Not a debug encoded string");
                  a.view[E++] = o, l = !0;
              }

              if (h) throw TypeError("Illegal str: Invalid symbol at " + _);
            }

            if (!r) {
              if (!d || !c) throw TypeError("Illegal str: Missing offset or limit");
              if (E < a.buffer.byteLength) throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + E + " < " + s);
            }

            return a;
          }, n.toHex = function (e, t) {
            if (e = void 0 === e ? this.offset : e, t = void 0 === t ? this.limit : t, !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
              if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
              if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
            }

            for (var n, r = new Array(t - e); e < t;) (n = this.view[e++]) < 16 ? r.push("0", n.toString(16)) : r.push(n.toString(16));

            return r.join("");
          }, t.fromHex = function (e, n, r) {
            if (!r) {
              if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
              if (e.length % 2 != 0) throw TypeError("Illegal str: Length not a multiple of 2");
            }

            for (var i, o = e.length, s = new t(o / 2 | 0, n), a = 0, _ = 0; a < o; a += 2) {
              if (i = parseInt(e.substring(a, a + 2), 16), !r && (!isFinite(i) || i < 0 || i > 255)) throw TypeError("Illegal str: Contains non-hex characters");
              s.view[_++] = i;
            }

            return s.limit = _, s;
          };

          var l = function () {
            var e = {
              MAX_CODEPOINT: 1114111,
              encodeUTF8: function (e, t) {
                var n = null;

                for ("number" == typeof e && (n = e, e = function () {
                  return null;
                }); null !== n || null !== (n = e());) n < 128 ? t(127 & n) : n < 2048 ? (t(n >> 6 & 31 | 192), t(63 & n | 128)) : n < 65536 ? (t(n >> 12 & 15 | 224), t(n >> 6 & 63 | 128), t(63 & n | 128)) : (t(n >> 18 & 7 | 240), t(n >> 12 & 63 | 128), t(n >> 6 & 63 | 128), t(63 & n | 128)), n = null;
              },
              decodeUTF8: function (e, t) {
                for (var n, r, i, o, s = function (e) {
                  e = e.slice(0, e.indexOf(null));
                  var t = Error(e.toString());
                  throw t.name = "TruncatedError", t.bytes = e, t;
                }; null !== (n = e());) if (0 == (128 & n)) t(n);else if (192 == (224 & n)) null === (r = e()) && s([n, r]), t((31 & n) << 6 | 63 & r);else if (224 == (240 & n)) (null === (r = e()) || null === (i = e())) && s([n, r, i]), t((15 & n) << 12 | (63 & r) << 6 | 63 & i);else {
                  if (240 != (248 & n)) throw RangeError("Illegal starting byte: " + n);
                  (null === (r = e()) || null === (i = e()) || null === (o = e())) && s([n, r, i, o]), t((7 & n) << 18 | (63 & r) << 12 | (63 & i) << 6 | 63 & o);
                }
              },
              UTF16toUTF8: function (e, t) {
                for (var n, r = null; null !== (n = null !== r ? r : e());) n >= 55296 && n <= 57343 && null !== (r = e()) && r >= 56320 && r <= 57343 ? (t(1024 * (n - 55296) + r - 56320 + 65536), r = null) : t(n);

                null !== r && t(r);
              },
              UTF8toUTF16: function (e, t) {
                var n = null;

                for ("number" == typeof e && (n = e, e = function () {
                  return null;
                }); null !== n || null !== (n = e());) n <= 65535 ? t(n) : (t(55296 + ((n -= 65536) >> 10)), t(n % 1024 + 56320)), n = null;
              },
              encodeUTF16toUTF8: function (t, n) {
                e.UTF16toUTF8(t, function (t) {
                  e.encodeUTF8(t, n);
                });
              },
              decodeUTF8toUTF16: function (t, n) {
                e.decodeUTF8(t, function (t) {
                  e.UTF8toUTF16(t, n);
                });
              },
              calculateCodePoint: function (e) {
                return e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
              },
              calculateUTF8: function (e) {
                for (var t, n = 0; null !== (t = e());) n += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;

                return n;
              },
              calculateUTF16asUTF8: function (t) {
                var n = 0,
                    r = 0;
                return e.UTF16toUTF8(t, function (e) {
                  ++n, r += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
                }), [n, r];
              }
            };
            return e;
          }();

          return n.toUTF8 = function (e, t) {
            if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
              if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
              if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
              if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
            }

            var n;

            try {
              l.decodeUTF8toUTF16(function () {
                return e < t ? this.view[e++] : null;
              }.bind(this), n = s());
            } catch (n) {
              if (e !== t) throw RangeError("Illegal range: Truncated data, " + e + " != " + t);
            }

            return n();
          }, t.fromUTF8 = function (e, n, r) {
            if (!r && "string" != typeof e) throw TypeError("Illegal str: Not a string");
            var i = new t(l.calculateUTF16asUTF8(o(e), !0)[1], n, r),
                s = 0;
            return l.encodeUTF16toUTF8(o(e), function (e) {
              i.view[s++] = e;
            }), i.limit = s, i;
          }, t;
        }) ? r.apply(t, i) : r) || (e.exports = o);
      }, function (e, t, n) {
        var r, i;
        void 0 === (i = "function" == typeof (r = function () {
          "use strict";

          function e(e, t, n) {
            this.low = 0 | e, this.high = 0 | t, this.unsigned = !!n;
          }

          function t(e) {
            return !0 === (e && e.__isLong__);
          }

          e.prototype.__isLong__, Object.defineProperty(e.prototype, "__isLong__", {
            value: !0,
            enumerable: !1,
            configurable: !1
          }), e.isLong = t;
          var n = {},
              r = {};

          function i(e, t) {
            var i, o, a;
            return t ? (a = 0 <= (e >>>= 0) && e < 256) && (o = r[e]) ? o : (i = s(e, (0 | e) < 0 ? -1 : 0, !0), a && (r[e] = i), i) : (a = -128 <= (e |= 0) && e < 128) && (o = n[e]) ? o : (i = s(e, e < 0 ? -1 : 0, !1), a && (n[e] = i), i);
          }

          function o(e, t) {
            if (isNaN(e) || !isFinite(e)) return t ? p : h;

            if (t) {
              if (e < 0) return p;
              if (e >= d) return y;
            } else {
              if (e <= -u) return I;
              if (e + 1 >= u) return S;
            }

            return e < 0 ? o(-e, t).neg() : s(e % l | 0, e / l | 0, t);
          }

          function s(t, n, r) {
            return new e(t, n, r);
          }

          e.fromInt = i, e.fromNumber = o, e.fromBits = s;
          var a = Math.pow;

          function _(e, t, n) {
            if (0 === e.length) throw Error("empty string");
            if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) return h;
            if ("number" == typeof t ? (n = t, t = !1) : t = !!t, (n = n || 10) < 2 || 36 < n) throw RangeError("radix");
            var r;
            if ((r = e.indexOf("-")) > 0) throw Error("interior hyphen");
            if (0 === r) return _(e.substring(1), t, n).neg();

            for (var i = o(a(n, 8)), s = h, E = 0; E < e.length; E += 8) {
              var l = Math.min(8, e.length - E),
                  d = parseInt(e.substring(E, E + l), n);

              if (l < 8) {
                var u = o(a(n, l));
                s = s.mul(u).add(o(d));
              } else s = (s = s.mul(i)).add(o(d));
            }

            return s.unsigned = t, s;
          }

          function E(t) {
            return t instanceof e ? t : "number" == typeof t ? o(t) : "string" == typeof t ? _(t) : s(t.low, t.high, t.unsigned);
          }

          e.fromString = _, e.fromValue = E;
          var l = 4294967296,
              d = l * l,
              u = d / 2,
              c = i(1 << 24),
              h = i(0);
          e.ZERO = h;
          var p = i(0, !0);
          e.UZERO = p;
          var R = i(1);
          e.ONE = R;
          var f = i(1, !0);
          e.UONE = f;
          var m = i(-1);
          e.NEG_ONE = m;
          var S = s(-1, 2147483647, !1);
          e.MAX_VALUE = S;
          var y = s(-1, -1, !0);
          e.MAX_UNSIGNED_VALUE = y;
          var I = s(0, -2147483648, !1);
          e.MIN_VALUE = I;
          var g = e.prototype;
          return g.toInt = function () {
            return this.unsigned ? this.low >>> 0 : this.low;
          }, g.toNumber = function () {
            return this.unsigned ? (this.high >>> 0) * l + (this.low >>> 0) : this.high * l + (this.low >>> 0);
          }, g.toString = function (e) {
            if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
            if (this.isZero()) return "0";

            if (this.isNegative()) {
              if (this.eq(I)) {
                var t = o(e),
                    n = this.div(t),
                    r = n.mul(t).sub(this);
                return n.toString(e) + r.toInt().toString(e);
              }

              return "-" + this.neg().toString(e);
            }

            for (var i = o(a(e, 6), this.unsigned), s = this, _ = "";;) {
              var E = s.div(i),
                  l = (s.sub(E.mul(i)).toInt() >>> 0).toString(e);
              if ((s = E).isZero()) return l + _;

              for (; l.length < 6;) l = "0" + l;

              _ = "" + l + _;
            }
          }, g.getHighBits = function () {
            return this.high;
          }, g.getHighBitsUnsigned = function () {
            return this.high >>> 0;
          }, g.getLowBits = function () {
            return this.low;
          }, g.getLowBitsUnsigned = function () {
            return this.low >>> 0;
          }, g.getNumBitsAbs = function () {
            if (this.isNegative()) return this.eq(I) ? 64 : this.neg().getNumBitsAbs();

            for (var e = 0 != this.high ? this.high : this.low, t = 31; t > 0 && 0 == (e & 1 << t); t--);

            return 0 != this.high ? t + 33 : t + 1;
          }, g.isZero = function () {
            return 0 === this.high && 0 === this.low;
          }, g.isNegative = function () {
            return !this.unsigned && this.high < 0;
          }, g.isPositive = function () {
            return this.unsigned || this.high >= 0;
          }, g.isOdd = function () {
            return 1 == (1 & this.low);
          }, g.isEven = function () {
            return 0 == (1 & this.low);
          }, g.equals = function (e) {
            return t(e) || (e = E(e)), (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && this.high === e.high && this.low === e.low;
          }, g.eq = g.equals, g.notEquals = function (e) {
            return !this.eq(e);
          }, g.neq = g.notEquals, g.lessThan = function (e) {
            return this.comp(e) < 0;
          }, g.lt = g.lessThan, g.lessThanOrEqual = function (e) {
            return this.comp(e) <= 0;
          }, g.lte = g.lessThanOrEqual, g.greaterThan = function (e) {
            return this.comp(e) > 0;
          }, g.gt = g.greaterThan, g.greaterThanOrEqual = function (e) {
            return this.comp(e) >= 0;
          }, g.gte = g.greaterThanOrEqual, g.compare = function (e) {
            if (t(e) || (e = E(e)), this.eq(e)) return 0;
            var n = this.isNegative(),
                r = e.isNegative();
            return n && !r ? -1 : !n && r ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1;
          }, g.comp = g.compare, g.negate = function () {
            return !this.unsigned && this.eq(I) ? I : this.not().add(R);
          }, g.neg = g.negate, g.add = function (e) {
            t(e) || (e = E(e));

            var n = this.high >>> 16,
                r = 65535 & this.high,
                i = this.low >>> 16,
                o = 65535 & this.low,
                a = e.high >>> 16,
                _ = 65535 & e.high,
                l = e.low >>> 16,
                d = 0,
                u = 0,
                c = 0,
                h = 0;

            return c += (h += o + (65535 & e.low)) >>> 16, u += (c += i + l) >>> 16, d += (u += r + _) >>> 16, d += n + a, s((c &= 65535) << 16 | (h &= 65535), (d &= 65535) << 16 | (u &= 65535), this.unsigned);
          }, g.subtract = function (e) {
            return t(e) || (e = E(e)), this.add(e.neg());
          }, g.sub = g.subtract, g.multiply = function (e) {
            if (this.isZero()) return h;
            if (t(e) || (e = E(e)), e.isZero()) return h;
            if (this.eq(I)) return e.isOdd() ? I : h;
            if (e.eq(I)) return this.isOdd() ? I : h;
            if (this.isNegative()) return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
            if (e.isNegative()) return this.mul(e.neg()).neg();
            if (this.lt(c) && e.lt(c)) return o(this.toNumber() * e.toNumber(), this.unsigned);

            var n = this.high >>> 16,
                r = 65535 & this.high,
                i = this.low >>> 16,
                a = 65535 & this.low,
                _ = e.high >>> 16,
                l = 65535 & e.high,
                d = e.low >>> 16,
                u = 65535 & e.low,
                p = 0,
                R = 0,
                f = 0,
                m = 0;

            return f += (m += a * u) >>> 16, R += (f += i * u) >>> 16, f &= 65535, R += (f += a * d) >>> 16, p += (R += r * u) >>> 16, R &= 65535, p += (R += i * d) >>> 16, R &= 65535, p += (R += a * l) >>> 16, p += n * u + r * d + i * l + a * _, s((f &= 65535) << 16 | (m &= 65535), (p &= 65535) << 16 | (R &= 65535), this.unsigned);
          }, g.mul = g.multiply, g.divide = function (e) {
            if (t(e) || (e = E(e)), e.isZero()) throw Error("division by zero");
            if (this.isZero()) return this.unsigned ? p : h;
            var n, r, i;

            if (this.unsigned) {
              if (e.unsigned || (e = e.toUnsigned()), e.gt(this)) return p;
              if (e.gt(this.shru(1))) return f;
              i = p;
            } else {
              if (this.eq(I)) return e.eq(R) || e.eq(m) ? I : e.eq(I) ? R : (n = this.shr(1).div(e).shl(1)).eq(h) ? e.isNegative() ? R : m : (r = this.sub(e.mul(n)), i = n.add(r.div(e)));
              if (e.eq(I)) return this.unsigned ? p : h;
              if (this.isNegative()) return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
              if (e.isNegative()) return this.div(e.neg()).neg();
              i = h;
            }

            for (r = this; r.gte(e);) {
              n = Math.max(1, Math.floor(r.toNumber() / e.toNumber()));

              for (var s = Math.ceil(Math.log(n) / Math.LN2), _ = s <= 48 ? 1 : a(2, s - 48), l = o(n), d = l.mul(e); d.isNegative() || d.gt(r);) d = (l = o(n -= _, this.unsigned)).mul(e);

              l.isZero() && (l = R), i = i.add(l), r = r.sub(d);
            }

            return i;
          }, g.div = g.divide, g.modulo = function (e) {
            return t(e) || (e = E(e)), this.sub(this.div(e).mul(e));
          }, g.mod = g.modulo, g.not = function () {
            return s(~this.low, ~this.high, this.unsigned);
          }, g.and = function (e) {
            return t(e) || (e = E(e)), s(this.low & e.low, this.high & e.high, this.unsigned);
          }, g.or = function (e) {
            return t(e) || (e = E(e)), s(this.low | e.low, this.high | e.high, this.unsigned);
          }, g.xor = function (e) {
            return t(e) || (e = E(e)), s(this.low ^ e.low, this.high ^ e.high, this.unsigned);
          }, g.shiftLeft = function (e) {
            return t(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? s(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : s(0, this.low << e - 32, this.unsigned);
          }, g.shl = g.shiftLeft, g.shiftRight = function (e) {
            return t(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? s(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : s(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned);
          }, g.shr = g.shiftRight, g.shiftRightUnsigned = function (e) {
            if (t(e) && (e = e.toInt()), 0 == (e &= 63)) return this;
            var n = this.high;
            return e < 32 ? s(this.low >>> e | n << 32 - e, n >>> e, this.unsigned) : s(32 === e ? n : n >>> e - 32, 0, this.unsigned);
          }, g.shru = g.shiftRightUnsigned, g.toSigned = function () {
            return this.unsigned ? s(this.low, this.high, !1) : this;
          }, g.toUnsigned = function () {
            return this.unsigned ? this : s(this.low, this.high, !0);
          }, g.toBytes = function (e) {
            return e ? this.toBytesLE() : this.toBytesBE();
          }, g.toBytesLE = function () {
            var e = this.high,
                t = this.low;
            return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255];
          }, g.toBytesBE = function () {
            var e = this.high,
                t = this.low;
            return [e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t];
          }, e;
        }) ? r.apply(t, []) : r) || (e.exports = i);
      }, function (e, t) {}, function (e) {
        e.exports = JSON.parse('{"package":"mgobexs","syntax":"proto3","messages":[{"name":"ClientSendServerReqWrap1","syntax":"proto3","fields":[{"name":"version","type":"string","id":1},{"name":"appName","type":"string","id":2},{"name":"cmd","type":"string","id":3},{"name":"seq","type":"string","id":4},{"name":"clientIp","type":"string","id":5},{"name":"serviceIp","type":"string","id":6},{"name":"business","type":"string","id":7},{"name":"authKey","type":"string","id":8},{"name":"authType","type":"uint32","id":9},{"name":"authIp","type":"string","id":10},{"name":"gameId","type":"string","id":11},{"name":"uid","type":"uint64","id":12},{"name":"playerId","type":"string","id":13},{"name":"body","type":"bytes","id":14}]},{"name":"ServerSendClientBstWrap1","syntax":"proto3","fields":[{"name":"version","type":"string","id":1},{"name":"appName","type":"string","id":2},{"name":"cmd","type":"string","id":3},{"name":"seq","type":"string","id":4},{"name":"clientIp","type":"string","id":5},{"name":"serviceIp","type":"string","id":6},{"name":"business","type":"string","id":7},{"name":"authKey","type":"string","id":8},{"name":"authType","type":"uint32","id":9},{"name":"authIp","type":"string","id":10},{"name":"gameId","type":"string","id":11},{"name":"uid","type":"uint64","id":12},{"name":"playerId","type":"string","id":13},{"name":"body","type":"bytes","id":14}]},{"name":"ClientSendServerRspWrap1","syntax":"proto3","fields":[{"name":"seq","type":"string","id":1},{"name":"errCode","type":"int32","id":2},{"name":"errMsg","type":"string","id":3},{"name":"body","type":"bytes","id":4}]},{"name":"ClientSendServerReqWrap2","syntax":"proto3","fields":[{"name":"cmd","type":"ClientSendServerReqWrap2Cmd","id":1},{"name":"body","type":"bytes","id":2}]},{"name":"ClientSendServerRspWrap2","syntax":"proto3","fields":[{"name":"body","type":"bytes","id":1}]},{"name":"EventInfo","syntax":"proto3","fields":[{"name":"eventType","type":"EventType","id":1},{"name":"seq","type":"string","id":2},{"name":"body","type":"bytes","id":3}]},{"name":"EventNetworkState","syntax":"proto3","fields":[{"name":"gameId","type":"string","id":1},{"name":"playerId","type":"string","id":2},{"name":"networkState","type":"NetworkState","id":3}]},{"name":"HeartBeatReq","syntax":"proto3","fields":[{"name":"conType","type":"ConnectionType","id":1},{"name":"routeId","type":"string","id":2}]},{"name":"HeartBeatRsp","syntax":"proto3","fields":[]},{"name":"ServerSendClientBstWrap2","syntax":"proto3","fields":[{"name":"type","type":"ServerSendClientBstWrap2Type","id":1},{"name":"msg","type":"bytes","id":2}]},{"name":"NOUSEServerSendClientBstRspWrap2","syntax":"proto3","fields":[]},{"name":"CheckLoginReq","syntax":"proto3","fields":[{"name":"token","type":"string","id":1},{"name":"routeId","type":"string","id":2}]},{"name":"CheckLoginRsp","syntax":"proto3","fields":[]},{"name":"PushBodyType","syntax":"proto3","fields":[{"name":"pushMsg","type":"string","id":1}]},{"name":"LoginReq","syntax":"proto3","fields":[{"name":"gameId","type":"string","id":1},{"name":"openId","type":"string","id":2},{"name":"platform","type":"uint64","id":3},{"name":"channel","type":"uint64","id":4},{"name":"nonce","type":"uint64","id":5},{"name":"timestamp","type":"uint64","id":6},{"name":"sign","type":"string","id":7},{"name":"deviceId","type":"string","id":8},{"name":"mac","type":"string","id":9},{"name":"imei","type":"string","id":10}]},{"name":"LoginRsp","syntax":"proto3","fields":[{"name":"token","type":"string","id":1},{"name":"playerId","type":"string","id":2},{"name":"expireTime","type":"uint64","id":3},{"name":"sdkConfig","type":"SdkConfig","id":4}]},{"name":"SdkConfig","syntax":"proto3","fields":[{"name":"pingInterval","type":"uint32","id":1},{"name":"reportInterval","type":"uint32","id":2},{"name":"serverTime","type":"uint64","id":3},{"name":"enableUdp","type":"bool","id":4},{"name":"disableReport","type":"bool","id":5},{"name":"disableReqReport","type":"bool","id":6},{"name":"disableFrameReport","type":"bool","id":7},{"name":"minReportSize","type":"uint32","id":8}]},{"name":"LogoutReq","syntax":"proto3","fields":[]},{"name":"LogoutRsp","syntax":"proto3","fields":[]},{"name":"StartFrameSyncReq","syntax":"proto3","fields":[]},{"name":"StartFrameSyncRsp","syntax":"proto3","fields":[]},{"name":"StopFrameSyncReq","syntax":"proto3","fields":[]},{"name":"StopFrameSyncRsp","syntax":"proto3","fields":[]},{"name":"FrameItem","syntax":"proto3","fields":[{"name":"playerId","type":"string","id":1},{"name":"data","type":"string","id":2},{"name":"timestamp","type":"uint64","id":3}]},{"name":"SendFrameReq","syntax":"proto3","fields":[{"name":"roomId","type":"string","id":1},{"name":"item","type":"FrameItem","id":2}]},{"name":"SendFrameRsp","syntax":"proto3","fields":[]},{"name":"FrameExtInfo","syntax":"proto3","fields":[{"name":"seed","type":"uint64","id":1}]},{"name":"Frame","syntax":"proto3","fields":[{"name":"id","type":"uint64","id":1},{"rule":"repeated","name":"items","type":"FrameItem","id":2},{"name":"ext","type":"FrameExtInfo","id":3}]},{"name":"RequestFrameReq","syntax":"proto3","fields":[{"name":"roomId","type":"string","id":1},{"name":"beginFrameId","type":"uint64","id":2},{"name":"endFrameId","type":"uint64","id":3},{"name":"supportPartial","type":"bool","id":4}]},{"name":"RequestFrameRsp","syntax":"proto3","fields":[{"rule":"repeated","name":"frames","type":"Frame","id":1},{"name":"isPartial","type":"bool","id":2}]},{"name":"PlayerInfo","syntax":"proto3","fields":[{"name":"id","type":"string","id":1},{"name":"name","type":"string","id":2},{"name":"teamId","type":"string","id":3},{"name":"customPlayerStatus","type":"uint64","id":4},{"name":"customProfile","type":"string","id":5},{"name":"commonNetworkState","type":"NetworkState","id":6},{"name":"relayNetworkState","type":"NetworkState","id":7},{"name":"isRobot","type":"bool","id":8},{"rule":"repeated","name":"matchAttributes","type":"MatchAttribute","id":9}]},{"name":"TeamInfo","syntax":"proto3","fields":[{"name":"id","type":"string","id":1},{"name":"name","type":"string","id":2},{"name":"minPlayers","type":"uint32","id":3},{"name":"maxPlayers","type":"uint32","id":4}]},{"name":"RoomInfo","syntax":"proto3","fields":[{"name":"id","type":"string","id":1},{"name":"name","type":"string","id":2},{"name":"type","type":"string","id":3},{"name":"createType","type":"CreateRoomType","id":4},{"name":"maxPlayers","type":"uint64","id":5},{"name":"owner","type":"string","id":6},{"name":"isPrivate","type":"bool","id":9},{"name":"customProperties","type":"string","id":10},{"rule":"repeated","name":"playerList","type":"PlayerInfo","id":11},{"rule":"repeated","name":"teamList","type":"TeamInfo","id":13},{"name":"frameSyncState","type":"FrameSyncState","id":14},{"name":"frameRate","type":"uint32","id":15},{"name":"routeId","type":"string","id":16},{"name":"createTime","type":"uint64","id":17},{"name":"startGameTime","type":"uint64","id":18},{"name":"isForbidJoin","type":"bool","id":19}]},{"name":"CreateRoomReq","syntax":"proto3","fields":[{"name":"roomName","type":"string","id":1},{"name":"roomType","type":"string","id":2},{"name":"createType","type":"CreateRoomType","id":3},{"name":"maxPlayers","type":"uint64","id":4},{"name":"isPrivate","type":"bool","id":7},{"name":"customProperties","type":"string","id":8},{"name":"playerInfo","type":"PlayerInfo","id":9},{"name":"region","type":"string","id":11},{"name":"owner","type":"string","id":12},{"rule":"repeated","name":"playerList","type":"PlayerInfo","id":13},{"rule":"repeated","name":"teamList","type":"TeamInfo","id":14}]},{"name":"CreateRoomRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"JoinRoomReq","syntax":"proto3","fields":[{"name":"roomId","type":"string","id":1},{"name":"teamId","type":"string","id":2},{"name":"joinType","type":"JoinRoomType","id":3},{"name":"playerInfo","type":"PlayerInfo","id":4}]},{"name":"JoinRoomRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"LeaveRoomReq","syntax":"proto3","fields":[]},{"name":"LeaveRoomRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"DismissRoomReq","syntax":"proto3","fields":[]},{"name":"DismissRoomRsp","syntax":"proto3","fields":[]},{"name":"ChangeRoomReq","syntax":"proto3","fields":[{"name":"roomName","type":"string","id":1},{"name":"owner","type":"string","id":2},{"name":"isPrivate","type":"bool","id":5},{"name":"customProperties","type":"string","id":6},{"name":"isForbidJoin","type":"bool","id":7},{"rule":"repeated","name":"changeRoomOptionList","type":"ChangeRoomOption","id":8}]},{"name":"ChangeRoomRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":4}]},{"name":"SvrChangeRoomReq","syntax":"proto3","fields":[{"name":"roomName","type":"string","id":1},{"name":"owner","type":"string","id":2},{"name":"isPrivate","type":"bool","id":5},{"name":"customProperties","type":"string","id":6},{"name":"isForbidJoin","type":"bool","id":7},{"name":"roomId","type":"string","id":8},{"rule":"repeated","name":"changeRoomOptionList","type":"ChangeRoomOption","id":9}]},{"name":"SvrChangeRoomRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":4}]},{"name":"RemovePlayerReq","syntax":"proto3","fields":[{"name":"removePlayerId","type":"string","id":3}]},{"name":"RemovePlayerRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"SvrRemovePlayerReq","syntax":"proto3","fields":[{"name":"roomId","type":"string","id":1},{"name":"removePlayerId","type":"string","id":3}]},{"name":"SvrRemovePlayerRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"GetRoomByRoomIdReq","syntax":"proto3","fields":[{"name":"roomId","type":"string","id":1}]},{"name":"GetRoomByRoomIdRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"SendToClientReq","syntax":"proto3","fields":[{"name":"roomId","type":"string","id":1},{"rule":"repeated","name":"recvPlayerList","type":"string","id":2},{"name":"msg","type":"string","id":3}]},{"name":"SendToClientRsp","syntax":"proto3","fields":[]},{"name":"ChangeCustomPlayerStatusReq","syntax":"proto3","fields":[{"name":"customPlayerStatus","type":"uint64","id":1}]},{"name":"ChangeCustomPlayerStatusRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"SvrChangeCustomPlayerStatusReq","syntax":"proto3","fields":[{"name":"customPlayerStatus","type":"uint64","id":1}]},{"name":"SvrChangeCustomPlayerStatusRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"ChangePlayerNetworkStateReq","syntax":"proto3","fields":[{"name":"networkState","type":"NetworkState","id":1}]},{"name":"ChangePlayerNetworkStateRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"GetRoomListReq","syntax":"proto3","fields":[{"name":"gameId","type":"string","id":1},{"name":"pageNo","type":"uint32","id":2},{"name":"pageSize","type":"uint32","id":3},{"name":"roomType","type":"string","id":4},{"name":"isDesc","type":"bool","id":5}]},{"name":"GetRoomListRsp","syntax":"proto3","fields":[{"name":"gameId","type":"string","id":1},{"rule":"repeated","name":"roomList","type":"RoomInfo","id":2},{"name":"total","type":"uint64","id":3}]},{"name":"MatchRoomSimpleReq","syntax":"proto3","fields":[{"name":"roomType","type":"string","id":1},{"name":"maxPlayers","type":"uint64","id":2},{"name":"playerInfo","type":"PlayerInfo","id":3}]},{"name":"MatchRoomSimpleRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"MatchRoomComplexReq","syntax":"proto3","fields":[]},{"name":"MatchRoomComplexRsp","syntax":"proto3","fields":[]},{"name":"MatchPlayersSimpleReq","syntax":"proto3","fields":[]},{"name":"MatchPlayersSimpleRsp","syntax":"proto3","fields":[]},{"name":"MatchAttribute","syntax":"proto3","fields":[{"name":"name","type":"string","id":1},{"name":"value","type":"int32","id":2}]},{"name":"MatchPlayerInfo","syntax":"proto3","fields":[{"name":"id","type":"string","id":1},{"name":"name","type":"string","id":2},{"name":"customPlayerStatus","type":"uint64","id":3},{"name":"customProfile","type":"string","id":4},{"rule":"repeated","name":"matchAttributes","type":"MatchAttribute","id":5},{"name":"matchStatus","type":"MatchStatus","id":6},{"name":"teamId","type":"string","id":7},{"name":"region","type":"string","id":8},{"name":"teamLeader","type":"string","id":9},{"name":"sdkVersion","type":"string","id":10},{"name":"groupId","type":"string","id":11},{"name":"teamType","type":"string","id":12},{"name":"requestId","type":"string","id":13}]},{"name":"MatchGroupPlayerInfo","syntax":"proto3","fields":[{"name":"id","type":"string","id":1},{"name":"name","type":"string","id":2},{"name":"customPlayerStatus","type":"uint64","id":3},{"name":"customProfile","type":"string","id":4},{"rule":"repeated","name":"matchAttributes","type":"MatchAttribute","id":5},{"name":"matchStatus","type":"MatchStatus","id":6},{"name":"teamId","type":"string","id":7},{"name":"region","type":"string","id":8},{"name":"teamLeader","type":"string","id":9},{"name":"sdkVersion","type":"string","id":10},{"name":"groupId","type":"string","id":11},{"name":"teamType","type":"string","id":12},{"name":"requestId","type":"string","id":13}]},{"name":"MatchGroupInfo","syntax":"proto3","fields":[{"name":"id","type":"string","id":1},{"name":"leader","type":"string","id":2},{"rule":"repeated","name":"playerIdList","type":"string","id":3},{"rule":"repeated","name":"playerInfoList","type":"MatchPlayerInfo","id":4},{"rule":"repeated","name":"matchAttributes","type":"MatchAttribute","id":5},{"name":"region","type":"string","id":6},{"name":"sdkVersion","type":"string","id":7},{"name":"teamId","type":"string","id":8},{"name":"teamType","type":"string","id":12},{"name":"requestId","type":"string","id":13},{"name":"startMatchTime","type":"uint64","id":14},{"name":"isRobot","type":"bool","id":15}]},{"name":"MatchTeamInfo","syntax":"proto3","fields":[{"name":"teamId","type":"string","id":1},{"name":"teamName","type":"string","id":2},{"name":"teamLeader","type":"string","id":3},{"rule":"repeated","name":"members","type":"string","id":4},{"rule":"repeated","name":"matchAttributes","type":"MatchAttribute","id":5},{"rule":"repeated","name":"memberSdkVersions","type":"string","id":6},{"rule":"repeated","name":"groupIds","type":"string","id":7},{"rule":"repeated","name":"groupSdkVersions","type":"string","id":8},{"name":"teamType","type":"string","id":12}]},{"name":"ProgressPlayerInfo","syntax":"proto3","fields":[{"name":"playerId","type":"string","id":1},{"name":"teamName","type":"string","id":2},{"rule":"repeated","name":"matchAttributes","type":"MatchAttribute","id":3},{"name":"startMatchTime","type":"uint64","id":4}]},{"name":"MatchmakerTeam","syntax":"proto3","fields":[{"name":"name","type":"string","id":1},{"rule":"repeated","name":"players","type":"ProgressPlayerInfo","id":2}]},{"name":"MatchmakerData","syntax":"proto3","fields":[{"name":"matchId","type":"string","id":1},{"rule":"repeated","name":"teams","type":"MatchmakerTeam","id":2}]},{"name":"MatchPlacementInfo","syntax":"proto3","fields":[{"name":"gameId","type":"string","id":1},{"name":"matchCode","type":"string","id":2},{"name":"matchId","type":"string","id":3},{"name":"type","type":"MatchPlacementType","id":4},{"name":"createRoomReq","type":"CreateRoomReq","id":5},{"name":"matchmakerDataJson","type":"string","id":6},{"name":"status","type":"PlacementStatus","id":8},{"name":"resultBody","type":"bytes","id":9}]},{"name":"MgobePlacementJob","syntax":"proto3","fields":[{"name":"createRoomReq","type":"CreateRoomReq","id":1}]},{"name":"MgobePlacementResult","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"GsePlacementJob","syntax":"proto3","fields":[{"name":"createRoomReq","type":"CreateRoomReq","id":1},{"name":"matchmakerData","type":"string","id":2}]},{"name":"GsePlacementResult","syntax":"proto3","fields":[{"name":"gseGameSession","type":"GseGameSession","id":1}]},{"name":"ThirdpartyPlacementJob","syntax":"proto3","fields":[]},{"name":"ThirdpartyPlacementResult","syntax":"proto3","fields":[]},{"name":"GsePlayerLatency","syntax":"proto3","fields":[{"name":"latencyInMilliseconds","type":"uint32","id":1},{"name":"playerId","type":"string","id":2},{"name":"regionIdentifier","type":"string","id":3}]},{"name":"GseGameProperty","syntax":"proto3","fields":[{"name":"key","type":"string","id":1},{"name":"value","type":"string","id":2}]},{"name":"GsePlacedPlayerSession","syntax":"proto3","fields":[{"name":"playerId","type":"string","id":1},{"name":"playerSessionId","type":"string","id":2}]},{"name":"GseGameSession","syntax":"proto3","fields":[{"name":"placementId","type":"string","id":1},{"name":"gameServerSessionQueueName","type":"string","id":2},{"rule":"repeated","name":"playerLatencies","type":"GsePlayerLatency","id":3},{"name":"status","type":"PlacementStatus","id":4},{"name":"dnsName","type":"string","id":5},{"name":"gameServerSessionId","type":"string","id":6},{"name":"gameServerSessionName","type":"string","id":7},{"name":"gameServerSessionRegion","type":"string","id":8},{"rule":"repeated","name":"gameProperties","type":"GseGameProperty","id":9},{"name":"maximumPlayerSessionCount","type":"uint32","id":10},{"name":"gameServerSessionData","type":"string","id":11},{"name":"ipAddress","type":"string","id":12},{"name":"port","type":"uint32","id":13},{"name":"matchmakerData","type":"string","id":14},{"rule":"repeated","name":"placedPlayerSessions","type":"GsePlacedPlayerSession","id":15},{"name":"startTime","type":"uint64","id":16},{"name":"endTime","type":"uint64","id":17}]},{"name":"PlaceMatchReq","syntax":"proto3","fields":[{"name":"seq","type":"string","id":1},{"name":"gameId","type":"string","id":2},{"name":"matchId","type":"string","id":3},{"name":"type","type":"MatchPlacementType","id":4},{"name":"jobBody","type":"bytes","id":5},{"name":"matchCode","type":"string","id":6}]},{"name":"PlaceMatchRsp","syntax":"proto3","fields":[{"name":"matchPlacementResult","type":"MatchPlacementResult","id":1}]},{"name":"MatchPlacementResult","syntax":"proto3","fields":[{"name":"seq","type":"string","id":1},{"name":"gameId","type":"string","id":2},{"name":"matchId","type":"string","id":3},{"name":"type","type":"MatchPlacementType","id":4},{"name":"status","type":"PlacementStatus","id":5},{"name":"resultBody","type":"bytes","id":6},{"name":"errCode","type":"int32","id":7},{"name":"matchCode","type":"string","id":8}]},{"name":"UpdateMatchPlacementResultReq","syntax":"proto3","fields":[{"name":"matchPlacementResult","type":"MatchPlacementResult","id":1}]},{"name":"UpdateMatchPlacementResultRsp","syntax":"proto3","fields":[]},{"name":"CmqPlacementResult","syntax":"proto3","fields":[{"name":"placementId","type":"string","id":1},{"name":"placementType","type":"MatchPlacementType","id":2},{"name":"resultBody","type":"bytes","id":3}]},{"name":"MatchPlayersReq","syntax":"proto3","fields":[{"name":"matchCode","type":"string","id":2},{"name":"playerInfo","type":"MatchPlayerInfo","id":3}]},{"name":"MatchPlayersRsp","syntax":"proto3","fields":[{"name":"matchCode","type":"string","id":1}]},{"name":"MatchGroupReq","syntax":"proto3","fields":[{"name":"matchCode","type":"string","id":1},{"rule":"repeated","name":"playerInfoList","type":"MatchGroupPlayerInfo","id":2}]},{"name":"MatchGroupRsp","syntax":"proto3","fields":[{"name":"matchCode","type":"string","id":1}]},{"name":"DescribeMatchReq","syntax":"proto3","fields":[{"rule":"repeated","name":"requestIdList","type":"string","id":1}]},{"name":"MatchProgress","syntax":"proto3","fields":[{"name":"requestId","type":"string","id":1},{"rule":"repeated","name":"playerIdList","type":"string","id":2},{"rule":"repeated","name":"playerInfoList","type":"MatchPlayerInfo","id":3},{"name":"status","type":"string","id":4},{"name":"eventType","type":"uint32","id":5},{"rule":"repeated","name":"playerInfoSuccessList","type":"PlayerInfo","id":6},{"rule":"repeated","name":"teamInfoList","type":"TeamInfo","id":7},{"name":"completedTime","type":"uint64","id":8},{"name":"startMatchTime","type":"uint64","id":9},{"name":"gameSessionConnectionInfo","type":"GameSessionConnectionInfo","id":10}]},{"name":"DescribeMatchRsp","syntax":"proto3","fields":[{"rule":"repeated","name":"matchProgressList","type":"MatchProgress","id":1}]},{"name":"CancelPlayerMatchReq","syntax":"proto3","fields":[{"name":"matchType","type":"MatchType","id":3}]},{"name":"CancelPlayerMatchRsp","syntax":"proto3","fields":[]},{"name":"ApiMatchGroupReq","syntax":"proto3","fields":[{"name":"matchCode","type":"string","id":1},{"rule":"repeated","name":"playerInfoList","type":"MatchPlayerInfo","id":2},{"name":"requestId","type":"string","id":3}]},{"name":"ApiMatchGroupRsp","syntax":"proto3","fields":[{"name":"requestId","type":"string","id":1}]},{"name":"ApiDescribeMatchReq","syntax":"proto3","fields":[{"rule":"repeated","name":"requestIdList","type":"string","id":1}]},{"name":"ApiDescribeMatchRsp","syntax":"proto3","fields":[{"rule":"repeated","name":"matchProgressList","type":"MatchProgress","id":1},{"name":"gameId","type":"string","id":2},{"name":"matchCode","type":"string","id":3},{"name":"startMatchTime","type":"uint64","id":4}]},{"name":"GameSessionConnectionInfo","syntax":"proto3","fields":[{"name":"dnsName","type":"string","id":1},{"name":"ipAddress","type":"string","id":2},{"rule":"repeated","name":"matchedPlayerSessions","type":"MatchedPlayerSession","id":3},{"name":"port","type":"int64","id":4}]},{"name":"MatchedPlayerSession","syntax":"proto3","fields":[{"name":"playerId","type":"string","id":1},{"name":"playerSessionId","type":"string","id":2}]},{"name":"StartMatchPlacement","syntax":"proto3","fields":[{"name":"region","type":"string","id":1},{"name":"placementId","type":"string","id":2},{"name":"queueName","type":"string","id":3},{"name":"maximumPlayerSessionCount","type":"int64","id":4},{"rule":"repeated","name":"desiredPlayerSessions","type":"DesiredPlayerSession","id":5},{"rule":"repeated","name":"gameProperties","type":"GameProperty","id":6},{"name":"matchMakerData","type":"string","id":7}]},{"name":"DesiredPlayerSession","syntax":"proto3","fields":[{"name":"playerId","type":"string","id":1},{"name":"playerData","type":"string","id":2}]},{"name":"GameProperty","syntax":"proto3","fields":[{"name":"key","type":"string","id":1},{"name":"value","type":"string","id":2}]},{"name":"ApiCancelPlayerMatchReq","syntax":"proto3","fields":[{"name":"matchType","type":"MatchType","id":1},{"rule":"repeated","name":"requestIdList","type":"string","id":2}]},{"name":"ApiCancelPlayerMatchRsp","syntax":"proto3","fields":[{"rule":"repeated","name":"requestIdList","type":"string","id":1}]},{"name":"CreateRoomBst","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"DestroyRoomBst","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"JoinRoomBst","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1},{"name":"joinPlayerId","type":"string","id":2}]},{"name":"LeaveRoomBst","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1},{"name":"leavePlayerId","type":"string","id":2}]},{"name":"RemovePlayerBst","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1},{"name":"removePlayerId","type":"string","id":2}]},{"name":"DismissRoomBst","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"ChangeRoomBst","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"RecvFromClientBst","syntax":"proto3","fields":[{"name":"roomId","type":"string","id":1},{"name":"sendPlayerId","type":"string","id":2},{"name":"msg","type":"string","id":3}]},{"name":"ChangeCustomPlayerStatusBst","syntax":"proto3","fields":[{"name":"changePlayerId","type":"string","id":1},{"name":"customPlayerStatus","type":"uint64","id":2},{"name":"roomInfo","type":"RoomInfo","id":3}]},{"name":"ChangePlayerNetworkStateBst","syntax":"proto3","fields":[{"name":"changePlayerId","type":"string","id":1},{"name":"networkState","type":"NetworkState","id":2},{"name":"roomInfo","type":"RoomInfo","id":3},{"rule":"repeated","name":"groupIdList","type":"string","id":4}]},{"name":"MatchTimeoutBst","syntax":"proto3","fields":[{"name":"matchType","type":"MatchType","id":1},{"name":"errCode","type":"int32","id":2}]},{"name":"CancelMatchBst","syntax":"proto3","fields":[{"name":"matchCode","type":"string","id":1},{"name":"playerId","type":"string","id":2}]},{"name":"MatchPlayersBst","syntax":"proto3","fields":[{"name":"matchType","type":"MatchType","id":1},{"name":"roomInfo","type":"RoomInfo","id":2}]},{"name":"StartFrameSyncBst","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"StopFrameSyncBst","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"RecvFrameBst","syntax":"proto3","fields":[{"name":"frame","type":"Frame","id":1}]},{"name":"GameSvrCommunication","syntax":"proto3","fields":[{"name":"type","type":"GameSvrForwardType","id":1},{"name":"body","type":"bytes","id":2}]},{"name":"NotifyRelayConnectionReq","syntax":"proto3","fields":[{"name":"roomId","type":"string","id":1},{"name":"ip","type":"string","id":2},{"name":"port","type":"uint32","id":3}]},{"name":"NotifyRoomEventReq","syntax":"proto3","fields":[{"name":"cmd","type":"ServerSendClientBstWrap2Type","id":1},{"name":"msg","type":"bytes","id":2}]},{"name":"SendToGameSvrReq","syntax":"proto3","fields":[{"name":"roomId","type":"string","id":1},{"name":"playerId","type":"string","id":2},{"name":"data","type":"string","id":3}]},{"name":"SendToGameSvrRsp","syntax":"proto3","fields":[]},{"name":"RecvFromGameSvrBst","syntax":"proto3","fields":[{"name":"roomId","type":"string","id":1},{"rule":"repeated","name":"recvPlayerIdList","type":"string","id":2},{"name":"data","type":"string","id":3}]},{"name":"ClientRecvFromGameSvrRsp","syntax":"proto3","fields":[]},{"name":"GroupInfo","syntax":"proto3","fields":[{"name":"id","type":"string","id":1},{"name":"name","type":"string","id":2},{"name":"type","type":"GroupType","id":3},{"name":"maxPlayers","type":"uint64","id":4},{"name":"owner","type":"string","id":5},{"name":"customProperties","type":"string","id":6},{"name":"createTime","type":"uint64","id":7},{"name":"isForbidJoin","type":"bool","id":8},{"name":"isPersistent","type":"bool","id":9},{"rule":"repeated","name":"groupPlayerList","type":"GroupPlayerInfo","id":10}]},{"name":"GroupPlayerInfo","syntax":"proto3","fields":[{"name":"id","type":"string","id":1},{"name":"name","type":"string","id":2},{"name":"customGroupPlayerStatus","type":"uint64","id":3},{"name":"customGroupPlayerProfile","type":"string","id":4},{"name":"commonGroupNetworkState","type":"NetworkState","id":5}]},{"name":"CreateGroupReq","syntax":"proto3","fields":[{"name":"groupName","type":"string","id":1},{"name":"groupType","type":"GroupType","id":2},{"name":"maxPlayers","type":"uint64","id":3},{"name":"customProperties","type":"string","id":4},{"name":"playerInfo","type":"GroupPlayerInfo","id":5},{"name":"isForbidJoin","type":"bool","id":6},{"name":"isPersistent","type":"bool","id":7}]},{"name":"CreateGroupRsp","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1}]},{"name":"JoinGroupReq","syntax":"proto3","fields":[{"name":"groupId","type":"string","id":1},{"name":"playerInfo","type":"GroupPlayerInfo","id":2}]},{"name":"JoinGroupRsp","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1}]},{"name":"LeaveGroupReq","syntax":"proto3","fields":[{"name":"groupId","type":"string","id":1}]},{"name":"LeaveGroupRsp","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1}]},{"name":"DismissGroupReq","syntax":"proto3","fields":[{"name":"groupId","type":"string","id":1}]},{"name":"DismissGroupRsp","syntax":"proto3","fields":[]},{"name":"ChangeGroupReq","syntax":"proto3","fields":[{"name":"groupId","type":"string","id":1},{"name":"groupName","type":"string","id":2},{"name":"owner","type":"string","id":3},{"name":"customProperties","type":"string","id":4},{"name":"isForbidJoin","type":"bool","id":5},{"rule":"repeated","name":"changeGroupOptionList","type":"ChangeGroupOption","id":6}]},{"name":"ChangeGroupRsp","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1}]},{"name":"RemoveGroupPlayerReq","syntax":"proto3","fields":[{"name":"groupId","type":"string","id":1},{"name":"removePlayerId","type":"string","id":2}]},{"name":"RemoveGroupPlayerRsp","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1}]},{"name":"GetGroupByGroupIdReq","syntax":"proto3","fields":[{"name":"groupId","type":"string","id":1}]},{"name":"GetGroupByGroupIdRsp","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1}]},{"name":"GetMyGroupsReq","syntax":"proto3","fields":[]},{"name":"GetMyGroupsRsp","syntax":"proto3","fields":[{"rule":"repeated","name":"groupInfoList","type":"GroupInfo","id":1}]},{"name":"ChangeCustomGroupPlayerStatusReq","syntax":"proto3","fields":[{"name":"groupId","type":"string","id":1},{"name":"customGroupPlayerStatus","type":"uint64","id":2}]},{"name":"ChangeCustomGroupPlayerStatusRsp","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1}]},{"name":"SendToGroupClientReq","syntax":"proto3","fields":[{"name":"groupId","type":"string","id":1},{"rule":"repeated","name":"recvPlayerList","type":"string","id":2},{"name":"msg","type":"string","id":3},{"name":"recvType","type":"GroupRecvType","id":4}]},{"name":"SendToGroupClientRsp","syntax":"proto3","fields":[]},{"name":"GroupPlayers","syntax":"proto3","fields":[{"name":"groupId","type":"string","id":1},{"rule":"repeated","name":"playerIdList","type":"string","id":2}]},{"name":"ChangeGroupPlayerNetworkReq","syntax":"proto3","fields":[{"name":"networkState","type":"NetworkState","id":1},{"name":"playerId","type":"string","id":2},{"name":"gameId","type":"string","id":3},{"name":"seq","type":"string","id":4}]},{"name":"ChangeGroupPlayerNetworkRsp","syntax":"proto3","fields":[{"rule":"repeated","name":"groupPlayers","type":"GroupPlayers","id":1}]},{"name":"JoinGroupBst","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1},{"name":"joinPlayerId","type":"string","id":2}]},{"name":"LeaveGroupBst","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1},{"name":"leavePlayerId","type":"string","id":2}]},{"name":"DismissGroupBst","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1}]},{"name":"ChangeGroupBst","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1}]},{"name":"RemoveGroupPlayerBst","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1},{"name":"removePlayerId","type":"string","id":2}]},{"name":"ChangeGroupPlayerNetworkStateBst","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1},{"name":"changePlayerId","type":"string","id":2},{"name":"networkState","type":"NetworkState","id":3}]},{"name":"ChangeCustomGroupPlayerStatusBst","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1},{"name":"changePlayerId","type":"string","id":2},{"name":"customGroupPlayerStatus","type":"uint64","id":3}]},{"name":"RecvFromGroupClientBst","syntax":"proto3","fields":[{"name":"groupId","type":"string","id":1},{"name":"sendPlayerId","type":"string","id":2},{"name":"msg","type":"string","id":3}]}],"enums":[{"name":"ConnectionType","syntax":"proto3","values":[{"name":"COMMON","id":0},{"name":"RELAY","id":1}]},{"name":"EventType","syntax":"proto3","values":[{"name":"ET_Unknown","id":0},{"name":"ET_NetworkState","id":1}]},{"name":"ServerSendClientBstWrap2Type","syntax":"proto3","values":[{"name":"E_PUSH_TYPE_TEST","id":0},{"name":"E_PUSH_TYPE_RELAY","id":1},{"name":"E_PUSH_TYPE_GAMESVR","id":2},{"name":"E_PUSH_TYPE_JOIN_ROOM","id":100},{"name":"E_PUSH_TYPE_LEAVE_ROOM","id":101},{"name":"E_PUSH_TYPE_DISMISS_ROOM","id":102},{"name":"E_PUSH_TYPE_REMOVE_PLAYER","id":103},{"name":"E_PUSH_TYPE_MODIFY_ROOM_PROPERTY","id":104},{"name":"E_PUSH_TYPE_NETWORK_STATE","id":105},{"name":"E_PUSH_TYPE_ROOM_CHAT","id":106},{"name":"E_PUSH_TYPE_PLAYER_STATE","id":107},{"name":"E_PUSH_TYPE_START_GAME","id":108},{"name":"E_PUSH_TYPE_STOP_GAME","id":109},{"name":"E_PUSH_TYPE_CREATE_ROOM","id":110},{"name":"E_PUSH_TYPE_DESTROY_ROOM","id":111},{"name":"E_PUSH_TYPE_MATCH_SUCCESS","id":200},{"name":"E_PUSH_TYPE_MATCH_TIMEOUT","id":201},{"name":"E_PUSH_TYPE_MATCH_CANCEL","id":202},{"name":"E_PUSH_TYPE_JOIN_GROUP","id":500},{"name":"E_PUSH_TYPE_LEAVE_GROUP","id":501},{"name":"E_PUSH_TYPE_DISMISS_GROUP","id":502},{"name":"E_PUSH_TYPE_MODIFY_GROUP_PROPERTY","id":503},{"name":"E_PUSH_TYPE_REMOVE_GROUP_PLAYER","id":504},{"name":"E_PUSH_TYPE_GROUP_PLAYER_STATE","id":505},{"name":"E_PUSH_TYPE_GROUP_CHAT","id":506}]},{"name":"ClientSendServerReqWrap2Cmd","syntax":"proto3","values":[{"name":"E_CMD_INVALID","id":0},{"name":"E_CMD_HEART_BEAT_REQ","id":100},{"name":"E_CMD_CHECK_LOGIN_REQ","id":101},{"name":"E_CMD_LOGIN_TO_ROOM_REQ","id":102},{"name":"E_CMD_FORWARD_TO_RELAY_REQ","id":103},{"name":"E_CMD_LOGIN_REQ","id":1000},{"name":"E_CMD_LOGOUT_REQ","id":1001},{"name":"E_CMD_AUTH_REQ","id":1002},{"name":"E_CMD_QUERY_BY_PLAYER_ID_REQ","id":1003},{"name":"E_CMD_QUERY_BY_GAME_ID_REQ","id":1004},{"name":"E_CMD_GET_ROOM_DETAIL_REQ","id":2001},{"name":"E_CMD_JOIN_ROOM_REQ","id":2002},{"name":"E_CMD_QUIT_ROOM_REQ","id":2003},{"name":"E_CMD_CREATE_ROOM_REQ","id":2004},{"name":"E_CMD_DESTORY_ROOM_REQ","id":2005},{"name":"E_CMD_REMOVE_MEMBER_REQ","id":2006},{"name":"E_CMD_CHANGE_ROOM_PROPERTIS_REQ","id":2007},{"name":"E_CMD_DISSMISS_ROOM_REQ","id":2008},{"name":"E_CMD_CHANGE_PLAYER_STATE_REQ","id":2009},{"name":"E_CMD_CHANGE_PLAYER_NETWORK_STATE_REQ","id":2010},{"name":"E_CMD_ROOM_CHAT_REQ","id":2011},{"name":"E_CMD_START_FRAME_SYNC_REQ","id":2012},{"name":"E_CMD_STOP_FRAME_SYNC_REQ","id":2013},{"name":"E_CMD_GET_ROOM_LIST_REQ","id":2014},{"name":"E_CMD_SVR_REMOVE_MEMBER_REQ","id":2015},{"name":"E_CMD_SVR_CHANGE_ROOM_PROPERTIS_REQ","id":2016},{"name":"E_CMD_SVR_CHANGE_PLAYER_STATE_REQ","id":2017},{"name":"E_CMD_GET_ROOM_LIST_V2_REQ","id":2018},{"name":"E_CMD_CREATE_ROOM_FOR_THIRD_PARTY_REQ","id":2019},{"name":"E_CMD_MATCH_ROOM_SIMPLE_REQ","id":3001},{"name":"E_CMD_MATCH_USER_SIMPLE_REQ","id":3002},{"name":"E_CMD_MATCH_CANCEL_MATCH_REQ","id":3003},{"name":"E_CMD_MATCH_ROOM_COMPLEX_REQ","id":3004},{"name":"E_CMD_MATCH_PLAYER_COMPLEX_REQ","id":3005},{"name":"E_CMD_MATCH_GROUP_REQ","id":3006},{"name":"E_CMD_RELAY_SEND_FRAME_REQ","id":4000},{"name":"E_CMD_RELAY_REQUEST_FRAME_REQ","id":4001},{"name":"E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ","id":4002},{"name":"E_CMD_RELAY_CLIENT_RECV_FROM_GAMESVR_REQ","id":4003},{"name":"E_CMD_NOTIFY_JOIN_ROOM","id":5000},{"name":"E_CMD_NOTIFY_QUIT_ROOM","id":5001},{"name":"E_CMD_NOTIFY_DESTORY_ROOM","id":5002},{"name":"E_CMD_NOTIFY_NET_STATE","id":5003},{"name":"E_CMD_NOTIFY_KICK_MEMBER","id":5004},{"name":"E_CMD_GET_ADDR_BY_ROUTER_ID_REQ","id":6000},{"name":"E_CMD_GET_GROUP_DETAIL_REQ","id":7001},{"name":"E_CMD_JOIN_GROUP_REQ","id":7002},{"name":"E_CMD_QUIT_GROUP_REQ","id":7003},{"name":"E_CMD_CREATE_GROUP_REQ","id":7004},{"name":"E_CMD_REMOVE_GROUP_MEMBER_REQ","id":7005},{"name":"E_CMD_CHANGE_GROUP_PROPERTIES_REQ","id":7006},{"name":"E_CMD_DISMISS_GROUP_REQ","id":7007},{"name":"E_CMD_CHANGE_GROUP_PLAYER_STATE_REQ","id":7008},{"name":"E_CMD_CHANGE_GROUP_PLAYER_NETWORK_STATE_REQ","id":7009},{"name":"E_CMD_GROUP_CHAT_REQ","id":7010},{"name":"E_CMD_GET_GROUP_LIST_REQ","id":7011}]},{"name":"QAppProtoErrCode","syntax":"proto3","values":[{"name":"EC_OK","id":0},{"name":"EC_REQ_BAD_PKG","id":1},{"name":"EC_CMD_INVALID","id":2},{"name":"EC_PARAMS_INVALID","id":3},{"name":"EC_INNER_ERROR","id":4},{"name":"EC_TIME_OUT","id":5},{"name":"EC_SERVER_BUSY","id":6},{"name":"EC_NO_RIGHT","id":7},{"name":"EC_ACCESS_CMD_INVALID_ERR","id":200},{"name":"EC_ACCESS_CMD_GET_TOKEN_ERR","id":201},{"name":"EC_ACCESS_CMD_TOKEN_PRE_EXPIRE","id":202},{"name":"EC_ACCESS_CMD_INVALID_TOKEN","id":203},{"name":"EC_ACCESS_PUSH_SERIALIZE_ERR","id":204},{"name":"EC_ACCESS_LOGIN_BODY_PARSE_ERR","id":205},{"name":"EC_ACCESS_CONN_ERR","id":206},{"name":"EC_ACCESS_GET_RS_IP_ERR","id":207},{"name":"EC_ACCESS_ADD_COMM_CONN_ERR","id":208},{"name":"EC_ACCESS_ADD_HEART_CONN_ERR","id":209},{"name":"EC_ACCESS_ADD_RELAY_CONN_ERR","id":210},{"name":"EC_ACCESS_HEART_BODY_PARSE_ERR","id":211},{"name":"EC_ACCESS_GET_COMM_CONNECT_ERR","id":212},{"name":"EC_ACCESS_GET_RELAY_CONNECT_ERR","id":213},{"name":"EC_ACCESS_ACCESS_INFO_EMPTY","id":214},{"name":"EC_ACCESS_PLAYER_DUPLICATE_LOGIN","id":215},{"name":"EC_ACCESS_NOE_RELAY_OR_STATE_SVR","id":216},{"name":"EC_PLAYER_GAME_NOT_EXIST","id":10000},{"name":"EC_PLAYER_SECRET_KEY_FAIL","id":10001},{"name":"EC_PLAYER_SIGN_ERR","id":10002},{"name":"EC_PLAYER_DUPLICATE_REQ","id":10003},{"name":"EC_PLAYER_TIMESTAMP_INVALID","id":10004},{"name":"EC_PLAYER_QUERY_PLAYER_FAIL","id":10005},{"name":"EC_PLAYER_ADD_PLAYER_FAIL","id":10006},{"name":"EC_PLAYER_QUERY_GAME_FAIL","id":10007},{"name":"EC_PLAYER_RECORD_NUM_ERR","id":10008},{"name":"EC_PLAYER_GET_TOKEN_FAIL","id":10009},{"name":"EC_PLAYER_TOKEN_NOT_EXIST","id":10010},{"name":"EC_PLAYER_TOKEN_INVALID","id":10011},{"name":"EC_PLAYER_CLEAR_TOKEN_FAIL","id":10012},{"name":"EC_PLAYER_LOCK_FAIL","id":10013},{"name":"EC_PLAYER_UNLOCK_FAIL","id":10014},{"name":"EC_PLAYER_SAVE_TOKEN_FAIL","id":10015},{"name":"EC_PLAYER_GAME_OUT_OF_SERVICE","id":10016},{"name":"EC_ROOM_CREATE_NO_PERMISSION","id":20000},{"name":"EC_ROOM_DESTORY_NO_PERMISSION","id":20001},{"name":"EC_ROOM_JOIN_NO_PERMISSION","id":20002},{"name":"EC_ROOM_REMOVE_PLAYER_NO_PERMISSION","id":20003},{"name":"EC_ROOM_MODIFY_PROPERTIES_NO_PEMISSION","id":20004},{"name":"EC_ROOM_DISSMISS_NO_PERMISSION","id":20005},{"name":"EC_ROOM_REMOVE_SELF_NO_PERMISSION","id":20006},{"name":"EC_ROOM_CHECK_LOGIN_SESSION_ERR","id":20007},{"name":"EC_ROOM_REMOVE_PLAYER_NOT_IN_ROOM","id":20008},{"name":"EC_ROOM_PLAYER_ALREADY_IN_ROOM","id":20010},{"name":"EC_ROOM_PLAYER_NOT_IN_ROOM","id":20011},{"name":"EC_ROOM_PLAYERS_EXCEED_LIMIT","id":20012},{"name":"EC_ROOM_JOIN_NOT_ALLOW","id":20013},{"name":"EC_ROOM_MAX_PLAYERS_INVALID","id":20014},{"name":"EC_ROOM_CREATE_FAIL","id":20015},{"name":"EC_ROOM_PLAYER_OFFLINE","id":20016},{"name":"EC_ROOM_PARAM_PAGE_INVALID","id":20017},{"name":"EC_ROOM_GET_PLAYER_INFO_ERR","id":20050},{"name":"EC_ROOM_GET_ROOM_INFO_ERR","id":20051},{"name":"EC_ROOM_MODIFY_OWNER_ERR","id":20052},{"name":"EC_ROOM_MAX_ROOM_NUMBER_EXCEED_LIMIT","id":20053},{"name":"EC_ROOM_REMOVE_REDIS_PLAYER_ROOM_MATCH_ERR","id":-20052},{"name":"EC_ROOM_REMOVE_REDIS_ROOM_INFO_ERR","id":-20053},{"name":"EC_ROOM_REDIS_UPDATE_ERR","id":-20054},{"name":"EC_ROOM_REDIS_GET_LOCK_ERR","id":-20055},{"name":"EC_ROOM_REDIS_CHECK_LOCK_ERR","id":-20056},{"name":"EC_ROOM_REDIS_DEL_LOCK_ERR","id":-20057},{"name":"EC_ROOM_QUERY_PLAYER_ERR","id":20060},{"name":"EC_ROOM_QUERY_GAME_ERR","id":20061},{"name":"EC_ROOM_PLAYER_INFO_NOT_EXIST","id":20062},{"name":"EC_ROOM_GAME_INFO_NOT_EXIST","id":20063},{"name":"EC_ROOM_HISTORY_INFO_INSERT_ERR","id":-20064},{"name":"EC_ROOM_REGION_INFO_NOT_EXIST","id":20065},{"name":"EC_ROOM_QUERY_REGION_ERR","id":20066},{"name":"EC_ROOM_MODIFY_PLAYER_BUSY","id":20070},{"name":"EC_ROOM_INFO_UNEXIST","id":20080},{"name":"EC_ROOM_ALLOCATE_RELAYSVR_IP_PORT_ERR","id":20090},{"name":"EC_ROOM_INVALID_PARAMS_TEAM_ID","id":20100},{"name":"EC_ROOM_TEAM_MEMBER_LIMIT_EXCEED","id":20101},{"name":"EC_ROOM_ALLOCATE_SERVICE_FAIL","id":-20200},{"name":"EC_MATCH_NO_ROOM","id":30000},{"name":"EC_MATCH_TIMEOUT","id":30001},{"name":"EC_MATCH_LOGIC_ERR","id":30002},{"name":"EC_MATCH_ERR","id":30010},{"name":"EC_MATCH_PLAYER_IS_IN_MATCH","id":30011},{"name":"EC_MATCH_PLAYER_NOT_IN_MATCH","id":30012},{"name":"EC_MATCH_GET_MATCH_INFO_ERR","id":30013},{"name":"EC_MATCH_UPDATE_MATCH_INFO_ERR","id":30014},{"name":"EC_MATCH_CANCEL_FAILED","id":30015},{"name":"EC_MATCH_GET_PLAYER_LIST_INFO_ERR","id":30016},{"name":"EC_MATCH_CREATE_ROOM_ERR","id":30041},{"name":"EC_MATCH_JOIN_ROOM_ERR","id":30042},{"name":"EC_MATCH_INVALID_PARAMS","id":30043},{"name":"EC_MATCH_GROUP_NUM_EXCEED_LIMIT","id":30044},{"name":"EC_MATCH_PLAYER_ID_IS_REPEATED","id":30045},{"name":"EC_MATCH_CREATE_ROOM_PLAYER_ALREADY_IN_ROOM","id":30050},{"name":"EC_MATCH_QUERY_PLAYER_ERR","id":30100},{"name":"EC_MATCH_PLAYER_INFO_NOT_EXIST","id":30101},{"name":"EC_MATCH_QUERY_GAME_ERR","id":30102},{"name":"EC_MATCH_GAME_INFO_NOT_EXIST","id":30103},{"name":"EC_MATCH_QUERY_REGION_ERR","id":30104},{"name":"EC_MATCH_REGION_INFO_NOT_EXIST","id":30105},{"name":"EC_MATCH_TEAM_FAIL","id":30106},{"name":"EC_MATCH_PLAY_RULE_NOT_RUNNING","id":30107},{"name":"EC_MATCH_PLAY_ATTR_NOT_FOUND","id":30108},{"name":"EC_MATCH_PLAY_RULE_NOT_FOUND","id":30109},{"name":"EC_MATCH_PLAY_RULE_ATTR_SEGMENT_NOT_FOUND","id":30110},{"name":"EC_MATCH_PLAY_RULE_FUNC_ERR","id":30111},{"name":"EC_MATCH_GET_PLAYER_ATTR_FAIL","id":30112},{"name":"EC_MATCH_GET_TEAM_ATTR_FAIL","id":30113},{"name":"EC_MATCH_NONE_TEAM_TYPE_FIT","id":30114},{"name":"EC_MATCH_TEAM_TYPE_INVALID","id":30115},{"name":"EC_MATCH_PLAYER_ATTR_NOT_FOUND","id":30116},{"name":"EC_MATCH_REQUEST_ID_NOT_EXIST","id":30117},{"name":"EC_MATCH_REQUEST_ID_IS_EXIST","id":30118},{"name":"EC_MATCH_TEAM_MATCH_FAIL","id":30119},{"name":"EC_MATCH_ROBOT_GROUP_NOT_RIGHT","id":30120},{"name":"EC_MATCH_ROBOT_TEAM_NOT_RIGHT","id":30121},{"name":"EC_MATCH_INNER_LOGIC_ERR","id":-30150},{"name":"EC_MATCH_INNER_PARAMS_ERR","id":-30160},{"name":"EC_MATCH_ROOM_INNER_ADD_NODE_ERR","id":-30170},{"name":"EC_MATCH_ROOM_INNER_DEL_NODE_ERR","id":-30171},{"name":"EC_MATCH_RESULT_TYPE_NOT_GSE","id":-30172},{"name":"EC_MATCH_REQUEST_CANCELED","id":30173},{"name":"EC_RELAY_ALREADY_EXISTS","id":40000},{"name":"EC_RELAY_NOT_EXISTS","id":40001},{"name":"EC_RELAY_DATA_EXCEED_LIMITED","id":40002},{"name":"EC_RELAY_MEMBER_ALREADY_EXISTS","id":40003},{"name":"EC_RELAY_MEMBER_NOT_EXISTS","id":40004},{"name":"EC_RELAY_STATE_INVALID","id":40005},{"name":"EC_RELAY_INVALID_FRAME_RATE","id":40006},{"name":"EC_RELAY_SET_FRAME_RATE_FORBIDDEN","id":40007},{"name":"EC_RELAY_NO_MEMBERS","id":40008},{"name":"EC_RELAY_GAMESVR_SERVICE_NOT_OPEN","id":40009},{"name":"EC_RELAY_REQ_POD_FAIL","id":40010},{"name":"EC_RELAY_NO_AVAILABLE_POD","id":40011},{"name":"EC_RELAY_GET_FRAME_CACHE_FAIL","id":40012},{"name":"EC_RELAY_HKV_CACHE_ERROR","id":40015},{"name":"EC_RELAY_REDIS_CACHE_ERROR","id":40016},{"name":"EC_RELAY_NOTIFY_RELAYWORKER_FAIL","id":40018},{"name":"EC_RELAY_RESET_RELAY_ROOM_FAIL","id":40019},{"name":"EC_RELAY_CLEAN_RELAY_ROOM_FAIL","id":40020},{"name":"EC_RELAY_NO_PERMISSION","id":40100},{"name":"EC_RELAY_NOTIFY_GAMESVR_FAIL","id":40200},{"name":"EC_RELAY_FORWARD_TO_GAMESVR_FAIL","id":40201},{"name":"EC_RELAY_FORWARD_TO_CLIENT_FAIL","id":40202},{"name":"EC_GROUP_OPERATION_FAILED","id":70000},{"name":"EC_INVALID_PARAMS_GROUP_NAME","id":70001},{"name":"EC_INVALID_PARAMS_GROUP_TYPE","id":70002},{"name":"EC_INVALID_PARAMS_GROUP_CUSTOM_PROPERTIES","id":70003},{"name":"EC_INVALID_PARAMS_GROUP_PLAYER_NAME","id":70004},{"name":"EC_INVALID_PARAMS_GROUP_PLAYER_CUSTOM_STATUS","id":70005},{"name":"EC_INVALID_PARAMS_GROUP_PLAYER_CUSTOM_PROPERTIES","id":70006},{"name":"EC_GROUP_MODIFY_OWNER_NO_PERMISSION","id":70007},{"name":"EC_INVALID_PARAMS_GROUP_ID","id":70008},{"name":"EC_INVALID_CHANGE_OPTION","id":70009},{"name":"EC_INVALID_PARAMS_GROUP_OWNER","id":70010},{"name":"EC_PLAYER_IS_EXIST_GROUP","id":70011},{"name":"EC_PLAYER_IS_NOT_EXIST_GROUP","id":70012},{"name":"EC_REMOVE_PLAYER_ID_IS_EMPTY","id":70013},{"name":"EC_GROUP_REMOVE_PLAYER_NO_PERMISSION","id":70014},{"name":"EC_INVALID_PARAMS_GROUP_RECV_TYPE","id":70015},{"name":"EC_INVALID_PARAMS_RECV_PLAYER_ID","id":70016},{"name":"EC_INVALID_PARAMS_MESSAGE_LENGTH","id":70017},{"name":"EC_INVALID_PARAMS_MAX_PLAYER","id":70018},{"name":"PERSISTENCE_GROUP_NUM_EXCEED_THE_LIMIT","id":70019},{"name":"EC_INVALID_PARAMS_PLAYER_NOT_IN_GROUP","id":70020},{"name":"NO_GROUP_OPERATION_PERMISSION","id":70021},{"name":"EC_OPERATION_FAILED_GROUP_FORBID_JOIN","id":70022},{"name":"EC_GROUP_CHAT_FREQUENCY_LIMIT","id":70023},{"name":"EC_GROUP_PLAYER_NUM_LIMIT_EXCEED","id":70024},{"name":"EC_PLAYER_GROUP_NUM_LIMIT_EXCEED","id":70025},{"name":"EC_GROUP_NOT_EXIST","id":70026},{"name":"EC_INVALID_PARAMS","id":60000},{"name":"EC_INVALID_PARAMS_PLAY_MODE_VERSION","id":60001},{"name":"EC_INVALID_PARAMS_PLAY_MODE_RULETYPE","id":60002},{"name":"EC_INVALID_PARAMS_PLAY_MODE_EXPRESSION","id":60003},{"name":"EC_INVALID_PARAMS_PLAY_MODE_TEAM","id":60004},{"name":"EC_INVALID_PARAMS_MSGQ_ENCODE","id":60020},{"name":"EC_INVALID_PARAMS_MSGQ_DECODE","id":60021},{"name":"EC_INVALID_PARAMS_GAME_ID","id":61000},{"name":"EC_INVALID_PARAMS_PLAYER_INFO","id":61001},{"name":"EC_INVALID_PARAMS_MAX_PLAYERS","id":61002},{"name":"EC_INVALID_PARAMS_ROOM_TYPE","id":61003},{"name":"EC_INVALID_PARAMS_PLAYER_ID","id":61004},{"name":"EC_INVALID_PARAMS_MATCH_TYPE","id":61005},{"name":"EC_INVALID_PARAMS_MATCH_CODE","id":61006},{"name":"EC_INVALID_PARAMS_OPEN_ID","id":61007},{"name":"EC_INVALID_PARAMS_PLATFORM","id":61008},{"name":"EC_INVALID_PARAMS_TIMESTAMP","id":61009},{"name":"EC_INVALID_PARAMS_SIGN","id":61010},{"name":"EC_INVALID_PARAMS_NONCE","id":61011},{"name":"EC_INVALID_PARAMS_TOKEN","id":61012},{"name":"EC_INVALID_PARAMS_NETWORK_STATE","id":61013},{"name":"EC_INVALID_PARAMS_ROOM_NAME","id":61014},{"name":"EC_INVALID_PARAMS_CREATE_ROOM_TYPE","id":61015},{"name":"EC_INVALID_PARAMS_DEVICE_ID","id":61016},{"name":"EC_INVALID_PARAMS_PAGE_NO","id":61017},{"name":"EC_INVALID_PARAMS_PAGE_SIZE","id":61018},{"name":"EC_INVALID_PARAMS_PLAYER_LIST","id":61019},{"name":"EC_INVALID_PARAMS_MESSAGE","id":61020},{"name":"EC_INVALID_CHANGE_ROOM_OPTION","id":61021},{"name":"EC_INVALID_PARAMS_REGION","id":61022},{"name":"EC_INVALID_PARAMS_OWNER","id":61023},{"name":"EC_INVALID_PARAMS_OWNER_OPEN_ID","id":61024},{"name":"EC_INVALID_PARAMS_OPEN_ID_DUPLICATE","id":61026},{"name":"EC_INVALID_PARAMS_ROOM_CREATE_TYPE","id":61027},{"name":"EC_MYSPP_SYSTEM_ERR","id":-1000},{"name":"EC_REDIS_KEY_NOT_EXIST","id":-66000},{"name":"EC_REDIS_SET_OP_ERR","id":-66001},{"name":"EC_REDIS_GET_OP_ERR","id":-66002},{"name":"EC_REDIS_DEL_OP_ERR","id":-66003},{"name":"EC_REDIS_EXPIRE_OP_ERR","id":-66004},{"name":"EC_REDIS_LOCK_OP_ERR","id":-66005},{"name":"EC_REDIS_LOCK_ALREADY_EXIST","id":-66006},{"name":"EC_REDIS_LIST_OP_ERR","id":-66020},{"name":"EC_REDIS_LIST_POP_EMPTY","id":-66021},{"name":"EC_REDIS_POOL_GET_INSTANCE_FAIL","id":-66022},{"name":"EC_REDIS_SET_IS_EMPTY","id":-66023},{"name":"EC_REDIS_OP_INVALID_PARAMS","id":-66024},{"name":"EC_MYSQL_NO_ROW_FOUND","id":-66100},{"name":"EC_MYSQL_MULTI_ROW_FOUND","id":-66101},{"name":"EC_MYSQL_INSERT_FAIL","id":-66102},{"name":"EC_MYSQL_DELETE_FAIL","id":-66103},{"name":"EC_MYSQL_UPDATE_FAIL","id":-66104},{"name":"EC_MYSQL_QUERYS_FAIL","id":-66105},{"name":"EC_PB_SERIALIZE_TO_STR_ERR","id":-66200},{"name":"EC_PB_PARSE_FROM_STR_ERR","id":-66201},{"name":"EC_DATA_FORMAT_ERR","id":-66210},{"name":"EC_JSON_FORMAT_ERR","id":-66211},{"name":"EC_JSON_PLAY_MODE_FORMAT_ERR","id":-66212},{"name":"EC_JSON_PLAY_MODE_PARISE_ERR","id":-66213},{"name":"EC_INVALID_PARAMS_RECORE_ID","id":-66601},{"name":"EC_HASHID_ERR","id":-66700},{"name":"EC_HASHID_ENCODE_ERR","id":-66701},{"name":"EC_HASHID_DECODE_ERR","id":-66702},{"name":"EC_CONF_ROOM_ID_BUCKET_ERR","id":-66801},{"name":"EC_SDK_SEND_FAIL","id":90001},{"name":"EC_SDK_UNINIT","id":90002},{"name":"EC_SDK_RES_TIMEOUT","id":90003},{"name":"EC_SDK_NO_LOGIN","id":90004},{"name":"EC_SDK_NO_CHECK_LOGIN","id":90005},{"name":"EC_SDK_SOCKET_ERROR","id":90006},{"name":"EC_SDK_SOCKET_CLOSE","id":90007},{"name":"EC_SDK_NO_ROOM","id":90008},{"name":"EC_SDK_ENCODE_PARAM_FAIL","id":90009},{"name":"EC_SDK_INVALID_PARAMS","id":90010}]},{"name":"NetworkState","syntax":"proto3","values":[{"name":"COMMON_OFFLINE","id":0},{"name":"COMMON_ONLINE","id":1},{"name":"RELAY_OFFLINE","id":2},{"name":"RELAY_ONLINE","id":3}]},{"name":"CreateRoomType","syntax":"proto3","values":[{"name":"COMMON_CREATE","id":0},{"name":"MATCH_CREATE","id":1},{"name":"THIRD_PARTY_CREATE","id":2}]},{"name":"FrameSyncState","syntax":"proto3","values":[{"name":"STOP","id":0},{"name":"START","id":1}]},{"name":"JoinRoomType","syntax":"proto3","values":[{"name":"COMMON_JOIN","id":0},{"name":"MATCH_JOIN","id":1}]},{"name":"ChangeRoomOption","syntax":"proto3","values":[{"name":"ROOM_NAME","id":0},{"name":"OWNER","id":1},{"name":"IS_VIEWED","id":2},{"name":"IS_INVITED","id":3},{"name":"IS_PRIVATE","id":4},{"name":"CUSTOM_PROPERTIES","id":5},{"name":"IS_FORBID_JOIN","id":6}]},{"name":"MatchStatus","syntax":"proto3","values":[{"name":"PENDING","id":0},{"name":"MATCHING","id":1},{"name":"SUCCESS","id":3},{"name":"TIMEOUT","id":4}]},{"name":"MatchPlacementType","syntax":"proto3","values":[{"name":"MP_MGOBE","id":0},{"name":"MP_GSE","id":1},{"name":"MP_THIRDPARTY","id":-1}]},{"name":"PlacementStatus","syntax":"proto3","values":[{"name":"PS_UNKNOW","id":0},{"name":"PS_PENDING","id":2},{"name":"PS_FULFILLED","id":3},{"name":"PS_CANCELLED","id":4},{"name":"PS_TIMED_OUT","id":5},{"name":"PS_FAILED","id":6},{"name":"PS_TIMED_OUT_MQ","id":100},{"name":"PS_PLACE_MATCH_FAIL","id":101}]},{"name":"MatchType","syntax":"proto3","values":[{"name":"ROOM_SIMPLE","id":1},{"name":"PLAYER_COMPLEX","id":2}]},{"name":"GameSvrForwardType","syntax":"proto3","values":[{"name":"E_GS_FORWARDTYPE_DEFAULT","id":0},{"name":"E_GS_FORWARDTYPE_NOTIFY_CONNECTION","id":1},{"name":"E_GS_FORWARDTYPE_NOTIFY_ROOM_EVENT","id":2},{"name":"E_GS_FORWARDTYPE_NOTIFY_COM_EVENT","id":3},{"name":"E_GS_FORWARDTYPE_CLIENT_SENDTO_GAMESVR","id":4}]},{"name":"GroupType","syntax":"proto3","values":[{"name":"GROUP_LIMITED","id":0},{"name":"GROUP_MANY","id":1}]},{"name":"ChangeGroupOption","syntax":"proto3","values":[{"name":"GROUP_NAME","id":0},{"name":"GROUP_OWNER","id":1},{"name":"GROUP_CUSTOM_PROPERTIES","id":2},{"name":"GROUP_IS_FORBID_JOIN","id":3}]},{"name":"GroupRecvType","syntax":"proto3","values":[{"name":"GROUP_ALL","id":1},{"name":"GROUP_OTHERS","id":2},{"name":"GROUP_SOME","id":3}]}],"services":[],"isNamespace":true}');
      }, function (e, t, n) {
        "use strict";

        n.r(t);
        var r,
            i,
            o = {};
        n.r(o), n.d(o, "packageName", function () {
          return re;
        }), n.d(o, "ConnectionType", function () {
          return ie;
        }), n.d(o, "EventType", function () {
          return oe;
        }), n.d(o, "ServerSendClientBstWrap2Type", function () {
          return se;
        }), n.d(o, "ClientSendServerReqWrap2Cmd", function () {
          return ae;
        }), n.d(o, "QAppProtoErrCode", function () {
          return _e;
        }), n.d(o, "NetworkState", function () {
          return Ee;
        }), n.d(o, "CreateRoomType", function () {
          return le;
        }), n.d(o, "FrameSyncState", function () {
          return de;
        }), n.d(o, "JoinRoomType", function () {
          return ue;
        }), n.d(o, "ChangeRoomOption", function () {
          return ce;
        }), n.d(o, "MatchStatus", function () {
          return he;
        }), n.d(o, "MatchPlacementType", function () {
          return pe;
        }), n.d(o, "PlacementStatus", function () {
          return Re;
        }), n.d(o, "MatchType", function () {
          return fe;
        }), n.d(o, "GameSvrForwardType", function () {
          return me;
        }), n.d(o, "GroupType", function () {
          return Se;
        }), n.d(o, "ChangeGroupOption", function () {
          return ye;
        }), n.d(o, "GroupRecvType", function () {
          return Ie;
        }), n.d(o, "messages", function () {
          return ge;
        }), function (e) {
          e[e.UNKNOWN = 0] = "UNKNOWN", e[e.WX = 1] = "WX", e[e.QQ = 2] = "QQ", e[e.BD = 3] = "BD", e[e.OP = 4] = "OP", e[e.VV = 5] = "VV", e[e.WXMP = 6] = "WXMP", e[e.QQMP = 7] = "QQMP", e[e.COCOS_NATIVE = 8] = "COCOS_NATIVE", e[e.UNITY = 9] = "UNITY", e[e.TT = 10] = "TT";
        }(r || (r = {})), function (e) {
          e[e.UNKNOWN = 0] = "UNKNOWN", e[e.ANDROID = 1] = "ANDROID", e[e.IOS = 2] = "IOS";
        }(i || (i = {}));

        const s = {},
              a = e => t => {
          const n = e(t.url);
          return n.binaryType = "arraybuffer", {
            onClose: e => n.onclose = e,
            onOpen: e => n.onopen = e,
            onError: e => n.onerror = e,
            onMessage: e => n.onmessage = e,
            close: () => n.close(),
            send: ({
              data: e,
              fail: t,
              success: r
            }) => {
              try {
                n.send(e), setTimeout(() => r && r(), 0);
              } catch (e) {
                setTimeout(() => t && t(), 0);
              }
            },

            get readyState() {
              return n.readyState;
            },

            CONNECTING: 0,
            OPEN: 1,
            CLOSING: 2,
            CLOSED: 3
          };
        },
              _ = a(e => new WebSocket(e)),
              E = e => {
          const t = (e.method + "").toLowerCase() || "get",
                n = new XMLHttpRequest();
          let r = "",
              i = "";

          if ("get" === t) {
            i = "?";
            const t = Object.keys(e.data || {});

            for (const n of t) i += n + "=" + e.data[n] + "&";
          }

          "post" === t && (r = JSON.stringify(e.data || {})), n.open(t, e.url + i), n.onreadystatechange = () => {
            if (4 === n.readyState) return 200 === n.status ? e.success && e.success({
              data: JSON.parse(n.responseText)
            }) : e.fail && e.fail();
          }, n.send("post" === t && r);
        },
              l = e => null,
              d = e => null,
              u = e => null,
              c = e => null,
              h = {},
              p = e => h[e],
              R = (e, t) => h[e] = t,
              f = e => delete h[e],
              m = ({
          fail: e
        }) => e && e("ERROR"),
              S = () => ({}),
              y = ({
          fail: e
        }) => e && e("ERROR"),
              I = ({
          fail: e
        }) => e && e("ERROR");

        function g(e, t) {
          const n = s;
          return t[e] || n[e];
        }

        s.connectSocket = _, s.request = E, s.onHide = l, s.offHide = d, s.onShow = u, s.offShow = c, s.getStorageSync = p, s.setStorageSync = R, s.removeStorageSync = f, s.getUserInfo = m, s.getSystemInfoSync = S, s.getLocation = y, s.getNetworkType = I, s.createUDPSocket = null, s.channel = r.UNKNOWN, "undefined" != typeof window ? s.root = window : s.root = {};
        let C = {};

        function T() {
          if ("undefined" == typeof wx) return !1;
          if ("undefined" == typeof GameGlobal) return !1;
          if (!wx.onHide) return !1;
          if (!wx.offHide) return !1;
          if (!wx.onShow) return !1;
          if (!wx.offShow) return !1;
          if (!wx.getSystemInfoSync) return !1;
          if (!wx.getStorageSync) return !1;
          if (!wx.setStorageSync) return !1;
          if (!wx.connectSocket) return !1;
          if (!wx.request) return !1;

          try {
            if (!wx.getSystemInfoSync()) return !1;
          } catch (e) {
            return !1;
          }

          return !0;
        }

        T() && (C = wx);
        const O = {};
        O.connectSocket = g("connectSocket", C), O.request = g("request", C), O.onHide = g("onHide", C), O.offHide = g("offHide", C), O.onShow = g("onShow", C), O.offShow = g("offShow", C), O.getStorageSync = g("getStorageSync", C), O.setStorageSync = g("setStorageSync", C), O.removeStorageSync = g("removeStorageSync", C), O.getUserInfo = g("getUserInfo", C), O.getSystemInfoSync = g("getSystemInfoSync", C), O.getLocation = g("getLocation", C), O.getNetworkType = g("getNetworkType", C), O.createUDPSocket = g("createUDPSocket", C), O.channel = r.WX, "undefined" != typeof GameGlobal && (O.root = GameGlobal);
        let A = {};

        function M() {
          if ("undefined" == typeof qq) return !1;
          if (!qq.onHide) return !1;
          if (!qq.offHide) return !1;
          if (!qq.onShow) return !1;
          if (!qq.offShow) return !1;
          if (!qq.getSystemInfoSync) return !1;
          if (!qq.getStorageSync) return !1;
          if (!qq.setStorageSync) return !1;
          if (!qq.connectSocket) return !1;
          if (!qq.request) return !1;

          try {
            const e = qq.getSystemInfoSync();
            if (!e) return !1;
            if ("qq" !== (e.AppPlatform + "").toLowerCase()) return !1;
          } catch (e) {
            return !1;
          }

          return !0;
        }

        M() && (A = qq);
        const P = {},
              v = g("connectSocket", A);
        P.connectSocket = e => {
          const t = v(e);
          let n = 0;
          return {
            onClose: e => {
              t.onClose(t => {
                n = 3, e && e(t);
              });
            },
            onOpen: e => {
              t.onOpen(t => {
                n = 1, e && e(t);
              });
            },
            onError: e => {
              t.onError(r => {
                n = 3, t.close(), e && e(r);
              });
            },
            onMessage: e => t.onMessage(e),
            close: () => {
              n = 3, t.close();
            },
            send: ({
              data: e,
              fail: n,
              success: r
            }) => t.send({
              data: e,
              fail: n,
              success: r
            }),

            get readyState() {
              return n;
            },

            CONNECTING: 0,
            OPEN: 1,
            CLOSING: 2,
            CLOSED: 3
          };
        }, P.request = g("request", A), P.onHide = g("onHide", A), P.offHide = g("offHide", A), P.onShow = g("onShow", A), P.offShow = g("offShow", A), P.getStorageSync = g("getStorageSync", A), P.setStorageSync = g("setStorageSync", A), P.removeStorageSync = g("removeStorageSync", A), P.getUserInfo = g("getUserInfo", A), P.getSystemInfoSync = g("getSystemInfoSync", A), P.getLocation = g("getLocation", A), P.getNetworkType = g("getNetworkType", A), P.createUDPSocket = g("createUDPSocket", A), P.channel = r.QQ, "undefined" != typeof GameGlobal && (P.root = GameGlobal);
        let N = {};

        function L() {
          if ("undefined" == typeof swan) return !1;
          if (!swan.onHide) return !1;
          if (!swan.offHide) return !1;
          if (!swan.onShow) return !1;
          if (!swan.offShow) return !1;
          if (!swan.getSystemInfoSync) return !1;
          if (!swan.getStorageSync) return !1;
          if (!swan.setStorageSync) return !1;
          if (!swan.connectSocket) return !1;
          if (!swan.request) return !1;

          try {
            const e = swan.getSystemInfoSync();
            if (!e) return !1;
            if (!e.swanNativeVersion) return !1;
            if (!(e.host + "").toLowerCase().includes("baidu")) return !1;
          } catch (e) {
            return !1;
          }

          return !0;
        }

        L() && (N = swan);
        const b = {},
              D = g("connectSocket", N);
        b.connectSocket = e => {
          const t = D(e);
          let n = 0;
          return {
            onClose: e => {
              t.onClose(t => {
                n = 3, e && e(t);
              });
            },
            onOpen: e => {
              t.onOpen(t => {
                n = 1, e && e(t);
              });
            },
            onError: e => {
              t.onError(r => {
                n = 3, t.close(), e && e(r);
              });
            },
            onMessage: e => t.onMessage(e),
            close: () => {
              n = 3, t.close();
            },
            send: ({
              data: e,
              fail: n,
              success: r
            }) => t.send({
              data: e,
              fail: n,
              success: r
            }),

            get readyState() {
              return n;
            },

            CONNECTING: 0,
            OPEN: 1,
            CLOSING: 2,
            CLOSED: 3
          };
        }, b.request = g("request", N), b.onHide = g("onHide", N), b.offHide = g("offHide", N), b.onShow = g("onShow", N), b.offShow = g("offShow", N), b.getStorageSync = g("getStorageSync", N), b.setStorageSync = g("setStorageSync", N), b.removeStorageSync = g("removeStorageSync", N), b.getUserInfo = g("getUserInfo", N), b.getSystemInfoSync = g("getSystemInfoSync", N), b.getLocation = g("getLocation", N), b.getNetworkType = g("getNetworkType", N), b.createUDPSocket = null, b.channel = r.BD, "undefined" != typeof GameGlobal && (b.root = GameGlobal);
        let w = {};

        function G() {
          if ("undefined" == typeof qg) return !1;
          if (!qg.onHide) return !1;
          if (!qg.offHide) return !1;
          if (!qg.onShow) return !1;
          if (!qg.offShow) return !1;
          if (!qg.getSystemInfoSync) return !1;
          if (!qg.getProvider) return !1;
          if (!localStorage.getItem) return !1;
          if (!localStorage.setItem) return !1;
          if (!WebSocket) return !1;
          if (!XMLHttpRequest) return !1;
          if (!localStorage) return !1;

          try {
            if ("OPPO" !== qg.getProvider().toLocaleUpperCase()) return !1;
          } catch (e) {
            return !1;
          }

          try {
            if (!qg.getSystemInfoSync()) return !1;
          } catch (e) {
            return !1;
          }

          return !0;
        }

        G() && (w = qg);
        const U = {};
        U.connectSocket = _, U.request = E, U.onHide = g("onHide", w), U.offHide = g("offHide", w), U.onShow = g("onShow", w), U.offShow = g("offShow", w), U.getStorageSync = e => {
          localStorage.getItem(e);
        }, U.setStorageSync = (e, t) => {
          localStorage.setItem(e, t);
        }, U.removeStorageSync = e => {
          localStorage.removeItem(e);
        }, U.getUserInfo = m, U.getSystemInfoSync = g("getSystemInfoSync", w), U.getLocation = g("getLocation", w), U.getNetworkType = g("getNetworkType", w), U.createUDPSocket = null, U.channel = r.OP, "undefined" != typeof window && (U.root = window);
        let Y = {};

        function k() {
          if ("undefined" == typeof qg) return !1;
          if (!qg.onHide) return !1;
          if (!qg.offHide) return !1;
          if (!qg.onShow) return !1;
          if (!qg.offShow) return !1;
          if (!qg.getSystemInfoSync) return !1;
          if (!qg.getProvider) return !1;
          if (!qg.getStorageSync) return !1;
          if (!qg.setStorageSync) return !1;
          if (!qg.createWebSocket) return !1;
          if (!qg.request) return !1;

          try {
            if ("VIVO" !== qg.getProvider().toLocaleUpperCase()) return !1;
          } catch (e) {
            return !1;
          }

          try {
            if (!qg.getSystemInfoSync()) return !1;
          } catch (e) {
            return !1;
          }

          return !0;
        }

        k() && (Y = qg);
        const F = {
          connectSocket: e => {
            const t = qg.createWebSocket({
              url: e.url
            });
            return {
              onClose: e => t.onclose = e,
              onOpen: e => t.onopen = e,
              onError: e => t.onerror = e,
              onMessage: e => t.onmessage = e,
              close: () => t.close(),
              send: ({
                data: e,
                fail: n,
                success: r
              }) => {
                try {
                  t.send(e), setTimeout(() => r && r(), 0);
                } catch (e) {
                  setTimeout(() => n && n(), 0);
                }
              },

              get readyState() {
                return t.readyState;
              },

              CONNECTING: 0,
              OPEN: 1,
              CLOSING: 2,
              CLOSED: 3
            };
          },
          request: e => (e.data = "object" == typeof e.data ? JSON.stringify(e.data) : e.data, qg.request(e))
        };
        F.onHide = g("onHide", Y), F.offHide = g("offHide", Y), F.onShow = g("onShow", Y), F.offShow = g("offShow", Y), F.getStorageSync = e => qg.getStorageSync({
          key: e
        }), F.setStorageSync = (e, t) => qg.setStorageSync({
          key: e,
          value: t
        }), F.removeStorageSync = e => qg.deleteStorageSync({
          key: e
        }), F.getUserInfo = m, F.getSystemInfoSync = g("getSystemInfoSync", Y), F.getLocation = g("getLocation", Y), F.getNetworkType = e => {
          qg.getNetworkType({
            success: t => {
              e.success && e.success({
                networkType: t.type
              });
            },
            fail: () => {
              e.fail && e.fail();
            },
            complete: () => {
              e.complete && e.complete();
            }
          });
        }, F.createUDPSocket = null, F.channel = r.VV, "undefined" != typeof window && (F.root = window);
        let q = {};

        function H() {
          if ("undefined" == typeof wx) return !1;
          if ("undefined" == typeof App) return !1;
          if ("undefined" == typeof Page) return !1;
          if ("function" != typeof getApp) return !1;
          if (!wx.onAppHide) return !1;
          if (!wx.offAppHide) return !1;
          if (!wx.onAppShow) return !1;
          if (!wx.offAppShow) return !1;
          if (!wx.getSystemInfoSync) return !1;
          if (!wx.getStorageSync) return !1;
          if (!wx.setStorageSync) return !1;
          if (!wx.connectSocket) return !1;
          if (!wx.request) return !1;

          try {
            if (!wx.getSystemInfoSync()) return !1;
            if ("qq" === wx.getSystemInfoSync().AppPlatform) return !1;
          } catch (e) {
            return !1;
          }

          return !0;
        }

        let x = l,
            B = d,
            V = u,
            Q = c;
        H() && (q = wx, x = wx.onAppHide, B = wx.offAppHide, V = wx.onAppShow, Q = wx.offAppShow);
        const W = {};
        W.connectSocket = g("connectSocket", q), W.request = g("request", q), W.onHide = x, W.offHide = B, W.onShow = V, W.offShow = Q, W.getStorageSync = g("getStorageSync", q), W.setStorageSync = g("setStorageSync", q), W.removeStorageSync = g("removeStorageSync", q), W.getUserInfo = g("getUserInfo", q), W.getSystemInfoSync = g("getSystemInfoSync", q), W.getLocation = g("getLocation", q), W.getNetworkType = g("getNetworkType", q), W.createUDPSocket = g("createUDPSocket", q), W.channel = r.WXMP, W.root = {};
        let K = {};
        const j = "___MGOBE_PREVENT_MULTI_QQ_MP_JS_PROCESS___",
              J = Date.now() + "_" + Math.random();

        function X() {
          if ("undefined" == typeof qq) return !1;
          if ("undefined" == typeof App) return !1;
          if ("undefined" == typeof Page) return !1;
          if ("function" != typeof getApp) return !1;
          if (!qq.onAppHide) return !1;
          if (!qq.offAppHide) return !1;
          if (!qq.onAppShow) return !1;
          if (!qq.offAppShow) return !1;
          if (!qq.getSystemInfoSync) return !1;
          if (!qq.getStorageSync) return !1;
          if (!qq.setStorageSync) return !1;
          if (!qq.connectSocket) return !1;
          if (!qq.request) return !1;

          try {
            const e = qq.getSystemInfoSync();
            if (!e) return !1;
            if ("qq" !== (e.AppPlatform + "").toLowerCase()) return !1;
          } catch (e) {
            return !1;
          }

          try {
            qq.setStorageSync(j, J);
          } catch (e) {
            console.log("set storage fail", e);
          }

          return !0;
        }

        let z = l,
            $ = d,
            Z = u,
            ee = c;
        X() && (K = qq, z = qq.onAppHide, $ = qq.offAppHide, Z = qq.onAppShow, ee = qq.offAppShow);
        const te = {},
              ne = g("connectSocket", K);
        te.connectSocket = e => {
          const t = ne(e);
          let n = 0;
          return {
            onClose: e => {
              t.onClose(t => {
                n = 3, e && e(t);
              });
            },
            onOpen: e => {
              t.onOpen(t => {
                n = 1, e && e(t);
              });
            },
            onError: e => {
              t.onError(r => {
                n = 3, t.close(), e && e(r);
              });
            },
            onMessage: e => t.onMessage(e),
            close: () => {
              n = 3, t.close();
            },
            send: ({
              data: e,
              fail: n,
              success: r
            }) => {
              let i = "";

              try {
                i = qq.getStorageSync(j);
              } catch (e) {
                console.log("get storage fail", e);
              }

              if (!i || i === J) return t.send({
                data: e,
                fail: n,
                success: r
              });
              n && n();
            },

            get readyState() {
              return n;
            },

            CONNECTING: 0,
            OPEN: 1,
            CLOSING: 2,
            CLOSED: 3
          };
        }, te.request = g("request", K), te.onHide = z, te.offHide = $, te.onShow = Z, te.offShow = ee, te.getStorageSync = g("getStorageSync", K), te.setStorageSync = g("setStorageSync", K), te.removeStorageSync = g("removeStorageSync", K), te.getUserInfo = g("getUserInfo", K), te.getSystemInfoSync = g("getSystemInfoSync", K), te.getLocation = g("getLocation", K), te.getNetworkType = g("getNetworkType", K), te.createUDPSocket = g("createUDPSocket", K), te.channel = r.QQMP, te.root = {};
        const re = "mgobexs";

        var ie, oe, se, ae, _e, Ee, le, de, ue, ce, he, pe, Re, fe, me, Se, ye, Ie;

        !function (e) {
          e[e.COMMON = 0] = "COMMON", e[e.RELAY = 1] = "RELAY";
        }(ie || (ie = {})), function (e) {
          e[e.ET_Unknown = 0] = "ET_Unknown", e[e.ET_NetworkState = 1] = "ET_NetworkState";
        }(oe || (oe = {})), function (e) {
          e[e.E_PUSH_TYPE_TEST = 0] = "E_PUSH_TYPE_TEST", e[e.E_PUSH_TYPE_RELAY = 1] = "E_PUSH_TYPE_RELAY", e[e.E_PUSH_TYPE_GAMESVR = 2] = "E_PUSH_TYPE_GAMESVR", e[e.E_PUSH_TYPE_JOIN_ROOM = 100] = "E_PUSH_TYPE_JOIN_ROOM", e[e.E_PUSH_TYPE_LEAVE_ROOM = 101] = "E_PUSH_TYPE_LEAVE_ROOM", e[e.E_PUSH_TYPE_DISMISS_ROOM = 102] = "E_PUSH_TYPE_DISMISS_ROOM", e[e.E_PUSH_TYPE_REMOVE_PLAYER = 103] = "E_PUSH_TYPE_REMOVE_PLAYER", e[e.E_PUSH_TYPE_MODIFY_ROOM_PROPERTY = 104] = "E_PUSH_TYPE_MODIFY_ROOM_PROPERTY", e[e.E_PUSH_TYPE_NETWORK_STATE = 105] = "E_PUSH_TYPE_NETWORK_STATE", e[e.E_PUSH_TYPE_ROOM_CHAT = 106] = "E_PUSH_TYPE_ROOM_CHAT", e[e.E_PUSH_TYPE_PLAYER_STATE = 107] = "E_PUSH_TYPE_PLAYER_STATE", e[e.E_PUSH_TYPE_START_GAME = 108] = "E_PUSH_TYPE_START_GAME", e[e.E_PUSH_TYPE_STOP_GAME = 109] = "E_PUSH_TYPE_STOP_GAME", e[e.E_PUSH_TYPE_CREATE_ROOM = 110] = "E_PUSH_TYPE_CREATE_ROOM", e[e.E_PUSH_TYPE_DESTROY_ROOM = 111] = "E_PUSH_TYPE_DESTROY_ROOM", e[e.E_PUSH_TYPE_MATCH_SUCCESS = 200] = "E_PUSH_TYPE_MATCH_SUCCESS", e[e.E_PUSH_TYPE_MATCH_TIMEOUT = 201] = "E_PUSH_TYPE_MATCH_TIMEOUT", e[e.E_PUSH_TYPE_MATCH_CANCEL = 202] = "E_PUSH_TYPE_MATCH_CANCEL", e[e.E_PUSH_TYPE_JOIN_GROUP = 500] = "E_PUSH_TYPE_JOIN_GROUP", e[e.E_PUSH_TYPE_LEAVE_GROUP = 501] = "E_PUSH_TYPE_LEAVE_GROUP", e[e.E_PUSH_TYPE_DISMISS_GROUP = 502] = "E_PUSH_TYPE_DISMISS_GROUP", e[e.E_PUSH_TYPE_MODIFY_GROUP_PROPERTY = 503] = "E_PUSH_TYPE_MODIFY_GROUP_PROPERTY", e[e.E_PUSH_TYPE_REMOVE_GROUP_PLAYER = 504] = "E_PUSH_TYPE_REMOVE_GROUP_PLAYER", e[e.E_PUSH_TYPE_GROUP_PLAYER_STATE = 505] = "E_PUSH_TYPE_GROUP_PLAYER_STATE", e[e.E_PUSH_TYPE_GROUP_CHAT = 506] = "E_PUSH_TYPE_GROUP_CHAT";
        }(se || (se = {})), function (e) {
          e[e.E_CMD_INVALID = 0] = "E_CMD_INVALID", e[e.E_CMD_HEART_BEAT_REQ = 100] = "E_CMD_HEART_BEAT_REQ", e[e.E_CMD_CHECK_LOGIN_REQ = 101] = "E_CMD_CHECK_LOGIN_REQ", e[e.E_CMD_LOGIN_TO_ROOM_REQ = 102] = "E_CMD_LOGIN_TO_ROOM_REQ", e[e.E_CMD_FORWARD_TO_RELAY_REQ = 103] = "E_CMD_FORWARD_TO_RELAY_REQ", e[e.E_CMD_LOGIN_REQ = 1e3] = "E_CMD_LOGIN_REQ", e[e.E_CMD_LOGOUT_REQ = 1001] = "E_CMD_LOGOUT_REQ", e[e.E_CMD_AUTH_REQ = 1002] = "E_CMD_AUTH_REQ", e[e.E_CMD_QUERY_BY_PLAYER_ID_REQ = 1003] = "E_CMD_QUERY_BY_PLAYER_ID_REQ", e[e.E_CMD_QUERY_BY_GAME_ID_REQ = 1004] = "E_CMD_QUERY_BY_GAME_ID_REQ", e[e.E_CMD_GET_ROOM_DETAIL_REQ = 2001] = "E_CMD_GET_ROOM_DETAIL_REQ", e[e.E_CMD_JOIN_ROOM_REQ = 2002] = "E_CMD_JOIN_ROOM_REQ", e[e.E_CMD_QUIT_ROOM_REQ = 2003] = "E_CMD_QUIT_ROOM_REQ", e[e.E_CMD_CREATE_ROOM_REQ = 2004] = "E_CMD_CREATE_ROOM_REQ", e[e.E_CMD_DESTORY_ROOM_REQ = 2005] = "E_CMD_DESTORY_ROOM_REQ", e[e.E_CMD_REMOVE_MEMBER_REQ = 2006] = "E_CMD_REMOVE_MEMBER_REQ", e[e.E_CMD_CHANGE_ROOM_PROPERTIS_REQ = 2007] = "E_CMD_CHANGE_ROOM_PROPERTIS_REQ", e[e.E_CMD_DISSMISS_ROOM_REQ = 2008] = "E_CMD_DISSMISS_ROOM_REQ", e[e.E_CMD_CHANGE_PLAYER_STATE_REQ = 2009] = "E_CMD_CHANGE_PLAYER_STATE_REQ", e[e.E_CMD_CHANGE_PLAYER_NETWORK_STATE_REQ = 2010] = "E_CMD_CHANGE_PLAYER_NETWORK_STATE_REQ", e[e.E_CMD_ROOM_CHAT_REQ = 2011] = "E_CMD_ROOM_CHAT_REQ", e[e.E_CMD_START_FRAME_SYNC_REQ = 2012] = "E_CMD_START_FRAME_SYNC_REQ", e[e.E_CMD_STOP_FRAME_SYNC_REQ = 2013] = "E_CMD_STOP_FRAME_SYNC_REQ", e[e.E_CMD_GET_ROOM_LIST_REQ = 2014] = "E_CMD_GET_ROOM_LIST_REQ", e[e.E_CMD_SVR_REMOVE_MEMBER_REQ = 2015] = "E_CMD_SVR_REMOVE_MEMBER_REQ", e[e.E_CMD_SVR_CHANGE_ROOM_PROPERTIS_REQ = 2016] = "E_CMD_SVR_CHANGE_ROOM_PROPERTIS_REQ", e[e.E_CMD_SVR_CHANGE_PLAYER_STATE_REQ = 2017] = "E_CMD_SVR_CHANGE_PLAYER_STATE_REQ", e[e.E_CMD_GET_ROOM_LIST_V2_REQ = 2018] = "E_CMD_GET_ROOM_LIST_V2_REQ", e[e.E_CMD_CREATE_ROOM_FOR_THIRD_PARTY_REQ = 2019] = "E_CMD_CREATE_ROOM_FOR_THIRD_PARTY_REQ", e[e.E_CMD_MATCH_ROOM_SIMPLE_REQ = 3001] = "E_CMD_MATCH_ROOM_SIMPLE_REQ", e[e.E_CMD_MATCH_USER_SIMPLE_REQ = 3002] = "E_CMD_MATCH_USER_SIMPLE_REQ", e[e.E_CMD_MATCH_CANCEL_MATCH_REQ = 3003] = "E_CMD_MATCH_CANCEL_MATCH_REQ", e[e.E_CMD_MATCH_ROOM_COMPLEX_REQ = 3004] = "E_CMD_MATCH_ROOM_COMPLEX_REQ", e[e.E_CMD_MATCH_PLAYER_COMPLEX_REQ = 3005] = "E_CMD_MATCH_PLAYER_COMPLEX_REQ", e[e.E_CMD_MATCH_GROUP_REQ = 3006] = "E_CMD_MATCH_GROUP_REQ", e[e.E_CMD_RELAY_SEND_FRAME_REQ = 4e3] = "E_CMD_RELAY_SEND_FRAME_REQ", e[e.E_CMD_RELAY_REQUEST_FRAME_REQ = 4001] = "E_CMD_RELAY_REQUEST_FRAME_REQ", e[e.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ = 4002] = "E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ", e[e.E_CMD_RELAY_CLIENT_RECV_FROM_GAMESVR_REQ = 4003] = "E_CMD_RELAY_CLIENT_RECV_FROM_GAMESVR_REQ", e[e.E_CMD_NOTIFY_JOIN_ROOM = 5e3] = "E_CMD_NOTIFY_JOIN_ROOM", e[e.E_CMD_NOTIFY_QUIT_ROOM = 5001] = "E_CMD_NOTIFY_QUIT_ROOM", e[e.E_CMD_NOTIFY_DESTORY_ROOM = 5002] = "E_CMD_NOTIFY_DESTORY_ROOM", e[e.E_CMD_NOTIFY_NET_STATE = 5003] = "E_CMD_NOTIFY_NET_STATE", e[e.E_CMD_NOTIFY_KICK_MEMBER = 5004] = "E_CMD_NOTIFY_KICK_MEMBER", e[e.E_CMD_GET_ADDR_BY_ROUTER_ID_REQ = 6e3] = "E_CMD_GET_ADDR_BY_ROUTER_ID_REQ", e[e.E_CMD_GET_GROUP_DETAIL_REQ = 7001] = "E_CMD_GET_GROUP_DETAIL_REQ", e[e.E_CMD_JOIN_GROUP_REQ = 7002] = "E_CMD_JOIN_GROUP_REQ", e[e.E_CMD_QUIT_GROUP_REQ = 7003] = "E_CMD_QUIT_GROUP_REQ", e[e.E_CMD_CREATE_GROUP_REQ = 7004] = "E_CMD_CREATE_GROUP_REQ", e[e.E_CMD_REMOVE_GROUP_MEMBER_REQ = 7005] = "E_CMD_REMOVE_GROUP_MEMBER_REQ", e[e.E_CMD_CHANGE_GROUP_PROPERTIES_REQ = 7006] = "E_CMD_CHANGE_GROUP_PROPERTIES_REQ", e[e.E_CMD_DISMISS_GROUP_REQ = 7007] = "E_CMD_DISMISS_GROUP_REQ", e[e.E_CMD_CHANGE_GROUP_PLAYER_STATE_REQ = 7008] = "E_CMD_CHANGE_GROUP_PLAYER_STATE_REQ", e[e.E_CMD_CHANGE_GROUP_PLAYER_NETWORK_STATE_REQ = 7009] = "E_CMD_CHANGE_GROUP_PLAYER_NETWORK_STATE_REQ", e[e.E_CMD_GROUP_CHAT_REQ = 7010] = "E_CMD_GROUP_CHAT_REQ", e[e.E_CMD_GET_GROUP_LIST_REQ = 7011] = "E_CMD_GET_GROUP_LIST_REQ";
        }(ae || (ae = {})), function (e) {
          e[e.EC_OK = 0] = "EC_OK", e[e.EC_REQ_BAD_PKG = 1] = "EC_REQ_BAD_PKG", e[e.EC_CMD_INVALID = 2] = "EC_CMD_INVALID", e[e.EC_PARAMS_INVALID = 3] = "EC_PARAMS_INVALID", e[e.EC_INNER_ERROR = 4] = "EC_INNER_ERROR", e[e.EC_TIME_OUT = 5] = "EC_TIME_OUT", e[e.EC_SERVER_BUSY = 6] = "EC_SERVER_BUSY", e[e.EC_NO_RIGHT = 7] = "EC_NO_RIGHT", e[e.EC_ACCESS_CMD_INVALID_ERR = 200] = "EC_ACCESS_CMD_INVALID_ERR", e[e.EC_ACCESS_CMD_GET_TOKEN_ERR = 201] = "EC_ACCESS_CMD_GET_TOKEN_ERR", e[e.EC_ACCESS_CMD_TOKEN_PRE_EXPIRE = 202] = "EC_ACCESS_CMD_TOKEN_PRE_EXPIRE", e[e.EC_ACCESS_CMD_INVALID_TOKEN = 203] = "EC_ACCESS_CMD_INVALID_TOKEN", e[e.EC_ACCESS_PUSH_SERIALIZE_ERR = 204] = "EC_ACCESS_PUSH_SERIALIZE_ERR", e[e.EC_ACCESS_LOGIN_BODY_PARSE_ERR = 205] = "EC_ACCESS_LOGIN_BODY_PARSE_ERR", e[e.EC_ACCESS_CONN_ERR = 206] = "EC_ACCESS_CONN_ERR", e[e.EC_ACCESS_GET_RS_IP_ERR = 207] = "EC_ACCESS_GET_RS_IP_ERR", e[e.EC_ACCESS_ADD_COMM_CONN_ERR = 208] = "EC_ACCESS_ADD_COMM_CONN_ERR", e[e.EC_ACCESS_ADD_HEART_CONN_ERR = 209] = "EC_ACCESS_ADD_HEART_CONN_ERR", e[e.EC_ACCESS_ADD_RELAY_CONN_ERR = 210] = "EC_ACCESS_ADD_RELAY_CONN_ERR", e[e.EC_ACCESS_HEART_BODY_PARSE_ERR = 211] = "EC_ACCESS_HEART_BODY_PARSE_ERR", e[e.EC_ACCESS_GET_COMM_CONNECT_ERR = 212] = "EC_ACCESS_GET_COMM_CONNECT_ERR", e[e.EC_ACCESS_GET_RELAY_CONNECT_ERR = 213] = "EC_ACCESS_GET_RELAY_CONNECT_ERR", e[e.EC_ACCESS_ACCESS_INFO_EMPTY = 214] = "EC_ACCESS_ACCESS_INFO_EMPTY", e[e.EC_ACCESS_PLAYER_DUPLICATE_LOGIN = 215] = "EC_ACCESS_PLAYER_DUPLICATE_LOGIN", e[e.EC_ACCESS_NOE_RELAY_OR_STATE_SVR = 216] = "EC_ACCESS_NOE_RELAY_OR_STATE_SVR", e[e.EC_PLAYER_GAME_NOT_EXIST = 1e4] = "EC_PLAYER_GAME_NOT_EXIST", e[e.EC_PLAYER_SECRET_KEY_FAIL = 10001] = "EC_PLAYER_SECRET_KEY_FAIL", e[e.EC_PLAYER_SIGN_ERR = 10002] = "EC_PLAYER_SIGN_ERR", e[e.EC_PLAYER_DUPLICATE_REQ = 10003] = "EC_PLAYER_DUPLICATE_REQ", e[e.EC_PLAYER_TIMESTAMP_INVALID = 10004] = "EC_PLAYER_TIMESTAMP_INVALID", e[e.EC_PLAYER_QUERY_PLAYER_FAIL = 10005] = "EC_PLAYER_QUERY_PLAYER_FAIL", e[e.EC_PLAYER_ADD_PLAYER_FAIL = 10006] = "EC_PLAYER_ADD_PLAYER_FAIL", e[e.EC_PLAYER_QUERY_GAME_FAIL = 10007] = "EC_PLAYER_QUERY_GAME_FAIL", e[e.EC_PLAYER_RECORD_NUM_ERR = 10008] = "EC_PLAYER_RECORD_NUM_ERR", e[e.EC_PLAYER_GET_TOKEN_FAIL = 10009] = "EC_PLAYER_GET_TOKEN_FAIL", e[e.EC_PLAYER_TOKEN_NOT_EXIST = 10010] = "EC_PLAYER_TOKEN_NOT_EXIST", e[e.EC_PLAYER_TOKEN_INVALID = 10011] = "EC_PLAYER_TOKEN_INVALID", e[e.EC_PLAYER_CLEAR_TOKEN_FAIL = 10012] = "EC_PLAYER_CLEAR_TOKEN_FAIL", e[e.EC_PLAYER_LOCK_FAIL = 10013] = "EC_PLAYER_LOCK_FAIL", e[e.EC_PLAYER_UNLOCK_FAIL = 10014] = "EC_PLAYER_UNLOCK_FAIL", e[e.EC_PLAYER_SAVE_TOKEN_FAIL = 10015] = "EC_PLAYER_SAVE_TOKEN_FAIL", e[e.EC_PLAYER_GAME_OUT_OF_SERVICE = 10016] = "EC_PLAYER_GAME_OUT_OF_SERVICE", e[e.EC_ROOM_CREATE_NO_PERMISSION = 2e4] = "EC_ROOM_CREATE_NO_PERMISSION", e[e.EC_ROOM_DESTORY_NO_PERMISSION = 20001] = "EC_ROOM_DESTORY_NO_PERMISSION", e[e.EC_ROOM_JOIN_NO_PERMISSION = 20002] = "EC_ROOM_JOIN_NO_PERMISSION", e[e.EC_ROOM_REMOVE_PLAYER_NO_PERMISSION = 20003] = "EC_ROOM_REMOVE_PLAYER_NO_PERMISSION", e[e.EC_ROOM_MODIFY_PROPERTIES_NO_PEMISSION = 20004] = "EC_ROOM_MODIFY_PROPERTIES_NO_PEMISSION", e[e.EC_ROOM_DISSMISS_NO_PERMISSION = 20005] = "EC_ROOM_DISSMISS_NO_PERMISSION", e[e.EC_ROOM_REMOVE_SELF_NO_PERMISSION = 20006] = "EC_ROOM_REMOVE_SELF_NO_PERMISSION", e[e.EC_ROOM_CHECK_LOGIN_SESSION_ERR = 20007] = "EC_ROOM_CHECK_LOGIN_SESSION_ERR", e[e.EC_ROOM_REMOVE_PLAYER_NOT_IN_ROOM = 20008] = "EC_ROOM_REMOVE_PLAYER_NOT_IN_ROOM", e[e.EC_ROOM_PLAYER_ALREADY_IN_ROOM = 20010] = "EC_ROOM_PLAYER_ALREADY_IN_ROOM", e[e.EC_ROOM_PLAYER_NOT_IN_ROOM = 20011] = "EC_ROOM_PLAYER_NOT_IN_ROOM", e[e.EC_ROOM_PLAYERS_EXCEED_LIMIT = 20012] = "EC_ROOM_PLAYERS_EXCEED_LIMIT", e[e.EC_ROOM_JOIN_NOT_ALLOW = 20013] = "EC_ROOM_JOIN_NOT_ALLOW", e[e.EC_ROOM_MAX_PLAYERS_INVALID = 20014] = "EC_ROOM_MAX_PLAYERS_INVALID", e[e.EC_ROOM_CREATE_FAIL = 20015] = "EC_ROOM_CREATE_FAIL", e[e.EC_ROOM_PLAYER_OFFLINE = 20016] = "EC_ROOM_PLAYER_OFFLINE", e[e.EC_ROOM_PARAM_PAGE_INVALID = 20017] = "EC_ROOM_PARAM_PAGE_INVALID", e[e.EC_ROOM_GET_PLAYER_INFO_ERR = 20050] = "EC_ROOM_GET_PLAYER_INFO_ERR", e[e.EC_ROOM_GET_ROOM_INFO_ERR = 20051] = "EC_ROOM_GET_ROOM_INFO_ERR", e[e.EC_ROOM_MODIFY_OWNER_ERR = 20052] = "EC_ROOM_MODIFY_OWNER_ERR", e[e.EC_ROOM_MAX_ROOM_NUMBER_EXCEED_LIMIT = 20053] = "EC_ROOM_MAX_ROOM_NUMBER_EXCEED_LIMIT", e[e.EC_ROOM_REMOVE_REDIS_PLAYER_ROOM_MATCH_ERR = -20052] = "EC_ROOM_REMOVE_REDIS_PLAYER_ROOM_MATCH_ERR", e[e.EC_ROOM_REMOVE_REDIS_ROOM_INFO_ERR = -20053] = "EC_ROOM_REMOVE_REDIS_ROOM_INFO_ERR", e[e.EC_ROOM_REDIS_UPDATE_ERR = -20054] = "EC_ROOM_REDIS_UPDATE_ERR", e[e.EC_ROOM_REDIS_GET_LOCK_ERR = -20055] = "EC_ROOM_REDIS_GET_LOCK_ERR", e[e.EC_ROOM_REDIS_CHECK_LOCK_ERR = -20056] = "EC_ROOM_REDIS_CHECK_LOCK_ERR", e[e.EC_ROOM_REDIS_DEL_LOCK_ERR = -20057] = "EC_ROOM_REDIS_DEL_LOCK_ERR", e[e.EC_ROOM_QUERY_PLAYER_ERR = 20060] = "EC_ROOM_QUERY_PLAYER_ERR", e[e.EC_ROOM_QUERY_GAME_ERR = 20061] = "EC_ROOM_QUERY_GAME_ERR", e[e.EC_ROOM_PLAYER_INFO_NOT_EXIST = 20062] = "EC_ROOM_PLAYER_INFO_NOT_EXIST", e[e.EC_ROOM_GAME_INFO_NOT_EXIST = 20063] = "EC_ROOM_GAME_INFO_NOT_EXIST", e[e.EC_ROOM_HISTORY_INFO_INSERT_ERR = -20064] = "EC_ROOM_HISTORY_INFO_INSERT_ERR", e[e.EC_ROOM_REGION_INFO_NOT_EXIST = 20065] = "EC_ROOM_REGION_INFO_NOT_EXIST", e[e.EC_ROOM_QUERY_REGION_ERR = 20066] = "EC_ROOM_QUERY_REGION_ERR", e[e.EC_ROOM_MODIFY_PLAYER_BUSY = 20070] = "EC_ROOM_MODIFY_PLAYER_BUSY", e[e.EC_ROOM_INFO_UNEXIST = 20080] = "EC_ROOM_INFO_UNEXIST", e[e.EC_ROOM_ALLOCATE_RELAYSVR_IP_PORT_ERR = 20090] = "EC_ROOM_ALLOCATE_RELAYSVR_IP_PORT_ERR", e[e.EC_ROOM_INVALID_PARAMS_TEAM_ID = 20100] = "EC_ROOM_INVALID_PARAMS_TEAM_ID", e[e.EC_ROOM_TEAM_MEMBER_LIMIT_EXCEED = 20101] = "EC_ROOM_TEAM_MEMBER_LIMIT_EXCEED", e[e.EC_ROOM_ALLOCATE_SERVICE_FAIL = -20200] = "EC_ROOM_ALLOCATE_SERVICE_FAIL", e[e.EC_MATCH_NO_ROOM = 3e4] = "EC_MATCH_NO_ROOM", e[e.EC_MATCH_TIMEOUT = 30001] = "EC_MATCH_TIMEOUT", e[e.EC_MATCH_LOGIC_ERR = 30002] = "EC_MATCH_LOGIC_ERR", e[e.EC_MATCH_ERR = 30010] = "EC_MATCH_ERR", e[e.EC_MATCH_PLAYER_IS_IN_MATCH = 30011] = "EC_MATCH_PLAYER_IS_IN_MATCH", e[e.EC_MATCH_PLAYER_NOT_IN_MATCH = 30012] = "EC_MATCH_PLAYER_NOT_IN_MATCH", e[e.EC_MATCH_GET_MATCH_INFO_ERR = 30013] = "EC_MATCH_GET_MATCH_INFO_ERR", e[e.EC_MATCH_UPDATE_MATCH_INFO_ERR = 30014] = "EC_MATCH_UPDATE_MATCH_INFO_ERR", e[e.EC_MATCH_CANCEL_FAILED = 30015] = "EC_MATCH_CANCEL_FAILED", e[e.EC_MATCH_GET_PLAYER_LIST_INFO_ERR = 30016] = "EC_MATCH_GET_PLAYER_LIST_INFO_ERR", e[e.EC_MATCH_CREATE_ROOM_ERR = 30041] = "EC_MATCH_CREATE_ROOM_ERR", e[e.EC_MATCH_JOIN_ROOM_ERR = 30042] = "EC_MATCH_JOIN_ROOM_ERR", e[e.EC_MATCH_INVALID_PARAMS = 30043] = "EC_MATCH_INVALID_PARAMS", e[e.EC_MATCH_GROUP_NUM_EXCEED_LIMIT = 30044] = "EC_MATCH_GROUP_NUM_EXCEED_LIMIT", e[e.EC_MATCH_PLAYER_ID_IS_REPEATED = 30045] = "EC_MATCH_PLAYER_ID_IS_REPEATED", e[e.EC_MATCH_CREATE_ROOM_PLAYER_ALREADY_IN_ROOM = 30050] = "EC_MATCH_CREATE_ROOM_PLAYER_ALREADY_IN_ROOM", e[e.EC_MATCH_QUERY_PLAYER_ERR = 30100] = "EC_MATCH_QUERY_PLAYER_ERR", e[e.EC_MATCH_PLAYER_INFO_NOT_EXIST = 30101] = "EC_MATCH_PLAYER_INFO_NOT_EXIST", e[e.EC_MATCH_QUERY_GAME_ERR = 30102] = "EC_MATCH_QUERY_GAME_ERR", e[e.EC_MATCH_GAME_INFO_NOT_EXIST = 30103] = "EC_MATCH_GAME_INFO_NOT_EXIST", e[e.EC_MATCH_QUERY_REGION_ERR = 30104] = "EC_MATCH_QUERY_REGION_ERR", e[e.EC_MATCH_REGION_INFO_NOT_EXIST = 30105] = "EC_MATCH_REGION_INFO_NOT_EXIST", e[e.EC_MATCH_TEAM_FAIL = 30106] = "EC_MATCH_TEAM_FAIL", e[e.EC_MATCH_PLAY_RULE_NOT_RUNNING = 30107] = "EC_MATCH_PLAY_RULE_NOT_RUNNING", e[e.EC_MATCH_PLAY_ATTR_NOT_FOUND = 30108] = "EC_MATCH_PLAY_ATTR_NOT_FOUND", e[e.EC_MATCH_PLAY_RULE_NOT_FOUND = 30109] = "EC_MATCH_PLAY_RULE_NOT_FOUND", e[e.EC_MATCH_PLAY_RULE_ATTR_SEGMENT_NOT_FOUND = 30110] = "EC_MATCH_PLAY_RULE_ATTR_SEGMENT_NOT_FOUND", e[e.EC_MATCH_PLAY_RULE_FUNC_ERR = 30111] = "EC_MATCH_PLAY_RULE_FUNC_ERR", e[e.EC_MATCH_GET_PLAYER_ATTR_FAIL = 30112] = "EC_MATCH_GET_PLAYER_ATTR_FAIL", e[e.EC_MATCH_GET_TEAM_ATTR_FAIL = 30113] = "EC_MATCH_GET_TEAM_ATTR_FAIL", e[e.EC_MATCH_NONE_TEAM_TYPE_FIT = 30114] = "EC_MATCH_NONE_TEAM_TYPE_FIT", e[e.EC_MATCH_TEAM_TYPE_INVALID = 30115] = "EC_MATCH_TEAM_TYPE_INVALID", e[e.EC_MATCH_PLAYER_ATTR_NOT_FOUND = 30116] = "EC_MATCH_PLAYER_ATTR_NOT_FOUND", e[e.EC_MATCH_REQUEST_ID_NOT_EXIST = 30117] = "EC_MATCH_REQUEST_ID_NOT_EXIST", e[e.EC_MATCH_REQUEST_ID_IS_EXIST = 30118] = "EC_MATCH_REQUEST_ID_IS_EXIST", e[e.EC_MATCH_TEAM_MATCH_FAIL = 30119] = "EC_MATCH_TEAM_MATCH_FAIL", e[e.EC_MATCH_ROBOT_GROUP_NOT_RIGHT = 30120] = "EC_MATCH_ROBOT_GROUP_NOT_RIGHT", e[e.EC_MATCH_ROBOT_TEAM_NOT_RIGHT = 30121] = "EC_MATCH_ROBOT_TEAM_NOT_RIGHT", e[e.EC_MATCH_INNER_LOGIC_ERR = -30150] = "EC_MATCH_INNER_LOGIC_ERR", e[e.EC_MATCH_INNER_PARAMS_ERR = -30160] = "EC_MATCH_INNER_PARAMS_ERR", e[e.EC_MATCH_ROOM_INNER_ADD_NODE_ERR = -30170] = "EC_MATCH_ROOM_INNER_ADD_NODE_ERR", e[e.EC_MATCH_ROOM_INNER_DEL_NODE_ERR = -30171] = "EC_MATCH_ROOM_INNER_DEL_NODE_ERR", e[e.EC_MATCH_RESULT_TYPE_NOT_GSE = -30172] = "EC_MATCH_RESULT_TYPE_NOT_GSE", e[e.EC_MATCH_REQUEST_CANCELED = 30173] = "EC_MATCH_REQUEST_CANCELED", e[e.EC_RELAY_ALREADY_EXISTS = 4e4] = "EC_RELAY_ALREADY_EXISTS", e[e.EC_RELAY_NOT_EXISTS = 40001] = "EC_RELAY_NOT_EXISTS", e[e.EC_RELAY_DATA_EXCEED_LIMITED = 40002] = "EC_RELAY_DATA_EXCEED_LIMITED", e[e.EC_RELAY_MEMBER_ALREADY_EXISTS = 40003] = "EC_RELAY_MEMBER_ALREADY_EXISTS", e[e.EC_RELAY_MEMBER_NOT_EXISTS = 40004] = "EC_RELAY_MEMBER_NOT_EXISTS", e[e.EC_RELAY_STATE_INVALID = 40005] = "EC_RELAY_STATE_INVALID", e[e.EC_RELAY_INVALID_FRAME_RATE = 40006] = "EC_RELAY_INVALID_FRAME_RATE", e[e.EC_RELAY_SET_FRAME_RATE_FORBIDDEN = 40007] = "EC_RELAY_SET_FRAME_RATE_FORBIDDEN", e[e.EC_RELAY_NO_MEMBERS = 40008] = "EC_RELAY_NO_MEMBERS", e[e.EC_RELAY_GAMESVR_SERVICE_NOT_OPEN = 40009] = "EC_RELAY_GAMESVR_SERVICE_NOT_OPEN", e[e.EC_RELAY_REQ_POD_FAIL = 40010] = "EC_RELAY_REQ_POD_FAIL", e[e.EC_RELAY_NO_AVAILABLE_POD = 40011] = "EC_RELAY_NO_AVAILABLE_POD", e[e.EC_RELAY_GET_FRAME_CACHE_FAIL = 40012] = "EC_RELAY_GET_FRAME_CACHE_FAIL", e[e.EC_RELAY_HKV_CACHE_ERROR = 40015] = "EC_RELAY_HKV_CACHE_ERROR", e[e.EC_RELAY_REDIS_CACHE_ERROR = 40016] = "EC_RELAY_REDIS_CACHE_ERROR", e[e.EC_RELAY_NOTIFY_RELAYWORKER_FAIL = 40018] = "EC_RELAY_NOTIFY_RELAYWORKER_FAIL", e[e.EC_RELAY_RESET_RELAY_ROOM_FAIL = 40019] = "EC_RELAY_RESET_RELAY_ROOM_FAIL", e[e.EC_RELAY_CLEAN_RELAY_ROOM_FAIL = 40020] = "EC_RELAY_CLEAN_RELAY_ROOM_FAIL", e[e.EC_RELAY_NO_PERMISSION = 40100] = "EC_RELAY_NO_PERMISSION", e[e.EC_RELAY_NOTIFY_GAMESVR_FAIL = 40200] = "EC_RELAY_NOTIFY_GAMESVR_FAIL", e[e.EC_RELAY_FORWARD_TO_GAMESVR_FAIL = 40201] = "EC_RELAY_FORWARD_TO_GAMESVR_FAIL", e[e.EC_RELAY_FORWARD_TO_CLIENT_FAIL = 40202] = "EC_RELAY_FORWARD_TO_CLIENT_FAIL", e[e.EC_GROUP_OPERATION_FAILED = 7e4] = "EC_GROUP_OPERATION_FAILED", e[e.EC_INVALID_PARAMS_GROUP_NAME = 70001] = "EC_INVALID_PARAMS_GROUP_NAME", e[e.EC_INVALID_PARAMS_GROUP_TYPE = 70002] = "EC_INVALID_PARAMS_GROUP_TYPE", e[e.EC_INVALID_PARAMS_GROUP_CUSTOM_PROPERTIES = 70003] = "EC_INVALID_PARAMS_GROUP_CUSTOM_PROPERTIES", e[e.EC_INVALID_PARAMS_GROUP_PLAYER_NAME = 70004] = "EC_INVALID_PARAMS_GROUP_PLAYER_NAME", e[e.EC_INVALID_PARAMS_GROUP_PLAYER_CUSTOM_STATUS = 70005] = "EC_INVALID_PARAMS_GROUP_PLAYER_CUSTOM_STATUS", e[e.EC_INVALID_PARAMS_GROUP_PLAYER_CUSTOM_PROPERTIES = 70006] = "EC_INVALID_PARAMS_GROUP_PLAYER_CUSTOM_PROPERTIES", e[e.EC_GROUP_MODIFY_OWNER_NO_PERMISSION = 70007] = "EC_GROUP_MODIFY_OWNER_NO_PERMISSION", e[e.EC_INVALID_PARAMS_GROUP_ID = 70008] = "EC_INVALID_PARAMS_GROUP_ID", e[e.EC_INVALID_CHANGE_OPTION = 70009] = "EC_INVALID_CHANGE_OPTION", e[e.EC_INVALID_PARAMS_GROUP_OWNER = 70010] = "EC_INVALID_PARAMS_GROUP_OWNER", e[e.EC_PLAYER_IS_EXIST_GROUP = 70011] = "EC_PLAYER_IS_EXIST_GROUP", e[e.EC_PLAYER_IS_NOT_EXIST_GROUP = 70012] = "EC_PLAYER_IS_NOT_EXIST_GROUP", e[e.EC_REMOVE_PLAYER_ID_IS_EMPTY = 70013] = "EC_REMOVE_PLAYER_ID_IS_EMPTY", e[e.EC_GROUP_REMOVE_PLAYER_NO_PERMISSION = 70014] = "EC_GROUP_REMOVE_PLAYER_NO_PERMISSION", e[e.EC_INVALID_PARAMS_GROUP_RECV_TYPE = 70015] = "EC_INVALID_PARAMS_GROUP_RECV_TYPE", e[e.EC_INVALID_PARAMS_RECV_PLAYER_ID = 70016] = "EC_INVALID_PARAMS_RECV_PLAYER_ID", e[e.EC_INVALID_PARAMS_MESSAGE_LENGTH = 70017] = "EC_INVALID_PARAMS_MESSAGE_LENGTH", e[e.EC_INVALID_PARAMS_MAX_PLAYER = 70018] = "EC_INVALID_PARAMS_MAX_PLAYER", e[e.PERSISTENCE_GROUP_NUM_EXCEED_THE_LIMIT = 70019] = "PERSISTENCE_GROUP_NUM_EXCEED_THE_LIMIT", e[e.EC_INVALID_PARAMS_PLAYER_NOT_IN_GROUP = 70020] = "EC_INVALID_PARAMS_PLAYER_NOT_IN_GROUP", e[e.NO_GROUP_OPERATION_PERMISSION = 70021] = "NO_GROUP_OPERATION_PERMISSION", e[e.EC_OPERATION_FAILED_GROUP_FORBID_JOIN = 70022] = "EC_OPERATION_FAILED_GROUP_FORBID_JOIN", e[e.EC_GROUP_CHAT_FREQUENCY_LIMIT = 70023] = "EC_GROUP_CHAT_FREQUENCY_LIMIT", e[e.EC_GROUP_PLAYER_NUM_LIMIT_EXCEED = 70024] = "EC_GROUP_PLAYER_NUM_LIMIT_EXCEED", e[e.EC_PLAYER_GROUP_NUM_LIMIT_EXCEED = 70025] = "EC_PLAYER_GROUP_NUM_LIMIT_EXCEED", e[e.EC_GROUP_NOT_EXIST = 70026] = "EC_GROUP_NOT_EXIST", e[e.EC_INVALID_PARAMS = 6e4] = "EC_INVALID_PARAMS", e[e.EC_INVALID_PARAMS_PLAY_MODE_VERSION = 60001] = "EC_INVALID_PARAMS_PLAY_MODE_VERSION", e[e.EC_INVALID_PARAMS_PLAY_MODE_RULETYPE = 60002] = "EC_INVALID_PARAMS_PLAY_MODE_RULETYPE", e[e.EC_INVALID_PARAMS_PLAY_MODE_EXPRESSION = 60003] = "EC_INVALID_PARAMS_PLAY_MODE_EXPRESSION", e[e.EC_INVALID_PARAMS_PLAY_MODE_TEAM = 60004] = "EC_INVALID_PARAMS_PLAY_MODE_TEAM", e[e.EC_INVALID_PARAMS_MSGQ_ENCODE = 60020] = "EC_INVALID_PARAMS_MSGQ_ENCODE", e[e.EC_INVALID_PARAMS_MSGQ_DECODE = 60021] = "EC_INVALID_PARAMS_MSGQ_DECODE", e[e.EC_INVALID_PARAMS_GAME_ID = 61e3] = "EC_INVALID_PARAMS_GAME_ID", e[e.EC_INVALID_PARAMS_PLAYER_INFO = 61001] = "EC_INVALID_PARAMS_PLAYER_INFO", e[e.EC_INVALID_PARAMS_MAX_PLAYERS = 61002] = "EC_INVALID_PARAMS_MAX_PLAYERS", e[e.EC_INVALID_PARAMS_ROOM_TYPE = 61003] = "EC_INVALID_PARAMS_ROOM_TYPE", e[e.EC_INVALID_PARAMS_PLAYER_ID = 61004] = "EC_INVALID_PARAMS_PLAYER_ID", e[e.EC_INVALID_PARAMS_MATCH_TYPE = 61005] = "EC_INVALID_PARAMS_MATCH_TYPE", e[e.EC_INVALID_PARAMS_MATCH_CODE = 61006] = "EC_INVALID_PARAMS_MATCH_CODE", e[e.EC_INVALID_PARAMS_OPEN_ID = 61007] = "EC_INVALID_PARAMS_OPEN_ID", e[e.EC_INVALID_PARAMS_PLATFORM = 61008] = "EC_INVALID_PARAMS_PLATFORM", e[e.EC_INVALID_PARAMS_TIMESTAMP = 61009] = "EC_INVALID_PARAMS_TIMESTAMP", e[e.EC_INVALID_PARAMS_SIGN = 61010] = "EC_INVALID_PARAMS_SIGN", e[e.EC_INVALID_PARAMS_NONCE = 61011] = "EC_INVALID_PARAMS_NONCE", e[e.EC_INVALID_PARAMS_TOKEN = 61012] = "EC_INVALID_PARAMS_TOKEN", e[e.EC_INVALID_PARAMS_NETWORK_STATE = 61013] = "EC_INVALID_PARAMS_NETWORK_STATE", e[e.EC_INVALID_PARAMS_ROOM_NAME = 61014] = "EC_INVALID_PARAMS_ROOM_NAME", e[e.EC_INVALID_PARAMS_CREATE_ROOM_TYPE = 61015] = "EC_INVALID_PARAMS_CREATE_ROOM_TYPE", e[e.EC_INVALID_PARAMS_DEVICE_ID = 61016] = "EC_INVALID_PARAMS_DEVICE_ID", e[e.EC_INVALID_PARAMS_PAGE_NO = 61017] = "EC_INVALID_PARAMS_PAGE_NO", e[e.EC_INVALID_PARAMS_PAGE_SIZE = 61018] = "EC_INVALID_PARAMS_PAGE_SIZE", e[e.EC_INVALID_PARAMS_PLAYER_LIST = 61019] = "EC_INVALID_PARAMS_PLAYER_LIST", e[e.EC_INVALID_PARAMS_MESSAGE = 61020] = "EC_INVALID_PARAMS_MESSAGE", e[e.EC_INVALID_CHANGE_ROOM_OPTION = 61021] = "EC_INVALID_CHANGE_ROOM_OPTION", e[e.EC_INVALID_PARAMS_REGION = 61022] = "EC_INVALID_PARAMS_REGION", e[e.EC_INVALID_PARAMS_OWNER = 61023] = "EC_INVALID_PARAMS_OWNER", e[e.EC_INVALID_PARAMS_OWNER_OPEN_ID = 61024] = "EC_INVALID_PARAMS_OWNER_OPEN_ID", e[e.EC_INVALID_PARAMS_OPEN_ID_DUPLICATE = 61026] = "EC_INVALID_PARAMS_OPEN_ID_DUPLICATE", e[e.EC_INVALID_PARAMS_ROOM_CREATE_TYPE = 61027] = "EC_INVALID_PARAMS_ROOM_CREATE_TYPE", e[e.EC_MYSPP_SYSTEM_ERR = -1e3] = "EC_MYSPP_SYSTEM_ERR", e[e.EC_REDIS_KEY_NOT_EXIST = -66e3] = "EC_REDIS_KEY_NOT_EXIST", e[e.EC_REDIS_SET_OP_ERR = -66001] = "EC_REDIS_SET_OP_ERR", e[e.EC_REDIS_GET_OP_ERR = -66002] = "EC_REDIS_GET_OP_ERR", e[e.EC_REDIS_DEL_OP_ERR = -66003] = "EC_REDIS_DEL_OP_ERR", e[e.EC_REDIS_EXPIRE_OP_ERR = -66004] = "EC_REDIS_EXPIRE_OP_ERR", e[e.EC_REDIS_LOCK_OP_ERR = -66005] = "EC_REDIS_LOCK_OP_ERR", e[e.EC_REDIS_LOCK_ALREADY_EXIST = -66006] = "EC_REDIS_LOCK_ALREADY_EXIST", e[e.EC_REDIS_LIST_OP_ERR = -66020] = "EC_REDIS_LIST_OP_ERR", e[e.EC_REDIS_LIST_POP_EMPTY = -66021] = "EC_REDIS_LIST_POP_EMPTY", e[e.EC_REDIS_POOL_GET_INSTANCE_FAIL = -66022] = "EC_REDIS_POOL_GET_INSTANCE_FAIL", e[e.EC_REDIS_SET_IS_EMPTY = -66023] = "EC_REDIS_SET_IS_EMPTY", e[e.EC_REDIS_OP_INVALID_PARAMS = -66024] = "EC_REDIS_OP_INVALID_PARAMS", e[e.EC_MYSQL_NO_ROW_FOUND = -66100] = "EC_MYSQL_NO_ROW_FOUND", e[e.EC_MYSQL_MULTI_ROW_FOUND = -66101] = "EC_MYSQL_MULTI_ROW_FOUND", e[e.EC_MYSQL_INSERT_FAIL = -66102] = "EC_MYSQL_INSERT_FAIL", e[e.EC_MYSQL_DELETE_FAIL = -66103] = "EC_MYSQL_DELETE_FAIL", e[e.EC_MYSQL_UPDATE_FAIL = -66104] = "EC_MYSQL_UPDATE_FAIL", e[e.EC_MYSQL_QUERYS_FAIL = -66105] = "EC_MYSQL_QUERYS_FAIL", e[e.EC_PB_SERIALIZE_TO_STR_ERR = -66200] = "EC_PB_SERIALIZE_TO_STR_ERR", e[e.EC_PB_PARSE_FROM_STR_ERR = -66201] = "EC_PB_PARSE_FROM_STR_ERR", e[e.EC_DATA_FORMAT_ERR = -66210] = "EC_DATA_FORMAT_ERR", e[e.EC_JSON_FORMAT_ERR = -66211] = "EC_JSON_FORMAT_ERR", e[e.EC_JSON_PLAY_MODE_FORMAT_ERR = -66212] = "EC_JSON_PLAY_MODE_FORMAT_ERR", e[e.EC_JSON_PLAY_MODE_PARISE_ERR = -66213] = "EC_JSON_PLAY_MODE_PARISE_ERR", e[e.EC_INVALID_PARAMS_RECORE_ID = -66601] = "EC_INVALID_PARAMS_RECORE_ID", e[e.EC_HASHID_ERR = -66700] = "EC_HASHID_ERR", e[e.EC_HASHID_ENCODE_ERR = -66701] = "EC_HASHID_ENCODE_ERR", e[e.EC_HASHID_DECODE_ERR = -66702] = "EC_HASHID_DECODE_ERR", e[e.EC_CONF_ROOM_ID_BUCKET_ERR = -66801] = "EC_CONF_ROOM_ID_BUCKET_ERR", e[e.EC_SDK_SEND_FAIL = 90001] = "EC_SDK_SEND_FAIL", e[e.EC_SDK_UNINIT = 90002] = "EC_SDK_UNINIT", e[e.EC_SDK_RES_TIMEOUT = 90003] = "EC_SDK_RES_TIMEOUT", e[e.EC_SDK_NO_LOGIN = 90004] = "EC_SDK_NO_LOGIN", e[e.EC_SDK_NO_CHECK_LOGIN = 90005] = "EC_SDK_NO_CHECK_LOGIN", e[e.EC_SDK_SOCKET_ERROR = 90006] = "EC_SDK_SOCKET_ERROR", e[e.EC_SDK_SOCKET_CLOSE = 90007] = "EC_SDK_SOCKET_CLOSE", e[e.EC_SDK_NO_ROOM = 90008] = "EC_SDK_NO_ROOM", e[e.EC_SDK_ENCODE_PARAM_FAIL = 90009] = "EC_SDK_ENCODE_PARAM_FAIL", e[e.EC_SDK_INVALID_PARAMS = 90010] = "EC_SDK_INVALID_PARAMS";
        }(_e || (_e = {})), function (e) {
          e[e.COMMON_OFFLINE = 0] = "COMMON_OFFLINE", e[e.COMMON_ONLINE = 1] = "COMMON_ONLINE", e[e.RELAY_OFFLINE = 2] = "RELAY_OFFLINE", e[e.RELAY_ONLINE = 3] = "RELAY_ONLINE";
        }(Ee || (Ee = {})), function (e) {
          e[e.COMMON_CREATE = 0] = "COMMON_CREATE", e[e.MATCH_CREATE = 1] = "MATCH_CREATE", e[e.THIRD_PARTY_CREATE = 2] = "THIRD_PARTY_CREATE";
        }(le || (le = {})), function (e) {
          e[e.STOP = 0] = "STOP", e[e.START = 1] = "START";
        }(de || (de = {})), function (e) {
          e[e.COMMON_JOIN = 0] = "COMMON_JOIN", e[e.MATCH_JOIN = 1] = "MATCH_JOIN";
        }(ue || (ue = {})), function (e) {
          e[e.ROOM_NAME = 0] = "ROOM_NAME", e[e.OWNER = 1] = "OWNER", e[e.IS_VIEWED = 2] = "IS_VIEWED", e[e.IS_INVITED = 3] = "IS_INVITED", e[e.IS_PRIVATE = 4] = "IS_PRIVATE", e[e.CUSTOM_PROPERTIES = 5] = "CUSTOM_PROPERTIES", e[e.IS_FORBID_JOIN = 6] = "IS_FORBID_JOIN";
        }(ce || (ce = {})), function (e) {
          e[e.PENDING = 0] = "PENDING", e[e.MATCHING = 1] = "MATCHING", e[e.SUCCESS = 3] = "SUCCESS", e[e.TIMEOUT = 4] = "TIMEOUT";
        }(he || (he = {})), function (e) {
          e[e.MP_MGOBE = 0] = "MP_MGOBE", e[e.MP_GSE = 1] = "MP_GSE", e[e.MP_THIRDPARTY = -1] = "MP_THIRDPARTY";
        }(pe || (pe = {})), function (e) {
          e[e.PS_UNKNOW = 0] = "PS_UNKNOW", e[e.PS_PENDING = 2] = "PS_PENDING", e[e.PS_FULFILLED = 3] = "PS_FULFILLED", e[e.PS_CANCELLED = 4] = "PS_CANCELLED", e[e.PS_TIMED_OUT = 5] = "PS_TIMED_OUT", e[e.PS_FAILED = 6] = "PS_FAILED", e[e.PS_TIMED_OUT_MQ = 100] = "PS_TIMED_OUT_MQ", e[e.PS_PLACE_MATCH_FAIL = 101] = "PS_PLACE_MATCH_FAIL";
        }(Re || (Re = {})), function (e) {
          e[e.ROOM_SIMPLE = 1] = "ROOM_SIMPLE", e[e.PLAYER_COMPLEX = 2] = "PLAYER_COMPLEX";
        }(fe || (fe = {})), function (e) {
          e[e.E_GS_FORWARDTYPE_DEFAULT = 0] = "E_GS_FORWARDTYPE_DEFAULT", e[e.E_GS_FORWARDTYPE_NOTIFY_CONNECTION = 1] = "E_GS_FORWARDTYPE_NOTIFY_CONNECTION", e[e.E_GS_FORWARDTYPE_NOTIFY_ROOM_EVENT = 2] = "E_GS_FORWARDTYPE_NOTIFY_ROOM_EVENT", e[e.E_GS_FORWARDTYPE_NOTIFY_COM_EVENT = 3] = "E_GS_FORWARDTYPE_NOTIFY_COM_EVENT", e[e.E_GS_FORWARDTYPE_CLIENT_SENDTO_GAMESVR = 4] = "E_GS_FORWARDTYPE_CLIENT_SENDTO_GAMESVR";
        }(me || (me = {})), function (e) {
          e[e.GROUP_LIMITED = 0] = "GROUP_LIMITED", e[e.GROUP_MANY = 1] = "GROUP_MANY";
        }(Se || (Se = {})), function (e) {
          e[e.GROUP_NAME = 0] = "GROUP_NAME", e[e.GROUP_OWNER = 1] = "GROUP_OWNER", e[e.GROUP_CUSTOM_PROPERTIES = 2] = "GROUP_CUSTOM_PROPERTIES", e[e.GROUP_IS_FORBID_JOIN = 3] = "GROUP_IS_FORBID_JOIN";
        }(ye || (ye = {})), function (e) {
          e[e.GROUP_ALL = 1] = "GROUP_ALL", e[e.GROUP_OTHERS = 2] = "GROUP_OTHERS", e[e.GROUP_SOME = 3] = "GROUP_SOME";
        }(Ie || (Ie = {}));
        const ge = {
          ClientSendServerReqWrap1: void 0,
          ServerSendClientBstWrap1: void 0,
          ClientSendServerRspWrap1: void 0,
          ClientSendServerReqWrap2: void 0,
          ClientSendServerRspWrap2: void 0,
          EventInfo: void 0,
          EventNetworkState: void 0,
          HeartBeatReq: void 0,
          HeartBeatRsp: void 0,
          ServerSendClientBstWrap2: void 0,
          NOUSEServerSendClientBstRspWrap2: void 0,
          CheckLoginReq: void 0,
          CheckLoginRsp: void 0,
          PushBodyType: void 0,
          LoginReq: void 0,
          LoginRsp: void 0,
          SdkConfig: void 0,
          LogoutReq: void 0,
          LogoutRsp: void 0,
          StartFrameSyncReq: void 0,
          StartFrameSyncRsp: void 0,
          StopFrameSyncReq: void 0,
          StopFrameSyncRsp: void 0,
          FrameItem: void 0,
          SendFrameReq: void 0,
          SendFrameRsp: void 0,
          FrameExtInfo: void 0,
          Frame: void 0,
          RequestFrameReq: void 0,
          RequestFrameRsp: void 0,
          PlayerInfo: void 0,
          TeamInfo: void 0,
          RoomInfo: void 0,
          CreateRoomReq: void 0,
          CreateRoomRsp: void 0,
          JoinRoomReq: void 0,
          JoinRoomRsp: void 0,
          LeaveRoomReq: void 0,
          LeaveRoomRsp: void 0,
          DismissRoomReq: void 0,
          DismissRoomRsp: void 0,
          ChangeRoomReq: void 0,
          ChangeRoomRsp: void 0,
          SvrChangeRoomReq: void 0,
          SvrChangeRoomRsp: void 0,
          RemovePlayerReq: void 0,
          RemovePlayerRsp: void 0,
          SvrRemovePlayerReq: void 0,
          SvrRemovePlayerRsp: void 0,
          GetRoomByRoomIdReq: void 0,
          GetRoomByRoomIdRsp: void 0,
          SendToClientReq: void 0,
          SendToClientRsp: void 0,
          ChangeCustomPlayerStatusReq: void 0,
          ChangeCustomPlayerStatusRsp: void 0,
          SvrChangeCustomPlayerStatusReq: void 0,
          SvrChangeCustomPlayerStatusRsp: void 0,
          ChangePlayerNetworkStateReq: void 0,
          ChangePlayerNetworkStateRsp: void 0,
          GetRoomListReq: void 0,
          GetRoomListRsp: void 0,
          MatchRoomSimpleReq: void 0,
          MatchRoomSimpleRsp: void 0,
          MatchRoomComplexReq: void 0,
          MatchRoomComplexRsp: void 0,
          MatchPlayersSimpleReq: void 0,
          MatchPlayersSimpleRsp: void 0,
          MatchAttribute: void 0,
          MatchPlayerInfo: void 0,
          MatchGroupPlayerInfo: void 0,
          MatchGroupInfo: void 0,
          MatchTeamInfo: void 0,
          ProgressPlayerInfo: void 0,
          MatchmakerTeam: void 0,
          MatchmakerData: void 0,
          MatchPlacementInfo: void 0,
          MgobePlacementJob: void 0,
          MgobePlacementResult: void 0,
          GsePlacementJob: void 0,
          GsePlacementResult: void 0,
          ThirdpartyPlacementJob: void 0,
          ThirdpartyPlacementResult: void 0,
          GsePlayerLatency: void 0,
          GseGameProperty: void 0,
          GsePlacedPlayerSession: void 0,
          GseGameSession: void 0,
          PlaceMatchReq: void 0,
          PlaceMatchRsp: void 0,
          MatchPlacementResult: void 0,
          UpdateMatchPlacementResultReq: void 0,
          UpdateMatchPlacementResultRsp: void 0,
          CmqPlacementResult: void 0,
          MatchPlayersReq: void 0,
          MatchPlayersRsp: void 0,
          MatchGroupReq: void 0,
          MatchGroupRsp: void 0,
          DescribeMatchReq: void 0,
          MatchProgress: void 0,
          DescribeMatchRsp: void 0,
          CancelPlayerMatchReq: void 0,
          CancelPlayerMatchRsp: void 0,
          ApiMatchGroupReq: void 0,
          ApiMatchGroupRsp: void 0,
          ApiDescribeMatchReq: void 0,
          ApiDescribeMatchRsp: void 0,
          GameSessionConnectionInfo: void 0,
          MatchedPlayerSession: void 0,
          StartMatchPlacement: void 0,
          DesiredPlayerSession: void 0,
          GameProperty: void 0,
          ApiCancelPlayerMatchReq: void 0,
          ApiCancelPlayerMatchRsp: void 0,
          CreateRoomBst: void 0,
          DestroyRoomBst: void 0,
          JoinRoomBst: void 0,
          LeaveRoomBst: void 0,
          RemovePlayerBst: void 0,
          DismissRoomBst: void 0,
          ChangeRoomBst: void 0,
          RecvFromClientBst: void 0,
          ChangeCustomPlayerStatusBst: void 0,
          ChangePlayerNetworkStateBst: void 0,
          MatchTimeoutBst: void 0,
          CancelMatchBst: void 0,
          MatchPlayersBst: void 0,
          StartFrameSyncBst: void 0,
          StopFrameSyncBst: void 0,
          RecvFrameBst: void 0,
          GameSvrCommunication: void 0,
          NotifyRelayConnectionReq: void 0,
          NotifyRoomEventReq: void 0,
          SendToGameSvrReq: void 0,
          SendToGameSvrRsp: void 0,
          RecvFromGameSvrBst: void 0,
          ClientRecvFromGameSvrRsp: void 0,
          GroupInfo: void 0,
          GroupPlayerInfo: void 0,
          CreateGroupReq: void 0,
          CreateGroupRsp: void 0,
          JoinGroupReq: void 0,
          JoinGroupRsp: void 0,
          LeaveGroupReq: void 0,
          LeaveGroupRsp: void 0,
          DismissGroupReq: void 0,
          DismissGroupRsp: void 0,
          ChangeGroupReq: void 0,
          ChangeGroupRsp: void 0,
          RemoveGroupPlayerReq: void 0,
          RemoveGroupPlayerRsp: void 0,
          GetGroupByGroupIdReq: void 0,
          GetGroupByGroupIdRsp: void 0,
          GetMyGroupsReq: void 0,
          GetMyGroupsRsp: void 0,
          ChangeCustomGroupPlayerStatusReq: void 0,
          ChangeCustomGroupPlayerStatusRsp: void 0,
          SendToGroupClientReq: void 0,
          SendToGroupClientRsp: void 0,
          GroupPlayers: void 0,
          ChangeGroupPlayerNetworkReq: void 0,
          ChangeGroupPlayerNetworkRsp: void 0,
          JoinGroupBst: void 0,
          LeaveGroupBst: void 0,
          DismissGroupBst: void 0,
          ChangeGroupBst: void 0,
          RemoveGroupPlayerBst: void 0,
          ChangeGroupPlayerNetworkStateBst: void 0,
          ChangeCustomGroupPlayerStatusBst: void 0,
          RecvFromGroupClientBst: void 0
        },
              Ce = o.QAppProtoErrCode;
        var Te;
        !function (e) {
          e.EC_SDK_SEND_FAIL = "发送失败", e.EC_SDK_UNINIT = "未初始化", e.EC_SDK_RES_TIMEOUT = "发送超时", e.EC_SDK_NO_LOGIN = "未登录", e.EC_SDK_NO_CHECK_LOGIN = "CheckLogin失败", e.EC_SDK_SOCKET_ERROR = "Socket错误", e.EC_SDK_SOCKET_CLOSE = "Socket断开", e.EC_SDK_NO_ROOM = "无房间信息";
        }(Te || (Te = {}));
        const Oe = {};
        Oe[Ce.EC_SDK_SEND_FAIL] = Te.EC_SDK_SEND_FAIL, Oe[Ce.EC_SDK_UNINIT] = Te.EC_SDK_UNINIT, Oe[Ce.EC_SDK_RES_TIMEOUT] = Te.EC_SDK_RES_TIMEOUT, Oe[Ce.EC_SDK_NO_LOGIN] = Te.EC_SDK_NO_LOGIN, Oe[Ce.EC_SDK_NO_CHECK_LOGIN] = Te.EC_SDK_NO_CHECK_LOGIN, Oe[Ce.EC_SDK_SOCKET_ERROR] = Te.EC_SDK_SOCKET_ERROR, Oe[Ce.EC_SDK_SOCKET_CLOSE] = Te.EC_SDK_SOCKET_CLOSE, Oe[Ce.EC_SDK_NO_ROOM] = Te.EC_SDK_NO_ROOM;
        var Ae,
            Me = Ce;
        !function (e) {
          let t, n, r, i, o, s, a;
          !function (e) {
            e[e.ROOM_ALL = 1] = "ROOM_ALL", e[e.ROOM_OTHERS = 2] = "ROOM_OTHERS", e[e.ROOM_SOME = 3] = "ROOM_SOME";
          }(t = e.RecvType || (e.RecvType = {})), function (e) {
            e[e.ROOM_SIMPLE = 1] = "ROOM_SIMPLE", e[e.PLAYER_COMPLEX = 2] = "PLAYER_COMPLEX";
          }(n = e.MatchType || (e.MatchType = {})), function (e) {
            e[e.COMMON_CREATE = 0] = "COMMON_CREATE", e[e.MATCH_CREATE = 1] = "MATCH_CREATE", e[e.THIRD_PARTY_CREATE = 2] = "THIRD_PARTY_CREATE";
          }(r = e.CreateRoomType || (e.CreateRoomType = {})), function (e) {
            e[e.COMMON_OFFLINE = 0] = "COMMON_OFFLINE", e[e.COMMON_ONLINE = 1] = "COMMON_ONLINE", e[e.RELAY_OFFLINE = 2] = "RELAY_OFFLINE", e[e.RELAY_ONLINE = 3] = "RELAY_ONLINE";
          }(i = e.NetworkState || (e.NetworkState = {})), function (e) {
            e[e.STOP = 0] = "STOP", e[e.START = 1] = "START";
          }(o = e.FrameSyncState || (e.FrameSyncState = {})), function (e) {
            e[e.GROUP_LIMITED = 0] = "GROUP_LIMITED", e[e.GROUP_MANY = 1] = "GROUP_MANY";
          }(s = e.GroupType || (e.GroupType = {})), function (e) {
            e[e.GROUP_ALL = 1] = "GROUP_ALL", e[e.GROUP_OTHERS = 2] = "GROUP_OTHERS", e[e.GROUP_SOME = 3] = "GROUP_SOME";
          }(a = e.GroupRecvType || (e.GroupRecvType = {}));
        }(Ae || (Ae = {}));
        var Pe = {
          get CreateRoomType() {
            return o.CreateRoomType;
          },

          get MatchType() {
            return o.MatchType;
          },

          get NetworkState() {
            return o.NetworkState;
          },

          get FrameSyncState() {
            return o.FrameSyncState;
          },

          get RecvType() {
            return Ae.RecvType;
          },

          get GroupRecvType() {
            return Ae.GroupRecvType;
          },

          get GroupType() {
            return Ae.GroupType;
          }

        };

        const ve = n(2),
              Ne = (e, t) => void 0 === t ? null : t,
              Le = {
          pingTimeout: 5e3,
          reconnectInterval: 500,
          reconnectMaxTimes: 15,
          resendInterval: 1e3,
          resendTimeout: 2e4,
          url: void 0,
          enableUDP: !1,
          isAutoRequestFrame: !1,
          cacertNativeUrl: ""
        },
              be = JSON.stringify(Le, Ne),
              De = {
          version: ve.version,
          appName: void 0,
          cmd: "",
          seq: void 0,
          clientIp: void 0,
          serviceIp: void 0,
          business: void 0,
          authKey: void 0,
          authType: void 0,
          authIp: void 0,
          gameId: void 0,
          uid: void 0,
          playerId: void 0,
          body: void 0
        },
              we = JSON.stringify(De, Ne),
              Ge = {
          gameId: void 0,
          openId: void 0,
          secretKey: void 0,
          createSignature: void 0
        },
              Ue = JSON.stringify(Ge, Ne);

        var Ye, ke, Fe, qe;
        !function (e) {
          let t = {};
          e.getInfo = () => t, e.setInfo = e => t = e;
        }(Ye || (Ye = {})), function (e) {
          let t;
          !function (e) {
            e[e.INITED = 1] = "INITED", e[e.INITING = 2] = "INITING", e[e.UNINIT = 3] = "UNINIT";
          }(t = e.StatusType || (e.StatusType = {}));
          let n = t.UNINIT;
          e.isInited = () => n === t.INITED, e.isIniting = () => n === t.INITING, e.isUnInit = () => n === t.UNINIT, e.setStatus = e => n = e;
        }(ke || (ke = {})), function (e) {
          let t;
          !function (e) {
            e[e.LOGIN = 1] = "LOGIN", e[e.LOGINING = 2] = "LOGINING", e[e.LOGOUT = 3] = "LOGOUT", e[e.LOGOUTING = 4] = "LOGOUTING";
          }(t = e.StatusType || (e.StatusType = {}));
          let n = t.LOGOUT,
              r = 0,
              i = "";
          e.isStatus = e => n === e, e.setStatus = e => {
            n = e, e === t.LOGIN && (r = 0);
          }, e.setErrCode = (e, t) => {
            r = e, i = t;
          }, e.getErrCode = () => r, e.getErrMsg = () => i;
        }(Fe || (Fe = {})), function (e) {
          let t;
          !function (e) {
            e[e.CHECKING = 1] = "CHECKING", e[e.CHECKED = 2] = "CHECKED", e[e.OFFLINE = 3] = "OFFLINE";
          }(t = e.StatusType || (e.StatusType = {}));
          let n = t.CHECKING;
          e.isChecked = () => n === t.CHECKED, e.isOffline = () => n === t.OFFLINE, e.setStatus = e => n = e;
          let r = "";
          e.setRouteId = e => r = e, e.getRouteId = () => r;
        }(qe || (qe = {}));
        const He = o.ClientSendServerReqWrap2Cmd,
              xe = o.ServerSendClientBstWrap2Type,
              Be = {
          initServerTime: 0,
          offset: 0,

          setServerTime(e) {
            Be.initServerTime = e, Be.offset = e - Date.now();
          },

          getServerTime_UTC_8: () => Date.now() + Be.offset
        };

        function Ve() {
          return !!("undefined" != typeof cc && "undefined" != typeof WebSocket && "undefined" != typeof XMLHttpRequest && cc.game && "function" == typeof cc.game.on && cc.game.EVENT_HIDE && cc.game.EVENT_SHOW && cc.sys && cc.sys.isNative);
        }

        const Qe = {};
        Qe.connectSocket = a(e => new WebSocket(e, [], Le.cacertNativeUrl)), Qe.request = E, Qe.onHide = e => cc.game.on(cc.game.EVENT_HIDE, e), Qe.offHide = e => cc.game.off(cc.game.EVENT_HIDE, e), Qe.onShow = e => cc.game.on(cc.game.EVENT_SHOW, e), Qe.offShow = e => cc.game.off(cc.game.EVENT_SHOW, e), Qe.getStorageSync = p, Qe.setStorageSync = R, Qe.removeStorageSync = f, Qe.getUserInfo = m, Qe.getSystemInfoSync = S, Qe.getLocation = y, Qe.getNetworkType = I, Qe.createUDPSocket = null, Qe.channel = r.COCOS_NATIVE, "undefined" != typeof window ? Qe.root = window : Qe.root = {};
        let We = {};

        function Ke() {
          if ("undefined" == typeof tt) return !1;
          if ("undefined" == typeof GameGlobal) return !1;
          if (!tt.onHide) return !1;
          if (!tt.offHide) return !1;
          if (!tt.onShow) return !1;
          if (!tt.offShow) return !1;
          if (!tt.getStorageSync) return !1;
          if (!tt.setStorageSync) return !1;
          if (!tt.connectSocket) return !1;
          if (!tt.request) return !1;

          try {
            const e = tt.getSystemInfoSync();
            if (!e) return !1;
            if (!e.appName) return !1;
            if (!(tt.env.USER_DATA_PATH + "").toLowerCase().startsWith("ttfile")) return !1;
          } catch (e) {
            return !1;
          }

          return !0;
        }

        Ke() && (We = tt);
        const je = {},
              Je = g("connectSocket", We);
        je.connectSocket = e => {
          const t = Je(e);
          let n = 0,
              r = null;
          const i = {
            onClose: e => {
              r = t => {
                e && e(t), r = null;
              }, t.onClose(e => {
                n = 3, r && r(e);
              });
            },
            onOpen: e => {
              t.onOpen(t => {
                n = 1, e && e(t);
              });
            },
            onError: e => {
              t.onError(r => {
                n = 3, t.close(), e && e(r);
              });
            },
            onMessage: e => t.onMessage(e),
            close: () => {
              n = 3, t.close();
            },
            send: ({
              data: e,
              fail: n,
              success: r
            }) => t.send({
              data: e,
              fail: n,
              success: r
            }),

            get readyState() {
              return n;
            },

            CONNECTING: 0,
            OPEN: 1,
            CLOSING: 2,
            CLOSED: 3
          };
          return setTimeout(() => {
            i && i.readyState === i.CONNECTING && (console.log("CONNECTING TIMEOUT: NO CALLBACK"), i.close(), r && r({}));
          }, 5e3), i;
        }, je.request = g("request", We), je.onHide = g("onHide", We), je.offHide = g("offHide", We), je.onShow = g("onShow", We), je.offShow = g("offShow", We), je.getStorageSync = g("getStorageSync", We), je.setStorageSync = g("setStorageSync", We), je.removeStorageSync = g("removeStorageSync", We), je.getUserInfo = g("getUserInfo", We), je.getSystemInfoSync = g("getSystemInfoSync", We), je.getLocation = g("getLocation", We), je.getNetworkType = g("getNetworkType", We), je.createUDPSocket = g("createUDPSocket", We), je.channel = r.TT, "undefined" != typeof GameGlobal && (je.root = GameGlobal);
        let Xe = s,
            ze = r.UNKNOWN,
            $e = i.UNKNOWN;
        L() ? (Xe = b, $e = function () {
          if (!L()) return i.UNKNOWN;
          const e = swan.getSystemInfoSync(),
                t = e ? e.system + "" : "";
          return t.includes("Android") ? i.ANDROID : t.includes("iOS") ? i.IOS : i.UNKNOWN;
        }()) : M() ? (Xe = P, $e = function () {
          if (!M()) return i.UNKNOWN;
          const e = qq.getSystemInfoSync(),
                t = e ? e.system + "" : "";
          return t.includes("Android") ? i.ANDROID : t.includes("iOS") ? i.IOS : i.UNKNOWN;
        }()) : X() ? (Xe = te, $e = function () {
          if (!X()) return i.UNKNOWN;
          const e = qq.getSystemInfoSync(),
                t = e ? e.system + "" : "";
          return t.includes("Android") ? i.ANDROID : t.includes("iOS") ? i.IOS : i.UNKNOWN;
        }()) : G() ? (Xe = U, $e = G() ? i.ANDROID : i.UNKNOWN) : k() ? (Xe = F, $e = k() ? i.ANDROID : i.UNKNOWN) : Ve() ? (Xe = Qe, $e = Ve() ? cc.sys.os === cc.sys.OS_ANDROID ? i.ANDROID : cc.sys.os === cc.sys.OS_IOS ? i.IOS : i.UNKNOWN : i.UNKNOWN) : Ke() ? (Xe = je, $e = function () {
          if (!Ke()) return i.UNKNOWN;
          const e = tt.getSystemInfoSync(),
                t = e ? e.system + "" : "";
          return t.includes("Android") ? i.ANDROID : t.includes("iOS") ? i.IOS : i.UNKNOWN;
        }()) : T() ? (Xe = O, $e = function () {
          if (!T()) return i.UNKNOWN;
          const e = wx.getSystemInfoSync(),
                t = e ? e.system + "" : "";
          return t.includes("Android") ? i.ANDROID : t.includes("iOS") ? i.IOS : i.UNKNOWN;
        }()) : H() && (Xe = W, $e = function () {
          if (!H()) return i.UNKNOWN;
          const e = wx.getSystemInfoSync(),
                t = e ? e.system + "" : "";
          return t.includes("Android") ? i.ANDROID : t.includes("iOS") ? i.IOS : i.UNKNOWN;
        }()), Xe.globalData = {}, ze = Xe.channel;

        class Ze {
          constructor(e = -1) {
            this.id = e;
          }

        }

        const et = (e, t, n) => {
          clearTimeout(e.id), e.id = setTimeout(t, n);
        },
              nt = (...e) => {
          e.forEach(e => e && clearTimeout(e.id));
        },
              rt = n(2);

        class it {}

        it.enable = !1, it.exclude = [], it.callback = e => console.log(...e), it.log = (...e) => {
          if (!it.enable) return;
          if (Array.isArray(it.exclude) && it.exclude.findIndex(t => t === e[0]) >= 0) return;
          const t = [`DEBUGGER_v${rt.version}_${rt.sdkType}_${ze} ` + Date.now()].concat(e);
          "function" == typeof it.callback && it.callback(t);
        }, Object.defineProperty(it, "log", {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: it.log
        });
        var ot = it;
        const st = n(3),
              at = n(4),
              _t = n(7).default,
              Et = new _t(ut(), 16),
              lt = new _t(ut(), 32);
        let dt = 1;

        function ut() {
          let e = Date.now().toString(36);

          for (let t = 0; t < 6; t++) e += (1e6, Math.ceil(1e6 * (Math.random() + 1))).toString(36);

          return e;
        }

        const ct = lt.encode(Date.now()),
              ht = (e, t) => (e < 0 && (t = `服务器内部错误[${e}]`, e = Me.EC_INNER_ERROR), {
          errCode: e,
          errMsg: t
        });

        function pt(e) {
          return (...t) => setTimeout(() => e && e(...t), 0);
        }

        function Rt(e) {
          return e.next = e, e.prev = e, e;
        }

        function ft(e, t) {
          e.prev = t.prev, e.next = t, t.prev.next = e, t.prev = e;
        }

        function mt(e) {
          e.next.prev = e.prev, e.prev.next = e.next, e.next = null, e.prev = null;
        }

        function St(e) {
          return e === e.next;
        }

        function yt(e = new Uint8Array(0)) {
          return {
            data: e
          };
        }

        function It(e, t) {
          let n = new Uint8Array(e.length + t.length);
          return n.set(e, 0), n.set(t, e.length), n;
        }

        function gt(e, t, n) {
          return e[t++] = n, t;
        }

        function Ct(e, t) {
          return [e[t++], t];
        }

        function Tt(e, t, n) {
          return e[t++] = 255 & n, e[t++] = n >> 8 & 255, e[t++] = n >> 16 & 255, e[t++] = n >> 24 & 255, t;
        }

        function Ot(e, t) {
          return [e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24, t];
        }

        const At = Math.min,
              Mt = Math.max;

        function Pt(e, t) {
          return e - t;
        }

        function vt(e, t) {
          return 0 == t.length ? 0 : e.output(t, e);
        }

        function Nt(e) {
          let t = 0,
              n = new Uint8Array(0);
          if (St(e.rcv_queue)) return n;
          if (function (e) {
            let t = 0;
            if (St(e.rcv_queue)) return -1;
            let n = e.rcv_queue.next;
            if (0 == n.frg) return n.data.length;
            if (e.nrcv_que < n.frg + 1) return -1;

            for (let n = e.rcv_queue.next; n != e.rcv_queue; n = n.next) {
              let e = n;
              if (t += e.data.length, 0 == e.frg) break;
            }

            return t;
          }(e) < 0) return n;
          e.nrcv_que >= e.rcv_wnd && (t = 1);

          for (let t = e.rcv_queue.next; t !== e.rcv_queue;) {
            let r = t;
            t = t.next, n = It(n, r.data);
            let i = r.frg;
            if (mt(r), e.nrcv_que--, 0 == i) break;
          }

          for (; !St(e.rcv_buf);) {
            let t = e.rcv_buf.next;
            if (!(t.sn == e.rcv_nxt && e.nrcv_que < e.rcv_wnd)) break;
            mt(t), e.nrcv_buf--, ft(t, e.rcv_queue), e.nrcv_que++, e.rcv_nxt++;
          }

          return e.nrcv_que < e.rcv_wnd && t && (e.probe |= 2), n;
        }

        function Lt(e, t) {
          let n = 0;
          if (0 == e.rx_srtt) e.rx_srtt = t, e.rx_rttval = t / 2;else {
            let n = t - e.rx_srtt;
            n < 0 && (n = -n), e.rx_rttval = (3 * e.rx_rttval + n) / 4, e.rx_srtt = (7 * e.rx_srtt + t) / 8, e.rx_srtt < 1 && (e.rx_srtt = 1);
          }
          var r;
          n = e.rx_srtt + Mt(e.interval, 4 * e.rx_rttval), e.rx_rto = (r = e.rx_minrto, 6e4, At(Mt(r, n), 6e4));
        }

        function bt(e) {
          let t = e.snd_buf.next;
          t != e.snd_buf ? e.snd_una = t.sn : e.snd_una = e.snd_nxt;
        }

        function Dt(e, t) {
          if (!(Pt(t, e.snd_una) < 0 || Pt(t, e.snd_nxt) >= 0)) for (let n, r = e.snd_buf.next; r != e.snd_buf; r = n) {
            if (n = r.next, t == r.sn) {
              mt(r), e.nsnd_buf--;
              break;
            }

            if (Pt(t, r.sn) < 0) break;
          }
        }

        function wt(e, t) {
          for (let n, r = e.snd_buf.next; r != e.snd_buf && (n = r.next, Pt(t, r.sn) > 0); r = n) mt(r), e.nsnd_buf--;
        }

        function Gt(e, t, n) {
          let r = e.ackcount + 1;

          if (r > e.ackblock) {
            let t, n;

            for (n = 8; n < r; n <<= 1);

            if (t = new Uint32Array(2 * n), null != e.acklist) for (let n = 0; n < e.ackcount; n++) t[2 * n + 0] = e.acklist[2 * n + 0], t[2 * n + 1] = e.acklist[2 * n + 1];
            e.acklist = t, e.ackblock = n;
          }

          let i = 2 * e.ackcount;
          e.acklist[i] = t, e.acklist[i + 1] = n, e.ackcount++;
        }

        function Ut(e, t) {
          return [e.acklist[2 * t + 0], e.acklist[2 * t + 1]];
        }

        function Yt(e, t) {
          let n,
              r,
              i = t.sn,
              o = 0;

          if (!(Pt(i, e.rcv_nxt + e.rcv_wnd) >= 0 || Pt(i, e.rcv_nxt) < 0)) {
            for (n = e.rcv_buf.prev; n != e.rcv_buf; n = r) {
              if (r = n.prev, n.sn == i) {
                o = 1;
                break;
              }

              if (Pt(i, n.sn) > 0) break;
            }

            var s, a;

            for (0 == o && (Rt(t), a = n, (s = t).prev = a, s.next = a.next, a.next.prev = s, a.next = s, e.nrcv_buf++); !St(e.rcv_buf);) {
              let t = e.rcv_buf.next;
              if (!(t.sn == e.rcv_nxt && e.nrcv_que < e.rcv_wnd)) break;
              mt(t), e.nrcv_buf--, ft(t, e.rcv_queue), e.nrcv_que++, e.rcv_nxt++;
            }
          }
        }

        function kt(e, t, n) {
          var r, i, o;
          return t = gt(e, t = Tt(e, t, n.conv), n.cmd), r = e, i = t = gt(e, t, n.frg), o = n.wnd, r[i++] = 255 & o, r[i++] = o >> 8 & 255, t = Tt(e, t = i, n.ts), t = Tt(e, t, n.sn), t = Tt(e, t, n.una), Tt(e, t, n.data.length);
        }

        function Ft(e) {
          let t = e.current;
          const n = e.buffer;
          let r = 0,
              i = 0,
              o = 0,
              s = yt();
          if (0 == e.updated) return;
          s.conv = e.conv, s.cmd = 82, s.frg = 0, s.wnd = function (e) {
            return e.nrcv_que < e.rcv_wnd ? e.rcv_wnd - e.nrcv_que : 0;
          }(e), s.una = e.rcv_nxt, s.sn = 0, s.ts = 0;
          let a = e.ackcount;

          for (let t = 0; t < a; t++) r + 24 > e.mtu && (vt(e, n.slice(0, r)), r = 0), [s.sn, s.ts] = Ut(e, t), r = kt(n, r, s);

          e.ackcount = 0, 0 == e.rmt_wnd ? 0 == e.probe_wait ? (e.probe_wait = 7e3, e.ts_probe = e.current + e.probe_wait) : Pt(e.current, e.ts_probe) >= 0 && (e.probe_wait < 7e3 && (e.probe_wait = 7e3), e.probe_wait += e.probe_wait / 2, e.probe_wait > 12e4 && (e.probe_wait = 12e4), e.ts_probe = e.current + e.probe_wait, e.probe |= 1) : (e.ts_probe = 0, e.probe_wait = 0), 1 & e.probe && (s.cmd = 83, r + 24 > e.mtu && (vt(e, n.slice(0, r)), r = 0), r = kt(n, r, s)), 2 & e.probe && (s.cmd = 84, r + 24 > e.mtu && (vt(e, n.slice(0, r)), r = 0), r = kt(n, r, s)), e.probe = 0;

          let _ = At(e.snd_wnd, e.rmt_wnd);

          for (0 == e.nocwnd && (_ = At(e.cwnd, _)); Pt(e.snd_nxt, e.snd_una + _) < 0 && !St(e.snd_queue);) {
            let n = e.snd_queue.next;
            mt(n), ft(n, e.snd_buf), e.nsnd_que--, e.nsnd_buf++, n.conv = e.conv, n.cmd = 81, n.wnd = s.wnd, n.ts = t, n.sn = e.snd_nxt++, n.una = e.rcv_nxt, n.resendts = t, n.rto = e.rx_rto, n.fastack = 0, n.xmit = 0;
          }

          let E = e.fastresend > 0 ? e.fastresend : 4294967295,
              l = 0 == e.nodelay ? e.rx_rto >> 3 : 0;

          for (let a = e.snd_buf.next; a != e.snd_buf; a = a.next) {
            let _ = 0;
            0 == a.xmit ? (_ = 1, a.xmit++, a.rto = e.rx_rto, a.resendts = t + a.rto + l) : Pt(t, a.resendts) >= 0 ? (_ = 1, a.xmit++, e.xmit++, 0 == e.nodelay ? a.rto += e.rx_rto : a.rto += e.rx_rto / 2, a.resendts = t + a.rto, o = 1) : a.fastack >= E && (a.xmit <= e.fastlimit || e.fastlimit <= 0) && (_ = 1, a.xmit++, a.fastack = 0, a.resendts = t + a.rto, i++), _ && (a.ts = t, a.wnd = s.wnd, a.una = e.rcv_nxt, r + (24 + a.data.length) > e.mtu && (vt(e, n.slice(0, r)), r = 0), r = kt(n, r, a), a.data.length > 0 && (n.set(a.data.slice(0, a.data.length), r), r += a.data.length), a.xmit >= e.dead_link && (e.state = -1));
          }

          if (r > 0 && (vt(e, n.slice(0, r)), r = 0), i) {
            let t = e.snd_nxt - e.snd_una;
            e.ssthresh = t / 2, e.ssthresh < 2 && (e.ssthresh = 2), e.cwnd = e.ssthresh + E, e.incr = e.cwnd * e.mss;
          }

          o && (e.ssthresh = _ / 2, e.ssthresh < 2 && (e.ssthresh = 2), e.cwnd = 1, e.incr = e.mss), e.cwnd < 1 && (e.cwnd = 1, e.incr = e.mss);
        }

        class qt {
          constructor(e, t) {
            this._ts = Date.now(), this.updateAsync = (() => {
              let e = !1;
              return () => {
                e || (e = !0, qt.asyncer(() => {
                  this.update(), e = !1;
                }));
              };
            })(), this.context = t, this._kcp = function (e) {
              return {
                conv: e,
                snd_una: 0,
                snd_nxt: 0,
                rcv_nxt: 0,
                ts_recent: 0,
                ts_lastack: 0,
                ts_probe: 0,
                probe_wait: 0,
                snd_wnd: 32,
                rcv_wnd: 128,
                rmt_wnd: 128,
                cwnd: 0,
                incr: 0,
                probe: 0,
                mtu: 1400,
                mss: 1376,
                stream: 0,
                buffer: new Uint8Array(4272),
                snd_queue: Rt(yt()),
                rcv_queue: Rt(yt()),
                snd_buf: Rt(yt()),
                rcv_buf: Rt(yt()),
                nrcv_buf: 0,
                nsnd_buf: 0,
                nrcv_que: 0,
                nsnd_que: 0,
                state: 0,
                acklist: null,
                ackblock: 0,
                ackcount: 0,
                rx_srtt: 0,
                rx_rttval: 0,
                rx_rto: 200,
                rx_minrto: 100,
                current: 0,
                interval: 100,
                ts_flush: 100,
                nodelay: 0,
                updated: 0,
                logmask: 0,
                ssthresh: 2,
                fastresend: 0,
                fastlimit: 5,
                nocwnd: 0,
                xmit: 0,
                dead_link: 20,
                output: null
              };
            }(e);
          }

          input(e) {
            let t = function (e, t) {
              let n = e.snd_una,
                  r = 0,
                  i = 0,
                  o = 0,
                  s = 0,
                  a = t.length;

              for (;;) {
                let n, l, d, u, c, h, p, R;
                if (a < 24) break;
                if ([c, s] = Ot(t, s), c != e.conv) return -1;
                if ([p, s] = Ct(t, s), [R, s] = Ct(t, s), [h, s] = (E = s, [(_ = t)[E++] | _[E++] << 8, E]), [n, s] = Ot(t, s), [l, s] = Ot(t, s), [u, s] = Ot(t, s), [d, s] = Ot(t, s), (a -= 24) < d || d < 0) return -2;
                if (81 != p && 82 != p && 83 != p && 84 != p) return -3;
                if (e.rmt_wnd = h, wt(e, u), bt(e), 82 == p) Pt(e.current, n) >= 0 && Lt(e, Pt(e.current, n)), Dt(e, l), bt(e), 0 == o ? (o = 1, r = l, i = n) : Pt(l, r) > 0 && Pt(n, i) > 0 && (r = l, i = n);else if (81 == p) {
                  if (Pt(l, e.rcv_nxt + e.rcv_wnd) < 0 && (Gt(e, l, n), Pt(l, e.rcv_nxt) >= 0)) {
                    let r = yt();
                    r.conv = c, r.cmd = p, r.frg = R, r.wnd = h, r.ts = n, r.sn = l, r.una = u, d > 0 && (r.data = t.slice(s, s + d)), Yt(e, r);
                  }
                } else if (83 == p) e.probe |= 2;else if (84 != p) return -3;
                s += d, a -= d;
              }

              var _, E;

              if (0 != o && function (e, t, n) {
                if (!(Pt(t, e.snd_una) < 0 || Pt(t, e.snd_nxt) >= 0)) for (let r, i = e.snd_buf.next; i != e.snd_buf && (r = i.next, !(Pt(t, i.sn) < 0)); i = r) t != i.sn && Pt(n, i.ts) >= 0 && i.fastack++;
              }(e, r, i), Pt(e.snd_una, n) > 0 && e.cwnd < e.rmt_wnd) {
                let t = e.mss;
                e.cwnd < e.ssthresh ? (e.cwnd++, e.incr += t) : (e.incr < t && (e.incr = t), e.incr += t * t / e.incr + t / 16, (e.cwnd + 1) * t <= e.incr && e.cwnd++), e.cwnd > e.rmt_wnd && (e.cwnd = e.rmt_wnd, e.incr = e.rmt_wnd * t);
              }

              return 0;
            }(this._kcp, e);

            for (;;) {
              let e = Nt(this._kcp);
              if (0 === e.length) break;
              this._onRecv && this._onRecv(e, this.context);
            }

            return t;
          }

          onOutput(e) {
            this._kcp.output = (t, n) => (e(t, this.context), t.length);
          }

          send(e) {
            return function (e, t) {
              let n = 0,
                  r = t.length;

              if (0 != e.stream) {
                if (!St(e.snd_queue)) {
                  let o = e.snd_queue.prev;

                  if (o.data.length < e.mss) {
                    let s = e.mss - o.data.length,
                        a = r < s ? r : s,
                        _ = It(o.data, t.slice(n, n + a));

                    n += a;
                    let E = yt(_);
                    ft(E, e.snd_queue), E.frg = 0, r -= a, mt(i = o), Rt(i);
                  }
                }

                if (r <= 0) return 0;
              }

              var i;
              let o;
              if ((o = r <= e.mss ? 1 : (r + e.mss - 1) / e.mss) >= 128) return -2;
              0 == o && (o = 1);

              for (let i = 0; i < o; i++) {
                let s = r > e.mss ? e.mss : r,
                    a = yt();
                r > 0 && (a.data = t.slice(n, n + s), n += s), a.frg = 0 == e.stream ? o - i - 1 : 0, Rt(a), ft(a, e.snd_queue), e.nsnd_que++, r -= s;
              }

              return 0;
            }(this._kcp, e);
          }

          onRecv(e) {
            this._onRecv = e;
          }

          update(e = !1) {
            let t = Date.now(),
                n = t - this._ts;
            return n >= 4294967296 && (this._ts = t, n = 0), e ? (i = n, (r = this._kcp).current = i, 0 == r.updated && (r.updated = 1, r.ts_flush = r.current), r.ts_flush = r.current, r.ts_flush += r.interval, Pt(r.current, r.ts_flush) >= 0 && (r.ts_flush = r.current + r.interval), void Ft(r)) : function (e, t) {
              e.current = t, 0 == e.updated && (e.updated = 1, e.ts_flush = e.current);
              let n = Pt(e.current, e.ts_flush);
              (n >= 1e4 || n < -1e4) && (e.ts_flush = e.current, n = 0), n >= 0 && (e.ts_flush += e.interval, Pt(e.current, e.ts_flush) >= 0 && (e.ts_flush = e.current + e.interval), Ft(e));
            }(this._kcp, n);
            var r, i;
          }

          nodelay(e, t, n, r) {
            return function (e, t, n, r, i) {
              return t >= 0 && (e.nodelay = t, e.rx_minrto = t ? 30 : 100), n >= 0 && (n > 5e3 ? n = 5e3 : n < 1 && (n = 1), e.interval = n), r >= 0 && (e.fastresend = r), i >= 0 && (e.nocwnd = i), 0;
            }(this._kcp, e, t, n, r);
          }

          setWinSize(e, t) {
            return r = e, i = t, (n = this._kcp) && (r > 0 && (n.snd_wnd = r), i > 0 && (n.rcv_wnd = Mt(i, 128))), 0;
            var n, r, i;
          }

        }

        qt.asyncer = e => new Promise(e => e()).then(e);

        const Ht = {
          get connectSocket() {
            let e = Xe.connectSocket;
            return Le.enableUDP && Xe.createUDPSocket && (e = e => {
              let t,
                  n = null,
                  r = null,
                  i = null,
                  o = null,
                  s = 0;
              const a = e.url.toLowerCase().replace("wss://", "").replace("ws://", ""),
                    _ = a.split(":")[0],
                    E = parseInt(a.split(":")[1] || "443", 10),
                    l = new qt(123, {
                address: _,
                port: E
              });
              l.nodelay(1, 10, 2, 1), l.setWinSize(1024, 1024);
              const d = Xe.createUDPSocket(),
                    u = {
                get readyState() {
                  return s;
                },

                CONNECTING: 0,
                OPEN: 1,
                CLOSING: 2,
                CLOSED: 3,
                onClose: e => r = e,
                onOpen: e => i = e,
                onError: e => o = e,
                onMessage: e => n = e,
                close: e => {
                  d.close(), h(), e && e.success && e.success();
                },
                send: ({
                  data: e,
                  fail: t,
                  success: n
                }) => {
                  l && (0 !== l.send(new Uint8Array(e)) ? pt(() => t && t())() : pt(() => n && n())(), l.updateAsync());
                }
              };
              d.onClose(e => {
                s = 3, h(), pt(() => r && r(e))();
              }), d.onError(e => {
                s = 3, d.close(), pt(() => o && o(e))();
              }), d.onListening(e => {
                ot.log("UDP_onListening"), s = 1, c(), pt(() => i && i(e))();
              }), d.onMessage(e => {
                const t = e.message || ("number" == typeof e.byteLength ? e : void 0);
                l.input(new Uint8Array(t)), l.updateAsync();
              }), l.onOutput((e, t) => {
                d.send({
                  address: _,
                  port: E,
                  message: e.buffer || e
                });
              }), l.onRecv((e, t) => {
                e.length > 0 && n && n({
                  data: e.buffer
                });
              });

              const c = () => {
                t = !0, requestAnimationFrame(() => {
                  t && (l.update(), c());
                });
              },
                    h = () => {
                t = !1;
              },
                    p = d.bind();

              return ot.log("UDP_bind", p), u;
            }), e;
          }

        },
              xt = {
          connectSocket: Xe.connectSocket
        },
              Bt = {
          connect: "connect",
          connectClose: "connectClose",
          connectClosing: "connectClosing",
          connectError: "connectError",
          connecting: "connecting",
          message: "message",
          autoAuth: "autoAuth"
        },
              Vt = Object.keys(Bt);
        var Qt = class {
          constructor(e, t, n) {
            this.isMsgBind = !1, this.forceClose = !1, this.init(n), this.id = e, this.enableUdp = t;
          }

          init(e) {
            this.url = e, this.eventCallbacks = [], this.eventOnceCallbacks = new Map(), this.socketTask = null;
            const t = new Ze();
            let n = 0;

            const r = () => {
              ot.log("SOCKET_OPEN", this.id, this.isConnect()), n = 0, l(), nt(t);
            },
                  i = e => {
              ot.log("SOCKET_CLOSE", e, this.id), E(), et(t, () => s("close"), Le.reconnectInterval), this.forceClose && (n = 0, this.forceClose = !1, nt(t));
            },
                  o = e => {
              ot.log("SOCKET_ERROR", e, this.id, this.socketTask && this.socketTask.readyState), _(Bt.connectError, {
                msg: "socket connectError",
                data: e
              }), et(t, () => s("error"), Le.reconnectInterval);
            },
                  s = e => {
              if (!this.url) throw new Error("socket.url = " + this.url);
              if (!this.isConnect() && !this.isClose()) return et(t, () => s("open"), Le.reconnectInterval);
              if (!this.isClose()) return;
              if (ot.log("SOCKET_TRY_OPEN", this.id, e, this.socketTask && this.socketTask.readyState, n, Le.reconnectMaxTimes), ++n > Le.reconnectMaxTimes) return n = 0, void ot.log("SOCKET_RECONNECT_TIMEOUT");
              const a = "wss://" + this.url.replace("wss://", "").replace("ws://", "");
              nt(t), this.forceClose = !1, this.enableUdp ? this.socketTask = Ht.connectSocket({
                url: a,
                fail: () => console.error("connectSocket fail")
              }) : this.socketTask = xt.connectSocket({
                url: a,
                fail: () => console.error("connectSocket fail")
              }), this.socketTask.onOpen(r.bind(this)), this.socketTask.onClose(i.bind(this)), this.socketTask.onError(o.bind(this)), this.socketTask.onMessage((e => {
                _(Bt.message, {
                  msg: "socket message",
                  data: e.data
                });
              }).bind(this));
            },
                  a = e => {
              ot.log("SOCKET_CONNECT", this.id, e), !this.isConnect() && n > 0 && n < Le.reconnectMaxTimes || (n = 0, s(e + " connect"));
            },
                  _ = (e, t = {}) => {
              t.tag = e, this.eventCallbacks.forEach(([n, r]) => {
                n !== e && "*" !== n || r(t);
              });
              const n = this.eventOnceCallbacks.get(e);
              n && (n(t), this.eventOnceCallbacks.delete(e));
            },
                  E = () => _(Bt.connectClose, {
              msg: "socket is closed"
            }),
                  l = () => _(Bt.connect, {
              msg: "socket is connected"
            });

            this.connect = a, this.connectNewSocket = e => {
              ot.log("SOCKET_CONNECT_NEW", this.id, this.isClose()), this.url = e, n = 0;

              const t = () => {
                a("connectNewSocket");
              };

              this.close(t, t);
            }, this.send = (e, {
              fail: t,
              success: n
            }) => {
              if (!this.isConnect()) return t({
                data: e
              }), void a("send");
              this.socketTask.send({
                data: e.buffer,
                fail: n => {
                  ot.log("SOCKET_SEND_FAIL", this.id, n), t({
                    data: e
                  });
                },
                success: () => {
                  n({
                    data: e
                  });
                }
              });
            }, this.close = (e, t) => {
              if (this.forceClose = !0, !this.socketTask) return e && e(), E();
              this.socketTask.close({
                success: t => {
                  ot.log("SOCKET_CLOSE_SUCCESS", this.id, t), this.socketTask = null, e && e();
                },
                fail: e => {
                  ot.log("SOCKET_CLOSE_ERROR", this.id, e), this.socketTask = null, t && t();
                }
              });
            }, this.destory = () => {
              nt(t), !this.isClose() && this.close(), this.offAll();
            }, this.isConnect = () => this.socketTask && this.socketTask.readyState === this.socketTask.OPEN, this.isConnecting = () => this.socketTask && this.socketTask.readyState === this.socketTask.CONNECTING, this.isClose = () => !this.socketTask || this.socketTask && this.socketTask.readyState === this.socketTask.CLOSED, this.isClosing = () => this.socketTask && this.socketTask.readyState === this.socketTask.CLOSING, this.on = (e, t) => {
              (Vt.includes(e) || "*" === e) && "function" == typeof t && (this.eventCallbacks.push([e, t]), e === Bt.message && (this.isMsgBind = !0));
            }, this.once = (e, t) => {
              Vt.includes(e) && "function" == typeof t && this.eventOnceCallbacks.set(e, t);
            }, this.emit = _, this.offAll = () => {
              this.eventCallbacks = [], this.eventOnceCallbacks.clear(), this.isMsgBind = !1;
            };
          }

        };
        const Wt = [He.E_CMD_LOGIN_REQ, He.E_CMD_LOGOUT_REQ],
              Kt = [He.E_CMD_RELAY_SEND_FRAME_REQ, He.E_CMD_RELAY_REQUEST_FRAME_REQ, He.E_CMD_HEART_BEAT_REQ, He.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ];
        var jt;
        !function (e) {
          e[e.CLIENT_PRE = parseInt("0x2", 16)] = "CLIENT_PRE", e[e.CLIENT_END = parseInt("0x3", 16)] = "CLIENT_END", e[e.SERVER_PRE = parseInt("0x28", 16)] = "SERVER_PRE", e[e.SERVER_END = parseInt("0x29", 16)] = "SERVER_END";
        }(jt || (jt = {}));

        class Jt {
          constructor() {
            this.queue = new Set(), this.bdHandlers = new Set(), this.socket = null;
          }

          static startQueueLoop() {
            et(Jt.timer, () => {
              const e = Date.now();
              return Array.from(Jt.sendQueue).forEach(([t, n]) => {
                if (e - n.time > Le.resendTimeout) {
                  let e,
                      t = "";
                  Fe.isStatus(Fe.StatusType.LOGIN) ? e = Me.EC_SDK_RES_TIMEOUT : Fe.getErrCode() === Me.EC_OK ? (e = Me.EC_SDK_NO_LOGIN, t = "登录失败") : (e = Fe.getErrCode(), t = "登录失败，" + Fe.getErrMsg()), n.sendFail(e, t);
                } else !n.isSocketSend && e - n.time >= Le.resendInterval && n.resend();
              }), Jt.startQueueLoop();
            }, Le.resendInterval);
          }

          static stopQueueLoop() {
            nt(Jt.timer), Array.from(Jt.sendQueue).forEach(([e, t]) => {
              t.remove();
            }), Jt.sendQueue.clear();
          }

          bindSocket(e, t, n) {
            return !(this.socket || !e) && (this.socket = e, !this.socket.isMsgBind && this.socket.on(Bt.message, (e => {
              if (!e.data) return;
              const {
                body: r,
                pre: i,
                end: o
              } = this.unpackBody(new Uint8Array(e.data));
              i === jt.CLIENT_PRE && o === jt.CLIENT_END && t(r), i === jt.SERVER_PRE && o === jt.SERVER_END && n(r);
            }).bind(this)), !0);
          }

          unbindSocket() {
            this.socket && this.socket.offAll(), this.socket = null, this.clearQueue(), this.clearBdHandlers();
          }

          clearQueue() {
            Array.from(this.queue).forEach(e => {
              this.deleteSeqQueue(e);
            });
          }

          clearBdHandlers() {
            Array.from(this.bdHandlers).forEach(e => {
              Jt.broadcastHandlers.delete(e), this.bdHandlers.delete(e);
            });
          }

          deleteSeqQueue(e) {
            Jt.sendQueue.delete(e), this.queue.delete(e);
          }

          addSeqQueue(e, t) {
            Jt.sendQueue.set(e, t), this.queue.add(e);
          }

          setBroadcastHandler(e, t) {
            Jt.broadcastHandlers.set(e, t), this.bdHandlers.add(e);
          }

          handleErrCode(e) {
            return !1;
          }

          send(e, t, n) {
            const r = this.getReadyCode(n);
            return Jt.sendQueue.size > 10 && ot.log("SENDQUEUE_size", Jt.sendQueue.size), 0 !== r ? this.handleSendFail(t, r) : this.socket.send(e, {
              fail: e => this.handleSendFail(t, e),
              success: () => this.handleSendSuccess(t)
            }), t;
          }

          buildData(e, t, n) {
            const r = 5 + t.length + 1,
                  i = new Uint8Array(function (e, t) {
              let n = [];

              for (; e > 255;) n.push(255 & e), e >>= 8;

              for (0 !== e && n.push(e), n = n.slice(0, 4); n.length < 4;) n.push(0);

              return n.reverse();
            }(r)),
                  o = new Uint8Array(r);
            return o.set(e), o.set(i, e.length), o.set(t, e.length + i.length), o.set(n, e.length + i.length + t.length), o;
          }

          unpackBody(e) {
            const t = e.slice(1, 5),
                  n = function (e) {
              let t = 0;
              const n = e.length;

              for (let r = n - 1; r >= 0; r--) t += e[r] * Math.pow(2, 8 * (n - 1 - r));

              return t;
            }(Array.from(t)) - 6;

            return {
              body: e.slice(5, 5 + n),
              pre: e[0],
              end: e[e.length - 1]
            };
          }

          handleSendFail(e, t) {
            const n = Jt.sendQueue.get(e);
            if (n) return Date.now() - n.time > Le.resendTimeout ? n.sendFail(Fe.getErrCode() || t) : t === Me.EC_SDK_UNINIT ? n.sendFail(t) : t === Me.EC_SDK_NO_LOGIN || t === Me.EC_SDK_NO_CHECK_LOGIN ? this.socket.emit(Bt.autoAuth, {}) : void 0;
          }

          handleSendSuccess(e) {
            Jt.sendQueue.has(e) && Jt.sendQueue.get(e).sendSuccess();
          }

          getReadyCode(e) {
            return ke.isInited() || e === He.E_CMD_LOGIN_REQ ? this.socket && this.socket.url ? Fe.isStatus(Fe.StatusType.LOGIN) || Wt.includes(e) ? this.socket.id === o.ConnectionType.RELAY && !qe.isChecked() && Kt.includes(e) ? Me.EC_SDK_NO_CHECK_LOGIN : 0 : Me.EC_SDK_NO_LOGIN : Me.EC_SDK_SEND_FAIL : (console.error("MGOBE.Listener 未初始化"), Ye.setInfo({
              id: ""
            }), Fe.setStatus(Fe.StatusType.LOGOUT), Me.EC_SDK_UNINIT);
          }

        }

        Jt.sendQueue = new Map(), Jt.broadcastHandlers = new Map(), Jt.timer = new Ze();
        var Xt = Jt;
        let zt = n(8);

        class $t {
          constructor(e) {
            this.root = zt.newBuilder({}).import(e).build();
          }

          lookupType(e) {
            let t = this.root;
            return e.split(".").forEach(e => t = t[e]), t;
          }

          static numberify(e) {
            if (null == e) return e;
            if (e.constructor === zt.Long) return Number(e);
            let t = Object.prototype.toString.apply(e);
            return e.constructor === zt.ByteBuffer ? e.buffer.slice(e.offset, e.offset + e.limit) : ("[object Object]" !== t && "[object Array]" !== t || Object.keys(e).forEach(function (t) {
              e[t] = $t.numberify(e[t]);
            }), e);
          }

          bufferify(e, t) {
            let n = this.lookupType(e);
            return function (e) {
              let r = {};
              t.forEach(t => e.hasOwnProperty(t) && (r[t] = e[t]));
              let i = n.encode(r);
              return new Uint8Array(i.buffer.slice(i.offset, i.offset + i.limit));
            };
          }

          objectify(e) {
            let t = this.lookupType(e);
            return function (e) {
              let n = t.decode(e);
              return $t.numberify(n);
            };
          }

        }

        function Zt(e, t, n, r) {
          return {
            objectify: function (i) {
              let o = e.objectify(i);
              return r.forEach(function (e) {
                void 0 !== e.value && o[t] !== e.value || (o[e.key] = e.IProto.objectify(o[n]));
              }), o;
            },
            bufferify: function (i) {
              let o = Object.assign({}, i);
              return r.forEach(function (e) {
                o[e.key] && (o[n] = e.IProto.bufferify(o[e.key]), void 0 !== e.value && (o[t] = e.value), delete o[e.key]);
              }), e.bufferify(o);
            }
          };
        }

        const en = {
          ClientSendServerReqWrap1: ["version", "appName", "cmd", "seq", "clientIp", "serviceIp", "business", "authKey", "authType", "authIp", "gameId", "uid", "playerId", "body"],
          ServerSendClientBstWrap1: ["version", "appName", "cmd", "seq", "clientIp", "serviceIp", "business", "authKey", "authType", "authIp", "gameId", "uid", "playerId", "body"],
          ClientSendServerRspWrap1: ["seq", "errCode", "errMsg", "body"],
          ClientSendServerReqWrap2: ["cmd", "body"],
          ClientSendServerRspWrap2: ["body"],
          EventInfo: ["eventType", "seq", "body"],
          EventNetworkState: ["gameId", "playerId", "networkState"],
          HeartBeatReq: ["conType", "routeId"],
          HeartBeatRsp: [],
          ServerSendClientBstWrap2: ["type", "msg"],
          NOUSEServerSendClientBstRspWrap2: [],
          CheckLoginReq: ["token", "routeId"],
          CheckLoginRsp: [],
          PushBodyType: ["pushMsg"],
          LoginReq: ["gameId", "openId", "platform", "channel", "nonce", "timestamp", "sign", "deviceId", "mac", "imei"],
          LoginRsp: ["token", "playerId", "expireTime", "sdkConfig"],
          SdkConfig: ["pingInterval", "reportInterval", "serverTime", "enableUdp", "disableReport", "disableReqReport", "disableFrameReport", "minReportSize"],
          LogoutReq: [],
          LogoutRsp: [],
          StartFrameSyncReq: [],
          StartFrameSyncRsp: [],
          StopFrameSyncReq: [],
          StopFrameSyncRsp: [],
          FrameItem: ["playerId", "data", "timestamp"],
          SendFrameReq: ["roomId", "item"],
          SendFrameRsp: [],
          FrameExtInfo: ["seed"],
          Frame: ["id", "items", "ext"],
          RequestFrameReq: ["roomId", "beginFrameId", "endFrameId", "supportPartial"],
          RequestFrameRsp: ["frames", "isPartial"],
          PlayerInfo: ["id", "name", "teamId", "customPlayerStatus", "customProfile", "commonNetworkState", "relayNetworkState", "isRobot", "matchAttributes"],
          TeamInfo: ["id", "name", "minPlayers", "maxPlayers"],
          RoomInfo: ["id", "name", "type", "createType", "maxPlayers", "owner", "isPrivate", "customProperties", "playerList", "teamList", "frameSyncState", "frameRate", "routeId", "createTime", "startGameTime", "isForbidJoin"],
          CreateRoomReq: ["roomName", "roomType", "createType", "maxPlayers", "isPrivate", "customProperties", "playerInfo", "region", "owner", "playerList", "teamList"],
          CreateRoomRsp: ["roomInfo"],
          JoinRoomReq: ["roomId", "teamId", "joinType", "playerInfo"],
          JoinRoomRsp: ["roomInfo"],
          LeaveRoomReq: [],
          LeaveRoomRsp: ["roomInfo"],
          DismissRoomReq: [],
          DismissRoomRsp: [],
          ChangeRoomReq: ["roomName", "owner", "isPrivate", "customProperties", "isForbidJoin", "changeRoomOptionList"],
          ChangeRoomRsp: ["roomInfo"],
          SvrChangeRoomReq: ["roomName", "owner", "isPrivate", "customProperties", "isForbidJoin", "roomId", "changeRoomOptionList"],
          SvrChangeRoomRsp: ["roomInfo"],
          RemovePlayerReq: ["removePlayerId"],
          RemovePlayerRsp: ["roomInfo"],
          SvrRemovePlayerReq: ["roomId", "removePlayerId"],
          SvrRemovePlayerRsp: ["roomInfo"],
          GetRoomByRoomIdReq: ["roomId"],
          GetRoomByRoomIdRsp: ["roomInfo"],
          SendToClientReq: ["roomId", "recvPlayerList", "msg"],
          SendToClientRsp: [],
          ChangeCustomPlayerStatusReq: ["customPlayerStatus"],
          ChangeCustomPlayerStatusRsp: ["roomInfo"],
          SvrChangeCustomPlayerStatusReq: ["customPlayerStatus"],
          SvrChangeCustomPlayerStatusRsp: ["roomInfo"],
          ChangePlayerNetworkStateReq: ["networkState"],
          ChangePlayerNetworkStateRsp: ["roomInfo"],
          GetRoomListReq: ["gameId", "pageNo", "pageSize", "roomType", "isDesc"],
          GetRoomListRsp: ["gameId", "roomList", "total"],
          MatchRoomSimpleReq: ["roomType", "maxPlayers", "playerInfo"],
          MatchRoomSimpleRsp: ["roomInfo"],
          MatchRoomComplexReq: [],
          MatchRoomComplexRsp: [],
          MatchPlayersSimpleReq: [],
          MatchPlayersSimpleRsp: [],
          MatchAttribute: ["name", "value"],
          MatchPlayerInfo: ["id", "name", "customPlayerStatus", "customProfile", "matchAttributes", "matchStatus", "teamId", "region", "teamLeader", "sdkVersion", "groupId", "teamType", "requestId"],
          MatchGroupPlayerInfo: ["id", "name", "customPlayerStatus", "customProfile", "matchAttributes", "matchStatus", "teamId", "region", "teamLeader", "sdkVersion", "groupId", "teamType", "requestId"],
          MatchGroupInfo: ["id", "leader", "playerIdList", "playerInfoList", "matchAttributes", "region", "sdkVersion", "teamId", "teamType", "requestId", "startMatchTime", "isRobot"],
          MatchTeamInfo: ["teamId", "teamName", "teamLeader", "members", "matchAttributes", "memberSdkVersions", "groupIds", "groupSdkVersions", "teamType"],
          ProgressPlayerInfo: ["playerId", "teamName", "matchAttributes", "startMatchTime"],
          MatchmakerTeam: ["name", "players"],
          MatchmakerData: ["matchId", "teams"],
          MatchPlacementInfo: ["gameId", "matchCode", "matchId", "type", "createRoomReq", "matchmakerDataJson", "status", "resultBody"],
          MgobePlacementJob: ["createRoomReq"],
          MgobePlacementResult: ["roomInfo"],
          GsePlacementJob: ["createRoomReq", "matchmakerData"],
          GsePlacementResult: ["gseGameSession"],
          ThirdpartyPlacementJob: [],
          ThirdpartyPlacementResult: [],
          GsePlayerLatency: ["latencyInMilliseconds", "playerId", "regionIdentifier"],
          GseGameProperty: ["key", "value"],
          GsePlacedPlayerSession: ["playerId", "playerSessionId"],
          GseGameSession: ["placementId", "gameServerSessionQueueName", "playerLatencies", "status", "dnsName", "gameServerSessionId", "gameServerSessionName", "gameServerSessionRegion", "gameProperties", "maximumPlayerSessionCount", "gameServerSessionData", "ipAddress", "port", "matchmakerData", "placedPlayerSessions", "startTime", "endTime"],
          PlaceMatchReq: ["seq", "gameId", "matchId", "type", "jobBody", "matchCode"],
          PlaceMatchRsp: ["matchPlacementResult"],
          MatchPlacementResult: ["seq", "gameId", "matchId", "type", "status", "resultBody", "errCode", "matchCode"],
          UpdateMatchPlacementResultReq: ["matchPlacementResult"],
          UpdateMatchPlacementResultRsp: [],
          CmqPlacementResult: ["placementId", "placementType", "resultBody"],
          MatchPlayersReq: ["matchCode", "playerInfo"],
          MatchPlayersRsp: ["matchCode"],
          MatchGroupReq: ["matchCode", "playerInfoList"],
          MatchGroupRsp: ["matchCode"],
          DescribeMatchReq: ["requestIdList"],
          MatchProgress: ["requestId", "playerIdList", "playerInfoList", "status", "eventType", "playerInfoSuccessList", "teamInfoList", "completedTime", "startMatchTime", "gameSessionConnectionInfo"],
          DescribeMatchRsp: ["matchProgressList"],
          CancelPlayerMatchReq: ["matchType"],
          CancelPlayerMatchRsp: [],
          ApiMatchGroupReq: ["matchCode", "playerInfoList", "requestId"],
          ApiMatchGroupRsp: ["requestId"],
          ApiDescribeMatchReq: ["requestIdList"],
          ApiDescribeMatchRsp: ["matchProgressList", "gameId", "matchCode", "startMatchTime"],
          GameSessionConnectionInfo: ["dnsName", "ipAddress", "matchedPlayerSessions", "port"],
          MatchedPlayerSession: ["playerId", "playerSessionId"],
          StartMatchPlacement: ["region", "placementId", "queueName", "maximumPlayerSessionCount", "desiredPlayerSessions", "gameProperties", "matchMakerData"],
          DesiredPlayerSession: ["playerId", "playerData"],
          GameProperty: ["key", "value"],
          ApiCancelPlayerMatchReq: ["matchType", "requestIdList"],
          ApiCancelPlayerMatchRsp: ["requestIdList"],
          CreateRoomBst: ["roomInfo"],
          DestroyRoomBst: ["roomInfo"],
          JoinRoomBst: ["roomInfo", "joinPlayerId"],
          LeaveRoomBst: ["roomInfo", "leavePlayerId"],
          RemovePlayerBst: ["roomInfo", "removePlayerId"],
          DismissRoomBst: ["roomInfo"],
          ChangeRoomBst: ["roomInfo"],
          RecvFromClientBst: ["roomId", "sendPlayerId", "msg"],
          ChangeCustomPlayerStatusBst: ["changePlayerId", "customPlayerStatus", "roomInfo"],
          ChangePlayerNetworkStateBst: ["changePlayerId", "networkState", "roomInfo", "groupIdList"],
          MatchTimeoutBst: ["matchType", "errCode"],
          CancelMatchBst: ["matchCode", "playerId"],
          MatchPlayersBst: ["matchType", "roomInfo"],
          StartFrameSyncBst: ["roomInfo"],
          StopFrameSyncBst: ["roomInfo"],
          RecvFrameBst: ["frame"],
          GameSvrCommunication: ["type", "body"],
          NotifyRelayConnectionReq: ["roomId", "ip", "port"],
          NotifyRoomEventReq: ["cmd", "msg"],
          SendToGameSvrReq: ["roomId", "playerId", "data"],
          SendToGameSvrRsp: [],
          RecvFromGameSvrBst: ["roomId", "recvPlayerIdList", "data"],
          ClientRecvFromGameSvrRsp: [],
          GroupInfo: ["id", "name", "type", "maxPlayers", "owner", "customProperties", "createTime", "isForbidJoin", "isPersistent", "groupPlayerList"],
          GroupPlayerInfo: ["id", "name", "customGroupPlayerStatus", "customGroupPlayerProfile", "commonGroupNetworkState"],
          CreateGroupReq: ["groupName", "groupType", "maxPlayers", "customProperties", "playerInfo", "isForbidJoin", "isPersistent"],
          CreateGroupRsp: ["groupInfo"],
          JoinGroupReq: ["groupId", "playerInfo"],
          JoinGroupRsp: ["groupInfo"],
          LeaveGroupReq: ["groupId"],
          LeaveGroupRsp: ["groupInfo"],
          DismissGroupReq: ["groupId"],
          DismissGroupRsp: [],
          ChangeGroupReq: ["groupId", "groupName", "owner", "customProperties", "isForbidJoin", "changeGroupOptionList"],
          ChangeGroupRsp: ["groupInfo"],
          RemoveGroupPlayerReq: ["groupId", "removePlayerId"],
          RemoveGroupPlayerRsp: ["groupInfo"],
          GetGroupByGroupIdReq: ["groupId"],
          GetGroupByGroupIdRsp: ["groupInfo"],
          GetMyGroupsReq: [],
          GetMyGroupsRsp: ["groupInfoList"],
          ChangeCustomGroupPlayerStatusReq: ["groupId", "customGroupPlayerStatus"],
          ChangeCustomGroupPlayerStatusRsp: ["groupInfo"],
          SendToGroupClientReq: ["groupId", "recvPlayerList", "msg", "recvType"],
          SendToGroupClientRsp: [],
          GroupPlayers: ["groupId", "playerIdList"],
          ChangeGroupPlayerNetworkReq: ["networkState", "playerId", "gameId", "seq"],
          ChangeGroupPlayerNetworkRsp: ["groupPlayers"],
          JoinGroupBst: ["groupInfo", "joinPlayerId"],
          LeaveGroupBst: ["groupInfo", "leavePlayerId"],
          DismissGroupBst: ["groupInfo"],
          ChangeGroupBst: ["groupInfo"],
          RemoveGroupPlayerBst: ["groupInfo", "removePlayerId"],
          ChangeGroupPlayerNetworkStateBst: ["groupInfo", "changePlayerId", "networkState"],
          ChangeCustomGroupPlayerStatusBst: ["groupInfo", "changePlayerId", "customGroupPlayerStatus"],
          RecvFromGroupClientBst: ["groupId", "sendPlayerId", "msg"]
        },
              tn = n(13),
              nn = (() => {
          let e;
          return () => e || (e = new $t(tn));
        })();

        Object.keys(ge).map(e => {
          return ge[e] = (t = nn, n = [re, e].join("."), r = en[e], {
            bufferify: t().bufferify(n, r),
            objectify: t().objectify(n)
          });
          var t, n, r;
        }), Zt(ge.ClientSendServerReqWrap2, "cmd", "body", [{
          value: ae.E_CMD_LOGIN_REQ,
          key: "LoginReq",
          IProto: ge.LoginReq
        }, {
          value: ae.E_CMD_LOGOUT_REQ,
          key: "LogoutReq",
          IProto: ge.LogoutReq
        }, {
          value: ae.E_CMD_CHANGE_PLAYER_STATE_REQ,
          key: "ChangeCustomPlayerStatusReq",
          IProto: ge.ChangeCustomPlayerStatusReq
        }, {
          value: ae.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ,
          key: "SendToGameSvrReq",
          IProto: ge.SendToGameSvrReq
        }, {
          value: ae.E_CMD_RELAY_SEND_FRAME_REQ,
          key: "SendFrameReq",
          IProto: ge.SendFrameReq
        }, {
          value: ae.E_CMD_ROOM_CHAT_REQ,
          key: "SendToClientReq",
          IProto: ge.SendToClientReq
        }, {
          value: ae.E_CMD_CHECK_LOGIN_REQ,
          key: "CheckLoginReq",
          IProto: ge.CheckLoginReq
        }, {
          value: ae.E_CMD_RELAY_REQUEST_FRAME_REQ,
          key: "RequestFrameReq",
          IProto: ge.RequestFrameReq
        }, {
          value: ae.E_CMD_START_FRAME_SYNC_REQ,
          key: "StartFrameSyncReq",
          IProto: ge.StartFrameSyncReq
        }, {
          value: ae.E_CMD_STOP_FRAME_SYNC_REQ,
          key: "StopFrameSyncReq",
          IProto: ge.StopFrameSyncReq
        }, {
          value: ae.E_CMD_CREATE_ROOM_REQ,
          key: "CreateRoomReq",
          IProto: ge.CreateRoomReq
        }, {
          value: ae.E_CMD_JOIN_ROOM_REQ,
          key: "JoinRoomReq",
          IProto: ge.JoinRoomReq
        }, {
          value: ae.E_CMD_QUIT_ROOM_REQ,
          key: "LeaveRoomReq",
          IProto: ge.LeaveRoomReq
        }, {
          value: ae.E_CMD_DISSMISS_ROOM_REQ,
          key: "DismissRoomReq",
          IProto: ge.DismissRoomReq
        }, {
          value: ae.E_CMD_CHANGE_ROOM_PROPERTIS_REQ,
          key: "ChangeRoomReq",
          IProto: ge.ChangeRoomReq
        }, {
          value: ae.E_CMD_REMOVE_MEMBER_REQ,
          key: "RemovePlayerReq",
          IProto: ge.RemovePlayerReq
        }, {
          value: ae.E_CMD_GET_ROOM_DETAIL_REQ,
          key: "GetRoomByRoomIdReq",
          IProto: ge.GetRoomByRoomIdReq
        }, {
          value: ae.E_CMD_GET_ROOM_LIST_REQ,
          key: "GetRoomListReq",
          IProto: ge.GetRoomListReq
        }, {
          value: ae.E_CMD_GET_ROOM_LIST_V2_REQ,
          key: "GetRoomListReq",
          IProto: ge.GetRoomListReq
        }, {
          value: ae.E_CMD_HEART_BEAT_REQ,
          key: "HeartBeatReq",
          IProto: ge.HeartBeatReq
        }, {
          value: ae.E_CMD_MATCH_PLAYER_COMPLEX_REQ,
          key: "MatchPlayersReq",
          IProto: ge.MatchPlayersReq
        }, {
          value: ae.E_CMD_MATCH_ROOM_SIMPLE_REQ,
          key: "MatchRoomSimpleReq",
          IProto: ge.MatchRoomSimpleReq
        }, {
          value: ae.E_CMD_MATCH_CANCEL_MATCH_REQ,
          key: "CancelPlayerMatchReq",
          IProto: ge.CancelPlayerMatchReq
        }]), ge.ClientSendServerRspWrap2, ae.E_CMD_LOGIN_REQ, ge.LoginRsp, ae.E_CMD_LOGOUT_REQ, ge.LogoutRsp, ae.E_CMD_CHANGE_PLAYER_STATE_REQ, ge.ChangeCustomPlayerStatusRsp, ae.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ, ge.SendToGameSvrRsp, ae.E_CMD_RELAY_SEND_FRAME_REQ, ge.SendFrameRsp, ae.E_CMD_ROOM_CHAT_REQ, ge.SendToClientRsp, ae.E_CMD_CHECK_LOGIN_REQ, ge.CheckLoginRsp, ae.E_CMD_RELAY_REQUEST_FRAME_REQ, ge.RequestFrameRsp, ae.E_CMD_START_FRAME_SYNC_REQ, ge.StartFrameSyncRsp, ae.E_CMD_STOP_FRAME_SYNC_REQ, ge.StopFrameSyncRsp, ae.E_CMD_CREATE_ROOM_REQ, ge.CreateRoomRsp, ae.E_CMD_JOIN_ROOM_REQ, ge.JoinRoomRsp, ae.E_CMD_QUIT_ROOM_REQ, ge.LeaveRoomRsp, ae.E_CMD_DISSMISS_ROOM_REQ, ge.DismissRoomRsp, ae.E_CMD_CHANGE_ROOM_PROPERTIS_REQ, ge.ChangeRoomRsp, ae.E_CMD_REMOVE_MEMBER_REQ, ge.RemovePlayerRsp, ae.E_CMD_GET_ROOM_DETAIL_REQ, ge.GetRoomByRoomIdRsp, ae.E_CMD_GET_ROOM_LIST_V2_REQ, ge.GetRoomListRsp, ae.E_CMD_HEART_BEAT_REQ, ge.HeartBeatRsp, ae.E_CMD_MATCH_PLAYER_COMPLEX_REQ, ge.MatchPlayersRsp, ae.E_CMD_MATCH_ROOM_SIMPLE_REQ, ge.MatchRoomSimpleRsp, ae.E_CMD_MATCH_CANCEL_MATCH_REQ, ge.CancelPlayerMatchRsp;
        const rn = Zt(ge.ServerSendClientBstWrap2, "type", "msg", [{
          value: se.E_PUSH_TYPE_GAMESVR,
          key: "RecvFromGameSvrBst",
          IProto: ge.RecvFromGameSvrBst
        }, {
          value: se.E_PUSH_TYPE_ROOM_CHAT,
          key: "RecvFromClientBst",
          IProto: ge.RecvFromClientBst
        }, {
          value: se.E_PUSH_TYPE_START_GAME,
          key: "StartFrameSyncBst",
          IProto: ge.StartFrameSyncBst
        }, {
          value: se.E_PUSH_TYPE_STOP_GAME,
          key: "StopFrameSyncBst",
          IProto: ge.StopFrameSyncBst
        }, {
          value: se.E_PUSH_TYPE_RELAY,
          key: "RecvFrameBst",
          IProto: ge.RecvFrameBst
        }, {
          value: se.E_PUSH_TYPE_JOIN_ROOM,
          key: "JoinRoomBst",
          IProto: ge.JoinRoomBst
        }, {
          value: se.E_PUSH_TYPE_LEAVE_ROOM,
          key: "LeaveRoomBst",
          IProto: ge.LeaveRoomBst
        }, {
          value: se.E_PUSH_TYPE_DISMISS_ROOM,
          key: "DismissRoomBst",
          IProto: ge.DismissRoomBst
        }, {
          value: se.E_PUSH_TYPE_MODIFY_ROOM_PROPERTY,
          key: "ChangeRoomBst",
          IProto: ge.ChangeRoomBst
        }, {
          value: se.E_PUSH_TYPE_REMOVE_PLAYER,
          key: "RemovePlayerBst",
          IProto: ge.RemovePlayerBst
        }, {
          value: se.E_PUSH_TYPE_PLAYER_STATE,
          key: "ChangeCustomPlayerStatusBst",
          IProto: ge.ChangeCustomPlayerStatusBst
        }, {
          value: se.E_PUSH_TYPE_NETWORK_STATE,
          key: "ChangePlayerNetworkStateBst",
          IProto: ge.ChangePlayerNetworkStateBst
        }, {
          value: se.E_PUSH_TYPE_MATCH_TIMEOUT,
          key: "MatchTimeoutBst",
          IProto: ge.MatchTimeoutBst
        }, {
          value: se.E_PUSH_TYPE_MATCH_SUCCESS,
          key: "MatchPlayersBst",
          IProto: ge.MatchPlayersBst
        }]),
              on = (Zt(ge.ClientSendServerReqWrap1, "cmd", "body", [{
          value: void 0,
          key: "ClientSendServerReqWrap2",
          IProto: ge.ClientSendServerReqWrap2
        }]), Zt(ge.ServerSendClientBstWrap1, "cmd", "body", [{
          value: void 0,
          key: "ServerSendClientBstWrap2",
          IProto: rn
        }]), ht),
              sn = He,
              an = xe,
              _n = ge,
              En = new Map(),
              ln = new Map(),
              dn = new Map(),
              un = _n.ClientSendServerReqWrap1,
              cn = _n.ClientSendServerReqWrap2,
              hn = _n.ClientSendServerRspWrap1,
              pn = _n.ClientSendServerRspWrap2,
              Rn = _n.ServerSendClientBstWrap1,
              fn = _n.ServerSendClientBstWrap2;
        var mn;
        En.set(sn.E_CMD_LOGIN_REQ, _n.LoginReq), ln.set(sn.E_CMD_LOGIN_REQ, _n.LoginRsp), En.set(sn.E_CMD_LOGOUT_REQ, _n.LogoutReq), ln.set(sn.E_CMD_LOGOUT_REQ, _n.LogoutRsp), En.set(sn.E_CMD_CHANGE_PLAYER_STATE_REQ, _n.ChangeCustomPlayerStatusReq), ln.set(sn.E_CMD_CHANGE_PLAYER_STATE_REQ, _n.ChangeCustomPlayerStatusRsp), En.set(sn.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ, _n.SendToGameSvrReq), ln.set(sn.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ, _n.SendToGameSvrRsp), En.set(sn.E_CMD_RELAY_SEND_FRAME_REQ, _n.SendFrameReq), ln.set(sn.E_CMD_RELAY_SEND_FRAME_REQ, _n.SendFrameRsp), En.set(sn.E_CMD_ROOM_CHAT_REQ, _n.SendToClientReq), ln.set(sn.E_CMD_ROOM_CHAT_REQ, _n.SendToClientRsp), En.set(sn.E_CMD_CHECK_LOGIN_REQ, _n.CheckLoginReq), ln.set(sn.E_CMD_CHECK_LOGIN_REQ, _n.CheckLoginRsp), En.set(sn.E_CMD_RELAY_REQUEST_FRAME_REQ, _n.RequestFrameReq), ln.set(sn.E_CMD_RELAY_REQUEST_FRAME_REQ, _n.RequestFrameRsp), En.set(sn.E_CMD_START_FRAME_SYNC_REQ, _n.StartFrameSyncReq), ln.set(sn.E_CMD_START_FRAME_SYNC_REQ, _n.StartFrameSyncRsp), En.set(sn.E_CMD_STOP_FRAME_SYNC_REQ, _n.StopFrameSyncReq), ln.set(sn.E_CMD_STOP_FRAME_SYNC_REQ, _n.StopFrameSyncRsp), En.set(sn.E_CMD_CREATE_ROOM_REQ, _n.CreateRoomReq), ln.set(sn.E_CMD_CREATE_ROOM_REQ, _n.CreateRoomRsp), En.set(sn.E_CMD_JOIN_ROOM_REQ, _n.JoinRoomReq), ln.set(sn.E_CMD_JOIN_ROOM_REQ, _n.JoinRoomRsp), En.set(sn.E_CMD_QUIT_ROOM_REQ, _n.LeaveRoomReq), ln.set(sn.E_CMD_QUIT_ROOM_REQ, _n.LeaveRoomRsp), En.set(sn.E_CMD_DISSMISS_ROOM_REQ, _n.DismissRoomReq), ln.set(sn.E_CMD_DISSMISS_ROOM_REQ, _n.DismissRoomRsp), En.set(sn.E_CMD_CHANGE_ROOM_PROPERTIS_REQ, _n.ChangeRoomReq), ln.set(sn.E_CMD_CHANGE_ROOM_PROPERTIS_REQ, _n.ChangeRoomRsp), En.set(sn.E_CMD_REMOVE_MEMBER_REQ, _n.RemovePlayerReq), ln.set(sn.E_CMD_REMOVE_MEMBER_REQ, _n.RemovePlayerRsp), En.set(sn.E_CMD_GET_ROOM_DETAIL_REQ, _n.GetRoomByRoomIdReq), ln.set(sn.E_CMD_GET_ROOM_DETAIL_REQ, _n.GetRoomByRoomIdRsp), En.set(sn.E_CMD_GET_ROOM_LIST_REQ, _n.GetRoomListReq), ln.set(sn.E_CMD_GET_ROOM_LIST_REQ, _n.GetRoomListRsp), En.set(sn.E_CMD_GET_ROOM_LIST_V2_REQ, _n.GetRoomListReq), ln.set(sn.E_CMD_GET_ROOM_LIST_V2_REQ, _n.GetRoomListRsp), En.set(sn.E_CMD_HEART_BEAT_REQ, _n.HeartBeatReq), ln.set(sn.E_CMD_HEART_BEAT_REQ, _n.HeartBeatRsp), En.set(sn.E_CMD_MATCH_PLAYER_COMPLEX_REQ, _n.MatchPlayersReq), ln.set(sn.E_CMD_MATCH_PLAYER_COMPLEX_REQ, _n.MatchPlayersRsp), En.set(sn.E_CMD_MATCH_GROUP_REQ, _n.MatchGroupReq), ln.set(sn.E_CMD_MATCH_GROUP_REQ, _n.MatchGroupRsp), En.set(sn.E_CMD_MATCH_ROOM_SIMPLE_REQ, _n.MatchRoomSimpleReq), ln.set(sn.E_CMD_MATCH_ROOM_SIMPLE_REQ, _n.MatchRoomSimpleRsp), En.set(sn.E_CMD_MATCH_CANCEL_MATCH_REQ, _n.CancelPlayerMatchReq), ln.set(sn.E_CMD_MATCH_CANCEL_MATCH_REQ, _n.CancelPlayerMatchRsp), En.set(sn.E_CMD_CREATE_GROUP_REQ, _n.CreateGroupReq), ln.set(sn.E_CMD_CREATE_GROUP_REQ, _n.CreateGroupRsp), En.set(sn.E_CMD_JOIN_GROUP_REQ, _n.JoinGroupReq), ln.set(sn.E_CMD_JOIN_GROUP_REQ, _n.JoinGroupRsp), En.set(sn.E_CMD_QUIT_GROUP_REQ, _n.LeaveGroupReq), ln.set(sn.E_CMD_QUIT_GROUP_REQ, _n.LeaveGroupRsp), En.set(sn.E_CMD_DISMISS_GROUP_REQ, _n.DismissGroupReq), ln.set(sn.E_CMD_DISMISS_GROUP_REQ, _n.DismissGroupRsp), En.set(sn.E_CMD_CHANGE_GROUP_PROPERTIES_REQ, _n.ChangeGroupReq), ln.set(sn.E_CMD_CHANGE_GROUP_PROPERTIES_REQ, _n.ChangeGroupRsp), En.set(sn.E_CMD_REMOVE_GROUP_MEMBER_REQ, _n.RemoveGroupPlayerReq), ln.set(sn.E_CMD_REMOVE_GROUP_MEMBER_REQ, _n.RemoveGroupPlayerRsp), En.set(sn.E_CMD_GET_GROUP_DETAIL_REQ, _n.GetGroupByGroupIdReq), ln.set(sn.E_CMD_GET_GROUP_DETAIL_REQ, _n.GetGroupByGroupIdRsp), En.set(sn.E_CMD_GET_GROUP_LIST_REQ, _n.GetMyGroupsReq), ln.set(sn.E_CMD_GET_GROUP_LIST_REQ, _n.GetMyGroupsRsp), En.set(sn.E_CMD_CHANGE_GROUP_PLAYER_STATE_REQ, _n.ChangeCustomGroupPlayerStatusReq), ln.set(sn.E_CMD_CHANGE_GROUP_PLAYER_STATE_REQ, _n.ChangeCustomGroupPlayerStatusRsp), En.set(sn.E_CMD_GROUP_CHAT_REQ, _n.SendToGroupClientReq), ln.set(sn.E_CMD_GROUP_CHAT_REQ, _n.SendToGroupClientRsp), dn.set(an.E_PUSH_TYPE_GAMESVR, _n.RecvFromGameSvrBst), dn.set(an.E_PUSH_TYPE_ROOM_CHAT, _n.RecvFromClientBst), dn.set(an.E_PUSH_TYPE_START_GAME, _n.StartFrameSyncBst), dn.set(an.E_PUSH_TYPE_STOP_GAME, _n.StopFrameSyncBst), dn.set(an.E_PUSH_TYPE_RELAY, _n.RecvFrameBst), dn.set(an.E_PUSH_TYPE_JOIN_ROOM, _n.JoinRoomBst), dn.set(an.E_PUSH_TYPE_LEAVE_ROOM, _n.LeaveRoomBst), dn.set(an.E_PUSH_TYPE_DISMISS_ROOM, _n.DismissRoomBst), dn.set(an.E_PUSH_TYPE_MODIFY_ROOM_PROPERTY, _n.ChangeRoomBst), dn.set(an.E_PUSH_TYPE_REMOVE_PLAYER, _n.RemovePlayerBst), dn.set(an.E_PUSH_TYPE_PLAYER_STATE, _n.ChangeCustomPlayerStatusBst), dn.set(an.E_PUSH_TYPE_NETWORK_STATE, _n.ChangePlayerNetworkStateBst), dn.set(an.E_PUSH_TYPE_MATCH_TIMEOUT, _n.MatchTimeoutBst), dn.set(an.E_PUSH_TYPE_MATCH_SUCCESS, _n.MatchPlayersBst), dn.set(an.E_PUSH_TYPE_MATCH_CANCEL, _n.CancelMatchBst), dn.set(an.E_PUSH_TYPE_JOIN_GROUP, _n.JoinGroupBst), dn.set(an.E_PUSH_TYPE_LEAVE_GROUP, _n.LeaveGroupBst), dn.set(an.E_PUSH_TYPE_DISMISS_GROUP, _n.DismissGroupBst), dn.set(an.E_PUSH_TYPE_MODIFY_GROUP_PROPERTY, _n.ChangeGroupBst), dn.set(an.E_PUSH_TYPE_REMOVE_GROUP_PLAYER, _n.RemoveGroupPlayerBst), dn.set(an.E_PUSH_TYPE_GROUP_PLAYER_STATE, _n.ChangeCustomGroupPlayerStatusBst), dn.set(an.E_PUSH_TYPE_GROUP_CHAT, _n.RecvFromGroupClientBst), function (e) {
          e.batch = "e6", e.batchTest = "e6_test";
        }(mn || (mn = {}));
        const Sn = {
          onPingTime: e => null,
          onFitFrameTime: e => null,
          onBstFrameRate: e => null,
          onRenderFrameRate: e => null
        };
        var yn = {
          get id() {
            return Ye.getInfo().id;
          },

          get openId() {
            return Ge.openId;
          },

          get name() {
            return Ye.getInfo().name;
          },

          get teamId() {
            return Ye.getInfo().teamId;
          },

          get customPlayerStatus() {
            return Ye.getInfo().customPlayerStatus;
          },

          get customProfile() {
            return Ye.getInfo().customProfile;
          },

          get commonNetworkState() {
            return Ye.getInfo().commonNetworkState;
          },

          get relayNetworkState() {
            return Ye.getInfo().relayNetworkState;
          }

        };

        function In() {
          return Be.getServerTime_UTC_8();
        }

        function gn(e) {
          return (1e6 * In() + Math.floor(1e6 * Math.random())).toString(e) || "";
        }

        function Cn() {
          An.conf.getLocation && Xe.getLocation({
            type: An.conf.locationType || "wgs84",

            success(e) {
              Xe.setStorageSync(An.prefix + An.lt, JSON.stringify(e));
            }

          });
        }

        function Tn() {
          An.conf.getUserInfo && Xe.getUserInfo({
            withCredentials: !1,

            success(e) {
              const t = e.userInfo;
              t.nickName = encodeURIComponent(t.nickName), Xe.setStorageSync(An.prefix + An.ui, JSON.stringify(t));
            },

            fail(e) {}

          });
        }

        function On(e, t, n, r, i) {
          (!t || void 0 === t || 0 >= t) && (t = In());
          const o = [{
            type: 2,
            data: {
              id: gn(32),
              start: t,
              status: e,
              duration: n || 0,
              events: r || []
            }
          }],
                s = Xe.getSystemInfoSync(),
                a = {
            deviceId: function () {
              let e = Xe.getStorageSync(An.prefix + An.u);
              return e || (e = gn(36), Xe.setStorageSync(An.prefix + An.u, e)), e;
            }(),
            appkey: An.conf.appKey,
            versionCode: An.conf.version,
            initTime: t,
            channelID: An.conf.channelId,
            sdkVersion: An.sdkVersion,
            pixel: void 0 === s.screenWidth ? "" : s.screenWidth + "*" + s.screenHeight + "*" + s.pixelRatio,
            language: s.language,
            model: encodeURIComponent(s.model),
            wxVersion: s.version,
            networkType: Xe.getStorageSync(An.prefix + An.nt) || "4g",
            system: encodeURIComponent(s.system),
            platform: encodeURIComponent(s.platform),
            windowArea: void 0 === s.windowWidth ? "" : s.windowWidth + "*" + s.windowHeight + "*" + s.pixelRatio,
            opid: An.opid,
            unid: An.unid,
            userInfo: An.conf.getUserInfo && Xe.getStorageSync(An.prefix + An.ui) || "",
            location: An.conf.getLocation && Xe.getStorageSync(An.prefix + An.lt) || "",
            msgs: o
          };
          Xe.request({
            url: An.serverUrl,
            data: a,
            method: "POST",
            success: () => i && i(!0),
            fail: () => i && i(!1)
          });
        }

        const An = {
          serverUrl: null,
          opid: null,
          unid: null,
          conf: {
            appKey: "MA0NCELB39H5S6",
            version: "1.0.0",
            channelId: "",
            getLocation: !1,
            getUserInfo: !1,
            isDebug: !1,
            locationType: void 0
          },
          prefix: "beacon_",
          sdkVersion: "weapp_v1.0.7",
          u: "u",
          ui: "ui",
          lt: "lt",
          nt: "nt",
          oik: "oik",
          uik: "uik",
          atl: 0,
          ats: 0,
          ptl: 0,
          pts: 0,

          init() {
            var e;
            An.conf.appKey && void 0 !== An.conf.appKey && An.conf.appKey.length > 0 && An.conf.version && void 0 !== An.conf.version && An.conf.version.length > 0 && (An.serverUrl = "https://" + (An.conf.isDebug ? "jrlts" : "report") + ".wxlagame.com/analytics/upload?tp=weapp", Cn(), Tn(), Xe.getNetworkType({
              success(e) {
                Xe.setStorageSync(An.prefix + An.nt, e.networkType);
              }

            }), An.opid = Xe.getStorageSync(An.prefix + An.oik), An.unid = Xe.getStorageSync(An.prefix + An.uik), this.atl = In(), 1, (!(e = this.atl) || void 0 === e || 0 >= e) && (e = In()), On(1, e, 0, []));
          },

          onEvent(e, t, n) {
            const r = In();
            On(4, r, 0, [{
              count: 1,
              start: r,
              name: e,
              params: t || {}
            }], n);
          },

          onEvents(e, t) {
            const n = In(),
                  r = [];
            e.forEach(e => {
              r.push({
                count: 1,
                start: n,
                name: e.eventName,
                params: e.param || {}
              });
            }), r.length > 0 && On(4, n, 0, r, t);
          },

          setAppKey(e) {
            An.conf.appKey = e;
          },

          setChannelId(e) {
            An.conf.channelId = e;
          },

          setOpenid(e) {
            e && e.length > 0 && (An.opid = e, Xe.setStorageSync(An.prefix + An.oik, e));
          },

          setUnionid(e) {
            e && e.length > 0 && (An.unid = e, Xe.setStorageSync(An.prefix + An.uik, e));
          },

          setGetLocation(e) {
            An.conf.getLocation = !0 === e, !0 === e && Cn();
          },

          setGetUserInfo(e) {
            An.conf.getUserInfo = !0 === e, !0 === e && Tn();
          }

        },
              Mn = {
          lastFrameTime: 0,
          deltaTime: 0,
          roomId: "",
          frameId: 0,
          trigger: (e, t) => {
            const n = Date.now(),
                  r = Mn.roomId,
                  i = Mn.frameId;
            Mn.roomId = e, Mn.frameId = t, 0 !== Mn.lastFrameTime && r === e && i + 1 === t ? (Mn.deltaTime = n - Mn.lastFrameTime, Sn.onBstFrameRate && Sn.onBstFrameRate(Mn.deltaTime), function (e, t) {
              if (!vn || bn.disableReport || bn.disableFrameReport || t < 0) return;
              const n = `{"reFt":${t},"frRt":${Gn.frameRate},"start":"${Dn()}"${e ? `,"rid":"${e + ""}"` : ""}}`;
              Nn.e5.push(n);
            }(e, Mn.deltaTime), Mn.lastFrameTime = n) : Mn.lastFrameTime = n;
          },
          clear: () => {
            Mn.lastFrameTime = 0, Mn.deltaTime = 0, Mn.roomId = "", Mn.frameId = 0;
          }
        },
              Pn = n(2);
        let vn = !1,
            Nn = {
          e2: [],
          e5: []
        },
            Ln = Date.now(),
            bn = {
          reportInterval: 1e4,
          disableReport: !1,
          disableFrameReport: !1,
          disableReqReport: !1,
          minReportSize: 10
        };

        function Dn() {
          const e = 60 * (new Date().getTimezoneOffset() + 480) * 1e3,
                t = new Date(Be.getServerTime_UTC_8() + e),
                n = e => e < 10 ? "0" + e : e + "";

          return `${t.getFullYear()}-${n(t.getMonth() + 1)}-${n(t.getDate())} ${n(t.getHours())}:${n(t.getMinutes())}:${n(t.getSeconds())}`;
        }

        function wn() {
          Mn.clear(), Ln = Date.now();
        }

        setInterval(() => {
          vn && Nn.e2.length + Nn.e5.length > bn.minReportSize && function () {
            if (!ke.isInited()) return;
            const e = {};
            e.sv = Pn.version || "", e.pi = yn.id || "", e.gi = Ge.gameId || "", e.sc = ze || 0, e.es = `{"e2":[${Nn.e2.join(",")}],"e5":[${Nn.e5.join(",")}]}`, An.onEvents([{
              eventName: mn.batch,
              param: e
            }], () => null), Nn = {
              e2: [],
              e5: []
            };
          }();
        }, bn.reportInterval);
        const Gn = {
          lastTime: 0,
          frameRate: 0,
          callback: e => null,
          run: e => {
            Gn.callback && Gn.callback(e), "function" == typeof requestAnimationFrame && requestAnimationFrame(Gn.run);
          }
        };
        Gn.callback = e => {
          if (0 === Gn.lastTime) return void (Gn.lastTime = e);
          const t = e,
                n = t - Gn.lastTime,
                r = Math.round(1e3 / (n + 1e-6));
          Gn.frameRate = r, Gn.lastTime = t, Sn.onRenderFrameRate && Sn.onRenderFrameRate(n);
        }, Gn.run(0);
        const Un = Math.pow(2, 12);

        function Yn(e) {
          let t = !1;
          return [Me.EC_ACCESS_CMD_GET_TOKEN_ERR, Me.EC_ACCESS_CMD_TOKEN_PRE_EXPIRE, Me.EC_ACCESS_CMD_INVALID_TOKEN, Me.EC_ACCESS_GET_COMM_CONNECT_ERR].includes(e) && (t = !0), t;
        }

        function kn(e) {
          let t = !1;
          return [Me.EC_ACCESS_GET_RELAY_CONNECT_ERR].includes(e) && (t = !0), t;
        }

        var Fn,
            qn = class extends Xt {
          sendRequest(e, t, n, r, i, o = "") {
            if (!o) {
              o = function () {
                const e = Et.encode(dt++);
                return dt >= Number.MAX_SAFE_INTEGER && (dt = 1), e;
              }();

              const s = {
                time: Date.now(),
                isSocketSend: !1,
                cmd: t,
                response: e => {
                  n(!0, e, r), this.deleteSeqQueue(o);
                },
                resend: () => this.sendRequest(e, t, n, r, i, o),

                sendSuccess() {
                  this.isSocketSend = !0;
                },

                sendFail: (e, t = "") => {
                  n(!1, {
                    RspWrap1: {
                      seq: o,
                      body: null,
                      errCode: e,
                      errMsg: `消息发送失败 [${e}]`
                    },
                    RspWrap2: null,
                    body: null
                  }, r), this.deleteSeqQueue(o);
                },
                remove: () => this.deleteSeqQueue(o)
              };
              this.addSeqQueue(o, s);
            }

            const s = Object.assign({}, De, {
              cmd: i,
              seq: o,
              body: null
            }),
                  a = {
              cmd: t,
              body: null
            };

            let _ = new Uint8Array([]);

            try {
              _ = function (e, t, n) {
                const r = t.cmd,
                      i = En.get(r);
                if (!i || !i.bufferify) throw new Error("找不到该 cmd 编码方法: " + r);
                const o = i.bufferify(n),
                      s = cn.bufferify(Object.assign({}, t, {
                  body: o
                }));
                return un.bufferify(Object.assign({}, e, {
                  body: s
                }));
              }(s, a, e);
            } catch (e) {
              const t = Me.EC_SDK_ENCODE_PARAM_FAIL,
                    n = e + "",
                    r = Xt.sendQueue.get(o);
              return setTimeout(() => r && r.sendFail(t, n), 0), o;
            }

            if (_.length > Un) {
              const e = Xt.sendQueue.get(o);
              return setTimeout(() => e && e.sendFail(Me.EC_SDK_SEND_FAIL, "数据长度超限"), 0), o;
            }

            const E = this.buildData(_);
            return this.send(E, o, t);
          }

          buildData(e) {
            const t = new Uint8Array(1),
                  n = new Uint8Array(1);
            return t[0] = jt.CLIENT_PRE, n[0] = jt.CLIENT_END, super.buildData(t, e, n);
          }

          handleMessage(e) {
            const t = function (e, t) {
              const n = hn.objectify(e),
                    r = pn.objectify(n.body),
                    i = (e => {
                const t = Xt.sendQueue.get(e);
                if (t) return t.cmd;
              })(n.seq);

              if (!i) return null;
              let o = null;
              const s = ln.get(i);
              if (!s || !s.objectify) return console.error("找不到该 cmd 解码方法: " + i), {
                RspWrap1: n,
                RspWrap2: r,
                body: o
              };
              r.body && (o = s.objectify(r.body));
              const {
                errCode: a,
                errMsg: _
              } = on(n.errCode, n.errMsg);
              return n.errMsg = _, n.errCode = a, n.body = null, r.body = null, {
                RspWrap1: n,
                RspWrap2: r,
                body: o
              };
            }(e);

            if (!t || !t.RspWrap1 || !t.RspWrap1.seq) return;
            const n = Xt.sendQueue.get(t.RspWrap1.seq);
            return n && (function (e, t) {
              if (!vn || bn.disableReport || bn.disableReqReport || e.time < 0) return;
              if (t < Ln) return;
              e && e.rqCmd === He.E_CMD_HEART_BEAT_REQ && Sn.onPingTime && Sn.onPingTime(e.time);
              const n = Dn(),
                    r = `{"rqCd":${e.rqCd},"rqSq":"${e.rqSq}","rqCmd":${e.rqCmd},"time":${e.time},"start":"${n}"}`;
              Nn.e2.push(r);
            }({
              rqCmd: n.cmd,
              rqSq: t.RspWrap1.seq,
              rqCd: t.RspWrap1.errCode,
              time: Date.now() - n.time
            }, n.time), n.cmd === He.E_CMD_HEART_BEAT_REQ || !this.handleErrCode(t.RspWrap1)) ? n.response(t) : void 0;
          }

          handleResponse(e) {
            return this.handleMessage(e);
          }

          handleErrCode(e) {
            return Yn(e.errCode) ? (this.handleTokenErr(), ot.log("TOKEN_ERROR", e), !0) : !(!kn(e.errCode) || this.socket.id !== o.ConnectionType.RELAY || (this.handleRelayConnectErr(), ot.log("RELAY_CONNECT_ERROR", e), 0));
          }

          handleSuccess(e, t) {
            e === Me.EC_OK && t();
          }

          handleTokenErr() {
            Fe.setStatus(Fe.StatusType.LOGOUT), this.socket.emit(Bt.autoAuth, {});
          }

          handleRelayConnectErr() {
            qe.setStatus(qe.StatusType.OFFLINE), this.socket.emit(Bt.autoAuth, {});
          }

        },
            Hn = class extends Xt {
          constructor() {
            super();
          }

          buildData(e) {
            const t = new Uint8Array(1),
                  n = new Uint8Array(1);
            return t[0] = jt.SERVER_PRE, n[0] = jt.SERVER_END, super.buildData(t, e, n);
          }

          handleMessage(e) {
            const t = function (e) {
              const t = Rn.objectify(e),
                    n = fn.objectify(t.body);
              let r = null;
              const i = dn.get(n.type);
              return i && i.objectify ? (n.msg && (r = i.objectify(n.msg)), t.body = null, n.msg = null, {
                BstWrap1: t,
                BstWrap2: n,
                body: r
              }) : (console.error("找不到该 push 解码方法: " + n.type), {
                BstWrap1: t,
                BstWrap2: n,
                body: r
              });
            }(e),
                  n = Xt.broadcastHandlers.get(t.BstWrap2.type);

            n && n(t.body, t.BstWrap1.seq);
          }

          handleBroadcast(e) {
            return this.handleMessage(e);
          }

        };
        !function (e) {
          e.comm = "comm_cmd", e.relay = "relay_cmd";
        }(Fn || (Fn = {}));
        const xn = [o.ClientSendServerReqWrap2Cmd.E_CMD_CREATE_ROOM_REQ, o.ClientSendServerReqWrap2Cmd.E_CMD_JOIN_ROOM_REQ, o.ClientSendServerReqWrap2Cmd.E_CMD_QUIT_ROOM_REQ, o.ClientSendServerReqWrap2Cmd.E_CMD_DISSMISS_ROOM_REQ, o.ClientSendServerReqWrap2Cmd.E_CMD_CHANGE_ROOM_PROPERTIS_REQ, o.ClientSendServerReqWrap2Cmd.E_CMD_REMOVE_MEMBER_REQ, o.ClientSendServerReqWrap2Cmd.E_CMD_CHANGE_PLAYER_STATE_REQ, o.ClientSendServerReqWrap2Cmd.E_CMD_START_FRAME_SYNC_REQ, o.ClientSendServerReqWrap2Cmd.E_CMD_STOP_FRAME_SYNC_REQ];

        class Bn {
          constructor(e) {
            this.client = new qn(), this.server = new Hn(), this.bstCallbacks = e;
          }

          static startQueueLoop() {
            Bn.checkLoginQueue = [], Bn.roomQueue = [], Xt.startQueueLoop();
          }

          static stopQueueLoop() {
            Bn.checkLoginQueue = [], Bn.roomQueue = [], Xt.stopQueueLoop();
          }

          bindSocket(e) {
            const t = this.client.handleResponse.bind(this.client),
                  n = this.server.handleBroadcast.bind(this.server);
            this.client.bindSocket(e, t, n), this.server.bindSocket(e, t, n);
          }

          unbindSocket() {
            this.client.unbindSocket(), this.server.unbindSocket();
          }

          setBroadcastHandler(e, t) {
            this.server.setBroadcastHandler(e, t);
          }

          send(e, t, n, r) {
            let i = Fn.comm;
            this.client.socket.id === o.ConnectionType.RELAY && (i = Fn.relay);
            const s = {
              body: e,
              subcmd: t,
              response: n,
              callback: r,
              requestCmd: i,
              running: !1
            };
            let a = null;
            return t === o.ClientSendServerReqWrap2Cmd.E_CMD_CHECK_LOGIN_REQ && (a = Bn.checkLoginQueue, s.beforeRequest = () => {
              qe.setStatus(qe.StatusType.CHECKING);
            }, s.afterRequest = e => {
              ot.log("CHECKLOGIN", e);
            }), xn.includes(t) && (a = Bn.roomQueue), a ? this.pushQueue(s, a) : this.sendRequest(s);
          }

          pushQueue(e, t) {
            const n = e.callback;
            return e.callback = (r, i, o, s) => {
              n && n(r, i, o, s), e.running = !1, t.shift(), this.sendQueue(t);
            }, t.push(e), this.sendQueue(t);
          }

          sendQueue(e) {
            if (!Array.isArray(e) || 0 === e.length || e[0].running) return "NO_SEQ";
            const t = e[0];
            return this.sendRequest(t);
          }

          sendRequest(e) {
            e.running = !0, e.beforeRequest && e.beforeRequest();
            const t = this.client.sendRequest(e.body, e.subcmd, e.response, e.callback, e.requestCmd);
            return e.afterRequest && e.afterRequest(t), t;
          }

        }

        Bn.checkLoginQueue = [], Bn.roomQueue = [];
        var Vn = Bn,
            Qn = class extends Vn {
          constructor(e) {
            super(e), this.matchTimeoutBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MATCH_TIMEOUT, this.matchUsersBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MATCH_SUCCESS, this.cancelMatchBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MATCH_CANCEL, this.setBroadcastHandler(this.matchTimeoutBroadcastType, this.matchUsersTimeoutBroadcast.bind(this)), this.setBroadcastHandler(this.matchUsersBroadcastType, this.matchUsersBroadcast.bind(this)), this.setBroadcastHandler(this.cancelMatchBroadcastType, this.cancelMatchBroadcast.bind(this));
          }

          matchUsersComplex(e, t) {
            const n = He.E_CMD_MATCH_PLAYER_COMPLEX_REQ,
                  r = this.send(e, n, this.matchUsersComplexResponse.bind(this), t);
            return ot.log("MATCH_USERS_COMPLEX_Para", e, r), r;
          }

          matchGroup(e, t) {
            const n = He.E_CMD_MATCH_GROUP_REQ,
                  r = this.send(e, n, this.matchGroupResponse.bind(this), t);
            return ot.log("MATCH_GROUP_Para", e, r), r;
          }

          matchRoom(e, t) {
            const n = He.E_CMD_MATCH_ROOM_SIMPLE_REQ,
                  r = this.send(e, n, this.matchRoomResponse.bind(this), t);
            return ot.log("MATCH_ROOM_Para", e, r), r;
          }

          cancelMatch(e, t) {
            const n = He.E_CMD_MATCH_CANCEL_MATCH_REQ,
                  r = this.send(e, n, this.cancelMatchResponse.bind(this), t);
            return ot.log("CANCEL_MATCH_Para", e, r), r;
          }

          matchUsersComplexResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("matchPlayersRsp", i), n && n(i);
          }

          matchGroupResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("matchGroupRsp", i), n && n(i);
          }

          matchRoomResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("matchRoomSimpleRsp", i), n && n(i);
          }

          cancelMatchResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("cancelPlayerMatchRsp", i), n && n(i);
          }

          matchUsersTimeoutBroadcast(e, t) {
            const n = {
              data: e,
              seq: t
            };
            return this.bstCallbacks.room.onMatchTimeout(n);
          }

          matchUsersBroadcast(e, t) {
            const n = {
              data: e,
              seq: t
            };
            return this.bstCallbacks.room.onMatchPlayers(n);
          }

          cancelMatchBroadcast(e, t) {
            const n = {
              data: e,
              seq: t
            };
            return this.bstCallbacks.room.onCancelMatch(n);
          }

        },
            Wn = class extends Vn {
          constructor(e) {
            super(e), this.joinRoomBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_JOIN_ROOM, this.leaveRoomBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_LEAVE_ROOM, this.dismissRoomBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_DISMISS_ROOM, this.changeRoomBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MODIFY_ROOM_PROPERTY, this.removeUserBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_REMOVE_PLAYER, this.changeUserStateBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_PLAYER_STATE, this.roomUserNetworkBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_NETWORK_STATE, this.setBroadcastHandler(this.joinRoomBroadcastType, this.onJoinRoom.bind(this)), this.setBroadcastHandler(this.leaveRoomBroadcastType, this.onLeaveRoom.bind(this)), this.setBroadcastHandler(this.dismissRoomBroadcastType, this.onDismissRoom.bind(this)), this.setBroadcastHandler(this.changeRoomBroadcastType, this.onChangeRoom.bind(this)), this.setBroadcastHandler(this.removeUserBroadcastType, this.onRemoveUser.bind(this)), this.setBroadcastHandler(this.changeUserStateBroadcastType, this.onChangeUserState.bind(this)), this.setBroadcastHandler(this.roomUserNetworkBroadcastType, this.onChangePlayerNetworkState.bind(this));
          }

          createRoom(e, t) {
            const n = He.E_CMD_CREATE_ROOM_REQ,
                  r = this.send(e, n, this.createRoomResponse.bind(this), t);
            return ot.log("CREATE_ROOM_Para", e, r), r;
          }

          joinRoom(e, t) {
            const n = He.E_CMD_JOIN_ROOM_REQ,
                  r = this.send(e, n, this.joinRoomResponse.bind(this), t);
            return ot.log("JOIN_ROOM_Para", e, r), r;
          }

          leaveRoom(e, t) {
            const n = He.E_CMD_QUIT_ROOM_REQ,
                  r = this.send(e, n, this.leaveRoomResponse.bind(this), t);
            return ot.log("LEAVE_ROOM_Para", e, r), r;
          }

          dismissRoom(e, t) {
            const n = He.E_CMD_DISSMISS_ROOM_REQ,
                  r = this.send(e, n, this.dismissRoomResponse.bind(this), t);
            return ot.log("DISMISS_ROOM_Para", e, r), r;
          }

          changeRoom(e, t) {
            const n = He.E_CMD_CHANGE_ROOM_PROPERTIS_REQ,
                  r = this.send(e, n, this.changeRoomResponse.bind(this), t);
            return ot.log("CHANGE_ROOM_Para", e, r), r;
          }

          removeUser(e, t) {
            const n = He.E_CMD_REMOVE_MEMBER_REQ,
                  r = this.send(e, n, this.removeUserResponse.bind(this), t);
            return ot.log("REMOVE_USER_Para", e, r), r;
          }

          getRoomByRoomId(e, t) {
            const n = He.E_CMD_GET_ROOM_DETAIL_REQ,
                  r = this.send(e, n, this.getRoomByRoomIdRsp().bind(this), t);
            return ot.log("GET_ROOM_BY_ROOM_ID_Para", e, r), r;
          }

          getRoomList(e, t) {
            const n = He.E_CMD_GET_ROOM_LIST_V2_REQ,
                  r = this.send(e, n, this.getRoomListResponse.bind(this), t);
            return ot.log("GET_ROOM_LIST_Para", e, r), r;
          }

          createRoomResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("createRoomRsp", i), n && n(i);
          }

          joinRoomResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("joinRoomRsp", i), n && n(i);
          }

          leaveRoomResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("leaveRoomRsp", i), n && n(i);
          }

          dismissRoomResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("dismissRoomRsp", i), n && n(i);
          }

          changeRoomResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("changeRoomRsp", i), n && n(i);
          }

          removeUserResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("removePlayerRsp", i), n && n(i);
          }

          getRoomByRoomIdRsp() {
            return (e, t, n) => {
              const r = t.RspWrap1,
                    i = {
                code: r.errCode,
                msg: r.errMsg,
                seq: r.seq,
                data: t.body
              };
              ot.log("getRoomByRoomIdRsp", i), n && n(i);
            };
          }

          getRoomListResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("getRoomListRsp", i), n && n(i);
          }

          onJoinRoom(e, t) {
            const n = {
              data: e,
              seq: t
            };
            return this.bstCallbacks.room.onJoinRoom(n);
          }

          onLeaveRoom(e, t) {
            const n = {
              data: e,
              seq: t
            };
            return this.bstCallbacks.room.onLeaveRoom(n);
          }

          onDismissRoom(e, t) {
            const n = {
              data: e,
              seq: t
            };
            return this.bstCallbacks.room.onDismissRoom(n);
          }

          onChangeRoom(e, t) {
            const n = {
              data: e,
              seq: t
            };
            return this.bstCallbacks.room.onChangeRoom(n);
          }

          onRemoveUser(e, t) {
            const n = {
              data: e,
              seq: t
            };
            return this.bstCallbacks.room.onRemovePlayer(n);
          }

          onChangeUserState(e, t) {
            const n = {
              data: e,
              seq: t
            };
            return this.bstCallbacks.room.onChangeCustomPlayerStatus(n);
          }

          onChangePlayerNetworkState(e, t) {
            const n = {
              data: e,
              seq: t
            };

            if (ot.log("onChangeNetworkState", n), n.data.roomInfo) {
              const e = JSON.parse(JSON.stringify(n));
              delete e.data.groupIdList, this.bstCallbacks.room.onChangePlayerNetworkState(e);
            }

            if (Array.isArray(n.data.groupIdList) && n.data.groupIdList.length > 0) {
              const e = JSON.parse(JSON.stringify(n));
              delete e.data.roomInfo, delete e.data.roomId, this.bstCallbacks.group.onChangeGroupPlayerNetworkState(e);
            }
          }

        },
            Kn = class {
          constructor(e) {
            this.netUtil1 = null, this.netUtil2 = null, this.frameBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_RELAY, this.startGameBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_START_GAME, this.stopGameBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_STOP_GAME, this.sendMessageExtBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_GAMESVR, this.bstCallbacks = e, this.netUtil1 = new Vn(e), this.netUtil2 = new Vn(e), this.netUtil1.setBroadcastHandler(this.startGameBroadcastType, this.onStartFrameSync.bind(this)), this.netUtil1.setBroadcastHandler(this.stopGameBroadcastType, this.onStopFrameSync.bind(this)), this.netUtil2.setBroadcastHandler(this.frameBroadcastType, this.onRecvFrame.bind(this)), this.netUtil2.setBroadcastHandler(this.sendMessageExtBroadcastType, this.onRecvFromGameSvr.bind(this));
          }

          setFrameRoom(e) {
            ot.log("SETFRAMEROOM", e);
            const t = this.getFrameRoom();
            this.roomInfo = e || {
              roomId: 0,
              routeId: ""
            };
            const n = t.routeId,
                  r = this.roomInfo.routeId;
            return r ? n !== r ? (qe.setStatus(qe.StatusType.OFFLINE), this.autoCheckLogin()) : n === r ? this.autoCheckLogin() : void 0 : this.netUtil2.client.socket && this.netUtil2.client.socket.close();
          }

          getFrameRoom() {
            return this.roomInfo || {
              id: 0,
              routeId: ""
            };
          }

          isRoomExist() {
            return !!this.roomInfo && !!this.roomInfo.id;
          }

          startFrameSync(e, t) {
            if (!this.isRoomExist()) {
              const e = {
                RspWrap1: {
                  seq: null,
                  body: null,
                  errCode: Me.EC_SDK_NO_ROOM,
                  errMsg: "无房间信息"
                },
                RspWrap2: null,
                body: null
              };
              return void this.startFrameSyncResponse(!1, e, t);
            }

            const n = He.E_CMD_START_FRAME_SYNC_REQ,
                  r = this.netUtil1.send(e, n, this.startFrameSyncResponse.bind(this), t);
            return ot.log("START_FRAMESYNC_Para", e, r), r;
          }

          stopFrameSync(e, t) {
            if (!this.isRoomExist()) {
              const e = {
                RspWrap1: {
                  seq: null,
                  body: null,
                  errCode: Me.EC_SDK_NO_ROOM,
                  errMsg: "无房间信息"
                },
                RspWrap2: null,
                body: null
              };
              return void this.stopFrameSyncResponse(!1, e, t);
            }

            const n = He.E_CMD_STOP_FRAME_SYNC_REQ,
                  r = this.netUtil1.send(e, n, this.stopFrameSyncResponse.bind(this), t);
            return ot.log("STOP_FRAMESYNC_Para", e, r), r;
          }

          sendFrame(e, t) {
            if (!this.isRoomExist()) {
              const e = {
                RspWrap1: {
                  seq: null,
                  body: null,
                  errCode: Me.EC_SDK_NO_ROOM,
                  errMsg: "无房间信息"
                },
                RspWrap2: null,
                body: null
              };
              return void this.sendFrameResponse(!1, e, t);
            }

            this.autoCheckLogin();
            const n = He.E_CMD_RELAY_SEND_FRAME_REQ,
                  r = this.netUtil2.send(e, n, this.sendFrameResponse.bind(this), t);
            return ot.log("SEND_FRAME_Para", e, r), r;
          }

          requestFrame(e, t) {
            if (!this.isRoomExist()) {
              const e = {
                RspWrap1: {
                  seq: null,
                  body: null,
                  errCode: Me.EC_SDK_NO_ROOM,
                  errMsg: "无房间信息"
                },
                RspWrap2: null,
                body: null
              };
              return void this.requestFrameResponse(!1, e, t);
            }

            this.autoCheckLogin();
            const n = He.E_CMD_RELAY_REQUEST_FRAME_REQ,
                  r = this.netUtil2.send(e, n, this.requestFrameResponse.bind(this), t);
            return ot.log("REQUEST_FRAME_Para", e, r), r;
          }

          checkLogin(e, t) {
            if (!this.isRoomExist()) {
              const t = {
                RspWrap1: {
                  seq: null,
                  body: null,
                  errCode: Me.EC_SDK_NO_ROOM,
                  errMsg: "无房间信息"
                },
                RspWrap2: null,
                body: null
              };
              return void this.checkLoginResponse(!1, t, e);
            }

            qe.setStatus(qe.StatusType.CHECKING);
            const n = He.E_CMD_CHECK_LOGIN_REQ,
                  r = {
              token: De.authKey,
              routeId: this.roomInfo.routeId
            },
                  i = this.netUtil2.send(r, n, this.checkLoginResponse.bind(this), e);
            return ot.log("CHECKLOGIN", i, t, r.routeId), qe.setRouteId(r.routeId), i;
          }

          sendMessageExt(e, t) {
            if (!this.isRoomExist()) {
              const e = {
                RspWrap1: {
                  seq: null,
                  body: null,
                  errCode: Me.EC_SDK_NO_ROOM,
                  errMsg: "无房间信息"
                },
                RspWrap2: null,
                body: null
              };
              return void this.sendMessageExtResponse(!1, e, t);
            }

            this.autoCheckLogin();
            const n = He.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ,
                  r = this.netUtil2.send(e, n, this.sendMessageExtResponse.bind(this), t);
            return ot.log("SEND_TO_GAMESVR_Para", e, r), r;
          }

          startFrameSyncResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("startFrameSyncRsp", i), n && n(i);
          }

          stopFrameSyncResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("stopFrameSyncRsp", i), n && n(i);
          }

          autoCheckLogin() {
            this.connect(), this.netUtil2.client.socket.isConnect() && qe.isOffline() && this.netUtil2.client.socket.emit(Bt.autoAuth, {});
          }

          connect() {
            !this.netUtil2.client.socket.isConnect() && this.roomInfo && (this.netUtil2.client.socket.url = Le.url + ":" + (Le.enableUDP ? 8585 : 5443), this.netUtil2.client.socket.connect("framesender connect"));
          }

          sendFrameResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("sendFrameRsp", i), n && n(i);
          }

          checkLoginResponse(e, t, n) {
            qe.setStatus(qe.StatusType.OFFLINE);
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            return i.code === Me.EC_OK && qe.setStatus(qe.StatusType.CHECKED), ot.log("RESPONSE_CheckLoginResponse", i), n && n(i);
          }

          requestFrameResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("requestFrameRsp", i), n && n(i);
          }

          sendMessageExtResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("sendToGameSvrRsp", i), n && n(i);
          }

          onRecvFrame(e, t) {
            const n = {
              data: {
                frame: Object.assign({}, e.frame, {
                  roomId: this.getFrameRoom().id
                })
              },
              seq: t
            };
            return Mn.trigger(this.roomInfo.id || void 0, n.data.frame.id), this.bstCallbacks.room.onRecvFrame(n);
          }

          onStartFrameSync(e, t) {
            const n = {
              data: Object.assign({}, e),
              seq: t
            };
            return Mn.clear(), this.bstCallbacks.room.onStartFrameSync(n);
          }

          onStopFrameSync(e, t) {
            const n = {
              data: Object.assign({}, e),
              seq: t
            };
            return Mn.clear(), this.bstCallbacks.room.onStopFrameSync(n);
          }

          onRecvFromGameSvr(e, t) {
            let n = {};

            try {
              n = JSON.parse(e.data);
            } catch (t) {
              n = e.data;
            }

            const r = {
              data: Object.assign({}, e, {
                data: n
              }, {
                roomId: e.roomId
              }),
              seq: t
            };
            return this.bstCallbacks.room.onRecvFromGameSvr(r);
          }

        },
            jn = class extends Vn {
          constructor(e) {
            super(e), this.messageBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_ROOM_CHAT, this.setBroadcastHandler(this.messageBroadcastType, this.onRecvFromClient.bind(this));
          }

          sendMessage(e, t) {
            const n = He.E_CMD_ROOM_CHAT_REQ,
                  r = this.send(e, n, this.sendMessageResponse.bind(this), t);
            return ot.log("SEND_MESSAGE_Para", e, r), r;
          }

          sendMessageResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("sendToClientRsp", i), n && n(i);
          }

          onRecvFromClient(e, t) {
            const n = {
              data: e,
              seq: t
            };
            return this.bstCallbacks.room.onRecvFromClient(n);
          }

        },
            Jn = class extends Vn {
          constructor(e) {
            super(e);
          }

          login(e, t, n, r) {
            const i = He.E_CMD_LOGIN_REQ;
            let o, s, a;
            Array.from(this.client.queue).forEach(e => {
              const t = Xt.sendQueue.get(e);
              t && t.cmd === i && this.client.deleteSeqQueue(e);
            }), n ? (o = n.timestamp, s = n.nonce, a = n.sign) : (o = Math.floor(Date.now() / 1e3), s = Math.floor(Math.random() * (Math.pow(2, 32) - 1)), a = function (e, t, n, r, i) {
              const o = [["game_id", t], ["open_id", n], ["nonce", i], ["timestamp", r]].sort().map(e => e.join("=")).join("&"),
                    s = at(o, e || "");
              return {
                sign: st.stringify(s)
              };
            }(t, e.gameId, e.openId, o, s).sign);
            const _ = $e,
                  E = ze,
                  l = ct,
                  d = {
              gameId: e.gameId,
              openId: e.openId,
              sign: a,
              timestamp: o,
              nonce: s,
              platform: _,
              channel: E,
              deviceId: l,
              mac: void 0,
              imei: void 0
            };
            Fe.setStatus(Fe.StatusType.LOGINING);
            const u = this.send(d, i, this.loginResponse.bind(this), r);
            return ot.log("LOGIN_Para", d, u), Fe.setErrCode(0, ""), u;
          }

          logout(e, t) {
            const n = He.E_CMD_LOGOUT_REQ,
                  r = this.send(e, n, this.logoutResponse.bind(this), t);
            return ot.log("LOGOUT_Para", e, r), Fe.setStatus(Fe.StatusType.LOGOUTING), r;
          }

          changeUserState(e, t) {
            const n = He.E_CMD_CHANGE_PLAYER_STATE_REQ,
                  r = this.send(e, n, this.changeUserStateResponse.bind(this), t);
            return ot.log("CHANGE_USER_STATE_Para", e, r), r;
          }

          loginResponse(e, t, n) {
            e || Fe.setStatus(Fe.StatusType.LOGOUT);
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            this.client.handleSuccess(i.code, () => {
              De.authKey = t.body.token, De.playerId = t.body.playerId, Fe.setStatus(Fe.StatusType.LOGIN), !Ye.getInfo().id && Ye.setInfo({
                id: i.data.playerId
              }), Be.setServerTime(t.body.sdkConfig.serverTime);
            }), Fe.setErrCode(i.code, i.msg), n && n(i), ot.log("RESPONSE_LoginResponse", i);
          }

          logoutResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq
            };
            return ot.log("RESPONSE_LogoutResponse", i), this.client.handleSuccess(i.code, () => {
              De.authKey = void 0, De.playerId = void 0, Fe.setStatus(Fe.StatusType.LOGOUT), Ye.setInfo({
                id: void 0
              });
            }), n && n(i);
          }

          changeUserStateResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("changeCustomPlayerStatusRsp", i), n && n(i);
          }

        },
            Xn = class extends Vn {
          constructor(e) {
            super(e), this.joinGroupBstType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_JOIN_GROUP, this.leaveGroupBstType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_LEAVE_GROUP, this.dismissGroupBstType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_DISMISS_GROUP, this.changeGroupBstType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MODIFY_GROUP_PROPERTY, this.removeGroupBstType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_REMOVE_GROUP_PLAYER, this.changeCustomGroupPlayerStatusBstType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_GROUP_PLAYER_STATE, this.recvFromGroupClientType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_GROUP_CHAT, this.setBroadcastHandler(this.joinGroupBstType, this.onJoinGroup.bind(this)), this.setBroadcastHandler(this.leaveGroupBstType, this.onLeaveGroup.bind(this)), this.setBroadcastHandler(this.dismissGroupBstType, this.onDismissGroup.bind(this)), this.setBroadcastHandler(this.changeGroupBstType, this.onChangeGroup.bind(this)), this.setBroadcastHandler(this.removeGroupBstType, this.onRemoveGroupPlayer.bind(this)), this.setBroadcastHandler(this.changeCustomGroupPlayerStatusBstType, this.onChangeCustomGroupPlayerStatus.bind(this)), this.setBroadcastHandler(this.recvFromGroupClientType, this.onRecvFromGroupClient.bind(this));
          }

          createGroup(e, t) {
            const n = He.E_CMD_CREATE_GROUP_REQ,
                  r = this.send(e, n, this.createGroupResponse.bind(this), t);
            return ot.log("CREATE_GROUP_Para", e, r), r;
          }

          joinGroup(e, t) {
            const n = He.E_CMD_JOIN_GROUP_REQ,
                  r = this.send(e, n, this.joinGroupResponse.bind(this), t);
            return ot.log("JOIN_GROUP_Para", e, r), r;
          }

          leaveGroup(e, t) {
            const n = He.E_CMD_QUIT_GROUP_REQ,
                  r = this.send(e, n, this.leaveGroupResponse.bind(this), t);
            return ot.log("LEAVE_GROUP_Para", e, r), r;
          }

          dismissGroup(e, t) {
            const n = He.E_CMD_DISMISS_GROUP_REQ,
                  r = this.send(e, n, this.dismissGroupResponse.bind(this), t);
            return ot.log("DISMISS_GROUP_Para", e, r), r;
          }

          changeGroup(e, t) {
            const n = He.E_CMD_CHANGE_GROUP_PROPERTIES_REQ,
                  r = this.send(e, n, this.changeGroupResponse.bind(this), t);
            return ot.log("CHANGE_GROUP_Para", e, r), r;
          }

          removeGroupPlayer(e, t) {
            const n = He.E_CMD_REMOVE_GROUP_MEMBER_REQ,
                  r = this.send(e, n, this.removeGroupPlayerResponse.bind(this), t);
            return ot.log("REMOVE_GROUP_PLAYER_Para", e, r), r;
          }

          getGroupByGroupId(e, t) {
            const n = He.E_CMD_GET_GROUP_DETAIL_REQ,
                  r = this.send(e, n, this.getGroupByGroupIdResponse.bind(this), t);
            return ot.log("GET_GROUP_BY_GROUP_ID_Para", e, r), r;
          }

          getMyGroups(e, t) {
            const n = He.E_CMD_GET_GROUP_LIST_REQ,
                  r = this.send(e, n, this.getMyGroupsResponse.bind(this), t);
            return ot.log("GET_MY_GROUPS_Para", e, r), r;
          }

          changeCustomGroupPlayerStatus(e, t) {
            const n = He.E_CMD_CHANGE_GROUP_PLAYER_STATE_REQ,
                  r = this.send(e, n, this.changeCustomGroupPlayerStatusResponse.bind(this), t);
            return ot.log("CHANGE_CUSTOM_GROUP_PLAYER_STATUS_Para", e, r), r;
          }

          sendToGroupClient(e, t) {
            const n = He.E_CMD_GROUP_CHAT_REQ,
                  r = this.send(e, n, this.sendToGroupClientResponse.bind(this), t);
            return ot.log("SEND_TO_GROUP_CLIENT_Para", e, r), r;
          }

          createGroupResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("createGroupRsp", i), n && n(i);
          }

          joinGroupResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("joinGroupRsp", i), n && n(i);
          }

          leaveGroupResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("leaveGroupRsp", i), n && n(i);
          }

          dismissGroupResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("dismissGroupRsp", i), n && n(i);
          }

          changeGroupResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("changeGroupRsp", i), n && n(i);
          }

          removeGroupPlayerResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("removeGroupPlayerRsp", i), n && n(i);
          }

          getGroupByGroupIdResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("getGroupByGroupIdRsp", i), n && n(i);
          }

          getMyGroupsResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("getMyGroupsRsp", i), n && n(i);
          }

          changeCustomGroupPlayerStatusResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("changeCustomGroupPlayerStatusRsp", i), n && n(i);
          }

          sendToGroupClientResponse(e, t, n) {
            const r = t.RspWrap1,
                  i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("sendToGroupClientRsp", i), n && n(i);
          }

          onJoinGroup(e, t) {
            const n = {
              data: e,
              seq: t
            };
            return this.bstCallbacks.group.onJoinGroup(n);
          }

          onLeaveGroup(e, t) {
            const n = {
              data: e,
              seq: t
            };
            return this.bstCallbacks.group.onLeaveGroup(n);
          }

          onDismissGroup(e, t) {
            const n = {
              data: e,
              seq: t
            };
            return this.bstCallbacks.group.onDismissGroup(n);
          }

          onChangeGroup(e, t) {
            const n = {
              data: e,
              seq: t
            };
            return this.bstCallbacks.group.onChangeGroup(n);
          }

          onRemoveGroupPlayer(e, t) {
            const n = {
              data: e,
              seq: t
            };
            return this.bstCallbacks.group.onRemoveGroupPlayer(n);
          }

          onChangeCustomGroupPlayerStatus(e, t) {
            const n = {
              data: e,
              seq: t
            };
            return this.bstCallbacks.group.onChangeCustomGroupPlayerStatus(n);
          }

          onRecvFromGroupClient(e, t) {
            const n = {
              data: e,
              seq: t
            };
            return this.bstCallbacks.group.onRecvFromGroupClient(n);
          }

        },
            zn = class extends Vn {
          constructor(e, t, n) {
            super(e), this.pingTimer = new Ze(), this.pongTimer = new Ze(), this.currentSeq = "", this.retry = 2, this.id = t, this.frameSender = n;
          }

          get timeout() {
            return this.id === o.ConnectionType.RELAY && Le.enableUDP ? Le.pingTimeout / 2 : Le.pingTimeout;
          }

          unbindSocket() {
            this.stop(), super.unbindSocket();
          }

          ping(e) {
            if (nt(this.pingTimer), !De.authKey) return;
            const t = Date.now(),
                  n = this.frameSender && this.frameSender.roomInfo && this.frameSender.roomInfo.routeId ? this.frameSender.roomInfo.routeId : "",
                  r = {
              conType: this.id,
              routeId: n
            },
                  i = this.send(r, He.E_CMD_HEART_BEAT_REQ, (e, n) => this.handlePong(e, n, t), e);
            this.currentSeq = i, ot.log("PING", this.id, i), et(this.pongTimer, () => this.handlePongTimeout(i), this.timeout);
          }

          stop() {
            nt(this.pingTimer, this.pongTimer);
          }

          handlePong(e, t, n) {
            if (ot.log("Pong", this.id, t.RspWrap1, "send", e), nt(this.pongTimer), !e) return this.handlePongTimeout(t.RspWrap1.seq);
            this.retry = 2, this.client.clearQueue();
            const r = t.RspWrap1.errCode;
            return Yn(r) ? (Fe.setStatus(Fe.StatusType.LOGOUT), this.client.socket.emit(Bt.autoAuth, {})) : kn(r) && this.client.socket.id === o.ConnectionType.RELAY ? (qe.setStatus(qe.StatusType.OFFLINE), this.client.socket.emit(Bt.autoAuth, {})) : void et(this.pingTimer, this.ping.bind(this), this.timeout);
          }

          handlePongTimeout(e) {
            if (this.client.deleteSeqQueue(e), this.retry--, e === this.currentSeq && this.client.socket) {
              if (this.id === o.ConnectionType.RELAY && Le.enableUDP) {
                if (this.retry >= 0) return et(this.pingTimer, this.ping.bind(this), this.timeout);
                this.retry = 2;
              }

              this.client.socket.connectNewSocket(this.client.socket.url), this.client.clearQueue(), ot.log("Pong_Timeout", this.id);
            }
          }

        };

        class $n {
          constructor() {
            this.contexts = [];
          }

          bindCallbacks(e) {
            -1 === this.contexts.findIndex(t => t === e) && this.contexts.push(e), ot.log("BindCallbacks", this.contexts.length);
          }

          unbindCallbacks(e) {
            const t = this.contexts.findIndex(t => t === e);
            -1 !== t && this.contexts.splice(t, 1), ot.log("UnBindCallbacks", this.contexts.length);
          }

          clearCallbacks() {
            this.contexts = [], ot.log("ClearCallbacks", this.contexts.length);
          }

          handleBst(e, t) {
            "error" !== t && ot.log(t, e);

            for (const n of this.contexts) n && n[t + ""] && n[t + ""](e);
          }

        }

        class Zn extends $n {
          onJoinRoom(e) {
            this.handleBst(e, "onJoinRoom");
          }

          onLeaveRoom(e) {
            this.handleBst(e, "onLeaveRoom");
          }

          onDismissRoom(e) {
            this.handleBst(e, "onDismissRoom");
          }

          onChangeRoom(e) {
            this.handleBst(e, "onChangeRoom");
          }

          onRemovePlayer(e) {
            this.handleBst(e, "onRemovePlayer");
          }

          onMatchTimeout(e) {
            this.handleBst(e, "onMatchTimeout");
          }

          onMatchPlayers(e) {
            this.handleBst(e, "onMatchPlayers");
          }

          onCancelMatch(e) {
            this.handleBst(e, "onCancelMatch");
          }

          onRecvFromClient(e) {
            this.handleBst(e, "onRecvFromClient");
          }

          onRecvFromGameSvr(e) {
            this.handleBst(e, "onRecvFromGameSvr");
          }

          onChangePlayerNetworkState(e) {
            this.handleBst(e, "onChangePlayerNetworkState");
          }

          onRecvFrame(e) {
            this.handleBst(e, "onRecvFrame");
          }

          onChangeCustomPlayerStatus(e) {
            this.handleBst(e, "onChangeCustomPlayerStatus");
          }

          onStartFrameSync(e) {
            this.handleBst(e, "onStartFrameSync");
          }

          onStopFrameSync(e) {
            this.handleBst(e, "onStopFrameSync");
          }

          onNetwork(e) {
            this.handleBst(e, "onNetwork");
          }

        }

        class er extends $n {
          onJoinGroup(e) {
            this.handleBst(e, "onJoinGroup");
          }

          onLeaveGroup(e) {
            this.handleBst(e, "onLeaveGroup");
          }

          onDismissGroup(e) {
            this.handleBst(e, "onDismissGroup");
          }

          onChangeGroup(e) {
            this.handleBst(e, "onChangeGroup");
          }

          onRemoveGroupPlayer(e) {
            this.handleBst(e, "onRemoveGroupPlayer");
          }

          onChangeGroupPlayerNetworkState(e) {
            this.handleBst(e, "onChangeGroupPlayerNetworkState");
          }

          onChangeCustomGroupPlayerStatus(e) {
            this.handleBst(e, "onChangeCustomGroupPlayerStatus");
          }

          onRecvFromGroupClient(e) {
            this.handleBst(e, "onRecvFromGroupClient");
          }

          onNetwork(e) {
            this.handleBst(e, "onNetwork");
          }

        }

        let tr,
            nr,
            rr = null,
            ir = null,
            or = null,
            sr = null,
            ar = null,
            _r = null,
            Er = null,
            lr = null;

        function dr() {
          hr.instance.clearResponses(), tr && tr.destory(), nr && nr.destory(), ((...e) => {
            e.forEach(e => e && e.unbindSocket());
          })(or, sr, ar, _r, Er.netUtil1, Er.netUtil2, rr, ir, lr), Xe.offHide(hr.instance.onHide), Xe.offShow(hr.instance.onShow), ke.setStatus(ke.StatusType.UNINIT), Fe.setStatus(Fe.StatusType.LOGOUT), hr.instance.group = null;
        }

        const ur = {
          login(e) {
            const t = Object.assign({}, Ge),
                  n = t => {
              e && e(t), ur.loginRsp(t);
            };

            return Ge.createSignature ? or && Ge.createSignature(e => or.login(t, void 0, e, n)) : or && or.login(t, Ge.secretKey, null, n);
          },

          loginRsp(e) {
            if (ke.isIniting()) {
              if (e.code !== Me.EC_OK) return cr(!1, {
                code: e.code
              });
              let n = 5e3,
                  r = !1,
                  i = 0;
              return e.data.sdkConfig && (e.data.sdkConfig.pingInterval && (n = e.data.sdkConfig.pingInterval), e.data.sdkConfig.reportInterval && (bn.reportInterval = e.data.sdkConfig.reportInterval), e.data.sdkConfig.serverTime && (i = e.data.sdkConfig.serverTime), e.data.sdkConfig.enableUdp && (r = e.data.sdkConfig.enableUdp), e.data.sdkConfig.disableReport && (bn.disableReport = e.data.sdkConfig.disableReport), e.data.sdkConfig.disableFrameReport && (bn.disableFrameReport = e.data.sdkConfig.disableFrameReport), e.data.sdkConfig.disableReqReport && (bn.disableReqReport = e.data.sdkConfig.disableReqReport), e.data.sdkConfig.minReportSize && (bn.minReportSize = e.data.sdkConfig.minReportSize)), t = Ge.openId, De.playerId, ot.log("EventUploader"), An.init(), An.setOpenid(t || ""), vn = !0, Le.pingTimeout = n, Le.enableUDP = !!r, cr(!0, {
                code: Me.EC_OK,
                data: {
                  serverTime: i
                }
              }), rr.ping();
            }

            var t;
            e.code === Me.EC_OK && rr.ping();
          },

          logout: () => or && or.logout({}, ur.logoutRsp),

          logoutRsp(e) {
            e.code === Me.EC_OK && rr.stop();
          }

        };

        function cr(e, t) {
          if (ke.isIniting()) {
            e && ke.setStatus(ke.StatusType.INITED), !e && ke.setStatus(ke.StatusType.UNINIT);
            let n = ke.isInited() ? Me.EC_OK : Me.EC_SDK_UNINIT;
            !e && t && t.code !== Me.EC_OK && (n = t.code);
            const r = {
              default: "初始化失败。请确认域名是否正确配置，以及网络是否顺畅。",
              [Me.EC_ACCESS_PLAYER_DUPLICATE_LOGIN]: "初始化失败。用户已在其他客户端登录。",
              [Me.EC_INVALID_PARAMS_TIMESTAMP]: "初始化失败。请检查本地时间是否正常。",
              [Me.EC_INVALID_PARAMS_SIGN]: "初始化失败。签名校验失败，请检查初始化参数是否正确。",
              [Me.EC_INVALID_PARAMS_GAME_ID]: "初始化失败。请检查 gameId 是否正确。",
              [Me.EC_SDK_SEND_FAIL]: "初始化失败。消息发送失败，请检查网络是否正常。",
              [Me.EC_SDK_RES_TIMEOUT]: "初始化失败。消息响应超时，请检查网络后重试。",
              [Me.EC_SDK_SOCKET_ERROR]: "初始化失败。网络异常。" + (t.errMsg || ""),
              [Me.EC_SDK_SOCKET_CLOSE]: "初始化失败。网络已断开。"
            },
                  i = ke.isInited() ? "初始化成功" : r[n] || r.default,
                  o = t.data && t.data.serverTime || void 0;
            hr.instance.initRsp && hr.instance.initRsp({
              code: n,
              msg: i,
              seq: null,
              data: {
                serverTime: o
              }
            });
          }
        }

        class hr {
          constructor(e, t) {
            if (this.ErrCode = hr.ErrCode, this.ENUM = hr.ENUM, this.group = null, !e.openId && (e.openId = ""), e.openId = e.openId + "", Object.assign(Ge, e), Object.assign(Le, t, {
              pingTimeout: Le.pingTimeout
            }), De.gameId = Ge.gameId, ot.log("CONSTRUCTOR", e, t), hr.instance instanceof hr) return hr.instance;
            hr.instance = this;
          }

          clearResponses() {
            hr.bstCallbacks.clearCallbacks();
          }

          onHide() {
            Fe.setStatus(Fe.StatusType.LOGOUT), qe.setStatus(qe.StatusType.OFFLINE), rr && rr.stop(), ir && ir.stop(), ir.client.socket.id === o.ConnectionType.RELAY && Le.enableUDP && ir.client.socket.close(), wn(), ot.log("SDK_onHide");
          }

          onShow() {
            rr && rr.stop(), ir && ir.stop(), rr && rr.client.socket.url && rr.ping(), ir && ir.client.socket.url && ir.ping(), wn(), ot.log("SDK_onShow", rr.client.socket.url, ir.client.socket.url);
          }

          getSocket(e) {
            return e === o.ConnectionType.COMMON ? tr : e === o.ConnectionType.RELAY ? nr : void 0;
          }

          init(e) {
            this.initRsp = t => {
              e(t);
            }, function () {
              var e, t;
              ke.isUnInit() && (or && dr(), ke.setStatus(ke.StatusType.INITING), or = new Jn(hr.bstCallbacks), ar = new Qn(hr.bstCallbacks), _r = new jn(hr.bstCallbacks), sr = new Wn(hr.bstCallbacks), Er = new Kn(hr.bstCallbacks), lr = new Xn(hr.bstCallbacks), tr = new Qt(o.ConnectionType.COMMON, !1), nr = new Qt(o.ConnectionType.RELAY, !0), rr = new zn(hr.bstCallbacks, o.ConnectionType.COMMON, null), ir = new zn(hr.bstCallbacks, o.ConnectionType.RELAY, Er), e = [rr, or, sr, ar, _r, Er.netUtil1, lr], t = [ir, Er.netUtil2], e.forEach(e => e.bindSocket(tr)), t.forEach(e => e.bindSocket(nr)), Vn.stopQueueLoop(), Vn.startQueueLoop(), tr.url = Le.url, tr.on(Bt.connect, () => {
                Fe.isStatus(Fe.StatusType.LOGINING) || ur.login(), tr.url && hr.bstCallbacks.onNetwork({
                  code: Me.EC_OK,
                  data: {
                    type: tr.id
                  }
                });
              }), nr.on(Bt.connect, () => {
                Er.checkLogin(null, "connect " + !!nr.isConnect()), nr.url && hr.bstCallbacks.onNetwork({
                  code: Me.EC_OK,
                  data: {
                    type: nr.id
                  }
                }), ir.ping();
              }), tr.on(Bt.connectClose, () => {
                cr(!1, {
                  code: Me.EC_SDK_SOCKET_CLOSE
                }), ke.isInited() && (Fe.setStatus(Fe.StatusType.LOGOUT), tr.url && hr.bstCallbacks.onNetwork({
                  code: Me.EC_SDK_SOCKET_CLOSE,
                  msg: "Socket断开",
                  seq: null
                }));
              }), nr.on(Bt.connectClose, () => {
                ke.isInited() && (qe.setStatus(qe.StatusType.OFFLINE), nr.url && hr.bstCallbacks.onNetwork({
                  code: Me.EC_SDK_SOCKET_CLOSE,
                  msg: "Socket断开",
                  seq: null
                }), ir.stop());
              }), tr.on(Bt.connectError, e => {
                cr(!1, {
                  code: Me.EC_SDK_SOCKET_ERROR,
                  errMsg: JSON.stringify(e)
                }), ke.isInited() && tr.url && hr.bstCallbacks.onNetwork({
                  code: Me.EC_SDK_SOCKET_ERROR,
                  msg: "Socket错误",
                  seq: null
                });
              }), nr.on(Bt.connectError, e => {
                ke.isInited() && nr.url && hr.bstCallbacks.onNetwork({
                  code: Me.EC_SDK_SOCKET_ERROR,
                  msg: "Socket错误",
                  seq: null
                });
              }), tr.on(Bt.autoAuth, () => {
                ke.isInited() && setTimeout(() => {
                  const e = Fe.isStatus(Fe.StatusType.LOGOUT);
                  tr.url && e && ur.login();
                }, 500);
              }), nr.on(Bt.autoAuth, () => {
                ke.isInited() && nr.url && setTimeout(() => {
                  Fe.isStatus(Fe.StatusType.LOGOUT) && ur.login();
                  const e = Er.roomInfo || {
                    routeId: ""
                  };
                  (qe.isOffline() || qe.getRouteId() !== e.routeId) && Er.checkLogin(e => {
                    e.code === Me.EC_OK && ir.ping();
                  }, "autoAuth");
                }, 500);
              }), tr.connect("init sdk"), Xe.onHide(hr.instance.onHide), Xe.onShow(hr.instance.onShow), hr.instance.group = lr);
            }();
          }

          initRsp(e) {
            return null;
          }

          unInit() {
            ke.isUnInit() || (Vn.stopQueueLoop(), rr && rr.stop(), ir && ir.stop(), Fe.setStatus(Fe.StatusType.LOGOUT), qe.setStatus(qe.StatusType.OFFLINE), Ye.setInfo({
              id: void 0
            }), dr(), Object.assign(Ge, JSON.parse(Ue)), Object.assign(Le, JSON.parse(be)), Object.assign(De, JSON.parse(we)), hr.instance = null);
          }

          isInited() {
            return ke.isInited();
          }

          changeCustomPlayerStatus(e, t, n) {
            const r = Object.assign({}, e);
            return or.changeUserState(r, n);
          }

          createRoom(e, t) {
            return this.createTeamRoom(Object.assign({}, e, {
              teamNumber: 1
            }), t);
          }

          createTeamRoom(e, t) {
            "object" != typeof e && (e = {});
            const n = [];
            let r = (e = JSON.parse(JSON.stringify(e))).maxPlayers || 0,
                i = e.teamNumber || 0;

            if (r % i != 0) {
              const e = "";
              return t && t({
                seq: e,
                code: Me.EC_PARAMS_INVALID,
                msg: "参数错误，最大玩家数无法被队伍数量整除",
                data: null
              }), e;
            }

            const o = Object.assign({}, e.playerInfo, {
              id: De.playerId,
              commonNetworkState: void 0,
              relayNetworkState: void 0,
              teamId: void 0,
              isRobot: void 0,
              matchAttributes: void 0
            });

            if (delete e.teamNumber, !("number" == typeof r && "number" == typeof i && r >= i && i >= 1)) {
              const e = "";
              return t && t({
                seq: "",
                code: Me.EC_PARAMS_INVALID,
                msg: "参数错误，请检查最大玩家数量和队伍数量",
                data: null
              }), e;
            }

            {
              r = Math.floor(r), i = Math.floor(i);
              const e = Math.floor(r / i);

              for (let t = 0; t < i; t++) {
                const s = {
                  id: t + "",
                  maxPlayers: e,
                  minPlayers: 1,
                  name: ""
                };
                !o.teamId && (o.teamId = s.id), t === i - 1 && (s.maxPlayers = r - (i - 1) * e), n.push(s);
              }
            }
            const s = Object.assign({}, e, {
              playerList: void 0,
              owner: void 0,
              region: void 0,
              teamList: n,
              createType: Pe.CreateRoomType.COMMON_CREATE,
              playerInfo: o
            });
            return sr.createRoom(s, t);
          }

          joinRoom(e, t, n) {
            const r = Object.assign({}, e, {
              teamId: "0",
              joinType: o.JoinRoomType.COMMON_JOIN,
              roomId: t,
              playerInfo: Object.assign({}, e.playerInfo, {
                id: De.playerId,
                commonNetworkState: void 0,
                relayNetworkState: void 0,
                teamId: void 0,
                isRobot: void 0,
                matchAttributes: void 0
              })
            });
            return sr.joinRoom(r, n);
          }

          joinTeamRoom(e, t, n) {
            const r = Object.assign({}, e, {
              joinType: o.JoinRoomType.COMMON_JOIN,
              roomId: t,
              playerInfo: Object.assign({}, e.playerInfo, {
                commonNetworkState: void 0,
                relayNetworkState: void 0,
                teamId: void 0,
                isRobot: void 0,
                matchAttributes: void 0,
                id: De.playerId
              })
            });
            return sr.joinRoom(r, n);
          }

          leaveRoom(e) {
            return sr.leaveRoom({}, e);
          }

          dismissRoom(e, t, n) {
            return sr.dismissRoom({}, n);
          }

          changeRoom(e, t, n) {
            const r = {
              changeRoomOptionList: []
            };
            if (e.hasOwnProperty("roomName") && r.changeRoomOptionList.push(o.ChangeRoomOption.ROOM_NAME), e.hasOwnProperty("owner") && r.changeRoomOptionList.push(o.ChangeRoomOption.OWNER), e.hasOwnProperty("isPrivate") && r.changeRoomOptionList.push(o.ChangeRoomOption.IS_PRIVATE), e.hasOwnProperty("customProperties") && r.changeRoomOptionList.push(o.ChangeRoomOption.CUSTOM_PROPERTIES), e.hasOwnProperty("isForbidJoin") && r.changeRoomOptionList.push(o.ChangeRoomOption.IS_FORBID_JOIN), 0 !== r.changeRoomOptionList.length) return sr.changeRoom(Object.assign({}, e, r), n);
            {
              const e = {
                code: o.QAppProtoErrCode.EC_OK,
                msg: "未修改房间信息",
                seq: "",
                data: t
              };
              n && n(e);
            }
          }

          removePlayer(e, t) {
            const n = Object.assign({}, e);
            return sr.removeUser(n, t);
          }

          getRoomByRoomId(e, t) {
            const n = Object.assign({}, e);
            return sr.getRoomByRoomId(n, t);
          }

          getRoomList(e, t) {
            const n = Object.assign({
              roomType: "",
              isDesc: !1
            }, e, {
              gameId: Ge.gameId
            });
            return sr.getRoomList(n, t);
          }

          matchPlayers(e, t) {
            const n = Object.assign({}, e, {
              playerInfo: Object.assign({}, e.playerInfo, {
                matchStatus: void 0,
                id: De.playerId,
                teamId: "",
                region: "",
                teamLeader: "",
                sdkVersion: void 0,
                groupId: void 0,
                teamType: void 0,
                requestId: void 0
              })
            });
            return ar.matchUsersComplex(n, t);
          }

          matchGroup(e, t) {
            const n = e.playerInfoList.map(e => Object.assign({}, e, {
              matchStatus: void 0,
              teamId: "",
              region: "",
              teamLeader: "",
              sdkVersion: void 0,
              groupId: void 0,
              teamType: void 0,
              requestId: void 0
            })),
                  r = {
              matchCode: e.matchCode,
              playerInfoList: n
            };
            return ar.matchGroup(r, t);
          }

          matchRoom(e, t) {
            const n = Object.assign({}, e, {
              playerInfo: Object.assign({}, e.playerInfo, {
                commonNetworkState: void 0,
                relayNetworkState: void 0,
                teamId: void 0,
                isRobot: void 0,
                matchAttributes: void 0,
                id: De.playerId
              })
            });
            return ar.matchRoom(n, t);
          }

          cancelMatch(e, t) {
            const n = Object.assign({}, e);
            return ar.cancelMatch(n, t);
          }

          setFrameRoom(e) {
            return !(!e || !Array.isArray(e.playerList) || e.playerList.findIndex(e => e.id === De.playerId) < 0 || (Er.setFrameRoom(e), 0));
          }

          startFrameSync(e) {
            const t = Er.roomInfo;

            function n(t) {
              e && e(t);
            }

            if (!t) return ot.log("STARTFRAMESYNC", "fail at roomInfo === null"), n({
              code: hr.ErrCode.EC_SDK_NO_ROOM,
              msg: "无房间信息",
              seq: null
            });
            ot.log("STARTFRAMESYNC", Er.roomInfo), ot.log("STARTFRAMESYNC", "socket2 isConnect", nr.isConnect(), nr.socketTask), Er.checkLogin(r => {
              if (r.code === Me.EC_OK) {
                ot.log("STARTFRAMESYNC", "start");
                const n = {
                  roomId: t.id,
                  gameId: Ge.gameId
                };
                return Er.startFrameSync(n, e);
              }

              return ot.log("STARTFRAMESYNC", "fail at CheckLogin, seq=", r.seq, ", code=", r.code, t), n({
                code: hr.ErrCode.EC_SDK_NO_CHECK_LOGIN,
                msg: "CheckLogin失败。" + JSON.stringify(r),
                seq: null
              });
            }, "sdk startFrame");
          }

          stopFrameSync(e) {
            const t = {
              roomId: (Er.roomInfo || {
                id: void 0
              }).id,
              gameId: Ge.gameId
            };
            Er.stopFrameSync(t, t => e && e(t));
          }

          sendFrame(e, t) {
            const n = {
              roomId: (Er.roomInfo || {
                id: void 0
              }).id,
              item: {
                playerId: De.playerId,
                data: JSON.stringify(e.data),
                timestamp: Date.now()
              }
            };
            return Er.sendFrame(n, t);
          }

          requestFrame(e, t) {
            const n = (Er.roomInfo || {
              id: void 0
            }).id;
            e.beginFrameId = Number(e.beginFrameId) || 1, e.endFrameId = Number(e.endFrameId) || 1;
            let r = e.beginFrameId,
                i = Math.min(r + 1999, e.endFrameId),
                o = [];

            const s = a => {
              if (0 !== a.code) return t && t(a);

              if (o = o.concat(a.data.frames), a.data.isPartial && o.length > 0) {
                const e = o.length - 1;
                i = o[e].id;
              }

              return i < e.endFrameId ? (r = i + 1, i = Math.min(r + 1999, e.endFrameId), Er.requestFrame({
                roomId: n,
                beginFrameId: r,
                endFrameId: i,
                supportPartial: !0
              }, s)) : (a.data.frames = o, delete a.data.isPartial, t && t(a));
            };

            return Er.requestFrame({
              roomId: n,
              beginFrameId: r,
              endFrameId: i,
              supportPartial: !0
            }, s);
          }

          sendToClient(e, t, n) {
            if (0 === e.recvPlayerList.length) return void (n && n({
              code: this.ErrCode.EC_OK,
              data: null,
              seq: "",
              msg: ""
            }));
            const r = Object.assign({}, e, {
              roomId: t
            });
            return _r.sendMessage(r, n);
          }

          sendToGameSvr(e, t, n) {
            const r = Object.assign({}, e, {
              playerId: De.playerId,
              roomId: t,
              data: JSON.stringify(e.data)
            });
            return Er.sendMessageExt(r, n);
          }

        }

        hr.instance = null, hr.bstCallbacks = new class {
          constructor() {
            this.room = new Zn(), this.group = new er();
          }

          clearCallbacks() {
            this.room.clearCallbacks(), this.group.clearCallbacks();
          }

          onNetwork(e) {
            this.room.onNetwork(e), this.group.onNetwork(e);
          }

          error(e) {}

        }(), hr.ErrCode = Me, hr.ENUM = Pe;

        class pr {
          constructor(e) {
            this.batch = [], this.isUpdating = !1, this.updateTime = 0, this.clear(), this.bstUpdaterFunc = e;
          }

          push(e) {
            const t = Object.assign({}, e, {
              isUpdating: !1
            });
            this.batch.push(t), Date.now() - this.updateTime > 3e4 && (this.isUpdating = !1), !this.isUpdating && this.update();
          }

          clear() {
            this.batch = [], this.isUpdating = !1, this.updateTime = Date.now();
          }

          update() {
            if (this.updateTime = Date.now(), this.isUpdating = !0, this.batch = this.batch.filter(e => !e.isUpdating), this.batch.forEach(e => e.isUpdating = !0), 0 === this.batch.length) return this.isUpdating = !1;
            this.bstUpdaterFunc((e, t) => this.trigger(e, t));
          }

          trigger(e, t) {
            this.isUpdating = !1, this.batch.forEach(n => {
              n.isUpdating && e && t && setTimeout(() => {
                let r = !1;

                try {
                  r = n.shouldItemUpdate(t);
                } catch (e) {
                  console.log(e);
                }

                r && n.itemUpdater(e, t);
              }, 0);
            }), this.batch = this.batch.filter(e => !e.isUpdating), this.batch.length > 0 && setTimeout(() => !this.isUpdating && this.update(), 500);
          }

        }

        class Rr {
          constructor(e) {
            this.group = e, this.bstUpdater = new pr(e => {
              if (!this.group || !this.group.groupInfo || !this.group.groupInfo.id) return e(null, null);
              mr.getGroupByGroupId({
                groupId: this.group.groupInfo.id
              }, t => t && t.data && t.data.groupInfo && t.data.groupInfo.id ? e(t.seq, t.data.groupInfo) : e(null, null));
            });
          }

          onNetwork(e) {
            this.group.onUpdate && this.group.onUpdate(this.group);
          }

          onJoinGroup(e) {
            this.matchGroupInfo(e) && this.bstUpdater.push({
              bstSeq: e.seq,
              shouldItemUpdate: t => t.id === e.data.groupInfo.id,
              itemUpdater: (t, n) => {
                const r = e.data.joinPlayerId;
                n && n.groupPlayerList && n.groupPlayerList.find(e => e.id === r) && (e.seq += "_" + t, e.data = Object.assign({}, e.data, {
                  groupInfo: n
                }), this.saveAndInvoke("onJoinGroup", e));
              }
            });
          }

          onLeaveGroup(e) {
            this.bstUpdater.clear(), this.saveAndInvoke("onLeaveGroup", e);
          }

          onDismissGroup(e) {
            this.bstUpdater.clear(), this.matchGroupInfoAndInvoke("onDismissGroup", e, () => this.group.groupInfo = {});
          }

          onChangeGroup(e) {
            this.matchGroupInfo(e) && this.bstUpdater.push({
              bstSeq: e.seq,
              shouldItemUpdate: t => t.id === e.data.groupInfo.id,
              itemUpdater: (t, n) => {
                e.seq += "_" + t, e.data = Object.assign({}, e.data, {
                  groupInfo: n
                }), this.saveAndInvoke("onChangeGroup", e);
              }
            });
          }

          onRemoveGroupPlayer(e) {
            this.matchGroupInfo(e) && this.bstUpdater.push({
              bstSeq: e.seq,
              shouldItemUpdate: t => t.id === e.data.groupInfo.id,
              itemUpdater: (t, n) => {
                const r = e.data.removePlayerId;
                n && n.groupPlayerList && !n.groupPlayerList.find(e => e.id === r) && (e.seq += "_" + t, e.data = Object.assign({}, e.data, {
                  groupInfo: n
                }), this.saveAndInvoke("onRemoveGroupPlayer", e));
              }
            });
          }

          onChangeGroupPlayerNetworkState(e) {
            const t = e.data.groupIdList,
                  n = this.group.groupInfo.id;
            n && (!Array.isArray(t) || t.length <= 0 || t.find(e => e === n) && this.bstUpdater.push({
              bstSeq: e.seq,
              shouldItemUpdate: e => e.id === n,
              itemUpdater: (t, n) => {
                const r = e.data.changePlayerId,
                      i = n && n.groupPlayerList && n.groupPlayerList.find(e => e.id === r);

                if (i) {
                  const o = i.commonGroupNetworkState,
                        s = {
                    seq: e.seq + "_" + t,
                    data: {
                      networkState: o,
                      changePlayerId: r,
                      groupInfo: n
                    }
                  };
                  this.saveAndInvoke("onChangeGroupPlayerNetworkState", s);
                }
              }
            }));
          }

          onChangeCustomGroupPlayerStatus(e) {
            this.matchGroupInfo(e) && this.bstUpdater.push({
              bstSeq: e.seq,
              shouldItemUpdate: t => t.id === e.data.groupInfo.id,
              itemUpdater: (t, n) => {
                const r = e.data.changePlayerId,
                      i = n && n.groupPlayerList && n.groupPlayerList.find(e => e.id === r);
                i && (e.seq += "_" + t, e.data = Object.assign({}, e.data, {
                  customGroupPlayerStatus: i.customGroupPlayerStatus,
                  groupInfo: n
                }), this.saveAndInvoke("onChangeCustomGroupPlayerStatus", e));
              }
            });
          }

          onRecvFromGroupClient(e) {
            this.matchIDAndInvoke("onRecvFromGroupClient", e);
          }

          matchGroupInfo(e) {
            return this.group.groupInfo.id === e.data.groupInfo.id;
          }

          matchID(e) {
            return this.group.groupInfo.id === e.data.groupId;
          }

          invoke(e, t) {
            this.group[e] && this.group[e].call(this.group, t);
          }

          saveAndInvoke(e, t) {
            this.matchGroupInfo(t) && (this.group.groupUtil.setGroupInfo(t.data.groupInfo), this.invoke(e, t));
          }

          matchIDAndInvoke(e, t, n) {
            this.matchID(t) && (n && n(t), this.invoke(e, t));
          }

          matchGroupInfoAndInvoke(e, t, n) {
            this.matchGroupInfo(t) && (n && n(t), this.invoke(e, t));
          }

        }

        class fr {
          constructor(e) {
            this.group = e;
          }

          setGroupInfo(e) {
            !e && (e = {}), this.group.groupInfo = JSON.parse(JSON.stringify(e || {})), this.group.groupInfo.groupPlayerList = this.group.groupInfo.groupPlayerList || [], this.group.onUpdate && this.group.onUpdate(this.group);
          }

          saveGroupInfo(e) {
            e.code === o.QAppProtoErrCode.EC_OK && this.setGroupInfo(e.data ? e.data.groupInfo : null);
          }

          addGroupParam() {
            return {
              groupId: this.group.groupInfo.id || ""
            };
          }

          initBroadcast() {
            this.group.groupBroadcast || (this.group.groupBroadcast = new Rr(this.group));
          }

        }

        class mr extends class {} {
          constructor(e) {
            super(), this.groupUtil = new fr(this), this.groupUtil.setGroupInfo(e || null);
          }

          initGroup(e) {
            this.groupUtil.setGroupInfo(e);
          }

          onUpdate(e) {}

          static getGroupByGroupId(e, t) {
            t = pt(t), hr.instance.group.getGroupByGroupId(e, t);
          }

          static getMyGroups(e) {
            e = pt(e), hr.instance.group.getMyGroups({}, e);
          }

          createGroup(e, t) {
            const n = Object.assign({}, e, {
              playerInfo: Object.assign({}, e.playerInfo, {
                id: De.playerId,
                commonGroupNetworkState: void 0
              })
            });
            hr.instance.group.createGroup(n, pt(e => {
              this.groupUtil.saveGroupInfo(e), t && t(e);
            }));
          }

          getGroupDetail(e) {
            const t = {
              groupId: this.groupInfo.id
            };
            hr.instance.group.getGroupByGroupId(t, pt(t => {
              this.groupUtil.saveGroupInfo(t), e && e(t);
            }));
          }

          joinGroup(e, t) {
            const n = Object.assign({}, e, {
              playerInfo: Object.assign({}, e.playerInfo, {
                id: De.playerId,
                commonGroupNetworkState: void 0
              }),
              groupId: this.groupInfo.id
            });
            hr.instance.group.joinGroup(n, pt(e => {
              this.groupUtil.saveGroupInfo(e), t && t(e);
            }));
          }

          leaveGroup(e, t) {
            const n = {
              groupId: this.groupInfo.id
            };
            hr.instance.group.leaveGroup(n, pt(e => {
              this.groupUtil.saveGroupInfo(e), t && t(e);
            }));
          }

          dismissGroup(e, t) {
            const n = {
              groupId: this.groupInfo.id
            };
            hr.instance.group.dismissGroup(n, pt(e => {
              e.code === o.QAppProtoErrCode.EC_OK && this.groupUtil.setGroupInfo(null), t && t(e);
            }));
          }

          changeGroup(e, t) {
            const n = [];
            e.hasOwnProperty("groupName") && n.push(o.ChangeGroupOption.GROUP_NAME), e.hasOwnProperty("owner") && n.push(o.ChangeGroupOption.GROUP_OWNER), e.hasOwnProperty("customProperties") && n.push(o.ChangeGroupOption.GROUP_CUSTOM_PROPERTIES), e.hasOwnProperty("isForbidJoin") && n.push(o.ChangeGroupOption.GROUP_IS_FORBID_JOIN);
            const r = Object.assign({}, e, {
              groupId: this.groupInfo.id,
              changeGroupOptionList: n
            });
            hr.instance.group.changeGroup(r, pt(e => {
              this.groupUtil.saveGroupInfo(e), t && t(e);
            }));
          }

          removeGroupPlayer(e, t) {
            const n = Object.assign({}, e, {
              groupId: this.groupInfo.id
            });
            hr.instance.group.removeGroupPlayer(n, pt(e => {
              this.groupUtil.saveGroupInfo(e), t && t(e);
            }));
          }

          changeCustomGroupPlayerStatus(e, t) {
            const n = Object.assign({}, e, {
              groupId: this.groupInfo.id
            });
            hr.instance.group.changeCustomGroupPlayerStatus(n, pt(e => {
              this.groupUtil.saveGroupInfo(e), t && t(e);
            }));
          }

          sendToGroupClient(e, t) {
            const n = Object.assign({}, e, {
              groupId: this.groupInfo.id
            });
            hr.instance.group.sendToGroupClient(n, pt(t));
          }

        }

        class Sr {
          constructor(e, t) {
            this.frameIdFill = 0, this.frameIdSent = 0, this.autoReqFrameErrTimes = 0, this.lastFrameTime = 0, this.beginFrameId = -1, this.endFrameId = -1, this.fillCache = {}, this.timer = new yr(e), this.callback = t;
          }

          reset(e = 0) {
            this.timer.init(), this.frameIdSent = e, this.frameIdFill = e, this.lastFrameTime = 0;
          }

          push(e, t) {
            const n = e.data.frame.id;
            1 === n && this.reset(), this.timer.push(n, Date.now());
            const r = this.frameIdSent,
                  i = this.frameIdFill;
            return this.frameIdFill = n, Le.isAutoRequestFrame ? n <= r + 1 ? this.send(e) : (this.fillCache[n] = {
              endFrameId: n,
              data: [e.data.frame]
            }, void (n > i + 1 && this.fill(i + 1, n - 1, t))) : this.send(e);
          }

          retryFill(e) {
            this.beginFrameId === this.endFrameId && this.beginFrameId < 0 || (this.autoReqFrameErrTimes = 0, this.fill(this.beginFrameId, this.endFrameId, e));
          }

          send(e) {
            const t = e.data.frame.id;
            if (t <= this.frameIdSent) return;
            e.data.frame.time = this.timer.time(t), this.frameIdSent = t, this.callback(e), !this.lastFrameTime && (this.lastFrameTime = e.data.frame.time);
            const n = e.data.frame.time - this.lastFrameTime;
            0 !== n && Sn.onFitFrameTime(n), Math.abs(n) > 300 && !e.data.frame.isReplay && (this.reset(t), this.timer.push(t, Date.now())), this.lastFrameTime = e.data.frame.time;
          }

          fillSend(e) {
            if (e <= this.frameIdSent + 1 && this.fillCache[e]) {
              const t = this.fillCache[e];
              delete this.fillCache[e], t.data.forEach(e => this.send({
                data: {
                  frame: e
                },
                seq: ""
              })), this.fillSend(t.endFrameId + 1);
            }
          }

          fill(e, t, n) {
            n.isInRoom() && n.requestFrame({
              beginFrameId: e,
              endFrameId: t
            }, r => {
              if (this.beginFrameId = e, this.endFrameId = t, r.code !== o.QAppProtoErrCode.EC_OK) {
                if (this.autoReqFrameErrTimes++, this.autoReqFrameErrTimes <= 5) return this.fill(e, t, n);
                n.onAutoRequestFrameError && n.onAutoRequestFrameError({
                  data: r,
                  seq: ""
                });
              } else this.beginFrameId = -1, this.endFrameId = -1, this.autoReqFrameErrTimes = 0, this.fillCache[e] = {
                endFrameId: t,
                data: r.data.frames.map(e => Object.assign({}, e, {
                  roomId: n.roomInfo.id,
                  isReplay: !0
                }))
              }, this.fillSend(e);
            });
          }

        }

        class yr {
          constructor(e) {
            this._a1 = e, this.init();
          }

          init() {
            this.n = 0, this.S_xi = 0, this.S_yi = 0, this.S_xiyi = 0, this.S_xixi = 0;
          }

          push(e, t) {
            this.n++, this.S_xi += e, this.S_yi += t, this.S_xiyi += e * t, this.S_xixi += e * e;
          }

          a0(e) {
            return void 0 === e && (e = this.a1()), this.S_yi / this.n - this.a1() * this.S_xi / this.n;
          }

          a1() {
            return (this.n * this.S_xiyi - this.S_xi * this.S_yi) / (this.n * this.S_xixi - this.S_xi * this.S_xi);
          }

          ap() {
            const e = this.a1();
            return {
              a0: this.a0(e),
              a1: e
            };
          }

          time(e) {
            if (0 === this.n) return 0;
            const t = this.n >= 2 ? this.ap() : {
              a0: this.S_yi - this.S_xi * this._a1,
              a1: this._a1
            };
            return Math.round(t.a0 + e * t.a1);
          }

        }

        class Ir {
          constructor(e) {
            this.frameBroadcastFrameId = 0, this.room = e, this.frameBroadcast = new Sr(this.room.roomInfo.frameRate ? Math.floor(1e3 / this.room.roomInfo.frameRate) : 66, e => {
              e && e.data && e.data.frame && e.data.frame.items && e.data.frame.items.forEach(e => e.data = "object" == typeof e.data ? e.data : JSON.parse(e.data)), this.matchFrameBstAndInvoke("onRecvFrame", e);
            }), this.bstUpdater = new pr(e => {
              if (!this.room || !this.room.roomInfo || !this.room.roomInfo.id) return e(null, null);
              Or.getRoomByRoomId({
                roomId: this.room.roomInfo.id
              }, t => t && t.data && t.data.roomInfo && t.data.roomInfo.id ? e(t.seq, t.data.roomInfo) : e(null, null));
            });
          }

          onNetwork(e) {
            this.room.onUpdate && this.room.onUpdate(this.room);
          }

          onJoinRoom(e) {
            this.matchRoomInfo(e) && this.bstUpdater.push({
              bstSeq: e.seq,
              shouldItemUpdate: t => t.id === e.data.roomInfo.id,
              itemUpdater: (t, n) => {
                const r = e.data.joinPlayerId;
                n && n.playerList && n.playerList.find(e => e.id === r) && (e.seq += "_" + t, e.data = Object.assign({}, e.data, {
                  roomInfo: n
                }), this.saveAndInvoke("onJoinRoom", e));
              }
            });
          }

          onLeaveRoom(e) {
            this.bstUpdater.clear(), this.saveAndInvoke("onLeaveRoom", e);
          }

          onDismissRoom(e) {
            this.bstUpdater.clear(), this.matchRoomInfoAndInvoke("onDismissRoom", e, () => this.room.roomInfo = {});
          }

          onChangeRoom(e) {
            this.matchRoomInfo(e) && this.bstUpdater.push({
              bstSeq: e.seq,
              shouldItemUpdate: t => t.id === e.data.roomInfo.id,
              itemUpdater: (t, n) => {
                e.seq += "_" + t, e.data = Object.assign({}, e.data, {
                  roomInfo: n
                }), this.saveAndInvoke("onChangeRoom", e);
              }
            });
          }

          onRemovePlayer(e) {
            this.matchRoomInfo(e) && this.bstUpdater.push({
              bstSeq: e.seq,
              shouldItemUpdate: t => t.id === e.data.roomInfo.id,
              itemUpdater: (t, n) => {
                const r = e.data.removePlayerId;
                n && n.playerList && !n.playerList.find(e => e.id === r) && (e.seq += "_" + t, e.data = Object.assign({}, e.data, {
                  roomInfo: n
                }), this.saveAndInvoke("onRemovePlayer", e));
              }
            });
          }

          onRecvFromClient(e) {
            this.matchIDAndInvoke("onRecvFromClient", e);
          }

          onRecvFromGameSvr(e) {
            this.matchIDAndInvoke("onRecvFromGameSvr", e, null);
          }

          onMatchPlayers(e) {
            this.room.roomUtil.setRoomInfo(e.data.roomInfo), e.data.roomInfo && e.data.roomInfo.playerList && e.data.roomInfo.playerList.find(e => Ar.isMe(e.id)) && this.room.roomUtil.activeFrame();
            const t = e.data.matchType;
            gr.once(t, {
              code: o.QAppProtoErrCode.EC_OK,
              msg: "",
              seq: "",
              data: e.data
            });
          }

          onMatchTimeout(e) {
            const t = e.data.matchType,
                  n = e.data.errCode || o.QAppProtoErrCode.EC_MATCH_TIMEOUT,
                  {
              errCode: r,
              errMsg: i
            } = ht(n, "");
            gr.once(t, {
              code: r,
              msg: i,
              seq: "",
              data: {}
            });
          }

          onChangePlayerNetworkState(e) {
            this.matchRoomInfo(e) && this.bstUpdater.push({
              bstSeq: e.seq,
              shouldItemUpdate: t => t.id === e.data.roomInfo.id,
              itemUpdater: (t, n) => {
                const r = e.data.changePlayerId,
                      i = n && n.playerList && n.playerList.find(e => e.id === r);

                if (i) {
                  e.seq += "_" + t;
                  const r = [Pe.NetworkState.COMMON_OFFLINE, Pe.NetworkState.COMMON_ONLINE].includes(e.data.networkState) ? i.commonNetworkState : i.relayNetworkState;
                  e.data = Object.assign({}, e.data, {
                    networkState: r,
                    roomInfo: n
                  }), this.saveAndInvoke("onChangePlayerNetworkState", e);
                }
              }
            });
          }

          onChangeCustomPlayerStatus(e) {
            this.matchRoomInfo(e) && this.bstUpdater.push({
              bstSeq: e.seq,
              shouldItemUpdate: t => t.id === e.data.roomInfo.id,
              itemUpdater: (t, n) => {
                const r = e.data.changePlayerId,
                      i = n && n.playerList && n.playerList.find(e => e.id === r);
                i && (e.seq += "_" + t, e.data = Object.assign({}, e.data, {
                  customPlayerStatus: i.customPlayerStatus,
                  roomInfo: n
                }), this.saveAndInvoke("onChangeCustomPlayerStatus", e));
              }
            });
          }

          onStartFrameSync(e) {
            this.frameBroadcast.reset(), this.matchRoomInfo(e) && this.bstUpdater.push({
              bstSeq: e.seq,
              shouldItemUpdate: t => t.id === e.data.roomInfo.id,
              itemUpdater: (t, n) => {
                e.seq += "_" + t, e.data = Object.assign({}, e.data, {
                  roomInfo: n
                }), this.saveAndInvoke("onStartFrameSync", e);
              }
            });
          }

          onStopFrameSync(e) {
            this.matchRoomInfo(e) && this.bstUpdater.push({
              bstSeq: e.seq,
              shouldItemUpdate: t => t.id === e.data.roomInfo.id,
              itemUpdater: (t, n) => {
                e.seq += "_" + t, e.data = Object.assign({}, e.data, {
                  roomInfo: n
                }), this.frameBroadcast.reset(), this.saveAndInvoke("onStopFrameSync", e);
              }
            });
          }

          onRecvFrame(e) {
            this.room.roomInfo.frameSyncState !== o.FrameSyncState.STOP && this.frameBroadcast.push(e, this.room);
          }

          frameBroadcastFrameIdReset(e = 0) {
            return this.frameBroadcast.reset(e);
          }

          matchRoomInfo(e) {
            return this.room.roomInfo.id === e.data.roomInfo.id;
          }

          matchID(e) {
            return this.room.roomInfo.id === e.data.roomId;
          }

          invoke(e, t) {
            this.room[e] && this.room[e].call(this.room, t);
          }

          saveAndInvoke(e, t) {
            this.matchRoomInfo(t) && (this.room.roomUtil.setRoomInfo(t.data.roomInfo), this.invoke(e, t));
          }

          matchFrameBstAndInvoke(e, t, n) {
            this.matchID({
              data: t.data.frame,
              seq: ""
            }) && (n && n(t), this.invoke(e, t));
          }

          matchIDAndInvoke(e, t, n) {
            this.matchID(t) && (n && n(t), this.invoke(e, t));
          }

          matchRoomInfoAndInvoke(e, t, n) {
            this.matchRoomInfo(t) && (n && n(t), this.invoke(e, t));
          }

        }

        const gr = new class {
          constructor() {
            this.callbacks = {};
          }

          push(e, t) {
            !this.callbacks[e] && (this.callbacks[e] = []), this.callbacks[e].push(t);
          }

          once(e, t) {
            (this.callbacks[e] || []).forEach(e => e && e(t)), this.removeCallbacksByTag(e);
          }

          removeCallbacksByTag(e) {
            e && this.callbacks[e] && delete this.callbacks[e];
          }

        }(),
              Cr = new class {
          onMatchPlayers(e) {
            const t = {
              data: {
                roomInfo: e.data.roomInfo,
                errCode: Me.EC_OK
              },
              seq: e.seq
            };
            Or.onMatch && Or.onMatch(t);
          }

          onMatchTimeout(e) {
            const t = {
              data: {
                roomInfo: null,
                errCode: e.data.errCode
              },
              seq: e.seq
            };
            Or.onMatch && Or.onMatch(t);
          }

          onCancelMatch(e) {
            const t = {
              data: {
                matchCode: e.data.matchCode,
                playerId: e.data.playerId
              },
              seq: e.seq
            };
            Or.onCancelMatch && Or.onCancelMatch(t);
          }

        }();

        class Tr {
          constructor(e) {
            this.room = e;
          }

          setRoomInfo(e) {
            !e && (e = {});
            const t = JSON.parse(JSON.stringify(this.room.roomInfo || {}));
            this.room.roomInfo = JSON.parse(JSON.stringify(e || {})), this.room.roomInfo.playerList = this.room.roomInfo.playerList || [], this.room.isInRoom() && Ye.setInfo(this.room.roomInfo.playerList.find(e => e.id === De.playerId)), t.id === this.room.roomInfo.id && this.room.roomInfo.id && this.room.isInRoom() && t.startGameTime === this.room.roomInfo.startGameTime || this.room.roomBroadcast && this.room.roomBroadcast.frameBroadcastFrameIdReset(), this.room.roomInfo && Array.isArray(this.room.roomInfo.playerList) && this.room.roomInfo.playerList.find(e => Ar.isMe(e.id)) && this.activeFrame(), this.room.onUpdate && this.room.onUpdate(this.room);
          }

          saveRoomInfo(e) {
            e.code === o.QAppProtoErrCode.EC_OK && this.setRoomInfo(e.data ? e.data.roomInfo : null);
          }

          setParam(e) {
            this.room.roomInfo.id && (e.roomId = this.room.roomInfo.id);
          }

          addRoomParam() {
            return {
              roomId: this.room.roomInfo.id || ""
            };
          }

          initBroadcast() {
            this.room.roomBroadcast || (this.room.roomBroadcast = new Ir(this.room));
          }

          activeFrame() {
            return hr.instance.setFrameRoom(this.room.roomInfo);
          }

        }

        class Or extends class {} {
          constructor(e) {
            super(), this.roomUtil = new Tr(this), this.roomUtil.setRoomInfo(e || null);
          }

          static getRoomList(e, t) {
            hr.instance.getRoomList(e, pt(t));
          }

          static getRoomByRoomId(e, t) {
            hr.instance.getRoomByRoomId(e, pt(t));
          }

          static getMyRoom(e) {
            hr.instance.getRoomByRoomId({
              roomId: ""
            }, pt(e));
          }

          isInRoom() {
            return !!this.roomInfo.playerList.find(e => e.id === De.playerId);
          }

          initRoom(e) {
            this.roomUtil.setRoomInfo(e);
            let t = e;
            t && t.id && t.routeId && Array.isArray(t.playerList) && t.playerList.find(e => e.id && Ar.isMe(e.id)) && this.roomUtil.activeFrame();
          }

          onUpdate(e) {}

          get networkState() {
            let e = !1,
                t = !1;
            const n = hr.instance.getSocket(o.ConnectionType.COMMON),
                  r = hr.instance.getSocket(o.ConnectionType.RELAY);
            return {
              COMMON: e = !(!n || !n.isConnect()),
              RELAY: t = !(!r || !r.isConnect())
            };
          }

          createRoom(e, t) {
            hr.instance.createRoom(e, pt(e => {
              this.roomUtil.saveRoomInfo(e), t && t(e);
            }));
          }

          createTeamRoom(e, t) {
            hr.instance.createTeamRoom(e, pt(e => {
              this.roomUtil.saveRoomInfo(e), t && t(e);
            }));
          }

          joinRoom(e, t) {
            hr.instance.joinRoom(Object.assign({}, e), this.roomInfo.id, pt(e => {
              this.roomUtil.saveRoomInfo(e), t && t(e);
            }));
          }

          joinTeamRoom(e, t) {
            hr.instance.joinTeamRoom(Object.assign({}, e), this.roomInfo.id, pt(e => {
              this.roomUtil.saveRoomInfo(e), t && t(e);
            }));
          }

          leaveRoom(e, t) {
            this.roomUtil.setParam(e), hr.instance.leaveRoom(pt(e => {
              this.roomUtil.saveRoomInfo(e), t && t(e);
            }));
          }

          dismissRoom(e, t) {
            hr.instance.dismissRoom(e, this.roomInfo.id, pt(e => {
              e.code === o.QAppProtoErrCode.EC_OK && this.roomUtil.setRoomInfo(null), t && t(e);
            }));
          }

          changeRoom(e, t) {
            hr.instance.changeRoom(e, this.roomInfo, pt(e => {
              this.roomUtil.saveRoomInfo(e), t && t(e);
            }));
          }

          changeCustomPlayerStatus(e, t) {
            hr.instance.changeCustomPlayerStatus(Object.assign({}, e), this.roomInfo.id, pt(e => {
              this.roomUtil.saveRoomInfo(e), t && t(e);
            }));
          }

          removePlayer(e, t) {
            hr.instance.removePlayer(e, pt(e => {
              this.roomUtil.saveRoomInfo(e), t && t(e);
            }));
          }

          getRoomDetail(e) {
            hr.instance.getRoomByRoomId(Object.assign({}, this.roomUtil.addRoomParam()), pt(t => {
              this.roomUtil.saveRoomInfo(t), e && e(t);
            }));
          }

          matchPlayers(e, t) {
            let n = t;
            ot.log("typeof_Room.onMatch", typeof Or.onMatch), "function" != typeof Or.onMatch && (gr.push(o.MatchType.PLAYER_COMPLEX, t), n = e => {
              if (e.code !== o.QAppProtoErrCode.EC_OK) return e.data = null, gr.once(o.MatchType.PLAYER_COMPLEX, e);
            }), hr.instance.matchPlayers(e, pt(n));
          }

          matchGroup(e, t) {
            hr.instance.matchGroup(e, pt(t));
          }

          matchRoom(e, t) {
            hr.instance.matchRoom(e, pt(e => {
              this.roomUtil.saveRoomInfo(e), t && t(e);
            }));
          }

          cancelPlayerMatch(e, t) {
            let n = t;
            e.matchType === Pe.MatchType.PLAYER_COMPLEX && (n = n => {
              n.code === Me.EC_OK && gr.removeCallbacksByTag(e.matchType), t && t(n);
            }), hr.instance.cancelMatch(e, pt(n));
          }

          startFrameSync(e, t) {
            this.roomUtil.activeFrame(), hr.instance.startFrameSync(pt(t));
          }

          stopFrameSync(e, t) {
            this.roomUtil.activeFrame(), hr.instance.stopFrameSync(pt(t));
          }

          sendFrame(e, t) {
            this.roomUtil.activeFrame(), hr.instance.sendFrame(e, pt(t));
          }

          requestFrame(e, t) {
            this.roomUtil.activeFrame(), hr.instance.requestFrame(e, pt(e => {
              e && e.data && e.data.frames && e.data.frames.forEach(e => {
                e.items.forEach(e => {
                  e.data = "object" == typeof e.data ? e.data : JSON.parse(e.data);
                });
              }), t && t(e);
            }));
          }

          retryAutoRequestFrame() {
            this.roomBroadcast.frameBroadcast.retryFill(this);
          }

          sendToClient(e, t) {
            let n = e.recvPlayerList || [];
            e.recvType === Pe.RecvType.ROOM_ALL ? n = this.roomInfo.playerList.map(e => e.id) : e.recvType === Pe.RecvType.ROOM_OTHERS && (n = this.roomInfo.playerList.filter(e => e.id !== De.playerId).map(e => e.id));
            const r = {
              recvType: void 0,
              recvPlayerList: n,
              msg: e.msg
            };
            hr.instance.sendToClient(r, this.roomInfo.id, pt(t));
          }

          sendToGameSvr(e, t) {
            hr.instance.sendToGameSvr(e, this.roomInfo.id, pt(t));
          }

        }

        class Ar {
          static isMe(e) {
            return De.playerId === e;
          }

          static get isInited() {
            return !!hr.instance && hr.instance.isInited();
          }

          static init(e, t, n) {
            hr.instance = new hr(e, t), hr.instance.init(pt(n)), hr.bstCallbacks.room.bindCallbacks(Cr);
          }

          static add(e) {
            if (e instanceof Or) {
              const t = e;
              return t.roomUtil.initBroadcast(), void hr.bstCallbacks.room.bindCallbacks(t.roomBroadcast);
            }

            if (e instanceof mr) {
              const t = e;
              return t.groupUtil.initBroadcast(), void hr.bstCallbacks.group.bindCallbacks(t.groupBroadcast);
            }
          }

          static remove(e) {
            if (e instanceof Or) {
              const t = e;
              hr.bstCallbacks.room.unbindCallbacks(t.roomBroadcast);
            } else if (e instanceof mr) {
              const t = e;
              hr.bstCallbacks.group.unbindCallbacks(t.groupBroadcast);
            }
          }

          static clear() {
            hr.bstCallbacks.room.clearCallbacks(), hr.bstCallbacks.room.bindCallbacks(Cr), hr.bstCallbacks.group.clearCallbacks();
          }

        }

        let Mr = 0;
        const Pr = Math.pow(2, 32) - 1;
        var vr = {
          init(e) {
            Mr = e;
          },

          random() {
            const e = (1103515245 * Mr + 123456789) % Pr;
            return Mr = e, e / Pr;
          }

        };

        class Nr {}

        Nr.Listener = null, Nr.Room = null, Nr.Group = null, Nr.ENUM = null, Nr.ErrCode = null, Nr.RandomUtil = null, Nr.DebuggerLog = null, Nr.Player = null, Nr.StatCallbacks = null, Nr.Listener = Ar, Nr.Room = Or, Nr.Group = mr, Nr.ENUM = Pe, Nr.ErrCode = Me, Nr.RandomUtil = vr, Nr.DebuggerLog = ot, Nr.Player = yn, Nr.StatCallbacks = Sn, (Xe.root || {}).MGOBE = Nr, Nr.types = Pe, Nr.Adapter = {
          channel: ze,
          platform: $e
        }, t.default = Nr;
      }]).default;
    });
  }).call(root);
})( // The environment-specific global.
function () {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  if (typeof this !== 'undefined') return this;
  return {};
}.call(this));