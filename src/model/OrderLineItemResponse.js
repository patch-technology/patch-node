/**
 * Patch API V2
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';
import OrderLineItem from './OrderLineItem';

class OrderLineItemResponse {
  constructor(success, error, data) {
    OrderLineItemResponse.initialize(this, success, error, data);
  }

  static initialize(obj, success, error, data) {
    obj['success'] = success;
    obj['error'] = error;
    obj['data'] = data;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrderLineItemResponse();

      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], Object);
      }

      if (data.hasOwnProperty('data')) {
        obj['data'] = OrderLineItem.constructFromObject(data['data']);
      }
    }
    return obj;
  }
}

OrderLineItemResponse.prototype['success'] = undefined;

OrderLineItemResponse.prototype['error'] = undefined;

OrderLineItemResponse.prototype['data'] = undefined;

export default OrderLineItemResponse;
