const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .enableSassLoader()
    .addStyleEntry('style', './assets/style.scss')
    .enableSingleRuntimeChunk();

module.exports = Encore.getWebpackConfig();