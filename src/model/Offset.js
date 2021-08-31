/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';

class Offset {
  constructor(
    id,
    allocatedMassG,
    massG,
    priceCentsUsd,
    production,
    retired,
    serialNumber,
    vintageYear,
    projectId
  ) {
    Offset.initialize(
      this,
      id,
      allocatedMassG,
      massG,
      priceCentsUsd,
      production,
      retired,
      serialNumber,
      vintageYear,
      projectId
    );
  }

  static initialize(
    obj,
    id,
    allocatedMassG,
    massG,
    priceCentsUsd,
    production,
    retired,
    serialNumber,
    vintageYear,
    projectId
  ) {
    obj['id'] = id;
    obj['allocated_mass_g'] = allocatedMassG;
    obj['mass_g'] = massG;
    obj['price_cents_usd'] = priceCentsUsd;
    obj['production'] = production;
    obj['retired'] = retired;
    obj['serial_number'] = serialNumber;
    obj['vintage_year'] = vintageYear;
    obj['project_id'] = projectId;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Offset();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('allocated_mass_g')) {
        obj['allocated_mass_g'] = ApiClient.convertToType(
          data['allocated_mass_g'],
          'Number'
        );
      }

      if (data.hasOwnProperty('mass_g')) {
        obj['mass_g'] = ApiClient.convertToType(data['mass_g'], 'Number');
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

      if (data.hasOwnProperty('retired')) {
        obj['retired'] = ApiClient.convertToType(data['retired'], 'Boolean');
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

Offset.prototype['id'] = undefined;

Offset.prototype['allocated_mass_g'] = undefined;

Offset.prototype['mass_g'] = undefined;

Offset.prototype['price_cents_usd'] = undefined;

Offset.prototype['production'] = undefined;

Offset.prototype['retired'] = undefined;

Offset.prototype['serial_number'] = undefined;

Offset.prototype['vintage_year'] = undefined;

Offset.prototype['project_id'] = undefined;

export default Offset;
