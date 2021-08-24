"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupState = setupState;
exports.updateState = updateState;
exports.updateFieldValue = updateFieldValue;
exports.addFields = addFields;
exports.cloneFields = cloneFields;
exports.removeFields = removeFields;
exports.addContainer = addContainer;
exports.removeContainer = removeContainer;
exports.receiveSidebar = receiveSidebar;
exports.lockSaving = lockSaving;
exports.unlockSaving = unlockSaving;

/**
 * Returns an action object used to setup the state when first opening an editor.
 *
 * @param  {Object[]} containers
 * @param  {Object}   fields
 * @return {Object}
 */
function setupState(containers, fields) {
  return {
    type: 'SETUP_STATE',
    payload: {
      containers: containers,
      fields: fields
    }
  };
}
/**
 * Returns an action object used to update the state.
 *
 * @param  {Object[]} containers
 * @param  {Object}   fields
 * @return {Object}
 */


function updateState(containers, fields) {
  return {
    type: 'UPDATE_STATE',
    payload: {
      containers: containers,
      fields: fields
    }
  };
}
/**
 * Returns an action object used to update the field's value.
 *
 * @param  {string}   fieldId
 * @param  {mixed}    value
 * @param  {string[]} fieldsToRemove It's used by the complex fields to remove the nested
 *                                 fields within a single action.
 * @return {Object}
 */


function updateFieldValue(fieldId, value) {
  var fieldsToRemove = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return {
    type: 'UPDATE_FIELD_VALUE',
    payload: {
      fieldId: fieldId,
      value: value,
      fieldsToRemove: fieldsToRemove
    }
  };
}
/**
 * Returns an action object used to add the fields.
 *
 * @param  {Object[]} fields
 * @return {Object}
 */


function addFields(fields) {
  return {
    type: 'ADD_FIELDS',
    payload: {
      fields: fields
    }
  };
}
/**
 * Returns an action object used to clone the fields.
 *
 * @param  {string[]} originFieldIds
 * @param  {string[]} cloneFieldIds
 * @return {Object}
 */


function cloneFields(originFieldIds, cloneFieldIds) {
  return {
    type: 'CLONE_FIELDS',
    payload: {
      originFieldIds: originFieldIds,
      cloneFieldIds: cloneFieldIds
    }
  };
}
/**
 * Returns an action object used to remove the fields.
 *
 * @param  {string[]} fieldIds
 * @return {Object}
 */


function removeFields(fieldIds) {
  return {
    type: 'REMOVE_FIELDS',
    payload: {
      fieldIds: fieldIds
    }
  };
}
/**
 * Returns an action object used to add a container to all containers.
 *
 * @param  {Object} container
 * @return {Object}
 */


function addContainer(container) {
  return {
    type: 'ADD_CONTAINER',
    payload: container
  };
}
/**
 * Returns an action object used to remove a container from all containers.
 *
 * @param  {Object} container
 * @return {Object}
 */


function removeContainer(container) {
  return {
    type: 'REMOVE_CONTAINER',
    payload: container
  };
}
/**
 * Returns an action object used to add the created sidebar to all fields.
 *
 * @param  {Object} sidebar
 * @return {Object}
 */


function receiveSidebar(sidebar) {
  return {
    type: 'RECEIVE_SIDEBAR',
    payload: sidebar
  };
}
/**
 * Returns an action object used to signal that saving is locked.
 *
 * @param  {string} lockName
 * @return {Object}
 */


function lockSaving(lockName) {
  return {
    type: 'LOCK_SAVING',
    payload: {
      lockName: lockName
    }
  };
}
/**
 * Returns an action object used to signal that saving is unlocked.
 *
 * @param  {string} lockName
 * @return {Object}
 */


function unlockSaving(lockName) {
  return {
    type: 'UNLOCK_SAVING',
    payload: {
      lockName: lockName
    }
  };
}