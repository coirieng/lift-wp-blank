"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRegistry = createRegistry;

var _hooks = require("@wordpress/hooks");

var _i18n = require("@wordpress/i18n");

var _lodash = require("lodash");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Creates a new registry.
 *
 * @param  {string}   domain
 * @param  {string[]} supportedContexts
 * @return {boolean}
 */
function createRegistry(domain, supportedContexts) {
  var _ref;

  var domainStartCased = (0, _lodash.startCase)(domain);
  /**
   * Keeps track of registered types.
   *
   * @type {Object}
   */

  var types = {};
  /**
   * Registers a new type.
   *
   * @param  {string} type
   * @param  {Function} component
   * @return {boolean}
   */

  function registerType(type, component) {
    if (!(0, _lodash.isString)(type)) {
      console.error((0, _i18n.sprintf)((0, _i18n.__)('%1$s type must be a string.', 'carbon-fields-ui'), domainStartCased));
      return false;
    }

    if (types[type]) {
      console.error((0, _i18n.sprintf)((0, _i18n.__)('%1$s %2$s is already registered.', 'carbon-fields-ui'), domainStartCased, type));
      return false;
    }

    if (!component || !(0, _lodash.isFunction)(component)) {
      console.error((0, _i18n.__)('The "component" param must be a function.', 'carbon-fields-ui'));
      return false;
    }

    types[type] = supportedContexts.reduce(function (accumulator, context) {
      return _objectSpread({}, accumulator, _defineProperty({}, context, (0, _hooks.applyFilters)("carbon-fields.register-".concat(domain, "-type"), type, context, component)));
    }, {});
    return true;
  }
  /**
   * Returns a registered type.
   *
   * @param  {string} type
   * @param  {string} context
   * @return {?Object}
   */


  function getType(type, context) {
    if (!supportedContexts.includes(context)) {
      console.error((0, _i18n.sprintf)((0, _i18n.__)('The provided context isn\'t a valid one. Must be one of - %s .', 'carbon-fields-ui'), supportedContexts.join(', ')));
      return;
    }

    if (!types[type]) {
      console.error((0, _i18n.sprintf)((0, _i18n.__)('%s %s isn\'t registered.', 'carbon-fields-ui'), domainStartCased, type));
      return;
    }

    return types[type][context];
  }

  return _ref = {}, _defineProperty(_ref, "register".concat(domainStartCased, "Type"), registerType), _defineProperty(_ref, "get".concat(domainStartCased, "Type"), getType), _ref;
}