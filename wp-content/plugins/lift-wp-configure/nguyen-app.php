<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://baonguyenyam.github.io/
 * @since             1.0.0
 * @package           LIFT_WP_CONFIGURE
 *
 * @wordpress-plugin
 * Plugin Name:       @LIFT Creations - LIFT WP Configure
 * Plugin URI:        https://liftcreations.com
 * Description:       LIFT WP Configure help you configure your websites without any coding knowledge required. Lightweight and using best practices for fastest load time.
 * Version:           1.0.0
 * Author:            LIFT Creations
 * Author URI:        https://baonguyenyam.github.io
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       lift-wp-configure
 * Domain Path:       /languages
 */


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'LIFT_WP_CONFIGURE_NICENAME', 'LIFT WP Configure' );
define( 'LIFT_WP_CONFIGURE_PREFIX', 'lift_wp_configure' );
define( 'LIFT_WP_CONFIGURE_VERSION', '1.0.0' );

require plugin_dir_path( __FILE__ ) . 'classes/wp_lightweight_setup.php';
require plugin_dir_path( __FILE__ ) . 'classes/wp_lightweight_disable_password_reset.php';
require plugin_dir_path( __FILE__ ) . 'classes/wp_lightweight_init.php';
require plugin_dir_path( __FILE__ ) . 'classes/wp_lightweight_cleanup.php';

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-bn-wp-activator.php
 */
function activate_lift_wp_configure() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-bn-wp-activator.php';
	LIFT_WP_CONFIGURE_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-bn-wp-deactivator.php
 */
function deactivate_lift_wp_configure() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-bn-wp-deactivator.php';
	LIFT_WP_CONFIGURE_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_lift_wp_configure' );
register_deactivation_hook( __FILE__, 'deactivate_lift_wp_configure' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-bn-wp.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_lift_wp_configure() {

	$plugin = new LIFT_WP_CONFIGURE();
	$plugin->run();

}
run_lift_wp_configure();
