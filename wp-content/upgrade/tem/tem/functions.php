<?php

// =============================================================================
// FUNCTIONS.PHP
// -----------------------------------------------------------------------------
// Overwrite or add your own custom functions to X in this file.
// =============================================================================

// =============================================================================
// TABLE OF CONTENTS
// -----------------------------------------------------------------------------
//   01. Enqueue Parent Stylesheet
//   02. Additional Functions
// =============================================================================

// Enqueue Parent Stylesheet
// =============================================================================

add_filter( 'x_enqueue_parent_stylesheet', '__return_true' );



// Additional Functions
// =============================================================================
function x_child_visual_composer_update_existing_shortcodes(){
	if ( function_exists( 'vc_add_param' ) ) {
		vc_add_param( 'vc_row', array(
				'type' => 'textfield',
				'heading' => "HTML ID",
				'param_name' => 'element_id',
				'value' => '',
				'description' => __( "Assign an ID to the row", "discprofile" ),
			) );

		// Update 'vc_row' to include custom vc_row template and remap shortcode
		$new_map = vc_map_update( 'vc_row', array( 'html_template' => locate_template( 'vc_templates/vc_row.php' ) ) );

		// Remove default vc_row
		vc_remove_element( 'vc_row' );

		// Remap shortcode with custom template
		vc_map( $new_map['vc_row'] );
	}
}
add_action( 'wp_loaded', 'x_child_visual_composer_update_existing_shortcodes' );