<footer>
  <div class="container">
    <section id="contact">
    <div class="contactHead">
        <h2>contact</h2>
    	<img class="spin" src="<?php bloginfo('template_directory'); ?>/images/peace.png" alt="">
    </div>
    	<div class="contactMain">
    		<div class="contactText">
    			<h3>MOHAMMAD REZAEI</h3>
    			<a href="mailto:<?php the_field('email') ?>"><h3><?php the_field('email') ?></h3></a>
    		</div>
    		
    		
    		<div class="contactImg"> 
    			<?php while( has_sub_fields('social_icons') ): ?>
    					
    			       <?php $imageFooter = get_sub_field('social_image') ?>  
    			       <a href="<?php the_sub_field('social_link'); ?>"> <img src="<?php echo $imageFooter['sizes']['medium'] ?>" alt=""> </a>
    			      
    			     <?php endwhile;//end of contact loop ?>
    			</div>
    		</div>
    	</section>
  </div>
</footer>

<script>
// scripts.js, plugins.js and jquery are enqueued in functions.php
/* Google Analytics! */
 var _gaq=[["_setAccount","UA-XXXXX-X"],["_trackPageview"]]; // Change UA-XXXXX-X to be your site's ID
 (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
 g.src=("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js";
 s.parentNode.insertBefore(g,s)}(document,"script"));
</script>

<?php wp_footer(); ?>
</body>
</html>