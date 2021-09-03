
TODO: Banner home page 

# FRONT END 

## Layout 
themes/wp-wow-theme/template-parts

## Thumbnail 
<!-- Add size -->
<!-- Get all image size -->

wp-wow-theme/theme-config/config/post-thumbnail.php
has_post_thumbnail()
the_post_thumbnail();
the_post_thumbnail( 'your-custom-size' );
set_post_thumbnail_size( 50, 50, true ); 

## Action
add_action( 'init', 'wow_add_image_size' );
add_action( 'after_setup_theme', 'wow_get_all_image_sizes' );

## Postype & Template 
<!-- Add Thumbnail Column -->
<!-- Add Template to Edit/Add -->
wp-wow-theme/theme-config/config/admin.php

## Breadcrumb 
wp-wow-theme/theme-config/config/breadcrumb.php

## Admin Custuomize theme 
wp-wow-theme/theme-config/config/customize-tab.php

## Style for FrontEnd 
wp-wow-theme/theme-config/config/styles.php

## Script for FrontEnd 
wp-wow-theme/theme-config/config/scripts.php

## Theme menu & Widgets
wp-wow-theme/theme-config/config/setup.php

## Theme sidebar & Footer sidebar 
wp-wow-theme/theme-config/config/sidebar.php

=======================================================================
# ADMIN THEME

## GET ARGS
$args = Redux::get_args( 'wow_theme' );
$args = Redux::get_option( 'wow_theme', 'wow-theme-footer-enable' );
Redux::get_extensions( $opt_name, $key )	
Redux::get_post_meta( $opt_name, $the_post, $key, $default )	
Redux::get_extensions
Redux::get_option
Redux::get_arg
Redux::get_field

## Options 
All in one here
themes/wp-wow-theme/theme-options/options
themes/wp-wow-theme/theme-options/tabs

## Widgets 
/Users/nguyenpham/SourceCode/lift-wp-blank/wp-content/themes/wp-wow-theme/classes/class-nguyen-widget.php

## Google Fonts 
Redux v4 maybe can not work with Google Fonts

## Required Plugins 
wp-wow-theme/theme-options/required/list.php

## Dev 
wp-wow-theme/inc

## Post Fields 
themes/wp-wow-theme/theme-options/posts/post-type.php

## Index
/Users/nguyenpham/SourceCode/lift-wp-blank/wp-content/themes/wp-wow-theme/index.php

## Archive
/Users/nguyenpham/SourceCode/lift-wp-blank/wp-content/themes/wp-wow-theme/index.php
