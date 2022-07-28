/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';


class CreateAirShippingEstimateRequest {
    constructor() { 
        
        CreateAirShippingEstimateRequest.initialize(this);
    }

    static initialize(obj) { 
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAirShippingEstimateRequest();

            
            if (data.hasOwnProperty('destination_airport')) {
                obj['destination_airport'] = ApiClient.convertToType(data['destination_airport'], 'String');
            }
            
            if (data.hasOwnProperty('origin_airport')) {
                obj['origin_airport'] = ApiClient.convertToType(data['origin_airport'], 'String');
            }
            
            if (data.hasOwnProperty('aircraft_code')) {
                obj['aircraft_code'] = ApiClient.convertToType(data['aircraft_code'], 'String');
            }
            
            if (data.hasOwnProperty('aircraft_type')) {
                obj['aircraft_type'] = ApiClient.convertToType(data['aircraft_type'], 'String');
            }
            
            if (data.hasOwnProperty('freight_mass_g')) {
                obj['freight_mass_g'] = ApiClient.convertToType(data['freight_mass_g'], 'Number');
            }
            
            if (data.hasOwnProperty('emissions_scope')) {
                obj['emissions_scope'] = ApiClient.convertToType(data['emissions_scope'], 'String');
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


CreateAirShippingEstimateRequest.prototype['destination_airport'] = undefined;

CreateAirShippingEstimateRequest.prototype['origin_airport'] = undefined;

CreateAirShippingEstimateRequest.prototype['aircraft_code'] = undefined;

CreateAirShippingEstimateRequest.prototype['aircraft_type'] = &#x27;unknown&#x27;;

CreateAirShippingEstimateRequest.prototype['freight_mass_g'] = undefined;

CreateAirShippingEstimateRequest.prototype['emissions_scope'] = &#x27;wtw&#x27;;

CreateAirShippingEstimateRequest.prototype['project_id'] = undefined;

CreateAirShippingEstimateRequest.prototype['create_order'] = false;




export default CreateAirShippingEstimateRequest;


