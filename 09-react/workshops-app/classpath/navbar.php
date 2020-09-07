<div class="top-bar dark">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 hidden-xs">
                        <span><i class="fa fa-phone"></i> +91 9632503536</span>
                        <span><i class="fa fa-envelope"></i>support@classpath.io</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Static navbar -->
        <nav class="navbar navbar-inverse navbar-static-top yamm">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.php"><img src="images/classpath--logo-white.png" style="height: 58px;width: 151px;margin-top: -12px;" alt=""></a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <?php $page = basename($_SERVER['PHP_SELF']);
                      $parr = explode('.',$page);
                      $pagename=$parr[0]?>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="<?php if($pagename=='index'){echo "active";} ?>">
                            <a href="index.php">Home</a>
                        </li>
                         <!--<li class="<?php if($pagename=='blog'){echo "active";} ?>">
                            <a href="blog">Blog</a>-->
                        </li>
                        <!--<li class="<?php if($pagename=='courses_java'){echo "active";} ?>">
                            <a href="courses_java.php">Courses</a>
                        </li>-->
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle js-activated" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Courses<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="courses_java.php">Core Java</a></li>
                                <li><a href="courses_javaee.php">Java EE</a></li>
                                <!--<li><a href="courses_spring.php">Spring</a></li>-->
                            </ul>
                        </li>
                        <li class="<?php if($pagename=='contact'){echo "active";} ?>">
                            <a href="contact.php">Contact</a>
                        </li>
                    </ul>

                </div><!--/.nav-collapse -->
            </div><!--/.container -->
        </nav><!--/nav end -->
        <!--rev slider start-->
