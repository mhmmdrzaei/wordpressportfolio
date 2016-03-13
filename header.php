<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<?php // Load Meta ?>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php  wp_title('|', true, 'right'); ?></title>
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
  <link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/images/favicon.ico" type="image/x-icon" />
  <link rel="apple-touch-icon" sizes="57x57" href="<?php bloginfo('template_directory'); ?>/images/apple-touch-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="<?php bloginfo('template_directory'); ?>/images/apple-touch-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="<?php bloginfo('template_directory'); ?>/images/apple-touch-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="<?php bloginfo('template_directory'); ?>/images/apple-touch-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="<?php bloginfo('template_directory'); ?>/images/apple-touch-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="<?php bloginfo('template_directory'); ?>/images/apple-touch-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="<?php bloginfo('template_directory'); ?>/images/apple-touch-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="<?php bloginfo('template_directory'); ?>/images/apple-touch-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="<?php bloginfo('template_directory'); ?>/images/apple-touch-icon-180x180.png">
  <link rel="icon" type="image/png" href="<?php bloginfo('template_directory'); ?>/images/favicon-16x16.png" sizes="16x16">
  <link rel="icon" type="image/png" href="<?php bloginfo('template_directory'); ?>/images/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="<?php bloginfo('template_directory'); ?>/images/favicon-96x96.png" sizes="96x96">
  <link rel="icon" type="image/png" href="<?php bloginfo('template_directory'); ?>/images/android-chrome-192x192.png" sizes="192x192">
  <meta name="msapplication-square70x70logo" content="<?php bloginfo('template_directory'); ?>/images/smalltile.png" />
  <meta name="msapplication-square150x150logo" content="<?php bloginfo('template_directory'); ?>/images/mediumtile.png" />
  <meta name="msapplication-wide310x150logo" content="<?php bloginfo('template_directory'); ?>/images/widetile.png" />
  <meta name="msapplication-square310x310logo" content="<?php bloginfo('template_directory'); ?>/images/largetile.png" />
  <!-- stylesheets should be enqueued in functions.php -->
  <?php wp_head(); ?>
</head>


<body <?php body_class(); ?>>

<header>
  <div class="container">
     <div class="headtitle">
        <svg viewBox="0 0 650 100">

          <!-- Symbol -->
          <symbol id="s-text">
            <text text-anchor="middle"
                  x="50%" y="50%" dy=".35em">
              MOHAMMAD REZAEI 
            </text>
          </symbol>  

          <!-- Duplicate symbols -->
          <use xlink:href="#s-text" class="text"
               ></use>
          <use xlink:href="#s-text" class="text"
               ></use>
          <use xlink:href="#s-text" class="text"
               ></use>
          <use xlink:href="#s-text" class="text"
               ></use>
          <use xlink:href="#s-text" class="text"
               ></use>

        </svg>
       <div class="lineFlash"></div>
     </div>
     <div class="fuckyou">
       <div class="fa fa-bars fa-2x " title="menu"></div>
     </div>

    
     <div class="headerMenu dropdown">
      
       <div class="aboutMenu ">
        <div class="waveLeft">
           <img src="<?php bloginfo('template_directory'); ?>/images/waveleft.png" alt="">
          </div>
         <a href="#about"><h2 class="nameAnimate">about</h2></a>
       </div>
       <div class="aboutPortfolio">
         <a href="#portfolio"><h2 class="nameAnimate">portfolio</h2></a>
       </div>
       <div class="aboutSkills">
         <a href="#skills"><h2 class="nameAnimate">skills</h2></a>
       </div>
       <div class="aboutContact">
         <a href="#contact"><h2 class="nameAnimate">contact</h2></a>
         <div class="waveRight">
         <img src="<?php bloginfo('template_directory'); ?>/images/waveright.png" alt="">
        </div>
       </div>
       
       

     </div>
  </div> <!-- /.container -->
</header><!--/.header-->

