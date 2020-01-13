import path from 'path'
import sql from 'mssql'
import logger from '../../logger/logger'
import { ConnectionPool } from 'mssql'

const fileName = path.basename(__filename)

 /**
  * Get all protest data for a particular property ID and year from the database.
  * @async
  * @function getProtestDataFromDatabase
  * @param { ConnectionPool } pool - A sql connection pool
  * @returns { Promise<object> }
  */
export default async function getProtestDataFromDatabase(propId: number, year: number, pool: ConnectionPool): Promise<number[]> {
  // TODO: Find correct sp name after db stuff has been figured out
  try {
    const { recordset } = await pool
      .request()
      .input('propId', sql.Int, propId)
      .input('year', sql.Int, year)
      .execute('ma_get_protest_data')
    return recordset
  } catch (error) {
    logger.error(
      `Error fetching data from database in ${fileName} [23]: ${error}`
    )
  }
}