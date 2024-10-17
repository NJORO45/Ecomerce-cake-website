function getElement(element){
	let hdval = element.querySelector("#hdvalue").value;
	return hdval;
}
function fixedalertMessage(alertmessage,msg){
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
function getCartTotalFromDB(){
	setTimeout(function(){
				const cartTotal = document.querySelector("#cartTotal");
			
			    $.ajax({
					url:"cartPageTotal.php",
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
window.addEventListener("DOMContentLoaded",()=>{
	const Checkbox = document.querySelectorAll("#checkbox");
	const checkoutHeader = document.querySelector(".checkoutHeader");
	const maincontainer = document.querySelector(".main-container");
	const Totalcomputation = document.querySelector(".Total-computation");
	const iframe = document.querySelector("#iframe");
	const srcIframe = document.querySelector("#iframe iframe");
	const loDet = document.querySelector("#loDet");
	const preceedbtn = document.querySelector("#preceedbtn");
	const statusId = document.querySelector("#statusId")
	const tbody =  document.querySelector("#tbody");
	const subtotal = document.querySelector("#sub-total");
	const taxtotal = document.querySelector("#tax-total");
	const DeliveryFee = document.querySelector("#DeliveryFee");
	const deliveryfee = document.querySelector("#delivery-fee");
	const overaltotal = document.querySelector("#overal-total");
	const selectone = document.querySelector(".element1");
const selecttwo = document.querySelector(".element2");
const selectthree = document.querySelector(".element3");
const selectfour = document.querySelector(".element4");
const tableresponsive = document.querySelector(".table-responsive");
const alertmessage = document.querySelector(".alert-message");
var selectCategory1 = document.querySelector("#selectCategory1");
var selectCategory2 = document.querySelector("#selectCategory2");
var selectCategory3 = document.querySelector("#selectCategory3");
	DeliveryFee.style.display="none";
	var checkStatus=false;
	var categoryState1=false;
	var categoryState2=false;
	var categoryState3=false;
	var val;
	var totalPrice;
	var sumedTotal = val + totalPrice;
	var loDetValue;
	var checkboxVal='';
	var quantity='';
	var total='';
	var tax='';
	iframe.style.display="none";
	getCartTotalFromDB();
	//get shoping cart content from database
	setInterval(function(){
		loDetValue = loDet.value;
		//console.log(loDetValue);
		if(loDetValue==true){
			//change home page when ged in
			selectthree.classList.add("fa");
		    selectthree.classList.add("fa-user");
		
		    selectfour.classList.add("fa");
		    selectfour.classList.add("fa-sign-out");
			
			selectone.innerHTML='';
			selecttwo.innerHTML='';
			tableresponsive.classList.add("add");
			
			$.ajax({
		url:"../php/cartPageTotal.php",
		method:"GET",
		success:function(data){
			let Data = JSON.parse(data);
			quantity=Data['cartQuery'].length;
			let map =Data['cartQuery'].map(function(items){
				
				return `
				<tr class="tr">
	    <td class="item"><img src="https://images.unsplash.com/photo-1601479604588-68d9e6d386b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuZGxlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/></td>
		<td>fruits</td>
		<td class="editQnty">
		    
			<div class="input">
			   <input id="input" type="text" disabled value=${items.qnty} />
			</div>
			
		</td>
		<td class="subTotal">${items.price}</td>
		<td class="Total">${items.price * items.qnty}</td>
	 </tr>
	 `;
			}).join("");
			totalPrice = Data['totalPrice'];
			
			tbody.innerHTML=map;
			subtotal.innerHTML=Data['totalPrice'] + " " + "kes";
			taxtotal.innerHTML = (Data['totalPrice']* 16)/100 + " " + "kes";
			tax=(Data['totalPrice']* 16)/100;
			//console.log(map);
		}
	});
	
	Checkbox.forEach((box)=>{
		box.addEventListener("change",(e)=>{
			for(var i=0; i<Checkbox.length; i++){
				Checkbox[i].checked=false;
			    e.target.checked=true;
				checkStatus=true;
				
			}
			const element = e.target.parentElement;
			val = getElement(element);
			checkboxVal=val;
			console.log(checkboxVal);
		})
	});
	setInterval(function(){
		//console.log(val);
		if(checkStatus==true){
			if(val ==0){
				DeliveryFee.style.display="none";
				overaltotal.innerHTML=(Number(val) + Number(totalPrice)) + " " + "kes";
				overalTotal=overaltotal;
				total=(Number(val) + Number(totalPrice));
	
			}else{
				DeliveryFee.style.display="block";
				deliveryfee.innerHTML=val + " " + "kes";
				overaltotal.innerHTML=(Number(val) + Number(totalPrice)) + " " + "kes";
				total=(Number(val) + Number(totalPrice));
			}
		}else if(checkStatus==false){
			DeliveryFee.style.display="none";
			overaltotal.innerHTML=totalPrice + " " + "kes";
		}
	},200);
	
	}else {
		selectthree.classList.remove("fa");
		    selectthree.classList.remove("fa-user");
		
		    selectfour.classList.remove("fa");
		    selectfour.classList.remove("fa-sign-out");
			
			selectone.innerText="Register";
			selecttwo.innerHTML="Sign in";
			
			preceedbtn.addEventListener("click",()=>{
		//checked if shiping details was selected
		alert("kindly login ");
	});
	}
	},100);
	/*
	setInterval(()=>{
		if(selectCategory1.value!="none"){
			categoryState1=true;
		}else{
			categoryState1=false;
		}
		if(selectCategory2.value!="none"){
			categoryState2=true;
		}else{
			categoryState2=false;
		}
		if(selectCategory3.value!="none"){
			categoryState3=true;
		}else{
			categoryState3=false;
		}
	},200);
	    */
	//add event listener to checkout Button
	preceedbtn.addEventListener("click",()=>{
		//if(categoryState1==true && categoryState2==true && categoryState3==true && checkStatus==true){
		if( checkStatus==true){
			//load iframe
			
			var msg="redirecting to payment";
			fixedalertMessage(alertmessage,msg);
			statusId.value="true";
			$.ajax({
				url:"insertData.php",
				method:"post",
				data:{
					paymentPopup:true,
					checkoutFile:true,
					deliveryFee:checkboxVal,
					qnty:quantity,
					productstotal:totalPrice,
					TotalVaue:total,
					tax:tax
				},
				success:function(data){
					console.log(data);
					let pasedData= JSON.parse(data);
					/*setInterval(function(){
						checkoutHeader.style.display="none";
			maincontainer.style.display="none";
			Totalcomputation.style.display="none";
						iframe.style.display="block";
					},200);*/
					
                   console.log(pasedData);
				  // srcIframe.src=pasedData;
				  window.location.href=pasedData;
				 //window.location.href="https://d5ed-102-215-34-198.ngrok-free.app/project/Baecakes/php/paymentValidation.php?OrderTrackingId=30fff1ac-5a78-4f8a-9324-dcb0e90682aa&OrderMerchantReference=1205502063";
				}
			});
			 /*totalPrice;
	checkboxVal
	quantity
	overalTotal
	tax
	selectCategory1.value*/
	//console.log(checkboxVal,quantity,total,tax,selectCategory1.value)
		//checked if shiping details was selected
		/*$.ajax({
			url:"../php/insertData.php",
			method:"POST",
			data:{
				checkoutFile:true,
				deliveryFee:checkboxVal,
				qnty:quantity,
				productstotal:totalPrice,
				TotalVaue:total,
				tax:tax,*/
				/*county:selectCategory1.value,
				town:selectCategory2.value,
				street:selectCategory3.value*/
				/*},
			success: function(data){
				console.log(data);
				if(data=='cartUpdated'){
					var msg="checkout succesful";
				alertMessage(alertmessage,msg);
				setTimeout(function(){
					window.location = "../index.html";
				},3200);
				}else{
					var msg="checkout error";
				alertMessage(alertmessage,msg);
				}
			}
		});*/
		}else{
			var msg="Check the details with *";
			alertMessage(alertmessage,msg);
		}
		
	});

});