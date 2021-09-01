/**
 * Back to top button
 */

 jQuery(window).scroll(function () {
	var getTop = jQuery(window).scrollTop();
	if(jQuery('#backtotop').length > 0) {
		if(getTop > 200)  {
			jQuery('#backtotop').addClass('active')
		} else {
			jQuery('#backtotop').removeClass('active')
		}
	}
});

