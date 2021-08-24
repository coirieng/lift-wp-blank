"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizePreloadedState = normalizePreloadedState;

var _lodash = require("lodash");

var _flattenField = _interopRequireDefault(require("../utils/flatten-field"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */

/**
 * Transform the shape of the given state to be more Redux friendly.
 *
 * @param  {Object} state
 * @return {Object}
 */
function normalizePreloadedState(state) {
  var fields = [];
  var containers = state.filter(function (_ref) {
    var id = _ref.id;
    return !(0, _lodash.endsWith)(id, '__i__');
  }).map(function (container) {
    return (0, _lodash.assign)({}, container, {
      fields: container.fields.map(function (field) {
        return (0, _flattenField["default"])(field, container.id, fields);
      })
    });
  });
  return {
    containers: containers,
    fields: fields
  };
}