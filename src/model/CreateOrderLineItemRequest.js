/**
 * Patch API V2
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class CreateOrderLineItemRequest {
  constructor() {
    CreateOrderLineItemRequest.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateOrderLineItemRequest();

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

CreateOrderLineItemRequest.prototype['project_id'] = undefined;

CreateOrderLineItemRequest.prototype['vintage_year'] = undefined;

CreateOrderLineItemRequest.prototype['price'] = undefined;

CreateOrderLineItemRequest.prototype['currency'] = undefined;

CreateOrderLineItemRequest.prototype['amount'] = undefined;

CreateOrderLineItemRequest.prototype['unit'] = undefined;

export default CreateOrderLineItemRequest;
