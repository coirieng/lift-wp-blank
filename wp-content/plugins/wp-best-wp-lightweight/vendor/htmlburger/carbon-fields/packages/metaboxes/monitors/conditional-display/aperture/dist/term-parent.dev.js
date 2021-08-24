"use strict";

var _callbagOf = _interopRequireDefault(require("callbag-of"));

var _callbagStartWith = _interopRequireDefault(require("callbag-start-with"));

var _hooks = require("@wordpress/hooks");

var _callbagBasics = require("callbag-basics");

var _getParentIdFromOption = _interopRequireDefault(require("../utils/get-parent-id-from-option"));

var _getLevelFromOption = _interopRequireDefault(require("../utils/get-level-from-option"));

var _getAncestorsFromOption = _interopRequireDefault(require("../utils/get-ancestors-from-option"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */

/**
 * The default state.
 *
 * @type {Object}
 */
var INITIAL_STATE = {
  term_ancestors: [],
  term_parent: 0,
  term_level: 1
};
/**
 * Extracts the `term_ancestors`, `term_parent` & `term_level` from the select.
 *
 * @param  {Object} node
 * @return {Object}
 */

function getParentIdAncestorsAndLevelFromSelect(node) {
  var option = node.options[node.selectedIndex];
  var ancestors = (0, _getAncestorsFromOption["default"])(option);
  var parentId = (0, _getParentIdFromOption["default"])(option);
  var level = (0, _getLevelFromOption["default"])(option) + 1;
  return {
    term_ancestors: ancestors,
    term_parent: parentId,
    term_level: level
  };
}
/**
 * Defines the side effects for Classic Editor.
 */


(0, _hooks.addFilter)('carbon-fields.conditional-display-term-parent.classic', 'carbon-fields/metaboxes', function () {
  var node = document.querySelector('select#parent');

  if (!node) {
    return (0, _callbagOf["default"])(INITIAL_STATE);
  }

  return (0, _callbagBasics.pipe)((0, _callbagBasics.fromEvent)(node, 'change'), (0, _callbagBasics.map)(function (_ref) {
    var target = _ref.target;
    return getParentIdAncestorsAndLevelFromSelect(target);
  }), (0, _callbagStartWith["default"])(getParentIdAncestorsAndLevelFromSelect(node)));
});