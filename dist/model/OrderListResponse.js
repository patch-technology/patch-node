"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MetaIndexObject = _interopRequireDefault(require("./MetaIndexObject"));

var _Order = _interopRequireDefault(require("./Order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */
class OrderListResponse {
  constructor(success, error, data, meta) {
    OrderListResponse.initialize(this, success, error, data, meta);
  }

  static initialize(obj, success, error, data, meta) {
    obj['success'] = success;
    obj['error'] = error;
    obj['data'] = data;
    obj['meta'] = meta;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrderListResponse();

      if (data.hasOwnProperty('success')) {
        obj['success'] = _ApiClient.default.convertToType(data['success'], 'Boolean');
      }

      if (data.hasOwnProperty('error')) {
        obj['error'] = _ApiClient.default.convertToType(data['error'], Object);
      }

      if (data.hasOwnProperty('data')) {
        obj['data'] = _ApiClient.default.convertToType(data['data'], [_Order.default]);
      }

      if (data.hasOwnProperty('meta')) {
        obj['meta'] = _MetaIndexObject.default.constructFromObject(data['meta']);
      }
    }

    return obj;
  }

}

OrderListResponse.prototype['success'] = undefined;
OrderListResponse.prototype['error'] = undefined;
OrderListResponse.prototype['data'] = undefined;
OrderListResponse.prototype['meta'] = undefined;
var _default = OrderListResponse;
exports.default = _default;