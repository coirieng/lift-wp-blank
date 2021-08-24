"use strict";

var _immer = _interopRequireDefault(require("immer"));

var _callbagStartWith = _interopRequireDefault(require("callbag-start-with"));

var _callbagFromDelegatedEvent = _interopRequireDefault(require("callbag-from-delegated-event"));

var _callbagBasics = require("callbag-basics");

var _hooks = require("@wordpress/hooks");

var _data = require("@wordpress/data");

var _lodash = require("lodash");

var _core = require("@carbon-fields/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var TAGS_DELIMITER = ',';
/**
 * Applies a monkey patch to the specified method of `window.tagBox` API
 * so we can detect changes of the non-hierarchical taxonomies.
 *
 * @param  {Object} tagBox
 * @param  {string} method
 * @return {void}
 */

function patchWordPressTagBoxAPI(tagBox, method) {
  tagBox["original_".concat(method)] = tagBox[method];

  tagBox[method] = function () {
    var event = new Event('change');
    var textarea = window.jQuery(arguments.length <= 0 ? undefined : arguments[0]).closest('.postbox').find('textarea.the-tags').get(0);
    var result = tagBox["original_".concat(method)].apply(tagBox, arguments);
    textarea.dispatchEvent(event);
    return result;
  };
}

if (window.tagBox) {
  patchWordPressTagBoxAPI(window.tagBox, 'parseTags');
  patchWordPressTagBoxAPI(window.tagBox, 'flushTags');
}
/**
 * Extracts the terms of a hierarchical taxonomy.
 *
 * @param  {string} taxonomy
 * @return {Object}
 */


function getTermsFromChecklist(taxonomy) {
  var inputs = document.querySelectorAll("#".concat(taxonomy, "checklist input[type=\"checkbox\"]:checked"));
  return _toConsumableArray(inputs).reduce(function (memo, input) {
    var value = parseInt(input.value, 10);
    memo[taxonomy].push(value);
    return memo;
  }, _defineProperty({}, taxonomy, []));
}
/**
 * Extracts the terms of a non-hierarchical taxonomy.
 *
 * @param  {string} taxonomy
 * @return {Object}
 */


function getTermsFromText(taxonomy) {
  var node = document.querySelector("#tagsdiv-".concat(taxonomy, " textarea.the-tags"));
  var terms = node.value ? node.value.split(TAGS_DELIMITER) : [];
  return _defineProperty({}, taxonomy, terms);
}
/**
 * Keeps track of the hierarchical taxonomies like `categories`.
 *
 * @return {Function}
 */


function trackHierarchicalTaxonomies() {
  var nodes = document.querySelectorAll('div[id^="taxonomy-"]');
  return _toConsumableArray(nodes).map(function (node) {
    var taxonomy = node.id.replace('taxonomy-', '');
    return (0, _callbagBasics.pipe)((0, _callbagFromDelegatedEvent["default"])(node.querySelector("#".concat(taxonomy, "checklist")), 'input[type="checkbox"]', 'change'), (0, _callbagBasics.scan)(function (stack, _ref2) {
      var target = _ref2.target;
      return (0, _immer["default"])(stack, function (draft) {
        var value = parseInt(target.value, 10);

        if (target.checked) {
          draft[taxonomy].push(value);
        } else {
          (0, _lodash.pull)(draft[taxonomy], value);
        }
      });
    }, _defineProperty({}, taxonomy, [])), (0, _callbagStartWith["default"])(getTermsFromChecklist(taxonomy)));
  });
}
/**
 * Keeps track of the non-hierarchical taxonomies like `tags`.
 *
 * @return {Function}
 */


function trackNonHierarchicalTaxonomies() {
  var nodes = document.querySelectorAll('div[id^="tagsdiv-"]');
  return _toConsumableArray(nodes).map(function (node) {
    var taxonomy = node.id.replace('tagsdiv-', '');
    return (0, _callbagBasics.pipe)((0, _callbagBasics.fromEvent)(node.querySelector('textarea.the-tags'), 'change'), (0, _callbagBasics.map)(function (_ref3) {
      var target = _ref3.target;
      return _defineProperty({}, taxonomy, target.value ? target.value.split(TAGS_DELIMITER) : []);
    }), (0, _callbagStartWith["default"])(getTermsFromText(taxonomy)));
  });
}
/**
 * Defines the side effects for Classic Editor.
 */


(0, _hooks.addFilter)('carbon-fields.conditional-display-post-term.classic', 'carbon-fields/metaboxes', function () {
  return (0, _callbagBasics.pipe)(_callbagBasics.merge.apply(void 0, _toConsumableArray(trackHierarchicalTaxonomies()).concat(_toConsumableArray(trackNonHierarchicalTaxonomies()))), (0, _callbagBasics.scan)(function (previous, current) {
    return {
      post_term: _objectSpread({}, previous.post_term, {}, current)
    };
  }, {
    post_term: {}
  }));
});
/**
 * Defines the side effects for Gutenberg.
 */

(0, _hooks.addFilter)('carbon-fields.conditional-display-post-term.gutenberg', 'carbon-fields/metaboxes', function () {
  var _select = (0, _data.select)('core'),
      getTaxonomies = _select.getTaxonomies;

  var _select2 = (0, _data.select)('core/editor'),
      getEditedPostAttribute = _select2.getEditedPostAttribute; // Borrowed from https://github.com/WordPress/gutenberg/blob/master/packages/editor/src/components/post-taxonomies/index.js


  return (0, _callbagBasics.pipe)((0, _core.fromSelector)(getTaxonomies, {
    per_page: -1
  }), (0, _callbagBasics.filter)(Boolean), (0, _callbagBasics.map)(function (taxonomies) {
    var pairs = taxonomies.map(function (taxonomy) {
      return [taxonomy.slug, getEditedPostAttribute(taxonomy.rest_base) || []];
    });
    return {
      post_term: (0, _lodash.fromPairs)(pairs)
    };
  }));
});