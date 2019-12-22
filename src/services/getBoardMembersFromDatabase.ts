const logger = require('../logger/logger'
const sql = require('mssql')

/**
 * A module which gets board members from the database
 * @module getBoardMembersFromDatabase
 */

 /**
  * Get the names of all board members from the database.
  * @async
  * @method all
  * @param { object } pool - A sql connection pool
  * //TODO: actually returns result object @returns { Promise<string[]> }
  */
async function all(pool: any): Promise<[{ full_name: string }]> {
  try {
    return await pool
      .request()
      .execute('ma_get_board_members')
  } catch (error) {
    logger.error(
      `Error fetching data from database in getBoardMembersFromDatabase [23]: ${error}`
    )
  }
}

 /**
  * Get the names of all board members that are expected in a panel from the database.
  * @async
  * @method forPanel
  * @param { number } panel
  * @param { object } pool - A sql connection pool
  * //TODO: actually returns result object @returns { Promise<string[]> }
  */
async function forPanel(panel: number, pool: any): Promise<[{ full_name: string }]> {
  try {
    return await pool
      .request()
      .input('panel', sql.TinyInt, panel)
      .execute('ma_get_board_members_for_panel')
  } catch (error) {
    logger.error(
      `Error fetching data from database in getBoardMembersFromDatabase [44]: ${error}`
    )
  }
}

module.exports = {
  all,
  forPanel
}
