"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _data = require("@wordpress/data");

var _compose = require("@wordpress/compose");

/**
 * External dependencies.
 */

/**
 * Creates a high-order component which adds connection
 * to the store.
 *
 * @param  {Function} Component
 * @return {Function}
 */
var _default = (0, _compose.createHigherOrderComponent)(function (Component) {
  var applyWithSelect = (0, _data.withSelect)(function (select, _ref) {
    var id = _ref.id;
    var container = select('carbon-fields/metaboxes').getContainerById(id);
    return {
      container: container
    };
  });
  return applyWithSelect(Component);
}, 'withContainer');

exports["default"] = _default;