"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==_typeof(e)&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=341)}({341:function(){function e(t){f.includes(t)||(f.push(t),r(t).insertAfter(u))}function o(){r.post(ajaxurl,{action:"yoast_get_notifications",version:2},function(t){""!==t&&(a=0,JSON.parse(t).map(e)),a<20&&""===t&&(a++,setTimeout(o,500))})}function n(){var t=r("tr.inline-editor"),e=0===t.length||""===t?"":t.attr("id").replace("edit-","");return r("#inline_"+e).find("."+i).html()!==t.find("input[name="+i+"]").val()}var r,t,i,u,a,f;jQuery((r=jQuery,t=r(location).attr("pathname").split("/").pop(),i="edit-tags.php"===t?"slug":"post_name",u=r(".wrap").children().eq(0),a=0,f=[],["edit.php","edit-tags.php"].includes(t)&&(r("#inline-edit input").on("keydown",function(t){13===t.which&&n()&&o()}),r(".button-primary").click(function(t){"save-order"!==r(t.target).attr("id")&&n()&&o()})),void("edit-tags.php"===t&&r(document).on("ajaxComplete",function(t,e,n){-1<n.data.indexOf("action=delete-tag")&&o()}))))}});