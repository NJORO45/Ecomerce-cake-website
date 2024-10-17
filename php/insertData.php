<?php 
session_start();
include('db-con.php');
const BASE_PATH = __DIR__.'../../';
require BASE_PATH.'/vendor/autoload.php';
//require __DIR__ .'/vendor/autoload.php';
use BNjunge\Pesapal;
use Dotenv\Dotenv;
include('functions.php');

$dotenv = Dotenv::createImmutable(__DIR__. '../../');
$dotenv->load();



if(isset($_POST['login'])){
	$email = mysqli_real_escape_string($con, $_POST['email']);
	$loginpassword = mysqli_real_escape_string($con,$_POST['loginpassword']);
	//$unid='1234';
	
	$pass_error='';
	//check if email exists
	$email_query = mysqli_query($con,"SELECT * FROM `login-table` WHERE  `email` = '$email'");
	if(mysqli_num_rows($email_query)==1){
		//check password
		$checkpass= mysqli_fetch_assoc($email_query);
		$queried_pass=$checkpass['pwwd'];
		if($loginpassword==$queried_pass){
			$pass_error='true';
			$_SESSION['unid']=$checkpass['unid'];
			
			  $array = array(
	          "pass_error"=>$pass_error,
		      "session"=>$_SESSION['unid']
	          );
	          $json = json_encode($array);
	          echo $json;
			
		}else{
			$pass_error='false';
			$array = array(
	          "pass_error"=>$pass_error,
		      "session"=>''
	          );
	          $json = json_encode($array);
	          echo $json;
		}
		
	}else{
		$pass_error='email not found';
			$array = array(
	          "pass_error"=>$pass_error,
		      "session"=>''
	          );
	          $json = json_encode($array);
	          echo $json;
	}
	
}

