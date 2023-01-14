"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useSyncAnimation;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
function useSyncAnimation() {
  const [turn, setTurn] = (0, _react.useState)(0);
  const next = order => {
    if (order === turn) setTurn(current => current + 1);
  };
  return {
    turn: turn,
    next: next
  };
}