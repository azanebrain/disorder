# DisOrder

A simple organization platform. Uses AngularJS to plug into a WordPress backend.

# Run
There are 3 commands for running the app:

`npm run build` : Compiles the app into /dist (broken)

`npm run serve` : Opens the app on localhost:9000

`npm run test` : Runs all tests (broken)

# Setup
Make a duplicate of the wp-cli yaml default. Remove the `.default` file type.

`sudo npm install`

## Install a new WP instance
If you're friendly with [wp-cli](http://wp-cli.org), you can use it and the settings in wp-cli.yml to easily install WordPress into the `/wp` directory

Make sure you've setup the wp-cli config file correctly (see setup).
```
wp core download
wp core config
wp core install
```

If hosting on a server, duplicate .htaccess.default and rename as .htaccess, or add the contents of .htaccess.default to your already existing .htaccess file

In `app/scripts/services/disorders.js` the endpoint for the wordpress installatino is set to `disorder.dev`. If you want to use something else, you'll have to modify the DisorderData factory. This requirement will be addressed in the future

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
There are some major infrastructural tweaks that need to be applied before this is production ready. Mainly, since the tests are not setup, the project cannot be built. However, you can run it locally in development mode and have a local notebook.

# Props
Text effects (CalvinS) by [Text to ASCII Art Generator](http://patorjk.com/software/taag/)

# Roadmap
- v0.0.4 : Proper build automation and project structure (using [NG Boilerplate Yeoman Generator](https://github.com/thardy/generator-ngbp))
- v0.0.3 : Make it look a little nice
- ~~v0.0.2 : Pull in data from a WP install~~
- ~~v0.0.1 : Basic JSON integration~~

Other stuff coming:
- Show all posts, not just the 10 most recent
- Filter by checkbox
- Authentication (and hidden backend)
