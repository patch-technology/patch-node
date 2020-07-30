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
class Project {
  constructor() {
    Project.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Project();

      if (data.hasOwnProperty('id')) {
        obj['id'] = _ApiClient.default.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('production')) {
        obj['production'] = _ApiClient.default.convertToType(data['production'], 'Boolean');
      }

      if (data.hasOwnProperty('name')) {
        obj['name'] = _ApiClient.default.convertToType(data['name'], 'String');
      }

      if (data.hasOwnProperty('description')) {
        obj['description'] = _ApiClient.default.convertToType(data['description'], 'String');
      }

      if (data.hasOwnProperty('country')) {
        obj['country'] = _ApiClient.default.convertToType(data['country'], 'String');
      }

      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = _ApiClient.default.convertToType(data['longitude'], 'Number');
      }

      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = _ApiClient.default.convertToType(data['latitude'], 'Number');
      }

      if (data.hasOwnProperty('verifier')) {
        obj['verifier'] = _ApiClient.default.convertToType(data['verifier'], 'String');
      }

      if (data.hasOwnProperty('developer')) {
        obj['developer'] = _ApiClient.default.convertToType(data['developer'], 'String');
      }
    }

    return obj;
  }

}

Project.prototype['id'] = undefined;
Project.prototype['production'] = undefined;
Project.prototype['name'] = undefined;
Project.prototype['description'] = undefined;
Project.prototype['country'] = undefined;
Project.prototype['longitude'] = undefined;
Project.prototype['latitude'] = undefined;
Project.prototype['verifier'] = undefined;
Project.prototype['developer'] = undefined;
var _default = Project;
exports.default = _default;