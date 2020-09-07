<?php
mysql_connect("localhost","classpat_bloga",'(DSO-I}Ou1cz');
          mysql_select_db("classpat_blog");



   
   $firstname=$_POST['firstname'];
   $lastname=$_POST['lastname'];
   $phone=$_POST['phone'];
   $email=$_POST['email'];
    $rss=$_POST['rss'];
   $name1=$_POST['courname'];
   
  
   $intse="insert into checkout (firstname,lastname,phone,insname,email,note,rss,name1) values('$firstname','$lastname','$phone','$insname','$email','$note','$rss','$name1')";
   mysql_query($intse) or die(mysql_error());
   $oid=mysql_insert_id();
  
require('config.php');
require('razorpay-php/Razorpay.php');
session_start();

// Create the Razorpay Order

use Razorpay\Api\Api;

$api = new Api($keyId, $keySecret);

//
// We create an razorpay order using orders api
// Docs: https://docs.razorpay.com/docs/orders
//
$orderData = [
    'receipt'         => $oid,
    'amount'          => $rss * 100, // 2000 rupees in paise
    'currency'        => 'INR',
    'payment_capture' => 1 // auto capture
];

$razorpayOrder = $api->order->create($orderData);

$razorpayOrderId = $razorpayOrder['id'];

$_SESSION['razorpay_order_id'] = $razorpayOrderId;

$displayAmount = $amount = $orderData['amount'];

if ($displayCurrency !== 'INR')
{
    $url = "https://api.fixer.io/latest?symbols=$displayCurrency&base=INR";
    $exchange = json_decode(file_get_contents($url), true);

    $displayAmount = $exchange['rates'][$displayCurrency] * $amount / 100;
}

$checkout = 'automatic';

if (isset($_GET['checkout']) and in_array($_GET['checkout'], ['automatic', 'manual'], true))
{
    $checkout = $_GET['checkout'];
}

$data = [
    "key"               => $keyId,
    "amount"            => $amount,
    "name"              => $firstname,
    "description"       => $name1,
    "image"             => "https://s29.postimg.org/r6dj1g85z/daft_punk.jpg",
    "prefill"           => [
    "name"              => $firstname,
    "email"             => $email,
    "contact"           => $phone,
    ],
    "notes"             => [
    "address"           => $firstname,
    "merchant_order_id" => $oid,
    ],
    "theme"             => [
    "color"             => "#F37254"
    ],
    "order_id"          => $razorpayOrderId,
];

if ($displayCurrency !== 'INR')
{
    $data['display_currency']  = $displayCurrency;
    $data['display_amount']    = $displayAmount;
}

$json = json_encode($data);

require("checkout/manual.php");
