/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';

class CreateMassEstimateRequest {
  constructor(massG) {
    CreateMassEstimateRequest.initialize(this, massG);
  }

  static initialize(obj, massG) {
    obj['mass_g'] = massG;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateMassEstimateRequest();

      if (data.hasOwnProperty('mass_g')) {
        obj['mass_g'] = ApiClient.convertToType(data['mass_g'], 'Number');
      }
    }
    return obj;
  }
}

CreateMassEstimateRequest.prototype['mass_g'] = undefined;

export default CreateMassEstimateRequest;
