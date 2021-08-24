"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = required;

var _i18n = require("@wordpress/i18n");

var _lodash = require("lodash");

/**
 * External dependencies.
 */

/**
 * Validates the given value.
 *
 * @param  {mixed}   value
 * @return {?string}
 */
function required(value) {
  var isObjectValue = (0, _lodash.isObject)(value);

  if (isObjectValue && !(0, _lodash.isEmpty)(value) || !isObjectValue && !!value) {
    return null;
  }

  return (0, _i18n.__)('This field is required.', 'carbon-fields-ui');
}