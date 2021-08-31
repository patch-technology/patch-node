/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';

class Organization {
  constructor(name, type, production) {
    Organization.initialize(this, name, type, production);
  }

  static initialize(obj, name, type, production) {
    obj['name'] = name;
    obj['type'] = type;
    obj['production'] = production;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Organization();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }

      if (data.hasOwnProperty('production')) {
        obj['production'] = ApiClient.convertToType(
          data['production'],
          'Boolean'
        );
      }
    }
    return obj;
  }
}

Organization.prototype['id'] = undefined;

Organization.prototype['name'] = undefined;

Organization.prototype['type'] = undefined;

Organization.prototype['production'] = undefined;

export default Organization;
