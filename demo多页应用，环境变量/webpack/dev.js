const merge = require('webpack-merge')
const option = require('./config')
const webpack = require('webpack')
const path = require('path')
module.exports = merge(option, {
    mode: 'development',
    devServer: {
        port: 4000,
        host: 'localhost',
        // contentBase: path.resolve(__filename, '../dist/index'),
        // contentBase: './dist/index1' || '',
        open: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            DEV: JSON.stringify('dev')
        })
    ]
})