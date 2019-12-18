const environmentLoader = require('./environment')
const expressLoader = require('./express')
const logger = require('../logger') 

module.exports = function(app) {
    environmentLoader()
    logger.info('Environment variables loaded')
    expressLoader(app)
    logger.info('Express settings loaded')
}