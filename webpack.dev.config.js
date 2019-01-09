'use strict';

const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devServer: {
        clientLogLevel: 'warning',
        hot: true,
        compress: true,
        host: '127.0.0.1',
        port: '8088',
    }
})

module.exports = devWebpackConfig;
