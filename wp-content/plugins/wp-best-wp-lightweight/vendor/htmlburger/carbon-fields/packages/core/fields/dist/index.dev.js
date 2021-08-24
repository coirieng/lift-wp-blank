"use strict";

var _compose = require("@wordpress/compose");

var _hooks = require("@wordpress/hooks");

var _withFilters = _interopRequireDefault(require("../hocs/with-filters"));

var _fields = require("../registry/fields");

var _association = _interopRequireDefault(require("./association"));

var _checkbox = _interopRequireDefault(require("./checkbox"));

var _color = _interopRequireDefault(require("./color"));

var _complex = _interopRequireDefault(require("./complex"));

var _date = _interopRequireDefault(require("./date"));

var _datetime = _interopRequireDefault(require("./datetime"));

var _file = _interopRequireDefault(require("./file"));

var _hidden = _interopRequireDefault(require("./hidden"));

var _html = _interopRequireDefault(require("./html"));

var _map = _interopRequireDefault(require("./map"));

var _mediaGallery = _interopRequireDefault(require("./media-gallery"));

var _multiselect = _interopRequireDefault(require("./multiselect"));

var _oembed = _interopRequireDefault(require("./oembed"));

var _radio = _interopRequireDefault(require("./radio"));

var _radioImage = _interopRequireDefault(require("./radio-image"));

var _richText = _interopRequireDefault(require("./rich-text"));

var _select = _interopRequireDefault(require("./select"));

var _separator = _interopRequireDefault(require("./separator"));

var _set = _interopRequireDefault(require("./set"));

var _sidebar = _interopRequireDefault(require("./sidebar"));

var _text = _interopRequireDefault(require("./text"));

var _textarea = _interopRequireDefault(require("./textarea"));

var _time = _interopRequireDefault(require("./time"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Extends the fields with necessary hooks.
 */
(0, _hooks.addFilter)('carbon-fields.register-field-type', 'carbon-fields/core', function (type, context, component) {
  return (0, _compose.compose)((0, _withFilters["default"])("carbon-fields.field-edit.".concat(context)), (0, _withFilters["default"])("carbon-fields.".concat(type, ".").concat(context)))(component);
});
/**
 * Registers the fields.
 */

[['association', _association["default"]], ['checkbox', _checkbox["default"]], ['color', _color["default"]], ['complex', _complex["default"]], ['date', _date["default"]], ['date_time', _datetime["default"]], ['file', _file["default"]], ['footer_scripts', _textarea["default"]], ['gravity_form', _select["default"]], ['header_scripts', _textarea["default"]], ['hidden', _hidden["default"]], ['html', _html["default"]], ['image', _file["default"]], ['map', _map["default"]], ['multiselect', _multiselect["default"]], ['media_gallery', _mediaGallery["default"]], ['oembed', _oembed["default"]], ['radio', _radio["default"]], ['radio_image', _radioImage["default"]], ['rich_text', _richText["default"]], ['select', _select["default"]], ['separator', _separator["default"]], ['set', _set["default"]], ['sidebar', _sidebar["default"]], ['text', _text["default"]], ['textarea', _textarea["default"]], ['time', _time["default"]]].forEach(function (field) {
  return _fields.registerFieldType.apply(void 0, _toConsumableArray(field));
});