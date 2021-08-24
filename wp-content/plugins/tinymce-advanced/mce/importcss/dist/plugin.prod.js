"use strict";!function(){var e,d,p,v,y,s,n,_,r,i,u,l,c,t,o;e=tinymce.util.Tools.resolve("tinymce.PluginManager"),d=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),p=tinymce.util.Tools.resolve("tinymce.EditorManager"),v=tinymce.util.Tools.resolve("tinymce.Env"),y=tinymce.util.Tools.resolve("tinymce.util.Tools"),s=function(e){return e.getParam("importcss_merge_classes")},n=function(e){return e.getParam("importcss_exclusive")},_=function(e){return e.getParam("importcss_selector_converter")},r=function(e){return e.getParam("importcss_selector_filter")},i=function(e){return e.getParam("importcss_groups")},u=function(e){return e.getParam("importcss_append")},l=function(e){return e.getParam("importcss_file_filter")},c=x,t=function(h){h.on("renderFormatsMenu",function(e){function c(e,t){if(f=e,g=p,!(T(h,m=t)?f in g:f in m.selectors)){u=e,a=p,T(h,l=t)?a[u]=!0:l.selectors[u]=!0;var n=(c=(i=h).plugins.importcss,o=e,((s=t)&&s.selector_converter?s.selector_converter:_(i)?_(i):function(){return x(i,o)}).call(c,o,s));if(n){var r=n.name||d.DOM.uniqueId();return h.formatter.register(r,n),y.extend({},v.settings.itemDefaults,{text:n.title,format:r})}}var i,c,o,s,u,l,a,f,m,g;return null}var t,p={},o=a(r(h)),v=e.control,s=(t=i(h),y.map(t,function(e){return y.extend({},e,{original:e,selectors:{},filter:a(e.filter),item:{text:e.title,menu:[]}})}));u(h)||v.items().remove(),y.each(f(h,e.doc||h.getDoc(),a(l(h))),function(n){var e,t,r,i;-1===n.indexOf(".mce-")&&(o&&!o(n)||(r=s,i=n,0<(e=y.grep(r,function(e){return!e.filter||e.filter(i)})).length?y.each(e,function(e){var t=c(n,e);t&&e.item.menu.push(t)}):(t=c(n,null))&&v.add(t)))}),y.each(s,function(e){0<e.item.menu.length&&v.add(e.item)}),e.control.renderNew()})},o=function(t){return{convertSelectorToFormat:function(e){return c(t,e)}}},e.add("importcss",function(e){return t(e),o(e)});function a(t){return"string"==typeof t?function(e){return-1!==e.indexOf(t)}:t instanceof RegExp?function(e){return t.test(e)}:t}function f(a,e,f){var m=[],n={};function g(e,t){var n,r,i,c,o,s,u,l=e.href;if(r=l,i=v.cacheSuffix,"string"==typeof r&&(r=r.replace("?"+i,"").replace("&"+i,"")),(l=r)&&f(l,t)&&(o=l,s=(c=a).settings,!(u=!1!==s.skin&&(s.skin||"lightgray"))||o!==(s.skin_url?c.documentBaseURI.toAbsolute(s.skin_url):p.baseURL+"/skins/"+u)+"/content"+(c.inline?".inline":"")+".min.css")){y.each(e.imports,function(e){g(e,!0)});try{n=e.cssRules||e.rules}catch(e){}y.each(n,function(e){e.styleSheet?g(e.styleSheet,!0):e.selectorText&&y.each(e.selectorText.split(","),function(e){m.push(y.trim(e))})})}}y.each(a.contentCSS,function(e){n[e]=!0}),f=f||function(e,t){return t||n[e]};try{y.each(e.styleSheets,function(e){g(e)})}catch(e){}return m}function x(e,t){var n,r=/^(?:([a-z0-9\-_]+))?(\.[a-z0-9_\-\.]+)$/i.exec(t);if(r){var i=r[1],c=r[2].substr(1).split(".").join(" "),o=y.makeMap("a,img");return r[1]?(n={title:t},e.schema.getTextBlockElements()[i]?n.block=i:e.schema.getBlockElements()[i]||o[i.toLowerCase()]?n.selector=i:n.inline=i):r[2]&&(n={inline:"span",title:t.substr(1),classes:c}),!1!==s(e)?n.classes=c:n.attributes={class:c},n}}function T(e,t){return null===t||!1!==n(e)}}();