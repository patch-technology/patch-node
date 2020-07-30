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
class Estimate {
  constructor() {
    Estimate.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Estimate();

      if (data.hasOwnProperty('id')) {
        obj['id'] = _ApiClient.default.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('production')) {
        obj['production'] = _ApiClient.default.convertToType(data['production'], 'Boolean');
      }

      if (data.hasOwnProperty('type')) {
        obj['type'] = _ApiClient.default.convertToType(data['type'], 'String');
      }

      if (data.hasOwnProperty('order')) {
        obj['order'] = _Order.default.constructFromObject(data['order']);
      }
    }

    return obj;
  }

}

Estimate.prototype['id'] = undefined;
Estimate.prototype['production'] = undefined;
Estimate.prototype['type'] = undefined;
Estimate.prototype['order'] = undefined;
var _default = Estimate;
exports.default = _default;