<!DOCTYPE html>
<html lang="en">
    <?php include 'header.php';?>
    <?php include 'navbar.php';?>
    <body>
        <div id="preloader"></div>


        <div class="page-breadcrumb">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <h2>Contact us</h2>
                    </div>
                    <div class="col-sm-6 text-right">
                        <ol class="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li>Contact</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <div class="space70"></div>


        <div class="container">
            <div class="row contact-row">
                <div class="col-sm-8 margin-btm-30">
                    <h3>Leave a message</h3>
                    <p>
                        We’d love to hear from you. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut erat magna. Aliquam porta sem a lacus imperdiet posuere. Integer semper eget ligula id eleifend.
                    </p>
                    <div class="space30"></div>
                    <form>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                     <label>Name</label>
                                    <input type="text" class="form-control" placeholder="John Doe">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                     <label>Email</label>
                                    <input type="email" class="form-control" placeholder="john@mail.com">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Message</label>
                            <textarea class="form-control" placeholder="Enter your message here" rows="6"></textarea>
                        </div>
                        <div class="text-right">
                            <button type="button" class="btn btn-skin btn-lg">Submit Message</button>
                        </div>
                    </form>
                </div>
                <div class="col-sm-3 col-sm-offset-1">
                    <h5>Address:</h5>
                    <p class="adr">
                                    <span class="adr-group">       
                                        <span class="street-address">Classpath</span><br>
                                        <span class="region">Banashankari</span><br>
                                        <span class="postal-code">Bangalore 560085</span><br>
                                        <span class="country-name">India</span>
                                    </span>
                    </p><hr>
                    <h5>Enquiries</h5>
                    <p><a href="#">support@classpath.io</a></p>
                    <hr>
                    <h5>Social</h5>
                    <ul class="list-inline contact-social">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i class="fa fa-youtube-play"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="space70"></div>
        <div class="pattern-bg">
            <div class="container">
                <div class="center-heading margin-btm-50">
                    <h2>Happy Students</h2>
                    <span class="border-width"></span>
                    <p>It is a long established fact that a reader will be distracted by the readable content</p>
                </div>

                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2 text-center">
                        <div class="owl-carousel owl-theme testi-slider">
                            <div class="item">
                                <img src="images/1.jpg" alt="" class="img-circle" width="100">
                                <p>
                                    Donec fringilla lacinia laoreet. Vestibulum ultrices blandit tempor. Aenean magna elit, varius eget quam a, posuere...
                                </p>
                                <h4>John Doe - <em>Web Design</em></h4>
                                <div class="rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half-full"></i>
                                </div>
                            </div>
                            <div class="item">
                                <img src="images/2.jpg" alt="" class="img-circle" width="100">
                                <p>
                                    Donec fringilla lacinia laoreet. Vestibulum ultrices blandit tempor. Aenean magna elit, varius eget quam a, posuere...
                                </p>
                                <h4>John Doe - <em>Web Design</em></h4>
                                <div class="rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half-empty"></i>
                                </div>
                            </div>
                            <div class="item">
                                <img src="images/3.jpg" alt="" class="img-circle" width="100">
                                <p>
                                    Donec fringilla lacinia laoreet. Vestibulum ultrices blandit tempor. Aenean magna elit, varius eget quam a, posuere...
                                </p>
                                <h4>John Doe - <em>Web Design</em></h4>
                                <div class="rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="newsletter-section">
            <div class="container">
                <div class="center-heading margin-btm-50">
                    <h2>Subscribe to our newsletter</h2>
                    <span class="border-width"></span>
                    <p>It is a long established fact that a reader will be distracted by the readable content</p>
                </div>
                <form>
                    <input type="email" class="form-control" placeholder="Eamil Id">
                    <button type="button" class="btn btn-skin btn-lg">Subscribe</button>
                </form>
            </div>
        </div>
        <!--footer start-->
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
    </body>
</html>