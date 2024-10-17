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
						//console.log(Data['cartQuery']);
						cartTotal.innerHTML=Data['totalQuery'];
					}
					
			    });
			},200);
};
window.addEventListener("DOMContentLoaded",()=>{
	 const hiddennid = document.querySelector(".sessionid1");
	 const element1 = document.querySelector(".element1");
     const element2 = document.querySelector(".element2");
     const element3 = document.querySelector(".element3");
     const element4 = document.querySelector(".element4");
     const hiddenid3 = document.querySelector("#hiddenid3");
     const hiddenid4 = document.querySelector("#hiddenid4");
     const theContainer = document.querySelector("#theContainer");
	 const alertmessage = document.querySelector(".alert-message");
	 var session;
	 var count;
	 var price;
		setTimeout(function(){
			$.ajax({
		url:"cartSession.php",
		method:"GET",
		dataType:"html",
		success:function(data){
			
			console.log(data);
			if(data!=''){
				hiddenid3.value='2';
				console.log("data");
			}else{
				console.log("dataa");
			}
			
		}
		
		
	});
		});
		setTimeout(function(){
			const hiddenidvalue = document.querySelector("#hiddenid3").value;
	//console.log(hiddenidvalue);
	if(hiddenidvalue==1){
		//user is loged out
			element3.classList.remove("fa");
		    element3.classList.remove("fa-user");
		
		    element4.classList.remove("fa");
		    element4.classList.remove("fa-sign-out");
			
			element1.innerHTML='Register';
			element2.innerHTML='Sign in';
	}else if(hiddenidvalue==2){
		
		//user is loged in
			element3.classList.add("fa");
		    element3.classList.add("fa-user");
		
		    element4.classList.add("fa");
		    element4.classList.add("fa-sign-out");
			
			element1.innerHTML='';
			element2.innerHTML='';
			//fetch data
			const itemUnid = document.querySelector("#hiddenid4").value;
			
			$.ajax({
				url:"fetchCustomization.php",
				method:"POST",
				data:{
					itemUnid
				},
				success:function(data){
					let json = JSON.parse(data);
					console.log(json);
					count=json[0]['qnty'];
					price=json[0]['price'];
					console.log(price);
					const map = json.map(function(items){
						return `
						 <div class="">
	<form class="" >
		<div class="row">
		    <input value="${items.description}" id="description" hidden=""/>
		    <input value="${items.category}" id="category" hidden=""/>
		    <input value="${items.hotDeals}" id="hotDeals" hidden=""/>
		    <input value="${items.unid}" id="unid" hidden=""/>
			<div class="col-12">
				<img  src="../${items.image}" style="width: 100%; height: 150px;">
			</div>
		</div>
		<div class="form-row mt-2" style="background:;">
			<div class="form-group col-6" style=" background-color: ;">
					<label class="">Quantity in kg</label>
			</div>

			<div class="col-5" style=" height:100%;display:flex; flex-direction:row; justify-content:space-between; align-items:center;">
				<div class="plus" id="Plus">
			     <i class="fa fa-plus"  aria-hidden="true"></i>
			     </div>
			     <div class="input" style="width:50px;">
			         <input class="form-control" readonly="" style="text-align:center;width:100%;" id="input2" type="text" value='${items.qnty}' />
			      </div>
			      <div class="minus">
			         <i class="fa fa-minus " aria-hidden="true"></i>
			       </div>
			</div>
		</div>
		<div class="form-row" >
			<div class="form-group col-5" style=" background-color: ;">
					<label class="">Price</label>
			</div>
			
			<div class="col-5" >
				<input id="price" style="" class="form-control" type="text" name=""value="${items.price+" "+"KES"}"  readonly="">
			   </div>
		</div>
		<div class="form-row" >
			<div class="form-group col-5" style=" background-color: ;">
					<label class="">Name</label>
			</div>
			
			<div class="col-5" >
				<input id="name" style="" class="form-control" type="text" name=""  placeholder="none">
			   </div>
		</div>
		<div class="form-row" >
			<div class="form-group col-5" style=" background-color: ;">
					<label class="">color</label>
			</div>
			
			<div class="col-5" >
				<input id="color" style="width: 100px;" class="form-control" type="text" name=""  placeholder="same">
			   </div>
		</div>
		<div class="form-row" >
			<div class="c-center">
				<input id="add-to-cart" type="button" class="btn btn-purple btn-sm" value="add to cart"> 
			</div>
		</div>
	</form>
</div>
						`;
					}).join(" ");
					theContainer.innerHTML=map;
					//console.log(map);
					setTimeout(function(){
				getCartTotalFromDB();
			const color = document.querySelector("#color");
			const unid = document.querySelector("#unid").value;
			const name = document.querySelector("#name");
			const input2 = document.querySelector("#input2");
			const Price = document.querySelector("#price").value;
			const minus = document.querySelector(".minus");
			const plus = document.querySelector(".plus");
			const description = document.querySelector("#description").value;
			const category = document.querySelector("#category").value;
			const hotDeals = document.querySelector("#hotDeals").value;
			const addToChart = document.querySelector("#add-to-cart");
			minus.addEventListener("click",function(e){
				if(input2.value==count){
					input2.value=count;
					Price.value=price+" "+"KES";
					console.log("matched");
				}else{
					input2.value=(Number(input2.value)-Number(count));
					Price.value= price *Number(input2.value)+" "+"KES";
				}
			});
			plus.addEventListener("click",function(e){
				input2.value=(Number(input2.value)+Number(count));
				Price.value= price *Number(input2.value)+" "+"KES";
			});
			addToChart.addEventListener("click",function(){
				let totalPrice=price * Number(input2.value);
				$.ajax({
				url:"../php/insertData.php",
				method:"POST",
				data:{
					customization:true,
					color:color.value,
					name:name.value,
					price:price,
					totalPrice:totalPrice,
					qnty:input2.value,
					hotDeals:hotDeals,
					description:description,
					category:category,
					itemUnid:unid
				},
				success:function(data){
					console.log(data);
					if(data=="success"){
						var msg="added to cart";
					    alertMessage(alertmessage,msg);
						setTimeout(function(){
							window.location="../index.html";
						},3500);
					}else{
						var msg="an error occured";
					    alertMessage(alertmessage,msg);
					}
					
				}
			 });
			});
				},300);
				
				}
			});
			}
		    },300);
		
	
		
		
		
	
});