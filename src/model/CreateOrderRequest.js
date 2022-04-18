/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class CreateOrderRequest {
  constructor() {
    CreateOrderRequest.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateOrderRequest();

      if (data.hasOwnProperty('mass_g')) {
        obj['mass_g'] = ApiClient.convertToType(data['mass_g'], 'Number');
      }

      if (data.hasOwnProperty('total_price_cents_usd')) {
        obj['total_price_cents_usd'] = ApiClient.convertToType(
          data['total_price_cents_usd'],
          'Number'
        );
      }

      if (data.hasOwnProperty('project_id')) {
        obj['project_id'] = ApiClient.convertToType(
          data['project_id'],
          'String'
        );
      }

      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }

      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }

      if (data.hasOwnProperty('vintage_year')) {
        obj['vintage_year'] = ApiClient.convertToType(
          data['vintage_year'],
          'Number'
        );
      }
    }
    return obj;
  }
}

CreateOrderRequest.prototype['mass_g'] = undefined;

CreateOrderRequest.prototype['total_price_cents_usd'] = undefined;

CreateOrderRequest.prototype['project_id'] = undefined;

CreateOrderRequest.prototype['metadata'] = undefined;

CreateOrderRequest.prototype['state'] = undefined;

CreateOrderRequest.prototype['vintage_year'] = undefined;

export default CreateOrderRequest;
