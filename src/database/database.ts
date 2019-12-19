const sql = require('mssql')
const { config } = require('../settings/settings')
const logger = require('../logger/logger')

/**
 * A module for connecting to a SQL Server database
 * and returning the connection
 * @module database
 * @returns { object } connection
 */

/**
 *  Connects to a SQL Server database and returns connection
 *  @async
 *  @alias module:database
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
