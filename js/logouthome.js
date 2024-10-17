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

window.addEventListener("DOMContentLoaded",()=>{
	const element4 = document.querySelector(".element4");
	const alertmessage = document.querySelector(".alert-message");
	element4.addEventListener("click",()=>{
		console.log("clicked");
		$.ajax({
			url:".../../php/logout.php",
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
	
});