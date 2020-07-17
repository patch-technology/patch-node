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

var MetaIndexObject = /*#__PURE__*/function () {
  function MetaIndexObject() {
    _classCallCheck(this, MetaIndexObject);

    MetaIndexObject.initialize(this);
  }

  _createClass(MetaIndexObject, null, [{
    key: "initialize",
    value: function initialize(obj) {}
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MetaIndexObject();

        if (data.hasOwnProperty('prev_page')) {
          obj['prev_page'] = _ApiClient["default"].convertToType(data['prev_page'], 'Number');
        }

        if (data.hasOwnProperty('next_page')) {
          obj['next_page'] = _ApiClient["default"].convertToType(data['next_page'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return MetaIndexObject;
}();

MetaIndexObject.prototype['prev_page'] = undefined;
MetaIndexObject.prototype['next_page'] = undefined;
var _default = MetaIndexObject;
exports["default"] = _default;