<?php
//insert file data to database img/
/*
selectCategory.value,
			    Event.value,
			    Textarea.value,
			    quantity.value,
				price.value,
				fileInput.files*/
if(isset($_POST['selectCategory'])){
	$selectCategory = mysqli_real_escape_string($con,$_POST['selectCategory']);
	$Event = mysqli_real_escape_string($con,$_POST['Event']);
	$Textarea = mysqli_real_escape_string($con,$_POST['Textarea']);
	$quantity = mysqli_real_escape_string($con,$_POST['quantity']);
	$price = mysqli_real_escape_string($con,$_POST['price']);
	$newFile = mysqli_real_escape_string($con,$_POST['newFile']);
	//$file_name = $_FILES['pdf_file']['name'];
                          
    //$file_tmp = $_FILES['pdf_file']['tmp_name'];
	echo $newFile;
}
if(isset($_POST['productUnid'])){
	//$productUnid = mysqli_real_escape_string($con,$_POST['productUnid']);
	$deleteQuery = mysqli_query($con,"DELETE FROM `product-items` WHERE `unid` = 'productUnid'");
	if($deleteQuery){
		echo "deleted";
	}else{
		echo "error deleting";
	}
}
?>