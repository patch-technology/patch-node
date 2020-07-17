/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';
import Order from './Order';

class Estimate {
    constructor() { 
        
        Estimate.initialize(this);
    }

    static initialize(obj) { 
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Estimate();

            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            
            if (data.hasOwnProperty('production')) {
                obj['production'] = ApiClient.convertToType(data['production'], 'Boolean');
            }
            
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            
            if (data.hasOwnProperty('order')) {
                obj['order'] = Order.constructFromObject(data['order']);
            }
            
        }
        return obj;
    }


}


Estimate.prototype['id'] = undefined;

Estimate.prototype['production'] = undefined;

Estimate.prototype['type'] = undefined;

Estimate.prototype['order'] = undefined;




export default Estimate;


