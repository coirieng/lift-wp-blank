"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = aperture;

var _immer = _interopRequireDefault(require("immer"));

var _hooks = require("@wordpress/hooks");

var _lodash = require("lodash");

var _callbagBasics = require("callbag-basics");

require("./post-parent");

require("./post-format");

require("./post-template");

require("./post-term");

require("./term-parent");

require("./user-role");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */

/**
 * The function that controls the stream of side effects.
 *
 * @param  {Object} props
 * @param  {string} props.context
 * @return {Object}
 */
// eslint-disable-next-line no-unused-vars
function aperture(component, _ref) {
  var context = _ref.context;
  var postParent$ = (0, _hooks.applyFilters)("carbon-fields.conditional-display-post-parent.".concat(context));
  var postFormat$ = (0, _hooks.applyFilters)("carbon-fields.conditional-display-post-format.".concat(context));
  var postTemplate$ = (0, _hooks.applyFilters)("carbon-fields.conditional-display-post-template.".concat(context));
  var postTerm$ = (0, _hooks.applyFilters)("carbon-fields.conditional-display-post-term.".concat(context));
  var termParent$ = (0, _hooks.applyFilters)("carbon-fields.conditional-display-term-parent.".concat(context));
  var userRole$ = (0, _hooks.applyFilters)("carbon-fields.conditional-display-user-role.".concat(context));
  return (0, _callbagBasics.pipe)((0, _callbagBasics.merge)(postParent$, postFormat$, postTemplate$, postTerm$, termParent$, userRole$), (0, _callbagBasics.scan)(function (previous, current) {
    return (0, _immer["default"])(previous, function (draft) {
      (0, _lodash.assign)(draft, current);
    });
  }));
}