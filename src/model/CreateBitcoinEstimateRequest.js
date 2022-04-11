/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';


class CreateBitcoinEstimateRequest {
    constructor() { 
        
        CreateBitcoinEstimateRequest.initialize(this);
    }

    static initialize(obj) { 
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateBitcoinEstimateRequest();

            
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
            
            if (data.hasOwnProperty('transaction_value_btc_sats')) {
                obj['transaction_value_btc_sats'] = ApiClient.convertToType(data['transaction_value_btc_sats'], 'Number');
            }
            
            if (data.hasOwnProperty('average_daily_balance_btc_sats')) {
                obj['average_daily_balance_btc_sats'] = ApiClient.convertToType(data['average_daily_balance_btc_sats'], 'Number');
            }
            
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
            
            if (data.hasOwnProperty('create_order')) {
                obj['create_order'] = ApiClient.convertToType(data['create_order'], 'Boolean');
            }
            
        }
        return obj;
    }


}


CreateBitcoinEstimateRequest.prototype['timestamp'] = undefined;

CreateBitcoinEstimateRequest.prototype['transaction_value_btc_sats'] = undefined;

CreateBitcoinEstimateRequest.prototype['average_daily_balance_btc_sats'] = undefined;

CreateBitcoinEstimateRequest.prototype['project_id'] = undefined;

CreateBitcoinEstimateRequest.prototype['create_order'] = false;




export default CreateBitcoinEstimateRequest;


