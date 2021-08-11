/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';

class Error {
  constructor(code, message) {
    Error.initialize(this, code, message);
  }

  static initialize(obj, code, message) {
    obj['code'] = code;
    obj['message'] = message;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Error();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Number');
      }

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }
}

Error.prototype['code'] = undefined;

Error.prototype['message'] = undefined;

export default Error;
