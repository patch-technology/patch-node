/**
 * Patch API V2
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class Inventory {
  constructor(vintageYear, amountAvailable, price, currency, unit) {
    Inventory.initialize(
      this,
      vintageYear,
      amountAvailable,
      price,
      currency,
      unit
    );
  }

  static initialize(obj, vintageYear, amountAvailable, price, currency, unit) {
    obj['vintage_year'] = vintageYear;
    obj['amount_available'] = amountAvailable;
    obj['price'] = price;
    obj['currency'] = currency;
    obj['unit'] = unit;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Inventory();

      if (data.hasOwnProperty('vintage_year')) {
        obj['vintage_year'] = ApiClient.convertToType(
          data['vintage_year'],
          'Number'
        );
      }

      if (data.hasOwnProperty('amount_available')) {
        obj['amount_available'] = ApiClient.convertToType(
          data['amount_available'],
          'Number'
        );
      }

      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }

      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }

      if (data.hasOwnProperty('unit')) {
        obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
      }
    }
    return obj;
  }
}

Inventory.prototype['vintage_year'] = undefined;

Inventory.prototype['amount_available'] = undefined;

Inventory.prototype['price'] = undefined;

Inventory.prototype['currency'] = undefined;

Inventory.prototype['unit'] = undefined;

export default Inventory;
