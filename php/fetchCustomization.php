<?php
include("db-con.php");
session_start();

if(isset($_POST['itemUnid'])){
	$array=array();
	$itemUnid = mysqli_real_escape_string($con,$_POST['itemUnid']);
	//query database
	$query = mysqli_query($con,"SELECT * FROM `product-items` WHERE `unid`='$itemUnid' ");
	$array[]=mysqli_fetch_array($query);
	echo json_encode($array);
}

if(isset($_POST['unid'])){
	$unid = mysqli_real_escape_string($con,$_POST['unid']);
	$color = mysqli_real_escape_string($con,$_POST['color']);
	$name = mysqli_real_escape_string($con,$_POST['name']);
	$price = mysqli_real_escape_string($con,$_POST['price']);
	$qnty = mysqli_real_escape_string($con,$_POST['qnty']);
	$hotDeals = mysqli_real_escape_string($con,$_POST['hotDeals']);
	$category = mysqli_query($con,"SELECT * FROM `product-items` WHERE `unid`='$unid' ");
	if($category){
		$data= mysqli_fetch_assoc($category);
		$Category= $data['category'];
		$cartUnid=$_SESSION['unid'];
		$tprice = $price/$qnty;
		//check if it exists and delet
		$check = mysqli_query($con,"SELECT * FROM `shopping-cart` WHERE `item-unid`='$unid' AND `checkoutState`='false'");
		if(mysqli_num_rows($check)>0){
			//delete
			$delete = mysqli_query($con,"DELETE FROM `shopping-cart` WHERE `item-unid`='$unid' AND `checkoutState`='false'");
			if($delete){
				$query= mysqli_query($con,"INSERT INTO `shopping-cart` (`Deals`, `category`, `cart-unid`, `item-unid`, `description`, `name`, `color`, `price`, `qnty`, `TotalPrice`, `checkoutState`)VALUES('$hotDeals','$Category','$cartUnid','$unid','','$name','$color','$tprice','$qnty','$price','false')");
		        if($query){
			        echo "success";
		        }else{
			        echo "error";
		        }
			}
		}else{
				$query= mysqli_query($con,"INSERT INTO `shopping-cart` (`Deals`, `category`, `cart-unid`, `item-unid`, `description`, `name`, `color`, `price`, `qnty`, `TotalPrice`, `checkoutState`)VALUES('$hotDeals','$Category','$cartUnid','$unid','','$name','$color','$tprice','$qnty','$price','false')");
		        if($query){
			        echo "success";
		        }else{
			        echo "error";
		        }
		}
		
	}
	
}
?>