"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _data=require("@wordpress/data"),_refractCallbag=require("refract-callbag"),_core=require("@carbon-fields/core");function UnsavedChanges(){return null}function aperture(){return(0,_core.fromSelector)((0,_data.select)("carbon-fields/metaboxes").isDirty)}function handler(){return function(e){e&&(window.onbeforeunload=function(e){return e})}}var _default=(0,_refractCallbag.withEffects)(aperture,{handler:handler})(UnsavedChanges);exports.default=_default;