<?php
/**
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package LIFT Creations 
 * @subpackage Theme by Nguyen Pham
 * https://baonguyenyam.github.io/cv
 * @since 2021
 */

global $lift_theme;
$layout_value['layout_style'] = $lift_theme['lift-theme-layout-style'];
get_header();

if ( have_posts() ) {
	?>
	<header class="page-header alignwide">
		<div class="container<?= isset($layout_value['layout_style']) && $layout_value['layout_style'] === '1' ? '-fluid': ''?>">
			<h1 class="page-title">
				<?php
				printf(
					/* translators: %s: Search term. */
					esc_html__( 'Results for "%s"', 'wp-lift-theme' ),
					'<span class="page-description search-term">' . esc_html( get_search_query() ) . '</span>'
				);
				?>
			</h1>
		</div>
	</header><!-- .page-header -->

	<div class="search-result-count default-max-width">
		<div class="container<?= isset($layout_value['layout_style']) && $layout_value['layout_style'] === '1' ? '-fluid': ''?>">
			<?php
			printf(
				esc_html(
					/* translators: %d: The number of search results. */
					_n(
						'We found %d result for your search.',
						'We found %d results for your search.',
						(int) $wp_query->found_posts,
						'wp-lift-theme'
					)
				),
				(int) $wp_query->found_posts
			);
			?>
		</div>
	</div><!-- .search-result-count -->
	<?php
	// Start the Loop.
	while ( have_posts() ) {
		the_post();

		/*
		 * Include the Post-Format-specific template for the content.
		 * If you want to override this in a child theme, then include a file
		 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
		 */
		get_template_part( 'template-parts/content/content-excerpt', get_post_format() );
	} // End the loop.

	?>
	<div class="container<?= isset($layout_value['layout_style']) && $layout_value['layout_style'] === '1' ? '-fluid': ''?>">
		<?php
		// Previous/next page navigation.
		lift_the_posts_navigation();
		?>
	</div>
	<?php

	// If no content, include the "No posts found" template.
} else {
	get_template_part( 'template-parts/content/content-none' );
}

get_footer();
