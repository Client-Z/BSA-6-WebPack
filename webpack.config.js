var webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	context: __dirname,
	devtool: "eval-source-map",
	entry: "./src/js/main.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	module:{
		rules: [
			{     		
				test: /\.js$/, 
				enforce: "pre", 
				exclude: /node_modules/,
				use: [ 
					{
	                    loader: 'babel-loader',
	                    options: {
	                        presets: ['es2015']
                    	}
                    },
					{
						loader: 'jshint-loader'
					}
				]
      		},
			
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},

			{
				test: /\.scss$/,
				enforce: "pre",
				use: [{
					    loader: "style-loader" // creates style nodes from JS strings 
					}, {
					    loader: "css-loader" // translates CSS into CommonJS 
					}, {
						loader: 'postcss-loader'	
					}, {
					    loader: "sass-loader" // compiles Sass to CSS 
				}]
			},

			{
          		test: /\.(png|svg|jpg|gif)$/,
          		use: [ 'file-loader' ]
        	}
		]
	},

	plugins: [new UglifyJsPlugin({
		minimize: true,
		extractComments: true,
		compress: {
			warnings: false
		},
		output: {
			comments: false
		}
	}), require('autoprefixer')],

	devServer: {
		inline:true,
		port: 8081
	}
	
}