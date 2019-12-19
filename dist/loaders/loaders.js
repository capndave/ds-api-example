const environmentLoader = require('./environment');
const expressLoader = require('./express');
const logger = require('../logger/logger');
module.exports = function (app) {
    environmentLoader();
    logger.info('Environment variables loaded');
    expressLoader(app);
    logger.info('Express settings loaded');
};
//# sourceMappingURL=loaders.js.map