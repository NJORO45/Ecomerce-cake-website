
<!DOCTYPE html>
<html>
  <head>
   <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="admin.css">
	
	<script src="../js/jquery.min.js"></script>
  </head>
  <body>
  <div class="container-fluid">
   <div class="alert-message " style="z-index:99999; position:fixed;  right:-200px; top: 30px;  background-color:#ffff; margin-right: 5px; padding: 5px; border-radius: 5px; border:1px solid var(--soft-pink);">
	 
   </div>
</div>
  <div class="login">
   <div class="login-header">
       Admin login
   </div>
  <div class="login-container">
     <div class="login-holder">
	   <input  class="userName"  id="userName" type="text" name="userName" placeholder="user name"/>
	 </div>
	 <div class="login-holder">
	   <input class="password" id="password" type="password" name="password" placeholder="password"/>
	 </div>
	 <div class="login-holder">
	   <input id="loginBtn" name="" type="button" value="login"/>
	 </div>
  </div>
  </div>
  </body>
  <script src="login.js"></script>
</html>