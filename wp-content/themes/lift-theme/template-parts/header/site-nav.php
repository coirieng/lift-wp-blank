<?php
/**
 * Displays the site navigation.
 *
 * @package LIFT Creations 
 * @subpackage Theme by Nguyen Pham
 * https://baonguyenyam.github.io/cv
 * @since 2021
 */

?>

<?php if ( has_nav_menu( 'primary' ) ) : ?>
	  <?php
		wp_nav_menu(
			array(
				'theme_location'  => 'primary',
				'container'  => 'nav',
				'container_id'  => 'site-navigation',
				'container_class' => 'primary-menu-container collapse navbar-collapse',
				'container_aria_label' => __( 'Primary menu', 'wp-lift-theme'),
				'menu_class'      => 'primary-navigation menu-wrapper navbar-nav me-auto mb-2 mb-md-0',
				'items_wrap'      => '<ul id="primary-menu-list" class="%2$s">%3$s</ul>',
				'fallback_cb'     => false,
			)
		);
		?>
<?php endif; ?>



