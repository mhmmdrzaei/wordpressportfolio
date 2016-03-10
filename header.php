<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<?php // Load Meta ?>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php  wp_title('|', true, 'right'); ?></title>
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
  <!-- stylesheets should be enqueued in functions.php -->
  <?php wp_head(); ?>
</head>


<body <?php body_class(); ?>>

<header>
  <div class="container">
     <div class="headtitle">
        <h1>Mohammad Rezaei</h1>
       <div class="lineFlash"></div>
     </div>
     <div class="headerMenu">
      <div class="waveLeft">
         <img src="" alt="">
       </div>
       <div class="aboutMenu">
         <a href="#about"><h2>about</h2></a>
       </div>
       <div class="aboutPortfolio">
         <a href="#portfolio"><h2>portfolio</h2></a>
       </div>
       <div class="aboutSkills">
         <a href="#skills"><h2>skills</h2></a>
       </div>
       <div class="aboutContact">
         <a href="#contact"><h2>contact</h2></a>
       </div>
       <div class="waveRight">
         <img src="" alt="">
       </div>

     </div>
  </div> <!-- /.container -->
</header><!--/.header-->

