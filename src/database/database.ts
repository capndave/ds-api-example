import * as sql from 'mssql'
import { config } from '../settings/settings'
import logger from '../logger/logger'

/**
 * A module for connecting to a SQL Server database
 * and returning the connection
 * @module database
 * @returns { object } connection
 */

/**
 *  Connects to a SQL Server database and returns connection
 *  @async
 *  @alias module:database
 */
export default async function() {
    try {
      const connection = await sql.connect(config)
      logger.info('SQL connection established')
      return connection
    } catch (error) {
      logger.error(`Error creating connection pool in mssql.js [16]: ${error}`)
    }
  }
