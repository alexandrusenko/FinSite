<?php 
include ("../init.php");
$data = json_decode(file_get_contents("php://input"));
$id = mysql_real_escape_string($data->id);
$ticker = mysql_real_escape_string($data->ticker);
$name = mysql_real_escape_string($data->name);
$industry = mysql_real_escape_string($data->industry);
$ogrn = mysql_real_escape_string($data->ogrn);
 

if ($id == 0) {
    $qry = 'INSERT INTO issuers (name,ticker,industry_id,ogrn) values ("' . $name . '","' . $ticker . '",' . $industry . ',' . $ogrn . ')';
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
    $qry = 'UPDATE issuers set name="' . $name . '", ticker="' . $ticker . '", industry_id=' . $industry . ', ogrn=' . $ogrn . ' where id='. $id;
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