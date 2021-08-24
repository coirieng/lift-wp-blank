"use strict";

var _callbagOf = _interopRequireDefault(require("callbag-of"));

var _callbagStartWith = _interopRequireDefault(require("callbag-start-with"));

var _callbagFromDelegatedEvent = _interopRequireDefault(require("callbag-from-delegated-event"));

var _callbagDistinctUntilChanged = _interopRequireDefault(require("callbag-distinct-until-changed"));

var _hooks = require("@wordpress/hooks");

var _data = require("@wordpress/data");

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
  post_format: 'standard'
};
/**
 * Extracts `post_format` from the input.
 *
 * @param  {Object} input
 * @return {Object}
 */

function getPostFormatFromRadioInput(input) {
  var value = input.value; // Normalize the value of "Standard" input.

  if (value === '0') {
    value = 'standard';
  }

  return {
    post_format: value
  };
}
/**
 * Defines the side effects for Classic Editor.
 */


(0, _hooks.addFilter)('carbon-fields.conditional-display-post-format.classic', 'carbon-fields/metaboxes', function () {
  var node = document.querySelector('div#post-formats-select');

  if (!node) {
    return (0, _callbagOf["default"])(INITIAL_STATE);
  }

  return (0, _callbagBasics.pipe)((0, _callbagFromDelegatedEvent["default"])(node, 'input.post-format', 'change'), (0, _callbagBasics.map)(function (_ref) {
    var target = _ref.target;
    return getPostFormatFromRadioInput(target);
  }), (0, _callbagStartWith["default"])(getPostFormatFromRadioInput(node.querySelector('input.post-format:checked'))));
});
/**
 * Defines the side effects for Gutenberg.
 */

(0, _hooks.addFilter)('carbon-fields.conditional-display-post-format.gutenberg', 'carbon-fields/metaboxes', function () {
  return (0, _callbagBasics.pipe)((0, _core.fromSelector)((0, _data.select)('core/editor').getEditedPostAttribute, 'format'), (0, _callbagDistinctUntilChanged["default"])(), (0, _callbagBasics.filter)(Boolean), (0, _callbagBasics.map)(function (postFormat) {
    return {
      post_format: postFormat
    };
  }), (0, _callbagStartWith["default"])(INITIAL_STATE));
});