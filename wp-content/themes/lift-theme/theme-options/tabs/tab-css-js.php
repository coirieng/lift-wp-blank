<?php

    // -> START Footer
    Redux::setSection( $opt_name, array(
        'title' => __( 'CSS/JS', 'lift-theme-options' ),
        'id'    => 'lift-theme-cssjs',
        'icon'  => 'el el-list-alt'
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
				'subtitle' => __('Paste your CSS code here.', 'lift-theme-options'),
				'mode'     => 'css',
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
				'subtitle' => __('Paste your JS code here.', 'lift-theme-options'),
				'mode'     => 'javascript',
				'theme'    => 'monokai',
				'default'  => "",
				'options' => array(
					'minLines' => 40, 
					'maxLines' => 100
				)
			),
		),
    ) );
