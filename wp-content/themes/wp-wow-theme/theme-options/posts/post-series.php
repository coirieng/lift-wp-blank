<?php
function wow_register_taxonomy_series() {
    $labels = array(
        'name'              => _x( 'Seriess', 'taxonomy general name' ),
        'singular_name'     => _x( 'Series', 'taxonomy singular name' ),
        'search_items'      => __( 'Search Seriess' ),
        'all_items'         => __( 'All Seriess' ),
        'parent_item'       => __( 'Parent Series' ),
        'parent_item_colon' => __( 'Parent Series:' ),
        'edit_item'         => __( 'Edit Series' ),
        'update_item'       => __( 'Update Series' ),
        'add_new_item'      => __( 'Add New Series' ),
        'new_item_name'     => __( 'New Series Name' ),
        'menu_name'         => __( 'Series' ),
    );
    $args   = array(
        'hierarchical'      => true, // make it hierarchical (like categories)
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => [ 'slug' => 'series' ],
    );
    register_taxonomy( 'series', [ 'post',  'page' ], $args );
}
add_action( 'init', 'wow_register_taxonomy_series' );
