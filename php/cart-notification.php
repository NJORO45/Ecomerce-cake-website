<?php
include("db-con.php");

$query = mysqli_query($con,"SELECT * FROM `add-to-cart`");
if($query){
	$output =mysqli_num_rows($query);
}
$data =array(
	'notification' => $output,
);
echo json_encode($data);
?>