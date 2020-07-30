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
class ErrorResponse {
  constructor(success, error, data) {
    ErrorResponse.initialize(this, success, error, data);
  }

  static initialize(obj, success, error, data) {
    obj['success'] = success;
    obj['error'] = error;
    obj['data'] = data;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ErrorResponse();

      if (data.hasOwnProperty('success')) {
        obj['success'] = _ApiClient.default.convertToType(data['success'], 'Boolean');
      }

      if (data.hasOwnProperty('error')) {
        obj['error'] = _ApiClient.default.convertToType(data['error'], Object);
      }

      if (data.hasOwnProperty('data')) {
        obj['data'] = _ApiClient.default.convertToType(data['data'], Object);
      }
    }

    return obj;
  }

}

ErrorResponse.prototype['success'] = undefined;
ErrorResponse.prototype['error'] = undefined;
ErrorResponse.prototype['data'] = undefined;
var _default = ErrorResponse;
exports.default = _default;