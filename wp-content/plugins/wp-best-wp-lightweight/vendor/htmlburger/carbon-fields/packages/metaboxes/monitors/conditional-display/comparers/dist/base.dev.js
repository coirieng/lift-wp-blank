"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  /**
   * The supported operators.
   *
   * @type {string[]}
   */
  operators: [],

  /**
   * Checks if the operator is supported.
   *
   * @param  {string} operator
   * @return {boolean}
   */
  isOperatorSupported: function isOperatorSupported(operator) {
    return this.operators.indexOf(operator) > -1;
  },

  /**
   * Performs the comparison.
   *
   * @param  {mixed}  a
   * @param  {string} operator
   * @param  {mixed}  b
   * @return {boolean}
   */
  evaluate: function evaluate() {
    return false;
  }
};
exports["default"] = _default;