"use strict";!function(){var n;jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd&&(n=jQuery.fn.select2.amd),n.define("select2/i18n/dsb",[],function(){function u(n,e){return 1===n?e[0]:2===n?e[1]:2<n&&n<=4?e[2]:5<=n?e[3]:void 0}var t=["znamuško","znamušce","znamuška","znamuškow"],e=["zapisk","zapiska","zapiski","zapiskow"];return{errorLoading:function(){return"Wuslědki njejsu se dali zacytaś."},inputTooLong:function(n){var e=n.input.length-n.maximum;return"Pšosym lašuj "+e+" "+u(e,t)},inputTooShort:function(n){var e=n.minimum-n.input.length;return"Pšosym zapódaj nanejmjenjej "+e+" "+u(e,t)},loadingMore:function(){return"Dalšne wuslědki se zacytaju…"},maximumSelected:function(n){return"Móžoš jano "+n.maximum+" "+u(n.maximum,e)+"wubraś."},noResults:function(){return"Žedne wuslědki namakane"},searching:function(){return"Pyta se…"},removeAllItems:function(){return"Remove all items"}}}),n.define,n.require}();