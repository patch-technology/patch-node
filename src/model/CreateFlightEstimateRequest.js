/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';

class CreateFlightEstimateRequest {
  constructor(distanceM) {
    CreateFlightEstimateRequest.initialize(this, distanceM);
  }

  static initialize(obj, distanceM) {
    obj['distance_m'] = distanceM;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateFlightEstimateRequest();

      if (data.hasOwnProperty('distance_m')) {
        obj['distance_m'] = ApiClient.convertToType(
          data['distance_m'],
          'Number'
        );
      }

      if (data.hasOwnProperty('project_id')) {
        obj['project_id'] = ApiClient.convertToType(
          data['project_id'],
          'String'
        );
      }

      if (data.hasOwnProperty('create_order')) {
        obj['create_order'] = ApiClient.convertToType(
          data['create_order'],
          'Boolean'
        );
      }
    }
    return obj;
  }
}

CreateFlightEstimateRequest.prototype['distance_m'] = undefined;

CreateFlightEstimateRequest.prototype['project_id'] = undefined;

CreateFlightEstimateRequest.prototype['create_order'] = undefined;

export default CreateFlightEstimateRequest;
