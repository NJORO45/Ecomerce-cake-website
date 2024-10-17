 <?php
include('./../php/db-con.php');
include('functions.php');
const BASE_PATH = __DIR__.'../../';
require BASE_PATH.'/vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
 use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
// use PhpOffice\PhpSpreadsheet\Writer\Xls;
// use PhpOffice\PhpSpreadsheet\Writer\Csv; 
use PhpOffice\PhpSpreadsheet\IOFactory;
use phpexport\export;

 $export = new export();
 //check if user exists
 
 if(isset($_POST['usercheck'])){
	 $msg='';
	 $userName = mysqli_real_escape_string($con,$_POST['username']);
	 $query = mysqli_query($con,"select * from `adminlogin` where `userName`='$userName' ");
	 if(mysqli_num_rows($query)==1){
		  $msg="userfound";
	 }else{
		 $msg="notfound";
	 }
	 echo json_encode($msg);
 }
 //check password
  if(isset($_POST['passwordcheck'])){
	 $msg='';
	 $username = mysqli_real_escape_string($con,$_POST['username']);
	 $Password = mysqli_real_escape_string($con,$_POST['Password']);
	 $query = mysqli_query($con,"select * from `adminlogin` where `userName`='$username' ");
	 if(mysqli_num_rows($query)==1){
		  $data=mysqli_fetch_assoc($query);
		  if($data['password']==$Password){
			  $msg="correctPassword";
		  }else{
			  $msg="incorrectPassword";
		  }
	 }else{
		 $msg="notfound";
	 }
	 echo json_encode($msg);
 }
 
 if(isset($_POST['loginData'])){
	$userName=mysqli_real_escape_string($con,$_POST['username']);
	$Password=mysqli_real_escape_string($con,$_POST['Password']);
	$query= mysqli_query($con,"SELECT * FROM `adminlogin` WHERE `userName`='$userName'");
	$msg='';
	 if(mysqli_num_rows($query)==1){
		  $data=mysqli_fetch_assoc($query);
		  if($data['password']==$Password){
			 //set session
			 $_SESSION['session_unid']=random_num(6);
			 $user = $data['userName'];
			 $session= $_SESSION['session_unid'];
			 $query=mysqli_query($con,"UPDATE `adminlogin` SET `session`='$session' WHERE `userName`='$user'");
			 if($query){
				 $msg = "loginSuccess";
			 }
			 
		  }else{
			  //dont set sesson
			  $_SESSION['session_unid']='';
			  $msg =  "loginError";
		  }
	 }else{
		 $msg="notfound";
	 }
	 echo json_encode($msg);
 }
 
if(isset($_POST['Confirmorder'])){
	$cartunid=mysqli_real_escape_string($con,$_POST['cartunid']);
	$msg='';
	$copyQuery = mysqli_query($con,"INSERT INTO `pending orders` SELECT * FROM `new orders` WHERE `cart_unid`='$cartunid'");
	if($copyQuery){
		$deleteQuery=mysqli_query($con,"DELETE FROM `new orders` WHERE `cart_unid`='$cartunid'");
		if($deleteQuery){
			$msg= "orderConfirmed";
		}
	}else{
		$msg= "error ocured conriming order";
	}
	echo json_encode($msg);
}
if(isset($_POST['Cancelorder'])){
	$cartunid=mysqli_real_escape_string($con,$_POST['cartunid']);
	$msg='';
	$copyQuery = mysqli_query($con,"INSERT INTO `canceled orders` SELECT * FROM `new orders` WHERE `cart_unid`='$cartunid'");
	if($copyQuery){
		$deleteQuery=mysqli_query($con,"DELETE FROM `new orders` WHERE `cart_unid`='$cartunid'");
		if($deleteQuery){
			$msg= "orderCanceled";
		}
	}else{
		$msg= "error ocured conriming order";
	}
	echo json_encode($msg);
}

if (isset($_POST['exportBtn'])) {
	$table = mysqli_real_escape_string($con,$_POST['select']);

	echo json_encode($export->getData($con,$table));
}

 ?>