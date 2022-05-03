/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class OrderInventoryProject {
  constructor(id, name) {
    OrderInventoryProject.initialize(this, id, name);
  }

  static initialize(obj, id, name) {
    obj['id'] = id;
    obj['name'] = name;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrderInventoryProject();

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

OrderInventoryProject.prototype['id'] = undefined;

OrderInventoryProject.prototype['name'] = undefined;

export default OrderInventoryProject;
