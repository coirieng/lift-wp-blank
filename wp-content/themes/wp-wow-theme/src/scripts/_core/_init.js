/*
This function apply for toggle click on the menu
*/
(function(jQuery) {
    jQuery.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = jQuery(this).data();
            var tc = data.toggleclicked;
            jQuery.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));