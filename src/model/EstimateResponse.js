/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';
import Estimate from './Estimate';

class EstimateResponse {
    constructor(success, error, data) { 
        
        EstimateResponse.initialize(this, success, error, data);
    }

    static initialize(obj, success, error, data) { 
        obj['success'] = success;
        obj['error'] = error;
        obj['data'] = data;
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EstimateResponse();

            
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], Object);
            }
            
            if (data.hasOwnProperty('data')) {
                obj['data'] = Estimate.constructFromObject(data['data']);
            }
            
        }
        return obj;
    }


}


EstimateResponse.prototype['success'] = undefined;

EstimateResponse.prototype['error'] = undefined;

EstimateResponse.prototype['data'] = undefined;




export default EstimateResponse;


