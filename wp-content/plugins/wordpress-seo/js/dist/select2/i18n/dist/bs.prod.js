"use strict";!function(){var e;jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd&&(e=jQuery.fn.select2.amd),e.define("select2/i18n/bs",[],function(){function t(e,n,t,r){return e%10==1&&e%100!=11?n:2<=e%10&&e%10<=4&&(e%100<12||14<e%100)?t:r}return{errorLoading:function(){return"Preuzimanje nije uspijelo."},inputTooLong:function(e){var n=e.input.length-e.maximum;return"Obrišite "+n+" simbol"+t(n,"","a","a")},inputTooShort:function(e){var n=e.minimum-e.input.length;return"Ukucajte bar još "+n+" simbol"+t(n,"","a","a")},loadingMore:function(){return"Preuzimanje još rezultata…"},maximumSelected:function(e){return"Možete izabrati samo "+e.maximum+" stavk"+t(e.maximum,"u","e","i")},noResults:function(){return"Ništa nije pronađeno"},searching:function(){return"Pretraga…"},removeAllItems:function(){return"Uklonite sve stavke"}}}),e.define,e.require}();