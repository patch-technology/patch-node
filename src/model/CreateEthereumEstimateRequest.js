/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';

class CreateEthereumEstimateRequest {
  constructor() {
    CreateEthereumEstimateRequest.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateEthereumEstimateRequest();

      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
      }

      if (data.hasOwnProperty('gas_used')) {
        obj['gas_used'] = ApiClient.convertToType(data['gas_used'], 'Number');
      }

      if (data.hasOwnProperty('transaction_value_eth_gwei')) {
        obj['transaction_value_eth_gwei'] = ApiClient.convertToType(
          data['transaction_value_eth_gwei'],
          'Number'
        );
      }

      if (data.hasOwnProperty('average_daily_balance_eth_gwei')) {
        obj['average_daily_balance_eth_gwei'] = ApiClient.convertToType(
          data['average_daily_balance_eth_gwei'],
          'Number'
        );
      }

      if (data.hasOwnProperty('project_id')) {
        obj['project_id'] = ApiClient.convertToType(
          data['project_id'],
          'String'
        );
      }

      if (data.hasOwnProperty('create_order')) {
        obj['create_order'] = ApiClient.convertToType(
          data['create_order'],
          'Boolean'
        );
      }
    }
    return obj;
  }
}

CreateEthereumEstimateRequest.prototype['timestamp'] = undefined;

CreateEthereumEstimateRequest.prototype['gas_used'] = undefined;

CreateEthereumEstimateRequest.prototype['transaction_value_eth_gwei'] =
  undefined;

CreateEthereumEstimateRequest.prototype['average_daily_balance_eth_gwei'] =
  undefined;

CreateEthereumEstimateRequest.prototype['project_id'] = undefined;

CreateEthereumEstimateRequest.prototype['create_order'] = false;

export default CreateEthereumEstimateRequest;
