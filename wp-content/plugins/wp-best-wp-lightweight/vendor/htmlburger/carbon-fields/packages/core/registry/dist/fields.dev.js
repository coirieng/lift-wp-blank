"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFieldType = exports.registerFieldType = void 0;

var _ = require("./");

/**
 * Internal dependencies.
 */
var _createRegistry = (0, _.createRegistry)('field', ['metabox', 'block']),
    registerFieldType = _createRegistry.registerFieldType,
    getFieldType = _createRegistry.getFieldType;

exports.getFieldType = getFieldType;
exports.registerFieldType = registerFieldType;