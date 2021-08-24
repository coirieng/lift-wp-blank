"use strict";

var _callbagOf = _interopRequireDefault(require("callbag-of"));

var _callbagStartWith = _interopRequireDefault(require("callbag-start-with"));

var _hooks = require("@wordpress/hooks");

var _callbagBasics = require("callbag-basics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * External dependencies.
 */

/**
 * The default state.
 *
 * @type {Object}
 */
var INITIAL_STATE = {
  user_role: ''
};
/**
 * Extracts `user_role` from a select.
 *
 * @param  {Object} node
 * @return {Object}
 */

function getRoleFromSelect(node) {
  return {
    user_role: node.value
  };
}
/**
 * Defines the side effects for Classic Editor.
 */


(0, _hooks.addFilter)('carbon-fields.conditional-display-user-role.classic', 'carbon-fields/metaboxes', function () {
  var node = document.querySelector('select#role');

  if (!node) {
    var fieldset = document.querySelector('fieldset[data-profile-role]'); // The selectbox doesn't exist on the "Profile" page.
    // So we need to read the role from the container in DOM.

    if (fieldset) {
      return (0, _callbagOf["default"])({
        user_role: fieldset.dataset.profileRole
      });
    }

    return (0, _callbagOf["default"])(INITIAL_STATE);
  }

  return (0, _callbagBasics.pipe)((0, _callbagBasics.fromEvent)(node, 'change'), (0, _callbagBasics.map)(function (_ref) {
    var target = _ref.target;
    return getRoleFromSelect(target);
  }), (0, _callbagStartWith["default"])(getRoleFromSelect(node)));
});