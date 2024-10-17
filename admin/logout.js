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
	 const logout = document.querySelector("#logout");
	 const alertmessage = document.querySelector(".alert-message");
	 logout.addEventListener("click",()=>{
		 $.ajax({
			 url:"logout.php",
			 method:"POST",
			 data:{
				 logoutState:true
			 },
			 success:function(data){
				 let jData = JSON.parse(data);
				 if(jData=="success"){
					 var msg="login out";
		                alertMessage(alertmessage,msg);
						setTimeout(()=>{
							window.location="loginPage.php";
						},3000);
				 }else{
					 var msg=jData;
		                alertMessage(alertmessage,msg);
				 }
			 }
		 });
	 });
 });