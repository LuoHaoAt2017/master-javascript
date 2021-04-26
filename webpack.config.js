const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/main.js'),
        gene: path.resolve(__dirname, 'modules/gene/index.js'),
        geology: path.resolve(__dirname, 'modules/geology/index.js')
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['url-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['url-loader']
            },
        ]
    },
    devtool: 'inline-source-map', // 开发环境使用
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
            title: '首页',
            favicon: path.resolve(__dirname, './public/logo.ico'),
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'gene.html',
            title: '基因',
            favicon: path.resolve(__dirname, './public/logo.ico'),
            chunks: ['gene']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'geology.html',
            title: '地质',
            favicon: path.resolve(__dirname, './public/logo.ico'),
            chunks: ['geology']
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        port: 3000,
        hot: true
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '#': path.resolve(__dirname, 'common')
        }
    }
};
