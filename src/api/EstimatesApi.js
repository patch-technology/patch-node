/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';
import CreateAirShippingEstimateRequest from '../model/CreateAirShippingEstimateRequest';
import CreateBitcoinEstimateRequest from '../model/CreateBitcoinEstimateRequest';
import CreateEthereumEstimateRequest from '../model/CreateEthereumEstimateRequest';
import CreateFlightEstimateRequest from '../model/CreateFlightEstimateRequest';
import CreateHotelEstimateRequest from '../model/CreateHotelEstimateRequest';
import CreateMassEstimateRequest from '../model/CreateMassEstimateRequest';
import CreateRailShippingEstimateRequest from '../model/CreateRailShippingEstimateRequest';
import CreateRoadShippingEstimateRequest from '../model/CreateRoadShippingEstimateRequest';
import CreateSeaShippingEstimateRequest from '../model/CreateSeaShippingEstimateRequest';
import CreateShippingEstimateRequest from '../model/CreateShippingEstimateRequest';
import CreateVehicleEstimateRequest from '../model/CreateVehicleEstimateRequest';
import ErrorResponse from '../model/ErrorResponse';
import EstimateListResponse from '../model/EstimateListResponse';
import EstimateResponse from '../model/EstimateResponse';

export default class EstimatesApi {
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  createAirShippingEstimateWithHttpInfo(createAirShippingEstimateRequest) {
    const _createAirShippingEstimateRequest =
      CreateAirShippingEstimateRequest.constructFromObject(
        createAirShippingEstimateRequest,
        new CreateAirShippingEstimateRequest()
      );

    // verify the required parameter 'createAirShippingEstimateRequest' is set
    if (
      _createAirShippingEstimateRequest === undefined ||
      _createAirShippingEstimateRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'createAirShippingEstimateRequest' when calling createAirShippingEstimate"
      );
    }

    let postBody = _createAirShippingEstimateRequest;
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = EstimateResponse;

    return this.apiClient.callApi(
      '/v1/estimates/shipping/air',
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

  createAirShippingEstimate(createAirShippingEstimateRequest) {
    return this.createAirShippingEstimateWithHttpInfo(
      createAirShippingEstimateRequest
    );
  }

  createBitcoinEstimateWithHttpInfo(createBitcoinEstimateRequest) {
    const _createBitcoinEstimateRequest =
      CreateBitcoinEstimateRequest.constructFromObject(
        createBitcoinEstimateRequest,
        new CreateBitcoinEstimateRequest()
      );

    // verify the required parameter 'createBitcoinEstimateRequest' is set
    if (
      _createBitcoinEstimateRequest === undefined ||
      _createBitcoinEstimateRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'createBitcoinEstimateRequest' when calling createBitcoinEstimate"
      );
    }

    let postBody = _createBitcoinEstimateRequest;
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

    // verify the required parameter 'createEthereumEstimateRequest' is set
    if (
      _createEthereumEstimateRequest === undefined ||
      _createEthereumEstimateRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'createEthereumEstimateRequest' when calling createEthereumEstimate"
      );
    }

    let postBody = _createEthereumEstimateRequest;
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

