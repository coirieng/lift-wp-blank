"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = compare;

var _lodash = require("lodash");

/* eslint eqeqeq: "off" */

/**
 * External dependencies.
 */

/**
 * Performs comparison of the values.
 *
 * @param  {mixed}  left
 * @param  {string} operator
 * @param  {mixed}  right
 * @return {boolean}
 */
function compare(left, operator, right) {
  switch (operator) {
    case '=':
      return left == right;

    case '!=':
      return left != right;

    case '>':
      return left > right;

    case '<':
      return left < right;

    case '>=':
      return left >= right;

    case '<=':
      return left <= right;

    case 'IN':
      return (0, _lodash.some)(right, function (value) {
        return value == left;
      });

    case 'NOT IN':
      return (0, _lodash.every)(right, function (value) {
        return value != left;
      });

    case 'INCLUDES':
      return (0, _lodash.every)((0, _lodash.castArray)(right), function (value) {
        return left.indexOf(value) > -1;
      });

    case 'EXCLUDES':
      return (0, _lodash.every)((0, _lodash.castArray)(right), function (value) {
        return left.indexOf(value) === -1;
      });
  }

  return false;
}