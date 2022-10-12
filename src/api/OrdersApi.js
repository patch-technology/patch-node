/**
 * Patch API V2
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';
import CreateOrderRequest from '../model/CreateOrderRequest';
import DeleteOrderResponse from '../model/DeleteOrderResponse';
import ErrorResponse from '../model/ErrorResponse';
import OrderListResponse from '../model/OrderListResponse';
import OrderResponse from '../model/OrderResponse';
import PlaceOrderRequest from '../model/PlaceOrderRequest';

export default class OrdersApi {
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  cancelOrderWithHttpInfo(id, opts) {
    opts = opts || {};

    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling cancelOrder"
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
    let returnType = OrderResponse;

    return this.apiClient.callApi(
      '/v1/orders/{id}/cancel',
      'PATCH',
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

  cancelOrder(id, opts) {
    return this.cancelOrderWithHttpInfo(id, opts);
  }

  createOrderWithHttpInfo(createOrderRequest, opts) {
    opts = opts || {};

    const _createOrderRequest = CreateOrderRequest.constructFromObject(
      createOrderRequest,
      new CreateOrderRequest()
    );

    // verify the required parameter 'createOrderRequest' is set
    if (_createOrderRequest === undefined || _createOrderRequest === null) {
      throw new Error(
        "Missing the required parameter 'createOrderRequest' when calling createOrder"
      );
    }

    let postBody = _createOrderRequest;
    let pathParams = {};
    let queryParams = {};
    let headerParams = {
      'Patch-Version': opts['patchVersion']
    };
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = OrderResponse;

    return this.apiClient.callApi(
      '/v1/orders',
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

  createOrder(createOrderRequest, opts) {
    return this.createOrderWithHttpInfo(createOrderRequest, opts);
  }

  deleteOrderWithHttpInfo(uid, opts) {
    opts = opts || {};

    // verify the required parameter 'uid' is set
    if (uid === undefined || uid === null) {
      throw new Error(
        "Missing the required parameter 'uid' when calling deleteOrder"
      );
    }

    let postBody = null;
    let pathParams = {
      uid: uid
    };
    let queryParams = {};
    let headerParams = {
      'Patch-Version': opts['patchVersion']
    };
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = DeleteOrderResponse;

    return this.apiClient.callApi(
      '/v1/orders/{uid}',
      'DELETE',
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

  deleteOrder(uid, opts) {
    return this.deleteOrderWithHttpInfo(uid, opts);
  }

  placeOrderWithHttpInfo(id, opts) {
    opts = opts || {};

    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling placeOrder"
      );
    }

    let postBody = opts;
    let pathParams = {
      id: id
    };
    let queryParams = {};
    let headerParams = {
      'Patch-Version': opts['patchVersion']
    };
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = OrderResponse;

    return this.apiClient.callApi(
      '/v1/orders/{id}/place',
      'PATCH',
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

  placeOrder(id, opts) {
    return this.placeOrderWithHttpInfo(id, opts);
  }

  retrieveOrderWithHttpInfo(id, opts) {
    opts = opts || {};

    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling retrieveOrder"
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
    let returnType = OrderResponse;

    return this.apiClient.callApi(
      '/v1/orders/{id}',
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

  retrieveOrder(id, opts) {
    return this.retrieveOrderWithHttpInfo(id, opts);
  }

  retrieveOrdersWithHttpInfo(opts) {
    opts = opts || {};

    let postBody = null;
    let pathParams = {};
    let queryParams = {
      page: opts['page'],

      metadata: opts['metadata'],

      'metadata[example1]': opts['metadataExample1'],

      'metadata[example2]': opts['metadataExample2']
    };
    let headerParams = {
      'Patch-Version': opts['patchVersion']
    };
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = OrderListResponse;

    return this.apiClient.callApi(
      '/v1/orders',
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

  retrieveOrders(opts) {
    return this.retrieveOrdersWithHttpInfo(opts);
  }
}
