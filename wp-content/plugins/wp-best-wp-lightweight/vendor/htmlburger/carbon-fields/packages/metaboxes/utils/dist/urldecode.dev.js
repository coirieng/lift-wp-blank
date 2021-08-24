"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = urldecode;

/**
 * Source: https://github.com/kvz/locutus/blob/master/src/php/url/urldecode.js
 *
 * @param  {string} str
 * @return {string}
 */
function urldecode(str) {
  return decodeURIComponent((str + '').replace(/%(?![\da-f]{2})/gi, function () {
    // PHP tolerates poorly formed escape sequences
    return '%25';
  }).replace(/\+/g, '%20'));
}