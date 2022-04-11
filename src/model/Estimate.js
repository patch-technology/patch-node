/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';
import Order from './Order';

class Estimate {
    constructor(id, production, type) { 
        
        Estimate.initialize(this, id, production, type);
    }

    static initialize(obj, id, production, type) { 
        obj['id'] = id;
        obj['production'] = production;
        obj['type'] = type;
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
            
            if (data.hasOwnProperty('mass_g')) {
                obj['mass_g'] = ApiClient.convertToType(data['mass_g'], 'Number');
            }
            
            if (data.hasOwnProperty('order')) {
                obj['order'] = ApiClient.convertToType(data['order'], Order);
            }
            
        }
        return obj;
    }


}


Estimate.prototype['id'] = undefined;

Estimate.prototype['production'] = undefined;

Estimate.prototype['type'] = undefined;

Estimate.prototype['mass_g'] = undefined;

Estimate.prototype['order'] = undefined;




export default Estimate;


