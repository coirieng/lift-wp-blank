<?php
function wow_prefix_insert_post_ads( $content ) {
     
    $ad_code = '<!--ADS--><div class="wow-ads">'.Redux::get_option( 'wow_theme', 'wow-theme-ads-code' ).'</div><!--END ADS-->';
 
    if(Redux::get_option( 'wow_theme', 'wow-theme-ads-in-posts' ) != 1 && Redux::get_option( 'wow_theme', 'wow-theme-ads-in-posts' ) !== '1'){
        if ( is_single() && ! is_admin() ) {
            if(Redux::get_option( 'wow_theme', 'wow-theme-ads-in-posts-value' ) != 0 && Redux::get_option( 'wow_theme', 'wow-theme-ads-in-posts-value' ) !== '0'){
                if((int)Redux::get_option( 'wow_theme', 'wow-theme-ads-in-posts-value' ) != -1){
                    $setnum = (int) Redux::get_option( 'wow_theme', 'wow-theme-ads-in-posts-value' );
                    for ($i=0; $i < 12; $i++) { 
                        $content = wow_prefix_insert_after_paragraph( $ad_code, (($i+1)*$setnum), $content );
                    }
                } else {
                    $setnum = 3;
                    for ($i=0; $i < 12; $i++) { 
                        $content = wow_prefix_insert_after_paragraph( $ad_code, (($i+1)*$setnum), $content );
                    }
                }
            }
        }
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

function wow_insert_adv_post_to_lists() {
    global $wp_query;
    $ad_code = '<!--ADS--><div class="wow-ads">'.Redux::get_option( 'wow_theme', 'wow-theme-ads-code' ).'</div><!--END ADS-->';

    if(Redux::get_option( 'wow_theme', 'wow-theme-ads-in-post-lists' ) != 1 && Redux::get_option( 'wow_theme', 'wow-theme-ads-in-post-lists' ) !== '1'){
        if ( ! is_admin() ) {
            if(Redux::get_option( 'wow_theme', 'wow-theme-ads-in-posts-lists-value' ) != 0 && Redux::get_option( 'wow_theme', 'wow-theme-ads-in-posts-lists-value' ) !== '0'){
                if((int)Redux::get_option( 'wow_theme', 'wow-theme-ads-in-posts-lists-value' ) != -1){
                    $setnum = (int) Redux::get_option( 'wow_theme', 'wow-theme-ads-in-posts-lists-value' );
                    $perpage = (int)get_option( 'posts_per_page' )/$setnum;
                    for ($i=0; $i < $perpage; $i++) { 
                        if(($wp_query->current_post+1) == $setnum*($i+1)) {
                            echo $ad_code;
                        }  
                    }
                } else {
                    $setnum = 3;
                    $perpage = (int)get_option( 'posts_per_page' )/$setnum;
                    for ($i=0; $i < $perpage; $i++) { 
                        if(($wp_query->current_post+1) == $setnum*($i+1)) {
                            echo $ad_code;
                        }  
                    } 
                }
            }
        }
    }
}

add_action('the_post', 'wow_insert_adv_post_to_lists');  
add_filter( 'the_content', 'wow_prefix_insert_post_ads' );

