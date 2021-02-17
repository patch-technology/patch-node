/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';
import Photo from './Photo';
import Sdg from './Sdg';
import Standard from './Standard';

class Project {
  constructor(
    id,
    production,
    name,
    description,
    country,
    developer,
    averagePricePerTonneCentsUsd,
    remainingMassG
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
      remainingMassG
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
    remainingMassG
  ) {
    obj['id'] = id;
    obj['production'] = production;
    obj['name'] = name;
    obj['description'] = description;
    obj['country'] = country;
    obj['developer'] = developer;
    obj['average_price_per_tonne_cents_usd'] = averagePricePerTonneCentsUsd;
    obj['remaining_mass_g'] = remainingMassG;
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

      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
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

      if (data.hasOwnProperty('standard')) {
        obj['standard'] = ApiClient.convertToType(data['standard'], Standard);
      }

      if (data.hasOwnProperty('sdgs')) {
        obj['sdgs'] = ApiClient.convertToType(data['sdgs'], [Sdg]);
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

Project.prototype['country'] = undefined;

Project.prototype['developer'] = undefined;

Project.prototype['photos'] = undefined;

Project.prototype['average_price_per_tonne_cents_usd'] = undefined;

Project.prototype['remaining_mass_g'] = undefined;

Project.prototype['standard'] = undefined;

Project.prototype['sdgs'] = undefined;

export default Project;
