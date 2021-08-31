"use strict";function _typeof(n){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}!function(){var o,n,e,r,u,i,c,a,t,f,l,s,d,m,N,v,g,E,p,y,T,h,O,_,b,D,C,w,S,M,k,A;o=window,e=tinymce.util.Tools.resolve("tinymce.PluginManager"),r=function(n){return{isEnabled:function(){return n.get()}}},i=x(!(u=function(n,e){return n.fire("VisualChars",{state:e})})),c=x(!0),n={fold:function(n){return n()},is:i,isSome:i,isNone:c,getOr:B,getOrThunk:I,getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:x(null),getOrUndefined:x(void 0),or:B,orThunk:I,map:P,each:function(){},bind:P,exists:i,forall:c,filter:P,equals:R,equals_:R,toArray:function(){return[]},toString:x("none()")},Object.freeze&&Object.freeze(n),a=n,l=function(n){return null==n?a:U(n)},t="function",s=function(n){return function(n){if(null===n)return"null";var e=_typeof(n);return"object"===e&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"===e&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":e}(n)===t},Array.prototype.slice,s(Array.from)&&Array.from,m={fromHtml:function(n,e){var t=(e||o.document).createElement("div");if(t.innerHTML=n,!t.hasChildNodes()||1<t.childNodes.length)throw o.console.error("HTML does not have a single root node",n),new Error("HTML must have a single root node");return d(t.childNodes[0])},fromTag:function(n,e){var t=(e||o.document).createElement(n);return d(t)},fromText:function(n,e){var t=(e||o.document).createTextNode(n);return d(t)},fromDom:d=function(n){if(null==n)throw new Error("Node cannot be null or undefined");return{dom:x(n)}},fromPoint:function(n,e,t){var o=n.dom();return l(o.elementFromPoint(e,t)).map(d)}},o.Node.ATTRIBUTE_NODE,o.Node.CDATA_SECTION_NODE,o.Node.COMMENT_NODE,o.Node.DOCUMENT_NODE,o.Node.DOCUMENT_TYPE_NODE,o.Node.DOCUMENT_FRAGMENT_NODE,o.Node.ELEMENT_NODE,N=o.Node.TEXT_NODE,o.Node.PROCESSING_INSTRUCTION_NODE,o.Node.ENTITY_REFERENCE_NODE,o.Node.ENTITY_NODE,o.Node.NOTATION_NODE,void 0!==o.window?o.window:Function("return this;")(),f=N,v=function(n){return n.dom().nodeType===f},E={charMap:g={" ":"nbsp","­":"shy"},regExp:q(g),regExpGlobal:q(g,!0),selector:F(g),charMapToRegExp:q,charMapToSelector:F},p=function(n){return'<span data-mce-bogus="1" class="mce-'+E.charMap[n]+'">'+n+"</span>"},y=function(n){var e=j(n);return v(n)&&void 0!==e&&E.regExp.test(e)},T=function e(n,t){var o=[],r=function(n,e){for(var t=n.length,o=new Array(t),r=0;r<t;r++){var u=n[r];o[r]=e(u,r)}return o}(n.dom().childNodes,m.fromDom);return V(r,function(n){t(n)&&(o=o.concat([n])),o=o.concat(e(n,t))}),o},h=function(n,e){for(;n.parentNode;){if(n.parentNode===e)return n;n=n.parentNode}},O=function(n){return n.replace(E.regExpGlobal,p)},_=G,b=H,D=function(n){var e=n.getBody(),t=n.selection.getBookmark(),o=h(n.selection.getNode(),e);H(n,o=void 0!==o?o:e),G(n,o),n.selection.moveToBookmark(t)},C=function(n,e){var t,o=n.getBody(),r=n.selection;e.set(!e.get()),u(n,e.get()),t=r.getBookmark(),(!0===e.get()?_:b)(n,o),r.moveToBookmark(t)},w=function(n,e){n.addCommand("mceVisualChars",function(){C(n,e)})},S=tinymce.util.Tools.resolve("tinymce.util.Delay"),M=function(e,t){var o=S.debounce(function(){D(e)},300);!1!==e.settings.forced_root_block&&e.on("keydown",function(n){!0===t.get()&&(13===n.keyCode?D(e):o())})},k=function(n){return n.getParam("visualchars_default_state",!1)},A=function(e,t){e.on("init",function(){var n=!k(e);t.set(n),C(e,t)})},e.add("visualchars",function(n){var e,t=function n(e){function t(){return o}var o=e;return{get:t,set:function(n){o=n},clone:function(){return n(t())}}}(!1);return w(n,t),(e=n).addButton("visualchars",{active:!1,title:"Show invisible characters",cmd:"mceVisualChars",onPostRender:L(e)}),e.addMenuItem("visualchars",{text:"Show invisible characters",cmd:"mceVisualChars",onPostRender:L(e),selectable:!0,context:"view",prependToContext:!0}),M(n,t),A(n,t),r(t)});function x(n){return function(){return n}}function P(){return a}function R(n){return n.isNone()}function I(n){return n()}function B(n){return n}function U(t){function n(){return r}function e(n){return n(t)}var o=x(t),r={fold:function(n,e){return e(t)},is:function(n){return t===n},isSome:c,isNone:i,getOr:o,getOrThunk:o,getOrDie:o,getOrNull:o,getOrUndefined:o,or:n,orThunk:n,map:function(n){return U(n(t))},each:function(n){n(t)},bind:e,exists:e,forall:e,filter:function(n){return n(t)?r:a},toArray:function(){return[t]},toString:function(){return"some("+t+")"},equals:function(n){return n.is(t)},equals_:function(n,e){return n.fold(i,function(n){return e(t,n)})}};return r}function V(n,e){for(var t=0,o=n.length;t<o;t++){e(n[t],t)}}function j(n){return n.dom().nodeValue}function q(n,e){var t,o="";for(t in n)o+=t;return new RegExp("["+o+"]",e?"g":"")}function F(n){var e,t="";for(e in n)t&&(t+=","),t+="span.mce-"+n[e];return t}function G(t,n){var o,r,e=T(m.fromDom(n),y);V(e,function(n){var e=O(t.dom.encode(j(n)));for(r=t.dom.create("div",null,e);o=r.lastChild;)t.dom.insertAfter(o,n.dom());t.dom.remove(n.dom())})}function H(e,n){var t=e.dom.select(E.selector,n);V(t,function(n){e.dom.remove(n,1)})}function L(t){return function(n){var e=n.control;t.on("VisualChars",function(n){e.active(n.state)})}}}();