<?php
//session_start();
include('./../php/db-con.php');
include('functions.php');
$user_data = check_login($con);//checks if user is loged
?>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="../bootstrap-4.0.0/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="admin.css">
	<script src="https://use.fontawesome.com/2c1d531397.js"></script>
	
	<script src="../js/jquery.min.js"></script>
<title>
</title>
</head>
<body>
  <div class="container-fluid">
   <div class="alert-message " style="z-index:10000; position:fixed;  right:-200px; top: 40px;  background-color:#ffff; margin-right: 5px; padding: 5px; border-radius: 5px; border:1px solid var(--soft-pink);">
	 
   </div>
</div>
<div class="header-container">
   <div class="header-content">
     <div class="logo">
	   <img src="../img/logo.jpeg"/>
	 </div>
     <div class="hamburger-menu">
	      <i class="fa fa-bars" aria-hidden="true"></i>
	 </div>
	 
   </div>
</div>
<div class="sidebar-container">
 
       <ul class="sidebar-content">
	      <a class="links" href="#"><li>home</li></a>
	      <a class="links" href="orders.php"><li>orders</li></a>
	      <a class="links" href="#"><li>profile</li></a>
	      <a class="links" id="logout" href="#"><li>logout</li></a>
	   </ul>
   
</div>
<div class="body-container">
	   <div class="special-submit">
	      
		 
		   <select id="selectCategory">
			    <option value="none">--select--</option>
			    <option value="hotDeals">special offer</option>
			    <option value="ordinary">ordinary</option>
		  </select>
		  <select id="selectEvent">
			    <option value="none">--select--</option>
			    <option value="birthday">birthday</option>
			    <option value="wedding">wedding</option>
			    <option value="cupcakes">cupcakes</option>
			    <option value="event">event</option>
			    <option value="valentines">valentines</option>
			    <option value="fahers day">fahers day</option>
			    <option value="mothers day">mothers day</option>
		  </select>
		  
		  <div class="uploadImg">
		     <label>
			 <span id="uploadTxt">upload image</span>
			 <input id="fileInput"  type="file" accept="image/png, image/jpeg, image/gif" placeholder="upload image" name =" " accept="image/png, image/jpg, image/gif, image/jpeg"/>
			 <span id="imageName"></span>
			 </label>
		     
		  </div>
		  <div>
		     <input id="quantity" type="text" placeholder="quantity"/>
		  </div>
		  <div>
		     <input id="price" type="text" placeholder="price"/>
		  </div>
		  <div>
		     
		  </div>
	   </div>
	   <div class="div-cont">
	      <div>
	      <textarea placeholder="e.g flavours/ingridients"></textarea>
		  </div>
		  <div >
		     <input id="btn" type="button" value="submit"/>
		  </div>
	   </div>
	
	<div class="content">
	   <div class="special-content">
	        <div class="header">
			    <p>Special offer</p>
			</div>
			<div class="content-cards">
			
	        </div>
			</div>
	   <div class="ordinary-content">
	        <div class="header">
			    <p>others</p>
			</div>
			<div class="content-cards">
			 
	   </div>
	   </div>
	</div>
</div>
</body>
<script src="admin.js"></script>
<script src="loadContent.js"></script>
<script src="logout.js"></script>
</html>