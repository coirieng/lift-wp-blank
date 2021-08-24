"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isGutenberg;

var _lodash = require("lodash");

/**
 * External dependencies.
 */

/**
 * Returns true if Gutenberg is presented.
 *
 * @return {boolean}
 */
function isGutenberg() {
  return !(0, _lodash.isUndefined)(window._wpLoadBlockEditor);
}