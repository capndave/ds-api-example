import logger from '../../logger/logger'
import { FullName, FullNameAndId } from '../../models/board/boardMember.model'
import { ConnectionPool } from 'mssql'

/**
 * A module which gets board members from the database
 * @module getBoardMembersFromDatabase
 */

/**
 * Get the names of all board members from the database.
 * @async
 * @method all
 * @param { object } pool - A sql connection pool
 */
export async function getAllBoardMemberNamesAndIdsFromDatabase(
  pool: IPool
): any  {
  try {
    return await pool.request().execute('ma_get_board_members')
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
 */
export async function getBoardMemberNamesAndIdsFromDatabaseForPanel(
  panel: number,
  pool: any
): Promise<any> {
  try {
    return await pool
      .request()
      .input('panel', sql.TinyInt, panel)
      .execute('ma_get_board_member_names_and_ids_for_panel')
  } catch (error) {
    logger.error(
      `Error fetching data from database in getBoardMembersFromDatabase [44]: ${error}`
    )
  }
}
