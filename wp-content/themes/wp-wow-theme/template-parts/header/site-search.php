<?php
/**
 * Displays the site navigation.
 *
 * @package WOW WordPress 
 * @subpackage Theme by Nguyen Pham
 * https://baonguyenyam.github.io/cv
 * @since 2021
 */

?>

<?php 

global $wow_theme;
$header_search = $wow_theme['lift-theme-header-search'];

?>

<?php if(isset($header_search) && $header_search === '1') { ?>
	<?php get_template_part( 'template-parts/header/searchform-header' ); ?>
<?php  } ?>