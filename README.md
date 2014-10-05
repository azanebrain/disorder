# Dis Order

A simple organization platform. Uses AngularJS to plug into a WordPress backend.

# Run
There are 3 commands for running the app:
`npm run build` : Compiles the app into /dist
`npm run serve` : Opens the app on localhost:9000
`npm run test` : Runs all tests

# Setup
Make a duplicate of the wp-cli yaml default. Remove the `.default` file type.
`sudo npm install`

## Install a new WP instance
WordPress is contained in the `/wp` directory
Make sure you've setup the wp-cli config file correctly (see setup).
```
wp core download
wp core config
wp core install
```

If hosting on a server, duplicate .htaccess.default and rename as .htaccess, or add the contents of .htaccess.default to your already existing .htaccess file

## Plugins
You will need the [JSON REST API](https://wordpress.org/plugins/json-rest-api/) by Ryan McCue
I suggest you have a backup plugin ([Updraft Plus](https://wordpress.org/plugins/updraftplus/)), and a security plugin ([BruteProtect](https://wordpress.org/plugins/bruteprotect/) | [iThemes Security](https://wordpress.org/plugins/better-wp-security/))

# Project Dependencies 
- [Bower](http://bower.io)
- [Angular Foundation](https://github.com/pineconellc/angular-foundation) by Pinecone
- [NPM](https://www.npmjs.org/)
- WordPress
- [Yeoman Angular Generator](https://github.com/yeoman/generator-angular)


# Props
Text effects (CalvinS) by [Text to ASCII Art Generator](http://patorjk.com/software/taag/)

# Roadmap
- v0.0.4 : Proper build automation
- v0.0.3 : Make it look a little nice
- ~~v0.0.2 : Pull in data from a WP install~~
- ~~v0.0.1 : Basic JSON integration~~

Other stuff coming:
- Filter by checkbox
- Authentication (and hidden backend)