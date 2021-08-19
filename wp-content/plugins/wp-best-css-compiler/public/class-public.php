<?php
/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://github.com/wp-best-css-compiler
 * @since      1.0.0
 *
 * @package    Best_Css_Compiler
 * @subpackage Best_Css_Compiler/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Best_Css_Compiler
 * @subpackage Best_Css_Compiler/public
 * @author     Nguyen Pham <baonguyenyam@gmail.com>
 */

class Best_Css_Compiler_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $cssCompiler    The ID of this plugin.
	 */
	private $cssCompiler;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $cssCompiler       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $cssCompiler ) {

		$this->cssCompiler = $cssCompiler;

		add_action( 'carbon_fields_fields_registered', array( $this, '__best_css_compiler_init' ) );
		
	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		global $wp_filesystem;

		if( empty( $wp_filesystem ) ) {
			require_once( ABSPATH .'/wp-admin/includes/file.php' );
			WP_Filesystem();
		}

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Best_Css_Compiler_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Best_Css_Compiler_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->cssCompiler['domain'], $wp_filesystem->wp_content_dir() . 'complier/main-concat.css', array(), $this->cssCompiler['version'], 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Best_Css_Compiler_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Best_Css_Compiler_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		wp_enqueue_script( $this->cssCompiler['domain'], plugin_dir_url( __FILE__ ) . 'js/main.js', array( 'jquery' ), $this->cssCompiler['version'], false );

	}

	public function __best_css_compiler_init() {
		if(carbon_get_theme_option('___best_css_compiler_concat')) {
			
			if(carbon_get_theme_option('__best_css_compiler_name')) {
				add_action('wp_head', array( $this, '__bestCssCompilerChangeLogo' ), 99999);
			}
			if(carbon_get_theme_option('__best_css_compiler_position')) {
				add_action('wp_head', array( $this, '__bestCssCompilerChangeLogo' ), 99999);
			}
			
		}
	}

	public function __bestCssCompilerChangeLogo() {
		echo "<style>html #best-css-compiler.suggestion-js-boxes .suggestion-js-boxes__body__header-cta-icon-avatar {background-image: url(".carbon_get_theme_option('__best_css_compiler_logo').") !important;}</style>";
	}

}

