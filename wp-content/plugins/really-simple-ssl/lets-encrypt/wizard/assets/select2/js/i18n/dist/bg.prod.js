"use strict";!function(){var n;jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd&&(n=jQuery.fn.select2.amd),n.define("select2/i18n/bg",[],function(){return{inputTooLong:function(n){var e=n.input.length-n.maximum,u="Моля въведете с "+e+" по-малко символ";return 1<e&&(u+="a"),u},inputTooShort:function(n){var e=n.minimum-n.input.length,u="Моля въведете още "+e+" символ";return 1<e&&(u+="a"),u},loadingMore:function(){return"Зареждат се още…"},maximumSelected:function(n){var e="Можете да направите до "+n.maximum+" ";return 1<n.maximum?e+="избора":e+="избор",e},noResults:function(){return"Няма намерени съвпадения"},searching:function(){return"Търсене…"}}}),n.define,n.require}();