/**
 * Patch API V2
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class UpdateOrderLineItemRequest {
  constructor() {
    UpdateOrderLineItemRequest.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateOrderLineItemRequest();

      if (data.hasOwnProperty('vintage_year')) {
        obj['vintage_year'] = ApiClient.convertToType(
          data['vintage_year'],
          'Number'
        );
      }

      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }

      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }

      if (data.hasOwnProperty('unit')) {
        obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
      }
    }
    return obj;
  }
}

UpdateOrderLineItemRequest.prototype['vintage_year'] = undefined;

UpdateOrderLineItemRequest.prototype['price'] = undefined;

UpdateOrderLineItemRequest.prototype['currency'] = undefined;

UpdateOrderLineItemRequest.prototype['amount'] = undefined;

UpdateOrderLineItemRequest.prototype['unit'] = undefined;

export default UpdateOrderLineItemRequest;
