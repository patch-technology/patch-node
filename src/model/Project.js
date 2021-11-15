/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';
import Highlight from './Highlight';
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
    developer,
    averagePricePerTonneCentsUsd,
    remainingMassG,
    technologyType,
    highlights
  ) {
    Project.initialize(
      this,
      id,
      production,
      name,
      description,
      country,
      developer,
      averagePricePerTonneCentsUsd,
      remainingMassG,
      technologyType,
      highlights
    );
  }

  static initialize(
    obj,
    id,
    production,
    name,
    description,
    country,
    developer,
    averagePricePerTonneCentsUsd,
    remainingMassG,
    technologyType,
    highlights
  ) {
    obj['id'] = id;
    obj['production'] = production;
    obj['name'] = name;
    obj['description'] = description;
    obj['country'] = country;
    obj['developer'] = developer;
    obj['average_price_per_tonne_cents_usd'] = averagePricePerTonneCentsUsd;
    obj['remaining_mass_g'] = remainingMassG;
    obj['technology_type'] = technologyType;
    obj['highlights'] = highlights;
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

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
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

      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
      }

      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
      }

      if (data.hasOwnProperty('developer')) {
        obj['developer'] = ApiClient.convertToType(data['developer'], 'String');
      }

      if (data.hasOwnProperty('photos')) {
        obj['photos'] = ApiClient.convertToType(data['photos'], [Photo]);
      }

      if (data.hasOwnProperty('average_price_per_tonne_cents_usd')) {
        obj['average_price_per_tonne_cents_usd'] = ApiClient.convertToType(
          data['average_price_per_tonne_cents_usd'],
          'Number'
        );
      }

      if (data.hasOwnProperty('remaining_mass_g')) {
        obj['remaining_mass_g'] = ApiClient.convertToType(
          data['remaining_mass_g'],
          'Number'
        );
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
    }
    return obj;
  }
}

Project.prototype['id'] = undefined;

Project.prototype['production'] = undefined;

Project.prototype['name'] = undefined;

Project.prototype['description'] = undefined;

Project.prototype['type'] = undefined;

Project.prototype['mechanism'] = undefined;

Project.prototype['country'] = undefined;

Project.prototype['state'] = undefined;

Project.prototype['latitude'] = undefined;

Project.prototype['longitude'] = undefined;

Project.prototype['developer'] = undefined;

Project.prototype['photos'] = undefined;

Project.prototype['average_price_per_tonne_cents_usd'] = undefined;

Project.prototype['remaining_mass_g'] = undefined;

Project.prototype['verifier'] = undefined;

Project.prototype['standard'] = undefined;

Project.prototype['sdgs'] = undefined;

Project.prototype['tagline'] = undefined;

Project.prototype['technology_type'] = undefined;

Project.prototype['highlights'] = undefined;

export default Project;
