<?php
// Add image size for post thumbnail
function wow_add_image_size() {
    add_image_size( 'wow-big', 1200, 680, true );
    add_image_size( 'wow-large', 960, 500, true );
    add_image_size( 'wow-medium', 720, 440, true );
    add_image_size( 'wow-small', 600, 360, true );
    add_image_size( 'wow-mini', 400, 260, true );
    add_image_size( 'wow-square', 200, 200, true );
}

function wow_get_all_image_sizes() {
    global $_wp_additional_image_sizes;

    $thumbnail_sizes = array();

    foreach ( get_intermediate_image_sizes() as $size ) {
        $thumbnail_sizes[ $size ]['label'] = $size;
        if ( in_array( $size, array( 'thumbnail', 'medium', 'medium_large', 'large' ) ) ) {
            $thumbnail_sizes[ $size ]['width']  = (int) get_option( $size . '_size_w' );
            $thumbnail_sizes[ $size ]['height'] = (int) get_option( $size . '_size_h' );
            $thumbnail_sizes[ $size ]['crop']   = ( 'thumbnail' == $size ) ? (bool) get_option( 'thumbnail_crop' ) : false;
        } elseif ( ! empty( $_wp_additional_image_sizes ) && ! empty( $_wp_additional_image_sizes[ $size ] ) ) {
            $thumbnail_sizes[ $size ]['width']  = (int) $_wp_additional_image_sizes[ $size ]['width'];
            $thumbnail_sizes[ $size ]['height'] = (int) $_wp_additional_image_sizes[ $size ]['height'];
            $thumbnail_sizes[ $size ]['crop']   = (bool) $_wp_additional_image_sizes[ $size ]['crop'];
        }
    }
    return $thumbnail_sizes;
}
