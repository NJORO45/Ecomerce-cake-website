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
					url:"../php/cartPageTotal.php",
					method:"GET",
					success:function(data){
						let Data = JSON.parse(data);
						//Data['totalQuery']
						//console.log(data);
						cartTotal.innerHTML=Data['totalQuery'];
					}
					
			    });
			},200);
};
document.addEventListener("DOMContentLoaded",()=>{
	//GET ELEMENTS 
	const alertmessage = document.querySelector(".alert-message");
	const name = document.querySelector("#name");
	const email = document.querySelector("#email");
	const tel = document.querySelector("#tel");
	const oldpass = document.querySelector("#oldpass");
	const newPass = document.querySelector("#newPass");
	const retypespass = document.querySelector("#retypespass");
	const saveChanges = document.querySelector("#saveChanges");
	const fabtn = document.querySelector("#fabtn");
	//states
	let emailstate=false;
	let telstate=false;
	let namestate=false;
	let oldpassstate=false;
	let passwordresetstate=false;
	 //get user profile
getCartTotalFromDB();
		 $.ajax({
		 url:"../php/insertData.php",
		 method:"post",
		 data:{getProfile:true},
		 success:function(data){
			let profileData = JSON.parse(data);
			console.log(profileData);
			email.value=profileData[0].email;
		tel.value=profileData[0].tel;
		 }
	 });
	 //check if name is empty 
if(name!=""){
		namestate=true;
	}else{
		 namestate=false;
	}
	 //check email 
email.addEventListener("blur",()=>{
var x=email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  emailstate=false;
  email.style.border='2px solid red';
  }  else{
	  emailstate=true;
	  email.style.border='2px solid #d07ea7';
  }
});
  ///check tel
tel.addEventListener("blur",()=>{
  if(tel.value!=''){
	  if(tel.value.length==10){
		  if(tel.value[0]=='0'){
			  console.log(tel.value);
			  tel.style.border='2px solid #d07ea7';
			  telstate=true;
		  }else{
			  tel.style.border='2px solid red';
		  }
	  }else{
		  tel.style.border='2px solid red';
		  telstate=false;
	  }
  }else{
	  tel.style.border='2px solid red';
  }	  
});

//add event listener to savedchanges
saveChanges.addEventListener("click",()=>{
	if(telstate==true && emailstate==true && namestate==true){
		let profileName = name.value;
	    let profileEmail = email.value;
	    let profilTel = tel.value;
		//send data to database
	     $.ajax({
			 url:"../php/insertData.php",
			 method:"post",
			 data:{
				 profileSavedData:true,
				 profileName,
				 profileEmail,
				 profilTel
			 },
			 success:function(data){
				 console.log(data);
				 if(data=='profile Updated'){
					 var msg="profile Updated";
		         alertMessage(alertmessage,msg);
				 }else{
					 var msg="error updating";
		         alertMessage(alertmessage,msg);
				 }
			 }
		 });
		
	}else{
		var msg="check details";
		alertMessage(alertmessage,msg);
	}
});
//check if passwords match
oldpass.addEventListener("blur",()=>{
	$.ajax({
		     url:"../php/insertData.php",
			 method:"post",
			 data:{
				 oldpassCheck:true
			 },
			 success:function(data){
				 console.log(data);
				 let results = JSON.parse(data);
				 if(oldpass.value==results['pwwd']){
					oldpass.style.border='1px solid #d07ea7';
					oldpassstate=true;
				 }else{
					 oldpass.style.border='2px solid red';
					 oldpassstate=false;
				 }
			 }
	});
});
//chek if new passwords match
retypespass.addEventListener("input",()=>{
	if(retypespass.value==newPass.value){
		console.log("match");
		console.log(" ");
		console.log(newPass.value);
		console.log(retypespass.value);
		passwordresetstate=true;
		if(oldpass.value=" "){
			oldpass.style.border='2px solid red';
		}
	}else{
		passwordresetstate=false;
	}
});
savePasword.addEventListener("click",()=>{
	if(oldpassstate==true && passwordresetstate==true){
		$.ajax({
			url:"../php/insertData.php",
			method:"post",
			data:{
				passwordresetstate:true,
				retypespass:retypespass.value
			},
			success:function(data){
				if(data=="password updated"){
					var msg="password updated";
		            alertMessage(alertmessage,msg);
				}else{
					var msg="error updating password";
		            alertMessage(alertmessage,msg);
				}
			}
		});
	}else{
		
	}
});
fabtn.addEventListener("click",()=>{
	var msg="feature will be added soon";
	alertMessage(alertmessage,msg);
});
});