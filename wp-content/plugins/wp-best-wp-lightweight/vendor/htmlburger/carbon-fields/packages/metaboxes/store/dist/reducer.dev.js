"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.containers = containers;
exports.fields = fields;
exports.savingLock = savingLock;
exports.isDirty = isDirty;
exports.isFieldUpdated = isFieldUpdated;
exports["default"] = void 0;

var _immer = _interopRequireDefault(require("immer"));

var _data = require("@wordpress/data");

var _lodash = require("lodash");

var _core = require("@carbon-fields/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The reducer that keeps track of the containers.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
function containers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SETUP_STATE':
      return action.payload.containers;

    case 'UPDATE_STATE':
      return (0, _immer["default"])(state, function (draft) {
        (0, _lodash.values)(action.payload.containers).forEach(function (container) {
          draft[container.id] = container;
        });
      });

    case 'ADD_CONTAINER':
      return (0, _immer["default"])(state, function (draft) {
        draft[action.payload.id] = action.payload;
      });

    case 'REMOVE_CONTAINER':
      return (0, _lodash.omit)(state, action.payload);

    default:
      return state;
  }
}
/**
 * Clones a field.
 *
 * @param  {string}   originId
 * @param  {string}   cloneId
 * @param  {Object}   fields
 * @param  {Object[]} accumulator
 * @return {Object[]}
 */


function cloneField(originId, cloneId, fields, accumulator) {
  var field = (0, _lodash.cloneDeep)(fields[originId]);
  field.id = cloneId;

  if (field.type === 'complex') {
    field.value.forEach(function (group) {
      group.id = (0, _core.uniqueId)();
      accumulator = group.fields.reduce(function (groupAccumulator, groupField) {
        var originGroupFieldId = groupField.id;
        var cloneGroupFieldId = (0, _core.uniqueId)();
        groupField.id = cloneGroupFieldId;
        return cloneField(originGroupFieldId, cloneGroupFieldId, fields, groupAccumulator);
      }, accumulator);
    });
  }

  return accumulator.concat(field);
}
/**
 * Returns a list of field ids by a given root id.
 *
 * @param  {string}   fieldId
 * @param  {Object}   fields
 * @param  {string[]} accumulator
 * @return {string[]}
 */


function getFieldIdsByRootId(fieldId, fields, accumulator) {
  var field = fields[fieldId];

  if (field.type === 'complex') {
    field.value.forEach(function (group) {
      accumulator = group.fields.reduce(function (groupAccumulator, groupField) {
        return getFieldIdsByRootId(groupField.id, fields, groupAccumulator);
      }, accumulator);
    });
  }

  return accumulator.concat(fieldId);
}
/**
 * The reducer that keeps track of the fields.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */


function fields() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SETUP_STATE':
      return action.payload.fields;

    case 'UPDATE_STATE':
      return (0, _immer["default"])(state, function (draft) {
        (0, _lodash.values)(action.payload.fields).forEach(function (field) {
          draft[field.id] = field;
        });
      });

    case 'UPDATE_FIELD_VALUE':
      return (0, _immer["default"])(state, function (draft) {
        var _action$payload = action.payload,
            fieldId = _action$payload.fieldId,
            value = _action$payload.value,
            fieldsToRemove = _action$payload.fieldsToRemove;
        draft[fieldId].value = value;
        var fieldIdsToRemove = fieldsToRemove.reduce(function (accumulator, fieldIdToRemove) {
          return getFieldIdsByRootId(fieldIdToRemove, state, accumulator);
        }, []);
        fieldIdsToRemove.forEach(function (fieldIdToRemove) {
          (0, _lodash.unset)(draft, fieldIdToRemove);
        });
      });

    case 'ADD_FIELDS':
      return (0, _immer["default"])(state, function (draft) {
        action.payload.fields.forEach(function (field) {
          draft[field.id] = field;
        });
      });

    case 'CLONE_FIELDS':
      return (0, _immer["default"])(state, function (draft) {
        var _action$payload2 = action.payload,
            originFieldIds = _action$payload2.originFieldIds,
            cloneFieldIds = _action$payload2.cloneFieldIds;
        var clonedFields = originFieldIds.reduce(function (accumulator, originFieldId, index) {
          return cloneField(originFieldId, cloneFieldIds[index], draft, accumulator);
        }, []);
        (0, _lodash.assign)(draft, (0, _lodash.keyBy)(clonedFields, 'id'));
      });

    case 'REMOVE_FIELDS':
      var fieldIds = action.payload.fieldIds.reduce(function (accumulator, fieldId) {
        return getFieldIdsByRootId(fieldId, state, accumulator);
      }, []);
      return (0, _lodash.omit)(state, fieldIds);

    case 'RECEIVE_SIDEBAR':
      return (0, _immer["default"])(state, function (draft) {
        (0, _lodash.forEach)(draft, function (field) {
          if (field.type === 'sidebar') {
            field.options.unshift(action.payload);
          }
        });
      });

    default:
      return state;
  }
}
/**
 * The reducer that keeps track of the save locks.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */


function savingLock() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LOCK_SAVING':
      return _objectSpread({}, state, _defineProperty({}, action.payload.lockName, true));

    case 'UNLOCK_SAVING':
      return (0, _lodash.omit)(state, [action.payload.lockName]);

    default:
      return state;
  }
}
/**
 * The reducer that keeps track if there is dirty fields.
 *
 * @param  {boolean} state
 * @param  {Object}  action
 * @return {Object}
 */


function isDirty() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPDATE_FIELD_VALUE':
      return true;

    default:
      return state;
  }
}
/**
 * The reducer that keeps track if an update is being made.
 *
 * @param  {boolean} state
 * @param  {Object}  action
 * @return {Object}
 */


function isFieldUpdated(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD_VALUE':
      return {
        action: action
      };

    default:
      return false;
  }
}

var _default = (0, _data.combineReducers)({
  containers: containers,
  fields: fields,
  savingLock: savingLock,
  isDirty: isDirty,
  isFieldUpdated: isFieldUpdated
});

exports["default"] = _default;