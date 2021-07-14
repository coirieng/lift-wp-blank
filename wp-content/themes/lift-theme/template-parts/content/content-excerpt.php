<?php
/**
 * Template part for displaying post archives and search results
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

	<?php get_template_part( 'template-parts/header/excerpt-header', get_post_format() ); ?>

	<div class="entry-content">
		<div class="container<?= isset($layout_value['layout_style']) && $layout_value['layout_style'] === '1' ? '-fluid': ''?>">
			<?php get_template_part( 'template-parts/excerpt/excerpt', get_post_format() ); ?>
		</div>
	</div><!-- .entry-content -->

	<footer class="entry-footer default-max-width">
		<div class="container<?= isset($layout_value['layout_style']) && $layout_value['layout_style'] === '1' ? '-fluid': ''?>">
			<?php lift_entry_meta_footer(); ?>
		</div>
	</footer><!-- .entry-footer -->
</article><!-- #post-${ID} -->
