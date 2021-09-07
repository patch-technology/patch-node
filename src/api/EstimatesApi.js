/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';
import CreateBitcoinEstimateRequest from '../model/CreateBitcoinEstimateRequest';
import CreateEthereumEstimateRequest from '../model/CreateEthereumEstimateRequest';
import CreateFlightEstimateRequest from '../model/CreateFlightEstimateRequest';
import CreateMassEstimateRequest from '../model/CreateMassEstimateRequest';
import CreateShippingEstimateRequest from '../model/CreateShippingEstimateRequest';
import CreateVehicleEstimateRequest from '../model/CreateVehicleEstimateRequest';
import ErrorResponse from '../model/ErrorResponse';
import EstimateListResponse from '../model/EstimateListResponse';
import EstimateResponse from '../model/EstimateResponse';

export default class EstimatesApi {
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  createBitcoinEstimateWithHttpInfo(createBitcoinEstimateRequest) {
    const _createBitcoinEstimateRequest =
      CreateBitcoinEstimateRequest.constructFromObject(
        createBitcoinEstimateRequest,
        new CreateBitcoinEstimateRequest()
      );
    let postBody = _createBitcoinEstimateRequest;

    // verify the required parameter 'createBitcoinEstimateRequest' is set
    if (
      _createBitcoinEstimateRequest === undefined ||
      _createBitcoinEstimateRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'createBitcoinEstimateRequest' when calling createBitcoinEstimate"
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = EstimateResponse;

    return this.apiClient.callApi(
      '/v1/estimates/crypto/btc',
      'POST',
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

  createBitcoinEstimate(createBitcoinEstimateRequest) {
    return this.createBitcoinEstimateWithHttpInfo(createBitcoinEstimateRequest);
  }

  createEthereumEstimateWithHttpInfo(createEthereumEstimateRequest) {
    const _createEthereumEstimateRequest =
      CreateEthereumEstimateRequest.constructFromObject(
        createEthereumEstimateRequest,
        new CreateEthereumEstimateRequest()
      );
    let postBody = _createEthereumEstimateRequest;

    // verify the required parameter 'createEthereumEstimateRequest' is set
    if (
      _createEthereumEstimateRequest === undefined ||
      _createEthereumEstimateRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'createEthereumEstimateRequest' when calling createEthereumEstimate"
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = EstimateResponse;

    return this.apiClient.callApi(
      '/v1/estimates/crypto/eth',
      'POST',
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

  createEthereumEstimate(createEthereumEstimateRequest) {
    return this.createEthereumEstimateWithHttpInfo(
      createEthereumEstimateRequest
    );
  }

  createFlightEstimateWithHttpInfo(createFlightEstimateRequest) {
    const _createFlightEstimateRequest =
      CreateFlightEstimateRequest.constructFromObject(
        createFlightEstimateRequest,
        new CreateFlightEstimateRequest()
      );
    let postBody = _createFlightEstimateRequest;

    // verify the required parameter 'createFlightEstimateRequest' is set
    if (
      _createFlightEstimateRequest === undefined ||
      _createFlightEstimateRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'createFlightEstimateRequest' when calling createFlightEstimate"
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = EstimateResponse;

    return this.apiClient.callApi(
      '/v1/estimates/flight',
      'POST',
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

  createFlightEstimate(createFlightEstimateRequest) {
    return this.createFlightEstimateWithHttpInfo(createFlightEstimateRequest);
  }

  createMassEstimateWithHttpInfo(createMassEstimateRequest) {
    const _createMassEstimateRequest =
      CreateMassEstimateRequest.constructFromObject(
        createMassEstimateRequest,
        new CreateMassEstimateRequest()
      );
    let postBody = _createMassEstimateRequest;

    // verify the required parameter 'createMassEstimateRequest' is set
    if (
      _createMassEstimateRequest === undefined ||
      _createMassEstimateRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'createMassEstimateRequest' when calling createMassEstimate"
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = EstimateResponse;

    return this.apiClient.callApi(
      '/v1/estimates/mass',
      'POST',
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

  createMassEstimate(createMassEstimateRequest) {
    return this.createMassEstimateWithHttpInfo(createMassEstimateRequest);
  }

  createShippingEstimateWithHttpInfo(createShippingEstimateRequest) {
    const _createShippingEstimateRequest =
      CreateShippingEstimateRequest.constructFromObject(
        createShippingEstimateRequest,
        new CreateShippingEstimateRequest()
      );
    let postBody = _createShippingEstimateRequest;

    // verify the required parameter 'createShippingEstimateRequest' is set
    if (
      _createShippingEstimateRequest === undefined ||
      _createShippingEstimateRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'createShippingEstimateRequest' when calling createShippingEstimate"
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = EstimateResponse;

    return this.apiClient.callApi(
      '/v1/estimates/shipping',
      'POST',
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

  createShippingEstimate(createShippingEstimateRequest) {
    return this.createShippingEstimateWithHttpInfo(
      createShippingEstimateRequest
    );
  }

  createVehicleEstimateWithHttpInfo(createVehicleEstimateRequest) {
    const _createVehicleEstimateRequest =
      CreateVehicleEstimateRequest.constructFromObject(
        createVehicleEstimateRequest,
        new CreateVehicleEstimateRequest()
      );
    let postBody = _createVehicleEstimateRequest;

    // verify the required parameter 'createVehicleEstimateRequest' is set
    if (
      _createVehicleEstimateRequest === undefined ||
      _createVehicleEstimateRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'createVehicleEstimateRequest' when calling createVehicleEstimate"
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = EstimateResponse;

    return this.apiClient.callApi(
      '/v1/estimates/vehicle',
      'POST',
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

  createVehicleEstimate(createVehicleEstimateRequest) {
    return this.createVehicleEstimateWithHttpInfo(createVehicleEstimateRequest);
  }

  retrieveEstimateWithHttpInfo(id) {
    let postBody = null;

    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling retrieveEstimate"
      );
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
    let returnType = EstimateResponse;

    return this.apiClient.callApi(
      '/v1/estimates/{id}',
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
    let returnType = EstimateListResponse;

    return this.apiClient.callApi(
      '/v1/estimates',
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

  retrieveEstimates(opts) {
    return this.retrieveEstimatesWithHttpInfo(opts);
  }
}
