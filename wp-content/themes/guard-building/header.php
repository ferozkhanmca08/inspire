<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package guard-building
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site">
        <a class="skip-link screen-reader-text"
            href="#primary"><?php esc_html_e( 'Skip to content', 'guard-building' ); ?></a>

        <header id="masthead" class="site-header">
            <div class="topmenu">
                <?php $phone = get_field('phone_icon',21);
			  $email = get_field('email_icon',21); 
			  $location = get_field('location_icon',21); 
			  $hiring = get_field('hiring',21); 
			  $timing = get_field('timing',21); 
		?>
                <div class="top-bar">
                    <div class="location">
                        <span><img class ="sicons" src="<?php echo $location['sizes']['medium_large']; ?>" /></span> <?php the_field('location',21); ?>
                    </div>
                    <div class="hours">
                        <span><img class ="sicons" src="<?php echo $timing['sizes']['medium_large']; ?>" /></span> Mon - Sat
                    </div>
                    <div class="email">
                        <span><img class ="sicons" src="<?php echo $email['sizes']['medium_large']; ?>" /></span> <a href="mailto:<?php the_field('semail',21); ?>"><?php the_field('semail',21); ?></a>
                    </div>
                    <div class="phone">
                        <span><img class ="sicons" src="<?php echo $phone['sizes']['medium_large']; ?>" /></span> <a href="tel:<?php the_field('phone_number',21); ?>"><?php the_field('phone_number',21); ?></a>
                    </div>
                    <div class="hiring">
                        <span><img class ="sicons" src="<?php echo $hiring['sizes']['medium_large']; ?>" /></span> <a href="#freequote">We Are Hiring</a>
                    </div>
                    <div class="cta-button">
                        <a href="#freequote" class="free-quote">Free Quote</a>
                    </div>
                </div>
            </div>
            <div class="headerinfo">
                <div class="site-branding" style="width:30%;float:left;">

                    <div class="gblogo">
                        <?php the_custom_logo();  ?>
                    </div>
                    <?php			 
			if ( is_front_page() && is_home() ) :
				?>
                    <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"
                            rel="home"><?php bloginfo( 'name' ); ?></a></h1>
                    <?php
			else :
				?>
                    <p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"
                            rel="home"><?php bloginfo( 'name' ); ?></a></p>
                    <?php
			endif;
			$guard_building_description = get_bloginfo( 'description', 'display' );
			if ( $guard_building_description || is_customize_preview() ) :
				?>
                    <p class="site-description">
                        <?php echo $guard_building_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
                    </p>
                    <?php endif; ?>
                </div><!-- .site-branding -->
                <div class="gbmenu">
                    <nav id="site-navigation" class="main-navigation">
                        <button class="menu-toggle" aria-controls="primary-menu"
                            aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'guard-building' ); ?></button>
                        <?php
			wp_nav_menu(
				array(
					'theme_location' => 'menu-1',
					'menu_id'        => 'primary-menu',
				)
			);
			?>
                    </nav><!-- #site-navigation -->
                </div>
            </div>
        </header><!-- #masthead -->