<?php
/*
Plugin Name: Convert Classic Posts to Gutenberg
Plugin URI: 
Description: Convert Classic Posts to Gutenberg
Author: Marie Comet
Version: 1.0.0
Author URI: https://github.com/MarieComet
Text Domain: classic-to-gutenberg
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

if ( ! defined( 'CONVERT_CLASSIC_TO_GUTENBERG_PATH' ) ) {
    define( 'CONVERT_CLASSIC_TO_GUTENBERG_PATH', plugin_dir_path( __FILE__ ) );
}

if ( ! defined( 'CONVERT_CLASSIC_TO_GUTENBERG_URL' ) ) {
    define( 'CONVERT_CLASSIC_TO_GUTENBERG_URL', plugin_dir_url( __FILE__ ) );
}

if ( ! defined( 'CONVERT_CLASSIC_TO_GUTENBERG_VERSION' ) ) {
    define( 'CONVERT_CLASSIC_TO_GUTENBERG_VERSION', '1.0.0' );
}

/**
 * Add admin menu page
 */
add_action( 'admin_menu', 'convert_classic_to_gutenberg_register_page' );
function convert_classic_to_gutenberg_register_page() {
    add_submenu_page(
        'tools.php',
        __( 'Convert Classic to Gutenberg', 'classic-to-gutenberg' ),
        __( 'Classic to Gutenberg', 'classic-to-gutenberg' ),
        'manage_options',
        'classic-to-gutenberg',
        'convert_classic_to_gutenberg_page',
        'dashicons-schedule'
    );
}

function convert_classic_to_gutenberg_page() {
    ?>
    <div class="wrap">
        <h1 class="wp-heading-inline"><?php _e( 'Convert Classic Posts to Gutenberg', 'classic-to-gutenberg' ); ?></h1>
        <div id="classic-to-gutenberg"></div>
    </div>
    <?php
}

add_action( 'admin_enqueue_scripts', 'cctg_admin_scripts' );
function cctg_admin_scripts( $hook ) {
    // Load only on ?page=classic-to-gutenberg.
    error_log(print_r($hook, true));
    if ( 'tools_page_classic-to-gutenberg' !== $hook ) {
        return;
    }
  
    // Automatically load imported dependencies and assets version.
    $asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
 
    // Enqueue CSS dependencies.
    foreach ( $asset_file['dependencies'] as $style ) {
        wp_enqueue_style( $style );
    }
 
    // Load our app.js.
    wp_register_script(
        'classic-to-gutenberg',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );
    wp_enqueue_script( 'classic-to-gutenberg' );

    wp_localize_script( 'classic-to-gutenberg', 'cctg', [
        'custom_blocks' => $custom_blocks
    ] );

    // Load our style.css.
    wp_register_style(
        'classic-to-gutenberg',
        plugins_url( 'style.css', __FILE__ ),
        array(),
        $asset_file['version']
    );
    wp_enqueue_style( 'classic-to-gutenberg' );
}