"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Allocation = /*#__PURE__*/function () {
  function Allocation() {
    _classCallCheck(this, Allocation);

    Allocation.initialize(this);
  }

  _createClass(Allocation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Allocation();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('production')) {
          obj['production'] = _ApiClient["default"].convertToType(data['production'], 'Boolean');
        }

        if (data.hasOwnProperty('mass_g')) {
          obj['mass_g'] = _ApiClient["default"].convertToType(data['mass_g'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Allocation;
}();

Allocation.prototype['id'] = undefined;
Allocation.prototype['production'] = undefined;
Allocation.prototype['mass_g'] = undefined;
var _default = Allocation;
exports["default"] = _default;