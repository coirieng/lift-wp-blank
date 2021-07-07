<?php
/**
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package LIFT Creations 
 * @subpackage Theme by Nguyen Pham
 * https://baonguyenyam.github.io/cv
 * @since 2021
 */

?>
<!doctype html>
<html <?php language_attributes(); ?> <?php lift_the_html_classes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<?php wp_head(); ?>
</head>
<?php

global $lift_theme;
$layout_value['layout_style'] = $lift_theme['lift-theme-layout-style'];
$layout_value['layout_row'] = $lift_theme['lift-theme-layout-row-option'];

$build_layout_spacing = '';
if(isset($lift_theme['lift-theme-layout-row-spacing'])) {
	$build_layout_spacing_value = '';
	$layout_value['layout_row_unit'] = $lift_theme['lift-theme-layout-row-spacing']['unit'];
	if(isset($lift_theme['lift-theme-layout-row-spacing']['padding-top']) && $lift_theme['lift-theme-layout-row-spacing']['padding-top'] != '') {
		$build_layout_spacing_value .= 'padding-top:'.$lift_theme['lift-theme-layout-row-spacing']['padding-top'].';';
	}
	if(isset($lift_theme['lift-theme-layout-row-spacing']['padding-bottom']) && $lift_theme['lift-theme-layout-row-spacing']['padding-bottom'] != '') {
		$build_layout_spacing_value .= 'padding-bottom:'.$lift_theme['lift-theme-layout-row-spacing']['padding-bottom'].';';
	}
	if(isset($lift_theme['lift-theme-layout-row-spacing']['padding-left']) && $lift_theme['lift-theme-layout-row-spacing']['padding-left'] != '') {
		$build_layout_spacing_value .= 'padding-left:'.$lift_theme['lift-theme-layout-row-spacing']['padding-left'].';';
	}
	if(isset($lift_theme['lift-theme-layout-row-spacing']['padding-right']) && $lift_theme['lift-theme-layout-row-spacing']['padding-right'] != '') {
		$build_layout_spacing_value .= 'padding-right:'.$lift_theme['lift-theme-layout-row-spacing']['padding-right'].';';
	}
	if(isset($lift_theme['lift-theme-layout-row-spacing']['padding-top']) && $lift_theme['lift-theme-layout-row-spacing']['padding-top'] != '' || isset($lift_theme['lift-theme-layout-row-spacing']['padding-bottom']) && $lift_theme['lift-theme-layout-row-spacing']['padding-bottom'] != '' || isset($lift_theme['lift-theme-layout-row-spacing']['padding-left']) && $lift_theme['lift-theme-layout-row-spacing']['padding-left'] != '' || isset($lift_theme['lift-theme-layout-row-spacing']['padding-right']) && $lift_theme['lift-theme-layout-row-spacing']['padding-right'] != '') {
		$build_layout_spacing = ' style="'.$build_layout_spacing_value.'"';
	}
}

?>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<!-- LIFT WRAPPER -->
<div id="page" class="site lift-wrapper">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'wp-lift-theme' ); ?></a>

	<?php get_template_part( 'template-parts/header/site-header' ); ?>

	<!-- LIFT CONTENT -->
	<main id="content" class="site-content lift-content">
		<div class="content-wrapper"<?= isset($layout_value['layout_row']) && $layout_value['layout_row'] === '1' ? $build_layout_spacing : ''?>>
			<div id="primary" class="content-area container<?= isset($layout_value['layout_style']) && $layout_value['layout_style'] === '1' ? '-fluid': ''?>">
				<!-- LIFT MAIN -->
				<div id="main" class="site-main lift-main" role="main">
