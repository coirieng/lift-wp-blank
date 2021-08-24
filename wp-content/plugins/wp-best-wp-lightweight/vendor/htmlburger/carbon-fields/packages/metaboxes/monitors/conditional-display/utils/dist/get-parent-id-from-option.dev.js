"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getParentIdFromOption;

/**
 * Extracts the id of the post/term parent from an option.
 *
 * @param  {Object} option
 * @return {number}
 */
function getParentIdFromOption(option) {
  var value = parseInt(option.value, 10);
  return !isNaN(value) && value >= 0 ? value : 0;
}