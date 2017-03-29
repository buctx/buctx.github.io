/* webpack.config.js
 * @ Cong Min
 */
// 运行 `npm install webpack extract-text-webpack-plugin html-webpack-plugin --save-dev`
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/js/main.js'],
        // 第三方库文件单独打包
        lib: ['vue']
    },
    output: {
        path: './dist',
        filename: '[name].js?[chunkhash:8]'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('lib', 'lib.js?[chunkhash:8]'),
        new HtmlPlugin({
            // html模板文件
            template: './src/index.html',
            // 输出文件
            filename: '../index.html',
            // chunks表示要引用entry里面的入口
            chunks: ['app', 'lib'],
            // script插入的标签
            inject: 'body'
        }),
        new ExtractTextPlugin('[name].css?[contenthash:8]'),
        // 配置生产环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [{
            // run `SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ npm install style-loader css-loader sass-loader node-sass compass-mixins --save-dev`
            test: /\.scss$/, loader: ExtractTextPlugin.extract(['css','sass'])
        },  {
            test: /\.(png|jpg|gif)$/, loader: 'url', query: { limit: 8192, name: '[path][name].[ext]?[hash:8]' }
        },  {
            // run `npm install url-loader --save-dev`
            test: /\.(eot|woff|woff2|ttf|svg)$/, loader: 'url', query: { limit: 8192, prefix: 'font/', name: '[path][name].[ext]?[hash:8]'}
        }],
        resolve: {
            extensions: ['', '.js']
        }
    }
};