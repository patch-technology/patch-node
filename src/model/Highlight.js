/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';

class Highlight {
  constructor(slug, title) {
    Highlight.initialize(this, slug, title);
  }

  static initialize(obj, slug, title) {
    obj['slug'] = slug;
    obj['title'] = title;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Highlight();

      if (data.hasOwnProperty('slug')) {
        obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
      }

      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
    }
    return obj;
  }
}

Highlight.prototype['slug'] = undefined;

Highlight.prototype['title'] = undefined;

export default Highlight;
