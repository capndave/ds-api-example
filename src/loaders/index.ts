const environmentLoader = require('./environment')
const expressLoader = require('./express')
const logger = require('../logger') 

module.exports = function(app) {
    // environmentLoader
    expressLoader(app)
    console.log('Express settings loaded')

    return app
}