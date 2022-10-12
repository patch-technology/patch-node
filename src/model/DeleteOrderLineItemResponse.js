/**
 * Patch API V2
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class DeleteOrderLineItemResponse {
  constructor(success, error, data) {
    DeleteOrderLineItemResponse.initialize(this, success, error, data);
  }

  static initialize(obj, success, error, data) {
    obj['success'] = success;
    obj['error'] = error;
    obj['data'] = data;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeleteOrderLineItemResponse();

      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], Object);
      }

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], 'String');
      }
    }
    return obj;
  }
}

DeleteOrderLineItemResponse.prototype['success'] = undefined;

DeleteOrderLineItemResponse.prototype['error'] = undefined;

DeleteOrderLineItemResponse.prototype['data'] = undefined;

export default DeleteOrderLineItemResponse;
