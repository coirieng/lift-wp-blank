"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = uniqueId;

var _generate = _interopRequireDefault(require("nanoid/generate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * External dependencies.
 */

/**
 * Alphabet that doesn't contain `-`.
 *
 * @borrows https://github.com/ai/nanoid/blob/master/index.browser.js#L16
 */
var ALPHABET = 'Uint8ArdomValuesObj012345679BCDEFGHIJKLMNPQRSTWXYZ_cfghkpqvwxyz';
/**
 * Generates an unique identifier.
 *
 * @return {string}
 */

function uniqueId() {
  return "cf-".concat((0, _generate["default"])(ALPHABET, 21));
}