function getCartTotalFromDB(){
	setTimeout(function(){
				const cartTotal = document.querySelector("#cartTotal");
			
			    $.ajax({
					url:"../php/cartPageTotal.php",
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
document.addEventListener("DOMContentLoaded",()=>{
	const tbody = document.querySelector("tbody");
	getCartTotalFromDB();
	$.ajax({
		url:"orderHistoryInfo.php",
		method:"GET",
		dataType:"html",
		success:function(data){
			console.log(data);
			let setData= JSON.parse(data);
			let maped = setData.map((items)=>{
				return `<tr>
		      <td>${items.cart_unid}</td>
		      <td>${items.user_unid}</td>
		      <td>${items.qnty}</td>
		      <td>${items.payment_status}</td>
		      <td>${items.overal_total}</td>
		      <td>${items.order_date}</td>
		      <td class="fa fa-eye align-middle" style="color:#800080;"></td>
		   </tr>`;
			}).join(" ");
			console.log(maped);
			if(data!='[]'){
				//not empty
				tbody.innerHTML=maped;
			}else{
				//if empty 
				tbody.innerHTML=`<tr class="text-center"><td colspan="7">no order yet</td></tr>`;
			}
		}
	});
	
	/*<tr>
		      <td>one</td>
		      <td>one</td>
		      <td>one</td>
		      <td>one</td>
		      <td>one</td>
		      <td>one</td>
		      <td class="fa fa-eye align-middle" style="color:#800080;"></td>
		   </tr>*/
});