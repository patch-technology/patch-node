"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Project = _interopRequireDefault(require("./Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */
class Preference {
  constructor(id, allocationPercentage, project) {
    Preference.initialize(this, id, allocationPercentage, project);
  }

  static initialize(obj, id, allocationPercentage, project) {
    obj['id'] = id;
    obj['allocation_percentage'] = allocationPercentage;
    obj['project'] = project;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Preference();

      if (data.hasOwnProperty('id')) {
        obj['id'] = _ApiClient.default.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('allocation_percentage')) {
        obj['allocation_percentage'] = _ApiClient.default.convertToType(data['allocation_percentage'], 'Number');
      }

      if (data.hasOwnProperty('project')) {
        obj['project'] = _Project.default.constructFromObject(data['project']);
      }
    }

    return obj;
  }

}

Preference.prototype['id'] = undefined;
Preference.prototype['allocation_percentage'] = undefined;
Preference.prototype['project'] = undefined;
var _default = Preference;
exports.default = _default;