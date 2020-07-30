/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from "../ApiClient";
import Project from "./Project";

class Preference {
  constructor() {
    Preference.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Preference();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "String");
      }

      if (data.hasOwnProperty("allocation_percentage")) {
        obj["allocation_percentage"] = ApiClient.convertToType(
          data["allocation_percentage"],
          "Number"
        );
      }

      if (data.hasOwnProperty("project")) {
        obj["project"] = Project.constructFromObject(data["project"]);
      }
    }
    return obj;
  }
}

Preference.prototype["id"] = undefined;

Preference.prototype["allocation_percentage"] = undefined;

Preference.prototype["project"] = undefined;

export default Preference;
