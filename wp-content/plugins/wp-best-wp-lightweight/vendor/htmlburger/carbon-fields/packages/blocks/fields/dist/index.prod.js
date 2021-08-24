"use strict";var _compose=require("@wordpress/compose"),_hooks=require("@wordpress/hooks"),_data=require("@wordpress/data"),_core=require("@carbon-fields/core"),_withConditionalLogic=_interopRequireDefault(require("../hocs/with-conditional-logic"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}require("./association"),require("./complex"),require("./datetime"),require("./file"),require("./footer-scripts"),require("./header-scripts"),require("./hidden"),require("./image"),require("./map"),require("./multiselect"),require("./media-gallery"),require("./oembed"),require("./radio"),require("./radio-image"),require("./select"),require("./set"),require("./sidebar"),require("./separator"),require("./text"),require("./textarea"),(0,_hooks.addFilter)("carbon-fields.field-edit.block","carbon-fields/blocks",(0,_compose.compose)(_withConditionalLogic.default,(0,_data.withDispatch)(function(e){var r=e("core/editor");return{lockSaving:r.lockPostSaving,unlockSaving:r.unlockPostSaving}}),_core.withValidation));