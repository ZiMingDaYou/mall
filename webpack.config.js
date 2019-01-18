/*
 * @Author: 张培培
 * @Github: https: //github.com/ZiMingDaYou
 * @Date: 2019-01-15 14:16:39
 * @LastEditors: 张培培
 * @LastEditTime: 2019-01-17 23:30:17
 */
const path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
var WEBPACK_ENV = process.env.WEBPACK_ENV||'dev';
//获取html-webpack-plugin参数方法,将对应的js文件注入到html文件中
var getHtmlConfig=function(name) {
    return{
        template: './src/view/'+name+'.html',
        filename: 'view/' + name +'.html',
        inject: true,
        hash: true,
        chunks: ['common', name]
    }
}
//webpack config
var config = {
    entry: {
        'common': ['./src/page/common/index.js'],
        'index': ['./src/page/index/index.js'],
        'login': ['./src/page/login/index.js']
    },
    output: {
        filename: 'js/[name].js',  
        path: path.resolve(__dirname, 'dist'),  //文件生成后存储路径 
        publicPath: '/dist'    //文件访问路径
    },
      mode: 'development' ,
      
      //加载webpack的jquery模块
      externals:{
          'jquery' : 'window.jQuery'
      },
      //独立通用模块打包到base.js
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "common",
                    filename:"js/base.js",
                    chunks: "all",
                    minSize: 2    //optimization.splitChunks.cacheGroups.common 配置项中，是 minSize 设置为 1。没有minChunks属性。

                }
            }
        }
    },
    resolve:{
        alias: {
            node_modules:__dirname+'/node_modules',
            util   : __dirname + '/src/util'   ,
            image  : __dirname + '/src/image'  ,
            page   : __dirname + '/src/page'   ,
            service: __dirname + '/src/service',
            view   : __dirname + '/src/view'
        }
    },
    module: {
        rules: [
            { //v2之后把module里的那个loaders改成rules
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader" // 单独打包出CSS，这里配置注意下
            })
        },
        {
            test:/\.(gif|png|jpg|bmp|woff|svg|ttf|eot)\??.*$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 100,  // 把小于50000 byte的文件打包成Base64的格式写入JS  
                        name: 'images/[name].[ext]' // 当大于是使用file-loader将图片打包到images目录下
                    }
                }]
        }
    ]
    },
    plugins: [
        // 单独打包出CSS
        new ExtractTextPlugin('css/[name].css'),
        //html处理模板
        new HtmlWebpackPlugin(getHtmlConfig('index')),
        new HtmlWebpackPlugin(getHtmlConfig('login'))
    ]
     
};
if('dev'=== WEBPACK_ENV){
    config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}
module.exports = config;