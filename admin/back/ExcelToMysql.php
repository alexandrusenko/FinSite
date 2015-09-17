<?php

include ("init.php");
$data = json_decode(file_get_contents("php://input"));
$ticker = mysql_real_escape_string($data->ticker);
$file = mysql_real_escape_string($data->filename);
$quarter = mysql_real_escape_string($data->quarter);
$year = mysql_real_escape_string($data->year);

$handle = fopen($file, "r");
while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
        $result = mysql_query("SELECT id FROM indicators where code = ".$data[0],$db);
        $myrow = mysql_fetch_array($result);
        $indicator = $myrow["id"];
        if ($indicator > 0){
            $resultIssuer = mysql_query("SELECT id FROM issuers where ticker = '".$ticker."'",$db);
            $myrowIssuer = mysql_fetch_array($resultIssuer);
            $issuer = $myrowIssuer["id"];
            echo $issuer;
            $r_find = mysql_query("SELECT id FROM qreport where issuer = ".$issuer." and indicator = ".$indicator." and quarter = ".$quarter." and year = ".$year,$db);
            $r_myrow = mysql_fetch_array($r_find);
            $id = $r_myrow["id"];
            if ($id == 0){
                $qry = "INSERT INTO qreport (issuer, indicator, value, quarter, year) VALUES (".$issuer.",".$indicator.", ".$data[1].", ".$quarter.", ".$year.")";
                $qry_res = mysql_query($qry);
            }else{
                $qry = "UPDATE qreport SET value=".$data[1]." where id=".$id;
                $qry_res = mysql_query($qry);
            }
        }
        
}
echo 'Все заебись!';   
fclose($handle);  
?>
