import logger from '../../logger/logger'
import path from 'path'
import sql from 'mssql'

const fileName = path.basename(__filename)

 /**
  * Get all protest data for a particular property ID and year from the database.
  * @async
  * @function getProtestDataFromDatabase
  * @param { object } pool - A sql connection pool
  * @returns { Promise<object> }
  */
export default async function getProtestDataFromDatabase(pool: any): Promise<number[]> {
  // TODO: Find correct sp name after db stuff has been figured out
  try {
    return await pool
      .request()
      .input('propId', sql.Int, propId)
      .input('year', sql.Int, year)
      .execute('ma_get_protest_data')
  } catch (error) {
    logger.error(
      `Error fetching data from database in ${fileName} [23]: ${error}`
    )
  }
}