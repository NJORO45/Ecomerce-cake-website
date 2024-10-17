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
	<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.2/xlsx.full.min.js"></script>
	<script src="../js/jquery.min.js"></script>
<title>
</title>
</head>
<body>
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
	      <a class="links" href="admin.php"><li>Home</li></a>
	      <a class="links" href="#"><li>Orders</li></a>
	      <a class="links" href="#"><li>Profile</li></a>
	   </ul>
   
</div>
<div class="filter-container">
	   <div class="filter">
			     <select>
				     <option>--select--</option>
				     <option value="new orders">New orders</option>
				     <option value="pending orders">Pending orders</option>
				     <option value="completed orders">Completed orders</option>
				     <option value="canceled orders">canceled orders</option>
				 </select>
				 
				 
				 <button class="export">Export excel</button>
	   </div>
	
	<div class="filter-content">
	   <div class="header">
	      <table>
		    <thead>
			   <tr>
			       <th>ORDER ID</th>
			       <th>CUSTOMER</th>
			       <th>NO.OF PRODUCTS</th>
			       <th>STATUS</th>
			       <th>TOTAL</th>
			       <th>DATE ADDED</th>
			       <th></th>
			       <th></th>
			   </tr>
			</thead>
			<tbody>
			</tbody>
		  </table>
	     
	   </div>
	  
	</div>
</div>
</body>
<script src="orders.js"></script>
</html>