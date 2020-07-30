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
class CreateMassEstimateRequest {
  constructor(massG) {
    CreateMassEstimateRequest.initialize(this, massG);
  }

  static initialize(obj, massG) {
    obj['mass_g'] = massG;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateMassEstimateRequest();

      if (data.hasOwnProperty('mass_g')) {
        obj['mass_g'] = _ApiClient.default.convertToType(data['mass_g'], 'Number');
      }
    }

    return obj;
  }

}

CreateMassEstimateRequest.prototype['mass_g'] = undefined;
var _default = CreateMassEstimateRequest;
exports.default = _default;