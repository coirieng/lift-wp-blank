"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Consumer = exports.Provider = void 0;

var _element = require("@wordpress/element");

/**
 * External dependencies.
 */
var _createContext = (0, _element.createContext)(false),
    Provider = _createContext.Provider,
    Consumer = _createContext.Consumer;

exports.Consumer = Consumer;
exports.Provider = Provider;