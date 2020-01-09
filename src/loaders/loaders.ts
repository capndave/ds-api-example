const environmentLoader = require('./environment')
const expressLoader = require('./express')
const tlsLoader = require('./tls')
import logger from '../logger/logger'

export default function loaders(app: Express.Application) {
    environmentLoader()
    logger.info('Environment variables loaded')
    tlsLoader(app)
    logger.info('TLS certificates loaded')
    expressLoader(app)
    logger.info('Express settings loaded')
}