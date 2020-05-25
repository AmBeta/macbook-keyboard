
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.MacbookKeyboard = factory());
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var DEFAULT_OPTIONS = {
    theme: 'dark',
    // 'dark' / 'light'
    showLabel: true,
    keyMappings: {}
  };
  var KEY_LIST = [{
    key: 'Escape',
    label: ['esc']
  }, {
    key: 'F1',
    label: ['F1']
  }, {
    key: 'F2',
    label: ['F2']
  }, {
    key: 'F3',
    label: ['F3']
  }, {
    key: 'F4',
    label: ['F4']
  }, {
    key: 'F5',
    label: ['F5']
  }, {
    key: 'F6',
    label: ['F6']
  }, {
    key: 'F7',
    label: ['F7']
  }, {
    key: 'F8',
    label: ['F8']
  }, {
    key: 'F9',
    label: ['F9']
  }, {
    key: 'F10',
    label: ['F10']
  }, {
    key: 'F11',
    label: ['F11']
  }, {
    key: 'F12',
    label: ['F12']
  }, {
    key: 'Shutdown',
    label: ['〇']
  }, {
    key: '`',
    label: ['~', '`']
  }, {
    key: '1',
    label: ['!', '1']
  }, {
    key: '2',
    label: ['@', '2']
  }, {
    key: '3',
    label: ['#', '3']
  }, {
    key: '4',
    label: ['$', '4']
  }, {
    key: '5',
    label: ['%', '5']
  }, {
    key: '6',
    label: ['^', '6']
  }, {
    key: '7',
    label: ['&', '7']
  }, {
    key: '8',
    label: ['*', '8']
  }, {
    key: '9',
    label: ['(', '9']
  }, {
    key: '0',
    label: [')', '0']
  }, {
    key: '-',
    label: ['＿', '-']
  }, {
    key: '=',
    label: ['＋', '=']
  }, {
    key: 'Backspace',
    label: ['delete']
  }, {
    key: 'Tab',
    label: ['tab']
  }, {
    key: 'q',
    label: ['Q']
  }, {
    key: 'w',
    label: ['W']
  }, {
    key: 'e',
    label: ['E']
  }, {
    key: 'r',
    label: ['R']
  }, {
    key: 't',
    label: ['T']
  }, {
    key: 'y',
    label: ['Y']
  }, {
    key: 'u',
    label: ['U']
  }, {
    key: 'i',
    label: ['I']
  }, {
    key: 'o',
    label: ['O']
  }, {
    key: 'p',
    label: ['P']
  }, {
    key: '[',
    label: ['{', '[']
  }, {
    key: ']',
    label: ['}', ']']
  }, {
    key: '\\',
    label: ['|', '\\']
  }, {
    key: 'CapsLock',
    label: ['', 'CapsLock']
  }, {
    key: 'a',
    label: ['A']
  }, {
    key: 's',
    label: ['S']
  }, {
    key: 'd',
    label: ['D']
  }, {
    key: 'f',
    label: ['F']
  }, {
    key: 'g',
    label: ['G']
  }, {
    key: 'h',
    label: ['H']
  }, {
    key: 'j',
    label: ['J']
  }, {
    key: 'k',
    label: ['K']
  }, {
    key: 'l',
    label: ['L']
  }, {
    key: ';',
    label: [':', ';']
  }, {
    key: '\'',
    label: ['"', '\'']
  }, {
    key: 'Enter',
    label: ['enter', 'return']
  }, {
    key: 'Shift',
    label: ['⇧']
  }, {
    key: 'z',
    label: ['Z']
  }, {
    key: 'x',
    label: ['X']
  }, {
    key: 'c',
    label: ['C']
  }, {
    key: 'v',
    label: ['V']
  }, {
    key: 'b',
    label: ['B']
  }, {
    key: 'n',
    label: ['N']
  }, {
    key: 'm',
    label: ['M']
  }, {
    key: ',',
    label: ['<', ',']
  }, {
    key: '.',
    label: ['>', '.']
  }, {
    key: '/',
    label: ['?', '/']
  }, {
    key: 'Shift',
    label: ['⇧']
  }, {
    key: 'Fn',
    label: ['fn']
  }, {
    key: 'Control',
    label: ['control']
  }, {
    key: 'Alt',
    label: ['alt', 'option']
  }, {
    key: 'Meta',
    label: ['command']
  }, {
    key: ' ',
    label: ['']
  }, {
    key: 'Meta',
    label: ['command']
  }, {
    key: 'Alt',
    label: ['alt', 'option']
  }, {
    key: 'ArrowLeft',
    label: ['◀']
  }, {
    key: 'ArrowUp',
    label: ['▲']
  }, {
    key: 'ArrowRight',
    label: ['▶']
  }, {
    key: 'ArrowDown',
    label: ['▼']
  }];

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".macbook-keyboard {\n  height: 394px;\n  border-radius: 10px;\n  border: 1px solid #C9C9C9;\n  background: #F2F2F2;\n  box-shadow: 2px 0px 2px #E2E2E2 inset,-2px 2px 3px #E2E2E2 inset,1px -0px 0px #C1C1C1 inset,0px -2px 3px #C1C1C1 inset;\n  user-select: none;\n  position: relative;\n  width: 995px;\n  margin: 0 auto; }\n  .macbook-keyboard ul {\n    box-sizing: content-box;\n    width: 992px;\n    margin-top: 9px;\n    padding-left: 11px;\n    position: relative;\n    float: left; }\n  .macbook-keyboard li {\n    box-sizing: content-box;\n    width: 62px;\n    height: 62px;\n    float: left;\n    list-style: none;\n    margin-right: 5px;\n    margin-bottom: 5px;\n    background: #151515;\n    color: #c8c8c8;\n    text-align: center;\n    line-height: 62px;\n    font-size: 12px;\n    border-radius: 8px;\n    border: 1px solid #3A3A3A;\n    box-shadow: 1px 0px 0px black, 0px 1px 0px black, -1px 0px 0px black, 0px -1px 0px black;\n    transition: all .4s ease-in;\n    user-select: none;\n    cursor: pointer;\n    position: relative; }\n    .macbook-keyboard li:active, .macbook-keyboard li.pressed {\n      color: #fff;\n      background-color: #0A84FF;\n      border: 1px solid #0A84FF;\n      box-shadow: 1px 0px 0px #0A84FF, 0px 1px 0px #0A84FF, -1px 0px 0px #0A84FF, 0px -1px 0px #0A84FF;\n      transition: 1ms linear; }\n    .macbook-keyboard li:nth-child(1) {\n      width: 99px;\n      height: 28px;\n      line-height: 28px;\n      text-indent: 1em;\n      text-align: left; }\n    .macbook-keyboard li:nth-child(2), .macbook-keyboard li:nth-child(3), .macbook-keyboard li:nth-child(4), .macbook-keyboard li:nth-child(5), .macbook-keyboard li:nth-child(6), .macbook-keyboard li:nth-child(7), .macbook-keyboard li:nth-child(8), .macbook-keyboard li:nth-child(9), .macbook-keyboard li:nth-child(10), .macbook-keyboard li:nth-child(11), .macbook-keyboard li:nth-child(12), .macbook-keyboard li:nth-child(13), .macbook-keyboard li:nth-child(14) {\n      width: 60px;\n      height: 28px;\n      line-height: 28px; }\n    .macbook-keyboard li:nth-child(15), .macbook-keyboard li:nth-child(16), .macbook-keyboard li:nth-child(17), .macbook-keyboard li:nth-child(18), .macbook-keyboard li:nth-child(19), .macbook-keyboard li:nth-child(20), .macbook-keyboard li:nth-child(21), .macbook-keyboard li:nth-child(22), .macbook-keyboard li:nth-child(23), .macbook-keyboard li:nth-child(24), .macbook-keyboard li:nth-child(25), .macbook-keyboard li:nth-child(26), .macbook-keyboard li:nth-child(27), .macbook-keyboard li:nth-child(40), .macbook-keyboard li:nth-child(41), .macbook-keyboard li:nth-child(42), .macbook-keyboard li:nth-child(53), .macbook-keyboard li:nth-child(54), .macbook-keyboard li:nth-child(64), .macbook-keyboard li:nth-child(65), .macbook-keyboard li:nth-child(66) {\n      padding: 7px 0;\n      height: 48px; }\n\n.macbook-keyboard li:nth-child(15) span,\n.macbook-keyboard li:nth-child(16) span,\n.macbook-keyboard li:nth-child(17) span,\n.macbook-keyboard li:nth-child(18) span,\n.macbook-keyboard li:nth-child(19) span,\n.macbook-keyboard li:nth-child(20) span,\n.macbook-keyboard li:nth-child(21) span,\n.macbook-keyboard li:nth-child(22) span,\n.macbook-keyboard li:nth-child(23) span,\n.macbook-keyboard li:nth-child(24) span,\n.macbook-keyboard li:nth-child(25) span,\n.macbook-keyboard li:nth-child(26) span,\n.macbook-keyboard li:nth-child(27) span,\n.macbook-keyboard li:nth-child(40) span,\n.macbook-keyboard li:nth-child(41) span,\n.macbook-keyboard li:nth-child(42) span,\n.macbook-keyboard li:nth-child(53) span,\n.macbook-keyboard li:nth-child(54) span,\n.macbook-keyboard li:nth-child(64) span,\n.macbook-keyboard li:nth-child(65) span,\n.macbook-keyboard li:nth-child(66) span {\n  line-height: 23px;\n  height: 23px;\n  width: 100%;\n  float: left;\n  font-size: 14px; }\n\n.macbook-keyboard li:nth-child(28) span, .macbook-keyboard li:nth-child(55) span, .macbook-keyboard li:nth-child(67) span {\n  line-height: 14px;\n  margin-top: 43px;\n  float: right;\n  margin-right: 8px; }\n\n.macbook-keyboard li:nth-child(30),\n.macbook-keyboard li:nth-child(31),\n.macbook-keyboard li:nth-child(32),\n.macbook-keyboard li:nth-child(33),\n.macbook-keyboard li:nth-child(34),\n.macbook-keyboard li:nth-child(35),\n.macbook-keyboard li:nth-child(36),\n.macbook-keyboard li:nth-child(37),\n.macbook-keyboard li:nth-child(38),\n.macbook-keyboard li:nth-child(39),\n.macbook-keyboard li:nth-child(44),\n.macbook-keyboard li:nth-child(45),\n.macbook-keyboard li:nth-child(46),\n.macbook-keyboard li:nth-child(47),\n.macbook-keyboard li:nth-child(48),\n.macbook-keyboard li:nth-child(49),\n.macbook-keyboard li:nth-child(50),\n.macbook-keyboard li:nth-child(51),\n.macbook-keyboard li:nth-child(52),\n.macbook-keyboard li:nth-child(57),\n.macbook-keyboard li:nth-child(58),\n.macbook-keyboard li:nth-child(59),\n.macbook-keyboard li:nth-child(60),\n.macbook-keyboard li:nth-child(61),\n.macbook-keyboard li:nth-child(62),\n.macbook-keyboard li:nth-child(63) {\n  font-size: 18px;\n  line-height: 64px; }\n\n.macbook-keyboard li:nth-child(29) span,\n.macbook-keyboard li:nth-child(43) span,\n.macbook-keyboard li:nth-child(56) span,\n.macbook-keyboard li:nth-child(68) span,\n.macbook-keyboard li:nth-child(69) span,\n.macbook-keyboard li:nth-child(70) span,\n.macbook-keyboard li:nth-child(71) span,\n.macbook-keyboard li:nth-child(73) span,\n.macbook-keyboard li:nth-child(74) span {\n  line-height: 14px;\n  margin-top: 43px;\n  text-indent: 5px;\n  float: left; }\n\n.macbook-keyboard li:nth-child(28),\n.macbook-keyboard li:nth-child(29) {\n  width: 73px; }\n\n.macbook-keyboard li:nth-child(43),\n.macbook-keyboard li:nth-child(55) {\n  width: 102px; }\n\n.macbook-keyboard li:nth-child(43):active span:first-child {\n  background: #fff; }\n\n.macbook-keyboard li:nth-child(43) span:first-child {\n  position: absolute;\n  top: -36px;\n  left: 5px;\n  width: 6px;\n  height: 6px;\n  background: #fff;\n  border-radius: 3px; }\n\n.macbook-keyboard li:nth-child(55) span:first-child,\n.macbook-keyboard li:nth-child(70) span:first-child {\n  position: absolute;\n  right: 0px;\n  top: -37px;\n  font-size: 12px;\n  line-height: 12px; }\n\n.macbook-keyboard li:nth-child(70) span:first-child {\n  left: 0px;\n  text-align: left; }\n\n.macbook-keyboard li:nth-child(74) span:first-child {\n  position: absolute;\n  left: 0;\n  top: -37px;\n  font-size: 12px;\n  line-height: 12px; }\n\n.macbook-keyboard li:nth-child(56) {\n  width: 136px; }\n\n.macbook-keyboard li:nth-child(67) {\n  width: 137px; }\n\n.macbook-keyboard li:nth-child(71),\n.macbook-keyboard li:nth-child(73) {\n  width: 70px; }\n\n.macbook-keyboard li:nth-child(72) {\n  width: 333px; }\n\n.macbook-keyboard li:nth-child(76),\n.macbook-keyboard li:nth-child(78) {\n  height: 29px;\n  line-height: 29px; }\n\n.macbook-keyboard li:nth-child(76) {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.macbook-keyboard li:nth-child(78) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  position: absolute;\n  bottom: 0;\n  right: 84px; }\n\n.macbook-keyboard.theme-light {\n  background: #d2d2d2; }\n  .macbook-keyboard.theme-light li {\n    color: #878787;\n    background: #fff;\n    border-color: #fff;\n    box-shadow: 1px 0px 0px #fff, 0px 1px 0px #fff, -1px 0px 0px #fff, 0px -1px 0px #fff; }\n    .macbook-keyboard.theme-light li:active, .macbook-keyboard.theme-light li.pressed {\n      color: #967343;\n      background: #ffe057;\n      border: 1px solid #ffe057;\n      box-shadow: 1px 0px 0px #ffe057, 0px 1px 0px #ffe057, -1px 0px 0px #ffe057, 0px -1px 0px #ffe057;\n      transition: 1ms linear; }\n";
  styleInject(css_248z);

  function _templateObject2() {
    var data = _taggedTemplateLiteral([" <li data-key=\"", "\"> ", " </li> "]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = _taggedTemplateLiteral([" <ul> ", " </ul> "]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  var html = function html(strings) {
    for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }

    return strings.reduce(function (ret, str, idx) {
      var value = values[idx];
      ret.push(str, Array.isArray(value) ? value.join('') : value);
      return ret;
    }, []).join('');
  };
  /**
   * Get the actual container element.
   * @param {HTMLElement | string} container A container to render the keyboard to.
   */


  var getContainer = function getContainer(container) {
    if (container instanceof HTMLElement) {
      return container;
    }

    if (typeof container === 'string') {
      return document.querySelector(container);
    }

    return document.body;
  };
  /**
   * Get the parsed key list.
   * @param {any} mappings An object to map key to custom key config.
   */


  var getKeyList = function getKeyList(mappings) {
    return KEY_LIST.map(function (keyConfig) {
      return _objectSpread2(_objectSpread2({}, keyConfig), mappings[keyConfig.key]);
    });
  };

  function createKeyboard() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var settings = _objectSpread2(_objectSpread2({}, DEFAULT_OPTIONS), options);

    var container = getContainer(settings.container);
    var keyList = getKeyList(settings.keyMappings);
    var pressed = [];
    /**
     * Set key pressed status.
     * @param {string} key
     * @param {boolean} force
     */

    var setPressed = function setPressed(key) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var $keys = container.querySelectorAll("[data-key=\"".concat(key, "\"]"));
      if ($keys.length === 0) return; // update ui

      $keys.forEach(function ($key) {
        return $key.classList.toggle('pressed', force);
      }); // update pressed key list

      var index = pressed.indexOf(key);

      if (force && index < 0) {
        pressed.push(key);
      } else if (!force && index > -1) {
        pressed.splice(index, 1);
      }
    };
    /**
     * Check if a key is pressed.
     * @param {string} key
     */


    var isPressed = function isPressed(key) {
      return pressed.includes(key);
    };
    /**
     * Clear all pressed key.
     */


    var clearPressed = function clearPressed() {
      [].concat(pressed).forEach(function (key) {
        setPressed(key, false);
      });
    };
    /**
     * Toggle pressed status of a key.
     * @param {string} key
     * @param {boolean} force
     */


    var togglePressed = function togglePressed(key) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !isPressed(key);
      setPressed(key, force);
      return force;
    };

    var render = function render() {
      var markup = html(_templateObject(), keyList.map(function (_ref) {
        var key = _ref.key,
            label = _ref.label;
        return html(_templateObject2(), key, settings.showLabel ? label.map(function (n) {
          return "<span>".concat(n, "</span>");
        }) : '');
      }));
      container.innerHTML = markup;
      container.classList.add('macbook-keyboard', "theme-".concat(settings.theme));
    };

    render();
    return {
      check: isPressed,
      clear: clearPressed,
      toggle: togglePressed
    };
  }

  return createKeyboard;

})));
