import mssql from 'mssql'
import { config } from '../settings/settings'
import logger from '../logger/logger'

export default async function(): Promise<mssql.ConnectionPool> {
    try {
      return await (new mssql.ConnectionPool(config)).connect()
    } catch (error) {
      logger.error(`Error creating connection pool in mssql.js [16]: ${error}`)
    }
  }
