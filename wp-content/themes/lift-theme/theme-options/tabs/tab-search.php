<?php
    /**
* @package LIFT Creations 
* @subpackage Theme by Nguyen Pham
* https://baonguyenyam.github.io/cv
* @since 2021
*/

// -> START layout
    Redux::setSection( $opt_name, array(
        'title' => __( 'Search Box', 'lift-theme-options' ),
        'icon'  => 'bi bi-search',
        'id'         => 'lift-theme-search',
	));
	
	
	Redux::setSection( $opt_name, array(
		'title' => __( 'Layout', 'lift-theme-options' ),
        'id'         => 'lift-theme-search-layout',
        'subsection' => true,
		'fields'     => array(
			array(
				'id'       => 'lift-theme-search-layout-label',
                'type'     => 'switch',
                'title'    => __( 'Display Label', 'lift-theme-options' ),
                'default'  => 0,
                'on'       => 'On',
                'off'      => 'Off',
            ),
			array(
				'id'       => 'lift-theme-search-layout-icon',
                'type'     => 'switch',
                'title'    => __( 'Display Icon', 'lift-theme-options' ),
                'default'  => 1,
                'on'       => 'On',
                'off'      => 'Off',
            ),
			array(
				'id'       => 'lift-theme-search-layout-text',
                'type'     => 'switch',
                'title'    => __( 'Display Label', 'lift-theme-options' ),
                'default'  => 0,
                'on'       => 'On',
                'off'      => 'Off',
            ),
			array(
				'id'       => 'lift-theme-search-layout-placeholder',
                'type'     => 'switch',
                'title'    => __( 'Display Placeholder', 'lift-theme-options' ),
                'default'  => 0,
                'on'       => 'On',
                'off'      => 'Off',
            ),
			array(
				'id'       => 'lift-theme-search-layout-text-value',
                'type'     => 'text',
                'title'    => __( 'Label Text', 'lift-theme-options' ),
                'default'  => 'Search:',
            ),
			array(
				'id'       => 'lift-theme-search-layout-placeholder-value',
                'type'     => 'text',
                'title'    => __( 'Placeholder Text', 'lift-theme-options' ),
                'default'  => 'e.g: lift',
            ),
		),
    ) );
