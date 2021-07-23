<?php
global $lift_theme;
$header_style = $lift_theme['lift-theme-header-layout-style'];
$header_offcanvas = $lift_theme['lift-theme-header-offcanvas'];
$header_menu_toggle = $lift_theme['lift-theme-header-menu-toggle'];
$header_row = $lift_theme['lift-theme-header-row-option'];
?>
<?php get_template_part( 'template-parts/header/site-branding' ); ?>
<?php if ( isset($header_offcanvas) && ($header_offcanvas === '1' || $header_offcanvas == 1) ) : ?>
	<nav id="site-navigation" class="primary-menu-container menu-offcanvas<?=isset($header_menu_toggle) && $header_menu_toggle  !== '' ? '-'.$header_menu_toggle: '-md'?>" aria-label="Primary menu" style="">
<?php else : ?>
	<nav id="site-navigation" class="primary-menu-container collapse navbar-collapse" aria-label="Primary menu" style="">
<?php endif; ?>
	<div class="header-wrapper"<?= isset($header_row) && $header_row === '1' ? $build_header_spacing : ''?>>
		<div class="container<?= isset($header_style) && $header_style === '1' ? '-fluid': ''?>">
			<?php get_template_part( 'template-parts/header/site-nav' ); ?>
			<?php get_template_part( 'template-parts/header/site-search' ); ?>
		</div>
	</div>
</nav>
