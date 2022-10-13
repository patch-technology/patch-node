/**
 * Patch API V2
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';
import CreateOrderLineItemRequest from '../model/CreateOrderLineItemRequest';
import DeleteOrderLineItemResponse from '../model/DeleteOrderLineItemResponse';
import ErrorResponse from '../model/ErrorResponse';
import OrderLineItemResponse from '../model/OrderLineItemResponse';
import UpdateOrderLineItemRequest from '../model/UpdateOrderLineItemRequest';

export default class OrderLineItemsApi {
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  createOrderLineItemWithHttpInfo(orderId, createOrderLineItemRequest, opts) {
    opts = opts || {};

    const _createOrderLineItemRequest =
      CreateOrderLineItemRequest.constructFromObject(
        createOrderLineItemRequest,
        new CreateOrderLineItemRequest()
      );

    // verify the required parameter 'orderId' is set
    if (orderId === undefined || orderId === null) {
      throw new Error(
        "Missing the required parameter 'orderId' when calling createOrderLineItem"
      );
    }

    // verify the required parameter 'createOrderLineItemRequest' is set
    if (
      _createOrderLineItemRequest === undefined ||
      _createOrderLineItemRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'createOrderLineItemRequest' when calling createOrderLineItem"
      );
    }

    let postBody = _createOrderLineItemRequest;
    let pathParams = {
      order_id: orderId
    };
    let queryParams = {};
    let headerParams = {
      'Patch-Version': opts['patchVersion']
    };
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = OrderLineItemResponse;

    return this.apiClient.callApi(
      '/v1/orders/{order_id}/line_items',
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

  createOrderLineItem(orderId, createOrderLineItemRequest, opts) {
    return this.createOrderLineItemWithHttpInfo(
      orderId,
      createOrderLineItemRequest,
      opts
    );
  }

  deleteOrderLineItemWithHttpInfo(orderId, serialNumber, opts) {
    opts = opts || {};

    // verify the required parameter 'orderId' is set
    if (orderId === undefined || orderId === null) {
      throw new Error(
        "Missing the required parameter 'orderId' when calling deleteOrderLineItem"
      );
    }

    // verify the required parameter 'serialNumber' is set
    if (serialNumber === undefined || serialNumber === null) {
      throw new Error(
        "Missing the required parameter 'serialNumber' when calling deleteOrderLineItem"
      );
    }

    let postBody = null;
    let pathParams = {
      order_id: orderId,
      serial_number: serialNumber
    };
    let queryParams = {};
    let headerParams = {
      'Patch-Version': opts['patchVersion']
    };
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = DeleteOrderLineItemResponse;

    return this.apiClient.callApi(
      '/v1/orders/{order_id}/line_items/{serial_number}',
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

  deleteOrderLineItem(orderId, serialNumber, opts) {
    return this.deleteOrderLineItemWithHttpInfo(orderId, serialNumber, opts);
  }

  updateOrderLineItemWithHttpInfo(
    orderId,
    serialNumber,
    updateOrderLineItemRequest,
    opts
  ) {
    opts = opts || {};

    const _updateOrderLineItemRequest =
      UpdateOrderLineItemRequest.constructFromObject(
        updateOrderLineItemRequest,
        new UpdateOrderLineItemRequest()
      );

    // verify the required parameter 'orderId' is set
    if (orderId === undefined || orderId === null) {
      throw new Error(
        "Missing the required parameter 'orderId' when calling updateOrderLineItem"
      );
    }

    // verify the required parameter 'serialNumber' is set
    if (serialNumber === undefined || serialNumber === null) {
      throw new Error(
        "Missing the required parameter 'serialNumber' when calling updateOrderLineItem"
      );
    }

    // verify the required parameter 'updateOrderLineItemRequest' is set
    if (
      _updateOrderLineItemRequest === undefined ||
      _updateOrderLineItemRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'updateOrderLineItemRequest' when calling updateOrderLineItem"
      );
    }

    let postBody = _updateOrderLineItemRequest;
    let pathParams = {
      order_id: orderId,
      serial_number: serialNumber
    };
    let queryParams = {};
    let headerParams = {
      'Patch-Version': opts['patchVersion']
    };
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = OrderLineItemResponse;

    return this.apiClient.callApi(
      '/v1/orders/{order_id}/line_items/{serial_number}',
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

  updateOrderLineItem(orderId, serialNumber, updateOrderLineItemRequest, opts) {
    return this.updateOrderLineItemWithHttpInfo(
      orderId,
      serialNumber,
      updateOrderLineItemRequest,
      opts
    );
  }
}
