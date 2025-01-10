/**
 * Patch API V2
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';
import CreateAirShippingEstimateRequest from '../model/CreateAirShippingEstimateRequest';
import CreateBitcoinEstimateRequest from '../model/CreateBitcoinEstimateRequest';
import CreateEcommerceEstimateRequest from '../model/CreateEcommerceEstimateRequest';
import CreateEthereumEstimateRequest from '../model/CreateEthereumEstimateRequest';
import CreateFlightEstimateRequest from '../model/CreateFlightEstimateRequest';
import CreateHotelEstimateRequest from '../model/CreateHotelEstimateRequest';
import CreateMassEstimateRequest from '../model/CreateMassEstimateRequest';
import CreateRailShippingEstimateRequest from '../model/CreateRailShippingEstimateRequest';
import CreateRoadShippingEstimateRequest from '../model/CreateRoadShippingEstimateRequest';
import CreateSeaShippingEstimateRequest from '../model/CreateSeaShippingEstimateRequest';
import ErrorResponse from '../model/ErrorResponse';
import EstimateListResponse from '../model/EstimateListResponse';
import EstimateResponse from '../model/EstimateResponse';

export default class EstimatesApi {
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  createAirShippingEstimateWithHttpInfo(
    createAirShippingEstimateRequest,
    opts
  ) {
    opts = opts || {};

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
    let headerParams = {
      'Patch-Version': opts['patchVersion']
    };
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

  createAirShippingEstimate(createAirShippingEstimateRequest, opts) {
    return this.createAirShippingEstimateWithHttpInfo(
      createAirShippingEstimateRequest,
      opts
    );
  }

  createBitcoinEstimateWithHttpInfo(createBitcoinEstimateRequest, opts) {
    opts = opts || {};

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
    let headerParams = {
      'Patch-Version': opts['patchVersion']
    };
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

  createBitcoinEstimate(createBitcoinEstimateRequest, opts) {
    return this.createBitcoinEstimateWithHttpInfo(
      createBitcoinEstimateRequest,
      opts
    );
  }

  createEcommerceEstimateWithHttpInfo(createEcommerceEstimateRequest, opts) {
    opts = opts || {};

    const _createEcommerceEstimateRequest =
      CreateEcommerceEstimateRequest.constructFromObject(
        createEcommerceEstimateRequest,
        new CreateEcommerceEstimateRequest()
      );

    // verify the required parameter 'createEcommerceEstimateRequest' is set
    if (
      _createEcommerceEstimateRequest === undefined ||
      _createEcommerceEstimateRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'createEcommerceEstimateRequest' when calling createEcommerceEstimate"
      );
    }

    let postBody = _createEcommerceEstimateRequest;
    let pathParams = {};
    let queryParams = {};
    let headerParams = {
      'Patch-Version': opts['patchVersion']
    };
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = EstimateResponse;

    return this.apiClient.callApi(
      '/v1/estimates/ecommerce',
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

  createEcommerceEstimate(createEcommerceEstimateRequest, opts) {
    return this.createEcommerceEstimateWithHttpInfo(
      createEcommerceEstimateRequest,
      opts
    );
  }

  createEthereumEstimateWithHttpInfo(createEthereumEstimateRequest, opts) {
    opts = opts || {};

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
    let headerParams = {
      'Patch-Version': opts['patchVersion']
    };
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

  createEthereumEstimate(createEthereumEstimateRequest, opts) {
    return this.createEthereumEstimateWithHttpInfo(
      createEthereumEstimateRequest,
      opts
    );
  }

  createFlightEstimateWithHttpInfo(createFlightEstimateRequest, opts) {
    opts = opts || {};

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
    let headerParams = {
      'Patch-Version': opts['patchVersion']
    };
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

  createFlightEstimate(createFlightEstimateRequest, opts) {
    return this.createFlightEstimateWithHttpInfo(
      createFlightEstimateRequest,
      opts
    );
  }

  createHotelEstimateWithHttpInfo(createHotelEstimateRequest, opts) {
    opts = opts || {};

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
    let headerParams = {
      'Patch-Version': opts['patchVersion']
    };
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

  createHotelEstimate(createHotelEstimateRequest, opts) {
    return this.createHotelEstimateWithHttpInfo(
      createHotelEstimateRequest,
      opts
    );
  }

  createMassEstimateWithHttpInfo(createMassEstimateRequest, opts) {
    opts = opts || {};

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
    let headerParams = {
      'Patch-Version': opts['patchVersion']
    };
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

  createMassEstimate(createMassEstimateRequest, opts) {
    return this.createMassEstimateWithHttpInfo(createMassEstimateRequest, opts);
  }

  createRailShippingEstimateWithHttpInfo(
    createRailShippingEstimateRequest,
    opts
  ) {
    opts = opts || {};

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
    let headerParams = {
      'Patch-Version': opts['patchVersion']
    };
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

  createRailShippingEstimate(createRailShippingEstimateRequest, opts) {
    return this.createRailShippingEstimateWithHttpInfo(
      createRailShippingEstimateRequest,
      opts
    );
  }

  createRoadShippingEstimateWithHttpInfo(
    createRoadShippingEstimateRequest,
    opts
  ) {
    opts = opts || {};

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
    let headerParams = {
      'Patch-Version': opts['patchVersion']
    };
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

  createRoadShippingEstimate(createRoadShippingEstimateRequest, opts) {
    return this.createRoadShippingEstimateWithHttpInfo(
      createRoadShippingEstimateRequest,
      opts
    );
  }

  createSeaShippingEstimateWithHttpInfo(
    createSeaShippingEstimateRequest,
    opts
  ) {
    opts = opts || {};

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
    let headerParams = {
      'Patch-Version': opts['patchVersion']
    };
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

  createSeaShippingEstimate(createSeaShippingEstimateRequest, opts) {
    return this.createSeaShippingEstimateWithHttpInfo(
      createSeaShippingEstimateRequest,
      opts
    );
  }

  retrieveEstimateWithHttpInfo(id, opts) {
    opts = opts || {};

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
    let headerParams = {
      'Patch-Version': opts['patchVersion']
    };
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

  retrieveEstimate(id, opts) {
    return this.retrieveEstimateWithHttpInfo(id, opts);
  }

  retrieveEstimatesWithHttpInfo(opts) {
    opts = opts || {};

    let postBody = null;
    let pathParams = {};
    let queryParams = {
      page: opts['page']
    };
    let headerParams = {
      'Patch-Version': opts['patchVersion']
    };
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
