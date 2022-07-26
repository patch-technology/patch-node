/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class CreateRailShippingEstimateRequest {
  constructor() {
    CreateRailShippingEstimateRequest.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateRailShippingEstimateRequest();

      if (data.hasOwnProperty('destination_country_code')) {
        obj['destination_country_code'] = ApiClient.convertToType(
          data['destination_country_code'],
          'String'
        );
      }

      if (data.hasOwnProperty('destination_locode')) {
        obj['destination_locode'] = ApiClient.convertToType(
          data['destination_locode'],
          'String'
        );
      }

      if (data.hasOwnProperty('destination_postal_code')) {
        obj['destination_postal_code'] = ApiClient.convertToType(
          data['destination_postal_code'],
          'String'
        );
      }

      if (data.hasOwnProperty('origin_country_code')) {
        obj['origin_country_code'] = ApiClient.convertToType(
          data['origin_country_code'],
          'String'
        );
      }

      if (data.hasOwnProperty('origin_locode')) {
        obj['origin_locode'] = ApiClient.convertToType(
          data['origin_locode'],
          'String'
        );
      }

      if (data.hasOwnProperty('origin_postal_code')) {
        obj['origin_postal_code'] = ApiClient.convertToType(
          data['origin_postal_code'],
          'String'
        );
      }

      if (data.hasOwnProperty('fuel_type')) {
        obj['fuel_type'] = ApiClient.convertToType(data['fuel_type'], 'String');
      }

      if (data.hasOwnProperty('freight_mass_g')) {
        obj['freight_mass_g'] = ApiClient.convertToType(
          data['freight_mass_g'],
          'Number'
        );
      }

      if (data.hasOwnProperty('distance_m')) {
        obj['distance_m'] = ApiClient.convertToType(
          data['distance_m'],
          'Number'
        );
      }

      if (data.hasOwnProperty('emissions_scope')) {
        obj['emissions_scope'] = ApiClient.convertToType(
          data['emissions_scope'],
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

CreateRailShippingEstimateRequest.prototype['destination_country_code'] =
  undefined;

CreateRailShippingEstimateRequest.prototype['destination_locode'] = undefined;

CreateRailShippingEstimateRequest.prototype['destination_postal_code'] =
  undefined;

CreateRailShippingEstimateRequest.prototype['origin_country_code'] = undefined;

CreateRailShippingEstimateRequest.prototype['origin_locode'] = undefined;

CreateRailShippingEstimateRequest.prototype['origin_postal_code'] = undefined;

CreateRailShippingEstimateRequest.prototype['fuel_type'] = 'default';

CreateRailShippingEstimateRequest.prototype['freight_mass_g'] = undefined;

CreateRailShippingEstimateRequest.prototype['distance_m'] = undefined;

CreateRailShippingEstimateRequest.prototype['emissions_scope'] = 'wtw';

CreateRailShippingEstimateRequest.prototype['project_id'] = undefined;

CreateRailShippingEstimateRequest.prototype['create_order'] = false;

export default CreateRailShippingEstimateRequest;
