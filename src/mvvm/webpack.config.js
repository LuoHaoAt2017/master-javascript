const resolve = require('path').resolve;

module.exports = {
    mode: 'development',
    entry: resolve(__dirname, './index.js'),
    output: {
        filename: "index.bundle.js",
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
    ],
    devServer: {
        port: 9000
    }
}