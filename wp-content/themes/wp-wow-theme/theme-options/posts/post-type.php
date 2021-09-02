<?php 
defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'Redux_Metaboxes' ) ) {
	return;
}

Redux_Metaboxes::set_box(
	$opt_name,
	array(
		'id'         => 'wow-theme-post-metaboxes',
		'title'      => esc_html__( 'WOW Post/Page Options', 'wow-theme-options' ),
		'post_types' => array( 'page', 'post' ),
		'position'   => 'normal', // normal, advanced, side.
		'priority'   => 'default', // high, core, default, low.
		'sections'   => array(
			array(
				'title'  => esc_html__( 'Layout', 'wow-theme-options' ),
				'id'     => 'wow-theme-post-metaboxes-basic',
				// 'desc'   => esc_html__( 'Redux Framework was created with the developer in mind. It allows for any theme developer to have an advanced theme panel with most of the features a developer would need. For more information check out the Github repo at:', 'wow-theme-options' ) . '  <a href="https://github.com/ReduxFramework/Redux-Framework">https://github.com/ReduxFramework/Redux-Framework</a>',
				'icon'   => 'el-icon-cogs',
				'fields' => array(
					array(
						'id'       => 'wow-theme-post-metaboxes-header-layout',
						'type'     => 'select',
						'title'    => esc_html__( 'Header layout', 'wow-theme-options' ),
						'options'  => array(
							'0' => esc_html__( 'Default', 'wow-theme-options' ),
							'1' => esc_html__( 'Layout 1', 'wow-theme-options' ),
							'2' => esc_html__( 'Layout 2', 'wow-theme-options' ),
							'3' => esc_html__( 'Layout 3', 'wow-theme-options' ),
						),
						'default'  => '0',
					),
					array(
						'id'       => 'wow-theme-post-metaboxes-header-gallery',
						'type'     => 'gallery',
						'title'    => esc_html__( 'Header Image', 'wow-theme-options' ),
					),

					array(
						'id'       => 'wow-theme-post-metaboxes-header',
						'type'     => 'switch',
						'title'    => esc_html__( 'Disable header', 'wow-theme-options' ),
						'default'  => 1,
					),

					array(
						'id'       => 'wow-theme-post-metaboxes-sidebar',
						'type'     => 'switch',
						'title'    => esc_html__( 'Disable Sidebar', 'wow-theme-options' ),
						'default'  => 1,
					),

					array(
						'id'       => 'wow-theme-post-metaboxes-header',
						'type'     => 'switch',
						'title'    => esc_html__( 'Disable header', 'wow-theme-options' ),
						'default'  => 1,
					),
				),
			),

			// array(
			// 	'title'      => esc_html__( 'Text Fields', 'wow-theme-options' ),
			// 	'desc'       => esc_html__( 'Redux Framework was created with the developer in mind. It allows for any theme developer to have an advanced theme panel with most of the features a developer would need. For more information check out the Github repo at:', 'wow-theme-options' ) . '  <a href="https://github.com/ReduxFramework/Redux-Framework">https://github.com/ReduxFramework/Redux-Framework</a>',
			// 	'icon'       => 'el-icon-cog',
			// 	'id'         => 'opt-text-fields',
			// 	'subsection' => true,
			// 	'fields'     => array(
			// 		array(
			// 			'title' => esc_html__( 'Text Field', 'wow-theme-options' ),
			// 			'id'    => 'opt-text',
			// 			'type'  => 'text',
			// 		),
			// 		array(
			// 			'title' => esc_html__( 'Textarea Field', 'wow-theme-options' ),
			// 			'id'    => 'opt-textarea',
			// 			'type'  => 'textarea',
			// 		),
			// 	),
			// ),

			array(
				'title'  => esc_html__( 'Documents', 'wow-theme-options' ),
                'desc'       => __( 'In order to receive all benefits of WOW Theme, you need to activate your copy of the plugin. By activating WOW Theme license you will unlock premium options - direct plugin updates, access to template library and official support. Don\'t have direct license yet? ', 'wow-theme-options' ) . '<a href="//wow-wp.com" target="_blank">Purchase WOW Theme license.</a>',
				'icon'   => 'el-icon-file',
				'id'     => 'color-section',
				'fields' => array(
					array(
						'id'       => 'opt-color',
						'type'     => 'color',
						'title'    => __( 'Color Field', 'wow-theme-options' ),
						'default'  => '#333333',
						'required' => array( 'opt-layout', '=', 'on' ),
					),
				),
			),
			// array(
			// 	'title'  => esc_html__( 'Layout', 'wow-theme-options' ),
			// 	'desc'   => esc_html__( 'Redux Framework was created with the developer in mind. It allows for any theme developer to have an advanced theme panel with most of the features a developer would need. For more information check out the Github repo at:', 'wow-theme-options' ) . '  <a href="https://github.com/ReduxFramework/Redux-Framework">https://github.com/ReduxFramework/Redux-Framework</a>',
			// 	'icon'   => 'el-icon-pencil',
			// 	'id'     => 'home-layout',
			// 	'fields' => array(
			// 		array(
			// 			'id'       => 'homepage_blocks',
			// 			'type'     => 'sorter',
			// 			'title'    => 'Homepage Layout Manager',
			// 			'desc'     => 'Organize how you want the layout to appear on the homepage',
			// 			'compiler' => 'true',
			// 			'required' => array( 'layout', '=', '1' ),
			// 			'options'  => array(
			// 				'enabled'  => array(
			// 					'placebo'    => 'placebo',
			// 					'highlights' => 'Highlights',
			// 					'slider'     => 'Slider',
			// 					'staticpage' => 'Static Page',
			// 					'services'   => 'Services',
			// 				),
			// 				'disabled' => array(
			// 					'placebo' => 'placebo',
			// 				),
			// 			),
			// 		),
			// 		array(
			// 			'id'       => 'slides',
			// 			'type'     => 'slides',
			// 			'title'    => esc_html__( 'Slides Options', 'wow-theme-options' ),
			// 			'subtitle' => esc_html__( 'Unlimited slides with drag and drop sortings.', 'wow-theme-options' ),
			// 			'desc'     => esc_html__( 'This field will store all slides values into a multidimensional array to use into a foreach loop.', 'wow-theme-options' ),
			// 		),
			// 	),
			// ),
		),
	)
);


