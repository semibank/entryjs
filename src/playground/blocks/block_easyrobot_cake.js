"use strict";

/*******************************************************
 * 명명 규칙
 *
 * 함수명, 변수명 : 첫 글자 소문자, 다음 단어 첫 글자 대문자, 두단어 이상 조합     예) nameRull
 * 키  값 : 모두 대문자, 단어사이 '_' 사용함                                    예) NAME_RULL
 *
 *********************************************************/

Entry.easyrobot_cake = {
  id: '1F.1',
  name: 'easyrobot_cake',
  url: 'http://cafe.naver.com/easyrobot',
  imageName: 'easyrobot_cake.png',
  title: {
    ko: '이지로봇케이크',
    en: 'easyrobot_cake',
  },
  setZero: function setZero() {
    // 엔트리 정지시 하드웨어 초기화 로직
    Entry.hw.sendQueue = {}; // key 값이 없으면 entry-HW에서 entryJS 정지로 인식

    Entry.hw.update(); // 반드시 업데이트 해야 전송됨 
  },
  monitorTemplate: {
    imgPath: 'hw/transparent.png',
    width: 605,
    height: 434,
    listPorts: {
      '10': {
        name: "".concat(Lang.Hw.port_en, " BD ").concat(Lang.Hw.port_ko),
        type: 'input',
        pos: {
          x: 0,
          y: 0
        }
      },
      '2': {
        name: "".concat(Lang.Hw.port_en, " B3 ").concat(Lang.Hw.port_ko),
        type: 'input',
        pos: {
          x: 0,
          y: 0
        }
      },
      '9': {
        name: "".concat(Lang.Hw.port_en, " B4 ").concat(Lang.Hw.port_ko),
        type: 'input',
        pos: {
          x: 0,
          y: 0
        }
      },
      '3': {
        name: "".concat(Lang.Hw.port_en, " C1 ").concat(Lang.Hw.port_ko),
        type: 'input',
        pos: {
          x: 0,
          y: 0
        }
      },
      '12': {
        name: "".concat(Lang.Hw.port_en, " C2 ").concat(Lang.Hw.port_ko),
        type: 'input',
        pos: {
          x: 0,
          y: 0
        }
      },
      '11': {
        name: "".concat(Lang.Hw.port_en, " C3 ").concat(Lang.Hw.port_ko),
        type: 'input',
        pos: {
          x: 0,
          y: 0
        }
      },
      '13': {
        name: "".concat(Lang.Hw.port_en, " C4 ").concat(Lang.Hw.port_ko),
        type: 'input',
        pos: {
          x: 0,
          y: 0
        }
      },
      
      
      '16': {
        name: "".concat(Lang.Hw.port_en, " A1 ").concat(Lang.Hw.port_ko),
        type: 'input',
        pos: {
          x: 0,
          y: 0
        }
      },
      '17': {
        name: "".concat(Lang.Hw.port_en, " A2 ").concat(Lang.Hw.port_ko),
        type: 'input',
        pos: {
          x: 0,
          y: 0
        }
      },
      
      '20': {
        name: "".concat(Lang.Hw.port_en, " A3 ").concat(Lang.Hw.port_ko),
        type: 'input',
        pos: {
          x: 0,
          y: 0
        }
      },
      '21': {
        name: "".concat(Lang.Hw.port_en, " A4 ").concat(Lang.Hw.port_ko),
        type: 'input',
        pos: {
          x: 0,
          y: 0
        }
      },
      '14': {
        name: "".concat(Lang.Hw.port_en, " B1 ").concat(Lang.Hw.port_ko),
        type: 'input',
        pos: {
          x: 0,
          y: 0
        }
      },
      '15': {
        name: "".concat(Lang.Hw.port_en, " B2 ").concat(Lang.Hw.port_ko),
        type: 'input',
        pos: {
          x: 0,
          y: 0
        }
      },
      
      '18': {
        name: "".concat(Lang.Hw.port_en, " SD ").concat(Lang.Hw.port_ko),
        type: 'input',
        pos: {
          x: 0,
          y: 0
        }
      },
      '19': {
        name: "".concat(Lang.Hw.port_en, " SC ").concat(Lang.Hw.port_ko),
        type: 'input',
        pos: {
          x: 0,
          y: 0
        }
      }
      //M3: {
      //    name: `${Lang.Hw.port_en} MA ` + `모터 속도`,
      //    type: 'input',
      //    pos: { x: 0, y: 0 },
      //},
      //M11: {
      //    name: `${Lang.Hw.port_en} MB ` + `모터 속도`,
      //    type: 'input',
      //    pos: { x: 0, y: 0 },
      //},

    },
    mode: 'both'
  },
  thresHold: {
    '14': 512,
    '15': 512,
    '16': 512,
    '17': 512,
    '18': 512,
    '19': 512,
    '20': 512,
    '21': 512
  },
  portMode: {
    SET_GROUP_DEVICE: 0x80,
    SET_INIT_DEVICE: 0x80,
    SET_BLUE_PW: 0x82,
    SET_NO_TONE: 0x83,
    SET_DIGITAL_OUT: 0x90,
    SET_G_MOTOR: 0xa0,
    SET_MOTOR_SPEED: 0xa0,
    SET_MOTOR_CURRENT: 0xb0,
    SET_G_SERVO_PWM_TON: 0xc0,
    SET_SERVO_POSITION: 0xc0,
    SET_SERVO_SPEED: 0xc8,
    SET_PWM: 0xd0,
    SET_TONE: 0xd8,
    SET_G_INPUT: 0xe0,
    SET_ANALOG_IN: 0xe0,
    SET_DIGITAL_IN: 0xe8,
    SET_ULTRASONIC: 0xf0
  },
  transferModeValue: function transferModeValue(portNo, mode, value) {
    var mPortNo = "m".concat(portNo);
    Entry.hw.sendQueue[mPortNo] = mode;
    Entry.hw.sendQueue[portNo] = value;
    /*
    if (Entry.hw.portData[mPortNo] !== mode) {
        Entry.hw.sendQueue[mPortNo] = mode;
        Entry.hw.sendQueue[portNo] = value;
        Entry.hw.update();
        delete Entry.hw.sendQueue[mPortNo];
        delete Entry.hw.sendQueue[portNo]; // 큐에서 지우면 하드웨어 모니터에서 값 표시가 안됨. 값을 HW 프로그램에서 전송하여 표시
    } else {
        Entry.hw.sendQueue[portNo] = value;
        Entry.hw.update();
        delete Entry.hw.sendQueue[portNo];
    }*/
  },
  transferValue: function transferValue(portNo, value) {
    Entry.hw.sendQueue[portNo] = value; //Entry.hw.update();
    //delete Entry.hw.sendQueue[portNo];
  },
  transferMode: function transferMode(portNo, mode) {
    var mPortNo = "m".concat(portNo);
    Entry.hw.sendQueue[mPortNo] = mode;
    /*
    if (Entry.hw.portData[mPortNo] !== mode) {
        Entry.hw.sendQueue[mPortNo] = mode;
        Entry.hw.update();
        delete Entry.hw.sendQueue[mPortNo];
    }*/
  }
};

