function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xyxy'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
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
function readContent(content){
	//let reader= new FileReader();
	/*reader.addEventListener("load",(e)=>{
		e.preventDefault();
		//console.log(reader.result);
	
	});*/
	var fileExtention =["image/jpeg","image/png","image/gif"];
	
	for(var index in fileExtention){
		if(content[0].type==fileExtention[index]){
			return true;
		}else{
			return false;
		}
	}
	/*
		if(content[0].type!="image/png"||content[0].type!="image/jpeg"||content[0].type!="image/gif")
		{
		return "file not an image";
			return content[0].type;
		}
		else
		{
			return "file ins an image";
			return content[0].type;
		}*/
	//return reader.readAsDataURL(content[0]);
	//return content[0].type;
}
document.addEventListener("DOMContentLoaded",()=>{
	//states
	var categoryState=false;
	var eventState=false;
	var quantityState=false;
	var textareaState=false;
	var priceState=false;
	var fileState=false;
	var eventState=false;
	var newName;
	//HAMBURGER
	//add event listener
	
	const hamberger = document.querySelector(".hamburger-menu");
	const fa = document.querySelector(".fa");
	const sidebarcontainer = document.querySelector(".sidebar-container");
	const fileInput = document.querySelector("#fileInput");
	const uploadTxt = document.querySelector("#uploadTxt");
	const imageName = document.querySelector("#imageName");
	const alertmessage = document.querySelector(".alert-message");
	
	const edit = document.querySelector("#edit");
	
	var selectCategory = document.querySelector("#selectCategory");
	var selectEvent = document.querySelector("#selectEvent");
	const Event = document.querySelector("#event");
	const quantity = document.querySelector("#quantity");
	const Textarea = document.querySelector(".div-cont textarea");
	const contBtn = document.querySelector(".div-cont #btn");
	const price = document.querySelector("#price");
	
	hamberger.addEventListener("click",()=>{
		//fa.classList.toggle("fa-times");
		//fa.classList.add("fa-times");
		if(fa.classList.contains("fa-bars")){
			//remove it
			fa.classList.remove("fa-bars");
			fa.classList.add("fa-times");
			console.log("contains");
			sidebarcontainer.style.display='block';
		}else{
			//add it
			fa.classList.add("fa-bars");
			fa.classList.remove("fa-times");
			console.log("contains");
			sidebarcontainer.style.display='none';
		}
		//console.log("click");
	});
	
	//upload image content
	fileInput.addEventListener("change",()=>{
		console.log(fileInput.files.length);
		//console.log(readContent(fileInput.files));
		if(readContent(fileInput.files)==true){
			var file = fileInput.files[0];
			var blob = file.slice(0,file.size,file.type);
			var fileExt ='';
			var unid=create_UUID();
			console.log(file.type.indexOf('/'));
			console.log(file.type.slice((file.type.indexOf('/')+1),file.type.length));
			console.log(file.type.length);
			if(file.type.slice((file.type.indexOf('/')+1),file.type.length)=='jpeg'){
				//file extention ==jpg
				fileExt='jpg';
			}else{
				fileExt=file.type.slice((file.type.indexOf('/')+1),file.type.length);
			}
			//check file size
			
			newName=unid+'.'+ fileExt;
			newFile = new File([blob],newName, {type: file.type});
			
			console.log(file);
			//console.log(file.type.length);
			
			
			//add file name to DOM 
			uploadTxt.innerHTML = " ";
			imageName.innerHTML = newName;
		}else{
			
		}
	});
	//check if the input data is'nt empty

	
	contBtn.addEventListener("click",()=>{
		
		//check if select is empty 
		if(selectCategory.value!="none"){
			categoryState=true;
			selectCategory.style.border="1px solid var(--light-purple)";
		}else{
			categoryState=false;
			selectCategory.style.border="2px solid red";
		}
		//check if event is empty 
		if(selectEvent.value!="none"){
			eventState=true;
			selectEvent.style.border="1px solid var(--light-purple)";
		}else{
			eventState=false;
			selectEvent.style.border="2px solid red";
		}
		//check textarea if empty
		if(Textarea.value!=""){
			textareaState=true;
			//console.log(Textarea.value);
			Textarea.style.border="1px solid var(--light-purple)";
		}else{
			Textarea.style.border="2px solid red";
			textareaState=false;
			//console.log(Textarea.value);
		}
		//check image if empty
		if(selectCategory.value!="none"){
			
		}else{
			
		}
		//check quantity if empty
		if(quantity.value!=""){
			if(!isNaN( quantity.value) ){
				//console.log("number");
				quantityState=true;
			    quantity.style.border="1px solid var(--light-purple)";
			}else{
				quantityState=false;
			    quantity.style.border="2px solid red";
				//console.log("not number");
			}
			
		}else{
			quantityState=false;
			quantity.style.border="2px solid red";
		}
		//check is img is empty
		if(fileInput.files.length>0){
			fileState=true;
		}else{
			fileState=false;
		}
		//check price if empty
		if(price.value!=""){
			if(!isNaN( price.value) ){
				//console.log("number");
				priceState=true;
			    price.style.border="1px solid var(--light-purple)";
			}else{
				priceState=false;
			    price.style.border="2px solid red";
				//console.log("not number");
			}
			
		}else{
			priceState=false;
			price.style.border="2px solid red";
		}
		
		//upload content to database
	if(categoryState==true && eventState==true && quantityState==true && textareaState==true && priceState==true && fileState==true){
		console.log("data okay");
		const formData = new FormData(); 
  formData.append("file", fileInput.files[0]);
  formData.append("newFileName", newName);
  formData.append("selectCategory", selectCategory.value);
  formData.append("selectEvent", selectEvent.value);
  formData.append("Textarea", Textarea.value);
  formData.append("quantity", quantity.value);
  formData.append("price", price.value);
  //console.log(formData);
  
		$.ajax({
			processData: false,
contentType: false,
			url:"../php/insertData.php",
			method:"POST",
			data:formData,
            processData: false,
            contentType: false,
			success:function(data){
				price.value="";
				var msg=data;
		        alertMessage(alertmessage,msg);
			}
		});
	}else{
		console.log("data error");
		var msg="Check your inputs";
		alertMessage(alertmessage,msg);
	}
	});
	

//login 

});