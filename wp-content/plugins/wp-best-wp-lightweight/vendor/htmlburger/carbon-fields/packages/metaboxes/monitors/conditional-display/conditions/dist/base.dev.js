"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _i18n = require("@wordpress/i18n");

var _lodash = require("lodash");

var _equality = _interopRequireDefault(require("../comparers/equality"));

var _contain = _interopRequireDefault(require("../comparers/contain"));

var _scalar = _interopRequireDefault(require("../comparers/scalar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */
var _default = {
  /**
   * The supported comparers.
   *
   * @type {Function[]}
   */
  comparers: [_equality["default"], _contain["default"], _scalar["default"]],

  /**
   * Checks if the condition is fulfiled.
   *
   * @param  {Object} definition
   * @param  {Object} values
   * @return {boolean}
   */
  isFulfiled: function isFulfiled(definition, values) {
    var compare = definition.compare,
        value = definition.value;
    return this.firstComparerIsCorrect(this.getEnvironmentValue(definition, values), compare, value);
  },

  /**
   * Checks if any comparer is correct for `a` and `b`.
   *
   * @param  {mixed}  a
   * @param  {string} operator
   * @param  {mixed}  b
   * @return {boolean}
   */
  firstComparerIsCorrect: function firstComparerIsCorrect(a, operator, b) {
    var comparer = (0, _lodash.find)(this.comparers, function (item) {
      return item.isOperatorSupported(operator);
    });

    if (!comparer) {
      // eslint-disable-next-line no-console
      console.error((0, _i18n.sprintf)((0, _i18n.__)('Unsupported container condition comparison operator used - "%1$s".', 'carbon-fields-ui'), operator));
      return false;
    }

    return comparer.evaluate(a, operator, b);
  },

  /**
   * Returns the value from the environment.
   *
   * @param  {Object} definition
   * @param  {Object} values
   * @return {Object}
   */
  getEnvironmentValue: function getEnvironmentValue(definition, values) {
    return values[definition.type];
  }
};
exports["default"] = _default;