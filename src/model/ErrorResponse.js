/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';


class ErrorResponse {
    constructor(success, error, data) { 
        
        ErrorResponse.initialize(this, success, error, data);
    }

    static initialize(obj, success, error, data) { 
        obj['success'] = success;
        obj['error'] = error;
        obj['data'] = data;
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorResponse();

            
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], Object);
            }
            
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
            
        }
        return obj;
    }


}


ErrorResponse.prototype['success'] = undefined;

ErrorResponse.prototype['error'] = undefined;

ErrorResponse.prototype['data'] = undefined;




export default ErrorResponse;


