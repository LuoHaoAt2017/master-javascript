const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/main.js')
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
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.(css|scss)$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: ["style-loader", "css-loader", 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['url-loader'],
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['url-loader']
            },
            {
                test: /\.md$/,
                use: "raw-loader"
            },
        ]
    },
    devtool: 'inline-source-map', // 开发环境使用
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
            favicon: path.resolve(__dirname, './public/logo.ico')
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        port: 3000,
        hot: true
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
};
