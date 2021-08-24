"use strict";

var _data = require("@wordpress/data");

var _blocks = require("@wordpress/blocks");

var _i18n = require("@wordpress/i18n");

var _lodash = require("lodash");

require("./fields");

require("./store");

var _blockEdit = _interopRequireDefault(require("./components/block-edit"));

var _blockSave = _interopRequireDefault(require("./components/block-save"));

var _transformFieldsToAttributes = _interopRequireDefault(require("./utils/transform-fields-to-attributes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Sets the locale data for the package type
 */
(0, _i18n.setLocaleData)(window.cf.config.locale, 'carbon-fields-ui');
/**
 * Register the blocks.
 */

var containerDefinitions = {};
var fieldDefinitions = {};
(0, _lodash.get)(window.cf, 'preloaded.blocks', []).forEach(function (container) {
  var name = (0, _lodash.kebabCase)(container.id).replace('carbon-fields-container-', '');
  var fields = (0, _transformFieldsToAttributes["default"])(container.fields);

  var getBlockSetting = function getBlockSetting(key) {
    var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return (0, _lodash.get)(container, "settings.".concat(key), def);
  };

  containerDefinitions[name] = container;
  fieldDefinitions[name] = container.fields.map(function (field) {
    return _objectSpread({}, field);
  });
  (0, _blocks.registerBlockType)("carbon-fields/".concat(name), {
    title: container.title,
    icon: getBlockSetting('icon'),
    parent: getBlockSetting('parent', []),
    category: getBlockSetting('category.slug'),
    keywords: getBlockSetting('keywords', []),
    description: getBlockSetting('description', ''),
    attributes: {
      data: {
        type: 'object',
        "default": fields
      }
    },
    supports: {
      tabs: (0, _lodash.isPlainObject)(getBlockSetting('tabs')),
      preview: getBlockSetting('preview'),
      innerBlocks: getBlockSetting('inner_blocks.enabled'),
      alignWide: false,
      anchor: false,
      html: false
    },
    edit: _blockEdit["default"],
    save: _blockSave["default"]
  });
});
/**
 * Load the definitions in store.
 */

(0, _data.dispatch)('carbon-fields/blocks').setupContainerDefinitions(containerDefinitions);
(0, _data.dispatch)('carbon-fields/blocks').setupFieldDefinitions(fieldDefinitions);