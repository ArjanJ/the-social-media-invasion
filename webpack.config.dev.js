const path 								= require('path');
const webpack							= require('webpack');
const htmlWebpackPlugin 	= require('html-webpack-plugin');
const autoprefixer 				= require('autoprefixer');

module.exports = {
	devtool: 'cheap-eval-source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/dev-server',
		'./src/app/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
			template: './src/index.html'
		}),
		new webpack.ProvidePlugin({
			'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
		})
	],
	module: {
		preLoaders: [{
			test: /\.js$/,
			loaders: ['eslint-loader'],
			exclude: /node_modules/
		}],
		loaders: [{
			test: /\.scss$/,
			loaders: ['style', 'css', 'postcss', 'sass']
		}, {
			test: /\.js$/,
			loaders: ['babel'],
			include: path.join(__dirname, 'src')
		}, {
			test: /\.(jpe?g|png|gif|svg)$/i,
			loaders: [
				'url?limit=8192',
				'img'
			],
			exclude: /node_modules/
		}]
	},
	devServer: {
		contentBase: './dist',
		hot: true
	},
	postcss: function() {
		return [autoprefixer]
	}
};