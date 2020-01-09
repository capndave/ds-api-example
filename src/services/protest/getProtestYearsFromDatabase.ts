import mssql from 'mssql'
import path from 'path'
import logger from '../../logger/logger'

const fileName = path.basename(__filename)

/**
 * Get all protest years for a particular property ID from the database.
 * @async
 * @function getProtestYearsFromDatabase
 * @param { object } pool - A sql connection pool
 * @returns { Promise<number[]> } protestYears
 */
export default async function getProtestYearsFromDatabase(
  propId: number,
  pool: any
): Promise<any> {
  try {
    return await pool
      .request()
      .input('prop_id', mssql.Int, propId)
      .execute('ma_get_protest_years_for_prop_id')
  } catch (error) {
    logger.error(
      `Error fetching data from database in ${fileName} [21]: ${error}`
    )
  }
}
