"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */
class MetaIndexObject {
  constructor() {
    MetaIndexObject.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MetaIndexObject();

      if (data.hasOwnProperty('prev_page')) {
        obj['prev_page'] = _ApiClient.default.convertToType(data['prev_page'], 'Number');
      }

      if (data.hasOwnProperty('next_page')) {
        obj['next_page'] = _ApiClient.default.convertToType(data['next_page'], 'Number');
      }
    }

    return obj;
  }

}

MetaIndexObject.prototype['prev_page'] = undefined;
MetaIndexObject.prototype['next_page'] = undefined;
var _default = MetaIndexObject;
exports.default = _default;