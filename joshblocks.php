<?php
/**
 * Plugin's bootstrap file to launch the plugin.
 *
 * @package     Josh_Blocks\Example_Blocks
 * @author      Josh Coast
 * @license     GPL2+
 *
 * @wordpress-plugin
 * Plugin Name: JoshBlocks
 * Plugin URI:  http://joshcoast.com
 * Description: An plugin containing example blocks for developers.
 * Version:     1.0
 * Author:      Josh Coast
 * Author URI:  http://joshcoast.com
 * Text Domain: joshblocks
 */

namespace Josh_Blocks\Example_Blocks;

//  Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Gets this plugin's absolute directory path.
 *
 * @since  1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}

// Enqueue JS and CSS
include __DIR__ . '/lib/enqueue-scripts.php';

// Register meta boxes
include __DIR__ . '/lib/meta-boxes.php';

// Block Templates
include __DIR__ . '/lib/block-templates.php';

// Dynamic Blocks
//include __DIR__ . '/blocks/12-dynamic/index.php';
