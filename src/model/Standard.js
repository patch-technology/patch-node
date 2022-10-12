/**
 * Patch API V2
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class Standard {
  constructor(type, acronym, description) {
    Standard.initialize(this, type, acronym, description);
  }

  static initialize(obj, type, acronym, description) {
    obj['type'] = type;
    obj['acronym'] = acronym;
    obj['description'] = description;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Standard();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }

      if (data.hasOwnProperty('acronym')) {
        obj['acronym'] = ApiClient.convertToType(data['acronym'], 'String');
      }

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(
          data['description'],
          'String'
        );
      }
    }
    return obj;
  }
}

Standard.prototype['type'] = undefined;

Standard.prototype['acronym'] = undefined;

Standard.prototype['description'] = undefined;

export default Standard;
