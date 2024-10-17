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
function sanitize(string) {
  const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      "/": '&#x2F;',
  };
  const reg = /[&<>"'/]/ig;
  return string.replace(reg, (match)=>(map[match]));
}
document.addEventListener("DOMContentLoaded",()=>{
	const alertmessage = document.querySelector(".alert-message");
	const loginBtn = document.querySelector("#loginBtn");
	const userName = document.querySelector("#userName");
	const Password = document.querySelector("#password");
	var userNameState=false;
	var passwordState=false;
	userName.addEventListener("blur",()=>{
		//console.log(sanitize(userName.value));
		if(userName!=""){
			//insertAdminData.php
			$.ajax({
				url:"insertAdminData.php",
				method:"POST",
				data:{
					usercheck:true,
					username:userName.value
					},
				success:function(data){
					console.log(data);
					let DData=JSON.parse(data);
					if(DData=="userfound"){
						userNameState=true;
						userName.style.border="1px solid var(--soft-pink)";
						console.log(data);
					}else if(DData=="notfound"){
						userNameState=false;
						userName.style.border="2px solid red";
						console.log(data);
					}
				}
			});
		
		
		}else{
			userName.style.border="2px solid red";
		}
		Password.addEventListener("input",()=>{
			if(Password!=''){
			$.ajax({
				url:"insertAdminData.php",
				method:"POST",
				data:{
					passwordcheck:true,
					Password:Password.value,
					username:userName.value
					},
				success:function(data){
					console.log(data);
					let Jdata = JSON.parse(data);
					if(Jdata=="correctPassword"){
						PasswordState=true;
						Password.style.border="1px solid var(--soft-pink)";
						console.log(data);
					}else if(Jdata=="incorrectPassword"){
						PasswordState=false;
						Password.style.border="2px solid red";
						console.log(data);
					}
				}
			});
		}else{
			
		}
		});
	});
	loginBtn.addEventListener("click",()=>{
		if(userNameState==true && PasswordState==true){
			//send data to database
			$.ajax({
				url:"insertAdminData.php",
				method:"POST",
				data:{
					loginData:true,
					username:userName.value,
					Password:Password.value
				},
				success:function(data){
					let jData= JSON.parse(data);
					console.log(jData);
					if(jData=="loginSuccess"){
						var msg="login Successfull";
		                alertMessage(alertmessage,msg);
						setTimeout(()=>{
							window.location="admin.php";
						},3000);
					}else if(jData=="loginError"){
						var msg="loginError";
		                alertMessage(alertmessage,msg);
					}else{
						var msg="Error occured";
		                alertMessage(alertmessage,msg);
					}
				}
			});
		}else{
			
		}
	});
});