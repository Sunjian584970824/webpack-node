const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'development', // production development
    entry: './src/index.js',
    output: {
        filename: 'bundl.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 3000,
        open: true,
        contentBase: './webpack/dist/index.html',
        host: 'localhost',
    },
    module: {
        rules: [{
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: "[path][name].[ext]",
                        limit: 200000
                    }
                }]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    // {
                    //     loader: 'style-loader',
                    //     options: {
                    //         insertAt: 'top'
                    //     }
                    // },
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ]
            },
            {
                test: /\.less$/,
                use: [
                    // {
                    //     loader: 'style-loader',
                    //     options: {
                    //         insertAt: 'top'
                    //     }
                    // },
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader', // 自动给c3属性加浏览器标签
                    'less-loader'
                ]
            },

        ]
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(), // css 代码代码压缩,
            new UglifyJsPlugin() // js 代码代码压缩,
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html", //模板，
            // filename:'index.html',// 生成文件名，默认为index
            title: "testWebpack",
            minify: {
                collapseBooleanAttributes: true // 删除空格
            },
            hash: true
        }), // 根据模板文件生成文件
        new MiniCssExtractPlugin({ //CSS 代码块提取单独的css文件
            filename: '[name].[hash].css',
        }),
        new CleanWebpackPlugin() // 打包之前删除已有的包
    ]
}