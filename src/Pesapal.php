<?php

namespace BNjunge;
use function BNjunge\_config;
use stdClass;
const BASE_PATH = __DIR__.'../../';
require BASE_PATH.'/php/db-con.php';

class Pesapal
{
    protected static $pesapalBaseUrl = "https://pay.pesapal.com/v3";
    protected static $body;
    protected static $headers;
    protected static $response;
    protected static $options;
    protected static $manager;
    //protected static $con;

    public static function conf()
    {
       
    return _config();
    }

    public static function pesapalAuth()
    {
        $config = self::conf();
        self::$options = $config;

        $url = self::$pesapalBaseUrl . "/api/Auth/RequestToken";
        $headers = array("Content-Type" => "application/json", 'accept' => 'application/json');
        $body = json_encode(array(
            'consumer_key' => $config->pesapalConsumerKey,
            'consumer_secret' => $config->pesapalConsumerSecret,
        ));

        $data = Curl::PostToken($url, $headers, $body);
        $data = json_decode(json_encode($data));

        // jsonResponse($data);
        return $data;
    }

    public static function pesapalRegisterIPN($targeturl)
    {
        $token = self::pesapalAuth();

        if(!$token->success) {
            jsonResponse(['success' => false, 'message' => 'Failed to obtain Token', 'response' => $token]);
        }

        $url = self::$pesapalBaseUrl . "/api/URLSetup/RegisterIPN";
        $headers = array("Content-Type" => "application/json", 'accept' => 'application/json', 'Authorization' => 'Bearer ' . $token->message->token);
        // $url = $_SERVER['HTTP_HOST'];

        $body = json_encode(array(
            "url" => "https://{$targeturl}/pesapal/callback",
            "ipn_notification_type" => 'POST',
        ));

        $data = Curl::Post($url, $headers, $body);
        $data = json_decode(json_encode($data));


        return $data;
    }

    public static function listIPNS()
    {
        $token = self::pesapalAuth();

        if(!$token->success) {
            jsonResponse(['success' => false, 'message' => 'Failed to obtain Token']);
        }

        $url = self::$pesapalBaseUrl . "/api/URLSetup/GetIpnList";
        $headers = array("Content-Type" => "application/json", 'accept' => 'application/json', 'Authorization' => 'Bearer ' . $token->message->token);

        $data = Curl::Get($url, $headers);
        $data = json_decode(json_encode($data));

      return $data;
    }
    
    public static function orderProcess($amount, $phone, $callback, $updatePesapalIPNID)
    {
        $token = self::pesapalAuth();
        //to check
       // $supportedCurrencies = strtoupper(self::$options->businessCurrency);

        $payload = json_encode(array(
            'id' => rand(0, 9999999999),
            'currency' => 'KES',
            'amount' => $amount,
            'description' => 'testApi',
            'redirect_mode' => 'PARENT_WINDOW',
            'callback_url' => $callback,
            'notification_id' => $updatePesapalIPNID,
            'billing_address' => array(
                'phone_number' => $phone
            )
        ));

        if(!$token->success) {
            return ['success' => false, 'message' => 'Failed to obtain Token'];
        }

        $url = self::$pesapalBaseUrl . "/api/Transactions/SubmitOrderRequest";
        $headers = array("Content-Type" => "application/json", 'accept' => 'application/json', 'Authorization' => 'Bearer ' . $token->message->token);
        $data = Curl::Post($url, $headers, $payload);

        $data = json_decode(json_encode($data));

        return $data;
    }

    public static function transactionStatus($transId,$merchant)
    {
        // $transId = $_GET['OrderTrackingId'];
        // $merchant = $_GET['OrderMerchantReference'];
        // $transId = "fc2474f4-e1c0-49d1-9d87-dcbc556fdb13";
        // $merchant ="1250306553";
        if(!isset($transId) || empty($transId)) {
            jsonResponse(['success' => false, 'message' => 'Missing Transaction ID']);
        }
        // if(empty($transId) || empty($transId)) {
        //     jsonResponse(['success' => false, 'message' => 'Missing Transaction ID']);
        // }
        $token = self::pesapalAuth();
        if(!$token->success) {
            jsonResponse(['success' => false, 'message' => 'Failed to obtain Token']);
        }

        $url = self::$pesapalBaseUrl . "/api/Transactions/GetTransactionStatus?orderTrackingId={$transId}";
        $headers = array("Content-Type" => "application/json", 'accept' => 'application/json', 'Authorization' => 'Bearer ' . $token->message->token);
        $data = Curl::Get($url, $headers);
        $data = json_decode(json_encode($data));

        return $data ;
       // return $currency;
        //$data = json_decode(json_encode($data));
        // check if the transaction exists in database/ to avoid double validation
        
       // return $data;
    }
    public static function manualtransactionStatus()
    {
        // $transId = $_GET['OrderTrackingId'];
        // $merchant = $_GET['OrderMerchantReference'];
        // // $transId = "fc2474f4-e1c0-49d1-9d87-dcbc556fdb13";
        // // $merchant ="1250306553";
        // if(!isset($transId) || empty($transId)) {
        //     jsonResponse(['success' => false, 'message' => 'Missing Transaction ID']);
        // }
        // if(empty($transId) || empty($transId)) {
        //     jsonResponse(['success' => false, 'message' => 'Missing Transaction ID']);
        // }
        $token = self::pesapalAuth();
        if(!$token->success) {
            jsonResponse(['success' => false, 'message' => 'Failed to obtain Token']);
        }

        $url = self::$pesapalBaseUrl . "/api/Transactions/GetTransactionStatus?orderTrackingId=18bc89b1-88ea-4b74-890b-dcb4000082dd";
        $headers = array("Content-Type" => "application/json", 'accept' => 'application/json', 'Authorization' => 'Bearer ' . $token->message->token);
        $data = Curl::Get($url, $headers);

        $data = json_decode(json_encode($data));

        return $data;
    }
    public static function reversal()
    {
       // if(empty($transId) || empty($transId)) {
        //     jsonResponse(['success' => false, 'message' => 'Missing Transaction ID']);
        // }
        $token = self::pesapalAuth();
        if(!$token->success) {
            jsonResponse(['success' => false, 'message' => 'Failed to obtain Token']);
        }
        $payload = json_encode(array(
            'confirmation_code' => 'SJ14HNTD16',
            'amount' => '1',
            'username' => 'testApi',
            'remarks' => 'PARENT_WINDOW'
            
        ));
        $url = self::$pesapalBaseUrl . "/api/Transactions/RefundRequest";
        $headers = array("Content-Type" => "application/json", 'accept' => 'application/json', 'Authorization' => 'Bearer ' . $token->message->token);
        $data = Curl::Post($url, $headers, $payload);

        $data = json_decode(json_encode($data));

        return $data;
    }

}

