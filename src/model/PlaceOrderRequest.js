/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';
import V1OrdersIssuedTo from './V1OrdersIssuedTo';

class PlaceOrderRequest {
  constructor() {
    PlaceOrderRequest.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlaceOrderRequest();

      if (data.hasOwnProperty('issued_to')) {
        obj['issued_to'] = V1OrdersIssuedTo.constructFromObject(
          data['issued_to']
        );
      }
    }
    return obj;
  }
}

PlaceOrderRequest.prototype['issued_to'] = undefined;

export default PlaceOrderRequest;
