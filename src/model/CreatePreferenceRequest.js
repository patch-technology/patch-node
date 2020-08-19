/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient'

class CreatePreferenceRequest {
  constructor(projectId) {
    CreatePreferenceRequest.initialize(this, projectId)
  }

  static initialize(obj, projectId) {
    obj['project_id'] = projectId
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreatePreferenceRequest()

      if (data.hasOwnProperty('project_id')) {
        obj['project_id'] = ApiClient.convertToType(
          data['project_id'],
          'String'
        )
      }
    }
    return obj
  }
}

CreatePreferenceRequest.prototype['project_id'] = undefined

export default CreatePreferenceRequest
