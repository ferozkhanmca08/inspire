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
<footer class="footer">
        <div class="footer-container">
            <div class="footer-column">
                <h3>Guard Buildings</h3>
                <p>we are passitionate work journey to overcome challeges provided customer support. what will be say that will done.</p>
            </div>
            <div class="footer-column">
                <h3>PRODUCTS</h3>
                <?php 
				   wp_nav_menu(
					array(
						'theme_location' => 'footer2',
						'menu_id'        => 'footer2',
					)
				);?>
            </div>
            <div class="footer-column">
                <h3>USEFUL LINKS</h3>
                <?php 
				   wp_nav_menu(
					array(
						'theme_location' => 'footer1',
						'menu_id'        => 'footer1',
					)
				);
				?>
            </div>
            <div class="footer-column">
                <h3>CONTACT</h3>
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i> <?php the_field('address',21) ?></li>
                    <li><i class="fas fa-envelope"></i> <?php the_field('semail',21) ?></li>
                    <li><i class="fas fa-phone"></i> <?php the_field('phone_number',21) ?></li>                    
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© 2025 Copyright GuardBuildings</p>
			<?php $fbicon = get_field('facebook_iBG',21);
			      $ticon = get_field('twitter_iGB',21);
				  $insticon = get_field('instagram_iGB',21);
				  $licon = get_field('linkedin_iGB',21); ?>			
            <div class="social-icons">
                <a target="_blank" title="GB Facebook" href="<?php the_field('facebook_gb',21) ?>"><i class="fab fa-facebook-f"></i><img src="<?php echo $fbicon['sizes']['medium_large'] ?>" /></a>
                <a target="_blank" title="GB Twitter" href="<?php the_field('twitter_gb',21) ?>"><i class="fab fa-twitter"></i><img src="<?php echo $ticon['sizes']['medium_large'] ?>" /></a>
                <a target="_blank" title="GB Instagram" href="<?php the_field('instagram_gb',21) ?>"><i class="fab fa-instagram"></i><img src="<?php echo $insticon['sizes']['medium_large'] ?>" /></a>
                <a target="_blank" title="GB Instagram" href="<?php the_field('linkedin_gb',21) ?>"><i class="fab fa-linkedin"></i><img src="<?php echo $licon['sizes']['medium_large'] ?>" /></a>
                <a href="#"><i class="fab fa-github"></i></a>
            </div>
        </div>
    </footer>

<?php wp_footer(); ?>

</body>
</html>
