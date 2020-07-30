"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MetaIndexObject = _interopRequireDefault(require("./MetaIndexObject"));

var _Preference = _interopRequireDefault(require("./Preference"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */
class PreferenceListResponse {
  constructor(success, error, data, meta) {
    PreferenceListResponse.initialize(this, success, error, data, meta);
  }

  static initialize(obj, success, error, data, meta) {
    obj['success'] = success;
    obj['error'] = error;
    obj['data'] = data;
    obj['meta'] = meta;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PreferenceListResponse();

      if (data.hasOwnProperty('success')) {
        obj['success'] = _ApiClient.default.convertToType(data['success'], 'Boolean');
      }

      if (data.hasOwnProperty('error')) {
        obj['error'] = _ApiClient.default.convertToType(data['error'], Object);
      }

      if (data.hasOwnProperty('data')) {
        obj['data'] = _ApiClient.default.convertToType(data['data'], [_Preference.default]);
      }

      if (data.hasOwnProperty('meta')) {
        obj['meta'] = _MetaIndexObject.default.constructFromObject(data['meta']);
      }
    }

    return obj;
  }

}

PreferenceListResponse.prototype['success'] = undefined;
PreferenceListResponse.prototype['error'] = undefined;
PreferenceListResponse.prototype['data'] = undefined;
PreferenceListResponse.prototype['meta'] = undefined;
var _default = PreferenceListResponse;
exports.default = _default;