<?php
$ref = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';
$file = 'demo.txt';
$current = file_get_contents($file);
$current .= $ref ."\n";
file_put_contents($file, $current);
?>