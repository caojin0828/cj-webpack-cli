const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 拆分css样式的插件
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let MiniCssExtractPlugin  = require('mini-css-extract-plugin');

module.exports = {
    // 模式配置
    mode: 'development',     
    // 入口 
    entry: path.resolve(__dirname, './src/main.js'),
    // 出口
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
    },
     
    // 模块解析
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs|ts|tsx)$/,
                loaders: 'babel-loader',
                // include: /src/,          // 只转化src目录下的js
                exclude: /node_modules/,  // 排除掉node_modules，优化打包速度
            },
            {
                test: /\.(scss|sass)$/,
                // use: ExtractTextWebpackPlugin.extract({
                //     fallback: 'style-loader',
                //     use: ['css-loader','sass-loader']
                // }),
                use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'],
                exclude: /node_modules/,  // 排除掉node_modules，优化打包速度
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                // use: ExtractTextWebpackPlugin.extract({
                //     fallback: 'style-loader',
                //     use: ['css-loader']
                // }),
                exclude: /node_modules/,  // 排除掉node_modules，优化打包速度
            },
            {
                test: /\.html?$/,
                
            }
        ]
    },
    // 解析
    resolve: {
        // 别名
        alias: {
          page:path.join(__dirname,'src/page'),
          component:path.join(__dirname,'src/components'),
        //   actions:path.join(__dirname,'src/redux/actions'),
        //   reducers:path.join(__dirname,'src/redux/reducers'),
        },
        // 省略后缀
        extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.less']
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
        // new ExtractTextWebpackPlugin('css/style.css'),
        new MiniCssExtractPlugin({
            filename: 'css/a.css'   // 指定打包后的css
        })
    ],             
}