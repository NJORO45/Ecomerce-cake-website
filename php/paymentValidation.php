<?php
// https://b226-102-215-34-198.ngrok-free.app/project/Baecakes/php/paymentValidation.php?OrderTrackingId=30fff1ac-5a78-4f8a-9324-dcb0e90682aa&OrderMerchantReference=1205502063

include('db-con.php');
const BASE_PATH = __DIR__.'../../';
require BASE_PATH.'/vendor/autoload.php';
//require __DIR__ .'/vendor/autoload.php';
use BNjunge\Pesapal;
session_start();


if(isset($_GET['OrderMerchantReference']) && !empty($_GET['OrderTrackingId'])){
    $userid =$_SESSION['unid'];
    $cartunid =$_SESSION['cartUnid'];
    $transId =mysqli_real_escape_string($con, $_GET['OrderTrackingId']);
    $merchant =mysqli_real_escape_string($con, $_GET['OrderMerchantReference']);
    $checktransactionResponse = Pesapal::transactionStatus($transId,$merchant);
    //LOADcontent page
    //print_r($checktransactionResponse);
    if(!empty($checktransactionResponse)){
        $pamentmethod=$checktransactionResponse->message->payment_method;
		$confirmation_code=$checktransactionResponse->message->confirmation_code;
		$payment_status_description=$checktransactionResponse->message->payment_status_description;
		$payment_status_code=$checktransactionResponse->message->payment_status_code;
		$amount=$checktransactionResponse->message->amount;
		$currency=$checktransactionResponse->message->currency;
print_r($currency);
if($payment_status_description=="Failed"){
   //just add transaction status to database
   $queryData= mysqli_query($con,"UPDATE `order_history` SET `confirmation_code`='$confirmation_code',`payment_status_description`='$payment_status_description',`payment_status_code`='$payment_status_code',`payment_method`='$pamentmethod',`feedbackAmount`='$amount',`currency`='$currency' WHERE `cart_unid`='$cartunid'");
   // $queryData = mysqli_query($con,"INSERT `order_history` (`payment_status_description`)VALUES('$confirmation_code')");    
    if($queryData){
         //payment exists
         
        }else {
            echo "Error updating record: " . mysqli_error($con);
        }
}else if($payment_status_description=="Completed"){
    //update payment status for the checkout cart
    $queryData= mysqli_query($con,"UPDATE `order_history` SET `payment_status`='Completed',`confirmation_code`='$confirmation_code',`payment_status_description`='$payment_status_description',`payment_status_code`='$payment_status_code',`payment_method`='$pamentmethod',`feedbackAmount`='$amount',`currency`='$currency' WHERE `cart_unid`='$cartunid'");
    // $queryData = mysqli_query($con,"INSERT `order_history` (`payment_status_description`)VALUES('$confirmation_code')");    
     if($queryData){
          //update cart checkou status
           $checkoutstatusQuery = mysqli_query($con,"UPDATE `shopping-cart` SET `checkoutState`='true' WHERE `cart-unid`='$cartunid'");
           if($checkoutstatusQuery){

           }else{
            echo "error updating checkout state";
           }
         }else {
             echo "Error updating record: " . mysqli_error($con);
         }
}
    
    }
   

echo'

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="../bootstrap-4.0.0/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="../style.css">
	<script src="https://use.fontawesome.com/2c1d531397.js"></script>
	<script src="../bootstrap-4.0.0/js/jquery-3.6.0.min.js"></script>
	<title></title>
    <style>
html, body {
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    width:100%;
}


    </style>
</head>

<body>
<div class="container-fluid">
<div class="alert-message " style="z-index:99999; position:fixed;  right:-200px; top: 30px;  background-color:#ffff; margin-right: 5px; padding: 5px; border-radius: 5px; border:1px solid var(--soft-pink);">
	<p>alert message</p>
</div>
</div>
<div class="main_container fixed-top">
<div class="contain">
	<div class="inner_container1">
		<ul class="inner_content1 ">
		<a href=".././index.html"><li class="">home</li></a>
		<a href="#"><li class="">About us</li></a>
		</ul>
	</div>
	<div class="inner_container2">
		<ul class="inner_content2" >
			<a href="#"><li class="element1"></li></a>
			<a href="#"><li class="element2"></li></a>
			<li><a href="../php/cart_products.php" class="fa fa-shopping-cart" aria-hidden="true"></a>
			<span id="cartTotal">0</span>
			</li>
			<a href="../php/profile.php"><li class="element3"></li></a>
			<a href="#"><li class="element4"></li></a>
		</ul>
	</div>
</div>


<div class="img" >
	<img  src="../img/logoo.jfif">
</div>
</div>
<input id="sessionid1" value="1" hidden=""/>
 <div class="receiptContainer" >
<!-- payment verification header-->
    <div class="receiptMainHeader">
    <div class="spinnerHeader">checking payment</div>
    <div class="spinner"></div>
    
    </div>
<!-- receipt-->
    <div class="receipt">
        <div class="receiptHeader">
           <!-- receipt header-->
            <p>Receipt</p>
        </div>
        <div class="receiptBody">
            <!-- receipt body-->
            <div class="" style="width:auto;height:auto;  overflow:auto; ">
  
  <table id="" class="table table-sm">
 
  <thead>
      <tr>
	     <th>image</th>
		 <th>description</th>
		 <th>quantity</th>
		 <th>price</th>
		 <th>total</th>
		 <th></th>
	  </tr>
  </thead>
  
  
  <tbody class="class" id="tbody">
     
    
      
  </tbody>
  </table>

</div>
        </div>
    </div>
    <div class="receiptFooter">
        <!-- receipt footer-->
        
        <div class="Total-cont">
	     <div>Sub-total :</div>
		 <div id="sub-total">0</div>
     </div>
	 <div class="Total-cont" id="DeliveryFee">
	     <div>delivery fee :</div>
		 <div id="delivery-fee">0</div>
     </div>
	 <div class="Total-cont">
	     <div>tax :</div>
		 <div id="tax-total">0</div>
     </div>
	 <div class="Total-cont">
	     <div>Total :</div>
		 <div id="overal-total">0</div>
     </div>
        </div>
         
    
 </div> 
 <!--payment promt-->
<div class="promptt">
   <div class="promptt-heaer">
       <img src="./img/pesapal watermarks.png"/> 
	   <div>
            Regulated by the Central Bank of Kenya.
       </div>
   </div>
   <hr>
   <div>
  
</div>  

</body>

<script src="../js/paymentValidation.js"></script>
<script src="../js/orderHistorysession.js"></script>
<script src="../js/orderReceipt.js"></script>
<script src="../js/logout.js"></script>
</html>
';
}else{
    echo"not set";
}
?>
