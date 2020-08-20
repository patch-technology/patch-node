"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Allocation = _interopRequireDefault(require("./Allocation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */
class Order {
  constructor(id, massG, production, state, allocationState, priceCentsUsd, allocations, metadata) {
    Order.initialize(this, id, massG, production, state, allocationState, priceCentsUsd, allocations, metadata);
  }

  static initialize(obj, id, massG, production, state, allocationState, priceCentsUsd, allocations, metadata) {
    obj['id'] = id;
    obj['mass_g'] = massG;
    obj['production'] = production;
    obj['state'] = state;
    obj['allocation_state'] = allocationState;
    obj['price_cents_usd'] = priceCentsUsd;
    obj['allocations'] = allocations;
    obj['metadata'] = metadata;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Order();

      if (data.hasOwnProperty('id')) {
        obj['id'] = _ApiClient.default.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('mass_g')) {
        obj['mass_g'] = _ApiClient.default.convertToType(data['mass_g'], 'Number');
      }

      if (data.hasOwnProperty('production')) {
        obj['production'] = _ApiClient.default.convertToType(data['production'], 'Boolean');
      }

      if (data.hasOwnProperty('state')) {
        obj['state'] = _ApiClient.default.convertToType(data['state'], 'String');
      }

      if (data.hasOwnProperty('allocation_state')) {
        obj['allocation_state'] = _ApiClient.default.convertToType(data['allocation_state'], 'String');
      }

      if (data.hasOwnProperty('price_cents_usd')) {
        obj['price_cents_usd'] = _ApiClient.default.convertToType(data['price_cents_usd'], 'String');
      }

      if (data.hasOwnProperty('allocations')) {
        obj['allocations'] = _ApiClient.default.convertToType(data['allocations'], [_Allocation.default]);
      }

      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = _ApiClient.default.convertToType(data['metadata'], Object);
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
Order.prototype['metadata'] = undefined;
var _default = Order;
exports.default = _default;