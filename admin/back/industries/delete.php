<?php 
include ("../init.php");
$data = json_decode(file_get_contents("php://input"));
$id = mysql_real_escape_string($data->id);

$qry = 'DELETE FROM industries WHERE id='. $id;
$qry_res = mysql_query($qry);
if ($qry_res) {
    $arr = array('msg' => "User updated Successfully!!! ", 'error' => '');
    $jsn = json_encode($arr);
    print_r($jsn);
} else {
    $arr = array('msg' => "", 'error' => 'Error In update record'.$qry);
    $jsn = json_encode($arr);
    print_r($jsn);
}
?>