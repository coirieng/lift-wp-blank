<?php 

// $homepage = json_decode(file_get_contents('http://demo.local:8888/wp-content/plugins/lift-pagebuilder/jsondata/demo.json'));

// preg_match_all('#"(.*?)"#', $homepage, $match);
// var_dump($match);

// foreach ($homepage->data as &$value) {
//     // var_dump($value->rawData[0]->columns);
//     var_dump($value->rawData[0]->columns[0]->addons[0]->settings->upload_image);
//     // echo '<a href="'.$value->banner.'">'.$value->banner.'</a><br>';
// }

$homepage = file_get_contents('http://demo.local:8888/wp-content/plugins/lift-pagebuilder/jsondata/layout/layout-1.json');
$homepage .= file_get_contents('http://demo.local:8888/wp-content/plugins/lift-pagebuilder/jsondata/layout/layout-2.json');
$homepage .= file_get_contents('http://demo.local:8888/wp-content/plugins/lift-pagebuilder/jsondata/layout/layout-3.json');
$homepage .= file_get_contents('http://demo.local:8888/wp-content/plugins/lift-pagebuilder/jsondata/layout/layout-4.json');
$homepage .= file_get_contents('http://demo.local:8888/wp-content/plugins/lift-pagebuilder/jsondata/layout/layout-5.json');
$homepage .= file_get_contents('http://demo.local:8888/wp-content/plugins/lift-pagebuilder/jsondata/layout/layout-6.json');
$homepage .= file_get_contents('http://demo.local:8888/wp-content/plugins/lift-pagebuilder/jsondata/layout/layout-7.json');
$homepage .= file_get_contents('http://demo.local:8888/wp-content/plugins/lift-pagebuilder/jsondata/layout/layout-8.json');
$homepage .= file_get_contents('http://demo.local:8888/wp-content/plugins/lift-pagebuilder/jsondata/layout/layout-9.json');
$homepage .= file_get_contents('http://demo.local:8888/wp-content/plugins/lift-pagebuilder/jsondata/layout/layout-10.json');
$homepage .= file_get_contents('http://demo.local:8888/wp-content/plugins/lift-pagebuilder/jsondata/layout/layout-11.json');
$homepage .= file_get_contents('http://demo.local:8888/wp-content/plugins/lift-pagebuilder/jsondata/layout/layout-12.json');
$homepage .= file_get_contents('http://demo.local:8888/wp-content/plugins/lift-pagebuilder/jsondata/layout/layout-13.json');
$homepage .= file_get_contents('http://demo.local:8888/wp-content/plugins/lift-pagebuilder/jsondata/layout/layout-14.json');
$homepage .= file_get_contents('http://demo.local:8888/wp-content/plugins/lift-pagebuilder/jsondata/layout/layout-15.json');
preg_match_all('#\bhttps?://[^,\s()<>]+(?:\([\w\d]+\)|([^,[:punct:]\s]|/))#', str_replace("\/", "/", $homepage), $match);

// var_dump(str_replace("\/", "/", $homepage));

foreach ($match[0] as &$value) {
    // echo $value . '<br>';
    echo '<a href="'.$value.'">'.$value.'</a><br>';
}