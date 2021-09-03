<?php 
defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'Redux_Metaboxes' ) ) {
	return;
}
// https://devs.redux.io/configuration/fields/data.html#built-in-values
Redux_Metaboxes::set_box(
	$opt_name,
	array(
		'id'         => 'wow-theme-post-relates',
		'title'      => esc_html__( 'WOW Relates', 'wow-theme-options' ),
		'post_types' => array( 'post' ),
		'position'   => 'normal', // normal, advanced, side.
		'priority'   => 'high', // high, core, default, low.
		'sections'   => array(
			array(
				'id'     => 'wow-theme-post-relates-basic',
				'icon'   => 'bi bi-columns',
				'fields' => array(
					array(
						'id'       => 'wow-theme-post-relates-header-layout',
						'type'     => 'select',
						'data'  => 'posts',
						'args'  => array(
							'post_type'      => 'post',
							'posts_per_page' => 1,
							'orderby'        => 'title',
							'order'          => 'ASC',
						)
					),
				),
			),
		),
	)
);
