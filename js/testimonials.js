window.addEventListener("DOMContentLoaded",function(){
	const blockquote = document.querySelector("blockquote");
	const autherName = document.querySelector("#autherName");
	const left = document.querySelector(".left");
	const right = document.querySelector(".right");
	var leftState = false;
	var rightState = false;
	let curentItem=0;
	//console.log(blockquote);
	//testimonials
    $.ajax({
		url:"./php/testimonials.php",
		method:"GET",
		dataType:"json",
		success:function(data){
			if(data!=""){
				//console.log(data[2]['testianial']);
				;
				left.addEventListener("click",function(){
					leftState=true;
					if(curentItem==(data.length-data.length)){
						curentItem=curentItem;
					}else{
						curentItem--;
					}
					//console.log(curentItem);
					getData(curentItem);
				});
				right.addEventListener("click",function(){
					rightState=true;
					if(curentItem==data.length-1){
						curentItem=curentItem;
					}else{
						curentItem++;
					}
					//console.log(curentItem);
					getData(curentItem);
				});
				setInterval(function(){
					if(leftState == false && rightState == false){
						var randomNum = Math.floor(Math.random()*(data.length));
						getData(randomNum);
						//console.log(randomNum);
					}else{
						//console.log("no state");
					}
					
				},5000);
				//function to get data 
				function getData(curentItem){
					//console.log(data[curentItem]['testianial']);
					blockquote.innerHTML = data[curentItem]['testianial']
					autherName.innerHTML = data[curentItem]['name']
				}
			}
		},
		error:function(data){
			console.log(data);
		}
	});
});