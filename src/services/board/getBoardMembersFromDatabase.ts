import logger from '../../logger/logger'
import { FullName, FullNameAndId } from '../../models/board/boardMember.model'
import { ConnectionPool, IResult, TinyInt } from 'mssql'

/**
 * A module which gets board members from the database
 * @module getBoardMembersFromDatabase
 */

/**
 * Get the names of all board members from the database.
 * @async
 * @method getAllBoardMemberNamesAndIdsFromDatabase
 * @param { ConnectionPool } pool - A sql connection pool
 * @returns { }
 */
export async function getAllBoardMemberNamesAndIdsFromDatabase(
  pool: ConnectionPool
): Promise<FullNameAndId[]> {
  try {
    const { recordset } = await pool.request().execute('ma_get_board_members')
    return recordset
  } catch (error) {
    logger.error(
      `Error fetching data from database in getBoardMembersFromDatabase [23]: ${error}`
    )
  }
}

/**
 * Get the names of all board members that are expected in a panel from the database.
 * @async
 * @method getBoardMemberNamesAndIdsFromDatabaseForPanel
 * @param { number } panel
 * @param { ConnectionPool } pool
 */
export async function getBoardMemberNamesAndIdsFromDatabaseForPanel(
  panel: number,
  pool: ConnectionPool
): Promise<IResult<any>> {
  try {
    return await pool
      .request()
      .input('panel', TinyInt, panel)
      .execute('ma_get_board_member_names_and_ids_for_panel')
  } catch (error) {
    logger.error(
      `Error fetching data from database in getBoardMembersFromDatabase [44]: ${error}`
    )
  }
}
