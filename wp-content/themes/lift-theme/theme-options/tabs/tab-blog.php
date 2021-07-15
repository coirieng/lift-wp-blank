<?php
    /**
* @package LIFT Creations 
* @subpackage Theme by Nguyen Pham
* https://baonguyenyam.github.io/cv
* @since 2021
*/

// -> START layout
    Redux::setSection( $opt_name, array(
        'title' => __( 'Posts/Blogs', 'lift-theme-options' ),
        'icon'  => 'bi bi-stickies',
        'id'         => 'lift-theme-blog',
	));
	Redux::setSection( $opt_name, array(
		'title'      => __( 'Styling', 'lift-theme-options' ),
		'id'         => 'lift-theme-blog-style',
        'subsection' => true,
		'fields'     => array(
			array(
				'id'       => 'lift-theme-blog-style-sidebar',
                'type'     => 'switch',
                'title'    => __( 'Hide Sidebar on Single Post', 'lift-theme-options' ),
                'subtitle' => __( 'Using this will remove the sidebar from appearing on your single post page.', 'lift-theme-options' ),
                'default'  => 0,
                'on'       => 'On',
                'off'      => 'Off',
            ),			
            array(
				'id'       => 'lift-theme-blog-style-content-columns',
				'type'     => 'text',
				'required' => array( 'lift-theme-blog-style-sidebar', '=', '0' ),
				'title'    => __( 'Content Columns', 'lift-theme-options' ),
				'default'  => 'col-xl-8 col-xxl-9'
			),
            array(
				'id'       => 'lift-theme-blog-style-sidebar-columns',
				'type'     => 'text',
				'required' => array( 'lift-theme-blog-style-sidebar', '=', '0' ),
				'title'    => __( 'Sidebar Columns', 'lift-theme-options' ),
				'default'  => 'col-xl-4 col-xxl-3'
			),
            array(
				'id'       => 'lift-theme-blog-style-sidebar-position',
				'required' => array( 'lift-theme-blog-style-sidebar', '=', '0' ),
                'type'     => 'switch',
                'title'    => __( 'Left/Right', 'lift-theme-options' ),
                'default'  => 0,
                'on'       => 'Left',
                'off'      => 'Right',
            ),	
            array(
				'id'       => 'lift-theme-blog-style-content-thumbnail',
                'type'     => 'switch',
                'title'    => __( 'Hide Post Thumbnail', 'lift-theme-options' ),
                'subtitle' => __( 'Using this will remove the post thumbnail on your single post page.', 'lift-theme-options' ),
                'default'  => 0,
                'on'       => 'On',
                'off'      => 'Off',
            ),			
            array(
				'id'       => 'lift-theme-blog-style-content-nextprev',
                'type'     => 'switch',
                'title'    => __( 'Hide Post Navigation', 'lift-theme-options' ),
                'subtitle' => __( 'Using this will remove the next/prev button on your single post page.', 'lift-theme-options' ),
                'default'  => 0,
                'on'       => 'On',
                'off'      => 'Off',
            ),			
		),
    ) );
