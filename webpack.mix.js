const path = require('path');
const {mix} = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
const itemsName = process.env.ITEMS_NAME;
const itemsPath = './public/' + itemsName + '/';
const itemsResPath = 'resources/' + itemsName + '/';
mix
    .setPublicPath(itemsPath)
    .setResourceRoot('/' + itemsName + '/')
    .js(itemsResPath + '/js/app.js', 'js')
    .sass(itemsResPath + '/sass/app.scss', 'css')
    .extract(['vue', 'vue-router', 'vuex'])
    .webpackConfig({
        output: {
            publicPath: './' + itemsName + '/',
            chunkFilename: 'js/[name].[chunkhash].js',
        },
        resolve: {
            alias: {
                package: path.resolve(__dirname, './package.json'),
                assets: path.resolve(__dirname, itemsResPath + '/js/assets'),
                views: path.resolve(__dirname, itemsResPath + '/js/views/'),
                'vuex-store': path.resolve(__dirname, itemsResPath + '/js/store'),
                'plotly.js': 'plotly.js/dist/plotly'
            }
        }
    })
;
mix.version()

if (mix.config.inProduction) {
} else {
    mix.sourceMaps()
}
