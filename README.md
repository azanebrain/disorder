# DisOrder

A simple organization platform. Uses AngularJS to plug into a WordPress backend.

# Run
There are 3 commands for running the app:

`npm run build` : Compiles the app into /dist to work as a static site

`npm run serve` : Opens the app on localhost:9000

`npm run test` : Runs all tests

# Package

Run `npm run build` to create the app in the /dist folder. The code in this folder can be used as the static site. You will also need to setup a WordPress site with the JSON REST API plugin for the static site to communicate with.g

# Setup

Install Node and Bower dependencies

`sudo npm install`

## Install a new WP instance

You can drop WordPress into its own directory (/wp) at the endpoint disorder.dev/wp

If you're friendly with [wp-cli](http://wp-cli.org), you can use it and the settings in wp-cli.yml to easily install WordPress into the `/wp` directory

Make sure you've setup the wp-cli config file correctly (make a duplicate of the wp-cli yaml default. Remove the `.default` file type.), then use wp-cli to setup WordPress
```
wp core download
wp core config
wp core install
```

If hosting on a server, duplicate .htaccess.default and rename as .htaccess, or add the contents of .htaccess.default to your already existing .htaccess file

In `app/scripts/services/disorders.js` the endpoint for the wordpress installatino is set to `disorder.dev`. If you want to use something else, you'll have to modify the DisorderData factory and rebuild. This requirement will be addressed in the future

## CORS is not supported out of the box

If the app is not in disorder.dev, you will need to enable CORS in your browser, or the .htaccess file of the WordPress install. This opens up some security concerns if you're doing it on a live server so make sure you know what you're doing.

## Plugins
You will need the [JSON REST API](https://wordpress.org/plugins/json-rest-api/) by Ryan McCue

I suggest you have a backup plugin ([Updraft Plus](https://wordpress.org/plugins/updraftplus/)), and a security plugin ([BruteProtect](https://wordpress.org/plugins/bruteprotect/) | [iThemes Security](https://wordpress.org/plugins/better-wp-security/))

# Project Dependencies
- [Bower](http://bower.io)
- [NPM](https://www.npmjs.org/)
- WordPress
- [Yeoman Angular Generator](https://github.com/yeoman/generator-angular)

## Planned Dependencies:
- Angular Boilerplate
- [Angular Foundation](https://github.com/pineconellc/angular-foundation) by Pinecone

# Not ready yet.
Disorder isn't v1 yet so it's not ready to use in production. If you know what you're doing with your WP install you can probably set it up, but I suggest keeping this local.

# Props
Text effects (CalvinS) by [Text to ASCII Art Generator](http://patorjk.com/software/taag/)

# Roadmap
- Make it look a little nice
- Tests
- Figure out actual requirements to build a proper, production-ready distro
- Customize the endpoint
- v0.2.0 : Proper build automation and project structure
- ~~v0.0.2 : Pull in data from a WP install~~
- ~~v0.0.1 : Basic JSON integration~~

Other stuff coming:
- Show all posts, not just the 10 most recent
- Filter by checkbox
- Authentication (and hidden backend)
