/*
* Menu Toggle
*/
if(jQuery("header.site-header .navbar-toggler:not(.navbar-offcanvas)").length > 0) {
    jQuery("header.site-header .navbar-toggler:not(.navbar-offcanvas)").clickToggle(function () {
        jQuery(this).parents('header').toggleClass('toggle', 0)
    },function () {
        jQuery(this).parents('header').toggleClass('toggle', 0)
    });
}

/*
* Menu Offcanvas
*/
if(jQuery("header.site-header .navbar-toggler.navbar-offcanvas").length > 0) {
    jQuery("header.site-header .navbar-toggler.navbar-offcanvas").clickToggle(function () {
        jQuery(this).toggleClass('collapsed')
        jQuery(this).parents('header').find('.primary-menu-container').toggleClass('open')
    },function () {
        jQuery(this).toggleClass('collapsed')
        jQuery(this).parents('header').find('.primary-menu-container').toggleClass('open')
    });
}
