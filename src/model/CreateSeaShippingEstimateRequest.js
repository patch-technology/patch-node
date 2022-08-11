/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class CreateSeaShippingEstimateRequest {
  constructor() {
    CreateSeaShippingEstimateRequest.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateSeaShippingEstimateRequest();

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

      if (data.hasOwnProperty('container_size_code')) {
        obj['container_size_code'] = ApiClient.convertToType(
          data['container_size_code'],
          'String'
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

      if (data.hasOwnProperty('freight_volume_cubic_m')) {
        obj['freight_volume_cubic_m'] = ApiClient.convertToType(
          data['freight_volume_cubic_m'],
          'Number'
        );
      }

      if (data.hasOwnProperty('number_of_containers')) {
        obj['number_of_containers'] = ApiClient.convertToType(
          data['number_of_containers'],
          'Number'
        );
      }

      if (data.hasOwnProperty('vessel_imo')) {
        obj['vessel_imo'] = ApiClient.convertToType(
          data['vessel_imo'],
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

CreateSeaShippingEstimateRequest.prototype['destination_country_code'] =
  undefined;

CreateSeaShippingEstimateRequest.prototype['destination_locode'] = undefined;

CreateSeaShippingEstimateRequest.prototype['destination_postal_code'] =
  undefined;

CreateSeaShippingEstimateRequest.prototype['origin_country_code'] = undefined;

CreateSeaShippingEstimateRequest.prototype['origin_locode'] = undefined;

CreateSeaShippingEstimateRequest.prototype['origin_postal_code'] = undefined;

CreateSeaShippingEstimateRequest.prototype['container_size_code'] = undefined;

CreateSeaShippingEstimateRequest.prototype['emissions_scope'] = 'ttw';

CreateSeaShippingEstimateRequest.prototype['freight_mass_g'] = undefined;

CreateSeaShippingEstimateRequest.prototype['freight_volume_cubic_m'] =
  undefined;

CreateSeaShippingEstimateRequest.prototype['number_of_containers'] = undefined;

CreateSeaShippingEstimateRequest.prototype['vessel_imo'] = undefined;

CreateSeaShippingEstimateRequest.prototype['project_id'] = undefined;

CreateSeaShippingEstimateRequest.prototype['create_order'] = false;

export default CreateSeaShippingEstimateRequest;
