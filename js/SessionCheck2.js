function getElement2(element){
	const unid = element.querySelector("#unid").value;
	const hotdeals = element.querySelector("#hotdeals").value;
	const category = element.querySelector("#category").value;
	const price = element.querySelector("#price").innerText;
	const img = element.querySelector("#img").src;
	const qnty= element.querySelector("#productQnty").innerText;
	const description = element.querySelector("#description").innerHTML;
	let newinex = qnty.indexOf("K"); 
	let newQnty =Number(qnty.slice(0,newinex));
	let originalQnty =newQnty;
	//console.log(qnty.slice(0,newinex));
	const totalPrice=price;
	var itemsObject = {
		unid,
		hotdeals,
		category,
		description,
		price,
		img,
		newQnty,
		originalQnty,
		totalPrice
	};
	return itemsObject;
}


function getElement(element){
	const unid = element.querySelector("#unid").value;
	const hotdeals = element.querySelector("#hotdeals").value;
	const category = element.querySelector("#category").value;
	const price = element.querySelector("#price").innerText;
	const qnty = element.querySelector("#productQnty").innerText;
	const img = element.querySelector("#img").src;
	const description = element.querySelector("#description").innerText;
	let newinex = qnty.indexOf("K"); 
	let newQnty =Number(qnty.slice(0,newinex));
	let originalQnty =newQnty;
	const totalPrice=price * (newQnty/newQnty);
	itemsArray = [{
		unid,
		img,
		hotdeals,
		category,
		description,
		price,
		newQnty,
		originalQnty,
		totalPrice
	}];
	var itemsObject = {
		unid,
		img,
		hotdeals,
		category,
		description,
		price,
		originalQnty,
		newQnty,
		totalPrice
	};
	//return itemsObject;
	var totalArray=[{
		totalPrice
	}];
	//add to localStorage
	addtoLocalStorage(itemsArray,itemsObject,totalArray);
	//console.log(typeof(totalPrice));
	
}
function setupLocalStorage(){
	const totalPrice = "";
	itemsArray = [];
	
	//return itemsObject;
	var totallArray=[{
		totalPrice
	}];
	//add to localStorage
		localStorage.setItem('carT',JSON.stringify(itemsArray));
		localStorage.setItem('TotalCart',JSON.stringify(totallArray));
}
//add to local storage
function addtoLocalStorage(itemsArray,itemsObject,totalArray){
	// check if localStorage is empty
	const alertmessage = document.querySelector(".alert-message");
	let exists =localStorage.getItem("carT");
	console.log(exists);
	if(exists ==''|| exists==null){
		setupLocalStorage();
		//add to localStorage
		localStorage.setItem('carT',JSON.stringify(itemsArray));
		localStorage.setItem('TotalCart',JSON.stringify(totalArray));
	}else{
		console.log(totalArray);
		// check if item exists
		exists = JSON.parse(localStorage.getItem("carT"));
		let TotalCart = JSON.parse(localStorage.getItem("TotalCart"));
		let newTotal=Number(TotalCart[0].totalPrice)+ Number(totalArray[0].totalPrice);
		TotalCart[0].totalPrice=newTotal;
		localStorage.setItem('TotalCart',JSON.stringify(TotalCart));
		
		
		//console.log(itemsObject.unid);
		objIndex = exists.findIndex(obj => obj.unid ==itemsObject.unid);
		//objIndex = exists.indexOf(itemsObject.unid);
		//console.log(objIndex);
		if(objIndex==-1){
			//item does not exists
			 exists.push(itemsObject);
			localStorage.setItem('carT',JSON.stringify(exists));
			var msg="added to cart";
			alertMessage(alertmessage,msg);
		}else{
			//console.log(exists.length);
			for(let i=0; i < exists.length; i++){
				//console.log(exists[i].unid);
				if(exists[i].unid==itemsObject.unid){
				let  indexval=Number( exists[i].newQnty);
			 
			  let sum = itemsObject.newQnty;
			  let newqnty = (indexval + sum).toString();
			  // console.log(newqnty);
			  //calculate new price
			 let currentTotalPrice = Number( exists[i].price);
			 //console.log(currentTotalPrice);
			 let newTotalPrice = (currentTotalPrice * (newqnty/sum)).toString();
			 // console.log(newqnty);
					exists[i].newQnty=newqnty;
					exists[i].totalPrice = newTotalPrice;
					//console.log(exists);
					localStorage.setItem('carT',JSON.stringify(exists));
					var msg="changes saved";
					alertMessage(alertmessage,msg);
				}else{
					//console.log("not same");
				}
			}
			/*//item  exists
			  let  indexval=Number( exists[objIndex].qnty);
			  //console.log(indexval);
			  let sum = 1;
			  let newqnty = (indexval + sum).toString();
			  //console.log(newqnty);
			  
		      exists[objIndex].qnty=newqnty;
		      //console.log(x);
		      //localStorage.setItem('carT',JSON.stringify(exists))
			*/
		}
	}
	
	
}
function getCartTotalFromDB(){
	setTimeout(function(){
				const cartTotal = document.querySelector("#cartTotal");
			
			    $.ajax({
					url:"./php/cartPageTotal.php",
					method:"GET",
					success:function(data){
						let Data = JSON.parse(data);
						//Data['totalQuery']
						console.log(data);
						cartTotal.innerHTML=Data['totalQuery'];
					}
					
			    });
			},200);
};
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
	
