<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package LIFT Creations 
 * @subpackage Theme by Nguyen Pham
 * https://baonguyenyam.github.io/cv
 * @since 2021
 */

global $lift_theme;
$layout_value['layout_style'] = $lift_theme['lift_theme-lift-theme-layout-style'];
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<header class="entry-header alignwide">
		<div class="container<?= isset($layout_value['layout_style']) && $layout_value['layout_style'] === '1' ? '-fluid': ''?>">
			<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
			<?php lift_post_thumbnail(); ?>
		</div>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<div class="container<?= isset($layout_value['layout_style']) && $layout_value['layout_style'] === '1' ? '-fluid': ''?>">
			<?php
			the_content();

			wp_link_pages(
				array(
					'before'   => '<nav class="page-links" aria-label="' . esc_attr__( 'Page', 'wp-lift-theme' ) . '">',
					'after'    => '</nav>',
					/* translators: %: Page number. */
					'pagelink' => esc_html__( 'Page %', 'wp-lift-theme' ),
				)
			);
			?>
		</div>
	</div><!-- .entry-content -->

	<footer class="entry-footer default-max-width">
		<div class="container<?= isset($layout_value['layout_style']) && $layout_value['layout_style'] === '1' ? '-fluid': ''?>">
			<?php lift_entry_meta_footer(); ?>
		</div>
	</footer><!-- .entry-footer -->

	<?php if ( ! is_singular( 'attachment' ) ) : ?>
		<div class="container<?= isset($layout_value['layout_style']) && $layout_value['layout_style'] === '1' ? '-fluid': ''?>">
			<?php get_template_part( 'template-parts/post/author-bio' ); ?>
		</div>
	<?php endif; ?>

</article><!-- #post-<?php the_ID(); ?> -->
