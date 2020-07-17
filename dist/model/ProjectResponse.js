"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Project = _interopRequireDefault(require("./Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ProjectResponse = /*#__PURE__*/function () {
  function ProjectResponse(success, error, data) {
    _classCallCheck(this, ProjectResponse);

    ProjectResponse.initialize(this, success, error, data);
  }

  _createClass(ProjectResponse, null, [{
    key: "initialize",
    value: function initialize(obj, success, error, data) {
      obj['success'] = success;
      obj['error'] = error;
      obj['data'] = data;
    }
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectResponse();

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _ApiClient["default"].convertToType(data['error'], Object);
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _Project["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return ProjectResponse;
}();

ProjectResponse.prototype['success'] = undefined;
ProjectResponse.prototype['error'] = undefined;
ProjectResponse.prototype['data'] = undefined;
var _default = ProjectResponse;
exports["default"] = _default;