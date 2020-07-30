/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';
import Allocation from './Allocation';

class Order {
  constructor() {
    Order.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Order();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('mass_g')) {
        obj['mass_g'] = ApiClient.convertToType(data['mass_g'], 'Number');
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

      if (data.hasOwnProperty('allocation_state')) {
        obj['allocation_state'] = ApiClient.convertToType(
          data['allocation_state'],
          'String'
        );
      }

      if (data.hasOwnProperty('price_cents_usd')) {
        obj['price_cents_usd'] = ApiClient.convertToType(
          data['price_cents_usd'],
          'String'
        );
      }

      if (data.hasOwnProperty('allocations')) {
        obj['allocations'] = ApiClient.convertToType(data['allocations'], [
          Allocation
        ]);
      }
    }
    return obj;
  }
}

Order.prototype['id'] = undefined;

Order.prototype['mass_g'] = undefined;

Order.prototype['production'] = undefined;

Order.prototype['state'] = undefined;

Order.prototype['allocation_state'] = undefined;

Order.prototype['price_cents_usd'] = undefined;

Order.prototype['allocations'] = undefined;

export default Order;
