"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _ProjectListResponse = _interopRequireDefault(require("../model/ProjectListResponse"));

var _ProjectResponse = _interopRequireDefault(require("../model/ProjectResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */
class ProjectsApi {
  constructor(apiClient) {
    this.apiClient = apiClient || _ApiClient.default.instance;
    this.retrieveProject = this.retrieveProject.bind(this);
    this.retrieveProjectWithHttpInfo = this.retrieveProjectWithHttpInfo.bind(this);
    this.retrieveProjects = this.retrieveProjects.bind(this);
    this.retrieveProjectsWithHttpInfo = this.retrieveProjectsWithHttpInfo.bind(this);
  }

  retrieveProjectWithHttpInfo(id) {
    let postBody = null; // verify the required parameter 'id' is set

    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling retrieveProject");
    }

    let pathParams = {
      id: id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer_auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = _ProjectResponse.default;
    return this.apiClient.callApi('/v1/projects/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  }

  retrieveProject(id) {
    return this.retrieveProjectWithHttpInfo(id);
  }

  retrieveProjectsWithHttpInfo(opts) {
    opts = opts || {};
    let postBody = null;
    let pathParams = {};
    let queryParams = {
      page: opts['page']
    };
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer_auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = _ProjectListResponse.default;
    return this.apiClient.callApi('/v1/projects', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  }

  retrieveProjects(opts) {
    return this.retrieveProjectsWithHttpInfo(opts);
  }

}

exports.default = ProjectsApi;