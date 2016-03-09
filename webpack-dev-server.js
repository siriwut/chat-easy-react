import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.js';
import * as appConfig from './src/config.js';

webpackConfig
    .entry
    .app
    .unshift(`webpack-dev-server/client?http://${appConfig.host}`, 'webpack/hot/dev-server');

webpackConfig
    .plugins
    .push(new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin());

let compiler = webpack(webpackConfig),
    server = new webpackDevServer(compiler, {
        contentBase: 'src/public',
        hot: true,
        publicPath: webpackConfig.output.publicPath,
        stats: webpackConfig.stats
    });


server.listen(appConfig.port, function() {
    console.log(`\nwebpack-dev-server connect at port http://${appConfig.host}\n`);
});
