const environmentLoader = require('./environment')
const expressLoader = require('./express')
const tlsLoader = require('./tls')
const logger = require('../logger/logger') 

module.exports = function(app) {
    environmentLoader()
    logger.info('Environment variables loaded')
    tlsLoader(app)
    logger.info('TLS certificates loaded')
    expressLoader(app)
    logger.info('Express settings loaded')
}