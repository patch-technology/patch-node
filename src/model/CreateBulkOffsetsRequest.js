/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';

class CreateBulkOffsetsRequest {
  constructor() {
    CreateBulkOffsetsRequest.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateBulkOffsetsRequest();

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

CreateBulkOffsetsRequest.prototype['price_cents_usd'] = undefined;

CreateBulkOffsetsRequest.prototype['project_id'] = undefined;

CreateBulkOffsetsRequest.prototype['vintage_year'] = undefined;

CreateBulkOffsetsRequest.prototype['serial_number'] = undefined;

CreateBulkOffsetsRequest.prototype['count'] = undefined;

export default CreateBulkOffsetsRequest;