if(isset($_POST['registration'])){
	$unid = random_num(10);	
	$email = mysqli_real_escape_string($con,$_POST['email']);
	$registerphone = mysqli_real_escape_string($con,$_POST['registerphone']);
	$loginpassword = mysqli_real_escape_string($con,$_POST['registerconfirmPassword']);
	$query = mysqli_query($con,"INSERT INTO `login-table`(`unid`, `email`, `tel`, `pwwd`, `session`)VALUES('$unid','$email','$registerphone','$loginpassword','')");
	if($query){
		//set session
		$queryUnid = mysqli_query($con,"SELECT * FROM `login-table` WHERE `email`='$email'");
		if($queryUnid){
			$unidQuery = mysqli_fetch_assoc($queryUnid);
			$_SESSION['unid'] = $unidQuery['unid'];
		}
		echo "registered";
	}else{
		echo "registation error";
	}
	
}
if(isset($_POST['regEmail'])){
	$regEmail = mysqli_real_escape_string($con,$_POST['regEmail']);
	//chek if email exists
	$query = mysqli_query($con,"SELECT * FROM `login-table` WHERE `email`='$regEmail'");
	if(mysqli_num_rows($query)>0){
		//email exists
		echo "exists";
	}else if(mysqli_num_rows($query)==0){
		//email does not exist
		echo "doesnt exist";
	}
	
}
if(isset($_POST['getLocalstorage'])){
	
	
	$email = mysqli_real_escape_string($con,$_POST['email']);
	$itemunid = mysqli_real_escape_string($con,$_POST['unid']);
	$category = mysqli_real_escape_string($con,$_POST['category']);
	$hotdeals = mysqli_real_escape_string($con,$_POST['hotdeals']);
	$description = mysqli_real_escape_string($con,$_POST['description']);
	$price = mysqli_real_escape_string($con,$_POST['price']);
	$qnty = mysqli_real_escape_string($con,$_POST['qnty']);
	$TotalPrice = mysqli_real_escape_string($con,$_POST['TotalPrice']);
	$imageQuery = mysqli_query($con,"SELECT `image` FROM `product-items` WHERE `unid` = '$itemunid' ");
	$imgdata=mysqli_fetch_assoc($imageQuery);
	$image=$imgdata['image'];
	//get user unid
	$userQuery = mysqli_query($con,"SELECT `unid` FROM `login-table` WHERE `email` = '$email' ");
	if(mysqli_num_rows($userQuery)==1){
		$data = mysqli_fetch_assoc($userQuery);
			//get user unid 
			$userId=$data['unid'];
			
			//check if item exists
			$itemquery = mysqli_query($con,"SELECT * FROM `shopping-cart` WHERE `user_unid`='$userId' AND `item-unid` = '$itemunid' AND `checkoutState`='false'");
			if(mysqli_num_rows($itemquery)>0){
				//update that colum
				//get data 
				$indata= mysqli_fetch_assoc($itemquery);
				//compute it 
				$inqnty =$indata['qnty'];
				$intotal =$indata['TotalPrice'];
				$newqnty = $qnty + $inqnty;
				$newprice = $price * $newqnty;
				
					//insert data to cart table`
			    $query =mysqli_query($con,"UPDATE `shopping-cart` SET `qnty`='$newqnty',`TotalPrice`='$newprice' WHERE `user_unid` = '$userId' AND `item-unid`='$itemunid'  AND `checkoutState`='false' ");
	            echo $query;
			}else if((mysqli_num_rows($itemquery)==0)){
				//insert data to cart table`
				$cartUnid = random_num(8);
			$query =mysqli_query($con,"INSERT INTO `shopping-cart`(`Deals`,`category`,`cart-unid`, `user_unid`,`item-unid`, `description`, `name`,`color`,`price`, `qnty`,`TotalPrice`,`image`,`checkoutState`) VALUES('$hotdeals','$category','$cartUnid','$userId','$itemunid','$description','','','$price','$qnty','$TotalPrice','$image','false')");
	        echo $query;
			}
			
		
	}else{
		echo "localstorage error";
	}
	
}
if(isset($_POST['customization'])){
	$userid =$_SESSION['unid'];
	$itemUnid = mysqli_real_escape_string($con,$_POST['itemUnid']);
	$category = mysqli_real_escape_string($con,$_POST['category']);
	$description = mysqli_real_escape_string($con,$_POST['description']);
	$hotDeals = mysqli_real_escape_string($con,$_POST['hotDeals']);
	$qnty = mysqli_real_escape_string($con,$_POST['qnty']);
	$price = mysqli_real_escape_string($con,$_POST['price']);
	$totalPrice = mysqli_real_escape_string($con,$_POST['totalPrice']);
	$name = mysqli_real_escape_string($con,$_POST['name']);
	$color = mysqli_real_escape_string($con,$_POST['color']);
	//check if item exists in cart
	
				
					//check if item exists
			$itemquery = mysqli_query($con,"SELECT * FROM `shopping-cart` WHERE `user_unid`='$userid' AND `item-unid` = '$itemUnid' AND  `checkoutState` = 'false'");
			if(mysqli_num_rows($itemquery)>0){
				//echo "exist";	
				//update that colum
			    $query =mysqli_query($con,"UPDATE `shopping-cart` SET `qnty`='$qnty',`TotalPrice`='$price',`name`='$name',`color`='$color'  WHERE `user_unid`='$userid'  AND `item-unid`='$itemUnid' AND `checkoutState`='false' ");
	            echo "success";
			}else{
				//insert data to cart table`
				$cartUnid = random_num(8);
				$imageQuery = mysqli_query($con,"SELECT `image` FROM `product-items` WHERE `unid` = '$itemUnid' ");
	            $imgdata=mysqli_fetch_assoc($imageQuery);
	            $image=$imgdata['image'];
	
			$query =mysqli_query($con,"insert into `shopping-cart`(`Deals`,`category`,`cart-unid`,`user_unid`, `item-unid`, `description`, `name`,`color`,`price`, `qnty`,`TotalPrice`,`image`,`checkoutState`) VALUES('$hotDeals','$category','$cartUnid','$userid','$itemUnid','$description','$name','$color','$price','$qnty','$totalPrice','$image','false')");
	        echo "success";
			}
				
			
}
if(isset($_POST['addCart'])){
	$itemUnid = mysqli_real_escape_string($con,$_POST['itemUnid']);
	$price = mysqli_real_escape_string($con,$_POST['price']);
	$qnty = mysqli_real_escape_string($con,$_POST['Qnty']);
	$category = mysqli_real_escape_string($con,$_POST['category']);
	$description = mysqli_real_escape_string($con,$_POST['description']);
	$hotdeals = mysqli_real_escape_string($con,$_POST['hotdeals']);

	$TotalPrice = $price * ($qnty/$qnty);
	
	
	$checkoutState = mysqli_real_escape_string($con,$_POST['checkoutState']);
	$userid =$_SESSION['unid'];
	$cartUnid='';
	//check if item exists in cart
	$userQuery = mysqli_query($con,"SELECT `unid` FROM `login-table` WHERE `unid` = '$userid' ");
	$originalQntyQuery = mysqli_query($con,"SELECT * FROM `product-items` WHERE  `unid` = '$itemUnid'");
			if($originalQntyQuery){
               $origQnty = mysqli_fetch_assoc($originalQntyQuery);
			}

	if(mysqli_num_rows($userQuery)==1){
		$imageQuery = mysqli_query($con,"SELECT `image` FROM `product-items` WHERE `unid` = '$itemUnid' ");
	$imgdata=mysqli_fetch_assoc($imageQuery);
	$image=$imgdata['image'];
	
		//chek if item still exists
		$itemExistQuery = mysqli_query($con,"SELECT `unid` FROM `product-items` WHERE `unid`='$itemUnid'");
		if(mysqli_num_rows($itemExistQuery)==1){
			$data = mysqli_fetch_assoc($userQuery);
			//get user unid 
			$userId=$data['unid'];
			//check if cart unid exists
			$cartUnidquery = mysqli_query($con,"SELECT * FROM `shopping-cart` WHERE  `user_unid` = '$userid' AND  `checkoutState` = 'false'");
			if(mysqli_num_rows($cartUnidquery)>0){
				//cart is not empty so get the cart unid and use it 
				$cartUnidQuery = mysqli_fetch_assoc($cartUnidquery);
				$cartunid = $cartUnidQuery['cart-unid'];
					//check if item exists
			
			$itemquery = mysqli_query($con,"SELECT * FROM `shopping-cart` WHERE `user_unid`='$userid' AND `item-unid` = '$itemUnid' AND  `checkoutState` = 'false'");
			if(mysqli_num_rows($itemquery)>0){
				//echo "exist";	
				//update that colum
				//get data 
				$indata= mysqli_fetch_assoc($itemquery);
				//compute it 
				$inqnty =$indata['qnty'];
				$intotal =$indata['TotalPrice'];
				
				$newqnty = $qnty + $inqnty;
				$newprice = $price * ($newqnty/$origQnty['qnty']);
					//insert data to cart table`
			    $query =mysqli_query($con,"UPDATE `shopping-cart` SET `qnty`='$newqnty',`TotalPrice`='$newprice' WHERE `user_unid`='$userid'  AND `item-unid`='$itemUnid' AND `checkoutState`='false' ");
	            echo "exist";
			}else{
				//insert data to cart table`
			$query =mysqli_query($con,"insert into `shopping-cart`(`Deals`,`category`,`cart-unid`,`user_unid`, `item-unid`, `description`, `name`,`color`,`price`, `qnty`,`TotalPrice`,`image`,`checkoutState`) VALUES('$hotdeals','$category','$cartunid','$userId','$itemUnid','$description','','','$price','$qnty','$TotalPrice','$image','false')");
	        echo "does not exist";
			}
				
			}else{
				//cart is empty so generate new cart unidQuery
				$cartUnid = random_num(8);
				//check if item exists
			$itemquery = mysqli_query($con,"SELECT * FROM `shopping-cart` WHERE `user_unid`='$userid' AND `item-unid` = '$itemUnid' AND  `checkoutState` = 'false'");
			if(mysqli_num_rows($itemquery)>0){
				//	
				//update that colum
				//get data 
				$indata= mysqli_fetch_assoc($itemquery);
				//compute it 
				$inqnty =$indata['qnty'];
				$intotal =$indata['TotalPrice'];
				$newprice = $price +$intotal;
				$newqnty = $qnty + $inqnty;
					//insert data to cart table`
			    $query =mysqli_query($con,"UPDATE `shopping-cart` SET `qnty`='$newqnty',`TotalPrice`='$newprice' WHERE `user_unid`='$userid'  AND `item-unid`='$itemUnid' AND `checkoutState`='false' ");
	            echo "exist";
			}else{
				//insert data to cart table`
			$query =mysqli_query($con,"insert into `shopping-cart`(`Deals`,`category`,`cart-unid`,`user_unid`, `item-unid`, `description`, `name`,`color`,`price`, `qnty`,`TotalPrice`,`image`,`checkoutState`) VALUES('$hotdeals','$category','$cartUnid ','$userId','$itemUnid','$description','','','$price','$qnty','$TotalPrice','$image','false')");
	        echo "does not exist";
			}
			
		
	}
		}else{
			echo "not found";
		}
		
		
   }
}
	


