/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';
import MetaIndexObject from './MetaIndexObject';import Order from './Order';

class OrderListResponse {
    constructor(success, error, data, meta) { 
        
        OrderListResponse.initialize(this, success, error, data, meta);
    }

    static initialize(obj, success, error, data, meta) { 
        obj['success'] = success;
        obj['error'] = error;
        obj['data'] = data;
        obj['meta'] = meta;
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderListResponse();

            
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], Object);
            }
            
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Order]);
            }
            
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaIndexObject.constructFromObject(data['meta']);
            }
            
        }
        return obj;
    }


}


OrderListResponse.prototype['success'] = undefined;

OrderListResponse.prototype['error'] = undefined;

OrderListResponse.prototype['data'] = undefined;

OrderListResponse.prototype['meta'] = undefined;




export default OrderListResponse;


