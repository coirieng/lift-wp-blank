<?php 

// $homepage = json_decode(file_get_contents('http://demo.local:8888/wp-content/plugins/lift-pagebuilder/jsondata/block.json'));
// foreach ($homepage->data as &$value) {
//     echo '<a href="'.$value->banner.'">'.$value->banner.'</a><br>';
// }

$homepage = file_get_contents('http://demo.local:8888/wp-content/plugins/lift-pagebuilder/jsondata/layout.json');
preg_match_all('#\bhttps?://[^,\s()<>]+(?:\([\w\d]+\)|([^,[:punct:]\s]|/))#', $homepage, $match);

foreach ($match[0] as &$value) {
    // echo $value . '<br>';
    echo '<a href="'.$value.'">'.$value.'</a><br>';
}