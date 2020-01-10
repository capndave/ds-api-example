import { ConnectionPool } from 'mssql'
import { config } from '../settings/settings'
import logger from '../logger/logger'

export default async function(): Promise<ConnectionPool> {
  try {
    return await new ConnectionPool(config).connect()
  } catch (error) {
    logger.error(`Error creating connection pool in mssql.js [16]: ${error}`)
  }
}
