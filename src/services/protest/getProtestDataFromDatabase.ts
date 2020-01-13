import path from 'path'
import { ConnectionPool, Int } from 'mssql'
import logger from '../../logger/logger'

const fileName = path.basename(__filename)

/**
 * Get all protest data for a particular property ID and year from the database.
 * @async
 * @function getProtestDataFromDatabase
 * @param { ConnectionPool } pool - A sql connection pool
 * @returns { Promise<object> }
 */
export default async function getProtestDataFromDatabase(
  propId: number,
  year: number,
  pool: ConnectionPool
): Promise<number[]> {
  try {
    const { recordset } = await pool
      .request()
      .input('prop_id', Int, propId)
      .input('prop_val_yr', Int, year)
      .execute('ma_get_protest_data')
    return recordset
  } catch (error) {
    logger.error(
      `Error fetching data from database in ${fileName} [23]: ${error}`
    )
  }
}
