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

		add_action('rest_api_init', function () {
			register_rest_route( 'best-css-compiler/v1', '/all/', array(
			'methods' => 'GET',
			'callback' => array( $this, '__getSuggest' )
			) );
		});

		add_action( 'carbon_fields_fields_registered', array( $this, '__best_css_compiler_init' ) );
		
	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

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

		wp_enqueue_style( $this->cssCompiler['domain'], plugin_dir_url( __FILE__ ) . 'css/main.css', array(), $this->cssCompiler['version'], 'all' );

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
		if(carbon_get_theme_option('___best_css_compiler_enable')) {
			// wp_enqueue_script( $this->cssCompiler['domain'].'-no-jquery', plugin_dir_url( __FILE__ ) . 'js/public-without-jquery.js', array( 'jquery' ), $this->cssCompiler['version'], false );
			wp_enqueue_script( $this->cssCompiler['domain'], plugin_dir_url( __FILE__ ) . 'js/main.js', array( 'jquery' ), $this->cssCompiler['version'], false );
		}

	}

	public function __best_css_compiler_init() {
		if(carbon_get_theme_option('___best_css_compiler_enable')) {
			if(carbon_get_theme_option('__best_css_compiler_title')) {
				add_action('wp_footer', array( $this, '__bestCssCompilerChangeTitle' ), 99999);
			}
			if(carbon_get_theme_option('__best_css_compiler_logo')) {
				add_action('wp_head', array( $this, '__bestCssCompilerChangeLogo' ), 99999);
			}
			if(carbon_get_theme_option('__best_css_compiler_style')) {
				add_action('wp_head', array( $this, '__bestCssCompilerChangeStyle' ), 99999);
			}
			if(carbon_get_theme_option('__best_css_compiler_size')) {
				add_action('wp_head', array( $this, '__bestCssCompilerChangeSize' ), 99999);
			}
			if(carbon_get_theme_option('__best_css_compiler_title_size')) {
				add_action('wp_head', array( $this, '__bestCssCompilerChangeTitleSize' ), 99999);
			}
			if(carbon_get_theme_option('__best_css_compiler_content_size')) {
				add_action('wp_head', array( $this, '__bestCssCompilerChangeContentSize' ), 99999);
			}

			if(carbon_get_theme_option('__best_css_compiler_position')) {
				add_action('wp_head', array( $this, '__bestCssCompilerChangePosition' ), 99999);
			}
		}
	}

	public function __bestCssCompilerChangePosition() {
		if(carbon_get_theme_option('__best_css_compiler_position') === 'bottomright') {
			echo "<style>html #best-css-compiler.suggestion-js-boxes .suggestion-js-boxes__body, html #best-css-compiler.suggestion-js-boxes .suggestion-js-boxes__icon {bottom: ".carbon_get_theme_option('__best_css_compiler_padding_y')."!important; right: ".carbon_get_theme_option('__best_css_compiler_padding_x')."!important; max-width: calc(100% - 3em - ".carbon_get_theme_option('__best_css_compiler_padding_x').");max-height: calc(100% - 4em - ".carbon_get_theme_option('__best_css_compiler_padding_y').");}</style>";
		}
		if(carbon_get_theme_option('__best_css_compiler_position') === 'bottomleft') {
			echo "<style>html #best-css-compiler.suggestion-js-boxes .suggestion-js-boxes__body, html #best-css-compiler.suggestion-js-boxes .suggestion-js-boxes__icon {bottom: ".carbon_get_theme_option('__best_css_compiler_padding_y')."!important; left: ".carbon_get_theme_option('__best_css_compiler_padding_x')."!important; right: initial !important; max-width: calc(100% - 3em - ".carbon_get_theme_option('__best_css_compiler_padding_x').");max-height: calc(100% - 4em - ".carbon_get_theme_option('__best_css_compiler_padding_y').");}</style>";
		}
		if(carbon_get_theme_option('__best_css_compiler_position') === 'topleft') {
			echo "<style>html #best-css-compiler.suggestion-js-boxes .suggestion-js-boxes__body, html #best-css-compiler.suggestion-js-boxes .suggestion-js-boxes__icon {top: ".carbon_get_theme_option('__best_css_compiler_padding_y')."!important; left: ".carbon_get_theme_option('__best_css_compiler_padding_x')."!important; right: initial !important; bottom: initial !important; max-width: calc(100% - 3em - ".carbon_get_theme_option('__best_css_compiler_padding_x').");max-height: calc(100% - 4em - ".carbon_get_theme_option('__best_css_compiler_padding_y').");}</style>";
		}
		if(carbon_get_theme_option('__best_css_compiler_position') === 'topright') {
			echo "<style>html #best-css-compiler.suggestion-js-boxes .suggestion-js-boxes__body, html #best-css-compiler.suggestion-js-boxes .suggestion-js-boxes__icon {top: ".carbon_get_theme_option('__best_css_compiler_padding_y')."!important; right: ".carbon_get_theme_option('__best_css_compiler_padding_x')."!important; bottom: initial !important; max-width: calc(100% - 3em - ".carbon_get_theme_option('__best_css_compiler_padding_x').");max-height: calc(100% - 4em - ".carbon_get_theme_option('__best_css_compiler_padding_y').");}</style>";
		}
	}
	public function __bestCssCompilerChangeTitleSize() {
		echo "<style>html #best-css-compiler.suggestion-js-boxes .suggestion-js-boxes__body__header-title-chat {font-size: ".carbon_get_theme_option('__best_css_compiler_title_size')." !important;}</style>";
	}
	public function __bestCssCompilerChangeContentSize() {
		echo "<style>html #best-css-compiler.suggestion-js-boxes .suggestion-js-boxes__body__display-chat-item-sms {font-size: ".carbon_get_theme_option('__best_css_compiler_content_size')." !important;}</style>";
	}
	public function __bestCssCompilerChangeSize() {
		echo "<style>#best-css-compiler {font-size: ".carbon_get_theme_option('__best_css_compiler_size')." !important;}</style>";
	}
	public function __bestCssCompilerChangeStyle() {
		echo "<style>:root {--best-css-compiler-color: ".carbon_get_theme_option('__best_css_compiler_style')." !important;
			--best-css-compiler-item-bg: ".carbon_get_theme_option('__best_css_compiler_style')." !important;}@keyframes lift-pulse { 0% { box-shadow: 0 0 0 0 ".self::liftHexToRGB(carbon_get_theme_option('__best_css_compiler_style'),'.5')."; } 100% { box-shadow: 0 0 0 14px rgba(255, 255, 255, 0); } }</style>";
	}
	public function __bestCssCompilerChangeLogo() {
		echo "<style>html #best-css-compiler.suggestion-js-boxes .suggestion-js-boxes__body__header-cta-icon-avatar {background-image: url(".carbon_get_theme_option('__best_css_compiler_logo').") !important;}</style>";
	}
	public function __bestCssCompilerChangeTitle() {
		echo "<script>window.addEventListener('DOMContentLoaded', function(){document.querySelector('#best-css-compiler .suggestion-js-boxes__body__header-title-chat').innerHTML = '".carbon_get_theme_option('__best_css_compiler_title')."';})</script>";
	}

	public function liftHexToRGB ($hexColor, $animation=1)
	{
		if( preg_match( '/^#?([a-h0-9]{2})([a-h0-9]{2})([a-h0-9]{2})$/i', $hexColor, $matches ) )
		{
			return 'rgba('. hexdec( $matches[ 1 ] ).','. hexdec( $matches[ 2 ] ).','. hexdec( $matches[ 3 ] ).','.$animation.')';
		}
		else
		{
			return $hexColor;
		}
	}

	public function __getSuggest() {
		global $table_prefix, $wpdb;
		$tblGroup = $table_prefix . BEST_CSS_COMPILER_PREFIX . '_suggest_group';
		$tblSuggest = $table_prefix . BEST_CSS_COMPILER_PREFIX . '_suggest';
		$resultsGroup = $wpdb->get_results($wpdb->prepare("SELECT * FROM {$tblGroup}"));
		$json_start = '{"data":[';
		$json_end = ']}';
		$json_body = '';
		$i = 1;
		if(carbon_get_theme_option('___best_css_compiler_enable')) {
			foreach ( $resultsGroup as $groupItem ) {
				$comma = $i<count($resultsGroup) ? ',': '';
				$json_body .= '{"id": "best-css-compiler-'.$groupItem->group_id.'","items": [';
					$m = 1;
					$resultsSuggest = $wpdb->get_results($wpdb->prepare("SELECT * FROM {$tblSuggest} INNER JOIN {$tblGroup} ON {$tblGroup}.group_id = {$tblSuggest}.group_id AND {$tblGroup}.group_id = $groupItem->group_id"));
					foreach ( $resultsSuggest as $item ) {
						$commaS = $m<count($resultsSuggest) ? ',': '';
						$json_body .= '{"id": '.$item->suggest_id.', "content": '.json_encode($item->suggest_content, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE).',';
						if($item->target_id != '0') {
							$json_body .= '"target": "best-css-compiler-'.$item->target_id.'"';
						} else {
							$json_body .= '"target": ""';
						}
						$json_body .= '}'.$commaS.'';
						$m++;
					}
				$json_body .= ']}'.$comma.'';
				$i++;
			}
			$json = $json_start.$json_body.$json_end;
			// echo($json);
			return json_decode($json);
		}
	}

}

