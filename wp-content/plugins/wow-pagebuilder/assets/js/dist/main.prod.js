"use strict";jQuery(document).ready(function(l){l(document).on("click",".wow-edit-show-hide .wow-edit-show-toggle",function(t){t.preventDefault(),jQuery("body").toggleClass("wow-pagetoops-editor-hide")}),l.fn.wppbanimateNumbers=function(n,i,o,a){return this.each(function(){var t=l(this),e=parseInt(t.text().replace(/,/g,""));i=void 0===i||i,l({value:e}).animate({value:n},{duration:void 0===o?1e3:o,easing:void 0===a?"swing":a,step:function(){t.text(Math.floor(this.value)),i&&t.text(t.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"))},complete:function(){parseInt(t.text())!==n&&(t.text(n),i&&t.text(t.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")))}})})},l(document).on("rendered_addon",function(t,e){var n=window.frames["wow-builder-view"].window.document;void 0===e.type||"addon"!==e.type&&"inner_addon"!==e.type||"wow_animated_number"!==e.name||l(n).find(".wow-counter-number").each(function(){var t=l(this);t.wppbanimateNumbers(t.data("digit"),!1,t.data("duration"),"swing"),t.unbind("inview")}),l(n).find(".wow-pie-chart").each(function(){var i=l(this);i.easyPieChart({barColor:i.data("barcolor"),trackColor:i.data("trackcolor"),scaleColor:!1,lineWidth:i.data("width"),size:i.data("size"),onStep:function(t,e,n){i.find(".wow-chart-percent > span").text(Math.round(n)+"%")}})})}),l(document).on("inview",".wow-counter-number",function(t,e,n,i){var o=l(this);e&&(o.wppbanimateNumbers(o.data("digit"),!1,o.data("duration"),"swing"),o.unbind("inview"))}),l(document).on("inview",".wow-pie-chart",function(t,e,n,i){var o=l(this);o.easyPieChart&&e&&(o.easyPieChart({barColor:o.data("barcolor"),trackColor:o.data("trackcolor"),scaleColor:!1,lineWidth:o.data("width"),size:o.data("size"),onStep:function(t,e,n){o.find(".wow-chart-percent > span").text(Math.round(n)+"%")}}),o.unbind("inview"))}),void 0!==l(document).magnificPopup&&(l(".wow-video-popup").magnificPopup({type:"iframe",rtl:!0,mainClass:"mfp-fade",removalDelay:300,preloader:!1,fixedContentPos:!1}),l(".wow-image-popup").magnificPopup({type:"image",closeOnContentClick:!0,mainClass:"mfp-img-mobile",image:{verticalFit:!0},gallery:{enabled:!0}})),l(document).on("click",".wow-accordion-title",function(){var t=l(this).closest(".wow-accordion-items").find(">div"),e=t.find(".wow-accordion-title"),n=t.find(".wow-panel-collapse");l(this).hasClass("active")?(l(this).removeClass("active"),n.slideUp()):(e.removeClass("active"),n.slideUp(),l(this).addClass("active").next().slideDown())}),l(document).on("click","ul.wow-tab-nav .wow-tab-nav-list",function(){l(this).closest("ul").find("li").removeClass("active"),l(this).closest(".wow-tab-addon-content").find(".wow-tab-content-wrap").find(".wow-tab-content").removeClass("active"),l(this).addClass("active"),l("#"+l(this).attr("data-tab")).addClass("active")}),l(document).on("rendered_addon",function(t,e){var n,i;void 0===e.type||"addon"!==e.type&&"inner_addon"!==e.type||"wow_testimonial_carousel"!==e.name&&"wow_person_carousel"!==e.name||(n="",i=window.frames["wow-builder-view"].window.document,"wow_person_carousel"==e.name&&(n=l(i).find(".wow-person-content-carousel")),"wow_testimonial_carousel"==e.name&&(n=l(i).find(".wow-testimonial-content-carousel")),0<n.length&&o(n.data("autoplay"),n.data("speed"),n.data("showdots"),n.data("shownav"),n.data("col"),n,"backend"))});var t=l(".wow-testimonial-content-carousel"),e=l(".wow-person-content-carousel");function o(t,e,n,i,o,a,s){var r={autoplay:t,dots:n,arrows:i,speed:e,slidesToShow:o,slidesToScroll:o,responsive:[{breakpoint:1024,settings:{slidesToShow:o,slidesToScroll:o}},{breakpoint:850,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]};1==i&&(r.nextArrow='<span class="wow-carousel-prev"><i class="fas fa-angle-right"></i></span>',r.prevArrow='<span class="wow-carousel-next"><i class="fas fa-angle-left"></i></span>'),"backend"==s&&(a.not(".slick-initialized").slick(r),a.each(function(){l(this).hasClass("slick-initialized")||l(this).slick()})),"frontend"==s&&a.slick(r)}0<t.length&&o(t.data("autoplay"),t.data("speed"),t.data("showdots"),t.data("shownav"),t.data("col"),t,"frontend"),0<e.length&&o(e.data("autoplay"),e.data("speed"),e.data("showdots"),e.data("shownav"),e.data("col"),e,"frontend"),l(document).on("click",".wow-close-alert",function(){l(this).closest(".wow-alert-addon").fadeOut(200)}),l(document).on("click",".wow-flip-box-content.flipon-click .wow-flipbox-panel, .threeD_style.flipon-click .threeD-content-wrap",function(){l(this).toggleClass("flip")}),l(document).on("mouseenter",".wow-flip-box-content.flipon-hover .wow-flipbox-panel, .threeD_style.flipon-hover .threeD-content-wrap",function(){l(this).addClass("flip")}),l(document).on("mouseleave",".wow-flip-box-content.flipon-hover .wow-flipbox-panel, .threeD_style.flipon-hover .threeD-content-wrap",function(){l(this).removeClass("flip")});({init:function(){this.fire_live_change()},fire_live_change:function(){l(document).on("widget-added",function(){l(".wow-form-widget").on("change",function(){var i,t,o,e,n=l(".wow-form-widget"),a=n.closest("form").serializeArray();n.length&&(i={},t=n.find('[name="id_base"]').val(),o=jQuery('[name="widget_input_base_name"]').val(),e=n.find('[name="widget-id"]').val(),e=parseInt(e.replace("widget-","")),a.length&&(__.forEach(a,function(t,e){var n=(n=t.name.replace(o,"")).replace("[","").replace("]","");i[n]=t.value}),i.wow_widget_id=e,i.wow_widget_id_base=t,i.addon_type="widget"),l.ajax({type:"POST",url:page_data.ajaxurl,dataType:"json",data:{action:"wow_render_widget",widget:{settings:i,id:e}},success:function(t){l("#wow-builder-view").contents().find("body").find("#wow-addon-"+e).html(t.data.html)}}))})})}}).init()}),function(){function e(t,e){return function(){return t.apply(e,arguments)}}var i,t,n,s=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};function o(t){null==t&&(t={}),this.scrollCallback=e(this.scrollCallback,this),this.scrollHandler=e(this.scrollHandler,this),this.start=e(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),this.animationNameCache=new n}function a(){console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}function r(){this.keys=[],this.values=[]}function l(){}l.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},l.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t=l,n=this.WeakMap||this.MozWeakMap||(r.prototype.get=function(t){for(var e,n=this.keys,i=e=0,o=n.length;e<o;i=++e)if(n[i]===t)return this.values[i]},r.prototype.set=function(t,e){for(var n,i=this.keys,o=n=0,a=i.length;n<a;o=++n)if(i[o]===t)return void(this.values[o]=e);return this.keys.push(t),this.values.push(e)},r),i=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a.notSupported=!0,a.prototype.observe=function(){},a),this.WPPBWOW=(o.prototype.defaults={boxClass:"wow-wow",animateClass:"wow-animated",offset:0,mobile:!0,live:!0},o.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():document.addEventListener("DOMContentLoaded",this.start),this.finished=[]},o.prototype.start=function(){var o,t,e,n,s;if(this.stopped=!1,this.boxes=function(){for(var t=this.element.querySelectorAll("."+this.config.boxClass),e=[],n=0,i=t.length;n<i;n++)o=t[n],e.push(o);return e}.call(this),this.all=function(){for(var t=this.boxes,e=[],n=0,i=t.length;n<i;n++)o=t[n],e.push(o);return e}.call(this),this.boxes.length,this.disabled())this.resetStyle();else{for(t=0,e=(n=this.boxes).length;t<e;t++)o=n[t],this.applyStyle(o,!0);window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}return this.config.live?new i((s=this,function(t){for(var o,a,e=[],n=0,i=t.length;n<i;n++)a=t[n],e.push(function(){for(var t=a.addedNodes||[],e=[],n=0,i=t.length;n<i;n++)o=t[n],e.push(this.doSync(o));return e}.call(s));return e})).observe(document.body,{childList:!0,subtree:!0}):void 0},o.prototype.stop=function(){return this.stopped=!0,window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},o.prototype.sync=function(){return i.notSupported?this.doSync(this.element):void 0},o.prototype.doSync=function(t){var e,n,i,o,a;if(!this.stopped){if(null==t&&(t=this.element),1!==t.nodeType)return;for(a=[],n=0,i=(o=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass)).length;n<i;n++)e=o[n],s.call(this.all,e)<0?(this.applyStyle(e,!0),this.boxes.push(e),this.all.push(e),a.push(this.scrolled=!0)):a.push(void 0);return a}},o.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass},o.prototype.applyStyle=function(t,e){var n,i=t.getAttribute("data-wow-duration"),o=t.getAttribute("data-wow-delay"),a=t.getAttribute("data-wow-iteration");return this.animate((n=this,function(){return n.customStyle(t,e,i,o,a)}))},o.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},o.prototype.resetStyle=function(){for(var t,e=this.boxes,n=[],i=0,o=e.length;i<o;i++)t=e[i],n.push(t.setAttribute("style","visibility: visible;"));return n},o.prototype.customStyle=function(t,e,n,i,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},o.prototype.vendors=["moz","webkit"],o.prototype.vendorSet=function(o,t){var a,s,r,e=[];for(a in t)s=t[a],o[""+a]=s,e.push(function(){for(var t=this.vendors,e=[],n=0,i=t.length;n<i;n++)r=t[n],e.push(o[""+r+a.charAt(0).toUpperCase()+a.substr(1)]=s);return e}.call(this));return e},o.prototype.vendorCSS=function(t,e){for(var n,i=window.getComputedStyle(t),o=i.getPropertyCSSValue(e),a=this.vendors,s=0,r=a.length;s<r;s++)n=a[s],o=o||i.getPropertyCSSValue("-"+n+"-"+e);return o},o.prototype.animationName=function(e){var n;try{n=this.vendorCSS(e,"animation-name").cssText}catch(t){n=window.getComputedStyle(e).getPropertyValue("animation-name")}return"none"===n?"":n},o.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},o.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},o.prototype.scrollHandler=function(){return this.scrolled=!0},o.prototype.scrollCallback=function(){var o;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){for(var t=this.boxes,e=[],n=0,i=t.length;n<i;n++)(o=t[n])&&(this.isVisible(o)?this.show(o):e.push(o));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},o.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},o.prototype.isVisible=function(t){var e=t.getAttribute("data-wow-offset")||this.config.offset,n=window.pageYOffset,i=n+Math.min(this.element.clientHeight,innerHeight)-e,o=this.offsetTop(t),a=o+t.clientHeight;return o<=i&&n<=a},o.prototype.util=function(){return null!=this._util?this._util:this._util=new t},o.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},o)}.call(void 0),jQuery(function(t){(new WPPBWOW).init()});