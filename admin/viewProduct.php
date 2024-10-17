<?php
include('./../php/db-con.php');
include('functions.php');
$user_data = check_login($con);//checks if user is loged
if (isset($_GET['cart_unid'])) {
    $cart_unid = htmlspecialchars(mysqli_real_escape_string($con, $_GET['cart_unid']));
  
}
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
<div class="container-fluid">
   <div class="alert-message " style="z-index:99999; position:fixed;  right:-200px; top: 30px;  background-color:#ffff; margin-right: 5px; padding: 5px; border-radius: 5px; border:1px solid var(--soft-pink);">
	
   </div>
</div>
<div class="sidebar-container">
 
       <ul class="sidebar-content">
	      <a class="links"><li>Home</li></a>
	      <a class="links"><li>Orders</li></a>
	      <a class="links"><li>Profile</li></a>
	   </ul>
   
</div>
<div class="filter-container">
	 
	<input hidden="" value=""/>
	<div class="filter-content">
	   <div class="header">
	      <table>
		    <thead>
			   <tr>
			       <th>PRODUCT ID</th>
			       <th>IMAGE</th>
			       <th>Description</th>
			       <th>Name</th>
			       <th>Color</th>
			       <th>QUANTITY</th>
			       <th>PRICE</th>
			       <th>TOTAL</th>
			   </tr>
			</thead>
			<tbody>
			<?php
			$i=1;
			$query = mysqli_query($con,"SELECT * FROM `shopping-cart` WHERE `cart-unid`='$cart_unid' AND `checkoutState`='true'");
			
			if($query){
				while($data=mysqli_fetch_assoc($query)){?>
				<tr>
					<td><?php echo $data['item-unid'];?></td>
					<td><img  height="50px" width="50px" src='../<?php echo $data['image'];?>'/></td>
					<td><?php echo $data['description'];?></td>
					<td><?php echo $data['name'];?></td>
					<td><?php echo $data['color'];?></td>
					<td><?php echo $data['qnty'];?></td>
					<td><?php echo $data['price'];?></td>
					<td><?php echo $data['TotalPrice'];?></td>
					<td>
						
					</td>
				</tr>
			   <?php $i++;}
			}
			?>
			
			
			</tbody>
		  </table>
	     <div class="div-btn">
		 <input id="cart_unid" value="<?php echo $cart_unid ;?>" hidden=""/>
		    <button id="confirmOrder">confirm</button>
			<button id="cancelOrder">cancel</button>
		 </div>
	   </div>
	  
	</div>
</div>
</body>
<script src="admin.js"></script>
<script src="viewProducts.js"></script>
</html>