/*const loginBtn = document.querySelector(".loginBtn");
const registerBtn = document.querySelector(".registerBtn");


registerBtn.addEventListener("click",function(e){
	const element = e.currentTarget.parentElement.parentElement;
	const email = element.querySelector("#email").value;
	const phone = element.querySelector("#phone").value;
	const Password = element.querySelector("#password").value;
	const confirmPassword = element.querySelector("#confirmPassword").value;
});

loginBtn.addEventListener("click",function(e){
	const element = e.currentTarget.parentElement.parentElement;
	const emaill = element.querySelector("#email");
	const email = element.querySelector("#email").value;
	const Password = element.querySelector("#password").value;
	//check if any field is empty
	if(email=='' && Password=='' ){
		alert("all fields are required");
	}
	else if(email==''){
		alert("email empty");
	}else if(Password==''){
		alert("pass empty");
	}else{
		//check if email is valid
		//emaill.addEventListener("click",function(){alert("focus")});
		/*const emailPattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const emailvalid=emailPattern.match(email);
if(emailvalid){
	
}		
		

		
	}
});
*/
function alertMessage(alertmessage,msg){
	alertmessage.innerHTML=msg;
					alertmessage.animate([
					{
						opacity:0.5
					},{
						right:0,
						opacity:1
					}
					],{
						duration:1000,
						fill:"forwards"
					});
					setTimeout(function(){
						alertmessage.animate([
					{
						right:"-200px",
						opacity:"0"
					}
					],{
						duration:1000,
						fill:"both"
					});
					},2000);
}
$(document).ready(function(){
	var email_state=false;
	var password_state=false;
	var reg_password_state=false;
	var reg_mail=false;
	var reg_phone=false;
	const alertmessage = document.querySelector(".alert-message");
	
		$('.login-page #login-email').on('blur',function(){
				var email = $('#login-email').val();
				var atposition =email.indexOf("@");
                var dotposition =email.lastIndexOf(".");
                if(atposition<1 || dotposition<atposition+2|| dotposition+2>=email.length){
                     $('.emailAlert').show().addClass("text-danger").removeClass("text-success").text("invalid email");
                      email_state = false;
                }else{
					 $('.emailAlert').show().addClass("text-success").removeClass("text-danger").text("valid email");
                    // $('.emailAlert').show().addClass("text-success").addClass("show").text("valid email");
                      email_state = true;
                }
				console.log(email_state);
			});
	    $('.login-page #login-password').on('blur',function(){
			    var loginpassword = $('#login-password').val();
				if(loginpassword!=''){
					password_state=true;
				}else{
					password_state=false;
				}
				
		});
		
		$('.loginBtn').on("click",function(){
			if(email_state==true&password_state==true){
				//get values from form
				var email = $('#login-email').val().trim();
				var loginpassword = $('#login-password').val().trim();
				$.ajax({
					url:"insertData.php",
					method:"POST",
					data:{
						login:true,
						email,
						loginpassword
					},
					success:function(data){
						
						var jsdata=JSON.parse(data);
						console.log(jsdata);
						if(jsdata.pass_error=='true'){
							
							//get cart items from localstorage
							let items = JSON.parse(localStorage.getItem("carT"));
							console.log(items);
							let len = items.length;
							let i;
							for(i=0; i<len; i++){
								console.log(items[i].unid);
								$.ajax({
									url:"insertData.php",
									method:"POST",
									data:{
										getLocalstorage:true,
										email,
										category:items[i].category,
										description:items[i].description,
										hotdeals:items[i].hotdeals,
										qnty:items[i].newQnty,
										price:items[i].price,
										TotalPrice:items[i].totalPrice,
										unid:items[i].unid,
									},
									success:function(data){
										//alert(data);
										console.log(data);
									}
								});
							}
							if(i==len){
								let itemsArray=[];
								var arr = [{"totalPrice":''}];
								localStorage.setItem('carT',JSON.stringify(itemsArray));
								localStorage.setItem('TotalCart',JSON.stringify(arr));
								//var url = window.location.href;
								var msg="login succesfull";
					        alertMessage(alertmessage,msg);
							
							setTimeout(function(){
								window.location.reload();
							},2500);
							$('.logPasslAlert').show().removeClass("text-danger").text(" ");
							}
							/*
							var url = window.location.href;
							setTimeout(function(){
								window.location.href=url;
							},2000);
							$('.logPasslAlert').show().removeClass("text-danger").text(" ");*/
						}else{
							$('.logPasslAlert').show().addClass("text-danger").text("Wrong password");
						}
						/*console.log(jsdata.session);
						if(jsdata.session!=''){
							//get all the bata in local storage and send it to database
							
							//clear localstorage
							console.log(window.location.href);
							//reidirect to curent page
							var url = window.location.href;
							setTimeout(function(){
								window.location.href=url;
							},2000);
						}else{
							console.log("nor set");
						}*/
					}
				});
				console.log("valid form");
			}else{
				console.log("invalid form");
			}
		});
		
		//registration form
		$('.register-page #register-email').on("blur",function(){
			var email = $('#register-email').val();
				var atposition =email.indexOf("@");
                var dotposition =email.lastIndexOf(".");
                if(atposition<1 || dotposition<atposition+2|| dotposition+2>=email.length){
                     $('.emailAlert').show().addClass("text-danger").removeClass("text-success").text("invalid email");
                      
					  reg_email_state = false;
                }else{
					 
                    // $('.emailAlert').show().addClass("text-success").addClass("show").text("valid email");
                      //reg_email_state = true;
					  //chek if email exists
					  $.ajax({
						  url:"insertData.php",
									method:"POST",
									data:{
										regEmail:email
									},
									success:function(data){
										//alert(data);
										if(data=="exists"){
											$('.emailAlert').show().removeClass("text-success").addClass("text-danger").text("email exists");
										}else if(data=="doesnt exist"){
											$('.emailAlert').show().addClass("text-success").removeClass("text-danger").text("valid email");
											reg_email_state = true;
										}
									}
					  });
                }
		});
		$('#register-phone').on("blur",function(){
			var registerphone =$('#register-phone').val();
			if(registerphone!=''){
				if(registerphone.length==10){
					if(registerphone[0]=='0'){
						$('.phoneAlert').show().addClass("text-success").removeClass("text-alert").text("valid phone number");
					     reg_phone_state=true;
				    }else{
					  $('.phoneAlert').show().addClass("text-danger").removeClass("text-success").text("Invalid phone number");
					  reg_phone_state=false;
				    }
				}else{
					$('.phoneAlert').show().addClass("text-danger").removeClass("text-success").text("Invalid phone number");
				}
				
			}else{
				$('.phoneAlert').show().addClass("text-danger").removeClass("text-success").text("empty phone number");
			}
		});
		
		//password validation
		
		$('#register-confirmPassword').on("input",function(){
			var registerpassword =$('#register-password').val();
			var registerconfirmPassword =$('#register-confirmPassword').val();
			console.log(registerpassword);
			console.log(registerconfirmPassword);
			if(registerpassword!=''&&registerpassword!='0' && registerpassword!='12345'){
				if(registerpassword==registerconfirmPassword){
					$('.passwordAlert').show().addClass("text-success").removeClass("text-danger").text("password matches");
					reg_password_state=true;
				}else{
					$('.passwordAlert').show().addClass("text-danger").removeClass("text-success").text("password does't match");
					reg_password_state=false;
				}
			}else{
				$('.passwordAlert').show().addClass("text-danger").removeClass("text-success").text("empty password");
				reg_password_state=false;
			}
		});
		
		$('.registerBtn').on("click",function(){
			console.log("clicked");
			console.log(reg_phone_state);
			console.log(reg_email_state);
			console.log(reg_password_state);
			
			if(reg_password_state==true && reg_email_state==true && reg_phone_state==true){
				//send data to datbase
				var email = $('#register-email').val().trim();
				var registerphone =$('#register-phone').val().trim();
				var registerconfirmPassword =$('#register-confirmPassword').val().trim();
				$.ajax({
					url:"insertData.php",
					method:"POST",
				    data:{
						registration:true,
						email,
						registerphone,
						registerconfirmPassword
					},
					success:function(data){
						if(data=="registered"){
							//get cart items from localstorage
							let items = JSON.parse(localStorage.getItem("carT"));
							console.log(items);
							let len = items.length;
							let i;
							for(i=0; i<len; i++){
								console.log(items[i].unid);
								$.ajax({
									url:"insertData.php",
									method:"POST",
									data:{
										getLocalstorage:true,
										email,
										category:items[i].category,
										description:items[i].description,
										hotdeals:items[i].hotdeals,
										qnty:items[i].newQnty,
										price:items[i].price,
										TotalPrice:items[i].totalPrice,
										unid:items[i].unid,
									},
									success:function(data){
										//alert(data);
										console.log(data);
									}
								});
							}
							if(i==len){
								let itemsArray=[];
								var arr = [{"price":''}];
								localStorage.setItem('carT',JSON.stringify(itemsArray));
								localStorage.setItem('TotalCart',JSON.stringify(arr));
								//var url = window.location.href;
								var msg="Registration successful";
					        alertMessage(alertmessage,msg);
							
							setTimeout(function(){
								window.location.reload();
							},3000);
							}
						}else if(data=="registation error"){
							var msg="An error occured";
					            alertMessage(alertmessage,msg);
								
						}
					}
				});
			}else{
				
			}
		});
});
