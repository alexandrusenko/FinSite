<?php 
include ("../init.php");
$id = $_GET['id'];
if ($id == 0){
	$result = mysql_query("SELECT a.id, a.ticker, a.name , b.name as industry, a.ogrn FROM issuers a, industries b where a.industry_id = b.id",$db);
}else{
	$result = mysql_query("SELECT a.id, a.ticker, a.name ,a.industry_id as industry, a.ogrn FROM issuers a where a.id = $id",$db);
}
$myrow = mysql_fetch_array($result);
do
{
	$m_id = $myrow["id"];
	$m_ticker = $myrow["ticker"];
	$m_name = $myrow["name"];
	$m_industry = $myrow["industry"];
	$m_ogrn = $myrow["ogrn"];

	$node[] = array("id" => $m_id, "ticker" => $m_ticker, "name" => $m_name, "industry" => $m_industry, "ogrn" => $m_ogrn);	
}
while($myrow = mysql_fetch_array($result));
echo  json_encode($node);

?>