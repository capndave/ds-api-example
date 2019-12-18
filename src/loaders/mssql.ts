const sql = require('mssql')
const { config } = require('../settings/settings')
const logger = require('../logger/logger')

// Set up SQL connection pool //
module.exports = async function() {
  try {
    let pool: any = await sql.connect(config)
    return await pool.connect()
  } catch (error) {
    logger.error(`Error creating connection pool in mssql.js [11]: ${error}`)
  }
}
