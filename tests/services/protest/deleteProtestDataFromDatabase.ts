import path from 'path'
import { ConnectionPool, IResult, Int } from 'mssql'
import logger from '../../../src/logger/logger'

const fileName = path.basename(__filename)

/**
 * Get all protest data for a particular property ID and year from the database.
 * @async
 * @function deleteProtestData
 * @param { ConnectionPool } pool - A sql connection pool
 * @returns { Promise<object> }
 */
export default async function getProtestDataFromDatabase(
  propId: number,
  year: number,
  pool: ConnectionPool
): Promise<void> {
  try {
    const { recordset } = await pool
      .request()
      .input('prop_id', Int, propId)
      .input('prop_val_yr', Int, year)
      .execute('ma_delete_protest_data')
  } catch (error) {
    throw new Error(
      `${fileName} [27]: ${error}`
    )
  }
}
