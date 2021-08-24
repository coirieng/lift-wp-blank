"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgbaToHex = exports.hexToRgba = void 0;

var _lodash = require("lodash");

/**
 * The external dependencies.
 */

/**
 * Converts the given Hex color to RGBA.
 *
 * @param  {string} hex
 * @return {Array}
 */
var hexToRgba = function hexToRgba(hex) {
  return (0, _lodash.flow)([removeHash, splitHex, parseToDec])(hex);
};
/**
 * Converts the given RGBA to Hex color.
 *
 * @param  {Object} rgba
 * @return {string}
 */


exports.hexToRgba = hexToRgba;

var rgbaToHex = function rgbaToHex(rgba) {
  if (!rgba) {
    return '';
  }

  var r = rgba.r.toString(16);
  var g = rgba.g.toString(16);
  var b = rgba.b.toString(16);
  var a = Math.floor(rgba.a * 255).toString(16);
  return [r, g, b, a].reduce(function (memo, part) {
    if (part.length === 1) {
      part = "0".concat(part);
    }

    return "".concat(memo).concat(part);
  }, '#');
};
/**
 * Removes the '#' symbol if existing in the given Hex.
 *
 * @param  {string} hex
 * @return {string}
 */


exports.rgbaToHex = rgbaToHex;

var removeHash = function removeHash(hex) {
  return hex.replace('#', '');
};
/**
 * Splits the Hex string in to-be-decimal groups.
 *
 * @param  {string} hex
 * @return {Array}
 */


var splitHex = function splitHex(hex) {
  var match = new RegExp("\\w{".concat(hex.length <= 4 ? 1 : 2, "}"), 'g');
  var parts = hex.match(match);

  if (parts.length === 3) {
    parts.push('ff');
  }

  return parts;
};
/**
 * Converts the given Hex parts to decimal values.
 *
 * @param  {Array} hexParts
 * @return {Array}
 */


var parseToDec = function parseToDec(hexParts) {
  return hexParts.map(function (part, index) {
    var decimal = parseInt(part, 16);
    return index !== hexParts.length - 1 ? decimal : (decimal / 255).toFixed(2);
  });
};