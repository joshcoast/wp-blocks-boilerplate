# wp-blocks-boilerplate

A good starting point for creating your own WordPress custom blocks for Gutenberg.

## Turn on the Custom Blocks

### Requirements:

- WordPress Version: 4.9.8 or higher https://wordpress.org/download/
- Gutenberg Version: 3.7.0 or higher https://github.com/WordPress/gutenberg

### Recommended:
Gutenberg Starter Theme: https://github.com/WordPress/gutenberg-starter-theme/

I've included a custom block in this repo. To get it working, you'll need to copy this repo to your plugins directory in your WordPress install `/wp-content/plugins/wp-blocks-boilerplate`. After you've done that, you can turn it on in the WordPress admin `https://example.com//wp-admin/plugins.php` and activate "JoshBlocks". 

JoshBlocks should work on any WP site that's also running the Gutenberg Plugin (note requirements above). There are features that only work on a theme that fully utilize the new Gutenberg plugin. As such, I recommend using the Gutenberg Starter Theme. There are other themes that utilize Gutenberg, but this one is nice and clean and easy to experiment with. Also, I think it helps that it's created and maintained by the people at WordPress. 

## Get local development build up and running:

1. Within `wp-blocks-boilerplate` root, run `npm install`. This will get all the packages needed to run a basic build environment. 
2. Run the command `npm run dev`. This will get the dev process running. It will get webpack running and watching the development files for changes.
3. The `/assets` directory is where all the compiled files are placed, so don't try and edit stuff there. :)
4. You'll mostly be concerned with editing and creating files in `/blocks`. As you make new blocks, this is where you will put them. The example block is called `picture-block`. 
5. After you're done editing, run `npm run build`. This will compile a compressed version of the plugin for you. To have a look at these commands in more depth, start by checking out the `package.json` scripts commands. 

## Get started making new blocks:

1. It might be easer to start messing around with the sample block to see how it works `blocks/picture-block`. 
2. As you edit files in `blocks/picture-block` you'll see the scripts running and showing errors if there are any. You can edit and reload your WordPress install to see what it does. It's probably best to explore on a local instal, otherwise, it'll get old pretty quick if you have to upload and sync to a server for every little change.
3. If you start to feel comfortable with how it works, a good next step would be to copy the picture-block directly and rename it. There are a few places to notice where you'll have to add this new block name.
  - `/blocks/index.js`
  - `/blocks/picture-block/index.js` Note lines 37 and 39

## A good start

This is only a start, setting up the development environment alone can take a long time to figure out. To really get into custom blocks and how React interacts with Gutenberg's API you're going to need to dig in deep. Here are a few resources I found really helpful. 

1. https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type/
2. https://wordpress.org/gutenberg/handbook/block-api/
3. https://css-tricks.com/learning-gutenberg-1-series-intro/
4. https://javascriptforwp.com/product/gutenberg-block-development-course/



