'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 拆分css样式的插件
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const baseConf = require('./webpack.base.conf');

module.exports = {
    ...baseConf,
    ...{
        mode: 'development',
        // 开发服务器配置
        devServer: {
            
        },
        // 对应的插件
        plugins: [
            new HtmlWebpackPlugin({
                // 用哪个html作为模板
                // 在src目录下创建一个index.html页面当做模板来用
                template: 'index.html',
                hash: true, // 会在打包好的bundle.js后面加上hash串
            }),
            // 拆分后会把css文件放到dist目录下的css/style.css
            new MiniCssExtractPlugin({
                filename: 'css/[name]/[hash].css'   // 指定打包后的css
            }),
        ],
    }
}