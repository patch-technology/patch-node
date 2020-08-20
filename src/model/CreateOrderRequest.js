/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient'

class CreateOrderRequest {
  constructor(massG) {
    CreateOrderRequest.initialize(this, massG)
  }

  static initialize(obj, massG) {
    obj['mass_g'] = massG
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateOrderRequest()

      if (data.hasOwnProperty('mass_g')) {
        obj['mass_g'] = ApiClient.convertToType(data['mass_g'], 'Number')
      }

      if (data.hasOwnProperty('project_id')) {
        obj['project_id'] = ApiClient.convertToType(
          data['project_id'],
          'String'
        )
      }

      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object)
      }
    }
    return obj
  }
}

CreateOrderRequest.prototype['mass_g'] = undefined

CreateOrderRequest.prototype['project_id'] = undefined

CreateOrderRequest.prototype['metadata'] = undefined

export default CreateOrderRequest
