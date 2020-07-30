"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */
class Allocation {
  constructor() {
    Allocation.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Allocation();

      if (data.hasOwnProperty('id')) {
        obj['id'] = _ApiClient.default.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('production')) {
        obj['production'] = _ApiClient.default.convertToType(data['production'], 'Boolean');
      }

      if (data.hasOwnProperty('mass_g')) {
        obj['mass_g'] = _ApiClient.default.convertToType(data['mass_g'], 'Number');
      }
    }

    return obj;
  }

}

Allocation.prototype['id'] = undefined;
Allocation.prototype['production'] = undefined;
Allocation.prototype['mass_g'] = undefined;
var _default = Allocation;
exports.default = _default;