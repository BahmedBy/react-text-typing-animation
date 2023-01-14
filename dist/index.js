"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
Object.defineProperty(exports, "useSyncAnimation", {
  enumerable: true,
  get: function get() {
    return _useSyncAnimation.default;
  }
});
var _TypingAnimation = _interopRequireDefault(require("./components/TypingAnimation"));
var _useSyncAnimation = _interopRequireDefault(require("./components/useSyncAnimation"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = _TypingAnimation.default;
exports.default = _default;