"use strict";var _data=require("@wordpress/data"),_hooks=require("@wordpress/hooks"),_refractCallbag=require("refract-callbag");require("./style.scss");var _core=require("@carbon-fields/core");function aperture(){return(0,_core.fromSelector)((0,_data.select)("carbon-fields/metaboxes").isFieldUpdated)}function handler(i){return function(e){var r,a,t=e.action;t&&(r=i.container,a=t.payload,0<=r.fields.map(function(e){return e.id}).indexOf(a.fieldId)&&window.jQuery(".container-".concat(r.id)).closest(".widget-inside").trigger("change"))}}(0,_hooks.addFilter)("carbon-fields.widget.classic","carbon-fields/metaboxes",(0,_refractCallbag.withEffects)(aperture,{handler:handler}));