if(isset($_POST['updateCartMinus'])){
	$itemUnid = mysqli_real_escape_string($con,$_POST['unid']);
	$price = mysqli_real_escape_string($con,$_POST['price']);
	$qnty = mysqli_real_escape_string($con,$_POST['qnty']);
	$userid =$_SESSION['unid'];
	
	//ceck $_SESSION['unid'] in cart
	$checkQuery = mysqli_query($con,"SELECT * FROM `shopping-cart` WHERE `user_unid` = '$userid' AND `item-unid`='$itemUnid' AND `checkoutState`='false'");
	$qntyQueryy = mysqli_query($con,"SELECT * FROM `product-items` WHERE  `unid`='$itemUnid' ");
	$qntyy=mysqli_fetch_assoc($qntyQueryy);
	$qntyQuery=$qntyy['qnty'];
	
	if(mysqli_num_rows($checkQuery)>0){
		//get data
		$pulRequest = mysqli_fetch_assoc($checkQuery);
		$oldqnty = $pulRequest['qnty'];
		$oldtotalprice = $pulRequest['TotalPrice'];
		//echo  $pulRequest['qnty'];
		//compute
		
		if($oldqnty==$qntyQuery){
			//don't update
			echo "min val";
		}else if($oldqnty > $qntyQuery){
			$newQnty= $oldqnty - $qntyQuery;
		    $netTotalPrice =  ($newQnty/$qntyQuery) * $price;
		 	//echo  $netTotalPrice;
		    //update
		    $updateQuery=mysqli_query($con,"UPDATE `shopping-cart` SET `qnty`='$newQnty',`TotalPrice`='$netTotalPrice' WHERE `user_unid` = '$userid' AND `item-unid`='$itemUnid' AND `checkoutState`='false'");
			if($updateQuery){
				echo "success";
			}else{
				echo "errorUpdating";
			}
			
		}
		
		
		
	}else{
		echo "iten not set";
	}
}
if(isset($_POST['updateCartPlus'])){
	$itemUnid = mysqli_real_escape_string($con,$_POST['unid']);
	$price = mysqli_real_escape_string($con,$_POST['price']);//dont use
	$qnty = mysqli_real_escape_string($con,$_POST['qnty']);//dont use
	$userid =$_SESSION['unid'];
	//ceck $_SESSION['unid'] in cart
	$checkQuery = mysqli_query($con,"SELECT * FROM `shopping-cart` WHERE `user_unid` = '$userid' AND `item-unid`='$itemUnid' AND `checkoutState`='false'");
	$qntyQueryy = mysqli_query($con,"SELECT * FROM `product-items` WHERE  `unid`='$itemUnid' ");
	$qntyy=mysqli_fetch_assoc($qntyQueryy);
	$qntyQuery=$qntyy['qnty'];
	$priceQuery=$qntyy['price'];
	$originalQntyQuery = mysqli_query($con,"SELECT * FROM `product-items` WHERE  `unid` = '$itemUnid'");
			if($originalQntyQuery){
               $origQnty = mysqli_fetch_assoc($originalQntyQuery);
			}

	if(mysqli_num_rows($checkQuery)>0){
		//get data
		$pulRequest = mysqli_fetch_assoc($checkQuery);
		$oldqnty = $pulRequest['qnty'];
		$oldtotalprice = $pulRequest['TotalPrice'];
		//echo  $pulRequest['qnty'];
		//compute
		
			$newQnty= $oldqnty + $qntyQuery;
		    $netTotalPrice =  ($newQnty/$origQnty['qnty']) * $priceQuery;
		 	//echo  $netTotalPrice;
		    //update
		    $updateQuery=mysqli_query($con,"UPDATE `shopping-cart` SET `qnty`='$newQnty',`TotalPrice`='$netTotalPrice' WHERE `user_unid` = '$userid' AND `item-unid`='$itemUnid' AND `checkoutState`='false'");
			if($updateQuery){
				echo "success";
			}else{
				echo "errorUpdating";
			}
			
		
		
		
		
	}else{
		echo "not";
	}
}

