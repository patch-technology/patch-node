/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */


import ApiClient from "../ApiClient";
import CreateMassEstimateRequest from '../model/CreateMassEstimateRequest';
import ErrorResponse from '../model/ErrorResponse';
import EstimateListResponse from '../model/EstimateListResponse';
import EstimateResponse from '../model/EstimateResponse';


export default class EstimatesApi {
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
    this.createMassEstimate = this.createMassEstimate.bind(this);
    this.createMassEstimateWithHttpInfo = this.createMassEstimateWithHttpInfo.bind(this);
    this.retrieveEstimate = this.retrieveEstimate.bind(this);
    this.retrieveEstimateWithHttpInfo = this.retrieveEstimateWithHttpInfo.bind(this);
    this.retrieveEstimates = this.retrieveEstimates.bind(this);
    this.retrieveEstimatesWithHttpInfo = this.retrieveEstimatesWithHttpInfo.bind(this);
    }


  createMassEstimateWithHttpInfo(createMassEstimateRequest) {
      
      let postBody = createMassEstimateRequest;


      // verify the required parameter 'createMassEstimateRequest' is set
      if (createMassEstimateRequest === undefined || createMassEstimateRequest === null) {
        throw new Error("Missing the required parameter 'createMassEstimateRequest' when calling createMassEstimate");
      }



      let pathParams = { 
      };
      let queryParams = {
        };
      let headerParams = { 
      };
      let formParams = { 
      };

      let authNames = ['bearer_auth'];
      let contentTypes = ['application/json', ];
      let accepts = ['application/json', ];
      let returnType = EstimateResponse;

      return this.apiClient.callApi(
        '/v1/estimates/mass', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    createMassEstimate(createMassEstimateRequest) {
      return this.createMassEstimateWithHttpInfo(createMassEstimateRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


  retrieveEstimateWithHttpInfo(id) {
      
      let postBody = null;


      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling retrieveEstimate");
      }



      let pathParams = { 
        'id': id
      };
      let queryParams = {
        };
      let headerParams = { 
      };
      let formParams = { 
      };

      let authNames = ['bearer_auth'];
      let contentTypes = [];
      let accepts = ['application/json', ];
      let returnType = EstimateResponse;

      return this.apiClient.callApi(
        '/v1/estimates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    retrieveEstimate(id) {
      return this.retrieveEstimateWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


  retrieveEstimatesWithHttpInfo(opts) {
      
      opts = opts || {};
      
      let postBody = null;




      let pathParams = { 
      };
      let queryParams = {
        'page': opts['page']
          
          
        };
      let headerParams = { 
      };
      let formParams = { 
      };

      let authNames = ['bearer_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EstimateListResponse;

      return this.apiClient.callApi(
        '/v1/estimates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    retrieveEstimates(opts) {
      return this.retrieveEstimatesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
