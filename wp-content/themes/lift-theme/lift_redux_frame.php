<?php 
// https://github.com/reduxframework/redux-framework/blob/master/sample/sample-config.php
// https://devs.redux.io/guides/basics/getting-started.html
// https://github.com/reduxframework/redux-framework/blob/master/sample/barebones-config.php

require_once 'wp-content/plugins/redux-framework/ReduxCore/framework.php';
// require_once 'wp-content/plugins/redux-framework/sample/sample-config.php';

    if ( ! class_exists( 'Redux' ) ) {
        return;
    }

    $opt_name = 'lift_theme';

    $theme = wp_get_theme(); // For use with some settings. Not necessary.

    $args = array(
		'dev_mode' => false,
        'display_name'         => $theme->get( 'Name' ),
        'display_version'      => $theme->get( 'Version' ),
        'menu_title'           => esc_html__( 'LIFT Theme Options', 'lift-theme' ),
        'customizer'           => true,
    );

    Redux::setArgs( $opt_name, $args );

    Redux::setSection( $opt_name, array(
        'title'  => esc_html__( 'Basic Field', 'lift-theme' ),
        'id'     => 'basic',
        'desc'   => esc_html__( 'Basic field with no subsections.', 'lift-theme' ),
        'icon'   => 'el el-home',
        'fields' => array(
            array(
                'id'       => 'opt-text',
                'type'     => 'text',
                'title'    => esc_html__( 'Example Text', 'lift-theme' ),
                'desc'     => esc_html__( 'Example description.', 'lift-theme' ),
                'subtitle' => esc_html__( 'Example subtitle.', 'lift-theme' ),
                'hint'     => array(
                    'content' => 'This is a <b>hint</b> tool-tip for the text field.<br/><br/>Add any HTML based text you like here.',
                )
            )
        )
    ) );
