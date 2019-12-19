const sql = require('mssql')
const { config } = require('../settings/settings')
const logger = require('../logger/logger')

// Set up SQL connection pool //
module.exports = async function() {
  try {
    return await sql.connect(config)
  } catch (error) {
    logger.error(`Error creating connection pool in mssql.js [10]: ${error}`)
  }
}
