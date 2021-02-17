/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';

class ProjectListRequest {
  constructor() {
    ProjectListRequest.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectListRequest();

      if (data.hasOwnProperty('page')) {
        obj['page'] = ApiClient.convertToType(data['page'], 'Number');
      }

      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }
}

ProjectListRequest.prototype['page'] = undefined;

ProjectListRequest.prototype['country'] = undefined;

ProjectListRequest.prototype['type'] = undefined;

export default ProjectListRequest;
