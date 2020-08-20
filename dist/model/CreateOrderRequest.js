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
class CreateOrderRequest {
  constructor(massG) {
    CreateOrderRequest.initialize(this, massG);
  }

  static initialize(obj, massG) {
    obj['mass_g'] = massG;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateOrderRequest();

      if (data.hasOwnProperty('mass_g')) {
        obj['mass_g'] = _ApiClient.default.convertToType(data['mass_g'], 'Number');
      }

      if (data.hasOwnProperty('project_id')) {
        obj['project_id'] = _ApiClient.default.convertToType(data['project_id'], 'String');
      }

      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = _ApiClient.default.convertToType(data['metadata'], Object);
      }
    }

    return obj;
  }

}

CreateOrderRequest.prototype['mass_g'] = undefined;
CreateOrderRequest.prototype['project_id'] = undefined;
CreateOrderRequest.prototype['metadata'] = undefined;
var _default = CreateOrderRequest;
exports.default = _default;