/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from "../ApiClient";
import CreateOrderRequest from "../model/CreateOrderRequest";
import ErrorResponse from "../model/ErrorResponse";
import OrderListResponse from "../model/OrderListResponse";
import OrderResponse from "../model/OrderResponse";

export default class OrdersApi {
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
    this.cancelOrder = this.cancelOrder.bind(this);
    this.cancelOrderWithHttpInfo = this.cancelOrderWithHttpInfo.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.createOrderWithHttpInfo = this.createOrderWithHttpInfo.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.placeOrderWithHttpInfo = this.placeOrderWithHttpInfo.bind(this);
    this.retrieveOrder = this.retrieveOrder.bind(this);
    this.retrieveOrderWithHttpInfo = this.retrieveOrderWithHttpInfo.bind(this);
    this.retrieveOrders = this.retrieveOrders.bind(this);
    this.retrieveOrdersWithHttpInfo = this.retrieveOrdersWithHttpInfo.bind(
      this
    );
  }

  cancelOrderWithHttpInfo(id) {
    let postBody = null;

    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling cancelOrder"
      );
    }

    let pathParams = {
      id: id,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["bearer_auth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = OrderResponse;

    return this.apiClient.callApi(
      "/v1/orders/{id}/cancel",
      "PATCH",
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

  cancelOrder(id) {
    return this.cancelOrderWithHttpInfo(id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  createOrderWithHttpInfo(createOrderRequest) {
    let postBody = createOrderRequest;

    // verify the required parameter 'createOrderRequest' is set
    if (createOrderRequest === undefined || createOrderRequest === null) {
      throw new Error(
        "Missing the required parameter 'createOrderRequest' when calling createOrder"
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["bearer_auth"];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = OrderResponse;

    return this.apiClient.callApi(
      "/v1/orders",
      "POST",
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

  createOrder(createOrderRequest) {
    return this.createOrderWithHttpInfo(createOrderRequest).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  placeOrderWithHttpInfo(id) {
    let postBody = null;

    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling placeOrder"
      );
    }

    let pathParams = {
      id: id,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["bearer_auth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = OrderResponse;

    return this.apiClient.callApi(
      "/v1/orders/{id}/place",
      "PATCH",
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

  placeOrder(id) {
    return this.placeOrderWithHttpInfo(id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  retrieveOrderWithHttpInfo(id) {
    let postBody = null;

    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling retrieveOrder"
      );
    }

    let pathParams = {
      id: id,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["bearer_auth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = OrderResponse;

    return this.apiClient.callApi(
      "/v1/orders/{id}",
      "GET",
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

  retrieveOrder(id) {
    return this.retrieveOrderWithHttpInfo(id).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  retrieveOrdersWithHttpInfo(opts) {
    opts = opts || {};

    let postBody = null;

    let pathParams = {};
    let queryParams = {
      page: opts["page"],
    };
    let headerParams = {};
    let formParams = {};

    let authNames = ["bearer_auth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = OrderListResponse;

    return this.apiClient.callApi(
      "/v1/orders",
      "GET",
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
    return this.retrieveOrdersWithHttpInfo(opts).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }
}
