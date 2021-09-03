<?php
    /**
* @package WOW WordPress 
* @subpackage Theme by Nguyen Pham
* https://baonguyenyam.github.io
* @since 2021
*/

// -> START layout
    Redux::setSection( $opt_name, array(
        'title' => __( 'Adsettings', 'wow-theme-options' ),
        'icon'  => 'bi bi-graph-up',
        'id'         => 'wow-theme-blog',
	));
	Redux::setSection( $opt_name, array(
        'title'      => __( 'Ads Code', 'wow-theme-options' ),
        'id'         => 'wow-theme-ads',
        'subsection' => true,
		'desc'		=> __( 'Please enter in any custom code you wish to add to the head of your pages. Requires opening and closing script tags.', 'wow-theme-options' ),
		'fields'     => array(
			array(
				'id'       => 'wow-theme-ads-code',
                'type'     => 'ace_editor',
				'mode'     => 'html',
				'class' => 'wow-theme-admin-cssjs',
				'theme'    => 'monokai',
				'options' => array(
					'minLines' => 40, 
					'maxLines' => 100
				)
			),
		),
    ) );
    Redux::setSection( $opt_name, array(
        'title'      => __( 'Ads Options', 'wow-theme-options' ),
        'id'         => 'wow-theme-ads-options',
        'subsection' => true,
		'fields'     => array(
            array(
                'id'       => 'wow-theme-ads-in-posts',
                'type'     => 'switch',
                'title'    => esc_html__( 'Disable in posts', 'wow-theme-options' ),
                'default'  => 0,
            ),
            array(
                'id'       => 'wow-theme-ads-in-posts-value',
                'required' => array( 'wow-theme-ads-in-posts', '=', '0' ),
                'title'    => __( 'Ads show each paragraph', 'wow-theme-options' ),
				'desc'       => __( 'Set -1 for default ads', 'wow-theme-options' ),
				'type'          => 'slider',
				'min'           => -1,
				'step'          => 1,
				'default'       => 3,
				'max'           => 50,
				'display_value' => 'text',
				'default'  => '-1'
			),
            array(
                'id'       => 'wow-theme-ads-in-post-lists',
                'type'     => 'switch',
                'title'    => esc_html__( 'Disable in lists', 'wow-theme-options' ),
                'default'  => 0,
            ),
            array(
                'id'       => 'wow-theme-ads-in-posts-lists-value',
                'required' => array( 'wow-theme-ads-in-post-lists', '=', '0' ),
                'title'    => __( 'Ads show each article', 'wow-theme-options' ),
				'desc'       => __( 'Set -1 for default ads', 'wow-theme-options' ),
				'type'          => 'slider',
				'min'           => -1,
				'step'          => 1,
				'default'       => 3,
				'max'           => 12,
				'display_value' => 'text',
				'default'  => '-1'
			),
		),
    ) );


    
