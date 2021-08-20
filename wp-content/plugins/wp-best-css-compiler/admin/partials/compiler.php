<?php

/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       https://github.com/baonguyenyam/wp-best-css-compiler
 * @since      1.0.0
 *
 * @package    Best_Css_Compiler
 * @subpackage Best_Css_Compiler/admin/partials
 */


if(isset($_GET['action']) && ($_GET['action'] === 'edit' || $_GET['action'] === 'delete') || $_GET['action'] === 'editor') {
	(!isset($_GET['id']) || $_GET['id'] == '' || $_GET['id'] == null) ? wp_redirect('./') : null;
	$actionItem = $wpdb->get_results($wpdb->prepare("SELECT * FROM {$tblGroup} WHERE compiler_id = {$_GET['id']} LIMIT 1"))[0];
}

?>
<div class="wrap csscompiler">
	<h1><?php echo esc_html__('File\'s name', BEST_CSS_COMPILER_DOMAIN )?></h1>
	<hr>
	<div class="form-wrap">
		<form action="<?php echo esc_attr( admin_url('admin-post.php') ); ?>" id="frm" method="post">
			<input type="hidden" name="action" value="submit_data" />
			<input type="hidden" name="type" value="<?php echo esc_attr(isset($_GET['action'])?$_GET['action']:'')?>" />
			<input type="hidden" name="id" value="<?php echo esc_attr(isset($actionItem->compiler_id)?$actionItem->compiler_id:'')?>" />
			<input type="hidden" name="posttype" value="csscompiler" />

			<?php if(isset($_GET['action']) && $_GET['action'] === 'delete') { ?>
				<div class="form-required term-name-wrap">
					<label for="groupName"><strong><?php echo esc_attr(isset($actionItem->compiler_title)?$actionItem->compiler_title:'')?><?php echo (esc_attr($actionItem->compiler_type) == 1) ? '.scss' : '.css'; ?></strong></label>
				</div>
			<?php } else if(isset($_GET['action']) && $_GET['action'] === 'editor') { ?>
				<p class="form-required term-name-wrap">
					<label for="groupName" class="button"><strong><?php echo esc_attr(isset($actionItem->compiler_title)?$actionItem->compiler_title:'')?><?php echo (esc_attr($actionItem->compiler_type) == 1) ? '.scss' : '.css'; ?></strong></label>
					<input name="groupName" id="groupName" type="hidden" value="<?php echo esc_attr(isset($actionItem->compiler_title)?$actionItem->compiler_title:'')?>" size="40" placeholder="e.g: style" aria-required="true" onKeyDown="liftCompilerkeyDown(event)">
				</p>
				<p><?php echo esc_html__('Press Ctrl + E or Cmd + E to display autocomplete', BEST_CSS_COMPILER_DOMAIN )?></p>
				<?php if(isset($_GET['showerror']) && $_GET['showerror'] !== '') {?>
					<div class="error">
						<pre><span><?php echo esc_html__('Something wrong at line', BEST_CSS_COMPILER_DOMAIN )?>: </span><font color="#cc0000">'<?php echo esc_attr(1 + (int)$_GET['showerror'])?>'</font> <i>(error=true)</i></pre>
					</div>
				<?php } ?>
				<div class="form-required term-name-wrap">
					<textarea id="code_editor_page_head" rows="20" name="groupContent" class="widefat textarea"><?php echo wp_unslash( $actionItem->compiler_content ); ?></textarea>   
				</div>
			<?php } else if(isset($_GET['action']) && ($_GET['action'] === 'add' || $_GET['action'] === 'edit')) { ?>
				<p class="form-required term-name-wrap">
					<label for="groupName"><?php echo esc_html__('Name', BEST_CSS_COMPILER_DOMAIN )?></label>
					<input name="groupName" id="groupName" type="text" value="<?php echo esc_attr(isset($actionItem->compiler_title)?$actionItem->compiler_title:'')?>" size="40" placeholder="e.g: style" aria-required="true" onKeyDown="liftCompilerkeyDown(event)">
				</p>
				<p class="form-required term-name-wrap">
					<label for="groupType"><?php echo esc_html__('Type', BEST_CSS_COMPILER_DOMAIN )?></label>
					<select name="groupType" id="groupType">
						<option value="1"<?php echo (esc_attr($actionItem->compiler_type) == 1) ? 'selected="selected"' : '' ;?>selected="selected"><?php echo esc_html__('SCSS', BEST_CSS_COMPILER_DOMAIN )?></option>
						<option value="2"<?php echo (esc_attr($actionItem->compiler_type) == 2) ? 'selected="selected"' : '' ;?>><?php echo esc_html__('CSS', BEST_CSS_COMPILER_DOMAIN )?></option>
					</select>
				</p>
				<p class="form-required term-name-wrap">
					<label for="groupOrder"><?php echo esc_html__('Order', BEST_CSS_COMPILER_DOMAIN )?></label>
					<input name="groupOrder" id="groupOrder" type="number" value="<?php echo esc_attr(isset($actionItem->compiler_order)?$actionItem->compiler_order:'10')?>" size="2" aria-required="true">
				</p>
			<?php } ?>

			<p class="submit"><button type="submit" class="button button-primary"><?php echo ($_GET['action'] === 'delete') ? esc_html__('Delete', BEST_CSS_COMPILER_DOMAIN ) : esc_html__('Submit', BEST_CSS_COMPILER_DOMAIN )?></button></p>

			<input type="hidden" name="submitted" id="submitted" value="true" />
		</form>
	</div>
</div>