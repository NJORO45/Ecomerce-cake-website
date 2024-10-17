<?php
session_start();
//session_destroy();
//const BASE_PATH = __DIR__.'./../'; //going up to the  top level
const BASE_PATH = __DIR__.'../../';
require BASE_PATH.'/vendor/autoload.php';
//require __DIR__ .'/vendor/autoload.php';
use BNjunge\Pesapal;

$set = '';
if(isset($_SESSION['unid'])){
	//echo "<script> alert('set')</script>";
	$set = true;
}else{
	//echo "<script> alert('notset')</script>";
	$set = false;
}


?>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="../bootstrap-4.0.0/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="../style.css">
	<script src="https://use.fontawesome.com/2c1d531397.js"></script>
	<script src="../bootstrap-4.0.0/js/jquery-3.6.0.min.js"></script>
	<title></title>
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

<!--display content for empty cart-->
<div class="cartEmpty" >
 <p></p>
</div>
<!--checkout details-->
<div class="checkoutHeader">
      Checkout details
	  <div class="underline">
      </div>
</div>

<div class="main-container" >
	<input id="statusId" value="0" hidden=""/>
<div class="checkoutForm" >
<!--delivery details-->
  
   <!--
   <div class="deliveryDetails">
       <div class="deliveryHeader">
	       <h4>Delivery Details</h4>
	   </div>
       <div class="deliveryContent">
	       <label class="required">county/region</label>
		   <select id="selectCategory1">
		   <option value="none">--select--</option>
		    <option value="kiambu">kiambu</option>
		    <option value="kajiado">kajiado</option>
		    <option value="garissa">garissa</option>
		   </select>
	   </div>
	   <div class="deliveryContent">
	       <label class="required">town/city</label>
		   <select id="selectCategory2">
		    <option value="none">--select--</option>
		    <option value="uthiru">uthiru</option>
		    <option value="kawangware">kawangware</option>
		    <option value="esate">estate</option>
		   </select>
	   </div>
	   <div class="deliveryContent">
	       <label class="required">Street address</label>
		   <select id="selectCategory3">
		    <option value="none">--select--</option>
		    <option value="uhiru">uthiru</option>
		    <option value="kawangware">kawangware</option>
		    <option value="estate">estate</option>
		   </select>
	   </div>
	   
   </div>-->
   <div class="shippingOptions">
         <div class="shippingHeader">
	       <h4 class="required">Shipping options</h4>
	     </div>
         <div class="shipppingContent">
		    <input id="hdvalue" hidden="" value="0"/>
		    <input id="checkbox" type="checkbox"/>
	        <label>pick from store - <span>0</span></label>
         </div>	
		 <div class="shipppingContent">
		    <input id="hdvalue" hidden="" value="00"/>
		    <input id="checkbox" type="checkbox"/>
	        <label>Pay on delivery - KES <span>--</span></label>
         </div>
         <!--<div class="shipppingContent">
		    <input id="hdvalue" hidden="" value="450"/>
		    <input id="checkbox" type="checkbox"/>
	        <label>Bolt byke - KES <span>450</span></label>
         </div>		 -->
   </div>
</div>
<!--confirm order-->

<div class="table-responsive" style="width:auto;height:250px;  overflow:auto; ">
  <h2>Your order</h2>
  <table id="" class="table table-sm">
 
  <thead>
      <tr>
	     <th>image</th>
		 <th>product name</th>
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
<div style="display:flex; flex-direction:column; width:100%; height:auto;margin-top:70px;">
<!-- load payment at i frame-->
<div id="iframe" style="margin-bottom:auto;height:62vh; width:100%; position:relative; ">
    <iframe style="width:100%;height:100%;" src=""></iframe>
</div>
<div id="footerholder"style="display:flex; flex-direction:column; background-color:; width:100%; height:auto;position:relative;">
<div class="Total-computation">
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

<!--payment promt-->
<div class="promptt">
   <div class="promptt-header">
       <img src="../img/pesapal watermarks.png"/> 
	   <div>
            Regulated by the Central Bank of Kenya.
       </div>
   </div>
   <hr>
   <div>
   <input id="loDet" hidden="" value = <?php echo $set;?> />
      <input id="preceedbtn"  type="button" class="btn btn-purple btn-sm float-right mr-2"value="Place order"/>
   </div>
</div>
</div>
</div>
<!--footer-->
<!--
<div class="container-fluid footer-class" >
	<div class="row" >
		<div class="col-lg-3 col-md-3 col-sm-3 col-12 h-col-center" >
			<h6 class="footer-h">Find us on</h6>
			<div>
				<i class="fa fa-twitter" aria-hidden="true"></i>
				<i class="fa fa-instagram" aria-hidden="true"></i>
				<i class="fa fa-facebook-square" aria-hidden="true"></i>
				<i class="fa fa-twitter-square" ></i>
				<i class="fa fa-shopping-cart" aria-hidden="true"></i>

			</div>
		</div>
		<div class="col-lg-3 col-md-3 col-sm-3 col-12 h-col-center" >
			<h6 class="footer-h">Contact us</h6>
			<div style="">
				<div>@gmail.com</div>
			    <div>0717109686</div>
			</div>
			
		</div>
		<div class="col-lg-3 col-md-3 col-sm-3 col-12 h-col-center">
			<h6 class="footer-h">Location</h6>
			<div>Ruiru</div>
			<div>Kenya</div>
		</div>
		<div class="col-lg-3 col-md-3 col-sm-3 col-12 h-col-center">
			<h6 class="footer-h">Business Hours</h6>
			<div>From:<span>8:00 AM</span>To:<span> 8:00 PM</span></div>
		</div>
	</div>
</div>
-->
</body>
<script src="../js/checkout.js"></script>

</html>
