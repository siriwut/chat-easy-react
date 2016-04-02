import express from 'express';
import path from 'path';
import routes from '../server/routes/core.route';
import webpackDevMiddleware from '../../webpack-dev-middleware';

const app = express();


app.use(express.static(path.resolve('./src/client/public')));

//bind router
routes(app);

//bind webpack-dev-middleware
webpackDevMiddleware(app);

export default app;
