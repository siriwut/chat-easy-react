import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config.js';
import * as appConfig from './src/config/config.js';



export default function(app) {

    webpackConfig
        .entry
        .app
        .unshift('webpack-hot-middleware/client');

    webpackConfig
        .plugins
        .push(new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin());

    let compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        stats: webpackConfig.stats
    }));

    app.use(require("webpack-hot-middleware")(compiler));
}
