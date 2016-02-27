const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: false,
    historyApiFallback: true,
    quiet: true
}).listen(3000, 'localhost', (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server started');
        console.log('Listening at localhost:3000');
    }
});