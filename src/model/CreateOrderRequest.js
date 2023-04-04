/**
 * Patch API V2
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';
import OrderIssuedTo from './OrderIssuedTo';

class CreateOrderRequest {
  constructor() {
    CreateOrderRequest.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateOrderRequest();

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

      if (data.hasOwnProperty('vintage_start_year')) {
        obj['vintage_start_year'] = ApiClient.convertToType(
          data['vintage_start_year'],
          'Number'
        );
      }

      if (data.hasOwnProperty('vintage_end_year')) {
        obj['vintage_end_year'] = ApiClient.convertToType(
          data['vintage_end_year'],
          'Number'
        );
      }

      if (data.hasOwnProperty('total_price')) {
        obj['total_price'] = ApiClient.convertToType(
          data['total_price'],
          'Number'
        );
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

      if (data.hasOwnProperty('issued_to')) {
        obj['issued_to'] = OrderIssuedTo.constructFromObject(data['issued_to']);
      }
    }
    return obj;
  }
}

CreateOrderRequest.prototype['project_id'] = undefined;

CreateOrderRequest.prototype['metadata'] = undefined;

CreateOrderRequest.prototype['state'] = undefined;

CreateOrderRequest.prototype['vintage_year'] = undefined;

CreateOrderRequest.prototype['vintage_start_year'] = undefined;

CreateOrderRequest.prototype['vintage_end_year'] = undefined;

CreateOrderRequest.prototype['total_price'] = undefined;

CreateOrderRequest.prototype['currency'] = undefined;

CreateOrderRequest.prototype['amount'] = undefined;

CreateOrderRequest.prototype['unit'] = undefined;

CreateOrderRequest.prototype['issued_to'] = undefined;

export default CreateOrderRequest;
