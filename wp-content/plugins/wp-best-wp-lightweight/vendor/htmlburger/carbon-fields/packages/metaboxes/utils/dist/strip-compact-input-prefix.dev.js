"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = stripCompactInputPrefix;

/**
 * Removes the prefix used to compact the input of Carbon Fields.
 *
 * @param  {string} str
 * @return {string}
 */
function stripCompactInputPrefix(str) {
  var _window$cf$config = window.cf.config,
      compactInput = _window$cf$config.compactInput,
      compactInputKey = _window$cf$config.compactInputKey;

  if (!compactInput || str.indexOf(compactInputKey) !== 0) {
    return str;
  }

  return str.replace(new RegExp("^".concat(compactInputKey, "\\[(.+?)\\]")), '$1');
}