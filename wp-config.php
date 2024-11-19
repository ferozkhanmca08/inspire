<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'inspire' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'L[Efgl Aqz(!uf|),!WpFDs[T@6OY~(9kywLJ6WH,*#zXod!l|NgZ$zC_n.6Kn R' );
define( 'SECURE_AUTH_KEY',  'Iq//Ea8_-+l(?U^4f|A4t0r6J3:v#BB~Fw%(K9u[b6/}=YDn*i}vS-/.%_ *//ny' );
define( 'LOGGED_IN_KEY',    'M 1Ar%45rM)-W =1O6ddVN1X9 tgrMBj#Ma;1Q^ZU<SkCoVKdpX=[})d;d8X5K^D' );
define( 'NONCE_KEY',        'bjw/mQa%M@R1cJHTLLygQNh1]Pbkof*7N? {s^b`vETrX?XCxZUu9DU2Z#go >M+' );
define( 'AUTH_SALT',        'Nni* 8,agMJ>FESjA=9p/>>wqrXui]WZ<n5+nLo-TKNwj(c}o3@K[9o9iJMoMn$1' );
define( 'SECURE_AUTH_SALT', 'FuQMrEppJxe8MQ:<xIB $HqXG/Crofl/~t?)HwPKWD[*njnvYT(1*Xpb<wLsqqcE' );
define( 'LOGGED_IN_SALT',   'O/4e0xP2[B:}O:@$r9yI47P9^fXXUD/{6^<%6,Q5yDH*l]$6MLz9QO6YRXX_4CG4' );
define( 'NONCE_SALT',       '}qzEnK9x}G%h9]Ac}|:q-4@%#AwD0>~^Z:&$_pVE&Z<?,G}p->dGH|`A+XOM`!Vs' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
