import path from 'path';

class CoreController {
    index(req, res) {
        res.sendFile(path.resolve('./src/client/public'));
    }
}


export default new CoreController();
