/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class CreateAirShippingEstimateRequest {
  constructor() {
    CreateAirShippingEstimateRequest.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateAirShippingEstimateRequest();

      if (data.hasOwnProperty('destination_iata')) {
        obj['destination_iata'] = ApiClient.convertToType(
          data['destination_iata'],
          'String'
        );
      }

      if (data.hasOwnProperty('origin_iata')) {
        obj['origin_iata'] = ApiClient.convertToType(
          data['origin_iata'],
          'String'
        );
      }

      if (data.hasOwnProperty('aircraft_iata')) {
        obj['aircraft_iata'] = ApiClient.convertToType(
          data['aircraft_iata'],
          'String'
        );
      }

      if (data.hasOwnProperty('aircraft_type')) {
        obj['aircraft_type'] = ApiClient.convertToType(
          data['aircraft_type'],
          'String'
        );
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

CreateAirShippingEstimateRequest.prototype['destination_iata'] = undefined;

CreateAirShippingEstimateRequest.prototype['origin_iata'] = undefined;

CreateAirShippingEstimateRequest.prototype['aircraft_iata'] = undefined;

CreateAirShippingEstimateRequest.prototype['aircraft_type'] = 'UNKNOWN';

CreateAirShippingEstimateRequest.prototype['freight_mass_g'] = undefined;

CreateAirShippingEstimateRequest.prototype['distance_m'] = undefined;

CreateAirShippingEstimateRequest.prototype['emissions_scope'] = 'wtw';

CreateAirShippingEstimateRequest.prototype['project_id'] = undefined;

CreateAirShippingEstimateRequest.prototype['create_order'] = false;

export default CreateAirShippingEstimateRequest;
