var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');
 
module.exports = {
     output: {
         path: './bin',
         filename: 'app2.bundle.js',
         publicPath: '/bin2/'
     },
     entry: [
        './index.jsx'
    ],
     plugins: [
     ],
      module: {
         loaders: [{
             test: /\.(js|jsx)?$/,
             exclude: /node_modules/,
             loaders: ['react-hot', 'babel-loader'],
         },
         {
             test: /\.(css|scss)?$/,
             exclude: /node_modules/,
             loaders: ['style-loader','css-loader','sass-loader'],
         }
         ]
     },
     resolve: {
         extensions :  ["", ".jsx", ".js"]
     }
 };