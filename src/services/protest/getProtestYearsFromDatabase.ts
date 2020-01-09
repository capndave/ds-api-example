import logger from '../../logger/logger'
import path from 'path'
import sql from 'mssql'

const fileName = path.basename(__filename)

 /**
  * Get all protest years for a particular property ID from the database.
  * @async
  * @function getProtestYearsFromDatabase
  * @param { object } pool - A sql connection pool
  * @returns { Promise<number[]> } protestYears
  */
export default async function getProtestYearsFromDatabase(panel: number, pool: any): Promise<number[]> {
  // TODO: Find correct sp name after db stuff has been figured out
  try {
    return await pool
      .request()
      .input('panel', sql.TinyInt, panel)
      .execute('ma_get_protest_years')
  } catch (error) {
    logger.error(
      `Error fetching data from database in ${fileName} [21]: ${error}`
    )
  }
}