"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _callbagDistinctUntilChanged = _interopRequireDefault(require("callbag-distinct-until-changed"));

var _data = require("@wordpress/data");

var _callbagBasics = require("callbag-basics");

var _lodash = require("lodash");

var _core = require("@carbon-fields/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * External dependencies.
 */

/**
 * Carbon Fields dependencies.
 */

/**
 * Adds the `parent.` parent prefix to field's name.
 *
 * @param  {Object[]} fields
 * @param  {number}   depth
 * @return {Array[]}
 */
function mapParentPrefix(fields) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return (0, _lodash.mapKeys)(fields, function (value, key) {
    return "".concat((0, _lodash.repeat)('parent.', depth)).concat(key);
  });
}
/**
 * Returns whether the given string is a group identifier.
 *
 * @param  {string} id
 * @return {boolean}
 */


function isComplexGroupIdentifier(id) {
  return (0, _lodash.startsWith)(id, 'cf-');
}
/**
 * The function used to track dependencies required
 * by conditional logic.
 *
 * @param  {Object} props
 * @return {Object}
 */


function input(props) {
  return (0, _callbagBasics.pipe)((0, _core.fromSelector)((0, _data.select)('core/editor').getBlock, props.blockId), (0, _callbagDistinctUntilChanged["default"])(), (0, _callbagBasics.map)(function (_ref) {
    var attributes = _ref.attributes;
    return attributes.data;
  }));
}
/**
 * The function that provides the data that needs to be
 * evaluated by conditional logic.
 *
 * @param  {Object} props
 * @param  {Object} fields
 * @return {Object}
 */


function output(props, fields) {
  var isTopLevelField = (0, _lodash.has)(fields, props.field.base_name);
  var siblingFields = {};

  if (isTopLevelField) {
    siblingFields = mapParentPrefix((0, _lodash.omit)(fields, [props.field.base_name]));
  } else {
    // Get the hierarchy.
    var path = props.id.split('__'); // Remove the chunk with identifier of block since
    // we already have it.

    path.shift(); // Remove the chunk with name of root field.

    var rootFieldName = path.shift(); // Remove the chunk with name of field since
    // we already have it.

    path.pop(); // Keep reference to the depth
    // so we can add the `parent.` prefix.

    var depth = path.reduce(function (accumulator, chunk) {
      return isComplexGroupIdentifier(chunk) ? accumulator : accumulator + 1;
    }, 0); // Collect fields that are siblings of root field.

    siblingFields = (0, _lodash.omit)(fields, [rootFieldName]);
    siblingFields = mapParentPrefix(siblingFields, depth + 1); // Keep reference to the full path of the field.

    var pathPrefix = rootFieldName;

    while (path.length > 0) {
      var chunk = path.shift();
      var isGroup = isComplexGroupIdentifier(chunk);
      var isNestedComplex = !isGroup;

      if (isGroup) {
        var groupIndex = (0, _lodash.findIndex)((0, _lodash.get)(fields, pathPrefix), ['_id', chunk]);
        pathPrefix = "".concat(pathPrefix, ".").concat(groupIndex);
        var groupFields = (0, _lodash.get)(fields, pathPrefix);
        groupFields = (0, _lodash.omit)(groupFields, ['_id', '_type', props.field.base_name]);
        groupFields = mapParentPrefix(groupFields, depth);
        (0, _lodash.assign)(siblingFields, groupFields);
      }

      if (isNestedComplex) {
        pathPrefix = "".concat(pathPrefix, ".").concat(chunk);
        depth--;
      }
    }
  }

  return siblingFields;
}

var _default = (0, _core.withConditionalLogic)(input, output);

exports["default"] = _default;