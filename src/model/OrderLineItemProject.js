/**
 * Patch API V2
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class OrderLineItemProject {
  constructor(id, name) {
    OrderLineItemProject.initialize(this, id, name);
  }

  static initialize(obj, id, name) {
    obj['id'] = id;
    obj['name'] = name;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrderLineItemProject();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }
}

OrderLineItemProject.prototype['id'] = undefined;

OrderLineItemProject.prototype['name'] = undefined;

export default OrderLineItemProject;
