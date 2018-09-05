# Experiments With WordPress Gutenberg

This package installs an experimental Gutenberg block. It also contains a self contained development build environment. Install this package directly into `wp-content/plugins/` into a WordPress install. This plugin requires Gutenberg plugin `https://github.com/WordPress/gutenberg` to work.

## You should know... 
This plugin is intended for experimentation, not recommended for production sites. 

## Running Plugin Build

* Run `npm install` and `npm run dev` to make changes

## To create a new block

* Add a directory for your new block in `blocks` directory and import that new block in `blocks/index.js`.
* `index.js` is read first in your new block by default.
* Some good resources I found for learning about Gutenberg block development: 
  - Zac Gordon `https://javascriptforwp.com/courses/gutenburg-development/`
  - Lara Schenck `https://css-tricks.com/learning-gutenberg-1-series-intro/`