/**
 * Patch API V2
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';
import Order from './Order';

class OrderResponse {
  constructor(success, error, data) {
    OrderResponse.initialize(this, success, error, data);
  }

  static initialize(obj, success, error, data) {
    obj['success'] = success;
    obj['error'] = error;
    obj['data'] = data;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrderResponse();

      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], Object);
      }

      if (data.hasOwnProperty('data')) {
        obj['data'] = Order.constructFromObject(data['data']);
      }
    }
    return obj;
  }
}

OrderResponse.prototype['success'] = undefined;

OrderResponse.prototype['error'] = undefined;

OrderResponse.prototype['data'] = undefined;

export default OrderResponse;
