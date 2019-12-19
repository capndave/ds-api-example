const logger = require('../logger/logger'
const sql = require('mssql')

/**
 * A module which gets the property ids from the database
 * @module getBoardMembersFromDatabase
 */

 /**
  * Get the prop id's in a panel from the database.
  * @alias module:getBoardMembersFromDatabase
  */
async function getBoardMembersFromDatabase(pool: any): Promise<[{ full_name: string }]> {
  try {
    return await pool
      .request()
      .execute('ma_get_board_members')
  } catch (error) {
    logger.error(
      `Error fetching data from database in getBoardMembersFromDatabase [20]: ${error}`
    )
  }
}

module.exports = getBoardMembersFromDatabase
