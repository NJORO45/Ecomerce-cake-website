<?php
//get pesapal transaction response

const BASE_PATH = __DIR__.'../../';
require BASE_PATH.'/php/db-con.php';
	// Parameters sent to you by PesaPal IPN
    
    $pesapalNotification=$_GET['pesapal_notification_type'];
    
    $pesapalTrackingId=$_GET['pesapal_transaction_tracking_id'];
    
    $pesapal_merchant_reference=$_GET['pesapal_merchant_reference'];
    
    // $pesapalNotification="CHANGE";
    
    // $pesapalTrackingId='445';
    
    // $pesapal_merchant_reference='789';
    
    
    if($pesapalNotification=="CHANGE" && $pesapalTrackingId!='')
    {
        //insert data o database
        $query = mysqli_query($con,"INSERT  INTO `ipns`(`pesapalNotification`, `pesapalTrackingId`, `pesapal_merchant_reference`)VALUES('$pesapalNotification','$pesapalTrackingId','$pesapal_merchant_reference') ");

    }
        
?>