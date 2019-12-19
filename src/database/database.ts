const sql = require('mssql')
const { config } = require('../settings/settings')
const logger = require('../logger/logger')

let connection: any

module.exports = {
  /**
   *  Set up SQL connection pool
   *  @function
   *  @returns { string } a string indicating
   */
  connect: async function() {
    try {
      connection = await sql.connect(config)
      logger.info('SQL connection established')
      return 'SQL connection established'
    } catch (error) {
      logger.error(`Error creating connection pool in mssql.js [19]: ${error}`)
    }
  },
  /**
   * Return connection pool
   * @function
   * @returns { object } a sql connection pool
   */
  get: function() {
    return connection
  }
}
