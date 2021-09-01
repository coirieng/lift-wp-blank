/*
* Button Search active/deactive
*/
if(jQuery("header.site-header .search-submit-toggle").length > 0){
    jQuery("header.site-header .search-submit-toggle").clickToggle(function () {
        jQuery(this).parents('.search-form').toggleClass('active')
    },function () {
        jQuery(this).parents('.search-form').toggleClass('active')
    });
}

/*
* Button Close active/deactive
*/
if(jQuery("header.site-header.search-sticky .search-submit-close").length > 0){
    jQuery("header.site-header:not(.search-sticky) .search-submit-close").clickToggle(function () {
        jQuery(this).parents('.search-form').toggleClass('active')
        jQuery(this).parents('#header').toggleClass('search-active')
    },function () {
        jQuery(this).parents('.search-form').toggleClass('active')
        jQuery(this).parents('#header').toggleClass('search-active')
    });

    jQuery("header.site-header.search-sticky .search-submit-close").clickToggle(function () {
        jQuery(this).parents('.search-form').toggleClass('active')
    },function () {
        jQuery(this).parents('.search-form').toggleClass('active')
    });
}
