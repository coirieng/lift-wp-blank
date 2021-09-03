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
				'icon'   => 'bi bi-columns',
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
						'default'  => 0,
					),

					array(
						'id'       => 'wow-theme-post-metaboxes-sidebar',
						'type'     => 'switch',
						'title'    => esc_html__( 'Disable Sidebar', 'wow-theme-options' ),
						'default'  => 0,
					),

					array(
						'id'       => 'wow-theme-post-metaboxes-breadcrumb',
						'type'     => 'switch',
						'title'    => esc_html__( 'Disable breadcrumb', 'wow-theme-options' ),
						'default'  => 0,
					),

					array(
						'id'       => 'wow-theme-post-metaboxes-top-thumbnail',
						'type'     => 'switch',
						'title'    => esc_html__( 'Disable top thumbnail', 'wow-theme-options' ),
						'default'  => 0,
					),
					
				),
			),
			array(
				'title'  => esc_html__( 'META Post', 'wow-theme-options' ),
				'id'     => 'wow-theme-post-metaboxes-meta-basic',
				'icon'   => 'bi bi-bullseye',
				'fields' => array(
					array(
						'id'       => 'wow-theme-post-metaboxes-meta',
						'type'     => 'switch',
						'title'    => esc_html__( 'Disable META', 'wow-theme-options' ),
						'default'  => 0,
					),
					array(
						'id'       => 'wow-theme-post-metaboxes-meta-date',
						'required' => array( 'wow-theme-post-metaboxes-meta', '=', '0' ),
						'type'     => 'switch',
						'title'    => esc_html__( 'Disable date', 'wow-theme-options' ),
						'default'  => 0,
					),
					array(
						'id'       => 'wow-theme-post-metaboxes-meta-author',
						'required' => array( 'wow-theme-post-metaboxes-meta', '=', '0' ),
						'type'     => 'switch',
						'title'    => esc_html__( 'Disable author', 'wow-theme-options' ),
						'default'  => 0,
					),
					array(
						'id'       => 'wow-theme-post-metaboxes-meta-category',
						'required' => array( 'wow-theme-post-metaboxes-meta', '=', '0' ),
						'type'     => 'switch',
						'title'    => esc_html__( 'Disable category', 'wow-theme-options' ),
						'default'  => 0,
					),
				)
			),

			array(
				'title'  => esc_html__( 'Datas', 'wow-theme-options' ),
				'icon'   => 'bi bi-braces',
				'id'     => 'wow-theme-post-datas',
				'fields' => array(
					array(
						'id'       => 'wow-theme-post-datas-source',
						'type'     => 'text',
						'title'    => __('Source', 'wow-theme-options'),
						'default'  => "",
					),
					array(
						'id'       => 'wow-theme-post-datas-author',
						'type'     => 'text',
						'title'    => __('Author', 'wow-theme-options'),
						'default'  => "",
					),
					array(
						'id'       => 'wow-theme-post-datas-url',
						'type'     => 'text',
						'title'    => __('Url', 'wow-theme-options'),
						'default'  => "",
					),
					array(
						'id'       => 'wow-theme-post-datas-link',
						'type'     => 'text',
						'title'    => __('Link', 'wow-theme-options'),
						'default'  => "",
					),
					array(
						'id'       => 'wow-theme-post-datas-note',
						'type'     => 'textarea',
						'title'    => __('Note', 'wow-theme-options'),
						'default'  => "",
					),
				),
			),

			array(
				'title'  => esc_html__( 'Documents', 'wow-theme-options' ),
				'icon'   => 'bi bi-question-circle',
				'id'     => 'wow-theme-post-devdoc',
				'fields' => array(
					array(
						'id'   => 'opt-info-ddd',
						'full_width' => true,
						'type'     => 'raw',
						'content' => __( 'In order to receive all benefits of WOW Theme, you need to activate your copy of the plugin. By activating WOW Theme license you will unlock premium options - direct plugin updates, access to template library and official support. Don\'t have direct license yet?. ', 'wow-theme-options' ). '<a href="//wow-wp.com" target="_blank">Purchase WOW Theme license.</a>',
					),
				),
			),
			
		),
	)
);

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