const merge = require('webpack-merge')
const option = require('./config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = merge(option, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin()
    ]
})