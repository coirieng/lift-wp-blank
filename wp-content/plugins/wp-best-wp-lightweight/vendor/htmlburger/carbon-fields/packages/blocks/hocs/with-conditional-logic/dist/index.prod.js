"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _callbagDistinctUntilChanged=_interopRequireDefault(require("callbag-distinct-until-changed")),_data=require("@wordpress/data"),_callbagBasics=require("callbag-basics"),_lodash=require("lodash"),_core=require("@carbon-fields/core");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function mapParentPrefix(e){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;return(0,_lodash.mapKeys)(e,function(e,t){return"".concat((0,_lodash.repeat)("parent.",a)).concat(t)})}function isComplexGroupIdentifier(e){return(0,_lodash.startsWith)(e,"cf-")}function input(e){return(0,_callbagBasics.pipe)((0,_core.fromSelector)((0,_data.select)("core/editor").getBlock,e.blockId),(0,_callbagDistinctUntilChanged.default)(),(0,_callbagBasics.map)(function(e){return e.attributes.data}))}function output(e,t){var a={};if((0,_lodash.has)(t,e.field.base_name))a=mapParentPrefix((0,_lodash.omit)(t,[e.field.base_name]));else{var r=e.id.split("__");r.shift();var i=r.shift();r.pop();var o=r.reduce(function(e,t){return isComplexGroupIdentifier(t)?e:e+1},0);a=mapParentPrefix(a=(0,_lodash.omit)(t,[i]),o+1);for(var n=i;0<r.length;){var l,s,c=r.shift(),d=isComplexGroupIdentifier(c),u=!d;d&&(l=(0,_lodash.findIndex)((0,_lodash.get)(t,n),["_id",c]),n="".concat(n,".").concat(l),s=(0,_lodash.get)(t,n),s=mapParentPrefix(s=(0,_lodash.omit)(s,["_id","_type",e.field.base_name]),o),(0,_lodash.assign)(a,s)),u&&(n="".concat(n,".").concat(c),o--)}}return a}var _default=(0,_core.withConditionalLogic)(input,output);exports.default=_default;