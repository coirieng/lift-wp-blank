"use strict";var _hooks=require("@wordpress/hooks"),_data=require("@wordpress/data"),_lodash=require("lodash"),_core=require("@carbon-fields/core");require("./style.scss"),(0,_hooks.addFilter)("carbon-fields.association.block","carbon-fields/blocks",(0,_core.withProps)(function(n){return{hierarchyResolver:function(){var o=(0,_data.select)("core/editor").getBlock(n.blockId),c=n.id.split("__");c.shift();for(var r=c.shift(),t="data.".concat(r);0<c.length;){var e,a,s,i=c.shift();r=0===i.indexOf("cf-")?(e=(0,_lodash.get)(o.attributes,"".concat(t)),a=(0,_lodash.find)(e,["_id",i]),s=e.indexOf(a),t="".concat(t,".").concat(s),"".concat(r,"[").concat(s,"]:").concat(a._type,"/")):(t="".concat(t,".").concat(i),"".concat(r).concat(i))}return r}}}));