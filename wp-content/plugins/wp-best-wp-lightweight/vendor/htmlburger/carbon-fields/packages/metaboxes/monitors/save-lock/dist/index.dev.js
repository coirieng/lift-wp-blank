"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _refractCallbag = require("refract-callbag");

var _data = require("@wordpress/data");

var _core = require("@carbon-fields/core");

/**
 * External dependencies.
 */

/**
 * Carbon Fields dependencies.
 */

/**
 * Toggles the ability to save the page.
 *
 * @return {null}
 */
function SaveLock() {
  return null;
}
/**
 * The function that controls the stream of side effects.
 *
 * @return {Object}
 */


function aperture() {
  return (0, _core.fromSelector)((0, _data.select)('carbon-fields/metaboxes').isSavingLocked);
}
/**
 * The function that causes the side effects.
 *
 * @return {Function}
 */


function handler() {
  return function (isLocked) {
    var nodes = document.querySelectorAll("\n\t\t\t#publishing-action input#publish,\n\t\t\t#publishing-action input#save,\n\t\t\t#addtag input#submit,\n\t\t\t#edittag input[type=\"submit\"],\n\t\t\t#your-profile input#submit\n\t\t");
    nodes.forEach(function (node) {
      node.disabled = isLocked;
    });
  };
}

var _default = (0, _refractCallbag.withEffects)(aperture, {
  handler: handler
})(SaveLock);

exports["default"] = _default;