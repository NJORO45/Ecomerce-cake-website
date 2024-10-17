<?php
session_start();

if(isset($_GET['id'])){
	$unid = $_GET['id'];
	
}
if(isset($_GET['hotdeal'])){
	$hotdeals = $_GET['hotdeal'];
	
}
?>

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
</head>
<body>
	<div class="container-fluid">
<div class="alert-message " style="z-index:99999; position:fixed;  right:-200px; top: 30px;  background-color:#ffff; margin-right: 5px; padding: 5px; border-radius: 5px; border:1px solid var(--soft-pink);">
	<p></p>
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

<input id="hiddenid3" value="1" hidden=""/>
<input id="hiddenid4" value=<?php echo $unid ?> hidden=""/>

</div>


<!-- hot deals-->
<div class=" container-fluid " style="margin-top: 70px; height: auto; ">
	<!--<div class="card">
		<p>there are no available hot deals</p>
	</div>-->

<div id="theContainer"class="container-fluid  pb-2 c-center">

</div>

</div>
</div>
<!--special order-->
<div class="special-order-container">
	<div class="">
		<p style=" display: flex; justify-content: center; align-items: center; width: 100%; height:100%; margin: auto;">To add more customization to the design</p>
		<div class="c-center">
		    <a class="m-1" href="https://api.whatsapp.com/send/?phone=%2B254717700534&text=I%27m+interested+in+a+customized+cake+order&type=phone_number&app_absent=0">click here to chat with us</a>
	    </div>
	</div>
</div>

<!--faqs-->
<div>

<!--footer-->
<div class="container-fluid footer-class " >
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
			    <div>tel number</div>
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
</body>
<script src="../bootstrap-4.0.0/js/bootstrap.min.js" ></script>
<script src="../js/product_customization.js"></script>
<script src="../js/logout.js"></script>
</html>