import logger from '../../logger/logger'
import sql from 'mssql'
import { IPropId }  from '../../interfaces'

/**
 * Get the prop id's in a panel from the database.
 * @async
 * @function getPropIdsInPanelFromDatabase
 * @param { number } panel
 * @param { ConnectionPool } pool
 * @returns { Promise<IPropId[]> }
 */
export default async function getPropIdsInPanelFromDatabase(
  panel: number,
  pool: any
): Promise<IPropId[]> {
  try {
    const { recordset } = await pool
      .request()
      .input('panel', sql.Int, panel)
      .execute('fa_get_prop_ids_in_panel')
    return recordset
  } catch (error) {
    logger.error(
      `Error fetching propId's in getPropIdsInPanelFromDatabase [25]: ${error}`
    )
  }
}
