"use strict";

var _compose = require("@wordpress/compose");

var _hooks = require("@wordpress/hooks");

var _core = require("@carbon-fields/core");

var _withContainer = _interopRequireDefault(require("../hocs/with-container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * External dependencies.
 */

/**
 * Carbon Fields dependencies.
 */

/**
 * Internal dependencies.
 */

/**
 * Extends the containers with necessary hooks.
 */
(0, _hooks.addFilter)('carbon-fields.register-container-type', 'carbon-fields/metaboxes', function (type, context, component) {
  return (0, _compose.compose)(_withContainer["default"], (0, _core.withFilters)("carbon-fields.".concat(type, ".").concat(context)))(component);
});