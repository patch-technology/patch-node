"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateMassEstimateRequest = _interopRequireDefault(require("../model/CreateMassEstimateRequest"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _EstimateListResponse = _interopRequireDefault(require("../model/EstimateListResponse"));

var _EstimateResponse = _interopRequireDefault(require("../model/EstimateResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EstimatesApi = /*#__PURE__*/function () {
  function EstimatesApi(apiClient) {
    _classCallCheck(this, EstimatesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  _createClass(EstimatesApi, [{
    key: "createMassEstimateWithHttpInfo",
    value: function createMassEstimateWithHttpInfo(createMassEstimateRequest) {
      var postBody = opts['']; // verify the required parameter 'createMassEstimateRequest' is set

      if (createMassEstimateRequest === undefined || createMassEstimateRequest === null) {
        throw new Error("Missing the required parameter 'createMassEstimateRequest' when calling createMassEstimate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearer_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EstimateResponse["default"];
      return this.apiClient.callApi('/v1/estimates/mass', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
  }, {
    key: "createMassEstimate",
    value: function createMassEstimate(createMassEstimateRequest) {
      return this.createMassEstimateWithHttpInfo(createMassEstimateRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: "retrieveEstimateWithHttpInfo",
    value: function retrieveEstimateWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling retrieveEstimate");
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
      var returnType = _EstimateResponse["default"];
      return this.apiClient.callApi('/v1/estimates/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
  }, {
    key: "retrieveEstimate",
    value: function retrieveEstimate(id) {
      return this.retrieveEstimateWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: "retrieveEstimatesWithHttpInfo",
    value: function retrieveEstimatesWithHttpInfo(opts) {
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
      var returnType = _EstimateListResponse["default"];
      return this.apiClient.callApi('/v1/estimates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
  }, {
    key: "retrieveEstimates",
    value: function retrieveEstimates(opts) {
      return this.retrieveEstimatesWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return EstimatesApi;
}();

exports["default"] = EstimatesApi;