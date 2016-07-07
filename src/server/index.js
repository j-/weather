const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('../../webpack.config.js');
const compiler = webpack(config);
const middleware = webpackDevMiddleware(compiler, {
	contentBase: path.resolve(__dirname, '../../dist'),
	publicPath: '/',
	lazy: false,
	stats: {
		colors: true,
	},
});

const app = express();

app.use(
	express.static(
		path.resolve(__dirname, '../../dist')
	)
);

app.use(middleware);

app.listen(8080);
