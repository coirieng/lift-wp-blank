"use strict";var _callbagOf=_interopRequireDefault(require("callbag-of")),_callbagStartWith=_interopRequireDefault(require("callbag-start-with")),_callbagFromDelegatedEvent=_interopRequireDefault(require("callbag-from-delegated-event")),_callbagDistinctUntilChanged=_interopRequireDefault(require("callbag-distinct-until-changed")),_hooks=require("@wordpress/hooks"),_data=require("@wordpress/data"),_callbagBasics=require("callbag-basics"),_core=require("@carbon-fields/core");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var INITIAL_STATE={post_format:"standard"};function getPostFormatFromRadioInput(a){var t=a.value;return"0"===t&&(t="standard"),{post_format:t}}(0,_hooks.addFilter)("carbon-fields.conditional-display-post-format.classic","carbon-fields/metaboxes",function(){var a=document.querySelector("div#post-formats-select");return a?(0,_callbagBasics.pipe)((0,_callbagFromDelegatedEvent.default)(a,"input.post-format","change"),(0,_callbagBasics.map)(function(a){return getPostFormatFromRadioInput(a.target)}),(0,_callbagStartWith.default)(getPostFormatFromRadioInput(a.querySelector("input.post-format:checked")))):(0,_callbagOf.default)(INITIAL_STATE)}),(0,_hooks.addFilter)("carbon-fields.conditional-display-post-format.gutenberg","carbon-fields/metaboxes",function(){return(0,_callbagBasics.pipe)((0,_core.fromSelector)((0,_data.select)("core/editor").getEditedPostAttribute,"format"),(0,_callbagDistinctUntilChanged.default)(),(0,_callbagBasics.filter)(Boolean),(0,_callbagBasics.map)(function(a){return{post_format:a}}),(0,_callbagStartWith.default)(INITIAL_STATE))});