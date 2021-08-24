"use strict";

var _callbagOf = _interopRequireDefault(require("callbag-of"));

var _callbagStartWith = _interopRequireDefault(require("callbag-start-with"));

var _callbagDistinctUntilChanged = _interopRequireDefault(require("callbag-distinct-until-changed"));

var _hooks = require("@wordpress/hooks");

var _data = require("@wordpress/data");

var _lodash = require("lodash");

var _callbagBasics = require("callbag-basics");

var _core = require("@carbon-fields/core");

var _getParentIdFromOption = _interopRequireDefault(require("../utils/get-parent-id-from-option"));

var _getLevelFromOption = _interopRequireDefault(require("../utils/get-level-from-option"));

var _getAncestorsFromOption = _interopRequireDefault(require("../utils/get-ancestors-from-option"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * The default state.
 *
 * @type {Object}
 */
var INITIAL_STATE = {
  post_ancestors: [],
  post_parent_id: 0,
  post_level: 1
};
/**
 * Extracts the `post_ancestors`, `post_parent_id` & `post_level` from the select.
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
    post_ancestors: ancestors,
    post_parent_id: parentId,
    post_level: level
  };
}
/**
 * Extracts `post_ancestors` from the list.
 *
 * @param  {number}   parentId
 * @param  {Object[]} posts
 * @param  {Array}    ancestors
 * @return {number[]}
 */


function getAncestorsFromPostsList(parentId, posts) {
  var ancestors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var parent = (0, _lodash.find)(posts, ['id', parentId]);

  if (!parent) {
    return ancestors;
  }

  ancestors.unshift(parent.id);

  if (parent.parent) {
    return getAncestorsFromPostsList(parent.parent, posts, ancestors);
  }

  return ancestors;
}
/**
 * Defines the side effects for Classic Editor.
 */


(0, _hooks.addFilter)('carbon-fields.conditional-display-post-parent.classic', 'carbon-fields/metaboxes', function () {
  var node = document.querySelector('select#parent_id');

  if (!node) {
    return (0, _callbagOf["default"])(INITIAL_STATE);
  }

  return (0, _callbagBasics.pipe)((0, _callbagBasics.fromEvent)(node, 'change'), (0, _callbagBasics.map)(function (_ref) {
    var target = _ref.target;
    return getParentIdAncestorsAndLevelFromSelect(target);
  }), (0, _callbagStartWith["default"])(getParentIdAncestorsAndLevelFromSelect(node)));
});
/**
 * Defines the side effects for Gutenberg.
 */

(0, _hooks.addFilter)('carbon-fields.conditional-display-post-parent.gutenberg', 'carbon-fields/metaboxes', function () {
  var _select = (0, _data.select)('core'),
      getPostType = _select.getPostType,
      getEntityRecords = _select.getEntityRecords;

  return (0, _callbagBasics.pipe)((0, _callbagBasics.combine)((0, _core.fromSelector)((0, _data.select)('core/editor').getCurrentPostId), (0, _core.fromSelector)((0, _data.select)('core/editor').getEditedPostAttribute, 'type'), (0, _core.fromSelector)((0, _data.select)('core/editor').getEditedPostAttribute, 'parent')), (0, _callbagDistinctUntilChanged["default"])(_lodash.isEqual), (0, _callbagBasics.map)(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 3),
        postId = _ref3[0],
        postTypeSlug = _ref3[1],
        parentId = _ref3[2];

    parentId = parseInt(parentId, 10);

    if (isNaN(parentId)) {
      return INITIAL_STATE;
    }

    var postType = getPostType(postTypeSlug);
    var isHierarchical = (0, _lodash.get)(postType, ['hierarchical'], false);

    if (!isHierarchical) {
      return INITIAL_STATE;
    } // Borrowed from https://github.com/WordPress/gutenberg/blob/master/packages/editor/src/components/page-attributes/parent.js


    var items = getEntityRecords('postType', postTypeSlug, {
      per_page: -1,
      exclude: postId,
      parent_exclude: postId,
      orderby: 'menu_order',
      order: 'asc'
    }) || [];
    var ancestors = getAncestorsFromPostsList(parentId, items);
    var level = ancestors.length + 1;
    return {
      post_ancestors: ancestors,
      post_parent_id: parentId,
      post_level: level
    };
  }));
});