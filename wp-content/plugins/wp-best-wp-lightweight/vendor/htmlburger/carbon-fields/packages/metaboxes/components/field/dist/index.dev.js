"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _compose = require("@wordpress/compose");

var _core = require("@carbon-fields/core");

require("./style.scss");

var _withField = _interopRequireDefault(require("../../hocs/with-field"));

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
var _default = (0, _compose.compose)(_withField["default"], (0, _core.withFilters)('carbon-fields.field-wrapper.metabox'))(_core.Field);

exports["default"] = _default;