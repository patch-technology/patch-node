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
    this.createPreference = this.createPreference.bind(this);
    this.createPreferenceWithHttpInfo =
      this.createPreferenceWithHttpInfo.bind(this);
    this.deletePreference = this.deletePreference.bind(this);
    this.deletePreferenceWithHttpInfo =
      this.deletePreferenceWithHttpInfo.bind(this);
    this.retrievePreference = this.retrievePreference.bind(this);
    this.retrievePreferenceWithHttpInfo =
      this.retrievePreferenceWithHttpInfo.bind(this);
    this.retrievePreferences = this.retrievePreferences.bind(this);
    this.retrievePreferencesWithHttpInfo =
      this.retrievePreferencesWithHttpInfo.bind(this);
  }

  createPreferenceWithHttpInfo() {
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

  createPreference() {
    return this.createPreferenceWithHttpInfo();
  }

  deletePreferenceWithHttpInfo() {
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

  deletePreference() {
    return this.deletePreferenceWithHttpInfo();
  }

  retrievePreferenceWithHttpInfo() {
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

  retrievePreference() {
    return this.retrievePreferenceWithHttpInfo();
  }

  retrievePreferencesWithHttpInfo() {
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

  retrievePreferences() {
    return this.retrievePreferencesWithHttpInfo();
  }
}
