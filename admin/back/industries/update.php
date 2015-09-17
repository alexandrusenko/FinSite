<?php 
include ("../init.php");
$data = json_decode(file_get_contents("php://input"));
$id = mysql_real_escape_string($data->id);
$name = mysql_real_escape_string($data->name);

if ($id == 0) {
    $qry = 'INSERT INTO industries (name) values ("' . $name . '")';
    $qry_res = mysql_query($qry);
    if ($qry_res) {
        $arr = array('msg' => "User Created Successfully!!! aa", 'error' => '');
        $jsn = json_encode($arr);
        print_r($jsn);
    } else {
        $arr = array('msg' => "", 'error' => 'Error In inserting record aa'.$qry);
        $jsn = json_encode($arr);
        print_r($jsn);
    }
} else {
    $qry = 'UPDATE industries set name="' . $name . '" where id='. $id;
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
}
?>