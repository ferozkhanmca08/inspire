<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package guard-building
 */

get_header();
?>  
	<main id="primary" class="site-main">

		<section class="error-404 not-found">
			<?php 
			    wp_redirect( '/inspire/404page' );
			?>
		</section><!-- .error-404 -->

	</main><!-- #main -->

<?php
get_footer();
