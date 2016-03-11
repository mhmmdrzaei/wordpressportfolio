<?php get_header();  ?>

  <div class="container">
 <!-- ABOUT -->
	<section id="about">
		<div class="aboutHead">
			<img src="<?php bloginfo('template_directory'); ?>/images/nails.png" alt="">
			<h2>about</h2>
		</div>
		<div class="about">
		  <?php // Start the loop ?>
		  <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

		    <?php the_content(); ?>
		  </div> <!-- /,content -->
	</section>

<!-- PORTFOLIO -->

	<section id="portfolio">
	<div class="portfolioHead" >
			<img src="<?php bloginfo('template_directory'); ?>/images/money.png" alt="" class="animated lightSpeedIn">
			<h2>portfolio</h2>
		</div>
		<div class="portfolioMain">
			<?php while( has_sub_fields('portfolio_items') ): ?>
			    <?php $image = get_sub_field('images') ?>  
			    <!-- <pre><?php print_r($image); ?></pre>    -->
			    <img src="<?php echo $image['sizes']['medium'] ?>" alt=""> 
			    <div class="portfolioDesc">
			    	<p class="portfolioTitle"><?php the_sub_field('project_title') ?></p>
			    	<p><?php the_sub_field('project_description'); ?></p>
			    	<div class="viewLive">
					<a href="<?php the_sub_field('project_link'); ?>">VIEW LIVE</a>
			    	</div>
			    </div>
			       
			  <?php endwhile;//end of image loop ?>
			</div>
	</section>

<!-- SKILLS -->
	<section id="skills">
		<div class="skillsHead">
			<img src="<?php bloginfo('template_directory'); ?>/images/glasses.png" alt="">
			<h2>skills</h2>
		</div>
		<div class="skillsmain">
			<?php while( has_sub_fields('skils') ): ?>
					
					<?php $devicon = get_sub_field('skills_dev') ?> 
					<?php echo $devicon ?>
			
			        	<!-- <?php the_sub_field('skills_dev') ?> -->
			      
			    	<?php endwhile;//end of skills loop ?>	
			    </div>
		</section>


   

     <?php endwhile; // end the loop?>
 








  </div> <!-- /.container -->

<?php get_footer(); ?>

          