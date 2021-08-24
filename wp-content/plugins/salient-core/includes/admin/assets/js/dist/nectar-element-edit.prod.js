"use strict";!function(o){var r={mouseX:0,mouseUp:!1,bindEvents:function(){o(window).on("mousemove",function(e){r.mouseX=e.clientX}),o(window).on("mouseup",function(){r.mouseUp=!0,o(".wpb_edit_form_elements .wpb_el_type_nectar_numerical").removeClass("scrubbing").removeClass("no-scrubbing")})},init:function(){this.bindEvents()}};function s(e){this.$el=e,this.elements=[],this.$elements="",this.className=!1,this.active=!1,this.createStyle(),this.getInitialSet(),this.trackActive(),this.constrainEvents()}function c(e){this.$el=e,this.$scrubber="",this.$scrubberIndicator="",this.scrubberIndicatorX=0,this.$editFormLine=e.parents(".edit_form_line"),this.$placeHolder=e.parents(".edit_form_line").find(".placeholder"),this.mouseDown=!1,this.initialX=0,this.calculatedVal=0,this.scrubberCurrent=0,this.currentVal=0,this.unit="",e.is("[class*=padding]")?this.zeroFloor=!0:this.zeroFloor=!1,this.createMarkup(),this.trackActive(),this.scrubbing()}function l(e){o("body").find("."+e+":not(.desktop)").hide();var t=o("body").find("."+e).find(".group-title").clone();o("body").find("."+e).wrapAll('<div class="'+e+'-wrap nectar-device-group-wrap vc_column" />'),o("body").find("."+e).find(".group-title").hide(),o("."+e+"-wrap").before('<div class="'+e+'-header nectar-device-group-header" />');var a=o("."+e+"-header");a.append(t),a.append('<span class="device-selection"><i class="dashicons-before dashicons-desktop active" data-filter="desktop"></i> <i class="dashicons-before dashicons-tablet" data-filter="tablet"></i> <i class="dashicons-before dashicons-smartphone" data-filter="phone"></i></span>')}function d(e){var t=e.parents(".nectar-device-group-wrap").prev(".nectar-device-group-header"),a=e.is('input[type="text"]')?"text":"select",n=!1,i="desktop";0<e.parents('div[class*="vc_wrapper-param-type"].tablet').length?i="tablet":0<e.parents('div[class*="vc_wrapper-param-type"].phone').length&&(i="phone"),t.find('i[data-filter="'+i+'"]').removeClass("in-use"),"text"==a?e.parents(".nectar-device-group-wrap").find("."+i+' input[type="text"]').each(function(){(0<o(this).parents(".vc_wrapper-param-type-textfield").length&&o(this).val().length||0<o(this).parents(".vc_wrapper-param-type-nectar_numerical").length&&o(this).val().length)&&(n=!0)}):e.parents(".nectar-device-group-wrap").find("."+i+" select").each(function(){"desktop"!=i&&0<o(this).parents(".vc_wrapper-param-type-dropdown").length&&o(this).val().length?"inherit"!=o(this).val()&&"default"!=o(this).val()&&(n=!0):"desktop"==i&&0<o(this).parents(".vc_wrapper-param-type-dropdown").length&&o(this).val().length&&"no-extra-padding"!=o(this).val()&&"default"!=o(this).val()&&(n=!0)}),1==n&&t.find('i[data-filter="'+i+'"]').addClass("in-use")}function n(){var e=o('div[data-vc-shortcode-param-name="color_overlay"]').parents(".vc_edit-form-tab"),t=e.parents(".wpb_edit_form_elements").find('div[data-vc-shortcode-param-name="bg_image"].wpb_el_type_fws_image');0==t.length&&(t=e.parents(".wpb_edit_form_elements").find('div[data-vc-shortcode-param-name="background_image"].wpb_el_type_fws_image'));var a,n=o(".nectar-color-overlay-preview");0<t.find("img[src]").length?(-1!=(a=t.find("img[src]").attr("src")).indexOf("-150x150")&&(a=a.replace("-150x150.",".")),n.find("span.wrap").css("background-image","url("+a+")").addClass("using-img")):n.find("span.wrap").css("background-image","").removeClass("using-img")}function p(e){o('div[data-vc-shortcode-param-name="color_overlay"]').parents(".vc_edit-form-tab");var t=o('<div class="nectar-color-overlay-preview"></div>'),a="row"===e?"bg_image":"background_image";t.append('<span class="wrap" />'),t.find(".wrap").append("<span />"),t.insertAfter(o('.col-md-6-last[data-vc-shortcode-param-name="color_overlay_2"]')),o('input[name="color_overlay"]').on("change",i),o('input[name="color_overlay_2"]').on("change",i),o('select[name="gradient_direction"]').on("change",i),o('select[name="overlay_strength"]').on("change",i),o('input[name="enable_gradient"]').on("change",i),o('input[name="'+a+'"].'+a+".fws_image").on("change",n),setTimeout(function(){o('div[data-vc-shortcode-param-name="color_overlay"] input.wp-picker-clear').on("mousedown",i),o('div[data-vc-shortcode-param-name="color_overlay_2"] input.wp-picker-clear').on("mousedown",i),o('div[data-vc-shortcode-param-name="color_overlay"] input[type="range"][name="alpha"]').on("change",i),o('div[data-vc-shortcode-param-name="color_overlay_2"] input[type="range"][name="alpha"]').on("change",i)},2e3),i(),n()}function i(){setTimeout(function(){var e=o('input[name="color_overlay"]'),t=o('input[name="color_overlay_2"]'),a=o("input#enable_gradient-true"),n=o('select[name="gradient_direction"]'),i=o('select[name="overlay_strength"]');if(0<a.length&&a.prop("checked")&&0<e.length&&0<t.length&&0<n.length){var r="90deg";switch(n.val()){case"left_to_right":r="90deg";break;case"left_t_to_right_b":r="135deg";break;case"left_b_to_right_t":r="45deg";break;case"top_to_bottom":r="to bottom"}var s=0<e.val().length?e.val():"rgba(255,255,255,0.001)",c=0<t.val().length?t.val():"rgba(255,255,255,0.001)";o(".nectar-color-overlay-preview .wrap span").css("background","linear-gradient("+r+", "+s+", "+c+")")}else o(".nectar-color-overlay-preview .wrap span").css({background:"","background-color":e.val()});o(".nectar-color-overlay-preview .wrap span").css("opacity",i.val())},150)}function u(e,t){return e=parseFloat(o(e).attr("data-date")),(t=parseFloat(o(t).attr("data-date")))<e?1:-1}function h(e,t){return(e=o(e).find(".vc_ui-list-bar-item-trigger").text())<(t=o(t).find(".vc_ui-list-bar-item-trigger").text())?1:-1}s.prototype.createStyle=function(){this.$el.parents(".vc_checkbox-label").wrapInner('<div class="constrained-cb"></div>')},s.prototype.getInitialSet=function(){var a=this,e=this.$el[0].className.split(/\s+/);o.each(e,function(e,t){0===t.indexOf("constrain_group_")&&(a.className=t)}),o('.wpb_edit_form_elements .vc_wrapper-param-type-nectar_numerical[class*="constrain_group"]').each(function(){o(this).hasClass(a.className)&&a.elements.push(o(this).find("input.wpb_vc_param_value"))}),a.$elements=o(".wpb_edit_form_elements").find("."+a.className+" input.wpb_vc_param_value")},s.prototype.trackActive=function(){var a=this;this.active=this.$el.prop("checked"),this.$el.on("change",function(){a.active=o(this).prop("checked"),1==a.active?o(this).parents(".vc_checkbox-label").addClass("active"):o(this).parents(".vc_checkbox-label").removeClass("active"),0<a.elements.length&&o.each(a.elements,function(e,t){1==a.active?t.addClass("constrained"):t.removeClass("constrained"),t.trigger("keyup"),t.trigger("change")})}),this.$el.trigger("change")},s.prototype.constrainEvents=function(){var a;0!=this.className&&(a=this,o.each(this.elements,function(e,t){t.on("change, keyup",function(){var e;a.active&&(e=o(this).val(),a.$elements.val(e).trigger("change"))})}))},c.prototype.createMarkup=function(){this.$el.parent().append('<span class="scrubber" />'),this.$scrubber=this.$el.parents(".edit_form_line").find(".scrubber"),this.$scrubber.append('<span class="inner"/>'),this.$scrubber.find(".inner").append("<span />"),this.$scrubber.append('<i class="dashicons dashicons-arrow-left-alt2" />'),this.$scrubber.append('<i class="dashicons dashicons-arrow-right-alt2" />'),this.$scrubberIndicator=this.$scrubber.find(".inner span")},c.prototype.trackActive=function(){var e=this;this.$el.on("focus",function(){e.$placeHolder.addClass("focus")}),this.$el.on("change",function(){0<e.$el.val().length?e.$placeHolder.addClass("focus"):e.$placeHolder.removeClass("focus")}),this.$el.on("blur",function(){0==e.$el.val().length&&e.$placeHolder.removeClass("focus"),e.$el.trigger("change")})},c.prototype.getUnit=function(){-1!=this.currentVal.indexOf("%")?this.unit="%":-1!=this.currentVal.indexOf("px")?this.unit="px":-1!=this.currentVal.indexOf("vw")?this.unit="vw":-1!=this.currentVal.indexOf("vh")?this.unit="vh":this.unit=""},c.prototype.scrubbing=function(){var t=this;this.$scrubber.on("mousedown",function(){var e;o(".wpb_el_type_nectar_numerical").addClass("no-scrubbing"),t.$el.parents(".wpb_el_type_nectar_numerical").removeClass("no-scrubbing").addClass("scrubbing"),t.mouseDown=!0,r.mouseUp=!1,t.initialX=r.mouseX,0==t.$el.val().length?(this.scrubberCurrent=0,t.currentVal=0,t.unit=""):(t.currentVal=t.$el.val(),"none"!=t.$scrubberIndicator.css("transform")&&(e=t.$scrubberIndicator.css("transform").replace(/[^0-9\-.,]/g,"").split(","),t.scrubberCurrent=e[12]||e[4]),isNaN(parseInt(t.currentVal))&&(t.currentVal="0"),t.getUnit()),requestAnimationFrame(t.scrubbingAlter.bind(t))})},c.prototype.scrubbingAlter=function(e){var t,a,n;1!=r.mouseUp&&requestAnimationFrame(this.scrubbingAlter.bind(this)),this.calculatedVal=parseInt(this.currentVal)+parseInt(r.mouseX-this.initialX)/3,this.calculatedVal=Math.floor(this.calculatedVal),this.zeroFloor&&this.calculatedVal<0?this.$el.val(0):(this.$el.val(this.calculatedVal+this.unit),this.scrubberIndicatorX=(t=this.scrubberIndicatorX,a=parseInt(this.scrubberCurrent)+parseInt(r.mouseX-this.initialX)/4,(1-(n=.14))*t+n*a),this.$scrubberIndicator.css({transform:"translate3d("+this.scrubberIndicatorX+"px, 0px, 0px)"})),this.$el.trigger("keyup"),this.$el.trigger("focus")},jQuery(document).ready(function(t){r.init();var e,a,n,i=[];t("#vc_ui-panel-edit-element").on("vcPanel.shown",function(){var e=0<t("#vc_ui-panel-edit-element[data-vc-shortcode]").length?t("#vc_ui-panel-edit-element").attr("data-vc-shortcode"):"";"vc_row"===e&&(0==t('._nectar_full_screen_rows label[for="nectar_meta_on"].ui-state-active').length?l("row-padding-device-group"):t(".row-padding-device-group.col-md-6").hide(),l("row-transform-device-group"),l("column-direction-device-group"),p("row")),"vc_row_inner"===e&&(l("row-padding-device-group"),l("row-transform-device-group"),l("row-min-width-device-group"),l("column-direction-device-group")),"vc_column"!==e&&"vc_column_inner"!==e||(l("column-padding-device-group"),l("column-margin-device-group"),"vc_column"===e&&l("column-max-width-device-group"),p("column")),"image_with_animation"===e&&l("image-margin-device-group"),"divider"===e&&l("divider-height-device-group"),"fancy_box"===e&&l("fancybox-min-height-device-group"),"vc_column"!==e&&"vc_column_inner"!==e&&"vc_row_inner"!==e&&"vc_row"!==e&&"image_with_animation"!==e&&"divider"!==e&&"fancy_box"!==e||(o(".nectar-device-group-header i").on("click",function(){var e=o(this).attr("data-filter"),t=o(this).parents(".nectar-device-group-header").next(".nectar-device-group-wrap");o(this).hasClass("active")||(o(this).parents(".nectar-device-group-header").find("i").removeClass("active"),o(this).addClass("active"),t.find("> div").hide(),t.find("> div."+e).fadeIn())}),o(".nectar-device-group-header .device-selection i").each(function(){var e=o(this).parents(".nectar-device-group-header").next(".nectar-device-group-wrap");e.find('input[type="text"], select').on("change",function(){d(o(this))}),e.find('input[type="text"], select').each(function(){d(o(this))})})),o('.vc_edit_form_elements .vc_shortcode-param:not(.constrain-icon) input[type="checkbox"].wpb_vc_param_value.checkbox').each(function(){var e;e=o(this).prop("checked")?o('<label class="cb-enable selected"><span>On</span></label><label class="cb-disable"><span>Off</span></label>'):o('<label class="cb-enable"><span>On</span></label><label class="cb-disable selected"><span>Off</span></label>');var t=o(this).parent(),a=o(this).detach();t.empty(),t.append(a),(a=t.find('input[type="checkbox"].wpb_vc_param_value.checkbox')).wrap('<div class="switch-options salient" />'),t.find(".switch-options").prepend(e);var n=a.parents(".switch-options");n.parent().is(".vc_checkbox-label")&&n.unwrap(),n.wrap('<div class="nectar-cb-enabled" />')}),o(".vc_edit_form_elements .switch-options.salient").each(function(){0<o(this).find(".cb-enable.selected").length&&o(this).addClass("activated")}),o(".wpb_edit_form_elements .nectar-add-media-btn").on("click",function(e){e.preventDefault();var t=o(this),a=null;(a=wp.media.frames.customHeader=wp.media({title:o(this).data("choose"),library:{type:"video"},button:{text:o(this).data("update")}})).on("select",function(){var e=a.state().get("selection").first();o(".wpb_edit_form_elements #"+t.attr("rel-id")).val(e.attributes.url).trigger("change"),t.parent().find(".nectar-add-media-btn").css("display","none"),t.parent().find(".nectar-remove-media-btn").css("display","inline-block")}),a.open()}),o(".wpb_edit_form_elements .nectar-remove-media-btn").on("click",function(e){e.preventDefault(),o(".wpb_edit_form_elements #"+o(this).attr("rel-id")).val(""),o(this).prev().css("display","inline-block"),o(this).css("display","none")}),0<t('._nectar_full_screen_rows label[for="nectar_meta_on"].ui-state-active').length&&"vc_row"===e&&t(".wpb_edit_form_elements .row-padding-device-group").addClass("fullscreen-rows-disabled"),t('.wpb_edit_form_elements input[type="checkbox"][class*="constrain_group_"]').each(function(e){i[e]=new s(t(this))}),t('input[type="text"].nectar-numerical').each(function(){new c(t(this))})}),e=o('div[data-vc-ui-element="panel-edit-element"] .vc_ui-panel-window-inner > .vc_ui-panel-content-container .vc_edit_form_elements'),o('<div class="salient-element-settings-loading"></di>').insertAfter(e),e.parent().find(".salient-element-settings-loading").append('<div class="salient-element-loading"><i class="vc-composer-icon vc-c-icon-cog"></i></div>'),a=o(".vc_templates-list-default_templates"),(n=o('<select id="salient-studio-sorting"></select>')).append('<option value="alphabetical">'+nectar_translations.alphabetical+"</option>"),n.append('<option value="date">'+nectar_translations.date+"</option>"),o('div[data-vc-ui-element="panel-templates"] .library_categories').prepend('<div class="library-sorting" />'),o('div[data-vc-ui-element="panel-templates"] .library-sorting').prepend(n),o('div[data-vc-ui-element="panel-templates"] .library-sorting').prepend('<label for="salient-studio-sorting">'+nectar_translations.sortby+"</label>"),o("body").on("change","select#salient-studio-sorting",function(){var e=o(".vc_templates-list-default_templates > div");o(".vc_templates-list-default_templates > div:first-child").is("data-date")||e.each(function(){var e,t,a=this.className.match(/(date\-[^\s]*)/);a&&void 0!==a[0]?(t=(e=a[0].replace("date-","").split("-"))[1]+" "+e[0]+" "+e[2],t=new Date(t).getTime(),o(this).attr("data-date",t)):o(this).attr("data-date","1000")});var t=o(this).val();"date"===t?e.sort(u).each(function(){a.prepend(this)}):"alphabetical"===t&&e.sort(h).each(function(){a.prepend(this)})}),o("body").on("click",".vc_edit_form_elements .switch-options.salient .cb-enable",function(){var e=o(this).parents(".switch-options");o(".cb-disable",e).removeClass("selected"),o(this).addClass("selected"),o(this).parent().addClass("activated"),o('input[type="checkbox"]',e).prop("checked",!0).trigger("change")}),o("body").on("click",".vc_edit_form_elements .switch-options.salient .cb-disable",function(){var e=o(this).parents(".switch-options");o(".cb-enable",e).removeClass("selected"),o(this).addClass("selected"),o(this).parent().removeClass("activated"),o('input[type="checkbox"]',e).prop("checked",!1).trigger("change")}),t(window).on("load",function(){void 0!==window.vc_mode&&"admin_frontend_editor"===window.vc_mode&&(t(window).on("nectar_wpbakery_el_save nectar_wpbakery_template_add",function(){var e=window.vc.builder.getContent();0<e.length&&t.ajax({type:"POST",url:window.ajaxurl,data:{action:"nectar_frontend_builder_generate_styles",_vcnonce:window.vcAdminNonce,nectar_page_content:e},success:function(e){var t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),window.vc.frame_window.vc_iframe.addStyles(t)}})}),t("body").on("mouseup",".vc_templates-template-type-default_templates button.vc_ui-list-bar-item-trigger",function(){setTimeout(function(){t(window).trigger("nectar_wpbakery_el_save")},1600)}))})})}(jQuery);