if(isset($_POST['updateCartRemove'])){
	$itemUnid = mysqli_real_escape_string($con,$_POST['unid']);
	$userid =$_SESSION['unid'];
	//ceck $_SESSION['unid'] in cart
	$checkQuery = mysqli_query($con,"SELECT * FROM `shopping-cart` WHERE `user_unid` = '$userid' AND `item-unid`='$itemUnid' AND `checkoutState`='false'");
	if(mysqli_num_rows($checkQuery)>0){
		//get data
		$pulRequest = mysqli_fetch_assoc($checkQuery);
		//echo  $pulRequest['qnty'];
		//compute
		//update
		    $updateQuery=mysqli_query($con,"DELETE FROM `shopping-cart` WHERE `user_unid` = '$userid' AND `item-unid`='$itemUnid' AND `checkoutState`='false' LIMIT 1");
			if($updateQuery){
				echo "success";
			}else{
				echo "errorUpdating";
			}
		
		
	}else{
		echo "not";
	}
}
//insert file data to database img/
/*
selectCategory.value,
			    Event.value,
			    Textarea.value,
			    quantity.value,
				price.value,
				fileInput.files*/
if(isset($_FILES['file'])){
	$selectCategory = mysqli_real_escape_string($con,$_POST['selectCategory']);
	$Event = mysqli_real_escape_string($con,$_POST['selectEvent']);
	$Textarea = mysqli_real_escape_string($con,$_POST['Textarea']);
	$quantity = mysqli_real_escape_string($con,$_POST['quantity']);
	$price = mysqli_real_escape_string($con,$_POST['price']);
	$newFileName = mysqli_real_escape_string($con,$_POST['newFileName']);
	$fileUnid = random_num(10);
$filename = $_FILES['file']['name'];
$file_tmp = $_FILES['file']['tmp_name'];
/* Choose where to save the uploaded file */ 
      
	  $path ="img/".$newFileName;
	if(move_uploaded_file($file_tmp,"../img/".$newFileName )){
		//insert to database
		$imgQuery= mysqli_query($con,"INSERT INTO `product-items` (`hotDeals`, `category`, `unid`, `description`, `price`, `qnty`, `image`)VALUES('$selectCategory ','$Event','$fileUnid','$Textarea','$price','$quantity','$path') ");
		if($imgQuery){
			echo"upload sucessfull";
		}else{
			echo"fail";
		}
	}
}

