 document.addEventListener("DOMContentLoaded",()=>{
	 //get elements
	 const selectone = document.querySelector(".element1");
const selecttwo = document.querySelector(".element2");
const selectthree = document.querySelector(".element3");
const selectfour = document.querySelector(".element4");
 const hiddennid = document.querySelector("#sessionid1");
 const logincontainers = document.querySelector(".login-containers");
 const loginpage = document.querySelector(".login-page");
 const times1 = document.querySelector("#times1");
const times2 = document.querySelector("#times2");
const registerpage = document.querySelector(".register-page");
const signupLink = document.querySelector(".signupLink");
const loginLink = document.querySelector(".loginLink");
var userId='';
const alertmessage = document.querySelector(".alert-message");

$.ajax({
	url:"../php/SessionCheck.php",
	method:"GET",
	dataType:"json",
	success:function(data){
		if(data!=''){
			hiddennid.value = '2';
		}else{
			
		}
	}
});
setTimeout(function(){
	 const hiddennid2 = document.querySelector("#sessionid1").value;
	 //console.log(hiddennid2);
	 if(hiddennid2==2){
		 //user loged in
		 //change home page when ged in
			selectthree.classList.add("fa");
		    selectthree.classList.add("fa-user");
		
		    selectfour.classList.add("fa");
		    selectfour.classList.add("fa-sign-out");
			
			selectone.innerHTML='';
			selecttwo.innerHTML='';
	 }else{
		 //user not loged in
		 selectthree.classList.remove("fa");
		    selectthree.classList.remove("fa-user");
		
		    selectfour.classList.remove("fa");
		    selectfour.classList.remove("fa-sign-out");
			
			selectone.innerText="Register";
			selecttwo.classList.add("fa");
			selecttwo.classList.add("fa-sign-in");
			
	 }
},2000);


});