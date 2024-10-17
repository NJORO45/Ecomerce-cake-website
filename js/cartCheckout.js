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
function btnFunctions(){
	
const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
 const btns = document.querySelectorAll("#btn");
const alertmessage = document.querySelector(".alert-message");
btns.forEach(function(btn){
	//remove item from carT
	btn.addEventListener("click",function(e){
		console.log(e.currentTarget.parentElement.parentElement);
		let element = e.currentTarget.parentElement.parentElement;
		const inputValueUnid = element.querySelector("#input1").value;
		const newItems = JSON.parse(localStorage.getItem("carT"));
		let subTotal =  element.querySelector(".Total").innerHTML;
		const arrayWithoutD = newItems.filter(function (letter) {
               return letter.unid!=inputValueUnid ;
           });
		   const itemTotal = JSON.parse(localStorage.getItem("TotalCart"));
		   //first clar local storage
		   localStorage.removeItem("carT");
		   //then add new array to localStorage
           localStorage.setItem('carT',JSON.stringify(arrayWithoutD));
		   //update the total price of the items
		   itemTotal[0].totalPrice=Number(itemTotal[0].totalPrice)-subTotal;
		   localStorage.setItem('TotalCart',JSON.stringify(itemTotal));
		   //console.log(Number(itemTotal[0].price)-subTotal);
		   var msg="item removed";
				alertMessage(alertmessage,msg);
//console.log(arrayWithoutD);
getFromLocalstorage();
	});
});

plus.forEach(function(btn){
	btn.addEventListener("click",function(e){
		let element = e.currentTarget.parentElement.parentElement;
		const input = element.querySelector("#input2");
		const inputValue = element.querySelector("#input2").value;
		const inputValueUnid = element.querySelector("#input1").value;
		const subTotal = Number(element.querySelector(".subTotal").innerHTML);
		//const qnty = element.querySelector("#productQnty").innerText;
		const Total = element.querySelector(".Total");
	    let compNum='';
		//console.log(qnty);
		const newItems = JSON.parse(localStorage.getItem("carT"));
		//newItems[].=
		//compNum = Number(inputValue) + 1;
			//input.value=compNum;
			//NewTPrice=subTotal*compNum;
		let len =newItems.length;
		for(let i=0; i<len; i++){
			if(newItems[i].unid==inputValueUnid){
				console.log("found it");
				//get original qnty
				compNum=newItems[i].newQnty + newItems[i].originalQnty
				newItems[i].newQnty=compNum;
				newItems[i].totalPrice =(newItems[i].newQnty/newItems[i].originalQnty) * newItems[i].price;
				console.log(newItems);
				localStorage.setItem('carT',JSON.stringify(newItems));
				//getFromLocalstorage();
			}else{
				console.log("found ");
			}
		}
		//Total.innerHTML=NewTPrice;
		//updateAddTotalCart(subTotal);
		getFromLocalstorage();
	});
});
minus.forEach(function(btn){
	btn.addEventListener("click",function(e){
		let element = e.currentTarget.parentElement.parentElement;
		const input = element.querySelector("#input2");
		const subTotal = Number(element.querySelector(".subTotal").innerHTML);
		const inputValue = element.querySelector("#input2").value;
		const Total = element.querySelector(".Total");
		const inputValueUnid = element.querySelector("#input1").value;
		let compNum='';
		let NewTPrice= '';
		
		/*if(inputValue==newItems[i].originalQnty){
			//compNum=input.value;
			//input.value=compNum;
			//NewTPrice=subTotal*compNum;
		}else{
			compNum = Number(inputValue) - 1;
			input.value=compNum;
			NewTPrice=subTotal*compNum;
			console.log();
			updateMinusTotalCart(subTotal);
		}
		Total.innerHTML=NewTPrice;
		console.log(NewTPrice);
		*/
		const newItems = JSON.parse(localStorage.getItem("carT"));
		let len =newItems.length;
		for(let i=0; i<len; i++){
			if(newItems[i].unid==inputValueUnid){
				if(newItems[i].originalQnty==inputValue){
					newItems[i].newQnty=newItems[i].originalQnty;
				newItems[i].totalPrice =(newItems[i].newQnty/newItems[i].originalQnty) * newItems[i].price;
				console.log(newItems);
				localStorage.setItem('carT',JSON.stringify(newItems));
				}else{
						compNum=newItems[i].newQnty - newItems[i].originalQnty
				newItems[i].newQnty=compNum;
				newItems[i].totalPrice =(newItems[i].newQnty/newItems[i].originalQnty) * newItems[i].price;
				console.log(newItems);
				localStorage.setItem('carT',JSON.stringify(newItems));
				}
			
			}else{
				console.log("found ");
			}
		}
		console.log(newItems.length);
		
		getFromLocalstorage();
	});
});
checkoutBtn.addEventListener("click",function(e){
	//check if user is loged in
	//const sessionid =checkoutBtn.querySelector("#sessionid"); 
	//not loged in
	    logincontainers.classList.add("add");
	    loginpage.classList.add("add");
	//registerpage.classList.remove("add");
	
});
}
function getFromLocalstorage(){
	const cartvalue = document.querySelector("#cartTotal");
	
	const items = JSON.parse(localStorage.getItem("carT"));
const totalItem = JSON.parse(localStorage.getItem("TotalCart"));
	console.log(items.length);
	const tableresponsive = document.querySelector(".table-responsive");
    const cartempty =  document.querySelector(".cartEmpty");
	if(items.length!=0){
		
		cartempty.classList.remove("add");
        tableresponsive.classList.add("add");
		let maped = items.map(function(item){
	return `<tr class="tr">
	<td style="display:none;"><input id="input1" value="${item.unid}" hidden=""/></td>
	
	    <td class="item"><img src="${item.img}"/></td>
		<td>fruits</td>
		<td class="editQnty">
		    <div class="plus">
			   <i class="fa fa-plus" aria-hidden="true"></i>
			</div>
			<div class="input">
			   <input id="input2" type="text" value=${item.newQnty} />
			</div>
			<div class="minus">
			    <i class="fa fa-minus " aria-hidden="true"></i>
			</div>
		</td>
		<td class="subTotal">${item.price}</td>
		<td class="Total">${item.totalPrice}</td>
		<td><button id="btn" class="btn btn-xs btn-danger" >remove</button></td>
	 </tr>`
})
maped = maped.join("");
tbody.innerHTML =maped;
const Ttotal = document.querySelectorAll(".Total");
const Total = document.querySelector(".totalAmountchild");

var sum=0;
console.log();
Total.innerHTML=totalItem[0].totalPrice;

btnFunctions();
	}else{
		cartvalue.innerHTML='0';
		cartempty.classList.add("add");
        tableresponsive.classList.remove("add");
	}


}
const  subTotal = document.querySelectorAll(".subTotal");
const  Total = document.querySelectorAll(".Total");
const tbody = document.querySelector("#tbody");
const clas = document.querySelector(".class");
const checkoutBtn = document.querySelector(".checkoutBtn");
const logincontainers = document.querySelector(".login-containers");
const loginpage = document.querySelector(".login-page");
const times1 = document.querySelector("#times1");
const times2 = document.querySelector("#times2");
const signupLink = document.querySelector(".signupLink");
const loginLink = document.querySelector(".loginLink");
const registerpage = document.querySelector(".register-page");
var  input='';
var cartvalue='';
const cartBacket = document.querySelector("#cartTotal");
const tableresponsive = document.querySelector(".table-responsive");
const cartempty =  document.querySelector(".cartEmpty");

