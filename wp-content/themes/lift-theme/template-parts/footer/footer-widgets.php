<?php
/**
 * Displays the footer widget area.
 *
 * @package LIFT Creations 
 * @subpackage Theme by Nguyen Pham
 * @since 2021
 */

global $lift_theme;
$footer_value['footer_col'] = $lift_theme['lift-theme-footer-columns'];
$footer_value['footer_set_col'] = '';
$footer_value['footer_style'] = $lift_theme['lift-theme-layout-style'];
$footer_value['footer_size'] = $lift_theme['lift-theme-layout-size'];
$footer_value['footer_row'] = $lift_theme['lift-theme-footer-row-option'];
$footer_value['footer_gutters'] = $lift_theme['lift-theme-footer-columns-gutters'];
$build_footer_spacing = '';
if(isset($lift_theme['lift-theme-footer-row-spacing'])) {
	$build_footer_spacing_value = '';
	$footer_value['footer_row_unit'] = $lift_theme['lift-theme-footer-row-spacing']['unit'];
	if(isset($lift_theme['lift-theme-footer-row-spacing']['padding-top']) && $lift_theme['lift-theme-footer-row-spacing']['padding-top'] != '') {
		$build_footer_spacing_value .= 'padding-top:'.$lift_theme['lift-theme-footer-row-spacing']['padding-top'].';';
	}
	if(isset($lift_theme['lift-theme-footer-row-spacing']['padding-bottom']) && $lift_theme['lift-theme-footer-row-spacing']['padding-bottom'] != '') {
		$build_footer_spacing_value .= 'padding-bottom:'.$lift_theme['lift-theme-footer-row-spacing']['padding-bottom'].';';
	}
	if(isset($lift_theme['lift-theme-footer-row-spacing']['padding-left']) && $lift_theme['lift-theme-footer-row-spacing']['padding-left'] != '') {
		$build_footer_spacing_value .= 'padding-left:'.$lift_theme['lift-theme-footer-row-spacing']['padding-left'].';';
	}
	if(isset($lift_theme['lift-theme-footer-row-spacing']['padding-right']) && $lift_theme['lift-theme-footer-row-spacing']['padding-right'] != '') {
		$build_footer_spacing_value .= 'padding-right:'.$lift_theme['lift-theme-footer-row-spacing']['padding-right'].';';
	}
	if(isset($lift_theme['lift-theme-footer-row-spacing']['padding-top']) && $lift_theme['lift-theme-footer-row-spacing']['padding-top'] != '' || isset($lift_theme['lift-theme-footer-row-spacing']['padding-bottom']) && $lift_theme['lift-theme-footer-row-spacing']['padding-bottom'] != '' || isset($lift_theme['lift-theme-footer-row-spacing']['padding-left']) && $lift_theme['lift-theme-footer-row-spacing']['padding-left'] != '' || isset($lift_theme['lift-theme-footer-row-spacing']['padding-right']) && $lift_theme['lift-theme-footer-row-spacing']['padding-right'] != '') {
		$build_footer_spacing = ' style="'.$build_footer_spacing_value.'"';
	}
}
var_dump($lift_theme);
?>

<?php if(is_active_sidebar('sidebar-1')) {?>
<footer id="footer" class="footer">
	<div class="container<?= isset($footer_value['footer_style']) && $footer_value['footer_style'] === '1' ? '-fluid': ''?>">
		<div class="row<?= isset($footer_value['footer_gutters']) && $footer_value['footer_gutters'] !== '-1' ? ' gx-'.$footer_value['footer_gutters'] : ''?>"<?= isset($footer_value['footer_row']) && $footer_value['footer_row'] === '1' ? $build_footer_spacing : ''?>>
			<?php
				for ($i=1; $i <= $footer_value['footer_col'] ; $i++) { 
			?>
				<?php if(is_active_sidebar( 'sidebar-'.$i )) {?>
					<div class="col<?=$footer_value['footer_set_col']?>"><?php dynamic_sidebar( 'sidebar-'.$i ); ?></div>
				<?php } ?>
			<?php
				}
			?>
		</div>
	</div>
</footer>
<?php } ?>
