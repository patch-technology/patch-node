/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class Sdg {
  constructor(title, number, description, url) {
    Sdg.initialize(this, title, number, description, url);
  }

  static initialize(obj, title, number, description, url) {
    obj['title'] = title;
    obj['number'] = number;
    obj['description'] = description;
    obj['url'] = url;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Sdg();

      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }

      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'Number');
      }

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(
          data['description'],
          'String'
        );
      }

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }
}

Sdg.prototype['title'] = undefined;

Sdg.prototype['number'] = undefined;

Sdg.prototype['description'] = undefined;

Sdg.prototype['url'] = undefined;

export default Sdg;
