"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=getAncestorsFromOption;var _getLevelFromOption=_interopRequireDefault(require("./get-level-from-option"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getAncestorsFromOption(e){for(var t,r=[],o=e,i=(0,_getLevelFromOption.default)(e);0<i&&o;){(0,_getLevelFromOption.default)(o)===i?(0<(t=parseInt(o.value,10))&&r.unshift(t),o=o.previousSibling,i--):o=o.previousSibling}return r}