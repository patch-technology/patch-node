/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';

class CreateSuccessResponse {
  constructor(success, error) {
    CreateSuccessResponse.initialize(this, success, error);
  }

  static initialize(obj, success, error) {
    obj['success'] = success;
    obj['error'] = error;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateSuccessResponse();

      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], Object);
      }
    }
    return obj;
  }
}

CreateSuccessResponse.prototype['success'] = undefined;

CreateSuccessResponse.prototype['error'] = undefined;

export default CreateSuccessResponse;
