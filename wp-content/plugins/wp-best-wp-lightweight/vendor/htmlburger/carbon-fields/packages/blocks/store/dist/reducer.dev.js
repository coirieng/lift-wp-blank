"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.containerDefinitionsByBlockName = containerDefinitionsByBlockName;
exports.fieldDefinitionsByBlockName = fieldDefinitionsByBlockName;
exports["default"] = void 0;

var _data = require("@wordpress/data");

/**
 * External dependencies.
 */

/**
 * The reducer that keeps track of container definitions keyed by block's name.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
function containerDefinitionsByBlockName() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SETUP_CONTAINER_DEFINITIONS':
      return action.payload.definitions;

    default:
      return state;
  }
}
/**
 * The reducer that keeps track of field definitions keyed by block's name.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */


function fieldDefinitionsByBlockName() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SETUP_FIELD_DEFINITIONS':
      return action.payload.definitions;

    default:
      return state;
  }
}

var _default = (0, _data.combineReducers)({
  containerDefinitionsByBlockName: containerDefinitionsByBlockName,
  fieldDefinitionsByBlockName: fieldDefinitionsByBlockName
});

exports["default"] = _default;