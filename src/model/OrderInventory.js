/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';
import OrderInventoryProject from './OrderInventoryProject';

class OrderInventory {
  constructor(project, vintageYear, amount, unit, price, currency) {
    OrderInventory.initialize(
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
      obj = obj || new OrderInventory();

      if (data.hasOwnProperty('project')) {
        obj['project'] = ApiClient.convertToType(
          data['project'],
          OrderInventoryProject
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

OrderInventory.prototype['project'] = undefined;

OrderInventory.prototype['vintage_year'] = undefined;

OrderInventory.prototype['amount'] = undefined;

OrderInventory.prototype['unit'] = undefined;

OrderInventory.prototype['price'] = undefined;

OrderInventory.prototype['currency'] = undefined;

export default OrderInventory;
