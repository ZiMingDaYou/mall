const path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = {
    entry: {
        'index': ['./src/page/index/index.js'],
        'login': ['./src/page/login/index.js']
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
      mode: 'development' ,
      
      //加载webpack的jquery模块
      externals:{
          'jquery' : 'window.jQuery'
      },
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
    module: {
        rules: [{ //v2之后把module里的那个loaders改成rules
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader" // 单独打包出CSS，这里配置注意下
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css')
    ]
     
};

module.exports = config;