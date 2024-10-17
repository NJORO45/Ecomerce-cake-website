function callData(contentcards,contentcards2){
	
	$.ajax({
			//get data from database
			url:"loadContent.php",
			method:"POST",
			data:{
				getData:true
			},
			success:function(data){
				console.log(data);
				let items = JSON.parse(data);
				//console.log(items['special'].length);
				let specialLength=items['special'].length;
				let ordinaryLength=items['ordinary'].length;
				if(specialLength==0){
					console.log("empty");
					contentcards.innerHTML = "no products found";
				}else{
					//console.log(items['dataFetch']);
				let maped1 = items['special'].map((item)=>{
					return `
					      <div class="special-content-body">
			    <div class="">
				    <img src="../${item.image}" alt="img"/>
					<input id="unid" hidden="" value="${item.unid}"/>
					<div>
					  <div class="category">${item.category}</div>
					  <div class="price-qnty">
					    <span class="qnty">${item.qnty} kg</span>
					    <span class="price">${item.price} kes</span>
					  </div>
					  <div class="description">
					    ${item.description}
					  </div>
					  <div class="bottom-btns">
					      <input type="button" id="edit" value="edit" name="Edit"/>
					      <input type="button" id="remove" value="remove" name="Edit"/>
					  </div>
					</div>
				</div>
			</div>
					`;
				}).join(" ");
				contentcards.innerHTML = maped1;
				}
				if(ordinaryLength==0){
					console.log("empty");
					contentcards2.innerHTML = "no products found";
				}else{
					let maped2 = items['ordinary'].map((item)=>{
					return `
					      <div class="ordinary-content-body">
			    <div class="">
				    <img src="../${item.image}" alt="img"/>
					<div>
					<input id="unid" hidden="" value="${item.unid}"/>
					  <div class="category">${item.category}</div>
					  <div class="price-qnty">
					    <span class="qnty">${item.qnty} kg</span>
					    <span class="price">${item.price} kes</span>
					  </div>
					  <div class="description">
					    ${item.description}
					  </div>
					  <div class="bottom-btns">
					      <input type="button" id="edit" value="edit" name="Edit"/>
					      <input type="button" id="remove" value="remove" name="Edit"/>
					  </div>
					</div>
				</div>
			</div>
					`;
				}).join(" ");
				//console.log(maped2);
				
				contentcards2.innerHTML = maped2;
				}
				
					const remove = document.querySelectorAll("#remove");
					const edit = document.querySelectorAll("#edit");
					remove.forEach(function(btn){
						btn.addEventListener("click",(e)=>{
							let unid=getElements(e.currentTarget.parentElement.parentElement.parentElement.parentElement);
							console.log(unid);
							Remove(unid);
						});
					});
					edit.forEach(function(btn){
						btn.addEventListener("click",(e)=>{
							//console.log(e.currentTarget.parentElement.parentElement.parentElement.parentElement);
							//remove();
						});
					});
					
		
			}
		});
}

function getElements(Element){
	const unid =Element.querySelector("#unid").value;
	return unid;
}
function Remove(productUnid){
	const alertmessage = document.querySelector(".alert-message");
	//remove item on the list
	$.ajax({
		url:"../php/insertData.php",
		method:"POST",
		data:{
			productUnid
		},
		success:function(data){
			console.log(data);
			if(data =="deleted"){
				var msg="item removed";
		alertMessage(alertmessage,msg);
			}else{
				var msg ="error removing item";
		alertMessage(alertmessage,msg);
			}
		}
	});
}
function edit(){
	
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
function chechRowCount(callback){
	
	$.ajax({
			//get data from database
			url:"loadContent.php",
			method:"POST",
			data:{
				checkRow:true
			},
			success:function(data){
				
				 let Data=JSON.parse(data);
				//console.log($data);
				let count= Data['count'];
				callback(count);
				//console.log(count);
			   // returnCount(count);
			}
	});
	
}


document.addEventListener("DOMContentLoaded",()=>{
	let currentCount='';
	let previousCount=0;
	
	//get DOM elements for containers
	
	const contentcards = document.querySelector(".special-content .content-cards");
	const contentcards2 = document.querySelector(".ordinary-content .content-cards");
	const alertmessage = document.querySelector(".alert-message");
	callData(contentcards,contentcards2);
	setInterval(()=>{
		chechRowCount(function(count) {
    currentCount =count;
});
		//console.log(currentCount); 
			if(previousCount!==currentCount){
	//console.log("Count has  changed:", currentCount,previousCount);
	callData(contentcards,contentcards2);
	previousCount=currentCount;
}else{
	//console.log("Count has not changed:", currentCount);
}
	},2000);
	
	
	///add remove event listener
	
});