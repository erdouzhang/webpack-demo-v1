const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: {
        index: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']), // 清理 /dist 文件夹
        new HtmlWebpackPlugin({ // 默认生成index.html文件
            title: 'Code Splitting'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};