/* eslint-disable filenames/match-regex, import/no-commonjs */

const path = require('path');
// const GhPagesWebpackPlugin = require('gh-pages-webpack-plugin');
const context = path.resolve(__dirname, 'src');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    context,
    entry: './index.js',
    output: {
        // publicPath: '/public',
        path: path.resolve(__dirname, 'dist'),
        filename: 'index-bundle.js'
        // path: '/dist',
        // filename: '[name].js'
    },
    plugins:[
        new UglifyJSPlugin(); 
    ],
    devServer: {
        publicPath: "/",
        contentBase: "./public",
        // hot: true
    },
    module: {
        loaders: [
            {
                test: /\.(jpe?g|gif|png|svg)$/,
                loader: 'file-loader?name=[name].[ext]&publicPath=images/',

            },
            {
                loaders: [
                    'style-loader',
                    'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
                ],
                test: /\.css$/
            },

            // { test: /\.css$/,
            //     loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
            //
            {
                include: path.resolve(__dirname, './src'),
                loader: 'babel-loader',
                query: {
                    plugins: [
                        'transform-react-jsx',
                        [
                            'react-css-modules',
                            {
                                context
                            }
                        ]
                    ]
                },
                test: /\.js$/
            }
        ]
    },
    // TODO publish to github pages
    // plugins: [
    //     new GhPagesWebpackPlugin({
    //         path: './public',
    //         options: {
    //             message: 'Update Home Page',
    //             user: {
    //                 name: 'Jesus Garcia',
    //                 email: 'ctw@ctwhome.com'
    //             }
    //         }
    //     })
    // ],
    // output: {
        //path: './dist/assets/',
        //filename: './javascripts/[name].js',
        //publicPath: '../',

        // filename: './javascripts/[name].js'

        // path: './dist/assets/',
        // publicPath: '/assets/',
        // filename: './javascripts/[name].js'
    // },
    stats: 'minimal'
};
