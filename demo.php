<?php 

// $homepage = json_decode(file_get_contents('http://demo.local:8888/wp-content/plugins/lift-pagebuilder/jsondata/demo.json'));

// preg_match_all('#"(.*?)"#', $homepage, $match);
// var_dump($match);

// foreach ($homepage->data as &$value) {
//     // var_dump($value->rawData[0]->columns);
//     var_dump($value->rawData[0]->columns[0]->addons[0]->settings->upload_image);
//     // echo '<a href="'.$value->banner.'">'.$value->banner.'</a><br>';
// }

$homepage = file_get_contents('http://demo.local:8888/wp-content/plugins/lift-pagebuilder/jsondata/demo.json');
preg_match_all('#\bhttps?://[^,\s()<>]+(?:\([\w\d]+\)|([^,[:punct:]\s]|/))#', $homepage, $match);

foreach ($match[0] as &$value) {
    // echo $value . '<br>';
    echo '<a href="'.$value.'">'.$value.'</a><br>';
}