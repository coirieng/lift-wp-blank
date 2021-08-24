"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getLevelFromOption;

/**
 * Extracts the level from an option.
 *
 * @param  {Object} option
 * @return {number}
 */
function getLevelFromOption(option) {
  var level = 0;

  if (option.className) {
    var matches = option.className.match(/^level-(\d+)/);

    if (matches) {
      level = parseInt(matches[1], 10) + 1;
    }
  }

  return level;
}