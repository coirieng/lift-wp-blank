"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _i18n = require("@wordpress/i18n");

/**
 * External dependencies.
 */
var _default = function _default(url, method) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return new Promise(function (resolve, reject) {
    var request = window.jQuery.ajax({
      url: url,
      type: method,
      data: data
    });
    request.done(function (response) {
      resolve(response);
    });
    request.fail(function () {
      reject((0, _i18n.__)('An error occured.', 'carbon-fields-ui'));
    });
  });
};

exports["default"] = _default;