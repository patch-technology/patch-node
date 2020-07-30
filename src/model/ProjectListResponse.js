/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';
import MetaIndexObject from './MetaIndexObject';
import Project from './Project';

class ProjectListResponse {
  constructor(success, error, data, meta) {
    ProjectListResponse.initialize(this, success, error, data, meta);
  }

  static initialize(obj, success, error, data, meta) {
    obj['success'] = success;
    obj['error'] = error;
    obj['data'] = data;
    obj['meta'] = meta;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectListResponse();

      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], Object);
      }

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Project]);
      }

      if (data.hasOwnProperty('meta')) {
        obj['meta'] = MetaIndexObject.constructFromObject(data['meta']);
      }
    }
    return obj;
  }
}

ProjectListResponse.prototype['success'] = undefined;

ProjectListResponse.prototype['error'] = undefined;

ProjectListResponse.prototype['data'] = undefined;

ProjectListResponse.prototype['meta'] = undefined;

export default ProjectListResponse;
