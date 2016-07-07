const path = require('path');

module.exports = {
	entry: {
		'bundle': ['./src/client/index.jsx'],
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
			},
		],
	},
	devtool: 'source-map',
};
