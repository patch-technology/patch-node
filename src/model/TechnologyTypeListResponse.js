/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';
import TechnologyType from './TechnologyType';

class TechnologyTypeListResponse {
  constructor(success, error, data) {
    TechnologyTypeListResponse.initialize(this, success, error, data);
  }

  static initialize(obj, success, error, data) {
    obj['success'] = success;
    obj['error'] = error;
    obj['data'] = data;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TechnologyTypeListResponse();

      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], Object);
      }

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [TechnologyType]);
      }
    }
    return obj;
  }
}

TechnologyTypeListResponse.prototype['success'] = undefined;

TechnologyTypeListResponse.prototype['error'] = undefined;

TechnologyTypeListResponse.prototype['data'] = undefined;

export default TechnologyTypeListResponse;
