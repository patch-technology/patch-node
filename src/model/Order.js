/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';
import Allocation from './Allocation';

class Order {
  constructor(
    id,
    massG,
    production,
    state,
    allocationState,
    priceCentsUsd,
    patchFeeCentsUsd,
    allocations,
    metadata
  ) {
    Order.initialize(
      this,
      id,
      massG,
      production,
      state,
      allocationState,
      priceCentsUsd,
      patchFeeCentsUsd,
      allocations,
      metadata
    );
  }

  static initialize(
    obj,
    id,
    massG,
    production,
    state,
    allocationState,
    priceCentsUsd,
    patchFeeCentsUsd,
    allocations,
    metadata
  ) {
    obj['id'] = id;
    obj['mass_g'] = massG;
    obj['production'] = production;
    obj['state'] = state;
    obj['allocation_state'] = allocationState;
    obj['price_cents_usd'] = priceCentsUsd;
    obj['patch_fee_cents_usd'] = patchFeeCentsUsd;
    obj['allocations'] = allocations;
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
          'Number'
        );
      }

      if (data.hasOwnProperty('patch_fee_cents_usd')) {
        obj['patch_fee_cents_usd'] = ApiClient.convertToType(
          data['patch_fee_cents_usd'],
          'Number'
        );
      }

      if (data.hasOwnProperty('allocations')) {
        obj['allocations'] = ApiClient.convertToType(data['allocations'], [
          Allocation
        ]);
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
    }
    return obj;
  }
}

Order.prototype['id'] = undefined;

Order.prototype['created_at'] = undefined;

Order.prototype['mass_g'] = undefined;

Order.prototype['production'] = undefined;

Order.prototype['state'] = undefined;

Order.prototype['allocation_state'] = undefined;

Order.prototype['price_cents_usd'] = undefined;

Order.prototype['patch_fee_cents_usd'] = undefined;

Order.prototype['allocations'] = undefined;

Order.prototype['registry_url'] = undefined;

Order.prototype['metadata'] = undefined;

export default Order;
