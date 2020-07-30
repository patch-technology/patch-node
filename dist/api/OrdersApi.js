"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateOrderRequest = _interopRequireDefault(require("../model/CreateOrderRequest"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _OrderListResponse = _interopRequireDefault(require("../model/OrderListResponse"));

var _OrderResponse = _interopRequireDefault(require("../model/OrderResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */
class OrdersApi {
  constructor(apiClient) {
    this.apiClient = apiClient || _ApiClient.default.instance;
    this.cancelOrder = this.cancelOrder.bind(this);
    this.cancelOrderWithHttpInfo = this.cancelOrderWithHttpInfo.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.createOrderWithHttpInfo = this.createOrderWithHttpInfo.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.placeOrderWithHttpInfo = this.placeOrderWithHttpInfo.bind(this);
    this.retrieveOrder = this.retrieveOrder.bind(this);
    this.retrieveOrderWithHttpInfo = this.retrieveOrderWithHttpInfo.bind(this);
    this.retrieveOrders = this.retrieveOrders.bind(this);
    this.retrieveOrdersWithHttpInfo = this.retrieveOrdersWithHttpInfo.bind(this);
  }

  cancelOrderWithHttpInfo(id) {
    let postBody = null; // verify the required parameter 'id' is set

    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling cancelOrder");
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
    let returnType = _OrderResponse.default;
    return this.apiClient.callApi('/v1/orders/{id}/cancel', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  }

  cancelOrder(id) {
    return this.cancelOrderWithHttpInfo(id);
  }

  createOrderWithHttpInfo(createOrderRequest) {
    let postBody = createOrderRequest; // verify the required parameter 'createOrderRequest' is set

    if (createOrderRequest === undefined || createOrderRequest === null) {
      throw new Error("Missing the required parameter 'createOrderRequest' when calling createOrder");
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearer_auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = _OrderResponse.default;
    return this.apiClient.callApi('/v1/orders', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  }

  createOrder(createOrderRequest) {
    return this.createOrderWithHttpInfo(createOrderRequest);
  }

  placeOrderWithHttpInfo(id) {
    let postBody = null; // verify the required parameter 'id' is set

    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling placeOrder");
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
    let returnType = _OrderResponse.default;
    return this.apiClient.callApi('/v1/orders/{id}/place', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  }

  placeOrder(id) {
    return this.placeOrderWithHttpInfo(id);
  }

  retrieveOrderWithHttpInfo(id) {
    let postBody = null; // verify the required parameter 'id' is set

    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling retrieveOrder");
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
    let returnType = _OrderResponse.default;
    return this.apiClient.callApi('/v1/orders/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  }

  retrieveOrder(id) {
    return this.retrieveOrderWithHttpInfo(id);
  }

  retrieveOrdersWithHttpInfo(opts) {
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
    let returnType = _OrderListResponse.default;
    return this.apiClient.callApi('/v1/orders', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  }

  retrieveOrders(opts) {
    return this.retrieveOrdersWithHttpInfo(opts);
  }

}

exports.default = OrdersApi;