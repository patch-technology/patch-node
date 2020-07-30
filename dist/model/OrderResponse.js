"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Order = _interopRequireDefault(require("./Order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */
class OrderResponse {
  constructor(success, error, data) {
    OrderResponse.initialize(this, success, error, data);
  }

  static initialize(obj, success, error, data) {
    obj['success'] = success;
    obj['error'] = error;
    obj['data'] = data;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrderResponse();

      if (data.hasOwnProperty('success')) {
        obj['success'] = _ApiClient.default.convertToType(data['success'], 'Boolean');
      }

      if (data.hasOwnProperty('error')) {
        obj['error'] = _ApiClient.default.convertToType(data['error'], Object);
      }

      if (data.hasOwnProperty('data')) {
        obj['data'] = _Order.default.constructFromObject(data['data']);
      }
    }

    return obj;
  }

}

OrderResponse.prototype['success'] = undefined;
OrderResponse.prototype['error'] = undefined;
OrderResponse.prototype['data'] = undefined;
var _default = OrderResponse;
exports.default = _default;