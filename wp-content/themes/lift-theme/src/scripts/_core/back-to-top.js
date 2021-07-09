/**
 * File primary-navigation.js.
 *
 * Required to open and close the mobile navigation.
 */

/**
 * Toggle an attribute's value
 *
 * @param {Element} el - The element.
 * @param {boolean} withListeners - Whether we want to add/remove listeners or not.
 * @since 2021
 */

$("body, html").scroll(function () {
	var getTop = $(this).scrollTop();
	if(getTop > 200)  {
		$('#backtotop').addClass('active')
	} else {
		$('#backtotop').removeClass('active')
	}
});

