"use strict";var _compose=require("@wordpress/compose"),_hooks=require("@wordpress/hooks"),_core=require("@carbon-fields/core"),_withContainer=_interopRequireDefault(require("../hocs/with-container"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(0,_hooks.addFilter)("carbon-fields.register-container-type","carbon-fields/metaboxes",function(e,r,o){return(0,_compose.compose)(_withContainer.default,(0,_core.withFilters)("carbon-fields.".concat(e,".").concat(r)))(o)});