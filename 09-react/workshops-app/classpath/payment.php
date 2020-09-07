<?php session_start(); if(!($_POST)){
 header('Location: index.php');
}?><!DOCTYPE html>
<html lang="en">
    <?php include 'header.php';
          include 'navbar.php';

          mysql_connect("localhost","ldaboin_bloga",'aaEF$rHZTyUb');
          mysql_select_db("ldaboin_blog");
require('config.php');



require('razorpay-php/Razorpay.php');
use Razorpay\Api\Api;
use Razorpay\Api\Errors\SignatureVerificationError;

$success = true;

$error = "Payment Failed";

if (empty($_POST['razorpay_payment_id']) === false)
{
    $api = new Api($keyId, $keySecret);

    try
    {
        // Please note that the razorpay order ID must
        // come from a trusted source (session here, but
        // could be database or something else)
        $attributes = array(
            'razorpay_order_id' => $_SESSION['razorpay_order_id'],
            'razorpay_payment_id' => $_POST['razorpay_payment_id'],
            'razorpay_signature' => $_POST['razorpay_signature']
        );

        $api->utility->verifyPaymentSignature($attributes);
    }
    catch(SignatureVerificationError $e)
    {
        $success = false;
        $error = 'Razorpay Error : ' . $e->getMessage();
    }
}

if ($success === true)
{ 
$pid=$_POST['razorpay_payment_id'];

$sig=$_POST['razorpay_signature'];
mysql_query("update checkout set status=1, razorpay_payment_id='$pid', razorpay_signature='$sig' WHERE id=".$_POST['shopping_order_id']);
         $html = "<center style='color:green'><h2><i class='fa fa-smile-o fa-5' aria-hidden='true'></i> <br>Thanks for your Booking Admin will get back to you!</h2></center>";
    
}
else
{
    $pid=$_POST['razorpay_payment_id'];

     mysql_query("update checkout set status=2, razorpay_payment_id='$pid' WHERE id=".$_POST['shopping_order_id']);
    $html = "<center style='color:red'><h2><i class='fa fa-meh-o fa-5' aria-hidden='true'></i> <br>Please Try Again !!</h2><p>Your payment failed due to :</p>
             <p>{$error}</p></center>";

   
}

  
  
   ?>
    <style>
     h4 {
        border-left: none !important;
        margin-bottom: 0px !important;
        padding-top: 5px;
        padding-bottom: 5px;
     }
     .panel-group .panel .panel-heading .panel-title a.collapsed:before {
        content: "\f067" !important;
        }
     .other-info h4{
        text-transform:none;
        font-weight: 400;
     } 
     .panel-title a{
        color: #209b60;
     } 
     .panel-group .panel .panel-heading .panel-title a:before{
        content: "\f068" !important;
     } 
     .panel-body ul li{
        color:#209b60;
        padding:10px 60px;
        border-bottom: 1px solid #ddd;
     }
     .panel-body{
        padding:0px;
     }
     .topic-tile .panel-body{
        margin-top: 10px;
     }
     .event-box li{
      background-color:#209b60;
     }
     .event-box li .date{
      background-color:#1F1F1F;
     }
     .event-box li .event-content{
      overflow: auto;
     }
     .event-content a{
      color:#FFFFFF;

     }
     .btn-border-white{
      background-color:#FFFFFF;
      color:#1F1F1F;
     }
    </style>
       <div class="page-breadcrumb">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 margin-btm-30">
                        <h2 style="text-transform: none;">Checkout</h2>
                    </div>
                
                 </div>
                   
                </div>
            </div>
        </div>

        <div class="space70"></div>
        <div class="container other-info" style="background-image: none;">
            <div class="row">
                <?php

        
   echo $html;
   
    
?>
                  </div>
            
            </div>
        </div>

  	<?php include 'footer.php';?>
        <!--footer end-->
        <!-- jQuery -->
        
        <script src="js/jquery.min.js"></script>
        <script src="bootstrap/js/bootstrap.min.js"></script>
        <script src="js/wow.min.js"></script>
        <script src="js/bootstrap-hover-dropdown.min.js"></script>
        <script src="js/jquery.stellar.min.js"></script>
        <script src="flexslider/jquery.flexslider-min.js"></script>
        <script src="owl-carousel/owl.carousel.min.js"></script>
        <script src="js/custom.js"></script>
        <!--revolution slider plugins-->
        <script src="rs-plugin/js/jquery.themepunch.tools.min.js" type="text/javascript"></script>
        <script src="rs-plugin/js/jquery.themepunch.revolution.min.js" type="text/javascript"></script>
        <script type="text/javascript" src="js/revolution-custom.js"></script>


    </body>
</html>

<style>
.put.accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
}

.put.accordion.active, .put.accordion:hover {
    background-color: #ccc; 
}

div.panel2 {
    padding: 0 18px;
    display: none;
    background-color: white;
}
</style>
