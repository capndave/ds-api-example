import mssql from 'mssql'
import path from 'path'
import { IPropValYear } from '../../interfaces'
import logger from '../../logger/logger'

const fileName = path.basename(__filename)

/**
 * Get all protest years for a particular property ID from the database.
 * @async
 * @function getProtestYearsFromDatabase
 * @param { object } pool - A sql connection pool
 * @returns { Promise<number[]> } protestYears
 * @remarks tested
 */
export default async function getProtestYearsFromDatabase(
  propId: number,
  pool: mssql.ConnectionPool
): Promise<IPropValYear[]> {
  try {
    const { recordset } = await pool
      .request()
      .input('prop_id', mssql.Int, propId)
      .execute('ma_get_protest_years_for_prop_id')
    return recordset
  } catch (error) {
    throw new Error(`${fileName} [27]: ${error}`)
  }
}
