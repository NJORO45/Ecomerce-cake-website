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


<div class="img" >
	<img  src="../img/logo.jpeg">
</div>

</div>
<!--login cart-->
<div class="login-containers">
<input id="hiddennid" value="1" hidden=""/>
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

<!--product-->
<div class="container-fluid" style="padding-top: 50px;">
	<div class="grid-container">  
	</div>

</div>
<div class=" container-fluid " style="padding-top: 50px; display: flex; align-items: center; flex-direction: column;">
	
<div class="container  pb-2" style="border-bottom:2px solid #dee2e6;">
<div class="row justify-content-center" id="content1">
</div>
</div>
</div>

<!--special order-->
<div class="special-order-container">
	<div class="">
		<p style=" display: flex; justify-content: center; align-items: center; width: 100%; height:100%; margin: auto;">To order a special request</p>
		<div class="c-center">
		    <a class="m-1" href="https://api.whatsapp.com/send/?phone=%2B254717700534&text=I%27m+interested+in+a+cusomized+cake+order&type=phone_number&app_absent=0">click here to chat with us</a>
	    </div>
	</div>
</div>
<!--reviews-->
<div class="c-center">
<div class="reviews ">
	<h6 class="reviews-header c-center" >TESTIMONIALS</h6>
	<hr class="hr">
	<div class="reviews-body ">
		<div>
			<div class="stars"></div>
			<div class="review-time"></div>
		</div>
		<blockquote style="display: flex;align-items: center; padding: 10px;">"Bae cakes has the best cakes. I've been ordering cakes from this store and they are the best in the business. Highly recommended Bae cakes"
		</blockquote>
		<cite>--<span id="autherName">samoel</span></cite>
		<div class="buttons">
			<i class="fa fa-chevron-left left " aria-hidden="true"></i>
			<i class="fa fa-chevron-right right" aria-hidden="true"></i>
		</div>
	</div>
</div>
</div>
<!--faqs-->
<div>
	
</div>
<!--footer-->
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
<script src="../js/cakecategory.js"></script>
<script src="../js/forms.js"></script>
<script src="../js/logout.js"></script>
<script>
window.addEventListener("DOMContentLoaded",function(){
	const blockquote = document.querySelector("blockquote");
	const autherName = document.querySelector("#autherName");
	const left = document.querySelector(".left");
	const right = document.querySelector(".right");
	var leftState = false;
	var rightState = false;
	let curentItem=0;
	console.log(blockquote);
	//testimonials
    $.ajax({
		url:"testimonials.php",
		method:"GET",
		dataType:"json",
		success:function(data){
			if(data!=""){
				//console.log(data[2]['testianial']);
				;
				left.addEventListener("click",function(){
					leftState=true;
					if(curentItem==(data.length-data.length)){
						curentItem=curentItem;
					}else{
						curentItem--;
					}
					//console.log(curentItem);
					getData(curentItem);
				});
				right.addEventListener("click",function(){
					rightState=true;
					if(curentItem==data.length-1){
						curentItem=curentItem;
					}else{
						curentItem++;
					}
					//console.log(curentItem);
					getData(curentItem);
				});
				setInterval(function(){
					if(leftState == false && rightState == false){
						var randomNum = Math.floor(Math.random()*(data.length));
						getData(randomNum);
						//console.log(randomNum);
					}else{
						//console.log("no state");
					}
					
				},5000);
				//function to get data 
				function getData(curentItem){
					//console.log(data[curentItem]['testianial']);
					blockquote.innerHTML = data[curentItem]['testianial']
					autherName.innerHTML = data[curentItem]['name']
				}
			}
		},
		error:function(data){
			console.log(data);
		}
	});
});
</script>
</html>