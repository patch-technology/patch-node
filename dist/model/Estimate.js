"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Order = _interopRequireDefault(require("./Order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Estimate = /*#__PURE__*/function () {
  function Estimate() {
    _classCallCheck(this, Estimate);

    Estimate.initialize(this);
  }

  _createClass(Estimate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Estimate();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('production')) {
          obj['production'] = _ApiClient["default"].convertToType(data['production'], 'Boolean');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('order')) {
          obj['order'] = _Order["default"].constructFromObject(data['order']);
        }
      }

      return obj;
    }
  }]);

  return Estimate;
}();

Estimate.prototype['id'] = undefined;
Estimate.prototype['production'] = undefined;
Estimate.prototype['type'] = undefined;
Estimate.prototype['order'] = undefined;
var _default = Estimate;
exports["default"] = _default;