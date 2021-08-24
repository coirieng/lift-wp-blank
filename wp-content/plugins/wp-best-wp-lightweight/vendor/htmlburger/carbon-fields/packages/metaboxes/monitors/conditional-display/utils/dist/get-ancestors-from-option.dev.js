"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getAncestorsFromOption;

var _getLevelFromOption = _interopRequireDefault(require("./get-level-from-option"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Internal dependencies.
 */

/**
 * Extracts the ancestors of the post/term from an option.
 *
 * @param  {Object} option
 * @return {number[]}
 */
function getAncestorsFromOption(option) {
  var ancestors = [];
  var previousOption = option;
  var level = (0, _getLevelFromOption["default"])(option);

  while (level > 0 && previousOption) {
    if ((0, _getLevelFromOption["default"])(previousOption) !== level) {
      previousOption = previousOption.previousSibling; // Skip this iteration because the option isn't an ancestor.

      continue;
    }

    var id = parseInt(previousOption.value, 10);

    if (id > 0) {
      ancestors.unshift(id);
    }

    previousOption = previousOption.previousSibling;
    level--;
  }

  return ancestors;
}