<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'A1I9dF?3ku+ro6!q~l[JYcUZ3#[75+D<5YsgR;@L>nLlx|SJtX42lvu$S3&_CZOn' );
define( 'SECURE_AUTH_KEY',  '?J6B8z;bU6jai?>EE-.rXV*U8+uNJqCgI&$M`dcYtu|j8nKY7u>t>t%^UB(EVK`]' );
define( 'LOGGED_IN_KEY',    '~{.]wTnm4Z{7X?4~=(_5A-FMs/r t&$C6Ki&;5)I5<;d 4>3q7zJMtu=GhJp(82*' );
define( 'NONCE_KEY',        'f|J,B3h/+a}-4w~Zfw)%E/fhu]v]$ED{ic=N>#5,0t>dFj(c|clB^%w+pDa)AVPn' );
define( 'AUTH_SALT',        'D!plo*L{${LOlf1O|yaIGK2LPZ)-<u,2~1zpg]fk=5b[V!w6.?.;4llwWmY`_Tp3' );
define( 'SECURE_AUTH_SALT', '4e_YrL}9kcv z~c3:o3J_Rux~Nm0/zK_72G0CYO:_Z]J&tsv-KZx`|wkpGyVi]Ob' );
define( 'LOGGED_IN_SALT',   'UPCwie<s#KK1ys04D&<upXB82$y!,gQK|9AF6BP6}zZCo&5UpmXwc@}oi-1DS{D%' );
define( 'NONCE_SALT',       '8jDKKD{)VnLSLg5xLH0WG)Yw8[^k%`gn2,|K~c<e.GR]*a#d`<3^urqkXD;OP!P<' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'demo_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
@ini_set('display_errors', 0);

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
