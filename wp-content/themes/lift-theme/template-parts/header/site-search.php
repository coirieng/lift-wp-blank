<?php
/**
 * Displays the site navigation.
 *
 * @package LIFT Creations 
 * @subpackage Theme by Nguyen Pham
 * https://baonguyenyam.github.io/cv
 * @since 2021
 */

?>

<?php 

global $lift_theme;
$set_align = '';

$header_value['header_search'] = $lift_theme['lift-theme-header-search'];
$header_value['header_search_align'] = $lift_theme['lift-theme-header-search-align'];

if(isset($header_value['header_search_align']) && $header_value['header_search_align'] ==='right') {
	$set_align = ' ms-auto';
} else if(isset($header_value['header_search_align']) && $header_value['header_search_align'] ==='left') {
	$set_align = ' me-auto';
} else if(isset($header_value['header_search_align']) && $header_value['header_search_align'] ==='center') {
	$set_align = ' mx-auto';
}

?>

<?php if(isset($header_value['header_search']) && $header_value['header_search'] === '1') { ?>
	<form id="searchform" class="d-flex<?=$set_align?>" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
		<div class="input-group">
			<input type="text" class="form-control search-field" name="s" placeholder="Search" value="<?php echo get_search_query(); ?>">
			<input type="hidden" name="post_type[]" value="book" />
			<input type="hidden" name="post_type[]" value="magazine" />
			<input type="hidden" name="post_type[]" value="ebook" />
			<input type="hidden" name="post_type[]" value="pdf" />
			<input type="submit" value="Search" class="btn btn-primary">
		</div>
	</form>
<?php  } ?>
