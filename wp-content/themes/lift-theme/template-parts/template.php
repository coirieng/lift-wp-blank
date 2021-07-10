<?php
/**
* @package LIFT Creations 
* @subpackage Theme by Nguyen Pham
* https://baonguyenyam.github.io/cv
* @since 2021
*/

add_action( 'vc_load_default_templates_action','my_custom_template_for_vc' ); // Hook in
 
function my_custom_template_for_vc() {
  $data = array(); // Create new array
  $data['name'] = __( 'Custom template', 'js_composer' ); // Assign name for your custom template
  $data['weight'] = 0; // Weight of your template in the template list
  $data['image_path'] = preg_replace( '/\s/', '%20', plugins_url( 'images/custom_template_thumbnail.jpg', __FILE__ ) ); // Always use preg replace to be sure that "space" will not break logic. Thumbnail should have this dimensions: 114x154px
  $data['custom_class'] = 'custom_template_for_vc_custom_template'; // CSS class name
  $data['content']  = <<<CONTENT
  [vc_row][vc_column width="1/2"][vc_single_image border_color="grey" img_link_target="_self"][vc_column_text]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.[/vc_column_text][/vc_column][vc_column width="1/2"][vc_message color="alert-info" style="rounded"]I am message box. Click edit button to change this text.[/vc_message][/vc_column][/vc_row]
CONTENT;
  
  vc_add_default_templates( $data );
}


// $attributes = array(
// 	'name' => __( 'new name', 'js_composer' ),
//   	// 'category' => __( 'New category name', 'my-text-domain' )
// 	// 'params' => array(
// 	// 	'type' => 'dropdown',
// 	// 	'heading' => "AAAAAAAAAAAAAAAAA",
// 	// 	'param_name' => 'style',
// 	// 	'value' => array( "one", "two", "three" ),
// 	// 	'description' => __( "New style attribute", "js_composer" )
// 	// )
// 	);
// 	vc_map_update( 'vc_row', $attributes ); // Note: 'vc_row' was used as a base for "Message box" element

// 	$attributes2 = array(
// 		array(
// 		'type' => 'dropdown',
// 		'heading' => "Another Style",
// 		'param_name' => 'another_style',
// 		'value' => array( "four", "five", "six" ),
// 		'description' => __( "New style attribute", "my-text-domain" )
// 		)
// 	  );
// 	  vc_add_params( 'vc_row', $attributes2 ); // Note: 'vc_row' was used as a base for "Message box" element


// // add_filter( 'vc_load_default_templates', 'my_custom_template_at_first_position' ); // Hook in
 
// // function my_custom_template_at_first_position( $data ) {
// //   $template = array();
// //   $template['name'] = __( 'Custom template', 'js_composer' ); // Assign name for your custom template
// //   $template['image_path'] = preg_replace( '/\s/', '%20', plugins_url( 'images/custom_template_thumbnail.jpg', __FILE__ ) ); // Always use preg replace to be sure that "space" will not break logic. Thumbnail should have this dimensions: 114x154px.
// //   $template['custom_class'] = 'custom_template_for_vc_custom_template'; // CSS class name
// //   $template['content']  = <<<CONTENT
// //   [vc_row][vc_column width="1/2"][vc_single_image border_color="grey" img_link_target="_self"][vc_column_text]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.[/vc_column_text][/vc_column][vc_column width="1/2"][vc_message color="alert-info" style="rounded"]I am message box. Click edit button to change this text.[/vc_message][/vc_column][/vc_row]
// // CONTENT;
 
// //   array_unshift( $data, $template );
// //   return $data;
// // }
