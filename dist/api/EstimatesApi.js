"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateMassEstimateRequest = _interopRequireDefault(require("../model/CreateMassEstimateRequest"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _EstimateListResponse = _interopRequireDefault(require("../model/EstimateListResponse"));

var _EstimateResponse = _interopRequireDefault(require("../model/EstimateResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */
class EstimatesApi {
  constructor(apiClient) {
    this.apiClient = apiClient || _ApiClient.default.instance;
    this.createMassEstimate = this.createMassEstimate.bind(this);
    this.createMassEstimateWithHttpInfo = this.createMassEstimateWithHttpInfo.bind(this);
    this.retrieveEstimate = this.retrieveEstimate.bind(this);
    this.retrieveEstimateWithHttpInfo = this.retrieveEstimateWithHttpInfo.bind(this);
    this.retrieveEstimates = this.retrieveEstimates.bind(this);
    this.retrieveEstimatesWithHttpInfo = this.retrieveEstimatesWithHttpInfo.bind(this);
  }

  createMassEstimateWithHttpInfo(createMassEstimateRequest) {
    let postBody = createMassEstimateRequest; // verify the required parameter 'createMassEstimateRequest' is set

    if (createMassEstimateRequest === undefined || createMassEstimateRequest === null) {
      throw new Error("Missing the required parameter 'createMassEstimateRequest' when calling createMassEstimate");
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer_auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = _EstimateResponse.default;
    return this.apiClient.callApi('/v1/estimates/mass', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  }

  createMassEstimate(createMassEstimateRequest) {
    return this.createMassEstimateWithHttpInfo(createMassEstimateRequest);
  }

  retrieveEstimateWithHttpInfo(id) {
    let postBody = null; // verify the required parameter 'id' is set

    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling retrieveEstimate");
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
    let returnType = _EstimateResponse.default;
    return this.apiClient.callApi('/v1/estimates/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  }

  retrieveEstimate(id) {
    return this.retrieveEstimateWithHttpInfo(id);
  }

  retrieveEstimatesWithHttpInfo(opts) {
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
    let returnType = _EstimateListResponse.default;
    return this.apiClient.callApi('/v1/estimates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  }

  retrieveEstimates(opts) {
    return this.retrieveEstimatesWithHttpInfo(opts);
  }

}

exports.default = EstimatesApi;