'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
    dev: {

        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 3006, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
 
        devtool: 'cheap-module-eval-source-map',
 
        cacheBusting: true,

        cssSourceMap: true
    },

    build: {
        env: require('./prod.env'), 

        index: path.resolve(__dirname, '../dist/index.html'),

        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',

         

        productionSourceMap: false,
        devtool: '#source-map',
 
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
 
        bundleAnalyzerReport: process.env.npm_config_report
    }
}
