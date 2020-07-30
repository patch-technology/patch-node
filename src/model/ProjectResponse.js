/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from "../ApiClient";
import Project from "./Project";

class ProjectResponse {
  constructor(success, error, data) {
    ProjectResponse.initialize(this, success, error, data);
  }

  static initialize(obj, success, error, data) {
    obj["success"] = success;
    obj["error"] = error;
    obj["data"] = data;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectResponse();

      if (data.hasOwnProperty("success")) {
        obj["success"] = ApiClient.convertToType(data["success"], "Boolean");
      }

      if (data.hasOwnProperty("error")) {
        obj["error"] = ApiClient.convertToType(data["error"], Object);
      }

      if (data.hasOwnProperty("data")) {
        obj["data"] = Project.constructFromObject(data["data"]);
      }
    }
    return obj;
  }
}

ProjectResponse.prototype["success"] = undefined;

ProjectResponse.prototype["error"] = undefined;

ProjectResponse.prototype["data"] = undefined;

export default ProjectResponse;
