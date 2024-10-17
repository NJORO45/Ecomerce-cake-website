<?php
include('db-con.php');
session_start();
///query database

global $con;
//get special category
$query = mysqli_query($con,"SELECT * FROM `product-items` WHERE `hotDeals`='hotDeals'");
$specialOffer=array();
while($data = mysqli_fetch_array($query)){
	$specialOffer[]=$data;
}
/*//get category
$query2 = mysqli_query($con,"SELECT * FROM `product-items` WHERE `hotDeals`=' '");
$category=array();
while($data2 = mysqli_fetch_array($query2)){
	$category[]=$data2;
}
$fetchedData = array(
     "specialOffer"=>$specialOffer,
	 "category"=>$category
);
echo json_encode($fetchedData);
*/
echo json_encode($specialOffer);
?>