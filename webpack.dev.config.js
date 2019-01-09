'use strict';

const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devServer: {
        clientLogLevel: 'warning',
        hot: true,
        compress: true,
        host: '0.0.0.0',
        port: '8088',
    }
})

module.exports = devWebpackConfig;
