"use strict";!function(){var n;jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd&&(n=jQuery.fn.select2.amd),n.define("select2/i18n/pl",[],function(){function r(n,e){return 1===n?e[0]:1<n&&n<=4?e[1]:5<=n?e[2]:void 0}var t=["znak","znaki","znaków"],e=["element","elementy","elementów"];return{errorLoading:function(){return"Nie można załadować wyników."},inputTooLong:function(n){var e=n.input.length-n.maximum;return"Usuń "+e+" "+r(e,t)},inputTooShort:function(n){var e=n.minimum-n.input.length;return"Podaj przynajmniej "+e+" "+r(e,t)},loadingMore:function(){return"Trwa ładowanie…"},maximumSelected:function(n){return"Możesz zaznaczyć tylko "+n.maximum+" "+r(n.maximum,e)},noResults:function(){return"Brak wyników"},searching:function(){return"Trwa wyszukiwanie…"},removeAllItems:function(){return"Usuń wszystkie przedmioty"}}}),n.define,n.require}();