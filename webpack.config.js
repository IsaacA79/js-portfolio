const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');;

module.exports ={
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true
    },
    resolve:{
        extensions:['js']
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