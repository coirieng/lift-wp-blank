"use strict";

var _hooks = require("@wordpress/hooks");

var _data = require("@wordpress/data");

var _lodash = require("lodash");

var _core = require("@carbon-fields/core");

var _stripCompactInputPrefix = _interopRequireDefault(require("../../utils/strip-compact-input-prefix"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * External dependencies.
 */

/**
 * Carbon Fields dependencies.
 */

/**
 * Internal dependencies.
 */

/**
 * Returns a field with the given name.
 *
 * @param  {Object[]} fields
 * @param  {string}   name
 * @return {?Object}
 */
function findFieldByName(fields, name) {
  return (0, _lodash.find)(fields, function (field) {
    return field.name === name;
  });
}

(0, _hooks.addFilter)('carbon-fields.association.metabox', 'carbon-fields/metaboxes', (0, _core.withProps)(function (props) {
  return {
    hierarchyResolver: function hierarchyResolver() {
      // Get all fields.
      var container = (0, _data.select)('carbon-fields/metaboxes').getContainerById(props.containerId);
      var fields = (0, _data.select)('carbon-fields/metaboxes').getFieldsByContainerId(props.containerId); // Get a clean version of field's name.

      var fieldName = (0, _stripCompactInputPrefix["default"])(props.name); // Get the path.

      var path = fieldName.split(/\[|\]/g); // Remove chunks that are empty.

      path = path.filter(function (chunk) {
        return chunk !== '';
      });

      if (container.type === 'widget') {
        return props.field.base_name;
      } // Get the root field.


      var rootFieldName = path.shift();
      var rootField = findFieldByName(fields, rootFieldName); // Get the hierarchy.

      var accessor = fields.indexOf(rootField);
      var hierarchy = rootField.base_name; // Visit every branch in the tree so we can get the full hierarchy.

      while (path.length > 0) {
        var chunk = path.shift();
        var isGroup = !isNaN(chunk);
        var isSameField = chunk === props.field.base_name;
        var isNestedComplex = !isGroup && !isSameField;

        if (isGroup) {
          accessor = "".concat(accessor, ".value.").concat(chunk, ".name");
          hierarchy = "".concat(hierarchy, "[").concat(chunk, "]:").concat((0, _lodash.get)(fields, accessor), "/");
        }

        if (isNestedComplex) {
          var fieldReferences = (0, _lodash.get)(fields, accessor.replace(/\.name$/, '.fields'));
          var fieldReference = findFieldByName(fieldReferences, chunk);
          var field = (0, _lodash.find)(fields, ['id', fieldReference.id]);
          accessor = fields.indexOf(field);
          hierarchy = "".concat(hierarchy).concat(field.base_name);
        }

        if (isSameField) {
          hierarchy = "".concat(hierarchy).concat(chunk);
        }
      }

      return hierarchy;
    }
  };
}));