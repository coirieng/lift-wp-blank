"use strict";!function(){var n;jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd&&(n=jQuery.fn.select2.amd),n.define("select2/i18n/hr",[],function(){function e(n){var e=" "+n+" znak";return n%10<5&&0<n%10&&(n%100<5||19<n%100)?1<n%10&&(e+="a"):e+="ova",e}return{errorLoading:function(){return"Preuzimanje nije uspjelo."},inputTooLong:function(n){return"Unesite "+e(n.input.length-n.maximum)},inputTooShort:function(n){return"Unesite još "+e(n.minimum-n.input.length)},loadingMore:function(){return"Učitavanje rezultata…"},maximumSelected:function(n){return"Maksimalan broj odabranih stavki je "+n.maximum},noResults:function(){return"Nema rezultata"},searching:function(){return"Pretraga…"}}}),n.define,n.require}();