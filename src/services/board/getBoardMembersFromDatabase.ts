import logger from '../../logger/logger'
import { IFullNameAndId } from '../../interfaces'
import { ConnectionPool, IResult, TinyInt } from 'mssql'

/**
 * Get the names of all board members from the database.
 * @async
 * @function getAllBoardMemberNamesAndIdsFromDatabase
 * @param { ConnectionPool } pool - A sql connection pool
 * @returns { Promise<IFullNameAndId> } recordset
 * @remarks tested
 */
export async function getAllBoardMemberNamesAndIdsFromDatabase(
  pool: ConnectionPool
): Promise<IFullNameAndId[]> {
  try {
    const { recordset } = await pool
      .request()
      .execute('ma_get_all_board_member_names_and_ids')
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
 * @function getBoardMemberNamesAndIdsFromDatabaseForPanel
 * @param { number } panel
 * @param { ConnectionPool } pool
 * @returns { Promise<IFullNameAndId[] }
 * @remarks tested
 */
export async function getBoardMemberNamesAndIdsFromDatabaseForPanel(
  panel: number,
  pool: ConnectionPool
): Promise<IFullNameAndId[]> {
  try {
    const { recordset } = await pool
      .request()
      .input('panel', TinyInt, panel)
      .execute('ma_get_board_member_names_and_ids_for_panel')
    return recordset
  } catch (error) {
    logger.error(
      `Error fetching data from database in getBoardMembersFromDatabase [44]: ${error}`
    )
  }
}
