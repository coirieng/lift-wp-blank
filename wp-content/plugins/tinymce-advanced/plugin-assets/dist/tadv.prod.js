"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}jQuery(document).ready(function(i){var e=i("#tadv-import"),o=i("#tadv-import-error");function a(){var t=i(".container-classic-block"),o=i(".container-block"),e=i("#toolbar_block");t.sortable("instance")&&t.sortable("destroy"),o.sortable("instance")&&o.sortable("destroy"),e.sortable("instance")&&e.sortable("destroy"),t.sortable({connectWith:".container-classic-block",items:"> li",cursor:"move",stop:function(t,e){n(e.item.parent().attr("id"),e.item)},activate:function(){i(this).parent().addClass("highlighted")},deactivate:function(){i(this).parent().removeClass("highlighted")},revert:300,opacity:.7,placeholder:"tadv-placeholder",forcePlaceholderSize:!0}),e.sortable({connectWith:".container-block",items:"> li",cursor:"move",stop:function(t,e){n(e.item.parent().attr("id"),e.item),c()},activate:function(){i(this).parent().addClass("highlighted")},deactivate:function(){i(this).parent().removeClass("highlighted")},revert:300,opacity:.7,placeholder:"tadv-placeholder",forcePlaceholderSize:!0}),o.sortable({connectWith:".container-block, #toolbar_block",items:"> li",cursor:"move",stop:function(t,e){n(e.item.parent().attr("id"),e.item),c()},activate:function(){i(this).parent().addClass("highlighted")},deactivate:function(){i(this).parent().removeClass("highlighted")},receive:function(t,e){i(t.target).is("#toolbar_block_side")&&(e.item.is("li.core-image")||e.item.is("li.core-text-color"))&&o.sortable("cancel")},revert:300,opacity:.7,placeholder:"tadv-block-placeholder",forcePlaceholderSize:!0})}function n(t,e){t&&e.find('input[type="hidden"]').attr("name",t+"[]")}function c(){var t=i("#toolbar_block"),e=t.find("li");e.sort(function(t,e){var o=i(t).find("div").attr("title");return i(e).find("div").attr("title")<o?1:-1}),t.append(e)}function r(t){return window.tadvTranslation.hasOwnProperty(t)?window.tadvTranslation[t]:t}a(),i(".settings-toggle.block").on("focus",function(t){i(".wrap").removeClass("classic-active").addClass("block-active"),a()}),i(".settings-toggle.classic").on("focus",function(t){var e;i(".wrap").removeClass("block-active").addClass("classic-active"),(e=i(".container")).sortable("instance")&&e.sortable("destroy"),e.sortable({connectWith:".container",items:"> li",cursor:"move",stop:function(t,e){var o;e&&(o=e.item.parent().attr("id"))&&e.item.find("input.tadv-button").attr("name",o+"[]")},activate:function(){i(this).parent().addClass("highlighted")},deactivate:function(){i(this).parent().removeClass("highlighted")},revert:300,opacity:.7,placeholder:"tadv-placeholder",forcePlaceholderSize:!0})}),i("#menubar").on("change",function(){i(".tadv-mce-menu.tadv-classic-editor").toggleClass("enabled",i(this).prop("checked"))}),i("#menubar_block").on("change",function(){i(".tadv-mce-menu.tadv-block-editor").toggleClass("enabled",i(this).prop("checked"))}),i("#tadvadmins").on("submit",function(){i("ul.container").each(function(t,e){i(e).find(".tadv-button").attr("name",e.id?e.id+"[]":"")})}),i('input[name="selected_text_color"]').on("change",function(){"selected_text_color_yes"===this.id?i(".panel-block-text-color").removeClass("disabled"):i(".panel-block-text-color").addClass("disabled")}),i('input[name="selected_text_background_color"]').on("change",function(){"selected_text_background_color_yes"===this.id?i(".panel-block-background-color").removeClass("disabled"):i(".panel-block-background-color").addClass("disabled")}),i(".tadv-popout-help-toggle, .tadv-popout-help-close").on("click",function(t){i(".tadv-popout-help").toggleClass("hidden")}),i("#tadv-export-select").click(function(){i("#tadv-export").focus().select()}),e.change(function(){o.empty()}),i("#tadv-import-verify").click(function(){var t=(e.val()||"").replace(/^[^{]*/,"").replace(/[^}]*$/,"");e.val(t);try{JSON.parse(t),o.text("No errors.")}catch(t){o.text(t)}}),"object"===_typeof(window.tadvTranslation)&&(i(".tadvitem").each(function(t,e){var o=i(e),a=o.find(".descr"),n=a.text();n&&(n=r(n),a.text(n),o.find(".mce-ico").attr("title",n))}),i(".tadv-mce-menu .tadv-translate").each(function(t,e){var o=i(e),a=o.text();a&&o.text(r(a))}))});