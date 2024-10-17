<?php
include('../php/db-con.php');
session_start();
$userId=$_SESSION['unid'];
$array=array();
//get data from data base
$query = mysqli_query($con,"SELECT * FROM `order_history` WHERE `user_unid`='$userId' ORDER BY `order_date` DESC");
while($data = mysqli_fetch_array($query)){
	$array[]=$data;
}
echo json_encode($array);
?>