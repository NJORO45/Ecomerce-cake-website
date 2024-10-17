window.addEventListener("DOMContentLoaded",function(){
	const dealsCategory = document.querySelector("#dealsCategory");
	const content1 = document.querySelector("#content1");
	$.ajax({
		url:"./php/load_products.php",
		method:"GET",
		dataType:"html",
		success: function(data){
			var NewData = JSON.parse(data);
			console.log(NewData);
			if(NewData!=''){
				let maped = NewData.map(function(items){
				return `<div class=" col-9 col-sm-8 col-md-6 col-lg-4 border nested-container" style="width:auto; background-color:;height:auto; padding: 0;margin: 2px; padding-bottom:50px;">
			        	<div style="display: flex; flex-direction: column;">
			        	<input id="unid" type="" name="" value="${items['unid']}" hidden="" />
			        	<input id="hotdeals" type="" name="" value="${items['hotDeals']}" hidden="" />
			        	<input id="category" type="" name="" value="${items['category']}" hidden="" />
			        	
			        	
			<img id="img" src="${items['image']}" style="width: 100%; height: 200px;"/>
			<div id="description" class="p-2 text-center">${items['description']}</div>
			<div class="priceqnty" style=" display:flex; flex-direction:row; width:100%; justify-content:center; align-items:center; gap:10px;color: #d07ea7;">
			   
			   <div style="position: ; display: flex; flex-direction: row; color: #d07ea7;gap:2px;"><span id="productQnty">${items['qnty']}<span/> <span>Kg<span/>
			    </div>
				<div>
			         <span class="mr-2">Kes<span/>
			         <span id="price">${items['price']}<span/>
			   </div>
			</div>
			          <div class="btn-group" style="margin-top: 5px;display: flex; justify-content: center; align-items:center;flex-direction: row; bottom:0; position:absolute; height:50px;width:100%;">
			          	  
			          	  	<input  id="customization" class="btn btn-purple btn-sm  mr-2" type="button" value="customize"name="" >
			          	  
			                
			                 <input id="addToChart" class="btn btn-purple btn-sm" type="button" value="Add to cart"name="" >
			              
			          </div>
			          </div>
			        </div>`;
			}).join(" ");
			content1.innerHTML = maped;
			dealsCategory.innerHTML = NewData[0]['category'];
			}else{
				content1.innerHTML= `
				<p class="container border"style="text-align: center;">Hot deals coming soon</p>
				`;
			}
			
			
		}
	});
});
