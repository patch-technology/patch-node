/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';
import Error from './Error';

class BulkCreateSuccessResponse {
  constructor(success, error) {
    BulkCreateSuccessResponse.initialize(this, success, error);
  }

  static initialize(obj, success, error) {
    obj['success'] = success;
    obj['error'] = error;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BulkCreateSuccessResponse();

      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }

      if (data.hasOwnProperty('error')) {
        obj['error'] = Error.constructFromObject(data['error']);
      }
    }
    return obj;
  }
}

BulkCreateSuccessResponse.prototype['success'] = undefined;

BulkCreateSuccessResponse.prototype['error'] = undefined;

export default BulkCreateSuccessResponse;
