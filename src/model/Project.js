/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient'

class Project {
  constructor(id, production, name, description, country, developer) {
    Project.initialize(
      this,
      id,
      production,
      name,
      description,
      country,
      developer
    )
  }

  static initialize(
    obj,
    id,
    production,
    name,
    description,
    country,
    developer
  ) {
    obj['id'] = id
    obj['production'] = production
    obj['name'] = name
    obj['description'] = description
    obj['country'] = country
    obj['developer'] = developer
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Project()

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String')
      }

      if (data.hasOwnProperty('production')) {
        obj['production'] = ApiClient.convertToType(
          data['production'],
          'Boolean'
        )
      }

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String')
      }

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(
          data['description'],
          'String'
        )
      }

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String')
      }

      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String')
      }

      if (data.hasOwnProperty('developer')) {
        obj['developer'] = ApiClient.convertToType(data['developer'], 'String')
      }
    }
    return obj
  }
}

Project.prototype['id'] = undefined

Project.prototype['production'] = undefined

Project.prototype['name'] = undefined

Project.prototype['description'] = undefined

Project.prototype['type'] = undefined

Project.prototype['country'] = undefined

Project.prototype['developer'] = undefined

export default Project
