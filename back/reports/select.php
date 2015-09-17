<?php 
include ("../init.php");
$id = $_GET['id'];
if ($id == 0){
	$result = mysql_query("SELECT a.id, c.name as issuer, b.name as indicator, a.quarter, a.year, a.value   
						   FROM qreport a, indicators b, issuers c 
						   where a.issuer = c.id and a.indicator = b.id",$db);
}else{
	$result = mysql_query("SELECT a.id, a.ticker, a.name ,a.industry_id as industry, a.ogrn FROM issuers a where a.id = $id",$db);
}
$myrow = mysql_fetch_array($result);
do
{
	$m_id = $myrow["id"];
	$m_issuer = $myrow["issuer"];
	$m_indicatore = $myrow["indicator"];
	$m_quarter = $myrow["quarter"];
	$m_year = $myrow["year"];
	$m_value = $myrow["value"];

	$node[] = array("id" => $m_id, 
					"issuer" => $m_issuer, 
					"indicator" => $m_indicatore, 
					"quarter" => $m_quarter, 
					"year" => $m_year,
					"value" => $m_value);	
}
while($myrow = mysql_fetch_array($result));
echo  json_encode($node);

?>