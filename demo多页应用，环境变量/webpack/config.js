const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const glob = require('glob')
const htmlChunk = []
const entryArry = {}
var htmlPlugins = []
    // const webpack = require('webpack')

const getEntry = function() {
    var p = './src/path/*'
    var files = glob.sync('./src/path/*');
    var filesName = glob.sync(p + '/index.js');

    files.map((item, key) => {
        files[key] = item.replace('./src/path/', '').toString()
        entryArry[files[key]] = filesName[key]
        htmlChunk.push(files[key])
        htmlPlugins.push(new HtmlWebpackPlugin({ // 打包生成html文件并自动引入对应的资源文件
            filename: files[key] + '/index.html', //生成的文件名 默认index.html
            // filename: files[key] + '/index.html', //生成的文件名 默认index.html
            template: './src/index.html', //生成文件的模板
            chunks: [files[key]],
        }))
    });
}
getEntry()
console.log(htmlPlugins)
module.exports = {
    // entry: './src/path/index/index.js',
    entry: entryArry,
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]/[name].[hash].js'
    },
    stats: { children: false },
    module: {
        rules: [{
                test: /\.vue$/,
                use: 'vue-loader'
            }, {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        ...htmlPlugins,
        new MiniCssExtractPlugin({
            filename: '[name]/index.css' // 分类生成css对应文件
        }),
        // new webpack.DefinePlugin({
        //     DEV: JSON.stringify('dev')
        // })
        // new HtmlWebpackPlugin({ // 打包生成html文件并自动引入对应的资源文件
        //     filename: "index.html", //生成的文件名 默认index.html
        //     template: './src/index.html', //生成文件的模板
        //     chunks: htmlChunk
        // })
    ]
}