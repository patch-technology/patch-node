/**
 * Patch API V2
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class DeleteOrderResponse {
  constructor(success, error, data) {
    DeleteOrderResponse.initialize(this, success, error, data);
  }

  static initialize(obj, success, error, data) {
    obj['success'] = success;
    obj['error'] = error;
    obj['data'] = data;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeleteOrderResponse();

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

DeleteOrderResponse.prototype['success'] = undefined;

DeleteOrderResponse.prototype['error'] = undefined;

DeleteOrderResponse.prototype['data'] = undefined;

export default DeleteOrderResponse;
