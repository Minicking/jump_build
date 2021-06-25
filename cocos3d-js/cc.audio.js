System.register(['./deprecated-4ec15e5e.js'], function (exports) {
  'use strict';
  var ccclass, type, AudioClip, _applyDecoratedDescriptor, help, menu, tooltip, range, serializable, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, clamp, Component, legacyCC, js;
  return {
    setters: [function (module) {
      ccclass = module.c;
      type = module.t;
      AudioClip = module.A;
      _applyDecoratedDescriptor = module._;
      help = module.h;
      menu = module.m;
      tooltip = module.a;
      range = module.r;
      serializable = module.s;
      _inherits = module.b;
      _classCallCheck = module.d;
      _possibleConstructorReturn = module.e;
      _getPrototypeOf = module.f;
      _initializerDefineProperty = module.g;
      _assertThisInitialized = module.i;
      _createClass = module.j;
      clamp = module.k;
      Component = module.C;
      legacyCC = module.l;
      js = module.n;
      exports('AudioClip', module.A);
    }],
    execute: function () {

      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;
      /**
       * @en
       * A representation of a single audio source, <br>
       * contains basic functionalities like play, pause and stop.
       * @zh
       * 音频组件，代表单个音源，提供播放、暂停、停止等基本功能。
       */

      var AudioSource = function (v) { return exports({ AudioSource: v, AudioSourceComponent: v }), v; }((_dec = ccclass('cc.AudioSource'), _dec2 = help(), _dec3 = menu(), _dec4 = type(AudioClip), _dec5 = type(AudioClip), _dec6 = tooltip(), _dec7 = tooltip(), _dec8 = tooltip(), _dec9 = range(), _dec10 = tooltip(), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(AudioSource, _Component);

        function AudioSource() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, AudioSource);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AudioSource)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "_clip", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_loop", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_playOnAwake", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_volume", _descriptor4, _assertThisInitialized(_this));

          _this._cachedCurrentTime = 0;
          return _this;
        }

        _createClass(AudioSource, [{
          key: "onLoad",
          value: function onLoad() {
            this._syncStates();

            if (this._playOnAwake) {
              this.play();
            }
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            this.pause();
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            this.stop();
          }
          /**
           * @en
           * Play the clip.<br>
           * Restart if already playing.<br>
           * Resume if paused.
           * @zh
           * 开始播放。<br>
           * 如果音频处于正在播放状态，将会重新开始播放音频。<br>
           * 如果音频处于暂停状态，则会继续播放音频。
           */

        }, {
          key: "play",
          value: function play() {
            if (!this._clip) {
              return;
            }

            if (this.playing) {
              this.currentTime = 0;
            } else {
              this._clip.play();
            }
          }
          /**
           * @en
           * Pause the clip.
           * @zh
           * 暂停播放。
           */

        }, {
          key: "pause",
          value: function pause() {
            if (!this._clip) {
              return;
            }

            this._clip.pause();
          }
          /**
           * @en
           * Stop the clip.
           * @zh
           * 停止播放。
           */

        }, {
          key: "stop",
          value: function stop() {
            if (!this._clip) {
              return;
            }

            this._clip.stop();
          }
          /**
           * @en
           * Plays an AudioClip, and scales volume by volumeScale.<br>
           * Note: for multiple playback on the same clip, the actual behavior is platform-specific.<br>
           * Re-start style fallback will be used if the underlying platform doesn't support it.
           * @zh
           * 以指定音量播放一个音频一次。<br>
           * 注意，对同一个音频片段，不同平台多重播放效果存在差异。<br>
           * 对不支持的平台，如前一次尚未播完，则会立即重新播放。
           * @param clip The audio clip to be played.
           * @param volumeScale volume scaling factor wrt. current value.
           */

        }, {
          key: "playOneShot",
          value: function playOneShot(clip) {
            var volumeScale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            clip.playOneShot(this._volume * volumeScale);
          }
        }, {
          key: "_syncStates",
          value: function _syncStates() {
            if (!this._clip) {
              return;
            }

            this._clip.setCurrentTime(this._cachedCurrentTime);

            this._clip.setLoop(this._loop);

            this._clip.setVolume(this._volume, true);

            this._volume = this._clip.getVolume();
          }
          /**
           * @en
           * Set current playback time, in seconds.
           * @zh
           * 以秒为单位设置当前播放时间。
           * @param num playback time to jump to.
           */

        }, {
          key: "clip",

          /**
           * @en
           * The default AudioClip to be played for this audio source.
           * @zh
           * 设定要播放的音频。
           */
          set: function set(val) {
            this._clip = val;

            this._syncStates();
          },
          get: function get() {
            return this._clip;
          }
          /**
           * @en
           * Is looping enabled for this audio source?
           * @zh
           * 是否循环播放音频？
           */

        }, {
          key: "loop",
          set: function set(val) {
            this._loop = val;

            if (this._clip) {
              this._clip.setLoop(val);
            }
          },
          get: function get() {
            return this._loop;
          }
          /**
           * @en
           * Is the autoplay enabled? <br>
           * Note that for most platform autoplay will only start <br>
           * after a user gesture is received, according to the latest autoplay policy: <br>
           * https://www.chromium.org/audio-video/autoplay
           * @zh
           * 是否启用自动播放。 <br>
           * 请注意，根据最新的自动播放策略，现在对大多数平台，自动播放只会在第一次收到用户输入后生效。 <br>
           * 参考：https://www.chromium.org/audio-video/autoplay
           */

        }, {
          key: "playOnAwake",
          set: function set(val) {
            this._playOnAwake = val;
          },
          get: function get() {
            return this._playOnAwake;
          }
          /**
           * @en
           * The volume of this audio source (0.0 to 1.0).<br>
           * Note: Volume control may be ineffective on some platforms.
           * @zh
           * 音频的音量（大小范围为 0.0 到 1.0）。<br>
           * 请注意，在某些平台上，音量控制可能不起效。<br>
           */

        }, {
          key: "volume",
          set: function set(val) {
            if (isNaN(val)) {
              console.warn('illegal audio volume!');
              return;
            }

            val = clamp(val, 0, 1);

            if (this._clip) {
              this._clip.setVolume(val); // on some platform volume control may not be available


              this._volume = this._clip.getVolume();
            } else {
              this._volume = val;
            }
          },
          get: function get() {
            return this._volume;
          }
        }, {
          key: "currentTime",
          set: function set(num) {
            if (isNaN(num)) {
              console.warn('illegal audio time!');
              return;
            }

            num = clamp(num, 0, this.duration);
            this._cachedCurrentTime = num;

            if (!this._clip) {
              return;
            }

            this._clip.setCurrentTime(this._cachedCurrentTime);
          }
          /**
           * @en
           * Get the current playback time, in seconds.
           * @zh
           * 以秒为单位获取当前播放时间。
           */
          ,
          get: function get() {
            if (!this._clip) {
              return this._cachedCurrentTime;
            }

            return this._clip.getCurrentTime();
          }
          /**
           * @en
           * Get the audio duration, in seconds.
           * @zh
           * 获取以秒为单位的音频总时长。
           */

        }, {
          key: "duration",
          get: function get() {
            if (!this._clip) {
              return 0;
            }

            return this._clip.getDuration();
          }
          /**
           * @en
           * Get current audio state.
           * @zh
           * 获取当前音频状态。
           */

        }, {
          key: "state",
          get: function get() {
            if (!this._clip) {
              return AudioClip.PlayingState.INITIALIZING;
            }

            return this._clip.state;
          }
          /**
           * @en
           * Is the audio currently playing?
           * @zh
           * 当前音频是否正在播放？
           */

        }, {
          key: "playing",
          get: function get() {
            return this.state === AudioClip.PlayingState.PLAYING;
          }
        }]);

        return AudioSource;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_clip", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_loop", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_playOnAwake", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_volume", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "clip", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "clip"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "loop", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "loop"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "playOnAwake", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "playOnAwake"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "volume", [_dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "volume"), _class2.prototype)), _class2)) || _class) || _class) || _class));

      legacyCC.AudioSourceComponent = AudioSource;
      js.setClassAlias(AudioSource, 'cc.AudioSourceComponent');

    }
  };
});
