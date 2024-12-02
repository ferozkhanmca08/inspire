<?php 
    /**
    * Template Name: Contact
    */
  ?>  
<?php 
get_header();
?>
<div class="contact-container">
        <div class="contact-info">
            <h2>Get In Touch With Us Now!</h2>
            <div class="info-grid">
                <div class="info-item">
                    <i class="icon">📞</i>
                    <h3>Phone Number</h3>
                    <p><?php the_field('phone_number',21) ?></p>
                </div>
                <div class="info-item">
                    <i class="icon">✉️</i>
                    <h3>Email</h3>                    
                    <p><?php the_field('semail',21) ?></p>
                </div>
                <div class="info-item">
                    <i class="icon">📍</i>
                    <h3>Location</h3>
                    <p><?php the_field('address',21) ?></p>
                </div>
                <div class="info-item">
                    <i class="icon">⏰</i>
                    <h3>Working Hours</h3>                    
                    <p><?php  the_field('working_days',21) ?></p>                   
                </div>
            </div>
        </div>
        <div class="contact-form">
        <h2>Location Map</h2>
        <iframe src="<?php the_field('map_link',21) ?>"
             width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
        </iframe>

        </div>
    </div>
    <?php echo do_shortcode('[wpforms id="569" title="true"]'); ?>
<?php get_footer() ?>