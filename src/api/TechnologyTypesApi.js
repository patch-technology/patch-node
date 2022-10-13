/**
 * Patch API V2
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';
import TechnologyTypeListResponse from '../model/TechnologyTypeListResponse';

export default class TechnologyTypesApi {
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  retrieveTechnologyTypesWithHttpInfo(opts) {
    opts = opts || {};

    let postBody = null;
    let pathParams = {};
    let queryParams = {};
    let headerParams = {
      'Patch-Version': opts['patchVersion']
    };
    let formParams = {};

    let authNames = ['bearer_auth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = TechnologyTypeListResponse;

    return this.apiClient.callApi(
      '/v1/projects/technology_types',
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

  retrieveTechnologyTypes(opts) {
    return this.retrieveTechnologyTypesWithHttpInfo(opts);
  }
}
