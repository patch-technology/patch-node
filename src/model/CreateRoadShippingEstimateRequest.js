/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class CreateRoadShippingEstimateRequest {
  constructor() {
    CreateRoadShippingEstimateRequest.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateRoadShippingEstimateRequest();

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

      if (data.hasOwnProperty('cargo_type')) {
        obj['cargo_type'] = ApiClient.convertToType(
          data['cargo_type'],
          'String'
        );
      }

      if (data.hasOwnProperty('container_size_code')) {
        obj['container_size_code'] = ApiClient.convertToType(
          data['container_size_code'],
          'String'
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

      if (data.hasOwnProperty('freight_mass_g')) {
        obj['freight_mass_g'] = ApiClient.convertToType(
          data['freight_mass_g'],
          'Number'
        );
      }

      if (data.hasOwnProperty('fuel_type')) {
        obj['fuel_type'] = ApiClient.convertToType(data['fuel_type'], 'String');
      }

      if (data.hasOwnProperty('number_of_containers')) {
        obj['number_of_containers'] = ApiClient.convertToType(
          data['number_of_containers'],
          'Number'
        );
      }

      if (data.hasOwnProperty('truck_weight_t')) {
        obj['truck_weight_t'] = ApiClient.convertToType(
          data['truck_weight_t'],
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

CreateRoadShippingEstimateRequest.prototype['destination_country_code'] =
  undefined;

CreateRoadShippingEstimateRequest.prototype['destination_locode'] = undefined;

CreateRoadShippingEstimateRequest.prototype['destination_postal_code'] =
  undefined;

CreateRoadShippingEstimateRequest.prototype['origin_country_code'] = undefined;

CreateRoadShippingEstimateRequest.prototype['origin_locode'] = undefined;

CreateRoadShippingEstimateRequest.prototype['origin_postal_code'] = undefined;

CreateRoadShippingEstimateRequest.prototype['cargo_type'] = 'AVERAGE_MIXED';

CreateRoadShippingEstimateRequest.prototype['container_size_code'] = undefined;

CreateRoadShippingEstimateRequest.prototype['distance_m'] = undefined;

CreateRoadShippingEstimateRequest.prototype['emissions_scope'] = 'wtw';

CreateRoadShippingEstimateRequest.prototype['freight_mass_g'] = undefined;

CreateRoadShippingEstimateRequest.prototype['fuel_type'] = 'DIESEL';

CreateRoadShippingEstimateRequest.prototype['number_of_containers'] = undefined;

CreateRoadShippingEstimateRequest.prototype['truck_weight_t'] = undefined;

CreateRoadShippingEstimateRequest.prototype['project_id'] = undefined;

CreateRoadShippingEstimateRequest.prototype['create_order'] = false;

export default CreateRoadShippingEstimateRequest;
