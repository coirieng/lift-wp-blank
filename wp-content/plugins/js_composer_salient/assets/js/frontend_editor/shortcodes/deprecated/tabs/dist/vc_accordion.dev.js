"use strict";

(function ($) {
  'use strict';

  window.InlineShortcodeView_vc_accordion = window.InlineShortcodeView_vc_row.extend({
    events: {
      'click > .wpb_accordion > .vc_empty-element': 'addElement'
    },
    render: function render() {
      _.bindAll(this, 'stopSorting');

      this.$accordion = this.$el.find('> .wpb_accordion');

      window.InlineShortcodeView_vc_accordion.__super__.render.call(this);

      return this;
    },
    changed: function changed() {
      if (this.allowAddControlOnEmpty() && 0 === this.$el.find('.vc_element[data-tag]').length) {
        this.$el.addClass('vc_empty').find('> :first').addClass('vc_empty-element');
      } else {
        if (this.allowAddControlOnEmpty()) {
          this.$el.removeClass('vc_empty').find('> .vc_empty-element').removeClass('vc_empty-element');
        }

        this.setSorting();
      }
    },
    buildAccordion: function buildAccordion(active_model) {
      var active = false;

      if (active_model) {
        active = this.$accordion.find('[data-model-id=' + active_model.get('id') + ']').index();
      }

      vc.frame_window.vc_iframe.buildAccordion(this.$accordion, active);
    },
    setSorting: function setSorting() {
      vc.frame_window.vc_iframe.setAccordionSorting(this);
    },
    beforeUpdate: function beforeUpdate() {
      this.$el.find('.wpb_accordion_heading').remove();

      window.InlineShortcodeView_vc_accordion.__super__.beforeUpdate.call(this);
    },
    stopSorting: function stopSorting() {
      this.$accordion.find('> .wpb_accordion_wrapper > .vc_element[data-tag]').each(function () {
        var model = vc.shortcodes.get($(this).data('modelId'));
        model.save({
          order: $(this).index()
        }, {
          silent: true
        });
      });
    },
    addElement: function addElement(e) {
      if (e && e.preventDefault) {
        e.preventDefault();
      }

      new vc.ShortcodesBuilder().create({
        shortcode: 'vc_accordion_tab',
        params: {
          title: window.i18nLocale.section
        },
        parent_id: this.model.get('id')
      }).render();
    },
    rowsColumnsConverted: function rowsColumnsConverted() {
      _.each(vc.shortcodes.where({
        parent_id: this.model.get('id')
      }), function (model) {
        if (model.view.rowsColumnsConverted) {
          model.view.rowsColumnsConverted();
        }
      });
    }
  });
})(window.jQuery);