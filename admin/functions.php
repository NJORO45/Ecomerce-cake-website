<?php
session_start();
include('./../php/db-con.php');

function check_login($con)
{//check if user id is set 
	if(isset($_SESSION['session_unid']))
	{
		$session = $_SESSION['session_unid'];
		//create a query to check in data base
		$query = "select * from `adminlogin` where `session` = '$session' limit 1";
		$rs = mysqli_query($con,$query);

		if ($rs && mysqli_num_rows($rs)>0) {
			//fetch data for user from db
			$user_data = mysqli_fetch_assoc($rs);
			return $user_data;
		}



	}
	//redirect to login
	header("location:loginPage.php");
	die;
}
function random_num($length){
	$text ="";
	if ($length<5) {
		$length=5;
	}
	$len=rand(4,$length);
	for ($i=0; $i < $len ; $i++) { 
		$text .= rand(0,9);
	}
	return $text;
}
?>