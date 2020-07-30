/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';
import Preference from './Preference';

class PreferenceResponse {
  constructor(success, error, data) {
    PreferenceResponse.initialize(this, success, error, data);
  }

  static initialize(obj, success, error, data) {
    obj['success'] = success;
    obj['error'] = error;
    obj['data'] = data;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PreferenceResponse();

      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], Object);
      }

      if (data.hasOwnProperty('data')) {
        obj['data'] = Preference.constructFromObject(data['data']);
      }
    }
    return obj;
  }
}

PreferenceResponse.prototype['success'] = undefined;

PreferenceResponse.prototype['error'] = undefined;

PreferenceResponse.prototype['data'] = undefined;

export default PreferenceResponse;
