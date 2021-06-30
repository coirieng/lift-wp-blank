<?php
/**
 * Displays the footer widget area.
 *
 * @package LIFT Creations 
 * @subpackage Theme by Nguyen Pham
 * @since 2021
 */

if ( is_active_sidebar( 'sidebar-1' ) ) : ?>

	<aside class="widget-area">
		<?php dynamic_sidebar( 'sidebar-1' ); ?>
	</aside><!-- .widget-area -->

<?php endif; ?>
