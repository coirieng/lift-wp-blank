$("header.site-header .search-submit-toggle").clickToggle(function () {
    $(this).parents('.search-form').toggleClass('active')
},function () {
    $(this).parents('.search-form').toggleClass('active')
});
