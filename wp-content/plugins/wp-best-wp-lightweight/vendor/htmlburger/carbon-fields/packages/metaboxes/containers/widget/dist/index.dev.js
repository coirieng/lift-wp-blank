"use strict";

var _data = require("@wordpress/data");

var _hooks = require("@wordpress/hooks");

var _refractCallbag = require("refract-callbag");

require("./style.scss");

var _core = require("@carbon-fields/core");

/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */

/**
 * Carbon Fields dependencies.
 */

/**
 * The function that controls the stream of side effects.
 *
 * @return {Object}
 */
function aperture() {
  return (0, _core.fromSelector)((0, _data.select)('carbon-fields/metaboxes').isFieldUpdated);
}
/**
 * The function that causes the side effects.
 *
 * @param  {Object} props
 * @return {Function}
 */


function handler(props) {
  return function (_ref) {
    var action = _ref.action;

    if (!action) {
      return;
    }

    var container = props.container;
    var payload = action.payload;

    if (container.fields.map(function (field) {
      return field.id;
    }).indexOf(payload.fieldId) >= 0) {
      var $carbonContainer = window.jQuery(".container-".concat(container.id));
      $carbonContainer.closest('.widget-inside').trigger('change');
    }
  };
}

(0, _hooks.addFilter)('carbon-fields.widget.classic', 'carbon-fields/metaboxes', (0, _refractCallbag.withEffects)(aperture, {
  handler: handler
}));