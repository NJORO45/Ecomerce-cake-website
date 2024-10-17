<?php
include("db-con.php");
$query = mysqli_query($con,"SELECT * FROM `testimonials`");
$array= array();
while($data = mysqli_fetch_assoc($query)){
	$array[] = $data;
}
echo json_encode($array);
?>