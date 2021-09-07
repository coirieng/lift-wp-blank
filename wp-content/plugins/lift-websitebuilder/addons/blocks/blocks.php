<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class WOW_Addon_Blocks{

	public function get_name(){
		return 'wow_blocks';
	}
	public function get_title(){
		return 'LIFT Blocks';
	}
	public function get_icon() {
		return 'wow-font-file';
	}

	// text block Settings Fields
	public function get_settings() {

		$args = array(
		'post_type'=> 'blocks',
		'orderby'    => 'ID',
		'post_status' => 'publish',
		'order'    => 'DESC',
		'posts_per_page' => -1 // this will retrive all the post that is published 
		);
		$result = new WP_Query( $args );
		$taxonomies['none'] = 'None';
		foreach ($result->posts as &$value) {
			$taxonomies[$value->post_name] = $value->post_name;
		}

		$settings = array(

			'wowblocks' => array(
				'type' => 'select',
				'title' => __('Content','wow-pagebuilder'),
				'values' => $taxonomies ? $taxonomies : null,
				'std' => 'demo'
			),
			
		);
		return $settings;
	}

	// text block Render HTML
	public function render($data = null){

		
		$settings 		= $data['settings'];
		$wowblocks 		= isset($settings['wowblocks']) ? wp_kses_post( $settings['wowblocks'] ) : '';
		$enddata 		= do_shortcode('[blocks id="'.$wowblocks.'"]');

		$output = '';
		if($wowblocks){
			$output .= ''.$enddata.'';
		}

		return $output;
	}

	// text block Template
	public function getTemplate(){
		$output = '<div class="wow-blocks-content">[blocks id="{{{data.wowblocks}}}"]</div>';
		return $output;
	}

}