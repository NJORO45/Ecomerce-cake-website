<?php
include('db-con.php');
if(isset($_POST['addtocart'])){

	$price= mysqli_real_escape_string($con,$_POST['price']);
	$qnty=mysqli_real_escape_string($con,$_POST['qnty']);
	$color =mysqli_real_escape_string($con,$_POST['color']);
	$name = mysqli_real_escape_string($con,$_POST['name']);

	//insert to database
	$query = mysqli_query($con,"INSERT INTO `add-to-cart`(`price`,`qnty`,`color`,`name`) VALUES ('$price','$qnty','$color','$name')");
	if($query){
		echo "data inserted to db";
	}else{
		echo "not inerted";
	}
	$query2 = mysqli_query($con,"SELECT * FROM `add-to-cart`");
if($query2){
	$output =mysqli_num_rows($query2);
}
$data =array(
	'notification' => $output,
);
echo json_encode($data);
}
?>