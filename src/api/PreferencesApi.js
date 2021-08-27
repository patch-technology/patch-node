/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';
import CreatePreferenceRequest from '../model/CreatePreferenceRequest';
import ErrorResponse from '../model/ErrorResponse';
import PreferenceListResponse from '../model/PreferenceListResponse';
import PreferenceResponse from '../model/PreferenceResponse';

export default class PreferencesApi {
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  createPreferenceWithHttpInfo(createPreferenceRequest) {
    let postBody = createPreferenceRequest;

    // verify the required parameter 'createPreferenceRequest' is set
    if (
      createPreferenceRequest === undefined ||
      createPreferenceRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'createPreferenceRequest' when calling createPreference"
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = PreferenceResponse;

    return this.apiClient.callApi(
      '/v1/preferences',
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

  createPreference(createPreferenceRequest) {
    return this.createPreferenceWithHttpInfo(createPreferenceRequest);
  }

  deletePreferenceWithHttpInfo(id) {
    let postBody = null;

    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling deletePreference"
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
    let returnType = PreferenceResponse;

    return this.apiClient.callApi(
      '/v1/preferences/{id}',
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

  deletePreference(id) {
    return this.deletePreferenceWithHttpInfo(id);
  }

  retrievePreferenceWithHttpInfo(id) {
    let postBody = null;

    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling retrievePreference"
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
    let returnType = PreferenceResponse;

    return this.apiClient.callApi(
      '/v1/preferences/{id}',
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

  retrievePreference(id) {
    return this.retrievePreferenceWithHttpInfo(id);
  }

  retrievePreferencesWithHttpInfo(opts) {
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
    let returnType = PreferenceListResponse;

    return this.apiClient.callApi(
      '/v1/preferences',
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

  retrievePreferences(opts) {
    return this.retrievePreferencesWithHttpInfo(opts);
  }
}
