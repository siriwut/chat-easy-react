import CoreController from '../controllers/core.controller';

export default function(app) {
    app.get('/', CoreController.index);
}
