var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  },
	 module: {
	  loaders: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel-loader',
	      query: {
	        presets:["es2015","react"]
	      }
	    },
	    {//css文件解析器
	        test: /\.css$/,
	        loader: "style-loader!css-loader"
	      },
	      {//scss文件解析器
	        test: /\.scss$/,
	        loader: "style-loader!css-loader!sass-loader"
	      },
	  ]
},plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};