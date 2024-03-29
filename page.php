<?php get_header(); ?>

<?php do_action('wdt_left_sidebar'); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
		
			<?php while ( have_posts() ) : the_post(); ?>
			
				<?php wdt_get_theme_page_title(); ?>
			
				<?php get_template_part('template-parts/content', 'page'); ?>
				
				<?php
					// If comments are open or we have at least one comment, load up the comment template.
				if (comments_open() || get_comments_number()):
					comments_template();
				endif;
				?>
				
			<?php endwhile; ?>
		
		</main>
	</div>
	
<?php do_action('wdt_right_sidebar'); ?>
	
<?php get_footer(); ?>
