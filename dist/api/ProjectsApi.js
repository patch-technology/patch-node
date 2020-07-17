"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _ProjectListResponse = _interopRequireDefault(require("../model/ProjectListResponse"));

var _ProjectResponse = _interopRequireDefault(require("../model/ProjectResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ProjectsApi = /*#__PURE__*/function () {
  function ProjectsApi(apiClient) {
    _classCallCheck(this, ProjectsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  _createClass(ProjectsApi, [{
    key: "retrieveProjectWithHttpInfo",
    value: function retrieveProjectWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling retrieveProject");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearer_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ProjectResponse["default"];
      return this.apiClient.callApi('/v1/projects/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
  }, {
    key: "retrieveProject",
    value: function retrieveProject(id) {
      return this.retrieveProjectWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: "retrieveProjectsWithHttpInfo",
    value: function retrieveProjectsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearer_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ProjectListResponse["default"];
      return this.apiClient.callApi('/v1/projects', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
  }, {
    key: "retrieveProjects",
    value: function retrieveProjects(opts) {
      return this.retrieveProjectsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ProjectsApi;
}();

exports["default"] = ProjectsApi;