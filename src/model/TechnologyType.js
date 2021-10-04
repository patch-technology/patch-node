/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';
import ParentTechnologyType from './ParentTechnologyType';

class TechnologyType {
  constructor(slug, name) {
    TechnologyType.initialize(this, slug, name);
  }

  static initialize(obj, slug, name) {
    obj['slug'] = slug;
    obj['name'] = name;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TechnologyType();

      if (data.hasOwnProperty('slug')) {
        obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
      }

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }

      if (data.hasOwnProperty('parent_technology_type')) {
        obj['parent_technology_type'] =
          ParentTechnologyType.constructFromObject(
            data['parent_technology_type']
          );
      }
    }
    return obj;
  }
}

TechnologyType.prototype['slug'] = undefined;

TechnologyType.prototype['name'] = undefined;

TechnologyType.prototype['parent_technology_type'] = undefined;

export default TechnologyType;
