"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markAsValid = markAsValid;
exports.markAsInvalid = markAsInvalid;
exports.showField = showField;
exports.hideField = hideField;

/**
 * Returns an action object used to mark the field as valid.
 *
 * @param  {string} fieldId
 * @return {Object}
 */
function markAsValid(fieldId) {
  return {
    type: 'MARK_AS_VALID',
    payload: {
      fieldId: fieldId
    }
  };
}
/**
 * Returns an action object used to mark the field as invalid.
 *
 * @param  {string} fieldId
 * @param  {string} error
 * @return {Object}
 */


function markAsInvalid(fieldId, error) {
  return {
    type: 'MARK_AS_INVALID',
    payload: {
      fieldId: fieldId,
      error: error
    }
  };
}
/**
 * Returns an action object used to show the field.
 *
 * @param  {string} fieldId
 * @return {Object}
 */


function showField(fieldId) {
  return {
    type: 'SHOW_FIELD',
    payload: {
      fieldId: fieldId
    }
  };
}
/**
 * Returns an action object used to hide the field.
 *
 * @param  {string} fieldId
 * @return {Object}
 */


function hideField(fieldId) {
  return {
    type: 'HIDE_FIELD',
    payload: {
      fieldId: fieldId
    }
  };
}