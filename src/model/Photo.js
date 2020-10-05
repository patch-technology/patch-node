/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';

class Photo {
  constructor(url) {
    Photo.initialize(this, url);
  }

  static initialize(obj, url) {
    obj['url'] = url;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Photo();

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }
}

Photo.prototype['url'] = undefined;

export default Photo;
