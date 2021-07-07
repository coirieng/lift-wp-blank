function lift_fixed_header () {
	var getHeader = $('header#header').outerHeight(true)
	if(getHeader) {
		$('body').css({
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
