<?php get_header();  ?>

  <div class="container">
 <!-- ABOUT -->
	<section id="about">
		<div class="aboutHead spin">
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
			<h2>portfolio</h2>
			<img src="<?php bloginfo('template_directory'); ?>/images/money.png" alt="">
			
		</div>
		<div class="portfolioMain">
			<?php while( has_sub_fields('portfolio_items') ): ?>

			    <div class="portfolioItem">
			    	<?php $image = get_sub_field('images') ?> 
			    	<img src="<?php echo $image['sizes']['large'] ?>" alt=""> 
			    	<div class="portfolioDesc">
			    		<p class="portfolioTitle"><a href="<?php the_sub_field('project_link'); ?>" target="blank"><?php the_sub_field('project_title') ?></a></p>
			    		<p><?php the_sub_field('project_description'); ?></p>
			    		<div class="viewLive">
			    			<a href="<?php the_sub_field('project_link'); ?>" target="blank">VIEW LIVE</a>
			    		</div>
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

          