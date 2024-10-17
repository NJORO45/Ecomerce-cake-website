function fetchData1(value){
	const tbody = document.querySelector("tbody");
	$.ajax({
		url:"../php/insertData.php",
		method:"post",
		data:{
			ordervalue:value
		},
		success:function(data){
			
			let newData = JSON.parse(data);
			console.log(data);
			if(data=='[]'){
				tbody.innerHTML=`<tr colspan="6"><td>no orders found</td></tr>`;
			}else{
				let mapedData =newData.map((items)=>{
				return `
				<tr>
			       <td>${items.cart_unid}</td>
			       <td>${items.user_unid}</td>
			       <td>${items.no_of_products}</td>
			       <td>pending</td>
			       <td>${items.total_Amount}</td>
			       <td>${items.dateAdded}</td>
				   <td><a href="viewProduct.php?cart_unid=${items.cart_unid}"><button>view</button></a></td>
			   </tr>
			   `;
			}).join("");
			tbody.innerHTML=mapedData;
			//console.log(mapedData);
			}
			
		}
	});
}
function fetchData2(value){
	const tbody = document.querySelector("tbody");
	$.ajax({
		url:"../php/insertData.php",
		method:"post",
		data:{
			ordervalue:value
		},
		success:function(data){
			
			let newData = JSON.parse(data);
			console.log(data);
			if(data=='[]'){
				tbody.innerHTML=`<tr colspan="6"><td>no orders found</td></tr>`;
			}else{
				let mapedData =newData.map((items)=>{
				return `
				<tr>
			       <td>${items.cart_unid}</td>
			       <td>${items.user_unid}</td>
			       <td>${items.no_of_products}</td>
			       <td>pending</td>
			       <td>${items.total_amount}</td>
			       <td>${items.dateAdded}</td>
				   <td><button>delivered</button></td>
			   </tr>
			   `;
			}).join("");
			tbody.innerHTML=mapedData;
		//	console.log(mapedData);
			}
			
		}
	});
}
function fetchData3(value){
	const tbody = document.querySelector("tbody");
	$.ajax({
		url:"../php/insertData.php",
		method:"post",
		data:{
			ordervalue:value
		},
		success:function(data){
			
			let newData = JSON.parse(data);
			console.log(data);
			if(data=='[]'){
				tbody.innerHTML=`<tr colspan="6"><td>no orders found</td></tr>`;
			}else{
				let mapedData =newData.map((items)=>{
				return `
				<tr>
			       <td>${items.cart_unid}</td>
			       <td>${items.user_unid}</td>
			       <td>${items.no_of_products}</td>
			       <td>pending</td>
			       <td>${items.total_Amount}</td>
			       <td>${items.dateAdded}</td>
				   <td><button>completed</button></td>
			   </tr>
			   `;
			}).join("");
			tbody.innerHTML=mapedData;
			//console.log(mapedData);
			}
			
		}
	});
}
function fetchData4(value){
	const tbody = document.querySelector("tbody");
	$.ajax({
		url:"../php/insertData.php",
		method:"post",
		data:{
			ordervalue:value
		},
		success:function(data){
			
			let newData = JSON.parse(data);
			console.log(data);
			if(data=='[]'){
				tbody.innerHTML=`<tr colspan="6"><td>no orders found</td></tr>`;
			}else{
				let mapedData =newData.map((items)=>{
				return `
				<tr>
			       <td>${items.cart_unid}</td>
			       <td>${items.user_unid}</td>
			       <td>${items.no_of_products}</td>
			       <td>pending</td>
			       <td>${items.total_Amount}</td>
			       <td>${items.dateAdded}</td>
				   <td><button>Refund</button></td>
			   </tr>
			   `;
			}).join("");
			tbody.innerHTML=mapedData;
			//console.log(mapedData);
			}
			
		}
	});
}
 document.addEventListener("DOMContentLoaded",()=>{

	//HAMBURGER
	//add event listener
	const tbody = document.querySelector("tbody");
	const hamberger = document.querySelector(".hamburger-menu");
	const fa = document.querySelector(".fa");
	const sidebarcontainer = document.querySelector(".sidebar-container");
	const Select = document.querySelector(".filter select");
	const exportButton = document.querySelector(".export");
	const alertmessage = document.querySelector(".alert-message");
	tbody.innerHTML=`<tr><td colspan="6">no catogory selected</td></tr>`;
	
	
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
	exportButton.addEventListener("click",()=>{
         //get the selectoed table in selector option
		 $.ajax({
			url:"insertAdminData.php",
			method:"POST",
			data:{
				exportBtn:true,
				select:Select.value
			},
			success:function(data){
                 // Create a new Excel workbook
				 //console.log(data);
				  // Convert JSON to Excel using SheetJS
				  const jsonData = JSON.parse(data);  // Parse JSON if necessary (sometimes the response is already an object)

				  // Create a new Excel workbook
				  const wb = XLSX.utils.book_new();   // Create a new workbook
				 
				  // Convert the JSON data into a worksheet
				  const ws = XLSX.utils.json_to_sheet(jsonData);
				  
				  // Append worksheet to the workbook
				  XLSX.utils.book_append_sheet(wb, ws, "Exported Data");
  
				  // Trigger download of the Excel file
				  XLSX.writeFile(wb, 'exported_data.xlsx');
			}
		 });
	});
Select.addEventListener("click",()=>{
	//console.log("clicked");
	Select.addEventListener("change",()=>{
		//if value is changed by clientInformation
		switch(Select.value){
			case "new orders":
			    console.log(Select.value);
				fetchData1(Select.value);
			    break;
			case "pending orders":
			    console.log(Select.value);
				fetchData2(Select.value);
			    break;
			case "completed orders":
			    console.log(Select.value);
				fetchData3(Select.value);
			    break;
			case "canceled orders":
			    console.log(Select.value);
				fetchData4(Select.value);
			    break;
		}
	});
});
//get selected orders from database

 });