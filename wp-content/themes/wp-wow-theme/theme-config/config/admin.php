<?php
// INI POST TYPE
// This one call all post and add more post type or remove some post type 
$post_types = get_post_types( Array( 'public' => true ) );
if( isset($post_types['attachment']) ){ unset( $post_types['attachment'] ); }
$post_types['wow_blocks'] = 'wow_blocks';

// Init Template 
function wow_admin_init_template($post_templates){
    $post_templates['wow_theme_template'] = __('WOW Page Builder Template', 'wow-pagebuilder');
    return $post_templates;
}

// Add img thumbnail to post/page/custom post type
function wow_show_thumbnail_column($wow_columns, $wow_id){
    switch($wow_columns){
        case 'wow_admin_thumb':
        if( function_exists('the_post_thumbnail') )
        echo the_post_thumbnail( 'thumbnail' );
        break;
    }
}
function wow_add_thumbnail_column($wow_columns){
    $wow_columns['wow_admin_thumb'] = __('Image');
    return $wow_columns;
}
function wow_admin_column_order($columns) {
    $n_columns = array();
    $move = 'wow_admin_thumb'; // which column to move
    $before = 'title'; // move before this column

    foreach($columns as $key => $value) {
        if ($key==$before){
            $n_columns[$move] = $move;
        }
        $n_columns[$key] = $value;
        }
    return $n_columns;
}

if( $post_types ){
    foreach( $post_types as $post_type ){ 
        if ( class_exists('WOW_General')){
            add_filter( "theme_{$post_type}_templates", 'wow_admin_init_template' );
        }
        // Add the posts and pages columns filter. Same function for both.
        add_filter("manage_{$post_type}s_columns", "wow_add_thumbnail_column", 2);
        add_filter("manage_{$post_type}s_columns", "wow_add_thumbnail_column", 2);

        // Add featured image thumbnail to the WP Admin table.
        add_action("manage_{$post_type}s_custom_column", "wow_show_thumbnail_column", 5, 2);
        add_action("manage_{$post_type}s_custom_column", "wow_show_thumbnail_column", 5, 2);

        // Move the new column at the first place.
        add_filter("manage_{$post_type}s_columns", "wow_admin_column_order");
        add_filter("manage_{$post_type}s_columns", "wow_admin_column_order");

    }
}