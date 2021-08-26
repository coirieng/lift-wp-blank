<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

global $wp_version;
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title><?php echo __( 'WP PageBuilder', 'lift-pagebuilder' ) . ' | ' . get_the_title(); ?></title>
	<?php wp_head(); ?>
	<script>
        var ajaxurl = '<?php echo admin_url( 'admin-ajax.php', 'relative' ); ?>';
    </script>
    <script type="text/javascript">
        function onLoadHandler(){
            if( typeof  document.getElementById('wppbMainIframeLoadingWrap') != 'undefined' ){
                document.getElementById('wppbMainIframeLoadingWrap').style.display='none';
            }
            if( typeof document.getElementById('wppb-builder-view') != 'undefined' ){
                var wppb_iframe = document.getElementById('wppb-builder-view');
                var innerDoc = wppb_iframe.contentDocument || wppb_iframe.contentWindow.document;
                var head = innerDoc.getElementsByTagName('body')[0];
                var script = innerDoc.createElement('script');
                script.innerText = "jQuery('body').bind('DOMSubtreeModified', function () {jQuery('.wppb-builder-addon img').each(function () { var getsrc = jQuery(this).attr('src'); if(getsrc.substring(0, 4) !== 'http'){ jQuery(this).attr('src', '<?php echo plugin_dir_url(__DIR__) ?>' + getsrc); } }) });";
                script.innerText += "jQuery('body').bind('DOMSubtreeModified', function () {jQuery('style[id^=\"wppb-\"]').each(function () { var getsrc = jQuery(this).html(); var image_url = /url\\(lib\\/pages\\/(.*?).(jpg|jpeg|png|gif)/i; var message = getsrc.replace(image_url,'url(<?php echo plugin_dir_url(__DIR__) ?>lib/pages/$1.$2'); jQuery(this).text(message); }); });";
                script.type = 'text/javascript';
                head.appendChild(script);
            }
        }
    </script>
</head>
<body class=" wp-version-<?php echo str_replace( '.', '-', $wp_version ); ?> wppb-frontend-active">
    <div class="wppb-iframe-loading-wrap" id="wppbMainIframeLoadingWrap" >
        <img src="<?php echo WPPB_DIR_URL.'assets/img/loading-md.svg'; ?>" alt="loading"/>
    </div>
    <div id="wppb-page-builder">
        <?php $load_iframe_url = add_query_arg( array('load_for' => 'wppb_editor_iframe') , get_the_permalink(get_the_ID())); ?>
        <iframe width="100%" height="400" id="wppb-builder-view" data-page-id="<?php echo get_the_ID(); ?>" name="wppb-builder-view" src="<?php echo $load_iframe_url; ?>" onload="onLoadHandler();"></iframe>
        <div id="wppb-builder-page-tools" class="wppb-builder-page-tools"></div>
    </div>
    <?php
        wp_footer();
        do_action( 'admin_print_footer_scripts' );
    ?>
    <script>
        function WOW_watching() {
            jQuery('.sectionWarpper .blocks-draggable-img > img').each(function () {
                var getsrc = jQuery(this).attr('src');
                if(getsrc.substring(0, 4) !== 'http'){
                    jQuery(this).attr('src', '<?php echo plugin_dir_url(__DIR__) ?>' + getsrc);
                }
            })
            jQuery('.wppb-builder-modal .wppb-default-template-image > img').each(function () {
                var getsrc = jQuery(this).attr('src');
                if(getsrc.substring(0, 4) !== 'http'){
                    jQuery(this).attr('src', '<?php echo plugin_dir_url(__DIR__) ?>' + getsrc);
                }
            })
            jQuery('.wppb-builder-addon img').each(function () {
                var getsrc = jQuery(this).attr('src');
                if(getsrc.substring(0, 4) !== 'http'){
                    jQuery(this).attr('src', '<?php echo plugin_dir_url(__DIR__) ?>' + getsrc);
                }
            })
        }
    jQuery('body').bind('DOMSubtreeModified', function () {
        WOW_watching()
    });
    </script>
</body>
</html>
