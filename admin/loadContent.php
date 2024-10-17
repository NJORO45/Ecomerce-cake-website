 <?php
 session_start();
include('../php/db-con.php');
include('../php/functions.php');
 if(isset($_POST['getData'])){
	$array=array();
	$array2=array();
	//get all data from  product-items table`
	$getQuery = mysqli_query($con,"SELECT * FROM `product-items` WHERE `hotDeals`='hotdeals'");
	if(mysqli_num_rows($getQuery)>0){
		//return results
		while($data=mysqli_fetch_array($getQuery)){
			$array[]=$data;
		}
	}
	$getQuery2 = mysqli_query($con,"SELECT * FROM `product-items` WHERE `hotDeals`!='hotDeals'");
	if(mysqli_num_rows($getQuery2)>0){
		//return results
		while($data2=mysqli_fetch_array($getQuery2)){
			$array2[]=$data2;
		}
	}
		$setData= array(
	   "special"=>$array,
	   "ordinary"=>$array2
	);
	$sentData =json_encode($setData);
	echo $sentData;
	
}
if(isset($_POST['checkRow'])){
	
	$getQuery = mysqli_query($con,"SELECT * FROM `product-items`");
	if($getQuery){
		$datta = mysqli_num_rows($getQuery);
	}
	$count = array(
	 "count"=>$datta
	);
	$count =json_encode($count);
	echo $count;
}
 ?>