if(isset($_POST['productUnid'])){
	$productUnid = mysqli_real_escape_string($con,$_POST['productUnid']);
	$locationQuery = mysqli_query($con,"SELECT * FROM `product-items` WHERE `unid` = '$productUnid'");
	if($locationQuery){
		$location=mysqli_fetch_assoc($locationQuery);
		//delete file from directory
		
		//echo $location['image'];
		if(unlink("./../".$location['image'])){
			$deleteQuery = mysqli_query($con,"DELETE FROM `product-items` WHERE `unid` = '$productUnid'");
	         if($deleteQuery){
		       echo "deleted";
	           }else{
		       echo "error deleting";
	           }
		}else{
			echo "error deleting dir";
		}
	}
	/*$deleteQuery = mysqli_query($con,"DELETE FROM `product-items` WHERE `unid` = '$productUnid'");
	if($deleteQuery){
		echo "deleted";
	}else{
		echo "error deleting";
	}*/
}

// if(isset($_POST['checkoutFile'])){
	
// 	$userid =$_SESSION['unid'];
// 	/*
// 	deliveryFee:checkboxVal,
// 				qnty:quantity,
// 				TotalVaue:total,
// 				tax:tax,
// 				county:selectCategory1.value,
// 				town:selectCategory2.value,
// 				street:selectCategory3.value*/
// 	//check for items which are not checkoed out 
// 	$deliveryFee = mysqli_real_escape_string($con,$_POST['deliveryFee']);
// 	$productstotal = mysqli_real_escape_string($con,$_POST['productstotal']);
// 	$qnty = mysqli_real_escape_string($con,$_POST['qnty']);
// 	$TotalVaue = mysqli_real_escape_string($con,$_POST['TotalVaue']);
// 	$tax = mysqli_real_escape_string($con,$_POST['tax']);
// 	//$county = mysqli_real_escape_string($con,$_POST['county']);
// 	//$town = mysqli_real_escape_string($con,$_POST['town']);
// 	//$street = mysqli_real_escape_string($con,$_POST['street']);
	
