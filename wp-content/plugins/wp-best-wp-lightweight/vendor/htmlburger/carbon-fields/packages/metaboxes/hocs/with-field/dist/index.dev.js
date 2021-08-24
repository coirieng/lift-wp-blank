"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _data = require("@wordpress/data");

var _compose = require("@wordpress/compose");

/**
 * External dependencies.
 */

/**
 * Creates a high-order component which adds connection
 * to the store.
 *
 * @param  {Function} Component
 * @return {Function}
 */
var _default = (0, _compose.createHigherOrderComponent)(function (Component) {
  var applyWithSelect = (0, _data.withSelect)(function (select, props) {
    var _window$cf$config = window.cf.config,
        compactInput = _window$cf$config.compactInput,
        compactInputKey = _window$cf$config.compactInputKey;
    var field = select('carbon-fields/metaboxes').getFieldById(props.id);
    var value = field && field.value;
    var name = props.name || field.name;
    /**
     * Wrap top-level field names in compact input key.
     *
     * The fields in widgets don't need this prefix because
     * their input is already compacted by the `widget` namespace.
     */

    if (compactInput && !props.name && name.indexOf('widget-carbon_fields') === -1) {
      name = "".concat(compactInputKey, "[").concat(name, "]");
    }

    return {
      field: field,
      name: name,
      value: value
    };
  });
  var applyWithDispatch = (0, _data.withDispatch)(function (dispatch) {
    var _dispatch = dispatch('carbon-fields/metaboxes'),
        updateFieldValue = _dispatch.updateFieldValue;

    return {
      onChange: updateFieldValue
    };
  });
  return (0, _compose.compose)(applyWithSelect, applyWithDispatch)(Component);
}, 'withField');

exports["default"] = _default;