Entry.easyrobot_cake.setLanguage = function () {
  return {
    ko: {
      // ko.js에 작성하던 내용
      template: {
        
        easyrobot_cake_get_digital: "%1 디지털 값",   //boolean
        easyrobot_cake_get_digital2: "%1 디지털 값",  //string value
        easyrobot_cake_get_sensor_value: "%1 센서값",
        easyrobot_cake_set_get_sensor_value_map: '%1 의 범위를 %2 ~ %3 에서 %4 ~ %5 로 바꾼값',
        easyrobot_cake_get_ultrasonic_value: "초음파센서 Trig %1 Echo %2 의 거리값 [cm]",
        easyrobot_cake_get_temperature: "%1 온도 센서 값",
        
        
        easyrobot_cake_set_digital: "%1번 %2 %3",
        easyrobot_cake_set_pwm: "%1PWM을 %2%로 정하기 %3",
        easyrobot_cake_set_tone: "%1버저 %2 %3 음으로 연주 %4",
        easyrobot_cake_set_tone_time: "%1버저 %2 %3 음으로 %4 초 연주 %5",
        easyrobot_cake_set_servo_position: "%1서보모터 위치 :%2도로 옮기기 %3",
        easyrobot_cake_set_servo_speed: "%1서보모터 속도 : 1초당 %2도로 정하기 %3",
        
        easyrobot_cake_set_dc_motor_direction: "%1 DC 모터를 %2 방향으로 정하기 %3",
        easyrobot_cake_set_dc_motor_speed: "%1 DC모터를 %2 속도로 돌리기 %3",
        
        easyrobot_cake_set_blue_pw: "블루투스 비밀번호 : %1%2%3%4로 정하기%5",
        easyrobot_cake_set_threshold: "%1 센서 감도 : %2로 정하기%3",
        easyrobot_cake_get_dc_motor_current: "%1모터 사용전류값",        
        easyrobot_cake_set_dc_motor: "%1모터 속도 %2로 정하기%3"
      }
    },
    en: {
      // en.js에 작성하던 내용
      template: {
        
        easyrobot_cake_get_digital: "%1",
        easyrobot_cake_get_digital2: "%1",
        easyrobot_cake_get_sensor_value: "Analog %1 Sensor value",
        easyrobot_cake_set_get_sensor_value_map: 'Map Value %1 %2 ~ %3 to %4 ~ %5',
        easyrobot_cake_get_ultrasonic_value: "Read ultrasonic sensor trig pin %1 echo pin %2",
        easyrobot_cake_get_temperature: "temperature %1 Sensor",
        
        
        easyrobot_cake_set_digital: "Digital %1 Pin %2 %3",
        easyrobot_cake_set_pwm: "Digital %1 Pin %2 %3",
        easyrobot_cake_set_tone: "Play tone pin %1 on note %2 octave %3 %4",
        easyrobot_cake_set_tone_time: "Play tone pin %1 on note %2 octave %3 beat %4 %5",
        easyrobot_cake_set_servo_position: "Set servo pin %1 angle as %2 %3",
        easyrobot_cake_set_servo_speed: "Set servo pin %1 speed %2 degree per second %3",
        
        easyrobot_cake_set_dc_motor_direction: "%1 DC Motor direction %2 %3",
        easyrobot_cake_set_dc_motor_speed: "%1 DC Motor Speed %2 %3",
        
        easyrobot_cake_set_blue_pw: "Change PW of Bluetooth to %1%2%3%4 %5",
        easyrobot_cake_set_threshold: "Set %1 threshold : %2%3",
        easyrobot_cake_get_dc_motor_current: "Get 1%motor current",
        easyrobot_cake_set_dc_motor: "Set %1 motor speed to %2 %3"
      }
    }
  };
};
//here cake
Entry.easyrobot_cake.blockMenuBlocks = [// easyrobot_cake Added 2018-02-12
//'easyrobot_cake_get_digital', 'easyrobot_cake_get_sensor_value', 'easyrobot_cake_set_get_sensor_value_map', 'easyrobot_cake_get_dc_motor_current', 'easyrobot_cake_get_ultrasonic_value', 'easyrobot_cake_get_temperature', 'easyrobot_cake_set_digital', 'easyrobot_cake_set_pwm', 'easyrobot_cake_set_tone', 'easyrobot_cake_set_tone_time', 'easyrobot_cake_set_dc_motor', 'easyrobot_cake_set_servo_position', 'easyrobot_cake_set_servo_speed', 'easyrobot_cake_set_blue_pw','easyrobot_cake_set_threshold'  // easyrobot_cake Added 2018-02-12

'easyrobot_cake_get_digital', 'easyrobot_cake_get_digital2','easyrobot_cake_get_sensor_value', 'easyrobot_cake_set_get_sensor_value_map', 'easyrobot_cake_get_ultrasonic_value', 'easyrobot_cake_get_temperature', 
'easyrobot_cake_set_digital', 'easyrobot_cake_set_pwm', 'easyrobot_cake_set_tone', 'easyrobot_cake_set_tone_time', 
'easyrobot_cake_set_servo_position', 'easyrobot_cake_set_servo_speed', 
'easyrobot_cake_set_dc_motor_direction', 'easyrobot_cake_set_dc_motor_speed', 
'easyrobot_cake_set_blue_pw','easyrobot_cake_set_threshold'  // easyrobot_cake Added 2018-02-12
];
//easyrobot_cake_block
Entry.easyrobot_cake.getBlocks = function () {
  return {
    //region easyrobot_cake
    easyrobot_cake_get_digital: {
      color: EntryStatic.colorSet.block["default"].HARDWARE,
      outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
      fontColor: '#fff',
      //skeleton: 'basic_string_field',
      skeleton: 'basic_boolean_field',
      params: [{
        type: 'Dropdown',
        options: [
            ['pinBD', '10'], ['pinA1', '16'], ['pinA2', '17'], ['pinA3', '20'], ['pinA4', '21'], 
            ['pinB1', '14'], ['pinB2', '15'], ['pinB3', '2'],  ['pinB4', '9'],  ['pinC1', '3'], ['pinC2', '12'], ['pinC3', '11'], ['pinC4', '13'],
            ['pinC5', '5'],  ['pinC6', '4'],  ['pinC7', '6'],  ['pinC8', '7'],  ['pinSD', '18'], ['pinSC', '19']
            ],
        value: '10',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }],
      events: {},
      def: {
        params: [null],
        type: 'easyrobot_cake_get_digital'
      },
      paramsKeyMap: {
        PORT: 0
      },
      "class": 'easyrobot_cakeGet',
      isNotFor: ['easyrobot_cake'],
      func: function func(sprite, script) {
        var portNo = script.getNumberField('PORT', script); //var mPortNo = `m${portNo}`;

        var mode;
        var value;

        if (portNo > 14) {
          mode = Entry.easyrobot_cake.portMode.SET_ANALOG_IN;
        } else {
          mode = Entry.easyrobot_cake.portMode.SET_DIGITAL_IN;
        }

        Entry.easyrobot_cake.transferMode(portNo, mode);

        if (Entry.hw.portData[portNo] !== undefined) {
          value = Entry.hw.portData[portNo];

          if (portNo > 14) {
            value = value > Entry.easyrobot_cake.thresHold[portNo] ? 1 : 0;
          }

          return value;
        } else {
          return 0;
        }
      },
      syntax: {
        js: [],
        py: []
      }
    },
    easyrobot_cake_get_digital2: {
      color: EntryStatic.colorSet.block["default"].HARDWARE,
      outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
      fontColor: '#fff',
      skeleton: 'basic_string_field',
      params: [{
        type: 'Dropdown',
        options: [
            ['pinBD', '10'], ['pinA1', '16'], ['pinA2', '17'], ['pinA3', '20'], ['pinA4', '21'], 
            ['pinB1', '14'], ['pinB2', '15'], ['pinB3', '2'],  ['pinB4', '9'],  ['pinC1', '3'], ['pinC2', '12'], ['pinC3', '11'], ['pinC4', '13'],
            ['pinC5', '5'],  ['pinC6', '4'],  ['pinC7', '6'],  ['pinC8', '7'],  ['pinSD', '18'], ['pinSC', '19']
            ],
        value: '10',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }],
      events: {},
      def: {
        params: [null],
        type: 'easyrobot_cake_get_digital2'
      },
      paramsKeyMap: {
        PORT: 0
      },
      "class": 'easyrobot_cakeGet',
      isNotFor: ['easyrobot_cake'],
      func: function func(sprite, script) {
        var portNo = script.getNumberField('PORT', script); //var mPortNo = `m${portNo}`;

        var mode;
        var value;

        if (portNo > 14) {
          mode = Entry.easyrobot_cake.portMode.SET_ANALOG_IN;
        } else {
          mode = Entry.easyrobot_cake.portMode.SET_DIGITAL_IN;
        }

        Entry.easyrobot_cake.transferMode(portNo, mode);

        if (Entry.hw.portData[portNo] !== undefined) {
          value = Entry.hw.portData[portNo];

          if (portNo > 14) {
            value = value > Entry.easyrobot_cake.thresHold[portNo] ? 1 : 0;
          }

          return value;
        } else {
          return 0;
        }
      },
      syntax: {
        js: [],
        py: []
      }
    },
    easyrobot_cake_get_sensor_value: {
      color: EntryStatic.colorSet.block["default"].HARDWARE,
      outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
      fontColor: '#fff',
      skeleton: 'basic_string_field',
      statements: [],
      params: [{
        type: 'Dropdown',
        options: [
        ['pinA1', '16'], 
        ['pinA2', '17'], 
        ['pinA3', '20'], 
        ['pinA4', '21'], 
        ['pinB1', '14'], 
        ['pinB2', '15'],
        ['pinSD', '18'], 
        ['pinSC', '19']    
        //['A2', '16'], ['A3', '17'], ['A4', '18'], ['A5', '19'], ['A6', '20'], ['A7', '21']
        
        ],
        value: '16',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }],
      events: {},
      def: {
        params: [null],
        type: 'easyrobot_cake_get_sensor_value'
      },
      paramsKeyMap: {
        PORT: 0
      },
      "class": 'easyrobot_cakeGet',
      isNotFor: ['easyrobot_cake'],
      func: function func(sprite, script) {
        var portNo = script.getNumberField('PORT', script); //const mPortNo = `m${portNo}`;

        var mode = Entry.easyrobot_cake.portMode.SET_ANALOG_IN;
        Entry.easyrobot_cake.transferMode(portNo, mode);

        if (Entry.hw.portData[portNo] !== undefined) {
          return Entry.hw.portData[portNo];
        } else {
          return 0;
        }
      },
      syntax: {
        js: [],
        py: ['easyrobot_cake.sensor_value(%1)']
      }
    },
    
    easyrobot_cake_set_threshold: {
      color: EntryStatic.colorSet.block["default"].HARDWARE,
      outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
      skeleton: 'basic',
      statements: [],
      params: [{
        type: 'Dropdown',
        options: [
        ['pinA1', '16'], 
        ['pinA2', '17'], 
        ['pinA3', '20'], 
        ['pinA4', '21'], 
        ['pinB1', '14'], 
        ['pinB2', '15'],
        ['pinSD', '18'], 
        ['pinSC', '19']   
        ],
        value: '16',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }, {
        type: 'Block',
        accept: 'string'
      }, {
        type: 'Indicator',
        img: 'block_icon/hardware_icon.svg',
        size: 12
      }],
      events: {},
      def: {
        params: [null, {
          type: 'number',
          params: ['512']
        }, null],
        type: 'easyrobot_cake_set_threshold'
      },
      paramsKeyMap: {
        PORT: 0,
        VALUE: 1
      },
      "class": 'easyrobot_cakeGet',
      isNotFor: ['easyrobot_cake'],
      func: function func(sprite, script) {
        var portNo = script.getNumberField('PORT', script);
        var value = script.getValue('VALUE');

        if (!Entry.Utils.isNumber(value)) {
          value = 0;
        }

        value = Math.max(value, 100);
        value = Math.min(value, 900);
        Entry.easyrobot_cake.thresHold[portNo] = value;
        return script.callReturn();
      },
      syntax: {
        js: [],
        py: ['easyrobot_cake.set_threshold(%1, %2)']
      }
    },
    easyrobot_cake_get_temperature: {
      color: EntryStatic.colorSet.block["default"].HARDWARE,
      outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
      fontColor: '#fff',
      skeleton: 'basic_string_field',
      statements: [],
      params: [{
        type: 'Dropdown',
        options: [
        ['pinA1', '16'], 
        ['pinA2', '17'], 
        ['pinA3', '20'], 
        ['pinA4', '21'], 
        ['pinB1', '14'], 
        ['pinB2', '15'],
        ['pinSD', '18'], 
        ['pinSC', '19']   
        ],
        value: '16',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }],
      events: {},
      def: {
        params: [null],
        type: 'easyrobot_cake_get_temperature'
      },
      paramsKeyMap: {
        PORT: 0
      },
      "class": 'easyrobot_cakeGet',
      isNotFor: ['easyrobot_cake'],
      func: function func(sprite, script) {
        var portNo = script.getNumberField('PORT', script); //const mPortNo = `m${portNo}`;

        var mode = Entry.easyrobot_cake.portMode.SET_ANALOG_IN;
        Entry.easyrobot_cake.transferMode(portNo, mode);

        if (Entry.hw.portData[portNo] !== undefined) {
          return Math.round(Entry.hw.portData[portNo] * 4.883 - 500) / 10.0;
        } else {
          return 0;
        }
      },
      syntax: {
        js: [],
        py: ['easyrobot_cake.sensor_temp(%1)']
      }
    },
    easyrobot_cake_set_get_sensor_value_map: {
      color: EntryStatic.colorSet.block["default"].HARDWARE,
      outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
      fontColor: '#fff',
      skeleton: 'basic_string_field',
      statements: [],
      params: [{
        type: 'Block',
        accept: 'string',
        defaultType: 'number'
      }, {
        type: 'Block',
        accept: 'string',
        defaultType: 'number'
      }, {
        type: 'Block',
        accept: 'string',
        defaultType: 'number'
      }, {
        type: 'Block',
        accept: 'string',
        defaultType: 'number'
      }, {
        type: 'Block',
        accept: 'string',
        defaultType: 'number'
      }],
      events: {},
      def: {
        params: [{
          type: 'easyrobot_cake_get_sensor_value'
        }, {
          type: 'number',
          params: ['0']
        }, {
          type: 'number',
          params: ['1023']
        }, {
          type: 'number',
          params: ['0']
        }, {
          type: 'number',
          params: ['100']
        }],
        type: 'easyrobot_cake_set_get_sensor_value_map'
      },
      paramsKeyMap: {
        PORT: 0,
        VALUE2: 1,
        VALUE3: 2,
        VALUE4: 3,
        VALUE5: 4
      },
      "class": 'easyrobot_cakeGet',
      isNotFor: ['easyrobot_cake'],
      func: function func(sprite, script) {
        var result = script.getValue('PORT', script);
        var value2 = script.getNumberValue('VALUE2', script);
        var value3 = script.getNumberValue('VALUE3', script);
        var value4 = script.getNumberValue('VALUE4', script);
        var value5 = script.getNumberValue('VALUE5', script);
        var stringValue4 = script.getValue('VALUE4', script);
        var stringValue5 = script.getValue('VALUE5', script);
        var isFloat = false;

        if (Entry.Utils.isNumber(stringValue4) && stringValue4.indexOf('.') > -1 || Entry.Utils.isNumber(stringValue5) && stringValue5.indexOf('.') > -1) {
          isFloat = true;
        }

        result -= value2;
        result = result * ((value5 - value4) / (value3 - value2));
        result += value4; //result = Math.min(value5, result);
        //result = Math.max(value4, result);

        if (isFloat) {
          result = Math.round(result * 100) / 100;
        } else {
          result = Math.round(result);
        }

        return result;
      },
      syntax: {
        js: [],
        py: [{
          syntax: 'easyrobot_cake.map(%1, %2, %3, %4, %5)',
          blockType: 'param',
          textParams: [{
            type: 'Block',
            accept: 'string'
          }, {
            type: 'Block',
            accept: 'string'
          }, {
            type: 'Block',
            accept: 'string'
          }, {
            type: 'Block',
            accept: 'string'
          }, {
            type: 'Block',
            accept: 'string'
          }]
        }]
      }
    },
    easyrobot_cake_get_ultrasonic_value: {
      color: EntryStatic.colorSet.block["default"].HARDWARE,
      outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
      fontColor: '#fff',
      skeleton: 'basic_string_field',
      statements: [],
      params: [{
        type: 'Dropdown',
        options: [
            ['pinA1', '16'], 
            ['pinA2', '17'], 
            ['pinA3', '20'], 
            ['pinA4', '21'], 
            ['pinB1', '14'], 
            ['pinB2', '15'],
            ['pinB3', '2'], 
            ['pinB4', '9'],
            ['pinC1', '3'], 
            ['pinC2', '12'],
            ['pinC3', '11'], 
            ['pinC4', '13'],
            ['pinC5', '5'], 
            ['pinC6', '4'],
            ['pinC7', '6'], 
            ['pinC8', '7'],
            ['pinSD', '18'], 
            ['pinSC', '19']
            ],
        //options: [['D2', '2'], ['D4', '4'], ['D5', '5'], ['D6', '6'], ['D7', '7'], ['D10', '10']],
        value: '16',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }, {
        type: 'Dropdown',
        options: [
            ['pinA1', '16'], 
            ['pinA2', '17'], 
            ['pinA3', '20'], 
            ['pinA4', '21'], 
            ['pinB1', '14'], 
            ['pinB2', '15'],
            ['pinB3', '2'], 
            ['pinB4', '9'],
            ['pinC1', '3'], 
            ['pinC2', '12'],
            ['pinC3', '11'], 
            ['pinC4', '13'],
            ['pinC5', '5'], 
            ['pinC6', '4'],
            ['pinC7', '6'], 
            ['pinC8', '7'],
            ['pinSD', '18'], 
            ['pinSC', '19']
            ],
        //options: [['D2', '2'], ['D4', '4'], ['D5', '5'], ['D6', '6'], ['D7', '7'], ['D10', '10']],
        value: '17',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }],
      events: {},
      def: {
        params: [null, null],
        type: 'easyrobot_cake_get_ultrasonic_value'
      },
      paramsKeyMap: {
        TIRG: 0,
        ECHO: 1
      },
      "class": 'easyrobot_cakeGet',
      isNotFor: ['easyrobot_cake'],
      func: function func(sprite, script) {
        var trig = script.getNumberField('TIRG', script);
        var echo = script.getNumberField('ECHO', script);
        var mode = Entry.easyrobot_cake.portMode.SET_ULTRASONIC;
        Entry.easyrobot_cake.transferModeValue(trig, mode, echo);

        if (Entry.hw.portData[echo] !== undefined) {
          return Entry.hw.portData[echo];
        } else {
          return 0;
        }
      },
      syntax: {
        js: [],
        py: [{
          syntax: 'easyrobot_cake.ultrasonicRead(%1, %2)',
          blockType: 'param',
          textParams: [{
            type: 'Block',
            accept: 'string'
          }, {
            type: 'Block',
            accept: 'string'
          }]
        }]
      }
    },
    easyrobot_cake_set_digital: {
      color: EntryStatic.colorSet.block["default"].HARDWARE,
      outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
      skeleton: 'basic',
      statements: [],
      params: [{
        type: 'Dropdown',
        options: [
            ['pinBD', '10'], 
            ['pinA1', '16'], 
            ['pinA2', '17'], 
            ['pinB1', '14'], 
            ['pinB2', '15'],
            ['pinB3', '2'], 
            ['pinB4', '9'],
            ['pinC1', '3'], 
            ['pinC2', '12'],
            ['pinC3', '11'], 
            ['pinC4', '13'],
            ['pinC5', '5'], 
            ['pinC6', '4'],
            ['pinC7', '6'], 
            ['pinC8', '7'],
            ['pinSD', '18'], 
            ['pinSC', '19']
            ],
            
        //options: [['D2', '2'], ['D4', '4'], ['D5', '5'], ['D6', '6'], ['D7', '7'], ['D10', '10']],
        value: '10',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }, {
        type: 'Dropdown',
        options: [['켜기', '1'], ['끄기', '0']],
        value: '1',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }, {
        type: 'Indicator',
        img: 'block_icon/hardware_icon.svg',
        size: 12
      }],
      events: {},
      def: {
        params: [null, null, null],
        type: 'easyrobot_cake_set_digital'
      },
      paramsKeyMap: {
        PORT: 0,
        OPERATOR: 1
      },
      "class": 'easyrobot_cake_d_out',
      isNotFor: ['easyrobot_cake'],
      func: function func(sprite, script) {
        var portNo = script.getNumberField('PORT', script);
        var mode = Entry.easyrobot_cake.portMode.SET_DIGITAL_OUT;
        var value = script.getNumberField('OPERATOR');
        if(portNo==10) value=!value;
        
        Entry.easyrobot_cake.transferModeValue(portNo, mode, value);
        return script.callReturn();
      },
      syntax: {
        js: [],
        py: ['easyrobot_cake.set_digital(%1, %2)']
      }
    },
    easyrobot_cake_set_dc_motor_direction: {
      color: EntryStatic.colorSet.block["default"].HARDWARE,
      outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
      skeleton: 'basic',
      statements: [],
      params: [{
        type: 'Dropdown',
        options: [
            ['M1', '4'], ['M2', '7'], ['M3', '12'], ['M4', '13'] ],         
        value: '4',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }, {
        type: 'Dropdown',
        options: [['정', '0'], ['역', '1']],
        value: '1',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }, {
        type: 'Indicator',
        img: 'block_icon/hardware_icon.svg',
        size: 12
      }],
      events: {},
      def: {
        params: [null, null, null],
        type: 'easyrobot_cake_set_dc_motor_direction'
      },
      paramsKeyMap: {
        PORT: 0,
        OPERATOR: 1
      },
      "class": 'easyrobot_cake_d_out',
      isNotFor: ['easyrobot_cake'],
      func: function func(sprite, script) {
        var portNo = script.getNumberField('PORT', script);
        var mode = Entry.easyrobot_cake.portMode.SET_DIGITAL_OUT;
        var value = script.getNumberField('OPERATOR');
        if(portNo==10) value=!value;
        
        Entry.easyrobot_cake.transferModeValue(portNo, mode, value);
        return script.callReturn();
      },
      syntax: {
        js: [],
        py: ['easyrobot_cake.set_digital(%1, %2)']
      }
    },
    
    easyrobot_cake_set_pwm: {
      color: EntryStatic.colorSet.block["default"].HARDWARE,
      outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
      skeleton: 'basic',
      statements: [],
      params: [{
        type: 'Dropdown',
        options: [
            ['pinBD', '10'],
            ['pinB4', '9'],
            ['pinC1', '3'], 
            ['pinC3', '11'], 
            ['pinC5', '5'], 
            ['pinC7', '6'] 
            ],
        //options: [['D5', '5'], ['D6', '6']],
        value: '10',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }, {
        type: 'Block',
        accept: 'string'
      }, {
        type: 'Indicator',
        img: 'block_icon/hardware_icon.svg',
        size: 12
      }],
      events: {},
      def: {
        params: [null, {
          type: 'number',
          //params: ['0~100']
          params: ['50']
        }, null],
        type: 'easyrobot_cake_set_pwm'
      },
      paramsKeyMap: {
        PORT: 0,
        VALUE: 1
      },
      "class": 'easyrobot_cake_d_out',
      isNotFor: ['easyrobot_cake'],
      func: function func(sprite, script) {
        var portNo = script.getNumberField('PORT', script);
        var mode = Entry.easyrobot_cake.portMode.SET_PWM;
        var value = script.getValue('VALUE');
        if(portNo==10) value=100-value;
        if (!Entry.Utils.isNumber(value)) {
          value = 0;
        }

        value = Math.max(value, 0);
        value = Math.min(value, 100);
        Entry.easyrobot_cake.transferModeValue(portNo, mode, value);
        return script.callReturn();
      },
      syntax: {
        js: [],
        py: ['easyrobot_cake.set_pwm(%1, %2)']
      }
    },
    
    easyrobot_cake_set_dc_motor_speed: {
      color: EntryStatic.colorSet.block["default"].HARDWARE,
      outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
      skeleton: 'basic',
      statements: [],
      params: [{
        type: 'Dropdown',
        options: [['M1', '5'],['M2', '6'],['M3', '3'],['M4', '11']],
        //options: [['D5', '5'], ['D6', '6']],
        value: '5',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }, {
        type: 'Block',
        accept: 'string'
      }, {
        type: 'Indicator',
        img: 'block_icon/hardware_icon.svg',
        size: 12
      }],
      events: {},
      def: {
        params: [null, {
          type: 'number',
          //params: ['0~100']
          params: ['50']
        }, null],
        type: 'easyrobot_cake_set_dc_motor_speed'
      },
      paramsKeyMap: {
        PORT: 0,
        VALUE: 1
      },
      "class": 'easyrobot_cake_d_out',
      isNotFor: ['easyrobot_cake'],
      func: function func(sprite, script) {
        var portNo = script.getNumberField('PORT', script);
        var mode = Entry.easyrobot_cake.portMode.SET_PWM;
        var value = script.getValue('VALUE');
        if(portNo==10) value=100-value;
        if (!Entry.Utils.isNumber(value)) {
          value = 0;
        }

        value = Math.max(value, 0);
        value = Math.min(value, 100);
        Entry.easyrobot_cake.transferModeValue(portNo, mode, value);
        return script.callReturn();
      },
      syntax: {
        js: [],
        py: ['easyrobot_cake.set_pwm(%1, %2)']
      }
    },
    
    easyrobot_cake_set_tone_time: {
      color: EntryStatic.colorSet.block["default"].HARDWARE,
      outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
      skeleton: 'basic',
      statements: [],
      params: [{
        type: 'Dropdown',
        options: [
            ['pinBD', '8'], 
            ['pinA1', '16'], 
            ['pinA2', '17'], 
            ['pinB1', '14'], 
            ['pinB2', '15'],
            ['pinB3', '2'], 
            ['pinB4', '9'],
            ['pinC1', '3'], 
            ['pinC2', '12'],
            ['pinC3', '11'], 
            ['pinC4', '13'],
            ['pinC5', '5'], 
            ['pinC6', '4'],
            ['pinC7', '6'], 
            ['pinC8', '7'],
            ['pinSD', '18'], 
            ['pinSC', '19']
            ],
        //options: [['D2', '2'], ['D4', '4'], ['D5', '5'], ['D6', '6'], ['D7', '7'], ['D10', '10']],
        value: '8',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }, {
        type: 'Dropdown',
        options: [['무음', '0'], ['도', '1'], ['도#(레♭)', '2'], ['레', '3'], ['레#(미♭)', '4'], ['미', '5'], ['파', '6'], ['파#(솔♭)', '7'], ['솔', '8'], ['솔#(라♭)', '9'], ['라', '10'], ['라#(시♭)', '11'], ['시', '12']],
        value: '1',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }, {
        type: 'Dropdown',
        options: [['1', '0'], ['2', '1'], ['3', '2'], ['4', '3'], ['5', '4'], ['6', '5']],
        value: '3',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }, {
        type: 'Block',
        accept: 'string'
      }, {
        type: 'Indicator',
        img: 'block_icon/hardware_icon.svg',
        size: 12
      }],
      events: {},
      def: {
        params: [null, null, null, {
          type: 'text',
          params: ['1']
        }, null],
        type: 'easyrobot_cake_set_tone_time'
      },
      paramsKeyMap: {
        PORT: 0,
        NOTE: 1,
        OCTAVE: 2,
        DURATION: 3
      },
      "class": 'easyrobot_cake_d_out',
      isNotFor: ['easyrobot_cake'],
      func: function func(sprite, script) {
        var portNo = script.getNumberField('PORT', script);
        var mode;

        if (!script.isStart) {
          var duration = script.getNumberValue('DURATION', script);

          if (duration < 0) {
            duration = 0;
          }

          duration = duration * 1000;
          var note = script.getNumberField('NOTE', script);
          var octave = script.getNumberField('OCTAVE', script);
          var value = octave << 4 | note - 1;
          script.isStart = true;
          script.timeFlag = 1;

          if (duration === 0 || note === 0) {
            mode = Entry.easyrobot_cake.portMode.SET_NO_TONE;
            Entry.easyrobot_cake.transferMode(portNo, mode);
          } else {
            mode = Entry.easyrobot_cake.portMode.SET_TONE;
            Entry.easyrobot_cake.transferModeValue(portNo, mode, value);
          }

          setTimeout(function () {
            script.timeFlag = 0;
          }, duration + 32);
          return script;
        } else if (script.timeFlag == 1) {
          return script;
        } else {
          mode = Entry.easyrobot_cake.portMode.SET_NO_TONE;
          Entry.easyrobot_cake.transferMode(portNo, mode);
          delete script.timeFlag;
          delete script.isStart;
          Entry.engine.isContinue = false;
          return script.callReturn();
        }
      },
      syntax: {
        js: [],
        py: [{
          syntax: 'easyrobot_cake.tone_time(%1, %2, %3, %4)',
          textParams: [{
            type: 'Block',
            accept: 'string'
          }, {
            type: 'Block',
            accept: 'string'
          }, {
            type: 'Block',
            accept: 'string'
          }, {
            type: 'Block',
            accept: 'string'
          }]
        }]
      }
    },
    easyrobot_cake_set_tone: {
      color: EntryStatic.colorSet.block["default"].HARDWARE,
      outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
      skeleton: 'basic',
      statements: [],
      params: [{
        type: 'Dropdown',
        options: [
            ['pinBD', '8'], 
            ['pinA1', '16'], 
            ['pinA2', '17'], 
            ['pinB1', '14'], 
            ['pinB2', '15'],
            ['pinB3', '2'], 
            ['pinB4', '9'],
            ['pinC1', '3'], 
            ['pinC2', '12'],
            ['pinC3', '11'], 
            ['pinC4', '13'],
            ['pinC5', '5'], 
            ['pinC6', '4'],
            ['pinC7', '6'], 
            ['pinC8', '7'],
            ['pinSD', '18'], 
            ['pinSC', '19']
            ],
            //options: [['D2', '2'], ['D4', '4'], ['D5', '5'], ['D6', '6'], ['D7', '7'], ['D10', '10']],
        value: '8',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }, {
        type: 'Dropdown',
        options: [['무음', '0'], ['도', '1'], ['도#(레♭)', '2'], ['레', '3'], ['레#(미♭)', '4'], ['미', '5'], ['파', '6'], ['파#(솔♭)', '7'], ['솔', '8'], ['솔#(라♭)', '9'], ['라', '10'], ['라#(시♭)', '11'], ['시', '12']],
        value: '1',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }, {
        type: 'Dropdown',
        options: [['1', '0'], ['2', '1'], ['3', '2'], ['4', '3'], ['5', '4'], ['6', '5']],
        value: '3',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }, {
        type: 'Indicator',
        img: 'block_icon/hardware_icon.svg',
        size: 12
      }],
      events: {},
      def: {
        params: [null, null, null, null],
        type: 'easyrobot_cake_set_tone'
      },
      paramsKeyMap: {
        PORT: 0,
        NOTE: 1,
        OCTAVE: 2
      },
      "class": 'easyrobot_cake_d_out',
      isNotFor: ['easyrobot_cake'],
      func: function func(sprite, script) {
        var portNo = script.getNumberField('PORT', script);
        var note = script.getNumberField('NOTE', script);
        var octave = script.getNumberField('OCTAVE', script);
        var mode;
        var value = octave << 4 | note - 1;

        if (note === 0) {
          mode = Entry.easyrobot_cake.portMode.SET_NO_TONE;
          Entry.easyrobot_cake.transferMode(portNo, mode);
        } else {
          mode = Entry.easyrobot_cake.portMode.SET_TONE;
          Entry.easyrobot_cake.transferModeValue(portNo, mode, value);
        }

        return script.callReturn();
      },
      syntax: {
        js: [],
        py: [{
          syntax: 'easyrobot_cake.tone(%1, %2, %3)',
          textParams: [{
            type: 'Block',
            accept: 'string'
          }, {
            type: 'Block',
            accept: 'string'
          }, {
            type: 'Block',
            accept: 'string'
          }]
        }]
      }
    },
    easyrobot_cake_set_dc_motor: {
      color: EntryStatic.colorSet.block["default"].HARDWARE,
      outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
      skeleton: 'basic',
      statements: [],
      params: [{
        type: 'Dropdown',
        options: [['MA', '5'], ['MB', '6']],
        value: '5',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }, {
        type: 'Block',
        accept: 'string'
      }, {
        type: 'Indicator',
        img: 'block_icon/hardware_icon.svg',
        size: 12
      }],
      events: {},
      def: {
        params: [null, {
          type: 'number',
          params: ['-100 ~ 100 사이값']
        }, null],
        type: 'easyrobot_cake_set_dc_motor'
      },
      paramsKeyMap: {
        PORT: 0,
        SPEED: 1
      },
      "class": 'set_motor',
      isNotFor: ['easyrobot_cake'],
      func: function func(sprite, script) {
        var portNo = script.getField('PORT', script);
        var value = script.getValue('SPEED');

        if (!Entry.Utils.isNumber(value)) {
          value = 0;
        }

        value = Math.round(value);
        value = value + 100;
        value = Math.max(value, 0);
        value = Math.min(value, 200);
        Entry.easyrobot_cake.transferValue(portNo, value);
        return script.callReturn();
      }
    },
    easyrobot_cake_get_dc_motor_current: {
      color: EntryStatic.colorSet.block["default"].HARDWARE,
      outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
      fontColor: '#fff',
      skeleton: 'basic_string_field',
      statements: [],
      params: [{
        type: 'Dropdown',
        options: [['MA', '14'], ['MB', '15']],
        value: '14',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }],
      events: {},
      def: {
        params: [null],
        type: 'easyrobot_cake_get_dc_motor_current'
      },
      paramsKeyMap: {
        PORT: 0
      },
      "class": 'easyrobot_cakeGet',
      isNotFor: ['easyrobot_cake'],
      func: function func(sprite, script) {
        var portNo = script.getNumberField('PORT', script);
        var mode = Entry.easyrobot_cake.portMode.SET_MOTOR_CURRENT;
        Entry.easyrobot_cake.transferMode(portNo, mode);

        if (Entry.hw.portData[portNo] !== undefined) {
          return Entry.hw.portData[portNo];
        } else {
          return 0;
        }
      },
      syntax: {
        js: [],
        py: ['easyrobot_cake.get_dc_motor_current(%1)']
      }
    },
    easyrobot_cake_set_servo_position: {
      color: EntryStatic.colorSet.block["default"].HARDWARE,
      outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
      skeleton: 'basic',
      statements: [],
      params: [{
        type: 'Dropdown',
        options: [
            ['pinA1', '16'], 
            ['pinA2', '17'], 
            ['pinB1', '14'], 
            ['pinB2', '15'],
            ['pinB3', '2'], 
            ['pinB4', '9'],
            ['pinC1', '3'], 
            ['pinC2', '12'],
            ['pinC3', '11'], 
            ['pinC4', '13'],
            ['pinC5', '5'], 
            ['pinC6', '4'],
            ['pinC7', '6'], 
            ['pinC8', '7'],
            ['pinSD', '18'], 
            ['pinSC', '19']
            ],
        //options: [['D2', '2'], ['D5', '5'], ['D6', '6'], ['D10', '10']],
        value: '2',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }, {
        type: 'Block',
        accept: 'string'
      }, {
        type: 'Indicator',
        img: 'block_icon/hardware_icon.svg',
        size: 12
      }],
      events: {},
      def: {
        params: [null, {
          type: 'number',
          //params: ['0~180']
          params: ['90']
        }, null],
        type: 'easyrobot_cake_set_servo_position'
      },
      paramsKeyMap: {
        PORT: 0,
        DEGREE: 1
      },
      "class": 'set_motor',
      isNotFor: ['easyrobot_cake'],
      func: function func(sprite, script) {
        var portNo = script.getNumberField('PORT', script);
        var mode = Entry.easyrobot_cake.portMode.SET_SERVO_POSITION;
        var value = script.getValue('DEGREE');

        if (!Entry.Utils.isNumber(value)) {
          value = 90;
        }

        value = Math.max(value, 0);
        value = Math.min(value, 180);
        Entry.easyrobot_cake.transferModeValue(portNo, mode, value);
        return script.callReturn();
      },
      syntax: {
        js: [],
        py: ['easyrobot_cake.set_servo_position(%1, %2)']
      }
    },
    easyrobot_cake_set_servo_speed: {
      color: EntryStatic.colorSet.block["default"].HARDWARE,
      outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
      skeleton: 'basic',
      statements: [],
      params: [{
        type: 'Dropdown',
        options: [
            ['pinA1', '16'], 
            ['pinA2', '17'], 
            ['pinB1', '14'], 
            ['pinB2', '15'],
            ['pinB3', '2'], 
            ['pinB4', '9'],
            ['pinC1', '3'], 
            ['pinC2', '12'],
            ['pinC3', '11'], 
            ['pinC4', '13'],
            ['pinC5', '5'], 
            ['pinC6', '4'],
            ['pinC7', '6'], 
            ['pinC8', '7'],
            ['pinSD', '18'], 
            ['pinSC', '19']
            ],//options: [['D2', '22'], ['D5', '23'], ['D6', '24'], ['D10', '25']],
        value: '2',
        fontSize: 11,
        bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
        arrowColor: EntryStatic.colorSet.arrow["default"].HARDWARE
      }, {
        type: 'Block',
        accept: 'string'
      }, {
        type: 'Indicator',
        img: 'block_icon/hardware_icon.svg',
        size: 12
      }],
      events: {},
      def: {
        params: [null, {
          type: 'number',
          params: ['1~255']
        }, null],
        type: 'easyrobot_cake_set_servo_speed'
      },
      paramsKeyMap: {
        PORT: 0,
        SPEED: 1
      },
      "class": 'set_motor',
      isNotFor: ['easyrobot_cake'],
      func: function func(sprite, script) {
        var portNo = script.getNumberField('PORT', script);
        var mode = Entry.easyrobot_cake.portMode.SET_SERVO_SPEED;
        var value = script.getValue('SPEED');

        if (!Entry.Utils.isNumber(value)) {
          value = 255;
        }

        value = Math.max(value, 0);
        value = Math.min(value, 255);
        Entry.easyrobot_cake.transferModeValue(portNo, mode, value);
        return script.callReturn();
      },
      syntax: {
        js: [],
        py: ['easyrobot_cake.set_servo_speed(%1, %2)']
      }
    },
    easyrobot_cake_set_blue_pw: {
      color: EntryStatic.colorSet.block["default"].HARDWARE,
      outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
      skeleton: 'basic',
      statements: [],
      params: [{
        type: 'Block',
        accept: 'string'
      }, {
        type: 'Block',
        accept: 'string'
      }, {
        type: 'Block',
        accept: 'string'
      }, {
        type: 'Block',
        accept: 'string'
      }, {
        type: 'Indicator',
        img: 'block_icon/hardware_icon.svg',
        size: 12
      }],
      events: {},
      def: {
        params: [{
          type: 'number',
          params: ['1']
        }, {
          type: 'number',
          params: ['2']
        }, {
          type: 'number',
          params: ['3']
        }, {
          type: 'number',
          params: ['4']
        }, {
          type: 'Indicator',
          img: 'block_icon/hardware_icon.svg',
          size: 12
        }],
        type: 'easyrobot_cake_set_blue_pw'
      },
      paramsKeyMap: {
        PW1: 0,
        PW2: 1,
        PW3: 2,
        PW4: 3
      },
      "class": 'easyrobot_cake_blue',
      isNotFor: ['easyrobot_cake'],
      func: function func(sprite, script) {
        var mode = Entry.easyrobot_cake.portMode.SET_BLUE_PW;
        var value = script.getNumberValue('PW1') * 1000 + script.getNumberValue('PW2') * 100 + script.getNumberValue('PW3') * 10 + script.getNumberValue('PW4');
        Entry.easyrobot_cake.transferModeValue(2, mode, value);
        return script.callReturn();
      },
      syntax: {
        js: [],
        py: ['easyrobot_cake.set_pwm(%1, %2)']
      }
    } //endregion easyrobot_cake

  };
};