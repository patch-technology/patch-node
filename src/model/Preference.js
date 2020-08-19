/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';
import Project from './Project';

class Preference {
  constructor(id, allocationPercentage, project) {
    Preference.initialize(this, id, allocationPercentage, project);
  }

  static initialize(obj, id, allocationPercentage, project) {
    obj['id'] = id;
    obj['allocation_percentage'] = allocationPercentage;
    obj['project'] = project;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Preference();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('allocation_percentage')) {
        obj['allocation_percentage'] = ApiClient.convertToType(
          data['allocation_percentage'],
          'Number'
        );
      }

      if (data.hasOwnProperty('project')) {
        obj['project'] = Project.constructFromObject(data['project']);
      }
    }
    return obj;
  }
}

Preference.prototype['id'] = undefined;

Preference.prototype['allocation_percentage'] = undefined;

Preference.prototype['project'] = undefined;

export default Preference;
