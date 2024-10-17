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
document.addEventListener("DOMContentLoaded",()=>{
	const alertmessage = document.querySelector(".alert-message");
	const confirmOrder = document.querySelector("#confirmOrder");
	const cancelOrder = document.querySelector("#cancelOrder");
	const cartunid = document.querySelector("#cart_unid").value;
	confirmOrder.addEventListener("click",()=>{
		$.ajax({
			url:"insertAdminData.php",
			method:"post",
			data:{
				Confirmorder:true,
				cartunid
			},
			success:function(data){
				let jdata= JSON.parse(data);
				console.log(jdata);
				if(jdata=="orderConfirmed"){
					var msg="order Confirmed";
		            alertMessage(alertmessage,msg);
					setTimeout(()=>{
						window.location="orders.php";
					},3000);
				}else{
					var msg="error occured";
		            alertMessage(alertmessage,msg);
				}
			}
		});
	});
	cancelOrder.addEventListener("click",()=>{
		$.ajax({
			url:"insertAdminData.php",
			method:"post",
			data:{
				Cancelorder:true,
				cartunid
			},
			success:function(data){
				let jdata= JSON.parse(data);
				console.log(jdata);
				if(jdata=="orderCanceled"){
					var msg="order Canceled";
		            alertMessage(alertmessage,msg);
					setTimeout(()=>{
						window.location="orders.php";
					},3000);
				}else{
					var msg="error occured";
		            alertMessage(alertmessage,msg);
				}
			}
		});
	});
	/*
	var msg="login out";
		                alertMessage(alertmessage,msg);*/
});