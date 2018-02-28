const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const UglifyWebPackPlugin = require('uglifyjs-webpack-plugin') 

module.exports = {
    mode: 'production',
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        stats: path.resolve(__dirname, 'src/stats.min.js'),
        ascii: path.resolve(__dirname, 'src/ascii.canvas.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']), 
        // new UglifyWebPackPlugin() //压缩js
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: 'dist',
        port: "8000"
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: 'css-loader'
            }
        ]
    }
    

}