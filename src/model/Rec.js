/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';

class Rec {
  constructor(
    id,
    allocatedEnergyWh,
    energyWh,
    priceCentsUsd,
    production,
    serialNumber,
    vintageYear,
    projectId
  ) {
    Rec.initialize(
      this,
      id,
      allocatedEnergyWh,
      energyWh,
      priceCentsUsd,
      production,
      serialNumber,
      vintageYear,
      projectId
    );
  }

  static initialize(
    obj,
    id,
    allocatedEnergyWh,
    energyWh,
    priceCentsUsd,
    production,
    serialNumber,
    vintageYear,
    projectId
  ) {
    obj['id'] = id;
    obj['allocated_energy_wh'] = allocatedEnergyWh;
    obj['energy_wh'] = energyWh;
    obj['price_cents_usd'] = priceCentsUsd;
    obj['production'] = production;
    obj['serial_number'] = serialNumber;
    obj['vintage_year'] = vintageYear;
    obj['project_id'] = projectId;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Rec();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('allocated_energy_wh')) {
        obj['allocated_energy_wh'] = ApiClient.convertToType(
          data['allocated_energy_wh'],
          'Number'
        );
      }

      if (data.hasOwnProperty('energy_wh')) {
        obj['energy_wh'] = ApiClient.convertToType(data['energy_wh'], 'Number');
      }

      if (data.hasOwnProperty('price_cents_usd')) {
        obj['price_cents_usd'] = ApiClient.convertToType(
          data['price_cents_usd'],
          'Number'
        );
      }

      if (data.hasOwnProperty('production')) {
        obj['production'] = ApiClient.convertToType(
          data['production'],
          'Boolean'
        );
      }

      if (data.hasOwnProperty('serial_number')) {
        obj['serial_number'] = ApiClient.convertToType(
          data['serial_number'],
          'String'
        );
      }

      if (data.hasOwnProperty('vintage_year')) {
        obj['vintage_year'] = ApiClient.convertToType(
          data['vintage_year'],
          'Number'
        );
      }

      if (data.hasOwnProperty('project_id')) {
        obj['project_id'] = ApiClient.convertToType(
          data['project_id'],
          'String'
        );
      }
    }
    return obj;
  }
}

Rec.prototype['id'] = undefined;

Rec.prototype['allocated_energy_wh'] = undefined;

Rec.prototype['energy_wh'] = undefined;

Rec.prototype['price_cents_usd'] = undefined;

Rec.prototype['production'] = undefined;

Rec.prototype['serial_number'] = undefined;

Rec.prototype['vintage_year'] = undefined;

Rec.prototype['project_id'] = undefined;

export default Rec;
