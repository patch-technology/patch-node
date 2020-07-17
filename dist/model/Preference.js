"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Project = _interopRequireDefault(require("./Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Preference = /*#__PURE__*/function () {
  function Preference() {
    _classCallCheck(this, Preference);

    Preference.initialize(this);
  }

  _createClass(Preference, null, [{
    key: "initialize",
    value: function initialize(obj) {}
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Preference();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('allocation_percentage')) {
          obj['allocation_percentage'] = _ApiClient["default"].convertToType(data['allocation_percentage'], 'Number');
        }

        if (data.hasOwnProperty('project')) {
          obj['project'] = _Project["default"].constructFromObject(data['project']);
        }
      }

      return obj;
    }
  }]);

  return Preference;
}();

Preference.prototype['id'] = undefined;
Preference.prototype['allocation_percentage'] = undefined;
Preference.prototype['project'] = undefined;
var _default = Preference;
exports["default"] = _default;