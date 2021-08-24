"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValidationError = getValidationError;
exports.isFieldVisible = isFieldVisible;

/**
 * Returns the validation error for the specified field.
 *
 * @param  {Object} state
 * @param  {string} fieldId
 * @return {mixed}
 */
function getValidationError(state, fieldId) {
  return state.validation[fieldId] || null;
}
/**
 * Returns whether the field is visible.
 *
 * @param  {Object} state
 * @param  {string} fieldId
 * @return {boolean}
 */


function isFieldVisible(state, fieldId) {
  return state.hiddenFields.indexOf(fieldId) === -1;
}