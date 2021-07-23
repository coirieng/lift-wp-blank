var LIFT_APP = {
	xs: 0,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	xxl: 1400,
	lift_fixed_header: function lift_fixed_header() {
		var getHeader = $('header#header.fixed-top').outerHeight(true)
		if (getHeader) {
			$('html').css({
				'padding-top': getHeader + 'px'
			})
		}
	},
	lift_active_header: function lift_active_header() {
		var st = $(window).scrollTop();
		if (st > 0) {
			$('header#header').addClass('active')
		} else {
			$('header#header').removeClass('active')
		}
	},
	lift_canvas_header: function lift_canvas_header() {
		var getHeaderNormal = $('header#header').outerHeight(true)
		// if(getHeaderNormal) {
		// 	$('header.site-header .menu-offcanvas').css({
		// 		'top': getHeaderNormal+'px'
		// 	})
		// }
		if($('header#header .navbar').hasClass('navbar-expand-all')){
			$('header.site-header .menu-offcanvas-all').css({
				'top': getHeaderNormal+'px'
			})
		}
		if($(window).width() >= LIFT_APP.xs && $(window).width() < LIFT_APP.sm){
			
		}
	}
}

///////////////////////////////////////////////////
// INIT APP 
///////////////////////////////////////////////////
liftDOMChange(() => {
});

$(function() {
	LIFT_APP.lift_fixed_header()
});

$( document ).ready(function() {
	LIFT_APP.lift_fixed_header()
	LIFT_APP.lift_canvas_header()
});

$(window).scroll(function () {
	LIFT_APP.lift_active_header()
});

$(window).resize(function () {
	LIFT_APP.lift_canvas_header()
});