//for checking if session is set
var sessionIdValue='';
const sessionid = document.querySelector("#sessionid2");
//sessionid2.value=sessionId;
//tableresponsive.style.display="none";


$(document).ready(function(){
	//gt current URL
	//console.log(window.location.href);
//tableresponsive.style.display="none";
                    
	
$.ajax({
		url:"../php/cartSession.php",
		method:"GET",
		dataType:"json",
		success:function(data){
			//console.log(data);
			if(data!=''){
				sessionid.value='2';
				
			}
		}
		
		
	});
setTimeout(function(){
	sessionIdValue=document.querySelector("#sessionid2").value;
	if(sessionIdValue==2){
		setTimeout(function(){
			cartvalue = document.querySelector("#cartTotal").innerHTML;
		console.log(cartvalue);
		
		if(cartvalue==0){
			cartempty.classList.add("add");
			tableresponsive.classList.remove("add");
		}else{
			cartempty.classList.remove("add");
			tableresponsive.classList.add("add");
			//add checkout btn istener and direct to checkou page
			checkoutBtn.addEventListener("click",function(){
				setTimeout(function(){
					console.log("chekout");
					window.location = "cartCheckout.php";
				},100);
			});
		}
		},2000);
		
		//session is set, get data fron database using ajax
		//	cartempty.classList.remove("add");
		//tableresponsive.classList.remove("add");
		//tableresponsive.classList.add("add");
		//console.log(sessionIdValue);
		/*$.ajax({
			url:"../php/cartLogData.php",
			method:"GET",
			dataType:"json",
			success:function(data){
				
			}
		});*/
		
	}else if(sessionIdValue==1){
		//session is not set
			cartvalue = document.querySelector("#cartTotal").innerHTML;
	console.log(cartvalue);
	if(cartvalue >0){
		console.log(">");
			   //get content from localStorage
getFromLocalstorage();
//console.log(maped.join(""))
//tableresponsive.style.display="block";
//get total of all productSub

cartempty.classList.remove("add");
tableresponsive.classList.add("add");
    }else{
		console.log("o");
		//check if session is set
		if(sessionIdValue ==1){
			//sesion not set
			cartempty.classList.add("add");
		tableresponsive.classList.remove("add");
		}else if(sessionIdValue ==2){
			//sesion set
			cartempty.classList.remove("add");
		//tableresponsive.classList.remove("add");
		}
		
//tableresponsive.style.display="none";
//cartempty.style.display="block";
}
//add event listeners
//add event listeners

times1.addEventListener("click",function(){
		loginpage.classList.remove("add");
		logincontainers.classList.remove("add");
})
times2.addEventListener("click",function(){
		registerpage.classList.remove("add");
		logincontainers.classList.remove("add");
})


signupLink.addEventListener("click",function(){
	loginpage.classList.remove("add");
	registerpage.classList.add("add");
	
});
loginLink.addEventListener("click",function(){
	loginpage.classList.add("add");
	registerpage.classList.remove("add");
	
});

	}
	
},2000);





});//the end






//update total price of items 
function updateMinusTotalCart(subTotal){
	
	let TotalCart = JSON.parse(localStorage.getItem("TotalCart"));
		let newTotal=Number(TotalCart[0].price)- subTotal;
		TotalCart[0].price=newTotal;
		console.log(newTotal);
		localStorage.setItem('TotalCart',JSON.stringify(TotalCart));
		const Total = document.querySelector(".totalAmountchild");

Total.innerHTML=newTotal;
}
function updateAddTotalCart(subTotal){
	let TotalCart = JSON.parse(localStorage.getItem("TotalCart"));
		let newTotal=Number(TotalCart[0].price)+ subTotal;
		TotalCart[0].price=newTotal;
		console.log(newTotal);
		localStorage.setItem('TotalCart',JSON.stringify(TotalCart));
		const Total = document.querySelector(".totalAmountchild");

Total.innerHTML=newTotal;
}
