/**
 * Patch API V2
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class CreateEcommerceEstimateRequest {
  constructor(distanceM, packageMassG, transportationMethod) {
    CreateEcommerceEstimateRequest.initialize(
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
      obj = obj || new CreateEcommerceEstimateRequest();

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

CreateEcommerceEstimateRequest.prototype['distance_m'] = undefined;

CreateEcommerceEstimateRequest.prototype['package_mass_g'] = undefined;

CreateEcommerceEstimateRequest.prototype['transportation_method'] = undefined;

CreateEcommerceEstimateRequest.prototype['project_id'] = undefined;

CreateEcommerceEstimateRequest.prototype['create_order'] = false;

export default CreateEcommerceEstimateRequest;
