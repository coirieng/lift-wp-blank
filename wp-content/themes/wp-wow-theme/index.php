<?php
/**
* @package WOW WordPress 
* @subpackage Theme by Nguyen Pham
* https://baonguyenyam.github.io
* @since 2021
*/

get_header();

global $wow_theme;
$layout_style = $wow_theme['wow-theme-layout-style'];
$archive_sidebar = $wow_theme['wow-theme-blog-style-archive-sidebar'];
$archive_sidebar_position = $wow_theme['wow-theme-blog-style-archive-sidebar-position'];
$archive_sidebar_content_columns = isset($wow_theme['wow-theme-blog-style-archive-content-columns']) ? $wow_theme['wow-theme-blog-style-archive-content-columns'] : 'col-xl-8 col-xxl-9';
$archive_sidebar_columns = isset($wow_theme['wow-theme-blog-style-archive-sidebar-columns']) ? $wow_theme['wow-theme-blog-style-archive-sidebar-columns'] : 'col-xl-4 col-xxl-3';

if ( have_posts() ) {

?>
<section class="wow-category-archive" data-layout="index">
    <div class="entry-content archive-entry-content">
        <div class="content-wrapper">
            <div class="container<?= isset($layout_style) && $layout_style === '1' ? '-fluid': ''?>">
                <div class="row">
                    <div
                        class="blog-content <?=isset($archive_sidebar) && $archive_sidebar ==='1' ? 'col-12' : $archive_sidebar_content_columns ?><?= isset($archive_sidebar_position) && $archive_sidebar_position === '1' ? ' order-xl-2': ' order-xl-1'?>">
                        <?php 
                            while ( have_posts() ) {
                                the_post();
                                get_template_part( 'template-parts/content/content', 'excerpt' ); 
                            }
                            // Previous/next page navigation.
                            wow_the_posts_navigation();
                        ?>
                    </div>
                    <?php if(!isset($archive_sidebar) || $archive_sidebar === '0' || $archive_sidebar == 0){?>
                    <div
                        class="sidebar-content <?=$archive_sidebar_columns?><?= isset($archive_sidebar_position) && $archive_sidebar_position === '1' ? ' order-xl-1': ' order-xl-2'?>">
                        <?php get_template_part( 'sidebar' );?>
                    </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div><!-- .entry-content -->
</section>

<?php

} else {

	// If no content, include the "No posts found" template.
	get_template_part( 'template-parts/content/content-none' );

}

get_footer();