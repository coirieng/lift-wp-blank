"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupContainerDefinitions = setupContainerDefinitions;
exports.setupFieldDefinitions = setupFieldDefinitions;

/**
 * Returns an action object used to setup the definitions state when first opening an editor.
 *
 * @param  {Object} definitions
 * @return {Object}
 */
function setupContainerDefinitions(definitions) {
  return {
    type: 'SETUP_CONTAINER_DEFINITIONS',
    payload: {
      definitions: definitions
    }
  };
}
/**
 * Returns an action object used to setup the definitions state when first opening an editor.
 *
 * @param  {Object} definitions
 * @return {Object}
 */


function setupFieldDefinitions(definitions) {
  return {
    type: 'SETUP_FIELD_DEFINITIONS',
    payload: {
      definitions: definitions
    }
  };
}