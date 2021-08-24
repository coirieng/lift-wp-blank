"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = fromSelector;

var _data = require("@wordpress/data");

/**
 * External dependencies.
 */

/**
 * Creates a callbag listenable source from a store's selector.
 *
 * @param  {Function} selector
 * @param  {...mixed} args
 * @return {Function}
 */
function fromSelector(selector) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return function (start, sink) {
    if (start !== 0) {
      return;
    }

    var unsubscribe = (0, _data.subscribe)(function () {
      return sink(1, selector.apply(void 0, args));
    });
    sink(0, function (type) {
      if (type === 2) {
        unsubscribe();
      }
    });
    sink(1, selector.apply(void 0, args));
  };
}