<?php
$xml = simplexml_load_file('XMLMarkers.xml');
   	$index1 = 0;
	$index2 = 0;
	$c = array();
   foreach($xml->marker as $item)
		{
			foreach($item->lat as $item2)
			{
				$c[$index1]["lengte"] = (string)$item2->lengte;
				$index1++;
			}
			foreach($item->long as $item3)
			{
				
				$c[$index2]["breedte"] = (string)$item2->breedte;
				$index2++;
			}
			
		}
		print json_encode($c);
 ?>  