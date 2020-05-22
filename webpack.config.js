const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
     module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
      	 test: /\.js$/,
         exclude: /(node_modules|bower_components)/,
         use: {
         loader: 'babel-loader',
      }
    }

     ],
     
   }, devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 9000
  },
mode: "development"
};