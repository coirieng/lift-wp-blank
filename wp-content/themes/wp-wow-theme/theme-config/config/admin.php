<?php
function wow__posts_thumb_columns( $columns ) {
    $post_new_columns = array(
       'post_thumbs' => esc_html__( 'Thumbnails', 'text_domain' ),
    );
    return array_merge( $columns, $post_new_columns );
}

function wow__posts_custom_columns( $column_name, $id ) {
   if ( 'post_thumbs' === $column_name ) {
       the_post_thumbnail( 'thumbnail' );
   }
}

// TODO: in this on 
// $args = array(
//     'public'   => true,
//  );
   
// $post_types = get_post_types($args);
// var_dump($post_types);
// foreach ( $post_types  as $item ) {
//     add_filter( 'manage_'.$item.'s_columns', 'wow__posts_thumb_columns', 5 );
//     add_action( 'manage_'.$item.'s_custom_column', 'wow__posts_custom_columns', 5, 2 );
// }


