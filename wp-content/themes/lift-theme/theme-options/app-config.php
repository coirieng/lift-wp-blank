<?php

use ScssPhp\ScssPhp\Compiler;

$compiler = new Compiler();

echo $compiler->compileString('
  $color: #abc;
  div { color: lighten($color, 20%); }
')->getCss();


// https://docsv3.redux.io/
// https://devs.redux.io/core-fields/

if ( ! class_exists( 'Redux' ) ) {
	return;
}
$opt_name = "lift_theme";

$liftHTML = '';

if ( file_exists( dirname( __FILE__ ) . '/info-html.html' ) ) {
	Redux_Functions::initWpFilesystem();
	
	global $wp_filesystem;
	
	$liftHTML = $wp_filesystem->get_contents( dirname( __FILE__ ) . '/info-html.html' );
}

// Background Patterns Reader
$lift_patterns_path =  'theme-options/patterns/';
$lift_patterns_url  =  'theme-options/patterns/';
$lift_patterns      = array();

if ( is_dir( $lift_patterns_path ) ) {

	if ( $lift_patterns_dir = opendir( $lift_patterns_path ) ) {
		$lift_patterns = array();

		while ( ( $lift_patterns_file = readdir( $lift_patterns_dir ) ) !== false ) {

			if ( stristr( $lift_patterns_file, '.png' ) !== false || stristr( $lift_patterns_file, '.jpg' ) !== false ) {
				$name              = explode( '.', $lift_patterns_file );
				$name              = str_replace( '.' . end( $name ), '', $lift_patterns_file );
				$lift_patterns[] = array(
					'alt' => $name,
					'img' => $lift_patterns_url . $lift_patterns_file
				);
			}
		}
	}
}

function lift_add_new_icon_font() {
    wp_register_style(
        'lift-font-bi',
        get_template_directory_uri() . '/admin/css/bootstrap-icons.css',
        array(),
        time(),
        'all'
    );  
    wp_enqueue_style( 'lift-font-bi' );
}
add_action( 'redux/page/' . $opt_name . '/enqueue', 'lift_add_new_icon_font' );

require_once 'options/options.php';
require_once 'options/helps.php';
require_once 'tabs/tab-css-js.php';
require_once 'tabs/tab-layout.php';
require_once 'tabs/tab-typography.php';
require_once 'tabs/tab-header.php';
require_once 'tabs/tab-footer.php';
require_once 'tabs/tab-social.php';
// require_once 'tabs/tab-full.php';
require_once 'options/init.php';
