import logger from '../../logger/logger'
import sql from 'mssql'
import { PropId }  from '../../models/board/boardMember.model'

/**
 * A module which gets the property ids from the database
 * @module getPropIdsInPanelFromDatabase
 */

/**
 * Get the prop id's in a panel from the database.
 * @alias module:getPropIdsInPanelFromDatabase
 */
export default async function getPropIdsInPanelFromDatabase(
  panel: number,
  pool: any
): Promise<PropId[]> {
  try {
    const { recordset } = await pool
      .request()
      .input('panel', sql.Int, panel)
      .execute('fa_get_prop_ids_in_panel')
    return recordset
  } catch (error) {
    logger.error(
      `Error fetching propId's in getPropIdsInPanelFromDatabase [7]: ${error}`
    )
  }
}
