"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.containers=containers,exports.fields=fields,exports.savingLock=savingLock,exports.isDirty=isDirty,exports.isFieldUpdated=isFieldUpdated,exports.default=void 0;var _immer=_interopRequireDefault(require("immer")),_data=require("@wordpress/data"),_lodash=require("lodash"),_core=require("@carbon-fields/core");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function ownKeys(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(r,!0).forEach(function(e){_defineProperty(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function containers(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=1<arguments.length?arguments[1]:void 0;switch(r.type){case"SETUP_STATE":return r.payload.containers;case"UPDATE_STATE":return(0,_immer.default)(e,function(t){(0,_lodash.values)(r.payload.containers).forEach(function(e){t[e.id]=e})});case"ADD_CONTAINER":return(0,_immer.default)(e,function(e){e[r.payload.id]=r.payload});case"REMOVE_CONTAINER":return(0,_lodash.omit)(e,r.payload);default:return e}}function cloneField(e,t,o,r){var n=(0,_lodash.cloneDeep)(o[e]);return n.id=t,"complex"===n.type&&n.value.forEach(function(e){e.id=(0,_core.uniqueId)(),r=e.fields.reduce(function(e,t){var r=t.id,n=(0,_core.uniqueId)();return cloneField(r,t.id=n,o,e)},r)}),r.concat(n)}function getFieldIdsByRootId(e,r,t){var n=r[e];return"complex"===n.type&&n.value.forEach(function(e){t=e.fields.reduce(function(e,t){return getFieldIdsByRootId(t.id,r,e)},t)}),t.concat(e)}function fields(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},a=1<arguments.length?arguments[1]:void 0;switch(a.type){case"SETUP_STATE":return a.payload.fields;case"UPDATE_STATE":return(0,_immer.default)(i,function(t){(0,_lodash.values)(a.payload.fields).forEach(function(e){t[e.id]=e})});case"UPDATE_FIELD_VALUE":return(0,_immer.default)(i,function(t){var e=a.payload,r=e.fieldId,n=e.value,o=e.fieldsToRemove;t[r].value=n,o.reduce(function(e,t){return getFieldIdsByRootId(t,i,e)},[]).forEach(function(e){(0,_lodash.unset)(t,e)})});case"ADD_FIELDS":return(0,_immer.default)(i,function(t){a.payload.fields.forEach(function(e){t[e.id]=e})});case"CLONE_FIELDS":return(0,_immer.default)(i,function(n){var e=a.payload,t=e.originFieldIds,o=e.cloneFieldIds,r=t.reduce(function(e,t,r){return cloneField(t,o[r],n,e)},[]);(0,_lodash.assign)(n,(0,_lodash.keyBy)(r,"id"))});case"REMOVE_FIELDS":var e=a.payload.fieldIds.reduce(function(e,t){return getFieldIdsByRootId(t,i,e)},[]);return(0,_lodash.omit)(i,e);case"RECEIVE_SIDEBAR":return(0,_immer.default)(i,function(e){(0,_lodash.forEach)(e,function(e){"sidebar"===e.type&&e.options.unshift(a.payload)})});default:return i}}function savingLock(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length?arguments[1]:void 0;switch(t.type){case"LOCK_SAVING":return _objectSpread({},e,_defineProperty({},t.payload.lockName,!0));case"UNLOCK_SAVING":return(0,_lodash.omit)(e,[t.payload.lockName]);default:return e}}function isDirty(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];switch((1<arguments.length?arguments[1]:void 0).type){case"UPDATE_FIELD_VALUE":return!0;default:return e}}function isFieldUpdated(e,t){switch(t.type){case"UPDATE_FIELD_VALUE":return{action:t};default:return!1}}var _default=(0,_data.combineReducers)({containers:containers,fields:fields,savingLock:savingLock,isDirty:isDirty,isFieldUpdated:isFieldUpdated});exports.default=_default;