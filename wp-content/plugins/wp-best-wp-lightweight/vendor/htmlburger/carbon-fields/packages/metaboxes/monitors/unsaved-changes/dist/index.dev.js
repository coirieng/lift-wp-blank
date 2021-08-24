"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _data = require("@wordpress/data");

var _refractCallbag = require("refract-callbag");

var _core = require("@carbon-fields/core");

/**
 * External dependencies.
 */

/**
 * Carbon Fields dependencies.
 */

/**
 * Toggles the alert if the page has not been saved before reload.
 *
 * @return {null}
 */
function UnsavedChanges() {
  return null;
}
/**
 * The function that controls the stream of side effects.
 *
 * @return {Object}
 */


function aperture() {
  return (0, _core.fromSelector)((0, _data.select)('carbon-fields/metaboxes').isDirty);
}
/**
 * The function that causes the side effects.
 *
 * @return {Function}
 */


function handler() {
  return function (isDirty) {
    if (!isDirty) {
      return;
    } // Support for custom message has been removed
    // Ref : https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload#Browser_compatibility


    window.onbeforeunload = function (e) {
      return e;
    };
  };
}

var _default = (0, _refractCallbag.withEffects)(aperture, {
  handler: handler
})(UnsavedChanges);

exports["default"] = _default;