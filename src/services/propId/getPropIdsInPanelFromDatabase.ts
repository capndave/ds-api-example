import sql from 'mssql'
import { basename } from 'path'
import { IPropId } from '../../interfaces'

const fileName = basename(__filename)

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
    throw new Error(`${fileName} [28]: ${error}`)
  }
}
