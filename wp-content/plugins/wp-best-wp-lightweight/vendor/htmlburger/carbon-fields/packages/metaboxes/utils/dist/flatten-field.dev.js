"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = flattenField;

var _lodash = require("lodash");

var _core = require("@carbon-fields/core");

/**
 * External dependencies.
 */

/**
 * Carbon Fields dependencies.
 */

/**
 * Flattens a field.
 *
 * @param  {Object}   field
 * @param  {string}   containerId
 * @param  {Object[]} accumulator
 * @return {Object}
 */
function flattenField(field, containerId, accumulator) {
  field = (0, _lodash.cloneDeep)(field); // Replace the id of the field.

  field.id = (0, _core.uniqueId)(); // Keep reference to the container.

  field.container_id = containerId; // The complex fields represent a nested structure of fields.
  // So we need to flat them as well.

  if (field.type === 'complex') {
    field.value.forEach(function (group) {
      group.id = (0, _core.uniqueId)();
      group.container_id = containerId;
      group.fields = group.fields.map(function (groupField) {
        return flattenField(groupField, containerId, accumulator);
      });
    });
  }

  accumulator.push(field);
  return (0, _lodash.pick)(field, ['id', 'type', 'name', 'base_name']);
}