    // verify the required parameter 'createFlightEstimateRequest' is set
    if (
      _createFlightEstimateRequest === undefined ||
      _createFlightEstimateRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'createFlightEstimateRequest' when calling createFlightEstimate"
      );
    }

    let postBody = _createFlightEstimateRequest;
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

  createHotelEstimateWithHttpInfo(createHotelEstimateRequest) {
    const _createHotelEstimateRequest =
      CreateHotelEstimateRequest.constructFromObject(
        createHotelEstimateRequest,
        new CreateHotelEstimateRequest()
      );

    // verify the required parameter 'createHotelEstimateRequest' is set
    if (
      _createHotelEstimateRequest === undefined ||
      _createHotelEstimateRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'createHotelEstimateRequest' when calling createHotelEstimate"
      );
    }

    let postBody = _createHotelEstimateRequest;
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = EstimateResponse;

    return this.apiClient.callApi(
      '/v1/estimates/hotel',
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

  createHotelEstimate(createHotelEstimateRequest) {
    return this.createHotelEstimateWithHttpInfo(createHotelEstimateRequest);
  }

  createMassEstimateWithHttpInfo(createMassEstimateRequest) {
    const _createMassEstimateRequest =
      CreateMassEstimateRequest.constructFromObject(
        createMassEstimateRequest,
        new CreateMassEstimateRequest()
      );

    // verify the required parameter 'createMassEstimateRequest' is set
    if (
      _createMassEstimateRequest === undefined ||
      _createMassEstimateRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'createMassEstimateRequest' when calling createMassEstimate"
      );
    }

    let postBody = _createMassEstimateRequest;
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

  createRailShippingEstimateWithHttpInfo(createRailShippingEstimateRequest) {
    const _createRailShippingEstimateRequest =
      CreateRailShippingEstimateRequest.constructFromObject(
        createRailShippingEstimateRequest,
        new CreateRailShippingEstimateRequest()
      );

    // verify the required parameter 'createRailShippingEstimateRequest' is set
    if (
      _createRailShippingEstimateRequest === undefined ||
      _createRailShippingEstimateRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'createRailShippingEstimateRequest' when calling createRailShippingEstimate"
      );
    }

    let postBody = _createRailShippingEstimateRequest;
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = EstimateResponse;

    return this.apiClient.callApi(
      '/v1/estimates/shipping/rail',
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

  createRailShippingEstimate(createRailShippingEstimateRequest) {
    return this.createRailShippingEstimateWithHttpInfo(
      createRailShippingEstimateRequest
    );
  }

  createRoadShippingEstimateWithHttpInfo(createRoadShippingEstimateRequest) {
    const _createRoadShippingEstimateRequest =
      CreateRoadShippingEstimateRequest.constructFromObject(
        createRoadShippingEstimateRequest,
        new CreateRoadShippingEstimateRequest()
      );

    // verify the required parameter 'createRoadShippingEstimateRequest' is set
    if (
      _createRoadShippingEstimateRequest === undefined ||
      _createRoadShippingEstimateRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'createRoadShippingEstimateRequest' when calling createRoadShippingEstimate"
      );
    }

    let postBody = _createRoadShippingEstimateRequest;
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = EstimateResponse;

    return this.apiClient.callApi(
      '/v1/estimates/shipping/road',
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

  createRoadShippingEstimate(createRoadShippingEstimateRequest) {
    return this.createRoadShippingEstimateWithHttpInfo(
      createRoadShippingEstimateRequest
    );
  }

  createSeaShippingEstimateWithHttpInfo(createSeaShippingEstimateRequest) {
    const _createSeaShippingEstimateRequest =
      CreateSeaShippingEstimateRequest.constructFromObject(
        createSeaShippingEstimateRequest,
        new CreateSeaShippingEstimateRequest()
      );

    // verify the required parameter 'createSeaShippingEstimateRequest' is set
    if (
      _createSeaShippingEstimateRequest === undefined ||
      _createSeaShippingEstimateRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'createSeaShippingEstimateRequest' when calling createSeaShippingEstimate"
      );
    }

    let postBody = _createSeaShippingEstimateRequest;
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = EstimateResponse;

    return this.apiClient.callApi(
      '/v1/estimates/shipping/sea',
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

  createSeaShippingEstimate(createSeaShippingEstimateRequest) {
    return this.createSeaShippingEstimateWithHttpInfo(
      createSeaShippingEstimateRequest
    );
  }

  createShippingEstimateWithHttpInfo(createShippingEstimateRequest) {
    const _createShippingEstimateRequest =
      CreateShippingEstimateRequest.constructFromObject(
        createShippingEstimateRequest,
        new CreateShippingEstimateRequest()
      );

    // verify the required parameter 'createShippingEstimateRequest' is set
    if (
      _createShippingEstimateRequest === undefined ||
      _createShippingEstimateRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'createShippingEstimateRequest' when calling createShippingEstimate"
      );
    }

    let postBody = _createShippingEstimateRequest;
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

    // verify the required parameter 'createVehicleEstimateRequest' is set
    if (
      _createVehicleEstimateRequest === undefined ||
      _createVehicleEstimateRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'createVehicleEstimateRequest' when calling createVehicleEstimate"
      );
    }

    let postBody = _createVehicleEstimateRequest;
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
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling retrieveEstimate"
      );
    }

    let postBody = null;
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
