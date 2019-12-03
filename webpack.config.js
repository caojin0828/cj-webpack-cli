'use strict'

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 拆分css样式的插件
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
// 打包前先清空
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 代码压缩
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
    // 模式配置
    mode: 'development',     
    // 入口 
    entry: path.resolve(__dirname, './src/main.js'),
    // 出口
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
    },
     
    // 模块解析
    module: {
        rules: [
            {
                test: /\.(jsx|tsx)$/,
                loaders: 'babel-loader',
                include: path.resolve(__dirname, "src"),          // 只转化src目录下的js
                exclude: /node_modules/,  // 排除掉node_modules，优化打包速度
            },
            {
                test: /\.(js|mjs|ts)$/,
                loaders: 'babel-loader',
                exclude: /node_modules/,  // 排除掉node_modules，优化打包速度
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'postcss-loader',
                    'sass-loader'
                ],
                exclude: /node_modules/,  // 排除掉node_modules，优化打包速度
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'postcss-loader'
                ],
                exclude: /node_modules/,  // 排除掉node_modules，优化打包速度
            },
            {
                test: /\.(html|htm)$/,
                use: 'html-withimg-loader'
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,  // 小于10k的图片自动转成base64格式，并且不会存在实体图片
                            outputPath: 'images/',  // 图片打包后存放的目录
                        }
                    }
                ],
                exclude: /node_modules/,  // 排除掉node_modules，优化打包速度
            },
            {
                test: /\.(eot|ttf|woff|svg)$/,
                use: 'file-loader'
            },

        ]
    },
    // 解析
    resolve: {
        // 别名
        alias: {
          '@page':path.join(__dirname,'src/page'),
          '@component':path.join(__dirname,'src/components'),
        //   actions:path.join(__dirname,'src/redux/actions'),
        //   reducers:path.join(__dirname,'src/redux/reducers'),
        },
        // 省略后缀
        extensions: ['.js', '.jsx', '.json']
    },
    // 对应的插件
    plugins: [
        new HtmlWebpackPlugin({
            // 用哪个html作为模板
            // 在src目录下创建一个index.html页面当做模板来用
            template: './index.html',
            hash: true, // 会在打包好的bundle.js后面加上hash串
        }),
        // 拆分后会把css文件放到dist目录下的css/style.css
        new MiniCssExtractPlugin({
            filename: 'css/style.[hash].css'   // 指定打包后的css
        }),
        // 打包前先清空
        new CleanWebpackPlugin(),
    ],
    // 性能优化
    optimization: {
        runtimeChunk: {
            name: 'manifest'
        },
        // 压缩
        minimize: false, 
        minimizer: [
            new TerserWebpackPlugin({
                // cache: true,
                parallel: true
            })
        ],
        splitChunks: {
            chunks:'all',//同时分割同步和异步代码,推荐。
        }
    }
}