/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';

class CreateBulkRecsRequest {
  constructor() {
    CreateBulkRecsRequest.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateBulkRecsRequest();

      if (data.hasOwnProperty('price_cents_usd')) {
        obj['price_cents_usd'] = ApiClient.convertToType(
          data['price_cents_usd'],
          'Number'
        );
      }

      if (data.hasOwnProperty('project_id')) {
        obj['project_id'] = ApiClient.convertToType(
          data['project_id'],
          'String'
        );
      }

      if (data.hasOwnProperty('vintage_year')) {
        obj['vintage_year'] = ApiClient.convertToType(
          data['vintage_year'],
          'Number'
        );
      }

      if (data.hasOwnProperty('serial_number')) {
        obj['serial_number'] = ApiClient.convertToType(
          data['serial_number'],
          'String'
        );
      }

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
    }
    return obj;
  }
}

CreateBulkRecsRequest.prototype['price_cents_usd'] = undefined;

CreateBulkRecsRequest.prototype['project_id'] = undefined;

CreateBulkRecsRequest.prototype['vintage_year'] = undefined;

CreateBulkRecsRequest.prototype['serial_number'] = undefined;

CreateBulkRecsRequest.prototype['count'] = undefined;

export default CreateBulkRecsRequest;
