/**
 * Patch API V2
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';
import OrderLineItemProject from './OrderLineItemProject';

class OrderLineItem {
  constructor(project, vintageYear, amount, unit, price, currency) {
    OrderLineItem.initialize(
      this,
      project,
      vintageYear,
      amount,
      unit,
      price,
      currency
    );
  }

  static initialize(obj, project, vintageYear, amount, unit, price, currency) {
    obj['project'] = project;
    obj['vintage_year'] = vintageYear;
    obj['amount'] = amount;
    obj['unit'] = unit;
    obj['price'] = price;
    obj['currency'] = currency;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrderLineItem();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('project')) {
        obj['project'] = ApiClient.convertToType(
          data['project'],
          OrderLineItemProject
        );
      }

      if (data.hasOwnProperty('vintage_year')) {
        obj['vintage_year'] = ApiClient.convertToType(
          data['vintage_year'],
          'Number'
        );
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

      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
    }
    return obj;
  }
}

OrderLineItem.prototype['id'] = undefined;

OrderLineItem.prototype['project'] = undefined;

OrderLineItem.prototype['vintage_year'] = undefined;

OrderLineItem.prototype['amount'] = undefined;

OrderLineItem.prototype['unit'] = undefined;

OrderLineItem.prototype['price'] = undefined;

OrderLineItem.prototype['currency'] = undefined;

export default OrderLineItem;
