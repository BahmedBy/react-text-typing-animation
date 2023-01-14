"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TypingText;
require("core-js/modules/es.array.reverse.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
var _react = require("react");
require("./styles/blink.css");
const blinkStyle = speed => {
  return {
    margin: 0,
    padding: 0,
    animation: "blink-animation ".concat(speed * 100, "ms steps(5, start) infinite")
  };
};
function TypingText(_ref) {
  let {
    text,
    className,
    order = 0,
    speed = 1,
    sync = 0,
    dely: delay = 0,
    reverse = false,
    loop = false,
    cursor = '|',
    showCursorEnd = false,
    deleteSpeed
  } = _ref;
  const [displayed, setDisplayed] = (0, _react.useState)('');
  const [status, setStatus] = (0, _react.useState)('wait');
  (0, _react.useEffect)(() => {
    if ((order === sync.turn || order === 0) && status === 'wait') if (delay !== 0) setTimeout(() => {
      setStatus('start');
    }, delay);else setStatus('start');
  }, [sync.turn]);
  (0, _react.useEffect)(() => {
    if (status === 'start') setTimeout(() => {
      displayNext();
    }, speed * 100);else if (status === 'reverse') {
      let d = deleteSpeed === undefined ? speed : deleteSpeed;
      setTimeout(() => {
        removeLast();
      }, d * 100);
    }
  }, [displayed, status]);
  const handleFinishRound = () => {
    if (status === 'reverse') {
      if (loop) setStatus('start');else {
        setStatus('finish');
        if (sync.next !== undefined) sync.next(order);
      }
    } else {
      if (loop && !reverse) setDisplayed('');else if (reverse) setStatus('reverse');else {
        setStatus('finish');
        if (sync.next !== undefined) sync.next(order);
      }
    }
  };
  const removeLast = () => {
    if (displayed.length === 0) handleFinishRound();else {
      setDisplayed(current => current.substring(0, current.length - 2));
    }
  };
  const displayNext = () => {
    let b = displayed.length !== text.length;
    if (!b) {
      handleFinishRound();
      return;
    }
    let position = displayed.length;
    text.charAt(position) === '\\' && text.charAt(position + 1) === 'n' ? setDisplayed(displayed + '\n') : setDisplayed(displayed + text.charAt(position));
  };
  const displayCursor = status === 'start' || status === 'reverse' || showCursorEnd;
  const replaceWithBr = () => {
    return displayed.replace(/\n/g, "<br />");
  };
  return /*#__PURE__*/React.createElement("p", {
    className: className
  }, /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: replaceWithBr()
    }
  }), displayCursor && /*#__PURE__*/React.createElement("span", {
    style: blinkStyle(speed)
  }, cursor));
}