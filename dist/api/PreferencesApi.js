"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreatePreferenceRequest = _interopRequireDefault(require("../model/CreatePreferenceRequest"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _PreferenceListResponse = _interopRequireDefault(require("../model/PreferenceListResponse"));

var _PreferenceResponse = _interopRequireDefault(require("../model/PreferenceResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PreferencesApi = /*#__PURE__*/function () {
  function PreferencesApi(apiClient) {
    _classCallCheck(this, PreferencesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  _createClass(PreferencesApi, [{
    key: "createPreferenceWithHttpInfo",
    value: function createPreferenceWithHttpInfo(createPreferenceRequest) {
      var postBody = opts['']; // verify the required parameter 'createPreferenceRequest' is set

      if (createPreferenceRequest === undefined || createPreferenceRequest === null) {
        throw new Error("Missing the required parameter 'createPreferenceRequest' when calling createPreference");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearer_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PreferenceResponse["default"];
      return this.apiClient.callApi('/v1/preferences', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
  }, {
    key: "createPreference",
    value: function createPreference(createPreferenceRequest) {
      return this.createPreferenceWithHttpInfo(createPreferenceRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: "deletePreferenceWithHttpInfo",
    value: function deletePreferenceWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deletePreference");
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
      var returnType = _PreferenceResponse["default"];
      return this.apiClient.callApi('/v1/preferences/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
  }, {
    key: "deletePreference",
    value: function deletePreference(id) {
      return this.deletePreferenceWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: "retrievePreferenceWithHttpInfo",
    value: function retrievePreferenceWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling retrievePreference");
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
      var returnType = _PreferenceResponse["default"];
      return this.apiClient.callApi('/v1/preferences/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
  }, {
    key: "retrievePreference",
    value: function retrievePreference(id) {
      return this.retrievePreferenceWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: "retrievePreferencesWithHttpInfo",
    value: function retrievePreferencesWithHttpInfo(opts) {
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
      var returnType = _PreferenceListResponse["default"];
      return this.apiClient.callApi('/v1/preferences', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
  }, {
    key: "retrievePreferences",
    value: function retrievePreferences(opts) {
      return this.retrievePreferencesWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PreferencesApi;
}();

exports["default"] = PreferencesApi;