<?php
class wow_Social_Widget extends WP_Widget {
    function __construct() {
 
        parent::__construct(
            'wow-social-widget',  // Base ID
            'WOW Social Widget'   // Name
        );
 
        add_action( 'widgets_init', function() {
            register_widget( 'wow_Social_Widget' );
        });
 
    }
 
    public $args = array(
        'before_title'  => '<h4 class="widgettitle">',
        'after_title'   => '</h4>',
        'before_widget' => '<div class="widget-wrap">',
        'after_widget'  => '</div></div>'
    );
 
    public function widget( $args, $instance ) {

        $social_enable = Redux::get_option( 'wow_theme', 'wow-theme-social-media-enable' );
        $social_facebook = Redux::get_option( 'wow_theme', 'wow-theme-social-media-facebook' );
        $social_twitter = Redux::get_option( 'wow_theme', 'wow-theme-social-media-twitter' );
        $social_vimeo = Redux::get_option( 'wow_theme', 'wow-theme-social-media-vimeo' );
        $social_youtube = Redux::get_option( 'wow_theme', 'wow-theme-social-media-youtube' );
        $social_linkedin = Redux::get_option( 'wow_theme', 'wow-theme-social-media-linkedin' );
        $social_instagram = Redux::get_option( 'wow_theme', 'wow-theme-social-media-instagram' );
 
        if ( ! empty( $instance['class'] ) ) {
            $args['before_widget'] = '<div class="widget-wrap '.$instance['class'].'">';
        }

        echo $args['before_widget'];
        if ( ! empty( $instance['title'] ) ) {
            echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
        }
        if($social_enable == 1 || $social_enable === '1') {
            echo '<ul class="socialwidget list-inline">';
            if($social_facebook != '' && $instance['facebook'] == 1) {
                echo '<li class="list-inline-item"><a href="'.$social_facebook.'" target="_blank"><i class="fab fa-facebook-square"></i></a></li>';
            }
            if($social_twitter != '' && $instance['twitter'] == 1) {
                echo '<li class="list-inline-item"><a href="'.$social_twitter.'" target="_blank"><i class="fab fa-twitter"></i></a></li>';
            }
            if($social_vimeo != '' && $instance['vimeo'] == 1) {
                echo '<li class="list-inline-item"><a href="'.$social_vimeo.'" target="_blank"><i class="fab fa-vimeo-v"></i></a></li>';
            }
            if($social_youtube != '' && $instance['youtube'] == 1) {
                echo '<li class="list-inline-item"><a href="'.$social_youtube.'" target="_blank"><i class="fab fa-youtube"></i></a></li>';
            }
            if($social_linkedin != '' && $instance['linkedin'] == 1) {
                echo '<li class="list-inline-item"><a href="'.$social_linkedin.'" target="_blank"><i class="fab fa-linkedin"></i></a></li>';
            }
            if($social_instagram != '' && $instance['instagram'] == 1) {
                echo '<li class="list-inline-item"><a href="'.$social_instagram.'" target="_blank"><i class="fab fa-instagram-square"></i></a></li>';
            }
            echo '</ul>';
        }
        
        echo $args['after_widget'];
 
    }
 
    public function form( $instance ) {
 
        $title = ! empty( $instance['title'] ) ? $instance['title'] : esc_html__( '', 'wp-wow-theme' );
        $class = ! empty( $instance['class'] ) ? $instance['class'] : esc_html__( '', 'wp-wow-theme' );
        $facebook = $instance['facebook'] ? 1 : 0;
        $twitter = $instance['twitter'] ? 1 : 0;
        $vimeo = $instance['vimeo'] ? 1 : 0;
        $youtube = $instance['youtube'] ? 1 : 0;
        $linkedin = $instance['linkedin'] ? 1 : 0;
        $instagram = $instance['instagram'] ? 1 : 0;
        ?>
        <p>
        <label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php echo esc_html__( 'Title:', 'wp-wow-theme' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">
        </p>
        <p>
        <label for="<?php echo esc_attr( $this->get_field_id( 'class' ) ); ?>"><?php echo esc_html__( 'Classname:', 'wp-wow-theme' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'class' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'class' ) ); ?>" type="text" value="<?php echo esc_attr( $class ); ?>">
        </p>
        <p>
            <label for="facebook"><?php echo esc_html__( 'Facebook:', 'wp-wow-theme' ); ?>
                <input type="checkbox" id="facebook" name="<?php echo esc_attr( $this->get_field_name( 'facebook' ) ); ?>" <?php echo ($facebook == 1) ? ' checked': ''; ?>>
            </label>
            <label for="twitter"><?php echo esc_html__( 'Twitter:', 'wp-wow-theme' ); ?>
                <input type="checkbox" id="twitter" name="<?php echo esc_attr( $this->get_field_name( 'twitter' ) ); ?>" <?php echo ($twitter == 1) ? ' checked': ''; ?>>
            </label>
            <label for="vimeo"><?php echo esc_html__( 'Vimeo:', 'wp-wow-theme' ); ?>
                <input type="checkbox" id="vimeo" name="<?php echo esc_attr( $this->get_field_name( 'vimeo' ) ); ?>" <?php echo ($vimeo == 1) ? ' checked': ''; ?>>
            </label>
            <label for="youtube"><?php echo esc_html__( 'Youtube:', 'wp-wow-theme' ); ?>
                <input type="checkbox" id="youtube" name="<?php echo esc_attr( $this->get_field_name( 'youtube' ) ); ?>" <?php echo ($youtube == 1) ? ' checked': ''; ?>>
            </label>
            <label for="linkedin"><?php echo esc_html__( 'Linkedin:', 'wp-wow-theme' ); ?>
                <input type="checkbox" id="linkedin" name="<?php echo esc_attr( $this->get_field_name( 'linkedin' ) ); ?>" <?php echo ($linkedin == 1) ? ' checked': ''; ?>>
            </label>
            <label for="instagram"><?php echo esc_html__( 'Instagram:', 'wp-wow-theme' ); ?>
                <input type="checkbox" id="instagram" name="<?php echo esc_attr( $this->get_field_name( 'instagram' ) ); ?>" <?php echo ($instagram == 1) ? ' checked': ''; ?>>
            </label>
        </p>
        <?php
 
    }
 
    public function update( $new_instance, $old_instance ) {
 
        $instance = array();
 
        $instance['title'] = ( !empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
        $instance['class'] = ( !empty( $new_instance['class'] ) ) ? strip_tags( $new_instance['class'] ) : '';
        $instance['facebook'] = ( !isset( $new_instance['facebook'] ) ) ? 0: 1;
        $instance['twitter'] = ( !isset( $new_instance['twitter'] ) ) ? 0: 1;
        $instance['vimeo'] = ( !isset( $new_instance['vimeo'] ) ) ? 0: 1;
        $instance['youtube'] = ( !isset( $new_instance['youtube'] ) ) ? 0: 1;
        $instance['linkedin'] = ( !isset( $new_instance['linkedin'] ) ) ? 0: 1;
        $instance['instagram'] = ( !isset( $new_instance['instagram'] ) ) ? 0: 1;
 
        return $instance;
    }
 
}
?>