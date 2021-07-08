function lift_fixed_header () {
	var getHeader = $('header#header.fixed-top').outerHeight(true)
	if(getHeader) {
		$('html').css({
			'padding-top': getHeader+'px'
		})
	}
}

lift_fixed_header()
LIFTReady(() => {
	lift_fixed_header()
});
liftDOMChange(() => {
});
