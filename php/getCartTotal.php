<?php
include('db-con.php');
$query = mysqli_query($con,"SELECT * from `shopping-cart`");
$rs = mysqli_num_rows($query);
echo $rs;
?>