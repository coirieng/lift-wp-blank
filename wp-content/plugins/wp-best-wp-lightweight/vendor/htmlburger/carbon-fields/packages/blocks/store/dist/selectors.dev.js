"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContainerDefinitionByBlockName = getContainerDefinitionByBlockName;
exports.getFieldDefinitionsByBlockName = getFieldDefinitionsByBlockName;

/**
 * Get the container by a given block name.
 *
 * @param  {Object} state
 * @param  {string} blockName
 * @return {Object}
 */
function getContainerDefinitionByBlockName(state, blockName) {
  return state.containerDefinitionsByBlockName[blockName.replace('carbon-fields/', '')] || {};
}
/**
 * Get the fields by a given block name.
 *
 * @param  {Object} state
 * @param  {string} blockName
 * @return {Object[]}
 */


function getFieldDefinitionsByBlockName(state, blockName) {
  return state.fieldDefinitionsByBlockName[blockName.replace('carbon-fields/', '')] || [];
}