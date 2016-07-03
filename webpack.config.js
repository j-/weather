const path = require('path');

module.exports = {
	entry: {
		'bundle': './src/client/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	module: {
		loaders: [
			{
				loader: 'babel',
				include: [
					path.resolve(__dirname, 'src/client'),
				],
				test: /\.jsx?$/,
				query: {
					plugins: ['transform-runtime'],
					presets: ['es2015', 'react'],
				},
			},
		],
	},
	devtool: 'source-map',
};
