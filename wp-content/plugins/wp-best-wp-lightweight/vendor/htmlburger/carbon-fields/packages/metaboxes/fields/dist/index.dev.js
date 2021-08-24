"use strict";

var _compose = require("@wordpress/compose");

var _hooks = require("@wordpress/hooks");

var _data = require("@wordpress/data");

var _core = require("@carbon-fields/core");

var _withField = _interopRequireDefault(require("../hocs/with-field"));

var _withConditionalLogic = _interopRequireDefault(require("../hocs/with-conditional-logic"));

var _isGutenberg = _interopRequireDefault(require("../utils/is-gutenberg"));

require("./association");

require("./complex");

require("./datetime");

require("./file");

require("./image");

require("./multiselect");

require("./media-gallery");

require("./radio");

require("./sidebar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * External dependencies.
 */

/**
 * Carbon Fields dependencies.
 */

/**
 * Internal dependencies.
 */

/**
 * Connects every field to the store.
 */
(0, _hooks.addFilter)('carbon-fields.field-edit.metabox', 'carbon-fields/metaboxes', (0, _compose.compose)(_withField["default"], _withConditionalLogic["default"], (0, _data.withDispatch)(function (dispatch) {
  if ((0, _isGutenberg["default"])()) {
    var _dispatch = dispatch('core/editor'),
        lockPostSaving = _dispatch.lockPostSaving,
        unlockPostSaving = _dispatch.unlockPostSaving;

    return {
      lockSaving: lockPostSaving,
      unlockSaving: unlockPostSaving
    };
  }

  var _dispatch2 = dispatch('carbon-fields/metaboxes'),
      lockSaving = _dispatch2.lockSaving,
      unlockSaving = _dispatch2.unlockSaving;

  return {
    lockSaving: lockSaving,
    unlockSaving: unlockSaving
  };
}), _core.withValidation));