"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "registerContainerType", {
  enumerable: true,
  get: function get() {
    return _registry.registerContainerType;
  }
});
Object.defineProperty(exports, "getContainerType", {
  enumerable: true,
  get: function get() {
    return _registry.getContainerType;
  }
});

var _i18n = require("@wordpress/i18n");

var _hooks = require("@wordpress/hooks");

require("./store");

require("./fields");

var _monitors = _interopRequireDefault(require("./monitors"));

var _containers = _interopRequireDefault(require("./containers"));

var _isGutenberg = _interopRequireDefault(require("./utils/is-gutenberg"));

var _registry = require("./containers/registry");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */

/**
 * Public API.
 */

/**
 * Sets the locale data for the package type
 */
(0, _i18n.setLocaleData)(window.cf.config.locale, 'carbon-fields-ui');
/**
 * Determines the rendering context.
 *
 * @type {string}
 */

var context = (0, _isGutenberg["default"])() ? 'gutenberg' : 'classic';
/**
 * Abracadabra! Poof! Containers everywhere ...
 */

(0, _hooks.addAction)('carbon-fields.init', 'carbon-fields/metaboxes', function () {
  (0, _containers["default"])(context);
  (0, _monitors["default"])(context);
});