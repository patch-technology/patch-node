/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class IssuedTo {
  constructor() {
    IssuedTo.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IssuedTo();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }
}

IssuedTo.prototype['email'] = undefined;

IssuedTo.prototype['name'] = undefined;

export default IssuedTo;
