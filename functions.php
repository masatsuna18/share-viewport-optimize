<?php
// ## Script
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_script('viewport-optimize', get_stylesheet_directory_uri() . '/js/viewport-optimize.js', array(), '1.0.0', true);
});
