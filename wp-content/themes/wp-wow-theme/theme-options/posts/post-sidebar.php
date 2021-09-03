<?php 
defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'Redux_Metaboxes' ) ) {
	return;
}

Redux_Metaboxes::set_box(
	$opt_name,
	array(
		'id'         => 'wow-theme-post-sidebar',
		'post_types' => array( 'page', 'post' ),
		'position'   => 'side', // normal, advanced, side.
		'priority'   => 'default', // high, core, default, low.
		'title' 	=> esc_html__( 'WOW Sidebar', 'wow-theme-options' ),
		'sections'   => array(
			array(
				'icon_class' => 'icon-large',
				'icon'       => 'el-icon-home',
				'fields'     => array(
					array(
						'id'      => 'wow-theme-post-sidebar-data',
						'title'   => esc_html__( 'Sidebar', 'wow-theme-options' ),
						'type'    => 'select',
						'data'    => 'sidebars',
						'default' => 'sidebar-1',
					),
				),
			),
            array(
				'icon_class' => 'icon-large',
				'icon'       => 'el-icon-home',
				'fields'     => array(
					array(
						'id'      => 'wow-theme-post-sidebar-order',
						'title'   => esc_html__( 'Order', 'wow-theme-options' ),
						'type'    => 'select',
						'data'    => array(
                            "1" => "1",
                            "2" => "2",
                        ),
						'default' => '1',
					),
				),
			),
		),
	)
);
Redux_Metaboxes::set_box(
	$opt_name,
	array(
		'id'         => 'wow-theme-post-second-sidebar',
		'post_types' => array( 'page', 'post' ),
		'position'   => 'side', // normal, advanced, side.
		'priority'   => 'default', // high, core, default, low.
		'title' 	=> esc_html__( 'WOW Secondary Sidebar', 'wow-theme-options' ),
		'sections'   => array(
			array(
				'icon_class' => 'icon-large',
				'icon'       => 'el-icon-home',
				'fields'     => array(
					array(
						'id'      => 'wow-theme-post-second-sidebar-data',
						'title'   => esc_html__( 'Secondary Sidebar', 'wow-theme-options' ),
						'type'    => 'select',
						'data'    => 'sidebars',
						'default' => 'None',
					),
				),
			),
            array(
				'icon_class' => 'icon-large',
				'icon'       => 'el-icon-home',
				'fields'     => array(
					array(
						'id'      => 'wow-theme-post-second-sidebar-order',
						'title'   => esc_html__( 'Order', 'wow-theme-options' ),
						'type'    => 'select',
						'data'    => array(
                            "1" => "1",
                            "2" => "2",
                        ),
						'default' => '2',
					),
				),
			),
		),
	)
);