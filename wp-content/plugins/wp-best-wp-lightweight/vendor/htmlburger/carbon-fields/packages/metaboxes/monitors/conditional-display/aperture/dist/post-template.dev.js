"use strict";

var _callbagOf = _interopRequireDefault(require("callbag-of"));

var _callbagStartWith = _interopRequireDefault(require("callbag-start-with"));

var _callbagDistinctUntilChanged = _interopRequireDefault(require("callbag-distinct-until-changed"));

var _hooks = require("@wordpress/hooks");

var _data = require("@wordpress/data");

var _lodash = require("lodash");

var _callbagBasics = require("callbag-basics");

var _core = require("@carbon-fields/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * External dependencies.
 */

/**
 * Carbon Fields dependencies.
 */

/**
 * The default state.
 *
 * @type {Object}
 */
var INITIAL_STATE = {
  post_template: ''
};
/**
 * Extracts `post_template` from the select.
 *
 * @param  {Object} node
 * @return {Object}
 */

function getPostTemplateFromSelect(node) {
  var value = node.value; // In Gutenberg for the "Default" template is used an empty string.

  if (value === 'default') {
    value = '';
  }

  return {
    post_template: value
  };
}
/**
 * Defines the side effects for Classic Editor.
 */


(0, _hooks.addFilter)('carbon-fields.conditional-display-post-template.classic', 'carbon-fields/metaboxes', function () {
  var node = document.querySelector('select#page_template');

  if (!node) {
    return (0, _callbagOf["default"])(INITIAL_STATE);
  }

  return (0, _callbagBasics.pipe)((0, _callbagBasics.fromEvent)(node, 'change'), (0, _callbagBasics.map)(function (_ref) {
    var target = _ref.target;
    return getPostTemplateFromSelect(target);
  }), (0, _callbagStartWith["default"])(getPostTemplateFromSelect(node)));
});
/**
 * Defines the side effects for Gutenberg.
 */

(0, _hooks.addFilter)('carbon-fields.conditional-display-post-template.gutenberg', 'carbon-fields/metaboxes', function () {
  return (0, _callbagBasics.pipe)((0, _core.fromSelector)((0, _data.select)('core/editor').getEditedPostAttribute, 'template'), (0, _callbagDistinctUntilChanged["default"])(), (0, _callbagBasics.filter)(_lodash.isString), (0, _callbagBasics.map)(function (postTemplate) {
    return {
      post_template: postTemplate
    };
  }), (0, _callbagStartWith["default"])(INITIAL_STATE));
});