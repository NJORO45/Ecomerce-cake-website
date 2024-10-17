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
		totalPrice
	};
	return itemsObject;
}
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

function getElement(element){
    const unid = element.querySelector("#unid").value;
	const hotdeals = element.querySelector("#hotdeals").value;
	const category = element.querySelector("#category").value;
	const price = element.querySelector("#price").innerText;
	const qnty = element.querySelector("#productQnty").innerText;
	const description = element.querySelector("#description").innerText;
	let newinex = qnty.indexOf("K"); 
	let newQnty =Number(qnty.slice(0,newinex));
	const totalPrice=price * newQnty;
	itemsArray = [{
		unid,
		hotdeals,
		category,
		description,
		price,
		newQnty,
		totalPrice
	}];
	var itemsObject = {
		unid,
		hotdeals,
		category,
		description,
		price,
		newQnty,
		totalPrice
	};
	//return itemsObject;
	var totalArray=[{
		totalPrice
	}];
	//add to localStorage
	addtoLocalStorage(itemsArray,itemsObject,totalArray);
	console.log(typeof(totalPrice));
	
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
			 let newTotalPrice = (currentTotalPrice * newqnty).toString();
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
					url:"../php/cartPageTotal.php",
					method:"GET",
					success:function(data){
						let Data = JSON.parse(data);
						//Data['totalQuery']
						//console.log(Data['cartQuery']);
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
document.addEventListener("DOMContentLoaded",function(){
const element1 = document.querySelector(".element1");
const element2 = document.querySelector(".element2");
const element3 = document.querySelector(".element3");
const element4 = document.querySelector(".element4");
const logincontainers = document.querySelector(".login-containers");
const loginpage = document.querySelector(".login-page");
const times1 = document.querySelector("#times1");
const times2 = document.querySelector("#times2");
const registerpage = document.querySelector(".register-page");
const signupLink = document.querySelector(".signupLink");
const loginLink = document.querySelector(".loginLink");
const tbody = document.querySelector("#tbody");
const alertmessage = document.querySelector(".alert-message");

var i;

	const url =window.location.href;
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
	console.log(urlExtr2);
	
	
	
	const content1 = document.querySelector("#content1");
	const hiddennid = document.querySelector("#hiddennid");
	
		$.ajax({
		url:"../php/SessionCheck.php",
		method:"GET",
		dataType:"json",
		success:function(data){
			
			//console.log(hiddennidval);
			if(data!=''){
				hiddennid.value='2';
				
			}else{
				
			}
              
			  //console.log(hiddennidvalue);
			
			///
			
		}
		
		
	});
	setTimeout(function(){
		const hiddennidvalue =  document.querySelector("#hiddennid").value;
		console.log(hiddennidvalue);
		if(hiddennidvalue==2){
			//loged in
			element3.classList.add("fa");
		    element3.classList.add("fa-user");
		
		    element4.classList.add("fa");
		    element4.classList.add("fa-sign-out");
			
			element1.innerHTML='';
			element2.innerHTML='';
			//add event listener 
			
			
				 setTimeout(function(){
					 
				 const addToChart = document.querySelectorAll("#addToChart");
				 const customize = document.querySelectorAll("#customization");
				 console.log(addToChart);
			addToChart.forEach(function(btn){
				console.log(btn);
					btn.addEventListener("click",function(e){
						console.log(urlExtr);
						const element = e.currentTarget.parentElement.parentElement.parentElement;
						//get elements
						console.log(element);
						const divCon = getElement2(element);
						//console.log(divCon);
						$.ajax({
							url:"../php/insertData.php",
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
								}else if(data=="success"){
									var msg="added to cart";
					                alertMessage(alertmessage,msg);
								}
							}
						});
						getCartTotalFromDB();
						 
					});
					customize.forEach(function(custom){
				custom.addEventListener("click",function(e){
					//alert("kindly login to add customization  ");
					const element = e.currentTarget.parentElement.parentElement.parentElement;
					console.log(element);
					var unidValue = element.querySelector("#unid").value;
					var hotdeals = element.querySelector("#hotdeals").value;
					//console.log();
					window.location.href='product-cusomization.php?id=' + unidValue + '&hotdeal=' + hotdeals ;
					
					
					
				});
			});
			});
				 },200);
      document.addEventListener("DOMContentLoaded", getCartTotalFromDB());
   
	
	
		}else if(hiddennidvalue==1){
			//loged out
			element3.classList.remove("fa");
		    element3.classList.remove("fa-user");
		
		    element4.classList.remove("fa");
		    element4.classList.remove("fa-sign-out");
			
			element1.innerHTML='Register';
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
			//add event listener 
			const addToCart = document.querySelectorAll("#addToChart");
			const customize = document.querySelectorAll("#customization");
			addToCart.forEach(function(btn){
				btn.addEventListener("click",function(e){
				let element =e.currentTarget.parentElement.parentElement.parentElement;
				getElement(element);
				let cartLen = JSON.parse(localStorage.getItem("carT")).length;
				console.log(cartLen);
				updateCart();
			});
			});
			customize.forEach(function(custom){
				custom.addEventListener("click",function(){
					//alert("kindly login to add customization  ");
					var msg="login to customize";
					alertMessage(alertmessage,msg);
					
					
				});
			});
			
			 setTimeout(function () {
      document.addEventListener("DOMContentLoaded", updateCart());
    }, 10)
		}
	},2000);
	//get data from bd
	$.ajax({
		url:"../php/get-categories.php",
		method:"POST",
		data:{
			getCategory:true,
		    urlExtr2
		   },
		success:function(data){
			let items = JSON.parse(data);
			
			console.log(items);
			if(data =='[]'){
				let con = `<p>There are no products of selected category</p>`;
				content1.innerHTML=con;
			}else{
				let map = items.map(function(item){
				console.log(item);
				return `
				   <div class=" col-9 col-sm-8 col-md-6 col-lg-4 border nested-container" style="width:auto; background-color:;height:auto; padding: 0;margin: 2px; padding-bottom:50px;">
			        	<div style="display: flex; flex-direction: column;">
			        	<input id="unid" type="" name="" value="${item.unid}" hidden="" />
			        	<input id="hotdeals" type="" name="" value="${item.hotDeals}" hidden="" />
			        	<input id="category" type="" name="" value="${item.category}" hidden="" />
			        	
			        	
			<img id="img" src="../${item.image}" style="width: 100%; height: 200px;"/>
			<div id="description" class="p-2 text-center">${item.description}</div>
			<div class="priceqnty" style=" display:flex; flex-direction:row; width:100%; justify-content:center; align-items:center; gap:10px;color: #d07ea7;">
			   
			   <div style="position: ; display: flex; flex-direction: row; color: #d07ea7;gap:2px;"><span id="productQnty">${item.qnty}<span/> <span>Kg<span/>
			    </div>
				<div>
			         <span class="mr-2">Kes<span/>
			         <span id="price">${item.price}<span/>
			   </div>
			</div>
			          <div class="btn-group" style="margin-top: 5px;display: flex; justify-content: center; align-items:center;flex-direction: row; bottom:0; position:absolute; height:50px;width:100%;">
			          	  
			          	  	<input  id="customization" class="btn btn-purple btn-sm  mr-2" type="button" value="customize"name="" >
			          	  
			                
			                 <input id="addToChart" class="btn btn-purple btn-sm" type="button" value="Add to cart"name="" >
			              
			          </div>
			          </div>
			        </div>
				`;
			}).join(" ");
			//console.log(map);
			content1.innerHTML=map;
			
			
			}
			
			
		}
		
	});
	
	
});

function updateCart(){
	//update cart
const cartTotal = document.querySelector("#cartTotal");
let length =JSON.parse(localStorage.getItem("carT"));
						
						console.log(length.length);
                         cartTotal.innerHTML = length.length;
}