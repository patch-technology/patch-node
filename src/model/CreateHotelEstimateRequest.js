/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';


class CreateHotelEstimateRequest {
    constructor(countryCode) { 
        
        CreateHotelEstimateRequest.initialize(this, countryCode);
    }

    static initialize(obj, countryCode) { 
        obj['country_code'] = countryCode;
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateHotelEstimateRequest();

            
            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
            
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            
            if (data.hasOwnProperty('star_rating')) {
                obj['star_rating'] = ApiClient.convertToType(data['star_rating'], 'Number');
            }
            
            if (data.hasOwnProperty('number_of_nights')) {
                obj['number_of_nights'] = ApiClient.convertToType(data['number_of_nights'], 'Number');
            }
            
            if (data.hasOwnProperty('number_of_rooms')) {
                obj['number_of_rooms'] = ApiClient.convertToType(data['number_of_rooms'], 'Number');
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


CreateHotelEstimateRequest.prototype['country_code'] = undefined;

CreateHotelEstimateRequest.prototype['city'] = undefined;

CreateHotelEstimateRequest.prototype['region'] = undefined;

CreateHotelEstimateRequest.prototype['star_rating'] = undefined;

CreateHotelEstimateRequest.prototype['number_of_nights'] = undefined;

CreateHotelEstimateRequest.prototype['number_of_rooms'] = undefined;

CreateHotelEstimateRequest.prototype['project_id'] = undefined;

CreateHotelEstimateRequest.prototype['create_order'] = false;




export default CreateHotelEstimateRequest;


