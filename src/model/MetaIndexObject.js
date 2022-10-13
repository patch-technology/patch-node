/**
 * Patch API V2
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class MetaIndexObject {
  constructor() {
    MetaIndexObject.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MetaIndexObject();

      if (data.hasOwnProperty('prev_page')) {
        obj['prev_page'] = ApiClient.convertToType(data['prev_page'], 'Number');
      }

      if (data.hasOwnProperty('next_page')) {
        obj['next_page'] = ApiClient.convertToType(data['next_page'], 'Number');
      }
    }
    return obj;
  }
}

MetaIndexObject.prototype['prev_page'] = undefined;

MetaIndexObject.prototype['next_page'] = undefined;

export default MetaIndexObject;
