"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _compose = require("@wordpress/compose");

var _data = require("@wordpress/data");

var _refractCallbag = require("refract-callbag");

var _aperture = _interopRequireDefault(require("./aperture"));

var _handler = _interopRequireDefault(require("./handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */

/**
 * Performs the evaluation of conditions.
 *
 * @return {null}
 */
function ConditionalDisplay() {
  return null;
}

var applyWithSelect = (0, _data.withSelect)(function (select) {
  var containers = select('carbon-fields/metaboxes').getContainers();
  return {
    containers: containers
  };
});
var applyWitEffects = (0, _refractCallbag.withEffects)(_aperture["default"], {
  handler: _handler["default"]
});

var _default = (0, _compose.compose)(applyWithSelect, applyWitEffects)(ConditionalDisplay);

exports["default"] = _default;