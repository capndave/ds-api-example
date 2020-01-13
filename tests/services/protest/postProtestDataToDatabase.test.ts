import { ConnectionPool } from 'mssql'
import database from '../../../src/database/database'
import postProtestDataToDatabase from '../../../src/services/protest/postProtestDataToDatabase'

let pool: ConnectionPool

beforeAll(async () => {
  pool = await database()
})

afterAll(async () => {
  pool.close()
})

describe('the postProtestDataToDatabase function', () => {
  it('is a function', () => {
    expect(typeof postProtestDataToDatabase).toBe('function')
  })
  it('returns an array of objects with a prop_val_yr parameter', async () => {
    try {
      const recordset: any = await postProtestDataToDatabase(
        897594,
        2019,
        pool
      )
      expect(recordset[0].hasOwnProperty('prop_val_yr')).toBe(true)
    } catch (e) {
      throw e
    }
  })
})
