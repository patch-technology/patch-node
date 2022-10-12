/**
 * Patch API V2
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class CreateShippingEstimateRequest {
  constructor(distanceM, packageMassG, transportationMethod) {
    CreateShippingEstimateRequest.initialize(
      this,
      distanceM,
      packageMassG,
      transportationMethod
    );
  }

  static initialize(obj, distanceM, packageMassG, transportationMethod) {
    obj['distance_m'] = distanceM;
    obj['package_mass_g'] = packageMassG;
    obj['transportation_method'] = transportationMethod;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateShippingEstimateRequest();

      if (data.hasOwnProperty('distance_m')) {
        obj['distance_m'] = ApiClient.convertToType(
          data['distance_m'],
          'Number'
        );
      }

      if (data.hasOwnProperty('package_mass_g')) {
        obj['package_mass_g'] = ApiClient.convertToType(
          data['package_mass_g'],
          'Number'
        );
      }

      if (data.hasOwnProperty('transportation_method')) {
        obj['transportation_method'] = ApiClient.convertToType(
          data['transportation_method'],
          'String'
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

CreateShippingEstimateRequest.prototype['distance_m'] = undefined;

CreateShippingEstimateRequest.prototype['package_mass_g'] = undefined;

CreateShippingEstimateRequest.prototype['transportation_method'] = undefined;

CreateShippingEstimateRequest.prototype['project_id'] = undefined;

CreateShippingEstimateRequest.prototype['create_order'] = false;

export default CreateShippingEstimateRequest;
