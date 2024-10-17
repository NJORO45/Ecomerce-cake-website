 <?php
session_start();
include('./../php/db-con.php');
 if(isset($_POST['logoutState'])){
	 $session = $_SESSION['session_unid'];
	 $msg='';
	 $query = mysqli_query($con,"UPDATE `adminlogin` SET `session`='' WHERE `session` = '$session'");
	 if($query){
		session_destroy();
         $msg="success";		
	 }else{
		 $msg="logoutError";
	 }
	 echo json_encode($msg);
 }
 ?>