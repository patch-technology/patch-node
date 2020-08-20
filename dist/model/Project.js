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
  constructor(id, production, name, description, country, developer) {
    Project.initialize(this, id, production, name, description, country, developer);
  }

  static initialize(obj, id, production, name, description, country, developer) {
    obj['id'] = id;
    obj['production'] = production;
    obj['name'] = name;
    obj['description'] = description;
    obj['country'] = country;
    obj['developer'] = developer;
  }

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

      if (data.hasOwnProperty('type')) {
        obj['type'] = _ApiClient.default.convertToType(data['type'], 'String');
      }

      if (data.hasOwnProperty('country')) {
        obj['country'] = _ApiClient.default.convertToType(data['country'], 'String');
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
Project.prototype['type'] = undefined;
Project.prototype['country'] = undefined;
Project.prototype['developer'] = undefined;
var _default = Project;
exports.default = _default;