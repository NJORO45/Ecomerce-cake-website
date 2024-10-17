function fixedalertMessage(alertmessage,msg){
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
					
}
document.addEventListener("DOMContentLoaded",()=>{
   const alertmessage = document.querySelector(".alert-message");
 const receiptMainHeader = document.querySelector(".receiptMainHeader");
 const spinnerHeader = document.querySelector(".spinnerHeader");
 const spinner = document.querySelector(".spinner");
 const tbody = document.querySelector("#tbody");
 receiptMainHeader.addEventListener("click",()=>{
    spinnerHeader.classList.add("add");
    spinner.classList.add("add");


    setInterval(function(){
        spinnerHeader.innerHTML="payment Succesfull";
       spinnerHeader.classList.add("newadd"); 
        spinner.classList.add("fa");
        spinner.classList.add("fa-check");
        spinner.classList.add("newadd");
    },2000);
    console.log("clicked");
 });
 //check payment status
 setTimeout(function(){
    $.ajax({
      url:"../php/insertData.php",
      method:"post",
      data:{checkoutPaymentStatus:true},
      success:function(data){
        let Jdata = JSON.parse(data);
        console.log(Jdata);
        if(Jdata['payment_status_description']=="Completed"){
         spinnerHeader.classList.add("add");
            spinner.classList.add("add");
         setInterval(function(){
            
            spinnerHeader.innerHTML="Payment Succesfull";
           spinnerHeader.classList.add("newadd"); 
            spinner.classList.add("fa");
            spinner.classList.add("fa-check");
            spinner.classList.add("newadd");
        },2000);
        setInterval(function(){
         var msg="redirecting to home page";
			fixedalertMessage(alertmessage,msg);
         
        },3500);
        setInterval(function(){
         window.location.href="../index.html";
        },4500);
        }else if(Jdata['payment_status_description']=="Failed"){
         spinnerHeader.innerHTML="payment failed, contact customer care if your received payment message";
        }
      }
    });
 },1000);


 // 
});