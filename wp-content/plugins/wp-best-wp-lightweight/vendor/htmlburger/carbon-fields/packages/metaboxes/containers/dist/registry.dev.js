"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContainerType = exports.registerContainerType = void 0;

var _core = require("@carbon-fields/core");

/**
 * External dependencies.
 */
var _createRegistry = (0, _core.createRegistry)('container', ['classic', 'gutenberg']),
    registerContainerType = _createRegistry.registerContainerType,
    getContainerType = _createRegistry.getContainerType;

exports.getContainerType = getContainerType;
exports.registerContainerType = registerContainerType;