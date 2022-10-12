/**
 * Patch API V2
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';
import OrderIssuedTo from './OrderIssuedTo';
import OrderLineItem from './OrderLineItem';

class Order {
  constructor(
    id,
    production,
    state,
    amount,
    unit,
    price,
    patchFee,
    currency,
    metadata
  ) {
    Order.initialize(
      this,
      id,
      production,
      state,
      amount,
      unit,
      price,
      patchFee,
      currency,
      metadata
    );
  }

  static initialize(
    obj,
    id,
    production,
    state,
    amount,
    unit,
    price,
    patchFee,
    currency,
    metadata
  ) {
    obj['id'] = id;
    obj['production'] = production;
    obj['state'] = state;
    obj['amount'] = amount;
    obj['unit'] = unit;
    obj['price'] = price;
    obj['patch_fee'] = patchFee;
    obj['currency'] = currency;
    obj['metadata'] = metadata;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Order();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }

      if (data.hasOwnProperty('production')) {
        obj['production'] = ApiClient.convertToType(
          data['production'],
          'Boolean'
        );
      }

      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }

      if (data.hasOwnProperty('unit')) {
        obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
      }

      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }

      if (data.hasOwnProperty('patch_fee')) {
        obj['patch_fee'] = ApiClient.convertToType(data['patch_fee'], 'Number');
      }

      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }

      if (data.hasOwnProperty('registry_url')) {
        obj['registry_url'] = ApiClient.convertToType(
          data['registry_url'],
          'String'
        );
      }

      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }

      if (data.hasOwnProperty('line_items')) {
        obj['line_items'] = ApiClient.convertToType(data['line_items'], [
          OrderLineItem
        ]);
      }

      if (data.hasOwnProperty('issued_to')) {
        obj['issued_to'] = ApiClient.convertToType(
          data['issued_to'],
          OrderIssuedTo
        );
      }
    }
    return obj;
  }
}

Order.prototype['id'] = undefined;

Order.prototype['created_at'] = undefined;

Order.prototype['production'] = undefined;

Order.prototype['state'] = undefined;

Order.prototype['amount'] = undefined;

Order.prototype['unit'] = undefined;

Order.prototype['price'] = undefined;

Order.prototype['patch_fee'] = undefined;

Order.prototype['currency'] = undefined;

Order.prototype['registry_url'] = undefined;

Order.prototype['metadata'] = undefined;

Order.prototype['line_items'] = undefined;

Order.prototype['issued_to'] = undefined;

export default Order;
