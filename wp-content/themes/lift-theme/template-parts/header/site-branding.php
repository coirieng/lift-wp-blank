<?php
/**
 * Displays header site branding
 *
 * @package LIFT Creations 
 * @subpackage Theme by Nguyen Pham
 * https://baonguyenyam.github.io/cv
 * @since 2021
 */

$detect = new Mobile_Detect;
$blog_info    = get_bloginfo( 'name' );
$description  = get_bloginfo( 'description', 'display' );
$show_title   = ( true === get_theme_mod( 'display_title_and_tagline', true ) );
// $header_class = $show_title ? 'site-title' : 'screen-reader-text';

global $lift_theme;
$header_logo = $lift_theme['lift-theme-header-logo'];
$header_logo_size = $lift_theme['lift-theme-header-logo-size'];
$header_logo_mobile = $lift_theme['lift-theme-header-logo-mobile'];
$header_logo_mobile_size = $lift_theme['lift-theme-header-logo-mobile-size'];
$header_logo_tablet = $lift_theme['lift-theme-header-logo-tablet'];
$header_logo_tablet_size = $lift_theme['lift-theme-header-logo-tablet-size'];

$logosrc = '';
$logosize = '';

if($detect->isMobile() && !$detect->isTablet()) {
	$logosrc = $header_logo_mobile['url'];
	if (isset($header_logo_mobile_size) && $header_logo_mobile_size['height'] !== '' && $header_logo_mobile_size['height'] !== 'px') {
		$logosize .= ' height="'.$header_logo_mobile_size['height'].'"';
	}
	if (isset($header_logo_mobile_size) && $header_logo_mobile_size['width'] !== '' && $header_logo_mobile_size['width'] !== 'px') {
		$logosize .= ' width="'.$header_logo_mobile_size['width'].'"';
	}
} else if($detect->isTablet()) {
	$logosrc = $header_logo_tablet['url'];
	if (isset($header_logo_tablet_size) && $header_logo_tablet_size['height'] !== '' && $header_logo_tablet_size['height'] !== 'px') {
		$logosize .= ' height="'.$header_logo_tablet_size['height'].'"';
	}
	if (isset($header_logo_tablet_size) && $header_logo_tablet_size['width'] !== '' && $header_logo_tablet_size['width'] !== 'px') {
		$logosize .= ' width="'.$header_logo_tablet_size['width'].'"';
	}
} else {
	$logosrc = $header_logo['url'];
	if (isset($header_logo_size) && $header_logo_size['height'] !== '' && $header_logo_size['height'] !== 'px') {
		$logosize .= ' height="'.$header_logo_size['height'].'"';
	}
	if (isset($header_logo_size) && $header_logo_size['width'] !== '' && $header_logo_size['width'] !== 'px') {
		$logosize .= ' width="'.$header_logo_size['width'].'"';
	}
}

?>
	<?php if (isset($header_logo) && $logosrc !== '') : ?>
		<a class="navbar-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>">
			<img src="<?=$logosrc;?>"<?=$logosize?> alt="<?php echo esc_html( $blog_info ); ?> - <?php echo esc_html( $description ); ?>">
		</a>
	<?php else : ?>
		<?php if ( has_custom_logo() && $show_title ) : ?>
			<a class="navbar-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>">
				<img src="<?=wp_get_attachment_image_src(get_theme_mod( 'custom_logo' ), 'full')[0];?>" alt="<?php echo esc_html( $blog_info ); ?> - <?php echo esc_html( $description ); ?>">
				<span id="site-desc"><?php echo esc_html( $description ); ?></span>
			</a>
		<?php elseif ( has_custom_logo() && ! $show_title ) : ?>
			<a class="navbar-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>">
				<img src="<?=wp_get_attachment_image_src(get_theme_mod( 'custom_logo' ), 'full')[0];?>" alt="<?php echo esc_html( $blog_info ); ?> - <?php echo esc_html( $description ); ?>">
			</a>
		<?php endif; ?>
	<?php endif; ?>
    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#site-navigation" aria-controls="site-navigation" aria-expanded="false" aria-label="Toggle navigation">
		<?php echo lift_get_icon_svg( 'ui', 'menu' ); ?>
		<?php echo lift_get_icon_svg( 'ui', 'close' ); ?>
    </button>

<!-- TODO: CHECK THIS LINE -->
<?php if ( is_front_page() && ! is_paged() ) : ?>
<?php elseif ( is_front_page() || is_home() ) : ?>
<?php else : ?>
<?php endif; ?>
