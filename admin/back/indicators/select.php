<?php 
include ("../init.php");
$id = $_GET['id'];
if ($id == 0){
	$result = mysql_query("SELECT id, name, code FROM indicators",$db);
}else{
	$result = mysql_query("SELECT id, name, code FROM indicators where id = $id",$db);
}
$myrow = mysql_fetch_array($result);
do
{
	$m_id = $myrow["id"];
	$m_name = $myrow["name"];
	$m_code = $myrow["code"];
	$node[] = array("id" => $m_id, "name" => $m_name, "code" => $m_code);	
}
while($myrow = mysql_fetch_array($result));
echo  json_encode($node);
?>