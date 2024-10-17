<?php
session_start();
include('db-con.php');
$query = mysqli_query($con,"SELECT * FROM `` WHERE `cart-unid`= '' and `checkoutState`=''");
?>