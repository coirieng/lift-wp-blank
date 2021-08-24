"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContainers = getContainers;
exports.getContainerById = getContainerById;
exports.getFields = getFields;
exports.getFieldsByContainerId = getFieldsByContainerId;
exports.getFieldById = getFieldById;
exports.isSavingLocked = isSavingLocked;
exports.isDirty = isDirty;
exports.isFieldUpdated = isFieldUpdated;
exports.getComplexGroupValues = getComplexGroupValues;

var _lodash = require("lodash");

/**
 * External dependencies.
 */

/**
 * Returns the containers.
 *
 * @param  {Object} state
 * @return {Object[]}
 */
function getContainers(state) {
  return state.containers;
}
/**
 * Returns a container by an id.
 *
 * @param  {Object} state
 * @param  {string} containerId
 * @return {?Object}
 */


function getContainerById(state, containerId) {
  return state.containers[containerId];
}
/**
 * Returns the fields.
 *
 * @param  {Object} state
 * @return {Object}
 */


function getFields(state) {
  return state.fields;
}
/**
 * Returns the fields that belong to the specified container.
 *
 * @param  {Object} state
 * @param  {string} containerId
 * @return {Object[]}
 */


function getFieldsByContainerId(state, containerId) {
  return (0, _lodash.filter)(state.fields, ['container_id', containerId]);
}
/**
 * Returns a field by an id.
 *
 * @param  {Object} state
 * @param  {string} fieldId
 * @return {?Object}
 */


function getFieldById(state, fieldId) {
  return state.fields[fieldId];
}
/**
 * Returns whether saving is locked.
 *
 * @param  {Object} state
 * @return {boolean}
 */


function isSavingLocked(state) {
  return Object.keys(state.savingLock).length > 0;
}
/**
 * Returns whether the metaboxes fields contain unsaved changed.
 *
 * @param  {Object} state
 * @return {boolean}
 */


function isDirty(state) {
  return state.isDirty;
}
/**
 * Returns whether the metaboxes fields contain unsaved changed.
 *
 * @param  {Object} state
 * @return {boolean}
 */


function isFieldUpdated(state) {
  return state.isFieldUpdated;
}
/**
 * Returns a map of field values for a given group.
 *
 * @param  {Object}   state
 * @param  {string[]} fieldIds
 * @return {Object}
 */


function getComplexGroupValues(state, fieldIds) {
  var fields = (0, _lodash.pick)(getFields(state), fieldIds);
  fields = (0, _lodash.mapKeys)(fields, function (field) {
    return field.base_name.replace(/\-/g, '_');
  });
  fields = (0, _lodash.mapValues)(fields, function (field) {
    return field.value;
  });
  return fields;
}