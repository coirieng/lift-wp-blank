<?php
/**
* @package LIFT Creations 
* @subpackage Theme by Nguyen Pham
* https://baonguyenyam.github.io/cv
* @since 2021
*/

    // -> START Header
    Redux::setSection( $opt_name, array(
        'title' => __( 'Header', 'lift-theme-options' ),
        'id'    => 'lift-theme-header',
        'icon'  => 'bi bi-menu-button-wide'
    ) );

	Redux::setSection( $opt_name, array(
		'title'      => __( 'Header options', 'lift-theme-options' ),
		'id'         => 'lift-theme-header-options',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'       => 'lift-theme-header-menu-toggle',
                'type'     => 'select',
                'title'    => __( 'Menu Toggle', 'lift-theme-options' ),
                'options'  => array(
					'keep'       => 'Keep', 
					'sm'       => 'Mobile', 
					'md'       => 'Phalet', 
					'lg'       => 'Tablet', 
					'xl'       => 'Small PC', 
					'xxl'       => 'Large PC', 
					'all'       => 'All Devices', 
				),
				'default'         => 'md'
            ),
			array(
				'id'       => 'lift-theme-header-fixed',
                'type'     => 'switch',
                'title'    => __( 'Header Fixed', 'lift-theme-options' ),
                'default'  => 0,
                'on'       => 'On',
                'off'      => 'Off',
            ),
			array(
				'id'       => 'lift-theme-header-search',
                'type'     => 'switch',
                'title'    => __( 'Header Search', 'lift-theme-options' ),
                'default'  => 0,
                'on'       => 'On',
                'off'      => 'Off',
            ),
			array(
				'id'       => 'lift-theme-header-search-align',
                'type'     => 'button_set',
				'required' => array( 'lift-theme-header-search', '!=', '0' ),
				'title'    => __( 'Header Search Align', 'lift-theme-options' ),
				'options' => array(
					'left' => 'Left', 
					'center' => 'Center',
					'right' => 'Right', 
					), 
				'default' => 'right'
            ),
			array(
                'id'       => 'lift-theme-header-logo',
                'type'     => 'media', 
				// 'url'      => true,
				// 'readonly' => false,
				'output'   => array( '#header .site-branding' ),
                'title'    => __( 'Header Logo <i style="color:red">(*)</i>', 'lift-theme-options' ),
            ),
			array(
                'id'       => 'lift-theme-header-logo-size',
				'required' => array( 'lift-theme-header-logo', '!=', '' ),
                'type'           => 'dimensions',
                'width'            => true,
                'height'            => true,
                'units'          => array( 'em', 'rem', 'px', '%' ),      
                'units_extended' => 'true',    
                'title'          => __( 'Header Logo Size', 'lift-theme-options' ),
            ),
			array(
                'id'       => 'lift-theme-header-logo-tablet',
                'type'     => 'media', 
				// 'url'      => true,
				// 'readonly' => false,
				'output'   => array( '#header .site-branding' ),
                'title'    => __( 'Phalet/Tablet Header Logo <i style="color:red">(*)</i>', 'lift-theme-options' ),
            ),
			array(
                'id'       => 'lift-theme-header-logo-tablet-size',
				'required' => array( 'lift-theme-header-logo-tablet', '!=', '' ),
                'type'           => 'dimensions',
                'width'            => true,
                'height'            => true,
                'units'          => array( 'em', 'rem', 'px', '%' ),      
                'units_extended' => 'true',    
                'title'          => __( 'Phalet/Tablet Header Logo Size', 'lift-theme-options' ),
            ),
			array(
                'id'       => 'lift-theme-header-logo-mobile',
                'type'     => 'media', 
				// 'url'      => true,
				// 'readonly' => false,
				'output'   => array( '#header .site-branding' ),
                'title'    => __( 'Mobile Header Logo <i style="color:red">(*)</i>', 'lift-theme-options' ),
            ),
			array(
                'id'       => 'lift-theme-header-logo-mobile-size',
				'required' => array( 'lift-theme-header-logo-mobile', '!=', '' ),
                'type'           => 'dimensions',
                'width'            => true,
                'height'            => true,
                'units'          => array( 'em', 'rem', 'px', '%' ),      
                'units_extended' => 'true',    
                'title'          => __( 'Mobile Header Logo Size', 'lift-theme-options' ),
            ),
			
		)
	));

	Redux::setSection( $opt_name, array(
        'title' => __( 'Header layout', 'lift-theme-options' ),
        'id'         => 'lift-theme-header-layout',
        'subsection' => true,
		'fields'     => array(
			array(
				'id'       => 'lift-theme-header-kind',
                'type'     => 'image_select',
                'title'    => __( 'Header Type <i style="color:red">(*)</i>', 'lift-theme-options' ),
				'options'  => array(
                    '1' => array(
                        'img' => get_template_directory_uri() . '/admin/img/menu-left-aligned.png'
                    ),
                    '2' => array(
                        'img' => get_template_directory_uri() . '/admin/img/centered-menu.png'
                    ),
                    '3' => array(
                        'img' => get_template_directory_uri() . '/admin/img/centered-menu-under-logo.png'
                    ),
                    '4' => array(
                        'img' => get_template_directory_uri() . '/admin/img/default-header.png'
                    ),
                ),
				'default'  => '1'
            ),
			array(
				'id'       => 'lift-theme-header-layout-style',
                'type'     => 'switch',
                'title'    => __( 'Containers', 'lift-theme-options' ),
                'subtitle' => __( 'Containers are a fundamental building block of Bootstrap that contain, pad, and align your content within a given device or viewport.', 'lift-theme-options' ),
                'default'  => 0,
                'on'       => 'Fullwidth',
                'off'      => 'Boxed',
            ),
			array(
				'id'       => 'lift-theme-header-layout-size',
                'type'     => 'switch',
                'required' => array( 'lift-theme-header-layout-style', '=', '1' ),
                'title'    => __( 'Max width container', 'lift-theme-options' ),
                'default'  => 0,
                'on'       => 'On',
                'off'      => 'Off',
            ),
			array(
				'id'       => 'lift-theme-header-layout-size-value',
				'type'          => 'slider',
                'required' => array( 'lift-theme-header-layout-size', '=', '1' ),
				'title'         => __( 'Bootstrap comes with three different containers', 'lift-theme-options' ),
				'min'           => 960,
				'step'          => 20,
				'default'       => 1140,
				'max'           => 1820,
				'display_value' => 'text'
			),
		),
    ) );

	Redux::setSection( $opt_name, array(
        'title'      => __( 'Header row', 'lift-theme-options' ),
        'id'         => 'lift-theme-header-row',
        'desc'       => __( 'For full documentation on this field, visit: ', 'lift-theme-options' ) . '<a href="//getbootstrap.com/docs/5.0/layout/gutters/" target="_blank">getbootstrap.com/docs/5.0/layout/gutters/</a>',
        'subsection' => true,
		'fields'     => array(
			array(
				'id'       => 'lift-theme-header-row-option',
                'type'     => 'switch',
                'title'    => __( 'Row padding', 'lift-theme-options' ),
                'default'  => 0,
                'on'       => 'On',
                'off'      => 'Off',
            ),
			array(
				'id'       => 'lift-theme-header-row-spacing',
				'required' => array( 'lift-theme-header-row-option', '=', '1' ),
                'type'           => 'spacing',
                'mode'           => 'padding',
                'all'            => false,
                'units'          => array( 'em', 'rem', 'px', '%' ),      // You can specify a unit value. Possible: px, em, %
                'units_extended' => 'true',    // Allow users to select any type of unit
                //'display_units' => 'false',   // Set to false to hide the units if the units are specified
                'title'          => __( 'Padding Option', 'lift-theme-options' ),
                'subtitle'       => __( 'Allow your users to choose the spacing or margin they want.', 'lift-theme-options' ),
                'desc'           => __( 'You can enable or disable any piece of this field. Top, Right, Bottom, Left, or Units.', 'lift-theme-options' ),
                'default'        => array(
                    'padding-top'    => '0',
                    'padding-right'  => '0',
                    'padding-bottom' => '0',
                    'padding-left'   => '0'
                )
            ),
		)
	));

	Redux::setSection( $opt_name, array(
		'title'      => __( 'Header style', 'lift-theme-options' ),
		'id'         => 'lift-theme-header-style',
		'subsection' => true,
		'fields'     => array(
			array(
                'id'       => 'lift-theme-header-style-bg',
                'type'     => 'background',
				'output'   => array( '#header' ),
                'title'    => __( 'Header background', 'lift-theme-options' ),
                'subtitle' => __( 'Pick a header background for the theme (default: #000).', 'lift-theme-options' ),
                'default'  => '#000000',
				'preview_media' => true,
				'preview' => false,
				'class' => 'lift-theme-admin-header-style lift-theme-admin-header-style-bg',
            ),
			array(
                'id'       => 'lift-theme-header-style-border-top',
                'type'     => 'border',
                'title'    => __( 'Header Border Top', 'lift-theme-options' ),
                'subtitle' => __( 'Only color validation can be done on this field type', 'lift-theme-options' ),
				'output'    => array(
					'border-top'  => '#header'
				),
                'right'         => false,     
                'bottom'        => false,  
                'left'          => false,  
                'top'          => true,  
                'default'  => array(
                    'border-color'  => 'transparent',
                    'border-style'  => 'solid',
                    'border-top'    => '0px',
                ),
            ),
			array(
                'id'       => 'lift-theme-header-style-border-bottom',
                'type'     => 'border',
                'title'    => __( 'Header Border Bottom', 'lift-theme-options' ),
                'subtitle' => __( 'Only color validation can be done on this field type', 'lift-theme-options' ),
				'output'    => array(
					'border-bottom'  => '#header'
				),
                'right'         => false,     
                'top'        => false,     
                'left'          => false,  
                'bottom'          => true,  
                'default'  => array(
                    'border-color'  => 'transparent',
                    'border-style'  => 'solid',
                    'border-bottom'    => '0px',
                ),
            ),
			array(
                'id'       => 'lift-theme-header-style-color',
                'type'     => 'color_rgba',
				'output'    => array(
					'color'  => '#header'
				),
                'title'    => __( 'Header color', 'lift-theme-options' ),
                'subtitle' => __( 'Pick a header color for the theme (default: #000).', 'lift-theme-options' ),
                'default'  => '#000000',
            ),
			array(
                'id'       => 'lift-theme-header-style-link',
                'type'     => 'link_color',
				'output'    => array(
					'color'  => '#header a'
				),
				'title'    => __('Header links', 'lift-theme-options'),
				'subtitle' => __('Only color validation can be done on this field type', 'lift-theme-options'),
				'default'  => array(
					'regular'  => '#1e73be', // blue
					'hover'    => '#dd3333', // red
					'active'   => '#8224e3',  // purple
					'visited'  => '#8224e3',  // purple
				)
            ),
			array(
				'id'       => 'lift-theme-header-shadow',
                'type'     => 'select',
                'title'    => __( 'Shadows', 'lift-theme-options' ),
                'subtitle' => __( 'Add or remove shadows to elements with box-shadow utilities.', 'lift-theme-options' ),
                'options'  => array(
					'default'       => 'Default', 
					'shadow-none'       => 'No shadow', 
					'shadow-sm'       => 'Small shadow', 
					'shadow'       => 'Regular shadow', 
					'shadow-lg'       => 'Larger shadow', 
				),
				'default'         => 'default'
            ),


		)
	));

	
