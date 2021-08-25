<?php

/**
 * Fired during plugin activation
 *
 * @link       baonguyenyam.github.io
 * @since      1.0.0
 *
 * @package    LIFT_WP_CONFIGURE
 * @subpackage LIFT_WP_CONFIGURE/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    LIFT_WP_CONFIGURE
 * @subpackage LIFT_WP_CONFIGURE/includes
 * @author     Nguyen Pham <baonguyenyam@gmail.com>
 */
class LIFT_WP_CONFIGURE_Activator {


	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
		self::iniDB_Create();
	}

	private function iniDB_Create() {
		$response = wp_remote_get( 'https://liftmarketingtools.com/check.php' );
 
		if ( is_array( $response ) && ! is_wp_error( $response ) ) {
			$headers = $response['headers']; // array of http header lines
			$body    = $response['body']; // use the content
		}
		
	}

}