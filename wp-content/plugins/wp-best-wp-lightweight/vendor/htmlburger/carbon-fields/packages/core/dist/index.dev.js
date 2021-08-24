"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialize = initialize;
Object.defineProperty(exports, "createRegistry", {
  enumerable: true,
  get: function get() {
    return _registry.createRegistry;
  }
});
Object.defineProperty(exports, "getFieldType", {
  enumerable: true,
  get: function get() {
    return _fields2.getFieldType;
  }
});
Object.defineProperty(exports, "registerFieldType", {
  enumerable: true,
  get: function get() {
    return _fields2.registerFieldType;
  }
});
Object.defineProperty(exports, "Field", {
  enumerable: true,
  get: function get() {
    return _field["default"];
  }
});
Object.defineProperty(exports, "withFilters", {
  enumerable: true,
  get: function get() {
    return _withFilters["default"];
  }
});
Object.defineProperty(exports, "withProps", {
  enumerable: true,
  get: function get() {
    return _withProps["default"];
  }
});
Object.defineProperty(exports, "withValidation", {
  enumerable: true,
  get: function get() {
    return _withValidation["default"];
  }
});
Object.defineProperty(exports, "withConditionalLogic", {
  enumerable: true,
  get: function get() {
    return _withConditionalLogic["default"];
  }
});
Object.defineProperty(exports, "uniqueId", {
  enumerable: true,
  get: function get() {
    return _uniqueId["default"];
  }
});
Object.defineProperty(exports, "fromSelector", {
  enumerable: true,
  get: function get() {
    return _fromSelector["default"];
  }
});

var _i18n = require("@wordpress/i18n");

var _hooks = require("@wordpress/hooks");

require("./store");

require("./fields");

var _registry = require("./registry");

var _fields2 = require("./registry/fields");

var _field = _interopRequireDefault(require("./components/field"));

var _withFilters = _interopRequireDefault(require("./hocs/with-filters"));

var _withProps = _interopRequireDefault(require("./hocs/with-props"));

var _withValidation = _interopRequireDefault(require("./hocs/with-validation"));

var _withConditionalLogic = _interopRequireDefault(require("./hocs/with-conditional-logic"));

var _uniqueId = _interopRequireDefault(require("./utils/unique-id"));

var _fromSelector = _interopRequireDefault(require("./utils/from-selector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */

/**
 * Sets the locale data for the package type
 */
(0, _i18n.setLocaleData)(window.cf.config.locale, 'carbon-fields-ui');
/**
 * Public API.
 */

/**
 * Triggers the initialization of Carbon Fields.
 *
 * @return {void}
 */
function initialize() {
  (0, _hooks.doAction)('carbon-fields.init');
}