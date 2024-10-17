<?php
session_start();

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
	<p>alert message</p>
</div>
</div>
<div class="main_container fixed-top">
<div class="contain">
    <div class="inner_container1">
		<ul class="inner_content1 ">
		<a href="../index.html"><li class="">home</li></a>
		<a href="#"><li class="">About us</li></a>
		</ul>
	</div>
	<div class="inner_container2">
		<ul class="inner_content2" >
			<a href="../index.html"><li class="element1"></li></a>
			<a href="#"><li class="element2"></li></a>
			<li><a href="#" class="fa fa-shopping-cart" ></a>
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
<!--login cart-->
<input id="sessionid2" value="1" hidden=""/>
<div class="login-containers">
    <div id="page" class="login-page " >
	      <div class="formContainer">
		     <i id="times1"class="fa fa-times" aria-hidden="true"></i>
		  </div>
		  <input id="hiddenId" value="" hidden=""/>
	      <div class="formContainer">
		     <h4>Login Form</h4>
		  </div>
	      <div class="formContainer">
		    <label>Email</label>
			<input autocomplete="false" id="login-email" type="text" />
		  </div>
		  <div class="emailAlert show">
		  </div>
		  <div class="formContainer">
		    <label>Password</label>
			<input id="login-password" type="password" type="" />
		  </div>
		  <div class="logPasslAlert">
		  </div>
		  <div class="formContainer">
		    <p>Not a member?<span class="signupLink">signup now</span></p>
		  </div>
		  <div class="formContainer">
		    <button class="loginBtn">Login</button>
		  </div>
	</div>
	<div class="register-page" >
	     <div class="formContainer">
		     <i id="times2" class="fa fa-times" aria-hidden="true"></i>
		  </div>
		  <input id="hiddenId" value="" hidden=""/>
	      <div class="formContainer">
		     <h4>Register Form</h4>
		  </div>
	      <div class="formContainer">
		    <label>Email or phone</label>
			<input id="register-email" type="text" />
		  </div>
		  <div class="emailAlert show">
		  </div>
		  <div class="formContainer">
		    <label>Phone  </label>
			<input id="register-phone" type="" placeholder="254717109686" />
		  </div>
		  <div class="phoneAlert show">
		  </div>
		  <div class="formContainer">
		    <label>Password</label>
			<input id="register-password" type="password" type="" />
		  </div>
		  <div class="formContainer">
		    <label>Confirm Password</label>
			<input id="register-confirmPassword" type="password" type="" />
		  </div>
		  <div class="passwordAlert">
		  </div>
		  <div class="formContainer">
		    <p>Are you a member?<span class="loginLink">Login now</span></p>
		  </div>
		  <div class="formContainer">
		    <button class="registerBtn">Register</button>
		  </div>
	</div>
</div>
<!--display content for empty cart-->
<div class="cartEmpty" >
 <p>cart is empty</p>
</div>
<!--cartlist-->
<div class="table-responsive" style="padding-top:100px;">
  <table class="table activities">
 
  <thead>
      <tr>
	     <th>image</th>
		 <th>product name</th>
		 <th>quantity</th>
		 <th> price</th>
		 <th>total</th>
		 <th></th>
	  </tr>
  </thead>
  
  
  <tbody class="class" id="tbody">
 
  </tbody>
  </table>
  <div class="checkoutTotal">
      <div class="checkoutAmount">
	     <div class="totalHead">Total</div>
		 <div class="totalAmount">
		     <span style="margin-right:2px;">KES</span>
			 <div class="totalAmountchild">  </div>
		 </div>
	  </div>
	  
	  <div class="checkoutBtn">
	  <input id="sessionid1" hidden="" value=''/>
	     <button class="btn btn-small btn-cake checkoutBtn">checkout</button>
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
<script src="../js/checksession.js"></script>
<script src="../js/cartCheckout.js"></script>
<script src="../js/forms.js"></script>
<script src="../js/logout.js"></script>


</html>