// 	$itemQuery = mysqli_query($con,"SELECT `cart-unid` FROM `shopping-cart` WHERE  `user_unid`='$userid' && `checkoutState`='false' LIMIT 1");
// 	if($itemQuery ){
// 		$data = mysqli_fetch_assoc($itemQuery);
// 		//echo $data['cart-unid'];
// 		$cartUnid=$data['cart-unid'];
// 		//insert data to order history
// 		$firstquery = mysqli_query($con,"INSERT INTO `order_history`(`cart_unid`, `user_unid`, `qnty`, `total_price`, `delivery_fee`, `tax`, `overal_total`, `payment_status`) VALUES ('$cartUnid','$userid','$qnty','$productstotal','$deliveryFee','$tax','$TotalVaue','PENDING')");
// 		if($firstquery){
// 			//insert into new orders
// 			$secondquery = mysqli_query($con,"INSERT INTO `new orders`(`cart_unid`, `user_unid`, `no_of_products`, `total_Amount`,`delivery_fee`,`productamount`) VALUES ('$cartUnid','$userid','$qnty','$TotalVaue','$deliveryFee','$productstotal')");
// 			if($secondquery){
// 				//change checkoutstatus
// 				$thirdquery= mysqli_query($con,"UPDATE `shopping-cart` SET `checkoutState`='true' WHERE `user_unid`='$userid' && `cart-unid`='$cartUnid'");
// 				if($thirdquery){
// 					echo "cartUpdated";
// 				}else{
// 					echo "error checking out";
// 				}
// 			}else{
// 				echo "error checking out";
// 			}
// 		}else{
// 			echo "error checking out";
// 		}
// 	}
// 	/*			
// 	$updateQuery = mysqli_query($con, "UPDATE `shopping-cart` SET `checkoutState`='true' 	where `user_unid`='$userid' AND `checkoutState`='false'");
// 	if($updateQuery){
// 		echo "cartUpdated";
// 	}else{
// 		echo "error";
// 	}*/
// }
//get user profile data
if(isset($_POST['getProfile'])){
	$userid =$_SESSION['unid'];
	$array =array();
	$queryProfile= mysqli_query($con,"SELECT * FROM `login-table` WHERE `unid`='$userid'");
	while($profileData= mysqli_fetch_array($queryProfile)){
		$array[] = $profileData;
	}
	echo json_encode($array);
}
//update profile
if(isset($_POST['profileSavedData'])){
	$userid =$_SESSION['unid'];
	$profileName = mysqli_real_escape_string($con,$_POST['profileName']);
	$profileEmail = mysqli_real_escape_string($con,$_POST['profileEmail']);
	$profilTel = mysqli_real_escape_string($con,$_POST['profilTel']);
	$updateQuery = mysqli_query($con,"UPDATE `login-table` SET `email`='$profileEmail',`tel`='$profilTel' WHERE `unid`='$userid'");
	if($updateQuery){
		echo "profile Updated";
	}
}
if(isset($_POST['oldpassCheck'])){
	$userid =$_SESSION['unid'];
	$checkPass = mysqli_query($con,"SELECT `pwwd` FROM `login-table` WHERE `unid`='$userid' LIMIT 1");
	if($checkPass){
		$data = mysqli_fetch_assoc($checkPass);
		echo json_encode($data);
	}
}
if(isset($_POST['passwordresetstate'])){
	$userid =$_SESSION['unid'];
	$retypespass = mysqli_real_escape_string($con,$_POST['retypespass']);
	$updateQuery = mysqli_query($con,"UPDATE `login-table` SET `pwwd`='$retypespass' WHERE `unid`='$userid'");
	if($updateQuery){
		echo "password updated";
	}else{
		echo "error updating password";
	}
}
if(isset($_POST['ordervalue'])){
	$array = array();
	$table = mysqli_real_escape_string($con,$_POST['ordervalue']);
	$query= mysqli_query($con,"SELECT * FROM `$table`");
	while($data= mysqli_fetch_array($query)){
		$array[]=$data;
	}
	echo json_encode($array);
}
//payment function to generate url
if(isset($_POST['paymentPopup'])){
    $deliveryFee = mysqli_real_escape_string($con,$_POST['deliveryFee']);
	$productstotal = mysqli_real_escape_string($con,$_POST['productstotal']);
	$qnty = mysqli_real_escape_string($con,$_POST['qnty']);
	$TotalVaue = mysqli_real_escape_string($con,$_POST['TotalVaue']);
	$tax = mysqli_real_escape_string($con,$_POST['tax']);
//use GuzzleHttp\guzzle;



//use function BNjunge\PesapalCookout\jsonResponse;
/*function jsonResponse()
{
    header('content-type: application/json');
    echo json_encode(func_get_arg(0));
    exit;
}*/
//const BASE_PATH = __DIR__.'./../'; //going up to the  top level



///use file\test;

       // $weather = test::testFunction();
# Get token config
// $token = Pesapal::pesapalAuth();
//$token = Pesapal::conf();
//\BNjunge\jsonResponse($token);

# Register IPNngrok

// $targeturl = "https://fe79-102-215-34-198.ngrok-free.app/project/Baecakes/src/baecakesIpn.php";
// $registerIPN = Pesapal::pesapalRegisterIPN($targeturl);
// \BNjunge\jsonResponse($registerIPN);
//ipn: e80116f2-ecb6-4d97-926c-dcbcf583ca13
// echo json_encode( $registerIPN) ;
# List IPN
// $ipns = Pesapal::listIPNS();
// // \BNjunge\jsonResponse($ipns);
// echo json_encode($ipns) ;
//fetch phone number from user info
$userid =$_SESSION['unid'];

$phoneQuery = mysqli_query($con,"SELECT `tel` FROM `login-table` WHERE `unid`='$userid'");
$telData = mysqli_fetch_assoc($phoneQuery);
# Initiate Payment Process


$amount = 1;
$phone = $telData['tel'];
$validation_callback = 'http://localhost:8000/project/Baecakes/php/paymentValidation.php';
$ipnId = $_ENV['IPNID'];

$payRequest = Pesapal::orderProcess($amount, $phone, $validation_callback, $ipnId);
// print_r($payRequest) ;
// print_r($payRequest->message->redirect_url) ;

$trackinId= $payRequest->message->order_tracking_id;
$merchantId= $payRequest->message->merchant_reference;
//$pageUrl = $payRequest->message->redirect_url ;
$pageUrl =" http://localhost:8000/project/Baecakes/php/paymentValidation.php?OrderTrackingId=30fff1ac-5a78-4f8a-9324-dcb0e90682aa&OrderMerchantReference=1205502063";
$itemQuery = mysqli_query($con,"SELECT `cart-unid` FROM `shopping-cart` WHERE  `user_unid`='$userid' && `checkoutState`='false' LIMIT 1");
if($itemQuery ){
	$data = mysqli_fetch_assoc($itemQuery);
	//echo $data['cart-unid'];
	//$cartUnid=$itemQuery;
	//echo $data;
	$cartUnid=$data['cart-unid'];
	$_SESSION['cartUnid']=$data['cart-unid'];
	//add tracking i for payment to chekout`order_history`
   //$updateQuery = mysqli_query($con, "UPDATE `order_history` SET `order_tracking_id`='$trackinId',`merchant_reference`='$merchantId' WHERE `cart_unid`='$cartUnid'");
   //check if cartUnid exists
   $cartUnidquery = mysqli_query($con,"SELECT * FROM `order_history` WHERE `cart_unid`='$cartUnid'");
   if(mysqli_num_rows($cartUnidquery)>0){
	//cartuind exists so update
	$updateQuery = mysqli_query($con, "UPDATE `order_history` SET `cart_unid`='$cartUnid',`user_unid`='$userid',`qnty`='$qnty',`total_price`='$productstotal',`delivery_fee`='$deliveryFee',`tax`='$tax',`overal_total`='$TotalVaue',`payment_status`='PENDING',`order_tracking_id`='$trackinId',`merchant_reference`='$merchantId' WHERE `cart_unid`='$cartUnid'");
    if(!$updateQuery){
        echo "order history update error";
	}
}else{
	//cart unid does not exist
	$insertQuery = mysqli_query($con,"INSERT INTO `order_history`(`cart_unid`, `user_unid`, `qnty`, `total_price`, `delivery_fee`, `tax`, `overal_total`, `payment_status`, `order_tracking_id`, `merchant_reference`, `confirmation_code`, `payment_status_description`, `payment_status_code`, `payment_method`, `feedbackAmount`, `currency`) VALUES ('$cartUnid','$userid','$qnty','$productstotal','$deliveryFee','$tax','$TotalVaue','PENDING','$trackinId','$merchantId','','','','','','')");  
	if($insertQuery){
	  // echo"trackind id added to cart";
	}else{
	 //echo"error occured when adding tracking id";
	}
   }

}
//\BNjunge\jsonResponse($payRequest);
echo json_encode($pageUrl);
# Validate Payment
// $ipnId = "09181b33-aca7-4781-99ef-de7cfabf79f5";

# Notes
// comment ctrl +k+ c
// uncomment ctrl +k+ u
//the file name shouled be the same as the class name
//when a function is called under a namespace calle it like  \namespace\function($token);
}
if(isset($_POST['checkoutPaymentStatus'])){
	$userid =$_SESSION['unid'];
	$cartunid =$_SESSION['cartUnid'];
	
	//echo "echo";
	//get data from cart table
	 $query=mysqli_query($con,"SELECT `payment_status_description` FROM `order_history` WHERE `cart_unid`='$cartunid' AND `user_unid`='$userid'");
    if($query){
         $data = mysqli_fetch_assoc($query);
	 echo json_encode($data);
	}
  }
  //get receipt
if(isset($_POST['getReceipt'])){
	$userid =$_SESSION['unid'];
	$cartunid =$_SESSION['cartUnid'];
	$cartArray=array();
	//get the cart
	$CartQuery = mysqli_query($con,"SELECT * FROM `shopping-cart` WHERE `user_unid`='$userid' && `cart-unid`='$cartunid'");
    while($cartData = mysqli_fetch_array($CartQuery)){
		
		$cartArray[]=$cartData;
	}
	//get sum of cart
    // $sumQuery = mysqli_query($con,"SELECT  SUM(TotalPrice) FROM `shopping-cart`");
	 //get tax and delivery fee
	 $otherQuery = mysqli_query($con,"SELECT `total_price`,`delivery_fee`,`tax`,`overal_total` FROM `order_history` WHERE `cart_unid`='$cartunid' && `user_unid`='$userid'");
	 if($otherQuery){
          $otherData = mysqli_fetch_assoc($otherQuery);
	 }
	 $newArray = array(
		"cartData"=>$cartArray,
		"otherData"=>$otherData
	 );
	 echo json_encode($newArray);
}

?>