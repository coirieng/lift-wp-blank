/*
* Menu Toggle
*/
if($("header.site-header .navbar-toggler:not(.navbar-offcanvas)").length > 0) {
    $("header.site-header .navbar-toggler:not(.navbar-offcanvas)").clickToggle(function () {
        $(this).parents('header').toggleClass('toggle', 0)
    },function () {
        $(this).parents('header').toggleClass('toggle', 0)
    });
}

/*
* Menu Offcanvas
*/
if($("header.site-header .navbar-toggler.navbar-offcanvas").length > 0) {
    $("header.site-header .navbar-toggler.navbar-offcanvas").clickToggle(function () {
        $(this).toggleClass('collapsed')
        $(this).parents('header').find('.primary-menu-container').toggleClass('open')
    },function () {
        $(this).toggleClass('collapsed')
        $(this).parents('header').find('.primary-menu-container').toggleClass('open')
    });
}
