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

      if (data.hasOwnProperty('create_order')) {
        obj['create_order'] = ApiClient.convertToType(
          data['create_order'],
          'Boolean'
        );
      }

      if (data.hasOwnProperty('project_id')) {
        obj['project_id'] = ApiClient.convertToType(
          data['project_id'],
          'String'
        );
      }
    }
    return obj;
  }
}

CreateMassEstimateRequest.prototype['mass_g'] = undefined;

CreateMassEstimateRequest.prototype['create_order'] = undefined;

CreateMassEstimateRequest.prototype['project_id'] = undefined;

export default CreateMassEstimateRequest;
