const webpack =require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].[chunkhash].js',
        publicPath: './',
        chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader' // es6，es7，es8语法转es5，option配置见.babelrc
              }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*/**']),
        new webpack.BannerPlugin('created by chhuangxiaolong@jd.com'),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          minChunks: function (module) {
            // any required modules inside node_modules are extracted to vendor
            return (
              module.resource &&
              /\.js$/.test(module.resource) &&
              module.resource.indexOf(
                path.join(__dirname, '../node_modules')
              ) === 0
            )
          }
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'manifest',
          chunks: ['vendor']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname + '/index.html')
        })
    ]
}
