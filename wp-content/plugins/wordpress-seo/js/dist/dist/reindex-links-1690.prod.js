"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==_typeof(t)&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=342)}({21:function(e){e.exports=window.jQuery},342:function(e,t,n){n.r(t);var o=n(5),r=n.n(o),i=n(7),a=n.n(i),u=n(21),l=n.n(u),s=n(80),c=n.n(s),p=yoastReindexLinksData.data,d=!1,f=(a()(y,[{key:"update",value:function(e){this.totalProcessed+=e;var t=this.totalProcessed*(100/this.total);this.progressbarTarget.progressbar("value",Math.round(t)),this.element.html(this.totalProcessed)}},{key:"complete",value:function(){this.progressbarTarget.progressbar("value",100)}}]),y);function y(e){r()(this,y),this.element=l()("#wpseo_count_index_links"),this.progressbarTarget=l()("#wpseo_index_links_progressbar").progressbar({value:0}),this.total=parseInt(e,10),this.totalProcessed=0}function m(){d=!0,c()(p.l10n.calculationCompleted),l()("#reindexLinks").html(p.message.indexingCompleted),tb_remove()}function b(){l()("#general-tab").click(),!1===d&&l()("#openLinkIndexing").click()}l()(function(){var e=!1;l()(".yoast-js-calculate-index-links--all ").on("click",function(){!1===e&&(function(){c()(p.l10n.calculationInProgress);var e=[];e.push(new Promise(function(e){!function n(o,r){l.a.ajax({type:"GET",url:p.restApi.root+p.restApi.endpoint,beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",p.restApi.nonce)},success:function(e){var t=parseInt(e,10);if(0!==t)return o.update(t),void n(o,r);o.complete(),r()}})}(new f(p.amount),e)})),Promise.all(e).then(m)}(),e=!0)}),l()("#noticeRunLinkIndex").click(b),-1!==window.location.href.indexOf("&reIndexLinks=1")&&l()(b)})},5:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},7:function(e){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}},80:function(e){function t(e){e=e||"polite";var t=document.createElement("div");return t.id="a11y-speak-"+e,t.className="a11y-speak-region",t.setAttribute("style","clip: rect(1px, 1px, 1px, 1px); position: absolute; height: 1px; width: 1px; overflow: hidden; word-wrap: normal;"),t.setAttribute("aria-live",e),t.setAttribute("aria-relevant","additions text"),t.setAttribute("aria-atomic","true"),document.querySelector("body").appendChild(t),t}var n,o,r,i="";r=function(){n=document.getElementById("a11y-speak-polite"),o=document.getElementById("a11y-speak-assertive"),null===n&&(n=t("polite")),null===o&&(o=t("assertive"))},"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?r():document.addEventListener("DOMContentLoaded",r),e.exports=function(e,t){!function(){for(var e=document.querySelectorAll(".a11y-speak-region"),t=0;t<e.length;t++)e[t].textContent=""}(),e=e.replace(/<[^<>]+>/g," "),i===e&&(e+=" "),i=e,o&&"assertive"===t?o.textContent=e:n&&(n.textContent=e)}}});