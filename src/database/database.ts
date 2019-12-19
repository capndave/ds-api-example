const sql = require('mssql')
const { config } = require('../settings/settings')
const logger = require('../logger/logger')

/**
 *  Set up SQL connection pool
 *  @function
 *  @returns { string } a string indicating
 */
module.exports = async function() {
    try {
      const connection = await sql.connect(config)
      logger.info('SQL connection established')
      return connection
    } catch (error) {
      logger.error(`Error creating connection pool in mssql.js [16]: ${error}`)
    }
  }
}
