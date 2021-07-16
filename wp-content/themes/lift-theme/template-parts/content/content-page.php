<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package LIFT Creations 
 * @subpackage Theme by Nguyen Pham
 * https://baonguyenyam.github.io/cv
 * @since 2021
 */

global $lift_theme;
$layout_style = $lift_theme['lift-theme-layout-style'];
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

    <?php if ( ! is_front_page() ) : ?>
    <header class="entry-header alignwide">
        <div class="<?= isset($layout_style) && $layout_style === '1' ? '-fluid': ''?>">
            <?php get_template_part( 'template-parts/header/entry-header' ); ?>
            <?php lift_post_thumbnail(); ?>
        </div>
    </header><!-- .entry-header -->
    <?php elseif ( has_post_thumbnail() ) : ?>
    <header class="entry-header alignwide">

        <div class="container<?= isset($layout_style) && $layout_style === '1' ? '-fluid': ''?>">
            <?php lift_post_thumbnail(); ?>
        </div>
    </header><!-- .entry-header -->
    <?php endif; ?>

    <div class="entry-content">
        <div class="container<?= isset($layout_style) && $layout_style === '1' ? '-fluid': ''?>">
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

    <?php if ( get_edit_post_link() ) : ?>
    <footer class="entry-footer default-max-width">
        <div class="container<?= isset($layout_style) && $layout_style === '1' ? '-fluid': ''?>">
            <?php
				edit_post_link(
					sprintf(
						/* translators: %s: Name of current post. Only visible to screen readers. */
						esc_html__( 'Edit %s', 'wp-lift-theme' ),
						'<span class="screen-reader-text">' . get_the_title() . '</span>'
					),
					'<span class="edit-link">',
					'</span>'
				);
				?>
        </div>
    </footer><!-- .entry-footer -->
    <?php endif; ?>
</article><!-- #post-<?php the_ID(); ?> -->