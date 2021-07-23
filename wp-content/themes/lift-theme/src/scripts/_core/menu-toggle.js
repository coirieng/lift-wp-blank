(function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));

$("header.site-header .navbar-toggler:not(.navbar-offcanvas)").clickToggle(function () {
	$(this).parents('header').toggleClass('toggle', 0)
},function () {
	setTimeout(() => {
        $(this).parents('header').toggleClass('toggle', 0)
    }, 500);
});

$("header.site-header .navbar-toggler.navbar-offcanvas").clickToggle(function () {
	$(this).toggleClass('collapsed', 0)
	$(this).parents('header').find('.primary-menu-container').toggleClass('open', 0)
	$(this).parents('header').find('.primary-menu-container').addClass('active', 0)
},function () {
    $(this).toggleClass('collapsed', 0)
    $(this).parents('header').find('.primary-menu-container').toggleClass('open', 0)
    if(!$(this).parents('header').find('.primary-menu-container').hasClass('open')){
        setTimeout(() => {
            $(this).parents('header').find('.primary-menu-container').removeClass('active', 0)
        }, 500);
    }
	
});

// $("header.site-header .navbar-toggler.navbar-offcanvas").on('click', function () {
// 	$(this).toggleClass('collapsed')
// 	$(this).parents('header').find('.primary-menu-container').toggleClass('open')
// });
