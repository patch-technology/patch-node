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
class CreatePreferenceRequest {
  constructor(projectId) {
    CreatePreferenceRequest.initialize(this, projectId);
  }

  static initialize(obj, projectId) {
    obj['project_id'] = projectId;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreatePreferenceRequest();

      if (data.hasOwnProperty('project_id')) {
        obj['project_id'] = _ApiClient.default.convertToType(data['project_id'], 'String');
      }
    }

    return obj;
  }

}

CreatePreferenceRequest.prototype['project_id'] = undefined;
var _default = CreatePreferenceRequest;
exports.default = _default;