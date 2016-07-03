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
		extensions: ['', '.js'],
	},
	devtool: 'source-map',
};
