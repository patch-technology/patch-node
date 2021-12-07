/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class CreateFlightEstimateRequest {
  constructor() {
    CreateFlightEstimateRequest.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateFlightEstimateRequest();

      if (data.hasOwnProperty('distance_m')) {
        obj['distance_m'] = ApiClient.convertToType(
          data['distance_m'],
          'Number'
        );
      }

      if (data.hasOwnProperty('origin_airport')) {
        obj['origin_airport'] = ApiClient.convertToType(
          data['origin_airport'],
          'String'
        );
      }

      if (data.hasOwnProperty('destination_airport')) {
        obj['destination_airport'] = ApiClient.convertToType(
          data['destination_airport'],
          'String'
        );
      }

      if (data.hasOwnProperty('aircraft_code')) {
        obj['aircraft_code'] = ApiClient.convertToType(
          data['aircraft_code'],
          'String'
        );
      }

      if (data.hasOwnProperty('cabin_class')) {
        obj['cabin_class'] = ApiClient.convertToType(
          data['cabin_class'],
          'String'
        );
      }

      if (data.hasOwnProperty('passenger_count')) {
        obj['passenger_count'] = ApiClient.convertToType(
          data['passenger_count'],
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

CreateFlightEstimateRequest.prototype['origin_airport'] = undefined;

CreateFlightEstimateRequest.prototype['destination_airport'] = undefined;

CreateFlightEstimateRequest.prototype['aircraft_code'] = undefined;

CreateFlightEstimateRequest.prototype['cabin_class'] = undefined;

CreateFlightEstimateRequest.prototype['passenger_count'] = undefined;

CreateFlightEstimateRequest.prototype['project_id'] = undefined;

CreateFlightEstimateRequest.prototype['create_order'] = false;

export default CreateFlightEstimateRequest;
