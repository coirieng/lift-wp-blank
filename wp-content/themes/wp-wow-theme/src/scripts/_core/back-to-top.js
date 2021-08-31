/**
 * Back to top button
 */

 $(window).scroll(function () {
	var getTop = $(window).scrollTop();
	if($('#backtotop').length > 0) {
		if(getTop > 200)  {
			$('#backtotop').addClass('active')
		} else {
			$('#backtotop').removeClass('active')
		}
	}
});

