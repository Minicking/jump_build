System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///Box.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, Vec3, Component, _dec, _class, ccclass, property, Box;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6643c+mADFPg59fhSVi8+Su", "Box", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Box", Box = (_dec = ccclass('Box'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(Box, _Component);

        function Box() {
          _classCallCheck(this, Box);

          return _possibleConstructorReturn(this, _getPrototypeOf(Box).apply(this, arguments));
        }

        _createClass(Box, [{
          key: "onLoad",
          value: function onLoad() {
            this.time_elastic = 0;
            this.time_power = 0;
            this.time_fall = 0;
            this.action_elastic = false;
            this.action_power = false;
            this.action_fall = false;
            this.data_elastic = {};
            this.data_fall = {};
            this.cycle_elastic = 20;
          }
        }, {
          key: "onTouchDown",
          value: function onTouchDown(event) {
            if (!this.action_power) {
              this.action_power = true;
            }
          }
        }, {
          key: "onTouchUp",
          value: function onTouchUp(event) {
            if (this.action_power) {
              this.action_power = false;
              this.startElastic();
            }
          }
        }, {
          key: "startElastic",
          value: function startElastic() {
            this.time_elastic = 0;
            this.action_elastic = true;
            this.data_elastic.origin_scale_y = this.node.getScale().y;
            this.data_elastic.A = this.data_elastic.origin_scale_y - 1;
          }
        }, {
          key: "startFall",
          value: function startFall() {
            this.time_fall = 0; // 当前掉落时间

            this.action_fall = true; // 是否处于掉落状态

            this.data_fall.speed = 0; // 瞬时掉落速度

            this.data_fall.g = 70; // 掉落时的重力加速度

            this.data_fall.k = 0.5; // 反弹时速度保留的比例
          }
        }, {
          key: "actionElastic",
          value: function actionElastic(dt) {
            if (this.action_elastic) {
              this.time_elastic += dt; // 当前时间的振幅,随着时间推移振幅会逐渐变小

              var A = this.data_elastic.A * (1 / (1 + this.time_elastic * 20)); // 当前时间的实际振动偏移量,根据当前时间振幅以及关于时间的余弦函数计算得到

              var y = A * Math.cos(this.time_elastic * this.cycle_elastic);
              this.node.setScale(new Vec3(1, 1 + y, 1));

              if (Math.abs(A) < 0.03) {
                this.node.setScale(new Vec3(1, 1, 1));
                this.action_elastic = false;
              }
            }
          }
        }, {
          key: "actionPower",
          value: function actionPower(dt) {
            if (this.action_power) {
              this.time_power += dt;
              var y = 1 - this.time_power * 2;

              if (y < .1) {
                this.action_power = false;
                this.startElastic();
              } else {
                this.node.setScale(new Vec3(1, y, 1));
              }
            }
          }
        }, {
          key: "actionFall",
          value: function actionFall(dt) {
            if (this.action_fall) {
              this.time_fall += dt;
              var cur_pos = this.node.getPosition();
              this.data_fall.speed += this.data_fall.g * dt;
              var dy = this.data_fall.speed * dt;
              cur_pos.y -= dy;

              if (cur_pos.y <= 0) {
                this.data_fall.speed *= -1 * this.data_fall.k;
                cur_pos.y = 0;
              }

              if (Math.abs(this.data_fall.speed) <= 0.1 && cur_pos.y <= 0.1) {
                cur_pos.y = 0;
                this.action_fall = false;
              }

              this.node.setPosition(cur_pos);
            }
          }
        }, {
          key: "update",
          value: function update(dt) {
            this.actionElastic(dt);
            this.actionFall(dt);
          }
        }]);

        return Box;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Config.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _classCallCheck, cclegacy, UseTeaching, UseSign, UseDebug, UseLog, UseStatistics, Config;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1c95bfLt8hDMI/mY7kSxKrA", "Config", undefined);

      _export("UseTeaching", UseTeaching = false);

      _export("UseSign", UseSign = true);

      _export("UseDebug", UseDebug = false);

      _export("UseLog", UseLog = false);

      _export("UseStatistics", UseStatistics = false);

      _export("Config", Config = function Config() {
        _classCallCheck(this, Config);

        this.DebugGameTime = -1;
        this.baseUrl = 'https://api.didiapp.com';
        this.env = localStorage.getItem('userContent') ? JSON.parse(localStorage.getItem('userContent')).env : '';
        if (this.env === 'dev') this.baseUrl = 'https://dev-api.didiapp.com';else if (this.env === 'xlab') this.baseUrl = 'https://xlab-api.didiapp.com';else if (this.env === 'online') this.baseUrl = 'https://api.didiapp.com';

        if (this.env === 'dev') {
          this.config = {
            matchCode: 'match-na9u3tge',
            gameId: 'obg-4zid10f3',
            secretKey: '',
            initConfig: {
              url: '4zid10f3.wxlagame.com',
              reconnectMaxTimes: 5,
              reconnectInterval: 1000,
              resendInterval: 1000,
              resendTimeout: 10000,
              isAutoRequestFrame: true
            }
          };
        } else {
          this.config = {
            matchCode: 'match-auuc635m',
            gameId: 'obg-8lfv7afz',
            secretKey: '',
            initConfig: {
              url: '8lfv7afz.wxlagame.com',
              reconnectMaxTimes: 5,
              reconnectInterval: 1000,
              resendInterval: 1000,
              resendTimeout: 10000,
              isAutoRequestFrame: true
            }
          };
        }

        this.serverURL = {
          gameInit: this.baseUrl + '/client/awesome/minigame/jump/info/',
          accountInit: this.baseUrl + '/client/account/user/info/',
          loverInfo: this.baseUrl + '/client/account/lover/',
          vipInfo: this.baseUrl + '/client/account/user/vip/',
          sign: this.baseUrl + '/client/awesome/minigame/jump/sign',
          group: this.baseUrl + '/client/awesome/minigame/jump/group_id/'
        };
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Const.js", ["cc", "./Config.js"], function (_export, _context) {
  "use strict";

  var cclegacy, Color, BoxShape, BoxSizeName, BoxSize, JumpStatus, AIDataType, ServerDataType, ClientDataType, RoomDataType, EmojiType, PlayerState, NetState, GroupMessageType, GroupSysMessageType, LabelColor, DialogButtonType, TeamColor, StatisticsKey;

  function log() {} //-------地图相关----------


  _export({
    log: log,
    BoxShape: void 0,
    JumpStatus: void 0,
    AIDataType: void 0,
    ServerDataType: void 0,
    ClientDataType: void 0,
    RoomDataType: void 0,
    EmojiType: void 0,
    DialogButtonType: void 0
  });

  return {
    setters: [function (_cc) {
      cclegacy = _cc.cclegacy;
      Color = _cc.Color;
    }, function (_ConfigJs) {}],
    execute: function () {
      cclegacy._RF.push({}, "286ccI0TulGCrD81NytQWoS", "Const", undefined);

      (function (BoxShape) {
        BoxShape[BoxShape["cube"] = 0] = "cube";
        BoxShape[BoxShape["circle"] = 1] = "circle";
      })(BoxShape || _export("BoxShape", BoxShape = {}));

      _export("BoxSizeName", BoxSizeName = {
        mini: 0,
        small: 1,
        middle: 2,
        large: 3,
        huge: 4,
        center: 5 //AI 用来判断中心点所用的尺寸

      });

      _export("BoxSize", BoxSize = {
        0: 1.00 * 1.3,
        1: 1.41 * 1.3,
        2: 1.73 * 1.3,
        3: 2.00 * 1.3,
        4: 2.24 * 1.3,
        5: 0.20 * 1.3 //AI 用来判断中心点所用的尺寸

      }); // -----通讯相关-----------


      (function (JumpStatus) {
        JumpStatus[JumpStatus["next"] = 0] = "next";
        JumpStatus[JumpStatus["current"] = 1] = "current";
        JumpStatus[JumpStatus["dead"] = 2] = "dead";
      })(JumpStatus || _export("JumpStatus", JumpStatus = {}));

      (function (AIDataType) {
        AIDataType[AIDataType["StartJump"] = 0] = "StartJump";
      })(AIDataType || _export("AIDataType", AIDataType = {}));

      (function (ServerDataType) {
        ServerDataType[ServerDataType["Error"] = -1] = "Error";
        ServerDataType[ServerDataType["Init"] = 0] = "Init";
        ServerDataType[ServerDataType["Sync"] = 1] = "Sync";
        ServerDataType[ServerDataType["Result"] = 2] = "Result";
        ServerDataType[ServerDataType["Start"] = 3] = "Start";
        ServerDataType[ServerDataType["Reconnect"] = 4] = "Reconnect";
        ServerDataType[ServerDataType["Map"] = 5] = "Map";
        ServerDataType[ServerDataType["NetState"] = 6] = "NetState";
        ServerDataType[ServerDataType["ChangeControler"] = 7] = "ChangeControler";
        ServerDataType[ServerDataType["ReconnectFailed"] = 8] = "ReconnectFailed";
        ServerDataType[ServerDataType["AI"] = 9] = "AI";
        ServerDataType[ServerDataType["MatchingSuccess"] = 10] = "MatchingSuccess";
      })(ServerDataType || _export("ServerDataType", ServerDataType = {}));

      (function (ClientDataType) {
        ClientDataType[ClientDataType["Ready"] = 0] = "Ready";
        ClientDataType[ClientDataType["Action"] = 1] = "Action";
        ClientDataType[ClientDataType["End"] = 2] = "End";
        ClientDataType[ClientDataType["Reconnect"] = 3] = "Reconnect";
        ClientDataType[ClientDataType["ChangeControler"] = 4] = "ChangeControler";
        ClientDataType[ClientDataType["ReconnectComplete"] = 5] = "ReconnectComplete";
        ClientDataType[ClientDataType["Heart"] = 6] = "Heart";
        ClientDataType[ClientDataType["RequestInitData"] = 7] = "RequestInitData";
        ClientDataType[ClientDataType["RequestSyncData"] = 8] = "RequestSyncData";
        ClientDataType[ClientDataType["SyncComplete"] = 9] = "SyncComplete";
        ClientDataType[ClientDataType["JumpComplete"] = 10] = "JumpComplete";
        ClientDataType[ClientDataType["SingalAI"] = 11] = "SingalAI";
        ClientDataType[ClientDataType["ChangeNetState"] = 12] = "ChangeNetState";
      })(ClientDataType || _export("ClientDataType", ClientDataType = {}));

      (function (RoomDataType) {
        RoomDataType[RoomDataType["EnemyPowerEnd"] = 0] = "EnemyPowerEnd";
        RoomDataType[RoomDataType["Power"] = 1] = "Power";
        RoomDataType[RoomDataType["PowerEnd"] = 2] = "PowerEnd";
        RoomDataType[RoomDataType["emoji"] = 3] = "emoji";
        RoomDataType[RoomDataType["SyncComplete"] = 4] = "SyncComplete";
        RoomDataType[RoomDataType["MatchedJoinGroup"] = 5] = "MatchedJoinGroup";
      })(RoomDataType || _export("RoomDataType", RoomDataType = {}));

      (function (EmojiType) {
        EmojiType[EmojiType["Angry"] = 0] = "Angry";
        EmojiType[EmojiType["Worship"] = 1] = "Worship";
        EmojiType[EmojiType["Unfortunately"] = 2] = "Unfortunately";
        EmojiType[EmojiType["Applause"] = 3] = "Applause";
      })(EmojiType || _export("EmojiType", EmojiType = {}));

      _export("PlayerState", PlayerState = {
        NotReady: 0,
        Ready: 1
      });

      _export("NetState", NetState = {
        Offline: 0,
        Online: 1
      });

      _export("GroupMessageType", GroupMessageType = {
        Sys: 1,
        //系统通知
        Talk: 2 //聊天信息

      });

      _export("GroupSysMessageType", GroupSysMessageType = {
        Matching: 1 //进入匹配通知

      }); //---------------------------------------------


      _export("LabelColor", LabelColor = {
        Captain: new Color(46, 139, 33),
        Ready: new Color(46, 139, 33),
        NotReady: new Color(131, 123, 123)
      });

      (function (DialogButtonType) {
        DialogButtonType[DialogButtonType["single"] = 0] = "single";
        DialogButtonType[DialogButtonType["multiple"] = 1] = "multiple";
      })(DialogButtonType || _export("DialogButtonType", DialogButtonType = {}));

      _export("TeamColor", TeamColor = {
        red: '0',
        blue: '1'
      });

      _export("StatisticsKey", StatisticsKey = {
        login: '1',
        leave: '2',
        main_rule_clicked: 'main_rule_clicked',
        //	跳一跳首页-点击规则
        main_quick_clicked: 'main_quick_clicked',
        //	跳一跳首页-点击快速组队
        main_couple_clicked: 'main_couple_clicked',
        //	跳一跳首页-点击和另一半一起玩
        main_quick_match: 'main_quick_match',
        //	跳一跳首页-快速组队-匹配成功
        main_quick_cancel: 'main_quick_cancel',
        //	跳一跳首页-快速组队-取消匹配
        main_couple_match: 'main_couple_match',
        //	跳一跳首页-情侣组队-匹配成功
        main_couple_cancel: 'main_couple_cancel',
        //	跳一跳首页-情侣组队-取消匹配
        main_couple_wait_invite: 'main_couple_wait_invite',
        //	跳一跳首页-等待另一半-再次邀请
        main_wait_invite_cancel: 'main_wait_invite_cancel',
        //	跳一跳首页-等待另一半-取消邀请 ---待定
        Guidance_appear_clicked: 'Guidance_appear_clicked',
        //	出现新手引导
        Guidance_pass_start: 'Guidance_pass_start',
        //	通过新手引导-点击开始游戏
        Guidance_pass_again: 'Guidance_pass_again',
        //	通过新手引导-点击重新演示
        Guidance_skip_clicked: 'Guidance_skip_clicked',
        //	跳过新手引导
        Guidance_skip_confirmed: 'Guidance_skip_confirmed',
        //	确认跳过新手引导
        game_jump_success: 'game_jump_success',
        //	跳一跳游戏-跳跃成功
        game_jump_fail: 'game_jump_fail',
        //	跳一跳游戏-跳跃失败
        game_start_jump: 'game_start_jump',
        //	跳一跳游戏-任意一次跳跃
        game_start_emotion: 'game_start_emotion',
        //	跳一跳游戏-点击表情
        game_leave_clicked: 'game_leave_clicked',
        //	跳一跳游戏-离开游戏
        game_leave_confirmed: 'game_leave_confirmed',
        //	跳一跳游戏-确认离开游戏
        game_over_again: 'game_over_again',
        //	跳一跳游戏-结束-再来一局
        game_over_replace: 'game_over_replace',
        //	跳一跳游戏-结束-换个队友
        game_over_back: 'game_over_back',
        //	跳一跳游戏-结束-回到首页
        game_voice_turn: 'game_voice_turn',
        //	跳一跳游戏-点击音效
        game_share_chat: 'game_share_chat',
        //	跳一跳游戏-悄悄话分享成功
        game_share_wechat: 'game_share_wechat',
        //	跳一跳游戏-微信分享成功
        game_share_QQ: 'game_share_QQ',
        //	跳一跳游戏-QQ分享成功
        game_share_clicked: 'game_share_clicked' //	跳一跳游戏-分享

      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///DeployInfo.js", ["cc"], function (_export, _context) {
  "use strict";

  var cclegacy, DeployInfo;
  return {
    setters: [function (_cc) {
      cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b0e97zlqg9DAJCZeY2PJIWp", "DeployInfo", undefined);

      _export("DeployInfo", DeployInfo = {
        "version": 73
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///quan.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, Vec3, MeshRenderer, tween, Vec4, Component, _dec, _class, _temp, ccclass, property, Quan;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
      MeshRenderer = _cc.MeshRenderer;
      tween = _cc.tween;
      Vec4 = _cc.Vec4;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "88109mMvhFPC4a/ipJ0aAXk", "quan", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Quan", Quan = (_dec = ccclass('Quan'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(Quan, _Component);

        function Quan() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Quan);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Quan)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.originState = new Vec3(0, 0, 0);
          _this.startState = new Vec3(.5, 1, .5);
          _this.endState = new Vec3(4, 1, 4);
          return _this;
        }

        _createClass(Quan, [{
          key: "start",
          value: function start() {
            this.material = this.node.getComponent(MeshRenderer).materials[0];
            this.pass = this.material.passes[0];
            this.node.setScale(this.originState);
          }
        }, {
          key: "startAnimation",
          value: function startAnimation() {
            var _this2 = this;

            this.node.setScale(this.startState);
            tween(this.node).to(.5, {
              scale: this.endState
            }, {
              onComplete: function onComplete() {
                _this2.node.setScale(_this2.originState);
              },
              onUpdate: function onUpdate(target, ratio) {
                _this2.pass.setUniform(_this2.pass.getHandle("mainColor"), new Vec4(1, 1, 1, 1 - ratio));
              }
            }).start();
          }
        }]);

        return Quan;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Player.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc", "./Box.js", "./Const.js", "./quan.js"], function (_export, _context3) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, cclegacy, _decorator, Vec3, Quat, Prefab, CCFloat, Vec2, systemEvent, SystemEvent, ParticleSystem, randomRangeInt, randomRange, tween, Tween, Component, instantiate, loader, Box, JumpStatus, StatisticsKey, ClientDataType, BoxSize, BoxSizeName, log, Quan, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, ccclass, property, tempVec_1, tempVec_2, tempQuat_1, tempQuat_2, Player;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _asyncToGenerator = _virtual_rollupPluginBabelHelpersJs.asyncToGenerator;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
      Quat = _cc.Quat;
      Prefab = _cc.Prefab;
      CCFloat = _cc.CCFloat;
      Vec2 = _cc.Vec2;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      ParticleSystem = _cc.ParticleSystem;
      randomRangeInt = _cc.randomRangeInt;
      randomRange = _cc.randomRange;
      tween = _cc.tween;
      Tween = _cc.Tween;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      loader = _cc.loader;
    }, function (_BoxJs) {
      Box = _BoxJs.Box;
    }, function (_ConstJs) {
      JumpStatus = _ConstJs.JumpStatus;
      StatisticsKey = _ConstJs.StatisticsKey;
      ClientDataType = _ConstJs.ClientDataType;
      BoxSize = _ConstJs.BoxSize;
      BoxSizeName = _ConstJs.BoxSizeName;
      log = _ConstJs.log;
    }, function (_quanJs) {
      Quan = _quanJs.Quan;
    }],
    execute: function () {
      cclegacy._RF.push({}, "06087OdteJF9alMqGeb4DFG", "Player", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      tempVec_1 = new Vec3();
      tempVec_2 = new Vec3();
      tempQuat_1 = new Quat();
      tempQuat_2 = new Quat();

      _export("Player", Player = (_dec = ccclass('Player'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: CCFloat
      }), _dec4 = property({
        type: CCFloat
      }), _dec5 = property({
        type: CCFloat
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(Player, _Component);

        function Player() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Player);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Player)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "playerPrfb", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "jumpHeight", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "jumpDuration", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "max_time", _descriptor4, _assertThisInitialized(_this));

          _this.originPosY = 0;
          _this.originRotation = new Quat(0, 1, 0, 0);
          _this.curRotation = new Quat();
          _this.curPostion = new Vec3();
          _this._jump_time = 0;
          _this.jumpResult = {
            time: null,
            distance: null,
            offset: null,
            status: null,
            perfect: false
          };
          _this._face = new Vec2();
          _this._axis = new Vec3();
          _this._stat_power = false;
          _this._stat_jump = false;
          _this.curBox = null;
          _this.nextBox = null;
          _this._isRunning = false;
          _this._control = false;
          _this.is_controler = false;
          _this.modelBody = null;
          _this.modelHead = null;
          _this.modelHeadPos = new Vec3();
          _this.modelTire = null;
          _this.AI = false;
          _this.AI_power = false;
          _this.AI_jump = false;
          return _this;
        }

        _createClass(Player, [{
          key: "onLoad",
          value: function onLoad() {
            this.node.getRotation(tempQuat_1);
          }
        }, {
          key: "initEvent",
          value: function initEvent() {
            systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onTouchDown, this);
            systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onTouchUp, this);
          }
        }, {
          key: "initPlayer",
          value: function initPlayer() {
            var pos = new Vec3(this.gameManager.serverTeam.pos[0], this.originPosY, this.gameManager.serverTeam.pos[1]);
            this.node.setPosition(pos);
            this.node.setRotation(this.originRotation);
            this.curPostion = pos;
            this._isRunning = false;
            this._control = false;
            this.is_controler = false;
            this._jump_time = 0;
            this.AI_power = false;
            this.AI_jump = false;
            this._stat_power = false;
            this._stat_jump = false;
          } //------------------自定义事件---------------------------
          // onSetFace(event) {
          // }
          //------------------------------------------------------

        }, {
          key: "start",
          value: function start() {
            this.originPosY = this.node.position.y;
            this.quan = this.node.getChildByName('quan').getComponent(Quan);
            this.node.getRotation(this.curRotation);
            this.initEvent();
          }
        }, {
          key: "onTouchDown",
          value: function onTouchDown(event) {
            if (this.control && this.is_controler) {
              if (this._stat_power == false && this._stat_jump == false) {
                this.particleOpen(true);
                this.gameManager.Util.playAudio(this.gameManager.audio_touch_down);
                this.onPowerDown();
                this._stat_power = true;
                this.jumpResult.time = 0;
                this._control = false;
              }
            }
          }
        }, {
          key: "onTouchUp",
          value: function onTouchUp(event) {
            if (this._stat_power && this.is_controler) {
              if (this.jumpResult.time > this.max_time) this.jumpResult.time = this.max_time;
              this._stat_power = false;
              this.modelBody.setScale(new Vec3(1, 1, 1));
              this.modelHead.setPosition(this.modelHeadPos);

              if (this.modelTire) {
                this.modelTire.setPosition(new Vec3(0, 0, 0));
              } // let PlayerPos = new Vec3();
              // this.node.getPosition(PlayerPos);
              // PlayerPos.y = this.originPosY;
              // this.node.setPosition(PlayerPos);


              this.start_jump();
            }
          }
        }, {
          key: "teammatePower",
          value: function teammatePower() {
            if (this.control == false) {
              this.gameManager.Util.playAudio(this.gameManager.audio_touch_down);
              this.jumpResult.time = 0;
              this._stat_power = true;
              this.particleOpen(true);
            }
          }
        }, {
          key: "teammatePowerEnd",
          value: function teammatePowerEnd(jumpInfo) {
            if (this.control == false) {
              this._stat_power = false;
              this.modelBody.setScale(new Vec3(1, 1, 1));
              this.modelHead.setPosition(this.modelHeadPos);

              if (this.modelTire) {
                this.modelTire.setPosition(new Vec3(0, 0, 0));
              }

              var PlayerPos = new Vec3();
              this.node.getPosition(PlayerPos);
              PlayerPos.y = this.originPosY;
              this.node.setPosition(PlayerPos);
              this.start_jump(jumpInfo);
            }
          }
        }, {
          key: "funnction_jump",
          value: function funnction_jump(time) {
            return 9 * time * time + 7 * time;
          }
        }, {
          key: "function_getJumpInfo",
          value: function function_getJumpInfo() {
            // 根据蓄力时间以及预设的公式计算此次跳跃的实际跳跃距离
            this.jumpResult.distance = this.funnction_jump(this.jumpResult.time); // 计算此次跳跃的结果,包括落点位置的偏移量,跳跃结果状态(当前格,下一格,结果状态)

            var nextBoxPos = new Vec3();
            var curBoxPos = new Vec3();
            var curPlayerPos = new Vec3();
            var newPos = new Vec2();
            var offset = null;
            var perfect = false;
            var jumpStatus = null;
            this.node.getPosition(curPlayerPos);
            this.curBox.node.getPosition(curBoxPos);
            this.nextBox.node.getPosition(nextBoxPos);
            this.getFace(newPos);
            newPos.normalize();
            newPos.multiplyScalar(this.jumpResult.distance);
            newPos.x += curPlayerPos.x;
            newPos.y += curPlayerPos.z; // log('新位置坐标:', newPos);
            // log('当前脚下块中心坐标:', curBoxPos);
            // log('下一块中心坐标:', nextBoxPos);

            var toCenter = new Vec2(999, 999);

            if (this.gameManager.Util.posInBox(newPos, new Vec2(nextBoxPos.x, nextBoxPos.z), this.nextBox.size, this.nextBox.shape, toCenter)) {
              offset = [newPos.x - nextBoxPos.x, newPos.y - nextBoxPos.z];
              jumpStatus = JumpStatus.next;

              if (toCenter.x < .325) {
                perfect = true;
              }
            } else if (this.gameManager.Util.posInBox(newPos, new Vec2(curBoxPos.x, curBoxPos.z), this.curBox.size, this.curBox.shape)) {
              offset = [newPos.x - curBoxPos.x, newPos.y - curBoxPos.z];
              jumpStatus = JumpStatus.current;
            } else {
              jumpStatus = JumpStatus.dead;
              offset = [newPos.x - nextBoxPos.x, newPos.y - nextBoxPos.z];
            }

            this.jumpResult.offset = offset;
            this.jumpResult.status = jumpStatus;
            this.jumpResult.perfect = perfect;
          }
        }, {
          key: "start_jump",
          value: function start_jump() {
            var _this2 = this;

            var jumpInfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var isTeach = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            this.particleOpen(false);
            var isControler = false;

            if (!this._stat_power) {
              // 开启轨迹
              var particleSystem = this.node.getChildByName('Node').getChildByName('body').getComponent(ParticleSystem);

              if (particleSystem) {
                particleSystem.enabled = true;
              }

              this._stat_jump = true;
              this._jump_time = 0;
              this.getFace(this._face);
              this._axis = this.gameManager.Util.getJumpAxis(this.node, this.nextBox.node);
              this.node.getRotation(this.curRotation);
              this.node.getPosition(this.curPostion); // 播放盒子回弹动画

              this.curBox.node.getComponent(Box).startElastic(); // 有jumpInfo表示此次跳跃为队友跳跃,根据其中的数据完成此次跳跃

              if (jumpInfo == null) {
                if (this.gameManager.serverPlayer) this.gameManager.serverPlayer.steps += 1;
                isControler = true;
                this.function_getJumpInfo();
                if (!isTeach) this.onPowerUp();
              } else {
                this.jumpResult.distance = jumpInfo.distance;
                this.jumpResult.offset = jumpInfo.pos;
                this.jumpResult.status = jumpInfo.status;
                this.jumpResult.time = jumpInfo.time;
                this.jumpResult.perfect = jumpInfo.perfect;
              }

              if (isTeach) return; // 在开始跳跃的时候实际上已经拥有了所有跳跃结果相关的数据,在此时将最新数据发送给实时服务器进行更新,但是本地数据的更新还是需要在跳跃结束后,所以在此处复制一份旧数据并对其进行更新后发送给实时服务器

              var actionDataTeam = {
                id: this.gameManager.serverTeam.id,
                cur_cube: this.gameManager.serverTeam.cur_cube,
                pos: this.gameManager.serverTeam.pos,
                perfectJump: this.gameManager.serverTeam.perfectJump,
                oneStepFinish: this.gameManager.serverTeam.oneStepFinish,
                playerList: this.gameManager.serverTeam.playerList
              };
              var actionDataPlayer = {
                score: this.gameManager.serverPlayer.score,
                id: this.gameManager.serverPlayer.id,
                avatar: this.gameManager.serverPlayer.avatar,
                status: this.gameManager.serverPlayer.status,
                teamId: this.gameManager.serverPlayer.teamId,
                name: this.gameManager.serverPlayer.name,
                gender: this.gameManager.serverPlayer.gender,
                isVip: this.gameManager.serverPlayer.isVip,
                isRobot: this.gameManager.serverPlayer.isRobot,
                lover_id: this.gameManager.serverPlayer.lover_id,
                user_id: this.gameManager.serverPlayer.user_id,
                steps: this.gameManager.serverPlayer.steps
              };
              var key = StatisticsKey.game_jump_fail;

              switch (this.jumpResult.status) {
                case JumpStatus.next:
                  key = StatisticsKey.game_jump_success;
                  actionDataTeam.cur_cube += 1;
                  actionDataTeam.pos = this.jumpResult.offset;
                  if (this.jumpResult.perfect) actionDataTeam.perfectJump += 1;else actionDataTeam.perfectJump = 0;

                  if (isControler) {
                    var score = this.gameManager.Util.getScore(actionDataTeam.perfectJump);
                    actionDataPlayer.score += score;
                  }

                  break;

                case JumpStatus.current:
                  actionDataTeam.pos = this.jumpResult.offset;
                  actionDataTeam.perfectJump = 0;
                  break;

                default:
                  actionDataTeam.perfectJump = 0;
                  break;
              }

              if (isControler) {
                this.gameManager.Util.callTDGA(key);
                setTimeout(function () {
                  _this2.gameManager.Util.callTDGA(StatisticsKey.game_start_jump);
                }, 50);
              }

              this.gameManager.SDK.sendToServer(ClientDataType.Action, {
                player: actionDataPlayer,
                team: actionDataTeam,
                status: this.jumpResult.status
              });
            }
          }
        }, {
          key: "action_power",
          value: function action_power(dt) {
            if (this._stat_power) {
              this.jumpResult.time += dt;

              if (this.jumpResult.time < this.max_time) {
                this.setPlayerPress(this.jumpResult.time / this.max_time);
                this.setBoxPress(this.jumpResult.time / this.max_time);
              } else {
                if (this.jumpResult.time > this.max_time + 2) {
                  this.jumpResult.time = this.max_time;
                  this.onTouchUp(1);
                } else {
                  if (randomRangeInt(1, 100) <= 50) {
                    var rate = randomRange(0.97, 1.03);
                    this.setPlayerPress(rate);
                    this.setBoxPress(rate);
                  }
                }
              } // AI蓄力计算


              if (this.AI && this.AI_power && !this.AI_jump && this.nextBox) {
                var distance = this.funnction_jump(this.jumpResult.time);
                var curPos = new Vec3();
                var nextPos = new Vec3();
                var newPos = new Vec2();
                this.getFace(newPos);
                newPos.normalize();
                newPos.multiplyScalar(distance);
                this.node.getPosition(curPos);
                this.nextBox.node.getPosition(nextPos);
                newPos.x += curPos.x;
                newPos.y += curPos.z;
                var v1 = new Vec2(newPos.x, newPos.y);
                var v2 = new Vec2(nextPos.x, nextPos.z);
                var dis = new Vec2();
                this.gameManager.Util.posInBox(v1, v2, this.nextBox.size, this.nextBox.shape, dis);

                if (dis.x <= BoxSize[BoxSizeName.center] || this.jumpResult.time >= this.max_time) {
                  this._stat_power = false;
                  this.modelBody.setScale(new Vec3(1, 1, 1));
                  this.modelHead.setPosition(this.modelHeadPos);

                  if (this.modelTire) {
                    this.modelTire.setPosition(new Vec3(0, 0, 0));
                  }

                  var PlayerPos = new Vec3();
                  this.node.getPosition(PlayerPos);
                  PlayerPos.y = this.originPosY;
                  this.node.setPosition(PlayerPos);
                  this.AI_jump = true;
                  this.AI_power = false;

                  if (this.gameManager.SDK.curBoard.name == 'TeachingBoard') {
                    this.AI = false;
                    this.start_jump(null, true);
                  } else {
                    this.start_jump();
                  }
                }
              }
            }
          }
        }, {
          key: "action_jump",
          value: function action_jump(dt) {
            if (this._stat_jump) {
              this._jump_time += dt;
              var y = 0;
              var val = 0;
              var roa = 0;
              var jump_end = false;

              if (this._jump_time < this.jumpDuration) {
                var a = -4 * this.jumpHeight / (this.jumpDuration * this.jumpDuration);
                var h = this.jumpDuration / 2;
                var k = this.jumpHeight;
                y = a * (this._jump_time - h) * (this._jump_time - h) + k + this.originPosY;
                val = dt / this.jumpDuration * this.jumpResult.distance;
                roa = this._jump_time / this.jumpDuration * 360;
              } else {
                y = this.originPosY;
                roa = 0;
                this._stat_jump = false;
                jump_end = true;
              } // 当前所在位置


              var cur_pos = new Vec3();
              this.node.getPosition(cur_pos);
              var new_pos = this.gameManager.Util.getPosWithVec(cur_pos, this._face, val);
              new_pos.y = y;
              Quat.rotateAround(tempQuat_1, this.curRotation, this._axis, roa * 3.1415 / 180);
              this.node.setPosition(new_pos);
              this.node.setRotation(tempQuat_1);

              if (jump_end) {
                this.AI_jump = false;
                this.action_jump_end();
              }
            }
          }
        }, {
          key: "action_jump_end",
          value: function action_jump_end() {
            var _this3 = this;

            var cur_pos = new Vec3();
            this.node.getPosition(cur_pos);
            log('跳跃结果', '基本数据:', this.jumpResult); // 关闭轨迹

            var particleSystem = this.node.getChildByName('Node').getChildByName('body').getComponent(ParticleSystem);

            if (particleSystem) {
              particleSystem.enabled = false;
            }

            if (this.jumpResult.status == JumpStatus.current) {
              log('修正量', this.jumpResult.offset);
              var newPos = new Vec3();
              this.curBox.node.getPosition(newPos);
              newPos.x += this.jumpResult.offset[0];
              newPos.z += this.jumpResult.offset[1];
              newPos.y = this.originPosY;
              this.node.setPosition(newPos);
              this.node.getPosition(this.curPostion);
              this.onJumpComplete(false, this.is_controler);
              this.gameManager.Util.playAudio(this.gameManager.audio_complete);
            } else if (this.jumpResult.status == JumpStatus.next) {
              log('修正量:', this.jumpResult.offset);

              var _newPos = new Vec3();

              this.nextBox.node.getPosition(_newPos);
              _newPos.x += this.jumpResult.offset[0];
              _newPos.z += this.jumpResult.offset[1];
              _newPos.y = this.originPosY;
              this.node.setPosition(_newPos);
              this.node.getPosition(this.curPostion);
              this.onJumpComplete(true, this.is_controler);
              if (this.jumpResult.perfect == true) this.gameManager.Util.playAudio(this.gameManager.audio_perfect);else this.gameManager.Util.playAudio(this.gameManager.audio_complete);
            } else if (this.jumpResult.status == JumpStatus.dead) {
              var nextBoxPos = this.nextBox.node.getPosition();

              var _newPos2 = new Vec3();

              _newPos2.x = nextBoxPos.x + this.jumpResult.offset[0];
              _newPos2.z = nextBoxPos.z + this.jumpResult.offset[1];
              _newPos2.y = this.originPosY;
              this.node.setPosition(_newPos2);

              var dead_pos = _newPos2.clone();

              dead_pos.y = -0.5;
              this.gameManager.Util.playAudio(this.gameManager.audio_dead); // 判断是否需要进行倾斜

              var toCenter = new Vec2(9999, 9999);
              this.gameManager.Util.posInBox(new Vec2(_newPos2.x, _newPos2.z), new Vec2(nextBoxPos.x, nextBoxPos.z), this.nextBox.size, this.nextBox.shape, toCenter);

              if (toCenter.x <= BoxSize[this.nextBox.size] / 2 + 0.4) {
                var ang = new Vec2(_newPos2.x - nextBoxPos.x, _newPos2.z - nextBoxPos.z);
                ang.normalize();
                ang.multiplyScalar(0.8);
                dead_pos.x += ang.x;
                dead_pos.z += ang.y;
                var quat_end = this.gameManager.Util.getTiltQuat(this.node, this.nextBox.node.getPosition());
                var quat_start = this.node.getRotation();
                var quat_now = new Quat();
                tween(this.node).to(.6, {
                  position: dead_pos
                }, {
                  onComplete: this.jumpDead.bind(this),
                  onUpdate: function onUpdate(target, ratio) {
                    // ratio : 0~1
                    // 这里使用球面插值，旋转时不会出现变形
                    quat_now.set(quat_start).slerp(quat_end, ratio);

                    _this3.node.setRotation(quat_now);
                  }
                }).start();
              } else {
                tween(this.node).to(.6, {
                  position: dead_pos
                }, {
                  onComplete: this.jumpDead.bind(this)
                }).start();
              }
            }

            this.jumpResult.time = 0;
            this._jump_time = 0;
          }
        }, {
          key: "jumpDead",
          value: function jumpDead() {
            this.onJumpDead();
            this.node.setPosition(this.curPostion);
            this.node.setRotation(this.originRotation);
            this.gameManager.Util.playAudio(this.gameManager.audio_relife);
          }
        }, {
          key: "reset",
          value: function reset() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (data) {
              var nextPos = this.nextBox.node.getPosition();
              var curPos = this.curBox.node.getPosition();
              var camera_pos = new Vec3();
              var plane_pos = new Vec3(curPos.x);
              var p_pos = new Vec3(); // this.gameManager.camera

              Tween.stopAllByTarget(this.gameManager.camera); // Tween.stopAllByTarget(this.gameManager.plane);

              plane_pos.set(curPos.x, 0, curPos.z);
              p_pos.set(curPos.x + data.pos[0], this.originPosY, curPos.z + data.pos[1]);
              Vec3.add(camera_pos, new Vec3((curPos.x + nextPos.x) / 2, 0, (curPos.z + nextPos.z) / 2), this.gameManager._origin_camera_pos);
              this.gameManager.plane.setPosition(new Vec3(curPos.x, 0, curPos.z));
              this.gameManager.camera.node.setPosition(camera_pos);
              this.node.setPosition(p_pos);

              if (this.modelTire) {
                this.modelTire.setPosition(new Vec3(0, 0, 0));
              }

              if (this.modelHead) {
                this.modelHead.setPosition(this.modelHeadPos);
              }

              if (this.modelBody) {
                this.modelBody.setScale(new Vec3(1, 1, 1));
              }
            } else {
              this.node.setPosition(this.curPostion);
            }

            this.particleOpen(false);
            this.node.setRotation(this.originRotation);
            this.node.getPosition(this.curPostion);
            this._stat_power = false;
            this._stat_jump = false;
            this.AI_power = false;
            this.AI_jump = false;
            this.curBox.node.setScale(new Vec3(1, 1, 1));
          } // 角色的通用方法

          /* 设置自己角色的面向下一个方块中心点 */

        }, {
          key: "setFace",
          value: function setFace() {
            var _this4 = this;

            if (this.nextBox) {
              var tw = tween(this.node); // 使用tween动画

              var quat_start = new Quat();
              this.node.getRotation(quat_start); // 获取起始四元数

              var quat_end = this.gameManager.Util.getRotaionQuat(this.node, this.nextBox.node); // 最终旋转四元数 假设已经算出

              var quat_now = new Quat(); // 用一个中间变量

              tw.to(0.2, {}, {
                onUpdate: function onUpdate(target, ratio) {
                  // ratio : 0~1
                  // 这里使用球面插值，旋转时不会出现变形
                  quat_now.set(quat_start).slerp(quat_end, ratio);

                  _this4.node.setRotation(quat_now);
                }
              });
              tw.start();
            }
          }
        }, {
          key: "particleOpen",
          value: function particleOpen(open) {
            this.node.getChildByName('Node').getChildByName('body').getChildByName('Particle').active = open;
          } //获取角色从当前位置到下一个方块应该的向量

        }, {
          key: "getFace",
          value: function getFace() {
            var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var vec2 = new Vec2();
            var vec3_1 = new Vec3();
            var vec3_2 = new Vec3();
            this.node.getPosition(vec3_1);
            this.nextBox.node.getPosition(vec3_2);

            if (out) {
              out.set(vec3_2.x - vec3_1.x, vec3_2.z - vec3_1.z);

              this._face.set(out);
            } else {
              this._face.set(vec3_2.x - vec3_1.x, vec3_2.z - vec3_1.z);
            }
          } // 设置棋子的向下移动量(蓄力过程中下压时的向下移动量, 比例 0.0 - 1.0)

        }, {
          key: "setPlayerPress",
          value: function setPlayerPress(rate) {
            var PlayerPos = this.node.getPosition();
            PlayerPos.y = this.originPosY - 1.102 * rate;
            this.node.setPosition(PlayerPos);
            var headPos = this.modelHead.getPosition();
            headPos.y = this.modelHeadPos.y - 0.572 * rate;
            this.modelHead.setPosition(headPos);

            if (this.modelTire) {
              var tirePos = this.modelTire.getPosition();
              tirePos.y = -0.572 * rate;
              this.modelTire.setPosition(tirePos);
            }

            var bodyScale = this.modelBody.getScale();
            bodyScale.y = 1 - rate * 0.5;
            this.modelBody.setScale(bodyScale);
          }
        }, {
          key: "setBoxPress",
          value: function setBoxPress(rate) {
            var groundScale = this.curBox.node.getScale();
            groundScale.y = 1 - rate * 0.7;
            this.curBox.node.setScale(groundScale);
          } // 修改角色模型,并自动将其头部,身体Node进行存储,序号从1-4,分别代表红1-2,蓝1-2

        }, {
          key: "setModel",
          value: function () {
            var _setModel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(modelIndex) {
              var chessPrefab, curNode, prefab, newModel;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      modelIndex -= 1;
                      chessPrefab = this.gameManager.ChessPrefab;

                      if (!(modelIndex >= chessPrefab.length || modelIndex < 0)) {
                        _context.next = 4;
                        break;
                      }

                      return _context.abrupt("return");

                    case 4:
                      curNode = this.node.getChildByName('Node');

                      if (curNode) {
                        this.node.removeChild(curNode);
                      }

                      prefab = this.gameManager.ChessPrefab[modelIndex];
                      newModel = instantiate(prefab);
                      newModel.setParent(this.node);
                      this.modelHead = newModel.getChildByName('head');
                      this.modelBody = newModel.getChildByName('body');
                      this.modelHead.getPosition(this.modelHeadPos);
                      return _context.abrupt("return", true);

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function setModel(_x) {
              return _setModel.apply(this, arguments);
            }

            return setModel;
          }() // 修改角色的头饰,并自动将其Node进行存储

        }, {
          key: "setTire",
          value: function () {
            var _setTire = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(index) {
              var _this5 = this;

              var key, curNode, prefabPath, promise;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      key = null;
                      _context2.t0 = index;
                      _context2.next = _context2.t0 === 1 ? 4 : 6;
                      break;

                    case 4:
                      key = 'vip';
                      return _context2.abrupt("break", 6);

                    case 6:
                      curNode = this.node.getChildByName('Tire').getChildByName('Node');

                      if (curNode) {
                        this.node.getChildByName('Tire').removeChild(curNode);
                      }

                      if (key) {
                        _context2.next = 10;
                        break;
                      }

                      return _context2.abrupt("return", false);

                    case 10:
                      prefabPath = 'Model/Tire/' + key + '/Node';
                      promise = new Promise(function (resolve) {
                        loader.loadRes(prefabPath, Prefab, function (err, prefab) {
                          var newTire = instantiate(prefab);
                          newTire.setParent(_this5.node.getChildByName('Tire'));
                          _this5.modelTire = newTire;
                          resolve(newTire);
                        });
                      });
                      return _context2.abrupt("return", true);

                    case 13:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function setTire(_x2) {
              return _setTire.apply(this, arguments);
            }

            return setTire;
          }()
        }, {
          key: "update",
          value: function update(deltaTime) {
            if (!this.isRunning && this.gameManager.SDK && this.gameManager.SDK.curBoard && this.gameManager.SDK.curBoard.name != 'TeachingBoard') {
              return;
            }

            if (this.AI) {
              var isTeach = this.gameManager.SDK.curBoard.name == 'TeachingBoard';

              if (this.control || isTeach) {
                if (this._stat_power == false && this._stat_jump == false && !this.AI_jump && !this.AI_power) {
                  if (!isTeach) this.onPowerDown();
                  this.AI_power = true;
                  this._stat_power = true;
                  this.jumpResult.time = 0;
                  this._control = false;
                }
              }
            }

            this.action_power(deltaTime);
            this.action_jump(deltaTime);
          }
        }, {
          key: "control",
          //停止蓄力时触≥发事件
          set: function set(val) {
            this._control = val;
            this.is_controler = val;

            if (this.is_controler) {
              this.initEvent();
            }
          },
          get: function get() {
            return this._control;
          }
        }, {
          key: "isRunning",
          set: function set(b) {
            this._isRunning = b;
          },
          get: function get() {
            return this._isRunning;
          }
        }]);

        return Player;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playerPrfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "jumpHeight", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "jumpDuration", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.7;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "max_time", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 4;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Util.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Const.js"], function (_export, _context11) {
  "use strict";

  var _createClass, _classCallCheck, _typeof, _asyncToGenerator, cclegacy, _decorator, Vec2, Rect, Vec3, Quat, loader, Prefab, AudioSource, Sprite, Texture2D, ImageAsset, SpriteFrame, Label, Node, BoxShape, TeamColor, StatisticsKey, BoxSize, ccclass, property, Util, HttpCode, HttpMethod, Http;

  function throttle() {
    var wait = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;
    return function (target, name, descriptor) {
      {
        var fun = descriptor.value;
        var timer = null;

        descriptor.value = function () {
          if (!timer) {
            fun.apply(this);
            timer = setTimeout(function () {
              timer = null;
            }, wait);
          }
        };

        return descriptor;
      }
    };
  }

  _export({
    throttle: throttle,
    HttpCode: void 0,
    HttpMethod: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _typeof = _virtual_rollupPluginBabelHelpersJs.typeof;
      _asyncToGenerator = _virtual_rollupPluginBabelHelpersJs.asyncToGenerator;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Vec2 = _cc.Vec2;
      Rect = _cc.Rect;
      Vec3 = _cc.Vec3;
      Quat = _cc.Quat;
      loader = _cc.loader;
      Prefab = _cc.Prefab;
      AudioSource = _cc.AudioSource;
      Sprite = _cc.Sprite;
      Texture2D = _cc.Texture2D;
      ImageAsset = _cc.ImageAsset;
      SpriteFrame = _cc.SpriteFrame;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_ConfigJs) {}, function (_ConstJs) {
      BoxShape = _ConstJs.BoxShape;
      TeamColor = _ConstJs.TeamColor;
      StatisticsKey = _ConstJs.StatisticsKey;
      BoxSize = _ConstJs.BoxSize;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ce5d5zghdhNhJ8k219NUh+H", "Util", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Util", Util = /*#__PURE__*/function () {
        function Util(sdk, gameManager) {
          _classCallCheck(this, Util);

          this.localImgCache = {};
          this.remoteImgCache = {};
          this.isRobotRoomCache = undefined;
          this.SDK = sdk;
          this.gameManager = gameManager;
        }

        _createClass(Util, [{
          key: "posInBox",

          /**
           * @name 判断盒子坐标点是否在盒子范围内
           * @description 如果传入out则将距离赋值到out.x这个属性中
           * @param {Vec2} pos 目标坐标点
           * @param {Vec2} t_pos 盒子中心坐标点
           * @param {number} size 盒子尺寸
           * @param {BoxShape} shape 盒子形状
           * @param {Vec2} out 距离数值
           * @returns {boolean} 返回布尔值
           */
          value: function posInBox(pos, t_pos, size, shape) {
            var out = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var range = BoxSize[size] / 2.0;

            if (out) {
              out.x = Vec2.distance(pos, t_pos);
            }

            if (shape == BoxShape.cube) {
              var t_rect = new Rect();
              var t_rect_p1 = new Vec2(t_pos.x - range, t_pos.y + range);
              var t_rect_p2 = new Vec2(t_pos.x + range, t_pos.y - range);
              Rect.fromMinMax(t_rect, t_rect_p1, t_rect_p2);
              return t_rect.contains(pos);
            } else {
              return Vec2.distance(pos, t_pos) < range;
            }
          }
          /**
           * @name 获取节点A到节点B方向的跳跃旋转轴
           * @description 用于角色节点跳跃到下一个盒子时空中旋转需要用到的旋转轴
           * @param {Node} A 起点节点
           * @param {Node} B 目标节点
           * @returns {Vec3} 返回用于跳跃计算的旋转轴
           */

        }, {
          key: "getJumpAxis",
          value: function getJumpAxis(A, B) {
            var A_pos = new Vec3();
            var B_pos = new Vec3();
            var axis = new Vec3(0, 0, 0);
            A.getPosition(A_pos);
            B.getPosition(B_pos);
            var a = A_pos.z - B_pos.z;
            var b = B_pos.x - A_pos.x;
            axis.set(-a, 0, -b);
            axis.normalize();
            return axis;
          }
        }, {
          key: "getTiltQuat",
          value: function getTiltQuat(N, center_pos) {
            var r = new Quat();
            var cur_pos = N.getPosition();
            var temp1 = new Vec2(cur_pos.x - center_pos.x, cur_pos.z - center_pos.z);
            temp1.rotate(-90 / 180 * 3.1415926);
            var axis = new Vec3(temp1.x, 0, temp1.y);
            axis.normalize();
            var cur_quat = N.getRotation();
            Quat.rotateAround(r, cur_quat, axis, 90 / 180 * 3.1415926);
            return r;
          }
          /**
           * @name 获取某节点A至目标节点B位置的Quat
           * @description 只考虑水平平面,不考虑竖直方向
           * @param {Node} A 当前节点
           * @param {Node} B 目标节点
           * @returns {Quat}
           */

        }, {
          key: "getRotaionQuat",
          value: function getRotaionQuat(A, B) {
            var cur_pos = new Vec3();
            var tar_pos = new Vec3();
            var temp1 = new Vec2(0, 1);
            var temp2 = new Vec2();
            var temp3 = new Quat();
            temp3.lengthSqr();
            A.getPosition(cur_pos);
            B.getPosition(tar_pos);
            temp2.set(tar_pos.x - cur_pos.x, tar_pos.z - cur_pos.z);
            var ang = temp2.signAngle(temp1);

            if (ang < 0) {
              ang += 2 * 3.1415926;
            }

            Quat.rotateY(temp3, temp3, ang);
            return temp3;
          }
          /**
           * @name 获取点A沿着向量V方向移动距离L后的新坐标
           * @description 起点用的Vec3是为了可以直接使用角色Node的position值作为参数,主要用于获取角色的跳跃终点坐标
           * @param {Vec3} pos 起点
           * @param {Vec2} V 方向向量
           * @param {number} L 偏移距离
           * @returns {Vec3} 新的坐标
           */

        }, {
          key: "getPosWithVec",
          value: function getPosWithVec(pos, V, L) {
            V.normalize();
            V.multiplyScalar(L);
            var new_pos = new Vec3(pos.x + V.x, 0, pos.z + V.y);
            return new_pos;
          }
          /**
           * @name 获取此次跳跃得分
           * @description 
           * @param {number} perfectCount 完美跳跃次数
           * @returns {number} 分数
           */

        }, {
          key: "getScore",
          value: function getScore(perfectCount) {
            if (perfectCount <= 0) return 1;
            var score = perfectCount * 2;
            return score <= 10 ? score : 10;
          }
          /**
           * @name 获取本地时间戳(精确到秒)
           * @returs {number} 时间戳
           */

        }, {
          key: "getLocalTime",
          value: function getLocalTime() {
            return Math.floor(Date.parse(new Date().toString()) / 1000);
          }
          /**
           * @name 获取本地日期（20210621）
           * @returs {number} 日期
           */

        }, {
          key: "getLocalDate",
          value: function getLocalDate() {
            var now = new Date();
            var year = now.getFullYear();
            var month = now.getMonth() + 1;
            var day = now.getDate();
            console.log(year, month, day);
            return "".concat(year) + (month < 10 ? "0".concat(month) : "".concat(month)) + "".concat(day);
          }
          /**
           * @name 判断是不是属于控制者
           * @description 根据同步消息中的curActionPlayer来进行判断
           * @param {any} curActionPlayer 同步消息中的curActionPlayer
           * @param {MGOBE.types.PlayerInfo} curPlayerInfo 当前自己的PlayerInfo
           * @returns {boolean} 布尔值
           */

        }, {
          key: "isControler",
          value: function isControler(curActionPlayer, curPlayerInfo) {
            var result = false;

            for (var index = 0; index < curActionPlayer.length; index++) {
              var element = curActionPlayer[index];

              if (element.id == curPlayerInfo.id) {
                result = true;
                break;
              }
            }

            return result;
          }
          /**
           * @name 获取URL参数部分中的指定参数
           * @description 
           * @param {string} paraName 参数名
           * @param {string} paraStr URL中的参数部分
           * @returns {string} 参数值
           */

        }, {
          key: "getPara",
          value: function getPara(paraName, paraStr) {
            var reg = new RegExp("(^|&)" + paraName + "=([^&]*)(&|$)", "i");
            var r = paraStr.substr(1).match(reg);

            if (r != null) {
              return decodeURI(r[2]);
            } else {
              return null;
            }
          }
          /**
           * @name 判断自己的队友是否为自己的另一半
           * @description 只有在队友为自己另一半时返回为true,其他任何情况(包括没有队友)都为false
           * @returns {boolean} 布尔值
           */

        }, {
          key: "teammaterIsLover",
          value: function () {
            var _teammaterIsLover = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var teammater, info;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(this.SDK.gameManager.teammaterIsLover != undefined)) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return", this.SDK.gameManager.teammaterIsLover);

                    case 2:
                      _context.next = 4;
                      return this.SDK.getTeammate();

                    case 4:
                      teammater = _context.sent;

                      if (teammater) {
                        _context.next = 7;
                        break;
                      }

                      return _context.abrupt("return", false);

                    case 7:
                      info = JSON.parse(teammater.customProfile);
                      this.SDK.gameManager.teammaterIsLover = info.lover_id == this.SDK.gameManager.PlayerData.lover_id && info.lover_id > 0;
                      return _context.abrupt("return", this.SDK.gameManager.teammaterIsLover);

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function teammaterIsLover() {
              return _teammaterIsLover.apply(this, arguments);
            }

            return teammaterIsLover;
          }()
          /**
           * @name 判断敌人是否为一对情侣
           * @description 只有在拥有敌人且敌人是一对情侣时返回为true,其他任何情况(包括没有敌人)都为false
           * @returns {boolean} 布尔值
           */

        }, {
          key: "enemyIsLover",
          value: function () {
            var _enemyIsLover = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var groupInfo, self, enemy1, enemy2, playerList, index, element;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(this.SDK.gameManager.enemyIsLover != undefined)) {
                        _context2.next = 2;
                        break;
                      }

                      return _context2.abrupt("return", this.SDK.gameManager.enemyIsLover);

                    case 2:
                      _context2.next = 4;
                      return this.SDK.getRoomInfo();

                    case 4:
                      groupInfo = _context2.sent;
                      _context2.next = 7;
                      return this.SDK.getPlayerInfo();

                    case 7:
                      self = _context2.sent;

                      if (groupInfo) {
                        _context2.next = 10;
                        break;
                      }

                      return _context2.abrupt("return", false);

                    case 10:
                      playerList = groupInfo.playerList;
                      index = 0;

                    case 12:
                      if (!(index < playerList.length)) {
                        _context2.next = 24;
                        break;
                      }

                      element = playerList[index];

                      if (!(element.teamId != self.teamId)) {
                        _context2.next = 21;
                        break;
                      }

                      if (!enemy1) {
                        _context2.next = 20;
                        break;
                      }

                      if (this.gameManager.robotInfo[element.id]) {
                        enemy2 = JSON.parse(this.gameManager.robotInfo[element.id].profile);
                      } else {
                        enemy2 = JSON.parse(element.customProfile);
                      }

                      return _context2.abrupt("break", 24);

                    case 20:
                      if (this.gameManager.robotInfo[element.id]) {
                        enemy1 = JSON.parse(this.gameManager.robotInfo[element.id].profile);
                      } else {
                        enemy1 = JSON.parse(element.customProfile);
                      }

                    case 21:
                      index++;
                      _context2.next = 12;
                      break;

                    case 24:
                      this.SDK.gameManager.enemyIsLover = enemy1.lover_id == enemy2.lover_id ? enemy1.lover_id != -1 ? true : false : false;
                      return _context2.abrupt("return", this.SDK.gameManager.enemyIsLover);

                    case 26:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function enemyIsLover() {
              return _enemyIsLover.apply(this, arguments);
            }

            return enemyIsLover;
          }()
          /**
           * @name 判断敌人是否是VIP
           * @description 只要敌人双方有一个人拥有VIP就返回True
           * @returns {boolean} 布尔值
           */

        }, {
          key: "enemyIsVip",
          value: function () {
            var _enemyIsVip = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var roomInfo, playerList, selfInfo, index, element, enemyInfo;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.SDK.getRoomInfo();

                    case 2:
                      roomInfo = _context3.sent;

                      if (roomInfo) {
                        _context3.next = 5;
                        break;
                      }

                      return _context3.abrupt("return", false);

                    case 5:
                      playerList = roomInfo.playerList;
                      _context3.next = 8;
                      return this.SDK.getPlayerInfo();

                    case 8:
                      selfInfo = _context3.sent;
                      index = 0;

                    case 10:
                      if (!(index < playerList.length)) {
                        _context3.next = 20;
                        break;
                      }

                      element = playerList[index];

                      if (!(element.teamId != selfInfo.teamId)) {
                        _context3.next = 17;
                        break;
                      }

                      enemyInfo = void 0;

                      if (this.gameManager.robotInfo[element.id]) {
                        enemyInfo = JSON.parse(this.gameManager.robotInfo[element.id].profile);
                      } else {
                        enemyInfo = JSON.parse(element.customProfile);
                      }

                      if (!enemyInfo.isVip) {
                        _context3.next = 17;
                        break;
                      }

                      return _context3.abrupt("return", true);

                    case 17:
                      index++;
                      _context3.next = 10;
                      break;

                    case 20:
                      return _context3.abrupt("return", false);

                    case 21:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function enemyIsVip() {
              return _enemyIsVip.apply(this, arguments);
            }

            return enemyIsVip;
          }()
          /**
           * @name 判断当前自己所在的房间是否为机器人房,自己双方为人,敌人双方为机器人
           * @returns {boolean} 布尔值
           */

        }, {
          key: "IsRobotRoom",
          value: function () {
            var _IsRobotRoom = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var roomInfo, playerList, index, element;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!(this.isRobotRoomCache != undefined)) {
                        _context4.next = 2;
                        break;
                      }

                      return _context4.abrupt("return", this.isRobotRoomCache);

                    case 2:
                      _context4.next = 4;
                      return this.SDK.getRoomInfo();

                    case 4:
                      roomInfo = _context4.sent;

                      if (roomInfo) {
                        _context4.next = 7;
                        break;
                      }

                      return _context4.abrupt("return", false);

                    case 7:
                      playerList = roomInfo.playerList;
                      index = 0;

                    case 9:
                      if (!(index < playerList.length)) {
                        _context4.next = 16;
                        break;
                      }

                      element = playerList[index];

                      if (!element.isRobot) {
                        _context4.next = 13;
                        break;
                      }

                      return _context4.abrupt("return", true);

                    case 13:
                      index++;
                      _context4.next = 9;
                      break;

                    case 16:
                      return _context4.abrupt("return", false);

                    case 17:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function IsRobotRoom() {
              return _IsRobotRoom.apply(this, arguments);
            }

            return IsRobotRoom;
          }()
          /**
           * @name 加载远程图片
           * @description 传入图片URL以及带有Sprite组件的Node,自动将图片显示在传入的Node中
           * @param {string} remoteUrl 图片URL
           * @param {Node} spriteNode 带有sprite组件的Node
           * @returns {} 无
           */

        }, {
          key: "loadRemoteImg",
          value: function () {
            var _loadRemoteImg = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(remoteUrl, spriteNode) {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      return _context5.abrupt("return", new Promise(function (resolve, reject) {
                        if (_this.remoteImgCache[remoteUrl]) {
                          // log('远程图片缓存', remoteUrl);
                          spriteNode && (spriteNode.getComponent(Sprite).spriteFrame = _this.remoteImgCache[remoteUrl]);
                          return resolve(true);
                        }

                        var img = new Image();
                        img.crossOrigin = 'Anonymous';
                        img.src = remoteUrl;

                        img.onload = function () {
                          // log('加载远程图片', img)
                          var texture = new Texture2D();
                          texture.image = new ImageAsset(img);
                          var spriteFrame = new SpriteFrame();
                          spriteFrame.texture = texture;
                          _this.remoteImgCache[remoteUrl] = spriteFrame;
                          spriteNode && (spriteNode.getComponent(Sprite).spriteFrame = spriteFrame);
                          resolve(true);
                        };

                        img.onerror = function (err) {
                          resolve(false);
                          spriteNode && _this.loadImg('/Texture/UI/main/banner@2x (3)/spriteFrame', spriteNode);
                        };
                      }));

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));

            function loadRemoteImg(_x, _x2) {
              return _loadRemoteImg.apply(this, arguments);
            }

            return loadRemoteImg;
          }()
          /**
           * @name 加载本地图片
           * @description 传入图片本地路径以及带有Sprite组件的Node,自动将图片显示在传入的Node中
           * @param {string} path 图片路径
           * @param {Node} spriteNode 带有sprite组件的Node
           * @returns {} 无
           */

        }, {
          key: "loadImg",
          value: function () {
            var _loadImg = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(path, spriteNode) {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (path) {
                        _context6.next = 2;
                        break;
                      }

                      return _context6.abrupt("return", spriteNode.getComponent(Sprite).spriteFrame = null);

                    case 2:
                      if (!this.localImgCache[path]) {
                        _context6.next = 5;
                        break;
                      } // log('本地图片缓存', path);


                      spriteNode.getComponent(Sprite).spriteFrame = this.localImgCache[path];
                      return _context6.abrupt("return");

                    case 5:
                      return _context6.abrupt("return", new Promise(function (resolve) {
                        loader.loadRes(path, SpriteFrame, function (err, spriteFrame) {
                          if (err) {
                            resolve(false);
                            throw err;
                          }

                          spriteNode.getComponent(Sprite).spriteFrame = spriteFrame;
                          _this2.localImgCache[path] = spriteFrame;
                          resolve(true);
                        });
                      }));

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function loadImg(_x3, _x4) {
              return _loadImg.apply(this, arguments);
            }

            return loadImg;
          }()
          /**
           * @name 发送http请求
           * @description 
           * @param {string} url 请求URL
           * @param {string} method 请求方法
           * @param {any} data 请求参数
           * @param {boolean} isAssets 返回数据是否为文件(默认为false)
           * @param {token} token 请求中在Header中的token(可不提供)
           * @returns {any} 请求返回数据
           */

        }, {
          key: "http",
          value: function http(url, method, data) {
            var isAssets = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var token = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            return new Promise(function (resolve, reject) {
              var request = loader.getXMLHttpRequest(); //new XMLHttpRequest();

              request.open(method, url, true);
              if (isAssets) request.responseType = 'blob';

              request.onreadystatechange = function () {
                if (request.readyState == 4) {
                  if (request.status >= 200 && request.status < 300) {
                    var response = request.responseText;
                    resolve(JSON.parse(response));
                  } else {
                    resolve(null);
                  }
                }
              };

              request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
              request.setRequestHeader("Access-Control-Allow-Origin", "*");

              if (token) {
                request.setRequestHeader("access_token", token);
              }

              if (data) {
                var str = '';

                for (var _key in data) {
                  str += _key + '=' + data[_key] + '&';
                }

                request.send(str);
              } else {
                request.send(null);
              }
            });
          }
          /**
           * @name 加载预制件
           * @param {string} path 预制件路径
           * @returns {Prefab} 预制件
           */

        }, {
          key: "loadPrefab",
          value: function () {
            var _loadPrefab = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(path) {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      return _context7.abrupt("return", new Promise(function (resolve) {
                        loader.loadRes(path, Prefab, function (err, prefab) {
                          if (err) {
                            resolve(null);
                          } else {
                            resolve(prefab);
                          }
                        });
                      }));

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));

            function loadPrefab(_x5) {
              return _loadPrefab.apply(this, arguments);
            }

            return loadPrefab;
          }()
        }, {
          key: "loadEnemyChessPrefab",
          value: function loadEnemyChessPrefab(path, team) {
            var _this3 = this;

            loader.loadRes(path, Prefab, function (err, prefab) {
              if (!err) {
                if (team == TeamColor.blue) {
                  _this3.gameManager.ChessPrefabEnemy.blue = prefab;
                } else {
                  _this3.gameManager.ChessPrefabEnemy.red = prefab;
                }
              }
            });
          }
        }, {
          key: "loadBoxPrefab",
          value: function loadBoxPrefab(path, key, index) {
            var _this4 = this;

            loader.loadRes(path, Prefab, function (err, prefab) {
              if (!err) {
                _this4.gameManager.BoxPrefab[key][index] = prefab;
              }
            });
          }
        }, {
          key: "loadChessPrefab",
          value: function loadChessPrefab(path, index) {
            var _this5 = this;

            loader.loadRes(path, Prefab, function (err, prefab) {
              if (!err) {
                _this5.gameManager.ChessPrefab[index] = prefab;
              }
            });
          }
        }, {
          key: "setAvatar",
          value: function () {
            var _setAvatar = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(node, user, showMe) {
              var profile, player, meSign, mePosition;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      profile = user.profile ? JSON.parse(user.profile) : JSON.parse(user.customProfile);
                      this.loadRemoteImg(profile.avatar_url, node);

                      if (node.getChildByName('isVip')) {
                        !profile.isVip && (node.getChildByName('isVip').active = false);
                        profile.isVip && (node.getChildByName('isVip').active = true);
                      }

                      if (node.getChildByName('gender')) {
                        profile.gender === 1 && this.loadImg('/Texture/UI/result/boy/spriteFrame', node.getChildByName('gender'));
                        profile.gender === 2 && this.loadImg('/Texture/UI/result/girl/spriteFrame', node.getChildByName('gender'));
                      }

                      if (node.getChildByName('name')) {
                        node.getChildByName('name').getComponent(Label).string = profile.nickname.length > 6 ? profile.nickname.slice(0, 5) : profile.nickname;
                      }

                      _context8.next = 7;
                      return this.SDK.getPlayerInfo();

                    case 7:
                      player = _context8.sent;

                      if (!showMe) {
                        _context8.next = 21;
                        break;
                      }

                      if (!(user.id === player.id)) {
                        _context8.next = 20;
                        break;
                      }

                      if (!node.getChildByName('me')) {
                        _context8.next = 12;
                        break;
                      }

                      return _context8.abrupt("return", node.getChildByName('me').active = true);

                    case 12:
                      meSign = new Node('me');
                      mePosition = new Vec3(0, 74, 0);
                      meSign.addComponent(Sprite);
                      this.loadImg('/Texture/UI/gaming/me/spriteFrame', meSign);
                      node.addChild(meSign);
                      meSign.setPosition(mePosition);
                      _context8.next = 21;
                      break;

                    case 20:
                      node.getChildByName('me') && (node.getChildByName('me').active = false);

                    case 21:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function setAvatar(_x6, _x7, _x8) {
              return _setAvatar.apply(this, arguments);
            }

            return setAvatar;
          }()
        }, {
          key: "getTeammaterAvatar",
          value: function () {
            var _getTeammaterAvatar = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var teammater, info;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.prev = 0;
                      _context9.next = 3;
                      return this.SDK.getTeammate();

                    case 3:
                      teammater = _context9.sent;
                      info = JSON.parse(teammater.customProfile);

                      if (!info) {
                        _context9.next = 9;
                        break;
                      }

                      return _context9.abrupt("return", info.avatar_url);

                    case 9:
                      return _context9.abrupt("return", null);

                    case 10:
                      _context9.next = 15;
                      break;

                    case 12:
                      _context9.prev = 12;
                      _context9.t0 = _context9["catch"](0);
                      return _context9.abrupt("return", null);

                    case 15:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this, [[0, 12]]);
            }));

            function getTeammaterAvatar() {
              return _getTeammaterAvatar.apply(this, arguments);
            }

            return getTeammaterAvatar;
          }() // 获取等级

        }, {
          key: "loverLevel",
          value: function loverLevel(score) {
            var levelList = [50, 100, 200, 500, 1000, 2000, 3000, 5000, 7000, 10000];

            for (var index = 0; index < levelList.length; index++) {
              var element = levelList[index];
              score -= element;

              if (score < 0) {
                return index;
              }
            }

            return 10;
          }
        }, {
          key: "playAudio",
          value: function playAudio(audio) {
            var volume = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            if (this.gameManager.Setting.switch_audio) {
              this.gameManager.getComponent(AudioSource).playOneShot(audio, volume);
            }
          }
        }, {
          key: "isJson",
          value: function isJson(data) {
            try {
              var obj = JSON.parse(data);
              if (_typeof(obj) === 'object' && obj) return true;else return false;
            } catch (err) {
              return false;
            }
          }
        }, {
          key: "localGet",
          value: function localGet(key) {
            var value = localStorage.getItem(key);
            if (!value) return false;
            if (this.isJson(value)) return JSON.parse(value);else return value;
          }
        }, {
          key: "localSet",
          value: function localSet(key, data) {
            _typeof(data) !== 'object' && localStorage.setItem(key, data);
            _typeof(data) === 'object' && localStorage.setItem(key, JSON.stringify(data));
          }
        }, {
          key: "callTDGA",
          value: function callTDGA(key) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            return false;
            if (key == StatisticsKey.login) window['TDGA_init']();

            switch (key) {
              case StatisticsKey.login:
                if (!data) return false;
                var profile = {
                  accountId: data.user_id.toString(),
                  level: this.loverLevel(data.tacitScore),
                  gameServer: '1',
                  accountType: 1,
                  age: 2,
                  accountName: data.nickname,
                  gender: data.gender
                };
                window['TDGA'].Profile(profile);
                break;

              case StatisticsKey.leave:
                window['TDGA'].onPageLeave();
                break;

              default:
                window['TDGA'].onEvent(key, data);
            }

            return true;
          }
        }, {
          key: "getNetHours",
          value: function () {
            var _getNetHours = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _result, code, date, s;

              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return Http.request(HttpMethod.GET, 'http://quan.suning.com/getSysTime.do', {});

                    case 2:
                      _result = _context10.sent;
                      code = _result.code;

                      if (code === HttpCode.Success) {
                        s = _result.data.sysTime2;
                        s = s.replace(/-/g, "/");
                        date = new Date(s);
                      } // log('getNetHours_remote', date)
                      // log('getNetHours_local ', new Date())


                      return _context10.abrupt("return", date.getHours());

                    case 6:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            }));

            function getNetHours() {
              return _getNetHours.apply(this, arguments);
            }

            return getNetHours;
          }()
        }, {
          key: "copyStr",
          value: function copyStr(str) {
            var el = document.createElement("textarea");
            el.value = str; // Prevent keyboard from showing on mobile

            el.setAttribute("readonly", ""); // @ts-ignore
            // tslint:disable-next-line: no-string-literal

            el.style.contain = "strict";
            el.style.position = "absolute";
            el.style.left = "-9999px";
            el.style.fontSize = "12pt"; // Prevent zooming on iOS

            var selection = getSelection();
            var originalRange;

            if (selection.rangeCount > 0) {
              originalRange = selection.getRangeAt(0);
            }

            document.body.appendChild(el);
            el.select(); // Explicit selection workaround for iOS

            el.selectionStart = 0;
            el.selectionEnd = str.length;
            var success = false;

            try {
              success = document.execCommand("copy");
            } catch (err) {}

            document.body.removeChild(el);

            if (originalRange) {
              selection.removeAllRanges();
              selection.addRange(originalRange);
            }
          }
        }]);

        return Util;
      }());

      (function (HttpCode) {
        HttpCode[HttpCode["Success"] = 0] = "Success";
        HttpCode[HttpCode["Error"] = 1] = "Error";
        HttpCode[HttpCode["TimeOut"] = 2] = "TimeOut";
        HttpCode[HttpCode["ServerErr"] = 3] = "ServerErr";
        HttpCode[HttpCode["Unknown"] = 4] = "Unknown";
      })(HttpCode || _export("HttpCode", HttpCode = {}));

      (function (HttpMethod) {
        HttpMethod[HttpMethod["GET"] = 0] = "GET";
        HttpMethod[HttpMethod["POST"] = 1] = "POST";
        HttpMethod[HttpMethod["PUT"] = 2] = "PUT";
        HttpMethod[HttpMethod["DELETE"] = 3] = "DELETE";
        HttpMethod[HttpMethod["PATCH"] = 4] = "PATCH";
      })(HttpMethod || _export("HttpMethod", HttpMethod = {}));

      Http = /*#__PURE__*/function () {
        function Http() {
          _classCallCheck(this, Http);
        }

        _createClass(Http, null, [{
          key: "request",
          value: function request(method, url, headers, params) {
            var _this6 = this;

            return new Promise(function (resolve) {
              var xhr = loader.getXMLHttpRequest();
              var m = "GET";

              switch (method) {
                case HttpMethod.GET:
                  m = "GET";

                  if (params) {
                    if (url.indexOf("?") === -1) {
                      url += "?";
                    }

                    url += _this6._getQueryString(params);
                    params = null;
                  }

                  break;

                case HttpMethod.POST:
                  m = "POST";
                  break;

                case HttpMethod.PUT:
                  m = "PUT";
                  break;

                case HttpMethod.DELETE:
                  m = "DELETE";
                  break;

                case HttpMethod.PATCH:
                  m = "PATCH";
                  break;
              }

              xhr.open(m, url, true); // 错误

              xhr.onerror = function () {
                resolve({
                  code: HttpCode.Error,
                  data: null
                });
              }; // 超时


              xhr.timeout = 8000;

              xhr.ontimeout = function () {
                xhr.abort();
                resolve({
                  code: HttpCode.TimeOut,
                  data: null
                });
              };

              xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                  if (xhr.status >= 200 && xhr.status <= 299) {
                    var result = xhr.responseText;
                    var ret = null;

                    try {
                      ret = JSON.parse(result);
                    } catch (error) {}

                    resolve({
                      code: HttpCode.Success,
                      data: ret
                    });
                  } else if (xhr.status === 400) {
                    var _result2 = xhr.responseText;
                    var _ret = null;

                    try {
                      _ret = JSON.parse(_result2);
                    } catch (error) {}

                    resolve({
                      code: HttpCode.ServerErr,
                      data: _ret
                    });
                  } else {
                    resolve({
                      code: xhr.status,
                      data: null
                    });
                  }
                }
              };

              _this6._setHeaders(xhr, headers);

              if (params && _typeof(params) === "object") {
                params = JSON.stringify(params);
                xhr.send(params);
              } else {
                xhr.send();
              }
            });
          }
        }, {
          key: "_setHeaders",
          value: function _setHeaders(xhr, headers) {
            // tslint:disable-next-line: forin
            for (var _key2 in headers) {
              xhr.setRequestHeader(_key2, headers[_key2]);
            }
          }
        }, {
          key: "_getQueryString",
          value: function _getQueryString(params) {
            var _result = []; // tslint:disable-next-line: forin

            var _loop = function _loop(_key3) {
              var value = params[_key3];

              if (value == null) {
                return "continue";
              }

              if (value.constructor === Array) {
                value.forEach(function (_value) {
                  _result.push(encodeURIComponent(_key3) + "[]=" + encodeURIComponent(_value));
                });
              } else {
                _result.push(encodeURIComponent(_key3) + "=" + encodeURIComponent(value));
              }
            };

            for (var _key3 in params) {
              var _ret2 = _loop(_key3);

              if (_ret2 === "continue") continue;
            }

            return _result.length ? _result.join("&") : "";
          }
        }]);

        return Http;
      }();

      cclegacy._RF.pop();

      _export("default", Http);
    }
  };
});

System.register("chunks:///SDK.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc", "./Config.js", "./Const.js"], function (_export, _context27) {
  "use strict";

  var _createClass, _classCallCheck, _asyncToGenerator, cclegacy, log, ClientDataType, PlayerState, RoomDataType, SDK;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _asyncToGenerator = _virtual_rollupPluginBabelHelpersJs.asyncToGenerator;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }, function (_ConfigJs) {}, function (_ConstJs) {
      log = _ConstJs.log;
      ClientDataType = _ConstJs.ClientDataType;
      PlayerState = _ConstJs.PlayerState;
      RoomDataType = _ConstJs.RoomDataType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "33e872liaNCrpH3cX9cDkX4", "SDK", undefined); // const {Room, Listener, Player, Group, ErrCode} = MGOBE


      _export("SDK", SDK = /*#__PURE__*/function () {
        // 当前游戏中被激活的UI对象,随着UI切换自动更新
        // 当前游戏中被激活的弹框对象
        // 游戏的主控制对象
        function SDK() {
          _classCallCheck(this, SDK);

          this.Listener = MGOBE.Listener;
          this.Room = MGOBE.Room;
          this.curRoom = null;
          this.curGroup = null;
          this.curBoard = null;
          this.curDialog = null;
          this.gameManager = null;
          this.errorCode = MGOBE.ErrCode;
          this.indexListCache = {};
          this.curRoom = new MGOBE.Room();
          this.curGroup = new MGOBE.Group();
        }

        _createClass(SDK, [{
          key: "init",
          value: function init(openId, manager) {
            var _this = this;

            this.gameManager = manager;
            return new Promise(function (resolve) {
              {
                var url = _this.gameManager.Config.serverURL.sign + '/?game_id=' + _this.gameManager.Config.config.gameId + '&open_id=' + openId;
                var _gameInfo = {
                  gameId: _this.gameManager.Config.config.gameId,
                  openId: openId,
                  // 实现签名函数，初始化、掉线重连时会被调用
                  createSignature: function createSignature(callback) {
                    fetch(url).then(function (rsp) {
                      return rsp.json();
                    }).then(function (json) {
                      var sign = json.sign;
                      var nonce = json.nonce;
                      var timestamp = json.timestamp;
                      return callback({
                        sign: sign,
                        nonce: nonce,
                        timestamp: timestamp
                      });
                    });
                  }
                };

                _this.Listener.init(_gameInfo, _this.gameManager.Config.config.initConfig, function (event) {
                  if (event.code === MGOBE.ErrCode.EC_OK) {
                    _this.Listener.add(_this.curRoom);

                    resolve(true);
                  } else {
                    log("正式环境初始化失败", event.code);
                    resolve(false);
                  }
                });
              }
            });
          } // 匹配相关方法 匹配结果的监听在具体的界面类中实现 onMatch onCancelMatch

        }, {
          key: "matchingSingle",
          value: function () {
            var _matchingSingle = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var playerInfo, matchPlayerInfo, matchPara, promise;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.indexListCache = {};
                      _context.next = 3;
                      return this.getPlayerInfo();

                    case 3:
                      playerInfo = _context.sent;
                      matchPlayerInfo = {
                        name: playerInfo.name,
                        customPlayerStatus: playerInfo.stateRoom,
                        customProfile: playerInfo.profile,
                        matchAttributes: []
                      };
                      matchPara = {
                        playerInfo: matchPlayerInfo,
                        matchCode: this.gameManager.Config.config.matchCode
                      };
                      promise = new Promise(function (resolve) {
                        _this2.curRoom.matchPlayers(matchPara, function (event) {
                          log('进入单人匹配结果', event.code);
                          resolve(event.code);
                        });
                      });
                      return _context.abrupt("return", promise);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function matchingSingle() {
              return _matchingSingle.apply(this, arguments);
            }

            return matchingSingle;
          }()
        }, {
          key: "matchingLover",
          value: function () {
            var _matchingLover = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var groupInfo, playerSelf, playerLover, playerInfo1, playerInfo2, matchPara, promise;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.getGroupInfo();

                    case 2:
                      groupInfo = _context2.sent;

                      if (groupInfo) {
                        _context2.next = 6;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 6:
                      _context2.next = 8;
                      return this.getPlayerInfo();

                    case 8:
                      playerSelf = _context2.sent;
                      _context2.next = 11;
                      return this.getLoverInfo();

                    case 11:
                      playerLover = _context2.sent;

                      if (playerLover) {
                        _context2.next = 15;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 15:
                      playerInfo1 = {
                        id: playerSelf.id,
                        name: playerSelf.name,
                        customProfile: playerSelf.profile,
                        customPlayerStatus: playerSelf.stateGroup,
                        matchAttributes: []
                      };
                      playerInfo2 = {
                        id: playerLover.id,
                        name: playerLover.name,
                        customProfile: playerLover.profile,
                        customPlayerStatus: playerLover.stateGroup,
                        matchAttributes: []
                      };
                      matchPara = {
                        playerInfoList: [playerInfo1, playerInfo2],
                        matchCode: this.gameManager.Config.config.matchCode
                      };
                      promise = new Promise(function (resolve) {
                        _this3.curRoom.matchGroup(matchPara, function (event) {
                          resolve(event.code);
                        });
                      });
                      return _context2.abrupt("return", promise);

                    case 20:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function matchingLover() {
              return _matchingLover.apply(this, arguments);
            }

            return matchingLover;
          }()
        }, {
          key: "cancelMatchinig",
          value: function () {
            var _cancelMatchinig = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              var cancelMatchPara, promise;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      cancelMatchPara = {
                        matchType: MGOBE.ENUM.MatchType.PLAYER_COMPLEX
                      };
                      promise = new Promise(function (resolve) {
                        _this4.curRoom.cancelPlayerMatch(cancelMatchPara, function (event) {
                          resolve(event.code);
                        });
                      });
                      return _context3.abrupt("return", promise);

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));

            function cancelMatchinig() {
              return _cancelMatchinig.apply(this, arguments);
            }

            return cancelMatchinig;
          }() // Room相关方法

        }, {
          key: "getRoomInfo",
          value: function () {
            var _getRoomInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var promise;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      promise = new Promise(function (resolve) {
                        MGOBE.Room.getMyRoom(function (event) {
                          resolve(event.data.roomInfo);
                        });
                      });
                      return _context4.abrupt("return", promise);

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));

            function getRoomInfo() {
              return _getRoomInfo.apply(this, arguments);
            }

            return getRoomInfo;
          }()
        }, {
          key: "leaveRoom",
          value: function () {
            var _leaveRoom = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this5 = this;

              var promise;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      promise = new Promise(function (resolve) {
                        _this5.curRoom.leaveRoom({}, function (event) {
                          if (event.code == _this5.errorCode.EC_OK) {
                            _this5.curRoom.initRoom();
                          }

                          resolve(event.code);
                        });
                      });
                      return _context5.abrupt("return", promise);

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));

            function leaveRoom() {
              return _leaveRoom.apply(this, arguments);
            }

            return leaveRoom;
          }()
        }, {
          key: "getTeamId",
          value: function () {
            var _getTeamId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var roomInfo, playerList, playerInfo, index, element;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!this.gameManager.serverTeam) {
                        _context6.next = 4;
                        break;
                      }

                      return _context6.abrupt("return", this.gameManager.serverTeam.id);

                    case 4:
                      _context6.next = 6;
                      return this.getRoomInfo();

                    case 6:
                      roomInfo = _context6.sent;
                      playerList = roomInfo.playerList;
                      _context6.next = 10;
                      return this.getPlayerInfo();

                    case 10:
                      playerInfo = _context6.sent;
                      index = 0;

                    case 12:
                      if (!(index < playerList.length)) {
                        _context6.next = 19;
                        break;
                      }

                      element = playerList[index];

                      if (!(element.id == playerInfo.id)) {
                        _context6.next = 16;
                        break;
                      }

                      return _context6.abrupt("return", element.teamId);

                    case 16:
                      index++;
                      _context6.next = 12;
                      break;

                    case 19:
                      return _context6.abrupt("return", null);

                    case 20:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function getTeamId() {
              return _getTeamId.apply(this, arguments);
            }

            return getTeamId;
          }()
        }, {
          key: "sendToServer",
          value: function () {
            var _sendToServer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(type) {
              var _this6 = this;

              var data,
                  mesData,
                  playerInfo,
                  teamId,
                  mes,
                  promise,
                  _args7 = arguments;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      data = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : null;
                      mesData = data;

                      if (!(type == ClientDataType.ChangeControler)) {
                        _context7.next = 10;
                        break;
                      }

                      _context7.next = 5;
                      return this.getPlayerInfo();

                    case 5:
                      playerInfo = _context7.sent;
                      _context7.next = 8;
                      return this.getTeamId();

                    case 8:
                      teamId = _context7.sent;
                      mesData = {
                        teamId: teamId,
                        playerId: playerInfo.id
                      };

                    case 10:
                      mes = {
                        type: type,
                        data: mesData
                      };
                      if (type != ClientDataType.Heart) ;
                      promise = new Promise(function (resolve) {
                        var sendToGameServerPara = {
                          data: mes
                        };

                        _this6.curRoom.sendToGameSvr(sendToGameServerPara, function (event) {
                          // log('发送消息到实时服务器结果', type, event.code)
                          resolve(event.code);
                        });
                      });
                      return _context7.abrupt("return", promise);

                    case 14:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function sendToServer(_x) {
              return _sendToServer.apply(this, arguments);
            }

            return sendToServer;
          }()
        }, {
          key: "sendToRoom",
          value: function () {
            var _sendToRoom = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(type, data) {
              var _this7 = this;

              var promise;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      promise = new Promise( /*#__PURE__*/function () {
                        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(resolve) {
                          var mes, recvPlayerList, paraType, teammate, roomInfo, curPlayerInfo, playerList, curTeamId, index, element, _roomInfo, _playerList, _index, _element, sendToClientPara;

                          return regeneratorRuntime.wrap(function _callee8$(_context8) {
                            while (1) {
                              switch (_context8.prev = _context8.next) {
                                case 0:
                                  mes = {
                                    type: type,
                                    data: data
                                  };
                                  recvPlayerList = [];
                                  paraType = MGOBE.ENUM.RecvType.ROOM_SOME;

                                  if (!(type == RoomDataType.Power || type == RoomDataType.PowerEnd || type == RoomDataType.SyncComplete || type == RoomDataType.MatchedJoinGroup)) {
                                    _context8.next = 10;
                                    break;
                                  }

                                  _context8.next = 6;
                                  return _this7.getTeammate();

                                case 6:
                                  teammate = _context8.sent;

                                  if (teammate) {
                                    recvPlayerList.push(teammate.id);
                                  }

                                  _context8.next = 29;
                                  break;

                                case 10:
                                  if (!(type == RoomDataType.EnemyPowerEnd)) {
                                    _context8.next = 23;
                                    break;
                                  }

                                  _context8.next = 13;
                                  return _this7.getRoomInfo();

                                case 13:
                                  roomInfo = _context8.sent;

                                  if (!roomInfo) {
                                    _context8.next = 21;
                                    break;
                                  }

                                  _context8.next = 17;
                                  return _this7.getPlayerInfo();

                                case 17:
                                  curPlayerInfo = _context8.sent;
                                  playerList = roomInfo.playerList;
                                  curTeamId = curPlayerInfo.teamId;

                                  for (index = 0; index < playerList.length; index++) {
                                    element = playerList[index];

                                    if (element.teamId != curTeamId) {
                                      recvPlayerList.push(element.id);
                                    }
                                  }

                                case 21:
                                  _context8.next = 29;
                                  break;

                                case 23:
                                  if (!(type == RoomDataType.emoji)) {
                                    _context8.next = 29;
                                    break;
                                  }

                                  _context8.next = 26;
                                  return _this7.getRoomInfo();

                                case 26:
                                  _roomInfo = _context8.sent;
                                  _playerList = _roomInfo.playerList;

                                  for (_index = 0; _index < _playerList.length; _index++) {
                                    _element = _playerList[_index];
                                    recvPlayerList.push(_element.id);
                                  }

                                case 29:
                                  sendToClientPara = {
                                    recvType: paraType,
                                    recvPlayerList: recvPlayerList,
                                    msg: JSON.stringify(mes)
                                  };

                                  _this7.curRoom.sendToClient(sendToClientPara, function (event) {
                                    resolve(event.code);
                                  });

                                case 32:
                                case "end":
                                  return _context8.stop();
                              }
                            }
                          }, _callee8);
                        }));

                        return function (_x4) {
                          return _ref.apply(this, arguments);
                        };
                      }());
                      return _context9.abrupt("return", promise);

                    case 2:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            }));

            function sendToRoom(_x2, _x3) {
              return _sendToRoom.apply(this, arguments);
            }

            return sendToRoom;
          }()
        }, {
          key: "getTeammate",
          value: function () {
            var _getTeammate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var curPlayerInfo, roomInfo, tag, playerList, groupInfo, teammate, result, index, element;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.getPlayerInfo();

                    case 2:
                      curPlayerInfo = _context10.sent;
                      _context10.next = 5;
                      return this.getRoomInfo();

                    case 5:
                      roomInfo = _context10.sent;
                      tag = false;
                      playerList = null;

                      if (roomInfo) {
                        _context10.next = 15;
                        break;
                      }

                      _context10.next = 11;
                      return this.getGroupInfo();

                    case 11:
                      groupInfo = _context10.sent;

                      if (groupInfo) {
                        tag = true;
                        playerList = groupInfo.groupPlayerList;
                      } else {
                        playerList = null;
                      }

                      _context10.next = 16;
                      break;

                    case 15:
                      playerList = roomInfo.playerList;

                    case 16:
                      if (playerList) {
                        _context10.next = 18;
                        break;
                      }

                      return _context10.abrupt("return", null);

                    case 18:
                      // let teammate:MGOBE.types.PlayerInfo = null;
                      teammate = {
                        id: '',
                        name: '',
                        teamId: '',
                        customPlayerStatus: 0,
                        customProfile: '',
                        commonNetworkState: 0,
                        relayNetworkState: 0,
                        isRobot: false,
                        matchAttributes: []
                      };
                      result = null;
                      index = 0;

                    case 21:
                      if (!(index < playerList.length)) {
                        _context10.next = 41;
                        break;
                      }

                      element = playerList[index];

                      if (!tag) {
                        _context10.next = 34;
                        break;
                      }

                      if (!(element.id != curPlayerInfo.id)) {
                        _context10.next = 32;
                        break;
                      }

                      teammate = element;
                      teammate.id = element.id;
                      teammate.customPlayerStatus = element.customGroupPlayerStatus;
                      teammate.commonNetworkState = element.commonGroupNetworkState;
                      teammate.customProfile = element.customGroupPlayerProfile;
                      result = teammate;
                      return _context10.abrupt("break", 41);

                    case 32:
                      _context10.next = 38;
                      break;

                    case 34:
                      if (!(element.teamId == curPlayerInfo.teamId && element.id != curPlayerInfo.id)) {
                        _context10.next = 38;
                        break;
                      }

                      teammate = element;
                      result = teammate;
                      return _context10.abrupt("break", 41);

                    case 38:
                      index++;
                      _context10.next = 21;
                      break;

                    case 41:
                      return _context10.abrupt("return", result);

                    case 42:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function getTeammate() {
              return _getTeammate.apply(this, arguments);
            }

            return getTeammate;
          }()
        }, {
          key: "inRunningRoom",
          value: function () {
            var _inRunningRoom = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var roomInfo, groupInfo;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.getRoomInfo();

                    case 2:
                      roomInfo = _context11.sent;
                      _context11.next = 5;
                      return this.getGroupInfo();

                    case 5:
                      groupInfo = _context11.sent;

                      if (!(roomInfo && groupInfo)) {
                        _context11.next = 10;
                        break;
                      }

                      if (!(roomInfo.customProperties == 'ing')) {
                        _context11.next = 10;
                        break;
                      }

                      return _context11.abrupt("return", true);

                    case 10:
                      return _context11.abrupt("return", false);

                    case 11:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function inRunningRoom() {
              return _inRunningRoom.apply(this, arguments);
            }

            return inRunningRoom;
          }()
        }, {
          key: "reconnect",
          value: function () {
            var _reconnect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var roomInfo;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.getRoomInfo();

                    case 2:
                      roomInfo = _context12.sent;
                      this.curRoom.initRoom(roomInfo);
                      this.Listener.add(this.curRoom);

                    case 5:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));

            function reconnect() {
              return _reconnect.apply(this, arguments);
            }

            return reconnect;
          }()
        }, {
          key: "getPlayerIndex",
          value: function () {
            var _getPlayerIndex = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(id) {
              var playerInfo, roomInfo, playerList, playerIndex, teamList;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (id) {
                        _context13.next = 5;
                        break;
                      }

                      _context13.next = 3;
                      return this.getPlayerInfo();

                    case 3:
                      playerInfo = _context13.sent;
                      id = playerInfo.id;

                    case 5:
                      if (!this.indexListCache[id]) {
                        _context13.next = 7;
                        break;
                      }

                      return _context13.abrupt("return", this.indexListCache[id]);

                    case 7:
                      _context13.next = 9;
                      return this.getRoomInfo();

                    case 9:
                      roomInfo = _context13.sent;

                      if (roomInfo) {
                        _context13.next = 12;
                        break;
                      }

                      return _context13.abrupt("return", null);

                    case 12:
                      playerList = roomInfo.playerList;

                      if (!playerInfo) {
                        playerList.map(function (v) {
                          if (v.id === id) playerInfo = v;
                        });
                      }

                      playerIndex = 1;
                      teamList = playerList.filter(function (p, i) {
                        return p.teamId === playerInfo.teamId;
                      });
                      teamList.map(function (v, i) {
                        if (v.id === playerInfo.id) playerIndex = i + 1;
                      });
                      this.indexListCache[playerInfo.id] = playerIndex;
                      return _context13.abrupt("return", playerIndex);

                    case 19:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));

            function getPlayerIndex(_x5) {
              return _getPlayerIndex.apply(this, arguments);
            }

            return getPlayerIndex;
          }() // Group类方法

        }, {
          key: "createGroup",
          value: function () {
            var _createGroup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this8 = this;

              var player, playerInfo, createGroupPara, promise;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.getPlayerInfo();

                    case 2:
                      player = _context14.sent;
                      playerInfo = {
                        name: player.name,
                        customGroupPlayerStatus: player.stateGroup,
                        customGroupPlayerProfile: player.profile
                      };
                      createGroupPara = {
                        groupName: '',
                        groupType: MGOBE.ENUM.GroupType.GROUP_LIMITED,
                        maxPlayers: 2,
                        isForbidJoin: false,
                        isPersistent: false,
                        customProperties: '',
                        playerInfo: playerInfo
                      };
                      promise = new Promise(function (resolve) {
                        _this8.curGroup.createGroup(createGroupPara, function (event) {
                          if (event.code === 0) {
                            _this8.Listener.add(_this8.curGroup);

                            _this8.curGroup.initGroup(event.data.groupInfo);

                            log('队组创建成功', event.data.groupInfo);
                          }

                          resolve(event.code);
                        });
                      });
                      return _context14.abrupt("return", promise);

                    case 7:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function createGroup() {
              return _createGroup.apply(this, arguments);
            }

            return createGroup;
          }()
        }, {
          key: "joinGroup",
          value: function () {
            var _joinGroup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(groupId) {
              var _this9 = this;

              var playerInfo, playerPara, joinPara, promise;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.getPlayerInfo();

                    case 2:
                      playerInfo = _context15.sent;
                      playerPara = {
                        name: playerInfo.name,
                        customGroupPlayerStatus: PlayerState.NotReady,
                        customGroupPlayerProfile: playerInfo.profile
                      };
                      joinPara = {
                        playerInfo: playerPara
                      };
                      this.curGroup.initGroup({
                        id: groupId
                      });
                      promise = new Promise(function (resolve) {
                        _this9.curGroup.joinGroup(joinPara, function (event) {
                          if (event.code === 0) {
                            _this9.Listener.add(_this9.curGroup);

                            _this9.curGroup.initGroup(event.data.groupInfo);
                          }

                          resolve(event.code);
                        });
                      });
                      return _context15.abrupt("return", promise);

                    case 8:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));

            function joinGroup(_x6) {
              return _joinGroup.apply(this, arguments);
            }

            return joinGroup;
          }()
        }, {
          key: "leaveGroup",
          value: function () {
            var _leaveGroup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var _this10 = this;

              var group, promise;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.getGroupInfo();

                    case 2:
                      group = _context16.sent;

                      if (!group) {
                        _context16.next = 7;
                        break;
                      }

                      this.curGroup.initGroup(group);
                      _context16.next = 8;
                      break;

                    case 7:
                      return _context16.abrupt("return", this.errorCode.EC_OK);

                    case 8:
                      promise = new Promise(function (resolve) {
                        _this10.curGroup.leaveGroup({}, function (event) {
                          if (event.code === 0) {
                            _this10.curGroup.initGroup();
                          }

                          resolve(event.code);
                        });
                      });
                      return _context16.abrupt("return", promise);

                    case 10:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));

            function leaveGroup() {
              return _leaveGroup.apply(this, arguments);
            }

            return leaveGroup;
          }()
        }, {
          key: "getGroupInfo",
          value: function () {
            var _getGroupInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var promise;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      promise = new Promise(function (resolve) {
                        MGOBE.Group.getMyGroups(function (event) {
                          if (event.code === MGOBE.ErrCode.EC_OK && event.data.groupInfoList.length > 0) {
                            for (var index = 0; index < event.data.groupInfoList.length; index++) {
                              var element = event.data.groupInfoList[index];

                              if (element.type === MGOBE.ENUM.GroupType.GROUP_LIMITED) {
                                resolve(element);
                                break;
                              }
                            }
                          } else {
                            resolve(null);
                          }
                        });
                      });
                      return _context17.abrupt("return", promise);

                    case 2:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17);
            }));

            function getGroupInfo() {
              return _getGroupInfo.apply(this, arguments);
            }

            return getGroupInfo;
          }()
        }, {
          key: "setGroupPlayerStatus",
          value: function () {
            var _setGroupPlayerStatus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(stat) {
              var _this11 = this;

              var change, promise;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      change = {
                        customGroupPlayerStatus: stat
                      };
                      promise = new Promise(function (resolve) {
                        _this11.curGroup.changeCustomGroupPlayerStatus(change, function (event) {
                          resolve(event);
                        });
                      });
                      return _context18.abrupt("return", promise);

                    case 3:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18);
            }));

            function setGroupPlayerStatus(_x7) {
              return _setGroupPlayerStatus.apply(this, arguments);
            }

            return setGroupPlayerStatus;
          }()
        }, {
          key: "removePlayerInGroup",
          value: function () {
            var _removePlayerInGroup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(playerId) {
              var _this12 = this;

              var para, promise;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      para = {
                        removePlayerId: playerId
                      };
                      promise = new Promise(function (resolve) {
                        _this12.curGroup.removeGroupPlayer(para, function (event) {
                          resolve(event.code);
                        });
                      });
                      return _context19.abrupt("return", promise);

                    case 3:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19);
            }));

            function removePlayerInGroup(_x8) {
              return _removePlayerInGroup.apply(this, arguments);
            }

            return removePlayerInGroup;
          }()
        }, {
          key: "dismissGroup",
          value: function () {
            var _dismissGroup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var _this13 = this;

              var promise;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      promise = new Promise(function (resolve) {
                        _this13.curGroup.dismissGroup({}, function (event) {
                          resolve(event.code);
                        });
                      });
                      return _context20.abrupt("return", promise);

                    case 2:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20);
            }));

            function dismissGroup() {
              return _dismissGroup.apply(this, arguments);
            }

            return dismissGroup;
          }()
        }, {
          key: "sendToGroup",
          value: function () {
            var _sendToGroup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(type, content) {
              var _this14 = this;

              var mes, promise;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      mes = {
                        'type': type,
                        'content': content
                      };
                      promise = new Promise( /*#__PURE__*/function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(resolve) {
                          var loverInfo, sendToGroupClientPara;
                          return regeneratorRuntime.wrap(function _callee21$(_context21) {
                            while (1) {
                              switch (_context21.prev = _context21.next) {
                                case 0:
                                  _context21.next = 2;
                                  return _this14.getLoverInfo();

                                case 2:
                                  loverInfo = _context21.sent;

                                  if (loverInfo) {
                                    sendToGroupClientPara = {
                                      recvType: MGOBE.ENUM.GroupRecvType.GROUP_SOME,
                                      recvPlayerList: [loverInfo.id],
                                      msg: JSON.stringify(mes)
                                    };

                                    _this14.curGroup.sendToGroupClient(sendToGroupClientPara, function (event) {
                                      resolve(true);
                                    });
                                  } else {
                                    resolve(false);
                                  }

                                case 4:
                                case "end":
                                  return _context21.stop();
                              }
                            }
                          }, _callee21);
                        }));

                        return function (_x11) {
                          return _ref2.apply(this, arguments);
                        };
                      }());

                    case 2:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22);
            }));

            function sendToGroup(_x9, _x10) {
              return _sendToGroup.apply(this, arguments);
            }

            return sendToGroup;
          }()
        }, {
          key: "isCaptain",
          value: function () {
            var _isCaptain = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var groupInfo, curPlayerInfo;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.next = 2;
                      return this.getGroupInfo();

                    case 2:
                      groupInfo = _context23.sent;
                      _context23.next = 5;
                      return this.getPlayerInfo();

                    case 5:
                      curPlayerInfo = _context23.sent;
                      return _context23.abrupt("return", groupInfo.owner == curPlayerInfo.id);

                    case 7:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));

            function isCaptain() {
              return _isCaptain.apply(this, arguments);
            }

            return isCaptain;
          }() // Player相关方法

        }, {
          key: "setPlayerStatus",
          value: function () {
            var _setPlayerStatus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(stat) {
              var _this15 = this;

              var change, promise;
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      change = {
                        customPlayerStatus: stat
                      };
                      promise = new Promise(function (resolve) {
                        _this15.curRoom.changeCustomPlayerStatus(change, function (event) {
                          resolve(event);
                        });
                      });
                      return _context24.abrupt("return", promise);

                    case 3:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24);
            }));

            function setPlayerStatus(_x12) {
              return _setPlayerStatus.apply(this, arguments);
            }

            return setPlayerStatus;
          }()
        }, {
          key: "getPlayerInfo",
          value: function () {
            var _getPlayerInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              var groupInfo, playerList, groupPlayerState, index, element, info;
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      _context25.next = 2;
                      return this.getGroupInfo();

                    case 2:
                      groupInfo = _context25.sent;
                      playerList = [];

                      if (groupInfo) {
                        playerList = groupInfo.groupPlayerList;
                      }

                      groupPlayerState = PlayerState.NotReady;
                      index = 0;

                    case 7:
                      if (!(index < playerList.length)) {
                        _context25.next = 15;
                        break;
                      }

                      element = playerList[index];

                      if (!(element.id === MGOBE.Player.id)) {
                        _context25.next = 12;
                        break;
                      }

                      groupPlayerState = element.customGroupPlayerStatus;
                      return _context25.abrupt("break", 15);

                    case 12:
                      index++;
                      _context25.next = 7;
                      break;

                    case 15:
                      // log('PPPPP', MGOBE.Player, this.gameManager.PlayerData);
                      info = {
                        'id': MGOBE.Player.id,
                        'name': this.gameManager.PlayerData.nickname,
                        'openId': MGOBE.Player.openId,
                        'netState': MGOBE.Player.commonNetworkState,
                        'stateRoom': MGOBE.Player.customPlayerStatus,
                        'stateGroup': groupPlayerState,
                        'teamId': MGOBE.Player.teamId,
                        'profile': MGOBE.Player.customProfile != undefined ? MGOBE.Player.customProfile : JSON.stringify(this.gameManager.PlayerData)
                      };
                      return _context25.abrupt("return", info);

                    case 17:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));

            function getPlayerInfo() {
              return _getPlayerInfo.apply(this, arguments);
            }

            return getPlayerInfo;
          }()
        }, {
          key: "getLoverInfo",
          value: function () {
            var _getLoverInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var groupInfo, loverInfo, playerList, index, element, info;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      _context26.next = 2;
                      return this.getGroupInfo();

                    case 2:
                      groupInfo = _context26.sent;
                      loverInfo = null;

                      if (groupInfo) {
                        _context26.next = 7;
                        break;
                      }

                      return _context26.abrupt("return");

                    case 7:
                      playerList = groupInfo.groupPlayerList;
                      index = 0;

                    case 9:
                      if (!(index < playerList.length)) {
                        _context26.next = 17;
                        break;
                      }

                      element = playerList[index];

                      if (!(element.id != MGOBE.Player.id)) {
                        _context26.next = 14;
                        break;
                      }

                      loverInfo = element;
                      return _context26.abrupt("break", 17);

                    case 14:
                      index++;
                      _context26.next = 9;
                      break;

                    case 17:
                      if (loverInfo) {
                        _context26.next = 20;
                        break;
                      }

                      return _context26.abrupt("return");

                    case 20:
                      info = {
                        'id': loverInfo.id,
                        'name': loverInfo.name != null ? loverInfo.name : loverInfo.id,
                        'netState': loverInfo.commonGroupNetworkState,
                        'stateGroup': loverInfo.customGroupPlayerStatus,
                        'profile': loverInfo.customGroupPlayerProfile
                      };
                      return _context26.abrupt("return", info);

                    case 22:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));

            function getLoverInfo() {
              return _getLoverInfo.apply(this, arguments);
            }

            return getLoverInfo;
          }()
        }]);

        return SDK;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/Dialog/Dialog.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Const.js"], function (_export, _context3) {
  "use strict";

  var _createClass, _classCallCheck, _asyncToGenerator, cclegacy, HorizontalTextAlignment, tween, Vec3, loader, Prefab, instantiate, Label, SystemEventType, DialogButtonType, Dialog;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _asyncToGenerator = _virtual_rollupPluginBabelHelpersJs.asyncToGenerator;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      HorizontalTextAlignment = _cc.HorizontalTextAlignment;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      loader = _cc.loader;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      SystemEventType = _cc.SystemEventType;
    }, function (_ConstJs) {
      DialogButtonType = _ConstJs.DialogButtonType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "15867PII/lA6aXbZL4Ddkcx", "Dialog", undefined);

      _export("Dialog", Dialog = /*#__PURE__*/function () {
        function Dialog(scene, sdk, text) {
          var buttonType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
          var yesTip = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '确认';
          var noTip = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '取消';
          var title = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "提示";
          var align = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : HorizontalTextAlignment.CENTER;

          _classCallCheck(this, Dialog);

          this.scene = null;
          this.node = null;
          this.result = null;
          this.SDK = null;
          this.title = '提示';
          this.align = HorizontalTextAlignment.CENTER;
          this.text = null;
          this.buttonType = null;
          this.yesTip = null;
          this.noTip = null;
          this.dead = false;
          this.scene = scene;
          this.SDK = sdk;
          this.text = text;
          this.buttonType = buttonType;
          this.yesTip = yesTip;
          this.noTip = noTip;
          this.title = title;
          this.align = align;
        }

        _createClass(Dialog, [{
          key: "InitBoard",
          value: function () {
            var _InitBoard = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var promise;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      promise = new Promise(function (resolve) {
                        loader.loadRes('Prefab/Dialog/Dialog', Prefab, function (err, prefab) {
                          if (err) {
                            resolve(false);
                          } else {
                            _this2.node = instantiate(prefab);

                            _this2.scene.getChildByName('UI').addChild(_this2.node);

                            _this2.node.setSiblingIndex(100);

                            resolve(true);
                          }
                        });
                      });
                      return _context.abrupt("return", promise);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            function InitBoard() {
              return _InitBoard.apply(this, arguments);
            }

            return InitBoard;
          }()
        }, {
          key: "destroy",
          value: function destroy() {
            if (!this.dead) {
              if (!this.node) {
                this.SDK = null;
                return;
              }

              this.dead = true;
              this.scene = null;
              tween(this.node.getChildByName('background')).to(.3, {
                scale: new Vec3(0, 0, 0)
              }, {
                onComplete: function () {
                  this.SDK.curDialog = null;
                  this.SDK = null;
                  this.node.destroy();
                  this.node = null;
                }.bind(this)
              }).start();
            }
          }
        }, {
          key: "show",
          value: function () {
            var _show = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_this, yesCallBack) {
              var noCallBack,
                  b,
                  yes_button,
                  no_button,
                  title,
                  v3,
                  _args2 = arguments;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      noCallBack = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : null;

                      if (!(this.SDK.curDialog == null)) {
                        _context2.next = 23;
                        break;
                      }

                      _context2.next = 4;
                      return this.InitBoard();

                    case 4:
                      b = _context2.sent;

                      if (b) {
                        _context2.next = 8;
                        break;
                      }

                      this.destroy();
                      return _context2.abrupt("return");

                    case 8:
                      this.SDK.curDialog = this; // UI的修改与展示

                      yes_button = this.node.getChildByName('background').getChildByName('yes');
                      no_button = this.node.getChildByName('background').getChildByName('no');
                      title = this.node.getChildByName('background').getChildByName('tip');
                      this.node.getChildByName('background').getChildByName('content').getComponent(Label).horizontalAlign = this.align;
                      this.node.getChildByName('background').getChildByName('content').getComponent(Label).string = this.text;
                      yes_button.getChildByName('Label').getComponent(Label).string = this.yesTip;
                      no_button.getChildByName('Label').getComponent(Label).string = this.noTip;
                      title.getComponent(Label).string = this.title;

                      if (this.buttonType == DialogButtonType.single) {
                        no_button.active = false;
                        v3 = new Vec3();
                        yes_button.getPosition(v3);
                        v3.x = 0;
                        yes_button.setPosition(v3);
                      }

                      this.node.getChildByName('background').setScale(new Vec3(0, 0, 0));
                      this.node.active = true;
                      tween(this.node.getChildByName('background')).to(.3, {
                        scale: new Vec3(.5, .5, .5),
                        easing: 'easeOutExpo'
                      }).start(); // 事件回调绑定

                      yes_button.on(SystemEventType.TOUCH_END, yesCallBack, _this);

                      if (noCallBack) {
                        no_button.on(SystemEventType.TOUCH_END, noCallBack, _this);
                      }

                    case 23:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function show(_x, _x2) {
              return _show.apply(this, arguments);
            }

            return show;
          }()
        }]);

        return Dialog;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/Board/BaseBoard.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Const.js", "../Dialog/Dialog.js"], function (_export, _context3) {
  "use strict";

  var _createClass, _classCallCheck, _asyncToGenerator, cclegacy, _decorator, log, DialogButtonType, Dialog, ccclass, property, BaseBoard;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _asyncToGenerator = _virtual_rollupPluginBabelHelpersJs.asyncToGenerator;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_ConstJs) {
      log = _ConstJs.log;
      DialogButtonType = _ConstJs.DialogButtonType;
    }, function (_DialogDialogJs) {
      Dialog = _DialogDialogJs.Dialog;
    }],
    execute: function () {
      cclegacy._RF.push({}, "72680Q0ztVKyaWXTajENF2V", "BaseBoard", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BaseBoard", BaseBoard = /*#__PURE__*/function () {
        function BaseBoard(scene, sdk) {
          _classCallCheck(this, BaseBoard);

          this.board = null;
          this.SDK = null;
          this.scene = null;
          this.name = null;
          this.uiControl = null;
          this.dead = false;

          this.sleep = function (ms) {
            return new Promise(function (resolve) {
              return setTimeout(resolve, ms);
            });
          };

          this.SDK = sdk;
          this.scene = scene;
        }

        _createClass(BaseBoard, [{
          key: "Init",
          value: function () {
            var _Init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      log('初始化界面:', this.name);

                      if (!this.board) {
                        _context.next = 4;
                        break;
                      }

                      this.InitEvent();
                      return _context.abrupt("return", true);

                    case 4:
                      return _context.abrupt("return", false);

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function Init() {
              return _Init.apply(this, arguments);
            }

            return Init;
          }() // 销毁界面对象

        }, {
          key: "destroy",
          value: function destroy() {
            log('销毁界面:', this.name);
            this.board.active = false;
            this.dead = true;
          } // 绑定SDK监听,需要再具体界面类中重写此方法

        }, {
          key: "setListener",
          value: function setListener() {
            log('绑定监听:', this.name);
          } // 初始化界面类,根据name对预制件进行实例化
          // async InitBoard() {
          //     log('界面预制件实例化:', this.name)
          //     macro.ENABLE_WEBGL_ANTIALIAS = true
          //     let promise = new Promise(resolve => {
          //         loader.loadRes('Prefab/Board/'+this.name, Prefab, (err: any, prefab: Prefab) => {
          //             if(err) { 
          //                 log('界面预制件实例化失败', err);
          //                 this.board = null;
          //                 resolve(false);
          //             } else {
          //                 this.board = instantiate(prefab);
          //                 this.board.active = false;
          //                 this.scene.getChildByName('UI').addChild(this.board);
          //                 this.board.setSiblingIndex(1);
          //                 resolve(true);
          //             }
          //         });
          //     })
          //     return promise;
          // }

        }, {
          key: "InitEvent",
          value: function InitEvent() {
            log('初始化UI事件', this.name);
          }
        }, {
          key: "initData",
          value: function initData() {
            this.dead = false;

            if (this.uiControl) {
              this.uiControl.initData();
            }
          } // 测试用等待

        }, {
          key: "ChangeBoard",

          /* 
          界面切换方法
          使用GameManager中缓存的界面对象,通过旧界面的ChangeBoard方法进行界面切换,会自动对新界面进行重置以及数据同步
          */
          value: function () {
            var _ChangeBoard = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(newBoard) {
              var curBoard, b, dia;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      curBoard = this.SDK.curBoard;

                      if (!newBoard) {
                        _context2.next = 14;
                        break;
                      }

                      _context2.t0 = newBoard.name;
                      _context2.next = _context2.t0 === 'MainBoard' ? 5 : _context2.t0 === 'GamingBoard' ? 12 : 14;
                      break;

                    case 5:
                      _context2.next = 7;
                      return this.SDK.leaveGroup();

                    case 7:
                      _context2.next = 9;
                      return this.SDK.leaveRoom();

                    case 9:
                      this.SDK.gameManager.teammaterIsLover = undefined;
                      this.SDK.gameManager.enemyIsLover = undefined;
                      return _context2.abrupt("break", 14);

                    case 12:
                      this.SDK.gameManager.isRunning = true;
                      return _context2.abrupt("break", 14);

                    case 14:
                      if (!curBoard) {
                        _context2.next = 24;
                        break;
                      }

                      _context2.t1 = curBoard.name;
                      _context2.next = _context2.t1 === 'GamingBoard' ? 18 : _context2.t1 === 'ResultBoard' ? 21 : 24;
                      break;

                    case 18:
                      this.SDK.gameManager.isRunning = false;
                      this.SDK.gameManager.isControler = false;
                      return _context2.abrupt("break", 24);

                    case 21:
                      this.SDK.gameManager.teammaterIsLover = undefined;
                      this.SDK.gameManager.enemyIsLover = undefined;
                      return _context2.abrupt("break", 24);

                    case 24:
                      if (!curBoard) curBoard = newBoard;
                      log('界面切换', curBoard.name, '-->', newBoard.name);
                      this.SDK.curBoard = newBoard; // newBoard.dead = false;

                      _context2.next = 29;
                      return newBoard.Init();

                    case 29:
                      b = _context2.sent;

                      if (!b) {
                        _context2.next = 60;
                        break;
                      } // 每次切换UI时自动清空上一次所绑定消息监听方法,在此处设置所有曾经使用过的监听为空


                      this.SDK.Room.onCancelMatch = null;
                      this.SDK.Room.onMatch = null;
                      this.SDK.curRoom.onChangePlayerNetworkState = null;
                      this.SDK.curRoom.onLeaveRoom = null;
                      this.SDK.curRoom.onRecvFromGameSvr = null;
                      this.SDK.curRoom.onRecvFromClient = null;
                      this.SDK.curGroup.onChangeCustomGroupPlayerStatus = null;
                      this.SDK.curGroup.onChangeGroupPlayerNetworkState = null;
                      this.SDK.curGroup.onRecvFromGroupClient = null;
                      this.SDK.curGroup.onJoinGroup = null;
                      this.SDK.curGroup.onLeaveGroup = null;
                      this.SDK.curGroup.onDismissGroup = null;

                      if (!newBoard.uiControl) {
                        _context2.next = 47;
                        break;
                      }

                      newBoard.uiControl.board = newBoard.board;
                      _context2.next = 47;
                      return newBoard.uiControl.initUI(newBoard.board);

                    case 47:
                      newBoard.initData();
                      newBoard.setListener();
                      newBoard.scene.getChildByName('UI').getChildByName('loading').active = false;
                      this.SDK.gameManager.MainBoard.board.active = false;
                      this.SDK.gameManager.GamingBoard.board.active = false;
                      this.SDK.gameManager.WaitLoverBoard.board.active = false;
                      this.SDK.gameManager.TeachingBoard.board.active = false;
                      this.SDK.gameManager.MatchingBoard.board.active = false;
                      this.SDK.gameManager.ResultBoard.board.active = false;
                      newBoard.board.active = true;

                      if (curBoard != newBoard) {
                        curBoard.destroy();
                      }

                      _context2.next = 66;
                      break;

                    case 60:
                      _context2.next = 63;
                      return newBoard.destroy();

                    case 63:
                      dia = new Dialog(curBoard.scene, this.SDK, '网络出现问题,无法正常游戏', DialogButtonType.single, '确定');
                      _context2.next = 66;
                      return dia.show(this, function () {
                        this.SDK.curDialog.destroy();
                      });

                    case 66:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function ChangeBoard(_x) {
              return _ChangeBoard.apply(this, arguments);
            }

            return ChangeBoard;
          }()
        }]);

        return BaseBoard;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/Board/WaitLoverBoard.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Const.js", "../../Util.js", "../Dialog/Dialog.js", "./BaseBoard.js"], function (_export, _context12) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, _get, _asyncToGenerator, cclegacy, SystemEventType, Label, HorizontalTextAlignment, tween, Vec3, log, StatisticsKey, NetState, GroupMessageType, GroupSysMessageType, PlayerState, DialogButtonType, LabelColor, throttle, Dialog, BaseBoard, _dec, _dec2, _dec3, _dec4, _class, _temp, UIControl, WaitLoverBoard;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
      _asyncToGenerator = _virtual_rollupPluginBabelHelpersJs.asyncToGenerator;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      SystemEventType = _cc.SystemEventType;
      Label = _cc.Label;
      HorizontalTextAlignment = _cc.HorizontalTextAlignment;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_ConstJs) {
      log = _ConstJs.log;
      StatisticsKey = _ConstJs.StatisticsKey;
      NetState = _ConstJs.NetState;
      GroupMessageType = _ConstJs.GroupMessageType;
      GroupSysMessageType = _ConstJs.GroupSysMessageType;
      PlayerState = _ConstJs.PlayerState;
      DialogButtonType = _ConstJs.DialogButtonType;
      LabelColor = _ConstJs.LabelColor;
    }, function (_UtilJs) {
      throttle = _UtilJs.throttle;
    }, function (_DialogDialogJs) {
      Dialog = _DialogDialogJs.Dialog;
    }, function (_BaseBoardJs) {
      BaseBoard = _BaseBoardJs.BaseBoard;
    }],
    execute: function () {
      cclegacy._RF.push({}, "638a0cfbatPTK9EkM3XiINe", "WaitLoverBoard", undefined);

      UIControl = /*#__PURE__*/function () {
        function UIControl(board, sdk) {
          _classCallCheck(this, UIControl);

          this.board = null;
          this.SDK = null;
          this.team1 = null;
          this.team2 = null;
          this.board = board;
          this.SDK = sdk;
        }

        _createClass(UIControl, [{
          key: "initUI",
          value: function () {
            var _initUI = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(board) {
              var curPlayer, groupInfo, otherPlayer, capId, team1, user1, user2, playerList, index, element;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.board = board;
                      _context.next = 3;
                      return this.SDK.getPlayerInfo();

                    case 3:
                      curPlayer = _context.sent;
                      _context.next = 6;
                      return this.SDK.getGroupInfo();

                    case 6:
                      groupInfo = _context.sent;
                      otherPlayer = null;
                      capId = null;
                      team1 = this.board.getChildByName('team1');
                      user1 = team1.getChildByName('user1');
                      user2 = team1.getChildByName('user2');
                      user1.getChildByName('nickName').getComponent(Label).string = curPlayer.name;
                      this.SDK.gameManager.Util.loadRemoteImg(JSON.parse(curPlayer.profile).avatar_url, user1.getChildByName('avatarBg').getChildByName('avatar')); // log('初始化UI的时候得到的group:', groupInfo)

                      user1.getChildByName('state').getComponent(Label).string = curPlayer.stateGroup == PlayerState.NotReady ? '未准备' : '已准备';
                      user1.getChildByName('state').getComponent(Label).color = curPlayer.stateGroup == PlayerState.NotReady ? LabelColor.NotReady : LabelColor.Ready;
                      this.board.getChildByName('ready').getChildByName('Button-ready').getChildByName('Label').getComponent(Label).string = curPlayer.stateGroup == PlayerState.NotReady ? '准备' : '取消准备';

                      if (!groupInfo) {
                        _context.next = 33;
                        break;
                      }

                      capId = groupInfo.owner;
                      playerList = groupInfo.groupPlayerList;
                      index = 0;

                    case 21:
                      if (!(index < playerList.length)) {
                        _context.next = 29;
                        break;
                      }

                      element = playerList[index];

                      if (!(element.id != curPlayer.id)) {
                        _context.next = 26;
                        break;
                      }

                      otherPlayer = element;
                      return _context.abrupt("break", 29);

                    case 26:
                      index++;
                      _context.next = 21;
                      break;

                    case 29:
                      log('capId: ', capId, curPlayer.id);

                      if (capId == curPlayer.id) {
                        if (otherPlayer != null) {
                          this.board.getChildByName('ready').getChildByName('Button-invite').active = false;
                          this.board.getChildByName('ready').getChildByName('Button-match').active = true;
                        } else {
                          this.board.getChildByName('ready').getChildByName('Button-invite').active = true;
                          this.board.getChildByName('ready').getChildByName('Button-match').active = false;
                        }

                        this.board.getChildByName('Cancel').active = true;
                        this.board.getChildByName('ready').getChildByName('Button-ready').active = false;
                        user1.getChildByName('state').getComponent(Label).string = '已准备';
                        user2.getChildByName('state').getComponent(Label).string = '未准备';
                        user2.getChildByName('state').getComponent(Label).color = LabelColor.NotReady;
                        user1.getChildByName('state').getComponent(Label).color = LabelColor.Captain;
                      } else {
                        this.board.getChildByName('Cancel').active = false;
                        this.board.getChildByName('ready').getChildByName('Button-match').active = false;
                        this.board.getChildByName('ready').getChildByName('Button-invite').active = false;
                        this.board.getChildByName('ready').getChildByName('Button-ready').active = true;
                        user2.getChildByName('state').getComponent(Label).string = '已准备';
                        user1.getChildByName('state').getComponent(Label).string = curPlayer.stateGroup === PlayerState.Ready ? '已准备' : '未准备';
                        user1.getChildByName('state').getComponent(Label).color = curPlayer.stateGroup === PlayerState.Ready ? LabelColor.Ready : LabelColor.NotReady;
                        user2.getChildByName('state').getComponent(Label).color = LabelColor.Captain;
                      }

                      if (otherPlayer != null) {
                        team1.getChildByName('wait').active = false;
                        user2.getChildByName('nickName').getComponent(Label).string = otherPlayer.name;
                        user2.getChildByName('state').getComponent(Label).string = otherPlayer.customGroupPlayerStatus == PlayerState.NotReady ? otherPlayer.id == capId ? '已准备' : '未准备' : '已准备';
                        user2.getChildByName('state').getComponent(Label).color = otherPlayer.customGroupPlayerStatus == PlayerState.NotReady ? otherPlayer.id == capId ? LabelColor.Ready : LabelColor.NotReady : LabelColor.Ready;
                        this.SDK.gameManager.Util.loadRemoteImg(JSON.parse(otherPlayer.customGroupPlayerProfile).avatar_url, user2.getChildByName('avatarBg').getChildByName('avatar'));
                        user2.active = true;
                      } else {
                        team1.getChildByName('wait').active = true;
                        user2.active = false;
                      }

                    case 33:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function initUI(_x) {
              return _initUI.apply(this, arguments);
            }

            return initUI;
          }()
        }, {
          key: "initData",
          value: function initData() {}
        }, {
          key: "playerReady",
          value: function () {
            var _playerReady = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(playerId, stat) {
              var curPlayerInfo, groupInfo, userBoard, newInfo, matchBtn;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.SDK.getPlayerInfo();

                    case 2:
                      curPlayerInfo = _context2.sent;
                      _context2.next = 5;
                      return this.SDK.getGroupInfo();

                    case 5:
                      groupInfo = _context2.sent;
                      userBoard = null;

                      if (playerId == curPlayerInfo.id) {
                        userBoard = this.board.getChildByName('team1').getChildByName('user1');
                      } else {
                        userBoard = this.board.getChildByName('team1').getChildByName('user2');
                      }

                      if (playerId != groupInfo.owner) {
                        newInfo = stat === PlayerState.NotReady ? {
                          tip: '未准备',
                          color: LabelColor.NotReady
                        } : {
                          tip: '已准备',
                          color: LabelColor.Ready
                        };
                        userBoard.getChildByName('state').getComponent(Label).string = newInfo.tip;
                        userBoard.getChildByName('state').getComponent(Label).color = newInfo.color;
                      } else {
                        matchBtn = this.board.getChildByName('ready').getChildByName('Button-match');
                        stat === PlayerState.NotReady ? matchBtn.active = false : matchBtn.active = true;
                      }

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function playerReady(_x2, _x3) {
              return _playerReady.apply(this, arguments);
            }

            return playerReady;
          }()
        }, {
          key: "playerJoin",
          value: function playerJoin(joinPlayerId, playerList) {
            var joinPlayerInfo = null;

            for (var index = 0; index < playerList.length; index++) {
              var element = playerList[index];

              if (element.id == joinPlayerId) {
                joinPlayerInfo = element;
                break;
              }
            }

            var profile = joinPlayerInfo.customGroupPlayerProfile ? JSON.parse(joinPlayerInfo.customGroupPlayerProfile) : JSON.parse(joinPlayerInfo.profile);
            this.SDK.gameManager.Util.loadRemoteImg(profile.avatar_url, this.board.getChildByName('team1').getChildByName('user2').getChildByName('avatarBg').getChildByName('avatar'));
            this.board.getChildByName('ready').getChildByName('Button-invite').active = false;
            this.board.getChildByName('ready').getChildByName('Button-match').active = true;
            this.board.getChildByName('team1').getChildByName('wait').active = false;
            this.board.getChildByName('team1').getChildByName('user2').active = true;
            this.board.getChildByName('team1').getChildByName('user2').getChildByName('nickName').getComponent(Label).string = joinPlayerInfo.name;
          }
        }, {
          key: "playerLeave",
          value: function playerLeave() {
            this.board.getChildByName('team1').getChildByName('wait').active = true;
            this.board.getChildByName('team1').getChildByName('user2').active = false;
            this.board.getChildByName('ready').getChildByName('Button-invite').active = true;
            this.board.getChildByName('ready').getChildByName('Button-match').active = false;
          }
        }]);

        return UIControl;
      }();

      _export("WaitLoverBoard", WaitLoverBoard = (_dec = throttle(1000), _dec2 = throttle(), _dec3 = throttle(), _dec4 = throttle(500), (_class = (_temp = /*#__PURE__*/function (_BaseBoard) {
        _inherits(WaitLoverBoard, _BaseBoard);

        function WaitLoverBoard(scene, sdk) {
          var _this;

          _classCallCheck(this, WaitLoverBoard);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(WaitLoverBoard).call(this, scene, sdk));
          _this.uiControl = null;
          _this.name = 'WaitLoverBoard';
          _this.uiControl = new UIControl(_this.board, _this.SDK);
          return _this;
        }

        _createClass(WaitLoverBoard, [{
          key: "setListener",
          value: function setListener() {
            _get(_getPrototypeOf(WaitLoverBoard.prototype), "setListener", this).call(this);

            this.SDK.curGroup.onChangeCustomGroupPlayerStatus = this.onChangeCustomGroupPlayerStatus.bind(this);
            this.SDK.curGroup.onChangeGroupPlayerNetworkState = this.onChangeGroupPlayerNetworkState.bind(this);
            this.SDK.curGroup.onRecvFromGroupClient = this.onRecvFromGroupClient.bind(this);
            this.SDK.curGroup.onJoinGroup = this.onJoinGroup.bind(this);
            this.SDK.curGroup.onLeaveGroup = this.onLeaveGroup.bind(this);
            this.SDK.curGroup.onDismissGroup = this.onDismissGroup.bind(this);

            if (this.SDK.gameManager.timerSingal) {
              this.SDK.gameManager.timerSingal = null;
            }
          }
          /* 各类监听方法 */

        }, {
          key: "onDismissGroup",
          value: function () {
            var _onDismissGroup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event) {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.SDK.curGroup.initGroup();
                      _context3.next = 4;
                      return this.ChangeBoard(this.SDK.gameManager.MainBoard);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function onDismissGroup(_x4) {
              return _onDismissGroup.apply(this, arguments);
            }

            return onDismissGroup;
          }()
        }, {
          key: "onChangeCustomGroupPlayerStatus",
          value: function () {
            var _onChangeCustomGroupPlayerStatus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(event) {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      log('玩家[', event.data.changePlayerId, ']准备状态有变化', event.data.customGroupPlayerStatus);
                      _context4.next = 3;
                      return this.uiControl.playerReady(event.data.changePlayerId, event.data.customGroupPlayerStatus);

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function onChangeCustomGroupPlayerStatus(_x5) {
              return _onChangeCustomGroupPlayerStatus.apply(this, arguments);
            }

            return onChangeCustomGroupPlayerStatus;
          }()
        }, {
          key: "onChangeGroupPlayerNetworkState",
          value: function () {
            var _onChangeGroupPlayerNetworkState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(event) {
              var isCap, code;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      log('玩家[', event.data.changePlayerId, ']在线状态有变化', event.data.networkState);
                      _context5.next = 3;
                      return this.SDK.isCaptain();

                    case 3:
                      isCap = _context5.sent;

                      if (isCap) {
                        _context5.next = 10;
                        break;
                      }

                      if (!(event.data.networkState == NetState.Offline)) {
                        _context5.next = 8;
                        break;
                      }

                      _context5.next = 8;
                      return this.ChangeBoard(this.SDK.gameManager.MainBoard);

                    case 8:
                      _context5.next = 14;
                      break;

                    case 10:
                      _context5.next = 12;
                      return this.SDK.removePlayerInGroup(event.data.changePlayerId);

                    case 12:
                      code = _context5.sent;

                      if (code === 0) {
                        this.uiControl.playerLeave();
                      } else {
                        log('踢出玩家失败:', event.data.changePlayerId);
                      }

                    case 14:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function onChangeGroupPlayerNetworkState(_x6) {
              return _onChangeGroupPlayerNetworkState.apply(this, arguments);
            }

            return onChangeGroupPlayerNetworkState;
          }()
        }, {
          key: "onRecvFromGroupClient",
          value: function () {
            var _onRecvFromGroupClient = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(event) {
              var msg;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      msg = JSON.parse(event.data.msg);

                      if (!(msg['type'] == GroupMessageType.Sys)) {
                        _context6.next = 6;
                        break;
                      }

                      if (!(msg['content'] == GroupSysMessageType.Matching)) {
                        _context6.next = 6;
                        break;
                      }

                      _context6.next = 6;
                      return this.ChangeBoard(this.SDK.gameManager.MatchingBoard);

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function onRecvFromGroupClient(_x7) {
              return _onRecvFromGroupClient.apply(this, arguments);
            }

            return onRecvFromGroupClient;
          }()
        }, {
          key: "onJoinGroup",
          value: function onJoinGroup(event) {
            log('有玩家加入队组:', event.data.joinPlayerId);
            var joinPlayerId = event.data.joinPlayerId;
            var playerList = event.data.groupInfo.groupPlayerList;
            this.uiControl.playerJoin(joinPlayerId, playerList);
          }
        }, {
          key: "onLeaveGroup",
          value: function onLeaveGroup(event) {
            log('有人离开队组', event.data.leavePlayerId);
            this.uiControl.playerLeave();
          }
        }, {
          key: "InitEvent",
          value: function InitEvent() {
            _get(_getPrototypeOf(WaitLoverBoard.prototype), "InitEvent", this).call(this);

            var button_ready = this.board.getChildByName('ready').getChildByName('Button-ready');
            var button_match = this.board.getChildByName('ready').getChildByName('Button-match');
            var button_invite = this.board.getChildByName('ready').getChildByName('Button-invite');
            var button_cancel = this.board.getChildByName('Cancel').getChildByName('Button');
            button_ready.on(SystemEventType.TOUCH_END, this.clickReady, this);
            button_cancel.on(SystemEventType.TOUCH_END, this.clickLeave, this);
            button_match.on(SystemEventType.TOUCH_END, this.clickMatch, this);
            button_invite.on(SystemEventType.TOUCH_END, this.clickInvite, this);
            document.addEventListener('visibilitychange', this.visibilityChange.bind(this));
          }
        }, {
          key: "destroy",
          value: function destroy() {
            _get(_getPrototypeOf(WaitLoverBoard.prototype), "destroy", this).call(this);

            var button_ready = this.board.getChildByName('ready').getChildByName('Button-ready');
            var button_match = this.board.getChildByName('ready').getChildByName('Button-match');
            var button_invite = this.board.getChildByName('ready').getChildByName('Button-invite');
            var button_cancel = this.board.getChildByName('Cancel').getChildByName('Button');
            button_ready.off(SystemEventType.TOUCH_END);
            button_cancel.off(SystemEventType.TOUCH_END);
            button_match.off(SystemEventType.TOUCH_END);
            button_invite.off(SystemEventType.TOUCH_END);
          }
        }, {
          key: "clickReady",
          value: function () {
            var _clickReady = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var playerInfo, newState, newTip, code;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.SDK.getPlayerInfo();

                    case 2:
                      playerInfo = _context7.sent;
                      newState = PlayerState.NotReady;
                      newTip = '准备';

                      if (playerInfo.stateGroup === PlayerState.NotReady) {
                        newState = PlayerState.Ready;
                        newTip = '取消准备';
                      }

                      _context7.next = 8;
                      return this.SDK.setGroupPlayerStatus(newState);

                    case 8:
                      code = _context7.sent;
                      this.board.getChildByName('ready').getChildByName('Button-ready').getChildByName('Label').getComponent(Label).string = newTip;

                    case 10:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function clickReady() {
              return _clickReady.apply(this, arguments);
            }

            return clickReady;
          }()
        }, {
          key: "clickLeave",
          value: function () {
            var _clickLeave = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this2 = this;

              var dia;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      dia = new Dialog(this.scene, this.SDK, '确认取消后，游戏邀请自动失效，另一半无法进入。', DialogButtonType.multiple, "再想想", "取消游戏邀请", "取消游戏邀请", HorizontalTextAlignment.LEFT);
                      _context8.next = 3;
                      return dia.show(this, function () {
                        if (_this2.SDK.curDialog.dead) return;

                        _this2.SDK.curDialog.destroy();
                      }, function () {
                        if (_this2.SDK.curDialog.dead) return;

                        _this2.SDK.curDialog.destroy();

                        _this2.playerLeave();
                      });

                    case 3:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function clickLeave() {
              return _clickLeave.apply(this, arguments);
            }

            return clickLeave;
          }()
        }, {
          key: "playerLeave",
          value: function () {
            var _playerLeave = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var groupInfo, curPlayerInfo, capId;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.SDK.getGroupInfo();

                    case 2:
                      groupInfo = _context9.sent;
                      _context9.next = 5;
                      return this.SDK.getPlayerInfo();

                    case 5:
                      curPlayerInfo = _context9.sent;

                      if (!groupInfo) {
                        _context9.next = 26;
                        break;
                      }

                      capId = groupInfo.owner;

                      if (!(curPlayerInfo.id == capId)) {
                        _context9.next = 22;
                        break;
                      }

                      _context9.next = 11;
                      return this.SDK.getTeammate();

                    case 11:
                      if (!_context9.sent) {
                        _context9.next = 15;
                        break;
                      }

                      this.SDK.gameManager.Util.callTDGA(StatisticsKey.main_couple_cancel);
                      _context9.next = 16;
                      break;

                    case 15:
                      this.SDK.gameManager.Util.callTDGA(StatisticsKey.main_wait_invite_cancel);

                    case 16:
                      _context9.next = 18;
                      return this.SDK.dismissGroup();

                    case 18:
                      _context9.next = 20;
                      return this.ChangeBoard(this.SDK.gameManager.MainBoard);

                    case 20:
                      _context9.next = 24;
                      break;

                    case 22:
                      _context9.next = 24;
                      return this.ChangeBoard(this.SDK.gameManager.MainBoard);

                    case 24:
                      _context9.next = 28;
                      break;

                    case 26:
                      _context9.next = 28;
                      return this.ChangeBoard(this.SDK.gameManager.MainBoard);

                    case 28:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function playerLeave() {
              return _playerLeave.apply(this, arguments);
            }

            return playerLeave;
          }()
        }, {
          key: "clickMatch",
          value: function () {
            var _clickMatch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var loverInfo, code;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.SDK.getLoverInfo();

                    case 2:
                      loverInfo = _context10.sent;

                      if (!loverInfo) {
                        _context10.next = 27;
                        break;
                      }

                      if (!(loverInfo.stateGroup === PlayerState.Ready)) {
                        _context10.next = 23;
                        break;
                      }

                      _context10.next = 7;
                      return this.SDK.matchingLover();

                    case 7:
                      code = _context10.sent;

                      if (!(code == this.SDK.errorCode.EC_OK)) {
                        _context10.next = 16;
                        break;
                      }

                      _context10.next = 12;
                      return this.SDK.sendToGroup(GroupMessageType.Sys, GroupSysMessageType.Matching);

                    case 12:
                      _context10.next = 14;
                      return this.ChangeBoard(this.SDK.gameManager.MatchingBoard);

                    case 14:
                      _context10.next = 21;
                      break;

                    case 16:
                      _context10.next = 18;
                      return this.SDK.leaveRoom();

                    case 18:
                      _context10.next = 20;
                      return this.SDK.cancelMatchinig();

                    case 20:
                      this.SDK.gameManager.showToast("\u8FDB\u5165\u5339\u914D\u5931\u8D25(".concat(code, ")"), 2);

                    case 21:
                      _context10.next = 25;
                      break;

                    case 23:
                      this.SDK.gameManager.showToast('另一半还没准备好', 2);

                    case 25:
                      _context10.next = 37;
                      break;

                    case 27:
                      _context10.next = 29;
                      return this.SDK.cancelMatchinig();

                    case 29:
                      _context10.next = 31;
                      return this.SDK.leaveGroup();

                    case 31:
                      _context10.next = 33;
                      return this.SDK.leaveRoom();

                    case 33:
                      _context10.next = 35;
                      return this.ChangeBoard(this.SDK.gameManager.MainBoard);

                    case 35:
                      this.SDK.gameManager.showToast("\u83B7\u53D6\u5BF9\u8C61\u6570\u636E\u5931\u8D25", 2);

                    case 37:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function clickMatch() {
              return _clickMatch.apply(this, arguments);
            }

            return clickMatch;
          }()
        }, {
          key: "clickInvite",
          value: function () {
            var _clickInvite = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var sharePlatform;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      this.SDK.gameManager.Util.callTDGA(StatisticsKey.main_couple_wait_invite);
                      sharePlatform = this.board.getChildByName('sharePlatform');
                      sharePlatform.getChildByName('content').setPosition(0, -240, 0);
                      sharePlatform.active = true;
                      tween(sharePlatform.getChildByName('content')).to(.3, {
                        position: new Vec3(0, -38, 0)
                      }).start();
                      sharePlatform.getChildByName('content').getChildByName('inApp').on(SystemEventType.TOUCH_END, this.shareToMessage, this);
                      sharePlatform.getChildByName('content').getChildByName('weChat').on(SystemEventType.TOUCH_END, this.shareToWX, this); // sharePlatform.getChildByName('content').getChildByName('QQ').on(SystemEventType.TOUCH_END, this.shareToQQ, this)

                      sharePlatform.getChildByName('content').getChildByName('close').on(SystemEventType.TOUCH_END, this.close, this);
                      sharePlatform.getChildByName('maskBg').on(SystemEventType.TOUCH_END, this.close, this);

                    case 9:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function clickInvite() {
              return _clickInvite.apply(this, arguments);
            }

            return clickInvite;
          }()
        }, {
          key: "visibilityChange",
          value: function visibilityChange() {}
        }, {
          key: "shareToMessage",
          value: function shareToMessage() {
            var _this3 = this;

            var ua = navigator.userAgent.toLowerCase();
            var isAndroid = ua.indexOf('android') > -1;

            window['toldTA'] = function () {
              isAndroid ? '' : _this3.SDK.gameManager.showToast('发送成功', 2);

              _this3.close();

              _this3.SDK.gameManager.Util.callTDGA(StatisticsKey.game_share_chat);
            };

            window['sendLinkFail'] = function () {
              isAndroid ? '' : _this3.SDK.gameManager.showToast('邀请失败', 2);
            };

            window['RunNative']('shareURLToPlatform', {
              "url": "lianaiji://open.minigame?name=jump&group=".concat(this.SDK.curGroup.groupInfo.id),
              "title": "双人跳一跳",
              "content": '亲爱的，和我一起玩双人跳一跳吧',
              "imgUrl": "https://cdn1.didiapp.com/jump/banner.png",
              "source": "双人跳一跳",
              "platform": ["chat"]
            }, 'toldTA', 'sendLinkFail');
          }
        }, {
          key: "shareToWX",
          value: function shareToWX() {
            var _this4 = this;

            window['wxSuc'] = function () {
              _this4.close();

              _this4.SDK.gameManager.Util.callTDGA(StatisticsKey.game_share_wechat);
            };

            window['wxErr'] = function () {};

            var avatar = this.SDK.gameManager.PlayerData.avatar_url;
            window['RunNative']('shareURLToPlatform', {
              "url": "https://kitty.didiapp.com/lovenote/miniGameinvite?from=jump&group=".concat(this.SDK.curGroup.groupInfo.id, "&avatar=").concat(avatar),
              "title": "邀你一起玩双人跳一跳！点击链接进入游戏",
              "content": '我们组队，和其他情侣PK，相信我们一定是最有默契的情侣！',
              "imgUrl": "https://cdn1.didiapp.com/jump/banner.png",
              "source": "恋爱记",
              "platform": ["wxsession"]
            }, 'wxSuc', 'wxErr');
          } // shareToQQ () {
          //     window['qqSuc'] = () => {
          //         this.close()
          //         this.SDK.gameManager.Util.callTDGA(StatisticsKey.game_share_QQ);
          //     }
          //     window['qqErr'] = () => {
          //     }
          //     let avatar = this.SDK.gameManager.PlayerData.avatar_url
          //     window['RunNative']('shareURLToPlatform', {
          //         "url": `https://kitty.didiapp.com/lovenote/miniGameinvite?from=jump&group=${this.SDK.curGroup.groupInfo.id}&avatar=${avatar}`,
          //         "title": "邀你一起玩双人跳一跳！点击链接进入游戏",
          //         "content": '我们组队，和其他情侣PK，相信我们一定是最有默契的情侣！',
          //         "imgUrl": "https://cdn1.didiapp.com/jump/banner.png",
          //         "source": "恋爱记",
          //         "platform": ["qq"]
          //     } , 'qqSuc', 'qqErr')
          // }

        }, {
          key: "close",
          value: function close() {
            var sharePlatform = this.board.getChildByName('sharePlatform');
            sharePlatform.active = false;
            sharePlatform.getChildByName('content').getChildByName('inApp').off(SystemEventType.TOUCH_END);
            sharePlatform.getChildByName('content').getChildByName('weChat').off(SystemEventType.TOUCH_END); // sharePlatform.getChildByName('content').getChildByName('QQ').off(SystemEventType.TOUCH_END)

            sharePlatform.getChildByName('content').getChildByName('close').off(SystemEventType.TOUCH_END);
            sharePlatform.getChildByName('maskBg').off(SystemEventType.TOUCH_END);
          }
        }]);

        return WaitLoverBoard;
      }(BaseBoard), _temp), (_applyDecoratedDescriptor(_class.prototype, "clickReady", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "clickReady"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clickLeave", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "clickLeave"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clickMatch", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "clickMatch"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clickInvite", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "clickInvite"), _class.prototype)), _class)));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///OtherPlayer.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc", "./Const.js"], function (_export, _context3) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, cclegacy, _decorator, Vec3, Quat, CCFloat, Vec2, tween, Component, instantiate, loader, Prefab, log, JumpStatus, TeamColor, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, ccclass, property, tempVec_1, tempVec_2, tempQuat_1, tempQuat_2, OtherPlayer;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _asyncToGenerator = _virtual_rollupPluginBabelHelpersJs.asyncToGenerator;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
      Quat = _cc.Quat;
      CCFloat = _cc.CCFloat;
      Vec2 = _cc.Vec2;
      tween = _cc.tween;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      loader = _cc.loader;
      Prefab = _cc.Prefab;
    }, function (_ConstJs) {
      log = _ConstJs.log;
      JumpStatus = _ConstJs.JumpStatus;
      TeamColor = _ConstJs.TeamColor;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f514fFBUXpDva7Z4+Bu/z5l", "OtherPlayer", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      tempVec_1 = new Vec3();
      tempVec_2 = new Vec3();
      tempQuat_1 = new Quat();
      tempQuat_2 = new Quat();

      _export("OtherPlayer", OtherPlayer = (_dec = ccclass('OtherPlayer'), _dec2 = property({
        type: CCFloat
      }), _dec3 = property({
        type: CCFloat
      }), _dec4 = property({
        type: CCFloat
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(OtherPlayer, _Component);

        function OtherPlayer() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, OtherPlayer);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OtherPlayer)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "jumpHeight", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "jumpDuration", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "max_time", _descriptor3, _assertThisInitialized(_this));

          _this.originPosY = 0;
          _this.originRotation = new Quat(0, 1, 0, 0);
          _this._isRunning = false;
          _this.curRotation = new Quat();
          _this._cur_position = new Vec3();
          _this._jump_time = 0;
          _this.jumpResult = {
            time: null,
            distance: null,
            offset: null,
            status: null
          };
          _this._face = new Vec2();
          _this._axis = new Vec3();
          _this._stat_power = false;
          _this._stat_jump = false;
          _this.curBox = null;
          _this.nextBox = null;
          _this.control = false;
          _this.modelBody = null;
          _this.modelHead = null;
          _this.modelHeadPos = new Vec3();
          _this.modelTire = null;
          _this.map = null;
          _this.index = 0;
          return _this;
        }

        _createClass(OtherPlayer, [{
          key: "onLoad",
          value: function onLoad() {}
        }, {
          key: "start",
          value: function start() {
            this.originPosY = this.node.position.y;
            this.node.getRotation(this.curRotation);
          }
        }, {
          key: "initPlayer",
          value: function initPlayer() {
            var pos = new Vec3(this.gameManager.otherTeam.pos[0], this.originPosY, this.gameManager.otherTeam.pos[1]);
            this._cur_position = pos;
            var quat = new Quat();
            this.index = 0;
            this.node.setPosition(pos);
            this.node.setRotation(this.originRotation);
            this._jump_time = 0;
            this._stat_power = false;
            this._stat_jump = false;
          }
        }, {
          key: "PowerEnd",
          value: function PowerEnd(jumpInfo) {
            if (this.control == false) {
              this.curBox = this.map[this.index];
              this.nextBox = this.map[this.index + 1];
              this._stat_power = false;
              var PlayerPos = new Vec3();
              this.node.getPosition(PlayerPos);
              PlayerPos.y = this.originPosY;
              this.node.setPosition(PlayerPos);
              this.start_jump(jumpInfo);
            }
          }
        }, {
          key: "start_jump",
          value: function start_jump(jumpInfo) {
            if (!this._stat_power) {
              log('地图长度:', this.gameManager.map.length);
              this._stat_jump = true;
              this._jump_time = 0;
              this.getFace(this._face);
              this._axis = this.gameManager.Util.getJumpAxis(this.node, this.nextBox.node);
              this.node.getRotation(this.curRotation);
              this.node.getPosition(this._cur_position);
              this.jumpResult.distance = jumpInfo.distance;
              this.jumpResult.offset = jumpInfo.pos ? jumpInfo.pos : jumpInfo.offset;
              this.jumpResult.status = jumpInfo.status;
              this.jumpResult.time = jumpInfo.time;

              if (jumpInfo.index) {
                this.index = jumpInfo.index;
              }
            }
          }
        }, {
          key: "action_jump",
          value: function action_jump(dt) {
            if (this._stat_jump) {
              this._jump_time += dt;
              var y = 0;
              var val = 0;
              var roa = 0;
              var jump_end = false;

              if (this._jump_time < this.jumpDuration) {
                var a = -4 * this.jumpHeight / (this.jumpDuration * this.jumpDuration);
                var h = this.jumpDuration / 2;
                var k = this.jumpHeight;
                y = a * (this._jump_time - h) * (this._jump_time - h) + k + this.originPosY;
                val = dt / this.jumpDuration * this.jumpResult.distance;
                roa = this._jump_time / this.jumpDuration * 360;
              } else {
                y = this.originPosY;
                roa = 0;
                this._stat_jump = false;
                jump_end = true;
              }

              var cur_pos = new Vec3();
              this.node.getPosition(cur_pos);
              var new_pos = this.gameManager.Util.getPosWithVec(cur_pos, this._face, val);
              new_pos.y = y;
              Quat.rotateAround(tempQuat_1, this.curRotation, this._axis, roa * 3.1415 / 180);
              this.node.setPosition(new_pos);
              this.node.setRotation(tempQuat_1);

              if (jump_end) {
                this.action_jump_end();
              }
            }
          }
        }, {
          key: "action_jump_end",
          value: function action_jump_end() {
            var cur_pos = new Vec3();
            this.node.getPosition(cur_pos);

            if (this.jumpResult.status == JumpStatus.current) {
              log('[敌人]原地跳,修正量:', this.jumpResult.offset);
              var newPos = new Vec3();
              this.curBox.node.getPosition(newPos);
              newPos.x += this.jumpResult.offset[0];
              newPos.z += this.jumpResult.offset[1];
              newPos.y = this.originPosY;
              this.node.setPosition(newPos);
              this.node.getPosition(this._cur_position);
              this.node.setRotation(this.originRotation);
            } else if (this.jumpResult.status == JumpStatus.next) {
              log('[敌人]跳到下一块,修正量:', this.jumpResult.offset);

              var _newPos = new Vec3();

              this.nextBox.node.getPosition(_newPos);
              _newPos.x += this.jumpResult.offset[0];
              _newPos.z += this.jumpResult.offset[1];
              _newPos.y = this.originPosY;
              this.node.setPosition(_newPos);
              this.node.getPosition(this._cur_position);
              this.index += 1;
              this.curBox = this.gameManager.map[this.index];
              this.nextBox = this.gameManager.map[this.index + 1];
              this.node.setRotation(this.originRotation);
            } else if (this.jumpResult.status == JumpStatus.dead) {
              var dead_pos = new Vec3();
              dead_pos.set(cur_pos);
              dead_pos.y = -0.5;
              this.node.setRotation(this.originRotation);
              tween(this.node).to(1, {
                position: dead_pos
              }, {
                onComplete: this.jumpDead.bind(this)
              }).start();
            } // 教学中跳跃结束时调用教学跳跃结束信号


            if (this.gameManager.SDK.curBoard.name == "TeachingBoard") {
              this.gameManager.teachJumpSingal(true);
            }
          }
        }, {
          key: "jumpDead",
          value: function jumpDead() {
            // 教学中跳跃死亡时调用教学跳跃死亡信号
            if (this.gameManager.SDK.curBoard.name == "TeachingBoard") {
              this.gameManager.teachJumpSingal(true);
            }

            this.reset();
          }
        }, {
          key: "reset",
          value: function reset() {
            this.node.setPosition(this._cur_position);
            this.node.setRotation(this.originRotation); // this.curBox.node.setScale(new Vec3(1, 1, 1));
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            if (this.isRunning || this.gameManager.SDK && this.gameManager.SDK.curBoard && this.gameManager.SDK.curBoard.name == 'TeachingBoard') {
              this.action_jump(deltaTime);
            }
          } // 角色的通用方法

          /* 设置自己角色的面向下一个方块中心点 */

        }, {
          key: "setFace",
          value: function setFace() {
            var _this2 = this;

            if (this.nextBox) {
              var tw = tween(this.node); // 使用tween动画

              var quat_start = new Quat();
              this.node.getRotation(quat_start); // 获取起始四元数

              var quat_end = this.gameManager.Util.getRotaionQuat(this.node, this.nextBox.node); // 最终旋转四元数 假设已经算出

              var quat_now = new Quat(); // 用一个中间变量

              tw.to(0.2, {}, {
                onUpdate: function onUpdate(target, ratio) {
                  // ratio : 0~1
                  // 这里使用球面插值，旋转时不会出现变形
                  quat_now.set(quat_start).slerp(quat_end, ratio);

                  _this2.node.setRotation(quat_now);
                }
              });
              tw.start();
            }
          } //获取角色从当前位置到下一个方块应该的向量

        }, {
          key: "getFace",
          value: function getFace(out) {
            if (this.nextBox) {
              var vec2 = new Vec2();
              var vec3_1 = new Vec3();
              var vec3_2 = new Vec3();
              this.node.getPosition(vec3_1);
              this.nextBox.node.getPosition(vec3_2);
              out.set(vec3_2.x - vec3_1.x, vec3_2.z - vec3_1.z);
            } else {
              out.set(this._face.x, this._face.y);
            }
          } // 修改角色模型,并自动将其头部,身体Node进行存储,序号从1-4,分别代表红1-2,蓝1-2

        }, {
          key: "setModel",
          value: function () {
            var _setModel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(teamColor) {
              var chessPrefab, curNode, newModel;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (teamColor == TeamColor.blue) {
                        chessPrefab = this.gameManager.ChessPrefabEnemy.blue;
                      } else if (teamColor == TeamColor.red) {
                        chessPrefab = this.gameManager.ChessPrefabEnemy.red;
                      }

                      curNode = this.node.getChildByName('Node');

                      if (curNode) {
                        this.node.removeChild(curNode);
                      }

                      if (chessPrefab) {
                        newModel = instantiate(chessPrefab);
                        newModel.setParent(this.node);
                      }

                      return _context.abrupt("return", true);

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function setModel(_x) {
              return _setModel.apply(this, arguments);
            }

            return setModel;
          }() // 修改角色的头饰,并自动将其Node进行存储

        }, {
          key: "setTire",
          value: function () {
            var _setTire = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(index) {
              var _this3 = this;

              var key, curNode, prefabPath, promise;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      key = null;
                      _context2.t0 = index;
                      _context2.next = _context2.t0 === 1 ? 4 : 6;
                      break;

                    case 4:
                      key = 'vip';
                      return _context2.abrupt("break", 6);

                    case 6:
                      curNode = this.node.getChildByName('Tire').getChildByName('Node_enemy');

                      if (curNode) {
                        this.node.getChildByName('Tire').removeChild(curNode);
                      }

                      if (key) {
                        _context2.next = 10;
                        break;
                      }

                      return _context2.abrupt("return", false);

                    case 10:
                      prefabPath = 'Model/Tire/' + key + '/Node_enemy';
                      promise = new Promise(function (resolve) {
                        loader.loadRes(prefabPath, Prefab, function (err, prefab) {
                          var newTire = instantiate(prefab);
                          newTire.setParent(_this3.node.getChildByName('Tire'));
                          _this3.modelTire = newTire;
                          resolve(newTire);
                        });
                      });
                      return _context2.abrupt("return", true);

                    case 13:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function setTire(_x2) {
              return _setTire.apply(this, arguments);
            }

            return setTire;
          }()
        }, {
          key: "isRunning",
          set: function set(b) {
            this._isRunning = b;
          },
          get: function get() {
            return this._isRunning;
          }
        }]);

        return OtherPlayer;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "jumpHeight", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "jumpDuration", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.7;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "max_time", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 4;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/avatar.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, Sprite, Component, _dec, _class, _temp, ccclass, property, Avatar;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Sprite = _cc.Sprite;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "62231BivyRLC6qStdnthPWc", "avatar", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Avatar", Avatar = (_dec = ccclass('Avatar'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(Avatar, _Component);

        function Avatar() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Avatar);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Avatar)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.run = false;
          _this.time = 0;
          _this.loopTime = 5.;
          _this.isLeave = false;
          return _this;
        }

        _createClass(Avatar, [{
          key: "timeStart",
          value: function timeStart() {
            if (this.isLeave) return;
            this.run = true;
          }
        }, {
          key: "reset",
          value: function reset() {
            if (this.isLeave) return this.setOffline();
            this.run = false;
            this.time = 0;
            var pass1 = this.node.getComponent(Sprite).material.passes[0];
            pass1.setUniform(pass1.getHandle("precent"), 100);
          }
        }, {
          key: "setOffline",
          value: function setOffline() {
            this.isLeave = true;
            var pass1 = this.node.getComponent(Sprite).material.passes[0];
            pass1.setUniform(pass1.getHandle("precent"), 0);
          }
        }, {
          key: "setOnline",
          value: function setOnline() {
            this.isLeave = false;
            this.reset();
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            if (this.run) {
              var pass1 = this.node.getComponent(Sprite).material.passes[0];
              pass1.setUniform(pass1.getHandle("precent"), this.time * 20);
              this.time += deltaTime;

              if (this.time >= this.loopTime) {
                this.reset();
              }
            }
          }
        }]);

        return Avatar;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/Board/GamingBoard.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Const.js", "../../Util.js", "../Dialog/Dialog.js", "./BaseBoard.js", "../avatar.js"], function (_export, _context21) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, _get, _asyncToGenerator, cclegacy, tween, ProgressBar, Label, SystemEventType, Vec3, Node, UITransform, Sprite, loader, Prefab, UIOpacity, instantiate, TeamColor, StatisticsKey, DialogButtonType, ClientDataType, NetState, ServerDataType, log, PlayerState, AIDataType, RoomDataType, EmojiType, throttle, Dialog, BaseBoard, Avatar, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _temp, UIControl, GamingBoard;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
      _asyncToGenerator = _virtual_rollupPluginBabelHelpersJs.asyncToGenerator;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      tween = _cc.tween;
      ProgressBar = _cc.ProgressBar;
      Label = _cc.Label;
      SystemEventType = _cc.SystemEventType;
      Vec3 = _cc.Vec3;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Sprite = _cc.Sprite;
      loader = _cc.loader;
      Prefab = _cc.Prefab;
      UIOpacity = _cc.UIOpacity;
      instantiate = _cc.instantiate;
    }, function (_ConstJs) {
      TeamColor = _ConstJs.TeamColor;
      StatisticsKey = _ConstJs.StatisticsKey;
      DialogButtonType = _ConstJs.DialogButtonType;
      ClientDataType = _ConstJs.ClientDataType;
      NetState = _ConstJs.NetState;
      ServerDataType = _ConstJs.ServerDataType;
      log = _ConstJs.log;
      PlayerState = _ConstJs.PlayerState;
      AIDataType = _ConstJs.AIDataType;
      RoomDataType = _ConstJs.RoomDataType;
      EmojiType = _ConstJs.EmojiType;
    }, function (_UtilJs) {
      throttle = _UtilJs.throttle;
    }, function (_DialogDialogJs) {
      Dialog = _DialogDialogJs.Dialog;
    }, function (_BaseBoardJs) {
      BaseBoard = _BaseBoardJs.BaseBoard;
    }, function (_avatarJs) {
      Avatar = _avatarJs.Avatar;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5a91dy6sIFJ+IdMqEEFo6I0", "GamingBoard", undefined);

      UIControl = /*#__PURE__*/function () {
        function UIControl(board, sdk) {
          _classCallCheck(this, UIControl);

          this.board = null;
          this.SDK = null;
          this.gameStart = false;
          this.end = false;
          this.curAvatar = null;
          this.selfAvatar = null;
          this.teammaterAvatar = null;
          this.timeNumberNode = null;
          this.time = 0;
          this.messageList = [];
          this.selfSign = '';
          this.top1 = true;
          this.board = board;
          this.SDK = sdk;
        }

        _createClass(UIControl, [{
          key: "initUI",
          value: function () {
            var _initUI = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(board) {
              var header, teamId, playerIndex;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      log('debug', this.board);
                      this.board = board;
                      this.gameStart = false;
                      this.changeSoundUI(true);
                      header = this.board.getChildByName('Header');
                      this.team1Node = this.board.getChildByName('Header').getChildByName('team0');
                      this.team2Node = this.board.getChildByName('Header').getChildByName('team1');
                      this.comp1 = this.team1Node.getChildByName('avatar-1').getChildByName('avatar');
                      this.comp2 = this.team1Node.getChildByName('avatar-2').getChildByName('avatar');
                      this.comp3 = this.team2Node.getChildByName('avatar-1').getChildByName('avatar');
                      this.comp4 = this.team2Node.getChildByName('avatar-2').getChildByName('avatar');
                      this.timeNumberNode = header.getChildByName('time').getChildByName('number');
                      header.getChildByName('tip').active = false;
                      header.getChildByName('wait').active = false;
                      header.getChildByName('end').active = false;
                      header.getChildByName('team0').getChildByName('avatar-1').getChildByName('offLine').active = false;
                      header.getChildByName('team0').getChildByName('avatar-2').getChildByName('offLine').active = false;
                      header.getChildByName('team1').getChildByName('avatar-1').getChildByName('offLine').active = false;
                      header.getChildByName('team1').getChildByName('avatar-2').getChildByName('offLine').active = false;
                      header.getChildByName('team0').getChildByName('avatar-1').getChildByName('avatar').getComponent(Avatar).setOnline();
                      header.getChildByName('team0').getChildByName('avatar-2').getChildByName('avatar').getComponent(Avatar).setOnline();
                      header.getChildByName('team1').getChildByName('avatar-1').getChildByName('avatar').getComponent(Avatar).setOnline();
                      header.getChildByName('team1').getChildByName('avatar-2').getChildByName('avatar').getComponent(Avatar).setOnline();
                      header.getChildByName('score').getChildByName('redScore').getComponent(Label).string = "0\u5206";
                      header.getChildByName('score').getChildByName('blueScore').getComponent(Label).string = "0\u5206";
                      _context.next = 27;
                      return this.SDK.getTeamId();

                    case 27:
                      teamId = _context.sent;
                      _context.next = 30;
                      return this.SDK.getPlayerIndex();

                    case 30:
                      playerIndex = _context.sent;
                      _context.next = 33;
                      return this.loadAvatar();

                    case 33:
                      if (teamId == TeamColor.red) {
                        this.SDK.gameManager.Util.loadImg('Texture/UI/gaming/lingxian_2/spriteFrame', this.board.getParent().getParent().getChildByName('enemy1'));
                        this.SDK.gameManager.Util.loadImg('Texture/UI/gaming/lingxian_2/spriteFrame', this.board.getParent().getParent().getChildByName('enemy2'));

                        if (playerIndex == 1) {
                          this.selfAvatar = this.comp1;
                          this.selfSign = '1-1';
                          this.teammaterAvatar = this.comp2;
                        } else {
                          this.selfAvatar = this.comp2;
                          this.selfSign = '1-2';
                          this.teammaterAvatar = this.comp1;
                        }
                      } else {
                        this.SDK.gameManager.Util.loadImg('Texture/UI/gaming/lingxian_1/spriteFrame', this.board.getParent().getParent().getChildByName('enemy1'));
                        this.SDK.gameManager.Util.loadImg('Texture/UI/gaming/lingxian_1/spriteFrame', this.board.getParent().getParent().getChildByName('enemy2'));

                        if (playerIndex == 1) {
                          this.selfAvatar = this.comp3;
                          this.selfSign = '2-1';
                          this.teammaterAvatar = this.comp4;
                        } else {
                          this.selfAvatar = this.comp4;
                          this.selfSign = '2-2';
                          this.teammaterAvatar = this.comp3;
                        }
                      }

                      if (!this.SDK.gameManager.isReconnect) this.setReady();else {
                        header.getChildByName('ready').active = false;
                      }

                    case 35:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function initUI(_x) {
              return _initUI.apply(this, arguments);
            }

            return initUI;
          }()
        }, {
          key: "initData",
          value: function initData() {
            this.time = -100;
          }
        }, {
          key: "setTime",
          value: function () {
            var _setTime = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(time) {
              var n, numNodeList, newNumNode, com_transform, childs, index, _index, _index2;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!this.board) {
                        _context2.next = 52;
                        break;
                      }

                      if (!(this.time != time && time <= this.SDK.gameManager.gameTime && time >= 0)) {
                        _context2.next = 52;
                        break;
                      }

                      this.time = time;
                      numNodeList = [];

                      if (!(time != 0)) {
                        _context2.next = 21;
                        break;
                      }

                    case 5:
                      if (!(time > 0)) {
                        _context2.next = 19;
                        break;
                      }

                      n = time % 10;
                      time = Math.floor(time / 10);
                      newNumNode = new Node();
                      com_transform = newNumNode.addComponent(UITransform);
                      newNumNode.addComponent(Sprite);
                      com_transform.setContentSize(42, 56);
                      com_transform.setAnchorPoint(0.5, 0.5);
                      newNumNode.setScale(new Vec3(0.5, 0.5, 1));
                      _context2.next = 16;
                      return this.SDK.gameManager.Util.loadImg('Texture/number/' + n + '/spriteFrame', newNumNode);

                    case 16:
                      numNodeList.push(newNumNode);
                      _context2.next = 5;
                      break;

                    case 19:
                      _context2.next = 31;
                      break;

                    case 21:
                      n = 0;
                      newNumNode = new Node();
                      com_transform = newNumNode.addComponent(UITransform);
                      newNumNode.addComponent(Sprite);
                      com_transform.setContentSize(42, 56);
                      com_transform.setAnchorPoint(0.5, 0.5);
                      newNumNode.setScale(new Vec3(0.5, 0.5, 1));
                      _context2.next = 30;
                      return this.SDK.gameManager.Util.loadImg('Texture/number/' + n + '/spriteFrame', newNumNode);

                    case 30:
                      numNodeList.push(newNumNode);

                    case 31:
                      // 销毁已存在的数字
                      childs = this.timeNumberNode.children;

                      for (index = 0; index < childs.length; index++) {
                        childs[index].destroy();
                      }

                      this.board.getChildByName('Header').getChildByName('time').getComponent(Label).string = ''; // 根据数字节点长度确定数字节点实际位置

                      _context2.t0 = numNodeList.length;
                      _context2.next = _context2.t0 === 1 ? 37 : _context2.t0 === 2 ? 40 : _context2.t0 === 3 ? 43 : 47;
                      break;

                    case 37:
                      numNodeList[0].setPosition(new Vec3(0, 0, 0));

                      if (n > 0 && n <= 5) {
                        tween(numNodeList[0]).to(.5, {
                          scale: new Vec3(1.5, 1.5, 1)
                        }).start();
                      }

                      return _context2.abrupt("break", 51);

                    case 40:
                      numNodeList[1].setPosition(new Vec3(-10, 0, 0));
                      numNodeList[0].setPosition(new Vec3(10, 0, 0));
                      return _context2.abrupt("break", 51);

                    case 43:
                      numNodeList[2].setPosition(new Vec3(-20, 0, 0));
                      numNodeList[1].setPosition(new Vec3(0, 0, 0));
                      numNodeList[0].setPosition(new Vec3(20, 0, 0));
                      return _context2.abrupt("break", 51);

                    case 47:
                      for (_index = 0; _index < numNodeList.length; _index++) {
                        numNodeList[_index].destroy();
                      }

                      numNodeList = [];
                      this.board.getChildByName('Header').getChildByName('time').getComponent(Label).string = time;
                      return _context2.abrupt("break", 51);

                    case 51:
                      // 将最新数字装配到指定位置
                      for (_index2 = 0; _index2 < numNodeList.length; _index2++) {
                        numNodeList[_index2].setParent(this.timeNumberNode);
                      }

                    case 52:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function setTime(_x2) {
              return _setTime.apply(this, arguments);
            }

            return setTime;
          }()
        }, {
          key: "ControlStart",
          value: function () {
            var _ControlStart = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(isSelf) {
              var avatar, teamId, teamNode;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.SDK.getTeamId();

                    case 2:
                      teamId = _context3.sent;

                      if (teamId == TeamColor.red) {
                        teamNode = this.board.getChildByName('Header').getChildByName('team0');
                      } else {
                        teamNode = this.board.getChildByName('Header').getChildByName('team1');
                      }

                      if (isSelf) {
                        avatar = teamNode.getChildByName('avatar-1').getChildByName('avatar');
                      } else {
                        avatar = teamNode.getChildByName('avatar-2').getChildByName('avatar');
                      }

                      avatar.getComponent(Avatar).timeStart();
                      this.curAvatar = avatar;

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function ControlStart(_x3) {
              return _ControlStart.apply(this, arguments);
            }

            return ControlStart;
          }()
        }, {
          key: "ControlReset",
          value: function () {
            var _ControlReset = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.curAvatar.getComponent(Avatar).reset();

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function ControlReset() {
              return _ControlReset.apply(this, arguments);
            }

            return ControlReset;
          }()
        }, {
          key: "refreshState",
          value: function refreshState() {
            if (this.end && !this.gameStart) {
              return;
            }

            var tip = this.board.getChildByName('Header').getChildByName('tip');
            var wait = this.board.getChildByName('Header').getChildByName('wait');

            if (this.SDK.gameManager.isControler) {
              tip.active = true;
              wait.active = false;
            } else {
              wait.active = true;
              tip.active = false;
            }
          }
        }, {
          key: "gameEnd",
          value: function gameEnd() {
            if (this.end) {
              return;
            }

            this.end = true;
            var tip = this.board.getChildByName('Header').getChildByName('tip');
            var wait = this.board.getChildByName('Header').getChildByName('wait');
            this.board.getChildByName('Header').getChildByName('end').active = true;
            tip.active = false;
            wait.active = false;
          }
        }, {
          key: "showEmoji",
          value: function () {
            var _showEmoji = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this = this;

              var pos, emojiNode, roomInfo, playerList, message, promise;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!(!this.messageList || !this.messageList.length)) {
                        _context6.next = 2;
                        break;
                      }

                      return _context6.abrupt("return");

                    case 2:
                      if (!(Date.now() - this.lastUpdate < 1000)) {
                        _context6.next = 4;
                        break;
                      }

                      return _context6.abrupt("return");

                    case 4:
                      this.lastUpdate = Date.now();
                      pos = new Vec3(260, -160, 0);
                      _context6.next = 8;
                      return this.SDK.getRoomInfo();

                    case 8:
                      roomInfo = _context6.sent;
                      playerList = roomInfo.playerList;
                      message = this.messageList[0];
                      promise = new Promise(function (resolve) {
                        var path = 'Prefab/Emoji/emoji_' + (message.data + 1);
                        loader.loadRes(path, Prefab, /*#__PURE__*/function () {
                          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(err, prefab) {
                            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                              while (1) {
                                switch (_context5.prev = _context5.next) {
                                  case 0:
                                    if (!err) {
                                      _context5.next = 3;
                                      break;
                                    }

                                    return _context5.abrupt("return");

                                  case 3:
                                    emojiNode = instantiate(prefab);
                                    playerList.map(function (v) {
                                      if (v.id === message.senderId) {
                                        _this.SDK.gameManager.Util.loadRemoteImg(JSON.parse(v.customProfile).avatar_url, emojiNode.getChildByName('avatar'));
                                      }
                                    });
                                    emojiNode.getComponent(UITransform).priority = 99;
                                    emojiNode.setPosition(pos);
                                    emojiNode.setScale(new Vec3(.8, .8, .8));
                                    emojiNode.setParent(_this.board.getChildByName('Header'));
                                    tween(emojiNode).to(3, {
                                      position: {
                                        x: -218,
                                        y: -160,
                                        z: 0
                                      }
                                    }, {
                                      onComplete: function onComplete() {
                                        emojiNode.destroy();
                                      }
                                    }).start();

                                    _this.messageList.shift();

                                    resolve(true);

                                  case 12:
                                  case "end":
                                    return _context5.stop();
                                }
                              }
                            }, _callee5);
                          }));

                          return function (_x4, _x5) {
                            return _ref.apply(this, arguments);
                          };
                        }());
                      });
                      return _context6.abrupt("return", promise);

                    case 13:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function showEmoji() {
              return _showEmoji.apply(this, arguments);
            }

            return showEmoji;
          }()
        }, {
          key: "setReady",
          value: function setReady() {
            this.board.getChildByName('Header').getChildByName('ready').setPosition(new Vec3(-300, -200, 0));
            this.board.getChildByName('Header').getChildByName('ready').active = true;
            tween(this.board.getChildByName('Header').getChildByName('ready')).to(.3, {
              position: {
                x: 0,
                y: -200,
                z: 0
              },
              easing: 'sineIn'
            }, {
              onComplete: function () {
                var _this2 = this;

                this.SDK.gameManager.Util.playAudio(this.SDK.gameManager.audio_ready);
                setTimeout(function () {
                  _this2.SDK.gameManager.Util.playAudio(_this2.SDK.gameManager.audio_go);

                  tween(_this2.board.getChildByName('Header').getChildByName('ready')).to(.3, {
                    position: {
                      x: 300,
                      y: -200,
                      z: 0
                    },
                    easing: 'sineOut'
                  }, {
                    onComplete: function () {
                      var _onComplete = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                _this2.board.getChildByName('Header').getChildByName('ready').active = false;

                                _this2.changePlayer(_this2.SDK.gameManager.curActionPlayer);

                                _context7.next = 4;
                                return _this2.SDK.gameManager.changeControler(_this2.SDK.gameManager.curActionPlayer);

                              case 4:
                                _this2.gameStart = true;

                                _this2.refreshState();

                              case 6:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7);
                      }));

                      function onComplete() {
                        return _onComplete.apply(this, arguments);
                      }

                      return onComplete;
                    }()
                  }).start();
                }, 1500);
              }.bind(this)
            }).start();
          }
        }, {
          key: "changePlayer",
          value: function () {
            var _changePlayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(curAcPlayers) {
              var player, team, isController, avatar1, avatar2, avatar1Opacity, avatar2Opacity;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.SDK.getPlayerInfo();

                    case 2:
                      player = _context8.sent;
                      team = this.board.getChildByName('Header').getChildByName('team0');

                      if (this.selfSign === '2-1' || this.selfSign === '2-2') {
                        team = this.board.getChildByName('Header').getChildByName('team1');
                      }

                      isController = curAcPlayers.findIndex(function (v) {
                        return v.id === player.id;
                      }) > -1;
                      avatar1 = team.getChildByName('avatar-1');
                      avatar2 = team.getChildByName('avatar-2');
                      avatar1Opacity = avatar1.getComponent(UIOpacity);
                      avatar2Opacity = avatar2.getComponent(UIOpacity);

                      if (isController && (this.selfSign === '1-1' || this.selfSign === '2-1') || !isController && (this.selfSign === '1-2' || this.selfSign === '2-2')) {
                        avatar2.getComponent(UITransform).priority = -1;
                        avatar1.getComponent(UITransform).priority = 1;
                        tween(avatar2).to(.6, {
                          position: this.selfSign === '1-1' || this.selfSign === '1-2' ? new Vec3(-95, -46, 0) : new Vec3(95, -46, 0),
                          scale: new Vec3(.9, .9, .9)
                        }).start();
                        tween(avatar2Opacity).to(.6, {
                          opacity: 100
                        }).start();
                        tween(avatar1).to(.6, {
                          position: this.selfSign === '1-1' || this.selfSign === '1-2' ? new Vec3(-65, 30, 0) : new Vec3(65, 30, 0)
                        }).start();
                        tween(avatar1).to(.3, {
                          scale: new Vec3(1.06, 1.06, 1.06)
                        }).then(tween(avatar1).to(.3, {
                          scale: new Vec3(1, 1, 1)
                        }).start()).start();
                        tween(avatar1Opacity).to(.6, {
                          opacity: 255
                        }).start();
                      } else {
                        avatar1.getComponent(UITransform).priority = -1;
                        avatar2.getComponent(UITransform).priority = 1;
                        tween(avatar1).to(.6, {
                          position: this.selfSign === '1-1' || this.selfSign === '1-2' ? new Vec3(-95, -46, 0) : new Vec3(95, -46, 0),
                          scale: new Vec3(.9, .9, .9)
                        }).start();
                        tween(avatar1Opacity).to(.6, {
                          opacity: 100
                        }).start();
                        tween(avatar2).to(.6, {
                          position: this.selfSign === '1-1' || this.selfSign === '1-2' ? new Vec3(-65, 30, 0) : new Vec3(65, 30, 0)
                        }).start();
                        tween(avatar2).to(.3, {
                          scale: new Vec3(1.06, 1.06, 1.06)
                        }).then(tween(avatar2).to(.3, {
                          scale: new Vec3(1, 1, 1)
                        }).start());
                        tween(avatar2Opacity).to(.6, {
                          opacity: 255
                        }).start();
                      }

                    case 11:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function changePlayer(_x6) {
              return _changePlayer.apply(this, arguments);
            }

            return changePlayer;
          }()
        }, {
          key: "loadAvatar",
          value: function () {
            var _loadAvatar = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this3 = this;

              var roomInfo, otherTeam, team1, team2, _lover_id, _lover_id2;

              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.SDK.getRoomInfo();

                    case 2:
                      roomInfo = _context11.sent;
                      otherTeam = this.SDK.gameManager.otherTeam.playerList;
                      team1 = [];
                      team2 = []; // let RandomAI = Math.ceil(Math.random() * 1.99)

                      roomInfo.playerList.map(function (v) {
                        if (v.teamId === TeamColor.red) {
                          if (v.isRobot) {
                            otherTeam.map(function (o) {
                              v.name === o.name && (v.customProfile = JSON.stringify({
                                nickname: v.name,
                                avatar_url: o.avatar,
                                gender: o.gender,
                                isVip: o.isVip
                              }));
                            });
                          }

                          team1.push(v);
                        }

                        if (v.teamId === TeamColor.blue) {
                          if (v.isRobot) {
                            otherTeam.map(function (o) {
                              v.name === o.name && (v.customProfile = JSON.stringify({
                                nickname: v.name,
                                avatar_url: o.avatar,
                                gender: o.gender,
                                isVip: o.isVip
                              }));
                            });
                          }

                          team2.push(v);
                        }
                      });

                      if (team1.length && team1[0].customProfile) {
                        _lover_id = JSON.parse(team1[0].customProfile).lover_id;

                        if (_lover_id > 0 && _lover_id === JSON.parse(team1[1].customProfile).lover_id) {
                          this.board.getChildByName('Header').getChildByName('team0').getChildByName('isLover').active = true;
                        } else {
                          this.board.getChildByName('Header').getChildByName('team0').getChildByName('isLover').active = false;
                        }
                      }

                      if (team2.length && team2[0].customProfile) {
                        _lover_id2 = JSON.parse(team2[0].customProfile).lover_id;

                        if (_lover_id2 > 0 && _lover_id2 === JSON.parse(team2[1].customProfile).lover_id) {
                          this.board.getChildByName('Header').getChildByName('team1').getChildByName('isLover').active = true;
                        } else {
                          this.board.getChildByName('Header').getChildByName('team1').getChildByName('isLover').active = false;
                        }
                      }

                      team1.map( /*#__PURE__*/function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(v) {
                          var index;
                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                            while (1) {
                              switch (_context9.prev = _context9.next) {
                                case 0:
                                  _context9.next = 2;
                                  return _this3.SDK.getPlayerIndex(v.id);

                                case 2:
                                  index = _context9.sent;

                                  if (!(index === 1)) {
                                    _context9.next = 8;
                                    break;
                                  }

                                  _context9.next = 6;
                                  return _this3.SDK.gameManager.Util.setAvatar(_this3.comp1, team1[0], true);

                                case 6:
                                  _context9.next = 10;
                                  break;

                                case 8:
                                  _context9.next = 10;
                                  return _this3.SDK.gameManager.Util.setAvatar(_this3.comp2, team1[1], true);

                                case 10:
                                case "end":
                                  return _context9.stop();
                              }
                            }
                          }, _callee9);
                        }));

                        return function (_x7) {
                          return _ref2.apply(this, arguments);
                        };
                      }());
                      team2.map( /*#__PURE__*/function () {
                        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(v) {
                          var index;
                          return regeneratorRuntime.wrap(function _callee10$(_context10) {
                            while (1) {
                              switch (_context10.prev = _context10.next) {
                                case 0:
                                  _context10.next = 2;
                                  return _this3.SDK.getPlayerIndex(v.id);

                                case 2:
                                  index = _context10.sent;

                                  if (!(index === 1)) {
                                    _context10.next = 8;
                                    break;
                                  }

                                  _context10.next = 6;
                                  return _this3.SDK.gameManager.Util.setAvatar(_this3.comp3, team2[0], true);

                                case 6:
                                  _context10.next = 10;
                                  break;

                                case 8:
                                  _context10.next = 10;
                                  return _this3.SDK.gameManager.Util.setAvatar(_this3.comp4, team2[1], true);

                                case 10:
                                case "end":
                                  return _context10.stop();
                              }
                            }
                          }, _callee10);
                        }));

                        return function (_x8) {
                          return _ref3.apply(this, arguments);
                        };
                      }());

                    case 12:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function loadAvatar() {
              return _loadAvatar.apply(this, arguments);
            }

            return loadAvatar;
          }()
        }, {
          key: "changeSoundUI",
          value: function changeSoundUI(sign) {
            this.SDK.gameManager.Util.loadImg(sign ? '/Texture/UI/gaming/kaiqi@2x/spriteFrame' : '/Texture/UI/gaming/gianbi@2x/spriteFrame', this.board.getChildByName('nav').getChildByName('music'));
          }
        }]);

        return UIControl;
      }();

      _export("GamingBoard", GamingBoard = (_dec = throttle(500), _dec2 = throttle(500), _dec3 = throttle(500), _dec4 = throttle(500), _dec5 = throttle(100), _dec6 = throttle(), _dec7 = throttle(), (_class = (_temp = /*#__PURE__*/function (_BaseBoard) {
        _inherits(GamingBoard, _BaseBoard);

        function GamingBoard(scene, sdk) {
          var _this4;

          _classCallCheck(this, GamingBoard);

          _this4 = _possibleConstructorReturn(this, _getPrototypeOf(GamingBoard).call(this, scene, sdk));
          _this4.uiControl = null;
          _this4.controlTime = -100;
          _this4.AI_singal_time = 3;
          _this4.heart_time = 3;
          _this4.audio_last5s_tag = false;
          _this4._remove_document_listener = null;
          _this4.name = 'GamingBoard';
          _this4.uiControl = new UIControl(_this4.board, _this4.SDK);
          return _this4;
        }

        _createClass(GamingBoard, [{
          key: "initData",
          value: function initData() {
            _get(_getPrototypeOf(GamingBoard.prototype), "initData", this).call(this);

            this.controlTime = -100;
            this.AI_singal_time = 6;
            this.heart_time = 3;
            this.audio_last5s_tag = false;
            this.uiControl.end = false;
            this.SDK.gameManager.updateCenterNode(false);
          }
        }, {
          key: "setListener",
          value: function setListener() {
            _get(_getPrototypeOf(GamingBoard.prototype), "setListener", this).call(this);

            this.SDK.curRoom.onRecvFromGameSvr = this.onRecvFromGameSvr.bind(this);
            this.SDK.curRoom.onRecvFromClient = this.onRecvFromClient.bind(this);
            this.SDK.gameManager.timerSingal = this.onTimerSingal.bind(this);
            this.SDK.gameManager.uiRefresh = this.onUIRefresh.bind(this);
            this.SDK.gameManager.avatarSingal = this.onAvatarSingal.bind(this);
          }
          /* 各类监听方法 */

        }, {
          key: "onLeaveRoom",
          value: function () {
            var _onLeaveRoom = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(event) {
              var leavePlayerId, loverInfo;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      leavePlayerId = event.data.leavePlayerId;
                      _context12.next = 3;
                      return this.SDK.getLoverInfo();

                    case 3:
                      loverInfo = _context12.sent;

                    case 5:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));

            function onLeaveRoom(_x9) {
              return _onLeaveRoom.apply(this, arguments);
            }

            return onLeaveRoom;
          }()
        }, {
          key: "onRecvFromGameSvr",
          value: function () {
            var _onRecvFromGameSvr = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(event) {
              var data, mesType, newBoard, index, avatar_i, _avatar_i, AI_mesType, AI_mesData;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      // log('接收到实时服务器的数据', event.data);
                      data = null;
                      mesType = -1;

                      try {
                        data = event.data.data;
                        mesType = data.type;
                      } catch (error) {}

                      if (!(mesType == ServerDataType.Sync)) {
                        _context13.next = 9;
                        break;
                      }

                      log('接收到数据同步信息', data.data);
                      _context13.next = 7;
                      return this.SDK.gameManager.syncData(data.data);

                    case 7:
                      _context13.next = 44;
                      break;

                    case 9:
                      if (!(mesType == ServerDataType.ChangeControler)) {
                        _context13.next = 16;
                        break;
                      }

                      log('接收到控制权转移信息', data.data);
                      this.SDK.gameManager.changeControler(data.data.gameState.curActionPlayer);
                      this.SDK.gameManager.Player.reset();
                      this.uiControl.changePlayer(data.data.gameState.curActionPlayer);
                      _context13.next = 44;
                      break;

                    case 16:
                      if (!(mesType == ServerDataType.Map)) {
                        _context13.next = 21;
                        break;
                      }

                      log('接收到地图同步信息', data.data);
                      this.SDK.gameManager.syncMap(data.data);
                      _context13.next = 44;
                      break;

                    case 21:
                      if (!(mesType == ServerDataType.Result)) {
                        _context13.next = 34;
                        break;
                      }

                      log('接收到结算结果信息', data.data); // this.SDK.gameManager.isRunning = false;

                      this.SDK.leaveRoom();
                      this.SDK.setGroupPlayerStatus(PlayerState.NotReady);
                      newBoard = this.SDK.gameManager.ResultBoard;
                      newBoard.setResult(data.data);
                      this.ChangeBoard(newBoard);
                      this.board.getChildByName('Header').getChildByName('score').getComponent(ProgressBar).progress = 0.5;
                      this.board.getParent().getParent().getChildByName('enemy1').active = false;
                      this.board.getParent().getParent().getChildByName('enemy2').active = false;
                      _context13.next = 44;
                      break;

                    case 34:
                      if (!(mesType == ServerDataType.NetState)) {
                        _context13.next = 43;
                        break;
                      }

                      log('接收到在线状态变更信息', data.data);
                      _context13.next = 38;
                      return this.SDK.getPlayerIndex(data.data.playerId);

                    case 38:
                      index = _context13.sent;

                      if (data.data.teamId === TeamColor.red) {
                        avatar_i = this.board.getChildByName('Header').getChildByName('team0').getChildByName("avatar-".concat(index));
                        avatar_i.getChildByName('offLine').active = data.data.state === 0 ? true : false;
                        data.data.state === 0 && avatar_i.getChildByName('avatar').getComponent(Avatar).setOffline();
                        data.data.state === 1 && avatar_i.getChildByName('avatar').getComponent(Avatar).setOnline();
                      } else {
                        _avatar_i = this.board.getChildByName('Header').getChildByName('team1').getChildByName("avatar-".concat(index));
                        _avatar_i.getChildByName('offLine').active = data.data.state === 0 ? true : false;
                        data.data.state === 0 && _avatar_i.getChildByName('avatar').getComponent(Avatar).setOffline();
                        data.data.state === 1 && _avatar_i.getChildByName('avatar').getComponent(Avatar).setOnline();
                      }

                      _context13.next = 44;
                      break;

                    case 43:
                      if (mesType == ServerDataType.AI) {
                        log('接收到AI控制消息', data.data);
                        AI_mesType = data.data.type;
                        AI_mesData = data.data.data;

                        if (AI_mesType == AIDataType.StartJump) {
                          this.SDK.gameManager.OtherTeam.index = this.SDK.gameManager.otherTeam.cur_cube;
                          this.SDK.gameManager.OtherTeam.PowerEnd(AI_mesData);
                        }
                      }

                    case 44:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));

            function onRecvFromGameSvr(_x10) {
              return _onRecvFromGameSvr.apply(this, arguments);
            }

            return onRecvFromGameSvr;
          }()
        }, {
          key: "onRecvFromClient",
          value: function () {
            var _onRecvFromClient = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(event) {
              var mesData, type, data, senderId, selfInfo;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      mesData = JSON.parse(event.data.msg); // log('接收到房间消息', event.data);

                      type = mesData.type;
                      data = mesData.data;
                      senderId = event.data.sendPlayerId;

                      if (!(type == RoomDataType.Power)) {
                        _context14.next = 10;
                        break;
                      }

                      this.SDK.gameManager.Player.teammatePower();
                      _context14.next = 29;
                      break;

                    case 10:
                      if (!(type == RoomDataType.PowerEnd)) {
                        _context14.next = 15;
                        break;
                      }

                      this.SDK.gameManager.Player.teammatePowerEnd(data);
                      _context14.next = 29;
                      break;

                    case 15:
                      if (!(type == RoomDataType.EnemyPowerEnd)) {
                        _context14.next = 20;
                        break;
                      }

                      this.SDK.gameManager.OtherTeam.PowerEnd(data);
                      _context14.next = 29;
                      break;

                    case 20:
                      if (!(type == RoomDataType.emoji)) {
                        _context14.next = 28;
                        break;
                      }

                      _context14.next = 24;
                      return this.SDK.getPlayerInfo();

                    case 24:
                      selfInfo = _context14.sent;

                      if (senderId != selfInfo.id) {
                        this.uiControl.messageList.push({
                          data: data,
                          senderId: senderId
                        });
                      }

                      _context14.next = 29;
                      break;

                    case 28:
                      if (type == RoomDataType.SyncComplete) ;

                    case 29:
                    case 30:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function onRecvFromClient(_x11) {
              return _onRecvFromClient.apply(this, arguments);
            }

            return onRecvFromClient;
          }()
        }, {
          key: "onTimerSingal",
          value: function () {
            var _onTimerSingal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var _this5 = this;

              var code, dia, isRobotRoom, nowTime, time;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      if (!(!this.dead && this.SDK.gameManager.isRunning)) {
                        _context15.next = 33;
                        break;
                      }

                      this.AI_singal_time -= 0.2;
                      this.heart_time -= 0.2; // 发送心跳,保证在线状态

                      if (!(this.heart_time <= 0)) {
                        _context15.next = 14;
                        break;
                      }

                      this.heart_time = 3;
                      _context15.next = 7;
                      return this.SDK.sendToServer(ClientDataType.Heart, this.SDK.gameManager.serverTeam.id);

                    case 7:
                      code = _context15.sent;

                      if (!(code != MGOBE.ErrCode.EC_OK)) {
                        _context15.next = 14;
                        break;
                      }

                      this.SDK.gameManager.isRunning = false;
                      dia = new Dialog(this.scene, this.SDK, '已断开连接,请退出游戏重新进入', DialogButtonType.single, '知道了');
                      dia.show(this, function () {
                        _this5.SDK.curDialog.destroy();

                        window['RunNative']('exitMiniGame', {}, '', '');
                      });
                      return _context15.abrupt("return");

                    case 14:
                      _context15.next = 16;
                      return this.SDK.gameManager.Util.IsRobotRoom();

                    case 16:
                      isRobotRoom = _context15.sent;

                      if (isRobotRoom) {
                        if (this.AI_singal_time <= 0) {
                          this.AI_singal_time = 1;
                          this.SDK.sendToServer(ClientDataType.SingalAI, null);
                        }
                      } // 修改游戏运行时间UI显示


                      nowTime = this.SDK.gameManager.Util.getLocalTime();
                      time = this.SDK.gameManager.gameTime - (nowTime - this.SDK.gameManager.startTime);
                      this.SDK.gameManager.startTime;
                      this.uiControl.setTime(time);

                      if (!(time <= 0)) {
                        _context15.next = 30;
                        break;
                      }

                      this.SDK.gameManager.isRunning = false;
                      this.SDK.gameManager.isControler = false;
                      this.SDK.gameManager.timerSingal = null;
                      this.uiControl.gameEnd();
                      _context15.next = 29;
                      return this.SDK.sendToServer(ClientDataType.End, nowTime);

                    case 29:
                      this.SDK.gameManager.userTipNode.active = false;

                    case 30:
                      if (time == 5 && !this.audio_last5s_tag) {
                        this.audio_last5s_tag = true;
                        this.SDK.gameManager.Util.playAudio(this.SDK.gameManager.audio_last5s);
                      }

                      this.uiControl.showEmoji(); // 修改玩家控制倒计时

                      if (this.controlTime > 0 && !this.SDK.gameManager.Player._stat_power && !this.SDK.gameManager.Player._stat_jump) {
                        this.controlTime -= .2;
                      } else if (this.controlTime <= 0 && this.controlTime >= -10) {
                        this.controlTime = -100;
                        this.SDK.gameManager.isControler = false;
                        this.onAvatarSingal(true, false);
                        this.onUIRefresh();
                        this.SDK.sendToServer(ClientDataType.ChangeControler);
                      }

                    case 33:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));

            function onTimerSingal() {
              return _onTimerSingal.apply(this, arguments);
            }

            return onTimerSingal;
          }()
        }, {
          key: "refreshScore",
          value: function refreshScore() {
            var _score1 = 0;
            var _score2 = 0;
            var scoreEl = this.board.getChildByName('Header').getChildByName('score');
            this.SDK.gameManager.serverTeam.playerList.map(function (v) {
              _score1 += v.score;
            });
            this.SDK.gameManager.otherTeam.playerList.map(function (v) {
              _score2 += v.score;
            });
            var rate1;
            if (_score1 + _score2 === 0) rate1 = 0.5;else {
              rate1 = _score1 / (_score1 + _score2);
            }
            rate1 < 0.2 && (rate1 = 0.2);
            rate1 > 0.8 && (rate1 = 0.8);
            if (rate1 > 0.24 && rate1 < 0.5) rate1 *= 0.85;
            if (rate1 > 0.5 && rate1 < 0.6) rate1 *= 1.2;

            if (this.SDK.gameManager.serverTeam.id == TeamColor.red) {
              tween(scoreEl.getComponent(ProgressBar)).to(.3, {
                progress: rate1
              }).start();
              scoreEl.getChildByName('redScore').getComponent(Label).string = "".concat(_score1, "\u5206");
              scoreEl.getChildByName('blueScore').getComponent(Label).string = "".concat(_score2, "\u5206");
            } else {
              tween(scoreEl.getComponent(ProgressBar)).to(.3, {
                progress: 1 - rate1
              }).start();
              scoreEl.getChildByName('redScore').getComponent(Label).string = "".concat(_score2, "\u5206");
              scoreEl.getChildByName('blueScore').getComponent(Label).string = "".concat(_score1, "\u5206");
            }
          }
        }, {
          key: "onUIRefresh",
          value: function onUIRefresh() {
            // 根据控制状态修改文字提示
            this.uiControl.refreshState(); // 根据队伍数据更新得分显示

            this.refreshScore();
          }
        }, {
          key: "onAvatarSingal",
          value: function onAvatarSingal(isSelf, isStart) {
            if (isSelf) {
              if (isStart) {
                this.controlTime = 5.;
                this.uiControl.selfAvatar.getComponent(Avatar).timeStart();
              } else {
                this.controlTime = -100.;
                this.uiControl.selfAvatar.getComponent(Avatar).reset();
              }
            } else {
              if (isStart) {
                this.uiControl.teammaterAvatar.getComponent(Avatar).timeStart();
              } else {
                this.uiControl.teammaterAvatar.getComponent(Avatar).reset();
              }
            }
          }
          /* ------------------ */

        }, {
          key: "InitEvent",
          value: function () {
            var _InitEvent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var interaction, _call;

              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _get(_getPrototypeOf(GamingBoard.prototype), "InitEvent", this).call(this);

                      interaction = this.board.getChildByName('Interaction-ex');
                      interaction.getChildByName('emoji_1').on(SystemEventType.TOUCH_END, this.sendEmoji_1, this);
                      interaction.getChildByName('emoji_2').on(SystemEventType.TOUCH_END, this.sendEmoji_2, this);
                      interaction.getChildByName('emoji_3').on(SystemEventType.TOUCH_END, this.sendEmoji_3, this);
                      interaction.getChildByName('emoji_4').on(SystemEventType.TOUCH_END, this.sendEmoji_4, this);
                      this.board.getChildByName('nav').getChildByName('music').on(SystemEventType.TOUCH_END, this.switchSound, this);
                      this.board.getChildByName('nav').getChildByName('back').on(SystemEventType.TOUCH_END, this.leave, this);
                      _call = this.visibilityChange.bind(this);
                      document.addEventListener('visibilitychange', _call, true);

                      this._remove_document_listener = function () {
                        document.removeEventListener('visibilitychange', _call, true);
                      };

                    case 11:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));

            function InitEvent() {
              return _InitEvent.apply(this, arguments);
            }

            return InitEvent;
          }()
        }, {
          key: "destroy",
          value: function destroy() {
            // this.SDK.gameManager.timerSingal = undefined;
            _get(_getPrototypeOf(GamingBoard.prototype), "destroy", this).call(this);

            var interaction = this.board.getChildByName('Interaction-ex');
            interaction.getChildByName('emoji_1').off(SystemEventType.TOUCH_END);
            interaction.getChildByName('emoji_2').off(SystemEventType.TOUCH_END);
            interaction.getChildByName('emoji_3').off(SystemEventType.TOUCH_END);
            interaction.getChildByName('emoji_4').off(SystemEventType.TOUCH_END);

            this._remove_document_listener();
          }
        }, {
          key: "sendEmoji_1",
          value: function () {
            var _sendEmoji_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var selfInfo;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      this.SDK.gameManager.Util.callTDGA(StatisticsKey.game_start_emotion);
                      _context17.next = 3;
                      return this.SDK.getPlayerInfo();

                    case 3:
                      selfInfo = _context17.sent;
                      this.uiControl.messageList.push({
                        data: EmojiType.Angry,
                        senderId: selfInfo.id
                      });
                      this.SDK.sendToRoom(RoomDataType.emoji, EmojiType.Angry);

                    case 6:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));

            function sendEmoji_1() {
              return _sendEmoji_.apply(this, arguments);
            }

            return sendEmoji_1;
          }()
        }, {
          key: "sendEmoji_2",
          value: function () {
            var _sendEmoji_2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var selfInfo;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      this.SDK.gameManager.Util.callTDGA(StatisticsKey.game_start_emotion);
                      _context18.next = 3;
                      return this.SDK.getPlayerInfo();

                    case 3:
                      selfInfo = _context18.sent;
                      this.uiControl.messageList.push({
                        data: EmojiType.Worship,
                        senderId: selfInfo.id
                      });
                      this.SDK.sendToRoom(RoomDataType.emoji, EmojiType.Worship);

                    case 6:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));

            function sendEmoji_2() {
              return _sendEmoji_2.apply(this, arguments);
            }

            return sendEmoji_2;
          }()
        }, {
          key: "sendEmoji_3",
          value: function () {
            var _sendEmoji_3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var selfInfo;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      this.SDK.gameManager.Util.callTDGA(StatisticsKey.game_start_emotion);
                      _context19.next = 3;
                      return this.SDK.getPlayerInfo();

                    case 3:
                      selfInfo = _context19.sent;
                      this.uiControl.messageList.push({
                        data: EmojiType.Unfortunately,
                        senderId: selfInfo.id
                      });
                      this.SDK.sendToRoom(RoomDataType.emoji, EmojiType.Unfortunately);

                    case 6:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));

            function sendEmoji_3() {
              return _sendEmoji_3.apply(this, arguments);
            }

            return sendEmoji_3;
          }()
        }, {
          key: "sendEmoji_4",
          value: function () {
            var _sendEmoji_4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var selfInfo;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      this.SDK.gameManager.Util.callTDGA(StatisticsKey.game_start_emotion);
                      _context20.next = 3;
                      return this.SDK.getPlayerInfo();

                    case 3:
                      selfInfo = _context20.sent;
                      this.uiControl.messageList.push({
                        data: EmojiType.Applause,
                        senderId: selfInfo.id
                      });
                      this.SDK.sendToRoom(RoomDataType.emoji, EmojiType.Applause);

                    case 6:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));

            function sendEmoji_4() {
              return _sendEmoji_4.apply(this, arguments);
            }

            return sendEmoji_4;
          }()
        }, {
          key: "switchSound",
          value: function switchSound() {
            this.SDK.gameManager.Setting.switch_audio = !this.SDK.gameManager.Setting.switch_audio;
            this.uiControl.changeSoundUI(this.SDK.gameManager.Setting.switch_audio);
            this.SDK.gameManager.Util.callTDGA(StatisticsKey.game_voice_turn);
          }
        }, {
          key: "leave",
          value: function leave() {
            var _this6 = this;

            var dialog = new Dialog(this.scene, this.SDK, '退出本局游戏则视为认输，是否退出该局游戏？', DialogButtonType.multiple, '退出认输', '再想想');
            dialog.show(this, this.confirmLeave, function () {
              _this6.SDK.curDialog.destroy();
            });
          }
        }, {
          key: "confirmLeave",
          value: function confirmLeave() {
            if (this.SDK.curDialog.dead) return;
            this.SDK.curDialog.destroy();
            this.ChangeBoard(this.SDK.gameManager.MainBoard);
          }
        }, {
          key: "visibilityChange",
          value: function visibilityChange() {
            if (document.visibilityState === 'hidden') {
              this.SDK.sendToServer(ClientDataType.ChangeNetState, NetState.Offline);
            } else {
              this.SDK.sendToServer(ClientDataType.ChangeNetState, NetState.Online);
              this.SDK.sendToServer(ClientDataType.RequestSyncData, {
                team: this.SDK.gameManager.serverTeam
              });
            }
          }
        }]);

        return GamingBoard;
      }(BaseBoard), _temp), (_applyDecoratedDescriptor(_class.prototype, "sendEmoji_1", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "sendEmoji_1"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sendEmoji_2", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "sendEmoji_2"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sendEmoji_3", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "sendEmoji_3"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sendEmoji_4", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "sendEmoji_4"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "switchSound", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "switchSound"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "leave", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "leave"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "confirmLeave", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "confirmLeave"), _class.prototype)), _class)));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/Dialog/RulesDialog.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Const.js", "../../DeployInfo.js"], function (_export, _context3) {
  "use strict";

  var _createClass, _classCallCheck, _asyncToGenerator, cclegacy, tween, Vec3, loader, Prefab, instantiate, Label, SystemEventType, DeployInfo, RulesDialog;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _asyncToGenerator = _virtual_rollupPluginBabelHelpersJs.asyncToGenerator;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      loader = _cc.loader;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      SystemEventType = _cc.SystemEventType;
    }, function (_ConstJs) {}, function (_DeployInfoJs) {
      DeployInfo = _DeployInfoJs.DeployInfo;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f1725lk6shAIZvaTtd6I/DQ", "RulesDialog", undefined);

      _export("RulesDialog", RulesDialog = /*#__PURE__*/function () {
        function RulesDialog(scene, SDK) {
          _classCallCheck(this, RulesDialog);

          this.scene = null;
          this.node = null;
          this.SDK = null;
          this.dead = false;
          this.scene = scene;
          this.SDK = SDK;
        }

        _createClass(RulesDialog, [{
          key: "InitBoard",
          value: function () {
            var _InitBoard = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var promise;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      promise = new Promise(function (resolve) {
                        loader.loadRes('Prefab/Dialog/RulesDialog', Prefab, function (err, prefab) {
                          if (err) {
                            resolve(false);
                          } else {
                            _this2.node = instantiate(prefab);

                            _this2.scene.getChildByName('UI').addChild(_this2.node);

                            _this2.node.setSiblingIndex(100);

                            resolve(true);
                          }
                        });
                      });
                      return _context.abrupt("return", promise);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            function InitBoard() {
              return _InitBoard.apply(this, arguments);
            }

            return InitBoard;
          }()
        }, {
          key: "destroy",
          value: function destroy() {
            if (!this.dead) {
              if (!this.node) {
                this.SDK = null;
                return;
              }

              this.dead = true;
              this.scene = null;
              tween(this.node.getChildByName('background')).to(.3, {
                scale: new Vec3(0, 0, 0)
              }, {
                onComplete: function () {
                  this.SDK.curDialog = null;
                  this.SDK = null;
                  this.node.destroy();
                  this.node = null;
                }.bind(this)
              }).start();
            }
          }
        }, {
          key: "show",
          value: function () {
            var _show = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_this) {
              var _this3 = this;

              var b, exit_button;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(this.SDK.curDialog == null)) {
                        _context2.next = 14;
                        break;
                      }

                      this.SDK.curDialog = this;
                      _context2.next = 4;
                      return this.InitBoard();

                    case 4:
                      b = _context2.sent;

                      if (b) {
                        _context2.next = 8;
                        break;
                      }

                      this.destroy();
                      return _context2.abrupt("return");

                    case 8:
                      // UI的修改与展示
                      exit_button = this.node.getChildByName('background').getChildByName('exit');
                      this.node.getChildByName('background').getChildByName('version').getComponent(Label).string = 'v.' + DeployInfo.version;
                      this.node.getChildByName('background').setScale(new Vec3(0, 0, 0));
                      this.node.active = true;
                      tween(this.node.getChildByName('background')).to(.3, {
                        scale: new Vec3(.5, .5, .5)
                      }, {
                        easing: 'sineOut'
                      }).start(); // 事件回调绑定

                      exit_button.on(SystemEventType.TOUCH_END, function () {
                        if (_this3.SDK.curDialog.dead) {
                          return;
                        }

                        _this3.SDK.curDialog.destroy();
                      }, _this);

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function show(_x) {
              return _show.apply(this, arguments);
            }

            return show;
          }()
        }]);

        return RulesDialog;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/Board/MainBoard.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Config.js", "../../Const.js", "../../Util.js", "../Dialog/Dialog.js", "./BaseBoard.js", "../Dialog/RulesDialog.js"], function (_export, _context11) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, _get, _asyncToGenerator, cclegacy, _decorator, SystemEventType, tween, Vec3, Label, UseTeaching, StatisticsKey, log, NetState, DialogButtonType, throttle, Dialog, BaseBoard, RulesDialog, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, ccclass, property, UIControl, MainBoard;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
      _asyncToGenerator = _virtual_rollupPluginBabelHelpersJs.asyncToGenerator;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      SystemEventType = _cc.SystemEventType;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Label = _cc.Label;
    }, function (_ConfigJs) {
      UseTeaching = _ConfigJs.UseTeaching;
    }, function (_ConstJs) {
      StatisticsKey = _ConstJs.StatisticsKey;
      log = _ConstJs.log;
      NetState = _ConstJs.NetState;
      DialogButtonType = _ConstJs.DialogButtonType;
    }, function (_UtilJs) {
      throttle = _UtilJs.throttle;
    }, function (_DialogDialogJs) {
      Dialog = _DialogDialogJs.Dialog;
    }, function (_BaseBoardJs) {
      BaseBoard = _BaseBoardJs.BaseBoard;
    }, function (_DialogRulesDialogJs) {
      RulesDialog = _DialogRulesDialogJs.RulesDialog;
    }],
    execute: function () {
      cclegacy._RF.push({}, "253a4372BVD94kGBxFcROCR", "MainBoard", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      UIControl = /*#__PURE__*/function () {
        // 下面有子节点 total(显示情侣总局数) victory(情侣胜利总局数)
        function UIControl(board, sdk) {
          _classCallCheck(this, UIControl);

          this.board = board;
          this.SDK = sdk;
        }

        _createClass(UIControl, [{
          key: "initUI",
          value: function () {
            var _initUI = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(board) {
              var headNode, url, last_login, now;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.board = board;
                      _context.next = 3;
                      return this.initUserData();

                    case 3:
                      headNode = this.board.getChildByName('Header');
                      this.weekDataNode = headNode.getChildByName('career').getChildByName('weekData');
                      this.loverDataNode = headNode.getChildByName('top').getChildByName('bgHistory');
                      this.qqPopup = this.board.getChildByName("qq");

                      if (this.SDK.gameManager.PlayerData.gender === 1) {
                        this.selfAvatarNode = headNode.getChildByName('top').getChildByName('Avatar').getChildByName('Sprite');
                        this.otherAvatarNode = headNode.getChildByName('top').getChildByName('Avatar2').getChildByName('Sprite');
                      } else {
                        this.selfAvatarNode = headNode.getChildByName('top').getChildByName('Avatar2').getChildByName('Sprite');
                        this.otherAvatarNode = headNode.getChildByName('top').getChildByName('Avatar').getChildByName('Sprite');
                      }

                      if (!this.SDK.gameManager.PlayerData.isVip) {
                        headNode.getChildByName('top').getChildByName('Avatar').getChildByName('isVip').active = false;
                        headNode.getChildByName('top').getChildByName('Avatar2').getChildByName('isVip').active = false;
                      } else {
                        headNode.getChildByName('top').getChildByName('Avatar').getChildByName('isVip').active = true;
                        headNode.getChildByName('top').getChildByName('Avatar2').getChildByName('isVip').active = true;
                      }

                      this.SDK.gameManager.Util.loadRemoteImg(this.SDK.gameManager.PlayerData.avatar_url, this.selfAvatarNode);

                      if (this.SDK.gameManager.loverData && this.SDK.gameManager.loverData.avatar) {
                        url = "https://".concat(this.SDK.gameManager.loverData.avatar.host, "/").concat(this.SDK.gameManager.loverData.avatar.path);
                        this.SDK.gameManager.Util.loadRemoteImg(url, this.otherAvatarNode);
                      }

                      this.weekDataNode.getChildByName('num').getChildByName('value').getComponent(Label).string = "".concat(this.SDK.gameManager.PlayerData.playCountWeek);
                      this.weekDataNode.getChildByName('rate').getChildByName('value').getComponent(Label).string = this.SDK.gameManager.PlayerData.winCountWeek ? "".concat((this.SDK.gameManager.PlayerData.winCountWeek / this.SDK.gameManager.PlayerData.playCountWeek * 100).toFixed(0), "%") : '0%';
                      this.weekDataNode.getChildByName('mvp').getChildByName('value').getComponent(Label).string = "".concat(this.SDK.gameManager.PlayerData.mvpCountWeek);
                      this.loverDataNode.getChildByName('total').getComponent(Label).string = "".concat(this.SDK.gameManager.PlayerData.loverCount);
                      this.loverDataNode.getChildByName('victory').getComponent(Label).string = "".concat(this.SDK.gameManager.PlayerData.loverWinCount);
                      last_login = this.SDK.gameManager.Util.localGet("mg-jump-last-login");
                      now = this.SDK.gameManager.Util.getLocalDate();

                      if (!(last_login && last_login >= now)) {
                        _context.next = 20;
                        break;
                      }

                      return _context.abrupt("return");

                    case 20:
                      this.SDK.gameManager.Util.localSet("mg-jump-last-login", now);
                      this.showQQPopup(true);

                    case 22:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function initUI(_x) {
              return _initUI.apply(this, arguments);
            }

            return initUI;
          }()
        }, {
          key: "initData",
          value: function initData() {}
        }, {
          key: "showQQPopup",
          value: function showQQPopup(show) {
            this.qqPopup.active = show;
          }
        }, {
          key: "initUserData",
          value: function () {
            var _initUserData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var gameInfo;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.SDK.gameManager.Util.http(this.SDK.gameManager.Config.serverURL.gameInit, "GET", {}, false, this.SDK.gameManager.AccessToken);

                    case 2:
                      gameInfo = _context2.sent;
                      this.SDK.gameManager.PlayerData.loverCount = gameInfo.lover_match_info.game_match_count ? gameInfo.lover_match_info.game_match_count : 0;
                      this.SDK.gameManager.PlayerData.loverWinCount = gameInfo.lover_match_info.win_count ? gameInfo.lover_match_info.win_count : 0;
                      this.SDK.gameManager.PlayerData.tacitScore = gameInfo.lover_match_info.tacit_score ? gameInfo.lover_match_info.tacit_score : 0;
                      this.SDK.gameManager.PlayerData.playCountWeek = gameInfo.user_match_info.game_match_count ? gameInfo.user_match_info.game_match_count : 0;
                      this.SDK.gameManager.PlayerData.mvpCountWeek = gameInfo.user_match_info.mvp_count ? gameInfo.user_match_info.mvp_count : 0;
                      this.SDK.gameManager.PlayerData.winCountWeek = gameInfo.user_match_info.win_count ? gameInfo.user_match_info.win_count : 0;
                      this.board.getChildByName('Header').getChildByName('top').getChildByName('Lv').getComponent(Label).string = "\u604B\u4EBALv.".concat(this.SDK.gameManager.Util.loverLevel(this.SDK.gameManager.PlayerData.tacitScore));
                      this.board.getChildByName('Header').getChildByName('top').getChildByName('LvHeart').getChildByName('Lv').getComponent(Label).string = "".concat(this.SDK.gameManager.Util.loverLevel(this.SDK.gameManager.PlayerData.tacitScore));

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function initUserData() {
              return _initUserData.apply(this, arguments);
            }

            return initUserData;
          }()
        }]);

        return UIControl;
      }();

      _export("MainBoard", MainBoard = (_dec = throttle(), _dec2 = throttle(500), _dec3 = throttle(500), _dec4 = throttle(), _dec5 = throttle(), _dec6 = throttle(200), _dec7 = throttle(200), (_class = /*#__PURE__*/function (_BaseBoard) {
        _inherits(MainBoard, _BaseBoard);

        function MainBoard(scene, sdk) {
          var _this;

          _classCallCheck(this, MainBoard);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(MainBoard).call(this, scene, sdk));
          _this.name = 'MainBoard';
          _this.uiControl = new UIControl(_this.board, _this.SDK);
          return _this;
        }

        _createClass(MainBoard, [{
          key: "setListener",
          value: function setListener() {
            this.SDK.Room.onCancelMatch = this.onCancelMatch.bind(this);
            this.SDK.Room.onMatch = this.onMatch.bind(this);
          }
        }, {
          key: "InitEvent",
          value: function () {
            var _InitEvent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var button_single, button_lover, button_exit, button_rule, button_feedback, popup_qq_copy, popup_qq_exit;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _get(_getPrototypeOf(MainBoard.prototype), "InitEvent", this).call(this);

                      button_single = this.board.getChildByName('MatchButton').getChildByName('single');
                      button_lover = this.board.getChildByName('MatchButton').getChildByName('lover');
                      button_exit = this.board.getChildByName('Nav').getChildByName('exit');
                      button_rule = this.board.getChildByName('Nav').getChildByName('rules');
                      button_feedback = this.board.getChildByName('Nav').getChildByName('feedback');
                      log("qqNode", this.board.getChildByName("qq"));
                      popup_qq_copy = this.board.getChildByName('qq').getChildByName("btnCopy");
                      popup_qq_exit = this.board.getChildByName('qq').getChildByName("btnExit");
                      button_single.on(SystemEventType.TOUCH_END, this.clickSingleMatch, this);
                      button_lover.on(SystemEventType.TOUCH_END, this.clickLoverMatch, this);
                      button_rule.on(SystemEventType.TOUCH_END, this.clickRules, this);
                      button_feedback.on(SystemEventType.TOUCH_END, this.clickFeedback, this);
                      button_exit.on(SystemEventType.TOUCH_END, this.quitGame, this);
                      popup_qq_copy.on(SystemEventType.TOUCH_END, this.clickPopupQQCopy, this);
                      popup_qq_exit.on(SystemEventType.TOUCH_END, this.clickPopupQQExit, this);

                    case 16:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function InitEvent() {
              return _InitEvent.apply(this, arguments);
            }

            return InitEvent;
          }()
        }, {
          key: "destroy",
          value: function destroy() {
            _get(_getPrototypeOf(MainBoard.prototype), "destroy", this).call(this);

            var button_single = this.board.getChildByName('MatchButton').getChildByName('single');
            var button_lover = this.board.getChildByName('MatchButton').getChildByName('lover');
            var button_exit = this.board.getChildByName('Nav').getChildByName('exit');
            var button_rule = this.board.getChildByName('Nav').getChildByName('rules');
            var popup_qq_copy = this.board.getChildByName('qq').getChildByName("btnCopy");
            var popup_qq_exit = this.board.getChildByName('qq').getChildByName("btnExit");
            var button_feedback = this.board.getChildByName('Nav').getChildByName('feedback');
            button_single.off(SystemEventType.TOUCH_END);
            button_lover.off(SystemEventType.TOUCH_END);
            button_exit.off(SystemEventType.TOUCH_END);
            button_rule.off(SystemEventType.TOUCH_END);
            button_feedback.off(SystemEventType.TOUCH_END, this.clickFeedback, this);
            popup_qq_copy.off(SystemEventType.TOUCH_END, this.clickPopupQQCopy, this);
            popup_qq_exit.off(SystemEventType.TOUCH_END, this.clickPopupQQExit, this);
          }
        }, {
          key: "onCancelMatch",
          value: function onCancelMatch(event) {}
        }, {
          key: "onMatch",
          value: function onMatch(event) {} // 教学流程,点击匹配时进行判断,如果为首次游戏(游戏对局数为0)则自动进入

        }, {
          key: "teachProcess",
          value: function () {
            var _teachProcess = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!((this.SDK.gameManager.PlayerData.totalCount <= 1 || UseTeaching) && !this.SDK.gameManager.isTeached)) {
                        _context4.next = 6;
                        break;
                      }

                      this.SDK.gameManager.Util.callTDGA(StatisticsKey.Guidance_appear_clicked);
                      _context4.next = 5;
                      return this.ChangeBoard(this.SDK.gameManager.TeachingBoard);

                    case 5:
                      return _context4.abrupt("return", false);

                    case 6:
                      return _context4.abrupt("return", true);

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function teachProcess() {
              return _teachProcess.apply(this, arguments);
            }

            return teachProcess;
          }()
        }, {
          key: "clickSingleMatch",
          value: function () {
            var _clickSingleMatch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var code;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.SDK.gameManager.isQuickMatching = true;
                      _context5.next = 4;
                      return this.teachProcess();

                    case 4:
                      if (_context5.sent) {
                        _context5.next = 6;
                        break;
                      }

                      return _context5.abrupt("return");

                    case 6:
                      this.SDK.gameManager.Util.callTDGA(StatisticsKey.main_quick_clicked);
                      _context5.next = 9;
                      return this.SDK.matchingSingle();

                    case 9:
                      code = _context5.sent;

                      if (!(code == MGOBE.ErrCode.EC_OK)) {
                        _context5.next = 17;
                        break;
                      }

                      _context5.next = 15;
                      return this.ChangeBoard(this.SDK.gameManager.MatchingBoard);

                    case 15:
                      _context5.next = 21;
                      break;

                    case 17:
                      this.SDK.cancelMatchinig();
                      this.SDK.leaveGroup();
                      this.SDK.leaveRoom();

                    case 21:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function clickSingleMatch() {
              return _clickSingleMatch.apply(this, arguments);
            }

            return clickSingleMatch;
          }()
        }, {
          key: "clickLoverMatch",
          value: function () {
            var _clickLoverMatch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var loverGroupId, _code, teammaterInfo, code;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.SDK.gameManager.isQuickMatching = false;
                      _context6.next = 3;
                      return this.teachProcess();

                    case 3:
                      if (_context6.sent) {
                        _context6.next = 5;
                        break;
                      }

                      return _context6.abrupt("return");

                    case 5:
                      /*
                      增加一个新的流程:从后台接口获取另一半上一次所创建的队组ID,尝试加入这个队组,
                      如果失败或者另一半在队组内的状态为掉线状态则判定为加入失败,此时自己创建一个队组,并将队组ID上报.
                      */
                      this.SDK.gameManager.Util.callTDGA(StatisticsKey.main_couple_clicked);
                      _context6.next = 8;
                      return this.SDK.gameManager.Util.http(this.SDK.gameManager.Config.serverURL.group, 'GET', null, false, this.SDK.gameManager.AccessToken);

                    case 8:
                      loverGroupId = _context6.sent;

                      if (!loverGroupId) {
                        _context6.next = 22;
                        break;
                      }

                      loverGroupId = loverGroupId['other_group_id'];
                      _context6.next = 14;
                      return this.SDK.joinGroup(loverGroupId);

                    case 14:
                      _code = _context6.sent;

                      if (!(_code === MGOBE.ErrCode.EC_OK)) {
                        _context6.next = 22;
                        break;
                      }

                      _context6.next = 18;
                      return this.SDK.getTeammate();

                    case 18:
                      teammaterInfo = _context6.sent;

                      if (!(teammaterInfo.commonNetworkState != NetState.Offline)) {
                        _context6.next = 22;
                        break;
                      }

                      this.ChangeBoard(this.SDK.gameManager.WaitLoverBoard);
                      return _context6.abrupt("return");

                    case 22:
                      _context6.next = 24;
                      return this.SDK.createGroup();

                    case 24:
                      code = _context6.sent;

                      if (code === 0) {
                        this.showInvite();
                      } else {
                        this.SDK.leaveGroup();
                      }

                    case 26:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function clickLoverMatch() {
              return _clickLoverMatch.apply(this, arguments);
            }

            return clickLoverMatch;
          }()
        }, {
          key: "clickRules",
          value: function () {
            var _clickRules = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var dia;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (!this.SDK.curDialog) {
                        this.SDK.gameManager.Util.callTDGA(StatisticsKey.main_rule_clicked);
                        dia = new RulesDialog(this.scene, this.SDK);
                        dia.show(this);
                      }

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function clickRules() {
              return _clickRules.apply(this, arguments);
            }

            return clickRules;
          }()
        }, {
          key: "clickFeedback",
          value: function clickFeedback() {
            // window.location.href = `https://kitty.didiapp.com/lovenote/feedback`
            this.uiControl.showQQPopup(true);
          }
        }, {
          key: "clickPopupQQCopy",
          value: function clickPopupQQCopy() {
            this.SDK.gameManager.Util.copyStr("571341045");
            this.SDK.gameManager.showToast('复制成功', 2);
          }
        }, {
          key: "clickPopupQQExit",
          value: function clickPopupQQExit() {
            this.uiControl.showQQPopup(false);
          }
        }, {
          key: "quitGame",
          value: function () {
            var _quitGame = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this2 = this;

              var dia;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.SDK.gameManager.Util.callTDGA(StatisticsKey.game_leave_clicked);
                      dia = new Dialog(this.scene, this.SDK, '确定退出游戏？', DialogButtonType.multiple);
                      _context8.next = 4;
                      return dia.show(this, function () {
                        if (_this2.SDK.curDialog.dead) {
                          return;
                        }

                        _this2.SDK.gameManager.Util.callTDGA(StatisticsKey.game_leave_confirmed);

                        _this2.SDK.gameManager.Util.callTDGA(StatisticsKey.leave);

                        _this2.SDK.curDialog.destroy();

                        window['RunNative']('exitMiniGame', {}, '', '');
                      }, function () {
                        if (_this2.SDK.curDialog.dead) {
                          return;
                        }

                        _this2.SDK.curDialog.destroy();
                      });

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function quitGame() {
              return _quitGame.apply(this, arguments);
            }

            return quitGame;
          }()
        }, {
          key: "showInvite",
          value: function showInvite() {
            this.SDK.gameManager.Util.callTDGA(StatisticsKey.game_share_clicked);
            var sharePlatform = this.board.getChildByName('sharePlatform');
            sharePlatform.getChildByName('content').setPosition(0, -240, 0);
            sharePlatform.active = true;
            tween(sharePlatform.getChildByName('content')).to(.3, {
              position: new Vec3(0, -38, 0)
            }).start();
            sharePlatform.getChildByName('content').getChildByName('inApp').on(SystemEventType.TOUCH_END, this.shareToMessage, this);
            sharePlatform.getChildByName('content').getChildByName('weChat').on(SystemEventType.TOUCH_END, this.shareToWX, this);
            sharePlatform.getChildByName('content').getChildByName('QQ').on(SystemEventType.TOUCH_END, this.shareToQQ, this);
            sharePlatform.getChildByName('content').getChildByName('close').on(SystemEventType.TOUCH_END, this.maskClose, this);
            sharePlatform.getChildByName('maskBg').on(SystemEventType.TOUCH_END, this.maskClose, this);
          }
        }, {
          key: "shareToMessage",
          value: function shareToMessage() {
            var _this3 = this;

            var ua = navigator.userAgent.toLowerCase();
            var isAndroid = ua.indexOf('android') > -1;

            window['toldTA'] = function () {
              _this3.close();

              _this3.SDK.gameManager.Util.callTDGA(StatisticsKey.game_share_chat);

              isAndroid ? '' : _this3.SDK.gameManager.showToast('发送成功', 2);
            };

            window['sendLinkFail'] = function () {
              _this3.close();

              isAndroid ? '' : _this3.SDK.gameManager.showToast('邀请失败', 2);
            };

            window['RunNative']('shareURLToPlatform', {
              "url": "lianaiji://open.minigame?name=jump&group=".concat(this.SDK.curGroup.groupInfo.id),
              "title": "双人跳一跳",
              "content": '亲爱的，和我一起玩双人跳一跳吧',
              "imgUrl": "https://cdn1.didiapp.com/jump/banner.png",
              "source": "双人跳一跳",
              "platform": ["chat"]
            }, 'toldTA', 'sendLinkFail');
          }
        }, {
          key: "shareToWX",
          value: function shareToWX() {
            var _this4 = this;

            window['wxSuc'] = function () {
              _this4.close();

              _this4.SDK.gameManager.Util.callTDGA(StatisticsKey.game_share_wechat);
            };

            window['wxErr'] = function () {
              _this4.close();
            };

            var avatar = this.SDK.gameManager.PlayerData.avatar_url;
            window['RunNative']('shareURLToPlatform', {
              "url": "https://dev-kitty.didiapp.com/lovenote/miniGameinvite?from=jump&group=".concat(this.SDK.curGroup.groupInfo.id, "&avatar=").concat(avatar),
              "title": "邀你一起玩双人跳一跳！点击链接进入游戏",
              "content": '我们组队，和其他情侣PK，相信我们一定是最有默契的情侣！',
              "imgUrl": "https://cdn1.didiapp.com/jump/banner.png",
              "source": "恋爱记",
              "platform": ["wxsession"]
            }, 'wxSuc', 'wxErr');
            setTimeout(function () {
              if (_this4.board.getChildByName('sharePlatform').active === true) {
                _this4.close();
              }
            }, 500);
          }
        }, {
          key: "shareToQQ",
          value: function shareToQQ() {
            var _this5 = this;

            window['qqSuc'] = function () {
              _this5.close();

              _this5.SDK.gameManager.Util.callTDGA(StatisticsKey.game_share_QQ);
            };

            window['qqErr'] = function () {
              _this5.close();
            };

            var avatar = this.SDK.gameManager.PlayerData.avatar_url;
            window['RunNative']('shareURLToPlatform', {
              "url": "https://dev-kitty.didiapp.com/lovenote/miniGameinvite?from=jump&group=".concat(this.SDK.curGroup.groupInfo.id, "&avatar=").concat(avatar),
              "title": "邀你一起玩双人跳一跳！点击链接进入游戏",
              "content": '我们组队，和其他情侣PK，相信我们一定是最有默契的情侣！',
              "imgUrl": "https://cdn1.didiapp.com/jump/banner.png",
              "source": "恋爱记",
              "platform": ["qq"]
            }, 'qqSuc', 'qqErr');
            setTimeout(function () {
              if (_this5.board.getChildByName('sharePlatform').active === true) {
                _this5.close();
              }
            }, 500);
          }
        }, {
          key: "close",
          value: function () {
            var _close = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var sharePlatform, groupInfo;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      sharePlatform = this.board.getChildByName('sharePlatform');
                      sharePlatform.getChildByName('content').getChildByName('inApp').off(SystemEventType.TOUCH_END);
                      sharePlatform.getChildByName('content').getChildByName('weChat').off(SystemEventType.TOUCH_END);
                      sharePlatform.getChildByName('content').getChildByName('QQ').off(SystemEventType.TOUCH_END);
                      sharePlatform.getChildByName('content').getChildByName('close').off(SystemEventType.TOUCH_END);
                      sharePlatform.getChildByName('maskBg').off(SystemEventType.TOUCH_END);
                      _context9.next = 8;
                      return this.SDK.getGroupInfo();

                    case 8:
                      groupInfo = _context9.sent;
                      this.SDK.gameManager.Util.http(this.SDK.gameManager.Config.serverURL.group, 'POST', {
                        'group_id': groupInfo.id
                      }, false, this.SDK.gameManager.AccessToken);
                      _context9.next = 12;
                      return this.ChangeBoard(this.SDK.gameManager.WaitLoverBoard);

                    case 12:
                      sharePlatform.active = false;

                    case 13:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function close() {
              return _close.apply(this, arguments);
            }

            return close;
          }()
        }, {
          key: "maskClose",
          value: function () {
            var _maskClose = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var sharePlatform;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      this.SDK.gameManager.Util.callTDGA(StatisticsKey.main_wait_invite_cancel);
                      sharePlatform = this.board.getChildByName('sharePlatform');
                      sharePlatform.active = false;
                      sharePlatform.getChildByName('content').getChildByName('inApp').off(SystemEventType.TOUCH_END);
                      sharePlatform.getChildByName('content').getChildByName('weChat').off(SystemEventType.TOUCH_END);
                      sharePlatform.getChildByName('content').getChildByName('QQ').off(SystemEventType.TOUCH_END);
                      sharePlatform.getChildByName('content').getChildByName('close').off(SystemEventType.TOUCH_END);
                      sharePlatform.getChildByName('maskBg').off(SystemEventType.TOUCH_END);
                      _context10.next = 10;
                      return this.SDK.dismissGroup();

                    case 10:
                      this.SDK.leaveGroup();

                    case 11:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function maskClose() {
              return _maskClose.apply(this, arguments);
            }

            return maskClose;
          }()
        }]);

        return MainBoard;
      }(BaseBoard), (_applyDecoratedDescriptor(_class.prototype, "clickSingleMatch", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "clickSingleMatch"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clickLoverMatch", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "clickLoverMatch"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clickRules", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "clickRules"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clickFeedback", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "clickFeedback"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "quitGame", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "quitGame"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "close", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "close"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "maskClose", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "maskClose"), _class.prototype)), _class)));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/Board/MatchingBoard.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Const.js", "../../Util.js", "../Dialog/Dialog.js", "./BaseBoard.js"], function (_export, _context15) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, _get, _asyncToGenerator, cclegacy, SystemEventType, Label, Color, ProgressBar, Sprite, tween, ClientDataType, log, RoomDataType, ServerDataType, StatisticsKey, DialogButtonType, TeamColor, throttle, Dialog, BaseBoard, _dec, _class, _temp, UIControl, MatchingBoard;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
      _asyncToGenerator = _virtual_rollupPluginBabelHelpersJs.asyncToGenerator;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      SystemEventType = _cc.SystemEventType;
      Label = _cc.Label;
      Color = _cc.Color;
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
    }, function (_ConstJs) {
      ClientDataType = _ConstJs.ClientDataType;
      log = _ConstJs.log;
      RoomDataType = _ConstJs.RoomDataType;
      ServerDataType = _ConstJs.ServerDataType;
      StatisticsKey = _ConstJs.StatisticsKey;
      DialogButtonType = _ConstJs.DialogButtonType;
      TeamColor = _ConstJs.TeamColor;
    }, function (_UtilJs) {
      throttle = _UtilJs.throttle;
    }, function (_DialogDialogJs) {
      Dialog = _DialogDialogJs.Dialog;
    }, function (_BaseBoardJs) {
      BaseBoard = _BaseBoardJs.BaseBoard;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b8dbbjBDbxP+YYY37doxtEY", "MatchingBoard", undefined);

      UIControl = /*#__PURE__*/function () {
        // circle: Node = null;
        function UIControl(board, sdk) {
          _classCallCheck(this, UIControl);

          this.board = null;
          this.SDK = null;
          this.team1 = null;
          this.team2 = null;
          this.time = null;
          this.board = board;
          this.SDK = sdk;
        }

        _createClass(UIControl, [{
          key: "initUI",
          value: function () {
            var _initUI = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(board) {
              var groupInfo, curPlayerInfo, groupPlayerList, index, element;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.board = board;
                      this.team1 = this.board.getChildByName('team1');
                      this.team2 = this.board.getChildByName('team2'); // this.circle = this.board.getChildByName('circle')

                      this.time = this.board.getChildByName('guide').getChildByName('Label');
                      _context.next = 6;
                      return this.SDK.getGroupInfo();

                    case 6:
                      groupInfo = _context.sent;
                      _context.next = 9;
                      return this.SDK.getPlayerInfo();

                    case 9:
                      curPlayerInfo = _context.sent;
                      groupPlayerList = null; // this.circle.getComponent(Animation).onLoad()
                      // this.circle.setRotationFromEuler(0, 0, 0)
                      // this.circle.setScale(1, 1, 1)
                      // this.circle.getChildByName('red').active = true
                      // this.circle.getChildByName('red1').active = true
                      // this.circle.getChildByName('blue').active = true
                      // this.circle.getChildByName('blue1').active = true
                      // this.circle.getChildByName('Sprite').active = false
                      // this.circle.getChildByName('Sprite2').active = false

                      this.team1.getChildByName('card').getChildByName('user2').active = false;
                      this.team1.getChildByName('card').getChildByName('user2_wait').active = true;
                      this.team2.getChildByName('card').getChildByName('user1').active = false;
                      this.team2.getChildByName('card').getChildByName('user2').active = false;
                      this.team2.getChildByName('card').getChildByName('user1_wait').active = true;
                      this.team2.getChildByName('card').getChildByName('user2_wait').active = true;
                      this.team1.getChildByName('card').getChildByName('Lover').active = false;
                      this.team2.getChildByName('card').getChildByName('Lover').active = false;
                      this.board.getChildByName('CancelMatchButton').active = true;
                      this.board.getChildByName('expectedTime').active = true;
                      this.board.getChildByName('guide').active = true;
                      this.board.getChildByName('ProgressBar').getComponent(ProgressBar).progress = 0;
                      this.board.getChildByName('ProgressBar').active = false;
                      this.time.getComponent(Label).string = '正在匹配 (00:00)';
                      _context.next = 27;
                      return this.initCard();

                    case 27:
                      if (!groupInfo) {
                        _context.next = 34;
                        break;
                      }

                      _context.next = 30;
                      return this.showLoverUI();

                    case 30:
                      groupPlayerList = groupInfo.groupPlayerList;

                      for (index = 0; index < groupPlayerList.length; index++) {
                        element = groupPlayerList[index];

                        if (element.id == curPlayerInfo.id) {
                          this.setPlayer(1, 1, {
                            id: element.id,
                            teamId: '1',
                            profile: element.customGroupPlayerProfile
                          });
                        } else {
                          this.setPlayer(1, 2, {
                            id: element.id,
                            teamId: '1',
                            profile: element.customGroupPlayerProfile
                          });
                        }
                      }

                      _context.next = 35;
                      break;

                    case 34:
                      this.setPlayer(1, 1, {
                        id: curPlayerInfo.id,
                        teamId: curPlayerInfo.teamId,
                        profile: curPlayerInfo.profile
                      });

                    case 35:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function initUI(_x) {
              return _initUI.apply(this, arguments);
            }

            return initUI;
          }()
        }, {
          key: "initCard",
          value: function () {
            var _initCard = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var isLover;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.team1.getComponent(Sprite).enabled = false;
                      this.team2.getComponent(Sprite).enabled = false;
                      this.team1.getChildByName('card').getChildByName('user1').getComponent(Sprite).enabled = false;
                      this.team1.getChildByName('card').getChildByName('user2').getComponent(Sprite).enabled = false;
                      _context2.next = 6;
                      return this.SDK.gameManager.Util.teammaterIsLover();

                    case 6:
                      isLover = _context2.sent;

                      if (!isLover) {
                        _context2.next = 13;
                        break;
                      }

                      _context2.next = 10;
                      return this.SDK.gameManager.Util.loadImg('Texture/UI/matching/2-0/spriteFrame', this.team1);

                    case 10:
                      this.team1.getComponent(Sprite).enabled = true;
                      _context2.next = 19;
                      break;

                    case 13:
                      _context2.next = 15;
                      return this.SDK.gameManager.Util.loadImg('Texture/UI/matching/2-0/spriteFrame', this.team1.getChildByName('card').getChildByName('user1'));

                    case 15:
                      _context2.next = 17;
                      return this.SDK.gameManager.Util.loadImg('Texture/UI/matching/2-0/spriteFrame', this.team1.getChildByName('card').getChildByName('user2'));

                    case 17:
                      this.team1.getChildByName('card').getChildByName('user1').getComponent(Sprite).enabled = true;
                      this.team1.getChildByName('card').getChildByName('user2').getComponent(Sprite).enabled = true;

                    case 19:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function initCard() {
              return _initCard.apply(this, arguments);
            }

            return initCard;
          }()
        }, {
          key: "initData",
          value: function initData() {}
        }, {
          key: "matchSuccess",
          value: function () {
            var _matchSuccess = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(playerList) {
              var curPlayerInfo, team2_index, index, element;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.showLoverUI();
                      _context3.next = 3;
                      return this.SDK.getPlayerInfo();

                    case 3:
                      curPlayerInfo = _context3.sent;
                      team2_index = 1;

                      for (index = 0; index < playerList.length; index++) {
                        element = playerList[index];

                        if (element.teamId == curPlayerInfo.teamId) {
                          if (element.id == curPlayerInfo.id) {
                            this.setPlayer(1, 1, {
                              id: element.id,
                              teamId: element.teamId,
                              profile: element.profile
                            });
                          } else {
                            this.setPlayer(1, 2, {
                              id: element.id,
                              teamId: element.teamId,
                              profile: element.profile
                            });
                          }
                        } else {
                          this.setPlayer(2, team2_index, {
                            id: element.id,
                            teamId: element.teamId,
                            profile: element.profile
                          });
                          team2_index = team2_index + 1;
                        }
                      }

                      this.board.getChildByName('expectedTime').active = false;
                      this.board.getChildByName('guide').active = false;
                      this.board.getChildByName('ProgressBar').active = true;
                      tween(this.board.getChildByName('ProgressBar').getComponent(ProgressBar)).to(2, {
                        progress: 1
                      }).start();
                      this.time.getComponent(Label).string = '匹配成功,等待进入游戏';

                    case 11:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function matchSuccess(_x2) {
              return _matchSuccess.apply(this, arguments);
            }

            return matchSuccess;
          }()
        }, {
          key: "setTime",
          value: function setTime(time) {
            if (this.board) {
              var m = Math.floor(time / 60);
              var s = Math.floor(time - m * 60);
              this.time.getComponent(Label).string = "\u6B63\u5728\u5339\u914D (".concat(m > 9 ? m : '0' + m, ":").concat(s > 9 ? s : '0' + s, ")");
            }
          }
        }, {
          key: "setPlayer",
          value: function setPlayer(teamNum, playerNum, playerInfo) {
            var teamBox = null;
            var userBox = null;
            var waitBox = null;
            var playerData = JSON.parse(playerInfo.profile);
            teamBox = this.team1;

            if (teamNum == 2) {
              teamBox = this.team2;
            }

            userBox = teamBox.getChildByName('card').getChildByName('user1');
            waitBox = teamBox.getChildByName('card').getChildByName('user1_wait');

            if (playerNum == 2) {
              userBox = teamBox.getChildByName('card').getChildByName('user2');
              waitBox = teamBox.getChildByName('card').getChildByName('user2_wait');
            }

            if (playerInfo) {
              userBox.getChildByName('nickName').getComponent(Label).string = playerData.nickname.length > 6 ? playerData.nickname.slice(0, 5) : playerData.nickname;

              if (playerData.isVip) {
                userBox.getChildByName('nickName').getComponent(Label).color = new Color(240, 190, 37, 255);
                userBox.getChildByName('nickName').getChildByName('vip').active = true;
              } else {
                userBox.getChildByName('nickName').getComponent(Label).color = new Color(51, 51, 51, 255);
                userBox.getChildByName('nickName').getChildByName('vip').active = false;
              }

              var _comp = userBox.getChildByName('avatarBg').getChildByName('avatar');

              this.SDK.gameManager.Util.setAvatar(_comp, playerInfo, false);
              this.SDK.gameManager.Util.loadImg(playerData.gender === 1 ? 'Texture/UI/result/boy/spriteFrame' : 'Texture/UI/result/girl/spriteFrame', userBox.getChildByName('avatarBg').getChildByName('avatar').getChildByName('gender'));
              userBox.active = true;
              waitBox && (waitBox.active = false);
            } else {
              userBox.active = false;
              waitBox && (waitBox.active = true);
            }
          }
        }, {
          key: "showLoverUI",
          value: function () {
            var _showLoverUI = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var isLover, enemyIsLover;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.SDK.gameManager.Util.teammaterIsLover();

                    case 2:
                      isLover = _context4.sent;
                      _context4.next = 5;
                      return this.SDK.gameManager.Util.enemyIsLover();

                    case 5:
                      enemyIsLover = _context4.sent;

                      if (isLover) {
                        this.team1.getChildByName('card').getChildByName('Lover').active = true;
                      } else {
                        this.team1.getChildByName('card').getChildByName('Lover').active = false;
                      }

                      if (enemyIsLover) {
                        this.team2.getChildByName('card').getChildByName('Lover').active = true;
                      } else {
                        this.team2.getChildByName('card').getChildByName('Lover').active = false;
                      }

                    case 8:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function showLoverUI() {
              return _showLoverUI.apply(this, arguments);
            }

            return showLoverUI;
          }()
        }, {
          key: "changeMatchStatus",
          value: function () {
            var _changeMatchStatus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var teamId, isLover, enemyIsLover;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.SDK.getTeamId();

                    case 2:
                      teamId = _context5.sent;
                      _context5.next = 5;
                      return this.SDK.gameManager.Util.teammaterIsLover();

                    case 5:
                      isLover = _context5.sent;
                      _context5.next = 8;
                      return this.SDK.gameManager.Util.enemyIsLover();

                    case 8:
                      enemyIsLover = _context5.sent;

                      if (!(teamId == TeamColor.blue)) {
                        _context5.next = 40;
                        break;
                      }

                      if (!isLover) {
                        _context5.next = 18;
                        break;
                      }

                      this.team1.getChildByName('card').getChildByName('user1').getComponent(Sprite).enabled = false;
                      this.team1.getChildByName('card').getChildByName('user2').getComponent(Sprite).enabled = false;
                      _context5.next = 15;
                      return this.SDK.gameManager.Util.loadImg('Texture/UI/matching/2-2/spriteFrame', this.team1);

                    case 15:
                      this.team1.getComponent(Sprite).enabled = true;
                      _context5.next = 25;
                      break;

                    case 18:
                      this.team1.getComponent(Sprite).enabled = false;
                      _context5.next = 21;
                      return this.SDK.gameManager.Util.loadImg('Texture/UI/matching/2-2/spriteFrame', this.team1.getChildByName('card').getChildByName('user1'));

                    case 21:
                      _context5.next = 23;
                      return this.SDK.gameManager.Util.loadImg('Texture/UI/matching/2-2/spriteFrame', this.team1.getChildByName('card').getChildByName('user2'));

                    case 23:
                      this.team1.getChildByName('card').getChildByName('user1').getComponent(Sprite).enabled = true;
                      this.team1.getChildByName('card').getChildByName('user2').getComponent(Sprite).enabled = true;

                    case 25:
                      if (!enemyIsLover) {
                        _context5.next = 33;
                        break;
                      }

                      this.team2.getChildByName('card').getChildByName('user1').getComponent(Sprite).enabled = false;
                      this.team2.getChildByName('card').getChildByName('user2').getComponent(Sprite).enabled = false;
                      _context5.next = 30;
                      return this.SDK.gameManager.Util.loadImg('Texture/UI/matching/2-1/spriteFrame', this.team2);

                    case 30:
                      this.team2.getComponent(Sprite).enabled = true;
                      _context5.next = 40;
                      break;

                    case 33:
                      this.team2.getComponent(Sprite).enabled = false;
                      _context5.next = 36;
                      return this.SDK.gameManager.Util.loadImg('Texture/UI/matching/2-1/spriteFrame', this.team2.getChildByName('card').getChildByName('user1'));

                    case 36:
                      _context5.next = 38;
                      return this.SDK.gameManager.Util.loadImg('Texture/UI/matching/2-1/spriteFrame', this.team2.getChildByName('card').getChildByName('user2'));

                    case 38:
                      this.team2.getChildByName('card').getChildByName('user1').getComponent(Sprite).enabled = true;
                      this.team2.getChildByName('card').getChildByName('user2').getComponent(Sprite).enabled = true;

                    case 40:
                      if (!(teamId == TeamColor.red)) {
                        _context5.next = 71;
                        break;
                      }

                      if (!isLover) {
                        _context5.next = 49;
                        break;
                      }

                      this.team1.getChildByName('card').getChildByName('user1').getComponent(Sprite).enabled = false;
                      this.team1.getChildByName('card').getChildByName('user2').getComponent(Sprite).enabled = false;
                      _context5.next = 46;
                      return this.SDK.gameManager.Util.loadImg('Texture/UI/matching/2-1/spriteFrame', this.team1);

                    case 46:
                      this.team1.getComponent(Sprite).enabled = true;
                      _context5.next = 56;
                      break;

                    case 49:
                      this.team1.getComponent(Sprite).enabled = false;
                      _context5.next = 52;
                      return this.SDK.gameManager.Util.loadImg('Texture/UI/matching/2-1/spriteFrame', this.team1.getChildByName('card').getChildByName('user1'));

                    case 52:
                      _context5.next = 54;
                      return this.SDK.gameManager.Util.loadImg('Texture/UI/matching/2-1/spriteFrame', this.team1.getChildByName('card').getChildByName('user2'));

                    case 54:
                      this.team1.getChildByName('card').getChildByName('user1').getComponent(Sprite).enabled = true;
                      this.team1.getChildByName('card').getChildByName('user2').getComponent(Sprite).enabled = true;

                    case 56:
                      if (!enemyIsLover) {
                        _context5.next = 64;
                        break;
                      }

                      this.team2.getChildByName('card').getChildByName('user1').getComponent(Sprite).enabled = false;
                      this.team2.getChildByName('card').getChildByName('user2').getComponent(Sprite).enabled = false;
                      _context5.next = 61;
                      return this.SDK.gameManager.Util.loadImg('Texture/UI/matching/2-2/spriteFrame', this.team2);

                    case 61:
                      this.team2.getComponent(Sprite).enabled = true;
                      _context5.next = 71;
                      break;

                    case 64:
                      this.team2.getComponent(Sprite).enabled = false;
                      _context5.next = 67;
                      return this.SDK.gameManager.Util.loadImg('Texture/UI/matching/2-2/spriteFrame', this.team2.getChildByName('card').getChildByName('user1'));

                    case 67:
                      _context5.next = 69;
                      return this.SDK.gameManager.Util.loadImg('Texture/UI/matching/2-2/spriteFrame', this.team2.getChildByName('card').getChildByName('user2'));

                    case 69:
                      this.team2.getChildByName('card').getChildByName('user1').getComponent(Sprite).enabled = true;
                      this.team2.getChildByName('card').getChildByName('user2').getComponent(Sprite).enabled = true;

                    case 71:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function changeMatchStatus() {
              return _changeMatchStatus.apply(this, arguments);
            }

            return changeMatchStatus;
          }()
        }]);

        return UIControl;
      }();

      _export("MatchingBoard", MatchingBoard = (_dec = throttle(), (_class = (_temp = /*#__PURE__*/function (_BaseBoard) {
        _inherits(MatchingBoard, _BaseBoard);

        function MatchingBoard(scene, sdk) {
          var _this;

          _classCallCheck(this, MatchingBoard);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(MatchingBoard).call(this, scene, sdk));
          _this.uiControl = null;
          _this.matchingTime = 0;
          _this.initTime = -100;
          _this.waitInit = false;
          _this.name = 'MatchingBoard';
          _this.uiControl = new UIControl(_this.board, _this.SDK);
          return _this;
        }

        _createClass(MatchingBoard, [{
          key: "setListener",
          value: function setListener() {
            _get(_getPrototypeOf(MatchingBoard.prototype), "setListener", this).call(this);

            this.SDK.Room.onCancelMatch = this.onCancelMatch.bind(this);
            this.SDK.Room.onMatch = this.onMatch.bind(this);
            this.SDK.curRoom.onRecvFromClient = this.onRecvFromClient.bind(this);
            this.SDK.curRoom.onLeaveRoom = this.onLeaveRoom.bind(this);
            this.SDK.curRoom.onRecvFromGameSvr = this.onRecvFromGameSvr.bind(this);
            this.SDK.gameManager.timerSingal = this.onTimerSingal.bind(this);
          }
        }, {
          key: "initData",
          value: function initData() {
            _get(_getPrototypeOf(MatchingBoard.prototype), "initData", this).call(this);

            this.matchingTime = 0;
            this.initTime = 0;
            this.waitInit = false;
            this.SDK.gameManager.Util.isRobotRoomCache = undefined;
          }
          /* 各类监听方法 */

        }, {
          key: "onTimerSingal",
          value: function () {
            var _onTimerSingal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (this.dead) {
                        _context6.next = 19;
                        break;
                      }

                      if (this.waitInit) {
                        _context6.next = 6;
                        break;
                      }

                      this.uiControl.setTime(this.matchingTime);
                      this.matchingTime += 0.2;
                      _context6.next = 19;
                      break;

                    case 6:
                      this.initTime += 0.2;

                      if (!(this.initTime >= 2 && this.initTime < 2.3)) {
                        _context6.next = 11;
                        break;
                      }

                      _context6.next = 11;
                      return this.SDK.sendToServer(ClientDataType.RequestInitData, 1);

                    case 11:
                      log('inittime', this.initTime);

                      if (!(this.initTime > 10)) {
                        _context6.next = 19;
                        break;
                      }

                      this.initTime = 0;
                      this.waitInit = false;
                      this.SDK.gameManager.timerSingal = null;
                      this.SDK.gameManager.showToast('加载游戏失败', 2);
                      _context6.next = 19;
                      return this.ChangeBoard(this.SDK.gameManager.MainBoard);

                    case 19:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function onTimerSingal() {
              return _onTimerSingal.apply(this, arguments);
            }

            return onTimerSingal;
          }()
        }, {
          key: "onCancelMatch",
          value: function () {
            var _onCancelMatch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(event) {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 3;
                      return this.leaveMatchingBoard();

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function onCancelMatch(_x3) {
              return _onCancelMatch.apply(this, arguments);
            }

            return onCancelMatch;
          }()
        }, {
          key: "onMatch",
          value: function () {
            var _onMatch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(event) {
              var isRobotRoom, _groupInfo, playerIndex, code, _groupInfo2, groupInfo;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (!(event.data.errCode === this.SDK.errorCode.EC_OK)) {
                        _context8.next = 25;
                        break;
                      }

                      log('匹配成功', event.data);
                      this.SDK.curRoom.initRoom(event.data.roomInfo);
                      this.SDK.Listener.add(this.SDK.curRoom);
                      this.waitInit = true; // 修改流程,为了配合AI机制,匹配成功的时候不进行UI修改,等待服务器发送信号后再进行UI修改
                      // 判断是否为机器人房间,是的话如果当前玩家在队伍中的位置为第一则由他伪造一份敌人数据

                      isRobotRoom = this.SDK.gameManager.Util.IsRobotRoom();
                      _context8.next = 9;
                      return this.SDK.getGroupInfo();

                    case 9:
                      _groupInfo = _context8.sent;

                      if (_groupInfo) {
                        _context8.next = 24;
                        break;
                      }

                      _context8.next = 13;
                      return this.SDK.getPlayerIndex();

                    case 13:
                      playerIndex = _context8.sent;

                      if (!(playerIndex == 1)) {
                        _context8.next = 24;
                        break;
                      }

                      _context8.next = 17;
                      return this.SDK.createGroup();

                    case 17:
                      code = _context8.sent;

                      if (!(code == MGOBE.ErrCode.EC_OK)) {
                        _context8.next = 24;
                        break;
                      }

                      _context8.next = 21;
                      return this.SDK.getGroupInfo();

                    case 21:
                      _groupInfo2 = _context8.sent;
                      _context8.next = 24;
                      return this.SDK.sendToRoom(RoomDataType.MatchedJoinGroup, _groupInfo2.id);

                    case 24:
                      return _context8.abrupt("return");

                    case 25:
                      this.SDK.gameManager.showToast('匹配超时', 2);
                      _context8.next = 29;
                      return this.SDK.getGroupInfo();

                    case 29:
                      groupInfo = _context8.sent;
                      _context8.next = 32;
                      return this.ChangeBoard(groupInfo ? this.SDK.gameManager.WaitLoverBoard : this.SDK.gameManager.MainBoard);

                    case 32:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function onMatch(_x4) {
              return _onMatch.apply(this, arguments);
            }

            return onMatch;
          }()
        }, {
          key: "onLeaveRoom",
          value: function () {
            var _onLeaveRoom = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(event) {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      if (!this.dead) {
                        this.dead = true;
                        this.SDK.gameManager.showToast('有玩家离开了', 2);
                        this.ChangeBoard(this.SDK.gameManager.MainBoard);
                      }

                    case 1:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function onLeaveRoom(_x5) {
              return _onLeaveRoom.apply(this, arguments);
            }

            return onLeaveRoom;
          }()
        }, {
          key: "onRecvFromGameSvr",
          value: function () {
            var _onRecvFromGameSvr = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(event) {
              var _this2 = this;

              var data, mesType, serverData, selfInfo, failedMatching, index, element, _serverData, localTime, dia;

              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      log('接收到实时服务器的数据:', event.data);
                      data = event.data.data;
                      mesType = data.type;

                      if (!(mesType == ServerDataType.Init)) {
                        _context11.next = 33;
                        break;
                      }

                      this.initTime = 2.4;
                      serverData = data.data;
                      this.SDK.gameManager.node.emit('GameInit', serverData.init);
                      /* 
                      对服务器发送的初始化数据中的playerList进行数据解析,对AI玩家的数据进行缓存,
                      并根据所有玩家的数据修改UI,为了保证对局不可能出现[人+人 VS 人+AI]的情况,
                      如果有人一个人发现自己的队友为电脑玩家,则判定匹配失败,直接离开队组和房间.其他玩家也会接收到相应信号提示匹配失败
                      */

                      _context11.next = 10;
                      return this.SDK.getPlayerInfo();

                    case 10:
                      selfInfo = _context11.sent;
                      failedMatching = false;

                      for (index = 0; index < serverData.playerList.length; index++) {
                        element = serverData.playerList[index];

                        if (element.isRobot) {
                          this.SDK.gameManager.robotInfo[element.id] = element;

                          if (element.teamId == selfInfo.teamId) {
                            failedMatching = true;
                          }
                        }
                      }

                      if (!failedMatching) {
                        _context11.next = 18;
                        break;
                      }

                      this.SDK.gameManager.showToast('匹配失败', 1.5);
                      this.ChangeBoard(this.SDK.gameManager.MainBoard);
                      _context11.next = 31;
                      break;

                    case 18:
                      _context11.t0 = this.SDK.gameManager.Util;
                      _context11.next = 21;
                      return this.SDK.gameManager.Util.teammaterIsLover();

                    case 21:
                      if (!_context11.sent) {
                        _context11.next = 25;
                        break;
                      }

                      _context11.t1 = StatisticsKey.main_couple_match;
                      _context11.next = 26;
                      break;

                    case 25:
                      _context11.t1 = StatisticsKey.main_quick_match;

                    case 26:
                      _context11.t2 = _context11.t1;

                      _context11.t0.callTDGA.call(_context11.t0, _context11.t2);

                      _context11.next = 30;
                      return this.uiControl.changeMatchStatus();

                    case 30:
                      // let _players = []
                      // Object.keys(serverData.init.gameState.teamList).map(i => {
                      //     serverData.init.gameState.teamList[i].playerList.map(p => {
                      //         _players.push(p)
                      //     })
                      // })
                      this.uiControl.matchSuccess(serverData.playerList);

                    case 31:
                      _context11.next = 51;
                      break;

                    case 33:
                      if (!(mesType == ServerDataType.Start)) {
                        _context11.next = 47;
                        break;
                      }

                      this.initTime = 0;
                      this.waitInit = false;
                      this.SDK.gameManager.timerSingal = null;
                      this.SDK.gameManager.isRunning = true;
                      _serverData = data.data;
                      this.SDK.gameManager.startTime = _serverData.startTime;
                      localTime = this.SDK.gameManager.Util.getLocalTime();

                      if (Math.abs(localTime - _serverData.startTime) > 5) {
                        dia = new Dialog(this.scene, this.SDK, '检测到您本地时间有误,可能导致游戏倒计时显示错误', DialogButtonType.single, '知道了');
                        dia.show(this, function () {
                          _this2.SDK.curDialog.destroy();
                        });
                      }

                      if (this.SDK.gameManager.Config.env == 'dev') {
                        this.SDK.gameManager.gameTime = this.SDK.gameManager.Config.DebugGameTime > 0 ? this.SDK.gameManager.Config.DebugGameTime : data.data.gameTime;
                      } else {
                        this.SDK.gameManager.gameTime = data.data.gameTime;
                      }

                      setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                        return regeneratorRuntime.wrap(function _callee10$(_context10) {
                          while (1) {
                            switch (_context10.prev = _context10.next) {
                              case 0:
                                _context10.next = 2;
                                return _this2.ChangeBoard(_this2.SDK.gameManager.GamingBoard);

                              case 2:
                              case "end":
                                return _context10.stop();
                            }
                          }
                        }, _callee10);
                      })), 2000);
                      _context11.next = 51;
                      break;

                    case 47:
                      if (!(mesType == ServerDataType.NetState)) {
                        _context11.next = 51;
                        break;
                      }

                      if (!this.dead) {
                        _context11.next = 50;
                        break;
                      }

                      return _context11.abrupt("return");

                    case 50:
                      log('[matching]接收到在线状态变更信息', data.data);
                    // const loverInfo = await this.SDK.getLoverInfo();
                    // const eventPlayerId = data.data.playerId;
                    // const eventState = data.data.state;
                    // const eventIsTeammater = loverInfo.id == eventPlayerId;
                    // const isLover = await this.SDK.gameManager.Util.teammaterIsLover();
                    // let dia:Dialog;
                    // let newBoard:BaseBoard = this.SDK.gameManager.MainBoard;
                    // this.dead = true;
                    // if(eventState == NetState.Offline) {
                    //     await this.SDK.leaveRoom();
                    //     if(loverInfo) {
                    //         if(eventIsTeammater) {
                    //             this.SDK.leaveGroup();
                    //             if(isLover) {
                    //                 this.SDK.gameManager.showToast('另一半离开了房间', 2);
                    //             } else {
                    //                 this.SDK.gameManager.showToast('队友离开了房间', 2);
                    //             }
                    //         } else {
                    //             if(isLover) {
                    //                 newBoard = this.SDK.gameManager.WaitLoverBoard;
                    //                 this.SDK.gameManager.showToast('对方离开了房间', 2);
                    //             } else {
                    //                 this.SDK.leaveGroup();
                    //                 this.SDK.gameManager.showToast('对方离开了房间', 2);
                    //             }
                    //         }
                    //     } else {
                    //         this.SDK.leaveGroup();
                    //     }
                    //     this.ChangeBoard(newBoard);
                    // }

                    case 51:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function onRecvFromGameSvr(_x6) {
              return _onRecvFromGameSvr.apply(this, arguments);
            }

            return onRecvFromGameSvr;
          }()
        }, {
          key: "onRecvFromClient",
          value: function () {
            var _onRecvFromClient = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(event) {
              var mesData, type, data, senderId;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      mesData = JSON.parse(event.data.msg);
                      type = mesData.type;
                      data = mesData.data;
                      senderId = event.data.sendPlayerId;

                      if (!(type == RoomDataType.MatchedJoinGroup)) {
                        _context12.next = 8;
                        break;
                      }

                      _context12.next = 8;
                      return this.SDK.joinGroup(data);

                    case 8:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));

            function onRecvFromClient(_x7) {
              return _onRecvFromClient.apply(this, arguments);
            }

            return onRecvFromClient;
          }()
          /* ------------------------------------------------------------------------------- */

        }, {
          key: "InitEvent",
          value: function InitEvent() {
            _get(_getPrototypeOf(MatchingBoard.prototype), "InitEvent", this).call(this);

            var button_cancel = this.board.getChildByName('CancelMatchButton').getChildByName('Button');
            button_cancel.on(SystemEventType.TOUCH_END, this.clickCancelMatch, this);
          }
        }, {
          key: "destroy",
          value: function destroy() {
            _get(_getPrototypeOf(MatchingBoard.prototype), "destroy", this).call(this);

            var button_cancel = this.board.getChildByName('CancelMatchButton').getChildByName('Button');
            button_cancel.off(SystemEventType.TOUCH_END);
          }
        }, {
          key: "clickCancelMatch",
          value: function () {
            var _clickCancelMatch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (!this.dead) {
                        _context13.next = 2;
                        break;
                      }

                      return _context13.abrupt("return");

                    case 2:
                      this.dead = true;
                      _context13.next = 5;
                      return this.SDK.cancelMatchinig();

                    case 5:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));

            function clickCancelMatch() {
              return _clickCancelMatch.apply(this, arguments);
            }

            return clickCancelMatch;
          }()
        }, {
          key: "leaveMatchingBoard",
          value: function () {
            var _leaveMatchingBoard = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var groupInfo, key;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.SDK.getGroupInfo();

                    case 2:
                      groupInfo = _context14.sent;
                      _context14.t0 = groupInfo;

                      if (!_context14.t0) {
                        _context14.next = 8;
                        break;
                      }

                      _context14.next = 7;
                      return this.SDK.gameManager.Util.teammaterIsLover();

                    case 7:
                      _context14.t0 = _context14.sent;

                    case 8:
                      if (!_context14.t0) {
                        _context14.next = 12;
                        break;
                      }

                      _context14.t1 = StatisticsKey.main_couple_cancel;
                      _context14.next = 13;
                      break;

                    case 12:
                      _context14.t1 = StatisticsKey.main_quick_cancel;

                    case 13:
                      key = _context14.t1;
                      this.SDK.gameManager.Util.callTDGA(key);
                      _context14.next = 17;
                      return this.ChangeBoard(this.SDK.gameManager.MainBoard);

                    case 17:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function leaveMatchingBoard() {
              return _leaveMatchingBoard.apply(this, arguments);
            }

            return leaveMatchingBoard;
          }()
        }]);

        return MatchingBoard;
      }(BaseBoard), _temp), _applyDecoratedDescriptor(_class.prototype, "clickCancelMatch", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "clickCancelMatch"), _class.prototype), _class)));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/Board/ResultBoard.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Const.js", "../../Util.js", "./BaseBoard.js", "../avatar.js"], function (_export, _context12) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, _get, _asyncToGenerator, cclegacy, SystemEventType, Animation, Label, ProgressBar, AudioSource, Vec3, tween, Color, Sprite, log, TeamColor, PlayerState, GroupMessageType, GroupSysMessageType, StatisticsKey, throttle, BaseBoard, Avatar, _dec, _dec2, _dec3, _class, _temp, UIControl, ResultBoard;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
      _asyncToGenerator = _virtual_rollupPluginBabelHelpersJs.asyncToGenerator;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      SystemEventType = _cc.SystemEventType;
      Animation = _cc.Animation;
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
      AudioSource = _cc.AudioSource;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      Color = _cc.Color;
      Sprite = _cc.Sprite;
    }, function (_ConstJs) {
      log = _ConstJs.log;
      TeamColor = _ConstJs.TeamColor;
      PlayerState = _ConstJs.PlayerState;
      GroupMessageType = _ConstJs.GroupMessageType;
      GroupSysMessageType = _ConstJs.GroupSysMessageType;
      StatisticsKey = _ConstJs.StatisticsKey;
    }, function (_UtilJs) {
      throttle = _UtilJs.throttle;
    }, function (_BaseBoardJs) {
      BaseBoard = _BaseBoardJs.BaseBoard;
    }, function (_avatarJs) {
      Avatar = _avatarJs.Avatar;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8a67cE5ERBGL6NMmCPaURz2", "ResultBoard", undefined);

      UIControl = /*#__PURE__*/function () {
        function UIControl(board, sdk) {
          _classCallCheck(this, UIControl);

          this.board = null;
          this.SDK = null;
          this.isLover = false;
          this.redTeam = [];
          this.blueTeam = [];
          this.players = [];
          this.result = null;
          this.board = board;
          this.SDK = sdk;
        }

        _createClass(UIControl, [{
          key: "initData",
          value: function () {
            var _initData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var teammater;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.SDK.getTeammate();

                    case 2:
                      teammater = _context.sent;

                      if (teammater) {
                        this.setOnceMore(0);
                      } else {
                        this.setOnceMore(4);
                      }

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function initData() {
              return _initData.apply(this, arguments);
            }

            return initData;
          }()
        }, {
          key: "initUI",
          value: function () {
            var _initUI = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(board) {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.board = board;
                      _context2.next = 3;
                      return this.SDK.gameManager.Util.teammaterIsLover();

                    case 3:
                      this.isLover = _context2.sent;
                      _context2.next = 6;
                      return this.initBoardData(this.result);

                    case 6:
                      this.changeTeammater = this.board.getChildByName('other');
                      this.homepage = this.board.getChildByName('back');

                      if (this.isLover) {
                        this.onceMore = this.board.getChildByName('loverOnceMore');
                        this.board.getChildByName('other').active = false;
                        this.board.getChildByName('onceMore').active = false;
                        this.board.getChildByName('loverOnceMore').active = true;
                      } else {
                        this.onceMore = this.board.getChildByName('onceMore');
                        this.board.getChildByName('other').active = true;
                        this.board.getChildByName('onceMore').active = true;
                        this.board.getChildByName('loverOnceMore').active = false;
                      }

                      this.SDK.gameManager.Util.loadImg('Texture/UI/result/anniu_1/spriteFrame', this.onceMore);

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function initUI(_x) {
              return _initUI.apply(this, arguments);
            }

            return initUI;
          }()
        }, {
          key: "initBoardData",
          value: function () {
            var _initBoardData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(result) {
              var _this = this;

              var _cup, _board, lover, profile, loverProfile, boyAvatarNode, girlAvatarNode, progress, loverRes, original, _final, levelList, team1Score, team2Score, _mvpNode, _anima, mvp_pos, top, rate;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _cup = this.board.getChildByName('scoreBoard').getChildByName('cup');
                      _cup.getChildByName('win').active = false;
                      _cup.getChildByName('draw').active = false;
                      _cup.getChildByName('default').active = false;
                      this.board.getChildByName('scoreBoard').getChildByName('mvp').active = false;
                      _context4.next = 7;
                      return this.SDK.getPlayerInfo();

                    case 7:
                      this.playerInfo = _context4.sent;
                      if (!result.winnerTeam) _cup.getChildByName('draw').active = true;

                      if (!(this.SDK.gameManager.serverPlayer.teamId == TeamColor.red && result.winnerTeam == TeamColor.red || this.SDK.gameManager.serverPlayer.teamId == TeamColor.blue && result.winnerTeam == TeamColor.blue)) {
                        _context4.next = 14;
                        break;
                      }

                      _context4.next = 12;
                      return this.SDK.gameManager.Util.loadImg('Texture/UI/result/ying/spriteFrame', this.board.getChildByName('scoreBoard'));

                    case 12:
                      _cup.getChildByName('win').active = true;
                      this.SDK.gameManager.getComponent(AudioSource).playOneShot(this.SDK.gameManager.audio_win, 1);

                    case 14:
                      if (!(this.SDK.gameManager.serverPlayer.teamId == TeamColor.red && result.winnerTeam == TeamColor.blue || this.SDK.gameManager.serverPlayer.teamId == TeamColor.blue && result.winnerTeam == TeamColor.red)) {
                        _context4.next = 19;
                        break;
                      }

                      _context4.next = 17;
                      return this.SDK.gameManager.Util.loadImg('Texture/UI/result/shu/spriteFrame', this.board.getChildByName('scoreBoard'));

                    case 17:
                      _cup.getChildByName('default').active = true;
                      this.SDK.gameManager.Util.playAudio(this.SDK.gameManager.audio_failed);

                    case 19:
                      _board = null;

                      if (!this.isLover) {
                        _context4.next = 38;
                        break;
                      }

                      this.board.getChildByName('scoreBoard').getChildByName('loverBoard').active = true;
                      this.board.getChildByName('scoreBoard').getChildByName('strengerBoard').active = false;
                      _board = this.board.getChildByName('scoreBoard').getChildByName('loverBoard');
                      _context4.next = 26;
                      return this.SDK.getLoverInfo();

                    case 26:
                      lover = _context4.sent;

                      if (!lover) {
                        Object.keys(result.teamList).map(function (i) {
                          result.teamList[i].playerList.map(function (p) {
                            if (result.teamList[i].id === _this.playerInfo.teamId && p.id !== _this.playerInfo.id) {
                              lover = p;
                            }
                          });
                        });
                      }

                      profile = JSON.parse(this.playerInfo.profile);
                      loverProfile = lover.profile ? JSON.parse(lover.profile) : lover;
                      boyAvatarNode = _board.getChildByName('top').getChildByName('Avatar').getChildByName('boyAvatar');
                      girlAvatarNode = _board.getChildByName('top').getChildByName('Avatar2').getChildByName('girlAvatar');

                      if (profile.gender === 1) {
                        this.SDK.gameManager.Util.loadRemoteImg(profile.avatar_url, boyAvatarNode);
                        this.SDK.gameManager.Util.loadRemoteImg(loverProfile.avatar_url ? loverProfile.avatar_url : loverProfile.avatar, girlAvatarNode);
                      } else {
                        this.SDK.gameManager.Util.loadRemoteImg(loverProfile.avatar_url ? loverProfile.avatar_url : loverProfile.avatar, boyAvatarNode);
                        this.SDK.gameManager.Util.loadRemoteImg(profile.avatar_url, girlAvatarNode);
                      }

                      if (profile.isVip) {
                        boyAvatarNode.getChildByName('isVip').active = true;
                        girlAvatarNode.getChildByName('isVip').active = true;
                      } else {
                        boyAvatarNode.getChildByName('isVip').active = false;
                        girlAvatarNode.getChildByName('isVip').active = false;
                      }

                      progress = _board.getChildByName('top').getChildByName('ProgressBar');

                      if (result.tacit_score_info && result.tacit_score_info.length) {
                        loverRes = result.tacit_score_info.filter(function (v) {
                          return v.lover_id === JSON.parse(_this.playerInfo.profile).lover_id;
                        })[0];
                        _board.getChildByName('top').getChildByName('Lv').getComponent(Label).string = "\u604B\u4EBALv.".concat(this.SDK.gameManager.Util.loverLevel(loverRes.original_tacit_score));
                        _board.getChildByName('top').getChildByName('LvHeart').getChildByName('Lv').getComponent(Label).string = "".concat(this.SDK.gameManager.Util.loverLevel(loverRes.original_tacit_score));
                        _board.getChildByName('top').getChildByName('desc').getChildByName('score').getComponent(Label).string = "+".concat(loverRes.add_tacit_score);
                        original = loverRes.original_tacit_score;
                        _final = loverRes.original_tacit_score + loverRes.add_tacit_score;
                        this.progressBarScore(progress, original);
                        levelList = [50, 150, 350, 850, 1850, 3850, 6850, 11850, 18850, 28850];
                        setTimeout(function () {
                          var timer = setInterval(function () {
                            if (original >= _final) {
                              _board.getChildByName('top').getChildByName('Lv').getComponent(Label).string = "\u604B\u4EBALv.".concat(_this.SDK.gameManager.Util.loverLevel(_final));
                              _board.getChildByName('top').getChildByName('LvHeart').getChildByName('Lv').getComponent(Label).string = "".concat(_this.SDK.gameManager.Util.loverLevel(_final));
                              clearInterval(timer);
                              return;
                            }

                            if (original < _final) {
                              original++;

                              if (levelList.indexOf(original) > -1 && original < _final) {
                                progress.getComponent(ProgressBar).progress = 0;
                              } else {
                                _this.progressBarScore(progress, original);
                              }
                            }
                          }, 10);
                        }, result.mvp === this.playerInfo.id ? 3500 : 500);
                      }

                      _context4.next = 42;
                      break;

                    case 38:
                      this.board.getChildByName('scoreBoard').getChildByName('loverBoard').active = false;
                      this.board.getChildByName('scoreBoard').getChildByName('strengerBoard').active = true;
                      _board = this.board.getChildByName('scoreBoard').getChildByName('strengerBoard');

                      _board.getChildByName('players').children.map(function (v, i) {
                        v.getChildByName('avatar').getChildByName('onceMore').active = false;
                        v.getChildByName('avatar').getChildByName('leave').active = false;
                      });

                    case 42:
                      team1Score = 0;
                      team2Score = 0;
                      _mvpNode = this.board.getChildByName('scoreBoard').getChildByName('mvp');
                      _anima = _mvpNode.getComponent(Animation);
                      mvp_pos = new Vec3();
                      this.players = [];
                      this.redTeam = [];
                      this.blueTeam = [];

                      _anima.onLoad();

                      Object.keys(result.teamList).map(function (i) {
                        if (result.teamList[i].id == TeamColor.red) {
                          result.teamList[i].playerList.map( /*#__PURE__*/function () {
                            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(v, index) {
                              var _comp;

                              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                while (1) {
                                  switch (_context3.prev = _context3.next) {
                                    case 0:
                                      if (!_this.players.find(function (p) {
                                        return p.id === v.id;
                                      })) _this.players.push(v);

                                      _this.redTeam.push({
                                        player: v,
                                        node: "avatar".concat(index + 1)
                                      });

                                      team1Score += v.score;

                                      if (_this.isLover) {
                                        _comp = _board.getChildByName('teamRed').getChildByName('avatars').getChildByName("avatar".concat(index + 1));
                                        _comp.getChildByName('score').getComponent(Label).string = "".concat(v.score, "\u5206");
                                        _comp.getChildByName('onceMore').active = false;
                                        _comp.getChildByName('leave').active = false;

                                        if (v.gender === 1) {
                                          _this.SDK.gameManager.Util.loadImg('/Texture/UI/result/boy/spriteFrame', _comp.getChildByName('avatar').getChildByName('gender'));
                                        } else {
                                          _this.SDK.gameManager.Util.loadImg('/Texture/UI/result/girl/spriteFrame', _comp.getChildByName('avatar').getChildByName('gender'));
                                        }

                                        if (v.status === 0) {
                                          _comp.getChildByName('offLine').active = true;

                                          _comp.getChildByName('avatar').getComponent(Avatar).setOffline();
                                        } else {
                                          _comp.getChildByName('offLine').active = false;

                                          _comp.getChildByName('avatar').getComponent(Avatar).setOnline();
                                        }

                                        if (v.isVip) {
                                          _comp.getChildByName('avatar').getChildByName('isVip').active = true;
                                        } else {
                                          _comp.getChildByName('avatar').getChildByName('isVip').active = false;
                                        }

                                        _this.SDK.gameManager.Util.loadRemoteImg(v.avatar, _comp.getChildByName('avatar'));

                                        v.id === result.mvp && (mvp_pos = new Vec3(_comp.getPosition().x - 190, _comp.getPosition().y - 150, 0));
                                      } else {
                                        _comp = _board.getChildByName('top').getChildByName('teamRed').getChildByName("avatar".concat(index + 1));

                                        _this.SDK.gameManager.Util.loadRemoteImg(v.avatar, _comp);

                                        v.gender === 1 && _this.SDK.gameManager.Util.loadImg('/Texture/UI/result/boy/spriteFrame', _comp.getChildByName('gender'));
                                        v.gender === 2 && _this.SDK.gameManager.Util.loadImg('/Texture/UI/result/girl/spriteFrame', _comp.getChildByName('gender'));
                                        if (v.isVip) _comp.getChildByName('isVip').active = true;else _comp.getChildByName('isVip').active = false;
                                      }

                                    case 4:
                                    case "end":
                                      return _context3.stop();
                                  }
                                }
                              }, _callee3);
                            }));

                            return function (_x3, _x4) {
                              return _ref.apply(this, arguments);
                            };
                          }());
                        }

                        if (result.teamList[i].id == TeamColor.blue) {
                          result.teamList[i].playerList.map(function (v, index) {
                            var _comp;

                            if (!_this.players.find(function (p) {
                              return p.id === v.id;
                            })) _this.players.push(v);

                            _this.blueTeam.push({
                              player: v,
                              node: "avatar".concat(index + 1)
                            });

                            team2Score += v.score;

                            if (_this.isLover) {
                              _comp = _board.getChildByName('teamBlue').getChildByName('avatars').getChildByName("avatar".concat(index + 1));
                              _comp.getChildByName('score').getComponent(Label).string = "".concat(v.score, "\u5206");
                              _comp.getChildByName('onceMore').active = false;
                              _comp.getChildByName('leave').active = false;

                              if (v.gender === 1) {
                                _this.SDK.gameManager.Util.loadImg('/Texture/UI/result/boy/spriteFrame', _comp.getChildByName('avatar').getChildByName('gender'));
                              } else {
                                _this.SDK.gameManager.Util.loadImg('/Texture/UI/result/girl/spriteFrame', _comp.getChildByName('avatar').getChildByName('gender'));
                              }

                              if (v.status === 0) {
                                _comp.getChildByName('offLine').active = true;

                                _comp.getChildByName('avatar').getComponent(Avatar).setOffline();
                              } else {
                                _comp.getChildByName('offLine').active = false;

                                _comp.getChildByName('avatar').getComponent(Avatar).setOnline();
                              }

                              if (v.isVip) {
                                _comp.getChildByName('avatar').getChildByName('isVip').active = true;
                              } else {
                                _comp.getChildByName('avatar').getChildByName('isVip').active = false;
                              }

                              _this.SDK.gameManager.Util.loadRemoteImg(v.avatar, _comp.getChildByName('avatar'));

                              v.id === result.mvp && (mvp_pos = new Vec3(_comp.getPosition().x + 120, _comp.getPosition().y - 150, 0));
                            } else {
                              _comp = _board.getChildByName('top').getChildByName('teamBlue').getChildByName("avatar".concat(index + 1));

                              _this.SDK.gameManager.Util.loadRemoteImg(v.avatar, _comp);

                              v.gender === 1 && _this.SDK.gameManager.Util.loadImg('/Texture/UI/result/boy/spriteFrame', _comp.getChildByName('gender'));
                              v.gender === 2 && _this.SDK.gameManager.Util.loadImg('/Texture/UI/result/girl/spriteFrame', _comp.getChildByName('gender'));
                              if (v.isVip) _comp.getChildByName('isVip').active = true;else _comp.getChildByName('isVip').active = false;
                            }
                          });
                        }
                      });

                      if (!this.isLover) {
                        top = this.board.getChildByName('scoreBoard').getChildByName('strengerBoard').getChildByName('top');
                        top.getChildByName('scoreBar').getComponent(ProgressBar).progress = 0.5;
                        top.getChildByName('scoreBar').getChildByName('Bar').getChildByName('vs').position = new Vec3(240, 5, 0);
                        rate = team1Score + team2Score !== 0 ? team1Score / (team1Score + team2Score) : 0.5;
                        if (rate < 0.2) rate = 0.2;
                        if (rate > 0.8) rate = 0.8;
                        setTimeout(function () {
                          tween(top.getChildByName('scoreBar').getComponent(ProgressBar)).to(.3, {
                            progress: rate
                          }).start();
                          tween(top.getChildByName('scoreBar').getChildByName('Bar').getChildByName('vs')).to(.3, {
                            position: new Vec3(480 * rate, 5, 0)
                          }).start();
                        }, 100);
                        top.getChildByName('scoreBar').getChildByName('redScore').getComponent(Label).string = "".concat(team1Score);
                        top.getChildByName('scoreBar').getChildByName('blueScore').getComponent(Label).string = "".concat(team2Score);
                        this.players.sort(function (a, b) {
                          return b.score - a.score;
                        });
                        this.players.map(function (v, i) {
                          var user = _board.getChildByName('players').getChildByName("player".concat(i + 1));

                          _this.SDK.gameManager.Util.loadRemoteImg(v.avatar, user.getChildByName('avatar'));

                          user.getChildByName('nickName').getComponent(Label).string = v.name.length > 6 ? v.name.slice(0, 5) : v.name;
                          user.getChildByName('score').getComponent(Label).string = "".concat(v.score, "\u5206");

                          if (v.isVip) {
                            user.getChildByName('nickName').getComponent(Label).color = new Color(240, 190, 37, 255);
                            user.getChildByName('nickName').getChildByName('vip').active = true;
                          } else {
                            user.getChildByName('nickName').getComponent(Label).color = new Color(51, 51, 51, 255);
                            user.getChildByName('nickName').getChildByName('vip').active = false;
                          }

                          if (_this.playerInfo.id === v.id) {
                            user.getComponent(Sprite).color = new Color(255, 246, 237, 255);
                            user.getChildByName('nickName').getComponent(Label).color = new Color(210, 107, 0, 255);
                            user.getChildByName('score').getComponent(Label).color = new Color(210, 107, 0, 255);
                          } else {
                            user.getComponent(Sprite).color = new Color(255, 255, 255, 255);
                            user.getChildByName('score').getComponent(Label).color = new Color(51, 51, 51, 255);

                            if (!v.isVip) {
                              user.getChildByName('nickName').getComponent(Label).color = new Color(51, 51, 51, 255);
                            }
                          }

                          if (v.status === 0) {
                            user.getChildByName('avatar').getChildByName('offLine').active = true;
                            user.getChildByName('avatar').getComponent(Avatar).setOffline();
                          } else {
                            user.getChildByName('avatar').getChildByName('offLine').active = false;
                            user.getChildByName('avatar').getComponent(Avatar).setOnline();
                          }

                          if (v.gender === 1) {
                            _this.SDK.gameManager.Util.loadImg('/Texture/UI/result/boy/spriteFrame', user.getChildByName('avatar').getChildByName('gender'));
                          } else {
                            _this.SDK.gameManager.Util.loadImg('/Texture/UI/result/girl/spriteFrame', user.getChildByName('avatar').getChildByName('gender'));
                          }

                          if (!_this.isLover && v.id === result.mvp) {
                            mvp_pos = new Vec3(user.getChildByName('avatar').getPosition().x - 35, user.getChildByName('avatar').getPosition().y + 65, 0);
                          }
                        });
                      }

                      if (result.mvp) {
                        if (result.mvp === this.playerInfo.id) {
                          setTimeout(function () {
                            _mvpNode.active = true;

                            _anima.on(Animation.EventType.FINISHED, function () {
                              tween(_mvpNode).to(.3, {
                                position: mvp_pos,
                                scale: new Vec3(.2, .2, .2)
                              }).start();
                            });

                            _anima.play();
                          }, 300);
                        } else {
                          _mvpNode.setScale(.2, .2, .2);

                          _mvpNode.setPosition(mvp_pos);

                          _mvpNode.active = true;
                        }
                      }

                    case 54:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function initBoardData(_x2) {
              return _initBoardData.apply(this, arguments);
            }

            return initBoardData;
          }()
        }, {
          key: "setOnceMore",
          value: function setOnceMore(type) {
            var _this2 = this;

            if (!this.onceMore) this.onceMore = this.board.getChildByName('onceMore');

            switch (type) {
              case 1:
                this.SDK.gameManager.Util.loadImg('Texture/UI/result/anniu_3/spriteFrame', this.onceMore);
                this.onceMore.off(SystemEventType.TOUCH_END);
                this.onceMore.getChildByName('Label').getComponent(Label).string = '等待队友准备';
                break;

              case 2:
                this.SDK.gameManager.Util.loadImg('Texture/UI/result/anniu_1/spriteFrame', this.onceMore);
                this.onceMore.getChildByName('Label').getComponent(Label).string = '队友已准备好,立即开始';
                break;

              case 3:
                this.SDK.gameManager.Util.loadImg('Texture/UI/result/anniu_1/spriteFrame', this.onceMore);
                this.onceMore.getChildByName('Label').getComponent(Label).string = '再来一局';
                break;

              case 4:
                this.SDK.gameManager.Util.loadImg('Texture/UI/result/anniu_3/spriteFrame', this.onceMore);
                this.onceMore.getChildByName('Label').getComponent(Label).string = '队友已离开';
                break;

              default:
                this.SDK.gameManager.Util.loadImg('Texture/UI/result/anniu_1/spriteFrame', this.onceMore);
                this.onceMore.getChildByName('Label').getComponent(Label).string = '再来一局';
                break;
            }

            var loverRed = this.board.getChildByName('scoreBoard').getChildByName('loverBoard').getChildByName('teamRed').getChildByName('avatars');
            var loverBlue = this.board.getChildByName('scoreBoard').getChildByName('loverBoard').getChildByName('teamBlue').getChildByName('avatars');
            var str = this.board.getChildByName('scoreBoard').getChildByName('strengerBoard');

            if (this.playerInfo.teamId === TeamColor.red) {
              this.redTeam.map(function (v) {
                switch (type) {
                  case 0:
                  case 3:
                  case 4:
                    loverRed.getChildByName("".concat(v.node)).getChildByName('onceMore').active = false;
                    str.getChildByName('players').getChildByName("player".concat(_this2.players.findIndex(function (p) {
                      return p.id === v.player.id;
                    }) + 1)).getChildByName('avatar').getChildByName('onceMore').active = false;
                    break;

                  case 1:
                    if (v.player.id !== _this2.playerInfo.id) break;
                    loverRed.getChildByName("".concat(v.node)).getChildByName('onceMore').active = true;
                    str.getChildByName('players').getChildByName("player".concat(_this2.players.findIndex(function (p) {
                      return p.id === v.player.id;
                    }) + 1)).getChildByName('avatar').getChildByName('onceMore').active = true;
                    break;

                  case 2:
                    if (v.player.id === _this2.playerInfo.id) break;
                    loverRed.getChildByName("".concat(v.node)).getChildByName('onceMore').active = true;
                    str.getChildByName('players').getChildByName("player".concat(_this2.players.findIndex(function (p) {
                      return p.id === v.player.id;
                    }) + 1)).getChildByName('avatar').getChildByName('onceMore').active = true;
                    break;

                  default:
                    break;
                }
              });
            } else {
              this.blueTeam.map(function (v) {
                switch (type) {
                  case 0:
                  case 3:
                  case 4:
                    loverBlue.getChildByName("".concat(v.node)).getChildByName('onceMore').active = false;
                    str.getChildByName('players').getChildByName("player".concat(_this2.players.findIndex(function (p) {
                      return p.id === v.player.id;
                    }) + 1)).getChildByName('avatar').getChildByName('onceMore').active = false;
                    break;

                  case 1:
                    if (v.player.id !== _this2.playerInfo.id) break;
                    loverBlue.getChildByName("".concat(v.node)).getChildByName('onceMore').active = true;
                    str.getChildByName('players').getChildByName("player".concat(_this2.players.findIndex(function (p) {
                      return p.id === v.player.id;
                    }) + 1)).getChildByName('avatar').getChildByName('onceMore').active = true;
                    break;

                  case 2:
                    if (v.player.id === _this2.playerInfo.id) break;
                    loverBlue.getChildByName("".concat(v.node)).getChildByName('onceMore').active = true;
                    str.getChildByName('players').getChildByName("player".concat(_this2.players.findIndex(function (p) {
                      return p.id === v.player.id;
                    }) + 1)).getChildByName('avatar').getChildByName('onceMore').active = true;
                    break;

                  default:
                    break;
                }
              });
            }
          }
        }, {
          key: "progressBarScore",
          value: function progressBarScore(node, data) {
            var progressNum;
            if (data <= 50) progressNum = data / 50;else if (data > 50 && data <= 150) progressNum = (data - 50) / 100;else if (data > 150 && data <= 350) progressNum = (data - 150) / 200;else if (data > 350 && data <= 850) progressNum = (data - 350) / 500;else if (data > 850 && data <= 1850) progressNum = (data - 850) / 1000;else if (data > 1850 && data <= 3850) progressNum = (data - 1850) / 2000;else if (data > 3850 && data <= 6850) progressNum = (data - 3850) / 3000;else if (data > 6850 && data <= 11850) progressNum = (data - 6850) / 5000;else if (data > 11850 && data <= 18850) progressNum = (data - 11850) / 7000;else if (data > 18850 && data <= 28850) progressNum = (data - 18850) / 10000;else progressNum = 0;
            node.getComponent(ProgressBar).progress = progressNum;
          }
        }]);

        return UIControl;
      }();

      _export("ResultBoard", ResultBoard = (_dec = throttle(), _dec2 = throttle(500), _dec3 = throttle(), (_class = (_temp = /*#__PURE__*/function (_BaseBoard) {
        _inherits(ResultBoard, _BaseBoard); // 结算数据,从服务器拿到结算结果后创建ResultBoard作为构造函数参数传入


        function ResultBoard(scene, sdk) {
          var _this3;

          _classCallCheck(this, ResultBoard);

          _this3 = _possibleConstructorReturn(this, _getPrototypeOf(ResultBoard).call(this, scene, sdk));
          _this3.uiControl = null;
          _this3.result = null;
          _this3.name = 'ResultBoard';
          _this3.uiControl = new UIControl(_this3.board, _this3.SDK);
          return _this3;
        }

        _createClass(ResultBoard, [{
          key: "setResult",
          value: function setResult(data) {
            if (data) {
              this.uiControl.result = data;
            }
          }
        }, {
          key: "initData",
          value: function initData() {
            _get(_getPrototypeOf(ResultBoard.prototype), "initData", this).call(this); // 打补丁 在此处清空manager内的机器人玩家数据


            this.SDK.gameManager.robotInfo = {};
          }
        }, {
          key: "setListener",
          value: function setListener() {
            _get(_getPrototypeOf(ResultBoard.prototype), "setListener", this).call(this);

            this.SDK.curGroup.onChangeCustomGroupPlayerStatus = this.onChangeCustomGroupPlayerStatus.bind(this);
            this.SDK.curGroup.onRecvFromGroupClient = this.onRecvFromGroupClient.bind(this);
            this.SDK.curGroup.onLeaveGroup = this.onLeaveGroup.bind(this);
            this.SDK.Room.onCancelMatch = this.onCancelMatch.bind(this);
            this.SDK.Room.onMatch = this.onMatch.bind(this);

            if (this.SDK.gameManager.timerSingal) {
              this.SDK.gameManager.timerSingal = null;
            }
          }
          /* 各类监听方法 */

        }, {
          key: "onChangeCustomGroupPlayerStatus",
          value: function () {
            var _onChangeCustomGroupPlayerStatus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(event) {
              var teammater, cur_info, ready1, ready2, groupInfo, code;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.SDK.getTeammate();

                    case 2:
                      teammater = _context5.sent;
                      _context5.next = 5;
                      return this.SDK.getPlayerInfo();

                    case 5:
                      cur_info = _context5.sent;
                      ready1 = cur_info.stateGroup; //this.uiControl.playerInfo.stateGroup;

                      ready2 = PlayerState.NotReady;

                      if (teammater) {
                        ready2 = teammater.customPlayerStatus;

                        if (event.data.changePlayerId == teammater.id) {
                          ready2 = event.data.customGroupPlayerStatus;

                          if (ready1 == PlayerState.Ready) {
                            if (ready2 == PlayerState.Ready) ;else {
                              this.uiControl.setOnceMore(1); //自己准备好了,队友没准备好,设置按钮显示为等待队友准备
                            }
                          } else {
                            if (ready2 == PlayerState.Ready) {
                              // 自己没准备好,队友准备好了,设置按钮显示队友已准备好,立即开始
                              this.uiControl.setOnceMore(2);
                            } else {
                              // 自己没准备好,队友也没准备好,设置按钮显示为再来一局
                              this.uiControl.setOnceMore(3);
                            }
                          }
                        }
                      }

                      if (!(ready1 == PlayerState.Ready && ready2 == PlayerState.Ready)) {
                        _context5.next = 28;
                        break;
                      }

                      _context5.next = 13;
                      return this.SDK.getGroupInfo();

                    case 13:
                      groupInfo = _context5.sent;
                      log('都准备完毕,进入匹配', groupInfo.owner, this.uiControl.playerInfo.id);

                      if (!(groupInfo.owner == this.uiControl.playerInfo.id)) {
                        _context5.next = 28;
                        break;
                      }

                      _context5.next = 18;
                      return this.SDK.matchingLover();

                    case 18:
                      code = _context5.sent;

                      if (!(code == MGOBE.ErrCode.EC_OK)) {
                        _context5.next = 27;
                        break;
                      }

                      _context5.next = 22;
                      return this.SDK.sendToGroup(GroupMessageType.Sys, GroupSysMessageType.Matching);

                    case 22:
                      this.initBoardElements();
                      this.ChangeBoard(this.SDK.gameManager.MatchingBoard);
                      this.SDK.gameManager.Util.callTDGA(StatisticsKey.game_over_again);
                      _context5.next = 28;
                      break;

                    case 27:
                    case 28:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function onChangeCustomGroupPlayerStatus(_x5) {
              return _onChangeCustomGroupPlayerStatus.apply(this, arguments);
            }

            return onChangeCustomGroupPlayerStatus;
          }()
        }, {
          key: "onRecvFromGroupClient",
          value: function () {
            var _onRecvFromGroupClient = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(event) {
              var msg;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      msg = JSON.parse(event.data.msg);

                      if (!(msg['type'] == GroupMessageType.Sys)) {
                        _context6.next = 7;
                        break;
                      }

                      if (!(msg['content'] == GroupSysMessageType.Matching)) {
                        _context6.next = 7;
                        break;
                      }

                      this.initBoardElements();
                      _context6.next = 7;
                      return this.ChangeBoard(this.SDK.gameManager.MatchingBoard);

                    case 7:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function onRecvFromGroupClient(_x6) {
              return _onRecvFromGroupClient.apply(this, arguments);
            }

            return onRecvFromGroupClient;
          }()
        }, {
          key: "onChangeGroupPlayerNetworkState",
          value: function () {
            var _onChangeGroupPlayerNetworkState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(event) {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      log('玩家[', event.data.changePlayerId, ']在线状态有变化', event.data.networkState);

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));

            function onChangeGroupPlayerNetworkState(_x7) {
              return _onChangeGroupPlayerNetworkState.apply(this, arguments);
            }

            return onChangeGroupPlayerNetworkState;
          }()
        }, {
          key: "onJoinGroup",
          value: function onJoinGroup(event) {
            log('有玩家加入队组:', event.data.joinPlayerId);
          }
        }, {
          key: "onCancelMatch",
          value: function onCancelMatch(event) {}
        }, {
          key: "onMatch",
          value: function onMatch(event) {}
        }, {
          key: "onLeaveGroup",
          value: function onLeaveGroup(event) {
            var _this4 = this;

            log('有人离开队组', event.data.leavePlayerId);
            var players = this.uiControl.blueTeam.concat(this.uiControl.redTeam);

            var _board;

            if (this.uiControl.isLover) {
              _board = this.board.getChildByName('scoreBoard').getChildByName('loverBoard');
              players.map(function (v) {
                if (v.player.id === event.data.leavePlayerId) {
                  if (v.player.teamId === TeamColor.red) {
                    _board.getChildByName('teamRed').getChildByName('avatars').getChildByName("".concat(v.node)).getChildByName('leave').active = true;
                  } else {
                    _board.getChildByName('teamBlue').getChildByName('avatars').getChildByName("".concat(v.node)).getChildByName('leave').active = true;
                  }
                }
              });
            } else {
              _board = this.board.getChildByName('scoreBoard').getChildByName('strengerBoard');
              players.map(function (v) {
                if (v.player.id === event.data.leavePlayerId) {
                  _board.getChildByName('players').getChildByName("player".concat(_this4.uiControl.players.findIndex(function (p) {
                    return p.id === v.player.id;
                  }) + 1)).getChildByName('avatar').getChildByName('leave').active = true;
                }
              });
            }

            this.uiControl.setOnceMore(4);
          }
        }, {
          key: "InitEvent",
          value: function () {
            var _InitEvent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var isLover, button_homepage, button_onceMore, _button_homepage, _button_onceMore, button_other;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _get(_getPrototypeOf(ResultBoard.prototype), "InitEvent", this).call(this);

                      _context8.next = 3;
                      return this.SDK.gameManager.Util.teammaterIsLover();

                    case 3:
                      isLover = _context8.sent;

                      if (isLover) {
                        button_homepage = this.board.getChildByName('back');
                        button_onceMore = this.board.getChildByName('loverOnceMore');
                        button_homepage.on(SystemEventType.TOUCH_END, this.clickHomepage, this);
                        button_onceMore.on(SystemEventType.TOUCH_END, this.clickOnceMore, this);
                      } else {
                        _button_homepage = this.board.getChildByName('back');
                        _button_onceMore = this.board.getChildByName('onceMore');
                        button_other = this.board.getChildByName('other');

                        _button_homepage.on(SystemEventType.TOUCH_END, this.clickHomepage, this);

                        _button_onceMore.on(SystemEventType.TOUCH_END, this.clickOnceMore, this);

                        button_other.on(SystemEventType.TOUCH_END, this.clickOther, this);
                      }

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function InitEvent() {
              return _InitEvent.apply(this, arguments);
            }

            return InitEvent;
          }()
        }, {
          key: "destroy",
          value: function destroy() {
            _get(_getPrototypeOf(ResultBoard.prototype), "destroy", this).call(this);

            var button_homepage = this.board.getChildByName('back');
            var button_onceMore = this.board.getChildByName('onceMore');
            var button_other = this.board.getChildByName('other');
            button_homepage.off(SystemEventType.TOUCH_END);
            button_onceMore.off(SystemEventType.TOUCH_END);
            button_other.off(SystemEventType.TOUCH_END);
          }
        }, {
          key: "clickHomepage",
          value: function () {
            var _clickHomepage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      this.initBoardElements();
                      _context9.next = 3;
                      return this.ChangeBoard(this.SDK.gameManager.MainBoard);

                    case 3:
                      this.SDK.gameManager.Util.callTDGA(StatisticsKey.game_over_back);

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function clickHomepage() {
              return _clickHomepage.apply(this, arguments);
            }

            return clickHomepage;
          }()
        }, {
          key: "clickOnceMore",
          value: function () {
            var _clickOnceMore = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var teammater, ready1, ready2, newReady;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.SDK.getTeammate();

                    case 2:
                      teammater = _context10.sent;

                      if (teammater) {
                        _context10.next = 5;
                        break;
                      }

                      return _context10.abrupt("return");

                    case 5:
                      ready1 = this.uiControl.playerInfo.stateGroup;
                      ready2 = teammater.customPlayerStatus;
                      newReady = ready1 == PlayerState.Ready ? PlayerState.NotReady : PlayerState.Ready;

                      if (newReady == PlayerState.Ready) {
                        if (ready2 == PlayerState.Ready) ;else {
                          this.uiControl.setOnceMore(1); //自己准备好了,队友没准备好,设置按钮显示为等待队友准备
                        }
                      } else {
                        if (ready2 == PlayerState.Ready) {
                          // 自己没准备好,队友准备好了,设置按钮显示队友已准备好,立即开始
                          this.uiControl.setOnceMore(2);
                        } else {
                          // 自己没准备好,队友也没准备好,设置按钮显示为再来一局
                          this.uiControl.setOnceMore(3);
                        }
                      }

                      this.uiControl.playerInfo.stateGroup = newReady;
                      this.SDK.setGroupPlayerStatus(newReady);

                    case 11:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function clickOnceMore() {
              return _clickOnceMore.apply(this, arguments);
            }

            return clickOnceMore;
          }() // @throttle()
          // async clickDialogButton() {
          //     this.SDK.curDialog.destroy();
          //     this.SDK.leaveGroup();
          //     const newBoard = this.SDK.gameManager.MainBoard;
          //     this.initBoardElements()
          //     await this.ChangeBoard(newBoard);
          // }

        }, {
          key: "clickOther",
          value: function () {
            var _clickOther = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var code;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.SDK.leaveGroup();

                    case 2:
                      _context11.next = 4;
                      return this.SDK.leaveRoom();

                    case 4:
                      this.initBoardElements();
                      _context11.next = 7;
                      return this.SDK.matchingSingle();

                    case 7:
                      code = _context11.sent;

                      if (!(code == MGOBE.ErrCode.EC_OK)) {
                        _context11.next = 14;
                        break;
                      }

                      this.SDK.gameManager.Util.callTDGA(StatisticsKey.game_over_replace);
                      _context11.next = 12;
                      return this.ChangeBoard(this.SDK.gameManager.MatchingBoard);

                    case 12:
                      _context11.next = 16;
                      break;

                    case 14:
                      _context11.next = 16;
                      return this.ChangeBoard(this.SDK.gameManager.MainBoard);

                    case 16:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function clickOther() {
              return _clickOther.apply(this, arguments);
            }

            return clickOther;
          }()
        }, {
          key: "initBoardElements",
          value: function initBoardElements() {
            this.board.getChildByName('scoreBoard').getChildByName('mvp').getComponent(Animation).onDestroy();
            this.board.getChildByName('scoreBoard').getChildByName('mvp').active = false;
            this.board.getChildByName('scoreBoard').getChildByName('mvp').setPosition(0, 0, 0);
            this.board.getChildByName('scoreBoard').getChildByName('mvp').setScale(1.2, 1.2, 1.2);
          }
        }]);

        return ResultBoard;
      }(BaseBoard), _temp), (_applyDecoratedDescriptor(_class.prototype, "clickHomepage", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "clickHomepage"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clickOnceMore", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "clickOnceMore"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clickOther", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "clickOther"), _class.prototype)), _class)));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/highLightMask.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, Sprite, view, Vec3, UITransform, Component, _dec, _class, ccclass, property, HighLightMask;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Sprite = _cc.Sprite;
      view = _cc.view;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "25f14P49k9O0ZDlm2Ne6KtT", "highLightMask", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("HighLightMask", HighLightMask = (_dec = ccclass('HighLightMask'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(HighLightMask, _Component);

        function HighLightMask() {
          _classCallCheck(this, HighLightMask);

          return _possibleConstructorReturn(this, _getPrototypeOf(HighLightMask).apply(this, arguments));
        }

        _createClass(HighLightMask, [{
          key: "reset",
          value: function reset() {
            this.pass = this.node.getComponent(Sprite).material.passes[0];
            this.pass.setUniform(this.pass.getHandle("radius"), 0);
          }
        }, {
          key: "setFocus",
          value: function setFocus(node, camera) {
            var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
            if (!node || !node.components || node.components.length <= 0) return;
            this.focus = node;
            this.camera = camera;
            this.radius = radius;
            var ui = this.node;
            var size = view.getFrameSize();
            var center = new Vec3();
            var pos = new Vec3();

            if (node && node.getComponent(UITransform)) {
              node.getPosition(pos);
              var father = node;
              var fatherPos = new Vec3();
              var scale;

              while (true) {
                father = father.getParent();

                if (father && father.name != 'UI') {
                  scale = father.getScale();
                  pos.x *= scale.x;
                  pos.y *= scale.y;
                  father.getPosition(fatherPos);
                  pos.x += fatherPos.x;
                  pos.y += fatherPos.y;
                } else break;
              }

              center.x = pos.x + size.width / 2;
              center.y = -pos.y + size.height / 2;
            } else {
              node.getPosition(pos);
              camera.convertToUINode(pos, ui, center);
              center.x += size.width / 2;
              center.y = -center.y + size.height / 2;
            }

            this.pass.setUniform(this.pass.getHandle("centerX"), center.x);
            this.pass.setUniform(this.pass.getHandle("centerY"), center.y);
            this.pass.setUniform(this.pass.getHandle("radius"), radius);
            this.pass.setUniform(this.pass.getHandle("height"), size.height);
            this.pass.setUniform(this.pass.getHandle("width"), size.width);
          }
        }, {
          key: "update",
          value: function update(dt) {
            if (this.focus) {
              this.setFocus(this.focus, this.camera, this.radius);
            }
          }
        }]);

        return HighLightMask;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/Board/TeachingBoard.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Box.js", "../../Const.js", "../../Util.js", "../Dialog/Dialog.js", "./BaseBoard.js", "../avatar.js", "../highLightMask.js"], function (_export, _context19) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _assertThisInitialized, _createClass, _get, _asyncToGenerator, cclegacy, Vec3, systemEvent, SystemEvent, SystemEventType, Label, tween, ProgressBar, Vec2, randomRange, Node, UITransform, Sprite, loader, Prefab, UIOpacity, instantiate, Box, log, StatisticsKey, DialogButtonType, NetState, JumpStatus, EmojiType, throttle, Dialog, BaseBoard, Avatar, HighLightMask, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _temp, UIControl, TeachState, TeachStage, TeachingBoard;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _dec8: void 0,
    _dec9: void 0,
    _class: void 0,
    _temp: void 0,
    TeachState: void 0,
    TeachStage: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
      _asyncToGenerator = _virtual_rollupPluginBabelHelpersJs.asyncToGenerator;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      Vec3 = _cc.Vec3;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      SystemEventType = _cc.SystemEventType;
      Label = _cc.Label;
      tween = _cc.tween;
      ProgressBar = _cc.ProgressBar;
      Vec2 = _cc.Vec2;
      randomRange = _cc.randomRange;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Sprite = _cc.Sprite;
      loader = _cc.loader;
      Prefab = _cc.Prefab;
      UIOpacity = _cc.UIOpacity;
      instantiate = _cc.instantiate;
    }, function (_BoxJs) {
      Box = _BoxJs.Box;
    }, function (_ConstJs) {
      log = _ConstJs.log;
      StatisticsKey = _ConstJs.StatisticsKey;
      DialogButtonType = _ConstJs.DialogButtonType;
      NetState = _ConstJs.NetState;
      JumpStatus = _ConstJs.JumpStatus;
      EmojiType = _ConstJs.EmojiType;
    }, function (_UtilJs) {
      throttle = _UtilJs.throttle;
    }, function (_DialogDialogJs) {
      Dialog = _DialogDialogJs.Dialog;
    }, function (_BaseBoardJs) {
      BaseBoard = _BaseBoardJs.BaseBoard;
    }, function (_avatarJs) {
      Avatar = _avatarJs.Avatar;
    }, function (_highLightMaskJs) {
      HighLightMask = _highLightMaskJs.HighLightMask;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f4ca8JWOD5I16+qzhkrFKPI", "TeachingBoard", undefined);

      UIControl = /*#__PURE__*/function () {
        function UIControl(board, sdk) {
          _classCallCheck(this, UIControl);

          this.board = null;
          this.SDK = null;
          this.end = false;
          this.emojiList = [];
          this.selfAvatar = null;
          this.teammaterAvatar = null;
          this.timeNumberNode = null;
          this.time = 0;
          this.selfSign = '1-2';
          this.top1 = true;
          this.board = board;
          this.SDK = sdk;
        }

        _createClass(UIControl, [{
          key: "initUI",
          value: function () {
            var _initUI = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(board) {
              var selfInfo, profile;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.board = board;
                      this.changeSoundUI(this.SDK.gameManager.Setting.switch_audio);
                      this.headerNode = this.board.getChildByName('Header');
                      this.selfAvatar = this.headerNode.getChildByName('team0').getChildByName('avatar-2').getChildByName('avatar');
                      this.teammaterAvatar = this.headerNode.getChildByName('team0').getChildByName('avatar-1').getChildByName('avatar');
                      this.timeNumberNode = this.headerNode.getChildByName('time').getChildByName('number');
                      this.tipNode_tip = this.board.getChildByName('tip');
                      this.tipNode_wait = this.board.getChildByName('wait');
                      this.team1Node = this.board.getChildByName('Header').getChildByName('team0');
                      this.introduceTitleNode = this.board.getChildByName('introduce-title');
                      this.introduceBoxNode = this.board.getChildByName('introduce-box');
                      this.introduceBoxNode1 = this.board.getChildByName('introduce-box1');
                      this.interactionNode = this.board.getChildByName('Interaction-ex');
                      this.touch = this.board.getChildByName('touch-tech');
                      this.mask = this.board.getChildByName('mask').getComponent(HighLightMask);
                      this.board.getChildByName('mask2').active = false;
                      this.introduceBoxNode.active = false;
                      this.introduceBoxNode1.active = false;
                      this.tipNode_tip.active = false;
                      this.tipNode_wait.active = false;
                      this.board.getChildByName('emojiTip').active = false;
                      this.headerNode.getChildByName('team0').getChildByName('avatar-1').getChildByName('offLine').active = false;
                      this.headerNode.getChildByName('team0').getChildByName('avatar-2').getChildByName('offLine').active = false;
                      this.headerNode.getChildByName('team1').getChildByName('avatar-1').getChildByName('offLine').active = false;
                      this.headerNode.getChildByName('team1').getChildByName('avatar-2').getChildByName('offLine').active = false;
                      this.teammaterAvatar.getComponent(Avatar).setOnline();
                      this.selfAvatar.getComponent(Avatar).setOnline();
                      this.headerNode.getChildByName('team1').getChildByName('avatar-1').getChildByName('avatar').getComponent(Avatar).setOnline();
                      this.headerNode.getChildByName('team1').getChildByName('avatar-2').getChildByName('avatar').getComponent(Avatar).setOnline();
                      _context.next = 31;
                      return this.SDK.getPlayerInfo();

                    case 31:
                      selfInfo = _context.sent;
                      profile = JSON.parse(selfInfo.profile);
                      this.SDK.gameManager.Util.loadRemoteImg(profile.avatar_url, this.selfAvatar);
                      this.selfAvatar.getChildByName('name').getComponent(Label).string = selfInfo.name;

                    case 35:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function initUI(_x) {
              return _initUI.apply(this, arguments);
            }

            return initUI;
          }()
        }, {
          key: "initData",
          value: function initData() {
            this.time = -100;
          }
        }, {
          key: "setTime",
          value: function () {
            var _setTime = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(time) {
              var n, numNodeList, newNumNode, com_transform, index, childs, _index, _index2;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!this.board) {
                        _context2.next = 51;
                        break;
                      }

                      if (!(this.time != time && time <= 20)) {
                        _context2.next = 51;
                        break;
                      }

                      this.time = time;
                      numNodeList = [];

                      if (!(time != 0)) {
                        _context2.next = 21;
                        break;
                      }

                    case 5:
                      if (!(time > 0)) {
                        _context2.next = 19;
                        break;
                      }

                      n = time % 10;
                      time = Math.floor(time / 10);
                      newNumNode = new Node();
                      com_transform = newNumNode.addComponent(UITransform);
                      newNumNode.addComponent(Sprite);
                      com_transform.setContentSize(42, 56);
                      com_transform.setAnchorPoint(0.5, 0.5);
                      newNumNode.setScale(new Vec3(0.5, 0.5, 1));
                      _context2.next = 16;
                      return this.SDK.gameManager.Util.loadImg('Texture/number/' + n + '/spriteFrame', newNumNode);

                    case 16:
                      numNodeList.push(newNumNode);
                      _context2.next = 5;
                      break;

                    case 19:
                      _context2.next = 31;
                      break;

                    case 21:
                      n = 0;
                      newNumNode = new Node();
                      com_transform = newNumNode.addComponent(UITransform);
                      newNumNode.addComponent(Sprite);
                      com_transform.setContentSize(42, 56);
                      com_transform.setAnchorPoint(0.5, 0.5);
                      newNumNode.setScale(new Vec3(0.5, 0.5, 1));
                      _context2.next = 30;
                      return this.SDK.gameManager.Util.loadImg('Texture/number/' + n + '/spriteFrame', newNumNode);

                    case 30:
                      numNodeList.push(newNumNode);

                    case 31:
                      _context2.t0 = numNodeList.length;
                      _context2.next = _context2.t0 === 1 ? 34 : _context2.t0 === 2 ? 37 : _context2.t0 === 3 ? 40 : 44;
                      break;

                    case 34:
                      numNodeList[0].setPosition(new Vec3(0, 0, 0));

                      if (n > 0 && n <= 5) {
                        tween(numNodeList[0]).to(.5, {
                          scale: new Vec3(1.5, 1.5, 1)
                        }).start();
                      }

                      return _context2.abrupt("break", 48);

                    case 37:
                      numNodeList[1].setPosition(new Vec3(-10, 0, 0));
                      numNodeList[0].setPosition(new Vec3(10, 0, 0));
                      return _context2.abrupt("break", 48);

                    case 40:
                      numNodeList[2].setPosition(new Vec3(-20, 0, 0));
                      numNodeList[1].setPosition(new Vec3(0, 0, 0));
                      numNodeList[0].setPosition(new Vec3(20, 0, 0));
                      return _context2.abrupt("break", 48);

                    case 44:
                      for (index = 0; index < numNodeList.length; index++) {
                        numNodeList[index].destroy();
                      }

                      numNodeList = [];
                      this.board.getChildByName('Header').getChildByName('time').getComponent(Label).string = time;
                      return _context2.abrupt("break", 48);

                    case 48:
                      // 销毁已存在的数字
                      childs = this.timeNumberNode.children;

                      for (_index = 0; _index < childs.length; _index++) {
                        childs[_index].destroy();
                      } // 将最新数字装配到指定位置


                      for (_index2 = 0; _index2 < numNodeList.length; _index2++) {
                        numNodeList[_index2].setParent(this.timeNumberNode);
                      }

                    case 51:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function setTime(_x2) {
              return _setTime.apply(this, arguments);
            }

            return setTime;
          }()
        }, {
          key: "showEmoji",
          value: function () {
            var _showEmoji = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(type, senderId) {
              var _this = this;

              var pos, emojiNode, promise;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      pos = new Vec3(260, 206, 0);
                      promise = new Promise(function (resolve) {
                        var path = 'Prefab/Emoji/emoji_' + (type + 1);
                        loader.loadRes(path, Prefab, /*#__PURE__*/function () {
                          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(err, prefab) {
                            var selfInfo;
                            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                              while (1) {
                                switch (_context3.prev = _context3.next) {
                                  case 0:
                                    if (!err) {
                                      _context3.next = 3;
                                      break;
                                    }

                                    return _context3.abrupt("return");

                                  case 3:
                                    emojiNode = instantiate(prefab);
                                    _context3.next = 6;
                                    return _this.SDK.getPlayerInfo();

                                  case 6:
                                    selfInfo = _context3.sent;

                                    _this.SDK.gameManager.Util.loadRemoteImg(JSON.parse(selfInfo.profile).avatar_url, emojiNode.getChildByName('avatar'));

                                    emojiNode.getComponent(UITransform).priority = 99;
                                    emojiNode.setPosition(pos);
                                    emojiNode.setScale(new Vec3(.8, .8, .8));
                                    emojiNode.setParent(_this.board);
                                    tween(emojiNode).to(3, {
                                      position: {
                                        x: -218,
                                        y: 206,
                                        z: 0
                                      }
                                    }, {
                                      onComplete: function onComplete() {
                                        emojiNode.destroy();
                                      }
                                    }).start();
                                    resolve(true);

                                  case 14:
                                  case "end":
                                    return _context3.stop();
                                }
                              }
                            }, _callee3);
                          }));

                          return function (_x5, _x6) {
                            return _ref.apply(this, arguments);
                          };
                        }());
                      });
                      return _context4.abrupt("return", promise);

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));

            function showEmoji(_x3, _x4) {
              return _showEmoji.apply(this, arguments);
            }

            return showEmoji;
          }()
        }, {
          key: "changePlayer",
          value: function () {
            var _changePlayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(isController) {
              var team, avatar1, avatar2, avatar1Opacity, avatar2Opacity;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      team = this.board.getChildByName('Header').getChildByName('team0');

                      if (this.selfSign === '2-1' || this.selfSign === '2-2') {
                        team = this.board.getChildByName('Header').getChildByName('team1');
                      }

                      avatar1 = team.getChildByName('avatar-1');
                      avatar2 = team.getChildByName('avatar-2');
                      avatar1Opacity = avatar1.getComponent(UIOpacity);
                      avatar2Opacity = avatar2.getComponent(UIOpacity);

                      if (isController) {
                        this.tipNode_tip.active = true;
                        this.tipNode_wait.active = false;
                      } else {
                        this.tipNode_tip.active = false;
                        this.tipNode_wait.active = true;
                      }

                      if (isController && (this.selfSign === '1-1' || this.selfSign === '2-1') || !isController && (this.selfSign === '1-2' || this.selfSign === '2-2')) {
                        avatar2.getComponent(UITransform).priority = -1;
                        avatar1.getComponent(UITransform).priority = 1;
                        tween(avatar2).to(.6, {
                          position: this.selfSign === '1-1' || this.selfSign === '1-2' ? new Vec3(-95, -46, 0) : new Vec3(95, -46, 0),
                          scale: new Vec3(.9, .9, .9)
                        }).start();
                        tween(avatar2Opacity).to(.6, {
                          opacity: 122
                        }).start();
                        tween(avatar1).to(.6, {
                          position: this.selfSign === '1-1' || this.selfSign === '1-2' ? new Vec3(-65, 30, 0) : new Vec3(65, 30, 0)
                        }).start();
                        tween(avatar1).to(.3, {
                          scale: new Vec3(1.06, 1.06, 1.06)
                        }).then(tween(avatar1).to(.3, {
                          scale: new Vec3(1, 1, 1)
                        }).start()).start();
                        tween(avatar1Opacity).to(.6, {
                          opacity: 255
                        }).start();
                      } else {
                        avatar1.getComponent(UITransform).priority = -1;
                        avatar2.getComponent(UITransform).priority = 1;
                        tween(avatar1).to(.6, {
                          position: this.selfSign === '1-1' || this.selfSign === '1-2' ? new Vec3(-95, -46, 0) : new Vec3(95, -46, 0),
                          scale: new Vec3(.9, .9, .9)
                        }).start();
                        tween(avatar1Opacity).to(.6, {
                          opacity: 122
                        }).start();
                        tween(avatar2).to(.6, {
                          position: this.selfSign === '1-1' || this.selfSign === '1-2' ? new Vec3(-65, 30, 0) : new Vec3(65, 30, 0)
                        }).start();
                        tween(avatar2).to(.3, {
                          scale: new Vec3(1.06, 1.06, 1.06)
                        }).then(tween(avatar2).to(.3, {
                          scale: new Vec3(1, 1, 1)
                        }).start());
                        tween(avatar2Opacity).to(.6, {
                          opacity: 255
                        }).start();
                      }

                    case 9:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function changePlayer(_x7) {
              return _changePlayer.apply(this, arguments);
            }

            return changePlayer;
          }()
        }, {
          key: "setTipAvatar",
          value: function () {
            var _setTipAvatar = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(isController) {
              var pos, uipos_userTip, ui;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      uipos_userTip = new Vec3();
                      ui = this.board;
                      pos = this.SDK.gameManager.Player.node.getPosition();
                      pos.y += 2.2;
                      this.SDK.gameManager.camera.convertToUINode(pos, ui, uipos_userTip);
                      this.SDK.gameManager.userTipNode.setPosition(uipos_userTip);

                      if (!isController) {
                        _context6.next = 11;
                        break;
                      }

                      _context6.next = 9;
                      return this.SDK.gameManager.Util.loadImg('Texture/UI/gaming/me-001/spriteFrame', this.SDK.gameManager.userTipNode.getChildByName('avatar'));

                    case 9:
                      _context6.next = 13;
                      break;

                    case 11:
                      _context6.next = 13;
                      return this.SDK.gameManager.Util.loadImg('Texture/UI/main/banner@2x (3)/spriteFrame', this.SDK.gameManager.userTipNode.getChildByName('avatar'));

                    case 13:
                      this.SDK.gameManager.userTipNode.active = true;

                    case 14:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function setTipAvatar(_x8) {
              return _setTipAvatar.apply(this, arguments);
            }

            return setTipAvatar;
          }()
        }, {
          key: "setIntroduce",
          value: function setIntroduce(title, box) {
            title && (this.introduceTitleNode.getComponent(Label).string = title);
            box && (this.introduceBoxNode.getChildByName('Label').getComponent(Label).string = box);
          }
        }, {
          key: "refreshScore",
          value: function refreshScore(score1, score2) {
            var _score1 = score1;
            var _score2 = score2;
            var scoreEl = this.board.getChildByName('Header').getChildByName('score');
            var rate1;
            if (_score1 + _score2 === 0) rate1 = 0.5;else {
              rate1 = _score1 / (_score1 + _score2);
            }
            rate1 < 0.2 && (rate1 = 0.2);
            rate1 > 0.8 && (rate1 = 0.8);
            if (rate1 > 0.24 && rate1 < 0.5) rate1 *= 0.85;
            if (rate1 > 0.5 && rate1 < 0.6) rate1 *= 1.2;
            tween(scoreEl.getComponent(ProgressBar)).to(.3, {
              progress: rate1
            }).start();
            scoreEl.getChildByName('redScore').getComponent(Label).string = "".concat(_score1, "\u5206");
            scoreEl.getChildByName('blueScore').getComponent(Label).string = "".concat(_score2, "\u5206");
          }
        }, {
          key: "setFocus",
          value: function setFocus(node, radius) {
            this.mask.setFocus(node, this.SDK.gameManager.camera, radius);
          }
        }, {
          key: "changeSoundUI",
          value: function changeSoundUI(sign) {
            this.SDK.gameManager.Util.loadImg(sign ? '/Texture/UI/gaming/kaiqi@2x/spriteFrame' : '/Texture/UI/gaming/gianbi@2x/spriteFrame', this.board.getChildByName('nav').getChildByName('music'));
          }
        }]);

        return UIControl;
      }();

      (function (TeachState) {
        TeachState[TeachState["normal"] = 0] = "normal";
        TeachState[TeachState["try"] = 1] = "try";
        TeachState[TeachState["wait"] = 2] = "wait";
      })(TeachState || (TeachState = {}));

      (function (TeachStage) {
        TeachStage[TeachStage["single"] = 0] = "single";
        TeachStage[TeachStage["multiple"] = 1] = "multiple";
        TeachStage[TeachStage["gaming"] = 2] = "gaming";
        TeachStage[TeachStage["end"] = 3] = "end";
      })(TeachStage || (TeachStage = {}));

      _export("TeachingBoard", TeachingBoard = (_dec = throttle(), _dec2 = throttle(), _dec3 = throttle(), _dec4 = throttle(), _dec5 = throttle(), _dec6 = throttle(), _dec7 = throttle(), _dec8 = throttle(), _dec9 = throttle(), (_class = (_temp = /*#__PURE__*/function (_BaseBoard) {
        _inherits(TeachingBoard, _BaseBoard);

        function TeachingBoard(scene, sdk) {
          var _this2;

          _classCallCheck(this, TeachingBoard);

          _this2 = _possibleConstructorReturn(this, _getPrototypeOf(TeachingBoard).call(this, scene, sdk));
          _this2.TeachState = {
            0: _this2.action_1.bind(_assertThisInitialized(_this2)),
            1: _this2.action_2.bind(_assertThisInitialized(_this2)),
            2: _this2.action_3.bind(_assertThisInitialized(_this2)),
            3: _this2.action_4.bind(_assertThisInitialized(_this2)),
            4: _this2.action_5.bind(_assertThisInitialized(_this2)),
            5: _this2.action_6.bind(_assertThisInitialized(_this2)) // 6: this.action_7.bind(this),
            // 7: this.action_8.bind(this),
            // 8: this.action_9.bind(this),
            // 9: this.action_10.bind(this),

          };
          _this2.uiControl = null;
          _this2.name = 'TeachingBoard';
          _this2.uiControl = new UIControl(_assertThisInitialized(_this2), _this2.SDK);
          return _this2;
        }

        _createClass(TeachingBoard, [{
          key: "initData",
          value: function initData() {
            _get(_getPrototypeOf(TeachingBoard.prototype), "initData", this).call(this);

            this.teachMap = [[1, 2.5, 4, 0, 0, {
              x: 0,
              y: 0,
              z: 0
            }], [1, 2.5, 4, 0, 3, {
              x: 0,
              y: 0,
              z: 0
            }]];
            this.SDK.gameManager.updateCenterNode(false);
            this.teachIndex = 0;
            this.curBoxIndex = 0;
            this.score = 0;
            this.enemyScore = 0;
            this.perfectCount = 0;
            this.jumpCount = 0;
            this.time = 0;
            this.teachState = TeachState.normal;
            this.teachStage = TeachStage.single;
            this.Player = this.SDK.gameManager.Player;
            this.OtherPlayer = this.SDK.gameManager.OtherTeam;
            this.uiControl.mask.reset();
            this.uiControl.refreshScore(0, 0);
            this.SDK.gameManager.camera.node.setPosition(this.SDK.gameManager._origin_camera_pos);
            this.SDK.gameManager.plane.setPosition(new Vec3(0, 0, 0));
            this.action_1();
          }
        }, {
          key: "setListener",
          value: function setListener() {
            _get(_getPrototypeOf(TeachingBoard.prototype), "setListener", this).call(this);

            this.SDK.gameManager.timerSingal = this.onTimerSingal.bind(this);
            this.SDK.gameManager.teachJumpSingal = this.jumpEnd.bind(this);
            this.SDK.Room.onCancelMatch = this.onCancelMatch.bind(this);
            this.SDK.Room.onMatch = this.onMatch.bind(this);
          }
        }, {
          key: "onCancelMatch",
          value: function onCancelMatch(event) {}
        }, {
          key: "onMatch",
          value: function onMatch(event) {}
        }, {
          key: "onTimerSingal",
          value: function () {
            var _onTimerSingal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var a, curPos, nextPos, face, randomDis, dis, newPos, jumpResult;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (this.teachStage == TeachStage.gaming) {
                        this.time -= 0.2;
                        this.uiControl.setTime(Math.floor(this.time)); // 实战演示中敌人AI的跳跃控制

                        a = Math.floor(this.time * 5);

                        if (a % 8 == 0) {
                          curPos = this.OtherPlayer.node.getPosition();
                          nextPos = this.OtherPlayer.nextBox.node.getPosition();
                          face = new Vec2(nextPos.x - curPos.x, nextPos.z - curPos.z);
                          randomDis = randomRange(-1, 1);
                          dis = Vec2.distance(new Vec2(curPos.x, curPos.z), new Vec2(nextPos.x, nextPos.z)) + randomDis;
                          newPos = this.SDK.gameManager.Util.getPosWithVec(curPos, face, dis);
                          jumpResult = {
                            time: 0,
                            status: JumpStatus.next,
                            offset: [newPos.x - nextPos.x, newPos.z - nextPos.z],
                            perfect: Math.abs(randomDis) < .325 ? true : false,
                            distance: dis
                          };
                          this.SDK.gameManager.OtherTeam.PowerEnd(jumpResult);
                        }

                        if (this.time <= 0) {
                          this.nextState();
                        }
                      }

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function onTimerSingal() {
              return _onTimerSingal.apply(this, arguments);
            }

            return onTimerSingal;
          }()
        }, {
          key: "onAvatarSingal",
          value: function onAvatarSingal(isSelf, isStart) {
            if (isSelf) {
              if (isStart) {
                this.uiControl.selfAvatar.getComponent(Avatar).timeStart();
              } else {
                this.uiControl.selfAvatar.getComponent(Avatar).reset();
              }
            } else {
              if (isStart) {
                this.uiControl.teammaterAvatar.getComponent(Avatar).timeStart();
              } else {
                this.uiControl.teammaterAvatar.getComponent(Avatar).reset();
              }
            }
          }
        }, {
          key: "InitEvent",
          value: function () {
            var _InitEvent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var interaction;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _get(_getPrototypeOf(TeachingBoard.prototype), "InitEvent", this).call(this);

                      interaction = this.board.getChildByName('Interaction-ex');
                      this.board.getChildByName('nav').getChildByName('music').on(SystemEventType.TOUCH_END, this.switchSound, this);
                      this.board.getChildByName('nav').getChildByName('back').on(SystemEventType.TOUCH_END, this.leave, this);
                      this.board.getChildByName('introduce-box').getChildByName('next').on(SystemEventType.TOUCH_END, this.nextStateAction, this);
                      this.board.getChildByName('introduce-box').getChildByName('again').on(SystemEventType.TOUCH_END, this.againAction, this);
                      systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onTouchDown, this);
                      systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onTouchUp, this);
                      interaction.getChildByName('emoji_1').on(SystemEventType.TOUCH_END, this.sendEmoji_1, this);
                      interaction.getChildByName('emoji_2').on(SystemEventType.TOUCH_END, this.sendEmoji_2, this);
                      interaction.getChildByName('emoji_3').on(SystemEventType.TOUCH_END, this.sendEmoji_3, this);
                      interaction.getChildByName('emoji_4').on(SystemEventType.TOUCH_END, this.sendEmoji_4, this);

                    case 12:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function InitEvent() {
              return _InitEvent.apply(this, arguments);
            }

            return InitEvent;
          }()
        }, {
          key: "destroy",
          value: function destroy() {
            _get(_getPrototypeOf(TeachingBoard.prototype), "destroy", this).call(this);

            systemEvent.off(SystemEvent.EventType.TOUCH_START);
            systemEvent.off(SystemEvent.EventType.TOUCH_END);
            var interaction = this.board.getChildByName('Interaction-ex');
            this.board.getChildByName('nav').getChildByName('music').off(SystemEventType.TOUCH_END);
            this.board.getChildByName('nav').getChildByName('back').off(SystemEventType.TOUCH_END);
            this.board.getChildByName('introduce-box').getChildByName('next').off(SystemEventType.TOUCH_END);
            this.board.getChildByName('introduce-box').getChildByName('again').off(SystemEventType.TOUCH_END);
            interaction.getChildByName('emoji_1').off(SystemEventType.TOUCH_END);
            interaction.getChildByName('emoji_2').off(SystemEventType.TOUCH_END);
            interaction.getChildByName('emoji_3').off(SystemEventType.TOUCH_END);
            interaction.getChildByName('emoji_4').off(SystemEventType.TOUCH_END);
          }
        }, {
          key: "switchSound",
          value: function switchSound() {
            this.SDK.gameManager.Setting.switch_audio = !this.SDK.gameManager.Setting.switch_audio;
            this.uiControl.changeSoundUI(this.SDK.gameManager.Setting.switch_audio);
          }
        }, {
          key: "nextStateAction",
          value: function nextStateAction() {
            this.nextState();
          }
        }, {
          key: "againAction",
          value: function againAction() {
            this.board.getChildByName('mask').active = false;
            var newState = this.teachIndex - 1;
            log('教学流程', '回到上一步', this.teachIndex);

            if (this.TeachState[newState]) {
              this.TeachState[newState]();
              this.teachIndex = newState;
              return true;
            }
          }
        }, {
          key: "clearScoreNode",
          value: function clearScoreNode() {
            for (var index = 0; index < this.SDK.gameManager.scoreNodeList.length; index++) {
              var element = this.SDK.gameManager.scoreNodeList[index];
              element.node.destroy();
              if (element.perfect) element.perfect.destroy();
            }

            this.SDK.gameManager.scoreNodeList = [];
          }
        }, {
          key: "leave",
          value: function leave() {
            var _this3 = this;

            log('教学流程', '点击退出演示,弹出选择框', this.SDK.gameManager.scoreNodeList);
            this.SDK.gameManager.Util.callTDGA(StatisticsKey.Guidance_skip_clicked);
            new Dialog(this.scene, this.SDK, "确认要跳过游戏演示吗?", DialogButtonType.multiple, '开始游戏', '我再看看').show(this, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var code, loverGroupId, _code2, teammaterInfo, _code, groupInfo;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      if (!_this3.SDK.curDialog.dead) {
                        _context9.next = 2;
                        break;
                      }

                      return _context9.abrupt("return");

                    case 2:
                      _this3.SDK.curDialog.destroy();

                      _this3.SDK.gameManager.isTeached = true;

                      _this3.clearScoreNode();

                      _this3.SDK.gameManager.Util.callTDGA(StatisticsKey.Guidance_skip_confirmed);

                      if (!_this3.SDK.gameManager.isQuickMatching) {
                        _context9.next = 21;
                        break;
                      }

                      _context9.next = 10;
                      return _this3.SDK.matchingSingle();

                    case 10:
                      code = _context9.sent;

                      if (!(code == MGOBE.ErrCode.EC_OK)) {
                        _context9.next = 16;
                        break;
                      }

                      _context9.next = 14;
                      return _this3.ChangeBoard(_this3.SDK.gameManager.MatchingBoard);

                    case 14:
                      _context9.next = 19;
                      break;

                    case 16:
                      _this3.SDK.cancelMatchinig();

                      _context9.next = 19;
                      return _this3.ChangeBoard(_this3.SDK.gameManager.MainBoard);

                    case 19:
                      _context9.next = 48;
                      break;

                    case 21:
                      _context9.next = 23;
                      return _this3.SDK.gameManager.Util.http(_this3.SDK.gameManager.Config.serverURL.group, 'GET', null, false, _this3.SDK.gameManager.AccessToken);

                    case 23:
                      loverGroupId = _context9.sent;

                      if (!loverGroupId) {
                        _context9.next = 36;
                        break;
                      }

                      loverGroupId = loverGroupId['other_group_id'];
                      _context9.next = 28;
                      return _this3.SDK.joinGroup(loverGroupId);

                    case 28:
                      _code2 = _context9.sent;

                      if (!(_code2 === MGOBE.ErrCode.EC_OK)) {
                        _context9.next = 36;
                        break;
                      }

                      _context9.next = 32;
                      return _this3.SDK.getTeammate();

                    case 32:
                      teammaterInfo = _context9.sent;

                      if (!(teammaterInfo.commonNetworkState != NetState.Offline)) {
                        _context9.next = 36;
                        break;
                      }

                      _this3.ChangeBoard(_this3.SDK.gameManager.WaitLoverBoard);

                      return _context9.abrupt("return");

                    case 36:
                      _context9.next = 38;
                      return _this3.SDK.createGroup();

                    case 38:
                      _code = _context9.sent;

                      if (!(_code === 0)) {
                        _context9.next = 47;
                        break;
                      }

                      _context9.next = 42;
                      return _this3.SDK.getGroupInfo();

                    case 42:
                      groupInfo = _context9.sent;

                      _this3.SDK.gameManager.Util.http(_this3.SDK.gameManager.Config.serverURL.group, 'POST', {
                        'group_id': groupInfo.id
                      }, false, _this3.SDK.gameManager.AccessToken);

                      _this3.ChangeBoard(_this3.SDK.gameManager.WaitLoverBoard);

                      _context9.next = 48;
                      break;

                    case 47:
                      _this3.ChangeBoard(_this3.SDK.gameManager.MainBoard);

                    case 48:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            })), function () {
              if (_this3.SDK.curDialog.dead) return;

              _this3.SDK.curDialog.destroy();
            });
          }
        }, {
          key: "endActionYes",
          value: function endActionYes() {
            var _this4 = this;

            this.board.getChildByName('dialog-end').active = false;
            this.SDK.gameManager.isTeached = true;
            this.SDK.gameManager.Util.callTDGA(StatisticsKey.Guidance_pass_start);
            setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var code, loverGroupId, _code4, teammaterInfo, _code3, groupInfo;

              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      if (!_this4.SDK.gameManager.isQuickMatching) {
                        _context10.next = 14;
                        break;
                      }

                      _context10.next = 3;
                      return _this4.SDK.matchingSingle();

                    case 3:
                      code = _context10.sent;

                      if (!(code == MGOBE.ErrCode.EC_OK)) {
                        _context10.next = 9;
                        break;
                      }

                      _context10.next = 7;
                      return _this4.ChangeBoard(_this4.SDK.gameManager.MatchingBoard);

                    case 7:
                      _context10.next = 12;
                      break;

                    case 9:
                      _this4.SDK.cancelMatchinig();

                      _context10.next = 12;
                      return _this4.ChangeBoard(_this4.SDK.gameManager.MainBoard);

                    case 12:
                      _context10.next = 41;
                      break;

                    case 14:
                      _context10.next = 16;
                      return _this4.SDK.gameManager.Util.http(_this4.SDK.gameManager.Config.serverURL.group, 'GET', null, false, _this4.SDK.gameManager.AccessToken);

                    case 16:
                      loverGroupId = _context10.sent;

                      if (!loverGroupId) {
                        _context10.next = 29;
                        break;
                      }

                      loverGroupId = loverGroupId['other_group_id'];
                      _context10.next = 21;
                      return _this4.SDK.joinGroup(loverGroupId);

                    case 21:
                      _code4 = _context10.sent;

                      if (!(_code4 === MGOBE.ErrCode.EC_OK)) {
                        _context10.next = 29;
                        break;
                      }

                      _context10.next = 25;
                      return _this4.SDK.getTeammate();

                    case 25:
                      teammaterInfo = _context10.sent;

                      if (!(teammaterInfo.commonNetworkState != NetState.Offline)) {
                        _context10.next = 29;
                        break;
                      }

                      _this4.ChangeBoard(_this4.SDK.gameManager.WaitLoverBoard);

                      return _context10.abrupt("return");

                    case 29:
                      _context10.next = 31;
                      return _this4.SDK.createGroup();

                    case 31:
                      _code3 = _context10.sent;

                      if (!(_code3 === 0)) {
                        _context10.next = 40;
                        break;
                      }

                      _context10.next = 35;
                      return _this4.SDK.getGroupInfo();

                    case 35:
                      groupInfo = _context10.sent;

                      _this4.SDK.gameManager.Util.http(_this4.SDK.gameManager.Config.serverURL.group, 'POST', {
                        'group_id': groupInfo.id
                      }, false, _this4.SDK.gameManager.AccessToken);

                      _this4.ChangeBoard(_this4.SDK.gameManager.WaitLoverBoard);

                      _context10.next = 41;
                      break;

                    case 40:
                      _this4.ChangeBoard(_this4.SDK.gameManager.MainBoard);

                    case 41:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            })), 500);
          }
        }, {
          key: "endActionNo",
          value: function endActionNo() {
            this.board.getChildByName('dialog-end').active = false;
            this.SDK.gameManager.Util.callTDGA(StatisticsKey.Guidance_pass_again);
            this.ChangeBoard(this.SDK.gameManager.TeachingBoard);
          }
        }, {
          key: "nextState",
          value: function nextState() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var newState = this.teachIndex + 1;
            log('教学流程', '进入下一步', this.teachIndex);

            if (this.TeachState[newState]) {
              this.TeachState[newState](params);
              this.teachIndex = newState;
              return true;
            } else {
              this.teachState = TeachState.normal;
              this.teachStage = TeachStage.end;
              this.board.getChildByName('dialog-end').active = true;
              this.board.getChildByName('dialog-end').getChildByName('content').getChildByName('replay').on(SystemEventType.TOUCH_END, this.endActionNo, this);
              this.board.getChildByName('dialog-end').getChildByName('content').getChildByName('next').on(SystemEventType.TOUCH_END, this.endActionYes, this); // new Dialog(this.scene, this.SDK, "知道双人跳一跳怎么玩了吗?点击'立即开始'开启游戏", DialogButtonType.multiple, '立即开始', '重新演示').show(this, this.endActionYes, this.endActionNo);

              return false;
            }
          }
        }, {
          key: "onTouchDown",
          value: function onTouchDown(event) {
            switch (this.teachState) {
              case TeachState["try"]:
                this.Player._stat_power = true;
                this.Player.jumpResult.time = 0;
                this.Player.particleOpen(true);
                this.SDK.gameManager.Util.playAudio(this.SDK.gameManager.audio_touch_down);
                break;

              default:
                break;
            }
          }
        }, {
          key: "jumpEnd",
          value: function () {
            var _jumpEnd = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(isEnemy) {
              var _this5 = this;

              var jumpPlayer, status, isPerfect, scoreNode, camera_pos, cur_pos, plane_pos, score, next_pos;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      jumpPlayer = null;

                      if (isEnemy) {
                        jumpPlayer = this.OtherPlayer;
                      } else {
                        jumpPlayer = this.Player;
                      }

                      status = jumpPlayer.jumpResult.status;
                      isPerfect = jumpPlayer.jumpResult.perfect;
                      scoreNode = null;

                      if (!(status == JumpStatus.next)) {
                        _context11.next = 32;
                        break;
                      }

                      camera_pos = new Vec3();
                      cur_pos = new Vec3();
                      plane_pos = new Vec3();

                      if (isEnemy) {
                        _context11.next = 26;
                        break;
                      }

                      jumpPlayer.nextBox.node.getPosition(cur_pos);
                      jumpPlayer.nextBox.node.getPosition(plane_pos);
                      plane_pos.y = 0;
                      this.curBoxIndex += 1;
                      jumpPlayer.curBox = this.SDK.gameManager.map[this.curBoxIndex];
                      this.SDK.gameManager.curBox = jumpPlayer.curBox;
                      jumpPlayer.nextBox = this.SDK.gameManager.map[this.curBoxIndex + 1];
                      this.SDK.gameManager.nextBox = jumpPlayer.nextBox;

                      if (isPerfect) {
                        this.perfectCount += 1;
                      } else {
                        this.perfectCount = 0;
                      }

                      score = this.SDK.gameManager.Util.getScore(this.perfectCount);
                      this.score += score; // 显示得分特效

                      _context11.next = 23;
                      return this.SDK.gameManager.showScore(score, this.perfectCount);

                    case 23:
                      scoreNode = _context11.sent;
                      _context11.next = 29;
                      break;

                    case 26:
                      if (isPerfect) {
                        this.enemyScore += 2;
                      } else {
                        this.enemyScore += 1;
                      } // this.OtherPlayer.index += 1;


                      jumpPlayer.curBox = this.SDK.gameManager.map[this.OtherPlayer.index];
                      jumpPlayer.nextBox = this.SDK.gameManager.map[this.OtherPlayer.index + 1];

                    case 29:
                      if (jumpPlayer.nextBox) {
                        if (!isEnemy) {
                          next_pos = new Vec3();
                          jumpPlayer.nextBox.node.getPosition(next_pos);
                          cur_pos.x = (cur_pos.x + next_pos.x) / 2.0;
                          cur_pos.z = (cur_pos.z + next_pos.z) / 2.0;
                          Vec3.add(camera_pos, cur_pos, this.SDK.gameManager._origin_camera_pos);
                          tween(this.SDK.gameManager.camera.node).to(0.5, {
                            position: camera_pos
                          }, {}).start();
                          tween(this.SDK.gameManager.plane).to(0.5, {
                            position: plane_pos
                          }, {}).start();
                        }
                      } else {
                        // 创建地图新的节点
                        this.teachMap.push([1, 2.8, 4, 0, 0, {
                          x: 0,
                          y: 0,
                          z: 0
                        }]);
                        this.SDK.gameManager.drawMap(this.teachMap);
                      }

                      _context11.next = 33;
                      break;

                    case 32:
                      if (!isEnemy) {
                        this.perfectCount = 0;
                      }

                    case 33:
                      this.uiControl.refreshScore(this.score, this.enemyScore);

                      if (!isEnemy) {
                        if (this.teachStage == TeachStage.multiple) {
                          this.jumpCount += 1;

                          if (this.jumpCount >= 4) {
                            this.nextState({
                              jumpInfo: this.Player.jumpResult,
                              scoreNode: scoreNode
                            });
                          } else {
                            this.isControler = !this.isControler;
                            this.uiControl.changePlayer(this.isControler);
                            this.uiControl.setTipAvatar(this.isControler);
                            this.Player.setModel(this.isControler ? 1 : 2);

                            if (this.isControler) {
                              this.teachState = TeachState["try"];
                            } else {
                              this.teachState = TeachState.wait;
                              setTimeout(function () {
                                _this5.Player.AI = true;
                              }, 2000);
                            }
                          }
                        } else if (this.teachStage == TeachStage.gaming) {
                          this.isControler = !this.isControler;
                          this.uiControl.changePlayer(this.isControler);
                          this.uiControl.setTipAvatar(this.isControler);
                          this.Player.setModel(this.isControler ? 1 : 2);

                          if (this.isControler) {
                            this.teachState = TeachState["try"];
                          } else {
                            this.teachState = TeachState.wait;
                            setTimeout(function () {
                              if (_this5.teachStage == TeachStage.gaming) {
                                _this5.Player.AI = true;
                              }
                            }, 2000);
                          }
                        } else {
                          this.nextState({
                            jumpInfo: this.Player.jumpResult,
                            scoreNode: scoreNode
                          });
                        }
                      }

                    case 35:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function jumpEnd(_x9) {
              return _jumpEnd.apply(this, arguments);
            }

            return jumpEnd;
          }()
        }, {
          key: "onTouchUp",
          value: function onTouchUp(event) {
            if (this.teachState == TeachState["try"] && this.Player._stat_power) {
              /* 为了不修改到原本的棋子跳跃流程与逻辑,直接对教程跳跃中需要的内容在此处进行处理 */
              // 设置蓄力标记为false,根据蓄力时间计算得到跳跃相关信息
              this.Player._stat_power = false;
              this.Player.function_getJumpInfo(); // 重置模型状态

              this.Player.modelBody.setScale(new Vec3(1, 1, 1));
              this.Player.modelHead.setPosition(this.Player.modelHeadPos);

              if (this.Player.modelTire) {
                this.Player.modelTire.setPosition(new Vec3(0, 0, 0));
              } // 修正起跳点为标准高度


              var PlayerPos = new Vec3();
              this.Player.node.getPosition(PlayerPos);
              PlayerPos.y = this.Player.originPosY;
              this.Player.node.setPosition(PlayerPos);
              this.Player.node.getPosition(this.Player.curPostion); // 播放盒子回弹动画

              this.Player.curBox.node.getComponent(Box).startElastic();
              this.Player.particleOpen(false); // 将需要记录的中间值进行赋值

              this.Player._axis = this.Player.gameManager.Util.getJumpAxis(this.Player.node, this.Player.nextBox.node);
              this.Player.getFace(); // 设置起跳标记为true

              this.Player._stat_jump = true;
              this.teachState = TeachState.normal;
            }
          }
          /* 每一步的入口函数 */

        }, {
          key: "action_1",
          value: function () {
            var _action_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var manager;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      manager = this.SDK.gameManager; // 伪造一份地图

                      this.teachMap = [[1, 2.5, 4, 0, 0, {
                        x: 0,
                        y: 0,
                        z: 0
                      }], [1, 2.5, 4, 0, 3, {
                        x: 0,
                        y: 0,
                        z: 0
                      }]];
                      _context12.next = 5;
                      return this.SDK.gameManager.drawMap(this.teachMap, true);

                    case 5:
                      this.Player.curBox = this.SDK.gameManager.map[0];
                      this.Player.nextBox = this.SDK.gameManager.map[1]; // 给敌人和自己的角色创建模型,设置初始位置

                      _context12.next = 9;
                      return manager.Player.setModel(1);

                    case 9:
                      _context12.next = 11;
                      return manager.OtherTeam.setModel(-1);

                    case 11:
                      manager.Player.node.setPosition(new Vec3(0, manager.Player.originPosY, 0));
                      this.Player.node.getPosition(this.Player.curPostion);
                      this.jumpCount = 0;
                      this.perfectCount = 0; // 设置文案

                      this.uiControl.introduceBoxNode.active = false;
                      this.uiControl.introduceTitleNode.getComponent(Label).string = '先来一把单人跳一跳让我看看你的实力吧';
                      this.uiControl.introduceBoxNode1.getChildByName('Label').getComponent(Label).string = '长按蓄力,松手控制向前跳';
                      this.uiControl.introduceBoxNode1.active = true;
                      this.uiControl.touch.active = true;
                      this.uiControl.introduceTitleNode.active = true;
                      this.uiControl.interactionNode.active = false;
                      this.uiControl.headerNode.active = false;
                      this.uiControl.introduceBoxNode.getChildByName('again').active = false;
                      this.uiControl.introduceBoxNode.getChildByName('next').active = false;
                      this.uiControl.introduceBoxNode.getChildByName('next').getChildByName('Label').getComponent(Label).string = '下一步';
                      this.uiControl.tipNode_tip.active = false;
                      this.uiControl.tipNode_wait.active = false;
                      this.SDK.gameManager.userTipNode.active = false;
                      this.isControler = true;
                      this.teachStage = TeachStage.single;
                      this.teachState = TeachState["try"];

                    case 32:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));

            function action_1() {
              return _action_.apply(this, arguments);
            }

            return action_1;
          }()
        }, {
          key: "action_2",
          value: function action_2() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.uiControl.touch.active = false;
            this.uiControl.introduceBoxNode1.active = false;
            this.uiControl.introduceBoxNode.active = false;
            this.teachState = TeachState.normal;
            this.uiControl.introduceTitleNode.active = false;
            this.board.getChildByName('mask').active = true;
            this.uiControl.introduceBoxNode.getChildByName('next').getChildByName('arrow').active = true;

            switch (params.jumpInfo.status) {
              case JumpStatus.next:
                if (params.jumpInfo.perfect) {
                  this.uiControl.setIntroduce('', '太棒了\n那相信双人的跳一跳\n你也没问题');
                } else {
                  this.uiControl.setIntroduce('', '你已经掌握跳一跳的精髓了\n那相信双人的跳一跳\n你也没问题');
                }

                break;

              case JumpStatus.dead:
              case JumpStatus.current:
                this.uiControl.setIntroduce('', '好遗憾\n有点担心双人的跳一跳\n对你来说会不会太难');
                this.uiControl.introduceBoxNode.getChildByName('again').active = true;
                this.uiControl.introduceBoxNode.getChildByName('next').getChildByName('arrow').active = false;
                this.uiControl.introduceBoxNode.getChildByName('again').getChildByName('arrow').active = true;
                break;

              default:
                break;
            }

            this.uiControl.introduceBoxNode.active = true;
            this.uiControl.introduceBoxNode.getChildByName('next').active = true;
          }
        }, {
          key: "action_3",
          value: function () {
            var _action_2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      this.uiControl.introduceBoxNode.active = false;
                      this.uiControl.introduceBoxNode.getChildByName('again').active = false;
                      this.uiControl.introduceBoxNode.getChildByName('next').active = false;
                      this.uiControl.interactionNode.active = false;
                      this.uiControl.headerNode.active = false; // 设置文案

                      this.uiControl.setIntroduce('', '两个人共同控制棋子\n一人跳完后另一人再跳');
                      this.board.getChildByName('emojiTip').active = true;
                      this.teachStage = TeachStage.multiple;
                      this.uiControl.interactionNode.active = true;
                      this.uiControl.introduceBoxNode.active = true; // 展示 该你跳了 提示

                      this.isControler = false;
                      this.uiControl.changePlayer(this.isControler);
                      this.uiControl.setTipAvatar(this.isControler);
                      this.uiControl.mask.node.active = true;

                    case 15:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));

            function action_3() {
              return _action_2.apply(this, arguments);
            }

            return action_3;
          }()
        }, {
          key: "action_4",
          value: function action_4() {
            var _this6 = this;

            this.uiControl.mask.node.active = false;
            this.teachState = TeachState.wait;
            setTimeout(function () {
              _this6.Player.AI = true;
              setTimeout(function () {
                _this6.uiControl.setIntroduce('', '头像和提示变更为“我“\n就是到你跳了');

                _this6.board.getChildByName('emojiTip').active = false;
              }, 1000);
            }, 2000);
          }
        }, {
          key: "action_5",
          value: function action_5() {
            this.uiControl.introduceBoxNode.active = false;
            this.uiControl.tipNode_tip.active = false;
            this.uiControl.tipNode_wait.active = false;
            this.uiControl.introduceBoxNode.getChildByName('next').getChildByName('Label').getComponent(Label).string = '接受挑战';
            this.uiControl.setIntroduce('', '看来你已经适应了轮流跳了\n给你加个对手怎么样\n要加油超过他们呢');
            this.board.getChildByName('mask').active = true;
            this.uiControl.introduceBoxNode.active = true;
            this.uiControl.introduceBoxNode.getChildByName('again').active = false;
            this.uiControl.introduceBoxNode.getChildByName('again').getChildByName('arrow').active = false;
            this.uiControl.introduceBoxNode.getChildByName('next').active = true;
            this.uiControl.introduceBoxNode.getChildByName('next').getChildByName('arrow').active = true;
          }
        }, {
          key: "action_6",
          value: function () {
            var _action_3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var manager;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      this.uiControl.introduceBoxNode.active = false;
                      this.uiControl.introduceTitleNode.active = false;
                      this.uiControl.headerNode.active = true;
                      this.board.getChildByName('mask').active = false;
                      this.score = 0;
                      this.time = 20;
                      this.perfectCount = 0;
                      this.curBoxIndex = 0;
                      this.isControler = true;
                      this.uiControl.setTime(this.time);
                      this.uiControl.refreshScore(0, 0);
                      this.uiControl.changePlayer(this.isControler);
                      this.uiControl.setTipAvatar(this.isControler);
                      this.teachStage = TeachStage.gaming;
                      this.teachState = TeachState["try"];
                      this.OtherPlayer.index = 0;
                      manager = this.SDK.gameManager; // 伪造一份地图

                      this.teachMap = [[1, 2.5, 4, 0, 0, {
                        x: 0,
                        y: 0,
                        z: 0
                      }], [1, 2.5, 4, 0, 3, {
                        x: 0,
                        y: 0,
                        z: 0
                      }]];
                      _context14.next = 21;
                      return this.SDK.gameManager.drawMap(this.teachMap, true);

                    case 21:
                      this.Player.curBox = this.SDK.gameManager.map[0];
                      this.Player.nextBox = this.SDK.gameManager.map[1];
                      this.OtherPlayer.curBox = this.SDK.gameManager.map[0];
                      this.OtherPlayer.nextBox = this.SDK.gameManager.map[1]; // 给敌人和自己的角色创建模型,设置初始位置

                      _context14.next = 27;
                      return manager.Player.setModel(1);

                    case 27:
                      _context14.next = 29;
                      return manager.OtherTeam.setModel(1);

                    case 29:
                      manager.Player.node.setPosition(new Vec3(.7, manager.Player.originPosY, 0));
                      manager.OtherTeam.node.setPosition(new Vec3(-.7, manager.Player.originPosY, 0));
                      this.Player.node.getPosition(this.Player.curPostion);
                      this.SDK.gameManager.camera.node.setPosition(this.SDK.gameManager._origin_camera_pos);
                      this.SDK.gameManager.plane.setPosition(new Vec3(0, 0, 0));

                    case 34:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function action_6() {
              return _action_3.apply(this, arguments);
            }

            return action_6;
          }()
        }, {
          key: "sendEmoji_1",
          value: function () {
            var _sendEmoji_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var selfInfo;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.SDK.getPlayerInfo();

                    case 2:
                      selfInfo = _context15.sent;
                      this.uiControl.showEmoji(EmojiType.Angry, selfInfo.id);

                      if (this.teachIndex == 2) {
                        this.nextState();
                      }

                    case 5:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));

            function sendEmoji_1() {
              return _sendEmoji_.apply(this, arguments);
            }

            return sendEmoji_1;
          }()
        }, {
          key: "sendEmoji_2",
          value: function () {
            var _sendEmoji_2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var selfInfo;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.SDK.getPlayerInfo();

                    case 2:
                      selfInfo = _context16.sent;
                      this.uiControl.showEmoji(EmojiType.Worship, selfInfo.id);

                      if (this.teachIndex == 2) {
                        this.nextState();
                      }

                    case 5:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));

            function sendEmoji_2() {
              return _sendEmoji_2.apply(this, arguments);
            }

            return sendEmoji_2;
          }()
        }, {
          key: "sendEmoji_3",
          value: function () {
            var _sendEmoji_3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var selfInfo;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.next = 2;
                      return this.SDK.getPlayerInfo();

                    case 2:
                      selfInfo = _context17.sent;
                      this.uiControl.showEmoji(EmojiType.Unfortunately, selfInfo.id);

                      if (this.teachIndex == 2) {
                        this.nextState();
                      }

                    case 5:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));

            function sendEmoji_3() {
              return _sendEmoji_3.apply(this, arguments);
            }

            return sendEmoji_3;
          }()
        }, {
          key: "sendEmoji_4",
          value: function () {
            var _sendEmoji_4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var selfInfo;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.SDK.getPlayerInfo();

                    case 2:
                      selfInfo = _context18.sent;
                      this.uiControl.showEmoji(EmojiType.Applause, selfInfo.id);

                      if (this.teachIndex == 2) {
                        this.nextState();
                      }

                    case 5:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));

            function sendEmoji_4() {
              return _sendEmoji_4.apply(this, arguments);
            }

            return sendEmoji_4;
          }()
        }]);

        return TeachingBoard;
      }(BaseBoard), _temp), (_applyDecoratedDescriptor(_class.prototype, "nextStateAction", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "nextStateAction"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "againAction", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "againAction"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "leave", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "leave"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "endActionYes", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "endActionYes"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "endActionNo", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "endActionNo"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sendEmoji_1", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "sendEmoji_1"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sendEmoji_2", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "sendEmoji_2"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sendEmoji_3", [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, "sendEmoji_3"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sendEmoji_4", [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, "sendEmoji_4"), _class.prototype)), _class)));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/toast.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, Label, tween, Sprite, Component, _dec, _class, ccclass, property, Toast;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      tween = _cc.tween;
      Sprite = _cc.Sprite;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "33b70jRWeBFZqBft8IjVWL7", "toast", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Toast", Toast = (_dec = ccclass('Toast'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(Toast, _Component);

        function Toast() {
          _classCallCheck(this, Toast);

          return _possibleConstructorReturn(this, _getPrototypeOf(Toast).apply(this, arguments));
        }

        _createClass(Toast, [{
          key: "start",
          value: function start() {
            this.isShow = false;
          }
        }, {
          key: "show",
          value: function show(text) {
            var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

            if (!this.isShow) {
              this.node.active = true;
              this.isShow = true;
              this.node.getChildByName('Label').getComponent(Label).string = text;
              tween(this.node).to(time, {}, {
                onComplete: this.onComplete.bind(this),
                onUpdate: this.onUpdate.bind(this)
              }).start();
            }
          }
        }, {
          key: "onComplete",
          value: function onComplete() {
            this.node.active = false;
            this.isShow = false;
          }
        }, {
          key: "onUpdate",
          value: function onUpdate(target, ratio) {
            this.node.getComponent(Sprite).color.set(255, 255, 255, 230 * (1 - ratio));
          }
        }]);

        return Toast;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/loadingBar.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, ProgressBar, Component, _dec, _class, ccclass, property, LoadingBar;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      ProgressBar = _cc.ProgressBar;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "96263H2xxlKi5TOCG4Qi7hA", "loadingBar", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("LoadingBar", LoadingBar = (_dec = ccclass('LoadingBar'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(LoadingBar, _Component);

        function LoadingBar() {
          _classCallCheck(this, LoadingBar);

          return _possibleConstructorReturn(this, _getPrototypeOf(LoadingBar).apply(this, arguments));
        }

        _createClass(LoadingBar, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            // Your initialization goes here.
            this.bar = this.node.getComponent(ProgressBar);
            this.bar.progress = 0;
          }
        }, {
          key: "run",
          value: function run() {
            this.time = 0;
            this.rate = 0;
            this.dt_rate = 0;
            this.isComplete = false;
            this.bar = this.node.getComponent(ProgressBar);
            this.bar.progress = 0;
          }
        }, {
          key: "complete",
          value: function complete() {
            this.isComplete = true;
            this.dt_rate = 100 - this.rate;
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            this.time += deltaTime;

            if (!this.isComplete) {
              this.rate = (-1 / (this.time / 2 + 1) + 1) * 90;
            } else {
              this.rate += this.dt_rate * deltaTime;

              if (this.rate >= 100) {
                this.rate = 100;
              }
            }

            this.bar.progress = this.rate / 100;
          }
        }]);

        return LoadingBar;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GameManager.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc", "./Box.js", "./Config.js", "./Const.js", "./Player.js", "./Util.js", "./SDK.js", "./UI/Dialog/Dialog.js", "./UI/Board/WaitLoverBoard.js", "./OtherPlayer.js", "./UI/Board/GamingBoard.js", "./UI/Board/MainBoard.js", "./UI/Board/MatchingBoard.js", "./UI/Board/ResultBoard.js", "./UI/Board/TeachingBoard.js", "./UI/toast.js", "./UI/loadingBar.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _assertThisInitialized, _initializerDefineProperty, _createClass, _asyncToGenerator, cclegacy, _decorator, Node, Camera, Prefab, AudioClip, Texture2D, Vec3, tween, MeshRenderer, view, Component, instantiate, UITransform, Label, Color, Box, Config, log, ClientDataType, RoomDataType, BoxSize, TeamColor, DialogButtonType, NetState, ServerDataType, StatisticsKey, BoxShape, Player, Util, SDK, Dialog, WaitLoverBoard, OtherPlayer, GamingBoard, MainBoard, MatchingBoard, ResultBoard, TeachingBoard, Toast, LoadingBar, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _temp, ccclass, property, Setting, GameManager;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _dec8: void 0,
    _dec9: void 0,
    _dec10: void 0,
    _dec11: void 0,
    _dec12: void 0,
    _dec13: void 0,
    _dec14: void 0,
    _dec15: void 0,
    _dec16: void 0,
    _dec17: void 0,
    _dec18: void 0,
    _dec19: void 0,
    _dec20: void 0,
    _dec21: void 0,
    _dec22: void 0,
    _dec23: void 0,
    _dec24: void 0,
    _dec25: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
    _descriptor8: void 0,
    _descriptor9: void 0,
    _descriptor10: void 0,
    _descriptor11: void 0,
    _descriptor12: void 0,
    _descriptor13: void 0,
    _descriptor14: void 0,
    _descriptor15: void 0,
    _descriptor16: void 0,
    _descriptor17: void 0,
    _descriptor18: void 0,
    _descriptor19: void 0,
    _descriptor20: void 0,
    _descriptor21: void 0,
    _descriptor22: void 0,
    _descriptor23: void 0,
    _descriptor24: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _asyncToGenerator = _virtual_rollupPluginBabelHelpersJs.asyncToGenerator;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Camera = _cc.Camera;
      Prefab = _cc.Prefab;
      AudioClip = _cc.AudioClip;
      Texture2D = _cc.Texture2D;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      MeshRenderer = _cc.MeshRenderer;
      view = _cc.view;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      UITransform = _cc.UITransform;
      Label = _cc.Label;
      Color = _cc.Color;
    }, function (_BoxJs) {
      Box = _BoxJs.Box;
    }, function (_ConfigJs) {
      Config = _ConfigJs.Config;
    }, function (_ConstJs) {
      log = _ConstJs.log;
      ClientDataType = _ConstJs.ClientDataType;
      RoomDataType = _ConstJs.RoomDataType;
      BoxSize = _ConstJs.BoxSize;
      TeamColor = _ConstJs.TeamColor;
      DialogButtonType = _ConstJs.DialogButtonType;
      NetState = _ConstJs.NetState;
      ServerDataType = _ConstJs.ServerDataType;
      StatisticsKey = _ConstJs.StatisticsKey;
      BoxShape = _ConstJs.BoxShape;
    }, function (_PlayerJs) {
      Player = _PlayerJs.Player;
    }, function (_UtilJs) {
      Util = _UtilJs.Util;
    }, function (_SDKJs) {
      SDK = _SDKJs.SDK;
    }, function (_UIDialogDialogJs) {
      Dialog = _UIDialogDialogJs.Dialog;
    }, function (_UIBoardWaitLoverBoardJs) {
      WaitLoverBoard = _UIBoardWaitLoverBoardJs.WaitLoverBoard;
    }, function (_OtherPlayerJs) {
      OtherPlayer = _OtherPlayerJs.OtherPlayer;
    }, function (_UIBoardGamingBoardJs) {
      GamingBoard = _UIBoardGamingBoardJs.GamingBoard;
    }, function (_UIBoardMainBoardJs) {
      MainBoard = _UIBoardMainBoardJs.MainBoard;
    }, function (_UIBoardMatchingBoardJs) {
      MatchingBoard = _UIBoardMatchingBoardJs.MatchingBoard;
    }, function (_UIBoardResultBoardJs) {
      ResultBoard = _UIBoardResultBoardJs.ResultBoard;
    }, function (_UIBoardTeachingBoardJs) {
      TeachingBoard = _UIBoardTeachingBoardJs.TeachingBoard;
    }, function (_UIToastJs) {
      Toast = _UIToastJs.Toast;
    }, function (_UILoadingBarJs) {
      LoadingBar = _UILoadingBarJs.LoadingBar;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1a8f1+varZBzIr09OsNwJXt", "GameManager", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      Setting = function Setting() {
        _classCallCheck(this, Setting);

        this.switch_audio = true;
      };

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property({
        type: Player
      }), _dec3 = property({
        type: OtherPlayer
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Camera
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Toast
      }), _dec9 = property({
        type: Prefab
      }), _dec10 = property({
        type: AudioClip
      }), _dec11 = property({
        type: AudioClip
      }), _dec12 = property({
        type: AudioClip
      }), _dec13 = property({
        type: AudioClip
      }), _dec14 = property({
        type: AudioClip
      }), _dec15 = property({
        type: AudioClip
      }), _dec16 = property({
        type: AudioClip
      }), _dec17 = property({
        type: AudioClip
      }), _dec18 = property({
        type: AudioClip
      }), _dec19 = property({
        type: AudioClip
      }), _dec20 = property({
        type: Texture2D
      }), _dec21 = property({
        type: Texture2D
      }), _dec22 = property({
        type: Texture2D
      }), _dec23 = property({
        type: Texture2D
      }), _dec24 = property({
        type: Node
      }), _dec25 = property({
        type: LoadingBar
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(GameManager, _Component);

        function GameManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GameManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameManager)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.SDK = new SDK();
          _this.Setting = new Setting();
          _this.Debug = null;
          _this.Util = new Util(_this.SDK, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Player", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "OtherTeam", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "CenterNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "plane", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "camera", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "UI", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "toast", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rangeShowPrefab", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "audio_failed", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "audio_complete", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "audio_dead", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "audio_perfect", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "audio_last5s", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "audio_ready", _descriptor14, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "audio_relife", _descriptor15, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "audio_touch_down", _descriptor16, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "audio_win", _descriptor17, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "audio_go", _descriptor18, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "background_1", _descriptor19, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "background_2", _descriptor20, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "background_3", _descriptor21, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "background_4", _descriptor22, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "userTipNode", _descriptor23, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "loadingBar", _descriptor24, _assertThisInitialized(_this));

          _this._origin_camera_pos = new Vec3();
          _this.map = [];
          _this.curActionPlayer = null;
          _this.scoreNodeList = [];
          _this.curBox = null;
          _this.nextBox = null;
          _this.planeIndex = 1;
          _this._isControler = false;
          _this.startTime = 0;
          _this.gameTime = 0;
          _this.isTeached = false;
          _this._isRunning = false;
          _this.diaDead = false;
          _this.AccessToken = null;
          _this.clearTime = 0;
          _this.teammaterIsLover = undefined;
          _this.enemyIsLover = undefined;
          _this.isReconnect = false;
          _this.isQuickMatching = false;
          _this.robotInfo = {};
          _this.BoxPrefab = {
            f1: [null, null, null, null, null, null],
            f2: [null, null, null, null, null, null],
            f3: [null, null, null, null, null, null],
            f4: [null, null, null, null, null, null],
            f5: [null, null, null, null, null, null],
            y1: [null, null, null, null, null, null],
            y2: [null, null, null, null, null, null],
            y3: [null, null, null, null, null, null],
            y4: [null, null, null, null, null, null],
            y5: [null, null, null, null, null, null]
          };
          _this.ChessPrefab = [null, null, null, null];
          _this.ChessPrefabEnemy = {
            red: null,
            blue: null
          };
          return _this;
        }

        _createClass(GameManager, [{
          key: "initPrefab",
          value: function () {
            var _initPrefab = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var scene, prefab, i, j, prefabPath, key, _i, _j, _prefabPath, _key2, chess_key, index, _prefabPath2;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      // 加载预制件-界面
                      scene = this.node.getParent();
                      this.MainBoard = new MainBoard(scene, this.SDK);
                      this.WaitLoverBoard = new WaitLoverBoard(scene, this.SDK);
                      this.MatchingBoard = new MatchingBoard(scene, this.SDK);
                      this.GamingBoard = new GamingBoard(scene, this.SDK);
                      this.ResultBoard = new ResultBoard(scene, this.SDK);
                      this.TeachingBoard = new TeachingBoard(scene, this.SDK); // this.MainBoard.InitBoard();
                      // this.GamingBoard.InitBoard();
                      // this.MatchingBoard.InitBoard();
                      // this.WaitLoverBoard.InitBoard();
                      // this.TeachingBoard.InitBoard();

                      this.MainBoard.board = scene.getChildByName('UI').getChildByName('board').getChildByName('MainBoard');
                      this.GamingBoard.board = scene.getChildByName('UI').getChildByName('board').getChildByName('GamingBoard');
                      this.MatchingBoard.board = scene.getChildByName('UI').getChildByName('board').getChildByName('MatchingBoard');
                      this.WaitLoverBoard.board = scene.getChildByName('UI').getChildByName('board').getChildByName('WaitLoverBoard');
                      this.TeachingBoard.board = scene.getChildByName('UI').getChildByName('board').getChildByName('TeachingBoard');
                      this.ResultBoard.board = scene.getChildByName('UI').getChildByName('board').getChildByName('ResultBoard'); // 加载预制件---方形盒子

                      for (i = 1; i <= 5; i++) {
                        for (j = 1; j <= 6; j++) {
                          prefabPath = '';
                          prefabPath = "Model/Box/f" + i + "0" + j + '/f' + i + "0" + j;
                          key = 'f' + i.toString();
                          this.Util.loadBoxPrefab(prefabPath, key, j - 1);
                        }
                      } // 加载预制件---圆形盒子


                      for (_i = 1; _i <= 5; _i++) {
                        for (_j = 1; _j <= 6; _j++) {
                          _prefabPath = '';
                          _prefabPath = "Model/Box/y" + _i + "0" + _j + '/y' + _i + "0" + _j;
                          _key2 = 'y' + _i.toString();
                          this.Util.loadBoxPrefab(_prefabPath, _key2, _j - 1);
                        }
                      }

                      log('盒子预制件', this.BoxPrefab); // 加载预制件--棋子

                      chess_key = ['red_1', 'red_2', 'blue_1', 'blue_2'];

                      for (index = 0; index < chess_key.length; index++) {
                        _prefabPath2 = 'Model/qizi/' + chess_key[index] + '/Node';
                        this.Util.loadChessPrefab(_prefabPath2, index);
                      }

                      this.Util.loadEnemyChessPrefab('Model/qizi/enemy_blue/Node', TeamColor.blue);
                      this.Util.loadEnemyChessPrefab('Model/qizi/enemy_red/Node', TeamColor.red); // 加载预制件--完美跳跃效果图

                      _context9.next = 22;
                      return this.Util.loadPrefab('Prefab/UI/perfect');

                    case 22:
                      prefab = _context9.sent;

                      if (prefab) {
                        this.PerfectPrefab = prefab;
                      }

                    case 24:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function initPrefab() {
              return _initPrefab.apply(this, arguments);
            }

            return initPrefab;
          }() // 游戏初始化数据

        }, {
          key: "initData",
          value: function () {
            var _initData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(id) {
              var _this2 = this;

              var result, scene, inRoom, dia, _dia;

              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.SDK.init(id, this);

                    case 2:
                      result = _context11.sent;
                      scene = this.node.getParent();

                      if (!result) {
                        _context11.next = 19;
                        break;
                      }

                      log('初始化SDK成功', MGOBE.Player.id);
                      _context11.next = 8;
                      return this.SDK.inRunningRoom();

                    case 8:
                      inRoom = _context11.sent;

                      if (!inRoom) {
                        _context11.next = 15;
                        break;
                      }

                      dia = new Dialog(scene, this.SDK, '游戏仍在进行中,是否要进行重连?', DialogButtonType.multiple, '重连', '不重连');
                      _context11.next = 13;
                      return dia.show(this, this.reconnection_yes, this.reconnection_no);

                    case 13:
                      _context11.next = 17;
                      break;

                    case 15:
                      this.loadingBar.complete();
                      setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                        var newBoard, loverGroupId, cur_group_info, code, teammaterInfo, userContent;
                        return regeneratorRuntime.wrap(function _callee10$(_context10) {
                          while (1) {
                            switch (_context10.prev = _context10.next) {
                              case 0:
                                if (!(_this2.Util.localGet('userContent') && _this2.Util.localGet('userContent').group)) {
                                  _context10.next = 28;
                                  break;
                                }

                                loverGroupId = _this2.Util.localGet('userContent').group;
                                _context10.next = 4;
                                return _this2.SDK.getGroupInfo();

                              case 4:
                                cur_group_info = _context10.sent;
                                cur_group_info = cur_group_info ? cur_group_info : {
                                  id: '111'
                                };

                                if (!(cur_group_info.id != loverGroupId)) {
                                  _context10.next = 23;
                                  break;
                                }

                                _context10.next = 9;
                                return _this2.SDK.leaveGroup();

                              case 9:
                                _context10.next = 11;
                                return _this2.SDK.joinGroup(loverGroupId);

                              case 11:
                                code = _context10.sent;

                                if (!(code === MGOBE.ErrCode.EC_OK)) {
                                  _context10.next = 19;
                                  break;
                                }

                                _context10.next = 15;
                                return _this2.SDK.getTeammate();

                              case 15:
                                teammaterInfo = _context10.sent;

                                if (teammaterInfo.commonNetworkState != NetState.Offline) {
                                  newBoard = _this2.WaitLoverBoard;
                                  userContent = _this2.Util.localGet('userContent');
                                  userContent.group = '';

                                  _this2.Util.localSet('userContent', userContent);
                                } else {
                                  newBoard = _this2.MainBoard;

                                  _this2.showToast('游戏邀请已失效，请重新邀请', 2);
                                }

                                _context10.next = 21;
                                break;

                              case 19:
                                newBoard = _this2.MainBoard;

                                _this2.showToast('游戏邀请已失效，请重新邀请', 2);

                              case 21:
                                _context10.next = 26;
                                break;

                              case 23:
                                _this2.SDK.Listener.add(_this2.SDK.curGroup);

                                _this2.SDK.curGroup.initGroup(cur_group_info);

                                newBoard = _this2.WaitLoverBoard;

                              case 26:
                                _context10.next = 29;
                                break;

                              case 28:
                                newBoard = _this2.MainBoard;

                              case 29:
                                _context10.next = 31;
                                return newBoard.ChangeBoard(newBoard);

                              case 31:
                                scene.getChildByName('UI').getChildByName('loading').active = false;

                              case 32:
                              case "end":
                                return _context10.stop();
                            }
                          }
                        }, _callee10);
                      })), 1000);

                    case 17:
                      _context11.next = 22;
                      break;

                    case 19:
                      _dia = new Dialog(scene, this.SDK, '登录失败,请重新开启游戏', DialogButtonType.single, '知道了');
                      _context11.next = 22;
                      return _dia.show(this, function () {
                        if (_this2.SDK.curDialog.dead) {
                          return;
                        }

                        _this2.SDK.curDialog.destroy();

                        window['RunNative']('exitMiniGame', {}, '', '');
                      });

                    case 22:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function initData(_x2) {
              return _initData.apply(this, arguments);
            }

            return initData;
          }()
        }, {
          key: "reconnection_yes",
          value: function () {
            var _reconnection_yes = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var roomInfo, selfInfo, teamId, playerList, index, element, code, scene, dia;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      if (!this.diaDead) {
                        _context12.next = 2;
                        break;
                      }

                      return _context12.abrupt("return");

                    case 2:
                      this.diaDead = true;
                      this.SDK.curDialog.destroy();
                      _context12.next = 7;
                      return this.SDK.reconnect();

                    case 7:
                      _context12.next = 9;
                      return this.SDK.getRoomInfo();

                    case 9:
                      roomInfo = _context12.sent;
                      _context12.next = 12;
                      return this.SDK.getPlayerInfo();

                    case 12:
                      selfInfo = _context12.sent;

                      if (!roomInfo) {
                        _context12.next = 42;
                        break;
                      }

                      playerList = roomInfo.playerList;
                      index = 0;

                    case 16:
                      if (!(index < playerList.length)) {
                        _context12.next = 24;
                        break;
                      }

                      element = playerList[index];

                      if (!(element.id == selfInfo.id)) {
                        _context12.next = 21;
                        break;
                      }

                      teamId = element.teamId;
                      return _context12.abrupt("break", 24);

                    case 21:
                      index++;
                      _context12.next = 16;
                      break;

                    case 24:
                      this.SDK.curRoom.onRecvFromGameSvr = this.onRecvFromGameSvr.bind(this);
                      _context12.next = 27;
                      return this.SDK.sendToServer(ClientDataType.Reconnect, teamId);

                    case 27:
                      code = _context12.sent;

                      if (!(code != MGOBE.ErrCode.EC_OK)) {
                        _context12.next = 40;
                        break;
                      }

                      _context12.next = 32;
                      return this.SDK.leaveGroup();

                    case 32:
                      _context12.next = 34;
                      return this.SDK.leaveRoom();

                    case 34:
                      _context12.next = 36;
                      return this.SDK.cancelMatchinig();

                    case 36:
                      scene = this.node.getParent();
                      dia = new Dialog(scene, this.SDK, '房间已关闭,无法重连', DialogButtonType.single, '回到首页');
                      _context12.next = 40;
                      return dia.show(this, this.backMainBoard);

                    case 40:
                      _context12.next = 43;
                      break;

                    case 42:
                    case 43:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));

            function reconnection_yes() {
              return _reconnection_yes.apply(this, arguments);
            }

            return reconnection_yes;
          }()
        }, {
          key: "reconnection_no",
          value: function () {
            var _reconnection_no = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var scene;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (!this.SDK.curDialog.dead) {
                        _context13.next = 2;
                        break;
                      }

                      return _context13.abrupt("return");

                    case 2:
                      scene = this.node.getParent();
                      _context13.next = 6;
                      return this.SDK.leaveGroup();

                    case 6:
                      _context13.next = 8;
                      return this.SDK.leaveRoom();

                    case 8:
                      _context13.next = 10;
                      return this.SDK.cancelMatchinig();

                    case 10:
                      this.SDK.curDialog.destroy();
                      _context13.next = 14;
                      return this.MainBoard.ChangeBoard(this.MainBoard);

                    case 14:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));

            function reconnection_no() {
              return _reconnection_no.apply(this, arguments);
            }

            return reconnection_no;
          }()
        }, {
          key: "onRecvFromGameSvr",
          value: function () {
            var _onRecvFromGameSvr = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(event) {
              var _this3 = this;

              var scene, data, mesType, dia;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      log('接收到实时服务器的数据:', event.data);
                      scene = this.node.getParent();
                      data = event.data.data;
                      mesType = data.type;

                      if (!(mesType == ServerDataType.Reconnect)) {
                        _context14.next = 17;
                        break;
                      }

                      this.isReconnect = true;
                      this.SDK.curRoom.onRecvFromGameSvr = null;
                      _context14.next = 9;
                      return this.reconnectSyncData(data.data);

                    case 9:
                      this.isRunning = true;
                      _context14.next = 12;
                      return this.GamingBoard.ChangeBoard(this.GamingBoard);

                    case 12:
                      this.SDK.sendToServer(ClientDataType.ReconnectComplete, this.serverTeam.id);
                      this.SDK.sendToServer(ClientDataType.ChangeControler);
                      this.changeControler(this.curActionPlayer);
                      _context14.next = 28;
                      break;

                    case 17:
                      if (!(mesType == ServerDataType.ReconnectFailed)) {
                        _context14.next = 28;
                        break;
                      }

                      _context14.next = 21;
                      return this.SDK.leaveGroup();

                    case 21:
                      _context14.next = 23;
                      return this.SDK.leaveRoom();

                    case 23:
                      _context14.next = 25;
                      return this.SDK.cancelMatchinig();

                    case 25:
                      dia = new Dialog(scene, this.SDK, '游戏已结束', DialogButtonType.single, '知道了');
                      _context14.next = 28;
                      return dia.show(this, function () {
                        if (_this3.SDK.curDialog.dead) {
                          return;
                        }

                        _this3.MainBoard.ChangeBoard(_this3.MainBoard);

                        _this3.SDK.curDialog.destroy();
                      });

                    case 28:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function onRecvFromGameSvr(_x3) {
              return _onRecvFromGameSvr.apply(this, arguments);
            }

            return onRecvFromGameSvr;
          }()
        }, {
          key: "backMainBoard",
          value: function () {
            var _backMainBoard = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var newBoard;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      if (!this.SDK.curDialog.dead) {
                        _context15.next = 2;
                        break;
                      }

                      return _context15.abrupt("return");

                    case 2:
                      this.SDK.curDialog.destroy();
                      newBoard = this.MainBoard;
                      _context15.next = 6;
                      return newBoard.ChangeBoard(newBoard);

                    case 6:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));

            function backMainBoard() {
              return _backMainBoard.apply(this, arguments);
            }

            return backMainBoard;
          }()
        }, {
          key: "onLoad",
          value: function onLoad() {
            this.Config = new Config();
          } // 进入游戏

        }, {
          key: "start",
          value: function () {
            var _start = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var paraStr, token, user_id;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      this.Player.gameManager = this;
                      this.OtherTeam.gameManager = this;
                      this.camera.node.getPosition(this._origin_camera_pos);
                      this.loadingBar.run(); // URL解析

                      paraStr = window.location.search;
                      token = this.Util.localGet('userContent') ? this.Util.localGet('userContent').appToken : ''; // const token = this.Util.getPara('access_token', paraStr);

                      user_id = null;
                      this.AccessToken = token;

                      if (this.Config.env == 'dev') {
                        user_id = this.Util.getPara('user_id', paraStr);
                      } // 游戏基本事件注册


                      this.registerEvent();
                      this.Player.onJumpComplete = this.onJumpComplete.bind(this);
                      this.Player.onJumpDead = this.onJumpDead.bind(this);
                      this.Player.onPowerDown = this.onPowerDown.bind(this);
                      this.Player.onPowerUp = this.onPowerUp.bind(this);
                      this.schedule(this.timerSingalAction.bind(this), 0.2); // 初始化加载预制件

                      _context16.next = 17;
                      return this.initPrefab();

                    case 17:
                      // 根据配置确定是否开启Debug面板
                      {
                        this.node.parent.getChildByName('UI').getChildByName('Debug').destroy();
                      } // 登录

                      _context16.next = 20;
                      return this.login(user_id);

                    case 20:
                      this.Util.callTDGA(StatisticsKey.login, this.PlayerData);

                    case 21:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));

            function start() {
              return _start.apply(this, arguments);
            }

            return start;
          }()
        }, {
          key: "login",
          value: function () {
            var _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var _this4 = this;

              var user_id,
                  playerData,
                  _gameInfo,
                  _userInfo,
                  _loverInfo,
                  _userVip,
                  userInfo,
                  gameInfo,
                  res1,
                  res2,
                  scene,
                  dia,
                  _scene,
                  _dia2,
                  _args17 = arguments;

              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      user_id = _args17.length > 0 && _args17[0] !== undefined ? _args17[0] : null;
                      playerData = {
                        nickname: '',
                        avatar_url: '',
                        user_id: 0,
                        lover_id: 0,
                        gender: 0,
                        totalCount: 0,
                        playCountWeek: 0,
                        winCountWeek: 0,
                        mvpCountWeek: 0,
                        loverCount: 0,
                        loverWinCount: 0,
                        tacitScore: 0,
                        isVip: false
                      }; // 使用token请求初始化数据

                      if (!user_id) {
                        _context17.next = 19;
                        break;
                      }

                      playerData.nickname = user_id;
                      playerData.avatar_url = '';
                      playerData.user_id = user_id;
                      playerData.lover_id = 0;
                      playerData.gender = 1;
                      playerData.playCountWeek = 0;
                      playerData.mvpCountWeek = 0;
                      playerData.winCountWeek = 0;
                      playerData.loverCount = 0;
                      playerData.loverWinCount = 0;
                      playerData.tacitScore = 0;
                      playerData.isVip = false;
                      this.PlayerData = playerData;
                      this.initData(user_id);
                      log('登录完成', 'user_id', '玩家数据:', this.PlayerData);
                      return _context17.abrupt("return");

                    case 19:
                      if (!this.AccessToken) {
                        _context17.next = 72;
                        break;
                      }

                      _context17.next = 22;
                      return this.Util.http(this.Config.serverURL.gameInit, "GET", {}, false, this.AccessToken);

                    case 22:
                      _gameInfo = _context17.sent;
                      _context17.next = 25;
                      return this.Util.http(this.Config.serverURL.accountInit, "GET", {}, false, this.AccessToken);

                    case 25:
                      _userInfo = _context17.sent;
                      _context17.next = 28;
                      return this.Util.http(this.Config.serverURL.loverInfo, 'GET', {}, false, this.AccessToken);

                    case 28:
                      _loverInfo = _context17.sent;
                      _context17.next = 31;
                      return this.Util.http(this.Config.serverURL.vipInfo, "GET", {}, false, this.AccessToken);

                    case 31:
                      _userVip = _context17.sent;

                      if (!(_gameInfo && _userInfo.kiwi_user_info)) {
                        _context17.next = 66;
                        break;
                      }

                      userInfo = _userInfo.kiwi_user_info;
                      gameInfo = _gameInfo;

                      if (userInfo && userInfo.gender === 1) {
                        this.loverData = _loverInfo.lover_info.female_user_info;
                        this.loverData.avatar = _loverInfo.lover_info.female_user_info.avatar_info ? _loverInfo.lover_info.female_user_info.avatar_info : {
                          host: 'didi-static.oss-cn-hangzhou.aliyuncs.com',
                          path: '/kitty/girl.jpg'
                        };
                      } else {
                        this.loverData = _loverInfo.lover_info.male_user_info;
                        this.loverData.avatar = _loverInfo.lover_info.male_user_info.avatar_info ? _loverInfo.lover_info.male_user_info.avatar_info : {
                          host: 'didi-static.oss-cn-hangzhou.aliyuncs.com',
                          path: '/kitty/boy.jpg'
                        };
                      }

                      playerData.nickname = userInfo.nickname ? userInfo.nickname : userInfo.id.toString();
                      playerData.avatar_url = userInfo.avatar_info ? 'https://' + userInfo.avatar_info.host + '/' + userInfo.avatar_info.path : '';
                      playerData.user_id = userInfo.id;
                      playerData.lover_id = userInfo.lovers_id;
                      playerData.gender = userInfo.gender;
                      playerData.totalCount = gameInfo.user_match_info.total_game_match ? gameInfo.user_match_info.total_game_match : 0;
                      playerData.playCountWeek = gameInfo.user_match_info.game_match_count ? gameInfo.user_match_info.game_match_count : 0;
                      playerData.mvpCountWeek = gameInfo.user_match_info.mvp_count ? gameInfo.user_match_info.mvp_count : 0;
                      playerData.winCountWeek = gameInfo.user_match_info.win_count ? gameInfo.user_match_info.win_count : 0;
                      playerData.loverCount = gameInfo.lover_match_info.game_match_count ? gameInfo.lover_match_info.game_match_count : 0;
                      playerData.loverWinCount = gameInfo.lover_match_info.win_count ? gameInfo.lover_match_info.win_count : 0;
                      playerData.tacitScore = gameInfo.lover_match_info.tacit_score ? gameInfo.lover_match_info.tacit_score : 0;
                      _context17.next = 53;
                      return this.Util.loadRemoteImg(playerData.avatar_url, null);

                    case 53:
                      res1 = _context17.sent;
                      _context17.next = 56;
                      return this.Util.loadRemoteImg("https://".concat(this.loverData.avatar.host, "/").concat(this.loverData.avatar.path), null);

                    case 56:
                      res2 = _context17.sent;

                      if (!res1) {
                        playerData.gender === 1 && (playerData.avatar_url = 'https://didi-static.oss-cn-hangzhou.aliyuncs.com/kitty/boy.jpg');
                        playerData.gender === 2 && (playerData.avatar_url = 'https://didi-static.oss-cn-hangzhou.aliyuncs.com/kitty/girl.jpg');
                      }

                      if (!res2) {
                        this.loverData.gender === 1 && (this.loverData.avatar = {
                          host: 'didi-static.oss-cn-hangzhou.aliyuncs.com',
                          path: '/kitty/boy.jpg'
                        });
                        this.loverData.gender === 2 && (this.loverData.avatar = {
                          host: 'didi-static.oss-cn-hangzhou.aliyuncs.com',
                          path: '/kitty/girl.jpg'
                        });
                      }

                      this.PlayerData = playerData;
                      this.PlayerData.isVip = _userVip ? _userVip.vip_info.end_date_at * 1000 > new Date().getTime() ? true : false : false;
                      this.initData(this.PlayerData.user_id);
                      log('登录完成', 'token', '玩家数据:', this.PlayerData);
                      return _context17.abrupt("return");

                    case 66:
                      scene = this.node.getParent();
                      dia = new Dialog(scene, this.SDK, '登录失败,未获取到玩家信息', DialogButtonType.single, '知道了');
                      _context17.next = 70;
                      return dia.show(this, function () {
                        if (_this4.SDK.curDialog.dead) {
                          return;
                        }

                        _this4.SDK.curDialog.destroy();
                      });

                    case 70:
                      _context17.next = 76;
                      break;

                    case 72:
                      _scene = this.node.getParent();
                      _dia2 = new Dialog(_scene, this.SDK, '登录失败,无登录数据', DialogButtonType.single, '知道了');
                      _context17.next = 76;
                      return _dia2.show(this, function () {
                        if (_this4.SDK.curDialog.dead) {
                          return;
                        }

                        _this4.SDK.curDialog.destroy();
                      });

                    case 76:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));

            function login() {
              return _login.apply(this, arguments);
            }

            return login;
          }()
        }, {
          key: "registerEvent",
          // 注册自定义事件用于控制游戏流程,在各UI类中发送对应信号对游戏流程进行控制
          value: function registerEvent() {
            // 获取到实时服务器发送的初始化数据后进行游戏初始化
            this.node.on('GameInit', this.gameInit, this);
            this.node.on('SyncData', this.syncGameData, this);
          } // --------------------自定义事件-----------------------

        }, {
          key: "gameInit",
          value: function () {
            var _gameInit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(data) {
              var map, mesData, selfInfo, playerIndex, selfIndex, modelIndex, enemyTeamColor, enemyIsVip, code;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      this.Player.AI = false;
                      this.isReconnect = false;
                      map = data.map;
                      mesData = data.gameState; // const curPlayerInfo = await this.SDK.getPlayerInfo();

                      this.CenterNode.setParent(this.node.getParent());
                      this.camera.node.setPosition(this._origin_camera_pos);
                      this.plane.setPosition(new Vec3(0, 0, 0));
                      _context18.next = 12;
                      return this.drawMap(map, true);

                    case 12:
                      _context18.next = 14;
                      return this.syncGameData(mesData.teamList, true);

                    case 14:
                      this.Player.initPlayer();
                      this.OtherTeam.initPlayer(); // 确定初始由谁控制棋子,则显示谁的模型

                      _context18.next = 18;
                      return this.SDK.getPlayerInfo();

                    case 18:
                      selfInfo = _context18.sent;
                      _context18.next = 21;
                      return this.SDK.getPlayerIndex();

                    case 21:
                      selfIndex = _context18.sent;

                      if (this.Util.isControler(mesData.curActionPlayer, selfInfo)) {
                        playerIndex = selfIndex;
                      } else {
                        playerIndex = selfIndex == 1 ? 2 : 1;
                      }

                      if (this.serverPlayer.teamId == TeamColor.red) {
                        modelIndex = 1;
                        enemyTeamColor = TeamColor.blue;
                      } else {
                        modelIndex = 3;
                        enemyTeamColor = TeamColor.red;
                      }

                      modelIndex += playerIndex - 1;
                      _context18.next = 27;
                      return this.Player.setModel(modelIndex);

                    case 27:
                      _context18.next = 29;
                      return this.OtherTeam.setModel(enemyTeamColor);

                    case 29:
                      _context18.next = 31;
                      return this.Player.setTire(this.PlayerData.isVip ? 1 : 0);

                    case 31:
                      _context18.next = 33;
                      return this.Util.enemyIsVip();

                    case 33:
                      enemyIsVip = _context18.sent;
                      _context18.next = 36;
                      return this.OtherTeam.setTire(enemyIsVip ? 1 : 0);

                    case 36:
                      this.OtherTeam.map = this.map;
                      this.OtherTeam.index = 0;
                      this.Player.curBox = this.map[0];
                      this.Player.nextBox = this.map[1];
                      this.OtherTeam.curBox = this.map[0];
                      this.OtherTeam.nextBox = this.map[1];
                      this.curActionPlayer = mesData.curActionPlayer; // todo 完成后删除发送此消息中发送的内容,直接将数据存储在PlayerProfile中

                      _context18.next = 45;
                      return this.SDK.sendToServer(ClientDataType.Ready, {
                        avatar: this.PlayerData.avatar_url,
                        user_id: this.PlayerData.user_id,
                        gender: this.PlayerData.gender,
                        lover_id: this.PlayerData.lover_id
                      });

                    case 45:
                      code = _context18.sent;
                      if (code == this.SDK.errorCode.EC_OK) ;

                    case 47:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));

            function gameInit(_x4) {
              return _gameInit.apply(this, arguments);
            }

            return gameInit;
          }() // 断线重连方法,自动同步玩家、队伍数据以及视角、模型位置

        }, {
          key: "reconnectSyncData",
          value: function () {
            var _reconnectSyncData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(data) {
              var groupInfo, selfInfo, playerIndex, selfIndex, modelIndex, enemyTeamColor, enemyIsVip;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      if (this.Config.env == 'dev') {
                        this.gameTime = this.Config.DebugGameTime > 0 ? this.Config.DebugGameTime : data.gameTime;
                      } else {
                        this.gameTime = data.gameTime;
                      }

                      this.startTime = data.startTime;
                      _context19.next = 5;
                      return this.drawMap(data.map, true);

                    case 5:
                      _context19.next = 7;
                      return this.syncGameData(data.gameState.teamList, true);

                    case 7:
                      _context19.next = 9;
                      return this.SDK.getGroupInfo();

                    case 9:
                      groupInfo = _context19.sent;

                      if (groupInfo) {
                        this.SDK.Listener.add(this.SDK.curGroup);
                        this.SDK.curGroup.initGroup(groupInfo);
                      }

                      _context19.next = 13;
                      return this.SDK.getPlayerInfo();

                    case 13:
                      selfInfo = _context19.sent;
                      _context19.next = 16;
                      return this.SDK.getPlayerIndex();

                    case 16:
                      selfIndex = _context19.sent;

                      if (this.Util.isControler(data.gameState.curActionPlayer, selfInfo)) {
                        playerIndex = selfIndex;
                      } else {
                        playerIndex = selfIndex == 1 ? 2 : 1;
                      }

                      if (this.serverPlayer.teamId == TeamColor.red) {
                        modelIndex = 1;
                        enemyTeamColor = TeamColor.blue;
                      } else {
                        modelIndex = 3;
                        enemyTeamColor = TeamColor.red;
                      }

                      modelIndex += playerIndex - 1;
                      _context19.next = 22;
                      return this.Player.setModel(modelIndex);

                    case 22:
                      _context19.next = 24;
                      return this.OtherTeam.setModel(enemyTeamColor);

                    case 24:
                      if (!this.PlayerData.isVip) {
                        _context19.next = 27;
                        break;
                      }

                      _context19.next = 27;
                      return this.Player.setTire(1);

                    case 27:
                      _context19.next = 29;
                      return this.Util.enemyIsVip();

                    case 29:
                      enemyIsVip = _context19.sent;

                      if (!enemyIsVip) {
                        _context19.next = 33;
                        break;
                      }

                      _context19.next = 33;
                      return this.OtherTeam.setTire(1);

                    case 33:
                      this.Player.reset(this.serverTeam);
                      this.OtherTeam.reset(); // const curPlayerInfo = await this.SDK.getPlayerInfo();

                      this.curActionPlayer = data.gameState.curActionPlayer;

                    case 36:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));

            function reconnectSyncData(_x5) {
              return _reconnectSyncData.apply(this, arguments);
            }

            return reconnectSyncData;
          }() // 同步自己的角色数据以及双方队伍数据

        }, {
          key: "syncData",
          value: function () {
            var _syncData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(data) {
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return this.syncGameData(data);

                    case 2:
                      this.uiRefresh();
                      return _context20.abrupt("return", true);

                    case 4:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));

            function syncData(_x6) {
              return _syncData.apply(this, arguments);
            }

            return syncData;
          }() // 控制权转移

        }, {
          key: "changeControler",
          value: function () {
            var _changeControler = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(data) {
              var _this5 = this;

              var curPlayerInfo, control;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      _context22.next = 3;
                      return this.SDK.getPlayerInfo();

                    case 3:
                      curPlayerInfo = _context22.sent;
                      control = this.Util.isControler(data, curPlayerInfo);
                      setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
                        var playerIndex, avatar_url, selfIndex, modelIndex;
                        return regeneratorRuntime.wrap(function _callee21$(_context21) {
                          while (1) {
                            switch (_context21.prev = _context21.next) {
                              case 0:
                                // 确定初始由谁控制棋子,则显示谁的模型
                                avatar_url = 'xxx';
                                _context21.next = 3;
                                return _this5.SDK.getPlayerIndex();

                              case 3:
                                selfIndex = _context21.sent;

                                if (!control) {
                                  _context21.next = 8;
                                  break;
                                }

                                playerIndex = selfIndex;
                                _context21.next = 12;
                                break;

                              case 8:
                                playerIndex = selfIndex == 1 ? 2 : 1;
                                _context21.next = 11;
                                return _this5.Util.getTeammaterAvatar();

                              case 11:
                                avatar_url = _context21.sent;

                              case 12:
                                if (_this5.serverPlayer.teamId == TeamColor.red) {
                                  modelIndex = 1;
                                } else {
                                  modelIndex = 3;
                                }

                                modelIndex += playerIndex - 1;
                                _context21.next = 16;
                                return _this5.Player.setModel(modelIndex);

                              case 16:
                                _this5.isControler = control;

                                _this5.uiRefresh();

                                _this5.avatarSingal(control, true); // 修改userTip


                                if (_this5.isRunning) {
                                  if (!avatar_url || avatar_url == 'xxx') {
                                    _this5.Util.loadImg('Texture/UI/gaming/me-001/spriteFrame', _this5.userTipNode.getChildByName('avatar'));
                                  } else {
                                    _this5.Util.loadRemoteImg(avatar_url, _this5.userTipNode.getChildByName('avatar'));
                                  }

                                  _this5.userTipNode.active = true;
                                }

                              case 20:
                              case "end":
                                return _context21.stop();
                            }
                          }
                        }, _callee21);
                      })), 1);

                    case 6:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));

            function changeControler(_x7) {
              return _changeControler.apply(this, arguments);
            }

            return changeControler;
          }()
        }, {
          key: "syncMap",
          value: function () {
            var _syncMap = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(map) {
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      this.drawMap(map);

                    case 2:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));

            function syncMap(_x8) {
              return _syncMap.apply(this, arguments);
            }

            return syncMap;
          }()
        }, {
          key: "onJumpComplete",
          value: function onJumpComplete(success, isControler) {
            if (this.SDK.curBoard.name != 'GamingBoard') {
              if (this.SDK.curBoard.name == 'TeachingBoard') this.teachJumpSingal(false);
              return;
            }

            this.isControler = false;

            if (this.Player.jumpResult.perfect) {
              this.serverTeam.perfectJump += 1;
            } else {
              this.serverTeam.perfectJump = 0;
            }

            this.avatarSingal(false, false);

            if (success) {
              log('跳跃完成', '完美跳跃次数:', this.serverTeam.perfectJump);
              var score = this.Util.getScore(this.serverTeam.perfectJump); // 显示得分特效

              this.showScore(score, this.serverTeam.perfectJump); // 设置摄像机位置

              var camera_pos = new Vec3();
              var cur_pos = new Vec3();
              var plane_pos = new Vec3();
              this.nextBox.node.getPosition(cur_pos);
              this.nextBox.node.getPosition(plane_pos);
              plane_pos.y = 0;

              if (isControler) {
                this.serverPlayer.score += score;
              }

              this.serverTeam.cur_cube += 1;
              this.serverTeam.pos = this.Player.jumpResult.offset;
              log('跳跃完成', '最新的下标:', this.serverTeam.cur_cube);
              log('跳跃完成', '地图长度:', this.map.length);
              if (this.serverTeam.cur_cube % 10 == 0) this.changePlane();
              this.Player.curBox = this.map[this.serverTeam.cur_cube];
              this.Player.nextBox = this.map[this.serverTeam.cur_cube + 1];
              this.curBox = this.Player.curBox;
              this.nextBox = this.Player.nextBox;
              this.updateCenterNode(this.serverTeam.perfectJump > 0);

              if (this.nextBox) {
                var next_pos = new Vec3();
                this.nextBox.node.getPosition(next_pos);
                cur_pos.x = (cur_pos.x + next_pos.x) / 2.0;
                cur_pos.z = (cur_pos.z + next_pos.z) / 2.0;
                Vec3.add(camera_pos, cur_pos, this._origin_camera_pos);
                tween(this.camera.node).to(0.5, {
                  position: camera_pos
                }, {}).start();
                tween(this.plane).to(0.5, {
                  position: plane_pos
                }, {}).start();
              }
            } else {
              this.updateCenterNode(false);
              this.serverTeam.pos = this.Player.jumpResult.offset;
            }

            if (isControler) {
              this.SDK.sendToServer(ClientDataType.JumpComplete, {
                team: this.serverTeam
              });
            } else {
              this.SDK.sendToServer(ClientDataType.RequestSyncData, {
                team: this.SDK.gameManager.serverTeam
              });
            }
          }
        }, {
          key: "onJumpDead",
          value: function onJumpDead() {
            if (!this.serverTeam) {
              if (this.SDK.curBoard.name == 'TeachingBoard') this.teachJumpSingal(false);
              return;
            }

            this.serverTeam.perfectJump = 0;
            this.updateCenterNode(false);
            this.avatarSingal(false, false);

            if (this.isControler) {
              this.SDK.sendToServer(ClientDataType.JumpComplete, {
                team: this.serverTeam
              });
            } else {
              this.SDK.sendToServer(ClientDataType.RequestSyncData, {
                team: this.serverTeam
              });
            }

            this.isControler = false;
          }
        }, {
          key: "onPowerDown",
          value: function onPowerDown() {
            this.SDK.sendToRoom(RoomDataType.Power, 1);
            this.avatarSingal(true, false);
          }
        }, {
          key: "onPowerUp",
          value: function onPowerUp() {
            var data = {
              distance: this.Player.jumpResult.distance,
              pos: this.Player.jumpResult.offset,
              status: this.Player.jumpResult.status,
              time: this.Player.jumpResult.time,
              index: this.serverTeam.cur_cube,
              perfect: this.Player.jumpResult.perfect
            };
            this.SDK.sendToRoom(RoomDataType.PowerEnd, data);
            this.SDK.sendToRoom(RoomDataType.EnemyPowerEnd, data);
          }
        }, {
          key: "timerSingalAction",
          value: function timerSingalAction() {
            if (this.timerSingal) {
              this.timerSingal();
            }
          }
          /* -------------------游戏基础方法------------------------- */
          // 地图数据绘制地图,默认状态下自动检测地图数据更新然后绘制新的地图,提供reset参数为true则自动清空原有地图重新开始绘制

        }, {
          key: "drawMap",
          value: function () {
            var _drawMap = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(map) {
              var reset,
                  index,
                  element,
                  firstNode,
                  firstGround,
                  ground,
                  lastestGround,
                  _index,
                  info,
                  newNode,
                  islong,
                  lastest,
                  _newNode,
                  _index2,
                  _info,
                  newGround,
                  cur_pos,
                  camera_pos,
                  next_pos,
                  plane_pos,
                  _args24 = arguments;

              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      reset = _args24.length > 1 && _args24[1] !== undefined ? _args24[1] : false;

                      if (!reset) {
                        _context24.next = 26;
                        break;
                      }

                      if (this.map.length > 0) {
                        for (index = 0; index < this.map.length; index++) {
                          element = this.map[index].node;

                          if (element) {
                            element.destroy();
                          }
                        }

                        this.map = [];
                      }

                      _context24.next = 5;
                      return this.createBox(map[0]);

                    case 5:
                      firstNode = _context24.sent;
                      firstGround = {
                        node: firstNode,
                        size: map[0][2],
                        shape: map[0][3],
                        index: map[0][4],
                        centerPos: map[0][5]
                      };
                      this.map.push(firstGround);
                      ground = null;
                      lastestGround = firstGround;
                      _index = 1;

                    case 11:
                      if (!(_index < map.length)) {
                        _context24.next = 22;
                        break;
                      }

                      info = map[_index];
                      _context24.next = 15;
                      return this.createBox(info, lastestGround);

                    case 15:
                      ground = _context24.sent;
                      newNode = {
                        node: ground,
                        size: info[2],
                        shape: info[3],
                        index: info[4],
                        centerPos: info[5]
                      };
                      this.map.push(newNode);
                      lastestGround = newNode;

                    case 19:
                      _index++;
                      _context24.next = 11;
                      break;

                    case 22:
                      this.nextBox = this.map[1];
                      this.curBox = this.map[0];
                      _context24.next = 45;
                      break;

                    case 26:
                      if (!(map.length > this.map.length)) {
                        _context24.next = 45;
                        break;
                      }

                      islong = map.length - this.map.length > 1;
                      log('绘制地图', '检测到有新的地图数据', this.map.length, '-->', map.length);
                      lastest = this.map[this.map.length - 1];
                      _newNode = null;
                      _index2 = this.map.length;

                    case 32:
                      if (!(_index2 < map.length)) {
                        _context24.next = 45;
                        break;
                      }

                      _info = map[_index2];
                      _context24.next = 37;
                      return this.createBox(_info, lastest, !islong);

                    case 37:
                      _newNode = _context24.sent;
                      newGround = {
                        node: _newNode,
                        size: _info[2],
                        shape: _info[3],
                        index: _info[4],
                        centerPos: _info[5]
                      };
                      this.map.push(newGround);
                      lastest = newGround; // 如果角色的nextBox为空说明他处于地图更新前的最后一个盒子上,则在生成完最后一个盒子的时候将他的nextBox设置为最新生成的盒子

                      if (_index2 == map.length - 1) {
                        if (!this.OtherTeam.nextBox) {
                          this.OtherTeam.nextBox = this.map[this.OtherTeam.index + 1];
                        }

                        if (!this.nextBox) {
                          this.nextBox = newGround;
                          this.Player.nextBox = newGround;
                          this.Player.reset();
                          cur_pos = new Vec3();
                          camera_pos = new Vec3();
                          this.curBox.node.getPosition(cur_pos);
                          next_pos = new Vec3();
                          plane_pos = new Vec3();
                          this.nextBox.node.getPosition(next_pos);
                          this.nextBox.node.getPosition(plane_pos);
                          plane_pos.y = 0;
                          cur_pos.x = (cur_pos.x + next_pos.x) / 2.0;
                          cur_pos.z = (cur_pos.z + next_pos.z) / 2.0;
                          Vec3.add(camera_pos, cur_pos, this._origin_camera_pos);
                          tween(this.camera.node).to(0.5, {
                            position: camera_pos
                          }).start();
                          tween(this.plane).to(0.5, {
                            position: plane_pos
                          }, {}).start();
                        }
                      }

                    case 42:
                      _index2++;
                      _context24.next = 32;
                      break;

                    case 45:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));

            function drawMap(_x9) {
              return _drawMap.apply(this, arguments);
            }

            return drawMap;
          }() // 根据服务器数据进行数据同步,this.serverPlayer和this.serverTeam进行更新,同时将manager和player类中的当前盒子和下一个盒子数据更新至对应对象

        }, {
          key: "syncGameData",
          value: function () {
            var _syncGameData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(data) {
              var reconnect,
                  curPlayerInfo,
                  team,
                  otherTeam,
                  senderTeamId,
                  senderId,
                  teamList,
                  isTeammater,
                  isSelf,
                  index,
                  player,
                  _index3,
                  _player,
                  profile,
                  info,
                  _index4,
                  _player2,
                  curPos,
                  cameraPos,
                  planePos,
                  _args25 = arguments;

              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      reconnect = _args25.length > 1 && _args25[1] !== undefined ? _args25[1] : false;
                      _context25.next = 3;
                      return this.SDK.getPlayerInfo();

                    case 3:
                      curPlayerInfo = _context25.sent;
                      team = null;
                      otherTeam = null;
                      senderTeamId = '';
                      senderId = '';
                      teamList = null;

                      if (reconnect) {
                        teamList = data;
                      } else {
                        teamList = data.data;
                        senderTeamId = data.teamId;
                        senderId = data.senderId;
                      }

                      isTeammater = curPlayerInfo.teamId == senderTeamId;
                      isSelf = curPlayerInfo.id == senderId;

                      if (curPlayerInfo.teamId == TeamColor.red) {
                        team = teamList[0];
                        otherTeam = teamList[1];
                      } else {
                        team = teamList[1];
                        otherTeam = teamList[0];
                      }

                      if (!reconnect) {
                        _context25.next = 30;
                        break;
                      }

                      this.serverTeam = team;
                      this.otherTeam = otherTeam;
                      index = 0;

                    case 18:
                      if (!(index < team.playerList.length)) {
                        _context25.next = 26;
                        break;
                      }

                      player = team.playerList[index];

                      if (!(player.id == curPlayerInfo.id)) {
                        _context25.next = 23;
                        break;
                      }

                      this.serverPlayer = player;
                      return _context25.abrupt("break", 26);

                    case 23:
                      index++;
                      _context25.next = 18;
                      break;

                    case 26:
                      for (_index3 = 0; _index3 < otherTeam.playerList.length; _index3++) {
                        _player = otherTeam.playerList[_index3];

                        if (_player.isRobot) {
                          profile = {
                            "nickname": _player.name,
                            "avatar_url": _player.avatar,
                            "user_id": _player.user_id,
                            "lover_id": _player.lover_id,
                            "gender": _player.gender,
                            "playCountWeek": 0,
                            "winCountWeek": 0,
                            "mvpCountWeek": 0,
                            "loverCount": 0,
                            "loverWinCount": 0,
                            "tacitScore": 0,
                            "isVip": _player.isVip
                          };
                          info = {
                            id: _player.id,
                            isRobot: true,
                            profile: JSON.stringify(profile),
                            teamId: _player.teamId
                          };
                          this.robotInfo[_player.id] = info;
                        }
                      }

                      log('重连设置robot信息', this.robotInfo);
                      _context25.next = 44;
                      break;

                    case 30:
                      if (!(isTeammater && isSelf)) {
                        _context25.next = 43;
                        break;
                      }

                      this.serverTeam = team;
                      _index4 = 0;

                    case 33:
                      if (!(_index4 < team.playerList.length)) {
                        _context25.next = 41;
                        break;
                      }

                      _player2 = team.playerList[_index4];

                      if (!(_player2.id == curPlayerInfo.id)) {
                        _context25.next = 38;
                        break;
                      }

                      this.serverPlayer = _player2;
                      return _context25.abrupt("break", 41);

                    case 38:
                      _index4++;
                      _context25.next = 33;
                      break;

                    case 41:
                      _context25.next = 44;
                      break;

                    case 43:
                      this.otherTeam = otherTeam;

                    case 44:
                      if (reconnect) {
                        this.OtherTeam.map = this.map;
                        this.curBox = this.map[team.cur_cube];
                        this.nextBox = this.map[team.cur_cube + 1];
                        this.Player.curBox = this.curBox;
                        this.Player.nextBox = this.nextBox;
                        this.OtherTeam.curBox = this.map[otherTeam.cur_cube];
                        this.OtherTeam.nextBox = this.map[otherTeam.cur_cube + 1];
                        curPos = new Vec3();
                        cameraPos = new Vec3();
                        planePos = new Vec3();
                        this.curBox.node.getPosition(curPos);
                        this.curBox.node.getPosition(planePos);
                        planePos.y = 0;
                        Vec3.add(cameraPos, curPos, this._origin_camera_pos);
                        cameraPos.y = this._origin_camera_pos.y;
                        this.camera.node.setPosition(cameraPos);
                        this.plane.setPosition(planePos);
                      } else {
                        if (isTeammater && isSelf) {
                          this.SDK.sendToServer(ClientDataType.SyncComplete, this.serverTeam.id);
                          log('同步游戏数据', '当前Map长度:', this.map.length);
                          log('同步游戏数据', '当前位置下标:', this.serverTeam.cur_cube);
                          this.curBox = this.map[this.serverTeam.cur_cube];
                          this.nextBox = this.map[this.serverTeam.cur_cube + 1];
                          this.Player.curBox = this.curBox;
                          this.Player.nextBox = this.nextBox;

                          if (this.curBox) {
                            this.Player.reset(this.serverTeam);
                          }
                        }
                      }

                      log('同步游戏数据', '完成', 'ServerPlayer:', this.serverPlayer, 'ServerTeam:', this.serverTeam);

                    case 46:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));

            function syncGameData(_x10) {
              return _syncGameData.apply(this, arguments);
            }

            return syncGameData;
          }() // 根据地图节点数据创建一个方块并返回

        }, {
          key: "createBox",
          value: function () {
            var _createBox = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var data,
                  lastNode,
                  animation,
                  cur_pos,
                  new_pos,
                  face,
                  distance,
                  size,
                  shae,
                  key,
                  prefab,
                  newBox,
                  root,
                  index,
                  element,
                  render,
                  boxCom,
                  _args26 = arguments;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      data = _args26.length > 0 && _args26[0] !== undefined ? _args26[0] : null;
                      lastNode = _args26.length > 1 && _args26[1] !== undefined ? _args26[1] : null;
                      animation = _args26.length > 2 && _args26[2] !== undefined ? _args26[2] : false;
                      cur_pos = new Vec3();
                      new_pos = new Vec3();
                      face = data[0];
                      distance = data[1];
                      size = data[2];
                      shae = data[3];
                      key = '';

                      if (shae == BoxShape.circle) {
                        key = 'y';
                      } else {
                        key = 'f';
                      }

                      key = key + (size + 1).toString();
                      prefab = this.BoxPrefab[key][data[4]]; //[randomRangeInt(0, this.BoxPrefab[key].length)]

                      if (!prefab) prefab = this.BoxPrefab[key][0];
                      newBox = instantiate(prefab); // 添加测试用范围大小显示
                      // const t1 = instantiate(this.rangeShowPrefab)
                      // const t2 = instantiate(this.rangeShowPrefab)
                      // const t3 = instantiate(this.rangeShowPrefab)
                      // const t4 = instantiate(this.rangeShowPrefab)
                      // t1.setParent(newBox);
                      // t2.setParent(newBox);
                      // t3.setParent(newBox);
                      // t4.setParent(newBox);
                      // t1.setPosition(new Vec3(BoxSize[size]/2, 0.5, 0))
                      // t2.setPosition(new Vec3(-BoxSize[size]/2, 0.5, 0))
                      // t3.setPosition(new Vec3(0, 0.5, BoxSize[size]/2))
                      // t4.setPosition(new Vec3(0, 0.5, -BoxSize[size]/2))
                      // 开启阴影

                      root = newBox.getChildByName('RootNode');

                      for (index = 0; index < root.children.length; index++) {
                        element = root.children[index];
                        render = element.getComponent(MeshRenderer);

                        if (render) {
                          render.shadowCastingMode = 1;
                        }
                      } // 添加box脚本组件


                      boxCom = newBox.addComponent(Box);

                      if (!lastNode) {
                        _context26.next = 34;
                        break;
                      }

                      lastNode.node.getPosition(cur_pos);
                      new_pos = cur_pos.clone();
                      new_pos.y = 0;
                      distance += (BoxSize[lastNode.size] + BoxSize[size]) / 2.0;

                      if (face == 1) {
                        new_pos.z -= distance;
                      } else {
                        new_pos.x += distance;
                      }

                      if (animation) {
                        newBox.setPosition(new Vec3(new_pos.x, 7, new_pos.z));
                      } else {
                        newBox.setPosition(new Vec3(new_pos.x, 0, new_pos.z));
                      }

                      newBox.setParent(this.Player.node.parent);

                      if (!animation) {
                        _context26.next = 31;
                        break;
                      }

                      boxCom.startFall();
                      return _context26.abrupt("return", newBox);

                    case 31:
                      return _context26.abrupt("return", newBox);

                    case 32:
                      _context26.next = 37;
                      break;

                    case 34:
                      newBox.setPosition(new Vec3(0, 0, 0));
                      newBox.setParent(this.Player.node.parent);
                      return _context26.abrupt("return", newBox);

                    case 37:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));

            function createBox() {
              return _createBox.apply(this, arguments);
            }

            return createBox;
          }()
        }, {
          key: "clearMap",
          value: function clearMap() {
            var min = this.serverTeam.cur_cube > this.otherTeam.cur_cube ? this.otherTeam.cur_cube : this.serverTeam.cur_cube;
            var limit = min - 4;

            if (limit > 0) {
              for (var index = limit; index >= 0; index--) {
                var element = this.map[index];

                if (element.node) {
                  log('地图定时清除', index, element.node);
                  element.node.destroy();
                  element.node = null;
                } else break;
              }
            }
          }
        }, {
          key: "showToast",
          value: function showToast(text, time) {
            this.toast.show(text, time);
          }
        }, {
          key: "changePlane",
          value: function changePlane() {
            var met = this.plane.getComponent(MeshRenderer).material;
            this.planeIndex += 1;
            if (this.planeIndex > 4) this.planeIndex = 1;
            var tag = this.planeIndex % 2 == 0;
            var new_texture;

            switch (this.planeIndex) {
              case 1:
                new_texture = this.background_2;
                break;

              case 2:
                new_texture = this.background_3;
                break;

              case 3:
                new_texture = this.background_4;
                break;

              case 4:
                new_texture = this.background_1;
                break;

              default:
                return;
            }

            tween(this.plane).to(2, {}, {
              onComplete: function onComplete() {
                if (tag) met.setProperty('Texture1', new_texture);else met.setProperty('Texture2', new_texture);
              },
              onUpdate: function onUpdate(target, ratio) {
                met.passes[0].setUniform(met.passes[0].getHandle("rate"), tag ? ratio : 1.0 - ratio);
              }
            }).start(); // tween(this.node).to(2, {}, {onComplete: () => {
            //     this.planeIndex += 1;
            //     if(this.planeIndex > 4) this.planeIndex = 1
            //     switch (this.planeIndex) {
            //         case 1:
            //             met.setProperty('mainTexture', this.background_1);
            //             break;
            //         case 2:
            //             met.setProperty('mainTexture', this.background_2);
            //             break;
            //         case 3:
            //             met.setProperty('mainTexture', this.background_3);
            //             break;
            //         case 4:
            //             met.setProperty('mainTexture', this.background_4);
            //             break;
            //         default:
            //             break;
            //     }
            //     met.passes[0].setUniform(met.passes[0].getHandle("alpha"), 0);
            //     tween(this.node).to(2, {}, {onComplete: () => {
            //         met.passes[0].setUniform(met.passes[0].getHandle("alpha"), 1);
            //     }, onUpdate: (target, ratio: number) => {
            //         met.passes[0].setUniform(met.passes[0].getHandle("alpha"), ratio);
            //     }}).start()
            // }, onUpdate: (target, ratio: number) => {
            //     met.passes[0].setUniform(met.passes[0].getHandle("alpha"), 1-ratio);
            // }}).start()
          }
        }, {
          key: "showScore",
          value: function () {
            var _showScore = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(score, perfectCount) {
              var _this6 = this;

              var speed,
                  _args28 = arguments;
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      speed = _args28.length > 2 && _args28[2] !== undefined ? _args28[2] : 1;
                      return _context28.abrupt("return", new Promise( /*#__PURE__*/function () {
                        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27(resolve) {
                          var ui, scoreNode, perfectNode, pos, uipos, transform, label, num1, num2, count1, count2, node;
                          return regeneratorRuntime.wrap(function _callee27$(_context27) {
                            while (1) {
                              switch (_context27.prev = _context27.next) {
                                case 0:
                                  ui = _this6.node.parent.getChildByName('UI');
                                  scoreNode = new Node();
                                  pos = new Vec3();

                                  _this6.Player.node.getPosition(pos);

                                  pos.y += 1;
                                  uipos = new Vec3();

                                  _this6.camera.convertToUINode(pos, ui, uipos);

                                  transform = scoreNode.addComponent(UITransform);
                                  label = scoreNode.addComponent(Label);
                                  transform.setContentSize(35, 25);
                                  label.string = '+' + score;
                                  label.fontSize = 20;
                                  label.color = new Color(102, 102, 102);
                                  scoreNode.setPosition(uipos);
                                  scoreNode.setParent(ui);
                                  scoreNode.active = true;

                                  if (!(perfectCount > 0)) {
                                    _context27.next = 39;
                                    break;
                                  } //显示白圈


                                  _this6.Player.quan.startAnimation(); // 显示perfect


                                  perfectNode = instantiate(_this6.PerfectPrefab);
                                  perfectNode.active = false;
                                  num1 = perfectNode.getChildByName('number_1');
                                  num2 = perfectNode.getChildByName('number_2');

                                  if (!(perfectCount < 10)) {
                                    _context27.next = 27;
                                    break;
                                  }

                                  _context27.next = 25;
                                  return _this6.Util.loadImg('Texture/number/' + perfectCount + '/spriteFrame', num1);

                                case 25:
                                  _context27.next = 34;
                                  break;

                                case 27:
                                  count1 = Math.floor(perfectCount / 10);
                                  count2 = perfectCount % 10;
                                  _context27.next = 31;
                                  return _this6.Util.loadImg('Texture/number/' + count1 + '/spriteFrame', num1);

                                case 31:
                                  _context27.next = 33;
                                  return _this6.Util.loadImg('Texture/number/' + count2 + '/spriteFrame', num2);

                                case 33:
                                  num2.active = true;

                                case 34:
                                  uipos.y += 1.5;
                                  perfectNode.setPosition(uipos);
                                  perfectNode.setParent(ui);
                                  perfectNode.setSiblingIndex(0);
                                  perfectNode.active = true;

                                case 39:
                                  node = {
                                    node: scoreNode,
                                    perfect: perfectNode,
                                    owner: _this6.Player.node,
                                    time: 0,
                                    speed: speed
                                  };

                                  _this6.scoreNodeList.push(node);

                                  resolve(node);

                                case 42:
                                case "end":
                                  return _context27.stop();
                              }
                            }
                          }, _callee27);
                        }));

                        return function (_x13) {
                          return _ref3.apply(this, arguments);
                        };
                      }()));

                    case 2:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28);
            }));

            function showScore(_x11, _x12) {
              return _showScore.apply(this, arguments);
            }

            return showScore;
          }()
        }, {
          key: "updateCenterNode",
          value: function updateCenterNode() {
            var isPerfect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (!isPerfect) {
              this.CenterNode.active = false;
              this.CenterNode.setParent(this.node.getParent());
              return;
            }

            if (this.nextBox) {
              this.CenterNode.setParent(this.nextBox.node);
              var scale = BoxSize[this.nextBox.size] / 10;
              this.CenterNode.setScale(new Vec3(scale, 0.001, scale));
              this.CenterNode.active = true;
            } else {
              this.CenterNode.active = false;
              this.CenterNode.setParent(this.node.getParent());
              return;
            }
          }
        }, {
          key: "updateScoreNode",
          value: function updateScoreNode(dt) {
            var pos = new Vec3();
            var uipos = new Vec3();
            var uipos_perfect = new Vec3();
            var uipos_userTip = new Vec3();
            var ui = this.node.parent.getChildByName('UI');

            for (var index = this.scoreNodeList.length - 1; index >= 0; index--) {
              var element = this.scoreNodeList[index];
              element.owner.getPosition(pos);
              pos.y += element.time * element.speed + 4;
              this.camera.convertToUINode(pos, ui, uipos);
              element.node.setPosition(uipos);

              if (element.perfect != undefined) {
                element.owner.getPosition(uipos_perfect);
                uipos_perfect.y += 3.5;
                this.camera.convertToUINode(uipos_perfect, ui, uipos_perfect);
                element.perfect.setPosition(uipos_perfect);
              }

              element.time += dt;

              if (element.time > 1) {
                element.node.destroy();

                if (element.perfect) {
                  element.perfect.destroy();
                }

                this.scoreNodeList.splice(index, 1);
              }
            } // 显示用户头像提示


            if (this.isRunning || this.SDK.curBoard && this.SDK.curBoard.name == 'TeachingBoard') {
              pos = this.Player.node.getPosition();
              pos.y += 2.2;
              this.camera.convertToUINode(pos, ui, uipos_userTip);
              this.userTipNode.setPosition(uipos_userTip);
            } else {
              if (this.SDK.curBoard && this.SDK.curBoard.name != 'TeachingBoard') {
                this.userTipNode.active = false;

                var _ui = this.node.getParent().getChildByName('UI');

                _ui.getChildByName('enemy1').active = false;
                _ui.getChildByName('enemy2').active = false;
              }
            }
          }
        }, {
          key: "updateEnemyPosition",
          value: function updateEnemyPosition() {
            var ui = this.node.getParent().getChildByName('UI');

            var _pos = this.OtherTeam.node.getPosition();

            var screen = view.getFrameSize();
            ui.getChildByName('enemy1').active = false;
            ui.getChildByName('enemy2').active = false;
            this.camera.convertToUINode(_pos, this.node.getParent().getChildByName('UI'), _pos);

            if (Math.abs(_pos.x) > screen.width / 2 || Math.abs(_pos.y) > screen.height / 2) {
              if (_pos.x < 0 && _pos.y > 0) {
                ui.getChildByName('enemy1').active = true;
              }

              if (_pos.x > 0 && _pos.y > 0) {
                ui.getChildByName('enemy2').active = true;
              }
            }
          }
        }, {
          key: "update",
          value: function update(dt) {
            this.updateScoreNode(dt);

            if (this.isRunning) {
              this.updateEnemyPosition();
              this.clearTime += dt;

              if (this.clearTime >= 60) {
                this.clearTime = 0;
                this.clearMap();
              }
            }
          }
        }, {
          key: "isControler",
          set: function set(b) {
            this._isControler = b;
            this.Player.control = b;
          },
          get: function get() {
            return this._isControler;
          }
        }, {
          key: "isRunning",
          set: function set(b) {
            this._isRunning = b;
            this.Player.isRunning = b;
            this.OtherTeam.isRunning = b;
          },
          get: function get() {
            return this._isRunning;
          }
        }]);

        return GameManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Player", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "OtherTeam", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "CenterNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "plane", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "UI", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "toast", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "rangeShowPrefab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "audio_failed", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "audio_complete", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "audio_dead", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "audio_perfect", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "audio_last5s", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "audio_ready", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "audio_relife", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "audio_touch_down", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "audio_win", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "audio_go", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "background_1", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "background_2", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "background_3", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "background_4", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "userTipNode", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "loadingBar", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Interface.js", ["cc"], function (_export, _context) {
  "use strict";

  var cclegacy;
  return {
    setters: [function (_cc) {
      cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "894b2eWkr1IfbbtaCcBLs2k", "Interface", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/loading.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, view, UITransform, tween, Vec3, Component, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, ccclass, property, Loading;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      view = _cc.view;
      UITransform = _cc.UITransform;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ed3e4x24cBJ5ZYW/Ka+YLCJ", "loading", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Loading", Loading = (_dec = ccclass('Loading'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Sprite
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(Loading, _Component);

        function Loading() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Loading);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Loading)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "ndBg1_1", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ndBg1_2", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ndBg3", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "spBg3", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ndC1", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ndC2", _descriptor6, _assertThisInitialized(_this));

          _this.bg1_speed = 50;
          _this.bg3_speed = -20;
          _this.win_size = view.getVisibleSize();
          _this.jump1_duration = 1;
          _this.jump2_duration = 1.66;
          return _this;
        }

        _createClass(Loading, [{
          key: "onLoad",
          value: function onLoad() {
            this.ndBg1_2.getComponent(UITransform).setContentSize(this.ndBg1_1.getComponent(UITransform).contentSize);
            this.bg1_origin_x = this.win_size.width / 2;
            this.bg2_origin_x = this.bg1_origin_x * 3;
            this.bg1_origin_y = this.win_size.height / 2;
            this.ndBg1_2.setPosition(this.bg2_origin_x, this.bg1_origin_y, 0);
            this.cur_bg1 = this.ndBg1_1;
            this.cur_bg2 = this.ndBg1_2;
            this.cur_bg1_x = this.bg1_origin_x;
            this.cur_bg2_x = this.bg2_origin_x;
            this.cur_bg3_x = -this.bg1_origin_x;
          }
        }, {
          key: "start",
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "jumpPlay",
          value: function jumpPlay(n) {
            var originPos = n.getPosition();
            var newPos = n.getPosition();
            newPos.y += 50;
            tween(n).to(0.33, {
              scale: new Vec3(1.1, 0.5, 1)
            }).to(0.33, {
              scale: new Vec3(1, 1, 1),
              position: newPos
            }).to(0.66, {
              scale: new Vec3(1, 1, 1),
              position: originPos
            }).start();
          }
        }, {
          key: "updateBg1",
          value: function updateBg1(dt) {
            this.cur_bg1_x -= this.bg1_speed * dt;
            this.cur_bg2_x -= this.bg1_speed * dt;

            if (this.cur_bg1_x < -this.bg1_origin_x) {
              this.cur_bg1_x = this.bg1_origin_x;
              this.cur_bg2_x = this.bg2_origin_x;
              var temp = this.cur_bg1;
              this.cur_bg1 = this.cur_bg2;
              this.cur_bg2 = temp;
            }

            this.cur_bg1.setPosition(this.cur_bg1_x, this.bg1_origin_y, 0);
            this.cur_bg2.setPosition(this.cur_bg2_x, this.bg1_origin_y, 0);
          }
        }, {
          key: "updateBg3",
          value: function updateBg3(dt) {
            this.cur_bg3_x += this.bg3_speed * dt;

            if (this.cur_bg3_x < -this.bg1_origin_x - 75) {
              this.bg3_speed = 20;
              this.cur_bg3_x = -this.bg1_origin_x - 75;
            } else if (this.cur_bg3_x > -this.bg1_origin_x) {
              this.bg3_speed = -20;
              this.cur_bg3_x = -this.bg1_origin_x;
            }

            var dx = -this.bg1_origin_x - this.cur_bg3_x;
            this.ndBg3.setPosition(this.cur_bg3_x, -100, 0);
            this.spBg3.color.set(255, 255, 255, 255 - dx / 75 * 135);
          }
        }, {
          key: "updateJump",
          value: function updateJump(dt) {
            this.jump1_duration -= dt;
            this.jump2_duration -= dt;

            if (this.jump1_duration <= 0) {
              this.jumpPlay(this.ndC1);
              this.jump1_duration = 3;
            }

            if (this.jump2_duration <= 0) {
              this.jumpPlay(this.ndC2);
              this.jump2_duration = 3;
            }
          }
        }, {
          key: "update",
          value: function update(dt) {
            this.updateBg1(dt);
            this.updateBg3(dt);
            this.updateJump(dt);
          }
        }]);

        return Loading;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ndBg1_1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ndBg1_2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ndBg3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spBg3", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ndC1", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ndC2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///UI/resultUI.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Const.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, Animation, Component, log, _dec, _class, ccclass, property, ResultUI;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Component = _cc.Component;
    }, function (_ConstJs) {
      log = _ConstJs.log;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8f98aNhGdlEqY/iWb0VOzE3", "resultUI", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ResultUI", ResultUI = (_dec = ccclass('ResultUI'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(ResultUI, _Component);

        function ResultUI() {
          _classCallCheck(this, ResultUI);

          return _possibleConstructorReturn(this, _getPrototypeOf(ResultUI).apply(this, arguments));
        }

        _createClass(ResultUI, [{
          key: "start",
          value: function start() {
            this.anima = this.node.getComponent(Animation);
            log('anima: ', this.anima);
            log('parent: ', this.node.getParent());
            this.anima.defaultClip.events.push({
              frame: 1,
              func: 'test',
              params: []
            });
            this.anima.defaultClip.updateEventDatas();
          }
        }, {
          key: "test",
          value: function test() {
            var _this = this;

            this.anima.pause();
            setTimeout(function () {
              _this.anima.resume();
            }, 1000);
          }
        }, {
          key: "mvpAnimaEnd",
          value: function mvpAnimaEnd() {}
        }]);

        return ResultUI;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/prerequisite-imports:main", ["../Box.js", "../Config.js", "../Const.js", "../DeployInfo.js", "../quan.js", "../Player.js", "../Util.js", "../SDK.js", "../UI/Dialog/Dialog.js", "../UI/Board/BaseBoard.js", "../UI/Board/WaitLoverBoard.js", "../OtherPlayer.js", "../UI/avatar.js", "../UI/Board/GamingBoard.js", "../UI/Dialog/RulesDialog.js", "../UI/Board/MainBoard.js", "../UI/Board/MatchingBoard.js", "../UI/Board/ResultBoard.js", "../UI/highLightMask.js", "../UI/Board/TeachingBoard.js", "../UI/toast.js", "../UI/loadingBar.js", "../GameManager.js", "../Interface.js", "../UI/loading.js", "../UI/resultUI.js"], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_BoxJs) {}, function (_ConfigJs) {}, function (_ConstJs) {}, function (_DeployInfoJs) {}, function (_quanJs) {}, function (_PlayerJs) {}, function (_UtilJs) {}, function (_SDKJs) {}, function (_UIDialogDialogJs) {}, function (_UIBoardBaseBoardJs) {}, function (_UIBoardWaitLoverBoardJs) {}, function (_OtherPlayerJs) {}, function (_UIAvatarJs) {}, function (_UIBoardGamingBoardJs) {}, function (_UIDialogRulesDialogJs) {}, function (_UIBoardMainBoardJs) {}, function (_UIBoardMatchingBoardJs) {}, function (_UIBoardResultBoardJs) {}, function (_UIHighLightMaskJs) {}, function (_UIBoardTeachingBoardJs) {}, function (_UIToastJs) {}, function (_UILoadingBarJs) {}, function (_GameManagerJs) {}, function (_InterfaceJs) {}, function (_UILoadingJs) {}, function (_UIResultUIJs) {}],
    execute: function () {}
  };
});

(function(r) {
  r('project:///assets/Scripts/Box.js', 'chunks:///Box.js');
  r('project:///assets/Scripts/Config.js', 'chunks:///Config.js');
  r('project:///assets/Scripts/Const.js', 'chunks:///Const.js');
  r('project:///assets/Scripts/DeployInfo.js', 'chunks:///DeployInfo.js');
  r('project:///assets/Scripts/quan.js', 'chunks:///quan.js');
  r('project:///assets/Scripts/Player.js', 'chunks:///Player.js');
  r('project:///assets/Scripts/Util.js', 'chunks:///Util.js');
  r('project:///assets/Scripts/SDK.js', 'chunks:///SDK.js');
  r('project:///assets/Scripts/UI/Dialog/Dialog.js', 'chunks:///UI/Dialog/Dialog.js');
  r('project:///assets/Scripts/UI/Board/BaseBoard.js', 'chunks:///UI/Board/BaseBoard.js');
  r('project:///assets/Scripts/UI/Board/WaitLoverBoard.js', 'chunks:///UI/Board/WaitLoverBoard.js');
  r('project:///assets/Scripts/OtherPlayer.js', 'chunks:///OtherPlayer.js');
  r('project:///assets/Scripts/UI/avatar.js', 'chunks:///UI/avatar.js');
  r('project:///assets/Scripts/UI/Board/GamingBoard.js', 'chunks:///UI/Board/GamingBoard.js');
  r('project:///assets/Scripts/UI/Dialog/RulesDialog.js', 'chunks:///UI/Dialog/RulesDialog.js');
  r('project:///assets/Scripts/UI/Board/MainBoard.js', 'chunks:///UI/Board/MainBoard.js');
  r('project:///assets/Scripts/UI/Board/MatchingBoard.js', 'chunks:///UI/Board/MatchingBoard.js');
  r('project:///assets/Scripts/UI/Board/ResultBoard.js', 'chunks:///UI/Board/ResultBoard.js');
  r('project:///assets/Scripts/UI/highLightMask.js', 'chunks:///UI/highLightMask.js');
  r('project:///assets/Scripts/UI/Board/TeachingBoard.js', 'chunks:///UI/Board/TeachingBoard.js');
  r('project:///assets/Scripts/UI/toast.js', 'chunks:///UI/toast.js');
  r('project:///assets/Scripts/UI/loadingBar.js', 'chunks:///UI/loadingBar.js');
  r('project:///assets/Scripts/GameManager.js', 'chunks:///GameManager.js');
  r('project:///assets/Scripts/Interface.js', 'chunks:///Interface.js');
  r('project:///assets/Scripts/UI/loading.js', 'chunks:///UI/loading.js');
  r('project:///assets/Scripts/UI/resultUI.js', 'chunks:///UI/resultUI.js');
  r('virtual:///prerequisite-imports:main', 'chunks:///_virtual/prerequisite-imports:main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    var _m;
    return {
        setters: [function(m) { _m = m; }],
        execute: function () { _export(_m); }
    };
    });
});
} }; });