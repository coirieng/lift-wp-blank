<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class WPPB_Addon_Button{

	public function get_name(){
		return 'wppb_button';
	}
	public function get_title(){
		return 'Button';
	}
	public function get_icon() {
		return 'wppb-font-button';
	}

	// Button Settings Fields
	public function get_settings() {

		$settings = array(
			'button_text' => array(
				'type' => 'text',
				'title' => __('Text','lift-pagebuilder'),
				'std' => 'Button',
			),
			'button_link' => array(
				'type' => 'link',
				'title' => __('Link','lift-pagebuilder'),
				'std' => array( 'link'=>'#','window'=>false,'nofolow'=>false )
			),
			'icon_list' => array(
				'type' => 'icon',
				'title' => __('Icon','lift-pagebuilder'),
				'std' => ''
			),
			'icon_position' => array(
				'type' => 'select',
				'title' => __('Icon position','lift-pagebuilder'),
				'depends' => array(array('icon_list', '!=', '')),
				'values' => array(
					'left' => __('Left','lift-pagebuilder'),
					'right' => __('Right','lift-pagebuilder'),
				),
				'std' => 'left',
			),

			// Style Area
			'btn_size' => array(
				'type' => 'select',
				'title' => __('Size','lift-pagebuilder'),
				'values' => array(
					'standard' => __('Standard','lift-pagebuilder'),
					'large' => __('Large','lift-pagebuilder'),
					'xlarge' => __('Extra Large','lift-pagebuilder'),
					'small' => __('Small','lift-pagebuilder'),
					'xsmall' => __('Extra Small','lift-pagebuilder'),
					'custom' => __('Custom','lift-pagebuilder'),
				),
				'std' => 'large',
			),
			'button_padding' => array(
				'type' => 'dimension',
				'title' => 'Padding',
				'unit' => array( 'px','em','%' ),
				'depends' => array(array('btn_size', '=', array('custom'))),
				'responsive' => true,
				'selector' => '{{SELECTOR}} .wppb-button-addon-content .wppb-btn-addons { padding: {{data.button_padding}}; }',
			),

			'shape' => array(
				'type' => 'select',
				'title' => __('Shape','lift-pagebuilder'),
				'values' => array(
					'rounded' => __('Rounded','lift-pagebuilder'),
					'square' => __('Square','lift-pagebuilder'),
					'round' => __('Round','lift-pagebuilder'),
					'custom' => __('Custom','lift-pagebuilder'),
				),
				'std' => 'rounded',
			),
			'buttom_radius' => array(
				'type' => 'dimension',
				'title' => 'Border Radius',
				'unit' => array( 'px','em','%' ),
				'responsive' => true,
				'depends' => array(array('shape', '=', array('custom'))),
				'selector' => '{{SELECTOR}} .wppb-button-addon-content .wppb-btn-addons{ border-radius: {{data.buttom_radius}} ; }',
			),
			'button_border_radius_hover' => array(
				'type' => 'dimension',
				'title' => 'Hover Border Radius',
				'unit' => array( 'px','em','%' ),
				'responsive' => true,
				'depends' => array(array('shape', '=', array('custom'))),
				'selector' => '{{SELECTOR}} .wppb-button-addon-content .wppb-btn-addons:hover{ border-radius: {{data.button_border_radius_hover}} ; }',
			),

			'fullwidth_button' => array(
				'type' => 'select',
				'title' => __('Full Width','lift-pagebuilder'),
				'values' => array(
					'full-yes' => __('Yes','lift-pagebuilder'),
					'full-no' => __('No','lift-pagebuilder'),
				),
				'std' => 'no',
			),

			'button_align' => array(
				'type' => 'alignment',
				'title' => __('Alignment','lift-pagebuilder'),
				'std' => array( 'md' => 'center', 'sm' => 'center', 'xs' => 'center' ),
				'responsive' => true,
				'selector' => '{{SELECTOR}} .wppb-button-addon-content{ text-align: {{data.button_align}}; }'
			),
			'button_fontstyle' => array(
				'type' => 'typography',
				'title' => __('Typography','lift-pagebuilder'),
				'std' => array(
					'fontFamily' => '',
					'fontSize' => array( 'md'=>'14px', 'sm'=>'', 'xs'=>'' ),
					'lineHeight' => array( 'md'=>'', 'sm'=>'', 'xs'=>'' ),
					'fontWeight' => '700',
					'textTransform' => '',
					'fontStyle' => '',
					'letterSpacing' => array( 'md'=>'', 'sm'=>'', 'xs'=>'' ),
				),
				'section' => 'Font',
				'selector' => '{{SELECTOR}} .wppb-button-addon-content .wppb-btn-addons',
				'tab' => 'style',
			),

			'style' => array(
				'type' => 'select',
				'title' => 'Select Style',
				'values' => array(
					'primary' => __('Primary','lift-pagebuilder'),
					'success' => __('Success','lift-pagebuilder'),
					'info' => __('Info','lift-pagebuilder'),
					'warning' => __('Warning','lift-pagebuilder'),
					'danger' => __('Danger','lift-pagebuilder'),
					'light' => __('Light','lift-pagebuilder'),
					'dark' => __('Dark','lift-pagebuilder'),
					'link' => __('Link','lift-pagebuilder'),
					'custom' => __('Custom','lift-pagebuilder'),
				),
				'std' => 'success',
				'tab' => 'style',
				'section' => 'Style',
			),
			'button_color' => array(
				'type' => 'color',
				'title' => __('Color','lift-pagebuilder'),
				'tab' => 'style',
				'section' => 'Style',
				'depends' => array(array('style', '=', array('custom'))),
				'selector' => '{{SELECTOR}} .wppb-button-addon-content .wppb-btn-addons { color: {{data.button_color}}; }'
			),
			'button_hcolor' => array(
				'type' => 'color',
				'title' => __('Button hover color','lift-pagebuilder'),
				'tab' => 'style',
				'section' => 'Style',
				'depends' => array(array('style', '=', array('custom'))),
				'selector' => '{{SELECTOR}} .wppb-button-addon-content .wppb-btn-addons:hover { color: {{data.button_hcolor}}; }'
			),
			'button_bg' => array(
				'type' => 'color2',
				'title' => __('Button background','lift-pagebuilder'),
				'tab' => 'style',
				'section' => 'Style',
				'clip' => false,
				'depends' => array(array('style', '=', array('custom'))),
				'selector' => '{{SELECTOR}} .wppb-button-addon-content .wppb-btn-custom.wppb-btn-addons'
			),
			'button_hover_bg' => array(
				'type' => 'color2',
				'title' => __('Hover background','lift-pagebuilder'),
				'tab' => 'style',
				'section' => 'Style',
				'clip' => false,
				'depends' => array(array('style', '=', array('custom'))),
				'selector' => '{{SELECTOR}} .wppb-btn-custom.wppb-btn-addons:before'
			),
			'button_border' => array(
				'type' => 'border',
				'title' => 'Border',
				'std' => array(
					'itemOpenBorder'=> 0,
					'borderWidth' => array( 'top' => '2px', 'right' => '2px', 'bottom' => '2px', 'left' => '2px' ), 
					'borderStyle' => 'solid', 
					'borderColor' => '#cccccc'
				),
				'tab' => 'style',
				'section' => 'Border',
				'selector' => '{{SELECTOR}} .wppb-button-addon-content .wppb-btn-addons'
			),
			'button_border_hover' => array(
				'type' => 'border',
				'title' => 'Border hover',
				'std' => array(
					'itemOpenBorder'=> 0,
					'borderWidth' => array( 'top' => '2px', 'right' => '2px', 'bottom' => '2px', 'left' => '2px' ), 
					'borderStyle' => 'solid', 
					'borderColor' => '#cccccc'
				),
				'tab' => 'style',
				'section' => 'Border',
				'selector' => '{{SELECTOR}} .wppb-btn-custom.wppb-btn-addons:hover'
			),
			'button_boxshadow' => array(
				'type' => 'boxshadow',
				'title' => 'Box shadow',
                'std' => array(
                    'shadowValue' => array( 'top' => '0px', 'right' => '0px', 'bottom' => '5px', 'left' => '0px' ),
                    'shadowColor' => 'rgba(0,0,0,.3)'
                ),
				'selector' => '{{SELECTOR}} .wppb-button-addon-content .wppb-btn-addons, {{SELECTOR}} .wppb-btn-custom.wppb-btn-addons:before',
				'section' => 'Box shadow',
				'tab' => 'style',
			),
			'button_boxshadow_hover' => array(
				'type' => 'boxshadow',
				'title' => 'Box shadow hover',
                'std' => array(
                    'shadowValue' => array( 'top' => '0px', 'right' => '0px', 'bottom' => '5px', 'left' => '0px' ),
                    'shadowColor' => 'rgba(0,0,0,.3)'
                ),
				'selector' => '{{SELECTOR}} .wppb-button-addon-content .wppb-btn-addons:hover, {{SELECTOR}} .wppb-btn-custom.wppb-btn-addons:before',
				'section' => 'Box shadow',
				'tab' => 'style',
			),
		);
		return $settings;
	}

	// Button Render HTML
	public function render($data = null){
		$settings 			= $data['settings']; 
		$button_text 		= isset($settings["button_text"]) ? $settings["button_text"] : '';
		$button_link 		= isset($settings['button_link']) ? $settings['button_link'] : array();
		$fullwidth_button 	= isset($settings["fullwidth_button"]) ? $settings["fullwidth_button"] : '';
		$icon_list 			= isset($settings["icon_list"]) ? $settings["icon_list"] : '';
		$icon_position 		= isset($settings["icon_position"]) ? $settings["icon_position"] : '';
		$style 				= isset($settings["style"]) ? $settings["style"] : '';
		$btn_size 			= isset($settings["btn_size"]) ? $settings["btn_size"] : '';
		$shape 				= isset($settings["shape"]) ? $settings["shape"] : '';
		//$appearance 		= isset($settings["appearance"]) ? $settings["appearance"] : '';

		$output = $button = $classlist = '' ;

		$target = ( isset( $button_link['window']) && $button_link['window'] ) ? 'target=_blank' : 'target=_self';
		$nofolow = ( isset( $button_link['nofolow']) && $button_link['nofolow'] ) ? 'rel=nofolow' : "";

		//$classlist .= (isset($appearance) && $appearance) ? ' wppb-btn-' . $appearance : '';
		$classlist .= (isset($style) && $style) ? ' wppb-btn-' . $style : '';
		$classlist .= (isset($shape) && $shape) ? ' wppb-btn-' . $shape : '';
		$classlist .= (isset($btn_size) && $btn_size) ? ' wppb-btn-' . $btn_size : '';
		$classlist .= (isset($fullwidth_button) && $fullwidth_button) ? ' wppb-btn-' . $fullwidth_button : '';

		if($icon_position == 'left') {
			$button = (esc_attr($icon_list)) ? '<i class="' . esc_attr($icon_list) . '"></i> ' . esc_attr($button_text) : esc_attr($button_text);
		} else {
			$button = (esc_attr($icon_list)) ? esc_attr($button_text) . ' <i class="' . esc_attr($icon_list) . '"></i>' : esc_attr($button_text);
		}
		if( $button_link['link'] ){
			$output  .= '<div class="wppb-addon wppb-button-addon">';
				$output  .= '<div class="wppb-button-addon-content">';
					$output  .= '<a '.esc_attr($nofolow).' href="'.esc_url($button_link['link']).'" '.esc_attr($target).' class="wppb-btn-addons '.esc_attr($classlist).'">' . $button  . '</a>';
				$output  .= '</div>';
			$output  .= '</div>';
		}
		return $output;
	}

	// Button Template
	public function getTemplate(){
		$output = '
		<#
		var classList = "";
		classList += " wppb-btn-"+data.style;
		classList += " wppb-btn-"+data.shape;
		// classList += " wppb-btn-"+data.appearance;
		classList += " wppb-btn-"+data.btn_size;
		classList += " wppb-btn-"+data.fullwidth_button;
		#>
		<div class="wppb-addon wppb-button-addon">
			<div class="wppb-button-addon-content">
			<# if( data.button_link && data.button_link.link) { #>
				<a {{ data.button_link && data.button_link.link ? "href="+data.button_link.link : "" }} {{ data.button_link && data.button_link.window ? "target=_blank" : "" }} {{ data.button_link && data.button_link.nofolow ? "rel=nofolow" : "" }} class="wppb-btn-addons {{classList}}">
					<# if(data.icon_position == "left" && !_.isEmpty(data.icon_list)) { #><i class="{{ data.icon_list }}"></i> <# } #>{{ data.button_text }}<# if(data.icon_position == "right" && !_.isEmpty(data.icon_list)) { #> <i class="{{ data.icon_list }}"></i><# } #>
				</a>
			<# } #>
			</div>
		</div>
		';
		return $output;
	}

}