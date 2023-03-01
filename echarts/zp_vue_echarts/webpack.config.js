const HtmlWebpackPlugin  = require('html-webpack-plugin')
const path               = require('path')
const webpack            = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin  = require("extract-text-webpack-plugin")

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                    // other vue-loader options go here
                }
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {

    module.exports.devtool = '#source-map'

    module.exports.entry = {
        bundle: './src/main.js',
        vue: 'vue'
    }

    module.exports.module.rules.unshift({
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
        })
    });

    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),

        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            comments: false,
            compress: {
                warnings: false
            }
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),

        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true,
                minifyJS: true
            }
        }),

        new CleanWebpackPlugin([
            // 'dist/css',
            'dist/js',
            'dist/*.*'
        ]),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['bundle', 'vue'],
            minChunks: Infinity
        }),

        new ExtractTextPlugin('css/[name].css')
    ])
} else if(process.env.NODE_ENV === 'development') {

    module.exports.module.rules.unshift({
        test: /\.css$/,
        loader: 'style-loader!css-loader'
    });

    module.exports.plugins = (module.exports.plugins || []).concat([
        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename: 'index.html',
        })
    ])
}
