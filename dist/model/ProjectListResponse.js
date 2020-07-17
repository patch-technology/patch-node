"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MetaIndexObject = _interopRequireDefault(require("./MetaIndexObject"));

var _Project = _interopRequireDefault(require("./Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ProjectListResponse = /*#__PURE__*/function () {
  function ProjectListResponse(success, error, data, meta) {
    _classCallCheck(this, ProjectListResponse);

    ProjectListResponse.initialize(this, success, error, data, meta);
  }

  _createClass(ProjectListResponse, null, [{
    key: "initialize",
    value: function initialize(obj, success, error, data, meta) {
      obj['success'] = success;
      obj['error'] = error;
      obj['data'] = data;
      obj['meta'] = meta;
    }
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectListResponse();

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _ApiClient["default"].convertToType(data['error'], Object);
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_Project["default"]]);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _MetaIndexObject["default"].constructFromObject(data['meta']);
        }
      }

      return obj;
    }
  }]);

  return ProjectListResponse;
}();

ProjectListResponse.prototype['success'] = undefined;
ProjectListResponse.prototype['error'] = undefined;
ProjectListResponse.prototype['data'] = undefined;
ProjectListResponse.prototype['meta'] = undefined;
var _default = ProjectListResponse;
exports["default"] = _default;