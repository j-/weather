const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../../webpack.config.js');

config.entry.bundle.unshift('webpack-dev-server/client?http://localhost:8080/');
config.output.path = '/';

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
	contentBase: path.resolve(__dirname, '../../dist'),
});

server.listen(8080);
