/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class Photo {
  constructor(url, id) {
    Photo.initialize(this, url, id);
  }

  static initialize(obj, url, id) {
    obj['url'] = url;
    obj['id'] = id;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Photo();

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }
}

Photo.prototype['url'] = undefined;

Photo.prototype['id'] = undefined;

export default Photo;
