/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from "../ApiClient";
import Estimate from "./Estimate";
import MetaIndexObject from "./MetaIndexObject";

class EstimateListResponse {
  constructor(success, error, data, meta) {
    EstimateListResponse.initialize(this, success, error, data, meta);
  }

  static initialize(obj, success, error, data, meta) {
    obj["success"] = success;
    obj["error"] = error;
    obj["data"] = data;
    obj["meta"] = meta;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EstimateListResponse();

      if (data.hasOwnProperty("success")) {
        obj["success"] = ApiClient.convertToType(data["success"], "Boolean");
      }

      if (data.hasOwnProperty("error")) {
        obj["error"] = ApiClient.convertToType(data["error"], Object);
      }

      if (data.hasOwnProperty("data")) {
        obj["data"] = ApiClient.convertToType(data["data"], [Estimate]);
      }

      if (data.hasOwnProperty("meta")) {
        obj["meta"] = MetaIndexObject.constructFromObject(data["meta"]);
      }
    }
    return obj;
  }
}

EstimateListResponse.prototype["success"] = undefined;

EstimateListResponse.prototype["error"] = undefined;

EstimateListResponse.prototype["data"] = undefined;

EstimateListResponse.prototype["meta"] = undefined;

export default EstimateListResponse;
