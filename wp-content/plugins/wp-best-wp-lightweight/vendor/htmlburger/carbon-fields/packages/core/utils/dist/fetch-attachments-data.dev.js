"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _i18n = require("@wordpress/i18n");

/**
 * The external dependencies.
 */
var _default = function _default(attachments) {
  return new Promise(function (resolve, reject) {
    // eslint-disable-next-line
    var result = wp.media.ajax({
      data: {
        action: 'query-attachments',
        query: {
          post__in: attachments,
          posts_per_page: attachments.length
        }
      }
    });
    result.done(function (response) {
      resolve(response);
    });
    result.fail(function () {
      reject((0, _i18n.__)('An error occurred while trying to fetch files data.', 'carbon-fields-ui'));
    });
  });
};

exports["default"] = _default;