// Redux_Metaboxes::set_box(
// 	$opt_name,
// 	array(
// 		'id'         => 'opt-metaboxes-2',
// 		'post_types' => array( 'page', 'post' ),
// 		'position'   => 'side', // normal, advanced, side.
// 		'priority'   => 'high', // high, core, default, low.
// 		'sections'   => array(
// 			array(
// 				'icon_class' => 'icon-large',
// 				'icon'       => 'el-icon-home',
// 				'fields'     => array(
// 					array(
// 						'title'   => esc_html__( 'Cross Box Required', 'wow-theme-options' ),
// 						'desc'    => esc_html__( 'Required arguments work across metaboxes! Click on Color Field under Metabox Options then adjust this field to see the fields within show or hide.', 'wow-theme-options' ),
// 						'id'      => 'opt-layout',
// 						'type'    => 'radio',
// 						'options' => array(
// 							'on'  => esc_html__( 'On', 'wow-theme-options' ),
// 							'off' => esc_html__( 'Off', 'wow-theme-options' ),
// 						),
// 						'default' => 'on',
// 					),
// 				),
// 			),
// 		),
// 	)
// );

Redux_Metaboxes::set_box(
	$opt_name,
	array(
		'id'         => 'wow-theme-post-sidebar',
		'post_types' => array( 'page', 'post' ),
		'position'   => 'side', // normal, advanced, side.
		'priority'   => 'default', // high, core, default, low.
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