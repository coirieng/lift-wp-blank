"use strict";

var _compose = require("@wordpress/compose");

var _hooks = require("@wordpress/hooks");

var _data = require("@wordpress/data");

var _core = require("@carbon-fields/core");

var _withConditionalLogic = _interopRequireDefault(require("../hocs/with-conditional-logic"));

require("./association");

require("./complex");

require("./datetime");

require("./file");

require("./footer-scripts");

require("./header-scripts");

require("./hidden");

require("./image");

require("./map");

require("./multiselect");

require("./media-gallery");

require("./oembed");

require("./radio");

require("./radio-image");

require("./select");

require("./set");

require("./sidebar");

require("./separator");

require("./text");

require("./textarea");

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
(0, _hooks.addFilter)('carbon-fields.field-edit.block', 'carbon-fields/blocks', (0, _compose.compose)(_withConditionalLogic["default"], (0, _data.withDispatch)(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      lockPostSaving = _dispatch.lockPostSaving,
      unlockPostSaving = _dispatch.unlockPostSaving;

  return {
    lockSaving: lockPostSaving,
    unlockSaving: unlockPostSaving
  };
}), _core.withValidation));
/**
 * Internal dependencies.
 */