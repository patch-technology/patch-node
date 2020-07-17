"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Allocation = _interopRequireDefault(require("./Allocation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Order = /*#__PURE__*/function () {
  function Order() {
    _classCallCheck(this, Order);

    Order.initialize(this);
  }

  _createClass(Order, null, [{
    key: "initialize",
    value: function initialize(obj) {}
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Order();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('mass_g')) {
          obj['mass_g'] = _ApiClient["default"].convertToType(data['mass_g'], 'Number');
        }

        if (data.hasOwnProperty('production')) {
          obj['production'] = _ApiClient["default"].convertToType(data['production'], 'Boolean');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('allocation_state')) {
          obj['allocation_state'] = _ApiClient["default"].convertToType(data['allocation_state'], 'String');
        }

        if (data.hasOwnProperty('price_cents_usd')) {
          obj['price_cents_usd'] = _ApiClient["default"].convertToType(data['price_cents_usd'], 'String');
        }

        if (data.hasOwnProperty('allocations')) {
          obj['allocations'] = _ApiClient["default"].convertToType(data['allocations'], [_Allocation["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Order;
}();

Order.prototype['id'] = undefined;
Order.prototype['mass_g'] = undefined;
Order.prototype['production'] = undefined;
Order.prototype['state'] = undefined;
Order.prototype['allocation_state'] = undefined;
Order.prototype['price_cents_usd'] = undefined;
Order.prototype['allocations'] = undefined;
var _default = Order;
exports["default"] = _default;