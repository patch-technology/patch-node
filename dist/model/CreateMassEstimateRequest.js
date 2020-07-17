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

var CreateMassEstimateRequest = /*#__PURE__*/function () {
  function CreateMassEstimateRequest(massG) {
    _classCallCheck(this, CreateMassEstimateRequest);

    CreateMassEstimateRequest.initialize(this, massG);
  }

  _createClass(CreateMassEstimateRequest, null, [{
    key: "initialize",
    value: function initialize(obj, massG) {
      obj['mass_g'] = massG;
    }
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateMassEstimateRequest();

        if (data.hasOwnProperty('mass_g')) {
          obj['mass_g'] = _ApiClient["default"].convertToType(data['mass_g'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CreateMassEstimateRequest;
}();

CreateMassEstimateRequest.prototype['mass_g'] = undefined;
var _default = CreateMassEstimateRequest;
exports["default"] = _default;