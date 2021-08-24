"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validation = validation;
exports.hiddenFields = hiddenFields;
exports["default"] = void 0;

var _data = require("@wordpress/data");

var _lodash = require("lodash");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The reducer that keeps track of the field's validation status.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
function validation() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'MARK_AS_VALID':
      return (0, _lodash.omit)(state, [action.payload.fieldId]);

    case 'MARK_AS_INVALID':
      var _action$payload = action.payload,
          fieldId = _action$payload.fieldId,
          error = _action$payload.error;
      return _objectSpread({}, state, _defineProperty({}, fieldId, error));

    default:
      return state;
  }
}
/**
 * The reducer that keeps track of the fields that are hidden
 * by conditional logic.
 *
 * @param  {string[]} state
 * @param  {Object}   action
 * @return {Object}
 */


function hiddenFields() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SHOW_FIELD':
      if (state.indexOf(action.payload.fieldId) === -1) {
        return state;
      }

      return (0, _lodash.without)(state, action.payload.fieldId);

    case 'HIDE_FIELD':
      if (state.indexOf(action.payload.fieldId) > -1) {
        return state;
      }

      return state.concat(action.payload.fieldId);

    default:
      return state;
  }
}

var _default = (0, _data.combineReducers)({
  validation: validation,
  hiddenFields: hiddenFields
});

exports["default"] = _default;