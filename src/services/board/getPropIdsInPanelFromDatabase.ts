import logger from '../logger/logger'
import sql from 'mssql'

/**
 * A module which gets the property ids from the database
 * @module getPropIdsInPanelFromDatabase
 */

 /**
  * Get the prop id's in a panel from the database.
  * @alias module:getPropIdsInPanelFromDatabase
  */
export default async function getPropIdsInPanelFromDatabase(
{ panel, pool }: { panel: number; pool: any; }  ): Promise<[{ prop_id: number }]> {
  try {
    return await pool
      .request()
      .input('panel', sql.Int, panel)
      .execute('fa_get_prop_ids_in_panel')
  } catch (error) {
    logger.error(
      `Error fetching propId's in getPropIdsInPanelFromDatabase [7]: ${error}`
    )
  }
}