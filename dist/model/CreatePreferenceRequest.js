"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CreatePreferenceRequest = /*#__PURE__*/function () {
  function CreatePreferenceRequest(projectId) {
    _classCallCheck(this, CreatePreferenceRequest);

    CreatePreferenceRequest.initialize(this, projectId);
  }

  _createClass(CreatePreferenceRequest, null, [{
    key: "initialize",
    value: function initialize(obj, projectId) {
      obj['project_id'] = projectId;
    }
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreatePreferenceRequest();

        if (data.hasOwnProperty('project_id')) {
          obj['project_id'] = _ApiClient["default"].convertToType(data['project_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreatePreferenceRequest;
}();

CreatePreferenceRequest.prototype['project_id'] = undefined;
var _default = CreatePreferenceRequest;
exports["default"] = _default;