<?php
/**
* @package LIFT Creations 
* @subpackage Theme by Nguyen Pham
* https://baonguyenyam.github.io/cv
* @since 2021
*/

function lift_theme_export_css() {
	global $lift_theme;

	// LAYOUT 
	$layout_value['layout_size'] = $lift_theme['lift-theme-layout-size'];
	$layout_value['layout_size_value'] = $lift_theme['lift-theme-layout-size-value'];
	// HEADER  
	$header_value['header_size'] = $lift_theme['lift-theme-header-layout-size'];
	$header_value['header_size_value'] = $lift_theme['lift-theme-header-layout-size-value'];
	// FOOTER 
	$footer_value['footer_size'] = $lift_theme['lift-theme-footer-layout-size'];
	$footer_value['footer_size_value'] = $lift_theme['lift-theme-footer-layout-size-value'];

	$layout_css = "#content.lift-content {max-width: ".$layout_value['layout_size_value']."px; margin: auto auto}";
	$header_css = "#content.lift-header {max-width: ".$header_value['header_size_value']."px; margin: auto auto}";
	$footer_css = "#footer.lift-footer {max-width: ".$footer_value['footer_size_value']."px; margin: auto auto}";
	echo '<style type="text/css" id="lift-inline-css-options-output">/*!
* ╦  ╦╔═╗╔╦╗  ╔═╗┬─┐┌─┐┌─┐┌┬┐┬┌─┐┌┐┌┌─┐
* ║  ║╠╣  ║   ║  ├┬┘├┤ ├─┤ │ ││ ││││└─┐
* ╩═╝╩╚   ╩   ╚═╝┴└─└─┘┴ ┴ ┴ ┴└─┘┘└┘└─┘
* Coding by Nguyen Pham
* https://baonguyenyam.github.io
*/
	'
	. $layout_css 
	. $header_css 
	. $footer_css . 
	'</style>';
}
add_action( 'wp_head', 'lift_theme_export_css', 200 );

add_filter('use_block_editor_for_post', '__return_false');

