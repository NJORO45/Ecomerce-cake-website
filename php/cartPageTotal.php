<?php
session_start();
include('db-con.php');
$arraay = array();
$array;
$unid = $_SESSION['unid'];
$totalQuery = mysqli_query($con,"SELECT * from `shopping-cart` WHERE `user_unid` = '$unid' AND `checkoutState`='false'");
$cartQuery = mysqli_query($con,"SELECT * from `shopping-cart`WHERE `user_unid` = '$unid' AND `checkoutState`='false'");
//$data = mysqli_fetch_array($cartQuery);
$rs = mysqli_num_rows($totalQuery);
//sum total price column
$totalprice = mysqli_query($con,"SELECT SUM(TotalPrice) as total FROM `shopping-cart` WHERE `user_unid` = '$unid' AND `checkoutState`='false'");
$ro = mysqli_fetch_assoc($totalprice);

//$data = mysqli_fetch_assoc($cartQuery)
while($data = mysqli_fetch_array($cartQuery)){
//$arraay=$data;
 /*$array=array(
   'pric'=>$data['item-unid'],
 );*/
 $arraay []= $data;
 //echo $array;
}
//echo json_encode($arraay);


$array = array(
	          "totalQuery"=>$rs,
			  "totalPrice"=>$ro['total'],
		      "cartQuery"=>$arraay
	          );
	   $json = json_encode($array);
	   echo $json;

?>