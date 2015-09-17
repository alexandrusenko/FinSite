<?php 
include ("../init.php");
$id = $_GET['id'];
if ($id == 0){
	$result = mysql_query("SELECT id, name FROM industries",$db);
}else{
	$result = mysql_query("SELECT id, name FROM industries where id = $id",$db);
}
$myrow = mysql_fetch_array($result);
do
{
	$m_id = $myrow["id"];
	$m_name = $myrow["name"];
	$node[] = array("id" => $m_id, "name" => $m_name);	
}
while($myrow = mysql_fetch_array($result));
echo  json_encode($node);
?>