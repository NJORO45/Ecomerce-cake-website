<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="../bootstrap-4.0.0/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="../style.css">
	<script src="https://use.fontawesome.com/2c1d531397.js"></script>
	
	<script src="../js/jquery.min.js"></script>
	<title></title>
</head>
<style>
  .inner_container2 .inner_content2 li i span{
    background:;
    height: 25px;
  width: 25px;
    border-radius: 50%;
    top: -5px;
    position: relative;
    right: 5px;
    font-size: 15px;
  }
</style>
<body>

<div class="container-fluid">
   <div class="alert-message " style="z-index:99999; position:fixed;  right:-200px; top: 30px;  background-color:#ffff; margin-right: 5px; padding: 5px; border-radius: 5px; border:1px solid var(--soft-pink);">
	 
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

<input id="sessionid1" value="1" hidden=""/>

<div class="img" >
	<img  src="../img/logo.jpeg">
</div>
<input id="userid" value="" type="hidden"/>
</div>
<!--login cart-->
<div class="login-containers">
    <div id="page" class="login-page " >
	      <div class="formContainer">
		     <i id="times1"class="fa fa-times" aria-hidden="true"></i>
		  </div>
		  <input id="hiddenId" value="" type="hidden"/>
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
		  <input id="hiddenId" value="" type="hidden"/>
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

<!-- hot deals-->
<div class=" container-fluid " style="margin-top: 80px; display: flex; align-items: center; flex-direction: column;">
    <div class="table-responsive-sm overflow-auto">
	  <table class="table table-sm table-striped table-hover">
	    <thead>
		    <tr>
			   <th>ORDER ID</th>
			   <th>CUSTOMER</th>
			   <th>NO. OF PRODUCTS</th>
			   <th>PAYMENT</th>
			   <th>TOTAL</th>
			   <th colspan="2">DATE ADDED</th>
			   
			</tr>
		</thead>
		<tbody>
		   
		  
		</tbody>
	  </table>
	<div>
</div>


<!--footer-->
<!--
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
</div>-->
<div ><span class="test"></span></div>
</body>

<script src="../js/orderHistorysession.js"></script>
<script src="../js/orderHistoryData.js"></script>
<script src="../js/logout.js"></script>
</html>