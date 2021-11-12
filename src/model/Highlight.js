/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';

class Highlight {
  constructor(slug, title, iconUrl) {
    Highlight.initialize(this, slug, title, iconUrl);
  }

  static initialize(obj, slug, title, iconUrl) {
    obj['slug'] = slug;
    obj['title'] = title;
    obj['icon_url'] = iconUrl;
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

      if (data.hasOwnProperty('icon_url')) {
        obj['icon_url'] = ApiClient.convertToType(data['icon_url'], 'String');
      }
    }
    return obj;
  }
}

Highlight.prototype['slug'] = undefined;

Highlight.prototype['title'] = undefined;

Highlight.prototype['icon_url'] = undefined;

export default Highlight;
