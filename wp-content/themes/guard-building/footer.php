<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package guard-building
 */

?>

	<footer id="colophon" class="site-footer">
		<div class="site-info">
			<div class="footerlink1" style="width:25%;float:left;">
				<?php
					wp_nav_menu(
						array(
							'theme_location' => 'footer1',
							'menu_id'        => 'footer1',
						)
					);
					?>
			</div>
			<div class="footerlink2" style="width:25%;float:left;">
				<?php
					wp_nav_menu(
						array(
							'theme_location' => 'footer2',
							'menu_id'        => 'footer',
						)
					);
					?>
			</div>
			<div class="footerlink3" style="width:25%;float:left;">
				 <?php 
				   wp_nav_menu( array('theme_location'=>'footer3','menu_id'=>'footer',) );
				 ?>
			</div>
			<div class="footerlink4" style="width:25%;float:left;">
				<?php wp_nav_menu( array('theme_location'=>'footer4','menu_id'=>'footer') ); ?>
			</div>
			
		</div><!-- .site-info -->
		<div class="copywrite">All Rights Belongs @ <span><a href="#">Guard Buildings</a></span></div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
