const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');;

module.exports ={
    entry:'./src/index.js',
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    mode: 'production',
    module:{
        rules:[

        ]
    },
    module: {
        rules:[{
            test: /\.css$/i,
            use:[MiniCssExtractPlugin.loader, 'css-loader'],
        }]
    },
    plugins:[
        new HtmlWebpackPlugin ({
            inject: true,
            template:'./public/index.html',
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin()
    ]
};