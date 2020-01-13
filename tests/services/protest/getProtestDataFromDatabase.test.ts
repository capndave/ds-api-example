import mssql from 'mssql'
import database from '../../../src/database/database'
import getProtestDataFromDatabase from '../../../src/services/protest/getProtestDataFromDatabase'

let pool: mssql.ConnectionPool

beforeAll(async () => {
  pool = await database()
})

afterAll(async () => {
  pool.close()
})

describe('the getProtestDataFromDatabase function', () => {
  it('is a function', () => {
    expect(typeof getProtestDataFromDatabase).toBe('function')
  })
  it('returns an array of objects with a prop_val_yr parameter', async () => {
    try {
      const recordset: any = await getProtestDataFromDatabase(
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
