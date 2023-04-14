/**
 * Patch API V2
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';
import Disclaimer from './Disclaimer';
import Highlight from './Highlight';
import Inventory from './Inventory';
import Photo from './Photo';
import Sdg from './Sdg';
import Standard from './Standard';
import TechnologyType from './TechnologyType';

class Project {
  constructor(
    id,
    production,
    name,
    description,
    country,
    projectPartner,
    technologyType,
    highlights,
    inventory
  ) {
    Project.initialize(
      this,
      id,
      production,
      name,
      description,
      country,
      projectPartner,
      technologyType,
      highlights,
      inventory
    );
  }

  static initialize(
    obj,
    id,
    production,
    name,
    description,
    country,
    projectPartner,
    technologyType,
    highlights,
    inventory
  ) {
    obj['id'] = id;
    obj['production'] = production;
    obj['name'] = name;
    obj['description'] = description;
    obj['country'] = country;
    obj['project_partner'] = projectPartner;
    obj['technology_type'] = technologyType;
    obj['highlights'] = highlights;
    obj['inventory'] = inventory;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Project();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('production')) {
        obj['production'] = ApiClient.convertToType(
          data['production'],
          'Boolean'
        );
      }

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(
          data['description'],
          'String'
        );
      }

      if (data.hasOwnProperty('mechanism')) {
        obj['mechanism'] = ApiClient.convertToType(data['mechanism'], 'String');
      }

      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }

      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }

      if (data.hasOwnProperty('issuance_type')) {
        obj['issuance_type'] = ApiClient.convertToType(
          data['issuance_type'],
          'String'
        );
      }

      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
      }

      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
      }

      if (data.hasOwnProperty('project_partner')) {
        obj['project_partner'] = ApiClient.convertToType(
          data['project_partner'],
          'String'
        );
      }

      if (data.hasOwnProperty('photos')) {
        obj['photos'] = ApiClient.convertToType(data['photos'], [Photo]);
      }

      if (data.hasOwnProperty('verifier')) {
        obj['verifier'] = ApiClient.convertToType(data['verifier'], 'String');
      }

      if (data.hasOwnProperty('standard')) {
        obj['standard'] = ApiClient.convertToType(data['standard'], Standard);
      }

      if (data.hasOwnProperty('sdgs')) {
        obj['sdgs'] = ApiClient.convertToType(data['sdgs'], [Sdg]);
      }

      if (data.hasOwnProperty('tagline')) {
        obj['tagline'] = ApiClient.convertToType(data['tagline'], 'String');
      }

      if (data.hasOwnProperty('technology_type')) {
        obj['technology_type'] = TechnologyType.constructFromObject(
          data['technology_type']
        );
      }

      if (data.hasOwnProperty('highlights')) {
        obj['highlights'] = ApiClient.convertToType(data['highlights'], [
          Highlight
        ]);
      }

      if (data.hasOwnProperty('inventory')) {
        obj['inventory'] = ApiClient.convertToType(data['inventory'], [
          Inventory
        ]);
      }

      if (data.hasOwnProperty('disclaimers')) {
        obj['disclaimers'] = ApiClient.convertToType(data['disclaimers'], [
          Disclaimer
        ]);
      }
    }
    return obj;
  }
}

Project.prototype['id'] = undefined;

Project.prototype['production'] = undefined;

Project.prototype['name'] = undefined;

Project.prototype['description'] = undefined;

Project.prototype['mechanism'] = undefined;

Project.prototype['country'] = undefined;

Project.prototype['state'] = undefined;

Project.prototype['issuance_type'] = undefined;

Project.prototype['latitude'] = undefined;

Project.prototype['longitude'] = undefined;

Project.prototype['project_partner'] = undefined;

Project.prototype['photos'] = undefined;

Project.prototype['verifier'] = undefined;

Project.prototype['standard'] = undefined;

Project.prototype['sdgs'] = undefined;

Project.prototype['tagline'] = undefined;

Project.prototype['technology_type'] = undefined;

Project.prototype['highlights'] = undefined;

Project.prototype['inventory'] = undefined;

Project.prototype['disclaimers'] = undefined;

export default Project;
