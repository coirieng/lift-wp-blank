"use strict";!function(m){function y(e){var a=e,l=(a=a.clone().attr("style","position: absolute !important; top: -1000 !important; ").appendTo("body")).width(!0);return a.remove(),l}function k(e,a){e&&window.console&&window.console.log&&window.console.log("jQuery-LABELAUTY: "+a)}m.fn.labelauty=function(e){var b=m.extend({development:!1,class:"labelauty",label:!0,separator:"|",checked_label:"Checked",unchecked_label:"Unchecked",force_random_id:!1,minimum_width:!1,same_width:!0},e);return this.each(function(){var e=jQuery.migrateDeduplicateWarnings||!1;b.development&&(jQuery.migrateDeduplicateWarnings=!1);var a,l,t=m(this),n=t.is(":checked"),c=t.attr("type"),i=!0,r=t.attr("aria-label");if(t.attr("aria-hidden",!0),!1===t.is(":checkbox")&&!1===t.is(":radio"))return this;if(t.addClass(b.class),a=t.attr("data-labelauty"),!0===(i=b.label)&&(null==a||0===a.length?((l=new Array)[0]=b.unchecked_label,l[1]=b.checked_label):2<(l=a.split(b.separator)).length?(i=!1,k(b.development,"There's more than two labels. LABELAUTY will not use labels.")):1===l.length&&k(b.development,"There's just one label. LABELAUTY will use this one for both cases.")),t.css({display:"none"}),t.removeAttr("data-labelauty"),d=t.attr("id"),b.force_random_id||null==d||""===d.trim()){for(var s=1+Math.floor(1024e3*Math.random()),d="labelauty-"+s;0!==m(d).length;)d="labelauty-"+ ++s,k(b.development,"Holy crap, between 1024 thousand numbers, one raised a conflict. Trying again.");t.attr("id",d)}var o,u,h,p=jQuery(function(e,a,l,t,n,c){var i,r,s,d="";null==n?r=s="":(r=n[0],s=null==n[1]?r:n[1]);d=null==a?"":'tabindex="0" role="'+t+'" aria-checked="'+l+'" aria-label="'+a+'"';i=1==c?'<label for="'+e+'" '+d+'><span class="labelauty-unchecked-image"></span><span class="labelauty-unchecked">'+r+'</span><span class="labelauty-checked-image"></span><span class="labelauty-checked">'+s+"</span></label>":'<label for="'+e+'" '+d+'><span class="labelauty-unchecked-image"></span><span class="labelauty-checked-image"></span></label>';return i}(d,r,n,c,l,i));p.on("click",function(){t.is(":checked")?m(p).attr("aria-checked",!1):m(p).attr("aria-checked",!0)}),p.on("keypress",function(e){e.preventDefault(),32!==e.keyCode&&13!==e.keyCode||(t.is(":checked")?(t.prop("checked",!1),m(p).attr("aria-checked",!1)):(t.prop("checked",!0),m(p).attr("aria-checked",!0)))}),t.after(p),!1!==b.minimum_width&&t.next("label[for="+d+"]").css({"min-width":b.minimum_width}),0!=b.same_width&&1==b.label&&(u=y((o=t.next("label[for="+d+"]")).find("span.labelauty-unchecked")),(h=y(o.find("span.labelauty-checked")))<u?o.find("span.labelauty-checked").width(u):o.find("span.labelauty-unchecked").width(h)),b.development&&(jQuery.migrateDeduplicateWarnings=e)})}}(jQuery);