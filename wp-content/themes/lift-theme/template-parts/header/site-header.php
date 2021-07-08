<?php
/**
 * Displays the site header.
 *
 * @package LIFT Creations 
 * @subpackage Theme by Nguyen Pham
 * https://baonguyenyam.github.io/cv
 * @since 2021
 */

$wrapper_classes  = 'site-header';
$wrapper_classes .= has_custom_logo() ? ' has-logo' : '';
$wrapper_classes .= ( true === get_theme_mod( 'display_title_and_tagline', true ) ) ? ' has-title-and-tagline' : '';
$wrapper_classes .= has_nav_menu( 'primary' ) ? ' has-menu' : '';

global $lift_theme;
$header_value['header_style'] = $lift_theme['lift-theme-header-layout-style'];
$header_value['header_shadow'] = $lift_theme['lift-theme-header-shadow'];
$header_value['header_row'] = $lift_theme['lift-theme-header-row-option'];
$header_value['header_menu_toggle'] = $lift_theme['lift-theme-header-menu-toggle'];
$header_value['header_fixed'] = $lift_theme['lift-theme-header-fixed'];

$build_header_spacing = '';
if(isset($lift_theme['lift-theme-header-row-spacing'])) {
	$build_header_spacing_value = '';
	$header_value['header_row_unit'] = $lift_theme['lift-theme-header-row-spacing']['unit'];
	if(isset($lift_theme['lift-theme-header-row-spacing']['padding-top']) && $lift_theme['lift-theme-header-row-spacing']['padding-top'] != '') {
		$build_header_spacing_value .= 'padding-top:'.$lift_theme['lift-theme-header-row-spacing']['padding-top'].';';
	}
	if(isset($lift_theme['lift-theme-header-row-spacing']['padding-bottom']) && $lift_theme['lift-theme-header-row-spacing']['padding-bottom'] != '') {
		$build_header_spacing_value .= 'padding-bottom:'.$lift_theme['lift-theme-header-row-spacing']['padding-bottom'].';';
	}
	if(isset($lift_theme['lift-theme-header-row-spacing']['padding-left']) && $lift_theme['lift-theme-header-row-spacing']['padding-left'] != '') {
		$build_header_spacing_value .= 'padding-left:'.$lift_theme['lift-theme-header-row-spacing']['padding-left'].';';
	}
	if(isset($lift_theme['lift-theme-header-row-spacing']['padding-right']) && $lift_theme['lift-theme-header-row-spacing']['padding-right'] != '') {
		$build_header_spacing_value .= 'padding-right:'.$lift_theme['lift-theme-header-row-spacing']['padding-right'].';';
	}
	if(isset($lift_theme['lift-theme-header-row-spacing']['padding-top']) && $lift_theme['lift-theme-header-row-spacing']['padding-top'] != '' || isset($lift_theme['lift-theme-header-row-spacing']['padding-bottom']) && $lift_theme['lift-theme-header-row-spacing']['padding-bottom'] != '' || isset($lift_theme['lift-theme-header-row-spacing']['padding-left']) && $lift_theme['lift-theme-header-row-spacing']['padding-left'] != '' || isset($lift_theme['lift-theme-header-row-spacing']['padding-right']) && $lift_theme['lift-theme-header-row-spacing']['padding-right'] != '') {
		$build_header_spacing = ' style="'.$build_header_spacing_value.'"';
	}
}
?>

<!-- LIFT HEADER -->
<header id="header" class="<?php echo esc_attr( $wrapper_classes ); ?><?= isset($header_value['header_shadow']) && $header_value['header_shadow'] !== '' ? ' '.$header_value['header_shadow']: ' default'?><?=isset($header_value['header_fixed']) &&$header_value['header_fixed'] === '1' ? ' fixed-top': ''?>" role="banner">

	<div class="header-wrapper"<?= isset($header_value['header_row']) && $header_value['header_row'] === '1' ? $build_header_spacing : ''?>>
		<nav class="navbar navbar-expand<?=isset($header_value['header_menu_toggle']) && $header_value['header_menu_toggle']  !== '' ? '-'.$header_value['header_menu_toggle']: '-md'?>">
			<div class="container<?= isset($header_value['header_style']) && $header_value['header_style'] === '1' ? '-fluid': ''?>">
				<?php get_template_part( 'template-parts/header/site-branding' ); ?>
				<?php get_template_part( 'template-parts/header/site-nav' ); ?>
			</div>
		</nav>
	</div>

</header><!-- #masthead -->
