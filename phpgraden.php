<?php
$ajax_var1 = $_POST['later'];
$ajax_var2 = $_POST['longer'];
$xml2 = simplexml_load_file('XMLMarkers.xml');
$xy = $xml2-> addChild ('marker');
$xy -> addAttribute ('lat',$ajax_var1);
$xy -> addAttribute ('long',$ajax_var2);
file_put_contents('XMLMarkers.xml',$xml2->asXML());
?>