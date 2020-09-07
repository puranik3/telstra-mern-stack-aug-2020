<!DOCTYPE html>
<html lang="en">
    <?php   
            include 'header.php';
            include 'navbar.php';
            include 'connection.php';
            
            $rate = $_GET['rss'];
            $name = $_GET['name1'];
        
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
 <form method="post" action='pay.php' id="myCCForm">
     <input type='hidden' name='rss' value='<?php echo $rate; ?>'/>
     <input type="hidden" name="courname" value="<?php echo $name; ?>">
                    <div class="col-md-4 margin-btm-40 shaded-bg">

                    <div class="fade-in-animation-0">
                        <div class="panel panel-default topic-tile spring">
                            
                            <div class="panel-body">
                              <div style="margin-right:auto;margin-left:auto;width:85%;">
                                <h3 class="main-heading" style="text-transform: uppercase; font-weight: 700;  padding-left: 10px; font-size: 30px; color: #209b60; margin-bottom: 30px; display: inline;">
                                   $<?php echo $rate; ?>   
                                                  
                                </h3> 
                                <h4 class="main-heading" style="text-transform: uppercase; font-weight: 200;  padding-left: 4px; margin-bottom: 30px; border-left: none; text-decoration:line-through; display: inline; color:#ec5252;">
                                    $200                          
                                </h4> 
                                <h4 class="main-heading" style="text-transform: lowercase; font-weight: 200;  padding-left: 4px; margin-bottom: 30px; border-left: none; display: inline; color:#ec5252;">
                                    50% off                          
                                </h4>
                            </div>
                            
                            </div>
                            <div class="space30"></div>
                            <div style="margin-right: auto;margin-left: auto; width: 80%;">
                            <span class="main-heading" style="font-weight: 700; font-size: 15px; padding-left: 10px;color: #209b60; margin-bottom: 30px; display: inline;">
                                Courses :                         
                            </span> 
                            <ul class="list-unstyled f-list" style="margin-right: auto;margin-left: auto; width: 80%;">
                                <li><?php echo $name; ?></li>
                              
                               
                             </ul>
                            </div>
                            <div class="space30"></div>
                        </div>
                    </div>
                </div>
                 <div class="col-md-1 margin-btm-40"></div>
                <div class="col-md-7 margin-btm-40">
                    <!--courses tabs-->
                 
                    <div class="row">
                    
                   
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                     <label>First Name</label>
                                    <input type="text" name="firstname" class="form-control" placeholder="John">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                     <label>Last Name</label>
                                    <input type="text" name="lastname" class="form-control" placeholder="Doe">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                     <label>Phone No.</label>
                                    <input type="text" name="phone" class="form-control" placeholder="9845678915">
                                </div>
                            </div>
                            
                            <div class="col-sm-6">
                                <div class="form-group">
                                     <label>Email</label>
                                    <input type="email" name="email" class="form-control" placeholder="john@mail.com">
                                </div>
                            </div>
                        </div>
                       
                            
           
           
                        </div>
                        <div class="text-right">
                           <input type="submit" class="btn btn-primary" id="savnew" name="savnew" value="Pay Now"/>
                        </div>
                   
                    </div>
               
                </div>

                     </form>
                <div class="space30"></div>

                   

                     <div class="space30"></div>
                    
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
