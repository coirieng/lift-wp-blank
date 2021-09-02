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
 
        echo $args['before_widget'];
        if ( ! empty( $instance['title'] ) ) {
            echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
        }
        echo '<ul class="socialwidget">';
        echo esc_html__( $instance['select'], 'wp-wow-theme' );
        echo '</ul>';
        echo $args['after_widget'];
 
    }
 
    public function form( $instance ) {

    	// TODO: We working on this one now
        $args = Redux::get_args( 'wow_theme' );

        var_dump($args);
 
        $title = ! empty( $instance['title'] ) ? $instance['title'] : esc_html__( '', 'wp-wow-theme' );
        $select = ! empty( $instance['select'] ) ? $instance['select'] : esc_html__( '', 'wp-wow-theme' );
        ?>
        <p>
        <label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php echo esc_html__( 'Title:', 'wp-wow-theme' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">
        </p>
        <p>
            <!-- <select class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'select' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'select' ) ); ?>"><?php echo esc_attr( $select ); ?></select> -->
            <label for="facebook"><?php echo esc_html__( 'Facebook:', 'wp-wow-theme' ); ?>
                <input type="checkbox" id="facebook" name="wow_social[]" value="facebook">
            </label>
            <label for="twitter"><?php echo esc_html__( 'Twitter:', 'wp-wow-theme' ); ?>
                <input type="checkbox" id="twitter" name="wow_social[]" value="twitter">
            </label>
        </p>
        <?php
 
    }
 
    public function update( $new_instance, $old_instance ) {
 
        $instance = array();
 
        $instance['title'] = ( !empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
        $instance['select'] = ( !empty( $new_instance['select'] ) ) ? $new_instance['select'] : '';
 
        return $instance;
    }
 
}
?>