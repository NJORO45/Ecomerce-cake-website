function getElement2(Element){
	var child = Element.children
	const unid = child[0].querySelector("input").value;
	const price = Element.querySelector(".subTotal").innerText;
	const qnty= 1;
	var itemsObject = {
		unid,
		price,
		qnty
	};
	return itemsObject;
}
function getElement3(element){
	const unid = element.querySelector("#unid").value;
	const price = element.querySelector("#price").innerText;
	const img = element.querySelector("#img").src;
		const qnty = element.querySelector("#productQnty").innerText;
	let newinex = qnty.indexOf("K"); 
	let newQnty =Number(qnty.slice(0,newinex));
	const totalPrice=price * newQnty;
	var itemsObject = {
		unid,
		price,
		img,
		newQnty,
		totalPrice
	};
	return itemsObject;
}

function getElement(element){
	const unid = element.querySelector("#unid").value;
	const price = element.querySelector("#price").innerText;
	const img = element.querySelector("#img").src;
		const qnty = element.querySelector("#productQnty").innerText;
	let newinex = qnty.indexOf("K"); 
	let newQnty =Number(qnty.slice(0,newinex));
	const totalPrice=price * newQnty;
	itemsArray = [{
		unid,
		price,
		img,
		newQnty,
		totalPrice
	}];
	var itemsObject = {
		unid,
		price,
		img,
		qnty,
		totalPrice
	};
	//return itemsObject;
	var totalArray=[{
		price
	}];
	//add to localStorage
	addtoLocalStorage(itemsArray,itemsObject,totalArray);
	//console.log(items);
	
}
//setup local storage
function setupLocalStorage(){
	const price = "";;
	itemsArray = [];
	
	//return itemsObject;
	var totalArray=[{
		price
	}];
	//add to localStorage
		localStorage.setItem('carT',JSON.stringify(itemsArray));
		localStorage.setItem('TotalCart',JSON.stringify(totalArray));
}
//update db
function updateDb(content){
	$.ajax({
		url:"../php/insertData.php",
		method:"POST",
		data:{
			updateCartMinus:true,
			unid:content.unid,
		    price:content.price,
		    qnty:content.qnty
		},
		success:function(data){
			console.log(data);
			if(data=="success"){
				getCartTotalFromDB();
				//window.location.reload();
				console.log(data);
			}else{
				console.log(data);
			}
		}
	});
	
}
function updateDb2(content){
	//console.log("ddd");
	$.ajax({
		url:"../php/insertData.php",
		method:"POST",
		data:{
			updateCartPlus:true,
			unid:content.unid,
		    price:content.price,
		    qnty:content.qnty
		},
		success:function(data){
			console.log(data);
			if(data=="success"){
				getCartTotalFromDB();
				//window.location.reload();
			}
		}
	});
	
}
function updateDb3(content){
	const alertmessage = document.querySelector(".alert-message");
	$.ajax({
		url:"../php/insertData.php",
		method:"POST",
		data:{
			updateCartRemove:true,
			unid:content.unid
		},
		success:function(data){
			console.log(data);
			if(data=="success"){
				var msg="item removed";
				alertMessage(alertmessage,msg);
				setTimeout(()=>{
					getCartTotalFromDB();
				//window.location.reload();
				},2600)
				
			}
		}
	});
	
}
//add to local storage
function addtoLocalStorage(itemsArray,itemsObject,totalArray){
	// check if localStorage is empty
	let exists =localStorage.getItem("carT");
	if(exists ==''){
		//add to localStorage
		localStorage.setItem('carT',JSON.stringify(itemsArray));
		localStorage.setItem('TotalCart',JSON.stringify(totalArray));
	}else{
		// check if item exists
		exists = JSON.parse(localStorage.getItem("carT"));
		let TotalCart = JSON.parse(localStorage.getItem("TotalCart"));
		let newTotal=Number(TotalCart[0].price)+ Number(totalArray[0].price);
		TotalCart[0].price=newTotal;
		localStorage.setItem('TotalCart',JSON.stringify(TotalCart));
		
		
		//console.log(itemsObject.unid);
		objIndex = exists.findIndex(obj => obj.unid ==itemsObject.unid);
		//objIndex = exists.indexOf(itemsObject.unid);
		//console.log(objIndex);
		if(objIndex==-1){
			//item does not exists
			 exists.push(itemsObject);
			localStorage.setItem('carT',JSON.stringify(exists));
		}else{
			//console.log(exists.length);
			for(let i=0; i < exists.length; i++){
				//console.log(exists[i].unid);
				if(exists[i].unid==itemsObject.unid){
				let  indexval=Number( exists[i].qnty);
			 
			  let sum = 1;
			  let newqnty = (indexval + sum).toString();
			  // console.log(newqnty);
			  //calculate new price
			 let currentTotalPrice = Number( exists[i].price);
			 //console.log(currentTotalPrice);
			 let newTotalPrice = (currentTotalPrice * newqnty).toString();
			 // console.log(newqnty);
					exists[i].qnty=newqnty;
					exists[i].totalPrice = newTotalPrice;
					//console.log(exists);
					localStorage.setItem('carT',JSON.stringify(exists));
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
function btnFunction(){
	const minus = document.querySelectorAll(".minus");
				const plus = document.querySelectorAll(".plus");
				const remove = document.querySelectorAll("#btn");
						 minus.forEach(function(btn){
							 btn.addEventListener("click",function(e){
								 const element2 = e.currentTarget.parentElement.parentElement;
								 const content = getElement2(element2);
								 //funtion to inset to db
								 updateDb(content);
								 //console.log(content);
							 });
						 });
						 plus.forEach(function(btn){
							 btn.addEventListener("click",function(e){
								 const element2 = e.currentTarget.parentElement.parentElement;
								 const content = getElement2(element2);
								 console.log(content);
								 //funtion to inset to db
								 updateDb2(content);
								 //console.log('CONT');
							 });
						 });
						 remove.forEach(function(btn){
							 btn.addEventListener("click",function(e){
								 const element2 = e.currentTarget.parentElement.parentElement;
								 const content = getElement2(element2);
								 //funtion to inset to db
								 updateDb3(content);
								  console.log(content);
							 });
						 });
}
function getCartTotalFromDB(){
	setTimeout(function(){
				const cartTotal = document.querySelector("#cartTotal");
			    const totalAmountchild = document.querySelector(".totalAmountchild");
				const tableresponsive = document.querySelector(".table-responsive");
                const cartempty =  document.querySelector(".cartEmpty");
			    $.ajax({
					url:"../php/cartPageTotal.php",
					method:"GET",
					success:function(data){
						let Data = JSON.parse(data);
						let contentLength =Data['cartQuery'].length;
						let i=0;
						console.log(Data['cartQuery'].length);
						cartTotal.innerHTML=Data['totalQuery'];
						totalAmountchild.innerHTML=Data['totalPrice'];
						let map = Data['cartQuery'].map(function(item){
							console.log(item);
							//console.log(item[5]);
							//return item[5];
							i++;
							console.log(i);
							return `<tr class="tr">
	                                  <td style="display:none;"><input id="input1${i}" value="${item[4]}" hidden="" /></td>
	                                  <td class="item"><img src="../${item.image}"/></td>
		                              <td>fruits</td>
		                              <td class="editQnty">
		                              <div class="plus" id="Plus">
			                                <i class="fa fa-plus"  aria-hidden="true"></i>
			                          </div>
			                          <div class="input">
			                                <input id="input2" type="text" value='${item.qnty}' />
			                          </div>
			                          <div class="minus">
			                                <i class="fa fa-minus " aria-hidden="true"></i>
			                          </div>
		                              </td>
		                              <td class="subTotal">${item.price}</td>
		                              <td class="Total">${item.TotalPrice}</td>
		                              <td><button id="btn" class="btn btn-xs btn-danger" >remove</button></td>
	                                  </tr>`;
						            }).join("");
						//console.log(map);
						tbody.innerHTML=map;
						
						if(Data['cartQuery'].length!=0){
							btnFunction();
							cartempty.classList.remove("add");
                            tableresponsive.classList.add("add");
						}else{
							cartTotal.innerHTML='0';
							cartempty.classList.add("add");
                            tableresponsive.classList.remove("add");
						}
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
	//setupLocalStorage();
var cartCount='';
const element1 = document.querySelector(".element1");
const element2 = document.querySelector(".element2");
const element3 = document.querySelector(".element3");
const element4 = document.querySelector(".element4");
 const hiddennid = document.querySelector("#sessionid1");
 const logincontainers = document.querySelector(".login-containers");
 const loginpage = document.querySelector(".login-page");
 const times1 = document.querySelector("#times1");
const times2 = document.querySelector("#times2");
const registerpage = document.querySelector(".register-page");
const signupLink = document.querySelector(".signupLink");
const loginLink = document.querySelector(".loginLink");
const tbody = document.querySelector("#tbody");
var userId='';
const alertmessage = document.querySelector(".alert-message");


	
	//updateCart();
	$.ajax({
		url:"SessionCheck.php",
		method:"GET",
		dataType:"json",
		success:function(data){
			
			//console.log(data);
			if(data!=''){
				hiddennid.value='2';
				
			}else{
				
			}

			
			///
			
		}
		
		
	});
	setTimeout(function(){
		hiddennidval= document.querySelector("#sessionid2").value;
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
			addToChart.forEach(function(btn){
					btn.addEventListener("click",function(e){
						
						const Element = e.currentTarget.parentElement.parentElement.parentElement;
						//get elements
						console.log(Element);
						const divCon = getElement2(Element);
						$.ajax({
							url:"insertData.php",
							method:"POST",
							data:{
								addCart:true,
								itemUnid:divCon.unid,
								price:divCon.price,
								Qnty:divCon.qnty,
								checkoutState:false
							},
							success:function(data){
								console(data);
							}
						});
						getCartTotalFromDB();
						 
					});
			});
			
			//add total to carT from db
			getCartTotalFromDB();
			//add and minus qnty in databaseccc
		
			
						 
				
		} else if(hiddennidval==1){
			//session not set
			console.log("empty");
			element3.classList.remove("fa");
		    element3.classList.remove("fa-user");
		
		    element4.classList.remove("fa");
		    element4.classList.remove("fa-sign-out");
			
			element1.innerText="Register";
			element2.classList.add("fa");
			element2.classList.add("fa-sign-in");
			//add login page
			element1.addEventListener("click",function(){
				console.log("log");
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
				
			//login and register page
				var email_state=false;
	var password_state=false;
	var reg_password_state=false;
	var reg_mail=false;
	var reg_phone=false;
	
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
								console.log(items[i].unid);
								$.ajax({
									url:"insertData.php",
									method:"POST",
									data:{
										getLocalstoage:true,
										email,
										unid:items[i].unid,
										qnty:items[i].qnty,
										qnty:items[i].price,
										qnty:items[i].totalPrice
									},
									success:function(data){
										//alert(data);
										console.log(data);
									}
								});
							    }
							     if(i==len){
								let itemsArray=[];
								localStorage.setItem('carT',JSON.stringify(itemsArray));
								var url = window.location.href;
								console.log(url);
							    setTimeout(function(){
								window.location.reload();
							       },200);
							     $('.logPasslAlert').show().removeClass("text-danger").text(" ");
							    }
							}else{
								var url = window.location.href;
								console.log(url);
								window.location.reload();
							    $('.logPasslAlert').show().removeClass("text-danger").text(" ");
							}
							
							var url = window.location.href;
							setTimeout(function(){
								window.location.reload();
							},2000);
							$('.logPasslAlert').show().removeClass("text-danger").text(" ");
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
					 $('.emailAlert').show().addClass("text-success").removeClass("text-danger").text("valid email");
                    // $('.emailAlert').show().addClass("text-success").addClass("show").text("valid email");
                      reg_email_state = true;
                }
		});
		$('#register-phone').on("blur",function(){
			var registerphone =$('#register-phone').val();
			if(registerphone!=''){
				if(registerphone.length==10){
					if(registerphone[0]=='0'){
						$('.phoneAlert').show().addClass("text-success").removeClass("text-alert").text("valid phone number");
					     reg_phone==true;
				    }else{
					  $('.phoneAlert').show().addClass("text-danger").removeClass("text-success").text("Invalid phone number");
					  reg_phone=false;
				    }
				}else{
					$('.phoneAlert').show().addClass("text-danger").removeClass("text-success").text("Invalid phone number");
				}
				
			}else{
				$('.phoneAlert').show().addClass("text-danger").removeClass("text-success").text("empty phone number");
			}
		});
		
		//password validation
		
		$('#register-confirmPassword').on("blur",function(){
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
			
	var reg_password_state=false;
	var reg_mail=false;
	var reg_phone=false;
			if(reg_password_state==true && reg_mail==true && reg_phone==true){
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
					success:function(){
						
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
			setupLocalStorage();
		}else{
			cartTotal.innerHTML = length.length;
		}
}
