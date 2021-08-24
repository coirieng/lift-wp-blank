"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = fromEventPattern;

var _callbagCreate = _interopRequireDefault(require("callbag-create"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * External dependencies.
 */

/**
 * Callbag source factory from `addHandler` and `removeHandler` pair.
 *
 * @see https://github.com/Andarist/callbag-from-event-pattern
 * @param  {Function} addHandler
 * @param  {Function} removeHandler
 * @param  {Function} argsTransformer
 * @return {Function}
 */
function fromEventPattern(addHandler, removeHandler) {
  var argsTransformer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args;
  };
  return (0, _callbagCreate["default"])(function (sink) {
    var handler = function handler() {
      return sink(1, argsTransformer.apply(void 0, arguments));
    };

    addHandler(handler);
    return function () {
      return removeHandler(handler);
    };
  });
}