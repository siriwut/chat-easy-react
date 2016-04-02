import server from './src/config/httpServer.js';
import * as appConfig from './src/config/config.js';


server.listen(appConfig.port, () => {
	console.log(`\nwebpack-dev-server connect at port http://${appConfig.host}\n`);
});
