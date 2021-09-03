<?php
  
//Insert ads after second paragraph of single post content.
 
add_filter( 'the_content', 'wow_prefix_insert_post_ads' );
 
function wow_prefix_insert_post_ads( $content ) {
     
    $ad_code = '<div class="wow-ads">'.Redux::get_option( 'wow_theme', 'wow-theme-ads-code' ).'</div>';
 
    if ( is_single() && ! is_admin() ) {
        $content = wow_prefix_insert_after_paragraph( $ad_code, 3, $content );
        $content = wow_prefix_insert_after_paragraph( $ad_code, 6, $content );
        $content = wow_prefix_insert_after_paragraph( $ad_code, 9, $content );
        $content = wow_prefix_insert_after_paragraph( $ad_code, 12, $content );
        $content = wow_prefix_insert_after_paragraph( $ad_code, 15, $content );
        $content = wow_prefix_insert_after_paragraph( $ad_code, 18, $content );
        $content = wow_prefix_insert_after_paragraph( $ad_code, 21, $content );
        $content = wow_prefix_insert_after_paragraph( $ad_code, 22, $content );
        $content = wow_prefix_insert_after_paragraph( $ad_code, 25, $content );
        $content = wow_prefix_insert_after_paragraph( $ad_code, 28, $content );
        $content = wow_prefix_insert_after_paragraph( $ad_code, 31, $content );
    }
     
    return $content;
}
  
// Parent Function that makes the magic happen
  
function wow_prefix_insert_after_paragraph( $insertion, $paragraph_id, $content ) {
    $closing_p = '</p>';
    $paragraphs = explode( $closing_p, $content );
    foreach ($paragraphs as $index => $paragraph) {
 
        if ( trim( $paragraph ) ) {
            $paragraphs[$index] .= $closing_p;
        }
 
        if ( $paragraph_id == $index + 1 ) {
            $paragraphs[$index] .= $insertion;
        }
    }
     
    return implode( '', $paragraphs );
}