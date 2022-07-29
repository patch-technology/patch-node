/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';
import ErrorResponse from '../model/ErrorResponse';
import ProjectListResponse from '../model/ProjectListResponse';
import ProjectResponse from '../model/ProjectResponse';

export default class ProjectsApi {
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  retrieveProjectWithHttpInfo(id, opts) {
    opts = opts || {};

    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling retrieveProject"
      );
    }

    let postBody = null;
    let pathParams = {
      id: id
    };
    let queryParams = {};
    let headerParams = {
      'Accept-Language': opts['acceptLanguage']
    };
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = ProjectResponse;

    return this.apiClient.callApi(
      '/v1/projects/{id}',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    );
  }

  retrieveProject(id, opts) {
    return this.retrieveProjectWithHttpInfo(id, opts);
  }

  retrieveProjectsWithHttpInfo(opts) {
    opts = opts || {};

    let postBody = null;
    let pathParams = {};
    let queryParams = {
      page: opts['page'],

      country: opts['country'],

      type: opts['type'],

      minimum_available_mass: opts['minimumAvailableMass']
    };
    let headerParams = {
      'Accept-Language': opts['acceptLanguage']
    };
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = ProjectListResponse;

    return this.apiClient.callApi(
      '/v1/projects',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    );
  }

  retrieveProjects(opts) {
    return this.retrieveProjectsWithHttpInfo(opts);
  }
}
