/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class CreateVehicleEstimateRequest {
  constructor(distanceM) {
    CreateVehicleEstimateRequest.initialize(this, distanceM);
  }

  static initialize(obj, distanceM) {
    obj['distance_m'] = distanceM;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateVehicleEstimateRequest();

      if (data.hasOwnProperty('distance_m')) {
        obj['distance_m'] = ApiClient.convertToType(
          data['distance_m'],
          'Number'
        );
      }

      if (data.hasOwnProperty('make')) {
        obj['make'] = ApiClient.convertToType(data['make'], 'String');
      }

      if (data.hasOwnProperty('model')) {
        obj['model'] = ApiClient.convertToType(data['model'], 'String');
      }

      if (data.hasOwnProperty('year')) {
        obj['year'] = ApiClient.convertToType(data['year'], 'Number');
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

CreateVehicleEstimateRequest.prototype['distance_m'] = undefined;

CreateVehicleEstimateRequest.prototype['make'] = undefined;

CreateVehicleEstimateRequest.prototype['model'] = undefined;

CreateVehicleEstimateRequest.prototype['year'] = undefined;

CreateVehicleEstimateRequest.prototype['project_id'] = undefined;

CreateVehicleEstimateRequest.prototype['create_order'] = false;

export default CreateVehicleEstimateRequest;
