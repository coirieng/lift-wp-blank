<?php
/**
 * Displays the footer widget area.
 *
 * @package LIFT Creations 
 * @subpackage Theme by Nguyen Pham
 * @since 2021
 */

global $lift_theme;
$footer_col = $lift_theme['lift-theme-footer-layout'];
var_dump($footer_col);
?>

<footer id="footer" class="footer">
	<div class="container">
		<div class="row">
			<?php
				for ($i=1; $i <= $footer_col ; $i++) { 
			?>
				<?php if(is_active_sidebar( 'sidebar-'.$i )) {?>
					<div class="col"><?php dynamic_sidebar( 'sidebar-'.$i ); ?></div>
				<?php } ?>
			<?php
				}
			?>
		</div>
	</div>
</footer>
