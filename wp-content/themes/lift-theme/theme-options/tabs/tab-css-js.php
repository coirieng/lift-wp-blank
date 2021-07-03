<?php

    // -> START Footer
    Redux::setSection( $opt_name, array(
        'title' => __( 'CSS/JS', 'lift-theme-options' ),
        'id'    => 'lift-theme-cssjs',
        'icon'  => 'bi bi-braces'
    ) );

	Redux::setSection( $opt_name, array(
        'title'      => __( 'CSS', 'lift-theme-options' ),
        'id'         => 'lift-theme-cssjs-css',
        'subsection' => true,
		'fields'     => array(
			array(
				'id'       => 'lift-theme-cssjs-css-code',
                'type'     => 'ace_editor',
				'title'    => __('CSS Code', 'lift-theme-options'),
				'subtitle'		=> __( 'If you have any custom CSS you would like added to the site, please enter it here.', 'lift-theme-options' ),
				'mode'     => 'css',
				'class' => 'lift-theme-admin-cssjs',
				'theme'    => 'monokai',
				'default'  => "",
				'options' => array(
					'minLines' => 40, 
					'maxLines' => 100
					)
				),
			),
			) );
	Redux::setSection( $opt_name, array(
		'title'      => __( 'SCSS', 'lift-theme-options' ),
		'id'         => 'lift-theme-cssjs-scss',
        'subsection' => true,
		'fields'     => array(
			array(
				'id'       => 'lift-theme-cssjs-scss-code',
                'type'     => 'ace_editor',
				'title'    => __('SCSS Code', 'lift-theme-options'),
				'subtitle' => __('Paste your SCSS code here.', 'lift-theme-options'),
				'mode'     => 'scss',
				'class' => 'lift-theme-admin-cssjs',
				'theme'    => 'monokai',
				'default'  => "",
				'options' => array(
					'minLines' => 40, 
					'maxLines' => 100
				)
			),
		),
    ) );
	Redux::setSection( $opt_name, array(
        'title'      => __( 'JavaScript/Babel', 'lift-theme-options' ),
        'id'         => 'lift-theme-cssjs-js',
        'subsection' => true,
		'fields'     => array(
			array(
				'id'       => 'lift-theme-cssjs-js-code',
                'type'     => 'ace_editor',
				'title'    => __('JS Code', 'lift-theme-options'),
				'subtitle'		=> __( 'Please enter in any custom javascript you wish to add to the head of your pages. Requires opening and closing script tags.', 'lift-theme-options' ),
				'mode'     => 'javascript',
				'class' => 'lift-theme-admin-cssjs',
				'theme'    => 'monokai',
				'default'  => "",
				'options' => array(
					'minLines' => 40, 
					'maxLines' => 100
				)
			),
		),
    ) );
