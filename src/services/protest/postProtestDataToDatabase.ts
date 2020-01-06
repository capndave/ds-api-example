const logger = require('../../logger/logger')
const path = require('path')
const sql = require('mssql')
const fileName = path.basename(__filename)

 /**
  * Get all protest years for a particular property ID from the database.
  * @async
  * @function postProtestDataToDatabase
  * @param { object } pool - A sql connection pool
  * @returns { Promise<Protest> }
  */
async function postProtestDataToDatabase(pool: any): Promise<number[]> {
  // TODO: Find correct sp name after db stuff has been figured out
  try {
    return await pool
      .request()
      .execute('ma_post_protest_data')
  } catch (error) {
    logger.error(
      `Error fetching data from database in ${fileName} [21]: ${error}`
    )
  }
}

module.exports = postProtestDataToDatabase