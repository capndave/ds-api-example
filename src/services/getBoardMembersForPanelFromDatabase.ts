const logger = require('../logger/logger'
const sql = require('mssql')

/**
 * A module which gets the board members for a panel from the database
 * @module getBoardMembersForPanelFromDatabase
 */

 /**
  * Get the board members for a particular panel from the database.
  * @alias module:getBoardMembersForPanelFromDatabase
  */
async function getBoardMembersForPanelFromDatabase(panel: number, pool: any): Promise<[{ full_name: string }]> {
  try {
    return await pool
      .request()
      .input('panel', sql.TinyInt, panel)
      .execute('ma_get_board_members_for_panel')
  } catch (error) {
    logger.error(
      `Error fetching data from database in getBoardMembersForPanelFromDatabase [21]: ${error}`
    )
  }
}

module.exports = getBoardMembersForPanelFromDatabase
