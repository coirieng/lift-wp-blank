"use strict";var _lodash=_interopRequireDefault(require("lodash")),_hooks=require("@wordpress/hooks"),_data=require("@wordpress/data"),_refractCallbag=require("refract-callbag"),_callbagBasics=require("callbag-basics"),_fromEventPattern=_interopRequireDefault(require("../../utils/from-event-pattern")),_helpers=require("../../store/helpers");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function aperture(){return(0,_callbagBasics.pipe)((0,_fromEventPattern.default)(function(e){return window.jQuery(document).on("ajaxSuccess",e)},function(e){return window.jQuery(document).off("ajaxSuccess",e)},function(e,a,r,t){return{options:r,data:t}}),(0,_callbagBasics.filter)(function(e){var a=e.options,r=e.data;return a.data&&-1<a.data.indexOf("carbon_fields_container")&&-1<a.data.indexOf("add-tag")&&!r.documentElement.querySelector("wp_error")}))}function handler(s){return function(){var e=_lodash.default.map(s.container.fields,"id"),a=(0,_helpers.normalizePreloadedState)(_lodash.default.get(window.cf,"preloaded.containers",[])),r=a.containers,t=a.fields,d=_lodash.default.find(r,["id",s.id]),n=_lodash.default.filter(t,["container_id",s.id]),i=(0,_data.dispatch)("carbon-fields/metaboxes"),o=i.updateState,l=i.removeFields;o(_lodash.default.keyBy([d],"id"),_lodash.default.keyBy(n,"id")),l(e)}}(0,_hooks.addFilter)("carbon-fields.term_meta.classic","carbon-fields/metaboxes",(0,_refractCallbag.withEffects)(aperture,{handler:handler}));