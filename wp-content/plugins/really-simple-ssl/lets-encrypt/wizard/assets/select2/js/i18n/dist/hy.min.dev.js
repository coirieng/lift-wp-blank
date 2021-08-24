"use strict";

(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;
  return e.define("select2/i18n/hy", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "Արդյունքները հնարավոր չէ բեռնել։";
      },
      inputTooLong: function inputTooLong(e) {
        var t = e.input.length - e.maximum,
            n = "Խնդրում ենք հեռացնել " + t + " նշան";
        return n;
      },
      inputTooShort: function inputTooShort(e) {
        var t = e.minimum - e.input.length,
            n = "Խնդրում ենք մուտքագրել " + t + " կամ ավել նշաններ";
        return n;
      },
      loadingMore: function loadingMore() {
        return "Բեռնվում են նոր արդյունքներ․․․";
      },
      maximumSelected: function maximumSelected(e) {
        var t = "Դուք կարող եք ընտրել առավելագույնը " + e.maximum + " կետ";
        return t;
      },
      noResults: function noResults() {
        return "Արդյունքներ չեն գտնվել";
      },
      searching: function searching() {
        return "Որոնում․․․";
      }
    };
  }), {
    define: e.define,
    require: e.require
  };
})();