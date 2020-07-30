/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from "../ApiClient";
import ErrorResponse from "../model/ErrorResponse";
import ProjectListResponse from "../model/ProjectListResponse";
import ProjectResponse from "../model/ProjectResponse";

export default class ProjectsApi {
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
    this.retrieveProject = this.retrieveProject.bind(this);
    this.retrieveProjectWithHttpInfo = this.retrieveProjectWithHttpInfo.bind(
      this
    );
    this.retrieveProjects = this.retrieveProjects.bind(this);
    this.retrieveProjectsWithHttpInfo = this.retrieveProjectsWithHttpInfo.bind(
      this
    );
  }

  retrieveProjectWithHttpInfo(id) {
    let postBody = null;

    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling retrieveProject"
      );
    }

    let pathParams = {
      id: id,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["bearer_auth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = ProjectResponse;

    return this.apiClient.callApi(
      "/v1/projects/{id}",
      "GET",
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

  retrieveProject(id) {
    return this.retrieveProjectWithHttpInfo(id).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  retrieveProjectsWithHttpInfo(opts) {
    opts = opts || {};

    let postBody = null;

    let pathParams = {};
    let queryParams = {
      page: opts["page"],
    };
    let headerParams = {};
    let formParams = {};

    let authNames = ["bearer_auth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = ProjectListResponse;

    return this.apiClient.callApi(
      "/v1/projects",
      "GET",
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
    return this.retrieveProjectsWithHttpInfo(opts).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }
}
