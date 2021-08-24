"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _callbagOf = _interopRequireDefault(require("callbag-of"));

var _callbagTakeUntil = _interopRequireDefault(require("callbag-take-until"));

var _callbagDistinctUntilChanged = _interopRequireDefault(require("callbag-distinct-until-changed"));

var _callbagBasics = require("callbag-basics");

var _data = require("@wordpress/data");

var _lodash = require("lodash");

var _core = require("@carbon-fields/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Returns all root fields from the given holder
 * while excluding some of them.
 *
 * @param  {Object}   fieldsHolder
 * @param  {Object}   allFields
 * @param  {string[]} excludedIds
 * @return {Object[]}
 */
function getFieldsFromFieldsHolder(fieldsHolder, allFields) {
  var excludedIds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (typeof fieldsHolder === 'undefined') {
    return [];
  }

  return (0, _lodash.pick)(allFields, (0, _lodash.difference)((0, _lodash.map)(fieldsHolder.fields, 'id'), excludedIds));
}
/**
 * Adds the `parent.` parent prefix to field's name.
 *
 * @param  {Object[]} fields
 * @param  {number}   depth
 * @return {Array[]}
 */


function mapParentPrefix(fields) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return (0, _lodash.map)(fields, function (field) {
    return [field.id, "".concat((0, _lodash.repeat)('parent.', depth)).concat(field.base_name)];
  });
}
/**
 * The function used to track dependencies required
 * by conditional logic.
 *
 * @param  {Object} props
 * @param  {Object} component
 * @return {Object}
 */


function input(props, component) {
  var _select = (0, _data.select)('carbon-fields/metaboxes'),
      getFieldsByContainerId = _select.getFieldsByContainerId;

  return (0, _callbagBasics.pipe)((0, _callbagBasics.merge)((0, _callbagOf["default"])(getFieldsByContainerId(props.containerId)), (0, _core.fromSelector)(getFieldsByContainerId, props.containerId)), (0, _callbagTakeUntil["default"])(component.unmount), (0, _callbagDistinctUntilChanged["default"])(_lodash.isEqual));
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
  fields = (0, _lodash.keyBy)(fields, 'id');
  var container = (0, _data.select)('carbon-fields/metaboxes').getContainerById(props.containerId);
  var isTopLevelField = (0, _lodash.some)(container.fields, ['id', props.id]);
  var siblingFields = [];

  if (isTopLevelField) {
    siblingFields = getFieldsFromFieldsHolder(container, fields, [props.id]);
    siblingFields = mapParentPrefix(siblingFields);
  } else {
    var fieldName = props.name.replace(new RegExp("^".concat(window.cf.config.compactInputKey, "\\[(.+?)\\]")), '$1'); // Get the root field.

    var rootField = (0, _lodash.find)(fields, function (field) {
      return field.container_id === props.containerId && (0, _lodash.startsWith)(fieldName, field.name);
    }); // Get the hierarchy.

    var path = fieldName.split(/\[|\]/g); // Remove the chunk with name of root field
    // because we already have it.

    path.shift(); // Remove any chunks that don't have a value.

    path = path.filter(function (chunk) {
      return chunk !== '';
    }); // Remove the chunk with name of field
    // because we don't needed it.

    path.pop(); // Keep reference to the depth
    // so we can add the `parent.` prefix.

    var depth = path.reduce(function (accumulator, chunk) {
      return isNaN(chunk) ? accumulator + 1 : accumulator;
    }, 0); // Collect fields that are siblings of root field.

    siblingFields = getFieldsFromFieldsHolder(container, fields, [rootField.id]);
    siblingFields = mapParentPrefix(siblingFields, depth + 1); // Keep reference to the full path of the field.

    var pathPrefix = "".concat(rootField.id, ".value");

    while (path.length > 0) {
      var chunk = path.shift();
      var isGroup = !isNaN(chunk);
      var isNestedComplex = !isGroup;

      if (isGroup) {
        pathPrefix = "".concat(pathPrefix, "[").concat(chunk, "]");
        var group = (0, _lodash.get)(fields, pathPrefix);
        var groupFields = getFieldsFromFieldsHolder(group, fields, [props.id]);
        siblingFields = siblingFields.concat(mapParentPrefix(groupFields, depth));
        pathPrefix = "".concat(pathPrefix, ".fields");
      }

      if (isNestedComplex) {
        var groupField = (0, _lodash.find)((0, _lodash.get)(fields, pathPrefix), ['name', chunk]);
        pathPrefix = "".concat(groupField.id, ".value");
        depth--;
      }
    }
  }

  siblingFields = siblingFields.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        id = _ref2[0],
        name = _ref2[1];

    return [name, (0, _lodash.get)(fields, "".concat(id, ".value"))];
  });
  return (0, _lodash.fromPairs)(siblingFields);
}

var _default = (0, _core.withConditionalLogic)(input, output);

exports["default"] = _default;