var cartCount='';
const element1 = document.querySelector(".element1");
const element2 = document.querySelector(".element2");
const element3 = document.querySelector(".element3");
const element4 = document.querySelector(".element4");
 const hiddennid = document.querySelector(".sessionid1");
 const logincontainers = document.querySelector(".login-containers");
 const loginpage = document.querySelector(".login-page");
 const times1 = document.querySelector("#times1");
const times2 = document.querySelector("#times2");
const registerpage = document.querySelector(".register-page");
const signupLink = document.querySelector(".signupLink");
const loginLink = document.querySelector(".loginLink");
const alertmessage = document.querySelector(".alert-message");

 var userId='';

const url = window.location.href;
	let index = url.indexOf("=") +1;
	console.log(url.indexOf("="));
	let urlExtr=url.slice(index,url.length);
	let urlExtr2 ;
	//console.log();
	console.log(url.slice(index,url.length));
	console.log(urlExtr.includes("#"));
	if(urlExtr.includes("#")==true){
		urlExtr2=url.slice(index,url.length-1);
		console.log("match");
	}else if(urlExtr.includes("#")==false){
		urlExtr2=url.slice(index,url.length);
		console.log("not found");
	}

	
	//updateCart();
	$.ajax({
		url:"./php/SessionCheck.php",
		method:"GET",
		dataType:"json",
		success:function(data){
			
			console.log(data);
			if(data!=''){
				hiddennid.value='2';
				
			}else{
				
			}

			
			///
			
		}
		
		
	});
	setTimeout(function(){
		const hiddennidval= document.querySelector(".sessionid1").value;
		console.log(hiddennidval);
		if(hiddennidval==2){
			//change home page when ged in
			element3.classList.add("fa");
		    element3.classList.add("fa-user");
		
		    element4.classList.add("fa");
		    element4.classList.add("fa-sign-out");
			
			element1.innerHTML='';
			element2.innerHTML='';
			//session set
			//console.log("empty");
			const addToChart = document.querySelectorAll("#addToChart");
			const customization = document.querySelectorAll("#customization");
			addToChart.forEach(function(btn){
					btn.addEventListener("click",function(e){
						
						const element = e.currentTarget.parentElement.parentElement.parentElement;
						//get elements
						console.log(element);
						const divCon = getElement2(element);
						$.ajax({
							url:"./php/insertData.php",
							//url:"https://ca2e-102-215-34-198.ngrok-free.app/php/insertData.php",
							method:"POST",
							data:{
								addCart:true, 
								hotdeals:divCon.hotdeals,
								category:divCon.category,
								description:divCon.description,
								itemUnid:divCon.unid,
								price:divCon.price,
								Qnty:divCon.newQnty,
								urlExtr2:urlExtr2,
								checkoutState:false
							},
							success:function(data){
								console.log(data);
								if(data=="exist"){
									var msg="change saved";
					                alertMessage(alertmessage,msg);
								}else if(data=="does not exist"){
									var msg="added to cart";
					                alertMessage(alertmessage,msg);
								}else {
									var msg="item out of stock, kindly refresh your page/login again";
					                alertMessage(alertmessage,msg);
								}
							}
						});
						getCartTotalFromDB();
						 
					});
			});
	element4.addEventListener("click",()=>{
		console.log("clicked");
		$.ajax({
			url:"./php/logout.php",
			method:"GET",
			dataType:"html",
			success:function(data){
				if(data=="success"){
					var msg="loging out";
		            alertMessage(alertmessage,msg);
		            setTimeout(function(){
		            window.location="index.html";
		            },3000);
					console.log("success");
				}else{
					console.log("error occured");
				}
			}
		});
		
	});
			
			//add total to carT from db
			getCartTotalFromDB();
			//customization btn
				customization.forEach(function(custom){
				custom.addEventListener("click",function(e){
					//alert("kindly login to add customization  ");
					const element = e.currentTarget.parentElement.parentElement;
					var unidValue = element.querySelector("#unid").value;
					var hotdeals = element.querySelector("#hotdeals").value;
					//console.log();
					window.location.href='.../../php/product-cusomization.php?id=' + unidValue + '&hotdeal=' + hotdeals ;
					
					
				});
				});
		} else if(hiddennidval==1){
			//session not set
			//console.log("empty");
			element3.classList.remove("fa");
		    element3.classList.remove("fa-user");
		
		    element4.classList.remove("fa");
		    element4.classList.remove("fa-sign-out");
			
			element1.innerHTML='Register';
			//element2.innerHTML='Sign in';
			element2.classList.add("fa");
			element2.classList.add("fa-sign-in");
			//add login page
			element1.addEventListener("click",function(){
				//console.log("log");
				logincontainers.classList.add("add");
				registerpage.classList.add("add");
			});
			element2.addEventListener("click",function(){
				console.log("log");
				logincontainers.classList.add("add");
				loginpage.classList.add("add");
			});
			times1.addEventListener("click",function(){
		        loginpage.classList.remove("add");
		        logincontainers.classList.remove("add");
            })
            times2.addEventListener("click",function(){
	        	registerpage.classList.remove("add");
		        logincontainers.classList.remove("add");
            })
			signupLink.addEventListener("click",function(){
				registerpage.classList.add("add");
				loginpage.classList.remove("add");
			});
			loginLink.addEventListener("click",function(){
				registerpage.classList.remove("add");
				loginpage.classList.add("add");
			});
	//add to cart
				var total=0;
				const addToChart = document.querySelectorAll("#addToChart");
			    const customization = document.querySelectorAll("#customization");
				
				addToChart.forEach(function(btn){
					btn.addEventListener("click",function(e){
						
						const element = e.currentTarget.parentElement.parentElement.parentElement;
						//get elements
						console.log(element);
						getElement(element);
						const cartTotal = document.querySelector("#cartTotal");
                        const length =JSON.parse(localStorage.getItem("carT"));
						
						console.log(length);
                         cartTotal.innerHTML = length.length;
						cartCount = document.querySelector("#cartTotal").innerHTML;
						//console.log(x);
						
						 
					});
					//console.log(storage.getCart());
				});
				//customization btn
				customization.forEach(function(custom){
				custom.addEventListener("click",function(){
					//alert("kindly login to add customization  ");
					
					var msg="login to customize";
					alertMessage(alertmessage,msg);
					
					
				});
			});
			//login and register page
				var email_state=false;
	            var password_state=false;
	            var phone_state=false;
				
	            var reg_password_state=false;
	            var reg_email_state=false;
	            var reg_phone_state=false;
	
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
					url:".../../php/insertData.php",
					method:"POST",
					data:{
						login:true,
						email,
						loginpassword
					},
					success:function(data){
						console.log(data);
						
						var jsdata=JSON.parse(data);
						if(jsdata.pass_error=='true'){
							//get cart items from localstorage
							let items = JSON.parse(localStorage.getItem("carT"));
							console.log(items.length);
							let len = items.length;
							let i;
							
							
							if(len>0){
								console.log(">0");
								for(i=0; i<len; i++){
								console.log(items[i]);
								$.ajax({
									url:".../../php/insertData.php",
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
								console.log(arr);
								var msg="login successful";
					            alertMessage(alertmessage,msg);
							    setTimeout(function(){
								window.location.reload();
								
							       },3000);
							     $('.logPasslAlert').show().removeClass("text-danger").text(" ");
							    }
							}else{
								
								var msg="login successful";
					            alertMessage(alertmessage,msg);
								setTimeout(function(){
									window.location.reload();
								},3000);
							    $('.logPasslAlert').show().removeClass("text-danger").text(" ");
							}
							
							
							$('.logPasslAlert').show().removeClass("text-danger").text(" ");
						}else if(jsdata.pass_error=="email not found"){
							var msg="email not found";
					        alertMessage(alertmessage,msg);
						}else if(jsdata.pass_error=="false"){
							$('.logPasslAlert').show().addClass("text-danger").text("Wrong password");
							var msg="incorrect password";
					        alertMessage(alertmessage,msg);
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
						  url:".../../php/insertData.php",
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
					url:".../../php/insertData.php",
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
							console.log(items.length);
							let len = items.length;
							let i;
							
							
							if(len>0){
								console.log(">0");
								for(i=0; i<len; i++){
								console.log(items[i]);
								$.ajax({
									url:".../../php/insertData.php",
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
								console.log(arr);
								var msg="Registration successful";
					            alertMessage(alertmessage,msg);
							    setTimeout(function(){
								window.location.reload();
								
							       },3000);
							     $('.logPasslAlert').show().removeClass("text-danger").text(" ");
							    }
							}else{
								
								var msg="Registration successful";
					            alertMessage(alertmessage,msg);
								setTimeout(function(){
									window.location.reload();
								},3000);
							    $('.logPasslAlert').show().removeClass("text-danger").text(" ");
							}
							
							
							$('.logPasslAlert').show().removeClass("text-danger").text(" ");
							
						}else if(data=="registation error"){
							var msg="An error occured";
					            alertMessage(alertmessage,msg);
								
						}
					}
				});
			}else{
				
			}
		});
			
		}
	},2000);
	


 setTimeout(function () {
      document.addEventListener("DOMContentLoaded", updateCart());
    }, 10)
	
});

function updateCart(){
	//update cart
const cartTotal = document.querySelector("#cartTotal");
let length =JSON.parse(localStorage.getItem("carT"));
					if(length<1){
						console.log("nil");
						setupLocalStorage();
					}else{
						cartTotal.innerHTML = length.length;
					}	
						//console.log(length.length);
                         //cartTotal.innerHTML = length.length;
}
