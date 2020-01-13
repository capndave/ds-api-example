import { Application } from "express"

const fs = require('fs')
const { promisify } = require('util')
const logger = require('../logger/logger')

/**
 * Add tls certificates to app options
 * @param {object} app - Express app
 */
module.exports = function(app: Application) {
  const readFilePromise = promisify(fs.readFile)
  const getKey = readFilePromise('./tls/key.pem', {})
  const getCert = readFilePromise('./tls/cert.pem', {})

  Promise.all([getKey, getCert])
    .then(([key, cert]) => {
      app.set(key, cert)
    })
    .catch(e => {
      logger.error(`[app.js: 32]: Error reading files: ${e}`)
    })
}
