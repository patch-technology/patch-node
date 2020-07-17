"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Patch;

var _ApiClient = _interopRequireDefault(require("./ApiClient"));

var _EstimatesApi = _interopRequireDefault(require("./api/EstimatesApi"));

var _OrdersApi = _interopRequireDefault(require("./api/OrdersApi"));

var _PreferencesApi = _interopRequireDefault(require("./api/PreferencesApi"));

var _ProjectsApi = _interopRequireDefault(require("./api/ProjectsApi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */
function Patch(accessToken) {
  if (!(this instanceof Patch)) return new Patch(accessToken);
  this.client = _ApiClient["default"].instance;
  this.client.authentications['bearer_auth'].accessToken = accessToken;
  this.estimates = new _EstimatesApi["default"](this.client);
  this.orders = new _OrdersApi["default"](this.client);
  this.preferences = new _PreferencesApi["default"](this.client);
  this.projects = new _ProjectsApi["default"](this.client);
}