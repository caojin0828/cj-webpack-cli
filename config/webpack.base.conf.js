'use strict'

const path = require('path');
// 拆分css样式的插件
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
// 代码压缩
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
    // 模式配置
    mode: 'production',     // production , development
    // 入口 
    // entry: path.resolve(__dirname, './src/main.js'),
    entry: {
        // main: path.resolve(__dirname, './src/main.js'),
        body: path.resolve(__dirname, './../src/components/Body/main.js'),
        head: path.resolve(__dirname, './../src/components/Head/main.js'),
    },
    // 出口
    output: {
        filename: '[name].[hash].js',
        chunkFilename: 'js/[name]/[name].[chunkhash].js',
        path: path.resolve(__dirname, 'D:\\wamp\\www\\fission\\project\\test\\view'),
        // library: "someLibName",
        libraryTarget: "umd",
        // auxiliaryComment: "author: xiao jin",
    },
     
    // 模块解析
    module: {
        rules: [
            {
                test: /\.(jsx|tsx)$/,
                loaders: 'babel-loader',
                include: path.resolve(__dirname, "./../src"),          // 只转化src目录下的js
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
          '@page':path.join(__dirname,'./../src/page'),
          '@component':path.join(__dirname,'./../src/components'),
        //   actions:path.join(__dirname,'src/redux/actions'),
        //   reducers:path.join(__dirname,'src/redux/reducers'),
        },
        // 省略后缀
        extensions: ['.js', '.jsx', '.json']
    },
    // 性能优化
    optimization: {
        // runtimeChunk: {
        //     name: 'manifest'
        // },
        // 压缩
        minimize: false, 
        minimizer: [
            new TerserWebpackPlugin({
                // cache: true,
                parallel: true
            })
        ],
        splitChunks: {
            // chunks:'all',//同时分割同步和异步代码,推荐。
            cacheGroups: {
                default: false,
                vendors: false,
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    enforce: true,
                    priority: 10,
                    name: 'vendor'
                },
                // body: {
                //     test: /[\\/]components\/Body[\\/]/,
                //     chunks: "all",
                //     // minChunks: 2,
                //     name: 'common',
                //     enforce: true,
                //     priority: 5
                // },
                // head: {
                //     test: /[\\/]components\/Head[\\/]/,
                //     chunks: "all",
                //     // minChunks: 2,
                //     name: 'common',
                //     enforce: true,
                //     priority: 5
                // },
                common: {
                    chunks: "all",
                    minChunks: 2,
                    name: 'common',
                    enforce: true,
                    priority: 5
                }
            }
        }
    }
}