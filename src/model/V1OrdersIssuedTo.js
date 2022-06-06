/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class V1OrdersIssuedTo {
  constructor() {
    V1OrdersIssuedTo.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V1OrdersIssuedTo();

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

V1OrdersIssuedTo.prototype['email'] = undefined;

V1OrdersIssuedTo.prototype['name'] = undefined;

export default V1OrdersIssuedTo;
