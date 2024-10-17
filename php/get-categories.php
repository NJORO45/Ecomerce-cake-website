<?php
session_start();
include('db-con.php');
if(isset($_POST['getCategory'])){
	//get categories to db
	$urlExtr = mysqli_real_escape_string($con,$_POST['urlExtr2']);
	$query = mysqli_query($con,"SELECT * FROM `product-items` WHERE `category`='$urlExtr' AND `hotDeals`='ordinary'");
    $array =array();
	while($data = mysqli_fetch_array($query)){
		$array[] = $data;
	}
	$setData= array(
	   "dataFetch"=>$array
	);
	$sentData =json_encode($array);
	echo $sentData;
}
?>