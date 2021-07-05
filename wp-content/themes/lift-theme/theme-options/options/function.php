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

// Remove Redux Menu 
function remove_redux_fw_submenu() {
    remove_submenu_page( 'tools.php', 'redux-about' );
}
add_action( 'admin_menu', 'remove_redux_fw_submenu', 999 );

// Add Bootstrap 
add_filter( 'vc_shortcodes_css_class', 'lift_custom_css_classes_for_vc_row_and_vc_column', 10, 2 );

function lift_custom_css_classes_for_vc_row_and_vc_column( $class_string, $tag ) {
	if ( $tag == 'vc_row' || $tag == 'vc_row_inner' ) {
		//   $class_string = str_replace( 'vc_row-fluid', 'my_row-fluid', $class_string ); 
		$class_string = str_replace( 'vc_row', 'row', $class_string ); 
	}
		if ( $tag == 'vc_column' || $tag == 'vc_column_inner' ) {
		// $class_string = preg_replace( '/vc_col-sm-(\d{1,2})/', 'my_col-sm-$1', $class_string );
		$class_string = preg_replace( '/vc_column_container/', '', $class_string );
		$class_string = preg_replace( '/vc_col-(xs|sm|md|lg|xl|xxl)-(\d{1,2})/', 'col-$1-$2', $class_string );
	}
	return $class_string; 
}
