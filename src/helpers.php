<?php

namespace BNjunge;

use stdClass;

// Load .env variables


use Dotenv\Dotenv;


function jsonResponse()
{
    header('content-type: application/json');
    echo json_encode(func_get_arg(0));
    exit;
}

function _config()
{
    // Now you can refer to Dotenv directly
$dotenv = Dotenv::createImmutable(__DIR__. '../../');
$dotenv->load();

$apikey=$_ENV['CONSUMERKEY'];
$apiSecret = $_ENV['CONSUMERSECRET'];
 // Optional: Check if the keys were loaded correctly
 if (!$apikey || !$apiSecret) {
    throw new \Exception('Environment variables not found or invalid.');
}
    $config = new stdClass();
    $config->pesapalConsumerKey = $apikey;
    $config->pesapalConsumerSecret = $apiSecret;

    return $config;
}