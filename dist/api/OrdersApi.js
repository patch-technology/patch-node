"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateOrderRequest = _interopRequireDefault(require("../model/CreateOrderRequest"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _OrderListResponse = _interopRequireDefault(require("../model/OrderListResponse"));

var _OrderResponse = _interopRequireDefault(require("../model/OrderResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OrdersApi = /*#__PURE__*/function () {
  function OrdersApi(apiClient) {
    _classCallCheck(this, OrdersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  _createClass(OrdersApi, [{
    key: "cancelOrderWithHttpInfo",
    value: function cancelOrderWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cancelOrder");
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
      var returnType = _OrderResponse["default"];
      return this.apiClient.callApi('/v1/orders/{id}/cancel', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
  }, {
    key: "cancelOrder",
    value: function cancelOrder(id) {
      return this.cancelOrderWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: "createOrderWithHttpInfo",
    value: function createOrderWithHttpInfo(createOrderRequest) {
      var postBody = opts['']; // verify the required parameter 'createOrderRequest' is set

      if (createOrderRequest === undefined || createOrderRequest === null) {
        throw new Error("Missing the required parameter 'createOrderRequest' when calling createOrder");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearer_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _OrderResponse["default"];
      return this.apiClient.callApi('/v1/orders', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
  }, {
    key: "createOrder",
    value: function createOrder(createOrderRequest) {
      return this.createOrderWithHttpInfo(createOrderRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: "placeOrderWithHttpInfo",
    value: function placeOrderWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling placeOrder");
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
      var returnType = _OrderResponse["default"];
      return this.apiClient.callApi('/v1/orders/{id}/place', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
  }, {
    key: "placeOrder",
    value: function placeOrder(id) {
      return this.placeOrderWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: "retrieveOrderWithHttpInfo",
    value: function retrieveOrderWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling retrieveOrder");
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
      var returnType = _OrderResponse["default"];
      return this.apiClient.callApi('/v1/orders/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
  }, {
    key: "retrieveOrder",
    value: function retrieveOrder(id) {
      return this.retrieveOrderWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: "retrieveOrdersWithHttpInfo",
    value: function retrieveOrdersWithHttpInfo(opts) {
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
      var returnType = _OrderListResponse["default"];
      return this.apiClient.callApi('/v1/orders', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
  }, {
    key: "retrieveOrders",
    value: function retrieveOrders(opts) {
      return this.retrieveOrdersWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return OrdersApi;
}();

exports["default"] = OrdersApi;