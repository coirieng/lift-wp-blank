<?php
global $lift_theme;
$header_offcanvas = $lift_theme['lift-theme-header-offcanvas'];
?>
<?php get_template_part( 'template-parts/header/site-branding' ); ?>
<?php if ( isset($header_offcanvas) && ($header_offcanvas === '1' || $header_offcanvas == 1) ) : ?>
	<nav id="site-navigation" class="primary-menu-container offcanvas" aria-label="Primary menu" style="">
<?php else : ?>
	<nav id="site-navigation" class="primary-menu-container collapse navbar-collapse" aria-label="Primary menu" style="">
<?php endif; ?>
	<div class="ms-auto d-flex">
		<?php get_template_part( 'template-parts/header/site-nav' ); ?>
		<?php get_template_part( 'template-parts/header/site-search' ); ?>
	</div>
</nav>
